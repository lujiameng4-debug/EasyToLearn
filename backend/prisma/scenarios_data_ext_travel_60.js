export const extensions = {
  "travel_01": [
    {
      id: "q_travel_s100",
      chinese: "旅行者们启程去探索隐藏在连绵起伏的山丘中的偏远村庄",
      english_full: "The travelers embarked on a journey to explore the remote villages nestled in the rolling hills.",
      words: [
        { word: "The" }, { word: "travelers" }, { word: "embarked" }, { word: "on" }, { word: "a" }, { word: "journey" }, { word: "to" }, { word: "explore" }, { word: "the" }, { word: "remote" }, { word: "villages" }, { word: "nestled" }, { word: "in" }, { word: "the" }, { word: "rolling" }, { word: "hills", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈtrævələrz/", translation: "旅行者们",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "travelers" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/ɪmˈbɑːrkt/ /ɒn/ /ə/ /ˈdʒɜːrni/", translation: "启程",
          subComponents: [{ startIndex: 0, words: [{ word: "embarked" }, { word: "on" }, { word: "a" }, { word: "journey" }] }]
        },
        {
          start: 6, end: 15, label: "目的状语", phonetic: "/tuː/ /ɪkˈsplɔːr/ /ðə/ /rɪˈmoʊt/ /ˈvɪlɪdʒɪz/ /ˈnɛsəld/ /ɪn/ /ðə/ /ˈroʊlɪŋ/ /hɪlz/", translation: "去探索隐藏在连绵起伏的山丘中的偏远村庄",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "explore" }, { word: "the" }, { word: "remote" }, { word: "villages" }, { word: "nestled" }, { word: "in" }, { word: "the" }, { word: "rolling" }, { word: "hills", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "旅游词汇", text: "embark on a journey (启程), remote villages (偏远村庄), rolling hills (连绵起伏的山丘)" }
      ]
    },
    {
      id: "q_travel_s101",
      chinese: "可持续旅游倡议旨在最大限度减少生态足迹，同时促进当地经济发展",
      english_full: "Sustainable tourism initiatives aim to minimize ecological footprints while fostering local economic development.",
      words: [
        { word: "Sustainable" }, { word: "tourism" }, { word: "initiatives" }, { word: "aim" }, { word: "to" }, { word: "minimize" }, { word: "ecological" }, { word: "footprints" }, { word: "while" }, { word: "fostering" }, { word: "local" }, { word: "economic" }, { word: "development", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/səˈsteɪnəbəl/ /ˈtʊrɪzəm/ /ɪˈnɪʃətɪvz/", translation: "可持续旅游倡议",
          subComponents: [{ startIndex: 0, words: [{ word: "Sustainable" }, { word: "tourism" }, { word: "initiatives" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/eɪm/", translation: "旨在",
          subComponents: [{ startIndex: 0, words: [{ word: "aim" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/tuː/ /ˈmɪnɪmaɪz/ /ˌiːkəˈlɒdʒɪkəl/ /ˈfʊtprɪnts/", translation: "最大限度减少生态足迹",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "minimize" }, { word: "ecological" }, { word: "footprints" }] }]
        },
        {
          start: 8, end: 12, label: "伴随状语", phonetic: "/waɪl/ /ˈfɒstərɪŋ/ /ˈloʊkəl/ /ˌiːkəˈnɒmɪk/ /dɪˈvɛləpmənt/", translation: "同时促进当地经济发展",
          subComponents: [{ startIndex: 0, words: [{ word: "while" }, { word: "fostering" }, { word: "local" }, { word: "economic" }, { word: "development", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "生态旅游", text: "ecological footprint (生态足迹), sustainable tourism (可持续旅游), foster development (促进发展)" }
      ]
    },
    {
      id: "q_travel_s102",
      chinese: "这条横贯大陆的铁路线将繁华的首都与风景如画的沿海城镇连接起来",
      english_full: "This transcontinental railway line connects bustling capitals with picturesque coastal towns.",
      words: [
        { word: "This" }, { word: "transcontinental" }, { word: "railway" }, { word: "line" }, { word: "connects" }, { word: "bustling" }, { word: "capitals" }, { word: "with" }, { word: "picturesque" }, { word: "coastal" }, { word: "towns", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ˌtrænskɒntɪˈnɛntəl/ /ˈreɪlweɪ/ /laɪn/", translation: "这条横贯大陆的铁路线",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "transcontinental" }, { word: "railway" }, { word: "line" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kəˈnɛkts/", translation: "连接",
          subComponents: [{ startIndex: 0, words: [{ word: "connects" }] }]
        },
        {
          start: 5, end: 6, label: "宾语1", phonetic: "/ˈbʌsəlɪŋ/ /ˈkæpɪtəlz/", translation: "繁华的首都",
          subComponents: [{ startIndex: 0, words: [{ word: "bustling" }, { word: "capitals" }] }]
        },
        {
          start: 7, end: 7, label: "介词", phonetic: "/wɪð/", translation: "与",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }] }]
        },
        {
          start: 8, end: 10, label: "宾语2", phonetic: "/ˌpɪktʃəˈrɛsk/ /ˈkoʊstəl/ /taʊnz/", translation: "风景如画的沿海城镇",
          subComponents: [{ startIndex: 0, words: [{ word: "picturesque" }, { word: "coastal" }, { word: "towns", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "铁路交通", text: "transcontinental (横贯大陆的), picturesque (风景如画的), bustling (繁华的)" }
      ]
    },
    {
      id: "q_travel_s103",
      chinese: "商务旅客通常优先选择航班衔接紧凑且提供可靠Wi-Fi的航线",
      english_full: "Business travelers typically prioritize routes with tight connections and reliable in-flight Wi-Fi.",
      words: [
        { word: "Business" }, { word: "travelers" }, { word: "typically" }, { word: "prioritize" }, { word: "routes" }, { word: "with" }, { word: "tight" }, { word: "connections" }, { word: "and" }, { word: "reliable" }, { word: "in-flight" }, { word: "Wi-Fi", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈbɪznɪs/ /ˈtrævələrz/", translation: "商务旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Business" }, { word: "travelers" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/praɪˈɒrɪtaɪz/", translation: "优先选择",
          subComponents: [{ startIndex: 0, words: [{ word: "prioritize" }] }]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/ruːts/ /wɪð/ /taɪt/ /kəˈnɛkʃənz/ /ænd/ /rɪˈlaɪəbəl/ /ɪn-flaɪt/ /ˈwaɪfaɪ/", translation: "航班衔接紧凑且提供可靠Wi-Fi的航线",
          subComponents: [{ startIndex: 0, words: [{ word: "routes" }, { word: "with" }, { word: "tight" }, { word: "connections" }, { word: "and" }, { word: "reliable" }, { word: "in-flight" }, { word: "Wi-Fi", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商务出行", text: "tight connections (紧凑衔接), in-flight Wi-Fi (机上Wi-Fi), prioritize (优先选择)" }
      ]
    },
    {
      id: "q_travel_s104",
      chinese: "邮轮公司在旺季往往会对舱位价格实施动态定价策略",
      english_full: "Cruise operators frequently implement dynamic pricing strategies for cabin fares during peak seasons.",
      words: [
        { word: "Cruise" }, { word: "operators" }, { word: "frequently" }, { word: "implement" }, { word: "dynamic" }, { word: "pricing" }, { word: "strategies" }, { word: "for" }, { word: "cabin" }, { word: "fares" }, { word: "during" }, { word: "peak" }, { word: "seasons", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/kruːz/ /ˈɒpəreɪtərz/", translation: "邮轮公司",
          subComponents: [{ startIndex: 0, words: [{ word: "Cruise" }, { word: "operators" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ˈfriːkwəntli/", translation: "往往",
          subComponents: [{ startIndex: 0, words: [{ word: "frequently" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɪmplɪmənt/", translation: "实施",
          subComponents: [{ startIndex: 0, words: [{ word: "implement" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/daɪˈnæmɪk/ /ˈpraɪsɪŋ/ /ˈstrætədʒiz/", translation: "动态定价策略",
          subComponents: [{ startIndex: 0, words: [{ word: "dynamic" }, { word: "pricing" }, { word: "strategies" }] }]
        },
        {
          start: 7, end: 12, label: "对象状语", phonetic: "/fɔːr/ /ˈkæbɪn/ /fɛərz/ /ˈdjʊərɪŋ/ /piːk/ /ˈsiːznz/", translation: "针对旺季舱位价格",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "cabin" }, { word: "fares" }, { word: "during" }, { word: "peak" }, { word: "seasons", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "邮轮旅游", text: "dynamic pricing (动态定价), cabin fare (舱位价格), peak season (旺季)" }
      ]
    },
    {
      id: "q_travel_s105",
      chinese: "自驾游爱好者应提前核实跨境公路的通行许可与保险要求",
      english_full: "Self-drive enthusiasts should verify cross-border road permits and insurance requirements in advance.",
      words: [
        { word: "Self-drive" }, { word: "enthusiasts" }, { word: "should" }, { word: "verify" }, { word: "cross-border" }, { word: "road" }, { word: "permits" }, { word: "and" }, { word: "insurance" }, { word: "requirements" }, { word: "in" }, { word: "advance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/sɛlf-draɪv/ /ɪnˈθjuːziæsts/", translation: "自驾游爱好者",
          subComponents: [{ startIndex: 0, words: [{ word: "Self-drive" }, { word: "enthusiasts" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ʃʊd/ /ˈvɛrɪfaɪ/", translation: "应核实",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "verify" }] }]
        },
        {
          start: 4, end: 11, label: "宾语", phonetic: "/krɒs-ˈbɔːrdər/ /roʊd/ /ˈpɜːrmɪts/ /ænd/ /ɪnˈʃʊərəns/ /rɪˈkwaɪərmənts/ /ɪn/ /ædˈvɑːns/", translation: "跨境公路通行许可与保险要求",
          subComponents: [{ startIndex: 0, words: [{ word: "cross-border" }, { word: "road" }, { word: "permits" }, { word: "and" }, { word: "insurance" }, { word: "requirements" }, { word: "in" }, { word: "advance", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "自驾出行", text: "cross-border permit (跨境许可), self-drive (自驾游), verify in advance (提前核实)" }
      ]
    },
    {
      id: "q_travel_s106",
      chinese: "这座古城的联合国教科文组织遗产地位吸引了源源不断的国际游客",
      english_full: "The ancient city's UNESCO World Heritage status attracts a steady influx of international visitors.",
      words: [
        { word: "The" }, { word: "ancient" }, { word: "city's" }, { word: "UNESCO" }, { word: "World" }, { word: "Heritage" }, { word: "status" }, { word: "attracts" }, { word: "a" }, { word: "steady" }, { word: "influx" }, { word: "of" }, { word: "international" }, { word: "visitors", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ði/ /ˈeɪnʃənt/ /ˈsɪtiz/ /juː-nɛskəʊ/ /wɜːld/ /ˈhɛrɪtɪdʒ/ /ˈsteɪtəs/", translation: "这座古城的联合国教科文组织遗产地位",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "ancient" }, { word: "city's" }, { word: "UNESCO" }, { word: "World" }, { word: "Heritage" }, { word: "status" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/əˈtrækts/", translation: "吸引了",
          subComponents: [{ startIndex: 0, words: [{ word: "attracts" }] }]
        },
        {
          start: 8, end: 13, label: "宾语", phonetic: "/ə/ /ˈstɛdi/ /ˈɪnflʌks/ /ɒv/ /ˌɪntərˈnæʃənəl/ /ˈvɪzɪtərz/", translation: "源源不断的国际游客",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "steady" }, { word: "influx" }, { word: "of" }, { word: "international" }, { word: "visitors", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "文化遗产", text: "World Heritage status (世界遗产地位), steady influx (稳定涌入), UNESCO (联合国教科文组织)" }
      ]
    },
    {
      id: "q_travel_s107",
      chinese: "长途巴士运营商已在主要线路上全面部署符合排放标准的清洁能源车辆",
      english_full: "Long-distance bus operators have fully deployed emission-compliant clean-energy vehicles on major routes.",
      words: [
        { word: "Long-distance" }, { word: "bus" }, { word: "operators" }, { word: "have" }, { word: "fully" }, { word: "deployed" }, { word: "emission-compliant" }, { word: "clean-energy" }, { word: "vehicles" }, { word: "on" }, { word: "major" }, { word: "routes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/lɒŋ-ˈdɪstəns/ /bʌs/ /ˈɒpəreɪtərz/", translation: "长途巴士运营商",
          subComponents: [{ startIndex: 0, words: [{ word: "Long-distance" }, { word: "bus" }, { word: "operators" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /ˈfʊli/ /dɪˈplɔɪd/", translation: "已全面部署",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "fully" }, { word: "deployed" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ɪˈmɪʃən-kəmˈplaɪənt/ /kliːn-ˈɛnərdʒi/ /ˈviːɪkəlz/", translation: "符合排放标准的清洁能源车辆",
          subComponents: [{ startIndex: 0, words: [{ word: "emission-compliant" }, { word: "clean-energy" }, { word: "vehicles" }] }]
        },
        {
          start: 9, end: 11, label: "地点状语", phonetic: "/ɒn/ /ˈmeɪdʒər/ /ruːts/", translation: "在主要线路上",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "major" }, { word: "routes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公路客运", text: "emission-compliant (符合排放标准的), clean-energy vehicle (清洁能源车辆), deploy (部署)" }
      ]
    },
    {
      id: "q_travel_s108",
      chinese: "旅行社为高端客户量身定制涵盖私人导览与专属接送的奢华行程",
      english_full: "Travel agencies tailor bespoke itineraries featuring private guided tours and exclusive transfers for premium clients.",
      words: [
        { word: "Travel" }, { word: "agencies" }, { word: "tailor" }, { word: "bespoke" }, { word: "itineraries" }, { word: "featuring" }, { word: "private" }, { word: "guided" }, { word: "tours" }, { word: "and" }, { word: "exclusive" }, { word: "transfers" }, { word: "for" }, { word: "premium" }, { word: "clients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈtrævəl/ /ˈeɪdʒənsiz/", translation: "旅行社",
          subComponents: [{ startIndex: 0, words: [{ word: "Travel" }, { word: "agencies" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈteɪlər/", translation: "量身定制",
          subComponents: [{ startIndex: 0, words: [{ word: "tailor" }] }]
        },
        {
          start: 3, end: 14, label: "宾语", phonetic: "/bɪˈspoʊk/ /aɪˈtɪnərɛriz/ /ˈfiːtʃərɪŋ/ /ˈpraɪvət/ /ˈɡaɪdɪd/ /tʊərz/ /ænd/ /ɪkˈskluːsɪv/ /ˈtrænsfɜːrz/ /fɔːr/ /ˈpriːmiəm/ /ˈklaɪənts/", translation: "涵盖私人导览与专属接送的奢华行程",
          subComponents: [{ startIndex: 0, words: [{ word: "bespoke" }, { word: "itineraries" }, { word: "featuring" }, { word: "private" }, { word: "guided" }, { word: "tours" }, { word: "and" }, { word: "exclusive" }, { word: "transfers" }, { word: "for" }, { word: "premium" }, { word: "clients", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定制旅游", text: "bespoke itinerary (定制行程), exclusive transfer (专属接送), premium client (高端客户)" }
      ]
    },
    {
      id: "q_travel_s109",
      chinese: "雨季期间，通往国家公园的山区道路可能因滑坡而临时封闭",
      english_full: "During the rainy season, mountain roads leading to national parks may be temporarily closed due to landslides.",
      words: [
        { word: "During" }, { word: "the" }, { word: "rainy" }, { word: "season", punctuation: "," }, { word: "mountain" }, { word: "roads" }, { word: "leading" }, { word: "to" }, { word: "national" }, { word: "parks" }, { word: "may" }, { word: "be" }, { word: "temporarily" }, { word: "closed" }, { word: "due" }, { word: "to" }, { word: "landslides", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /ˈreɪni/ /ˈsiːzn/", translation: "雨季期间",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "the" }, { word: "rainy" }, { word: "season", punctuation: "," }] }]
        },
        {
          start: 4, end: 9, label: "主语", phonetic: "/ˈmaʊntɪn/ /roʊdz/ /ˈliːdɪŋ/ /tuː/ /ˈnæʃənəl/ /pɑːrks/", translation: "通往国家公园的山区道路",
          subComponents: [{ startIndex: 0, words: [{ word: "mountain" }, { word: "roads" }, { word: "leading" }, { word: "to" }, { word: "national" }, { word: "parks" }] }]
        },
        {
          start: 10, end: 13, label: "谓语(被)", phonetic: "/meɪ/ /biː/ /ˈtɛmpərərɪli/ /kloʊzd/", translation: "可能临时封闭",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "be" }, { word: "temporarily" }, { word: "closed" }] }]
        },
        {
          start: 14, end: 16, label: "原因状语", phonetic: "/djuː/ /tuː/ /ˈlændslaɪdz/", translation: "因滑坡",
          subComponents: [{ startIndex: 0, words: [{ word: "due" }, { word: "to" }, { word: "landslides", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "路况安全", text: "landslide (滑坡), temporarily closed (临时封闭), rainy season (雨季)" }
      ]
    },
    {
      id: "q_travel_s110",
      chinese: "共享出行平台显著降低了城市中心与机场之间的通勤成本",
      english_full: "Ride-sharing platforms have significantly reduced commuting costs between city centers and airports.",
      words: [
        { word: "Ride-sharing" }, { word: "platforms" }, { word: "have" }, { word: "significantly" }, { word: "reduced" }, { word: "commuting" }, { word: "costs" }, { word: "between" }, { word: "city" }, { word: "centers" }, { word: "and" }, { word: "airports", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/raɪd-ˈʃɛərɪŋ/ /ˈplætfɔːrmz/", translation: "共享出行平台",
          subComponents: [{ startIndex: 0, words: [{ word: "Ride-sharing" }, { word: "platforms" }] }]
        },
        {
          start: 2, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /ˌsɪɡnɪfɪkəntli/ /rɪˈdjuːst/", translation: "已显著降低",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "reduced" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/kəˈmjuːtɪŋ/ /kɒsts/", translation: "通勤成本",
          subComponents: [{ startIndex: 0, words: [{ word: "commuting" }, { word: "costs" }] }]
        },
        {
          start: 7, end: 11, label: "范围状语", phonetic: "/bɪˈtwiːn/ /ˈsɪti/ /ˈsɛntərz/ /ænd/ /ˈɛərpɔːrts/", translation: "城市中心与机场之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "city" }, { word: "centers" }, { word: "and" }, { word: "airports", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "共享交通", text: "ride-sharing platform (共享出行平台), commuting cost (通勤成本), city center (城市中心)" }
      ]
    },
    {
      id: "q_travel_s111",
      chinese: "这条风景道被公认为观赏秋叶与层叠瀑布的最佳自驾路线之一",
      english_full: "This scenic byway is widely regarded as one of the finest self-drive routes for viewing autumn foliage and cascading waterfalls.",
      words: [
        { word: "This" }, { word: "scenic" }, { word: "byway" }, { word: "is" }, { word: "widely" }, { word: "regarded" }, { word: "as" }, { word: "one" }, { word: "of" }, { word: "the" }, { word: "finest" }, { word: "self-drive" }, { word: "routes" }, { word: "for" }, { word: "viewing" }, { word: "autumn" }, { word: "foliage" }, { word: "and" }, { word: "cascading" }, { word: "waterfalls", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ˈsiːnɪk/ /ˈbaɪweɪ/", translation: "这条风景道",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "scenic" }, { word: "byway" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(被)", phonetic: "/ɪz/ /ˈwaɪdli/ /rɪˈɡɑːrdɪd/", translation: "被广泛认为",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "widely" }, { word: "regarded" }] }]
        },
        {
          start: 6, end: 19, label: "表语", phonetic: "/æz/ /wʌn/ /ɒv/ /ðə/ /ˈfaɪnɪst/ /sɛlf-draɪv/ /ruːts/ /fɔːr/ /ˈvjuːɪŋ/ /ˈɔːtəm/ /ˈfoʊlɪdʒ/ /ænd/ /kæsˈkeɪdɪŋ/ /ˈwɔːtərfɔːlz/", translation: "观赏秋叶与层叠瀑布的最佳自驾路线之一",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "one" }, { word: "of" }, { word: "the" }, { word: "finest" }, { word: "self-drive" }, { word: "routes" }, { word: "for" }, { word: "viewing" }, { word: "autumn" }, { word: "foliage" }, { word: "and" }, { word: "cascading" }, { word: "waterfalls", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "自驾观光", text: "scenic byway (风景道), autumn foliage (秋叶), cascading waterfall (层叠瀑布)" }
      ]
    },
    {
      id: "q_travel_s112",
      chinese: "旅游签证政策的放宽有望刺激来自新兴市场的入境客流",
      english_full: "The relaxation of tourist visa policies is expected to stimulate inbound traffic from emerging markets.",
      words: [
        { word: "The" }, { word: "relaxation" }, { word: "of" }, { word: "tourist" }, { word: "visa" }, { word: "policies" }, { word: "is" }, { word: "expected" }, { word: "to" }, { word: "stimulate" }, { word: "inbound" }, { word: "traffic" }, { word: "from" }, { word: "emerging" }, { word: "markets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˌriːlækˈseɪʃən/ /ɒv/ /ˈtʊrɪst/ /ˈviːzə/ /ˈpɒlɪsiz/", translation: "旅游签证政策的放宽",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "relaxation" }, { word: "of" }, { word: "tourist" }, { word: "visa" }, { word: "policies" }] }]
        },
        {
          start: 6, end: 8, label: "谓语(被)", phonetic: "/ɪz/ /ɪkˈspɛktɪd/ /tuː/", translation: "有望",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "expected" }, { word: "to" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/ˈstɪmjəleɪt/", translation: "刺激",
          subComponents: [{ startIndex: 0, words: [{ word: "stimulate" }] }]
        },
        {
          start: 10, end: 14, label: "宾语", phonetic: "/ˈɪnbaʊnd/ /ˈtræfɪk/ /frɒm/ /ɪˈmɜːrdʒɪŋ/ /ˈmɑːrkɪts/", translation: "来自新兴市场的入境客流",
          subComponents: [{ startIndex: 0, words: [{ word: "inbound" }, { word: "traffic" }, { word: "from" }, { word: "emerging" }, { word: "markets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "签证政策", text: "visa policy relaxation (签证政策放宽), inbound traffic (入境客流), emerging market (新兴市场)" }
      ]
    },
    {
      id: "q_travel_s113",
      chinese: "探险旅游运营商必须为参与者提供全面的野外急救与卫星通信保障",
      english_full: "Adventure tour operators must provide participants with comprehensive wilderness first-aid and satellite communication coverage.",
      words: [
        { word: "Adventure" }, { word: "tour" }, { word: "operators" }, { word: "must" }, { word: "provide" }, { word: "participants" }, { word: "with" }, { word: "comprehensive" }, { word: "wilderness" }, { word: "first-aid" }, { word: "and" }, { word: "satellite" }, { word: "communication" }, { word: "coverage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ədˈvɛntʃər/ /tʊər/ /ˈɒpəreɪtərz/", translation: "探险旅游运营商",
          subComponents: [{ startIndex: 0, words: [{ word: "Adventure" }, { word: "tour" }, { word: "operators" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/mʌst/ /prəˈvaɪd/", translation: "必须提供",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "provide" }] }]
        },
        {
          start: 5, end: 5, label: "间接宾语", phonetic: "/pɑːrˈtɪsɪpənts/", translation: "参与者",
          subComponents: [{ startIndex: 0, words: [{ word: "participants" }] }]
        },
        {
          start: 6, end: 13, label: "直接宾语", phonetic: "/wɪð/ /ˌkɒmprɪˈhɛnsɪv/ /ˈwɪldərnəs/ /fɜːrst-eɪd/ /ænd/ /ˈsætəlaɪt/ /ˌkɒmjʊnɪˈkeɪʃən/ /ˈkʌvərɪdʒ/", translation: "全面的野外急救与卫星通信保障",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "comprehensive" }, { word: "wilderness" }, { word: "first-aid" }, { word: "and" }, { word: "satellite" }, { word: "communication" }, { word: "coverage", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "探险旅游", text: "wilderness first-aid (野外急救), satellite communication (卫星通信), adventure tour (探险旅游)" }
      ]
    },
    {
      id: "q_travel_s114",
      chinese: "这座港口城市凭借其深水泊位成为区域邮轮旅游的重要枢纽",
      english_full: "This port city has become a pivotal hub for regional cruise tourism thanks to its deep-water berths.",
      words: [
        { word: "This" }, { word: "port" }, { word: "city" }, { word: "has" }, { word: "become" }, { word: "a" }, { word: "pivotal" }, { word: "hub" }, { word: "for" }, { word: "regional" }, { word: "cruise" }, { word: "tourism" }, { word: "thanks" }, { word: "to" }, { word: "its" }, { word: "deep-water" }, { word: "berths", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /pɔːrt/ /ˈsɪti/", translation: "这座港口城市",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "port" }, { word: "city" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæs/ /bɪˈkʌm/", translation: "已成为",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "become" }] }]
        },
        {
          start: 5, end: 11, label: "表语", phonetic: "/ə/ /ˈpɪvətl/ /hʌb/ /fɔːr/ /ˈriːdʒənəl/ /kruːz/ /ˈtʊrɪzəm/", translation: "区域邮轮旅游的重要枢纽",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "pivotal" }, { word: "hub" }, { word: "for" }, { word: "regional" }, { word: "cruise" }, { word: "tourism" }] }]
        },
        {
          start: 12, end: 16, label: "原因状语", phonetic: "/θæŋks/ /tuː/ /ɪts/ /diːp-ˈwɔːtər/ /bɜːrθs/", translation: "凭借其深水泊位",
          subComponents: [{ startIndex: 0, words: [{ word: "thanks" }, { word: "to" }, { word: "its" }, { word: "deep-water" }, { word: "berths", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "港口邮轮", text: "deep-water berth (深水泊位), cruise tourism hub (邮轮旅游枢纽), pivotal (关键的)" }
      ]
    },
    {
      id: "q_travel_s115",
      chinese: "智能导航系统能够根据实时路况动态调整最优行驶路线",
      english_full: "Intelligent navigation systems can dynamically adjust optimal driving routes based on real-time traffic conditions.",
      words: [
        { word: "Intelligent" }, { word: "navigation" }, { word: "systems" }, { word: "can" }, { word: "dynamically" }, { word: "adjust" }, { word: "optimal" }, { word: "driving" }, { word: "routes" }, { word: "based" }, { word: "on" }, { word: "real-time" }, { word: "traffic" }, { word: "conditions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɪnˈtɛlɪdʒənt/ /ˌnævɪˈɡeɪʃən/ /ˈsɪstəmz/", translation: "智能导航系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Intelligent" }, { word: "navigation" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/kæn/ /daɪˈnæmɪkli/ /əˈdʒʌst/", translation: "能够动态调整",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "dynamically" }, { word: "adjust" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ˈɒptɪməl/ /ˈdraɪvɪŋ/ /ruːts/", translation: "最优行驶路线",
          subComponents: [{ startIndex: 0, words: [{ word: "optimal" }, { word: "driving" }, { word: "routes" }] }]
        },
        {
          start: 9, end: 13, label: "依据状语", phonetic: "/beɪst/ /ɒn/ /riːl-taɪm/ /ˈtræfɪk/ /kənˈdɪʃənz/", translation: "根据实时路况",
          subComponents: [{ startIndex: 0, words: [{ word: "based" }, { word: "on" }, { word: "real-time" }, { word: "traffic" }, { word: "conditions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "智能导航", text: "real-time traffic (实时路况), optimal route (最优路线), navigation system (导航系统)" }
      ]
    },
    {
      id: "q_travel_s116",
      chinese: "背包客通常倾向于入住青年旅舍以最大限度地节省旅行开支",
      english_full: "Backpackers typically prefer staying at hostels to minimize travel expenses as much as possible.",
      words: [
        { word: "Backpackers" }, { word: "typically" }, { word: "prefer" }, { word: "staying" }, { word: "at" }, { word: "hostels" }, { word: "to" }, { word: "minimize" }, { word: "travel" }, { word: "expenses" }, { word: "as" }, { word: "much" }, { word: "as" }, { word: "possible", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈbækpækərz/", translation: "背包客",
          subComponents: [{ startIndex: 0, words: [{ word: "Backpackers" }] }]
        },
        {
          start: 1, end: 1, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prɪˈfɜːr/", translation: "倾向于",
          subComponents: [{ startIndex: 0, words: [{ word: "prefer" }] }]
        },
        {
          start: 3, end: 13, label: "宾语", phonetic: "/ˈsteɪɪŋ/ /æt/ /ˈhɒstəlz/ /tuː/ /ˈmɪnɪmaɪz/ /ˈtrævəl/ /ɪkˈspɛnsɪz/ /æz/ /mʌtʃ/ /æz/ /ˈpɒsəbəl/", translation: "入住青年旅舍以最大限度地节省旅行开支",
          subComponents: [{ startIndex: 0, words: [{ word: "staying" }, { word: "at" }, { word: "hostels" }, { word: "to" }, { word: "minimize" }, { word: "travel" }, { word: "expenses" }, { word: "as" }, { word: "much" }, { word: "as" }, { word: "possible", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "背包旅行", text: "backpacker (背包客), hostel (青年旅舍), minimize expenses (节省开支)" }
      ]
    },
    {
      id: "q_travel_s117",
      chinese: "跨境高铁的开通将两个经济特区的通勤时间缩短至三十分钟以内",
      english_full: "The launch of cross-border high-speed rail has shortened commuting times between the two special economic zones to under thirty minutes.",
      words: [
        { word: "The" }, { word: "launch" }, { word: "of" }, { word: "cross-border" }, { word: "high-speed" }, { word: "rail" }, { word: "has" }, { word: "shortened" }, { word: "commuting" }, { word: "times" }, { word: "between" }, { word: "the" }, { word: "two" }, { word: "special" }, { word: "economic" }, { word: "zones" }, { word: "to" }, { word: "under" }, { word: "thirty" }, { word: "minutes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /lɔːntʃ/ /ɒv/ /krɒs-ˈbɔːrdər/ /haɪ-spiːd/ /reɪl/", translation: "跨境高铁的开通",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "launch" }, { word: "of" }, { word: "cross-border" }, { word: "high-speed" }, { word: "rail" }] }]
        },
        {
          start: 6, end: 7, label: "谓语(现完)", phonetic: "/hæz/ /ˈʃɔːrtənd/", translation: "已将…缩短",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "shortened" }] }]
        },
        {
          start: 8, end: 9, label: "宾语", phonetic: "/kəˈmjuːtɪŋ/ /taɪmz/", translation: "通勤时间",
          subComponents: [{ startIndex: 0, words: [{ word: "commuting" }, { word: "times" }] }]
        },
        {
          start: 10, end: 15, label: "范围状语", phonetic: "/bɪˈtwiːn/ /ðə/ /tuː/ /ˈspɛʃəl/ /ˌiːkəˈnɒmɪk/ /zoʊnz/", translation: "两个经济特区之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "the" }, { word: "two" }, { word: "special" }, { word: "economic" }, { word: "zones" }] }]
        },
        {
          start: 16, end: 19, label: "结果状语", phonetic: "/tuː/ /ˈʌndər/ /ˈθɜːrti/ /ˈmɪnɪts/", translation: "至三十分钟以内",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "under" }, { word: "thirty" }, { word: "minutes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "高铁出行", text: "high-speed rail (高铁), special economic zone (经济特区), commuting time (通勤时间)" }
      ]
    },
    {
      id: "q_travel_s118",
      chinese: "旅游保险条款通常明确排除因已知流行病或预存疾病引发的索赔",
      english_full: "Travel insurance policies typically exclude claims arising from known epidemics or pre-existing medical conditions.",
      words: [
        { word: "Travel" }, { word: "insurance" }, { word: "policies" }, { word: "typically" }, { word: "exclude" }, { word: "claims" }, { word: "arising" }, { word: "from" }, { word: "known" }, { word: "epidemics" }, { word: "or" }, { word: "pre-existing" }, { word: "medical" }, { word: "conditions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈtrævəl/ /ɪnˈʃʊərəns/ /ˈpɒlɪsiz/", translation: "旅游保险条款",
          subComponents: [{ startIndex: 0, words: [{ word: "Travel" }, { word: "insurance" }, { word: "policies" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪkˈskluːd/", translation: "排除",
          subComponents: [{ startIndex: 0, words: [{ word: "exclude" }] }]
        },
        {
          start: 5, end: 13, label: "宾语", phonetic: "/kleɪmz/ /əˈraɪzɪŋ/ /frɒm/ /noʊn/ /ˌɛpɪˈdɛmɪks/ /ɔːr/ /priː-ɪɡˈzɪstɪŋ/ /ˈmɛdɪkəl/ /kənˈdɪʃənz/", translation: "因已知流行病或预存疾病引发的索赔",
          subComponents: [{ startIndex: 0, words: [{ word: "claims" }, { word: "arising" }, { word: "from" }, { word: "known" }, { word: "epidemics" }, { word: "or" }, { word: "pre-existing" }, { word: "medical" }, { word: "conditions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "旅行保险", text: "pre-existing condition (预存疾病), exclude claims (排除索赔), travel insurance policy (旅游保险条款)" }
      ]
    },
    {
      id: "q_travel_s119",
      chinese: "当地导游凭借对民俗传统的深入了解，为游客提供了真实的文化体验",
      english_full: "Local guides leverage their in-depth knowledge of folk traditions to deliver authentic cultural experiences for visitors.",
      words: [
        { word: "Local" }, { word: "guides" }, { word: "leverage" }, { word: "their" }, { word: "in-depth" }, { word: "knowledge" }, { word: "of" }, { word: "folk" }, { word: "traditions" }, { word: "to" }, { word: "deliver" }, { word: "authentic" }, { word: "cultural" }, { word: "experiences" }, { word: "for" }, { word: "visitors", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈloʊkəl/ /ɡaɪdz/", translation: "当地导游",
          subComponents: [{ startIndex: 0, words: [{ word: "Local" }, { word: "guides" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈlɛvərɪdʒ/", translation: "凭借/运用",
          subComponents: [{ startIndex: 0, words: [{ word: "leverage" }] }]
        },
        {
          start: 3, end: 10, label: "宾语", phonetic: "/ðɛr/ /ɪn-dɛpθ/ /ˈnɒlɪdʒ/ /ɒv/ /foʊk/ /trəˈdɪʃənz/ /tuː/ /dɪˈlɪvər/", translation: "对民俗传统的深入了解以提供",
          subComponents: [{ startIndex: 0, words: [{ word: "their" }, { word: "in-depth" }, { word: "knowledge" }, { word: "of" }, { word: "folk" }, { word: "traditions" }, { word: "to" }, { word: "deliver" }] }]
        },
        {
          start: 11, end: 15, label: "宾补", phonetic: "/ɔːˈθɛntɪk/ /ˈkʌltʃərəl/ /ɪkˈspɪriənsɪz/ /fɔːr/ /ˈvɪzɪtərz/", translation: "真实的文化体验",
          subComponents: [{ startIndex: 0, words: [{ word: "authentic" }, { word: "cultural" }, { word: "experiences" }, { word: "for" }, { word: "visitors", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "文化导览", text: "folk tradition (民俗传统), authentic experience (真实体验), leverage knowledge (运用知识)" }
      ]
    },
    {
      id: "q_travel_s120",
      chinese: "夜间长途列车配备了可完全放平的卧铺，以确保旅客获得充分休息",
      english_full: "Overnight long-distance trains are equipped with fully reclining berths to ensure passengers receive adequate rest.",
      words: [
        { word: "Overnight" }, { word: "long-distance" }, { word: "trains" }, { word: "are" }, { word: "equipped" }, { word: "with" }, { word: "fully" }, { word: "reclining" }, { word: "berths" }, { word: "to" }, { word: "ensure" }, { word: "passengers" }, { word: "receive" }, { word: "adequate" }, { word: "rest", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌoʊvərˈnaɪt/ /lɒŋ-ˈdɪstəns/ /treɪnz/", translation: "夜间长途列车",
          subComponents: [{ startIndex: 0, words: [{ word: "Overnight" }, { word: "long-distance" }, { word: "trains" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被)", phonetic: "/ɑːr/ /ɪˈkwɪpt/", translation: "配备了",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "equipped" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/wɪð/ /ˈfʊli/ /rɪˈklaɪnɪŋ/ /bɜːrθs/", translation: "可完全放平的卧铺",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "fully" }, { word: "reclining" }, { word: "berths" }] }]
        },
        {
          start: 9, end: 14, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˈpæsəndʒərz/ /rɪˈsiːv/ /ˈædɪkwət/ /rɛst/", translation: "以确保旅客获得充分休息",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "passengers" }, { word: "receive" }, { word: "adequate" }, { word: "rest", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "铁路卧铺", text: "reclining berth (可放平卧铺), overnight train (夜间列车), adequate rest (充分休息)" }
      ]
    },
    {
      id: "q_travel_s121",
      chinese: "过度旅游已对这座历史古城的基础设施造成了难以忽视的压力",
      english_full: "Overtourism has placed considerable strain on the infrastructure of this historic ancient city.",
      words: [
        { word: "Overtourism" }, { word: "has" }, { word: "placed" }, { word: "considerable" }, { word: "strain" }, { word: "on" }, { word: "the" }, { word: "infrastructure" }, { word: "of" }, { word: "this" }, { word: "historic" }, { word: "ancient" }, { word: "city", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˌoʊvərˈtʊrɪzəm/", translation: "过度旅游",
          subComponents: [{ startIndex: 0, words: [{ word: "Overtourism" }] }]
        },
        {
          start: 1, end: 2, label: "谓语(现完)", phonetic: "/hæz/ /pleɪst/", translation: "已对…造成",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "placed" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/kənˈsɪdərəbəl/ /streɪn/", translation: "难以忽视的压力",
          subComponents: [{ startIndex: 0, words: [{ word: "considerable" }, { word: "strain" }] }]
        },
        {
          start: 5, end: 12, label: "对象", phonetic: "/ɒn/ /ði/ /ˈɪnfrəstrʌktʃər/ /ɒv/ /ðɪs/ /hɪˈstɒrɪk/ /ˈeɪnʃənt/ /ˈsɪti/", translation: "这座历史古城的基础设施",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "infrastructure" }, { word: "of" }, { word: "this" }, { word: "historic" }, { word: "ancient" }, { word: "city", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "过度旅游", text: "overtourism (过度旅游), considerable strain (难以忽视的压力), historic city (历史古城)" }
      ]
    },
    {
      id: "q_travel_s122",
      chinese: "租车公司要求在取车时出示有效的国际驾驶许可与信用卡授权",
      english_full: "Car rental companies require presentation of a valid international driving permit and credit card authorization at pickup.",
      words: [
        { word: "Car" }, { word: "rental" }, { word: "companies" }, { word: "require" }, { word: "presentation" }, { word: "of" }, { word: "a" }, { word: "valid" }, { word: "international" }, { word: "driving" }, { word: "permit" }, { word: "and" }, { word: "credit" }, { word: "card" }, { word: "authorization" }, { word: "at" }, { word: "pickup", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/kɑːr/ /ˈrɛntəl/ /ˈkʌmpəniz/", translation: "租车公司",
          subComponents: [{ startIndex: 0, words: [{ word: "Car" }, { word: "rental" }, { word: "companies" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 4, end: 16, label: "宾语", phonetic: "/ˌprɛzənˈteɪʃən/ /ɒv/ /ə/ /ˈvælɪd/ /ˌɪntərˈnæʃənəl/ /ˈdraɪvɪŋ/ /ˈpɜːrmɪt/ /ænd/ /ˈkrɛdɪt/ /kɑːrd/ /ˌɔːθərɪˈzeɪʃən/ /æt/ /ˈpɪkʌp/", translation: "取车时出示有效国际驾驶许可与信用卡授权",
          subComponents: [{ startIndex: 0, words: [{ word: "presentation" }, { word: "of" }, { word: "a" }, { word: "valid" }, { word: "international" }, { word: "driving" }, { word: "permit" }, { word: "and" }, { word: "credit" }, { word: "card" }, { word: "authorization" }, { word: "at" }, { word: "pickup", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "租车服务", text: "international driving permit (国际驾驶许可), credit card authorization (信用卡授权), car rental (租车)" }
      ]
    },
    {
      id: "q_travel_s123",
      chinese: "这条环海骑行道每年吸引数以万计的骑行爱好者前来挑战",
      english_full: "This coastal cycling route attracts tens of thousands of cycling enthusiasts every year.",
      words: [
        { word: "This" }, { word: "coastal" }, { word: "cycling" }, { word: "route" }, { word: "attracts" }, { word: "tens" }, { word: "of" }, { word: "thousands" }, { word: "of" }, { word: "cycling" }, { word: "enthusiasts" }, { word: "every" }, { word: "year", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ˈkoʊstəl/ /ˈsaɪklɪŋ/ /ruːt/", translation: "这条环海骑行道",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "coastal" }, { word: "cycling" }, { word: "route" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈtrækts/", translation: "吸引",
          subComponents: [{ startIndex: 0, words: [{ word: "attracts" }] }]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/tɛnz/ /ɒv/ /ˈθaʊzəndz/ /ɒv/ /ˈsaɪklɪŋ/ /ɪnˈθjuːziæsts/", translation: "数以万计的骑行爱好者",
          subComponents: [{ startIndex: 0, words: [{ word: "tens" }, { word: "of" }, { word: "thousands" }, { word: "of" }, { word: "cycling" }, { word: "enthusiasts" }] }]
        },
        {
          start: 11, end: 12, label: "时间状语", phonetic: "/ˈɛvri/ /jɪər/", translation: "每年",
          subComponents: [{ startIndex: 0, words: [{ word: "every" }, { word: "year", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "骑行旅游", text: "cycling route (骑行道), cycling enthusiast (骑行爱好者), coastal route (环海路线)" }
      ]
    },
    {
      id: "q_travel_s124",
      chinese: "目的地营销机构正利用社交媒体影响者来推广小众但高价值的旅游线路",
      english_full: "Destination marketing organizations are leveraging social media influencers to promote niche yet high-value travel itineraries.",
      words: [
        { word: "Destination" }, { word: "marketing" }, { word: "organizations" }, { word: "are" }, { word: "leveraging" }, { word: "social" }, { word: "media" }, { word: "influencers" }, { word: "to" }, { word: "promote" }, { word: "niche" }, { word: "yet" }, { word: "high-value" }, { word: "travel" }, { word: "itineraries", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌdɛstɪˈneɪʃən/ /ˈmɑːrkɪtɪŋ/ /ˌɔːrɡənɪˈzeɪʃənz/", translation: "目的地营销机构",
          subComponents: [{ startIndex: 0, words: [{ word: "Destination" }, { word: "marketing" }, { word: "organizations" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(进行)", phonetic: "/ɑːr/ /ˈlɛvərɪdʒɪŋ/", translation: "正利用",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "leveraging" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ˈsoʊʃəl/ /ˈmiːdiə/ /ˈɪnfluənsərz/", translation: "社交媒体影响者",
          subComponents: [{ startIndex: 0, words: [{ word: "social" }, { word: "media" }, { word: "influencers" }] }]
        },
        {
          start: 8, end: 14, label: "目的", phonetic: "/tuː/ /prəˈmoʊt/ /niːʃ/ /jɛt/ /haɪ-væljuː/ /ˈtrævəl/ /aɪˈtɪnərɛriz/", translation: "推广小众但高价值的旅游线路",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "promote" }, { word: "niche" }, { word: "yet" }, { word: "high-value" }, { word: "travel" }, { word: "itineraries", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "目的地营销", text: "destination marketing (目的地营销), social media influencer (社交媒体影响者), niche itinerary (小众线路)" }
      ]
    },
    {
      id: "q_travel_s125",
      chinese: "渡轮班次因强风警报而暂停，滞留旅客被安排至附近酒店过夜",
      english_full: "Ferry services were suspended due to gale warnings, and stranded passengers were accommodated at nearby hotels overnight.",
      words: [
        { word: "Ferry" }, { word: "services" }, { word: "were" }, { word: "suspended" }, { word: "due" }, { word: "to" }, { word: "gale" }, { word: "warnings", punctuation: "," }, { word: "and" }, { word: "stranded" }, { word: "passengers" }, { word: "were" }, { word: "accommodated" }, { word: "at" }, { word: "nearby" }, { word: "hotels" }, { word: "overnight", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语1", phonetic: "/ˈfɛri/ /ˈsɜːrvɪsɪz/", translation: "渡轮班次",
          subComponents: [{ startIndex: 0, words: [{ word: "Ferry" }, { word: "services" }] }]
        },
        {
          start: 2, end: 3, label: "谓语1(被)", phonetic: "/wɜːr/ /səˈspɛndɪd/", translation: "因…暂停",
          subComponents: [{ startIndex: 0, words: [{ word: "were" }, { word: "suspended" }] }]
        },
        {
          start: 4, end: 7, label: "原因", phonetic: "/djuː/ /tuː/ /ɡeɪl/ /ˈwɔːrnɪŋz/", translation: "强风警报",
          subComponents: [{ startIndex: 0, words: [{ word: "due" }, { word: "to" }, { word: "gale" }, { word: "warnings", punctuation: "," }] }]
        },
        {
          start: 8, end: 8, label: "连词", phonetic: "/ænd/", translation: "而",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 9, end: 10, label: "主语2", phonetic: "/ˈstrændɪd/ /ˈpæsəndʒərz/", translation: "滞留旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "stranded" }, { word: "passengers" }] }]
        },
        {
          start: 11, end: 12, label: "谓语2(被)", phonetic: "/wɜːr/ /əˈkɒmədeɪtɪd/", translation: "被安排",
          subComponents: [{ startIndex: 0, words: [{ word: "were" }, { word: "accommodated" }] }]
        },
        {
          start: 13, end: 16, label: "地点", phonetic: "/æt/ /ˌnɪərˈbaɪ/ /hoʊˈtɛlz/ /ˌoʊvərˈnaɪt/", translation: "至附近酒店过夜",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "nearby" }, { word: "hotels" }, { word: "overnight", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "海上交通", text: "gale warning (强风警报), stranded passenger (滞留旅客), ferry service (渡轮班次)" }
      ]
    },
    {
      id: "q_travel_s126",
      chinese: "无障碍旅游设施的标准化建设有助于保障残障人士平等的出行权利",
      english_full: "The standardization of accessible tourism facilities helps safeguard equal travel rights for people with disabilities.",
      words: [
        { word: "The" }, { word: "standardization" }, { word: "of" }, { word: "accessible" }, { word: "tourism" }, { word: "facilities" }, { word: "helps" }, { word: "safeguard" }, { word: "equal" }, { word: "travel" }, { word: "rights" }, { word: "for" }, { word: "people" }, { word: "with" }, { word: "disabilities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˌstændədaɪˈzeɪʃən/ /ɒv/ /əkˈsɛsəbəl/ /ˈtʊrɪzəm/ /fəˈsɪlɪtiz/", translation: "无障碍旅游设施的标准化建设",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "standardization" }, { word: "of" }, { word: "accessible" }, { word: "tourism" }, { word: "facilities" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/hɛlps/", translation: "有助于",
          subComponents: [{ startIndex: 0, words: [{ word: "helps" }] }]
        },
        {
          start: 7, end: 7, label: "宾语", phonetic: "/ˈseɪfɡɑːrd/", translation: "保障",
          subComponents: [{ startIndex: 0, words: [{ word: "safeguard" }] }]
        },
        {
          start: 8, end: 14, label: "宾补", phonetic: "/ˈiːkwəl/ /ˈtrævəl/ /raɪts/ /fɔːr/ /ˈpiːpəl/ /wɪð/ /ˌdɪsəˈbɪlɪtiz/", translation: "残障人士平等的出行权利",
          subComponents: [{ startIndex: 0, words: [{ word: "equal" }, { word: "travel" }, { word: "rights" }, { word: "for" }, { word: "people" }, { word: "with" }, { word: "disabilities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "无障碍旅游", text: "accessible tourism (无障碍旅游), equal travel rights (平等出行权), standardization (标准化)" }
      ]
    },
    {
      id: "q_travel_s127",
      chinese: "旅游旺季期间，热门景点的门票往往需要在数周前在线预约",
      english_full: "During peak tourist seasons, admission tickets to popular attractions often require online booking weeks in advance.",
      words: [
        { word: "During" }, { word: "peak" }, { word: "tourist" }, { word: "seasons", punctuation: "," }, { word: "admission" }, { word: "tickets" }, { word: "to" }, { word: "popular" }, { word: "attractions" }, { word: "often" }, { word: "require" }, { word: "online" }, { word: "booking" }, { word: "weeks" }, { word: "in" }, { word: "advance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /piːk/ /ˈtʊrɪst/ /ˈsiːznz/", translation: "旅游旺季期间",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "peak" }, { word: "tourist" }, { word: "seasons", punctuation: "," }] }]
        },
        {
          start: 4, end: 8, label: "主语", phonetic: "/ədˈmɪʃən/ /ˈtɪkɪts/ /tuː/ /ˈpɒpjələr/ /ætˈrækʃənz/", translation: "热门景点的门票",
          subComponents: [{ startIndex: 0, words: [{ word: "admission" }, { word: "tickets" }, { word: "to" }, { word: "popular" }, { word: "attractions" }] }]
        },
        {
          start: 9, end: 9, label: "状语", phonetic: "/ˈɒfən/", translation: "往往",
          subComponents: [{ startIndex: 0, words: [{ word: "often" }] }]
        },
        {
          start: 10, end: 10, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "需要",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 11, end: 15, label: "宾语", phonetic: "/ˈɒnlaɪn/ /ˈbʊkɪŋ/ /wiːks/ /ɪn/ /ædˈvɑːns/", translation: "数周前在线预约",
          subComponents: [{ startIndex: 0, words: [{ word: "online" }, { word: "booking" }, { word: "weeks" }, { word: "in" }, { word: "advance", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "景点预约", text: "peak tourist season (旅游旺季), online booking (在线预约), admission ticket (门票)" }
      ]
    },
    {
      id: "q_travel_s128",
      chinese: "这条跨国公路走廊促进了沿线城镇的商业繁荣与人员往来",
      english_full: "This transnational highway corridor has facilitated commercial prosperity and human mobility across towns along the route.",
      words: [
        { word: "This" }, { word: "transnational" }, { word: "highway" }, { word: "corridor" }, { word: "has" }, { word: "facilitated" }, { word: "commercial" }, { word: "prosperity" }, { word: "and" }, { word: "human" }, { word: "mobility" }, { word: "across" }, { word: "towns" }, { word: "along" }, { word: "the" }, { word: "route", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /trænsˈnæʃənəl/ /ˈhaɪweɪ/ /ˈkɒrɪdɔːr/", translation: "这条跨国公路走廊",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "transnational" }, { word: "highway" }, { word: "corridor" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /fəˈsɪlɪteɪtɪd/", translation: "促进了",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "facilitated" }] }]
        },
        {
          start: 6, end: 10, label: "宾语", phonetic: "/kəˈmɜːrʃəl/ /prɒˈspɛrɪti/ /ænd/ /ˈhjuːmən/ /moʊˈbɪlɪti/", translation: "商业繁荣与人员往来",
          subComponents: [{ startIndex: 0, words: [{ word: "commercial" }, { word: "prosperity" }, { word: "and" }, { word: "human" }, { word: "mobility" }] }]
        },
        {
          start: 11, end: 15, label: "范围", phonetic: "/əˈkrɒs/ /taʊnz/ /əˈlɒŋ/ /ðə/ /ruːt/", translation: "沿线城镇",
          subComponents: [{ startIndex: 0, words: [{ word: "across" }, { word: "towns" }, { word: "along" }, { word: "the" }, { word: "route", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公路走廊", text: "highway corridor (公路走廊), human mobility (人员流动), commercial prosperity (商业繁荣)" }
      ]
    },
    {
      id: "q_travel_s129",
      chinese: "潜水爱好者必须持有有效认证才能在保护区内进行深潜活动",
      english_full: "Scuba diving enthusiasts must hold valid certification before conducting deep dives within protected marine areas.",
      words: [
        { word: "Scuba" }, { word: "diving" }, { word: "enthusiasts" }, { word: "must" }, { word: "hold" }, { word: "valid" }, { word: "certification" }, { word: "before" }, { word: "conducting" }, { word: "deep" }, { word: "dives" }, { word: "within" }, { word: "protected" }, { word: "marine" }, { word: "areas", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈskuːbə/ /ˈdaɪvɪŋ/ /ɪnˈθjuːziæsts/", translation: "潜水爱好者",
          subComponents: [{ startIndex: 0, words: [{ word: "Scuba" }, { word: "diving" }, { word: "enthusiasts" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/mʌst/ /hoʊld/", translation: "必须持有",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "hold" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈvælɪd/ /ˌsɜːrtɪfɪˈkeɪʃən/", translation: "有效认证",
          subComponents: [{ startIndex: 0, words: [{ word: "valid" }, { word: "certification" }] }]
        },
        {
          start: 7, end: 14, label: "时间/条件", phonetic: "/bɪˈfɔːr/ /kənˈdʌktɪŋ/ /diːp/ /daɪvz/ /wɪˈðɪn/ /prəˈtɛktɪd/ /məˈriːn/ /ˈɛəriəz/", translation: "才能在保护区内进行深潜",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "conducting" }, { word: "deep" }, { word: "dives" }, { word: "within" }, { word: "protected" }, { word: "marine" }, { word: "areas", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "水上运动", text: "scuba diving certification (潜水认证), protected marine area (海洋保护区), deep dive (深潜)" }
      ]
    },
    {
      id: "q_travel_s130",
      chinese: "城市观光巴士提供多语种语音导览，方便国际游客了解当地历史",
      english_full: "City sightseeing buses provide multilingual audio guides to help international tourists learn about local history.",
      words: [
        { word: "City" }, { word: "sightseeing" }, { word: "buses" }, { word: "provide" }, { word: "multilingual" }, { word: "audio" }, { word: "guides" }, { word: "to" }, { word: "help" }, { word: "international" }, { word: "tourists" }, { word: "learn" }, { word: "about" }, { word: "local" }, { word: "history", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsɪti/ /ˈsaɪtˌsiːɪŋ/ /ˈbʌsɪz/", translation: "城市观光巴士",
          subComponents: [{ startIndex: 0, words: [{ word: "City" }, { word: "sightseeing" }, { word: "buses" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˌmʌltiˈlɪŋɡwəl/ /ˈɔːdioʊ/ /ɡaɪdz/", translation: "多语种语音导览",
          subComponents: [{ startIndex: 0, words: [{ word: "multilingual" }, { word: "audio" }, { word: "guides" }] }]
        },
        {
          start: 7, end: 14, label: "目的", phonetic: "/tuː/ /hɛlp/ /ˌɪntərˈnæʃənəl/ /ˈtʊrɪsts/ /lɜːrn/ /əˈbaʊt/ /ˈloʊkəl/ /ˈhɪstəri/", translation: "方便国际游客了解当地历史",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "help" }, { word: "international" }, { word: "tourists" }, { word: "learn" }, { word: "about" }, { word: "local" }, { word: "history", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "城市观光", text: "sightseeing bus (观光巴士), audio guide (语音导览), multilingual (多语种的)" }
      ]
    },
    {
      id: "q_travel_s131",
      chinese: "货运与客运共用铁路网络时，时刻表的协调变得尤为复杂",
      english_full: "When freight and passenger services share railway networks, timetable coordination becomes particularly complex.",
      words: [
        { word: "When" }, { word: "freight" }, { word: "and" }, { word: "passenger" }, { word: "services" }, { word: "share" }, { word: "railway" }, { word: "networks", punctuation: "," }, { word: "timetable" }, { word: "coordination" }, { word: "becomes" }, { word: "particularly" }, { word: "complex", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "时间从句", phonetic: "/wɛn/ /freɪt/ /ænd/ /ˈpæsəndʒər/ /ˈsɜːrvɪsɪz/ /ʃɛər/ /ˈreɪlweɪ/ /ˈnɛtwɜːrks/", translation: "货运与客运共用铁路网络时",
          subComponents: [{ startIndex: 0, words: [{ word: "When" }, { word: "freight" }, { word: "and" }, { word: "passenger" }, { word: "services" }, { word: "share" }, { word: "railway" }, { word: "networks", punctuation: "," }] }]
        },
        {
          start: 8, end: 9, label: "主语", phonetic: "/ˈtaɪmteɪbəl/ /koʊˌɔːrdɪˈneɪʃən/", translation: "时刻表协调",
          subComponents: [{ startIndex: 0, words: [{ word: "timetable" }, { word: "coordination" }] }]
        },
        {
          start: 10, end: 10, label: "谓语", phonetic: "/bɪˈkʌmz/", translation: "变得",
          subComponents: [{ startIndex: 0, words: [{ word: "becomes" }] }]
        },
        {
          start: 11, end: 11, label: "状语", phonetic: "/pərˈtɪkjələrli/", translation: "尤为",
          subComponents: [{ startIndex: 0, words: [{ word: "particularly" }] }]
        },
        {
          start: 12, end: 12, label: "表语", phonetic: "/ˈkɒmplɛks/", translation: "复杂",
          subComponents: [{ startIndex: 0, words: [{ word: "complex", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "铁路运输", text: "timetable coordination (时刻表协调), freight service (货运服务), railway network (铁路网络)" }
      ]
    },
    {
      id: "q_travel_s132",
      chinese: "这位资深旅行作家在其新作中探讨了慢旅行对心理健康的积极影响",
      english_full: "The seasoned travel writer explores the positive impact of slow travel on mental well-being in her latest work.",
      words: [
        { word: "The" }, { word: "seasoned" }, { word: "travel" }, { word: "writer" }, { word: "explores" }, { word: "the" }, { word: "positive" }, { word: "impact" }, { word: "of" }, { word: "slow" }, { word: "travel" }, { word: "on" }, { word: "mental" }, { word: "well-being" }, { word: "in" }, { word: "her" }, { word: "latest" }, { word: "work", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈsiːzənd/ /ˈtrævəl/ /ˈraɪtər/", translation: "这位资深旅行作家",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "seasoned" }, { word: "travel" }, { word: "writer" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪkˈsplɔːrz/", translation: "探讨了",
          subComponents: [{ startIndex: 0, words: [{ word: "explores" }] }]
        },
        {
          start: 5, end: 17, label: "宾语", phonetic: "/ðə/ /ˈpɒzətɪv/ /ˈɪmpækt/ /ɒv/ /sloʊ/ /ˈtrævəl/ /ɒn/ /ˈmɛntəl/ /wel-ˈbiːɪŋ/ /ɪn/ /hɜːr/ /ˈleɪtɪst/ /wɜːrk/", translation: "慢旅行对心理健康的积极影响",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "positive" }, { word: "impact" }, { word: "of" }, { word: "slow" }, { word: "travel" }, { word: "on" }, { word: "mental" }, { word: "well-being" }, { word: "in" }, { word: "her" }, { word: "latest" }, { word: "work", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "慢旅行", text: "slow travel (慢旅行), mental well-being (心理健康), seasoned writer (资深作家)" }
      ]
    },
    {
      id: "q_travel_s133",
      chinese: "旅游税所得将被专项用于历史街区的修复与公共设施的改善",
      english_full: "Revenue from tourism taxes will be earmarked specifically for the restoration of historic districts and public facility improvements.",
      words: [
        { word: "Revenue" }, { word: "from" }, { word: "tourism" }, { word: "taxes" }, { word: "will" }, { word: "be" }, { word: "earmarked" }, { word: "specifically" }, { word: "for" }, { word: "the" }, { word: "restoration" }, { word: "of" }, { word: "historic" }, { word: "districts" }, { word: "and" }, { word: "public" }, { word: "facility" }, { word: "improvements", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈrɛvənjuː/ /frɒm/ /ˈtʊrɪzəm/ /tæksɪz/", translation: "旅游税所得",
          subComponents: [{ startIndex: 0, words: [{ word: "Revenue" }, { word: "from" }, { word: "tourism" }, { word: "taxes" }] }]
        },
        {
          start: 4, end: 6, label: "谓语(被)", phonetic: "/wɪl/ /biː/ /ˈɪɑːrmɑːrkt/", translation: "将被专项用于",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "earmarked" }] }]
        },
        {
          start: 7, end: 7, label: "状语", phonetic: "/ˈspɛsɪfɪkli/", translation: "专项",
          subComponents: [{ startIndex: 0, words: [{ word: "specifically" }] }]
        },
        {
          start: 8, end: 17, label: "宾语", phonetic: "/fɔːr/ /ðə/ /ˌrɛstəˈreɪʃən/ /ɒv/ /hɪˈstɒrɪk/ /ˈdɪstrɪkts/ /ænd/ /ˈpʌblɪk/ /fəˈsɪlɪti/ /ɪmˈpruːvmənts/", translation: "历史街区修复与公共设施改善",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "the" }, { word: "restoration" }, { word: "of" }, { word: "historic" }, { word: "districts" }, { word: "and" }, { word: "public" }, { word: "facility" }, { word: "improvements", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "旅游税收", text: "tourism tax revenue (旅游税所得), historic district restoration (历史街区修复), earmark (专项拨用)" }
      ]
    },
    {
      id: "q_travel_s134",
      chinese: "这条徒步路线穿越原始雨林，需要经验丰富的向导与专业装备",
      english_full: "This trekking route traverses pristine rainforest and requires experienced guides and specialized equipment.",
      words: [
        { word: "This" }, { word: "trekking" }, { word: "route" }, { word: "traverses" }, { word: "pristine" }, { word: "rainforest" }, { word: "and" }, { word: "requires" }, { word: "experienced" }, { word: "guides" }, { word: "and" }, { word: "specialized" }, { word: "equipment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ˈtrɛkɪŋ/ /ruːt/", translation: "这条徒步路线",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "trekking" }, { word: "route" }] }]
        },
        {
          start: 3, end: 3, label: "谓语1", phonetic: "/ˈtrævərsɪz/", translation: "穿越",
          subComponents: [{ startIndex: 0, words: [{ word: "traverses" }] }]
        },
        {
          start: 4, end: 5, label: "宾语1", phonetic: "/ˈprɪstiːn/ /ˈreɪnfɒrɪst/", translation: "原始雨林",
          subComponents: [{ startIndex: 0, words: [{ word: "pristine" }, { word: "rainforest" }] }]
        },
        {
          start: 6, end: 6, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 7, end: 7, label: "谓语2", phonetic: "/rɪˈkwaɪərz/", translation: "需要",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }] }]
        },
        {
          start: 8, end: 12, label: "宾语2", phonetic: "/ɪkˈspɪriənst/ /ɡaɪdz/ /ænd/ /ˈspɛʃəlaɪzd/ /ɪˈkwɪpmənt/", translation: "经验丰富的向导与专业装备",
          subComponents: [{ startIndex: 0, words: [{ word: "experienced" }, { word: "guides" }, { word: "and" }, { word: "specialized" }, { word: "equipment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "徒步探险", text: "pristine rainforest (原始雨林), trekking route (徒步路线), specialized equipment (专业装备)" }
      ]
    },
    {
      id: "q_travel_s135",
      chinese: "电子通关闸机的普及大幅提升了陆路口岸的出入境效率",
      english_full: "The widespread adoption of electronic clearance gates has dramatically improved border crossing efficiency at land ports.",
      words: [
        { word: "The" }, { word: "widespread" }, { word: "adoption" }, { word: "of" }, { word: "electronic" }, { word: "clearance" }, { word: "gates" }, { word: "has" }, { word: "dramatically" }, { word: "improved" }, { word: "border" }, { word: "crossing" }, { word: "efficiency" }, { word: "at" }, { word: "land" }, { word: "ports", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ðə/ /ˈwaɪdspreːd/ /əˈdɒpʃən/ /ɒv/ /ɪˌlɛktrɒnɪk/ /ˈklɪərəns/ /ɡeɪts/", translation: "电子通关闸机的普及",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "widespread" }, { word: "adoption" }, { word: "of" }, { word: "electronic" }, { word: "clearance" }, { word: "gates" }] }]
        },
        {
          start: 7, end: 9, label: "谓语(现完)", phonetic: "/hæz/ /drəˈmætɪkli/ /ɪmˈpruːvd/", translation: "已大幅提升",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "dramatically" }, { word: "improved" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ˈbɔːrdər/ /ˈkrɒsɪŋ/ /ɪˈfɪʃənsi/", translation: "出入境效率",
          subComponents: [{ startIndex: 0, words: [{ word: "border" }, { word: "crossing" }, { word: "efficiency" }] }]
        },
        {
          start: 13, end: 15, label: "地点", phonetic: "/æt/ /lænd/ /pɔːrts/", translation: "陆路口岸",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "land" }, { word: "ports", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "口岸通关", text: "electronic clearance gate (电子通关闸机), border crossing efficiency (出入境效率), land port (陆路口岸)" }
      ]
    },
    {
      id: "q_travel_s136",
      chinese: "冬季运动度假村通常在雪季开始前完成缆车系统的全面检修",
      english_full: "Winter sports resorts typically complete comprehensive maintenance of cable car systems before the snow season begins.",
      words: [
        { word: "Winter" }, { word: "sports" }, { word: "resorts" }, { word: "typically" }, { word: "complete" }, { word: "comprehensive" }, { word: "maintenance" }, { word: "of" }, { word: "cable" }, { word: "car" }, { word: "systems" }, { word: "before" }, { word: "the" }, { word: "snow" }, { word: "season" }, { word: "begins", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈwɪntər/ /spɔːrts/ /rɪˈzɔːrts/", translation: "冬季运动度假村",
          subComponents: [{ startIndex: 0, words: [{ word: "Winter" }, { word: "sports" }, { word: "resorts" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kəmˈpliːt/", translation: "完成",
          subComponents: [{ startIndex: 0, words: [{ word: "complete" }] }]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ˌkɒmprɪˈhɛnsɪv/ /ˈmeɪntənəns/ /ɒv/ /ˈkeɪbəl/ /kɑːr/ /ˈsɪstəmz/", translation: "缆车系统的全面检修",
          subComponents: [{ startIndex: 0, words: [{ word: "comprehensive" }, { word: "maintenance" }, { word: "of" }, { word: "cable" }, { word: "car" }, { word: "systems" }] }]
        },
        {
          start: 11, end: 15, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ðə/ /snoʊ/ /ˈsiːzn/ /bɪˈɡɪnz/", translation: "雪季开始前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "the" }, { word: "snow" }, { word: "season" }, { word: "begins", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "冬季旅游", text: "cable car system (缆车系统), winter sports resort (冬季运动度假村), comprehensive maintenance (全面检修)" }
      ]
    },
    {
      id: "q_travel_s137",
      chinese: "旅行者在预订民宿时应仔细核对取消政策与额外清洁费用",
      english_full: "Travelers booking homestays should carefully review cancellation policies and additional cleaning fees.",
      words: [
        { word: "Travelers" }, { word: "booking" }, { word: "homestays" }, { word: "should" }, { word: "carefully" }, { word: "review" }, { word: "cancellation" }, { word: "policies" }, { word: "and" }, { word: "additional" }, { word: "cleaning" }, { word: "fees", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈtrævələrz/ /ˈbʊkɪŋ/ /ˈhoʊmsteɪz/", translation: "预订民宿的旅行者",
          subComponents: [{ startIndex: 0, words: [{ word: "Travelers" }, { word: "booking" }, { word: "homestays" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/ʃʊd/ /ˈkɛrfəli/ /rɪˈvjuː/", translation: "应仔细核对",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "carefully" }, { word: "review" }] }]
        },
        {
          start: 6, end: 11, label: "宾语", phonetic: "/ˌkænsəˈleɪʃən/ /ˈpɒlɪsiz/ /ænd/ /əˈdɪʃənəl/ /ˈkliːnɪŋ/ /fiːz/", translation: "取消政策与额外清洁费用",
          subComponents: [{ startIndex: 0, words: [{ word: "cancellation" }, { word: "policies" }, { word: "and" }, { word: "additional" }, { word: "cleaning" }, { word: "fees", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "民宿预订", text: "homestay (民宿), cancellation policy (取消政策), cleaning fee (清洁费用)" }
      ]
    },
    {
      id: "q_travel_s138",
      chinese: "这条内河航运线路为沿岸社区提供了成本效益显著的大宗货物运输方式",
      english_full: "This inland waterway shipping route provides cost-effective bulk cargo transport for riverside communities.",
      words: [
        { word: "This" }, { word: "inland" }, { word: "waterway" }, { word: "shipping" }, { word: "route" }, { word: "provides" }, { word: "cost-effective" }, { word: "bulk" }, { word: "cargo" }, { word: "transport" }, { word: "for" }, { word: "riverside" }, { word: "communities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðɪs/ /ˈɪnlænd/ /ˈwɔːtərweɪ/ /ˈʃɪpɪŋ/ /ruːt/", translation: "这条内河航运线路",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "inland" }, { word: "waterway" }, { word: "shipping" }, { word: "route" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供了",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 6, end: 9, label: "宾语", phonetic: "/kɒst-ɪˈfɛktɪv/ /bʌlk/ /ˈkɑːrɡoʊ/ /ˈtrænspɔːrt/", translation: "成本效益显著的大宗货物运输",
          subComponents: [{ startIndex: 0, words: [{ word: "cost-effective" }, { word: "bulk" }, { word: "cargo" }, { word: "transport" }] }]
        },
        {
          start: 10, end: 12, label: "对象", phonetic: "/fɔːr/ /ˈrɪvərsaɪd/ /kəˈmjuːnɪtiz/", translation: "沿岸社区",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "riverside" }, { word: "communities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "内河航运", text: "inland waterway (内河航道), bulk cargo transport (大宗货物运输), cost-effective (成本效益高的)" }
      ]
    },
    {
      id: "q_travel_s139",
      chinese: "全球定位系统的信号中断可能使偏远地区的自驾者迷失方向",
      english_full: "GPS signal interruptions may cause self-drivers in remote areas to lose their sense of direction.",
      words: [
        { word: "GPS" }, { word: "signal" }, { word: "interruptions" }, { word: "may" }, { word: "cause" }, { word: "self-drivers" }, { word: "in" }, { word: "remote" }, { word: "areas" }, { word: "to" }, { word: "lose" }, { word: "their" }, { word: "sense" }, { word: "of" }, { word: "direction", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/dʒiː-piː-ɛs/ /ˈsɪɡnəl/ /ˌɪntərˈʌpʃənz/", translation: "全球定位系统信号中断",
          subComponents: [{ startIndex: 0, words: [{ word: "GPS" }, { word: "signal" }, { word: "interruptions" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/meɪ/ /kɔːz/", translation: "可能使",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "cause" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/sɛlf-ˈdraɪvərz/ /ɪn/ /rɪˈmoʊt/ /ˈɛəriəz/", translation: "偏远地区的自驾者",
          subComponents: [{ startIndex: 0, words: [{ word: "self-drivers" }, { word: "in" }, { word: "remote" }, { word: "areas" }] }]
        },
        {
          start: 9, end: 14, label: "宾补", phonetic: "/tuː/ /luːz/ /ðɛr/ /sɛns/ /ɒv/ /dɪˈrɛkʃən/", translation: "迷失方向",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "lose" }, { word: "their" }, { word: "sense" }, { word: "of" }, { word: "direction", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "导航风险", text: "GPS signal interruption (GPS信号中断), sense of direction (方向感), remote area (偏远地区)" }
      ]
    },
    {
      id: "q_travel_s140",
      chinese: "美食之旅将传统烹饪技艺与地方食材的实地考察有机地结合在一起",
      english_full: "Culinary tours organically combine traditional cooking techniques with on-site exploration of local ingredients.",
      words: [
        { word: "Culinary" }, { word: "tours" }, { word: "organically" }, { word: "combine" }, { word: "traditional" }, { word: "cooking" }, { word: "techniques" }, { word: "with" }, { word: "on-site" }, { word: "exploration" }, { word: "of" }, { word: "local" }, { word: "ingredients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈkʌlɪnəri/ /tʊərz/", translation: "美食之旅",
          subComponents: [{ startIndex: 0, words: [{ word: "Culinary" }, { word: "tours" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ɔːrˈɡænɪkli/", translation: "有机地",
          subComponents: [{ startIndex: 0, words: [{ word: "organically" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/kəmˈbaɪn/", translation: "结合",
          subComponents: [{ startIndex: 0, words: [{ word: "combine" }] }]
        },
        {
          start: 4, end: 6, label: "宾语1", phonetic: "/trəˈdɪʃənəl/ /ˈkʊkɪŋ/ /tɛkˈniːks/", translation: "传统烹饪技艺",
          subComponents: [{ startIndex: 0, words: [{ word: "traditional" }, { word: "cooking" }, { word: "techniques" }] }]
        },
        {
          start: 7, end: 7, label: "介词", phonetic: "/wɪð/", translation: "与",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }] }]
        },
        {
          start: 8, end: 12, label: "宾语2", phonetic: "/ɒn-saɪt/ /ˌɛkspləˈreɪʃən/ /ɒv/ /ˈloʊkəl/ /ˈɪnɡridiənts/", translation: "地方食材的实地考察",
          subComponents: [{ startIndex: 0, words: [{ word: "on-site" }, { word: "exploration" }, { word: "of" }, { word: "local" }, { word: "ingredients", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "美食旅游", text: "culinary tour (美食之旅), cooking technique (烹饪技艺), local ingredient (地方食材)" }
      ]
    },
    {
      id: "q_travel_s141",
      chinese: "双层卧铺列车为跨州旅行提供了兼顾舒适与效率的夜间出行选择",
      english_full: "Double-decker sleeper trains offer a comfortable yet efficient overnight travel option for interstate journeys.",
      words: [
        { word: "Double-decker" }, { word: "sleeper" }, { word: "trains" }, { word: "offer" }, { word: "a" }, { word: "comfortable" }, { word: "yet" }, { word: "efficient" }, { word: "overnight" }, { word: "travel" }, { word: "option" }, { word: "for" }, { word: "interstate" }, { word: "journeys", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈdʌbəl-ˈdɛkər/ /ˈsliːpər/ /treɪnz/", translation: "双层卧铺列车",
          subComponents: [{ startIndex: 0, words: [{ word: "Double-decker" }, { word: "sleeper" }, { word: "trains" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供了",
          subComponents: [{ startIndex: 0, words: [{ word: "offer" }] }]
        },
        {
          start: 4, end: 13, label: "宾语", phonetic: "/ə/ /ˈkʌmfərtəbəl/ /jɛt/ /ɪˈfɪʃənt/ /ˌoʊvərˈnaɪt/ /ˈtrævəl/ /ˈɒpʃən/ /fɔːr/ /ˌɪntərˈsteɪt/ /ˈdʒɜːrniz/", translation: "跨州旅行兼顾舒适与效率的夜间出行选择",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "comfortable" }, { word: "yet" }, { word: "efficient" }, { word: "overnight" }, { word: "travel" }, { word: "option" }, { word: "for" }, { word: "interstate" }, { word: "journeys", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "铁路卧铺", text: "sleeper train (卧铺列车), interstate journey (跨州旅行), overnight travel (夜间出行)" }
      ]
    },
    {
      id: "q_travel_s142",
      chinese: "旅游行业协会呼吁各成员企业共同制定应对气候变化的行业准则",
      english_full: "The tourism industry association urges member enterprises to jointly establish industry guidelines for addressing climate change.",
      words: [
        { word: "The" }, { word: "tourism" }, { word: "industry" }, { word: "association" }, { word: "urges" }, { word: "member" }, { word: "enterprises" }, { word: "to" }, { word: "jointly" }, { word: "establish" }, { word: "industry" }, { word: "guidelines" }, { word: "for" }, { word: "addressing" }, { word: "climate" }, { word: "change", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈtʊrɪzəm/ /ˈɪndəstri/ /əˌsoʊʃiˈeɪʃən/", translation: "旅游行业协会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tourism" }, { word: "industry" }, { word: "association" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɜːrdʒɪz/", translation: "呼吁",
          subComponents: [{ startIndex: 0, words: [{ word: "urges" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈmɛmbər/ /ˈɛntərpraɪzɪz/", translation: "各成员企业",
          subComponents: [{ startIndex: 0, words: [{ word: "member" }, { word: "enterprises" }] }]
        },
        {
          start: 7, end: 15, label: "宾补", phonetic: "/tuː/ /ˈdʒɔɪntli/ /ɪˈstæblɪʃ/ /ˈɪndəstri/ /ˈɡaɪdlaɪnz/ /fɔːr/ /əˈdrɛsɪŋ/ /ˈklaɪmət/ /tʃeɪndʒ/", translation: "共同制定应对气候变化的行业准则",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "jointly" }, { word: "establish" }, { word: "industry" }, { word: "guidelines" }, { word: "for" }, { word: "addressing" }, { word: "climate" }, { word: "change", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行业规范", text: "industry association (行业协会), industry guideline (行业准则), climate change adaptation (应对气候变化)" }
      ]
    },
    {
      id: "q_travel_s143",
      chinese: "这座岛屿只能通过包机或定期渡轮抵达，限制了大规模旅游开发",
      english_full: "This island is accessible only by charter flights or scheduled ferries, limiting large-scale tourism development.",
      words: [
        { word: "This" }, { word: "island" }, { word: "is" }, { word: "accessible" }, { word: "only" }, { word: "by" }, { word: "charter" }, { word: "flights" }, { word: "or" }, { word: "scheduled" }, { word: "ferries", punctuation: "," }, { word: "limiting" }, { word: "large-scale" }, { word: "tourism" }, { word: "development", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðɪs/ /ˈaɪlənd/", translation: "这座岛屿",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "island" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(被)", phonetic: "/ɪz/ /əkˈsɛsəbəl/", translation: "只能抵达",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "accessible" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈoʊnli/", translation: "仅",
          subComponents: [{ startIndex: 0, words: [{ word: "only" }] }]
        },
        {
          start: 5, end: 10, label: "方式", phonetic: "/baɪ/ /ˈtʃɑːrtər/ /flaɪts/ /ɔːr/ /ˈskɛdʒuːld/ /ˈfɛriz/", translation: "通过包机或定期渡轮",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "charter" }, { word: "flights" }, { word: "or" }, { word: "scheduled" }, { word: "ferries", punctuation: "," }] }]
        },
        {
          start: 11, end: 14, label: "结果状语", phonetic: "/ˈlɪmɪtɪŋ/ /lɑːrdʒ-ˈskeɪl/ /ˈtʊrɪzəm/ /dɪˈvɛləpmənt/", translation: "限制了大规模旅游开发",
          subComponents: [{ startIndex: 0, words: [{ word: "limiting" }, { word: "large-scale" }, { word: "tourism" }, { word: "development", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "岛屿交通", text: "charter flight (包机), scheduled ferry (定期渡轮), large-scale tourism (大规模旅游)" }
      ]
    },
    {
      id: "q_travel_s144",
      chinese: "旅游旺季的机票价格波动幅度往往远超酒店客房的涨幅",
      english_full: "Airfare volatility during peak travel seasons often far exceeds the rate increases seen in hotel room pricing.",
      words: [
        { word: "Airfare" }, { word: "volatility" }, { word: "during" }, { word: "peak" }, { word: "travel" }, { word: "seasons" }, { word: "often" }, { word: "far" }, { word: "exceeds" }, { word: "the" }, { word: "rate" }, { word: "increases" }, { word: "seen" }, { word: "in" }, { word: "hotel" }, { word: "room" }, { word: "pricing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ˈɛrfɛr/ /ˌvɒləˈtɪlɪti/ /ˈdjʊərɪŋ/ /piːk/ /ˈtrævəl/ /ˈsiːznz/", translation: "旅游旺季的机票价格波动",
          subComponents: [{ startIndex: 0, words: [{ word: "Airfare" }, { word: "volatility" }, { word: "during" }, { word: "peak" }, { word: "travel" }, { word: "seasons" }] }]
        },
        {
          start: 6, end: 6, label: "状语", phonetic: "/ˈɒfən/", translation: "往往",
          subComponents: [{ startIndex: 0, words: [{ word: "often" }] }]
        },
        {
          start: 7, end: 8, label: "谓语", phonetic: "/fɑːr/ /ɪkˈsiːdz/", translation: "远超",
          subComponents: [{ startIndex: 0, words: [{ word: "far" }, { word: "exceeds" }] }]
        },
        {
          start: 9, end: 16, label: "宾语", phonetic: "/ðə/ /reɪt/ /ˈɪnkriːsɪz/ /siːn/ /ɪn/ /hoʊˈtɛl/ /ruːm/ /ˈpraɪsɪŋ/", translation: "酒店客房的涨幅",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "rate" }, { word: "increases" }, { word: "seen" }, { word: "in" }, { word: "hotel" }, { word: "room" }, { word: "pricing", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "机票定价", text: "airfare volatility (机票价格波动), peak travel season (旅游旺季), rate increase (涨幅)" }
      ]
    },
    {
      id: "q_travel_s145",
      chinese: "这条历史贸易路线如今已被开发成融合徒步与骑行的多元文化走廊",
      english_full: "This historic trade route has now been developed into a multicultural corridor combining hiking and cycling.",
      words: [
        { word: "This" }, { word: "historic" }, { word: "trade" }, { word: "route" }, { word: "has" }, { word: "now" }, { word: "been" }, { word: "developed" }, { word: "into" }, { word: "a" }, { word: "multicultural" }, { word: "corridor" }, { word: "combining" }, { word: "hiking" }, { word: "and" }, { word: "cycling", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /hɪˈstɒrɪk/ /treɪd/ /ruːt/", translation: "这条历史贸易路线",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "historic" }, { word: "trade" }, { word: "route" }] }]
        },
        {
          start: 4, end: 7, label: "谓语(现完被)", phonetic: "/hæz/ /naʊ/ /bɪn/ /dɪˈvɛləpt/", translation: "如今已被开发成",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "now" }, { word: "been" }, { word: "developed" }] }]
        },
        {
          start: 8, end: 15, label: "表语", phonetic: "/ˈɪntuː/ /ə/ /ˌmʌltiˈkʌltʃərəl/ /ˈkɒrɪdɔːr/ /kəmˈbaɪnɪŋ/ /ˈhaɪkɪŋ/ /ænd/ /ˈsaɪklɪŋ/", translation: "融合徒步与骑行的多元文化走廊",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "a" }, { word: "multicultural" }, { word: "corridor" }, { word: "combining" }, { word: "hiking" }, { word: "and" }, { word: "cycling", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "文化走廊", text: "historic trade route (历史贸易路线), multicultural corridor (多元文化走廊), combine hiking and cycling (融合徒步与骑行)" }
      ]
    },
    {
      id: "q_travel_s146",
      chinese: "租车还车时若发现车身有新的刮痕，可能需要支付额外的车辆损坏押金",
      english_full: "Upon returning a rental car, any newly discovered scratches may require payment of an additional damage deposit.",
      words: [
        { word: "Upon" }, { word: "returning" }, { word: "a" }, { word: "rental" }, { word: "car", punctuation: "," }, { word: "any" }, { word: "newly" }, { word: "discovered" }, { word: "scratches" }, { word: "may" }, { word: "require" }, { word: "payment" }, { word: "of" }, { word: "an" }, { word: "additional" }, { word: "damage" }, { word: "deposit", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语", phonetic: "/əˈpɒn/ /rɪˈtɜːrnɪŋ/ /ə/ /ˈrɛntəl/ /kɑːr/", translation: "租车还车时",
          subComponents: [{ startIndex: 0, words: [{ word: "Upon" }, { word: "returning" }, { word: "a" }, { word: "rental" }, { word: "car", punctuation: "," }] }]
        },
        {
          start: 5, end: 8, label: "主语", phonetic: "/ˈɛni/ /ˈnjuːli/ /dɪˈskʌvərd/ /ˈskrætʃɪz/", translation: "新发现的刮痕",
          subComponents: [{ startIndex: 0, words: [{ word: "any" }, { word: "newly" }, { word: "discovered" }, { word: "scratches" }] }]
        },
        {
          start: 9, end: 10, label: "谓语", phonetic: "/meɪ/ /rɪˈkwaɪər/", translation: "可能需要",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "require" }] }]
        },
        {
          start: 11, end: 16, label: "宾语", phonetic: "/ˈpeɪmənt/ /ɒv/ /æn/ /əˈdɪʃənəl/ /ˈdæmɪdʒ/ /dɪˈpɒzɪt/", translation: "支付额外的车辆损坏押金",
          subComponents: [{ startIndex: 0, words: [{ word: "payment" }, { word: "of" }, { word: "an" }, { word: "additional" }, { word: "damage" }, { word: "deposit", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "租车还车", text: "damage deposit (车辆损坏押金), rental car return (租车还车), scratch (刮痕)" }
      ]
    },
    {
      id: "q_travel_s147",
      chinese: "医疗旅游套餐通常涵盖专科会诊、术后康复及陪同翻译服务",
      english_full: "Medical tourism packages typically include specialist consultations, post-operative rehabilitation, and accompanying translation services.",
      words: [
        { word: "Medical" }, { word: "tourism" }, { word: "packages" }, { word: "typically" }, { word: "include" }, { word: "specialist" }, { word: "consultations", punctuation: "," }, { word: "post-operative" }, { word: "rehabilitation", punctuation: "," }, { word: "and" }, { word: "accompanying" }, { word: "translation" }, { word: "services", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈmɛdɪkəl/ /ˈtʊrɪzəm/ /ˈpækɪdʒɪz/", translation: "医疗旅游套餐",
          subComponents: [{ startIndex: 0, words: [{ word: "Medical" }, { word: "tourism" }, { word: "packages" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪnˈkluːd/", translation: "涵盖",
          subComponents: [{ startIndex: 0, words: [{ word: "include" }] }]
        },
        {
          start: 5, end: 12, label: "宾语", phonetic: "/ˈspɛʃəlɪst/ /ˌkɒnsəlˈteɪʃənz/ /pəʊst-ˈɒpərətɪv/ /rɪˌhæbɪlɪˈteɪʃən/ /ænd/ /əˈkʌmpənɪŋ/ /trænsˈleɪʃən/ /ˈsɜːrvɪsɪz/", translation: "专科会诊、术后康复及陪同翻译服务",
          subComponents: [{ startIndex: 0, words: [{ word: "specialist" }, { word: "consultations", punctuation: "," }, { word: "post-operative" }, { word: "rehabilitation", punctuation: "," }, { word: "and" }, { word: "accompanying" }, { word: "translation" }, { word: "services", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗旅游", text: "medical tourism (医疗旅游), post-operative rehabilitation (术后康复), specialist consultation (专科会诊)" }
      ]
    },
    {
      id: "q_travel_s148",
      chinese: "这条跨境隧道的通车彻底改变了两个邻国之间的物流与客运格局",
      english_full: "The opening of this cross-border tunnel has fundamentally transformed logistics and passenger transport between the two neighboring countries.",
      words: [
        { word: "The" }, { word: "opening" }, { word: "of" }, { word: "this" }, { word: "cross-border" }, { word: "tunnel" }, { word: "has" }, { word: "fundamentally" }, { word: "transformed" }, { word: "logistics" }, { word: "and" }, { word: "passenger" }, { word: "transport" }, { word: "between" }, { word: "the" }, { word: "two" }, { word: "neighboring" }, { word: "countries", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ði/ /ˈoʊpənɪŋ/ /ɒv/ /ðɪs/ /krɒs-ˈbɔːrdər/ /ˈtʌnəl/", translation: "这条跨境隧道的通车",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "opening" }, { word: "of" }, { word: "this" }, { word: "cross-border" }, { word: "tunnel" }] }]
        },
        {
          start: 6, end: 8, label: "谓语(现完)", phonetic: "/hæz/ /ˌfʌndəˈmɛntəli/ /trænsˈfɔːrmd/", translation: "已彻底改变",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "fundamentally" }, { word: "transformed" }] }]
        },
        {
          start: 9, end: 12, label: "宾语", phonetic: "/ləˈdʒɪstɪks/ /ænd/ /ˈpæsəndʒər/ /ˈtrænspɔːrt/", translation: "物流与客运格局",
          subComponents: [{ startIndex: 0, words: [{ word: "logistics" }, { word: "and" }, { word: "passenger" }, { word: "transport" }] }]
        },
        {
          start: 13, end: 17, label: "范围", phonetic: "/bɪˈtwiːn/ /ðə/ /tuː/ /ˈneɪbərɪŋ/ /ˈkʌntriz/", translation: "两个邻国之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "the" }, { word: "two" }, { word: "neighboring" }, { word: "countries", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "跨境通道", text: "cross-border tunnel (跨境隧道), passenger transport (客运), logistics transformation (物流格局变化)" }
      ]
    },
    {
      id: "q_travel_s149",
      chinese: "野生动物观赏团严格限制每日入园人数，以减轻对自然栖息地的干扰",
      english_full: "Wildlife viewing tours strictly limit daily park entry numbers to minimize disturbance to natural habitats.",
      words: [
        { word: "Wildlife" }, { word: "viewing" }, { word: "tours" }, { word: "strictly" }, { word: "limit" }, { word: "daily" }, { word: "park" }, { word: "entry" }, { word: "numbers" }, { word: "to" }, { word: "minimize" }, { word: "disturbance" }, { word: "to" }, { word: "natural" }, { word: "habitats", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈwaɪldlaɪf/ /ˈvjuːɪŋ/ /tʊərz/", translation: "野生动物观赏团",
          subComponents: [{ startIndex: 0, words: [{ word: "Wildlife" }, { word: "viewing" }, { word: "tours" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈstrɪktli/", translation: "严格",
          subComponents: [{ startIndex: 0, words: [{ word: "strictly" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈlɪmɪt/", translation: "限制",
          subComponents: [{ startIndex: 0, words: [{ word: "limit" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ˈdeɪli/ /pɑːrk/ /ˈɛntri/ /ˈnʌmbərz/", translation: "每日入园人数",
          subComponents: [{ startIndex: 0, words: [{ word: "daily" }, { word: "park" }, { word: "entry" }, { word: "numbers" }] }]
        },
        {
          start: 9, end: 14, label: "目的", phonetic: "/tuː/ /ˈmɪnɪmaɪz/ /dɪˈstɜːrbəns/ /tuː/ /ˈnætʃərəl/ /ˈhæbɪtæts/", translation: "以减轻对自然栖息地的干扰",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "minimize" }, { word: "disturbance" }, { word: "to" }, { word: "natural" }, { word: "habitats", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "生态观赏", text: "wildlife viewing tour (野生动物观赏), natural habitat (自然栖息地), minimize disturbance (减轻干扰)" }
      ]
    },
    {
      id: "q_travel_s150",
      chinese: "城市有轨电车的复兴为历史中心区的短途观光提供了低碳替代方案",
      english_full: "The revival of urban trams provides a low-carbon alternative for short-distance sightseeing in historic city centers.",
      words: [
        { word: "The" }, { word: "revival" }, { word: "of" }, { word: "urban" }, { word: "trams" }, { word: "provides" }, { word: "a" }, { word: "low-carbon" }, { word: "alternative" }, { word: "for" }, { word: "short-distance" }, { word: "sightseeing" }, { word: "in" }, { word: "historic" }, { word: "city" }, { word: "centers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /rɪˈvaɪvəl/ /ɒv/ /ˈɜːrbən/ /træmz/", translation: "城市有轨电车的复兴",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "revival" }, { word: "of" }, { word: "urban" }, { word: "trams" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供了",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ə/ /loʊ-ˈkɑːrbən/ /ɔːlˈtɜːrnətɪv/", translation: "低碳替代方案",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "low-carbon" }, { word: "alternative" }] }]
        },
        {
          start: 9, end: 15, label: "目的/范围", phonetic: "/fɔːr/ /ʃɔːrt-ˈdɪstəns/ /ˈsaɪtˌsiːɪŋ/ /ɪn/ /hɪˈstɒrɪk/ /ˈsɪti/ /ˈsɛntərz/", translation: "历史中心区短途观光",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "short-distance" }, { word: "sightseeing" }, { word: "in" }, { word: "historic" }, { word: "city" }, { word: "centers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "城市交通", text: "urban tram (城市有轨电车), low-carbon alternative (低碳替代), historic city center (历史中心区)" }
      ]
    },
    {
      id: "q_travel_s151",
      chinese: "旅行者在高海拔地区应逐步适应环境，以避免出现急性高原反应",
      english_full: "Travelers in high-altitude regions should acclimatize gradually to avoid developing acute altitude sickness.",
      words: [
        { word: "Travelers" }, { word: "in" }, { word: "high-altitude" }, { word: "regions" }, { word: "should" }, { word: "acclimatize" }, { word: "gradually" }, { word: "to" }, { word: "avoid" }, { word: "developing" }, { word: "acute" }, { word: "altitude" }, { word: "sickness", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈtrævələrz/ /ɪn/ /haɪ-ˈæltɪtjuːd/ /ˈriːdʒənz/", translation: "高海拔地区的旅行者",
          subComponents: [{ startIndex: 0, words: [{ word: "Travelers" }, { word: "in" }, { word: "high-altitude" }, { word: "regions" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/ʃʊd/ /əˈklaɪmətaɪz/", translation: "应逐步适应",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "acclimatize" }] }]
        },
        {
          start: 6, end: 6, label: "状语", phonetic: "/ˈɡrædʒuəli/", translation: "逐步",
          subComponents: [{ startIndex: 0, words: [{ word: "gradually" }] }]
        },
        {
          start: 7, end: 12, label: "目的", phonetic: "/tuː/ /əˈvɔɪd/ /dɪˈvɛləpɪŋ/ /əˈkjuːt/ /ˈæltɪtjuːd/ /ˈsɪknəs/", translation: "以避免出现急性高原反应",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "avoid" }, { word: "developing" }, { word: "acute" }, { word: "altitude" }, { word: "sickness", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "高原旅行", text: "altitude sickness (高原反应), acclimatize (适应环境), high-altitude region (高海拔地区)" }
      ]
    },
    {
      id: "q_travel_s152",
      chinese: "这条滨海公路因其惊险的悬崖路段而成为摩托车爱好者的朝圣之路",
      english_full: "This coastal highway has become a pilgrimage route for motorcyclists due to its dramatic cliffside sections.",
      words: [
        { word: "This" }, { word: "coastal" }, { word: "highway" }, { word: "has" }, { word: "become" }, { word: "a" }, { word: "pilgrimage" }, { word: "route" }, { word: "for" }, { word: "motorcyclists" }, { word: "due" }, { word: "to" }, { word: "its" }, { word: "dramatic" }, { word: "cliffside" }, { word: "sections", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ˈkoʊstəl/ /ˈhaɪweɪ/", translation: "这条滨海公路",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "coastal" }, { word: "highway" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæz/ /bɪˈkʌm/", translation: "已成为",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "become" }] }]
        },
        {
          start: 5, end: 9, label: "表语", phonetic: "/ə/ /ˌpɪlɡrɪmɪdʒ/ /ruːt/ /fɔːr/ /ˌmoʊtərˈsaɪklɪsts/", translation: "摩托车爱好者的朝圣之路",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "pilgrimage" }, { word: "route" }, { word: "for" }, { word: "motorcyclists" }] }]
        },
        {
          start: 10, end: 15, label: "原因", phonetic: "/djuː/ /tuː/ /ɪts/ /drəˈmætɪk/ /ˈklɪfˌsaɪd/ /ˈsɛkʃənz/", translation: "因其惊险的悬崖路段",
          subComponents: [{ startIndex: 0, words: [{ word: "due" }, { word: "to" }, { word: "its" }, { word: "dramatic" }, { word: "cliffside" }, { word: "sections", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "摩托旅行", text: "pilgrimage route (朝圣之路), cliffside section (悬崖路段), motorcyclist (摩托车爱好者)" }
      ]
    },
    {
      id: "q_travel_s153",
      chinese: "综合交通枢纽的设计旨在实现航空、铁路与地铁的无缝换乘",
      english_full: "Integrated transport hubs are designed to enable seamless transfers among aviation, rail, and subway systems.",
      words: [
        { word: "Integrated" }, { word: "transport" }, { word: "hubs" }, { word: "are" }, { word: "designed" }, { word: "to" }, { word: "enable" }, { word: "seamless" }, { word: "transfers" }, { word: "among" }, { word: "aviation", punctuation: "," }, { word: "rail", punctuation: "," }, { word: "and" }, { word: "subway" }, { word: "systems", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɪntɪɡreɪtɪd/ /ˈtrænspɔːrt/ /hʌbz/", translation: "综合交通枢纽",
          subComponents: [{ startIndex: 0, words: [{ word: "Integrated" }, { word: "transport" }, { word: "hubs" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被)", phonetic: "/ɑːr/ /dɪˈzaɪnd/", translation: "旨在",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "designed" }] }]
        },
        {
          start: 5, end: 6, label: "不定式", phonetic: "/tuː/ /ˈɛneɪbəl/", translation: "实现",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "enable" }] }]
        },
        {
          start: 7, end: 14, label: "宾语", phonetic: "/ˈsiːmləs/ /ˈtrænsfɜːrz/ /əˈmʌŋ/ /ˌeɪviˈeɪʃən/ /reɪl/ /ænd/ /ˈsʌbweɪ/ /ˈsɪstəmz/", translation: "航空、铁路与地铁的无缝换乘",
          subComponents: [{ startIndex: 0, words: [{ word: "seamless" }, { word: "transfers" }, { word: "among" }, { word: "aviation", punctuation: "," }, { word: "rail", punctuation: "," }, { word: "and" }, { word: "subway" }, { word: "systems", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "综合枢纽", text: "integrated transport hub (综合交通枢纽), seamless transfer (无缝换乘), aviation-rail-subway (空铁联运)" }
      ]
    },
    {
      id: "q_travel_s154",
      chinese: "数字游民签证的推出吸引了大量远程工作者前来长期旅居",
      english_full: "The introduction of digital nomad visas has attracted a substantial influx of remote workers for extended stays.",
      words: [
        { word: "The" }, { word: "introduction" }, { word: "of" }, { word: "digital" }, { word: "nomad" }, { word: "visas" }, { word: "has" }, { word: "attracted" }, { word: "a" }, { word: "substantial" }, { word: "influx" }, { word: "of" }, { word: "remote" }, { word: "workers" }, { word: "for" }, { word: "extended" }, { word: "stays", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ði/ /ˌɪntrəˈdʌkʃən/ /ɒv/ /ˈdɪdʒɪtəl/ /ˈnoʊmæd/ /ˈviːzəz/", translation: "数字游民签证的推出",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "introduction" }, { word: "of" }, { word: "digital" }, { word: "nomad" }, { word: "visas" }] }]
        },
        {
          start: 6, end: 7, label: "谓语(现完)", phonetic: "/hæz/ /əˈtræktɪd/", translation: "吸引了",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "attracted" }] }]
        },
        {
          start: 8, end: 16, label: "宾语", phonetic: "/ə/ /səbˈstæntʃəl/ /ˈɪnflʌks/ /ɒv/ /rɪˈmoʊt/ /ˈwɜːrkərz/ /fɔːr/ /ɪkˈstɛndɪd/ /steɪz/", translation: "大量远程工作者前来长期旅居",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "substantial" }, { word: "influx" }, { word: "of" }, { word: "remote" }, { word: "workers" }, { word: "for" }, { word: "extended" }, { word: "stays", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "数字游民", text: "digital nomad visa (数字游民签证), remote worker (远程工作者), extended stay (长期旅居)" }
      ]
    },
    {
      id: "q_travel_s155",
      chinese: "这条运河游船线路串联起沿岸多处被列入遗产名录的历史城镇",
      english_full: "This canal cruise route links multiple historic towns along the shore that are listed on heritage registers.",
      words: [
        { word: "This" }, { word: "canal" }, { word: "cruise" }, { word: "route" }, { word: "links" }, { word: "multiple" }, { word: "historic" }, { word: "towns" }, { word: "along" }, { word: "the" }, { word: "shore" }, { word: "that" }, { word: "are" }, { word: "listed" }, { word: "on" }, { word: "heritage" }, { word: "registers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /kəˈnæl/ /kruːz/ /ruːt/", translation: "这条运河游船线路",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "canal" }, { word: "cruise" }, { word: "route" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/lɪŋks/", translation: "串联起",
          subComponents: [{ startIndex: 0, words: [{ word: "links" }] }]
        },
        {
          start: 5, end: 16, label: "宾语", phonetic: "/ˈmʌltɪpəl/ /hɪˈstɒrɪk/ /taʊnz/ /əˈlɒŋ/ /ðə/ /ʃɔːr/ /ðæt/ /ɑːr/ /ˈlɪstɪd/ /ɒn/ /ˈhɛrɪtɪdʒ/ /ˈrɛdʒɪstərz/", translation: "沿岸多处被列入遗产名录的历史城镇",
          subComponents: [{ startIndex: 0, words: [{ word: "multiple" }, { word: "historic" }, { word: "towns" }, { word: "along" }, { word: "the" }, { word: "shore" }, { word: "that" }, { word: "are" }, { word: "listed" }, { word: "on" }, { word: "heritage" }, { word: "registers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运河旅游", text: "canal cruise (运河游船), heritage register (遗产名录), historic town (历史城镇)" }
      ]
    },
    {
      id: "q_travel_s156",
      chinese: "旅游者在热带地区应随身携带驱蚊剂并饮用瓶装水以预防登革热",
      english_full: "Travelers in tropical regions should carry insect repellent and drink bottled water to prevent dengue fever.",
      words: [
        { word: "Travelers" }, { word: "in" }, { word: "tropical" }, { word: "regions" }, { word: "should" }, { word: "carry" }, { word: "insect" }, { word: "repellent" }, { word: "and" }, { word: "drink" }, { word: "bottled" }, { word: "water" }, { word: "to" }, { word: "prevent" }, { word: "dengue" }, { word: "fever", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈtrævələrz/ /ɪn/ /ˈtrɒpɪkəl/ /ˈriːdʒənz/", translation: "热带地区的旅游者",
          subComponents: [{ startIndex: 0, words: [{ word: "Travelers" }, { word: "in" }, { word: "tropical" }, { word: "regions" }] }]
        },
        {
          start: 4, end: 5, label: "谓语1", phonetic: "/ʃʊd/ /ˈkæri/", translation: "应携带",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "carry" }] }]
        },
        {
          start: 6, end: 7, label: "宾语1", phonetic: "/ˈɪnsɛkt/ /rɪˈpɛlənt/", translation: "驱蚊剂",
          subComponents: [{ startIndex: 0, words: [{ word: "insect" }, { word: "repellent" }] }]
        },
        {
          start: 8, end: 8, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 9, end: 9, label: "谓语2", phonetic: "/drɪŋk/", translation: "饮用",
          subComponents: [{ startIndex: 0, words: [{ word: "drink" }] }]
        },
        {
          start: 10, end: 11, label: "宾语2", phonetic: "/ˈbɒtəld/ /ˈwɔːtər/", translation: "瓶装水",
          subComponents: [{ startIndex: 0, words: [{ word: "bottled" }, { word: "water" }] }]
        },
        {
          start: 12, end: 15, label: "目的", phonetic: "/tuː/ /prɪˈvɛnt/ /ˈdɛŋɡi/ /ˈfiːvər/", translation: "以预防登革热",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "prevent" }, { word: "dengue" }, { word: "fever", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "热带健康", text: "insect repellent (驱蚊剂), dengue fever (登革热), bottled water (瓶装水)" }
      ]
    },
    {
      id: "q_travel_s157",
      chinese: "这条跨境巴士快线配备了实时定位与电子票务系统，极大提升了出行便利性",
      english_full: "This cross-border express bus line features real-time tracking and electronic ticketing systems, greatly enhancing travel convenience.",
      words: [
        { word: "This" }, { word: "cross-border" }, { word: "express" }, { word: "bus" }, { word: "line" }, { word: "features" }, { word: "real-time" }, { word: "tracking" }, { word: "and" }, { word: "electronic" }, { word: "ticketing" }, { word: "systems", punctuation: "," }, { word: "greatly" }, { word: "enhancing" }, { word: "travel" }, { word: "convenience", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðɪs/ /krɒs-ˈbɔːrdər/ /ɪkˈsprɛs/ /bʌs/ /laɪn/", translation: "这条跨境巴士快线",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "cross-border" }, { word: "express" }, { word: "bus" }, { word: "line" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "配备了",
          subComponents: [{ startIndex: 0, words: [{ word: "features" }] }]
        },
        {
          start: 6, end: 11, label: "宾语", phonetic: "/riːl-taɪm/ /ˈtrækɪŋ/ /ænd/ /ɪˌlɛktrɒnɪk/ /ˈtɪkɪtɪŋ/ /ˈsɪstəmz/", translation: "实时定位与电子票务系统",
          subComponents: [{ startIndex: 0, words: [{ word: "real-time" }, { word: "tracking" }, { word: "and" }, { word: "electronic" }, { word: "ticketing" }, { word: "systems", punctuation: "," }] }]
        },
        {
          start: 12, end: 15, label: "结果状语", phonetic: "/ˈɡreɪtli/ /ɪnˈhænsɪŋ/ /ˈtrævəl/ /kənˈviːniəns/", translation: "极大提升了出行便利性",
          subComponents: [{ startIndex: 0, words: [{ word: "greatly" }, { word: "enhancing" }, { word: "travel" }, { word: "convenience", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "跨境巴士", text: "express bus line (巴士快线), electronic ticketing (电子票务), real-time tracking (实时定位)" }
      ]
    },
    {
      id: "q_travel_s158",
      chinese: "遗产保护法规严格限制在历史街区核心地带新建大型商业设施",
      english_full: "Heritage protection regulations strictly restrict the construction of large commercial facilities in historic district core zones.",
      words: [
        { word: "Heritage" }, { word: "protection" }, { word: "regulations" }, { word: "strictly" }, { word: "restrict" }, { word: "the" }, { word: "construction" }, { word: "of" }, { word: "large" }, { word: "commercial" }, { word: "facilities" }, { word: "in" }, { word: "historic" }, { word: "district" }, { word: "core" }, { word: "zones", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈhɛrɪtɪdʒ/ /prəˈtɛkʃən/ /ˌrɛɡjəˈleɪʃənz/", translation: "遗产保护法规",
          subComponents: [{ startIndex: 0, words: [{ word: "Heritage" }, { word: "protection" }, { word: "regulations" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈstrɪktli/", translation: "严格",
          subComponents: [{ startIndex: 0, words: [{ word: "strictly" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈstrɪkt/", translation: "限制",
          subComponents: [{ startIndex: 0, words: [{ word: "restrict" }] }]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ðə/ /kənˈstrʌkʃən/ /ɒv/ /lɑːrdʒ/ /kəˈmɜːrʃəl/ /fəˈsɪlɪtiz/", translation: "新建大型商业设施",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "construction" }, { word: "of" }, { word: "large" }, { word: "commercial" }, { word: "facilities" }] }]
        },
        {
          start: 11, end: 15, label: "地点", phonetic: "/ɪn/ /hɪˈstɒrɪk/ /ˈdɪstrɪkt/ /kɔːr/ /zoʊnz/", translation: "历史街区核心地带",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "historic" }, { word: "district" }, { word: "core" }, { word: "zones", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "遗产保护", text: "heritage protection regulation (遗产保护法规), historic district core (历史街区核心), commercial facility (商业设施)" }
      ]
    },
    {
      id: "q_travel_s159",
      chinese: "随着全球旅行限制的逐步解除，国际旅游业正迎来强劲的复苏势头",
      english_full: "As global travel restrictions are gradually lifted, the international tourism industry is witnessing a robust recovery momentum.",
      words: [
        { word: "As" }, { word: "global" }, { word: "travel" }, { word: "restrictions" }, { word: "are" }, { word: "gradually" }, { word: "lifted", punctuation: "," }, { word: "the" }, { word: "international" }, { word: "tourism" }, { word: "industry" }, { word: "is" }, { word: "witnessing" }, { word: "a" }, { word: "robust" }, { word: "recovery" }, { word: "momentum", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间从句", phonetic: "/æz/ /ˈɡloʊbəl/ /ˈtrævəl/ /rɪˈstrɪkʃənz/ /ɑːr/ /ˈɡrædʒuəli/ /ˈlɪftɪd/", translation: "随着全球旅行限制逐步解除",
          subComponents: [{ startIndex: 0, words: [{ word: "As" }, { word: "global" }, { word: "travel" }, { word: "restrictions" }, { word: "are" }, { word: "gradually" }, { word: "lifted", punctuation: "," }] }]
        },
        {
          start: 7, end: 10, label: "主语", phonetic: "/ði/ /ˌɪntərˈnæʃənəl/ /ˈtʊrɪzəm/ /ˈɪndəstri/", translation: "国际旅游业",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "international" }, { word: "tourism" }, { word: "industry" }] }]
        },
        {
          start: 11, end: 12, label: "谓语(进行)", phonetic: "/ɪz/ /ˈwɪtnəsɪŋ/", translation: "正迎来",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "witnessing" }] }]
        },
        {
          start: 13, end: 16, label: "宾语", phonetic: "/ə/ /roʊˈbʌst/ /rɪˈkʌvəri/ /moʊˈmɛntəm/", translation: "强劲的复苏势头",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "robust" }, { word: "recovery" }, { word: "momentum", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行业复苏", text: "travel restriction (旅行限制), robust recovery (强劲复苏), international tourism (国际旅游业)" }
      ]
    },
  ]
};
