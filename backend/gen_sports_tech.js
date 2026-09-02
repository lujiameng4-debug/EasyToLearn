import fs from 'fs';

function build(filename, moduleKey, prefix, data) {
  const sentences = data.map((d, i) => {
    const enWords = d[1].split(' ');
    const words = enWords.map(w => {
      const match = w.match(/^([a-zA-Z0-9'-]+)(.*)$/);
      return { word: match ? match[1] : w, punctuation: match ? match[2] : "" };
    });
    const components = d[2].map(c => {
      const comp = { start: c[0], end: c[1], label: c[2], phonetic: c[3], translation: c[4] };
      if (c[5]) {
        comp.subComponents = c[5].map(sc => ({ start: sc[0], end: sc[1], label: sc[2] }));
      }
      return comp;
    });
    const analysis = d[3].map(a => ({ type: a[0], text: a[1] }));
    return {
      id: `${prefix}_s${11 + i}`,
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

const sports = [
  [
    "这位职业运动员经历了严格的训练，以增强他的心血管耐力",
    "The professional athlete underwent rigorous training to enhance his cardiovascular endurance.",
    [
      [0, 2, "主语", "/ðə/ /prəˈfɛʃənəl/ /ˈæθliːt/", "这位职业运动员"],
      [3, 3, "谓语", "/ˌʌndərˈwɛnt/", "经历了"],
      [4, 5, "宾语", "/ˈrɪgərəs/ /ˈtreɪnɪŋ/", "严格的训练"],
      [6, 10, "目的状语", "/tuː/ /ɪnˈhæns/ /hɪz/ /ˌkɑːrdioʊˈvæskjʊlər/ /ɪnˈdʊrəns/", "为了增强他的心血管耐力"]
    ],
    [["体育/健康词汇", "undergo rigorous training (经历严格训练)；cardiovascular endurance (心血管耐力/心肺耐力)。"]]
  ],
  [
    "频繁的肌肉拉伤是长跑运动员中普遍存在的职业危害",
    "Frequent muscle strains are a prevalent occupational hazard among long-distance runners.",
    [
      [0, 2, "主语", "/ˈfriːkwənt/ /ˈmʌsəl/ /streɪnz/", "频繁的肌肉拉伤"],
      [3, 3, "系动词", "/ɑːr/", "是"],
      [4, 7, "表语", "/ə/ /ˈprɛvələnt/ /ˌɒkjʊˈpeɪʃənəl/ /ˈhæzərd/", "一个普遍的职业危害"],
      [8, 10, "范围状语", "/əˈmʌŋ/ /lɒŋ-ˈdɪstəns/ /ˈrʌnərz/", "在长跑运动员之中"]
    ],
    [["运动损伤词汇", "muscle strain (肌肉拉伤)；occupational hazard (职业危害)；long-distance runner (长跑运动员)。"]]
  ],
  [
    "这支处于劣势的球队在冠军赛的最后几分钟策划了一场奇迹般的翻盘",
    "The underdog team orchestrated a miraculous comeback in the final minutes of the championship game.",
    [
      [0, 2, "主语", "/ðə/ /ˈʌndərdɒg/ /tiːm/", "这支处于劣势的球队"],
      [3, 3, "谓语", "/ˈɔːrkɪˌstreɪtɪd/", "精心策划了"],
      [4, 6, "宾语", "/ə/ /mɪˈrækjʊləs/ /ˈkʌmbæk/", "一场奇迹般的翻盘"],
      [7, 14, "时间状语", "/ɪn/ /ðə/ /ˈfaɪnəl/ /ˈmɪnɪts/ /ɒv/ /ðə/ /ˈtʃæmpiənʃɪp/ /geɪm/", "在冠军赛的最后几分钟里"]
    ],
    [["竞技体育词汇", "underdog (处于劣势的人/队伍，黑马)；orchestrate (精心策划)；miraculous comeback (奇迹般的逆转/翻盘)。"]]
  ],
  [
    "保持最佳的水分补充对于维持巅峰的身体表现绝对是必不可少的",
    "Maintaining optimal hydration is absolutely imperative for sustaining peak physical performance.",
    [
      [0, 2, "主语(动名词)", "/meɪnˈteɪnɪŋ/ /ˈɒptɪməl/ /haɪˈdreɪʃən/", "保持最佳的水分补充"],
      [3, 3, "系动词", "/ɪz/", "是"],
      [4, 5, "表语", "/ˌæbsəˈluːtli/ /ɪmˈpɛrətɪv/", "绝对必不可少的"],
      [6, 10, "目的状语", "/fɔːr/ /səˈsteɪnɪŋ/ /piːk/ /ˈfɪzɪkəl/ /pərˈfɔːrməns/", "为了维持巅峰的身体表现"]
    ],
    [["运动科学词汇", "optimal hydration (最佳的水分补充)；imperative (极其重要的)；peak physical performance (巅峰身体表现)。"]]
  ],
  [
    "教练设计了一套复杂的防守策略，以化解对手猛烈的进攻",
    "The coach devised an intricate defensive strategy to neutralize the opponent's aggressive attacks.",
    [
      [0, 1, "主语", "/ðə/ /koʊtʃ/", "教练"],
      [2, 2, "谓语", "/dɪˈvaɪzd/", "设计出了"],
      [3, 6, "宾语", "/æn/ /ˈɪntrɪkət/ /dɪˈfɛnsɪv/ /ˈstrætədʒi/", "一套复杂的防守策略"],
      [7, 12, "目的状语", "/tuː/ /ˈnuːtrəˌlaɪz/ /ði/ /əˈpoʊnənts/ /əˈgrɛsɪv/ /əˈtæks/", "为了中和/化解对手猛烈的进攻"]
    ],
    [["战术与策略", "devise (设计，发明)；intricate (错综复杂的)；defensive strategy (防守策略)；neutralize (使中和，化解)。"]]
  ],
  [
    "有规律的有氧运动显著降低了患上慢性代谢疾病的风险",
    "Regular aerobic exercise significantly mitigates the risk of developing chronic metabolic diseases.",
    [
      [0, 2, "主语", "/ˈrɛgjʊlər/ /ɛˈroʊbɪk/ /ˈɛksərˌsaɪz/", "有规律的有氧运动"],
      [3, 4, "状语+谓语", "/sɪgˈnɪfɪkəntli/ /ˈmɪtɪˌgeɪts/", "显著地减轻/降低了"],
      [5, 11, "宾语(含动名词修饰)", "/ðə/ /rɪsk/ /ɒv/ /dɪˈvɛləpɪŋ/ /ˈkrɒnɪk/ /ˌmɛtəˈbɒlɪk/ /dɪˈziːzɪz/", "患上慢性代谢疾病的风险"]
    ],
    [["健身与健康", "aerobic exercise (有氧运动)；mitigate (减轻，缓和)；metabolic diseases (代谢类疾病)。"]]
  ],
  [
    "裁判充满争议的判罚在热情的观众中激起了广泛的愤怒",
    "The referee's controversial decision provoked widespread outrage among the passionate spectators.",
    [
      [0, 3, "主语", "/ðə/ /ˌrɛfəˈriːz/ /ˌkɒntrəˈvɜːrʃəl/ /dɪˈsɪʒən/", "裁判的极具争议的决定"],
      [4, 4, "谓语", "/prəˈvoʊkt/", "激起了"],
      [5, 6, "宾语", "/ˈwaɪdsprɛd/ /ˈaʊtreɪdʒ/", "广泛的愤怒"],
      [7, 10, "范围状语", "/əˈmʌŋ/ /ðə/ /ˈpæʃənət/ /ˈspɛkteɪtərz/", "在热情的观众/球迷之中"]
    ],
    [["赛场词汇", "referee (裁判)；controversial (有争议的)；provoke outrage (激起公愤)；spectator (观众)。"]]
  ],
  [
    "她通过展现出无与伦比的敏捷性和非凡的耐力打破了世界纪录",
    "She shattered the world record by displaying unparalleled agility and extraordinary stamina.",
    [
      [0, 0, "主语", "/ʃiː/", "她"],
      [1, 1, "谓语", "/ˈʃætərd/", "粉碎了(打破了)"],
      [2, 4, "宾语", "/ðə/ /wɜːrld/ /ˈrɛkərd/", "世界纪录"],
      [5, 11, "方式状语", "/baɪ/ /dɪˈspleɪɪŋ/ /ʌnˈpærəˌlɛld/ /əˈdʒɪlɪti/ /ænd/ /ɪkˈstrɔːrdɪnɛri/ /ˈstæmɪnə/", "通过展现出无与伦比的敏捷与非凡的耐力"]
    ],
    [["极致表现描述", "shatter a record (打破纪录，比 break 更具冲击力)；unparalleled (无与伦比的)；agility (敏捷性)；stamina (耐力)。"]]
  ],
  [
    "适当的热身运动对于防止在剧烈的体力消耗期间受到使人衰弱的伤害至关重要",
    "Proper warm-up routines are crucial to prevent debilitating injuries during intense physical exertion.",
    [
      [0, 2, "主语", "/ˈprɒpər/ /ˈwɔːrm-ʌp/ /ruːˈtiːnz/", "适当的热身常规活动"],
      [3, 4, "系表结构", "/ɑːr/ /ˈkruːʃəl/", "是至关重要的"],
      [5, 12, "目的状语", "/tuː/ /prɪˈvɛnt/ /dɪˈbɪlɪˌteɪtɪŋ/ /ˈɪndʒəriz/ /ˈdjʊərɪŋ/ /ɪnˈtɛns/ /ˈfɪzɪkəl/ /ɪgˈzɜːrʃən/", "去防止在剧烈体力消耗期间使人衰弱的伤害"]
    ],
    [["训练保护词汇", "warm-up routine (热身运动)；debilitating (使人衰弱的，严重的)；intense physical exertion (剧烈的体力消耗)。"]]
  ],
  [
    "这位传奇前锋在度过辉煌的二十年职业生涯后优雅地宣布了他的退役",
    "The legendary striker gracefully announced his retirement after an illustrious two-decade career.",
    [
      [0, 2, "主语", "/ðə/ /ˈlɛdʒənˌdɛri/ /ˈstraɪkər/", "这位传奇的前锋"],
      [3, 4, "状语+谓语", "/ˈgreɪsfəli/ /əˈnaʊnst/", "优雅地宣布了"],
      [5, 6, "宾语", "/hɪz/ /rɪˈtaɪərmənt/", "他的退役"],
      [7, 11, "时间状语", "/ˈæftər/ /æn/ /ɪˈlʌstriəs/ /tuː-ˈdɛkeɪd/ /kəˈrɪər/", "在一段辉煌的二十年职业生涯之后"]
    ],
    [["体坛生涯词汇", "striker (前锋)；gracefully (优雅地)；retirement (退役/退休)；illustrious (辉煌的，著名的)。"]]
  ],
  [
    "竞技体育灌输了关于团队合作、纪律和毅力的宝贵人生课程",
    "Competitive sports instill invaluable life lessons regarding teamwork, discipline, and perseverance.",
    [
      [0, 1, "主语", "/kəmˈpɛtɪtɪv/ /spɔːrts/", "竞技体育"],
      [2, 2, "谓语", "/ɪnˈstɪl/", "灌输，滴注"],
      [3, 5, "宾语", "/ɪnˈvæljʊəbəl/ /laɪf/ /ˈlɛsənz/", "极其宝贵的人生课程"],
      [6, 11, "后置定语", "/rɪˈgɑːrdɪŋ/ /ˈtiːmwɜːrk/, /ˈdɪsɪplɪn/, /ænd/ /ˌpɜːrsɪˈvɪərəns/", "关于团队合作、纪律和毅力的"]
    ],
    [["体育精神", "instill (灌输)；invaluable (无价的)；discipline (纪律)；perseverance (毅力/坚持不懈)。"]]
  ],
  [
    "当主队打入决定性的制胜一球时，体育场爆发出震耳欲聋的欢呼声",
    "The stadium erupted in deafening cheers as the home team scored the decisive winning goal.",
    [
      [0, 1, "主句主语", "/ðə/ /ˈsteɪdiəm/", "体育场"],
      [2, 5, "主句谓语+状语", "/ɪˈrʌptɪd/ /ɪn/ /ˈdɛfənɪŋ/ /tʃɪərz/", "在震耳欲聋的欢呼声中爆发了"],
      [6, 14, "时间状语从句", "/æz/ /ðə/ /hoʊm/ /tiːm/ /skɔːrd/ /ðə/ /dɪˈsaɪsɪv/ /ˈwɪnɪŋ/ /goʊl/", "当主队打入决定性的制胜一球时"]
    ],
    [["赛场氛围描述", "erupt in (爆发...)；deafening cheers (震耳欲聋的欢呼声)；decisive winning goal (决定性的制胜球)。"]]
  ],
  [
    "坚持不懈的举重养生法有效地增加了骨密度和整体肌肉量",
    "Consistent weightlifting regimens effectively increase bone density and overall muscle mass.",
    [
      [0, 2, "主语", "/kənˈsɪstənt/ /ˈweɪtˌlɪftɪŋ/ /ˈrɛdʒɪmənz/", "坚持不懈的举重养生法(锻炼计划)"],
      [3, 4, "状语+谓语", "/ɪˈfɛktɪvli/ /ɪnˈkriːs/", "有效地增加"],
      [5, 10, "宾语(并列)", "/boʊn/ /ˈdɛnsɪti/ /ænd/ /ˈoʊvərˌɔːl/ /ˈmʌsəl/ /mæs/", "骨密度和整体的肌肉量"]
    ],
    [["力量训练词汇", "weightlifting (举重)；regimen (养生法，锻炼计划)；bone density (骨密度)；muscle mass (肌肉量)。"]]
  ],
  [
    "奥林匹克委员会严厉禁止使用任何能提升表现的违禁物质",
    "The Olympic committee strictly prohibits the use of any performance-enhancing illicit substances.",
    [
      [0, 2, "主语", "/ði/ /oʊˈlɪmpɪk/ /kəˈmɪti/", "奥林匹克委员会"],
      [3, 4, "状语+谓语", "/ˈstrɪktli/ /prəˈhɪbɪts/", "严厉地禁止"],
      [5, 11, "宾语", "/ðə/ /juːs/ /ɒv/ /ˈɛni/ /pərˈfɔːrməns-ɪnˈhænsɪŋ/ /ɪˈlɪsɪt/ /ˈsʌbstənsɪz/", "任何能提升表现的违禁物质的使用"]
    ],
    [["反兴奋剂词汇", "strictly prohibit (严禁)；performance-enhancing (提升表现的，常指兴奋剂)；illicit substances (违禁物质)。"]]
  ],
  [
    "掌握复杂的技巧需要无数个小时的专注和重复的练习",
    "Mastering sophisticated techniques requires countless hours of dedicated and repetitive practice.",
    [
      [0, 2, "主语(动名词)", "/ˈmæstərɪŋ/ /səˈfɪstɪˌkeɪtɪd/ /tɛkˈniːks/", "掌握复杂的技巧"],
      [3, 3, "谓语", "/rɪˈkwaɪərz/", "需要"],
      [4, 10, "宾语", "/ˈkaʊntləs/ /ˈaʊərz/ /ɒv/ /ˈdɛdɪˌkeɪtɪd/ /ænd/ /rɪˈpɛtɪtɪv/ /ˈpræktɪs/", "无数个小时的专注和重复的练习"]
    ],
    [["技能训练词汇", "master (掌握)；sophisticated techniques (复杂/高级的技巧)；dedicated (专注的)；repetitive (重复的)。"]]
  ],
  [
    "卫冕冠军成功地击退了一位强大而无情的挑战者，保住了她的头衔",
    "The reigning champion successfully defended her title against a formidable and relentless challenger.",
    [
      [0, 2, "主语", "/ðə/ /ˈreɪnɪŋ/ /ˈtʃæmpiən/", "卫冕冠军"],
      [3, 4, "状语+谓语", "/səkˈsɛsfəli/ /dɪˈfɛndɪd/", "成功地防卫(保卫)了"],
      [5, 6, "宾语", "/hɜːr/ /ˈtaɪtəl/", "她的头衔"],
      [7, 13, "对抗状语", "/əˈgɛnst/ /ə/ /ˈfɔːrmɪdəbəl/ /ænd/ /rɪˈlɛntləs/ /ˈtʃælɪndʒər/", "对抗一位强大且无情的挑战者"]
    ],
    [["卫冕与挑战", "reigning champion (卫冕冠军)；defend one's title (成功卫冕/保住头衔)；formidable (可怕的，令人敬畏的)；relentless (无情的)。"]]
  ],
  [
    "参与极限运动不仅需要超凡的体力，还需要极大的心理坚韧",
    "Participating in extreme sports demands not only physical prowess but also immense psychological fortitude.",
    [
      [0, 3, "主语(动名词)", "/pɑːrˈtɪsɪˌpeɪtɪŋ/ /ɪn/ /ɪkˈstriːm/ /spɔːrts/", "参与极限运动"],
      [4, 4, "谓语", "/dɪˈmændz/", "要求，需要"],
      [5, 13, "并列宾语", "/nɒt/ /ˈoʊnli/ /ˈfɪzɪkəl/ /ˈpraʊɪs/ /bʌt/ /ˈɔːlsoʊ/ /ɪˈmɛns/ /ˌsaɪkəˈlɒdʒɪkəl/ /ˈfɔːrtɪtuːd/", "不仅是体力上的超凡能力，而且是极大的心理坚韧"]
    ],
    [["极限运动", "physical prowess (非凡的体力/技能)；immense (极大的)；psychological fortitude (心理坚韧/精神毅力)。"]]
  ],
  [
    "充足的休息和恢复期是任何专业训练计划中不可或缺的组成部分",
    "Adequate rest and recovery periods are indispensable components of any professional training program.",
    [
      [0, 4, "主语", "/ˈædɪkwət/ /rɛst/ /ænd/ /rɪˈkʌvəri/ /ˈpɪəriədz/", "充足的休息和恢复时期"],
      [5, 5, "系动词", "/ɑːr/", "是"],
      [6, 12, "表语", "/ˌɪndɪˈspɛnsəbəl/ /kəmˈpoʊnənts/ /ɒv/ /ˈɛni/ /prəˈfɛʃənəl/ /ˈtreɪnɪŋ/ /ˈproʊgræm/", "任何专业训练计划的不可或缺的组成部分"]
    ],
    [["运动恢复", "adequate (充足的)；indispensable (不可或缺的)；component (组成部分)。"]]
  ],
  [
    "这位充满魅力的队长激励他感到沮丧的队友们去突破他们所认为的极限",
    "The charismatic captain motivated his discouraged teammates to push beyond their perceived limitations.",
    [
      [0, 2, "主语", "/ðə/ /ˌkærɪzˈmætɪk/ /ˈkæptɪn/", "这位充满魅力的队长"],
      [3, 3, "谓语", "/ˈmoʊtɪˌveɪtɪd/", "激励了"],
      [4, 6, "宾语", "/hɪz/ /dɪsˈkɜːrɪdʒd/ /ˈtiːmmeɪts/", "他感到沮丧的队友们"],
      [7, 12, "宾语补足语", "/tuː/ /pʊʃ/ /bɪˈjɒnd/ /ðɛər/ /pərˈsiːvd/ /ˌlɪmɪˈteɪʃənz/", "去突破他们所认为的极限"]
    ],
    [["领袖风范词汇", "charismatic (有魅力的)；motivate sb to do (激励某人去做...)；push beyond limitations (突破极限)；perceived (被察觉到的，自认为的)。"]]
  ],
  [
    "当地的草根锦标赛为发掘新兴的年轻运动天赋提供了一个至关重要的平台",
    "Local grassroots tournaments provide a vital platform for scouting emerging young athletic talents.",
    [
      [0, 2, "主语", "/ˈloʊkəl/ /ˈgræsˌruːts/ /ˈtʊərnəmənts/", "当地的草根锦标赛"],
      [3, 3, "谓语", "/prəˈvaɪd/", "提供"],
      [4, 7, "宾语", "/ə/ /ˈvaɪtəl/ /ˈplætfɔːrm/", "一个至关重要的平台"],
      [8, 13, "目的/后置定语", "/fɔːr/ /ˈskaʊtɪŋ/ /ɪˈmɜːrdʒɪŋ/ /jʌŋ/ /æθˈlɛtɪk/ /ˈtælənts/", "为了发掘新兴的年轻运动天才"]
    ],
    [["赛事与选拔", "grassroots tournaments (草根/民间锦标赛)；scout (作为动词：搜寻，发掘人才)；emerging (新兴的，崭露头角的)。"]]
  ]
];

const tech = [
  [
    "人工智能算法正在彻底改变我们处理海量数据的方式",
    "Artificial intelligence algorithms are revolutionizing the way we process colossal amounts of data.",
    [
      [0, 2, "主语", "/ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/ /ˈælgəˌrɪðəmz/", "人工智能算法"],
      [3, 4, "谓语(现进)", "/ɑːr/ /ˌrɛvəˈluːʃəˌnaɪzɪŋ/", "正在彻底改变"],
      [5, 13, "宾语(含定语从句)", "/ðə/ /weɪ/ /wiː/ /ˈprɒsɛs/ /kəˈlɒsəl/ /əˈmaʊnts/ /ɒv/ /ˈdeɪtə/", "我们处理海量数据的方式"]
    ],
    [["前沿科技", "revolutionize (彻底改变，引发革命)；colossal amounts of (海量的，巨大的，高级替换 a lot of)；algorithm (算法)。"]]
  ],
  [
    "生物特征认证为现代智能设备增加了一层不可或缺的安全保障",
    "Biometric authentication adds an indispensable layer of security to modern smart devices.",
    [
      [0, 1, "主语", "/ˌbaɪoʊˈmɛtrɪk/ /ɔːˌθɛntɪˈkeɪʃən/", "生物特征认证"],
      [2, 2, "谓语", "/ædz/", "增加"],
      [3, 7, "宾语", "/æn/ /ˌɪndɪˈspɛnsəbəl/ /ˈleɪər/ /ɒv/ /sɪˈkjʊərɪti/", "一层不可或缺的安全保障"],
      [8, 11, "对象状语", "/tuː/ /ˈmɒdərn/ /smɑːrt/ /dɪˈvaɪsɪz/", "对于现代智能设备"]
    ],
    [["安全与隐私", "biometric authentication (生物特征认证，如指纹/面部识别)；indispensable layer (不可或缺的层面/保护层)。"]]
  ],
  [
    "自动驾驶汽车的广泛应用将深刻地改变城市交通网络",
    "Widespread implementation of autonomous vehicles will profoundly alter urban transportation networks.",
    [
      [0, 4, "主语", "/ˈwaɪdsprɛd/ /ˌɪmplɪmɛnˈteɪʃən/ /ɒv/ /ɔːˈtɒnəməs/ /ˈviːɪkəlz/", "自动驾驶车辆的广泛实施/应用"],
      [5, 7, "状语+谓语", "/wɪl/ /prəˈfaʊndli/ /ˈɔːltər/", "将深刻地改变"],
      [8, 10, "宾语", "/ˈɜːrbən/ /ˌtrænspɔːrˈteɪʃən/ /ˈnɛtwɜːrks/", "城市交通网络"]
    ],
    [["未来交通", "widespread implementation (广泛的应用/实施)；autonomous vehicles (自动驾驶汽车)；profoundly alter (深刻地改变)。"]]
  ],
  [
    "频繁的软件更新对于修补不可预见的漏洞和减轻网络威胁至关重要",
    "Frequent software updates are crucial for patching unforeseen vulnerabilities and mitigating cyber threats.",
    [
      [0, 2, "主语", "/ˈfriːkwənt/ /ˈsɒftwɛər/ /ˈʌpdeɪts/", "频繁的软件更新"],
      [3, 4, "系表结构", "/ɑːr/ /ˈkruːʃəl/", "是至关重要的"],
      [5, 12, "目的状语", "/fɔːr/ /ˈpætʃɪŋ/ /ˌʌnfɔːrˈsiːn/ /ˌvʌlnərəˈbɪlɪtiz/ /ænd/ /ˈmɪtɪˌgeɪtɪŋ/ /ˈsaɪbər/ /θrɛts/", "为了修补不可预见的漏洞以及减轻网络威胁"]
    ],
    [["网络安全", "patch vulnerabilities (修补漏洞，打补丁)；unforeseen (不可预见的)；mitigate cyber threats (减轻网络威胁)。"]]
  ],
  [
    "数字货币的迅速激增对传统银行系统构成了前所未有的挑战",
    "The rapid proliferation of digital currencies poses unprecedented challenges for traditional banking systems.",
    [
      [0, 5, "主语", "/ðə/ /ˈræpɪd/ /prəˌlɪfəˈreɪʃən/ /ɒv/ /ˈdɪdʒɪtəl/ /ˈkɜːrənsiz/", "数字货币的迅速激增/扩散"],
      [6, 6, "谓语", "/ˈpoʊzɪz/", "引起，构成"],
      [7, 9, "宾语", "/ʌnˈprɛsɪˌdɛntɪd/ /ˈtʃælɪndʒɪz/", "前所未有的挑战"],
      [10, 13, "对象状语", "/fɔːr/ /trəˈdɪʃənəl/ /ˈbæŋkɪŋ/ /ˈsɪstəmz/", "对于传统银行系统"]
    ],
    [["金融科技", "rapid proliferation (快速激增，扩散)；pose challenges (构成挑战)；unprecedented (史无前例的)。"]]
  ],
  [
    "云计算允许企业以惊人的灵活性扩展其IT基础设施",
    "Cloud computing allows enterprises to scale their IT infrastructure with remarkable flexibility.",
    [
      [0, 1, "主语", "/klaʊd/ /kəmˈpjuːtɪŋ/", "云计算"],
      [2, 2, "谓语", "/əˈlaʊz/", "允许"],
      [3, 3, "宾语", "/ˈɛntərˌpraɪzɪz/", "企业们"],
      [4, 12, "宾语补足语", "/tuː/ /skeɪl/ /ðɛər/ /aɪ-tiː/ /ˈɪnfrəˌstrʌktʃər/ /wɪθ/ /rɪˈmɑːrkəbəl/ /ˌflɛksɪˈbɪlɪti/", "去扩展他们的IT基础设施，伴随着惊人的灵活性"]
    ],
    [["企业IT服务", "enterprise (企业)；scale infrastructure (扩展基础设施)；remarkable flexibility (惊人的灵活性)。"]]
  ],
  [
    "虚拟现实头显为用户提供了一种令人难以置信的沉浸式和互动式的游戏体验",
    "Virtual reality headsets offer users an incredibly immersive and interactive gaming experience.",
    [
      [0, 2, "主语", "/ˈvɜːrtʃuəl/ /riˈæləti/ /ˈhɛdˌsɛts/", "虚拟现实头戴设备(VR头显)"],
      [3, 3, "谓语", "/ˈɒfər/", "提供"],
      [4, 4, "间接宾语", "/ˈjuːzərz/", "用户们"],
      [5, 11, "直接宾语", "/æn/ /ɪnˈkrɛdəbli/ /ɪˈmɜːrsɪv/ /ænd/ /ˌɪntərˈæktɪv/ /ˈgeɪmɪŋ/ /ɪkˈspɪəriəns/", "一种令人难以置信的沉浸式和互动的游戏体验"]
    ],
    [["前沿硬件", "virtual reality (VR虚拟现实)；headset (头显)；immersive (沉浸式的)；interactive (交互的)。"]]
  ],
  [
    "恶意的黑客利用了一个零日漏洞来渗透进入高度机密的企业数据库",
    "Malicious hackers exploited a zero-day flaw to infiltrate the highly classified corporate database.",
    [
      [0, 1, "主语", "/məˈlɪʃəs/ /ˈhækərz/", "恶意的黑客们"],
      [2, 2, "谓语", "/ɪkˈsplɔɪtɪd/", "利用了，剥削了"],
      [3, 6, "宾语", "/ə/ /ˈzɪəroʊ-deɪ/ /flɔː/", "一个零日漏洞(指尚未被厂商发现修补的漏洞)"],
      [7, 13, "目的状语", "/tuː/ /ˈɪnfɪltreɪt/ /ðə/ /ˈhaɪli/ /ˈklæsɪfaɪd/ /ˈkɔːrpərət/ /ˈdeɪtəˌbeɪs/", "为了渗透进高度机密的企业数据库"]
    ],
    [["黑客与防御", "malicious (恶意的)；exploit (利用)；zero-day flaw (零日漏洞)；infiltrate (渗透)；classified (机密的)。"]]
  ],
  [
    "量子计算机拥有在短短几秒钟内解决复杂密码学难题的潜力",
    "Quantum computers possess the potential to solve complex cryptographic puzzles in mere seconds.",
    [
      [0, 1, "主语", "/ˈkwɒntəm/ /kəmˈpjuːtərz/", "量子计算机"],
      [2, 2, "谓语", "/pəˈzɛs/", "拥有"],
      [3, 13, "宾语", "/ðə/ /pəˈtɛnʃəl/ /tuː/ /sɒlv/ /ˈkɒmplɛks/ /ˌkrɪptəˈgræfɪk/ /ˈpʌzəlz/ /ɪn/ /mɪər/ /ˈsɛkəndz/", "去在短短几秒钟内解决复杂密码学难题的潜力"]
    ],
    [["硬核科技", "quantum computers (量子计算机)；possess (拥有)；cryptographic puzzles (密码学难题)；mere seconds (仅仅几秒钟)。"]]
  ],
  [
    "物联网的整合已经将普通的房屋转变成了相互连接的智能家居",
    "The integration of the Internet of Things has transformed ordinary houses into interconnected smart homes.",
    [
      [0, 6, "主语", "/ði/ /ˌɪntɪˈgreɪʃən/ /ɒv/ /ði/ /ˈɪntərnɛt/ /ɒv/ /θɪŋz/", "物联网(IoT)的整合"],
      [7, 8, "谓语(现完)", "/hæz/ /trænsˈfɔːrmd/", "已经转变了"],
      [9, 10, "宾语", "/ˈɔːrdɪnɛri/ /ˈhaʊzɪz/", "普通的房屋"],
      [11, 14, "结果状语", "/ˈɪntuː/ /ˌɪntərkəˈnɛktɪd/ /smɑːrt/ /hoʊmz/", "成为相互连接的智能家居"]
    ],
    [["智能生活", "integration (整合)；Internet of Things / IoT (物联网)；interconnected (互联的)。"]]
  ],
  [
    "数据隐私法规迫使科技巨头在他们的信息收集操作上变得更加透明",
    "Data privacy regulations compel tech giants to be more transparent about their information-gathering practices.",
    [
      [0, 2, "主语", "/ˈdeɪtə/ /ˈpraɪvəsi/ /ˌrɛgjʊˈleɪʃənz/", "数据隐私法规"],
      [3, 3, "谓语", "/kəmˈpɛl/", "强迫，迫使"],
      [4, 5, "宾语", "/tɛk/ /ˈdʒaɪənts/", "科技巨头"],
      [6, 14, "宾语补足语", "/tuː/ /bi/ /mɔːr/ /trænsˈpærənt/ /əˈbaʊt/ /ðɛər/ /ɪnfərˈmeɪʃən-ˌgæðərɪŋ/ /ˈpræktɪsɪz/", "去在关于他们的信息收集做法上变得更加透明"]
    ],
    [["隐私与合规", "compel sb to do (迫使某人做)；transparent (透明的)；information-gathering practices (信息收集的做法/常规)。"]]
  ],
  [
    "机器学习模型通过分析庞大的历史数据集，不断地完善它们的预测准确性",
    "Machine learning models continuously refine their predictive accuracy by analyzing vast historical datasets.",
    [
      [0, 2, "主语", "/məˈʃiːn/ /ˈlɜːrnɪŋ/ /ˈmɒdəlz/", "机器学习模型"],
      [3, 4, "状语+谓语", "/kənˈtɪnjuəsli/ /rɪˈfaɪn/", "不断地完善/提炼"],
      [5, 7, "宾语", "/ðɛər/ /prɪˈdɪktɪv/ /ˈækjʊrəsi/", "它们的预测准确性"],
      [8, 12, "方式状语", "/baɪ/ /ˈænəˌlaɪzɪŋ/ /væst/ /hɪˈstɒrɪkəl/ /ˈdeɪtəˌsɛts/", "通过分析庞大的历史数据集"]
    ],
    [["AI研发词汇", "continuously refine (不断完善)；predictive accuracy (预测准确率)；vast historical datasets (庞大的历史数据集)。"]]
  ],
  [
    "向无现金社会的过渡正被无处不在的移动支付应用所加速",
    "The transition to a cashless society is being accelerated by ubiquitous mobile payment applications.",
    [
      [0, 5, "主语", "/ðə/ /trænˈzɪʃən/ /tuː/ /ə/ /ˈkæʃləs/ /səˈsaɪəti/", "向无现金社会的过渡"],
      [6, 8, "谓语(现进被动)", "/ɪz/ /ˈbiːɪŋ/ /ækˈsɛləˌreɪtɪd/", "正在被加速"],
      [9, 13, "施动者状语", "/baɪ/ /juːˈbɪkwɪtəs/ /ˈmoʊbəl/ /ˈpeɪmənt/ /ˌæplɪˈkeɪʃənz/", "被无处不在的移动支付应用程序"]
    ],
    [["数字支付", "transition to (向...过渡)；cashless society (无现金社会)；accelerate (加速)；ubiquitous (无处不在的，极为高频的雅思词汇)。"]]
  ],
  [
    "可再生能源技术对于对抗日益升级的全球气候危机是不可或缺的",
    "Renewable energy technologies are indispensable for combating the escalating global climate crisis.",
    [
      [0, 2, "主语", "/rɪˈnuːəbəl/ /ˈɛnərdʒi/ /tɛkˈnɒlədʒiz/", "可再生能源技术"],
      [3, 4, "系表结构", "/ɑːr/ /ˌɪndɪˈspɛnsəbəl/", "是不可或缺的"],
      [5, 11, "目的/原因状语", "/fɔːr/ /kəmˈbætɪŋ/ /ði/ /ˈɛskəˌleɪtɪŋ/ /ˈgloʊbəl/ /ˈklaɪmət/ /ˈkraɪsɪs/", "为了对抗不断升级的全球气候危机"]
    ],
    [["绿色科技", "renewable energy (可再生能源)；combat (对抗)；escalating (不断升级的，恶化的)；climate crisis (气候危机)。"]]
  ],
  [
    "先进的机器人技术已经完全自动化了制造装配线上危险且重复的任务",
    "Advanced robotics have completely automated hazardous and repetitive tasks on the manufacturing assembly line.",
    [
      [0, 1, "主语", "/ədˈvænst/ /roʊˈbɒtɪks/", "先进的机器人技术(视为复数或单数集体名词)"],
      [2, 4, "状语+谓语(现完)", "/hæv/ /kəmˈpliːtli/ /ˈɔːtəˌmeɪtɪd/", "已经完全地自动化了"],
      [5, 8, "宾语", "/ˈhæzərdəs/ /ænd/ /rɪˈpɛtɪtɪv/ /tæsks/", "危险且重复的任务"],
      [9, 13, "地点状语", "/ɒn/ /ðə/ /ˌmænjʊˈfæktʃərɪŋ/ /əˈsɛmbli/ /laɪn/", "在制造装配线上"]
    ],
    [["工业制造与自动化", "robotics (机器人技术)；automate (使自动化)；hazardous (危险的)；assembly line (装配线/流水线)。"]]
  ],
  [
    "加密货币价值的不规则波动阻碍了许多保守投资者参与其中",
    "The erratic fluctuations of cryptocurrency values deter many conservative investors from participating.",
    [
      [0, 5, "主语", "/ði/ /ɪˈrætɪk/ /ˌflʌktʃuˈeɪʃənz/ /ɒv/ /ˈkrɪptoʊˌkɜːrənsi/ /ˈvæljuːz/", "加密货币价值的不规则的波动"],
      [6, 6, "谓语", "/dɪˈtɜːr/", "阻止，威慑"],
      [7, 9, "宾语", "/ˈmɛni/ /kənˈsɜːrvətɪv/ /ɪnˈvɛstərz/", "许多保守的投资者"],
      [10, 11, "状语(介词)", "/frɒm/ /pɑːrˈtɪsɪˌpeɪtɪŋ/", "免于参与(阻止...参与)"]
    ],
    [["金融科技衍生", "erratic fluctuations (不规则的波动，暴涨暴跌)；deter sb from doing (阻止/威慑某人做某事)；conservative investor (保守投资者)。"]]
  ],
  [
    "宽带光纤网络促进了无缝和瞬时的全球电信通信",
    "Broadband fiber-optic networks facilitate seamless and instantaneous global telecommunications.",
    [
      [0, 2, "主语", "/ˈbrɔːdˌbænd/ /ˈfaɪbər-ˈɒptɪk/ /ˈnɛtwɜːrks/", "宽带光纤网络"],
      [3, 3, "谓语", "/fəˈsɪlɪteɪt/", "促进，使便利"],
      [4, 8, "宾语", "/ˈsiːmləs/ /ænd/ /ˌɪnstənˈteɪniəs/ /ˈgloʊbəl/ /ˌtɛlɪkəˌmjuːnɪˈkeɪʃənz/", "无缝且瞬时的全球电信(通信)"]
    ],
    [["通信基建", "broadband (宽带)；fiber-optic (光纤的)；seamless (无缝的)；instantaneous (瞬间的，即时的)。"]]
  ],
  [
    "过度依赖数字导航工具严重地削弱了我们天生的空间定向技能",
    "Overreliance on digital navigation tools has severely diminished our innate spatial orientation skills.",
    [
      [0, 4, "主语", "/ˌoʊvərɪˈlaɪəns/ /ɒv/ /ˈdɪdʒɪtəl/ /ˌnævɪˈgeɪʃən/ /tuːlz/", "对数字导航工具的过度依赖"],
      [5, 7, "状语+谓语(现完)", "/hæz/ /sɪˈvɪərli/ /dɪˈmɪnɪʃt/", "已经严重地削弱/减少了"],
      [8, 12, "宾语", "/aʊər/ /ɪˈneɪt/ /ˈspeɪʃəl/ /ˌɔːriɛnˈteɪʃən/ /skɪlz/", "我们天生的空间定向技能"]
    ],
    [["科技反思", "overreliance (过度依赖)；diminish (削弱，减小)；innate (天生的，固有的)；spatial orientation (空间方向感)。"]]
  ],
  [
    "开源软件在庞大的全球开发者社区中鼓励了协作式的创新",
    "Open-source software encourages collaborative innovation among a global community of developers.",
    [
      [0, 1, "主语", "/ˈoʊpən-sɔːrs/ /ˈsɒftwɛər/", "开源软件"],
      [2, 2, "谓语", "/ɪnˈkɜːrɪdʒɪz/", "鼓励"],
      [3, 4, "宾语", "/kəˈlæbərətɪv/ /ˌɪnəˈveɪʃən/", "协作式创新"],
      [5, 10, "范围状语", "/əˈmʌŋ/ /ə/ /ˈgloʊbəl/ /kəˈmjuːnɪti/ /ɒv/ /dɪˈvɛləpərz/", "在一个全球的开发者社区中"]
    ],
    [["软件开发文化", "open-source (开源的)；collaborative innovation (协作式创新)；community of developers (开发者社区)。"]]
  ],
  [
    "技术奇点的迫近威胁仍然是杰出未来学家们热烈争论的话题",
    "The looming threat of technological singularity remains a hotly debated topic among prominent futurists.",
    [
      [0, 5, "主语", "/ðə/ /ˈluːmɪŋ/ /θrɛt/ /ɒv/ /ˌtɛknəˈlɒdʒɪkəl/ /ˌsɪŋgjʊˈlærɪti/", "技术奇点的迫近的威胁"],
      [6, 6, "系动词", "/rɪˈmeɪnz/", "依然是"],
      [7, 10, "表语", "/ə/ /ˈhɒtli/ /dɪˈbeɪtɪd/ /ˈtɒpɪk/", "一个被热烈辩论的话题"],
      [11, 13, "范围状语", "/əˈmʌŋ/ /ˈprɒmɪnənt/ /ˈfjuːtʃərɪsts/", "在杰出的未来学家们之中"]
    ],
    [["科幻与未来学", "looming threat (逼近的威胁)；technological singularity (技术奇点，指AI超越人类智慧的时刻)；hotly debated (被激烈争论的)；prominent (杰出的，著名的)。"]]
  ]
];

build('scenarios_data_ext_sports_20.js', 'sports_01', 'sport', sports);
build('scenarios_data_ext_tech_20.js', 'tech_01', 'tech', tech);
