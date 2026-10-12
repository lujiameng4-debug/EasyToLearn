export const extensions = {
  "gov_01": [
    {
      id: "q_gov_s100",
      chinese: "市议会一致通过了该决议，以拨出更多资金用于改善公共基础设施",
      english_full: "The city council unanimously passed the resolution to allocate additional funds for improving public infrastructure.",
      words: [
        { word: "The" }, { word: "city" }, { word: "council" }, { word: "unanimously" }, { word: "passed" }, { word: "the" }, { word: "resolution" }, { word: "to" }, { word: "allocate" }, { word: "additional" }, { word: "funds" }, { word: "for" }, { word: "improving" }, { word: "public" }, { word: "infrastructure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɪti/ /ˈkaʊnsəl/", translation: "市议会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "city" }, { word: "council" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/juˈnænɪməsli/", translation: "一致地",
          subComponents: [{ startIndex: 0, words: [{ word: "unanimously" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/pæst/", translation: "通过了",
          subComponents: [{ startIndex: 0, words: [{ word: "passed" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ðə/ /ˌrɛzəˈluːʃən/", translation: "该决议",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "resolution" }] }]
        },
        {
          start: 7, end: 14, label: "目的状语", phonetic: "/tuː/ /ˈæləkeɪt/ /əˈdɪʃənəl/ /fʌndz/ /fɔːr/ /ɪmˈpruːvɪŋ/ /ˈpʌblɪk/ /ˈɪnfrəstrʌktʃər/", translation: "以拨出更多资金用于改善公共基础设施",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "allocate" }, { word: "additional" }, { word: "funds" }, { word: "for" }, { word: "improving" }, { word: "public" }, { word: "infrastructure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "政治词汇", text: "city council (市议会), unanimously (一致地), resolution (决议), allocate funds (拨款), public infrastructure (公共基础设施)" }
      ]
    },
    {
      id: "q_gov_s101",
      chinese: "联邦政府宣布了一项全面的财政改革，旨在缩小预算赤字并促进长期经济增长",
      english_full: "The federal government announced a comprehensive fiscal reform aimed at narrowing the budget deficit and promoting long-term economic growth.",
      words: [
        { word: "The" }, { word: "federal" }, { word: "government" }, { word: "announced" }, { word: "a" }, { word: "comprehensive" }, { word: "fiscal" }, { word: "reform" }, { word: "aimed" }, { word: "at" }, { word: "narrowing" }, { word: "the" }, { word: "budget" }, { word: "deficit" }, { word: "and" }, { word: "promoting" }, { word: "long-term" }, { word: "economic" }, { word: "growth", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈfɛdərəl/ /ˈɡʌvərnmənt/", translation: "联邦政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "federal" }, { word: "government" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈnaʊnst/", translation: "宣布了",
          subComponents: [{ startIndex: 0, words: [{ word: "announced" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ə/ /ˌkɒmprɪˈhɛnsɪv/ /ˈfɪskəl/ /rɪˈfɔːrm/", translation: "一项全面的财政改革",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "comprehensive" }, { word: "fiscal" }, { word: "reform" }] }]
        },
        {
          start: 8, end: 18, label: "定语", phonetic: "/eɪmd/ /æt/ /ˈnæroʊɪŋ/ /ðə/ /ˈbʌdʒɪt/ /ˈdɛfɪsɪt/ /ænd/ /prəˈmoʊtɪŋ/ /lɒŋ-tɜːrm/ /ˌiːkəˈnɒmɪk/ /ɡroʊθ/", translation: "旨在缩小预算赤字并促进长期经济增长",
          subComponents: [{ startIndex: 0, words: [{ word: "aimed" }, { word: "at" }, { word: "narrowing" }, { word: "the" }, { word: "budget" }, { word: "deficit" }, { word: "and" }, { word: "promoting" }, { word: "long-term" }, { word: "economic" }, { word: "growth", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "财政政策", text: "fiscal reform (财政改革), budget deficit (预算赤字), long-term economic growth (长期经济增长), comprehensive (全面的)" }
      ]
    },
    {
      id: "q_gov_s102",
      chinese: "议会以压倒性多数通过了这项具有里程碑意义的立法，以加强数据隐私保护",
      english_full: "Parliament passed the landmark legislation by an overwhelming majority to strengthen data privacy protections.",
      words: [
        { word: "Parliament" }, { word: "passed" }, { word: "the" }, { word: "landmark" }, { word: "legislation" }, { word: "by" }, { word: "an" }, { word: "overwhelming" }, { word: "majority" }, { word: "to" }, { word: "strengthen" }, { word: "data" }, { word: "privacy" }, { word: "protections", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈpɑːrləmənt/", translation: "议会",
          subComponents: [{ startIndex: 0, words: [{ word: "Parliament" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/pæst/", translation: "通过了",
          subComponents: [{ startIndex: 0, words: [{ word: "passed" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /ˈlændmɑːrk/ /ˌlɛdʒɪsˈleɪʃən/", translation: "这项具有里程碑意义的立法",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "landmark" }, { word: "legislation" }] }]
        },
        {
          start: 5, end: 8, label: "状语", phonetic: "/baɪ/ /æn/ /ˌoʊvərˈwɛlmɪŋ/ /məˈdʒɒrɪti/", translation: "以压倒性多数",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "an" }, { word: "overwhelming" }, { word: "majority" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /ˈstrɛŋθən/ /ˈdeɪtə/ /ˈprɪvəsi/ /prəˈtɛkʃənz/", translation: "以加强数据隐私保护",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "strengthen" }, { word: "data" }, { word: "privacy" }, { word: "protections", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "立法程序", text: "landmark legislation (里程碑式立法), overwhelming majority (压倒性多数), data privacy (数据隐私), strengthen protections (加强保护)" }
      ]
    },
    {
      id: "q_gov_s103",
      chinese: "公共卫生部门发起了一场全国性的疫苗接种运动，以遏制季节性流感的传播",
      english_full: "The public health department launched a nationwide vaccination campaign to curb the spread of seasonal influenza.",
      words: [
        { word: "The" }, { word: "public" }, { word: "health" }, { word: "department" }, { word: "launched" }, { word: "a" }, { word: "nationwide" }, { word: "vaccination" }, { word: "campaign" }, { word: "to" }, { word: "curb" }, { word: "the" }, { word: "spread" }, { word: "of" }, { word: "seasonal" }, { word: "influenza", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈpʌblɪk/ /hɛlθ/ /dɪˈpɑːrtmənt/", translation: "公共卫生部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "public" }, { word: "health" }, { word: "department" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/lɔːntʃt/", translation: "发起了",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ə/ /ˌneɪʃənˈwaɪd/ /ˌvæksɪˈneɪʃən/ /kæmˈpeɪn/", translation: "一场全国性的疫苗接种运动",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "nationwide" }, { word: "vaccination" }, { word: "campaign" }] }]
        },
        {
          start: 9, end: 15, label: "目的状语", phonetic: "/tuː/ /kɜːrb/ /ðə/ /sprɛd/ /ɒv/ /ˈsiːzənəl/ /ˌɪnfluˈɛnzə/", translation: "以遏制季节性流感的传播",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "curb" }, { word: "the" }, { word: "spread" }, { word: "of" }, { word: "seasonal" }, { word: "influenza", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公共卫生", text: "public health department (公共卫生部门), vaccination campaign (疫苗接种运动), curb the spread (遏制传播), seasonal influenza (季节性流感)" }
      ]
    },
    {
      id: "q_gov_s104",
      chinese: "移民当局正在简化签证审批流程，以吸引更多高技能人才",
      english_full: "Immigration authorities are streamlining the visa approval process to attract more highly skilled professionals.",
      words: [
        { word: "Immigration" }, { word: "authorities" }, { word: "are" }, { word: "streamlining" }, { word: "the" }, { word: "visa" }, { word: "approval" }, { word: "process" }, { word: "to" }, { word: "attract" }, { word: "more" }, { word: "highly" }, { word: "skilled" }, { word: "professionals", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɪmɪˈɡreɪʃən/ /əˈθɒrɪtiz/", translation: "移民当局",
          subComponents: [{ startIndex: 0, words: [{ word: "Immigration" }, { word: "authorities" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(进行)", phonetic: "/ɑːr/ /ˈstriːmlaɪnɪŋ/", translation: "正在简化",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "streamlining" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /ˈviːzə/ /əˈpruːvəl/ /ˈprɒsɛs/", translation: "签证审批流程",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "visa" }, { word: "approval" }, { word: "process" }] }]
        },
        {
          start: 8, end: 13, label: "目的状语", phonetic: "/tuː/ /əˈtrækt/ /mɔːr/ /ˈhaɪli/ /skɪld/ /prəˈfɛʃənəlz/", translation: "以吸引更多高技能人才",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "attract" }, { word: "more" }, { word: "highly" }, { word: "skilled" }, { word: "professionals", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "移民政策", text: "immigration authorities (移民当局), streamline (简化), visa approval (签证审批), highly skilled professionals (高技能人才)" }
      ]
    },
    {
      id: "q_gov_s105",
      chinese: "公务员制度以 merit-based 招聘为核心，以确保公共服务的专业性与公正性",
      english_full: "The civil service system is built on merit-based recruitment to ensure professionalism and impartiality in public service.",
      words: [
        { word: "The" }, { word: "civil" }, { word: "service" }, { word: "system" }, { word: "is" }, { word: "built" }, { word: "on" }, { word: "merit-based" }, { word: "recruitment" }, { word: "to" }, { word: "ensure" }, { word: "professionalism" }, { word: "and" }, { word: "impartiality" }, { word: "in" }, { word: "public" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈsɪvəl/ /ˈsɜːrvɪs/ /ˈsɪstəm/", translation: "公务员制度",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "civil" }, { word: "service" }, { word: "system" }] }]
        },
        {
          start: 4, end: 6, label: "谓语", phonetic: "/ɪz/ /bɪlt/ /ɒn/", translation: "以……为核心",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "built" }, { word: "on" }] }]
        },
        {
          start: 7, end: 8, label: "表语", phonetic: "/ˈmɛrɪt-beɪst/ /rɪˈkruːtmənt/", translation: "merit-based 招聘",
          subComponents: [{ startIndex: 0, words: [{ word: "merit-based" }, { word: "recruitment" }] }]
        },
        {
          start: 9, end: 16, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊr/ /ˌproʊfɛʃəˈnælɪzəm/ /ænd/ /ˌɪmpærʃiˈælɪti/ /ɪn/ /ˈpʌblɪk/ /ˈsɜːrvɪs/", translation: "以确保公共服务的专业性与公正性",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "professionalism" }, { word: "and" }, { word: "impartiality" }, { word: "in" }, { word: "public" }, { word: "service", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行政人事", text: "civil service (公务员制度), merit-based recruitment (merit-based 招聘), impartiality (公正性), professionalism (专业性)" }
      ]
    },
    {
      id: "q_gov_s106",
      chinese: "新出台的透明度法案要求政府机构定期公开预算支出明细",
      english_full: "The newly enacted transparency law requires government agencies to regularly disclose detailed budget expenditures.",
      words: [
        { word: "The" }, { word: "newly" }, { word: "enacted" }, { word: "transparency" }, { word: "law" }, { word: "requires" }, { word: "government" }, { word: "agencies" }, { word: "to" }, { word: "regularly" }, { word: "disclose" }, { word: "detailed" }, { word: "budget" }, { word: "expenditures", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈnjuːli/ /ɪˈnæktɪd/ /trænsˈpærənsi/ /lɔː/", translation: "新出台的透明度法案",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "newly" }, { word: "enacted" }, { word: "transparency" }, { word: "law" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈɡʌvərnmənt/ /ˈeɪdʒənsiz/", translation: "政府机构",
          subComponents: [{ startIndex: 0, words: [{ word: "government" }, { word: "agencies" }] }]
        },
        {
          start: 8, end: 13, label: "宾补", phonetic: "/tuː/ /ˈrɛɡjələrli/ /dɪsˈkloʊz/ /ˈdiːteɪld/ /ˈbʌdʒɪt/ /ɪkˈspɛndɪtʃərz/", translation: "定期公开预算支出明细",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "regularly" }, { word: "disclose" }, { word: "detailed" }, { word: "budget" }, { word: "expenditures", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "政府透明", text: "transparency law (透明度法案), disclose (公开), budget expenditures (预算支出), government agencies (政府机构)" }
      ]
    },
    {
      id: "q_gov_s107",
      chinese: "城市规划委员会批准了新的分区条例，以平衡商业发展与居民生活质量",
      english_full: "The urban planning commission approved new zoning ordinances to balance commercial development with residents' quality of life.",
      words: [
        { word: "The" }, { word: "urban" }, { word: "planning" }, { word: "commission" }, { word: "approved" }, { word: "new" }, { word: "zoning" }, { word: "ordinances" }, { word: "to" }, { word: "balance" }, { word: "commercial" }, { word: "development" }, { word: "with" }, { word: "residents'" }, { word: "quality" }, { word: "of" }, { word: "life", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈɜːrbən/ /ˈplænɪŋ/ /kəˈmɪʃən/", translation: "城市规划委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "urban" }, { word: "planning" }, { word: "commission" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈpruːvd/", translation: "批准了",
          subComponents: [{ startIndex: 0, words: [{ word: "approved" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/njuː/ /ˈzoʊnɪŋ/ /ˈɔːrdɪnənsɪz/", translation: "新的分区条例",
          subComponents: [{ startIndex: 0, words: [{ word: "new" }, { word: "zoning" }, { word: "ordinances" }] }]
        },
        {
          start: 8, end: 16, label: "目的状语", phonetic: "/tuː/ /ˈbæləns/ /kəˈmɜːrʃəl/ /dɪˈvɛləpmənt/ /wɪð/ /residents'/ /ˈkwɒlɪti/ /ɒv/ /laɪf/", translation: "以平衡商业发展与居民生活质量",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "balance" }, { word: "commercial" }, { word: "development" }, { word: "with" }, { word: "residents'" }, { word: "quality" }, { word: "of" }, { word: "life", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "城市规划", text: "urban planning commission (城市规划委员会), zoning ordinances (分区条例), commercial development (商业发展), quality of life (生活质量)" }
      ]
    },
    {
      id: "q_gov_s108",
      chinese: "应急管理部门在台风登陆前启动了最高级别的防灾响应机制",
      english_full: "The emergency management agency activated the highest-level disaster response protocol before the typhoon made landfall.",
      words: [
        { word: "The" }, { word: "emergency" }, { word: "management" }, { word: "agency" }, { word: "activated" }, { word: "the" }, { word: "highest-level" }, { word: "disaster" }, { word: "response" }, { word: "protocol" }, { word: "before" }, { word: "the" }, { word: "typhoon" }, { word: "made" }, { word: "landfall", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ɪˈmɜːrdʒənsi/ /ˈmænɪdʒmənt/ /ˈeɪdʒənsi/", translation: "应急管理部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "emergency" }, { word: "management" }, { word: "agency" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈæktɪveɪtɪd/", translation: "启动了",
          subComponents: [{ startIndex: 0, words: [{ word: "activated" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ðə/ /haɪɪst-ˈlɛvəl/ /dɪˈzæstər/ /rɪˈspɒns/ /ˈproʊtəkɒl/", translation: "最高级别的防灾响应机制",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "highest-level" }, { word: "disaster" }, { word: "response" }, { word: "protocol" }] }]
        },
        {
          start: 10, end: 14, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ðə/ /taɪˈfuːn/ /meɪd/ /ˈlændfɔːl/", translation: "在台风登陆前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "the" }, { word: "typhoon" }, { word: "made" }, { word: "landfall", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "应急管理", text: "emergency management agency (应急管理部门), disaster response protocol (防灾响应机制), make landfall (登陆), activate (启动)" }
      ]
    },
    {
      id: "q_gov_s109",
      chinese: "教育部承诺将大幅增加对欠发达地区公立学校的财政投入",
      english_full: "The education ministry pledged to substantially increase fiscal investment in public schools in underdeveloped regions.",
      words: [
        { word: "The" }, { word: "education" }, { word: "ministry" }, { word: "pledged" }, { word: "to" }, { word: "substantially" }, { word: "increase" }, { word: "fiscal" }, { word: "investment" }, { word: "in" }, { word: "public" }, { word: "schools" }, { word: "in" }, { word: "underdeveloped" }, { word: "regions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌɛdʒuˈkeɪʃən/ /ˈmɪnɪstri/", translation: "教育部",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "education" }, { word: "ministry" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/plɛdʒd/", translation: "承诺",
          subComponents: [{ startIndex: 0, words: [{ word: "pledged" }] }]
        },
        {
          start: 4, end: 14, label: "宾语", phonetic: "/tuː/ /səbˈstænʃəli/ /increase/ /ˈfɪskəl/ /ɪnˈvɛstmənt/ /ɪn/ /ˈpʌblɪk/ /skuːlz/ /ɪn/ /ˌʌndərdɪˈvɛləpt/ /ˈriːdʒənz/", translation: "将大幅增加对欠发达地区公立学校的财政投入",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "substantially" }, { word: "increase" }, { word: "fiscal" }, { word: "investment" }, { word: "in" }, { word: "public" }, { word: "schools" }, { word: "in" }, { word: "underdeveloped" }, { word: "regions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "教育政策", text: "education ministry (教育部), fiscal investment (财政投入), underdeveloped regions (欠发达地区), substantially increase (大幅增加)" }
      ]
    },
    {
      id: "q_gov_s110",
      chinese: "宪法法院裁定该行政命令违宪，并下令立即暂停其执行",
      english_full: "The constitutional court ruled the executive order unconstitutional and ordered its immediate suspension.",
      words: [
        { word: "The" }, { word: "constitutional" }, { word: "court" }, { word: "ruled" }, { word: "the" }, { word: "executive" }, { word: "order" }, { word: "unconstitutional" }, { word: "and" }, { word: "ordered" }, { word: "its" }, { word: "immediate" }, { word: "suspension", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌkɒnstɪˈtjuːʃənəl/ /kɔːrt/", translation: "宪法法院",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "constitutional" }, { word: "court" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ruːld/", translation: "裁定",
          subComponents: [{ startIndex: 0, words: [{ word: "ruled" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /ɪɡˈzɛkjətɪv/ /ˈɔːrdər/ /ˌʌnkɒnstɪˈtjuːʃənəl/", translation: "该行政命令违宪",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "executive" }, { word: "order" }, { word: "unconstitutional" }] }]
        },
        {
          start: 9, end: 9, label: "并列谓语", phonetic: "/ˈɔːrdərd/", translation: "并下令",
          subComponents: [{ startIndex: 0, words: [{ word: "ordered" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ɪts/ /ɪˈmiːdiət/ /səˈspɛnʃən/", translation: "立即暂停其执行",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "immediate" }, { word: "suspension", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "司法审查", text: "constitutional court (宪法法院), executive order (行政命令), unconstitutional (违宪的), immediate suspension (立即暂停)" }
      ]
    },
    {
      id: "q_gov_s111",
      chinese: "外交部表示愿与邻国展开双边谈判，以解决长期存在的边界争端",
      english_full: "The foreign ministry expressed willingness to engage in bilateral negotiations with neighboring countries to resolve long-standing border disputes.",
      words: [
        { word: "The" }, { word: "foreign" }, { word: "ministry" }, { word: "expressed" }, { word: "willingness" }, { word: "to" }, { word: "engage" }, { word: "in" }, { word: "bilateral" }, { word: "negotiations" }, { word: "with" }, { word: "neighboring" }, { word: "countries" }, { word: "to" }, { word: "resolve" }, { word: "long-standing" }, { word: "border" }, { word: "disputes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈfɒrən/ /ˈmɪnɪstri/", translation: "外交部",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "foreign" }, { word: "ministry" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪkˈsprɛst/", translation: "表示",
          subComponents: [{ startIndex: 0, words: [{ word: "expressed" }] }]
        },
        {
          start: 4, end: 17, label: "宾语", phonetic: "/ˈwɪlɪŋnəs/ /tuː/ /ɪnˈɡeɪdʒ/ /ɪn/ /baɪˈlætərəl/ /nɛˌɡoʊʃiˈeɪʃənz/ /wɪð/ /ˈneɪbərɪŋ/ /ˈkʌntriz/ /tuː/ /rɪˈzɒlv/ /lɒŋ-ˈstændɪŋ/ /ˈbɔːrdər/ /dɪˈspjuːts/", translation: "愿与邻国展开双边谈判以解决长期存在的边界争端",
          subComponents: [{ startIndex: 0, words: [{ word: "willingness" }, { word: "to" }, { word: "engage" }, { word: "in" }, { word: "bilateral" }, { word: "negotiations" }, { word: "with" }, { word: "neighboring" }, { word: "countries" }, { word: "to" }, { word: "resolve" }, { word: "long-standing" }, { word: "border" }, { word: "disputes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "外交事务", text: "foreign ministry (外交部), bilateral negotiations (双边谈判), border disputes (边界争端), long-standing (长期存在的)" }
      ]
    },
    {
      id: "q_gov_s112",
      chinese: "税务机关对多家大型企业展开了严格的合规审计，以打击跨境逃税行为",
      english_full: "The tax authority launched rigorous compliance audits of several large corporations to combat cross-border tax evasion.",
      words: [
        { word: "The" }, { word: "tax" }, { word: "authority" }, { word: "launched" }, { word: "rigorous" }, { word: "compliance" }, { word: "audits" }, { word: "of" }, { word: "several" }, { word: "large" }, { word: "corporations" }, { word: "to" }, { word: "combat" }, { word: "cross-border" }, { word: "tax" }, { word: "evasion", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /tæks/ /əˈθɒrɪti/", translation: "税务机关",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tax" }, { word: "authority" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/lɔːntʃt/", translation: "展开了",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/ˈrɪɡərəs/ /kəmˈplaɪəns/ /ˈɔːdɪts/ /ɒv/ /ˈsɛvərəl/ /lɑːrdʒ/ /ˌkɔːrpəˈreɪʃənz/", translation: "对多家大型企业的严格合规审计",
          subComponents: [{ startIndex: 0, words: [{ word: "rigorous" }, { word: "compliance" }, { word: "audits" }, { word: "of" }, { word: "several" }, { word: "large" }, { word: "corporations" }] }]
        },
        {
          start: 11, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈkɒmbæt/ /krɒs-ˈbɔːrdər/ /tæks/ /ɪˈveɪʒən/", translation: "以打击跨境逃税行为",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "combat" }, { word: "cross-border" }, { word: "tax" }, { word: "evasion", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "税收监管", text: "tax authority (税务机关), compliance audit (合规审计), cross-border tax evasion (跨境逃税), rigorous (严格的)" }
      ]
    },
    {
      id: "q_gov_s113",
      chinese: "社会保障局正在改革养老金制度，以应对人口老龄化带来的财政压力",
      english_full: "The social security administration is reforming the pension system to address fiscal pressures caused by population aging.",
      words: [
        { word: "The" }, { word: "social" }, { word: "security" }, { word: "administration" }, { word: "is" }, { word: "reforming" }, { word: "the" }, { word: "pension" }, { word: "system" }, { word: "to" }, { word: "address" }, { word: "fiscal" }, { word: "pressures" }, { word: "caused" }, { word: "by" }, { word: "population" }, { word: "aging", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈsoʊʃəl/ /sɪˈkjʊrɪti/ /ədˌmɪnɪˈstreɪʃən/", translation: "社会保障局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "social" }, { word: "security" }, { word: "administration" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(进行)", phonetic: "/ɪz/ /rɪˈfɔːrmɪŋ/", translation: "正在改革",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "reforming" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ðə/ /ˈpɛnʃən/ /ˈsɪstəm/", translation: "养老金制度",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "pension" }, { word: "system" }] }]
        },
        {
          start: 9, end: 16, label: "目的状语", phonetic: "/tuː/ /əˈdrɛs/ /ˈfɪskəl/ /ˈprɛʃərz/ /kɔːzd/ /baɪ/ /ˌpɒpjuˈleɪʃən/ /ˈeɪdʒɪŋ/", translation: "以应对人口老龄化带来的财政压力",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "address" }, { word: "fiscal" }, { word: "pressures" }, { word: "caused" }, { word: "by" }, { word: "population" }, { word: "aging", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "社会保障", text: "social security administration (社会保障局), pension system (养老金制度), population aging (人口老龄化), fiscal pressures (财政压力)" }
      ]
    },
    {
      id: "q_gov_s114",
      chinese: "环境保护署发布了更为严格的排放标准，以改善城市空气质量",
      english_full: "The environmental protection agency issued more stringent emission standards to improve urban air quality.",
      words: [
        { word: "The" }, { word: "environmental" }, { word: "protection" }, { word: "agency" }, { word: "issued" }, { word: "more" }, { word: "stringent" }, { word: "emission" }, { word: "standards" }, { word: "to" }, { word: "improve" }, { word: "urban" }, { word: "air" }, { word: "quality", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ɪnˌvaɪrənˈmɛntl/ /prəˈtɛkʃən/ /ˈeɪdʒənsi/", translation: "环境保护署",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "environmental" }, { word: "protection" }, { word: "agency" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɪʃuːd/", translation: "发布了",
          subComponents: [{ startIndex: 0, words: [{ word: "issued" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/mɔːr/ /ˈstrɪndʒənt/ /ɪˈmɪʃən/ /ˈstændərdz/", translation: "更为严格的排放标准",
          subComponents: [{ startIndex: 0, words: [{ word: "more" }, { word: "stringent" }, { word: "emission" }, { word: "standards" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /ɪmˈpruːv/ /ˈɜːrbən/ /ɛr/ /ˈkwɒlɪti/", translation: "以改善城市空气质量",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "improve" }, { word: "urban" }, { word: "air" }, { word: "quality", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "环境监管", text: "environmental protection agency (环境保护署), emission standards (排放标准), stringent (严格的), urban air quality (城市空气质量)" }
      ]
    },
    {
      id: "q_gov_s115",
      chinese: "公共交通管理局计划扩建地铁网络，以缓解市中心日益严重的交通拥堵",
      english_full: "The public transit authority plans to expand the metro network to alleviate worsening traffic congestion in the city center.",
      words: [
        { word: "The" }, { word: "public" }, { word: "transit" }, { word: "authority" }, { word: "plans" }, { word: "to" }, { word: "expand" }, { word: "the" }, { word: "metro" }, { word: "network" }, { word: "to" }, { word: "alleviate" }, { word: "worsening" }, { word: "traffic" }, { word: "congestion" }, { word: "in" }, { word: "the" }, { word: "city" }, { word: "center", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈpʌblɪk/ /ˈtrænsɪt/ /əˈθɒrɪti/", translation: "公共交通管理局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "public" }, { word: "transit" }, { word: "authority" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/plænz/", translation: "计划",
          subComponents: [{ startIndex: 0, words: [{ word: "plans" }] }]
        },
        {
          start: 5, end: 18, label: "宾语", phonetic: "/tuː/ /ɪkˈspænd/ /ðə/ /ˈmɛtroʊ/ /ˈnɛtwɜːrk/ /tuː/ /əˈliːvieɪt/ /ˈwɜːrsənɪŋ/ /ˈtræfɪk/ /kənˈdʒɛstʃən/ /ɪn/ /ðə/ /ˈsɪti/ /center/", translation: "扩建地铁网络以缓解市中心日益严重的交通拥堵",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "expand" }, { word: "the" }, { word: "metro" }, { word: "network" }, { word: "to" }, { word: "alleviate" }, { word: "worsening" }, { word: "traffic" }, { word: "congestion" }, { word: "in" }, { word: "the" }, { word: "city" }, { word: "center", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公共交通", text: "public transit authority (公共交通管理局), metro network (地铁网络), traffic congestion (交通拥堵), alleviate (缓解)" }
      ]
    },
    {
      id: "q_gov_s116",
      chinese: "住房管理局推出了一项新的 affordable housing 计划，以帮助低收入家庭获得体面住所",
      english_full: "The housing authority launched a new affordable housing scheme to help low-income families secure decent accommodation.",
      words: [
        { word: "The" }, { word: "housing" }, { word: "authority" }, { word: "launched" }, { word: "a" }, { word: "new" }, { word: "affordable" }, { word: "housing" }, { word: "scheme" }, { word: "to" }, { word: "help" }, { word: "low-income" }, { word: "families" }, { word: "secure" }, { word: "decent" }, { word: "accommodation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈhaʊzɪŋ/ /əˈθɒrɪti/", translation: "住房管理局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "housing" }, { word: "authority" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/lɔːntʃt/", translation: "推出了",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ə/ /njuː/ /əˈfɔːrdəbəl/ /ˈhaʊzɪŋ/ /skiːm/", translation: "一项新的 affordable housing 计划",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "new" }, { word: "affordable" }, { word: "housing" }, { word: "scheme" }] }]
        },
        {
          start: 9, end: 15, label: "目的状语", phonetic: "/tuː/ /help/ /loʊ-ˈɪnkʌm/ /ˈfæmɪliz/ /sɪˈkjʊr/ /ˈdiːsənt/ /əˌkɒməˈdeɪʃən/", translation: "以帮助低收入家庭获得体面住所",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "help" }, { word: "low-income" }, { word: "families" }, { word: "secure" }, { word: "decent" }, { word: "accommodation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "住房政策", text: "housing authority (住房管理局), affordable housing (可负担住房), low-income families (低收入家庭), decent accommodation (体面住所)" }
      ]
    },
    {
      id: "q_gov_s117",
      chinese: "反腐败委员会对一名高级官员涉嫌滥用职权的行为展开了独立调查",
      english_full: "The anti-corruption commission launched an independent investigation into alleged abuse of power by a senior official.",
      words: [
        { word: "The" }, { word: "anti-corruption" }, { word: "commission" }, { word: "launched" }, { word: "an" }, { word: "independent" }, { word: "investigation" }, { word: "into" }, { word: "alleged" }, { word: "abuse" }, { word: "of" }, { word: "power" }, { word: "by" }, { word: "a" }, { word: "senior" }, { word: "official", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌænti-kəˈrʌpʃən/ /kəˈmɪʃən/", translation: "反腐败委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "anti-corruption" }, { word: "commission" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/lɔːntʃt/", translation: "展开了",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 4, end: 15, label: "宾语", phonetic: "/æn/ /ˌɪndɪˈpɛndənt/ /ɪnˌvɛstɪˈɡeɪʃən/ /ˈɪntuː/ /əˈlɛdʒd/ /əˈbjuːs/ /ɒv/ /ˈpaʊər/ /baɪ/ /ə/ /ˈsiːniər/ /əˈfɪʃəl/", translation: "对一名高级官员涉嫌滥用职权行为的独立调查",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "independent" }, { word: "investigation" }, { word: "into" }, { word: "alleged" }, { word: "abuse" }, { word: "of" }, { word: "power" }, { word: "by" }, { word: "a" }, { word: "senior" }, { word: "official", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "反腐倡廉", text: "anti-corruption commission (反腐败委员会), abuse of power (滥用职权), independent investigation (独立调查), senior official (高级官员)" }
      ]
    },
    {
      id: "q_gov_s118",
      chinese: "选举委员会宣布将于下月启动选民登记，以确保选举过程的公平透明",
      english_full: "The electoral commission announced that voter registration will begin next month to ensure a fair and transparent electoral process.",
      words: [
        { word: "The" }, { word: "electoral" }, { word: "commission" }, { word: "announced" }, { word: "that" }, { word: "voter" }, { word: "registration" }, { word: "will" }, { word: "begin" }, { word: "next" }, { word: "month" }, { word: "to" }, { word: "ensure" }, { word: "a" }, { word: "fair" }, { word: "and" }, { word: "transparent" }, { word: "electoral" }, { word: "process", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪˈlɛktərəl/ /kəˈmɪʃən/", translation: "选举委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "electoral" }, { word: "commission" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈnaʊnst/", translation: "宣布",
          subComponents: [{ startIndex: 0, words: [{ word: "announced" }] }]
        },
        {
          start: 4, end: 18, label: "宾语从句", phonetic: "/ðæt/ /ˈvoʊtər/ /ˌrɛdʒɪˈstreɪʃən/ /wɪl/ /bɪˈɡɪn/ /nɛkst/ /mʌnθ/ /tuː/ /ɪnˈʃʊr/ /ə/ /fɛər/ /ænd/ /trænsˈpærənt/ /ɪˈlɛktərəl/ /ˈprɒsɛs/", translation: "将于下月启动选民登记以确保选举过程的公平透明",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "voter" }, { word: "registration" }, { word: "will" }, { word: "begin" }, { word: "next" }, { word: "month" }, { word: "to" }, { word: "ensure" }, { word: "a" }, { word: "fair" }, { word: "and" }, { word: "transparent" }, { word: "electoral" }, { word: "process", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "选举制度", text: "electoral commission (选举委员会), voter registration (选民登记), electoral process (选举过程), transparent (透明的)" }
      ]
    },
    {
      id: "q_gov_s119",
      chinese: "国防部与盟友签署了一项新的防务合作协议，以加强区域安全协作",
      english_full: "The defense ministry signed a new defense cooperation agreement with allies to strengthen regional security collaboration.",
      words: [
        { word: "The" }, { word: "defense" }, { word: "ministry" }, { word: "signed" }, { word: "a" }, { word: "new" }, { word: "defense" }, { word: "cooperation" }, { word: "agreement" }, { word: "with" }, { word: "allies" }, { word: "to" }, { word: "strengthen" }, { word: "regional" }, { word: "security" }, { word: "collaboration", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /dɪˈfɛns/ /ˈmɪnɪstri/", translation: "国防部",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "defense" }, { word: "ministry" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/saɪnd/", translation: "签署了",
          subComponents: [{ startIndex: 0, words: [{ word: "signed" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ə/ /njuː/ /dɪˈfɛns/ /koʊˌɒpəˈreɪʃən/ /əˈɡriːmənt/", translation: "一项新的防务合作协议",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "new" }, { word: "defense" }, { word: "cooperation" }, { word: "agreement" }] }]
        },
        {
          start: 9, end: 10, label: "状语", phonetic: "/wɪð/ /ˈælaɪz/", translation: "与盟友",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "allies" }] }]
        },
        {
          start: 11, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈstrɛŋθən/ /ˈriːdʒənəl/ /sɪˈkjʊrɪti/ /kəˌlæbəˈreɪʃən/", translation: "以加强区域安全协作",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "strengthen" }, { word: "regional" }, { word: "security" }, { word: "collaboration", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "国防安全", text: "defense ministry (国防部), defense cooperation agreement (防务合作协议), regional security (区域安全), collaboration (协作)" }
      ]
    },
    {
      id: "q_gov_s120",
      chinese: "数字政务平台使公民能够在线办理营业执照，大幅提升了行政效率",
      english_full: "The digital governance platform enables citizens to apply for business licenses online, significantly improving administrative efficiency.",
      words: [
        { word: "The" }, { word: "digital" }, { word: "governance" }, { word: "platform" }, { word: "enables" }, { word: "citizens" }, { word: "to" }, { word: "apply" }, { word: "for" }, { word: "business" }, { word: "licenses" }, { word: "online" }, { word: "significantly" }, { word: "improving" }, { word: "administrative" }, { word: "efficiency", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈdɪdʒɪtl/ /ˈɡʌvərnəns/ /ˈplætfɔːrm/", translation: "数字政务平台",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "digital" }, { word: "governance" }, { word: "platform" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪˈneɪbəlz/", translation: "使",
          subComponents: [{ startIndex: 0, words: [{ word: "enables" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈsɪtɪzənz/", translation: "公民",
          subComponents: [{ startIndex: 0, words: [{ word: "citizens" }] }]
        },
        {
          start: 6, end: 11, label: "宾补", phonetic: "/tuː/ /əˈplaɪ/ /fɔːr/ /ˈbɪznəs/ /ˈlaɪsənsɪz/ /ˈɒnlaɪn/", translation: "能够在线办理营业执照",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "apply" }, { word: "for" }, { word: "business" }, { word: "licenses" }, { word: "online" }] }]
        },
        {
          start: 12, end: 15, label: "结果状语", phonetic: "/sɪɡˈnɪfɪkəntli/ /ɪmˈpruːvɪŋ/ /ədˈmɪnɪstrətɪv/ /ɪˈfɪʃənsi/", translation: "大幅提升了行政效率",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }, { word: "improving" }, { word: "administrative" }, { word: "efficiency", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "数字政府", text: "digital governance platform (数字政务平台), business licenses (营业执照), administrative efficiency (行政效率), online (在线)" }
      ]
    },
    {
      id: "q_gov_s121",
      chinese: "政府正在推进公共采购改革，以提高透明度并减少腐败风险",
      english_full: "The government is advancing public procurement reform to enhance transparency and reduce corruption risks.",
      words: [
        { word: "The" }, { word: "government" }, { word: "is" }, { word: "advancing" }, { word: "public" }, { word: "procurement" }, { word: "reform" }, { word: "to" }, { word: "enhance" }, { word: "transparency" }, { word: "and" }, { word: "reduce" }, { word: "corruption" }, { word: "risks", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɡʌvərnmənt/", translation: "政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "government" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(进行)", phonetic: "/ɪz/ /ədˈvænsɪŋ/", translation: "正在推进",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "advancing" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˈpʌblɪk/ /prəˈkjʊərmənt/ /rɪˈfɔːrm/", translation: "公共采购改革",
          subComponents: [{ startIndex: 0, words: [{ word: "public" }, { word: "procurement" }, { word: "reform" }] }]
        },
        {
          start: 7, end: 13, label: "目的状语", phonetic: "/tuː/ /ɪnˈhæns/ /trænsˈpærənsi/ /ænd/ /rɪˈdjuːs/ /kəˈrʌpʃən/ /rɪsks/", translation: "以提高透明度并减少腐败风险",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "enhance" }, { word: "transparency" }, { word: "and" }, { word: "reduce" }, { word: "corruption" }, { word: "risks", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公共采购", text: "public procurement reform (公共采购改革), corruption risks (腐败风险), enhance transparency (提高透明度), advance (推进)" }
      ]
    },
    {
      id: "q_gov_s122",
      chinese: "福利改革计划将对 means-tested benefits 进行重新评估，以确保资源分配给最需要的人群",
      english_full: "The welfare reform program will reassess means-tested benefits to ensure resources reach those most in need.",
      words: [
        { word: "The" }, { word: "welfare" }, { word: "reform" }, { word: "program" }, { word: "will" }, { word: "reassess" }, { word: "means-tested" }, { word: "benefits" }, { word: "to" }, { word: "ensure" }, { word: "resources" }, { word: "reach" }, { word: "those" }, { word: "most" }, { word: "in" }, { word: "need", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈwɛlfɛr/ /rɪˈfɔːrm/ /ˈproʊɡræm/", translation: "福利改革计划",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "welfare" }, { word: "reform" }, { word: "program" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/wɪl/ /ˌriːəˈsɛs/", translation: "将对……进行重新评估",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "reassess" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/miːnz-tɛstɪd/ /ˈbɛnɪfɪts/", translation: "means-tested benefits",
          subComponents: [{ startIndex: 0, words: [{ word: "means-tested" }, { word: "benefits" }] }]
        },
        {
          start: 8, end: 15, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊr/ /rɪˈsɔːrsɪz/ /riːtʃ/ /ðoʊz/ /moʊst/ /ɪn/ /niːd/", translation: "以确保资源分配给最需要的人群",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "resources" }, { word: "reach" }, { word: "those" }, { word: "most" }, { word: "in" }, { word: "need", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "社会福利", text: "welfare reform (福利改革), means-tested benefits ( means-tested 福利), reassess (重新评估), those most in need (最需要的人群)" }
      ]
    },
    {
      id: "q_gov_s123",
      chinese: "警察监督委员会审查了多起涉及过度使用武力的投诉，并提出了系统性改革建议",
      english_full: "The police oversight board reviewed multiple complaints involving excessive use of force and proposed systemic reform recommendations.",
      words: [
        { word: "The" }, { word: "police" }, { word: "oversight" }, { word: "board" }, { word: "reviewed" }, { word: "multiple" }, { word: "complaints" }, { word: "involving" }, { word: "excessive" }, { word: "use" }, { word: "of" }, { word: "force" }, { word: "and" }, { word: "proposed" }, { word: "systemic" }, { word: "reform" }, { word: "recommendations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /pəˈliːs/ /ˈoʊvərsaɪt/ /bɔːrd/", translation: "警察监督委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "police" }, { word: "oversight" }, { word: "board" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈvjuːd/", translation: "审查了",
          subComponents: [{ startIndex: 0, words: [{ word: "reviewed" }] }]
        },
        {
          start: 5, end: 11, label: "宾语", phonetic: "/ˈmʌltɪpl/ /kəmˈpleɪnts/ /involving/ /ɪkˈsɛsɪv/ /use/ /ɒv/ /fɔːrs/", translation: "多起涉及过度使用武力的投诉",
          subComponents: [{ startIndex: 0, words: [{ word: "multiple" }, { word: "complaints" }, { word: "involving" }, { word: "excessive" }, { word: "use" }, { word: "of" }, { word: "force" }] }]
        },
        {
          start: 13, end: 13, label: "并列谓语", phonetic: "/prəˈpoʊzd/", translation: "并提出了",
          subComponents: [{ startIndex: 0, words: [{ word: "proposed" }] }]
        },
        {
          start: 14, end: 16, label: "宾语", phonetic: "/sɪˈstɛmɪk/ /rɪˈfɔːrm/ /ˌrɛkəmɛnˈdeɪʃənz/", translation: "系统性改革建议",
          subComponents: [{ startIndex: 0, words: [{ word: "systemic" }, { word: "reform" }, { word: "recommendations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "警务监督", text: "police oversight board (警察监督委员会), excessive use of force (过度使用武力), systemic reform (系统性改革), complaints (投诉)" }
      ]
    },
    {
      id: "q_gov_s124",
      chinese: "公共养老基金管理者警告称，若不进行结构性改革，基金将在二十年内面临枯竭",
      english_full: "Public pension fund managers warned that without structural reforms, the fund would face depletion within twenty years.",
      words: [
        { word: "Public" }, { word: "pension" }, { word: "fund" }, { word: "managers" }, { word: "warned" }, { word: "that" }, { word: "without" }, { word: "structural" }, { word: "reforms" }, { word: "the" }, { word: "fund" }, { word: "would" }, { word: "face" }, { word: "depletion" }, { word: "within" }, { word: "twenty" }, { word: "years", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈpʌblɪk/ /ˈpɛnʃən/ /fʌnd/ /ˈmænɪdʒərz/", translation: "公共养老基金管理者",
          subComponents: [{ startIndex: 0, words: [{ word: "Public" }, { word: "pension" }, { word: "fund" }, { word: "managers" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/wɔːrnd/", translation: "警告称",
          subComponents: [{ startIndex: 0, words: [{ word: "warned" }] }]
        },
        {
          start: 5, end: 16, label: "宾语从句", phonetic: "/ðæt/ /wɪˈðaʊt/ /ˈstrʌktʃərəl/ /rɪˈfɔːrmz/ /ðə/ /fʌnd/ /wʊd/ /feɪs/ /dɪˈpliːʃən/ /wɪˈðɪn/ /ˈtwɛnti/ /jɪərz/", translation: "若不进行结构性改革基金将在二十年内面临枯竭",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "without" }, { word: "structural" }, { word: "reforms" }, { word: "the" }, { word: "fund" }, { word: "would" }, { word: "face" }, { word: "depletion" }, { word: "within" }, { word: "twenty" }, { word: "years", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "养老金管理", text: "pension fund managers (养老基金管理者), structural reforms (结构性改革), depletion (枯竭), warned (警告)" }
      ]
    },
    {
      id: "q_gov_s125",
      chinese: "金融监管机构设立了 regulatory sandbox，以鼓励金融科技创新同时管控潜在风险",
      english_full: "The financial regulator established a regulatory sandbox to encourage fintech innovation while managing potential risks.",
      words: [
        { word: "The" }, { word: "financial" }, { word: "regulator" }, { word: "established" }, { word: "a" }, { word: "regulatory" }, { word: "sandbox" }, { word: "to" }, { word: "encourage" }, { word: "fintech" }, { word: "innovation" }, { word: "while" }, { word: "managing" }, { word: "potential" }, { word: "risks", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /faɪˈnænʃəl/ /ˈrɛɡjuleɪtər/", translation: "金融监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "financial" }, { word: "regulator" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈstæblɪʃt/", translation: "设立了",
          subComponents: [{ startIndex: 0, words: [{ word: "established" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ə/ /ˈrɛɡjələtɔːri/ /ˈsændbɒks/", translation: "regulatory sandbox",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "regulatory" }, { word: "sandbox" }] }]
        },
        {
          start: 7, end: 14, label: "目的状语", phonetic: "/tuː/ /ɪnˈkʌrɪdʒ/ /ˈfɪntɛk/ /ˌɪnəˈveɪʃən/ /waɪl/ /ˈmænɪdʒɪŋ/ /pəˈtɛnʃəl/ /rɪsks/", translation: "以鼓励金融科技创新同时管控潜在风险",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "encourage" }, { word: "fintech" }, { word: "innovation" }, { word: "while" }, { word: "managing" }, { word: "potential" }, { word: "risks", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "金融监管", text: "financial regulator (金融监管机构), regulatory sandbox (监管沙盒), fintech innovation (金融科技创新), potential risks (潜在风险)" }
      ]
    },
    {
      id: "q_gov_s126",
      chinese: "人口普查局发布了最新 demographic statistics，为制定公共政策提供了重要依据",
      english_full: "The census bureau released the latest demographic statistics, providing an important basis for public policy formulation.",
      words: [
        { word: "The" }, { word: "census" }, { word: "bureau" }, { word: "released" }, { word: "the" }, { word: "latest" }, { word: "demographic" }, { word: "statistics" }, { word: "providing" }, { word: "an" }, { word: "important" }, { word: "basis" }, { word: "for" }, { word: "public" }, { word: "policy" }, { word: "formulation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛnsəs/ /ˈbjʊroʊ/", translation: "人口普查局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "census" }, { word: "bureau" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈliːst/", translation: "发布了",
          subComponents: [{ startIndex: 0, words: [{ word: "released" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /ˈleɪtɪst/ /ˌdɛməˈɡræfɪk/ /stəˈtɪstɪks/", translation: "最新 demographic statistics",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "latest" }, { word: "demographic" }, { word: "statistics" }] }]
        },
        {
          start: 8, end: 15, label: "状语", phonetic: "/prəˈvaɪdɪŋ/ /æn/ /ɪmˈpɔːrtənt/ /ˈbeɪsɪs/ /fɔːr/ /ˈpʌblɪk/ /ˈpɒləsi/ /ˌfɔːrmjuˈleɪʃən/", translation: "为制定公共政策提供了重要依据",
          subComponents: [{ startIndex: 0, words: [{ word: "providing" }, { word: "an" }, { word: "important" }, { word: "basis" }, { word: "for" }, { word: "public" }, { word: "policy" }, { word: "formulation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "人口统计", text: "census bureau (人口普查局), demographic statistics (人口统计数据), policy formulation (政策制定), basis (依据)" }
      ]
    },
    {
      id: "q_gov_s127",
      chinese: "监察专员办公室受理了数百起公民对公共服务的投诉，并督促相关部门限期整改",
      english_full: "The ombudsman office handled hundreds of citizen complaints about public services and urged relevant departments to rectify issues within a deadline.",
      words: [
        { word: "The" }, { word: "ombudsman" }, { word: "office" }, { word: "handled" }, { word: "hundreds" }, { word: "of" }, { word: "citizen" }, { word: "complaints" }, { word: "about" }, { word: "public" }, { word: "services" }, { word: "and" }, { word: "urged" }, { word: "relevant" }, { word: "departments" }, { word: "to" }, { word: "rectify" }, { word: "issues" }, { word: "within" }, { word: "a" }, { word: "deadline", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈɒmbʊdzmən/ /ˈɒfɪs/", translation: "监察专员办公室",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "ombudsman" }, { word: "office" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈhændld/", translation: "受理了",
          subComponents: [{ startIndex: 0, words: [{ word: "handled" }] }]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/ˈhʌndrədz/ /ɒv/ /ˈsɪtɪzən/ /kəmˈpleɪnts/ /əˈbaʊt/ /ˈpʌblɪk/ /ˈsɜːrvɪsɪz/", translation: "数百起公民对公共服务的投诉",
          subComponents: [{ startIndex: 0, words: [{ word: "hundreds" }, { word: "of" }, { word: "citizen" }, { word: "complaints" }, { word: "about" }, { word: "public" }, { word: "services" }] }]
        },
        {
          start: 12, end: 12, label: "并列谓语", phonetic: "/ɜːrdʒd/", translation: "并督促",
          subComponents: [{ startIndex: 0, words: [{ word: "urged" }] }]
        },
        {
          start: 13, end: 20, label: "宾语", phonetic: "/ˈrɛləvənt/ /dɪˈpɑːrtmənts/ /tuː/ /ˈrɛktɪfaɪ/ /ˈɪʃuːz/ /wɪˈðɪn/ /ə/ /ˈdɛdlaɪn/", translation: "相关部门限期整改",
          subComponents: [{ startIndex: 0, words: [{ word: "relevant" }, { word: "departments" }, { word: "to" }, { word: "rectify" }, { word: "issues" }, { word: "within" }, { word: "a" }, { word: "deadline", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行政监察", text: "ombudsman office (监察专员办公室), citizen complaints (公民投诉), rectify issues (整改问题), within a deadline (限期)" }
      ]
    },
    {
      id: "q_gov_s128",
      chinese: "政府与私营企业签署了 public-private partnership 协议，共同投资修建新的高速公路",
      english_full: "The government signed a public-private partnership agreement with private enterprises to jointly invest in building a new expressway.",
      words: [
        { word: "The" }, { word: "government" }, { word: "signed" }, { word: "a" }, { word: "public-private" }, { word: "partnership" }, { word: "agreement" }, { word: "with" }, { word: "private" }, { word: "enterprises" }, { word: "to" }, { word: "jointly" }, { word: "invest" }, { word: "in" }, { word: "building" }, { word: "a" }, { word: "new" }, { word: "expressway", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɡʌvərnmənt/", translation: "政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "government" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/saɪnd/", translation: "签署了",
          subComponents: [{ startIndex: 0, words: [{ word: "signed" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ə/ /ˈpʌblɪk-ˈpraɪvət/ /ˈpɑːrtnərʃɪp/ /əˈɡriːmənt/", translation: "public-private partnership 协议",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "public-private" }, { word: "partnership" }, { word: "agreement" }] }]
        },
        {
          start: 7, end: 9, label: "状语", phonetic: "/wɪð/ /ˈpraɪvət/ /ˈɛntərpraɪzɪz/", translation: "与私营企业",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "private" }, { word: "enterprises" }] }]
        },
        {
          start: 10, end: 17, label: "目的状语", phonetic: "/tuː/ /ˈdʒɔɪntli/ /ɪnˈvɛst/ /ɪn/ /ˈbɪldɪŋ/ /ə/ /njuː/ /ɪkˈsprɛsweɪ/", translation: "共同投资修建新的高速公路",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "jointly" }, { word: "invest" }, { word: "in" }, { word: "building" }, { word: "a" }, { word: "new" }, { word: "expressway", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "政企合作", text: "public-private partnership (PPP/公私合作), private enterprises (私营企业), jointly invest (共同投资), expressway (高速公路)" }
      ]
    },
    {
      id: "q_gov_s129",
      chinese: "最高法院维持了下级法院的原判，确认该法规符合宪法精神",
      english_full: "The supreme court upheld the lower court ruling, confirming that the statute conforms to constitutional principles.",
      words: [
        { word: "The" }, { word: "supreme" }, { word: "court" }, { word: "upheld" }, { word: "the" }, { word: "lower" }, { word: "court" }, { word: "ruling" }, { word: "confirming" }, { word: "that" }, { word: "the" }, { word: "statute" }, { word: "conforms" }, { word: "to" }, { word: "constitutional" }, { word: "principles", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /suːˈpriːm/ /kɔːrt/", translation: "最高法院",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "supreme" }, { word: "court" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ʌpˈhoʊld/", translation: "维持了",
          subComponents: [{ startIndex: 0, words: [{ word: "upheld" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /ˈloʊər/ /kɔːrt/ /ˈruːlɪŋ/", translation: "下级法院的原判",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "lower" }, { word: "court" }, { word: "ruling" }] }]
        },
        {
          start: 8, end: 15, label: "状语", phonetic: "/kənˈfɜːrmɪŋ/ /ðæt/ /ðə/ /ˈstætʃuːt/ /kənˈfɔːrmz/ /tuː/ /ˌkɒnstɪˈtjuːʃənəl/ /ˈprɪnsəpəlz/", translation: "确认该法规符合宪法精神",
          subComponents: [{ startIndex: 0, words: [{ word: "confirming" }, { word: "that" }, { word: "the" }, { word: "statute" }, { word: "conforms" }, { word: "to" }, { word: "constitutional" }, { word: "principles", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "司法判决", text: "supreme court (最高法院), uphold a ruling (维持判决), constitutional principles (宪法精神), statute (法规)" }
      ]
    },
    {
      id: "q_gov_s130",
      chinese: "边境安全机构加强了对主要口岸的通关检查，以防范非法走私活动",
      english_full: "Border security agencies intensified clearance inspections at major ports to guard against illegal smuggling activities.",
      words: [
        { word: "Border" }, { word: "security" }, { word: "agencies" }, { word: "intensified" }, { word: "clearance" }, { word: "inspections" }, { word: "at" }, { word: "major" }, { word: "ports" }, { word: "to" }, { word: "guard" }, { word: "against" }, { word: "illegal" }, { word: "smuggling" }, { word: "activities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈbɔːrdər/ /sɪˈkjʊrɪti/ /ˈeɪdʒənsiz/", translation: "边境安全机构",
          subComponents: [{ startIndex: 0, words: [{ word: "Border" }, { word: "security" }, { word: "agencies" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈtɛnsɪfaɪd/", translation: "加强了",
          subComponents: [{ startIndex: 0, words: [{ word: "intensified" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ˈklɪərəns/ /ɪnˈspɛkʃənz/ /æt/ /ˈmeɪdʒər/ /pɔːrts/", translation: "对主要口岸的通关检查",
          subComponents: [{ startIndex: 0, words: [{ word: "clearance" }, { word: "inspections" }, { word: "at" }, { word: "major" }, { word: "ports" }] }]
        },
        {
          start: 9, end: 14, label: "目的状语", phonetic: "/tuː/ /ɡɑːrd/ /əˈɡɛnst/ /ɪˈliːɡəl/ /ˈsmʌɡlɪŋ/ /ækˈtɪvɪtiz/", translation: "以防范非法走私活动",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "guard" }, { word: "against" }, { word: "illegal" }, { word: "smuggling" }, { word: "activities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "边境管理", text: "border security agencies (边境安全机构), clearance inspections (通关检查), illegal smuggling (非法走私), guard against (防范)" }
      ]
    },
    {
      id: "q_gov_s131",
      chinese: "公共广播机构承诺在报道选举期间保持 editorial independence，以维护媒体公信力",
      english_full: "The public broadcaster pledged to maintain editorial independence during election coverage to preserve media credibility.",
      words: [
        { word: "The" }, { word: "public" }, { word: "broadcaster" }, { word: "pledged" }, { word: "to" }, { word: "maintain" }, { word: "editorial" }, { word: "independence" }, { word: "during" }, { word: "election" }, { word: "coverage" }, { word: "to" }, { word: "preserve" }, { word: "media" }, { word: "credibility", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈpʌblɪk/ /ˈbrɔːdkæstər/", translation: "公共广播机构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "public" }, { word: "broadcaster" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/plɛdʒd/", translation: "承诺",
          subComponents: [{ startIndex: 0, words: [{ word: "pledged" }] }]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/tuː/ /meɪnˈteɪn/ /ˌɛdɪˈtɔːriəl/ /ˌɪndɪˈpɛndəns/ /ˈdjʊərɪŋ/ /ɪˈlɛkʃən/ /ˈkʌvərɪdʒ/", translation: "在报道选举期间保持 editorial independence",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "maintain" }, { word: "editorial" }, { word: "independence" }, { word: "during" }, { word: "election" }, { word: "coverage" }] }]
        },
        {
          start: 11, end: 14, label: "目的状语", phonetic: "/tuː/ /prɪˈzɜːrv/ /ˈmiːdiə/ /ˌkrɛdɪˈbɪlɪti/", translation: "以维护媒体公信力",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "preserve" }, { word: "media" }, { word: "credibility", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公共媒体", text: "public broadcaster (公共广播机构), editorial independence (编辑独立性), election coverage (选举报道), media credibility (媒体公信力)" }
      ]
    },
    {
      id: "q_gov_s132",
      chinese: "劳工监察部门加大了对违反最低工资标准的企业的执法力度",
      english_full: "Labor inspection departments stepped up enforcement against companies violating minimum wage standards.",
      words: [
        { word: "Labor" }, { word: "inspection" }, { word: "departments" }, { word: "stepped" }, { word: "up" }, { word: "enforcement" }, { word: "against" }, { word: "companies" }, { word: "violating" }, { word: "minimum" }, { word: "wage" }, { word: "standards", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈleɪbər/ /ɪnˈspɛkʃən/ /dɪˈpɑːrtmənts/", translation: "劳工监察部门",
          subComponents: [{ startIndex: 0, words: [{ word: "Labor" }, { word: "inspection" }, { word: "departments" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/stɛpt/ /up/", translation: "加大了",
          subComponents: [{ startIndex: 0, words: [{ word: "stepped" }, { word: "up" }] }]
        },
        {
          start: 5, end: 11, label: "宾语", phonetic: "/ɪnˈfɔːrsmənt/ /əˈɡɛnst/ /ˈkʌmpəniz/ /ˈvaɪəleɪtɪŋ/ /ˈmɪnɪməm/ /weɪdʒ/ /ˈstændərdz/", translation: "对违反最低工资标准的企业的执法力度",
          subComponents: [{ startIndex: 0, words: [{ word: "enforcement" }, { word: "against" }, { word: "companies" }, { word: "violating" }, { word: "minimum" }, { word: "wage" }, { word: "standards", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "劳工权益", text: "labor inspection (劳工监察), minimum wage standards (最低工资标准), stepped up enforcement (加大执法力度), violating (违反)" }
      ]
    },
    {
      id: "q_gov_s133",
      chinese: "国家档案馆投入巨资 digitizing fragile historical records，以确保文化遗产的永久保存",
      english_full: "The national archives invested heavily in digitizing fragile historical records to ensure the permanent preservation of cultural heritage.",
      words: [
        { word: "The" }, { word: "national" }, { word: "archives" }, { word: "invested" }, { word: "heavily" }, { word: "in" }, { word: "digitizing" }, { word: "fragile" }, { word: "historical" }, { word: "records" }, { word: "to" }, { word: "ensure" }, { word: "the" }, { word: "permanent" }, { word: "preservation" }, { word: "of" }, { word: "cultural" }, { word: "heritage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈnæʃənəl/ /ˈɑːrkaɪvz/", translation: "国家档案馆",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "national" }, { word: "archives" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ɪnˈvɛstɪd/ /ˈhɛvɪli/", translation: "投入巨资",
          subComponents: [{ startIndex: 0, words: [{ word: "invested" }, { word: "heavily" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ɪn/ /ˈdɪdʒɪtaɪzɪŋ/ /ˈfrædʒaɪl/ /hɪˈstɒrɪkəl/ /ˈrɛkɔːrdz/", translation: "digitizing fragile historical records",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "digitizing" }, { word: "fragile" }, { word: "historical" }, { word: "records" }] }]
        },
        {
          start: 10, end: 17, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊr/ /ðə/ /ˈpɜːrmənənt/ /ˌprɛzərˈveɪʃən/ /ɒv/ /ˈkʌltʃərəl/ /ˈhɛrɪtɪdʒ/", translation: "以确保文化遗产的永久保存",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "the" }, { word: "permanent" }, { word: "preservation" }, { word: "of" }, { word: "cultural" }, { word: "heritage", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "档案管理", text: "national archives (国家档案馆), digitizing (数字化), historical records (历史档案), cultural heritage (文化遗产)" }
      ]
    },
    {
      id: "q_gov_s134",
      chinese: "网络安全局警告称，针对关键基础设施的网络攻击正在显著增加",
      english_full: "The cybersecurity agency warned that cyberattacks targeting critical infrastructure are increasing significantly.",
      words: [
        { word: "The" }, { word: "cybersecurity" }, { word: "agency" }, { word: "warned" }, { word: "that" }, { word: "cyberattacks" }, { word: "targeting" }, { word: "critical" }, { word: "infrastructure" }, { word: "are" }, { word: "increasing" }, { word: "significantly", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsaɪbərsɪˌkjʊrɪti/ /ˈeɪdʒənsi/", translation: "网络安全局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "cybersecurity" }, { word: "agency" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/wɔːrnd/", translation: "警告称",
          subComponents: [{ startIndex: 0, words: [{ word: "warned" }] }]
        },
        {
          start: 4, end: 11, label: "宾语从句", phonetic: "/ðæt/ /ˈsaɪbərætæks/ /ˈtɑːrɡɪtɪŋ/ /ˈkrɪtɪkəl/ /ˈɪnfrəstrʌktʃər/ /ɑːr/ /ɪnˈkriːsɪŋ/ /sɪɡˈnɪfɪkəntli/", translation: "针对关键基础设施的网络攻击正在显著增加",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "cyberattacks" }, { word: "targeting" }, { word: "critical" }, { word: "infrastructure" }, { word: "are" }, { word: "increasing" }, { word: "significantly", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网络安全", text: "cybersecurity agency (网络安全局), critical infrastructure (关键基础设施), cyberattacks (网络攻击), significantly (显著地)" }
      ]
    },
    {
      id: "q_gov_s135",
      chinese: "市政水务公司实施了严格的分级节水措施，以应对持续的干旱",
      english_full: "The municipal water utility implemented strict tiered water conservation measures to cope with prolonged drought.",
      words: [
        { word: "The" }, { word: "municipal" }, { word: "water" }, { word: "utility" }, { word: "implemented" }, { word: "strict" }, { word: "tiered" }, { word: "water" }, { word: "conservation" }, { word: "measures" }, { word: "to" }, { word: "cope" }, { word: "with" }, { word: "prolonged" }, { word: "drought", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /mjuːˈnɪsɪpəl/ /ˈwɔːtər/ /juːˈtɪlɪti/", translation: "市政水务公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "municipal" }, { word: "water" }, { word: "utility" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɪmplɪmɛntɪd/", translation: "实施了",
          subComponents: [{ startIndex: 0, words: [{ word: "implemented" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/strɪkt/ /tɪrd/ /ˈwɔːtər/ /ˌkɒnsərˈveɪʃən/ /ˈmɛʒərz/", translation: "严格的分级节水措施",
          subComponents: [{ startIndex: 0, words: [{ word: "strict" }, { word: "tiered" }, { word: "water" }, { word: "conservation" }, { word: "measures" }] }]
        },
        {
          start: 10, end: 14, label: "目的状语", phonetic: "/tuː/ /koʊp/ /wɪð/ /prəˈlɒŋd/ /draʊt/", translation: "以应对持续的干旱",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "cope" }, { word: "with" }, { word: "prolonged" }, { word: "drought", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公共事业", text: "municipal water utility (市政水务公司), water conservation (节水), tiered measures (分级措施), prolonged drought (持续干旱)" }
      ]
    },
    {
      id: "q_gov_s136",
      chinese: "难民安置办公室与社区组织合作，为 newly arrived refugees 提供语言培训与就业支持",
      english_full: "The refugee resettlement office partnered with community organizations to provide language training and employment support for newly arrived refugees.",
      words: [
        { word: "The" }, { word: "refugee" }, { word: "resettlement" }, { word: "office" }, { word: "partnered" }, { word: "with" }, { word: "community" }, { word: "organizations" }, { word: "to" }, { word: "provide" }, { word: "language" }, { word: "training" }, { word: "and" }, { word: "employment" }, { word: "support" }, { word: "for" }, { word: "newly" }, { word: "arrived" }, { word: "refugees", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˌrɛfjuˈdʒiː/ /ˌriːˈsɛtlmənt/ /ˈɒfɪs/", translation: "难民安置办公室",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "refugee" }, { word: "resettlement" }, { word: "office" }] }]
        },
        {
          start: 4, end: 7, label: "谓语", phonetic: "/ˈpɑːrtnərd/ /wɪð/ /kəˈmjuːnɪti/ /ˌɔːrɡənaɪˈzeɪʃənz/", translation: "与社区组织合作",
          subComponents: [{ startIndex: 0, words: [{ word: "partnered" }, { word: "with" }, { word: "community" }, { word: "organizations" }] }]
        },
        {
          start: 8, end: 18, label: "目的状语", phonetic: "/tuː/ /provide/ /ˈlæŋɡwɪdʒ/ /ˈtreɪnɪŋ/ /ænd/ /ɪmˈplɔɪmənt/ /səˈpɔːrt/ /fɔːr/ /ˈnjuːli/ /əˈraɪvd/ /ˌrɛfjuˈdʒiːz/", translation: "为 newly arrived refugees 提供语言培训与就业支持",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "provide" }, { word: "language" }, { word: "training" }, { word: "and" }, { word: "employment" }, { word: "support" }, { word: "for" }, { word: "newly" }, { word: "arrived" }, { word: "refugees", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "难民安置", text: "refugee resettlement office (难民安置办公室), language training (语言培训), employment support (就业支持), newly arrived refugees (新抵达难民)" }
      ]
    },
    {
      id: "q_gov_s137",
      chinese: "议会专门委员会就医疗改革草案举行了公开听证会，广泛听取各方意见",
      english_full: "The parliamentary committee held public hearings on the healthcare reform draft, extensively soliciting opinions from all stakeholders.",
      words: [
        { word: "The" }, { word: "parliamentary" }, { word: "committee" }, { word: "held" }, { word: "public" }, { word: "hearings" }, { word: "on" }, { word: "the" }, { word: "healthcare" }, { word: "reform" }, { word: "draft" }, { word: "extensively" }, { word: "soliciting" }, { word: "opinions" }, { word: "from" }, { word: "all" }, { word: "stakeholders", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌpɑːrləˈmɛntəri/ /kəˈmɪti/", translation: "议会专门委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "parliamentary" }, { word: "committee" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/hɛld/", translation: "举行了",
          subComponents: [{ startIndex: 0, words: [{ word: "held" }] }]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/ˈpʌblɪk/ /ˈhɪərɪŋz/ /ɒn/ /ðə/ /ˈhɛlθkɛr/ /rɪˈfɔːrm/ /dræft/", translation: "就医疗改革草案的公开听证会",
          subComponents: [{ startIndex: 0, words: [{ word: "public" }, { word: "hearings" }, { word: "on" }, { word: "the" }, { word: "healthcare" }, { word: "reform" }, { word: "draft" }] }]
        },
        {
          start: 11, end: 16, label: "状语", phonetic: "/ɪkˈstɛnsɪvli/ /səˈlɪsɪtɪŋ/ /əˈpɪnjənz/ /frɒm/ /ɔːl/ /ˈsteɪkˌhoʊldərz/", translation: "广泛听取各方意见",
          subComponents: [{ startIndex: 0, words: [{ word: "extensively" }, { word: "soliciting" }, { word: "opinions" }, { word: "from" }, { word: "all" }, { word: "stakeholders", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "议会监督", text: "parliamentary committee (议会委员会), public hearings (公开听证会), healthcare reform draft (医疗改革草案), stakeholders (利益相关方)" }
      ]
    },
    {
      id: "q_gov_s138",
      chinese: "财政部长在国会辩论中呼吁两党就提高债务上限问题达成共识",
      english_full: "The finance minister urged bipartisan consensus on raising the debt ceiling during congressional debate.",
      words: [
        { word: "The" }, { word: "finance" }, { word: "minister" }, { word: "urged" }, { word: "bipartisan" }, { word: "consensus" }, { word: "on" }, { word: "raising" }, { word: "the" }, { word: "debt" }, { word: "ceiling" }, { word: "during" }, { word: "congressional" }, { word: "debate", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /faɪˈnæns/ /ˈmɪnɪstər/", translation: "财政部长",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "finance" }, { word: "minister" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɜːrdʒd/", translation: "呼吁",
          subComponents: [{ startIndex: 0, words: [{ word: "urged" }] }]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/baɪˈpɑːrtɪzən/ /kənˈsɛnsəs/ /ɒn/ /ˈreɪzɪŋ/ /ðə/ /dɛt/ /ˈsiːlɪŋ/", translation: "两党就提高债务上限问题达成共识",
          subComponents: [{ startIndex: 0, words: [{ word: "bipartisan" }, { word: "consensus" }, { word: "on" }, { word: "raising" }, { word: "the" }, { word: "debt" }, { word: "ceiling" }] }]
        },
        {
          start: 11, end: 13, label: "状语", phonetic: "/ˈdjʊərɪŋ/ /kənˈɡrɛʃənəl/ /dɪˈbeɪt/", translation: "在国会辩论中",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "congressional" }, { word: "debate", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "财政辩论", text: "finance minister (财政部长), debt ceiling (债务上限), bipartisan consensus (两党共识), congressional debate (国会辩论)" }
      ]
    },
    {
      id: "q_gov_s139",
      chinese: "公民自由组织批评新 surveillance law 可能侵犯个人隐私权",
      english_full: "The civil liberties organization criticized the new surveillance law for potentially infringing on personal privacy rights.",
      words: [
        { word: "The" }, { word: "civil" }, { word: "liberties" }, { word: "organization" }, { word: "criticized" }, { word: "the" }, { word: "new" }, { word: "surveillance" }, { word: "law" }, { word: "for" }, { word: "potentially" }, { word: "infringing" }, { word: "on" }, { word: "personal" }, { word: "privacy" }, { word: "rights", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈsɪvəl/ /ˈlɪbərtiz/ /ˌɔːrɡənaɪˈzeɪʃən/", translation: "公民自由组织",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "civil" }, { word: "liberties" }, { word: "organization" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈkrɪtɪsaɪzd/", translation: "批评",
          subComponents: [{ startIndex: 0, words: [{ word: "criticized" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ðə/ /njuː/ /sərˈveɪləns/ /lɔː/", translation: "新 surveillance law",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "new" }, { word: "surveillance" }, { word: "law" }] }]
        },
        {
          start: 9, end: 15, label: "原因状语", phonetic: "/fɔːr/ /pəˈtɛnʃəli/ /ɪnˈfrɪndʒɪŋ/ /ɒn/ /ˈpɜːrsənəl/ /ˈprɪvəsi/ /raɪts/", translation: "可能侵犯个人隐私权",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "potentially" }, { word: "infringing" }, { word: "on" }, { word: "personal" }, { word: "privacy" }, { word: "rights", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公民权利", text: "civil liberties organization (公民自由组织), surveillance law (监视法), privacy rights (隐私权), infringing on (侵犯)" }
      ]
    },
    {
      id: "q_gov_s140",
      chinese: "市政府简化了 small business licensing 流程，将审批时间从数周缩短至数天",
      english_full: "The city government simplified the small business licensing process, reducing approval time from weeks to days.",
      words: [
        { word: "The" }, { word: "city" }, { word: "government" }, { word: "simplified" }, { word: "the" }, { word: "small" }, { word: "business" }, { word: "licensing" }, { word: "process" }, { word: "reducing" }, { word: "approval" }, { word: "time" }, { word: "from" }, { word: "weeks" }, { word: "to" }, { word: "days", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɪti/ /ˈɡʌvərnmənt/", translation: "市政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "city" }, { word: "government" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈsɪmplɪfaɪd/", translation: "简化了",
          subComponents: [{ startIndex: 0, words: [{ word: "simplified" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ðə/ /smɔːl/ /ˈbɪznəs/ /ˈlaɪsənsɪŋ/ /ˈprɒsɛs/", translation: "small business licensing 流程",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "small" }, { word: "business" }, { word: "licensing" }, { word: "process" }] }]
        },
        {
          start: 9, end: 15, label: "结果状语", phonetic: "/rɪˈdjuːsɪŋ/ /əˈpruːvəl/ /taɪm/ /frɒm/ /wiːks/ /tuː/ /deɪz/", translation: "将审批时间从数周缩短至数天",
          subComponents: [{ startIndex: 0, words: [{ word: "reducing" }, { word: "approval" }, { word: "time" }, { word: "from" }, { word: "weeks" }, { word: "to" }, { word: "days", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "营商环境", text: "small business licensing (小企业执照), approval time (审批时间), simplified (简化), city government (市政府)" }
      ]
    },
    {
      id: "q_gov_s141",
      chinese: "卫生部门宣布将扩大 public health insurance 覆盖范围，纳入更多 outpatient services",
      english_full: "The health department announced it would expand public health insurance coverage to include more outpatient services.",
      words: [
        { word: "The" }, { word: "health" }, { word: "department" }, { word: "announced" }, { word: "it" }, { word: "would" }, { word: "expand" }, { word: "public" }, { word: "health" }, { word: "insurance" }, { word: "coverage" }, { word: "to" }, { word: "include" }, { word: "more" }, { word: "outpatient" }, { word: "services", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /hɛlθ/ /dɪˈpɑːrtmənt/", translation: "卫生部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "health" }, { word: "department" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈnaʊnst/", translation: "宣布",
          subComponents: [{ startIndex: 0, words: [{ word: "announced" }] }]
        },
        {
          start: 4, end: 15, label: "宾语从句", phonetic: "/ɪt/ /wʊd/ /ɪkˈspænd/ /ˈpʌblɪk/ /hɛlθ/ /ɪnˈʃʊrəns/ /ˈkʌvərɪdʒ/ /tuː/ /ɪnˈkluːd/ /mɔːr/ /ˈaʊtpeɪʃənt/ /ˈsɜːrvɪsɪz/", translation: "将扩大 public health insurance 覆盖范围纳入更多 outpatient services",
          subComponents: [{ startIndex: 0, words: [{ word: "it" }, { word: "would" }, { word: "expand" }, { word: "public" }, { word: "health" }, { word: "insurance" }, { word: "coverage" }, { word: "to" }, { word: "include" }, { word: "more" }, { word: "outpatient" }, { word: "services", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗保障", text: "public health insurance (公共医保), outpatient services (门诊服务), coverage (覆盖范围), expand (扩大)" }
      ]
    },
    {
      id: "q_gov_s142",
      chinese: "行政法庭裁定该处罚决定缺乏充分证据，并责令机构重新作出裁决",
      english_full: "The administrative tribunal ruled the penalty decision lacked sufficient evidence and ordered the agency to issue a new ruling.",
      words: [
        { word: "The" }, { word: "administrative" }, { word: "tribunal" }, { word: "ruled" }, { word: "the" }, { word: "penalty" }, { word: "decision" }, { word: "lacked" }, { word: "sufficient" }, { word: "evidence" }, { word: "and" }, { word: "ordered" }, { word: "the" }, { word: "agency" }, { word: "to" }, { word: "issue" }, { word: "a" }, { word: "new" }, { word: "ruling", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ədˈmɪnɪstrətɪv/ /traɪˈbjuːnəl/", translation: "行政法庭",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "administrative" }, { word: "tribunal" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ruːld/", translation: "裁定",
          subComponents: [{ startIndex: 0, words: [{ word: "ruled" }] }]
        },
        {
          start: 4, end: 9, label: "宾语从句", phonetic: "/ðə/ /ˈpɛnəlti/ /dɪˈsɪʒən/ /lækt/ /səˈfɪʃənt/ /ˈɛvɪdəns/", translation: "该处罚决定缺乏充分证据",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "penalty" }, { word: "decision" }, { word: "lacked" }, { word: "sufficient" }, { word: "evidence" }] }]
        },
        {
          start: 11, end: 11, label: "并列谓语", phonetic: "/ˈɔːrdərd/", translation: "并责令",
          subComponents: [{ startIndex: 0, words: [{ word: "ordered" }] }]
        },
        {
          start: 12, end: 18, label: "宾语", phonetic: "/ðə/ /ˈeɪdʒənsi/ /tuː/ /ˈɪʃuː/ /ə/ /njuː/ /ˈruːlɪŋ/", translation: "机构重新作出裁决",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "agency" }, { word: "to" }, { word: "issue" }, { word: "a" }, { word: "new" }, { word: "ruling", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行政司法", text: "administrative tribunal (行政法庭), penalty decision (处罚决定), sufficient evidence (充分证据), issue a ruling (作出裁决)" }
      ]
    },
    {
      id: "q_gov_s143",
      chinese: "中央政府增加了对地方政府的 fiscal transfers，以缩小区域发展差距",
      english_full: "The central government increased fiscal transfers to local governments to narrow regional development gaps.",
      words: [
        { word: "The" }, { word: "central" }, { word: "government" }, { word: "increased" }, { word: "fiscal" }, { word: "transfers" }, { word: "to" }, { word: "local" }, { word: "governments" }, { word: "to" }, { word: "narrow" }, { word: "regional" }, { word: "development" }, { word: "gaps", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /ˈɡʌvərnmənt/", translation: "中央政府",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "central" }, { word: "government" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈkriːst/", translation: "增加了",
          subComponents: [{ startIndex: 0, words: [{ word: "increased" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ˈfɪskəl/ /trænsˈfɜːrz/ /tuː/ /ˈloʊkəl/ /ˈɡʌvərnmənts/", translation: "对地方政府的 fiscal transfers",
          subComponents: [{ startIndex: 0, words: [{ word: "fiscal" }, { word: "transfers" }, { word: "to" }, { word: "local" }, { word: "governments" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /ˈnærəʊ/ /ˈriːdʒənəl/ /dɪˈvɛləpmənt/ /ɡæps/", translation: "以缩小区域发展差距",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "narrow" }, { word: "regional" }, { word: "development" }, { word: "gaps", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "财政转移", text: "fiscal transfers (财政转移), local governments (地方政府), regional development gaps (区域发展差距), central government (中央政府)" }
      ]
    },
    {
      id: "q_gov_s144",
      chinese: "政策草案公示期间，政府收到了来自公众的两万多条书面反馈意见",
      english_full: "During the policy draft consultation period, the government received more than twenty thousand written feedback submissions from the public.",
      words: [
        { word: "During" }, { word: "the" }, { word: "policy" }, { word: "draft" }, { word: "consultation" }, { word: "period" }, { word: "the" }, { word: "government" }, { word: "received" }, { word: "more" }, { word: "than" }, { word: "twenty" }, { word: "thousand" }, { word: "written" }, { word: "feedback" }, { word: "submissions" }, { word: "from" }, { word: "the" }, { word: "public", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /ˈpɒləsi/ /dræft/ /ˌkɒnsəlˈteɪʃən/ /ˈpɪəriəd/", translation: "政策草案公示期间",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "the" }, { word: "policy" }, { word: "draft" }, { word: "consultation" }, { word: "period" }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ðə/ /ˈɡʌvərnmənt/", translation: "政府",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "government" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/rɪˈsiːvd/", translation: "收到了",
          subComponents: [{ startIndex: 0, words: [{ word: "received" }] }]
        },
        {
          start: 9, end: 18, label: "宾语", phonetic: "/mɔːr/ /ðæn/ /ˈtwɛnti/ /ˈθaʊzənd/ /ˈrɪtən/ /ˈfiːdbæk/ /səbˈmɪʃənz/ /frɒm/ /ðə/ /ˈpʌblɪk/", translation: "来自公众的两万多条书面反馈意见",
          subComponents: [{ startIndex: 0, words: [{ word: "more" }, { word: "than" }, { word: "twenty" }, { word: "thousand" }, { word: "written" }, { word: "feedback" }, { word: "submissions" }, { word: "from" }, { word: "the" }, { word: "public", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公众参与", text: "policy draft consultation (政策草案公示), written feedback (书面反馈), submissions (提交意见), public participation (公众参与)" }
      ]
    },
    {
      id: "q_gov_s145",
      chinese: "主权财富基金的管理委员会通过了新的治理章程，以强化投资决策的透明度",
      english_full: "The sovereign wealth fund board adopted a new governance charter to strengthen transparency in investment decisions.",
      words: [
        { word: "The" }, { word: "sovereign" }, { word: "wealth" }, { word: "fund" }, { word: "board" }, { word: "adopted" }, { word: "a" }, { word: "new" }, { word: "governance" }, { word: "charter" }, { word: "to" }, { word: "strengthen" }, { word: "transparency" }, { word: "in" }, { word: "investment" }, { word: "decisions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈsɒvrɪn/ /wɛlθ/ /fʌnd/ /bɔːrd/", translation: "主权财富基金的管理委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sovereign" }, { word: "wealth" }, { word: "fund" }, { word: "board" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/əˈdɒptɪd/", translation: "通过了",
          subComponents: [{ startIndex: 0, words: [{ word: "adopted" }] }]
        },
        {
          start: 6, end: 9, label: "宾语", phonetic: "/ə/ /njuː/ /ˈɡʌvərnəns/ /ˈtɑːrtʃər/", translation: "新的治理章程",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "new" }, { word: "governance" }, { word: "charter" }] }]
        },
        {
          start: 10, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈstrɛŋθən/ /trænsˈpærənsi/ /ɪn/ /ɪnˈvɛstmənt/ /decisions/", translation: "以强化投资决策的透明度",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "strengthen" }, { word: "transparency" }, { word: "in" }, { word: "investment" }, { word: "decisions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基金治理", text: "sovereign wealth fund (主权财富基金), governance charter (治理章程), investment decisions (投资决策), transparency (透明度)" }
      ]
    },
    {
      id: "q_gov_s146",
      chinese: "市政当局通过公开招标授予了 waste management contract，要求承包商达到严格的环保指标",
      english_full: "The municipality awarded the waste management contract through open bidding, requiring contractors to meet strict environmental standards.",
      words: [
        { word: "The" }, { word: "municipality" }, { word: "awarded" }, { word: "the" }, { word: "waste" }, { word: "management" }, { word: "contract" }, { word: "through" }, { word: "open" }, { word: "bidding" }, { word: "requiring" }, { word: "contractors" }, { word: "to" }, { word: "meet" }, { word: "strict" }, { word: "environmental" }, { word: "standards", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /mjuːˌnɪsɪˈpæləti/", translation: "市政当局",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "municipality" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈwɔːrdɪd/", translation: "授予了",
          subComponents: [{ startIndex: 0, words: [{ word: "awarded" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ðə/ /weɪst/ /ˈmænɪdʒmənt/ /contract/", translation: "waste management contract",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "waste" }, { word: "management" }, { word: "contract" }] }]
        },
        {
          start: 7, end: 9, label: "方式状语", phonetic: "/θruː/ /ˈoʊpən/ /ˈbɪdɪŋ/", translation: "通过公开招标",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "open" }, { word: "bidding" }] }]
        },
        {
          start: 10, end: 16, label: "伴随状语", phonetic: "/rɪˈkwaɪərɪŋ/ /kənˈtræktərz/ /tuː/ /miːt/ /strɪkt/ /ɪnˌvaɪrənˈmɛntl/ /ˈstændərdz/", translation: "要求承包商达到严格的环保指标",
          subComponents: [{ startIndex: 0, words: [{ word: "requiring" }, { word: "contractors" }, { word: "to" }, { word: "meet" }, { word: "strict" }, { word: "environmental" }, { word: "standards", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "市政合同", text: "waste management contract (垃圾管理合同), open bidding (公开招标), environmental standards (环保指标), contractors (承包商)" }
      ]
    },
    {
      id: "q_gov_s147",
      chinese: "公共部门工会与政府就薪资调整方案进行了多轮谈判，但尚未达成最终协议",
      english_full: "Public sector unions and the government held multiple rounds of negotiations on salary adjustment plans but have not yet reached a final agreement.",
      words: [
        { word: "Public" }, { word: "sector" }, { word: "unions" }, { word: "and" }, { word: "the" }, { word: "government" }, { word: "held" }, { word: "multiple" }, { word: "rounds" }, { word: "of" }, { word: "negotiations" }, { word: "on" }, { word: "salary" }, { word: "adjustment" }, { word: "plans" }, { word: "but" }, { word: "have" }, { word: "not" }, { word: "yet" }, { word: "reached" }, { word: "a" }, { word: "final" }, { word: "agreement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ˈpʌblɪk/ /ˈsɛktər/ /ˈjuːnjənz/ /ænd/ /ðə/ /ˈɡʌvərnmənt/", translation: "公共部门工会与政府",
          subComponents: [{ startIndex: 0, words: [{ word: "Public" }, { word: "sector" }, { word: "unions" }, { word: "and" }, { word: "the" }, { word: "government" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/hɛld/", translation: "进行了",
          subComponents: [{ startIndex: 0, words: [{ word: "held" }] }]
        },
        {
          start: 7, end: 14, label: "宾语", phonetic: "/ˈmʌltɪpl/ /raʊndz/ /ɒv/ /nɛˌɡoʊʃiˈeɪʃənz/ /ɒn/ /ˈsæləri/ /əˈdʒʌstmənt/ /plænz/", translation: "就薪资调整方案的多轮谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "multiple" }, { word: "rounds" }, { word: "of" }, { word: "negotiations" }, { word: "on" }, { word: "salary" }, { word: "adjustment" }, { word: "plans" }] }]
        },
        {
          start: 15, end: 22, label: "转折状语", phonetic: "/bʌt/ /hæv/ /nɒt/ /jɛt/ /riːtʃt/ /ə/ /ˈfaɪnl/ /əˈɡriːmənt/", translation: "但尚未达成最终协议",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }, { word: "have" }, { word: "not" }, { word: "yet" }, { word: "reached" }, { word: "a" }, { word: "final" }, { word: "agreement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "劳资谈判", text: "public sector unions (公共部门工会), salary adjustment (薪资调整), negotiations (谈判), final agreement (最终协议)" }
      ]
    },
    {
      id: "q_gov_s148",
      chinese: "国家安全委员会在紧急会议上评估了跨境安全威胁，并批准了相应的应对预案",
      english_full: "The national security council assessed cross-border security threats at an emergency meeting and approved corresponding response contingency plans.",
      words: [
        { word: "The" }, { word: "national" }, { word: "security" }, { word: "council" }, { word: "assessed" }, { word: "cross-border" }, { word: "security" }, { word: "threats" }, { word: "at" }, { word: "an" }, { word: "emergency" }, { word: "meeting" }, { word: "and" }, { word: "approved" }, { word: "corresponding" }, { word: "response" }, { word: "contingency" }, { word: "plans", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈnæʃənəl/ /sɪˈkjʊrɪti/ /ˈkaʊnsəl/", translation: "国家安全委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "national" }, { word: "security" }, { word: "council" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈsɛst/", translation: "评估了",
          subComponents: [{ startIndex: 0, words: [{ word: "assessed" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/krɒs-ˈbɔːrdər/ /sɪˈkjʊrɪti/ /θrɛts/", translation: "跨境安全威胁",
          subComponents: [{ startIndex: 0, words: [{ word: "cross-border" }, { word: "security" }, { word: "threats" }] }]
        },
        {
          start: 8, end: 11, label: "状语", phonetic: "/æt/ /æn/ /ɪˈmɜːrdʒənsi/ /ˈmiːtɪŋ/", translation: "在紧急会议上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "an" }, { word: "emergency" }, { word: "meeting" }] }]
        },
        {
          start: 13, end: 13, label: "并列谓语", phonetic: "/əˈpruːvd/", translation: "并批准了",
          subComponents: [{ startIndex: 0, words: [{ word: "approved" }] }]
        },
        {
          start: 14, end: 17, label: "宾语", phonetic: "/ˌkɒrɪˈspɒndɪŋ/ /rɪˈspɒns/ /kənˈtɪndʒənsi/ /plænz/", translation: "相应的应对预案",
          subComponents: [{ startIndex: 0, words: [{ word: "corresponding" }, { word: "response" }, { word: "contingency" }, { word: "plans", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "国家安全", text: "national security council (国家安全委员会), cross-border threats (跨境威胁), contingency plans (应对预案), emergency meeting (紧急会议)" }
      ]
    },
    {
      id: "q_gov_s149",
      chinese: "smart city initiative 强调 data governance，在提升城市服务的同时保护公民数字权利",
      english_full: "The smart city initiative emphasizes data governance, improving urban services while protecting citizens digital rights.",
      words: [
        { word: "The" }, { word: "smart" }, { word: "city" }, { word: "initiative" }, { word: "emphasizes" }, { word: "data" }, { word: "governance" }, { word: "improving" }, { word: "urban" }, { word: "services" }, { word: "while" }, { word: "protecting" }, { word: "citizens" }, { word: "digital" }, { word: "rights", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /smɑːrt/ /ˈsɪti/ /ɪˈnɪʃətɪv/", translation: "smart city initiative",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "smart" }, { word: "city" }, { word: "initiative" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɛmfəsaɪzɪz/", translation: "强调",
          subComponents: [{ startIndex: 0, words: [{ word: "emphasizes" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈdeɪtə/ /ˈɡʌvərnəns/", translation: "data governance",
          subComponents: [{ startIndex: 0, words: [{ word: "data" }, { word: "governance" }] }]
        },
        {
          start: 7, end: 14, label: "伴随状语", phonetic: "/ɪmˈpruːvɪŋ/ /ˈɜːrbən/ /ˈsɜːrvɪsɪz/ /waɪl/ /prəˈtɛktɪŋ/ /ˈsɪtɪzənz/ /ˈdɪdʒɪtl/ /raɪts/", translation: "在提升城市服务的同时保护公民数字权利",
          subComponents: [{ startIndex: 0, words: [{ word: "improving" }, { word: "urban" }, { word: "services" }, { word: "while" }, { word: "protecting" }, { word: "citizens" }, { word: "digital" }, { word: "rights", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "智慧城市", text: "smart city initiative (智慧城市计划), data governance (数据治理), digital rights (数字权利), urban services (城市服务)" }
      ]
    }
  ]
};
