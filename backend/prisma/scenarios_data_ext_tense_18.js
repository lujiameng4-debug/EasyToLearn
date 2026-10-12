export const extensions = {
  "module_tense": [
    {
      id: "q_tense_s300",
      chinese: "监管机构已就人工智能部署发布了新指南",
      english_full: "The regulatory agency has issued new guidelines on artificial intelligence deployment.",
      words: [
        { word: "The" }, { word: "regulatory" }, { word: "agency" }, { word: "has" }, { word: "issued" },
        { word: "new" }, { word: "guidelines" }, { word: "on" }, { word: "artificial" }, { word: "intelligence" }, { word: "deployment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛgjələtɔːri/ /ˈeɪdʒənsi/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "regulatory" }, { word: "agency" }] }]
        },
        {
          start: 3, end: 4, label: "谓语 (现在完成时)", phonetic: "/hæz/ /ˈɪʃuːd/", translation: "已发布",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "issued" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/nuː/ /ˈgaɪdlaɪnz/", translation: "新指南",
          subComponents: [{ startIndex: 0, words: [{ word: "new" }, { word: "guidelines" }] }]
        },
        {
          start: 7, end: 10, label: "后置定语", phonetic: "/ɒn/ /ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/ /dɪˈplɔɪmənt/", translation: "关于人工智能部署",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "artificial" }, { word: "intelligence" }, { word: "deployment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has issued 表示指南已经发布且现行有效，强调对当下的规制影响。" },
        { type: "科技政策", text: "artificial intelligence deployment (人工智能部署) 是 AI 治理领域的核心议题。" }
      ]
    },
    {
      id: "q_tense_s301",
      chinese: "多边论坛通常在年度峰会上讨论与气候相关的流离失所问题",
      english_full: "Multilateral forums routinely address climate-related displacement at annual summits.",
      words: [
        { word: "Multilateral" }, { word: "forums" }, { word: "routinely" }, { word: "address" },
        { word: "climate-related" }, { word: "displacement" }, { word: "at" }, { word: "annual" }, { word: "summits", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌmʌltiˈlætərəl/ /ˈfɔːrəmz/", translation: "多边论坛",
          subComponents: [{ startIndex: 0, words: [{ word: "Multilateral" }, { word: "forums" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ruːˈtiːnli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "routinely" }] }]
        },
        {
          start: 3, end: 3, label: "谓语 (一般现在时)", phonetic: "/əˈdrɛs/", translation: "讨论",
          subComponents: [{ startIndex: 0, words: [{ word: "address" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈklaɪmət rɪˈleɪtɪd/ /dɪsˈpleɪsmənt/", translation: "与气候相关的流离失所问题",
          subComponents: [{ startIndex: 0, words: [{ word: "climate-related" }, { word: "displacement" }] }]
        },
        {
          start: 6, end: 8, label: "地点状语", phonetic: "/æt/ /ˈænjuəl/ /ˈsʌmɪts/", translation: "在年度峰会上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "annual" }, { word: "summits", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "address 用一般现在时描述多边论坛的常规议程与反复出现的议题。" },
        { type: "气候议题", text: "climate-related displacement (气候相关流离失所) 是联合国气候谈判的高频词汇。" }
      ]
    },
    {
      id: "q_tense_s302",
      chinese: "这家制药公司上周获得了其突破性疗法的监管批准",
      english_full: "The pharmaceutical company secured regulatory approval for its breakthrough therapy last week.",
      words: [
        { word: "The" }, { word: "pharmaceutical" }, { word: "company" }, { word: "secured" },
        { word: "regulatory" }, { word: "approval" }, { word: "for" }, { word: "its" }, { word: "breakthrough" }, { word: "therapy" },
        { word: "last" }, { word: "week", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌfɑːrməˈsuːtɪkəl/ /ˈkʌmpəni/", translation: "这家制药公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pharmaceutical" }, { word: "company" }] }]
        },
        {
          start: 3, end: 3, label: "谓语 (一般过去时)", phonetic: "/sɪˈkjʊrd/", translation: "获得了",
          subComponents: [{ startIndex: 0, words: [{ word: "secured" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ˈrɛgjələtɔːri/ /əˈpruːvəl/ /fɔːr/ /ɪts/ /ˈbreɪkθruː/ /ˈθɛrəpi/", translation: "其突破性疗法的监管批准",
          subComponents: [
            { startIndex: 0, words: [{ word: "regulatory" }, { word: "approval" }] },
            { startIndex: 2, words: [{ word: "for" }, { word: "its" }, { word: "breakthrough" }, { word: "therapy" }] }
          ]
        },
        {
          start: 10, end: 11, label: "时间状语", phonetic: "/læst/ /wiːk/", translation: "上周",
          subComponents: [{ startIndex: 0, words: [{ word: "last" }, { word: "week", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般过去时", text: "secured 配合 last week 表示上周某一时间点完成的单一动作。" },
        { type: "医药术语", text: "regulatory approval (监管批准)；breakthrough therapy (突破性疗法)。" }
      ]
    },
    {
      id: "q_tense_s303",
      chinese: "央行将在明天的新闻发布会上公布利率决议",
      english_full: "The central bank will announce its interest rate decision at tomorrow's press conference.",
      words: [
        { word: "The" }, { word: "central" }, { word: "bank" }, { word: "will" }, { word: "announce" },
        { word: "its" }, { word: "interest" }, { word: "rate" }, { word: "decision" }, { word: "at" },
        { word: "tomorrow's" }, { word: "press" }, { word: "conference", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /bæŋk/", translation: "央行",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "central" }, { word: "bank" }] }]
        },
        {
          start: 3, end: 4, label: "谓语 (一般将来时)", phonetic: "/wɪl/ /əˈnaʊns/", translation: "将公布",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "announce" }], label: "实义动词" }
          ]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ɪts/ /ˈɪntrəst/ /reɪt/ /dɪˈsɪʒən/", translation: "其利率决议",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "interest" }, { word: "rate" }, { word: "decision" }] }]
        },
        {
          start: 9, end: 12, label: "地点/时间状语", phonetic: "/æt/ /təˈmɒroʊz/ /prɛs/ /ˈkɒnfərəns/", translation: "在明天的新闻发布会上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "tomorrow's" }, { word: "press" }, { word: "conference", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般将来时", text: "will announce 表示已排定的未来发布动作，常见于央行政策沟通。" },
        { type: "金融术语", text: "interest rate decision (利率决议) 是货币政策声明的标准表述。" }
      ]
    },
    {
      id: "q_tense_s304",
      chinese: "在全球供应链中断之际，经济学家正在密切监测通胀指标",
      english_full: "Economists are closely monitoring inflation indicators amid global supply chain disruptions.",
      words: [
        { word: "Economists" }, { word: "are" }, { word: "closely" }, { word: "monitoring" },
        { word: "inflation" }, { word: "indicators" }, { word: "amid" }, { word: "global" }, { word: "supply" }, { word: "chain" }, { word: "disruptions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ɪˈkɒnəmɪsts/", translation: "经济学家",
          subComponents: [{ startIndex: 0, words: [{ word: "Economists" }] }]
        },
        {
          start: 1, end: 3, label: "谓语 (现在进行时)", phonetic: "/ɑːr/ /ˈkloʊsli/ /ˈmɒnɪtərɪŋ/", translation: "正在密切监测",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "closely" }], label: "方式状语" },
            { startIndex: 2, words: [{ word: "monitoring" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ɪnˈfleɪʃən/ /ˈɪndɪkeɪtərz/", translation: "通胀指标",
          subComponents: [{ startIndex: 0, words: [{ word: "inflation" }, { word: "indicators" }] }]
        },
        {
          start: 6, end: 10, label: "背景状语", phonetic: "/əˈmɪd/ /ˈgləʊbəl/ /səˈplaɪ/ /tʃeɪn/ /dɪsˈrʌpʃənz/", translation: "在全球供应链中断之际",
          subComponents: [{ startIndex: 0, words: [{ word: "amid" }, { word: "global" }, { word: "supply" }, { word: "chain" }, { word: "disruptions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在进行时", text: "are monitoring 强调监测行为正在进行，尚未得出最终判断。" },
        { type: "宏观经济", text: "inflation indicators (通胀指标)；supply chain disruptions (供应链中断)。" }
      ]
    },
    {
      id: "q_tense_s305",
      chinese: "法律团队正在审阅合同时，对方律师提出了异议",
      english_full: "The legal team was reviewing the contract when the opposing counsel raised an objection.",
      words: [
        { word: "The" }, { word: "legal" }, { word: "team" }, { word: "was" }, { word: "reviewing" },
        { word: "the" }, { word: "contract" }, { word: "when" }, { word: "the" }, { word: "opposing" }, { word: "counsel" },
        { word: "raised" }, { word: "an" }, { word: "objection", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˈliːgəl/ /tiːm/", translation: "法律团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "legal" }, { word: "team" }] }]
        },
        {
          start: 3, end: 4, label: "主句谓语 (过去进行时)", phonetic: "/wɒz/ /rɪˈvjuːɪŋ/", translation: "正在审阅",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "reviewing" }], label: "实义动词" }
          ]
        },
        {
          start: 5, end: 6, label: "主句宾语", phonetic: "/ðə/ /ˈkɒntrækt/", translation: "合同",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "contract" }] }]
        },
        {
          start: 7, end: 13, label: "时间状语从句", phonetic: "/wɛn/ /ðə/ /əˈpoʊzɪŋ/ /ˈkaʊnsəl/ /reɪzd/ /æn/ /əbˈdʒɛkʃən/", translation: "当对方律师提出异议时",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "opposing" }, { word: "counsel" }], label: "(从)主" },
            { startIndex: 4, words: [{ word: "raised" }], label: "(从)谓(一般过去时)" },
            { startIndex: 5, words: [{ word: "an" }, { word: "objection", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "时态交错", text: "过去进行时 (was reviewing) 与一般过去时 (raised) 搭配，背景动作被突发事件打断。" },
        { type: "法律英语", text: "opposing counsel (对方律师)；raise an objection (提出异议)。" }
      ]
    },
    {
      id: "q_tense_s306",
      chinese: "到下个月这个时候，代表们将正在谈判贸易协定的最终条款",
      english_full: "At this point next month, delegates will be negotiating the final terms of the trade pact.",
      words: [
        { word: "At" }, { word: "this" }, { word: "point" }, { word: "next" }, { word: "month", punctuation: "," },
        { word: "delegates" }, { word: "will" }, { word: "be" }, { word: "negotiating" },
        { word: "the" }, { word: "final" }, { word: "terms" }, { word: "of" }, { word: "the" }, { word: "trade" }, { word: "pact", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语", phonetic: "/æt/ /ðɪs/ /pɔɪnt/ /nɛkst/ /mʌnθ/", translation: "到下个月这个时候",
          subComponents: [{ startIndex: 0, words: [{ word: "At" }, { word: "this" }, { word: "point" }, { word: "next" }, { word: "month", punctuation: "," }] }]
        },
        {
          start: 5, end: 5, label: "主语", phonetic: "/ˈdɛlɪgəts/", translation: "代表们",
          subComponents: [{ startIndex: 0, words: [{ word: "delegates" }] }]
        },
        {
          start: 6, end: 8, label: "谓语 (将来进行时)", phonetic: "/wɪl/ /bi/ /nɪˈgoʊʃieɪtɪŋ/", translation: "将正在谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "negotiating" }] }]
        },
        {
          start: 9, end: 15, label: "宾语", phonetic: "/ðə/ /ˈfaɪnəl/ /tɜːrmz/ /ʌv/ /ðə/ /treɪd/ /pækt/", translation: "贸易协定的最终条款",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "final" }, { word: "terms" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "the" }, { word: "trade" }, { word: "pact", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "将来进行时", text: "will be negotiating 表示在将来某一特定时刻正在进行的谈判进程。" },
        { type: "外交词汇", text: "trade pact (贸易协定)；final terms (最终条款) 是经贸谈判的标准用语。" }
      ]
    },
    {
      id: "q_tense_s307",
      chinese: "在合并最终完成之前，审计事务所已发现重大差异",
      english_full: "The audit firm had identified material discrepancies before the merger was finalized.",
      words: [
        { word: "The" }, { word: "audit" }, { word: "firm" }, { word: "had" }, { word: "identified" },
        { word: "material" }, { word: "discrepancies" }, { word: "before" }, { word: "the" }, { word: "merger" },
        { word: "was" }, { word: "finalized", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˈɔːdɪt/ /fɜːrm/", translation: "审计事务所",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "audit" }, { word: "firm" }] }]
        },
        {
          start: 3, end: 4, label: "主句谓语 (过去完成时)", phonetic: "/hæd/ /aɪˈdɛntɪfaɪd/", translation: "已发现",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "identified" }] }]
        },
        {
          start: 5, end: 6, label: "主句宾语", phonetic: "/məˈtɪriəl/ /dɪsˈkrɛpənsiz/", translation: "重大差异",
          subComponents: [{ startIndex: 0, words: [{ word: "material" }, { word: "discrepancies" }] }]
        },
        {
          start: 7, end: 11, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈmɜːrdʒər/ /wɒz/ /ˈfaɪnəlaɪzd/", translation: "在合并最终完成之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "merger" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "was" }, { word: "finalized", punctuation: "." }], label: "(从)谓(一般过去时被动)" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成时", text: "had identified 发生在 was finalized 之前，表示「过去的过去」。" },
        { type: "审计术语", text: "material discrepancies (重大差异) 是财务审计报告中的关键表述。" }
      ]
    },
    {
      id: "q_tense_s308",
      chinese: "到十二月，该技术联盟将已完成全国5G基础设施的部署",
      english_full: "By December, the technology consortium will have deployed its nationwide 5G infrastructure.",
      words: [
        { word: "By" }, { word: "December", punctuation: "," }, { word: "the" }, { word: "technology" }, { word: "consortium" },
        { word: "will" }, { word: "have" }, { word: "deployed" }, { word: "its" }, { word: "nationwide" }, { word: "5G" }, { word: "infrastructure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/baɪ/ /dɪˈsɛmbər/", translation: "到十二月",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "December", punctuation: "," }] }]
        },
        {
          start: 2, end: 4, label: "主语", phonetic: "/ðə/ /tɛkˈnɒlədʒi/ /kənˈsɔːrtiəm/", translation: "该技术联盟",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "technology" }, { word: "consortium" }] }]
        },
        {
          start: 5, end: 7, label: "谓语 (将来完成时)", phonetic: "/wɪl/ /hæv/ /dɪˈplɔɪd/", translation: "将已完成部署",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "deployed" }] }]
        },
        {
          start: 8, end: 11, label: "宾语", phonetic: "/ɪts/ /ˌneɪʃənˈwaɪd/ /faɪv dʒiː/ /ˈɪnfrəˌstrʌktʃər/", translation: "其全国5G基础设施",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "nationwide" }, { word: "5G" }, { word: "infrastructure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来完成时", text: "will have deployed 表示在十二月之前完成的未来动作，强调截止时间。" },
        { type: "电信词汇", text: "5G infrastructure (5G 基础设施)；technology consortium (技术联盟)。" }
      ]
    },
    {
      id: "q_tense_s309",
      chinese: "该研究机构与国际伙伴就疫苗研发已合作两年",
      english_full: "The research institute has been collaborating with international partners on vaccine development for two years.",
      words: [
        { word: "The" }, { word: "research" }, { word: "institute" }, { word: "has" }, { word: "been" }, { word: "collaborating" },
        { word: "with" }, { word: "international" }, { word: "partners" }, { word: "on" }, { word: "vaccine" }, { word: "development" },
        { word: "for" }, { word: "two" }, { word: "years", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /rɪˈsɜːrtʃ/ /ˈɪnstɪtuːt/", translation: "该研究机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "research" }, { word: "institute" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (现在完成进行时)", phonetic: "/hæz/ /bɪn/ /kəˈlæbəreɪtɪŋ/", translation: "一直在合作",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "collaborating" }] }]
        },
        {
          start: 6, end: 8, label: "状语", phonetic: "/wɪð/ /ˌɪntərˈnæʃənəl/ /ˈpɑːrtnərz/", translation: "与国际伙伴",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "international" }, { word: "partners" }] }]
        },
        {
          start: 9, end: 11, label: "方面状语", phonetic: "/ɒn/ /ˈvæksiːn/ /dɪˈvɛləpmənt/", translation: "就疫苗研发",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "vaccine" }, { word: "development" }] }]
        },
        {
          start: 12, end: 14, label: "时间状语", phonetic: "/fɔːr/ /tuː/ /jɪrz/", translation: "两年来",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "two" }, { word: "years", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成进行时", text: "has been collaborating 配合 for two years 强调从两年前持续至今且可能仍在继续的合作。" },
        { type: "科研词汇", text: "vaccine development (疫苗研发) 是生物医药领域的核心表述。" }
      ]
    },
    {
      id: "q_tense_s310",
      chinese: "在双方达成妥协之前，外交使团已调解该争端数月",
      english_full: "The diplomatic corps had been mediating the dispute for months before both parties reached a compromise.",
      words: [
        { word: "The" }, { word: "diplomatic" }, { word: "corps" }, { word: "had" }, { word: "been" }, { word: "mediating" },
        { word: "the" }, { word: "dispute" }, { word: "for" }, { word: "months" }, { word: "before" }, { word: "both" }, { word: "parties" },
        { word: "reached" }, { word: "a" }, { word: "compromise", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˌdɪpləˈmætɪk/ /kɔːr/", translation: "外交使团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "diplomatic" }, { word: "corps" }] }]
        },
        {
          start: 3, end: 5, label: "主句谓语 (过去完成进行时)", phonetic: "/hæd/ /bɪn/ /ˈmiːdieɪtɪŋ/", translation: "一直在调解",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "been" }, { word: "mediating" }] }]
        },
        {
          start: 6, end: 7, label: "主句宾语", phonetic: "/ðə/ /dɪsˈpjuːt/", translation: "该争端",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "dispute" }] }]
        },
        {
          start: 8, end: 9, label: "时间状语", phonetic: "/fɔːr/ /mʌnθs/", translation: "数月",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "months" }] }]
        },
        {
          start: 10, end: 15, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /boʊθ/ /ˈpɑːrtiz/ /riːtʃt/ /ə/ /ˈkɒmprəmaɪz/", translation: "在双方达成妥协之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "both" }, { word: "parties" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "reached" }], label: "(从)谓(一般过去时)" },
            { startIndex: 4, words: [{ word: "a" }, { word: "compromise", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成进行时", text: "had been mediating 表示在 reached 之前持续进行的调解，强调过程延续性。" },
        { type: "外交术语", text: "diplomatic corps (外交使团)；reach a compromise (达成妥协)。" }
      ]
    },
    {
      id: "q_tense_s311",
      chinese: "到六月，工程部门将对原型机进行连续六个月的测试",
      english_full: "By June, the engineering division will have been testing the prototype for six consecutive months.",
      words: [
        { word: "By" }, { word: "June", punctuation: "," }, { word: "the" }, { word: "engineering" }, { word: "division" },
        { word: "will" }, { word: "have" }, { word: "been" }, { word: "testing" }, { word: "the" }, { word: "prototype" },
        { word: "for" }, { word: "six" }, { word: "consecutive" }, { word: "months", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/baɪ/ /dʒuːn/", translation: "到六月",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "June", punctuation: "," }] }]
        },
        {
          start: 2, end: 4, label: "主语", phonetic: "/ðə/ /ˌɛndʒɪˈnɪərɪŋ/ /dɪˈvɪʒən/", translation: "工程部门",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "engineering" }, { word: "division" }] }]
        },
        {
          start: 5, end: 8, label: "谓语 (将来完成进行时)", phonetic: "/wɪl/ /hæv/ /bɪn/ /ˈtɛstɪŋ/", translation: "将已持续测试",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "been" }, { word: "testing" }] }]
        },
        {
          start: 9, end: 10, label: "宾语", phonetic: "/ðə/ /ˈproʊtətaɪp/", translation: "原型机",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "prototype" }] }]
        },
        {
          start: 11, end: 14, label: "时间状语", phonetic: "/fɔːr/ /sɪks/ /kənˈsɛkjətɪv/ /mʌnθs/", translation: "连续六个月",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "six" }, { word: "consecutive" }, { word: "months", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来完成进行时", text: "will have been testing 强调到六月时将已持续进行的测试时长，突出过程累积。" },
        { type: "工程词汇", text: "prototype (原型机)；consecutive months (连续月份) 是产品验证阶段的常用表达。" }
      ]
    },
    {
      id: "q_tense_s312",
      chinese: "每当央行暗示货币政策转向时，股价往往会出现波动",
      english_full: "Share prices typically fluctuate whenever central banks signal a shift in monetary policy.",
      words: [
        { word: "Share" }, { word: "prices" }, { word: "typically" }, { word: "fluctuate" },
        { word: "whenever" }, { word: "central" }, { word: "banks" }, { word: "signal" }, { word: "a" }, { word: "shift" },
        { word: "in" }, { word: "monetary" }, { word: "policy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ʃɛr/ /ˈpraɪsɪz/", translation: "股价",
          subComponents: [{ startIndex: 0, words: [{ word: "Share" }, { word: "prices" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "往往",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 3, end: 3, label: "谓语 (一般现在时)", phonetic: "/ˈflʌktʃueɪt/", translation: "波动",
          subComponents: [{ startIndex: 0, words: [{ word: "fluctuate" }] }]
        },
        {
          start: 4, end: 12, label: "时间状语从句", phonetic: "/wɛnˈɛvər/ /ˈsɛntrəl/ /bæŋks/ /ˈsɪgnəl/ /ə/ /ʃɪft/ /ɪn/ /ˈmɒnɪtəri/ /ˈpɒlɪsi/", translation: "每当央行暗示货币政策转向时",
          subComponents: [
            { startIndex: 0, words: [{ word: "whenever" }], label: "连词" },
            { startIndex: 1, words: [{ word: "central" }, { word: "banks" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "signal" }], label: "(从)谓" },
            { startIndex: 4, words: [{ word: "a" }, { word: "shift" }, { word: "in" }, { word: "monetary" }, { word: "policy", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "fluctuate 与 signal 均用一般现在时，描述市场反复出现的规律性反应。" },
        { type: "金融搭配", text: "monetary policy (货币政策)；signal a shift (暗示转向) 是财经报道常用句式。" }
      ]
    },
    {
      id: "q_tense_s313",
      chinese: "自转向订阅模式以来，该初创公司一直保持盈利",
      english_full: "The startup has maintained profitability since it pivoted to a subscription-based model.",
      words: [
        { word: "The" }, { word: "startup" }, { word: "has" }, { word: "maintained" }, { word: "profitability" },
        { word: "since" }, { word: "it" }, { word: "pivoted" }, { word: "to" }, { word: "a" }, { word: "subscription-based" }, { word: "model", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌp/", translation: "该初创公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "startup" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (现在完成时)", phonetic: "/hæz/ /meɪnˈteɪnd/", translation: "一直保持",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "maintained" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˌprɒfɪtəˈbɪlɪti/", translation: "盈利",
          subComponents: [{ startIndex: 0, words: [{ word: "profitability" }] }]
        },
        {
          start: 5, end: 11, label: "时间状语从句", phonetic: "/sɪns/ /ɪt/ /ˈpɪvətɪd/ /tuː/ /ə/ /səbˈskrɪpʃən beɪst/ /ˈmɒdəl/", translation: "自转向订阅模式以来",
          subComponents: [
            { startIndex: 0, words: [{ word: "since" }], label: "连词" },
            { startIndex: 1, words: [{ word: "it" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "pivoted" }], label: "(从)谓(一般过去时)" },
            { startIndex: 3, words: [{ word: "to" }, { word: "a" }, { word: "subscription-based" }, { word: "model", punctuation: "." }], label: "(从)状语" }
          ]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has maintained 配合 since 从句中的一般过去时 pivoted，表示从过去某点持续至今的状态。" },
        { type: "商业词汇", text: "pivot to (转向)；subscription-based model (订阅模式) 是 SaaS 行业的核心概念。" }
      ]
    },
    {
      id: "q_tense_s314",
      chinese: "经济衰退期间，消费者往往会推迟大额消费，直到经济形势稳定",
      english_full: "During the recession, consumers would defer major purchases until economic conditions stabilized.",
      words: [
        { word: "During" }, { word: "the" }, { word: "recession", punctuation: "," }, { word: "consumers" }, { word: "would" }, { word: "defer" },
        { word: "major" }, { word: "purchases" }, { word: "until" }, { word: "economic" }, { word: "conditions" }, { word: "stabilized", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /rɪˈsɛʃən/", translation: "经济衰退期间",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "the" }, { word: "recession", punctuation: "," }] }]
        },
        {
          start: 3, end: 3, label: "主语", phonetic: "/kənˈsjuːmərz/", translation: "消费者",
          subComponents: [{ startIndex: 0, words: [{ word: "consumers" }] }]
        },
        {
          start: 4, end: 5, label: "谓语 (过去习惯)", phonetic: "/wʊd/ /dɪˈfɜːr/", translation: "往往会推迟",
          subComponents: [{ startIndex: 0, words: [{ word: "would" }, { word: "defer" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈmeɪdʒər/ /ˈpɜːrtʃəsɪz/", translation: "大额消费",
          subComponents: [{ startIndex: 0, words: [{ word: "major" }, { word: "purchases" }] }]
        },
        {
          start: 8, end: 11, label: "时间状语从句", phonetic: "/ənˈtɪl/ /ˌiːkəˈnɒmɪk/ /kənˈdɪʃənz/ /ˈsteɪbəlaɪzd/", translation: "直到经济形势稳定",
          subComponents: [
            { startIndex: 0, words: [{ word: "until" }], label: "连词" },
            { startIndex: 1, words: [{ word: "economic" }, { word: "conditions" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "stabilized", punctuation: "." }], label: "(从)谓(一般过去时)" }
          ]
        }
      ],
      analysis: [
        { type: "would 过去习惯", text: "would defer 描述过去特定时期反复发生的消费行为，带有习惯性意味。" },
        { type: "经济英语", text: "defer major purchases (推迟大额消费) 是消费行为研究中的典型表述。" }
      ]
    },
    {
      id: "q_tense_s315",
      chinese: "在回流制造兴起之前，制造业曾严重依赖离岸生产",
      english_full: "The manufacturing sector used to rely heavily on offshore production before reshoring gained momentum.",
      words: [
        { word: "The" }, { word: "manufacturing" }, { word: "sector" }, { word: "used" }, { word: "to" }, { word: "rely" },
        { word: "heavily" }, { word: "on" }, { word: "offshore" }, { word: "production" }, { word: "before" }, { word: "reshoring" },
        { word: "gained" }, { word: "momentum", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌmænjəˈfæktʃərɪŋ/ /ˈsɛktər/", translation: "制造业",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "manufacturing" }, { word: "sector" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (used to)", phonetic: "/juːzd/ /tuː/ /rɪˈlaɪ/", translation: "曾经依赖",
          subComponents: [{ startIndex: 0, words: [{ word: "used" }, { word: "to" }, { word: "rely" }] }]
        },
        {
          start: 6, end: 9, label: "状语", phonetic: "/ˈhɛvɪli/ /ɒn/ /ˈɒfʃɔːr/ /prəˈdʌkʃən/", translation: "严重依赖离岸生产",
          subComponents: [{ startIndex: 0, words: [{ word: "heavily" }, { word: "on" }, { word: "offshore" }, { word: "production" }] }]
        },
        {
          start: 10, end: 13, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /riːˈʃɔːrɪŋ/ /geɪnd/ /moʊˈmɛntəm/", translation: "在回流制造兴起之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "reshoring" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "gained" }], label: "(从)谓(一般过去时)" },
            { startIndex: 3, words: [{ word: "momentum", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "used to", text: "used to rely 表示过去存在但现已不再持续的习惯或状态，与现在形成对比。" },
        { type: "产业词汇", text: "offshore production (离岸生产)；reshoring (回流制造) 是全球供应链讨论的热词。" }
      ]
    },
    {
      id: "q_tense_s316",
      chinese: "董事会将在今天的会议上就拟议的股息上调进行表决",
      english_full: "The board of directors is going to vote on the proposed dividend increase at today's meeting.",
      words: [
        { word: "The" }, { word: "board" }, { word: "of" }, { word: "directors" }, { word: "is" }, { word: "going" }, { word: "to" }, { word: "vote" },
        { word: "on" }, { word: "the" }, { word: "proposed" }, { word: "dividend" }, { word: "increase" }, { word: "at" }, { word: "today's" }, { word: "meeting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /bɔːrd/ /ʌv/ /dɪˈrɛktərz/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }, { word: "of" }, { word: "directors" }] }]
        },
        {
          start: 4, end: 7, label: "谓语 (be going to)", phonetic: "/ɪz/ /ˈgoʊɪŋ/ /tuː/ /voʊt/", translation: "将进行表决",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "going" }, { word: "to" }, { word: "vote" }] }]
        },
        {
          start: 8, end: 12, label: "状语", phonetic: "/ɒn/ /ðə/ /prəˈpoʊzd/ /ˈdɪvɪdɛnd/ /ɪnˈkriːs/", translation: "就拟议的股息上调",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "proposed" }, { word: "dividend" }, { word: "increase" }] }]
        },
        {
          start: 13, end: 15, label: "时间/地点状语", phonetic: "/æt/ /təˈdeɪz/ /ˈmiːtɪŋ/", translation: "在今天的会议上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "today's" }, { word: "meeting", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "be going to", text: "is going to vote 表示已有计划或意图的近期未来动作，语气比 will 更侧重既定安排。" },
        { type: "公司治理", text: "dividend increase (股息上调)；board of directors (董事会) 是股东大会语境的标准用语。" }
      ]
    },
    {
      id: "q_tense_s317",
      chinese: "数项跨境收购已暂停，等待反垄断审查",
      english_full: "Several cross-border acquisitions have been suspended pending antitrust review.",
      words: [
        { word: "Several" }, { word: "cross-border" }, { word: "acquisitions" }, { word: "have" }, { word: "been" }, { word: "suspended" },
        { word: "pending" }, { word: "antitrust" }, { word: "review", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsɛvrəl/ /krɒs ˈbɔːrdər/ /ˌækwɪˈzɪʃənz/", translation: "数项跨境收购",
          subComponents: [{ startIndex: 0, words: [{ word: "Several" }, { word: "cross-border" }, { word: "acquisitions" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (现在完成时被动)", phonetic: "/hæv/ /bɪn/ /səˈspɛndɪd/", translation: "已被暂停",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "been" }, { word: "suspended" }] }]
        },
        {
          start: 6, end: 8, label: "原因状语", phonetic: "/ˈpɛndɪŋ/ /ˌæntiˈtrʌst/ /rɪˈvjuː/", translation: "等待反垄断审查",
          subComponents: [{ startIndex: 0, words: [{ word: "pending" }, { word: "antitrust" }, { word: "review", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成时被动", text: "have been suspended 表示暂停动作已完成，且收购目前仍处于被暂停状态。" },
        { type: "并购术语", text: "cross-border acquisitions (跨境收购)；antitrust review (反垄断审查) 是 M&A 监管的核心环节。" }
      ]
    }
  ]
};
