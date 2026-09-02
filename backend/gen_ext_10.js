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

const art10 = [
  [
    "文艺复兴时期的艺术家们常常融合了复杂的隐喻来传达政治上的不满",
    "Renaissance artists frequently incorporated intricate metaphors to convey political discontent.",
    [
      [0, 1, "主语", "/ˈrɛnəsɑːns/ /ˈɑːrtɪsts/", "文艺复兴时期的艺术家们"],
      [2, 3, "状语+谓语", "/ˈfriːkwəntli/ /ɪnˈkɔːrpəˌreɪtɪd/", "频繁地融合了"],
      [4, 5, "宾语", "/ˈɪntrɪkət/ /ˈmɛtəfɔːrz/", "复杂的隐喻"],
      [6, 9, "目的状语", "/tuː/ /kənˈveɪ/ /pəˈlɪtɪkəl/ /ˌdɪskənˈtɛnt/", "为了传达政治上的不满"]
    ],
    [["艺术与政治", "metaphor (隐喻)；discontent (不满)。"]]
  ],
  [
    "这位备受赞誉的雕塑家用再生金属锻造了一座具有纪念意义的雕像",
    "The acclaimed sculptor forged a monumental statue out of recycled metals.",
    [
      [0, 2, "主语", "/ði/ /əˈkleɪmd/ /ˈskʌlptər/", "这位备受赞誉的雕塑家"],
      [3, 3, "谓语", "/fɔːrdʒd/", "锻造了"],
      [4, 6, "宾语", "/ə/ /ˌmɒnjʊˈmɛntəl/ /ˈstætʃuː/", "一座具有纪念意义的(巨大的)雕像"],
      [7, 10, "材料状语", "/aʊt/ /ɒv/ /riˈsaɪkəld/ /ˈmɛtəlz/", "由再生金属(制成)"]
    ],
    [["雕塑艺术", "sculptor (雕塑家)；forge (锻造)；monumental (巨大的/有纪念意义的)；recycled metals (再生金属)。"]]
  ],
  [
    "古典音乐通常需要数十年的严酷训练才能达到纯熟的精通程度",
    "Classical music usually necessitates decades of rigorous training to achieve absolute mastery.",
    [
      [0, 1, "主语", "/ˈklæsɪkəl/ /ˈmjuːzɪk/", "古典音乐"],
      [2, 3, "状语+谓语", "/ˈjuːʒuəli/ /nəˈsɛsɪˌteɪts/", "通常需要/使...成为必需"],
      [4, 7, "宾语", "/ˈdɛkeɪdz/ /ɒv/ /ˈrɪgərəs/ /ˈtreɪnɪŋ/", "数十年的严酷训练"],
      [8, 11, "目的状语", "/tuː/ /əˈtʃiːv/ /ˈæbsəˌluːt/ /ˈmæstəri/", "去达到绝对的精通"]
    ],
    [["音乐训练", "necessitate (使...成为必要)；rigorous training (严格/严酷的训练)；absolute mastery (纯熟的精通)。"]]
  ],
  [
    "超现实主义绘画故意扭曲现实，以唤起一种梦幻般的超然感",
    "Surrealist paintings deliberately distort reality to evoke a dreamlike sense of detachment.",
    [
      [0, 1, "主语", "/səˈriːəlɪst/ /ˈpeɪntɪŋz/", "超现实主义绘画"],
      [2, 3, "状语+谓语", "/dɪˈlɪbərətli/ /dɪˈstɔːrt/", "故意地扭曲"],
      [4, 4, "宾语", "/riˈæləti/", "现实"],
      [5, 10, "目的状语", "/tuː/ /ɪˈvoʊk/ /ə/ /ˈdriːmˌlaɪk/ /sɛns/ /ɒv/ /dɪˈtætʃmənt/", "为了唤起一种梦幻般的超然感"]
    ],
    [["超现实主义", "surrealist (超现实主义的)；deliberately distort (故意扭曲)；evoke (唤起)；detachment (超然/抽离感)。"]]
  ],
  [
    "这座歌剧院无与伦比的声学效果增强了每一场声乐表演的丰富性",
    "The opera house's unparalleled acoustics enhance the richness of every vocal performance.",
    [
      [0, 4, "主语", "/ðə/ /ˈɒpərə/ /ˈhaʊsɪz/ /ʌnˈpærəˌlɛld/ /əˈkuːstɪks/", "这座歌剧院无与伦比的声学效果"],
      [5, 5, "谓语", "/ɪnˈhæns/", "增强了"],
      [6, 11, "宾语", "/ðə/ /ˈrɪtʃnəs/ /ɒv/ /ˈɛvəri/ /ˈvoʊkəl/ /pərˈfɔːrməns/", "每一场声乐表演的丰富性"]
    ],
    [["剧院设计", "opera house (歌剧院)；acoustics (声学效果，此处作复数名词)；richness (丰富性)；vocal performance (声乐表演)。"]]
  ],
  [
    "这位剧作家巧妙地运用了讽刺手法来揭露资产阶级社会的虚伪",
    "The playwright masterfully employed satire to expose the hypocrisy of bourgeois society.",
    [
      [0, 1, "主语", "/ðə/ /ˈpleɪˌraɪt/", "这位剧作家"],
      [2, 3, "状语+谓语", "/ˈmæstərfəli/ /ɪmˈplɔɪd/", "巧妙地(大师般地)运用了"],
      [4, 4, "宾语", "/ˈsætaɪər/", "讽刺(手法)"],
      [5, 10, "目的状语", "/tuː/ /ɪkˈspoʊz/ /ðə/ /hɪˈpɒkrəsi/ /ɒv/ /bʊərˈʒwɑː/ /səˈsaɪəti/", "去揭露资产阶级社会的虚伪"]
    ],
    [["文学评论", "playwright (剧作家)；satire (讽刺)；hypocrisy (虚伪)；bourgeois (资产阶级的)。"]]
  ],
  [
    "保护濒危的口述传统需要语言学家和土著长者之间持续的合作",
    "Preserving endangered oral traditions requires ongoing collaboration between linguists and indigenous elders.",
    [
      [0, 3, "主语(动名词)", "/prɪˈzɜːrvɪŋ/ /ɪnˈdeɪndʒərd/ /ˈɔːrəl/ /trəˈdɪʃənz/", "保护濒危的口述传统"],
      [4, 4, "谓语", "/rɪˈkwaɪərz/", "要求，需要"],
      [5, 11, "宾语(含介词定语)", "/ˈɒnˌgoʊɪŋ/ /kəˌlæbəˈreɪʃən/ /bɪˈtwiːn/ /ˈlɪŋgwɪsts/ /ænd/ /ɪnˈdɪdʒənəs/ /ˈɛldərz/", "语言学家和土著长者之间持续的合作"]
    ],
    [["非遗保护", "endangered oral traditions (濒危口述传统)；linguist (语言学家)；indigenous elder (土著/原住民长者)。"]]
  ],
  [
    "这种后现代建筑通过将突兀的几何形状并置来打破传统规范",
    "The postmodern architecture defies traditional norms by juxtaposing jarring geometric shapes.",
    [
      [0, 2, "主语", "/ðə/ /poʊstˈmɒdərn/ /ˈɑːrkɪˌtɛktʃər/", "这种后现代建筑"],
      [3, 3, "谓语", "/dɪˈfaɪz/", "反抗，打破"],
      [4, 5, "宾语", "/trəˈdɪʃənəl/ /nɔːrmz/", "传统的规范"],
      [6, 10, "方式状语", "/baɪ/ /ˌdʒʌkstəˈpoʊzɪŋ/ /ˈdʒɑːrɪŋ/ /ˌdʒiːəˈmɛtrɪk/ /ʃeɪps/", "通过将突兀的几何形状并列放置(并置)"]
    ],
    [["现代建筑", "defy norms (打破规范)；juxtapose (并列放置/并置)；jarring (刺耳的，突兀的，不和谐的)。"]]
  ],
  [
    "这些引人入胜的肖像画深刻地反映了战后一代人集体经历的创伤",
    "These captivating portraits profoundly reflect the collective trauma experienced by the post-war generation.",
    [
      [0, 2, "主语", "/ðiːz/ /ˈkæptɪˌveɪtɪŋ/ /ˈpɔːrtrɪts/", "这些引人入胜的肖像画"],
      [3, 4, "状语+谓语", "/prəˈfaʊndli/ /rɪˈflɛkt/", "深刻地反映了"],
      [5, 12, "宾语(含分词定语)", "/ðə/ /kəˈlɛktɪv/ /ˈtrɔːmə/ /ɪkˈspɪəriənst/ /baɪ/ /ðə/ /poʊst-wɔːr/ /ˌdʒɛnəˈreɪʃən/", "由战后一代人所经历的集体创伤"]
    ],
    [["艺术与历史", "captivating portrait (引人入胜的肖像画)；collective trauma (集体创伤)；post-war generation (战后一代)。"]]
  ],
  [
    "电影摄影师巧妙地运用背光技术为整个令人毛骨悚然的场景投上了一层阴险的阴影",
    "The cinematographer cleverly utilized backlighting to cast a sinister shadow over the entire eerie scene.",
    [
      [0, 1, "主语", "/ðə/ /ˌsɪnəməˈtɒgrəfər/", "电影摄影师"],
      [2, 3, "状语+谓语", "/ˈklɛvərli/ /ˈjuːtɪˌlaɪzd/", "巧妙地利用了"],
      [4, 4, "宾语", "/ˈbækˌlaɪtɪŋ/", "背光技术"],
      [5, 14, "目的状语", "/tuː/ /kæst/ /ə/ /ˈsɪnɪstər/ /ˈʃædoʊ/ /ˈoʊvər/ /ði/ /ɪnˈtaɪər/ /ˈɪəri/ /siːn/", "去为整个令人毛骨悚然的场景投下一层阴险的阴影"]
    ],
    [["电影拍摄技巧", "cinematographer (电影摄影师)；backlighting (背光/逆光打光)；sinister (阴险的)；eerie (怪异的/令人毛骨悚然的)。"]]
  ]
];

