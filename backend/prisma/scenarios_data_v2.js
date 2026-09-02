export const scenarioCurriculumsV2 = [
  {
    id: "finance_01",
    title: "金融与经济 (Finance)",
    description: "雅思/商务级表达：探讨宏观经济、投资理财与金融市场。",
    sentences: [
      {
        id: "fin_s1",
        chinese: "央行实施了降息以刺激经济增长并鼓励投资",
        english_full: "The central bank implemented interest rate cuts to stimulate economic growth and encourage investment.",
        words: [
          { word: "The", punctuation: "" }, { word: "central", punctuation: "" }, { word: "bank", punctuation: "" },
          { word: "implemented", punctuation: "" }, { word: "interest", punctuation: "" }, { word: "rate", punctuation: "" },
          { word: "cuts", punctuation: "" }, { word: "to", punctuation: "" }, { word: "stimulate", punctuation: "" },
          { word: "economic", punctuation: "" }, { word: "growth", punctuation: "" }, { word: "and", punctuation: "" },
          { word: "encourage", punctuation: "" }, { word: "investment", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /bæŋk/", translation: "央行" },
          { start: 3, end: 3, label: "谓语", phonetic: "/ˈɪmpləmɛntɪd/", translation: "实施了" },
          { start: 4, end: 6, label: "宾语", phonetic: "/ˈɪntrɪst/ /reɪt/ /kʌts/", translation: "降息" },
          { start: 7, end: 13, label: "目的状语", phonetic: "/tuː/ /ˈstɪmjəˌleɪt/ /ˌɛkəˈnɒmɪk/ /ɡroʊθ/ /ænd/ /ɪnˈkɜːrɪdʒ/ /ɪnˈvɛstmənt/", translation: "以刺激经济增长并鼓励投资" }
        ],
        analysis: [
          { type: "金融词汇", text: "central bank (央行)；interest rate cuts (降息)；economic growth (经济增长)。" },
          { type: "写作替换", text: "implement (实施)，常用于政策、计划，比 carry out 更正式。" }
        ]
      },
      {
        id: "fin_s2",
        chinese: "通货膨胀的突然飙升削弱了消费者的购买力，导致零售额下降",
        english_full: "The sudden spike in inflation eroded consumer purchasing power, leading to a decline in retail sales.",
        words: [
          { word: "The", punctuation: "" }, { word: "sudden", punctuation: "" }, { word: "spike", punctuation: "" },
          { word: "in", punctuation: "" }, { word: "inflation", punctuation: "" }, { word: "eroded", punctuation: "" },
          { word: "consumer", punctuation: "" }, { word: "purchasing", punctuation: "" }, { word: "power", punctuation: "," },
          { word: "leading", punctuation: "" }, { word: "to", punctuation: "" }, { word: "a", punctuation: "" },
          { word: "decline", punctuation: "" }, { word: "in", punctuation: "" }, { word: "retail", punctuation: "" },
          { word: "sales", punctuation: "." }
        ],
        components: [
          { start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈsʌdən/ /spaɪk/ /ɪn/ /ɪnˈfleɪʃən/", translation: "通货膨胀的突然飙升" },
          { start: 5, end: 5, label: "谓语", phonetic: "/ɪˈroʊdɪd/", translation: "侵蚀了，削弱了" },
          { start: 6, end: 8, label: "宾语", phonetic: "/kənˈsuːmər/ /ˈpɜːrtʃəsɪŋ/ /ˈpaʊər/", translation: "消费者的购买力" },
          { start: 9, end: 15, label: "结果状语", phonetic: "/ˈliːdɪŋ/ /tuː/ /ə/ /dɪˈklaɪn/ /ɪn/ /ˈriːteɪl/ /seɪlz/", translation: "导致零售额下降", subComponents: [{start: 9, end: 15, label: "现在分词短语"}] }
        ],
        analysis: [
          { type: "经济学表达", text: "spike in inflation (通胀飙升)；purchasing power (购买力)。" },
          { type: "亮点动词", text: "erode (侵蚀)，生动地表现出通胀对金钱价值的慢慢消耗。" }
        ]
      },
      {
        id: "fin_s3",
        chinese: "建议投资者分散其投资组合以最小化潜在的金融风险",
        english_full: "Investors are advised to diversify their portfolios to minimize potential financial risks.",
        words: [
          { word: "Investors", punctuation: "" }, { word: "are", punctuation: "" }, { word: "advised", punctuation: "" },
          { word: "to", punctuation: "" }, { word: "diversify", punctuation: "" }, { word: "their", punctuation: "" },
          { word: "portfolios", punctuation: "" }, { word: "to", punctuation: "" }, { word: "minimize", punctuation: "" },
          { word: "potential", punctuation: "" }, { word: "financial", punctuation: "" }, { word: "risks", punctuation: "." }
        ],
        components: [
          { start: 0, end: 0, label: "主语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者" },
          { start: 1, end: 2, label: "谓语(被动)", phonetic: "/ɑːr/ /ædˈvaɪzd/", translation: "被建议" },
          { start: 3, end: 6, label: "宾补", phonetic: "/tuː/ /daɪˈvɜːrsɪˌfaɪ/ /ðɛər/ /pɔːrtˈfoʊlioʊz/", translation: "去分散他们的投资组合" },
          { start: 7, end: 11, label: "目的状语", phonetic: "/tuː/ /ˈmɪnɪˌmaɪz/ /pəˈtɛnʃəl/ /faɪˈnænʃəl/ /rɪsks/", translation: "以最小化潜在的金融风险" }
        ],
        analysis: [
          { type: "金融搭配", text: "diversify portfolios (分散投资组合)；minimize risks (使风险最小化)。" },
          { type: "客观句式", text: "sb are advised to do (某人被建议...) 是给出专业建议的礼貌高级说法。" }
        ]
      },
      {
        id: "fin_s4",
        chinese: "跨国公司经常利用复杂的策略来减轻汇率波动的影响",
        english_full: "Multinational corporations frequently utilize sophisticated strategies to mitigate the impact of exchange rate fluctuations.",
        words: [
          { word: "Multinational", punctuation: "" }, { word: "corporations", punctuation: "" }, { word: "frequently", punctuation: "" },
          { word: "utilize", punctuation: "" }, { word: "sophisticated", punctuation: "" }, { word: "strategies", punctuation: "" },
          { word: "to", punctuation: "" }, { word: "mitigate", punctuation: "" }, { word: "the", punctuation: "" },
          { word: "impact", punctuation: "" }, { word: "of", punctuation: "" }, { word: "exchange", punctuation: "" },
          { word: "rate", punctuation: "" }, { word: "fluctuations", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃənz/", translation: "跨国公司" },
          { start: 2, end: 2, label: "状语", phonetic: "/ˈfriːkwəntli/", translation: "频繁地，经常" },
          { start: 3, end: 3, label: "谓语", phonetic: "/ˈjuːtɪˌlaɪz/", translation: "利用，使用" },
          { start: 4, end: 5, label: "宾语", phonetic: "/səˈfɪstɪˌkeɪtɪd/ /ˈstrætədʒiz/", translation: "复杂的/成熟的策略" },
          { start: 6, end: 13, label: "目的状语", phonetic: "/tuː/ /ˈmɪtɪˌɡeɪt/ /ði/ /ˈɪmpækt/ /əv/ /ɪksˈtʃeɪndʒ/ /reɪt/ /ˌflʌktʃuˈeɪʃənz/", translation: "来减轻汇率波动的影响" }
        ],
        analysis: [
          { type: "商务词汇", text: "multinational (跨国的)；exchange rate fluctuations (汇率波动)。" },
          { type: "高级替换", text: "utilize = use；sophisticated = complex (在这里指“精心设计的”)；mitigate = reduce。" }
        ]
      },
      {
        id: "fin_s5",
        chinese: "向无现金社会的转型引发了关于金融包容性和数据隐私的重要问题",
        english_full: "The transition towards a cashless society raises important questions concerning financial inclusion and data privacy.",
        words: [
          { word: "The", punctuation: "" }, { word: "transition", punctuation: "" }, { word: "towards", punctuation: "" },
          { word: "a", punctuation: "" }, { word: "cashless", punctuation: "" }, { word: "society", punctuation: "" },
          { word: "raises", punctuation: "" }, { word: "important", punctuation: "" }, { word: "questions", punctuation: "" },
          { word: "concerning", punctuation: "" }, { word: "financial", punctuation: "" }, { word: "inclusion", punctuation: "" },
          { word: "and", punctuation: "" }, { word: "data", punctuation: "" }, { word: "privacy", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "主语", phonetic: "/ðə/ /trænˈzɪʃən/ /təˈwɔːrdz/ /ə/ /ˈkæʃləs/ /səˈsaɪəti/", translation: "向无现金社会的转型" },
          { start: 6, end: 6, label: "谓语", phonetic: "/ˈreɪzɪz/", translation: "引发，提出" },
          { start: 7, end: 14, label: "宾语", phonetic: "/ɪmˈpɔːrtənt/ /ˈkwɛstʃənz/ /kənˈsɜːrnɪŋ/ /faɪˈnænʃəl/ /ɪnˈkluːʒən/ /ænd/ /ˈdeɪtə/ /ˈpraɪvəsi/", translation: "关于金融包容性和数据隐私的重要问题", subComponents: [{start: 9, end: 14, label: "后置定语(分词)"}] }
        ],
        analysis: [
          { type: "社科话题", text: "cashless society (无现金社会)；financial inclusion (金融包容性/普惠金融)；data privacy (数据隐私)。" },
          { type: "连词用法", text: "concerning = regarding / about，是介词，意为“关于...”。" }
        ]
      }
    ]
  },
  {
    id: "work_01",
    title: "职场与职业 (Work)",
    description: "雅思/托福高频话题：求职、团队管理与职业规划。",
    sentences: [
      {
        id: "work_s1",
        chinese: "培养强大的沟通技巧对于在任何企业环境中推进职业生涯都是必不可少的",
        english_full: "Cultivating strong communication skills is indispensable for advancing one's career in any corporate environment.",
        words: [
          { word: "Cultivating", punctuation: "" }, { word: "strong", punctuation: "" }, { word: "communication", punctuation: "" },
          { word: "skills", punctuation: "" }, { word: "is", punctuation: "" }, { word: "indispensable", punctuation: "" },
          { word: "for", punctuation: "" }, { word: "advancing", punctuation: "" }, { word: "one's", punctuation: "" },
          { word: "career", punctuation: "" }, { word: "in", punctuation: "" }, { word: "any", punctuation: "" },
          { word: "corporate", punctuation: "" }, { word: "environment", punctuation: "." }
        ],
        components: [
          { start: 0, end: 3, label: "主语(动名词)", phonetic: "/ˈkʌltɪˌveɪtɪŋ/ /strɒŋ/ /kəˌmjuːnɪˈkeɪʃən/ /skɪlz/", translation: "培养强大的沟通技巧" },
          { start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是" },
          { start: 5, end: 5, label: "表语", phonetic: "/ˌɪndɪˈspɛnsəbəl/", translation: "必不可少的" },
          { start: 6, end: 13, label: "状语", phonetic: "/fɔːr/ /ədˈvænsɪŋ/ /wʌnz/ /kəˈrɪər/ /ɪn/ /ˈɛni/ /ˈkɔːrpərət/ /ɪnˈvaɪrənmənt/", translation: "对于在任何企业环境中推进职业生涯" }
        ],
        analysis: [
          { type: "高级表达", text: "cultivate (培养)；indispensable (不可或缺的)；corporate environment (企业环境/职场环境)。" }
        ]
      },
      {
        id: "work_s2",
        chinese: "远程工作安排在提供更大灵活性的同时，也带来了管理团队凝聚力的新挑战",
        english_full: "Remote work arrangements, while offering greater flexibility, present new challenges in managing team cohesion.",
        words: [
          { word: "Remote", punctuation: "" }, { word: "work", punctuation: "" }, { word: "arrangements", punctuation: "," },
          { word: "while", punctuation: "" }, { word: "offering", punctuation: "" }, { word: "greater", punctuation: "" },
          { word: "flexibility", punctuation: "," }, { word: "present", punctuation: "" }, { word: "new", punctuation: "" },
          { word: "challenges", punctuation: "" }, { word: "in", punctuation: "" }, { word: "managing", punctuation: "" },
          { word: "team", punctuation: "" }, { word: "cohesion", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/rɪˈmoʊt/ /wɜːrk/ /əˈreɪndʒmənts/", translation: "远程工作安排" },
          { start: 3, end: 6, label: "让步状语", phonetic: "/waɪl/ /ˈɒfərɪŋ/ /ˈɡreɪtər/ /ˌflɛksəˈbɪlɪti/", translation: "尽管提供了更大的灵活性", subComponents: [{start: 3, end: 6, label: "分词作状语"}] },
          { start: 7, end: 7, label: "谓语", phonetic: "/prɪˈzɛnt/", translation: "提出，带来" },
          { start: 8, end: 13, label: "宾语", phonetic: "/njuː/ /ˈtʃælɪndʒɪz/ /ɪn/ /ˈmænɪdʒɪŋ/ /tiːm/ /koʊˈhiːʒən/", translation: "在管理团队凝聚力方面的新挑战" }
        ],
        analysis: [
          { type: "热门场景", text: "remote work (远程工作)；team cohesion (团队凝聚力)。" },
          { type: "从句省略", text: "while offering 是 while they offer 的省略结构，书面语极高频。" }
        ]
      },
      {
        id: "work_s3",
        chinese: "这位雄心勃勃的候选人展示了解决复杂问题并按时完成紧迫任务的非凡能力",
        english_full: "The ambitious candidate demonstrated an exceptional ability to resolve complex problems and meet tight deadlines.",
        words: [
          { word: "The", punctuation: "" }, { word: "ambitious", punctuation: "" }, { word: "candidate", punctuation: "" },
          { word: "demonstrated", punctuation: "" }, { word: "an", punctuation: "" }, { word: "exceptional", punctuation: "" },
          { word: "ability", punctuation: "" }, { word: "to", punctuation: "" }, { word: "resolve", punctuation: "" },
          { word: "complex", punctuation: "" }, { word: "problems", punctuation: "" }, { word: "and", punctuation: "" },
          { word: "meet", punctuation: "" }, { word: "tight", punctuation: "" }, { word: "deadlines", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ði/ /æmˈbɪʃəs/ /ˈkændɪdət/", translation: "这位雄心勃勃的候选人" },
          { start: 3, end: 3, label: "谓语", phonetic: "/ˈdɛmənˌstreɪtɪd/", translation: "展示了" },
          { start: 4, end: 14, label: "宾语", phonetic: "/æn/ /ɪkˈsɛpʃənəl/ /əˈbɪlɪti/ /tuː/ /rɪˈzɒlv/ /ˈkɒmplɛks/ /ˈprɒbləmz/ /ænd/ /miːt/ /taɪt/ /ˈdɛdˌlaɪnz/", translation: "去解决复杂问题和完成紧迫任务的非凡能力", subComponents: [{start: 7, end: 14, label: "不定式作后置定语"}] }
        ],
        analysis: [
          { type: "职场搭配", text: "demonstrate an ability (展示能力)；meet deadlines (赶上截止日期)；tight deadlines (时间紧迫的任务)。" },
          { type: "同义替换", text: "resolve = solve；exceptional = outstanding/extraordinary。" }
        ]
      },
      {
        id: "work_s4",
        chinese: "建设性的反馈，当恰当地传递时，可以显著提高员工士气和生产力",
        english_full: "Constructive feedback, when delivered appropriately, can significantly enhance employee morale and productivity.",
        words: [
          { word: "Constructive", punctuation: "" }, { word: "feedback", punctuation: "," }, { word: "when", punctuation: "" },
          { word: "delivered", punctuation: "" }, { word: "appropriately", punctuation: "," }, { word: "can", punctuation: "" },
          { word: "significantly", punctuation: "" }, { word: "enhance", punctuation: "" }, { word: "employee", punctuation: "" },
          { word: "morale", punctuation: "" }, { word: "and", punctuation: "" }, { word: "productivity", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/kənˈstrʌktɪv/ /ˈfiːdbæk/", translation: "建设性的反馈" },
          { start: 2, end: 4, label: "插入语/状语", phonetic: "/wɛn/ /dɪˈlɪvərd/ /əˈproʊpriətli/", translation: "当恰当地传递时", subComponents: [{start: 2, end: 4, label: "状语从句省略"}] },
          { start: 5, end: 5, label: "助动词", phonetic: "/kæn/", translation: "可以" },
          { start: 6, end: 6, label: "状语", phonetic: "/sɪɡˈnɪfɪkəntli/", translation: "显著地" },
          { start: 7, end: 7, label: "谓语", phonetic: "/ɪnˈhæns/", translation: "提高，增强" },
          { start: 8, end: 11, label: "宾语", phonetic: "/ɪmˈplɔɪiː/ /məˈræl/ /ænd/ /ˌproʊdʌkˈtɪvɪti/", translation: "员工士气和生产力" }
        ],
        analysis: [
          { type: "管理学词汇", text: "constructive feedback (建设性反馈)；employee morale (员工士气)；productivity (生产力)。" },
          { type: "语法功能", text: "when delivered appropriately 是 when it is delivered... 的省略，作插入状语。" }
        ]
      },
      {
        id: "work_s5",
        chinese: "鼓励持续专业发展的公司往往拥有更高的员工保留率",
        english_full: "Companies that encourage continuous professional development tend to boast higher employee retention rates.",
        words: [
          { word: "Companies", punctuation: "" }, { word: "that", punctuation: "" }, { word: "encourage", punctuation: "" },
          { word: "continuous", punctuation: "" }, { word: "professional", punctuation: "" }, { word: "development", punctuation: "" },
          { word: "tend", punctuation: "" }, { word: "to", punctuation: "" }, { word: "boast", punctuation: "" },
          { word: "higher", punctuation: "" }, { word: "employee", punctuation: "" }, { word: "retention", punctuation: "" },
          { word: "rates", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "主语", phonetic: "/ˈkʌmpəniz/ /ðæt/ /ɪnˈkɜːrɪdʒ/ /kənˈtɪnjuəs/ /prəˈfɛʃənəl/ /dɪˈvɛləpmənt/", translation: "鼓励持续专业发展的公司", subComponents: [{start: 1, end: 5, label: "定语从句"}] },
          { start: 6, end: 7, label: "谓语", phonetic: "/tɛnd/ /tuː/", translation: "往往，倾向于" },
          { start: 8, end: 8, label: "宾补/动词", phonetic: "/boʊst/", translation: "拥有(引以为傲的...)" },
          { start: 9, end: 12, label: "宾语", phonetic: "/ˈhaɪər/ /ɪmˈplɔɪiː/ /rɪˈtɛnʃən/ /reɪts/", translation: "更高的员工保留率" }
        ],
        analysis: [
          { type: "HR用语", text: "continuous professional development (CPD，持续专业发展)；employee retention rates (员工留存率/保留率)。" },
          { type: "高级用法", text: "boast 常见意为“吹嘘”，在正式文体中常表示“拥有(值得骄傲的事物)”，非常高级。" }
        ]
      }
    ]
  },
  {
    id: "art_01",
    title: "艺术与文化 (Art & Culture)",
    description: "雅思/托福必考：探讨文学、历史遗产与跨文化交流。",
    sentences: [
      {
        id: "art_s1",
        chinese: "博物馆的最新展览提供了对原住民充满活力的文化遗产的迷人一瞥",
        english_full: "The museum's latest exhibition offers a fascinating glimpse into the vibrant cultural heritage of the indigenous people.",
        words: [
          { word: "The", punctuation: "" }, { word: "museum's", punctuation: "" }, { word: "latest", punctuation: "" },
          { word: "exhibition", punctuation: "" }, { word: "offers", punctuation: "" }, { word: "a", punctuation: "" },
          { word: "fascinating", punctuation: "" }, { word: "glimpse", punctuation: "" }, { word: "into", punctuation: "" },
          { word: "the", punctuation: "" }, { word: "vibrant", punctuation: "" }, { word: "cultural", punctuation: "" },
          { word: "heritage", punctuation: "" }, { word: "of", punctuation: "" }, { word: "the", punctuation: "" },
          { word: "indigenous", punctuation: "" }, { word: "people", punctuation: "." }
        ],
        components: [
          { start: 0, end: 3, label: "主语", phonetic: "/ðə/ /mjuːˈziəmz/ /ˈleɪtɪst/ /ˌɛksɪˈbɪʃən/", translation: "博物馆的最新展览" },
          { start: 4, end: 4, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供" },
          { start: 5, end: 16, label: "宾语", phonetic: "/ə/ /ˈfæsɪˌneɪtɪŋ/ /ɡlɪmps/ /ˈɪntuː/ /ðə/ /ˈvaɪbrənt/ /ˈkʌltʃərəl/ /ˈhɛrɪtɪdʒ/ /əv/ /ði/ /ɪnˈdɪdʒənəs/ /ˈpiːpəl/", translation: "对原住民充满活力的文化遗产的迷人一瞥" }
        ],
        analysis: [
          { type: "人文表达", text: "cultural heritage (文化遗产)；indigenous people (原住民)。" },
          { type: "优美搭配", text: "offer a fascinating glimpse into... (提供对...迷人/深刻的一瞥)。" }
        ]
      },
      {
        id: "art_s2",
        chinese: "古典文学通过探索爱、背叛和救赎等普遍主题，继续引起现代读者的共鸣",
        english_full: "Classical literature continues to resonate with modern readers by exploring universal themes of love, betrayal, and redemption.",
        words: [
          { word: "Classical", punctuation: "" }, { word: "literature", punctuation: "" }, { word: "continues", punctuation: "" },
          { word: "to", punctuation: "" }, { word: "resonate", punctuation: "" }, { word: "with", punctuation: "" },
          { word: "modern", punctuation: "" }, { word: "readers", punctuation: "" }, { word: "by", punctuation: "" },
          { word: "exploring", punctuation: "" }, { word: "universal", punctuation: "" }, { word: "themes", punctuation: "" },
          { word: "of", punctuation: "" }, { word: "love", punctuation: "," }, { word: "betrayal", punctuation: "," },
          { word: "and", punctuation: "" }, { word: "redemption", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ˈklæsɪkəl/ /ˈlɪtərətʃər/", translation: "古典文学" },
          { start: 2, end: 2, label: "谓语", phonetic: "/kənˈtɪnjuːz/", translation: "继续" },
          { start: 3, end: 7, label: "宾语(不定式)", phonetic: "/tuː/ /ˈrɛzəˌneɪt/ /wɪð/ /ˈmɒdərn/ /ˈriːdərz/", translation: "引起现代读者的共鸣" },
          { start: 8, end: 16, label: "方式状语", phonetic: "/baɪ/ /ɪkˈsplɔːrɪŋ/ /ˌjuːnɪˈvɜːrsəl/ /θiːmz/ /əv/ /lʌv/ /bɪˈtreɪəl/ /ænd/ /rɪˈdɛmpʃən/", translation: "通过探索爱、背叛和救赎等普遍主题" }
        ],
        analysis: [
          { type: "神仙词汇", text: "resonate with (与...产生共鸣)；redemption (救赎)；betrayal (背叛)。" },
          { type: "文学词汇", text: "universal themes (普遍/永恒的主题)。" }
        ]
      },
      {
        id: "art_s3",
        chinese: "精通一种乐器不仅需要先天的天赋，还需要多年不懈的练习",
        english_full: "Mastering a musical instrument requires not only innate talent but also years of relentless practice.",
        words: [
          { word: "Mastering", punctuation: "" }, { word: "a", punctuation: "" }, { word: "musical", punctuation: "" },
          { word: "instrument", punctuation: "" }, { word: "requires", punctuation: "" }, { word: "not", punctuation: "" },
          { word: "only", punctuation: "" }, { word: "innate", punctuation: "" }, { word: "talent", punctuation: "" },
          { word: "but", punctuation: "" }, { word: "also", punctuation: "" }, { word: "years", punctuation: "" },
          { word: "of", punctuation: "" }, { word: "relentless", punctuation: "" }, { word: "practice", punctuation: "." }
        ],
        components: [
          { start: 0, end: 3, label: "主语(动名词)", phonetic: "/ˈmæstərɪŋ/ /ə/ /ˈmjuːzɪkəl/ /ˈɪnstrəmənt/", translation: "精通一种乐器" },
          { start: 4, end: 4, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "需要" },
          { start: 5, end: 14, label: "并列宾语", phonetic: "/nɒt/ /ˈoʊnli/ /ɪˈneɪt/ /ˈtælənt/ /bʌt/ /ˈɔːlsoʊ/ /jɪərz/ /əv/ /rɪˈlɛntləs/ /ˈpræktɪs/", translation: "不仅先天的天赋，还有多年不懈的练习" }
        ],
        analysis: [
          { type: "高级修饰", text: "innate talent (与生俱来的/先天的天赋)；relentless practice (不懈的/不间断的练习)。" },
          { type: "经典句型", text: "not only... but also... (不仅...而且...)连接两个平行的名词短语作宾语。" }
        ]
      },
      {
        id: "art_s4",
        chinese: "这座建筑奇迹将历史设计元素与现代审美情趣无缝融合",
        english_full: "The architectural marvel seamlessly blends historical design elements with contemporary aesthetic sensibilities.",
        words: [
          { word: "The", punctuation: "" }, { word: "architectural", punctuation: "" }, { word: "marvel", punctuation: "" },
          { word: "seamlessly", punctuation: "" }, { word: "blends", punctuation: "" }, { word: "historical", punctuation: "" },
          { word: "design", punctuation: "" }, { word: "elements", punctuation: "" }, { word: "with", punctuation: "" },
          { word: "contemporary", punctuation: "" }, { word: "aesthetic", punctuation: "" }, { word: "sensibilities", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌɑːrkɪˈtɛktʃərəl/ /ˈmɑːrvəl/", translation: "这座建筑奇迹" },
          { start: 3, end: 3, label: "状语", phonetic: "/ˈsiːmləsli/", translation: "无缝地" },
          { start: 4, end: 4, label: "谓语", phonetic: "/blɛndz/", translation: "混合，融合" },
          { start: 5, end: 11, label: "宾语", phonetic: "/hɪˈstɒrɪkəl/ /dɪˈzaɪn/ /ˈɛləmənts/ /wɪð/ /kənˈtɛmpəˌrɛri/ /ɛsˈθɛtɪk/ /ˌsɛnsɪˈbɪlɪtiz/", translation: "历史设计元素与现代审美情趣" }
        ],
        analysis: [
          { type: "艺术词汇", text: "marvel (奇迹/令人惊叹的事物)；contemporary aesthetic (当代审美)。" },
          { type: "高级动词", text: "blend A with B (把A与B融合)；seamlessly (完美无瑕地，天衣无缝地)。" }
        ]
      },
      {
        id: "art_s5",
        chinese: "文化同化往往导致独特语言传统的逐渐消失",
        english_full: "Cultural assimilation often leads to the gradual disappearance of unique linguistic traditions.",
        words: [
          { word: "Cultural", punctuation: "" }, { word: "assimilation", punctuation: "" }, { word: "often", punctuation: "" },
          { word: "leads", punctuation: "" }, { word: "to", punctuation: "" }, { word: "the", punctuation: "" },
          { word: "gradual", punctuation: "" }, { word: "disappearance", punctuation: "" }, { word: "of", punctuation: "" },
          { word: "unique", punctuation: "" }, { word: "linguistic", punctuation: "" }, { word: "traditions", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ˈkʌltʃərəl/ /əˌsɪmɪˈleɪʃən/", translation: "文化同化" },
          { start: 2, end: 2, label: "状语", phonetic: "/ˈɒfən/", translation: "往往" },
          { start: 3, end: 3, label: "谓语", phonetic: "/liːdz/", translation: "导致" },
          { start: 4, end: 4, label: "介词", phonetic: "/tuː/", translation: "至" },
          { start: 5, end: 11, label: "宾语", phonetic: "/ðə/ /ˈɡrædʒuəl/ /ˌdɪsəˈpɪərəns/ /əv/ /juˈniːk/ /lɪŋˈɡwɪstɪk/ /trəˈdɪʃənz/", translation: "独特语言传统的逐渐消失" }
        ],
        analysis: [
          { type: "社科核心词", text: "cultural assimilation (文化同化/汉化/西化等)；linguistic (语言的，语言学的)。" },
          { type: "精准名词", text: "the gradual disappearance of... (...的逐渐消失)。" }
        ]
      }
    ]
  },
  {
    id: "travel_01",
    title: "旅游与探索 (Travel & Tourism)",
    description: "雅思/生活级表达：涉及背包客、历史地标保护与可持续旅游。",
    sentences: [
      {
        id: "travel_s1",
        chinese: "这个偏远的岛屿已成为寻求未受破坏的自然之美的冒险背包客越来越受欢迎的目的地",
        english_full: "The remote island has become an increasingly popular destination for adventurous backpackers seeking untouched natural beauty.",
        words: [
          { word: "The", punctuation: "" }, { word: "remote", punctuation: "" }, { word: "island", punctuation: "" },
          { word: "has", punctuation: "" }, { word: "become", punctuation: "" }, { word: "an", punctuation: "" },
          { word: "increasingly", punctuation: "" }, { word: "popular", punctuation: "" }, { word: "destination", punctuation: "" },
          { word: "for", punctuation: "" }, { word: "adventurous", punctuation: "" }, { word: "backpackers", punctuation: "" },
          { word: "seeking", punctuation: "" }, { word: "untouched", punctuation: "" }, { word: "natural", punctuation: "" },
          { word: "beauty", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /rɪˈmoʊt/ /ˈaɪlənd/", translation: "这个偏远的岛屿" },
          { start: 3, end: 4, label: "系动词(完成时)", phonetic: "/hæz/ /bɪˈkʌm/", translation: "已经成为" },
          { start: 5, end: 15, label: "表语", phonetic: "/æn/ /ɪnˈkriːsɪŋli/ /ˈpɒpjələr/ /ˌdɛstɪˈneɪʃən/ /fɔːr/ /ədˈvɛntʃərəs/ /ˈbækˌpækərz/ /ˈsiːkɪŋ/ /ʌnˈtʌtʃt/ /ˈnætʃərəl/ /ˈbjuːti/", translation: "一个对于寻求未受破坏自然之美的冒险背包客来说越来越受欢迎的目的地", subComponents: [{start: 12, end: 15, label: "后置定语(现在分词)"}] }
        ],
        analysis: [
          { type: "旅游热词", text: "remote island (偏远岛屿)；adventurous backpackers (冒险的背包客)。" },
          { type: "绝佳形容词", text: "untouched (未受破坏的，原生态的，形容风景极佳)。" }
        ]
      },
      {
        id: "travel_s2",
        chinese: "可持续旅游旨在最大限度地减少对环境的负面影响，同时最大限度地增加当地社区的社会经济效益",
        english_full: "Sustainable tourism aims to minimize negative environmental impacts while maximizing socio-economic benefits for local communities.",
        words: [
          { word: "Sustainable", punctuation: "" }, { word: "tourism", punctuation: "" }, { word: "aims", punctuation: "" },
          { word: "to", punctuation: "" }, { word: "minimize", punctuation: "" }, { word: "negative", punctuation: "" },
          { word: "environmental", punctuation: "" }, { word: "impacts", punctuation: "" }, { word: "while", punctuation: "" },
          { word: "maximizing", punctuation: "" }, { word: "socio-economic", punctuation: "" }, { word: "benefits", punctuation: "" },
          { word: "for", punctuation: "" }, { word: "local", punctuation: "" }, { word: "communities", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/səˈsteɪnəbəl/ /ˈtʊrɪzəm/", translation: "可持续旅游" },
          { start: 2, end: 2, label: "谓语", phonetic: "/eɪmz/", translation: "旨在" },
          { start: 3, end: 7, label: "宾语", phonetic: "/tuː/ /ˈmɪnɪˌmaɪz/ /ˈnɛɡətɪv/ /ɪnˌvaɪrənˈmɛntəl/ /ˈɪmpækts/", translation: "使负面的环境影响最小化" },
          { start: 8, end: 14, label: "伴随状语", phonetic: "/waɪl/ /ˈmæksɪˌmaɪzɪŋ/ /ˈsoʊsioʊˌɛkəˈnɒmɪk/ /ˈbɛnɪfɪts/ /fɔːr/ /ˈloʊkəl/ /kəˈmjuːnɪtiz/", translation: "同时最大限度增加对当地社区的社会经济效益" }
        ],
        analysis: [
          { type: "对比论证词汇", text: "minimize (最小化) VS maximize (最大化)。" },
          { type: "社科前沿词", text: "sustainable tourism (可持续旅游)；socio-economic benefits (社会经济效益)。" }
        ]
      },
      {
        id: "travel_s3",
        chinese: "沉浸在异国文化中可以拓宽视野，并培养对全球多样性的更深层次的欣赏",
        english_full: "Immersing oneself in a foreign culture broadens one's horizons and fosters a deeper appreciation for global diversity.",
        words: [
          { word: "Immersing", punctuation: "" }, { word: "oneself", punctuation: "" }, { word: "in", punctuation: "" },
          { word: "a", punctuation: "" }, { word: "foreign", punctuation: "" }, { word: "culture", punctuation: "" },
          { word: "broadens", punctuation: "" }, { word: "one's", punctuation: "" }, { word: "horizons", punctuation: "" },
          { word: "and", punctuation: "" }, { word: "fosters", punctuation: "" }, { word: "a", punctuation: "" },
          { word: "deeper", punctuation: "" }, { word: "appreciation", punctuation: "" }, { word: "for", punctuation: "" },
          { word: "global", punctuation: "" }, { word: "diversity", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "主语(动名词)", phonetic: "/ɪˈmɜːrsɪŋ/ /wʌnˈsɛlf/ /ɪn/ /ə/ /ˈfɒrɪn/ /ˈkʌltʃər/", translation: "沉浸在异国文化中" },
          { start: 6, end: 8, label: "谓语+宾语 1", phonetic: "/ˈbrɔːdənz/ /wʌnz/ /həˈraɪzənz/", translation: "拓宽人的视野" },
          { start: 10, end: 16, label: "谓语+宾语 2", phonetic: "/ˈfɒstərz/ /ə/ /ˈdiːpər/ /əˌpriːʃiˈeɪʃən/ /fɔːr/ /ˈɡloʊbəl/ /daɪˈvɜːrsəti/", translation: "培养对全球多样性更深的欣赏" }
        ],
        analysis: [
          { type: "雅思王牌短语", text: "immerse oneself in (沉浸于...)；broaden one's horizons (开阔眼界)。" },
          { type: "高级表达", text: "foster an appreciation for (培养对...的欣赏/感激之情)。" }
        ]
      },
      {
        id: "travel_s4",
        chinese: "穿梭在熙熙攘攘的当地市场，可以品尝到这座城市充满活力的真实日常生活",
        english_full: "Navigating through the bustling local markets provides an authentic taste of the city's vibrant daily life.",
        words: [
          { word: "Navigating", punctuation: "" }, { word: "through", punctuation: "" }, { word: "the", punctuation: "" },
          { word: "bustling", punctuation: "" }, { word: "local", punctuation: "" }, { word: "markets", punctuation: "" },
          { word: "provides", punctuation: "" }, { word: "an", punctuation: "" }, { word: "authentic", punctuation: "" },
          { word: "taste", punctuation: "" }, { word: "of", punctuation: "" }, { word: "the", punctuation: "" },
          { word: "city's", punctuation: "" }, { word: "vibrant", punctuation: "" }, { word: "daily", punctuation: "" },
          { word: "life", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "主语(动名词)", phonetic: "/ˈnævɪˌɡeɪtɪŋ/ /θruː/ /ðə/ /ˈbʌslɪŋ/ /ˈloʊkəl/ /ˈmɑːrkɪts/", translation: "穿梭在熙熙攘攘的当地市场" },
          { start: 6, end: 6, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供" },
          { start: 7, end: 15, label: "宾语", phonetic: "/æn/ /ɔːˈθɛntɪk/ /teɪst/ /əv/ /ðə/ /ˈsɪtiz/ /ˈvaɪbrənt/ /ˈdeɪli/ /laɪf/", translation: "对这座城市充满活力的日常生活的真实体验(品尝)" }
        ],
        analysis: [
          { type: "生动描绘", text: "bustling (熙熙攘攘的)；authentic (真实的，原汁原味的)；vibrant (充满活力的)。" },
          { type: "形象动词", text: "navigate 意为导航，此处指在拥挤的市场中穿行游览。" }
        ]
      },
      {
        id: "travel_s5",
        chinese: "对历史地标的一丝不苟的保护对于维持这座城市独特的特征和魅力至关重要",
        english_full: "The meticulous preservation of historical landmarks is crucial for maintaining the city's unique identity and charm.",
        words: [
          { word: "The", punctuation: "" }, { word: "meticulous", punctuation: "" }, { word: "preservation", punctuation: "" },
          { word: "of", punctuation: "" }, { word: "historical", punctuation: "" }, { word: "landmarks", punctuation: "" },
          { word: "is", punctuation: "" }, { word: "crucial", punctuation: "" }, { word: "for", punctuation: "" },
          { word: "maintaining", punctuation: "" }, { word: "the", punctuation: "" }, { word: "city's", punctuation: "" },
          { word: "unique", punctuation: "" }, { word: "identity", punctuation: "" }, { word: "and", punctuation: "" },
          { word: "charm", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "主语", phonetic: "/ðə/ /mɪˈtɪkjələs/ /ˌprɛzərˈveɪʃən/ /əv/ /hɪˈstɒrɪkəl/ /ˈlændˌmɑːrks/", translation: "对历史地标的一丝不苟的保护" },
          { start: 6, end: 6, label: "系动词", phonetic: "/ɪz/", translation: "是" },
          { start: 7, end: 7, label: "表语", phonetic: "/ˈkruːʃəl/", translation: "至关重要的" },
          { start: 8, end: 15, label: "状语", phonetic: "/fɔːr/ /meɪnˈteɪnɪŋ/ /ðə/ /ˈsɪtiz/ /juˈniːk/ /aɪˈdɛntɪti/ /ænd/ /tʃɑːrm/", translation: "对于维持这座城市的独特特征与魅力" }
        ],
        analysis: [
          { type: "人文建筑", text: "meticulous preservation (一丝不苟的保护)；historical landmarks (历史地标)。" },
          { type: "优美名词", text: "unique identity (独特的身份/特征)；charm (魅力)。" }
        ]
      }
    ]
  }
];