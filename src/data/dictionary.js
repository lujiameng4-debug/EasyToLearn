export const dictionaryData = {
  "need": {
    phonetic: "/niːd/",
    translation: "v. 需要；必须 \n n. 需求；必要",
    synonyms: ["require", "demand", "want"],
    example: "You don't need to come if you don't want to. (如果你不想来就不必来。)"
  },
  "today": {
    phonetic: "/təˈdeɪ/",
    translation: "adv. 今天；在今日 \n n. 今天",
    synonyms: ["nowadays", "presently"],
    example: "What are you doing today? (你今天做什么？)"
  },
  "know": {
    phonetic: "/noʊ/",
    translation: "v. 知道；认识；懂得",
    synonyms: ["understand", "recognize", "comprehend"],
    example: "I know exactly what you mean. (我完全明白你的意思。)"
  },
  "already": {
    phonetic: "/ɔːlˈrɛdi/",
    translation: "adv. 已经；早已",
    synonyms: ["previously", "before now"],
    example: "I have already eaten my lunch. (我已经吃过午饭了。)"
  },
  "finished": {
    phonetic: "/ˈfɪnɪʃt/",
    translation: "v. 完成 (finish的过去式/过去分词) \n adj. 完结的",
    synonyms: ["completed", "done", "concluded"],
    example: "He finished his work early. (他早早地完成了工作。)",
    collocations: [
      { phrase: "be finished with", meaning: "做完..." },
      { phrase: "almost finished", meaning: "快完成了" }
    ]
  },
  "homework": {
    phonetic: "/ˈhoʊmwɜːrk/",
    translation: "n. 家庭作业；准备工作",
    synonyms: ["assignment", "coursework"],
    example: "Have you done your homework yet? (你做完作业了吗？)",
    collocations: [
      { phrase: "do one's homework", meaning: "做作业" },
      { phrase: "hand in homework", meaning: "交作业" }
    ]
  },
  "night": {
    phonetic: "/naɪt/",
    translation: "n. 夜晚；晚上",
    synonyms: ["evening", "dark"],
    example: "The stars are bright tonight. (今晚的星星很亮。)",
    collocations: [
      { phrase: "at night", meaning: "在晚上" },
      { phrase: "last night", meaning: "昨晚" }
    ]
  },
  "brother": {
    phonetic: "/ˈbrʌðər/",
    translation: "n. 兄弟；同胞",
    synonyms: ["sibling", "male sibling"],
    example: "My brother is older than me. (我哥哥比我大。)"
  },
  "london": {
    phonetic: "/ˈlʌndən/",
    translation: "n. 伦敦 (英国首都)",
    synonyms: ["-"],
    example: "She lives in central London. (她住在伦敦市中心。)"
  },
  "doctor": {
    phonetic: "/ˈdɒktər/",
    translation: "n. 医生；大夫；博士",
    synonyms: ["physician", "MD", "medical practitioner"],
    example: "You should see a doctor about that cough. (你应该找医生看看那个咳嗽。)"
  },
  "works": {
    phonetic: "/wɜːrks/",
    translation: "v. 工作；运作 (work的第三人称单数)",
    synonyms: ["operates", "functions", "labors"],
    example: "He works in a bank. (他在一家银行工作。)"
  },
  "doing": {
    phonetic: "/ˈduːɪŋ/",
    translation: "v. 做；干 (do的现在分词)",
    synonyms: ["performing", "acting", "executing"],
    example: "What are you doing here? (你在这里做什么？)"
  },
  "what": {
    phonetic: "/wʌt/",
    translation: "pron. 什么 \n det. 什么",
    synonyms: ["which"],
    example: "What is your name? (你叫什么名字？)"
  },
  "were": {
    phonetic: "/wɜːr/",
    translation: "v. 是 (are的过去式，用于第二人称或复数)",
    synonyms: ["was (单数形式)"],
    example: "They were at home yesterday. (他们昨天在家。)"
  },
  "you": {
    phonetic: "/juː/",
    translation: "pron. 你；你们",
    synonyms: ["ya", "yourself"],
    example: "Are you ready? (你准备好了吗？)"
  },
  "last": {
    phonetic: "/læst/",
    translation: "adj. 最后的；最近的 \n adv. 最后地",
    synonyms: ["final", "previous", "concluding"],
    example: "That was the last piece of cake. (那是最后一块蛋糕了。)"
  }
};

export const getWordDefinition = (word) => {
  // Remove punctuation and convert to lowercase for dictionary lookup
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  
  if (dictionaryData[cleanWord]) {
    return { 
      word: word.replace(/[^a-zA-Z]/g, ''), 
      ...dictionaryData[cleanWord] 
    };
  }
  
  // Fallback for words not explicitly mapped above
  return {
    word: word.replace(/[^a-zA-Z]/g, ''),
    phonetic: "/.../",
    translation: "（内置体验版词典暂未收录该词汇。未来的社区版本中将连接在线权威词典 API 获取完整释义。）",
    synonyms: ["-"],
    example: `This is an example sentence for the word "${word.replace(/[^a-zA-Z]/g, '')}".`,
    collocations: []
  };
};