const travel10 = [
  [
    "尽管遭遇了不可预见的暴风雪，登山者们依然登顶了那座险峻的山峰",
    "Despite encountering an unforeseen blizzard, the mountaineers successfully summited the treacherous peak.",
    [
      [0, 4, "让步状语(分词)", "/dɪˈspaɪt/ /ɪnˈkaʊntərɪŋ/ /æn/ /ˌʌnfɔːrˈsiːn/ /ˈblɪzərd/", "尽管遭遇了一场不可预见的暴风雪"],
      [5, 6, "主句主语", "/ðə/ /ˌmaʊntɪˈnɪərz/", "登山者们"],
      [7, 8, "主句状语+谓语", "/səkˈsɛsfəli/ /ˈsʌmɪtɪd/", "成功地登顶了"],
      [9, 11, "主句宾语", "/ðə/ /ˈtrɛtʃərəs/ /piːk/", "那座险峻的山峰"]
    ],
    [["探险旅行", "unforeseen blizzard (不可预见的暴雪)；summit (作动词，登顶)；trecherous peak (险峻的/危险的山峰)。"]]
  ],
  [
    "为了促进生态友好的旅游，当地市政委员会在国家公园内禁止了所有的机动车辆",
    "To promote eco-friendly tourism, the municipal council banned all motorized vehicles within the national park.",
    [
      [0, 3, "目的状语", "/tuː/ /prəˈmoʊt/ /ˈiːkoʊ-ˈfrɛndli/ /ˈtʊərɪzəm/", "为了促进生态友好的旅游"],
      [4, 6, "主句主语", "/ðə/ /mjuˈnɪsɪpəl/ /ˈkaʊnsəl/", "市政委员会"],
      [7, 7, "主句谓语", "/bænd/", "禁止了"],
      [8, 10, "主句宾语", "/ɔːl/ /ˈmoʊtəˌraɪzd/ /ˈviːɪkəlz/", "所有的机动车辆"],
      [11, 14, "地点状语", "/wɪˈðɪn/ /ðə/ /ˈnæʃənəl/ /pɑːrk/", "在国家公园以内"]
    ],
    [["环保旅游政策", "eco-friendly (生态友好的)；municipal council (市政委员会)；motorized vehicles (机动车辆)。"]]
  ],
  [
    "探索这个错综复杂的地下迷宫能让游客深刻地一窥古代的防御机制",
    "Exploring the intricate subterranean labyrinth offers tourists a profound glimpse into ancient defensive mechanisms.",
    [
      [0, 4, "主语(动名词)", "/ɪkˈsplɔːrɪŋ/ /ði/ /ˈɪntrɪkət/ /ˌsʌbtəˈreɪniən/ /ˈlæbəˌrɪnθ/", "探索这个错综复杂的地下迷宫"],
      [5, 5, "谓语", "/ˈɒfərz/", "提供给"],
      [6, 6, "间接宾语", "/ˈtʊərɪsts/", "游客们"],
      [7, 13, "直接宾语", "/ə/ /prəˈfaʊnd/ /glɪmps/ /ˈɪntuː/ /ˈeɪnʃənt/ /dɪˈfɛnsɪv/ /mɛkəˈnɪzəmz/", "深入一瞥古代的防御机制"]
    ],
    [["遗迹探索", "intricate (错综复杂的)；subterranean (地下的)；labyrinth (迷宫)；defensive mechanisms (防御机制)。"]]
  ],
  [
    "这位独自旅行的背包客非常依赖直觉的导航和偶尔来自热情好客的当地人的帮助",
    "The solo backpacker relied heavily on intuitive navigation and occasional assistance from hospitable locals.",
    [
      [0, 2, "主语", "/ðə/ /ˈsoʊloʊ/ /ˈbækˌpækər/", "这位独自的背包客"],
      [3, 5, "状语+谓语+介词", "/rɪˈlaɪd/ /ˈhɛvɪli/ /ɒn/", "严重地依赖于"],
      [6, 8, "宾语1", "/ɪnˈtuːɪtɪv/ /ˌnævɪˈgeɪʃən/", "直觉的导航"],
      [9, 14, "宾语2(并列)", "/ænd/ /əˈkeɪʒənəl/ /əˈsɪstəns/ /frɒm/ /ˈhɒspɪtəbəl/ /ˈloʊkəlz/", "和偶尔来自热情好客的当地人的帮助"]
    ],
    [["背包客文化", "solo backpacker (独自旅行的背包客)；intuitive navigation (直觉导航)；hospitable (热情好客的)。"]]
  ],
  [
    "豪华游轮行业因其巨大的碳足迹和海洋污染而面临着日益严厉的审查",
    "The luxury cruise industry faces increasing scrutiny over its massive carbon footprint and marine pollution.",
    [
      [0, 3, "主语", "/ðə/ /ˈlʌgʒəri/ /kruːz/ /ˈɪndəstri/", "豪华游轮行业"],
      [4, 4, "谓语", "/ˈfeɪsɪz/", "面临着"],
      [5, 6, "宾语", "/ɪnˈkriːsɪŋ/ /ˈskruːtɪni/", "日益增加的审查(仔细检查)"],
      [7, 14, "状语(介词)", "/ˈoʊvər/ /ɪts/ /ˈmæsɪv/ /ˈkɑːrbən/ /ˈfʊtˌprɪnt/ /ænd/ /məˈriːn/ /pəˈluːʃən/", "关于其巨大的碳足迹和海洋污染"]
    ],
    [["旅游与环保", "cruise industry (游轮行业)；increasing scrutiny (日益严厉的审查/监督)；carbon footprint (碳足迹)；marine pollution (海洋污染)。"]]
  ],
  [
    "从繁华的大都市无缝过渡到宁静的乡村景观是这次长途火车旅行的一大亮点",
    "The seamless transition from a bustling metropolis to tranquil rural landscapes highlights this long-haul train journey.",
    [
      [0, 10, "主语", "/ðə/ /ˈsiːmləs/ /trænˈzɪʃən/ /frɒm/ /ə/ /ˈbʌslɪŋ/ /məˈtrɒpəlɪs/ /tuː/ /ˈtræŋkwɪl/ /ˈrʊərəl/ /ˈlændskeɪps/", "从繁华的大都市到宁静的乡村景观的无缝过渡"],
      [11, 11, "谓语", "/ˈhaɪˌlaɪts/", "突显了/是...的亮点"],
      [12, 15, "宾语", "/ðɪs/ /lɒŋ-hɔːl/ /treɪn/ /ˈdʒɜːrni/", "这次长途火车旅行"]
    ],
    [["旅途风景", "seamless transition (无缝过渡)；bustling metropolis (繁华的大都市)；tranquil (宁静的，恬静的)；long-haul (长途的)。"]]
  ],
  [
    "由于政治局势动荡，大使馆强烈建议公民推迟所有不必要的出国旅行",
    "Due to political unrest, the embassy strongly advises citizens to postpone all non-essential travel abroad.",
    [
      [0, 3, "原因状语", "/djuː/ /tuː/ /pəˈlɪtɪkəl/ /ʌnˈrɛst/", "由于政治动荡"],
      [4, 5, "主句主语", "/ði/ /ˈɛmbəsi/", "大使馆"],
      [6, 7, "主句状语+谓语", "/ˈstrɒŋli/ /ədˈvaɪzɪz/", "强烈建议"],
      [8, 8, "主句宾语", "/ˈsɪtɪzənz/", "公民们"],
      [9, 14, "宾语补足语(不定式)", "/tuː/ /poʊstˈpoʊn/ /ɔːl/ /nɒn-ɪˈsɛnʃəl/ /ˈtrævəl/ /əˈbrɔːd/", "去推迟所有不必要的出国旅行"]
    ],
    [["旅行安全警告", "political unrest (政治动荡)；embassy (大使馆)；postpone (推迟)；non-essential travel (非必要旅行)。"]]
  ],
  [
    "这片原始的群岛以其极具生物多样性的珊瑚礁和水晶般清澈的绿松石般水域而闻名",
    "The pristine archipelago is celebrated for its highly biodiverse coral reefs and crystal-clear turquoise waters.",
    [
      [0, 2, "主语", "/ðə/ /ˈprɪstiːn/ /ˌɑːrkɪˈpɛləgoʊ/", "这片原始的(未受破坏的)群岛"],
      [3, 4, "谓语(被动固定搭配)", "/ɪz/ /ˈsɛlɪˌbreɪtɪd/", "被赞美(以...而闻名)"],
      [5, 14, "原因状语", "/fɔːr/ /ɪts/ /ˈhaɪli/ /ˌbaɪoʊdaɪˈvɜːrs/ /ˈkɔːrəl/ /riːfs/ /ænd/ /ˈkrɪstəl-klɪər/ /ˈtɜːrkwɔɪz/ /ˈwɔːtərz/", "因为其高度生物多样性的珊瑚礁和水晶般清澈的绿松石色的水域"]
    ],
    [["海岛旅游描述", "pristine (原始的，崭新的，未被破坏的)；biodiverse (生物多样性的)；coral reef (珊瑚礁)；turquoise (绿松石色)。"]]
  ],
  [
    "旅行者们在未被探索的热带雨林深处航行时，不可避免地会遇到令人畏惧的挑战",
    "Travelers inevitably encounter formidable challenges while navigating through the depths of unexplored rainforests.",
    [
      [0, 0, "主句主语", "/ˈtrævələrz/", "旅行者们"],
      [1, 2, "主句状语+谓语", "/ɪnˈɛvɪtəbli/ /ɪnˈkaʊntər/", "不可避免地遭遇"],
      [3, 4, "主句宾语", "/ˈfɔːrmɪdəbəl/ /ˈtʃælɪndʒɪz/", "令人敬畏的/艰难的挑战"],
      [5, 12, "时间状语(省略主谓)", "/waɪl/ /ˈnævɪˌgeɪtɪŋ/ /θruː/ /ðə/ /dɛpθs/ /ɒv/ /ˌʌnɪkˈsplɔːrd/ /ˈreɪnˌfɔːrɪsts/", "当航行穿过未被探索的雨林深处时"]
    ],
    [["雨林探险", "inevitably (不可避免地)；formidable (艰难的，令人畏惧的)；navigate through (穿行，航行通过)；unexplored (未被探索的)。"]]
  ],
  [
    "沉浸式的语言学习项目通过文化交流促进了对外国习俗更深刻的欣赏",
    "Immersive language learning programs foster a profound appreciation for foreign customs through cultural exchange.",
    [
      [0, 3, "主语", "/ɪˈmɜːrsɪv/ /ˈlæŋgwɪdʒ/ /ˈlɜːrnɪŋ/ /ˈproʊgræmz/", "沉浸式的语言学习项目"],
      [4, 4, "谓语", "/ˈfɒstər/", "培养，促进"],
      [5, 10, "宾语(含定语)", "/ə/ /prəˈfaʊnd/ /əˌpriːʃiˈeɪʃən/ /fɔːr/ /ˈfɒrɪn/ /ˈkʌstəmz/", "一种对外国习俗的深刻欣赏"],
      [11, 13, "方式状语", "/θruː/ /ˈkʌltʃərəl/ /ɪksˈtʃeɪndʒ/", "通过文化交流"]
    ],
    [["跨文化旅游", "immersive (沉浸式的)；foster an appreciation (培养一种欣赏/感激)；foreign customs (外国习俗)；cultural exchange (文化交流)。"]]
  ]
];

