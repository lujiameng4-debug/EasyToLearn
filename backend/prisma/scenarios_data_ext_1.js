export const extensions = {
  "env_01": [
    {
      id: "env_s6",
      chinese: "投资绿色技术可以显著减少我们的碳足迹",
      english_full: "Investing in green technologies can significantly reduce our carbon footprint.",
      words: [
        { word: "Investing" }, { word: "in" }, { word: "green" }, { word: "technologies" },
        { word: "can" }, { word: "significantly" }, { word: "reduce" }, { word: "our" }, { word: "carbon" }, { word: "footprint", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ɪnˈvɛstɪŋ/ /ɪn/ /griːn/ /tɛkˈnɒlədʒiz/", translation: "投资绿色技术",
          subComponents: [
            { startIndex: 0, words: [{ word: "Investing" }] },
            { startIndex: 1, words: [{ word: "in" }, { word: "green" }, { word: "technologies" }], label: "状语" }
          ]
        },
        {
          start: 4, end: 6, label: "谓语", phonetic: "/kæn/ /sɪgˈnɪfɪkəntli/ /rɪˈdjuːs/", translation: "可以显著减少",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "significantly" }], label: "状语" },
            { startIndex: 2, words: [{ word: "reduce" }], label: "实义动词" }
          ]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/aʊər/ /ˈkɑːrbən/ /ˈfʊtprɪnt/", translation: "我们的碳足迹",
          subComponents: [{ startIndex: 0, words: [{ word: "our" }, { word: "carbon" }, { word: "footprint" }] }]
        }
      ],
      analysis: [
        { type: "语法成分", text: "动名词短语 Investing in green technologies 整体作主语。" },
        { type: "固定搭配", text: "carbon footprint (碳足迹) 是环保类话题的核心词汇。" }
      ]
    },
    {
      id: "env_s7",
      chinese: "过度依赖化石燃料加剧了全球变暖的危机",
      english_full: "An overreliance on fossil fuels exacerbates the crisis of global warming.",
      words: [
        { word: "An" }, { word: "overreliance" }, { word: "on" }, { word: "fossil" }, { word: "fuels" },
        { word: "exacerbates" }, { word: "the" }, { word: "crisis" }, { word: "of" }, { word: "global" }, { word: "warming", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/æn/ /ˌoʊvərɪˈlaɪəns/ /ɒn/ /ˈfɒsəl/ /ˈfjuːəlz/", translation: "对化石燃料的过度依赖",
          subComponents: [
            { startIndex: 0, words: [{ word: "An" }, { word: "overreliance" }] },
            { startIndex: 2, words: [{ word: "on" }, { word: "fossil" }, { word: "fuels" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ɪgˈzæsərbeɪts/", translation: "加剧",
          subComponents: [{ startIndex: 0, words: [{ word: "exacerbates" }] }]
        },
        {
          start: 6, end: 10, label: "宾语", phonetic: "/ðə/ /ˈkraɪsɪs/ /ɒv/ /ˈgloʊbəl/ /ˈwɔːrmɪŋ/", translation: "全球变暖的危机",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "crisis" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "global" }, { word: "warming" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "高级词汇", text: "exacerbate (加剧，恶化) 是 worsen 的高级学术替换词。" },
        { type: "词汇用法", text: "overreliance on... 意为“对...过度依赖”，on 是固定搭配的介词。" }
      ]
    },
    {
      id: "env_s8",
      chinese: "保护濒危物种是维持生态平衡的基础",
      english_full: "Preserving endangered species is fundamental to maintaining ecological balance.",
      words: [
        { word: "Preserving" }, { word: "endangered" }, { word: "species" }, { word: "is" }, { word: "fundamental" },
        { word: "to" }, { word: "maintaining" }, { word: "ecological" }, { word: "balance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/prɪˈzɜːrvɪŋ/ /ɪnˈdeɪndʒərd/ /ˈspiːʃiːz/", translation: "保护濒危物种",
          subComponents: [{ startIndex: 0, words: [{ word: "Preserving" }, { word: "endangered" }, { word: "species" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 4, end: 4, label: "表语", phonetic: "/ˌfʌndəˈmɛntəl/", translation: "基础的",
          subComponents: [{ startIndex: 0, words: [{ word: "fundamental" }] }]
        },
        {
          start: 5, end: 8, label: "状语", phonetic: "/tuː/ /meɪnˈteɪnɪŋ/ /ˌɛkəˈlɒdʒɪkəl/ /ˈbæləns/", translation: "对维持生态平衡而言",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }] },
            { startIndex: 1, words: [{ word: "maintaining" }, { word: "ecological" }, { word: "balance" }], label: "介词宾语" }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "be fundamental to doing sth 意为“对做某事是必不可少的”，to 为介词。" },
        { type: "专业词汇", text: "endangered species (濒危物种); ecological balance (生态平衡)。" }
      ]
    },
    {
      id: "env_s9",
      chinese: "鼓励公众使用公共交通可以有效缓解城市空气污染",
      english_full: "Encouraging the public to use public transport can effectively alleviate urban air pollution.",
      words: [
        { word: "Encouraging" }, { word: "the" }, { word: "public" }, { word: "to" }, { word: "use" }, { word: "public" }, { word: "transport" },
        { word: "can" }, { word: "effectively" }, { word: "alleviate" }, { word: "urban" }, { word: "air" }, { word: "pollution", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ɪnˈkɜːrɪdʒɪŋ/ /ðə/ /ˈpʌblɪk/ /tuː/ /juːz/ /ˈpʌblɪk/ /ˈtrænspɔːrt/", translation: "鼓励公众使用公共交通",
          subComponents: [
            { startIndex: 0, words: [{ word: "Encouraging" }] },
            { startIndex: 1, words: [{ word: "the" }, { word: "public" }], label: "动名词宾语" },
            { startIndex: 3, words: [{ word: "to" }, { word: "use" }, { word: "public" }, { word: "transport" }], label: "宾补" }
          ]
        },
        {
          start: 7, end: 9, label: "谓语", phonetic: "/kæn/ /ɪˈfɛktɪvli/ /əˈliːvieɪt/", translation: "可以有效地缓解",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "effectively" }], label: "状语" },
            { startIndex: 2, words: [{ word: "alleviate" }], label: "实义动词" }
          ]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ˈɜːrbən/ /ɛər/ /pəˈluːʃən/", translation: "城市空气污染",
          subComponents: [{ startIndex: 0, words: [{ word: "urban" }, { word: "air" }, { word: "pollution" }] }]
        }
      ],
      analysis: [
        { type: "句型结构", text: "动名词短语 Encouraging sb to do sth 整体作为句子的主语。" },
        { type: "高级替换", text: "alleviate (缓解，减轻) 替换 mitigate 或 reduce。" }
      ]
    },
    {
      id: "env_s10",
      chinese: "实施严格的废物管理政策有助于促进循环经济",
      english_full: "Implementing strict waste management policies helps promote a circular economy.",
      words: [
        { word: "Implementing" }, { word: "strict" }, { word: "waste" }, { word: "management" }, { word: "policies" },
        { word: "helps" }, { word: "promote" }, { word: "a" }, { word: "circular" }, { word: "economy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ˈɪmplɪmɛntɪŋ/ /strɪkt/ /weɪst/ /ˈmænɪdʒmənt/ /ˈpɒlɪsiz/", translation: "实施严格的废物管理政策",
          subComponents: [{ startIndex: 0, words: [{ word: "Implementing" }, { word: "strict" }, { word: "waste" }, { word: "management" }, { word: "policies" }] }]
        },
        {
          start: 5, end: 6, label: "谓语", phonetic: "/hɛlps/ /prəˈmoʊt/", translation: "有助于促进",
          subComponents: [
            { startIndex: 0, words: [{ word: "helps" }] },
            { startIndex: 1, words: [{ word: "promote" }] }
          ]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/ə/ /ˈsɜːrkjʊlər/ /ɪˈkɒnəmi/", translation: "循环经济",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "circular" }, { word: "economy" }] }]
        }
      ],
      analysis: [
        { type: "语法重点", text: "help (to) do sth 结构中，to 可以省略，因此 helps promote 连用是正确的。" },
        { type: "专业术语", text: "circular economy (循环经济) 强调资源的回收与再利用。" }
      ]
    }
  ],
  "airport_01": [
    {
      id: "airport_s6",
      chinese: "由于航空管制，我们的航班在跑道上滞留了两个小时",
      english_full: "Due to air traffic control, our flight was stranded on the runway for two hours.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "air" }, { word: "traffic" }, { word: "control", punctuation: "," },
        { word: "our" }, { word: "flight" }, { word: "was" }, { word: "stranded" }, { word: "on" }, { word: "the" }, { word: "runway" },
        { word: "for" }, { word: "two" }, { word: "hours", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "原因状语", phonetic: "/djuː/ /tuː/ /ɛər/ /ˈtræfɪk/ /kənˈtroʊl/", translation: "由于航空管制",
          subComponents: [{ startIndex: 0, words: [{ word: "Due" }, { word: "to" }, { word: "air" }, { word: "traffic" }, { word: "control" }] }]
        },
        {
          start: 5, end: 6, label: "主语", phonetic: "/aʊər/ /flaɪt/", translation: "我们的航班",
          subComponents: [{ startIndex: 0, words: [{ word: "our" }, { word: "flight" }] }]
        },
        {
          start: 7, end: 8, label: "谓语(被动)", phonetic: "/wɒz/ /ˈstrændɪd/", translation: "被滞留",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "stranded" }], label: "实义动词" }
          ]
        },
        {
          start: 9, end: 11, label: "地点状语", phonetic: "/ɒn/ /ðə/ /ˈrʌnweɪ/", translation: "在跑道上",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "runway" }] }]
        },
        {
          start: 12, end: 14, label: "时间状语", phonetic: "/fɔːr/ /tuː/ /ˈaʊərz/", translation: "两个小时",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "two" }, { word: "hours" }] }]
        }
      ],
      analysis: [
        { type: "词汇解析", text: "be stranded (被困住，滞留) 常用来形容乘客或交通工具因故无法移动。" },
        { type: "专业术语", text: "air traffic control 即我们常说的 ATC (航空管制)。" }
      ]
    },
    {
      id: "airport_s7",
      chinese: "旅客们被建议提前到达机场以办理登机手续",
      english_full: "Passengers are advised to arrive at the airport in advance for check-in.",
      words: [
        { word: "Passengers" }, { word: "are" }, { word: "advised" }, { word: "to" }, { word: "arrive" }, { word: "at" }, { word: "the" }, { word: "airport" },
        { word: "in" }, { word: "advance" }, { word: "for" }, { word: "check-in", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈpæsəndʒərz/", translation: "旅客们",
          subComponents: [{ startIndex: 0, words: [{ word: "Passengers" }] }]
        },
        {
          start: 1, end: 2, label: "谓语(被动)", phonetic: "/ɑːr/ /ədˈvaɪzd/", translation: "被建议",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "advised" }] }
          ]
        },
        {
          start: 3, end: 11, label: "主语补足语", phonetic: "/tuː/ /əˈraɪv/ /æt/ /ðə/ /ˈɛərpɔːrt/ /ɪn/ /ədˈvæns/ /fɔːr/ /ˈtʃɛkɪn/", translation: "提前到达机场办理登机",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "arrive" }] },
            { startIndex: 2, words: [{ word: "at" }, { word: "the" }, { word: "airport" }], label: "地点状语" },
            { startIndex: 5, words: [{ word: "in" }, { word: "advance" }], label: "时间状语" },
            { startIndex: 7, words: [{ word: "for" }, { word: "check-in" }], label: "目的状语" }
          ]
        }
      ],
      analysis: [
        { type: "句型结构", text: "sb be advised to do sth 是一种非常礼貌正式的建议表达方式。" },
        { type: "固定搭配", text: "in advance 意为“提前”；check-in 意为“办理登机/入住手续”。" }
      ]
    },
    {
      id: "airport_s8",
      chinese: "这个免税店提供各种各样的高档化妆品和香水",
      english_full: "This duty-free shop offers a wide array of premium cosmetics and fragrances.",
      words: [
        { word: "This" }, { word: "duty-free" }, { word: "shop" }, { word: "offers" }, { word: "a" }, { word: "wide" }, { word: "array" }, { word: "of" },
        { word: "premium" }, { word: "cosmetics" }, { word: "and" }, { word: "fragrances", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ˈdjuːti/-/friː/ /ʃɒp/", translation: "这个免税店",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "duty-free" }, { word: "shop" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/ə/ /waɪd/ /əˈreɪ/ /ɒv/ /ˈpriːmiəm/ /kɒzˈmɛtɪks/ /ænd/ /ˈfreɪgrənsɪz/", translation: "各种高档化妆品和香水",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "wide" }, { word: "array" }, { word: "of" }], label: "量词" },
            { startIndex: 4, words: [{ word: "premium" }, { word: "cosmetics" }, { word: "and" }, { word: "fragrances" }] }
          ]
        }
      ],
      analysis: [
        { type: "高级替换", text: "a wide array of... 是 a lot of 或 a wide variety of 的高级替换，意为“大量的，各种各样的”。" },
        { type: "场景词汇", text: "duty-free shop (免税店); premium (高端的，优质的); cosmetics (化妆品)。" }
      ]
    },
    {
      id: "airport_s9",
      chinese: "为了您的安全，在飞行过程中请始终系好安全带",
      english_full: "For your safety, please keep your seatbelt fastened at all times during the flight.",
      words: [
        { word: "For" }, { word: "your" }, { word: "safety", punctuation: "," }, { word: "please" }, { word: "keep" }, { word: "your" }, { word: "seatbelt" },
        { word: "fastened" }, { word: "at" }, { word: "all" }, { word: "times" }, { word: "during" }, { word: "the" }, { word: "flight", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "目的状语", phonetic: "/fɔːr/ /jʊər/ /ˈseɪfti/", translation: "为了您的安全",
          subComponents: [{ startIndex: 0, words: [{ word: "For" }, { word: "your" }, { word: "safety" }] }]
        },
        {
          start: 3, end: 3, label: "副词", phonetic: "/pliːz/", translation: "请",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kiːp/", translation: "保持",
          subComponents: [{ startIndex: 0, words: [{ word: "keep" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/jʊər/ /ˈsiːtbɛlt/", translation: "您的安全带",
          subComponents: [{ startIndex: 0, words: [{ word: "your" }, { word: "seatbelt" }] }]
        },
        {
          start: 7, end: 7, label: "宾语补足语", phonetic: "/ˈfæsənd/", translation: "扣紧的",
          subComponents: [{ startIndex: 0, words: [{ word: "fastened" }] }]
        },
        {
          start: 8, end: 13, label: "时间状语", phonetic: "/æt/ /ɔːl/ /taɪmz/ /ˈdjʊərɪŋ/ /ðə/ /flaɪt/", translation: "在飞行过程中的任何时候",
          subComponents: [
            { startIndex: 0, words: [{ word: "at" }, { word: "all" }, { word: "times" }] },
            { startIndex: 3, words: [{ word: "during" }, { word: "the" }, { word: "flight" }] }
          ]
        }
      ],
      analysis: [
        { type: "语法结构", text: "keep sth done 是“保持某物处于...状态”的结构，fastened 是过去分词作宾补，表示被动。" },
        { type: "固定搭配", text: "at all times (始终，一直)，在服务行业广播中极常使用。" }
      ]
    },
    {
      id: "airport_s10",
      chinese: "海关官员有权检查任何可疑的行李物品",
      english_full: "Customs officials reserve the right to inspect any suspicious baggage items.",
      words: [
        { word: "Customs" }, { word: "officials" }, { word: "reserve" }, { word: "the" }, { word: "right" },
        { word: "to" }, { word: "inspect" }, { word: "any" }, { word: "suspicious" }, { word: "baggage" }, { word: "items", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈkʌstəmz/ /əˈfɪʃəlz/", translation: "海关官员",
          subComponents: [{ startIndex: 0, words: [{ word: "Customs" }, { word: "officials" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/rɪˈzɜːrv/", translation: "保留(权利)",
          subComponents: [{ startIndex: 0, words: [{ word: "reserve" }] }]
        },
        {
          start: 3, end: 10, label: "宾语", phonetic: "/ðə/ /raɪt/ /tuː/ /ɪnˈspɛkt/ /ˈɛni/ /səsˈpɪʃəs/ /ˈbægɪdʒ/ /ˈaɪtəmz/", translation: "检查任何可疑行李物品的权利",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "right" }] },
            { startIndex: 2, words: [{ word: "to" }, { word: "inspect" }, { word: "any" }, { word: "suspicious" }, { word: "baggage" }, { word: "items" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "学术词汇", text: "reserve the right to do sth 意为“有权做某事，保留做某事的权利”，是非常严谨的法律/官方表达。" },
        { type: "场景词汇", text: "customs officials (海关官员); suspicious (可疑的); inspect (检查)。" }
      ]
    }
  ],
  "hotel_01": [
    {
      id: "hotel_s6",
      chinese: "酒店前台员工以其热情好客和专业服务而受到赞誉",
      english_full: "The hotel reception staff are commended for their hospitality and professional service.",
      words: [
        { word: "The" }, { word: "hotel" }, { word: "reception" }, { word: "staff" }, { word: "are" }, { word: "commended" },
        { word: "for" }, { word: "their" }, { word: "hospitality" }, { word: "and" }, { word: "professional" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/ /rɪˈsɛpʃən/ /stæf/", translation: "酒店前台员工",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hotel" }, { word: "reception" }, { word: "staff" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(被动)", phonetic: "/ɑːr/ /kəˈmɛndɪd/", translation: "受到赞誉",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "commended" }], label: "实义动词" }
          ]
        },
        {
          start: 6, end: 11, label: "原因状语", phonetic: "/fɔːr/ /ðɛər/ /ˌhɒspɪˈtæləti/ /ænd/ /prəˈfɛʃənəl/ /ˈsɜːrvɪs/", translation: "因其热情好客和专业服务",
          subComponents: [
            { startIndex: 0, words: [{ word: "for" }] },
            { startIndex: 1, words: [{ word: "their" }, { word: "hospitality" }, { word: "and" }, { word: "professional" }, { word: "service" }], label: "介词宾语" }
          ]
        }
      ],
      analysis: [
        { type: "高级替换", text: "be commended for... 是 be praised for... (因...受到表扬) 的高级词汇替换。" },
        { type: "词汇解析", text: "hospitality 指“好客，殷勤”，是酒店服务业 (hospitality industry) 的核心词汇。" }
      ]
    },
    {
      id: "hotel_s7",
      chinese: "所有的套房都享有令人叹为观止的无敌海景",
      english_full: "All suites boast breathtaking, panoramic views of the ocean.",
      words: [
        { word: "All" }, { word: "suites" }, { word: "boast" }, { word: "breathtaking", punctuation: "," }, { word: "panoramic" },
        { word: "views" }, { word: "of" }, { word: "the" }, { word: "ocean", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɔːl/ /swiːts/", translation: "所有的套房",
          subComponents: [{ startIndex: 0, words: [{ word: "All" }, { word: "suites" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/boʊst/", translation: "享有，以...自豪",
          subComponents: [{ startIndex: 0, words: [{ word: "boast" }] }]
        },
        {
          start: 3, end: 8, label: "宾语", phonetic: "/ˈbrɛθˌteɪkɪŋ/ /ˌpænəˈræmɪk/ /vjuːz/ /ɒv/ /ði/ /ˈoʊʃən/", translation: "令人叹为观止的无敌海景",
          subComponents: [
            { startIndex: 0, words: [{ word: "breathtaking" }, { word: "panoramic" }, { word: "views" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "the" }, { word: "ocean" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "词汇用法", text: "boast 作及物动词时，指地方、建筑等“拥有(引以为傲的东西)”，在雅思描述地点的口语中极易拿高分。" },
        { type: "修饰词汇", text: "breathtaking (极其美丽的); panoramic (全景的)。" }
      ]
    },
    {
      id: "hotel_s8",
      chinese: "我们可以根据您的特殊饮食要求为您提供定制的早餐",
      english_full: "We can provide you with a customized breakfast catering to your specific dietary requirements.",
      words: [
        { word: "We" }, { word: "can" }, { word: "provide" }, { word: "you" }, { word: "with" }, { word: "a" }, { word: "customized" }, { word: "breakfast" },
        { word: "catering" }, { word: "to" }, { word: "your" }, { word: "specific" }, { word: "dietary" }, { word: "requirements", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/kæn/ /prəˈvaɪd/", translation: "可以提供",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "provide" }] }
          ]
        },
        {
          start: 3, end: 3, label: "间接宾语", phonetic: "/juː/", translation: "您",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }] }]
        },
        {
          start: 4, end: 13, label: "直接宾语", phonetic: "/wɪð/ /ə/ /ˈkʌstəmaɪzd/ /ˈbrɛkfəst/ /ˈkeɪtərɪŋ/ /tuː/ /jʊər/ /spəˈsɪfɪk/ /ˈdaɪɪtəri/ /rɪˈkwaɪərmənts/", translation: "迎合您特定饮食要求的定制早餐",
          subComponents: [
            { startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "customized" }, { word: "breakfast" }] },
            { startIndex: 4, words: [{ word: "catering" }, { word: "to" }, { word: "your" }, { word: "specific" }, { word: "dietary" }, { word: "requirements" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "固定搭配", text: "provide sb with sth (为某人提供某物)；dietary requirements (饮食要求)。" },
        { type: "语法成分", text: "catering to... 是现在分词短语作后置定语，修饰 breakfast。" }
      ]
    },
    {
      id: "hotel_s9",
      chinese: "酒店的设施包括一个恒温室内游泳池和一个设备齐全的健身房",
      english_full: "The hotel amenities include a heated indoor swimming pool and a fully equipped gymnasium.",
      words: [
        { word: "The" }, { word: "hotel" }, { word: "amenities" }, { word: "include" }, { word: "a" }, { word: "heated" }, { word: "indoor" }, { word: "swimming" }, { word: "pool" },
        { word: "and" }, { word: "a" }, { word: "fully" }, { word: "equipped" }, { word: "gymnasium", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/ /əˈmɛnətiz/", translation: "酒店的设施",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hotel" }, { word: "amenities" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈkluːd/", translation: "包括",
          subComponents: [{ startIndex: 0, words: [{ word: "include" }] }]
        },
        {
          start: 4, end: 13, label: "并列宾语", phonetic: "/ə/ /ˈhiːtɪd/ /ˈɪndɔːr/ /ˈswɪmɪŋ/ /puːl/ /ænd/ /ə/ /ˈfʊli/ /ɪˈkwɪpt/ /dʒɪmˈneɪziəm/", translation: "一个恒温室内游泳池和一个设备齐全的健身房",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "heated" }, { word: "indoor" }, { word: "swimming" }, { word: "pool" }], label: "宾语1" },
            { startIndex: 5, words: [{ word: "and" }], label: "连词" },
            { startIndex: 6, words: [{ word: "a" }, { word: "fully" }, { word: "equipped" }, { word: "gymnasium" }], label: "宾语2" }
          ]
        }
      ],
      analysis: [
        { type: "词汇解析", text: "amenities 常指酒店或社区内为人们提供便利和享受的“生活设施”。" },
        { type: "雅思词汇", text: "fully equipped (设备齐全的); heated indoor (恒温室内的); gymnasium 是 gym 的全称正式写法。" }
      ]
    },
    {
      id: "hotel_s10",
      chinese: "延迟退房请求必须提前与管理层协商",
      english_full: "Late check-out requests must be negotiated in advance with the management.",
      words: [
        { word: "Late" }, { word: "check-out" }, { word: "requests" }, { word: "must" }, { word: "be" }, { word: "negotiated" },
        { word: "in" }, { word: "advance" }, { word: "with" }, { word: "the" }, { word: "management", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/leɪt/ /ˈtʃɛkaʊt/ /rɪˈkwɛsts/", translation: "延迟退房请求",
          subComponents: [{ startIndex: 0, words: [{ word: "Late" }, { word: "check-out" }, { word: "requests" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(情被)", phonetic: "/mʌst/ /bi/ /nɪˈgoʊʃieɪtɪd/", translation: "必须被协商",
          subComponents: [
            { startIndex: 0, words: [{ word: "must" }, { word: "be" }], label: "情态助动词" },
            { startIndex: 2, words: [{ word: "negotiated" }], label: "实义动词" }
          ]
        },
        {
          start: 6, end: 7, label: "时间状语", phonetic: "/ɪn/ /ədˈvæns/", translation: "提前",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "advance" }] }]
        },
        {
          start: 8, end: 10, label: "对象状语", phonetic: "/wɪð/ /ðə/ /ˈmænɪdʒmənt/", translation: "与管理层",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "the" }, { word: "management" }] }]
        }
      ],
      analysis: [
        { type: "专业术语", text: "late check-out (延迟退房) 是酒店业专有词汇。" },
        { type: "学术表达", text: "negotiate with... (与...协商)，常用于商务沟通场景。" }
      ]
    }
  ],
  "healthcare_01": [
    {
      id: "hc_s6",
      chinese: "早期诊断可以大大提高癌症患者的生存率",
      english_full: "Early diagnosis can drastically improve the survival rate of cancer patients.",
      words: [
        { word: "Early" }, { word: "diagnosis" }, { word: "can" }, { word: "drastically" }, { word: "improve" },
        { word: "the" }, { word: "survival" }, { word: "rate" }, { word: "of" }, { word: "cancer" }, { word: "patients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈɜːrli/ /ˌdaɪəgˈnoʊsɪs/", translation: "早期诊断",
          subComponents: [{ startIndex: 0, words: [{ word: "Early" }, { word: "diagnosis" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/kæn/ /ˈdræstɪkli/ /ɪmˈpruːv/", translation: "可以大大提高",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "drastically" }], label: "状语" },
            { startIndex: 2, words: [{ word: "improve" }], label: "实义动词" }
          ]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ðə/ /sərˈvaɪvəl/ /reɪt/ /ɒv/ /ˈkænsər/ /ˈpeɪʃənts/", translation: "癌症患者的生存率",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "survival" }, { word: "rate" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "cancer" }, { word: "patients" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "医疗术语", text: "early diagnosis (早期诊断)；survival rate (生存率)。" },
        { type: "高级副词", text: "drastically 意为“剧烈地，大大地”，常用于强调影响的程度极深。" }
      ]
    },
    {
      id: "hc_s7",
      chinese: "这种创新的手术方法具有更短的恢复期和更少的并发症",
      english_full: "This innovative surgical procedure features a shorter recovery period and fewer complications.",
      words: [
        { word: "This" }, { word: "innovative" }, { word: "surgical" }, { word: "procedure" }, { word: "features" },
        { word: "a" }, { word: "shorter" }, { word: "recovery" }, { word: "period" }, { word: "and" }, { word: "fewer" }, { word: "complications", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ˈɪnəveɪtɪv/ /ˈsɜːrdʒɪkəl/ /prəˈsiːdʒər/", translation: "这种创新的手术方法",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "innovative" }, { word: "surgical" }, { word: "procedure" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "以...为特征/具有",
          subComponents: [{ startIndex: 0, words: [{ word: "features" }] }]
        },
        {
          start: 5, end: 11, label: "并列宾语", phonetic: "/ə/ /ˈʃɔːrtər/ /rɪˈkʌvəri/ /ˈpɪəriəd/ /ænd/ /ˈfjuːər/ /ˌkɒmplɪˈkeɪʃənz/", translation: "更短的恢复期和更少的并发症",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "shorter" }, { word: "recovery" }, { word: "period" }], label: "宾语1" },
            { startIndex: 4, words: [{ word: "and" }], label: "连词" },
            { startIndex: 5, words: [{ word: "fewer" }, { word: "complications" }], label: "宾语2" }
          ]
        }
      ],
      analysis: [
        { type: "词汇用法", text: "feature 在这里作动词，意为“以...为特色，具有...的特点”。" },
        { type: "医疗术语", text: "surgical procedure (外科手术，手术程序)；complication (并发症)。" }
      ]
    },
    {
      id: "hc_s8",
      chinese: "医生们对滥用抗生素可能导致的后果表示担忧",
      english_full: "Doctors express concern over the potential consequences arising from the abuse of antibiotics.",
      words: [
        { word: "Doctors" }, { word: "express" }, { word: "concern" }, { word: "over" }, { word: "the" }, { word: "potential" }, { word: "consequences" },
        { word: "arising" }, { word: "from" }, { word: "the" }, { word: "abuse" }, { word: "of" }, { word: "antibiotics", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈdɒktərz/", translation: "医生们",
          subComponents: [{ startIndex: 0, words: [{ word: "Doctors" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ɪkˈsprɛs/", translation: "表达",
          subComponents: [{ startIndex: 0, words: [{ word: "express" }] }]
        },
        {
          start: 2, end: 2, label: "宾语", phonetic: "/kənˈsɜːrn/", translation: "担忧",
          subComponents: [{ startIndex: 0, words: [{ word: "concern" }] }]
        },
        {
          start: 3, end: 12, label: "状语", phonetic: "/ˈoʊvər/ /ðə/ /pəˈtɛnʃəl/ /ˈkɒnsɪkwɛnsɪz/ /əˈraɪzɪŋ/ /frɒm/ /ðə/ /əˈbjuːs/ /ɒv/ /ˌæntibaɪˈɒtɪks/", translation: "关于滥用抗生素可能引起的后果",
          subComponents: [
            { startIndex: 0, words: [{ word: "over" }] },
            { startIndex: 1, words: [{ word: "the" }, { word: "potential" }, { word: "consequences" }], label: "介词宾语" },
            { startIndex: 4, words: [{ word: "arising" }, { word: "from" }, { word: "the" }, { word: "abuse" }, { word: "of" }, { word: "antibiotics" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "语法重点", text: "arising from... (由...引起的) 是现在分词短语作后置定语，修饰 consequences。" },
        { type: "固定搭配", text: "express concern over... (对...表示担忧)；abuse of antibiotics (滥用抗生素)。" }
      ]
    },
    {
      id: "hc_s9",
      chinese: "提供普遍的医疗保险是维护社会公平的重要一环",
      english_full: "Providing universal healthcare coverage is a vital component of maintaining social equity.",
      words: [
        { word: "Providing" }, { word: "universal" }, { word: "healthcare" }, { word: "coverage" }, { word: "is" }, { word: "a" }, { word: "vital" }, { word: "component" },
        { word: "of" }, { word: "maintaining" }, { word: "social" }, { word: "equity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/prəˈvaɪdɪŋ/ /ˌjuːnɪˈvɜːrsəl/ /ˈhɛlθkɛər/ /ˈkʌvərɪdʒ/", translation: "提供普遍的医疗保险",
          subComponents: [{ startIndex: 0, words: [{ word: "Providing" }, { word: "universal" }, { word: "healthcare" }, { word: "coverage" }] }]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 5, end: 11, label: "表语", phonetic: "/ə/ /ˈvaɪtəl/ /kəmˈpoʊnənt/ /ɒv/ /meɪnˈteɪnɪŋ/ /ˈsoʊʃəl/ /ˈɛkwɪti/", translation: "维持社会公平的重要组成部分",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "vital" }, { word: "component" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "maintaining" }, { word: "social" }, { word: "equity" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "政策词汇", text: "universal healthcare coverage 指“全民医疗保障/保险”；social equity 意为“社会公平”。" },
        { type: "高级搭配", text: "a vital component of... (......的重要组成部分/一环)。" }
      ]
    },
    {
      id: "hc_s10",
      chinese: "心理健康不应该被忽视，它与身体健康同等重要",
      english_full: "Mental health should not be overlooked; it is equally as important as physical well-being.",
      words: [
        { word: "Mental" }, { word: "health" }, { word: "should" }, { word: "not" }, { word: "be" }, { word: "overlooked", punctuation: ";" },
        { word: "it" }, { word: "is" }, { word: "equally" }, { word: "as" }, { word: "important" }, { word: "as" }, { word: "physical" }, { word: "well-being", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "前一分句", phonetic: "/ˈmɛntəl/ /hɛlθ/ /ʃʊd/ /nɒt/ /bi/ /ˌoʊvərˈlʊkt/", translation: "心理健康不应该被忽视",
          subComponents: [
            { startIndex: 0, words: [{ word: "Mental" }, { word: "health" }], label: "主语" },
            { startIndex: 2, words: [{ word: "should" }, { word: "not" }, { word: "be" }, { word: "overlooked" }], label: "谓语(被动)" }
          ]
        },
        {
          start: 6, end: 13, label: "后一分句", phonetic: "/ɪt/ /ɪz/ /ˈiːkwəli/ /æz/ /ɪmˈpɔːrtənt/ /æz/ /ˈfɪzɪkəl/ /wɛl/-/ˈbiːɪŋ/", translation: "它与身体健康同等重要",
          subComponents: [
            { startIndex: 0, words: [{ word: "it" }], label: "主语" },
            { startIndex: 1, words: [{ word: "is" }], label: "系动词" },
            { startIndex: 2, words: [{ word: "equally" }], label: "状语" },
            { startIndex: 3, words: [{ word: "as" }, { word: "important" }, { word: "as" }], label: "比较级表语" },
            { startIndex: 6, words: [{ word: "physical" }, { word: "well-being" }], label: "比较对象" }
          ]
        }
      ],
      analysis: [
        { type: "句式解析", text: "分号用于连接两个逻辑紧密的独立句子。as... as 结构用于同级比较。" },
        { type: "高级替换", text: "overlook 意为“忽视，忽略”，等同于 ignore/neglect；physical well-being 等同于 physical health。" }
      ]
    }
  ]
};
