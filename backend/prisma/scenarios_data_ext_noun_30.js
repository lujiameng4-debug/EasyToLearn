export const extensions = {
  "module_noun": [
    {
      id: "q_noun_s100",
      chinese: "他们能否在截止日期前完成项目仍然不确定",
      english_full: "Whether they can finish the project before the deadline remains uncertain.",
      words: [
        { word: "Whether" }, { word: "they" }, { word: "can" }, { word: "finish" }, { word: "the" }, { word: "project" }, { word: "before" }, { word: "the" }, { word: "deadline" }, { word: "remains" }, { word: "uncertain", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 8, label: "主语 (主语从句)", phonetic: "/ˈwɛðər/ /ðeɪ/ /kæn/ /ˈfɪnɪʃ/ /ðə/ /ˈprɒdʒɛkt/ /bɪˈfɔːr/ /ðə/ /ˈdɛdlaɪn/", translation: "他们是否能在截止日期前完成项目",
          subComponents: [{ startIndex: 0, words: [{ word: "Whether" }, { word: "they" }, { word: "can" }, { word: "finish" }, { word: "the" }, { word: "project" }, { word: "before" }, { word: "the" }, { word: "deadline" }] }]
        },
        {
          start: 9, end: 9, label: "系动词", phonetic: "/rɪˈmeɪnz/", translation: "仍然是",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 10, end: 10, label: "表语", phonetic: "/ʌnˈsɜːrtn/", translation: "不确定的",
          subComponents: [{ startIndex: 0, words: [{ word: "uncertain", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "Whether 引导的从句在整个句子中作主语，表示“是否”。" }
      ]
    },
    {
      id: "q_noun_s101",
      chinese: "真正区分卓越领导者的是他们在压力下适应变化的能力",
      english_full: "What distinguishes exceptional leaders is their ability to adapt under pressure.",
      words: [
        { word: "What" }, { word: "distinguishes" }, { word: "exceptional" }, { word: "leaders" }, { word: "is" }, { word: "their" }, { word: "ability" }, { word: "to" }, { word: "adapt" }, { word: "under" }, { word: "pressure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语 (主语从句)", phonetic: "/wɒt/ /dɪˈstɪŋɡwɪʃɪz/ /ɪkˈsɛpʃənəl/ /ˈliːdərz/", translation: "真正区分卓越领导者的（东西）",
          subComponents: [{ startIndex: 0, words: [{ word: "What" }, { word: "distinguishes" }, { word: "exceptional" }, { word: "leaders" }] }]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 5, end: 10, label: "表语", phonetic: "/ðɛər/ /əˈbɪlɪti/ /tuː/ /əˈdæpt/ /ˈʌndər/ /ˈprɛʃər/", translation: "他们在压力下适应变化的能力",
          subComponents: [{ startIndex: 0, words: [{ word: "their" }, { word: "ability" }, { word: "to" }, { word: "adapt" }, { word: "under" }, { word: "pressure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "What 引导主语从句，在从句中作主语，意为“……的事物/特征”。" }
      ]
    },
    {
      id: "q_noun_s102",
      chinese: "远程办公正在重塑企业文化，这一点已日益明显",
      english_full: "It has become increasingly evident that remote work is reshaping corporate culture.",
      words: [
        { word: "It" }, { word: "has" }, { word: "become" }, { word: "increasingly" }, { word: "evident" }, { word: "that" }, { word: "remote" }, { word: "work" }, { word: "is" }, { word: "reshaping" }, { word: "corporate" }, { word: "culture", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "形式主语", phonetic: "/ɪt/", translation: "它",
          subComponents: [{ startIndex: 0, words: [{ word: "It" }] }]
        },
        {
          start: 1, end: 4, label: "系表结构", phonetic: "/hæz/ /bɪˈkʌm/ /ɪnˈkriːsɪŋli/ /ˈɛvɪdənt/", translation: "已变得日益明显",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "become" }, { word: "increasingly" }, { word: "evident" }] }]
        },
        {
          start: 5, end: 11, label: "真正主语 (主语从句)", phonetic: "/ðæt/ /rɪˈmoʊt/ /wɜːrk/ /ɪz/ /riːˈʃeɪpɪŋ/ /ˈkɔːrpərət/ /ˈkʌltʃər/", translation: "远程办公正在重塑企业文化",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "remote" }, { word: "work" }, { word: "is" }, { word: "reshaping" }, { word: "corporate" }, { word: "culture", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "It 作形式主语，that 引导的从句为真正主语，避免头重脚轻。" }
      ]
    },
    {
      id: "q_noun_s103",
      chinese: "任何违反保密协议的人都将面临法律后果",
      english_full: "Whoever breaches the confidentiality agreement will face legal consequences.",
      words: [
        { word: "Whoever" }, { word: "breaches" }, { word: "the" }, { word: "confidentiality" }, { word: "agreement" }, { word: "will" }, { word: "face" }, { word: "legal" }, { word: "consequences", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语 (主语从句)", phonetic: "/huːˈɛvər/ /ˈbriːtʃɪz/ /ðə/ /ˌkɒnfɪˈdɛnʃəlɪti/ /əˈɡriːmənt/", translation: "任何违反保密协议的人",
          subComponents: [{ startIndex: 0, words: [{ word: "Whoever" }, { word: "breaches" }, { word: "the" }, { word: "confidentiality" }, { word: "agreement" }] }]
        },
        {
          start: 5, end: 8, label: "谓语", phonetic: "/wɪl/ /feɪs/ /ˈliːɡəl/ /ˈkɒnsɪkwənsɪz/", translation: "将面临法律后果",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "face" }, { word: "legal" }, { word: "consequences", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "Whoever 引导主语从句，相当于 anyone who，在从句中作主语。" }
      ]
    },
    {
      id: "q_noun_s104",
      chinese: "中央银行将如何应对通胀令金融市场担忧",
      english_full: "How the central bank will respond to inflation concerns the financial markets.",
      words: [
        { word: "How" }, { word: "the" }, { word: "central" }, { word: "bank" }, { word: "will" }, { word: "respond" }, { word: "to" }, { word: "inflation" }, { word: "concerns" }, { word: "the" }, { word: "financial" }, { word: "markets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "主语 (主语从句)", phonetic: "/haʊ/ /ðə/ /ˈsɛntrəl/ /bæŋk/ /wɪl/ /rɪˈspɒnd/ /tuː/ /ɪnˈfleɪʃən/", translation: "中央银行将如何应对通胀",
          subComponents: [{ startIndex: 0, words: [{ word: "How" }, { word: "the" }, { word: "central" }, { word: "bank" }, { word: "will" }, { word: "respond" }, { word: "to" }, { word: "inflation" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/kənˈsɜːrnz/", translation: "令……担忧",
          subComponents: [{ startIndex: 0, words: [{ word: "concerns" }] }]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ðə/ /faɪˈnænʃəl/ /ˈmɑːrkɪts/", translation: "金融市场",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "financial" }, { word: "markets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "How 引导主语从句，在从句中作方式状语，整个从句作主语。" }
      ]
    },
    {
      id: "q_noun_s105",
      chinese: "合并案获得批准令行业分析师感到意外",
      english_full: "That the merger was approved surprised industry analysts.",
      words: [
        { word: "That" }, { word: "the" }, { word: "merger" }, { word: "was" }, { word: "approved" }, { word: "surprised" }, { word: "industry" }, { word: "analysts", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语 (主语从句)", phonetic: "/ðæt/ /ðə/ /ˈmɜːrdʒər/ /wɒz/ /əˈpruːvd/", translation: "合并案获得批准",
          subComponents: [{ startIndex: 0, words: [{ word: "That" }, { word: "the" }, { word: "merger" }, { word: "was" }, { word: "approved" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/sərˈpraɪzd/", translation: "使……感到意外",
          subComponents: [{ startIndex: 0, words: [{ word: "surprised" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈɪndəstri/ /ˈænəlɪsts/", translation: "行业分析师",
          subComponents: [{ startIndex: 0, words: [{ word: "industry" }, { word: "analysts", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "That 引导主语从句置于句首，that 在从句中无实义，不可省略。" }
      ]
    },
    {
      id: "q_noun_s106",
      chinese: "公司将研究预算投向何处仍是一项战略优先事项",
      english_full: "Where the company allocates its research budget remains a strategic priority.",
      words: [
        { word: "Where" }, { word: "the" }, { word: "company" }, { word: "allocates" }, { word: "its" }, { word: "research" }, { word: "budget" }, { word: "remains" }, { word: "a" }, { word: "strategic" }, { word: "priority", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语 (主语从句)", phonetic: "/wɛər/ /ðə/ /ˈkʌmpəni/ /ˈæləkeɪts/ /ɪts/ /rɪˈsɜːrtʃ/ /ˈbʌdʒɪt/", translation: "公司将研究预算投向何处",
          subComponents: [{ startIndex: 0, words: [{ word: "Where" }, { word: "the" }, { word: "company" }, { word: "allocates" }, { word: "its" }, { word: "research" }, { word: "budget" }] }]
        },
        {
          start: 7, end: 7, label: "系动词", phonetic: "/rɪˈmeɪnz/", translation: "仍然是",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 8, end: 10, label: "表语", phonetic: "/ə/ /strəˈtiːdʒɪk/ /praɪˈɒrɪti/", translation: "一项战略优先事项",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "strategic" }, { word: "priority", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "Where 引导主语从句，在从句中作地点状语。" }
      ]
    },
    {
      id: "q_noun_s107",
      chinese: "可持续投资能否带来稳定回报仍在经济学家中争论不休",
      english_full: "Whether sustainable investing delivers consistent returns is still debated among economists.",
      words: [
        { word: "Whether" }, { word: "sustainable" }, { word: "investing" }, { word: "delivers" }, { word: "consistent" }, { word: "returns" }, { word: "is" }, { word: "still" }, { word: "debated" }, { word: "among" }, { word: "economists", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语 (主语从句)", phonetic: "/ˈwɛðər/ /səˈsteɪnəbəl/ /ɪnˈvɛstɪŋ/ /dɪˈlɪvərz/ /kənˈsɪstənt/ /rɪˈtɜːrnz/", translation: "可持续投资能否带来稳定回报",
          subComponents: [{ startIndex: 0, words: [{ word: "Whether" }, { word: "sustainable" }, { word: "investing" }, { word: "delivers" }, { word: "consistent" }, { word: "returns" }] }]
        },
        {
          start: 6, end: 8, label: "谓语 (被动)", phonetic: "/ɪz/ /stɪl/ /dɪˈbeɪtɪd/", translation: "仍在争论",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "still" }, { word: "debated" }] }]
        },
        {
          start: 9, end: 10, label: "状语", phonetic: "/əˈmʌŋ/ /ɪˈkɒnəmɪsts/", translation: "在经济学家中",
          subComponents: [{ startIndex: 0, words: [{ word: "among" }, { word: "economists", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主语从句", text: "Whether 引导的主语从句作主语时，谓语动词通常用单数 (is debated)。" }
      ]
    },
    {
      id: "q_noun_s108",
      chinese: "董事会确认季度营收超出了所有预期",
      english_full: "The board confirmed that the quarterly revenue exceeded all projections.",
      words: [
        { word: "The" }, { word: "board" }, { word: "confirmed" }, { word: "that" }, { word: "the" }, { word: "quarterly" }, { word: "revenue" }, { word: "exceeded" }, { word: "all" }, { word: "projections", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/kənˈfɜːrmd/", translation: "确认",
          subComponents: [{ startIndex: 0, words: [{ word: "confirmed" }] }]
        },
        {
          start: 3, end: 9, label: "宾语 (宾语从句)", phonetic: "/ðæt/ /ðə/ /ˈkwɔːrtərli/ /ˈrɛvənjuː/ /ɪkˈsiːdɪd/ /ɔːl/ /prəˈdʒɛkʃənz/", translation: "季度营收超出了所有预期",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "quarterly" }, { word: "revenue" }, { word: "exceeded" }, { word: "all" }, { word: "projections", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "That 引导宾语从句，作 confirmed 的宾语，that 在从句中无实义。" }
      ]
    },
    {
      id: "q_noun_s109",
      chinese: "投资者想知道下个月利率是否会被下调",
      english_full: "Investors want to know whether interest rates will be cut next month.",
      words: [
        { word: "Investors" }, { word: "want" }, { word: "to" }, { word: "know" }, { word: "whether" }, { word: "interest" }, { word: "rates" }, { word: "will" }, { word: "be" }, { word: "cut" }, { word: "next" }, { word: "month", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "Investors" }] }]
        },
        {
          start: 1, end: 3, label: "谓语", phonetic: "/wɒnt/ /tuː/ /noʊ/", translation: "想知道",
          subComponents: [{ startIndex: 0, words: [{ word: "want" }, { word: "to" }, { word: "know" }] }]
        },
        {
          start: 4, end: 11, label: "宾语 (宾语从句)", phonetic: "/ˈwɛðər/ /ˈɪntrəst/ /reɪts/ /wɪl/ /biː/ /kʌt/ /nɛkst/ /mʌnθ/", translation: "下个月利率是否会被下调",
          subComponents: [{ startIndex: 0, words: [{ word: "whether" }, { word: "interest" }, { word: "rates" }, { word: "will" }, { word: "be" }, { word: "cut" }, { word: "next" }, { word: "month", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "Whether 引导宾语从句，作 know 的宾语，表示“是否”。" }
      ]
    },
    {
      id: "q_noun_s110",
      chinese: "顾问解释了最初实施方案为何未能达到预期",
      english_full: "The consultant explained why the initial implementation failed to meet expectations.",
      words: [
        { word: "The" }, { word: "consultant" }, { word: "explained" }, { word: "why" }, { word: "the" }, { word: "initial" }, { word: "implementation" }, { word: "failed" }, { word: "to" }, { word: "meet" }, { word: "expectations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kənˈsʌltənt/", translation: "顾问",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "consultant" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪkˈspleɪnd/", translation: "解释",
          subComponents: [{ startIndex: 0, words: [{ word: "explained" }] }]
        },
        {
          start: 3, end: 10, label: "宾语 (宾语从句)", phonetic: "/waɪ/ /ðə/ /ɪˈnɪʃəl/ /ˌɪmplɪmɛnˈteɪʃən/ /ˈfeɪld/ /tuː/ /miːt/ /ˌɛkspɛkˈteɪʃənz/", translation: "最初实施方案为何未能达到预期",
          subComponents: [{ startIndex: 0, words: [{ word: "why" }, { word: "the" }, { word: "initial" }, { word: "implementation" }, { word: "failed" }, { word: "to" }, { word: "meet" }, { word: "expectations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "Why 引导宾语从句，从句须用陈述语序 (why the implementation failed...)，不可用疑问语序。" }
      ]
    },
    {
      id: "q_noun_s111",
      chinese: "我们无法确定监管审查流程将持续多长时间",
      english_full: "We cannot determine how long the regulatory review process will take.",
      words: [
        { word: "We" }, { word: "cannot" }, { word: "determine" }, { word: "how" }, { word: "long" }, { word: "the" }, { word: "regulatory" }, { word: "review" }, { word: "process" }, { word: "will" }, { word: "take", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/ˈkænɒt/ /dɪˈtɜːrmɪn/", translation: "无法确定",
          subComponents: [{ startIndex: 0, words: [{ word: "cannot" }, { word: "determine" }] }]
        },
        {
          start: 3, end: 10, label: "宾语 (宾语从句)", phonetic: "/haʊ/ /lɒŋ/ /ðə/ /ˈrɛɡjələtɔːri/ /rɪˈvjuː/ /ˈprɒsɛs/ /wɪl/ /teɪk/", translation: "监管审查流程将持续多长时间",
          subComponents: [{ startIndex: 0, words: [{ word: "how" }, { word: "long" }, { word: "the" }, { word: "regulatory" }, { word: "review" }, { word: "process" }, { word: "will" }, { word: "take", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "How long 引导宾语从句，在从句中作时间状语，作 determine 的宾语。" }
      ]
    },
    {
      id: "q_noun_s112",
      chinese: "请告诉我们你们打算采取哪些措施来降低风险",
      english_full: "Please tell us what measures you intend to implement to mitigate the risks.",
      words: [
        { word: "Please" }, { word: "tell" }, { word: "us" }, { word: "what" }, { word: "measures" }, { word: "you" }, { word: "intend" }, { word: "to" }, { word: "implement" }, { word: "to" }, { word: "mitigate" }, { word: "the" }, { word: "risks", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "谓语", phonetic: "/pliːz/ /tɛl/ /ʌs/", translation: "请告诉",
          subComponents: [{ startIndex: 0, words: [{ word: "Please" }, { word: "tell" }, { word: "us" }] }]
        },
        {
          start: 3, end: 12, label: "直接宾语 (宾语从句)", phonetic: "/wɒt/ /ˈmɛʒərz/ /juː/ /ɪnˈtɛnd/ /tuː/ /ˈɪmplɪmɛnt/ /tuː/ /ˈmɪtɪɡeɪt/ /ðə/ /rɪsks/", translation: "你们打算采取哪些措施来降低风险",
          subComponents: [{ startIndex: 0, words: [{ word: "what" }, { word: "measures" }, { word: "you" }, { word: "intend" }, { word: "to" }, { word: "implement" }, { word: "to" }, { word: "mitigate" }, { word: "the" }, { word: "risks", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "What measures 引导宾语从句，what 修饰 measures，从句作 tell 的直接宾语。" }
      ]
    },
    {
      id: "q_noun_s113",
      chinese: "首席执行官向股东保证，尽管经济下行，股息仍将维持",
      english_full: "The CEO assured shareholders that dividends would be maintained despite the downturn.",
      words: [
        { word: "The" }, { word: "CEO" }, { word: "assured" }, { word: "shareholders" }, { word: "that" }, { word: "dividends" }, { word: "would" }, { word: "be" }, { word: "maintained" }, { word: "despite" }, { word: "the" }, { word: "downturn", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌsiː.iːˈoʊ/", translation: "首席执行官",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "CEO" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈʃʊrd/", translation: "向……保证",
          subComponents: [{ startIndex: 0, words: [{ word: "assured" }] }]
        },
        {
          start: 3, end: 3, label: "间接宾语", phonetic: "/ˈʃɛrˌhoʊldərz/", translation: "股东",
          subComponents: [{ startIndex: 0, words: [{ word: "shareholders" }] }]
        },
        {
          start: 4, end: 11, label: "直接宾语 (宾语从句)", phonetic: "/ðæt/ /ˈdɪvɪdɛndz/ /wʊd/ /biː/ /meɪnˈteɪnd/ /dɪˈspaɪt/ /ðə/ /ˈdaʊntɜːrn/", translation: "尽管经济下行，股息仍将维持",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "dividends" }, { word: "would" }, { word: "be" }, { word: "maintained" }, { word: "despite" }, { word: "the" }, { word: "downturn", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "That 引导宾语从句，作 assured 的直接宾语，构成双宾语结构。" }
      ]
    },
    {
      id: "q_noun_s114",
      chinese: "研究人员发现长期接触微塑料会影响认知功能",
      english_full: "Researchers discovered that prolonged exposure to microplastics affects cognitive function.",
      words: [
        { word: "Researchers" }, { word: "discovered" }, { word: "that" }, { word: "prolonged" }, { word: "exposure" }, { word: "to" }, { word: "microplastics" }, { word: "affects" }, { word: "cognitive" }, { word: "function", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/rɪˈsɜːrtʃərz/", translation: "研究人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Researchers" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/dɪˈskʌvərd/", translation: "发现",
          subComponents: [{ startIndex: 0, words: [{ word: "discovered" }] }]
        },
        {
          start: 2, end: 9, label: "宾语 (宾语从句)", phonetic: "/ðæt/ /prəˈlɒŋd/ /ɪkˈspoʊʒər/ /tuː/ /ˌmaɪkroʊˈplæstɪks/ /əˈfɛkts/ /ˈkɒɡnɪtɪv/ /ˈfʌŋkʃən/", translation: "长期接触微塑料会影响认知功能",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "prolonged" }, { word: "exposure" }, { word: "to" }, { word: "microplastics" }, { word: "affects" }, { word: "cognitive" }, { word: "function", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "That 引导宾语从句，作 discovered 的宾语，从句内部为主谓宾结构。" }
      ]
    },
    {
      id: "q_noun_s115",
      chinese: "董事会正在审议公司是否应拓展东南亚市场",
      english_full: "The board is deliberating whether the company should expand into Southeast Asia.",
      words: [
        { word: "The" }, { word: "board" }, { word: "is" }, { word: "deliberating" }, { word: "whether" }, { word: "the" }, { word: "company" }, { word: "should" }, { word: "expand" }, { word: "into" }, { word: "Southeast" }, { word: "Asia", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ɪz/ /dɪˈlɪbəˌreɪtɪŋ/", translation: "正在审议",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "deliberating" }] }]
        },
        {
          start: 4, end: 11, label: "宾语 (宾语从句)", phonetic: "/ˈwɛðər/ /ðə/ /ˈkʌmpəni/ /ʃʊd/ /ɪkˈspænd/ /ˈɪntuː/ /ˌsaʊθˈist/ /ˈeɪʒə/", translation: "公司是否应拓展东南亚市场",
          subComponents: [{ startIndex: 0, words: [{ word: "whether" }, { word: "the" }, { word: "company" }, { word: "should" }, { word: "expand" }, { word: "into" }, { word: "Southeast" }, { word: "Asia", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "Whether 引导宾语从句，作 deliberating 的宾语，表示两种可能性之间的抉择。" }
      ]
    },
    {
      id: "q_noun_s116",
      chinese: "根本问题在于当前商业模式是否具有财务可行性",
      english_full: "The fundamental issue is whether the current business model is financially viable.",
      words: [
        { word: "The" }, { word: "fundamental" }, { word: "issue" }, { word: "is" }, { word: "whether" }, { word: "the" }, { word: "current" }, { word: "business" }, { word: "model" }, { word: "is" }, { word: "financially" }, { word: "viable", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌfʌndəˈmɛntl/ /ˈɪʃuː/", translation: "根本问题",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "fundamental" }, { word: "issue" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "在于",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 4, end: 11, label: "表语 (表语从句)", phonetic: "/ˈwɛðər/ /ðə/ /ˈkʌrənt/ /ˈbɪznɪs/ /ˈmɒdəl/ /ɪz/ /faɪˈnænʃəli/ /ˈvaɪəbəl/", translation: "当前商业模式是否具有财务可行性",
          subComponents: [{ startIndex: 0, words: [{ word: "whether" }, { word: "the" }, { word: "current" }, { word: "business" }, { word: "model" }, { word: "is" }, { word: "financially" }, { word: "viable", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "表语从句", text: "Whether 引导表语从句，放在系动词 is 之后，说明主语 issue 的具体内容。" }
      ]
    },
    {
      id: "q_noun_s117",
      chinese: "那正是委员会拒绝所提修正案的原因",
      english_full: "That is precisely why the committee rejected the proposed amendment.",
      words: [
        { word: "That" }, { word: "is" }, { word: "precisely" }, { word: "why" }, { word: "the" }, { word: "committee" }, { word: "rejected" }, { word: "the" }, { word: "proposed" }, { word: "amendment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ðæt/", translation: "那",
          subComponents: [{ startIndex: 0, words: [{ word: "That" }] }]
        },
        {
          start: 1, end: 2, label: "系动词+状语", phonetic: "/ɪz/ /prɪˈsaɪsli/", translation: "正是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "precisely" }] }]
        },
        {
          start: 3, end: 9, label: "表语 (表语从句)", phonetic: "/waɪ/ /ðə/ /kəˈmɪti/ /rɪˈdʒɛktɪd/ /ðə/ /prəˈpoʊzd/ /əˈmɛndmənt/", translation: "委员会拒绝所提修正案的原因",
          subComponents: [{ startIndex: 0, words: [{ word: "why" }, { word: "the" }, { word: "committee" }, { word: "rejected" }, { word: "the" }, { word: "proposed" }, { word: "amendment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "表语从句", text: "Why 引导表语从句，That is why... 是地道的因果说明结构。" }
      ]
    },
    {
      id: "q_noun_s118",
      chinese: "专家们的共识是气候适应需要前所未有的投资",
      english_full: "The consensus among experts is that climate adaptation requires unprecedented investment.",
      words: [
        { word: "The" }, { word: "consensus" }, { word: "among" }, { word: "experts" }, { word: "is" }, { word: "that" }, { word: "climate" }, { word: "adaptation" }, { word: "requires" }, { word: "unprecedented" }, { word: "investment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /kənˈsɛnsəs/ /əˈmʌŋ/ /ˈɛkspɜːrts/", translation: "专家们的共识",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "consensus" }, { word: "among" }, { word: "experts" }] }]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 5, end: 10, label: "表语 (表语从句)", phonetic: "/ðæt/ /ˈklaɪmət/ /ˌædæpˈteɪʃən/ /rɪˈkwaɪərz/ /ʌnˈprɛsɪdɛntɪd/ /ɪnˈvɛstmənt/", translation: "气候适应需要前所未有的投资",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "climate" }, { word: "adaptation" }, { word: "requires" }, { word: "unprecedented" }, { word: "investment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "表语从句", text: "That 引导表语从句，补充说明 consensus 的具体内容。" }
      ]
    },
    {
      id: "q_noun_s119",
      chinese: "我最担心的是重组期间如何留住顶尖人才",
      english_full: "My primary concern is how we will retain top talent during the restructuring.",
      words: [
        { word: "My" }, { word: "primary" }, { word: "concern" }, { word: "is" }, { word: "how" }, { word: "we" }, { word: "will" }, { word: "retain" }, { word: "top" }, { word: "talent" }, { word: "during" }, { word: "the" }, { word: "restructuring", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/maɪ/ /ˈpraɪmɛri/ /kənˈsɜːrn/", translation: "我最担心的事",
          subComponents: [{ startIndex: 0, words: [{ word: "My" }, { word: "primary" }, { word: "concern" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 4, end: 12, label: "表语 (表语从句)", phonetic: "/haʊ/ /wiː/ /wɪl/ /rɪˈteɪn/ /tɒp/ /ˈtælənt/ /ˈdjʊərɪŋ/ /ðə/ /riːˈstrʌktʃərɪŋ/", translation: "重组期间如何留住顶尖人才",
          subComponents: [{ startIndex: 0, words: [{ word: "how" }, { word: "we" }, { word: "will" }, { word: "retain" }, { word: "top" }, { word: "talent" }, { word: "during" }, { word: "the" }, { word: "restructuring", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "表语从句", text: "How 引导表语从句，在从句中作方式状语，说明 concern 的具体内容。" }
      ]
    },
    {
      id: "q_noun_s120",
      chinese: "事实是没有任何单一政策能够应对城市贫困的复杂性",
      english_full: "The truth is that no single policy can address the complexity of urban poverty.",
      words: [
        { word: "The" }, { word: "truth" }, { word: "is" }, { word: "that" }, { word: "no" }, { word: "single" }, { word: "policy" }, { word: "can" }, { word: "address" }, { word: "the" }, { word: "complexity" }, { word: "of" }, { word: "urban" }, { word: "poverty", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /truːθ/", translation: "事实",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "truth" }] }]
        },
        {
          start: 2, end: 2, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 3, end: 13, label: "表语 (表语从句)", phonetic: "/ðæt/ /noʊ/ /ˈsɪŋɡəl/ /ˈpɒlɪsi/ /kæn/ /əˈdrɛs/ /ðə/ /kəmˈplɛksɪti/ /ɒv/ /ˈɜːrbən/ /ˈpɒvərti/", translation: "没有任何单一政策能够应对城市贫困的复杂性",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "no" }, { word: "single" }, { word: "policy" }, { word: "can" }, { word: "address" }, { word: "the" }, { word: "complexity" }, { word: "of" }, { word: "urban" }, { word: "poverty", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "表语从句", text: "That 引导表语从句，The truth is that... 常用于雅思/托福论证写作。" }
      ]
    },
    {
      id: "q_noun_s121",
      chinese: "媒体流传的消息是首席执行官打算卸任",
      english_full: "The rumor circulating in the media is that the CEO intends to step down.",
      words: [
        { word: "The" }, { word: "rumor" }, { word: "circulating" }, { word: "in" }, { word: "the" }, { word: "media" }, { word: "is" }, { word: "that" }, { word: "the" }, { word: "CEO" }, { word: "intends" }, { word: "to" }, { word: "step" }, { word: "down", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˈruːmər/ /ˈsɜːrkjəˌleɪtɪŋ/ /ɪn/ /ðə/ /ˈmiːdiə/", translation: "媒体流传的消息",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "rumor" }, { word: "circulating" }, { word: "in" }, { word: "the" }, { word: "media" }] }]
        },
        {
          start: 6, end: 6, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 7, end: 13, label: "表语 (表语从句)", phonetic: "/ðæt/ /ðə/ /ˌsiː.iːˈoʊ/ /ɪnˈtɛndz/ /tuː/ /stɛp/ /daʊn/", translation: "首席执行官打算卸任",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "CEO" }, { word: "intends" }, { word: "to" }, { word: "step" }, { word: "down", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "表语从句", text: "That 引导表语从句，说明 rumor 的具体内容，step down 意为“卸任/辞职”。" }
      ]
    },
    {
      id: "q_noun_s122",
      chinese: "证据支持这样的结论：早期干预能显著改善结果",
      english_full: "The evidence supports the conclusion that early intervention significantly improves outcomes.",
      words: [
        { word: "The" }, { word: "evidence" }, { word: "supports" }, { word: "the" }, { word: "conclusion" }, { word: "that" }, { word: "early" }, { word: "intervention" }, { word: "significantly" }, { word: "improves" }, { word: "outcomes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɛvɪdəns/", translation: "证据",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "evidence" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/səˈpɔːrts/", translation: "支持",
          subComponents: [{ startIndex: 0, words: [{ word: "supports" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /kənˈkluːʒən/", translation: "结论",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "conclusion" }] }]
        },
        {
          start: 5, end: 10, label: "同位语 (同位语从句)", phonetic: "/ðæt/ /ˈɜːrli/ /ˌɪntərˈvɛnʃən/ /sɪɡˈnɪfɪkəntli/ /ɪmˈpruːvz/ /ˈaʊtkʌmz/", translation: "早期干预能显著改善结果",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "early" }, { word: "intervention" }, { word: "significantly" }, { word: "improves" }, { word: "outcomes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "同位语从句", text: "That 引导同位语从句，解释抽象名词 conclusion 的具体内容，that 不可省略。" }
      ]
    },
    {
      id: "q_noun_s123",
      chinese: "外界广泛猜测这笔收购将在年底前完成",
      english_full: "There is widespread speculation that the acquisition will be finalized by year-end.",
      words: [
        { word: "There" }, { word: "is" }, { word: "widespread" }, { word: "speculation" }, { word: "that" }, { word: "the" }, { word: "acquisition" }, { word: "will" }, { word: "be" }, { word: "finalized" }, { word: "by" }, { word: "year-end", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɛər/ /ɪz/ /ˈwaɪdˌsprɛd/ /ˌspɛkjəˈleɪʃən/", translation: "广泛猜测",
          subComponents: [{ startIndex: 0, words: [{ word: "There" }, { word: "is" }, { word: "widespread" }, { word: "speculation" }] }]
        },
        {
          start: 4, end: 11, label: "同位语 (同位语从句)", phonetic: "/ðæt/ /ðə/ /ˌækwɪˈzɪʃən/ /wɪl/ /biː/ /ˈfaɪnəlaɪzd/ /baɪ/ /ˈjɪərˌɛnd/", translation: "这笔收购将在年底前完成",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "acquisition" }, { word: "will" }, { word: "be" }, { word: "finalized" }, { word: "by" }, { word: "year-end", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "同位语从句", text: "That 引导同位语从句，修饰 speculation，说明猜测的具体内容。" }
      ]
    },
    {
      id: "q_noun_s124",
      chinese: "董事会发表声明，所有员工都将接受全面再培训",
      english_full: "The board issued a statement that all employees would receive comprehensive retraining.",
      words: [
        { word: "The" }, { word: "board" }, { word: "issued" }, { word: "a" }, { word: "statement" }, { word: "that" }, { word: "all" }, { word: "employees" }, { word: "would" }, { word: "receive" }, { word: "comprehensive" }, { word: "retraining", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɪʃuːd/", translation: "发表",
          subComponents: [{ startIndex: 0, words: [{ word: "issued" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ə/ /ˈsteɪtmənt/", translation: "声明",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "statement" }] }]
        },
        {
          start: 5, end: 11, label: "同位语 (同位语从句)", phonetic: "/ðæt/ /ɔːl/ /ɪmˈplɔɪiːz/ /wʊd/ /rɪˈsiːv/ /ˌkɒmprɪˈhɛnsɪv/ /riːˈtreɪnɪŋ/", translation: "所有员工都将接受全面再培训",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "all" }, { word: "employees" }, { word: "would" }, { word: "receive" }, { word: "comprehensive" }, { word: "retraining", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "同位语从句", text: "That 引导同位语从句，解释 statement 的具体内容，与定语从句不同，that 不作成分。" }
      ]
    },
    {
      id: "q_noun_s125",
      chinese: "我们收到确认，专利申请已获批准",
      english_full: "We received confirmation that our patent application had been granted.",
      words: [
        { word: "We" }, { word: "received" }, { word: "confirmation" }, { word: "that" }, { word: "our" }, { word: "patent" }, { word: "application" }, { word: "had" }, { word: "been" }, { word: "granted", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/rɪˈsiːvd/", translation: "收到",
          subComponents: [{ startIndex: 0, words: [{ word: "received" }] }]
        },
        {
          start: 2, end: 2, label: "宾语", phonetic: "/ˌkɒnfərˈmeɪʃən/", translation: "确认",
          subComponents: [{ startIndex: 0, words: [{ word: "confirmation" }] }]
        },
        {
          start: 3, end: 9, label: "同位语 (同位语从句)", phonetic: "/ðæt/ /aʊər/ /ˈpætənt/ /ˌæplɪˈkeɪʃən/ /hæd/ /bɪn/ /ˈɡræntɪd/", translation: "我们的专利申请已获批准",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "our" }, { word: "patent" }, { word: "application" }, { word: "had" }, { word: "been" }, { word: "granted", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "同位语从句", text: "That 引导同位语从句，补充说明 confirmation 的内容，从句用过去完成被动语态。" }
      ]
    },
    {
      id: "q_noun_s126",
      chinese: "肠道细菌影响心理健康的假说已获得大量支持",
      english_full: "The hypothesis that gut bacteria influence mental health has gained substantial traction.",
      words: [
        { word: "The" }, { word: "hypothesis" }, { word: "that" }, { word: "gut" }, { word: "bacteria" }, { word: "influence" }, { word: "mental" }, { word: "health" }, { word: "has" }, { word: "gained" }, { word: "substantial" }, { word: "traction", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "主语 (含同位语从句)", phonetic: "/ðə/ /haɪˈpɒθəsɪs/ /ðæt/ /ɡʌt/ /bækˈtɪəriə/ /ˈɪnfluəns/ /ˈmɛntl/ /hɛlθ/", translation: "肠道细菌影响心理健康的假说",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hypothesis" }, { word: "that" }, { word: "gut" }, { word: "bacteria" }, { word: "influence" }, { word: "mental" }, { word: "health" }] }]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /ɡeɪnd/", translation: "已获得",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "gained" }] }]
        },
        {
          start: 10, end: 11, label: "宾语", phonetic: "/səbˈstænʃəl/ /ˈtrækʃən/", translation: "大量支持",
          subComponents: [{ startIndex: 0, words: [{ word: "substantial" }, { word: "traction", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "同位语从句", text: "That 引导同位语从句，嵌入主语内部，解释 hypothesis 的具体内容。" }
      ]
    },
    {
      id: "q_noun_s127",
      chinese: "学费上涨的消息引发了校园抗议",
      english_full: "The announcement that tuition fees would increase sparked protests on campus.",
      words: [
        { word: "The" }, { word: "announcement" }, { word: "that" }, { word: "tuition" }, { word: "fees" }, { word: "would" }, { word: "increase" }, { word: "sparked" }, { word: "protests" }, { word: "on" }, { word: "campus", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语 (含同位语从句)", phonetic: "/ðə/ /əˈnaʊnsmənt/ /ðæt/ /tjuːˈɪʃən/ /fiːz/ /wʊd/ /ɪnˈkriːs/", translation: "学费上涨的消息",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "announcement" }, { word: "that" }, { word: "tuition" }, { word: "fees" }, { word: "would" }, { word: "increase" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/spɑːrkt/", translation: "引发",
          subComponents: [{ startIndex: 0, words: [{ word: "sparked" }] }]
        },
        {
          start: 8, end: 10, label: "宾语+状语", phonetic: "/ˈprɒtɛsts/ /ɒn/ /ˈkæmpəs/", translation: "校园抗议",
          subComponents: [{ startIndex: 0, words: [{ word: "protests" }, { word: "on" }, { word: "campus", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "同位语从句", text: "That 引导同位语从句修饰 announcement，说明公告的具体内容。" }
      ]
    },
    {
      id: "q_noun_s128",
      chinese: "他们对该时间表是否现实表示严重保留意见",
      english_full: "They expressed serious reservations about whether the timeline was realistic.",
      words: [
        { word: "They" }, { word: "expressed" }, { word: "serious" }, { word: "reservations" }, { word: "about" }, { word: "whether" }, { word: "the" }, { word: "timeline" }, { word: "was" }, { word: "realistic", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ðeɪ/", translation: "他们",
          subComponents: [{ startIndex: 0, words: [{ word: "They" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ɪkˈsprɛst/", translation: "表示",
          subComponents: [{ startIndex: 0, words: [{ word: "expressed" }] }]
        },
        {
          start: 2, end: 3, label: "宾语", phonetic: "/ˈsɪəriəs/ /ˌrɛzərˈveɪʃənz/", translation: "严重保留意见",
          subComponents: [{ startIndex: 0, words: [{ word: "serious" }, { word: "reservations" }] }]
        },
        {
          start: 4, end: 4, label: "介词", phonetic: "/əˈbaʊt/", translation: "关于",
          subComponents: [{ startIndex: 0, words: [{ word: "about" }] }]
        },
        {
          start: 5, end: 9, label: "介词宾语 (宾语从句)", phonetic: "/ˈwɛðər/ /ðə/ /ˈtaɪmlaɪn/ /wɒz/ /riːˈælɪstɪk/", translation: "该时间表是否现实",
          subComponents: [{ startIndex: 0, words: [{ word: "whether" }, { word: "the" }, { word: "timeline" }, { word: "was" }, { word: "realistic", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "Whether 引导介词宾语从句，作 about 的宾语；if 不能引导介词宾语从句。" }
      ]
    },
    {
      id: "q_noun_s129",
      chinese: "辩论的焦点在于零工经济中什么构成公平薪酬",
      english_full: "The debate centered on what constitutes fair compensation in the gig economy.",
      words: [
        { word: "The" }, { word: "debate" }, { word: "centered" }, { word: "on" }, { word: "what" }, { word: "constitutes" }, { word: "fair" }, { word: "compensation" }, { word: "in" }, { word: "the" }, { word: "gig" }, { word: "economy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /dɪˈbeɪt/", translation: "辩论",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "debate" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ˈsɛntərd/ /ɒn/", translation: "聚焦于",
          subComponents: [{ startIndex: 0, words: [{ word: "centered" }, { word: "on" }] }]
        },
        {
          start: 4, end: 11, label: "介词宾语 (宾语从句)", phonetic: "/wɒt/ /ˈkɒnstɪtjuːts/ /fɛər/ /ˌkɒmpɛnˈseɪʃən/ /ɪn/ /ðə/ /ɡɪɡ/ /ɪˈkɒnəmi/", translation: "零工经济中什么构成公平薪酬",
          subComponents: [{ startIndex: 0, words: [{ word: "what" }, { word: "constitutes" }, { word: "fair" }, { word: "compensation" }, { word: "in" }, { word: "the" }, { word: "gig" }, { word: "economy", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宾语从句", text: "What 引导介词宾语从句，作 on 的宾语，what 在从句中作主语。" }
      ]
    }
  ]
};
