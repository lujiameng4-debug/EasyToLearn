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
    "该奢侈品牌标志性的老花图案不仅是身份的象征，也是其工艺传承的体现",
    "The luxury brand's iconic monogram is not only a status symbol but also a reflection of its artisanal heritage.",
    [
      [0, 4, "主语", "/ðə/ /ˈlʌgʒəri/ /brændz/ /aɪˈkɒnɪk/ /ˈmɒnəˌgræm/", "该奢侈品牌标志性的交织字母(老花)图案"],
      [5, 5, "系动词", "/ɪz/", "是"],
      [6, 12, "表语1", "/nɒt/ /ˈoʊnli/ /ə/ /ˈsteɪtəs/ /ˈsɪmbəl/", "不仅是一个身份的象征"],
      [13, 20, "表语2", "/bʌt/ /ˈɔːlsoʊ/ /ə/ /rɪˈflɛkʃən/ /ɒv/ /ɪts/ /ɑːrˈtɪzənəl/ /ˈhɛrɪtɪdʒ/", "而且是它的工艺传承的体现"]
    ],
    [["品牌文化", "iconic monogram (标志性的老花图案)；status symbol (身份象征)；artisanal heritage (工艺传承)。"]]
  ],
  [
    "免税店为国际旅客提供了购买免受当地高额消费税影响的高端商品的机会",
    "Duty-free shops provide international travelers with the opportunity to purchase high-end goods exempt from hefty local consumption taxes.",
    [
      [0, 1, "主语", "/ˈdjuːti-friː/ /ʃɒps/", "免税商店"],
      [2, 2, "谓语", "/prəˈvaɪd/", "提供给"],
      [3, 4, "间接宾语", "/ˌɪntərˈnæʃənəl/ /ˈtrævələrz/", "国际旅客们"],
      [5, 7, "直接宾语", "/wɪθ/ /ði/ /ˌɒpərˈtuːnɪti/", "机会(provide sb with sth)"],
      [8, 18, "定语", "/tuː/ /ˈpɜːrtʃəs/ /haɪ-ɛnd/ /gʊdz/ /ɪgˈzɛmpt/ /frɒm/ /ˈhɛfti/ /ˈloʊkəl/ /kənˈsʌmpʃən/ /ˈtæksɪz/", "去购买免除高额当地消费税的高端商品"]
    ],
    [["跨境零售", "duty-free shop (免税店)；exempt from (免除...的)；hefty (高昂的，沉重的)；consumption tax (消费税)。"]]
  ],
  [
    "在实体店中引入自助结账柜台有效地缩短了顾客的等待时间，并减少了劳动力成本",
    "Introducing self-checkout kiosks in physical stores effectively shortens customers' waiting times and reduces labor costs.",
    [
      [0, 4, "主语(动名词)", "/ˌɪntrəˈdjuːsɪŋ/ /sɛlf-ˈtʃɛkaʊt/ /ˈkiːɒsks/ /ɪn/ /ˈfɪzɪkəl/ /stɔːrz/", "在实体店中引入自助结账售货亭(柜台)"],
      [5, 6, "状语+谓语1", "/ɪˈfɛktɪvli/ /ˈʃɔːrtənz/", "有效地缩短了"],
      [7, 9, "宾语1", "/ˈkʌstəmərz/ /ˈweɪtɪŋ/ /taɪmz/", "顾客们的等待时间"],
      [10, 11, "并列连词+谓语2", "/ænd/ /rɪˈdjuːsɪz/", "并且减少了"],
      [12, 13, "宾语2", "/ˈleɪbər/ /kɒsts/", "劳动力成本"]
    ],
    [["店内自动化", "self-checkout kiosk (自助结账柜台/亭)；physical store (实体店)；labor cost (劳动力成本)。"]]
  ],
  [
    "跨界联名合作使得两个截然不同的品牌能够相互借力，吸引彼此庞大的粉丝群体",
    "Crossover collaborations enable two distinctly different brands to leverage each other, attracting their respective massive fan bases.",
    [
      [0, 1, "主语", "/ˈkrɒsˌoʊvər/ /kəˌlæbəˈreɪʃənz/", "跨界合作(联名)"],
      [2, 2, "谓语", "/ɛˈneɪbəl/", "使得...能够"],
      [3, 6, "宾语", "/tuː/ /dɪˈstɪŋktli/ /ˈdɪfərənt/ /brændz/", "两个截然不同的品牌"],
      [7, 10, "宾语补足语", "/tuː/ /ˈlɛvərɪdʒ/ /iːtʃ/ /ˈʌðər/", "去利用/借助彼此的力量"],
      [11, 16, "伴随/结果状语(现在分词)", "/əˈtræktɪŋ/ /ðɛər/ /rɪˈspɛktɪv/ /ˈmæsɪv/ /fæn/ /ˈbeɪsɪz/", "吸引着它们各自庞大的粉丝基础(群体)"]
    ],
    [["联名营销", "crossover collaboration (跨界合作/联名)；distinctly different (截然不同的)；leverage (利用/借助力量)；respective (各自的)。"]]
  ],
  [
    "零售商面临的巨大挑战之一是如何在提供无缝多渠道体验的同时保护消费者的隐私数据",
    "One of the monumental challenges facing retailers is how to protect consumers' privacy data while providing a seamless multichannel experience.",
    [
      [0, 6, "主语", "/wʌn/ /ɒv/ /ðə/ /ˌmɒnjʊˈmɛntəl/ /ˈtʃælɪndʒɪz/ /ˈfeɪsɪŋ/ /ˈriːteɪlərz/", "零售商面临的巨大挑战之一"],
      [7, 7, "系动词", "/ɪz/", "是"],
      [8, 14, "表语从句", "/haʊ/ /tuː/ /prəˈtɛkt/ /kənˈsuːmərz/ /ˈpraɪvəsi/ /ˈdeɪtə/", "如何去保护消费者的隐私数据"],
      [15, 20, "时间状语", "/waɪl/ /prəˈvaɪdɪŋ/ /ə/ /ˈsiːmləs/ /ˌmʌltiˈtʃænəl/ /ɪkˈspɪəriəns/", "当提供一种无缝的多渠道体验时"]
    ],
    [["零售数字化", "monumental challenge (巨大的挑战)；privacy data (隐私数据)；seamless (无缝的)；multichannel (多渠道的)。"]]
  ],
  [
    "这家百年老店通过翻新其经典的复古装潢，成功地吸引了追求怀旧情怀的年轻一代",
    "The century-old shop successfully attracted the younger generation seeking nostalgia by refurbishing its classic vintage decor.",
    [
      [0, 2, "主句主语", "/ðə/ /ˈsɛntʃəri-oʊld/ /ʃɒp/", "这家百年老店"],
      [3, 4, "主句状语+谓语", "/səkˈsɛsfəli/ /əˈtræktɪd/", "成功地吸引了"],
      [5, 9, "主句宾语", "/ðə/ /ˈjʌŋər/ /ˌdʒɛnəˈreɪʃən/ /ˈsiːkɪŋ/ /nɒˈstældʒə/", "寻求怀旧情怀的年轻一代"],
      [10, 16, "方式状语", "/baɪ/ /riˈfɜːrbɪʃɪŋ/ /ɪts/ /ˈklæsɪk/ /ˈvɪntɪdʒ/ /dɛˈkɔːr/", "通过翻新它经典的复古装饰"]
    ],
    [["零售复古风", "century-old (百年的)；nostalgia (怀旧/思乡)；refurbish (翻新)；vintage decor (复古装饰)。"]]
  ],
  [
    "由于质量控制未能达标，制造商对这款存在安全隐患的家用电器发布了全面的召回通知",
    "Due to substandard quality control, the manufacturer issued a comprehensive recall notice for the home appliance possessing safety hazards.",
    [
      [0, 4, "原因状语", "/djuː/ /tuː/ /sʌbˈstændərd/ /ˈkwɒlɪti/ /kənˈtroʊl/", "由于不达标的质量控制"],
      [5, 6, "主句主语", "/ðə/ /ˌmænjʊˈfæktʃərər/", "制造商"],
      [7, 7, "主句谓语", "/ˈɪʃuːd/", "发布了"],
      [8, 12, "主句宾语", "/ə/ /ˌkɒmprɪˈhɛnsɪv/ /rɪˈkɔːl/ /ˈnoʊtɪs/", "一份全面的召回通知"],
      [13, 19, "后置定语", "/fɔːr/ /ðə/ /hoʊm/ /əˈplaɪəns/ /pəˈzɛsɪŋ/ /ˈseɪfti/ /ˈhæzərdz/", "针对拥有安全隐患的家用电器的"]
    ],
    [["产品召回", "substandard (不达标的)；recall notice (召回通知)；home appliance (家用电器)；safety hazards (安全隐患)。"]]
  ],
  [
    "商场保安部门加强了监控巡逻，以遏制节假日期间频发的入室盗窃和扒窃事件",
    "The mall's security department intensified surveillance patrols to curb the frequent burglaries and pickpocketing incidents during the holiday season.",
    [
      [0, 3, "主语", "/ðə/ /mɔːlz/ /sɪˈkjʊərɪti/ /dɪˈpɑːrtmənt/", "商场的安保部门"],
      [4, 4, "谓语", "/ɪnˈtɛnsɪˌfaɪd/", "加强了(强化了)"],
      [5, 6, "宾语", "/sərˈveɪləns/ /pəˈtroʊlz/", "监控巡逻"],
      [7, 18, "目的状语", "/tuː/ /kɜːrb/ /ðə/ /ˈfriːkwənt/ /ˈbɜːrgləriz/ /ænd/ /ˈpɪkˌpɒkɪtɪŋ/ /ˈɪnsɪdənts/ /ˈdjʊərɪŋ/ /ðə/ /ˈhɒlɪˌdeɪ/ /ˈsiːzən/", "为了遏制在节假日期间频繁的入室盗窃和扒窃事件"]
    ],
    [["商场安保", "intensify (加强)；surveillance patrol (监控巡逻)；curb (遏制)；burglary (入室盗窃)；pickpocketing (扒窃)。"]]
  ],
  [
    "为了对抗电子商务的冲击，传统的购物中心正在演变成为集娱乐、餐饮和社交于一体的综合体",
    "To counter the impact of e-commerce, traditional shopping centers are evolving into comprehensive complexes integrating entertainment, dining, and socializing.",
    [
      [0, 6, "目的状语", "/tuː/ /ˈkaʊntər/ /ði/ /ˈɪmpækt/ /ɒv/ /ˈiːˌkɒmɜːrs/", "为了对抗电子商务的冲击"],
      [7, 9, "主句主语", "/trəˈdɪʃənəl/ /ˈʃɒpɪŋ/ /ˈsɛntərz/", "传统的购物中心"],
      [10, 12, "主句谓语+介词", "/ɑːr/ /ɪˈvɒlvɪŋ/ /ˈɪntuː/", "正在演变为"],
      [13, 15, "主句宾语", "/ˌkɒmprɪˈhɛnsɪv/ /ˈkɒmplɛksɪz/", "综合的复合体"],
      [16, 21, "后置定语", "/ˈɪntɪˌgreɪtɪŋ/ /ˌɛntərˈteɪnmənt/, /ˈdaɪnɪŋ/, /ænd/ /ˈsoʊʃəˌlaɪzɪŋ/", "整合了娱乐、餐饮和社交的"]
    ],
    [["实体零售转型", "counter (对抗，反击)；evolve into (演变为)；comprehensive complex (综合体/复合体)；integrate (整合)。"]]
  ],
  [
    "限量版运动鞋的独家发售引发了黄牛党的大量囤积，导致真正的粉丝一鞋难求",
    "The exclusive release of the limited-edition sneakers triggered massive hoarding by scalpers, resulting in genuine fans struggling to acquire a pair.",
    [
      [0, 7, "主句主语", "/ði/ /ɪkˈskluːsɪv/ /rɪˈliːs/ /ɒv/ /ðə/ /ˈlɪmɪtɪd-ɪˈdɪʃən/ /ˈsniːkərz/", "限量版运动鞋的独家发售"],
      [8, 8, "主句谓语", "/ˈtrɪgərd/", "引发了"],
      [9, 13, "主句宾语", "/ˈmæsɪv/ /ˈhɔːrdɪŋ/ /baɪ/ /ˈskælpərz/", "来自黄牛党的大规模囤积"],
      [14, 23, "结果状语(分词)", "/rɪˈzʌltɪŋ/ /ɪn/ /dʒɛnjuɪn/ /fænz/ /ˈstrʌglɪŋ/ /tuː/ /əˈkwaɪər/ /ə/ /pɛər/", "导致了真正的粉丝挣扎于去获取一双"]
    ],
    [["潮流发售", "exclusive release (独家发售)；sneaker (运动鞋)；hoarding (囤积)；scalper (黄牛党，倒票者)。"]]
  ]
];

build('scenarios_data_ext_shopping_10.js', 'shopping_02', 'shp', 41, shp);
