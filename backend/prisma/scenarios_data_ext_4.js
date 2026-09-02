export const extensions = {
  "sports_01": [
    {
      id: "sport_s3",
      chinese: "举办国际体育赛事可以显著促进主办城市的经济发展",
      english_full: "Hosting international sporting events can significantly boost the economy of the host city.",
      words: [
        { word: "Hosting" }, { word: "international" }, { word: "sporting" }, { word: "events" },
        { word: "can" }, { word: "significantly" }, { word: "boost" }, { word: "the" }, { word: "economy" }, { word: "of" }, { word: "the" }, { word: "host" }, { word: "city", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈhoʊstɪŋ/ /ˌɪntərˈnæʃənəl/ /ˈspɔːrtɪŋ/ /ɪˈvɛnts/", translation: "举办国际体育赛事",
          subComponents: [{ startIndex: 0, words: [{ word: "Hosting" }, { word: "international" }, { word: "sporting" }, { word: "events" }] }]
        },
        {
          start: 4, end: 6, label: "谓语", phonetic: "/kæn/ /sɪgˈnɪfɪkəntli/ /buːst/", translation: "可以显著促进",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "significantly" }] },
            { startIndex: 2, words: [{ word: "boost" }] }
          ]
        },
        {
          start: 7, end: 12, label: "宾语", phonetic: "/ðə/ /ɪˈkɒnəmi/ /ɒv/ /ðə/ /hoʊst/ /ˈsɪti/", translation: "主办城市的经济",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "economy" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "the" }, { word: "host" }, { word: "city" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "雅思写作词汇", text: "host city (主办城市)；boost the economy (促进经济)。" },
        { type: "语法结构", text: "动名词短语 Hosting... 作主语。" }
      ]
    },
    {
      id: "sport_s4",
      chinese: "极限运动越来越受欢迎，吸引了寻求肾上腺素飙升的爱好者",
      english_full: "Extreme sports are gaining popularity, attracting enthusiasts seeking an adrenaline rush.",
      words: [
        { word: "Extreme" }, { word: "sports" }, { word: "are" }, { word: "gaining" }, { word: "popularity", punctuation: "," },
        { word: "attracting" }, { word: "enthusiasts" }, { word: "seeking" }, { word: "an" }, { word: "adrenaline" }, { word: "rush", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪkˈstriːm/ /spɔːrts/", translation: "极限运动",
          subComponents: [{ startIndex: 0, words: [{ word: "Extreme" }, { word: "sports" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(现进)", phonetic: "/ɑːr/ /ˈgeɪnɪŋ/", translation: "正在获得",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "gaining" }] }
          ]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˌpɒpjʊˈlærɪti/", translation: "受欢迎度",
          subComponents: [{ startIndex: 0, words: [{ word: "popularity" }] }]
        },
        {
          start: 5, end: 10, label: "伴随状语", phonetic: "/əˈtræktɪŋ/ /ɪnˈθuːziæsts/ /ˈsiːkɪŋ/ /æn/ /əˈdrɛnəlɪn/ /rʌʃ/", translation: "吸引着寻求肾上腺素飙升的爱好者",
          subComponents: [
            { startIndex: 0, words: [{ word: "attracting" }, { word: "enthusiasts" }] },
            { startIndex: 2, words: [{ word: "seeking" }, { word: "an" }, { word: "adrenaline" }, { word: "rush" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "话题核心词", text: "extreme sports (极限运动)；adrenaline rush (肾上腺素飙升，极度兴奋)。" },
        { type: "语法重点", text: "attracting... 是现在分词短语作伴随状语；seeking... 则是修饰 enthusiasts 的后置定语。" }
      ]
    },
    {
      id: "sport_s5",
      chinese: "运动员必须遵守严格的反兴奋剂规定以维持比赛的公平性",
      english_full: "Athletes must adhere to strict anti-doping regulations to maintain the integrity of the competition.",
      words: [
        { word: "Athletes" }, { word: "must" }, { word: "adhere" }, { word: "to" }, { word: "strict" }, { word: "anti-doping" }, { word: "regulations" },
        { word: "to" }, { word: "maintain" }, { word: "the" }, { word: "integrity" }, { word: "of" }, { word: "the" }, { word: "competition", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈæθliːts/", translation: "运动员",
          subComponents: [{ startIndex: 0, words: [{ word: "Athletes" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/mʌst/ /ədˈhɪər/", translation: "必须遵守",
          subComponents: [
            { startIndex: 0, words: [{ word: "must" }] },
            { startIndex: 1, words: [{ word: "adhere" }] }
          ]
        },
        {
          start: 3, end: 6, label: "介词宾语", phonetic: "/tuː/ /strɪkt/ /ˈænti/-/ˈdoʊpɪŋ/ /ˌrɛgjʊˈleɪʃənz/", translation: "严格的反兴奋剂规定",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "strict" }, { word: "anti-doping" }, { word: "regulations" }] }]
        },
        {
          start: 7, end: 13, label: "目的状语", phonetic: "/tuː/ /meɪnˈteɪn/ /ði/ /ɪnˈtɛgrɪti/ /ɒv/ /ðə/ /ˌkɒmpɪˈtɪʃən/", translation: "为了维持比赛的公平/完整性",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "maintain" }] },
            { startIndex: 2, words: [{ word: "the" }, { word: "integrity" }, { word: "of" }, { word: "the" }, { word: "competition" }] }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "adhere to (遵守，坚持)，等同于 stick to 或 abide by。" },
        { type: "高级名词", text: "anti-doping (反兴奋剂)；integrity 这里引申为比赛的“公平性，纯洁性”。" }
      ]
    },
    {
      id: "sport_s6",
      chinese: "过度训练不仅会导致身体疲惫，还会造成心理倦怠",
      english_full: "Overtraining can lead to not only physical exhaustion but also psychological burnout.",
      words: [
        { word: "Overtraining" }, { word: "can" }, { word: "lead" }, { word: "to" }, { word: "not" }, { word: "only" }, { word: "physical" }, { word: "exhaustion" },
        { word: "but" }, { word: "also" }, { word: "psychological" }, { word: "burnout", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˌoʊvərˈtreɪnɪŋ/", translation: "过度训练",
          subComponents: [{ startIndex: 0, words: [{ word: "Overtraining" }] }]
        },
        {
          start: 1, end: 3, label: "谓语", phonetic: "/kæn/ /liːd/ /tuː/", translation: "会导致",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "lead" }, { word: "to" }] }
          ]
        },
        {
          start: 4, end: 11, label: "并列宾语", phonetic: "/nɒt/ /ˈoʊnli/ /ˈfɪzɪkəl/ /ɪgˈzɔːstʃən/ /bʌt/ /ˈɔːlsoʊ/ /ˌsaɪkəˈlɒdʒɪkəl/ /ˈbɜːrnaʊt/", translation: "不仅身体疲惫而且心理倦怠",
          subComponents: [
            { startIndex: 0, words: [{ word: "not" }, { word: "only" }], label: "连词" },
            { startIndex: 2, words: [{ word: "physical" }, { word: "exhaustion" }], label: "宾语1" },
            { startIndex: 4, words: [{ word: "but" }, { word: "also" }], label: "连词" },
            { startIndex: 6, words: [{ word: "psychological" }, { word: "burnout" }], label: "宾语2" }
          ]
        }
      ],
      analysis: [
        { type: "健康/运动词汇", text: "exhaustion (极度疲惫)；burnout (倦怠，耗尽精力)，常指长期压力造成的心理或身体上的枯竭。" }
      ]
    },
    {
      id: "sport_s7",
      chinese: "赞助体育赛事对跨国公司来说是一种非常有效的营销策略",
      english_full: "Sponsoring sports events is a highly effective marketing strategy for multinational corporations.",
      words: [
        { word: "Sponsoring" }, { word: "sports" }, { word: "events" }, { word: "is" }, { word: "a" }, { word: "highly" }, { word: "effective" }, { word: "marketing" }, { word: "strategy" },
        { word: "for" }, { word: "multinational" }, { word: "corporations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈspɒnsərɪŋ/ /spɔːrts/ /ɪˈvɛnts/", translation: "赞助体育赛事",
          subComponents: [{ startIndex: 0, words: [{ word: "Sponsoring" }, { word: "sports" }, { word: "events" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 4, end: 8, label: "表语", phonetic: "/ə/ /ˈhaɪli/ /ɪˈfɛktɪv/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒi/", translation: "一种非常有效的营销策略",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "highly" }, { word: "effective" }, { word: "marketing" }, { word: "strategy" }] }]
        },
        {
          start: 9, end: 11, label: "对象状语", phonetic: "/fɔːr/ /ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃənz/", translation: "对于跨国公司来说",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "multinational" }, { word: "corporations" }] }]
        }
      ],
      analysis: [
        { type: "商业交叉词汇", text: "multinational corporations (跨国公司)；sponsor (赞助，这里用动名词 Sponsoring 作主语)。" }
      ]
    },
    {
      id: "sport_s8",
      chinese: "将体育融入学校课程有助于对抗久坐不动的生活方式",
      english_full: "Integrating physical education into the school curriculum helps combat a sedentary lifestyle.",
      words: [
        { word: "Integrating" }, { word: "physical" }, { word: "education" }, { word: "into" }, { word: "the" }, { word: "school" }, { word: "curriculum" },
        { word: "helps" }, { word: "combat" }, { word: "a" }, { word: "sedentary" }, { word: "lifestyle", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ˈɪntɪgreɪtɪŋ/ /ˈfɪzɪkəl/ /ˌɛdʒʊˈkeɪʃən/ /ˈɪntuː/ /ðə/ /skuːl/ /kəˈrɪkjʊləm/", translation: "将体育融入学校课程",
          subComponents: [
            { startIndex: 0, words: [{ word: "Integrating" }, { word: "physical" }, { word: "education" }] },
            { startIndex: 3, words: [{ word: "into" }, { word: "the" }, { word: "school" }, { word: "curriculum" }], label: "状语" }
          ]
        },
        {
          start: 7, end: 8, label: "谓语", phonetic: "/hɛlps/ /ˈkɒmbæt/", translation: "有助于对抗",
          subComponents: [
            { startIndex: 0, words: [{ word: "helps" }] },
            { startIndex: 1, words: [{ word: "combat" }] }
          ]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ə/ /ˈsɛdənˌtɛri/ /ˈlaɪfˌstaɪl/", translation: "久坐不动的生活方式",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "sedentary" }, { word: "lifestyle" }] }]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "integrate A into B (将A融入B)；physical education 即常说的 PE (体育课)。" },
        { type: "健康雅思词汇", text: "sedentary lifestyle (久坐不动的生活方式) 是健康类话题的必背词组。" }
      ]
    },
    {
      id: "sport_s9",
      chinese: "观看现场体育比赛能培养球迷之间的归属感和社区感",
      english_full: "Watching live sports fosters a sense of belonging and community among fans.",
      words: [
        { word: "Watching" }, { word: "live" }, { word: "sports" }, { word: "fosters" }, { word: "a" }, { word: "sense" }, { word: "of" }, { word: "belonging" },
        { word: "and" }, { word: "community" }, { word: "among" }, { word: "fans", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈwɒtʃɪŋ/ /laɪv/ /spɔːrts/", translation: "观看现场体育比赛",
          subComponents: [{ startIndex: 0, words: [{ word: "Watching" }, { word: "live" }, { word: "sports" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈfɒstərz/", translation: "培养",
          subComponents: [{ startIndex: 0, words: [{ word: "fosters" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ə/ /sɛns/ /ɒv/ /bɪˈlɒŋɪŋ/ /ænd/ /kəˈmjuːnɪti/", translation: "归属感和社区感",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "sense" }, { word: "of" }, { word: "belonging" }, { word: "and" }, { word: "community" }] }]
        },
        {
          start: 10, end: 11, label: "状语", phonetic: "/əˈmʌŋ/ /fænz/", translation: "在球迷之间",
          subComponents: [{ startIndex: 0, words: [{ word: "among" }, { word: "fans" }] }]
        }
      ],
      analysis: [
        { type: "情感表达", text: "sense of belonging (归属感)；sense of community (社区感/集体感)。" },
        { type: "一词多义", text: "live 在这里作形容词，读 /laɪv/，意为“现场直播的”。" }
      ]
    },
    {
      id: "sport_s10",
      chinese: "教练强调纪律和坚持不懈是取得卓越运动成就的关键",
      english_full: "The coach emphasized that discipline and perseverance are the keys to achieving athletic excellence.",
      words: [
        { word: "The" }, { word: "coach" }, { word: "emphasized" }, { word: "that" }, { word: "discipline" }, { word: "and" }, { word: "perseverance" },
        { word: "are" }, { word: "the" }, { word: "keys" }, { word: "to" }, { word: "achieving" }, { word: "athletic" }, { word: "excellence", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /koʊtʃ/", translation: "教练",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "coach" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɛmfəsaɪzd/", translation: "强调",
          subComponents: [{ startIndex: 0, words: [{ word: "emphasized" }] }]
        },
        {
          start: 3, end: 13, label: "宾语从句", phonetic: "/ðæt/ /ˈdɪsɪplɪn/ /ænd/ /ˌpɜːrsɪˈvɪərəns/ /ɑːr/ /ðə/ /kiːz/ /tuː/ /əˈtʃiːvɪŋ/ /æθˈlɛtɪk/ /ˈɛksələns/", translation: "纪律和坚持不懈是取得卓越运动成就的关键",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "discipline" }, { word: "and" }, { word: "perseverance" }], label: "(从)主" },
            { startIndex: 4, words: [{ word: "are" }], label: "(从)谓" },
            { startIndex: 5, words: [{ word: "the" }, { word: "keys" }, { word: "to" }, { word: "achieving" }, { word: "athletic" }, { word: "excellence" }], label: "(从)表" }
          ]
        }
      ],
      analysis: [
        { type: "高级名词", text: "perseverance (坚持不懈，毅力)；athletic excellence (卓越的运动成就)。" },
        { type: "语法重点", text: "key to doing sth 结构中 to 是介词，因此后面接动名词 achieving。" }
      ]
    }
  ],
  "dessert_01": [
    {
      id: "des_s6",
      chinese: "刚出炉的牛角包的香气弥漫在整条街道，诱惑着路人",
      english_full: "The aroma of freshly baked croissants permeates the street, enticing passersby.",
      words: [
        { word: "The" }, { word: "aroma" }, { word: "of" }, { word: "freshly" }, { word: "baked" }, { word: "croissants" },
        { word: "permeates" }, { word: "the" }, { word: "street", punctuation: "," }, { word: "enticing" }, { word: "passersby", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ði/ /əˈroʊmə/ /ɒv/ /ˈfrɛʃli/ /beɪkt/ /krwɑːˈsɑːnts/", translation: "刚出炉的牛角包的香气",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "aroma" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "freshly" }, { word: "baked" }, { word: "croissants" }], label: "后置定语" }
          ]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/ˈpɜːrmieɪts/", translation: "弥漫，渗透",
          subComponents: [{ startIndex: 0, words: [{ word: "permeates" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ðə/ /striːt/", translation: "整条街道",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "street" }] }]
        },
        {
          start: 9, end: 10, label: "伴随状语", phonetic: "/ɪnˈtaɪsɪŋ/ /ˈpæsərzˌbaɪ/", translation: "诱惑着路人",
          subComponents: [{ startIndex: 0, words: [{ word: "enticing" }, { word: "passersby" }] }]
        }
      ],
      analysis: [
        { type: "感官词汇", text: "aroma (芳香)；permeate (弥漫，充满)；entice (诱惑，引诱)。" },
        { type: "语法重点", text: "enticing... 是现在分词短语作伴随状语，表示自然产生的结果。" }
      ]
    },
    {
      id: "des_s7",
      chinese: "这家法式甜品店以其精致的马卡龙和精美的包装而自豪",
      english_full: "This French patisserie prides itself on exquisite macarons and elegant packaging.",
      words: [
        { word: "This" }, { word: "French" }, { word: "patisserie" }, { word: "prides" }, { word: "itself" }, { word: "on" },
        { word: "exquisite" }, { word: "macarons" }, { word: "and" }, { word: "elegant" }, { word: "packaging", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /frɛntʃ/ /pəˈtɪsəri/", translation: "这家法式甜品店",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "French" }, { word: "patisserie" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/praɪdz/", translation: "自豪",
          subComponents: [{ startIndex: 0, words: [{ word: "prides" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ɪtˈsɛlf/", translation: "它自己",
          subComponents: [{ startIndex: 0, words: [{ word: "itself" }] }]
        },
        {
          start: 5, end: 10, label: "状语", phonetic: "/ɒn/ /ɪkˈskwɪzɪt/ /ˌmækəˈroʊnz/ /ænd/ /ˈɛlɪgənt/ /ˈpækɪdʒɪŋ/", translation: "因精致的马卡龙和精美的包装",
          subComponents: [
            { startIndex: 0, words: [{ word: "on" }] },
            { startIndex: 1, words: [{ word: "exquisite" }, { word: "macarons" }, { word: "and" }, { word: "elegant" }, { word: "packaging" }], label: "介词宾语" }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "pride oneself on... 意为“以...为豪”，是非常地道的高频考点句型。" },
        { type: "专业名词", text: "patisserie 指法式糕点店；exquisite (精致的，精美的)。" }
      ]
    },
    {
      id: "des_s8",
      chinese: "喝下午茶提供了一个完美的借口去沉迷于颓废的巧克力松露",
      english_full: "Having afternoon tea provides a perfect excuse to indulge in decadent chocolate truffles.",
      words: [
        { word: "Having" }, { word: "afternoon" }, { word: "tea" }, { word: "provides" }, { word: "a" }, { word: "perfect" }, { word: "excuse" },
        { word: "to" }, { word: "indulge" }, { word: "in" }, { word: "decadent" }, { word: "chocolate" }, { word: "truffles", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈhævɪŋ/ /ˌæftərˈnuːn/ /tiː/", translation: "喝下午茶",
          subComponents: [{ startIndex: 0, words: [{ word: "Having" }, { word: "afternoon" }, { word: "tea" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ə/ /ˈpɜːrfɪkt/ /ɪkˈskjuːs/", translation: "一个完美的借口",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "perfect" }, { word: "excuse" }] }]
        },
        {
          start: 7, end: 12, label: "后置定语", phonetic: "/tuː/ /ɪnˈdʌldʒ/ /ɪn/ /ˈdɛkədənt/ /ˈtʃɒkəlɪt/ /ˈtrʌfəlz/", translation: "去沉迷于颓废的巧克力松露",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "indulge" }, { word: "in" }] },
            { startIndex: 3, words: [{ word: "decadent" }, { word: "chocolate" }, { word: "truffles" }] }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "indulge in... (沉溺于，尽情享受...)。" },
        { type: "高级词汇", text: "decadent (颓废的)，在美食评论中常用来形容甜点极度奢华、美味得令人有罪恶感。" }
      ]
    },
    {
      id: "des_s9",
      chinese: "我更喜欢将我的一杯浓缩咖啡与一块酥脆的奶油水果挞搭配在一起",
      english_full: "I prefer to pair my espresso shot with a flaky and creamy fruit tart.",
      words: [
        { word: "I" }, { word: "prefer" }, { word: "to" }, { word: "pair" }, { word: "my" }, { word: "espresso" }, { word: "shot" },
        { word: "with" }, { word: "a" }, { word: "flaky" }, { word: "and" }, { word: "creamy" }, { word: "fruit" }, { word: "tart", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我",
          subComponents: [{ startIndex: 0, words: [{ word: "I" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/prɪˈfɜːr/", translation: "更喜欢",
          subComponents: [{ startIndex: 0, words: [{ word: "prefer" }] }]
        },
        {
          start: 2, end: 13, label: "宾语(不定式)", phonetic: "/tuː/ /pɛər/ /maɪ/ /ɛˈsprɛsoʊ/ /ʃɒt/ /wɪð/ /ə/ /ˈfleɪki/ /ænd/ /ˈkriːmi/ /fruːt/ /tɑːrt/", translation: "将我的一杯浓缩咖啡与酥脆的奶油水果挞搭配",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "pair" }] },
            { startIndex: 2, words: [{ word: "my" }, { word: "espresso" }, { word: "shot" }] },
            { startIndex: 5, words: [{ word: "with" }, { word: "a" }, { word: "flaky" }, { word: "and" }, { word: "creamy" }, { word: "fruit" }, { word: "tart" }], label: "状语" }
          ]
        }
      ],
      analysis: [
        { type: "搭配结构", text: "pair A with B (将A和B搭配在一起)，常用于描述食物和饮料的搭配。" },
        { type: "口感词汇", text: "flaky (酥脆的，易碎的)；creamy (奶油般的，绵密的)。" }
      ]
    },
    {
      id: "des_s10",
      chinese: "为了迎合无麸质饮食者，他们用杏仁粉替代了传统的小麦粉",
      english_full: "To accommodate gluten-free diets, they substituted almond flour for traditional wheat flour.",
      words: [
        { word: "To" }, { word: "accommodate" }, { word: "gluten-free" }, { word: "diets", punctuation: "," },
        { word: "they" }, { word: "substituted" }, { word: "almond" }, { word: "flour" }, { word: "for" }, { word: "traditional" }, { word: "wheat" }, { word: "flour", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "目的状语", phonetic: "/tuː/ /əˈkɒmədeɪt/ /ˈgluːtən/-/friː/ /ˈdaɪəts/", translation: "为了迎合无麸质饮食",
          subComponents: [
            { startIndex: 0, words: [{ word: "To" }, { word: "accommodate" }] },
            { startIndex: 2, words: [{ word: "gluten-free" }, { word: "diets" }] }
          ]
        },
        {
          start: 4, end: 4, label: "主语", phonetic: "/ðeɪ/", translation: "他们",
          subComponents: [{ startIndex: 0, words: [{ word: "they" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈsʌbstɪtuːtɪd/", translation: "替代",
          subComponents: [{ startIndex: 0, words: [{ word: "substituted" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈɑːmənd/ /ˈflaʊər/", translation: "杏仁粉",
          subComponents: [{ startIndex: 0, words: [{ word: "almond" }, { word: "flour" }] }]
        },
        {
          start: 8, end: 11, label: "状语", phonetic: "/fɔːr/ /trəˈdɪʃənəl/ /wiːt/ /ˈflaʊər/", translation: "替换传统的小麦粉",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "traditional" }, { word: "wheat" }, { word: "flour" }] }]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "substitute A for B 意为“用A代替B”。" },
        { type: "饮食词汇", text: "gluten-free (无麸质的)；accommodate 这里指“迎合/照顾...的需求”。" }
      ]
    }
  ],
  "sports_02": [
    {
      id: "spr_s6",
      chinese: "在经历了一连串的惨败后，这支球队正在经历彻底的重建",
      english_full: "Following a string of devastating defeats, the team is undergoing a thorough rebuilding process.",
      words: [
        { word: "Following" }, { word: "a" }, { word: "string" }, { word: "of" }, { word: "devastating" }, { word: "defeats", punctuation: "," },
        { word: "the" }, { word: "team" }, { word: "is" }, { word: "undergoing" }, { word: "a" }, { word: "thorough" }, { word: "rebuilding" }, { word: "process", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/ˈfɒloʊɪŋ/ /ə/ /strɪŋ/ /ɒv/ /ˈdɛvəsteɪtɪŋ/ /dɪˈfiːts/", translation: "在经历了一连串的惨败之后",
          subComponents: [
            { startIndex: 0, words: [{ word: "Following" }] },
            { startIndex: 1, words: [{ word: "a" }, { word: "string" }, { word: "of" }, { word: "devastating" }, { word: "defeats" }], label: "介词宾语" }
          ]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ðə/ /tiːm/", translation: "这支球队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "team" }] }]
        },
        {
          start: 8, end: 9, label: "谓语(现进)", phonetic: "/ɪz/ /ˌʌndərˈgoʊɪŋ/", translation: "正在经历",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }] },
            { startIndex: 1, words: [{ word: "undergoing" }] }
          ]
        },
        {
          start: 10, end: 13, label: "宾语", phonetic: "/ə/ /ˈθɜːroʊ/ /riːˈbɪldɪŋ/ /ˈprɒsɛs/", translation: "彻底的重建过程",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "thorough" }, { word: "rebuilding" }, { word: "process" }] }]
        }
      ],
      analysis: [
        { type: "竞技词汇", text: "devastating defeats (惨败)；undergo (经历，经受)；rebuilding process (重建过程)。" },
        { type: "搭配替换", text: "a string of... (一连串的) 是 a series of 的高级替换。" }
      ]
    },
    {
      id: "spr_s7",
      chinese: "这位马拉松运动员将她的胜利归功于严格的饮食和不懈的训练",
      english_full: "The marathon runner attributes her victory to a rigorous diet and relentless training.",
      words: [
        { word: "The" }, { word: "marathon" }, { word: "runner" }, { word: "attributes" }, { word: "her" }, { word: "victory" },
        { word: "to" }, { word: "a" }, { word: "rigorous" }, { word: "diet" }, { word: "and" }, { word: "relentless" }, { word: "training", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmærəθɒn/ /ˈrʌnər/", translation: "这位马拉松运动员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "marathon" }, { word: "runner" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈtrɪbjuːts/", translation: "归功于",
          subComponents: [{ startIndex: 0, words: [{ word: "attributes" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/hɜːr/ /ˈvɪktəri/", translation: "她的胜利",
          subComponents: [{ startIndex: 0, words: [{ word: "her" }, { word: "victory" }] }]
        },
        {
          start: 6, end: 12, label: "状语", phonetic: "/tuː/ /ə/ /ˈrɪgərəs/ /ˈdaɪət/ /ænd/ /rɪˈlɛntləs/ /ˈtreɪnɪŋ/", translation: "归因于严格的饮食和不懈的训练",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }] },
            { startIndex: 1, words: [{ word: "a" }, { word: "rigorous" }, { word: "diet" }] },
            { startIndex: 4, words: [{ word: "and" }] },
            { startIndex: 5, words: [{ word: "relentless" }, { word: "training" }] }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "attribute A to B (把A归功于B / 把A归因于B)。" },
        { type: "高阶形容词", text: "rigorous (严格的)；relentless (不懈的，持续不断的)。" }
      ]
    },
    {
      id: "spr_s8",
      chinese: "尽管作为劣势方，他们依然在整场比赛中展现了非凡的韧性",
      english_full: "Despite being the underdogs, they showcased remarkable resilience throughout the tournament.",
      words: [
        { word: "Despite" }, { word: "being" }, { word: "the" }, { word: "underdogs", punctuation: "," },
        { word: "they" }, { word: "showcased" }, { word: "remarkable" }, { word: "resilience" }, { word: "throughout" }, { word: "the" }, { word: "tournament", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "让步状语", phonetic: "/dɪˈspaɪt/ /ˈbiːɪŋ/ /ðə/ /ˈʌndərdɒgz/", translation: "尽管是不被看好的一方(劣势方)",
          subComponents: [
            { startIndex: 0, words: [{ word: "Despite" }] },
            { startIndex: 1, words: [{ word: "being" }, { word: "the" }, { word: "underdogs" }], label: "动名词短语" }
          ]
        },
        {
          start: 4, end: 4, label: "主语", phonetic: "/ðeɪ/", translation: "他们",
          subComponents: [{ startIndex: 0, words: [{ word: "they" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈʃoʊkeɪst/", translation: "展现出",
          subComponents: [{ startIndex: 0, words: [{ word: "showcased" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/rɪˈmɑːrkəbəl/ /rɪˈzɪliəns/", translation: "非凡的韧性",
          subComponents: [{ startIndex: 0, words: [{ word: "remarkable" }, { word: "resilience" }] }]
        },
        {
          start: 8, end: 10, label: "时间状语", phonetic: "/θruːˈaʊt/ /ðə/ /ˈtʊərnəmənt/", translation: "在整场锦标赛期间",
          subComponents: [{ startIndex: 0, words: [{ word: "throughout" }, { word: "the" }, { word: "tournament" }] }]
        }
      ],
      analysis: [
        { type: "竞技热词", text: "underdog (处于劣势的一方，不被看好的人) 是体育报道极高频词。" },
        { type: "高级替换", text: "showcase 替换 show/display；resilience (韧性，不屈不挠)。" }
      ]
    },
    {
      id: "spr_s9",
      chinese: "体育精神不仅要求遵守规则，还要求尊重对手",
      english_full: "Sportsmanship demands not only adherence to the rules but also respect for one's opponents.",
      words: [
        { word: "Sportsmanship" }, { word: "demands" }, { word: "not" }, { word: "only" }, { word: "adherence" }, { word: "to" }, { word: "the" }, { word: "rules" },
        { word: "but" }, { word: "also" }, { word: "respect" }, { word: "for" }, { word: "one's" }, { word: "opponents", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈspɔːrtsmənʃɪp/", translation: "体育精神",
          subComponents: [{ startIndex: 0, words: [{ word: "Sportsmanship" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/dɪˈmændz/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "demands" }] }]
        },
        {
          start: 2, end: 13, label: "并列宾语", phonetic: "/nɒt/ /ˈoʊnli/ /ədˈhɪərəns/ /tuː/ /ðə/ /ruːlz/ /bʌt/ /ˈɔːlsoʊ/ /rɪˈspɛkt/ /fɔːr/ /wʌnz/ /əˈpoʊnənts/", translation: "不仅是遵守规则，还有对对手的尊重",
          subComponents: [
            { startIndex: 0, words: [{ word: "not" }, { word: "only" }] },
            { startIndex: 2, words: [{ word: "adherence" }, { word: "to" }, { word: "the" }, { word: "rules" }], label: "宾语1" },
            { startIndex: 6, words: [{ word: "but" }, { word: "also" }] },
            { startIndex: 8, words: [{ word: "respect" }, { word: "for" }, { word: "one's" }, { word: "opponents" }], label: "宾语2" }
          ]
        }
      ],
      analysis: [
        { type: "语法重点", text: "not only... but also... 结构。adherence to (对...的遵守)。" },
        { type: "话题词汇", text: "sportsmanship (体育精神)；opponent (对手，竞争者)。" }
      ]
    },
    {
      id: "spr_s10",
      chinese: "这位资深球员的战术专长弥补了他逐渐下降的速度",
      english_full: "The veteran player's tactical expertise compensates for his declining speed.",
      words: [
        { word: "The" }, { word: "veteran" }, { word: "player's" }, { word: "tactical" }, { word: "expertise" },
        { word: "compensates" }, { word: "for" }, { word: "his" }, { word: "declining" }, { word: "speed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈvɛtərən/ /ˈpleɪərz/ /ˈtæktɪkəl/ /ˌɛkspɜːrˈtiːz/", translation: "这位资深球员的战术专长",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "veteran" }, { word: "player's" }, { word: "tactical" }, { word: "expertise" }] }]
        },
        {
          start: 5, end: 6, label: "谓语", phonetic: "/ˈkɒmpənseɪts/ /fɔːr/", translation: "弥补",
          subComponents: [{ startIndex: 0, words: [{ word: "compensates" }, { word: "for" }] }]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/hɪz/ /dɪˈklaɪnɪŋ/ /spiːd/", translation: "他逐渐下降的速度",
          subComponents: [{ startIndex: 0, words: [{ word: "his" }, { word: "declining" }, { word: "speed" }] }]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "compensate for... 意为“弥补...，补偿...”，是 make up for 的高级替换。" },
        { type: "专业词汇", text: "veteran (经验丰富的，老将)；tactical expertise (战术专长)。" }
      ]
    }
  ]
};