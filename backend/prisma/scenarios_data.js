export const scenarioCurriculums = [
  {
    id: "env_01",
    title: "环保 (Environment)",
    description: "雅思/学术级表达：探讨环境污染、气候变化与可持续发展。",
    sentences: [
      {
        id: "env_s1",
        chinese: "不可降解塑料的激增对海洋生态系统构成了严重威胁",
        english_full: "The proliferation of non-biodegradable plastics poses a severe threat to marine ecosystems.",
        words: [
          { word: "The", punctuation: "" },
          { word: "proliferation", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "non-biodegradable", punctuation: "" },
          { word: "plastics", punctuation: "" },
          { word: "poses", punctuation: "" },
          { word: "a", punctuation: "" },
          { word: "severe", punctuation: "" },
          { word: "threat", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "marine", punctuation: "" },
          { word: "ecosystems", punctuation: "." }
        ],
        components: [
          { 
            start: 0, end: 4, label: "主语", phonetic: "/ðə/ /prəˌlɪfəˈreɪʃən/ /əv/ /nɒnˌbaɪoʊdɪˈɡreɪdəbəl/ /ˈplæstɪks/", translation: "不可降解塑料的激增",
            subComponents: [
              { start: 2, end: 4, label: "后置定语" }
            ]
          },
          { start: 5, end: 5, label: "谓语", phonetic: "/ˈpoʊzɪz/", translation: "构成" },
          { start: 6, end: 8, label: "宾语", phonetic: "/ə/ /sɪˈvɪər/ /θrɛt/", translation: "严重威胁" },
          { start: 9, end: 11, label: "状语", phonetic: "/tuː/ /məˈriːn/ /ˈiːkoʊˌsɪstəmz/", translation: "对海洋生态系统" }
        ],
        analysis: [
          { type: "固定搭配", text: "pose a threat to... (对...构成威胁)" },
          { type: "学术词汇", text: "proliferation (激增，扩散)；non-biodegradable (不可生物降解的)" }
        ]
      },
      {
        id: "env_s2",
        chinese: "可持续发展需要全球向可再生能源转型",
        english_full: "Sustainable development necessitates a global transition towards renewable energy sources.",
        words: [
          { word: "Sustainable", punctuation: "" },
          { word: "development", punctuation: "" },
          { word: "necessitates", punctuation: "" },
          { word: "a", punctuation: "" },
          { word: "global", punctuation: "" },
          { word: "transition", punctuation: "" },
          { word: "towards", punctuation: "" },
          { word: "renewable", punctuation: "" },
          { word: "energy", punctuation: "" },
          { word: "sources", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/səˈsteɪnəbəl/ /dɪˈvɛləpmənt/", translation: "可持续发展" },
          { start: 2, end: 2, label: "谓语", phonetic: "/nəˈsɛsɪˌteɪts/", translation: "需要，使成为必须" },
          { 
            start: 3, end: 9, label: "宾语", phonetic: "/ə/ /ˈɡloʊbəl/ /trænˈzɪʃən/ /təˈwɔːrdz/ /rɪˈnuːəbəl/ /ˈɛnərdʒi/ /ˈsɔːrsɪz/", translation: "全球向可再生能源的转型",
            subComponents: [
              { start: 6, end: 9, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "高级表达", text: "necessitate 用作及物动词，比 require/need 更具学术正式感。" },
          { type: "固定搭配", text: "transition towards... (向...过渡/转型)" }
        ]
      },
      {
        id: "env_s3",
        chinese: "严格的环境法规对于减轻气候变化的影响是不可或缺的",
        english_full: "Stringent environmental regulations are indispensable for mitigating the impacts of climate change.",
        words: [
          { word: "Stringent", punctuation: "" },
          { word: "environmental", punctuation: "" },
          { word: "regulations", punctuation: "" },
          { word: "are", punctuation: "" },
          { word: "indispensable", punctuation: "" },
          { word: "for", punctuation: "" },
          { word: "mitigating", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "impacts", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "climate", punctuation: "" },
          { word: "change", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ˈstrɪndʒənt/ /ɪnˌvaɪrənˈmɛntəl/ /ˌrɛɡjəˈleɪʃənz/", translation: "严格的环境法规" },
          { start: 3, end: 3, label: "系动词", phonetic: "/ɑːr/", translation: "是" },
          { start: 4, end: 4, label: "表语", phonetic: "/ˌɪndɪˈspɛnsəbəl/", translation: "不可或缺的" },
          { start: 5, end: 11, label: "状语", phonetic: "/fɔːr/ /ˈmɪtɪˌɡeɪtɪŋ/ /ðə/ /ˈɪmpækts/ /əv/ /ˈklaɪmət/ /tʃeɪndʒ/", translation: "对于减轻气候变化的影响" }
        ],
        analysis: [
          { type: "同义替换", text: "stringent = strict (严格的); indispensable = essential (不可缺少的); mitigate = alleviate/reduce (减轻，缓解)" },
          { type: "句型解析", text: "主系表结构 + 介词短语作目的状语。" }
        ]
      },
      {
        id: "env_s4",
        chinese: "大量森林砍伐加速了生物多样性的丧失",
        english_full: "Extensive deforestation accelerates the loss of biodiversity.",
        words: [
          { word: "Extensive", punctuation: "" },
          { word: "deforestation", punctuation: "" },
          { word: "accelerates", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "loss", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "biodiversity", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ɪkˈstɛnsɪv/ /diːˌfɔːrɪˈsteɪʃən/", translation: "大量森林砍伐" },
          { start: 2, end: 2, label: "谓语", phonetic: "/əkˈsɛləˌreɪts/", translation: "加速" },
          { 
            start: 3, end: 6, label: "宾语", phonetic: "/ðə/ /lɔs/ /əv/ /ˌbaɪoʊdaɪˈvɜːrsəti/", translation: "生物多样性的丧失",
            subComponents: [
              { start: 5, end: 6, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "词汇积累", text: "deforestation (森林砍伐); biodiversity (生物多样性)" },
          { type: "同义替换", text: "accelerate 可以用来替换 speed up 或 make something happen faster" }
        ]
      },
      {
        id: "env_s5",
        chinese: "政府必须实施旨在遏制温室气体排放的政策",
        english_full: "Governments must implement policies aimed at curbing greenhouse gas emissions.",
        words: [
          { word: "Governments", punctuation: "" },
          { word: "must", punctuation: "" },
          { word: "implement", punctuation: "" },
          { word: "policies", punctuation: "" },
          { word: "aimed", punctuation: "" },
          { word: "at", punctuation: "" },
          { word: "curbing", punctuation: "" },
          { word: "greenhouse", punctuation: "" },
          { word: "gas", punctuation: "" },
          { word: "emissions", punctuation: "." }
        ],
        components: [
          { start: 0, end: 0, label: "主语", phonetic: "/ˈɡʌvərnmənts/", translation: "政府" },
          { start: 1, end: 1, label: "助动词", phonetic: "/mʌst/", translation: "必须" },
          { start: 2, end: 2, label: "谓语(实义)", phonetic: "/ˈɪmpləmɛnt/", translation: "实施" },
          { 
            start: 3, end: 9, label: "宾语", phonetic: "/ˈpɒləsiz/ /eɪmd/ /æt/ /ˈkɜːrbɪŋ/ /ˈɡriːnˌhaʊs/ /ɡæs/ /ɪˈmɪʃənz/", translation: "旨在遏制温室气体排放的政策",
            subComponents: [
              { start: 4, end: 9, label: "后置定语(过去分词)" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "implement policies (实施政策); greenhouse gas emissions (温室气体排放)" },
          { type: "语法", text: "aimed at curbing... 是过去分词短语作后置定语，修饰 policies。aim at 后接动名词 (curbing)。" },
          { type: "高级词汇", text: "curb 意为“控制、遏制”，是 control/limit 的高级替换词。" }
        ]
      }
    ]
  },
  {
    id: "airport_01",
    title: "机场与航空 (Airport)",
    description: "雅思/商务级表达：涵盖安检、航班延误与航站楼设施。",
    sentences: [
      {
        id: "airport_s1",
        chinese: "由于无法预料的气象条件，几个国际航班已被无限期延误",
        english_full: "Due to unforeseen meteorological conditions, several international flights have been indefinitely delayed.",
        words: [
          { word: "Due", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "unforeseen", punctuation: "" },
          { word: "meteorological", punctuation: "" },
          { word: "conditions", punctuation: "," },
          { word: "several", punctuation: "" },
          { word: "international", punctuation: "" },
          { word: "flights", punctuation: "" },
          { word: "have", punctuation: "" },
          { word: "been", punctuation: "" },
          { word: "indefinitely", punctuation: "" },
          { word: "delayed", punctuation: "." }
        ],
        components: [
          { start: 0, end: 4, label: "原因状语", phonetic: "/duː/ /tuː/ /ˌʌnfɔːrˈsiːn/ /ˌmiːtiərəˈlɒdʒɪkəl/ /kənˈdɪʃənz/", translation: "由于无法预料的气象条件" },
          { start: 5, end: 7, label: "主语", phonetic: "/ˈsɛvrəl/ /ˌɪntərˈnæʃənəl/ /flaɪts/", translation: "几个国际航班" },
          { start: 8, end: 9, label: "助动词", phonetic: "/hæv/ /bɪn/", translation: "已被" },
          { start: 10, end: 10, label: "状语", phonetic: "/ɪnˈdɛfɪnɪtli/", translation: "无限期地" },
          { start: 11, end: 11, label: "谓语", phonetic: "/dɪˈleɪd/", translation: "延误" }
        ],
        analysis: [
          { type: "时态", text: "现在完成时的被动语态 (have been delayed)。" },
          { type: "高端词汇", text: "unforeseen (未预见到的); meteorological (气象的，比 weather 更正式); indefinitely (无限期地)。" }
        ]
      },
      {
        id: "airport_s2",
        chinese: "新建的航站楼配备了最先进的自动值机终端，以提高效率",
        english_full: "The newly constructed terminal features state-of-the-art automated check-in kiosks for enhanced efficiency.",
        words: [
          { word: "The", punctuation: "" },
          { word: "newly", punctuation: "" },
          { word: "constructed", punctuation: "" },
          { word: "terminal", punctuation: "" },
          { word: "features", punctuation: "" },
          { word: "state-of-the-art", punctuation: "" },
          { word: "automated", punctuation: "" },
          { word: "check-in", punctuation: "" },
          { word: "kiosks", punctuation: "" },
          { word: "for", punctuation: "" },
          { word: "enhanced", punctuation: "" },
          { word: "efficiency", punctuation: "." }
        ],
        components: [
          { start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈnjuːli/ /kənˈstrʌktɪd/ /ˈtɜːrmɪnəl/", translation: "新建的航站楼" },
          { start: 4, end: 4, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "以...为特色；配备" },
          { start: 5, end: 8, label: "宾语", phonetic: "/steɪt ʌv ði ɑːrt/ /ˈɔːtəˌmeɪtɪd/ /ˈtʃɛkˌɪn/ /ˈkiːɒsks/", translation: "最先进的自动值机终端" },
          { start: 9, end: 11, label: "目的状语", phonetic: "/fɔːr/ /ɪnˈhænst/ /ɪˈfɪʃənsi/", translation: "以提高(增强的)效率" }
        ],
        analysis: [
          { type: "合成词", text: "state-of-the-art (最先进的，最高水准的)。" },
          { type: "动词妙用", text: "feature 这里作动词，是非常地道且常用于描述建筑、产品特性的词。" }
        ]
      },
      {
        id: "airport_s3",
        chinese: "所有乘客登机前都必须接受严格的安全检查",
        english_full: "All passengers must undergo rigorous security screening prior to boarding.",
        words: [
          { word: "All", punctuation: "" },
          { word: "passengers", punctuation: "" },
          { word: "must", punctuation: "" },
          { word: "undergo", punctuation: "" },
          { word: "rigorous", punctuation: "" },
          { word: "security", punctuation: "" },
          { word: "screening", punctuation: "" },
          { word: "prior", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "boarding", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ɔːl/ /ˈpæsɪndʒərz/", translation: "所有乘客" },
          { start: 2, end: 2, label: "助动词", phonetic: "/mʌst/", translation: "必须" },
          { start: 3, end: 3, label: "谓语", phonetic: "/ˌʌndərˈɡoʊ/", translation: "经历，接受" },
          { start: 4, end: 6, label: "宾语", phonetic: "/ˈrɪɡərəs/ /sɪˈkjʊərəti/ /ˈskriːnɪŋ/", translation: "严格的安全检查" },
          { start: 7, end: 9, label: "时间状语", phonetic: "/ˈpraɪər/ /tuː/ /ˈbɔːrdɪŋ/", translation: "在登机之前" }
        ],
        analysis: [
          { type: "固定搭配", text: "undergo screening (接受检查); prior to (在...之前，比 before 更正式)。" },
          { type: "同义替换", text: "rigorous = strict (严格的，严密的)。" }
        ]
      },
      {
        id: "airport_s4",
        chinese: "超出允许重量限制的行李将收取额外费用",
        english_full: "Baggage exceeding the permitted weight limit will incur additional charges.",
        words: [
          { word: "Baggage", punctuation: "" },
          { word: "exceeding", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "permitted", punctuation: "" },
          { word: "weight", punctuation: "" },
          { word: "limit", punctuation: "" },
          { word: "will", punctuation: "" },
          { word: "incur", punctuation: "" },
          { word: "additional", punctuation: "" },
          { word: "charges", punctuation: "." }
        ],
        components: [
          { 
            start: 0, end: 5, label: "主语", phonetic: "/ˈbæɡɪdʒ/ /ɪkˈsiːdɪŋ/ /ðə/ /pərˈmɪtɪd/ /weɪt/ /ˈlɪmɪt/", translation: "超出允许重量限制的行李",
            subComponents: [
              { start: 1, end: 5, label: "后置定语(现在分词)" }
            ]
          },
          { start: 6, end: 6, label: "助动词", phonetic: "/wɪl/", translation: "将" },
          { start: 7, end: 7, label: "谓语", phonetic: "/ɪnˈkɜːr/", translation: "招致，引起" },
          { start: 8, end: 9, label: "宾语", phonetic: "/əˈdɪʃənəl/ /ˈtʃɑːrdʒɪz/", translation: "额外费用" }
        ],
        analysis: [
          { type: "语法", text: "exceeding the permitted weight limit 是现在分词短语作后置定语，修饰 Baggage。" },
          { type: "高级表达", text: "incur charges (产生费用)，incur 常与 cost/expense/charge 连用。" }
        ]
      },
      {
        id: "airport_s5",
        chinese: "在紧急情况下，请遵循机组人员的指示",
        english_full: "In the event of an emergency, please follow the instructions of the flight crew.",
        words: [
          { word: "In", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "event", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "an", punctuation: "" },
          { word: "emergency", punctuation: "," },
          { word: "please", punctuation: "" },
          { word: "follow", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "instructions", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "flight", punctuation: "" },
          { word: "crew", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "条件状语", phonetic: "/ɪn/ /ði/ /ɪˈvɛnt/ /əv/ /æn/ /ɪˈmɜːrdʒənsi/", translation: "在紧急情况下" },
          { start: 6, end: 6, label: "副词", phonetic: "/pliːz/", translation: "请" },
          { start: 7, end: 7, label: "谓语", phonetic: "/ˈfɒloʊ/", translation: "遵循" },
          { 
            start: 8, end: 13, label: "宾语", phonetic: "/ðə/ /ɪnˈstrʌkʃənz/ /əv/ /ðə/ /flaɪt/ /kruː/", translation: "机组人员的指示",
            subComponents: [
              { start: 10, end: 13, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "固定句型", text: "In the event of... (= in case of...，如果发生...情况，比 if 更正式)。" },
          { type: "词汇表达", text: "flight crew (机组人员); instructions (指示)。这是一个祈使句，省略了主语 you。" }
        ]
      }
    ]
  },
  {
    id: "hotel_01",
    title: "酒店与住宿 (Hotel)",
    description: "雅思/商务级表达：涉及预订、客户服务与设施评价。",
    sentences: [
      {
        id: "hotel_s1",
        chinese: "所有客房均配备了免费的高速无线网络以满足商务旅客的需求",
        english_full: "All guest rooms are equipped with complimentary high-speed Wi-Fi to accommodate business travelers.",
        words: [
          { word: "All", punctuation: "" },
          { word: "guest", punctuation: "" },
          { word: "rooms", punctuation: "" },
          { word: "are", punctuation: "" },
          { word: "equipped", punctuation: "" },
          { word: "with", punctuation: "" },
          { word: "complimentary", punctuation: "" },
          { word: "high-speed", punctuation: "" },
          { word: "Wi-Fi", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "accommodate", punctuation: "" },
          { word: "business", punctuation: "" },
          { word: "travelers", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ɔːl/ /ɡɛst/ /ruːmz/", translation: "所有客房" },
          { start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /ɪˈkwɪpt/", translation: "配备了" },
          { start: 5, end: 8, label: "伴随状语", phonetic: "/wɪð/ /ˌkɒmplɪˈmɛntəri/ /haɪ spiːd/ /ˈwaɪˌfaɪ/", translation: "免费的高速无线网络" },
          { start: 9, end: 12, label: "目的状语", phonetic: "/tuː/ /əˈkɒməˌdeɪt/ /ˈbɪznɪs/ /ˈtrævələrz/", translation: "以满足商务旅客的需求" }
        ],
        analysis: [
          { type: "固定搭配", text: "be equipped with... (配备...); complimentary (= free of charge，免费的，酒店航空常用)。" },
          { type: "高级表达", text: "accommodate 这里指“迎合、满足...的需求”，比 meet the needs of 更精炼。" }
        ]
      },
      {
        id: "hotel_s2",
        chinese: "酒店管理层对此给您带来的不便深表歉意",
        english_full: "The hotel management sincerely apologizes for any inconvenience this may have caused you.",
        words: [
          { word: "The", punctuation: "" },
          { word: "hotel", punctuation: "" },
          { word: "management", punctuation: "" },
          { word: "sincerely", punctuation: "" },
          { word: "apologizes", punctuation: "" },
          { word: "for", punctuation: "" },
          { word: "any", punctuation: "" },
          { word: "inconvenience", punctuation: "" },
          { word: "this", punctuation: "" },
          { word: "may", punctuation: "" },
          { word: "have", punctuation: "" },
          { word: "caused", punctuation: "" },
          { word: "you", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/ /ˈmænɪdʒmənt/", translation: "酒店管理层" },
          { start: 3, end: 3, label: "状语", phonetic: "/sɪnˈsɪərli/", translation: "真诚地" },
          { start: 4, end: 4, label: "谓语", phonetic: "/əˈpɒləˌdʒaɪzɪz/", translation: "道歉" },
          { 
            start: 5, end: 12, label: "原因状语", phonetic: "/fɔːr/ /ˈɛni/ /ˌɪnkənˈviːniəns/ /ðɪs/ /meɪ/ /hæv/ /kɔːzd/ /juː/", translation: "由于这可能给您带来的任何不便",
            subComponents: [
              { start: 8, end: 12, label: "定语从句" }
            ]
          }
        ],
        analysis: [
          { type: "客服句型", text: "apologize for any inconvenience (为带来的不便道歉) 是非常标准的服务业术语。" },
          { type: "语法", text: "this may have caused you 是省略了 that/which 的定语从句，修饰 inconvenience。" }
        ]
      },
      {
        id: "hotel_s3",
        chinese: "提前退房需要支付等同一晚住宿费的罚金",
        english_full: "Early departure will result in a penalty equivalent to one night's room rate.",
        words: [
          { word: "Early", punctuation: "" },
          { word: "departure", punctuation: "" },
          { word: "will", punctuation: "" },
          { word: "result", punctuation: "" },
          { word: "in", punctuation: "" },
          { word: "a", punctuation: "" },
          { word: "penalty", punctuation: "" },
          { word: "equivalent", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "one", punctuation: "" },
          { word: "night's", punctuation: "" },
          { word: "room", punctuation: "" },
          { word: "rate", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ˈɜːrli/ /dɪˈpɑːrtʃər/", translation: "提前退房(离开)" },
          { start: 2, end: 2, label: "助动词", phonetic: "/wɪl/", translation: "将" },
          { start: 3, end: 3, label: "谓语", phonetic: "/rɪˈzʌlt/", translation: "导致" },
          { start: 4, end: 4, label: "介词", phonetic: "/ɪn/", translation: "在" },
          { 
            start: 5, end: 12, label: "宾语", phonetic: "/ə/ /ˈpɛnəlti/ /ɪˈkwɪvələnt/ /tuː/ /wʌn/ /naɪts/ /ruːm/ /reɪt/", translation: "等同一晚房价的罚金",
            subComponents: [
              { start: 7, end: 12, label: "后置定语(形容词短语)" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "result in... (导致...)；equivalent to... (等同于...)" },
          { type: "专业术语", text: "Early departure (提前退房，比 leaving early 专业); room rate (房价)。" }
        ]
      },
      {
        id: "hotel_s4",
        chinese: "如果您需要额外的便利设施，请随时联系前台",
        english_full: "Should you require any additional amenities, please do not hesitate to contact the reception desk.",
        words: [
          { word: "Should", punctuation: "" },
          { word: "you", punctuation: "" },
          { word: "require", punctuation: "" },
          { word: "any", punctuation: "" },
          { word: "additional", punctuation: "" },
          { word: "amenities", punctuation: "," },
          { word: "please", punctuation: "" },
          { word: "do", punctuation: "" },
          { word: "not", punctuation: "" },
          { word: "hesitate", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "contact", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "reception", punctuation: "" },
          { word: "desk", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "条件状语从句", phonetic: "/ʃʊd/ /juː/ /rɪˈkwaɪər/ /ˈɛni/ /əˈdɪʃənəl/ /əˈmɛnɪtiz/", translation: "如果您需要额外的便利设施" },
          { start: 6, end: 9, label: "谓语", phonetic: "/pliːz/ /duː/ /nɒt/ /ˈhɛzɪˌteɪt/", translation: "请不要犹豫" },
          { start: 10, end: 14, label: "宾语", phonetic: "/tuː/ /ˈkɒntækt/ /ðə/ /rɪˈsɛpʃən/ /dɛsk/", translation: "联系前台" }
        ],
        analysis: [
          { type: "倒装虚拟语气", text: "Should you require... 是 If you should require... 的倒装形式，用于正式的商务或服务信函。" },
          { type: "固定句型", text: "do not hesitate to do sth (请随时做某事，不要犹豫)。amenities 指(酒店等提供的)便利设施。" }
        ]
      },
      {
        id: "hotel_s5",
        chinese: "我们将竭尽全力确保您住得舒适愉快",
        english_full: "We will make every effort to ensure that your stay is comfortable and enjoyable.",
        words: [
          { word: "We", punctuation: "" },
          { word: "will", punctuation: "" },
          { word: "make", punctuation: "" },
          { word: "every", punctuation: "" },
          { word: "effort", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "ensure", punctuation: "" },
          { word: "that", punctuation: "" },
          { word: "your", punctuation: "" },
          { word: "stay", punctuation: "" },
          { word: "is", punctuation: "" },
          { word: "comfortable", punctuation: "" },
          { word: "and", punctuation: "" },
          { word: "enjoyable", punctuation: "." }
        ],
        components: [
          { start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们" },
          { start: 1, end: 1, label: "助动词", phonetic: "/wɪl/", translation: "将" },
          { start: 2, end: 2, label: "谓语", phonetic: "/meɪk/", translation: "做" },
          { start: 3, end: 4, label: "宾语", phonetic: "/ˈɛvri/ /ˈɛfərt/", translation: "一切努力" },
          { 
            start: 5, end: 13, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ðæt/ /jʊər/ /steɪ/ /ɪz/ /ˈkʌmfərtəbəl/ /ænd/ /ɪnˈdʒɔɪəbəl/", translation: "以确保您的住宿舒适愉快",
            subComponents: [
              { start: 7, end: 13, label: "宾语从句" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "make every effort to do sth (尽一切努力做某事)，非常真诚和官方的服务表达。" },
          { type: "词性活用", text: "stay 在这里作名词，表示“逗留期间，住宿”。" }
        ]
      }
    ]
  },
  {
    id: "hospital_01",
    title: "医疗与健康 (Healthcare)",
    description: "雅思/学术级表达：关于疾病治疗、公共卫生与医疗系统。",
    sentences: [
      {
        id: "hosp_s1",
        chinese: "预防性医疗保健可以显著降低慢性疾病的发生率",
        english_full: "Preventive healthcare can significantly reduce the incidence of chronic diseases.",
        words: [
          { word: "Preventive", punctuation: "" },
          { word: "healthcare", punctuation: "" },
          { word: "can", punctuation: "" },
          { word: "significantly", punctuation: "" },
          { word: "reduce", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "incidence", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "chronic", punctuation: "" },
          { word: "diseases", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/prɪˈvɛntɪv/ /ˈhɛlθˌkɛər/", translation: "预防性医疗保健" },
          { start: 2, end: 2, label: "助动词", phonetic: "/kæn/", translation: "可以" },
          { start: 3, end: 3, label: "状语", phonetic: "/sɪɡˈnɪfɪkəntli/", translation: "显著地" },
          { start: 4, end: 4, label: "谓语", phonetic: "/rɪˈduːs/", translation: "降低" },
          { 
            start: 5, end: 9, label: "宾语", phonetic: "/ðə/ /ˈɪnsɪdəns/ /əv/ /ˈkrɒnɪk/ /dɪˈziːzɪz/", translation: "慢性疾病的发生率",
            subComponents: [
              { start: 7, end: 9, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "学术词汇", text: "preventive healthcare (预防性保健); incidence (发生率); chronic diseases (慢性病)。" },
          { type: "同义替换", text: "significantly = remarkably/considerably (显著地)。" }
        ]
      },
      {
        id: "hosp_s2",
        chinese: "患者必须严格遵守医生开具的处方方案",
        english_full: "Patients are required to strictly adhere to the medication regimen prescribed by their doctors.",
        words: [
          { word: "Patients", punctuation: "" },
          { word: "are", punctuation: "" },
          { word: "required", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "strictly", punctuation: "" },
          { word: "adhere", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "medication", punctuation: "" },
          { word: "regimen", punctuation: "" },
          { word: "prescribed", punctuation: "" },
          { word: "by", punctuation: "" },
          { word: "their", punctuation: "" },
          { word: "doctors", punctuation: "." }
        ],
        components: [
          { start: 0, end: 0, label: "主语", phonetic: "/ˈpeɪʃənts/", translation: "患者" },
          { start: 1, end: 2, label: "谓语(被动)", phonetic: "/ɑːr/ /rɪˈkwaɪərd/", translation: "被要求" },
          { 
            start: 3, end: 13, label: "宾语(不定式短语)", phonetic: "/tuː/ /ˈstrɪktli/ /ədˈhɪər/ /tuː/ /ðə/ /ˌmɛdɪˈkeɪʃən/ /ˈrɛdʒɪmən/ /prɪˈskraɪbd/ /baɪ/ /ðɛər/ /ˈdɒktərz/", translation: "严格遵守其医生开具的用药方案",
            subComponents: [
              { start: 10, end: 13, label: "后置定语(过去分词)" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "adhere to... (坚持，遵守); medication regimen (用药方案，疗程)。" },
          { type: "语法结构", text: "be required to do sth (被要求做某事)。prescribed by... 过去分词短语作后置定语。" }
        ]
      },
      {
        id: "hosp_s3",
        chinese: "经常进行体育锻炼被认为是对抗肥胖最有效的干预措施",
        english_full: "Regular physical activity is deemed the most effective intervention against obesity.",
        words: [
          { word: "Regular", punctuation: "" },
          { word: "physical", punctuation: "" },
          { word: "activity", punctuation: "" },
          { word: "is", punctuation: "" },
          { word: "deemed", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "most", punctuation: "" },
          { word: "effective", punctuation: "" },
          { word: "intervention", punctuation: "" },
          { word: "against", punctuation: "" },
          { word: "obesity", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ˈrɛɡjələr/ /ˈfɪzɪkəl/ /ækˈtɪvəti/", translation: "经常的体育锻炼" },
          { start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɪz/ /diːmd/", translation: "被认为是" },
          { 
            start: 5, end: 10, label: "主语补足语", phonetic: "/ðə/ /moʊst/ /ɪˈfɛktɪv/ /ˌɪntərˈvɛnʃən/ /əˈɡɛnst/ /oʊˈbiːsəti/", translation: "对抗肥胖最有效的干预措施",
            subComponents: [
              { start: 9, end: 10, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "高级表达", text: "be deemed (被认为/视作) 是 be considered/regarded as 的高级替换。" },
          { type: "学术词汇", text: "intervention (干预，常用于医疗/政策领域); obesity (肥胖)。" }
        ]
      },
      {
        id: "hosp_s4",
        chinese: "该疫苗通过刺激免疫系统产生抗体来发挥作用",
        english_full: "The vaccine functions by stimulating the immune system to produce antibodies.",
        words: [
          { word: "The", punctuation: "" },
          { word: "vaccine", punctuation: "" },
          { word: "functions", punctuation: "" },
          { word: "by", punctuation: "" },
          { word: "stimulating", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "immune", punctuation: "" },
          { word: "system", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "produce", punctuation: "" },
          { word: "antibodies", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /vækˈsiːn/", translation: "该疫苗" },
          { start: 2, end: 2, label: "谓语", phonetic: "/ˈfʌŋkʃənz/", translation: "发挥作用/运作" },
          { 
            start: 3, end: 10, label: "方式状语", phonetic: "/baɪ/ /ˈstɪmjəˌleɪtɪŋ/ /ði/ /ɪˈmjuːn/ /ˈsɪstəm/ /tuː/ /prəˈduːs/ /ˈæntɪˌbɒdiz/", translation: "通过刺激免疫系统产生抗体",
            subComponents: [
              { start: 8, end: 10, label: "宾语补足语" }
            ]
          }
        ],
        analysis: [
          { type: "医疗术语", text: "vaccine (疫苗); immune system (免疫系统); antibodies (抗体)。" },
          { type: "语法结构", text: "by doing sth (通过做某事); stimulate sb/sth to do sth (刺激某人/物做某事)。" }
        ]
      },
      {
        id: "hosp_s5",
        chinese: "未经适当诊断，抗生素的滥用可能会导致耐药细菌的产生",
        english_full: "The misuse of antibiotics without proper diagnosis can lead to the emergence of resistant bacteria.",
        words: [
          { word: "The", punctuation: "" },
          { word: "misuse", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "antibiotics", punctuation: "" },
          { word: "without", punctuation: "" },
          { word: "proper", punctuation: "" },
          { word: "diagnosis", punctuation: "" },
          { word: "can", punctuation: "" },
          { word: "lead", punctuation: "" },
          { word: "to", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "emergence", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "resistant", punctuation: "" },
          { word: "bacteria", punctuation: "." }
        ],
        components: [
          { 
            start: 0, end: 3, label: "主语", phonetic: "/ðə/ /mɪsˈjuːs/ /əv/ /ˌæntibaɪˈɒtɪks/", translation: "抗生素的滥用",
            subComponents: [
              { start: 2, end: 3, label: "后置定语" }
            ]
          },
          { start: 4, end: 6, label: "条件状语", phonetic: "/wɪˈðaʊt/ /ˈprɒpər/ /ˌdaɪəɡˈnoʊsɪs/", translation: "没有适当的诊断" },
          { start: 7, end: 7, label: "助动词", phonetic: "/kæn/", translation: "可能" },
          { start: 8, end: 8, label: "谓语", phonetic: "/liːd/", translation: "导致" },
          { start: 9, end: 9, label: "介词", phonetic: "/tuː/", translation: "至" },
          { 
            start: 10, end: 14, label: "宾语", phonetic: "/ði/ /ɪˈmɜːrdʒəns/ /əv/ /rɪˈzɪstənt/ /bækˈtɪəriə/", translation: "耐药细菌的产生",
            subComponents: [
              { start: 12, end: 14, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "医学表达", text: "misuse of antibiotics (滥用抗生素); resistant bacteria (耐药细菌)。" },
          { type: "固定搭配", text: "lead to... (导致...); emergence of... (...的出现/产生)。" }
        ]
      }
    ]
  },
  {
    id: "school_01",
    title: "教育与学术 (Education)",
    description: "雅思/学术级表达：关于教学方法、学术研究与学生发展。",
    sentences: [
      {
        id: "school_s1",
        chinese: "培养批判性思维能力应该成为现代教育的核心目标",
        english_full: "Cultivating critical thinking skills should be the primary objective of modern education.",
        words: [
          { word: "Cultivating", punctuation: "" },
          { word: "critical", punctuation: "" },
          { word: "thinking", punctuation: "" },
          { word: "skills", punctuation: "" },
          { word: "should", punctuation: "" },
          { word: "be", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "primary", punctuation: "" },
          { word: "objective", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "modern", punctuation: "" },
          { word: "education", punctuation: "." }
        ],
        components: [
          { start: 0, end: 3, label: "主语(动名词)", phonetic: "/ˈkʌltɪˌveɪtɪŋ/ /ˈkrɪtɪkəl/ /ˈθɪŋkɪŋ/ /skɪlz/", translation: "培养批判性思维能力" },
          { start: 4, end: 4, label: "助动词", phonetic: "/ʃʊd/", translation: "应该" },
          { start: 5, end: 5, label: "系动词", phonetic: "/biː/", translation: "是" },
          { 
            start: 6, end: 11, label: "表语", phonetic: "/ðə/ /ˈpraɪˌmɛri/ /əbˈdʒɛktɪv/ /əv/ /ˈmɒdərn/ /ˌɛdʒʊˈkeɪʃən/", translation: "现代教育的首要目标",
            subComponents: [
              { start: 9, end: 11, label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "句型解析", text: "动名词短语 Cultivating critical thinking skills 作主语，表示一种抽象的概念或行为。" },
          { type: "同义替换", text: "cultivate = foster/develop (培养); primary objective = main goal (核心/首要目标)。" }
        ]
      },
      {
        id: "school_s2",
        chinese: "过度依赖标准化测试可能会扼杀学生的创造力",
        english_full: "An overreliance on standardized testing can potentially stifle students' creativity.",
        words: [
          { word: "An", punctuation: "" },
          { word: "overreliance", punctuation: "" },
          { word: "on", punctuation: "" },
          { word: "standardized", punctuation: "" },
          { word: "testing", punctuation: "" },
          { word: "can", punctuation: "" },
          { word: "potentially", punctuation: "" },
          { word: "stifle", punctuation: "" },
          { word: "students'", punctuation: "" },
          { word: "creativity", punctuation: "." }
        ],
        components: [
          { 
            start: 0, end: 4, label: "主语", phonetic: "/æn/ /ˌoʊvər rɪˈlaɪəns/ /ɒn/ /ˈstændərˌdaɪzd/ /ˈtɛstɪŋ/", translation: "对标准化测试的过度依赖",
            subComponents: [
              { start: 2, end: 4, label: "后置定语" }
            ]
          },
          { start: 5, end: 5, label: "助动词", phonetic: "/kæn/", translation: "可以/可能" },
          { start: 6, end: 6, label: "状语", phonetic: "/pəˈtɛnʃəli/", translation: "潜在地" },
          { start: 7, end: 7, label: "谓语", phonetic: "/ˈstaɪfəl/", translation: "扼杀，压制" },
          { start: 8, end: 9, label: "宾语", phonetic: "/ˈstuːdənts/ /ˌkriːeɪˈtɪvɪti/", translation: "学生的创造力" }
        ],
        analysis: [
          { type: "高级词汇", text: "overreliance (过度依赖); stifle (扼杀/抑制); standardized testing (标准化考试)。" },
          { type: "固定搭配", text: "reliance on... (对...的依赖)。" }
        ]
      },
      {
        id: "school_s3",
        chinese: "这项实证研究为了解数字素养如何影响学业表现提供了宝贵的见解",
        english_full: "The empirical study offers valuable insights into how digital literacy affects academic performance.",
        words: [
          { word: "The", punctuation: "" },
          { word: "empirical", punctuation: "" },
          { word: "study", punctuation: "" },
          { word: "offers", punctuation: "" },
          { word: "valuable", punctuation: "" },
          { word: "insights", punctuation: "" },
          { word: "into", punctuation: "" },
          { word: "how", punctuation: "" },
          { word: "digital", punctuation: "" },
          { word: "literacy", punctuation: "" },
          { word: "affects", punctuation: "" },
          { word: "academic", punctuation: "" },
          { word: "performance", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪmˈpɪrɪkəl/ /ˈstʌdi/", translation: "这项实证研究" },
          { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供" },
          { start: 4, end: 5, label: "宾语", phonetic: "/ˈvæljuəbəl/ /ˈɪnsaɪts/", translation: "宝贵的见解" },
          { 
            start: 6, end: 12, label: "状语/介词宾语从句", phonetic: "/ˈɪntuː/ /haʊ/ /ˈdɪdʒɪtəl/ /ˈlɪtərəsi/ /əˈfɛkts/ /ˌækəˈdɛmɪk/ /pərˈfɔːrməns/", translation: "关于数字素养如何影响学业表现",
            subComponents: [
              { start: 7, end: 12, label: "宾语从句" }
            ]
          }
        ],
        analysis: [
          { type: "学术词汇", text: "empirical study (实证研究); digital literacy (数字素养); academic performance (学业表现)。" },
          { type: "固定搭配", text: "offer insights into... (提供对...的见解/深刻了解)。" }
        ]
      },
      {
        id: "school_s4",
        chinese: "课外活动在塑造全面发展的个人方面起着关键作用",
        english_full: "Extracurricular activities play a pivotal role in shaping well-rounded individuals.",
        words: [
          { word: "Extracurricular", punctuation: "" },
          { word: "activities", punctuation: "" },
          { word: "play", punctuation: "" },
          { word: "a", punctuation: "" },
          { word: "pivotal", punctuation: "" },
          { word: "role", punctuation: "" },
          { word: "in", punctuation: "" },
          { word: "shaping", punctuation: "" },
          { word: "well-rounded", punctuation: "" },
          { word: "individuals", punctuation: "." }
        ],
        components: [
          { start: 0, end: 1, label: "主语", phonetic: "/ˌɛkstrəkəˈrɪkjələr/ /ækˈtɪvɪtiz/", translation: "课外活动" },
          { start: 2, end: 2, label: "谓语", phonetic: "/pleɪ/", translation: "起(作用)" },
          { start: 3, end: 5, label: "宾语", phonetic: "/ə/ /ˈpɪvətəl/ /roʊl/", translation: "关键作用" },
          { 
            start: 6, end: 9, label: "状语", phonetic: "/ɪn/ /ˈʃeɪpɪŋ/ /wɛl ˈraʊndɪd/ /ˌɪndɪˈvɪdʒuəlz/", translation: "在塑造全面发展的个人方面",
            subComponents: [
              { start: 7, end: 9, label: "介词宾语(动名词)" }
            ]
          }
        ],
        analysis: [
          { type: "经典句型", text: "play a pivotal/crucial/vital role in... (在...中起关键作用)，写作口语高分必备。" },
          { type: "高级词汇", text: "extracurricular (课外的); well-rounded (全面发展的)。" }
        ]
      },
      {
        id: "school_s5",
        chinese: "随着人们对终身学习的认识不断提高，成人教育机构也在不断增加",
        english_full: "Adult education institutions are proliferating as the awareness of lifelong learning grows.",
        words: [
          { word: "Adult", punctuation: "" },
          { word: "education", punctuation: "" },
          { word: "institutions", punctuation: "" },
          { word: "are", punctuation: "" },
          { word: "proliferating", punctuation: "" },
          { word: "as", punctuation: "" },
          { word: "the", punctuation: "" },
          { word: "awareness", punctuation: "" },
          { word: "of", punctuation: "" },
          { word: "lifelong", punctuation: "" },
          { word: "learning", punctuation: "" },
          { word: "grows", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ˈædʌlt/ /ˌɛdʒʊˈkeɪʃən/ /ˌɪnstɪˈtuːʃənz/", translation: "成人教育机构" },
          { start: 3, end: 3, label: "助动词", phonetic: "/ɑːr/", translation: "正在" },
          { start: 4, end: 4, label: "谓语(进行时)", phonetic: "/prəˈlɪfəˌreɪtɪŋ/", translation: "激增，扩散" },
          { 
            start: 5, end: 11, label: "时间/原因状语从句", phonetic: "/æz/ /ði/ /əˈwɛərnəs/ /əv/ /ˈlaɪfˌlɒŋ/ /ˈlɜːrnɪŋ/ /ɡroʊz/", translation: "随着人们对终身学习的认识不断提高",
            subComponents: [
              { start: 6, end: 10, label: "从句主语" },
              { start: 11, end: 11, label: "从句谓语" }
            ]
          }
        ],
        analysis: [
          { type: "高级词汇", text: "proliferate (迅速增加、激增); lifelong learning (终身学习)。" },
          { type: "连词用法", text: "as 这里引导时间或原因状语从句，意为“随着”。" }
        ]
      }
    ]
  },
  {
    id: "dining_01",
    title: "餐厅与美食 (Dining)",
    description: "雅思/生活级表达：涉及高档餐厅、食物过敏与烹饪技巧。",
    sentences: [
      {
        id: "dining_s1",
        chinese: "考虑到您严重的坚果过敏，主厨已对品尝菜单进行了个性化调整",
        english_full: "Given your severe nut allergy, the executive chef has personalized the tasting menu.",
        words: [
          { word: "Given", punctuation: "" }, { word: "your", punctuation: "" }, { word: "severe", punctuation: "" },
          { word: "nut", punctuation: "" }, { word: "allergy", punctuation: "," }, { word: "the", punctuation: "" },
          { word: "executive", punctuation: "" }, { word: "chef", punctuation: "" }, { word: "has", punctuation: "" },
          { word: "personalized", punctuation: "" }, { word: "the", punctuation: "" }, { word: "tasting", punctuation: "" },
          { word: "menu", punctuation: "." }
        ],
        components: [
          { start: 0, end: 4, label: "原因状语", phonetic: "/ˈɡɪvən/ /jʊər/ /sɪˈvɪər/ /nʌt/ /ˈælərdʒi/", translation: "考虑到您严重的坚果过敏" },
          { start: 5, end: 7, label: "主语", phonetic: "/ði/ /ɪɡˈzɛkjətɪv/ /ʃɛf/", translation: "行政主厨" },
          { start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /ˈpɜːrsənəˌlaɪzd/", translation: "已经个性化调整" },
          { start: 10, end: 12, label: "宾语", phonetic: "/ðə/ /ˈteɪstɪŋ/ /ˈmɛnjuː/", translation: "品尝菜单" }
        ],
        analysis: [
          { type: "高级表达", text: "Given... 作介词，意为“考虑到...”；executive chef 指行政主厨。" },
          { type: "生活场景", text: "nut allergy (坚果过敏)；tasting menu (品尝菜单，高档餐厅专属)。" }
        ]
      },
      {
        id: "dining_s2",
        chinese: "这家备受赞誉的餐厅以其将传统食谱与现代烹饪技术相融合而自豪",
        english_full: "The acclaimed restaurant prides itself on fusing traditional recipes with modern culinary techniques.",
        words: [
          { word: "The", punctuation: "" }, { word: "acclaimed", punctuation: "" }, { word: "restaurant", punctuation: "" },
          { word: "prides", punctuation: "" }, { word: "itself", punctuation: "" }, { word: "on", punctuation: "" },
          { word: "fusing", punctuation: "" }, { word: "traditional", punctuation: "" }, { word: "recipes", punctuation: "" },
          { word: "with", punctuation: "" }, { word: "modern", punctuation: "" }, { word: "culinary", punctuation: "" },
          { word: "techniques", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /əˈkleɪmd/ /ˈrɛstərənt/", translation: "这家备受赞誉的餐厅" },
          { start: 3, end: 5, label: "谓语", phonetic: "/praɪdz/ /ɪtˈsɛlf/ /ɒn/", translation: "以...为自豪" },
          { start: 6, end: 12, label: "宾语", phonetic: "/ˈfjuːzɪŋ/ /trəˈdɪʃənəl/ /ˈrɛsɪpiz/ /wɪð/ /ˈmɒdərn/ /ˈkʌlɪˌnɛri/ /tɛkˈniːks/", translation: "将传统食谱与现代烹饪技术相融合" }
        ],
        analysis: [
          { type: "固定搭配", text: "pride itself on... (以...引以为傲)；fuse A with B (将A与B融合)。" },
          { type: "学术词汇", text: "acclaimed (备受赞誉的)；culinary (烹饪的)。" }
        ]
      },
      {
        id: "dining_s3",
        chinese: "严格的卫生检查对于维持食品服务行业的高标准至关重要",
        english_full: "Rigorous hygiene inspections are crucial for maintaining high standards in the food service industry.",
        words: [
          { word: "Rigorous", punctuation: "" }, { word: "hygiene", punctuation: "" }, { word: "inspections", punctuation: "" },
          { word: "are", punctuation: "" }, { word: "crucial", punctuation: "" }, { word: "for", punctuation: "" },
          { word: "maintaining", punctuation: "" }, { word: "high", punctuation: "" }, { word: "standards", punctuation: "" },
          { word: "in", punctuation: "" }, { word: "the", punctuation: "" }, { word: "food", punctuation: "" },
          { word: "service", punctuation: "" }, { word: "industry", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ˈrɪɡərəs/ /ˈhaɪˌdʒiːn/ /ɪnˈspɛkʃənz/", translation: "严格的卫生检查" },
          { start: 3, end: 3, label: "系动词", phonetic: "/ɑːr/", translation: "是" },
          { start: 4, end: 4, label: "表语", phonetic: "/ˈkruːʃəl/", translation: "至关重要的" },
          { start: 5, end: 13, label: "状语", phonetic: "/fɔːr/ /meɪnˈteɪnɪŋ/ /haɪ/ /ˈstændərdz/ /ɪn/ /ðə/ /fuːd/ /ˈsɜːrvɪs/ /ˈɪndəstri/", translation: "对于在食品服务行业中维持高标准" }
        ],
        analysis: [
          { type: "场景高频词", text: "hygiene inspections (卫生检查)；food service industry (食品服务业/餐饮业)。" },
          { type: "同义替换", text: "rigorous = strict (严格的)；crucial = vital/essential (至关重要的)。" }
        ]
      }
    ]
  },
  {
    id: "shopping_01",
    title: "购物与消费 (Shopping)",
    description: "雅思/商务级表达：关于零售趋势、消费者行为与退换货政策。",
    sentences: [
      {
        id: "shop_s1",
        chinese: "最近消费者行为的转变迫使传统零售商拥抱电子商务平台",
        english_full: "The recent shift in consumer behavior has compelled traditional retailers to embrace e-commerce platforms.",
        words: [
          { word: "The", punctuation: "" }, { word: "recent", punctuation: "" }, { word: "shift", punctuation: "" },
          { word: "in", punctuation: "" }, { word: "consumer", punctuation: "" }, { word: "behavior", punctuation: "" },
          { word: "has", punctuation: "" }, { word: "compelled", punctuation: "" }, { word: "traditional", punctuation: "" },
          { word: "retailers", punctuation: "" }, { word: "to", punctuation: "" }, { word: "embrace", punctuation: "" },
          { word: "e-commerce", punctuation: "" }, { word: "platforms", punctuation: "." }
        ],
        components: [
          { start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˈriːsənt/ /ʃɪft/ /ɪn/ /kənˈsuːmər/ /bɪˈheɪvjər/", translation: "最近消费者行为的转变" },
          { start: 6, end: 7, label: "谓语", phonetic: "/hæz/ /kəmˈpɛld/", translation: "已经迫使" },
          { start: 8, end: 9, label: "宾语", phonetic: "/trəˈdɪʃənəl/ /ˈriːˌteɪlərz/", translation: "传统零售商" },
          { start: 10, end: 13, label: "宾补", phonetic: "/tuː/ /ɪmˈbreɪs/ /iː ˈkɒmərs/ /ˈplætfɔːrmz/", translation: "去拥抱电子商务平台" }
        ],
        analysis: [
          { type: "经典句型", text: "compel sb to do sth (迫使某人做某事)，比 force 更具学术感。" },
          { type: "商务词汇", text: "consumer behavior (消费者行为)；retailer (零售商)；embrace (欣然接受/拥抱新技术)。" }
        ]
      },
      {
        id: "shop_s2",
        chinese: "所有购买的商品必须在原始收据签发后的三十天内退回",
        english_full: "All purchased merchandise must be returned within thirty days of the original receipt issuance.",
        words: [
          { word: "All", punctuation: "" }, { word: "purchased", punctuation: "" }, { word: "merchandise", punctuation: "" },
          { word: "must", punctuation: "" }, { word: "be", punctuation: "" }, { word: "returned", punctuation: "" },
          { word: "within", punctuation: "" }, { word: "thirty", punctuation: "" }, { word: "days", punctuation: "" },
          { word: "of", punctuation: "" }, { word: "the", punctuation: "" }, { word: "original", punctuation: "" },
          { word: "receipt", punctuation: "" }, { word: "issuance", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ɔːl/ /ˈpɜːrtʃəst/ /ˈmɜːrtʃənˌdaɪz/", translation: "所有购买的商品" },
          { start: 3, end: 5, label: "谓语(被动)", phonetic: "/mʌst/ /biː/ /rɪˈtɜːrnd/", translation: "必须被退回" },
          { start: 6, end: 13, label: "时间状语", phonetic: "/wɪˈðɪn/ /ˈθɜːrti/ /deɪz/ /əv/ /ði/ /əˈrɪdʒɪnəl/ /rɪˈsiːt/ /ˈɪʃuəns/", translation: "在原始收据签发的三十天内" }
        ],
        analysis: [
          { type: "正式用语", text: "merchandise (商品/货物，不可数名词)；issuance (签发/发行)。" },
          { type: "表达结构", text: "within X days of... (在...发生后的X天内)，常见于法律与商业条款。" }
        ]
      },
      {
        id: "shop_s3",
        chinese: "具有环保意识的购物者越来越青睐优先考虑可持续性的品牌",
        english_full: "Environmentally conscious shoppers are increasingly favoring brands that prioritize sustainability.",
        words: [
          { word: "Environmentally", punctuation: "" }, { word: "conscious", punctuation: "" }, { word: "shoppers", punctuation: "" },
          { word: "are", punctuation: "" }, { word: "increasingly", punctuation: "" }, { word: "favoring", punctuation: "" },
          { word: "brands", punctuation: "" }, { word: "that", punctuation: "" }, { word: "prioritize", punctuation: "" },
          { word: "sustainability", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/ɪnˌvaɪrənˈmɛntəli/ /ˈkɒnʃəs/ /ˈʃɒpərz/", translation: "具有环保意识的购物者" },
          { start: 3, end: 5, label: "谓语", phonetic: "/ɑːr/ /ɪnˈkriːsɪŋli/ /ˈfeɪvərɪŋ/", translation: "越来越青睐" },
          { start: 6, end: 9, label: "宾语", phonetic: "/brændz/ /ðæt/ /praɪˈɒrɪˌtaɪz/ /səˌsteɪnəˈbɪlɪti/", translation: "优先考虑可持续性的品牌", subComponents: [{start: 7, end: 9, label: "定语从句"}] }
        ],
        analysis: [
          { type: "热门话题", text: "sustainability (可持续性)；environmentally conscious (有环保意识的)。" },
          { type: "语法功能", text: "that prioritize sustainability 是限制性定语从句，修饰 brands。" }
        ]
      }
    ]
  },
  {
    id: "sports_01",
    title: "体育与运动 (Sports)",
    description: "雅思/话题级表达：关于团队合作、职业训练与体育影响。",
    sentences: [
      {
        id: "sport_s1",
        chinese: "定期参加团队运动可以培养青少年的纪律性和团队合作精神",
        english_full: "Regular participation in team sports fosters discipline and a sense of camaraderie among adolescents.",
        words: [
          { word: "Regular", punctuation: "" }, { word: "participation", punctuation: "" }, { word: "in", punctuation: "" },
          { word: "team", punctuation: "" }, { word: "sports", punctuation: "" }, { word: "fosters", punctuation: "" },
          { word: "discipline", punctuation: "" }, { word: "and", punctuation: "" }, { word: "a", punctuation: "" },
          { word: "sense", punctuation: "" }, { word: "of", punctuation: "" }, { word: "camaraderie", punctuation: "" },
          { word: "among", punctuation: "" }, { word: "adolescents", punctuation: "." }
        ],
        components: [
          { start: 0, end: 4, label: "主语", phonetic: "/ˈrɛɡjələr/ /pɑːrˌtɪsɪˈpeɪʃən/ /ɪn/ /tiːm/ /spɔːrts/", translation: "定期参加团队运动" },
          { start: 5, end: 5, label: "谓语", phonetic: "/ˈfɒstərz/", translation: "培养，促进" },
          { start: 6, end: 11, label: "宾语", phonetic: "/ˈdɪsɪplɪn/ /ænd/ /ə/ /sɛns/ /əv/ /ˌkæməˈrɑːdəri/", translation: "纪律性和团队合作精神" },
          { start: 12, end: 13, label: "状语", phonetic: "/əˈmʌŋ/ /ˌædəˈlɛsənts/", translation: "在青少年中" }
        ],
        analysis: [
          { type: "加分词汇", text: "camaraderie (战友之情/同伴情谊，极高级替换 teamwork)；foster (培养)；adolescents (青少年)。" },
          { type: "写作结构", text: "A fosters B among C. (A在C中培养了B)。" }
        ]
      },
      {
        id: "sport_s2",
        chinese: "穿戴适当的防护装备能有效降低在对抗性运动中受重伤的风险",
        english_full: "Wearing appropriate protective gear effectively mitigates the risk of severe injuries in contact sports.",
        words: [
          { word: "Wearing", punctuation: "" }, { word: "appropriate", punctuation: "" }, { word: "protective", punctuation: "" },
          { word: "gear", punctuation: "" }, { word: "effectively", punctuation: "" }, { word: "mitigates", punctuation: "" },
          { word: "the", punctuation: "" }, { word: "risk", punctuation: "" }, { word: "of", punctuation: "" },
          { word: "severe", punctuation: "" }, { word: "injuries", punctuation: "" }, { word: "in", punctuation: "" },
          { word: "contact", punctuation: "" }, { word: "sports", punctuation: "." }
        ],
        components: [
          { start: 0, end: 3, label: "主语(动名词)", phonetic: "/ˈwɛərɪŋ/ /əˈproʊpriət/ /prəˈtɛktɪv/ /ɡɪər/", translation: "穿戴适当的防护装备" },
          { start: 4, end: 4, label: "状语", phonetic: "/ɪˈfɛktɪvli/", translation: "有效地" },
          { start: 5, end: 5, label: "谓语", phonetic: "/ˈmɪtɪˌɡeɪts/", translation: "降低，减轻" },
          { start: 6, end: 10, label: "宾语", phonetic: "/ðə/ /rɪsk/ /əv/ /sɪˈvɪər/ /ˈɪndʒəriz/", translation: "受重伤的风险" },
          { start: 11, end: 13, label: "状语", phonetic: "/ɪn/ /ˈkɒntækt/ /spɔːrts/", translation: "在对抗性运动中" }
        ],
        analysis: [
          { type: "地道表达", text: "protective gear (防护装备)；contact sports (对抗性运动，如橄榄球/拳击)。" },
          { type: "学术替换", text: "mitigate = reduce/lower (减轻/降低风险)。" }
        ]
      }
    ]
  },
  {
    id: "tech_01",
    title: "科技与互联网 (Technology)",
    description: "雅思/托福高频话题：人工智能、网络安全与数字生活。",
    sentences: [
      {
        id: "tech_s1",
        chinese: "人工智能与日常电器的融合正在彻底改变我们的生活方式",
        english_full: "The integration of artificial intelligence into everyday appliances is revolutionizing our way of life.",
        words: [
          { word: "The", punctuation: "" }, { word: "integration", punctuation: "" }, { word: "of", punctuation: "" },
          { word: "artificial", punctuation: "" }, { word: "intelligence", punctuation: "" }, { word: "into", punctuation: "" },
          { word: "everyday", punctuation: "" }, { word: "appliances", punctuation: "" }, { word: "is", punctuation: "" },
          { word: "revolutionizing", punctuation: "" }, { word: "our", punctuation: "" }, { word: "way", punctuation: "" },
          { word: "of", punctuation: "" }, { word: "life", punctuation: "." }
        ],
        components: [
          { start: 0, end: 7, label: "主语", phonetic: "/ði/ /ˌɪntɪˈɡreɪʃən/ /əv/ /ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/ /ˈɪntuː/ /ˈɛvriˌdeɪ/ /əˈplaɪənsɪz/", translation: "人工智能与日常电器的融合" },
          { start: 8, end: 9, label: "谓语", phonetic: "/ɪz/ /ˌrɛvəˈluːʃəˌnaɪzɪŋ/", translation: "正在彻底改变" },
          { start: 10, end: 13, label: "宾语", phonetic: "/aʊər/ /weɪ/ /əv/ /laɪf/", translation: "我们的生活方式" }
        ],
        analysis: [
          { type: "加分词汇", text: "integration...into... (融入)；appliances (家用电器)；revolutionize (产生革命性改变)。" }
        ]
      },
      {
        id: "tech_s2",
        chinese: "强大的网络安全措施对于保护敏感的个人数据免受恶意攻击是必不可少的",
        english_full: "Robust cybersecurity measures are imperative for safeguarding sensitive personal data against malicious attacks.",
        words: [
          { word: "Robust", punctuation: "" }, { word: "cybersecurity", punctuation: "" }, { word: "measures", punctuation: "" },
          { word: "are", punctuation: "" }, { word: "imperative", punctuation: "" }, { word: "for", punctuation: "" },
          { word: "safeguarding", punctuation: "" }, { word: "sensitive", punctuation: "" }, { word: "personal", punctuation: "" },
          { word: "data", punctuation: "" }, { word: "against", punctuation: "" }, { word: "malicious", punctuation: "" },
          { word: "attacks", punctuation: "." }
        ],
        components: [
          { start: 0, end: 2, label: "主语", phonetic: "/roʊˈbʌst/ /ˌsaɪbərsɪˈkjʊərəti/ /ˈmɛʒərz/", translation: "强大的网络安全措施" },
          { start: 3, end: 3, label: "系动词", phonetic: "/ɑːr/", translation: "是" },
          { start: 4, end: 4, label: "表语", phonetic: "/ɪmˈpɛrətɪv/", translation: "必不可少的" },
          { start: 5, end: 12, label: "目的状语", phonetic: "/fɔːr/ /ˈseɪfˌɡɑːrdɪŋ/ /ˈsɛnsɪtɪv/ /ˈpɜːrsənəl/ /ˈdeɪtə/ /əˈɡɛnst/ /məˈlɪʃəs/ /əˈtæks/", translation: "用于保护敏感个人数据免受恶意攻击" }
        ],
        analysis: [
          { type: "同义替换", text: "robust = strong (强大的)；imperative = essential/crucial (必不可少的)；safeguard = protect (保护)。" },
          { type: "高级搭配", text: "safeguard A against B (保护A免受B的伤害)；malicious attacks (恶意攻击)。" }
        ]
      },
      {
        id: "tech_s3",
        chinese: "智能手机和社交媒体的过度使用引发了对人们心理健康恶化的担忧",
        english_full: "The excessive use of smartphones and social media raises concerns regarding the deterioration of mental health.",
        words: [
          { word: "The", punctuation: "" }, { word: "excessive", punctuation: "" }, { word: "use", punctuation: "" },
          { word: "of", punctuation: "" }, { word: "smartphones", punctuation: "" }, { word: "and", punctuation: "" },
          { word: "social", punctuation: "" }, { word: "media", punctuation: "" }, { word: "raises", punctuation: "" },
          { word: "concerns", punctuation: "" }, { word: "regarding", punctuation: "" }, { word: "the", punctuation: "" },
          { word: "deterioration", punctuation: "" }, { word: "of", punctuation: "" }, { word: "mental", punctuation: "" },
          { word: "health", punctuation: "." }
        ],
        components: [
          { start: 0, end: 7, label: "主语", phonetic: "/ði/ /ɪkˈsɛsɪv/ /juːs/ /əv/ /ˈsmɑːrtˌfoʊnz/ /ænd/ /ˈsoʊʃəl/ /ˈmiːdiə/", translation: "智能手机和社交媒体的过度使用" },
          { start: 8, end: 8, label: "谓语", phonetic: "/ˈreɪzɪz/", translation: "引发" },
          { start: 9, end: 15, label: "宾语", phonetic: "/kənˈsɜːrnz/ /rɪˈɡɑːrdɪŋ/ /ðə/ /dɪˌtɪəriəˈreɪʃən/ /əv/ /ˈmɛntəl/ /hɛlθ/", translation: "关于心理健康恶化的担忧", subComponents: [{start: 10, end: 15, label: "后置定语"}] }
        ],
        analysis: [
          { type: "写作核心词", text: "excessive (过度的)；deterioration (恶化)；raise concerns (引发担忧)。" },
          { type: "介词运用", text: "regarding = about (关于)，在书面语中经常替换 about 提升学术感。" }
        ]
      }
    ]
  }
];