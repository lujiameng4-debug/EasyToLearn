export const extensions = {
  "hotel_01": [
    {
      id: "hotel_s11",
      chinese: "对于在您住宿期间经历的不达标的客房服务，我们深表歉意",
      english_full: "We sincerely apologize for the substandard room service you experienced during your stay.",
      words: [
        { word: "We" }, { word: "sincerely" }, { word: "apologize" }, { word: "for" }, { word: "the" }, { word: "substandard" }, { word: "room" }, { word: "service" },
        { word: "you" }, { word: "experienced" }, { word: "during" }, { word: "your" }, { word: "stay", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们" },
        { start: 1, end: 2, label: "谓语", phonetic: "/sɪnˈsɪərli/ /əˈpɒlədʒaɪz/", translation: "真诚地道歉" },
        { start: 3, end: 7, label: "原因状语(介词宾语)", phonetic: "/fɔːr/ /ðə/ /sʌbˈstændərd/ /ruːm/ /ˈsɜːrvɪs/", translation: "为了这不达标的客房服务" },
        { start: 8, end: 12, label: "定语从句(省略that)", phonetic: "/juː/ /ɪkˈspɪəriənst/ /ˈdjʊərɪŋ/ /jʊər/ /steɪ/", translation: "您在住宿期间经历的" }
      ],
      analysis: [
        { type: "客服句型", text: "apologize for sth (为某事道歉)；substandard (不达标的，低于标准的)。" }
      ]
    },
    {
      id: "hotel_s12",
      chinese: "我们的精品酒店位于市中心，步行即可到达主要旅游景点",
      english_full: "Situated in the city center, our boutique hotel is within walking distance of major tourist attractions.",
      words: [
        { word: "Situated" }, { word: "in" }, { word: "the" }, { word: "city" }, { word: "center", punctuation: "," },
        { word: "our" }, { word: "boutique" }, { word: "hotel" }, { word: "is" }, { word: "within" }, { word: "walking" }, { word: "distance" },
        { word: "of" }, { word: "major" }, { word: "tourist" }, { word: "attractions", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "地点状语(过去分词短语)", phonetic: "/ˈsɪtʃueɪtɪd/ /ɪn/ /ðə/ /ˈsɪti/ /ˈsɛntər/", translation: "坐落于市中心" },
        { start: 5, end: 7, label: "主语", phonetic: "/aʊər/ /buːˈtiːk/ /hoʊˈtɛl/", translation: "我们的精品酒店" },
        { start: 8, end: 8, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 9, end: 15, label: "表语", phonetic: "/wɪˈðɪn/ /ˈwɔːkɪŋ/ /ˈdɪstəns/ /ɒv/ /ˈmeɪdʒər/ /ˈtʊərɪst/ /əˈtrækʃənz/", translation: "在主要旅游景点的步行距离之内" }
      ],
      analysis: [
        { type: "高分搭配", text: "situated in (坐落于) 作状语；be within walking distance of (在...的步行距离之内) 是极其地道的方位表达。" }
      ]
    },
    {
      id: "hotel_s13",
      chinese: "如果您希望延长住宿时间，请最迟在明早十点前通知前台",
      english_full: "If you wish to extend your stay, please notify the front desk by ten tomorrow morning at the latest.",
      words: [
        { word: "If" }, { word: "you" }, { word: "wish" }, { word: "to" }, { word: "extend" }, { word: "your" }, { word: "stay", punctuation: "," },
        { word: "please" }, { word: "notify" }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "by" }, { word: "ten" }, { word: "tomorrow" }, { word: "morning" }, { word: "at" }, { word: "the" }, { word: "latest", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "条件状语从句", phonetic: "/ɪf/ /juː/ /wɪʃ/ /tuː/ /ɪkˈstɛnd/ /jʊər/ /steɪ/", translation: "如果您希望延长您的住宿" },
        { start: 7, end: 8, label: "祈使句谓语", phonetic: "/pliːz/ /ˈnoʊtɪfaɪ/", translation: "请通知" },
        { start: 9, end: 11, label: "宾语", phonetic: "/ðə/ /frʌnt/ /dɛsk/", translation: "前台" },
        { start: 12, end: 18, label: "时间状语", phonetic: "/baɪ/ /tɛn/ /təˈmɒroʊ/ /ˈmɔːrnɪŋ/ /æt/ /ðə/ /ˈleɪtɪst/", translation: "最迟明早十点前" }
      ],
      analysis: [
        { type: "酒店用语", text: "extend one's stay (延长住宿)；notify the front desk (通知前台)；at the latest (最迟)。" }
      ]
    },
    {
      id: "hotel_s14",
      chinese: "出于安保原因，客人在办理入住时必须出示由政府签发的有效照片身份证件",
      english_full: "For security reasons, guests are required to present a valid government-issued photo ID upon check-in.",
      words: [
        { word: "For" }, { word: "security" }, { word: "reasons", punctuation: "," }, { word: "guests" }, { word: "are" }, { word: "required" },
        { word: "to" }, { word: "present" }, { word: "a" }, { word: "valid" }, { word: "government-issued" }, { word: "photo" }, { word: "ID" }, { word: "upon" }, { word: "check-in", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "原因状语", phonetic: "/fɔːr/ /sɪˈkjʊərɪti/ /ˈriːzənz/", translation: "出于安保原因" },
        { start: 3, end: 3, label: "主语", phonetic: "/gɛsts/", translation: "客人们" },
        { start: 4, end: 5, label: "谓语(被动)", phonetic: "/ɑːr/ /rɪˈkwaɪərd/", translation: "被要求" },
        { start: 6, end: 12, label: "宾补/动词不定式", phonetic: "/tuː/ /prɪˈzɛnt/ /ə/ /ˈvælɪd/ /ˈgʌvərnmənt-ˈɪʃuːd/ /ˈfoʊtoʊ/ /aɪ-diː/", translation: "去出示一张有效的政府签发的照片ID" },
        { start: 13, end: 14, label: "时间状语", phonetic: "/əˈpɒn/ /ˈtʃɛk-ɪn/", translation: "在办理入住时" }
      ],
      analysis: [
        { type: "前台标准用语", text: "present a valid ID (出示有效证件)；upon check-in (在办理入住时，upon = on，表示“一...就...”)。" }
      ]
    },
    {
      id: "hotel_s15",
      chinese: "每日的客房保洁服务已包含在您的房费内，无需额外付费",
      english_full: "Daily housekeeping service is included in your room rate at no additional charge.",
      words: [
        { word: "Daily" }, { word: "housekeeping" }, { word: "service" }, { word: "is" }, { word: "included" },
        { word: "in" }, { word: "your" }, { word: "room" }, { word: "rate" }, { word: "at" }, { word: "no" }, { word: "additional" }, { word: "charge", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ˈdeɪli/ /ˈhaʊsˌkiːpɪŋ/ /ˈsɜːrvɪs/", translation: "每日的客房保洁服务" },
        { start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɪz/ /ɪnˈkluːdɪd/", translation: "被包含在" },
        { start: 5, end: 8, label: "地点/范围状语", phonetic: "/ɪn/ /jʊər/ /ruːm/ /reɪt/", translation: "在您的房费中" },
        { start: 9, end: 12, label: "方式状语", phonetic: "/æt/ /noʊ/ /əˈdɪʃənəl/ /tʃɑːrdʒ/", translation: "以没有额外费用的方式" }
      ],
      analysis: [
        { type: "费用表达", text: "room rate (房费)；at no additional charge (无需额外付费) 是极度常见的商业说明表达。" }
      ]
    },
    {
      id: "hotel_s16",
      chinese: "这家五星级酒店拥有一个屋顶无边泳池，俯瞰着整个城市天际线",
      english_full: "The five-star hotel boasts a rooftop infinity pool overlooking the entire city skyline.",
      words: [
        { word: "The" }, { word: "five-star" }, { word: "hotel" }, { word: "boasts" }, { word: "a" }, { word: "rooftop" }, { word: "infinity" }, { word: "pool" },
        { word: "overlooking" }, { word: "the" }, { word: "entire" }, { word: "city" }, { word: "skyline", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /faɪv-stɑːr/ /hoʊˈtɛl/", translation: "这家五星级酒店" },
        { start: 3, end: 3, label: "谓语", phonetic: "/boʊsts/", translation: "拥有(引以为傲)" },
        { start: 4, end: 7, label: "宾语", phonetic: "/ə/ /ˈruːfˌtɒp/ /ɪnˈfɪnɪti/ /puːl/", translation: "一个屋顶无边泳池" },
        { start: 8, end: 12, label: "后置定语", phonetic: "/ˌoʊvərˈlʊkɪŋ/ /ði/ /ɪnˈtaɪər/ /ˈsɪti/ /ˈskaɪˌlaɪn/", translation: "俯瞰着整个城市天际线" }
      ],
      analysis: [
        { type: "酒店卖点", text: "boast (以拥有...而自豪) 用于描述酒店设施非常高级；infinity pool (无边泳池)；skyline (天际线)。" }
      ]
    },
    {
      id: "hotel_s17",
      chinese: "在您的卡上预扣的金额将在您退房后被释放",
      english_full: "The pre-authorization hold on your card will be released after your check-out.",
      words: [
        { word: "The" }, { word: "pre-authorization" }, { word: "hold" }, { word: "on" }, { word: "your" }, { word: "card" },
        { word: "will" }, { word: "be" }, { word: "released" }, { word: "after" }, { word: "your" }, { word: "check-out", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "主语", phonetic: "/ðə/ /pri-ˌɔːθəraɪˈzeɪʃən/ /hoʊld/ /ɒn/ /jʊər/ /kɑːrd/", translation: "在您卡上的预授权保留金额(预扣款)" },
        { start: 6, end: 8, label: "谓语(将来被动)", phonetic: "/wɪl/ /bi/ /rɪˈliːst/", translation: "将被释放" },
        { start: 9, end: 11, label: "时间状语", phonetic: "/ˈæftər/ /jʊər/ /ˈtʃɛk-aʊt/", translation: "在您的退房之后" }
      ],
      analysis: [
        { type: "财务名词", text: "pre-authorization hold (预授权扣款/冻结资金) 是酒店押金的标准英文说法；release (解冻，释放)。" }
      ]
    },
    {
      id: "hotel_s18",
      chinese: "客人可以每天早晨六点到十点在底楼大厅享用自助早餐",
      english_full: "Guests can enjoy a complimentary buffet breakfast in the ground floor lobby from six to ten every morning.",
      words: [
        { word: "Guests" }, { word: "can" }, { word: "enjoy" }, { word: "a" }, { word: "complimentary" }, { word: "buffet" }, { word: "breakfast" },
        { word: "in" }, { word: "the" }, { word: "ground" }, { word: "floor" }, { word: "lobby" }, { word: "from" }, { word: "six" }, { word: "to" }, { word: "ten" }, { word: "every" }, { word: "morning", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/gɛsts/", translation: "客人们" },
        { start: 1, end: 2, label: "谓语", phonetic: "/kæn/ /ɪnˈdʒɔɪ/", translation: "可以享用" },
        { start: 3, end: 6, label: "宾语", phonetic: "/ə/ /ˌkɒmplɪˈmɛntəri/ /bəˈfeɪ/ /ˈbrɛkfəst/", translation: "一顿免费的自助早餐" },
        { start: 7, end: 11, label: "地点状语", phonetic: "/ɪn/ /ðə/ /graʊnd/ /flɔːr/ /ˈlɒbi/", translation: "在底楼大厅" },
        { start: 12, end: 17, label: "时间状语", phonetic: "/frɒm/ /sɪks/ /tuː/ /tɛn/ /ˈɛvri/ /ˈmɔːrnɪŋ/", translation: "每天早晨六点到十点" }
      ],
      analysis: [
        { type: "酒店词汇", text: "complimentary (免费赠送的)；buffet breakfast (自助早餐)；ground floor (底楼，一楼)。" }
      ]
    },
    {
      id: "hotel_s19",
      chinese: "我们的礼宾团队随时为您安排交通、预订餐厅和规划行程",
      english_full: "Our concierge team is at your disposal to arrange transportation, book restaurants, and plan itineraries.",
      words: [
        { word: "Our" }, { word: "concierge" }, { word: "team" }, { word: "is" }, { word: "at" }, { word: "your" }, { word: "disposal" },
        { word: "to" }, { word: "arrange" }, { word: "transportation", punctuation: "," }, { word: "book" }, { word: "restaurants", punctuation: "," }, { word: "and" }, { word: "plan" }, { word: "itineraries", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/aʊər/ /kɒnˈsjɛrʒ/ /tiːm/", translation: "我们的礼宾团队" },
        { start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 4, end: 6, label: "表语", phonetic: "/æt/ /jʊər/ /dɪˈspoʊzəl/", translation: "任您差遣的" },
        { start: 7, end: 14, label: "目的状语", phonetic: "/tuː/ /əˈreɪndʒ/ /ˌtrænspɔːrˈteɪʃən/, /bʊk/ /ˈrɛstərənts/, /ænd/ /plæn/ /aɪˈtɪnərɛriz/", translation: "去安排交通，预订餐厅，以及规划行程" }
      ],
      analysis: [
        { type: "高端服务词", text: "concierge (礼宾部/礼宾员)；at one's disposal (任某人支配/随时为您服务)；itinerary (行程，路线)。" }
      ]
    },
    {
      id: "hotel_s20",
      chinese: "请注意，在整个建筑内，包括所有的阳台，都严格实行禁烟政策",
      english_full: "Please note that a strict no-smoking policy is enforced throughout the premises, including all balconies.",
      words: [
        { word: "Please" }, { word: "note" }, { word: "that" }, { word: "a" }, { word: "strict" }, { word: "no-smoking" }, { word: "policy" },
        { word: "is" }, { word: "enforced" }, { word: "throughout" }, { word: "the" }, { word: "premises", punctuation: "," }, { word: "including" }, { word: "all" }, { word: "balconies", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "祈使句谓语", phonetic: "/pliːz/ /noʊt/", translation: "请注意" },
        {
          start: 2, end: 14, label: "宾语从句", phonetic: "/ðæt/ /ə/ /strɪkt/ /noʊ-ˈsmoʊkɪŋ/ /ˈpɒlɪsi/ /ɪz/ /ɪnˈfɔːrst/ /θruːˈaʊt/ /ðə/ /ˈprɛmɪsɪz/, /ɪnˈkluːdɪŋ/ /ɔːl/ /ˈbælkəniz/", translation: "一项严格的禁烟政策在整个建筑内被强制执行，包含所有阳台",
          subComponents: [
            { start: 2, end: 2, label: "引导词" },
            { start: 3, end: 6, label: "(从)主" },
            { start: 7, end: 8, label: "(从)谓(被动)" },
            { start: 9, end: 11, label: "(从)状" },
            { start: 12, end: 14, label: "补充修饰" }
          ]
        }
      ],
      analysis: [
        { type: "规定用语", text: "enforce a policy (强制执行政策)；throughout the premises (在整个建筑/营业场所内) 是法律和商业通用的规范词。" }
      ]
    },
    {
      id: "hotel_s21",
      chinese: "任何由于疏忽而对酒店财产造成的损坏都将向客人的账户收取费用",
      english_full: "Any damage to hotel property caused by negligence will be charged to the guest's account.",
      words: [
        { word: "Any" }, { word: "damage" }, { word: "to" }, { word: "hotel" }, { word: "property" }, { word: "caused" }, { word: "by" }, { word: "negligence" },
        { word: "will" }, { word: "be" }, { word: "charged" }, { word: "to" }, { word: "the" }, { word: "guest's" }, { word: "account", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "主语", phonetic: "/ˈɛni/ /ˈdæmɪdʒ/ /tuː/ /hoʊˈtɛl/ /ˈprɒpərti/ /kɔːzd/ /baɪ/ /ˈnɛglɪdʒəns/", translation: "任何由疏忽引起的对酒店财产的损坏" },
        { start: 8, end: 10, label: "谓语", phonetic: "/wɪl/ /bi/ /tʃɑːrdʒd/", translation: "将被收费/记账" },
        { start: 11, end: 14, label: "方向状语", phonetic: "/tuː/ /ðə/ /gɛsts/ /əˈkaʊnt/", translation: "到客人的账户上" }
      ],
      analysis: [
        { type: "财务/责任句", text: "negligence (疏忽，大意)；be charged to an account (记在某人的账上)。" }
      ]
    },
    {
      id: "hotel_s22",
      chinese: "为了确保一个宁静的环境，请客人们在晚上十点后将噪音降到最低",
      english_full: "To ensure a tranquil environment, guests are requested to keep noise to a minimum after ten PM.",
      words: [
        { word: "To" }, { word: "ensure" }, { word: "a" }, { word: "tranquil" }, { word: "environment", punctuation: "," },
        { word: "guests" }, { word: "are" }, { word: "requested" }, { word: "to" }, { word: "keep" }, { word: "noise" }, { word: "to" }, { word: "a" }, { word: "minimum" }, { word: "after" }, { word: "ten" }, { word: "PM", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ə/ /ˈtræŋkwɪl/ /ɪnˈvaɪrənmənt/", translation: "为了确保一个宁静的环境" },
        { start: 5, end: 5, label: "主语", phonetic: "/gɛsts/", translation: "客人们" },
        { start: 6, end: 7, label: "谓语", phonetic: "/ɑːr/ /rɪˈkwɛstɪd/", translation: "被请求" },
        { start: 8, end: 16, label: "主语补足语", phonetic: "/tuː/ /kiːp/ /nɔɪz/ /tuː/ /ə/ /ˈmɪnɪməm/ /ˈæftər/ /tɛn/ /piː-ɛm/", translation: "去将噪音保持在最低水平在晚上十点后" }
      ],
      analysis: [
        { type: "礼貌请求", text: "are requested to (被要求...) 是一种十分礼貌和官方的委婉要求形式；keep... to a minimum (将...降至最低)。" }
      ]
    },
    {
      id: "hotel_s23",
      chinese: "行政套房的特色在于其宽敞的起居区以及一个配有按摩浴缸的私人露台",
      english_full: "The executive suite features a spacious living area and a private terrace equipped with a Jacuzzi.",
      words: [
        { word: "The" }, { word: "executive" }, { word: "suite" }, { word: "features" }, { word: "a" }, { word: "spacious" }, { word: "living" }, { word: "area" },
        { word: "and" }, { word: "a" }, { word: "private" }, { word: "terrace" }, { word: "equipped" }, { word: "with" }, { word: "a" }, { word: "Jacuzzi", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ði/ /ɪgˈzɛkjʊtɪv/ /swiːt/", translation: "行政套房" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "以...为特色，具备" },
        { start: 4, end: 15, label: "宾语(并列结构)", phonetic: "/ə/ /ˈspeɪʃəs/ /ˈlɪvɪŋ/ /ˈɛəriə/ /ænd/ /ə/ /ˈpraɪvət/ /ˈtɛrəs/ /ɪˈkwɪpt/ /wɪθ/ /ə/ /dʒəˈkuːzi/", translation: "宽敞起居区以及一个配有按摩浴缸的私人露台" }
      ],
      analysis: [
        { type: "酒店房型词汇", text: "executive suite (行政套房)；spacious (宽敞的)；terrace (露台)；Jacuzzi (按摩浴缸，詹库兹)。" }
      ]
    },
    {
      id: "hotel_s24",
      chinese: "我们的夜床服务提供诸如更换毛巾和摆放床铺等体贴的接触",
      english_full: "Our turndown service provides thoughtful touches such as replacing towels and preparing the bed for sleep.",
      words: [
        { word: "Our" }, { word: "turndown" }, { word: "service" }, { word: "provides" }, { word: "thoughtful" }, { word: "touches" },
        { word: "such" }, { word: "as" }, { word: "replacing" }, { word: "towels" }, { word: "and" }, { word: "preparing" }, { word: "the" }, { word: "bed" }, { word: "for" }, { word: "sleep", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/aʊər/ /ˈtɜːrnˌdaʊn/ /ˈsɜːrvɪs/", translation: "我们的夜床服务" },
        { start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供" },
        { start: 4, end: 15, label: "宾语", phonetic: "/ˈθɔːtfəl/ /ˈtʌtʃɪz/ /sʌtʃ/ /æz/ /rɪˈpleɪsɪŋ/ /ˈtaʊəlz/ /ænd/ /prɪˈpɛərɪŋ/ /ðə/ /bɛd/ /fɔːr/ /sliːp/", translation: "体贴的细节诸如替换毛巾和准备床铺以便睡眠" }
      ],
      analysis: [
        { type: "星级酒店特有词汇", text: "turndown service (夜床服务，即傍晚再次整理床铺)；thoughtful touches (体贴的细节/点缀)。" }
      ]
    },
    {
      id: "hotel_s25",
      chinese: "我们很遗憾地通知您，您所请求的房型在那些日期已被订满",
      english_full: "We regret to inform you that your requested room category is fully booked on those dates.",
      words: [
        { word: "We" }, { word: "regret" }, { word: "to" }, { word: "inform" }, { word: "you" },
        { word: "that" }, { word: "your" }, { word: "requested" }, { word: "room" }, { word: "category" }, { word: "is" }, { word: "fully" }, { word: "booked" }, { word: "on" }, { word: "those" }, { word: "dates", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们" },
        { start: 1, end: 1, label: "谓语", phonetic: "/rɪˈgrɛt/", translation: "遗憾" },
        { start: 2, end: 4, label: "宾语(动词不定式)", phonetic: "/tuː/ /ɪnˈfɔːrm/ /juː/", translation: "通知您" },
        {
          start: 5, end: 15, label: "宾语从句", phonetic: "/ðæt/ /jʊər/ /rɪˈkwɛstɪd/ /ruːm/ /ˈkætəˌgɔːri/ /ɪz/ /ˈfʊli/ /bʊkt/ /ɒn/ /ðoʊz/ /deɪts/", translation: "您要求的房间类别在那些日子被完全预订了",
          subComponents: [
            { start: 5, end: 5, label: "引导词" },
            { start: 6, end: 9, label: "(从)主" },
            { start: 10, end: 12, label: "(从)谓(被动)" },
            { start: 13, end: 15, label: "(从)时间" }
          ]
        }
      ],
      analysis: [
        { type: "遗憾通知公式", text: "regret to do sth (遗憾地做...)，常接 tell/inform/say；fully booked (被完全订满)。" }
      ]
    },
    {
      id: "hotel_s26",
      chinese: "酒店穿梭巴士按照严格的时间表运行，在机场和正门之间往返",
      english_full: "The hotel shuttle operates on a strict schedule, running between the airport and the main entrance.",
      words: [
        { word: "The" }, { word: "hotel" }, { word: "shuttle" }, { word: "operates" }, { word: "on" }, { word: "a" }, { word: "strict" }, { word: "schedule", punctuation: "," },
        { word: "running" }, { word: "between" }, { word: "the" }, { word: "airport" }, { word: "and" }, { word: "the" }, { word: "main" }, { word: "entrance", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/ /ˈʃʌtəl/", translation: "酒店穿梭巴士" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒpəˌreɪts/", translation: "运营" },
        { start: 4, end: 7, label: "方式状语", phonetic: "/ɒn/ /ə/ /strɪkt/ /ˈskɛdʒuːl/", translation: "在一个严格的时间表上" },
        { start: 8, end: 15, label: "伴随状语", phonetic: "/ˈrʌnɪŋ/ /bɪˈtwiːn/ /ði/ /ˈɛərpɔːrt/ /ænd/ /ðə/ /meɪn/ /ˈɛntrəns/", translation: "在机场和正门之间行驶" }
      ],
      analysis: [
        { type: "设施服务", text: "shuttle (穿梭班车)；operate on a schedule (按照时间表运行)；main entrance (正门)。" }
      ]
    },
    {
      id: "hotel_s27",
      chinese: "在退房之前，请确保清空套房内的保险箱归还客房钥匙",
      english_full: "Prior to checking out, please ensure that you empty the in-suite safe and return your room keys.",
      words: [
        { word: "Prior" }, { word: "to" }, { word: "checking" }, { word: "out", punctuation: "," }, { word: "please" }, { word: "ensure" },
        { word: "that" }, { word: "you" }, { word: "empty" }, { word: "the" }, { word: "in-suite" }, { word: "safe" }, { word: "and" }, { word: "return" }, { word: "your" }, { word: "room" }, { word: "keys", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "时间状语", phonetic: "/ˈpraɪər/ /tuː/ /ˈtʃɛkɪŋ/ /aʊt/", translation: "在退房之前" },
        { start: 4, end: 5, label: "祈使句谓语", phonetic: "/pliːz/ /ɪnˈʃʊər/", translation: "请确保" },
        {
          start: 6, end: 16, label: "宾语从句", phonetic: "/ðæt/ /juː/ /ˈɛmpti/ /ði/ /ɪn-swiːt/ /seɪf/ /ænd/ /rɪˈtɜːrn/ /jʊər/ /ruːm/ /kiːz/", translation: "你清空套房内的保险箱并且归还你的房卡",
          subComponents: [
            { start: 6, end: 6, label: "引导词" },
            { start: 7, end: 7, label: "(从)主" },
            { start: 8, end: 8, label: "(从)谓1" },
            { start: 9, end: 11, label: "(从)宾1" },
            { start: 13, end: 13, label: "(从)谓2" },
            { start: 14, end: 16, label: "(从)宾2" }
          ]
        }
      ],
      analysis: [
        { type: "离店提示", text: "Prior to (在...之前)；empty (此处作动词，清空)；safe (此处作名词，保险箱)。" }
      ]
    },
    {
      id: "hotel_s28",
      chinese: "连续入住超过七晚的客人将自动获得水疗服务的九折优惠",
      english_full: "Guests staying for more than seven consecutive nights will automatically receive a ten percent discount on spa services.",
      words: [
        { word: "Guests" }, { word: "staying" }, { word: "for" }, { word: "more" }, { word: "than" }, { word: "seven" }, { word: "consecutive" }, { word: "nights" },
        { word: "will" }, { word: "automatically" }, { word: "receive" }, { word: "a" }, { word: "ten" }, { word: "percent" }, { word: "discount" }, { word: "on" }, { word: "spa" }, { word: "services", punctuation: "." }
      ],
      components: [
        { start: 0, end: 7, label: "主语(含分词后置定语)", phonetic: "/gɛsts/ /ˈsteɪɪŋ/ /fɔːr/ /mɔːr/ /ðæn/ /ˈsɛvən/ /kənˈsɛkjʊtɪv/ /naɪts/", translation: "住宿超过连续七晚的客人" },
        { start: 8, end: 10, label: "谓语", phonetic: "/wɪl/ /ˌɔːtəˈmætɪkli/ /rɪˈsiːv/", translation: "将自动收到" },
        { start: 11, end: 17, label: "宾语", phonetic: "/ə/ /tɛn/ /pərˈsɛnt/ /ˈdɪskaʊnt/ /ɒn/ /spɑː/ /ˈsɜːrvɪsɪz/", translation: "一个关于水疗服务的10%折扣" }
      ],
      analysis: [
        { type: "商务优惠", text: "consecutive (连续的)；discount on (在...方面的折扣)；spa services (水疗/温泉服务)。" }
      ]
    },
    {
      id: "hotel_s29",
      chinese: "我们的客房送餐服务实行二十四小时全天候运营，以迎合来自不同时区的客人",
      english_full: "Our in-room dining operates around the clock to cater to guests arriving from different time zones.",
      words: [
        { word: "Our" }, { word: "in-room" }, { word: "dining" }, { word: "operates" }, { word: "around" }, { word: "the" }, { word: "clock" },
        { word: "to" }, { word: "cater" }, { word: "to" }, { word: "guests" }, { word: "arriving" }, { word: "from" }, { word: "different" }, { word: "time" }, { word: "zones", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/aʊər/ /ɪn-ruːm/ /ˈdaɪnɪŋ/", translation: "我们的客房用餐" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒpəˌreɪts/", translation: "运营" },
        { start: 4, end: 6, label: "时间状语", phonetic: "/əˈraʊnd/ /ðə/ /klɒk/", translation: "全天候(24小时)" },
        { start: 7, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈkeɪtər/ /tuː/ /gɛsts/ /əˈraɪvɪŋ/ /frɒm/ /ˈdɪfərənt/ /taɪm/ /zoʊnz/", translation: "为了迎合从不同时区到达的客人们" }
      ],
      analysis: [
        { type: "酒店高级短语", text: "around the clock (全天候) 替换 24 hours；cater to (迎合，满足...的需求)；in-room dining (客房送餐服务)。" }
      ]
    },
    {
      id: "hotel_s30",
      chinese: "对于在我们的舞厅举办的私人活动，请直接向酒店活动统筹经理咨询",
      english_full: "For private events hosted in our ballroom, please inquire directly with the hotel's event coordinator.",
      words: [
        { word: "For" }, { word: "private" }, { word: "events" }, { word: "hosted" }, { word: "in" }, { word: "our" }, { word: "ballroom", punctuation: "," },
        { word: "please" }, { word: "inquire" }, { word: "directly" }, { word: "with" }, { word: "the" }, { word: "hotel's" }, { word: "event" }, { word: "coordinator", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "对象状语", phonetic: "/fɔːr/ /ˈpraɪvət/ /ɪˈvɛnts/ /ˈhoʊstɪd/ /ɪn/ /aʊər/ /ˈbɔːlˌruːm/", translation: "关于在我们舞厅举办的私人活动" },
        { start: 7, end: 8, label: "祈使句谓语", phonetic: "/pliːz/ /ɪnˈkwaɪər/", translation: "请询问" },
        { start: 9, end: 9, label: "程度状语", phonetic: "/dɪˈrɛktli/", translation: "直接地" },
        { start: 10, end: 14, label: "方式状语", phonetic: "/wɪθ/ /ðə/ /hoʊˈtɛlz/ /ɪˈvɛnt/ /koʊˈɔːrdɪˌneɪtər/", translation: "和酒店活动统筹经理(交流)" }
      ],
      analysis: [
        { type: "宴会与活动词汇", text: "ballroom (宴会厅/舞厅)；inquire with sb (向某人咨询)；event coordinator (活动协调员/统筹)。" }
      ]
    }
  ]
};