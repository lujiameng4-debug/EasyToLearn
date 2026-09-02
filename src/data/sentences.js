export const curriculum = [
  {
    id: "module_basic",
    title: "基本句型 (Basic)",
    description: "主谓宾、主系表等构成英语骨架的基础句法。",
    sentences: [
      {
        id: "q_basic_sv",
        chinese: "在经历了几个季度的停滞后，全球经济正在复苏",
        english_full: "The global economy is recovering after several quarters of stagnation.",
        words: [
          { word: "The" }, { word: "global" }, { word: "economy" }, { word: "is" }, { word: "recovering" },
          { word: "after" }, { word: "several" }, { word: "quarters" }, { word: "of" }, { word: "stagnation", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈgloʊbəl/ /ɪˈkɒnəmi/", translation: "全球经济",
            subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "global" }, { word: "economy" }] }]
          },
          {
            start: 3, end: 4, label: "谓语", phonetic: "/ɪz/ /rɪˈkʌvərɪŋ/", translation: "正在复苏",
            subComponents: [{ startIndex: 0, words: [{ word: "is" }] }, { startIndex: 1, words: [{ word: "recovering" }] }]
          },
          {
            start: 5, end: 9, label: "时间状语", phonetic: "/ˈæftər/ /ˈsɛvrəl/ /ˈkwɔːrtərz/ /ɒv/ /stægˈneɪʃən/", translation: "在几个季度的停滞之后",
            subComponents: [
              { startIndex: 0, words: [{ word: "after" }, { word: "several" }, { word: "quarters" }] },
              { startIndex: 3, words: [{ word: "of" }, { word: "stagnation" }], label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "基本句型", text: "主谓结构 (S + V)。recover (复苏) 在此是不及物动词，不带宾语。" },
          { type: "高级词汇", text: "stagnation (停滞，不景气) 是雅思阅读/写作中描述经济的高频词。" }
        ]
      },
      {
        id: "q_basic_svp",
        chinese: "在现代城市规划中，可持续的基础设施是至关重要的",
        english_full: "Sustainable infrastructure is paramount in modern urban planning.",
        words: [
          { word: "Sustainable" }, { word: "infrastructure" }, { word: "is" }, { word: "paramount" },
          { word: "in" }, { word: "modern" }, { word: "urban" }, { word: "planning", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 1, label: "主语", phonetic: "/səˈsteɪnəbəl/ /ˈɪnfrəˌstrʌktʃər/", translation: "可持续的基础设施",
            subComponents: [{ startIndex: 0, words: [{ word: "Sustainable" }, { word: "infrastructure" }] }]
          },
          {
            start: 2, end: 2, label: "系动词", phonetic: "/ɪz/", translation: "是",
            subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
          },
          {
            start: 3, end: 3, label: "表语", phonetic: "/ˈpærəmaʊnt/", translation: "至关重要的",
            subComponents: [{ startIndex: 0, words: [{ word: "paramount" }] }]
          },
          {
            start: 4, end: 7, label: "地点/范围状语", phonetic: "/ɪn/ /ˈmɒdərn/ /ˈɜːrbən/ /ˈplænɪŋ/", translation: "在现代城市规划中",
            subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "modern" }, { word: "urban" }, { word: "planning" }] }]
          }
        ],
        analysis: [
          { type: "基本句型", text: "主系表结构 (S + V + P)。paramount 作表语说明主语的性质。" },
          { type: "雅思词汇", text: "paramount 意为“首要的，至高无上的”，是 important/crucial 的满分替换词。" }
        ]
      },
      {
        id: "q_basic_svo",
        chinese: "这家跨国公司最近实施了一项创新的营销策略",
        english_full: "The multinational corporation recently implemented an innovative marketing strategy.",
        words: [
          { word: "The" }, { word: "multinational" }, { word: "corporation" }, { word: "recently" }, { word: "implemented" },
          { word: "an" }, { word: "innovative" }, { word: "marketing" }, { word: "strategy", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃən/", translation: "这家跨国公司",
            subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "multinational" }, { word: "corporation" }] }]
          },
          {
            start: 3, end: 3, label: "时间状语", phonetic: "/ˈriːsəntli/", translation: "最近",
            subComponents: [{ startIndex: 0, words: [{ word: "recently" }] }]
          },
          {
            start: 4, end: 4, label: "谓语", phonetic: "/ˈɪmplɪmɛntɪd/", translation: "实施了",
            subComponents: [{ startIndex: 0, words: [{ word: "implemented" }] }]
          },
          {
            start: 5, end: 8, label: "宾语", phonetic: "/æn/ /ˈɪnəveɪtɪv/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒi/", translation: "一项创新的营销策略",
            subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "innovative" }, { word: "marketing" }, { word: "strategy" }] }]
          }
        ],
        analysis: [
          { type: "基本句型", text: "主谓宾结构 (S + V + O)。谓语 implemented 后接直接宾语。" },
          { type: "商务词汇", text: "implement (实施/执行)；multinational corporation (跨国公司)。" }
        ]
      },
      {
        id: "q_basic_svoo",
        chinese: "这位慷慨的校友给大学捐赠了一大笔研究资金",
        english_full: "The generous alumnus offered the university a substantial research grant.",
        words: [
          { word: "The" }, { word: "generous" }, { word: "alumnus" }, { word: "offered" }, { word: "the" }, { word: "university" },
          { word: "a" }, { word: "substantial" }, { word: "research" }, { word: "grant", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈdʒɛnərəs/ /əˈlʌmnəs/", translation: "这位慷慨的校友",
            subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "generous" }, { word: "alumnus" }] }]
          },
          {
            start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərd/", translation: "提供/捐赠",
            subComponents: [{ startIndex: 0, words: [{ word: "offered" }] }]
          },
          {
            start: 4, end: 5, label: "间接宾语", phonetic: "/ðə/ /ˌjuːnɪˈvɜːrsɪti/", translation: "给大学",
            subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "university" }] }]
          },
          {
            start: 6, end: 9, label: "直接宾语", phonetic: "/ə/ /səbˈstænʃəl/ /rɪˈsɜːrtʃ/ /grænt/", translation: "一大笔研究资金",
            subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "substantial" }, { word: "research" }, { word: "grant" }] }]
          }
        ],
        analysis: [
          { type: "基本句型", text: "主谓双宾结构 (S + V + IO + DO)。the university 是间接宾语，grant 是直接宾语。" },
          { type: "高级名词", text: "alumnus 指男校友 (复数 alumni)；grant 在此作名词，意为“拨款，补助金”。" }
        ]
      },
      {
        id: "q_basic_svoc",
        chinese: "严格的监管使得这个制造过程极其高效",
        english_full: "Stringent regulations make the manufacturing process highly efficient.",
        words: [
          { word: "Stringent" }, { word: "regulations" }, { word: "make" }, { word: "the" }, { word: "manufacturing" }, { word: "process" },
          { word: "highly" }, { word: "efficient", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 1, label: "主语", phonetic: "/ˈstrɪndʒənt/ /ˌrɛgjʊˈleɪʃənz/", translation: "严格的监管",
            subComponents: [{ startIndex: 0, words: [{ word: "Stringent" }, { word: "regulations" }] }]
          },
          {
            start: 2, end: 2, label: "谓语", phonetic: "/meɪk/", translation: "使得",
            subComponents: [{ startIndex: 0, words: [{ word: "make" }] }]
          },
          {
            start: 3, end: 5, label: "宾语", phonetic: "/ðə/ /ˌmænjʊˈfæktʃərɪŋ/ /ˈprɒsɛs/", translation: "这个制造过程",
            subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "manufacturing" }, { word: "process" }] }]
          },
          {
            start: 6, end: 7, label: "宾语补足语", phonetic: "/ˈhaɪli/ /ɪˈfɪʃənt/", translation: "极其高效",
            subComponents: [{ startIndex: 0, words: [{ word: "highly" }, { word: "efficient" }] }]
          }
        ],
        analysis: [
          { type: "基本句型", text: "主谓宾宾补 (S + V + O + C)。make sth. adj. 表示“使某物处于某种状态”，adj.作宾补。" },
          { type: "同义替换", text: "stringent (严格的) 是 strict 的高级替换；highly (高度地/极其) 替换 very。" }
        ]
      },
      {
        id: "q_basic_therebe",
        chinese: "在现代社会中，存在许多关于数据隐私的复杂挑战",
        english_full: "There are numerous complex challenges concerning data privacy in modern society.",
        words: [
          { word: "There" }, { word: "are" }, { word: "numerous" }, { word: "complex" }, { word: "challenges" },
          { word: "concerning" }, { word: "data" }, { word: "privacy" }, { word: "in" }, { word: "modern" }, { word: "society", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 0, label: "引导词", phonetic: "/ðɛər/", translation: "无实义",
            subComponents: [{ startIndex: 0, words: [{ word: "There" }] }]
          },
          {
            start: 1, end: 1, label: "谓语", phonetic: "/ɑːr/", translation: "存在/有",
            subComponents: [{ startIndex: 0, words: [{ word: "are" }] }]
          },
          {
            start: 2, end: 7, label: "真正主语", phonetic: "/ˈnuːmərəs/ /ˈkɒmplɛks/ /ˈtʃælɪndʒɪz/ /kənˈsɜːrnɪŋ/ /ˈdeɪtə/ /ˈpraɪvəsi/", translation: "许多关于数据隐私的复杂挑战",
            subComponents: [
              { startIndex: 0, words: [{ word: "numerous" }, { word: "complex" }, { word: "challenges" }] },
              { startIndex: 3, words: [{ word: "concerning" }, { word: "data" }, { word: "privacy" }], label: "后置定语" }
            ]
          },
          {
            start: 8, end: 10, label: "地点状语", phonetic: "/ɪn/ /ˈmɒdərn/ /səˈsaɪəti/", translation: "在现代社会中",
            subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "modern" }, { word: "society" }] }]
          }
        ],
        analysis: [
          { type: "基本句型", text: "There be 句型。There 仅为引导词，真正的核心主语是 challenges，因此谓语动词用 are。" },
          { type: "介词用法", text: "concerning 意为“关于”，是 about/regarding 的高级学术词汇替换。" }
        ]
      }
    ]
  },
  {
    id: "module_tense",
    title: "时态专项 (Tenses)",
    description: "现在完成, 一般过去, 过去进行等时态的使用。",
    sentences: [
      {
        id: "q_tense_1",
        chinese: "我已经做完作业了",
        english_full: "I have already finished my homework.",
        words: [
          { word: "I", punctuation: "" },
          { word: "have", punctuation: "" },
          { word: "already", punctuation: "" },
          { word: "finished", punctuation: "" },
          { word: "my", punctuation: "" },
          { word: "homework", punctuation: "" }
        ],
        components: [
          { start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我" },
          { start: 1, end: 3, label: "谓语", phonetic: "/hæv/ /ɔːlˈrɛdi/ /ˈfɪnɪʃt/", translation: "已经做完" },
          { start: 4, end: 5, label: "宾语", phonetic: "/maɪ/ /ˈhoʊmwɜːrk/", translation: "我的作业" }
        ],
        analysis: [
          { type: "时态", text: "现在完成时。表达形式：have/has + 过去分词 (done)" },
          { type: "固定搭配", text: "finish doing sth. / finish one's homework (完成作业)" }
        ]
      },
      {
        id: "q_tense_2",
        chinese: "昨晚你在干什么？",
        english_full: "What were you doing last night?",
        words: [
          { word: "What", punctuation: "" },
          { word: "were", punctuation: "" },
          { word: "you", punctuation: "" },
          { word: "doing", punctuation: "" },
          { word: "last", punctuation: "" },
          { word: "night", punctuation: "?" }
        ],
        components: [
          { start: 0, end: 0, label: "宾语 (疑问代词)", phonetic: "/wʌt/", translation: "什么" },
          { start: 1, end: 1, label: "助动词", phonetic: "/wɜːr/", translation: "是(过去)" },
          { start: 2, end: 2, label: "主语", phonetic: "/juː/", translation: "你" },
          { start: 3, end: 3, label: "谓语 (实义)", phonetic: "/ˈduːɪŋ/", translation: "做" },
          { start: 4, end: 5, label: "时间状语", phonetic: "/læst/ /naɪt/", translation: "昨晚" }
        ],
        analysis: [
          { type: "时态", text: "过去进行时。表达形式：was/were + 动词ing形式 (doing)" },
          { type: "固定搭配", text: "last night (昨晚，常用于过去时态的时间状语)" }
        ]
      }
    ]
  },
  {
    id: "module_relative",
    title: "定语从句 (Relative)",
    description: "使用 who, which, that 修饰名词的高阶表达。",
    sentences: [
      {
        id: "q_relative_1",
        chinese: "他的兄弟，在伦敦工作的那个，是个医生",
        english_full: "His brother, who works in London, is a doctor.",
        words: [
          { word: "His", punctuation: "" },
          { word: "brother", punctuation: "," },
          { word: "who", punctuation: "" },
          { word: "works", punctuation: "" },
          { word: "in", punctuation: "" },
          { word: "London", punctuation: "," },
          { word: "is", punctuation: "" },
          { word: "a", punctuation: "" },
          { word: "doctor", punctuation: "" }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/hɪz/ /ˈbrʌðər/", translation: "他的兄弟" },
          { 
            start: 2, end: 5, label: "定语从句", phonetic: "/huː/ /wɜːrks/ /ɪn/ /ˈlʌndən/", translation: "在伦敦工作的(那个)",
            subComponents: [
              { start: 2, end: 2, label: "主" },
              { start: 3, end: 3, label: "谓" },
              { start: 4, end: 5, label: "地点状语" }
            ]
          },
          { start: 6, end: 6, label: "系动词", phonetic: "/ɪz/", translation: "是" },
          { start: 7, end: 8, label: "表语", phonetic: "/ə/ /ˈdɒktər/", translation: "一名医生" }
        ],
        analysis: [
          { type: "语法", text: "非限制性定语从句，用逗号隔开，仅作补充说明" },
          { type: "固定搭配", text: "work in + 地点 (在某地工作)" }
        ]
      }
    ]
  },
  {
    id: "module_noun",
    title: "名词性从句 (Noun)",
    description: "涵盖主语、宾语、表语及同位语从句。",
    sentences: []
  },
  {
    id: "module_adverbial",
    title: "状语从句 (Adverbial)",
    description: "表示时间、原因、条件、让步等的复杂句型。",
    sentences: []
  }
];

// Fallback for custom module
export const customModuleTemplate = {
  id: "module_custom",
  title: "自定义题库",
  description: "你自己导入的专属句子练习。",
  sentences: [] // Will be populated from localStorage
};