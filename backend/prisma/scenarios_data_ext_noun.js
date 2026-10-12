export const extensions = {
  "module_noun": [
    {
      id: "q_noun_1",
      chinese: "他是否会来参加会议仍然是个谜",
      english_full: "Whether he will attend the meeting remains a mystery.",
      words: [
        { word: "Whether" }, { word: "he" }, { word: "will" }, { word: "attend" }, { word: "the" }, { word: "meeting" },
        { word: "remains" }, { word: "a" }, { word: "mystery", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语从句", phonetic: "/ˈwɛðər/ /hiː/ /wɪl/ /əˈtɛnd/ /ðə/ /ˈmiːtɪŋ/", translation: "他是否会参加会议",
          subComponents: [
            { start: 0, end: 0, label: "引导词" },
            { start: 1, end: 1, label: "(从)主" },
            { start: 2, end: 3, label: "(从)谓" },
            { start: 4, end: 5, label: "(从)宾" }
          ]
        },
        { start: 6, end: 6, label: "系动词", phonetic: "/rɪˈmeɪnz/", translation: "仍然是" },
        { start: 7, end: 8, label: "表语", phonetic: "/ə/ /ˈmɪstəri/", translation: "一个谜" }
      ],
      analysis: [
        { type: "语法", text: "whether 引导的主语从句，作整个句子的主语。当主语从句位于句首时，只能用 whether，不能用 if。" },
        { type: "词汇", text: "remain (保持，仍然是)；mystery (谜团)。" }
      ]
    },
    {
      id: "q_noun_2",
      chinese: "我们迫切需要的是更多的资金和先进的技术",
      english_full: "What we urgently need is more funding and advanced technology.",
      words: [
        { word: "What" }, { word: "we" }, { word: "urgently" }, { word: "need" },
        { word: "is" }, { word: "more" }, { word: "funding" }, { word: "and" }, { word: "advanced" }, { word: "technology", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语从句", phonetic: "/wɒt/ /wiː/ /ˈɜːrdʒəntli/ /niːd/", translation: "我们迫切需要的东西",
          subComponents: [
            { start: 0, end: 0, label: "引导词(作从句宾语)" },
            { start: 1, end: 1, label: "(从)主" },
            { start: 2, end: 3, label: "(从)状+谓" }
          ]
        },
        { start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 5, end: 9, label: "表语", phonetic: "/mɔːr/ /ˈfʌndɪŋ/ /ænd/ /ədˈvænst/ /tɛkˈnɒlədʒi/", translation: "更多的资金和先进的技术" }
      ],
      analysis: [
        { type: "语法", text: "what 引导主语从句，在从句中充当 need 的宾语，意为“...的事情/东西”。" },
        { type: "高级表达", text: "urgently need (迫切需要)；funding (资金)。" }
      ]
    },
    {
      id: "q_noun_3",
      chinese: "地球是圆的，这是个众所周知的事实",
      english_full: "It is a universally acknowledged fact that the earth is round.",
      words: [
        { word: "It" }, { word: "is" }, { word: "a" }, { word: "universally" }, { word: "acknowledged" }, { word: "fact" },
        { word: "that" }, { word: "the" }, { word: "earth" }, { word: "is" }, { word: "round", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "形式主语", phonetic: "/ɪt/", translation: "它" },
        { start: 1, end: 1, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 2, end: 5, label: "表语", phonetic: "/ə/ /ˌjuːnɪˈvɜːrsəli/ /əkˈnɒlɪdʒd/ /fækt/", translation: "一个普遍公认的事实" },
        {
          start: 6, end: 10, label: "真正主语从句", phonetic: "/ðæt/ /ðə/ /ɜːrθ/ /ɪz/ /raʊnd/", translation: "地球是圆的",
          subComponents: [
            { start: 6, end: 6, label: "引导词(无实义)" },
            { start: 7, end: 8, label: "(从)主" },
            { start: 9, end: 9, label: "(从)系" },
            { start: 10, end: 10, label: "(从)表" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "it 作形式主语，真正的主语是 that 引导的从句，以避免头重脚轻。" },
        { type: "佳句赏析", text: "It is universally acknowledged that... 表示“普遍认为”。" }
      ]
    },
    {
      id: "q_noun_4",
      chinese: "无论谁违反了规定，都将受到严厉的惩罚",
      english_full: "Whoever violates the regulations will be severely punished.",
      words: [
        { word: "Whoever" }, { word: "violates" }, { word: "the" }, { word: "regulations" },
        { word: "will" }, { word: "be" }, { word: "severely" }, { word: "punished", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语从句", phonetic: "/huːˈɛvər/ /ˈvaɪəleɪts/ /ðə/ /ˌrɛgjʊˈleɪʃənz/", translation: "无论谁违反规定",
          subComponents: [
            { start: 0, end: 0, label: "(从)主语/引导词" },
            { start: 1, end: 1, label: "(从)谓语" },
            { start: 2, end: 3, label: "(从)宾语" }
          ]
        },
        { start: 4, end: 7, label: "主句谓语", phonetic: "/wɪl/ /bi/ /sɪˈvɪərli/ /ˈpʌnɪʃt/", translation: "将受到严厉惩罚" }
      ],
      analysis: [
        { type: "语法", text: "Whoever 引导主语从句，相当于 anyone who，在从句中作主语。" },
        { type: "词汇", text: "violate the regulations (违反规定)；severely punish (严厉惩罚)。" }
      ]
    },
    {
      id: "q_noun_5",
      chinese: "专家们坚信人工智能将在医疗领域发挥关键作用",
      english_full: "Experts firmly believe that artificial intelligence will play a crucial role in healthcare.",
      words: [
        { word: "Experts" }, { word: "firmly" }, { word: "believe" },
        { word: "that" }, { word: "artificial" }, { word: "intelligence" }, { word: "will" }, { word: "play" }, { word: "a" }, { word: "crucial" }, { word: "role" }, { word: "in" }, { word: "healthcare", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/ˈɛkspɜːrts/", translation: "专家们" },
        { start: 1, end: 2, label: "主句谓语", phonetic: "/ˈfɜːrmli/ /bɪˈliːv/", translation: "坚信" },
        {
          start: 3, end: 12, label: "宾语从句", phonetic: "/ðæt/ /ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/ /wɪl/ /pleɪ/ /ə/ /ˈkruːʃəl/ /roʊl/ /ɪn/ /ˈhɛlθkɛər/", translation: "人工智能将在医疗中发挥关键作用",
          subComponents: [
            { start: 3, end: 3, label: "引导词" },
            { start: 4, end: 5, label: "(从)主语" },
            { start: 6, end: 7, label: "(从)谓语" },
            { start: 8, end: 10, label: "(从)宾语" },
            { start: 11, end: 12, label: "(从)地点状语" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "that 引导宾语从句，作 believe 的宾语。that 在口语中常可省略。" },
        { type: "固定搭配", text: "play a crucial role in... (在...中扮演关键角色)。" }
      ]
    },
    {
      id: "q_noun_6",
      chinese: "面试官问我是否具备相关的工作经验",
      english_full: "The interviewer asked me if I possessed any relevant work experience.",
      words: [
        { word: "The" }, { word: "interviewer" }, { word: "asked" }, { word: "me" },
        { word: "if" }, { word: "I" }, { word: "possessed" }, { word: "any" }, { word: "relevant" }, { word: "work" }, { word: "experience", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈɪntərvjuːər/", translation: "面试官" },
        { start: 2, end: 2, label: "主句谓语", phonetic: "/æskt/", translation: "问" },
        { start: 3, end: 3, label: "间接宾语", phonetic: "/miː/", translation: "我" },
        {
          start: 4, end: 10, label: "直接宾语从句", phonetic: "/ɪf/ /aɪ/ /pəˈzɛst/ /ˈɛni/ /ˈrɛləvənt/ /wɜːrk/ /ɪkˈspɪəriəns/", translation: "是否我具备相关的经验",
          subComponents: [
            { start: 4, end: 4, label: "引导词" },
            { start: 5, end: 5, label: "(从)主" },
            { start: 6, end: 6, label: "(从)谓" },
            { start: 7, end: 10, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "if (是否) 引导宾语从句，在句中作 asked 的直接宾语 (双宾语结构)。" },
        { type: "词汇替换", text: "possess (拥有，具备) 是 have 的高级替换；relevant (相关的)。" }
      ]
    },
    {
      id: "q_noun_7",
      chinese: "请告诉我你为什么昨天拒绝了那个极好的机会",
      english_full: "Please tell me why you turned down that excellent opportunity yesterday.",
      words: [
        { word: "Please" }, { word: "tell" }, { word: "me" },
        { word: "why" }, { word: "you" }, { word: "turned" }, { word: "down" }, { word: "that" }, { word: "excellent" }, { word: "opportunity" }, { word: "yesterday", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "祈使句谓语", phonetic: "/pliːz/ /tɛl/", translation: "请告诉" },
        { start: 2, end: 2, label: "间接宾语", phonetic: "/miː/", translation: "我" },
        {
          start: 3, end: 10, label: "直接宾语从句", phonetic: "/waɪ/ /juː/ /tɜːrnd/ /daʊn/ /ðæt/ /ˈɛksələnt/ /ˌɒpərˈtuːnɪti/ /ˈjɛstərdeɪ/", translation: "你为什么拒绝了那个机会",
          subComponents: [
            { start: 3, end: 3, label: "引导词(原因状语)" },
            { start: 4, end: 4, label: "(从)主" },
            { start: 5, end: 6, label: "(从)谓" },
            { start: 7, end: 9, label: "(从)宾" },
            { start: 10, end: 10, label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "why 引导的宾语从句，语序必须是陈述句语序 (why you turned...)，而不能用疑问语序。" },
        { type: "短语", text: "turn down (拒绝) 是 reject 的常用同义词组。" }
      ]
    },
    {
      id: "q_noun_8",
      chinese: "他们正在激烈讨论我们应该如何分配有限的资源",
      english_full: "They are fiercely discussing how we should allocate the limited resources.",
      words: [
        { word: "They" }, { word: "are" }, { word: "fiercely" }, { word: "discussing" },
        { word: "how" }, { word: "we" }, { word: "should" }, { word: "allocate" }, { word: "the" }, { word: "limited" }, { word: "resources", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ðeɪ/", translation: "他们" },
        { start: 1, end: 3, label: "谓语", phonetic: "/ɑːr/ /ˈfɪərsli/ /dɪˈskʌsɪŋ/", translation: "正在激烈讨论" },
        {
          start: 4, end: 10, label: "宾语从句", phonetic: "/haʊ/ /wiː/ /ʃʊd/ /ˈæləkeɪt/ /ðə/ /ˈlɪmɪtɪd/ /rɪˈzɔːrsɪz/", translation: "我们应该如何分配有限资源",
          subComponents: [
            { start: 4, end: 4, label: "引导词(方式)" },
            { start: 5, end: 5, label: "(从)主" },
            { start: 6, end: 7, label: "(从)谓" },
            { start: 8, end: 10, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "how 引导宾语从句，作 discussing 的宾语。从句必须使用陈述语序。" },
        { type: "高级词汇", text: "allocate resources (分配资源) 是高频商务/管理词汇。" }
      ]
    },
    {
      id: "q_noun_9",
      chinese: "问题在于我们能否在最后期限前完成这个项目",
      english_full: "The problem is whether we can finish the project before the deadline.",
      words: [
        { word: "The" }, { word: "problem" }, { word: "is" },
        { word: "whether" }, { word: "we" }, { word: "can" }, { word: "finish" }, { word: "the" }, { word: "project" }, { word: "before" }, { word: "the" }, { word: "deadline", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈprɒbləm/", translation: "问题" },
        { start: 2, end: 2, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        {
          start: 3, end: 11, label: "表语从句", phonetic: "/ˈwɛðər/ /wiː/ /kæn/ /ˈfɪnɪʃ/ /ðə/ /ˈprɒdʒɛkt/ /bɪˈfɔːr/ /ðə/ /ˈdɛdlaɪn/", translation: "我们能否在期限前完成",
          subComponents: [
            { start: 3, end: 3, label: "引导词" },
            { start: 4, end: 4, label: "(从)主" },
            { start: 5, end: 6, label: "(从)谓" },
            { start: 7, end: 8, label: "(从)宾" },
            { start: 9, end: 11, label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "whether 引导表语从句，放在系动词 is 之后，补充说明主语 The problem 的具体内容。" },
        { type: "固定搭配", text: "before the deadline (在最后期限之前)。" }
      ]
    },
    {
      id: "q_noun_10",
      chinese: "那正是他决定辞去总经理职务的原因",
      english_full: "That is exactly why he decided to resign from his position as general manager.",
      words: [
        { word: "That" }, { word: "is" }, { word: "exactly" },
        { word: "why" }, { word: "he" }, { word: "decided" }, { word: "to" }, { word: "resign" }, { word: "from" }, { word: "his" }, { word: "position" }, { word: "as" }, { word: "general" }, { word: "manager", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/ðæt/", translation: "那" },
        { start: 1, end: 1, label: "主句系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 2, end: 2, label: "状语", phonetic: "/ɪgˈzæktli/", translation: "正是" },
        {
          start: 3, end: 13, label: "表语从句", phonetic: "/waɪ/ /hiː/ /dɪˈsaɪdɪd/ /tuː/ /rɪˈzaɪn/ /frɒm/ /hɪz/ /pəˈzɪʃən/ /æz/ /ˈdʒɛnərəl/ /ˈmænɪdʒər/", translation: "他决定辞职的原因",
          subComponents: [
            { start: 3, end: 3, label: "引导词" },
            { start: 4, end: 4, label: "(从)主" },
            { start: 5, end: 7, label: "(从)谓" },
            { start: 8, end: 13, label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "why 引导的表语从句。That is why... (那就是为什么...) 是非常地道的英语表达结构。" },
        { type: "词汇用法", text: "resign from... (从...辞职)；position as... (作为...的职位)。" }
      ]
    },
    {
      id: "q_noun_11",
      chinese: "这说明了我们需要制定更有效的营销策略",
      english_full: "This demonstrates that we need to formulate a more effective marketing strategy.",
      words: [
        { word: "This" }, { word: "demonstrates" },
        { word: "that" }, { word: "we" }, { word: "need" }, { word: "to" }, { word: "formulate" }, { word: "a" }, { word: "more" }, { word: "effective" }, { word: "marketing" }, { word: "strategy", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ðɪs/", translation: "这" },
        { start: 1, end: 1, label: "谓语", phonetic: "/ˈdɛmənˌstreɪts/", translation: "说明，证明" },
        {
          start: 2, end: 11, label: "宾语从句", phonetic: "/ðæt/ /wiː/ /niːd/ /tuː/ /ˈfɔːrmjʊleɪt/ /ə/ /mɔːr/ /ɪˈfɛktɪv/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒi/", translation: "我们需要制定更有效的营销策略",
          subComponents: [
            { start: 2, end: 2, label: "引导词" },
            { start: 3, end: 3, label: "(从)主" },
            { start: 4, end: 6, label: "(从)谓" },
            { start: 7, end: 11, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "that 引导的宾语从句。" },
        { type: "高级动词", text: "demonstrate (表明，证明) 替换 show；formulate (制定，规划) 替换 make。" }
      ]
    },
    {
      id: "q_noun_12",
      chinese: "他通过不懈的努力取得了巨大成功，这一事实激励了我们所有人",
      english_full: "The fact that he achieved massive success through relentless effort inspires us all.",
      words: [
        { word: "The" }, { word: "fact" },
        { word: "that" }, { word: "he" }, { word: "achieved" }, { word: "massive" }, { word: "success" }, { word: "through" }, { word: "relentless" }, { word: "effort" },
        { word: "inspires" }, { word: "us" }, { word: "all", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /fækt/", translation: "这个事实" },
        {
          start: 2, end: 9, label: "同位语从句", phonetic: "/ðæt/ /hiː/ /əˈtʃiːvd/ /ˈmæsɪv/ /səkˈsɛs/ /θruː/ /rɪˈlɛntlɪs/ /ˈɛfərt/", translation: "他取得了巨大成功",
          subComponents: [
            { start: 2, end: 2, label: "引导词" },
            { start: 3, end: 3, label: "(从)主" },
            { start: 4, end: 4, label: "(从)谓" },
            { start: 5, end: 6, label: "(从)宾" },
            { start: 7, end: 9, label: "(从)方式状语" }
          ]
        },
        { start: 10, end: 10, label: "主句谓语", phonetic: "/ɪnˈspaɪərz/", translation: "激励了" },
        { start: 11, end: 12, label: "主句宾语", phonetic: "/ʌs/ /ɔːl/", translation: "我们所有人" }
      ],
      analysis: [
        { type: "语法", text: "同位语从句，that 引导的从句用于解释抽象名词 fact 的具体内容，that 不作任何成分，不可省略。" },
        { type: "词汇搭配", text: "relentless effort (不懈的努力)；massive success (巨大的成功)。" }
      ]
    },
    {
      id: "q_noun_13",
      chinese: "管理层接受了我们的提议，即我们应该大幅减少运营开支",
      english_full: "The management accepted our proposal that we should drastically reduce operational expenses.",
      words: [
        { word: "The" }, { word: "management" }, { word: "accepted" }, { word: "our" }, { word: "proposal" },
        { word: "that" }, { word: "we" }, { word: "should" }, { word: "drastically" }, { word: "reduce" }, { word: "operational" }, { word: "expenses", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈmænɪdʒmənt/", translation: "管理层" },
        { start: 2, end: 2, label: "主句谓语", phonetic: "/əkˈsɛptɪd/", translation: "接受了" },
        { start: 3, end: 4, label: "主句宾语", phonetic: "/aʊər/ /prəˈpoʊzəl/", translation: "我们的提议" },
        {
          start: 5, end: 11, label: "同位语从句", phonetic: "/ðæt/ /wiː/ /ʃʊd/ /ˈdræstɪkli/ /rɪˈdjuːs/ /ˌɒpəˈreɪʃənəl/ /ɪkˈspɛnsɪz/", translation: "我们应该大幅减少开支",
          subComponents: [
            { start: 5, end: 5, label: "引导词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 9, label: "(从)谓" },
            { start: 10, end: 11, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "that 引导的从句作 proposal (提议) 的同位语，解释提议的具体内容。" },
        { type: "商务词汇", text: "drastically reduce (大幅削减)；operational expenses (运营开支/成本)。" }
      ]
    },
    {
      id: "q_noun_14",
      chinese: "我一直抱有这样的信念：努力工作最终会有回报",
      english_full: "I have always held the belief that hard work will eventually pay off.",
      words: [
        { word: "I" }, { word: "have" }, { word: "always" }, { word: "held" }, { word: "the" }, { word: "belief" },
        { word: "that" }, { word: "hard" }, { word: "work" }, { word: "will" }, { word: "eventually" }, { word: "pay" }, { word: "off", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/aɪ/", translation: "我" },
        { start: 1, end: 3, label: "主句谓语", phonetic: "/hæv/ /ˈɔːlweɪz/ /hɛld/", translation: "一直抱有" },
        { start: 4, end: 5, label: "主句宾语", phonetic: "/ðə/ /bɪˈliːf/", translation: "这个信念" },
        {
          start: 6, end: 12, label: "同位语从句", phonetic: "/ðæt/ /hɑːrd/ /wɜːrk/ /wɪl/ /ɪˈvɛntʃuəli/ /peɪ/ /ɒf/", translation: "努力工作会有回报",
          subComponents: [
            { start: 6, end: 6, label: "引导词" },
            { start: 7, end: 8, label: "(从)主" },
            { start: 9, end: 12, label: "(从)谓" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "同位语从句，补充说明 belief (信念)。常见的后面跟同位语从句的名词还有 idea, news, hope, doubt, evidence 等。" },
        { type: "习语", text: "pay off (取得成功，得到回报)。" }
      ]
    },
    {
      id: "q_noun_15",
      chinese: "他们对我们能否按时完成任务表示极大的怀疑",
      english_full: "They expressed grave doubts about whether we could complete the task on time.",
      words: [
        { word: "They" }, { word: "expressed" }, { word: "grave" }, { word: "doubts" }, { word: "about" },
        { word: "whether" }, { word: "we" }, { word: "could" }, { word: "complete" }, { word: "the" }, { word: "task" }, { word: "on" }, { word: "time", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/ðeɪ/", translation: "他们" },
        { start: 1, end: 1, label: "主句谓语", phonetic: "/ɪkˈsprɛst/", translation: "表达了" },
        { start: 2, end: 3, label: "主句宾语", phonetic: "/greɪv/ /daʊts/", translation: "极大的怀疑" },
        { start: 4, end: 4, label: "介词", phonetic: "/əˈbaʊt/", translation: "关于" },
        {
          start: 5, end: 12, label: "介词宾语从句", phonetic: "/ˈwɛðər/ /wiː/ /kʊd/ /kəmˈpliːt/ /ðə/ /tæsk/ /ɒn/ /taɪm/", translation: "是否能按时完成",
          subComponents: [
            { start: 5, end: 5, label: "引导词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 8, label: "(从)谓" },
            { start: 9, end: 10, label: "(从)宾" },
            { start: 11, end: 12, label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "whether 引导的从句作介词 about 的宾语，构成介词宾语从句。if 不能引导介词宾语从句。" },
        { type: "搭配", text: "grave doubts (严重的/极大的怀疑)；on time (按时)。" }
      ]
    },
    {
      id: "q_noun_16",
      chinese: "公众非常关心政府将出台什么政策来解决污染问题",
      english_full: "The public is deeply concerned about what policies the government will introduce to tackle pollution.",
      words: [
        { word: "The" }, { word: "public" }, { word: "is" }, { word: "deeply" }, { word: "concerned" }, { word: "about" },
        { word: "what" }, { word: "policies" }, { word: "the" }, { word: "government" }, { word: "will" }, { word: "introduce" }, { word: "to" }, { word: "tackle" }, { word: "pollution", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈpʌblɪk/", translation: "公众" },
        { start: 2, end: 4, label: "主句谓语", phonetic: "/ɪz/ /ˈdiːpli/ /kənˈsɜːrnd/", translation: "非常关心" },
        { start: 5, end: 5, label: "介词", phonetic: "/əˈbaʊt/", translation: "关于" },
        {
          start: 6, end: 14, label: "介词宾语从句", phonetic: "/wɒt/ /ˈpɒlɪsiz/ /ðə/ /ˈgʌvərnmənt/ /wɪl/ /ˌɪntrəˈdjuːs/ /tuː/ /ˈtækəl/ /pəˈluːʃən/", translation: "政府将出台什么政策来解决污染",
          subComponents: [
            { start: 6, end: 7, label: "引导词/宾" },
            { start: 8, end: 9, label: "(从)主" },
            { start: 10, end: 11, label: "(从)谓" },
            { start: 12, end: 14, label: "(从)目的状语" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "what policies 引导从句，作 about 的宾语，同时在从句中充当 introduce 的宾语。" },
        { type: "动词搭配", text: "introduce policies (出台政策)；tackle pollution (解决/应对污染问题)。" }
      ]
    },
    {
      id: "q_noun_17",
      chinese: "我同意他的观点，即我们现在必须采取立即的行动",
      english_full: "I agree with his viewpoint that we must take immediate action now.",
      words: [
        { word: "I" }, { word: "agree" }, { word: "with" }, { word: "his" }, { word: "viewpoint" },
        { word: "that" }, { word: "we" }, { word: "must" }, { word: "take" }, { word: "immediate" }, { word: "action" }, { word: "now", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我" },
        { start: 1, end: 2, label: "谓语", phonetic: "/əˈgriː/ /wɪθ/", translation: "同意" },
        { start: 3, end: 4, label: "宾语", phonetic: "/hɪz/ /ˈvjuːpɔɪnt/", translation: "他的观点" },
        {
          start: 5, end: 11, label: "同位语从句", phonetic: "/ðæt/ /wiː/ /mʌst/ /teɪk/ /ɪˈmiːdiət/ /ˈækʃən/ /naʊ/", translation: "我们必须采取立即行动",
          subComponents: [
            { start: 5, end: 5, label: "引导词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 8, label: "(从)谓" },
            { start: 9, end: 10, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "that 引导同位语从句，解释 viewpoint (观点) 的内容。" },
        { type: "常用搭配", text: "take immediate action (采取立即行动)。" }
      ]
    },
    {
      id: "q_noun_18",
      chinese: "真遗憾你错过了昨晚那场精彩的讲座",
      english_full: "It is a great pity that you missed the magnificent lecture last night.",
      words: [
        { word: "It" }, { word: "is" }, { word: "a" }, { word: "great" }, { word: "pity" },
        { word: "that" }, { word: "you" }, { word: "missed" }, { word: "the" }, { word: "magnificent" }, { word: "lecture" }, { word: "last" }, { word: "night", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "形式主语", phonetic: "/ɪt/", translation: "它" },
        { start: 1, end: 1, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 2, end: 4, label: "表语", phonetic: "/ə/ /greɪt/ /ˈpɪti/", translation: "一个极大的遗憾" },
        {
          start: 5, end: 12, label: "真正主语从句", phonetic: "/ðæt/ /juː/ /mɪst/ /ðə/ /mægˈnɪfɪsənt/ /ˈlɛktʃər/ /læst/ /naɪt/", translation: "你错过了那场讲座",
          subComponents: [
            { start: 5, end: 5, label: "引导词" },
            { start: 6, end: 6, label: "(从)主" },
            { start: 7, end: 7, label: "(从)谓" },
            { start: 8, end: 10, label: "(从)宾" },
            { start: 11, end: 12, label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "语法", text: "It is a pity that... (遗憾的是...) 是由 it 充当形式主语的经典主语从句句型。" },
        { type: "替换词汇", text: "magnificent (精彩的，宏伟的) 替换 wonderful。" }
      ]
    },
    {
      id: "q_noun_19",
      chinese: "谁将接管公司仍是一个悬而未决的问题",
      english_full: "The question of who will take over the company remains unanswered.",
      words: [
        { word: "The" }, { word: "question" }, { word: "of" },
        { word: "who" }, { word: "will" }, { word: "take" }, { word: "over" }, { word: "the" }, { word: "company" },
        { word: "remains" }, { word: "unanswered", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˈkwɛstʃən/", translation: "问题" },
        { start: 2, end: 2, label: "介词", phonetic: "/ɒv/", translation: "关于" },
        {
          start: 3, end: 8, label: "同位语从句/介宾", phonetic: "/huː/ /wɪl/ /teɪk/ /ˈoʊvər/ /ðə/ /ˈkʌmpəni/", translation: "谁将接管公司",
          subComponents: [
            { start: 3, end: 3, label: "(从)引导/主" },
            { start: 4, end: 6, label: "(从)谓语动词短语" },
            { start: 7, end: 8, label: "(从)宾" }
          ]
        },
        { start: 9, end: 9, label: "系动词", phonetic: "/rɪˈmeɪnz/", translation: "仍然是" },
        { start: 10, end: 10, label: "表语", phonetic: "/ʌnˈænsərd/", translation: "未被回答的" }
      ],
      analysis: [
        { type: "语法", text: "这里的 who 从句可以看作是介词 of 的宾语从句，起修饰说明 question 的作用。" },
        { type: "动词短语", text: "take over (接管)；remain unanswered (悬而未决)。" }
      ]
    },
    {
      id: "q_noun_20",
      chinese: "他们能否在竞争中幸存下来取决于他们的创新能力",
      english_full: "Whether they can survive the fierce competition depends on their capacity to innovate.",
      words: [
        { word: "Whether" }, { word: "they" }, { word: "can" }, { word: "survive" }, { word: "the" }, { word: "fierce" }, { word: "competition" },
        { word: "depends" }, { word: "on" }, { word: "their" }, { word: "capacity" }, { word: "to" }, { word: "innovate", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语从句", phonetic: "/ˈwɛðər/ /ðeɪ/ /kæn/ /sərˈvaɪv/ /ðə/ /fɪərs/ /ˌkɒmpɪˈtɪʃən/", translation: "他们能否在激烈竞争中存活",
          subComponents: [
            { start: 0, end: 0, label: "引导词" },
            { start: 1, end: 1, label: "(从)主" },
            { start: 2, end: 3, label: "(从)谓" },
            { start: 4, end: 6, label: "(从)宾" }
          ]
        },
        { start: 7, end: 8, label: "主句谓语", phonetic: "/dɪˈpɛndz/ /ɒn/", translation: "取决于" },
        { start: 9, end: 12, label: "主句宾语", phonetic: "/ðɛər/ /kəˈpæsɪti/ /tuː/ /ˈɪnəveɪt/", translation: "他们创新的能力" }
      ],
      analysis: [
        { type: "语法", text: "Whether 引导主语从句。主语从句作主语时，谓语动词通常用单数(depends)。" },
        { type: "词汇用法", text: "survive the competition (在竞争中幸存，及物用法)；capacity to innovate (创新能力)。" }
      ]
    }
  ]
};
