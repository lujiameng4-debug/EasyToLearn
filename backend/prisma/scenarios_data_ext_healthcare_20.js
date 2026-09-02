export const extensions = {
  "hospital_01": [
    {
      id: "hc_s11",
      chinese: "如果不及时治疗，这种传染病很容易在人群中传播",
      english_full: "The infectious disease can easily spread among the population if left untreated.",
      words: [
        { word: "The" }, { word: "infectious" }, { word: "disease" }, { word: "can" }, { word: "easily" }, { word: "spread" },
        { word: "among" }, { word: "the" }, { word: "population" }, { word: "if" }, { word: "left" }, { word: "untreated", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ði/ /ɪnˈfɛkʃəs/ /dɪˈziːz/", translation: "这种传染病" },
        { start: 3, end: 5, label: "谓语", phonetic: "/kæn/ /ˈiːzɪli/ /sprɛd/", translation: "能够容易地传播" },
        { start: 6, end: 8, label: "范围状语", phonetic: "/əˈmʌŋ/ /ðə/ /ˌpɒpjʊˈleɪʃən/", translation: "在人群之中" },
        { start: 9, end: 11, label: "条件状语(省略主谓)", phonetic: "/ɪf/ /lɛft/ /ʌnˈtriːtɪd/", translation: "如果不被治疗的话" }
      ],
      analysis: [
        { type: "医学专有名词", text: "infectious disease (传染病)；if left untreated 相当于 if it is left untreated，作省略。" }
      ]
    },
    {
      id: "hc_s12",
      chinese: "医生强烈建议她在经历这种剧烈疼痛后进行全面的医疗检查",
      english_full: "The doctor strongly recommended that she undergo a comprehensive medical examination after experiencing such severe pain.",
      words: [
        { word: "The" }, { word: "doctor" }, { word: "strongly" }, { word: "recommended" }, { word: "that" }, { word: "she" }, { word: "undergo" }, { word: "a" }, { word: "comprehensive" }, { word: "medical" }, { word: "examination" },
        { word: "after" }, { word: "experiencing" }, { word: "such" }, { word: "severe" }, { word: "pain", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈdɒktər/", translation: "医生" },
        { start: 2, end: 3, label: "主句谓语", phonetic: "/ˈstrɒŋli/ /ˌrɛkəˈmɛndɪd/", translation: "强烈推荐" },
        {
          start: 4, end: 10, label: "宾语从句(虚拟)", phonetic: "/ðæt/ /ʃiː/ /ˌʌndərˈgoʊ/ /ə/ /ˌkɒmprɪˈhɛnsɪv/ /ˈmɛdɪkəl/ /ɪgˌzæmɪˈneɪʃən/", translation: "她应该经历一次全面的体检",
          subComponents: [
            { start: 4, end: 4, label: "引导词" },
            { start: 5, end: 5, label: "(从)主" },
            { start: 6, end: 6, label: "(从)谓(省should)" },
            { start: 7, end: 10, label: "(从)宾" }
          ]
        },
        { start: 11, end: 15, label: "时间状语", phonetic: "/ˈæftər/ /ɪkˈspɪəriənsɪŋ/ /sʌtʃ/ /sɪˈvɪər/ /peɪn/", translation: "在经历如此严重的疼痛之后" }
      ],
      analysis: [
        { type: "语法重点", text: "recommend 后的宾语从句用虚拟语气，谓语动词用 (should) + 动词原形，故用 undergo 而非 undergoes。" },
        { type: "医疗词汇", text: "comprehensive medical examination (全面体检)；severe pain (剧烈疼痛)。" }
      ]
    },
    {
      id: "hc_s13",
      chinese: "长期暴露在高度污染的空气中会加剧呼吸系统疾病",
      english_full: "Prolonged exposure to highly polluted air can exacerbate respiratory diseases.",
      words: [
        { word: "Prolonged" }, { word: "exposure" }, { word: "to" }, { word: "highly" }, { word: "polluted" }, { word: "air" },
        { word: "can" }, { word: "exacerbate" }, { word: "respiratory" }, { word: "diseases", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "主语", phonetic: "/prəˈlɒŋd/ /ɪkˈspoʊʒər/ /tuː/ /ˈhaɪli/ /pəˈluːtɪd/ /ɛər/", translation: "长期暴露于高度污染的空气中" },
        { start: 6, end: 7, label: "谓语", phonetic: "/kæn/ /ɪgˈzæsərˌbeɪt/", translation: "能够加剧" },
        { start: 8, end: 9, label: "宾语", phonetic: "/ˈrɛspərətɔːri/ /dɪˈziːzɪz/", translation: "呼吸系统疾病" }
      ],
      analysis: [
        { type: "雅思/托福高级词汇", text: "prolonged (长期的)；exacerbate (使恶化，加剧) 替换 worsen；respiratory (呼吸系统的)。" }
      ]
    },
    {
      id: "hc_s14",
      chinese: "这种革命性的手术显著缩短了病人的恢复时间",
      english_full: "This revolutionary surgical procedure significantly shortens the recovery time for patients.",
      words: [
        { word: "This" }, { word: "revolutionary" }, { word: "surgical" }, { word: "procedure" },
        { word: "significantly" }, { word: "shortens" }, { word: "the" }, { word: "recovery" }, { word: "time" }, { word: "for" }, { word: "patients", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ˌrɛvəˈluːʃəˌnɛri/ /ˈsɜːrdʒɪkəl/ /prəˈsiːdʒər/", translation: "这个革命性的外科手术" },
        { start: 4, end: 5, label: "谓语", phonetic: "/sɪgˈnɪfɪkəntli/ /ˈʃɔːrtənz/", translation: "显著地缩短了" },
        { start: 6, end: 8, label: "宾语", phonetic: "/ðə/ /rɪˈkʌvəri/ /taɪm/", translation: "恢复时间" },
        { start: 9, end: 10, label: "对象状语", phonetic: "/fɔːr/ /ˈpeɪʃənts/", translation: "对于病人们来说" }
      ],
      analysis: [
        { type: "医学词汇", text: "surgical procedure (外科手术程序/过程)；recovery time (恢复期/时间)。" }
      ]
    },
    {
      id: "hc_s15",
      chinese: "由于床位短缺，医院正在努力应对大量涌入的急诊病人",
      english_full: "The hospital is struggling to cope with the massive influx of emergency patients due to bed shortages.",
      words: [
        { word: "The" }, { word: "hospital" }, { word: "is" }, { word: "struggling" }, { word: "to" }, { word: "cope" }, { word: "with" },
        { word: "the" }, { word: "massive" }, { word: "influx" }, { word: "of" }, { word: "emergency" }, { word: "patients" },
        { word: "due" }, { word: "to" }, { word: "bed" }, { word: "shortages", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈhɒspɪtəl/", translation: "医院" },
        { start: 2, end: 6, label: "谓语", phonetic: "/ɪz/ /ˈstrʌglɪŋ/ /tuː/ /koʊp/ /wɪθ/", translation: "正在努力应对" },
        { start: 7, end: 12, label: "宾语", phonetic: "/ðə/ /ˈmæsɪv/ /ˈɪnflʌks/ /ɒv/ /ɪˈmɜːrdʒənsi/ /ˈpeɪʃənts/", translation: "急诊病人的大量涌入" },
        { start: 13, end: 16, label: "原因状语", phonetic: "/djuː/ /tuː/ /bɛd/ /ˈʃɔːrtɪdʒɪz/", translation: "由于床位短缺" }
      ],
      analysis: [
        { type: "医院场景高频词", text: "struggle to cope with (艰难应对)；influx (涌入)；emergency patients (急诊病人)；shortage (短缺)。" }
      ]
    },
    {
      id: "hc_s16",
      chinese: "接种疫苗是保护最脆弱群体免受致命病毒感染的最有效方法",
      english_full: "Vaccination is the most potent method to protect vulnerable populations from lethal viruses.",
      words: [
        { word: "Vaccination" }, { word: "is" }, { word: "the" }, { word: "most" }, { word: "potent" }, { word: "method" },
        { word: "to" }, { word: "protect" }, { word: "vulnerable" }, { word: "populations" }, { word: "from" }, { word: "lethal" }, { word: "viruses", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ˌvæksɪˈneɪʃən/", translation: "接种疫苗" },
        { start: 1, end: 1, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 2, end: 5, label: "表语", phonetic: "/ðə/ /moʊst/ /ˈpoʊtənt/ /ˈmɛθəd/", translation: "最有效的方法" },
        { start: 6, end: 12, label: "目的/定语(动词不定式)", phonetic: "/tuː/ /prəˈtɛkt/ /ˈvʌlnərəbəl/ /ˌpɒpjʊˈleɪʃənz/ /frɒm/ /ˈliːθəl/ /ˈvaɪrəsɪz/", translation: "去保护脆弱人群免受致命病毒伤害" }
      ],
      analysis: [
        { type: "高端医学词汇", text: "vaccination (接种疫苗)；potent (强有力的，有效的)；vulnerable (脆弱的，易受伤害的)；lethal (致命的)。" }
      ]
    },
    {
      id: "hc_s17",
      chinese: "她被诊断出患有某种由基因突变引起的罕见遗传病",
      english_full: "She was diagnosed with a rare genetic disorder caused by a gene mutation.",
      words: [
        { word: "She" }, { word: "was" }, { word: "diagnosed" }, { word: "with" }, { word: "a" }, { word: "rare" }, { word: "genetic" }, { word: "disorder" },
        { word: "caused" }, { word: "by" }, { word: "a" }, { word: "gene" }, { word: "mutation", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ʃiː/", translation: "她" },
        { start: 1, end: 3, label: "谓语(被动)+介词", phonetic: "/wɒz/ /ˈdaɪəgnoʊzd/ /wɪθ/", translation: "被诊断出患有" },
        { start: 4, end: 7, label: "宾语", phonetic: "/ə/ /rɛər/ /dʒɪˈnɛtɪk/ /dɪsˈɔːrdər/", translation: "一种罕见的遗传病" },
        { start: 8, end: 12, label: "后置定语", phonetic: "/kɔːzd/ /baɪ/ /ə/ /dʒiːn/ /mjuˈteɪʃən/", translation: "由基因突变引起的" }
      ],
      analysis: [
        { type: "临床短语", text: "be diagnosed with (被诊断出患有...)；genetic disorder (遗传疾病/病症)；gene mutation (基因突变)。" }
      ]
    },
    {
      id: "hc_s18",
      chinese: "该诊所专门为患有焦虑和抑郁的患者提供全面的心理健康支持",
      english_full: "The clinic specializes in providing comprehensive mental health support for patients suffering from anxiety and depression.",
      words: [
        { word: "The" }, { word: "clinic" }, { word: "specializes" }, { word: "in" }, { word: "providing" }, { word: "comprehensive" }, { word: "mental" }, { word: "health" }, { word: "support" },
        { word: "for" }, { word: "patients" }, { word: "suffering" }, { word: "from" }, { word: "anxiety" }, { word: "and" }, { word: "depression", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈklɪnɪk/", translation: "这家诊所" },
        { start: 2, end: 3, label: "谓语", phonetic: "/ˈspɛʃəˌlaɪzɪz/ /ɪn/", translation: "专门从事于" },
        { start: 4, end: 8, label: "介词宾语", phonetic: "/prəˈvaɪdɪŋ/ /ˌkɒmprɪˈhɛnsɪv/ /ˈmɛntəl/ /hɛlθ/ /səˈpɔːrt/", translation: "提供全面的心理健康支持" },
        { start: 9, end: 15, label: "定语/状语", phonetic: "/fɔːr/ /ˈpeɪʃənts/ /ˈsʌfərɪŋ/ /frɒm/ /æŋˈzaɪəti/ /ænd/ /dɪˈprɛʃən/", translation: "为遭受焦虑和抑郁折磨的患者" }
      ],
      analysis: [
        { type: "医疗服务词汇", text: "specialize in (专门研究，专供)；mental health (心理健康)；suffer from (遭受...的痛苦)；anxiety and depression (焦虑与抑郁)。" }
      ]
    },
    {
      id: "hc_s19",
      chinese: "护士仔细监测了患者的生命体征，以确保病情没有恶化",
      english_full: "The nurse meticulously monitored the patient's vital signs to ensure the condition did not deteriorate.",
      words: [
        { word: "The" }, { word: "nurse" }, { word: "meticulously" }, { word: "monitored" }, { word: "the" }, { word: "patient's" }, { word: "vital" }, { word: "signs" },
        { word: "to" }, { word: "ensure" }, { word: "the" }, { word: "condition" }, { word: "did" }, { word: "not" }, { word: "deteriorate", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /nɜːrs/", translation: "护士" },
        { start: 2, end: 3, label: "状语+谓语", phonetic: "/mɪˈtɪkjʊləsli/ /ˈmɒnɪtərd/", translation: "一丝不苟地监测了" },
        { start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /ˈpeɪʃənts/ /ˈvaɪtəl/ /saɪnz/", translation: "患者的生命体征" },
        {
          start: 8, end: 14, label: "目的状语(含从句)", phonetic: "/tuː/ /ɪnˈʃʊər/ /ðə/ /kənˈdɪʃən/ /dɪd/ /nɒt/ /dɪˈtɪəriəˌreɪt/", translation: "去确保病情没有恶化",
          subComponents: [
            { start: 8, end: 9, label: "目的(动词不定式)" },
            { start: 10, end: 14, label: "(从)宾语从句" }
          ]
        }
      ],
      analysis: [
        { type: "临床高级表达", text: "meticulously (一丝不苟地)；vital signs (生命体征)；deteriorate (恶化，变坏) 是 worsen 的顶级替换词。" }
      ]
    },
    {
      id: "hc_s20",
      chinese: "在进行任何外科干预之前，必须获得患者的书面知情同意",
      english_full: "Written informed consent must be obtained from the patient before proceeding with any surgical intervention.",
      words: [
        { word: "Written" }, { word: "informed" }, { word: "consent" }, { word: "must" }, { word: "be" }, { word: "obtained" }, { word: "from" }, { word: "the" }, { word: "patient" },
        { word: "before" }, { word: "proceeding" }, { word: "with" }, { word: "any" }, { word: "surgical" }, { word: "intervention", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ˈrɪtən/ /ɪnˈfɔːrmd/ /kənˈsɛnt/", translation: "书面的知情同意(书)" },
        { start: 3, end: 5, label: "谓语(被动)", phonetic: "/mʌst/ /bi/ /əbˈteɪnd/", translation: "必须被获得" },
        { start: 6, end: 8, label: "状语", phonetic: "/frɒm/ /ðə/ /ˈpeɪʃənt/", translation: "从病人处" },
        { start: 9, end: 14, label: "时间状语", phonetic: "/bɪˈfɔːr/ /prəˈsiːdɪŋ/ /wɪθ/ /ˈɛni/ /ˈsɜːrdʒɪkəl/ /ˌɪntərˈvɛnʃən/", translation: "在进行任何外科干预之前" }
      ],
      analysis: [
        { type: "医院法务词汇", text: "informed consent (知情同意) 是医疗领域的绝对核心词；proceed with (继续进行)；surgical intervention (外科干预/手术)。" }
      ]
    },
    {
      id: "hc_s21",
      chinese: "由于器官排斥的风险，移植手术在最初几周需要密切观察",
      english_full: "Due to the risk of organ rejection, the transplant requires close observation during the initial weeks.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "the" }, { word: "risk" }, { word: "of" }, { word: "organ" }, { word: "rejection", punctuation: "," },
        { word: "the" }, { word: "transplant" }, { word: "requires" }, { word: "close" }, { word: "observation" }, { word: "during" }, { word: "the" }, { word: "initial" }, { word: "weeks", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "原因状语", phonetic: "/djuː/ /tuː/ /ðə/ /rɪsk/ /ɒv/ /ˈɔːrgən/ /rɪˈdʒɛkʃən/", translation: "由于器官排斥的风险" },
        { start: 7, end: 8, label: "主语", phonetic: "/ðə/ /ˈtrænsplænt/", translation: "移植(手术)" },
        { start: 9, end: 9, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "需要" },
        { start: 10, end: 11, label: "宾语", phonetic: "/kloʊs/ /ˌɒbzərˈveɪʃən/", translation: "密切的观察" },
        { start: 12, end: 15, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ði/ /ɪˈnɪʃəl/ /wiːks/", translation: "在最初的几个星期期间" }
      ],
      analysis: [
        { type: "医学核心词汇", text: "organ rejection (器官排斥)；transplant (移植手术)；close observation (密切观察)。" }
      ]
    },
    {
      id: "hc_s22",
      chinese: "抗生素对病毒性感染无效，因此不应用于治疗普通感冒",
      english_full: "Antibiotics are ineffective against viral infections and therefore should not be prescribed for the common cold.",
      words: [
        { word: "Antibiotics" }, { word: "are" }, { word: "ineffective" }, { word: "against" }, { word: "viral" }, { word: "infections" },
        { word: "and" }, { word: "therefore" }, { word: "should" }, { word: "not" }, { word: "be" }, { word: "prescribed" }, { word: "for" }, { word: "the" }, { word: "common" }, { word: "cold", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ˌæntibaɪˈɒtɪks/", translation: "抗生素" },
        { start: 1, end: 5, label: "系表结构", phonetic: "/ɑːr/ /ˌɪnɪˈfɛktɪv/ /əˈgɛnst/ /ˈvaɪrəl/ /ɪnˈfɛkʃənz/", translation: "是对抗病毒感染无效的" },
        { start: 6, end: 7, label: "连词+副词", phonetic: "/ænd/ /ˈðɛərfɔːr/", translation: "并且因此" },
        { start: 8, end: 11, label: "并列谓语(被动)", phonetic: "/ʃʊd/ /nɒt/ /bi/ /prɪˈskraɪbd/", translation: "不应该被开具(处方)" },
        { start: 12, end: 15, label: "目的状语", phonetic: "/fɔːr/ /ðə/ /ˈkɒmən/ /koʊld/", translation: "用来(治疗)普通感冒" }
      ],
      analysis: [
        { type: "医学常识表达", text: "antibiotics (抗生素)；viral infections (病毒感染)；prescribe (开处方/开药)。" }
      ]
    },
    {
      id: "hc_s23",
      chinese: "由于救护车的迅速反应，病人在遭受心脏病发作后得以幸存",
      english_full: "Thanks to the rapid response of the ambulance, the patient survived after suffering a heart attack.",
      words: [
        { word: "Thanks" }, { word: "to" }, { word: "the" }, { word: "rapid" }, { word: "response" }, { word: "of" }, { word: "the" }, { word: "ambulance", punctuation: "," },
        { word: "the" }, { word: "patient" }, { word: "survived" }, { word: "after" }, { word: "suffering" }, { word: "a" }, { word: "heart" }, { word: "attack", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "原因状语", phonetic: "/θæŋks/ /tuː/ /ðə/ /ˈræpɪd/ /rɪˈspɒns/ /ɒv/ /ði/ /ˈæmbjʊləns/", translation: "多亏了救护车的快速反应" },
        { start: 8, end: 9, label: "主语", phonetic: "/ðə/ /ˈpeɪʃənt/", translation: "病人" },
        { start: 10, end: 10, label: "谓语", phonetic: "/sərˈvaɪvd/", translation: "活了下来" },
        { start: 11, end: 15, label: "时间状语", phonetic: "/ˈæftər/ /ˈsʌfərɪŋ/ /ə/ /hɑːrt/ /əˈtæk/", translation: "在遭受心脏病发作之后" }
      ],
      analysis: [
        { type: "急救词汇", text: "rapid response (快速反应)；ambulance (救护车)；suffer a heart attack (心脏病发作)。" }
      ]
    },
    {
      id: "hc_s24",
      chinese: "肥胖和久坐不动的生活方式是2型糖尿病的主要风险因素",
      english_full: "Obesity and a sedentary lifestyle are primary risk factors for type two diabetes.",
      words: [
        { word: "Obesity" }, { word: "and" }, { word: "a" }, { word: "sedentary" }, { word: "lifestyle" },
        { word: "are" }, { word: "primary" }, { word: "risk" }, { word: "factors" }, { word: "for" }, { word: "type" }, { word: "two" }, { word: "diabetes", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "主语", phonetic: "/oʊˈbiːsɪti/ /ænd/ /ə/ /ˈsɛdənˌtɛri/ /ˈlaɪfˌstaɪl/", translation: "肥胖和一个久坐不动的生活方式" },
        { start: 5, end: 5, label: "系动词", phonetic: "/ɑːr/", translation: "是" },
        { start: 6, end: 12, label: "表语及后置定语", phonetic: "/ˈpraɪˌmɛri/ /rɪsk/ /ˈfæktərz/ /fɔːr/ /taɪp/ /tuː/ /ˌdaɪəˈbiːtiːz/", translation: "2型糖尿病的主要风险因素" }
      ],
      analysis: [
        { type: "健康类雅思词汇", text: "obesity (肥胖症)；sedentary lifestyle (久坐不动的生活方式)；diabetes (糖尿病)。" }
      ]
    },
    {
      id: "hc_s25",
      chinese: "该非营利组织向农村地区的贫困社区提供免费的医疗咨询",
      english_full: "The non-profit organization provides free medical consultations to impoverished communities in rural areas.",
      words: [
        { word: "The" }, { word: "non-profit" }, { word: "organization" }, { word: "provides" }, { word: "free" }, { word: "medical" }, { word: "consultations" },
        { word: "to" }, { word: "impoverished" }, { word: "communities" }, { word: "in" }, { word: "rural" }, { word: "areas", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /nɒn-ˈprɒfɪt/ /ˌɔːrgənɪˈzeɪʃən/", translation: "该非营利组织" },
        { start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供" },
        { start: 4, end: 6, label: "直接宾语", phonetic: "/friː/ /ˈmɛdɪkəl/ /ˌkɒnsəlˈteɪʃənz/", translation: "免费的医疗咨询" },
        { start: 7, end: 12, label: "间接宾语/状语", phonetic: "/tuː/ /ɪmˈpɒvərɪʃt/ /kəˈmjuːnɪtiz/ /ɪn/ /ˈrʊərəl/ /ˈɛəriəz/", translation: "给农村地区的贫困社区" }
      ],
      analysis: [
        { type: "社会健康词汇", text: "non-profit organization (非营利组织)；medical consultation (医疗咨询/会诊)；impoverished (贫困的)。" }
      ]
    },
    {
      id: "hc_s26",
      chinese: "持续的心理压力可能会在不知不觉中损害个人的免疫系统",
      english_full: "Persistent psychological stress can imperceptibly compromise an individual's immune system.",
      words: [
        { word: "Persistent" }, { word: "psychological" }, { word: "stress" }, { word: "can" }, { word: "imperceptibly" }, { word: "compromise" },
        { word: "an" }, { word: "individual's" }, { word: "immune" }, { word: "system", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/pərˈsɪstənt/ /ˌsaɪkəˈlɒdʒɪkəl/ /strɛs/", translation: "持续的心理压力" },
        { start: 3, end: 5, label: "谓语", phonetic: "/kæn/ /ˌɪmpərˈsɛptɪbli/ /ˈkɒmprəmaɪz/", translation: "能够不知不觉地损害" },
        { start: 6, end: 9, label: "宾语", phonetic: "/æn/ /ˌɪndɪˈvɪdʒuəlz/ /ɪˈmjuːn/ /ˈsɪstəm/", translation: "一个个人的免疫系统" }
      ],
      analysis: [
        { type: "高级表达", text: "imperceptibly (察觉不到地，不知不觉中)；compromise 在医学语境中常意为“损害，使受威胁”，而非“妥协”；immune system (免疫系统)。" }
      ]
    },
    {
      id: "hc_s27",
      chinese: "通过核磁共振扫描，医生发现他的大脑前叶有一个良性肿瘤",
      english_full: "Through an MRI scan, the doctors discovered a benign tumor in the frontal lobe of his brain.",
      words: [
        { word: "Through" }, { word: "an" }, { word: "MRI" }, { word: "scan", punctuation: "," },
        { word: "the" }, { word: "doctors" }, { word: "discovered" }, { word: "a" }, { word: "benign" }, { word: "tumor" },
        { word: "in" }, { word: "the" }, { word: "frontal" }, { word: "lobe" }, { word: "of" }, { word: "his" }, { word: "brain", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "方式/途径状语", phonetic: "/θruː/ /æn/ /ɛm-ɑːr-aɪ/ /skæn/", translation: "通过一次MRI(核磁共振)扫描" },
        { start: 4, end: 5, label: "主语", phonetic: "/ðə/ /ˈdɒktərz/", translation: "医生们" },
        { start: 6, end: 6, label: "谓语", phonetic: "/dɪˈskʌvərd/", translation: "发现了" },
        { start: 7, end: 9, label: "宾语", phonetic: "/ə/ /bɪˈnaɪn/ /ˈtuːmər/", translation: "一个良性肿瘤" },
        { start: 10, end: 16, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ˈfrʌntəl/ /loʊb/ /ɒv/ /hɪz/ /breɪn/", translation: "在他的大脑额叶中" }
      ],
      analysis: [
        { type: "专业医学词汇", text: "MRI scan (核磁共振扫描)；benign tumor (良性肿瘤，恶性为 malignant)；frontal lobe (额叶)。" }
      ]
    },
    {
      id: "hc_s28",
      chinese: "由于重症监护室容量有限，医院被迫将病人转移至其他设施",
      english_full: "Due to limited ICU capacity, the hospital was compelled to transfer patients to other facilities.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "limited" }, { word: "ICU" }, { word: "capacity", punctuation: "," },
        { word: "the" }, { word: "hospital" }, { word: "was" }, { word: "compelled" }, { word: "to" }, { word: "transfer" }, { word: "patients" }, { word: "to" }, { word: "other" }, { word: "facilities", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "原因状语", phonetic: "/djuː/ /tuː/ /ˈlɪmɪtɪd/ /aɪ-siː-juː/ /kəˈpæsɪti/", translation: "由于有限的ICU容量" },
        { start: 5, end: 6, label: "主语", phonetic: "/ðə/ /ˈhɒspɪtəl/", translation: "医院" },
        { start: 7, end: 8, label: "谓语(被动)", phonetic: "/wɒz/ /kəmˈpɛld/", translation: "被迫" },
        { start: 9, end: 14, label: "目的/结果(不定式)", phonetic: "/tuː/ /trænsˈfɜːr/ /ˈpeɪʃənts/ /tuː/ /ˈʌðər/ /fəˈsɪlɪtiz/", translation: "去转移病人到其他设施" }
      ],
      analysis: [
        { type: "短语结构", text: "ICU (Intensive Care Unit，重症监护室)；be compelled to do (被迫做某事，比 forced 更正式)。" }
      ]
    },
    {
      id: "hc_s29",
      chinese: "她每天服用补充剂，以纠正营养测试中发现的严重铁缺乏",
      english_full: "She takes supplements daily to correct the severe iron deficiency identified in her nutritional test.",
      words: [
        { word: "She" }, { word: "takes" }, { word: "supplements" }, { word: "daily" },
        { word: "to" }, { word: "correct" }, { word: "the" }, { word: "severe" }, { word: "iron" }, { word: "deficiency" },
        { word: "identified" }, { word: "in" }, { word: "her" }, { word: "nutritional" }, { word: "test", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ʃiː/", translation: "她" },
        { start: 1, end: 1, label: "谓语", phonetic: "/teɪks/", translation: "服用(药等)" },
        { start: 2, end: 2, label: "宾语", phonetic: "/ˈsʌplɪmənts/", translation: "补充剂" },
        { start: 3, end: 3, label: "频率状语", phonetic: "/ˈdeɪli/", translation: "每天" },
        { start: 4, end: 14, label: "目的状语", phonetic: "/tuː/ /kəˈrɛkt/ /ðə/ /sɪˈvɪər/ /ˈaɪərn/ /dɪˈfɪʃənsi/ /aɪˈdɛntɪfaɪd/ /ɪn/ /hɜːr/ /nuˈtrɪʃənəl/ /tɛst/", translation: "为了纠正在她的营养测试中被发现的严重铁缺乏" }
      ],
      analysis: [
        { type: "营养学词汇", text: "take supplements (服用补充剂)；iron deficiency (缺铁)；identified in... (在...中被鉴定出来的，过去分词作定语)。" }
      ]
    },
    {
      id: "hc_s30",
      chinese: "该康复中心提供专门为中风幸存者量身定制的物理治疗方案",
      english_full: "The rehabilitation center offers physical therapy programs specifically tailored for stroke survivors.",
      words: [
        { word: "The" }, { word: "rehabilitation" }, { word: "center" }, { word: "offers" }, { word: "physical" }, { word: "therapy" }, { word: "programs" },
        { word: "specifically" }, { word: "tailored" }, { word: "for" }, { word: "stroke" }, { word: "survivors", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌriːhəˌbɪlɪˈteɪʃən/ /ˈsɛntər/", translation: "这家康复中心" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供" },
        { start: 4, end: 6, label: "宾语", phonetic: "/ˈfɪzɪkəl/ /ˈθɛrəpi/ /ˈproʊgræmz/", translation: "物理治疗方案" },
        { start: 7, end: 11, label: "后置定语", phonetic: "/spəˈsɪfɪkli/ /ˈteɪlərd/ /fɔːr/ /stroʊk/ /sərˈvaɪvərz/", translation: "被专门为中风幸存者量身定制的" }
      ],
      analysis: [
        { type: "康复医学词汇", text: "rehabilitation center (康复中心)；physical therapy (物理治疗/理疗)；tailored for (为...量身定制)；stroke (中风)。" }
      ]
    }
  ]
};