import fs from 'fs';

function build(filename, moduleKey, prefix, startIndex, data) {
  const sentences = data.map((d, i) => {
    const enWords = d[1].split(' ');
    const words = enWords.map(w => {
      const match = w.match(/^([a-zA-Z0-9'-]+)(.*)$/);
      return { word: match ? match[1] : w, punctuation: match ? match[2] : "" };
    });
    const components = d[2].map(c => {
      const comp = { start: c[0], end: c[1], label: c[2], phonetic: c[3] || "", translation: c[4] };
      if (c[5]) {
        comp.subComponents = c[5].map(sc => ({ start: sc[0], end: sc[1], label: sc[2] }));
      }
      return comp;
    });
    const analysis = d[3].map(a => ({ type: a[0], text: a[1] }));
    return {
      id: `${prefix}_s${startIndex + i}`,
      chinese: d[0],
      english_full: d[1],
      words,
      components,
      analysis
    };
  });
  fs.writeFileSync('prisma/' + filename, `export const extensions = {\n  "${moduleKey}": ${JSON.stringify(sentences, null, 2)}\n};\n`);
  console.log('Generated prisma/' + filename);
}

const shp = [
  [
    "这家高档百货公司以其无可挑剔的客户服务和琳琅满目的奢侈品牌而自豪",
    "The upscale department store prides itself on its impeccable customer service and an extensive array of luxury brands.",
    [
      [0, 3, "主语", "/ði/ /ˈʌpˌskeɪl/ /dɪˈpɑːrtmənt/ /stɔːr/", "这家高档的百货商店"],
      [4, 6, "谓语(固定搭配)", "/praɪdz/ /ɪtˈsɛlf/ /ɒn/", "在...上以自己为豪"],
      [7, 18, "介词宾语(并列)", "/ɪts/ /ɪmˈpɛkəbəl/ /ˈkʌstəmər/ /ˈsɜːrvɪs/ /ænd/ /æn/ /ɪkˈstɛnsɪv/ /əˈreɪ/ /ɒv/ /ˈlʌgʒəri/ /brændz/", "它无可挑剔的客户服务以及大量广泛的奢侈品牌"]
    ],
    [["零售服务", "upscale (高档的)；department store (百货商店)；impeccable (无可挑剔的)；extensive array of (琳琅满目的/大量的)。"]]
  ],
  [
    "激烈的市场竞争迫使传统零售商大力投资电子商务和全渠道营销策略",
    "Fierce market competition has compelled traditional retailers to invest heavily in e-commerce and omnichannel marketing strategies.",
    [
      [0, 2, "主语", "/fɪərs/ /ˈmɑːrkɪt/ /ˌkɒmpɪˈtɪʃən/", "激烈的市场竞争"],
      [3, 4, "谓语(现完)", "/hæz/ /kəmˈpɛld/", "已经迫使了"],
      [5, 6, "宾语", "/trəˈdɪʃənəl/ /ˈriːteɪlərz/", "传统零售商们"],
      [7, 16, "宾语补足语", "/tuː/ /ɪnˈvɛst/ /ˈhɛvɪli/ /ɪn/ /ˈiːˌkɒmɜːrs/ /ænd/ /ˌɒmniˈtʃænəl/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒiz/", "去在电子商务和全渠道营销策略上大力投资"]
    ],
    [["零售商业模式", "fierce (激烈的)；compel (迫使)；invest heavily in (大力投资于)；omnichannel (全渠道的)。"]]
  ],
  [
    "黑色星期五的促销活动吸引了成群结队的狂热购物者，导致商场入口处出现拥挤",
    "The Black Friday promotions attracted hordes of frantic shoppers, resulting in congestion at the mall's entrances.",
    [
      [0, 3, "主句主语", "/ðə/ /blæk/ /ˈfraɪdeɪ/ /prəˈmoʊʃənz/", "黑色星期五的促销活动"],
      [4, 4, "主句谓语", "/əˈtræktɪd/", "吸引了"],
      [5, 8, "主句宾语", "/hɔːrdz/ /ɒv/ /ˈfræntɪk/ /ˈʃɒpərz/", "成群结队的狂热购物者"],
      [9, 16, "结果状语(现在分词)", "/rɪˈzʌltɪŋ/ /ɪn/ /kənˈdʒɛstʃən/ /æt/ /ðə/ /mɔːlz/ /ˈɛntrənsɪz/", "导致了在商场入口处的拥堵"]
    ],
    [["促销与人流", "hordes of (成群结队的)；frantic (狂热的/发狂的)；result in (导致)；congestion (拥堵)。"]]
  ],
  [
    "为了吸引年轻消费者，该品牌推出了一系列采用可持续材料制作的限量版街头服饰",
    "To appeal to younger consumers, the brand launched a series of limited-edition streetwear crafted from sustainable materials.",
    [
      [0, 4, "目的状语", "/tuː/ /əˈpiːl/ /tuː/ /ˈjʌŋər/ /kənˈsuːmərz/", "为了吸引更年轻的消费者"],
      [5, 6, "主句主语", "/ðə/ /brænd/", "该品牌"],
      [7, 7, "主句谓语", "/lɔːntʃt/", "推出了"],
      [8, 17, "主句宾语(含过去分词定语)", "/ə/ /ˈsɪəriz/ /ɒv/ /ˈlɪmɪtɪd-ɪˈdɪʃən/ /ˈstriːtˌwɛər/ /ˈkræftɪd/ /frɒm/ /səˈsteɪnəbəl/ /məˈtɪəriəlz/", "一系列由可持续材料制成的限量版街头服饰"]
    ],
    [["时尚零售", "appeal to (吸引)；launch (推出/发布)；limited-edition (限量版的)；streetwear (街头服饰)；sustainable materials (可持续材料)。"]]
  ],
  [
    "橱窗展示被精心设计成一个充满节日气息的冬季仙境，以激发顾客的购买欲望",
    "The window displays were meticulously designed as a festive winter wonderland to stimulate customers' purchasing desires.",
    [
      [0, 2, "主语", "/ðə/ /ˈwɪndoʊ/ /dɪˈspleɪz/", "橱窗展示"],
      [3, 5, "谓语(被动)+状语", "/wɜːr/ /mɪˈtɪkjʊləsli/ /dɪˈzaɪnd/", "被极其细心地设计"],
      [6, 10, "身份/状态补足语", "/æz/ /ə/ /ˈfɛstɪv/ /ˈwɪntər/ /ˈwʌndərˌlænd/", "作为一个充满节日气息的冬季仙境"],
      [11, 16, "目的状语", "/tuː/ /ˈstɪmjʊˌleɪt/ /ˈkʌstəmərz/ /ˈpɜːrtʃəsɪŋ/ /dɪˈzaɪərz/", "为了刺激顾客的购买欲望"]
    ],
    [["视觉营销", "window displays (橱窗展示)；meticulously (极其细心地)；festive (节日的/喜庆的)；winter wonderland (冬季仙境)；stimulate (刺激)。"]]
  ],
  [
    "这款革命性的智能手机在首发当天就售罄，远远超出了公司的初步销售预测",
    "The revolutionary smartphone sold out on its premiere day, far exceeding the company's initial sales projections.",
    [
      [0, 2, "主句主语", "/ðə/ /ˌrɛvəˈluːʃəˌnɛri/ /ˈsmɑːrtˌfoʊn/", "这款革命性的智能手机"],
      [3, 4, "主句谓语(动词短语)", "/soʊld/ /aʊt/", "售罄了"],
      [5, 8, "主句时间状语", "/ɒn/ /ɪts/ /prɪˈmɪər/ /deɪ/", "在它的首发日"],
      [9, 16, "伴随/结果状语(现在分词)", "/fɑːr/ /ɪkˈsiːdɪŋ/ /ðə/ /ˈkʌmpəniz/ /ɪˈnɪʃəl/ /seɪlz/ /prəˈdʒɛkʃənz/", "远远超出了公司最初的销售预测"]
    ],
    [["产品销售", "revolutionary (革命性的)；sell out (售罄)；premiere day (首发日)；exceed (超出)；sales projections (销售预测)。"]]
  ],
  [
    "购物中心配备了最先进的增强现实导航系统，帮助顾客轻松找到目标店铺",
    "The shopping mall is equipped with a state-of-the-art augmented reality navigation system, assisting customers in easily locating their target stores.",
    [
      [0, 2, "主句主语", "/ðə/ /ˈʃɒpɪŋ/ /mɔːl/", "购物中心"],
      [3, 5, "主句谓语(被动固定搭配)", "/ɪz/ /ɪˈkwɪpt/ /wɪθ/", "被配备了..."],
      [6, 12, "主句宾语", "/ə/ /steɪt-ɒv-ði-ɑːrt/ /ɔːgˈmɛntɪd/ /riˈæləti/ /ˌnævɪˈgeɪʃən/ /ˈsɪstəm/", "一个最先进的增强现实导航系统"],
      [13, 20, "伴随状语(现在分词)", "/əˈsɪstɪŋ/ /ˈkʌstəmərz/ /ɪn/ /ˈiːzɪli/ /loʊˈkeɪtɪŋ/ /ðɛər/ /ˈtɑːrgɪt/ /stɔːrz/", "协助顾客轻松地定位(找到)他们的目标店铺"]
    ],
    [["智能商场", "be equipped with (配备有)；state-of-the-art (最先进的)；augmented reality (增强现实/AR)；locate (定位/找到)。"]]
  ],
  [
    "大规模的清仓甩卖为精打细算的消费者提供了以极低折扣购买过季商品的机会",
    "The massive clearance sale provides budget-conscious consumers with the opportunity to purchase out-of-season merchandise at steep discounts.",
    [
      [0, 3, "主语", "/ðə/ /ˈmæsɪv/ /ˈklɪərəns/ /seɪl/", "大规模的清仓甩卖"],
      [4, 4, "谓语", "/prəˈvaɪdz/", "提供给"],
      [5, 6, "间接宾语", "/ˈbʌdʒɪt-ˈkɒnʃəs/ /kənˈsuːmərz/", "精打细算的消费者"],
      [7, 9, "直接宾语", "/wɪθ/ /ði/ /ˌɒpərˈtuːnɪti/", "机会(provide sb with sth)"],
      [10, 17, "目的/后置定语", "/tuː/ /ˈpɜːrtʃəs/ /aʊt-ɒv-ˈsiːzən/ /ˈmɜːrtʃənˌdaɪz/ /æt/ /stiːp/ /ˈdɪskaʊnts/", "去以极低折扣购买过季商品"]
    ],
    [["商场促销", "clearance sale (清仓甩卖)；budget-conscious (精打细算的/有预算意识的)；out-of-season (过季的)；steep discounts (极低/大幅的折扣)。"]]
  ],
  [
    "零售巨头宣布了一项雄心勃勃的扩张计划，打算在未来五年内进军新兴的亚洲市场",
    "The retail giant announced an ambitious expansion plan, intending to penetrate emerging Asian markets within the next five years.",
    [
      [0, 2, "主句主语", "/ðə/ /ˈriːteɪl/ /ˈdʒaɪənt/", "这家零售巨头"],
      [3, 3, "主句谓语", "/əˈnaʊnst/", "宣布了"],
      [4, 7, "主句宾语", "/æn/ /æmˈbɪʃəs/ /ɪkˈspænʃən/ /plæn/", "一项雄心勃勃的扩张计划"],
      [8, 19, "伴随状语(现在分词)", "/ɪnˈtɛndɪŋ/ /tuː/ /ˈpɛnɪˌtreɪt/ /ɪˈmɜːrdʒɪŋ/ /ˈeɪʒən/ /ˈmɑːrkɪts/ /wɪˈðɪn/ /ðə/ /nɛkst/ /faɪv/ /jɪərz/", "打算在未来五年内渗透/进军新兴的亚洲市场"]
    ],
    [["企业扩张", "retail giant (零售巨头)；ambitious (雄心勃勃的)；expansion plan (扩张计划)；penetrate a market (打入/渗透市场)；emerging (新兴的)。"]]
  ],
  [
    "消费者忠诚度计划通过提供专属积分和个性化奖励，有效地提高了客户留存率",
    "Consumer loyalty programs effectively boost customer retention rates by offering exclusive points and personalized rewards.",
    [
      [0, 2, "主语", "/kənˈsuːmər/ /ˈlɔɪəlti/ /ˈproʊgræmz/", "消费者忠诚度计划(常客计划)"],
      [3, 4, "状语+谓语", "/ɪˈfɛktɪvli/ /buːst/", "有效地提升了"],
      [5, 7, "宾语", "/ˈkʌstəmər/ /rɪˈtɛnʃən/ /reɪts/", "客户留存率"],
      [8, 15, "方式状语", "/baɪ/ /ˈɒfərɪŋ/ /ɪkˈskluːsɪv/ /pɔɪnts/ /ænd/ /pərˈsɒnəˌlaɪzd/ /rɪˈwɔːrdz/", "通过提供专属积分和个性化奖励"]
    ],
    [["客户管理", "loyalty program (忠诚度/常客计划)；boost (提升)；customer retention rate (客户留存率)；exclusive points (专属积分)；personalized rewards (个性化奖励)。"]]
  ],
  [
    "该商店严格的退货政策规定，所有贴身衣物一旦售出，概不退换，以确保卫生标准",
    "The store's strict return policy dictates that all intimate apparel is strictly non-refundable once sold to ensure hygiene standards.",
    [
      [0, 4, "主句主语", "/ðə/ /stɔːrz/ /strɪkt/ /rɪˈtɜːrn/ /ˈpɒlɪsi/", "该商店严格的退货政策"],
      [5, 5, "主句谓语", "/dɪkˈteɪts/", "规定/指示"],
      [6, 14, "宾语从句", "/ðæt/ /ɔːl/ /ˈɪntɪmət/ /əˈpærəl/ /ɪz/ /ˈstrɪktli/ /nɒn-rɪˈfʌndəbəl/ /wʌns/ /soʊld/", "所有贴身衣物一旦售出严格不予退款(概不退换)"],
      [15, 19, "目的状语", "/tuː/ /ɪnˈʃʊər/ /ˈhaɪdʒiːn/ /ˈstændərdz/", "为了确保卫生标准"]
    ],
    [["售后退货", "return policy (退货政策)；dictate (规定，口述)；intimate apparel (贴身内衣)；non-refundable (不予退款的)；hygiene standards (卫生标准)。"]]
  ],
  [
    "虚拟试衣间的普及大大降低了在线服装零售的退货率，并提升了用户体验",
    "The popularization of virtual fitting rooms has vastly reduced return rates in online apparel retail and elevated the user experience.",
    [
      [0, 5, "主语", "/ðə/ /ˌpɒpjʊləraɪˈzeɪʃən/ /ɒv/ /ˈvɜːrtʃuəl/ /ˈfɪtɪŋ/ /ruːmz/", "虚拟试衣间的普及"],
      [6, 9, "状语+谓语(现完)", "/hæz/ /ˈvæstli/ /rɪˈdjuːst/", "已经大大地降低了"],
      [10, 11, "宾语1", "/rɪˈtɜːrn/ /reɪts/", "退货率"],
      [12, 15, "范围状语", "/ɪn/ /ˈɒnˌlaɪn/ /əˈpærəl/ /ˈriːteɪl/", "在在线服装零售业中"],
      [16, 17, "并列连词+谓语2", "/ænd/ /ˈɛlɪˌveɪtɪd/", "并且提升了"],
      [18, 20, "宾语2", "/ðə/ /ˈjuːzər/ /ɪkˈspɪəriəns/", "用户体验"]
    ],
    [["线上零售创新", "popularization (普及)；virtual fitting room (虚拟试衣间)；vastly reduce (大大降低)；apparel retail (服装零售)；elevate (提升)。"]]
  ],
  [
    "商场的中庭举办了一场引人注目的时装秀，展示了即将到来的春季系列的最新趋势",
    "The mall's atrium hosted a compelling fashion show, showcasing the latest trends of the upcoming spring collection.",
    [
      [0, 2, "主句主语", "/ðə/ /mɔːlz/ /ˈeɪtriəm/", "商场的中庭"],
      [3, 3, "主句谓语", "/ˈhoʊstɪd/", "举办了"],
      [4, 7, "主句宾语", "/ə/ /kəmˈpɛlɪŋ/ /ˈfæʃən/ /ʃoʊ/", "一场引人注目的时装秀"],
      [8, 17, "伴随状语(现在分词)", "/ˈʃoʊˌkeɪsɪŋ/ /ðə/ /ˈleɪtɪst/ /trɛndz/ /ɒv/ /ði/ /ˈʌpˌkʌmɪŋ/ /sprɪŋ/ /kəˈlɛkʃən/", "展示了即将到来的春季系列的最新趋势"]
    ],
    [["商场活动", "atrium (中庭，天井)；compelling (引人注目的，极具吸引力的)；showcase (展示)；upcoming (即将到来的)。"]]
  ],
  [
    "为了迎合具有环保意识的买家，这家超市淘汰了所有的一次性塑料包装",
    "To cater to eco-conscious buyers, the supermarket phased out all single-use plastic packaging.",
    [
      [0, 4, "目的状语", "/tuː/ /ˈkeɪtər/ /tuː/ /ˈiːkoʊ-ˈkɒnʃəs/ /ˈbaɪərz/", "为了迎合有环保意识的买家们"],
      [5, 6, "主句主语", "/ðə/ /ˈsuːpərˌmɑːrkɪt/", "这家超市"],
      [7, 8, "主句谓语(动词短语)", "/feɪzd/ /aʊt/", "逐步淘汰了"],
      [9, 13, "主句宾语", "/ɔːl/ /ˈsɪŋgəl-juːs/ /ˈplæstɪk/ /ˈpækɪdʒɪŋ/", "所有的一次性塑料包装"]
    ],
    [["环保零售", "cater to (迎合)；eco-conscious (有环保意识的)；phase out (逐步淘汰/废除)；single-use (一次性的)。"]]
  ],
  [
    "品牌的旗舰店不仅是一个销售点，更是一个提供沉浸式品牌体验的互动空间",
    "The brand's flagship store is not merely a point of sale, but rather an interactive space providing immersive brand experiences.",
    [
      [0, 3, "主句主语", "/ðə/ /brændz/ /ˈflægʃɪp/ /stɔːr/", "品牌的旗舰店"],
      [4, 4, "主句系动词1", "/ɪz/", "是"],
      [5, 10, "主句表语1", "/nɒt/ /ˈmɪərli/ /ə/ /pɔɪnt/ /ɒv/ /seɪl/", "不仅仅是一个销售点"],
      [11, 15, "主句表语2(转折)", "/bʌt/ /ˈræðər/ /æn/ /ˌɪntərˈæktɪv/ /speɪs/", "而更是一个互动空间"],
      [16, 19, "后置定语(现在分词)", "/prəˈvaɪdɪŋ/ /ɪˈmɜːrsɪv/ /brænd/ /ɪkˈspɪəriənsɪz/", "提供着沉浸式品牌体验的"]
    ],
    [["零售空间设计", "flagship store (旗舰店)；not merely... but rather... (不仅仅是...而是更...)；point of sale (销售点/POS)；interactive space (互动空间)。"]]
  ],
  [
    "供应链的中断导致了关键电子元件的短缺，进而推迟了新一代游戏机的上市",
    "Supply chain disruptions caused a shortage of critical electronic components, subsequently delaying the launch of the next-generation console.",
    [
      [0, 2, "主句主语", "/səˈplaɪ/ /tʃeɪn/ /dɪsˈrʌpʃənz/", "供应链中断(复数)"],
      [3, 3, "主句谓语", "/kɔːzd/", "导致了"],
      [4, 9, "主句宾语", "/ə/ /ˈʃɔːrtɪdʒ/ /ɒv/ /ˈkrɪtɪkəl/ /ɪˌlɛkˈtrɒnɪk/ /kəmˈpoʊnənts/", "关键电子元件的短缺"],
      [10, 18, "结果状语(现在分词)", "/səbˈsiːkwəntli/ /dɪˈleɪɪŋ/ /ðə/ /lɔːntʃ/ /ɒv/ /ðə/ /nɛkst-ˌdʒɛnəˈreɪʃən/ /ˈkɒnsoʊl/", "随后推迟了下一代游戏主机的发布/上市"]
    ],
    [["电子零售", "supply chain disruptions (供应链中断)；critical electronic components (关键电子元件)；subsequently (随后，进而)；console (这里指游戏主机)。"]]
  ],
  [
    "神秘客经常被零售管理层雇佣，以客观地评估一线员工的服务质量",
    "Mystery shoppers are frequently employed by retail management to objectively evaluate the service quality of frontline staff.",
    [
      [0, 1, "主语", "/ˈmɪstəri/ /ˈʃɒpərz/", "神秘顾客们"],
      [2, 4, "状语+谓语(被动)", "/ɑːr/ /ˈfriːkwəntli/ /ɪmˈplɔɪd/", "被频繁地雇佣"],
      [5, 7, "施动者状语", "/baɪ/ /ˈriːteɪl/ /ˈmænɪdʒmənt/", "被零售管理层"],
      [8, 16, "目的状语", "/tuː/ /əbˈdʒɛktɪvli/ /ɪˈvæljuˌeɪt/ /ðə/ /ˈsɜːrvɪs/ /ˈkwɒlɪti/ /ɒv/ /ˈfrʌntˌlaɪn/ /stæf/", "为了客观地评估一线员工的服务质量"]
    ],
    [["服务考核", "mystery shopper (神秘客，即暗访的调查员)；employ (雇佣/使用)；objectively evaluate (客观地评估)；frontline staff (一线员工)。"]]
  ],
  [
    "快闪店的出现为独立设计师提供了一个低风险测试新产品市场反应的绝佳平台",
    "The emergence of pop-up shops provides independent designers with an excellent platform to test market reactions to new products with low risk.",
    [
      [0, 4, "主语", "/ði/ /ɪˈmɜːrdʒəns/ /ɒv/ /pɒp-ʌp/ /ʃɒps/", "快闪店的出现"],
      [5, 5, "谓语", "/prəˈvaɪdz/", "提供给"],
      [6, 7, "间接宾语", "/ˌɪndɪˈpɛndənt/ /dɪˈzaɪnərz/", "独立设计师们"],
      [8, 11, "直接宾语(固定搭配)", "/wɪθ/ /æn/ /ˈɛksələnt/ /ˈplætfɔːrm/", "一个极好的平台(provide sb with sth)"],
      [12, 22, "目的状语", "/tuː/ /tɛst/ /ˈmɑːrkɪt/ /riˈækʃənz/ /tuː/ /nuː/ /ˈprɒdʌkts/ /wɪθ/ /loʊ/ /rɪsk/", "去低风险地测试对于新产品的市场反应"]
    ],
    [["新型零售", "emergence (出现/兴起)；pop-up shop (快闪店)；independent designer (独立设计师)；market reaction (市场反应)。"]]
  ],
  [
    "这家连锁书店通过举办作者签售会和读书俱乐部，成功地转型为一个文化交流社区",
    "The bookstore chain successfully transitioned into a cultural exchange community by hosting author signings and reading clubs.",
    [
      [0, 2, "主语", "/ðə/ /ˈbʊkˌstɔːr/ /tʃeɪn/", "这家连锁书店"],
      [3, 4, "状语+谓语", "/səkˈsɛsfəli/ /trænˈzɪʃənd/", "成功地过渡/转型了"],
      [5, 9, "方向/结果状语", "/ˈɪntuː/ /ə/ /ˈkʌltʃərəl/ /ɪksˈtʃeɪndʒ/ /kəˈmjuːnɪti/", "成为一个文化交流社区"],
      [10, 17, "方式状语", "/baɪ/ /ˈhoʊstɪŋ/ /ˈɔːθər/ /ˈsaɪnɪŋz/ /ænd/ /ˈriːdɪŋ/ /klʌbz/", "通过举办作者签售会和读书俱乐部"]
    ],
    [["书店转型", "bookstore chain (连锁书店)；transition into (转型为)；cultural exchange community (文化交流社区)；author signings (作者签售会)。"]]
  ],
  [
    "随着消费者对健康生活方式的追求，运动休闲服饰在零售市场的份额正在迅速扩大",
    "Driven by consumers' pursuit of healthy lifestyles, the market share of athleisure wear in the retail sector is expanding rapidly.",
    [
      [0, 7, "原因状语(过去分词)", "/ˈdrɪvən/ /baɪ/ /kənˈsuːmərz/ /pərˈsuːt/ /ɒv/ /ˈhɛlθi/ /ˈlaɪfˌstaɪlz/", "被消费者对健康生活方式的追求所驱动"],
      [8, 16, "主句主语", "/ðə/ /ˈmɑːrkɪt/ /ʃɛər/ /ɒv/ /æθˈlɛʒər/ /wɛər/ /ɪn/ /ðə/ /ˈriːteɪl/ /ˈsɛktər/", "运动休闲服饰在零售领域的市场份额"],
      [17, 18, "主句谓语(现进)", "/ɪz/ /ɪkˈspændɪŋ/", "正在扩大"],
      [19, 19, "主句状语", "/ˈræpɪdli/", "迅速地"]
    ],
    [["消费趋势", "pursuit of (对...的追求)；market share (市场份额)；athleisure wear (运动休闲服，athletic+leisure的合成词)。"]]
  ],
  [
    "该购物中心的美食广场汇集了各种国际美食，满足了不同食客挑剔的味蕾",
    "The shopping mall's food court amalgamates a diverse range of international cuisines, satisfying the discerning palates of various diners.",
    [
      [0, 4, "主句主语", "/ðə/ /ˈʃɒpɪŋ/ /mɔːlz/ /fuːd/ /kɔːrt/", "该购物中心的美食广场"],
      [5, 5, "主句谓语", "/əˈmælgəˌmeɪts/", "汇聚，混合"],
      [6, 11, "主句宾语", "/ə/ /daɪˈvɜːrs/ /reɪndʒ/ /ɒv/ /ˌɪntərˈnæʃənəl/ /kwɪˈziːnz/", "多样化的各种国际美食"],
      [12, 19, "结果状语(现在分词)", "/ˈsætɪsˌfaɪɪŋ/ /ðə/ /dɪˈsɜːrnɪŋ/ /ˈpæləts/ /ɒv/ /ˈvɛriəs/ /ˈdaɪnərz/", "满足了各种食客挑剔的味蕾"]
    ],
    [["商场餐饮", "food court (美食广场)；amalgamate (合并/汇聚，高级替换 combine/bring together)；discerning (挑剔的/有眼光的)；palate (味觉/味蕾)。"]]
  ],
  [
    "面对高昂的租金和客流量的下降，许多独立精品店不得不缩减规模或转移到线上",
    "Confronted with exorbitant rents and declining foot traffic, numerous independent boutiques had to downsize or pivot online.",
    [
      [0, 7, "原因状语(过去分词)", "/kənˈfrʌntɪd/ /wɪθ/ /ɪgˈzɔːrbɪtənt/ /rɛnts/ /ænd/ /dɪˈklaɪnɪŋ/ /fʊt/ /ˈtræfɪk/", "面对着高昂的租金和下降的客流量(foot traffic 指客流)"],
      [8, 10, "主句主语", "/ˈnuːmərəs/ /ˌɪndɪˈpɛndənt/ /buːˈtiːks/", "许多独立的精品店"],
      [11, 12, "主句谓语(不得不)", "/hæd/ /tuː/", "不得不"],
      [13, 16, "主句宾语(原形动词)", "/ˈdaʊnˌsaɪz/ /ɔːr/ /ˈpɪvət/ /ˈɒnˌlaɪn/", "缩减规模或者转向线上"]
    ],
    [["零售困境", "confronted with (面临/面对)；exorbitant (高昂的/过分的)；foot traffic (客流量，特指步行客流)；downsize (缩减规模)；pivot (作为动词：关键转向/转型)。"]]
  ],
  [
    "电子价签的广泛采用使得超市能够根据实时供需情况动态地调整商品价格",
    "The widespread adoption of electronic shelf labels enables supermarkets to dynamically adjust commodity prices based on real-time supply and demand.",
    [
      [0, 6, "主语", "/ðə/ /ˈwaɪdsprɛd/ /əˈdɒpʃən/ /ɒv/ /ɪˌlɛkˈtrɒnɪk/ /ʃɛlf/ /ˈleɪbəlz/", "电子货架标签的广泛采用"],
      [7, 7, "谓语", "/ɛˈneɪbəlz/", "使得...能够"],
      [8, 8, "宾语", "/ˈsuːpərˌmɑːrkɪts/", "超市们"],
      [9, 14, "宾语补足语", "/tuː/ /daɪˈnæmɪkəli/ /əˈdʒʌst/ /kəˈmɒdɪti/ /ˈpraɪsɪz/", "去动态地调整商品价格"],
      [15, 20, "依据状语", "/beɪst/ /ɒn/ /riəl-taɪm/ /səˈplaɪ/ /ænd/ /dɪˈmænd/", "基于实时的供应与需求"]
    ],
    [["智能零售技术", "electronic shelf labels (电子货架标签/电子价签)；dynamically adjust (动态调整)；commodity (商品/日用品)；supply and demand (供需)。"]]
  ],
  [
    "为了营造一种独占感，这个奢侈品牌仅允许受邀的VIP客户参加其私人预览活动",
    "To cultivate an aura of exclusivity, the luxury brand only permits invited VIP clients to attend its private preview events.",
    [
      [0, 5, "目的状语", "/tuː/ /ˈkʌltɪˌveɪt/ /æn/ /ˈɔːrə/ /ɒv/ /ˌɛkskluːˈsɪvɪti/", "为了培养一种独占/排他的光环(氛围)"],
      [6, 8, "主句主语", "/ðə/ /ˈlʌgʒəri/ /brænd/", "该奢侈品牌"],
      [9, 10, "主句状语+谓语", "/ˈoʊnli/ /pərˈmɪts/", "仅仅允许"],
      [11, 13, "主句宾语", "/ɪnˈvaɪtɪd/ /viː-aɪ-piː/ /ˈklaɪənts/", "被邀请的VIP客户们"],
      [14, 19, "宾语补足语", "/tuː/ /əˈtɛnd/ /ɪts/ /ˈpraɪvət/ /ˈpriːvjuː/ /ɪˈvɛnts/", "去参加它的私人预览活动"]
    ],
    [["奢侈品营销", "cultivate (培养/营造)；aura of exclusivity (独占感/排他性的光环)；permit sb to do (允许某人做)；preview event (预览活动/优先场)。"]]
  ],
  [
    "零售业的旺季通常需要雇佣大量的临时工来应对激增的结账和库存管理需求",
    "The peak season in retail typically necessitates hiring a multitude of temporary workers to handle the surging demand for checkout and inventory management.",
    [
      [0, 4, "主句主语", "/ðə/ /piːk/ /ˈsiːzən/ /ɪn/ /ˈriːteɪl/", "零售业中的旺季"],
      [5, 6, "主句状语+谓语", "/ˈtɪpɪkəli/ /nəˈsɛsɪˌteɪts/", "典型地(通常)使...成为必要"],
      [7, 12, "主句宾语(动名词短语)", "/ˈhaɪərɪŋ/ /ə/ /ˈmʌltɪˌtuːd/ /ɒv/ /ˈtɛmpəˌrɛri/ /ˈwɜːrkərz/", "雇佣大量的临时工人们"],
      [13, 23, "目的状语", "/tuː/ /ˈhændəl/ /ðə/ /ˈsɜːrdʒɪŋ/ /dɪˈmænd/ /fɔːr/ /ˈtʃɛkaʊt/ /ænd/ /ˈɪnvənˌtɔːri/ /ˈmænɪdʒmənt/", "去处理对于结账和库存管理激增的需求"]
    ],
    [["零售运营", "peak season (旺季)；necessitate (使...成为必要)；a multitude of (大量的)；temporary workers (临时工)；inventory management (库存管理)。"]]
  ],
  [
    "这款广受欢迎的护肤品承诺使用天然成分来焕发肌肤活力，在美妆专柜上备受追捧",
    "Promising to rejuvenate the skin using natural ingredients, the highly sought-after skincare product is extremely popular at beauty counters.",
    [
      [0, 7, "伴随状语(现在分词)", "/ˈprɒmɪsɪŋ/ /tuː/ /rɪˈdʒuːvəˌneɪt/ /ðə/ /skɪn/ /ˈjuːzɪŋ/ /ˈnætʃərəl/ /ɪnˈgriːdiənts/", "承诺使用天然成分来使皮肤恢复活力"],
      [8, 12, "主句主语", "/ðə/ /ˈhaɪli/ /ˈsɔːtˌæftər/ /ˈskɪnkɛər/ /ˈprɒdʌkt/", "这款备受追捧的护肤品"],
      [13, 16, "主句系表结构", "/ɪz/ /ɪkˈstriːmli/ /ˈpɒpjʊlər/", "是极其受欢迎的"],
      [17, 19, "地点状语", "/æt/ /ˈbjuːti/ /ˈkaʊntərz/", "在美妆专柜处"]
    ],
    [["美妆零售", "rejuvenate (使恢复活力/焕发青春)；sought-after (备受追捧的，抢手的)；beauty counter (美妆专柜)。"]]
  ],
  [
    "商场的地下停车场安装了智能传感器网络，以引导司机迅速找到可用的停车位",
    "The mall's underground parking garage installed a smart sensor network to guide drivers swiftly to available parking spaces.",
    [
      [0, 4, "主句主语", "/ðə/ /mɔːlz/ /ˌʌndərˈgraʊnd/ /ˈpɑːrkɪŋ/ /gəˈrɑːʒ/", "商场的地下停车库"],
      [5, 5, "主句谓语", "/ɪnˈstɔːld/", "安装了"],
      [6, 9, "主句宾语", "/ə/ /smɑːrt/ /ˈsɛnsər/ /ˈnɛtwɜːrk/", "一个智能传感器网络"],
      [10, 18, "目的状语", "/tuː/ /gaɪd/ /ˈdraɪvərz/ /ˈswɪftli/ /tuː/ /əˈveɪləbəl/ /ˈpɑːrkɪŋ/ /ˈspeɪsɪz/", "为了迅速地引导司机前往可用的停车空间(车位)"]
    ],
    [["商场设施", "underground parking garage (地下停车库)；sensor network (传感器网络)；swiftly (迅速地)；available parking spaces (可用的停车位)。"]]
  ],
  [
    "由于受到侵权指控，该快时尚品牌被迫从其全球门店紧急撤下了所有争议商品",
    "Facing allegations of infringement, the fast-fashion brand was compelled to urgently withdraw all disputed merchandise from its global stores.",
    [
      [0, 3, "原因状语(现在分词)", "/ˈfeɪsɪŋ/ /ˌæləˈgeɪʃənz/ /ɒv/ /ɪnˈfrɪndʒmənt/", "面临着关于侵权的指控"],
      [4, 6, "主句主语", "/ðə/ /fæst-ˈfæʃən/ /brænd/", "该快时尚品牌"],
      [7, 8, "主句谓语(被动)", "/wɒz/ /kəmˈpɛld/", "被迫(不得不)"],
      [9, 19, "宾语补足语(不定式)", "/tuː/ /ˈɜːrdʒəntli/ /wɪðˈdrɔː/ /ɔːl/ /dɪˈspjuːtɪd/ /ˈmɜːrtʃənˌdaɪz/ /frɒm/ /ɪts/ /ˈgloʊbəl/ /stɔːrz/", "去紧急地从其全球门店撤回所有有争议的商品"]
    ],
    [["零售法务", "allegations of infringement (侵权指控)；fast-fashion (快时尚)；be compelled to (被迫)；withdraw (撤回/下架)；disputed merchandise (有争议的商品)。"]]
  ],
  [
    "体验式零售鼓励消费者在购买前试用和感受产品，从而建立更深的情感连接",
    "Experiential retail encourages consumers to try and feel products before purchasing, thereby establishing a deeper emotional connection.",
    [
      [0, 1, "主句主语", "/ɪkˌspɪəriˈɛnʃəl/ /ˈriːteɪl/", "体验式零售"],
      [2, 2, "主句谓语", "/ɪnˈkɜːrɪdʒɪz/", "鼓励"],
      [3, 3, "主句宾语", "/kənˈsuːmərz/", "消费者们"],
      [4, 10, "宾语补足语(不定式)", "/tuː/ /traɪ/ /ænd/ /fiːl/ /ˈprɒdʌkts/ /bɪˈfɔːr/ /ˈpɜːrtʃəsɪŋ/", "去在购买前试用和感受产品"],
      [11, 17, "结果状语(现在分词)", "/ˈðɛərˌbaɪ/ /ɪˈstæblɪʃɪŋ/ /ə/ /ˈdiːpər/ /ɪˈmoʊʃənəl/ /kəˈnɛkʃən/", "从而建立起一种更深刻的情感连接"]
    ],
    [["零售营销新概念", "experiential retail (体验式零售)；encourage sb to do (鼓励某人做)；thereby (从而，借此)；emotional connection (情感连接)。"]]
  ],
  [
    "个性化推荐算法通过分析用户的浏览历史，显著提高了在线商城的转化率",
    "Personalized recommendation algorithms significantly improve the conversion rate of online malls by analyzing users' browsing histories.",
    [
      [0, 2, "主句主语", "/pərˈsɒnəˌlaɪzd/ /ˌrɛkəmɛnˈdeɪʃən/ /ˈælgəˌrɪðəmz/", "个性化推荐算法"],
      [3, 4, "主句状语+谓语", "/sɪgˈnɪfɪkəntli/ /ɪmˈpruːv/", "显著地提高"],
      [5, 10, "主句宾语", "/ðə/ /kənˈvɜːrʒən/ /reɪt/ /ɒv/ /ˈɒnˌlaɪn/ /mɔːlz/", "在线商城的转化率"],
      [11, 16, "方式状语", "/baɪ/ /ˈænəˌlaɪzɪŋ/ /ˈjuːzərz/ /ˈbraʊzɪŋ/ /ˈhɪstəriz/", "通过分析用户的浏览历史"]
    ],
    [["电商技术", "personalized recommendation (个性化推荐)；algorithm (算法)；conversion rate (转化率)；browsing history (浏览历史)。"]]
  ]
];

build('scenarios_data_ext_shopping_40.js', 'shopping_02', 'shp', 11, shp);
