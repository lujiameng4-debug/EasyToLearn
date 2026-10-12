export const extensions = {
  "module_basic": [
    {
      id: "q_basic_s300",
      chinese: "由于预期寿命的增加，全球人口正在迅速老龄化",
      english_full: "The global population is aging rapidly due to increased life expectancy.",
      words: [
        { word: "The" }, { word: "global" }, { word: "population" }, { word: "is" }, { word: "aging" },
        { word: "rapidly" }, { word: "due" }, { word: "to" }, { word: "increased" }, { word: "life" }, { word: "expectancy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈgloʊbəl/ /ˌpɒpjʊˈleɪʃən/", translation: "全球人口",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "global" }, { word: "population" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ɪz/ /ˈeɪdʒɪŋ/", translation: "正在老龄化",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "aging" }] }]
        },
        {
          start: 5, end: 5, label: "状语", phonetic: "/ˈræpɪdli/", translation: "迅速地",
          subComponents: [{ startIndex: 0, words: [{ word: "rapidly" }] }]
        },
        {
          start: 6, end: 10, label: "原因状语", phonetic: "/djuː/ /tuː/ /ɪnˈkriːst/ /laɪf/ /ɪkˈspɛktənsi/", translation: "由于增加的预期寿命",
          subComponents: [{ startIndex: 0, words: [{ word: "due" }, { word: "to" }, { word: "increased" }, { word: "life" }, { word: "expectancy", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "这是一个主谓结构的句子，后接原因状语。" }
      ]
    },
    {
      id: "q_basic_s301",
      chinese: "在整个十年间，城市化率在发展中经济体显著加速",
      english_full: "Urbanization rates accelerated markedly in developing economies throughout the decade.",
      words: [
        { word: "Urbanization" }, { word: "rates" }, { word: "accelerated" }, { word: "markedly" },
        { word: "in" }, { word: "developing" }, { word: "economies" }, { word: "throughout" }, { word: "the" }, { word: "decade", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɜːrbənɪˈzeɪʃən/ /reɪts/", translation: "城市化率",
          subComponents: [{ startIndex: 0, words: [{ word: "Urbanization" }, { word: "rates" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əkˈsɛləreɪtɪd/", translation: "加速",
          subComponents: [{ startIndex: 0, words: [{ word: "accelerated" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈmɑːrkɪdli/", translation: "显著地",
          subComponents: [{ startIndex: 0, words: [{ word: "markedly" }] }]
        },
        {
          start: 4, end: 6, label: "地点状语", phonetic: "/ɪn/ /dɪˈvɛləpɪŋ/ /ɪˈkɒnəmiz/", translation: "在发展中经济体",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "developing" }, { word: "economies" }] }]
        },
        {
          start: 7, end: 9, label: "时间状语", phonetic: "/θruːˈaʊt/ /ðə/ /ˈdɛkeɪd/", translation: "在整个十年期间",
          subComponents: [{ startIndex: 0, words: [{ word: "throughout" }, { word: "the" }, { word: "decade", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，accelerate 为不及物动词，markedly 作方式状语修饰谓语。" }
      ]
    },
    {
      id: "q_basic_s302",
      chinese: "领土争端之后，地缘政治紧张局势急剧升级",
      english_full: "Geopolitical tensions escalated sharply following the territorial dispute.",
      words: [
        { word: "Geopolitical" }, { word: "tensions" }, { word: "escalated" }, { word: "sharply" },
        { word: "following" }, { word: "the" }, { word: "territorial" }, { word: "dispute", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌdʒiːoʊpəˈlɪtɪkəl/ /ˈtɛnʃənz/", translation: "地缘政治紧张局势",
          subComponents: [{ startIndex: 0, words: [{ word: "Geopolitical" }, { word: "tensions" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɛskəleɪtɪd/", translation: "升级",
          subComponents: [{ startIndex: 0, words: [{ word: "escalated" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈʃɑːrpli/", translation: "急剧地",
          subComponents: [{ startIndex: 0, words: [{ word: "sharply" }] }]
        },
        {
          start: 4, end: 7, label: "时间状语", phonetic: "/ˈfɒləʊɪŋ/ /ðə/ /ˌtɛrɪˈtɔːriəl/ /dɪsˈpjuːt/", translation: "在领土争端之后",
          subComponents: [{ startIndex: 0, words: [{ word: "following" }, { word: "the" }, { word: "territorial" }, { word: "dispute", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，escalate 为不及物动词，following 引导的时间状语说明升级的背景。" }
      ]
    },
    {
      id: "q_basic_s303",
      chinese: "在全球贸易中断的背景下，宏观经济前景显得愈发不确定",
      english_full: "The macroeconomic outlook appears increasingly uncertain amid global trade disruptions.",
      words: [
        { word: "The" }, { word: "macroeconomic" }, { word: "outlook" }, { word: "appears" }, { word: "increasingly" },
        { word: "uncertain" }, { word: "amid" }, { word: "global" }, { word: "trade" }, { word: "disruptions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌmækroʊˌiːkəˈnɒmɪk/ /ˈaʊtlʊk/", translation: "宏观经济前景",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "macroeconomic" }, { word: "outlook" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/əˈpɪərz/", translation: "显得",
          subComponents: [{ startIndex: 0, words: [{ word: "appears" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/ɪnˈkriːsɪŋli/ /ʌnˈsɜːrtən/", translation: "愈发不确定的",
          subComponents: [{ startIndex: 0, words: [{ word: "increasingly" }, { word: "uncertain" }] }]
        },
        {
          start: 6, end: 9, label: "背景状语", phonetic: "/əˈmɪd/ /ˈgloʊbəl/ /treɪd/ /dɪsˈrʌpʃənz/", translation: "在全球贸易中断的背景下",
          subComponents: [{ startIndex: 0, words: [{ word: "amid" }, { word: "global" }, { word: "trade" }, { word: "disruptions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，appear 作系动词，increasingly uncertain 为复合表语。" }
      ]
    },
    {
      id: "q_basic_s304",
      chinese: "碳中和目标仍然雄心勃勃，但在足够的政治意愿下是可以实现的",
      english_full: "Carbon neutrality targets remain ambitious yet achievable with sufficient political will.",
      words: [
        { word: "Carbon" }, { word: "neutrality" }, { word: "targets" }, { word: "remain" }, { word: "ambitious" },
        { word: "yet" }, { word: "achievable" }, { word: "with" }, { word: "sufficient" }, { word: "political" }, { word: "will", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkɑːrbən/ /njuːˈtrælɪti/ /ˈtɑːrgɪts/", translation: "碳中和目标",
          subComponents: [{ startIndex: 0, words: [{ word: "Carbon" }, { word: "neutrality" }, { word: "targets" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/rɪˈmeɪn/", translation: "仍然保持",
          subComponents: [{ startIndex: 0, words: [{ word: "remain" }] }]
        },
        {
          start: 4, end: 6, label: "表语", phonetic: "/æmˈbɪʃəs/ /jet/ /əˈtʃiːvəbəl/", translation: "雄心勃勃但可实现的",
          subComponents: [{ startIndex: 0, words: [{ word: "ambitious" }, { word: "yet" }, { word: "achievable" }] }]
        },
        {
          start: 7, end: 10, label: "条件状语", phonetic: "/wɪð/ /səˈfɪʃənt/ /pəˈlɪtɪkəl/ /wɪl/", translation: "在足够的政治意愿下",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "sufficient" }, { word: "political" }, { word: "will", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，remain 作系动词，ambitious yet achievable 为并列复合表语。" }
      ]
    },
    {
      id: "q_basic_s305",
      chinese: "知识产权纠纷在跨境诉讼中显得尤为复杂",
      english_full: "Intellectual property disputes prove particularly complex in cross-border litigation.",
      words: [
        { word: "Intellectual" }, { word: "property" }, { word: "disputes" }, { word: "prove" }, { word: "particularly" },
        { word: "complex" }, { word: "in" }, { word: "cross-border" }, { word: "litigation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌɪntəˈlɛktʃuəl/ /ˈprɒpərti/ /dɪsˈpjuːts/", translation: "知识产权纠纷",
          subComponents: [{ startIndex: 0, words: [{ word: "Intellectual" }, { word: "property" }, { word: "disputes" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/pruːv/", translation: "显得/结果是",
          subComponents: [{ startIndex: 0, words: [{ word: "prove" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/pərˈtɪkjələrli/ /ˈkɒmplɛks/", translation: "尤为复杂的",
          subComponents: [{ startIndex: 0, words: [{ word: "particularly" }, { word: "complex" }] }]
        },
        {
          start: 6, end: 8, label: "地点状语", phonetic: "/ɪn/ /krɒs ˈbɔːrdər/ /ˌlɪtɪˈɡeɪʃən/", translation: "在跨境诉讼中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "cross-border" }, { word: "litigation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，prove 在此作系动词，particularly complex 为复合表语。" }
      ]
    },
    {
      id: "q_basic_s306",
      chinese: "央行为遏制持续通胀提高了基准利率",
      english_full: "The central bank raised benchmark interest rates to curb persistent inflation.",
      words: [
        { word: "The" }, { word: "central" }, { word: "bank" }, { word: "raised" }, { word: "benchmark" },
        { word: "interest" }, { word: "rates" }, { word: "to" }, { word: "curb" }, { word: "persistent" }, { word: "inflation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /bæŋk/", translation: "央行",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "central" }, { word: "bank" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/reɪzd/", translation: "提高",
          subComponents: [{ startIndex: 0, words: [{ word: "raised" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˈbɛntʃmɑːrk/ /ˈɪntrəst/ /reɪts/", translation: "基准利率",
          subComponents: [{ startIndex: 0, words: [{ word: "benchmark" }, { word: "interest" }, { word: "rates" }] }]
        },
        {
          start: 7, end: 10, label: "目的状语", phonetic: "/tuː/ /kɜːrb/ /pərˈsɪstənt/ /ɪnˈfleɪʃən/", translation: "以遏制持续通胀",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "curb" }, { word: "persistent" }, { word: "inflation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，raise 为及物动词，interest rates 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s307",
      chinese: "研究人员验证了基因治疗干预的临床疗效",
      english_full: "Researchers demonstrated the clinical efficacy of the gene therapy intervention.",
      words: [
        { word: "Researchers" }, { word: "demonstrated" }, { word: "the" }, { word: "clinical" }, { word: "efficacy" },
        { word: "of" }, { word: "the" }, { word: "gene" }, { word: "therapy" }, { word: "intervention", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/rɪˈsɜːrtʃərz/", translation: "研究人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Researchers" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ˈdɛmənstreɪtɪd/", translation: "验证",
          subComponents: [{ startIndex: 0, words: [{ word: "demonstrated" }] }]
        },
        {
          start: 2, end: 9, label: "宾语", phonetic: "/ðə/ /ˈklɪnɪkəl/ /ˈɛfɪkəsi/ /ɒv/ /ðə/ /dʒiːn/ /ˈθɛrəpi/ /ˌɪntərˈvɛnʃən/", translation: "基因治疗干预的临床疗效",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "clinical" }, { word: "efficacy" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "the" }, { word: "gene" }, { word: "therapy" }, { word: "intervention", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，demonstrate 为及物动词，efficacy 作宾语核心。" }
      ]
    },
    {
      id: "q_basic_s308",
      chinese: "立法机构上个月通过了全面的数据保护立法",
      english_full: "The legislature passed comprehensive data protection legislation last month.",
      words: [
        { word: "The" }, { word: "legislature" }, { word: "passed" }, { word: "comprehensive" }, { word: "data" },
        { word: "protection" }, { word: "legislation" }, { word: "last" }, { word: "month", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈlɛdʒɪsleɪtʃər/", translation: "立法机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "legislature" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/pæst/", translation: "通过",
          subComponents: [{ startIndex: 0, words: [{ word: "passed" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ˌkɒmprɪˈhɛnsɪv/ /ˈdeɪtə/ /prəˈtɛkʃən/ /ˌlɛdʒɪsˈleɪʃən/", translation: "全面的数据保护立法",
          subComponents: [{ startIndex: 0, words: [{ word: "comprehensive" }, { word: "data" }, { word: "protection" }, { word: "legislation" }] }]
        },
        {
          start: 7, end: 8, label: "时间状语", phonetic: "/læst/ /mʌnθ/", translation: "上个月",
          subComponents: [{ startIndex: 0, words: [{ word: "last" }, { word: "month", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，pass 为及物动词，legislation 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s309",
      chinese: "该基金会向这位先驱科学家颁发了一项享有盛誉的国际科研奖项",
      english_full: "The foundation awarded the pioneering scientist a prestigious international research prize.",
      words: [
        { word: "The" }, { word: "foundation" }, { word: "awarded" }, { word: "the" }, { word: "pioneering" },
        { word: "scientist" }, { word: "a" }, { word: "prestigious" }, { word: "international" }, { word: "research" }, { word: "prize", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /faʊnˈdeɪʃən/", translation: "该基金会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "foundation" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈwɔːrdɪd/", translation: "颁发",
          subComponents: [{ startIndex: 0, words: [{ word: "awarded" }] }]
        },
        {
          start: 3, end: 5, label: "间接宾语", phonetic: "/ðə/ /ˌpaɪəˈnɪərɪŋ/ /ˈsaɪəntɪst/", translation: "这位先驱科学家",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "pioneering" }, { word: "scientist" }] }]
        },
        {
          start: 6, end: 10, label: "直接宾语", phonetic: "/ə/ /prɛˈstɪdʒəs/ /ˌɪntərˈnæʃənəl/ /rɪˈsɜːrtʃ/ /praɪz/", translation: "一项享有盛誉的国际科研奖项",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "prestigious" }, { word: "international" }, { word: "research" }, { word: "prize", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，award sb sth 中 scientist 为间接宾语，prize 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s310",
      chinese: "该机构向成员国发送了有关减排的详细指导方针",
      english_full: "The agency sent member states detailed guidelines on emissions reduction.",
      words: [
        { word: "The" }, { word: "agency" }, { word: "sent" }, { word: "member" }, { word: "states" },
        { word: "detailed" }, { word: "guidelines" }, { word: "on" }, { word: "emissions" }, { word: "reduction", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈeɪdʒənsi/", translation: "该机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "agency" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/sɛnt/", translation: "发送",
          subComponents: [{ startIndex: 0, words: [{ word: "sent" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/ˈmɛmbər/ /steɪts/", translation: "成员国",
          subComponents: [{ startIndex: 0, words: [{ word: "member" }, { word: "states" }] }]
        },
        {
          start: 5, end: 9, label: "直接宾语", phonetic: "/ˈdiːteɪld/ /ˈgaɪdlaɪnz/ /ɒn/ /ɪˈmɪʃənz/ /rɪˈdʌkʃən/", translation: "有关减排的详细指导方针",
          subComponents: [
            { startIndex: 0, words: [{ word: "detailed" }, { word: "guidelines" }] },
            { startIndex: 2, words: [{ word: "on" }, { word: "emissions" }, { word: "reduction", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，send sb sth 中 member states 为间接宾语，guidelines 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s311",
      chinese: "这家跨国企业向其核心供应商提供了延长的付款条件",
      english_full: "The multinational corporation offered its key suppliers extended payment terms.",
      words: [
        { word: "The" }, { word: "multinational" }, { word: "corporation" }, { word: "offered" }, { word: "its" },
        { word: "key" }, { word: "suppliers" }, { word: "extended" }, { word: "payment" }, { word: "terms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃən/", translation: "这家跨国企业",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "multinational" }, { word: "corporation" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offered" }] }]
        },
        {
          start: 4, end: 6, label: "间接宾语", phonetic: "/ɪts/ /kiː/ /səˈplaɪərz/", translation: "其核心供应商",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "key" }, { word: "suppliers" }] }]
        },
        {
          start: 7, end: 9, label: "直接宾语", phonetic: "/ɪkˈstɛndɪd/ /ˈpeɪmənt/ /tɜːrmz/", translation: "延长的付款条件",
          subComponents: [{ startIndex: 0, words: [{ word: "extended" }, { word: "payment" }, { word: "terms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，offer sb sth 中 suppliers 为间接宾语，terms 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s312",
      chinese: "陪审团认定被告犯有企业欺诈罪",
      english_full: "The jury found the defendant guilty of corporate fraud.",
      words: [
        { word: "The" }, { word: "jury" }, { word: "found" }, { word: "the" }, { word: "defendant" },
        { word: "guilty" }, { word: "of" }, { word: "corporate" }, { word: "fraud", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈdʒʊəri/", translation: "陪审团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "jury" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/faʊnd/", translation: "认定",
          subComponents: [{ startIndex: 0, words: [{ word: "found" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /dɪˈfɛndənt/", translation: "被告",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "defendant" }] }]
        },
        {
          start: 5, end: 8, label: "宾语补足语", phonetic: "/ˈgɪlti/ /ɒv/ /ˈkɔːrpərət/ /frɔːd/", translation: "犯有企业欺诈罪的",
          subComponents: [
            { startIndex: 0, words: [{ word: "guilty" }] },
            { startIndex: 1, words: [{ word: "of" }, { word: "corporate" }, { word: "fraud", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，find sb guilty of sth 中 guilty of corporate fraud 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s313",
      chinese: "分析师认为拟议的合并与反垄断原则在结构上不相容",
      english_full: "Analysts consider the proposed merger structurally incompatible with antitrust principles.",
      words: [
        { word: "Analysts" }, { word: "consider" }, { word: "the" }, { word: "proposed" }, { word: "merger" },
        { word: "structurally" }, { word: "incompatible" }, { word: "with" }, { word: "antitrust" }, { word: "principles", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈænəlɪsts/", translation: "分析师",
          subComponents: [{ startIndex: 0, words: [{ word: "Analysts" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/kənˈsɪdər/", translation: "认为",
          subComponents: [{ startIndex: 0, words: [{ word: "consider" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /prəˈpoʊzd/ /ˈmɜːrdʒər/", translation: "拟议的合并",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "proposed" }, { word: "merger" }] }]
        },
        {
          start: 5, end: 9, label: "宾语补足语", phonetic: "/ˈstrʌktʃərəli/ /ˌɪnkəmˈpætəbəl/ /wɪð/ /ˈæntiˌtrʌst/ /ˈprɪnsəpəlz/", translation: "与反垄断原则在结构上不相容的",
          subComponents: [
            { startIndex: 0, words: [{ word: "structurally" }, { word: "incompatible" }] },
            { startIndex: 2, words: [{ word: "with" }, { word: "antitrust" }, { word: "principles", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，consider sth adj. 中 structurally incompatible 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s314",
      chinese: "监管机构使许可要求变得过于严格",
      english_full: "Regulators rendered the licensing requirements excessively stringent.",
      words: [
        { word: "Regulators" }, { word: "rendered" }, { word: "the" }, { word: "licensing" }, { word: "requirements" },
        { word: "excessively" }, { word: "stringent", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈrɛgjʊleɪtərz/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "Regulators" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ˈrɛndərd/", translation: "使变得",
          subComponents: [{ startIndex: 0, words: [{ word: "rendered" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /ˈlaɪsənsɪŋ/ /rɪˈkwaɪərmənts/", translation: "许可要求",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "licensing" }, { word: "requirements" }] }]
        },
        {
          start: 5, end: 6, label: "宾语补足语", phonetic: "/ɪkˈsɛsɪvli/ /ˈstrɪndʒənt/", translation: "过于严格的",
          subComponents: [{ startIndex: 0, words: [{ word: "excessively" }, { word: "stringent", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，render sth adj. 中 excessively stringent 为复合宾补。" }
      ]
    }
  ]
};
