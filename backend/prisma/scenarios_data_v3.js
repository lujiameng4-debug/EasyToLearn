export const scenarioCurriculumsV3 = [
  {
    id: "dessert_01",
    title: "甜品与咖啡店 (Cafes & Desserts)",
    description: "雅思口语/生活高频：描述甜点口味、咖啡文化与休闲时光。",
    sentences: [
      {
        id: "des_01",
        chinese: "这家新开的咖啡馆以其招牌的抹茶慕斯蛋糕而闻名",
        english_full: "This newly opened cafe is renowned for its signature matcha mousse cake.",
        words: [
          { word: "This" }, { word: "newly" }, { word: "opened" }, { word: "cafe" }, { word: "is" },
          { word: "renowned" }, { word: "for" }, { word: "its" }, { word: "signature" }, { word: "matcha" },
          { word: "mousse" }, { word: "cake", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ˈnjuːli/ /ˈoʊpənd/ /ˈkæfeɪ/", translation: "这家新开的咖啡馆",
            subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "newly" }, { word: "opened" }, { word: "cafe" }] }]
          },
          {
            start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
            subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
          },
          {
            start: 5, end: 5, label: "表语", phonetic: "/rɪˈnaʊnd/", translation: "闻名的",
            subComponents: [{ startIndex: 0, words: [{ word: "renowned" }] }]
          },
          {
            start: 6, end: 11, label: "原因状语", phonetic: "/fɔːr/ /ɪts/ /ˈsɪgnətʃər/ /ˈmætʃə/ /muːs/ /keɪk/", translation: "因为它的招牌抹茶慕斯蛋糕",
            subComponents: [
              { startIndex: 0, words: [{ word: "for" }] },
              { startIndex: 1, words: [{ word: "its" }, { word: "signature" }, { word: "matcha" }, { word: "mousse" }, { word: "cake" }], label: "介词宾语" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "be renowned for... 意为“因...而闻名”，是 be famous for 的高级替换。" },
          { type: "词汇解析", text: "signature 作形容词时表示“招牌的，标志性的”，常用于描述餐厅特色。" }
        ]
      },
      {
        id: "des_02",
        chinese: "我觉得这块焦糖布丁太甜了，有些腻",
        english_full: "I find this crème caramel excessively sweet and slightly cloying.",
        words: [
          { word: "I" }, { word: "find" }, { word: "this" }, { word: "crème" }, { word: "caramel" },
          { word: "excessively" }, { word: "sweet" }, { word: "and" }, { word: "slightly" }, { word: "cloying", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我",
            subComponents: [{ startIndex: 0, words: [{ word: "I" }] }]
          },
          {
            start: 1, end: 1, label: "谓语", phonetic: "/faɪnd/", translation: "觉得",
            subComponents: [{ startIndex: 0, words: [{ word: "find" }] }]
          },
          {
            start: 2, end: 4, label: "宾语", phonetic: "/ðɪs/ /krɛm/ /ˈkærəməl/", translation: "这块焦糖布丁",
            subComponents: [{ startIndex: 0, words: [{ word: "this" }, { word: "crème" }, { word: "caramel" }] }]
          },
          {
            start: 5, end: 9, label: "宾语补足语", phonetic: "/ɪkˈsɛsɪvli/ /swiːt/ /ænd/ /ˈslaɪtli/ /ˈklɔɪɪŋ/", translation: "太甜而且有些腻",
            subComponents: [
              { startIndex: 0, words: [{ word: "excessively" }, { word: "sweet" }] },
              { startIndex: 2, words: [{ word: "and" }] },
              { startIndex: 3, words: [{ word: "slightly" }, { word: "cloying" }] }
            ]
          }
        ],
        analysis: [
          { type: "句型结构", text: "find + 宾语 + 形容词(宾补)，意为“觉得某物怎么样”。" },
          { type: "词汇解析", text: "excessively (过度地) 和 cloying (甜腻的) 是描述食物口感的高级词汇。" }
        ]
      },
      {
        id: "des_03",
        chinese: "为了迎合注重健康的顾客，他们推出了无糖甜点",
        english_full: "To cater to health-conscious customers, they have introduced sugar-free desserts.",
        words: [
          { word: "To" }, { word: "cater" }, { word: "to" }, { word: "health-conscious" }, { word: "customers", punctuation: "," },
          { word: "they" }, { word: "have" }, { word: "introduced" }, { word: "sugar-free" }, { word: "desserts", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 4, label: "目的状语", phonetic: "/tuː/ /ˈkeɪtər/ /tuː/ /hɛlθ/-/ˈkɒnʃəs/ /ˈkʌstəmərz/", translation: "为了迎合注重健康的顾客",
            subComponents: [
              { startIndex: 0, words: [{ word: "To" }, { word: "cater" }, { word: "to" }] },
              { startIndex: 3, words: [{ word: "health-conscious" }, { word: "customers" }], label: "介词宾语" }
            ]
          },
          {
            start: 5, end: 5, label: "主语", phonetic: "/ðeɪ/", translation: "他们",
            subComponents: [{ startIndex: 0, words: [{ word: "they" }] }]
          },
          {
            start: 6, end: 7, label: "谓语", phonetic: "/hæv/ /ˌɪntrəˈdjuːst/", translation: "推出了",
            subComponents: [
              { startIndex: 0, words: [{ word: "have" }], label: "助动词" },
              { startIndex: 1, words: [{ word: "introduced" }], label: "实义动词" }
            ]
          },
          {
            start: 8, end: 9, label: "宾语", phonetic: "/ˈʃʊgər/-/friː/ /dɪˈzɜːrts/", translation: "无糖甜点",
            subComponents: [{ startIndex: 0, words: [{ word: "sugar-free" }, { word: "desserts" }] }]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "cater to... 意为“迎合，满足...的需求”。" },
          { type: "构词法", text: "复合形容词 health-conscious (注重健康的) 和 sugar-free (无糖的) 在雅思口语中非常加分。" }
        ]
      },
      {
        id: "des_04",
        chinese: "这杯拿铁的拉花艺术令人惊叹，简直不忍心喝掉它",
        english_full: "The latte art on this cup is so stunning that I can barely bring myself to drink it.",
        words: [
          { word: "The" }, { word: "latte" }, { word: "art" }, { word: "on" }, { word: "this" }, { word: "cup" },
          { word: "is" }, { word: "so" }, { word: "stunning" }, { word: "that" }, { word: "I" }, { word: "can" },
          { word: "barely" }, { word: "bring" }, { word: "myself" }, { word: "to" }, { word: "drink" }, { word: "it", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˈlɑːteɪ/ /ɑːrt/ /ɒn/ /ðɪs/ /kʌp/", translation: "这杯拿铁的拉花艺术",
            subComponents: [
              { startIndex: 0, words: [{ word: "The" }, { word: "latte" }, { word: "art" }] },
              { startIndex: 3, words: [{ word: "on" }, { word: "this" }, { word: "cup" }], label: "后置定语" }
            ]
          },
          {
            start: 6, end: 6, label: "系动词", phonetic: "/ɪz/", translation: "是",
            subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
          },
          {
            start: 7, end: 8, label: "表语", phonetic: "/soʊ/ /ˈstʌnɪŋ/", translation: "如此令人惊叹的",
            subComponents: [{ startIndex: 0, words: [{ word: "so" }, { word: "stunning" }] }]
          },
          {
            start: 9, end: 17, label: "结果状语从句", phonetic: "/ðæt/ /aɪ/ /kæn/ /ˈbɛərli/ /brɪŋ/ /maɪˈsɛlf/ /tuː/ /drɪŋk/ /ɪt/", translation: "以至于我几乎不忍心喝它",
            subComponents: [
              { startIndex: 0, words: [{ word: "that" }], label: "连词" },
              { startIndex: 1, words: [{ word: "I" }], label: "(从)主" },
              { startIndex: 2, words: [{ word: "can" }, { word: "barely" }, { word: "bring" }], label: "(从)谓" },
              { startIndex: 5, words: [{ word: "myself" }], label: "(从)宾" },
              { startIndex: 6, words: [{ word: "to" }, { word: "drink" }, { word: "it" }], label: "(从)宾补" }
            ]
          }
        ],
        analysis: [
          { type: "句型结构", text: "so ... that ... 引导结果状语从句，意为“如此...以至于...”。" },
          { type: "固定搭配", text: "bring oneself to do sth 意为“忍心做某事，勉强自己做某事”，常用于否定或疑问句中。" }
        ]
      },
      {
        id: "des_05",
        chinese: "在忙碌了一天后，吃点甜食总能立刻提升我的心情",
        english_full: "Having some sweets after a hectic day always instantly elevates my mood.",
        words: [
          { word: "Having" }, { word: "some" }, { word: "sweets" }, { word: "after" }, { word: "a" }, { word: "hectic" }, { word: "day" },
          { word: "always" }, { word: "instantly" }, { word: "elevates" }, { word: "my" }, { word: "mood", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 6, label: "主语", phonetic: "/ˈhævɪŋ/ /sʌm/ /swiːts/ /ˈæftər/ /ə/ /ˈhɛktɪk/ /deɪ/", translation: "在忙碌的一天后吃些甜食",
            subComponents: [
              { startIndex: 0, words: [{ word: "Having" }, { word: "some" }, { word: "sweets" }] },
              { startIndex: 3, words: [{ word: "after" }, { word: "a" }, { word: "hectic" }, { word: "day" }], label: "时间状语" }
            ]
          },
          {
            start: 7, end: 8, label: "频率/方式状语", phonetic: "/ˈɔːlweɪz/ /ˈɪnstəntli/", translation: "总是立刻",
            subComponents: [
              { startIndex: 0, words: [{ word: "always" }] },
              { startIndex: 1, words: [{ word: "instantly" }] }
            ]
          },
          {
            start: 9, end: 9, label: "谓语", phonetic: "/ˈɛlɪveɪts/", translation: "提升",
            subComponents: [{ startIndex: 0, words: [{ word: "elevates" }] }]
          },
          {
            start: 10, end: 11, label: "宾语", phonetic: "/maɪ/ /muːd/", translation: "我的心情",
            subComponents: [{ startIndex: 0, words: [{ word: "my" }, { word: "mood" }] }]
          }
        ],
        analysis: [
          { type: "语法成分", text: "动名词短语 Having some sweets 作主语，谓语动词用单数 elevates。" },
          { type: "词汇解析", text: "hectic (忙乱的，非常忙碌的) 和 elevate one's mood (提升心情) 是地道的表达方式。" }
        ]
      }
    ]
  },
  {
    id: "sports_02",
    title: "球类与竞技体育 (Ball Sports)",
    description: "雅思口语/写作：描述团队协作、比赛策略与体育精神。",
    sentences: [
      {
        id: "spr_01",
        chinese: "在这场关键的篮球赛中，团队合作比个人英雄主义更重要",
        english_full: "In this crucial basketball match, teamwork takes precedence over individual heroism.",
        words: [
          { word: "In" }, { word: "this" }, { word: "crucial" }, { word: "basketball" }, { word: "match", punctuation: "," },
          { word: "teamwork" }, { word: "takes" }, { word: "precedence" }, { word: "over" }, { word: "individual" }, { word: "heroism", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 4, label: "地点/场景状语", phonetic: "/ɪn/ /ðɪs/ /ˈkruːʃəl/ /ˈbæskɪtbɔːl/ /mætʃ/", translation: "在这场关键的篮球赛中",
            subComponents: [{ startIndex: 0, words: [{ word: "In" }, { word: "this" }, { word: "crucial" }, { word: "basketball" }, { word: "match" }] }]
          },
          {
            start: 5, end: 5, label: "主语", phonetic: "/ˈtiːmwɜːrk/", translation: "团队合作",
            subComponents: [{ startIndex: 0, words: [{ word: "teamwork" }] }]
          },
          {
            start: 6, end: 6, label: "谓语", phonetic: "/teɪks/", translation: "占据",
            subComponents: [{ startIndex: 0, words: [{ word: "takes" }] }]
          },
          {
            start: 7, end: 7, label: "宾语", phonetic: "/ˈprɛsɪdəns/", translation: "优先地位",
            subComponents: [{ startIndex: 0, words: [{ word: "precedence" }] }]
          },
          {
            start: 8, end: 10, label: "状语", phonetic: "/ˈoʊvər/ /ˌɪndɪˈvɪdʒuəl/ /ˈhɛroʊɪzəm/", translation: "凌驾于个人英雄主义之上",
            subComponents: [
              { startIndex: 0, words: [{ word: "over" }] },
              { startIndex: 1, words: [{ word: "individual" }, { word: "heroism" }], label: "介词宾语" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "take precedence over... 意为“优先于...，比...更重要”，是非常高级的学术词组。" },
          { type: "词汇解析", text: "crucial (关键的，决定性的) 替换了普通的 important。" }
        ]
      },
      {
        id: "spr_02",
        chinese: "他凭借一记精准的三分球在最后几秒扭转了比赛局势",
        english_full: "He turned the tide of the game with a precise three-pointer in the final seconds.",
        words: [
          { word: "He" }, { word: "turned" }, { word: "the" }, { word: "tide" }, { word: "of" }, { word: "the" }, { word: "game" },
          { word: "with" }, { word: "a" }, { word: "precise" }, { word: "three-pointer" }, { word: "in" }, { word: "the" }, { word: "final" }, { word: "seconds", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 0, label: "主语", phonetic: "/hiː/", translation: "他",
            subComponents: [{ startIndex: 0, words: [{ word: "He" }] }]
          },
          {
            start: 1, end: 1, label: "谓语", phonetic: "/tɜːrnd/", translation: "扭转了",
            subComponents: [{ startIndex: 0, words: [{ word: "turned" }] }]
          },
          {
            start: 2, end: 6, label: "宾语", phonetic: "/ðə/ /taɪd/ /ɒv/ /ðə/ /geɪm/", translation: "比赛局势",
            subComponents: [
              { startIndex: 0, words: [{ word: "the" }, { word: "tide" }] },
              { startIndex: 2, words: [{ word: "of" }, { word: "the" }, { word: "game" }], label: "后置定语" }
            ]
          },
          {
            start: 7, end: 10, label: "方式状语", phonetic: "/wɪð/ /ə/ /prɪˈsaɪs/ /θriː/-/ˈpɔɪntər/", translation: "凭借一记精准的三分球",
            subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "precise" }, { word: "three-pointer" }] }]
          },
          {
            start: 11, end: 14, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ˈfaɪnəl/ /ˈsɛkəndz/", translation: "在最后几秒",
            subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "final" }, { word: "seconds" }] }]
          }
        ],
        analysis: [
          { type: "惯用语", text: "turn the tide (of sth) 意为“扭转局势”，生动形象。" },
          { type: "专业术语", text: "three-pointer 即篮球中的“三分球”。" }
        ]
      },
      {
        id: "spr_03",
        chinese: "足球不仅要求充沛的体力，还需要极高的战术意识",
        english_full: "Football demands not only abundant physical stamina but also acute tactical awareness.",
        words: [
          { word: "Football" }, { word: "demands" }, { word: "not" }, { word: "only" }, { word: "abundant" }, { word: "physical" }, { word: "stamina" },
          { word: "but" }, { word: "also" }, { word: "acute" }, { word: "tactical" }, { word: "awareness", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 0, label: "主语", phonetic: "/ˈfʊtbɔːl/", translation: "足球",
            subComponents: [{ startIndex: 0, words: [{ word: "Football" }] }]
          },
          {
            start: 1, end: 1, label: "谓语", phonetic: "/dɪˈmændz/", translation: "要求",
            subComponents: [{ startIndex: 0, words: [{ word: "demands" }] }]
          },
          {
            start: 2, end: 11, label: "并列宾语", phonetic: "/nɒt/ /ˈoʊnli/ /əˈbʌndənt/ /ˈfɪzɪkəl/ /ˈstæmɪnə/ /bʌt/ /ˈɔːlsoʊ/ /əˈkjuːt/ /ˈtæktɪkəl/ /əˈwɛərnəs/", translation: "不仅是充沛的体力，还有敏锐的战术意识",
            subComponents: [
              { startIndex: 0, words: [{ word: "not" }, { word: "only" }], label: "连词" },
              { startIndex: 2, words: [{ word: "abundant" }, { word: "physical" }, { word: "stamina" }], label: "宾语1" },
              { startIndex: 5, words: [{ word: "but" }, { word: "also" }], label: "连词" },
              { startIndex: 7, words: [{ word: "acute" }, { word: "tactical" }, { word: "awareness" }], label: "宾语2" }
            ]
          }
        ],
        analysis: [
          { type: "句型结构", text: "not only ... but also ... 连接两个平行的宾语，表示递进关系。" },
          { type: "词汇搭配", text: "physical stamina (体力，耐力) 和 tactical awareness (战术意识) 是体育话题的高频词。" }
        ]
      },
      {
        id: "spr_04",
        chinese: "尽管裁判的判罚引起了争议，球员们依然保持了专业精神",
        english_full: "Despite the controversial ruling by the referee, the players maintained their professionalism.",
        words: [
          { word: "Despite" }, { word: "the" }, { word: "controversial" }, { word: "ruling" }, { word: "by" }, { word: "the" }, { word: "referee", punctuation: "," },
          { word: "the" }, { word: "players" }, { word: "maintained" }, { word: "their" }, { word: "professionalism", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 6, label: "让步状语", phonetic: "/dɪˈspaɪt/ /ðə/ /ˌkɒntrəˈvɜːrʃəl/ /ˈruːlɪŋ/ /baɪ/ /ðə/ /ˌrɛfəˈriː/", translation: "尽管裁判的判罚有争议",
            subComponents: [
              { startIndex: 0, words: [{ word: "Despite" }], label: "介词" },
              { startIndex: 1, words: [{ word: "the" }, { word: "controversial" }, { word: "ruling" }], label: "介词宾语" },
              { startIndex: 4, words: [{ word: "by" }, { word: "the" }, { word: "referee" }], label: "后置定语" }
            ]
          },
          {
            start: 7, end: 8, label: "主语", phonetic: "/ðə/ /ˈpleɪərz/", translation: "球员们",
            subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "players" }] }]
          },
          {
            start: 9, end: 9, label: "谓语", phonetic: "/meɪnˈteɪnd/", translation: "保持了",
            subComponents: [{ startIndex: 0, words: [{ word: "maintained" }] }]
          },
          {
            start: 10, end: 11, label: "宾语", phonetic: "/ðɛər/ /prəˈfɛʃənəlɪzəm/", translation: "他们的专业精神",
            subComponents: [{ startIndex: 0, words: [{ word: "their" }, { word: "professionalism" }] }]
          }
        ],
        analysis: [
          { type: "语法成分", text: "Despite 是介词，后面跟名词短语，不能引导从句 (不能说 Despite the referee ruled...)。" },
          { type: "词汇解析", text: "controversial (有争议的) 和 referee (裁判) 是比赛场景的核心词汇。" }
        ]
      },
      {
        id: "spr_05",
        chinese: "这名网球选手敏捷的反应能力使她能够回击所有艰难的发球",
        english_full: "The tennis player's agile reflexes enable her to return all difficult serves.",
        words: [
          { word: "The" }, { word: "tennis" }, { word: "player's" }, { word: "agile" }, { word: "reflexes" },
          { word: "enable" }, { word: "her" }, { word: "to" }, { word: "return" }, { word: "all" }, { word: "difficult" }, { word: "serves", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈtɛnɪs/ /ˈpleɪərz/ /ˈædʒaɪl/ /rɪˈflɛksɪz/", translation: "这名网球选手敏捷的反应能力",
            subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tennis" }, { word: "player's" }, { word: "agile" }, { word: "reflexes" }] }]
          },
          {
            start: 5, end: 5, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使能够",
            subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
          },
          {
            start: 6, end: 6, label: "宾语", phonetic: "/hɜːr/", translation: "她",
            subComponents: [{ startIndex: 0, words: [{ word: "her" }] }]
          },
          {
            start: 7, end: 11, label: "宾语补足语", phonetic: "/tuː/ /rɪˈtɜːrn/ /ɔːl/ /ˈdɪfɪkʌlt/ /sɜːrvz/", translation: "回击所有艰难的发球",
            subComponents: [
              { startIndex: 0, words: [{ word: "to" }, { word: "return" }] },
              { startIndex: 2, words: [{ word: "all" }, { word: "difficult" }, { word: "serves" }] }
            ]
          }
        ],
        analysis: [
          { type: "句型结构", text: "enable sb to do sth 意为“使某人能够做某事”，是表达能力或原因的高级句型。" },
          { type: "专业术语", text: "serve (发球) 在网球等运动中常作名词使用，return a serve 意为“接发球”。" }
        ]
      }
    ]
  },
  {
    id: "gov_01",
    title: "政府与公共服务 (Gov & Public)",
    description: "雅思写作/新闻：政策实施、社会福利与基础设施建设。",
    sentences: [
      {
        id: "gov_01",
        chinese: "当地政府已分配专项资金来改善公共交通基础设施",
        english_full: "The local government has allocated dedicated funds to improve public transport infrastructure.",
        words: [
          { word: "The" }, { word: "local" }, { word: "government" }, { word: "has" }, { word: "allocated" },
          { word: "dedicated" }, { word: "funds" }, { word: "to" }, { word: "improve" }, { word: "public" }, { word: "transport" }, { word: "infrastructure", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈloʊkəl/ /ˈgʌvərnmənt/", translation: "当地政府",
            subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "local" }, { word: "government" }] }]
          },
          {
            start: 3, end: 4, label: "谓语", phonetic: "/hæz/ /ˈæləkeɪtɪd/", translation: "已经分配",
            subComponents: [
              { startIndex: 0, words: [{ word: "has" }], label: "助动词" },
              { startIndex: 1, words: [{ word: "allocated" }], label: "实义动词" }
            ]
          },
          {
            start: 5, end: 6, label: "宾语", phonetic: "/ˈdɛdɪkeɪtɪd/ /fʌndz/", translation: "专项资金",
            subComponents: [{ startIndex: 0, words: [{ word: "dedicated" }, { word: "funds" }] }]
          },
          {
            start: 7, end: 11, label: "目的状语", phonetic: "/tuː/ /ɪmˈpruːv/ /ˈpʌblɪk/ /ˈtrænspɔːrt/ /ˈɪnfrəˌstrʌktʃər/", translation: "去改善公共交通基础设施",
            subComponents: [
              { startIndex: 0, words: [{ word: "to" }, { word: "improve" }] },
              { startIndex: 2, words: [{ word: "public" }, { word: "transport" }, { word: "infrastructure" }] }
            ]
          }
        ],
        analysis: [
          { type: "词汇解析", text: "allocate (分配，拨出) 是描述政府或企业资源调配的核心词汇。" },
          { type: "固定搭配", text: "public transport infrastructure (公共交通基础设施) 是雅思写作常考话题词汇。" }
        ]
      },
      {
        id: "gov_02",
        chinese: "实施这项政策旨在减轻低收入家庭的经济负担",
        english_full: "Implementing this policy is aimed at alleviating the financial burden on low-income families.",
        words: [
          { word: "Implementing" }, { word: "this" }, { word: "policy" }, { word: "is" }, { word: "aimed" }, { word: "at" },
          { word: "alleviating" }, { word: "the" }, { word: "financial" }, { word: "burden" }, { word: "on" }, { word: "low-income" }, { word: "families", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/ˈɪmplɪmɛntɪŋ/ /ðɪs/ /ˈpɒlɪsi/", translation: "实施这项政策",
            subComponents: [{ startIndex: 0, words: [{ word: "Implementing" }, { word: "this" }, { word: "policy" }] }]
          },
          {
            start: 3, end: 5, label: "谓语(被动)", phonetic: "/ɪz/ /eɪmd/ /æt/", translation: "旨在",
            subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "aimed" }, { word: "at" }] }]
          },
          {
            start: 6, end: 12, label: "宾语", phonetic: "/əˈliːvieɪtɪŋ/ /ðə/ /faɪˈnænʃəl/ /ˈbɜːrdən/ /ɒn/ /loʊ/-/ˈɪnkʌm/ /ˈfæmɪliz/", translation: "减轻低收入家庭的经济负担",
            subComponents: [
              { startIndex: 0, words: [{ word: "alleviating" }] },
              { startIndex: 1, words: [{ word: "the" }, { word: "financial" }, { word: "burden" }] },
              { startIndex: 4, words: [{ word: "on" }, { word: "low-income" }, { word: "families" }], label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "be aimed at doing sth 意为“旨在做某事”。注意 at 是介词，后接动名词。" },
          { type: "高级替换", text: "alleviate (减轻，缓解) 是 relieve 或 reduce 的高级学术替换词。" }
        ]
      },
      {
        id: "gov_03",
        chinese: "公民们敦促市政厅在城市规划方面提供更多透明度",
        english_full: "Citizens urge the city council to provide greater transparency regarding urban planning.",
        words: [
          { word: "Citizens" }, { word: "urge" }, { word: "the" }, { word: "city" }, { word: "council" },
          { word: "to" }, { word: "provide" }, { word: "greater" }, { word: "transparency" }, { word: "regarding" }, { word: "urban" }, { word: "planning", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 0, label: "主语", phonetic: "/ˈsɪtɪzənz/", translation: "公民们",
            subComponents: [{ startIndex: 0, words: [{ word: "Citizens" }] }]
          },
          {
            start: 1, end: 1, label: "谓语", phonetic: "/ɜːrdʒ/", translation: "敦促",
            subComponents: [{ startIndex: 0, words: [{ word: "urge" }] }]
          },
          {
            start: 2, end: 4, label: "宾语", phonetic: "/ðə/ /ˈsɪti/ /ˈkaʊnsəl/", translation: "市政厅",
            subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "city" }, { word: "council" }] }]
          },
          {
            start: 5, end: 8, label: "宾语补足语", phonetic: "/tuː/ /prəˈvaɪd/ /ˈgreɪtər/ /trænsˈpærənsi/", translation: "提供更多透明度",
            subComponents: [
              { startIndex: 0, words: [{ word: "to" }, { word: "provide" }] },
              { startIndex: 2, words: [{ word: "greater" }, { word: "transparency" }] }
            ]
          },
          {
            start: 9, end: 11, label: "状语", phonetic: "/rɪˈgɑːrdɪŋ/ /ˈɜːrbən/ /ˈplænɪŋ/", translation: "关于城市规划",
            subComponents: [
              { startIndex: 0, words: [{ word: "regarding" }] },
              { startIndex: 1, words: [{ word: "urban" }, { word: "planning" }] }
            ]
          }
        ],
        analysis: [
          { type: "句型结构", text: "urge sb to do sth 意为“强烈要求/敦促某人做某事”。" },
          { type: "介词用法", text: "regarding 是 formal 的介词，意为“关于，至于”，替换 about。" }
        ]
      },
      {
        id: "gov_04",
        chinese: "建设保障性住房是解决无家可归问题的重要一步",
        english_full: "Constructing affordable housing is a vital step towards addressing homelessness.",
        words: [
          { word: "Constructing" }, { word: "affordable" }, { word: "housing" }, { word: "is" }, { word: "a" }, { word: "vital" }, { word: "step" },
          { word: "towards" }, { word: "addressing" }, { word: "homelessness", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/kənˈstrʌktɪŋ/ /əˈfɔːrdəbəl/ /ˈhaʊzɪŋ/", translation: "建设保障性住房",
            subComponents: [{ startIndex: 0, words: [{ word: "Constructing" }, { word: "affordable" }, { word: "housing" }] }]
          },
          {
            start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是",
            subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
          },
          {
            start: 4, end: 6, label: "表语", phonetic: "/ə/ /ˈvaɪtəl/ /stɛp/", translation: "重要的一步",
            subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "vital" }, { word: "step" }] }]
          },
          {
            start: 7, end: 9, label: "定语/状语", phonetic: "/təˈwɔːrdz/ /əˈdrɛsɪŋ/ /ˈhoʊmləsnəs/", translation: "朝着解决无家可归问题",
            subComponents: [
              { startIndex: 0, words: [{ word: "towards" }] },
              { startIndex: 1, words: [{ word: "addressing" }, { word: "homelessness" }], label: "介词宾语" }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "affordable housing (经济适用房，保障性住房) 是社会政策常考词汇。" },
          { type: "语法重点", text: "a step towards doing sth (朝着做某事迈出的一步)，towards 是介词，后接动名词。" }
        ]
      },
      {
        id: "gov_05",
        chinese: "严格的环境法规已被颁布，以遏制工业污染",
        english_full: "Stringent environmental regulations have been enacted to curb industrial pollution.",
        words: [
          { word: "Stringent" }, { word: "environmental" }, { word: "regulations" }, { word: "have" }, { word: "been" }, { word: "enacted" },
          { word: "to" }, { word: "curb" }, { word: "industrial" }, { word: "pollution", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 2, label: "主语", phonetic: "/ˈstrɪndʒənt/ /ɪnˌvaɪrənˈmɛntəl/ /ˌrɛgjʊˈleɪʃənz/", translation: "严格的环境法规",
            subComponents: [{ startIndex: 0, words: [{ word: "Stringent" }, { word: "environmental" }, { word: "regulations" }] }]
          },
          {
            start: 3, end: 5, label: "谓语(被动)", phonetic: "/hæv/ /bɪn/ /ɪˈnæktɪd/", translation: "已经被颁布",
            subComponents: [
              { startIndex: 0, words: [{ word: "have" }, { word: "been" }], label: "助动词" },
              { startIndex: 2, words: [{ word: "enacted" }], label: "实义动词" }
            ]
          },
          {
            start: 6, end: 9, label: "目的状语", phonetic: "/tuː/ /kɜːrb/ /ɪnˈdʌstriəl/ /pəˈluːʃən/", translation: "以遏制工业污染",
            subComponents: [
              { startIndex: 0, words: [{ word: "to" }, { word: "curb" }] },
              { startIndex: 2, words: [{ word: "industrial" }, { word: "pollution" }] }
            ]
          }
        ],
        analysis: [
          { type: "高级词汇", text: "stringent (严格的，严厉的) 比 strict 更显高级；enact (颁布法规) 是法律类专业词汇。" },
          { type: "动词用法", text: "curb 意为“控制，遏制(不良事物)”，如 curb inflation / pollution。" }
        ]
      }
    ]
  },
  {
    id: "shopping_02",
    title: "商场与品牌 (Malls & Retail)",
    description: "雅思口语：描述购物体验、消费者心理与商业促销。",
    sentences: [
      {
        id: "shp_01",
        chinese: "由于大量的折扣，这家百货商场在这个周末挤满了寻找便宜货的购物者",
        english_full: "Due to massive discounts, the department store was packed with bargain hunters this weekend.",
        words: [
          { word: "Due" }, { word: "to" }, { word: "massive" }, { word: "discounts", punctuation: "," },
          { word: "the" }, { word: "department" }, { word: "store" }, { word: "was" }, { word: "packed" }, { word: "with" },
          { word: "bargain" }, { word: "hunters" }, { word: "this" }, { word: "weekend", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 3, label: "原因状语", phonetic: "/djuː/ /tuː/ /ˈmæsɪv/ /ˈdɪskaʊnts/", translation: "由于大量的折扣",
            subComponents: [{ startIndex: 0, words: [{ word: "Due" }, { word: "to" }, { word: "massive" }, { word: "discounts" }] }]
          },
          {
            start: 4, end: 6, label: "主语", phonetic: "/ðə/ /dɪˈpɑːrtmənt/ /stɔːr/", translation: "这家百货商场",
            subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "department" }, { word: "store" }] }]
          },
          {
            start: 7, end: 11, label: "系表/被动语态", phonetic: "/wɒz/ /pækt/ /wɪð/ /ˈbɑːrgɪn/ /ˈhʌntərz/", translation: "挤满了寻找便宜货的购物者",
            subComponents: [
              { startIndex: 0, words: [{ word: "was" }, { word: "packed" }, { word: "with" }] },
              { startIndex: 3, words: [{ word: "bargain" }, { word: "hunters" }] }
            ]
          },
          {
            start: 12, end: 13, label: "时间状语", phonetic: "/ðɪs/ /ˈwiːkɛnd/", translation: "在这个周末",
            subComponents: [{ startIndex: 0, words: [{ word: "this" }, { word: "weekend" }] }]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "be packed with... 意为“挤满了...”，是非常口语化且形象的表达。" },
          { type: "名词词组", text: "bargain hunter (到处寻找便宜货的人) 是购物话题中的常见词汇。" }
        ]
      },
      {
        id: "shp_02",
        chinese: "许多消费者容易受到巧妙的营销策略的影响而冲动购物",
        english_full: "Many consumers are susceptible to clever marketing strategies, leading to impulse buying.",
        words: [
          { word: "Many" }, { word: "consumers" }, { word: "are" }, { word: "susceptible" }, { word: "to" }, { word: "clever" }, { word: "marketing" }, { word: "strategies", punctuation: "," },
          { word: "leading" }, { word: "to" }, { word: "impulse" }, { word: "buying", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 1, label: "主语", phonetic: "/ˈmɛni/ /kənˈsjuːmərz/", translation: "许多消费者",
            subComponents: [{ startIndex: 0, words: [{ word: "Many" }, { word: "consumers" }] }]
          },
          {
            start: 2, end: 2, label: "系动词", phonetic: "/ɑːr/", translation: "是",
            subComponents: [{ startIndex: 0, words: [{ word: "are" }] }]
          },
          {
            start: 3, end: 7, label: "表语", phonetic: "/səˈsɛptəbəl/ /tuː/ /ˈklɛvər/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒiz/", translation: "容易受到巧妙的营销策略的影响的",
            subComponents: [
              { startIndex: 0, words: [{ word: "susceptible" }] },
              { startIndex: 1, words: [{ word: "to" }, { word: "clever" }, { word: "marketing" }, { word: "strategies" }] }
            ]
          },
          {
            start: 8, end: 11, label: "结果状语", phonetic: "/ˈliːdɪŋ/ /tuː/ /ˈɪmpʌls/ /ˈbaɪɪŋ/", translation: "导致了冲动购物",
            subComponents: [
              { startIndex: 0, words: [{ word: "leading" }, { word: "to" }] },
              { startIndex: 2, words: [{ word: "impulse" }, { word: "buying" }] }
            ]
          }
        ],
        analysis: [
          { type: "固定搭配", text: "be susceptible to (容易受...影响的) 是形容人心理或生理弱点的高级表达。" },
          { type: "核心词汇", text: "impulse buying (冲动购物) 在雅思口语 Part 3 或写作中讨论消费主义时必用。" }
        ]
      },
      {
        id: "shp_03",
        chinese: "实体店现在正融入互动式陈列，以提升顾客体验",
        english_full: "Brick-and-mortar stores are now incorporating interactive displays to enhance the customer experience.",
        words: [
          { word: "Brick-and-mortar" }, { word: "stores" }, { word: "are" }, { word: "now" }, { word: "incorporating" },
          { word: "interactive" }, { word: "displays" }, { word: "to" }, { word: "enhance" }, { word: "the" }, { word: "customer" }, { word: "experience", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 1, label: "主语", phonetic: "/brɪk-ænd-ˈmɔːrtər/ /stɔːrz/", translation: "实体店",
            subComponents: [{ startIndex: 0, words: [{ word: "Brick-and-mortar" }, { word: "stores" }] }]
          },
          {
            start: 2, end: 4, label: "谓语(现进)", phonetic: "/ɑːr/ /naʊ/ /ɪnˈkɔːrpəreɪtɪŋ/", translation: "现在正融入",
            subComponents: [
              { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
              { startIndex: 1, words: [{ word: "now" }], label: "状语" },
              { startIndex: 2, words: [{ word: "incorporating" }], label: "实义动词" }
            ]
          },
          {
            start: 5, end: 6, label: "宾语", phonetic: "/ˌɪntərˈæktɪv/ /dɪˈspleɪz/", translation: "互动式陈列",
            subComponents: [{ startIndex: 0, words: [{ word: "interactive" }, { word: "displays" }] }]
          },
          {
            start: 7, end: 11, label: "目的状语", phonetic: "/tuː/ /ɪnˈhæns/ /ðə/ /ˈkʌstəmər/ /ɪkˈspɪəriəns/", translation: "以提升顾客体验",
            subComponents: [
              { startIndex: 0, words: [{ word: "to" }, { word: "enhance" }] },
              { startIndex: 2, words: [{ word: "the" }, { word: "customer" }, { word: "experience" }] }
            ]
          }
        ],
        analysis: [
          { type: "专业词汇", text: "brick-and-mortar (由砖瓦建成的，即实体店的) 常用来与 online shopping 形成对比。" },
          { type: "搭配替换", text: "incorporate (包含，吸收，合并) 是 include 或 add 的高级替换。" }
        ]
      },
      {
        id: "shp_04",
        chinese: "她浏览了高端精品的走廊，欣赏着橱窗里陈列的最新系列",
        english_full: "She browsed through the aisles of the high-end boutique, admiring the latest collection on display.",
        words: [
          { word: "She" }, { word: "browsed" }, { word: "through" }, { word: "the" }, { word: "aisles" }, { word: "of" }, { word: "the" }, { word: "high-end" }, { word: "boutique", punctuation: "," },
          { word: "admiring" }, { word: "the" }, { word: "latest" }, { word: "collection" }, { word: "on" }, { word: "display", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 0, label: "主语", phonetic: "/ʃiː/", translation: "她",
            subComponents: [{ startIndex: 0, words: [{ word: "She" }] }]
          },
          {
            start: 1, end: 1, label: "谓语", phonetic: "/braʊzd/", translation: "浏览",
            subComponents: [{ startIndex: 0, words: [{ word: "browsed" }] }]
          },
          {
            start: 2, end: 8, label: "状语", phonetic: "/θruː/ /ðə/ /aɪlz/ /ɒv/ /ðə/ /haɪ/-/ɛnd/ /buːˈtiːk/", translation: "穿过高端精品店的走廊",
            subComponents: [
              { startIndex: 0, words: [{ word: "through" }, { word: "the" }, { word: "aisles" }] },
              { startIndex: 3, words: [{ word: "of" }, { word: "the" }, { word: "high-end" }, { word: "boutique" }], label: "后置定语" }
            ]
          },
          {
            start: 9, end: 14, label: "伴随状语", phonetic: "/ədˈmaɪərɪŋ/ /ðə/ /ˈleɪtɪst/ /kəˈlɛkʃən/ /ɒn/ /dɪˈspleɪ/", translation: "欣赏着展出的最新系列",
            subComponents: [
              { startIndex: 0, words: [{ word: "admiring" }] },
              { startIndex: 1, words: [{ word: "the" }, { word: "latest" }, { word: "collection" }] },
              { startIndex: 4, words: [{ word: "on" }, { word: "display" }], label: "后置定语" }
            ]
          }
        ],
        analysis: [
          { type: "词汇解析", text: "boutique 通常指卖流行服饰、珠宝等的高级小商店，比 shop 更精准。" },
          { type: "语法结构", text: "admiring... 是现在分词作伴随状语，表示动作与 browse 同时发生。" }
        ]
      },
      {
        id: "shp_05",
        chinese: "这种排队结账时的无缝体验极大提高了顾客的忠诚度",
        english_full: "This seamless checkout experience significantly boosts customer loyalty.",
        words: [
          { word: "This" }, { word: "seamless" }, { word: "checkout" }, { word: "experience" },
          { word: "significantly" }, { word: "boosts" }, { word: "customer" }, { word: "loyalty", punctuation: "." }
        ],
        components: [
          {
            start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ˈsiːmlɪs/ /ˈtʃɛkaʊt/ /ɪkˈspɪəriəns/", translation: "这种无缝的结账体验",
            subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "seamless" }, { word: "checkout" }, { word: "experience" }] }]
          },
          {
            start: 4, end: 4, label: "状语", phonetic: "/sɪgˈnɪfɪkəntli/", translation: "极大地",
            subComponents: [{ startIndex: 0, words: [{ word: "significantly" }] }]
          },
          {
            start: 5, end: 5, label: "谓语", phonetic: "/buːsts/", translation: "提高",
            subComponents: [{ startIndex: 0, words: [{ word: "boosts" }] }]
          },
          {
            start: 6, end: 7, label: "宾语", phonetic: "/ˈkʌstəmər/ /ˈlɔɪəlti/", translation: "顾客忠诚度",
            subComponents: [{ startIndex: 0, words: [{ word: "customer" }, { word: "loyalty" }] }]
          }
        ],
        analysis: [
          { type: "高级词汇", text: "seamless (无缝的) 常用于商业中形容流程顺畅、无阻碍的体验。" },
          { type: "常见搭配", text: "boost customer loyalty (提高客户忠诚度) 是经商类话题的黄金表达。" }
        ]
      }
    ]
  }
];
