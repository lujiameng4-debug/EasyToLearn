export const extensions = {
  "module_adverbial": [
    {
      id: "q_adv_1",
      chinese: "当经济危机爆发时，许多小企业被迫倒闭",
      english_full: "When the economic crisis hit, many small businesses were forced to shut down.",
      words: [
        { word: "When" }, { word: "the" }, { word: "economic" }, { word: "crisis" }, { word: "hit", punctuation: "," },
        { word: "many" }, { word: "small" }, { word: "businesses" }, { word: "were" }, { word: "forced" }, { word: "to" }, { word: "shut" }, { word: "down", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语从句", phonetic: "/wɛn/ /ði/ /ˌiːkəˈnɒmɪk/ /ˈkraɪsɪs/ /hɪt/", translation: "当经济危机爆发时",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 3, label: "(从)主" },
            { start: 4, end: 4, label: "(从)谓" }
          ]
        },
        { start: 5, end: 7, label: "主句主语", phonetic: "/ˈmɛni/ /smɔːl/ /ˈbɪznɪsɪz/", translation: "许多小企业" },
        { start: 8, end: 12, label: "主句谓语(被动)", phonetic: "/wɜːr/ /fɔːrst/ /tuː/ /ʃʌt/ /daʊn/", translation: "被迫倒闭" }
      ],
      analysis: [
        { type: "从句", text: "When 引导的时间状语从句，主从句动作几乎同时发生。hit 过去式仍为 hit。" },
        { type: "词汇", text: "economic crisis (经济危机)；shut down (倒闭，关闭)。" }
      ]
    },
    {
      id: "q_adv_2",
      chinese: "当经理在发表讲话时，听众全神贯注地倾听着",
      english_full: "While the manager was delivering the speech, the audience listened attentively.",
      words: [
        { word: "While" }, { word: "the" }, { word: "manager" }, { word: "was" }, { word: "delivering" }, { word: "the" }, { word: "speech", punctuation: "," },
        { word: "the" }, { word: "audience" }, { word: "listened" }, { word: "attentively", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间状语从句", phonetic: "/waɪl/ /ðə/ /ˈmænɪdʒər/ /wɒz/ /dɪˈlɪvərɪŋ/ /ðə/ /spiːtʃ/", translation: "当经理正在发表演讲时",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 2, label: "(从)主" },
            { start: 3, end: 4, label: "(从)谓(过进)" },
            { start: 5, end: 6, label: "(从)宾" }
          ]
        },
        { start: 7, end: 8, label: "主句主语", phonetic: "/ðə/ /ˈɔːdiəns/", translation: "听众" },
        { start: 9, end: 9, label: "主句谓语", phonetic: "/ˈlɪsənd/", translation: "倾听" },
        { start: 10, end: 10, label: "主句状语", phonetic: "/əˈtɛntɪvli/", translation: "全神贯注地" }
      ],
      analysis: [
        { type: "从句", text: "While 引导时间状语从句，通常伴随进行时，强调动作的持续性。" },
        { type: "搭配", text: "deliver a speech (发表演讲)；listen attentively (专注地听)。" }
      ]
    },
    {
      id: "q_adv_3",
      chinese: "一旦这项新政策生效，市场无疑将会作出反应",
      english_full: "As soon as the new policy takes effect, the market will undoubtedly react.",
      words: [
        { word: "As" }, { word: "soon" }, { word: "as" }, { word: "the" }, { word: "new" }, { word: "policy" }, { word: "takes" }, { word: "effect", punctuation: "," },
        { word: "the" }, { word: "market" }, { word: "will" }, { word: "undoubtedly" }, { word: "react", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "时间状语从句", phonetic: "/æz/ /suːn/ /æz/ /ðə/ /njuː/ /ˈpɒlɪsi/ /teɪks/ /ɪˈfɛkt/", translation: "一旦新政策生效",
          subComponents: [
            { start: 0, end: 2, label: "连词短语" },
            { start: 3, end: 5, label: "(从)主" },
            { start: 6, end: 7, label: "(从)谓(动词短语)" }
          ]
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/ðə/ /ˈmɑːrkɪt/", translation: "市场" },
        { start: 10, end: 12, label: "主句谓语", phonetic: "/wɪl/ /ʌnˈdaʊtɪdli/ /riˈækt/", translation: "将无疑作出反应" }
      ],
      analysis: [
        { type: "从句", text: "as soon as 引导时间状语从句，遵循“主将从现”原则(主句将来时，从句一般现在时)。" },
        { type: "词汇用法", text: "take effect (生效)；undoubtedly (毫无疑问地)。" }
      ]
    },
    {
      id: "q_adv_4",
      chinese: "无论哪里发生工业化，都必须优先考虑环境保护",
      english_full: "Environmental protection must be prioritized wherever industrialization occurs.",
      words: [
        { word: "Environmental" }, { word: "protection" }, { word: "must" }, { word: "be" }, { word: "prioritized" },
        { word: "wherever" }, { word: "industrialization" }, { word: "occurs", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ɪnˌvaɪrənˈmɛntəl/ /prəˈtɛkʃən/", translation: "环境保护" },
        { start: 2, end: 4, label: "主句谓语", phonetic: "/mʌst/ /bi/ /praɪˈɒrɪˌtaɪzd/", translation: "必须被优先考虑" },
        {
          start: 5, end: 7, label: "地点状语从句", phonetic: "/wɛərˈɛvər/ /ɪnˌdʌstriəlaɪˈzeɪʃən/ /əˈkɜːrz/", translation: "无论哪里发生工业化",
          subComponents: [
            { start: 5, end: 5, label: "连词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 7, label: "(从)谓" }
          ]
        }
      ],
      analysis: [
        { type: "从句", text: "wherever 引导地点状语从句，相当于 no matter where (无论在哪里)。" },
        { type: "高级词汇", text: "prioritize (优先处理)；industrialization (工业化)。" }
      ]
    },
    {
      id: "q_adv_5",
      chinese: "由于对电动汽车的需求激增，电池价格正在上涨",
      english_full: "Because the demand for electric vehicles has surged, battery prices are increasing.",
      words: [
        { word: "Because" }, { word: "the" }, { word: "demand" }, { word: "for" }, { word: "electric" }, { word: "vehicles" }, { word: "has" }, { word: "surged", punctuation: "," },
        { word: "battery" }, { word: "prices" }, { word: "are" }, { word: "increasing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "原因状语从句", phonetic: "/bɪˈkɒz/ /ðə/ /dɪˈmænd/ /fɔːr/ /ɪˈlɛktrɪk/ /ˈviːɪkəlz/ /hæz/ /sɜːrdʒd/", translation: "因为对电动汽车的需求已经激增",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 5, label: "(从)主" },
            { start: 6, end: 7, label: "(从)谓(现完)" }
          ]
        },
        { start: 8, end: 9, label: "主句主语", phonetic: "/ˈbætəri/ /ˈpraɪsɪz/", translation: "电池价格" },
        { start: 10, end: 11, label: "主句谓语", phonetic: "/ɑːr/ /ɪnˈkriːsɪŋ/", translation: "正在上涨" }
      ],
      analysis: [
        { type: "从句", text: "because 引导原因状语从句，语气最强，常用于回答 why 的提问。" },
        { type: "学术词汇", text: "demand for (对...的需求)；surge (激增，猛增) 替换 increase 更加生动。" }
      ]
    },
    {
      id: "q_adv_6",
      chinese: "既然预算受到严重限制，我们必须优化我们的营销策略",
      english_full: "Since the budget is severely limited, we have to optimize our marketing strategy.",
      words: [
        { word: "Since" }, { word: "the" }, { word: "budget" }, { word: "is" }, { word: "severely" }, { word: "limited", punctuation: "," },
        { word: "we" }, { word: "have" }, { word: "to" }, { word: "optimize" }, { word: "our" }, { word: "marketing" }, { word: "strategy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "原因状语从句", phonetic: "/sɪns/ /ðə/ /ˈbʌdʒɪt/ /ɪz/ /sɪˈvɪərli/ /ˈlɪmɪtɪd/", translation: "既然预算被严重限制",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 2, label: "(从)主" },
            { start: 3, end: 5, label: "(从)系表/被动" }
          ]
        },
        { start: 6, end: 6, label: "主句主语", phonetic: "/wiː/", translation: "我们" },
        { start: 7, end: 9, label: "主句谓语", phonetic: "/hæv/ /tuː/ /ˈɒptɪˌmaɪz/", translation: "不得不优化" },
        { start: 10, end: 12, label: "主句宾语", phonetic: "/aʊər/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒi/", translation: "我们的营销策略" }
      ],
      analysis: [
        { type: "从句", text: "since 在此作连词，引导原因状语从句，意为“既然、因为”，多指双方已知的客观事实。" },
        { type: "职场词汇", text: "severely limited (严重受限的)；optimize (优化)。" }
      ]
    },
    {
      id: "q_adv_7",
      chinese: "既然合同已经签署，我们可以进入下一个阶段了",
      english_full: "Now that the contract is signed, we can proceed with the next phase.",
      words: [
        { word: "Now" }, { word: "that" }, { word: "the" }, { word: "contract" }, { word: "is" }, { word: "signed", punctuation: "," },
        { word: "we" }, { word: "can" }, { word: "proceed" }, { word: "with" }, { word: "the" }, { word: "next" }, { word: "phase", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "原因状语从句", phonetic: "/naʊ/ /ðæt/ /ðə/ /ˈkɒntrækt/ /ɪz/ /saɪnd/", translation: "既然合同已经被签",
          subComponents: [
            { start: 0, end: 1, label: "连词短语" },
            { start: 2, end: 3, label: "(从)主" },
            { start: 4, end: 5, label: "(从)谓(被动)" }
          ]
        },
        { start: 6, end: 6, label: "主句主语", phonetic: "/wiː/", translation: "我们" },
        { start: 7, end: 9, label: "主句谓语", phonetic: "/kæn/ /prəˈsiːd/ /wɪθ/", translation: "可以继续进行" },
        { start: 10, end: 12, label: "主句宾语", phonetic: "/ðə/ /nɛkst/ /feɪz/", translation: "下一个阶段" }
      ],
      analysis: [
        { type: "从句", text: "now that (既然) 是常用的原因状语从句引导词，强调由于某事刚刚发生而产生的影响。" },
        { type: "搭配使用", text: "proceed with sth. (继续进行某事)。" }
      ]
    },
    {
      id: "q_adv_8",
      chinese: "如果这家公司无法创新，它将不可避免地失去其市场份额",
      english_full: "If the company fails to innovate, it will inevitably lose its market share.",
      words: [
        { word: "If" }, { word: "the" }, { word: "company" }, { word: "fails" }, { word: "to" }, { word: "innovate", punctuation: "," },
        { word: "it" }, { word: "will" }, { word: "inevitably" }, { word: "lose" }, { word: "its" }, { word: "market" }, { word: "share", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "条件状语从句", phonetic: "/ɪf/ /ðə/ /ˈkʌmpəni/ /feɪlz/ /tuː/ /ˈɪnəveɪt/", translation: "如果这家公司未能够创新",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 2, label: "(从)主" },
            { start: 3, end: 5, label: "(从)谓(主将从现)" }
          ]
        },
        { start: 6, end: 6, label: "主句主语", phonetic: "/ɪt/", translation: "它" },
        { start: 7, end: 9, label: "主句谓语", phonetic: "/wɪl/ /ɪˈnɛvɪtəbli/ /luːz/", translation: "将不可避免地失去" },
        { start: 10, end: 12, label: "主句宾语", phonetic: "/ɪts/ /ˈmɑːrkɪt/ /ʃɛər/", translation: "它的市场份额" }
      ],
      analysis: [
        { type: "从句", text: "if 引导条件状语从句，遵循主将从现原则(fails 为一般现在时)。" },
        { type: "商业词汇", text: "fail to do (未能做...)；inevitably (不可避免地)；market share (市场份额)。" }
      ]
    },
    {
      id: "q_adv_9",
      chinese: "除非实施严格的措施，否则污染水平将继续上升",
      english_full: "Unless strict measures are implemented, pollution levels will continue to rise.",
      words: [
        { word: "Unless" }, { word: "strict" }, { word: "measures" }, { word: "are" }, { word: "implemented", punctuation: "," },
        { word: "pollution" }, { word: "levels" }, { word: "will" }, { word: "continue" }, { word: "to" }, { word: "rise", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "条件状语从句", phonetic: "/ʌnˈlɛs/ /strɪkt/ /ˈmɛʒərz/ /ɑːr/ /ˈɪmplɪmɛntɪd/", translation: "除非严格的措施被实施",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 2, label: "(从)主" },
            { start: 3, end: 4, label: "(从)谓(被动)" }
          ]
        },
        { start: 5, end: 6, label: "主句主语", phonetic: "/pəˈluːʃən/ /ˈlɛvəlz/", translation: "污染水平" },
        { start: 7, end: 10, label: "主句谓语", phonetic: "/wɪl/ /kənˈtɪnjuː/ /tuː/ /raɪz/", translation: "将继续上升" }
      ],
      analysis: [
        { type: "从句", text: "unless (除非) 引导条件状语从句，相当于 if...not。同样遵循主将从现。" },
        { type: "搭配", text: "implement measures (实施措施)。" }
      ]
    },
    {
      id: "q_adv_10",
      chinese: "只要所有利益相关者同意，该项目就将于下个月开始",
      english_full: "Provided that all stakeholders agree, the project will commence next month.",
      words: [
        { word: "Provided" }, { word: "that" }, { word: "all" }, { word: "stakeholders" }, { word: "agree", punctuation: "," },
        { word: "the" }, { word: "project" }, { word: "will" }, { word: "commence" }, { word: "next" }, { word: "month", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "条件状语从句", phonetic: "/prəˈvaɪdɪd/ /ðæt/ /ɔːl/ /ˈsteɪkˌhoʊldərz/ /əˈgriː/", translation: "只要所有利益相关者同意",
          subComponents: [
            { start: 0, end: 1, label: "连词短语" },
            { start: 2, end: 3, label: "(从)主" },
            { start: 4, end: 4, label: "(从)谓" }
          ]
        },
        { start: 5, end: 6, label: "主句主语", phonetic: "/ðə/ /ˈprɒdʒɛkt/", translation: "项目" },
        { start: 7, end: 8, label: "主句谓语", phonetic: "/wɪl/ /kəˈmɛns/", translation: "将开始" },
        { start: 9, end: 10, label: "主句时间状语", phonetic: "/nɛkst/ /mʌnθ/", translation: "下个月" }
      ],
      analysis: [
        { type: "从句", text: "Provided that (只要，如果) 是高级条件状语从句引导词，相当于 as long as 或 if。" },
        { type: "雅思词汇", text: "stakeholder (利益相关者)；commence (开始) 替换 start/begin。" }
      ]
    },
    {
      id: "q_adv_11",
      chinese: "尽管最初的结果令人失望，研究团队依然坚持不懈",
      english_full: "Although the initial results were disappointing, the research team persevered.",
      words: [
        { word: "Although" }, { word: "the" }, { word: "initial" }, { word: "results" }, { word: "were" }, { word: "disappointing", punctuation: "," },
        { word: "the" }, { word: "research" }, { word: "team" }, { word: "persevered", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "让步状语从句", phonetic: "/ɔːlˈðoʊ/ /ði/ /ɪˈnɪʃəl/ /rɪˈzʌlts/ /wɜːr/ /ˌdɪsəˈpɔɪntɪŋ/", translation: "尽管最初的结果令人失望",
          subComponents: [
            { start: 0, end: 0, label: "连词" },
            { start: 1, end: 3, label: "(从)主" },
            { start: 4, end: 4, label: "(从)系" },
            { start: 5, end: 5, label: "(从)表" }
          ]
        },
        { start: 6, end: 8, label: "主句主语", phonetic: "/ðə/ /rɪˈsɜːrtʃ/ /tiːm/", translation: "研究团队" },
        { start: 9, end: 9, label: "主句谓语", phonetic: "/ˌpɜːrsəˈvɪərd/", translation: "坚持不懈" }
      ],
      analysis: [
        { type: "从句", text: "Although 引导让步状语从句，主句前不能再使用 but，因为英语中不能同时使用两个连词。" },
        { type: "高级词汇", text: "initial (最初的)；persevere (坚持不懈，不屈不挠) 是绝佳的不及物动词。" }
      ]
    },
    {
      id: "q_adv_12",
      chinese: "即使谈判破裂，我们也必须保持专业的态度",
      english_full: "Even if the negotiations break down, we must maintain a professional attitude.",
      words: [
        { word: "Even" }, { word: "if" }, { word: "the" }, { word: "negotiations" }, { word: "break" }, { word: "down", punctuation: "," },
        { word: "we" }, { word: "must" }, { word: "maintain" }, { word: "a" }, { word: "professional" }, { word: "attitude", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "让步状语从句", phonetic: "/ˈiːvən/ /ɪf/ /ðə/ /nɪˌgoʊʃiˈeɪʃənz/ /breɪk/ /daʊn/", translation: "即使谈判破裂",
          subComponents: [
            { start: 0, end: 1, label: "连词短语" },
            { start: 2, end: 3, label: "(从)主" },
            { start: 4, end: 5, label: "(从)谓(不及物短语)" }
          ]
        },
        { start: 6, end: 6, label: "主句主语", phonetic: "/wiː/", translation: "我们" },
        { start: 7, end: 8, label: "主句谓语", phonetic: "/mʌst/ /meɪnˈteɪn/", translation: "必须保持" },
        { start: 9, end: 11, label: "主句宾语", phonetic: "/ə/ /prəˈfɛʃənəl/ /ˈætɪtuːd/", translation: "一种专业的态度" }
      ],
      analysis: [
        { type: "从句", text: "Even if (即使) 引导让步状语从句，多包含假设的意味；而 even though 多陈述既定事实。" },
        { type: "商务词汇", text: "negotiation (谈判)；break down (破裂)；maintain an attitude (保持态度)。" }
      ]
    },
    {
      id: "q_adv_13",
      chinese: "不管任务有多么具有挑战性，她总是满怀热情地处理它",
      english_full: "No matter how challenging the task might be, she always tackles it with enthusiasm.",
      words: [
        { word: "No" }, { word: "matter" }, { word: "how" }, { word: "challenging" }, { word: "the" }, { word: "task" }, { word: "might" }, { word: "be", punctuation: "," },
        { word: "she" }, { word: "always" }, { word: "tackles" }, { word: "it" }, { word: "with" }, { word: "enthusiasm", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "让步状语从句", phonetic: "/noʊ/ /ˈmætər/ /haʊ/ /ˈtʃælɪndʒɪŋ/ /ðə/ /tæsk/ /maɪt/ /bi/", translation: "不管任务可能会有多挑战",
          subComponents: [
            { start: 0, end: 2, label: "连词短语" },
            { start: 3, end: 3, label: "(从)表(前置)" },
            { start: 4, end: 5, label: "(从)主" },
            { start: 6, end: 7, label: "(从)系" }
          ]
        },
        { start: 8, end: 8, label: "主句主语", phonetic: "/ʃiː/", translation: "她" },
        { start: 9, end: 10, label: "主句谓语", phonetic: "/ˈɔːlweɪz/ /ˈtækəlz/", translation: "总是处理" },
        { start: 11, end: 11, label: "主句宾语", phonetic: "/ɪt/", translation: "它" },
        { start: 12, end: 13, label: "方式状语", phonetic: "/wɪθ/ /ɪnˈθuːziæzəm/", translation: "满怀热情地" }
      ],
      analysis: [
        { type: "从句结构", text: "No matter how + adj. + 主 + 谓 (不管...多么...) 引导让步状语从句，相当于 however。" },
        { type: "好词用法", text: "tackle (处理，对付) 替换 deal with；with enthusiasm (充满热情地)。" }
      ]
    },
    {
      id: "q_adv_14",
      chinese: "风暴是如此地具有破坏性，以至于它彻底摧毁了这座沿海小镇",
      english_full: "The storm was so destructive that it completely devastated the coastal town.",
      words: [
        { word: "The" }, { word: "storm" }, { word: "was" }, { word: "so" }, { word: "destructive" },
        { word: "that" }, { word: "it" }, { word: "completely" }, { word: "devastated" }, { word: "the" }, { word: "coastal" }, { word: "town", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /stɔːrm/", translation: "风暴" },
        { start: 2, end: 2, label: "主句系动词", phonetic: "/wɒz/", translation: "是" },
        { start: 3, end: 4, label: "主句表语", phonetic: "/soʊ/ /dɪˈstrʌktɪv/", translation: "如此具有破坏性" },
        {
          start: 5, end: 11, label: "结果状语从句", phonetic: "/ðæt/ /ɪt/ /kəmˈpliːtli/ /ˈdɛvəsteɪtɪd/ /ðə/ /ˈkoʊstəl/ /taʊn/", translation: "以至于它彻底摧毁了这座沿海小镇",
          subComponents: [
            { start: 5, end: 5, label: "连词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 8, label: "(从)谓语(副+动)" },
            { start: 9, end: 11, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "从句", text: "so...that... (如此...以至于...) 引导结果状语从句。so 后面跟形容词或副词。" },
        { type: "高级词汇", text: "devastate (彻底摧毁) 比 destroy 语气更强；coastal (沿海的)。" }
      ]
    },
    {
      id: "q_adv_15",
      chinese: "这是一项如此史无前例的技术突破，以至于震惊了世界",
      english_full: "It was such an unprecedented technological breakthrough that it shocked the world.",
      words: [
        { word: "It" }, { word: "was" }, { word: "such" }, { word: "an" }, { word: "unprecedented" }, { word: "technological" }, { word: "breakthrough" },
        { word: "that" }, { word: "it" }, { word: "shocked" }, { word: "the" }, { word: "world", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ɪt/", translation: "它" },
        { start: 1, end: 1, label: "系动词", phonetic: "/wɒz/", translation: "是" },
        { start: 2, end: 6, label: "表语", phonetic: "/sʌtʃ/ /æn/ /ʌnˈprɛsɪˌdɛntɪd/ /ˌtɛknəˈlɒdʒɪkəl/ /ˈbreɪkθruː/", translation: "这样一个史无前例的技术突破" },
        {
          start: 7, end: 11, label: "结果状语从句", phonetic: "/ðæt/ /ɪt/ /ʃɒkt/ /ðə/ /wɜːrld/", translation: "以至于它震惊了世界",
          subComponents: [
            { start: 7, end: 7, label: "连词" },
            { start: 8, end: 8, label: "(从)主" },
            { start: 9, end: 9, label: "(从)谓" },
            { start: 10, end: 11, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "从句", text: "such...that... 引导结果状语从句。与 so 不同，such 后面必须跟名词短语。" },
        { type: "科技好词", text: "unprecedented (史无前例的)；breakthrough (突破)。" }
      ]
    },
    {
      id: "q_adv_16",
      chinese: "他们升级了安全系统，以便能够防止未经授权的访问",
      english_full: "They upgraded the security system so that unauthorized access could be prevented.",
      words: [
        { word: "They" }, { word: "upgraded" }, { word: "the" }, { word: "security" }, { word: "system" },
        { word: "so" }, { word: "that" }, { word: "unauthorized" }, { word: "access" }, { word: "could" }, { word: "be" }, { word: "prevented", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/ðeɪ/", translation: "他们" },
        { start: 1, end: 1, label: "主句谓语", phonetic: "/ʌpˈgreɪdɪd/", translation: "升级了" },
        { start: 2, end: 4, label: "主句宾语", phonetic: "/ðə/ /sɪˈkjʊərɪti/ /ˈsɪstəm/", translation: "安全系统" },
        {
          start: 5, end: 11, label: "目的状语从句", phonetic: "/soʊ/ /ðæt/ /ʌnˈɔːθəraɪzd/ /ˈæksɛs/ /kʊd/ /bi/ /prɪˈvɛntɪd/", translation: "为了防止未授权的访问",
          subComponents: [
            { start: 5, end: 6, label: "连词短语" },
            { start: 7, end: 8, label: "(从)主" },
            { start: 9, end: 11, label: "(从)谓(被动)" }
          ]
        }
      ],
      analysis: [
        { type: "从句", text: "so that (以便，为了) 连用，引导目的状语从句，从句中常包含 can/could/may/might 等情态动词。" },
        { type: "IT词汇", text: "unauthorized access (未经授权的访问/登录)。" }
      ]
    },
    {
      id: "q_adv_17",
      chinese: "政府拨出了更多的资金，以便公共基础设施能够得到改善",
      english_full: "The government allocated more funds in order that public infrastructure could be improved.",
      words: [
        { word: "The" }, { word: "government" }, { word: "allocated" }, { word: "more" }, { word: "funds" },
        { word: "in" }, { word: "order" }, { word: "that" }, { word: "public" }, { word: "infrastructure" }, { word: "could" }, { word: "be" }, { word: "improved", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈgʌvərnmənt/", translation: "政府" },
        { start: 2, end: 2, label: "主句谓语", phonetic: "/ˈæləkeɪtɪd/", translation: "分配了(拨出)" },
        { start: 3, end: 4, label: "主句宾语", phonetic: "/mɔːr/ /fʌndz/", translation: "更多资金" },
        {
          start: 5, end: 12, label: "目的状语从句", phonetic: "/ɪn/ /ˈɔːrdər/ /ðæt/ /ˈpʌblɪk/ /ˈɪnfrəˌstrʌktʃər/ /kʊd/ /bi/ /ɪmˈpruːvd/", translation: "以便公共基础设施能被改善",
          subComponents: [
            { start: 5, end: 7, label: "连词短语" },
            { start: 8, end: 9, label: "(从)主" },
            { start: 10, end: 12, label: "(从)谓(被动)" }
          ]
        }
      ],
      analysis: [
        { type: "从句", text: "in order that 与 so that 用法相似，引导目的状语从句，语气更正式庄重。" },
        { type: "社会话题词", text: "allocate funds (分配/下拨资金)；infrastructure (基础设施)。" }
      ]
    },
    {
      id: "q_adv_18",
      chinese: "该软件的功能完全正如开发者最初预期的那样",
      english_full: "The software functions exactly as the developers originally intended.",
      words: [
        { word: "The" }, { word: "software" }, { word: "functions" }, { word: "exactly" },
        { word: "as" }, { word: "the" }, { word: "developers" }, { word: "originally" }, { word: "intended", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈsɒftwɛər/", translation: "该软件" },
        { start: 2, end: 2, label: "主句谓语(不及物)", phonetic: "/ˈfʌŋkʃənz/", translation: "起作用(功能)" },
        { start: 3, end: 3, label: "副词", phonetic: "/ɪgˈzæktli/", translation: "完全地" },
        {
          start: 4, end: 8, label: "方式状语从句", phonetic: "/æz/ /ðə/ /dɪˈvɛləpərz/ /əˈrɪdʒɪnəli/ /ɪnˈtɛndɪd/", translation: "正如开发者最初预期的那样",
          subComponents: [
            { start: 4, end: 4, label: "连词" },
            { start: 5, end: 6, label: "(从)主" },
            { start: 7, end: 8, label: "(从)谓" }
          ]
        }
      ],
      analysis: [
        { type: "从句", text: "as (正如，按照...的方式) 引导方式状语从句，描述主句动作发生的方式。" },
        { type: "词性转换", text: "function 在这里用作动词，意为“运转，起作用”；intend (打算，预期)。" }
      ]
    },
    {
      id: "q_adv_19",
      chinese: "那个腐败的官员表现得好像他对任何不当行为都完全无辜似的",
      english_full: "The corrupt official behaved as if he were entirely innocent of any wrongdoing.",
      words: [
        { word: "The" }, { word: "corrupt" }, { word: "official" }, { word: "behaved" },
        { word: "as" }, { word: "if" }, { word: "he" }, { word: "were" }, { word: "entirely" }, { word: "innocent" }, { word: "of" }, { word: "any" }, { word: "wrongdoing", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主句主语", phonetic: "/ðə/ /kəˈrʌpt/ /əˈfɪʃəl/", translation: "那个腐败官员" },
        { start: 3, end: 3, label: "主句谓语", phonetic: "/bɪˈheɪvd/", translation: "表现得" },
        {
          start: 4, end: 12, label: "方式状语从句(虚拟)", phonetic: "/æz/ /ɪf/ /hiː/ /wɜːr/ /ɪnˈtaɪərli/ /ˈɪnəsənt/ /ɒv/ /ˈɛni/ /ˈrɒŋˌduːɪŋ/", translation: "好像他完全无辜似的",
          subComponents: [
            { start: 4, end: 5, label: "连词短语" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 7, label: "(从)系" },
            { start: 8, end: 12, label: "(从)表(含介宾)" }
          ]
        }
      ],
      analysis: [
        { type: "从句/虚拟", text: "as if (好像) 引导方式状语从句。因为与事实相反(他其实不无辜)，从句使用了虚拟语气，be 动词统一用 were。" },
        { type: "搭配", text: "be innocent of... (对...是无辜的)；wrongdoing (不当行为)。" }
      ]
    },
    {
      id: "q_adv_20",
      chinese: "你在教育上投入的资源越多，社会就会变得越繁荣",
      english_full: "The more resources you invest in education, the more prosperous the society will become.",
      words: [
        { word: "The" }, { word: "more" }, { word: "resources" }, { word: "you" }, { word: "invest" }, { word: "in" }, { word: "education", punctuation: "," },
        { word: "the" }, { word: "more" }, { word: "prosperous" }, { word: "the" }, { word: "society" }, { word: "will" }, { word: "become", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "比较状语从句", phonetic: "/ðə/ /mɔːr/ /rɪˈzɔːrsɪz/ /juː/ /ɪnˈvɛst/ /ɪn/ /ˌɛdʒʊˈkeɪʃən/", translation: "你投入越多的资源在教育上",
          subComponents: [
            { start: 0, end: 2, label: "比较级+名词" },
            { start: 3, end: 3, label: "(从)主" },
            { start: 4, end: 6, label: "(从)谓+状" }
          ]
        },
        {
          start: 7, end: 13, label: "主句(结果)", phonetic: "/ðə/ /mɔːr/ /ˈprɒspərəs/ /ðə/ /səˈsaɪəti/ /wɪl/ /bɪˈkʌm/", translation: "社会将变得越繁荣",
          subComponents: [
            { start: 7, end: 9, label: "比较级+形容词(表语提前)" },
            { start: 10, end: 11, label: "主" },
            { start: 12, end: 13, label: "系" }
          ]
        }
      ],
      analysis: [
        { type: "语法结构", text: "The + 比较级..., the + 比较级... (越...，就越...)。前半句相当于条件状语，后半句为结果。此处为经典的倒装形式，把宾语和表语提前了。" },
        { type: "写作加分词", text: "prosperous (繁荣的，富强的)。" }
      ]
    }
  ]
};