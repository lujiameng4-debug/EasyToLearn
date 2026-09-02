export const extensions = {
  "module_tense": [
    {
      id: "q_tense_3",
      chinese: "地球绕着太阳转，这维持了我们星球上的所有生命",
      english_full: "The earth revolves around the sun, which sustains all life on our planet.",
      words: [
        { word: "The" }, { word: "earth" }, { word: "revolves" }, { word: "around" }, { word: "the" }, { word: "sun", punctuation: "," },
        { word: "which" }, { word: "sustains" }, { word: "all" }, { word: "life" }, { word: "on" }, { word: "our" }, { word: "planet", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ði/ /ɜːrθ/", translation: "地球",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "earth" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/rɪˈvɒlvz/", translation: "公转，旋转",
          subComponents: [{ startIndex: 0, words: [{ word: "revolves" }] }]
        },
        {
          start: 3, end: 5, label: "状语", phonetic: "/əˈraʊnd/ /ðə/ /sʌn/", translation: "围绕太阳",
          subComponents: [{ startIndex: 0, words: [{ word: "around" }, { word: "the" }, { word: "sun" }] }]
        },
        {
          start: 6, end: 12, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /səˈsteɪnz/ /ɔːl/ /laɪf/ /ɒn/ /aʊər/ /ˈplænɪt/", translation: "这维持了我们星球上的所有生命",
          subComponents: [
            { startIndex: 0, words: [{ word: "which" }], label: "(从)主" },
            { startIndex: 1, words: [{ word: "sustains" }], label: "(从)谓" },
            { startIndex: 2, words: [{ word: "all" }, { word: "life" }, { word: "on" }, { word: "our" }, { word: "planet" }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "一般现在时 (Simple Present)。用于表示客观真理、科学事实或普遍存在的状态。" },
        { type: "高级词汇", text: "revolve around (围绕...公转)；sustain (维持，支撑)。" }
      ]
    },
    {
      id: "q_tense_4",
      chinese: "在标准大气压下，水在摄氏一百度时沸腾",
      english_full: "Water boils at one hundred degrees Celsius under standard atmospheric pressure.",
      words: [
        { word: "Water" }, { word: "boils" }, { word: "at" }, { word: "one" }, { word: "hundred" }, { word: "degrees" }, { word: "Celsius" },
        { word: "under" }, { word: "standard" }, { word: "atmospheric" }, { word: "pressure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈwɔːtər/", translation: "水",
          subComponents: [{ startIndex: 0, words: [{ word: "Water" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/bɔɪlz/", translation: "沸腾",
          subComponents: [{ startIndex: 0, words: [{ word: "boils" }] }]
        },
        {
          start: 2, end: 6, label: "时间/状态状语", phonetic: "/æt/ /wʌn/ /ˈhʌndrəd/ /dɪˈgriːz/ /ˈsɛlsiəs/", translation: "在一百摄氏度时",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "one" }, { word: "hundred" }, { word: "degrees" }, { word: "Celsius" }] }]
        },
        {
          start: 7, end: 10, label: "条件状语", phonetic: "/ˈʌndər/ /ˈstændərd/ /ˌætməsˈfɛrɪk/ /ˈprɛʃər/", translation: "在标准大气压下",
          subComponents: [{ startIndex: 0, words: [{ word: "under" }, { word: "standard" }, { word: "atmospheric" }, { word: "pressure" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "一般现在时。客观规律，故谓语动词 boil 加上了第三人称单数 -s。" },
        { type: "专业名词", text: "degrees Celsius (摄氏度)；standard atmospheric pressure (标准大气压)。" }
      ]
    },
    {
      id: "q_tense_5",
      chinese: "委员会在昨天的会议上批准了新的环境法规",
      english_full: "The committee approved the new environmental regulations during yesterday's meeting.",
      words: [
        { word: "The" }, { word: "committee" }, { word: "approved" }, { word: "the" }, { word: "new" }, { word: "environmental" }, { word: "regulations" },
        { word: "during" }, { word: "yesterday's" }, { word: "meeting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kəˈmɪti/", translation: "委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "committee" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈpruːvd/", translation: "批准",
          subComponents: [{ startIndex: 0, words: [{ word: "approved" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ðə/ /njuː/ /ɪnˌvaɪrənˈmɛntəl/ /ˌrɛgjʊˈleɪʃənz/", translation: "新的环境法规",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "new" }, { word: "environmental" }, { word: "regulations" }] }]
        },
        {
          start: 7, end: 9, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˈjɛstərdeɪz/ /ˈmiːtɪŋ/", translation: "在昨天的会议期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "yesterday's" }, { word: "meeting" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "一般过去时 (Simple Past)。表示过去某个特定时间点发生的动作。" },
        { type: "雅思词汇", text: "committee (委员会)；approve (批准，赞成)；regulations (法规)。" }
      ]
    },
    {
      id: "q_tense_6",
      chinese: "这位著名的科学家在2018年发表了她那具有突破性的研究论文",
      english_full: "The renowned scientist published her groundbreaking research paper in 2018.",
      words: [
        { word: "The" }, { word: "renowned" }, { word: "scientist" }, { word: "published" }, { word: "her" }, { word: "groundbreaking" }, { word: "research" }, { word: "paper" },
        { word: "in" }, { word: "2018", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /rɪˈnaʊnd/ /ˈsaɪəntɪst/", translation: "这位著名的科学家",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "renowned" }, { word: "scientist" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈpʌblɪʃt/", translation: "发表了",
          subComponents: [{ startIndex: 0, words: [{ word: "published" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/hɜːr/ /ˈgraʊndˌbreɪkɪŋ/ /rɪˈsɜːrtʃ/ /ˈpeɪpər/", translation: "她那具有突破性的研究论文",
          subComponents: [{ startIndex: 0, words: [{ word: "her" }, { word: "groundbreaking" }, { word: "research" }, { word: "paper" }] }]
        },
        {
          start: 8, end: 9, label: "时间状语", phonetic: "/ɪn/ /ˈtwɛntiˌeɪˈtiːn/", translation: "在2018年",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "2018" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "一般过去时。由于有明确的过去时间状语 in 2018，必须使用过去式 published。" },
        { type: "极佳搭配", text: "groundbreaking research (突破性/开创性的研究) 是顶级学术搭配。" }
      ]
    },
    {
      id: "q_tense_7",
      chinese: "该公司将在下个季度推出其下一代智能手机",
      english_full: "The company will launch its next-generation smartphone in the upcoming quarter.",
      words: [
        { word: "The" }, { word: "company" }, { word: "will" }, { word: "launch" }, { word: "its" }, { word: "next-generation" }, { word: "smartphone" },
        { word: "in" }, { word: "the" }, { word: "upcoming" }, { word: "quarter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "该公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "company" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/wɪl/ /lɔːntʃ/", translation: "将推出",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }], label: "情态动词(表将来)" },
            { startIndex: 1, words: [{ word: "launch" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ɪts/ /nɛkst-ˌdʒɛnəˈreɪʃən/ /ˈsmɑːrtˌfoʊn/", translation: "它的下一代智能手机",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "next-generation" }, { word: "smartphone" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ʌpˈkʌmɪŋ/ /ˈkwɔːrtər/", translation: "在接下来的季度里",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "upcoming" }, { word: "quarter" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "一般将来时 (Simple Future)。will + 动词原形，表示将来要发生的动作或预测。" },
        { type: "商务词汇", text: "launch a product (发布/推出产品)；upcoming quarter (下个季度/即将到来的季度)。" }
      ]
    },
    {
      id: "q_tense_8",
      chinese: "人工智能无疑将改变现代教育的面貌",
      english_full: "Artificial intelligence will undoubtedly transform the landscape of modern education.",
      words: [
        { word: "Artificial" }, { word: "intelligence" }, { word: "will" }, { word: "undoubtedly" }, { word: "transform" },
        { word: "the" }, { word: "landscape" }, { word: "of" }, { word: "modern" }, { word: "education", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/", translation: "人工智能",
          subComponents: [{ startIndex: 0, words: [{ word: "Artificial" }, { word: "intelligence" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/wɪl/ /ʌnˈdaʊtɪdli/ /trænsˈfɔːrm/", translation: "无疑将改变",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }] },
            { startIndex: 1, words: [{ word: "undoubtedly" }], label: "状语(副词)" },
            { startIndex: 2, words: [{ word: "transform" }] }
          ]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ðə/ /ˈlændskeɪp/ /ɒv/ /ˈmɒdərn/ /ˌɛdʒʊˈkeɪʃən/", translation: "现代教育的面貌",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "landscape" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "modern" }, { word: "education" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "一般将来时。undoubtedly (毫无疑问地) 常用作插入副词增强语气。" },
        { type: "高级隐喻", text: "landscape 原意为风景，在此引申为“格局/面貌”，the landscape of... 极具高级感。" }
      ]
    },
    {
      id: "q_tense_9",
      chinese: "我们目前正在调查这场史无前例的经济危机的根本原因",
      english_full: "We are currently investigating the root causes of this unprecedented economic crisis.",
      words: [
        { word: "We" }, { word: "are" }, { word: "currently" }, { word: "investigating" }, { word: "the" }, { word: "root" }, { word: "causes" },
        { word: "of" }, { word: "this" }, { word: "unprecedented" }, { word: "economic" }, { word: "crisis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 3, label: "谓语(现进)", phonetic: "/ɑːr/ /ˈkɜːrəntli/ /ɪnˈvɛstɪˌgeɪtɪŋ/", translation: "目前正在调查",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "currently" }], label: "时间状语" },
            { startIndex: 2, words: [{ word: "investigating" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/ðə/ /ruːt/ /ˈkɔːzɪz/ /ɒv/ /ðɪs/ /ʌnˈprɛsɪˌdɛntɪd/ /ˌiːkəˈnɒmɪk/ /ˈkraɪsɪs/", translation: "这场史无前例的经济危机的根本原因",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "root" }, { word: "causes" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "this" }, { word: "unprecedented" }, { word: "economic" }, { word: "crisis" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "现在进行时 (Present Continuous)。be + doing 表示目前正在进行的动作。" },
        { type: "雅思好词", text: "root cause (根本原因)；unprecedented (史无前例的，空前的)。" }
      ]
    },
    {
      id: "q_tense_10",
      chinese: "由于温室气体的排放，全球气候正以惊人的速度变化",
      english_full: "The global climate is changing at an alarming rate due to greenhouse gas emissions.",
      words: [
        { word: "The" }, { word: "global" }, { word: "climate" }, { word: "is" }, { word: "changing" },
        { word: "at" }, { word: "an" }, { word: "alarming" }, { word: "rate" }, { word: "due" }, { word: "to" }, { word: "greenhouse" }, { word: "gas" }, { word: "emissions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈgloʊbəl/ /ˈklaɪmət/", translation: "全球气候",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "global" }, { word: "climate" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ɪz/ /ˈtʃeɪndʒɪŋ/", translation: "正在变化",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "changing" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/æt/ /æn/ /əˈlɑːrmɪŋ/ /reɪt/", translation: "以惊人的速度",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "an" }, { word: "alarming" }, { word: "rate" }] }]
        },
        {
          start: 9, end: 13, label: "原因状语", phonetic: "/djuː/ /tuː/ /ˈgriːnˌhaʊs/ /gæs/ /ɪˈmɪʃənz/", translation: "由于温室气体的排放",
          subComponents: [{ startIndex: 0, words: [{ word: "due" }, { word: "to" }, { word: "greenhouse" }, { word: "gas" }, { word: "emissions" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "现在进行时。不仅可以表示此时此刻，还可以表示现阶段正在发生或不断发展变化的趋势。" },
        { type: "经典搭配", text: "at an alarming rate (以惊人的/令人担忧的速度)；greenhouse gas emissions (温室气体排放)。" }
      ]
    },
    {
      id: "q_tense_11",
      chinese: "停电发生时，技术人员们正在进行一项严格的系统测试",
      english_full: "The technicians were conducting a rigorous system test when the power outage occurred.",
      words: [
        { word: "The" }, { word: "technicians" }, { word: "were" }, { word: "conducting" }, { word: "a" }, { word: "rigorous" }, { word: "system" }, { word: "test" },
        { word: "when" }, { word: "the" }, { word: "power" }, { word: "outage" }, { word: "occurred", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /tɛkˈnɪʃənz/", translation: "技术人员们",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "technicians" }] }]
        },
        {
          start: 2, end: 3, label: "主句谓语", phonetic: "/wɜːr/ /kənˈdʌktɪŋ/", translation: "正在进行",
          subComponents: [
            { startIndex: 0, words: [{ word: "were" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "conducting" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 7, label: "主句宾语", phonetic: "/ə/ /ˈrɪgərəs/ /ˈsɪstəm/ /tɛst/", translation: "一项严格的系统测试",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "rigorous" }, { word: "system" }, { word: "test" }] }]
        },
        {
          start: 8, end: 12, label: "时间状语从句", phonetic: "/wɛn/ /ðə/ /ˈpaʊər/ /ˈaʊtɪdʒ/ /əˈkɜːrd/", translation: "当停电发生时",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "power" }, { word: "outage" }], label: "(从)主" },
            { startIndex: 4, words: [{ word: "occurred" }], label: "(从)谓" }
          ]
        }
      ],
      analysis: [
        { type: "时态交错", text: "过去进行时 (were conducting) 与一般过去时 (occurred) 组合，表示过去某动作正在进行时，另一个动作突然发生。" },
        { type: "职场/科技词汇", text: "rigorous (严格的)；power outage (停电)。" }
      ]
    },
    {
      id: "q_tense_12",
      chinese: "当她的室友们在聚会时，她正在努力地准备期末考试",
      english_full: "She was diligently preparing for her final exams while her roommates were partying.",
      words: [
        { word: "She" }, { word: "was" }, { word: "diligently" }, { word: "preparing" }, { word: "for" }, { word: "her" }, { word: "final" }, { word: "exams" },
        { word: "while" }, { word: "her" }, { word: "roommates" }, { word: "were" }, { word: "partying", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主句主语", phonetic: "/ʃiː/", translation: "她",
          subComponents: [{ startIndex: 0, words: [{ word: "She" }] }]
        },
        {
          start: 1, end: 3, label: "主句谓语", phonetic: "/wɒz/ /ˈdɪlɪdʒəntli/ /prɪˈpɛərɪŋ/", translation: "正在努力地准备",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }] },
            { startIndex: 1, words: [{ word: "diligently" }] },
            { startIndex: 2, words: [{ word: "preparing" }] }
          ]
        },
        {
          start: 4, end: 7, label: "主句状语", phonetic: "/fɔːr/ /hɜːr/ /ˈfaɪnəl/ /ɪgˈzæmz/", translation: "为她的期末考试",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "her" }, { word: "final" }, { word: "exams" }] }]
        },
        {
          start: 8, end: 12, label: "时间状语从句", phonetic: "/waɪl/ /hɜːr/ /ˈruːmˌmeɪts/ /wɜːr/ /ˈpɑːrtiɪŋ/", translation: "当她的室友们正在聚会时",
          subComponents: [
            { startIndex: 0, words: [{ word: "while" }], label: "连词" },
            { startIndex: 1, words: [{ word: "her" }, { word: "roommates" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "were" }, { word: "partying" }], label: "(从)谓(过进)" }
          ]
        }
      ],
      analysis: [
        { type: "时态平行", text: "while 引导的时间状语从句中，主句和从句都使用了过去进行时，表示过去两个动作同时发生。" },
        { type: "高级副词", text: "diligently (勤奋地，孜孜不倦地) 替换 hard。" }
      ]
    },
    {
      id: "q_tense_13",
      chinese: "明年的这个时候，他们将正在建造一座横跨这条河的新桥",
      english_full: "This time next year, they will be constructing a new bridge across the river.",
      words: [
        { word: "This" }, { word: "time" }, { word: "next" }, { word: "year", punctuation: "," },
        { word: "they" }, { word: "will" }, { word: "be" }, { word: "constructing" }, { word: "a" }, { word: "new" }, { word: "bridge" },
        { word: "across" }, { word: "the" }, { word: "river", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "时间状语", phonetic: "/ðɪs/ /taɪm/ /nɛkst/ /jɪər/", translation: "明年的这个时候",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "time" }, { word: "next" }, { word: "year" }] }]
        },
        {
          start: 4, end: 4, label: "主语", phonetic: "/ðeɪ/", translation: "他们",
          subComponents: [{ startIndex: 0, words: [{ word: "they" }] }]
        },
        {
          start: 5, end: 7, label: "谓语", phonetic: "/wɪl/ /bi/ /kənˈstrʌktɪŋ/", translation: "将正在建造",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }, { word: "be" }], label: "助动词" },
            { startIndex: 2, words: [{ word: "constructing" }], label: "实义动词" }
          ]
        },
        {
          start: 8, end: 13, label: "宾语", phonetic: "/ə/ /njuː/ /brɪdʒ/ /əˈkrɒs/ /ðə/ /ˈrɪvər/", translation: "一座横跨这条河的新桥",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "new" }, { word: "bridge" }] },
            { startIndex: 3, words: [{ word: "across" }, { word: "the" }, { word: "river" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "将来进行时 (Future Continuous)。will be doing 表示在将来某个特定的时刻正在进行的动作。" },
        { type: "标志词", text: "This time next year 是典型的将来进行时标志词汇。" }
      ]
    },
    {
      id: "q_tense_14",
      chinese: "明天早上我们将飞往伦敦参加国际会议",
      english_full: "We will be flying to London for the international conference tomorrow morning.",
      words: [
        { word: "We" }, { word: "will" }, { word: "be" }, { word: "flying" }, { word: "to" }, { word: "London" },
        { word: "for" }, { word: "the" }, { word: "international" }, { word: "conference" }, { word: "tomorrow" }, { word: "morning", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 3, label: "谓语", phonetic: "/wɪl/ /bi/ /ˈflaɪɪŋ/", translation: "将(正在)飞往",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "flying" }] }]
        },
        {
          start: 4, end: 5, label: "方向状语", phonetic: "/tuː/ /ˈlʌndən/", translation: "去伦敦",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "London" }] }]
        },
        {
          start: 6, end: 9, label: "目的状语", phonetic: "/fɔːr/ /ði/ /ˌɪntərˈnæʃənəl/ /ˈkɒnfərəns/", translation: "为了国际会议",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "the" }, { word: "international" }, { word: "conference" }] }]
        },
        {
          start: 10, end: 11, label: "时间状语", phonetic: "/təˈmɒroʊ/ /ˈmɔːrnɪŋ/", translation: "明天早上",
          subComponents: [{ startIndex: 0, words: [{ word: "tomorrow" }, { word: "morning" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "将来进行时 (will be doing) 除了表示将来进行，有时也用于表示已安排好、必定会发生的事情，语气较委婉客气。" }
      ]
    },
    {
      id: "q_tense_15",
      chinese: "政府最近实施了一系列严格的税收改革",
      english_full: "The government has recently implemented a series of stringent tax reforms.",
      words: [
        { word: "The" }, { word: "government" }, { word: "has" }, { word: "recently" }, { word: "implemented" },
        { word: "a" }, { word: "series" }, { word: "of" }, { word: "stringent" }, { word: "tax" }, { word: "reforms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈgʌvərnmənt/", translation: "政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "government" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/hæz/ /ˈriːsəntli/ /ˈɪmplɪmɛntɪd/", translation: "最近已经实施",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] },
            { startIndex: 1, words: [{ word: "recently" }], label: "状语" },
            { startIndex: 2, words: [{ word: "implemented" }] }
          ]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ə/ /ˈsɪəriːz/ /ɒv/ /ˈstrɪndʒənt/ /tæks/ /rɪˈfɔːrmz/", translation: "一系列严格的税收改革",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "series" }, { word: "of" }], label: "量词" },
            { startIndex: 3, words: [{ word: "stringent" }, { word: "tax" }, { word: "reforms" }] }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "现在完成时 (have/has + done)。副词 recently (最近) 经常与现在完成时连用，强调对现在产生的影响。" },
        { type: "学术词汇", text: "a series of (一系列)；stringent (严格的)。" }
      ]
    },
    {
      id: "q_tense_16",
      chinese: "科学家们在量子计算领域已经取得了重大突破",
      english_full: "Scientists have made significant breakthroughs in the field of quantum computing.",
      words: [
        { word: "Scientists" }, { word: "have" }, { word: "made" }, { word: "significant" }, { word: "breakthroughs" },
        { word: "in" }, { word: "the" }, { word: "field" }, { word: "of" }, { word: "quantum" }, { word: "computing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈsaɪəntɪsts/", translation: "科学家们",
          subComponents: [{ startIndex: 0, words: [{ word: "Scientists" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/hæv/ /meɪd/", translation: "已经做出了",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "made" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/sɪgˈnɪfɪkənt/ /ˈbreɪkθruːz/", translation: "重大突破",
          subComponents: [{ startIndex: 0, words: [{ word: "significant" }, { word: "breakthroughs" }] }]
        },
        {
          start: 5, end: 10, label: "领域状语", phonetic: "/ɪn/ /ðə/ /fiːld/ /ɒv/ /ˈkwɒntəm/ /kəmˈpjuːtɪŋ/", translation: "在量子计算领域中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "field" }, { word: "of" }, { word: "quantum" }, { word: "computing" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "现在完成时。强调“做出突破”这个动作虽然发生在过去，但其成果或影响持续到现在。" },
        { type: "科技词汇", text: "breakthrough (突破)；quantum computing (量子计算)。" }
      ]
    },
    {
      id: "q_tense_17",
      chinese: "当救援队到达时，当地居民已经撤离了该地区",
      english_full: "By the time the rescue team arrived, the local residents had already evacuated the area.",
      words: [
        { word: "By" }, { word: "the" }, { word: "time" }, { word: "the" }, { word: "rescue" }, { word: "team" }, { word: "arrived", punctuation: "," },
        { word: "the" }, { word: "local" }, { word: "residents" }, { word: "had" }, { word: "already" }, { word: "evacuated" }, { word: "the" }, { word: "area", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间状语从句", phonetic: "/baɪ/ /ðə/ /taɪm/ /ðə/ /ˈrɛskjuː/ /tiːm/ /əˈraɪvd/", translation: "到救援队到达的时候",
          subComponents: [
            { startIndex: 0, words: [{ word: "By" }, { word: "the" }, { word: "time" }], label: "连词短语" },
            { startIndex: 3, words: [{ word: "the" }, { word: "rescue" }, { word: "team" }], label: "(从)主" },
            { startIndex: 6, words: [{ word: "arrived" }], label: "(从)谓" }
          ]
        },
        {
          start: 7, end: 9, label: "主句主语", phonetic: "/ðə/ /ˈloʊkəl/ /ˈrɛzɪdənts/", translation: "当地居民",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "local" }, { word: "residents" }] }]
        },
        {
          start: 10, end: 12, label: "主句谓语", phonetic: "/hæd/ /ɔːlˈrɛdi/ /ɪˈvækjueɪtɪd/", translation: "早已经撤离",
          subComponents: [
            { startIndex: 0, words: [{ word: "had" }] },
            { startIndex: 1, words: [{ word: "already" }] },
            { startIndex: 2, words: [{ word: "evacuated" }] }
          ]
        },
        {
          start: 13, end: 14, label: "主句宾语", phonetic: "/ðə/ /ˈɛəriə/", translation: "该地区",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "area" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "过去完成时 (Past Perfect, had + done)。表示“过去的过去”——在 arrived 发生之前，evacuated 已经完成。" },
        { type: "标志结构", text: "By the time (到...时候为止) 是完成时的经典标志词。" }
      ]
    },
    {
      id: "q_tense_18",
      chinese: "就在演讲之前，他意识到他把重要的文件落在了家里",
      english_full: "He realized that he had left his crucial documents at home just before the presentation.",
      words: [
        { word: "He" }, { word: "realized" }, { word: "that" }, { word: "he" }, { word: "had" }, { word: "left" }, { word: "his" }, { word: "crucial" }, { word: "documents" },
        { word: "at" }, { word: "home" }, { word: "just" }, { word: "before" }, { word: "the" }, { word: "presentation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主句主语", phonetic: "/hiː/", translation: "他",
          subComponents: [{ startIndex: 0, words: [{ word: "He" }] }]
        },
        {
          start: 1, end: 1, label: "主句谓语", phonetic: "/ˈriːəlaɪzd/", translation: "意识到",
          subComponents: [{ startIndex: 0, words: [{ word: "realized" }] }]
        },
        {
          start: 2, end: 14, label: "宾语从句", phonetic: "/ðæt/ /hiː/ /hæd/ /lɛft/ /hɪz/ /ˈkruːʃəl/ /ˈdɒkjʊmənts/ /æt/ /hoʊm/ /dʒʌst/ /bɪˈfɔːr/ /ðə/ /ˌprɛzənˈteɪʃən/", translation: "他把重要的文件落在了家里就在演讲之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "he" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "had" }, { word: "left" }], label: "(从)谓(过完)" },
            { startIndex: 4, words: [{ word: "his" }, { word: "crucial" }, { word: "documents" }], label: "(从)宾" },
            { startIndex: 7, words: [{ word: "at" }, { word: "home" }], label: "(从)地点" },
            { startIndex: 9, words: [{ word: "just" }, { word: "before" }, { word: "the" }, { word: "presentation" }], label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "主句是一般过去时 (realized)，而把文件落在家里发生在 realize 之前，因此从句用过去完成时 (had left)。" }
      ]
    },
    {
      id: "q_tense_19",
      chinese: "到本世纪末，这座城市将完成其雄心勃勃的地铁项目",
      english_full: "By the end of this decade, the city will have completed its ambitious subway project.",
      words: [
        { word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "this" }, { word: "decade", punctuation: "," },
        { word: "the" }, { word: "city" }, { word: "will" }, { word: "have" }, { word: "completed" },
        { word: "its" }, { word: "ambitious" }, { word: "subway" }, { word: "project", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/baɪ/ /ði/ /ɛnd/ /ɒv/ /ðɪs/ /ˈdɛkeɪd/", translation: "到这十年的末尾为止",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "this" }, { word: "decade" }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ðə/ /ˈsɪti/", translation: "这座城市",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "city" }] }]
        },
        {
          start: 8, end: 10, label: "谓语", phonetic: "/wɪl/ /hæv/ /kəmˈpliːtɪd/", translation: "将已经完成",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "completed" }] }]
        },
        {
          start: 11, end: 14, label: "宾语", phonetic: "/ɪts/ /æmˈbɪʃəs/ /ˈsʌbweɪ/ /ˈprɒdʒɛkt/", translation: "其雄心勃勃的地铁项目",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "ambitious" }, { word: "subway" }, { word: "project" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "将来完成时 (Future Perfect, will have done)。表示到将来某个时间点(By the end of...)为止，动作已经完成。" },
        { type: "雅思词汇", text: "decade (十年)；ambitious (雄心勃勃的，宏大的)。" }
      ]
    },
    {
      id: "q_tense_20",
      chinese: "在她大学毕业之前，她将已经掌握了三门外语",
      english_full: "She will have mastered three foreign languages before she graduates from the university.",
      words: [
        { word: "She" }, { word: "will" }, { word: "have" }, { word: "mastered" }, { word: "three" }, { word: "foreign" }, { word: "languages" },
        { word: "before" }, { word: "she" }, { word: "graduates" }, { word: "from" }, { word: "the" }, { word: "university", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主句主语", phonetic: "/ʃiː/", translation: "她",
          subComponents: [{ startIndex: 0, words: [{ word: "She" }] }]
        },
        {
          start: 1, end: 3, label: "主句谓语", phonetic: "/wɪl/ /hæv/ /ˈmæstərd/", translation: "将已经掌握了",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "mastered" }] }]
        },
        {
          start: 4, end: 6, label: "主句宾语", phonetic: "/θriː/ /ˈfɒrɪn/ /ˈlæŋgwɪdʒɪz/", translation: "三门外语",
          subComponents: [{ startIndex: 0, words: [{ word: "three" }, { word: "foreign" }, { word: "languages" }] }]
        },
        {
          start: 7, end: 12, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ʃi/ /ˈgrædʒuəts/ /frɒm/ /ðə/ /ˌjuːnɪˈvɜːrsɪti/", translation: "在她大学毕业之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "she" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "graduates" }], label: "(从)谓" },
            { startIndex: 3, words: [{ word: "from" }, { word: "the" }, { word: "university" }], label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "时态结构", text: "主将完，从现 (before 引导的从句用一般现在时 graduates 表将来，主句用将来完成时)。" }
      ]
    },
    {
      id: "q_tense_21",
      chinese: "在过去的三个月里，研究人员一直在连续不断地分析这些数据",
      english_full: "The researchers have been analyzing the data continuously for the past three months.",
      words: [
        { word: "The" }, { word: "researchers" }, { word: "have" }, { word: "been" }, { word: "analyzing" }, { word: "the" }, { word: "data" },
        { word: "continuously" }, { word: "for" }, { word: "the" }, { word: "past" }, { word: "three" }, { word: "months", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /rɪˈsɜːrtʃərz/", translation: "研究人员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "researchers" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/hæv/ /bɪn/ /ˈænəˌlaɪzɪŋ/", translation: "一直在分析",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "been" }, { word: "analyzing" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ðə/ /ˈdeɪtə/", translation: "这些数据",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "data" }] }]
        },
        {
          start: 7, end: 7, label: "频度状语", phonetic: "/kənˈtɪnjuəsli/", translation: "连续不断地",
          subComponents: [{ startIndex: 0, words: [{ word: "continuously" }] }]
        },
        {
          start: 8, end: 12, label: "时间状语", phonetic: "/fɔːr/ /ðə/ /pæst/ /θriː/ /mʌnθs/", translation: "在过去的三个月里",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "the" }, { word: "past" }, { word: "three" }, { word: "months" }] }]
        }
      ],
      analysis: [
        { type: "时态", text: "现在完成进行时 (have/has been doing)。强调动作从过去开始，一直延续到现在，并且可能还要继续下去。" },
        { type: "标志词", text: "for the past + 时间段，是现在完成(进行)时的标准提示词。" }
      ]
    },
    {
      id: "q_tense_22",
      chinese: "在建筑设计最终被批准之前，他们已经为其工作了几个星期",
      english_full: "They had been working on the architectural design for weeks before it was finally approved.",
      words: [
        { word: "They" }, { word: "had" }, { word: "been" }, { word: "working" }, { word: "on" }, { word: "the" }, { word: "architectural" }, { word: "design" },
        { word: "for" }, { word: "weeks" }, { word: "before" }, { word: "it" }, { word: "was" }, { word: "finally" }, { word: "approved", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主句主语", phonetic: "/ðeɪ/", translation: "他们",
          subComponents: [{ startIndex: 0, words: [{ word: "They" }] }]
        },
        {
          start: 1, end: 3, label: "主句谓语", phonetic: "/hæd/ /bɪn/ /ˈwɜːrkɪŋ/", translation: "之前一直致力于",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "been" }, { word: "working" }] }]
        },
        {
          start: 4, end: 7, label: "状语/宾语", phonetic: "/ɒn/ /ði/ /ˌɑːrkɪˈtɛktʃərəl/ /dɪˈzaɪn/", translation: "建筑设计(的工作)",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "architectural" }, { word: "design" }] }]
        },
        {
          start: 8, end: 9, label: "时间状语", phonetic: "/fɔːr/ /wiːks/", translation: "长达几个星期",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "weeks" }] }]
        },
        {
          start: 10, end: 14, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ɪt/ /wɒz/ /ˈfaɪnəli/ /əˈpruːvd/", translation: "在它最终被批准之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "it" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "was" }, { word: "finally" }, { word: "approved" }], label: "(从)谓(过被)" }
          ]
        }
      ],
      analysis: [
        { type: "时态", text: "过去完成进行时 (had been doing)。强调在过去某个时刻(was approved)之前一直持续进行的动作。" },
        { type: "搭配使用", text: "work on sth 意为“从事...工作，致力于...”。" }
      ]
    }
  ]
};