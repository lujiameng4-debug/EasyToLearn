import fs from 'fs';

function parseWords(sentence) {
  return sentence.split(/\s+/).map((token) => {
    const match = token.match(/^([a-zA-Z0-9'-]+)(.*)$/);
    const word = match ? match[1] : token;
    const obj = { word };
    if (match && match[2]) obj.punctuation = match[2];
    return obj;
  });
}

function buildComponents(words, specs) {
  return specs.map(([start, end, label, phonetic, translation]) => ({
    start,
    end,
    label,
    phonetic,
    translation,
    subComponents: [{ startIndex: 0, words: words.slice(start, end + 1) }],
  }));
}

function validateSpecs(id, english, compSpecs) {
  const words = parseWords(english);
  const last = words.length - 1;
  const errors = [];
  compSpecs.forEach(([s, e]) => {
    if (s < 0 || e > last || s > e) errors.push(`${id}: range ${s}-${e} invalid for ${words.length} words`);
  });
  const covered = new Array(words.length).fill(false);
  compSpecs.forEach(([s, e]) => { for (let i = s; i <= e; i++) covered[i] = true; });
  if (covered.some((v) => !v)) errors.push(`${id}: uncovered words in "${english}"`);
  return errors;
}

function build(id, chinese, english, compSpecs, analysisSpecs) {
  const words = parseWords(english);
  const n = words.length;
  const components = [];
  let cursor = 0;
  compSpecs.forEach(([s, e, label, phonetic, translation], i) => {
    const start = cursor;
    const end = i === compSpecs.length - 1 ? n - 1 : Math.min(e, n - 1);
    if (start > end) {
      throw new Error(`${id}: invalid component ${i} start ${start} > end ${end}`);
    }
    components.push({
      start,
      end,
      label,
      phonetic,
      translation,
      subComponents: [{ startIndex: 0, words: words.slice(start, end + 1) }],
    });
    cursor = end + 1;
  });
  if (cursor !== n) {
    throw new Error(`${id}: covered ${cursor}/${n} words in "${english}"`);
  }
  return {
    id,
    chinese,
    english_full: english,
    words,
    components,
    analysis: analysisSpecs.map(([type, text]) => ({ type, text })),
  };
}

const data = [
  build(
    'q_shopping_s100',
    '这家高端百货商店为持有收据并在购买后三十天内退回的未磨损商品提供全额退款',
    'The high-end department store offers a full refund for unworn merchandise returned with a receipt within thirty days of purchase.',
    [
      [0, 3, '主语', '/ðə/ /haɪ-ɛnd/ /dɪˈpɑːrtmənt/ /stɔːr/', '这家高端百货商店'],
      [4, 4, '谓语', '/ˈɔːfərz/', '提供'],
      [5, 7, '宾语', '/ə/ /fʊl/ /ˈriːfʌnd/', '全额退款'],
      [8, 19, '状语', '/fɔːr/ /ʌnˈwɔːrn/ /ˈmɜːrtʃənˌdaɪz/ /rɪˈtɜːrnd/ /wɪð/ /ə/ /rɪˈsiːt/ /wɪˈðɪn/ /ˈθɜːrti/ /deɪz/ /ɒv/ /ˈpɜːrtʃəs/', '为持有收据并在购买后三十天内退回的未磨损商品'],
    ],
    [['零售词汇', 'high-end department store (高端百货商店), full refund (全额退款), unworn merchandise (未磨损商品), receipt (收据)']]
  ),
  build(
    'q_shopping_s101',
    '该购物中心通过融合餐饮、娱乐与沉浸式品牌体验来吸引高净值消费者',
    'The shopping mall attracts high-net-worth consumers by integrating dining, entertainment, and immersive brand experiences.',
    [
      [0, 2, '主语', '/ðə/ /ˈʃɒpɪŋ/ /mɔːl/', '该购物中心'],
      [3, 3, '谓语', '/əˈtrækts/', '吸引'],
      [4, 5, '宾语', '/haɪ-nɛt-wɜːrθ/ /kənˈsjuːmərz/', '高净值消费者'],
      [6, 13, '方式状语', '/baɪ/ /ˈɪntɪˌgreɪtɪŋ/ /ˈdaɪnɪŋ/ /ˌɛntərˈteɪnmənt/ /ænd/ /ɪˈmɜːrsɪv/ /brænd/ /ɪkˈspɪəriənsɪz/', '通过融合餐饮、娱乐与沉浸式品牌体验'],
    ],
    [['商场运营', 'high-net-worth consumers (高净值消费者), immersive brand experience (沉浸式品牌体验), integrate (融合)']]
  ),
  build(
    'q_shopping_s102',
    '激烈的市场竞争迫使传统零售商大力投资电子商务与全渠道营销策略',
    'Fierce market competition has compelled traditional retailers to invest heavily in e-commerce and omnichannel marketing strategies.',
    [
      [0, 2, '主语', '/fɪərs/ /ˈmɑːrkɪt/ /ˌkɒmpɪˈtɪʃən/', '激烈的市场竞争'],
      [3, 4, '谓语(现完)', '/hæv/ /kəmˈpɛld/', '已经迫使'],
      [5, 6, '宾语', '/trəˈdɪʃənəl/ /ˈriːteɪlərz/', '传统零售商'],
      [7, 16, '宾语补足语', '/tuː/ /ɪnˈvɛst/ /ˈhɛvɪli/ /ɪn/ /ˈiːˌkɒmɜːrs/ /ænd/ /ˌɒmniˈtʃænəl/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒiz/', '大力投资电子商务与全渠道营销策略'],
    ],
    [['零售战略', 'fierce competition (激烈竞争), omnichannel marketing (全渠道营销), invest heavily in (大力投资)']]
  ),
  build(
    'q_shopping_s103',
    '黑色星期五促销活动吸引了成群结队的狂热购物者，导致商场入口出现严重拥堵',
    'The Black Friday promotions attracted hordes of frantic shoppers, resulting in severe congestion at the mall entrances.',
    [
      [0, 3, '主句主语', '/ðə/ /blæk/ /ˈfraɪdeɪ/ /prəˈmoʊʃənz/', '黑色星期五促销活动'],
      [4, 4, '主句谓语', '/əˈtræktɪd/', '吸引了'],
      [5, 8, '主句宾语', '/hɔːrdz/ /ɒv/ /ˈfræntɪk/ /ˈʃɒpərz/', '成群结队的狂热购物者'],
      [9, 16, '结果状语(分词)', '/rɪˈzʌltɪŋ/ /ɪn/ /sɪˈvɪər/ /kənˈdʒɛstʃən/ /æt/ /ðə/ /mɔːl/ /ˈɛntrənsɪz/', '导致商场入口出现严重拥堵'],
    ],
    [['促销人流', 'hordes of (成群结队的), frantic shoppers (狂热购物者), result in (导致), congestion (拥堵)']]
  ),
  build(
    'q_shopping_s104',
    '为吸引年轻消费者，该品牌推出采用可持续材料制作的限量版街头服饰系列',
    'To appeal to younger consumers, the brand launched a limited-edition streetwear collection crafted from sustainable materials.',
    [
      [0, 4, '目的状语', '/tuː/ /əˈpiːl/ /tuː/ /ˈjʌŋər/ /kənˈsjuːmərz/', '为吸引年轻消费者'],
      [5, 6, '主语', '/ðə/ /brænd/', '该品牌'],
      [7, 7, '谓语', '/lɔːntʃt/', '推出'],
      [8, 16, '宾语', '/ə/ /ˈlɪmɪtɪd-ɪˈdɪʃən/ /ˈstriːtˌwɛər/ /kəˈlɛkʃən/ /ˈkræftɪd/ /frɒm/ /səˈsteɪnəbəl/ /məˈtɪəriəlz/', '采用可持续材料制作的限量版街头服饰系列'],
    ],
    [['时尚零售', 'limited-edition (限量版), streetwear (街头服饰), sustainable materials (可持续材料), appeal to (吸引)']]
  ),
  build(
    'q_shopping_s105',
    '橱窗展示被精心设计成充满节日气息的冬季仙境，以激发顾客的购买欲望',
    'The window displays were meticulously designed as a festive winter wonderland to stimulate purchasing desire among customers.',
    [
      [0, 2, '主语', '/ðə/ /ˈwɪndoʊ/ /dɪˈspleɪz/', '橱窗展示'],
      [3, 5, '谓语(被动)', '/wɜːr/ /mɪˈtɪkjʊləsli/ /dɪˈzaɪnd/', '被精心设计'],
      [6, 10, '主语补足语', '/æz/ /ə/ /ˈfɛstɪv/ /ˈwɪntər/ /ˈwʌndərlænd/', '成充满节日气息的冬季仙境'],
      [11, 15, '目的状语', '/tuː/ /ˈstɪmjʊleɪt/ /ˈpɜːrtʃəsɪŋ/ /dɪˈzaɪər/ /əˈmʌŋ/ /ˈkʌstəmərz/', '以激发顾客的购买欲望'],
    ],
    [['视觉营销', 'window display (橱窗展示), meticulously (精心地), stimulate purchasing desire (激发购买欲望)']]
  ),
  build(
    'q_shopping_s106',
    '越来越多的零售商采用无接触支付系统，以提升结账效率并降低现金处理成本',
    'An increasing number of retailers are adopting contactless payment systems to improve checkout efficiency and reduce cash-handling costs.',
    [
      [0, 4, '主语', '/æn/ /ɪnˈkriːsɪŋ/ /ˈnʌmbər/ /ɒv/ /ˈriːteɪlərz/', '越来越多的零售商'],
      [5, 6, '谓语(现进)', '/ɑːr/ /əˈdɒptɪŋ/', '正在采用'],
      [7, 10, '宾语', '/ˈkɒntæktləs/ /ˈpeɪmənt/ /ˈsɪstəmz/', '无接触支付系统'],
      [11, 19, '目的状语', '/tuː/ /ɪmˈpruːv/ /ˈtʃɛkaʊt/ /ɪˈfɪʃənsi/ /ænd/ /rɪˈdjuːs/ /kæʃ-ˈhændlɪŋ/ /kɒsts/', '以提升结账效率并降低现金处理成本'],
    ],
    [['支付科技', 'contactless payment (无接触支付), checkout efficiency (结账效率), cash-handling costs (现金处理成本)']]
  ),
  build(
    'q_shopping_s107',
    '库存损耗持续侵蚀零售利润，促使企业部署更先进的防损监控技术',
    'Inventory shrinkage continues to erode retail margins, prompting companies to deploy more advanced loss-prevention surveillance technology.',
    [
      [0, 1, '主语', '/ˈɪnvəntɔːri/ /ˈʃrɪŋkɪdʒ/', '库存损耗'],
      [2, 4, '谓语', '/kənˈtɪnjuːz/ /tuː/ /ɪˈroʊd/', '持续侵蚀'],
      [5, 6, '宾语', '/ˈriːteɪl/ /ˈmɑːrdʒɪnz/', '零售利润'],
      [7, 15, '结果状语(分词)', '/ˈprɒmptɪŋ/ /ˈkʌmpəniz/ /tuː/ /dɪˈplɔɪ/ /mɔːr/ /ədˈvɑːnst/ /lɒs-prɪˈvɛnʃən/ /sərˈveɪləns/ /tɛkˈnɒlədʒi/', '促使企业部署更先进的防损监控技术'],
    ],
    [['库存管理', 'inventory shrinkage (库存损耗), retail margins (零售利润), loss-prevention (防损)']]
  ),
  build(
    'q_shopping_s108',
    '高端百货公司为贵宾客户提供一对一私人导购服务，以打造高度个性化的购物体验',
    'The luxury department store provides one-on-one personal shopping services for VIP clients to create a highly personalized retail experience.',
    [
      [0, 3, '主语', '/ðə/ /ˈlʌgʒəri/ /dɪˈpɑːrtmənt/ /stɔːr/', '高端百货公司'],
      [4, 4, '谓语', '/prəˈvaɪdz/', '提供'],
      [5, 9, '宾语', '/wʌn-ɒn-wʌn/ /ˈpɜːrsənəl/ /ˈʃɒpɪŋ/ /ˈsɜːrvɪsɪz/', '一对一私人导购服务'],
      [10, 12, '对象状语', '/fɔːr/ /viː-aɪ-piː/ /ˈklaɪənts/', '为贵宾客户'],
      [13, 19, '目的状语', '/tuː/ /kriˈeɪt/ /ə/ /ˈhaɪli/ /ˌpɜːrsənəˈlaɪzd/ /ˈriːteɪl/ /ɪkˈspɪəriəns/', '以打造高度个性化的购物体验'],
    ],
    [['高端服务', 'personal shopping (私人导购), VIP client (贵宾客户), personalized experience (个性化体验)']]
  ),
  build(
    'q_shopping_s109',
    '动态定价算法使零售商能够根据实时需求波动迅速调整商品价格',
    'Dynamic pricing algorithms enable retailers to adjust product prices swiftly in response to real-time demand fluctuations.',
    [
      [0, 2, '主语', '/daɪˈnæmɪk/ /ˈpraɪsɪŋ/ /ˈælgəˌrɪðəmz/', '动态定价算法'],
      [3, 3, '谓语', '/ɪˈneɪbəl/', '使……能够'],
      [4, 5, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [6, 9, '宾补(不定式)', '/tuː/ /əˈdʒʌst/ /ˈprɒdʌkt/ /ˈpraɪsɪz/', '迅速调整商品价格'],
      [10, 16, '方式状语', '/ˈswɪftli/ /ɪn/ /rɪˈspɒns/ /tuː/ /riːl-taɪm/ /dɪˈmænd/ /ˌflʌktʃuˈeɪʃənz/', '以响应实时需求波动'],
    ],
    [['定价策略', 'dynamic pricing (动态定价), real-time demand (实时需求), adjust prices (调整价格)']]
  ),
  build(
    'q_shopping_s110',
    '快闪店策略使新兴品牌能够在不签订长期租约的情况下测试市场反应',
    'The pop-up store strategy allows emerging brands to test market response without committing to long-term lease agreements.',
    [
      [0, 3, '主语', '/ðə/ /pɒp-ʌp/ /stɔːr/ /ˈstrætədʒi/', '快闪店策略'],
      [4, 4, '谓语', '/əˈlaʊz/', '使……能够'],
      [5, 6, '宾语', '/ɪˈmɜːrdʒɪŋ/ /brændz/', '新兴品牌'],
      [7, 10, '宾补', '/tuː/ /tɛst/ /ˈmɑːrkɪt/ /rɪˈspɒns/', '测试市场反应'],
      [11, 17, '方式状语', '/wɪˈðaʊt/ /kəˈmɪtɪŋ/ /tuː/ /lɒŋ-tɜːrm/ /liːs/ /əˈgriːmənts/', '在不签订长期租约的情况下'],
    ],
    [['快闪零售', 'pop-up store (快闪店), market response (市场反应), lease agreement (租约)']]
  ),
  build(
    'q_shopping_s111',
    '该忠诚度计划根据累计消费金额将会员划分为不同等级，并提供差异化权益',
    'The loyalty program tiers members based on cumulative spending and offers differentiated benefits at each level.',
    [
      [0, 2, '主语', '/ðə/ /ˈlɔɪəlti/ /ˈproʊgræm/', '该忠诚度计划'],
      [3, 3, '谓语1', '/ˈtaɪərz/', '将……分级'],
      [4, 4, '宾语1', '/ˈmɛmbərz/', '会员'],
      [5, 8, '方式状语', '/beɪst/ /ɒn/ /ˈkjuːmjʊlətɪv/ /ˈspɛndɪŋ/', '根据累计消费金额'],
      [9, 9, '连词', '/ænd/', '并'],
      [10, 10, '谓语2', '/ˈɔːfərz/', '提供'],
      [11, 12, '宾语2', '/ˌdɪfəˈrɛnʃieɪtɪd/ /ˈbɛnɪfɪts/', '差异化权益'],
      [13, 15, '地点状语', '/æt/ /iːtʃ/ /ˈlɛvəl/', '在每个等级'],
    ],
    [['会员营销', 'loyalty program (忠诚度计划), cumulative spending (累计消费), differentiated benefits (差异化权益)']]
  ),
  build(
    'q_shopping_s112',
    '专业的视觉陈列团队通过战略性商品摆放来提升高毛利品类的销售转化率',
    'The professional visual merchandising team boosts conversion rates for high-margin categories through strategic product placement.',
    [
      [0, 4, '主语', '/ðə/ /prəˈfɛʃənəl/ /ˈvɪʒuəl/ /ˈmɜːrtʃənˌdaɪzɪŋ/ /tiːm/', '专业视觉陈列团队'],
      [5, 5, '谓语', '/buːsts/', '提升'],
      [6, 7, '宾语', '/kənˈvɜːrʃən/ /reɪts/', '转化率'],
      [8, 10, '对象状语', '/fɔːr/ /haɪ-ˈmɑːrdʒɪn/ /ˌkætəˈgɔːriz/', '针对高毛利品类'],
      [11, 14, '方式状语', '/θruː/ /strəˈtiːdʒɪk/ /ˈprɒdʌkt/ /ˈpleɪsmənt/', '通过战略性商品摆放'],
    ],
    [['视觉陈列', 'visual merchandising (视觉陈列), conversion rate (转化率), high-margin (高毛利的)']]
  ),
  build(
    'q_shopping_s113',
    '全球供应链中断迫使零售商重新评估其对单一采购来源的过度依赖',
    'Global supply chain disruptions have forced retailers to reassess their excessive reliance on single-source procurement.',
    [
      [0, 3, '主语', '/ˈgləʊbəl/ /səˈplaɪ/ /tʃeɪn/ /dɪsˈrʌpʃənz/', '全球供应链中断'],
      [4, 5, '谓语(现完)', '/hæv/ /fɔːrst/', '已经迫使'],
      [6, 6, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [7, 14, '宾补', '/tuː/ /ˌriːəˈsɛs/ /ðɛər/ /ɪkˈsɛsɪv/ /rɪˈlaɪəns/ /ɒn/ /ˈsɪŋgəl-sɔːrs/ /prəˈkjuərəmənt/', '重新评估对单一采购来源的过度依赖'],
    ],
    [['供应链', 'supply chain disruption (供应链中断), single-source procurement (单一来源采购), reassess (重新评估)']]
  ),
  build(
    'q_shopping_s114',
    '客户流失分析揭示，冗长的退换货流程是削弱品牌忠诚度的主要因素之一',
    'Customer churn analysis reveals that lengthy return-and-exchange procedures are a major factor undermining brand loyalty.',
    [
      [0, 2, '主语', '/ˈkʌstəmər/ /tʃɜːrn/ /əˈnælɪsɪs/', '客户流失分析'],
      [3, 3, '谓语', '/rɪˈviːlz/', '揭示'],
      [4, 9, '宾语从句(主语)', '/ðæt/ /ˈlɛŋθi/ /rɪˈtɜːrn-ænd-ɪksˈtʃeɪndʒ/ /prəˈsiːdʒərz/ /ɑːr/', '冗长的退换货流程是'],
      [10, 12, '宾语从句(表语)', '/ə/ /ˈmeɪdʒər/ /ˈfæktər/', '主要因素之一'],
      [13, 15, '定语(分词)', '/ˌʌndərˈmaɪnɪŋ/ /brænd/ /ˈlɔɪəlti/', '削弱品牌忠诚度的'],
    ],
    [['客户分析', 'customer churn (客户流失), return-and-exchange (退换货), brand loyalty (品牌忠诚度)']]
  ),
  build(
    'q_shopping_s115',
    '国际机场免税店为过境旅客提供大幅折扣的奢侈品牌商品，且免除进口关税',
    'Airport duty-free shops offer transit passengers heavily discounted luxury brand merchandise exempt from import duties.',
    [
      [0, 3, '主语', '/ˈeəpɔːrt/ /ˈdjuːti-friː/ /ʃɒps/', '机场免税店'],
      [4, 4, '谓语', '/ˈɔːfər/', '提供'],
      [5, 6, '间接宾语', '/ˈtrænzɪt/ /ˈpæsɪndʒərz/', '过境旅客'],
      [7, 12, '直接宾语', '/ˈhɛvɪli/ /ˈdɪskaʊntɪd/ /ˈlʌgʒəri/ /brænd/ /ˈmɜːrtʃənˌdaɪz/', '大幅折扣的奢侈品牌商品'],
      [13, 16, '定语(形容词)', '/ɪgˈzɛmpt/ /frɒm/ /ˈɪmpɔːrt/ /ˈdjuːtiz/', '免除进口关税的'],
    ],
    [['免税零售', 'duty-free shop (免税店), transit passenger (过境旅客), import duty (进口关税)']]
  ),
  build(
    'q_shopping_s116',
    '限时闪购活动通过制造稀缺感与紧迫感来加速消费者的购买决策',
    'Flash sale campaigns accelerate consumer purchase decisions by creating a sense of scarcity and urgency.',
    [
      [0, 2, '主语', '/flæʃ/ /seɪl/ /kæmˈpeɪnz/', '限时闪购活动'],
      [3, 3, '谓语', '/ˈæksəleɪt/', '加速'],
      [4, 6, '宾语', '/kənˈsjuːmər/ /ˈpɜːrtʃəs/ /dɪˈsɪʒənz/', '消费者购买决策'],
      [7, 14, '方式状语', '/baɪ/ /kriˈeɪtɪŋ/ /ə/ /sɛns/ /ɒv/ /ˈskɛəsɪti/ /ænd/ /ˈɜːrdʒənsi/', '通过制造稀缺感与紧迫感'],
    ],
    [['促销策略', 'flash sale (限时闪购), sense of scarcity (稀缺感), purchase decision (购买决策)']]
  ),
  build(
    'q_shopping_s117',
    '零售分析仪表盘使区域经理能够实时追踪各门店的销售业绩与库存周转率',
    'The retail analytics dashboard enables regional managers to track store sales performance and inventory turnover rates in real time.',
    [
      [0, 3, '主语', '/ðə/ /ˈriːteɪl/ /əˈnælɪtɪks/ /ˈdæʃbɔːrd/', '零售分析仪表盘'],
      [4, 4, '谓语', '/ɪˈneɪbəlz/', '使……能够'],
      [5, 6, '宾语', '/ˈriːdʒənəl/ /ˈmænɪdʒərz/', '区域经理'],
      [7, 16, '宾补', '/tuː/ /træk/ /stɔːr/ /seɪlz/ /pərˈfɔːrməns/ /ænd/ /ˈɪnvəntɔːri/ /ˈtɜːnəʊvər/ /reɪts/ /ɪn/ /riːl/ /taɪm/', '实时追踪各门店销售业绩与库存周转率'],
    ],
    [['数据分析', 'retail analytics (零售分析), inventory turnover (库存周转), in real time (实时)']]
  ),
  build(
    'q_shopping_s118',
    '先进的电子商品监控标签显著降低了大型超市中的入店盗窃发生率',
    'Advanced electronic article surveillance tags have significantly reduced in-store theft rates at large supermarkets.',
    [
      [0, 4, '主语', '/ədˈvɑːnst/ /ɪlɛkˈtrɒnɪk/ /ˈɑːrtɪkəl/ /sərˈveɪləns/ /tægz/', '先进电子商品监控标签'],
      [5, 7, '谓语(现完)', '/hæv/ /sɪgˈnɪfɪkəntli/ /rɪˈdjuːst/', '已显著降低'],
      [8, 11, '宾语', '/ɪn-stɔːr/ /θɛft/ /reɪts/', '入店盗窃发生率'],
      [12, 14, '地点状语', '/æt/ /lɑːrdʒ/ /ˈsuːpərmɑːrkɪts/', '在大型超市中'],
    ],
    [['防损技术', 'electronic article surveillance (电子商品监控), in-store theft (入店盗窃), significantly reduce (显著降低)']]
  ),
  build(
    'q_shopping_s119',
    '路边取货服务在疫情期间迅速普及，并已成为全渠道零售的核心组成部分',
    'Curbside pickup services proliferated rapidly during the pandemic and have become a core component of omnichannel retail.',
    [
      [0, 2, '主语', '/ˈkɜːrbsaɪd/ /ˈpɪkʌp/ /ˈsɜːrvɪsɪz/', '路边取货服务'],
      [3, 3, '谓语1', '/prəˈlɪfəreɪtɪd/', '迅速普及'],
      [4, 4, '状语', '/ˈræpɪdli/', '迅速地'],
      [5, 7, '时间状语', '/ˈdjʊərɪŋ/ /ðə/ /pænˈdɛmɪk/', '在疫情期间'],
      [8, 8, '连词', '/ænd/', '并'],
      [9, 10, '谓语2(现完)', '/hæv/ /bɪˈkʌm/', '已成为'],
      [11, 16, '宾语', '/ə/ /kɔːr/ /kəmˈpoʊnənt/ /ɒv/ /ˌɒmniˈtʃænəl/ /ˈriːteɪl/', '全渠道零售的核心组成部分'],
    ],
    [['全渠道服务', 'curbside pickup (路边取货), proliferate (迅速普及), omnichannel retail (全渠道零售)']]
  ),
  build(
    'q_shopping_s120',
    '品牌大使计划在社交媒体平台上有效扩大了新产品的曝光度与口碑传播',
    'The brand ambassador program has effectively expanded product exposure and word-of-mouth promotion on social media platforms.',
    [
      [0, 3, '主语', '/ðə/ /brænd/ /æmˈbæsədər/ /ˈproʊgræm/', '品牌大使计划'],
      [4, 6, '谓语(现完)', '/hæz/ /ɪˈfɛktɪvli/ /ɪkˈspændɪd/', '已有效扩大'],
      [7, 8, '宾语', '/ˈprɒdʌkt/ /ɪkˈspoʊʒər/', '产品曝光度'],
      [9, 9, '连词', '/ænd/', '与'],
      [10, 12, '宾语(并列)', '/wɜːrd-ɒv-ˈmaʊθ/ /prəˈmoʊʃən/', '口碑传播'],
      [13, 17, '地点状语', '/ɒn/ /ˈsoʊʃəl/ /ˈmiːdiə/ /ˈplætfɔːrmz/', '在社交媒体平台上'],
    ],
    [['品牌营销', 'brand ambassador (品牌大使), word-of-mouth promotion (口碑传播), product exposure (产品曝光)']]
  ),
  build(
    'q_shopping_s121',
    '季末降价策略旨在在下一季新品上架前清空过季库存并回收营运资金',
    'The end-of-season markdown strategy aims to clear out-of-season inventory and recover working capital before new collections arrive.',
    [
      [0, 4, '主语', '/ðə/ /ɛnd-ɒv-ˈsiːzən/ /ˈmɑːrkdɑʊn/ /ˈstrætədʒi/', '季末降价策略'],
      [5, 5, '谓语', '/eɪmz/', '旨在'],
      [6, 13, '宾语(不定式)', '/tuː/ /klɪər/ /aʊt-ɒv-ˈsiːzən/ /ˈɪnvəntɔːri/ /ænd/ /rɪˈkʌvər/ /ˈwɜːrkɪŋ/ /ˈkæpɪtəl/', '清空过季库存并回收营运资金'],
      [14, 17, '时间状语', '/bɪˈfɔːr/ /njuː/ /kəˈlɛkʃənz/ /əˈraɪv/', '在新系列到货之前'],
    ],
    [['库存策略', 'markdown strategy (降价策略), out-of-season inventory (过季库存), working capital (营运资金)']]
  ),
  build(
    'q_shopping_s122',
    '商场部署的客流传感器为租户提供了关于消费者动线与高峰时段的精准数据',
    'Foot traffic sensors deployed in the mall provide tenants with precise data on consumer movement patterns and peak hours.',
    [
      [0, 2, '主语', '/fʊt/ /ˈtræfɪk/ /ˈsɛnsərz/', '客流传感器'],
      [3, 6, '定语(分词)', '/dɪˈplɔɪd/ /ɪn/ /ðə/ /mɔːl/', '部署在商场中的'],
      [7, 7, '谓语', '/prəˈvaɪd/', '提供'],
      [8, 8, '间接宾语', '/ˈtɛnənts/', '租户'],
      [9, 18, '直接宾语', '/wɪð/ /prɪˈsaɪs/ /ˈdeɪtə/ /ɒn/ /kənˈsjuːmər/ /ˈmuːvmənt/ /ˈpætərnz/ /ænd/ /piːk/ /aʊərz/', '关于消费者动线与高峰时段的精准数据'],
    ],
    [['商场数据', 'foot traffic (客流量), movement pattern (动线), peak hours (高峰时段)']]
  ),
  build(
    'q_shopping_s123',
    '跨境电商平台使中小零售商能够以较低成本进入国际市场并拓展海外客户群',
    'Cross-border e-commerce platforms enable small and medium retailers to enter international markets at lower cost and expand overseas customer bases.',
    [
      [0, 3, '主语', '/krɒs-ˈbɔːrdər/ /ˈiːˌkɒmɜːrs/ /ˈplætfɔːrmz/', '跨境电商平台'],
      [4, 4, '谓语', '/ɪˈneɪbəl/', '使……能够'],
      [5, 8, '宾语', '/smɔːl/ /ænd/ /ˈmiːdiəm/ /ˈriːteɪlərz/', '中小零售商'],
      [9, 20, '宾补', '/tuː/ /ˈɛntər/ /ˌɪntərˈnæʃənəl/ /ˈmɑːrkɪts/ /æt/ /ˈloʊər/ /kɒst/ /ænd/ /ɪkˈspænd/ /ˌoʊvərˈsiːz/ /ˈkʌstəmər/ /ˈbeɪsɪz/', '以较低成本进入国际市场并拓展海外客户群'],
    ],
    [['跨境电商', 'cross-border e-commerce (跨境电商), overseas customer base (海外客户群), enter international markets (进入国际市场)']]
  ),
  build(
    'q_shopping_s124',
    '自有品牌扩张战略帮助大型连锁超市提升利润率并增强对供应链的控制力',
    'Private label expansion strategies help large supermarket chains improve profit margins and strengthen control over supply chains.',
    [
      [0, 3, '主语', '/ˈpraɪvət/ /ˈleɪbəl/ /ɪkˈspænʃən/ /ˈstrætədʒiz/', '自有品牌扩张战略'],
      [4, 4, '谓语', '/hɛlp/', '帮助'],
      [5, 8, '宾语', '/lɑːrdʒ/ /ˈsuːpərmɑːrkɪt/ /tʃeɪnz/', '大型连锁超市'],
      [9, 17, '宾补', '/ɪmˈpruːv/ /ˈprɒfɪt/ /ˈmɑːrdʒɪnz/ /ænd/ /ˈstrɛŋθən/ /kənˈtroʊl/ /ˈoʊvər/ /səˈplaɪ/ /tʃeɪnz/', '提升利润率并增强对供应链的控制力'],
    ],
    [['自有品牌', 'private label (自有品牌), profit margin (利润率), supply chain control (供应链控制)']]
  ),
  build(
    'q_shopping_s125',
    '店内体验设计日益强调鼓励顾客驻足探索的互动区域',
    'In-store experience design increasingly emphasizes interactive zones that encourage customers to linger and explore.',
    [
      [0, 3, '主语', '/ɪn-stɔːr/ /ɪkˈspɪəriəns/ /dɪˈzaɪn/', '店内体验设计'],
      [4, 4, '状语', '/ɪnˈkriːsɪŋli/', '日益'],
      [5, 5, '谓语', '/ˈɛmfəsaɪzɪz/', '强调'],
      [6, 7, '宾语', '/ˌɪntərˈæktɪv/ /zoʊnz/', '互动区域'],
      [8, 14, '定语从句', '/ðæt/ /ɪnˈkɜːrɪdʒ/ /ˈkʌstəmərz/ /tuː/ /ˈlɪŋgər/ /ænd/ /ɪkˈsplɔːr/', '鼓励顾客驻足探索的'],
    ],
    [['体验零售', 'in-store experience (店内体验), interactive zone (互动区域), linger (驻足)']]
  ),
  build(
    'q_shopping_s126',
    '先进的退货欺诈检测系统利用机器学习算法识别异常退换货模式',
    'Advanced return fraud detection systems use machine learning algorithms to identify anomalous return-and-exchange patterns.',
    [
      [0, 4, '主语', '/ədˈvɑːnst/ /rɪˈtɜːrn/ /frɔːd/ /dɪˈtɛkʃən/ /ˈsɪstəmz/', '退货欺诈检测系统'],
      [5, 5, '谓语', '/juːz/', '利用'],
      [6, 8, '宾语', '/məˈʃiːn/ /ˈlɜːrnɪŋ/ /ˈælgəˌrɪðəmz/', '机器学习算法'],
      [9, 14, '目的状语', '/tuː/ /aɪˈdɛntɪfaɪ/ /əˈnɒmələs/ /rɪˈtɜːrn-ænd-ɪksˈtʃeɪndʒ/ /ˈpætərnz/', '识别异常退换货模式'],
    ],
    [['反欺诈', 'return fraud (退货欺诈), machine learning (机器学习), anomalous pattern (异常模式)']]
  ),
  build(
    'q_shopping_s127',
    '订阅盒商业模式通过定期配送精选商品来培养稳定的经常性收入流',
    'The subscription box business model cultivates stable recurring revenue streams through regular delivery of curated merchandise.',
    [
      [0, 4, '主语', '/ðə/ /səbˈskrɪpʃən/ /bɒks/ /ˈbɪznəs/ /ˈmɒdəl/', '订阅盒商业模式'],
      [5, 5, '谓语', '/ˈkʌltɪveɪts/', '培养'],
      [6, 9, '宾语', '/ˈsteɪbəl/ /rɪˈkɜːrɪŋ/ /ˈrɛvənjuː/ /striːmz/', '稳定的经常性收入流'],
      [10, 15, '方式状语', '/θruː/ /ˈrɛgjʊlər/ /dɪˈlɪvəri/ /ɒv/ /kjʊˈreɪtɪd/ /ˈmɜːrtʃənˌdaɪz/', '通过定期配送精选商品'],
    ],
    [['订阅经济', 'subscription box (订阅盒), recurring revenue (经常性收入), curated merchandise (精选商品)']]
  ),
  build(
    'q_shopping_s128',
    '零售媒体网络使品牌商能够在大型零售商的数字平台上精准投放定向广告',
    'Retail media networks allow brands to place targeted advertisements precisely on major retailers digital platforms.',
    [
      [0, 2, '主语', '/ˈriːteɪl/ /ˈmiːdiə/ /ˈnɛtwɜːrks/', '零售媒体网络'],
      [3, 3, '谓语', '/əˈlaʊ/', '使……能够'],
      [4, 4, '宾语', '/brændz/', '品牌商'],
      [5, 13, '宾补', '/tuː/ /pleɪs/ /ˈtɑːrgɪtɪd/ /ˌædvərˈtaɪzmənts/ /ˈprɛsɪsli/ /ɒn/ /ˈmeɪdʒər/ /ˈriːteɪlərz/ /ˈdɪdʒɪtəl/ /ˈplætfɔːrmz/', '在大型零售商数字平台上精准投放定向广告'],
    ],
    [['零售广告', 'retail media network (零售媒体网络), targeted advertisement (定向广告), digital platform (数字平台)']]
  ),
  build(
    'q_shopping_s129',
    '消费者情绪追踪工具帮助零售商预判需求变化并优化库存采购决策',
    'Consumer sentiment tracking tools help retailers anticipate demand shifts and optimize inventory procurement decisions.',
    [
      [0, 3, '主语', '/kənˈsjuːmər/ /ˈsɛntɪmənt/ /ˈtrækɪŋ/ /tuːlz/', '消费者情绪追踪工具'],
      [4, 4, '谓语', '/hɛlp/', '帮助'],
      [5, 5, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [6, 12, '宾补', '/æntɪˈsɪpeɪt/ /dɪˈmænd/ /ʃɪfts/ /ænd/ /ˈɒptɪmaɪz/ /ˈɪnvəntɔːri/ /prəˈkjuərəmənt/ /dɪˈsɪʒənz/', '预判需求变化并优化库存采购决策'],
    ],
    [['消费者洞察', 'consumer sentiment (消费者情绪), anticipate demand (预判需求), procurement decision (采购决策)']]
  ),
  build(
    'q_shopping_s130',
    '主力租户谈判结果往往决定购物中心的整体定位与招商吸引力',
    'Anchor tenant negotiation outcomes often determine a shopping malls overall positioning and tenant attraction appeal.',
    [
      [0, 3, '主语', '/ˈæŋkər/ /ˈtɛnənt/ /ˌnɛgəʊʃiˈeɪʃən/ /ˈaʊtkʌmz/', '主力租户谈判结果'],
      [4, 4, '状语', '/ˈɒfən/', '往往'],
      [5, 5, '谓语', '/dɪˈtɜːrmɪn/', '决定'],
      [6, 12, '宾语', '/ə/ /ˈʃɒpɪŋ/ /mɔːlz/ /ˌoʊvərˈɔːl/ /pəˈzɪʃənɪŋ/ /ænd/ /ˈtɛnənt/ /əˈtriːt/', '购物中心的整体定位与招商吸引力'],
    ],
    [['商业地产', 'anchor tenant (主力租户), overall positioning (整体定位), tenant attraction (招商吸引力)']]
  ),
  build(
    'q_shopping_s131',
    '当日达配送承诺已成为电商平台在激烈竞争中获取客户的关键差异化优势',
    'Same-day delivery promises have become a key differentiating advantage for e-commerce platforms competing fiercely for customers.',
    [
      [0, 2, '主语', '/seɪm-deɪ/ /dɪˈlɪvəri/ /ˈprɒmɪsɪz/', '当日达配送承诺'],
      [3, 4, '谓语(现完)', '/hæv/ /bɪˈkʌm/', '已成为'],
      [5, 9, '宾语', '/ə/ /kiː/ /ˌdɪfəˈrɛnʃieɪtɪŋ/ /ədˈvɑːntɪdʒ/', '关键差异化优势'],
      [10, 17, '定语(介词短语+分词)', '/fɔːr/ /ˈiːˌkɒmɜːrs/ /ˈplætfɔːrmz/ /kəmˈpiːtɪŋ/ /ˈfɪəsli/ /fɔːr/ /ˈkʌstəmərz/', '电商平台在激烈竞争中获取客户的'],
    ],
    [['物流竞争', 'same-day delivery (当日达), differentiating advantage (差异化优势), e-commerce platform (电商平台)']]
  ),
  build(
    'q_shopping_s132',
    '礼品卡未使用余额为零售商贡献了大量几乎无成本的附带收入',
    'Unused gift card balances contribute substantial virtually cost-free ancillary revenue to retailers.',
    [
      [0, 3, '主语', '/ʌnˈjuːzd/ /gɪft/ /kɑːrd/ /ˈbælənsɪz/', '礼品卡未使用余额'],
      [4, 4, '谓语', '/kənˈtrɪbjuːt/', '贡献'],
      [5, 9, '宾语', '/səbˈstænʃəl/ /ˈvɜːrtʃuəli/ /kɒst-friː/ /ænˈsɪləri/ /ˈrɛvənjuː/', '大量几乎无成本的附带收入'],
      [10, 11, '对象状语', '/tuː/ /ˈriːteɪlərz/', '给零售商'],
    ],
    [['礼品卡经济', 'gift card balance (礼品卡余额), ancillary revenue (附带收入), cost-free (无成本的)']]
  ),
  build(
    'q_shopping_s133',
    '以旧换新计划鼓励消费者升级电子产品，同时促进品牌的循环经济举措',
    'Trade-in programs encourage consumers to upgrade electronics while promoting the brands circular economy initiatives.',
    [
      [0, 1, '主语', '/treɪd-ɪn/ /ˈproʊgræmz/', '以旧换新计划'],
      [2, 2, '谓语', '/ɪnˈkɜːrɪdʒ/', '鼓励'],
      [3, 3, '宾语', '/kənˈsjuːmərz/', '消费者'],
      [4, 6, '宾补', '/tuː/ /ˈʌpgreɪd/ /ɪˌlɛkˈtrɒnɪks/', '升级电子产品'],
      [7, 13, '让步状语', '/waɪl/ /prəˈmoʊtɪŋ/ /ðə/ /brændz/ /ˈsɜːrkjələr/ /ˈiːkənəmi/ /ɪˈnɪʃətɪvz/', '同时促进品牌循环经济举措'],
    ],
    [['以旧换新', 'trade-in program (以旧换新计划), circular economy (循环经济), upgrade electronics (升级电子产品)']]
  ),
  build(
    'q_shopping_s134',
    '比价政策要求零售商在竞争对手提供更低标价时匹配相应的价格',
    'Price matching policies require retailers to match corresponding prices when competitors offer lower listed prices.',
    [
      [0, 2, '主语', '/praɪs/ /ˈmætʃɪŋ/ /ˈpɒlɪsiz/', '比价政策'],
      [3, 3, '谓语', '/rɪˈkwaɪər/', '要求'],
      [4, 4, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [5, 14, '宾补', '/tuː/ /mætʃ/ /ˌkɒrɪˈspɒndɪŋ/ /ˈpraɪsɪz/ /wɛn/ /kəmˈpɛtɪtərz/ /ˈɔːfər/ /ˈloʊər/ /ˈlɪstɪd/ /ˈpraɪsɪz/', '在竞争对手提供更低标价时匹配相应价格'],
    ],
    [['价格政策', 'price matching (比价), listed price (标价), competitor (竞争对手)']]
  ),
  build(
    'q_shopping_s135',
    '购物中心空置率上升迫使业主重新调整租金结构并提供更灵活的租约条款',
    'Rising mall vacancy rates are forcing property owners to restructure rental agreements and offer more flexible lease terms.',
    [
      [0, 3, '主语', '/ˈraɪzɪŋ/ /mɔːl/ /ˈveɪkənsi/ /reɪts/', '购物中心空置率上升'],
      [4, 5, '谓语(现进)', '/ɑːr/ /ˈfɔːrsɪŋ/', '正在迫使'],
      [6, 7, '宾语', '/ˈprɒpərti/ /ˈoʊnərz/', '业主'],
      [8, 17, '宾补', '/tuː/ /riːˈstrʌktʃər/ /ˈrɛntəl/ /əˈgriːmənts/ /ænd/ /ˈɔːfər/ /mɔːr/ /ˈflɛksəbəl/ /liːs/ /tɜːrmz/', '重新调整租金结构并提供更灵活租约条款'],
    ],
    [['商业地产', 'vacancy rate (空置率), lease terms (租约条款), restructure (重新调整)']]
  ),
  build(
    'q_shopping_s136',
    '与网红的合作推广活动显著提升了该品牌在目标受众中的认知度与购买意向',
    'Influencer collaboration campaigns have significantly boosted the brands awareness and purchase intent among target audiences.',
    [
      [0, 2, '主语', '/ˈɪnfluənsər/ /ˌkɒləbəˈreɪʃən/ /kæmˈpeɪnz/', '网红合作推广活动'],
      [3, 5, '谓语(现完)', '/hæv/ /sɪgˈnɪfɪkəntli/ /ˈbuːstɪd/', '已显著提升'],
      [6, 8, '宾语', '/ðə/ /brændz/ /əˈwɛrnəs/', '该品牌认知度'],
      [9, 9, '连词', '/ænd/', '与'],
      [10, 11, '宾语(并列)', '/ˈpɜːrtʃəs/ /ɪnˈtɛnt/', '购买意向'],
      [12, 14, '范围状语', '/əˈmʌŋ/ /ˈtɑːrgɪt/ /ˈɔːdiənsɪz/', '在目标受众中'],
    ],
    [['网红营销', 'influencer collaboration (网红合作), purchase intent (购买意向), target audience (目标受众)']]
  ),
  build(
    'q_shopping_s137',
    '射频识别库存追踪技术大幅提高了仓储盘点的准确性与效率',
    'RFID inventory tracking technology has dramatically improved the accuracy and efficiency of warehouse stocktaking.',
    [
      [0, 3, '主语', '/ɑːr-ɛf-aɪ-diː/ /ˈɪnvəntɔːri/ /ˈtrækɪŋ/ /tɛkˈnɒlədʒi/', '射频识别库存追踪技术'],
      [4, 6, '谓语(现完)', '/hæz/ /drəˈmætɪkli/ /ɪmˈpruːvd/', '已大幅改善'],
      [7, 10, '宾语', '/ði/ /ˈækjərəsi/ /ænd/ /ɪˈfɪʃənsi/', '准确性与效率'],
      [11, 13, '定语', '/ɒv/ /ˈweəhaʊs/ /ˈstɒkˌteɪkɪŋ/', '仓储盘点的'],
    ],
    [['库存技术', 'RFID (射频识别), stocktaking (盘点), warehouse (仓储)']]
  ),
  build(
    'q_shopping_s138',
    '客户终身价值分析使零售商能够更精准地分配营销预算并提升投资回报率',
    'Customer lifetime value analysis enables retailers to allocate marketing budgets more precisely and improve return on investment.',
    [
      [0, 3, '主语', '/ˈkʌstəmər/ /ˈlaɪftaɪm/ /ˈvæljuː/ /əˈnælɪsɪs/', '客户终身价值分析'],
      [4, 4, '谓语', '/ɪˈneɪbəlz/', '使……能够'],
      [5, 5, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [6, 16, '宾补', '/tuː/ /ˈæləkeɪt/ /ˈmɑːrkɪtɪŋ/ /ˈbʌdʒɪts/ /mɔːr/ /prɪˈsaɪsli/ /ænd/ /ɪmˈpruːv/ /rɪˈtɜːn/ /ɒn/ /ɪnˈvɛstmənt/', '更精准分配营销预算并提升投资回报率'],
    ],
    [['客户价值', 'customer lifetime value (客户终身价值), return on investment (投资回报率), allocate budget (分配预算)']]
  ),
  build(
    'q_shopping_s139',
    '体验式零售概念将购物空间转变为集社交、娱乐与品牌叙事于一体的目的地',
    'Experiential retail concepts transform shopping spaces into destinations combining social interaction, entertainment, and brand storytelling.',
    [
      [0, 2, '主语', '/ɪkˈspɪəriənʃəl/ /ˈriːteɪl/ /ˈkɒnsɛpts/', '体验式零售概念'],
      [3, 3, '谓语', '/trænsˈfɔːrm/', '将……转变为'],
      [4, 5, '宾语', '/ˈʃɒpɪŋ/ /ˈspeɪsɪz/', '购物空间'],
      [6, 15, '宾补', '/ˈɪntuː/ /ˌdɛstɪˈneɪʃənz/ /kəmˈbaɪnɪŋ/ /ˈsoʊʃəl/ /ˌɪntərˈækʃən/ /ˌɛntərˈteɪnmənt/ /ænd/ /brænd/ /ˈstɔːritɛlɪŋ/', '集社交、娱乐与品牌叙事于一体的目的地'],
    ],
    [['体验零售', 'experiential retail (体验式零售), brand storytelling (品牌叙事), destination (目的地)']]
  ),
  build(
    'q_shopping_s140',
    '从批发向零售的转型帮助该制造商直接触达终端消费者并获取更高利润',
    'The wholesale-to-retail pivot has helped the manufacturer reach end consumers directly and capture higher margins.',
    [
      [0, 3, '主语', '/ðə/ /ˈhoʊlseɪl-tuː-ˈriːteɪl/ /ˈpɪvət/', '从批发向零售的转型'],
      [4, 5, '谓语(现完)', '/hæz/ /hɛlpt/', '已帮助'],
      [6, 7, '宾语', '/ðə/ /ˌmænjʊˈfæktʃərər/', '该制造商'],
      [8, 15, '宾补', '/riːtʃ/ /ɛnd/ /kənˈsjuːmərz/ /dɪˈrɛktli/ /ænd/ /ˈkæptʃər/ /ˈhaɪər/ /ˈmɑːrdʒɪnz/', '直接触达终端消费者并获取更高利润'],
    ],
    [['渠道转型', 'wholesale-to-retail (批发转零售), end consumer (终端消费者), capture margins (获取利润)']]
  ),
  build(
    'q_shopping_s141',
    '防伪措施包括全息标签、区块链溯源与专用认证应用程序',
    'Anti-counterfeit measures include holographic labels, blockchain traceability, and dedicated authentication applications.',
    [
      [0, 1, '主语', '/ˈænti-ˈkaʊntərfɪt/ /ˈmɛʒərz/', '防伪措施'],
      [2, 2, '谓语', '/ɪnˈkluːd/', '包括'],
      [3, 11, '宾语', '/ˌhɒləˈgræfɪk/ /ˈleɪbəlz/ /ˌblɒktʃeɪn/ /ˌtreɪsəˈbɪlɪti/ /ænd/ /ˈdɛdɪkeɪtɪd/ /ˌɔːθɛntɪˈkeɪʃən/ /ˌæplɪˈkeɪʃənz/', '全息标签、区块链溯源与专用认证应用程序'],
    ],
    [['品牌保护', 'anti-counterfeit (防伪), blockchain traceability (区块链溯源), authentication (认证)']]
  ),
  build(
    'q_shopping_s142',
    '无收银台商店依靠计算机视觉与传感器融合技术自动完成商品识别与结算',
    'Checkout-free stores rely on computer vision and sensor fusion technology to automatically identify merchandise and process payments.',
    [
      [0, 1, '主语', '/ˈtʃɛkaʊt-friː/ /stɔːrz/', '无收银台商店'],
      [2, 2, '谓语', '/rɪˈlaɪ/', '依靠'],
      [3, 9, '宾语', '/kəmˈpjuːtər/ /ˈvɪʒən/ /ænd/ /ˈsɛnsər/ /ˈfjuːʒən/ /tɛkˈnɒlədʒi/', '计算机视觉与传感器融合技术'],
      [10, 16, '目的状语', '/tuː/ /ˌɔːtəˈmætɪkli/ /aɪˈdɛntɪfaɪ/ /ˈmɜːrtʃənˌdaɪz/ /ænd/ /ˈprɒsɛs/ /ˈpeɪmənts/', '自动完成商品识别与结算'],
    ],
    [['零售科技', 'checkout-free store (无收银台商店), sensor fusion (传感器融合), computer vision (计算机视觉)']]
  ),
  build(
    'q_shopping_s143',
    '产品推荐引擎通过分析浏览与购买历史为顾客提供高度个性化的购物建议',
    'Product recommendation engines provide highly personalized shopping suggestions by analyzing browsing and purchase histories.',
    [
      [0, 2, '主语', '/ˈprɒdʌkt/ /ˌrɛkəmənˈdeɪʃən/ /ˈɛndʒɪnz/', '产品推荐引擎'],
      [3, 3, '谓语', '/prəˈvaɪd/', '提供'],
      [4, 7, '宾语', '/ˈhaɪli/ /ˌpɜːrsənəˈlaɪzd/ /ˈʃɒpɪŋ/ /səˈdʒɛstʃənz/', '高度个性化的购物建议'],
      [8, 13, '方式状语', '/baɪ/ /ˈænəˌlaɪzɪŋ/ /ˈbraʊzɪŋ/ /ænd/ /ˈpɜːrtʃəs/ /ˈhɪstəriz/', '通过分析浏览与购买历史'],
    ],
    [['个性化推荐', 'recommendation engine (推荐引擎), purchase history (购买历史), personalized (个性化的)']]
  ),
  build(
    'q_shopping_s144',
    '季节性招聘高峰使大型零售商在假日销售旺季前大幅扩充门店一线员工',
    'Seasonal hiring surges prompt large retailers to substantially expand frontline store staff before peak holiday sales periods.',
    [
      [0, 2, '主语', '/ˈsiːzənəl/ /ˈhaɪərɪŋ/ /ˈsɜːrdʒɪz/', '季节性招聘高峰'],
      [3, 3, '谓语', '/prɒmpt/', '促使'],
      [4, 5, '宾语', '/lɑːrdʒ/ /ˈriːteɪlərz/', '大型零售商'],
      [6, 15, '宾补', '/tuː/ /səbˈstænʃəli/ /ɪkˈspænd/ /ˈfrʌntlaɪn/ /stɔːr/ /stæf/ /bɪˈfɔːr/ /piːk/ /ˈhɒlədeɪ/ /seɪlz/ /ˈpɪəriədz/', '在假日销售旺季前大幅扩充门店一线员工'],
    ],
    [['零售人力', 'seasonal hiring (季节性招聘), frontline staff (一线员工), peak sales period (销售旺季)']]
  ),
  build(
    'q_shopping_s145',
    '零售租约谈判通常涉及基本租金、营业额分成与租户装修补贴等复杂条款',
    'Retail lease negotiations typically involve complex terms including base rent, turnover-based revenue sharing, and tenant improvement allowances.',
    [
      [0, 2, '主语', '/ˈriːteɪl/ /liːs/ /ˌnɛgəʊʃiˈeɪʃənz/', '零售租约谈判'],
      [3, 3, '状语', '/ˈtɪpɪkli/', '通常'],
      [4, 4, '谓语', '/ɪnˈvɒlv/', '涉及'],
      [5, 6, '宾语', '/ˈkɒmplɛks/ /tɜːrmz/', '复杂条款'],
      [7, 17, '定语(分词)', '/ɪnˈkluːdɪŋ/ /beɪs/ /rɛnt/ /ˈtɜːnəʊvər-beɪst/ /ˈrɛvənjuː/ /ˈʃɛərɪŋ/ /ænd/ /ˈtɛnənt/ /ˌɪmpruːvmənt/ /əˈlaʊənsɪz/', '包括基本租金、营业额分成与租户装修补贴的'],
    ],
    [['租约条款', 'lease negotiation (租约谈判), turnover-based revenue sharing (营业额分成), tenant improvement allowance (装修补贴)']]
  ),
  build(
    'q_shopping_s146',
    '消费者保护法规要求零售商在促销广告中清晰披露所有附加费用与限制条件',
    'Consumer protection regulations require retailers to clearly disclose all additional fees and restrictions in promotional advertising.',
    [
      [0, 2, '主语', '/kənˈsjuːmər/ /prəˈtɛkʃən/ /ˌrɛgjʊˈleɪʃənz/', '消费者保护法规'],
      [3, 3, '谓语', '/rɪˈkwaɪər/', '要求'],
      [4, 4, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [5, 14, '宾补', '/tuː/ /ˈklɪərli/ /dɪsˈkləʊz/ /ɔːl/ /əˈdɪʃənəl/ /fiːz/ /ænd/ /rɪˈstrɪkʃənz/ /ɪn/ /prəˈmoʊʃənəl/ /ˈædvərtaɪzɪŋ/', '在促销广告中清晰披露所有附加费用与限制条件'],
    ],
    [['法规合规', 'consumer protection (消费者保护), disclose fees (披露费用), promotional advertising (促销广告)']]
  ),
  build(
    'q_shopping_s147',
    '批量采购折扣激励企业客户通过集中采购来降低单位商品成本',
    'Bulk purchasing discounts incentivize corporate clients to reduce per-unit product costs through centralized procurement.',
    [
      [0, 2, '主语', '/bʌlk/ /ˈpɜːrtʃəsɪŋ/ /ˈdɪskaʊnts/', '批量采购折扣'],
      [3, 3, '谓语', '/ɪnˈsɛntɪvaɪz/', '激励'],
      [4, 5, '宾语', '/ˈkɔːrpərət/ /ˈklaɪənts/', '企业客户'],
      [6, 13, '宾补', '/tuː/ /rɪˈdjuːs/ /pər-ˈjuːnɪt/ /ˈprɒdʌkt/ /kɒsts/ /θruː/ /ˈsɛntrəlaɪzd/ /prəˈkjuərəmənt/', '通过集中采购降低单位商品成本'],
    ],
    [['B2B采购', 'bulk purchasing (批量采购), per-unit cost (单位成本), centralized procurement (集中采购)']]
  ),
  build(
    'q_shopping_s148',
    '数字标牌系统通过动态内容展示有效延长了顾客在关键区域的停留时间',
    'Digital signage systems effectively extend customer dwell time in key areas through dynamic content displays.',
    [
      [0, 2, '主语', '/ˈdɪdʒɪtəl/ /ˈsaɪnɪdʒ/ /ˈsɪstəmz/', '数字标牌系统'],
      [3, 4, '状语+谓语', '/ɪˈfɛktɪvli/ /ɪkˈstɛnd/', '有效延长'],
      [5, 7, '宾语', '/ˈkʌstəmər/ /dwɛl/ /taɪm/', '顾客停留时间'],
      [8, 10, '地点状语', '/ɪn/ /kiː/ /ˈeəriəz/', '在关键区域'],
      [11, 14, '方式状语', '/θruː/ /daɪˈnæmɪk/ /ˈkɒntɛnt/ /dɪˈspleɪz/', '通过动态内容展示'],
    ],
    [['店内科技', 'digital signage (数字标牌), dwell time (停留时间), dynamic content (动态内容)']]
  ),
  build(
    'q_shopping_s149',
    '品类管理优化了货架空间分配，以最大化各产品类别的销售贡献与利润表现',
    'Category management optimizes shelf space allocation to maximize sales contribution and profitability across product categories.',
    [
      [0, 1, '主语', '/ˌkætəˈgɔːri/ /ˈmænɪdʒmənt/', '品类管理'],
      [2, 2, '谓语', '/ˈɒptɪmaɪzɪz/', '优化'],
      [3, 5, '宾语', '/ʃɛlf/ /speɪs/ /ˌæləˈkeɪʃən/', '货架空间分配'],
      [6, 13, '目的状语', '/tuː/ /ˈmæksɪmaɪz/ /seɪlz/ /ˌkɒntrɪˈbjuːʃən/ /ænd/ /ˌprɒfɪtəˈbɪlɪti/ /əˈkrɒs/ /ˈprɒdʌkt/ /ˌkætəˈgɔːriz/', '以最大化各产品类别的销售贡献与利润表现'],
    ],
    [['品类管理', 'category management (品类管理), shelf space allocation (货架空间分配), profitability (利润表现)']]
  ),
  build(
    'q_shopping_s150',
    '亏损引流定价策略以低于成本的价格出售特定商品，以吸引顾客购买高利润产品',
    'Loss leader pricing strategies sell specific items below cost to attract customers toward higher-margin products.',
    [
      [0, 3, '主语', '/lɒs/ /ˈliːdər/ /ˈpraɪsɪŋ/ /ˈstrætədʒiz/', '亏损引流定价策略'],
      [4, 4, '谓语', '/sɛl/', '出售'],
      [5, 6, '宾语', '/spəˈsɪfɪk/ /ˈaɪtəmz/', '特定商品'],
      [7, 8, '方式状语', '/bɪˈloʊ/ /kɒst/', '以低于成本的价格'],
      [9, 15, '目的状语', '/tuː/ /əˈtrækt/ /ˈkʌstəmərz/ /təˈwɔːrd/ /ˈhaɪər-ˈmɑːrdʒɪn/ /ˈprɒdʌkts/', '以吸引顾客购买高利润产品'],
    ],
    [['定价策略', 'loss leader (亏损引流商品), below cost (低于成本), higher-margin product (高利润产品)']]
  ),
  build(
    'q_shopping_s151',
    '零售行业整合趋势加速了中小独立店铺的退出，并重塑了区域市场竞争格局',
    'Retail consolidation trends are accelerating the exit of small independent stores and reshaping regional market competition.',
    [
      [0, 2, '主语', '/ˈriːteɪl/ /ˌkɒnsəlɪˈdeɪʃən/ /trɛndz/', '零售行业整合趋势'],
      [3, 4, '谓语(现进)', '/ɑːr/ /ˈæksəleɪtɪŋ/', '正在加速'],
      [5, 10, '宾语', '/ði/ /ˈɛksɪt/ /ɒv/ /smɔːl/ /ˌɪndɪˈpɛndənt/ /stɔːrz/', '中小独立店铺的退出'],
      [11, 11, '连词', '/ænd/', '并'],
      [12, 16, '谓语2(现分)', '/riːˈʃeɪpɪŋ/ /ˈriːdʒənəl/ /ˈmɑːrkɪt/ /ˌkɒmpɪˈtɪʃən/', '重塑区域市场竞争格局'],
    ],
    [['行业趋势', 'retail consolidation (零售整合), independent store (独立店铺), reshape competition (重塑竞争格局)']]
  ),
  build(
    'q_shopping_s152',
    '高端礼品包装服务为奢侈品零售商提供了额外的溢价收入来源',
    'Premium gift wrapping services provide luxury retailers with an additional premium revenue stream.',
    [
      [0, 3, '主语', '/ˈpriːmiəm/ /gɪft/ /ˈræpɪŋ/ /ˈsɜːrvɪsɪz/', '高端礼品包装服务'],
      [4, 4, '谓语', '/prəˈvaɪd/', '提供'],
      [5, 6, '间接宾语', '/ˈlʌgʒəri/ /ˈriːteɪlərz/', '奢侈品零售商'],
      [7, 12, '直接宾语', '/wɪð/ /æn/ /əˈdɪʃənəl/ /ˈpriːmiəm/ /ˈrɛvənjuː/ /striːm/', '额外的溢价收入来源'],
    ],
    [['增值服务', 'gift wrapping (礼品包装), premium revenue (溢价收入), luxury retailer (奢侈品零售商)']]
  ),
  build(
    'q_shopping_s153',
    '线上下单、门店取货的流程显著缩短了配送时间并降低了最后一公里物流成本',
    'The click-and-collect workflow significantly reduces delivery time and lowers last-mile logistics costs.',
    [
      [0, 3, '主语', '/ðə/ /klɪk-ænd-kəˈlɛkt/ /ˈwɜːrkfloʊ/', '线上下单门店取货流程'],
      [4, 5, '状语+谓语', '/sɪgˈnɪfɪkəntli/ /rɪˈdjuːsɪz/', '显著缩短'],
      [6, 7, '宾语', '/dɪˈlɪvəri/ /taɪm/', '配送时间'],
      [8, 8, '连词', '/ænd/', '并'],
      [9, 13, '谓语2', '/ˈloʊərz/ /læst-maɪl/ /ləˈdʒɪstɪks/ /kɒsts/', '降低最后一公里物流成本'],
    ],
    [['全渠道履约', 'click-and-collect (线上下单门店取货), last-mile logistics (最后一公里物流), delivery time (配送时间)']]
  ),
  build(
    'q_shopping_s154',
    '购物篮分析揭示，啤酒与尿布的组合购买模式可优化关联商品的陈列布局',
    'Market basket analysis reveals that beer-and-diaper purchasing patterns can optimize the display layout of complementary products.',
    [
      [0, 2, '主语', '/ˈmɑːrkɪt/ /ˈbæskɪt/ /əˈnælɪsɪs/', '购物篮分析'],
      [3, 3, '谓语', '/rɪˈviːlz/', '揭示'],
      [4, 9, '宾语从句(主语)', '/ðæt/ /bɪər-ænd-ˈdaɪpər/ /ˈpɜːrtʃəsɪŋ/ /ˈpætərnz/ /kæn/', '啤酒与尿布组合购买模式可以'],
      [10, 10, '宾语从句(谓语)', '/ˈɒptɪmaɪz/', '优化'],
      [11, 16, '宾语从句(宾语)', '/ðə/ /dɪˈspleɪ/ /ˈleɪaʊt/ /ɒv/ /ˌkɒmplɪˈmɛntəri/ /ˈprɒdʌkts/', '关联商品的陈列布局'],
    ],
    [['零售分析', 'market basket analysis (购物篮分析), complementary product (关联商品), display layout (陈列布局)']]
  ),
  build(
    'q_shopping_s155',
    '门店布局优化通过引导顾客动线经过高利润区域来提升整体客单价',
    'Store layout optimization increases overall basket size by guiding customer traffic through high-margin zones.',
    [
      [0, 2, '主语', '/stɔːr/ /ˈleɪaʊt/ /ˌɒptɪməˈzeɪʃən/', '门店布局优化'],
      [3, 3, '谓语', '/ˈɪnkriːsɪz/', '提升'],
      [4, 6, '宾语', '/ˌoʊvərˈɔːl/ /ˈbæskɪt/ /saɪz/', '整体客单价'],
      [7, 14, '方式状语', '/baɪ/ /ˈgaɪdɪŋ/ /ˈkʌstəmər/ /ˈtræfɪk/ /θruː/ /haɪ-ˈmɑːrdʒɪn/ /zoʊnz/', '通过引导顾客动线经过高利润区域'],
    ],
    [['门店设计', 'store layout (门店布局), basket size (客单价/购物篮大小), high-margin zone (高利润区域)']]
  ),
  build(
    'q_shopping_s156',
    '品牌资产衡量指标帮助总部评估各门店对整体品牌形象的贡献程度',
    'Brand equity measurement metrics help headquarters assess each stores contribution to the overall brand image.',
    [
      [0, 3, '主语', '/brænd/ /ˈɛkwɪti/ /ˈmɛʒərmənt/ /ˈmɛtrɪks/', '品牌资产衡量指标'],
      [4, 4, '谓语', '/hɛlp/', '帮助'],
      [5, 5, '宾语', '/ˌhɛdˈkwɔːrtərz/', '总部'],
      [6, 14, '宾补', '/əˈsɛs/ /iːtʃ/ /stɔːrz/ /ˌkɒntrɪˈbjuːʃən/ /tuː/ /ði/ /ˌoʊvərˈɔːl/ /brænd/ /ˈɪmɪdʒ/', '评估各门店对整体品牌形象的贡献程度'],
    ],
    [['品牌管理', 'brand equity (品牌资产), contribution (贡献), brand image (品牌形象)']]
  ),
  build(
    'q_shopping_s157',
    '季末清仓大甩卖通常在库存周转压力加剧时以大幅折扣迅速出清滞销商品',
    'End-of-season clearance sales typically offload slow-moving inventory at steep discounts when turnover pressure intensifies.',
    [
      [0, 3, '主语', '/ɛnd-ɒv-ˈsiːzən/ /ˈklɪərəns/ /seɪlz/', '季末清仓大甩卖'],
      [4, 4, '状语', '/ˈtɪpɪkli/', '通常'],
      [5, 5, '谓语', '/ˈɒfləʊd/', '出清'],
      [6, 8, '宾语', '/sləʊ-ˈmuːvɪŋ/ /ˈɪnvəntɔːri/', '滞销库存'],
      [9, 11, '方式状语', '/æt/ /stiːp/ /ˈdɪskaʊnts/', '以大幅折扣'],
      [12, 16, '时间状语', '/wɛn/ /ˈtɜːnəʊvər/ /ˈprɛʃər/ /ɪnˈtɛnsɪfaɪz/', '在库存周转压力加剧时'],
    ],
    [['清仓促销', 'clearance sale (清仓甩卖), slow-moving inventory (滞销库存), steep discount (大幅折扣)']]
  ),
  build(
    'q_shopping_s158',
    '客户细分模型使营销团队能够针对不同消费群体制定差异化的促销方案',
    'Customer segmentation models enable marketing teams to develop differentiated promotional strategies for distinct consumer groups.',
    [
      [0, 2, '主语', '/ˈkʌstəmər/ /ˌsɛgmənˈteɪʃən/ /ˈmɒdəlz/', '客户细分模型'],
      [3, 3, '谓语', '/ɪˈneɪbəl/', '使……能够'],
      [4, 5, '宾语', '/ˈmɑːrkɪtɪŋ/ /tiːmz/', '营销团队'],
      [6, 15, '宾补', '/tuː/ /dɪˈvɛləp/ /ˌdɪfəˈrɛnʃieɪtɪd/ /prəˈmoʊʃənəl/ /ˈstrætədʒiz/ /fɔːr/ /dɪˈstɪŋkt/ /kənˈsjuːmər/ /gruːps/', '针对不同消费群体制定差异化促销方案'],
    ],
    [['精准营销', 'customer segmentation (客户细分), promotional strategy (促销方案), consumer group (消费群体)']]
  ),
  build(
    'q_shopping_s159',
    '零售破产重组往往涉及门店关闭、库存清算与供应商债务重新谈判',
    'Retail bankruptcy restructuring typically involves store closures, inventory liquidation, and renegotiation of supplier debts.',
    [
      [0, 2, '主语', '/ˈriːteɪl/ /ˈbæŋkrʌptsi/ /riːˈstrʌktʃərɪŋ/', '零售破产重组'],
      [3, 3, '状语', '/ˈtɪpɪkli/', '通常'],
      [4, 4, '谓语', '/ɪnˈvɒlvz/', '涉及'],
      [5, 14, '宾语', '/stɔːr/ /ˈkloʊʒərz/ /ˌɪnvəntɔːri/ /ˌlɪkwɪˈdeɪʃən/ /ænd/ /ˌriːnɪˌgoʊʃiˈeɪʃən/ /ɒv/ /səˈplaɪər/ /dɛts/', '门店关闭、库存清算与供应商债务重新谈判'],
    ],
    [['破产重组', 'bankruptcy restructuring (破产重组), inventory liquidation (库存清算), renegotiation (重新谈判)']]
  ),
  build(
    'q_shopping_s160',
    '增强现实虚拟试衣功能显著降低了在线服装零售的退货率',
    'Augmented reality virtual try-on features have significantly reduced return rates in online apparel retail.',
    [
      [0, 4, '主语', '/ɔːgˈmɛntɪd/ /riːˈælɪti/ /ˈvɜːrtʃuəl/ /traɪ-ɒn/ /ˈfiːtʃərz/', '增强现实虚拟试衣功能'],
      [5, 7, '谓语(现完)', '/hæv/ /sɪgˈnɪfɪkəntli/ /rɪˈdjuːst/', '已显著降低'],
      [8, 9, '宾语', '/rɪˈtɜːrn/ /reɪts/', '退货率'],
      [10, 13, '范围状语', '/ɪn/ /ˈɒnˌlaɪn/ /əˈpærəl/ /ˈriːteɪl/', '在在线服装零售中'],
    ],
    [['AR零售', 'augmented reality (增强现实), virtual try-on (虚拟试衣), return rate (退货率)']]
  ),
  build(
    'q_shopping_s161',
    '供应商合规标准涵盖劳工权益、环保认证与产品质量检测等多个维度',
    'Vendor compliance standards encompass labor rights, environmental certifications, and product quality testing across multiple dimensions.',
    [
      [0, 2, '主语', '/ˈvɛndər/ /kəmˈplaɪəns/ /ˈstændərdz/', '供应商合规标准'],
      [3, 3, '谓语', '/ɪnˈkʌmpəs/', '涵盖'],
      [4, 14, '宾语', '/ˈleɪbər/ /raɪts/ /ɪnˌvaɪrənˈmɛntəl/ /ˌsɜːrtɪfɪˈkeɪʃənz/ /ænd/ /ˈprɒdʌkt/ /ˈkwɒlɪti/ /ˈtɛstɪŋ/ /əˈkrɒs/ /ˈmʌltɪpəl/ /dɪˈmɛnʃənz/', '劳工权益、环保认证与产品质量检测等多个维度'],
    ],
    [['供应链合规', 'vendor compliance (供应商合规), environmental certification (环保认证), quality testing (质量检测)']]
  ),
  build(
    'q_shopping_s162',
    '购物车放弃率分析帮助电商平台识别结账流程中的摩擦点并优化用户体验',
    'Shopping cart abandonment analysis helps e-commerce platforms identify friction points in the checkout process and optimize user experience.',
    [
      [0, 3, '主语', '/ˈʃɒpɪŋ/ /kɑːrt/ /əˈbændənmənt/ /əˈnælɪsɪs/', '购物车放弃率分析'],
      [4, 4, '谓语', '/hɛlps/', '帮助'],
      [5, 6, '宾语', '/ˈiːˌkɒmɜːrs/ /ˈplætfɔːrmz/', '电商平台'],
      [7, 18, '宾补', '/aɪˈdɛntɪfaɪ/ /ˈfrɪkʃən/ /pɔɪnts/ /ɪn/ /ðə/ /ˈtʃɛkaʊt/ /ˈprɒsɛs/ /ænd/ /ˈɒptɪmaɪz/ /ˈjuːzər/ /ɪkˈspɪəriəns/', '识别结账流程摩擦点并优化用户体验'],
    ],
    [['电商转化', 'cart abandonment (购物车放弃), friction point (摩擦点), checkout process (结账流程)']]
  ),
  build(
    'q_shopping_s163',
    '品牌奥特莱斯购物中心以折扣价格销售过季商品，同时维护主品牌的定价体系',
    'Premium outlet malls sell off-season merchandise at discounted prices while preserving the main brands pricing structure.',
    [
      [0, 2, '主语', '/ˈpriːmiəm/ /ˈaʊtlɛt/ /mɔːlz/', '品牌奥特莱斯购物中心'],
      [3, 3, '谓语', '/sɛl/', '销售'],
      [4, 6, '宾语', '/ɒf-ˈsiːzən/ /ˈmɜːrtʃənˌdaɪz/', '过季商品'],
      [7, 9, '方式状语', '/æt/ /ˈdɪskaʊntɪd/ /ˈpraɪsɪz/', '以折扣价格'],
      [10, 16, '让步状语', '/waɪl/ /prɪˈzɜːrvɪŋ/ /ðə/ /meɪn/ /brændz/ /ˈpraɪsɪŋ/ /ˈstrʌktʃər/', '同时维护主品牌定价体系'],
    ],
    [['奥特莱斯', 'outlet mall (奥特莱斯), off-season merchandise (过季商品), pricing structure (定价体系)']]
  ),
  build(
    'q_shopping_s164',
    '消费者非必需开支下降通常预示着经济衰退期间零售需求的减弱',
    'Declines in consumer discretionary spending typically signal reduced retail demand during economic downturns.',
    [
      [0, 4, '主语', '/dɪˈklaɪnz/ /ɪn/ /kənˈsjuːmər/ /dɪˈskrɛʃənəri/ /ˈspɛndɪŋ/', '消费者非必需开支下降'],
      [5, 5, '状语', '/ˈtɪpɪkli/', '通常'],
      [6, 6, '谓语', '/ˈsɪgnəl/', '预示'],
      [7, 9, '宾语', '/rɪˈdjuːst/ /ˈriːteɪl/ /dɪˈmænd/', '零售需求减弱'],
      [10, 12, '时间状语', '/ˈdjʊərɪŋ/ /ˌiːkəˈnɒmɪk/ /ˈdaʊntɜːrnz/', '在经济衰退期间'],
    ],
    [['消费趋势', 'discretionary spending (非必需开支), economic downturn (经济衰退), retail demand (零售需求)']]
  ),
  build(
    'q_shopping_s165',
    '零售员工培训计划强调产品知识、销售技巧与卓越客户服务标准的全面提升',
    'Retail workforce training programs emphasize comprehensive improvement in product knowledge, selling skills, and exemplary customer service standards.',
    [
      [0, 3, '主语', '/ˈriːteɪl/ /ˈwɜːrkfɔːrs/ /ˈtreɪnɪŋ/ /ˈproʊgræmz/', '零售员工培训计划'],
      [4, 4, '谓语', '/ˈɛmfəsaɪz/', '强调'],
      [5, 17, '宾语', '/ˌkɒmprɪˈhɛnsɪv/ /ɪmˈpruːvmənt/ /ɪn/ /ˈprɒdʌkt/ /ˈnɒlɪdʒ/ /ˈsɛlɪŋ/ /skɪlz/ /ænd/ /ɪgˈzɛmpləri/ /ˈkʌstəmər/ /ˈsɜːrvɪs/ /ˈstændərdz/', '产品知识、销售技巧与卓越客户服务标准的全面提升'],
    ],
    [['员工培训', 'workforce training (员工培训), selling skills (销售技巧), customer service standards (客户服务标准)']]
  ),
  build(
    'q_shopping_s166',
    '货架陈列费已成为品牌商争取优质零售位置的重要商业谈判筹码',
    'Product placement fees have become a critical commercial bargaining chip for brands seeking premium retail shelf positions.',
    [
      [0, 2, '主语', '/ˈprɒdʌkt/ /ˈpleɪsmənt/ /fiːz/', '货架陈列费'],
      [3, 4, '谓语(现完)', '/hæv/ /bɪˈkʌm/', '已成为'],
      [5, 9, '表语', '/ə/ /ˈkrɪtɪkəl/ /kəˈmɜːrʃəl/ /ˈbɑːrgɪnɪŋ/ /tʃɪp/', '重要的商业谈判筹码'],
      [10, 17, '定语(介词短语)', '/fɔːr/ /brændz/ /ˈsiːkɪŋ/ /ˈpriːmiəm/ /ˈriːteɪl/ /ʃɛlf/ /ˈpɒzɪʃənz/', '品牌商争取优质零售位置的'],
    ],
    [['渠道费用', 'product placement fee (货架陈列费), bargaining chip (谈判筹码), shelf position (货架位置)']]
  ),
  build(
    'q_shopping_s167',
    '可持续包装倡议推动零售商减少一次性塑料用量并采用可降解材料',
    'Sustainable packaging initiatives are driving retailers to reduce single-use plastic consumption and adopt biodegradable materials.',
    [
      [0, 2, '主语', '/səˈsteɪnəbəl/ /ˈpækɪdʒɪŋ/ /ɪˈnɪʃətɪvz/', '可持续包装倡议'],
      [3, 4, '谓语(现进)', '/ɑːr/ /ˈdraɪvɪŋ/', '正在推动'],
      [5, 5, '宾语', '/ˈriːteɪlərz/', '零售商'],
      [6, 15, '宾补', '/tuː/ /rɪˈdjuːs/ /ˈsɪŋgəl-juːs/ /ˈplæstɪk/ /kənˈsʌmpʃən/ /ænd/ /əˈdɒpt/ /ˌbaɪoʊdɪˈgreɪdəbəl/ /məˈtɪəriəlz/', '减少一次性塑料用量并采用可降解材料'],
    ],
    [['可持续零售', 'sustainable packaging (可持续包装), single-use plastic (一次性塑料), biodegradable (可降解的)']]
  ),
  build(
    'q_shopping_s168',
    '移动钱包的普及正在改变零售支付生态，并加速无现金交易场景的扩张',
    'The proliferation of mobile wallets is transforming the retail payment ecosystem and accelerating the expansion of cashless transaction scenarios.',
    [
      [0, 3, '主语', '/ðə/ /prəˌlɪfəˈreɪʃən/ /ɒv/ /ˈmoʊbaɪl/ /ˈwɒlɪts/', '移动钱包的普及'],
      [4, 5, '谓语(现进)', '/ɪz/ /trænsˈfɔːrmɪŋ/', '正在改变'],
      [6, 9, '宾语', '/ðə/ /ˈriːteɪl/ /ˈpeɪmənt/ /ˈiːkəʊsɪstəm/', '零售支付生态'],
      [10, 10, '连词', '/ænd/', '并'],
      [11, 17, '谓语2(现分)', '/ˈæksəleɪtɪŋ/ /ði/ /ɪkˈspænʃən/ /ɒv/ /ˈkæʃləs/ /trænˈzækʃən/ /sɪˈnɑːriəʊz/', '加速无现金交易场景的扩张'],
    ],
    [['移动支付', 'mobile wallet (移动钱包), payment ecosystem (支付生态), cashless transaction (无现金交易)']]
  ),
  build(
    'q_shopping_s169',
    '租户装修补贴条款通常规定业主承担部分门店改造费用以吸引优质品牌入驻',
    'Tenant improvement allowance clauses typically stipulate that landlords cover partial store renovation costs to attract premium brands.',
    [
      [0, 3, '主语', '/ˈtɛnənt/ /ˌɪmpruːvmənt/ /əˈlaʊəns/ /klɔːzɪz/', '租户装修补贴条款'],
      [4, 4, '状语', '/ˈtɪpɪkli/', '通常'],
      [5, 5, '谓语', '/ˈstɪpjʊleɪt/', '规定'],
      [6, 17, '宾语从句', '/ðæt/ /ˈlændlɔːrdz/ /ˈkʌvər/ /ˈpɑːrʃəl/ /stɔːr/ /ˌrɛnəˈveɪʃən/ /kɒsts/ /tuː/ /əˈtrækt/ /ˈpriːmiəm/ /brændz/', '业主承担部分门店改造费用以吸引优质品牌'],
    ],
    [['租约条款', 'tenant improvement allowance (装修补贴), store renovation (门店改造), stipulate (规定)']]
  ),
  build(
    'q_shopping_s170',
    '有组织零售犯罪集团通过大规模盗窃与网上销赃对连锁商店造成重大损失',
    'Organized retail crime syndicates inflict substantial losses on chain stores through large-scale theft and online fencing of stolen goods.',
    [
      [0, 3, '主语', '/ˈɔːrgənaɪzd/ /ˈriːteɪl/ /kraɪm/ /ˈsɪndɪkeɪts/', '有组织零售犯罪集团'],
      [4, 4, '谓语', '/ɪnˈflɪkt/', '造成'],
      [5, 6, '宾语', '/səbˈstænʃəl/ /ˈlɒsɪz/', '重大损失'],
      [7, 9, '对象状语', '/ɒn/ /tʃeɪn/ /stɔːrz/', '对连锁商店'],
      [10, 18, '方式状语', '/θruː/ /lɑːrdʒ-skeɪl/ /θɛft/ /ænd/ /ˈɒnˌlaɪn/ /ˈfɛnsɪŋ/ /ɒv/ /ˈstəʊlən/ /gʊdz/', '通过大规模盗窃与网上销赃'],
    ],
    [['零售安全', 'organized retail crime (有组织零售犯罪), chain store (连锁商店), fencing (销赃)']]
  ),
  build(
    'q_shopping_s171',
    '实体店的未来取决于其能否将线下体验优势与数字化运营能力深度融合',
    'The future of brick-and-mortar stores depends on their ability to deeply integrate offline experiential advantages with digital operational capabilities.',
    [
      [0, 4, '主语', '/ðə/ /ˈfjuːtʃər/ /ɒv/ /brɪk-ænd-ˈmɔːrtər/ /stɔːrz/', '实体店的未来'],
      [5, 5, '谓语', '/dɪˈpɛndz/', '取决于'],
      [6, 18, '宾语', '/ɒn/ /ðɛər/ /əˈbɪlɪti/ /tuː/ /ˈdiːpli/ /ˈɪntɪgreɪt/ /ˌɒflaɪn/ /ɪkˈspɪəriənʃəl/ /ədˈvɑːntɪdʒɪz/ /wɪθ/ /ˈdɪdʒɪtəl/ /ˌɒpəˈreɪʃənəl/ /ˌkeɪpəˈbɪlɪtiz/', '其能否将线下体验优势与数字化运营能力深度融合'],
    ],
    [['零售未来', 'brick-and-mortar (实体店), experiential advantage (体验优势), digital operational capability (数字化运营能力)']]
  ),
];

// Validate coverage
data.forEach((item) => {
  const n = item.words.length;
  const covered = new Array(n).fill(false);
  item.components.forEach((c) => {
    for (let i = c.start; i <= c.end; i++) covered[i] = true;
  });
  if (covered.some((v) => !v)) {
    throw new Error(`Uncovered words in ${item.id}: ${item.english_full}`);
  }
});

const out = serializeExtensions('shopping_01', data);
fs.writeFileSync('prisma/scenarios_data_ext_shopping_72.js', out);
console.log(`Generated ${data.length} sentences`);

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function serializeWord(w) {
  return w.punctuation
    ? `{ word: "${esc(w.word)}", punctuation: "${esc(w.punctuation)}" }`
    : `{ word: "${esc(w.word)}" }`;
}

function serializeExtensions(key, items) {
  const lines = [`export const extensions = {`, `  "${key}": [`];
  items.forEach((item, idx) => {
    lines.push('    {');
    lines.push(`      id: "${item.id}",`);
    lines.push(`      chinese: "${esc(item.chinese)}",`);
    lines.push(`      english_full: "${esc(item.english_full)}",`);
    lines.push(`      words: [`);
    lines.push(`        ${item.words.map(serializeWord).join(', ')}`);
    lines.push(`      ],`);
    lines.push(`      components: [`);
    item.components.forEach((c, ci) => {
      const comma = ci < item.components.length - 1 ? ',' : '';
      lines.push(`        {`);
      lines.push(`          start: ${c.start}, end: ${c.end}, label: "${esc(c.label)}", phonetic: "${esc(c.phonetic)}", translation: "${esc(c.translation)}",`);
      lines.push(`          subComponents: [{ startIndex: 0, words: [${c.subComponents[0].words.map(serializeWord).join(', ')}] }]`);
      lines.push(`        }${comma}`);
    });
    lines.push(`      ],`);
    lines.push(`      analysis: [`);
    item.analysis.forEach((a, ai) => {
      const comma = ai < item.analysis.length - 1 ? ',' : '';
      lines.push(`        { type: "${esc(a.type)}", text: "${esc(a.text)}" }${comma}`);
    });
    lines.push(`      ]`);
    lines.push(`    }${idx < items.length - 1 ? ',' : ''}`);
  });
  lines.push('  ]');
  lines.push('};');
  lines.push('');
  return lines.join('\n');
}
