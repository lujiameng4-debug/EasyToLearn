export const extensions = {
  "module_relative": [
    {
      id: "q_relative_2",
      chinese: "刚才打电话给你的那个人是我以前的同事",
      english_full: "The man who called you just now is my former colleague.",
      words: [
        { word: "The" }, { word: "man" }, { word: "who" }, { word: "called" }, { word: "you" }, { word: "just" }, { word: "now" },
        { word: "is" }, { word: "my" }, { word: "former" }, { word: "colleague", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /mæn/", translation: "那个男人"
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/huː/ /kɔːld/ /juː/ /dʒʌst/ /naʊ/", translation: "刚才打电话给你的(那个)",
          subComponents: [
            { start: 2, end: 2, label: "(从)主" },
            { start: 3, end: 3, label: "(从)谓" },
            { start: 4, end: 4, label: "(从)宾" },
            { start: 5, end: 6, label: "(从)时间" }
          ]
        },
        {
          start: 7, end: 7, label: "系动词", phonetic: "/ɪz/", translation: "是"
        },
        {
          start: 8, end: 10, label: "表语", phonetic: "/maɪ/ /ˈfɔːrmər/ /ˈkɒliːg/", translation: "我以前的同事"
        }
      ],
      analysis: [
        { type: "定语从句", text: "限制性定语从句。who 在从句中作主语，指代先行词 the man。" },
        { type: "词汇", text: "former (以前的)；colleague (同事)。" }
      ]
    },
    {
      id: "q_relative_3",
      chinese: "我买的那本书对于初学者来说极其有用",
      english_full: "The book that I bought is extremely useful for beginners.",
      words: [
        { word: "The" }, { word: "book" }, { word: "that" }, { word: "I" }, { word: "bought" },
        { word: "is" }, { word: "extremely" }, { word: "useful" }, { word: "for" }, { word: "beginners", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bʊk/", translation: "那本书"
        },
        {
          start: 2, end: 4, label: "定语从句", phonetic: "/ðæt/ /aɪ/ /bɔːt/", translation: "我买的(那本)",
          subComponents: [
            { start: 2, end: 2, label: "(从)宾" },
            { start: 3, end: 3, label: "(从)主" },
            { start: 4, end: 4, label: "(从)谓" }
          ]
        },
        {
          start: 5, end: 5, label: "系动词", phonetic: "/ɪz/", translation: "是"
        },
        {
          start: 6, end: 9, label: "表语", phonetic: "/ɪkˈstriːmli/ /ˈjuːsfəl/ /fɔːr/ /bɪˈgɪnərz/", translation: "对于初学者极其有用"
        }
      ],
      analysis: [
        { type: "定语从句", text: "that 在从句中作 bought 的宾语，通常在口语中可以省略。" },
        { type: "词汇搭配", text: "extremely useful (极其有用的)；be useful for (对...有用)。" }
      ]
    },
    {
      id: "q_relative_4",
      chinese: "这家公司正在招聘其母语为英语的员工",
      english_full: "The company is recruiting employees whose native language is English.",
      words: [
        { word: "The" }, { word: "company" }, { word: "is" }, { word: "recruiting" }, { word: "employees" },
        { word: "whose" }, { word: "native" }, { word: "language" }, { word: "is" }, { word: "English", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "这家公司"
        },
        {
          start: 2, end: 3, label: "主句谓语", phonetic: "/ɪz/ /rɪˈkruːtɪŋ/", translation: "正在招聘"
        },
        {
          start: 4, end: 4, label: "先行词/宾语", phonetic: "/ɪmˈplɔɪiːz/", translation: "员工"
        },
        {
          start: 5, end: 9, label: "定语从句", phonetic: "/huːz/ /ˈneɪtɪv/ /ˈlæŋgwɪdʒ/ /ɪz/ /ˈɪŋglɪʃ/", translation: "其母语是英语的(员工)",
          subComponents: [
            { start: 5, end: 5, label: "(从)定" },
            { start: 6, end: 7, label: "(从)主" },
            { start: 8, end: 8, label: "(从)系" },
            { start: 9, end: 9, label: "(从)表" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "whose 表示所属关系，修饰 employees，在从句中作定语修饰 native language。" },
        { type: "商务词汇", text: "recruit (招聘)；native language (母语)。" }
      ]
    },
    {
      id: "q_relative_5",
      chinese: "这就是我们去年参观过的那家举世闻名的博物馆",
      english_full: "This is the world-famous museum which we visited last year.",
      words: [
        { word: "This" }, { word: "is" }, { word: "the" }, { word: "world-famous" }, { word: "museum" },
        { word: "which" }, { word: "we" }, { word: "visited" }, { word: "last" }, { word: "year", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ðɪs/", translation: "这" },
        { start: 1, end: 1, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 2, end: 4, label: "表语/先行词", phonetic: "/ðə/ /ˈwɜːrld-ˌfeɪməs/ /mjuˈziːəm/", translation: "那家举世闻名的博物馆" },
        {
          start: 5, end: 9, label: "定语从句", phonetic: "/wɪtʃ/ /wiː/ /ˈvɪzɪtɪd/ /læst/ /jɪər/", translation: "我们去年参观过的(那家)",
          subComponents: [
            { start: 5, end: 5, label: "(从)宾" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 7, label: "(从)谓" },
            { start: 8, end: 9, label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "which 在从句中作 visited 的宾语。先行词是物，也可用 that 替换。" },
        { type: "复合形容词", text: "world-famous (举世闻名的)。" }
      ]
    },
    {
      id: "q_relative_6",
      chinese: "我遇到的人中没有一个能解答这个复杂的问题",
      english_full: "None of the people whom I have met can solve this complex problem.",
      words: [
        { word: "None" }, { word: "of" }, { word: "the" }, { word: "people" }, { word: "whom" }, { word: "I" }, { word: "have" }, { word: "met" },
        { word: "can" }, { word: "solve" }, { word: "this" }, { word: "complex" }, { word: "problem", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主语", phonetic: "/nʌn/ /ɒv/ /ðə/ /ˈpiːpəl/", translation: "这些人中没有一个" },
        {
          start: 4, end: 7, label: "定语从句", phonetic: "/huːm/ /aɪ/ /hæv/ /mɛt/", translation: "我遇到过的(那些人)",
          subComponents: [
            { start: 4, end: 4, label: "(从)宾" },
            { start: 5, end: 5, label: "(从)主" },
            { start: 6, end: 7, label: "(从)谓" }
          ]
        },
        { start: 8, end: 9, label: "谓语", phonetic: "/kæn/ /sɒlv/", translation: "能够解答" },
        { start: 10, end: 12, label: "宾语", phonetic: "/ðɪs/ /ˈkɒmplɛks/ /ˈprɒbləm/", translation: "这个复杂的问题" }
      ],
      analysis: [
        { type: "定语从句", text: "whom 是关系代词宾格，在从句中作 met 的宾语。在正式英语中修饰人作宾语时首选 whom。" },
        { type: "短语", text: "None of (没有任何一个)；solve a problem (解决问题)。" }
      ]
    },
    {
      id: "q_relative_7",
      chinese: "我们在巴黎度过了我们的假期，那是一个充满浪漫气息的城市",
      english_full: "We spent our holiday in Paris, which is a city full of romance.",
      words: [
        { word: "We" }, { word: "spent" }, { word: "our" }, { word: "holiday" }, { word: "in" }, { word: "Paris", punctuation: "," },
        { word: "which" }, { word: "is" }, { word: "a" }, { word: "city" }, { word: "full" }, { word: "of" }, { word: "romance", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/wiː/", translation: "我们" },
        { start: 1, end: 1, label: "主句谓语", phonetic: "/spɛnt/", translation: "度过" },
        { start: 2, end: 3, label: "主句宾语", phonetic: "/aʊər/ /ˈhɒlɪdeɪ/", translation: "我们的假期" },
        { start: 4, end: 5, label: "地点状语/先行词", phonetic: "/ɪn/ /ˈpærɪs/", translation: "在巴黎" },
        {
          start: 6, end: 12, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /ɪz/ /ə/ /ˈsɪti/ /fʊl/ /ɒv/ /roʊˈmæns/", translation: "那是一个充满浪漫气息的城市",
          subComponents: [
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 7, label: "(从)系" },
            { start: 8, end: 12, label: "(从)表" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "非限制性定语从句。用逗号隔开，which 代指前面的专有名词 Paris。此处 which 不可用 that 替换。" },
        { type: "形容词短语", text: "full of... (充满...) 作后置定语修饰 a city。" }
      ]
    },
    {
      id: "q_relative_8",
      chinese: "这是一座历史悠久的建筑，其屋顶在暴风雨中被毁",
      english_full: "This is a historic building, whose roof was destroyed in the storm.",
      words: [
        { word: "This" }, { word: "is" }, { word: "a" }, { word: "historic" }, { word: "building", punctuation: "," },
        { word: "whose" }, { word: "roof" }, { word: "was" }, { word: "destroyed" }, { word: "in" }, { word: "the" }, { word: "storm", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主系", phonetic: "/ðɪs/ /ɪz/", translation: "这是" },
        { start: 2, end: 4, label: "表语/先行词", phonetic: "/ə/ /hɪˈstɒrɪk/ /ˈbɪldɪŋ/", translation: "一座历史悠久的建筑" },
        {
          start: 5, end: 11, label: "非限制性定语从句", phonetic: "/huːz/ /ruːf/ /wɒz/ /dɪˈstrɔɪd/ /ɪn/ /ðə/ /stɔːrm/", translation: "其屋顶在暴风雨中被毁",
          subComponents: [
            { start: 5, end: 5, label: "(从)定" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 8, label: "(从)谓(过被)" },
            { start: 9, end: 11, label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "whose 可以指代人也可以指代物。此处 whose = the building's。" },
        { type: "词汇辨析", text: "historic 指历史上著名的、有历史意义的；historical 指有关历史的。" }
      ]
    },
    {
      id: "q_relative_9",
      chinese: "那个你向他借钱的男子是一位成功的企业家",
      english_full: "The man from whom you borrowed the money is a successful entrepreneur.",
      words: [
        { word: "The" }, { word: "man" }, { word: "from" }, { word: "whom" }, { word: "you" }, { word: "borrowed" }, { word: "the" }, { word: "money" },
        { word: "is" }, { word: "a" }, { word: "successful" }, { word: "entrepreneur", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /mæn/", translation: "那个男子" },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/frɒm/ /huːm/ /juː/ /ˈbɒroʊd/ /ðə/ /ˈmʌni/", translation: "你向他借钱的(那个)",
          subComponents: [
            { start: 2, end: 3, label: "介词+关系代词" },
            { start: 4, end: 4, label: "(从)主" },
            { start: 5, end: 5, label: "(从)谓" },
            { start: 6, end: 7, label: "(从)宾" }
          ]
        },
        { start: 8, end: 8, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 9, end: 11, label: "表语", phonetic: "/ə/ /səkˈsɛsfəl/ /ˌɒntrəprəˈnɜːr/", translation: "一位成功的企业家" }
      ],
      analysis: [
        { type: "语法结构", text: "“介词+关系代词”引导的定语从句。borrow money from sb. 中 from 提前，由于先行词是人，用 from whom。" },
        { type: "高级名词", text: "entrepreneur (企业家) 是雅思常考高频拼写词。" }
      ]
    },
    {
      id: "q_relative_10",
      chinese: "我永远不会忘记我第一次遇见你的那一天",
      english_full: "I will never forget the day when I first met you.",
      words: [
        { word: "I" }, { word: "will" }, { word: "never" }, { word: "forget" }, { word: "the" }, { word: "day" },
        { word: "when" }, { word: "I" }, { word: "first" }, { word: "met" }, { word: "you", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我" },
        { start: 1, end: 3, label: "谓语", phonetic: "/wɪl/ /ˈnɛvər/ /fərˈgɛt/", translation: "永远不会忘记" },
        { start: 4, end: 5, label: "宾语/先行词", phonetic: "/ðə/ /deɪ/", translation: "那一天" },
        {
          start: 6, end: 10, label: "定语从句", phonetic: "/wɛn/ /aɪ/ /fɜːrst/ /mɛt/ /juː/", translation: "我第一次遇见你的(那一天)",
          subComponents: [
            { start: 6, end: 6, label: "关系副词" },
            { start: 7, end: 7, label: "(从)主" },
            { start: 8, end: 9, label: "(从)谓" },
            { start: 10, end: 10, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "when 是关系副词，在从句中作时间状语，修饰表示时间的先行词 the day。相当于 on which。" }
      ]
    },
    {
      id: "q_relative_11",
      chinese: "这就是我们正在探讨的那个棘手问题的核心",
      english_full: "This is the core of the thorny issue about which we are debating.",
      words: [
        { word: "This" }, { word: "is" }, { word: "the" }, { word: "core" }, { word: "of" }, { word: "the" }, { word: "thorny" }, { word: "issue" },
        { word: "about" }, { word: "which" }, { word: "we" }, { word: "are" }, { word: "debating", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主系", phonetic: "/ðɪs/ /ɪz/", translation: "这就是" },
        { start: 2, end: 7, label: "表语/先行词", phonetic: "/ðə/ /kɔːr/ /ɒv/ /ðə/ /ˈθɔːrni/ /ˈɪʃuː/", translation: "那个棘手问题的核心" },
        {
          start: 8, end: 12, label: "定语从句", phonetic: "/əˈbaʊt/ /wɪtʃ/ /wiː/ /ɑːr/ /dɪˈbeɪtɪŋ/", translation: "我们正在探讨的",
          subComponents: [
            { start: 8, end: 9, label: "介词+关系代词" },
            { start: 10, end: 10, label: "(从)主" },
            { start: 11, end: 12, label: "(从)谓(现进)" }
          ]
        }
      ],
      analysis: [
        { type: "语法结构", text: "“介词+关系代词”结构。debate about sth. 中的 about 提前，先行词是物，故用 about which。" },
        { type: "高阶表达", text: "the core of (核心)；thorny issue (棘手的问题)。" }
      ]
    },
    {
      id: "q_relative_12",
      chinese: "你还记得我们童年时常去玩耍的那个公园吗？",
      english_full: "Do you remember the park where we used to play in our childhood?",
      words: [
        { word: "Do" }, { word: "you" }, { word: "remember" }, { word: "the" }, { word: "park" },
        { word: "where" }, { word: "we" }, { word: "used" }, { word: "to" }, { word: "play" }, { word: "in" }, { word: "our" }, { word: "childhood", punctuation: "?" }
      ],
      components: [
        { start: 0, end: 2, label: "一般疑问句谓语", phonetic: "/duː/ /juː/ /rɪˈmɛmbər/", translation: "你还记得(吗)" },
        { start: 3, end: 4, label: "宾语/先行词", phonetic: "/ðə/ /pɑːrk/", translation: "那个公园" },
        {
          start: 5, end: 12, label: "定语从句", phonetic: "/wɛər/ /wiː/ /juːzd/ /tuː/ /pleɪ/ /ɪn/ /aʊər/ /ˈtʃaɪldhʊd/", translation: "我们童年时常去玩耍的(那个公园)",
          subComponents: [
            { start: 5, end: 5, label: "关系副词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 9, label: "(从)谓" },
            { start: 10, end: 12, label: "(从)时间状语" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "where 是关系副词，在从句中作地点状语，修饰 the park。相当于 in which。" },
        { type: "语法结构", text: "used to do sth (过去常常做某事)。" }
      ]
    },
    {
      id: "q_relative_13",
      chinese: "这就是他最终决定辞去那份高薪工作的原因",
      english_full: "This is the reason why he eventually decided to quit that well-paying job.",
      words: [
        { word: "This" }, { word: "is" }, { word: "the" }, { word: "reason" },
        { word: "why" }, { word: "he" }, { word: "eventually" }, { word: "decided" }, { word: "to" }, { word: "quit" }, { word: "that" }, { word: "well-paying" }, { word: "job", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主系", phonetic: "/ðɪs/ /ɪz/", translation: "这就是" },
        { start: 2, end: 3, label: "表语/先行词", phonetic: "/ðə/ /ˈriːzən/", translation: "原因" },
        {
          start: 4, end: 12, label: "定语从句", phonetic: "/waɪ/ /hiː/ /ɪˈvɛntʃuəli/ /dɪˈsaɪdɪd/ /tuː/ /kwɪt/ /ðæt/ /wɛl-ˈpeɪɪŋ/ /dʒɒb/", translation: "他最终决定辞去那份高薪工作的(原因)",
          subComponents: [
            { start: 4, end: 4, label: "关系副词" },
            { start: 5, end: 5, label: "(从)主" },
            { start: 6, end: 7, label: "(从)谓" },
            { start: 8, end: 12, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "why 是关系副词，修饰 the reason，在从句中作原因状语。相当于 for which。" },
        { type: "复合形容词", text: "well-paying (高薪的)。" }
      ]
    },
    {
      id: "q_relative_14",
      chinese: "众所周知，定期锻炼能够显著提高免疫力",
      english_full: "As is known to all, regular exercise can significantly boost immunity.",
      words: [
        { word: "As" }, { word: "is" }, { word: "known" }, { word: "to" }, { word: "all", punctuation: "," },
        { word: "regular" }, { word: "exercise" }, { word: "can" }, { word: "significantly" }, { word: "boost" }, { word: "immunity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "非限制性定语从句", phonetic: "/æz/ /ɪz/ /noʊn/ /tuː/ /ɔːl/", translation: "正如大家所知的那样",
          subComponents: [
            { start: 0, end: 0, label: "关系代词" },
            { start: 1, end: 4, label: "(从)谓语" }
          ]
        },
        { start: 5, end: 6, label: "主句主语", phonetic: "/ˈrɛgjʊlər/ /ˈɛksərsaɪz/", translation: "定期锻炼" },
        { start: 7, end: 9, label: "主句谓语", phonetic: "/kæn/ /sɪgˈnɪfɪkəntli/ /buːst/", translation: "能够显著提升" },
        { start: 10, end: 10, label: "主句宾语", phonetic: "/ɪˈmjuːnɪti/", translation: "免疫力" }
      ],
      analysis: [
        { type: "定语从句", text: "as 引导非限制性定语从句，通常可以放在句首，指代整个主句的内容。意为“正如...”。" },
        { type: "固定搭配", text: "boost immunity (增强/提升免疫力)。" }
      ]
    },
    {
      id: "q_relative_15",
      chinese: "他们指责他窃取了机密数据，这是完全没有根据的",
      english_full: "They accused him of stealing confidential data, which was completely baseless.",
      words: [
        { word: "They" }, { word: "accused" }, { word: "him" }, { word: "of" }, { word: "stealing" }, { word: "confidential" }, { word: "data", punctuation: "," },
        { word: "which" }, { word: "was" }, { word: "completely" }, { word: "baseless", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ðeɪ/", translation: "他们" },
        { start: 1, end: 2, label: "谓语", phonetic: "/əˈkjuːzd/ /hɪm/", translation: "指责他" },
        { start: 3, end: 6, label: "状语/宾补", phonetic: "/ɒv/ /ˈstiːlɪŋ/ /ˌkɒnfɪˈdɛnʃəl/ /ˈdeɪtə/", translation: "窃取机密数据" },
        {
          start: 7, end: 10, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /wɒz/ /kəmˈpliːtli/ /ˈbeɪslɪs/", translation: "这是完全没有根据的",
          subComponents: [
            { start: 7, end: 7, label: "关系代词(指代主句)" },
            { start: 8, end: 8, label: "(从)系" },
            { start: 9, end: 10, label: "(从)表" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "which 引导非限制性定语从句，指代前面整个主句的内容（即他被指责窃取数据这件事）。" },
        { type: "高级词汇", text: "accuse sb. of sth. (指控某人某事)；confidential (机密的)；baseless (无根据的)。" }
      ]
    },
    {
      id: "q_relative_16",
      chinese: "这位教授，其研究聚焦于可再生能源，昨天获得了一个享有盛誉的奖项",
      english_full: "The professor, whose research focuses on renewable energy, won a prestigious award yesterday.",
      words: [
        { word: "The" }, { word: "professor", punctuation: "," },
        { word: "whose" }, { word: "research" }, { word: "focuses" }, { word: "on" }, { word: "renewable" }, { word: "energy", punctuation: "," },
        { word: "won" }, { word: "a" }, { word: "prestigious" }, { word: "award" }, { word: "yesterday", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /prəˈfɛsər/", translation: "这位教授" },
        {
          start: 2, end: 7, label: "非限制性定语从句", phonetic: "/huːz/ /rɪˈsɜːrtʃ/ /ˈfoʊkəsɪz/ /ɒn/ /rɪˈnuːəbəl/ /ˈɛnərdʒi/", translation: "其研究聚焦于可再生能源",
          subComponents: [
            { start: 2, end: 3, label: "(从)主" },
            { start: 4, end: 7, label: "(从)谓+介词宾语" }
          ]
        },
        { start: 8, end: 8, label: "谓语", phonetic: "/wʌn/", translation: "获得了" },
        { start: 9, end: 11, label: "宾语", phonetic: "/ə/ /prɛˈstɪdʒəs/ /əˈwɔːrd/", translation: "一个享有盛誉的奖项" },
        { start: 12, end: 12, label: "时间状语", phonetic: "/ˈjɛstərdeɪ/", translation: "昨天" }
      ],
      analysis: [
        { type: "定语从句", text: "非限制性定语从句，中间插入主句，对 the professor 起补充说明作用。" },
        { type: "雅思词汇", text: "renewable energy (可再生能源)；prestigious (享有盛誉的)。" }
      ]
    },
    {
      id: "q_relative_17",
      chinese: "我正试图找到一个能让我在家远程工作的职位",
      english_full: "I am trying to find a position in which I can work remotely from home.",
      words: [
        { word: "I" }, { word: "am" }, { word: "trying" }, { word: "to" }, { word: "find" }, { word: "a" }, { word: "position" },
        { word: "in" }, { word: "which" }, { word: "I" }, { word: "can" }, { word: "work" }, { word: "remotely" }, { word: "from" }, { word: "home", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我" },
        { start: 1, end: 4, label: "谓语", phonetic: "/æm/ /ˈtraɪɪŋ/ /tuː/ /faɪnd/", translation: "正试图找到" },
        { start: 5, end: 6, label: "宾语/先行词", phonetic: "/ə/ /pəˈzɪʃən/", translation: "一个职位" },
        {
          start: 7, end: 14, label: "定语从句", phonetic: "/ɪn/ /wɪtʃ/ /aɪ/ /kæn/ /wɜːrk/ /rɪˈmoʊtli/ /frɒm/ /hoʊm/", translation: "在这个职位上我能在家远程工作",
          subComponents: [
            { start: 7, end: 8, label: "介词+关系代词" },
            { start: 9, end: 9, label: "(从)主" },
            { start: 10, end: 11, label: "(从)谓" },
            { start: 12, end: 14, label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "“介词 in + 关系代词 which” 相当于关系副词 where，修饰抽象地点 position (职位/环境)。" },
        { type: "职场词汇", text: "work remotely (远程工作)。" }
      ]
    },
    {
      id: "q_relative_18",
      chinese: "他是我唯一能信任并倾诉我内心深处秘密的人",
      english_full: "He is the only person that I can trust and confide my deepest secrets to.",
      words: [
        { word: "He" }, { word: "is" }, { word: "the" }, { word: "only" }, { word: "person" },
        { word: "that" }, { word: "I" }, { word: "can" }, { word: "trust" }, { word: "and" }, { word: "confide" }, { word: "my" }, { word: "deepest" }, { word: "secrets" }, { word: "to", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主系", phonetic: "/hiː/ /ɪz/", translation: "他是" },
        { start: 2, end: 4, label: "表语/先行词", phonetic: "/ði/ /ˈoʊnli/ /ˈpɜːrsən/", translation: "那个唯一的人" },
        {
          start: 5, end: 14, label: "定语从句", phonetic: "/ðæt/ /aɪ/ /kæn/ /trʌst/ /ænd/ /kənˈfaɪd/ /maɪ/ /ˈdiːpɪst/ /ˈsiːkrɪts/ /tuː/", translation: "我能信任并倾诉最深秘密的(那个人)",
          subComponents: [
            { start: 5, end: 5, label: "(从)宾" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 14, label: "(从)并列谓语+介词" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "先行词被 the only 修饰时，定语从句的关系代词必须用 that，而不用 who/whom。句末保留介词 to。" },
        { type: "高级表达", text: "confide sth. to sb. (向某人吐露某事)。" }
      ]
    },
    {
      id: "q_relative_19",
      chinese: "在现代社会，凡是努力工作的人都应该得到公平的对待",
      english_full: "In modern society, anyone who works diligently deserves to be treated fairly.",
      words: [
        { word: "In" }, { word: "modern" }, { word: "society", punctuation: "," },
        { word: "anyone" }, { word: "who" }, { word: "works" }, { word: "diligently" },
        { word: "deserves" }, { word: "to" }, { word: "be" }, { word: "treated" }, { word: "fairly", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "地点状语", phonetic: "/ɪn/ /ˈmɒdərn/ /səˈsaɪəti/", translation: "在现代社会" },
        { start: 3, end: 3, label: "主句主语", phonetic: "/ˈɛniwʌn/", translation: "任何人" },
        {
          start: 4, end: 6, label: "定语从句", phonetic: "/huː/ /wɜːrks/ /ˈdɪlɪdʒəntli/", translation: "努力工作的",
          subComponents: [
            { start: 4, end: 4, label: "(从)主" },
            { start: 5, end: 6, label: "(从)谓语+副词" }
          ]
        },
        { start: 7, end: 7, label: "主句谓语", phonetic: "/dɪˈzɜːrvz/", translation: "应该得到，值得" },
        { start: 8, end: 11, label: "主句宾语", phonetic: "/tuː/ /bi/ /ˈtriːtɪd/ /ˈfɛərli/", translation: "被公平对待" }
      ],
      analysis: [
        { type: "定语从句", text: "who 引导限制性定语从句，修饰不定代词 anyone。anyone who... 也可以替换为 whoever..." },
        { type: "词汇用法", text: "deserve to do (值得做某事，应该做某事)；be treated (被对待)。" }
      ]
    },
    {
      id: "q_relative_20",
      chinese: "这本小说描绘了一个所有公民都被国家严密监控的未来世界",
      english_full: "The novel depicts a futuristic world in which all citizens are strictly monitored by the state.",
      words: [
        { word: "The" }, { word: "novel" }, { word: "depicts" }, { word: "a" }, { word: "futuristic" }, { word: "world" },
        { word: "in" }, { word: "which" }, { word: "all" }, { word: "citizens" }, { word: "are" }, { word: "strictly" }, { word: "monitored" }, { word: "by" }, { word: "the" }, { word: "state", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈnɒvəl/", translation: "这本小说" },
        { start: 2, end: 2, label: "主句谓语", phonetic: "/dɪˈpɪkts/", translation: "描绘" },
        { start: 3, end: 5, label: "主句宾语", phonetic: "/ə/ /ˌfjuːtʃəˈrɪstɪk/ /wɜːrld/", translation: "一个未来的世界" },
        {
          start: 6, end: 15, label: "定语从句", phonetic: "/ɪn/ /wɪtʃ/ /ɔːl/ /ˈsɪtɪzənz/ /ɑːr/ /ˈstrɪktli/ /ˈmɒnɪtərd/ /baɪ/ /ðə/ /steɪt/", translation: "在其中所有公民都被国家严密监控的(世界)",
          subComponents: [
            { start: 6, end: 7, label: "介词+关系代词" },
            { start: 8, end: 9, label: "(从)主" },
            { start: 10, end: 12, label: "(从)谓(过被)" },
            { start: 13, end: 15, label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "定语从句", text: "“in + which” 结构修饰先行词 a futuristic world，也可以用 where 替换。" },
        { type: "高端词汇", text: "depict (描绘)；futuristic (未来的)；strictly monitor (严密监控)。" }
      ]
    },
    {
      id: "q_relative_21",
      chinese: "那些总是抱怨而从不采取行动的人很难取得成功",
      english_full: "Those who always complain but never take action can hardly achieve success.",
      words: [
        { word: "Those" }, { word: "who" }, { word: "always" }, { word: "complain" }, { word: "but" }, { word: "never" }, { word: "take" }, { word: "action" },
        { word: "can" }, { word: "hardly" }, { word: "achieve" }, { word: "success", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/ðoʊz/", translation: "那些人" },
        {
          start: 1, end: 7, label: "定语从句", phonetic: "/huː/ /ˈɔːlweɪz/ /kəmˈpleɪn/ /bʌt/ /ˈnɛvər/ /teɪk/ /ˈækʃən/", translation: "总是抱怨而从不采取行动的(那些人)",
          subComponents: [
            { start: 1, end: 1, label: "(从)主" },
            { start: 2, end: 3, label: "(从)谓1" },
            { start: 4, end: 4, label: "连词" },
            { start: 5, end: 7, label: "(从)谓2+宾" }
          ]
        },
        { start: 8, end: 10, label: "主句谓语", phonetic: "/kæn/ /ˈhɑːrdli/ /əˈtʃiːv/", translation: "很难取得" },
        { start: 11, end: 11, label: "主句宾语", phonetic: "/səkˈsɛs/", translation: "成功" }
      ],
      analysis: [
        { type: "定语从句", text: "Those who... (那些...的人) 是英语中极其常见的表达，先行词 those 指代人。" },
        { type: "词汇用法", text: "hardly (几乎不) 是表否定的副词；take action (采取行动)；achieve success (取得成功)。" }
      ]
    }
  ]
};