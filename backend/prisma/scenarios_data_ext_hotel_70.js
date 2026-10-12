export const extensions = {
  "hotel_01": [
    {
      id: "q_hotel_s100",
      chinese: "这家精品酒店拥有俯瞰整个城市天际线的全景套房，并提供全天候礼宾服务",
      english_full: "This boutique hotel boasts panoramic suites overlooking the city skyline and provides round-the-clock concierge service.",
      words: [
        { word: "This" }, { word: "boutique" }, { word: "hotel" }, { word: "boasts" }, { word: "panoramic" }, { word: "suites" }, { word: "overlooking" }, { word: "the" }, { word: "city" }, { word: "skyline" }, { word: "and" }, { word: "provides" }, { word: "round-the-clock" }, { word: "concierge" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /buːˈtiːk/ /hoʊˈtɛl/", translation: "这家精品酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "boutique" }, { word: "hotel" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/boʊsts/", translation: "拥有",
          subComponents: [{ startIndex: 0, words: [{ word: "boasts" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ˌpænəˈræmɪk/ /swiːts/ /ˌoʊvərˈlʊkɪŋ/ /ðə/ /ˈsɪti/ /ˈskaɪˌlaɪn/", translation: "俯瞰城市天际线的全景套房",
          subComponents: [{ startIndex: 0, words: [{ word: "panoramic" }, { word: "suites" }, { word: "overlooking" }, { word: "the" }, { word: "city" }, { word: "skyline" }] }]
        },
        {
          start: 10, end: 10, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 11, end: 11, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 12, end: 14, label: "宾语", phonetic: "/raʊnd-ðə-klɒk/ /ˈkɒnsiˌɛrʒ/ /ˈsɜːrvɪs/", translation: "全天候礼宾服务",
          subComponents: [{ startIndex: 0, words: [{ word: "round-the-clock" }, { word: "concierge" }, { word: "service", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "酒店词汇", text: "boutique hotel (精品酒店), panoramic (全景的), round-the-clock (全天候的), concierge (礼宾部)" }
      ]
    },
    {
      id: "q_hotel_s101",
      chinese: "鉴于您是我们的白金会员，前台已为您安排了提前入住",
      english_full: "In light of your Platinum membership, the front desk has arranged an early check-in for you.",
      words: [
        { word: "In" }, { word: "light" }, { word: "of" }, { word: "your" }, { word: "Platinum" }, { word: "membership", punctuation: "," }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "has" }, { word: "arranged" }, { word: "an" }, { word: "early" }, { word: "check-in" }, { word: "for" }, { word: "you", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "原因状语", phonetic: "/ɪn/ /laɪt/ /ɒv/ /jʊər/ /ˈplætɪnəm/ /ˈmɛmbərʃɪp/", translation: "鉴于您的白金会员身份",
          subComponents: [{ startIndex: 0, words: [{ word: "In" }, { word: "light" }, { word: "of" }, { word: "your" }, { word: "Platinum" }, { word: "membership", punctuation: "," }] }]
        },
        {
          start: 6, end: 8, label: "主语", phonetic: "/ðə/ /frʌnt/ /dɛsk/", translation: "前台",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "front" }, { word: "desk" }] }]
        },
        {
          start: 9, end: 10, label: "谓语(现完)", phonetic: "/hæz/ /əˈreɪndʒd/", translation: "已安排",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "arranged" }] }]
        },
        {
          start: 11, end: 15, label: "宾语", phonetic: "/ən/ /ˈɜːrli/ /ˈtʃɛk-ɪn/ /fɔːr/ /juː/", translation: "为您提前入住",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "early" }, { word: "check-in" }, { word: "for" }, { word: "you", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "会员服务", text: "in light of (鉴于), Platinum membership (白金会员), early check-in (提前入住)" }
      ]
    },
    {
      id: "q_hotel_s102",
      chinese: "延迟退房至下午两点需视当日房态而定，并可能产生额外费用",
      english_full: "A late checkout until two PM is subject to availability and may incur an additional fee.",
      words: [
        { word: "A" }, { word: "late" }, { word: "checkout" }, { word: "until" }, { word: "two" }, { word: "PM" }, { word: "is" }, { word: "subject" }, { word: "to" }, { word: "availability" }, { word: "and" }, { word: "may" }, { word: "incur" }, { word: "an" }, { word: "additional" }, { word: "fee", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ə/ /leɪt/ /ˈtʃɛk-aʊt/ /ʌnˈtɪl/ /tuː/ /piː-ɛm/", translation: "延迟至下午两点的退房",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "late" }, { word: "checkout" }, { word: "until" }, { word: "two" }, { word: "PM" }] }]
        },
        {
          start: 6, end: 6, label: "系动词", phonetic: "/ɪz/", translation: "需",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 7, end: 9, label: "表语", phonetic: "/ˈsʌbdʒɪkt/ /tuː/ /əˌveɪləˈbɪlɪti/", translation: "视房态而定",
          subComponents: [{ startIndex: 0, words: [{ word: "subject" }, { word: "to" }, { word: "availability" }] }]
        },
        {
          start: 10, end: 10, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 11, end: 15, label: "并列谓语", phonetic: "/meɪ/ /ɪnˈkɜːr/ /æn/ /əˈdɪʃənəl/ /fiː/", translation: "可能产生额外费用",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "incur" }, { word: "an" }, { word: "additional" }, { word: "fee", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "退房政策", text: "late checkout (延迟退房), subject to availability (视供应情况而定), incur a fee (产生费用)" }
      ]
    },
    {
      id: "q_hotel_s103",
      chinese: "我们的忠诚计划为常客提供房型升级、延迟退房及专属礼遇",
      english_full: "Our loyalty program offers frequent guests room upgrades, late checkouts, and exclusive privileges.",
      words: [
        { word: "Our" }, { word: "loyalty" }, { word: "program" }, { word: "offers" }, { word: "frequent" }, { word: "guests" }, { word: "room" }, { word: "upgrades", punctuation: "," }, { word: "late" }, { word: "checkouts", punctuation: "," }, { word: "and" }, { word: "exclusive" }, { word: "privileges", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/aʊər/ /ˈlɔɪəlti/ /ˈproʊɡræm/", translation: "我们的忠诚计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Our" }, { word: "loyalty" }, { word: "program" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 5, label: "间接宾语", phonetic: "/ˈfriːkwənt/ /gɛsts/", translation: "常客",
          subComponents: [{ startIndex: 0, words: [{ word: "frequent" }, { word: "guests" }] }]
        },
        {
          start: 6, end: 12, label: "直接宾语", phonetic: "/ruːm/ /ˈʌpɡreɪdz/ /leɪt/ /ˈtʃɛk-aʊts/ /ænd/ /ɪkˈskluːsɪv/ /ˈprɪvɪlɪdʒɪz/", translation: "房型升级、延迟退房及专属礼遇",
          subComponents: [{ startIndex: 0, words: [{ word: "room" }, { word: "upgrades", punctuation: "," }, { word: "late" }, { word: "checkouts", punctuation: "," }, { word: "and" }, { word: "exclusive" }, { word: "privileges", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "忠诚计划", text: "loyalty program (忠诚计划), room upgrade (房型升级), exclusive privileges (专属礼遇)" }
      ]
    },
    {
      id: "q_hotel_s104",
      chinese: "出于安保原因，客人在办理入住时必须出示由政府签发的有效照片身份证件",
      english_full: "For security reasons, guests are required to present a valid government-issued photo ID upon check-in.",
      words: [
        { word: "For" }, { word: "security" }, { word: "reasons", punctuation: "," }, { word: "guests" }, { word: "are" }, { word: "required" }, { word: "to" }, { word: "present" }, { word: "a" }, { word: "valid" }, { word: "government-issued" }, { word: "photo" }, { word: "ID" }, { word: "upon" }, { word: "check-in", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "原因状语", phonetic: "/fɔːr/ /sɪˈkjʊərɪti/ /ˈriːzənz/", translation: "出于安保原因",
          subComponents: [{ startIndex: 0, words: [{ word: "For" }, { word: "security" }, { word: "reasons", punctuation: "," }] }]
        },
        {
          start: 3, end: 3, label: "主语", phonetic: "/gɛsts/", translation: "客人",
          subComponents: [{ startIndex: 0, words: [{ word: "guests" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(被动)", phonetic: "/ɑːr/ /rɪˈkwaɪərd/", translation: "须",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "required" }] }]
        },
        {
          start: 6, end: 12, label: "不定式补语", phonetic: "/tuː/ /prɪˈzɛnt/ /ə/ /ˈvælɪd/ /ˈgʌvərnmənt-ˈɪʃuːd/ /ˈfoʊtoʊ/ /aɪ-diː/", translation: "出示有效政府签发照片证件",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "present" }, { word: "a" }, { word: "valid" }, { word: "government-issued" }, { word: "photo" }, { word: "ID" }] }]
        },
        {
          start: 13, end: 14, label: "时间状语", phonetic: "/əˈpɒn/ /ˈtʃɛk-ɪn/", translation: "在办理入住时",
          subComponents: [{ startIndex: 0, words: [{ word: "upon" }, { word: "check-in", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "入住规定", text: "government-issued photo ID (政府签发照片证件), upon check-in (办理入住时), required to (须)" }
      ]
    },
    {
      id: "q_hotel_s105",
      chinese: "每日客房保洁服务已包含在您的房费内，无需额外付费",
      english_full: "Daily housekeeping service is included in your room rate at no additional charge.",
      words: [
        { word: "Daily" }, { word: "housekeeping" }, { word: "service" }, { word: "is" }, { word: "included" }, { word: "in" }, { word: "your" }, { word: "room" }, { word: "rate" }, { word: "at" }, { word: "no" }, { word: "additional" }, { word: "charge", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈdeɪli/ /ˈhaʊskiːpɪŋ/ /ˈsɜːrvɪs/", translation: "每日客房保洁服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Daily" }, { word: "housekeeping" }, { word: "service" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɪz/ /ɪnˈkluːdɪd/", translation: "已包含",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "included" }] }]
        },
        {
          start: 5, end: 8, label: "地点状语", phonetic: "/ɪn/ /jʊər/ /ruːm/ /reɪt/", translation: "在房费内",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "your" }, { word: "room" }, { word: "rate" }] }]
        },
        {
          start: 9, end: 12, label: "方式状语", phonetic: "/æt/ /noʊ/ /əˈdɪʃənəl/ /tʃɑːrdʒ/", translation: "无需额外付费",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "no" }, { word: "additional" }, { word: "charge", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "房费说明", text: "housekeeping service (保洁服务), room rate (房费), at no additional charge (无需额外付费)" }
      ]
    },
    {
      id: "q_hotel_s106",
      chinese: "住客可在行政酒廊享用免费自助早餐及全天候茶点",
      english_full: "Guests may enjoy complimentary buffet breakfast and all-day refreshments in the executive lounge.",
      words: [
        { word: "Guests" }, { word: "may" }, { word: "enjoy" }, { word: "complimentary" }, { word: "buffet" }, { word: "breakfast" }, { word: "and" }, { word: "all-day" }, { word: "refreshments" }, { word: "in" }, { word: "the" }, { word: "executive" }, { word: "lounge", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/gɛsts/", translation: "住客",
          subComponents: [{ startIndex: 0, words: [{ word: "Guests" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/meɪ/ /ɪnˈdʒɔɪ/", translation: "可享用",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "enjoy" }] }]
        },
        {
          start: 3, end: 8, label: "宾语", phonetic: "/ˌkɒmplɪˈmɛntəri/ /bəˈfeɪ/ /ˈbrɛkfəst/ /ænd/ /ɔːl-deɪ/ /rɪˈfrɛʃmənts/", translation: "免费自助早餐及全天候茶点",
          subComponents: [{ startIndex: 0, words: [{ word: "complimentary" }, { word: "buffet" }, { word: "breakfast" }, { word: "and" }, { word: "all-day" }, { word: "refreshments" }] }]
        },
        {
          start: 9, end: 12, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ɪɡˈzɛkjʊtɪv/ /laʊndʒ/", translation: "在行政酒廊",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "executive" }, { word: "lounge", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行政礼遇", text: "executive lounge (行政酒廊), complimentary breakfast (免费早餐), all-day refreshments (全天候茶点)" }
      ]
    },
    {
      id: "q_hotel_s107",
      chinese: "若因超额预订导致无法安排原订房型，我们将提供等值或更高等级客房的补偿",
      english_full: "Should overbooking prevent us from honoring your original room type, we will provide compensation in the form of an equivalent or superior room.",
      words: [
        { word: "Should" }, { word: "overbooking" }, { word: "prevent" }, { word: "us" }, { word: "from" }, { word: "honoring" }, { word: "your" }, { word: "original" }, { word: "room" }, { word: "type", punctuation: "," }, { word: "we" }, { word: "will" }, { word: "provide" }, { word: "compensation" }, { word: "in" }, { word: "the" }, { word: "form" }, { word: "of" }, { word: "an" }, { word: "equivalent" }, { word: "or" }, { word: "superior" }, { word: "room", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 9, label: "条件从句", phonetic: "/ʃʊd/ /ˌoʊvərˈbʊkɪŋ/ /prɪˈvɛnt/ /ʌs/ /frɒm/ /ˈɒnərɪŋ/ /jʊər/ /əˈrɪdʒənəl/ /ruːm/ /taɪp/", translation: "若超额预订导致无法安排原订房型",
          subComponents: [{ startIndex: 0, words: [{ word: "Should" }, { word: "overbooking" }, { word: "prevent" }, { word: "us" }, { word: "from" }, { word: "honoring" }, { word: "your" }, { word: "original" }, { word: "room" }, { word: "type", punctuation: "," }] }]
        },
        {
          start: 10, end: 10, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "we" }] }]
        },
        {
          start: 11, end: 12, label: "谓语(将来)", phonetic: "/wɪl/ /prəˈvaɪd/", translation: "将提供",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "provide" }] }]
        },
        {
          start: 13, end: 22, label: "宾语", phonetic: "/ˌkɒmpənˈseɪʃən/ /ɪn/ /ðə/ /fɔːrm/ /ɒv/ /æn/ /ɪˈkwɪvələnt/ /ɔːr/ /suːˈpɪəriər/ /ruːm/", translation: "等值或更高等级客房的补偿",
          subComponents: [{ startIndex: 0, words: [{ word: "compensation" }, { word: "in" }, { word: "the" }, { word: "form" }, { word: "of" }, { word: "an" }, { word: "equivalent" }, { word: "or" }, { word: "superior" }, { word: "room", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "超额预订", text: "overbooking (超额预订), honor a reservation (履行预订), compensation (补偿)" }
      ]
    },
    {
      id: "q_hotel_s108",
      chinese: "相邻的连通房可通过内部门锁合并，非常适合家庭或团体旅客",
      english_full: "Adjacent connecting rooms can be combined via an interior lock, making them ideal for families or group travelers.",
      words: [
        { word: "Adjacent" }, { word: "connecting" }, { word: "rooms" }, { word: "can" }, { word: "be" }, { word: "combined" }, { word: "via" }, { word: "an" }, { word: "interior" }, { word: "lock", punctuation: "," }, { word: "making" }, { word: "them" }, { word: "ideal" }, { word: "for" }, { word: "families" }, { word: "or" }, { word: "group" }, { word: "travelers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/əˈdʒeɪsənt/ /kəˈnɛktɪŋ/ /ruːmz/", translation: "相邻连通房",
          subComponents: [{ startIndex: 0, words: [{ word: "Adjacent" }, { word: "connecting" }, { word: "rooms" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(被动)", phonetic: "/kæn/ /bi/ /kəmˈbaɪnd/", translation: "可通过…合并",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "be" }, { word: "combined" }] }]
        },
        {
          start: 6, end: 9, label: "方式状语", phonetic: "/ˈvaɪə/ /æn/ /ɪnˈtɪəriər/ /lɒk/", translation: "通过内部门锁",
          subComponents: [{ startIndex: 0, words: [{ word: "via" }, { word: "an" }, { word: "interior" }, { word: "lock", punctuation: "," }] }]
        },
        {
          start: 10, end: 17, label: "结果状语", phonetic: "/ˈmeɪkɪŋ/ /ðɛm/ /aɪˈdiːəl/ /fɔːr/ /ˈfæmɪliz/ /ɔːr/ /ɡruːp/ /ˈtrævələrz/", translation: "非常适合家庭或团体",
          subComponents: [{ startIndex: 0, words: [{ word: "making" }, { word: "them" }, { word: "ideal" }, { word: "for" }, { word: "families" }, { word: "or" }, { word: "group" }, { word: "travelers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "连通客房", text: "connecting rooms (连通房), interior lock (内部门锁), ideal for families (适合家庭)" }
      ]
    },
    {
      id: "q_hotel_s109",
      chinese: "本酒店实行全面禁烟政策，违规者将被处以清洁及通风费用",
      english_full: "This hotel maintains a strict smoke-free policy, and violators will be charged cleaning and ventilation fees.",
      words: [
        { word: "This" }, { word: "hotel" }, { word: "maintains" }, { word: "a" }, { word: "strict" }, { word: "smoke-free" }, { word: "policy", punctuation: "," }, { word: "and" }, { word: "violators" }, { word: "will" }, { word: "be" }, { word: "charged" }, { word: "cleaning" }, { word: "and" }, { word: "ventilation" }, { word: "fees", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðɪs/ /hoʊˈtɛl/", translation: "本酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "hotel" }] }]
        },
        {
          start: 2, end: 6, label: "谓语", phonetic: "/meɪnˈteɪnz/ /ə/ /strɪkt/ /smoʊk-friː/ /ˈpɒlɪsi/", translation: "实行全面禁烟政策",
          subComponents: [{ startIndex: 0, words: [{ word: "maintains" }, { word: "a" }, { word: "strict" }, { word: "smoke-free" }, { word: "policy", punctuation: "," }] }]
        },
        {
          start: 7, end: 7, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 8, end: 15, label: "并列句", phonetic: "/ˈvaɪəleɪtərz/ /wɪl/ /bi/ /tʃɑːrdʒd/ /ˈkliːnɪŋ/ /ænd/ /ˌvɛntɪˈleɪʃən/ /fiːz/", translation: "违规者将被收取清洁及通风费用",
          subComponents: [{ startIndex: 0, words: [{ word: "violators" }, { word: "will" }, { word: "be" }, { word: "charged" }, { word: "cleaning" }, { word: "and" }, { word: "ventilation" }, { word: "fees", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "禁烟政策", text: "smoke-free policy (禁烟政策), violator (违规者), ventilation fee (通风费用)" }
      ]
    },
    {
      id: "q_hotel_s110",
      chinese: "我们的水疗中心采用预约制，建议您至少提前四十八小时预订护理项目",
      english_full: "Our spa operates by appointment, and we recommend booking treatments at least forty-eight hours in advance.",
      words: [
        { word: "Our" }, { word: "spa" }, { word: "operates" }, { word: "by" }, { word: "appointment", punctuation: "," }, { word: "and" }, { word: "we" }, { word: "recommend" }, { word: "booking" }, { word: "treatments" }, { word: "at" }, { word: "least" }, { word: "forty-eight" }, { word: "hours" }, { word: "in" }, { word: "advance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/aʊər/ /spɑː/", translation: "我们的水疗中心",
          subComponents: [{ startIndex: 0, words: [{ word: "Our" }, { word: "spa" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒpəreɪts/", translation: "采用",
          subComponents: [{ startIndex: 0, words: [{ word: "operates" }] }]
        },
        {
          start: 3, end: 4, label: "方式状语", phonetic: "/baɪ/ /əˈpɔɪntmənt/", translation: "预约制",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "appointment", punctuation: "," }] }]
        },
        {
          start: 5, end: 5, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 6, end: 6, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "we" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/ˌrɛkəˈmɛnd/", translation: "建议",
          subComponents: [{ startIndex: 0, words: [{ word: "recommend" }] }]
        },
        {
          start: 8, end: 15, label: "宾语", phonetic: "/ˈbʊkɪŋ/ /ˈtriːtmənts/ /æt/ /liːst/ /ˈfɔːrti-eɪt/ /ˈaʊərz/ /ɪn/ /ədˈvɑːns/", translation: "至少提前四十八小时预订护理",
          subComponents: [{ startIndex: 0, words: [{ word: "booking" }, { word: "treatments" }, { word: "at" }, { word: "least" }, { word: "forty-eight" }, { word: "hours" }, { word: "in" }, { word: "advance", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "水疗预约", text: "by appointment (预约制), book treatments (预订护理), in advance (提前)" }
      ]
    },
    {
      id: "q_hotel_s111",
      chinese: "酒店会议中心配备可灵活分隔的宴会厅，最多可容纳八百名与会者",
      english_full: "The hotel convention center features a divisible ballroom that accommodates up to eight hundred attendees.",
      words: [
        { word: "The" }, { word: "hotel" }, { word: "convention" }, { word: "center" }, { word: "features" }, { word: "a" }, { word: "divisible" }, { word: "ballroom" }, { word: "that" }, { word: "accommodates" }, { word: "up" }, { word: "to" }, { word: "eight" }, { word: "hundred" }, { word: "attendees", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/ /kənˈvɛnʃən/ /ˈsɛntər/", translation: "酒店会议中心",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hotel" }, { word: "convention" }, { word: "center" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "配备",
          subComponents: [{ startIndex: 0, words: [{ word: "features" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ə/ /dɪˈvɪzəbəl/ /ˈbɔːlˌruːm/", translation: "可灵活分隔的宴会厅",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "divisible" }, { word: "ballroom" }] }]
        },
        {
          start: 8, end: 14, label: "定语从句", phonetic: "/ðæt/ /əˈkɒmədeɪts/ /ʌp/ /tuː/ /ˈeɪt/ /ˈhaʊndrəd/ /əˈtɛndiz/", translation: "最多可容纳八百名与会者",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "accommodates" }, { word: "up" }, { word: "to" }, { word: "eight" }, { word: "hundred" }, { word: "attendees", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "会议设施", text: "convention center (会议中心), divisible ballroom (可分隔宴会厅), accommodate (容纳)" }
      ]
    },
    {
      id: "q_hotel_s112",
      chinese: "我们为在舞厅举办婚礼的宾客提供专属婚宴统筹与试菜安排",
      english_full: "We provide dedicated wedding coordination and menu tasting arrangements for guests hosting ceremonies in our ballroom.",
      words: [
        { word: "We" }, { word: "provide" }, { word: "dedicated" }, { word: "wedding" }, { word: "coordination" }, { word: "and" }, { word: "menu" }, { word: "tasting" }, { word: "arrangements" }, { word: "for" }, { word: "guests" }, { word: "hosting" }, { word: "ceremonies" }, { word: "in" }, { word: "our" }, { word: "ballroom", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 2, end: 8, label: "宾语", phonetic: "/ˈdɛdɪkeɪtɪd/ /ˈwɛdɪŋ/ /koʊˌɔːrdɪˈneɪʃən/ /ænd/ /ˈmɛnjuː/ /ˈteɪstɪŋ/ /əˈreɪndʒmənts/", translation: "专属婚宴统筹与试菜安排",
          subComponents: [{ startIndex: 0, words: [{ word: "dedicated" }, { word: "wedding" }, { word: "coordination" }, { word: "and" }, { word: "menu" }, { word: "tasting" }, { word: "arrangements" }] }]
        },
        {
          start: 9, end: 15, label: "对象状语", phonetic: "/fɔːr/ /gɛsts/ /ˈhoʊstɪŋ/ /ˈsɛrɪməniːz/ /ɪn/ /aʊər/ /ˈbɔːlˌruːm/", translation: "为在舞厅举办婚礼的宾客",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "guests" }, { word: "hosting" }, { word: "ceremonies" }, { word: "in" }, { word: "our" }, { word: "ballroom", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "婚宴服务", text: "wedding coordination (婚宴统筹), menu tasting (试菜), host a ceremony (举办仪式)" }
      ]
    },
    {
      id: "q_hotel_s113",
      chinese: "酒店已为行动不便的客人预留了配备无障碍设施的连通客房",
      english_full: "The hotel has reserved connecting rooms equipped with accessibility features for guests with mobility impairments.",
      words: [
        { word: "The" }, { word: "hotel" }, { word: "has" }, { word: "reserved" }, { word: "connecting" }, { word: "rooms" }, { word: "equipped" }, { word: "with" }, { word: "accessibility" }, { word: "features" }, { word: "for" }, { word: "guests" }, { word: "with" }, { word: "mobility" }, { word: "impairments", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/", translation: "酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hotel" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(现完)", phonetic: "/hæz/ /rɪˈzɜːrvd/", translation: "已预留",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "reserved" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/kəˈnɛktɪŋ/ /ruːmz/ /ɪˈkwɪpt/ /wɪθ/ /ˌæksɛsəˈbɪlɪti/ /ˈfiːtʃərz/", translation: "配备无障碍设施的连通客房",
          subComponents: [{ startIndex: 0, words: [{ word: "connecting" }, { word: "rooms" }, { word: "equipped" }, { word: "with" }, { word: "accessibility" }, { word: "features" }] }]
        },
        {
          start: 10, end: 14, label: "对象状语", phonetic: "/fɔːr/ /gɛsts/ /wɪθ/ /moʊˈbɪlɪti/ /ɪmˈpɛrmənts/", translation: "为行动不便的客人",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "guests" }, { word: "with" }, { word: "mobility" }, { word: "impairments", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "无障碍设施", text: "accessibility features (无障碍设施), mobility impairment (行动障碍), connecting rooms (连通客房)" }
      ]
    },
    {
      id: "q_hotel_s114",
      chinese: "本酒店实行宠物友好政策，但需提前登记并支付可退还的宠物押金",
      english_full: "This hotel maintains a pet-friendly policy, but advance registration and a refundable pet deposit are required.",
      words: [
        { word: "This" }, { word: "hotel" }, { word: "maintains" }, { word: "a" }, { word: "pet-friendly" }, { word: "policy", punctuation: "," }, { word: "but" }, { word: "advance" }, { word: "registration" }, { word: "and" }, { word: "a" }, { word: "refundable" }, { word: "pet" }, { word: "deposit" }, { word: "are" }, { word: "required", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主句", phonetic: "/ðɪs/ /hoʊˈtɛl/ /meɪnˈteɪnz/ /ə/ /pɛt-ˈfrɛndli/ /ˈpɒlɪsi/", translation: "本酒店实行宠物友好政策",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "hotel" }, { word: "maintains" }, { word: "a" }, { word: "pet-friendly" }, { word: "policy", punctuation: "," }] }]
        },
        {
          start: 6, end: 6, label: "连词", phonetic: "/bʌt/", translation: "但",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }] }]
        },
        {
          start: 7, end: 8, label: "主语", phonetic: "/ədˈvɑːns/ /ˌrɛdʒɪˈstreɪʃən/", translation: "提前登记",
          subComponents: [{ startIndex: 0, words: [{ word: "advance" }, { word: "registration" }] }]
        },
        {
          start: 9, end: 9, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 10, end: 13, label: "并列主语", phonetic: "/ə/ /rɪˈfʌndəbəl/ /pɛt/ /dɪˈpɒzɪt/", translation: "可退还宠物押金",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "refundable" }, { word: "pet" }, { word: "deposit" }] }]
        },
        {
          start: 14, end: 15, label: "谓语(被动)", phonetic: "/ɑːr/ /rɪˈkwaɪərd/", translation: "均为必需",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "required", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宠物政策", text: "pet-friendly policy (宠物友好政策), refundable deposit (可退还押金), advance registration (提前登记)" }
      ]
    },
    {
      id: "q_hotel_s115",
      chinese: "我们通过减少一次性塑料制品显著降低了酒店的碳足迹",
      english_full: "We have significantly reduced the hotel's carbon footprint by cutting down on single-use plastics.",
      words: [
        { word: "We" }, { word: "have" }, { word: "significantly" }, { word: "reduced" }, { word: "the" }, { word: "hotel's" }, { word: "carbon" }, { word: "footprint" }, { word: "by" }, { word: "cutting" }, { word: "down" }, { word: "on" }, { word: "single-use" }, { word: "plastics", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 3, label: "谓语(现完)", phonetic: "/hæv/ /ˌsɪɡnɪfɪkəntli/ /rɪˈdjuːst/", translation: "已显著降低",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "reduced" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /hoʊˈtɛlz/ /ˈkɑːrbən/ /ˈfʊtprɪnt/", translation: "酒店的碳足迹",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "hotel's" }, { word: "carbon" }, { word: "footprint" }] }]
        },
        {
          start: 8, end: 13, label: "方式状语", phonetic: "/baɪ/ /ˈkʌtɪŋ/ /daʊn/ /ɒn/ /ˈsɪŋɡəl-juːs/ /ˈplæstɪks/", translation: "通过减少一次性塑料",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "cutting" }, { word: "down" }, { word: "on" }, { word: "single-use" }, { word: "plastics", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "可持续运营", text: "carbon footprint (碳足迹), single-use plastics (一次性塑料), cut down on (减少)" }
      ]
    },
    {
      id: "q_hotel_s116",
      chinese: "智能客房系统允许客人通过语音指令调节灯光、温度及电动窗帘",
      english_full: "The smart room system allows guests to adjust lighting, temperature, and motorized curtains via voice commands.",
      words: [
        { word: "The" }, { word: "smart" }, { word: "room" }, { word: "system" }, { word: "allows" }, { word: "guests" }, { word: "to" }, { word: "adjust" }, { word: "lighting", punctuation: "," }, { word: "temperature", punctuation: "," }, { word: "and" }, { word: "motorized" }, { word: "curtains" }, { word: "via" }, { word: "voice" }, { word: "commands", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /smɑːrt/ /ruːm/ /ˈsɪstəm/", translation: "智能客房系统",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "smart" }, { word: "room" }, { word: "system" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈlaʊz/", translation: "允许",
          subComponents: [{ startIndex: 0, words: [{ word: "allows" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/gɛsts/", translation: "客人",
          subComponents: [{ startIndex: 0, words: [{ word: "guests" }] }]
        },
        {
          start: 6, end: 15, label: "宾补", phonetic: "/tuː/ /əˈdʒʌst/ /ˈlaɪtɪŋ/ /ˈtɛmpərətʃər/ /ænd/ /ˈmɔːtəraɪzd/ /ˈkɜːrtənz/ /ˈvaɪə/ /vɔɪs/ /kəˈmɑːndz/", translation: "通过语音指令调节灯光温度及电动窗帘",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "adjust" }, { word: "lighting", punctuation: "," }, { word: "temperature", punctuation: "," }, { word: "and" }, { word: "motorized" }, { word: "curtains" }, { word: "via" }, { word: "voice" }, { word: "commands", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "智能客房", text: "smart room system (智能客房系统), voice commands (语音指令), motorized curtains (电动窗帘)" }
      ]
    },
    {
      id: "q_hotel_s117",
      chinese: "免费机场穿梭巴士按每小时班次在航站楼与主大堂之间运行",
      english_full: "The complimentary airport shuttle runs on an hourly schedule between the terminal and the main lobby.",
      words: [
        { word: "The" }, { word: "complimentary" }, { word: "airport" }, { word: "shuttle" }, { word: "runs" }, { word: "on" }, { word: "an" }, { word: "hourly" }, { word: "schedule" }, { word: "between" }, { word: "the" }, { word: "terminal" }, { word: "and" }, { word: "the" }, { word: "main" }, { word: "lobby", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˌkɒmplɪˈmɛntəri/ /ˈɛərpɔːrt/ /ˈʃʌtəl/", translation: "免费机场穿梭巴士",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "complimentary" }, { word: "airport" }, { word: "shuttle" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rʌnz/", translation: "运行",
          subComponents: [{ startIndex: 0, words: [{ word: "runs" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/ɒn/ /æn/ /ˈaʊərli/ /ˈskɛdʒuːl/", translation: "按每小时班次",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "an" }, { word: "hourly" }, { word: "schedule" }] }]
        },
        {
          start: 9, end: 15, label: "路线状语", phonetic: "/bɪˈtwiːn/ /ðə/ /ˈtɜːrmɪnəl/ /ænd/ /ðə/ /meɪn/ /ˈlɒbi/", translation: "在航站楼与主大堂之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "the" }, { word: "terminal" }, { word: "and" }, { word: "the" }, { word: "main" }, { word: "lobby", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "交通接驳", text: "complimentary shuttle (免费穿梭巴士), hourly schedule (每小时班次), main lobby (主大堂)" }
      ]
    },
    {
      id: "q_hotel_s118",
      chinese: "代客泊车服务全天候可用，费用将直接记入您的房账",
      english_full: "Valet parking is available around the clock, and the fee will be posted directly to your room account.",
      words: [
        { word: "Valet" }, { word: "parking" }, { word: "is" }, { word: "available" }, { word: "around" }, { word: "the" }, { word: "clock", punctuation: "," }, { word: "and" }, { word: "the" }, { word: "fee" }, { word: "will" }, { word: "be" }, { word: "posted" }, { word: "directly" }, { word: "to" }, { word: "your" }, { word: "room" }, { word: "account", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈvæleɪ/ /ˈpɑːrkɪŋ/", translation: "代客泊车",
          subComponents: [{ startIndex: 0, words: [{ word: "Valet" }, { word: "parking" }] }]
        },
        {
          start: 2, end: 2, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 3, end: 6, label: "表语", phonetic: "/əˈveɪləbəl/ /əˈraʊnd/ /ðə/ /klɒk/", translation: "全天候可用",
          subComponents: [{ startIndex: 0, words: [{ word: "available" }, { word: "around" }, { word: "the" }, { word: "clock", punctuation: "," }] }]
        },
        {
          start: 7, end: 7, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 8, end: 17, label: "并列句", phonetic: "/ðə/ /fiː/ /wɪl/ /bi/ /ˈpoʊstɪd/ /dɪˈrɛktli/ /tuː/ /jʊər/ /ruːm/ /əˈkaʊnt/", translation: "费用将直接记入房账",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "fee" }, { word: "will" }, { word: "be" }, { word: "posted" }, { word: "directly" }, { word: "to" }, { word: "your" }, { word: "room" }, { word: "account", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "泊车服务", text: "valet parking (代客泊车), around the clock (全天候), post to account (记入账户)" }
      ]
    },
    {
      id: "q_hotel_s119",
      chinese: "当日急件洗衣服务保证在四小时内完成并送回您的客房",
      english_full: "Same-day express laundry service guarantees completion and delivery to your room within four hours.",
      words: [
        { word: "Same-day" }, { word: "express" }, { word: "laundry" }, { word: "service" }, { word: "guarantees" }, { word: "completion" }, { word: "and" }, { word: "delivery" }, { word: "to" }, { word: "your" }, { word: "room" }, { word: "within" }, { word: "four" }, { word: "hours", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/seɪm-deɪ/ /ɪkˈsprɛs/ /ˈlɔːndri/ /ˈsɜːrvɪs/", translation: "当日急件洗衣服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Same-day" }, { word: "express" }, { word: "laundry" }, { word: "service" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˌɡærənˈtiːz/", translation: "保证",
          subComponents: [{ startIndex: 0, words: [{ word: "guarantees" }] }]
        },
        {
          start: 5, end: 13, label: "宾语", phonetic: "/kəmˈpliːʃən/ /ænd/ /dɪˈlɪvəri/ /tuː/ /jʊər/ /ruːm/ /wɪˈðɪn/ /fɔːr/ /ˈaʊərz/", translation: "四小时内完成并送回客房",
          subComponents: [{ startIndex: 0, words: [{ word: "completion" }, { word: "and" }, { word: "delivery" }, { word: "to" }, { word: "your" }, { word: "room" }, { word: "within" }, { word: "four" }, { word: "hours", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "洗衣服务", text: "express laundry (急件洗衣), guarantee completion (保证完成), within four hours (四小时内)" }
      ]
    },
    {
      id: "q_hotel_s120",
      chinese: "商务中心提供高速打印、传真及视频会议设备租赁服务",
      english_full: "The business center offers high-speed printing, faxing, and videoconferencing equipment rental services.",
      words: [
        { word: "The" }, { word: "business" }, { word: "center" }, { word: "offers" }, { word: "high-speed" }, { word: "printing", punctuation: "," }, { word: "faxing", punctuation: "," }, { word: "and" }, { word: "videoconferencing" }, { word: "equipment" }, { word: "rental" }, { word: "services", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈbɪznəs/ /ˈsɛntər/", translation: "商务中心",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "business" }, { word: "center" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/haɪ-spiːd/ /ˈprɪntɪŋ/ /ˈfæksɪŋ/ /ænd/ /ˈvɪdioʊˌkɒnfərənsɪŋ/ /ɪˈkwɪpmənt/ /ˈrɛntəl/ /ˈsɜːrvɪsɪz/", translation: "高速打印、传真及视频会议设备租赁",
          subComponents: [{ startIndex: 0, words: [{ word: "high-speed" }, { word: "printing", punctuation: "," }, { word: "faxing", punctuation: "," }, { word: "and" }, { word: "videoconferencing" }, { word: "equipment" }, { word: "rental" }, { word: "services", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商务设施", text: "business center (商务中心), videoconferencing (视频会议), equipment rental (设备租赁)" }
      ]
    },
    {
      id: "q_hotel_s121",
      chinese: "全包式度假村房价已涵盖餐饮、非机动水上活动及每日娱乐节目",
      english_full: "The all-inclusive resort rate covers dining, non-motorized water sports, and daily entertainment programs.",
      words: [
        { word: "The" }, { word: "all-inclusive" }, { word: "resort" }, { word: "rate" }, { word: "covers" }, { word: "dining", punctuation: "," }, { word: "non-motorized" }, { word: "water" }, { word: "sports", punctuation: "," }, { word: "and" }, { word: "daily" }, { word: "entertainment" }, { word: "programs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ɔːl-ɪnˈkluːsɪv/ /rɪˈzɔːrt/ /reɪt/", translation: "全包式度假村房价",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "all-inclusive" }, { word: "resort" }, { word: "rate" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈkʌvərz/", translation: "涵盖",
          subComponents: [{ startIndex: 0, words: [{ word: "covers" }] }]
        },
        {
          start: 5, end: 12, label: "宾语", phonetic: "/ˈdaɪnɪŋ/ /nɒn-ˈmoʊtəraɪzd/ /ˈwɔːtər/ /spɔːrts/ /ænd/ /ˈdeɪli/ /ˌɛntərˈteɪnmənt/ /ˈproʊɡræmz/", translation: "餐饮、非机动水上活动及每日娱乐",
          subComponents: [{ startIndex: 0, words: [{ word: "dining", punctuation: "," }, { word: "non-motorized" }, { word: "water" }, { word: "sports", punctuation: "," }, { word: "and" }, { word: "daily" }, { word: "entertainment" }, { word: "programs", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "全包度假", text: "all-inclusive rate (全包房价), non-motorized water sports (非机动水上运动), entertainment programs (娱乐节目)" }
      ]
    },
    {
      id: "q_hotel_s122",
      chinese: "若在抵达前四十八小时内取消预订，将收取首晚房费作为取消费用",
      english_full: "Cancellations made within forty-eight hours of arrival will incur the first night's room charge as a penalty.",
      words: [
        { word: "Cancellations" }, { word: "made" }, { word: "within" }, { word: "forty-eight" }, { word: "hours" }, { word: "of" }, { word: "arrival" }, { word: "will" }, { word: "incur" }, { word: "the" }, { word: "first" }, { word: "night's" }, { word: "room" }, { word: "charge" }, { word: "as" }, { word: "a" }, { word: "penalty", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ˌkænsəˈleɪʃənz/ /meɪd/ /wɪˈðɪn/ /ˈfɔːrti-eɪt/ /ˈaʊərz/ /ɒv/ /əˈraɪvəl/", translation: "抵达前四十八小时内的取消",
          subComponents: [{ startIndex: 0, words: [{ word: "Cancellations" }, { word: "made" }, { word: "within" }, { word: "forty-eight" }, { word: "hours" }, { word: "of" }, { word: "arrival" }] }]
        },
        {
          start: 7, end: 8, label: "谓语(将来)", phonetic: "/wɪl/ /ɪnˈkɜːr/", translation: "将收取",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "incur" }] }]
        },
        {
          start: 9, end: 16, label: "宾语", phonetic: "/ðə/ /fɜːrst/ /naɪts/ /ruːm/ /tʃɑːrdʒ/ /æz/ /ə/ /ˈpɛnəlti/", translation: "首晚房费作为违约金",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "first" }, { word: "night's" }, { word: "room" }, { word: "charge" }, { word: "as" }, { word: "a" }, { word: "penalty", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "取消政策", text: "cancellation penalty (取消费用), first night's charge (首晚房费), within forty-eight hours (四十八小时内)" }
      ]
    },
    {
      id: "q_hotel_s123",
      chinese: "团体预订满十间客房即可享受会议室半价及欢迎晚宴优惠",
      english_full: "Group bookings of ten rooms or more qualify for half-price meeting rooms and a complimentary welcome dinner.",
      words: [
        { word: "Group" }, { word: "bookings" }, { word: "of" }, { word: "ten" }, { word: "rooms" }, { word: "or" }, { word: "more" }, { word: "qualify" }, { word: "for" }, { word: "half-price" }, { word: "meeting" }, { word: "rooms" }, { word: "and" }, { word: "a" }, { word: "complimentary" }, { word: "welcome" }, { word: "dinner", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ɡruːp/ /ˈbʊkɪŋz/ /ɒv/ /tɛn/ /ruːmz/ /ɔːr/ /mɔːr/", translation: "十间以上团体预订",
          subComponents: [{ startIndex: 0, words: [{ word: "Group" }, { word: "bookings" }, { word: "of" }, { word: "ten" }, { word: "rooms" }, { word: "or" }, { word: "more" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/ˈkwɒlɪfaɪ/", translation: "符合资格",
          subComponents: [{ startIndex: 0, words: [{ word: "qualify" }] }]
        },
        {
          start: 8, end: 16, label: "宾语", phonetic: "/fɔːr/ /hɑːf-praɪs/ /ˈmiːtɪŋ/ /ruːmz/ /ænd/ /ə/ /ˌkɒmplɪˈmɛntəri/ /ˈwɛlkəm/ /ˈdɪnər/", translation: "会议室半价及免费欢迎晚宴",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "half-price" }, { word: "meeting" }, { word: "rooms" }, { word: "and" }, { word: "a" }, { word: "complimentary" }, { word: "welcome" }, { word: "dinner", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "团体优惠", text: "group booking (团体预订), qualify for (符合…资格), welcome dinner (欢迎晚宴)" }
      ]
    },
    {
      id: "q_hotel_s124",
      chinese: "我们与贵公司签订的企业协议价含免费早餐及弹性取消条款",
      english_full: "The corporate negotiated rate with your company includes complimentary breakfast and flexible cancellation terms.",
      words: [
        { word: "The" }, { word: "corporate" }, { word: "negotiated" }, { word: "rate" }, { word: "with" }, { word: "your" }, { word: "company" }, { word: "includes" }, { word: "complimentary" }, { word: "breakfast" }, { word: "and" }, { word: "flexible" }, { word: "cancellation" }, { word: "terms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ðə/ /ˈkɔːrpərət/ /nɪˈɡoʊʃieɪtɪd/ /reɪt/ /wɪθ/ /jʊər/ /ˈkʌmpəni/", translation: "与贵公司签订的企业协议价",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "corporate" }, { word: "negotiated" }, { word: "rate" }, { word: "with" }, { word: "your" }, { word: "company" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/ɪnˈkluːdz/", translation: "含",
          subComponents: [{ startIndex: 0, words: [{ word: "includes" }] }]
        },
        {
          start: 8, end: 13, label: "宾语", phonetic: "/ˌkɒmplɪˈmɛntəri/ /ˈbrɛkfəst/ /ænd/ /ˈflɛksəbəl/ /ˌkænsəˈleɪʃən/ /tɜːmz/", translation: "免费早餐及弹性取消条款",
          subComponents: [{ startIndex: 0, words: [{ word: "complimentary" }, { word: "breakfast" }, { word: "and" }, { word: "flexible" }, { word: "cancellation" }, { word: "terms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "企业协议", text: "corporate negotiated rate (企业协议价), flexible cancellation (弹性取消), complimentary breakfast (免费早餐)" }
      ]
    },
    {
      id: "q_hotel_s125",
      chinese: "办理入住时需在信用卡上预授权一笔涵盖杂费额度的保证金",
      english_full: "Upon check-in, a pre-authorization hold covering incidental expenses must be placed on your credit card.",
      words: [
        { word: "Upon" }, { word: "check-in", punctuation: "," }, { word: "a" }, { word: "pre-authorization" }, { word: "hold" }, { word: "covering" }, { word: "incidental" }, { word: "expenses" }, { word: "must" }, { word: "be" }, { word: "placed" }, { word: "on" }, { word: "your" }, { word: "credit" }, { word: "card", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/əˈpɒn/ /ˈtʃɛk-ɪn/", translation: "办理入住时",
          subComponents: [{ startIndex: 0, words: [{ word: "Upon" }, { word: "check-in", punctuation: "," }] }]
        },
        {
          start: 2, end: 7, label: "主语", phonetic: "/ə/ /pri-ˌɔːθəraɪˈzeɪʃən/ /hoʊld/ /ˈkʌvərɪŋ/ /ɪnˈsɪdɛntəl/ /ɪkˈspɛnsɪz/", translation: "涵盖杂费的预授权保留金",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "pre-authorization" }, { word: "hold" }, { word: "covering" }, { word: "incidental" }, { word: "expenses" }] }]
        },
        {
          start: 8, end: 10, label: "谓语(被动)", phonetic: "/mʌst/ /bi/ /pleɪst/", translation: "必须被放置",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "placed" }] }]
        },
        {
          start: 11, end: 14, label: "地点状语", phonetic: "/ɒn/ /jʊər/ /ˈkrɛdɪt/ /kɑːrd/", translation: "于您的信用卡上",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "your" }, { word: "credit" }, { word: "card", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "预授权", text: "pre-authorization hold (预授权冻结), incidental expenses (杂费), place on credit card (在信用卡上预扣)" }
      ]
    },
    {
      id: "q_hotel_s126",
      chinese: "请在门外悬挂请勿打扰标牌，以确保保洁人员不会进入您的房间",
      english_full: "Please display the do-not-disturb sign on your door to ensure housekeeping staff do not enter your room.",
      words: [
        { word: "Please" }, { word: "display" }, { word: "the" }, { word: "do-not-disturb" }, { word: "sign" }, { word: "on" }, { word: "your" }, { word: "door" }, { word: "to" }, { word: "ensure" }, { word: "housekeeping" }, { word: "staff" }, { word: "do" }, { word: "not" }, { word: "enter" }, { word: "your" }, { word: "room", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "祈使谓语", phonetic: "/pliːz/ /dɪˈspleɪ/", translation: "请悬挂",
          subComponents: [{ startIndex: 0, words: [{ word: "Please" }, { word: "display" }] }]
        },
        {
          start: 2, end: 7, label: "宾语", phonetic: "/ðə/ /doʊ-nɒt-ˈdɪstɜːrb/ /saɪn/ /ɒn/ /jʊər/ /dɔːr/", translation: "请勿打扰标牌于门上",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "do-not-disturb" }, { word: "sign" }, { word: "on" }, { word: "your" }, { word: "door" }] }]
        },
        {
          start: 8, end: 9, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/", translation: "以确保",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }] }]
        },
        {
          start: 10, end: 16, label: "宾语从句", phonetic: "/ˈhaʊsˌkiːpɪŋ/ /stæf/ /duː/ /nɒt/ /ˈɛntər/ /jʊər/ /ruːm/", translation: "保洁人员不会进入房间",
          subComponents: [{ startIndex: 0, words: [{ word: "housekeeping" }, { word: "staff" }, { word: "do" }, { word: "not" }, { word: "enter" }, { word: "your" }, { word: "room", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客房隐私", text: "do-not-disturb sign (请勿打扰牌), housekeeping staff (保洁人员), display (悬挂/展示)" }
      ]
    },
    {
      id: "q_hotel_s127",
      chinese: "对于客房送餐送达延迟及食物温度不符，我们深表歉意并将全额退款",
      english_full: "We sincerely apologize for the delayed room service delivery and suboptimal food temperature, and will issue a full refund.",
      words: [
        { word: "We" }, { word: "sincerely" }, { word: "apologize" }, { word: "for" }, { word: "the" }, { word: "delayed" }, { word: "room" }, { word: "service" }, { word: "delivery" }, { word: "and" }, { word: "suboptimal" }, { word: "food" }, { word: "temperature", punctuation: "," }, { word: "and" }, { word: "will" }, { word: "issue" }, { word: "a" }, { word: "full" }, { word: "refund", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/sɪnˈsɪərli/ /əˈpɒlədʒaɪz/", translation: "深表歉意",
          subComponents: [{ startIndex: 0, words: [{ word: "sincerely" }, { word: "apologize" }] }]
        },
        {
          start: 3, end: 12, label: "原因状语", phonetic: "/fɔːr/ /ðə/ /dɪˈleɪd/ /ruːm/ /ˈsɜːrvɪs/ /dɪˈlɪvəri/ /ænd/ /sʌbˈɒptɪməl/ /fuːd/ /ˈtɛmpərətʃər/", translation: "送餐延迟及食物温度不佳",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "the" }, { word: "delayed" }, { word: "room" }, { word: "service" }, { word: "delivery" }, { word: "and" }, { word: "suboptimal" }, { word: "food" }, { word: "temperature", punctuation: "," }] }]
        },
        {
          start: 13, end: 13, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 14, end: 18, label: "并列谓语", phonetic: "/wɪl/ /ˈɪʃuː/ /ə/ /fʊl/ /ˈriːfʌnd/", translation: "将全额退款",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "issue" }, { word: "a" }, { word: "full" }, { word: "refund", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "投诉处理", text: "suboptimal (未达最佳的), room service delivery (客房送餐), issue a refund (退款)" }
      ]
    },
    {
      id: "q_hotel_s128",
      chinese: "我们已为您更换至远离电梯的安静楼层，并赠送一晚免费住宿以表歉意",
      english_full: "We have relocated you to a quiet floor away from the elevators and offered a complimentary night's stay as compensation.",
      words: [
        { word: "We" }, { word: "have" }, { word: "relocated" }, { word: "you" }, { word: "to" }, { word: "a" }, { word: "quiet" }, { word: "floor" }, { word: "away" }, { word: "from" }, { word: "the" }, { word: "elevators" }, { word: "and" }, { word: "offered" }, { word: "a" }, { word: "complimentary" }, { word: "night's" }, { word: "stay" }, { word: "as" }, { word: "compensation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语(现完)", phonetic: "/hæv/ /riːˈloʊkeɪtɪd/", translation: "已为您更换",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "relocated" }] }]
        },
        {
          start: 3, end: 11, label: "宾语", phonetic: "/juː/ /tuː/ /ə/ /ˈkwaɪət/ /flɔːr/ /əˈweɪ/ /frɒm/ /ðə/ /ˈɛlɪveɪtərz/", translation: "至远离电梯的安静楼层",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }, { word: "to" }, { word: "a" }, { word: "quiet" }, { word: "floor" }, { word: "away" }, { word: "from" }, { word: "the" }, { word: "elevators" }] }]
        },
        {
          start: 12, end: 12, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 13, end: 19, label: "并列谓语(现完)", phonetic: "/ˈɒfərd/ /ə/ /ˌkɒmplɪˈmɛntəri/ /naɪts/ /steɪ/ /æz/ /ˌkɒmpənˈseɪʃən/", translation: "赠送一晚免费住宿作补偿",
          subComponents: [{ startIndex: 0, words: [{ word: "offered" }, { word: "a" }, { word: "complimentary" }, { word: "night's" }, { word: "stay" }, { word: "as" }, { word: "compensation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "噪音投诉", text: "relocate (更换位置), away from elevators (远离电梯), complimentary night's stay (免费一晚住宿)" }
      ]
    },
    {
      id: "q_hotel_s129",
      chinese: "您遗留在餐厅的手提包已登记在失物招领处，可随时领取",
      english_full: "Your handbag left in the restaurant has been logged at lost and found and is available for collection at any time.",
      words: [
        { word: "Your" }, { word: "handbag" }, { word: "left" }, { word: "in" }, { word: "the" }, { word: "restaurant" }, { word: "has" }, { word: "been" }, { word: "logged" }, { word: "at" }, { word: "lost" }, { word: "and" }, { word: "found" }, { word: "and" }, { word: "is" }, { word: "available" }, { word: "for" }, { word: "collection" }, { word: "at" }, { word: "any" }, { word: "time", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/jʊər/ /ˈhændbæɡ/ /lɛft/ /ɪn/ /ðə/ /ˈrɛstərənt/", translation: "您遗留在餐厅的手提包",
          subComponents: [{ startIndex: 0, words: [{ word: "Your" }, { word: "handbag" }, { word: "left" }, { word: "in" }, { word: "the" }, { word: "restaurant" }] }]
        },
        {
          start: 6, end: 8, label: "谓语(现完被动)", phonetic: "/hæz/ /bɪn/ /lɒɡd/", translation: "已被登记",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "logged" }] }]
        },
        {
          start: 9, end: 12, label: "地点状语", phonetic: "/æt/ /lɒst/ /ænd/ /faʊnd/", translation: "在失物招领处",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "lost" }, { word: "and" }, { word: "found" }] }]
        },
        {
          start: 13, end: 13, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 14, end: 20, label: "并列谓语", phonetic: "/ɪz/ /əˈveɪləbəl/ /fɔːr/ /kəˈlɛkʃən/ /æt/ /ˈɛni/ /taɪm/", translation: "可随时领取",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "available" }, { word: "for" }, { word: "collection" }, { word: "at" }, { word: "any" }, { word: "time", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "失物招领", text: "lost and found (失物招领), log (登记), available for collection (可领取)" }
      ]
    },
    {
      id: "q_hotel_s130",
      chinese: "如需加床，请告知前台，我们将收取每晚固定费用并提供高品质寝具",
      english_full: "If you require an extra bed, please inform the front desk, and we will charge a fixed nightly fee and provide premium bedding.",
      words: [
        { word: "If" }, { word: "you" }, { word: "require" }, { word: "an" }, { word: "extra" }, { word: "bed", punctuation: "," }, { word: "please" }, { word: "inform" }, { word: "the" }, { word: "front" }, { word: "desk", punctuation: "," }, { word: "and" }, { word: "we" }, { word: "will" }, { word: "charge" }, { word: "a" }, { word: "fixed" }, { word: "nightly" }, { word: "fee" }, { word: "and" }, { word: "provide" }, { word: "premium" }, { word: "bedding", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "条件从句", phonetic: "/ɪf/ /juː/ /rɪˈkwaɪər/ /æn/ /ˈɛkstrə/ /bɛd/", translation: "如需加床",
          subComponents: [{ startIndex: 0, words: [{ word: "If" }, { word: "you" }, { word: "require" }, { word: "an" }, { word: "extra" }, { word: "bed", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "祈使谓语", phonetic: "/pliːz/ /ɪnˈfɔːrm/", translation: "请告知",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }, { word: "inform" }] }]
        },
        {
          start: 8, end: 10, label: "宾语", phonetic: "/ðə/ /frʌnt/ /dɛsk/", translation: "前台",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "front" }, { word: "desk", punctuation: "," }] }]
        },
        {
          start: 11, end: 11, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 12, end: 22, label: "并列谓语", phonetic: "/wiː/ /wɪl/ /tʃɑːrdʒ/ /ə/ /fɪkst/ /ˈnaɪtli/ /fiː/ /ænd/ /prəˈvaɪd/ /ˈpriːmiəm/ /ˈbɛdɪŋ/", translation: "我们将收取每晚固定费用并提供高品质寝具",
          subComponents: [{ startIndex: 0, words: [{ word: "we" }, { word: "will" }, { word: "charge" }, { word: "a" }, { word: "fixed" }, { word: "nightly" }, { word: "fee" }, { word: "and" }, { word: "provide" }, { word: "premium" }, { word: "bedding", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "加床服务", text: "extra bed (加床), nightly fee (每晚费用), premium bedding (高品质寝具)" }
      ]
    },
    {
      id: "q_hotel_s131",
      chinese: "海景房与城景房价差随季节波动，预订前请参阅最新价目表",
      english_full: "The rate differential between ocean-view and city-view rooms fluctuates seasonally; please consult the latest tariff before booking.",
      words: [
        { word: "The" }, { word: "rate" }, { word: "differential" }, { word: "between" }, { word: "ocean-view" }, { word: "and" }, { word: "city-view" }, { word: "rooms" }, { word: "fluctuates" }, { word: "seasonally", punctuation: ";" }, { word: "please" }, { word: "consult" }, { word: "the" }, { word: "latest" }, { word: "tariff" }, { word: "before" }, { word: "booking", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "主语", phonetic: "/ðə/ /reɪt/ /ˌdɪfəˈrɛnʃəl/ /bɪˈtwiːn/ /ˈoʊʃən-vjuː/ /ænd/ /ˈsɪti-vjuː/ /ruːmz/", translation: "海景房与城景房价差",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "rate" }, { word: "differential" }, { word: "between" }, { word: "ocean-view" }, { word: "and" }, { word: "city-view" }, { word: "rooms" }] }]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/ˈflʌktʃueɪts/ /ˈsiːzənəli/", translation: "随季节波动",
          subComponents: [{ startIndex: 0, words: [{ word: "fluctuates" }, { word: "seasonally", punctuation: ";" }] }]
        },
        {
          start: 10, end: 16, label: "祈使句", phonetic: "/pliːz/ /kənˈsʌlt/ /ðə/ /ˈleɪtɪst/ /ˈtærɪf/ /bɪˈfɔːr/ /ˈbʊkɪŋ/", translation: "预订前请参阅最新价目表",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }, { word: "consult" }, { word: "the" }, { word: "latest" }, { word: "tariff" }, { word: "before" }, { word: "booking", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "房型价差", text: "rate differential (价差), ocean-view (海景), tariff (价目表)" }
      ]
    },
    {
      id: "q_hotel_s132",
      chinese: "我们提供多种枕头选择，包括记忆棉、羽绒及低过敏性乳胶枕",
      english_full: "We offer a pillow menu featuring memory foam, down, and hypoallergenic latex options.",
      words: [
        { word: "We" }, { word: "offer" }, { word: "a" }, { word: "pillow" }, { word: "menu" }, { word: "featuring" }, { word: "memory" }, { word: "foam", punctuation: "," }, { word: "down", punctuation: "," }, { word: "and" }, { word: "hypoallergenic" }, { word: "latex" }, { word: "options", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offer" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ə/ /ˈpɪloʊ/ /ˈmɛnjuː/", translation: "枕头菜单",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "pillow" }, { word: "menu" }] }]
        },
        {
          start: 5, end: 12, label: "后置定语", phonetic: "/ˈfiːtʃərɪŋ/ /ˈmɛməri/ /foʊm/ /daʊn/ /ænd/ /ˌhaɪpoʊˌælərˈdʒɛnɪk/ /ˈleɪtɛks/ /ˈɒpʃənz/", translation: "含记忆棉、羽绒及低过敏性乳胶",
          subComponents: [{ startIndex: 0, words: [{ word: "featuring" }, { word: "memory" }, { word: "foam", punctuation: "," }, { word: "down", punctuation: "," }, { word: "and" }, { word: "hypoallergenic" }, { word: "latex" }, { word: "options", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "枕头菜单", text: "pillow menu (枕头菜单), hypoallergenic (低过敏性), memory foam (记忆棉)" }
      ]
    },
    {
      id: "q_hotel_s133",
      chinese: "对尘螨过敏的客人可要求更换防过敏床罩及经过特殊处理的寝具",
      english_full: "Guests with dust mite allergies may request anti-allergenic mattress covers and specially treated bedding.",
      words: [
        { word: "Guests" }, { word: "with" }, { word: "dust" }, { word: "mite" }, { word: "allergies" }, { word: "may" }, { word: "request" }, { word: "anti-allergenic" }, { word: "mattress" }, { word: "covers" }, { word: "and" }, { word: "specially" }, { word: "treated" }, { word: "bedding", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/gɛsts/ /wɪθ/ /dʌst/ /maɪt/ /ˈælərdʒiz/", translation: "对尘螨过敏的客人",
          subComponents: [{ startIndex: 0, words: [{ word: "Guests" }, { word: "with" }, { word: "dust" }, { word: "mite" }, { word: "allergies" }] }]
        },
        {
          start: 5, end: 5, label: "情态动词", phonetic: "/meɪ/", translation: "可",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/rɪˈkwɛst/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "request" }] }]
        },
        {
          start: 7, end: 13, label: "宾语", phonetic: "/ˌænti-ˌælərˈdʒɛnɪk/ /ˈmætrəs/ /ˈkʌvərz/ /ænd/ /ˈspɛʃəli/ /ˈtriːtɪd/ /ˈbɛdɪŋ/", translation: "防过敏床罩及特殊处理寝具",
          subComponents: [{ startIndex: 0, words: [{ word: "anti-allergenic" }, { word: "mattress" }, { word: "covers" }, { word: "and" }, { word: "specially" }, { word: "treated" }, { word: "bedding", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "过敏友好", text: "dust mite allergy (尘螨过敏), anti-allergenic (防过敏), specially treated (特殊处理)" }
      ]
    },
    {
      id: "q_hotel_s134",
      chinese: "所有客房均配备遮光窗帘，以确保宾客获得最佳的睡眠质量",
      english_full: "All guest rooms are fitted with blackout curtains to ensure guests achieve optimal sleep quality.",
      words: [
        { word: "All" }, { word: "guest" }, { word: "rooms" }, { word: "are" }, { word: "fitted" }, { word: "with" }, { word: "blackout" }, { word: "curtains" }, { word: "to" }, { word: "ensure" }, { word: "guests" }, { word: "achieve" }, { word: "optimal" }, { word: "sleep" }, { word: "quality", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɔːl/ /gɛst/ /ruːmz/", translation: "所有客房",
          subComponents: [{ startIndex: 0, words: [{ word: "All" }, { word: "guest" }, { word: "rooms" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /ˈfɪtɪd/", translation: "均配备",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "fitted" }] }]
        },
        {
          start: 5, end: 7, label: "方式状语", phonetic: "/wɪθ/ /ˈblækaʊt/ /ˈkɜːrtənz/", translation: "遮光窗帘",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "blackout" }, { word: "curtains" }] }]
        },
        {
          start: 8, end: 14, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /gɛsts/ /əˈtʃiːv/ /ˈɒptɪməl/ /sliːp/ /ˈkwɒlɪti/", translation: "以确保宾客最佳睡眠质量",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "guests" }, { word: "achieve" }, { word: "optimal" }, { word: "sleep" }, { word: "quality", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "睡眠品质", text: "blackout curtains (遮光窗帘), optimal sleep quality (最佳睡眠质量), fitted with (配备)" }
      ]
    },
    {
      id: "q_hotel_s135",
      chinese: "高速无线网络覆盖全馆，商务旅客可优先接入专用加密频道",
      english_full: "High-speed wireless internet covers the entire property, and business travelers receive priority access to a dedicated encrypted channel.",
      words: [
        { word: "High-speed" }, { word: "wireless" }, { word: "internet" }, { word: "covers" }, { word: "the" }, { word: "entire" }, { word: "property", punctuation: "," }, { word: "and" }, { word: "business" }, { word: "travelers" }, { word: "receive" }, { word: "priority" }, { word: "access" }, { word: "to" }, { word: "a" }, { word: "dedicated" }, { word: "encrypted" }, { word: "channel", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/haɪ-spiːd/ /ˈwaɪərləs/ /ˈɪntərnɛt/", translation: "高速无线网络",
          subComponents: [{ startIndex: 0, words: [{ word: "High-speed" }, { word: "wireless" }, { word: "internet" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈkʌvərz/", translation: "覆盖",
          subComponents: [{ startIndex: 0, words: [{ word: "covers" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /ɪnˈtaɪər/ /ˈprɒpərti/", translation: "整个酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "entire" }, { word: "property", punctuation: "," }] }]
        },
        {
          start: 7, end: 7, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 8, end: 17, label: "并列句", phonetic: "/ˈbɪznəs/ /ˈtrævələrz/ /rɪˈsiːv/ /praɪˈɒrɪti/ /ˈæksɛs/ /tuː/ /ə/ /ˈdɛdɪkeɪtɪd/ /ɪnˈkrɪptɪd/ /ˈtʃænəl/", translation: "商务旅客可优先接入专用加密频道",
          subComponents: [{ startIndex: 0, words: [{ word: "business" }, { word: "travelers" }, { word: "receive" }, { word: "priority" }, { word: "access" }, { word: "to" }, { word: "a" }, { word: "dedicated" }, { word: "encrypted" }, { word: "channel", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网络服务", text: "wireless internet (无线网络), priority access (优先接入), encrypted channel (加密频道)" }
      ]
    },
    {
      id: "q_hotel_s136",
      chinese: "迷你吧消费将在退房时自动计入您的账单明细",
      english_full: "Minibar charges will be automatically itemized on your final bill upon checkout.",
      words: [
        { word: "Minibar" }, { word: "charges" }, { word: "will" }, { word: "be" }, { word: "automatically" }, { word: "itemized" }, { word: "on" }, { word: "your" }, { word: "final" }, { word: "bill" }, { word: "upon" }, { word: "checkout", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈmɪnibɑːr/ /ˈtʃɑːrdʒɪz/", translation: "迷你吧消费",
          subComponents: [{ startIndex: 0, words: [{ word: "Minibar" }, { word: "charges" }] }]
        },
        {
          start: 2, end: 5, label: "谓语(将来被动)", phonetic: "/wɪl/ /bi/ /ˌɔːtəˈmætɪkli/ /ˈaɪtəmaɪzd/", translation: "将自动列明",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "automatically" }, { word: "itemized" }] }]
        },
        {
          start: 6, end: 9, label: "地点状语", phonetic: "/ɒn/ /jʊər/ /ˈfaɪnəl/ /bɪl/", translation: "于最终账单上",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "your" }, { word: "final" }, { word: "bill" }] }]
        },
        {
          start: 10, end: 11, label: "时间状语", phonetic: "/əˈpɒn/ /ˈtʃɛk-aʊt/", translation: "退房时",
          subComponents: [{ startIndex: 0, words: [{ word: "upon" }, { word: "checkout", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "账单明细", text: "minibar charges (迷你吧消费), itemize (逐项列出), final bill (最终账单)" }
      ]
    },
    {
      id: "q_hotel_s137",
      chinese: "视房态而定，我们可为您免费升级至更高等级的景观套房",
      english_full: "Subject to availability, we can upgrade you complimentarily to a higher-category view suite.",
      words: [
        { word: "Subject" }, { word: "to" }, { word: "availability", punctuation: "," }, { word: "we" }, { word: "can" }, { word: "upgrade" }, { word: "you" }, { word: "complimentarily" }, { word: "to" }, { word: "a" }, { word: "higher-category" }, { word: "view" }, { word: "suite", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "条件状语", phonetic: "/ˈsʌbdʒɪkt/ /tuː/ /əˌveɪləˈbɪlɪti/", translation: "视房态而定",
          subComponents: [{ startIndex: 0, words: [{ word: "Subject" }, { word: "to" }, { word: "availability", punctuation: "," }] }]
        },
        {
          start: 3, end: 3, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "we" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/kæn/ /ʌpˈɡreɪd/", translation: "可升级",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "upgrade" }] }]
        },
        {
          start: 6, end: 6, label: "宾语", phonetic: "/juː/", translation: "您",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }] }]
        },
        {
          start: 7, end: 7, label: "方式状语", phonetic: "/ˌkɒmplɪˈmɛntərɪli/", translation: "免费",
          subComponents: [{ startIndex: 0, words: [{ word: "complimentarily" }] }]
        },
        {
          start: 8, end: 12, label: "补语", phonetic: "/tuː/ /ə/ /ˈhaɪər-ˈkætəɡɔːri/ /vjuː/ /swiːt/", translation: "至更高等级景观套房",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "a" }, { word: "higher-category" }, { word: "view" }, { word: "suite", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "房型升级", text: "subject to availability (视房态而定), complimentary upgrade (免费升级), view suite (景观套房)" }
      ]
    },
    {
      id: "q_hotel_s138",
      chinese: "本酒店内设米其林星级餐厅，主厨品鉴菜单需提前至少一周预订",
      english_full: "The hotel houses a Michelin-starred restaurant, whose chef's tasting menu requires reservations at least one week in advance.",
      words: [
        { word: "The" }, { word: "hotel" }, { word: "houses" }, { word: "a" }, { word: "Michelin-starred" }, { word: "restaurant", punctuation: "," }, { word: "whose" }, { word: "chef's" }, { word: "tasting" }, { word: "menu" }, { word: "requires" }, { word: "reservations" }, { word: "at" }, { word: "least" }, { word: "one" }, { word: "week" }, { word: "in" }, { word: "advance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/", translation: "本酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hotel" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/haʊzɪz/ /ə/ /ˈmɪʃəlɪn-stɑːrd/ /ˈrɛstərənt/", translation: "内设米其林星级餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "houses" }, { word: "a" }, { word: "Michelin-starred" }, { word: "restaurant", punctuation: "," }] }]
        },
        {
          start: 6, end: 9, label: "定语从句主语", phonetic: "/huːz/ /ʃɛfs/ /ˈteɪstɪŋ/ /ˈmɛnjuː/", translation: "其主厨品鉴菜单",
          subComponents: [{ startIndex: 0, words: [{ word: "whose" }, { word: "chef's" }, { word: "tasting" }, { word: "menu" }] }]
        },
        {
          start: 10, end: 10, label: "定语从句谓语", phonetic: "/rɪˈkwaɪərz/", translation: "需",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }] }]
        },
        {
          start: 11, end: 17, label: "定语从句宾语", phonetic: "/ˌrɛzərˈveɪʃənz/ /æt/ /liːst/ /wʌn/ /wiːk/ /ɪn/ /ədˈvɑːns/", translation: "至少提前一周预订",
          subComponents: [{ startIndex: 0, words: [{ word: "reservations" }, { word: "at" }, { word: "least" }, { word: "one" }, { word: "week" }, { word: "in" }, { word: "advance", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "餐饮配套", text: "Michelin-starred (米其林星级), tasting menu (品鉴菜单), in advance (提前)" }
      ]
    },
    {
      id: "q_hotel_s139",
      chinese: "屋顶无边泳池仅在指定时段开放，并实行严格的人数管控",
      english_full: "The rooftop infinity pool operates during designated hours only and maintains strict capacity controls.",
      words: [
        { word: "The" }, { word: "rooftop" }, { word: "infinity" }, { word: "pool" }, { word: "operates" }, { word: "during" }, { word: "designated" }, { word: "hours" }, { word: "only" }, { word: "and" }, { word: "maintains" }, { word: "strict" }, { word: "capacity" }, { word: "controls", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈruːftɒp/ /ɪnˈfɪnɪti/ /puːl/", translation: "屋顶无边泳池",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "rooftop" }, { word: "infinity" }, { word: "pool" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɒpəreɪts/", translation: "开放",
          subComponents: [{ startIndex: 0, words: [{ word: "operates" }] }]
        },
        {
          start: 5, end: 8, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˈdɛzɪɡneɪtɪd/ /ˈaʊərz/ /ˈoʊnli/", translation: "仅在指定时段",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "designated" }, { word: "hours" }, { word: "only" }] }]
        },
        {
          start: 9, end: 9, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 10, end: 13, label: "并列谓语", phonetic: "/meɪnˈteɪnz/ /strɪkt/ /kəˈpæsɪti/ /kənˈtroʊlz/", translation: "实行严格人数管控",
          subComponents: [{ startIndex: 0, words: [{ word: "maintains" }, { word: "strict" }, { word: "capacity" }, { word: "controls", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "泳池设施", text: "infinity pool (无边泳池), designated hours (指定时段), capacity control (人数管控)" }
      ]
    },
    {
      id: "q_hotel_s140",
      chinese: "儿童俱乐部为四至十二岁儿童提供有专人看护的创意活动与游戏项目",
      english_full: "The kids' club offers supervised creative activities and games for children aged four to twelve.",
      words: [
        { word: "The" }, { word: "kids'" }, { word: "club" }, { word: "offers" }, { word: "supervised" }, { word: "creative" }, { word: "activities" }, { word: "and" }, { word: "games" }, { word: "for" }, { word: "children" }, { word: "aged" }, { word: "four" }, { word: "to" }, { word: "twelve", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /kɪdz/ /klʌb/", translation: "儿童俱乐部",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "kids'" }, { word: "club" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ˈsuːpərvaɪzd/ /kriˈeɪtɪv/ /ækˈtɪvɪtiz/ /ænd/ /ɡeɪmz/", translation: "有专人看护的创意活动与游戏",
          subComponents: [{ startIndex: 0, words: [{ word: "supervised" }, { word: "creative" }, { word: "activities" }, { word: "and" }, { word: "games" }] }]
        },
        {
          start: 9, end: 14, label: "对象状语", phonetic: "/fɔːr/ /ˈtʃɪldrən/ /eɪdʒd/ /fɔːr/ /tuː/ /twɛlv/", translation: "为四至十二岁儿童",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "children" }, { word: "aged" }, { word: "four" }, { word: "to" }, { word: "twelve", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "亲子设施", text: "kids' club (儿童俱乐部), supervised activities (有专人看护的活动), aged four to twelve (四至十二岁)" }
      ]
    },
    {
      id: "q_hotel_s141",
      chinese: "前台可协助兑换主要外币，汇率以当日挂牌价为准",
      english_full: "The front desk can assist with major currency exchange, with rates based on the daily posted price.",
      words: [
        { word: "The" }, { word: "front" }, { word: "desk" }, { word: "can" }, { word: "assist" }, { word: "with" }, { word: "major" }, { word: "currency" }, { word: "exchange", punctuation: "," }, { word: "with" }, { word: "rates" }, { word: "based" }, { word: "on" }, { word: "the" }, { word: "daily" }, { word: "posted" }, { word: "price", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /frʌnt/ /dɛsk/", translation: "前台",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "front" }, { word: "desk" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/kæn/ /əˈsɪst/", translation: "可协助",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "assist" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/wɪθ/ /ˈmeɪdʒər/ /ˈkɜːrənsi/ /ɪksˈtʃeɪndʒ/", translation: "主要外币兑换",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "major" }, { word: "currency" }, { word: "exchange", punctuation: "," }] }]
        },
        {
          start: 9, end: 16, label: "补充说明", phonetic: "/wɪθ/ /reɪts/ /beɪst/ /ɒn/ /ðə/ /ˈdeɪli/ /ˈpoʊstɪd/ /praɪs/", translation: "汇率以当日挂牌价为准",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "rates" }, { word: "based" }, { word: "on" }, { word: "the" }, { word: "daily" }, { word: "posted" }, { word: "price", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "货币兑换", text: "currency exchange (货币兑换), posted price (挂牌价), assist with (协助)" }
      ]
    },
    {
      id: "q_hotel_s142",
      chinese: "礼宾部可为您安排私人导览、演出门票及高端用车服务",
      english_full: "The concierge can arrange private tours, event tickets, and premium chauffeur services on your behalf.",
      words: [
        { word: "The" }, { word: "concierge" }, { word: "can" }, { word: "arrange" }, { word: "private" }, { word: "tours", punctuation: "," }, { word: "event" }, { word: "tickets", punctuation: "," }, { word: "and" }, { word: "premium" }, { word: "chauffeur" }, { word: "services" }, { word: "on" }, { word: "your" }, { word: "behalf", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkɒnsiˌɛrʒ/", translation: "礼宾部",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "concierge" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/kæn/ /əˈreɪndʒ/", translation: "可安排",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "arrange" }] }]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/ˈpraɪvət/ /tʊərz/ /ɪˈvɛnt/ /ˈtɪkɪts/ /ænd/ /ˈpriːmiəm/ /ʃoʊˈfɜːr/ /ˈsɜːrvɪsɪz/", translation: "私人导览、演出门票及高端用车",
          subComponents: [{ startIndex: 0, words: [{ word: "private" }, { word: "tours", punctuation: "," }, { word: "event" }, { word: "tickets", punctuation: "," }, { word: "and" }, { word: "premium" }, { word: "chauffeur" }, { word: "services" }] }]
        },
        {
          start: 12, end: 14, label: "方式状语", phonetic: "/ɒn/ /jʊər/ /bɪˈhæf/", translation: "为您",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "your" }, { word: "behalf", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "礼宾服务", text: "concierge (礼宾部), chauffeur service (用车服务), on your behalf (为您)" }
      ]
    },
    {
      id: "q_hotel_s143",
      chinese: "请您于明晨六点前通过客房电话预约叫醒服务",
      english_full: "Please schedule a wake-up call via the in-room telephone before six tomorrow morning.",
      words: [
        { word: "Please" }, { word: "schedule" }, { word: "a" }, { word: "wake-up" }, { word: "call" }, { word: "via" }, { word: "the" }, { word: "in-room" }, { word: "telephone" }, { word: "before" }, { word: "six" }, { word: "tomorrow" }, { word: "morning", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "祈使谓语", phonetic: "/pliːz/ /ˈskɛdʒuːl/", translation: "请预约",
          subComponents: [{ startIndex: 0, words: [{ word: "Please" }, { word: "schedule" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ə/ /weɪk-ʌp/ /kɔːl/", translation: "叫醒服务",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "wake-up" }, { word: "call" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/ˈvaɪə/ /ði/ /ɪn-ruːm/ /ˈtɛlɪfoʊn/", translation: "通过客房电话",
          subComponents: [{ startIndex: 0, words: [{ word: "via" }, { word: "the" }, { word: "in-room" }, { word: "telephone" }] }]
        },
        {
          start: 9, end: 12, label: "时间状语", phonetic: "/bɪˈfɔːr/ /sɪks/ /təˈmɒroʊ/ /ˈmɔːrnɪŋ/", translation: "明晨六点前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "six" }, { word: "tomorrow" }, { word: "morning", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客房服务", text: "wake-up call (叫醒服务), in-room telephone (客房电话), schedule (预约)" }
      ]
    },
    {
      id: "q_hotel_s144",
      chinese: "退房后您可将行李免费寄存至当日午夜",
      english_full: "After checkout, you may store your luggage complimentarily until midnight on the same day.",
      words: [
        { word: "After" }, { word: "checkout", punctuation: "," }, { word: "you" }, { word: "may" }, { word: "store" }, { word: "your" }, { word: "luggage" }, { word: "complimentarily" }, { word: "until" }, { word: "midnight" }, { word: "on" }, { word: "the" }, { word: "same" }, { word: "day", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/ˈæftər/ /ˈtʃɛk-aʊt/", translation: "退房后",
          subComponents: [{ startIndex: 0, words: [{ word: "After" }, { word: "checkout", punctuation: "," }] }]
        },
        {
          start: 2, end: 2, label: "主语", phonetic: "/juː/", translation: "您",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/meɪ/ /stɔːr/", translation: "可寄存",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "store" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/jʊər/ /ˈlʌɡɪdʒ/", translation: "行李",
          subComponents: [{ startIndex: 0, words: [{ word: "your" }, { word: "luggage" }] }]
        },
        {
          start: 7, end: 7, label: "方式状语", phonetic: "/ˌkɒmplɪˈmɛntərɪli/", translation: "免费",
          subComponents: [{ startIndex: 0, words: [{ word: "complimentarily" }] }]
        },
        {
          start: 8, end: 13, label: "时间状语", phonetic: "/ʌnˈtɪl/ /ˈmɪdnaɪt/ /ɒn/ /ðə/ /seɪm/ /deɪ/", translation: "至当日午夜",
          subComponents: [{ startIndex: 0, words: [{ word: "until" }, { word: "midnight" }, { word: "on" }, { word: "the" }, { word: "same" }, { word: "day", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行李寄存", text: "luggage storage (行李寄存), complimentarily (免费地), until midnight (至午夜)" }
      ]
    },
    {
      id: "q_hotel_s145",
      chinese: "快速退房服务允许您通过客房电视或手机应用完成结账",
      english_full: "Express checkout allows you to settle your bill via the in-room TV or mobile app.",
      words: [
        { word: "Express" }, { word: "checkout" }, { word: "allows" }, { word: "you" }, { word: "to" }, { word: "settle" }, { word: "your" }, { word: "bill" }, { word: "via" }, { word: "the" }, { word: "in-room" }, { word: "TV" }, { word: "or" }, { word: "mobile" }, { word: "app", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪkˈsprɛs/ /ˈtʃɛk-aʊt/", translation: "快速退房服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Express" }, { word: "checkout" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈlaʊz/", translation: "允许",
          subComponents: [{ startIndex: 0, words: [{ word: "allows" }] }]
        },
        {
          start: 3, end: 3, label: "宾语", phonetic: "/juː/", translation: "您",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }] }]
        },
        {
          start: 4, end: 14, label: "宾补", phonetic: "/tuː/ /ˈsɛtəl/ /jʊər/ /bɪl/ /ˈvaɪə/ /ði/ /ɪn-ruːm/ /tiː-viː/ /ɔːr/ /ˈmoʊbaɪl/ /æp/", translation: "通过客房电视或手机应用完成结账",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "settle" }, { word: "your" }, { word: "bill" }, { word: "via" }, { word: "the" }, { word: "in-room" }, { word: "TV" }, { word: "or" }, { word: "mobile" }, { word: "app", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "快速退房", text: "express checkout (快速退房), settle your bill (结账), mobile app (手机应用)" }
      ]
    },
    {
      id: "q_hotel_s146",
      chinese: "如需开具增值税专用发票，请于退房时向前台提供完整开票信息",
      english_full: "If you require a VAT special invoice, please provide complete billing details to the front desk upon checkout.",
      words: [
        { word: "If" }, { word: "you" }, { word: "require" }, { word: "a" }, { word: "VAT" }, { word: "special" }, { word: "invoice", punctuation: "," }, { word: "please" }, { word: "provide" }, { word: "complete" }, { word: "billing" }, { word: "details" }, { word: "to" }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "upon" }, { word: "checkout", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "条件从句", phonetic: "/ɪf/ /juː/ /rɪˈkwaɪər/ /ə/ /viː-eɪ-tiː/ /ˈspɛʃəl/ /ˈɪnvɔɪs/", translation: "如需开具增值税专用发票",
          subComponents: [{ startIndex: 0, words: [{ word: "If" }, { word: "you" }, { word: "require" }, { word: "a" }, { word: "VAT" }, { word: "special" }, { word: "invoice", punctuation: "," }] }]
        },
        {
          start: 7, end: 8, label: "祈使谓语", phonetic: "/pliːz/ /prəˈvaɪd/", translation: "请提供",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }, { word: "provide" }] }]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/kəmˈpliːt/ /ˈbɪlɪŋ/ /ˈdiːteɪlz/", translation: "完整开票信息",
          subComponents: [{ startIndex: 0, words: [{ word: "complete" }, { word: "billing" }, { word: "details" }] }]
        },
        {
          start: 12, end: 15, label: "对象状语", phonetic: "/tuː/ /ðə/ /frʌnt/ /dɛsk/", translation: "向前台",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "front" }, { word: "desk" }] }]
        },
        {
          start: 16, end: 17, label: "时间状语", phonetic: "/əˈpɒn/ /ˈtʃɛk-aʊt/", translation: "退房时",
          subComponents: [{ startIndex: 0, words: [{ word: "upon" }, { word: "checkout", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "发票开具", text: "VAT special invoice (增值税专用发票), billing details (开票信息), upon checkout (退房时)" }
      ]
    },
    {
      id: "q_hotel_s147",
      chinese: "房费已含服务费，但地方政府规定的税费将另行收取",
      english_full: "The room rate includes service charges, but government-mandated taxes will be levied separately.",
      words: [
        { word: "The" }, { word: "room" }, { word: "rate" }, { word: "includes" }, { word: "service" }, { word: "charges", punctuation: "," }, { word: "but" }, { word: "government-mandated" }, { word: "taxes" }, { word: "will" }, { word: "be" }, { word: "levied" }, { word: "separately", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ruːm/ /reɪt/", translation: "房费",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "room" }, { word: "rate" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/ɪnˈkluːdz/ /ˈsɜːrvɪs/ /ˈtʃɑːrdʒɪz/", translation: "已含服务费",
          subComponents: [{ startIndex: 0, words: [{ word: "includes" }, { word: "service" }, { word: "charges", punctuation: "," }] }]
        },
        {
          start: 6, end: 6, label: "连词", phonetic: "/bʌt/", translation: "但",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }] }]
        },
        {
          start: 7, end: 8, label: "主语", phonetic: "/ˈgʌvərnmənt-ˈmændeɪtɪd/ /ˈtæksɪz/", translation: "政府规定税费",
          subComponents: [{ startIndex: 0, words: [{ word: "government-mandated" }, { word: "taxes" }] }]
        },
        {
          start: 9, end: 12, label: "谓语(被动)", phonetic: "/wɪl/ /bi/ /ˈlɛvid/ /ˈsɛpərətli/", translation: "将另行收取",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "levied" }, { word: "separately", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "税费说明", text: "service charge (服务费), government-mandated tax (政府规定税费), levy separately (另行收取)" }
      ]
    },
    {
      id: "q_hotel_s148",
      chinese: "行政楼层宾客可享每日免费迷你吧补给及专属欢迎礼遇",
      english_full: "Guests on the club floor enjoy daily complimentary minibar replenishment and exclusive welcome amenities.",
      words: [
        { word: "Guests" }, { word: "on" }, { word: "the" }, { word: "club" }, { word: "floor" }, { word: "enjoy" }, { word: "daily" }, { word: "complimentary" }, { word: "minibar" }, { word: "replenishment" }, { word: "and" }, { word: "exclusive" }, { word: "welcome" }, { word: "amenities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/gɛsts/ /ɒn/ /ðə/ /klʌb/ /flɔːr/", translation: "行政楼层宾客",
          subComponents: [{ startIndex: 0, words: [{ word: "Guests" }, { word: "on" }, { word: "the" }, { word: "club" }, { word: "floor" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ɪnˈdʒɔɪ/", translation: "可享",
          subComponents: [{ startIndex: 0, words: [{ word: "enjoy" }] }]
        },
        {
          start: 6, end: 13, label: "宾语", phonetic: "/ˈdeɪli/ /ˌkɒmplɪˈmɛntəri/ /ˈmɪnibɑːr/ /rɪˈplɛnɪʃmənt/ /ænd/ /ɪkˈskluːsɪv/ /ˈwɛlkəm/ /əˈmɛnɪtiz/", translation: "每日免费迷你吧补给及专属欢迎礼遇",
          subComponents: [{ startIndex: 0, words: [{ word: "daily" }, { word: "complimentary" }, { word: "minibar" }, { word: "replenishment" }, { word: "and" }, { word: "exclusive" }, { word: "welcome" }, { word: "amenities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行政礼遇", text: "club floor (行政楼层), minibar replenishment (迷你吧补给), welcome amenities (欢迎礼遇)" }
      ]
    },
    {
      id: "q_hotel_s149",
      chinese: "这座历史建筑经精心修缮后转型为奢华精品酒店，保留了原有立面风貌",
      english_full: "This heritage building has been meticulously restored into a luxury boutique hotel while preserving its original facade.",
      words: [
        { word: "This" }, { word: "heritage" }, { word: "building" }, { word: "has" }, { word: "been" }, { word: "meticulously" }, { word: "restored" }, { word: "into" }, { word: "a" }, { word: "luxury" }, { word: "boutique" }, { word: "hotel" }, { word: "while" }, { word: "preserving" }, { word: "its" }, { word: "original" }, { word: "facade", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ˈhɛrɪtɪdʒ/ /ˈbɪldɪŋ/", translation: "这座历史建筑",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "heritage" }, { word: "building" }] }]
        },
        {
          start: 3, end: 6, label: "谓语(现完被动)", phonetic: "/hæz/ /bɪn/ /məˈtɪkjʊləsli/ /rɪˈstɔːrd/", translation: "经精心修缮",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "meticulously" }, { word: "restored" }] }]
        },
        {
          start: 7, end: 11, label: "补语", phonetic: "/ˈɪntuː/ /ə/ /ˈlʌkʃəri/ /buːˈtiːk/ /hoʊˈtɛl/", translation: "转型为奢华精品酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "a" }, { word: "luxury" }, { word: "boutique" }, { word: "hotel" }] }]
        },
        {
          start: 12, end: 16, label: "时间状语从句", phonetic: "/waɪl/ /prɪˈzɜːrvɪŋ/ /ɪts/ /əˈrɪdʒənəl/ /fəˈsɑːd/", translation: "保留原有立面风貌",
          subComponents: [{ startIndex: 0, words: [{ word: "while" }, { word: "preserving" }, { word: "its" }, { word: "original" }, { word: "facade", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "历史修缮", text: "heritage building (历史建筑), meticulously restored (精心修缮), original facade (原有立面)" }
      ]
    },
    {
      id: "q_hotel_s150",
      chinese: "屋顶酒吧每晚呈现现场爵士乐表演，并供应手工调制鸡尾酒",
      english_full: "The rooftop bar features live jazz performances nightly and serves handcrafted cocktails.",
      words: [
        { word: "The" }, { word: "rooftop" }, { word: "bar" }, { word: "features" }, { word: "live" }, { word: "jazz" }, { word: "performances" }, { word: "nightly" }, { word: "and" }, { word: "serves" }, { word: "handcrafted" }, { word: "cocktails", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈruːftɒp/ /bɑːr/", translation: "屋顶酒吧",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "rooftop" }, { word: "bar" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "呈现",
          subComponents: [{ startIndex: 0, words: [{ word: "features" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/laɪv/ /dʒæz/ /pərˈfɔːrmənsɪz/ /ˈnaɪtli/", translation: "每晚现场爵士乐表演",
          subComponents: [{ startIndex: 0, words: [{ word: "live" }, { word: "jazz" }, { word: "performances" }, { word: "nightly" }] }]
        },
        {
          start: 8, end: 8, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 9, end: 11, label: "并列谓语", phonetic: "/sɜːrvz/ /ˈhændkræftɪd/ /ˈkɒkteɪlz/", translation: "供应手工调制鸡尾酒",
          subComponents: [{ startIndex: 0, words: [{ word: "serves" }, { word: "handcrafted" }, { word: "cocktails", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "屋顶酒吧", text: "live jazz (现场爵士乐), handcrafted cocktails (手工鸡尾酒), nightly (每晚)" }
      ]
    },
    {
      id: "q_hotel_s151",
      chinese: "会议套餐含同声传译设备、高清投影系统及专属茶歇服务",
      english_full: "The conference package includes simultaneous interpretation equipment, HD projection systems, and dedicated coffee-break service.",
      words: [
        { word: "The" }, { word: "conference" }, { word: "package" }, { word: "includes" }, { word: "simultaneous" }, { word: "interpretation" }, { word: "equipment", punctuation: "," }, { word: "HD" }, { word: "projection" }, { word: "systems", punctuation: "," }, { word: "and" }, { word: "dedicated" }, { word: "coffee-break" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkɒnfərəns/ /ˈpækɪdʒ/", translation: "会议套餐",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "conference" }, { word: "package" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈkluːdz/", translation: "含",
          subComponents: [{ startIndex: 0, words: [{ word: "includes" }] }]
        },
        {
          start: 4, end: 13, label: "宾语", phonetic: "/ˌsɪməlˈteɪniəs/ /ɪnˌtɜːrprɪˈteɪʃən/ /ɪˈkwɪpmənt/ /eɪtʃ-diː/ /prəˈdʒɛkʃən/ /ˈsɪstəmz/ /ænd/ /ˈdɛdɪkeɪtɪd/ /ˈkɒfi-breɪk/ /ˈsɜːrvɪs/", translation: "同声传译设备、高清投影及专属茶歇",
          subComponents: [{ startIndex: 0, words: [{ word: "simultaneous" }, { word: "interpretation" }, { word: "equipment", punctuation: "," }, { word: "HD" }, { word: "projection" }, { word: "systems", punctuation: "," }, { word: "and" }, { word: "dedicated" }, { word: "coffee-break" }, { word: "service", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "会议配套", text: "simultaneous interpretation (同声传译), coffee-break service (茶歇服务), conference package (会议套餐)" }
      ]
    },
    {
      id: "q_hotel_s152",
      chinese: "酒店可提供专业口笔译服务，需至少提前二十四小时预约",
      english_full: "Professional interpretation and translation services are available, with a minimum twenty-four-hour advance booking requirement.",
      words: [
        { word: "Professional" }, { word: "interpretation" }, { word: "and" }, { word: "translation" }, { word: "services" }, { word: "are" }, { word: "available", punctuation: "," }, { word: "with" }, { word: "a" }, { word: "minimum" }, { word: "twenty-four-hour" }, { word: "advance" }, { word: "booking" }, { word: "requirement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/prəˈfɛʃənəl/ /ɪnˌtɜːrprɪˈteɪʃən/ /ænd/ /trænsˈleɪʃən/ /ˈsɜːrvɪsɪz/", translation: "专业口笔译服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Professional" }, { word: "interpretation" }, { word: "and" }, { word: "translation" }, { word: "services" }] }]
        },
        {
          start: 5, end: 6, label: "谓语", phonetic: "/ɑːr/ /əˈveɪləbəl/", translation: "可提供",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "available", punctuation: "," }] }]
        },
        {
          start: 7, end: 13, label: "补充说明", phonetic: "/wɪθ/ /ə/ /ˈmɪnɪməm/ /ˈtwɛnti-fɔːr-ˈaʊər/ /ədˈvɑːns/ /ˈbʊkɪŋ/ /rɪˈkwaɪərmənt/", translation: "需至少提前二十四小时预约",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "minimum" }, { word: "twenty-four-hour" }, { word: "advance" }, { word: "booking" }, { word: "requirement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "翻译服务", text: "interpretation and translation (口笔译), advance booking (提前预约), minimum requirement (最低要求)" }
      ]
    },
    {
      id: "q_hotel_s153",
      chinese: "若您在住宿期间需要医疗协助，请立即联系前台，我们将协调就近医疗机构",
      english_full: "Should you require medical assistance during your stay, please contact the front desk immediately, and we will coordinate with nearby healthcare providers.",
      words: [
        { word: "Should" }, { word: "you" }, { word: "require" }, { word: "medical" }, { word: "assistance" }, { word: "during" }, { word: "your" }, { word: "stay", punctuation: "," }, { word: "please" }, { word: "contact" }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "immediately", punctuation: "," }, { word: "and" }, { word: "we" }, { word: "will" }, { word: "coordinate" }, { word: "with" }, { word: "nearby" }, { word: "healthcare" }, { word: "providers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "条件从句", phonetic: "/ʃʊd/ /juː/ /rɪˈkwaɪər/ /ˈmɛdɪkəl/ /əˈsɪstəns/ /ˈdjʊərɪŋ/ /jʊər/ /steɪ/", translation: "若住宿期间需要医疗协助",
          subComponents: [{ startIndex: 0, words: [{ word: "Should" }, { word: "you" }, { word: "require" }, { word: "medical" }, { word: "assistance" }, { word: "during" }, { word: "your" }, { word: "stay", punctuation: "," }] }]
        },
        {
          start: 8, end: 13, label: "祈使谓语", phonetic: "/pliːz/ /ˈkɒntækt/ /ðə/ /frʌnt/ /dɛsk/ /ɪˈmiːdiətli/", translation: "请立即联系前台",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }, { word: "contact" }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "immediately", punctuation: "," }] }]
        },
        {
          start: 14, end: 14, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 15, end: 21, label: "并列谓语", phonetic: "/wiː/ /wɪl/ /koʊˈɔːrdɪneɪt/ /wɪθ/ /ˈnɪrbaɪ/ /ˈhɛlθkeər/ /prəˈvaɪdərz/", translation: "我们将协调就近医疗机构",
          subComponents: [{ startIndex: 0, words: [{ word: "we" }, { word: "will" }, { word: "coordinate" }, { word: "with" }, { word: "nearby" }, { word: "healthcare" }, { word: "providers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗协助", text: "medical assistance (医疗协助), coordinate with (协调), healthcare provider (医疗机构)" }
      ]
    },
    {
      id: "q_hotel_s154",
      chinese: "入住时工作人员将向您简要说明紧急疏散路线及集合点位置",
      english_full: "Upon check-in, staff will brief you on emergency evacuation routes and assembly point locations.",
      words: [
        { word: "Upon" }, { word: "check-in", punctuation: "," }, { word: "staff" }, { word: "will" }, { word: "brief" }, { word: "you" }, { word: "on" }, { word: "emergency" }, { word: "evacuation" }, { word: "routes" }, { word: "and" }, { word: "assembly" }, { word: "point" }, { word: "locations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/əˈpɒn/ /ˈtʃɛk-ɪn/", translation: "入住时",
          subComponents: [{ startIndex: 0, words: [{ word: "Upon" }, { word: "check-in", punctuation: "," }] }]
        },
        {
          start: 2, end: 2, label: "主语", phonetic: "/stæf/", translation: "工作人员",
          subComponents: [{ startIndex: 0, words: [{ word: "staff" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(将来)", phonetic: "/wɪl/ /briːf/", translation: "将向您说明",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "brief" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/juː/", translation: "您",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }] }]
        },
        {
          start: 6, end: 13, label: "内容状语", phonetic: "/ɒn/ /ɪˈmɜːrdʒənsi/ /ɪˌvækjuˈeɪʃən/ /ruːts/ /ænd/ /əˈsɛmbli/ /pɔɪnt/ /loʊˈkeɪʃənz/", translation: "紧急疏散路线及集合点位置",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "emergency" }, { word: "evacuation" }, { word: "routes" }, { word: "and" }, { word: "assembly" }, { word: "point" }, { word: "locations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "安全须知", text: "evacuation route (疏散路线), assembly point (集合点), brief on (简要说明)" }
      ]
    },
    {
      id: "q_hotel_s155",
      chinese: "房卡遗失后请立即通知前台，我们将停用旧卡并为您补发新卡",
      english_full: "If your key card is lost, please notify the front desk immediately, and we will deactivate the old card and issue a replacement.",
      words: [
        { word: "If" }, { word: "your" }, { word: "key" }, { word: "card" }, { word: "is" }, { word: "lost", punctuation: "," }, { word: "please" }, { word: "notify" }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "immediately", punctuation: "," }, { word: "and" }, { word: "we" }, { word: "will" }, { word: "deactivate" }, { word: "the" }, { word: "old" }, { word: "card" }, { word: "and" }, { word: "issue" }, { word: "a" }, { word: "replacement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "条件从句", phonetic: "/ɪf/ /jʊər/ /kiː/ /kɑːrd/ /ɪz/ /lɒst/", translation: "若房卡遗失",
          subComponents: [{ startIndex: 0, words: [{ word: "If" }, { word: "your" }, { word: "key" }, { word: "card" }, { word: "is" }, { word: "lost", punctuation: "," }] }]
        },
        {
          start: 6, end: 11, label: "祈使谓语", phonetic: "/pliːz/ /ˈnoʊtɪfaɪ/ /ðə/ /frʌnt/ /dɛsk/ /ɪˈmiːdiətli/", translation: "请立即通知前台",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }, { word: "notify" }, { word: "the" }, { word: "front" }, { word: "desk" }, { word: "immediately", punctuation: "," }] }]
        },
        {
          start: 12, end: 12, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 13, end: 22, label: "并列谓语", phonetic: "/wiː/ /wɪl/ /diˈæktɪveɪt/ /ðə/ /oʊld/ /kɑːrd/ /ænd/ /ˈɪʃuː/ /ə/ /rɪˈpleɪsmənt/", translation: "我们将停用旧卡并补发新卡",
          subComponents: [{ startIndex: 0, words: [{ word: "we" }, { word: "will" }, { word: "deactivate" }, { word: "the" }, { word: "old" }, { word: "card" }, { word: "and" }, { word: "issue" }, { word: "a" }, { word: "replacement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "房卡管理", text: "key card (房卡), deactivate (停用), issue a replacement (补发新卡)" }
      ]
    },
    {
      id: "q_hotel_s156",
      chinese: "客房保险箱可免费使用，酒店对存放贵重物品不承担保管责任",
      english_full: "The in-room safe is complimentary, but the hotel assumes no liability for valuables stored therein.",
      words: [
        { word: "The" }, { word: "in-room" }, { word: "safe" }, { word: "is" }, { word: "complimentary", punctuation: "," }, { word: "but" }, { word: "the" }, { word: "hotel" }, { word: "assumes" }, { word: "no" }, { word: "liability" }, { word: "for" }, { word: "valuables" }, { word: "stored" }, { word: "therein", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ði/ /ɪn-ruːm/ /seɪf/", translation: "客房保险箱",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "in-room" }, { word: "safe" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ɪz/ /ˌkɒmplɪˈmɛntəri/", translation: "可免费使用",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "complimentary", punctuation: "," }] }]
        },
        {
          start: 5, end: 5, label: "连词", phonetic: "/bʌt/", translation: "但",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ðə/ /hoʊˈtɛl/", translation: "酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "hotel" }] }]
        },
        {
          start: 8, end: 10, label: "谓语", phonetic: "/əˈsuːmz/ /noʊ/ /ˌlaɪəˈbɪlɪti/", translation: "不承担保管责任",
          subComponents: [{ startIndex: 0, words: [{ word: "assumes" }, { word: "no" }, { word: "liability" }] }]
        },
        {
          start: 11, end: 14, label: "对象状语", phonetic: "/fɔːr/ /ˈvæljuəbəlz/ /stɔːrd/ /ðɛrˈɪn/", translation: "对存放其中的贵重物品",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "valuables" }, { word: "stored" }, { word: "therein", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "保险箱", text: "in-room safe (客房保险箱), assume no liability (不承担责任), valuables (贵重物品)" }
      ]
    },
    {
      id: "q_hotel_s157",
      chinese: "蜜月套餐含浪漫客房布置、香槟欢迎礼及双人烛光晚餐",
      english_full: "The honeymoon package includes romantic room decoration, a champagne welcome amenity, and a candlelit dinner for two.",
      words: [
        { word: "The" }, { word: "honeymoon" }, { word: "package" }, { word: "includes" }, { word: "romantic" }, { word: "room" }, { word: "decoration", punctuation: "," }, { word: "a" }, { word: "champagne" }, { word: "welcome" }, { word: "amenity", punctuation: "," }, { word: "and" }, { word: "a" }, { word: "candlelit" }, { word: "dinner" }, { word: "for" }, { word: "two", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈhʌnimuːn/ /ˈpækɪdʒ/", translation: "蜜月套餐",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "honeymoon" }, { word: "package" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈkluːdz/", translation: "含",
          subComponents: [{ startIndex: 0, words: [{ word: "includes" }] }]
        },
        {
          start: 4, end: 17, label: "宾语", phonetic: "/roʊˈmæntɪk/ /ruːm/ /ˌdɛkəˈreɪʃən/ /ə/ /ʃæmˈpeɪn/ /ˈwɛlkəm/ /əˈmɛnɪti/ /ænd/ /ə/ /ˈkændəllɪt/ /ˈdɪnər/ /fɔːr/ /tuː/", translation: "浪漫布置、香槟欢迎礼及双人烛光晚餐",
          subComponents: [{ startIndex: 0, words: [{ word: "romantic" }, { word: "room" }, { word: "decoration", punctuation: "," }, { word: "a" }, { word: "champagne" }, { word: "welcome" }, { word: "amenity", punctuation: "," }, { word: "and" }, { word: "a" }, { word: "candlelit" }, { word: "dinner" }, { word: "for" }, { word: "two", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "蜜月套餐", text: "honeymoon package (蜜月套餐), champagne welcome amenity (香槟欢迎礼), candlelit dinner (烛光晚餐)" }
      ]
    },
    {
      id: "q_hotel_s158",
      chinese: "连续入住七晚及以上可享受房费九折优惠",
      english_full: "Guests staying seven consecutive nights or more receive a ten-percent discount on room rates.",
      words: [
        { word: "Guests" }, { word: "staying" }, { word: "seven" }, { word: "consecutive" }, { word: "nights" }, { word: "or" }, { word: "more" }, { word: "receive" }, { word: "a" }, { word: "ten-percent" }, { word: "discount" }, { word: "on" }, { word: "room" }, { word: "rates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/gɛsts/ /ˈsteɪɪŋ/ /ˈsɛvən/ /kənˈsɛkjʊtɪv/ /naɪts/ /ɔːr/ /mɔːr/", translation: "连续入住七晚及以上宾客",
          subComponents: [{ startIndex: 0, words: [{ word: "Guests" }, { word: "staying" }, { word: "seven" }, { word: "consecutive" }, { word: "nights" }, { word: "or" }, { word: "more" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/rɪˈsiːv/", translation: "可享受",
          subComponents: [{ startIndex: 0, words: [{ word: "receive" }] }]
        },
        {
          start: 8, end: 13, label: "宾语", phonetic: "/ə/ /tɛn-pərˈsɛnt/ /ˈdɪskaʊnt/ /ɒn/ /ruːm/ /reɪts/", translation: "房费九折优惠",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "ten-percent" }, { word: "discount" }, { word: "on" }, { word: "room" }, { word: "rates", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "长住优惠", text: "consecutive nights (连续晚数), ten-percent discount (九折优惠), room rate (房费)" }
      ]
    },
    {
      id: "q_hotel_s159",
      chinese: "成功推荐好友入住后，您与好友均可获得忠诚积分奖励",
      english_full: "After successfully referring a friend, both you and your friend will earn loyalty points as a reward.",
      words: [
        { word: "After" }, { word: "successfully" }, { word: "referring" }, { word: "a" }, { word: "friend", punctuation: "," }, { word: "both" }, { word: "you" }, { word: "and" }, { word: "your" }, { word: "friend" }, { word: "will" }, { word: "earn" }, { word: "loyalty" }, { word: "points" }, { word: "as" }, { word: "a" }, { word: "reward", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语", phonetic: "/ˈæftər/ /səkˈsɛsfəli/ /rɪˈfɜːrɪŋ/ /ə/ /frɛnd/", translation: "成功推荐好友后",
          subComponents: [{ startIndex: 0, words: [{ word: "After" }, { word: "successfully" }, { word: "referring" }, { word: "a" }, { word: "friend", punctuation: "," }] }]
        },
        {
          start: 5, end: 9, label: "主语", phonetic: "/boʊθ/ /juː/ /ænd/ /jʊər/ /frɛnd/", translation: "您与好友",
          subComponents: [{ startIndex: 0, words: [{ word: "both" }, { word: "you" }, { word: "and" }, { word: "your" }, { word: "friend" }] }]
        },
        {
          start: 10, end: 11, label: "谓语(将来)", phonetic: "/wɪl/ /ɜːrn/", translation: "将获得",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "earn" }] }]
        },
        {
          start: 12, end: 16, label: "宾语", phonetic: "/ˈlɔɪəlti/ /pɔɪnts/ /æz/ /ə/ /rɪˈwɔːrd/", translation: "忠诚积分奖励",
          subComponents: [{ startIndex: 0, words: [{ word: "loyalty" }, { word: "points" }, { word: "as" }, { word: "a" }, { word: "reward", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "推荐计划", text: "refer a friend (推荐好友), loyalty points (忠诚积分), earn a reward (获得奖励)" }
      ]
    },
    {
      id: "q_hotel_s160",
      chinese: "我们诚挚邀请您在离店后分享住宿体验，您的反馈将帮助我们持续改进",
      english_full: "We cordially invite you to share your stay experience after departure, as your feedback helps us improve continuously.",
      words: [
        { word: "We" }, { word: "cordially" }, { word: "invite" }, { word: "you" }, { word: "to" }, { word: "share" }, { word: "your" }, { word: "stay" }, { word: "experience" }, { word: "after" }, { word: "departure", punctuation: "," }, { word: "as" }, { word: "your" }, { word: "feedback" }, { word: "helps" }, { word: "us" }, { word: "improve" }, { word: "continuously", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/ˈkɔːrdiəli/ /ɪnˈvaɪt/", translation: "诚挚邀请",
          subComponents: [{ startIndex: 0, words: [{ word: "cordially" }, { word: "invite" }] }]
        },
        {
          start: 3, end: 10, label: "宾语", phonetic: "/juː/ /tuː/ /ʃɛər/ /jʊər/ /steɪ/ /ɪkˈspɪəriəns/ /ˈæftər/ /dɪˈpɑːrtʃər/", translation: "您离店后分享住宿体验",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }, { word: "to" }, { word: "share" }, { word: "your" }, { word: "stay" }, { word: "experience" }, { word: "after" }, { word: "departure", punctuation: "," }] }]
        },
        {
          start: 11, end: 11, label: "连词", phonetic: "/æz/", translation: "因为",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }] }]
        },
        {
          start: 12, end: 17, label: "原因从句", phonetic: "/jʊər/ /ˈfiːdbæk/ /hɛlps/ /ʌs/ /ɪmˈpruːv/ /kənˈtɪnjuəsli/", translation: "您的反馈助我们持续改进",
          subComponents: [{ startIndex: 0, words: [{ word: "your" }, { word: "feedback" }, { word: "helps" }, { word: "us" }, { word: "improve" }, { word: "continuously", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客户反馈", text: "cordially invite (诚挚邀请), stay experience (住宿体验), improve continuously (持续改进)" }
      ]
    },
    {
      id: "q_hotel_s161",
      chinese: "VIP宾客将由总经理亲自迎接，并由专属管家全程陪同",
      english_full: "VIP guests will be personally welcomed by the general manager and escorted throughout their stay by a dedicated butler.",
      words: [
        { word: "VIP" }, { word: "guests" }, { word: "will" }, { word: "be" }, { word: "personally" }, { word: "welcomed" }, { word: "by" }, { word: "the" }, { word: "general" }, { word: "manager" }, { word: "and" }, { word: "escorted" }, { word: "throughout" }, { word: "their" }, { word: "stay" }, { word: "by" }, { word: "a" }, { word: "dedicated" }, { word: "butler", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/viː-aɪ-piː/ /gɛsts/", translation: "VIP宾客",
          subComponents: [{ startIndex: 0, words: [{ word: "VIP" }, { word: "guests" }] }]
        },
        {
          start: 2, end: 5, label: "谓语(被动)", phonetic: "/wɪl/ /bi/ /ˈpɜːrsənəli/ /ˈwɛlkəmd/", translation: "将由…亲自迎接",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "personally" }, { word: "welcomed" }] }]
        },
        {
          start: 6, end: 9, label: "施事状语", phonetic: "/baɪ/ /ðə/ /ˈdʒɛnərəl/ /ˈmænɪdʒər/", translation: "由总经理",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "the" }, { word: "general" }, { word: "manager" }] }]
        },
        {
          start: 10, end: 10, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 11, end: 18, label: "并列谓语(被动)", phonetic: "/ɪˈskɔːrtɪd/ /θruːˈaʊt/ /ðɛər/ /steɪ/ /baɪ/ /ə/ /ˈdɛdɪkeɪtɪd/ /ˈbʌtlər/", translation: "专属管家全程陪同",
          subComponents: [{ startIndex: 0, words: [{ word: "escorted" }, { word: "throughout" }, { word: "their" }, { word: "stay" }, { word: "by" }, { word: "a" }, { word: "dedicated" }, { word: "butler", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "VIP服务", text: "VIP guest (VIP宾客), dedicated butler (专属管家), escort (陪同)" }
      ]
    },
    {
      id: "q_hotel_s162",
      chinese: "总经理欢迎信与手工巧克力已置于您的套房，祝您入住愉快",
      english_full: "A welcome letter from the general manager and artisan chocolates have been placed in your suite for your enjoyment.",
      words: [
        { word: "A" }, { word: "welcome" }, { word: "letter" }, { word: "from" }, { word: "the" }, { word: "general" }, { word: "manager" }, { word: "and" }, { word: "artisan" }, { word: "chocolates" }, { word: "have" }, { word: "been" }, { word: "placed" }, { word: "in" }, { word: "your" }, { word: "suite" }, { word: "for" }, { word: "your" }, { word: "enjoyment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 9, label: "主语", phonetic: "/ə/ /ˈwɛlkəm/ /ˈlɛtər/ /frɒm/ /ðə/ /ˈdʒɛnərəl/ /ˈmænɪdʒər/ /ænd/ /ˈɑːrtɪzən/ /ˈtʃɒkləts/", translation: "总经理欢迎信与手工巧克力",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "welcome" }, { word: "letter" }, { word: "from" }, { word: "the" }, { word: "general" }, { word: "manager" }, { word: "and" }, { word: "artisan" }, { word: "chocolates" }] }]
        },
        {
          start: 10, end: 12, label: "谓语(现完被动)", phonetic: "/hæv/ /bɪn/ /pleɪst/", translation: "已置于",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "been" }, { word: "placed" }] }]
        },
        {
          start: 13, end: 15, label: "地点状语", phonetic: "/ɪn/ /jʊər/ /swiːt/", translation: "您的套房",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "your" }, { word: "suite" }] }]
        },
        {
          start: 16, end: 18, label: "目的状语", phonetic: "/fɔːr/ /jʊər/ /ɪnˈdʒɔɪmənt/", translation: "祝您入住愉快",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "your" }, { word: "enjoyment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "欢迎礼遇", text: "welcome letter (欢迎信), artisan chocolates (手工巧克力), for your enjoyment (祝您愉快)" }
      ]
    },
    {
      id: "q_hotel_s163",
      chinese: "夜床服务包括调节照明、摆放拖鞋及在床头放置明日天气预报",
      english_full: "Turndown service includes dimming the lights, laying out slippers, and placing tomorrow's weather forecast at the bedside.",
      words: [
        { word: "Turndown" }, { word: "service" }, { word: "includes" }, { word: "dimming" }, { word: "the" }, { word: "lights", punctuation: "," }, { word: "laying" }, { word: "out" }, { word: "slippers", punctuation: "," }, { word: "and" }, { word: "placing" }, { word: "tomorrow's" }, { word: "weather" }, { word: "forecast" }, { word: "at" }, { word: "the" }, { word: "bedside", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈtɜːrnˌdaʊn/ /ˈsɜːrvɪs/", translation: "夜床服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Turndown" }, { word: "service" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪnˈkluːdz/", translation: "包括",
          subComponents: [{ startIndex: 0, words: [{ word: "includes" }] }]
        },
        {
          start: 3, end: 16, label: "宾语", phonetic: "/ˈdɪmɪŋ/ /ðə/ /laɪts/ /ˈleɪɪŋ/ /aʊt/ /ˈslɪpərz/ /ænd/ /ˈpleɪsɪŋ/ /təˈmɒroʊz/ /ˈwɛðər/ /ˈfɔːrkæst/ /æt/ /ðə/ /ˈbɛdˌsaɪd/", translation: "调节照明、摆放拖鞋及床头天气预报",
          subComponents: [{ startIndex: 0, words: [{ word: "dimming" }, { word: "the" }, { word: "lights", punctuation: "," }, { word: "laying" }, { word: "out" }, { word: "slippers", punctuation: "," }, { word: "and" }, { word: "placing" }, { word: "tomorrow's" }, { word: "weather" }, { word: "forecast" }, { word: "at" }, { word: "the" }, { word: "bedside", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "夜床服务", text: "turndown service (夜床服务), lay out slippers (摆放拖鞋), weather forecast (天气预报)" }
      ]
    },
    {
      id: "q_hotel_s164",
      chinese: "泳池畔私人凉亭可预约，含冷藏毛巾、鲜榨果汁及专属服务员",
      english_full: "Private poolside cabanas are available by reservation and include chilled towels, fresh juice, and dedicated attendant service.",
      words: [
        { word: "Private" }, { word: "poolside" }, { word: "cabanas" }, { word: "are" }, { word: "available" }, { word: "by" }, { word: "reservation" }, { word: "and" }, { word: "include" }, { word: "chilled" }, { word: "towels", punctuation: "," }, { word: "fresh" }, { word: "juice", punctuation: "," }, { word: "and" }, { word: "dedicated" }, { word: "attendant" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈpraɪvət/ /ˈpuːlsaɪd/ /kəˈbɑːnəz/", translation: "泳池畔私人凉亭",
          subComponents: [{ startIndex: 0, words: [{ word: "Private" }, { word: "poolside" }, { word: "cabanas" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ɑːr/ /əˈveɪləbəl/", translation: "可预约",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "available" }] }]
        },
        {
          start: 5, end: 6, label: "方式状语", phonetic: "/baɪ/ /ˌrɛzərˈveɪʃən/", translation: "通过预约",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "reservation" }] }]
        },
        {
          start: 7, end: 7, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 8, end: 16, label: "并列谓语", phonetic: "/ɪnˈkluːd/ /ˈtʃɪld/ /ˈtaʊəlz/ /frɛʃ/ /dʒuːs/ /ænd/ /ˈdɛdɪkeɪtɪd/ /əˈtɛndənt/ /ˈsɜːrvɪs/", translation: "含冷藏毛巾、鲜榨果汁及专属服务员",
          subComponents: [{ startIndex: 0, words: [{ word: "include" }, { word: "chilled" }, { word: "towels", punctuation: "," }, { word: "fresh" }, { word: "juice", punctuation: "," }, { word: "and" }, { word: "dedicated" }, { word: "attendant" }, { word: "service", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "泳池服务", text: "poolside cabana (泳池凉亭), chilled towels (冷藏毛巾), attendant service (服务员服务)" }
      ]
    },
    {
      id: "q_hotel_s165",
      chinese: "本酒店已获得 LEED 金级认证，采用可再生能源及雨水回收系统",
      english_full: "This hotel has achieved LEED Gold certification and employs renewable energy and rainwater harvesting systems.",
      words: [
        { word: "This" }, { word: "hotel" }, { word: "has" }, { word: "achieved" }, { word: "LEED" }, { word: "Gold" }, { word: "certification" }, { word: "and" }, { word: "employs" }, { word: "renewable" }, { word: "energy" }, { word: "and" }, { word: "rainwater" }, { word: "harvesting" }, { word: "systems", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðɪs/ /hoʊˈtɛl/", translation: "本酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "hotel" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(现完)", phonetic: "/hæz/ /əˈtʃiːvd/", translation: "已获得",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "achieved" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˈliːd/ /ɡoʊld/ /ˌsɜːrtɪfɪˈkeɪʃən/", translation: "LEED金级认证",
          subComponents: [{ startIndex: 0, words: [{ word: "LEED" }, { word: "Gold" }, { word: "certification" }] }]
        },
        {
          start: 7, end: 7, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/ɪmˈplɔɪz/", translation: "采用",
          subComponents: [{ startIndex: 0, words: [{ word: "employs" }] }]
        },
        {
          start: 9, end: 14, label: "宾语", phonetic: "/rɪˈnjuːəbəl/ /ˈɛnərdʒi/ /ænd/ /ˈreɪnwɔːtər/ /ˈhɑːrvɪstɪŋ/ /ˈsɪstəmz/", translation: "可再生能源及雨水回收系统",
          subComponents: [{ startIndex: 0, words: [{ word: "renewable" }, { word: "energy" }, { word: "and" }, { word: "rainwater" }, { word: "harvesting" }, { word: "systems", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "绿色认证", text: "LEED Gold (LEED金级), renewable energy (可再生能源), rainwater harvesting (雨水回收)" }
      ]
    },
    {
      id: "q_hotel_s166",
      chinese: "我们致力于以个性化服务超越宾客期望，为您打造难忘的住宿体验",
      english_full: "We are committed to exceeding guest expectations through personalized service and creating an unforgettable stay experience.",
      words: [
        { word: "We" }, { word: "are" }, { word: "committed" }, { word: "to" }, { word: "exceeding" }, { word: "guest" }, { word: "expectations" }, { word: "through" }, { word: "personalized" }, { word: "service" }, { word: "and" }, { word: "creating" }, { word: "an" }, { word: "unforgettable" }, { word: "stay" }, { word: "experience", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/ɑːr/ /kəˈmɪtɪd/", translation: "致力于",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "committed" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/tuː/ /ɪkˈsiːdɪŋ/ /gɛst/ /ˌɛkspɛkˈteɪʃənz/", translation: "超越宾客期望",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "exceeding" }, { word: "guest" }, { word: "expectations" }] }]
        },
        {
          start: 7, end: 9, label: "方式状语", phonetic: "/θruː/ /ˈpɜːrsənəlaɪzd/ /ˈsɜːrvɪs/", translation: "通过个性化服务",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "personalized" }, { word: "service" }] }]
        },
        {
          start: 10, end: 10, label: "连词", phonetic: "/ænd/", translation: "并且",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 11, end: 15, label: "并列宾语", phonetic: "/ˈkriːeɪtɪŋ/ /æn/ /ˌʌnfərˈɡɛtəbəl/ /steɪ/ /ɪkˈspɪəriəns/", translation: "打造难忘住宿体验",
          subComponents: [{ startIndex: 0, words: [{ word: "creating" }, { word: "an" }, { word: "unforgettable" }, { word: "stay" }, { word: "experience", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "服务理念", text: "exceed expectations (超越期望), personalized service (个性化服务), unforgettable stay (难忘住宿)" }
      ]
    },
    {
      id: "q_hotel_s167",
      chinese: "这家五星级酒店拥有一个屋顶无边泳池，俯瞰着整个城市天际线",
      english_full: "The five-star hotel boasts a rooftop infinity pool overlooking the entire city skyline.",
      words: [
        { word: "The" }, { word: "five-star" }, { word: "hotel" }, { word: "boasts" }, { word: "a" }, { word: "rooftop" }, { word: "infinity" }, { word: "pool" }, { word: "overlooking" }, { word: "the" }, { word: "entire" }, { word: "city" }, { word: "skyline", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /faɪv-stɑːr/ /hoʊˈtɛl/", translation: "这家五星级酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "five-star" }, { word: "hotel" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/boʊsts/", translation: "拥有",
          subComponents: [{ startIndex: 0, words: [{ word: "boasts" }] }]
        },
        {
          start: 4, end: 12, label: "宾语", phonetic: "/ə/ /ˈruːftɒp/ /ɪnˈfɪnɪti/ /puːl/ /ˌoʊvərˈlʊkɪŋ/ /ðə/ /ɪnˈtaɪər/ /ˈsɪti/ /ˈskaɪˌlaɪn/", translation: "俯瞰整个城市天际线的屋顶无边泳池",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "rooftop" }, { word: "infinity" }, { word: "pool" }, { word: "overlooking" }, { word: "the" }, { word: "entire" }, { word: "city" }, { word: "skyline", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "酒店设施", text: "five-star hotel (五星级酒店), infinity pool (无边泳池), city skyline (城市天际线)" }
      ]
    },
    {
      id: "q_hotel_s168",
      chinese: "我们的精品酒店位于市中心，步行即可到达主要旅游景点",
      english_full: "Situated in the city center, our boutique hotel is within walking distance of major tourist attractions.",
      words: [
        { word: "Situated" }, { word: "in" }, { word: "the" }, { word: "city" }, { word: "center", punctuation: "," }, { word: "our" }, { word: "boutique" }, { word: "hotel" }, { word: "is" }, { word: "within" }, { word: "walking" }, { word: "distance" }, { word: "of" }, { word: "major" }, { word: "tourist" }, { word: "attractions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "地点状语", phonetic: "/ˈsɪtʃueɪtɪd/ /ɪn/ /ðə/ /ˈsɪti/ /ˈsɛntər/", translation: "坐落于市中心",
          subComponents: [{ startIndex: 0, words: [{ word: "Situated" }, { word: "in" }, { word: "the" }, { word: "city" }, { word: "center", punctuation: "," }] }]
        },
        {
          start: 5, end: 7, label: "主语", phonetic: "/aʊər/ /buːˈtiːk/ /hoʊˈtɛl/", translation: "我们的精品酒店",
          subComponents: [{ startIndex: 0, words: [{ word: "our" }, { word: "boutique" }, { word: "hotel" }] }]
        },
        {
          start: 8, end: 8, label: "系动词", phonetic: "/ɪz/", translation: "是",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 9, end: 15, label: "表语", phonetic: "/wɪˈðɪn/ /ˈwɔːkɪŋ/ /ˈdɪstəns/ /ɒv/ /ˈmeɪdʒər/ /ˈtʊərɪst/ /əˈtrækʃənz/", translation: "在主要旅游景点的步行距离之内",
          subComponents: [{ startIndex: 0, words: [{ word: "within" }, { word: "walking" }, { word: "distance" }, { word: "of" }, { word: "major" }, { word: "tourist" }, { word: "attractions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "地理位置", text: "situated in (坐落于), within walking distance of (步行可达), tourist attractions (旅游景点)" }
      ]
    },
    {
      id: "q_hotel_s169",
      chinese: "对于在您住宿期间经历的不达标的客房服务，我们深表歉意",
      english_full: "We sincerely apologize for the substandard room service you experienced during your stay.",
      words: [
        { word: "We" }, { word: "sincerely" }, { word: "apologize" }, { word: "for" }, { word: "the" }, { word: "substandard" }, { word: "room" }, { word: "service" }, { word: "you" }, { word: "experienced" }, { word: "during" }, { word: "your" }, { word: "stay", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [{ startIndex: 0, words: [{ word: "We" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/sɪnˈsɪərli/ /əˈpɒlədʒaɪz/", translation: "真诚地道歉",
          subComponents: [{ startIndex: 0, words: [{ word: "sincerely" }, { word: "apologize" }] }]
        },
        {
          start: 3, end: 7, label: "原因状语", phonetic: "/fɔːr/ /ðə/ /sʌbˈstændərd/ /ruːm/ /ˈsɜːrvɪs/", translation: "为不达标的客房服务",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "the" }, { word: "substandard" }, { word: "room" }, { word: "service" }] }]
        },
        {
          start: 8, end: 12, label: "定语从句", phonetic: "/juː/ /ɪkˈspɪəriənst/ /ˈdjʊərɪŋ/ /jʊər/ /steɪ/", translation: "您在住宿期间经历的",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }, { word: "experienced" }, { word: "during" }, { word: "your" }, { word: "stay", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客服句型", text: "apologize for (为某事道歉), substandard (不达标的), room service (客房服务)" }
      ]
    }
  ]
};
