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

const art = [
  [
    "这位前卫艺术家的挑衅性展览对传统的审美标准提出了挑战",
    "The avant-garde artist's provocative exhibition challenged conventional aesthetic standards.",
    [
      [0, 3, "主语", "/ði/ /ˌævɑːnt-ˈgɑːrd/ /ˈɑːrtɪsts/ /prəˈvɒkətɪv/ /ˌɛksɪˈbɪʃən/", "这位前卫艺术家的挑衅性展览"],
      [4, 4, "谓语", "/ˈtʃælɪndʒd/", "挑战了"],
      [5, 7, "宾语", "/kənˈvɛnʃənəl/ /ɛsˈθɛtɪk/ /ˈstændərdz/", "传统的审美标准"]
    ],
    [["艺术评论", "avant-garde (前卫的)；provocative (挑衅的，引发思考的)；aesthetic (审美的)。"]]
  ],
  [
    "文艺复兴时期的绘画常常融合了复杂的象征主义来传达深刻的神学意义",
    "Renaissance paintings frequently incorporated intricate symbolism to convey profound theological meanings.",
    [
      [0, 1, "主语", "/ˈrɛnəsɑːns/ /ˈpeɪntɪŋz/", "文艺复兴时期的绘画"],
      [2, 3, "状语+谓语", "/ˈfriːkwəntli/ /ɪnˈkɔːrpəˌreɪtɪd/", "频繁地融合了"],
      [4, 5, "宾语", "/ˈɪntrɪkət/ /ˈsɪmbəˌlɪzəm/", "复杂的象征主义"],
      [6, 10, "目的状语", "/tuː/ /kənˈveɪ/ /prəˈfaʊnd/ /ˌθiːəˈlɒdʒɪkəl/ /ˈmiːnɪŋz/", "为了传达深刻的神学意义"]
    ],
    [["艺术史", "Renaissance (文艺复兴)；incorporate (融合)；symbolism (象征主义)；theological (神学的)。"]]
  ],
  [
    "对这部古典芭蕾舞剧的现代重新诠释吸引了年轻一代的观众",
    "The contemporary reinterpretation of the classical ballet captivated a younger demographic of audiences.",
    [
      [0, 2, "主语", "/ðə/ /kənˈtɛmpəˌrɛri/ /ˌriːɪnˌtɜːrprɪˈteɪʃən/", "现代的重新诠释"],
      [3, 6, "后置定语", "/ɒv/ /ðə/ /ˈklæsɪkəl/ /bæˈleɪ/", "关于这部古典芭蕾舞剧的"],
      [7, 7, "谓语", "/ˈkæptɪˌveɪtɪd/", "迷住了/吸引了"],
      [8, 12, "宾语", "/ə/ /ˈjʌŋər/ /ˌdɛməˈgræfɪk/ /ɒv/ /ˈɔːdiənsɪz/", "更年轻的一代观众群体"]
    ],
    [["表演艺术", "reinterpretation (重新诠释)；ballet (芭蕾舞)；captivate (迷住)；demographic (人群/受众特征)。"]]
  ],
  [
    "这座宏伟的哥特式大教堂是中世纪无与伦比的建筑独创性的遗迹",
    "The magnificent Gothic cathedral stands as a testament to the unparalleled architectural ingenuity of the Middle Ages.",
    [
      [0, 3, "主语", "/ðə/ /mægˈnɪfɪsənt/ /ˈgɒθɪk/ /kəˈθiːdrəl/", "这座宏伟的哥特式大教堂"],
      [4, 4, "谓语", "/stændz/", "屹立着(作为)"],
      [5, 17, "表语/宾语", "/æz/ /ə/ /ˈtɛstəmənt/ /tuː/ /ði/ /ʌnˈpærəˌlɛld/ /ˌɑːrkɪˈtɛktʃərəl/ /ˌɪndʒəˈnuːɪti/ /ɒv/ /ðə/ /ˈmɪdəl/ /ˈeɪdʒɪz/", "作为对中世纪无与伦比的建筑独创性的一个证明"]
    ],
    [["建筑艺术", "cathedral (大教堂)；testament (证明/遗迹)；ingenuity (独创性/巧妙)。"]]
  ],
  [
    "通过采用非传统的材料，这位雕塑家突破了三维艺术的界限",
    "By employing unconventional materials, the sculptor pushed the boundaries of three-dimensional art.",
    [
      [0, 3, "方式状语", "/baɪ/ /ɪmˈplɔɪɪŋ/ /ˌʌnkənˈvɛnʃənəl/ /məˈtɪəriəlz/", "通过采用非传统的材料"],
      [4, 5, "主语", "/ðə/ /ˈskʌlptər/", "这位雕塑家"],
      [6, 6, "谓语", "/pʊʃt/", "推动了/突破了"],
      [7, 12, "宾语", "/ðə/ /ˈbaʊndəriz/ /ɒv/ /θriː-dɪˈmɛnʃənəl/ /ɑːrt/", "三维艺术的界限"]
    ],
    [["当代艺术", "unconventional (非传统的)；sculptor (雕塑家)；push the boundaries (突破界限)。"]]
  ],
  [
    "这幅抽象画上色彩的不断交织唤起了一种深刻的忧郁感",
    "The relentless interplay of colors in this abstract painting evokes a profound sense of melancholy.",
    [
      [0, 4, "主语", "/ðə/ /rɪˈlɛntləs/ /ˈɪntərˌpleɪ/ /ɒv/ /ˈkʌlərz/", "色彩的不断交织"],
      [5, 8, "地点定语", "/ɪn/ /ðɪs/ /ˈæbstrækt/ /ˈpeɪntɪŋ/", "在这幅抽象画中"],
      [9, 9, "谓语", "/ɪˈvoʊks/", "唤起"],
      [10, 14, "宾语", "/ə/ /prəˈfaʊnd/ /sɛns/ /ɒv/ /ˈmɛlənˌkɒli/", "一种深刻的忧郁感"]
    ],
    [["色彩与情感", "interplay (相互作用/交织)；abstract painting (抽象画)；evoke (唤起)；melancholy (忧郁)。"]]
  ],
  [
    "政府大幅削减了对艺术和人文学科的资助，引发了广泛的抗议",
    "The government drastically slashed funding for the arts and humanities, sparking widespread protests.",
    [
      [0, 1, "主语", "/ðə/ /ˈgʌvərnmənt/", "政府"],
      [2, 3, "状语+谓语", "/ˈdræstɪkli/ /slæʃt/", "大幅削减了"],
      [4, 9, "宾语", "/ˈfʌndɪŋ/ /fɔːr/ /ði/ /ɑːrts/ /ænd/ /hjuˈmænɪtiz/", "对艺术和人文学科的资助"],
      [10, 12, "结果状语(分词)", "/ˈspɑːrkɪŋ/ /ˈwaɪdsprɛd/ /ˈproʊtɛsts/", "引发了广泛的抗议"]
    ],
    [["文化政策", "slash funding (大幅削减资金)；the arts and humanities (艺术与人文)；spark protests (引发抗议)。"]]
  ],
  [
    "土著口述传统的保护对于维持文化遗产的完整性至关重要",
    "The preservation of indigenous oral traditions is paramount for maintaining the integrity of cultural heritage.",
    [
      [0, 5, "主语", "/ðə/ /ˌprɛzərˈveɪʃən/ /ɒv/ /ɪnˈdɪdʒənəs/ /ˈɔːrəl/ /trəˈdɪʃənz/", "土著口述传统的保护"],
      [6, 7, "系表结构", "/ɪz/ /ˈpærəˌmaʊnt/", "是至高无上的/极其重要的"],
      [8, 14, "目的/原因状语", "/fɔːr/ /meɪnˈteɪnɪŋ/ /ði/ /ɪnˈtɛgrɪti/ /ɒv/ /ˈkʌltʃərəl/ /ˈhɛrɪtɪdʒ/", "为了维持文化遗产的完整性"]
    ],
    [["文化遗产", "indigenous (本土的，土著的)；paramount (至高无上的，最重要的)；integrity (完整性)；cultural heritage (文化遗产)。"]]
  ],
  [
    "这位剧作家的最新杰作是对现代消费主义进行的一场讽刺性批判",
    "The playwright's latest masterpiece is a satirical critique of modern consumerism.",
    [
      [0, 3, "主语", "/ðə/ /ˈpleɪˌraɪts/ /ˈleɪtɪst/ /ˈmæstərˌpiːs/", "这位剧作家的最新杰作"],
      [4, 4, "系动词", "/ɪz/", "是"],
      [5, 10, "表语", "/ə/ /səˈtɪrɪkəl/ /krɪˈtiːk/ /ɒv/ /ˈmɒdərn/ /kənˈsuːməˌrɪzəm/", "一场对现代消费主义的讽刺性批判"]
    ],
    [["戏剧与文学", "playwright (剧作家)；masterpiece (杰作)；satirical critique (讽刺性批判)；consumerism (消费主义)。"]]
  ],
  [
    "博物馆策划了一个沉浸式的展览，带领参观者穿越古代文明",
    "The museum curated an immersive exhibition that transports visitors through ancient civilizations.",
    [
      [0, 1, "主句主语", "/ðə/ /mjuˈziːəm/", "博物馆"],
      [2, 2, "主句谓语", "/ˈkjʊərɪtɪd/", "策划了"],
      [3, 5, "主句宾语", "/æn/ /ɪˈmɜːrsɪv/ /ˌɛksɪˈbɪʃən/", "一场沉浸式的展览"],
      [6, 11, "定语从句", "/ðæt/ /trænsˈpɔːrts/ /ˈvɪzɪtərz/ /θruː/ /ˈeɪnʃənt/ /ˌsɪvɪləˈzeɪʃənz/", "它带领(传送)参观者穿越古代文明"]
    ],
    [["展览策划", "curate (策划，尤指展览)；immersive exhibition (沉浸式展览)；transport (传送，带领)；ancient civilizations (古代文明)。"]]
  ],
  [
    "掌握复杂的和声进行是学习古典音乐理论的基石",
    "Mastering complex harmonic progressions is the cornerstone of studying classical music theory.",
    [
      [0, 3, "主语(动名词)", "/ˈmæstərɪŋ/ /ˈkɒmplɛks/ /hɑːrˈmɒnɪk/ /prəˈgrɛʃənz/", "掌握复杂的和声进行"],
      [4, 4, "系动词", "/ɪz/", "是"],
      [5, 11, "表语", "/ðə/ /ˈkɔːrnərˌstoʊn/ /ɒv/ /ˈstʌdiɪŋ/ /ˈklæsɪkəl/ /ˈmjuːzɪk/ /ˈθɪəri/", "学习古典音乐理论的基石"]
    ],
    [["音乐理论", "harmonic progressions (和声进行)；cornerstone (基石)；classical music theory (古典音乐理论)。"]]
  ],
  [
    "这位电影制作人对光影的大量使用增强了电影沉闷的氛围",
    "The filmmaker's heavy use of chiaroscuro heightens the somber atmosphere of the movie.",
    [
      [0, 5, "主语", "/ðə/ /ˈfɪlmˌmeɪkərz/ /ˈhɛvi/ /juːs/ /ɒv/ /ˌkiːɑːroʊˈskʊroʊ/", "这位电影制作人对明暗对比(光影)的大量使用"],
      [6, 6, "谓语", "/ˈhaɪtənz/", "增强了，加深了"],
      [7, 12, "宾语", "/ðə/ /ˈsɒmbər/ /ˈætməsˌfɪər/ /ɒv/ /ðə/ /ˈmuːvi/", "这部电影沉闷的氛围"]
    ],
    [["电影美学", "chiaroscuro (明暗对比法/光影运用，来自意大利语)；heighten (增强)；somber (沉闷的，阴郁的)。"]]
  ],
  [
    "交响乐团极其精准且充满情感地完美演绎了这部复杂的乐章",
    "The symphony orchestra executed the intricate movement flawlessly, with absolute precision and profound emotion.",
    [
      [0, 2, "主语", "/ðə/ /ˈsɪmfəni/ /ˈɔːrkɪstrə/", "交响乐团"],
      [3, 3, "谓语", "/ˈɛksɪˌkjuːtɪd/", "执行了/演奏了"],
      [4, 6, "宾语", "/ði/ /ˈɪntrɪkət/ /ˈmuːvmənt/", "这部复杂的乐章"],
      [7, 7, "方式状语", "/ˈflɔːləsli/", "完美无瑕地"],
      [8, 14, "伴随状语", "/wɪθ/ /ˈæbsəˌluːt/ /prɪˈsɪʒən/ /ænd/ /prəˈfaʊnd/ /ɪˈmoʊʃən/", "伴随着绝对的精准和深刻的情感"]
    ],
    [["音乐演奏", "symphony orchestra (交响乐团)；execute (演奏/执行)；intricate movement (复杂的乐章，movement在此指交响乐的乐章)；precision (精准)。"]]
  ],
  [
    "文学翻译绝不仅是字面的转换，它更是一门捕捉文化细微差别的艺术",
    "Literary translation is far more than literal conversion; it is an art of capturing cultural nuances.",
    [
      [0, 1, "分句1主语", "/ˈlɪtəˌrɛri/ /trænsˈleɪʃən/", "文学翻译"],
      [2, 3, "分句1系表", "/ɪz/ /fɑːr/ /mɔːr/", "是远不止于的"],
      [4, 7, "比较对象", "/ðæn/ /ˈlɪtərəl/ /kənˈvɜːrʒən/", "比字面转换(更多)"],
      [8, 8, "分句2主语", "/ɪt/", "它"],
      [9, 11, "分句2系表", "/ɪz/ /æn/ /ɑːrt/", "是一门艺术"],
      [12, 15, "定语", "/ɒv/ /ˈkæptʃərɪŋ/ /ˈkʌltʃərəl/ /ˈnuːɑːnsɪz/", "关于捕捉文化细微差别的"]
    ],
    [["翻译与文学", "literal conversion (字面转换)；capturing cultural nuances (捕捉文化细微差别)；nuance (细微差别)。"]]
  ],
  [
    "这幅罕见的壁画刚刚被修复，就立即被公认为国宝",
    "Scarcely had the rare fresco been restored when it was immediately recognized as a national treasure.",
    [
      [0, 5, "倒装主句", "/ˈskɛərsli/ /hæd/ /ðə/ /rɛər/ /ˈfrɛskoʊ/ /biːn/ /rɪˈstɔːrd/", "这幅罕见的壁画刚刚被修复"],
      [6, 6, "连词", "/wɛn/", "当...(立刻)"],
      [7, 7, "从句主语", "/ɪt/", "它"],
      [8, 11, "从句谓语(被动)", "/wɒz/ /ɪˈmiːdiətli/ /ˈrɛkəgˌnaɪzd/", "立即被公认"],
      [12, 15, "从句宾补/表语", "/æz/ /ə/ /ˈnæʃənəl/ /ˈtrɛʒər/", "作为一个国宝"]
    ],
    [["历史文物", "scarcely... when... (一...就...，倒装句型)；fresco (壁画)；restore (修复)；national treasure (国宝)。"]]
  ],
  [
    "当代诗歌经常打破传统的叙事结构，采用更加碎片化和意识流的方法",
    "Contemporary poetry frequently fragments traditional narrative structures, adopting a more disjointed and stream-of-consciousness approach.",
    [
      [0, 1, "主语", "/kənˈtɛmpəˌrɛri/ /ˈpoʊɪtri/", "当代诗歌"],
      [2, 3, "状语+谓语", "/ˈfriːkwəntli/ /ˈfrægmənts/", "频繁地碎片化/打破"],
      [4, 6, "宾语", "/trəˈdɪʃənəl/ /ˈnærətɪv/ /ˈstrʌktʃərz/", "传统的叙事结构"],
      [7, 14, "伴随状语(分词)", "/əˈdɒptɪŋ/ /ə/ /mɔːr/ /dɪsˈdʒɔɪntɪd/ /ænd/ /ˈstriːm-ɒv-ˈkɒnʃəsnəs/ /əˈproʊtʃ/", "采用一种更加脱节和意识流的方法"]
    ],
    [["文学评论", "fragment (作为动词：使碎片化/打破)；narrative structure (叙事结构)；stream-of-consciousness (意识流)。"]]
  ],
  [
    "这位备受赞誉的建筑师将可续持发展的理念天衣无缝地融入了这座引人注目的现代博物馆的设计中",
    "The acclaimed architect seamlessly integrated sustainable concepts into the design of this striking modern museum.",
    [
      [0, 2, "主语", "/ði/ /əˈkleɪmd/ /ˈɑːrkɪˌtɛkt/", "这位备受赞誉的建筑师"],
      [3, 4, "状语+谓语", "/ˈsiːmləsli/ /ˈɪntɪˌgreɪtɪd/", "天衣无缝地融入了"],
      [5, 6, "宾语", "/səˈsteɪnəbəl/ /ˈkɒnsɛpts/", "可持续的理念"],
      [7, 14, "方向/范围状语", "/ˈɪntuː/ /ðə/ /dɪˈzaɪn/ /ɒv/ /ðɪs/ /ˈstraɪkɪŋ/ /ˈmɒdərn/ /mjuˈziːəm/", "融入这座引人注目的现代博物馆的设计中"]
    ],
    [["建筑与环境", "acclaimed (备受赞誉的)；seamlessly integrate (无缝融合)；sustainable concepts (可持续理念)；striking (引人注目的)。"]]
  ],
  [
    "在这部黑色喜剧中，幽默被用作一种强有力的机制来揭露社会的虚伪",
    "In this dark comedy, humor is utilized as a potent mechanism to expose societal hypocrisy.",
    [
      [0, 3, "地点/范围状语", "/ɪn/ /ðɪs/ /dɑːrk/ /ˈkɒmɪdi/", "在这部黑色喜剧中"],
      [4, 4, "主语", "/ˈhjuːmər/", "幽默"],
      [5, 6, "谓语(被动)", "/ɪz/ /ˈjuːtɪˌlaɪzd/", "被利用"],
      [7, 10, "方式/身份状语", "/æz/ /ə/ /ˈpoʊtənt/ /ˈmɛkəˌnɪzəm/", "作为一种强有力的机制"],
      [11, 14, "目的状语", "/tuː/ /ɪkˈspoʊz/ /səˈsaɪətəl/ /hɪˈpɒkrəsi/", "为了揭露社会的虚伪"]
    ],
    [["文学与电影", "dark comedy (黑色喜剧)；potent mechanism (强有力的机制)；expose hypocrisy (揭露虚伪)。"]]
  ],
  [
    "这位指挥家要求弦乐部分极其细致地控制颤音，以产生一种空灵的音色",
    "The conductor demanded meticulous control over vibrato from the string section to produce an ethereal tone.",
    [
      [0, 1, "主语", "/ðə/ /kənˈdʌktər/", "指挥家"],
      [2, 2, "谓语", "/dɪˈmændɪd/", "要求"],
      [3, 6, "宾语", "/mɪˈtɪkjʊləs/ /kənˈtroʊl/ /ˈoʊvər/ /vɪˈbrɑːtoʊ/", "对于颤音的极其细致的控制"],
      [7, 10, "来源/对象状语", "/frɒm/ /ðə/ /strɪŋ/ /ˈsɛkʃən/", "从弦乐声部处"],
      [11, 15, "目的状语", "/tuː/ /prəˈduːs/ /æn/ /ɪˈθɪəriəl/ /toʊn/", "为了产生一种空灵的音色"]
    ],
    [["古典音乐实践", "conductor (指挥)；meticulous (极其细致的)；vibrato (颤音)；string section (弦乐部)；ethereal tone (空灵的音色)。"]]
  ],
  [
    "这些民间传说的口口相传确保了这门语言尽管受到压制，却依然得以幸存",
    "The oral transmission of these folktales ensured the survival of the language despite severe suppression.",
    [
      [0, 5, "主语", "/ði/ /ˈɔːrəl/ /trænsˈmɪʃən/ /ɒv/ /ðiːz/ /ˈfoʊkˌteɪlz/", "这些民间传说的口头传播"],
      [6, 6, "谓语", "/ɪnˈʃʊərd/", "确保了"],
      [7, 11, "宾语", "/ðə/ /sərˈvaɪvəl/ /ɒv/ /ðə/ /ˈlæŋgwɪdʒ/", "这门语言的幸存"],
      [12, 14, "让步状语", "/dɪˈspaɪt/ /sɪˈvɪər/ /səˈprɛʃən/", "尽管(面临着)严厉的压制"]
    ],
    [["语言与传承", "oral transmission (口头传播/口口相传)；folktale (民间传说)；suppression (压制，镇压)。"]]
  ],
  [
    "对这幅名画的肆意破坏引发了关于艺术品保护的安全性协议的激烈辩论",
    "The vandalism of the masterpiece provoked an intense debate regarding security protocols for art conservation.",
    [
      [0, 4, "主语", "/ðə/ /ˈvændəˌlɪzəm/ /ɒv/ /ðə/ /ˈmæstərˌpiːs/", "对于这幅杰作的破坏"],
      [5, 5, "谓语", "/prəˈvoʊkt/", "激起了"],
      [6, 8, "宾语", "/æn/ /ɪnˈtɛns/ /dɪˈbeɪt/", "一场激烈的辩论"],
      [9, 14, "关于...的后置定语", "/rɪˈgɑːrdɪŋ/ /sɪˈkjʊərɪti/ /ˈproʊtəˌkɒlz/ /fɔːr/ /ɑːrt/ /ˌkɒnsərˈveɪʃən/", "关于艺术品保护的安全协议的"]
    ],
    [["艺术品保护", "vandalism (故意破坏文物/公物)；provoke debate (激起辩论)；security protocols (安全协议)；art conservation (艺术品保护)。"]]
  ],
  [
    "这位小说的作者运用不可靠的叙述者来模糊了客观事实与主观认知之间的界限",
    "The novel's author employs an unreliable narrator to blur the boundaries between objective truth and subjective perception.",
    [
      [0, 2, "主语", "/ðə/ /ˈnɒvəlz/ /ˈɔːθər/", "这部小说的作者"],
      [3, 3, "谓语", "/ɪmˈplɔɪz/", "雇佣，运用"],
      [4, 6, "宾语", "/æn/ /ˌʌnrɪˈlaɪəbəl/ /ˈnærətər/", "一个不可靠的叙述者"],
      [7, 16, "目的状语", "/tuː/ /blɜːr/ /ðə/ /ˈbaʊndəriz/ /bɪˈtwiːn/ /əbˈdʒɛktɪv/ /truːθ/ /ænd/ /səbˈdʒɛktɪv/ /pərˈsɛpʃən/", "为了模糊客观事实与主观认知之间的界限"]
    ],
    [["文学批评", "employ (在此意为‘运用’)；unreliable narrator (不可靠叙述者，文学术语)；blur the boundaries (模糊界限)；subjective perception (主观认知)。"]]
  ],
  [
    "在极简主义设计中，留白空间并非空洞，而是一种用来突出核心元素的积极力量",
    "In minimalist design, negative space is not a void, but rather an active force used to accentuate core elements.",
    [
      [0, 2, "地点/领域状语", "/ɪn/ /mɪˈnɪməlɪst/ /dɪˈzaɪn/", "在极简主义设计中"],
      [3, 4, "主句主语", "/ˈnɛgətɪv/ /speɪs/", "负空间(留白)"],
      [5, 5, "主句系动词1", "/ɪz/", "是"],
      [6, 8, "主句表语1", "/nɒt/ /ə/ /vɔɪd/", "不是一个空洞"],
      [9, 13, "主句表语2(转折)", "/bʌt/ /ˈræðər/ /æn/ /ˈæktɪv/ /fɔːrs/", "而更是一种积极的力量"],
      [14, 18, "后置定语", "/juːzd/ /tuː/ /ækˈsɛntʃuˌeɪt/ /kɔːr/ /ˈɛlɪmənts/", "被用来突出核心元素的"]
    ],
    [["设计美学", "minimalist design (极简主义设计)；negative space (负空间，即留白)；void (空洞)；accentuate (强调，突出)。"]]
  ],
  [
    "文化挪用经常发生在该群体的传统象征被剥离了其神圣含义时",
    "Cultural appropriation often occurs when a marginalized group's traditional symbols are stripped of their sacred meanings.",
    [
      [0, 1, "主句主语", "/ˈkʌltʃərəl/ /əˌproʊpriˈeɪʃən/", "文化挪用"],
      [2, 3, "主句状语+谓语", "/ˈɔːfən/ /əˈkɜːrz/", "经常发生"],
      [4, 15, "时间状语从句", "/wɛn/ /ə/ /ˈmɑːrdʒɪnəˌlaɪzd/ /gruːps/ /trəˈdɪʃənəl/ /ˈsɪmbəlz/ /ɑːr/ /strɪpt/ /ɒv/ /ðɛər/ /ˈseɪkrɪd/ /ˈmiːnɪŋz/", "当一个被边缘化的群体的传统象征被剥夺了它们神圣的含义时"]
    ],
    [["社会学/文化研究", "cultural appropriation (文化挪用)；marginalized group (边缘化群体)；be stripped of (被剥夺)；sacred meanings (神圣的含义)。"]]
  ],
  [
    "这种后现代舞蹈编排彻底摆脱了经典芭蕾那种僵化的规范",
    "The postmodern choreography completely breaks away from the rigid conventions of classical ballet.",
    [
      [0, 2, "主语", "/ðə/ /poʊstˈmɒdərn/ /ˌkɔːriˈɒgrəfi/", "这种后现代的编舞"],
      [3, 5, "状语+谓语(动词短语)", "/kəmˈpliːtli/ /breɪks/ /əˈweɪ/ /frɒm/", "彻底摆脱了"],
      [6, 11, "宾语", "/ðə/ /ˈrɪdʒɪd/ /kənˈvɛnʃənz/ /ɒv/ /ˈklæsɪkəl/ /bæˈleɪ/", "古典芭蕾的僵硬规范"]
    ],
    [["舞蹈与表演", "postmodern choreography (后现代编舞)；break away from (摆脱)；rigid conventions (僵硬的传统/规范)。"]]
  ],
  [
    "博物馆致力于获取和保护稀有手稿以供未来的后代研究",
    "The museum is dedicated to acquiring and preserving rare manuscripts for the study of future generations.",
    [
      [0, 1, "主语", "/ðə/ /mjuˈziːəm/", "博物馆"],
      [2, 4, "谓语", "/ɪz/ /ˈdɛdɪˌkeɪtɪd/ /tuː/", "致力于(to为介词)"],
      [5, 9, "介词宾语", "/əˈkwaɪərɪŋ/ /ænd/ /prɪˈzɜːrvɪŋ/ /rɛər/ /ˈmænjʊˌskrɪpts/", "获取和保护稀有的手稿"],
      [10, 16, "目的状语", "/fɔːr/ /ðə/ /ˈstʌdi/ /ɒv/ /ˈfjuːtʃər/ /ˌdʒɛnəˈreɪʃənz/", "为了未来世代的研究"]
    ],
    [["文物与档案", "be dedicated to doing (致力于做)；acquire (获取)；manuscript (手稿)；future generations (后代)。"]]
  ],
  [
    "即兴爵士乐表演严重依赖于乐手们之间的自发互动和彼此倾听",
    "Improvisational jazz performances rely heavily on spontaneous interaction and deep listening among the musicians.",
    [
      [0, 2, "主语", "/ɪmˌprɒvɪˈzeɪʃənəl/ /dʒæz/ /pərˈfɔːrmənsɪz/", "即兴的爵士乐表演"],
      [3, 5, "状语+谓语(动词短语)", "/rɪˈlaɪ/ /ˈhɛvɪli/ /ɒn/", "严重依赖于"],
      [6, 11, "宾语", "/spɒnˈteɪniəs/ /ˌɪntərˈækʃən/ /ænd/ /diːp/ /ˈlɪsənɪŋ/", "自发的互动以及深度的倾听"],
      [12, 14, "范围状语", "/əˈmʌŋ/ /ðə/ /mjuˈzɪʃənz/", "在乐手们之间"]
    ],
    [["音乐流派", "improvisational (即兴的)；spontaneous interaction (自发的互动)；deep listening (深层倾听)。"]]
  ],
  [
    "这位电影摄影师巧妙地运用了长镜头来建立场景中无情的悬念",
    "The cinematographer masterfully employed long takes to establish a sense of relentless suspense in the scene.",
    [
      [0, 1, "主语", "/ðə/ /ˌsɪnəməˈtɒgrəfər/", "电影摄影师"],
      [2, 3, "状语+谓语", "/ˈmæstərfəli/ /ɪmˈplɔɪd/", "巧妙地/大师般地运用了"],
      [4, 5, "宾语", "/lɒŋ/ /teɪks/", "长镜头"],
      [6, 14, "目的状语", "/tuː/ /ɪˈstæblɪʃ/ /ə/ /sɛns/ /ɒv/ /rɪˈlɛntləs/ /səˈspɛns/ /ɪn/ /ðə/ /siːn/", "为了在场景中建立一种无情的悬念感"]
    ],
    [["电影拍摄技术", "cinematographer (电影摄影师)；long take (长镜头)；relentless suspense (无情的/持续不断的悬念)。"]]
  ],
  [
    "将多媒体元素融入到传统话剧里遭到了纯粹主义者的强烈抵制",
    "The integration of multimedia elements into traditional drama was met with fierce resistance from purists.",
    [
      [0, 6, "主语", "/ði/ /ˌɪntɪˈgreɪʃən/ /ɒv/ /ˌmʌltiˈmiːdiə/ /ˈɛlɪmənts/ /ˈɪntuː/ /trəˈdɪʃənəl/ /ˈdrɑːmə/", "多媒体元素向传统戏剧中的融合"],
      [7, 9, "谓语(被动固定搭配)", "/wɒz/ /mɛt/ /wɪθ/", "遭遇到(被...迎接)"],
      [10, 11, "宾语", "/fɪərs/ /rɪˈzɪstəns/", "激烈的抵抗"],
      [12, 13, "来源状语", "/frɒm/ /ˈpjʊərɪsts/", "从纯粹主义者那里"]
    ],
    [["戏剧与批评", "integration (融合)；traditional drama (传统话剧)；be met with resistance (遭到抵制)；purist (纯粹主义者)。"]]
  ],
  [
    "这部开创性的纪录片通过追踪一件被盗文物的历程，揭露了跨国艺术品走私集团的运作",
    "The groundbreaking documentary exposed the operations of a transnational art smuggling syndicate by tracing the journey of a stolen artifact.",
    [
      [0, 2, "主语", "/ðə/ /ˈgraʊndˌbreɪkɪŋ/ /ˌdɒkjʊˈmɛntəri/", "这部开创性的纪录片"],
      [3, 3, "谓语", "/ɪkˈspoʊzd/", "揭露了"],
      [4, 11, "宾语", "/ði/ /ˌɒpəˈreɪʃənz/ /ɒv/ /ə/ /trænsˈnæʃənəl/ /ɑːrt/ /ˈsmʌglɪŋ/ /ˈsɪndɪkət/", "一个跨国艺术品走私集团的运作"],
      [12, 19, "方式状语", "/baɪ/ /ˈtreɪsɪŋ/ /ðə/ /ˈdʒɜːrni/ /ɒv/ /ə/ /ˈstoʊlən/ /ˈɑːrtɪˌfækt/", "通过追踪一件被盗文物的旅程"]
    ],
    [["艺术与犯罪", "groundbreaking (开创性的)；documentary (纪录片)；transnational (跨国的)；smuggling syndicate (走私集团)；stolen artifact (被盗文物)。"]]
  ]
];

