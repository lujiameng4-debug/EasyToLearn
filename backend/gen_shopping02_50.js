import fs from 'fs';

function parseWords(sentence) {
  return sentence.split(/\s+/).map(w => {
    const m = w.match(/^([\w'-]+)(.*)$/);
    const obj = { word: m ? m[1] : w };
    if (m && m[2]) obj.punctuation = m[2];
    return obj;
  });
}

function sliceWords(words, start, end) {
  return words.slice(start, end + 1).map(({ word, punctuation }) => {
    const o = { word };
    if (punctuation) o.punctuation = punctuation;
    return o;
  });
}

function validateSentence(id, chinese, english_full, components, analysis) {
  const words = parseWords(english_full);
  const lastIdx = words.length - 1;
  if (!words[lastIdx].punctuation) words[lastIdx].punctuation = '.';
  const issues = [];

  for (const c of components) {
    if (c[1] >= words.length || c[0] < 0) {
      issues.push(`component ${c[2]} [${c[0]},${c[1]}] vs len ${words.length}`);
    }
  }
  const covered = new Set();
  for (const c of components) {
    for (let i = c[0]; i <= c[1]; i++) covered.add(i);
  }
  if (covered.size !== words.length || Math.min(...covered) !== 0 || Math.max(...covered) !== lastIdx) {
    issues.push(`coverage ${covered.size}/${words.length}, max ${Math.max(...covered)} vs ${lastIdx}`);
  }
  return { id, issues, len: words.length, words: words.map((w, j) => j + ':' + w.word).join(' ') };
}

function buildSentence(id, chinese, english_full, components, analysis) {
  const words = parseWords(english_full);
  const lastIdx = words.length - 1;
  if (!words[lastIdx].punctuation) words[lastIdx].punctuation = '.';

  const builtComponents = components.map(c => ({
    start: c[0],
    end: c[1],
    label: c[2],
    phonetic: c[3],
    translation: c[4],
    subComponents: [{ startIndex: 0, words: sliceWords(words, c[0], c[1]) }]
  }));

  for (const comp of builtComponents) {
    if (comp.end >= words.length || comp.start < 0) {
      throw new Error(`Index error in ${id}: component ${comp.label} [${comp.start},${comp.end}] vs len ${words.length}`);
    }
  }

  const covered = new Set();
  for (const c of builtComponents) {
    for (let i = c.start; i <= c.end; i++) covered.add(i);
  }
  if (covered.size !== words.length || Math.min(...covered) !== 0 || Math.max(...covered) !== lastIdx) {
    throw new Error(`Coverage error in ${id}: covered ${covered.size}/${words.length}`);
  }

  return { id, chinese, english_full, words, components: builtComponents, analysis };
}

const data = [
  // s100 - user example
  [
    "这家旗舰店展示了融合前卫美学与可持续材料的独家系列",
    "The flagship store showcases an exclusive collection that blends avant-garde aesthetics with sustainable materials.",
    [[0,2,"主语","/ðə/ /ˈflægˌʃɪp/ /stɔːr/","这家旗舰店"],[3,3,"谓语","/ˈʃoʊˌkeɪsɪz/","展示了"],[4,13,"宾语","/æn/ /ɪkˈskluːsɪv/ /kəˈlɛkʃən/ /ðæt/ /blɛndz/ /ˌævɒnˈgɑːrd/ /ɛsˈθɛtɪks/ /wɪð/ /səˈsteɪnəbəl/ /məˈtɪəriəlz/","融合前卫美学与可持续材料的独家系列"]],
    [{ type: "品牌词汇", text: "flagship store (旗舰店), exclusive collection (独家系列), avant-garde aesthetics (前卫美学), sustainable materials (可持续材料)" }]
  ],
  [
    "该购物中心的主力店策略依赖引入知名奢侈品牌以提升整体定位",
    "The shopping mall's anchor-tenant strategy relies on securing prestigious luxury brands to elevate its overall positioning.",
    [[0,4,"主语","/ðə/ /ˈʃɒpɪŋ/ /mɔːl/ /ˈæŋkər-/ /ˈtɛnənt/ /ˈstrætədʒi/","该购物中心的主力店策略"],[5,5,"谓语","/rɪˈlaɪz/","依赖"],[6,15,"宾语","/ɒn/ /sɪˈkjʊərɪŋ/ /prɛˈstɪdʒəs/ /ˈlʌgʒəri/ /brændz/ /tuː/ /ˈɛləveɪt/ /ɪts/ /ˈoʊvərɔːl/ /ˌpɒzɪˈʃənɪŋ/","引入知名奢侈品牌以提升整体定位"]],
    [{ type: "商场运营", text: "anchor tenant (主力店), prestigious luxury brand (知名奢侈品牌), overall positioning (整体定位)" }]
  ],
  [
    "品牌授权协议使区域零售商能够在严格质量控制下分销国际知名产品",
    "Brand licensing agreements enable regional retailers to distribute internationally recognized products under strict quality controls.",
    [[0,2,"主语","/brænd/ /ˈlaɪsənsɪŋ/ /əˈgriːmənts/","品牌授权协议"],[3,3,"谓语","/ɪˈneɪbəl/","使……能够"],[4,5,"宾语","/ˈriːdʒənəl/ /ˈriːteɪlərz/","区域零售商"],[6,14,"宾补","/tuː/ /dɪˈstrɪbjuːt/ /ˌɪntərˈnæʃənəli/ /ˈrɛkəgnaɪzd/ /ˈprɒdʌkts/ /ˈʌndər/ /strɪkt/ /ˈkwɒlɪti/ /kənˈtroʊlz/","在严格质量控制下分销国际知名产品"]],
    [{ type: "品牌授权", text: "licensing agreement (授权协议), quality control (质量控制), internationally recognized (国际知名的)" }]
  ],
  [
    "这家高端奥特莱斯商场吸引寻求以折扣价购买正品设计师商品的精明购物者",
    "The premium outlet mall attracts savvy shoppers seeking authentic designer merchandise at discounted prices.",
    [[0,3,"主语","/ðə/ /ˈpriːmiəm/ /ˈaʊtˌlɛt/ /mɔːl/","这家高端奥特莱斯商场"],[4,4,"谓语","/əˈtrækts/","吸引"],[5,6,"宾语","/ˈsævi/ /ˈʃɒpərz/","精明的购物者"],[7,13,"定语(现在分词)","/ˈsiːkɪŋ/ /ɔːˈθɛntɪk/ /dɪˈzaɪnər/ /ˈmɜːrtʃənˌdaɪz/ /æt/ /dɪsˈkaʊntɪd/ /ˈpraɪsɪz/","寻求以折扣价购买正品设计师商品"]],
    [{ type: "奥特莱斯", text: "outlet mall (奥特莱斯商场), savvy shopper (精明购物者), designer merchandise (设计师商品)" }]
  ],
  [
    "战略性租户组合优化确保购物中心内时尚、餐饮与娱乐业态的平衡搭配",
    "Strategic tenant-mix optimization ensures a balanced blend of fashion, dining, and entertainment offerings within the shopping center.",
    [[0,3,"主语","/strəˈtiːdʒɪk/ /ˈtɛnənt-mɪks/ /ˌɒptɪməˈzeɪʃən/","战略性租户组合优化"],[4,4,"谓语","/ɪnˈʃʊrz/","确保"],[5,16,"宾语","/ə/ /ˈbælənst/ /blɛnd/ /ɒv/ /ˈfæʃən/ /ˈdaɪnɪŋ/ /ænd/ /ˌɛntərˈteɪnmənt/ /ˈɒfərɪŋz/ /wɪˈðɪn/ /ðə/ /ˈʃɒpɪŋ/ /ˈsɛntər/","购物中心内时尚、餐饮与娱乐业态的平衡搭配"]],
    [{ type: "租户管理", text: "tenant mix (租户组合), balanced blend (平衡搭配), shopping center (购物中心)" }]
  ],
  [
    "品牌传承叙事贯穿零售体验的每个触点，从包装到店内陈列皆然",
    "The brand's heritage narrative is woven into every touchpoint of the retail experience, from packaging to in-store displays.",
    [[0,3,"主语","/ðə/ /brændz/ /ˈhɛrɪtɪdʒ/ /ˈnærətɪv/","品牌传承叙事"],[4,7,"谓语(被动)","/ɪz/ /ˈwoʊvən/ /ˈɪntuː/ /ˈɛvri/","贯穿每个"],[8,12,"宾语","/ˈtʌtʃpɔɪnt/ /ɒv/ /ðə/ /ˈriːteɪl/ /ɪkˈspɪəriəns/","零售体验的触点"],[13,17,"范围状语","/frɒm/ /ˈpækɪdʒɪŋ/ /tuː/ /ɪn-stɔːr/ /dɪˈspleɪz/","从包装到店内陈列"]],
    [{ type: "品牌叙事", text: "heritage narrative (传承叙事), touchpoint (触点), in-store display (店内陈列)" }]
  ],
  [
    "商场重新定位计划将老化综合体转型为吸引富裕都市专业人士的生活方式目的地",
    "Mall repositioning initiatives transformed the aging complex into a lifestyle destination appealing to affluent urban professionals.",
    [[0,2,"主语","/mɔːl/ /ˌriːpəˈzɪʃənɪŋ/ /ɪˈnɪʃətɪvz/","商场 repositioning 计划"],[3,3,"谓语","/trænsˈfɔːrmd/","将……转型"],[4,6,"宾语","/ðə/ /ˈeɪdʒɪŋ/ /ˈkɒmplɛks/","老化综合体"],[7,15,"宾补","/ˈɪntuː/ /ə/ /ˈlaɪfstaɪl/ /ˌdɛstɪˈneɪʃən/ /əˈpiːlɪŋ/ /tuː/ /ˈæfluənt/ /ˈɜːrbən/ /prəˈfɛʃənəlz/","为吸引富裕都市专业人士的生活方式目的地"]],
    [{ type: "商场转型", text: "repositioning (重新定位), lifestyle destination (生活方式目的地), affluent urban professional (富裕都市专业人士)" }]
  ],
  [
    "防伪检测技术保护奢侈品牌免受未经授权的仿冒产品造成的声誉损害",
    "Counterfeit detection technologies protect luxury brands from reputational damage caused by unauthorized imitation products.",
    [[0,2,"主语","/ˈkaʊntərfɪt/ /dɪˈtɛkʃən/ /tɛkˈnɒlədʒiz/","防伪检测技术"],[3,3,"谓语","/prəˈtɛkt/","保护"],[4,5,"宾语","/ˈlʌgʒəri/ /brændz/","奢侈品牌"],[6,13,"介词宾语","/frɒm/ /ˌrɛpjuːˈteɪʃənəl/ /ˈdæmɪdʒ/ /kɔːzd/ /baɪ/ /ʌnˈɔːθəraɪzd/ /ˌɪmɪˈteɪʃən/ /ˈprɒdʌkts/","免受未经授权仿冒产品造成的声誉损害"]],
    [{ type: "品牌保护", text: "counterfeit detection (防伪检测), reputational damage (声誉损害), imitation product (仿冒产品)" }]
  ],
  [
    "零售寄售模式使百货公司能够在不承担全部库存风险的情况下引入独立品牌精品店",
    "The retail concession model allows department stores to host independent brand boutiques without assuming full inventory risk.",
    [[0,3,"主语","/ðə/ /ˈriːteɪl/ /kənˈsɛʃən/ /ˈmɒdəl/","零售寄售模式"],[4,4,"谓语","/əˈlaʊz/","使……能够"],[5,6,"宾语","/dɪˈpɑːrtmənt/ /stɔːrz/","百货公司"],[7,16,"宾补","/tuː/ /hoʊst/ /ˌɪndɪˈpɛndənt/ /brænd/ /buːˈtiːks/ /wɪˈðaʊt/ /əˈsjuːmɪŋ/ /fʊl/ /ˈɪnvəntɔːri/ /rɪsk/","引入独立品牌精品店而不承担全部库存风险"]],
    [{ type: "寄售模式", text: "concession model (寄售模式), brand boutique (品牌精品店), inventory risk (库存风险)" }]
  ],
  [
    "商场内的体验式零售区域延长顾客停留时间并深化品牌情感联结",
    "Experiential retail zones within the mall encourage extended dwell times and foster deeper emotional connections with brands.",
    [[0,5,"主语","/ɪkˈspɪəriənʃəl/ /ˈriːteɪl/ /zoʊnz/ /wɪˈðɪn/ /ðə/ /mɔːl/","商场内的体验式零售区域"],[6,6,"谓语1","/ɪnˈkɜːrɪdʒ/","延长"],[7,9,"宾语1","/ɪkˈstɛndɪd/ /dwɛl/ /taɪmz/","停留时间"],[10,10,"连词","/ænd/","并"],[11,11,"谓语2","/ˈfɒstər/","深化"],[12,16,"宾语2","/ˈdiːpər/ /ɪˈmoʊʃənəl/ /kəˈnɛkʃənz/ /wɪð/ /brændz/","与品牌的情感联结"]],
    [{ type: "体验零售", text: "experiential retail (体验式零售), dwell time (停留时间), emotional connection (情感联结)" }]
  ],
  [
    "品牌排他性条款禁止竞争品牌在该旗舰店指定半径范围内开设门店",
    "Brand exclusivity clauses prevent competing labels from opening outlets within a designated radius of the flagship store.",
    [[0,2,"主语","/brænd/ /ˌɛkskluːˈsɪvɪti/ /klɔːzɪz/","品牌排他性条款"],[3,3,"谓语","/prɪˈvɛnt/","禁止"],[4,5,"宾语","/kəmˈpiːtɪŋ/ /ˈleɪbəlz/","竞争品牌"],[6,16,"宾补","/frɒm/ /ˈoʊpənɪŋ/ /ˈaʊtlɛts/ /wɪˈðɪn/ /ə/ /ˈdɛzɪgneɪtɪd/ /ˈreɪdiəs/ /ɒv/ /ðə/ /ˈflægˌʃɪp/ /stɔːr/","在旗舰店指定半径范围内开设门店"]],
    [{ type: "租约条款", text: "exclusivity clause (排他性条款), designated radius (指定半径), competing label (竞争品牌)" }]
  ],
  [
    "购物中心的共同租赁条款允许现有租户在主力店停业时获得租金减免",
    "The shopping center's co-tenancy provisions grant existing tenants rent reductions when anchor stores cease operations.",
    [[0,4,"主语","/ðə/ /ˈʃɒpɪŋ/ /ˈsɛntər/ /koʊ-ˈtɛnənsi/ /prəˈvɪʒənz/","购物中心的共同租赁条款"],[5,5,"谓语","/grænt/","允许/授予"],[6,7,"间接宾语","/ɪgˈzɪstɪŋ/ /ˈtɛnənts/","现有租户"],[8,9,"直接宾语","/rɛnt/ /rɪˈdʌkʃənz/","租金减免"],[10,14,"时间状语从句","/wɛn/ /ˈæŋkər/ /stɔːrz/ /siːs/ /ˌɒpəˈreɪʃənz/","当主力店停业时"]],
    [{ type: "租赁条款", text: "co-tenancy provision (共同租赁条款), rent reduction (租金减免), cease operations (停业)" }]
  ],
  [
    "视觉陈列标准规定精确的商品摆放以最大化可见度并激发冲动购买",
    "Visual merchandising standards dictate precise product placement to maximize visibility and stimulate impulse purchases.",
    [[0,2,"主语","/ˈvɪʒuəl/ /ˈmɜːrtʃənˌdaɪzɪŋ/ /ˈstændərdz/","视觉陈列标准"],[3,3,"谓语","/dɪkˈteɪt/","规定"],[4,6,"宾语","/prɪˈsaɪs/ /ˈprɒdʌkt/ /ˈpleɪsmənt/","精确的商品摆放"],[7,13,"目的状语","/tuː/ /ˈmæksɪmaɪz/ /ˌvɪzɪˈbɪlɪti/ /ænd/ /ˈstɪmjuleɪt/ /ˈɪmpʌls/ /ˈpɜːrtʃəsɪz/","以最大化可见度并激发冲动购买"]],
    [{ type: "视觉陈列", text: "visual merchandising (视觉陈列), product placement (商品摆放), impulse purchase (冲动购买)" }]
  ],
  [
    "品牌联名推出的限量胶囊系列在官方发布数小时内即告售罄",
    "The brand collaboration produced a limited capsule collection that sold out within hours of its official launch.",
    [[0,2,"主语","/ðə/ /brænd/ /kəˌlæbəˈreɪʃən/","品牌联名"],[3,3,"谓语","/prəˈdjuːst/","推出"],[4,8,"宾语","/ə/ /ˈlɪmɪtɪd/ /ˈkæpsjuːl/ /kəˈlɛkʃən/ /ðæt/","限量胶囊系列(定语从句引导)"],[9,16,"定语从句","/səʊld/ /aʊt/ /wɪˈðɪn/ /ˈaʊərz/ /ɒv/ /ɪts/ /əˈfɪʃəl/ /lɔːntʃ/","在官方发布数小时内即告售罄"]],
    [{ type: "品牌联名", text: "brand collaboration (品牌联名), capsule collection (胶囊系列), sell out (售罄)" }]
  ],
  [
    "商场客流分析显示周末人流高峰与中央中庭促销活动高度相关",
    "Mall footfall analytics revealed that weekend traffic peaks correlate strongly with promotional events in the central atrium.",
    [[0,2,"主语","/mɔːl/ /ˈfʊtfɔːl/ /əˈnælɪtɪks/","商场客流分析"],[3,3,"谓语","/rɪˈviːld/","显示"],[4,16,"宾语从句","/ðæt/ /ˈwiːkɛnd/ /ˈtræfɪk/ /piːks/ /ˈkɒrəleɪt/ /ˈstrɒŋli/ /wɪð/ /prəˈmoʊʃənəl/ /ɪˈvɛnts/ /ɪn/ /ðə/ /ˈsɛntrəl/ /ˈeɪtriəm/","周末人流高峰与中央中庭促销活动高度相关"]],
    [{ type: "客流分析", text: "footfall analytics (客流分析), traffic peak (人流高峰), central atrium (中央中庭)" }]
  ],
  [
    "可持续采购政策已成为该品牌企业社会责任承诺的核心支柱",
    "Sustainable sourcing policies have become a cornerstone of the brand's corporate social responsibility commitments.",
    [[0,2,"主语","/səˈsteɪnəbəl/ /ˈsɔːrsɪŋ/ /ˈpɒlɪsiz/","可持续采购政策"],[3,4,"谓语(现完)","/hæv/ /bɪˈkʌm/","已成为"],[5,13,"表语","/ə/ /ˈkɔːrnərstoʊn/ /ɒv/ /ðə/ /brændz/ /ˈkɔːrpərət/ /ˈsoʊʃəl/ /ˌrɛspɒnsɪˈbɪlɪti/ /kəˈmɪtmənts/","该品牌企业社会责任承诺的核心支柱"]],
    [{ type: "可持续品牌", text: "sustainable sourcing (可持续采购), cornerstone (核心支柱), corporate social responsibility (企业社会责任)" }]
  ],
  [
    "该奢侈品牌运用稀缺营销策略，以小批量发布来维持感知价值与品牌吸引力",
    "The luxury brand employs scarcity marketing tactics, releasing small batches to maintain perceived value and desirability.",
    [[0,2,"主语","/ðə/ /ˈlʌgʒəri/ /brænd/","该奢侈品牌"],[3,3,"谓语","/ɪmˈplɔɪz/","运用"],[4,6,"宾语","/ˈskɛrsɪti/ /ˈmɑːrkɪtɪŋ/ /ˈtæktɪks/","稀缺营销策略"],[7,15,"伴随状语","/rɪˈliːsɪŋ/ /smɔːl/ /ˈbætʃɪz/ /tuː/ /meɪnˈteɪn/ /pərˈsiːvd/ /ˈvæljuː/ /ænd/ /dɪˌzaɪərəˈbɪlɪti/","以小批量发布来维持 perceived value 与 desirability"]],
    [{ type: "稀缺营销", text: "scarcity marketing (稀缺营销), perceived value (感知价值), desirability (渴望度/吸引力)" }]
  ],
  [
    "零售空间利用率指标帮助商场运营商识别表现不佳、适合改造或转租的区域",
    "Retail space utilization metrics help mall operators identify underperforming zones ripe for redevelopment or subleasing.",
    [[0,3,"主语","/ˈriːteɪl/ /speɪs/ /ˌjuːtɪlaɪˈzeɪʃən/ /ˈmɛtrɪks/","零售空间利用率指标"],[4,4,"谓语","/hɛlp/","帮助"],[5,6,"宾语","/mɔːl/ /ˈɒpəreɪtərz/","商场运营商"],[7,14,"宾补","/ˈaɪdɛntɪfaɪ/ /ˌʌndərpərˈfɔːrmɪŋ/ /zoʊnz/ /raɪp/ /fɔːr/ /ˌriːdɪˈvɛləpmənt/ /ɔːr/ /sʌbˈliːsɪŋ/","识别表现不佳、适合改造或转租的区域"]],
    [{ type: "空间管理", text: "space utilization (空间利用率), underperforming zone (表现不佳区域), subleasing (转租)" }]
  ],
  [
    "品牌焕新战役将该品牌从大众市场定位 reposition 至高端当代时尚",
    "The brand refresh campaign repositioned the label from mass-market appeal to premium contemporary fashion.",
    [[0,3,"主语","/ðə/ /brænd/ /rɪˈfrɛʃ/ /kæmˈpeɪn/","品牌焕新战役"],[4,4,"谓语","/ˌriːpəˈzɪʃənd/","重新定位"],[5,6,"宾语","/ðə/ /ˈleɪbəl/","该品牌"],[7,13,"状语(从…到…)","/frɒm/ /mæs-ˈmɑːrkɪt/ /əˈpiːl/ /tuː/ /ˈpriːmiəm/ /kənˈtɛmpərəri/ /ˈfæʃən/","从大众市场定位至高端当代时尚"]],
    [{ type: "品牌焕新", text: "brand refresh (品牌焕新), mass-market appeal (大众市场定位), contemporary fashion (当代时尚)" }]
  ],
  [
    "商场内的数字导览终端简化导航并降低大型综合体中顾客的挫败感",
    "Digital wayfinding kiosks throughout the mall streamline navigation and reduce customer frustration in sprawling complexes.",
    [[0,4,"主语","/ˈdɪdʒɪtəl/ /ˈweɪfaɪndɪŋ/ /ˈkiːɒsks/ /θruːˈaʊt/ /ðə/ /mɔːl/","商场内的数字导览终端"],[5,5,"谓语1","/ˈstriːmlaɪn/","简化"],[6,6,"宾语1","/ˌnævɪˈgeɪʃən/","导航"],[7,7,"连词","/ænd/","并"],[8,8,"谓语2","/rɪˈdjuːs/","降低"],[9,10,"宾语2","/ˈkʌstəmər/ /frʌˈstreɪʃən/","顾客挫败感"],[11,14,"地点状语","/ɪn/ /ˈsprɔːlɪŋ/ /ˈkɒmplɛksɪz/","在 sprawling complexes 中"]],
    [{ type: "商场设施", text: "wayfinding kiosk (导览终端), streamline (简化), sprawling complex (大型综合体)" }]
  ],
  [
    "租户装修补贴激励零售商投资与商场美学愿景一致的定制店面装修",
    "Tenant improvement allowances incentivize retailers to invest in bespoke store fit-outs aligned with the mall's aesthetic vision.",
    [[0,2,"主语","/ˈtɛnənt/ /ɪmˈpruːvmənt/ /əˈlaʊənsɪz/","租户装修补贴"],[3,3,"谓语","/ɪnˈsɛntɪvaɪz/","激励"],[4,4,"宾语","/ˈriːteɪlərz/","零售商"],[5,16,"宾补","/tuː/ /ɪnˈvɛst/ /ɪn/ /bɪˈspoʊk/ /stɔːr/ /fɪt-aʊts/ /əˈlaɪnd/ /wɪð/ /ðə/ /mɔːlz/ /ɛsˈθɛtɪk/ /ˈvɪʒən/","投资与商场美学愿景一致的定制店面装修"]],
    [{ type: "租户激励", text: "tenant improvement allowance (租户装修补贴), bespoke fit-out (定制装修), aesthetic vision (美学愿景)" }]
  ],
  [
    "品牌大使计划使销售人员具备深厚的产品知识与 refined 的客户互动技巧",
    "The brand ambassador program equips sales associates with deep product knowledge and refined customer engagement skills.",
    [[0,3,"主语","/ðə/ /brænd/ /æmˈbæsədər/ /ˈproʊgræm/","品牌大使计划"],[4,4,"谓语","/ɪˈkwɪps/","使……具备"],[5,6,"宾语","/seɪlz/ /əˈsoʊʃieɪts/","销售人员"],[7,15,"介词宾语","/wɪð/ /diːp/ /ˈprɒdʌkt/ /ˈnɒlɪdʒ/ /ænd/ /rɪˈfaɪnd/ /ˈkʌstəmər/ /ɪnˈgeɪdʒmənt/ /skɪlz/","深厚的产品知识与 refined customer engagement skills"]],
    [{ type: "品牌大使", text: "brand ambassador (品牌大使), sales associate (销售人员), customer engagement (客户互动)" }]
  ],
  [
    "消费者非必需消费支出趋势直接影响零售组合中的季节性库存规划",
    "Consumer discretionary spending trends directly influence seasonal inventory planning across the retail portfolio.",
    [[0,3,"主语","/kənˈsjuːmər/ /dɪˈskrɛʃənəri/ /ˈspɛndɪŋ/ /trɛndz/","消费者 discretionary spending 趋势"],[4,4,"状语","/dɪˈrɛktli/","直接"],[5,5,"谓语","/ˈɪnfluəns/","影响"],[6,12,"宾语","/ˈsiːzənəl/ /ˈɪnvəntɔːri/ /ˈplænɪŋ/ /əˈkrɒs/ /ðə/ /ˈriːteɪl/ /pɔːrtˈfoʊlio/","零售组合中的季节性库存规划"]],
    [{ type: "消费趋势", text: "discretionary spending (非必需消费), inventory planning (库存规划), retail portfolio (零售组合)" }]
  ],
  [
    "该购物中心的混合用途开发整合住宅与办公空间，打造自给自足的都市社区",
    "The shopping center's mixed-use development integrates residential units and office spaces to create a self-contained urban community.",
    [[0,4,"主语","/ðə/ /ˈʃɒpɪŋ/ /ˈsɛntər/ /mɪkst-juːs/ /dɪˈvɛləpmənt/","该购物中心的 mixed-use development"],[5,5,"谓语","/ˈɪntɪgreɪts/","整合"],[6,10,"宾语","/ˌrɛzɪˈdɛnʃəl/ /ˈjuːnɪts/ /ænd/ /ˈɒfɪs/ /speɪsɪz/","住宅与办公空间"],[11,16,"目的状语","/tuː/ /kriˈeɪt/ /ə/ /sɛlf-kənˈteɪnd/ /ˈɜːrbən/ /kəˈmjuːnɪti/","打造自给自足的都市社区"]],
    [{ type: "混合开发", text: "mixed-use development (混合用途开发), residential unit (住宅单元), self-contained community (自给自足社区)" }]
  ],
  [
    "品牌组合多元化通过分散多个品类与价格段的风险来降低收入波动",
    "Brand portfolio diversification mitigates revenue volatility by spreading risk across multiple product categories and price segments.",
    [[0,2,"主语","/brænd/ /pɔːrtˈfoʊlio/ /daɪˌvɜːrsɪfɪˈkeɪʃən/","品牌组合多元化"],[3,3,"谓语","/ˈmɪtɪgeɪts/","降低/缓解"],[4,5,"宾语","/ˈrɛvənjuː/ /ˌvɒləˈtɪlɪti/","收入波动"],[6,15,"方式状语","/baɪ/ /ˈsprɛdɪŋ/ /rɪsk/ /əˈkrɒs/ /ˈmʌltɪpəl/ /ˈprɒdʌkt/ /ˈkætəgəriz/ /ænd/ /praɪs/ /ˈsɛgmənts/","通过分散多个品类与价格段的风险"]],
    [{ type: "品牌组合", text: "portfolio diversification (组合多元化), revenue volatility (收入波动), price segment (价格段)" }]
  ],
  [
    "价格弹性分析指导春节等购物旺季的促销定价决策",
    "Price elasticity analysis guides promotional pricing decisions during peak shopping seasons such as Lunar New Year.",
    [[0,2,"主语","/praɪs/ /ɪˌlæsˈtɪsɪti/ /əˈnælɪsɪs/","价格弹性分析"],[3,3,"谓语","/gaɪdz/","指导"],[4,6,"宾语","/prəˈmoʊʃənəl/ /ˈpraɪsɪŋ/ /dɪˈsɪʒənz/","促销定价决策"],[7,15,"时间状语","/ˈdjʊərɪŋ/ /piːk/ /ˈʃɒpɪŋ/ /ˈsiːzənz/ /sʌtʃ/ /æz/ /ˈluːnər/ /njuː/ /jɪər/","在 Lunar New Year 等购物旺季"]],
    [{ type: "定价策略", text: "price elasticity (价格弹性), promotional pricing (促销定价), peak shopping season (购物旺季)" }]
  ],
  [
    "店中店模式使新兴设计师能够在成熟百货环境中获得曝光",
    "The store-in-store concept enables emerging designers to gain exposure within established department store environments.",
    [[0,2,"主语","/ðə/ /stɔːr-ɪn-stɔːr/ /ˈkɒnsɛpt/","店中店模式"],[3,3,"谓语","/ɪˈneɪbəlz/","使……能够"],[4,5,"宾语","/ɪˈmɜːrdʒɪŋ/ /dɪˈzaɪnərz/","新兴设计师"],[6,13,"宾补","/tuː/ /geɪn/ /ɪkˈspoʊʒər/ /wɪˈðɪn/ /ɪˈstæblɪʃt/ /dɪˈpɑːrtmənt/ /stɔːr/ /ɪnˈvaɪrənmənts/","在成熟百货环境中获得曝光"]],
    [{ type: "店中店", text: "store-in-store (店中店), emerging designer (新兴设计师), gain exposure (获得曝光)" }]
  ],
  [
    "商场安保方案融合先进监控系统与 trained 安保人员以保障租户与顾客安全",
    "Mall security protocols incorporate advanced surveillance systems and trained personnel to safeguard both tenants and shoppers.",
    [[0,2,"主语","/mɔːl/ /sɪˈkjʊrɪti/ /ˈproʊtəkɒlz/","商场安保方案"],[3,3,"谓语","/ɪnˈkɔːrpəreɪt/","融合"],[4,9,"宾语","/ədˈvænst/ /sərˈveɪləns/ /ˈsɪstəmz/ /ænd/ /treɪnd/ /pərˈsoʊnɛl/","advanced surveillance systems 与 trained personnel"],[10,15,"目的状语","/tuː/ /ˈseɪfgɑːrd/ /boʊθ/ /ˈtɛnənts/ /ænd/ /ˈʃɒpərz/","以保障租户与顾客安全"]],
    [{ type: "商场安保", text: "security protocol (安保方案), surveillance system (监控系统), safeguard (保障)" }]
  ],
  [
    "品牌资产估值评估为并购与市场扩张等战略决策提供依据",
    "Brand equity valuation assessments inform strategic decisions regarding mergers, acquisitions, and market expansion.",
    [[0,3,"主语","/brænd/ /ˈɛkwɪti/ /ˌvæljuˈeɪʃən/ /əˈsɛsmənts/","品牌资产估值评估"],[4,4,"谓语","/ɪnˈfɔːrm/","为……提供依据"],[5,12,"宾语","/strəˈtiːdʒɪk/ /dɪˈsɪʒənz/ /rɪˈgɑːrdɪŋ/ /ˈmɜːrdʒərz/ /ækˈwɪzɪʃənz/ /ænd/ /ˈmɑːrkɪt/ /ɪkˈspænʃən/","并购与市场扩张等战略决策"]],
    [{ type: "品牌资产", text: "brand equity (品牌资产), valuation assessment (估值评估), market expansion (市场扩张)" }]
  ],
  [
    "快闪零售孵化器为初创企业提供临时店面，在签署长期租约前验证产品与市场契合度",
    "The pop-up retail incubator provides startups with temporary storefronts to validate product-market fit before committing to long-term leases.",
    [[0,4,"主语","/ðə/ /pɒp-ʌp/ /ˈriːteɪl/ /ɪnˈkjuːbeɪtər/","快闪零售孵化器"],[5,5,"谓语","/prəˈvaɪdz/","为……提供"],[6,6,"间接宾语","/ˈstɑːrtʌps/","初创企业"],[7,9,"直接宾语","/wɪð/ /ˈtɛmpərəri/ /ˈstɔːrfrʌnts/","临时店面"],[10,17,"目的状语","/tuː/ /ˈvælɪdeɪt/ /ˈprɒdʌkt-mɑːrkɪt/ /fɪt/ /bɪˈfɔːr/ /kəˈmɪtɪŋ/ /tuː/ /lɒŋ-tɜːrm/ /ˈliːsɪz/","在签署长期租约前验证 product-market fit"]],
    [{ type: "快闪孵化", text: "pop-up retail (快闪零售), product-market fit (产品市场契合), long-term lease (长期租约)" }]
  ],
  [
    "季节性商品日历协调产品发布与文化节日及受天气影响的消费者偏好",
    "Seasonal merchandising calendars coordinate product launches with cultural festivals and weather-dependent consumer preferences.",
    [[0,3,"主语","/ˈsiːzənəl/ /ˈmɜːrtʃənˌdaɪzɪŋ/ /ˈkælɪndərz/","季节性商品日历"],[4,4,"谓语","/koʊˈɔːrdɪneɪt/","协调"],[5,6,"宾语","/ˈprɒdʌkt/ /ˈlɔːntʃɪz/","产品发布"],[7,12,"介词宾语","/wɪð/ /ˈkʌltʃərəl/ /ˈfɛstɪvəlz/ /ænd/ /ˈwɛðər-dɪˈpɛndənt/ /kənˈsjuːmər/ /ˈprɛfərənsɪz/","与文化节日及 weather-dependent consumer preferences"]],
    [{ type: "商品规划", text: "merchandising calendar (商品日历), product launch (产品发布), consumer preference (消费者偏好)" }]
  ],
  [
    "购物中心的交通接驳显著提升了可达性并带来稳定的工作日客流",
    "The shopping center's transit connectivity significantly enhances accessibility and drives consistent weekday foot traffic.",
    [[0,4,"主语","/ðə/ /ˈʃɒpɪŋ/ /ˈsɛntər/ /ˈtrænsɪt/ /ˌkɒnɛkˈtɪvɪti/","购物中心的交通接驳"],[5,5,"状语","/sɪgˈnɪfɪkəntli/","显著"],[6,6,"谓语1","/ɪnˈhænsɪz/","提升"],[7,7,"宾语1","/ækˌsɛsɪˈbɪlɪti/","可达性"],[8,8,"连词","/ænd/","并"],[9,9,"谓语2","/draɪvz/","带来"],[10,13,"宾语2","/kənˈsɪstənt/ /ˈwiːkdeɪ/ /fʊt/ /ˈtræfɪk/","稳定的工作日客流"]],
    [{ type: "交通接驳", text: "transit connectivity (交通接驳), accessibility (可达性), weekday foot traffic (工作日客流)" }]
  ],
  [
    "零售竞争对标使品牌能够针对行业领导者校准定价、服务标准与商品组合",
    "Retail competitive benchmarking enables brands to calibrate pricing, service standards, and product assortment against industry leaders.",
    [[0,2,"主语","/ˈriːteɪl/ /kəmˈpɛtɪtɪv/ /ˈbɛntʃmɑːrkɪŋ/","零售竞争对标"],[3,3,"谓语","/ɪˈneɪbəlz/","使……能够"],[4,4,"宾语","/brændz/","品牌"],[5,15,"宾补","/tuː/ /ˈkælɪbreɪt/ /ˈpraɪsɪŋ/ /ˈsɜːrvɪs/ /ˈstændərdz/ /ænd/ /ˈprɒdʌkt/ /əˈsɔːrtmənt/ /əˈgɛnst/ /ˈɪndəstri/ /ˈliːdərz/","针对行业领导者校准定价、服务标准与商品组合"]],
    [{ type: "竞争对标", text: "competitive benchmarking (竞争对标), calibrate (校准), product assortment (商品组合)" }]
  ],
  [
    "该品牌的全球扩张战略优先布局中产阶级消费能力持续上升的新兴市场",
    "The brand's global expansion strategy prioritizes high-growth emerging markets with rising middle-class consumption power.",
    [[0,4,"主语","/ðə/ /brændz/ /ˈgloʊbəl/ /ɪkˈspænʃən/ /ˈstrætədʒi/","该品牌的全球扩张战略"],[5,5,"谓语","/praɪˈɒrɪtaɪzɪz/","优先布局"],[6,13,"宾语","/haɪ-grəʊθ/ /ɪˈmɜːrdʒɪŋ/ /ˈmɑːrkɪts/ /wɪð/ /ˈraɪzɪŋ/ /ˈmɪdəl-klæs/ /ˌkɒnsʌmpˈʃən/ /ˈpaʊər/","中产阶级消费能力 rising 的新兴市场"]],
    [{ type: "全球扩张", text: "global expansion (全球扩张), emerging market (新兴市场), middle-class consumption (中产阶级消费)" }]
  ],
  [
    "商场公共区域的现场表演与艺术装置等活动，将场域与线上购物区隔开来",
    "Mall common area activations, including live performances and art installations, differentiate the venue from online shopping alternatives.",
    [[0,4,"主语","/mɔːl/ /ˈkɒmən/ /ˈɛriə/ /ˌæktɪˈveɪʃənz/","商场公共区域的活动"],[5,10,"插入语","/ɪnˈkluːdɪŋ/ /laɪv/ /pərˈfɔːrmənsɪz/ /ænd/ /ɑːrt/ /ˌɪnstəˈleɪʃənz/","包括 live performances 与 art installations"],[11,11,"谓语","/ˈdɪfəˌrɛnʃieɪt/","将……区隔"],[12,13,"宾语","/ðə/ /ˈvɛnjuː/","场域"],[14,16,"介词宾语","/frɒm/ /ˈɒnˌlaɪn/ /ˈʃɒpɪŋ/ /ɔːlˈtɜːrnətɪvz/","与线上购物"]],
    [{ type: "公共活动", text: "common area activation (公共区域活动), art installation (艺术装置), differentiate from (与……区隔)" }]
  ],
  [
    "客户终身价值建模帮助奢侈品牌将资源投向与高消费客户群建立长期关系",
    "Customer lifetime value modeling helps luxury brands allocate resources toward cultivating relationships with high-spending clientele.",
    [[0,3,"主语","/ˈkʌstəmər/ /ˈlaɪftaɪm/ /ˈvæljuː/ /ˈmɒdəlɪŋ/","客户终身价值建模"],[4,4,"谓语","/hɛlps/","帮助"],[5,6,"宾语","/ˈlʌgʒəri/ /brændz/","奢侈品牌"],[7,14,"宾补","/ˈæləkeɪt/ /rɪˈsɔːrsɪz/ /təˈwɔːrd/ /ˈkʌltɪveɪtɪŋ/ /rɪˈleɪʃənʃɪps/ /wɪð/ /haɪ-ˈspɛndɪŋ/ /ˌkliːənˈtɛl/","将资源投向 cultivating relationships with high-spending clientele"]],
    [{ type: "客户价值", text: "lifetime value modeling (终身价值建模), allocate resources (分配资源), high-spending clientele (高消费客户群)" }]
  ],
  [
    "零售媒体网络通过向品牌提供商场数字平台上的定向广告位来创造增量收入",
    "The retail media network generates incremental revenue by offering brands targeted advertising placements on the mall's digital platforms.",
    [[0,3,"主语","/ðə/ /ˈriːteɪl/ /ˈmiːdiə/ /ˈnɛtwɜːrk/","零售媒体网络"],[4,4,"谓语","/ˈdʒɛnəreɪts/","创造"],[5,6,"宾语","/ˌɪnkrɪˈmɛntəl/ /ˈrɛvənjuː/","增量收入"],[7,17,"方式状语","/baɪ/ /ˈɒfərɪŋ/ /brændz/ /ˈtɑːrgɪtɪd/ /ˈædvərtaɪzɪŋ/ /ˈpleɪsmənts/ /ɒn/ /ðə/ /mɔːlz/ /ˈdɪdʒɪtəl/ /ˈplætfɔːrmz/","通过向品牌提供商场数字平台上的定向广告位"]],
    [{ type: "零售媒体", text: "retail media network (零售媒体网络), incremental revenue (增量收入), targeted advertising (定向广告)" }]
  ],
  [
    "品牌真伪验证项目利用区块链技术追踪产品从生产到销售的全过程",
    "Brand authenticity verification programs use blockchain technology to trace products from manufacturing to point of sale.",
    [[0,3,"主语","/brænd/ /ˌɔːθɛnˈtɪsɪti/ /ˌvɛrɪfɪˈkeɪʃən/ /ˈproʊgræmz/","品牌真伪验证项目"],[4,4,"谓语","/juːz/","利用"],[5,6,"宾语","/ˈblɒktʃeɪn/ /tɛkˈnɒlədʒi/","区块链技术"],[7,15,"目的状语","/tuː/ /treɪs/ /ˈprɒdʌkts/ /frɒm/ /ˌmænjuˈfæktʃərɪŋ/ /tuː/ /pɔɪnt/ /ɒv/ /seɪl/","追踪产品从生产到销售的全过程"]],
    [{ type: "品牌防伪", text: "authenticity verification (真伪验证), blockchain technology (区块链技术), point of sale (销售点)" }]
  ],
  [
    "购物中心的空置率缓解方案包括灵活短租与季节性商户的快闪摊位",
    "The shopping mall's vacancy mitigation plan includes flexible short-term leases and pop-up concessions for seasonal vendors.",
    [[0,5,"主语","/ðə/ /ˈʃɒpɪŋ/ /mɔːl/ /ˈveɪkənsi/ /ˌmɪtɪˈgeɪʃən/ /plæn/","购物中心的空置率 mitigation plan"],[6,6,"谓语","/ɪnˈkluːdz/","包括"],[7,15,"宾语","/ˈflɛksɪbəl/ /ʃɔːrt-tɜːrm/ /ˈliːsɪz/ /ænd/ /pɒp-ʌp/ /kənˈsɛʃənz/ /fɔːr/ /ˈsiːzənəl/ /ˈvɛndərz/","灵活短租与 seasonal vendors 的快闪 concession"]],
    [{ type: "空置应对", text: "vacancy mitigation (空置率缓解), short-term lease (短租), pop-up concession (快闪摊位)" }]
  ],
  [
    "全渠道整合确保实体门店与数字渠道的库存、定价与促销方案保持一致",
    "Omnichannel integration ensures that inventory, pricing, and promotional offers remain consistent across physical stores and digital channels.",
    [[0,1,"主语","/ˌɒmniˈtʃænəl/ /ˌɪntɪˈgreɪʃən/","全渠道整合"],[2,2,"谓语","/ɪnˈʃʊrz/","确保"],[3,16,"宾语从句","/ðæt/ /ˈɪnvəntɔːri/ /ˈpraɪsɪŋ/ /ænd/ /prəˈmoʊʃənəl/ /ˈɒfərz/ /rɪˈmeɪn/ /kənˈsɪstənt/ /əˈkrɒs/ /ˈfɪzɪkəl/ /stɔːrz/ /ænd/ /ˈdɪdʒɪtəl/ /ˈtʃænəlz/","实体门店与数字渠道的库存、定价与促销 offer 保持一致"]],
    [{ type: "全渠道", text: "omnichannel integration (全渠道整合), promotional offer (促销方案), digital channel (数字渠道)" }]
  ],
  [
    "品牌季节系列预览通过邀请制专属活动产生大量预购需求",
    "The brand's seasonal collection preview generated substantial pre-order demand through exclusive invitation-only events.",
    [[0,4,"主语","/ðə/ /brændz/ /ˈsiːzənəl/ /kəˈlɛkʃən/ /ˈpriːvjuː/","品牌 seasonal collection preview"],[5,5,"谓语","/ˈdʒɛnəreɪtɪd/","产生"],[6,8,"宾语","/səbˈstænʃəl/ /priː-ˈɔːrdər/ /dɪˈmænd/","大量预购需求"],[9,12,"方式状语","/θruː/ /ɪkˈskluːsɪv/ /ˌɪnvɪˈteɪʃən-oʊnli/ /ɪˈvɛnts/","通过 exclusive invitation-only events"]],
    [{ type: "季节发布", text: "collection preview (系列预览), pre-order demand (预购需求), invitation-only event (邀请制活动)" }]
  ],
  [
    "零售转化漏斗分析识别潜在买家放弃购买旅程的环节并需及时干预",
    "Retail conversion funnel analysis identifies stages where potential buyers abandon the purchase journey and require intervention.",
    [[0,3,"主语","/ˈriːteɪl/ /kənˈvɜːrʒən/ /ˈfʌnəl/ /əˈnælɪsɪs/","零售转化漏斗分析"],[4,4,"谓语","/aɪˈdɛntɪfaɪz/","识别"],[5,15,"宾语(含定语从句)","/ˈsteɪdʒɪz/ /wɛə/ /pəˈtɛnʃəl/ /ˈbaɪərz/ /əˈbændən/ /ðə/ /ˈpɜːrtʃəs/ /ˈdʒɜːrni/ /ænd/ /rɪˈkwaɪər/ /ˌɪntəˈvɛnʃən/","潜在买家放弃购买 journey 并需 intervention 的环节"]],
    [{ type: "转化分析", text: "conversion funnel (转化漏斗), purchase journey (购买旅程), require intervention (需要干预)" }]
  ],
  [
    "商场奢侈品区扩建吸引了多家高级定制时装屋寻求市中心的 prestigious 旗舰店位置",
    "The mall's luxury wing expansion attracted several haute couture houses seeking prestigious flagship locations in the city center.",
    [[0,4,"主语","/ðə/ /mɔːlz/ /ˈlʌgʒəri/ /wɪŋ/ /ɪkˈspænʃən/","商场 luxury wing expansion"],[5,5,"谓语","/əˈtræktɪd/","吸引"],[6,10,"宾语","/ˈsɛvrəl/ /oʊt/ /kwuːˈtjʊər/ /ˈhaʊsɪz/ /ˈsiːkɪŋ/","多家 haute couture houses seeking"],[11,17,"定语","/prɛˈstɪdʒəs/ /ˈflægˌʃɪp/ /loʊˈkeɪʃənz/ /ɪn/ /ðə/ /ˈsɪti/ /ˈsɛntər/","市中心 prestigious flagship locations"]],
    [{ type: "奢侈品区", text: "luxury wing (奢侈品区), haute couture house (高级定制时装屋), flagship location (旗舰店位置)" }]
  ],
  [
    "网红合作推广放大了品牌在数字原生消费者中的触达，后者往往不信任传统广告",
    "Influencer partnership campaigns amplified the brand's reach among digitally native consumers who distrust traditional advertising.",
    [[0,2,"主语","/ˈɪnfluənsər/ /ˈpɑːrtnərʃɪp/ /kæmˈpeɪnz/","网红合作 campaign"],[3,3,"谓语","/ˈæmplɪfaɪd/","放大"],[4,6,"宾语","/ðə/ /brændz/ /riːtʃ/","品牌的触达"],[7,14,"范围状语(含定语从句)","/əˈmʌŋ/ /ˈdɪdʒɪtəli/ /ˈneɪtɪv/ /kənˈsjuːmərz/ /huː/ /dɪsˈtrʌst/ /trəˈdɪʃənəl/ /ˈædvərtaɪzɪŋ/","among digitally native consumers who distrust traditional advertising"]],
    [{ type: "网红营销", text: "influencer partnership (网红合作), digitally native consumer (数字原生消费者), traditional advertising (传统广告)" }]
  ],
  [
    "同店销售增长是评估成熟零售门店健康状况的关键绩效指标",
    "Same-store sales growth serves as a key performance indicator for evaluating the health of established retail locations.",
    [[0,2,"主语","/seɪm-stɔːr/ /seɪlz/ /grəʊθ/","同店 sales growth"],[3,4,"谓语","/sɜːrvz/ /æz/","作为"],[5,8,"表语","/ə/ /kiː/ /pərˈfɔːrməns/ /ˌɪndɪˈkeɪtər/","关键绩效指标"],[9,16,"目的状语","/fɔːr/ /ɪˈvæljueɪtɪŋ/ /ðə/ /hɛlθ/ /ɒv/ /ɪˈstæblɪʃt/ /ˈriːteɪl/ /loʊˈkeɪʃənz/","评估 established retail locations 健康状况"]],
    [{ type: "绩效指标", text: "same-store sales growth (同店销售增长), performance indicator (绩效指标), retail location (零售门店)" }]
  ],
  [
    "品牌可持续承诺力争在本十年末实现碳中和运营并采用道德采购的原材料",
    "The brand sustainability pledge commits to carbon-neutral operations and ethically sourced raw materials by the end of the decade.",
    [[0,3,"主语","/ðə/ /brænd/ /səˌsteɪnəˈbɪlɪti/ /plɛdʒ/","品牌可持续 pledge"],[4,4,"谓语","/kəˈmɪts/","承诺"],[5,13,"宾语","/tuː/ /ˈkɑːrbən-ˈnuːtrəl/ /ˌɒpəˈreɪʃənz/ /ænd/ /ˈɛθɪkəli/ /sɔːrst/ /rɔː/ /məˈtɪəriəlz/","carbon-neutral operations 与 ethically sourced raw materials"],[14,18,"时间状语","/baɪ/ /ðə/ /ɛnd/ /ɒv/ /ðə/ /ˈdɛkeɪd/","在本十年末"]],
    [{ type: "可持续承诺", text: "sustainability pledge (可持续承诺), carbon-neutral (碳中和), ethically sourced (道德采购)" }]
  ],
  [
    "商场停车收入来源对物业业主的整体财务表现与租户补贴能力贡献显著",
    "Mall parking revenue streams contribute significantly to the property owner's overall financial performance and tenant subsidy capacity.",
    [[0,3,"主语","/mɔːl/ /ˈpɑːrkɪŋ/ /ˈrɛvənjuː/ /striːmz/","商场停车 revenue streams"],[4,4,"谓语","/kənˈtrɪbjuːt/","贡献"],[5,5,"状语","/sɪgˈnɪfɪkəntli/","显著"],[6,16,"介词宾语","/tuː/ /ðə/ /ˈprɒpərti/ /ˈoʊnər/ /ˈoʊvərɔːl/ /faɪˈnænʃəl/ /pərˈfɔːrməns/ /ænd/ /ˈtɛnənt/ /ˈsʌbsɪdi/ /kəˈpæsɪti/","对物业 owner 的整体财务表现与 tenant subsidy capacity"]],
    [{ type: "停车收入", text: "revenue stream (收入来源), financial performance (财务表现), tenant subsidy (租户补贴)" }]
  ],
  [
    "线上下单、门店取货服务弥合了电商便利性与实体零售即时性之间的差距",
    "The buy-online-pick-up-in-store service bridges the gap between e-commerce convenience and the immediacy of physical retail.",
    [[0,2,"主语","/ðə/ /baɪ-ˈɒnˌlaɪn-pɪk-ʌp-ɪn-stɔːr/ /ˈsɜːrvɪs/","线上下单、门店取货服务"],[3,3,"谓语","/ˈbrɪdʒɪz/","弥合"],[4,5,"宾语","/ðə/ /gæp/","差距"],[6,14,"介词宾语","/bɪˈtwiːn/ /ˈiːˌkɒmɜːrs/ /kənˈviːniəns/ /ænd/ /ði/ /ɪˈmiːdiəsi/ /ɒv/ /ˈfɪzɪkəl/ /ˈriːteɪl/","电商 convenience 与实体零售 immediacy 之间"]],
    [{ type: "O2O服务", text: "buy-online-pick-up-in-store (线上下单门店取货), bridge the gap (弥合差距), immediacy (即时性)" }]
  ],
  [
    "品牌客户细分使量身定制的营销信息能够契合不同心理特征与人口统计画像",
    "Brand customer segmentation enables tailored marketing messages that resonate with distinct psychographic and demographic profiles.",
    [[0,2,"主语","/brænd/ /ˈkʌstəmər/ /ˌsɛgmənˈteɪʃən/","品牌客户 segmentation"],[3,3,"谓语","/ɪˈneɪbəlz/","使"],[4,14,"宾语(含定语从句)","/ˈteɪlərd/ /ˈmɑːrkɪtɪŋ/ /ˈmɛsɪdʒɪz/ /ðæt/ /ˈrɛzəneɪt/ /wɪð/ /dɪˈstɪŋkt/ /ˌsaɪkoʊgrəˈfɪk/ /ænd/ /ˌdɛməgrəˈfɪk/ /ˈproʊfaɪlz/","tailored marketing messages resonate with distinct psychographic and demographic profiles"]],
    [{ type: "客户细分", text: "customer segmentation (客户细分), psychographic profile (心理特征画像), demographic profile (人口统计画像)" }]
  ],
  [
    "购物中心改造通过提高租金水平与租户留存率实现了可观的投资回报",
    "The shopping center's renovation delivered a substantial return on investment through increased rental rates and higher tenant retention.",
    [[0,3,"主语","/ðə/ /ˈʃɒpɪŋ/ /ˈsɛntər/ /ˌrɛnəˈveɪʃən/","购物中心改造"],[4,4,"谓语","/dɪˈlɪvərd/","实现了"],[5,9,"宾语","/ə/ /səbˈstænʃəl/ /rɪˈtɜːrn/ /ɒn/ /ɪnˈvɛstmənt/","可观的投资回报"],[10,17,"方式状语","/θruː/ /ɪnˈkriːst/ /ˈrɛntəl/ /reɪts/ /ænd/ /ˈhaɪər/ /ˈtɛnənt/ /rɪˈtɛnʃən/","通过提高租金水平与租户留存率"]],
    [{ type: "商场改造", text: "return on investment (投资回报), rental rate (租金水平), tenant retention (租户留存率)" }]
  ],
];

if (data.length !== 50) throw new Error(`Expected 50 sentences, got ${data.length}`);

const errors = [];
const sentences = [];
for (let i = 0; i < data.length; i++) {
  const v = validateSentence(`q_shopping02_s${100 + i}`, data[i][0], data[i][1], data[i][2], data[i][3]);
  if (v.issues.length) errors.push(v);
  else sentences.push(buildSentence(`q_shopping02_s${100 + i}`, data[i][0], data[i][1], data[i][2], data[i][3]));
}
if (errors.length) {
  for (const e of errors) console.error(e.id, e.len, e.issues.join('; '), '\n ', e.words, '\n');
  process.exit(1);
}

const out = `export const extensions = {\n  "shopping_02": ${JSON.stringify(sentences, null, 2).replace(/"(\w+)":/g, '$1:')}\n};\n`;

// Fix: use proper formatting like the example (compact style)
function formatCompact(sentences) {
  const lines = ['export const extensions = {', '  "shopping_02": ['];
  for (let si = 0; si < sentences.length; si++) {
    const s = sentences[si];
    lines.push('    {');
    lines.push(`      id: "${s.id}",`);
    lines.push(`      chinese: "${s.chinese}",`);
    lines.push(`      english_full: "${s.english_full}",`);
    lines.push('      words: [');
    const wordParts = s.words.map(w => {
      let part = `{ word: "${w.word}"`;
      if (w.punctuation) part += `, punctuation: "${w.punctuation.replace(/"/g, '\\"')}"`;
      part += ' }';
      return part;
    });
    // group words 5-10 per line
    for (let i = 0; i < wordParts.length; i += 8) {
      lines.push('        ' + wordParts.slice(i, i + 8).join(', ') + (i + 8 < wordParts.length ? ',' : ''));
    }
    lines.push('      ],');
    lines.push('      components: [');
    for (const c of s.components) {
      const subWords = c.subComponents[0].words.map(w => {
        let part = `{ word: "${w.word}"`;
        if (w.punctuation) part += `, punctuation: "${w.punctuation.replace(/"/g, '\\"')}"`;
        part += ' }';
        return part;
      }).join(', ');
      lines.push(`        {`);
      lines.push(`          start: ${c.start}, end: ${c.end}, label: "${c.label}", phonetic: "${c.phonetic}", translation: "${c.translation.replace(/"/g, '\\"')}",`);
      lines.push(`          subComponents: [{ startIndex: 0, words: [${subWords}] }]`);
      lines.push(`        }${c === s.components[s.components.length - 1] ? '' : ','}`);
    }
    lines.push('      ],');
    lines.push('      analysis: [');
    for (const a of s.analysis) {
      lines.push(`        { type: "${a.type}", text: "${a.text.replace(/"/g, '\\"')}" }`);
    }
    lines.push('      ]');
    lines.push(`    }${si < sentences.length - 1 ? ',' : ''}`);
  }
  lines.push('  ]');
  lines.push('};');
  return lines.join('\n') + '\n';
}

fs.writeFileSync('prisma/scenarios_data_ext_shopping02_50.js', formatCompact(sentences));
console.log('Generated prisma/scenarios_data_ext_shopping02_50.js with', sentences.length, 'sentences');
