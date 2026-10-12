export const extensions = {
  "module_adverbial": [
    {
      id: "q_adverbial_s100",
      chinese: "尽管面临前所未有的供应链中断，该公司仍实现了创纪录的利润",
      english_full: "Although facing unprecedented supply chain disruptions, the company achieved record profits.",
      words: [
        { word: "Although" }, { word: "facing" }, { word: "unprecedented" }, { word: "supply" }, { word: "chain" }, { word: "disruptions", punctuation: "," },
        { word: "the" }, { word: "company" }, { word: "achieved" }, { word: "record" }, { word: "profits", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "让步状语从句", phonetic: "/ɔːlˈðoʊ/ /ˈfeɪsɪŋ/ /ʌnˈprɛsɪˌdɛntɪd/ /səˈplaɪ/ /tʃeɪn/ /dɪsˈrʌpʃənz/", translation: "尽管面临前所未有的供应链中断",
          subComponents: [{ startIndex: 0, words: [
            { word: "Although" }, { word: "facing" }, { word: "unprecedented" }, { word: "supply" }, { word: "chain" }, { word: "disruptions", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 7, label: "主句主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "该公司",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "company" }
          ] }] 
        },
        { start: 8, end: 8, label: "谓语", phonetic: "/əˈtʃiːvd/", translation: "实现了",
          subComponents: [{ startIndex: 0, words: [
            { word: "achieved" }
          ] }] 
        },
        { start: 9, end: 10, label: "宾语", phonetic: "/ˈrɛkərd/ /ˈprɒfɪts/", translation: "创纪录的利润",
          subComponents: [{ startIndex: 0, words: [
            { word: "record" }, { word: "profits", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "Although 引导让步状语从句，省略主语 the company 与 be 动词，用现在分词 facing 作状语。" }
      ]
    },
    {
      id: "q_adverbial_s101",
      chinese: "当全球经济陷入衰退时，各国央行纷纷下调基准利率",
      english_full: "When the global economy slipped into recession, central banks slashed benchmark interest rates.",
      words: [
        { word: "When" }, { word: "the" }, { word: "global" }, { word: "economy" }, { word: "slipped" }, { word: "into" },
        { word: "recession", punctuation: "," }, { word: "central" }, { word: "banks" }, { word: "slashed" }, { word: "benchmark" }, { word: "interest" },
        { word: "rates", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/wɛn/ /ðə/ /ˈgləʊbəl/ /ɪˈkɒnəmi/ /slɪpt/ /ɪntuː/ /rɪˈsɛʃən/", translation: "当全球经济陷入衰退时",
          subComponents: [{ startIndex: 0, words: [
            { word: "When" }, { word: "the" }, { word: "global" }, { word: "economy" }, { word: "slipped" }, { word: "into" }, { word: "recession", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ˈsɛntrəl/ /bæŋks/", translation: "各国央行",
          subComponents: [{ startIndex: 0, words: [
            { word: "central" }, { word: "banks" }
          ] }] 
        },
        { start: 9, end: 12, label: "谓语", phonetic: "/slæʃt/ /ˈbɛntʃmɑːrk/ /ˈɪntrəst/ /reɪts/", translation: "纷纷下调基准利率",
          subComponents: [{ startIndex: 0, words: [
            { word: "slashed" }, { word: "benchmark" }, { word: "interest" }, { word: "rates", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "When 引导时间状语从句，从句用一般过去时描述已发生的宏观背景。" }
      ]
    },
    {
      id: "q_adverbial_s102",
      chinese: "只要监管框架保持透明，外国资本就会持续流入",
      english_full: "As long as the regulatory framework remains transparent, foreign capital will keep flowing in.",
      words: [
        { word: "As" }, { word: "long" }, { word: "as" }, { word: "the" }, { word: "regulatory" }, { word: "framework" },
        { word: "remains" }, { word: "transparent", punctuation: "," }, { word: "foreign" }, { word: "capital" }, { word: "will" }, { word: "keep" },
        { word: "flowing" }, { word: "in", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "条件状语从句", phonetic: "/æz/ /lɒŋ/ /æz/ /ðə/ /ˈrɛgjʊlətəri/ /ˈfreɪmwɜːrk/ /rɪˈmeɪnz/ /trænsˈpærənt/", translation: "只要监管框架保持透明",
          subComponents: [{ startIndex: 0, words: [
            { word: "As" }, { word: "long" }, { word: "as" }, { word: "the" }, { word: "regulatory" }, { word: "framework" }, { word: "remains" }, { word: "transparent", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/ˈfɒrən/ /ˈkæpɪtl/", translation: "外国资本",
          subComponents: [{ startIndex: 0, words: [
            { word: "foreign" }, { word: "capital" }
          ] }] 
        },
        { start: 10, end: 13, label: "谓语", phonetic: "/wɪl/ /kiːp/ /ˈfləʊɪŋ/ /ɪn/", translation: "就会持续流入",
          subComponents: [{ startIndex: 0, words: [
            { word: "will" }, { word: "keep" }, { word: "flowing" }, { word: "in", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "As long as 引导条件状语从句，遵循主将从现原则。" }
      ]
    },
    {
      id: "q_adverbial_s103",
      chinese: "由于原材料成本急剧上涨，制造商不得不重新评估定价策略",
      english_full: "Because raw material costs have surged sharply, manufacturers have had to reassess their pricing strategy.",
      words: [
        { word: "Because" }, { word: "raw" }, { word: "material" }, { word: "costs" }, { word: "have" }, { word: "surged" },
        { word: "sharply", punctuation: "," }, { word: "manufacturers" }, { word: "have" }, { word: "had" }, { word: "to" }, { word: "reassess" },
        { word: "their" }, { word: "pricing" }, { word: "strategy", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "原因状语从句", phonetic: "/bɪˈkɒz/ /rɔː/ /məˈtɪriəl/ /kɒsts/ /hæv/ /sɜːrdʒd/ /ˈʃɑːrpli/", translation: "由于原材料成本急剧上涨",
          subComponents: [{ startIndex: 0, words: [
            { word: "Because" }, { word: "raw" }, { word: "material" }, { word: "costs" }, { word: "have" }, { word: "surged" }, { word: "sharply", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 7, label: "主句主语", phonetic: "/ˌmænjʊˈfæktʃərərz/", translation: "制造商",
          subComponents: [{ startIndex: 0, words: [
            { word: "manufacturers" }
          ] }] 
        },
        { start: 8, end: 14, label: "谓语", phonetic: "/hæv/ /hæd/ /tuː/ /ˌriːəˈsɛs/ /ðɛr/ /ˈpraɪsɪŋ/ /ˈstrætədʒi/", translation: "不得不重新评估定价策略",
          subComponents: [{ startIndex: 0, words: [
            { word: "have" }, { word: "had" }, { word: "to" }, { word: "reassess" }, { word: "their" }, { word: "pricing" }, { word: "strategy", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "Because 引导原因状语从句，语气最强，说明直接因果。" }
      ]
    },
    {
      id: "q_adverbial_s104",
      chinese: "经理正在做报告时，董事会成员在认真做笔记",
      english_full: "While the manager was delivering the quarterly report, board members were taking detailed notes.",
      words: [
        { word: "While" }, { word: "the" }, { word: "manager" }, { word: "was" }, { word: "delivering" }, { word: "the" },
        { word: "quarterly" }, { word: "report", punctuation: "," }, { word: "board" }, { word: "members" }, { word: "were" }, { word: "taking" },
        { word: "detailed" }, { word: "notes", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "时间状语从句", phonetic: "/waɪl/ /ðə/ /ˈmænɪdʒər/ /wɒz/ /dɪˈlɪvərɪŋ/ /ðə/ /ˈkwɔːrtərli/ /rɪˈpɔːrt/", translation: "经理正在做季度报告时",
          subComponents: [{ startIndex: 0, words: [
            { word: "While" }, { word: "the" }, { word: "manager" }, { word: "was" }, { word: "delivering" }, { word: "the" }, { word: "quarterly" }, { word: "report", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/bɔːrd/ /ˈmɛmbərz/", translation: "董事会成员",
          subComponents: [{ startIndex: 0, words: [
            { word: "board" }, { word: "members" }
          ] }] 
        },
        { start: 10, end: 13, label: "谓语", phonetic: "/wɜːr/ /ˈteɪkɪŋ/ /ˈdiːteɪld/ /noʊts/", translation: "在认真做笔记",
          subComponents: [{ startIndex: 0, words: [
            { word: "were" }, { word: "taking" }, { word: "detailed" }, { word: "notes", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "While 引导时间状语从句，强调主从句动作同时进行。" }
      ]
    },
    {
      id: "q_adverbial_s105",
      chinese: "一旦新法案获得批准，碳排放配额交易将立即生效",
      english_full: "As soon as the new legislation is ratified, carbon emission quota trading will take effect immediately.",
      words: [
        { word: "As" }, { word: "soon" }, { word: "as" }, { word: "the" }, { word: "new" }, { word: "legislation" },
        { word: "is" }, { word: "ratified", punctuation: "," }, { word: "carbon" }, { word: "emission" }, { word: "quota" }, { word: "trading" },
        { word: "will" }, { word: "take" }, { word: "effect" }, { word: "immediately", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "时间状语从句", phonetic: "/æz/ /suːn/ /æz/ /ðə/ /njuː/ /ˌlɛdʒɪsˈleɪʃən/ /ɪz/ /ˈrætɪfaɪd/", translation: "一旦新法案获得批准",
          subComponents: [{ startIndex: 0, words: [
            { word: "As" }, { word: "soon" }, { word: "as" }, { word: "the" }, { word: "new" }, { word: "legislation" }, { word: "is" }, { word: "ratified", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 12, label: "主句主语", phonetic: "/ˈkɑːrbən/ /ɪˈmɪʃən/ /ˈkwəʊtə/ /ˈtreɪdɪŋ/", translation: "碳排放配额交易",
          subComponents: [{ startIndex: 0, words: [
            { word: "carbon" }, { word: "emission" }, { word: "quota" }, { word: "trading" }, { word: "will" }
          ] }] 
        },
        { start: 13, end: 15, label: "谓语", phonetic: "/wɪl/ /teɪk/ /ɪˈfɛkt/ /ɪˈmiːdiətli/", translation: "将立即生效",
          subComponents: [{ startIndex: 0, words: [
            { word: "take" }, { word: "effect" }, { word: "immediately", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "As soon as 引导时间状语从句，表示一……就……，遵循主将从现。" }
      ]
    },
    {
      id: "q_adverbial_s106",
      chinese: "无论企业在何处拓展业务，合规审查都是不可逾越的底线",
      english_full: "Wherever a corporation expands its operations, compliance review remains a non-negotiable baseline.",
      words: [
        { word: "Wherever" }, { word: "a" }, { word: "corporation" }, { word: "expands" }, { word: "its" }, { word: "operations", punctuation: "," },
        { word: "compliance" }, { word: "review" }, { word: "remains" }, { word: "a" }, { word: "non-negotiable" }, { word: "baseline", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "地点状语从句", phonetic: "/wɛərˈɛvər/ /ə/ /ˌkɔːrpəˈreɪʃən/ /ɪkˈspændz/ /ɪts/ /ˌɒpəˈreɪʃənz/", translation: "无论企业在何处拓展业务",
          subComponents: [{ startIndex: 0, words: [
            { word: "Wherever" }, { word: "a" }, { word: "corporation" }, { word: "expands" }, { word: "its" }, { word: "operations", punctuation: "," }, { word: "compliance" }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/kəmˈplaɪəns/ /rɪˈvjuː/", translation: "合规审查",
          subComponents: [{ startIndex: 0, words: [
            { word: "review" }, { word: "remains" }
          ] }] 
        },
        { start: 9, end: 11, label: "谓语", phonetic: "/rɪˈmeɪnz/ /ə/ /ˌnɒnnɪˈgoʊʃiəbəl/ /ˈbeɪslaɪn/", translation: "都是不可逾越的底线",
          subComponents: [{ startIndex: 0, words: [
            { word: "a" }, { word: "non-negotiable" }, { word: "baseline", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "地点状语从句", text: "Wherever 引导地点状语从句，相当于 no matter where。" }
      ]
    },
    {
      id: "q_adverbial_s107",
      chinese: "如果通胀持续超出目标区间，货币政策委员会将考虑加息",
      english_full: "If inflation continues to exceed the target range, the monetary policy committee will consider raising rates.",
      words: [
        { word: "If" }, { word: "inflation" }, { word: "continues" }, { word: "to" }, { word: "exceed" }, { word: "the" },
        { word: "target" }, { word: "range", punctuation: "," }, { word: "the" }, { word: "monetary" }, { word: "policy" }, { word: "committee" },
        { word: "will" }, { word: "consider" }, { word: "raising" }, { word: "rates", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "条件状语从句", phonetic: "/ɪf/ /ɪnˈfleɪʃən/ /kənˈtɪnjuːz/ /tuː/ /ɪkˈsiːd/ /ðə/ /ˈtɑːrgɪt/ /reɪndʒ/", translation: "如果通胀持续超出目标区间",
          subComponents: [{ startIndex: 0, words: [
            { word: "If" }, { word: "inflation" }, { word: "continues" }, { word: "to" }, { word: "exceed" }, { word: "the" }, { word: "target" }, { word: "range", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 11, label: "主句主语", phonetic: "/ðə/ /ˈmʌnɪteri/ /ˈpɒləsi/ /kəˈmɪti/", translation: "货币政策委员会",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "monetary" }, { word: "policy" }, { word: "committee" }
          ] }] 
        },
        { start: 12, end: 15, label: "谓语", phonetic: "/wɪl/ /kənˈsɪdər/ /ˈreɪzɪŋ/ /reɪts/", translation: "将考虑加息",
          subComponents: [{ startIndex: 0, words: [
            { word: "will" }, { word: "consider" }, { word: "raising" }, { word: "rates", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "If 引导真实条件状语从句，主将从现。" }
      ]
    },
    {
      id: "q_adverbial_s108",
      chinese: "为了使其研究成果获得更广泛的认可，该团队在国际期刊上发表了论文",
      english_full: "So that their research findings could gain wider recognition, the team published a paper in an international journal.",
      words: [
        { word: "So" }, { word: "that" }, { word: "their" }, { word: "research" }, { word: "findings" }, { word: "could" },
        { word: "gain" }, { word: "wider" }, { word: "recognition", punctuation: "," }, { word: "the" }, { word: "team" }, { word: "published" },
        { word: "a" }, { word: "paper" }, { word: "in" }, { word: "an" }, { word: "international" }, { word: "journal", punctuation: "." }
      ],
      components: [
        { start: 0, end: 9, label: "目的状语从句", phonetic: "/səʊ/ /ðæt/ /ðɛr/ /rɪˈsɜːrtʃ/ /ˈfaɪndɪŋz/ /kʊd/ /geɪn/ /ˈwaɪdər/ /ˌrɛkəɡˈnɪʃən/", translation: "为了使其研究成果获得更广泛的认可",
          subComponents: [{ startIndex: 0, words: [
            { word: "So" }, { word: "that" }, { word: "their" }, { word: "research" }, { word: "findings" }, { word: "could" }, { word: "gain" }, { word: "wider" }, { word: "recognition", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 10, end: 11, label: "主句主语", phonetic: "/ðə/ /tiːm/", translation: "该团队",
          subComponents: [{ startIndex: 0, words: [
            { word: "team" }, { word: "published" }
          ] }] 
        },
        { start: 12, end: 17, label: "谓语", phonetic: "/ˈpʌblɪʃt/ /ə/ /ˈpeɪpər/ /ɪn/ /æn/ /ˌɪntərˈnæʃənəl/ /ˈdʒɜːrnəl/", translation: "在国际期刊上发表了论文",
          subComponents: [{ startIndex: 0, words: [
            { word: "a" }, { word: "paper" }, { word: "in" }, { word: "an" }, { word: "international" }, { word: "journal", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "目的状语从句", text: "So that 引导目的状语从句，从句常用 may/could/might 等情态动词。" }
      ]
    },
    {
      id: "q_adverbial_s109",
      chinese: "这项政策如此激进，以至于引发了市场的剧烈波动",
      english_full: "The policy was so aggressive that it triggered severe market volatility.",
      words: [
        { word: "The" }, { word: "policy" }, { word: "was" }, { word: "so" }, { word: "aggressive" }, { word: "that" },
        { word: "it" }, { word: "triggered" }, { word: "severe" }, { word: "market" }, { word: "volatility", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˈpɒləsi/ /wɒz/", translation: "这项政策",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "policy" }, { word: "was" }
          ] }] 
        },
        { start: 3, end: 4, label: "主句表语", phonetic: "/səʊ/ /əˈgrɛsɪv/", translation: "如此激进",
          subComponents: [{ startIndex: 0, words: [
            { word: "so" }, { word: "aggressive" }
          ] }] 
        },
        { start: 5, end: 10, label: "结果状语从句", phonetic: "/ðæt/ /ɪt/ /ˈtrɪɡərd/ /sɪˈvɪər/ /ˈmɑːrkɪt/ /ˌvɒləˈtɪlɪti/", translation: "以至于引发了市场的剧烈波动",
          subComponents: [{ startIndex: 0, words: [
            { word: "that" }, { word: "it" }, { word: "triggered" }, { word: "severe" }, { word: "market" }, { word: "volatility", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "结果状语从句", text: "So...that 引导结果状语从句，so 修饰形容词 aggressive。" }
      ]
    },
    {
      id: "q_adverbial_s110",
      chinese: "即使数据存在统计偏差，研究结论仍具有重要参考价值",
      english_full: "Even though the data contained statistical bias, the research conclusions remained highly informative.",
      words: [
        { word: "Even" }, { word: "though" }, { word: "the" }, { word: "data" }, { word: "contained" }, { word: "statistical" },
        { word: "bias", punctuation: "," }, { word: "the" }, { word: "research" }, { word: "conclusions" }, { word: "remained" }, { word: "highly" },
        { word: "informative", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "让步状语从句", phonetic: "/ˈiːvən/ /ðoʊ/ /ðə/ /ˈdeɪtə/ /kənˈteɪnd/ /stəˈtɪstɪkəl/ /ˈbaɪəs/", translation: "即使数据存在统计偏差",
          subComponents: [{ startIndex: 0, words: [
            { word: "Even" }, { word: "though" }, { word: "the" }, { word: "data" }, { word: "contained" }, { word: "statistical" }, { word: "bias", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 9, label: "主句主语", phonetic: "/ðə/ /rɪˈsɜːrtʃ/ /kənˈkluːʒənz/", translation: "研究结论",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "research" }, { word: "conclusions" }
          ] }] 
        },
        { start: 10, end: 12, label: "谓语", phonetic: "/rɪˈmeɪnd/ /ˈhaɪli/ /ɪnˈfɔːrmətɪv/", translation: "仍具有重要参考价值",
          subComponents: [{ startIndex: 0, words: [
            { word: "remained" }, { word: "highly" }, { word: "informative", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "Even though 引导让步状语从句，语气比 although 更强。" }
      ]
    },
    {
      id: "q_adverbial_s111",
      chinese: "自从公司完成数字化转型以来，运营效率提升了百分之四十",
      english_full: "Since the company completed its digital transformation, operational efficiency has improved by forty percent.",
      words: [
        { word: "Since" }, { word: "the" }, { word: "company" }, { word: "completed" }, { word: "its" }, { word: "digital" },
        { word: "transformation", punctuation: "," }, { word: "operational" }, { word: "efficiency" }, { word: "has" }, { word: "improved" }, { word: "by" },
        { word: "forty" }, { word: "percent", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "时间状语从句", phonetic: "/sɪns/ /ðə/ /ˈkʌmpəni/ /kəmˈpliːtɪd/ /ɪts/ /ˈdɪdʒɪtl/ /ˌtrænsfərˈmeɪʃən/", translation: "自从公司完成数字化转型以来",
          subComponents: [{ startIndex: 0, words: [
            { word: "Since" }, { word: "the" }, { word: "company" }, { word: "completed" }, { word: "its" }, { word: "digital" }, { word: "transformation", punctuation: "," }, { word: "operational" }
          ] }] 
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/ˌɒpəˈreɪʃənəl/ /ɪˈfɪʃənsi/", translation: "运营效率",
          subComponents: [{ startIndex: 0, words: [
            { word: "efficiency" }, { word: "has" }
          ] }] 
        },
        { start: 10, end: 13, label: "谓语", phonetic: "/hæz/ /ɪmˈpruːvd/ /baɪ/ /ˈfɔːrti/ /pərˈsɛnt/", translation: "提升了百分之四十",
          subComponents: [{ startIndex: 0, words: [
            { word: "improved" }, { word: "by" }, { word: "forty" }, { word: "percent", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Since 引导时间状语从句，主句常用完成时，强调从过去持续至今。" }
      ]
    },
    {
      id: "q_adverbial_s112",
      chinese: "除非获得股东批准，董事会不得推进这项并购交易",
      english_full: "Unless shareholders approve the deal, the board must not proceed with the merger transaction.",
      words: [
        { word: "Unless" }, { word: "shareholders" }, { word: "approve" }, { word: "the" }, { word: "deal", punctuation: "," }, { word: "the" },
        { word: "board" }, { word: "must" }, { word: "not" }, { word: "proceed" }, { word: "with" }, { word: "the" },
        { word: "merger" }, { word: "transaction", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "条件状语从句", phonetic: "/ʌnˈlɛs/ /ˈʃɛrhəʊldərz/ /əˈpruːv/ /ðə/ /diːl/", translation: "除非获得股东批准",
          subComponents: [{ startIndex: 0, words: [
            { word: "Unless" }, { word: "shareholders" }, { word: "approve" }, { word: "the" }, { word: "deal", punctuation: "," }
          ] }] 
        },
        { start: 5, end: 6, label: "主句主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "board" }
          ] }] 
        },
        { start: 7, end: 13, label: "谓语", phonetic: "/mʌst/ /nɒt/ /prəˈsiːd/ /wɪð/ /ðə/ /ˈmɜːrdʒər/ /trænˈzækʃən/", translation: "不得推进这项并购交易",
          subComponents: [{ startIndex: 0, words: [
            { word: "must" }, { word: "not" }, { word: "proceed" }, { word: "with" }, { word: "the" }, { word: "merger" }, { word: "transaction", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "Unless 引导条件状语从句，相当于 if...not。" }
      ]
    },
    {
      id: "q_adverbial_s113",
      chinese: "既然证据已经确凿，检方决定正式提起公诉",
      english_full: "Now that the evidence is conclusive, the prosecution has decided to file formal charges.",
      words: [
        { word: "Now" }, { word: "that" }, { word: "the" }, { word: "evidence" }, { word: "is" }, { word: "conclusive", punctuation: "," },
        { word: "the" }, { word: "prosecution" }, { word: "has" }, { word: "decided" }, { word: "to" }, { word: "file" },
        { word: "formal" }, { word: "charges", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "原因状语从句", phonetic: "/naʊ/ /ðæt/ /ðə/ /ˈɛvɪdəns/ /ɪz/ /kənˈkluːsɪv/", translation: "既然证据已经确凿",
          subComponents: [{ startIndex: 0, words: [
            { word: "Now" }, { word: "that" }, { word: "the" }, { word: "evidence" }, { word: "is" }, { word: "conclusive", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 7, label: "主句主语", phonetic: "/ðə/ /ˌprɒsɪˈkjuːʃən/", translation: "检方",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "prosecution" }
          ] }] 
        },
        { start: 8, end: 13, label: "谓语", phonetic: "/hæz/ /dɪˈsaɪdɪd/ /tuː/ /faɪl/ /ˈfɔːrməl/ /ˈtʃɑːrdʒɪz/", translation: "决定正式提起公诉",
          subComponents: [{ startIndex: 0, words: [
            { word: "has" }, { word: "decided" }, { word: "to" }, { word: "file" }, { word: "formal" }, { word: "charges", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "Now that 引导原因状语从句，强调新出现的事实作为原因。" }
      ]
    },
    {
      id: "q_adverbial_s114",
      chinese: "他讲话的方式仿佛已经胜券在握",
      english_full: "He spoke as if he had already secured victory.",
      words: [
        { word: "He" }, { word: "spoke" }, { word: "as" }, { word: "if" }, { word: "he" }, { word: "had" },
        { word: "already" }, { word: "secured" }, { word: "victory", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/hiː/ /spəʊk/", translation: "他讲话",
          subComponents: [{ startIndex: 0, words: [
            { word: "He" }, { word: "spoke" }
          ] }] 
        },
        { start: 2, end: 8, label: "方式状语从句", phonetic: "/æz/ /ɪf/ /hiː/ /hæd/ /ɔːlˈrɛdi/ /sɪˈkjʊrd/ /ˈvɪktəri/", translation: "的方式仿佛已经胜券在握",
          subComponents: [{ startIndex: 0, words: [
            { word: "as" }, { word: "if" }, { word: "he" }, { word: "had" }, { word: "already" }, { word: "secured" }, { word: "victory", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "方式状语从句", text: "As if 引导方式状语从句，从句用过去完成时表示与事实相反的假设。" }
      ]
    },
    {
      id: "q_adverbial_s115",
      chinese: "这项改革带来的收益比最初预期的大得多",
      english_full: "The benefits brought by this reform are far greater than initially anticipated.",
      words: [
        { word: "The" }, { word: "benefits" }, { word: "brought" }, { word: "by" }, { word: "this" }, { word: "reform" },
        { word: "are" }, { word: "far" }, { word: "greater" }, { word: "than" }, { word: "initially" }, { word: "anticipated", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "主句主语", phonetic: "/ðə/ /ˈbɛnɪfɪts/ /brɔːt/ /baɪ/ /ðɪs/ /rɪˈfɔːrm/", translation: "这项改革带来的收益",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "benefits" }, { word: "brought" }, { word: "by" }, { word: "this" }, { word: "reform" }
          ] }] 
        },
        { start: 6, end: 6, label: "谓语", phonetic: "/ɑːr/", translation: "是",
          subComponents: [{ startIndex: 0, words: [
            { word: "are" }
          ] }] 
        },
        { start: 7, end: 11, label: "比较状语从句", phonetic: "/fɑːr/ /ˈgreɪtər/ /ðæn/ /ɪˈnɪʃəli/ /ænˈtɪsɪpeɪtɪd/", translation: "比最初预期的大得多",
          subComponents: [{ startIndex: 0, words: [
            { word: "far" }, { word: "greater" }, { word: "than" }, { word: "initially" }, { word: "anticipated", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "Than 引导比较状语从句，省略了主语 they 和谓语 were。" }
      ]
    },
    {
      id: "q_adverbial_s116",
      chinese: "在谈判破裂之前，双方已就核心条款达成初步共识",
      english_full: "Before the negotiations collapsed, both parties had reached a preliminary consensus on core terms.",
      words: [
        { word: "Before" }, { word: "the" }, { word: "negotiations" }, { word: "collapsed", punctuation: "," }, { word: "both" }, { word: "parties" },
        { word: "had" }, { word: "reached" }, { word: "a" }, { word: "preliminary" }, { word: "consensus" }, { word: "on" },
        { word: "core" }, { word: "terms", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðə/ /nɪˌgoʊʃiˈeɪʃənz/ /kəˈlæpst/", translation: "在谈判破裂之前",
          subComponents: [{ startIndex: 0, words: [
            { word: "Before" }, { word: "the" }, { word: "negotiations" }, { word: "collapsed", punctuation: "," }
          ] }] 
        },
        { start: 4, end: 5, label: "主句主语", phonetic: "/bəʊθ/ /ˈpɑːrtiz/", translation: "双方",
          subComponents: [{ startIndex: 0, words: [
            { word: "both" }, { word: "parties" }
          ] }] 
        },
        { start: 6, end: 13, label: "谓语", phonetic: "/hæd/ /riːtʃt/ /ə/ /prɪˈlɪmɪnəri/ /kənˈsɛnsəs/ /ɒn/ /kɔːr/ /tɜːrmz/", translation: "已就核心条款达成初步共识",
          subComponents: [{ startIndex: 0, words: [
            { word: "had" }, { word: "reached" }, { word: "a" }, { word: "preliminary" }, { word: "consensus" }, { word: "on" }, { word: "core" }, { word: "terms", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Before 引导时间状语从句，主句动作发生在从句动作之前。" }
      ]
    },
    {
      id: "q_adverbial_s117",
      chinese: "无论候选人多么优秀，缺乏跨文化沟通能力都会成为短板",
      english_full: "However outstanding the candidate may be, a lack of cross-cultural communication skills will prove a weakness.",
      words: [
        { word: "However" }, { word: "outstanding" }, { word: "the" }, { word: "candidate" }, { word: "may" }, { word: "be", punctuation: "," },
        { word: "a" }, { word: "lack" }, { word: "of" }, { word: "cross-cultural" }, { word: "communication" }, { word: "skills" },
        { word: "will" }, { word: "prove" }, { word: "a" }, { word: "weakness", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "让步状语从句", phonetic: "/haʊˈɛvər/ /aʊtˈstændɪŋ/ /ðə/ /ˈkændɪdeɪt/ /meɪ/ /biː/", translation: "无论候选人多么优秀",
          subComponents: [{ startIndex: 0, words: [
            { word: "However" }, { word: "outstanding" }, { word: "the" }, { word: "candidate" }, { word: "may" }, { word: "be", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 12, label: "主句主语", phonetic: "/ə/ /læk/ /ɒv/ /krɒs/ /ˈkʌltʃərəl/ /kəˌmjuːnɪˈkeɪʃən/ /skɪlz/", translation: "缺乏跨文化沟通能力",
          subComponents: [{ startIndex: 0, words: [
            { word: "a" }, { word: "lack" }, { word: "of" }, { word: "cross-cultural" }, { word: "communication" }, { word: "skills" }, { word: "will" }
          ] }] 
        },
        { start: 13, end: 13, label: "谓语", phonetic: "/wɪl/", translation: "都会",
          subComponents: [{ startIndex: 0, words: [
            { word: "prove" }
          ] }] 
        },
        { start: 14, end: 15, label: "宾语", phonetic: "/pruːv/ /ə/ /ˈwiːknəs/", translation: "成为短板",
          subComponents: [{ startIndex: 0, words: [
            { word: "a" }, { word: "weakness", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "However + 形容词 + 主语 + 谓语，构成让步状语从句的倒装结构。" }
      ]
    },
    {
      id: "q_adverbial_s118",
      chinese: "该公司在何处设立区域总部，就在何处加大本地化投资",
      english_full: "Where the company establishes its regional headquarters, it increases local investment accordingly.",
      words: [
        { word: "Where" }, { word: "the" }, { word: "company" }, { word: "establishes" }, { word: "its" }, { word: "regional" },
        { word: "headquarters", punctuation: "," }, { word: "it" }, { word: "increases" }, { word: "local" }, { word: "investment" }, { word: "accordingly", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "地点状语从句", phonetic: "/wɛr/ /ðə/ /ˈkʌmpəni/ /ɪˈstæblɪʃɪz/ /ɪts/ /ˈriːdʒənəl/ /ˈhɛdkwɔːrtərz/", translation: "该公司在何处设立区域总部",
          subComponents: [{ startIndex: 0, words: [
            { word: "Where" }, { word: "the" }, { word: "company" }, { word: "establishes" }, { word: "its" }, { word: "regional" }, { word: "headquarters", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 7, label: "主句主语", phonetic: "/ɪt/", translation: "就在此处",
          subComponents: [{ startIndex: 0, words: [
            { word: "it" }
          ] }] 
        },
        { start: 8, end: 11, label: "谓语", phonetic: "/ˈɪnkriːsɪz/ /ˈləʊkəl/ /ɪnˈvɛstmənt/ /əˈkɔːrdɪŋli/", translation: "加大本地化投资",
          subComponents: [{ startIndex: 0, words: [
            { word: "increases" }, { word: "local" }, { word: "investment" }, { word: "accordingly", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "地点状语从句", text: "Where 引导地点状语从句，表示在……的地方。" }
      ]
    },
    {
      id: "q_adverbial_s119",
      chinese: "为了防止敏感数据外泄，企业部署了多层加密协议",
      english_full: "In order that sensitive data might not be leaked, the enterprise deployed multi-layer encryption protocols.",
      words: [
        { word: "In" }, { word: "order" }, { word: "that" }, { word: "sensitive" }, { word: "data" }, { word: "might" },
        { word: "not" }, { word: "be" }, { word: "leaked", punctuation: "," }, { word: "the" }, { word: "enterprise" }, { word: "deployed" },
        { word: "multi-layer" }, { word: "encryption" }, { word: "protocols", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "目的状语从句", phonetic: "/ɪn/ /ˈɔːrdər/ /ðæt/ /ˈsɛnsɪtɪv/ /ˈdeɪtə/ /maɪt/ /nɒt/ /biː/ /liːkt/", translation: "为了防止敏感数据外泄",
          subComponents: [{ startIndex: 0, words: [
            { word: "In" }, { word: "order" }, { word: "that" }, { word: "sensitive" }, { word: "data" }, { word: "might" }, { word: "not" }, { word: "be" }, { word: "leaked", punctuation: "," }
          ] }] 
        },
        { start: 9, end: 10, label: "主句主语", phonetic: "/ðə/ /ˈɛntərpraɪz/", translation: "企业",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "enterprise" }
          ] }] 
        },
        { start: 11, end: 14, label: "谓语", phonetic: "/dɪˈplɔɪd/ /ˈmʌlti/ /ˈleɪər/ /ɪnˈkrɪpʃən/ /ˈprəʊtəkɒlz/", translation: "部署了多层加密协议",
          subComponents: [{ startIndex: 0, words: [
            { word: "deployed" }, { word: "multi-layer" }, { word: "encryption" }, { word: "protocols", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "目的状语从句", text: "In order that 引导目的状语从句，语气比 so that 更正式。" }
      ]
    },
    {
      id: "q_adverbial_s120",
      chinese: "市场反应如此迅速，以至于分析师来不及调整预测模型",
      english_full: "The market reacted so swiftly that analysts had no time to adjust their forecasting models.",
      words: [
        { word: "The" }, { word: "market" }, { word: "reacted" }, { word: "so" }, { word: "swiftly" }, { word: "that" },
        { word: "analysts" }, { word: "had" }, { word: "no" }, { word: "time" }, { word: "to" }, { word: "adjust" },
        { word: "their" }, { word: "forecasting" }, { word: "models", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /ˈmɑːrkɪt/ /rɪˈæktɪd/", translation: "市场反应",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "market" }, { word: "reacted" }
          ] }] 
        },
        { start: 3, end: 4, label: "主句状语", phonetic: "/səʊ/ /ˈswɪftli/", translation: "如此迅速",
          subComponents: [{ startIndex: 0, words: [
            { word: "so" }, { word: "swiftly" }
          ] }] 
        },
        { start: 5, end: 14, label: "结果状语从句", phonetic: "/ðæt/ /ˈænəlɪsts/ /hæd/ /nəʊ/ /taɪm/ /tuː/ /əˈdʒʌst/ /ðɛr/ /ˈfɔːrkæstɪŋ/ /ˈmɒdəlz/", translation: "以至于分析师来不及调整预测模型",
          subComponents: [{ startIndex: 0, words: [
            { word: "that" }, { word: "analysts" }, { word: "had" }, { word: "no" }, { word: "time" }, { word: "to" }, { word: "adjust" }, { word: "their" }, { word: "forecasting" }, { word: "models", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "结果状语从句", text: "So + 副词 + that 引导结果状语从句，so 修饰副词 swiftly。" }
      ]
    },
    {
      id: "q_adverbial_s121",
      chinese: "虽然利润有所下滑，但市场份额仍稳步扩大",
      english_full: "While profits have declined somewhat, market share has continued to expand steadily.",
      words: [
        { word: "While" }, { word: "profits" }, { word: "have" }, { word: "declined" }, { word: "somewhat", punctuation: "," }, { word: "market" },
        { word: "share" }, { word: "has" }, { word: "continued" }, { word: "to" }, { word: "expand" }, { word: "steadily", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "让步状语从句", phonetic: "/waɪl/ /ˈprɒfɪts/ /hæv/ /dɪˈklaɪnd/ /ˈsʌmwɒt/", translation: "虽然利润有所下滑",
          subComponents: [{ startIndex: 0, words: [
            { word: "While" }, { word: "profits" }, { word: "have" }, { word: "declined" }, { word: "somewhat", punctuation: "," }
          ] }] 
        },
        { start: 5, end: 6, label: "主句主语", phonetic: "/ˈmɑːrkɪt/ /ʃɛr/", translation: "市场份额",
          subComponents: [{ startIndex: 0, words: [
            { word: "market" }, { word: "share" }
          ] }] 
        },
        { start: 7, end: 11, label: "谓语", phonetic: "/hæz/ /kənˈtɪnjuːd/ /tuː/ /ɪkˈspænd/ /ˈstɛdɪli/", translation: "仍稳步扩大",
          subComponents: [{ startIndex: 0, words: [
            { word: "has" }, { word: "continued" }, { word: "to" }, { word: "expand" }, { word: "steadily", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "While 引导让步状语从句，表示对比性让步。" }
      ]
    },
    {
      id: "q_adverbial_s122",
      chinese: "在客户签署合同之后，项目团队立即启动了实施阶段",
      english_full: "After the client signed the contract, the project team immediately launched the implementation phase.",
      words: [
        { word: "After" }, { word: "the" }, { word: "client" }, { word: "signed" }, { word: "the" }, { word: "contract", punctuation: "," },
        { word: "the" }, { word: "project" }, { word: "team" }, { word: "immediately" }, { word: "launched" }, { word: "the" },
        { word: "implementation" }, { word: "phase", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "时间状语从句", phonetic: "/ˈæftər/ /ðə/ /ˈklaɪənt/ /saɪnd/ /ðə/ /ˈkɒntrækt/", translation: "在客户签署合同之后",
          subComponents: [{ startIndex: 0, words: [
            { word: "After" }, { word: "the" }, { word: "client" }, { word: "signed" }, { word: "the" }, { word: "contract", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 8, label: "主句主语", phonetic: "/ðə/ /ˈprɒdʒɛkt/ /tiːm/", translation: "项目团队",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "project" }, { word: "team" }
          ] }] 
        },
        { start: 9, end: 13, label: "谓语", phonetic: "/ɪˈmiːdiətli/ /lɔːntʃt/ /ðə/ /ˌɪmplɪmɛnˈteɪʃən/ /feɪz/", translation: "立即启动了实施阶段",
          subComponents: [{ startIndex: 0, words: [
            { word: "immediately" }, { word: "launched" }, { word: "the" }, { word: "implementation" }, { word: "phase", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "After 引导时间状语从句，主句动作紧随从句之后发生。" }
      ]
    },
    {
      id: "q_adverbial_s123",
      chinese: "倘若汇率持续波动，出口企业将面临更大的定价压力",
      english_full: "Provided that exchange rates keep fluctuating, export-oriented firms will face greater pricing pressure.",
      words: [
        { word: "Provided" }, { word: "that" }, { word: "exchange" }, { word: "rates" }, { word: "keep" }, { word: "fluctuating", punctuation: "," },
        { word: "export-oriented" }, { word: "firms" }, { word: "will" }, { word: "face" }, { word: "greater" }, { word: "pricing" },
        { word: "pressure", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "条件状语从句", phonetic: "/prəˈvaɪdɪd/ /ðæt/ /ɪksˈtʃeɪndʒ/ /reɪts/ /kiːp/ /ˈflʌktʃueɪtɪŋ/", translation: "倘若汇率持续波动",
          subComponents: [{ startIndex: 0, words: [
            { word: "Provided" }, { word: "that" }, { word: "exchange" }, { word: "rates" }, { word: "keep" }, { word: "fluctuating", punctuation: "," }, { word: "export-oriented" }
          ] }] 
        },
        { start: 7, end: 9, label: "主句主语", phonetic: "/ˈɛkspɔːrt/ /ˈɔːrientɪd/ /fɜːrmz/", translation: "出口企业",
          subComponents: [{ startIndex: 0, words: [
            { word: "firms" }, { word: "will" }, { word: "face" }
          ] }] 
        },
        { start: 10, end: 12, label: "谓语", phonetic: "/wɪl/ /feɪs/ /ˈgreɪtər/ /ˈpraɪsɪŋ/ /ˈprɛʃər/", translation: "将面临更大的定价压力",
          subComponents: [{ startIndex: 0, words: [
            { word: "greater" }, { word: "pricing" }, { word: "pressure", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "Provided that 引导条件状语从句，语气正式，常用于法律与商业文本。" }
      ]
    },
    {
      id: "q_adverbial_s124",
      chinese: "鉴于全球需求疲软，该公司暂停了海外扩张计划",
      english_full: "As global demand has weakened, the company has suspended its overseas expansion plans.",
      words: [
        { word: "As" }, { word: "global" }, { word: "demand" }, { word: "has" }, { word: "weakened", punctuation: "," }, { word: "the" },
        { word: "company" }, { word: "has" }, { word: "suspended" }, { word: "its" }, { word: "overseas" }, { word: "expansion" },
        { word: "plans", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "原因状语从句", phonetic: "/æz/ /ˈgləʊbəl/ /dɪˈmænd/ /hæz/ /ˈwiːkənd/", translation: "鉴于全球需求疲软",
          subComponents: [{ startIndex: 0, words: [
            { word: "As" }, { word: "global" }, { word: "demand" }, { word: "has" }, { word: "weakened", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 6, end: 7, label: "主句主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "该公司",
          subComponents: [{ startIndex: 0, words: [
            { word: "company" }, { word: "has" }
          ] }] 
        },
        { start: 8, end: 12, label: "谓语", phonetic: "/hæz/ /səˈspɛndɪd/ /ɪts/ /ˌoʊvərˈsiːz/ /ɪkˈspænʃən/ /plænz/", translation: "暂停了海外扩张计划",
          subComponents: [{ startIndex: 0, words: [
            { word: "suspended" }, { word: "its" }, { word: "overseas" }, { word: "expansion" }, { word: "plans", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "As 引导原因状语从句，语气较 because 弱，侧重已知背景。" }
      ]
    },
    {
      id: "q_adverbial_s125",
      chinese: "谈判代表离开会场时，媒体已经围在了出口处",
      english_full: "By the time the negotiators left the conference room, reporters had already gathered at the exit.",
      words: [
        { word: "By" }, { word: "the" }, { word: "time" }, { word: "the" }, { word: "negotiators" }, { word: "left" },
        { word: "the" }, { word: "conference" }, { word: "room", punctuation: "," }, { word: "reporters" }, { word: "had" }, { word: "already" },
        { word: "gathered" }, { word: "at" }, { word: "the" }, { word: "exit", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "时间状语从句", phonetic: "/baɪ/ /ðə/ /taɪm/ /ðə/ /nɪˈgoʊʃieɪtərz/ /lɛft/ /ðə/ /ˈkɒnfərəns/ /ruːm/", translation: "谈判代表离开会场时",
          subComponents: [{ startIndex: 0, words: [
            { word: "By" }, { word: "the" }, { word: "time" }, { word: "the" }, { word: "negotiators" }, { word: "left" }, { word: "the" }, { word: "conference" }, { word: "room", punctuation: "," }
          ] }] 
        },
        { start: 9, end: 9, label: "主句主语", phonetic: "/rɪˈpɔːrtərz/", translation: "媒体",
          subComponents: [{ startIndex: 0, words: [
            { word: "reporters" }
          ] }] 
        },
        { start: 10, end: 15, label: "谓语", phonetic: "/hæd/ /ɔːlˈrɛdi/ /ˈgæðərd/ /æt/ /ðə/ /ˈɛksɪt/", translation: "已经围在了出口处",
          subComponents: [{ startIndex: 0, words: [
            { word: "had" }, { word: "already" }, { word: "gathered" }, { word: "at" }, { word: "the" }, { word: "exit", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "By the time 引导时间状语从句，强调主句动作在从句时间点之前已完成。" }
      ]
    },
    {
      id: "q_adverbial_s126",
      chinese: "无论政策如何调整，创新始终是企业的核心竞争力",
      english_full: "No matter how policies are adjusted, innovation remains the core competitive advantage of enterprises.",
      words: [
        { word: "No" }, { word: "matter" }, { word: "how" }, { word: "policies" }, { word: "are" }, { word: "adjusted", punctuation: "," },
        { word: "innovation" }, { word: "remains" }, { word: "the" }, { word: "core" }, { word: "competitive" }, { word: "advantage" },
        { word: "of" }, { word: "enterprises", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "让步状语从句", phonetic: "/nəʊ/ /ˈmætər/ /haʊ/ /ˈpɒlɪsiz/ /ɑːr/ /əˈdʒʌstɪd/", translation: "无论政策如何调整",
          subComponents: [{ startIndex: 0, words: [
            { word: "No" }, { word: "matter" }, { word: "how" }, { word: "policies" }, { word: "are" }, { word: "adjusted", punctuation: "," }, { word: "innovation" }
          ] }] 
        },
        { start: 7, end: 7, label: "主句主语", phonetic: "/ˌɪnəˈveɪʃən/", translation: "创新",
          subComponents: [{ startIndex: 0, words: [
            { word: "remains" }
          ] }] 
        },
        { start: 8, end: 13, label: "谓语", phonetic: "/rɪˈmeɪnz/ /ðə/ /kɔːr/ /kəmˈpɛtɪtɪv/ /ədˈvæntɪdʒ/ /ɒv/ /ˈɛntərpraɪzɪz/", translation: "始终是企业的核心竞争力",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "core" }, { word: "competitive" }, { word: "advantage" }, { word: "of" }, { word: "enterprises", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "No matter how 引导让步状语从句，how 修饰 adjusted。" }
      ]
    },
    {
      id: "q_adverbial_s127",
      chinese: "假如出现系统故障，备用服务器将在三十秒内自动切换",
      english_full: "In case a system failure occurs, the backup server will switch over automatically within thirty seconds.",
      words: [
        { word: "In" }, { word: "case" }, { word: "a" }, { word: "system" }, { word: "failure" }, { word: "occurs", punctuation: "," },
        { word: "the" }, { word: "backup" }, { word: "server" }, { word: "will" }, { word: "switch" }, { word: "over" },
        { word: "automatically" }, { word: "within" }, { word: "thirty" }, { word: "seconds", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "条件状语从句", phonetic: "/ɪn/ /keɪs/ /ə/ /ˈsɪstəm/ /ˈfeɪljər/ /əˈkɜːrz/", translation: "假如出现系统故障",
          subComponents: [{ startIndex: 0, words: [
            { word: "In" }, { word: "case" }, { word: "a" }, { word: "system" }, { word: "failure" }, { word: "occurs", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 8, label: "主句主语", phonetic: "/ðə/ /ˈbækʌp/ /ˈsɜːrvər/", translation: "备用服务器",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "backup" }, { word: "server" }
          ] }] 
        },
        { start: 9, end: 15, label: "谓语", phonetic: "/wɪl/ /swɪtʃ/ /ˈoʊvər/ /ˌɔːtəˈmætɪkli/ /wɪˈðɪn/ /ˈθɜːrti/ /ˈsɛkəndz/", translation: "将在三十秒内自动切换",
          subComponents: [{ startIndex: 0, words: [
            { word: "will" }, { word: "switch" }, { word: "over" }, { word: "automatically" }, { word: "within" }, { word: "thirty" }, { word: "seconds", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "In case 引导条件状语从句，表示以防万一。" }
      ]
    },
    {
      id: "q_adverbial_s128",
      chinese: "他处理危机的方式就好像经历过无数次类似场面",
      english_full: "He handled the crisis as though he had experienced countless similar situations before.",
      words: [
        { word: "He" }, { word: "handled" }, { word: "the" }, { word: "crisis" }, { word: "as" }, { word: "though" },
        { word: "he" }, { word: "had" }, { word: "experienced" }, { word: "countless" }, { word: "similar" }, { word: "situations" },
        { word: "before", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/hiː/ /ˈhændəld/ /ðə/ /ˈkraɪsɪs/", translation: "他处理危机",
          subComponents: [{ startIndex: 0, words: [
            { word: "He" }, { word: "handled" }, { word: "the" }, { word: "crisis" }
          ] }] 
        },
        { start: 4, end: 12, label: "方式状语从句", phonetic: "/æz/ /ðoʊ/ /hiː/ /hæd/ /ɪkˈspɪəriənst/ /ˈkaʊntləs/ /ˈsɪmələr/ /ˌsɪtʃuˈeɪʃənz/ /bɪˈfɔːr/", translation: "就好像经历过无数次类似场面",
          subComponents: [{ startIndex: 0, words: [
            { word: "as" }, { word: "though" }, { word: "he" }, { word: "had" }, { word: "experienced" }, { word: "countless" }, { word: "similar" }, { word: "situations" }, { word: "before", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "方式状语从句", text: "As though 与 as if 同义，引导方式状语从句，从句常用虚拟语气。" }
      ]
    },
    {
      id: "q_adverbial_s129",
      chinese: "这项技术产生的效益比传统方案高出三个数量级",
      english_full: "The benefits generated by this technology exceed those of conventional solutions by three orders of magnitude.",
      words: [
        { word: "The" }, { word: "benefits" }, { word: "generated" }, { word: "by" }, { word: "this" }, { word: "technology" },
        { word: "exceed" }, { word: "those" }, { word: "of" }, { word: "conventional" }, { word: "solutions" }, { word: "by" },
        { word: "three" }, { word: "orders" }, { word: "of" }, { word: "magnitude", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "主句主语", phonetic: "/ðə/ /ˈbɛnɪfɪts/ /ˈdʒɛnəreɪtɪd/ /baɪ/ /ðɪs/ /tekˈnɒlədʒi/", translation: "这项技术产生的效益",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "benefits" }, { word: "generated" }, { word: "by" }, { word: "this" }, { word: "technology" }, { word: "exceed" }
          ] }] 
        },
        { start: 7, end: 15, label: "比较状语从句", phonetic: "/ɪkˈsiːd/ /ðoʊz/ /ɒv/ /kənˈvɛnʃənəl/ /səˈluːʃənz/ /baɪ/ /θriː/ /ˈɔːrdərz/ /ɒv/ /ˈmæɡnɪtjuːd/", translation: "比传统方案高出三个数量级",
          subComponents: [{ startIndex: 0, words: [
            { word: "those" }, { word: "of" }, { word: "conventional" }, { word: "solutions" }, { word: "by" }, { word: "three" }, { word: "orders" }, { word: "of" }, { word: "magnitude", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "Than 省略的比较状语从句中，those 指代 benefits。" }
      ]
    },
    {
      id: "q_adverbial_s130",
      chinese: "直到所有利益相关方达成一致，协议才具有法律效力",
      english_full: "Not until all stakeholders reached consensus did the agreement acquire legal validity.",
      words: [
        { word: "Not" }, { word: "until" }, { word: "all" }, { word: "stakeholders" }, { word: "reached" }, { word: "consensus" },
        { word: "did" }, { word: "the" }, { word: "agreement" }, { word: "acquire" }, { word: "legal" }, { word: "validity", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/nɒt/ /ʌnˈtɪl/ /ɔːl/ /ˈsteɪkhəʊldərz/ /riːtʃt/ /kənˈsɛnsəs/", translation: "直到所有利益相关方达成一致",
          subComponents: [{ startIndex: 0, words: [
            { word: "Not" }, { word: "until" }, { word: "all" }, { word: "stakeholders" }, { word: "reached" }, { word: "consensus" }, { word: "did" }
          ] }] 
        },
        { start: 7, end: 11, label: "主句", phonetic: "/dɪd/ /ðə/ /əˈgriːmənt/ /əˈkwaɪər/ /ˈliːgəl/ /vəˈlɪdɪti/", translation: "协议才具有法律效力",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "agreement" }, { word: "acquire" }, { word: "legal" }, { word: "validity", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Not until 位于句首引起主句部分倒装，until 引导时间状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s131",
      chinese: "因为首席执行官公开道歉，公众舆论迅速转向",
      english_full: "Because the CEO issued a public apology, public sentiment shifted rapidly.",
      words: [
        { word: "Because" }, { word: "the" }, { word: "CEO" }, { word: "issued" }, { word: "a" }, { word: "public" },
        { word: "apology", punctuation: "," }, { word: "public" }, { word: "sentiment" }, { word: "shifted" }, { word: "rapidly", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "原因状语从句", phonetic: "/bɪˈkɒz/ /ðə/ /ˌsiːiːˈoʊ/ /ˈɪʃuːd/ /ə/ /ˈpʌblɪk/ /əˈpɒlədʒi/", translation: "因为首席执行官公开道歉",
          subComponents: [{ startIndex: 0, words: [
            { word: "Because" }, { word: "the" }, { word: "CEO" }, { word: "issued" }, { word: "a" }, { word: "public" }, { word: "apology", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ˈpʌblɪk/ /ˈsɛntɪmənt/", translation: "公众舆论",
          subComponents: [{ startIndex: 0, words: [
            { word: "public" }, { word: "sentiment" }
          ] }] 
        },
        { start: 9, end: 10, label: "谓语", phonetic: "/ˈʃɪftɪd/ /ˈræpɪdli/", translation: "迅速转向",
          subComponents: [{ startIndex: 0, words: [
            { word: "shifted" }, { word: "rapidly", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "Because 引导原因状语从句，说明直接因果链。" }
      ]
    },
    {
      id: "q_adverbial_s132",
      chinese: "每当季度财报发布，股价都会出现明显波动",
      english_full: "Whenever quarterly earnings are released, share prices experience noticeable fluctuations.",
      words: [
        { word: "Whenever" }, { word: "quarterly" }, { word: "earnings" }, { word: "are" }, { word: "released", punctuation: "," }, { word: "share" },
        { word: "prices" }, { word: "experience" }, { word: "noticeable" }, { word: "fluctuations", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "时间状语从句", phonetic: "/wɛnˈɛvər/ /ˈkwɔːrtərli/ /ˈɜːrnɪŋz/ /ɑːr/ /rɪˈliːst/", translation: "每当季度财报发布",
          subComponents: [{ startIndex: 0, words: [
            { word: "Whenever" }, { word: "quarterly" }, { word: "earnings" }, { word: "are" }, { word: "released", punctuation: "," }, { word: "share" }
          ] }] 
        },
        { start: 6, end: 7, label: "主句主语", phonetic: "/ʃɛr/ /ˈpraɪsɪz/", translation: "股价",
          subComponents: [{ startIndex: 0, words: [
            { word: "prices" }, { word: "experience" }
          ] }] 
        },
        { start: 8, end: 9, label: "谓语", phonetic: "/ɪkˈspɪəriəns/ /ˈnoʊtɪsəbəl/ /ˌflʌktʃuˈeɪʃənz/", translation: "都会出现明显波动",
          subComponents: [{ startIndex: 0, words: [
            { word: "noticeable" }, { word: "fluctuations", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Whenever 引导时间状语从句，表示每当……时。" }
      ]
    },
    {
      id: "q_adverbial_s133",
      chinese: "除非双方就知识产权归属达成明确条款，否则合作无法继续",
      english_full: "Unless both sides agree on explicit terms regarding intellectual property ownership, the partnership cannot continue.",
      words: [
        { word: "Unless" }, { word: "both" }, { word: "sides" }, { word: "agree" }, { word: "on" }, { word: "explicit" },
        { word: "terms" }, { word: "regarding" }, { word: "intellectual" }, { word: "property" }, { word: "ownership", punctuation: "," }, { word: "the" },
        { word: "partnership" }, { word: "cannot" }, { word: "continue", punctuation: "." }
      ],
      components: [
        { start: 0, end: 11, label: "条件状语从句", phonetic: "/ʌnˈlɛs/ /bəʊθ/ /saɪdz/ /əˈgriː/ /ɒn/ /ɪkˈsplɪsɪt/ /tɜːrmz/ /rɪˈgɑːrdɪŋ/ /ˌɪntəˈlɛktʃuəl/ /ˈprɒpərti/ /ˈoʊnərʃɪp/", translation: "除非双方就知识产权归属达成明确条款",
          subComponents: [{ startIndex: 0, words: [
            { word: "Unless" }, { word: "both" }, { word: "sides" }, { word: "agree" }, { word: "on" }, { word: "explicit" }, { word: "terms" }, { word: "regarding" }, { word: "intellectual" }, { word: "property" }, { word: "ownership", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 12, end: 13, label: "主句主语", phonetic: "/ðə/ /ˈpɑːrtnərʃɪp/", translation: "合作",
          subComponents: [{ startIndex: 0, words: [
            { word: "partnership" }, { word: "cannot" }
          ] }] 
        },
        { start: 14, end: 14, label: "谓语", phonetic: "/ˈkænɒt/ /kənˈtɪnjuː/", translation: "无法继续",
          subComponents: [{ startIndex: 0, words: [
            { word: "continue", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "Unless 引导条件状语从句，表示唯一可解除障碍的条件。" }
      ]
    },
    {
      id: "q_adverbial_s134",
      chinese: "为了便于审计追踪，所有交易记录必须实时同步至云端",
      english_full: "So that audit trails can be easily tracked, all transaction records must be synchronized to the cloud in real time.",
      words: [
        { word: "So" }, { word: "that" }, { word: "audit" }, { word: "trails" }, { word: "can" }, { word: "be" },
        { word: "easily" }, { word: "tracked", punctuation: "," }, { word: "all" }, { word: "transaction" }, { word: "records" }, { word: "must" },
        { word: "be" }, { word: "synchronized" }, { word: "to" }, { word: "the" }, { word: "cloud" }, { word: "in" },
        { word: "real" }, { word: "time", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "目的状语从句", phonetic: "/səʊ/ /ðæt/ /ˈɔːdɪt/ /treɪlz/ /kæn/ /biː/ /ˈiːzɪli/ /trækt/", translation: "为了便于审计追踪",
          subComponents: [{ startIndex: 0, words: [
            { word: "So" }, { word: "that" }, { word: "audit" }, { word: "trails" }, { word: "can" }, { word: "be" }, { word: "easily" }, { word: "tracked", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 10, label: "主句主语", phonetic: "/ɔːl/ /trænˈzækʃən/ /rɪˈkɔːrdz/", translation: "所有交易记录",
          subComponents: [{ startIndex: 0, words: [
            { word: "all" }, { word: "transaction" }, { word: "records" }
          ] }] 
        },
        { start: 11, end: 19, label: "谓语", phonetic: "/mʌst/ /biː/ /ˈsɪŋkrənaɪzd/ /tuː/ /ðə/ /klaʊd/ /ɪn/ /riːl/ /taɪm/", translation: "必须实时同步至云端",
          subComponents: [{ startIndex: 0, words: [
            { word: "must" }, { word: "be" }, { word: "synchronized" }, { word: "to" }, { word: "the" }, { word: "cloud" }, { word: "in" }, { word: "real" }, { word: "time", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "目的状语从句", text: "So that 引导目的状语从句，从句主语 audit trails 与主句主语不同。" }
      ]
    },
    {
      id: "q_adverbial_s135",
      chinese: "这份报告包含的错误如此之多，以至于不得不撤回重编",
      english_full: "The report contained so many errors that it had to be withdrawn and revised.",
      words: [
        { word: "The" }, { word: "report" }, { word: "contained" }, { word: "so" }, { word: "many" }, { word: "errors" },
        { word: "that" }, { word: "it" }, { word: "had" }, { word: "to" }, { word: "be" }, { word: "withdrawn" },
        { word: "and" }, { word: "revised", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "主句", phonetic: "/ðə/ /rɪˈpɔːrt/ /kənˈteɪnd/ /səʊ/ /ˈmɛni/", translation: "这份报告包含的错误如此之多",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "report" }, { word: "contained" }, { word: "so" }, { word: "many" }
          ] }] 
        },
        { start: 5, end: 13, label: "结果状语从句", phonetic: "/ˈɛrərz/ /ðæt/ /ɪt/ /hæd/ /tuː/ /biː/ /wɪðˈdrɔːn/ /ænd/ /rɪˈvaɪzd/", translation: "以至于不得不撤回重编",
          subComponents: [{ startIndex: 0, words: [
            { word: "errors" }, { word: "that" }, { word: "it" }, { word: "had" }, { word: "to" }, { word: "be" }, { word: "withdrawn" }, { word: "and" }, { word: "revised", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "结果状语从句", text: "So many + 名词 + that 引导结果状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s136",
      chinese: "尽管估值偏高，投资者仍对该初创企业表现出浓厚兴趣",
      english_full: "Although the valuation appears inflated, investors still show strong interest in the startup.",
      words: [
        { word: "Although" }, { word: "the" }, { word: "valuation" }, { word: "appears" }, { word: "inflated", punctuation: "," }, { word: "investors" },
        { word: "still" }, { word: "show" }, { word: "strong" }, { word: "interest" }, { word: "in" }, { word: "the" },
        { word: "startup", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "让步状语从句", phonetic: "/ɔːlˈðoʊ/ /ðə/ /ˌvæljuˈeɪʃən/ /əˈpɪərz/ /ɪnˈfleɪtɪd/", translation: "尽管估值偏高",
          subComponents: [{ startIndex: 0, words: [
            { word: "Although" }, { word: "the" }, { word: "valuation" }, { word: "appears" }, { word: "inflated", punctuation: "," }, { word: "investors" }
          ] }] 
        },
        { start: 6, end: 6, label: "主句主语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [
            { word: "still" }
          ] }] 
        },
        { start: 7, end: 12, label: "谓语", phonetic: "/stɪl/ /ʃoʊ/ /strɒŋ/ /ˈɪntrəst/ /ɪn/ /ðə/ /ˈstɑːrtʌp/", translation: "仍对该初创企业表现出浓厚兴趣",
          subComponents: [{ startIndex: 0, words: [
            { word: "show" }, { word: "strong" }, { word: "interest" }, { word: "in" }, { word: "the" }, { word: "startup", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "Although 引导让步状语从句，主句用 still 加强对比。" }
      ]
    },
    {
      id: "q_adverbial_s137",
      chinese: "自从引入人工智能辅助诊断，医疗误诊率显著下降",
      english_full: "Ever since artificial intelligence-assisted diagnosis was introduced, medical misdiagnosis rates have dropped significantly.",
      words: [
        { word: "Ever" }, { word: "since" }, { word: "artificial" }, { word: "intelligence-assisted" }, { word: "diagnosis" }, { word: "was" },
        { word: "introduced", punctuation: "," }, { word: "medical" }, { word: "misdiagnosis" }, { word: "rates" }, { word: "have" }, { word: "dropped" },
        { word: "significantly", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/ˈɛvər/ /sɪns/ /ˌɑːrtɪfɪʃəl/ /ɪnˈtɛlɪdʒəns-əˈsɪstɪd/ /ˈdaɪəɡnəʊsɪs/ /wɒz/ /ɪnˈtrəduːst/", translation: "自从引入人工智能辅助诊断",
          subComponents: [{ startIndex: 0, words: [
            { word: "Ever" }, { word: "since" }, { word: "artificial" }, { word: "intelligence-assisted" }, { word: "diagnosis" }, { word: "was" }, { word: "introduced", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 9, label: "主句主语", phonetic: "/ˈmɛdɪkəl/ /ˌmɪsdaɪəɡˈnoʊsɪs/ /reɪts/", translation: "医疗误诊率",
          subComponents: [{ startIndex: 0, words: [
            { word: "medical" }, { word: "misdiagnosis" }, { word: "rates" }
          ] }] 
        },
        { start: 10, end: 12, label: "谓语", phonetic: "/hæv/ /drɒpt/ /sɪɡˈnɪfɪkəntli/", translation: "显著下降",
          subComponents: [{ startIndex: 0, words: [
            { word: "have" }, { word: "dropped" }, { word: "significantly", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Ever since 加强 since 的时间含义，主句用现在完成时。" }
      ]
    },
    {
      id: "q_adverbial_s138",
      chinese: "只要候选人满足最低资质要求，就均可进入下一轮面试",
      english_full: "On condition that candidates meet the minimum qualification requirements, they may all proceed to the next interview round.",
      words: [
        { word: "On" }, { word: "condition" }, { word: "that" }, { word: "candidates" }, { word: "meet" }, { word: "the" },
        { word: "minimum" }, { word: "qualification" }, { word: "requirements", punctuation: "," }, { word: "they" }, { word: "may" }, { word: "all" },
        { word: "proceed" }, { word: "to" }, { word: "the" }, { word: "next" }, { word: "interview" }, { word: "round", punctuation: "." }
      ],
      components: [
        { start: 0, end: 9, label: "条件状语从句", phonetic: "/ɒn/ /kənˈdɪʃən/ /ðæt/ /ˈkændɪdeɪts/ /miːt/ /ðə/ /ˈmɪnɪməm/ /ˌkwɒlɪfɪˈkeɪʃən/ /rɪˈkwaɪərmənts/", translation: "只要候选人满足最低资质要求",
          subComponents: [{ startIndex: 0, words: [
            { word: "On" }, { word: "condition" }, { word: "that" }, { word: "candidates" }, { word: "meet" }, { word: "the" }, { word: "minimum" }, { word: "qualification" }, { word: "requirements", punctuation: "," }, { word: "they" }
          ] }] 
        },
        { start: 10, end: 10, label: "主句主语", phonetic: "/ðeɪ/", translation: "候选人",
          subComponents: [{ startIndex: 0, words: [
            { word: "may" }
          ] }] 
        },
        { start: 11, end: 17, label: "谓语", phonetic: "/meɪ/ /ɔːl/ /prəˈsiːd/ /tuː/ /ðə/ /nɛkst/ /ˈɪntəvjuː/ /raʊnd/", translation: "就均可进入下一轮面试",
          subComponents: [{ startIndex: 0, words: [
            { word: "all" }, { word: "proceed" }, { word: "to" }, { word: "the" }, { word: "next" }, { word: "interview" }, { word: "round", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "On condition that 引导条件状语从句，正式书面语。" }
      ]
    },
    {
      id: "q_adverbial_s139",
      chinese: "她阐述观点的方式犹如一位资深外交官",
      english_full: "She articulated her views as a seasoned diplomat would.",
      words: [
        { word: "She" }, { word: "articulated" }, { word: "her" }, { word: "views" }, { word: "as" }, { word: "a" },
        { word: "seasoned" }, { word: "diplomat" }, { word: "would", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/ʃiː/ /ɑːˈtɪkjuleɪtɪd/ /hɜːr/ /vjuːz/", translation: "她阐述观点",
          subComponents: [{ startIndex: 0, words: [
            { word: "She" }, { word: "articulated" }, { word: "her" }, { word: "views" }
          ] }] 
        },
        { start: 4, end: 8, label: "方式状语从句", phonetic: "/æz/ /ə/ /ˈsiːzənd/ /ˈdɪpləmæt/ /wʊd/", translation: "的方式犹如一位资深外交官",
          subComponents: [{ startIndex: 0, words: [
            { word: "as" }, { word: "a" }, { word: "seasoned" }, { word: "diplomat" }, { word: "would", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "方式状语从句", text: "As 引导方式状语从句，would 表示习惯性或典型方式。" }
      ]
    },
    {
      id: "q_adverbial_s140",
      chinese: "新系统的响应速度比旧平台快了近五倍",
      english_full: "The new system responds nearly five times faster than the legacy platform does.",
      words: [
        { word: "The" }, { word: "new" }, { word: "system" }, { word: "responds" }, { word: "nearly" }, { word: "five" },
        { word: "times" }, { word: "faster" }, { word: "than" }, { word: "the" }, { word: "legacy" }, { word: "platform" },
        { word: "does", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/ðə/ /njuː/ /ˈsɪstəm/ /rɪˈspɒndz/", translation: "新系统的响应速度",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "new" }, { word: "system" }, { word: "responds" }
          ] }] 
        },
        { start: 4, end: 12, label: "比较状语从句", phonetic: "/ˈnɪəli/ /faɪv/ /taɪmz/ /ˈfɑːstər/ /ðæn/ /ðə/ /ˈlɛgəsi/ /ˈplætfɔːrm/ /dʌz/", translation: "比旧平台快了近五倍",
          subComponents: [{ startIndex: 0, words: [
            { word: "nearly" }, { word: "five" }, { word: "times" }, { word: "faster" }, { word: "than" }, { word: "the" }, { word: "legacy" }, { word: "platform" }, { word: "does", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "Than 引导比较状语从句，does 替代 responds 避免重复。" }
      ]
    },
    {
      id: "q_adverbial_s141",
      chinese: "在竞争对手发布新品之前，我们的市场团队已完成了差异化定位",
      english_full: "Before our rivals launched their new product, our marketing team had completed differentiated positioning.",
      words: [
        { word: "Before" }, { word: "our" }, { word: "rivals" }, { word: "launched" }, { word: "their" }, { word: "new" },
        { word: "product", punctuation: "," }, { word: "our" }, { word: "marketing" }, { word: "team" }, { word: "had" }, { word: "completed" },
        { word: "differentiated" }, { word: "positioning", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /aʊər/ /ˈraɪvəlz/ /lɔːntʃt/ /ðɛr/ /njuː/ /ˈprɒdʌkt/", translation: "在竞争对手发布新品之前",
          subComponents: [{ startIndex: 0, words: [
            { word: "Before" }, { word: "our" }, { word: "rivals" }, { word: "launched" }, { word: "their" }, { word: "new" }, { word: "product", punctuation: "," }, { word: "our" }
          ] }] 
        },
        { start: 8, end: 11, label: "主句主语", phonetic: "/aʊər/ /ˈmɑːrkɪtɪŋ/ /tiːm/", translation: "我们的市场团队",
          subComponents: [{ startIndex: 0, words: [
            { word: "marketing" }, { word: "team" }, { word: "had" }, { word: "completed" }
          ] }] 
        },
        { start: 12, end: 13, label: "谓语", phonetic: "/hæd/ /kəmˈpliːtɪd/ /ˌdɪfəˈrɛnʃieɪtɪd/ /pəˈzɪʃənɪŋ/", translation: "已完成了差异化定位",
          subComponents: [{ startIndex: 0, words: [
            { word: "differentiated" }, { word: "positioning", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Before 引导时间状语从句，主句用过去完成时表示更早完成的动作。" }
      ]
    },
    {
      id: "q_adverbial_s142",
      chinese: "无论天气多么恶劣，救援队伍都会继续搜寻幸存者",
      english_full: "However severe the weather becomes, rescue teams will continue searching for survivors.",
      words: [
        { word: "However" }, { word: "severe" }, { word: "the" }, { word: "weather" }, { word: "becomes", punctuation: "," }, { word: "rescue" },
        { word: "teams" }, { word: "will" }, { word: "continue" }, { word: "searching" }, { word: "for" }, { word: "survivors", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "让步状语从句", phonetic: "/haʊˈɛvər/ /sɪˈvɪər/ /ðə/ /ˈwɛðər/ /bɪˈkʌmz/", translation: "无论天气多么恶劣",
          subComponents: [{ startIndex: 0, words: [
            { word: "However" }, { word: "severe" }, { word: "the" }, { word: "weather" }, { word: "becomes", punctuation: "," }, { word: "rescue" }
          ] }] 
        },
        { start: 6, end: 7, label: "主句主语", phonetic: "/ˈrɛskjuː/ /tiːmz/", translation: "救援队伍",
          subComponents: [{ startIndex: 0, words: [
            { word: "teams" }, { word: "will" }
          ] }] 
        },
        { start: 8, end: 11, label: "谓语", phonetic: "/wɪl/ /kənˈtɪnjuː/ /ˈsɜːrtʃɪŋ/ /fɔːr/ /sərˈvaɪvərz/", translation: "都会继续搜寻幸存者",
          subComponents: [{ startIndex: 0, words: [
            { word: "continue" }, { word: "searching" }, { word: "for" }, { word: "survivors", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "However + 形容词 + 主语 + 谓语构成让步状语从句倒装。" }
      ]
    },
    {
      id: "q_adverbial_s143",
      chinese: "由于供应链高度集中，任何单一节点的中断都可能引发连锁反应",
      english_full: "In that the supply chain is highly concentrated, any disruption at a single node could trigger a domino effect.",
      words: [
        { word: "In" }, { word: "that" }, { word: "the" }, { word: "supply" }, { word: "chain" }, { word: "is" },
        { word: "highly" }, { word: "concentrated", punctuation: "," }, { word: "any" }, { word: "disruption" }, { word: "at" }, { word: "a" },
        { word: "single" }, { word: "node" }, { word: "could" }, { word: "trigger" }, { word: "a" }, { word: "domino" },
        { word: "effect", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "原因状语从句", phonetic: "/ɪn/ /ðæt/ /ðə/ /səˈplaɪ/ /tʃeɪn/ /ɪz/ /ˈhaɪli/ /ˈkɒnsəntreɪtɪd/", translation: "由于供应链高度集中",
          subComponents: [{ startIndex: 0, words: [
            { word: "In" }, { word: "that" }, { word: "the" }, { word: "supply" }, { word: "chain" }, { word: "is" }, { word: "highly" }, { word: "concentrated", punctuation: "," }, { word: "any" }
          ] }] 
        },
        { start: 9, end: 16, label: "主句主语", phonetic: "/ˈɛni/ /dɪsˈrʌpʃən/ /æt/ /ə/ /ˈsɪŋgəl/ /noʊd/", translation: "任何单一节点的中断",
          subComponents: [{ startIndex: 0, words: [
            { word: "disruption" }, { word: "at" }, { word: "a" }, { word: "single" }, { word: "node" }, { word: "could" }, { word: "trigger" }, { word: "a" }
          ] }] 
        },
        { start: 17, end: 18, label: "谓语", phonetic: "/kʊd/ /ˈtrɪɡər/ /ə/ /ˈdɒmɪnoʊ/ /ɪˈfɛkt/", translation: "都可能引发连锁反应",
          subComponents: [{ startIndex: 0, words: [
            { word: "domino" }, { word: "effect", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "In that 引导原因状语从句，强调某一具体理由，多用于正式书面语。" }
      ]
    },
    {
      id: "q_adverbial_s144",
      chinese: "一旦检测到异常流量，防火墙会自动阻断可疑连接",
      english_full: "The moment abnormal traffic is detected, the firewall will automatically block suspicious connections.",
      words: [
        { word: "The" }, { word: "moment" }, { word: "abnormal" }, { word: "traffic" }, { word: "is" }, { word: "detected", punctuation: "," },
        { word: "the" }, { word: "firewall" }, { word: "will" }, { word: "automatically" }, { word: "block" }, { word: "suspicious" },
        { word: "connections", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/ðə/ /ˈmoʊmənt/ /æbˈnɔːrməl/ /ˈtræfɪk/ /ɪz/ /dɪˈtɛktɪd/", translation: "一旦检测到异常流量",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "moment" }, { word: "abnormal" }, { word: "traffic" }, { word: "is" }, { word: "detected", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ðə/ /ˈfaɪərwɔːl/", translation: "防火墙",
          subComponents: [{ startIndex: 0, words: [
            { word: "firewall" }, { word: "will" }
          ] }] 
        },
        { start: 9, end: 12, label: "谓语", phonetic: "/wɪl/ /ˌɔːtəˈmætɪkli/ /blɒk/ /səˈspɪʃəs/ /kəˈnɛkʃənz/", translation: "会自动阻断可疑连接",
          subComponents: [{ startIndex: 0, words: [
            { word: "automatically" }, { word: "block" }, { word: "suspicious" }, { word: "connections", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "The moment 相当于 as soon as，引导时间状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s145",
      chinese: "倘若不采取减排措施，全球平均气温将持续上升",
      english_full: "If no emission reduction measures are taken, global average temperatures will continue to rise.",
      words: [
        { word: "If" }, { word: "no" }, { word: "emission" }, { word: "reduction" }, { word: "measures" }, { word: "are" },
        { word: "taken", punctuation: "," }, { word: "global" }, { word: "average" }, { word: "temperatures" }, { word: "will" }, { word: "continue" },
        { word: "to" }, { word: "rise", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "条件状语从句", phonetic: "/ɪf/ /nəʊ/ /ɪˈmɪʃən/ /rɪˈdʌkʃən/ /ˈmɛʒərz/ /ɑːr/ /ˈteɪkən/", translation: "倘若不采取减排措施",
          subComponents: [{ startIndex: 0, words: [
            { word: "If" }, { word: "no" }, { word: "emission" }, { word: "reduction" }, { word: "measures" }, { word: "are" }, { word: "taken", punctuation: "," }, { word: "global" }
          ] }] 
        },
        { start: 8, end: 11, label: "主句主语", phonetic: "/ˈgləʊbəl/ /ˈævərɪdʒ/ /ˈtɛmpərətʃərz/", translation: "全球平均气温",
          subComponents: [{ startIndex: 0, words: [
            { word: "average" }, { word: "temperatures" }, { word: "will" }, { word: "continue" }
          ] }] 
        },
        { start: 12, end: 13, label: "谓语", phonetic: "/wɪl/ /kənˈtɪnjuː/ /tuː/ /raɪz/", translation: "将持续上升",
          subComponents: [{ startIndex: 0, words: [
            { word: "to" }, { word: "rise", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "If 引导条件状语从句，从句用被动语态。" }
      ]
    },
    {
      id: "q_adverbial_s146",
      chinese: "尽管董事会内部存在分歧，最终投票仍全票通过了该方案",
      english_full: "Though there was internal disagreement within the board, the final vote unanimously approved the proposal.",
      words: [
        { word: "Though" }, { word: "there" }, { word: "was" }, { word: "internal" }, { word: "disagreement" }, { word: "within" },
        { word: "the" }, { word: "board", punctuation: "," }, { word: "the" }, { word: "final" }, { word: "vote" }, { word: "unanimously" },
        { word: "approved" }, { word: "the" }, { word: "proposal", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "让步状语从句", phonetic: "/ðoʊ/ /ðɛr/ /wɒz/ /ɪnˈtɜːrnəl/ /ˌdɪsəˈgriːmənt/ /wɪˈðɪn/ /ðə/ /bɔːrd/", translation: "尽管董事会内部存在分歧",
          subComponents: [{ startIndex: 0, words: [
            { word: "Though" }, { word: "there" }, { word: "was" }, { word: "internal" }, { word: "disagreement" }, { word: "within" }, { word: "the" }, { word: "board", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 9, end: 11, label: "主句主语", phonetic: "/ðə/ /ˈfaɪnəl/ /vəʊt/", translation: "最终投票",
          subComponents: [{ startIndex: 0, words: [
            { word: "final" }, { word: "vote" }, { word: "unanimously" }
          ] }] 
        },
        { start: 12, end: 14, label: "谓语", phonetic: "/juːˈnænɪməsli/ /əˈpruːvd/ /ðə/ /prəˈpoʊzəl/", translation: "仍全票通过了该方案",
          subComponents: [{ startIndex: 0, words: [
            { word: "approved" }, { word: "the" }, { word: "proposal", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "Though 引导让步状语从句，语气略弱于 although。" }
      ]
    },
    {
      id: "q_adverbial_s147",
      chinese: "凡是涉及跨境数据传输的业务，都必须遵守当地隐私法规",
      english_full: "Wherever cross-border data transfers are involved, businesses must comply with local privacy regulations.",
      words: [
        { word: "Wherever" }, { word: "cross-border" }, { word: "data" }, { word: "transfers" }, { word: "are" }, { word: "involved", punctuation: "," },
        { word: "businesses" }, { word: "must" }, { word: "comply" }, { word: "with" }, { word: "local" }, { word: "privacy" },
        { word: "regulations", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "地点状语从句", phonetic: "/wɛərˈɛvər/ /krɒs/ /ˈbɔːrdər/ /ˈdeɪtə/ /ˈtrænsfɜːrz/ /ɑːr/ /ɪnˈvɒlvd/", translation: "凡是涉及跨境数据传输的业务",
          subComponents: [{ startIndex: 0, words: [
            { word: "Wherever" }, { word: "cross-border" }, { word: "data" }, { word: "transfers" }, { word: "are" }, { word: "involved", punctuation: "," }, { word: "businesses" }
          ] }] 
        },
        { start: 7, end: 7, label: "主句主语", phonetic: "/ˈbɪznɪsɪz/", translation: "业务",
          subComponents: [{ startIndex: 0, words: [
            { word: "must" }
          ] }] 
        },
        { start: 8, end: 12, label: "谓语", phonetic: "/mʌst/ /kəmˈplaɪ/ /wɪð/ /ˈləʊkəl/ /ˈprɪvəsi/ /ˌrɛgjuˈleɪʃənz/", translation: "都必须遵守当地隐私法规",
          subComponents: [{ startIndex: 0, words: [
            { word: "comply" }, { word: "with" }, { word: "local" }, { word: "privacy" }, { word: "regulations", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "地点状语从句", text: "Wherever 引导地点状语从句，强调任何涉及之处。" }
      ]
    },
    {
      id: "q_adverbial_s148",
      chinese: "他发言时的措辞谨慎得好像每句话都经过法律审查",
      english_full: "He spoke so cautiously that it seemed every sentence had been vetted by legal counsel.",
      words: [
        { word: "He" }, { word: "spoke" }, { word: "so" }, { word: "cautiously" }, { word: "that" }, { word: "it" },
        { word: "seemed" }, { word: "every" }, { word: "sentence" }, { word: "had" }, { word: "been" }, { word: "vetted" },
        { word: "by" }, { word: "legal" }, { word: "counsel", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/hiː/ /spəʊk/ /səʊ/ /ˈkɔːʃəsli/", translation: "他发言时的措辞如此谨慎",
          subComponents: [{ startIndex: 0, words: [
            { word: "He" }, { word: "spoke" }, { word: "so" }, { word: "cautiously" }
          ] }] 
        },
        { start: 4, end: 14, label: "结果状语从句", phonetic: "/ðæt/ /ɪt/ /siːmd/ /ˈɛvri/ /ˈsɛntəns/ /hæd/ /bɪn/ /ˈvɛtɪd/ /baɪ/ /ˈliːgəl/ /ˈkaʊnsəl/", translation: "好像每句话都经过法律审查",
          subComponents: [{ startIndex: 0, words: [
            { word: "that" }, { word: "it" }, { word: "seemed" }, { word: "every" }, { word: "sentence" }, { word: "had" }, { word: "been" }, { word: "vetted" }, { word: "by" }, { word: "legal" }, { word: "counsel", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "结果状语从句", text: "So + 副词 + that 引导结果状语从句，that 从句进一步说明结果。" }
      ]
    },
    {
      id: "q_adverbial_s149",
      chinese: "为了保障员工福祉，公司推出了弹性工作制和心理健康支持计划",
      english_full: "Lest employee well-being be compromised, the company introduced flexible work arrangements and mental health support programs.",
      words: [
        { word: "Lest" }, { word: "employee" }, { word: "well-being" }, { word: "be" }, { word: "compromised", punctuation: "," }, { word: "the" },
        { word: "company" }, { word: "introduced" }, { word: "flexible" }, { word: "work" }, { word: "arrangements" }, { word: "and" },
        { word: "mental" }, { word: "health" }, { word: "support" }, { word: "programs", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "目的状语从句", phonetic: "/lɛst/ /ɪmˈplɔɪiː/ /ˈwɛlbɪŋ/ /biː/ /kəmˈprɒmɪzd/", translation: "为了保障员工福祉",
          subComponents: [{ startIndex: 0, words: [
            { word: "Lest" }, { word: "employee" }, { word: "well-being" }, { word: "be" }, { word: "compromised", punctuation: "," }, { word: "the" }, { word: "company" }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "公司",
          subComponents: [{ startIndex: 0, words: [
            { word: "introduced" }, { word: "flexible" }
          ] }] 
        },
        { start: 9, end: 15, label: "谓语", phonetic: "/ˌɪntrəˈdjuːst/ /ˈflɛksəbəl/ /wɜːrk/ /əˈreɪndʒmənts/ /ænd/ /ˈmɛntəl/ /hɛlθ/ /səˈpɔːrt/ /ˈproʊgræmz/", translation: "推出了弹性工作制和心理健康支持计划",
          subComponents: [{ startIndex: 0, words: [
            { word: "work" }, { word: "arrangements" }, { word: "and" }, { word: "mental" }, { word: "health" }, { word: "support" }, { word: "programs", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "目的状语从句", text: "Lest 引导目的状语从句，表示以免，从句用虚拟语气 (should) be 省略 should。" }
      ]
    },
    {
      id: "q_adverbial_s150",
      chinese: "这项投资带来的回报比最初的可行性研究报告预测的高出两倍",
      english_full: "The returns on this investment are twice as high as the initial feasibility study predicted.",
      words: [
        { word: "The" }, { word: "returns" }, { word: "on" }, { word: "this" }, { word: "investment" }, { word: "are" },
        { word: "twice" }, { word: "as" }, { word: "high" }, { word: "as" }, { word: "the" }, { word: "initial" },
        { word: "feasibility" }, { word: "study" }, { word: "predicted", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "主句", phonetic: "/ðə/ /rɪˈtɜːrnz/ /ɒn/ /ðɪs/ /ɪnˈvɛstmənt/ /ɑːr/", translation: "这项投资带来的回报",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "returns" }, { word: "on" }, { word: "this" }, { word: "investment" }, { word: "are" }
          ] }] 
        },
        { start: 6, end: 14, label: "比较状语从句", phonetic: "/twaɪs/ /æz/ /haɪ/ /æz/ /ði/ /ɪˈnɪʃəl/ /ˌfiːzəˈbɪlɪti/ /ˈstʊdi/ /prɪˈdɪktɪd/", translation: "比最初的可行性研究报告预测的高出两倍",
          subComponents: [{ startIndex: 0, words: [
            { word: "twice" }, { word: "as" }, { word: "high" }, { word: "as" }, { word: "the" }, { word: "initial" }, { word: "feasibility" }, { word: "study" }, { word: "predicted", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "As...as 结构中的第二个 as 引导比较状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s151",
      chinese: "当市场信心崩溃时，流动性往往会瞬间枯竭",
      english_full: "When market confidence collapses, liquidity tends to evaporate almost instantly.",
      words: [
        { word: "When" }, { word: "market" }, { word: "confidence" }, { word: "collapses", punctuation: "," }, { word: "liquidity" }, { word: "tends" },
        { word: "to" }, { word: "evaporate" }, { word: "almost" }, { word: "instantly", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "时间状语从句", phonetic: "/wɛn/ /ˈmɑːrkɪt/ /ˈkɒnfɪdəns/ /kəˈlæpsɪz/", translation: "当市场信心崩溃时",
          subComponents: [{ startIndex: 0, words: [
            { word: "When" }, { word: "market" }, { word: "confidence" }, { word: "collapses", punctuation: "," }, { word: "liquidity" }
          ] }] 
        },
        { start: 5, end: 5, label: "主句主语", phonetic: "/lɪˈkwɪdɪti/", translation: "流动性",
          subComponents: [{ startIndex: 0, words: [
            { word: "tends" }
          ] }] 
        },
        { start: 6, end: 9, label: "谓语", phonetic: "/tɛndz/ /tuː/ /ɪˈvæpəreɪt/ /ˈɔːlməʊst/ /ɪnˈstəntli/", translation: "往往会瞬间枯竭",
          subComponents: [{ startIndex: 0, words: [
            { word: "to" }, { word: "evaporate" }, { word: "almost" }, { word: "instantly", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "When 引导时间状语从句，主句用一般现在时表示规律性现象。" }
      ]
    },
    {
      id: "q_adverbial_s152",
      chinese: "只要保持研发投入强度，企业就能在技术上保持领先",
      english_full: "So long as R and D spending intensity is maintained, firms can stay technologically ahead.",
      words: [
        { word: "So" }, { word: "long" }, { word: "as" }, { word: "R" }, { word: "and" }, { word: "D" },
        { word: "spending" }, { word: "intensity" }, { word: "is" }, { word: "maintained", punctuation: "," }, { word: "firms" }, { word: "can" },
        { word: "stay" }, { word: "technologically" }, { word: "ahead", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "条件状语从句", phonetic: "/səʊ/ /lɒŋ/ /æz/ /ɑːr/ /ænd/ /diː/ /ˈspɛndɪŋ/ /ɪnˈtɛnsɪti/ /ɪz/ /meɪnˈteɪnd/", translation: "只要保持研发投入强度",
          subComponents: [{ startIndex: 0, words: [
            { word: "So" }, { word: "long" }, { word: "as" }, { word: "R" }, { word: "and" }, { word: "D" }, { word: "spending" }, { word: "intensity" }, { word: "is" }
          ] }] 
        },
        { start: 9, end: 9, label: "主句主语", phonetic: "/fɜːrmz/", translation: "企业",
          subComponents: [{ startIndex: 0, words: [
            { word: "maintained", punctuation: "," }
          ] }] 
        },
        { start: 10, end: 14, label: "谓语", phonetic: "/kæn/ /steɪ/ /ˌtɛknəˈlɒdʒɪkli/ /əˈhɛd/", translation: "就能在技术上保持领先",
          subComponents: [{ startIndex: 0, words: [
            { word: "firms" }, { word: "can" }, { word: "stay" }, { word: "technologically" }, { word: "ahead", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "So long as 与 as long as 同义，引导条件状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s153",
      chinese: "因为消费者偏好转向可持续产品，传统制造商被迫调整生产线",
      english_full: "Since consumer preferences have shifted toward sustainable products, traditional manufacturers have been forced to retool their production lines.",
      words: [
        { word: "Since" }, { word: "consumer" }, { word: "preferences" }, { word: "have" }, { word: "shifted" }, { word: "toward" },
        { word: "sustainable" }, { word: "products", punctuation: "," }, { word: "traditional" }, { word: "manufacturers" }, { word: "have" }, { word: "been" },
        { word: "forced" }, { word: "to" }, { word: "retool" }, { word: "their" }, { word: "production" }, { word: "lines", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "原因状语从句", phonetic: "/sɪns/ /kənˈsjuːmər/ /ˈprɛfərənsɪz/ /hæv/ /ʃɪftɪd/ /təˈwɔːrd/ /səˈsteɪnəbəl/ /ˈprɒdʌkts/", translation: "因为消费者偏好转向可持续产品",
          subComponents: [{ startIndex: 0, words: [
            { word: "Since" }, { word: "consumer" }, { word: "preferences" }, { word: "have" }, { word: "shifted" }, { word: "toward" }, { word: "sustainable" }, { word: "products", punctuation: "," }, { word: "traditional" }
          ] }] 
        },
        { start: 9, end: 10, label: "主句主语", phonetic: "/trəˈdɪʃənəl/ /ˌmænjʊˈfæktʃərərz/", translation: "传统制造商",
          subComponents: [{ startIndex: 0, words: [
            { word: "manufacturers" }, { word: "have" }
          ] }] 
        },
        { start: 11, end: 17, label: "谓语", phonetic: "/hæv/ /bɪn/ /fɔːrst/ /tuː/ /riːˈtuːl/ /ðɛr/ /prəˈdʌkʃən/ /laɪnz/", translation: "被迫调整生产线",
          subComponents: [{ startIndex: 0, words: [
            { word: "been" }, { word: "forced" }, { word: "to" }, { word: "retool" }, { word: "their" }, { word: "production" }, { word: "lines", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "Since 引导原因状语从句，侧重已知且持续的原因。" }
      ]
    },
    {
      id: "q_adverbial_s154",
      chinese: "在最后一轮磋商结束以后，双方正式签署了谅解备忘录",
      english_full: "After the final round of consultations concluded, both parties formally signed a memorandum of understanding.",
      words: [
        { word: "After" }, { word: "the" }, { word: "final" }, { word: "round" }, { word: "of" }, { word: "consultations" },
        { word: "concluded", punctuation: "," }, { word: "both" }, { word: "parties" }, { word: "formally" }, { word: "signed" }, { word: "a" },
        { word: "memorandum" }, { word: "of" }, { word: "understanding", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "时间状语从句", phonetic: "/ˈæftər/ /ðə/ /ˈfaɪnəl/ /raʊnd/ /ɒv/ /ˌkɒnsəlˈteɪʃənz/ /kənˈkluːdɪd/", translation: "在最后一轮磋商结束以后",
          subComponents: [{ startIndex: 0, words: [
            { word: "After" }, { word: "the" }, { word: "final" }, { word: "round" }, { word: "of" }, { word: "consultations" }, { word: "concluded", punctuation: "," }, { word: "both" }
          ] }] 
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/bəʊθ/ /ˈpɑːrtiz/", translation: "双方",
          subComponents: [{ startIndex: 0, words: [
            { word: "parties" }, { word: "formally" }
          ] }] 
        },
        { start: 10, end: 14, label: "谓语", phonetic: "/ˈfɔːrməli/ /saɪnd/ /ə/ /ˌmɛməˈrændəm/ /ɒv/ /ˌʌndərˈstændɪŋ/", translation: "正式签署了谅解备忘录",
          subComponents: [{ startIndex: 0, words: [
            { word: "signed" }, { word: "a" }, { word: "memorandum" }, { word: "of" }, { word: "understanding", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "After 引导时间状语从句，从句谓语 concluded 为不及物用法。" }
      ]
    },
    {
      id: "q_adverbial_s155",
      chinese: "无论问题多么复杂，跨部门协作都是找到解决方案的关键",
      english_full: "No matter how complex the problem is, cross-departmental collaboration is key to finding a solution.",
      words: [
        { word: "No" }, { word: "matter" }, { word: "how" }, { word: "complex" }, { word: "the" }, { word: "problem" },
        { word: "is", punctuation: "," }, { word: "cross-departmental" }, { word: "collaboration" }, { word: "is" }, { word: "key" }, { word: "to" },
        { word: "finding" }, { word: "a" }, { word: "solution", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "让步状语从句", phonetic: "/nəʊ/ /ˈmætər/ /haʊ/ /ˈkɒmplɛks/ /ðə/ /ˈprɒbləm/ /ɪz/", translation: "无论问题多么复杂",
          subComponents: [{ startIndex: 0, words: [
            { word: "No" }, { word: "matter" }, { word: "how" }, { word: "complex" }, { word: "the" }, { word: "problem" }, { word: "is", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 9, label: "主句主语", phonetic: "/krɒs/ /dɪˈpɑːrtməntəl/ /kəˌlæbəˈreɪʃən/", translation: "跨部门协作",
          subComponents: [{ startIndex: 0, words: [
            { word: "cross-departmental" }, { word: "collaboration" }, { word: "is" }
          ] }] 
        },
        { start: 10, end: 14, label: "谓语", phonetic: "/ɪz/ /kiː/ /tuː/ /ˈfaɪndɪŋ/ /ə/ /səˈluːʃən/", translation: "都是找到解决方案的关键",
          subComponents: [{ startIndex: 0, words: [
            { word: "key" }, { word: "to" }, { word: "finding" }, { word: "a" }, { word: "solution", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "No matter how 引导让步状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s156",
      chinese: "假如签证申请被拒，申请人有权在三十天内提出申诉",
      english_full: "Should the visa application be rejected, the applicant has the right to appeal within thirty days.",
      words: [
        { word: "Should" }, { word: "the" }, { word: "visa" }, { word: "application" }, { word: "be" }, { word: "rejected", punctuation: "," },
        { word: "the" }, { word: "applicant" }, { word: "has" }, { word: "the" }, { word: "right" }, { word: "to" },
        { word: "appeal" }, { word: "within" }, { word: "thirty" }, { word: "days", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "条件状语从句", phonetic: "/ʃʊd/ /ðə/ /ˈviːzə/ /ˌæplɪˈkeɪʃən/ /biː/ /rɪˈdʒɛktɪd/", translation: "假如签证申请被拒",
          subComponents: [{ startIndex: 0, words: [
            { word: "Should" }, { word: "the" }, { word: "visa" }, { word: "application" }, { word: "be" }, { word: "rejected", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ðə/ /ˈæplɪkənt/", translation: "申请人",
          subComponents: [{ startIndex: 0, words: [
            { word: "applicant" }, { word: "has" }
          ] }] 
        },
        { start: 9, end: 15, label: "谓语", phonetic: "/hæz/ /ðə/ /raɪt/ /tuː/ /əˈpiːl/ /wɪˈðɪn/ /ˈθɜːrti/ /deɪz/", translation: "有权在三十天内提出申诉",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "right" }, { word: "to" }, { word: "appeal" }, { word: "within" }, { word: "thirty" }, { word: "days", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "Should 置于句首引导条件状语从句，相当于 If...should，为倒装结构。" }
      ]
    },
    {
      id: "q_adverbial_s157",
      chinese: "她处理异议的方式就像经历过数百场高难度谈判",
      english_full: "She addressed objections as if she had navigated hundreds of high-stakes negotiations.",
      words: [
        { word: "She" }, { word: "addressed" }, { word: "objections" }, { word: "as" }, { word: "if" }, { word: "she" },
        { word: "had" }, { word: "navigated" }, { word: "hundreds" }, { word: "of" }, { word: "high-stakes" }, { word: "negotiations", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主句", phonetic: "/ʃiː/ /əˈdrɛst/ /əbˈdʒɛkʃənz/", translation: "她处理异议",
          subComponents: [{ startIndex: 0, words: [
            { word: "She" }, { word: "addressed" }, { word: "objections" }
          ] }] 
        },
        { start: 3, end: 11, label: "方式状语从句", phonetic: "/æz/ /ɪf/ /ʃiː/ /hæd/ /ˈnævɪgeɪtɪd/ /ˈhʌndrədz/ /ɒv/ /haɪ/ /steɪks/ /ˌnɛgoʊʃiˈeɪʃənz/", translation: "的方式就像经历过数百场高难度谈判",
          subComponents: [{ startIndex: 0, words: [
            { word: "as" }, { word: "if" }, { word: "she" }, { word: "had" }, { word: "navigated" }, { word: "hundreds" }, { word: "of" }, { word: "high-stakes" }, { word: "negotiations", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "方式状语从句", text: "As if 引导方式状语从句，had navigated 为虚拟语气。" }
      ]
    },
    {
      id: "q_adverbial_s158",
      chinese: "新流程的效率提升幅度比基准测试预期的更为显著",
      english_full: "The efficiency gains from the new process are more significant than baseline testing had anticipated.",
      words: [
        { word: "The" }, { word: "efficiency" }, { word: "gains" }, { word: "from" }, { word: "the" }, { word: "new" },
        { word: "process" }, { word: "are" }, { word: "more" }, { word: "significant" }, { word: "than" }, { word: "baseline" },
        { word: "testing" }, { word: "had" }, { word: "anticipated", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "主句", phonetic: "/ðə/ /ɪˈfɪʃənsi/ /geɪnz/ /frɒm/ /ðə/ /njuː/ /ˈprɒsɛs/ /ɑːr/", translation: "新流程的效率提升幅度",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "efficiency" }, { word: "gains" }, { word: "from" }, { word: "the" }, { word: "new" }, { word: "process" }, { word: "are" }
          ] }] 
        },
        { start: 8, end: 14, label: "比较状语从句", phonetic: "/mɔːr/ /sɪɡˈnɪfɪkənt/ /ðæn/ /ˈbeɪslaɪn/ /ˈtɛstɪŋ/ /hæd/ /ænˈtɪsɪpeɪtɪd/", translation: "比基准测试预期的更为显著",
          subComponents: [{ startIndex: 0, words: [
            { word: "more" }, { word: "significant" }, { word: "than" }, { word: "baseline" }, { word: "testing" }, { word: "had" }, { word: "anticipated", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "Than 引导比较状语从句，had anticipated 用过去完成时。" }
      ]
    },
    {
      id: "q_adverbial_s159",
      chinese: "直到所有安全漏洞修复完毕，平台才重新对外开放",
      english_full: "Not until all security vulnerabilities were patched did the platform reopen to the public.",
      words: [
        { word: "Not" }, { word: "until" }, { word: "all" }, { word: "security" }, { word: "vulnerabilities" }, { word: "were" },
        { word: "patched" }, { word: "did" }, { word: "the" }, { word: "platform" }, { word: "reopen" }, { word: "to" },
        { word: "the" }, { word: "public", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/nɒt/ /ʌnˈtɪl/ /ɔːl/ /sɪˈkjʊrɪti/ /ˌvʌlnərəˈbɪlɪtiz/ /wɜːr/ /pætʃt/", translation: "直到所有安全漏洞修复完毕",
          subComponents: [{ startIndex: 0, words: [
            { word: "Not" }, { word: "until" }, { word: "all" }, { word: "security" }, { word: "vulnerabilities" }, { word: "were" }, { word: "patched" }
          ] }] 
        },
        { start: 7, end: 13, label: "主句", phonetic: "/dɪd/ /ðə/ /ˈplætfɔːrm/ /ˌriːˈoʊpən/ /tuː/ /ðə/ /ˈpʌblɪk/", translation: "平台才重新对外开放",
          subComponents: [{ startIndex: 0, words: [
            { word: "did" }, { word: "the" }, { word: "platform" }, { word: "reopen" }, { word: "to" }, { word: "the" }, { word: "public", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Not until 引导时间状语从句并引起主句倒装。" }
      ]
    },
    {
      id: "q_adverbial_s160",
      chinese: "由于利率处于历史低位，投资者纷纷转向风险更高的资产",
      english_full: "Given that interest rates are at historic lows, investors have shifted toward riskier assets.",
      words: [
        { word: "Given" }, { word: "that" }, { word: "interest" }, { word: "rates" }, { word: "are" }, { word: "at" },
        { word: "historic" }, { word: "lows", punctuation: "," }, { word: "investors" }, { word: "have" }, { word: "shifted" }, { word: "toward" },
        { word: "riskier" }, { word: "assets", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "原因状语从句", phonetic: "/ˈgɪvən/ /ðæt/ /ˈɪntrəst/ /reɪts/ /ɑːr/ /æt/ /hɪˈstɒrɪk/ /loʊz/", translation: "由于利率处于历史低位",
          subComponents: [{ startIndex: 0, words: [
            { word: "Given" }, { word: "that" }, { word: "interest" }, { word: "rates" }, { word: "are" }, { word: "at" }, { word: "historic" }, { word: "lows", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 8, label: "主句主语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [
            { word: "investors" }
          ] }] 
        },
        { start: 9, end: 13, label: "谓语", phonetic: "/hæv/ /ʃɪftɪd/ /təˈwɔːrd/ /ˈrɪskiər/ /ˈæsets/", translation: "纷纷转向风险更高的资产",
          subComponents: [{ startIndex: 0, words: [
            { word: "have" }, { word: "shifted" }, { word: "toward" }, { word: "riskier" }, { word: "assets", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "Given that 引导原因状语从句，相当于 considering that。" }
      ]
    },
    {
      id: "q_adverbial_s161",
      chinese: "当首席执行官宣布退休计划时，股价应声下跌",
      english_full: "As the CEO announced his retirement plans, the stock price fell sharply in response.",
      words: [
        { word: "As" }, { word: "the" }, { word: "CEO" }, { word: "announced" }, { word: "his" }, { word: "retirement" },
        { word: "plans", punctuation: "," }, { word: "the" }, { word: "stock" }, { word: "price" }, { word: "fell" }, { word: "sharply" },
        { word: "in" }, { word: "response", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/æz/ /ðə/ /ˌsiːiːˈoʊ/ /əˈnaʊnst/ /hɪz/ /rɪˈtaɪərmənt/ /plænz/", translation: "当首席执行官宣布退休计划时",
          subComponents: [{ startIndex: 0, words: [
            { word: "As" }, { word: "the" }, { word: "CEO" }, { word: "announced" }, { word: "his" }, { word: "retirement" }, { word: "plans", punctuation: "," }
          ] }] 
        },
        { start: 7, end: 9, label: "主句主语", phonetic: "/ðə/ /stɒk/ /praɪs/", translation: "股价",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "stock" }, { word: "price" }
          ] }] 
        },
        { start: 10, end: 13, label: "谓语", phonetic: "/fɛl/ /ˈʃɑːrpli/ /ɪn/ /rɪˈspɒns/", translation: "应声下跌",
          subComponents: [{ startIndex: 0, words: [
            { word: "fell" }, { word: "sharply" }, { word: "in" }, { word: "response", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "As 引导时间状语从句，表示当……时，两动作同时发生。" }
      ]
    },
    {
      id: "q_adverbial_s162",
      chinese: "除非获得监管机构的事先批准，否则不得进行任何关联交易",
      english_full: "No transaction may proceed unless prior approval from the regulator has been obtained.",
      words: [
        { word: "No" }, { word: "transaction" }, { word: "may" }, { word: "proceed" }, { word: "unless" }, { word: "prior" },
        { word: "approval" }, { word: "from" }, { word: "the" }, { word: "regulator" }, { word: "has" }, { word: "been" },
        { word: "obtained", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/nəʊ/ /trænˈzækʃən/ /meɪ/ /prəˈsiːd/", translation: "不得进行任何关联交易",
          subComponents: [{ startIndex: 0, words: [
            { word: "No" }, { word: "transaction" }, { word: "may" }, { word: "proceed" }
          ] }] 
        },
        { start: 4, end: 12, label: "条件状语从句", phonetic: "/ʌnˈlɛs/ /ˈpraɪər/ /əˈpruːvl/ /frɒm/ /ðə/ /ˈrɛgjʊleɪtər/ /hæz/ /bɪn/ /əbˈteɪnd/", translation: "除非获得监管机构的事先批准",
          subComponents: [{ startIndex: 0, words: [
            { word: "unless" }, { word: "prior" }, { word: "approval" }, { word: "from" }, { word: "the" }, { word: "regulator" }, { word: "has" }, { word: "been" }, { word: "obtained", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "Unless 引导条件状语从句，从句用现在完成时被动语态。" }
      ]
    },
    {
      id: "q_adverbial_s163",
      chinese: "尽管面临激烈的国际竞争，该品牌仍成功打入了高端市场",
      english_full: "Even if international competition is fierce, the brand has successfully penetrated the premium market segment.",
      words: [
        { word: "Even" }, { word: "if" }, { word: "international" }, { word: "competition" }, { word: "is" }, { word: "fierce", punctuation: "," },
        { word: "the" }, { word: "brand" }, { word: "has" }, { word: "successfully" }, { word: "penetrated" }, { word: "the" },
        { word: "premium" }, { word: "market" }, { word: "segment", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "让步状语从句", phonetic: "/ˈiːvən/ /ɪf/ /ˌɪntərˈnæʃənəl/ /ˌkɒmpəˈtɪʃən/ /ɪz/ /ˈfɪərs/", translation: "尽管面临激烈的国际竞争",
          subComponents: [{ startIndex: 0, words: [
            { word: "Even" }, { word: "if" }, { word: "international" }, { word: "competition" }, { word: "is" }, { word: "fierce", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ðə/ /brænd/", translation: "该品牌",
          subComponents: [{ startIndex: 0, words: [
            { word: "brand" }, { word: "has" }
          ] }] 
        },
        { start: 9, end: 14, label: "谓语", phonetic: "/hæz/ /səkˈsɛsfəli/ /ˈpɛnɪtreɪtɪd/ /ðə/ /ˈpriːmiəm/ /ˈmɑːrkɪt/ /ˈsɛgmənt/", translation: "仍成功打入了高端市场",
          subComponents: [{ startIndex: 0, words: [
            { word: "successfully" }, { word: "penetrated" }, { word: "the" }, { word: "premium" }, { word: "market" }, { word: "segment", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "Even if 引导让步状语从句，表示即使假设条件成立。" }
      ]
    },
    {
      id: "q_adverbial_s164",
      chinese: "为了将碳足迹降至最低，工厂已全面改用可再生能源供电",
      english_full: "In order that its carbon footprint might be minimized, the factory has fully switched to renewable energy sources.",
      words: [
        { word: "In" }, { word: "order" }, { word: "that" }, { word: "its" }, { word: "carbon" }, { word: "footprint" },
        { word: "might" }, { word: "be" }, { word: "minimized", punctuation: "," }, { word: "the" }, { word: "factory" }, { word: "has" },
        { word: "fully" }, { word: "switched" }, { word: "to" }, { word: "renewable" }, { word: "energy" }, { word: "sources", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "目的状语从句", phonetic: "/ɪn/ /ˈɔːrdər/ /ðæt/ /ɪts/ /ˈkɑːrbən/ /ˈfʊtprɪnt/ /maɪt/ /biː/ /ˈmɪnɪmaɪzd/", translation: "为了将碳足迹降至最低",
          subComponents: [{ startIndex: 0, words: [
            { word: "In" }, { word: "order" }, { word: "that" }, { word: "its" }, { word: "carbon" }, { word: "footprint" }, { word: "might" }, { word: "be" }, { word: "minimized", punctuation: "," }
          ] }] 
        },
        { start: 9, end: 10, label: "主句主语", phonetic: "/ðə/ /ˈfæktəri/", translation: "工厂",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "factory" }
          ] }] 
        },
        { start: 11, end: 17, label: "谓语", phonetic: "/hæz/ /ˈfʊli/ /swɪtʃt/ /tuː/ /rɪˈnjuːəbl/ /ˈɛnərdʒi/ /ˈsɔːrsɪz/", translation: "已全面改用可再生能源供电",
          subComponents: [{ startIndex: 0, words: [
            { word: "has" }, { word: "fully" }, { word: "switched" }, { word: "to" }, { word: "renewable" }, { word: "energy" }, { word: "sources", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "目的状语从句", text: "In order that 引导目的状语从句，从句用 might be minimized 表目的。" }
      ]
    },
    {
      id: "q_adverbial_s165",
      chinese: "市场波动如此剧烈，以至于多家对冲基金被迫清算头寸",
      english_full: "Market volatility was so extreme that several hedge funds were forced to liquidate their positions.",
      words: [
        { word: "Market" }, { word: "volatility" }, { word: "was" }, { word: "so" }, { word: "extreme" }, { word: "that" },
        { word: "several" }, { word: "hedge" }, { word: "funds" }, { word: "were" }, { word: "forced" }, { word: "to" },
        { word: "liquidate" }, { word: "their" }, { word: "positions", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/ˈmɑːrkɪt/ /ˌvɒləˈtɪlɪti/ /wɒz/ /səʊ/", translation: "市场波动如此剧烈",
          subComponents: [{ startIndex: 0, words: [
            { word: "Market" }, { word: "volatility" }, { word: "was" }, { word: "so" }
          ] }] 
        },
        { start: 4, end: 14, label: "结果状语从句", phonetic: "/ɪkˈstriːm/ /ðæt/ /ˈsɛvrəl/ /hɛdʒ/ /fʌndz/ /wɜːr/ /fɔːrst/ /tuː/ /ˈlɪkwɪdeɪt/ /ðɛr/ /pəˈzɪʃənz/", translation: "以至于多家对冲基金被迫清算头寸",
          subComponents: [{ startIndex: 0, words: [
            { word: "extreme" }, { word: "that" }, { word: "several" }, { word: "hedge" }, { word: "funds" }, { word: "were" }, { word: "forced" }, { word: "to" }, { word: "liquidate" }, { word: "their" }, { word: "positions", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "结果状语从句", text: "So + 形容词 + that 引导结果状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s166",
      chinese: "凡是数据主权受到威胁的地方，政府都会加强立法保护",
      english_full: "Where data sovereignty is threatened, governments will strengthen legislative protections.",
      words: [
        { word: "Where" }, { word: "data" }, { word: "sovereignty" }, { word: "is" }, { word: "threatened", punctuation: "," }, { word: "governments" },
        { word: "will" }, { word: "strengthen" }, { word: "legislative" }, { word: "protections", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "地点状语从句", phonetic: "/wɛr/ /ˈdeɪtə/ /ˈsɒvrənti/ /ɪz/ /ˈθrɛtənd/", translation: "凡是数据主权受到威胁的地方",
          subComponents: [{ startIndex: 0, words: [
            { word: "Where" }, { word: "data" }, { word: "sovereignty" }, { word: "is" }, { word: "threatened", punctuation: "," }, { word: "governments" }
          ] }] 
        },
        { start: 6, end: 6, label: "主句主语", phonetic: "/ˈgʌvərmənts/", translation: "政府",
          subComponents: [{ startIndex: 0, words: [
            { word: "will" }
          ] }] 
        },
        { start: 7, end: 9, label: "谓语", phonetic: "/wɪl/ /ˈstrɛŋθən/ /ˌlɛdʒɪsˈleɪtɪv/ /prəˈtɛkʃənz/", translation: "都会加强立法保护",
          subComponents: [{ startIndex: 0, words: [
            { word: "strengthen" }, { word: "legislative" }, { word: "protections", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "地点状语从句", text: "Where 引导地点状语从句，表示在……情况下/地方。" }
      ]
    },
    {
      id: "q_adverbial_s167",
      chinese: "他汇报项目进展时，语气平静得好像一切尽在掌握",
      english_full: "He reported project progress as calmly as though everything were under control.",
      words: [
        { word: "He" }, { word: "reported" }, { word: "project" }, { word: "progress" }, { word: "as" }, { word: "calmly" },
        { word: "as" }, { word: "though" }, { word: "everything" }, { word: "were" }, { word: "under" }, { word: "control", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/hiː/ /rɪˈpɔːrtɪd/ /ˈprɒdʒɛkt/ /ˈprɒgrɛs/", translation: "他汇报项目进展",
          subComponents: [{ startIndex: 0, words: [
            { word: "He" }, { word: "reported" }, { word: "project" }, { word: "progress" }
          ] }] 
        },
        { start: 4, end: 11, label: "方式状语从句", phonetic: "/æz/ /ˈkɑːmli/ /æz/ /ðoʊ/ /ˈɛvriθɪŋ/ /wɜːr/ /ʌndər/ /kənˈtroʊl/", translation: "语气平静得好像一切尽在掌握",
          subComponents: [{ startIndex: 0, words: [
            { word: "as" }, { word: "calmly" }, { word: "as" }, { word: "though" }, { word: "everything" }, { word: "were" }, { word: "under" }, { word: "control", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "方式状语从句", text: "As though 引导方式状语从句，were 为虚拟语气。" }
      ]
    },
    {
      id: "q_adverbial_s168",
      chinese: "新版软件的稳定性比上一版好了许多",
      english_full: "The stability of the new software version is considerably better than that of the previous release.",
      words: [
        { word: "The" }, { word: "stability" }, { word: "of" }, { word: "the" }, { word: "new" }, { word: "software" },
        { word: "version" }, { word: "is" }, { word: "considerably" }, { word: "better" }, { word: "than" }, { word: "that" },
        { word: "of" }, { word: "the" }, { word: "previous" }, { word: "release", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "主句", phonetic: "/ðə/ /stəˈbɪlɪti/ /ɒv/ /ðə/ /njuː/ /ˈsɒftwɛr/ /ˈvɜːrʒən/ /ɪz/", translation: "新版软件的稳定性",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "stability" }, { word: "of" }, { word: "the" }, { word: "new" }, { word: "software" }, { word: "version" }, { word: "is" }
          ] }] 
        },
        { start: 8, end: 15, label: "比较状语从句", phonetic: "/kənˈsɪdərəbli/ /ˈbɛtər/ /ðæn/ /ðæt/ /ɒv/ /ðə/ /ˈpriːviəs/ /rɪˈliːs/", translation: "比上一版好了许多",
          subComponents: [{ startIndex: 0, words: [
            { word: "considerably" }, { word: "better" }, { word: "than" }, { word: "that" }, { word: "of" }, { word: "the" }, { word: "previous" }, { word: "release", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "Than 引导比较状语从句，that 指代 stability。" }
      ]
    },
    {
      id: "q_adverbial_s169",
      chinese: "在实验结果公布之前，研究团队拒绝向媒体透露任何细节",
      english_full: "Until the experimental results were published, the research team refused to disclose any details to the media.",
      words: [
        { word: "Until" }, { word: "the" }, { word: "experimental" }, { word: "results" }, { word: "were" }, { word: "published", punctuation: "," },
        { word: "the" }, { word: "research" }, { word: "team" }, { word: "refused" }, { word: "to" }, { word: "disclose" },
        { word: "any" }, { word: "details" }, { word: "to" }, { word: "the" }, { word: "media", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "时间状语从句", phonetic: "/ʌnˈtɪl/ /ðə/ /ɪkˌspɛrɪˈmɛntəl/ /rɪˈzʌlts/ /wɜːr/ /ˈpʌblɪʃt/", translation: "在实验结果公布之前",
          subComponents: [{ startIndex: 0, words: [
            { word: "Until" }, { word: "the" }, { word: "experimental" }, { word: "results" }, { word: "were" }, { word: "published", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 7, end: 9, label: "主句主语", phonetic: "/ðə/ /rɪˈsɜːrtʃ/ /tiːm/", translation: "研究团队",
          subComponents: [{ startIndex: 0, words: [
            { word: "research" }, { word: "team" }, { word: "refused" }
          ] }] 
        },
        { start: 10, end: 16, label: "谓语", phonetic: "/rɪˈfjuːzd/ /tuː/ /dɪsˈkləʊz/ /ˈɛni/ /ˈdiːteɪlz/ /tuː/ /ðə/ /ˈmiːdiə/", translation: "拒绝向媒体透露任何细节",
          subComponents: [{ startIndex: 0, words: [
            { word: "to" }, { word: "disclose" }, { word: "any" }, { word: "details" }, { word: "to" }, { word: "the" }, { word: "media", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Until 引导时间状语从句，表示直到……才/在……之前。" }
      ]
    },
    {
      id: "q_adverbial_s170",
      chinese: "无论预算多么紧张，质量管控标准都绝不能妥协",
      english_full: "However tight the budget may be, quality control standards must never be compromised.",
      words: [
        { word: "However" }, { word: "tight" }, { word: "the" }, { word: "budget" }, { word: "may" }, { word: "be", punctuation: "," },
        { word: "quality" }, { word: "control" }, { word: "standards" }, { word: "must" }, { word: "never" }, { word: "be" },
        { word: "compromised", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "让步状语从句", phonetic: "/haʊˈɛvər/ /taɪt/ /ðə/ /ˈbʌdʒɪt/ /meɪ/ /biː/", translation: "无论预算多么紧张",
          subComponents: [{ startIndex: 0, words: [
            { word: "However" }, { word: "tight" }, { word: "the" }, { word: "budget" }, { word: "may" }, { word: "be", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 9, label: "主句主语", phonetic: "/ˈkwɒlɪti/ /kənˈtroʊl/ /ˈstændərdz/", translation: "质量管控标准",
          subComponents: [{ startIndex: 0, words: [
            { word: "quality" }, { word: "control" }, { word: "standards" }, { word: "must" }
          ] }] 
        },
        { start: 10, end: 12, label: "谓语", phonetic: "/mʌst/ /ˈnɛvər/ /biː/ /kəmˈprɒmɪzd/", translation: "都绝不能妥协",
          subComponents: [{ startIndex: 0, words: [
            { word: "never" }, { word: "be" }, { word: "compromised", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "However + 形容词 + 主语 + 谓语构成让步状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s171",
      chinese: "因为远程办公已成为常态，企业重新评估了办公空间需求",
      english_full: "As remote work has become the norm, companies have reassessed their office space requirements.",
      words: [
        { word: "As" }, { word: "remote" }, { word: "work" }, { word: "has" }, { word: "become" }, { word: "the" },
        { word: "norm", punctuation: "," }, { word: "companies" }, { word: "have" }, { word: "reassessed" }, { word: "their" }, { word: "office" },
        { word: "space" }, { word: "requirements", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "原因状语从句", phonetic: "/æz/ /rɪˈmoʊt/ /wɜːrk/ /hæz/ /bɪˈkʌm/ /ðə/ /nɔːrm/", translation: "因为远程办公已成为常态",
          subComponents: [{ startIndex: 0, words: [
            { word: "As" }, { word: "remote" }, { word: "work" }, { word: "has" }, { word: "become" }, { word: "the" }, { word: "norm", punctuation: "," }, { word: "companies" }
          ] }] 
        },
        { start: 8, end: 8, label: "主句主语", phonetic: "/ˈkʌmpəniz/", translation: "企业",
          subComponents: [{ startIndex: 0, words: [
            { word: "have" }
          ] }] 
        },
        { start: 9, end: 13, label: "谓语", phonetic: "/hæv/ /ˌriːəˈsɛst/ /ðɛr/ /ˈɒfɪs/ /speɪs/ /rɪˈkwaɪərmənts/", translation: "重新评估了办公空间需求",
          subComponents: [{ startIndex: 0, words: [
            { word: "reassessed" }, { word: "their" }, { word: "office" }, { word: "space" }, { word: "requirements", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "原因状语从句", text: "As 引导原因状语从句，说明背景原因。" }
      ]
    },
    {
      id: "q_adverbial_s172",
      chinese: "一旦用户同意隐私条款，系统才会收集个人行为数据",
      english_full: "Only after users consent to the privacy terms will the system collect personal behavioral data.",
      words: [
        { word: "Only" }, { word: "after" }, { word: "users" }, { word: "consent" }, { word: "to" }, { word: "the" },
        { word: "privacy" }, { word: "terms" }, { word: "will" }, { word: "the" }, { word: "system" }, { word: "collect" },
        { word: "personal" }, { word: "behavioral" }, { word: "data", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "时间状语从句", phonetic: "/ˈoʊnli/ /ˈæftər/ /ˈjuːzərz/ /kənˈsɛnt/ /tuː/ /ðə/ /ˈprɪvəsi/ /tɜːrmz/", translation: "一旦用户同意隐私条款",
          subComponents: [{ startIndex: 0, words: [
            { word: "Only" }, { word: "after" }, { word: "users" }, { word: "consent" }, { word: "to" }, { word: "the" }, { word: "privacy" }, { word: "terms" }
          ] }] 
        },
        { start: 8, end: 14, label: "主句", phonetic: "/wɪl/ /ðə/ /ˈsɪstəm/ /kəˈlɛkt/ /ˈpɜːrsənəl/ /bɪˈheɪvjərəl/ /ˈdeɪtə/", translation: "系统才会收集个人行为数据",
          subComponents: [{ startIndex: 0, words: [
            { word: "will" }, { word: "the" }, { word: "system" }, { word: "collect" }, { word: "personal" }, { word: "behavioral" }, { word: "data", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "时间状语从句", text: "Only after 位于句首引起倒装，after 引导时间状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s173",
      chinese: "倘若未能按时交付里程碑节点，承包商将面临违约处罚",
      english_full: "If milestone deliverables are not submitted on schedule, the contractor will face penalties for breach of contract.",
      words: [
        { word: "If" }, { word: "milestone" }, { word: "deliverables" }, { word: "are" }, { word: "not" }, { word: "submitted" },
        { word: "on" }, { word: "schedule", punctuation: "," }, { word: "the" }, { word: "contractor" }, { word: "will" }, { word: "face" },
        { word: "penalties" }, { word: "for" }, { word: "breach" }, { word: "of" }, { word: "contract", punctuation: "." }
      ],
      components: [
        { start: 0, end: 8, label: "条件状语从句", phonetic: "/ɪf/ /ˈmaɪlstoʊn/ /dɪˈlɪvərəbəlz/ /ɑːr/ /nɒt/ /səbˈmɪtɪd/ /ɒn/ /ˈʃɛdjuːl/", translation: "倘若未能按时交付里程碑节点",
          subComponents: [{ startIndex: 0, words: [
            { word: "If" }, { word: "milestone" }, { word: "deliverables" }, { word: "are" }, { word: "not" }, { word: "submitted" }, { word: "on" }, { word: "schedule", punctuation: "," }, { word: "the" }
          ] }] 
        },
        { start: 9, end: 10, label: "主句主语", phonetic: "/ðə/ /kənˈtræktər/", translation: "承包商",
          subComponents: [{ startIndex: 0, words: [
            { word: "contractor" }, { word: "will" }
          ] }] 
        },
        { start: 11, end: 16, label: "谓语", phonetic: "/wɪl/ /feɪs/ /ˈpɛnəltiz/ /fɔːr/ /briːtʃ/ /ɒv/ /ˈkɒntrækt/", translation: "将面临违约处罚",
          subComponents: [{ startIndex: 0, words: [
            { word: "face" }, { word: "penalties" }, { word: "for" }, { word: "breach" }, { word: "of" }, { word: "contract", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "条件状语从句", text: "If 引导条件状语从句，从句用一般现在时表将来条件。" }
      ]
    },
    {
      id: "q_adverbial_s174",
      chinese: "虽然短期盈利承压，长期战略布局仍保持不变",
      english_full: "While short-term profitability is under pressure, the long-term strategic layout remains unchanged.",
      words: [
        { word: "While" }, { word: "short-term" }, { word: "profitability" }, { word: "is" }, { word: "under" }, { word: "pressure", punctuation: "," },
        { word: "the" }, { word: "long-term" }, { word: "strategic" }, { word: "layout" }, { word: "remains" }, { word: "unchanged", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "让步状语从句", phonetic: "/waɪl/ /ʃɔːrt-tɜːrm/ /ˌprɒfɪtəˈbɪlɪti/ /ɪz/ /ˈʌndər/ /ˈprɛʃər/", translation: "虽然短期盈利承压",
          subComponents: [{ startIndex: 0, words: [
            { word: "While" }, { word: "short-term" }, { word: "profitability" }, { word: "is" }, { word: "under" }, { word: "pressure", punctuation: "," }
          ] }] 
        },
        { start: 6, end: 9, label: "主句主语", phonetic: "/ðə/ /lɒŋ-tɜːrm/ /ˈstrætɪdʒɪk/ /ˈleɪaʊt/", translation: "长期战略布局",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "long-term" }, { word: "strategic" }, { word: "layout" }
          ] }] 
        },
        { start: 10, end: 11, label: "谓语", phonetic: "/rɪˈmeɪnz/ /ʌnˈtʃeɪndʒd/", translation: "仍保持不变",
          subComponents: [{ startIndex: 0, words: [
            { word: "remains" }, { word: "unchanged", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "让步状语从句", text: "While 引导让步状语从句，对比短期与长期。" }
      ]
    },
    {
      id: "q_adverbial_s175",
      chinese: "为了使其提案更具说服力，顾问引用了三项独立第三方的评估报告",
      english_full: "So that the proposal would appear more persuasive, the consultant cited three independent third-party assessment reports.",
      words: [
        { word: "So" }, { word: "that" }, { word: "the" }, { word: "proposal" }, { word: "would" }, { word: "appear" },
        { word: "more" }, { word: "persuasive", punctuation: "," }, { word: "the" }, { word: "consultant" }, { word: "cited" }, { word: "three" },
        { word: "independent" }, { word: "third-party" }, { word: "assessment" }, { word: "reports", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "目的状语从句", phonetic: "/səʊ/ /ðæt/ /ðə/ /prəˈpoʊzəl/ /wʊd/ /əˈpɪər/ /mɔːr/ /pərˈsweɪsɪv/", translation: "为了使其提案更具说服力",
          subComponents: [{ startIndex: 0, words: [
            { word: "So" }, { word: "that" }, { word: "the" }, { word: "proposal" }, { word: "would" }, { word: "appear" }, { word: "more" }, { word: "persuasive", punctuation: "," }
          ] }] 
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/ðə/ /kənˈsʌltənt/", translation: "顾问",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "consultant" }
          ] }] 
        },
        { start: 10, end: 15, label: "谓语", phonetic: "/ˈsaɪtɪd/ /θriː/ /ˌɪndɪˈpɛndənt/ /θɜːrd/ /ˈpɑːrti/ /əˈsɛsmənt/ /rɪˈpɔːrts/", translation: "引用了三项独立第三方的评估报告",
          subComponents: [{ startIndex: 0, words: [
            { word: "cited" }, { word: "three" }, { word: "independent" }, { word: "third-party" }, { word: "assessment" }, { word: "reports", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "目的状语从句", text: "So that 引导目的状语从句，从句用 would 表目的。" }
      ]
    },
    {
      id: "q_adverbial_s176",
      chinese: "这场危机的严重程度如此之高，以至于政府不得不宣布进入紧急状态",
      english_full: "The crisis was so severe that the government had to declare a state of emergency.",
      words: [
        { word: "The" }, { word: "crisis" }, { word: "was" }, { word: "so" }, { word: "severe" }, { word: "that" },
        { word: "the" }, { word: "government" }, { word: "had" }, { word: "to" }, { word: "declare" }, { word: "a" },
        { word: "state" }, { word: "of" }, { word: "emergency", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主句", phonetic: "/ðə/ /ˈkraɪsɪs/ /wɒz/ /səʊ/", translation: "这场危机的严重程度如此之高",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "crisis" }, { word: "was" }, { word: "so" }
          ] }] 
        },
        { start: 4, end: 14, label: "结果状语从句", phonetic: "/sɪˈvɪər/ /ðæt/ /ðə/ /ˈgʌvərmənt/ /hæd/ /tuː/ /dɪˈklɛər/ /ə/ /steɪt/ /ɒv/ /ɪˈmɜːrdʒənsi/", translation: "以至于政府不得不宣布进入紧急状态",
          subComponents: [{ startIndex: 0, words: [
            { word: "severe" }, { word: "that" }, { word: "the" }, { word: "government" }, { word: "had" }, { word: "to" }, { word: "declare" }, { word: "a" }, { word: "state" }, { word: "of" }, { word: "emergency", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "结果状语从句", text: "So + 形容词 + that 引导结果状语从句。" }
      ]
    },
    {
      id: "q_adverbial_s177",
      chinese: "数据存储在何处，相应的合规义务就适用何处",
      english_full: "Where data is stored, the corresponding compliance obligations apply accordingly.",
      words: [
        { word: "Where" }, { word: "data" }, { word: "is" }, { word: "stored", punctuation: "," }, { word: "the" }, { word: "corresponding" },
        { word: "compliance" }, { word: "obligations" }, { word: "apply" }, { word: "accordingly", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "地点状语从句", phonetic: "/wɛr/ /ˈdeɪtə/ /ɪz/ /stɔːrd/", translation: "数据存储在何处",
          subComponents: [{ startIndex: 0, words: [
            { word: "Where" }, { word: "data" }, { word: "is" }, { word: "stored", punctuation: "," }
          ] }] 
        },
        { start: 4, end: 9, label: "主句", phonetic: "/ðə/ /ˌkɒrɪˈspɒndɪŋ/ /kəmˈplaɪəns/ /ˌɒblɪˈgeɪʃənz/ /əˈplaɪ/ /əˈkɔːrdɪŋli/", translation: "相应的合规义务就适用何处",
          subComponents: [{ startIndex: 0, words: [
            { word: "the" }, { word: "corresponding" }, { word: "compliance" }, { word: "obligations" }, { word: "apply" }, { word: "accordingly", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "地点状语从句", text: "Where 引导地点状语从句，形成平行对应结构。" }
      ]
    },
    {
      id: "q_adverbial_s178",
      chinese: "他审查合同条款的细致程度，仿佛在为一场重大诉讼做准备",
      english_full: "He reviewed the contract clauses with a level of detail as if he were preparing for major litigation.",
      words: [
        { word: "He" }, { word: "reviewed" }, { word: "the" }, { word: "contract" }, { word: "clauses" }, { word: "with" },
        { word: "a" }, { word: "level" }, { word: "of" }, { word: "detail" }, { word: "as" }, { word: "if" },
        { word: "he" }, { word: "were" }, { word: "preparing" }, { word: "for" }, { word: "major" }, { word: "litigation", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "主句", phonetic: "/hiː/ /rɪˈvjuːd/ /ðə/ /ˈkɒntrækt/ /klɔːzɪz/", translation: "他审查合同条款",
          subComponents: [{ startIndex: 0, words: [
            { word: "He" }, { word: "reviewed" }, { word: "the" }, { word: "contract" }, { word: "clauses" }
          ] }] 
        },
        { start: 5, end: 9, label: "主句状语", phonetic: "/wɪð/ /ə/ /ˈlɛvəl/ /ɒv/ /ˈdiːteɪl/", translation: "的细致程度",
          subComponents: [{ startIndex: 0, words: [
            { word: "with" }, { word: "a" }, { word: "level" }, { word: "of" }, { word: "detail" }
          ] }] 
        },
        { start: 10, end: 17, label: "方式状语从句", phonetic: "/æz/ /ɪf/ /hiː/ /wɜːr/ /prɪˈpɛərɪŋ/ /fɔːr/ /ˈmeɪdʒər/ /ˌlɪtɪˈgeɪʃən/", translation: "仿佛在为一场重大诉讼做准备",
          subComponents: [{ startIndex: 0, words: [
            { word: "as" }, { word: "if" }, { word: "he" }, { word: "were" }, { word: "preparing" }, { word: "for" }, { word: "major" }, { word: "litigation", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "方式状语从句", text: "As if 引导方式状语从句，were preparing 为虚拟语气。" }
      ]
    },
    {
      id: "q_adverbial_s179",
      chinese: "当前季度的营收增速比行业平均水平快了一倍以上",
      english_full: "The revenue growth rate this quarter is more than twice as fast as the industry average.",
      words: [
        { word: "The" }, { word: "revenue" }, { word: "growth" }, { word: "rate" }, { word: "this" }, { word: "quarter" },
        { word: "is" }, { word: "more" }, { word: "than" }, { word: "twice" }, { word: "as" }, { word: "fast" },
        { word: "as" }, { word: "the" }, { word: "industry" }, { word: "average", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "主句", phonetic: "/ðə/ /ˈrɛvənjuː/ /groʊθ/ /reɪt/ /ðɪs/ /ˈkwɔːrtər/ /ɪz/", translation: "当前季度的营收增速",
          subComponents: [{ startIndex: 0, words: [
            { word: "The" }, { word: "revenue" }, { word: "growth" }, { word: "rate" }, { word: "this" }, { word: "quarter" }, { word: "is" }
          ] }] 
        },
        { start: 7, end: 15, label: "比较状语从句", phonetic: "/mɔːr/ /ðæn/ /twaɪs/ /æz/ /fɑːst/ /æz/ /ði/ /ˈɪndəstri/ /ˈævərɪdʒ/", translation: "比行业平均水平快了一倍以上",
          subComponents: [{ startIndex: 0, words: [
            { word: "more" }, { word: "than" }, { word: "twice" }, { word: "as" }, { word: "fast" }, { word: "as" }, { word: "the" }, { word: "industry" }, { word: "average", punctuation: "." }
          ] }] 
        },
      ],
      analysis: [
        { type: "比较状语从句", text: "As...as 结构中第二个 as 引导比较状语从句，more than twice 修饰倍数。" }
      ]
    },
  ]
};
