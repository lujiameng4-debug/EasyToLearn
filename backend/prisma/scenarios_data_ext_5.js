export const extensions = {
  "gov_01": [
    {
      id: "gov_s6",
      chinese: "税收系统需要彻底改革以确保财富分配的公平",
      english_full: "The taxation system requires a comprehensive overhaul to ensure equitable wealth distribution.",
      words: [
        { word: "The" }, { word: "taxation" }, { word: "system" }, { word: "requires" }, { word: "a" }, { word: "comprehensive" }, { word: "overhaul" },
        { word: "to" }, { word: "ensure" }, { word: "equitable" }, { word: "wealth" }, { word: "distribution", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /tækˈseɪʃən/ /ˈsɪstəm/", translation: "税收系统",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "taxation" }, { word: "system" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "需要",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ə/ /ˌkɒmprɪˈhɛnsɪv/ /ˈoʊvərhɔːl/", translation: "一次彻底的改革",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "comprehensive" }, { word: "overhaul" }] }]
        },
        {
          start: 7, end: 11, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˈɛkwɪtəbəl/ /wɛlθ/ /ˌdɪstrɪˈbjuːʃən/", translation: "去确保公平的财富分配",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "ensure" }] },
            { startIndex: 2, words: [{ word: "equitable" }, { word: "wealth" }, { word: "distribution" }] }
          ]
        }
      ],
      analysis: [
        { type: "政治/经济词汇", text: "overhaul (彻底改革/检修) 是 reform 的强力替换词；taxation (税收)。" },
        { type: "高级表达", text: "equitable (公平的，公正的) 替换 fair；wealth distribution (财富分配)。" }
      ]
    },
    {
      id: "gov_s7",
      chinese: "市政当局发起了改善公共卫生的广泛宣传活动",
      english_full: "The municipality launched an extensive awareness campaign to promote public hygiene.",
      words: [
        { word: "The" }, { word: "municipality" }, { word: "launched" }, { word: "an" }, { word: "extensive" }, { word: "awareness" }, { word: "campaign" },
        { word: "to" }, { word: "promote" }, { word: "public" }, { word: "hygiene", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /mjuːˌnɪsɪˈpæləti/", translation: "市政当局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "municipality" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/lɔːntʃt/", translation: "发起了",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/æn/ /ɪkˈstɛnsɪv/ /əˈwɛərnəs/ /kæmˈpeɪn/", translation: "一场广泛的意识/宣传活动",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "extensive" }, { word: "awareness" }, { word: "campaign" }] }]
        },
        {
          start: 7, end: 10, label: "目的状语", phonetic: "/tuː/ /prəˈmoʊt/ /ˈpʌblɪk/ /ˈhaɪdʒiːn/", translation: "以促进公共卫生",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "promote" }] },
            { startIndex: 2, words: [{ word: "public" }, { word: "hygiene" }] }
          ]
        }
      ],
      analysis: [
        { type: "行政词汇", text: "municipality (市政当局/自治市) 替换 city government。" },
        { type: "固定搭配", text: "launch a campaign (发起一场运动/宣传活动)；public hygiene (公共卫生)。" }
      ]
    },
    {
      id: "gov_s8",
      chinese: "社会福利计划旨在为弱势群体提供一个安全网",
      english_full: "Social welfare programs are designed to provide a safety net for vulnerable populations.",
      words: [
        { word: "Social" }, { word: "welfare" }, { word: "programs" }, { word: "are" }, { word: "designed" },
        { word: "to" }, { word: "provide" }, { word: "a" }, { word: "safety" }, { word: "net" }, { word: "for" }, { word: "vulnerable" }, { word: "populations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsoʊʃəl/ /ˈwɛlfɛər/ /ˈproʊgræmz/", translation: "社会福利计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Social" }, { word: "welfare" }, { word: "programs" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /dɪˈzaɪnd/", translation: "被设计",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "designed" }] }
          ]
        },
        {
          start: 5, end: 12, label: "目的状语", phonetic: "/tuː/ /prəˈvaɪd/ /ə/ /ˈseɪfti/ /nɛt/ /fɔːr/ /ˈvʌlnərəbəl/ /ˌpɒpjʊˈleɪʃənz/", translation: "为了给弱势群体提供安全网",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "provide" }] },
            { startIndex: 2, words: [{ word: "a" }, { word: "safety" }, { word: "net" }] },
            { startIndex: 5, words: [{ word: "for" }, { word: "vulnerable" }, { word: "populations" }], label: "对象状语" }
          ]
        }
      ],
      analysis: [
        { type: "时政专有名词", text: "social welfare (社会福利)；safety net (社会保障/安全网)。" },
        { type: "高级表达", text: "vulnerable populations (弱势群体) 是讨论政府职责时的极高频词。" }
      ]
    },
    {
      id: "gov_s9",
      chinese: "该立法因其可能侵犯公民自由而面临强烈反对",
      english_full: "The legislation faced fierce opposition due to its potential infringement on civil liberties.",
      words: [
        { word: "The" }, { word: "legislation" }, { word: "faced" }, { word: "fierce" }, { word: "opposition" },
        { word: "due" }, { word: "to" }, { word: "its" }, { word: "potential" }, { word: "infringement" }, { word: "on" }, { word: "civil" }, { word: "liberties", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌlɛdʒɪsˈleɪʃən/", translation: "该立法",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "legislation" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/feɪst/", translation: "面临了",
          subComponents: [{ startIndex: 0, words: [{ word: "faced" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/fɪərs/ /ˌɒpəˈzɪʃən/", translation: "强烈的反对",
          subComponents: [{ startIndex: 0, words: [{ word: "fierce" }, { word: "opposition" }] }]
        },
        {
          start: 5, end: 12, label: "原因状语", phonetic: "/djuː/ /tuː/ /ɪts/ /pəˈtɛnʃəl/ /ɪnˈfrɪndʒmənt/ /ɒn/ /ˈsɪvəl/ /ˈlɪbərtiz/", translation: "由于其对公民自由潜在的侵犯",
          subComponents: [
            { startIndex: 0, words: [{ word: "due" }, { word: "to" }] },
            { startIndex: 2, words: [{ word: "its" }, { word: "potential" }, { word: "infringement" }] },
            { startIndex: 5, words: [{ word: "on" }, { word: "civil" }, { word: "liberties" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "法律词汇", text: "legislation (立法，法规)；infringement (侵犯，违反)；civil liberties (公民自由)。" },
        { type: "搭配解析", text: "face fierce opposition (面临强烈的反对)。" }
      ]
    },
    {
      id: "gov_s10",
      chinese: "根除官僚机构内部的腐败是透明治理的前提条件",
      english_full: "Eradicating corruption within the bureaucracy is a prerequisite for transparent governance.",
      words: [
        { word: "Eradicating" }, { word: "corruption" }, { word: "within" }, { word: "the" }, { word: "bureaucracy" },
        { word: "is" }, { word: "a" }, { word: "prerequisite" }, { word: "for" }, { word: "transparent" }, { word: "governance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ɪˈrædɪkeɪtɪŋ/ /kəˈrʌpʃən/ /wɪˈðɪn/ /ðə/ /bjʊˈrɒkrəsi/", translation: "根除官僚机构内部的腐败",
          subComponents: [
            { startIndex: 0, words: [{ word: "Eradicating" }, { word: "corruption" }] },
            { startIndex: 2, words: [{ word: "within" }, { word: "the" }, { word: "bureaucracy" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 5, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 6, end: 10, label: "表语", phonetic: "/ə/ /priːˈrɛkwɪzɪt/ /fɔːr/ /trænsˈpærənt/ /ˈgʌvərnəns/", translation: "透明治理的前提条件",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "prerequisite" }] },
            { startIndex: 2, words: [{ word: "for" }, { word: "transparent" }, { word: "governance" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "高级替换", text: "eradicate (根除，消灭) 替换 eliminate/remove；prerequisite (先决条件，前提)。" },
        { type: "政治词汇", text: "bureaucracy (官僚主义/机构)；governance (治理/管理)。" }
      ]
    }
  ],
  "shopping_02": [
    {
      id: "shp_s6",
      chinese: "不可抗拒的买一送一优惠大大增加了全天的客流量",
      english_full: "The irresistible buy-one-get-one-free offer substantially increased foot traffic throughout the day.",
      words: [
        { word: "The" }, { word: "irresistible" }, { word: "buy-one-get-one-free" }, { word: "offer" },
        { word: "substantially" }, { word: "increased" }, { word: "foot" }, { word: "traffic" }, { word: "throughout" }, { word: "the" }, { word: "day", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ði/ /ˌɪrɪˈzɪstəbəl/ /baɪ-wʌn-gɛt-wʌn-friː/ /ˈɒfər/", translation: "不可抗拒的买一送一优惠",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "irresistible" }, { word: "buy-one-get-one-free" }, { word: "offer" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/səbˈstænʃəli/", translation: "实质上/大大地",
          subComponents: [{ startIndex: 0, words: [{ word: "substantially" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ɪnˈkriːst/", translation: "增加了",
          subComponents: [{ startIndex: 0, words: [{ word: "increased" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/fʊt/ /ˈtræfɪk/", translation: "客流量",
          subComponents: [{ startIndex: 0, words: [{ word: "foot" }, { word: "traffic" }] }]
        },
        {
          start: 8, end: 10, label: "时间状语", phonetic: "/θruːˈaʊt/ /ðə/ /deɪ/", translation: "贯穿一整天",
          subComponents: [{ startIndex: 0, words: [{ word: "throughout" }, { word: "the" }, { word: "day" }] }]
        }
      ],
      analysis: [
        { type: "商业词汇", text: "foot traffic (客流量/人流量)；offer (这里作名词，指优惠/报价)。" },
        { type: "日常表达", text: "buy-one-get-one-free 常缩写为 BOGO，意为买一送一。" }
      ]
    },
    {
      id: "shp_s7",
      chinese: "过度包装不仅增加了商品成本，也加剧了环境退化",
      english_full: "Excessive packaging not only inflates the cost of merchandise but also exacerbates environmental degradation.",
      words: [
        { word: "Excessive" }, { word: "packaging" }, { word: "not" }, { word: "only" }, { word: "inflates" }, { word: "the" }, { word: "cost" }, { word: "of" }, { word: "merchandise" },
        { word: "but" }, { word: "also" }, { word: "exacerbates" }, { word: "environmental" }, { word: "degradation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪkˈsɛsɪv/ /ˈpækɪdʒɪŋ/", translation: "过度包装",
          subComponents: [{ startIndex: 0, words: [{ word: "Excessive" }, { word: "packaging" }] }]
        },
        {
          start: 2, end: 8, label: "并列谓语/宾语1", phonetic: "/nɒt/ /ˈoʊnli/ /ɪnˈfleɪts/ /ðə/ /kɒst/ /ɒv/ /ˈmɜːrtʃənˌdaɪz/", translation: "不仅增加了商品的成本",
          subComponents: [
            { startIndex: 0, words: [{ word: "not" }, { word: "only" }] },
            { startIndex: 2, words: [{ word: "inflates" }] },
            { startIndex: 3, words: [{ word: "the" }, { word: "cost" }, { word: "of" }, { word: "merchandise" }] }
          ]
        },
        {
          start: 9, end: 13, label: "并列谓语/宾语2", phonetic: "/bʌt/ /ˈɔːlsoʊ/ /ɪgˈzæsərbeɪts/ /ɪnˌvaɪrənˈmɛntəl/ /ˌdɛgrəˈdeɪʃən/", translation: "而且加剧了环境退化",
          subComponents: [
            { startIndex: 0, words: [{ word: "but" }, { word: "also" }] },
            { startIndex: 2, words: [{ word: "exacerbates" }] },
            { startIndex: 3, words: [{ word: "environmental" }, { word: "degradation" }] }
          ]
        }
      ],
      analysis: [
        { type: "高级替换", text: "inflate (使充气，这里指抬高物价) 替换 increase；exacerbate (加剧恶化)。" },
        { type: "雅思写作词组", text: "environmental degradation (环境退化/恶化)。" }
      ]
    },
    {
      id: "shp_s8",
      chinese: "这家品牌旗舰店采用极简美学来凸显其奢侈品的特色",
      english_full: "The brand's flagship store adopts a minimalist aesthetic to accentuate its luxury products.",
      words: [
        { word: "The" }, { word: "brand's" }, { word: "flagship" }, { word: "store" }, { word: "adopts" }, { word: "a" }, { word: "minimalist" }, { word: "aesthetic" },
        { word: "to" }, { word: "accentuate" }, { word: "its" }, { word: "luxury" }, { word: "products", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /brændz/ /ˈflæɡʃɪp/ /stɔːr/", translation: "该品牌的旗舰店",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "brand's" }, { word: "flagship" }, { word: "store" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈdɒpts/", translation: "采用",
          subComponents: [{ startIndex: 0, words: [{ word: "adopts" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ə/ /ˈmɪnɪməlɪst/ /ɛsˈθɛtɪk/", translation: "一种极简主义的美学",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "minimalist" }, { word: "aesthetic" }] }]
        },
        {
          start: 8, end: 12, label: "目的状语", phonetic: "/tuː/ /ækˈsɛntʃueɪt/ /ɪts/ /ˈlʌkʃəri/ /ˈprɒdʌkts/", translation: "为了凸显它的奢侈产品",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "accentuate" }] },
            { startIndex: 2, words: [{ word: "its" }, { word: "luxury" }, { word: "products" }] }
          ]
        }
      ],
      analysis: [
        { type: "时尚/零售词汇", text: "flagship store (旗舰店)；minimalist aesthetic (极简美学)。" },
        { type: "高级动词", text: "accentuate 意为“强调，使突出”，是 highlight 或 emphasize 的绝佳替换。" }
      ]
    },
    {
      id: "shp_s9",
      chinese: "冲动消费通常是由放置在收银台旁的诱人陈列所引发的",
      english_full: "Impulsive purchases are often triggered by enticing displays positioned near the cash register.",
      words: [
        { word: "Impulsive" }, { word: "purchases" }, { word: "are" }, { word: "often" }, { word: "triggered" }, { word: "by" }, { word: "enticing" }, { word: "displays" },
        { word: "positioned" }, { word: "near" }, { word: "the" }, { word: "cash" }, { word: "register", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪmˈpʌlsɪv/ /ˈpɜːrtʃəsɪz/", translation: "冲动的购买",
          subComponents: [{ startIndex: 0, words: [{ word: "Impulsive" }, { word: "purchases" }] }]
        },
        {
          start: 2, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /ˈɒfən/ /ˈtrɪgərd/", translation: "经常被引发",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "often" }] },
            { startIndex: 2, words: [{ word: "triggered" }] }
          ]
        },
        {
          start: 5, end: 12, label: "状语", phonetic: "/baɪ/ /ɪnˈtaɪsɪŋ/ /dɪˈspleɪz/ /pəˈzɪʃənd/ /nɪər/ /ðə/ /kæʃ/ /ˈrɛdʒɪstər/", translation: "被放置在收银台附近的诱人陈列(所引发)",
          subComponents: [
            { startIndex: 0, words: [{ word: "by" }] },
            { startIndex: 1, words: [{ word: "enticing" }, { word: "displays" }], label: "介词宾语" },
            { startIndex: 3, words: [{ word: "positioned" }, { word: "near" }, { word: "the" }, { word: "cash" }, { word: "register" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "语法重点", text: "positioned near... 是过去分词短语作后置定语修饰 displays (被放置在...)。" },
        { type: "零售词汇", text: "cash register (收银机/台)；enticing displays (诱人的陈列)。" }
      ]
    },
    {
      id: "shp_s10",
      chinese: "具有环保意识的消费者抵制那些采用不道德劳工做法的品牌",
      english_full: "Eco-conscious consumers boycott brands that engage in unethical labor practices.",
      words: [
        { word: "Eco-conscious" }, { word: "consumers" }, { word: "boycott" }, { word: "brands" }, { word: "that" }, { word: "engage" }, { word: "in" },
        { word: "unethical" }, { word: "labor" }, { word: "practices", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈiːkoʊ-ˈkɒnʃəs/ /kənˈsjuːmərz/", translation: "有环保意识的消费者",
          subComponents: [{ startIndex: 0, words: [{ word: "Eco-conscious" }, { word: "consumers" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈbɔɪkɒt/", translation: "联合抵制",
          subComponents: [{ startIndex: 0, words: [{ word: "boycott" }] }]
        },
        {
          start: 3, end: 9, label: "宾语", phonetic: "/brændz/ /ðæt/ /ɪnˈgeɪdʒ/ /ɪn/ /ʌnˈɛθɪkəl/ /ˈleɪbər/ /ˈpræktɪsɪz/", translation: "参与不道德劳工做法的品牌",
          subComponents: [
            { startIndex: 0, words: [{ word: "brands" }] },
            { startIndex: 1, words: [{ word: "that" }, { word: "engage" }, { word: "in" }, { word: "unethical" }, { word: "labor" }, { word: "practices" }], label: "定语从句" }
          ]
        }
      ],
      analysis: [
        { type: "高级动词", text: "boycott 意为“(联合)抵制，拒绝购买”；engage in... 意为“参与，从事”。" },
        { type: "社会热点词汇", text: "unethical labor practices (不道德的劳工操作，如血汗工厂)。" }
      ]
    }
  ]
};
