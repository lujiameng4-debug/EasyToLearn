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

const gov = [
  [
    "政府实施了严格的紧缩措施，以控制不断膨胀的国债",
    "The government implemented strict austerity measures to control the ballooning national debt.",
    [
      [0, 1, "主语", "/ðə/ /ˈgʌvərnmənt/", "政府"],
      [2, 2, "谓语", "/ˈɪmplɪmɛntɪd/", "实施了"],
      [3, 5, "宾语", "/strɪkt/ /ɔːˈstɛrɪti/ /ˈmɛʒərz/", "严格的紧缩措施"],
      [6, 11, "目的状语", "/tuː/ /kənˈtroʊl/ /ðə/ /bəˈluːnɪŋ/ /ˈnæʃənəl/ /dɛt/", "去控制不断膨胀的国债"]
    ],
    [["政治经济词汇", "austerity measures (紧缩措施)；ballooning (不断膨胀的)；national debt (国债)。"]]
  ],
  [
    "市议会一致批准了旨在振兴破败市中心区的全面城市更新项目",
    "The city council unanimously approved a comprehensive urban renewal project aimed at revitalizing the dilapidated downtown area.",
    [
      [0, 2, "主语", "/ðə/ /ˈsɪti/ /ˈkaʊnsəl/", "市议会"],
      [3, 4, "状语+谓语", "/juˈnænɪməsli/ /əˈpruːvd/", "一致批准了"],
      [5, 9, "宾语", "/ə/ /ˌkɒmprɪˈhɛnsɪv/ /ˈɜːrbən/ /rɪˈnuːəl/ /ˈprɒdʒɛkt/", "一个全面的城市更新项目"],
      [10, 17, "后置定语", "/eɪmd/ /æt/ /riˈvaɪtəˌlaɪzɪŋ/ /ðə/ /dɪˈlæpɪˌdeɪtɪd/ /ˈdaʊnˈtaʊn/ /ˈɛəriə/", "旨在振兴破败的市中心区域的"]
    ],
    [["城市治理", "city council (市议会)；unanimously (一致地)；urban renewal (城市更新)；revitalize (振兴/使复苏)；dilapidated (破败的，失修的)。"]]
  ],
  [
    "公共卫生部门启动了一项全国性的宣传活动，以提高人们对传染病预防的认识",
    "The public health department launched a nationwide campaign to raise awareness about infectious disease prevention.",
    [
      [0, 3, "主语", "/ðə/ /ˈpʌblɪk/ /hɛlθ/ /dɪˈpɑːrtmənt/", "公共卫生部门"],
      [4, 4, "谓语", "/lɔːntʃt/", "启动了"],
      [5, 7, "宾语", "/ə/ /ˈneɪʃənˌwaɪd/ /kæmˈpeɪn/", "一项全国性的宣传活动"],
      [8, 14, "目的状语", "/tuː/ /reɪz/ /əˈwɛərnəs/ /əˈbaʊt/ /ɪnˈfɛkʃəs/ /dɪˈziːz/ /prɪˈvɛnʃən/", "为了提高关于传染病预防的认识"]
    ],
    [["公共卫生", "launch a campaign (发起运动/宣传活动)；raise awareness (提高认识)；infectious disease (传染病)。"]]
  ],
  [
    "这项备受争议的立法引起了反对党和民间权利倡导者的强烈抵制",
    "The highly controversial legislation provoked fierce resistance from opposition parties and civil rights advocates.",
    [
      [0, 3, "主语", "/ðə/ /ˈhaɪli/ /ˌkɒntrəˈvɜːrʃəl/ /ˌlɛdʒɪsˈleɪʃən/", "这项备受争议的立法"],
      [4, 4, "谓语", "/prəˈvoʊkt/", "激起了/引起了"],
      [5, 6, "宾语", "/fɪərs/ /rɪˈzɪstəns/", "强烈的抵制"],
      [7, 14, "来源状语", "/frɒm/ /ˌɒpəˈzɪʃən/ /ˈpɑːrtiz/ /ænd/ /ˈsɪvəl/ /raɪts/ /ˈædvəkɪts/", "来自反对党和民权倡导者们"]
    ],
    [["政治体制", "controversial legislation (有争议的立法)；provoke resistance (激起抵制)；opposition party (反对党)；civil rights (民权)。"]]
  ],
  [
    "官僚主义的繁文缛节常常阻碍新企业获得必要的营业执照",
    "Bureaucratic red tape frequently hinders new businesses from obtaining necessary operating licenses.",
    [
      [0, 2, "主语", "/ˌbjʊəroʊˈkrætɪk/ /rɛd/ /teɪp/", "官僚主义的繁文缛节(红头文件)"],
      [3, 4, "状语+谓语", "/ˈfriːkwəntli/ /ˈhɪndərz/", "频繁地阻碍"],
      [5, 6, "宾语", "/nuː/ /ˈbɪznɪsɪz/", "新企业们"],
      [7, 11, "状语(固定搭配)", "/frɒm/ /əbˈteɪnɪŋ/ /ˈnɛsəˌsɛri/ /ˈɒpəˌreɪtɪŋ/ /ˈlaɪsənsɪz/", "免于获取必要的营业执照(hinder...from...)"]
    ],
    [["行政管理", "bureaucratic (官僚主义的)；red tape (繁文缛节，比喻繁琐的行政手续)；hinder sb from doing (阻碍某人做某事)。"]]
  ],
  [
    "外交官巧妙地化解了边境争端，避免了可能演变成全面战争的冲突",
    "The diplomat skillfully defused the border dispute, averting a conflict that could have escalated into a full-scale war.",
    [
      [0, 1, "主句主语", "/ðə/ /ˈdɪpləmæt/", "外交官"],
      [2, 3, "主句状语+谓语", "/ˈskɪlfəli/ /diˈfjuːzd/", "巧妙地化解了"],
      [4, 6, "主句宾语", "/ðə/ /ˈbɔːrdər/ /dɪˈspjuːt/", "边境争端"],
      [7, 16, "结果状语(现在分词)", "/əˈvɜːrtɪŋ/ /ə/ /ˈkɒnflɪkt/ /ðæt/ /kʊd/ /hæv/ /ˈɛskəˌleɪtɪd/ /ˈɪntuː/ /ə/ /fʊl-skeɪl/ /wɔːr/", "避免了一场本可能升级为全面战争的冲突"]
    ],
    [["国际关系", "diplomat (外交官)；defuse (拆除雷管，化解危机)；avert (避免)；escalate into (升级为)；full-scale (全面的)。"]]
  ],
  [
    "增加的财政拨款将被专门用于升级过时的公共交通基础设施",
    "The increased financial appropriation will be specifically allocated to upgrading the obsolete public transportation infrastructure.",
    [
      [0, 3, "主语", "/ði/ /ɪnˈkriːst/ /faɪˈnænʃəl/ /əˌproʊpriˈeɪʃən/", "增加的财政拨款"],
      [4, 8, "谓语(被动)+状语", "/wɪl/ /bi/ /spəˈsɪfɪkəli/ /ˈæləˌkeɪtɪd/", "将被专门地分配"],
      [9, 15, "对象/目的状语", "/tuː/ /ʌpˈgreɪdɪŋ/ /ði/ /ˌɒbsəˈliːt/ /ˈpʌblɪk/ /ˌtrænspɔːrˈteɪʃən/ /ˈɪnfrəˌstrʌktʃər/", "给升级过时的公共交通基础设施(allocate to doing)"]
    ],
    [["财政支出", "appropriation (拨款)；allocate to (分配给)；obsolete (过时的)；infrastructure (基础设施)。"]]
  ],
  [
    "政府官员因涉嫌挪用公款而受到反腐败委员会的严密调查",
    "The government official is under intense scrutiny by the anti-corruption commission for alleged embezzlement of public funds.",
    [
      [0, 2, "主语", "/ðə/ /ˈgʌvərnmənt/ /əˈfɪʃəl/", "政府官员"],
      [3, 3, "系动词", "/ɪz/", "是/处于"],
      [4, 9, "表语/被动状语", "/ˈʌndər/ /ɪnˈtɛns/ /ˈskruːtɪni/ /baɪ/ /ði/ /ˈænti-kəˈrʌpʃən/ /kəˈmɪʃən/", "在反腐败委员会的严密审查之下"],
      [10, 16, "原因状语", "/fɔːr/ /əˈlɛdʒd/ /ɪmˈbɛzəlmənt/ /ɒv/ /ˈpʌblɪk/ /fʌndz/", "因为被指控的公款挪用(贪污)"]
    ],
    [["反腐倡廉", "scrutiny (仔细审查)；anti-corruption commission (反腐委员会)；alleged (涉嫌的)；embezzlement (挪用公款/贪污)。"]]
  ],
  [
    "选民通过压倒性的公投结果表达了他们对现任政府经济政策的不满",
    "Voters expressed their dissatisfaction with the incumbent government's economic policies through an overwhelming referendum result.",
    [
      [0, 0, "主语", "/ˈvoʊtərz/", "选民们"],
      [1, 1, "谓语", "/ɪkˈsprɛst/", "表达了"],
      [2, 9, "宾语", "/ðɛər/ /dɪsˌsætɪsˈfækʃən/ /wɪθ/ /ði/ /ɪnˈkʌmbənt/ /ˈgʌvərnmənts/ /ˌiːkəˈnɒmɪk/ /ˈpɒlɪsiz/", "他们对现任政府的经济政策的不满"],
      [10, 14, "方式状语", "/θruː/ /æn/ /ˌoʊvərˈwɛlmɪŋ/ /ˌrɛfəˈrɛndəm/ /rɪˈzʌlt/", "通过一个压倒性的公投结果"]
    ],
    [["民主选举", "incumbent (在职的，现任的)；dissatisfaction (不满)；overwhelming (压倒性的)；referendum (公投)。"]]
  ],
  [
    "为了减轻低收入家庭的经济负担，政府扩大了社会福利补贴的覆盖范围",
    "To alleviate the financial burden on low-income families, the government expanded the coverage of social welfare subsidies.",
    [
      [0, 7, "目的状语", "/tuː/ /əˈliːviˌeɪt/ /ðə/ /faɪˈnænʃəl/ /ˈbɜːrdən/ /ɒn/ /loʊ-ˈɪnkʌm/ /ˈfæmɪliz/", "为了减轻低收入家庭身上的财务负担"],
      [8, 9, "主句主语", "/ðə/ /ˈgʌvərnmənt/", "政府"],
      [10, 10, "主句谓语", "/ɪkˈspændɪd/", "扩大了"],
      [11, 16, "主句宾语", "/ðə/ /ˈkʌvərɪdʒ/ /ɒv/ /ˈsoʊʃəl/ /ˈwɛlˌfɛər/ /ˈsʌbsɪdiz/", "社会福利补贴的覆盖范围"]
    ],
    [["社会保障", "alleviate (减轻，缓解)；financial burden (经济负担)；low-income (低收入的)；social welfare subsidies (社会福利补贴)。"]]
  ],
  [
    "该市的新规划法规要求所有新建商业建筑必须达到严苛的能源效率标准",
    "The city's new zoning regulations mandate that all newly constructed commercial buildings must meet stringent energy efficiency standards.",
    [
      [0, 4, "主句主语", "/ðə/ /ˈsɪtiz/ /nuː/ /ˈzoʊnɪŋ/ /ˌrɛgjʊˈleɪʃənz/", "该市的新区划法规"],
      [5, 5, "主句谓语", "/ˈmændeɪt/", "强制要求/命令"],
      [6, 17, "宾语从句", "/ðæt/ /ɔːl/ /ˈnuːli/ /kənˈstrʌktɪd/ /kəˈmɜːrʃəl/ /ˈbɪldɪŋz/ /mʌst/ /miːt/ /ˈstrɪndʒənt/ /ˈɛnərdʒi/ /ɪˈfɪʃənsi/ /ˈstændərdz/", "所有新建商业建筑必须达到严苛的能效标准"]
    ],
    [["市政规划", "zoning regulations (区划法规，城市规划法规)；mandate (强制要求)；newly constructed (新建的)；stringent (严苛的，严格的)；energy efficiency (能源效率)。"]]
  ],
  [
    "在危机时期，国家领导人发表了全国电视讲话，以安抚焦虑的民众",
    "During the time of crisis, the national leader delivered a nationally televised address to reassure the anxious populace.",
    [
      [0, 4, "时间状语", "/ˈdjʊərɪŋ/ /ðə/ /taɪm/ /ɒv/ /ˈkraɪsɪs/", "在危机时期期间"],
      [5, 7, "主句主语", "/ðə/ /ˈnæʃənəl/ /ˈliːdər/", "国家领导人"],
      [8, 8, "主句谓语", "/dɪˈlɪvərd/", "发表了"],
      [9, 12, "主句宾语", "/ə/ /ˈnæʃənəli/ /ˈtɛlɪˌvaɪzd/ /əˈdrɛs/", "一篇全国电视转播的讲话"],
      [13, 17, "目的状语", "/tuː/ /ˌriːəˈʃʊər/ /ði/ /ˈæŋkʃəs/ /ˈpɒpjʊləs/", "为了安抚焦虑的民众"]
    ],
    [["政治传播", "deliver an address (发表讲话)；nationally televised (全国电视播出的)；reassure (使安心，安抚)；populace (平民，大众，尤指一个国家的所有居民)。"]]
  ],
  [
    "税务机关严厉打击了利用离岸账户逃税的跨国公司",
    "The tax authority cracked down heavily on multinational corporations exploiting offshore accounts for tax evasion.",
    [
      [0, 2, "主语", "/ðə/ /tæks/ /əˈθɔːrɪti/", "税务当局/机关"],
      [3, 6, "状语+谓语(动词短语)", "/krækt/ /daʊn/ /ˈhɛvɪli/ /ɒn/", "沉重地(严厉地)打击了"],
      [7, 14, "宾语(含分词作定语)", "/ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃənz/ /ɪkˈsplɔɪtɪŋ/ /ˈɒfˌʃɔːr/ /əˈkaʊnts/ /fɔːr/ /tæks/ /ɪˈveɪʒən/", "为了逃税而利用离岸账户的跨国公司们"]
    ],
    [["税收监管", "tax authority (税务机关)；crack down on (严厉打击/镇压)；multinational corporation (跨国公司)；offshore account (离岸账户)；tax evasion (逃税，漏税)。"]]
  ],
  [
    "公共住房短缺仍然是困扰该大都市的一个紧迫的社会经济问题",
    "The shortage of public housing remains a pressing socioeconomic issue plaguing the metropolis.",
    [
      [0, 4, "主语", "/ðə/ /ˈʃɔːrtɪdʒ/ /ɒv/ /ˈpʌblɪk/ /ˈhaʊzɪŋ/", "公共住房的短缺"],
      [5, 5, "系动词", "/rɪˈmeɪnz/", "仍然是"],
      [6, 12, "表语(含现在分词作定语)", "/ə/ /ˈprɛsɪŋ/ /ˌsoʊsioʊˌiːkəˈnɒmɪk/ /ˈɪʃuː/ /ˈpleɪgɪŋ/ /ðə/ /məˈtrɒpəlɪs/", "一个困扰着该大都市的紧迫的社会经济问题"]
    ],
    [["城市民生", "shortage (短缺)；pressing (紧迫的)；socioeconomic (社会经济的)；plague (折磨/困扰)；metropolis (大都市)。"]]
  ],
  [
    "议会通过了一项具有里程碑意义的法案，确立了所有公民享有免费医疗的权利",
    "The parliament passed a landmark bill establishing the right to free healthcare for all citizens.",
    [
      [0, 1, "主语", "/ðə/ /ˈpɑːrləmənt/", "议会"],
      [2, 2, "谓语", "/pæst/", "通过了"],
      [3, 14, "宾语(含分词后置定语)", "/ə/ /ˈlændˌmɑːrk/ /bɪl/ /ɪˈstæblɪʃɪŋ/ /ðə/ /raɪt/ /tuː/ /friː/ /ˈhɛlθˌkɛər/ /fɔːr/ /ɔːl/ /ˈsɪtɪzənz/", "一项确立了面向所有公民的免费医疗权利的里程碑式的法案"]
    ],
    [["立法与民生", "parliament (议会)；landmark bill (具有里程碑意义的法案)；establish the right (确立权利)。"]]
  ],
  [
    "持续的通货膨胀迫使中央银行不得不采取加息的宏观经济调控手段",
    "Persistent inflation forced the central bank to resort to the macroeconomic intervention of raising interest rates.",
    [
      [0, 1, "主语", "/pərˈsɪstənt/ /ɪnˈfleɪʃən/", "持续的通货膨胀"],
      [2, 2, "谓语", "/fɔːrst/", "迫使了"],
      [3, 5, "宾语", "/ðə/ /ˈsɛntrəl/ /bæŋk/", "中央银行"],
      [6, 15, "宾语补足语", "/tuː/ /rɪˈzɔːrt/ /tuː/ /ðə/ /ˌmækroʊˌiːkəˈnɒmɪk/ /ˌɪntərˈvɛnʃən/ /ɒv/ /ˈreɪzɪŋ/ /ˈɪntrɪst/ /reɪts/", "去诉诸于提高利率的宏观经济干预手段"]
    ],
    [["宏观调控", "persistent inflation (持续的通胀)；resort to (诉诸于/采取某手段)；macroeconomic intervention (宏观经济干预)；interest rate (利率)。"]]
  ],
  [
    "地方政府举办了多场市政厅会议，以征求公众对预算分配的反馈",
    "The local government hosted multiple town hall meetings to solicit public feedback on budget allocation.",
    [
      [0, 2, "主语", "/ðə/ /ˈloʊkəl/ /ˈgʌvərnmənt/", "地方政府"],
      [3, 3, "谓语", "/ˈhoʊstɪd/", "举办了"],
      [4, 7, "宾语", "/ˈmʌltɪpəl/ /taʊn/ /hɔːl/ /ˈmiːtɪŋz/", "多场市政厅会议"],
      [8, 14, "目的状语", "/tuː/ /səˈlɪsɪt/ /ˈpʌblɪk/ /ˈfiːdˌbæk/ /ɒn/ /ˈbʌdʒɪt/ /ˌæləˈkeɪʃən/", "为了征求关于预算分配的公众反馈"]
    ],
    [["地方自治", "town hall meeting (市政厅会议，指公开的市民听证会)；solicit (征求，请求)；budget allocation (预算分配)。"]]
  ],
  [
    "执法机构部署了大量警力，以确保国际峰会期间的公共安全",
    "Law enforcement agencies deployed a massive police presence to ensure public safety during the international summit.",
    [
      [0, 2, "主语", "/lɔː/ /ɪnˈfɔːrsmənt/ /ˈeɪdʒənsiz/", "执法机构们"],
      [3, 3, "谓语", "/dɪˈplɔɪd/", "部署了"],
      [4, 7, "宾语", "/ə/ /ˈmæsɪv/ /pəˈliːs/ /ˈprɛzəns/", "庞大的警力存在(大量警力)"],
      [8, 15, "目的状语", "/tuː/ /ɪnˈʃʊər/ /ˈpʌblɪk/ /ˈseɪfti/ /ˈdjʊərɪŋ/ /ði/ /ˌɪntərˈnæʃənəl/ /ˈsʌmɪt/", "为了确保在国际峰会期间的公共安全"]
    ],
    [["公共安全", "law enforcement agencies (执法机构)；deploy (部署)；police presence (警力存在/出警)；summit (峰会)。"]]
  ],
  [
    "这项双边贸易协定有望显著促进两国的出口并创造数以万计的就业机会",
    "This bilateral trade agreement is expected to significantly boost exports and create tens of thousands of jobs in both countries.",
    [
      [0, 3, "主语", "/ðɪs/ /baɪˈlætərəl/ /treɪd/ /əˈgriːmənt/", "这项双边贸易协定"],
      [4, 5, "谓语(被动)", "/ɪz/ /ɪkˈspɛktɪd/", "被期待(有望)"],
      [6, 20, "主语补足语(不定式)", "/tuː/ /sɪgˈnɪfɪkəntli/ /buːst/ /ˈɛkspɔːrts/ /ænd/ /kriˈeɪt/ /tɛnz/ /ɒv/ /ˈθaʊzəndz/ /ɒv/ /dʒɒbz/ /ɪn/ /boʊθ/ /ˈkʌntriz/", "去显著促进出口并在两个国家中创造数以万计的就业"]
    ],
    [["国际贸易", "bilateral (双边的，multilateral是多边的)；boost exports (促进出口)；tens of thousands of (数以万计的)。"]]
  ],
  [
    "公职人员被严格要求在执行公务时遵守最高标准的职业道德",
    "Public servants are strictly required to adhere to the highest standards of professional ethics when performing their official duties.",
    [
      [0, 1, "主语", "/ˈpʌblɪk/ /ˈsɜːrvənts/", "公仆(公职人员)"],
      [2, 4, "状语+谓语(被动)", "/ɑːr/ /ˈstrɪktli/ /rɪˈkwaɪərd/", "被严格地要求"],
      [5, 12, "主语补足语(不定式)", "/tuː/ /ədˈhɪər/ /tuː/ /ðə/ /ˈhaɪɪst/ /ˈstændərdz/ /ɒv/ /prəˈfɛʃənəl/ /ˈɛθɪks/", "去遵守职业道德的最高标准"],
      [13, 18, "时间状语(分词)", "/wɛn/ /pərˈfɔːrmɪŋ/ /ðɛər/ /əˈfɪʃəl/ /ˈduːtiz/", "当履行他们的官方职责时"]
    ],
    [["公务员纪律", "public servant (公职人员/公务员)；adhere to (坚持/遵守)；professional ethics (职业道德)；official duties (公务/官方职责)。"]]
  ],
  [
    "政府出台了一系列税收优惠政策，旨在吸引外国直接投资进入高科技产业",
    "The government introduced a series of tax incentives aimed at attracting foreign direct investment into high-tech industries.",
    [
      [0, 1, "主语", "/ðə/ /ˈgʌvərnmənt/", "政府"],
      [2, 2, "谓语", "/ˌɪntrəˈdjuːst/", "引入了(出台了)"],
      [3, 7, "宾语", "/ə/ /ˈsɪəriz/ /ɒv/ /tæks/ /ɪnˈsɛntɪvz/", "一系列的税收优惠/激励措施"],
      [8, 16, "后置定语", "/eɪmd/ /æt/ /əˈtræktɪŋ/ /ˈfɒrɪn/ /dɪˈrɛkt/ /ɪnˈvɛstmənt/ /ˈɪntuː/ /haɪ-tɛk/ /ˈɪndəstriz/", "旨在吸引外国直接投资进入高科技产业的"]
    ],
    [["招商引资", "tax incentives (税收优惠/激励)；foreign direct investment (外国直接投资，FDI)；high-tech industries (高科技产业)。"]]
  ],
  [
    "国家安全局加强了网络防御能力，以抵御日益频繁的国家级黑客攻击",
    "The National Security Agency bolstered its cyber defense capabilities to fend off increasingly frequent state-sponsored hacker attacks.",
    [
      [0, 3, "主语", "/ðə/ /ˈnæʃənəl/ /sɪˈkjʊərɪti/ /ˈeɪdʒənsi/", "国家安全局(NSA)"],
      [4, 4, "谓语", "/ˈboʊlstərd/", "加强了(巩固了)"],
      [5, 8, "宾语", "/ɪts/ /ˈsaɪbər/ /dɪˈfɛns/ /ˌkeɪpəˈbɪlɪtiz/", "它的网络防御能力"],
      [9, 16, "目的状语", "/tuː/ /fɛnd/ /ɒf/ /ɪnˈkriːsɪŋli/ /ˈfriːkwənt/ /steɪt-ˈspɒnsərd/ /ˈhækər/ /əˈtæks/", "为了抵御日益频繁的国家资助的(国家级)黑客攻击"]
    ],
    [["网络安全与国防", "bolster (加强，支持)；fend off (抵御，击退)；state-sponsored (国家资助的/国家级的)。"]]
  ],
  [
    "环保部门针对非法排放工业废水的工厂开出了创纪录的巨额罚单",
    "The environmental protection department issued a record-breaking hefty fine against the factory for illegally discharging industrial wastewater.",
    [
      [0, 3, "主语", "/ði/ /ɪnˌvaɪrənˈmɛntəl/ /prəˈtɛkʃən/ /dɪˈpɑːrtmənt/", "环境保护部门"],
      [4, 4, "谓语", "/ˈɪʃuːd/", "发布了(开出了)"],
      [5, 8, "宾语", "/ə/ /ˈrɛkərd-ˌbreɪkɪŋ/ /ˈhɛfti/ /faɪn/", "一张打破纪录的巨额罚款"],
      [9, 11, "对象状语", "/əˈgɛnst/ /ðə/ /ˈfæktəri/", "针对这家工厂"],
      [12, 16, "原因状语", "/fɔːr/ /ɪˈliːgəli/ /dɪsˈtʃɑːrdʒɪŋ/ /ɪnˈdʌstriəl/ /ˈweɪstˌwɔːtər/", "因为非法排放工业废水"]
    ],
    [["环境执法", "record-breaking (打破纪录的)；hefty fine (巨额罚款)；discharge (排放)；wastewater (废水)。"]]
  ],
  [
    "灾害管理署在飓风登陆前成功地协调了沿海居民的大规模疏散",
    "The disaster management agency successfully coordinated a massive evacuation of coastal residents prior to the hurricane's landfall.",
    [
      [0, 3, "主语", "/ðə/ /dɪˈzæstər/ /ˈmænɪdʒmənt/ /ˈeɪdʒənsi/", "灾害管理署"],
      [4, 5, "状语+谓语", "/səkˈsɛsfəli/ /koʊˈɔːrdɪˌneɪtɪd/", "成功地协调了"],
      [6, 11, "宾语", "/ə/ /ˈmæsɪv/ /ɪˌvækjuˈeɪʃən/ /ɒv/ /ˈkoʊstəl/ /ˈrɛzɪdənts/", "一场沿海居民的大规模疏散"],
      [12, 17, "时间状语", "/ˈpraɪər/ /tuː/ /ðə/ /ˈhɜːrɪˌkeɪnz/ /ˈlændˌfɔːl/", "在飓风登陆之前"]
    ],
    [["应急救灾", "coordinate (协调)；massive evacuation (大规模疏散)；prior to (在...之前)；landfall (登陆)。"]]
  ],
  [
    "该国承诺到下个世纪中叶实现碳中和，这标志着其气候政策的重大转变",
    "The country pledged to achieve carbon neutrality by the middle of the next century, marking a significant shift in its climate policy.",
    [
      [0, 1, "主句主语", "/ðə/ /ˈkʌntri/", "该国"],
      [2, 2, "主句谓语", "/plɛdʒd/", "承诺了"],
      [3, 13, "主句宾语(不定式及时间状语)", "/tuː/ /əˈtʃiːv/ /ˈkɑːrbən/ /njuˈtrælɪti/ /baɪ/ /ðə/ /ˈmɪdəl/ /ɒv/ /ðə/ /nɛkst/ /ˈsɛntʃəri/", "去到下个世纪中叶实现碳中和"],
      [14, 22, "伴随/结果状语(现在分词)", "/ˈmɑːrkɪŋ/ /ə/ /sɪgˈnɪfɪkənt/ /ʃɪft/ /ɪn/ /ɪts/ /ˈklaɪmət/ /ˈpɒlɪsi/", "标志着在其气候政策上的一次重大转变"]
    ],
    [["气候变化外交", "pledge to do (承诺做某事)；carbon neutrality (碳中和)；significant shift (重大转变)。"]]
  ],
  [
    "漫长的立法审批程序使得许多旨在改善民生的紧急提案被长期搁置",
    "The lengthy legislative approval process has caused many urgent proposals aimed at improving livelihoods to be shelved for extended periods.",
    [
      [0, 4, "主语", "/ðə/ /ˈlɛŋθi/ /ˈlɛdʒɪsˌleɪtɪv/ /əˈpruːvəl/ /ˈprɒsɛs/", "漫长的立法审批程序"],
      [5, 6, "谓语(现完)", "/hæz/ /kɔːzd/", "已经导致了(使得)"],
      [7, 13, "宾语(含后置定语)", "/ˈmɛni/ /ˈɜːrdʒənt/ /prəˈpoʊzəlz/ /eɪmd/ /æt/ /ɪmˈpruːvɪŋ/ /ˈlaɪvliˌhʊdz/", "许多旨在改善民生的紧急提案"],
      [14, 19, "宾语补足语", "/tuː/ /bi/ /ʃɛlvd/ /fɔːr/ /ɪkˈstɛndɪd/ /ˈpɪəriədz/", "被搁置一段延长的时间(长期搁置)"]
    ],
    [["立法效率", "legislative approval process (立法审批程序)；livelihood (民生/生计)；shelve (搁置，放进书架)；extended periods (延长的/长期的时期)。"]]
  ],
  [
    "公共教育资金的削减导致了学校基础设施恶化和教师流失率上升",
    "The cutbacks in public education funding have led to deteriorating school infrastructure and rising teacher turnover rates.",
    [
      [0, 5, "主语", "/ðə/ /ˈkʌtˌbæks/ /ɪn/ /ˈpʌblɪk/ /ˌɛdʒʊˈkeɪʃən/ /ˈfʌndɪŋ/", "公共教育资金的削减"],
      [6, 8, "谓语(动词短语)", "/hæv/ /lɛd/ /tuː/", "已经导致了"],
      [9, 16, "宾语(并列短语)", "/dɪˈtɪəriəˌreɪtɪŋ/ /skuːl/ /ˈɪnfrəˌstrʌktʃər/ /ænd/ /ˈraɪzɪŋ/ /ˈtiːtʃər/ /ˈtɜːrnoʊvər/ /reɪts/", "恶化的学校基础设施和上升的教师流失率"]
    ],
    [["教育拨款", "cutbacks (削减)；lead to (导致)；deteriorating (正在恶化的)；turnover rate (离职率/流失率)。"]]
  ],
  [
    "政府发言人坚决否认了有关高层领导参与内幕交易的未经证实的指控",
    "The government spokesperson vehemently denied the unsubstantiated allegations regarding the involvement of senior leaders in insider trading.",
    [
      [0, 2, "主语", "/ðə/ /ˈgʌvərnmənt/ /ˈspoʊksˌpɜːrsən/", "政府发言人"],
      [3, 4, "状语+谓语", "/ˈviːəməntli/ /dɪˈnaɪd/", "坚决地/猛烈地否认了"],
      [5, 8, "宾语", "/ði/ /ˌʌnsəbˈstænʃiˌeɪtɪd/ /ˌæləˈgeɪʃənz/", "那些未经证实的指控"],
      [9, 16, "后置定语", "/rɪˈgɑːrdɪŋ/ /ði/ /ɪnˈvɒlvmənt/ /ɒv/ /ˈsiːnjər/ /ˈliːdərz/ /ɪn/ /ˈɪnˌsaɪdər/ /ˈtreɪdɪŋ/", "关于高级领导人在内幕交易中的参与(的指控)"]
    ],
    [["政治丑闻应对", "spokesperson (发言人)；vehemently (激烈地/坚决地)；unsubstantiated allegations (未经证实的指控)；insider trading (内幕交易)。"]]
  ],
  [
    "这场史无前例的大罢工使得整个国家的铁路运输系统陷入了彻底的瘫痪",
    "The unprecedented general strike has brought the entire national railway transportation system to a complete standstill.",
    [
      [0, 3, "主语", "/ði/ /ʌnˈprɛsɪˌdɛntɪd/ /ˈdʒɛnərəl/ /straɪk/", "这场史无前例的大罢工(总罢工)"],
      [4, 5, "谓语(现完)", "/hæz/ /brɔːt/", "已经带来了(使得)"],
      [6, 11, "宾语", "/ði/ /ɪnˈtaɪər/ /ˈnæʃənəl/ /ˈreɪlˌweɪ/ /ˌtrænspɔːrˈteɪʃən/ /ˈsɪstəm/", "整个国家的铁路运输系统"],
      [12, 15, "状态补足语", "/tuː/ /ə/ /kəmˈpliːt/ /ˈstændˌstɪl/", "达到一种完全的停滞状态(陷入瘫痪)"]
    ],
    [["工会与罢工", "general strike (大罢工/总罢工)；bring...to a standstill (使...陷入停滞/瘫痪)。"]]
  ],
  [
    "当局宣布进入紧急状态，以便迅速调动资源应对突发的公共卫生危机",
    "Authorities declared a state of emergency to rapidly mobilize resources in response to the sudden public health crisis.",
    [
      [0, 0, "主句主语", "/əˈθɔːrɪtiz/", "当局"],
      [1, 1, "主句谓语", "/dɪˈklɛərd/", "宣布了"],
      [2, 5, "主句宾语", "/ə/ /steɪt/ /ɒv/ /ɪˈmɜːrdʒənsi/", "一种紧急状态"],
      [6, 9, "目的状语", "/tuː/ /ˈræpɪdli/ /ˈmoʊbəˌlaɪz/ /ˈriːsɔːrsɪz/", "为了迅速地调动资源"],
      [10, 17, "原因/响应状语", "/ɪn/ /rɪˈspɒns/ /tuː/ /ðə/ /ˈsʌdən/ /ˈpʌblɪk/ /hɛlθ/ /ˈkraɪsɪs/", "为了响应这场突发的公共卫生危机"]
    ],
    [["危机管理", "authorities (当局，官方)；state of emergency (紧急状态)；mobilize resources (调动资源)；in response to (作为对...的回应)。"]]
  ],
  [
    "为了缓解交通拥堵，市政府计划在繁华的商业区征收拥堵费",
    "To alleviate traffic congestion, the municipal government plans to implement a congestion charge in the bustling commercial district.",
    [
      [0, 3, "目的状语", "/tuː/ /əˈliːviˌeɪt/ /ˈtræfɪk/ /kənˈdʒɛstʃən/", "为了缓解交通拥挤"],
      [4, 6, "主句主语", "/ðə/ /mjuˈnɪsɪpəl/ /ˈgʌvərnmənt/", "市政府"],
      [7, 7, "主句谓语", "/plænz/", "计划"],
      [8, 12, "主句宾语", "/tuː/ /ˈɪmplɪmɛnt/ /ə/ /kənˈdʒɛstʃən/ /tʃɑːrdʒ/", "去实施一项拥堵费"],
      [13, 17, "地点状语", "/ɪn/ /ðə/ /ˈbʌslɪŋ/ /kəˈmɜːrʃəl/ /ˈdɪstrɪkt/", "在繁华的商业区中"]
    ],
    [["城市交通政策", "traffic congestion (交通拥堵)；municipal (市政的)；implement (实施)；congestion charge (拥堵费)；bustling (繁华的，熙熙攘攘的)。"]]
  ],
  [
    "该法案的通过标志着在消除系统性种族歧视方面迈出了关键的一步",
    "The passage of the bill signifies a crucial step toward eliminating systemic racial discrimination.",
    [
      [0, 4, "主语", "/ðə/ /ˈpæsɪdʒ/ /ɒv/ /ðə/ /bɪl/", "法案的通过"],
      [5, 5, "谓语", "/ˈsɪgnɪˌfaɪz/", "标志着(象征着)"],
      [6, 8, "宾语", "/ə/ /ˈkruːʃəl/ /stɛp/", "关键的一步"],
      [9, 13, "介词短语作定语", "/təˈwɔːrd/ /ɪˈlɪmɪˌneɪtɪŋ/ /sɪˈstɛmɪk/ /ˈreɪʃəl/ /dɪˌskrɪmɪˈneɪʃən/", "迈向消除系统性种族歧视的(一步)"]
    ],
    [["社会法案", "passage of a bill (法案的通过)；signify (标志着)；crucial step (关键一步)；systemic racial discrimination (系统性种族歧视)。"]]
  ],
  [
    "联邦最高法院推翻了下级法院的判决，重申了宪法对言论自由的保护",
    "The Federal Supreme Court overturned the lower court's ruling, reaffirming the constitutional protection of freedom of speech.",
    [
      [0, 3, "主句主语", "/ðə/ /ˈfɛdərəl/ /səˈpriːm/ /kɔːrt/", "联邦最高法院"],
      [4, 4, "主句谓语", "/ˌoʊvərˈtɜːrnd/", "推翻了"],
      [5, 8, "主句宾语", "/ðə/ /ˈloʊər/ /ˈkɔːrts/ /ˈruːlɪŋ/", "下级法院的裁决"],
      [9, 16, "伴随状语(现在分词)", "/ˌriːəˈfɜːrmɪŋ/ /ðə/ /ˌkɒnstɪˈtuːʃənəl/ /prəˈtɛkʃən/ /ɒv/ /ˈfriːdəm/ /ɒv/ /spiːtʃ/", "重申着对于言论自由的宪法保护"]
    ],
    [["司法体系", "Supreme Court (最高法院)；overturn (推翻判决)；ruling (裁决)；reaffirm (重申)；constitutional (宪法的)。"]]
  ],
  [
    "退伍军人事务部正在努力解决长期存在的医疗服务延误和行政效率低下的问题",
    "The Department of Veterans Affairs is striving to resolve long-standing issues of medical service delays and administrative inefficiency.",
    [
      [0, 4, "主语", "/ðə/ /dɪˈpɑːrtmənt/ /ɒv/ /ˈvɛtərənz/ /əˈfɛərz/", "退伍军人事务部"],
      [5, 6, "谓语(现进)", "/ɪz/ /ˈstraɪvɪŋ/", "正在努力(奋斗)"],
      [7, 17, "宾语(不定式)", "/tuː/ /rɪˈzɒlv/ /lɒŋ-ˈstændɪŋ/ /ˈɪʃuːz/ /ɒv/ /ˈmɛdɪkəl/ /ˈsɜːrvɪs/ /dɪˈleɪz/ /ænd/ /ədˈmɪnɪˌstreɪtɪv/ /ˌɪnɪˈfɪʃənsi/", "去解决长期的关于医疗服务延误和行政效率低下的问题"]
    ],
    [["政府部门效率", "Veterans Affairs (退伍军人事务)；strive to do (努力做/奋斗)；long-standing (长期存在的)；administrative inefficiency (行政效率低下)。"]]
  ],
  [
    "跨部门的特别工作组被成立，专门负责打击日益猖獗的跨国有组织犯罪",
    "An interdepartmental task force was established, specifically tasked with combating increasingly rampant transnational organized crime.",
    [
      [0, 3, "主句主语", "/æn/ /ˌɪntərdɪˌpɑːrtˈmɛntəl/ /tæsk/ /fɔːrs/", "一个跨部门的特别工作组"],
      [4, 5, "主句谓语(被动)", "/wɒz/ /ɪˈstæblɪʃt/", "被成立了"],
      [6, 14, "状语(过去分词短语)", "/spəˈsɪfɪkəli/ /tæskt/ /wɪθ/ /kəmˈbætɪŋ/ /ɪnˈkriːsɪŋli/ /ˈræmpənt/ /trænsˈnæʃənəl/ /ˈɔːrgəˌnaɪzd/ /kraɪm/", "被特别委派以打击日益猖獗的跨国有组织犯罪(的任务)"]
    ],
    [["联合执法", "interdepartmental (跨部门的)；task force (特别工作组/专案组)；task with (委派...任务)；rampant (猖獗的)。"]]
  ],
  [
    "财政部长警告说，人口老龄化将对国家未来的养老金体系构成巨大的压力",
    "The Minister of Finance warned that the aging population will exert tremendous pressure on the nation's future pension system.",
    [
      [0, 3, "主句主语", "/ðə/ /ˈmɪnɪstər/ /ɒv/ /faɪˈnæns/", "财政部长"],
      [4, 4, "主句谓语", "/wɔːrnd/", "警告了"],
      [5, 18, "宾语从句", "/ðæt/ /ði/ /ˈeɪdʒɪŋ/ /ˌpɒpjʊˈleɪʃən/ /wɪl/ /ɪgˈzɜːrt/ /trɪˈmɛndəs/ /ˈprɛʃər/ /ɒn/ /ðə/ /ˈneɪʃənz/ /ˈfjuːtʃər/ /ˈpɛnʃən/ /ˈsɪstəm/", "老龄化人口将对国家未来的养老金体系施加巨大的压力"]
    ],
    [["老龄化危机", "Minister of Finance (财政部长)；aging population (老龄化人口)；exert pressure on (对...施加压力)；pension system (养老金体系)。"]]
  ],
  [
    "该倡议旨在缩小数字鸿沟，确保偏远地区的居民也能获得高速互联网接入",
    "The initiative aims to bridge the digital divide, ensuring that residents in remote areas also have access to high-speed internet.",
    [
      [0, 1, "主句主语", "/ði/ /ɪˈnɪʃətɪv/", "该倡议"],
      [2, 2, "主句谓语", "/eɪmz/", "旨在"],
      [3, 7, "主句宾语", "/tuː/ /brɪdʒ/ /ðə/ /ˈdɪdʒɪtəl/ /dɪˈvaɪd/", "去弥合数字鸿沟"],
      [8, 19, "伴随状语(现在分词)", "/ɪnˈʃʊərɪŋ/ /ðæt/ /ˈrɛzɪdənts/ /ɪn/ /rɪˈmoʊt/ /ˈɛəriəz/ /ˈɔːlsoʊ/ /hæv/ /ˈæksɛs/ /tuː/ /haɪ-spiːd/ /ˈɪntərnɛt/", "确保偏远地区的居民也拥有对高速互联网的访问权"]
    ],
    [["基础设施建设", "initiative (倡议/新计划)；bridge the digital divide (弥合数字鸿沟)；remote areas (偏远地区)；have access to (有权使用/接入)。"]]
  ],
  [
    "选举委员会实施了严格的身份验证程序，以维护即将到来的大选的完整性",
    "The electoral commission implemented rigorous identity verification procedures to maintain the integrity of the upcoming general election.",
    [
      [0, 2, "主语", "/ði/ /ɪˈlɛktərəl/ /kəˈmɪʃən/", "选举委员会"],
      [3, 3, "谓语", "/ˈɪmplɪmɛntɪd/", "实施了"],
      [4, 7, "宾语", "/ˈrɪgərəs/ /aɪˈdɛntɪti/ /vɛrɪfɪˈkeɪʃən/ /prəˈsiːdʒərz/", "严格的身份验证程序"],
      [8, 16, "目的状语", "/tuː/ /meɪnˈteɪn/ /ði/ /ɪnˈtɛgrɪti/ /ɒv/ /ði/ /ˈʌpˌkʌmɪŋ/ /ˈdʒɛnərəl/ /ɪˈlɛkʃən/", "为了维持即将到来的大选的完整性(公正性)"]
    ],
    [["民主选举制度", "electoral commission (选举委员会)；verification procedures (验证程序)；integrity (完整性，政治上指廉正/公正性)；general election (大选)。"]]
  ],
  [
    "国际援助组织与当地政府密切合作，向受灾地区分发急需的救援物资",
    "International aid organizations collaborated closely with the local government to distribute urgently needed relief supplies to the disaster-stricken areas.",
    [
      [0, 2, "主语", "/ˌɪntərˈnæʃənəl/ /eɪd/ /ˌɔːrgənɪˈzeɪʃənz/", "国际援助组织们"],
      [3, 8, "状语+谓语+介词", "/kəˈlæbəˌreɪtɪd/ /ˈkloʊsli/ /wɪθ/ /ðə/ /ˈloʊkəl/ /ˈgʌvərnmənt/", "与当地政府紧密合作"],
      [9, 18, "目的状语", "/tuː/ /dɪˈstrɪbjuːt/ /ˈɜːrdʒəntli/ /ˈniːdɪd/ /rɪˈliːf/ /səˈplaɪz/ /tuː/ /ðə/ /dɪˈzæstər-ˈstrɪkən/ /ˈɛəriəz/", "为了向灾区分配急需的救济物资"]
    ],
    [["人道主义救援", "collaborate with (与...合作)；distribute (分发)；relief supplies (救援物资)；disaster-stricken (受灾的/被灾难打击的)。"]]
  ],
  [
    "立法者们正在激烈辩论一项关于加强人工智能伦理监管的开创性法律框架",
    "Legislators are fiercely debating a pioneering legal framework regarding the strengthening of ethical regulations for artificial intelligence.",
    [
      [0, 0, "主语", "/ˈlɛdʒɪsˌleɪtərz/", "立法者们"],
      [1, 3, "谓语(现进)+状语", "/ɑːr/ /ˈfɪərsli/ /dɪˈbeɪtɪŋ/", "正在激烈地辩论"],
      [4, 7, "宾语", "/ə/ /ˌpaɪəˈnɪərɪŋ/ /ˈliːgəl/ /ˈfreɪmwɜːrk/", "一个开创性的法律框架"],
      [8, 16, "关于...的后置定语", "/rɪˈgɑːrdɪŋ/ /ðə/ /ˈstrɛŋθənɪŋ/ /ɒv/ /ˈɛθɪkəl/ /ˌrɛgjʊˈleɪʃənz/ /fɔːr/ /ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/", "关于对人工智能的伦理监管的加强(的框架)"]
    ],
    [["前沿立法", "legislator (立法者)；pioneering (开创性的)；legal framework (法律框架)；ethical regulations (伦理监管)。"]]
  ]
];

build('scenarios_data_ext_gov_40.js', 'gov_01', 'gov', 11, gov);
