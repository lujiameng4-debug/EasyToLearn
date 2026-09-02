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

const dessert = [
  [
    "这位糕点大师创造了一款完美的巧克力松露蛋糕，其特征是不可抗拒的丝滑夹心",
    "The master pastry chef created a flawless chocolate truffle cake characterized by an irresistibly silky ganache center.",
    [
      [0, 3, "主语", "/ðə/ /ˈmæstər/ /ˈpeɪstri/ /ʃɛf/", "这位糕点主厨"],
      [4, 4, "谓语", "/kriˈeɪtɪd/", "创造了"],
      [5, 9, "宾语", "/ə/ /ˈflɔːləs/ /ˈtʃɒkəlɪt/ /ˈtrʌfəl/ /keɪk/", "一款完美无瑕的巧克力松露蛋糕"],
      [10, 17, "后置定语", "/ˌkærəktəˈraɪzd/ /baɪ/ /æn/ /ˌɪrɪˈzɪstɪbli/ /ˈsɪlki/ /gəˈnæʃ/ /ˈsɛntər/", "被一个不可抗拒的丝滑甘纳许(巧克力糖霜)夹心所特征化的"]
    ],
    [["高级甜点词汇", "flawless (完美无瑕的)；truffle cake (松露蛋糕)；irresistibly (不可抗拒地)；ganache (甘纳许，一种巧克力和奶油的混合物夹心)。"]]
  ],
  [
    "搭配这块轻盈蓬松的马卡龙的最佳饮品是一杯浓郁的、现煮的意式浓缩咖啡",
    "The optimal pairing for this light and airy macaron is a robust, freshly brewed espresso.",
    [
      [0, 8, "主语", "/ði/ /ˈɒptɪməl/ /ˈpɛərɪŋ/ /fɔːr/ /ðɪs/ /laɪt/ /ænd/ /ˈɛəri/ /ˌmɑːkəˈrɒn/", "对于这款轻盈通透的马卡龙的最佳搭配"],
      [9, 9, "系动词", "/ɪz/", "是"],
      [10, 15, "表语", "/ə/ /roʊˈbʌst/, /ˈfrɛʃli/ /bruːd/ /ɛˈsprɛsoʊ/", "一杯浓郁的、现煮的意式浓缩咖啡"]
    ],
    [["甜品搭配", "optimal pairing (最佳搭配)；airy (轻盈通风的/蓬松的)；macaron (马卡龙)；robust (浓郁的)；freshly brewed espresso (现煮的浓缩咖啡)。"]]
  ],
  [
    "我们在羊角面包里填满了手工制作的杏仁酱，并撒上了一层细腻的糖粉作为点缀",
    "We generously stuffed the croissants with artisanal almond paste and sprinkled a delicate layer of powdered sugar for garnish.",
    [
      [0, 0, "主语", "/wiː/", "我们"],
      [1, 2, "状语+谓语1", "/ˈdʒɛnərəsli/ /stʌft/", "慷慨地(大量地)填塞了"],
      [3, 4, "宾语1", "/ðə/ /krwɑːˈsɑːnts/", "羊角面包"],
      [5, 8, "状语1", "/wɪθ/ /ɑːrˈtɪzənəl/ /ˈɑːmənd/ /peɪst/", "用手工制作的杏仁酱"],
      [9, 10, "并列连词+谓语2", "/ænd/ /ˈsprɪŋkəld/", "并且撒上了"],
      [11, 16, "宾语2", "/ə/ /ˈdɛlɪkət/ /ˈleɪər/ /ɒv/ /ˈpaʊdərd/ /ˈʃʊgər/", "一层细腻的糖粉"],
      [17, 18, "目的状语", "/fɔːr/ /ˈgɑːrnɪʃ/", "为了装饰/点缀"]
    ],
    [["烘焙工艺", "stuff (填塞)；croissant (羊角面包/可颂)；artisanal (手工制作的，工匠的)；sprinkle (撒)；powdered sugar (糖粉)；garnish (点缀/装饰)。"]]
  ],
  [
    "为了平衡浓郁的甜味，大厨在这款颓废的芝士蛋糕里加入了少许酸爽的百香果泥",
    "To counterbalance the intense sweetness, the chef incorporated a dash of tart passionfruit puree into the decadent cheesecake.",
    [
      [0, 4, "目的状语", "/tuː/ /ˌkaʊntərˈbæləns/ /ði/ /ɪnˈtɛns/ /ˈswiːtnəs/", "为了平衡浓烈的甜味"],
      [5, 6, "主句主语", "/ðə/ /ʃɛf/", "大厨"],
      [7, 7, "主句谓语", "/ɪnˈkɔːrpəˌreɪtɪd/", "融合了/加入了"],
      [8, 14, "主句宾语", "/ə/ /dæʃ/ /ɒv/ /tɑːrt/ /ˈpæʃənfruːt/ /pjʊˈreɪ/", "少量的酸爽的百香果果泥"],
      [15, 18, "状语(介词)", "/ˈɪntuː/ /ðə/ /ˈdɛkədənt/ /ˈtʃiːzˌkeɪk/", "进入这款极其奢华/颓废的芝士蛋糕中"]
    ],
    [["口味平衡", "counterbalance (平衡，抵消)；a dash of (少许)；tart (酸爽的)；puree (果泥)；decadent (在美食中指‘极其奢华/浓郁以至颓废的’)。"]]
  ],
  [
    "由于对植物性替代品的需求不断激增，这家精品咖啡店现在专门提供纯素糕点",
    "Driven by the soaring demand for plant-based alternatives, the boutique café now specializes exclusively in vegan pastries.",
    [
      [0, 8, "原因状语(过去分词)", "/ˈdrɪvən/ /baɪ/ /ðə/ /ˈsɔːrɪŋ/ /dɪˈmænd/ /fɔːr/ /ˈplænt-beɪst/ /ɔːlˈtɜːrnətɪvz/", "被对植物性替代品不断飙升的需求所驱动"],
      [9, 11, "主句主语", "/ðə/ /buːˈtiːk/ /kæˈfeɪ/", "这家精品咖啡馆"],
      [12, 14, "状语+谓语", "/naʊ/ /ˈspɛʃəˌlaɪzɪz/ /ɪkˈskluːsɪvli/", "现在专一地专门从事于"],
      [15, 17, "宾语(介词)", "/ɪn/ /ˈviːgən/ /ˈpeɪstriz/", "纯素食糕点"]
    ],
    [["现代餐饮趋势", "driven by (被...驱动)；soaring demand (飙升的需求)；plant-based (植物性的)；boutique café (精品咖啡店)；specialize exclusively in (专门/独家提供)。"]]
  ],
  [
    "制作正宗的舒芙蕾需要对烤箱温度进行细致的控制以及完美的折叠技术",
    "Crafting an authentic soufflé demands meticulous control over oven temperature and flawless folding techniques.",
    [
      [0, 3, "主语(动名词短语)", "/ˈkræftɪŋ/ /æn/ /ɔːˈθɛntɪk/ /suːˈfleɪ/", "制作一个正宗的舒芙蕾"],
      [4, 4, "谓语", "/dɪˈmændz/", "要求"],
      [5, 9, "宾语1", "/mɪˈtɪkjʊləs/ /kənˈtroʊl/ /ˈoʊvər/ /ˈʌvən/ /ˈtɛmprətʃər/", "对于烤箱温度的极其细致的控制"],
      [10, 13, "宾语2(并列)", "/ænd/ /ˈflɔːləs/ /ˈfoʊldɪŋ/ /tɛkˈniːks/", "以及完美无瑕的折叠技术"]
    ],
    [["法式甜点难点", "authentic soufflé (正宗的舒芙蕾)；meticulous control (极其细致的控制)；folding techniques (折叠搅拌技术，烘焙常用词)。"]]
  ],
  [
    "这家冷饮店引以为傲的是提供不含任何人工香料或防腐剂的手工冰淇淋",
    "The gelateria prides itself on serving artisanal gelato devoid of any artificial flavorings or preservatives.",
    [
      [0, 1, "主语", "/ðə/ /ˌdʒɛləˈtɛriə/", "这家意式冰淇淋店"],
      [2, 4, "谓语+宾语(固定用法)", "/praɪdz/ /ɪtˈsɛlf/ /ɒn/", "在...上以自己为傲(pride oneself on)"],
      [5, 7, "介词宾语", "/ˈsɜːrvɪŋ/ /ɑːrˈtɪzənəl/ /dʒɛˈlɑːtoʊ/", "提供手工制作的意式冰淇淋"],
      [8, 14, "后置定语(形容词短语)", "/dɪˈvɔɪd/ /ɒv/ /ˈɛni/ /ˌɑːrtɪˈfɪʃəl/ /ˈfleɪvərɪŋz/ /ɔːr/ /prɪˈzɜːrvətɪvz/", "缺乏(没有任何)人工香料或防腐剂的"]
    ],
    [["冰品与配料", "gelateria (意式冰淇淋店)；gelato (意式冰淇淋)；devoid of (缺乏...的，没有...的)；artificial flavorings (人工香精)。"]]
  ],
  [
    "一杯顶级的抹茶拿铁应该在苦涩的泥土气息和天鹅绒般的微甜之间取得完美的平衡",
    "A premium matcha latte should strike a perfect balance between its earthy bitterness and velvety sweetness.",
    [
      [0, 3, "主语", "/ə/ /ˈpriːmiəm/ /ˈmɑːtʃə/ /ˈlɑːteɪ/", "一杯顶级的抹茶拿铁"],
      [4, 8, "谓语+宾语(固定搭配)", "/ʃʊd/ /straɪk/ /ə/ /ˈpɜːrfɪkt/ /ˈbæləns/", "应该达成(敲击出)一种完美的平衡"],
      [9, 16, "状语(介词)", "/bɪˈtwiːn/ /ɪts/ /ˈɜːrθi/ /ˈbɪtərnəs/ /ænd/ /ˈvɛlvɪti/ /ˈswiːtnəs/", "在它泥土般的苦涩和天鹅绒般的甜美之间"]
    ],
    [["饮品品鉴", "premium (顶级的，优质的)；matcha latte (抹茶拿铁)；strike a balance (取得平衡)；earthy (泥土气息的)；velvety (天鹅绒般的，口感丝滑的)。"]]
  ],
  [
    "令人陶醉的刚出炉糕点的香气经常吸引着毫不怀疑的路人走进这家舒适的法式蛋糕店",
    "The intoxicating aroma of freshly baked pastries frequently lures unsuspecting passersby into the cozy patisserie.",
    [
      [0, 6, "主语", "/ði/ /ɪnˈtɒksɪˌkeɪtɪŋ/ /əˈroʊmə/ /ɒv/ /ˈfrɛʃli/ /beɪkt/ /ˈpeɪstriz/", "刚出炉糕点的令人陶醉的香气"],
      [7, 8, "状语+谓语", "/ˈfriːkwəntli/ /lʊərz/", "频繁地引诱/吸引着"],
      [9, 10, "宾语", "/ˌʌnsəˈspɛktɪŋ/ /ˈpæsərzˌbaɪ/", "毫不怀疑的(毫无防备的)路人们"],
      [11, 14, "方向状语", "/ˈɪntuː/ /ðə/ /ˈkoʊzi/ /pəˈtiːsəri/", "进入这家舒适的法式蛋糕店"]
    ],
    [["感官诱惑", "intoxicating aroma (令人陶醉的香气)；lure (引诱)；unsuspecting (未加怀疑的，没有防备的)；patisserie (法式蛋糕店/糕点铺)。"]]
  ],
  [
    "这位被提名的咖啡师因其在冲煮单品手冲咖啡时细致入微的萃取过程而备受赞誉",
    "The nominated barista was highly commended for his meticulous extraction process when brewing single-origin pour-over coffee.",
    [
      [0, 2, "主语", "/ðə/ /ˈnɒmɪˌneɪtɪd/ /bəˈriːstə/", "这位被提名的咖啡师"],
      [3, 5, "谓语(被动)", "/wɒz/ /ˈhaɪli/ /kəˈmɛndɪd/", "被高度地赞誉了"],
      [6, 10, "原因状语", "/fɔːr/ /hɪz/ /mɪˈtɪkjʊləs/ /ɪkˈstrækʃən/ /ˈprɒsɛs/", "因为他极其细致的萃取过程"],
      [11, 16, "时间状语(省略主谓)", "/wɛn/ /ˈbruːɪŋ/ /ˈsɪŋgəl-ˈɒrɪdʒɪn/ /pɔːr-ˈoʊvər/ /ˈkɒfi/", "当冲煮单品手冲咖啡时"]
    ],
    [["精品咖啡", "barista (咖啡师)；commend (赞誉，表扬)；extraction process (萃取过程)；single-origin (单品/单一产地)；pour-over (手冲)。"]]
  ]
];

