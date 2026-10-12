export const extensions = {
  "module_tense": [
    {
      id: "q_tense_s100",
      chinese: "管理层决定在下一季度重组整个部门",
      english_full: "The management has decided to restructure the entire department next quarter.",
      words: [
        { word: "The" }, { word: "management" }, { word: "has" }, { word: "decided" }, { word: "to" },
        { word: "restructure" }, { word: "the" }, { word: "entire" }, { word: "department" }, { word: "next" }, { word: "quarter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmænɪdʒmənt/", translation: "管理层",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "management" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (现在完成时)", phonetic: "/hæz/ /dɪˈsaɪdɪd/", translation: "已经决定",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "decided" }] }]
        },
        {
          start: 4, end: 8, label: "宾语 (不定式)", phonetic: "/tuː/ /riːˈstrʌktʃər/ /ði/ /ɪnˈtaɪər/ /dɪˈpɑːrtmənt/", translation: "去重组整个部门",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "restructure" }, { word: "the" }, { word: "entire" }, { word: "department" }] }]
        },
        {
          start: 9, end: 10, label: "时间状语", phonetic: "/nɛkst/ /ˈkwɔːrtər/", translation: "下个季度",
          subComponents: [{ startIndex: 0, words: [{ word: "next" }, { word: "quarter", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has decided 表示过去的决定对现在有影响，即重组方案现已确定。" },
        { type: "商务搭配", text: "restructure the department (重组部门) 是企业管理中的常用表达。" }
      ]
    },
    {
      id: "q_tense_s101",
      chinese: "跨国企业通常采用分阶段的方法进行市场扩张",
      english_full: "Multinational corporations typically adopt a phased approach to market expansion.",
      words: [
        { word: "Multinational" }, { word: "corporations" }, { word: "typically" }, { word: "adopt" },
        { word: "a" }, { word: "phased" }, { word: "approach" }, { word: "to" }, { word: "market" }, { word: "expansion", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃənz/", translation: "跨国企业",
          subComponents: [{ startIndex: 0, words: [{ word: "Multinational" }, { word: "corporations" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 3, end: 3, label: "谓语 (一般现在时)", phonetic: "/əˈdɒpt/", translation: "采用",
          subComponents: [{ startIndex: 0, words: [{ word: "adopt" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ə/ /feɪzd/ /əˈproʊtʃ/ /tuː/ /ˈmɑːrkɪt/ /ɪkˈspænʃən/", translation: "分阶段的市场扩张方法",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "phased" }, { word: "approach" }] },
            { startIndex: 3, words: [{ word: "to" }, { word: "market" }, { word: "expansion" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "adopt 使用一般现在时，表示跨国企业的惯常做法或普遍策略。" },
        { type: "商务词汇", text: "phased approach (分阶段方法) 是战略规划中的专业术语。" }
      ]
    },
    {
      id: "q_tense_s102",
      chinese: "董事会在上周的紧急会议上否决了这项合并提案",
      english_full: "The board rejected the merger proposal at last week's emergency meeting.",
      words: [
        { word: "The" }, { word: "board" }, { word: "rejected" }, { word: "the" }, { word: "merger" }, { word: "proposal" },
        { word: "at" }, { word: "last" }, { word: "week's" }, { word: "emergency" }, { word: "meeting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 2, label: "谓语 (一般过去时)", phonetic: "/rɪˈdʒɛktɪd/", translation: "否决了",
          subComponents: [{ startIndex: 0, words: [{ word: "rejected" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ðə/ /ˈmɜːrdʒər/ /prəˈpoʊzəl/", translation: "这项合并提案",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "merger" }, { word: "proposal" }] }]
        },
        {
          start: 6, end: 10, label: "地点/时间状语", phonetic: "/æt/ /læst/ /wiːks/ /ɪˈmɜːrdʒənsi/ /ˈmiːtɪŋ/", translation: "在上周的紧急会议上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "last" }, { word: "week's" }, { word: "emergency" }, { word: "meeting", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般过去时", text: "rejected 配合 last week's 明确过去时间，表示已完成的单一动作。" },
        { type: "商务词汇", text: "merger proposal (合并提案)；emergency meeting (紧急会议)。" }
      ]
    },
    {
      id: "q_tense_s103",
      chinese: "该初创公司将在明年第一季度寻求B轮融资",
      english_full: "The startup will seek Series B funding in the first quarter of next year.",
      words: [
        { word: "The" }, { word: "startup" }, { word: "will" }, { word: "seek" }, { word: "Series" }, { word: "B" }, { word: "funding" },
        { word: "in" }, { word: "the" }, { word: "first" }, { word: "quarter" }, { word: "of" }, { word: "next" }, { word: "year", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌp/", translation: "该初创公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "startup" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (一般将来时)", phonetic: "/wɪl/ /siːk/", translation: "将寻求",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "seek" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˈsɪriːz/ /biː/ /ˈfʌndɪŋ/", translation: "B轮融资",
          subComponents: [{ startIndex: 0, words: [{ word: "Series" }, { word: "B" }, { word: "funding" }] }]
        },
        {
          start: 7, end: 13, label: "时间状语", phonetic: "/ɪn/ /ðə/ /fɜːrst/ /ˈkwɔːrtər/ /ʌv/ /nɛkst/ /jɪr/", translation: "在明年第一季度",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "first" }, { word: "quarter" }, { word: "of" }, { word: "next" }, { word: "year", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般将来时", text: "will + seek 表示对未来融资计划的预测或既定安排。" },
        { type: "创投术语", text: "Series B funding (B轮融资) 是风险投资领域的标准表述。" }
      ]
    },
    {
      id: "q_tense_s104",
      chinese: "监管机构正在审查该银行是否符合新的合规标准",
      english_full: "Regulators are examining whether the bank complies with the new compliance standards.",
      words: [
        { word: "Regulators" }, { word: "are" }, { word: "examining" }, { word: "whether" }, { word: "the" }, { word: "bank" },
        { word: "complies" }, { word: "with" }, { word: "the" }, { word: "new" }, { word: "compliance" }, { word: "standards", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈrɛgjəˌleɪtərz/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "Regulators" }] }]
        },
        {
          start: 1, end: 2, label: "谓语 (现在进行时)", phonetic: "/ɑːr/ /ɪgˈzæmɪnɪŋ/", translation: "正在审查",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "examining" }], label: "实义动词" }
          ]
        },
        {
          start: 3, end: 11, label: "宾语从句", phonetic: "/ˈwɛðər/ /ðə/ /bæŋk/ /kəmˈplaɪz/ /wɪð/ /ðə/ /njuː/ /kəmˈplaɪəns/ /ˈstændərdz/", translation: "该银行是否符合新的合规标准",
          subComponents: [
            { startIndex: 0, words: [{ word: "whether" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "bank" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "complies" }], label: "(从)谓" },
            { startIndex: 4, words: [{ word: "with" }, { word: "the" }, { word: "new" }, { word: "compliance" }, { word: "standards", punctuation: "." }], label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "现在进行时", text: "are examining 强调审查工作目前正在进行中，尚未完成。" },
        { type: "金融合规", text: "compliance standards (合规标准) 是银行业监管的核心概念。" }
      ]
    },
    {
      id: "q_tense_s105",
      chinese: "分析师正在撰写季度报告时，首席执行官宣布了辞职",
      english_full: "The analyst was drafting the quarterly report when the CEO announced her resignation.",
      words: [
        { word: "The" }, { word: "analyst" }, { word: "was" }, { word: "drafting" }, { word: "the" }, { word: "quarterly" }, { word: "report" },
        { word: "when" }, { word: "the" }, { word: "CEO" }, { word: "announced" }, { word: "her" }, { word: "resignation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈænəlɪst/", translation: "分析师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "analyst" }] }]
        },
        {
          start: 2, end: 3, label: "主句谓语 (过去进行时)", phonetic: "/wɒz/ /ˈdrɑːftɪŋ/", translation: "正在撰写",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "drafting" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 6, label: "主句宾语", phonetic: "/ðə/ /ˈkwɔːrtərli/ /rɪˈpɔːrt/", translation: "季度报告",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "quarterly" }, { word: "report" }] }]
        },
        {
          start: 7, end: 12, label: "时间状语从句", phonetic: "/wɛn/ /ðə/ /ˌsiːˈoʊ/ /əˈnaʊnst/ /hɜːr/ /ˌrɛzɪgˈneɪʃən/", translation: "当首席执行官宣布辞职时",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "CEO" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "announced" }], label: "(从)谓(一般过去时)" },
            { startIndex: 4, words: [{ word: "her" }, { word: "resignation", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "时态交错", text: "过去进行时 (was drafting) 与一般过去时 (announced) 搭配，表示长动作进行中被短动作打断。" },
        { type: "职场词汇", text: "quarterly report (季度报告)；resignation (辞职)。" }
      ]
    },
    {
      id: "q_tense_s106",
      chinese: "到今天下午三点，谈判代表们将正在讨论最终的合同条款",
      english_full: "By three o'clock this afternoon, the negotiators will be discussing the final contract terms.",
      words: [
        { word: "By" }, { word: "three" }, { word: "o'clock" }, { word: "this" }, { word: "afternoon", punctuation: "," },
        { word: "the" }, { word: "negotiators" }, { word: "will" }, { word: "be" }, { word: "discussing" },
        { word: "the" }, { word: "final" }, { word: "contract" }, { word: "terms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语", phonetic: "/baɪ/ /θriː/ /əˈklɒk/ /ðɪs/ /ˌæftərˈnuːn/", translation: "到今天下午三点",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "three" }, { word: "o'clock" }, { word: "this" }, { word: "afternoon", punctuation: "," }] }]
        },
        {
          start: 5, end: 6, label: "主语", phonetic: "/ðə/ /nɪˈgoʊʃieɪtərz/", translation: "谈判代表们",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "negotiators" }] }]
        },
        {
          start: 7, end: 9, label: "谓语 (将来进行时)", phonetic: "/wɪl/ /bi/ /dɪˈskʌsɪŋ/", translation: "将正在讨论",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }, { word: "be" }], label: "助动词" },
            { startIndex: 2, words: [{ word: "discussing" }], label: "实义动词" }
          ]
        },
        {
          start: 10, end: 13, label: "宾语", phonetic: "/ðə/ /ˈfaɪnəl/ /ˈkɒntrækt/ /tɜːrmz/", translation: "最终的合同条款",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "final" }, { word: "contract" }, { word: "terms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来进行时", text: "will be discussing 表示在将来某一具体时刻正在进行的动作。" },
        { type: "标志结构", text: "By + 具体时间点 是将来进行时的典型提示结构。" }
      ]
    },
    {
      id: "q_tense_s107",
      chinese: "欧盟已经通过了一项旨在减少碳排放的全面立法",
      english_full: "The European Union has enacted comprehensive legislation aimed at reducing carbon emissions.",
      words: [
        { word: "The" }, { word: "European" }, { word: "Union" }, { word: "has" }, { word: "enacted" },
        { word: "comprehensive" }, { word: "legislation" }, { word: "aimed" }, { word: "at" }, { word: "reducing" }, { word: "carbon" }, { word: "emissions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌjʊrəˈpiːən/ /ˈjuːnjən/", translation: "欧盟",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "European" }, { word: "Union" }] }]
        },
        {
          start: 3, end: 4, label: "谓语 (现在完成时)", phonetic: "/hæz/ /ɪˈnæktɪd/", translation: "已经通过",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "enacted" }] }]
        },
        {
          start: 5, end: 11, label: "宾语", phonetic: "/ˌkɒmprɪˈhɛnsɪv/ /ˌlɛdʒɪsˈleɪʃən/ /eɪmd/ /æt/ /rɪˈduːsɪŋ/ /ˈkɑːrbən/ /ɪˈmɪʃənz/", translation: "旨在减少碳排放的全面立法",
          subComponents: [
            { startIndex: 0, words: [{ word: "comprehensive" }, { word: "legislation" }] },
            { startIndex: 2, words: [{ word: "aimed" }, { word: "at" }, { word: "reducing" }, { word: "carbon" }, { word: "emissions", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has enacted 强调立法已通过且对当前政策环境产生持续影响。" },
        { type: "环境政策", text: "carbon emissions (碳排放)；comprehensive legislation (全面立法)。" }
      ]
    },
    {
      id: "q_tense_s108",
      chinese: "在审计人员发现问题之前，财务团队已经提交了年度报告",
      english_full: "The finance team had submitted the annual report before the auditors identified the discrepancy.",
      words: [
        { word: "The" }, { word: "finance" }, { word: "team" }, { word: "had" }, { word: "submitted" }, { word: "the" }, { word: "annual" }, { word: "report" },
        { word: "before" }, { word: "the" }, { word: "auditors" }, { word: "identified" }, { word: "the" }, { word: "discrepancy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˈfaɪnæns/ /tiːm/", translation: "财务团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "finance" }, { word: "team" }] }]
        },
        {
          start: 3, end: 4, label: "主句谓语 (过去完成时)", phonetic: "/hæd/ /səbˈmɪtɪd/", translation: "已经提交",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "submitted" }] }]
        },
        {
          start: 5, end: 7, label: "主句宾语", phonetic: "/ðə/ /ˈænjuəl/ /rɪˈpɔːrt/", translation: "年度报告",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "annual" }, { word: "report" }] }]
        },
        {
          start: 8, end: 13, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈɔːdɪtərz/ /aɪˈdɛntɪfaɪd/ /ðə/ /dɪsˈkrɛpənsi/", translation: "在审计人员发现问题之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "auditors" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "identified" }], label: "(从)谓(一般过去时)" },
            { startIndex: 4, words: [{ word: "the" }, { word: "discrepancy", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成时", text: "had submitted 发生在 identified 之前，表示「过去的过去」。" },
        { type: "审计术语", text: "discrepancy (差异/不符)；annual report (年度报告)。" }
      ]
    },
    {
      id: "q_tense_s109",
      chinese: "到2030年，该国将已经实现其可再生能源目标",
      english_full: "By 2030, the country will have achieved its renewable energy targets.",
      words: [
        { word: "By" }, { word: "2030", punctuation: "," }, { word: "the" }, { word: "country" }, { word: "will" }, { word: "have" }, { word: "achieved" },
        { word: "its" }, { word: "renewable" }, { word: "energy" }, { word: "targets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/baɪ/ /ˈtwɛntiˌθɜːrti/", translation: "到2030年",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "2030", punctuation: "," }] }]
        },
        {
          start: 2, end: 3, label: "主语", phonetic: "/ðə/ /ˈkʌntri/", translation: "该国",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "country" }] }]
        },
        {
          start: 4, end: 6, label: "谓语 (将来完成时)", phonetic: "/wɪl/ /hæv/ /əˈtʃiːvd/", translation: "将已经实现",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "achieved" }] }]
        },
        {
          start: 7, end: 10, label: "宾语", phonetic: "/ɪts/ /rɪˈnjuːəbəl/ /ˈɛnərdʒi/ /ˈtɑːrgɪts/", translation: "其可再生能源目标",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "renewable" }, { word: "energy" }, { word: "targets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来完成时", text: "will have achieved 表示到2030年这一未来时间点，目标已完成。" },
        { type: "能源政策", text: "renewable energy targets (可再生能源目标) 是气候议题的核心表述。" }
      ]
    },
    {
      id: "q_tense_s110",
      chinese: "自年初以来，这家制药公司一直在开发一种新型疫苗",
      english_full: "The pharmaceutical company has been developing a novel vaccine since the beginning of the year.",
      words: [
        { word: "The" }, { word: "pharmaceutical" }, { word: "company" }, { word: "has" }, { word: "been" }, { word: "developing" },
        { word: "a" }, { word: "novel" }, { word: "vaccine" }, { word: "since" }, { word: "the" }, { word: "beginning" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌfɑːrməˈsuːtɪkəl/ /ˈkʌmpəni/", translation: "这家制药公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pharmaceutical" }, { word: "company" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (现在完成进行时)", phonetic: "/hæz/ /bɪn/ /dɪˈvɛləpɪŋ/", translation: "一直在开发",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "developing" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ə/ /ˈnɒvəl/ /vækˈsiːn/", translation: "一种新型疫苗",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "novel" }, { word: "vaccine" }] }]
        },
        {
          start: 9, end: 14, label: "时间状语", phonetic: "/sɪns/ /ðə/ /bɪˈgɪnɪŋ/ /ʌv/ /ðə/ /jɪr/", translation: "自年初以来",
          subComponents: [{ startIndex: 0, words: [{ word: "since" }, { word: "the" }, { word: "beginning" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成进行时", text: "has been developing 强调从年初持续至今的开发过程，且可能仍在继续。" },
        { type: "医药词汇", text: "pharmaceutical company (制药公司)；novel vaccine (新型疫苗)。" }
      ]
    },
    {
      id: "q_tense_s111",
      chinese: "在交易最终完成之前，法律团队已经为此谈判了数月",
      english_full: "The legal team had been negotiating for months before the deal was finally closed.",
      words: [
        { word: "The" }, { word: "legal" }, { word: "team" }, { word: "had" }, { word: "been" }, { word: "negotiating" },
        { word: "for" }, { word: "months" }, { word: "before" }, { word: "the" }, { word: "deal" }, { word: "was" }, { word: "finally" }, { word: "closed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˈliːgəl/ /tiːm/", translation: "法律团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "legal" }, { word: "team" }] }]
        },
        {
          start: 3, end: 5, label: "主句谓语 (过去完成进行时)", phonetic: "/hæd/ /bɪn/ /nɪˈgoʊʃieɪtɪŋ/", translation: "一直在谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "been" }, { word: "negotiating" }] }]
        },
        {
          start: 6, end: 7, label: "时间状语", phonetic: "/fɔːr/ /mʌnθs/", translation: "长达数月",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "months" }] }]
        },
        {
          start: 8, end: 13, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðə/ /diːl/ /wɒz/ /ˈfaɪnəli/ /kloʊzd/", translation: "在交易最终完成之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "deal" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "was" }, { word: "finally" }, { word: "closed", punctuation: "." }], label: "(从)谓(一般过去时被动)" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成进行时", text: "had been negotiating 表示在 deal was closed 之前持续进行的谈判过程。" },
        { type: "商务搭配", text: "close a deal (完成交易) 是并购领域的标准用语。" }
      ]
    },
    {
      id: "q_tense_s112",
      chinese: "这项研究证实，睡眠不足会显著影响认知表现",
      english_full: "The study confirms that sleep deprivation significantly impairs cognitive performance.",
      words: [
        { word: "The" }, { word: "study" }, { word: "confirms" }, { word: "that" }, { word: "sleep" }, { word: "deprivation" },
        { word: "significantly" }, { word: "impairs" }, { word: "cognitive" }, { word: "performance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstʌdi/", translation: "这项研究",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "study" }] }]
        },
        {
          start: 2, end: 2, label: "谓语 (一般现在时)", phonetic: "/kənˈfɜːrmz/", translation: "证实",
          subComponents: [{ startIndex: 0, words: [{ word: "confirms" }] }]
        },
        {
          start: 3, end: 9, label: "宾语从句", phonetic: "/ðæt/ /sliːp/ /ˌdɛprɪˈveɪʃən/ /sɪgˈnɪfɪkəntli/ /ɪmˈpɛrz/ /ˈkɒgnɪtɪv/ /pərˈfɔːrməns/", translation: "睡眠不足会显著影响认知表现",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "sleep" }, { word: "deprivation" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "significantly" }], label: "(从)状" },
            { startIndex: 4, words: [{ word: "impairs" }], label: "(从)谓" },
            { startIndex: 5, words: [{ word: "cognitive" }, { word: "performance", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "从句中 impairs 用一般现在时陈述科学研究的客观结论和普遍规律。" },
        { type: "学术词汇", text: "sleep deprivation (睡眠不足)；cognitive performance (认知表现)。" }
      ]
    },
    {
      id: "q_tense_s113",
      chinese: "这项政策在去年受到广泛批评后最终被废除",
      english_full: "The policy was ultimately repealed after facing widespread criticism last year.",
      words: [
        { word: "The" }, { word: "policy" }, { word: "was" }, { word: "ultimately" }, { word: "repealed" },
        { word: "after" }, { word: "facing" }, { word: "widespread" }, { word: "criticism" }, { word: "last" }, { word: "year", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpɒləsi/", translation: "这项政策",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "policy" }] }]
        },
        {
          start: 2, end: 4, label: "谓语 (一般过去时被动)", phonetic: "/wɒz/ /ˈʌltɪmətli/ /rɪˈpiːld/", translation: "最终被废除",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "ultimately" }], label: "状语" },
            { startIndex: 2, words: [{ word: "repealed" }], label: "过去分词" }
          ]
        },
        {
          start: 5, end: 10, label: "时间状语", phonetic: "/ˈæftər/ /ˈfeɪsɪŋ/ /ˈwaɪdsprɛd/ /ˈkrɪtɪsɪzəm/ /læst/ /jɪr/", translation: "在去年受到广泛批评之后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "facing" }, { word: "widespread" }, { word: "criticism" }, { word: "last" }, { word: "year", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般过去时", text: "was repealed 为一般过去时被动语态，配合 last year 表示过去发生的政策变更。" },
        { type: "政策术语", text: "repeal a policy (废除政策)；widespread criticism (广泛批评)。" }
      ]
    },
    {
      id: "q_tense_s114",
      chinese: "鉴于市场信号，投资者正准备调整其投资组合",
      english_full: "Given the market signals, investors are going to adjust their portfolios.",
      words: [
        { word: "Given" }, { word: "the" }, { word: "market" }, { word: "signals", punctuation: "," },
        { word: "investors" }, { word: "are" }, { word: "going" }, { word: "to" }, { word: "adjust" }, { word: "their" }, { word: "portfolios", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "原因状语", phonetic: "/ˈgɪvən/ /ðə/ /ˈmɑːrkɪt/ /ˈsɪgnəlz/", translation: "鉴于市场信号",
          subComponents: [{ startIndex: 0, words: [{ word: "Given" }, { word: "the" }, { word: "market" }, { word: "signals", punctuation: "," }] }]
        },
        {
          start: 4, end: 4, label: "主语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "investors" }] }]
        },
        {
          start: 5, end: 8, label: "谓语 (be going to 将来时)", phonetic: "/ɑːr/ /ˈgoʊɪŋ/ /tuː/ /əˈdʒʌst/", translation: "正准备调整",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "going" }, { word: "to" }, { word: "adjust" }] }
          ]
        },
        {
          start: 9, end: 10, label: "宾语", phonetic: "/ðɛr/ /pɔːrtˈfoʊlioʊz/", translation: "其投资组合",
          subComponents: [{ startIndex: 0, words: [{ word: "their" }, { word: "portfolios", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "be going to", text: "are going to adjust 表示基于现有证据 (market signals) 做出的近期打算。" },
        { type: "金融词汇", text: "portfolio (投资组合)；market signals (市场信号)。" }
      ]
    },
    {
      id: "q_tense_s115",
      chinese: "我们下周将与东京的合作伙伴举行战略会议",
      english_full: "We are holding a strategic meeting with our partners in Tokyo next week.",
      words: [
        { word: "We" }, { word: "are" }, { word: "holding" }, { word: "a" }, { word: "strategic" }, { word: "meeting" },
        { word: "with" }, { word: "our" }, { word: "partners" }, { word: "in" }, { word: "Tokyo" }, { word: "next" }, { word: "week", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语 (现在进行时表将来)", phonetic: "/ɑːr/ /ˈhoʊldɪŋ/", translation: "将举行",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "holding" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ə/ /strəˈtiːdʒɪk/ /ˈmiːtɪŋ/", translation: "一场战略会议",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "strategic" }, { word: "meeting" }] }]
        },
        {
          start: 6, end: 12, label: "状语", phonetic: "/wɪð/ /aʊər/ /ˈpɑːrtnərz/ /ɪn/ /ˈtoʊkioʊ/ /nɛkst/ /wiːk/", translation: "与东京的合作伙伴 下周",
          subComponents: [
            { startIndex: 0, words: [{ word: "with" }, { word: "our" }, { word: "partners" }], label: "伴随状语" },
            { startIndex: 3, words: [{ word: "in" }, { word: "Tokyo" }], label: "地点状语" },
            { startIndex: 5, words: [{ word: "next" }, { word: "week", punctuation: "." }], label: "时间状语" }
          ]
        }
      ],
      analysis: [
        { type: "现在进行时表将来", text: "are holding 配合 next week 表示已安排好的近期计划，比 will 更体现确定性。" },
        { type: "商务搭配", text: "strategic meeting (战略会议) 是高层决策场景的常用表达。" }
      ]
    },
    {
      id: "q_tense_s116",
      chinese: "与此同时，竞争对手正在悄悄扩大其在亚洲的市场份额",
      english_full: "Meanwhile, the competitor was quietly expanding its market share across Asia.",
      words: [
        { word: "Meanwhile", punctuation: "," }, { word: "the" }, { word: "competitor" }, { word: "was" }, { word: "quietly" }, { word: "expanding" },
        { word: "its" }, { word: "market" }, { word: "share" }, { word: "across" }, { word: "Asia", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "连接副词", phonetic: "/ˈmiːnwaɪl/", translation: "与此同时",
          subComponents: [{ startIndex: 0, words: [{ word: "Meanwhile", punctuation: "," }] }]
        },
        {
          start: 1, end: 2, label: "主语", phonetic: "/ðə/ /kəmˈpɛtɪtər/", translation: "竞争对手",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "competitor" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (过去进行时)", phonetic: "/wɒz/ /ˈkwaɪətli/ /ɪkˈspændɪŋ/", translation: "正在悄悄扩大",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }] },
            { startIndex: 1, words: [{ word: "quietly" }], label: "方式状语" },
            { startIndex: 2, words: [{ word: "expanding" }] }
          ]
        },
        {
          start: 6, end: 10, label: "宾语/状语", phonetic: "/ɪts/ /ˈmɑːrkɪt/ /ʃɛr/ /əˈkrɒs/ /ˈeɪʒə/", translation: "其在亚洲的市场份额",
          subComponents: [
            { startIndex: 0, words: [{ word: "its" }, { word: "market" }, { word: "share" }], label: "宾语" },
            { startIndex: 3, words: [{ word: "across" }, { word: "Asia", punctuation: "." }], label: "地点状语" }
          ]
        }
      ],
      analysis: [
        { type: "过去进行时", text: "was expanding 描述过去某阶段持续进行的市场扩张背景动作。" },
        { type: "商业竞争", text: "market share (市场份额) 是竞争分析的核心指标。" }
      ]
    },
    {
      id: "q_tense_s117",
      chinese: "到年底，该工厂将已经运营这条自动化生产线整整两年",
      english_full: "By the end of the year, the factory will have been operating this automated production line for two full years.",
      words: [
        { word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "," },
        { word: "the" }, { word: "factory" }, { word: "will" }, { word: "have" }, { word: "been" }, { word: "operating" },
        { word: "this" }, { word: "automated" }, { word: "production" }, { word: "line" }, { word: "for" }, { word: "two" }, { word: "full" }, { word: "years", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/baɪ/ /ði/ /ɛnd/ /ʌv/ /ðə/ /jɪr/", translation: "到年底",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ðə/ /ˈfæktəri/", translation: "该工厂",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "factory" }] }]
        },
        {
          start: 8, end: 11, label: "谓语 (将来完成进行时)", phonetic: "/wɪl/ /hæv/ /bɪn/ /ˈɒpəreɪtɪŋ/", translation: "将已经运营",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "been" }, { word: "operating" }] }]
        },
        {
          start: 12, end: 18, label: "宾语/时间状语", phonetic: "/ðɪs/ /ˈɔːtəmeɪtɪd/ /prəˈdʌkʃən/ /laɪn/ /fɔːr/ /tuː/ /fʊl/ /jɪrz/", translation: "这条自动化生产线 整整两年",
          subComponents: [
            { startIndex: 0, words: [{ word: "this" }, { word: "automated" }, { word: "production" }, { word: "line" }], label: "宾语" },
            { startIndex: 4, words: [{ word: "for" }, { word: "two" }, { word: "full" }, { word: "years", punctuation: "." }], label: "持续时间" }
          ]
        }
      ],
      analysis: [
        { type: "将来完成进行时", text: "will have been operating 强调到年底时，运营动作已持续满两年。" },
        { type: "制造业", text: "automated production line (自动化生产线) 是工业4.0的核心概念。" }
      ]
    },
    {
      id: "q_tense_s118",
      chinese: "这位外交官此前从未参与过如此复杂的多边谈判",
      english_full: "The diplomat has never before participated in such complex multilateral negotiations.",
      words: [
        { word: "The" }, { word: "diplomat" }, { word: "has" }, { word: "never" }, { word: "before" }, { word: "participated" },
        { word: "in" }, { word: "such" }, { word: "complex" }, { word: "multilateral" }, { word: "negotiations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈdɪpləmæt/", translation: "这位外交官",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "diplomat" }] }]
        },
        {
          start: 2, end: 5, label: "谓语 (现在完成时)", phonetic: "/hæz/ /ˈnɛvər/ /bɪˈfɔːr/ /pɑːrˈtɪsɪpeɪtɪd/", translation: "此前从未参与过",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] },
            { startIndex: 1, words: [{ word: "never" }, { word: "before" }], label: "状语" },
            { startIndex: 3, words: [{ word: "participated" }] }
          ]
        },
        {
          start: 6, end: 10, label: "状语", phonetic: "/ɪn/ /sʌtʃ/ /kəmˈplɛks/ /ˌmʌltiˈlætərəl/ /nɪˌgoʊʃiˈeɪʃənz/", translation: "如此复杂的多边谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "such" }, { word: "complex" }, { word: "multilateral" }, { word: "negotiations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has never participated 表示从过去至今的经历，never 为现在完成时的典型标志词。" },
        { type: "外交术语", text: "multilateral negotiations (多边谈判) 是国际关系的核心表述。" }
      ]
    },
    {
      id: "q_tense_s119",
      chinese: "她解释说，她在参加面试之前已经更新了简历",
      english_full: "She explained that she had updated her resume before attending the interview.",
      words: [
        { word: "She" }, { word: "explained" }, { word: "that" }, { word: "she" }, { word: "had" }, { word: "updated" }, { word: "her" }, { word: "resume" },
        { word: "before" }, { word: "attending" }, { word: "the" }, { word: "interview", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主句主语", phonetic: "/ʃiː/", translation: "她",
          subComponents: [{ startIndex: 0, words: [{ word: "She" }] }]
        },
        {
          start: 1, end: 1, label: "主句谓语 (一般过去时)", phonetic: "/ɪkˈspleɪnd/", translation: "解释说",
          subComponents: [{ startIndex: 0, words: [{ word: "explained" }] }]
        },
        {
          start: 2, end: 11, label: "宾语从句", phonetic: "/ðæt/ /ʃi/ /hæd/ /ˈʌpdeɪtɪd/ /hɜːr/ /ˈrɛzəmeɪ/ /bɪˈfɔːr/ /əˈtɛndɪŋ/ /ðə/ /ˈɪntərvjuː/", translation: "她在参加面试之前已经更新了简历",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "she" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "had" }, { word: "updated" }], label: "(从)谓(过去完成时)" },
            { startIndex: 4, words: [{ word: "her" }, { word: "resume" }], label: "(从)宾" },
            { startIndex: 6, words: [{ word: "before" }, { word: "attending" }, { word: "the" }, { word: "interview", punctuation: "." }], label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成时", text: "had updated 发生在 attending the interview 之前，主句 explained 为一般过去时。" },
        { type: "求职场景", text: "update one's resume (更新简历) 是职场英语的基本搭配。" }
      ]
    },
    {
      id: "q_tense_s120",
      chinese: "董事会刚刚批准了向东南亚扩张的计划",
      english_full: "The board has just approved the plan to expand into Southeast Asia.",
      words: [
        { word: "The" }, { word: "board" }, { word: "has" }, { word: "just" }, { word: "approved" },
        { word: "the" }, { word: "plan" }, { word: "to" }, { word: "expand" }, { word: "into" }, { word: "Southeast" }, { word: "Asia", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 4, label: "谓语 (现在完成时)", phonetic: "/hæz/ /dʒʌst/ /əˈpruːvd/", translation: "刚刚批准",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] },
            { startIndex: 1, words: [{ word: "just" }], label: "状语" },
            { startIndex: 2, words: [{ word: "approved" }] }
          ]
        },
        {
          start: 5, end: 11, label: "宾语", phonetic: "/ðə/ /plæn/ /tuː/ /ɪkˈspænd/ /ˈɪntuː/ /ˌsaʊθˈist/ /ˈeɪʒə/", translation: "向东南亚扩张的计划",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "plan" }] },
            { startIndex: 2, words: [{ word: "to" }, { word: "expand" }, { word: "into" }, { word: "Southeast" }, { word: "Asia", punctuation: "." }], label: "不定式定语" }
          ]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has just approved 中 just 与现在完成时连用，表示刚刚完成的动作对现在有直接影响。" },
        { type: "区域扩张", text: "expand into (向……扩张) 是跨国企业战略的标准表达。" }
      ]
    },
    {
      id: "q_tense_s121",
      chinese: "远程办公正在从根本上改变企业的人才招聘策略",
      english_full: "Remote work is fundamentally reshaping corporate talent acquisition strategies.",
      words: [
        { word: "Remote" }, { word: "work" }, { word: "is" }, { word: "fundamentally" }, { word: "reshaping" },
        { word: "corporate" }, { word: "talent" }, { word: "acquisition" }, { word: "strategies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/rɪˈmoʊt/ /wɜːrk/", translation: "远程办公",
          subComponents: [{ startIndex: 0, words: [{ word: "Remote" }, { word: "work" }] }]
        },
        {
          start: 2, end: 4, label: "谓语 (现在进行时)", phonetic: "/ɪz/ /ˌfʌndəˈmɛntəli/ /riːˈʃeɪpɪŋ/", translation: "正在从根本上改变",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }] },
            { startIndex: 1, words: [{ word: "fundamentally" }], label: "方式状语" },
            { startIndex: 2, words: [{ word: "reshaping" }] }
          ]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ˈkɔːrpərət/ /ˈtælənt/ /ˌækwɪˈzɪʃən/ /ˈstrætədʒiz/", translation: "企业的人才招聘策略",
          subComponents: [{ startIndex: 0, words: [{ word: "corporate" }, { word: "talent" }, { word: "acquisition" }, { word: "strategies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在进行时", text: "is reshaping 表示现阶段正在发生且持续演变的社会趋势，而非一次性动作。" },
        { type: "人力资源", text: "talent acquisition (人才招聘) 是 HR 领域的专业术语。" }
      ]
    },
    {
      id: "q_tense_s122",
      chinese: "尽管经济已显示出复苏迹象，许多小企业仍在努力恢复盈利能力",
      english_full: "Although the economy has shown signs of recovery, many small businesses are still struggling to regain profitability.",
      words: [
        { word: "Although" }, { word: "the" }, { word: "economy" }, { word: "has" }, { word: "shown" }, { word: "signs" }, { word: "of" }, { word: "recovery", punctuation: "," },
        { word: "many" }, { word: "small" }, { word: "businesses" }, { word: "are" }, { word: "still" }, { word: "struggling" }, { word: "to" }, { word: "regain" }, { word: "profitability", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "让步状语从句", phonetic: "/ɔːlˈðoʊ/ /ðə/ /ɪˈkɒnəmi/ /hæz/ /ʃoʊn/ /saɪnz/ /ʌv/ /rɪˈkʌvəri/", translation: "尽管经济已显示出复苏迹象",
          subComponents: [
            { startIndex: 0, words: [{ word: "Although" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "economy" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "has" }, { word: "shown" }], label: "(从)谓(现在完成时)" },
            { startIndex: 5, words: [{ word: "signs" }, { word: "of" }, { word: "recovery", punctuation: "," }], label: "(从)宾" }
          ]
        },
        {
          start: 8, end: 10, label: "主句主语", phonetic: "/ˈmɛni/ /smɔːl/ /ˈbɪznɪsɪz/", translation: "许多小企业",
          subComponents: [{ startIndex: 0, words: [{ word: "many" }, { word: "small" }, { word: "businesses" }] }]
        },
        {
          start: 11, end: 13, label: "主句谓语 (现在进行时)", phonetic: "/ɑːr/ /stɪl/ /ˈstrʌgəlɪŋ/", translation: "仍在努力",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "still" }], label: "状语" },
            { startIndex: 2, words: [{ word: "struggling" }] }
          ]
        },
        {
          start: 14, end: 16, label: "状语 (不定式)", phonetic: "/tuː/ /riːˈgeɪn/ /ˌprɒfɪtəˈbɪlɪti/", translation: "恢复盈利能力",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "regain" }, { word: "profitability", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "时态对比", text: "从句 has shown (现在完成时) 与主句 are struggling (现在进行时) 形成对比，呈现经济复苏与小企业困境的反差。" },
        { type: "经济词汇", text: "signs of recovery (复苏迹象)；profitability (盈利能力)。" }
      ]
    },
    {
      id: "q_tense_s123",
      chinese: "考察团在返回总部之前将已经评估完所有候选地点",
      english_full: "The delegation will have evaluated all candidate sites before they return to headquarters.",
      words: [
        { word: "The" }, { word: "delegation" }, { word: "will" }, { word: "have" }, { word: "evaluated" }, { word: "all" }, { word: "candidate" }, { word: "sites" },
        { word: "before" }, { word: "they" }, { word: "return" }, { word: "to" }, { word: "headquarters", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˌdɛlɪˈgeɪʃən/", translation: "考察团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "delegation" }] }]
        },
        {
          start: 2, end: 4, label: "主句谓语 (将来完成时)", phonetic: "/wɪl/ /hæv/ /ɪˈvæljueɪtɪd/", translation: "将已经评估完",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "evaluated" }] }]
        },
        {
          start: 5, end: 7, label: "主句宾语", phonetic: "/ɔːl/ /ˈkændɪdət/ /saɪts/", translation: "所有候选地点",
          subComponents: [{ startIndex: 0, words: [{ word: "all" }, { word: "candidate" }, { word: "sites" }] }]
        },
        {
          start: 8, end: 12, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðeɪ/ /rɪˈtɜːrn/ /tuː/ /ˌhɛdˈkwɔːrtərz/", translation: "在他们返回总部之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "they" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "return" }], label: "(从)谓(一般现在时表将来)" },
            { startIndex: 3, words: [{ word: "to" }, { word: "headquarters", punctuation: "." }], label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "主将完从现", text: "主句 will have evaluated (将来完成时)，从句 return (一般现在时) 表将来，是 before 从句的经典搭配。" },
        { type: "商务考察", text: "candidate sites (候选地点)；headquarters (总部)。" }
      ]
    },
    {
      id: "q_tense_s124",
      chinese: "在系统崩溃之前，IT部门已连续工作48小时来修复漏洞",
      english_full: "The IT department had been working continuously for forty-eight hours to patch the vulnerability before the system crashed.",
      words: [
        { word: "The" }, { word: "IT" }, { word: "department" }, { word: "had" }, { word: "been" }, { word: "working" }, { word: "continuously" },
        { word: "for" }, { word: "forty-eight" }, { word: "hours" }, { word: "to" }, { word: "patch" }, { word: "the" }, { word: "vulnerability" },
        { word: "before" }, { word: "the" }, { word: "system" }, { word: "crashed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˌaɪˈtiː/ /dɪˈpɑːrtmənt/", translation: "IT部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "IT" }, { word: "department" }] }]
        },
        {
          start: 3, end: 6, label: "主句谓语 (过去完成进行时)", phonetic: "/hæd/ /bɪn/ /ˈwɜːrkɪŋ/ /kənˈtɪnjuəsli/", translation: "一直在连续工作",
          subComponents: [
            { startIndex: 0, words: [{ word: "had" }, { word: "been" }, { word: "working" }] },
            { startIndex: 3, words: [{ word: "continuously" }], label: "方式状语" }
          ]
        },
        {
          start: 7, end: 13, label: "时间/目的状语", phonetic: "/fɔːr/ /ˈfɔːrtiˌeɪt/ /aʊərz/ /tuː/ /pætʃ/ /ðə/ /ˌvʌlnərəˈbɪlɪti/", translation: "48小时来修复漏洞",
          subComponents: [
            { startIndex: 0, words: [{ word: "for" }, { word: "forty-eight" }, { word: "hours" }], label: "持续时间" },
            { startIndex: 3, words: [{ word: "to" }, { word: "patch" }, { word: "the" }, { word: "vulnerability" }], label: "目的状语" }
          ]
        },
        {
          start: 14, end: 17, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈsɪstəm/ /kræʃt/", translation: "在系统崩溃之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "system" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "crashed", punctuation: "." }], label: "(从)谓(一般过去时)" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成进行时", text: "had been working 强调在 crashed 之前持续进行的修复工作，for forty-eight hours 标明持续时间。" },
        { type: "网络安全", text: "patch a vulnerability (修复漏洞) 是 IT 安全领域的标准用语。" }
      ]
    },
    {
      id: "q_tense_s125",
      chinese: "消费者信心指数已连续三个季度下降",
      english_full: "Consumer confidence has been declining for three consecutive quarters.",
      words: [
        { word: "Consumer" }, { word: "confidence" }, { word: "has" }, { word: "been" }, { word: "declining" },
        { word: "for" }, { word: "three" }, { word: "consecutive" }, { word: "quarters", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/kənˈsuːmər/ /ˈkɒnfɪdəns/", translation: "消费者信心",
          subComponents: [{ startIndex: 0, words: [{ word: "Consumer" }, { word: "confidence" }] }]
        },
        {
          start: 2, end: 4, label: "谓语 (现在完成进行时)", phonetic: "/hæz/ /bɪn/ /dɪˈklaɪnɪŋ/", translation: "一直在下降",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "declining" }] }]
        },
        {
          start: 5, end: 8, label: "时间状语", phonetic: "/fɔːr/ /θriː/ /kənˈsɛkjətɪv/ /ˈkwɔːrtərz/", translation: "连续三个季度",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "three" }, { word: "consecutive" }, { word: "quarters", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成进行时", text: "has been declining 强调下降趋势从过去持续到现在，且可能仍在继续。" },
        { type: "经济术语", text: "consumer confidence (消费者信心)；consecutive quarters (连续季度)。" }
      ]
    },
    {
      id: "q_tense_s126",
      chinese: "所有申请均在提交后三十天内予以审核",
      english_full: "All applications are reviewed within thirty days of submission.",
      words: [
        { word: "All" }, { word: "applications" }, { word: "are" }, { word: "reviewed" },
        { word: "within" }, { word: "thirty" }, { word: "days" }, { word: "of" }, { word: "submission", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɔːl/ /ˌæplɪˈkeɪʃənz/", translation: "所有申请",
          subComponents: [{ startIndex: 0, words: [{ word: "All" }, { word: "applications" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (一般现在时被动)", phonetic: "/ɑːr/ /rɪˈvjuːd/", translation: "予以审核",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "reviewed" }], label: "过去分词" }
          ]
        },
        {
          start: 4, end: 8, label: "时间状语", phonetic: "/wɪˈðɪn/ /ˈθɜːrti/ /deɪz/ /ʌv/ /səbˈmɪʃən/", translation: "在提交后三十天内",
          subComponents: [{ startIndex: 0, words: [{ word: "within" }, { word: "thirty" }, { word: "days" }, { word: "of" }, { word: "submission", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般现在时被动", text: "are reviewed 用一般现在时被动语态描述固定的程序性规定或惯例。" },
        { type: "行政流程", text: "within thirty days of submission (提交后三十天内) 是标准行政表述。" }
      ]
    },
    {
      id: "q_tense_s127",
      chinese: "媒体正在直播发布会时，突发新闻打断了整个活动",
      english_full: "The media was broadcasting the press conference live when breaking news interrupted the entire event.",
      words: [
        { word: "The" }, { word: "media" }, { word: "was" }, { word: "broadcasting" }, { word: "the" }, { word: "press" }, { word: "conference" }, { word: "live" },
        { word: "when" }, { word: "breaking" }, { word: "news" }, { word: "interrupted" }, { word: "the" }, { word: "entire" }, { word: "event", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈmiːdiə/", translation: "媒体",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "media" }] }]
        },
        {
          start: 2, end: 3, label: "主句谓语 (过去进行时)", phonetic: "/wɒz/ /ˈbrɔːdkæstɪŋ/", translation: "正在直播",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "broadcasting" }] }]
        },
        {
          start: 4, end: 7, label: "主句宾语/状语", phonetic: "/ðə/ /prɛs/ /ˈkɒnfərəns/ /laɪv/", translation: "发布会直播",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "press" }, { word: "conference" }], label: "宾语" },
            { startIndex: 3, words: [{ word: "live" }], label: "方式状语" }
          ]
        },
        {
          start: 8, end: 14, label: "时间状语从句", phonetic: "/wɛn/ /ˈbreɪkɪŋ/ /njuːz/ /ˌɪntəˈrʌptɪd/ /ðə/ /ɪnˈtaɪər/ /ɪˈvɛnt/", translation: "当突发新闻打断整个活动时",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }], label: "连词" },
            { startIndex: 1, words: [{ word: "breaking" }, { word: "news" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "interrupted" }], label: "(从)谓(一般过去时)" },
            { startIndex: 4, words: [{ word: "the" }, { word: "entire" }, { word: "event", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "时态交错", text: "was broadcasting (过去进行时) 与 interrupted (一般过去时) 搭配，表示背景动作被突发事件打断。" },
        { type: "媒体词汇", text: "press conference (新闻发布会)；breaking news (突发新闻)。" }
      ]
    },
    {
      id: "q_tense_s128",
      chinese: "届时，各国代表将正在就气候融资机制进行最终磋商",
      english_full: "At that point, delegates will be conducting final consultations on the climate finance mechanism.",
      words: [
        { word: "At" }, { word: "that" }, { word: "point", punctuation: "," }, { word: "delegates" }, { word: "will" }, { word: "be" }, { word: "conducting" },
        { word: "final" }, { word: "consultations" }, { word: "on" }, { word: "the" }, { word: "climate" }, { word: "finance" }, { word: "mechanism", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "时间状语", phonetic: "/æt/ /ðæt/ /pɔɪnt/", translation: "届时",
          subComponents: [{ startIndex: 0, words: [{ word: "At" }, { word: "that" }, { word: "point", punctuation: "," }] }]
        },
        {
          start: 3, end: 3, label: "主语", phonetic: "/ˈdɛlɪgəts/", translation: "各国代表",
          subComponents: [{ startIndex: 0, words: [{ word: "delegates" }] }]
        },
        {
          start: 4, end: 6, label: "谓语 (将来进行时)", phonetic: "/wɪl/ /bi/ /kənˈdʌktɪŋ/", translation: "将正在磋商",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "conducting" }] }]
        },
        {
          start: 7, end: 13, label: "宾语/状语", phonetic: "/ˈfaɪnəl/ /ˌkɒnsəlˈteɪʃənz/ /ɒn/ /ðə/ /ˈklaɪmət/ /ˈfaɪnæns/ /ˈmɛkənɪzəm/", translation: "就气候融资机制进行最终磋商",
          subComponents: [
            { startIndex: 0, words: [{ word: "final" }, { word: "consultations" }], label: "宾语" },
            { startIndex: 2, words: [{ word: "on" }, { word: "the" }, { word: "climate" }, { word: "finance" }, { word: "mechanism", punctuation: "." }], label: "对象状语" }
          ]
        }
      ],
      analysis: [
        { type: "将来进行时", text: "will be conducting 表示在将来某一特定时刻正在进行的 diplomatic 活动。" },
        { type: "气候外交", text: "climate finance mechanism (气候融资机制) 是 COP 会议的核心议题。" }
      ]
    },
    {
      id: "q_tense_s129",
      chinese: "每当央行宣布意外的利率变动时，股市往往会出现剧烈反应",
      english_full: "Stock markets tend to react sharply whenever central banks announce unexpected rate changes.",
      words: [
        { word: "Stock" }, { word: "markets" }, { word: "tend" }, { word: "to" }, { word: "react" }, { word: "sharply" },
        { word: "whenever" }, { word: "central" }, { word: "banks" }, { word: "announce" }, { word: "unexpected" }, { word: "rate" }, { word: "changes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/stɒk/ /ˈmɑːrkɪts/", translation: "股市",
          subComponents: [{ startIndex: 0, words: [{ word: "Stock" }, { word: "markets" }] }]
        },
        {
          start: 2, end: 5, label: "谓语 (一般现在时)", phonetic: "/tɛnd/ /tuː/ /riˈækt/ /ˈʃɑːrpli/", translation: "往往剧烈反应",
          subComponents: [
            { startIndex: 0, words: [{ word: "tend" }, { word: "to" }, { word: "react" }] },
            { startIndex: 3, words: [{ word: "sharply" }], label: "方式状语" }
          ]
        },
        {
          start: 6, end: 12, label: "时间状语从句", phonetic: "/wɛnˈɛvər/ /ˈsɛntrəl/ /bæŋks/ /əˈnaʊns/ /ʌnɪkˈspɛktɪd/ /reɪt/ /ˈtʃeɪndʒɪz/", translation: "每当央行宣布意外的利率变动时",
          subComponents: [
            { startIndex: 0, words: [{ word: "whenever" }], label: "连词" },
            { startIndex: 1, words: [{ word: "central" }, { word: "banks" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "announce" }], label: "(从)谓" },
            { startIndex: 4, words: [{ word: "unexpected" }, { word: "rate" }, { word: "changes", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "tend to react 与 whenever 从句中的 announce 均用一般现在时，描述反复发生的普遍规律。" },
        { type: "金融词汇", text: "rate changes (利率变动)；react sharply (剧烈反应) 是财经报道的标准搭配。" }
      ]
    }
  ]
};
