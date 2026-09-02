export const extensions = {
  "edu_01": [
    {
      id: "edu_s6",
      chinese: "采用互动式教学法可以显著提高学生的课堂参与度",
      english_full: "Adopting interactive teaching methods can significantly boost students' classroom engagement.",
      words: [
        { word: "Adopting" }, { word: "interactive" }, { word: "teaching" }, { word: "methods" },
        { word: "can" }, { word: "significantly" }, { word: "boost" }, { word: "students'" }, { word: "classroom" }, { word: "engagement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/əˈdɒptɪŋ/ /ˌɪntərˈæktɪv/ /ˈtiːtʃɪŋ/ /ˈmɛθədz/", translation: "采用互动式教学法",
          subComponents: [{ startIndex: 0, words: [{ word: "Adopting" }, { word: "interactive" }, { word: "teaching" }, { word: "methods" }] }]
        },
        {
          start: 4, end: 6, label: "谓语", phonetic: "/kæn/ /sɪgˈnɪfɪkəntli/ /buːst/", translation: "可以显著提高",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "significantly" }] },
            { startIndex: 2, words: [{ word: "boost" }] }
          ]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/ˈstjuːdənts/ /ˈklæsruːm/ /ɪnˈgeɪdʒmənt/", translation: "学生的课堂参与度",
          subComponents: [{ startIndex: 0, words: [{ word: "students'" }, { word: "classroom" }, { word: "engagement" }] }]
        }
      ],
      analysis: [
        { type: "教育词汇", text: "interactive teaching methods (互动式教学法); classroom engagement (课堂参与度)。" },
        { type: "高级动词", text: "boost 意为“促进，提高”，替换常用的 improve 或 increase。" }
      ]
    },
    {
      id: "edu_s7",
      chinese: "同伴辅导在促进合作学习方面已被证明是非常有效的",
      english_full: "Peer tutoring has proven to be highly effective in fostering collaborative learning.",
      words: [
        { word: "Peer" }, { word: "tutoring" }, { word: "has" }, { word: "proven" }, { word: "to" }, { word: "be" },
        { word: "highly" }, { word: "effective" }, { word: "in" }, { word: "fostering" }, { word: "collaborative" }, { word: "learning", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/pɪər/ /ˈtjuːtərɪŋ/", translation: "同伴辅导",
          subComponents: [{ startIndex: 0, words: [{ word: "Peer" }, { word: "tutoring" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/hæz/ /ˈpruːvən/", translation: "已被证明",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "proven" }] }]
        },
        {
          start: 4, end: 7, label: "主语补足语", phonetic: "/tuː/ /bi/ /ˈhaɪli/ /ɪˈfɛktɪv/", translation: "是非常有效的",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "be" }, { word: "highly" }, { word: "effective" }] }]
        },
        {
          start: 8, end: 11, label: "状语", phonetic: "/ɪn/ /ˈfɒstərɪŋ/ /kəˈlæbərətɪv/ /ˈlɜːrnɪŋ/", translation: "在促进合作学习方面",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "fostering" }, { word: "collaborative" }, { word: "learning" }] }]
        }
      ],
      analysis: [
        { type: "核心搭配", text: "prove to be + adj/n 意为“被证明是...”。" },
        { type: "教育术语", text: "peer tutoring (同伴辅导) 和 collaborative learning (合作学习) 是教育学高频词汇。" }
      ]
    },
    {
      id: "edu_s8",
      chinese: "提供建设性的反馈使学生能够识别并纠正他们的缺点",
      english_full: "Providing constructive feedback enables students to identify and rectify their shortcomings.",
      words: [
        { word: "Providing" }, { word: "constructive" }, { word: "feedback" }, { word: "enables" }, { word: "students" },
        { word: "to" }, { word: "identify" }, { word: "and" }, { word: "rectify" }, { word: "their" }, { word: "shortcomings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/prəˈvaɪdɪŋ/ /kənˈstrʌktɪv/ /ˈfiːdbæk/", translation: "提供建设性的反馈",
          subComponents: [{ startIndex: 0, words: [{ word: "Providing" }, { word: "constructive" }, { word: "feedback" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəlz/", translation: "使能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enables" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈstjuːdənts/", translation: "学生",
          subComponents: [{ startIndex: 0, words: [{ word: "students" }] }]
        },
        {
          start: 5, end: 10, label: "宾语补足语", phonetic: "/tuː/ /aɪˈdɛntɪfaɪ/ /ænd/ /ˈrɛktɪfaɪ/ /ðɛər/ /ˈʃɔːrtkʌmɪŋz/", translation: "去识别并纠正他们的缺点",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "identify" }, { word: "and" }, { word: "rectify" }] },
            { startIndex: 4, words: [{ word: "their" }, { word: "shortcomings" }] }
          ]
        }
      ],
      analysis: [
        { type: "句型结构", text: "enable sb to do sth (使某人能够做某事) 是非常经典的万能表达。" },
        { type: "高级替换", text: "constructive (建设性的)；rectify (纠正，矫正) 替换 correct；shortcoming 替换 weakness。" }
      ]
    },
    {
      id: "edu_s9",
      chinese: "沉浸式语言项目已被证实可以加速外语的习得",
      english_full: "Immersive language programs have been empirically shown to accelerate foreign language acquisition.",
      words: [
        { word: "Immersive" }, { word: "language" }, { word: "programs" }, { word: "have" }, { word: "been" }, { word: "empirically" }, { word: "shown" },
        { word: "to" }, { word: "accelerate" }, { word: "foreign" }, { word: "language" }, { word: "acquisition", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɪˈmɜːrsɪv/ /ˈlæŋgwɪdʒ/ /ˈproʊgræmz/", translation: "沉浸式语言项目",
          subComponents: [{ startIndex: 0, words: [{ word: "Immersive" }, { word: "language" }, { word: "programs" }] }]
        },
        {
          start: 3, end: 6, label: "谓语(被动)", phonetic: "/hæv/ /bɪn/ /ɪmˈpɪrɪkli/ /ʃoʊn/", translation: "已被经验证实",
          subComponents: [
            { startIndex: 0, words: [{ word: "have" }, { word: "been" }] },
            { startIndex: 2, words: [{ word: "empirically" }] },
            { startIndex: 3, words: [{ word: "shown" }] }
          ]
        },
        {
          start: 7, end: 11, label: "主语补足语", phonetic: "/tuː/ /ækˈsɛləreɪt/ /ˈfɒrɪn/ /ˈlæŋgwɪdʒ/ /ˌækwɪˈzɪʃən/", translation: "去加速外语习得",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "accelerate" }] },
            { startIndex: 2, words: [{ word: "foreign" }, { word: "language" }, { word: "acquisition" }] }
          ]
        }
      ],
      analysis: [
        { type: "学术副词", text: "empirically (从经验上，以实验为根据地) 常与 shown/proven 连用增加学术性。" },
        { type: "专业名词", text: "language acquisition 指“语言习得(无意识的自然学习)”，常区别于 language learning。" }
      ]
    },
    {
      id: "edu_s10",
      chinese: "批判性分析学术文献是研究生培养的一个重要方面",
      english_full: "Critically analyzing academic literature is an essential aspect of postgraduate training.",
      words: [
        { word: "Critically" }, { word: "analyzing" }, { word: "academic" }, { word: "literature" },
        { word: "is" }, { word: "an" }, { word: "essential" }, { word: "aspect" }, { word: "of" }, { word: "postgraduate" }, { word: "training", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈkrɪtɪkli/ /ˈænəlaɪzɪŋ/ /ˌækəˈdɛmɪk/ /ˈlɪtərətʃər/", translation: "批判性地分析学术文献",
          subComponents: [{ startIndex: 0, words: [{ word: "Critically" }, { word: "analyzing" }, { word: "academic" }, { word: "literature" }] }]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 5, end: 10, label: "表语", phonetic: "/æn/ /ɪˈsɛnʃəl/ /ˈæspɛkt/ /ɒv/ /poʊstˈgrædʒuət/ /ˈtreɪnɪŋ/", translation: "研究生培养的一个重要方面",
          subComponents: [
            { startIndex: 0, words: [{ word: "an" }, { word: "essential" }, { word: "aspect" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "postgraduate" }, { word: "training" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "学术词汇", text: "critically (批判性地)；literature (在学术语境中指'文献')。" },
        { type: "固定搭配", text: "an essential aspect of... (......的一个重要方面)。" }
      ]
    }
  ],
  "finance_01": [
    {
      id: "fin_s6",
      chinese: "加密货币的去中心化特性对传统银行系统构成了挑战",
      english_full: "The decentralized nature of cryptocurrencies poses a challenge to traditional banking systems.",
      words: [
        { word: "The" }, { word: "decentralized" }, { word: "nature" }, { word: "of" }, { word: "cryptocurrencies" },
        { word: "poses" }, { word: "a" }, { word: "challenge" }, { word: "to" }, { word: "traditional" }, { word: "banking" }, { word: "systems", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /diːˈsɛntrəlaɪzd/ /ˈneɪtʃər/ /ɒv/ /ˌkrɪptoʊˈkɜːrənsiz/", translation: "加密货币的去中心化特性",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "decentralized" }, { word: "nature" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "cryptocurrencies" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈpoʊzɪz/", translation: "构成",
          subComponents: [{ startIndex: 0, words: [{ word: "poses" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ə/ /ˈtʃælɪndʒ/", translation: "一个挑战",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "challenge" }] }]
        },
        {
          start: 8, end: 11, label: "状语", phonetic: "/tuː/ /trəˈdɪʃənəl/ /ˈbæŋkɪŋ/ /ˈsɪstəmz/", translation: "对传统银行系统",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "traditional" }, { word: "banking" }, { word: "systems" }] }]
        }
      ],
      analysis: [
        { type: "前沿金融词汇", text: "decentralized (去中心化的); cryptocurrency (加密货币)。" },
        { type: "固定搭配", text: "pose a challenge to... (对...构成挑战)。" }
      ]
    },
    {
      id: "fin_s7",
      chinese: "严格的监管框架对于防范金融欺诈是不可或缺的",
      english_full: "A rigorous regulatory framework is indispensable for guarding against financial fraud.",
      words: [
        { word: "A" }, { word: "rigorous" }, { word: "regulatory" }, { word: "framework" },
        { word: "is" }, { word: "indispensable" }, { word: "for" }, { word: "guarding" }, { word: "against" }, { word: "financial" }, { word: "fraud", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ə/ /ˈrɪgərəs/ /ˈrɛgjʊlətɔːri/ /ˈfreɪmwɜːrk/", translation: "一个严格的监管框架",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "rigorous" }, { word: "regulatory" }, { word: "framework" }] }]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 5, end: 5, label: "表语", phonetic: "/ˌɪndɪˈspɛnsəbəl/", translation: "不可或缺的",
          subComponents: [{ startIndex: 0, words: [{ word: "indispensable" }] }]
        },
        {
          start: 6, end: 10, label: "目的状语", phonetic: "/fɔːr/ /ˈgɑːrdɪŋ/ /əˈgɛnst/ /faɪˈnænʃəl/ /frɔːd/", translation: "为了防范金融欺诈",
          subComponents: [
            { startIndex: 0, words: [{ word: "for" }] },
            { startIndex: 1, words: [{ word: "guarding" }, { word: "against" }, { word: "financial" }, { word: "fraud" }], label: "介词宾语" }
          ]
        }
      ],
      analysis: [
        { type: "金融术语", text: "regulatory framework (监管框架)；financial fraud (金融欺诈)。" },
        { type: "短语搭配", text: "guard against (防范，提防)；be indispensable for... (对...必不可少)。" }
      ]
    },
    {
      id: "fin_s8",
      chinese: "经济学家预测未来几个季度将出现短暂的经济衰退",
      english_full: "Economists forecast a transient economic recession in the forthcoming quarters.",
      words: [
        { word: "Economists" }, { word: "forecast" }, { word: "a" }, { word: "transient" }, { word: "economic" }, { word: "recession" },
        { word: "in" }, { word: "the" }, { word: "forthcoming" }, { word: "quarters", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ɪˈkɒnəmɪsts/", translation: "经济学家",
          subComponents: [{ startIndex: 0, words: [{ word: "Economists" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ˈfɔːrkæst/", translation: "预测",
          subComponents: [{ startIndex: 0, words: [{ word: "forecast" }] }]
        },
        {
          start: 2, end: 5, label: "宾语", phonetic: "/ə/ /ˈtrænziənt/ /ˌiːkəˈnɒmɪk/ /rɪˈsɛʃən/", translation: "一场短暂的经济衰退",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "transient" }, { word: "economic" }, { word: "recession" }] }]
        },
        {
          start: 6, end: 9, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ˈfɔːrθˌkʌmɪŋ/ /ˈkwɔːrtərz/", translation: "在未来的几个季度里",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "forthcoming" }, { word: "quarters" }] }]
        }
      ],
      analysis: [
        { type: "高级替换", text: "transient (短暂的) 替换 short；forthcoming (即将到来的) 替换 coming/next。" },
        { type: "宏观经济词汇", text: "economic recession (经济衰退)。" }
      ]
    },
    {
      id: "fin_s9",
      chinese: "主权财富基金被用来稳定国家的货币和经济",
      english_full: "Sovereign wealth funds are utilized to stabilize the nation's currency and economy.",
      words: [
        { word: "Sovereign" }, { word: "wealth" }, { word: "funds" }, { word: "are" }, { word: "utilized" },
        { word: "to" }, { word: "stabilize" }, { word: "the" }, { word: "nation's" }, { word: "currency" }, { word: "and" }, { word: "economy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsɒvrɪn/ /wɛlθ/ /fʌndz/", translation: "主权财富基金",
          subComponents: [{ startIndex: 0, words: [{ word: "Sovereign" }, { word: "wealth" }, { word: "funds" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /ˈjuːtɪlaɪzd/", translation: "被使用",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "utilized" }] }
          ]
        },
        {
          start: 5, end: 11, label: "目的状语", phonetic: "/tuː/ /ˈsteɪbɪlaɪz/ /ðə/ /ˈneɪʃənz/ /ˈkɜːrənsi/ /ænd/ /ɪˈkɒnəmi/", translation: "去稳定国家的货币和经济",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "stabilize" }] },
            { startIndex: 2, words: [{ word: "the" }, { word: "nation's" }, { word: "currency" }, { word: "and" }, { word: "economy" }] }
          ]
        }
      ],
      analysis: [
        { type: "专业名词", text: "sovereign wealth funds (主权财富基金) 是指由国家政府拥有和管理的投资基金。" },
        { type: "高级替换", text: "utilize 替换 use，更显学术色彩；stabilize 意为“使稳定”。" }
      ]
    },
    {
      id: "fin_s10",
      chinese: "过度的通货膨胀大幅降低了普通消费者的购买力",
      english_full: "Excessive inflation drastically diminishes the purchasing power of average consumers.",
      words: [
        { word: "Excessive" }, { word: "inflation" }, { word: "drastically" }, { word: "diminishes" },
        { word: "the" }, { word: "purchasing" }, { word: "power" }, { word: "of" }, { word: "average" }, { word: "consumers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪkˈsɛsɪv/ /ɪnˈfleɪʃən/", translation: "过度的通货膨胀",
          subComponents: [{ startIndex: 0, words: [{ word: "Excessive" }, { word: "inflation" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ˈdræstɪkli/", translation: "大幅地",
          subComponents: [{ startIndex: 0, words: [{ word: "drastically" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/dɪˈmɪnɪʃɪz/", translation: "降低，减少",
          subComponents: [{ startIndex: 0, words: [{ word: "diminishes" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ðə/ /ˈpɜːrtʃəsɪŋ/ /ˈpaʊər/ /ɒv/ /ˈævərɪdʒ/ /kənˈsjuːmərz/", translation: "普通消费者的购买力",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "purchasing" }, { word: "power" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "average" }, { word: "consumers" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "宏观经济词汇", text: "inflation (通货膨胀)；purchasing power (购买力)。" },
        { type: "动词用法", text: "diminish (使减少，削弱) 是 decrease/reduce 的高阶版。" }
      ]
    }
  ],
  "work_01": [
    {
      id: "work_s6",
      chinese: "培养包容的企业文化可以显著提高员工的士气",
      english_full: "Cultivating an inclusive corporate culture can significantly boost employee morale.",
      words: [
        { word: "Cultivating" }, { word: "an" }, { word: "inclusive" }, { word: "corporate" }, { word: "culture" },
        { word: "can" }, { word: "significantly" }, { word: "boost" }, { word: "employee" }, { word: "morale", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ˈkʌltɪveɪtɪŋ/ /æn/ /ɪnˈkluːsɪv/ /ˈkɔːrpərət/ /ˈkʌltʃər/", translation: "培养一种包容的企业文化",
          subComponents: [{ startIndex: 0, words: [{ word: "Cultivating" }, { word: "an" }, { word: "inclusive" }, { word: "corporate" }, { word: "culture" }] }]
        },
        {
          start: 5, end: 7, label: "谓语", phonetic: "/kæn/ /sɪgˈnɪfɪkəntli/ /buːst/", translation: "可以显著提升",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "significantly" }] },
            { startIndex: 2, words: [{ word: "boost" }] }
          ]
        },
        {
          start: 8, end: 9, label: "宾语", phonetic: "/ɪmˈplɔɪiː/ /məˈrɑːl/", translation: "员工士气",
          subComponents: [{ startIndex: 0, words: [{ word: "employee" }, { word: "morale" }] }]
        }
      ],
      analysis: [
        { type: "职场词汇", text: "inclusive (包容的)；corporate culture (企业文化)；morale (士气，精神面貌)。" },
        { type: "语法重点", text: "动名词短语 Cultivating... 作为句子的主语。" }
      ]
    },
    {
      id: "work_s7",
      chinese: "在现代职场中，适应能力被认为是领导力的基石",
      english_full: "Adaptability is widely regarded as the cornerstone of leadership in the modern workplace.",
      words: [
        { word: "Adaptability" }, { word: "is" }, { word: "widely" }, { word: "regarded" }, { word: "as" },
        { word: "the" }, { word: "cornerstone" }, { word: "of" }, { word: "leadership" }, { word: "in" }, { word: "the" }, { word: "modern" }, { word: "workplace", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/əˌdæptəˈbɪlɪti/", translation: "适应能力",
          subComponents: [{ startIndex: 0, words: [{ word: "Adaptability" }] }]
        },
        {
          start: 1, end: 4, label: "谓语(被动)", phonetic: "/ɪz/ /ˈwaɪdli/ /rɪˈgɑːrdɪd/ /æz/", translation: "被广泛认为是",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }] },
            { startIndex: 1, words: [{ word: "widely" }] },
            { startIndex: 2, words: [{ word: "regarded" }, { word: "as" }] }
          ]
        },
        {
          start: 5, end: 8, label: "主语补足语", phonetic: "/ðə/ /ˈkɔːrnərstoʊn/ /ɒv/ /ˈliːdərʃɪp/", translation: "领导力的基石",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "cornerstone" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "leadership" }], label: "后置定语" }
          ]
        },
        {
          start: 9, end: 12, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ˈmɒdərn/ /ˈwɜːrkpleɪs/", translation: "在现代职场中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "modern" }, { word: "workplace" }] }]
        }
      ],
      analysis: [
        { type: "固定句型", text: "be regarded as... 意为“被看作是，被认为是”。" },
        { type: "高级隐喻", text: "cornerstone 原指建筑的基石，常用来比喻事物的“基础/最重要部分”。" }
      ]
    },
    {
      id: "work_s8",
      chinese: "定期的绩效评估为员工提供了宝贵的职业发展见解",
      english_full: "Regular performance appraisals provide employees with valuable insights for career progression.",
      words: [
        { word: "Regular" }, { word: "performance" }, { word: "appraisals" }, { word: "provide" }, { word: "employees" },
        { word: "with" }, { word: "valuable" }, { word: "insights" }, { word: "for" }, { word: "career" }, { word: "progression", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈrɛgjʊlər/ /pərˈfɔːrməns/ /əˈpreɪzəlz/", translation: "定期的绩效评估",
          subComponents: [{ startIndex: 0, words: [{ word: "Regular" }, { word: "performance" }, { word: "appraisals" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 4, end: 4, label: "间接宾语", phonetic: "/ɪmˈplɔɪiːz/", translation: "员工",
          subComponents: [{ startIndex: 0, words: [{ word: "employees" }] }]
        },
        {
          start: 5, end: 10, label: "直接宾语", phonetic: "/wɪð/ /ˈvæljuəbəl/ /ˈɪnsaɪts/ /fɔːr/ /kəˈrɪər/ /prəˈgrɛʃən/", translation: "用于职业发展的宝贵见解",
          subComponents: [
            { startIndex: 0, words: [{ word: "with" }, { word: "valuable" }, { word: "insights" }] },
            { startIndex: 3, words: [{ word: "for" }, { word: "career" }, { word: "progression" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "provide sb with sth (为某人提供某物)。" },
        { type: "职场术语", text: "performance appraisal (绩效评估/考核)；career progression (职业晋升/发展)。" }
      ]
    },
    {
      id: "work_s9",
      chinese: "该初创公司灵活的工作时间表有助于维持健康的员工工作与生活平衡",
      english_full: "The startup's flexible work schedules are conducive to maintaining a healthy work-life balance for its staff.",
      words: [
        { word: "The" }, { word: "startup's" }, { word: "flexible" }, { word: "work" }, { word: "schedules" },
        { word: "are" }, { word: "conducive" }, { word: "to" }, { word: "maintaining" }, { word: "a" }, { word: "healthy" }, { word: "work-life" }, { word: "balance" }, { word: "for" }, { word: "its" }, { word: "staff", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌps/ /ˈflɛksɪbəl/ /wɜːrk/ /ˈskɛdʒuːlz/", translation: "该初创公司灵活的工作时间表",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "startup's" }, { word: "flexible" }, { word: "work" }, { word: "schedules" }] }]
        },
        {
          start: 5, end: 5, label: "系动词", phonetic: "/ɑːr/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }] }]
        },
        {
          start: 6, end: 6, label: "表语", phonetic: "/kənˈdjuːsɪv/", translation: "有益的",
          subComponents: [{ startIndex: 0, words: [{ word: "conducive" }] }]
        },
        {
          start: 7, end: 15, label: "状语", phonetic: "/tuː/ /meɪnˈteɪnɪŋ/ /ə/ /ˈhɛlθi/ /wɜːrk/-/laɪf/ /ˈbæləns/ /fɔːr/ /ɪts/ /stæf/", translation: "对维持其员工健康的工作与生活平衡",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }] },
            { startIndex: 1, words: [{ word: "maintaining" }, { word: "a" }, { word: "healthy" }, { word: "work-life" }, { word: "balance" }], label: "介词宾语" },
            { startIndex: 6, words: [{ word: "for" }, { word: "its" }, { word: "staff" }], label: "状语" }
          ]
        }
      ],
      analysis: [
        { type: "高级搭配", text: "be conducive to (有助于，对...有益)，其中 to 是介词，后接动名词 maintaining。" },
        { type: "职场热词", text: "work-life balance (工作与生活平衡) 是讨论职场时的必背词汇。" }
      ]
    },
    {
      id: "work_s10",
      chinese: "将重复性任务外包给专门的机构可以提高运营效率",
      english_full: "Outsourcing repetitive tasks to specialized agencies can enhance operational efficiency.",
      words: [
        { word: "Outsourcing" }, { word: "repetitive" }, { word: "tasks" }, { word: "to" }, { word: "specialized" }, { word: "agencies" },
        { word: "can" }, { word: "enhance" }, { word: "operational" }, { word: "efficiency", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ˈaʊtsɔːrsɪŋ/ /rɪˈpɛtɪtɪv/ /tæsks/ /tuː/ /ˈspɛʃəlaɪzd/ /ˈeɪdʒənsiz/", translation: "将重复性任务外包给专业机构",
          subComponents: [
            { startIndex: 0, words: [{ word: "Outsourcing" }] },
            { startIndex: 1, words: [{ word: "repetitive" }, { word: "tasks" }], label: "宾语" },
            { startIndex: 3, words: [{ word: "to" }, { word: "specialized" }, { word: "agencies" }], label: "状语" }
          ]
        },
        {
          start: 6, end: 7, label: "谓语", phonetic: "/kæn/ /ɪnˈhæns/", translation: "可以提高",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "enhance" }] }
          ]
        },
        {
          start: 8, end: 9, label: "宾语", phonetic: "/ˌɒpəˈreɪʃənəl/ /ɪˈfɪʃənsi/", translation: "运营效率",
          subComponents: [{ startIndex: 0, words: [{ word: "operational" }, { word: "efficiency" }] }]
        }
      ],
      analysis: [
        { type: "商务术语", text: "outsourcing (外包)；operational efficiency (运营/运作效率)。" },
        { type: "同义替换", text: "enhance 替换 improve；repetitive tasks 指重复性的劳动。" }
      ]
    }
  ],
  "art_01": [
    {
      id: "art_s6",
      chinese: "抽象艺术通常依靠形状和颜色而不是写实的表现来传达情感",
      english_full: "Abstract art often relies on shapes and colors rather than realistic representations to convey emotions.",
      words: [
        { word: "Abstract" }, { word: "art" }, { word: "often" }, { word: "relies" }, { word: "on" }, { word: "shapes" }, { word: "and" }, { word: "colors" },
        { word: "rather" }, { word: "than" }, { word: "realistic" }, { word: "representations" }, { word: "to" }, { word: "convey" }, { word: "emotions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈæbstrækt/ /ɑːrt/", translation: "抽象艺术",
          subComponents: [{ startIndex: 0, words: [{ word: "Abstract" }, { word: "art" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ˈɒfən/ /rɪˈlaɪz/", translation: "经常依靠",
          subComponents: [
            { startIndex: 0, words: [{ word: "often" }], label: "状语" },
            { startIndex: 1, words: [{ word: "relies" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 11, label: "宾语/状语", phonetic: "/ɒn/ /ʃeɪps/ /ænd/ /ˈkʌlərz/ /ˈræðər/ /ðæn/ /riəˈlɪstɪk/ /ˌrɛprɪzɛnˈteɪʃənz/", translation: "依靠形状和颜色而不是写实的表现",
          subComponents: [
            { startIndex: 0, words: [{ word: "on" }] },
            { startIndex: 1, words: [{ word: "shapes" }, { word: "and" }, { word: "colors" }], label: "介词宾语1" },
            { startIndex: 4, words: [{ word: "rather" }, { word: "than" }], label: "并列连词" },
            { startIndex: 6, words: [{ word: "realistic" }, { word: "representations" }], label: "介词宾语2" }
          ]
        },
        {
          start: 12, end: 14, label: "目的状语", phonetic: "/tuː/ /kənˈveɪ/ /ɪˈmoʊʃənz/", translation: "去传达情感",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "convey" }, { word: "emotions" }] }]
        }
      ],
      analysis: [
        { type: "艺术词汇", text: "abstract art (抽象艺术)；realistic representations (写实/逼真的表现形式)。" },
        { type: "句式连词", text: "rather than 连接两个平行的成分，表示“而不是”。" }
      ]
    },
    {
      id: "art_s7",
      chinese: "这部电影探讨了人类在压迫制度下的生存韧性",
      english_full: "The film explores the resilience of human survival under an oppressive regime.",
      words: [
        { word: "The" }, { word: "film" }, { word: "explores" }, { word: "the" }, { word: "resilience" }, { word: "of" }, { word: "human" }, { word: "survival" },
        { word: "under" }, { word: "an" }, { word: "oppressive" }, { word: "regime", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /fɪlm/", translation: "这部电影",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "film" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪkˈsplɔːrz/", translation: "探讨",
          subComponents: [{ startIndex: 0, words: [{ word: "explores" }] }]
        },
        {
          start: 3, end: 7, label: "宾语", phonetic: "/ðə/ /rɪˈzɪliəns/ /ɒv/ /ˈhjuːmən/ /sərˈvaɪvəl/", translation: "人类生存的韧性",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "resilience" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "human" }, { word: "survival" }], label: "后置定语" }
          ]
        },
        {
          start: 8, end: 11, label: "地点状语", phonetic: "/ˈʌndər/ /æn/ /əˈprɛsɪv/ /rɛˈʒiːm/", translation: "在压迫制度下",
          subComponents: [{ startIndex: 0, words: [{ word: "under" }, { word: "an" }, { word: "oppressive" }, { word: "regime" }] }]
        }
      ],
      analysis: [
        { type: "文艺批判", text: "resilience (韧性，恢复力) 是描述人物精神品质的极高级词汇。" },
        { type: "背景词汇", text: "oppressive regime (压迫性的政权/制度)。" }
      ]
    },
    {
      id: "art_s8",
      chinese: "文艺复兴时期的绘画常常以对光线和透视的细致运用为特点",
      english_full: "Renaissance paintings are frequently characterized by their meticulous use of light and perspective.",
      words: [
        { word: "Renaissance" }, { word: "paintings" }, { word: "are" }, { word: "frequently" }, { word: "characterized" }, { word: "by" },
        { word: "their" }, { word: "meticulous" }, { word: "use" }, { word: "of" }, { word: "light" }, { word: "and" }, { word: "perspective", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/rɪˈneɪsəns/ /ˈpeɪntɪŋz/", translation: "文艺复兴时期的绘画",
          subComponents: [{ startIndex: 0, words: [{ word: "Renaissance" }, { word: "paintings" }] }]
        },
        {
          start: 2, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /ˈfriːkwəntli/ /ˈkærəktəraɪzd/", translation: "经常被特征化",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "frequently" }] },
            { startIndex: 2, words: [{ word: "characterized" }] }
          ]
        },
        {
          start: 5, end: 12, label: "状语", phonetic: "/baɪ/ /ðɛər/ /məˈtɪkjələs/ /juːs/ /ɒv/ /laɪt/ /ænd/ /pərˈspɛktɪv/", translation: "凭借其对光线和透视的细致运用",
          subComponents: [
            { startIndex: 0, words: [{ word: "by" }] },
            { startIndex: 1, words: [{ word: "their" }, { word: "meticulous" }, { word: "use" }], label: "介词宾语" },
            { startIndex: 4, words: [{ word: "of" }, { word: "light" }, { word: "and" }, { word: "perspective" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "固定句型", text: "be characterized by... 意为“以...为特征”，是学术描述的高频表达。" },
        { type: "美术词汇", text: "meticulous (一丝不苟的，细致的)；perspective (透视法)。" }
      ]
    },
    {
      id: "art_s9",
      chinese: "通过文学跨越文化障碍能够培养全球同理心",
      english_full: "Bridging cultural barriers through literature can cultivate global empathy.",
      words: [
        { word: "Bridging" }, { word: "cultural" }, { word: "barriers" }, { word: "through" }, { word: "literature" },
        { word: "can" }, { word: "cultivate" }, { word: "global" }, { word: "empathy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ˈbrɪdʒɪŋ/ /ˈkʌltʃərəl/ /ˈbæriərz/ /θruː/ /ˈlɪtərətʃər/", translation: "通过文学跨越文化障碍",
          subComponents: [
            { startIndex: 0, words: [{ word: "Bridging" }, { word: "cultural" }, { word: "barriers" }] },
            { startIndex: 3, words: [{ word: "through" }, { word: "literature" }], label: "方式状语" }
          ]
        },
        {
          start: 5, end: 6, label: "谓语", phonetic: "/kæn/ /ˈkʌltɪveɪt/", translation: "能够培养",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "cultivate" }] }
          ]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ˈgloʊbəl/ /ˈɛmpəθi/", translation: "全球同理心",
          subComponents: [{ startIndex: 0, words: [{ word: "global" }, { word: "empathy" }] }]
        }
      ],
      analysis: [
        { type: "高级搭配", text: "bridge a barrier / gap 意为“消除隔阂，跨越障碍”，bridge 这里作动词使用。" },
        { type: "情感词汇", text: "empathy 意为“同理心，共鸣”，相比 sympathy (同情) 层次更深。" }
      ]
    },
    {
      id: "art_s10",
      chinese: "在现代建筑中保护历史遗迹需要精细的平衡",
      english_full: "Preserving historical monuments amidst modern architecture requires a delicate balance.",
      words: [
        { word: "Preserving" }, { word: "historical" }, { word: "monuments" }, { word: "amidst" }, { word: "modern" }, { word: "architecture" },
        { word: "requires" }, { word: "a" }, { word: "delicate" }, { word: "balance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/prɪˈzɜːrvɪŋ/ /hɪˈstɒrɪkəl/ /ˈmɒnjʊmənts/ /əˈmɪdst/ /ˈmɒdərn/ /ˈɑːrkɪtɛktʃər/", translation: "在现代建筑中保护历史遗迹",
          subComponents: [
            { startIndex: 0, words: [{ word: "Preserving" }, { word: "historical" }, { word: "monuments" }] },
            { startIndex: 3, words: [{ word: "amidst" }, { word: "modern" }, { word: "architecture" }], label: "环境状语" }
          ]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "需要",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }] }]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/ə/ /ˈdɛlɪkət/ /ˈbæləns/", translation: "精细的平衡",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "delicate" }, { word: "balance" }] }]
        }
      ],
      analysis: [
        { type: "介词用法", text: "amidst (在...之中) 比 in/among 更正式，常用于描述被包围的环境。" },
        { type: "搭配解析", text: "a delicate balance (微妙/精细的平衡)；historical monuments (历史遗迹)。" }
      ]
    }
  ]
};