const dessert10 = [
  [
    "这家烘焙坊的招牌羊角面包拥有难以置信的一碰即碎的外壳和黄油般丰富的内在",
    "The bakery's signature croissants boast an incredibly flaky crust and a rich, buttery interior.",
    [
      [0, 3, "主语", "/ðə/ /ˈbeɪkəriz/ /ˈsɪgnətʃər/ /krwɑːˈsɑːnts/", "这家烘焙坊的招牌羊角面包"],
      [4, 4, "谓语", "/boʊst/", "拥有(值得夸耀地拥有)"],
      [5, 13, "宾语", "/æn/ /ɪnˈkrɛdəbli/ /ˈfleɪki/ /krʌst/ /ænd/ /ə/ /rɪtʃ/, /ˈbʌtəri/ /ɪnˈtɪəriər/", "一种难以置信的酥脆(易碎)外壳和丰富黄油味的内在"]
    ],
    [["烘焙口感词汇", "boast (作为及物动词意为‘拥有...值得自豪的特点’)；flaky crust (酥脆/分层的外皮)；buttery (有黄油味的，像黄油般滑润的)。"]]
  ],
  [
    "在焦糖布丁的顶部铺上一层焦糖化的糖，增添了令人愉悦的质感对比",
    "Torching a layer of caramelized sugar atop the crème brûlée adds a delightful textural contrast.",
    [
      [0, 8, "主语(动名词)", "/ˈtɔːrtʃɪŋ/ /ə/ /ˈleɪər/ /ɒv/ /ˈkærəməˌlaɪzd/ /ˈʃʊgər/ /əˈtɒp/ /ðə/ /krɛm/ /bruːˈleɪ/", "在焦糖布丁上方炙烤一层焦糖化的糖"],
      [9, 9, "谓语", "/ædz/", "增加了"],
      [10, 13, "宾语", "/ə/ /dɪˈlaɪtfəl/ /ˈtɛkstʃərəl/ /ˈkɒntræst/", "一种令人愉悦的质地上的对比"]
    ],
    [["法式甜点工艺", "torch (用火枪炙烤)；caramelized (焦糖化的)；crème brûlée (法式焦糖布丁，烤布蕾)；textural contrast (质感的对比)。"]]
  ],
  [
    "这些手工制作的松露巧克力中融入了由异国香料提取出来的微妙风味",
    "These artisanal chocolate truffles are infused with subtle flavors extracted from exotic spices.",
    [
      [0, 3, "主语", "/ðiːz/ /ɑːrˈtɪzənəl/ /ˈtʃɒkəlɪt/ /ˈtrʌfəlz/", "这些手工的巧克力松露"],
      [4, 6, "谓语(被动)+介词", "/ɑːr/ /ɪnˈfjuːzd/ /wɪθ/", "被注入了/融入了"],
      [7, 13, "介词宾语(含分词后置定语)", "/ˈsʌtəl/ /ˈfleɪvərz/ /ɪkˈstræktɪd/ /frɒm/ /ɪgˈzɒtɪk/ /ˈspaɪsɪz/", "从异国香料中提取出的微妙风味"]
    ],
    [["甜点风味", "be infused with (被注入/融入...)；subtle flavors (微妙的风味)；extract from (从...提取)；exotic spices (异国香料)。"]]
  ],
  [
    "这款颓废的黑森林蛋糕，樱桃糖浆每一层的渗透都使其更加湿润丰富",
    "The decadent Black Forest cake is immensely enriched by the permeation of cherry syrup through every layer.",
    [
      [0, 4, "主语", "/ðə/ /ˈdɛkədənt/ /blæk/ /ˈfɔːrɪst/ /keɪk/", "这款奢华/颓废的黑森林蛋糕"],
      [5, 7, "状语+谓语(被动)", "/ɪz/ /ɪˈmɛnsli/ /ɪnˈrɪtʃt/", "被极大地丰富了"],
      [8, 16, "施动者状语", "/baɪ/ /ðə/ /ˌpɜːrmiˈeɪʃən/ /ɒv/ /ˈtʃɛri/ /ˈsɪrəp/ /θruː/ /ˈɛvəri/ /ˈleɪər/", "被樱桃糖浆穿过每一层的渗透(所丰富)"]
    ],
    [["蛋糕结构", "decadent (美食中指奢华/浓郁以至颓废的)；enriched (被丰富/使更加美味的)；permeation (渗透，弥漫)；cherry syrup (樱桃糖浆)。"]]
  ],
  [
    "这位糕点大师对于食材比例的一丝不苟的关注，保证了每一次烘焙的一致性",
    "The pastry master's meticulous attention to ingredient proportions guarantees consistency in every single bake.",
    [
      [0, 7, "主语", "/ðə/ /ˈpeɪstri/ /ˈmæstərz/ /mɪˈtɪkjʊləs/ /əˈtɛnʃən/ /tuː/ /ɪnˈgriːdiənt/ /prəˈpɔːrʃənz/", "这位糕点大师对于食材比例的一丝不苟的关注"],
      [8, 8, "谓语", "/ˌgærənˈtiːz/", "保证了"],
      [9, 9, "宾语", "/kənˈsɪstənsi/", "一致性"],
      [10, 13, "时间/范围状语", "/ɪn/ /ˈɛvəri/ /ˈsɪŋgəl/ /beɪk/", "在每一次烘焙中"]
    ],
    [["烘焙科学", "meticulous attention (极其细致的关注)；ingredient proportions (食材比例)；consistency (一致性，指品质稳定)。"]]
  ],
  [
    "新鲜出炉的华夫饼散发出一种诱人的黄油香气，瞬间弥漫了整条街道",
    "The freshly baked waffles exude an enticing buttery aroma that instantaneously permeates the entire street.",
    [
      [0, 3, "主语", "/ðə/ /ˈfrɛʃli/ /beɪkt/ /ˈwɒfəlz/", "刚出炉的华夫饼"],
      [4, 4, "谓语", "/ɪgˈzuːd/", "散发出"],
      [5, 8, "宾语", "/æn/ /ɪnˈtaɪsɪŋ/ /ˈbʌtəri/ /əˈroʊmə/", "一种诱人的黄油香气"],
      [9, 14, "定语从句", "/ðæt/ /ˌɪnstənˈteɪniəsli/ /ˈpɜːrmiˌeɪts/ /ði/ /ɪnˈtaɪər/ /striːt/", "它瞬间弥漫了整条街道"]
    ],
    [["香气描写", "waffle (华夫饼)；exude (散发，流露)；enticing (诱人的)；instantaneously (瞬间地)；permeate (弥漫)。"]]
  ],
  [
    "他们巧妙地用浓郁的黑巧克力甘纳许取代了传统的翻糖糖霜，以减少过分的甜腻",
    "They ingeniously substituted the traditional fondant icing with a rich dark chocolate ganache to mitigate excessive sweetness.",
    [
      [0, 0, "主语", "/ðeɪ/", "他们"],
      [1, 2, "状语+谓语", "/ɪnˈdʒiːniəsli/ /ˈsʌbstɪˌtuːtɪd/", "巧妙地(天才般地)替代了"],
      [3, 6, "宾语", "/ðə/ /trəˈdɪʃənəl/ /ˈfɒndənt/ /ˈaɪsɪŋ/", "传统的翻糖糖霜"],
      [7, 12, "伴随状语(固定搭配)", "/wɪθ/ /ə/ /rɪtʃ/ /dɑːrk/ /ˈtʃɒkəlɪt/ /gəˈnæʃ/", "用一种浓郁的黑巧克力甘纳许(substitute A with B)"],
      [13, 16, "目的状语", "/tuː/ /ˈmɪtɪˌgeɪt/ /ɪkˈsɛsɪv/ /ˈswiːtnəs/", "为了减轻过分的甜度"]
    ],
    [["食材替代", "ingeniously (巧妙地/天才般地)；substitute...with... (用...替代...)；fondant icing (翻糖糖霜，极甜)；mitigate (减轻/缓和)。"]]
  ],
  [
    "制作正宗的意大利提拉米苏需要一层层浸泡过意式浓缩咖啡的纤手指饼干和马斯卡彭奶酪",
    "Crafting authentic Italian tiramisu requires alternating layers of espresso-soaked ladyfingers and mascarpone cheese.",
    [
      [0, 3, "主语(动名词)", "/ˈkræftɪŋ/ /ɔːˈθɛntɪk/ /ɪˈtæljən/ /ˌtɪrəmɪˈsuː/", "制作正宗的意大利提拉米苏"],
      [4, 4, "谓语", "/rɪˈkwaɪərz/", "需要"],
      [5, 11, "宾语", "/ˈɔːltərˌneɪtɪŋ/ /ˈleɪərz/ /ɒv/ /ɛˈsprɛsoʊ-soʊkt/ /ˈleɪdiˌfɪŋgərz/ /ænd/ /ˌmæskɑːrˈpoʊneɪ/ /tʃiːz/", "交替的意式浓缩咖啡浸泡过的手指饼干和马斯卡彭奶酪的层次"]
    ],
    [["提拉米苏配方", "alternating layers (交替的层次)；espresso-soaked (被浓缩咖啡浸透的)；ladyfingers (手指饼干，做提拉米苏专用的底层饼干)；mascarpone cheese (马斯卡彭奶酪)。"]]
  ],
  [
    "这家甜品店严格遵循使用当地采购的有机原料，确保了卓越的味觉体验",
    "The dessert parlor strictly adheres to using locally sourced organic ingredients, ensuring a superior gustatory experience.",
    [
      [0, 2, "主句主语", "/ðə/ /dɪˈzɜːrt/ /ˈpɑːrlər/", "这家甜品店"],
      [3, 4, "主句状语+谓语", "/ˈstrɪktli/ /ədˈhɪərz/", "严格地遵循/坚持"],
      [5, 10, "主句宾语", "/tuː/ /ˈjuːzɪŋ/ /ˈloʊkəli/ /sɔːrst/ /ɔːrˈgænɪk/ /ɪnˈgriːdiənts/", "使用当地采购的有机食材(adhere to doing)"],
      [11, 15, "结果状语(现在分词)", "/ɪnˈʃʊərɪŋ/ /ə/ /sʊˈpɪəriər/ /ˈgʌstəˌtɔːri/ /ɪkˈspɪəriəns/", "确保了一种卓越的味觉体验"]
    ],
    [["原料与品质", "parlor (专门的店，如 ice cream parlor)；adhere to (坚持/遵循，to为介词)；locally sourced (当地采购的)；gustatory experience (味觉体验)。"]]
  ],
  [
    "这款百香果慕斯精致的酸味完美地中和了底部重度巧克力的浓郁感",
    "The delicate tartness of the passionfruit mousse perfectly neutralizes the heavy chocolate richness at the base.",
    [
      [0, 6, "主语", "/ðə/ /ˈdɛlɪkət/ /ˈtɑːrtnəs/ /ɒv/ /ðə/ /ˈpæʃənfruːt/ /muːs/", "这款百香果慕斯精致的酸涩感"],
      [7, 8, "状语+谓语", "/ˈpɜːrfɪktli/ /ˈnuːtrəˌlaɪzɪz/", "完美地中和了"],
      [9, 12, "宾语", "/ðə/ /ˈhɛvi/ /ˈtʃɒkəlɪt/ /ˈrɪtʃnəs/", "厚重的巧克力浓郁感"],
      [13, 15, "地点状语", "/æt/ /ðə/ /beɪs/", "在底部"]
    ],
    [["甜品食评", "tartness (酸味/酸涩感)；mousse (慕斯)；neutralize (中和，抵消)；richness (浓郁/丰富性)。"]]
  ]
];

