export const extensions = {
  "dining_01": [
    {
      id: "din_s9",
      chinese: "这家由家族经营的餐馆世代以传承正宗的地区食谱而自豪",
      english_full: "The family-run trattoria takes pride in passing down authentic regional recipes for generations.",
      words: [
        { word: "The" }, { word: "family-run" }, { word: "trattoria" }, { word: "takes" }, { word: "pride" }, { word: "in" },
        { word: "passing" }, { word: "down" }, { word: "authentic" }, { word: "regional" }, { word: "recipes" }, { word: "for" }, { word: "generations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈfæmɪli-rʌn/ /trɑːˈtɔːriə/", translation: "这家家族经营的餐馆",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "family-run" }, { word: "trattoria" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/teɪks/ /praɪd/ /ɪn/", translation: "以为...自豪",
          subComponents: [
            { startIndex: 0, words: [{ word: "takes" }] },
            { startIndex: 1, words: [{ word: "pride" }] },
            { startIndex: 2, words: [{ word: "in" }] }
          ]
        },
        {
          start: 6, end: 10, label: "宾语(动名词)", phonetic: "/ˈpæsɪŋ/ /daʊn/ /ɔːˈθɛntɪk/ /ˈriːdʒənəl/ /ˈrɛsɪpiz/", translation: "传承正宗的地区食谱",
          subComponents: [
            { startIndex: 0, words: [{ word: "passing" }, { word: "down" }] },
            { startIndex: 2, words: [{ word: "authentic" }, { word: "regional" }, { word: "recipes" }] }
          ]
        },
        {
          start: 11, end: 12, label: "时间状语", phonetic: "/fɔːr/ /ˌdʒɛnəˈreɪʃənz/", translation: "世代/好几代",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "generations" }] }]
        }
      ],
      analysis: [
        { type: "美食专属词汇", text: "trattoria (源自意大利语的“小餐馆，小饭馆”)；authentic (正宗的)；recipe (食谱)。" },
        { type: "短语积累", text: "take pride in doing sth (以做...为豪)；pass down (传承，传下去)。" }
      ]
    },
    {
      id: "din_s10",
      chinese: "厨师的招牌菜是鲜嫩的烤扇贝，搭配微辣的柑橘酱",
      english_full: "The chef's signature dish is succulent seared scallops accompanied by a tangy citrus glaze.",
      words: [
        { word: "The" }, { word: "chef's" }, { word: "signature" }, { word: "dish" }, { word: "is" }, { word: "succulent" }, { word: "seared" }, { word: "scallops" },
        { word: "accompanied" }, { word: "by" }, { word: "a" }, { word: "tangy" }, { word: "citrus" }, { word: "glaze", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ʃɛfs/ /ˈsɪgnətʃər/ /dɪʃ/", translation: "厨师的招牌菜",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chef's" }, { word: "signature" }, { word: "dish" }] }]
        },
        {
          start: 4, end: 4, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 5, end: 13, label: "表语", phonetic: "/ˈsʌkjʊlənt/ /sɪərd/ /ˈskɒləps/ /əˈkʌmpənid/ /baɪ/ /ə/ /ˈtæŋgi/ /ˈsɪtrəs/ /gleɪz/", translation: "伴有微辣柑橘酱的鲜嫩烤扇贝",
          subComponents: [
            { startIndex: 0, words: [{ word: "succulent" }, { word: "seared" }, { word: "scallops" }] },
            { startIndex: 3, words: [{ word: "accompanied" }, { word: "by" }, { word: "a" }, { word: "tangy" }, { word: "citrus" }, { word: "glaze" }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "极致口感词", text: "succulent (多汁的，鲜嫩的)；seared (表面烤焦/煎过的)；tangy (味道强烈的，酸爽的)。" },
        { type: "语法重点", text: "accompanied by (伴随着，搭配着) 是过去分词短语作后置定语。" }
      ]
    }
  ]
};