const ball = [
  [
    "这位中场球员由于在对方半场内犯下了鲁莽的铲球动作而被直接出示红牌罚下",
    "The midfielder was shown a straight red card for committing a reckless tackle inside the opponent's half.",
    [
      [0, 1, "主语", "/ðə/ /ˈmɪdfiːldər/", "这位中场球员"],
      [2, 7, "谓语(被动)+保留宾语", "/wɒz/ /ʃoʊn/ /ə/ /streɪt/ /rɛd/ /kɑːrd/", "被(裁判)出示了一张直接的红牌"],
      [8, 12, "原因状语", "/fɔːr/ /kəˈmɪtɪŋ/ /ə/ /ˈrɛkləs/ /ˈtækəl/", "因为犯下了一次鲁莽的铲球"],
      [13, 16, "地点状语", "/ɪnˈsaɪd/ /ði/ /əˈpoʊnənts/ /hæf/", "在对手的半场内"]
    ],
    [["足球术语", "midfielder (中场球员)；straight red card (直接红牌)；commit a tackle (做出铲球动作)；reckless (鲁莽的)；opponent's half (对方半场)。"]]
  ],
  [
    "随着比赛进入令人神经紧绷的加时赛，球队的防线开始显露出疲态",
    "As the match proceeded into nerve-wracking extra time, the team's defensive line began to show signs of fatigue.",
    [
      [0, 7, "时间状语从句", "/æz/ /ðə/ /mætʃ/ /prəˈsiːdɪd/ /ˈɪntuː/ /ˈnɜːrvˌrækɪŋ/ /ˈɛkstrə/ /taɪm/", "随着比赛进入令人神经紧绷的加时赛"],
      [8, 12, "主句主语", "/ðə/ /tiːmz/ /dɪˈfɛnsɪv/ /laɪn/", "球队的防线"],
      [13, 18, "主句谓语+宾语", "/bɪˈgæn/ /tuː/ /ʃoʊ/ /saɪnz/ /ɒv/ /fəˈtiːg/", "开始展现出疲惫的迹象"]
    ],
    [["比赛高潮", "proceed into (进入)；nerve-wracking (令人神经紧绷的/极度紧张的)；extra time (加时赛)；defensive line (防线)；fatigue (疲劳)。"]]
  ],
  [
    "这位控球后卫完美无瑕的球场视野使他能够毫不费力地撕开最坚固的区域防守",
    "The point guard's impeccable court vision allowed him to effortlessly dismantle even the most formidable zone defenses.",
    [
      [0, 4, "主语", "/ðə/ /pɔɪnt/ /gɑːrdz/ /ɪmˈpɛkəbəl/ /kɔːrt/ /ˈvɪʒən/", "这位控球后卫完美无瑕的球场视野"],
      [5, 5, "谓语", "/əˈlaʊd/", "允许(使得)"],
      [6, 6, "宾语", "/hɪm/", "他"],
      [7, 16, "宾语补足语", "/tuː/ /ˈɛfərtləsli/ /dɪsˈmæntəl/ /ˈiːvən/ /ðə/ /moʊst/ /ˈfɔːrmɪdəbəl/ /zoʊn/ /dɪˈfɛnsɪz/", "去毫不费力地拆解/撕开甚至是最强大的区域防守"]
    ],
    [["篮球战术", "point guard (控球后卫，PG)；impeccable (无可挑剔的)；court vision (球场视野)；dismantle (拆解/撕开)；formidable (强大的)；zone defense (联防/区域防守)。"]]
  ],
  [
    "教练出人意料地决定替换掉明星前锋，此举遭到了主场球迷的强烈抗议",
    "The coach's unforeseen decision to substitute the star striker was met with fierce protests from the home crowd.",
    [
      [0, 7, "主语(含不定式作后置定语)", "/ðə/ /ˈkoʊtʃɪz/ /ˌʌnfɔːrˈsiːn/ /dɪˈsɪʒən/ /tuː/ /ˈsʌbstɪˌtuːt/ /ðə/ /stɑːr/ /ˈstraɪkər/", "教练去替换明星前锋的不可预见的决定"],
      [8, 10, "谓语(被动固定搭配)", "/wɒz/ /mɛt/ /wɪθ/", "遭遇了(被...迎接)"],
      [11, 12, "宾语", "/fɪərs/ /ˈproʊtɛsts/", "激烈的抗议"],
      [13, 16, "来源状语", "/frɒm/ /ðə/ /hoʊm/ /kraʊd/", "从主场观众(球迷)处"]
    ],
    [["赛场换人", "unforeseen decision (不可预见的/出人意料的决定)；substitute (替换/换下)；star striker (明星前锋)；home crowd (主场观众)。"]]
  ],
  [
    "这位网球神童在底线展现了非凡的敏捷性，轻松地回击了每一次极具威力的发球",
    "The tennis prodigy demonstrated extraordinary agility at the baseline, effortlessly returning every overpowering serve.",
    [
      [0, 2, "主语", "/ðə/ /ˈtɛnɪs/ /ˈprɒdɪdʒi/", "这位网球神童"],
      [3, 3, "谓语", "/ˈdɛmənˌstreɪtɪd/", "展现了"],
      [4, 5, "宾语", "/ɪkˈstrɔːrdɪnɛri/ /əˈdʒɪlɪti/", "非凡的敏捷性"],
      [6, 8, "地点状语", "/æt/ /ðə/ /ˈbeɪsˌlaɪn/", "在底线处"],
      [9, 13, "伴随状语(现在分词)", "/ˈɛfərtləsli/ /rɪˈtɜːrnɪŋ/ /ˈɛvəri/ /ˌoʊvərˈpaʊərɪŋ/ /sɜːrv/", "毫不费力地回击每一次极具压倒性力量的发球"]
    ],
    [["网球动作", "tennis prodigy (网球神童)；baseline (底线)；return a serve (接发球/回球)；overpowering (压倒性的，极具威力的)。"]]
  ],
  [
    "利用先进的空气动力学原理，这款新设计的高尔夫球大大减少了飞行中的阻力",
    "Utilizing advanced aerodynamic principles, the newly designed golf ball substantially reduces drag during flight.",
    [
      [0, 3, "方式/原因状语(分词)", "/ˈjuːtɪˌlaɪzɪŋ/ /ədˈvænst/ /ˌɛroʊdaɪˈnæmɪk/ /ˈprɪnsəpəlz/", "利用先进的空气动力学原理"],
      [4, 8, "主语", "/ðə/ /ˈnuːli/ /dɪˈzaɪnd/ /gɒlf/ /bɔːl/", "这个新设计的高尔夫球"],
      [9, 10, "状语+谓语", "/səbˈstænʃəli/ /rɪˈdjuːsɪz/", "实质性地(大大地)减少了"],
      [11, 11, "宾语", "/dræg/", "阻力"],
      [12, 13, "时间状语", "/ˈdjʊərɪŋ/ /flaɪt/", "在飞行期间"]
    ],
    [["运动器械科技", "utilize (利用)；aerodynamic principles (空气动力学原理)；substantially (大幅度地)；drag (作为物理学术语意为：空气/流体阻力)。"]]
  ],
  [
    "一场针对裁判偏见的激烈争议给整场原本精彩的锦标赛蒙上了一层阴影",
    "A fierce controversy regarding referee bias cast a dark shadow over the entirety of an otherwise spectacular tournament.",
    [
      [0, 5, "主语(含介词后置定语)", "/ə/ /fɪərs/ /ˈkɒntrəˌvɜːrsi/ /rɪˈgɑːrdɪŋ/ /ˌrɛfəˈriː/ /ˈbaɪəs/", "一场关于裁判偏见的激烈争议"],
      [6, 6, "谓语", "/kæst/", "投射(蒙上)"],
      [7, 9, "宾语", "/ə/ /dɑːrk/ /ˈʃædoʊ/", "一层黑暗的阴影"],
      [10, 16, "地点/范围状语", "/ˈoʊvər/ /ði/ /ɪnˈtaɪərti/ /ɒv/ /æn/ /ˈʌðərˌwaɪz/ /spɛkˈtækjʊlər/ /ˈtʊərnəmənt/", "在整个一场本来(如果不发生这事的话)极精彩的锦标赛之上"]
    ],
    [["赛场风波", "controversy (争议)；referee bias (裁判偏见/黑哨)；cast a shadow over (给...蒙上阴影)；otherwise (在其他方面/本来)。"]]
  ],
  [
    "这位排球扣球手令人难以置信的垂直起跳能力使她能持续突破对方高大的拦网",
    "The volleyball spiker's unbelievable vertical leap enables her to consistently pierce through the opponents' towering blocks.",
    [
      [0, 5, "主语", "/ðə/ /ˈvɒliˌbɔːl/ /ˈspaɪkərz/ /ʌnbɪˈliːvəbəl/ /ˈvɜːrtɪkəl/ /liːp/", "这位排球扣球手令人难以置信的垂直起跳(能力)"],
      [6, 6, "谓语", "/ɛˈneɪbəlz/", "使(她)能够"],
      [7, 7, "宾语", "/hɜːr/", "她"],
      [8, 15, "宾语补足语", "/tuː/ /kənˈsɪstəntli/ /pɪərs/ /θruː/ /ði/ /əˈpoʊnənts/ /ˈtaʊərɪŋ/ /blɒks/", "去持续地刺穿(突破)对手如塔般高耸的拦网"]
    ],
    [["排球术语", "spiker (扣球手)；vertical leap (垂直起跳高度/弹跳力)；pierce through (刺穿/突破)；towering block (高大的拦网)。"]]
  ],
  [
    "通过实施高压逼抢战术，客队迫使对手在危险区域犯下了一系列致命失误",
    "By implementing a high-pressing tactic, the visiting team forced a series of fatal turnovers in dangerous areas.",
    [
      [0, 4, "方式状语", "/baɪ/ /ˈɪmplɪmɛntɪŋ/ /ə/ /haɪ-ˈprɛsɪŋ/ /ˈtæktɪk/", "通过实施一种高压逼抢的战术"],
      [5, 7, "主语", "/ðə/ /ˈvɪzɪtɪŋ/ /tiːm/", "客队(来访的队伍)"],
      [8, 8, "谓语", "/fɔːrst/", "迫使(犯下)"],
      [9, 13, "宾语", "/ə/ /ˈsɪəriz/ /ɒv/ /ˈfeɪtəl/ /ˈtɜːrnoʊvərz/", "一系列致命的球权丧失(失误)"],
      [14, 16, "地点状语", "/ɪn/ /ˈdeɪndʒərəs/ /ˈɛəriəz/", "在危险区域里"]
    ],
    [["足球/篮球战术", "high-pressing tactic (高压逼抢战术)；visiting team (客队，主队是 home team)；fatal turnover (致命的失误/球权转换)。"]]
  ],
  [
    "对于任何渴望达到顶级职业水平的棒球投手来说，掌握不同球路是绝对必备的条件",
    "Mastering a diverse repertoire of pitches is an absolute prerequisite for any baseball pitcher aspiring to reach the elite professional level.",
    [
      [0, 5, "主语(动名词短语)", "/ˈmæstərɪŋ/ /ə/ /daɪˈvɜːrs/ /ˈrɛpərtwɑːr/ /ɒv/ /ˈpɪtʃɪz/", "掌握一个多样化的投球曲目(不同球路)"],
      [6, 6, "系动词", "/ɪz/", "是"],
      [7, 10, "表语", "/æn/ /ˈæbsəˌluːt/ /priˈrɛkwɪzɪt/", "一个绝对的先决条件"],
      [11, 20, "范围状语(含分词作后置定语)", "/fɔːr/ /ˈɛni/ /ˈbeɪsbɔːl/ /ˈpɪtʃər/ /əˈspaɪərɪŋ/ /tuː/ /riːtʃ/ /ði/ /ɪˈliːt/ /prəˈfɛʃənəl/ /ˈlɛvəl/", "对于任何渴望达到精英职业水平的棒球投手来说"]
    ],
    [["棒球运动", "repertoire of pitches (投球的种类/球路，repertoire指全部曲目/技能)；prerequisite (先决条件/必备条件)；pitcher (投手)；aspire to (渴望/立志)。"]]
  ]
];

build('scenarios_data_ext_dessert_20.js', 'dessert_01', 'des', 11, dessert);
build('scenarios_data_ext_ball_20.js', 'sports_02', 'spr', 11, ball);
