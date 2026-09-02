export const extensions = {
  "module_basic": [
    {
      id: "q_basic_sv_1",
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
          subComponents: [
            { startIndex: 0, words: [{ word: "due" }, { word: "to" }] },
            { startIndex: 2, words: [{ word: "increased" }, { word: "life" }, { word: "expectancy" }] }
          ]
        }
      ],
      analysis: [
        { type: "基本句型", text: "主谓结构 (S + V)。aging 在此是不及物动词。" },
        { type: "雅思词汇", text: "life expectancy (预期寿命)；aging population (老龄化人口)。" }
      ]
    },
    {
      id: "q_basic_sv_2",
      chinese: "在过去的一个世纪里，我们对宇宙的理解发生了显著的演变",
      english_full: "Our understanding of the universe has evolved significantly over the past century.",
      words: [
        { word: "Our" }, { word: "understanding" }, { word: "of" }, { word: "the" }, { word: "universe" },
        { word: "has" }, { word: "evolved" }, { word: "significantly" }, { word: "over" }, { word: "the" }, { word: "past" }, { word: "century", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/aʊər/ /ˌʌndərˈstændɪŋ/ /ɒv/ /ðə/ /ˈjuːnɪvɜːrs/", translation: "我们对宇宙的理解",
          subComponents: [
            { startIndex: 0, words: [{ word: "Our" }, { word: "understanding" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "the" }, { word: "universe" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 6, label: "谓语", phonetic: "/hæz/ /ɪˈvɒlvd/", translation: "已经演变",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] },
            { startIndex: 1, words: [{ word: "evolved" }] }
          ]
        },
        {
          start: 7, end: 7, label: "状语", phonetic: "/sɪgˈnɪfɪkəntli/", translation: "显著地",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }] }]
        },
        {
          start: 8, end: 11, label: "时间状语", phonetic: "/ˈoʊvər/ /ðə/ /pæst/ /ˈsɛntʃʊri/", translation: "在过去的一个世纪期间",
          subComponents: [{ startIndex: 0, words: [{ word: "over" }, { word: "the" }, { word: "past" }, { word: "century" }] }]
        }
      ],
      analysis: [
        { type: "基本句型", text: "主谓结构 (S + V)。evolve 在此为不及物动词。" },
        { type: "搭配替换", text: "evolve significantly (显著演变/发展)，常用于科技、历史等话题。" }
      ]
    },
    {
      id: "q_basic_sv_3",
      chinese: "在意料之外的经济衰退之后，该公司的利润暴跌",
      english_full: "The company's profits plummeted following the unexpected economic downturn.",
      words: [
        { word: "The" }, { word: "company's" }, { word: "profits" }, { word: "plummeted" }, { word: "following" },
        { word: "the" }, { word: "unexpected" }, { word: "economic" }, { word: "downturn", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkʌmpəniz/ /ˈprɒfɪts/", translation: "该公司的利润",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "company's" }, { word: "profits" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈplʌmɪtɪd/", translation: "暴跌",
          subComponents: [{ startIndex: 0, words: [{ word: "plummeted" }] }]
        },
        {
          start: 4, end: 8, label: "时间状语", phonetic: "/ˈfɒloʊɪŋ/ /ði/ /ˌʌnɪkˈspɛktɪd/ /ˌiːkəˈnɒmɪk/ /ˈdaʊntɜːrn/", translation: "在意料之外的经济衰退之后",
          subComponents: [
            { startIndex: 0, words: [{ word: "following" }] },
            { startIndex: 1, words: [{ word: "the" }, { word: "unexpected" }, { word: "economic" }, { word: "downturn" }] }
          ]
        }
      ],
      analysis: [
        { type: "动词进阶", text: "plummet (垂直落下，暴跌) 是 decrease 的满分替换词。" },
        { type: "介词用法", text: "following 在此作介词，相当于 after。" }
      ]
    },
    {
      id: "q_basic_svp_1",
      chinese: "在各个行业中，人工智能的实施似乎是不可避免的",
      english_full: "The implementation of artificial intelligence seems inevitable across various industries.",
      words: [
        { word: "The" }, { word: "implementation" }, { word: "of" }, { word: "artificial" }, { word: "intelligence" },
        { word: "seems" }, { word: "inevitable" }, { word: "across" }, { word: "various" }, { word: "industries", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ði/ /ˌɪmplɪmɛnˈteɪʃən/ /ɒv/ /ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/", translation: "人工智能的实施",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "implementation" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "artificial" }, { word: "intelligence" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 5, label: "系动词", phonetic: "/siːmz/", translation: "似乎是",
          subComponents: [{ startIndex: 0, words: [{ word: "seems" }] }]
        },
        {
          start: 6, end: 6, label: "表语", phonetic: "/ɪˈnɛvɪtəbəl/", translation: "不可避免的",
          subComponents: [{ startIndex: 0, words: [{ word: "inevitable" }] }]
        },
        {
          start: 7, end: 9, label: "地点状语", phonetic: "/əˈkrɒs/ /ˈvɛəriəs/ /ˈɪndəstriz/", translation: "在各个行业中",
          subComponents: [{ startIndex: 0, words: [{ word: "across" }, { word: "various" }, { word: "industries" }] }]
        }
      ],
      analysis: [
        { type: "基本句型", text: "主系表结构 (S + V + P)。seem 充当系动词。" },
        { type: "高级词汇", text: "inevitable (不可避免的) 是 must-happen 的高级学术词汇。" }
      ]
    },
    {
      id: "q_basic_svp_2",
      chinese: "获得清洁饮用水在许多发展中国家仍然是一个紧迫的问题",
      english_full: "Access to clean water remains a pressing issue in many developing nations.",
      words: [
        { word: "Access" }, { word: "to" }, { word: "clean" }, { word: "water" }, { word: "remains" },
        { word: "a" }, { word: "pressing" }, { word: "issue" }, { word: "in" }, { word: "many" }, { word: "developing" }, { word: "nations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈæksɛs/ /tuː/ /kliːn/ /ˈwɔːtər/", translation: "获得清洁水的途径",
          subComponents: [
            { startIndex: 0, words: [{ word: "Access" }] },
            { startIndex: 1, words: [{ word: "to" }, { word: "clean" }, { word: "water" }], label: "后置定语" }
          ]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/rɪˈmeɪnz/", translation: "仍然是",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 5, end: 7, label: "表语", phonetic: "/ə/ /ˈprɛsɪŋ/ /ˈɪʃuː/", translation: "一个紧迫的问题",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "pressing" }, { word: "issue" }] }]
        },
        {
          start: 8, end: 11, label: "地点状语", phonetic: "/ɪn/ /ˈmɛni/ /dɪˈvɛləpɪŋ/ /ˈneɪʃənz/", translation: "在许多发展中国家",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "many" }, { word: "developing" }, { word: "nations" }] }]
        }
      ],
      analysis: [
        { type: "基本句型", text: "主系表结构。remain 意为“保持，依然是”，充当系动词。" },
        { type: "搭配解析", text: "pressing issue (紧迫的问题) 替换 urgent problem。" }
      ]
    },
    {
      id: "q_basic_svp_3",
      chinese: "首席执行官的演讲在年度股东大会上非常有说服力",
      english_full: "The CEO's speech was remarkably persuasive during the annual shareholder meeting.",
      words: [
        { word: "The" }, { word: "CEO's" }, { word: "speech" }, { word: "was" }, { word: "remarkably" }, { word: "persuasive" },
        { word: "during" }, { word: "the" }, { word: "annual" }, { word: "shareholder" }, { word: "meeting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌsiːˌiːˈoʊz/ /spiːtʃ/", translation: "首席执行官的演讲",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "CEO's" }, { word: "speech" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/wɒz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }] }]
        },
        {
          start: 4, end: 5, label: "表语", phonetic: "/rɪˈmɑːrkəbli/ /pərˈsweɪsɪv/", translation: "非常有说服力的",
          subComponents: [{ startIndex: 0, words: [{ word: "remarkably" }, { word: "persuasive" }] }]
        },
        {
          start: 6, end: 10, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /ˈænjuəl/ /ˈʃɛərˌhoʊldər/ /ˈmiːtɪŋ/", translation: "在年度股东大会期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "annual" }, { word: "shareholder" }, { word: "meeting" }] }]
        }
      ],
      analysis: [
        { type: "商务词汇", text: "shareholder (股东)；annual meeting (年会)。" },
        { type: "形容词强化", text: "remarkably persuasive 意为“极其有说服力的”，remarkably 是 very 的高级词。" }
      ]
    },
    {
      id: "q_basic_svp_4",
      chinese: "向电动汽车的转型对于减少碳排放似乎势在必行",
      english_full: "The transition to electric vehicles appears imperative for reducing carbon emissions.",
      words: [
        { word: "The" }, { word: "transition" }, { word: "to" }, { word: "electric" }, { word: "vehicles" },
        { word: "appears" }, { word: "imperative" }, { word: "for" }, { word: "reducing" }, { word: "carbon" }, { word: "emissions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /trænˈzɪʃən/ /tuː/ /ɪˈlɛktrɪk/ /ˈviːɪkəlz/", translation: "向电动汽车的转型",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "transition" }] },
            { startIndex: 2, words: [{ word: "to" }, { word: "electric" }, { word: "vehicles" }], label: "后置定语" }
          ]
        },
        {
          start: 5, end: 5, label: "系动词", phonetic: "/əˈpɪərz/", translation: "似乎",
          subComponents: [{ startIndex: 0, words: [{ word: "appears" }] }]
        },
        {
          start: 6, end: 6, label: "表语", phonetic: "/ɪmˈpɛrətɪv/", translation: "势在必行的",
          subComponents: [{ startIndex: 0, words: [{ word: "imperative" }] }]
        },
        {
          start: 7, end: 10, label: "目的状语", phonetic: "/fɔːr/ /rɪˈdjuːsɪŋ/ /ˈkɑːrbən/ /ɪˈmɪʃənz/", translation: "为了减少碳排放",
          subComponents: [
            { startIndex: 0, words: [{ word: "for" }] },
            { startIndex: 1, words: [{ word: "reducing" }, { word: "carbon" }, { word: "emissions" }], label: "介词宾语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型", text: "主系表结构。appear (似乎，显得) 作系动词。" },
        { type: "高级词汇", text: "imperative (至关重要的，势在必行的)。" }
      ]
    },
    {
      id: "q_basic_svo_1",
      chinese: "研究人员对可再生能源解决方案进行了一项详尽的研究",
      english_full: "The researchers conducted an exhaustive study on renewable energy solutions.",
      words: [
        { word: "The" }, { word: "researchers" }, { word: "conducted" }, { word: "an" }, { word: "exhaustive" }, { word: "study" },
        { word: "on" }, { word: "renewable" }, { word: "energy" }, { word: "solutions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /rɪˈsɜːrtʃərz/", translation: "研究人员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "researchers" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/kənˈdʌktɪd/", translation: "进行了",
          subComponents: [{ startIndex: 0, words: [{ word: "conducted" }] }]
        },
        {
          start: 3, end: 9, label: "宾语", phonetic: "/æn/ /ɪgˈzɔːstɪv/ /ˈstʌdi/ /ɒn/ /rɪˈnuːəbəl/ /ˈɛnərdʒi/ /səˈluːʃənz/", translation: "一项关于可再生能源解决方案的详尽研究",
          subComponents: [
            { startIndex: 0, words: [{ word: "an" }, { word: "exhaustive" }, { word: "study" }] },
            { startIndex: 3, words: [{ word: "on" }, { word: "renewable" }, { word: "energy" }, { word: "solutions" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "基本句型", text: "主谓宾 (S + V + O)。conduct a study (进行研究) 是极其地道的学术搭配。" },
        { type: "修饰提升", text: "exhaustive (详尽的，彻底的) 替换 thorough 或 detailed。" }
      ]
    },
    {
      id: "q_basic_svo_2",
      chinese: "政府采取了严格的措施来打击不断上升的通货膨胀率",
      english_full: "The government introduced stringent measures to combat rising inflation rates.",
      words: [
        { word: "The" }, { word: "government" }, { word: "introduced" }, { word: "stringent" }, { word: "measures" },
        { word: "to" }, { word: "combat" }, { word: "rising" }, { word: "inflation" }, { word: "rates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈgʌvərnmənt/", translation: "政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "government" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˌɪntrəˈdjuːst/", translation: "引入/采取了",
          subComponents: [{ startIndex: 0, words: [{ word: "introduced" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ˈstrɪndʒənt/ /ˈmɛʒərz/", translation: "严格的措施",
          subComponents: [{ startIndex: 0, words: [{ word: "stringent" }, { word: "measures" }] }]
        },
        {
          start: 5, end: 9, label: "目的状语", phonetic: "/tuː/ /ˈkɒmbæt/ /ˈraɪzɪŋ/ /ɪnˈfleɪʃən/ /reɪts/", translation: "为了打击上升的通货膨胀率",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "combat" }] },
            { startIndex: 2, words: [{ word: "rising" }, { word: "inflation" }, { word: "rates" }] }
          ]
        }
      ],
      analysis: [
        { type: "高级搭配", text: "introduce measures (采取/引入措施)；combat inflation (打击/抗击通胀)。" }
      ]
    },
    {
      id: "q_basic_svo_3",
      chinese: "现代科技已经彻底改变了我们互相交流的方式",
      english_full: "Modern technology has revolutionized the way we communicate with each other.",
      words: [
        { word: "Modern" }, { word: "technology" }, { word: "has" }, { word: "revolutionized" }, { word: "the" }, { word: "way" },
        { word: "we" }, { word: "communicate" }, { word: "with" }, { word: "each" }, { word: "other", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈmɒdərn/ /tɛkˈnɒlədʒi/", translation: "现代科技",
          subComponents: [{ startIndex: 0, words: [{ word: "Modern" }, { word: "technology" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(现完)", phonetic: "/hæz/ /ˌrɛvəˈluːʃənaɪzd/", translation: "已经彻底改变",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] },
            { startIndex: 1, words: [{ word: "revolutionized" }] }
          ]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/ðə/ /weɪ/ /wi/ /kəˈmjuːnɪkeɪt/ /wɪð/ /iːtʃ/ /ˈʌðər/", translation: "我们互相交流的方式",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "way" }] },
            { startIndex: 2, words: [{ word: "we" }, { word: "communicate" }, { word: "with" }, { word: "each" }, { word: "other" }], label: "定语从句" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "the way 后省略了 in which 或 that，we communicate... 为定语从句修饰 the way。" },
        { type: "词汇用法", text: "revolutionize (彻底改变) 替换 change completely。" }
      ]
    },
    {
      id: "q_basic_svoo_1",
      chinese: "主管给这个新成立的团队分配了一个具有挑战性的项目",
      english_full: "The supervisor assigned the newly formed team a challenging project.",
      words: [
        { word: "The" }, { word: "supervisor" }, { word: "assigned" }, { word: "the" }, { word: "newly" }, { word: "formed" }, { word: "team" },
        { word: "a" }, { word: "challenging" }, { word: "project", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsuːpərvaɪzər/", translation: "主管",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "supervisor" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈsaɪnd/", translation: "分配",
          subComponents: [{ startIndex: 0, words: [{ word: "assigned" }] }]
        },
        {
          start: 3, end: 6, label: "间接宾语", phonetic: "/ðə/ /ˈnjuːli/ /fɔːrmd/ /tiːm/", translation: "这个新成立的团队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "newly" }, { word: "formed" }, { word: "team" }] }]
        },
        {
          start: 7, end: 9, label: "直接宾语", phonetic: "/ə/ /ˈtʃælɪndʒɪŋ/ /ˈprɒdʒɛkt/", translation: "一个具有挑战性的项目",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "challenging" }, { word: "project" }] }]
        }
      ],
      analysis: [
        { type: "双宾语结构", text: "assign sb sth (给某人分配某物)。team 是间接宾语，project 是直接宾语。" },
        { type: "职场词汇", text: "supervisor (主管)；newly formed (新成立的，复合形容词)。" }
      ]
    },
    {
      id: "q_basic_svoo_2",
      chinese: "经验教会了人们关于韧性和坚持不懈的宝贵教训",
      english_full: "Experience teaches individuals valuable lessons about resilience and perseverance.",
      words: [
        { word: "Experience" }, { word: "teaches" }, { word: "individuals" }, { word: "valuable" }, { word: "lessons" },
        { word: "about" }, { word: "resilience" }, { word: "and" }, { word: "perseverance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ɪkˈspɪəriəns/", translation: "经验",
          subComponents: [{ startIndex: 0, words: [{ word: "Experience" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ˈtiːtʃɪz/", translation: "教授",
          subComponents: [{ startIndex: 0, words: [{ word: "teaches" }] }]
        },
        {
          start: 2, end: 2, label: "间接宾语", phonetic: "/ˌɪndɪˈvɪdʒuəlz/", translation: "个人/人们",
          subComponents: [{ startIndex: 0, words: [{ word: "individuals" }] }]
        },
        {
          start: 3, end: 8, label: "直接宾语", phonetic: "/ˈvæljuəbəl/ /ˈlɛsənz/ /əˈbaʊt/ /rɪˈzɪliəns/ /ænd/ /ˌpɜːrsɪˈvɪərəns/", translation: "关于韧性和坚持不懈的宝贵教训",
          subComponents: [
            { startIndex: 0, words: [{ word: "valuable" }, { word: "lessons" }] },
            { startIndex: 2, words: [{ word: "about" }, { word: "resilience" }, { word: "and" }, { word: "perseverance" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "双宾语结构", text: "teach sb sth (教某人某事)。individuals 是 IO，lessons 是 DO。" },
        { type: "精神词汇", text: "resilience (韧性，恢复力)；perseverance (毅力，坚持不懈)。" }
      ]
    },
    {
      id: "q_basic_svoc_1",
      chinese: "董事会任命这位经验丰富的高管为公司的首席执行官",
      english_full: "The board of directors appointed the seasoned executive CEO of the company.",
      words: [
        { word: "The" }, { word: "board" }, { word: "of" }, { word: "directors" }, { word: "appointed" }, { word: "the" }, { word: "seasoned" }, { word: "executive" },
        { word: "CEO" }, { word: "of" }, { word: "the" }, { word: "company", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /bɔːrd/ /ɒv/ /dɪˈrɛktərz/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }, { word: "of" }, { word: "directors" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈpɔɪntɪd/", translation: "任命",
          subComponents: [{ startIndex: 0, words: [{ word: "appointed" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ðə/ /ˈsiːzənd/ /ɪgˈzɛkjʊtɪv/", translation: "这位经验丰富的高管",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "seasoned" }, { word: "executive" }] }]
        },
        {
          start: 8, end: 11, label: "宾语补足语", phonetic: "/ˌsiːˌiːˈoʊ/ /ɒv/ /ðə/ /ˈkʌmpəni/", translation: "公司的首席执行官",
          subComponents: [{ startIndex: 0, words: [{ word: "CEO" }, { word: "of" }, { word: "the" }, { word: "company" }] }]
        }
      ],
      analysis: [
        { type: "基本句型", text: "S + V + O + C。appoint sb + 职位 (任命某人为...)。CEO 补充说明宾语的身份。" },
        { type: "商务词汇", text: "seasoned executive (经验丰富的高管)；board of directors (董事会)。" }
      ]
    },
    {
      id: "q_basic_svoc_2",
      chinese: "陪审团在漫长的审判后裁定被告所有指控成立",
      english_full: "The jury found the defendant guilty of all charges after a lengthy trial.",
      words: [
        { word: "The" }, { word: "jury" }, { word: "found" }, { word: "the" }, { word: "defendant" }, { word: "guilty" }, { word: "of" }, { word: "all" }, { word: "charges" },
        { word: "after" }, { word: "a" }, { word: "lengthy" }, { word: "trial", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈdʒʊəri/", translation: "陪审团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "jury" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/faʊnd/", translation: "裁定/发现",
          subComponents: [{ startIndex: 0, words: [{ word: "found" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /dɪˈfɛndənt/", translation: "被告",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "defendant" }] }]
        },
        {
          start: 5, end: 8, label: "宾语补足语", phonetic: "/ˈgɪlti/ /ɒv/ /ɔːl/ /ˈtʃɑːrdʒɪz/", translation: "对所有指控有罪",
          subComponents: [
            { startIndex: 0, words: [{ word: "guilty" }] },
            { startIndex: 1, words: [{ word: "of" }, { word: "all" }, { word: "charges" }], label: "补充说明" }
          ]
        },
        {
          start: 9, end: 12, label: "时间状语", phonetic: "/ˈæftər/ /ə/ /ˈlɛŋθi/ /ˈtraɪəl/", translation: "在漫长的审判后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "a" }, { word: "lengthy" }, { word: "trial" }] }]
        }
      ],
      analysis: [
        { type: "基本句型", text: "find sb adj. (裁定某人处于某种状态)。guilty 作宾补。" },
        { type: "法律术语", text: "defendant (被告)；jury (陪审团)；find sb guilty of (裁定某人犯有...罪)。" }
      ]
    },
    {
      id: "q_basic_svoc_3",
      chinese: "过度的压力会使最能干的员工也变得筋疲力尽",
      english_full: "Excessive stress can render even the most capable employee completely exhausted.",
      words: [
        { word: "Excessive" }, { word: "stress" }, { word: "can" }, { word: "render" }, { word: "even" }, { word: "the" }, { word: "most" }, { word: "capable" }, { word: "employee" },
        { word: "completely" }, { word: "exhausted", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪkˈsɛsɪv/ /strɛs/", translation: "过度的压力",
          subComponents: [{ startIndex: 0, words: [{ word: "Excessive" }, { word: "stress" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/kæn/ /ˈrɛndər/", translation: "可以使...变得",
          subComponents: [
            { startIndex: 0, words: [{ word: "can" }] },
            { startIndex: 1, words: [{ word: "render" }] }
          ]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ˈiːvən/ /ðə/ /moʊst/ /ˈkeɪpəbəl/ /ɪmˈplɔɪiː/", translation: "即使是最能干的员工",
          subComponents: [{ startIndex: 0, words: [{ word: "even" }, { word: "the" }, { word: "most" }, { word: "capable" }, { word: "employee" }] }]
        },
        {
          start: 9, end: 10, label: "宾语补足语", phonetic: "/kəmˈpliːtli/ /ɪgˈzɔːstɪd/", translation: "完全精疲力竭",
          subComponents: [{ startIndex: 0, words: [{ word: "completely" }, { word: "exhausted" }] }]
        }
      ],
      analysis: [
        { type: "高级句型", text: "render sb/sth + adj. (使...变得...)，是 make 的极高级替换，常用于正式写作。" }
      ]
    },
    {
      id: "q_basic_svoc_4",
      chinese: "许多专家认为生物技术的快速发展是一把双刃剑",
      english_full: "Many experts consider the rapid advancement of biotechnology a double-edged sword.",
      words: [
        { word: "Many" }, { word: "experts" }, { word: "consider" }, { word: "the" }, { word: "rapid" }, { word: "advancement" }, { word: "of" }, { word: "biotechnology" },
        { word: "a" }, { word: "double-edged" }, { word: "sword", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈmɛni/ /ˈɛkspɜːrts/", translation: "许多专家",
          subComponents: [{ startIndex: 0, words: [{ word: "Many" }, { word: "experts" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/kənˈsɪdər/", translation: "认为",
          subComponents: [{ startIndex: 0, words: [{ word: "consider" }] }]
        },
        {
          start: 3, end: 7, label: "宾语", phonetic: "/ðə/ /ˈræpɪd/ /ədˈvænsmənt/ /ɒv/ /ˌbaɪoʊtɛkˈnɒlədʒi/", translation: "生物技术的快速发展",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "rapid" }, { word: "advancement" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "biotechnology" }], label: "后置定语" }
          ]
        },
        {
          start: 8, end: 10, label: "宾语补足语", phonetic: "/ə/ /ˈdʌbəl-ɛdʒd/ /sɔːrd/", translation: "一把双刃剑",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "double-edged" }, { word: "sword" }] }]
        }
      ],
      analysis: [
        { type: "基本句型", text: "consider A B (认为A是B)，B作为名词短语充当宾补。" },
        { type: "地道表达", text: "double-edged sword (双刃剑) 是探讨科技、政策利弊时的常用比喻。" }
      ]
    },
    {
      id: "q_basic_tb_1",
      chinese: "消费者偏好已经明显向可持续产品转变",
      english_full: "There has been a noticeable shift in consumer preferences towards sustainable products.",
      words: [
        { word: "There" }, { word: "has" }, { word: "been" }, { word: "a" }, { word: "noticeable" }, { word: "shift" }, { word: "in" }, { word: "consumer" }, { word: "preferences" },
        { word: "towards" }, { word: "sustainable" }, { word: "products", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "引导词", phonetic: "/ðɛər/", translation: "无实义",
          subComponents: [{ startIndex: 0, words: [{ word: "There" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/hæz/ /bɪn/", translation: "已经有了/存在",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }] }]
        },
        {
          start: 3, end: 11, label: "真正主语", phonetic: "/ə/ /ˈnoʊtɪsəbəl/ /ʃɪft/ /ɪn/ /kənˈsjuːmər/ /ˈprɛfərənsɪz/ /təˈwɔːrdz/ /səˈsteɪnəbəl/ /ˈprɒdʌkts/", translation: "消费者偏好向可持续产品的明显转变",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "noticeable" }, { word: "shift" }] },
            { startIndex: 3, words: [{ word: "in" }, { word: "consumer" }, { word: "preferences" }], label: "后置定语1" },
            { startIndex: 6, words: [{ word: "towards" }, { word: "sustainable" }, { word: "products" }], label: "后置定语2" }
          ]
        }
      ],
      analysis: [
        { type: "There be 句型", text: "There be 的现在完成时态 There has been，强调过去发生并持续到现在的存在状态。" },
        { type: "高级名词", text: "consumer preferences (消费者偏好)；a shift in/towards... (向...的转变)。" }
      ]
    },
    {
      id: "q_basic_tb_2",
      chinese: "心理健康与身体健康之间存在着深刻的联系",
      english_full: "There exists a profound connection between mental well-being and physical health.",
      words: [
        { word: "There" }, { word: "exists" }, { word: "a" }, { word: "profound" }, { word: "connection" },
        { word: "between" }, { word: "mental" }, { word: "well-being" }, { word: "and" }, { word: "physical" }, { word: "health", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "引导词", phonetic: "/ðɛər/", translation: "无实义",
          subComponents: [{ startIndex: 0, words: [{ word: "There" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ɪgˈzɪsts/", translation: "存在",
          subComponents: [{ startIndex: 0, words: [{ word: "exists" }] }]
        },
        {
          start: 2, end: 10, label: "真正主语", phonetic: "/ə/ /prəˈfaʊnd/ /kəˈnɛkʃən/ /bɪˈtwiːn/ /ˈmɛntəl/ /wɛl/-/ˈbiːɪŋ/ /ænd/ /ˈfɪzɪkəl/ /hɛlθ/", translation: "心理和身体健康之间的深刻联系",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "profound" }, { word: "connection" }] },
            { startIndex: 3, words: [{ word: "between" }, { word: "mental" }, { word: "well-being" }, { word: "and" }, { word: "physical" }, { word: "health" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "存在句变形", text: "There exist... 句型是 There be 句型的高级替换，更具书面语色彩。" },
        { type: "用词精准", text: "profound connection (深刻的联系)；mental well-being (心理健康)。" }
      ]
    },
    {
      id: "q_basic_tb_3",
      chinese: "城乡地区在教育资源上仍然存在显著差异",
      english_full: "There remains a significant disparity in educational resources between urban and rural areas.",
      words: [
        { word: "There" }, { word: "remains" }, { word: "a" }, { word: "significant" }, { word: "disparity" },
        { word: "in" }, { word: "educational" }, { word: "resources" }, { word: "between" }, { word: "urban" }, { word: "and" }, { word: "rural" }, { word: "areas", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "引导词", phonetic: "/ðɛər/", translation: "无实义",
          subComponents: [{ startIndex: 0, words: [{ word: "There" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/rɪˈmeɪnz/", translation: "仍然存在",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 2, end: 12, label: "真正主语", phonetic: "/ə/ /sɪgˈnɪfɪkənt/ /dɪˈspærɪti/ /ɪn/ /ˌɛdʒʊˈkeɪʃənəl/ /ˈriːsɔːrsɪz/ /bɪˈtwiːn/ /ˈɜːrbən/ /ænd/ /ˈrʊərəl/ /ˈɛəriəz/", translation: "城乡间教育资源的显著差异",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "significant" }, { word: "disparity" }] },
            { startIndex: 3, words: [{ word: "in" }, { word: "educational" }, { word: "resources" }], label: "范围定语" },
            { startIndex: 6, words: [{ word: "between" }, { word: "urban" }, { word: "and" }, { word: "rural" }, { word: "areas" }], label: "地点定语" }
          ]
        }
      ],
      analysis: [
        { type: "存在句变形", text: "There remains... (仍然存在...)，常用于探讨尚未解决的社会问题。" },
        { type: "学术名词", text: "disparity (悬殊的差异，不平等) 是 difference 的顶级学术替换；urban and rural (城市与乡村)。" }
      ]
    }
  ]
};