const travel = [
  [
    "前往偏远山区的长途跋涉需要非凡的体力和充分的准备",
    "The arduous trek to the remote mountainous region requires extraordinary physical stamina and adequate preparation.",
    [
      [0, 7, "主语", "/ði/ /ˈɑːrdʒuəs/ /trɛk/ /tuː/ /ðə/ /rɪˈmoʊt/ /ˈmaʊntɪnəs/ /ˈriːdʒən/", "前往偏远山区的艰难跋涉"],
      [8, 8, "谓语", "/rɪˈkwaɪərz/", "需要"],
      [9, 14, "宾语", "/ɪkˈstrɔːrdɪnɛri/ /ˈfɪzɪkəl/ /ˈstæmɪnə/ /ænd/ /ˈædɪkwət/ /ˌprɛpəˈreɪʃən/", "非凡的体力以及充足的准备"]
    ],
    [["户外探险", "arduous trek (艰难的长途跋涉)；remote mountainous region (偏远山区)；physical stamina (体力，耐力)。"]]
  ],
  [
    "生态旅游提倡对环境负责的旅行方式，以保护脆弱的生态系统并支持当地社区",
    "Ecotourism promotes environmentally responsible travel to preserve fragile ecosystems and support local communities.",
    [
      [0, 0, "主语", "/ˌiːkoʊˈtʊərɪzəm/", "生态旅游"],
      [1, 1, "谓语", "/prəˈmoʊts/", "提倡"],
      [2, 4, "宾语", "/ɪnˌvaɪrənˈmɛntəli/ /rɪˈspɒnsəbəl/ /ˈtrævəl/", "对环境负责任的旅行"],
      [5, 12, "目的状语(并列)", "/tuː/ /prɪˈzɜːrv/ /ˈfrædʒəl/ /ˈiːkoʊˌsɪstəmz/ /ænd/ /səˈpɔːrt/ /ˈloʊkəl/ /kəˈmjuːnɪtiz/", "去保护脆弱的生态系统并支持当地社区"]
    ],
    [["可持续旅游", "ecotourism (生态旅游)；environmentally responsible (对环境负责的)；fragile ecosystems (脆弱的生态系统)。"]]
  ],
  [
    "这个风景如画的沿海村庄依然未受大众旅游商业化的污染",
    "This picturesque coastal village remains untainted by the commercialization of mass tourism.",
    [
      [0, 3, "主语", "/ðɪs/ /ˌpɪktʃəˈrɛsk/ /ˈkoʊstəl/ /ˈvɪlɪdʒ/", "这个风景如画的沿海村庄"],
      [4, 4, "系动词", "/rɪˈmeɪnz/", "仍然保持着"],
      [5, 11, "表语/被动语态", "/ʌnˈteɪntɪd/ /baɪ/ /ðə/ /kəˌmɜːrʃəlaɪˈzeɪʃən/ /ɒv/ /mæs/ /ˈtʊərɪzəm/", "未被大众旅游的商业化所污染的"]
    ],
    [["隐秘目的地", "picturesque (风景如画的)；untainted (未受污染的，未被破坏的)；commercialization (商业化)；mass tourism (大众旅游)。"]]
  ],
  [
    "由于难以预测的天气状况，所有飞往群岛的航班都被无限期地停飞了",
    "Due to unpredictable weather conditions, all flights to the archipelago have been indefinitely grounded.",
    [
      [0, 4, "原因状语", "/djuː/ /tuː/ /ˌʌnprɪˈdɪktəbəl/ /ˈwɛðər/ /kənˈdɪʃənz/", "由于不可预测的天气状况"],
      [5, 9, "主语", "/ɔːl/ /flaɪts/ /tuː/ /ði/ /ˌɑːrkɪˈpɛləgoʊ/", "所有飞往该群岛的航班"],
      [10, 13, "状语+谓语(现完被动)", "/hæv/ /biːn/ /ɪnˈdɛfɪnɪtli/ /ˈgraʊndɪd/", "已经被无限期地停飞了"]
    ],
    [["航空与天气", "archipelago (群岛)；indefinitely (无限期地)；grounded (被禁飞的，停飞的)。"]]
  ],
  [
    "沉浸在异国文化中可以极大地拓宽一个人的世界观并培养跨文化同理心",
    "Immersing oneself in an exotic culture can profoundly broaden one's worldview and foster cross-cultural empathy.",
    [
      [0, 5, "主语(动名词)", "/ɪˈmɜːrsɪŋ/ /wʌnˈsɛlf/ /ɪn/ /æn/ /ɪgˈzɒtɪk/ /ˈkʌltʃər/", "使自己沉浸在一种异国文化中"],
      [6, 14, "状语+并列谓语+宾语", "/kæn/ /prəˈfaʊndli/ /ˈbrɔːdən/ /wʌnz/ /ˈwɜːrldˌvjuː/ /ænd/ /ˈfɒstər/ /krɒs-ˈkʌltʃərəl/ /ˈɛmpəθi/", "能深刻地拓宽一个人的世界观并培养跨文化的同理心"]
    ],
    [["旅行意义", "immerse oneself in (沉浸于)；exotic (异国情调的)；profoundly broaden (极大地拓宽)；cross-cultural empathy (跨文化同理心)。"]]
  ],
  [
    "在旺季，著名的历史古迹经常遭受严重的过度拥挤",
    "During the peak season, renowned historical monuments frequently suffer from severe overcrowding.",
    [
      [0, 3, "时间状语", "/ˈdjʊərɪŋ/ /ðə/ /piːk/ /ˈsiːzən/", "在旺季期间"],
      [4, 6, "主语", "/rɪˈnaʊnd/ /hɪˈstɒrɪkəl/ /ˈmɒnjʊmənts/", "著名的历史纪念碑(古迹)"],
      [7, 9, "状语+谓语", "/ˈfriːkwəntli/ /ˈsʌfər/ /frɒm/", "频繁地遭受...之苦"],
      [10, 11, "宾语", "/sɪˈvɪər/ /ˌoʊvərˈkraʊdɪŋ/", "严重的过度拥挤"]
    ],
    [["旅游负面影响", "peak season (旺季，淡季是 off-peak season)；historical monuments (历史古迹)；overcrowding (过度拥挤)。"]]
  ],
  [
    "精明的旅行者利用积分奖励计划以换取头等舱航班和豪华酒店住宿",
    "Astute travelers leverage loyalty reward programs to redeem first-class flights and luxury hotel accommodations.",
    [
      [0, 1, "主语", "/əˈstuːt/ /ˈtrævələrz/", "精明的旅行者们"],
      [2, 2, "谓语", "/ˈlɛvərɪdʒ/", "利用/撬动"],
      [3, 5, "宾语", "/ˈlɔɪəlti/ /rɪˈwɔːrd/ /ˈproʊgræmz/", "忠诚度奖励计划(常客积分计划)"],
      [6, 13, "目的状语", "/tuː/ /rɪˈdiːm/ /fɜːrst-klæs/ /flaɪts/ /ænd/ /ˈlʌgʒəri/ /hoʊˈtɛl/ /əˌkɒməˈdeɪʃənz/", "为了兑换头等舱航班和豪华酒店住宿"]
    ],
    [["常旅客玩法", "astute (精明的)；leverage (作为动词：利用)；redeem (兑换，如用积分换机票)；accommodations (住宿)。"]]
  ],
  [
    "这趟邮轮探险提供了一条环绕极地冰川的专属路线，且配有专业的博物学家向导",
    "The cruise expedition offers an exclusive itinerary circumventing the polar glaciers, accompanied by expert naturalist guides.",
    [
      [0, 2, "主语", "/ðə/ /kruːz/ /ˌɛkspɪˈdɪʃən/", "这趟邮轮探险"],
      [3, 3, "谓语", "/ˈɒfərz/", "提供"],
      [4, 9, "宾语(含分词后置定语)", "/æn/ /ɪkˈskluːsɪv/ /aɪˈtɪnərɛri/ /ˌsɜːrkəmˈvɛntɪŋ/ /ðə/ /ˈpoʊlər/ /ˈgleɪʃərz/", "一条环绕极地冰川的专属行程"],
      [10, 15, "伴随状语(被动分词)", "/əˈkʌmpənid/ /baɪ/ /ˈɛkspɜːrt/ /ˈnætʃərəlist/ /gaɪdz/", "由专家级的博物学家向导陪伴着"]
    ],
    [["极地探险", "expedition (探险/远征)；exclusive itinerary (专属行程)；circumvent (环绕/绕行)；naturalist guide (自然/博物学家向导)。"]]
  ],
  [
    "复杂的签证申请流程成为了自发跨国旅行的重大障碍",
    "The convoluted visa application process acts as a significant deterrent to spontaneous transnational travel.",
    [
      [0, 4, "主语", "/ðə/ /ˈkɒnvəˌluːtɪd/ /ˈviːzə/ /ˌæplɪˈkeɪʃən/ /ˈprɒsɛs/", "复杂的签证申请流程"],
      [5, 6, "谓语(固定搭配)", "/ækts/ /æz/", "作为...起作用(充当)"],
      [7, 13, "宾语/表语", "/ə/ /sɪgˈnɪfɪkənt/ /dɪˈtɜːrənt/ /tuː/ /spɒnˈteɪniəs/ /trænsˈnæʃənəl/ /ˈtrævəl/", "一个对于自发跨国旅行的重大威慑/障碍"]
    ],
    [["出境手续", "convoluted (极其复杂难懂的)；deterrent (威慑物，阻碍)；spontaneous (自发的，说走就走的)；transnational (跨国的)。"]]
  ],
  [
    "漫步在迷宫般的鹅卵石街道上揭示了这座中世纪古城隐藏的魅力",
    "Navigating the labyrinthine cobblestone streets unveils the hidden charms of this medieval city.",
    [
      [0, 4, "主语(动名词短语)", "/ˈnævɪˌgeɪtɪŋ/ /ðə/ /ˌlæbəˈrɪnθɪn/ /ˈkɒbəlˌstoʊn/ /striːts/", "导航/漫步穿过迷宫般的鹅卵石街道"],
      [5, 5, "谓语", "/ʌnˈveɪlz/", "揭示了，揭开了"],
      [6, 11, "宾语", "/ðə/ /ˈhɪdən/ /tʃɑːrmz/ /ɒv/ /ðɪs/ /ˌmɪdiˈiːvəl/ /ˈsɪti/", "这座中世纪古城的隐藏魅力"]
    ],
    [["古城探索", "navigate (穿梭，导航)；labyrinthine (迷宫般的)；cobblestone (鹅卵石)；unveil (揭示)。"]]
  ],
  [
    "旅行保险在遭遇航班取消或医疗紧急情况时能提供不可或缺的财务保护",
    "Travel insurance provides indispensable financial protection in the event of flight cancellations or medical emergencies.",
    [
      [0, 1, "主语", "/ˈtrævəl/ /ɪnˈʃʊərəns/", "旅行保险"],
      [2, 2, "谓语", "/prəˈvaɪdz/", "提供"],
      [3, 5, "宾语", "/ˌɪndɪˈspɛnsəbəl/ /faɪˈnænʃəl/ /prəˈtɛkʃən/", "不可或缺的财务保护"],
      [6, 14, "条件/时间状语", "/ɪn/ /ði/ /ɪˈvɛnt/ /ɒv/ /flaɪt/ /ˌkænsəˈleɪʃənz/ /ɔːr/ /ˈmɛdɪkəl/ /ɪˈmɜːrdʒənsiz/", "在面临航班取消或医疗紧急情况的事件中"]
    ],
    [["旅行安全保障", "indispensable (不可或缺的)；in the event of (在...的情况下/万一发生)；medical emergencies (医疗紧急情况)。"]]
  ],
  [
    "原住民热烈地欢迎游客，分享他们那些代代相传的根深蒂固的传统",
    "The indigenous population warmly welcomed tourists, sharing their deeply rooted traditions passed down through generations.",
    [
      [0, 2, "主句主语", "/ði/ /ɪnˈdɪdʒənəs/ /ˌpɒpjʊˈleɪʃən/", "土著人口(原住民)"],
      [3, 4, "主句状语+谓语", "/ˈwɔːrmli/ /ˈwɛlkəmd/", "热烈地欢迎了"],
      [5, 5, "主句宾语", "/ˈtʊərɪsts/", "游客们"],
      [6, 14, "伴随状语(现在分词)", "/ˈʃɛərɪŋ/ /ðɛər/ /ˈdiːpli/ /ˈruːtɪd/ /trəˈdɪʃənz/ /pæst/ /daʊn/ /θruː/ /ˌdʒɛnəˈreɪʃənz/", "分享着他们通过世世代代传递下来的根深蒂固的传统"]
    ],
    [["文化交流", "indigenous population (原住民)；deeply rooted (根深蒂固的)；pass down (传承/传下)；through generations (代代相传)。"]]
  ],
  [
    "严重的时差反应在长途跨大西洋飞行后通常会扰乱旅行者的昼夜节律",
    "Severe jet lag frequently disrupts travelers' circadian rhythms following long-haul transatlantic flights.",
    [
      [0, 2, "主语", "/sɪˈvɪər/ /dʒɛt/ /læg/", "严重的飞行时差反应"],
      [3, 4, "状语+谓语", "/ˈfriːkwəntli/ /dɪsˈrʌpts/", "频繁地扰乱"],
      [5, 7, "宾语", "/ˈtrævələrz/ /sɜːrˈkeɪdiən/ /ˈrɪðəmz/", "旅行者们的昼夜节律(生物钟)"],
      [8, 11, "时间状语", "/fɒloʊɪŋ/ /lɒŋ-hɔːl/ /ˌtrænzətˈlæntɪk/ /flaɪts/", "在长途的跨大西洋航班之后"]
    ],
    [["飞行疲劳", "jet lag (时差反应)；disrupt (扰乱)；circadian rhythm (昼夜节律/生物钟)；long-haul (长途的)；transatlantic (跨大西洋的)。"]]
  ],
  [
    "这位探险家记录了未开发的荒野地带，捕捉到了令人惊叹的全景式风景图像",
    "The explorer documented the uncharted wilderness territories, capturing breathtaking images of panoramic landscapes.",
    [
      [0, 1, "主句主语", "/ðə/ /ɪkˈsplɔːrər/", "这位探险家"],
      [2, 2, "主句谓语", "/ˈdɒkjʊˌmɛntɪd/", "记录了"],
      [3, 6, "主句宾语", "/ði/ /ʌnˈtʃɑːrtɪd/ /ˈwɪldərnəs/ /ˈtɛrɪˌtɔːriz/", "那些未被标注在地图上的荒野领地"],
      [7, 13, "伴随状语(现在分词)", "/ˈkæptʃərɪŋ/ /ˈbrɛθˌteɪkɪŋ/ /ˈɪmɪdʒɪz/ /ɒv/ /ˌpænəˈræmɪk/ /ˈlændskeɪps/", "捕捉到了关于全景式风景的令人惊叹的图像"]
    ],
    [["野外探险", "uncharted (未在地图上标明的/未知的)；wilderness territories (荒野地带)；breathtaking (令人叹为观止的)；panoramic (全景的)。"]]
  ],
  [
    "随着数字游民的兴起，长期租房和联合办公空间在热门目的地正经历前所未有的激增",
    "With the rise of digital nomads, long-term rentals and coworking spaces are experiencing an unprecedented surge in popular destinations.",
    [
      [0, 5, "伴随状语", "/wɪθ/ /ðə/ /raɪz/ /ɒv/ /ˈdɪdʒɪtəl/ /ˈnoʊmædz/", "随着数字游民的兴起"],
      [6, 11, "主句主语", "/lɒŋ-tɜːrm/ /ˈrɛntəlz/ /ænd/ /ˌkoʊˈwɜːrkɪŋ/ /ˈspeɪsɪz/", "长期租赁和共享办公空间"],
      [12, 13, "主句谓语(现进)", "/ɑːr/ /ɪkˈspɪəriənsɪŋ/", "正在经历"],
      [14, 16, "主句宾语", "/æn/ /ʌnˈprɛsɪˌdɛntɪd/ /sɜːrdʒ/", "一次史无前例的激增"],
      [17, 19, "地点状语", "/ɪn/ /ˈpɒpjʊlər/ /ˌdɛstɪˈneɪʃənz/", "在热门目的地中"]
    ],
    [["新旅行方式", "digital nomad (数字游民)；long-term rental (长租)；coworking space (联合/共享办公空间)；unprecedented surge (前所未有的激增)。"]]
  ],
  [
    "游览这些古老的遗址能让人深刻地一瞥这个已经衰落了数百年的繁荣帝国的过去",
    "Touring the ancient ruins offers a profound glimpse into a once-thriving empire that declined centuries ago.",
    [
      [0, 3, "主语(动名词)", "/ˈtʊərɪŋ/ /ði/ /ˈeɪnʃənt/ /ˈruːɪnz/", "游览这些古老的遗迹"],
      [4, 4, "谓语", "/ˈɒfərz/", "提供"],
      [5, 11, "宾语", "/ə/ /prəˈfaʊnd/ /glɪmps/ /ˈɪntuː/ /ə/ /wʌns-ˈθraɪvɪŋ/ /ˈɛmpaɪər/", "深入地一瞥一个曾经繁荣的帝国"],
      [12, 16, "定语从句", "/ðæt/ /dɪˈklaɪnd/ /ˈsɛntʃəriz/ /əˈgoʊ/", "那个几个世纪前就衰落了的(帝国)"]
    ],
    [["历史遗迹游览", "ancient ruins (古老遗迹/废墟)；profound glimpse into (深入一瞥/洞察)；once-thriving (曾经繁荣的)；decline (衰落)。"]]
  ],
  [
    "为了缓解旅游业造成的环境退化，当局对每日访客数量实施了严格的配额限制",
    "To mitigate environmental degradation caused by tourism, authorities imposed strict quotas on daily visitor numbers.",
    [
      [0, 6, "目的状语", "/tuː/ /ˈmɪtɪˌgeɪt/ /ɪnˌvaɪrənˈmɛntəl/ /ˌdɛgrəˈdeɪʃən/ /kɔːzd/ /baɪ/ /ˈtʊərɪzəm/", "为了缓解由旅游业引起的环境退化"],
      [7, 7, "主句主语", "/əˈθɔːrɪtiz/", "当局"],
      [8, 8, "主句谓语", "/ɪmˈpoʊzd/", "施加了/强制实行了"],
      [9, 14, "主句宾语", "/strɪkt/ /ˈkwoʊtəz/ /ɒn/ /ˈdeɪli/ /ˈvɪzɪtər/ /ˈnʌmbərz/", "在每日访客数量上的严格配额"]
    ],
    [["旅游政策", "mitigate (缓解，减轻)；environmental degradation (环境恶化/退化)；impose strict quotas on (对...实施严格配额)。"]]
  ],
  [
    "在异国他乡，驾驭一种语言障碍需要极其敏锐的观察力和非语言交流技巧",
    "Navigating a language barrier in a foreign land demands acute observation and non-verbal communication skills.",
    [
      [0, 3, "主语(动名词短语)", "/ˈnævɪˌgeɪtɪŋ/ /ə/ /ˈlæŋgwɪdʒ/ /ˈbæriər/", "驾驭/应对一种语言障碍"],
      [4, 7, "地点状语(紧跟主语)", "/ɪn/ /ə/ /ˈfɒrɪn/ /lænd/", "在一个异国的土地上"],
      [8, 8, "谓语", "/dɪˈmændz/", "要求，需要"],
      [9, 14, "宾语(并列)", "/əˈkjuːt/ /ˌɒbzərˈveɪʃən/ /ænd/ /nɒn-ˈvɜːrbəl/ /kəˌmjuːnɪˈkeɪʃən/ /skɪlz/", "敏锐的观察力和非语言的交流技巧"]
    ],
    [["跨国交流挑战", "language barrier (语言障碍)；acute observation (敏锐的观察)；non-verbal communication (非语言交流/肢体语言)。"]]
  ],
  [
    "旅行社精心策划了一个完全定制化的探险，迎合了喜欢肾上腺素飙升活动的刺激寻求者",
    "The travel agency meticulously curated a fully customized expedition catering to thrill-seekers who crave adrenaline-pumping activities.",
    [
      [0, 2, "主语", "/ðə/ /ˈtrævəl/ /ˈeɪdʒənsi/", "这家旅行社"],
      [3, 4, "状语+谓语", "/mɪˈtɪkjʊləsli/ /ˈkjʊərɪtɪd/", "极其细致地策划了"],
      [5, 9, "宾语", "/ə/ /ˈfʊli/ /ˈkʌstəˌmaɪzd/ /ˌɛkspɪˈdɪʃən/", "一场完全定制化的探险"],
      [10, 16, "后置定语(现在分词含定语从句)", "/ˈkeɪtərɪŋ/ /tuː/ /ˈθrɪlˌsiːkərz/ /huː/ /kreɪv/ /əˈdrɛnəlɪn-ˌpʌmpɪŋ/ /ækˈtɪvɪtiz/", "迎合那些渴望肾上腺素飙升活动的刺激寻求者的"]
    ],
    [["高端定制游", "meticulously curate (精心策划)；customized expedition (定制探险)；cater to (迎合)；thrill-seeker (寻求刺激者)；adrenaline-pumping (肾上腺素飙升的)。"]]
  ],
  [
    "偏离常规路线让背包客们能够发现不仅消费便宜而且文化底蕴极其深厚的隐秘瑰宝",
    "Venture off the beaten path enables backpackers to discover hidden gems that are both inexpensive and incredibly culturally enriching.",
    [
      [0, 4, "主语(不定式/短语作主语)", "/ˈvɛntʃər/ /ɒf/ /ðə/ /ˈbiːtən/ /pæθ/", "偏离被踩出来的路(不走寻常路)"],
      [5, 5, "谓语", "/ɛˈneɪbəlz/", "使...能够"],
      [6, 6, "宾语", "/ˈbækˌpækərz/", "背包客们"],
      [7, 19, "宾语补足语", "/tuː/ /dɪˈskʌvər/ /ˈhɪdən/ /dʒɛmz/ /ðæt/ /ɑːr/ /boʊθ/ /ˌɪnɪkˈspɛnsɪv/ /ænd/ /ɪnˈkrɛdəbli/ /ˈkʌltʃərəli/ /ɪnˈrɪtʃɪŋ/", "去发现那些既不昂贵又在文化上令人极其充实的隐秘瑰宝(含定语从句)"]
    ],
    [["背包客文化", "off the beaten path (不走寻常路，避开热门景点)；hidden gems (隐藏的瑰宝/宝藏景点)；culturally enriching (丰富文化底蕴的)。"]]
  ]
];

build('scenarios_data_ext_art_20.js', 'art_01', 'art', 11, art);
build('scenarios_data_ext_travel_20.js', 'travel_01', 'trv', 11, travel);
