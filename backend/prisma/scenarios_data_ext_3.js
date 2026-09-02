export const extensions = {
  "travel_01": [
    {
      id: "trv_s6",
      chinese: "背包客们更喜欢人迹罕至的目的地，以寻求真实的文化体验",
      english_full: "Backpackers prefer off-the-beaten-path destinations in pursuit of authentic cultural experiences.",
      words: [
        { word: "Backpackers" }, { word: "prefer" }, { word: "off-the-beaten-path" }, { word: "destinations" },
        { word: "in" }, { word: "pursuit" }, { word: "of" }, { word: "authentic" }, { word: "cultural" }, { word: "experiences", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈbækˌpækərz/", translation: "背包客们",
          subComponents: [{ startIndex: 0, words: [{ word: "Backpackers" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/prɪˈfɜːr/", translation: "更喜欢",
          subComponents: [{ startIndex: 0, words: [{ word: "prefer" }] }]
        },
        {
          start: 2, end: 3, label: "宾语", phonetic: "/ɒf-ðə-ˈbiːtən-pæθ/ /ˌdɛstɪˈneɪʃənz/", translation: "人迹罕至的目的地",
          subComponents: [{ startIndex: 0, words: [{ word: "off-the-beaten-path" }, { word: "destinations" }] }]
        },
        {
          start: 4, end: 9, label: "目的状语", phonetic: "/ɪn/ /pərˈsuːt/ /ɒv/ /ɔːˈθɛntɪk/ /ˈkʌltʃərəl/ /ɪkˈspɪəriənsɪz/", translation: "追求真实的文化体验",
          subComponents: [
            { startIndex: 0, words: [{ word: "in" }, { word: "pursuit" }, { word: "of" }] },
            { startIndex: 3, words: [{ word: "authentic" }, { word: "cultural" }, { word: "experiences" }], label: "介词宾语" }
          ]
        }
      ],
      analysis: [
        { type: "雅思极佳词汇", text: "off-the-beaten-path (偏僻的，人迹罕至的) 是旅游类话题能拿高分的绝佳复合词。" },
        { type: "固定搭配", text: "in pursuit of... (追求...，寻求...)。" }
      ]
    },
    {
      id: "trv_s7",
      chinese: "这个古老的废墟为了解这个国家动荡的历史提供了迷人的一瞥",
      english_full: "The ancient ruins offer a fascinating glimpse into the country's turbulent history.",
      words: [
        { word: "The" }, { word: "ancient" }, { word: "ruins" }, { word: "offer" }, { word: "a" }, { word: "fascinating" }, { word: "glimpse" },
        { word: "into" }, { word: "the" }, { word: "country's" }, { word: "turbulent" }, { word: "history", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ði/ /ˈeɪnʃənt/ /ˈruːɪnz/", translation: "这个古老的废墟",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "ancient" }, { word: "ruins" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offer" }] }]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/ə/ /ˈfæsɪneɪtɪŋ/ /glɪmps/ /ˈɪntuː/ /ðə/ /ˈkʌntriz/ /ˈtɜːrbjʊlənt/ /ˈhɪstəri/", translation: "关于这个国家动荡历史的迷人一瞥",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "fascinating" }, { word: "glimpse" }] },
            { startIndex: 3, words: [{ word: "into" }, { word: "the" }, { word: "country's" }, { word: "turbulent" }, { word: "history" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "高级搭配", text: "offer a glimpse into... (为提供一窥...的机会) 常用于历史、文化、科技等领域的介绍。" },
        { type: "词汇解析", text: "turbulent (动荡的，混乱的)；ruins 在这里作名词表示“废墟”。" }
      ]
    },
    {
      id: "trv_s8",
      chinese: "生态旅游鼓励游客最大程度地减少他们的环境足迹",
      english_full: "Ecotourism encourages travelers to minimize their environmental footprint.",
      words: [
        { word: "Ecotourism" }, { word: "encourages" }, { word: "travelers" }, { word: "to" }, { word: "minimize" }, { word: "their" }, { word: "environmental" }, { word: "footprint", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈiːkoʊˌtʊərɪzəm/", translation: "生态旅游",
          subComponents: [{ startIndex: 0, words: [{ word: "Ecotourism" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ɪnˈkɜːrɪdʒɪz/", translation: "鼓励",
          subComponents: [{ startIndex: 0, words: [{ word: "encourages" }] }]
        },
        {
          start: 2, end: 2, label: "宾语", phonetic: "/ˈtrævələrz/", translation: "游客",
          subComponents: [{ startIndex: 0, words: [{ word: "travelers" }] }]
        },
        {
          start: 3, end: 7, label: "宾语补足语", phonetic: "/tuː/ /ˈmɪnɪmaɪz/ /ðɛər/ /ɪnˌvaɪrənˈmɛntəl/ /ˈfʊtprɪnt/", translation: "去最小化他们的环境足迹",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "minimize" }] },
            { startIndex: 2, words: [{ word: "their" }, { word: "environmental" }, { word: "footprint" }] }
          ]
        }
      ],
      analysis: [
        { type: "构词法", text: "eco- 前缀表示生态，ecotourism 即生态旅游。" },
        { type: "专业搭配", text: "minimize (最小化) 与 footprint (足迹) 连用，是环保语境下的绝配。" }
      ]
    },
    {
      id: "trv_s9",
      chinese: "获得签证可能是前往某些特定国家旅行最繁琐的过程",
      english_full: "Obtaining a visa can be the most cumbersome process when traveling to certain specific countries.",
      words: [
        { word: "Obtaining" }, { word: "a" }, { word: "visa" }, { word: "can" }, { word: "be" }, { word: "the" }, { word: "most" }, { word: "cumbersome" }, { word: "process" },
        { word: "when" }, { word: "traveling" }, { word: "to" }, { word: "certain" }, { word: "specific" }, { word: "countries", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/əbˈteɪnɪŋ/ /ə/ /ˈviːzə/", translation: "获得签证",
          subComponents: [{ startIndex: 0, words: [{ word: "Obtaining" }, { word: "a" }, { word: "visa" }] }]
        },
        {
          start: 3, end: 4, label: "系动词", phonetic: "/kæn/ /bi/", translation: "可能是",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "be" }], label: "系动词" }
          ]
        },
        {
          start: 5, end: 8, label: "表语", phonetic: "/ðə/ /moʊst/ /ˈkʌmbərsəm/ /ˈprɒsɛs/", translation: "最繁琐的过程",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "most" }, { word: "cumbersome" }, { word: "process" }] }]
        },
        {
          start: 9, end: 14, label: "时间状语", phonetic: "/wɛn/ /ˈtrævəlɪŋ/ /tuː/ /ˈsɜːrtən/ /spəˈsɪfɪk/ /ˈkʌntriz/", translation: "当旅行去某些特定国家时",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }], label: "连词" },
            { startIndex: 1, words: [{ word: "traveling" }, { word: "to" }, { word: "certain" }, { word: "specific" }, { word: "countries" }], label: "现在分词短语" }
          ]
        }
      ],
      analysis: [
        { type: "高级词汇", text: "cumbersome 意为“繁琐的，笨重的”，常用来形容程序(process)或系统。" },
        { type: "语法重点", text: "when traveling... 是状语从句的省略形式 (省略了 you are)。" }
      ]
    },
    {
      id: "trv_s10",
      chinese: "旅行不仅是一种休闲形式，也是一条自我发现的途径",
      english_full: "Traveling is not merely a form of leisure but also an avenue for self-discovery.",
      words: [
        { word: "Traveling" }, { word: "is" }, { word: "not" }, { word: "merely" }, { word: "a" }, { word: "form" }, { word: "of" }, { word: "leisure" },
        { word: "but" }, { word: "also" }, { word: "an" }, { word: "avenue" }, { word: "for" }, { word: "self-discovery", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈtrævəlɪŋ/", translation: "旅行",
          subComponents: [{ startIndex: 0, words: [{ word: "Traveling" }] }]
        },
        {
          start: 1, end: 1, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 2, end: 13, label: "并列表语", phonetic: "/nɒt/ /ˈmɪərli/ /ə/ /fɔːrm/ /ɒv/ /ˈliːʒər/ /bʌt/ /ˈɔːlsoʊ/ /æn/ /ˈævənuː/ /fɔːr/ /sɛlf-dɪˈskʌvəri/", translation: "不仅仅是一种休闲形式，也是自我发现的一条途径",
          subComponents: [
            { startIndex: 0, words: [{ word: "not" }, { word: "merely" }], label: "连词" },
            { startIndex: 2, words: [{ word: "a" }, { word: "form" }, { word: "of" }, { word: "leisure" }], label: "表语1" },
            { startIndex: 6, words: [{ word: "but" }, { word: "also" }], label: "连词" },
            { startIndex: 8, words: [{ word: "an" }, { word: "avenue" }, { word: "for" }, { word: "self-discovery" }], label: "表语2" }
          ]
        }
      ],
      analysis: [
        { type: "固定句型", text: "not merely... but also... 是 not only... but also... 的高级替换。" },
        { type: "隐喻表达", text: "an avenue for... (获得/达到...的途径) 是一种高级比喻；self-discovery (自我发现)。" }
      ]
    }
  ],
  "tech_01": [
    {
      id: "tech_s4",
      chinese: "增强现实技术彻底改变了消费者在网上购物时与产品的互动方式",
      english_full: "Augmented reality technology has revolutionized how consumers interact with products while shopping online.",
      words: [
        { word: "Augmented" }, { word: "reality" }, { word: "technology" }, { word: "has" }, { word: "revolutionized" },
        { word: "how" }, { word: "consumers" }, { word: "interact" }, { word: "with" }, { word: "products" },
        { word: "while" }, { word: "shopping" }, { word: "online", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɔːgˈmɛntɪd/ /riˈæləti/ /tɛkˈnɒlədʒi/", translation: "增强现实技术",
          subComponents: [{ startIndex: 0, words: [{ word: "Augmented" }, { word: "reality" }, { word: "technology" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/hæz/ /ˌrɛvəˈluːʃənaɪzd/", translation: "已经彻底改变了",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] },
            { startIndex: 1, words: [{ word: "revolutionized" }] }
          ]
        },
        {
          start: 5, end: 12, label: "宾语从句", phonetic: "/haʊ/ /kənˈsjuːmərz/ /ˌɪntərˈækt/ /wɪð/ /ˈprɒdʌkts/ /waɪl/ /ˈʃɒpɪŋ/ /ˌɒnˈlaɪn/", translation: "消费者在网上购物时如何与产品互动",
          subComponents: [
            { startIndex: 0, words: [{ word: "how" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "consumers" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "interact" }, { word: "with" }], label: "(从)谓" },
            { startIndex: 4, words: [{ word: "products" }], label: "(从)宾" },
            { startIndex: 5, words: [{ word: "while" }, { word: "shopping" }, { word: "online" }], label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "科技名词", text: "Augmented reality (AR) 即增强现实；revolutionize (彻底改变，使发生革命性剧变)。" },
        { type: "语法重点", text: "how 引导宾语从句作 revolutionized 的宾语。" }
      ]
    },
    {
      id: "tech_s5",
      chinese: "实施双因素身份验证可以极大地降低未经授权访问的风险",
      english_full: "Implementing two-factor authentication can drastically reduce the risk of unauthorized access.",
      words: [
        { word: "Implementing" }, { word: "two-factor" }, { word: "authentication" }, { word: "can" }, { word: "drastically" },
        { word: "reduce" }, { word: "the" }, { word: "risk" }, { word: "of" }, { word: "unauthorized" }, { word: "access", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɪmplɪmɛntɪŋ/ /tuː-ˈfæktər/ /ɔːˌθɛntɪˈkeɪʃən/", translation: "实施双因素身份验证",
          subComponents: [{ startIndex: 0, words: [{ word: "Implementing" }, { word: "two-factor" }, { word: "authentication" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/kæn/ /ˈdræstɪkli/ /rɪˈdjuːs/", translation: "可以极大地降低",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "drastically" }] },
            { startIndex: 2, words: [{ word: "reduce" }] }
          ]
        },
        {
          start: 6, end: 10, label: "宾语", phonetic: "/ðə/ /rɪsk/ /ɒv/ /ʌnˈɔːθəraɪzd/ /ˈæksɛs/", translation: "未经授权访问的风险",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "risk" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "unauthorized" }, { word: "access" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "网络安全词汇", text: "two-factor authentication (双因素/双重身份验证)；unauthorized access (未经授权的访问)。" },
        { type: "高级搭配", text: "drastically reduce (极大/大幅地减少)。" }
      ]
    },
    {
      id: "tech_s6",
      chinese: "算法偏见可能会无意中使数字平台上的社会不平等永久化",
      english_full: "Algorithmic bias may inadvertently perpetuate social inequalities on digital platforms.",
      words: [
        { word: "Algorithmic" }, { word: "bias" }, { word: "may" }, { word: "inadvertently" }, { word: "perpetuate" },
        { word: "social" }, { word: "inequalities" }, { word: "on" }, { word: "digital" }, { word: "platforms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌælgəˈrɪðmɪk/ /ˈbaɪəs/", translation: "算法偏见",
          subComponents: [{ startIndex: 0, words: [{ word: "Algorithmic" }, { word: "bias" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/meɪ/ /ˌɪnədˈvɜːrtəntli/ /pərˈpɛtʃueɪt/", translation: "可能会无意中使...永久化",
          subComponents: [
            { startIndex: 0, words: [{ word: "may" }] },
            { startIndex: 1, words: [{ word: "inadvertently" }] },
            { startIndex: 2, words: [{ word: "perpetuate" }] }
          ]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈsoʊʃəl/ /ˌɪnɪˈkwɒlɪtiz/", translation: "社会不平等",
          subComponents: [{ startIndex: 0, words: [{ word: "social" }, { word: "inequalities" }] }]
        },
        {
          start: 7, end: 9, label: "地点状语", phonetic: "/ɒn/ /ˈdɪdʒɪtəl/ /ˈplætfɔːrmz/", translation: "在数字平台上",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "digital" }, { word: "platforms" }] }]
        }
      ],
      analysis: [
        { type: "高阶词汇", text: "perpetuate (使不朽，使永久化，尤指不好的事物)；inadvertently (无意地，非故意地)。" },
        { type: "AI伦理词汇", text: "algorithmic bias (算法偏见)。" }
      ]
    },
    {
      id: "tech_s7",
      chinese: "开发人员正在不断发布更新，以修补软件应用程序中的漏洞",
      english_full: "Developers are continuously releasing updates to patch vulnerabilities within software applications.",
      words: [
        { word: "Developers" }, { word: "are" }, { word: "continuously" }, { word: "releasing" }, { word: "updates" },
        { word: "to" }, { word: "patch" }, { word: "vulnerabilities" }, { word: "within" }, { word: "software" }, { word: "applications", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/dɪˈvɛləpərz/", translation: "开发人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Developers" }] }]
        },
        {
          start: 1, end: 3, label: "谓语(现进)", phonetic: "/ɑːr/ /kənˈtɪnjuəsli/ /rɪˈliːsɪŋ/", translation: "正在不断地发布",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "continuously" }], label: "状语" },
            { startIndex: 2, words: [{ word: "releasing" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈʌpdeɪts/", translation: "更新",
          subComponents: [{ startIndex: 0, words: [{ word: "updates" }] }]
        },
        {
          start: 5, end: 10, label: "目的状语", phonetic: "/tuː/ /pætʃ/ /ˌvʌlnərəˈbɪlɪtiz/ /wɪˈðɪn/ /ˈsɒftwɛər/ /ˌæplɪˈkeɪʃənz/", translation: "为了修补软件应用程序内部的漏洞",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "patch" }, { word: "vulnerabilities" }] },
            { startIndex: 3, words: [{ word: "within" }, { word: "software" }, { word: "applications" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "IT专有词汇", text: "patch vulnerabilities (修补漏洞/补丁)；release updates (发布更新)。" },
        { type: "同义替换", text: "continuously (连续不断地) 比 always 更加强调动作的不间断性。" }
      ]
    },
    {
      id: "tech_s8",
      chinese: "随着物联网的普及，智能家居设备变得越来越无处不在",
      english_full: "With the proliferation of the Internet of Things, smart home devices are becoming increasingly ubiquitous.",
      words: [
        { word: "With" }, { word: "the" }, { word: "proliferation" }, { word: "of" }, { word: "the" }, { word: "Internet" }, { word: "of" }, { word: "Things", punctuation: "," },
        { word: "smart" }, { word: "home" }, { word: "devices" }, { word: "are" }, { word: "becoming" }, { word: "increasingly" }, { word: "ubiquitous", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "伴随状语", phonetic: "/wɪð/ /ðə/ /prəˌlɪfəˈreɪʃən/ /ɒv/ /ði/ /ˈɪntərnɛt/ /ɒv/ /θɪŋz/", translation: "随着物联网的激增/普及",
          subComponents: [
            { startIndex: 0, words: [{ word: "With" }] },
            { startIndex: 1, words: [{ word: "the" }, { word: "proliferation" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "the" }, { word: "Internet" }, { word: "of" }, { word: "Things" }], label: "后置定语" }
          ]
        },
        {
          start: 8, end: 10, label: "主语", phonetic: "/smɑːrt/ /hoʊm/ /dɪˈvaɪsɪz/", translation: "智能家居设备",
          subComponents: [{ startIndex: 0, words: [{ word: "smart" }, { word: "home" }, { word: "devices" }] }]
        },
        {
          start: 11, end: 12, label: "系动词(现进)", phonetic: "/ɑːr/ /bɪˈkʌmɪŋ/", translation: "正在变得",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "becoming" }] }
          ]
        },
        {
          start: 13, end: 14, label: "表语", phonetic: "/ɪnˈkriːsɪŋli/ /juːˈbɪkwɪtəs/", translation: "越来越无处不在的",
          subComponents: [
            { startIndex: 0, words: [{ word: "increasingly" }] },
            { startIndex: 1, words: [{ word: "ubiquitous" }] }
          ]
        }
      ],
      analysis: [
        { type: "科技专有名词", text: "Internet of Things (IoT，物联网)。" },
        { type: "巅峰词汇", text: "ubiquitous (无所不在的，十分普遍的) 是 everywhere/common 的终极替换；proliferation (激增，普及)。" }
      ]
    }
  ],
  "shopping_01": [
    {
      id: "shop_s4",
      chinese: "虽然网上购物提供了无与伦比的便利，但它缺乏试穿物品的触觉体验",
      english_full: "While online shopping offers unparalleled convenience, it lacks the tactile experience of trying on items.",
      words: [
        { word: "While" }, { word: "online" }, { word: "shopping" }, { word: "offers" }, { word: "unparalleled" }, { word: "convenience", punctuation: "," },
        { word: "it" }, { word: "lacks" }, { word: "the" }, { word: "tactile" }, { word: "experience" }, { word: "of" }, { word: "trying" }, { word: "on" }, { word: "items", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "让步状语从句", phonetic: "/waɪl/ /ˌɒnˈlaɪn/ /ˈʃɒpɪŋ/ /ˈɒfərz/ /ʌnˈpærəlɛld/ /kənˈviːniəns/", translation: "尽管网上购物提供了无与伦比的便利",
          subComponents: [
            { startIndex: 0, words: [{ word: "While" }], label: "连词" },
            { startIndex: 1, words: [{ word: "online" }, { word: "shopping" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "offers" }], label: "(从)谓" },
            { startIndex: 4, words: [{ word: "unparalleled" }, { word: "convenience" }], label: "(从)宾" }
          ]
        },
        {
          start: 6, end: 6, label: "主语", phonetic: "/ɪt/", translation: "它",
          subComponents: [{ startIndex: 0, words: [{ word: "it" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/læks/", translation: "缺乏",
          subComponents: [{ startIndex: 0, words: [{ word: "lacks" }] }]
        },
        {
          start: 8, end: 14, label: "宾语", phonetic: "/ðə/ /ˈtæktəl/ /ɪkˈspɪəriəns/ /ɒv/ /ˈtraɪɪŋ/ /ɒn/ /ˈaɪtəmz/", translation: "试穿物品的触觉体验",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "tactile" }, { word: "experience" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "trying" }, { word: "on" }, { word: "items" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "高级替换", text: "unparalleled (无与伦比的) 替换 great/best；tactile (触觉的，有触感的) 是高级感官词汇。" },
        { type: "语法重点", text: "lack 在英文中通常作及物动词，直接加宾语，不需要加 of (但名词形式 lack of 可以)。" }
      ]
    },
    {
      id: "shop_s5",
      chinese: "这个备受期待的产品一经发布就在几分钟内销售一空",
      english_full: "The highly anticipated product sold out within minutes upon its release.",
      words: [
        { word: "The" }, { word: "highly" }, { word: "anticipated" }, { word: "product" }, { word: "sold" }, { word: "out" },
        { word: "within" }, { word: "minutes" }, { word: "upon" }, { word: "its" }, { word: "release", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈhaɪli/ /ænˈtɪsɪpeɪtɪd/ /ˈprɒdʌkt/", translation: "这个备受期待的产品",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "highly" }, { word: "anticipated" }, { word: "product" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/soʊld/ /aʊt/", translation: "卖完",
          subComponents: [{ startIndex: 0, words: [{ word: "sold" }, { word: "out" }] }]
        },
        {
          start: 6, end: 7, label: "时间状语", phonetic: "/wɪˈðɪn/ /ˈmɪnɪts/", translation: "在几分钟内",
          subComponents: [{ startIndex: 0, words: [{ word: "within" }, { word: "minutes" }] }]
        },
        {
          start: 8, end: 10, label: "时间状语2", phonetic: "/əˈpɒn/ /ɪts/ /rɪˈliːs/", translation: "在它发布时",
          subComponents: [{ startIndex: 0, words: [{ word: "upon" }, { word: "its" }, { word: "release" }] }]
        }
      ],
      analysis: [
        { type: "介词搭配", text: "upon its release 意为“一经发布就...”，upon + noun/doing 表示“一...就...”。" },
        { type: "高级表达", text: "highly anticipated (备受期待的) 是商品营销中的常见词组。" }
      ]
    },
    {
      id: "shop_s6",
      chinese: "零售商经常利用虚假的稀缺性来制造一种紧迫感并刺激销售",
      english_full: "Retailers frequently exploit artificial scarcity to create a sense of urgency and stimulate sales.",
      words: [
        { word: "Retailers" }, { word: "frequently" }, { word: "exploit" }, { word: "artificial" }, { word: "scarcity" },
        { word: "to" }, { word: "create" }, { word: "a" }, { word: "sense" }, { word: "of" }, { word: "urgency" }, { word: "and" }, { word: "stimulate" }, { word: "sales", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "Retailers" }] }]
        },
        {
          start: 1, end: 1, label: "频率状语", phonetic: "/ˈfriːkwəntli/", translation: "经常地",
          subComponents: [{ startIndex: 0, words: [{ word: "frequently" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪkˈsplɔɪt/", translation: "利用，剥削",
          subComponents: [{ startIndex: 0, words: [{ word: "exploit" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ˌɑːrtɪˈfɪʃəl/ /ˈskɛərsɪti/", translation: "人造的/虚假的稀缺性",
          subComponents: [{ startIndex: 0, words: [{ word: "artificial" }, { word: "scarcity" }] }]
        },
        {
          start: 5, end: 13, label: "目的状语", phonetic: "/tuː/ /kriˈeɪt/ /ə/ /sɛns/ /ɒv/ /ˈɜːrdʒənsi/ /ænd/ /ˈstɪmjʊleɪt/ /seɪlz/", translation: "去制造紧迫感并刺激销售",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "create" }, { word: "a" }, { word: "sense" }, { word: "of" }, { word: "urgency" }] },
            { startIndex: 6, words: [{ word: "and" }] },
            { startIndex: 7, words: [{ word: "stimulate" }, { word: "sales" }] }
          ]
        }
      ],
      analysis: [
        { type: "商业心理学词汇", text: "artificial scarcity (虚假/人为稀缺性)；sense of urgency (紧迫感)。" },
        { type: "贬义词中性化", text: "exploit 在这里是中性略带贬义，意为“利用(某种手段牟利)”。" }
      ]
    },
    {
      id: "shop_s7",
      chinese: "忠诚度计划旨在奖励经常光顾的顾客并建立长期的品牌亲和力",
      english_full: "Loyalty programs are designed to reward frequent shoppers and establish long-term brand affinity.",
      words: [
        { word: "Loyalty" }, { word: "programs" }, { word: "are" }, { word: "designed" },
        { word: "to" }, { word: "reward" }, { word: "frequent" }, { word: "shoppers" }, { word: "and" }, { word: "establish" }, { word: "long-term" }, { word: "brand" }, { word: "affinity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈlɔɪəlti/ /ˈproʊgræmz/", translation: "忠诚度计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Loyalty" }, { word: "programs" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(被动)", phonetic: "/ɑːr/ /dɪˈzaɪnd/", translation: "被设计",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }] },
            { startIndex: 1, words: [{ word: "designed" }] }
          ]
        },
        {
          start: 4, end: 12, label: "目的状语", phonetic: "/tuː/ /rɪˈwɔːrd/ /ˈfriːkwənt/ /ˈʃɒpərz/ /ænd/ /ɪˈstæblɪʃ/ /lɒŋ/-/tɜːrm/ /brænd/ /əˈfɪnɪti/", translation: "为了奖励常客并建立长期的品牌亲和力",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "reward" }, { word: "frequent" }, { word: "shoppers" }] },
            { startIndex: 4, words: [{ word: "and" }] },
            { startIndex: 5, words: [{ word: "establish" }, { word: "long-term" }, { word: "brand" }, { word: "affinity" }] }
          ]
        }
      ],
      analysis: [
        { type: "商业营销词汇", text: "loyalty program (会员积分/忠诚度计划)；brand affinity (品牌亲和力，即顾客对品牌的天然喜爱)。" },
        { type: "固定搭配", text: "be designed to do sth (被设计用来做...)。" }
      ]
    },
    {
      id: "shop_s8",
      chinese: "在结算台前放置小商品是鼓励冲动消费的一种常见策略",
      english_full: "Placing small items near the checkout counter is a common tactic to encourage impulse purchases.",
      words: [
        { word: "Placing" }, { word: "small" }, { word: "items" }, { word: "near" }, { word: "the" }, { word: "checkout" }, { word: "counter" },
        { word: "is" }, { word: "a" }, { word: "common" }, { word: "tactic" }, { word: "to" }, { word: "encourage" }, { word: "impulse" }, { word: "purchases", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ˈpleɪsɪŋ/ /smɔːl/ /ˈaɪtəmz/ /nɪər/ /ðə/ /ˈtʃɛkaʊt/ /ˈkaʊntər/", translation: "在结算台附近放置小商品",
          subComponents: [
            { startIndex: 0, words: [{ word: "Placing" }, { word: "small" }, { word: "items" }] },
            { startIndex: 3, words: [{ word: "near" }, { word: "the" }, { word: "checkout" }, { word: "counter" }], label: "地点状语" }
          ]
        },
        {
          start: 7, end: 7, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 8, end: 14, label: "表语", phonetic: "/ə/ /ˈkɒmən/ /ˈtæktɪk/ /tuː/ /ɪnˈkɜːrɪdʒ/ /ˈɪmpʌls/ /ˈpɜːrtʃəsɪz/", translation: "一个用来鼓励冲动消费的常见策略",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "common" }, { word: "tactic" }] },
            { startIndex: 3, words: [{ word: "to" }, { word: "encourage" }, { word: "impulse" }, { word: "purchases" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "实用商业词汇", text: "checkout counter (结账台)；impulse purchase (冲动消费)；tactic (策略，手段)。" },
        { type: "语法重点", text: "to encourage... 是动词不定式作定语，修饰 tactic。" }
      ]
    }
  ],
  "dining_01": [
    {
      id: "din_s4",
      chinese: "这家餐厅温馨的氛围使其成为浪漫晚餐的理想场所",
      english_full: "The restaurant's intimate ambiance makes it an ideal venue for a romantic dinner.",
      words: [
        { word: "The" }, { word: "restaurant's" }, { word: "intimate" }, { word: "ambiance" }, { word: "makes" },
        { word: "it" }, { word: "an" }, { word: "ideal" }, { word: "venue" }, { word: "for" }, { word: "a" }, { word: "romantic" }, { word: "dinner", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈrɛstərɒnts/ /ˈɪntɪmət/ /ˈæmbiəns/", translation: "这家餐厅温馨的氛围",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant's" }, { word: "intimate" }, { word: "ambiance" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/meɪks/", translation: "使",
          subComponents: [{ startIndex: 0, words: [{ word: "makes" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ɪt/", translation: "它",
          subComponents: [{ startIndex: 0, words: [{ word: "it" }] }]
        },
        {
          start: 6, end: 12, label: "宾语补足语", phonetic: "/æn/ /aɪˈdiːəl/ /ˈvɛnjuː/ /fɔːr/ /ə/ /roʊˈmæntɪk/ /ˈdɪnər/", translation: "浪漫晚餐的理想场所",
          subComponents: [
            { startIndex: 0, words: [{ word: "an" }, { word: "ideal" }, { word: "venue" }] },
            { startIndex: 3, words: [{ word: "for" }, { word: "a" }, { word: "romantic" }, { word: "dinner" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "高级词汇", text: "intimate (亲密的，私密的，温馨的) 替换 cozy；ambiance (氛围) 替换 atmosphere；venue (场地，场所) 替换 place。" },
        { type: "句式结构", text: "make + 宾语 + 名词短语(作宾补)。" }
      ]
    },
    {
      id: "din_s5",
      chinese: "我们建议您提前预订，因为这家餐厅在周末经常客满",
      english_full: "We recommend making a reservation in advance as the establishment is frequently fully booked on weekends.",
      words: [
        { word: "We" }, { word: "recommend" }, { word: "making" }, { word: "a" }, { word: "reservation" }, { word: "in" }, { word: "advance" },
        { word: "as" }, { word: "the" }, { word: "establishment" }, { word: "is" }, { word: "frequently" }, { word: "fully" }, { word: "booked" },
        { word: "on" }, { word: "weekends", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主句", phonetic: "/wiː/ /ˌrɛkəˈmɛnd/ /ˈmeɪkɪŋ/ /ə/ /ˌrɛzərˈveɪʃən/ /ɪn/ /ədˈvæns/", translation: "我们建议提前预订",
          subComponents: [
            { startIndex: 0, words: [{ word: "We" }], label: "主语" },
            { startIndex: 1, words: [{ word: "recommend" }], label: "谓语" },
            { startIndex: 2, words: [{ word: "making" }, { word: "a" }, { word: "reservation" }, { word: "in" }, { word: "advance" }], label: "动名词宾语" }
          ]
        },
        {
          start: 7, end: 15, label: "原因状语从句", phonetic: "/æz/ /ði/ /ɪˈstæblɪʃmənt/ /ɪz/ /ˈfriːkwəntli/ /ˈfʊli/ /bʊkt/ /ɒn/ /ˈwiːkɛndz/", translation: "因为该餐厅在周末经常客满",
          subComponents: [
            { startIndex: 0, words: [{ word: "as" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "establishment" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "is" }, { word: "frequently" }, { word: "fully" }, { word: "booked" }], label: "(从)谓" },
            { startIndex: 7, words: [{ word: "on" }, { word: "weekends" }], label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "语法重点", text: "recommend doing sth (建议做某事)，后面必须接动名词作宾语，不能加 to do。" },
        { type: "高级替换", text: "establishment (机构，企业) 在这里高级替换了 restaurant。" }
      ]
    },
    {
      id: "din_s6",
      chinese: "素食主义的兴起促使许多餐馆改进了他们的菜单产品",
      english_full: "The rise of veganism has prompted many eateries to revamp their menu offerings.",
      words: [
        { word: "The" }, { word: "rise" }, { word: "of" }, { word: "veganism" }, { word: "has" }, { word: "prompted" },
        { word: "many" }, { word: "eateries" }, { word: "to" }, { word: "revamp" }, { word: "their" }, { word: "menu" }, { word: "offerings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /raɪz/ /ɒv/ /ˈviːgənɪzəm/", translation: "素食主义的兴起",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "rise" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "veganism" }], label: "后置定语" }
          ]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/hæz/ /ˈprɒmptɪd/", translation: "已经促使",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "prompted" }], label: "实义动词" }
          ]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈmɛni/ /ˈiːtəriz/", translation: "许多餐馆",
          subComponents: [{ startIndex: 0, words: [{ word: "many" }, { word: "eateries" }] }]
        },
        {
          start: 8, end: 12, label: "宾语补足语", phonetic: "/tuː/ /riˈvæmp/ /ðɛər/ /ˈmɛnjuː/ /ˈɒfərɪŋz/", translation: "去改进他们的菜单产品",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "revamp" }] },
            { startIndex: 2, words: [{ word: "their" }, { word: "menu" }, { word: "offerings" }] }
          ]
        }
      ],
      analysis: [
        { type: "雅思好词", text: "veganism (纯素食主义)；eatery (餐馆，小饭馆)；revamp (翻新，修改，改进) 替换 improve/change。" },
        { type: "句型结构", text: "prompt sb to do sth (促使某人做某事)。" }
      ]
    },
    {
      id: "din_s7",
      chinese: "美食评论家称赞这道菜完美融合了酸味和咸味",
      english_full: "The food critic praised the dish for its perfect amalgamation of tart and savory flavors.",
      words: [
        { word: "The" }, { word: "food" }, { word: "critic" }, { word: "praised" }, { word: "the" }, { word: "dish" },
        { word: "for" }, { word: "its" }, { word: "perfect" }, { word: "amalgamation" }, { word: "of" }, { word: "tart" }, { word: "and" }, { word: "savory" }, { word: "flavors", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /fuːd/ /ˈkrɪtɪk/", translation: "这位美食评论家",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "food" }, { word: "critic" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/preɪzd/", translation: "称赞",
          subComponents: [{ startIndex: 0, words: [{ word: "praised" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ðə/ /dɪʃ/", translation: "这道菜",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "dish" }] }]
        },
        {
          start: 6, end: 14, label: "原因状语", phonetic: "/fɔːr/ /ɪts/ /ˈpɜːrfɪkt/ /əˌmælgəˈmeɪʃən/ /ɒv/ /tɑːrt/ /ænd/ /ˈseɪvəri/ /ˈfleɪvərz/", translation: "因为它酸味和咸味的完美融合",
          subComponents: [
            { startIndex: 0, words: [{ word: "for" }] },
            { startIndex: 1, words: [{ word: "its" }, { word: "perfect" }, { word: "amalgamation" }] },
            { startIndex: 4, words: [{ word: "of" }, { word: "tart" }, { word: "and" }, { word: "savory" }, { word: "flavors" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "极致替换", text: "amalgamation (融合，混合) 是 combination/mix 的极致学术替换。" },
        { type: "味觉词汇", text: "tart (酸的，有果酸味的)；savory (咸的，香薄荷味的，指非甜味的菜肴)。" }
      ]
    },
    {
      id: "din_s8",
      chinese: "留小费的惯例因文化而异，可能会让国际游客感到困惑",
      english_full: "The convention of leaving a gratuity varies across cultures and can be perplexing for international tourists.",
      words: [
        { word: "The" }, { word: "convention" }, { word: "of" }, { word: "leaving" }, { word: "a" }, { word: "gratuity" },
        { word: "varies" }, { word: "across" }, { word: "cultures" }, { word: "and" }, { word: "can" }, { word: "be" }, { word: "perplexing" }, { word: "for" }, { word: "international" }, { word: "tourists", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /kənˈvɛnʃən/ /ɒv/ /ˈliːvɪŋ/ /ə/ /grəˈtjuːɪti/", translation: "留小费的惯例",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "convention" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "leaving" }, { word: "a" }, { word: "gratuity" }], label: "后置定语" }
          ]
        },
        {
          start: 6, end: 8, label: "谓语及状语1", phonetic: "/ˈvɛəriz/ /əˈkrɒs/ /ˈkʌltʃərz/", translation: "因文化而异",
          subComponents: [
            { startIndex: 0, words: [{ word: "varies" }], label: "谓语" },
            { startIndex: 1, words: [{ word: "across" }, { word: "cultures" }], label: "地点状语" }
          ]
        },
        {
          start: 9, end: 15, label: "并列谓语2", phonetic: "/ænd/ /kæn/ /bi/ /pərˈplɛksɪŋ/ /fɔːr/ /ˌɪntərˈnæʃənəl/ /ˈtʊərɪsts/", translation: "并且对国际游客来说可能是令人困惑的",
          subComponents: [
            { startIndex: 0, words: [{ word: "and" }], label: "连词" },
            { startIndex: 1, words: [{ word: "can" }, { word: "be" }, { word: "perplexing" }], label: "系表结构" },
            { startIndex: 4, words: [{ word: "for" }, { word: "international" }, { word: "tourists" }], label: "对象状语" }
          ]
        }
      ],
      analysis: [
        { type: "高级替换", text: "convention (惯例，习俗) 替换 custom；gratuity (小费/赏钱) 是 tip 的正式词；perplexing (令人困惑的) 替换 confusing。" },
        { type: "语法结构", text: "主语 The convention 后接两个由 and 连接的并列谓语 varies 和 can be perplexing。" }
      ]
    }
  ]
};
