export const extensions = {
  "module_basic": [
    {
      id: "q_basic_s200",
      chinese: "气候迁移模式在易受影响的沿海地区日益加剧",
      english_full: "Climate migration patterns are intensifying across vulnerable coastal regions.",
      words: [
        { word: "Climate" }, { word: "migration" }, { word: "patterns" }, { word: "are" }, { word: "intensifying" },
        { word: "across" }, { word: "vulnerable" }, { word: "coastal" }, { word: "regions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈklaɪmət/ /maɪˈɡreɪʃən/ /ˈpætərnz/", translation: "气候迁移模式",
          subComponents: [{ startIndex: 0, words: [{ word: "Climate" }, { word: "migration" }, { word: "patterns" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ɑːr/ /ɪnˈtɛnsɪfaɪɪŋ/", translation: "正在加剧",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "intensifying" }] }]
        },
        {
          start: 5, end: 8, label: "地点状语", phonetic: "/əˈkrɒs/ /ˈvʌlnərəbəl/ /ˈkoʊstəl/ /ˈriːdʒənz/", translation: "在易受影响的沿海地区",
          subComponents: [{ startIndex: 0, words: [{ word: "across" }, { word: "vulnerable" }, { word: "coastal" }, { word: "regions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，intensify 为不及物动词，across... 作地点状语说明加剧的范围。" }
      ]
    },
    {
      id: "q_basic_s201",
      chinese: "风险投资资金在第一季度激增",
      english_full: "Venture capital funding surged dramatically during the first quarter.",
      words: [
        { word: "Venture" }, { word: "capital" }, { word: "funding" }, { word: "surged" }, { word: "dramatically" },
        { word: "during" }, { word: "the" }, { word: "first" }, { word: "quarter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈvɛntʃər/ /ˈkæpɪtəl/ /ˈfʌndɪŋ/", translation: "风险投资资金",
          subComponents: [{ startIndex: 0, words: [{ word: "Venture" }, { word: "capital" }, { word: "funding" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/sɜːrdʒd/", translation: "激增",
          subComponents: [{ startIndex: 0, words: [{ word: "surged" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/drəˈmætɪkli/", translation: "大幅地",
          subComponents: [{ startIndex: 0, words: [{ word: "dramatically" }] }]
        },
        {
          start: 5, end: 8, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /fɜːrst/ /ˈkwɔːrtər/", translation: "在第一季度期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "first" }, { word: "quarter", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，surge 为不及物动词，dramatically 作方式状语修饰谓语。" }
      ]
    },
    {
      id: "q_basic_s202",
      chinese: "在通胀压力不断攀升的背景下，消费者信心持续恶化",
      english_full: "Consumer confidence deteriorated steadily amid rising inflationary pressures.",
      words: [
        { word: "Consumer" }, { word: "confidence" }, { word: "deteriorated" }, { word: "steadily" },
        { word: "amid" }, { word: "rising" }, { word: "inflationary" }, { word: "pressures", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/kənˈsjuːmər/ /ˈkɒnfɪdəns/", translation: "消费者信心",
          subComponents: [{ startIndex: 0, words: [{ word: "Consumer" }, { word: "confidence" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/dɪˈtɪəriəreɪtɪd/", translation: "恶化",
          subComponents: [{ startIndex: 0, words: [{ word: "deteriorated" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈstɛdɪli/", translation: "持续地",
          subComponents: [{ startIndex: 0, words: [{ word: "steadily" }] }]
        },
        {
          start: 4, end: 7, label: "背景状语", phonetic: "/əˈmɪd/ /ˈraɪzɪŋ/ /ɪnˈfleɪʃənəri/ /ˈprɛʃərz/", translation: "在通胀压力不断攀升的背景下",
          subComponents: [{ startIndex: 0, words: [{ word: "amid" }, { word: "rising" }, { word: "inflationary" }, { word: "pressures", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，deteriorate 为不及物动词，amid 引导的介词短语说明背景环境。" }
      ]
    },
    {
      id: "q_basic_s203",
      chinese: "生物多样性丧失在热带雨林生态系统中显著加速",
      english_full: "Biodiversity loss accelerated significantly in tropical rainforest ecosystems.",
      words: [
        { word: "Biodiversity" }, { word: "loss" }, { word: "accelerated" }, { word: "significantly" },
        { word: "in" }, { word: "tropical" }, { word: "rainforest" }, { word: "ecosystems", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌbaɪoʊdaɪˈvɜːrsɪti/ /lɒs/", translation: "生物多样性丧失",
          subComponents: [{ startIndex: 0, words: [{ word: "Biodiversity" }, { word: "loss" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əkˈsɛləreɪtɪd/", translation: "加速",
          subComponents: [{ startIndex: 0, words: [{ word: "accelerated" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/sɪgˈnɪfɪkəntli/", translation: "显著地",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }] }]
        },
        {
          start: 4, end: 7, label: "地点状语", phonetic: "/ɪn/ /ˈtrɒpɪkəl/ /ˈreɪnfɒrɪst/ /ˈiːkoʊsɪstəmz/", translation: "在热带雨林生态系统中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "tropical" }, { word: "rainforest" }, { word: "ecosystems", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，accelerate 为不及物动词，significantly 修饰谓语说明程度。" }
      ]
    },
    {
      id: "q_basic_s204",
      chinese: "尽管领土争端持续存在，外交对话仍在谨慎推进",
      english_full: "The diplomatic dialogue progressed cautiously despite persistent territorial disputes.",
      words: [
        { word: "The" }, { word: "diplomatic" }, { word: "dialogue" }, { word: "progressed" }, { word: "cautiously" },
        { word: "despite" }, { word: "persistent" }, { word: "territorial" }, { word: "disputes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌdɪpləˈmætɪk/ /ˈdaɪəlɒg/", translation: "外交对话",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "diplomatic" }, { word: "dialogue" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈgrɛst/", translation: "推进",
          subComponents: [{ startIndex: 0, words: [{ word: "progressed" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈkɔːʃəsli/", translation: "谨慎地",
          subComponents: [{ startIndex: 0, words: [{ word: "cautiously" }] }]
        },
        {
          start: 5, end: 8, label: "让步状语", phonetic: "/dɪˈspaɪt/ /pərˈsɪstənt/ /ˌtɛrɪˈtɔːriəl/ /dɪsˈpjuːts/", translation: "尽管领土争端持续存在",
          subComponents: [{ startIndex: 0, words: [{ word: "despite" }, { word: "persistent" }, { word: "territorial" }, { word: "disputes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，progress 为不及物动词，despite 引导让步状语。" }
      ]
    },
    {
      id: "q_basic_s205",
      chinese: "人工智能的应用在金融服务领域迅速扩展",
      english_full: "Artificial intelligence adoption expanded rapidly across the financial services sector.",
      words: [
        { word: "Artificial" }, { word: "intelligence" }, { word: "adoption" }, { word: "expanded" }, { word: "rapidly" },
        { word: "across" }, { word: "the" }, { word: "financial" }, { word: "services" }, { word: "sector", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/ /əˈdɒpʃən/", translation: "人工智能的应用",
          subComponents: [{ startIndex: 0, words: [{ word: "Artificial" }, { word: "intelligence" }, { word: "adoption" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪkˈspændɪd/", translation: "扩展",
          subComponents: [{ startIndex: 0, words: [{ word: "expanded" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈræpɪdli/", translation: "迅速地",
          subComponents: [{ startIndex: 0, words: [{ word: "rapidly" }] }]
        },
        {
          start: 5, end: 9, label: "范围状语", phonetic: "/əˈkrɒs/ /ðə/ /faɪˈnænʃəl/ /ˈsɜːrvɪsɪz/ /ˈsɛktər/", translation: "在金融服务领域",
          subComponents: [{ startIndex: 0, words: [{ word: "across" }, { word: "the" }, { word: "financial" }, { word: "services" }, { word: "sector", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SV 主谓)", text: "主谓结构 (S + V)，expand 为不及物动词，across the financial services sector 说明扩展范围。" }
      ]
    },
    {
      id: "q_basic_s206",
      chinese: "拟议合并对双方而言似乎具有战略优势",
      english_full: "The proposed merger appears strategically advantageous for both parties.",
      words: [
        { word: "The" }, { word: "proposed" }, { word: "merger" }, { word: "appears" }, { word: "strategically" },
        { word: "advantageous" }, { word: "for" }, { word: "both" }, { word: "parties", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /prəˈpoʊzd/ /ˈmɜːrdʒər/", translation: "拟议合并",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "proposed" }, { word: "merger" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/əˈpɪərz/", translation: "似乎",
          subComponents: [{ startIndex: 0, words: [{ word: "appears" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/strəˈtiːdʒɪkli/ /ˌædvənˈteɪdʒəs/", translation: "具有战略优势的",
          subComponents: [{ startIndex: 0, words: [{ word: "strategically" }, { word: "advantageous" }] }]
        },
        {
          start: 6, end: 8, label: "对象状语", phonetic: "/fɔːr/ /boʊθ/ /ˈpɑːrtiz/", translation: "对双方而言",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "both" }, { word: "parties", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，appear 作系动词，advantageous 为形容词表语。" }
      ]
    },
    {
      id: "q_basic_s207",
      chinese: "碳中和目标在技术上仍然可行，尽管面临经济制约",
      english_full: "Carbon neutrality targets remain technically feasible despite economic constraints.",
      words: [
        { word: "Carbon" }, { word: "neutrality" }, { word: "targets" }, { word: "remain" }, { word: "technically" },
        { word: "feasible" }, { word: "despite" }, { word: "economic" }, { word: "constraints", punctuation: "." }
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
          start: 4, end: 5, label: "表语", phonetic: "/ˈtɛknɪkli/ /ˈfiːzəbəl/", translation: "在技术上可行的",
          subComponents: [{ startIndex: 0, words: [{ word: "technically" }, { word: "feasible" }] }]
        },
        {
          start: 6, end: 8, label: "让步状语", phonetic: "/dɪˈspaɪt/ /ˌiːkəˈnɒmɪk/ /kənˈstreɪnts/", translation: "尽管面临经济制约",
          subComponents: [{ startIndex: 0, words: [{ word: "despite" }, { word: "economic" }, { word: "constraints", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，remain 作系动词，technically feasible 为复合表语。" }
      ]
    },
    {
      id: "q_basic_s208",
      chinese: "中期报告在因果关系方面似乎完全缺乏定论",
      english_full: "The interim report seems thoroughly inconclusive on causality.",
      words: [
        { word: "The" }, { word: "interim" }, { word: "report" }, { word: "seems" }, { word: "thoroughly" },
        { word: "inconclusive" }, { word: "on" }, { word: "causality", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈɪntərɪm/ /rɪˈpɔːrt/", translation: "中期报告",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "interim" }, { word: "report" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/siːmz/", translation: "似乎",
          subComponents: [{ startIndex: 0, words: [{ word: "seems" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/ˈθʌrəli/ /ˌɪnkənˈkluːsɪv/", translation: "完全缺乏定论的",
          subComponents: [{ startIndex: 0, words: [{ word: "thoroughly" }, { word: "inconclusive" }] }]
        },
        {
          start: 6, end: 7, label: "方面状语", phonetic: "/ɒn/ /kɔːˈzælɪti/", translation: "在因果关系方面",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "causality", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，seem 作系动词，inconclusive 为表语，on causality 说明不足的具体方面。" }
      ]
    },
    {
      id: "q_basic_s209",
      chinese: "劳动力多元化举措已成为企业文化中日益不可或缺的部分",
      english_full: "Workforce diversity initiatives have become increasingly integral to corporate culture.",
      words: [
        { word: "Workforce" }, { word: "diversity" }, { word: "initiatives" }, { word: "have" }, { word: "become" },
        { word: "increasingly" }, { word: "integral" }, { word: "to" }, { word: "corporate" }, { word: "culture", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈwɜːrkfɔːrs/ /daɪˈvɜːrsɪti/ /ɪˈnɪʃətɪvz/", translation: "劳动力多元化举措",
          subComponents: [{ startIndex: 0, words: [{ word: "Workforce" }, { word: "diversity" }, { word: "initiatives" }] }]
        },
        {
          start: 3, end: 4, label: "系动词", phonetic: "/hæv/ /bɪˈkʌm/", translation: "已经成为",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "become" }] }]
        },
        {
          start: 5, end: 6, label: "表语", phonetic: "/ɪnˈkriːsɪŋli/ /ˈɪntɪgrəl/", translation: "日益不可或缺的",
          subComponents: [{ startIndex: 0, words: [{ word: "increasingly" }, { word: "integral" }] }]
        },
        {
          start: 7, end: 9, label: "对象状语", phonetic: "/tuː/ /ˈkɔːrpərət/ /ˈkʌltʃər/", translation: "对企业文化而言",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "corporate" }, { word: "culture", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，become 为系动词，integral to... 说明与企业文化的关系。" }
      ]
    },
    {
      id: "q_basic_s210",
      chinese: "修订后的框架看起来比其前身全面得多",
      english_full: "The revised framework looks substantially more comprehensive than its predecessor.",
      words: [
        { word: "The" }, { word: "revised" }, { word: "framework" }, { word: "looks" }, { word: "substantially" },
        { word: "more" }, { word: "comprehensive" }, { word: "than" }, { word: "its" }, { word: "predecessor", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /rɪˈvaɪzd/ /ˈfreɪmwɜːrk/", translation: "修订后的框架",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "revised" }, { word: "framework" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/lʊks/", translation: "看起来",
          subComponents: [{ startIndex: 0, words: [{ word: "looks" }] }]
        },
        {
          start: 4, end: 6, label: "表语", phonetic: "/səbˈstænʃəli/ /mɔːr/ /ˌkɒmprɪˈhɛnsɪv/", translation: "全面得多",
          subComponents: [{ startIndex: 0, words: [{ word: "substantially" }, { word: "more" }, { word: "comprehensive" }] }]
        },
        {
          start: 7, end: 9, label: "比较状语", phonetic: "/ðæn/ /ɪts/ /ˈprɛdɪsɛsər/", translation: "比其前身",
          subComponents: [{ startIndex: 0, words: [{ word: "than" }, { word: "its" }, { word: "predecessor", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，look 作系动词，more comprehensive 为比较级表语。" }
      ]
    },
    {
      id: "q_basic_s211",
      chinese: "公共卫生基础设施在危机期间被证明严重不足",
      english_full: "Public health infrastructure proved woefully inadequate during the crisis.",
      words: [
        { word: "Public" }, { word: "health" }, { word: "infrastructure" }, { word: "proved" }, { word: "woefully" },
        { word: "inadequate" }, { word: "during" }, { word: "the" }, { word: "crisis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈpʌblɪk/ /hɛlθ/ /ˈɪnfrəˌstrʌktʃər/", translation: "公共卫生基础设施",
          subComponents: [{ startIndex: 0, words: [{ word: "Public" }, { word: "health" }, { word: "infrastructure" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/pruːvd/", translation: "被证明是",
          subComponents: [{ startIndex: 0, words: [{ word: "proved" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/ˈwuːfəli/ /ɪnˈædɪkwət/", translation: "严重不足的",
          subComponents: [{ startIndex: 0, words: [{ word: "woefully" }, { word: "inadequate" }] }]
        },
        {
          start: 6, end: 8, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /ˈkraɪsɪs/", translation: "在危机期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "crisis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SP 主系表)", text: "主系表结构 (S + V + P)，prove 在此作系动词，woefully inadequate 为复合表语。" }
      ]
    },
    {
      id: "q_basic_s212",
      chinese: "董事会批准了雄心勃勃的五年扩张战略",
      english_full: "The board approved the ambitious five-year expansion strategy.",
      words: [
        { word: "The" }, { word: "board" }, { word: "approved" }, { word: "the" }, { word: "ambitious" },
        { word: "five-year" }, { word: "expansion" }, { word: "strategy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈpruːvd/", translation: "批准",
          subComponents: [{ startIndex: 0, words: [{ word: "approved" }] }]
        },
        {
          start: 3, end: 7, label: "宾语", phonetic: "/ðə/ /æmˈbɪʃəs/ /faɪv jɪər/ /ɪkˈspænʃən/ /ˈstrætədʒi/", translation: "雄心勃勃的五年扩张战略",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "ambitious" }, { word: "five-year" }, { word: "expansion" }, { word: "strategy", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，approve 为及物动词，strategy 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s213",
      chinese: "分析师预测新兴市场股票将逐渐复苏",
      english_full: "Analysts predicted a gradual recovery in emerging market equities.",
      words: [
        { word: "Analysts" }, { word: "predicted" }, { word: "a" }, { word: "gradual" }, { word: "recovery" },
        { word: "in" }, { word: "emerging" }, { word: "market" }, { word: "equities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈænəlɪsts/", translation: "分析师",
          subComponents: [{ startIndex: 0, words: [{ word: "Analysts" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/prɪˈdɪktɪd/", translation: "预测",
          subComponents: [{ startIndex: 0, words: [{ word: "predicted" }] }]
        },
        {
          start: 2, end: 8, label: "宾语", phonetic: "/ə/ /ˈgrædʒuəl/ /rɪˈkʌvəri/ /ɪn/ /ɪˈmɜːrdʒɪŋ/ /ˈmɑːrkɪt/ /ˈɛkwɪtiz/", translation: "新兴市场股票的逐渐复苏",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "gradual" }, { word: "recovery" }] },
            { startIndex: 3, words: [{ word: "in" }, { word: "emerging" }, { word: "market" }, { word: "equities", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，predict 为及物动词，recovery 作宾语核心。" }
      ]
    },
    {
      id: "q_basic_s214",
      chinese: "这家初创公司从知名风险投资家处获得了大量种子资金",
      english_full: "The startup secured substantial seed funding from prominent venture capitalists.",
      words: [
        { word: "The" }, { word: "startup" }, { word: "secured" }, { word: "substantial" }, { word: "seed" },
        { word: "funding" }, { word: "from" }, { word: "prominent" }, { word: "venture" }, { word: "capitalists", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌp/", translation: "这家初创公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "startup" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/sɪˈkjʊrd/", translation: "获得",
          subComponents: [{ startIndex: 0, words: [{ word: "secured" }] }]
        },
        {
          start: 3, end: 9, label: "宾语", phonetic: "/səbˈstænʃəl/ /siːd/ /ˈfʌndɪŋ/ /frɒm/ /ˈprɒmɪnənt/ /ˈvɛntʃər/ /kəˈpɪtəlɪsts/", translation: "来自知名风险投资家的大量种子资金",
          subComponents: [
            { startIndex: 0, words: [{ word: "substantial" }, { word: "seed" }, { word: "funding" }] },
            { startIndex: 3, words: [{ word: "from" }, { word: "prominent" }, { word: "venture" }, { word: "capitalists", punctuation: "." }], label: "来源状语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，secure 为及物动词，seed funding 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s215",
      chinese: "研究人员验证了这一新型治疗方案的疗效",
      english_full: "Researchers demonstrated the efficacy of the novel treatment protocol.",
      words: [
        { word: "Researchers" }, { word: "demonstrated" }, { word: "the" }, { word: "efficacy" }, { word: "of" },
        { word: "the" }, { word: "novel" }, { word: "treatment" }, { word: "protocol", punctuation: "." }
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
          start: 2, end: 8, label: "宾语", phonetic: "/ðə/ /ˈɛfɪkəsi/ /ɒv/ /ðə/ /ˈnɒvəl/ /ˈtriːtmənt/ /ˈproʊtəkɒl/", translation: "这一新型治疗方案的疗效",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "efficacy" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "the" }, { word: "novel" }, { word: "treatment" }, { word: "protocol", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，demonstrate 为及物动词，efficacy 作宾语核心。" }
      ]
    },
    {
      id: "q_basic_s216",
      chinese: "代表团达成了一项具有里程碑意义的双边贸易协定",
      english_full: "The delegation negotiated a landmark bilateral trade agreement.",
      words: [
        { word: "The" }, { word: "delegation" }, { word: "negotiated" }, { word: "a" }, { word: "landmark" },
        { word: "bilateral" }, { word: "trade" }, { word: "agreement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌdɛlɪˈɡeɪʃən/", translation: "代表团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "delegation" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/nɪˈɡoʊʃieɪtɪd/", translation: "达成",
          subComponents: [{ startIndex: 0, words: [{ word: "negotiated" }] }]
        },
        {
          start: 3, end: 7, label: "宾语", phonetic: "/ə/ /ˈlændmɑːrk/ /baɪˈlætərəl/ /treɪd/ /əˈɡriːmənt/", translation: "一项具有里程碑意义的双边贸易协定",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "landmark" }, { word: "bilateral" }, { word: "trade" }, { word: "agreement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，negotiate 在此作及物动词，agreement 作直接宾语。" }
      ]
    },
    {
      id: "q_basic_s217",
      chinese: "监管机构揭露了制药行业内普遍存在的渎职行为",
      english_full: "The watchdog uncovered widespread malpractice within the pharmaceutical industry.",
      words: [
        { word: "The" }, { word: "watchdog" }, { word: "uncovered" }, { word: "widespread" }, { word: "malpractice" },
        { word: "within" }, { word: "the" }, { word: "pharmaceutical" }, { word: "industry", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈwɒtʃdɒg/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "watchdog" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ʌnˈkʌvərd/", translation: "揭露",
          subComponents: [{ startIndex: 0, words: [{ word: "uncovered" }] }]
        },
        {
          start: 3, end: 8, label: "宾语", phonetic: "/ˈwaɪdspred/ /ˌmælˈpræktɪs/ /wɪˈðɪn/ /ðə/ /ˌfɑːrməˈsuːtɪkəl/ /ˈɪndəstri/", translation: "制药行业内普遍存在的渎职行为",
          subComponents: [
            { startIndex: 0, words: [{ word: "widespread" }, { word: "malpractice" }] },
            { startIndex: 2, words: [{ word: "within" }, { word: "the" }, { word: "pharmaceutical" }, { word: "industry", punctuation: "." }], label: "范围状语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVO 主谓宾)", text: "主谓宾结构 (S + V + O)，uncover 为及物动词，malpractice 作宾语核心。" }
      ]
    },
    {
      id: "q_basic_s218",
      chinese: "大学向杰出校友提供了研究设施的专属访问权限",
      english_full: "The university offered distinguished alumni exclusive access to research facilities.",
      words: [
        { word: "The" }, { word: "university" }, { word: "offered" }, { word: "distinguished" }, { word: "alumni" },
        { word: "exclusive" }, { word: "access" }, { word: "to" }, { word: "research" }, { word: "facilities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌjuːnɪˈvɜːrsɪti/", translation: "大学",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "university" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒfərd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offered" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/dɪsˈtɪŋgwɪʃt/ /əˈlʌmnaɪ/", translation: "杰出校友",
          subComponents: [{ startIndex: 0, words: [{ word: "distinguished" }, { word: "alumni" }] }]
        },
        {
          start: 5, end: 9, label: "直接宾语", phonetic: "/ɪkˈskluːsɪv/ /ˈæksɛs/ /tuː/ /rɪˈsɜːrtʃ/ /fəˈsɪlɪtiz/", translation: "研究设施的专属访问权限",
          subComponents: [
            { startIndex: 0, words: [{ word: "exclusive" }, { word: "access" }] },
            { startIndex: 2, words: [{ word: "to" }, { word: "research" }, { word: "facilities", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，offer sb sth 中 alumni 为间接宾语，access 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s219",
      chinese: "首席执行官向股东提交了一份详细的季度业绩报告",
      english_full: "The CEO presented the shareholders a detailed quarterly performance report.",
      words: [
        { word: "The" }, { word: "CEO" }, { word: "presented" }, { word: "the" }, { word: "shareholders" },
        { word: "a" }, { word: "detailed" }, { word: "quarterly" }, { word: "performance" }, { word: "report", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌsiː iː ˈoʊ/", translation: "首席执行官",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "CEO" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prɪˈzɛntɪd/", translation: "提交",
          subComponents: [{ startIndex: 0, words: [{ word: "presented" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/ðə/ /ˈʃɛərˌhoʊldərz/", translation: "股东",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "shareholders" }] }]
        },
        {
          start: 5, end: 9, label: "直接宾语", phonetic: "/ə/ /ˈdiːteɪld/ /ˈkwɔːrtərli/ /pərˈfɔːrməns/ /rɪˈpɔːrt/", translation: "一份详细的季度业绩报告",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "detailed" }, { word: "quarterly" }, { word: "performance" }, { word: "report", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，present sb sth 中 shareholders 为间接宾语，report 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s220",
      chinese: "大使馆向难民授予了临时人道主义保护身份",
      english_full: "The embassy granted the refugees temporary humanitarian protection status.",
      words: [
        { word: "The" }, { word: "embassy" }, { word: "granted" }, { word: "the" }, { word: "refugees" },
        { word: "temporary" }, { word: "humanitarian" }, { word: "protection" }, { word: "status", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɛmbəsi/", translation: "大使馆",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "embassy" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈgræntɪd/", translation: "授予",
          subComponents: [{ startIndex: 0, words: [{ word: "granted" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/ðə/ /ˌrɛfjuˈdʒiːz/", translation: "难民",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "refugees" }] }]
        },
        {
          start: 5, end: 8, label: "直接宾语", phonetic: "/ˈtɛmpərəri/ /hjuːˌmænɪˈtɛriən/ /prəˈtɛkʃən/ /ˈsteɪtəs/", translation: "临时人道主义保护身份",
          subComponents: [{ startIndex: 0, words: [{ word: "temporary" }, { word: "humanitarian" }, { word: "protection" }, { word: "status", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，grant sb sth 中 refugees 为间接宾语，status 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s221",
      chinese: "导师给实习生分配了一个具有挑战性的跨职能项目",
      english_full: "The mentor assigned the intern a challenging cross-functional project.",
      words: [
        { word: "The" }, { word: "mentor" }, { word: "assigned" }, { word: "the" }, { word: "intern" },
        { word: "a" }, { word: "challenging" }, { word: "cross-functional" }, { word: "project", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmɛntɔːr/", translation: "导师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "mentor" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈsaɪnd/", translation: "分配",
          subComponents: [{ startIndex: 0, words: [{ word: "assigned" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/ðə/ /ˈɪntɜːrn/", translation: "实习生",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "intern" }] }]
        },
        {
          start: 5, end: 8, label: "直接宾语", phonetic: "/ə/ /ˈtʃælɪndʒɪŋ/ /krɒs ˈfʌŋkʃənəl/ /ˈprɒdʒɛkt/", translation: "一个具有挑战性的跨职能项目",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "challenging" }, { word: "cross-functional" }, { word: "project", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，assign sb sth 中 intern 为间接宾语，project 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s222",
      chinese: "慈善机构为流离失所的家庭提供了必要的紧急救援物资",
      english_full: "The charity provided displaced families essential emergency relief supplies.",
      words: [
        { word: "The" }, { word: "charity" }, { word: "provided" }, { word: "displaced" }, { word: "families" },
        { word: "essential" }, { word: "emergency" }, { word: "relief" }, { word: "supplies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈtʃærɪti/", translation: "慈善机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "charity" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prəˈvaɪdɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provided" }] }]
        },
        {
          start: 3, end: 4, label: "间接宾语", phonetic: "/dɪsˈpleɪst/ /ˈfæmɪliz/", translation: "流离失所的家庭",
          subComponents: [{ startIndex: 0, words: [{ word: "displaced" }, { word: "families" }] }]
        },
        {
          start: 5, end: 8, label: "直接宾语", phonetic: "/ɪˈsɛnʃəl/ /ɪˈmɜːrdʒənsi/ /rɪˈliːf/ /səˈplaɪz/", translation: "必要的紧急救援物资",
          subComponents: [{ startIndex: 0, words: [{ word: "essential" }, { word: "emergency" }, { word: "relief" }, { word: "supplies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，provide sb sth 中 families 为间接宾语，supplies 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s223",
      chinese: "评审团向这位年轻创新者颁发了一笔可观的研究资助",
      english_full: "The panel awarded the young innovator a substantial research grant.",
      words: [
        { word: "The" }, { word: "panel" }, { word: "awarded" }, { word: "the" }, { word: "young" },
        { word: "innovator" }, { word: "a" }, { word: "substantial" }, { word: "research" }, { word: "grant", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpænəl/", translation: "评审团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "panel" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈwɔːrdɪd/", translation: "颁发",
          subComponents: [{ startIndex: 0, words: [{ word: "awarded" }] }]
        },
        {
          start: 3, end: 5, label: "间接宾语", phonetic: "/ðə/ /jʌŋ/ /ˈɪnəveɪtər/", translation: "这位年轻创新者",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "young" }, { word: "innovator" }] }]
        },
        {
          start: 6, end: 9, label: "直接宾语", phonetic: "/ə/ /səbˈstænʃəl/ /rɪˈsɜːrtʃ/ /grænt/", translation: "一笔可观的研究资助",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "substantial" }, { word: "research" }, { word: "grant", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOO 主谓双宾)", text: "主谓双宾结构 (S + V + IO + DO)，award sb sth 中 innovator 为间接宾语，grant 为直接宾语。" }
      ]
    },
    {
      id: "q_basic_s224",
      chinese: "审计发现会计实务存在根本性缺陷",
      english_full: "The audit found the accounting practices fundamentally flawed.",
      words: [
        { word: "The" }, { word: "audit" }, { word: "found" }, { word: "the" }, { word: "accounting" },
        { word: "practices" }, { word: "fundamentally" }, { word: "flawed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɔːdɪt/", translation: "审计",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "audit" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/faʊnd/", translation: "发现",
          subComponents: [{ startIndex: 0, words: [{ word: "found" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ðə/ /əˈkaʊntɪŋ/ /ˈpræktɪsɪz/", translation: "会计实务",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "accounting" }, { word: "practices" }] }]
        },
        {
          start: 6, end: 7, label: "宾语补足语", phonetic: "/ˌfʌndəˈmɛntəli/ /flɔːd/", translation: "存在根本性缺陷",
          subComponents: [{ startIndex: 0, words: [{ word: "fundamentally" }, { word: "flawed", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，find sth adj. 中 fundamentally flawed 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s225",
      chinese: "股东任命这位资深高管为首席运营官",
      english_full: "Shareholders appointed the veteran executive chief operating officer.",
      words: [
        { word: "Shareholders" }, { word: "appointed" }, { word: "the" }, { word: "veteran" }, { word: "executive" },
        { word: "chief" }, { word: "operating" }, { word: "officer", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈʃɛərˌhoʊldərz/", translation: "股东",
          subComponents: [{ startIndex: 0, words: [{ word: "Shareholders" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/əˈpɔɪntɪd/", translation: "任命",
          subComponents: [{ startIndex: 0, words: [{ word: "appointed" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /ˈvɛtərən/ /ɪgˈzɛkjʊtɪv/", translation: "这位资深高管",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "veteran" }, { word: "executive" }] }]
        },
        {
          start: 5, end: 7, label: "宾语补足语", phonetic: "/tʃiːf/ /ˈɒpəreɪtɪŋ/ /ˈɒfɪsər/", translation: "首席运营官",
          subComponents: [{ startIndex: 0, words: [{ word: "chief" }, { word: "operating" }, { word: "officer", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，appoint sb + 职位，chief operating officer 补充说明宾语身份。" }
      ]
    },
    {
      id: "q_basic_s226",
      chinese: "法院宣布该合同具有法律约束力和可执行性",
      english_full: "The court declared the contract legally binding and enforceable.",
      words: [
        { word: "The" }, { word: "court" }, { word: "declared" }, { word: "the" }, { word: "contract" },
        { word: "legally" }, { word: "binding" }, { word: "and" }, { word: "enforceable", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kɔːrt/", translation: "法院",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "court" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/dɪˈklɛərd/", translation: "宣布",
          subComponents: [{ startIndex: 0, words: [{ word: "declared" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /ˈkɒntrækt/", translation: "该合同",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "contract" }] }]
        },
        {
          start: 5, end: 8, label: "宾语补足语", phonetic: "/ˈliːgəli/ /ˈbaɪndɪŋ/ /ænd/ /ɪnˈfɔːrsəbəl/", translation: "具有法律约束力和可执行性",
          subComponents: [{ startIndex: 0, words: [{ word: "legally" }, { word: "binding" }, { word: "and" }, { word: "enforceable", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，declare sth adj. 中 legally binding and enforceable 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s227",
      chinese: "专家认为新法规对小型企业而言负担过重",
      english_full: "Experts considered the new regulation excessively burdensome for small businesses.",
      words: [
        { word: "Experts" }, { word: "considered" }, { word: "the" }, { word: "new" }, { word: "regulation" },
        { word: "excessively" }, { word: "burdensome" }, { word: "for" }, { word: "small" }, { word: "businesses", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈɛkspɜːrts/", translation: "专家",
          subComponents: [{ startIndex: 0, words: [{ word: "Experts" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/kənˈsɪdərd/", translation: "认为",
          subComponents: [{ startIndex: 0, words: [{ word: "considered" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /njuː/ /ˌrɛɡjʊˈleɪʃən/", translation: "新法规",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "new" }, { word: "regulation" }] }]
        },
        {
          start: 5, end: 6, label: "宾语补足语", phonetic: "/ɪkˈsɛsɪvli/ /ˈbɜːrdnsəm/", translation: "负担过重的",
          subComponents: [{ startIndex: 0, words: [{ word: "excessively" }, { word: "burdensome" }] }]
        },
        {
          start: 7, end: 9, label: "对象状语", phonetic: "/fɔːr/ /smɔːl/ /ˈbɪznɪsɪz/", translation: "对小型企业而言",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "small" }, { word: "businesses", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，consider sth adj. 中 excessively burdensome 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s228",
      chinese: "这一发现使先前的理论在科学上变得过时",
      english_full: "The discovery rendered the previous theory scientifically obsolete.",
      words: [
        { word: "The" }, { word: "discovery" }, { word: "rendered" }, { word: "the" }, { word: "previous" },
        { word: "theory" }, { word: "scientifically" }, { word: "obsolete", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /dɪsˈkʌvəri/", translation: "这一发现",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "discovery" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈrɛndərd/", translation: "使……变得",
          subComponents: [{ startIndex: 0, words: [{ word: "rendered" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ðə/ /ˈpriːviəs/ /ˈθɪəri/", translation: "先前的理论",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "previous" }, { word: "theory" }] }]
        },
        {
          start: 6, end: 7, label: "宾语补足语", phonetic: "/ˌsaɪənˈtɪfɪkli/ /ˈɒbsəliːt/", translation: "在科学上过时的",
          subComponents: [{ startIndex: 0, words: [{ word: "scientifically" }, { word: "obsolete", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，render sth adj. 中 scientifically obsolete 为复合宾补。" }
      ]
    },
    {
      id: "q_basic_s229",
      chinese: "委员会认为该提案在短期内具有财务可行性",
      english_full: "The committee deemed the proposal financially viable in the short term.",
      words: [
        { word: "The" }, { word: "committee" }, { word: "deemed" }, { word: "the" }, { word: "proposal" },
        { word: "financially" }, { word: "viable" }, { word: "in" }, { word: "the" }, { word: "short" }, { word: "term", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kəˈmɪti/", translation: "委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "committee" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/diːmd/", translation: "认为",
          subComponents: [{ startIndex: 0, words: [{ word: "deemed" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /prəˈpoʊzəl/", translation: "该提案",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "proposal" }] }]
        },
        {
          start: 5, end: 6, label: "宾语补足语", phonetic: "/faɪˈnænʃəli/ /ˈvaɪəbəl/", translation: "具有财务可行性的",
          subComponents: [{ startIndex: 0, words: [{ word: "financially" }, { word: "viable" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ʃɔːrt/ /tɜːrm/", translation: "在短期内",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "short" }, { word: "term", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基本句型 (SVOC 主谓宾补)", text: "主谓宾补结构 (S + V + O + C)，deem sth adj. 中 financially viable 为复合宾补，in the short term 作时间状语。" }
      ]
    }
  ]
};