const ball10 = [
  [
    "在扣杀排球时产生巨大的爆发力依赖于完美的时机把握和核心力量",
    "Generating explosive power when spiking a volleyball relies on impeccable timing and core strength.",
    [
      [0, 5, "主语(动名词短语)", "/ˈdʒɛnəˌreɪtɪŋ/ /ɪkˈsploʊsɪv/ /ˈpaʊər/ /wɛn/ /ˈspaɪkɪŋ/ /ə/ /ˈvɒliˌbɔːl/", "当扣杀一个排球时产生爆发性的力量"],
      [6, 7, "谓语+介词", "/rɪˈlaɪz/ /ɒn/", "依赖于"],
      [8, 12, "宾语", "/ɪmˈpɛkəbəl/ /ˈtaɪmɪŋ/ /ænd/ /kɔːr/ /strɛŋθ/", "完美无瑕的时机把握以及核心力量"]
    ],
    [["排球发力", "explosive power (爆发力)；spike (作动词意为‘扣球’)；impeccable timing (完美的时机)；core strength (核心力量)。"]]
  ],
  [
    "裁判在补时阶段具有争议的判罚判给主队一个点球，剥夺了客队的胜利",
    "The referee's controversial penalty call in stoppage time deprived the visiting team of their victory.",
    [
      [0, 7, "主语", "/ðə/ /ˌrɛfəˈriːz/ /ˌkɒntrəˈvɜːrʃəl/ /ˈpɛnəlti/ /kɔːl/ /ɪn/ /ˈstɒpɪdʒ/ /taɪm/", "裁判在伤停补时阶段极具争议的点球判罚"],
      [8, 8, "谓语", "/dɪˈpraɪvd/", "剥夺了"],
      [9, 11, "宾语", "/ðə/ /ˈvɪzɪtɪŋ/ /tiːm/", "客队"],
      [12, 14, "状语(固定搭配)", "/ɒv/ /ðɛər/ /ˈvɪktəri/", "他们的胜利(deprive sb of sth)"]
    ],
    [["足球点球", "penalty call (点球判罚)；stoppage time (伤停补时阶段)；deprive sb of sth (剥夺某人的某物)。"]]
  ],
  [
    "篮球中执行无懈可击的挡拆战术需要两名进攻球员之间具有极高的默契",
    "Executing a flawless pick-and-roll play in basketball demands tremendous chemistry between the two offensive players.",
    [
      [0, 6, "主语(动名词短语)", "/ˈɛksɪˌkjuːtɪŋ/ /ə/ /ˈflɔːləs/ /pɪk-ænd-roʊl/ /pleɪ/ /ɪn/ /ˈbæskɪtˌbɔːl/", "在篮球中执行一个完美无瑕的挡拆战术"],
      [7, 7, "谓语", "/dɪˈmændz/", "要求，需要"],
      [8, 15, "宾语(含介词定语)", "/trɪˈmɛndəs/ /ˈkɛmɪstri/ /bɪˈtwiːn/ /ðə/ /tuː/ /əˈfɛnsɪv/ /ˈpleɪərz/", "两名进攻球员之间的极高的化学反应(默契)"]
    ],
    [["篮球战术", "flawless (无瑕疵的)；pick-and-roll play (挡拆战术)；tremendous chemistry (极大的化学反应/默契)；offensive player (进攻球员)。"]]
  ],
  [
    "为了穿透对方顽固的区域防守，中场球员们进行了一系列精准的快速传球",
    "To penetrate the stubborn zone defense, the midfielders orchestrated a sequence of precise, rapid passes.",
    [
      [0, 5, "目的状语", "/tuː/ /ˈpɛnɪˌtreɪt/ /ðə/ /ˈstʌbərn/ /zoʊn/ /dɪˈfɛns/", "为了穿透顽固的区域防守"],
      [6, 7, "主句主语", "/ðə/ /ˈmɪdˌfiːldərz/", "中场球员们"],
      [8, 8, "主句谓语", "/ˈɔːrkɪˌstreɪtɪd/", "精心策划/组织了"],
      [9, 14, "主句宾语", "/ə/ /ˈsiːkwəns/ /ɒv/ /prɪˈsaɪs/, /ˈræpɪd/ /ˈpæsɪz/", "一系列精确的、快速的传球"]
    ],
    [["足球/篮球攻防", "penetrate (穿透/突破)；stubborn (顽固的)；zone defense (联防/区域防守)；orchestrate (组织/策划)；sequence of passes (连续的传球)。"]]
  ],
  [
    "棒球经理通过换上专业的救援投手来应对第九局的高压局面，展现了战略上的机智",
    "The baseball manager showed strategic brilliance by bringing in a specialized relief pitcher for the high-pressure ninth inning.",
    [
      [0, 2, "主语", "/ðə/ /ˈbeɪsbɔːl/ /ˈmænɪdʒər/", "棒球经理"],
      [3, 3, "谓语", "/ʃoʊd/", "展现了"],
      [4, 5, "宾语", "/strəˈtiːdʒɪk/ /ˈbrɪliəns/", "战略上的才华(机智)"],
      [6, 17, "方式/目的状语", "/baɪ/ /ˈbrɪŋɪŋ/ /ɪn/ /ə/ /ˈspɛʃəˌlaɪzd/ /rɪˈliːf/ /ˈpɪtʃər/ /fɔːr/ /ðə/ /haɪ-ˈprɛʃər/ /naɪnθ/ /ˈɪnɪŋ/", "通过为了高压的第九局带来(换上)一名专门的救援投手"]
    ],
    [["棒球比赛", "strategic brilliance (战略才华)；bring in (换上场)；relief pitcher (救援投手，负责接替先发投手)；ninth inning (第九局，棒球通常打九局)。"]]
  ],
  [
    "由于持续的倾盆大雨让网球场表面变得极其湿滑，比赛被无限期暂停了",
    "The match was indefinitely suspended as the relentless downpour rendered the tennis court surface hazardously slippery.",
    [
      [0, 1, "主句主语", "/ðə/ /mætʃ/", "比赛"],
      [2, 4, "主句谓语(被动)", "/wɒz/ /ɪnˈdɛfɪnɪtli/ /səˈspɛndɪd/", "被无限期地暂停了"],
      [5, 14, "原因状语从句", "/æz/ /ðə/ /rɪˈlɛntləs/ /ˈdaʊnˌpɔːr/ /ˈrɛndərd/ /ðə/ /ˈtɛnɪs/ /kɔːrt/ /ˈsɜːrfɪs/ /ˈhæzərdəsli/ /ˈslɪpəri/", "因为无情的倾盆大雨使得网球场表面变得危险地湿滑"]
    ],
    [["户外赛事天气", "indefinitely suspended (无限期暂停)；relentless downpour (无情的倾盆大雨)；render (使得...变成某种状态)；hazardously slippery (危险地湿滑)。"]]
  ],
  [
    "这位羽毛球二传手出色的假动作让对方的防守队员彻底失去了平衡",
    "The badminton setter's deceptive maneuvers caught the opposing defenders completely off balance.",
    [
      [0, 4, "主语", "/ðə/ /ˈbædmɪntən/ /ˈsɛtərz/ /dɪˈsɛptɪv/ /məˈnuːvərz/", "这位羽毛球二传手(通常指网前的做球者)极具欺骗性的动作"],
      [5, 5, "谓语(固定句型)", "/kɔːt/", "抓住了(使得...)"],
      [6, 8, "宾语", "/ði/ /əˈpoʊzɪŋ/ /dɪˈfɛndərz/", "对抗的防守者们"],
      [9, 11, "宾语补足语", "/kəmˈpliːtli/ /ɒf/ /ˈbæləns/", "彻底地失去平衡(catch sb off balance)"]
    ],
    [["羽毛球技术", "setter (二传手，做球者)；deceptive maneuvers (具有欺骗性的动作/假动作)；catch sb off balance (使某人失去平衡/措手不及)。"]]
  ],
  [
    "防守球员无情的紧逼最终迫使四分卫在绝望中掷出了那致命的拦截球",
    "The defensive line's relentless pressure ultimately coerced the quarterback into throwing the fatal interception in desperation.",
    [
      [0, 4, "主语", "/ðə/ /dɪˈfɛnsɪv/ /laɪnz/ /rɪˈlɛntləs/ /ˈprɛʃər/", "防守线的无情施压"],
      [5, 6, "状语+谓语", "/ˈʌltɪmətli/ /koʊˈɜːrst/", "最终迫使(胁迫)了"],
      [7, 8, "宾语", "/ðə/ /ˈkwɔːrtərˌbæk/", "四分卫(美式橄榄球核心位置)"],
      [9, 13, "宾语补足语(介词短语)", "/ˈɪntuː/ /ˈθroʊɪŋ/ /ðə/ /ˈfeɪtəl/ /ˌɪntərˈsɛpʃən/", "去扔出那致命的拦截(传球被断)"],
      [14, 15, "方式/情绪状语", "/ɪn/ /ˌdɛspəˈreɪʃən/", "在绝望之中"]
    ],
    [["美式橄榄球", "relentless pressure (无情的施压)；coerce sb into doing (迫使/胁迫某人做)；quarterback (四分卫)；interception (传球被对方拦截/抄截)；desperation (绝望)。"]]
  ],
  [
    "这位处于劣势的球队不仅顽强地将比赛拖入了点球大战，而且奇迹般地战胜了卫冕冠军",
    "The underdog team not only stubbornly dragged the match into a penalty shootout but miraculously triumphed over the defending champions.",
    [
      [0, 2, "主语", "/ðə/ /ˈʌndərdɒg/ /tiːm/", "这支处于劣势的队伍"],
      [3, 4, "并列连词+状语", "/nɒt/ /ˈoʊnli/ /ˈstʌbərnli/", "不仅顽固地(顽强地)"],
      [5, 5, "谓语1", "/drægd/", "拖拽"],
      [6, 11, "宾语1及状语", "/ðə/ /mætʃ/ /ˈɪntuː/ /ə/ /ˈpɛnəlti/ /ˈʃuːtˌaʊt/", "将比赛拖入了一场点球大战中"],
      [12, 14, "并列连词+状语", "/bʌt/ /mɪˈrækjʊləsli/", "而且奇迹般地"],
      [15, 16, "谓语2+介词", "/ˈtraɪʌmft/ /ˈoʊvər/", "战胜了(取得了对于...的胜利)"],
      [17, 19, "宾语2", "/ðə/ /dɪˈfɛndɪŋ/ /ˈtʃæmpiənz/", "卫冕冠军们"]
    ],
    [["淘汰赛高潮", "underdog (黑马/劣势方)；drag into (拖入)；penalty shootout (点球大战)；triumph over (战胜/击败)；defending champion (卫冕冠军)。"]]
  ],
  [
    "频繁地在人造草坪上踢球会大幅增加下肢承受严重关节和韧带损伤的风险",
    "Playing frequently on artificial turf substantially increases the risk of sustaining severe joint and ligament injuries in the lower extremities.",
    [
      [0, 4, "主语(动名词短语)", "/ˈpleɪɪŋ/ /ˈfriːkwəntli/ /ɒn/ /ˌɑːrtɪˈfɪʃəl/ /tɜːrf/", "频繁地在人造草坪上踢球"],
      [5, 6, "状语+谓语", "/səbˈstænʃəli/ /ɪnˈkriːsɪz/", "实质性地增加了"],
      [7, 19, "宾语(含介词/分词定语)", "/ðə/ /rɪsk/ /ɒv/ /səˈsteɪnɪŋ/ /sɪˈvɪər/ /dʒɔɪnt/ /ænd/ /ˈlɪgəmənt/ /ˈɪndʒəriz/ /ɪn/ /ðə/ /ˈloʊər/ /ɪkˈstrɛmɪtiz/", "承受在下肢的严重的关节和韧带损伤的风险"]
    ],
    [["运动伤害与场地", "artificial turf (人造草坪)；sustain an injury (遭受/承受伤害)；ligament injury (韧带损伤)；lower extremities (下肢，解剖学术语)。"]]
  ]
];

build('scenarios_data_ext_art_10.js', 'art_01', 'art', 41, art10);
build('scenarios_data_ext_travel_10.js', 'travel_01', 'trv', 41, travel10);
build('scenarios_data_ext_dessert_10.js', 'dessert_01', 'des', 26, dessert10);
build('scenarios_data_ext_ball_10.js', 'sports_02', 'spr', 26, ball10);
