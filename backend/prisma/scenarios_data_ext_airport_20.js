export const extensions = {
  "airport_01": [
    {
      id: "airport_s11",
      chinese: "转机乘客必须前往国际转机柜台办理登机手续",
      english_full: "Transit passengers must proceed to the international transfer desk for check-in.",
      words: [
        { word: "Transit" }, { word: "passengers" }, { word: "must" }, { word: "proceed" }, { word: "to" }, { word: "the" }, { word: "international" }, { word: "transfer" }, { word: "desk" }, { word: "for" }, { word: "check-in", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ˈtrænsɪt/ /ˈpæsəndʒərz/", translation: "转机乘客" },
        { start: 2, end: 3, label: "谓语", phonetic: "/mʌst/ /prəˈsiːd/", translation: "必须前往" },
        { start: 4, end: 8, label: "地点状语", phonetic: "/tuː/ /ði/ /ˌɪntərˈnæʃənəl/ /ˈtrænsfər/ /dɛsk/", translation: "去国际转机柜台" },
        { start: 9, end: 10, label: "目的状语", phonetic: "/fɔːr/ /ˈtʃɛk-ɪn/", translation: "为了办理登机" }
      ],
      analysis: [
        { type: "机场场景词", text: "transit passengers (转机旅客)；transfer desk (转机柜台)；check-in (值机/登机手续)。" },
        { type: "动作词汇", text: "proceed to (行进前往)，比 go to 更正式。" }
      ]
    },
    {
      id: "airport_s12",
      chinese: "任何无人看管的行李都将被安全人员没收并销毁",
      english_full: "Any unattended baggage will be confiscated and destroyed by security personnel.",
      words: [
        { word: "Any" }, { word: "unattended" }, { word: "baggage" }, { word: "will" }, { word: "be" }, { word: "confiscated" }, { word: "and" }, { word: "destroyed" }, { word: "by" }, { word: "security" }, { word: "personnel", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ˈɛni/ /ˌʌnəˈtɛndɪd/ /ˈbægɪdʒ/", translation: "任何无人看管的行李" },
        { start: 3, end: 7, label: "谓语(被动)", phonetic: "/wɪl/ /bi/ /ˈkɒnfɪskeɪtɪd/ /ænd/ /dɪˈstrɔɪd/", translation: "将被没收并销毁" },
        { start: 8, end: 10, label: "状语", phonetic: "/baɪ/ /sɪˈkjʊərɪti/ /ˌpɜːrsəˈnɛl/", translation: "被安全人员" }
      ],
      analysis: [
        { type: "广播高频句", text: "unattended (无人看管的) 是机场安全广播绝对高频词。" },
        { type: "高级词汇", text: "confiscate (没收，充公)；personnel (全体人员/员工)。" }
      ]
    },
    {
      id: "airport_s13",
      chinese: "超额预订的航班正在寻找愿意放弃座位的志愿者",
      english_full: "The overbooked flight is seeking volunteers willing to surrender their seats.",
      words: [
        { word: "The" }, { word: "overbooked" }, { word: "flight" }, { word: "is" }, { word: "seeking" }, { word: "volunteers" }, { word: "willing" }, { word: "to" }, { word: "surrender" }, { word: "their" }, { word: "seats", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ði/ /ˌoʊvərˈbʊkt/ /flaɪt/", translation: "超额预订的航班" },
        { start: 3, end: 4, label: "谓语", phonetic: "/ɪz/ /ˈsiːkɪŋ/", translation: "正在寻找" },
        { start: 5, end: 10, label: "宾语", phonetic: "/ˌvɒlənˈtɪərz/ /ˈwɪlɪŋ/ /tuː/ /səˈrɛndər/ /ðɛər/ /siːts/", translation: "愿意放弃他们座位的志愿者" }
      ],
      analysis: [
        { type: "场景热词", text: "overbook (超额预订) 是航空公司常见操作。" },
        { type: "高级表达", text: "surrender one's seat (放弃座位)，surrender 这里意为“交出、放弃”，比 give up 正式。" }
      ]
    },
    {
      id: "airport_s14",
      chinese: "严禁携带易燃液体通过安检检查站",
      english_full: "Carrying flammable liquids through the security checkpoint is strictly prohibited.",
      words: [
        { word: "Carrying" }, { word: "flammable" }, { word: "liquids" }, { word: "through" }, { word: "the" }, { word: "security" }, { word: "checkpoint" },
        { word: "is" }, { word: "strictly" }, { word: "prohibited", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "主语(动名词)", phonetic: "/ˈkæriɪŋ/ /ˈflæməbəl/ /ˈlɪkwɪdz/ /θruː/ /ðə/ /sɪˈkjʊərɪti/ /ˈtʃɛkpɔɪnt/", translation: "携带易燃液体通过安检站" },
        { start: 7, end: 9, label: "谓语(被动)", phonetic: "/ɪz/ /ˈstrɪktli/ /prəˈhɪbɪtɪd/", translation: "被严格禁止" }
      ],
      analysis: [
        { type: "安检词汇", text: "flammable liquids (易燃液体)；security checkpoint (安检站)。" },
        { type: "固定句式", text: "...is strictly prohibited (...是严禁的)。" }
      ]
    },
    {
      id: "airport_s15",
      chinese: "由于突发的机械故障，登机程序被暂时中止了",
      english_full: "The boarding process has been temporarily suspended due to a sudden mechanical failure.",
      words: [
        { word: "The" }, { word: "boarding" }, { word: "process" }, { word: "has" }, { word: "been" }, { word: "temporarily" }, { word: "suspended" },
        { word: "due" }, { word: "to" }, { word: "a" }, { word: "sudden" }, { word: "mechanical" }, { word: "failure", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈbɔːrdɪŋ/ /ˈprɒsɛs/", translation: "登机程序" },
        { start: 3, end: 6, label: "谓语(现完被动)", phonetic: "/hæz/ /bɪn/ /ˌtɛmpəˈrɛrɪli/ /səˈspɛndɪd/", translation: "已经被暂时中止了" },
        { start: 7, end: 12, label: "原因状语", phonetic: "/djuː/ /tuː/ /ə/ /ˈsʌdən/ /mɪˈkænɪkəl/ /ˈfeɪljər/", translation: "由于突发的机械故障" }
      ],
      analysis: [
        { type: "词汇用法", text: "suspend (暂停，中止)；mechanical failure (机械故障)。" }
      ]
    },
    {
      id: "airport_s16",
      chinese: "头等舱乘客可以专享机场内的豪华贵宾休息室",
      english_full: "First-class passengers have exclusive access to the luxury VIP lounge in the airport.",
      words: [
        { word: "First-class" }, { word: "passengers" }, { word: "have" }, { word: "exclusive" }, { word: "access" }, { word: "to" }, { word: "the" }, { word: "luxury" }, { word: "VIP" }, { word: "lounge" },
        { word: "in" }, { word: "the" }, { word: "airport", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/fɜːrst-klæs/ /ˈpæsəndʒərz/", translation: "头等舱乘客" },
        { start: 2, end: 2, label: "谓语", phonetic: "/hæv/", translation: "拥有" },
        { start: 3, end: 9, label: "宾语", phonetic: "/ɪkˈskluːsɪv/ /ˈæksɛs/ /tuː/ /ðə/ /ˈlʌkʃəri/ /viː-aɪ-piː/ /laʊndʒ/", translation: "对豪华贵宾室的专属访问权" },
        { start: 10, end: 12, label: "地点状语", phonetic: "/ɪn/ /ði/ /ˈɛərpɔːrt/", translation: "在机场内" }
      ],
      analysis: [
        { type: "搭配使用", text: "have exclusive access to (对...有专属访问/使用权) 是非常地道的高端商业表达。" }
      ]
    },
    {
      id: "airport_s17",
      chinese: "在强烈气流期间，空乘人员将停止提供餐饮服务",
      english_full: "The flight attendants will halt the catering service during severe turbulence.",
      words: [
        { word: "The" }, { word: "flight" }, { word: "attendants" }, { word: "will" }, { word: "halt" }, { word: "the" }, { word: "catering" }, { word: "service" },
        { word: "during" }, { word: "severe" }, { word: "turbulence", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /flaɪt/ /əˈtɛndənts/", translation: "空乘人员" },
        { start: 3, end: 4, label: "谓语", phonetic: "/wɪl/ /hɔːlt/", translation: "将停止" },
        { start: 5, end: 7, label: "宾语", phonetic: "/ðə/ /ˈkeɪtərɪŋ/ /ˈsɜːrvɪs/", translation: "餐饮服务" },
        { start: 8, end: 10, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /sɪˈvɪər/ /ˈtɜːrbjʊləns/", translation: "在强气流期间" }
      ],
      analysis: [
        { type: "航空专业词汇", text: "flight attendant (空乘人员)；catering service (餐饮服务)；severe turbulence (强烈气流/颠簸)。" }
      ]
    },
    {
      id: "airport_s18",
      chinese: "如果您丢失了登机牌，请立即前往服务台补办",
      english_full: "If you have lost your boarding pass, please proceed to the service desk immediately for a replacement.",
      words: [
        { word: "If" }, { word: "you" }, { word: "have" }, { word: "lost" }, { word: "your" }, { word: "boarding" }, { word: "pass", punctuation: "," },
        { word: "please" }, { word: "proceed" }, { word: "to" }, { word: "the" }, { word: "service" }, { word: "desk" }, { word: "immediately" }, { word: "for" }, { word: "a" }, { word: "replacement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "条件状语从句", phonetic: "/ɪf/ /juː/ /hæv/ /lɒst/ /jʊər/ /ˈbɔːrdɪŋ/ /pæs/", translation: "如果你丢失了你的登机牌"
        },
        { start: 7, end: 8, label: "祈使句谓语", phonetic: "/pliːz/ /prəˈsiːd/", translation: "请前往" },
        { start: 9, end: 12, label: "地点状语", phonetic: "/tuː/ /ðə/ /ˈsɜːrvɪs/ /dɛsk/", translation: "去服务台" },
        { start: 13, end: 13, label: "时间状语", phonetic: "/ɪˈmiːdiətli/", translation: "立即" },
        { start: 14, end: 16, label: "目的状语", phonetic: "/fɔːr/ /ə/ /rɪˈpleɪsmənt/", translation: "为了一个替代品(补办)" }
      ],
      analysis: [
        { type: "实用短语", text: "boarding pass (登机牌)；replacement (替代物/补办件)。" }
      ]
    },
    {
      id: "airport_s19",
      chinese: "海关要求您申报任何价值超过一万美元的物品",
      english_full: "Customs requires you to declare any items exceeding ten thousand dollars in value.",
      words: [
        { word: "Customs" }, { word: "requires" }, { word: "you" }, { word: "to" }, { word: "declare" }, { word: "any" }, { word: "items" },
        { word: "exceeding" }, { word: "ten" }, { word: "thousand" }, { word: "dollars" }, { word: "in" }, { word: "value", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ˈkʌstəmz/", translation: "海关" },
        { start: 1, end: 1, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "要求" },
        { start: 2, end: 2, label: "宾语", phonetic: "/juː/", translation: "你" },
        { start: 3, end: 12, label: "宾语补足语", phonetic: "/tuː/ /dɪˈklɛər/ /ˈɛni/ /ˈaɪtəmz/ /ɪkˈsiːdɪŋ/ /tɛn/ /ˈθaʊzənd/ /ˈdɒlərz/ /ɪn/ /ˈvæljuː/", translation: "去申报任何价值超过一万刀的物品" }
      ],
      analysis: [
        { type: "出入境词汇", text: "Customs (海关，作名词通常带s)；declare (申报)；exceed (超过)。" }
      ]
    },
    {
      id: "airport_s20",
      chinese: "由于大雾导致能见度低，机场取消了所有早班航班",
      english_full: "The airport cancelled all morning flights due to low visibility caused by heavy fog.",
      words: [
        { word: "The" }, { word: "airport" }, { word: "cancelled" }, { word: "all" }, { word: "morning" }, { word: "flights" },
        { word: "due" }, { word: "to" }, { word: "low" }, { word: "visibility" }, { word: "caused" }, { word: "by" }, { word: "heavy" }, { word: "fog", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ði/ /ˈɛərpɔːrt/", translation: "机场" },
        { start: 2, end: 2, label: "谓语", phonetic: "/ˈkænsəld/", translation: "取消了" },
        { start: 3, end: 5, label: "宾语", phonetic: "/ɔːl/ /ˈmɔːrnɪŋ/ /flaɪts/", translation: "所有早班航班" },
        { start: 6, end: 13, label: "原因状语", phonetic: "/djuː/ /tuː/ /loʊ/ /ˌvɪzəˈbɪlɪti/ /kɔːzd/ /baɪ/ /ˈhɛvi/ /fɒg/", translation: "由于大雾导致的低能见度" }
      ],
      analysis: [
        { type: "气象/交通词汇", text: "visibility (能见度)；heavy fog (浓雾)。caused by heavy fog 是过去分词作定语修饰 visibility。" }
      ]
    },
    {
      id: "airport_s21",
      chinese: "超大件行李需要在特定的值机柜台进行处理",
      english_full: "Oversized baggage needs to be processed at a designated check-in counter.",
      words: [
        { word: "Oversized" }, { word: "baggage" }, { word: "needs" }, { word: "to" }, { word: "be" }, { word: "processed" },
        { word: "at" }, { word: "a" }, { word: "designated" }, { word: "check-in" }, { word: "counter", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ˌoʊvərˈsaɪzd/ /ˈbægɪdʒ/", translation: "超大件行李" },
        { start: 2, end: 5, label: "谓语", phonetic: "/niːdz/ /tuː/ /bi/ /ˈprɒsɛst/", translation: "需要被处理" },
        { start: 6, end: 10, label: "地点状语", phonetic: "/æt/ /ə/ /ˈdɛzɪgneɪtɪd/ /ˈtʃɛk-ɪn/ /ˈkaʊntər/", translation: "在一个指定的登机柜台" }
      ],
      analysis: [
        { type: "值机词汇", text: "oversized (超大的)；process (处理)；designated (指定的) 是很地道的官方用词。" }
      ]
    },
    {
      id: "airport_s22",
      chinese: "这架飞机现在准备起飞，请将您的座椅靠背调直",
      english_full: "The aircraft is now ready for takeoff, please return your seat back to the upright position.",
      words: [
        { word: "The" }, { word: "aircraft" }, { word: "is" }, { word: "now" }, { word: "ready" }, { word: "for" }, { word: "takeoff", punctuation: "," },
        { word: "please" }, { word: "return" }, { word: "your" }, { word: "seat" }, { word: "back" }, { word: "to" }, { word: "the" }, { word: "upright" }, { word: "position", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "第一分句", phonetic: "/ði/ /ˈɛərkræft/ /ɪz/ /naʊ/ /ˈrɛdi/ /fɔːr/ /ˈteɪkɒf/", translation: "飞机现在准备好起飞了" },
        { start: 7, end: 15, label: "祈使句", phonetic: "/pliːz/ /rɪˈtɜːrn/ /jʊər/ /siːt/ /bæk/ /tuː/ /ði/ /ˈʌpraɪt/ /pəˈzɪʃən/", translation: "请将您的座椅靠背归位到直立位置" }
      ],
      analysis: [
        { type: "客舱广播", text: "takeoff (起飞，名词)；return sth to the upright position (把...调直) 是标准的机上广播用语。" }
      ]
    },
    {
      id: "airport_s23",
      chinese: "到达的旅客可以在下层大厅的传送带上提取行李",
      english_full: "Arriving passengers can claim their luggage at the carousel in the lower arrivals hall.",
      words: [
        { word: "Arriving" }, { word: "passengers" }, { word: "can" }, { word: "claim" }, { word: "their" }, { word: "luggage" },
        { word: "at" }, { word: "the" }, { word: "carousel" }, { word: "in" }, { word: "the" }, { word: "lower" }, { word: "arrivals" }, { word: "hall", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/əˈraɪvɪŋ/ /ˈpæsəndʒərz/", translation: "到达的旅客" },
        { start: 2, end: 3, label: "谓语", phonetic: "/kæn/ /kleɪm/", translation: "可以提取" },
        { start: 4, end: 5, label: "宾语", phonetic: "/ðɛər/ /ˈlʌgɪdʒ/", translation: "他们的行李" },
        { start: 6, end: 13, label: "地点状语", phonetic: "/æt/ /ðə/ /ˌkærəˈsɛl/ /ɪn/ /ðə/ /ˈloʊər/ /əˈraɪvəlz/ /hɔːl/", translation: "在下层到达大厅的传送带处" }
      ],
      analysis: [
        { type: "到达场景词", text: "claim luggage (提取行李)；carousel (行李传送带)；arrivals hall (到达大厅)。" }
      ]
    },
    {
      id: "airport_s24",
      chinese: "作为安全预防措施，所有的液体容器不得超过100毫升",
      english_full: "As a security precaution, all liquid containers must not exceed one hundred milliliters.",
      words: [
        { word: "As" }, { word: "a" }, { word: "security" }, { word: "precaution", punctuation: "," },
        { word: "all" }, { word: "liquid" }, { word: "containers" }, { word: "must" }, { word: "not" }, { word: "exceed" }, { word: "one" }, { word: "hundred" }, { word: "milliliters", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "方式状语", phonetic: "/æz/ /ə/ /sɪˈkjʊərɪti/ /prɪˈkɔːʃən/", translation: "作为一种安全预防措施" },
        { start: 4, end: 6, label: "主语", phonetic: "/ɔːl/ /ˈlɪkwɪd/ /kənˈteɪnərz/", translation: "所有的液体容器" },
        { start: 7, end: 9, label: "谓语", phonetic: "/mʌst/ /nɒt/ /ɪkˈsiːd/", translation: "必须不超过" },
        { start: 10, end: 12, label: "宾语", phonetic: "/wʌn/ /ˈhʌndrəd/ /ˈmɪlɪˌliːtərz/", translation: "100毫升" }
      ],
      analysis: [
        { type: "词汇用法", text: "precaution (预防措施)；container (容器)；exceed (超过)。" }
      ]
    },
    {
      id: "airport_s25",
      chinese: "航空公司对由于天气恶劣而造成的任何延误不承担责任",
      english_full: "The airline is not liable for any delays caused by inclement weather conditions.",
      words: [
        { word: "The" }, { word: "airline" }, { word: "is" }, { word: "not" }, { word: "liable" }, { word: "for" }, { word: "any" }, { word: "delays" },
        { word: "caused" }, { word: "by" }, { word: "inclement" }, { word: "weather" }, { word: "conditions", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ði/ /ˈɛərlaɪn/", translation: "航空公司" },
        { start: 2, end: 2, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 3, end: 7, label: "表语+介词宾语", phonetic: "/nɒt/ /ˈlaɪəbəl/ /fɔːr/ /ˈɛni/ /dɪˈleɪz/", translation: "对任何延误不负责任" },
        { start: 8, end: 12, label: "后置定语", phonetic: "/kɔːzd/ /baɪ/ /ɪnˈklɛmənt/ /ˈwɛðər/ /kənˈdɪʃənz/", translation: "由恶劣天气条件造成的" }
      ],
      analysis: [
        { type: "免责声明", text: "be liable for (对...承担法律责任)；inclement weather (恶劣天气) 是非常正式的书面语。" }
      ]
    },
    {
      id: "airport_s26",
      chinese: "我们正经历强劲的逆风，这可能会稍微延长我们的飞行时间",
      english_full: "We are experiencing strong headwinds, which might slightly prolong our flight time.",
      words: [
        { word: "We" }, { word: "are" }, { word: "experiencing" }, { word: "strong" }, { word: "headwinds", punctuation: "," },
        { word: "which" }, { word: "might" }, { word: "slightly" }, { word: "prolong" }, { word: "our" }, { word: "flight" }, { word: "time", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主句主语", phonetic: "/wiː/", translation: "我们" },
        { start: 1, end: 2, label: "主句谓语", phonetic: "/ɑːr/ /ɪkˈspɪəriənsɪŋ/", translation: "正在经历" },
        { start: 3, end: 4, label: "主句宾语", phonetic: "/strɒŋ/ /ˈhɛdwɪndz/", translation: "强劲的逆风" },
        { start: 5, end: 11, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /maɪt/ /ˈslaɪtli/ /prəˈlɒŋ/ /aʊər/ /flaɪt/ /taɪm/", translation: "这可能稍微延长飞行时间" }
      ],
      analysis: [
        { type: "航空术语", text: "headwinds (逆风/顶风，相对的是 tailwinds 顺风)；prolong (延长，拉长)。" }
      ]
    },
    {
      id: "airport_s27",
      chinese: "常旅客可以利用专属通道加快安检过程",
      english_full: "Frequent flyers can utilize dedicated lanes to expedite the security screening process.",
      words: [
        { word: "Frequent" }, { word: "flyers" }, { word: "can" }, { word: "utilize" }, { word: "dedicated" }, { word: "lanes" },
        { word: "to" }, { word: "expedite" }, { word: "the" }, { word: "security" }, { word: "screening" }, { word: "process", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ˈfriːkwənt/ /ˈflaɪərz/", translation: "常旅客" },
        { start: 2, end: 3, label: "谓语", phonetic: "/kæn/ /ˈjuːtɪlaɪz/", translation: "能够利用" },
        { start: 4, end: 5, label: "宾语", phonetic: "/ˈdɛdɪkeɪtɪd/ /leɪnz/", translation: "专属/专用通道" },
        { start: 6, end: 11, label: "目的状语", phonetic: "/tuː/ /ˈɛkspɪdaɪt/ /ðə/ /sɪˈkjʊərɪti/ /ˈskriːnɪŋ/ /ˈprɒsɛs/", translation: "去加快安检过程" }
      ],
      analysis: [
        { type: "商务飞行词汇", text: "frequent flyer (常旅客)；utilize (利用) 替换 use；expedite (加快，加速) 是高级商务词。" }
      ]
    },
    {
      id: "airport_s28",
      chinese: "登机口在起飞前二十分钟关闭，恕不通融",
      english_full: "The boarding gate closes twenty minutes prior to departure, without exception.",
      words: [
        { word: "The" }, { word: "boarding" }, { word: "gate" }, { word: "closes" }, { word: "twenty" }, { word: "minutes" },
        { word: "prior" }, { word: "to" }, { word: "departure", punctuation: "," }, { word: "without" }, { word: "exception", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈbɔːrdɪŋ/ /geɪt/", translation: "登机口" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈkloʊzɪz/", translation: "关闭" },
        { start: 4, end: 8, label: "时间状语", phonetic: "/ˈtwɛnti/ /ˈmɪnɪts/ /ˈpraɪər/ /tuː/ /dɪˈpɑːrtʃər/", translation: "在起飞前二十分钟" },
        { start: 9, end: 10, label: "条件状语", phonetic: "/wɪˈðaʊt/ /ɪkˈsɛpʃən/", translation: "没有例外(恕不通融)" }
      ],
      analysis: [
        { type: "时间表达", text: "prior to (在...之前) 是比 before 更正式的用法；without exception (毫无例外)。" }
      ]
    },
    {
      id: "airport_s29",
      chinese: "我们即将降落，请确保所有随身行李已安全存放在头顶行李舱内",
      english_full: "We are approaching our descent, please ensure all carry-on luggage is securely stowed in the overhead compartments.",
      words: [
        { word: "We" }, { word: "are" }, { word: "approaching" }, { word: "our" }, { word: "descent", punctuation: "," },
        { word: "please" }, { word: "ensure" }, { word: "all" }, { word: "carry-on" }, { word: "luggage" }, { word: "is" }, { word: "securely" }, { word: "stowed" }, { word: "in" }, { word: "the" }, { word: "overhead" }, { word: "compartments", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "分句1", phonetic: "/wiː/ /ɑːr/ /əˈproʊtʃɪŋ/ /aʊər/ /dɪˈsɛnt/", translation: "我们正在接近降落(即：即将降落)" },
        { start: 5, end: 6, label: "祈使句谓语", phonetic: "/pliːz/ /ɪnˈʃʊər/", translation: "请确保" },
        { start: 7, end: 16, label: "宾语从句", phonetic: "/ɔːl/ /ˈkæri-ɒn/ /ˈlʌgɪdʒ/ /ɪz/ /sɪˈkjʊərli/ /stoʊd/ /ɪn/ /ði/ /ˈoʊvərhɛd/ /kəmˈpɑːrtmənts/", translation: "所有随身行李被安全存放在头顶行李舱内" }
      ],
      analysis: [
        { type: "广播句型", text: "descent (降落，下降)；carry-on luggage (随身行李)；stow (妥善放置)；overhead compartment (头顶行李舱)。" }
      ]
    },
    {
      id: "airport_s30",
      chinese: "免税店在香水和烈酒上为国际旅客提供了可观的折扣",
      english_full: "The duty-free shop offers substantial discounts on fragrances and spirits for international travelers.",
      words: [
        { word: "The" }, { word: "duty-free" }, { word: "shop" }, { word: "offers" }, { word: "substantial" }, { word: "discounts" },
        { word: "on" }, { word: "fragrances" }, { word: "and" }, { word: "spirits" }, { word: "for" }, { word: "international" }, { word: "travelers", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈdjuːti-friː/ /ʃɒp/", translation: "免税店" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供" },
        { start: 4, end: 9, label: "宾语及介词宾补", phonetic: "/səbˈstænʃəl/ /ˈdɪskaʊnts/ /ɒn/ /ˈfreɪgrənsɪz/ /ænd/ /ˈspɪrɪts/", translation: "在香水和烈酒上的可观折扣" },
        { start: 10, end: 12, label: "对象状语", phonetic: "/fɔːr/ /ˌɪntərˈnæʃənəl/ /ˈtrævələrz/", translation: "给国际旅客" }
      ],
      analysis: [
        { type: "免税店词汇", text: "duty-free (免税的)；substantial (可观的，大量的)；fragrance (香水)；spirits (烈酒)。" }
      ]
    }
  ]
};