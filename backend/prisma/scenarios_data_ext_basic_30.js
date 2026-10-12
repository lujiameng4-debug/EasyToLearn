export const extensions = {
  "module_basic": [
    {
      id: "q_basic_s100",
      chinese: "在过去十年中，城市迁移模式发生了显著变化",
      english_full: "Urban migration patterns have shifted dramatically over the past decade.",
      words: [
        { word: "Urban" }, { word: "migration" }, { word: "patterns" }, { word: "have" }, { word: "shifted" },
        { word: "dramatically" }, { word: "over" }, { word: "the" }, { word: "past" }, { word: "decade", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɜːrbən/ /maɪˈɡreɪʃən/ /ˈpætərnz/", translation: "城市迁移模式",
          subComponents: [{ startIndex: 0, words: [{ word: "Urban" }, { word: "migration" }, { word: "patterns" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/hæv/ /ˈʃɪftɪd/", translation: "已经转变",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "shifted" }] }]
        },
        {
          start: 5, end: 5, label: "状语", phonetic: "/drəˈmætɪkli/", translation: "显著地",
          subComponents: [{ startIndex: 0, words: [{ word: "dramatically" }] }]
        },
        {
          start: 6, end: 9, label: "时间状语", phonetic: "/ˈoʊvər/ /ðə/ /pæst/ /ˈdɛkeɪd/", translation: "在过去十年期间",
          subComponents: [{ startIndex: 0, words: [{ word: "over" }, { word: "the" }, { word: "past" }, { word: "decade", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，shift 为不及物动词，dramatically 修饰谓语，over the past decade 作时间状语。" }
      ]
    },
    {
      id: "q_basic_s101",
      chinese: "疫情过后，全球供应链逐渐恢复",
      english_full: "The global supply chain recovered gradually after the pandemic.",
      words: [
        { word: "The" }, { word: "global" }, { word: "supply" }, { word: "chain" }, { word: "recovered" },
        { word: "gradually" }, { word: "after" }, { word: "the" }, { word: "pandemic", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈgloʊbəl/ /səˈplaɪ/ /tʃeɪn/", translation: "全球供应链",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "global" }, { word: "supply" }, { word: "chain" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈkʌvərd/", translation: "恢复",
          subComponents: [{ startIndex: 0, words: [{ word: "recovered" }] }]
        },
        {
          start: 5, end: 5, label: "状语", phonetic: "/ˈɡrædʒuəli/", translation: "逐渐地",
          subComponents: [{ startIndex: 0, words: [{ word: "gradually" }] }]
        },
        {
          start: 6, end: 8, label: "时间状语", phonetic: "/ˈæftər/ /ðə/ /pænˈdɛmɪk/", translation: "在疫情之后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "the" }, { word: "pandemic", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，recover 为不及物动词，gradually 作方式状语。" }
      ]
    },
    {
      id: "q_basic_s102",
      chinese: "企业可持续发展举措在跨国企业中迅速普及",
      english_full: "Corporate sustainability initiatives proliferated across multinational enterprises.",
      words: [
        { word: "Corporate" }, { word: "sustainability" }, { word: "initiatives" }, { word: "proliferated" },
        { word: "across" }, { word: "multinational" }, { word: "enterprises", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkɔːrpərət/ /səˌsteɪnəˈbɪlɪti/ /ɪˈnɪʃətɪvz/", translation: "企业可持续发展举措",
          subComponents: [{ startIndex: 0, words: [{ word: "Corporate" }, { word: "sustainability" }, { word: "initiatives" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈlɪfəˌreɪtɪd/", translation: "迅速普及",
          subComponents: [{ startIndex: 0, words: [{ word: "proliferated" }] }]
        },
        {
          start: 4, end: 6, label: "地点状语", phonetic: "/əˈkrɒs/ /ˌmʌltiˈnæʃənəl/ /ˈɛntərˌpraɪzɪz/", translation: "在跨国企业中",
          subComponents: [{ startIndex: 0, words: [{ word: "across" }, { word: "multinational" }, { word: "enterprises", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，proliferate (迅速扩散) 为不及物动词，是 increase 的高级替换。" }
      ]
    },
    {
      id: "q_basic_s103",
      chinese: "在整个选举周期中，公众对主流媒体的信任持续下降",
      english_full: "Public trust in mainstream media declined steadily throughout the election cycle.",
      words: [
        { word: "Public" }, { word: "trust" }, { word: "in" }, { word: "mainstream" }, { word: "media" },
        { word: "declined" }, { word: "steadily" }, { word: "throughout" }, { word: "the" }, { word: "election" }, { word: "cycle", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ˈpʌblɪk/ /trʌst/ /ɪn/ /ˈmeɪnstriːm/ /ˈmiːdiə/", translation: "公众对主流媒体的信任",
          subComponents: [
            { startIndex: 0, words: [{ word: "Public" }, { word: "trust" }] },
            { startIndex: 2, words: [{ word: "in" }, { word: "mainstream" }, { word: "media" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/dɪˈklaɪnd/", translation: "下降",
          subComponents: [{ startIndex: 0, words: [{ word: "declined" }] }]
        },
        {
          start: 6, end: 6, label: "状语", phonetic: "/ˈstɛdɪli/", translation: "持续地",
          subComponents: [{ startIndex: 0, words: [{ word: "steadily" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/θruːˈaʊt/ /ðə/ /ɪˈlɛkʃən/ /ˈsaɪkəl/", translation: "在整个选举周期中",
          subComponents: [{ startIndex: 0, words: [{ word: "throughout" }, { word: "the" }, { word: "election" }, { word: "cycle", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，decline 为不及物动词，trust in... 作主语核心。" }
      ]
    },
    {
      id: "q_basic_s104",
      chinese: "制药行业对新兴健康危机作出了迅速回应",
      english_full: "The pharmaceutical industry responded swiftly to the emerging health crisis.",
      words: [
        { word: "The" }, { word: "pharmaceutical" }, { word: "industry" }, { word: "responded" }, { word: "swiftly" },
        { word: "to" }, { word: "the" }, { word: "emerging" }, { word: "health" }, { word: "crisis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌfɑːrməˈsuːtɪkəl/ /ˈɪndəstri/", translation: "制药行业",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pharmaceutical" }, { word: "industry" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈspɒndɪd/", translation: "作出回应",
          subComponents: [{ startIndex: 0, words: [{ word: "responded" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈswɪftli/", translation: "迅速地",
          subComponents: [{ startIndex: 0, words: [{ word: "swiftly" }] }]
        },
        {
          start: 5, end: 9, label: "对象状语", phonetic: "/tuː/ /ðə/ /ɪˈmɜːrdʒɪŋ/ /hɛlθ/ /ˈkraɪsɪs/", translation: "对新兴健康危机",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "emerging" }, { word: "health" }, { word: "crisis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，respond to 为固定搭配，to 引导的介词短语说明回应对象。" }
      ]
    },
    {
      id: "q_basic_s105",
      chinese: "后疫情时代，国际旅游业出人意料地强劲反弹",
      english_full: "International tourism rebounded unexpectedly in the post-pandemic era.",
      words: [
        { word: "International" }, { word: "tourism" }, { word: "rebounded" }, { word: "unexpectedly" },
        { word: "in" }, { word: "the" }, { word: "post-pandemic" }, { word: "era", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɪntərˈnæʃənəl/ /ˈtʊərɪzəm/", translation: "国际旅游业",
          subComponents: [{ startIndex: 0, words: [{ word: "International" }, { word: "tourism" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/rɪˈbaʊndɪd/", translation: "反弹",
          subComponents: [{ startIndex: 0, words: [{ word: "rebounded" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˌʌnɪkˈspɛktɪdli/", translation: "出人意料地",
          subComponents: [{ startIndex: 0, words: [{ word: "unexpectedly" }] }]
        },
        {
          start: 4, end: 7, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ˌpoʊst-pænˈdɛmɪk/ /ˈɪərə/", translation: "在后疫情时代",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "post-pandemic" }, { word: "era", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，rebound 为不及物动词，意为「反弹、复苏」。" }
      ]
    },
    {
      id: "q_basic_s106",
      chinese: "拟议的立法似乎与宪法原则根本不相容",
      english_full: "The proposed legislation appears fundamentally incompatible with constitutional principles.",
      words: [
        { word: "The" }, { word: "proposed" }, { word: "legislation" }, { word: "appears" }, { word: "fundamentally" },
        { word: "incompatible" }, { word: "with" }, { word: "constitutional" }, { word: "principles", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /prəˈpoʊzd/ /ˌlɛdʒɪsˈleɪʃən/", translation: "拟议的立法",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "proposed" }, { word: "legislation" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/əˈpɪərz/", translation: "似乎",
          subComponents: [{ startIndex: 0, words: [{ word: "appears" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/ˌfʌndəˈmɛntəli/ /ˌɪnkəmˈpætəbəl/", translation: "根本不相容的",
          subComponents: [{ startIndex: 0, words: [{ word: "fundamentally" }, { word: "incompatible" }] }]
        },
        {
          start: 6, end: 8, label: "状语", phonetic: "/wɪð/ /ˌkɒnstɪˈtjuːʃənəl/ /ˈprɪnsəpəlz/", translation: "与宪法原则",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "constitutional" }, { word: "principles", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，appear 作系动词，incompatible 为形容词表语。" }
      ]
    },
    {
      id: "q_basic_s107",
      chinese: "远程工作安排在企业界已变得日益普遍",
      english_full: "Remote work arrangements have become increasingly prevalent in the corporate sector.",
      words: [
        { word: "Remote" }, { word: "work" }, { word: "arrangements" }, { word: "have" }, { word: "become" },
        { word: "increasingly" }, { word: "prevalent" }, { word: "in" }, { word: "the" }, { word: "corporate" }, { word: "sector", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/rɪˈmoʊt/ /wɜːrk/ /əˈreɪndʒmənts/", translation: "远程工作安排",
          subComponents: [{ startIndex: 0, words: [{ word: "Remote" }, { word: "work" }, { word: "arrangements" }] }]
        },
        {
          start: 3, end: 4, label: "系动词", phonetic: "/hæv/ /bɪˈkʌm/", translation: "已经变得",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "become" }] }]
        },
        {
          start: 5, end: 6, label: "表语", phonetic: "/ɪnˈkriːsɪŋli/ /ˈprɛvələnt/", translation: "日益普遍的",
          subComponents: [{ startIndex: 0, words: [{ word: "increasingly" }, { word: "prevalent" }] }]
        },
        {
          start: 7, end: 10, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ˈkɔːrpərət/ /ˈsɛktər/", translation: "在企业界",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "corporate" }, { word: "sector", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，become 为系动词，prevalent 作表语说明主语状态。" }
      ]
    },
    {
      id: "q_basic_s108",
      chinese: "尽管地缘政治紧张局势持续，经济前景仍然谨慎乐观",
      english_full: "The economic outlook remains cautiously optimistic despite ongoing geopolitical tensions.",
      words: [
        { word: "The" }, { word: "economic" }, { word: "outlook" }, { word: "remains" }, { word: "cautiously" },
        { word: "optimistic" }, { word: "despite" }, { word: "ongoing" }, { word: "geopolitical" }, { word: "tensions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌiːkəˈnɒmɪk/ /ˈaʊtlʊk/", translation: "经济前景",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "economic" }, { word: "outlook" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/rɪˈmeɪnz/", translation: "仍然保持",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/ˈkɔːʃəsli/ /ˌɒptɪˈmɪstɪk/", translation: "谨慎乐观的",
          subComponents: [{ startIndex: 0, words: [{ word: "cautiously" }, { word: "optimistic" }] }]
        },
        {
          start: 6, end: 9, label: "让步状语", phonetic: "/dɪˈspaɪt/ /ˈɒŋɡoʊɪŋ/ /ˌdʒiːoʊpəˈlɪtɪkəl/ /ˈtɛnʃənz/", translation: "尽管持续的地缘政治紧张",
          subComponents: [{ startIndex: 0, words: [{ word: "despite" }, { word: "ongoing" }, { word: "geopolitical" }, { word: "tensions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，remain 作系动词，cautiously optimistic 为复合表语。" }
      ]
    },
    {
      id: "q_basic_s109",
      chinese: "数据隐私法规似乎不足以应对当代网络安全威胁",
      english_full: "Data privacy regulations seem insufficient to address contemporary cybersecurity threats.",
      words: [
        { word: "Data" }, { word: "privacy" }, { word: "regulations" }, { word: "seem" }, { word: "insufficient" },
        { word: "to" }, { word: "address" }, { word: "contemporary" }, { word: "cybersecurity" }, { word: "threats", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈdeɪtə/ /ˈpraɪvəsi/ /ˌrɛɡjʊˈleɪʃənz/", translation: "数据隐私法规",
          subComponents: [{ startIndex: 0, words: [{ word: "Data" }, { word: "privacy" }, { word: "regulations" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/siːm/", translation: "似乎",
          subComponents: [{ startIndex: 0, words: [{ word: "seem" }] }]
        },
        {
          start: 4, end: 4, label: "表语", phonetic: "/ˌɪnsəˈfɪʃənt/", translation: "不足的",
          subComponents: [{ startIndex: 0, words: [{ word: "insufficient" }] }]
        },
        {
          start: 5, end: 9, label: "状语", phonetic: "/tuː/ /əˈdrɛs/ /kənˈtɛmpərəri/ /ˈsaɪbərˌsɛkjʊrɪti/ /θrɛts/", translation: "不足以应对当代网络安全威胁",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "address" }] },
            { startIndex: 2, words: [{ word: "contemporary" }, { word: "cybersecurity" }, { word: "threats", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，seem 作系动词，insufficient 后接不定式说明不足的内容。" }
      ]
    },
    {
      id: "q_basic_s110",
      chinese: "两家企业之间的合并谈判出乎意料地充满争议",
      english_full: "The merger negotiations proved unexpectedly contentious between the two corporations.",
      words: [
        { word: "The" }, { word: "merger" }, { word: "negotiations" }, { word: "proved" }, { word: "unexpectedly" },
        { word: "contentious" }, { word: "between" }, { word: "the" }, { word: "two" }, { word: "corporations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmɜːrdʒər/ /nɪˌɡoʊʃiˈeɪʃənz/", translation: "合并谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "merger" }, { word: "negotiations" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/pruːvd/", translation: "结果是/显得",
          subComponents: [{ startIndex: 0, words: [{ word: "proved" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/ˌʌnɪkˈspɛktɪdli/ /kənˈtɛnʃəs/", translation: "出乎意料地充满争议的",
          subComponents: [{ startIndex: 0, words: [{ word: "unexpectedly" }, { word: "contentious" }] }]
        },
        {
          start: 6, end: 9, label: "范围状语", phonetic: "/bɪˈtwiːn/ /ðə/ /tuː/ /ˌkɔːrpəˈreɪʃənz/", translation: "在两家公司之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "the" }, { word: "two" }, { word: "corporations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，prove 在此作系动词，意为「结果是」，contentious 为表语。" }
      ]
    },
    {
      id: "q_basic_s111",
      chinese: "在新兴市场中，可再生能源投资看起来尤其前景广阔",
      english_full: "Renewable energy investments look particularly promising in emerging markets.",
      words: [
        { word: "Renewable" }, { word: "energy" }, { word: "investments" }, { word: "look" }, { word: "particularly" },
        { word: "promising" }, { word: "in" }, { word: "emerging" }, { word: "markets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/rɪˈnuːəbəl/ /ˈɛnərdʒi/ /ɪnˈvɛstmənts/", translation: "可再生能源投资",
          subComponents: [{ startIndex: 0, words: [{ word: "Renewable" }, { word: "energy" }, { word: "investments" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/lʊk/", translation: "看起来",
          subComponents: [{ startIndex: 0, words: [{ word: "look" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/pərˈtɪkjələrli/ /ˈprɒmɪsɪŋ/", translation: "尤其前景广阔的",
          subComponents: [{ startIndex: 0, words: [{ word: "particularly" }, { word: "promising" }] }]
        },
        {
          start: 6, end: 8, label: "地点状语", phonetic: "/ɪn/ /ɪˈmɜːrdʒɪŋ/ /ˈmɑːrkɪts/", translation: "在新兴市场中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "emerging" }, { word: "markets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，look 作系动词，promising 为形容词表语。" }
      ]
    },
    {
      id: "q_basic_s112",
      chinese: "委员会经过广泛审议后批准了全面的改革方案",
      english_full: "The committee approved the comprehensive reform proposal after extensive deliberation.",
      words: [
        { word: "The" }, { word: "committee" }, { word: "approved" }, { word: "the" }, { word: "comprehensive" },
        { word: "reform" }, { word: "proposal" }, { word: "after" }, { word: "extensive" }, { word: "deliberation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kəˈmɪti/", translation: "委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "committee" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈpruːvd/", translation: "批准",
          subComponents: [{ startIndex: 0, words: [{ word: "approved" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ðə/ /ˌkɒmprɪˈhɛnsɪv/ /rɪˈfɔːrm/ /prəˈpoʊzəl/", translation: "全面的改革方案",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "comprehensive" }, { word: "reform" }, { word: "proposal" }] }]
        },
        {
          start: 7, end: 9, label: "时间状语", phonetic: "/ˈæftər/ /ɪkˈstɛnsɪv/ /dɪˌlɪbəˈreɪʃən/", translation: "经过广泛审议后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "extensive" }, { word: "deliberation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，approve 为及物动词，proposal 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s113",
      chinese: "研究人员在现有基础设施中发现了若干关键漏洞",
      english_full: "Researchers identified several critical vulnerabilities in the existing infrastructure.",
      words: [
        { word: "Researchers" }, { word: "identified" }, { word: "several" }, { word: "critical" }, { word: "vulnerabilities" },
        { word: "in" }, { word: "the" }, { word: "existing" }, { word: "infrastructure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/rɪˈsɜːrtʃərz/", translation: "研究人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Researchers" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/aɪˈdɛntɪfaɪd/", translation: "发现/识别",
          subComponents: [{ startIndex: 0, words: [{ word: "identified" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ˈsɛvrəl/ /ˈkrɪtɪkəl/ /ˌvʌlnərəˈbɪlɪtiz/", translation: "若干关键漏洞",
          subComponents: [{ startIndex: 0, words: [{ word: "several" }, { word: "critical" }, { word: "vulnerabilities" }] }]
        },
        {
          start: 5, end: 8, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ɪgˈzɪstɪŋ/ /ˈɪnfrəˌstrʌktʃər/", translation: "在现有基础设施中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "existing" }, { word: "infrastructure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，identify 为及物动词，vulnerabilities 作宾语。" }
      ]
    },
    {
      id: "q_basic_s114",
      chinese: "该组织发起了一项雄心勃勃的数字素养推广活动",
      english_full: "The organization launched an ambitious campaign to promote digital literacy.",
      words: [
        { word: "The" }, { word: "organization" }, { word: "launched" }, { word: "an" }, { word: "ambitious" },
        { word: "campaign" }, { word: "to" }, { word: "promote" }, { word: "digital" }, { word: "literacy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌɔːrgənəˈzeɪʃən/", translation: "该组织",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "organization" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/lɔːntʃt/", translation: "发起",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 3, end: 9, label: "宾语", phonetic: "/æn/ /æmˈbɪʃəs/ /kæmˈpeɪn/ /tuː/ /prəˈmoʊt/ /ˈdɪdʒɪtəl/ /ˈlɪtərəsi/", translation: "一项推广数字素养的雄心勃勃的活动",
          subComponents: [
            { startIndex: 0, words: [{ word: "an" }, { word: "ambitious" }, { word: "campaign" }] },
            { startIndex: 3, words: [{ word: "to" }, { word: "promote" }, { word: "digital" }, { word: "literacy", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，launch 为及物动词，不定式短语修饰 campaign 说明目的。" }
      ]
    },
    {
      id: "q_basic_s115",
      chinese: "各国政府实施了史无前例的财政刺激方案",
      english_full: "Governments worldwide implemented unprecedented fiscal stimulus packages.",
      words: [
        { word: "Governments" }, { word: "worldwide" }, { word: "implemented" }, { word: "unprecedented" },
        { word: "fiscal" }, { word: "stimulus" }, { word: "packages", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈgʌvərnmənts/ /ˌwɜːrldˈwaɪd/", translation: "各国政府",
          subComponents: [{ startIndex: 0, words: [{ word: "Governments" }, { word: "worldwide" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɪmplɪmɛntɪd/", translation: "实施",
          subComponents: [{ startIndex: 0, words: [{ word: "implemented" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ʌnˈprɛsɪdɛntɪd/ /ˈfɪskəl/ /ˈstɪmjʊləs/ /ˈpækɪdʒɪz/", translation: "史无前例的财政刺激方案",
          subComponents: [{ startIndex: 0, words: [{ word: "unprecedented" }, { word: "fiscal" }, { word: "stimulus" }, { word: "packages", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，implement 为及物动词，packages 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s116",
      chinese: "审计揭示了公司财务报告中存在的重大差异",
      english_full: "The audit revealed significant discrepancies in the company's financial reporting.",
      words: [
        { word: "The" }, { word: "audit" }, { word: "revealed" }, { word: "significant" }, { word: "discrepancies" },
        { word: "in" }, { word: "the" }, { word: "company's" }, { word: "financial" }, { word: "reporting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɔːdɪt/", translation: "审计",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "audit" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/rɪˈviːld/", translation: "揭示",
          subComponents: [{ startIndex: 0, words: [{ word: "revealed" }] }]
        },
        {
          start: 3, end: 9, label: "宾语", phonetic: "/sɪgˈnɪfɪkənt/ /dɪsˈkrɛpənsiz/ /ɪn/ /ðə/ /ˈkʌmpəniz/ /faɪˈnænʃəl/ /rɪˈpɔːrtɪŋ/", translation: "公司财务报告中的重大差异",
          subComponents: [
            { startIndex: 0, words: [{ word: "significant" }, { word: "discrepancies" }] },
            { startIndex: 2, words: [{ word: "in" }, { word: "the" }, { word: "company's" }, { word: "financial" }, { word: "reporting", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，reveal 为及物动词，discrepancies 作宾语核心。" }
      ]
    },
    {
      id: "q_basic_s117",
      chinese: "科学家开发出一种捕获大气二氧化碳的创新方法",
      english_full: "Scientists developed an innovative method for capturing atmospheric carbon dioxide.",
      words: [
        { word: "Scientists" }, { word: "developed" }, { word: "an" }, { word: "innovative" }, { word: "method" },
        { word: "for" }, { word: "capturing" }, { word: "atmospheric" }, { word: "carbon" }, { word: "dioxide", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈsaɪəntɪsts/", translation: "科学家",
          subComponents: [{ startIndex: 0, words: [{ word: "Scientists" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/dɪˈvɛləpt/", translation: "开发",
          subComponents: [{ startIndex: 0, words: [{ word: "developed" }] }]
        },
        {
          start: 2, end: 9, label: "宾语", phonetic: "/æn/ /ˈɪnəveɪtɪv/ /ˈmɛθəd/ /fɔːr/ /ˈkæptʃərɪŋ/ /ˌætməsˈfɛrɪk/ /ˈkɑːrbən/ /daɪˈɒksaɪd/", translation: "一种捕获大气二氧化碳的创新方法",
          subComponents: [
            { startIndex: 0, words: [{ word: "an" }, { word: "innovative" }, { word: "method" }] },
            { startIndex: 3, words: [{ word: "for" }, { word: "capturing" }, { word: "atmospheric" }, { word: "carbon" }, { word: "dioxide", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，develop 为及物动词，method 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s118",
      chinese: "大学向杰出学者提供了大量研究经费",
      english_full: "The university granted outstanding scholars substantial research funding.",
      words: [
        { word: "The" }, { word: "university" }, { word: "granted" }, { word: "outstanding" }, { word: "scholars" },
        { word: "substantial" }, { word: "research" }, { word: "funding", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌjuːnɪˈvɜːrsɪti/", translation: "大学",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "university" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈgræntɪd/", translation: "授予",
          subComponents: [{ startIndex: 0, words: [{ word: "granted" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/aʊtˈstændɪŋ/ /ˈskɒlərz/", translation: "杰出学者",
          subComponents: [{ startIndex: 0, words: [{ word: "outstanding" }, { word: "scholars" }] }]
        },
        {
          start: 5, end: 7, label: "直接宾语", phonetic: "/səbˈstænʃəl/ /rɪˈsɜːrtʃ/ /ˈfʌndɪŋ/", translation: "大量研究经费",
          subComponents: [{ startIndex: 0, words: [{ word: "substantial" }, { word: "research" }, { word: "funding", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，grant sb sth 中 scholars 为间接宾语，funding 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s119",
      chinese: "导师为这位有抱负的企业家提供了关于市场进入的宝贵指导",
      english_full: "The mentor offered the aspiring entrepreneur invaluable guidance on market entry.",
      words: [
        { word: "The" }, { word: "mentor" }, { word: "offered" }, { word: "the" }, { word: "aspiring" },
        { word: "entrepreneur" }, { word: "invaluable" }, { word: "guidance" }, { word: "on" }, { word: "market" }, { word: "entry", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmɛntɔːr/", translation: "导师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "mentor" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒfərd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offered" }] }]
        },
        {
          start: 3, end: 5, label: "间接宾语", phonetic: "/ðə/ /əˈspaɪərɪŋ/ /ˌɒntrəprəˈnɜːr/", translation: "这位有抱负的企业家",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "aspiring" }, { word: "entrepreneur" }] }]
        },
        {
          start: 6, end: 10, label: "直接宾语", phonetic: "/ɪnˈvæljuəbəl/ /ˈgaɪdəns/ /ɒn/ /ˈmɑːrkɪt/ /ˈɛntri/", translation: "关于市场进入的宝贵指导",
          subComponents: [
            { startIndex: 0, words: [{ word: "invaluable" }, { word: "guidance" }] },
            { startIndex: 2, words: [{ word: "on" }, { word: "market" }, { word: "entry", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，offer sb sth 中 entrepreneur 为间接宾语。" }
      ]
    },
    {
      id: "q_basic_s120",
      chinese: "基金会向这位先驱科学家颁发了一项享有盛誉的国际奖项",
      english_full: "The foundation awarded the pioneering scientist a prestigious international prize.",
      words: [
        { word: "The" }, { word: "foundation" }, { word: "awarded" }, { word: "the" }, { word: "pioneering" },
        { word: "scientist" }, { word: "a" }, { word: "prestigious" }, { word: "international" }, { word: "prize", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /faʊnˈdeɪʃən/", translation: "基金会",
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
          start: 6, end: 9, label: "直接宾语", phonetic: "/ə/ /prɛˈstɪdʒəs/ /ˌɪntərˈnæʃənəl/ /praɪz/", translation: "一项享有盛誉的国际奖项",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "prestigious" }, { word: "international" }, { word: "prize", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，award sb sth 中 scientist 为间接宾语，prize 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s121",
      chinese: "顾问向管理团队提供了关于重组的详细建议",
      english_full: "The consultant gave the management team detailed recommendations for restructuring.",
      words: [
        { word: "The" }, { word: "consultant" }, { word: "gave" }, { word: "the" }, { word: "management" },
        { word: "team" }, { word: "detailed" }, { word: "recommendations" }, { word: "for" }, { word: "restructuring", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kənˈsʌltənt/", translation: "顾问",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "consultant" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/geɪv/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "gave" }] }]
        },
        {
          start: 3, end: 5, label: "间接宾语", phonetic: "/ðə/ /ˈmænɪdʒmənt/ /tiːm/", translation: "管理团队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "management" }, { word: "team" }] }]
        },
        {
          start: 6, end: 9, label: "直接宾语", phonetic: "/ˈdiːteɪld/ /ˌrɛkəmɛnˈdeɪʃənz/ /fɔːr/ /riːˈstrʌktʃərɪŋ/", translation: "关于重组的详细建议",
          subComponents: [
            { startIndex: 0, words: [{ word: "detailed" }, { word: "recommendations" }] },
            { startIndex: 2, words: [{ word: "for" }, { word: "restructuring", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，give sb sth 中 team 为间接宾语。" }
      ]
    },
    {
      id: "q_basic_s122",
      chinese: "出版商向这位广受赞誉的作者寄送了手稿的预印本",
      english_full: "The publisher sent the acclaimed author an advance copy of the manuscript.",
      words: [
        { word: "The" }, { word: "publisher" }, { word: "sent" }, { word: "the" }, { word: "acclaimed" },
        { word: "author" }, { word: "an" }, { word: "advance" }, { word: "copy" }, { word: "of" }, { word: "the" }, { word: "manuscript", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpʌblɪʃər/", translation: "出版商",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "publisher" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/sɛnt/", translation: "寄送",
          subComponents: [{ startIndex: 0, words: [{ word: "sent" }] }]
        },
        {
          start: 3, end: 5, label: "间接宾语", phonetic: "/ðə/ /əˈkleɪmd/ /ˈɔːθər/", translation: "这位广受赞誉的作者",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "acclaimed" }, { word: "author" }] }]
        },
        {
          start: 6, end: 11, label: "直接宾语", phonetic: "/æn/ /ədˈvæns/ /ˈkɒpi/ /ɒv/ /ðə/ /ˈmænjʊskrɪpt/", translation: "手稿的预印本",
          subComponents: [
            { startIndex: 0, words: [{ word: "an" }, { word: "advance" }, { word: "copy" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "the" }, { word: "manuscript", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，send sb sth 中 author 为间接宾语，copy 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s123",
      chinese: "培训项目为新员工提供了客户谈判的基本技能",
      english_full: "The training program gave new employees essential skills for client negotiation.",
      words: [
        { word: "The" }, { word: "training" }, { word: "program" }, { word: "gave" }, { word: "new" },
        { word: "employees" }, { word: "essential" }, { word: "skills" }, { word: "for" }, { word: "client" }, { word: "negotiation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈtreɪnɪŋ/ /ˈproʊgræm/", translation: "培训项目",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "training" }, { word: "program" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/geɪv/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "gave" }] }]
        },
        {
          start: 4, end: 5, label: "间接宾语", phonetic: "/njuː/ /ɪmˈplɔɪiːz/", translation: "新员工",
          subComponents: [{ startIndex: 0, words: [{ word: "new" }, { word: "employees" }] }]
        },
        {
          start: 6, end: 10, label: "直接宾语", phonetic: "/ɪˈsɛnʃəl/ /skɪlz/ /fɔːr/ /ˈklaɪənt/ /ˌnɛɡoʊʃiˈeɪʃən/", translation: "客户谈判的基本技能",
          subComponents: [
            { startIndex: 0, words: [{ word: "essential" }, { word: "skills" }] },
            { startIndex: 2, words: [{ word: "for" }, { word: "client" }, { word: "negotiation", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，give sb sth 中 employees 为间接宾语，skills 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s124",
      chinese: "监管机构宣布受污染产品不适合公众消费",
      english_full: "The regulatory body declared the contaminated products unfit for public consumption.",
      words: [
        { word: "The" }, { word: "regulatory" }, { word: "body" }, { word: "declared" }, { word: "the" },
        { word: "contaminated" }, { word: "products" }, { word: "unfit" }, { word: "for" }, { word: "public" }, { word: "consumption", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛɡjʊlətɔːri/ /ˈbɒdi/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "regulatory" }, { word: "body" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/dɪˈklɛərd/", translation: "宣布",
          subComponents: [{ startIndex: 0, words: [{ word: "declared" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /kənˈtæmɪneɪtɪd/ /ˈprɒdʌkts/", translation: "受污染的产品",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "contaminated" }, { word: "products" }] }]
        },
        {
          start: 7, end: 10, label: "宾语补足语", phonetic: "/ʌnˈfɪt/ /fɔːr/ /ˈpʌblɪk/ /kənˈsʌmpʃən/", translation: "不适合公众消费",
          subComponents: [
            { startIndex: 0, words: [{ word: "unfit" }] },
            { startIndex: 1, words: [{ word: "for" }, { word: "public" }, { word: "consumption", punctuation: "." }], label: "补充说明" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，declare sth adj. 中 unfit 为形容词宾补。" }
      ]
    },
    {
      id: "q_basic_s125",
      chinese: "股东选举前任首席财务官担任董事会主席",
      english_full: "Shareholders elected the former CFO chairperson of the board.",
      words: [
        { word: "Shareholders" }, { word: "elected" }, { word: "the" }, { word: "former" }, { word: "CFO" },
        { word: "chairperson" }, { word: "of" }, { word: "the" }, { word: "board", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈʃɛərˌhoʊldərz/", translation: "股东",
          subComponents: [{ startIndex: 0, words: [{ word: "Shareholders" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ɪˈlɛktɪd/", translation: "选举",
          subComponents: [{ startIndex: 0, words: [{ word: "elected" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /ˈfɔːrmər/ /ˌsiːˌiːˈɛfˈoʊ/", translation: "前任首席财务官",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "former" }, { word: "CFO" }] }]
        },
        {
          start: 5, end: 8, label: "宾语补足语", phonetic: "/ˈtʃɛərˌpɜːrsən/ /ɒv/ /ðə/ /bɔːrd/", translation: "董事会主席",
          subComponents: [{ startIndex: 0, words: [{ word: "chairperson" }, { word: "of" }, { word: "the" }, { word: "board", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，elect sb + 职位，chairperson 补充说明宾语身份。" }
      ]
    },
    {
      id: "q_basic_s126",
      chinese: "调查证明最初的假设完全缺乏依据",
      english_full: "The investigation proved the initial hypothesis entirely unfounded.",
      words: [
        { word: "The" }, { word: "investigation" }, { word: "proved" }, { word: "the" }, { word: "initial" },
        { word: "hypothesis" }, { word: "entirely" }, { word: "unfounded", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ɪnˌvɛstɪˈɡeɪʃən/", translation: "调查",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "investigation" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/pruːvd/", translation: "证明",
          subComponents: [{ startIndex: 0, words: [{ word: "proved" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ðə/ /ɪˈnɪʃəl/ /haɪˈpɒθəsɪs/", translation: "最初的假设",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "initial" }, { word: "hypothesis" }] }]
        },
        {
          start: 6, end: 7, label: "宾语补足语", phonetic: "/ɪnˈtaɪərli/ /ʌnˈfaʊndɪd/", translation: "完全缺乏依据",
          subComponents: [{ startIndex: 0, words: [{ word: "entirely" }, { word: "unfounded", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，prove sth adj. 中 unfounded 为形容词宾补。" }
      ]
    },
    {
      id: "q_basic_s127",
      chinese: "批评者认为拟议政策从长期来看在经济上不可持续",
      english_full: "Critics deemed the proposed policy economically unsustainable in the long term.",
      words: [
        { word: "Critics" }, { word: "deemed" }, { word: "the" }, { word: "proposed" }, { word: "policy" },
        { word: "economically" }, { word: "unsustainable" }, { word: "in" }, { word: "the" }, { word: "long" }, { word: "term", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈkrɪtɪks/", translation: "批评者",
          subComponents: [{ startIndex: 0, words: [{ word: "Critics" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/diːmd/", translation: "认为",
          subComponents: [{ startIndex: 0, words: [{ word: "deemed" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /prəˈpoʊzd/ /ˈpɒləsi/", translation: "拟议政策",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "proposed" }, { word: "policy" }] }]
        },
        {
          start: 5, end: 6, label: "宾语补足语", phonetic: "/ˌiːkəˈnɒmɪkli/ /ˌʌnsəˈsteɪnəbəl/", translation: "在经济上不可持续的",
          subComponents: [{ startIndex: 0, words: [{ word: "economically" }, { word: "unsustainable" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/ɪn/ /ðə/ /lɒŋ/ /tɜːrm/", translation: "从长期来看",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "long" }, { word: "term", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，deem sth adj. 中 economically unsustainable 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s128",
      chinese: "这一突破性发现使基因疗法在商业上变得可行",
      english_full: "The breakthrough discovery made gene therapy commercially viable.",
      words: [
        { word: "The" }, { word: "breakthrough" }, { word: "discovery" }, { word: "made" }, { word: "gene" },
        { word: "therapy" }, { word: "commercially" }, { word: "viable", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈbreɪkθruː/ /dɪsˈkʌvəri/", translation: "这一突破性发现",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "breakthrough" }, { word: "discovery" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/meɪd/", translation: "使……变得",
          subComponents: [{ startIndex: 0, words: [{ word: "made" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/dʒiːn/ /ˈθɛrəpi/", translation: "基因疗法",
          subComponents: [{ startIndex: 0, words: [{ word: "gene" }, { word: "therapy" }] }]
        },
        {
          start: 6, end: 7, label: "宾语补足语", phonetic: "/kəˈmɜːrʃəli/ /ˈvaɪəbəl/", translation: "在商业上可行的",
          subComponents: [{ startIndex: 0, words: [{ word: "commercially" }, { word: "viable", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，make sth adj. 中 commercially viable 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s129",
      chinese: "法庭裁定被告须对巨额损害赔偿承担责任",
      english_full: "The tribunal ruled the defendant liable for substantial damages.",
      words: [
        { word: "The" }, { word: "tribunal" }, { word: "ruled" }, { word: "the" }, { word: "defendant" },
        { word: "liable" }, { word: "for" }, { word: "substantial" }, { word: "damages", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /trɪˈbjuːnəl/", translation: "法庭",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tribunal" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ruːld/", translation: "裁定",
          subComponents: [{ startIndex: 0, words: [{ word: "ruled" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /dɪˈfɛndənt/", translation: "被告",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "defendant" }] }]
        },
        {
          start: 5, end: 8, label: "宾语补足语", phonetic: "/ˈlaɪəbəl/ /fɔːr/ /səbˈstænʃəl/ /ˈdæmɪdʒɪz/", translation: "须对巨额损害赔偿承担责任",
          subComponents: [
            { startIndex: 0, words: [{ word: "liable" }] },
            { startIndex: 1, words: [{ word: "for" }, { word: "substantial" }, { word: "damages", punctuation: "." }], label: "补充说明" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，rule sb adj. 中 liable 为形容词宾补，for damages 补充说明责任范围。" }
      ]
    }
  ]
};
