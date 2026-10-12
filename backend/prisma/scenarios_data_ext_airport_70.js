export const extensions = {
  "airport_01": [
    {
      id: "q_airport_s100",
      chinese: "由于不可预见的恶劣天气，空中交通管制员下令暂停所有进港航班",
      english_full: "Due to unforeseen inclement weather, air traffic controllers mandated a ground stop for all inbound flights.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "unforeseen" }, { word: "inclement" }, { word: "weather", punctuation: "," }, { word: "air" }, { word: "traffic" }, { word: "controllers" }, { word: "mandated" }, { word: "a" }, { word: "ground" }, { word: "stop" }, { word: "for" }, { word: "all" }, { word: "inbound" }, { word: "flights", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "原因状语", phonetic: "/djuː/ /tuː/ /ˌʌnfɔːrˈsiːn/ /ɪnˈklɛmənt/ /ˈwɛðər/", translation: "由于不可预见的恶劣天气",
          subComponents: [{ startIndex: 0, words: [{ word: "Due" }, { word: "to" }, { word: "unforeseen" }, { word: "inclement" }, { word: "weather", punctuation: "," }] }]
        },
        {
          start: 5, end: 7, label: "主语", phonetic: "/ɛr/ /ˈtræfɪk/ /kənˈtroʊlərz/", translation: "空中交通管制员",
          subComponents: [{ startIndex: 0, words: [{ word: "air" }, { word: "traffic" }, { word: "controllers" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/ˈmændeɪtɪd/", translation: "下令/强制要求",
          subComponents: [{ startIndex: 0, words: [{ word: "mandated" }] }]
        },
        {
          start: 9, end: 15, label: "宾语", phonetic: "/ə/ /graʊnd/ /stɒp/ /fɔːr/ /ɔːl/ /ˈɪnbaʊnd/ /flaɪts/", translation: "对所有进港航班的地面停飞",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "ground" }, { word: "stop" }, { word: "for" }, { word: "all" }, { word: "inbound" }, { word: "flights", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "航空术语", text: "inclement weather (恶劣天气), ground stop (地面停飞), inbound flights (进港航班)" }
      ]
    },
    {
      id: "q_airport_s101",
      chinese: "枢纽机场的运营效率在很大程度上取决于时刻资源的优化分配",
      english_full: "The operational efficiency of hub airports depends largely on the optimized allocation of slot resources.",
      words: [
        { word: "The" }, { word: "operational" }, { word: "efficiency" }, { word: "of" }, { word: "hub" }, { word: "airports" }, { word: "depends" }, { word: "largely" }, { word: "on" }, { word: "the" }, { word: "optimized" }, { word: "allocation" }, { word: "of" }, { word: "slot" }, { word: "resources", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˌɒpəˈreɪʃənəl/ /ɪˈfɪʃənsi/ /ɒv/ /hʌb/ /ˈɛərpɔːrts/", translation: "枢纽机场的运营效率",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "operational" }, { word: "efficiency" }, { word: "of" }, { word: "hub" }, { word: "airports" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/dɪˈpɛndz/", translation: "取决于",
          subComponents: [{ startIndex: 0, words: [{ word: "depends" }] }]
        },
        {
          start: 7, end: 7, label: "状语", phonetic: "/ˈlɑːrdʒli/", translation: "在很大程度上",
          subComponents: [{ startIndex: 0, words: [{ word: "largely" }] }]
        },
        {
          start: 8, end: 14, label: "介词宾语", phonetic: "/ɒn/ /ði/ /ˈɒptɪmaɪzd/ /ˌæləˈkeɪʃən/ /ɒv/ /slɒt/ /rɪˈsɔːrsɪz/", translation: "时刻资源的优化分配",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "optimized" }, { word: "allocation" }, { word: "of" }, { word: "slot" }, { word: "resources", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "航空管理", text: "slot allocation (时刻分配), hub airport (枢纽机场), operational efficiency (运营效率)" }
      ]
    },
    {
      id: "q_airport_s102",
      chinese: "生物识别通关系统显著缩短了国际旅客在入境检查处的等候时间",
      english_full: "Biometric clearance systems have significantly reduced waiting times for international passengers at immigration checkpoints.",
      words: [
        { word: "Biometric" }, { word: "clearance" }, { word: "systems" }, { word: "have" }, { word: "significantly" }, { word: "reduced" }, { word: "waiting" }, { word: "times" }, { word: "for" }, { word: "international" }, { word: "passengers" }, { word: "at" }, { word: "immigration" }, { word: "checkpoints", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌbaɪoʊˈmɛtrɪk/ /ˈklɪərəns/ /ˈsɪstəmz/", translation: "生物识别通关系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Biometric" }, { word: "clearance" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /ˌsɪɡnɪfɪkəntli/ /rɪˈdjuːst/", translation: "已显著缩短",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "reduced" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈweɪtɪŋ/ /taɪmz/", translation: "等候时间",
          subComponents: [{ startIndex: 0, words: [{ word: "waiting" }, { word: "times" }] }]
        },
        {
          start: 8, end: 13, label: "状语", phonetic: "/fɔːr/ /ˌɪntərˈnæʃənəl/ /ˈpæsəndʒərz/ /æt/ /ˌɪmɪˈɡreɪʃən/ /ˈtʃɛkpɔɪnts/", translation: "国际旅客在入境检查处",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "international" }, { word: "passengers" }, { word: "at" }, { word: "immigration" }, { word: "checkpoints", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "出入境词汇", text: "biometric clearance (生物识别通关), immigration checkpoint (入境检查站)" }
      ]
    },
    {
      id: "q_airport_s103",
      chinese: "跑道侵入事件促使机场管理局全面审查地面车辆的操作规程",
      english_full: "Runway incursion incidents have prompted airport authorities to comprehensively review ground vehicle operating procedures.",
      words: [
        { word: "Runway" }, { word: "incursion" }, { word: "incidents" }, { word: "have" }, { word: "prompted" }, { word: "airport" }, { word: "authorities" }, { word: "to" }, { word: "comprehensively" }, { word: "review" }, { word: "ground" }, { word: "vehicle" }, { word: "operating" }, { word: "procedures", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈrʌnweɪ/ /ɪnˈkɜːrʒən/ /ˈɪnsɪdənts/", translation: "跑道侵入事件",
          subComponents: [{ startIndex: 0, words: [{ word: "Runway" }, { word: "incursion" }, { word: "incidents" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /ˈprɒmptɪd/", translation: "已促使",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "prompted" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈɛərpɔːrt/ /əˈθɒrɪtiz/", translation: "机场管理局",
          subComponents: [{ startIndex: 0, words: [{ word: "airport" }, { word: "authorities" }] }]
        },
        {
          start: 7, end: 13, label: "宾补", phonetic: "/tuː/ /ˌkɒmprɪˈhɛnsɪvli/ /rɪˈvjuː/ /graʊnd/ /ˈviːɪkəl/ /ˈɒpəreɪtɪŋ/ /prəˈsiːdʒərz/", translation: "全面审查地面车辆操作规程",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "comprehensively" }, { word: "review" }, { word: "ground" }, { word: "vehicle" }, { word: "operating" }, { word: "procedures", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "航空安全", text: "runway incursion (跑道侵入), operating procedures (操作规程)" }
      ]
    },
    {
      id: "q_airport_s104",
      chinese: "在流量高峰期，管制员通常指令飞机在指定空域内执行等待程序",
      english_full: "During peak traffic periods, controllers routinely instruct aircraft to execute holding patterns in designated airspace.",
      words: [
        { word: "During" }, { word: "peak" }, { word: "traffic" }, { word: "periods", punctuation: "," }, { word: "controllers" }, { word: "routinely" }, { word: "instruct" }, { word: "aircraft" }, { word: "to" }, { word: "execute" }, { word: "holding" }, { word: "patterns" }, { word: "in" }, { word: "designated" }, { word: "airspace", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /piːk/ /ˈtræfɪk/ /ˈpɪəriədz/", translation: "在流量高峰期",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "peak" }, { word: "traffic" }, { word: "periods", punctuation: "," }] }]
        },
        {
          start: 4, end: 4, label: "主语", phonetic: "/kənˈtroʊlərz/", translation: "管制员",
          subComponents: [{ startIndex: 0, words: [{ word: "controllers" }] }]
        },
        {
          start: 5, end: 5, label: "状语", phonetic: "/ruːˈtiːnli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "routinely" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/ɪnˈstrʌkt/", translation: "指令",
          subComponents: [{ startIndex: 0, words: [{ word: "instruct" }] }]
        },
        {
          start: 7, end: 7, label: "宾语", phonetic: "/ˈɛərkræft/", translation: "飞机",
          subComponents: [{ startIndex: 0, words: [{ word: "aircraft" }] }]
        },
        {
          start: 8, end: 14, label: "宾补", phonetic: "/tuː/ /ˈɛksɪkjuːt/ /ˈhoʊldɪŋ/ /ˈpætərnz/ /ɪn/ /ˈdɛzɪɡneɪtɪd/ /ˈɛərspɛɪs/", translation: "在指定空域执行等待程序",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "execute" }, { word: "holding" }, { word: "patterns" }, { word: "in" }, { word: "designated" }, { word: "airspace", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "空管术语", text: "holding pattern (等待航线), designated airspace (指定空域)" }
      ]
    },
    {
      id: "q_airport_s105",
      chinese: "冬季除冰作业必须在飞机起飞前彻底完成，以确保飞行安全",
      english_full: "Winter de-icing operations must be thoroughly completed before takeoff to ensure flight safety.",
      words: [
        { word: "Winter" }, { word: "de-icing" }, { word: "operations" }, { word: "must" }, { word: "be" }, { word: "thoroughly" }, { word: "completed" }, { word: "before" }, { word: "takeoff" }, { word: "to" }, { word: "ensure" }, { word: "flight" }, { word: "safety", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈwɪntər/ /diː-ˈaɪsɪŋ/ /ˌɒpəˈreɪʃənz/", translation: "冬季除冰作业",
          subComponents: [{ startIndex: 0, words: [{ word: "Winter" }, { word: "de-icing" }, { word: "operations" }] }]
        },
        {
          start: 3, end: 6, label: "谓语(被动)", phonetic: "/mʌst/ /bi/ /ˈθʌrəli/ /kəmˈpliːtɪd/", translation: "必须彻底完成",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "thoroughly" }, { word: "completed" }] }]
        },
        {
          start: 7, end: 8, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ˈteɪkɒf/", translation: "在起飞前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "takeoff" }] }]
        },
        {
          start: 9, end: 12, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /flaɪt/ /ˈseɪfti/", translation: "以确保飞行安全",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "flight" }, { word: "safety", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运行保障", text: "de-icing operations (除冰作业), flight safety (飞行安全)" }
      ]
    },
    {
      id: "q_airport_s106",
      chinese: "货运枢纽的自动化分拣系统每小时可处理数千个航空集装箱",
      english_full: "Automated sorting systems at cargo hubs can process thousands of air freight containers per hour.",
      words: [
        { word: "Automated" }, { word: "sorting" }, { word: "systems" }, { word: "at" }, { word: "cargo" }, { word: "hubs" }, { word: "can" }, { word: "process" }, { word: "thousands" }, { word: "of" }, { word: "air" }, { word: "freight" }, { word: "containers" }, { word: "per" }, { word: "hour", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɔːtəmeɪtɪd/ /ˈsɔːrtɪŋ/ /ˈsɪstəmz/", translation: "自动化分拣系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Automated" }, { word: "sorting" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 5, label: "地点状语", phonetic: "/æt/ /ˈkɑːrɡoʊ/ /hʌbz/", translation: "在货运枢纽",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "cargo" }, { word: "hubs" }] }]
        },
        {
          start: 6, end: 7, label: "谓语", phonetic: "/kæn/ /ˈprɒsɛs/", translation: "可处理",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "process" }] }]
        },
        {
          start: 8, end: 14, label: "宾语", phonetic: "/ˈθaʊzəndz/ /ɒv/ /ɛr/ /freɪt/ /kənˈteɪnərz/ /pɜːr/ /aʊər/", translation: "每小时数千个航空集装箱",
          subComponents: [{ startIndex: 0, words: [{ word: "thousands" }, { word: "of" }, { word: "air" }, { word: "freight" }, { word: "containers" }, { word: "per" }, { word: "hour", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "货运航空", text: "air freight container (航空货运集装箱), cargo hub (货运枢纽)" }
      ]
    },
    {
      id: "q_airport_s107",
      chinese: "尽管实施了精密的流量管理措施，空域拥堵仍导致多个出港航班延误",
      english_full: "Despite implementing sophisticated flow management measures, airspace congestion still caused delays for multiple outbound flights.",
      words: [
        { word: "Despite" }, { word: "implementing" }, { word: "sophisticated" }, { word: "flow" }, { word: "management" }, { word: "measures", punctuation: "," }, { word: "airspace" }, { word: "congestion" }, { word: "still" }, { word: "caused" }, { word: "delays" }, { word: "for" }, { word: "multiple" }, { word: "outbound" }, { word: "flights", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "让步状语", phonetic: "/dɪˈspaɪt/ /ˈɪmplɪmɛntɪŋ/ /səˈfɪstɪkeɪtɪd/ /floʊ/ /ˈmænɪdʒmənt/ /ˈmɛʒərz/", translation: "尽管实施了精密流量管理措施",
          subComponents: [{ startIndex: 0, words: [{ word: "Despite" }, { word: "implementing" }, { word: "sophisticated" }, { word: "flow" }, { word: "management" }, { word: "measures", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ˈɛərspɛɪs/ /kənˈdʒɛstʃən/", translation: "空域拥堵",
          subComponents: [{ startIndex: 0, words: [{ word: "airspace" }, { word: "congestion" }] }]
        },
        {
          start: 8, end: 8, label: "状语", phonetic: "/stɪl/", translation: "仍",
          subComponents: [{ startIndex: 0, words: [{ word: "still" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/kɔːzd/", translation: "导致",
          subComponents: [{ startIndex: 0, words: [{ word: "caused" }] }]
        },
        {
          start: 10, end: 14, label: "宾语", phonetic: "/dɪˈleɪz/ /fɔːr/ /ˈmʌltɪpəl/ /ˈaʊtbaʊnd/ /flaɪts/", translation: "多个出港航班延误",
          subComponents: [{ startIndex: 0, words: [{ word: "delays" }, { word: "for" }, { word: "multiple" }, { word: "outbound" }, { word: "flights", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "流量管理", text: "flow management (流量管理), airspace congestion (空域拥堵), outbound flights (出港航班)" }
      ]
    },
    {
      id: "q_airport_s108",
      chinese: "航空公司已为受航班取消影响的旅客安排了替代住宿和改签选项",
      english_full: "The airline has arranged alternative accommodation and rebooking options for passengers affected by flight cancellations.",
      words: [
        { word: "The" }, { word: "airline" }, { word: "has" }, { word: "arranged" }, { word: "alternative" }, { word: "accommodation" }, { word: "and" }, { word: "rebooking" }, { word: "options" }, { word: "for" }, { word: "passengers" }, { word: "affected" }, { word: "by" }, { word: "flight" }, { word: "cancellations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɛərlaɪn/", translation: "航空公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "airline" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(现完)", phonetic: "/hæz/ /əˈreɪndʒd/", translation: "已安排",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "arranged" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ɔːlˈtɜːrnətɪv/ /əˌkɒməˈdeɪʃən/ /ænd/ /riːˈbʊkɪŋ/ /ˈɒpʃənz/", translation: "替代住宿和改签选项",
          subComponents: [{ startIndex: 0, words: [{ word: "alternative" }, { word: "accommodation" }, { word: "and" }, { word: "rebooking" }, { word: "options" }] }]
        },
        {
          start: 9, end: 14, label: "后置定语", phonetic: "/fɔːr/ /ˈpæsəndʒərz/ /əˈfɛktɪd/ /baɪ/ /flaɪt/ /ˌkænsəˈleɪʃənz/", translation: "受航班取消影响的旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "passengers" }, { word: "affected" }, { word: "by" }, { word: "flight" }, { word: "cancellations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "旅客权益", text: "rebooking options (改签选项), flight cancellation (航班取消)" }
      ]
    },
    {
      id: "q_airport_s109",
      chinese: "精密进近雷达系统使飞行员在极低能见度条件下也能安全着陆",
      english_full: "Precision approach radar systems enable pilots to land safely under extremely low visibility conditions.",
      words: [
        { word: "Precision" }, { word: "approach" }, { word: "radar" }, { word: "systems" }, { word: "enable" }, { word: "pilots" }, { word: "to" }, { word: "land" }, { word: "safely" }, { word: "under" }, { word: "extremely" }, { word: "low" }, { word: "visibility" }, { word: "conditions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/prɪˈsɪʒən/ /əˈproʊtʃ/ /ˈreɪdɑːr/ /ˈsɪstəmz/", translation: "精密进近雷达系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Precision" }, { word: "approach" }, { word: "radar" }, { word: "systems" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈpaɪləts/", translation: "飞行员",
          subComponents: [{ startIndex: 0, words: [{ word: "pilots" }] }]
        },
        {
          start: 6, end: 13, label: "宾补", phonetic: "/tuː/ /lænd/ /ˈseɪfli/ /ˈʌndər/ /ɪkˈstriːmli/ /loʊ/ /ˌvɪzəˈbɪlɪti/ /kənˈdɪʃənz/", translation: "在极低能见度条件下安全着陆",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "land" }, { word: "safely" }, { word: "under" }, { word: "extremely" }, { word: "low" }, { word: "visibility" }, { word: "conditions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "导航设备", text: "precision approach radar (精密进近雷达), visibility conditions (能见度条件)" }
      ]
    },
    {
      id: "q_airport_s110",
      chinese: "根据国际民航组织的规定，所有机组人员必须定期接受应急撤离演练",
      english_full: "Pursuant to ICAO regulations, all crew members must undergo regular emergency evacuation drills.",
      words: [
        { word: "Pursuant" }, { word: "to" }, { word: "ICAO" }, { word: "regulations", punctuation: "," }, { word: "all" }, { word: "crew" }, { word: "members" }, { word: "must" }, { word: "undergo" }, { word: "regular" }, { word: "emergency" }, { word: "evacuation" }, { word: "drills", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "依据状语", phonetic: "/pərˈsuːənt/ /tuː/ /aɪ-keɪ-oʊ/ /ˌrɛɡjəˈleɪʃənz/", translation: "根据国际民航组织规定",
          subComponents: [{ startIndex: 0, words: [{ word: "Pursuant" }, { word: "to" }, { word: "ICAO" }, { word: "regulations", punctuation: "," }] }]
        },
        {
          start: 4, end: 6, label: "主语", phonetic: "/ɔːl/ /kruː/ /ˈmɛmbərz/", translation: "所有机组人员",
          subComponents: [{ startIndex: 0, words: [{ word: "all" }, { word: "crew" }, { word: "members" }] }]
        },
        {
          start: 7, end: 8, label: "谓语", phonetic: "/mʌst/ /ˌʌndərˈɡoʊ/", translation: "必须接受",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "undergo" }] }]
        },
        {
          start: 9, end: 12, label: "宾语", phonetic: "/ˈrɛgjələr/ /ɪˈmɜːrdʒənsi/ /ɪˌvækjuˈeɪʃən/ /drɪlz/", translation: "定期应急撤离演练",
          subComponents: [{ startIndex: 0, words: [{ word: "regular" }, { word: "emergency" }, { word: "evacuation" }, { word: "drills", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "法规培训", text: "pursuant to (依据), ICAO (国际民航组织), evacuation drill (撤离演练)" }
      ]
    },
    {
      id: "q_airport_s111",
      chinese: "廊桥故障迫使乘客通过移动登机梯完成最后一段登机",
      english_full: "A jet bridge malfunction compelled passengers to board via mobile air stairs for the final boarding segment.",
      words: [
        { word: "A" }, { word: "jet" }, { word: "bridge" }, { word: "malfunction" }, { word: "compelled" }, { word: "passengers" }, { word: "to" }, { word: "board" }, { word: "via" }, { word: "mobile" }, { word: "air" }, { word: "stairs" }, { word: "for" }, { word: "the" }, { word: "final" }, { word: "boarding" }, { word: "segment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ə/ /dʒɛt/ /brɪdʒ/ /ˌmælfʌŋkʃən/", translation: "廊桥故障",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "jet" }, { word: "bridge" }, { word: "malfunction" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kəmˈpɛld/", translation: "迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "compelled" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈpæsəndʒərz/", translation: "乘客",
          subComponents: [{ startIndex: 0, words: [{ word: "passengers" }] }]
        },
        {
          start: 6, end: 16, label: "宾补", phonetic: "/tuː/ /bɔːrd/ /ˈvaɪə/ /ˈmoʊbaɪl/ /ɛr/ /stɛrz/ /fɔːr/ /ðə/ /ˈfaɪnəl/ /ˈbɔːrdɪŋ/ /ˈsɛɡmənt/", translation: "通过移动登机梯完成最后一段登机",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "board" }, { word: "via" }, { word: "mobile" }, { word: "air" }, { word: "stairs" }, { word: "for" }, { word: "the" }, { word: "final" }, { word: "boarding" }, { word: "segment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "地面保障", text: "jet bridge (廊桥), mobile air stairs (移动登机梯)" }
      ]
    },
    {
      id: "q_airport_s112",
      chinese: "行李追踪系统使旅客能够实时查看托运物品在转运链路上的位置",
      english_full: "Baggage tracking systems allow travelers to monitor the real-time location of checked items throughout the transfer chain.",
      words: [
        { word: "Baggage" }, { word: "tracking" }, { word: "systems" }, { word: "allow" }, { word: "travelers" }, { word: "to" }, { word: "monitor" }, { word: "the" }, { word: "real-time" }, { word: "location" }, { word: "of" }, { word: "checked" }, { word: "items" }, { word: "throughout" }, { word: "the" }, { word: "transfer" }, { word: "chain", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈbægɪdʒ/ /ˈtrækɪŋ/ /ˈsɪstəmz/", translation: "行李追踪系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Baggage" }, { word: "tracking" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈlaʊ/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "allow" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈtrævələrz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "travelers" }] }]
        },
        {
          start: 5, end: 16, label: "宾补", phonetic: "/tuː/ /ˈmɒnɪtər/ /ðə/ /ˌriːl-ˈtaɪm/ /loʊˈkeɪʃən/ /ɒv/ /tʃɛkt/ /ˈaɪtəmz/ /θruːˈaʊt/ /ðə/ /ˈtrænsfər/ /tʃeɪn/", translation: "实时查看托运物品在转运链路上的位置",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "monitor" }, { word: "the" }, { word: "real-time" }, { word: "location" }, { word: "of" }, { word: "checked" }, { word: "items" }, { word: "throughout" }, { word: "the" }, { word: "transfer" }, { word: "chain", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "旅客服务", text: "baggage tracking (行李追踪), transfer chain (转运链路)" }
      ]
    },
    {
      id: "q_airport_s113",
      chinese: "由于鸟击风险升高，管制塔台暂时关闭了受影响跑道的起降许可",
      english_full: "Due to elevated bird-strike risk, the control tower temporarily suspended takeoff and landing clearances on the affected runway.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "elevated" }, { word: "bird-strike" }, { word: "risk", punctuation: "," }, { word: "the" }, { word: "control" }, { word: "tower" }, { word: "temporarily" }, { word: "suspended" }, { word: "takeoff" }, { word: "and" }, { word: "landing" }, { word: "clearances" }, { word: "on" }, { word: "the" }, { word: "affected" }, { word: "runway", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "原因状语", phonetic: "/djuː/ /tuː/ /ˈɛlɪveɪtɪd/ /bɜːrd-straɪk/ /rɪsk/", translation: "由于鸟击风险升高",
          subComponents: [{ startIndex: 0, words: [{ word: "Due" }, { word: "to" }, { word: "elevated" }, { word: "bird-strike" }, { word: "risk", punctuation: "," }] }]
        },
        {
          start: 5, end: 7, label: "主语", phonetic: "/ðə/ /kənˈtroʊl/ /ˈtaʊər/", translation: "管制塔台",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "control" }, { word: "tower" }] }]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/ˌtɛmpəˈrɛrɪli/ /səˈspɛndɪd/", translation: "暂时中止",
          subComponents: [{ startIndex: 0, words: [{ word: "temporarily" }, { word: "suspended" }] }]
        },
        {
          start: 10, end: 17, label: "宾语", phonetic: "/ˈteɪkɒf/ /ænd/ /ˈlændɪŋ/ /ˈklɪərənsɪz/ /ɒn/ /ðə/ /əˈfɛktɪd/ /ˈrʌnweɪ/", translation: "受影响跑道的起降许可",
          subComponents: [{ startIndex: 0, words: [{ word: "takeoff" }, { word: "and" }, { word: "landing" }, { word: "clearances" }, { word: "on" }, { word: "the" }, { word: "affected" }, { word: "runway", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运行安全", text: "bird-strike risk (鸟击风险), landing clearance (着陆许可)" }
      ]
    },
    {
      id: "q_airport_s114",
      chinese: "商务旅客通常优先选择靠近安检口的贵宾休息室以优化转机时间",
      english_full: "Business travelers typically prioritize lounges near security checkpoints to optimize connection times.",
      words: [
        { word: "Business" }, { word: "travelers" }, { word: "typically" }, { word: "prioritize" }, { word: "lounges" }, { word: "near" }, { word: "security" }, { word: "checkpoints" }, { word: "to" }, { word: "optimize" }, { word: "connection" }, { word: "times", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈbɪznəs/ /ˈtrævələrz/", translation: "商务旅客",
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
          start: 4, end: 7, label: "宾语", phonetic: "/laʊndʒɪz/ /nɪər/ /sɪˈkjʊərɪti/ /ˈtʃɛkpɔɪnts/", translation: "靠近安检口的贵宾休息室",
          subComponents: [{ startIndex: 0, words: [{ word: "lounges" }, { word: "near" }, { word: "security" }, { word: "checkpoints" }] }]
        },
        {
          start: 8, end: 11, label: "目的状语", phonetic: "/tuː/ /ˈɒptɪmaɪz/ /kəˈnɛkʃən/ /taɪmz/", translation: "以优化转机时间",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "optimize" }, { word: "connection" }, { word: "times", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商务出行", text: "prioritize (优先), connection time (转机时间)" }
      ]
    },
    {
      id: "q_airport_s115",
      chinese: "海关官员有权对可疑行李进行开箱检查并扣押未申报的违禁品",
      english_full: "Customs officers are authorized to conduct intrusive inspections of suspicious baggage and seize undeclared contraband.",
      words: [
        { word: "Customs" }, { word: "officers" }, { word: "are" }, { word: "authorized" }, { word: "to" }, { word: "conduct" }, { word: "intrusive" }, { word: "inspections" }, { word: "of" }, { word: "suspicious" }, { word: "baggage" }, { word: "and" }, { word: "seize" }, { word: "undeclared" }, { word: "contraband", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈkʌstəmz/ /ˈɒfɪsərz/", translation: "海关官员",
          subComponents: [{ startIndex: 0, words: [{ word: "Customs" }, { word: "officers" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(被动)", phonetic: "/ɑːr/ /ˈɔːθəraɪzd/", translation: "有权",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "authorized" }] }]
        },
        {
          start: 4, end: 10, label: "不定式短语", phonetic: "/tuː/ /kənˈdʌkt/ /ɪnˈtruːsɪv/ /ɪnˈspɛkʃənz/ /ɒv/ /səˈspɪʃəs/ /ˈbægɪdʒ/", translation: "对可疑行李进行开箱检查",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "conduct" }, { word: "intrusive" }, { word: "inspections" }, { word: "of" }, { word: "suspicious" }, { word: "baggage" }] }]
        },
        {
          start: 11, end: 14, label: "并列谓语", phonetic: "/ænd/ /siːz/ /ˌʌndɪˈklɛərd/ /ˈkɒntrəbænd/", translation: "并扣押未申报违禁品",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "seize" }, { word: "undeclared" }, { word: "contraband", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "海关执法", text: "intrusive inspection (开箱检查), undeclared contraband (未申报违禁品)" }
      ]
    },
    {
      id: "q_airport_s116",
      chinese: "空管中心通过协同决策机制协调多家航空公司调整航班时刻表",
      english_full: "The air traffic control center coordinates schedule adjustments among multiple carriers through collaborative decision-making mechanisms.",
      words: [
        { word: "The" }, { word: "air" }, { word: "traffic" }, { word: "control" }, { word: "center" }, { word: "coordinates" }, { word: "schedule" }, { word: "adjustments" }, { word: "among" }, { word: "multiple" }, { word: "carriers" }, { word: "through" }, { word: "collaborative" }, { word: "decision-making" }, { word: "mechanisms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ɛr/ /ˈtræfɪk/ /kənˈtroʊl/ /ˈsɛntər/", translation: "空管中心",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "air" }, { word: "traffic" }, { word: "control" }, { word: "center" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/koʊˈɔːrdɪneɪts/", translation: "协调",
          subComponents: [{ startIndex: 0, words: [{ word: "coordinates" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈʃɛdjuːl/ /əˈdʒʌstmənts/", translation: "时刻表调整",
          subComponents: [{ startIndex: 0, words: [{ word: "schedule" }, { word: "adjustments" }] }]
        },
        {
          start: 8, end: 10, label: "状语", phonetic: "/əˈmʌŋ/ /ˈmʌltɪpəl/ /ˈkæriərz/", translation: "多家航空公司之间",
          subComponents: [{ startIndex: 0, words: [{ word: "among" }, { word: "multiple" }, { word: "carriers" }] }]
        },
        {
          start: 11, end: 14, label: "方式状语", phonetic: "/θruː/ /kəˈlæbərətɪv/ /dɪˈsɪʒən-ˈmeɪkɪŋ/ /ˈmɛkənɪzəmz/", translation: "通过协同决策机制",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "collaborative" }, { word: "decision-making" }, { word: "mechanisms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "协同决策", text: "collaborative decision-making (协同决策), schedule adjustment (时刻调整)" }
      ]
    },
    {
      id: "q_airport_s117",
      chinese: "若您的联程航班延误，地勤人员将协助您重新规划后续行程",
      english_full: "If your connecting flight is delayed, ground staff will assist you in reconfiguring your subsequent itinerary.",
      words: [
        { word: "If" }, { word: "your" }, { word: "connecting" }, { word: "flight" }, { word: "is" }, { word: "delayed", punctuation: "," }, { word: "ground" }, { word: "staff" }, { word: "will" }, { word: "assist" }, { word: "you" }, { word: "in" }, { word: "reconfiguring" }, { word: "your" }, { word: "subsequent" }, { word: "itinerary", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "条件从句", phonetic: "/ɪf/ /jʊər/ /kəˈnɛktɪŋ/ /flaɪt/ /ɪz/ /dɪˈleɪd/", translation: "若您的联程航班延误",
          subComponents: [{ startIndex: 0, words: [{ word: "If" }, { word: "your" }, { word: "connecting" }, { word: "flight" }, { word: "is" }, { word: "delayed", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/graʊnd/ /stæf/", translation: "地勤人员",
          subComponents: [{ startIndex: 0, words: [{ word: "ground" }, { word: "staff" }] }]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/wɪl/ /əˈsɪst/", translation: "将协助",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "assist" }] }]
        },
        {
          start: 10, end: 10, label: "宾语", phonetic: "/juː/", translation: "您",
          subComponents: [{ startIndex: 0, words: [{ word: "you" }] }]
        },
        {
          start: 11, end: 15, label: "介词短语", phonetic: "/ɪn/ /ˌriːkənˈfɪɡjʊrɪŋ/ /jʊər/ /ˈsʌbsɪkwənt/ /aɪˈtɪnərɛri/", translation: "重新规划后续行程",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "reconfiguring" }, { word: "your" }, { word: "subsequent" }, { word: "itinerary", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "转机服务", text: "connecting flight (联程航班), reconfigure itinerary (重新规划行程)" }
      ]
    },
    {
      id: "q_airport_s118",
      chinese: "机场扩建项目旨在将年旅客吞吐量提升至五千万人次以上",
      english_full: "The airport expansion project aims to increase annual passenger throughput to over fifty million.",
      words: [
        { word: "The" }, { word: "airport" }, { word: "expansion" }, { word: "project" }, { word: "aims" }, { word: "to" }, { word: "increase" }, { word: "annual" }, { word: "passenger" }, { word: "throughput" }, { word: "to" }, { word: "over" }, { word: "fifty" }, { word: "million", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈɛərpɔːrt/ /ɪkˈspænʃən/ /ˈprɒdʒɛkt/", translation: "机场扩建项目",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "airport" }, { word: "expansion" }, { word: "project" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/eɪmz/", translation: "旨在",
          subComponents: [{ startIndex: 0, words: [{ word: "aims" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/tuː/ /ɪnˈkriːs/ /ˈænjuəl/ /ˈpæsəndʒər/ /ˈθruːpʊt/", translation: "提升年旅客吞吐量",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "increase" }, { word: "annual" }, { word: "passenger" }, { word: "throughput" }] }]
        },
        {
          start: 10, end: 13, label: "程度状语", phonetic: "/tuː/ /ˈoʊvər/ /ˈfɪfti/ /ˈmɪljən/", translation: "至五千万以上",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "over" }, { word: "fifty" }, { word: "million", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基础设施", text: "passenger throughput (旅客吞吐量), expansion project (扩建项目)" }
      ]
    },
    {
      id: "q_airport_s119",
      chinese: "飞行员在收到放行许可前不得擅自启动飞机引擎",
      english_full: "Pilots must not start aircraft engines without receiving clearance from ground control.",
      words: [
        { word: "Pilots" }, { word: "must" }, { word: "not" }, { word: "start" }, { word: "aircraft" }, { word: "engines" }, { word: "without" }, { word: "receiving" }, { word: "clearance" }, { word: "from" }, { word: "ground" }, { word: "control", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈpaɪləts/", translation: "飞行员",
          subComponents: [{ startIndex: 0, words: [{ word: "Pilots" }] }]
        },
        {
          start: 1, end: 3, label: "谓语", phonetic: "/mʌst/ /nɒt/ /stɑːrt/", translation: "不得启动",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "not" }, { word: "start" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈɛərkræft/ /ˈɛndʒɪnz/", translation: "飞机引擎",
          subComponents: [{ startIndex: 0, words: [{ word: "aircraft" }, { word: "engines" }] }]
        },
        {
          start: 6, end: 11, label: "条件状语", phonetic: "/wɪˈðaʊt/ /rɪˈsiːvɪŋ/ /ˈklɪərəns/ /frɒm/ /graʊnd/ /kənˈtroʊl/", translation: "在未收到地面管制放行许可前",
          subComponents: [{ startIndex: 0, words: [{ word: "without" }, { word: "receiving" }, { word: "clearance" }, { word: "from" }, { word: "ground" }, { word: "control", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运行规程", text: "engine start (启动引擎), ground control clearance (地面放行许可)" }
      ]
    },
    {
      id: "q_airport_s120",
      chinese: "免税零售商为过境旅客提供符合各国进口限额的精选商品",
      english_full: "Duty-free retailers offer curated merchandise that complies with import allowances for transit passengers.",
      words: [
        { word: "Duty-free" }, { word: "retailers" }, { word: "offer" }, { word: "curated" }, { word: "merchandise" }, { word: "that" }, { word: "complies" }, { word: "with" }, { word: "import" }, { word: "allowances" }, { word: "for" }, { word: "transit" }, { word: "passengers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈdjuːti-friː/ /ˈriːteɪlərz/", translation: "免税零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "Duty-free" }, { word: "retailers" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offer" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/kjʊˈreɪtɪd/ /ˈmɜːrtʃəndaɪs/", translation: "精选商品",
          subComponents: [{ startIndex: 0, words: [{ word: "curated" }, { word: "merchandise" }] }]
        },
        {
          start: 5, end: 12, label: "定语从句", phonetic: "/ðæt/ /kəmˈplaɪz/ /wɪð/ /ˈɪmpɔːrt/ /əˈlaʊənsɪz/ /fɔːr/ /ˈtrænsɪt/ /ˈpæsəndʒərz/", translation: "符合各国进口限额的过境旅客适用",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "complies" }, { word: "with" }, { word: "import" }, { word: "allowances" }, { word: "for" }, { word: "transit" }, { word: "passengers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售合规", text: "curated merchandise (精选商品), import allowance (进口限额)" }
      ]
    },
    {
      id: "q_airport_s121",
      chinese: "跑道视程低于最低标准时，进近程序将自动切换至二类盲降模式",
      english_full: "When runway visual range falls below minimum standards, the approach procedure automatically switches to Category II ILS mode.",
      words: [
        { word: "When" }, { word: "runway" }, { word: "visual" }, { word: "range" }, { word: "falls" }, { word: "below" }, { word: "minimum" }, { word: "standards", punctuation: "," }, { word: "the" }, { word: "approach" }, { word: "procedure" }, { word: "automatically" }, { word: "switches" }, { word: "to" }, { word: "Category" }, { word: "II" }, { word: "ILS" }, { word: "mode", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "时间从句", phonetic: "/wɛn/ /ˈrʌnweɪ/ /ˈvɪʒuəl/ /reɪndʒ/ /fɔːlz/ /bɪˈloʊ/ /ˈmɪnɪməm/ /ˈstændərdz/", translation: "当跑道视程低于最低标准",
          subComponents: [{ startIndex: 0, words: [{ word: "When" }, { word: "runway" }, { word: "visual" }, { word: "range" }, { word: "falls" }, { word: "below" }, { word: "minimum" }, { word: "standards", punctuation: "," }] }]
        },
        {
          start: 8, end: 10, label: "主语", phonetic: "/ðə/ /əˈproʊtʃ/ /prəˈsiːdʒər/", translation: "进近程序",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "approach" }, { word: "procedure" }] }]
        },
        {
          start: 11, end: 12, label: "谓语", phonetic: "/ˌɔːtəˈmætɪkli/ /ˈswɪtʃɪz/", translation: "自动切换",
          subComponents: [{ startIndex: 0, words: [{ word: "automatically" }, { word: "switches" }] }]
        },
        {
          start: 13, end: 17, label: "宾语", phonetic: "/tuː/ /ˈkætɪɡəri/ /tuː/ /aɪ-ɛl-ɛs/ /moʊd/", translation: "至二类盲降模式",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "Category" }, { word: "II" }, { word: "ILS" }, { word: "mode", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "进近标准", text: "runway visual range (跑道视程), Category II ILS (二类盲降)" }
      ]
    },
    {
      id: "q_airport_s122",
      chinese: "地勤团队必须在限定时间内完成飞机周转，以避免连锁延误",
      english_full: "Ground crews must complete aircraft turnaround within the allotted time to prevent cascading delays.",
      words: [
        { word: "Ground" }, { word: "crews" }, { word: "must" }, { word: "complete" }, { word: "aircraft" }, { word: "turnaround" }, { word: "within" }, { word: "the" }, { word: "allotted" }, { word: "time" }, { word: "to" }, { word: "prevent" }, { word: "cascading" }, { word: "delays", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/graʊnd/ /kruːz/", translation: "地勤团队",
          subComponents: [{ startIndex: 0, words: [{ word: "Ground" }, { word: "crews" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/mʌst/ /kəmˈpliːt/", translation: "必须完成",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "complete" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈɛərkræft/ /ˈtɜːnəraʊnd/", translation: "飞机周转",
          subComponents: [{ startIndex: 0, words: [{ word: "aircraft" }, { word: "turnaround" }] }]
        },
        {
          start: 6, end: 9, label: "时间状语", phonetic: "/wɪˈðɪn/ /ðə/ /əˈlɒtɪd/ /taɪm/", translation: "在限定时间内",
          subComponents: [{ startIndex: 0, words: [{ word: "within" }, { word: "the" }, { word: "allotted" }, { word: "time" }] }]
        },
        {
          start: 10, end: 13, label: "目的状语", phonetic: "/tuː/ /prɪˈvɛnt/ /kæˈskeɪdɪŋ/ /dɪˈleɪz/", translation: "以避免连锁延误",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "prevent" }, { word: "cascading" }, { word: "delays", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "地面运行", text: "aircraft turnaround (飞机周转), cascading delay (连锁延误)" }
      ]
    },
    {
      id: "q_airport_s123",
      chinese: "持外交护照的旅客可在专用通道享受加速出入境审查",
      english_full: "Passengers holding diplomatic passports may use dedicated lanes for expedited immigration processing.",
      words: [
        { word: "Passengers" }, { word: "holding" }, { word: "diplomatic" }, { word: "passports" }, { word: "may" }, { word: "use" }, { word: "dedicated" }, { word: "lanes" }, { word: "for" }, { word: "expedited" }, { word: "immigration" }, { word: "processing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈpæsəndʒərz/ /ˈhoʊldɪŋ/ /ˌdɪpləˈmætɪk/ /ˈpæspɔːrts/", translation: "持外交护照的旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Passengers" }, { word: "holding" }, { word: "diplomatic" }, { word: "passports" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/meɪ/ /juːz/", translation: "可使用",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "use" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈdɛdɪkeɪtɪd/ /leɪnz/", translation: "专用通道",
          subComponents: [{ startIndex: 0, words: [{ word: "dedicated" }, { word: "lanes" }] }]
        },
        {
          start: 8, end: 11, label: "目的状语", phonetic: "/fɔːr/ /ˈɛkspɪdaɪtɪd/ /ˌɪmɪˈɡreɪʃən/ /ˈprɒsɛsɪŋ/", translation: "加速出入境审查",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "expedited" }, { word: "immigration" }, { word: "processing", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "特殊通道", text: "diplomatic passport (外交护照), expedited processing (加速审查)" }
      ]
    },
    {
      id: "q_airport_s124",
      chinese: "航空公司联盟成员可在全球合作机场共享贵宾休息室权益",
      english_full: "Alliance member airlines can share lounge privileges across partner airports worldwide.",
      words: [
        { word: "Alliance" }, { word: "member" }, { word: "airlines" }, { word: "can" }, { word: "share" }, { word: "lounge" }, { word: "privileges" }, { word: "across" }, { word: "partner" }, { word: "airports" }, { word: "worldwide", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/əˈlaɪəns/ /ˈmɛmbər/ /ˈɛərlaɪnz/", translation: "航空公司联盟成员",
          subComponents: [{ startIndex: 0, words: [{ word: "Alliance" }, { word: "member" }, { word: "airlines" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/kæn/ /ʃɛər/", translation: "可共享",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "share" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/laʊndʒ/ /ˈprɪvɪlɪdʒɪz/", translation: "贵宾休息室权益",
          subComponents: [{ startIndex: 0, words: [{ word: "lounge" }, { word: "privileges" }] }]
        },
        {
          start: 7, end: 10, label: "地点状语", phonetic: "/əˈkrɒs/ /ˈpɑːrtnər/ /ˈɛərpɔːrts/ /ˌwɜːrldˈwaɪd/", translation: "全球合作机场",
          subComponents: [{ startIndex: 0, words: [{ word: "across" }, { word: "partner" }, { word: "airports" }, { word: "worldwide", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "联盟权益", text: "alliance member (联盟成员), lounge privileges (休息室权益)" }
      ]
    },
    {
      id: "q_airport_s125",
      chinese: "安检人员使用毫米波扫描仪检测旅客是否携带隐蔽的金属或液体物品",
      english_full: "Security personnel use millimeter-wave scanners to detect whether travelers are concealing metal or liquid items.",
      words: [
        { word: "Security" }, { word: "personnel" }, { word: "use" }, { word: "millimeter-wave" }, { word: "scanners" }, { word: "to" }, { word: "detect" }, { word: "whether" }, { word: "travelers" }, { word: "are" }, { word: "concealing" }, { word: "metal" }, { word: "or" }, { word: "liquid" }, { word: "items", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/sɪˈkjʊərɪti/ /ˌpɜːrsəˈnɛl/", translation: "安检人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Security" }, { word: "personnel" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/juːz/", translation: "使用",
          subComponents: [{ startIndex: 0, words: [{ word: "use" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/mɪˈlɪmiːtər-weɪv/ /ˈskænərz/", translation: "毫米波扫描仪",
          subComponents: [{ startIndex: 0, words: [{ word: "millimeter-wave" }, { word: "scanners" }] }]
        },
        {
          start: 5, end: 14, label: "目的状语", phonetic: "/tuː/ /dɪˈtɛkt/ /ˈwɛðər/ /ˈtrævələrz/ /ɑːr/ /kənˈsiːlɪŋ/ /ˈmɛtəl/ /ɔːr/ /ˈlɪkwɪd/ /ˈaɪtəmz/", translation: "检测旅客是否携带隐蔽金属或液体",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "detect" }, { word: "whether" }, { word: "travelers" }, { word: "are" }, { word: "concealing" }, { word: "metal" }, { word: "or" }, { word: "liquid" }, { word: "items", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "安检技术", text: "millimeter-wave scanner (毫米波扫描仪), conceal (藏匿)" }
      ]
    },
    {
      id: "q_airport_s126",
      chinese: "机长有权在遭遇严重颠簸时下令暂停客舱服务并系紧安全带",
      english_full: "The captain is entitled to suspend cabin service and instruct passengers to fasten seat belts during severe turbulence.",
      words: [
        { word: "The" }, { word: "captain" }, { word: "is" }, { word: "entitled" }, { word: "to" }, { word: "suspend" }, { word: "cabin" }, { word: "service" }, { word: "and" }, { word: "instruct" }, { word: "passengers" }, { word: "to" }, { word: "fasten" }, { word: "seat" }, { word: "belts" }, { word: "during" }, { word: "severe" }, { word: "turbulence", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkæptɪn/", translation: "机长",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "captain" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ɪz/ /ɪnˈtaɪtld/", translation: "有权",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "entitled" }] }]
        },
        {
          start: 4, end: 7, label: "不定式1", phonetic: "/tuː/ /səˈspɛnd/ /ˈkæbɪn/ /ˈsɜːrvɪs/", translation: "暂停客舱服务",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "suspend" }, { word: "cabin" }, { word: "service" }] }]
        },
        {
          start: 8, end: 14, label: "并列不定式", phonetic: "/ænd/ /ɪnˈstrʌkt/ /ˈpæsəndʒərz/ /tuː/ /ˈfæsn/ /siːt/ /bɛlts/", translation: "并指令旅客系紧安全带",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "instruct" }, { word: "passengers" }, { word: "to" }, { word: "fasten" }, { word: "seat" }, { word: "belts" }] }]
        },
        {
          start: 15, end: 17, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /sɪˈvɪər/ /ˈtɜːrbjʊləns/", translation: "在严重颠簸期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "severe" }, { word: "turbulence", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客舱管理", text: "be entitled to (有权), severe turbulence (严重颠簸)" }
      ]
    },
    {
      id: "q_airport_s127",
      chinese: "机场噪音管理条例对夜间起降航班施加了严格的航迹限制",
      english_full: "Airport noise regulations impose strict flight path restrictions on nocturnal arrival and departure operations.",
      words: [
        { word: "Airport" }, { word: "noise" }, { word: "regulations" }, { word: "impose" }, { word: "strict" }, { word: "flight" }, { word: "path" }, { word: "restrictions" }, { word: "on" }, { word: "nocturnal" }, { word: "arrival" }, { word: "and" }, { word: "departure" }, { word: "operations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɛərpɔːrt/ /nɔɪz/ /ˌrɛɡjəˈleɪʃənz/", translation: "机场噪音管理条例",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "noise" }, { word: "regulations" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪmˈpoʊz/", translation: "施加",
          subComponents: [{ startIndex: 0, words: [{ word: "impose" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/strɪkt/ /flaɪt/ /pæθ/ /rɪˈstrɪkʃənz/", translation: "严格航迹限制",
          subComponents: [{ startIndex: 0, words: [{ word: "strict" }, { word: "flight" }, { word: "path" }, { word: "restrictions" }] }]
        },
        {
          start: 8, end: 13, label: "对象状语", phonetic: "/ɒn/ /nɒkˈtɜːrnəl/ /əˈraɪvəl/ /ænd/ /dɪˈpɑːrtʃər/ /ˌɒpəˈreɪʃənz/", translation: "对夜间起降运行",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "nocturnal" }, { word: "arrival" }, { word: "and" }, { word: "departure" }, { word: "operations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "环境法规", text: "flight path restriction (航迹限制), nocturnal operations (夜间运行)" }
      ]
    },
    {
      id: "q_airport_s128",
      chinese: "超额行李费将根据航空公司公布的费率表按重量或件数计收",
      english_full: "Excess baggage fees will be assessed according to the carrier's published tariff, either by weight or piece.",
      words: [
        { word: "Excess" }, { word: "baggage" }, { word: "fees" }, { word: "will" }, { word: "be" }, { word: "assessed" }, { word: "according" }, { word: "to" }, { word: "the" }, { word: "carrier's" }, { word: "published" }, { word: "tariff", punctuation: "," }, { word: "either" }, { word: "by" }, { word: "weight" }, { word: "or" }, { word: "piece", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɪkˈsɛs/ /ˈbægɪdʒ/ /fiːz/", translation: "超额行李费",
          subComponents: [{ startIndex: 0, words: [{ word: "Excess" }, { word: "baggage" }, { word: "fees" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(被动)", phonetic: "/wɪl/ /bi/ /əˈsɛst/", translation: "将计收",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "assessed" }] }]
        },
        {
          start: 6, end: 11, label: "方式状语", phonetic: "/əˈkɔːrdɪŋ/ /tuː/ /ðə/ /ˈkæriərz/ /ˈpʌblɪʃt/ /ˈtærɪf/", translation: "根据航空公司公布费率表",
          subComponents: [{ startIndex: 0, words: [{ word: "according" }, { word: "to" }, { word: "the" }, { word: "carrier's" }, { word: "published" }, { word: "tariff", punctuation: "," }] }]
        },
        {
          start: 12, end: 16, label: "补充说明", phonetic: "/ˈaɪðər/ /baɪ/ /weɪt/ /ɔːr/ /piːs/", translation: "按重量或件数",
          subComponents: [{ startIndex: 0, words: [{ word: "either" }, { word: "by" }, { word: "weight" }, { word: "or" }, { word: "piece", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "收费规则", text: "excess baggage fee (超额行李费), published tariff (公布费率表)" }
      ]
    },
    {
      id: "q_airport_s129",
      chinese: "空乘人员将在着陆前向旅客通报目的地当地的时区与天气概况",
      english_full: "Flight attendants will brief passengers on the local time zone and weather outlook at the destination prior to landing.",
      words: [
        { word: "Flight" }, { word: "attendants" }, { word: "will" }, { word: "brief" }, { word: "passengers" }, { word: "on" }, { word: "the" }, { word: "local" }, { word: "time" }, { word: "zone" }, { word: "and" }, { word: "weather" }, { word: "outlook" }, { word: "at" }, { word: "the" }, { word: "destination" }, { word: "prior" }, { word: "to" }, { word: "landing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/flaɪt/ /əˈtɛndənts/", translation: "空乘人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Flight" }, { word: "attendants" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/wɪl/ /briːf/", translation: "将通报",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "brief" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈpæsəndʒərz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "passengers" }] }]
        },
        {
          start: 5, end: 12, label: "介词宾语", phonetic: "/ɒn/ /ðə/ /ˈloʊkəl/ /taɪm/ /zoʊn/ /ænd/ /ˈwɛðər/ /ˈaʊtlʊk/", translation: "当地时区与天气概况",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "local" }, { word: "time" }, { word: "zone" }, { word: "and" }, { word: "weather" }, { word: "outlook" }] }]
        },
        {
          start: 13, end: 18, label: "时间/地点状语", phonetic: "/æt/ /ðə/ /ˌdɛstɪˈneɪʃən/ /ˈpraɪər/ /tuː/ /ˈlændɪŋ/", translation: "在目的地着陆前",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "the" }, { word: "destination" }, { word: "prior" }, { word: "to" }, { word: "landing", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客舱广播", text: "weather outlook (天气概况), prior to landing (着陆前)" }
      ]
    },
    {
      id: "q_airport_s130",
      chinese: "远程塔台技术使管制员能够集中监控多个支线机场的起降活动",
      english_full: "Remote tower technology enables controllers to centrally monitor takeoff and landing activities at multiple regional airports.",
      words: [
        { word: "Remote" }, { word: "tower" }, { word: "technology" }, { word: "enables" }, { word: "controllers" }, { word: "to" }, { word: "centrally" }, { word: "monitor" }, { word: "takeoff" }, { word: "and" }, { word: "landing" }, { word: "activities" }, { word: "at" }, { word: "multiple" }, { word: "regional" }, { word: "airports", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/rɪˈmoʊt/ /ˈtaʊər/ /tɛkˈnɒlədʒi/", translation: "远程塔台技术",
          subComponents: [{ startIndex: 0, words: [{ word: "Remote" }, { word: "tower" }, { word: "technology" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəlz/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enables" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/kənˈtroʊlərz/", translation: "管制员",
          subComponents: [{ startIndex: 0, words: [{ word: "controllers" }] }]
        },
        {
          start: 5, end: 15, label: "宾补", phonetic: "/tuː/ /ˈsɛntrəli/ /ˈmɒnɪtər/ /ˈteɪkɒf/ /ænd/ /ˈlændɪŋ/ /ækˈtɪvɪtiz/ /æt/ /ˈmʌltɪpəl/ /ˈriːdʒənəl/ /ˈɛərpɔːrts/", translation: "集中监控多个支线机场起降活动",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "centrally" }, { word: "monitor" }, { word: "takeoff" }, { word: "and" }, { word: "landing" }, { word: "activities" }, { word: "at" }, { word: "multiple" }, { word: "regional" }, { word: "airports", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "新技术", text: "remote tower (远程塔台), regional airport (支线机场)" }
      ]
    },
    {
      id: "q_airport_s131",
      chinese: "旅客应在航班起飞前至少三小时抵达国际机场以完成全部出境手续",
      english_full: "Travelers should arrive at international airports at least three hours before departure to complete all exit formalities.",
      words: [
        { word: "Travelers" }, { word: "should" }, { word: "arrive" }, { word: "at" }, { word: "international" }, { word: "airports" }, { word: "at" }, { word: "least" }, { word: "three" }, { word: "hours" }, { word: "before" }, { word: "departure" }, { word: "to" }, { word: "complete" }, { word: "all" }, { word: "exit" }, { word: "formalities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈtrævələrz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Travelers" }] }]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/ʃʊd/ /əˈraɪv/", translation: "应抵达",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "arrive" }] }]
        },
        {
          start: 3, end: 5, label: "地点状语", phonetic: "/æt/ /ˌɪntərˈnæʃənəl/ /ˈɛərpɔːrts/", translation: "国际机场",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "international" }, { word: "airports" }] }]
        },
        {
          start: 6, end: 11, label: "时间状语", phonetic: "/æt/ /liːst/ /θriː/ /aʊərz/ /bɪˈfɔːr/ /dɪˈpɑːrtʃər/", translation: "起飞前至少三小时",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "least" }, { word: "three" }, { word: "hours" }, { word: "before" }, { word: "departure" }] }]
        },
        {
          start: 12, end: 16, label: "目的状语", phonetic: "/tuː/ /kəmˈpliːt/ /ɔːl/ /ˈɛksɪt/ /fɔːrˈmælɪtiz/", translation: "完成全部出境手续",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "complete" }, { word: "all" }, { word: "exit" }, { word: "formalities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "出行建议", text: "exit formalities (出境手续), at least three hours (至少三小时)" }
      ]
    },
    {
      id: "q_airport_s132",
      chinese: "燃油价格飙升迫使多家廉价航空公司重新评估其航线网络布局",
      english_full: "Surging jet fuel prices have compelled several low-cost carriers to reassess their route network configurations.",
      words: [
        { word: "Surging" }, { word: "jet" }, { word: "fuel" }, { word: "prices" }, { word: "have" }, { word: "compelled" }, { word: "several" }, { word: "low-cost" }, { word: "carriers" }, { word: "to" }, { word: "reassess" }, { word: "their" }, { word: "route" }, { word: "network" }, { word: "configurations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈsɜːrdʒɪŋ/ /dʒɛt/ /fjuːl/ /ˈpraɪsɪz/", translation: "燃油价格飙升",
          subComponents: [{ startIndex: 0, words: [{ word: "Surging" }, { word: "jet" }, { word: "fuel" }, { word: "prices" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /kəmˈpɛld/", translation: "已迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "compelled" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ˈsɛvrəl/ /loʊ-kɒst/ /ˈkæriərz/", translation: "多家廉价航空公司",
          subComponents: [{ startIndex: 0, words: [{ word: "several" }, { word: "low-cost" }, { word: "carriers" }] }]
        },
        {
          start: 9, end: 14, label: "宾补", phonetic: "/tuː/ /ˌriːəˈsɛs/ /ðɛər/ /ruːt/ /ˈnɛtwɜːrk/ /kənˌfɪɡjəˈreɪʃənz/", translation: "重新评估航线网络布局",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "reassess" }, { word: "their" }, { word: "route" }, { word: "network" }, { word: "configurations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行业动态", text: "jet fuel price (航空燃油价格), route network (航线网络)" }
      ]
    },
    {
      id: "q_airport_s133",
      chinese: "登机口变更通知已通过短信和机场显示屏同步发布给所有旅客",
      english_full: "Gate change notifications have been disseminated to all passengers simultaneously via text message and airport display screens.",
      words: [
        { word: "Gate" }, { word: "change" }, { word: "notifications" }, { word: "have" }, { word: "been" }, { word: "disseminated" }, { word: "to" }, { word: "all" }, { word: "passengers" }, { word: "simultaneously" }, { word: "via" }, { word: "text" }, { word: "message" }, { word: "and" }, { word: "airport" }, { word: "display" }, { word: "screens", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɡeɪt/ /tʃeɪndʒ/ /ˌnoʊtɪfɪˈkeɪʃənz/", translation: "登机口变更通知",
          subComponents: [{ startIndex: 0, words: [{ word: "Gate" }, { word: "change" }, { word: "notifications" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完被动)", phonetic: "/hæv/ /bɪn/ /dɪˈsɛmɪneɪtɪd/", translation: "已同步发布",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "been" }, { word: "disseminated" }] }]
        },
        {
          start: 6, end: 8, label: "间接宾语", phonetic: "/tuː/ /ɔːl/ /ˈpæsəndʒərz/", translation: "给所有旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "all" }, { word: "passengers" }] }]
        },
        {
          start: 9, end: 9, label: "状语", phonetic: "/ˌsaɪməlˈteɪniəsli/", translation: "同步地",
          subComponents: [{ startIndex: 0, words: [{ word: "simultaneously" }] }]
        },
        {
          start: 10, end: 16, label: "方式状语", phonetic: "/ˈvaɪə/ /tɛkst/ /ˈmɛsɪdʒ/ /ænd/ /ˈɛərpɔːrt/ /dɪˈspleɪ/ /skriːnz/", translation: "通过短信和机场显示屏",
          subComponents: [{ startIndex: 0, words: [{ word: "via" }, { word: "text" }, { word: "message" }, { word: "and" }, { word: "airport" }, { word: "display" }, { word: "screens", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "信息发布", text: "gate change notification (登机口变更通知), disseminate (发布/传播)" }
      ]
    },
    {
      id: "q_airport_s134",
      chinese: "特殊餐食需求必须在航班起飞前至少二十四小时向航空公司申报",
      english_full: "Special meal requests must be submitted to the airline at least twenty-four hours prior to departure.",
      words: [
        { word: "Special" }, { word: "meal" }, { word: "requests" }, { word: "must" }, { word: "be" }, { word: "submitted" }, { word: "to" }, { word: "the" }, { word: "airline" }, { word: "at" }, { word: "least" }, { word: "twenty-four" }, { word: "hours" }, { word: "prior" }, { word: "to" }, { word: "departure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈspɛʃəl/ /miːl/ /rɪˈkwɛsts/", translation: "特殊餐食需求",
          subComponents: [{ startIndex: 0, words: [{ word: "Special" }, { word: "meal" }, { word: "requests" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(被动)", phonetic: "/mʌst/ /bi/ /səbˈmɪtɪd/", translation: "必须申报",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "submitted" }] }]
        },
        {
          start: 6, end: 8, label: "间接宾语", phonetic: "/tuː/ /ðə/ /ˈɛərlaɪn/", translation: "向航空公司",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "airline" }] }]
        },
        {
          start: 9, end: 15, label: "时间状语", phonetic: "/æt/ /liːst/ /ˈtwɛnti-fɔːr/ /aʊərz/ /ˈpraɪər/ /tuː/ /dɪˈpɑːrtʃər/", translation: "起飞前至少二十四小时",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "least" }, { word: "twenty-four" }, { word: "hours" }, { word: "prior" }, { word: "to" }, { word: "departure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "特殊服务", text: "special meal request (特殊餐食需求), prior to departure (起飞前)" }
      ]
    },
    {
      id: "q_airport_s135",
      chinese: "机场消防部门定期演练应对航空器起火及紧急疏散的综合预案",
      english_full: "Airport fire departments conduct regular drills for comprehensive contingency plans addressing aircraft fires and emergency evacuations.",
      words: [
        { word: "Airport" }, { word: "fire" }, { word: "departments" }, { word: "conduct" }, { word: "regular" }, { word: "drills" }, { word: "for" }, { word: "comprehensive" }, { word: "contingency" }, { word: "plans" }, { word: "addressing" }, { word: "aircraft" }, { word: "fires" }, { word: "and" }, { word: "emergency" }, { word: "evacuations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɛərpɔːrt/ /faɪər/ /dɪˈpɑːrtmənts/", translation: "机场消防部门",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "fire" }, { word: "departments" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/kənˈdʌkt/", translation: "进行",
          subComponents: [{ startIndex: 0, words: [{ word: "conduct" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈrɛgjələr/ /drɪlz/", translation: "定期演练",
          subComponents: [{ startIndex: 0, words: [{ word: "regular" }, { word: "drills" }] }]
        },
        {
          start: 6, end: 15, label: "介词宾语", phonetic: "/fɔːr/ /ˌkɒmprɪˈhɛnsɪv/ /kənˈtɪndʒənsi/ /plænz/ /əˈdrɛsɪŋ/ /ˈɛərkræft/ /faɪərz/ /ænd/ /ɪˈmɜːrdʒənsi/ /ɪˌvækjuˈeɪʃənz/", translation: "应对航空器起火及紧急疏散的综合预案",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "comprehensive" }, { word: "contingency" }, { word: "plans" }, { word: "addressing" }, { word: "aircraft" }, { word: "fires" }, { word: "and" }, { word: "emergency" }, { word: "evacuations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "应急演练", text: "contingency plan (应急预案), emergency evacuation (紧急疏散)" }
      ]
    },
    {
      id: "q_airport_s136",
      chinese: "持有效签证的旅客仍需接受边境官员的入境目的审查",
      english_full: "Travelers with valid visas are still subject to scrutiny regarding their purpose of entry by border officials.",
      words: [
        { word: "Travelers" }, { word: "with" }, { word: "valid" }, { word: "visas" }, { word: "are" }, { word: "still" }, { word: "subject" }, { word: "to" }, { word: "scrutiny" }, { word: "regarding" }, { word: "their" }, { word: "purpose" }, { word: "of" }, { word: "entry" }, { word: "by" }, { word: "border" }, { word: "officials", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈtrævələrz/ /wɪð/ /ˈvælɪd/ /ˈviːzəz/", translation: "持有效签证的旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Travelers" }, { word: "with" }, { word: "valid" }, { word: "visas" }] }]
        },
        {
          start: 4, end: 5, label: "系动词+状语", phonetic: "/ɑːr/ /stɪl/", translation: "仍",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "still" }] }]
        },
        {
          start: 6, end: 13, label: "表语", phonetic: "/ˈsʌbdʒɪkt/ /tuː/ /ˈskruːtɪni/ /rɪˈɡɑːrdɪŋ/ /ðɛər/ /ˈpɜːrpəs/ /ɒv/ /ˈɛntri/", translation: "需接受入境目的审查",
          subComponents: [{ startIndex: 0, words: [{ word: "subject" }, { word: "to" }, { word: "scrutiny" }, { word: "regarding" }, { word: "their" }, { word: "purpose" }, { word: "of" }, { word: "entry" }] }]
        },
        {
          start: 14, end: 16, label: "施事状语", phonetic: "/baɪ/ /ˈbɔːrdər/ /əˈfɪʃəlz/", translation: "由边境官员",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "border" }, { word: "officials", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "边境审查", text: "be subject to scrutiny (接受审查), purpose of entry (入境目的)" }
      ]
    },
    {
      id: "q_airport_s137",
      chinese: "飞机维修工程师在签署放行文件前必须完成全部法定检查项目",
      english_full: "Aircraft maintenance engineers must complete all mandatory inspection items before signing the release documentation.",
      words: [
        { word: "Aircraft" }, { word: "maintenance" }, { word: "engineers" }, { word: "must" }, { word: "complete" }, { word: "all" }, { word: "mandatory" }, { word: "inspection" }, { word: "items" }, { word: "before" }, { word: "signing" }, { word: "the" }, { word: "release" }, { word: "documentation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɛərkræft/ /ˈmeɪntənəns/ /ˌɛndʒɪˈnɪərz/", translation: "飞机维修工程师",
          subComponents: [{ startIndex: 0, words: [{ word: "Aircraft" }, { word: "maintenance" }, { word: "engineers" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/mʌst/ /kəmˈpliːt/", translation: "必须完成",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "complete" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ɔːl/ /ˈmændətɔːri/ /ɪnˈspɛkʃən/ /ˈaɪtəmz/", translation: "全部法定检查项目",
          subComponents: [{ startIndex: 0, words: [{ word: "all" }, { word: "mandatory" }, { word: "inspection" }, { word: "items" }] }]
        },
        {
          start: 9, end: 13, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ˈsaɪnɪŋ/ /ðə/ /rɪˈliːs/ /ˌdɒkjəmɛnˈteɪʃən/", translation: "在签署放行文件前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "signing" }, { word: "the" }, { word: "release" }, { word: "documentation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "维修放行", text: "mandatory inspection (法定检查), release documentation (放行文件)" }
      ]
    },
    {
      id: "q_airport_s138",
      chinese: "机场商业区租金收入已成为非航空业务的重要利润来源",
      english_full: "Commercial zone rental income has emerged as a significant profit source for non-aeronautical operations.",
      words: [
        { word: "Commercial" }, { word: "zone" }, { word: "rental" }, { word: "income" }, { word: "has" }, { word: "emerged" }, { word: "as" }, { word: "a" }, { word: "significant" }, { word: "profit" }, { word: "source" }, { word: "for" }, { word: "non-aeronautical" }, { word: "operations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/kəˈmɜːrʃəl/ /zoʊn/ /ˈrɛntəl/ /ˈɪnkʌm/", translation: "机场商业区租金收入",
          subComponents: [{ startIndex: 0, words: [{ word: "Commercial" }, { word: "zone" }, { word: "rental" }, { word: "income" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /ɪˈmɜːrdʒd/", translation: "已成为",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "emerged" }] }]
        },
        {
          start: 6, end: 10, label: "表语", phonetic: "/æz/ /ə/ /sɪɡˈnɪfɪkənt/ /ˈprɒfɪt/ /sɔːrs/", translation: "重要利润来源",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "a" }, { word: "significant" }, { word: "profit" }, { word: "source" }] }]
        },
        {
          start: 11, end: 13, label: "对象状语", phonetic: "/fɔːr/ /ˌnɒn-ˌɛərəˈnɒtɪkəl/ /ˌɒpəˈreɪʃənz/", translation: "非航空业务",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "non-aeronautical" }, { word: "operations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "机场经济", text: "non-aeronautical revenue (非航空收入), commercial zone (商业区)" }
      ]
    },
    {
      id: "q_airport_s139",
      chinese: "旅客误机后如需改签，可能须支付票价差额及手续费",
      english_full: "Passengers who miss their flights may incur fare differences and processing fees when requesting rebooking.",
      words: [
        { word: "Passengers" }, { word: "who" }, { word: "miss" }, { word: "their" }, { word: "flights" }, { word: "may" }, { word: "incur" }, { word: "fare" }, { word: "differences" }, { word: "and" }, { word: "processing" }, { word: "fees" }, { word: "when" }, { word: "requesting" }, { word: "rebooking", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语(含定语从句)", phonetic: "/ˈpæsəndʒərz/ /huː/ /mɪs/ /ðɛər/ /flaɪts/", translation: "误机的旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Passengers" }, { word: "who" }, { word: "miss" }, { word: "their" }, { word: "flights" }] }]
        },
        {
          start: 5, end: 6, label: "谓语", phonetic: "/meɪ/ /ɪnˈkɜːr/", translation: "可能须支付",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "incur" }] }]
        },
        {
          start: 7, end: 11, label: "宾语", phonetic: "/fɛər/ /ˈdɪfərənsɪz/ /ænd/ /ˈprɒsɛsɪŋ/ /fiːz/", translation: "票价差额及手续费",
          subComponents: [{ startIndex: 0, words: [{ word: "fare" }, { word: "differences" }, { word: "and" }, { word: "processing" }, { word: "fees" }] }]
        },
        {
          start: 12, end: 14, label: "时间状语", phonetic: "/wɛn/ /rɪˈkwɛstɪŋ/ /riːˈbʊkɪŋ/", translation: "申请改签时",
          subComponents: [{ startIndex: 0, words: [{ word: "when" }, { word: "requesting" }, { word: "rebooking", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "改签规则", text: "incur fees (产生费用), fare difference (票价差额)" }
      ]
    },
    {
      id: "q_airport_s140",
      chinese: "空管系统升级后将显著增强对低空空域无人机活动的监控能力",
      english_full: "The upgraded air traffic management system will significantly enhance monitoring capabilities for unmanned aerial activity in low-altitude airspace.",
      words: [
        { word: "The" }, { word: "upgraded" }, { word: "air" }, { word: "traffic" }, { word: "management" }, { word: "system" }, { word: "will" }, { word: "significantly" }, { word: "enhance" }, { word: "monitoring" }, { word: "capabilities" }, { word: "for" }, { word: "unmanned" }, { word: "aerial" }, { word: "activity" }, { word: "in" }, { word: "low-altitude" }, { word: "airspace", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˈʌpɡreɪdɪd/ /ɛr/ /ˈtræfɪk/ /ˈmænɪdʒmənt/ /ˈsɪstəm/", translation: "升级后的空管系统",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "upgraded" }, { word: "air" }, { word: "traffic" }, { word: "management" }, { word: "system" }] }]
        },
        {
          start: 6, end: 8, label: "谓语", phonetic: "/wɪl/ /ˌsɪɡnɪfɪkəntli/ /ɪnˈhæns/", translation: "将显著增强",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "significantly" }, { word: "enhance" }] }]
        },
        {
          start: 9, end: 10, label: "宾语", phonetic: "/ˈmɒnɪtərɪŋ/ /ˌkeɪpəˈbɪlɪtiz/", translation: "监控能力",
          subComponents: [{ startIndex: 0, words: [{ word: "monitoring" }, { word: "capabilities" }] }]
        },
        {
          start: 11, end: 17, label: "对象状语", phonetic: "/fɔːr/ /ʌnˈmænd/ /ˈɛəriəl/ /ækˈtɪvɪti/ /ɪn/ /loʊ-ˈæltɪtjuːd/ /ˈɛərspɛɪs/", translation: "对低空空域无人机活动",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "unmanned" }, { word: "aerial" }, { word: "activity" }, { word: "in" }, { word: "low-altitude" }, { word: "airspace", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "空域管理", text: "unmanned aerial activity (无人机活动), low-altitude airspace (低空空域)" }
      ]
    },
    {
      id: "q_airport_s141",
      chinese: "国际航班旅客须确保其护照有效期覆盖整个行程并留有充足空白页",
      english_full: "International passengers must ensure their passports remain valid for the entire journey with sufficient blank pages.",
      words: [
        { word: "International" }, { word: "passengers" }, { word: "must" }, { word: "ensure" }, { word: "their" }, { word: "passports" }, { word: "remain" }, { word: "valid" }, { word: "for" }, { word: "the" }, { word: "entire" }, { word: "journey" }, { word: "with" }, { word: "sufficient" }, { word: "blank" }, { word: "pages", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɪntərˈnæʃənəl/ /ˈpæsəndʒərz/", translation: "国际航班旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "International" }, { word: "passengers" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/mʌst/ /ɪnˈʃʊər/", translation: "须确保",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "ensure" }] }]
        },
        {
          start: 4, end: 15, label: "宾语从句", phonetic: "/ðɛər/ /ˈpæspɔːrts/ /rɪˈmeɪn/ /ˈvælɪd/ /fɔːr/ /ðə/ /ɪnˈtaɪər/ /ˈdʒɜːrni/ /wɪð/ /səˈfɪʃənt/ /blæŋk/ /peɪdʒɪz/", translation: "护照有效期覆盖整个行程并留有充足空白页",
          subComponents: [{ startIndex: 0, words: [{ word: "their" }, { word: "passports" }, { word: "remain" }, { word: "valid" }, { word: "for" }, { word: "the" }, { word: "entire" }, { word: "journey" }, { word: "with" }, { word: "sufficient" }, { word: "blank" }, { word: "pages", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "证件要求", text: "blank pages (空白页), remain valid (保持有效)" }
      ]
    },
    {
      id: "q_airport_s142",
      chinese: "跑道关闭期间，所有进港航班将被引导至备用机场降落",
      english_full: "During runway closure, all inbound flights will be diverted to alternate airports for landing.",
      words: [
        { word: "During" }, { word: "runway" }, { word: "closure", punctuation: "," }, { word: "all" }, { word: "inbound" }, { word: "flights" }, { word: "will" }, { word: "be" }, { word: "diverted" }, { word: "to" }, { word: "alternate" }, { word: "airports" }, { word: "for" }, { word: "landing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˈrʌnweɪ/ /ˈkloʊʒər/", translation: "跑道关闭期间",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "runway" }, { word: "closure", punctuation: "," }] }]
        },
        {
          start: 3, end: 5, label: "主语", phonetic: "/ɔːl/ /ˈɪnbaʊnd/ /flaɪts/", translation: "所有进港航班",
          subComponents: [{ startIndex: 0, words: [{ word: "all" }, { word: "inbound" }, { word: "flights" }] }]
        },
        {
          start: 6, end: 8, label: "谓语(被动)", phonetic: "/wɪl/ /bi/ /daɪˈvɜːrtɪd/", translation: "将被引导",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "diverted" }] }]
        },
        {
          start: 9, end: 13, label: "状语", phonetic: "/tuː/ /ˈɔːltərnət/ /ˈɛərpɔːrts/ /fɔːr/ /ˈlændɪŋ/", translation: "至备用机场降落",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "alternate" }, { word: "airports" }, { word: "for" }, { word: "landing", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "备降程序", text: "runway closure (跑道关闭), alternate airport (备用机场)" }
      ]
    },
    {
      id: "q_airport_s143",
      chinese: "机场地面服务合同通常涵盖行李装卸、客梯对接及清水排污等环节",
      english_full: "Airport ground handling contracts typically cover baggage loading, passenger stair docking, and potable water servicing.",
      words: [
        { word: "Airport" }, { word: "ground" }, { word: "handling" }, { word: "contracts" }, { word: "typically" }, { word: "cover" }, { word: "baggage" }, { word: "loading", punctuation: "," }, { word: "passenger" }, { word: "stair" }, { word: "docking", punctuation: "," }, { word: "and" }, { word: "potable" }, { word: "water" }, { word: "servicing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈɛərpɔːrt/ /graʊnd/ /ˈhændlɪŋ/ /ˈkɒntrækts/", translation: "机场地面服务合同",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "ground" }, { word: "handling" }, { word: "contracts" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈkʌvər/", translation: "涵盖",
          subComponents: [{ startIndex: 0, words: [{ word: "cover" }] }]
        },
        {
          start: 6, end: 14, label: "宾语", phonetic: "/ˈbægɪdʒ/ /ˈloʊdɪŋ/ /ˈpæsəndʒər/ /stɛər/ /ˈdɒkɪŋ/ /ænd/ /ˈpoʊtəbəl/ /ˈwɔːtər/ /ˈsɜːrvɪsɪŋ/", translation: "行李装卸、客梯对接及清水排污",
          subComponents: [{ startIndex: 0, words: [{ word: "baggage" }, { word: "loading", punctuation: "," }, { word: "passenger" }, { word: "stair" }, { word: "docking", punctuation: "," }, { word: "and" }, { word: "potable" }, { word: "water" }, { word: "servicing", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "地面服务", text: "ground handling contract (地面服务合同), potable water servicing (清水服务)" }
      ]
    },
    {
      id: "q_airport_s144",
      chinese: "航空公司常旅客计划为高频出行者提供优先登机及额外行李额度的权益",
      english_full: "Frequent flyer programs grant elite travelers priority boarding privileges and additional baggage allowances.",
      words: [
        { word: "Frequent" }, { word: "flyer" }, { word: "programs" }, { word: "grant" }, { word: "elite" }, { word: "travelers" }, { word: "priority" }, { word: "boarding" }, { word: "privileges" }, { word: "and" }, { word: "additional" }, { word: "baggage" }, { word: "allowances", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈfriːkwənt/ /ˈflaɪər/ /ˈproʊɡræmz/", translation: "常旅客计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Frequent" }, { word: "flyer" }, { word: "programs" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɡrænt/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "grant" }] }]
        },
        {
          start: 4, end: 5, label: "间接宾语", phonetic: "/ɪˈliːt/ /ˈtrævələrz/", translation: "高频出行者",
          subComponents: [{ startIndex: 0, words: [{ word: "elite" }, { word: "travelers" }] }]
        },
        {
          start: 6, end: 12, label: "直接宾语", phonetic: "/praɪˈɒrɪti/ /ˈbɔːrdɪŋ/ /ˈprɪvɪlɪdʒɪz/ /ænd/ /əˈdɪʃənəl/ /ˈbægɪdʒ/ /əˈlaʊənsɪz/", translation: "优先登机及额外行李额度权益",
          subComponents: [{ startIndex: 0, words: [{ word: "priority" }, { word: "boarding" }, { word: "privileges" }, { word: "and" }, { word: "additional" }, { word: "baggage" }, { word: "allowances", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "常旅客计划", text: "frequent flyer program (常旅客计划), baggage allowance (行李额度)" }
      ]
    },
    {
      id: "q_airport_s145",
      chinese: "机坪调度员负责协调廊桥、摆渡车与行李车之间的运行顺序",
      english_full: "Ramp coordinators are responsible for orchestrating the operational sequence among jet bridges, shuttle buses, and baggage carts.",
      words: [
        { word: "Ramp" }, { word: "coordinators" }, { word: "are" }, { word: "responsible" }, { word: "for" }, { word: "orchestrating" }, { word: "the" }, { word: "operational" }, { word: "sequence" }, { word: "among" }, { word: "jet" }, { word: "bridges", punctuation: "," }, { word: "shuttle" }, { word: "buses", punctuation: "," }, { word: "and" }, { word: "baggage" }, { word: "carts", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ræmp/ /koʊˈɔːrdɪneɪtərz/", translation: "机坪调度员",
          subComponents: [{ startIndex: 0, words: [{ word: "Ramp" }, { word: "coordinators" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ɑːr/ /rɪˈspɒnsəbəl/", translation: "负责",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "responsible" }] }]
        },
        {
          start: 4, end: 16, label: "介词宾语", phonetic: "/fɔːr/ /ˈɔːrkɪstreɪtɪŋ/ /ðə/ /ˌɒpəˈreɪʃənəl/ /ˈsiːkwəns/ /əˈmʌŋ/ /dʒɛt/ /brɪdʒɪz/ /ˈʃʌtəl/ /ˈbʌsɪz/ /ænd/ /ˈbægɪdʒ/ /kɑːrts/", translation: "协调廊桥、摆渡车与行李车的运行顺序",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "orchestrating" }, { word: "the" }, { word: "operational" }, { word: "sequence" }, { word: "among" }, { word: "jet" }, { word: "bridges", punctuation: "," }, { word: "shuttle" }, { word: "buses", punctuation: "," }, { word: "and" }, { word: "baggage" }, { word: "carts", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "机坪运行", text: "ramp coordinator (机坪调度员), operational sequence (运行顺序)" }
      ]
    },
    {
      id: "q_airport_s146",
      chinese: "若托运行李未能同机抵达，旅客可向航空公司申请临时必需品补偿",
      english_full: "If checked baggage fails to arrive on the same flight, passengers may claim compensation for essential items from the airline.",
      words: [
        { word: "If" }, { word: "checked" }, { word: "baggage" }, { word: "fails" }, { word: "to" }, { word: "arrive" }, { word: "on" }, { word: "the" }, { word: "same" }, { word: "flight", punctuation: "," }, { word: "passengers" }, { word: "may" }, { word: "claim" }, { word: "compensation" }, { word: "for" }, { word: "essential" }, { word: "items" }, { word: "from" }, { word: "the" }, { word: "airline", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 9, label: "条件从句", phonetic: "/ɪf/ /tʃɛkt/ /ˈbægɪdʒ/ /feɪlz/ /tuː/ /əˈraɪv/ /ɒn/ /ðə/ /seɪm/ /flaɪt/", translation: "若托运行李未能同机抵达",
          subComponents: [{ startIndex: 0, words: [{ word: "If" }, { word: "checked" }, { word: "baggage" }, { word: "fails" }, { word: "to" }, { word: "arrive" }, { word: "on" }, { word: "the" }, { word: "same" }, { word: "flight", punctuation: "," }] }]
        },
        {
          start: 10, end: 10, label: "主语", phonetic: "/ˈpæsəndʒərz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "passengers" }] }]
        },
        {
          start: 11, end: 12, label: "谓语", phonetic: "/meɪ/ /kleɪm/", translation: "可申请",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "claim" }] }]
        },
        {
          start: 13, end: 19, label: "宾语", phonetic: "/ˌkɒmpɛnˈseɪʃən/ /fɔːr/ /ɪˈsɛnʃəl/ /ˈaɪtəmz/ /frɒm/ /ðə/ /ˈɛərlaɪn/", translation: "向航空公司申请临时必需品补偿",
          subComponents: [{ startIndex: 0, words: [{ word: "compensation" }, { word: "for" }, { word: "essential" }, { word: "items" }, { word: "from" }, { word: "the" }, { word: "airline", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行李延误", text: "checked baggage (托运行李), essential items compensation (必需品补偿)" }
      ]
    },
    {
      id: "q_airport_s147",
      chinese: "机场运行控制中心实时监控各登机口的旅客流量与登机进度",
      english_full: "The airport operations control center monitors passenger flow and boarding progress at each gate in real time.",
      words: [
        { word: "The" }, { word: "airport" }, { word: "operations" }, { word: "control" }, { word: "center" }, { word: "monitors" }, { word: "passenger" }, { word: "flow" }, { word: "and" }, { word: "boarding" }, { word: "progress" }, { word: "at" }, { word: "each" }, { word: "gate" }, { word: "in" }, { word: "real" }, { word: "time", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈɛərpɔːrt/ /ˌɒpəˈreɪʃənz/ /kənˈtroʊl/ /ˈsɛntər/", translation: "机场运行控制中心",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "airport" }, { word: "operations" }, { word: "control" }, { word: "center" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈmɒnɪtərz/", translation: "监控",
          subComponents: [{ startIndex: 0, words: [{ word: "monitors" }] }]
        },
        {
          start: 6, end: 10, label: "宾语", phonetic: "/ˈpæsəndʒər/ /floʊ/ /ænd/ /ˈbɔːrdɪŋ/ /ˈprɒɡrɛs/", translation: "旅客流量与登机进度",
          subComponents: [{ startIndex: 0, words: [{ word: "passenger" }, { word: "flow" }, { word: "and" }, { word: "boarding" }, { word: "progress" }] }]
        },
        {
          start: 11, end: 16, label: "状语", phonetic: "/æt/ /iːtʃ/ /ɡeɪt/ /ɪn/ /ˌriːl/ /taɪm/", translation: "在各登机口实时",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "each" }, { word: "gate" }, { word: "in" }, { word: "real" }, { word: "time", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运行监控", text: "operations control center (运行控制中心), boarding progress (登机进度)" }
      ]
    },
    {
      id: "q_airport_s148",
      chinese: "跨境旅客应提前了解目的地国家对携带现金及贵金属的申报要求",
      english_full: "Cross-border travelers should familiarize themselves with destination countries' declaration requirements for cash and precious metals.",
      words: [
        { word: "Cross-border" }, { word: "travelers" }, { word: "should" }, { word: "familiarize" }, { word: "themselves" }, { word: "with" }, { word: "destination" }, { word: "countries'" }, { word: "declaration" }, { word: "requirements" }, { word: "for" }, { word: "cash" }, { word: "and" }, { word: "precious" }, { word: "metals", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/krɒs-ˈbɔːrdər/ /ˈtrævələrz/", translation: "跨境旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Cross-border" }, { word: "travelers" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ʃʊd/ /fəˈmɪliəraɪz/", translation: "应了解",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "familiarize" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ðəmˈsɛlvz/", translation: "自身",
          subComponents: [{ startIndex: 0, words: [{ word: "themselves" }] }]
        },
        {
          start: 5, end: 14, label: "介词宾语", phonetic: "/wɪð/ /ˌdɛstɪˈneɪʃən/ /ˈkʌntriz/ /ˌdɛkləˈreɪʃən/ /rɪˈkwaɪərmənts/ /fɔːr/ /kæʃ/ /ænd/ /ˈprɛʃəs/ /ˈmɛtəlz/", translation: "目的地国家对现金及贵金属的申报要求",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "destination" }, { word: "countries'" }, { word: "declaration" }, { word: "requirements" }, { word: "for" }, { word: "cash" }, { word: "and" }, { word: "precious" }, { word: "metals", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "海关申报", text: "declaration requirement (申报要求), precious metals (贵金属)" }
      ]
    },
    {
      id: "q_airport_s149",
      chinese: "飞行员报告引擎异常后，管制员立即清空了受影响跑道的空域",
      english_full: "After the pilot reported engine anomalies, controllers immediately cleared the airspace over the affected runway.",
      words: [
        { word: "After" }, { word: "the" }, { word: "pilot" }, { word: "reported" }, { word: "engine" }, { word: "anomalies", punctuation: "," }, { word: "controllers" }, { word: "immediately" }, { word: "cleared" }, { word: "the" }, { word: "airspace" }, { word: "over" }, { word: "the" }, { word: "affected" }, { word: "runway", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/ˈæftər/ /ðə/ /ˈpaɪlət/ /rɪˈpɔːrtɪd/ /ˈɛndʒɪn/ /əˈnɒməliz/", translation: "飞行员报告引擎异常后",
          subComponents: [{ startIndex: 0, words: [{ word: "After" }, { word: "the" }, { word: "pilot" }, { word: "reported" }, { word: "engine" }, { word: "anomalies", punctuation: "," }] }]
        },
        {
          start: 6, end: 6, label: "主语", phonetic: "/kənˈtroʊlərz/", translation: "管制员",
          subComponents: [{ startIndex: 0, words: [{ word: "controllers" }] }]
        },
        {
          start: 7, end: 7, label: "状语", phonetic: "/ɪˈmiːdiətli/", translation: "立即",
          subComponents: [{ startIndex: 0, words: [{ word: "immediately" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/klɪərd/", translation: "清空",
          subComponents: [{ startIndex: 0, words: [{ word: "cleared" }] }]
        },
        {
          start: 9, end: 14, label: "宾语", phonetic: "/ðə/ /ˈɛərspɛɪs/ /ˈoʊvər/ /ðə/ /əˈfɛktɪd/ /ˈrʌnweɪ/", translation: "受影响跑道上空域",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "airspace" }, { word: "over" }, { word: "the" }, { word: "affected" }, { word: "runway", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "应急处置", text: "engine anomaly (引擎异常), clear airspace (清空空域)" }
      ]
    },
    {
      id: "q_airport_s150",
      chinese: "自助值机终端支持旅客打印登机牌并预选偏好座位",
      english_full: "Self-service check-in kiosks enable passengers to print boarding passes and preselect preferred seats.",
      words: [
        { word: "Self-service" }, { word: "check-in" }, { word: "kiosks" }, { word: "enable" }, { word: "passengers" }, { word: "to" }, { word: "print" }, { word: "boarding" }, { word: "passes" }, { word: "and" }, { word: "preselect" }, { word: "preferred" }, { word: "seats", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/sɛlf-ˈsɜːrvɪs/ /ˈtʃɛk-ɪn/ /ˈkiːɒsks/", translation: "自助值机终端",
          subComponents: [{ startIndex: 0, words: [{ word: "Self-service" }, { word: "check-in" }, { word: "kiosks" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "支持",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈpæsəndʒərz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "passengers" }] }]
        },
        {
          start: 5, end: 12, label: "宾补", phonetic: "/tuː/ /prɪnt/ /ˈbɔːrdɪŋ/ /pæsɪz/ /ænd/ /ˌpriːsɪˈlɛkt/ /prɪˈfɜːrd/ /siːts/", translation: "打印登机牌并预选偏好座位",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "print" }, { word: "boarding" }, { word: "passes" }, { word: "and" }, { word: "preselect" }, { word: "preferred" }, { word: "seats", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "自助服务", text: "check-in kiosk (值机终端), preselect seats (预选座位)" }
      ]
    },
    {
      id: "q_airport_s151",
      chinese: "航空安保条例禁止旅客将打火机和尖锐物品放入随身行李",
      english_full: "Aviation security regulations prohibit passengers from placing lighters and sharp objects in carry-on baggage.",
      words: [
        { word: "Aviation" }, { word: "security" }, { word: "regulations" }, { word: "prohibit" }, { word: "passengers" }, { word: "from" }, { word: "placing" }, { word: "lighters" }, { word: "and" }, { word: "sharp" }, { word: "objects" }, { word: "in" }, { word: "carry-on" }, { word: "baggage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌeɪviˈeɪʃən/ /sɪˈkjʊərɪti/ /ˌrɛɡjəˈleɪʃənz/", translation: "航空安保条例",
          subComponents: [{ startIndex: 0, words: [{ word: "Aviation" }, { word: "security" }, { word: "regulations" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈhɪbɪt/", translation: "禁止",
          subComponents: [{ startIndex: 0, words: [{ word: "prohibit" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈpæsəndʒərz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "passengers" }] }]
        },
        {
          start: 5, end: 13, label: "宾补", phonetic: "/frɒm/ /ˈpleɪsɪŋ/ /ˈlaɪtərz/ /ænd/ /ʃɑːrp/ /ˈɒbdʒɪkts/ /ɪn/ /ˈkæri-ɒn/ /ˈbægɪdʒ/", translation: "将打火机及尖锐物品放入随身行李",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "placing" }, { word: "lighters" }, { word: "and" }, { word: "sharp" }, { word: "objects" }, { word: "in" }, { word: "carry-on" }, { word: "baggage", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "安检禁限", text: "carry-on baggage (随身行李), sharp objects (尖锐物品)" }
      ]
    },
    {
      id: "q_airport_s152",
      chinese: "长途航班上，乘务员会定期提供饮水并提醒旅客活动肢体以预防血栓",
      english_full: "On long-haul flights, cabin crew periodically provide hydration and remind passengers to move limbs to prevent thrombosis.",
      words: [
        { word: "On" }, { word: "long-haul" }, { word: "flights", punctuation: "," }, { word: "cabin" }, { word: "crew" }, { word: "periodically" }, { word: "provide" }, { word: "hydration" }, { word: "and" }, { word: "remind" }, { word: "passengers" }, { word: "to" }, { word: "move" }, { word: "limbs" }, { word: "to" }, { word: "prevent" }, { word: "thrombosis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "地点状语", phonetic: "/ɒn/ /lɒŋ-hɔːl/ /flaɪts/", translation: "在长途航班上",
          subComponents: [{ startIndex: 0, words: [{ word: "On" }, { word: "long-haul" }, { word: "flights", punctuation: "," }] }]
        },
        {
          start: 3, end: 4, label: "主语", phonetic: "/ˈkæbɪn/ /kruː/", translation: "乘务员",
          subComponents: [{ startIndex: 0, words: [{ word: "cabin" }, { word: "crew" }] }]
        },
        {
          start: 5, end: 5, label: "状语", phonetic: "/pɪəriˈɒdɪkli/", translation: "定期",
          subComponents: [{ startIndex: 0, words: [{ word: "periodically" }] }]
        },
        {
          start: 6, end: 16, label: "谓语(并列)", phonetic: "/prəˈvaɪd/ /haɪˈdreɪʃən/ /ænd/ /rɪˈmaɪnd/ /ˈpæsəndʒərz/ /tuː/ /muːv/ /lɪmz/ /tuː/ /prɪˈvɛnt/ /θrɒmˈboʊsɪs/", translation: "提供饮水并提醒旅客活动肢体以预防血栓",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }, { word: "hydration" }, { word: "and" }, { word: "remind" }, { word: "passengers" }, { word: "to" }, { word: "move" }, { word: "limbs" }, { word: "to" }, { word: "prevent" }, { word: "thrombosis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客舱健康", text: "long-haul flight (长途航班), deep vein thrombosis prevention (血栓预防)" }
      ]
    },
    {
      id: "q_airport_s153",
      chinese: "机场出租车调度区对非法揽客行为实施零容忍的执法政策",
      english_full: "Airport taxi dispatch zones enforce a zero-tolerance policy against unauthorized solicitation of passengers.",
      words: [
        { word: "Airport" }, { word: "taxi" }, { word: "dispatch" }, { word: "zones" }, { word: "enforce" }, { word: "a" }, { word: "zero-tolerance" }, { word: "policy" }, { word: "against" }, { word: "unauthorized" }, { word: "solicitation" }, { word: "of" }, { word: "passengers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈɛərpɔːrt/ /ˈtæksi/ /dɪˈspætʃ/ /zoʊnz/", translation: "机场出租车调度区",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "taxi" }, { word: "dispatch" }, { word: "zones" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪnˈfɔːrs/", translation: "实施",
          subComponents: [{ startIndex: 0, words: [{ word: "enforce" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ə/ /ˈzɪroʊ-ˈtɒlərəns/ /ˈpɒlɪsi/", translation: "零容忍政策",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "zero-tolerance" }, { word: "policy" }] }]
        },
        {
          start: 8, end: 12, label: "对象状语", phonetic: "/əˈɡɛnst/ /ʌnˈɔːθəraɪzd/ /ˌsɒlɪsɪˈteɪʃən/ /ɒv/ /ˈpæsəndʒərz/", translation: "针对非法揽客行为",
          subComponents: [{ startIndex: 0, words: [{ word: "against" }, { word: "unauthorized" }, { word: "solicitation" }, { word: "of" }, { word: "passengers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "地面秩序", text: "zero-tolerance policy (零容忍政策), unauthorized solicitation (非法揽客)" }
      ]
    },
    {
      id: "q_airport_s154",
      chinese: "航班配载人员需精确计算重心位置以确保飞机起飞时的稳定性",
      english_full: "Load controllers must precisely calculate center-of-gravity positions to ensure aircraft stability during takeoff.",
      words: [
        { word: "Load" }, { word: "controllers" }, { word: "must" }, { word: "precisely" }, { word: "calculate" }, { word: "center-of-gravity" }, { word: "positions" }, { word: "to" }, { word: "ensure" }, { word: "aircraft" }, { word: "stability" }, { word: "during" }, { word: "takeoff", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/loʊd/ /kənˈtroʊlərz/", translation: "航班配载人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Load" }, { word: "controllers" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/mʌst/ /prɪˈsaɪsli/ /ˈkælkjəleɪt/", translation: "需精确计算",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "precisely" }, { word: "calculate" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈsɛntər-ɒv-ˈɡrævɪti/ /pəˈzɪʃənz/", translation: "重心位置",
          subComponents: [{ startIndex: 0, words: [{ word: "center-of-gravity" }, { word: "positions" }] }]
        },
        {
          start: 7, end: 12, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˈɛərkræft/ /stəˈbɪlɪti/ /ˈdjʊərɪŋ/ /ˈteɪkɒf/", translation: "以确保起飞时飞机稳定性",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "aircraft" }, { word: "stability" }, { word: "during" }, { word: "takeoff", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "配载专业", text: "center of gravity (重心), load controller (配载人员)" }
      ]
    },
    {
      id: "q_airport_s155",
      chinese: "过境免签旅客仍须持有前往第三国的有效联程机票方可入境",
      english_full: "Visa-free transit passengers must still hold valid onward tickets to a third country to be admitted entry.",
      words: [
        { word: "Visa-free" }, { word: "transit" }, { word: "passengers" }, { word: "must" }, { word: "still" }, { word: "hold" }, { word: "valid" }, { word: "onward" }, { word: "tickets" }, { word: "to" }, { word: "a" }, { word: "third" }, { word: "country" }, { word: "to" }, { word: "be" }, { word: "admitted" }, { word: "entry", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈviːzə-friː/ /ˈtrænsɪt/ /ˈpæsəndʒərz/", translation: "过境免签旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Visa-free" }, { word: "transit" }, { word: "passengers" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/mʌst/ /stɪl/ /hoʊld/", translation: "仍须持有",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "still" }, { word: "hold" }] }]
        },
        {
          start: 6, end: 12, label: "宾语", phonetic: "/ˈvælɪd/ /ˈɒnwərd/ /ˈtɪkɪts/ /tuː/ /ə/ /θɜːrd/ /ˈkʌntri/", translation: "前往第三国的有效联程机票",
          subComponents: [{ startIndex: 0, words: [{ word: "valid" }, { word: "onward" }, { word: "tickets" }, { word: "to" }, { word: "a" }, { word: "third" }, { word: "country" }] }]
        },
        {
          start: 13, end: 16, label: "目的状语", phonetic: "/tuː/ /bi/ /ədˈmɪtɪd/ /ˈɛntri/", translation: "方可获准入境",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "be" }, { word: "admitted" }, { word: "entry", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "过境政策", text: "visa-free transit (过境免签), onward ticket (联程机票)" }
      ]
    },
    {
      id: "q_airport_s156",
      chinese: "机场噪音监测站持续记录各航迹下的分贝水平以供环保评估",
      english_full: "Airport noise monitoring stations continuously record decibel levels along flight paths for environmental assessment.",
      words: [
        { word: "Airport" }, { word: "noise" }, { word: "monitoring" }, { word: "stations" }, { word: "continuously" }, { word: "record" }, { word: "decibel" }, { word: "levels" }, { word: "along" }, { word: "flight" }, { word: "paths" }, { word: "for" }, { word: "environmental" }, { word: "assessment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈɛərpɔːrt/ /nɔɪz/ /ˈmɒnɪtərɪŋ/ /ˈsteɪʃənz/", translation: "机场噪音监测站",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "noise" }, { word: "monitoring" }, { word: "stations" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/kənˈtɪnjuəsli/", translation: "持续",
          subComponents: [{ startIndex: 0, words: [{ word: "continuously" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/rɪˈkɔːrd/", translation: "记录",
          subComponents: [{ startIndex: 0, words: [{ word: "record" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈdɛsɪbəl/ /ˈlɛvəlz/", translation: "分贝水平",
          subComponents: [{ startIndex: 0, words: [{ word: "decibel" }, { word: "levels" }] }]
        },
        {
          start: 8, end: 13, label: "状语", phonetic: "/əˈlɒŋ/ /flaɪt/ /pæθs/ /fɔːr/ /ɪnˌvaɪrənˈmɛntl/ /əˈsɛsmənt/", translation: "沿各航迹以供环保评估",
          subComponents: [{ startIndex: 0, words: [{ word: "along" }, { word: "flight" }, { word: "paths" }, { word: "for" }, { word: "environmental" }, { word: "assessment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "环境监测", text: "decibel level (分贝水平), environmental assessment (环境评估)" }
      ]
    },
    {
      id: "q_airport_s157",
      chinese: "因机械原因返航的航班在滑回机位后须接受全面技术检查",
      english_full: "Flights returning due to mechanical issues must undergo comprehensive technical inspections after taxiing back to the gate.",
      words: [
        { word: "Flights" }, { word: "returning" }, { word: "due" }, { word: "to" }, { word: "mechanical" }, { word: "issues" }, { word: "must" }, { word: "undergo" }, { word: "comprehensive" }, { word: "technical" }, { word: "inspections" }, { word: "after" }, { word: "taxiing" }, { word: "back" }, { word: "to" }, { word: "the" }, { word: "gate", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/flaɪts/ /rɪˈtɜːrnɪŋ/ /djuː/ /tuː/ /mɪˈkænɪkəl/ /ˈɪʃuːz/", translation: "因机械原因返航的航班",
          subComponents: [{ startIndex: 0, words: [{ word: "Flights" }, { word: "returning" }, { word: "due" }, { word: "to" }, { word: "mechanical" }, { word: "issues" }] }]
        },
        {
          start: 6, end: 7, label: "谓语", phonetic: "/mʌst/ /ˌʌndərˈɡoʊ/", translation: "须接受",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "undergo" }] }]
        },
        {
          start: 8, end: 10, label: "宾语", phonetic: "/ˌkɒmprɪˈhɛnsɪv/ /ˈtɛknɪkəl/ /ɪnˈspɛkʃənz/", translation: "全面技术检查",
          subComponents: [{ startIndex: 0, words: [{ word: "comprehensive" }, { word: "technical" }, { word: "inspections" }] }]
        },
        {
          start: 11, end: 16, label: "时间状语", phonetic: "/ˈæftər/ /ˈtæksiɪŋ/ /bæk/ /tuː/ /ðə/ /ɡeɪt/", translation: "滑回机位后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "taxiing" }, { word: "back" }, { word: "to" }, { word: "the" }, { word: "gate", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "返航处置", text: "return due to mechanical issues (机械原因返航), technical inspection (技术检查)" }
      ]
    },
    {
      id: "q_airport_s158",
      chinese: "国际出发大厅的货币兑换柜台通常提供主要外币的实时汇率",
      english_full: "Currency exchange counters in international departure halls typically offer real-time rates for major foreign currencies.",
      words: [
        { word: "Currency" }, { word: "exchange" }, { word: "counters" }, { word: "in" }, { word: "international" }, { word: "departure" }, { word: "halls" }, { word: "typically" }, { word: "offer" }, { word: "real-time" }, { word: "rates" }, { word: "for" }, { word: "major" }, { word: "foreign" }, { word: "currencies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkʌrənsi/ /ɪksˈtʃeɪndʒ/ /ˈkaʊntərz/", translation: "货币兑换柜台",
          subComponents: [{ startIndex: 0, words: [{ word: "Currency" }, { word: "exchange" }, { word: "counters" }] }]
        },
        {
          start: 3, end: 6, label: "地点状语", phonetic: "/ɪn/ /ˌɪntərˈnæʃənəl/ /dɪˈpɑːrtʃər/ /hɔːlz/", translation: "在国际出发大厅",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "international" }, { word: "departure" }, { word: "halls" }] }]
        },
        {
          start: 7, end: 7, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offer" }] }]
        },
        {
          start: 9, end: 14, label: "宾语", phonetic: "/ˌriːl-ˈtaɪm/ /reɪts/ /fɔːr/ /ˈmeɪdʒər/ /ˈfɒrɪn/ /ˈkʌrənsiz/", translation: "主要外币的实时汇率",
          subComponents: [{ startIndex: 0, words: [{ word: "real-time" }, { word: "rates" }, { word: "for" }, { word: "major" }, { word: "foreign" }, { word: "currencies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "机场服务", text: "currency exchange (货币兑换), real-time rate (实时汇率)" }
      ]
    },
    {
      id: "q_airport_s159",
      chinese: "空管语音通信系统要求管制员与飞行员使用标准术语以避免误解",
      english_full: "Air traffic voice communication systems require controllers and pilots to use standardized phraseology to prevent misunderstandings.",
      words: [
        { word: "Air" }, { word: "traffic" }, { word: "voice" }, { word: "communication" }, { word: "systems" }, { word: "require" }, { word: "controllers" }, { word: "and" }, { word: "pilots" }, { word: "to" }, { word: "use" }, { word: "standardized" }, { word: "phraseology" }, { word: "to" }, { word: "prevent" }, { word: "misunderstandings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ɛr/ /ˈtræfɪk/ /vɔɪs/ /kəˌmjuːnɪˈkeɪʃən/ /ˈsɪstəmz/", translation: "空管语音通信系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Air" }, { word: "traffic" }, { word: "voice" }, { word: "communication" }, { word: "systems" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/kənˈtroʊlərz/ /ænd/ /ˈpaɪləts/", translation: "管制员与飞行员",
          subComponents: [{ startIndex: 0, words: [{ word: "controllers" }, { word: "and" }, { word: "pilots" }] }]
        },
        {
          start: 9, end: 12, label: "宾补", phonetic: "/tuː/ /juːz/ /ˈstændədaɪzd/ /fəˈrɒlədʒi/", translation: "使用标准术语",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "use" }, { word: "standardized" }, { word: "phraseology" }] }]
        },
        {
          start: 13, end: 15, label: "目的状语", phonetic: "/tuː/ /prɪˈvɛnt/ /ˌmɪsʌndərˈstændɪŋz/", translation: "以避免误解",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "prevent" }, { word: "misunderstandings", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "通信标准", text: "standardized phraseology (标准术语), voice communication (语音通信)" }
      ]
    },
    {
      id: "q_airport_s160",
      chinese: "机场无障碍设施包括专用柜台、盲道标识及轮椅协助服务",
      english_full: "Airport accessibility facilities include dedicated counters, tactile guidance paths, and wheelchair assistance services.",
      words: [
        { word: "Airport" }, { word: "accessibility" }, { word: "facilities" }, { word: "include" }, { word: "dedicated" }, { word: "counters", punctuation: "," }, { word: "tactile" }, { word: "guidance" }, { word: "paths", punctuation: "," }, { word: "and" }, { word: "wheelchair" }, { word: "assistance" }, { word: "services", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɛərpɔːrt/ /əkˌsɛsəˈbɪlɪti/ /fəˈsɪlɪtiz/", translation: "机场无障碍设施",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "accessibility" }, { word: "facilities" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈkluːd/", translation: "包括",
          subComponents: [{ startIndex: 0, words: [{ word: "include" }] }]
        },
        {
          start: 4, end: 12, label: "宾语", phonetic: "/ˈdɛdɪkeɪtɪd/ /ˈkaʊntərz/ /ˈtæktaɪl/ /ˈɡaɪdns/ /pæθs/ /ænd/ /ˈwiːltʃɛər/ /əˈsɪstəns/ /ˈsɜːrvɪsɪz/", translation: "专用柜台、盲道标识及轮椅协助服务",
          subComponents: [{ startIndex: 0, words: [{ word: "dedicated" }, { word: "counters", punctuation: "," }, { word: "tactile" }, { word: "guidance" }, { word: "paths", punctuation: "," }, { word: "and" }, { word: "wheelchair" }, { word: "assistance" }, { word: "services", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "无障碍服务", text: "accessibility facilities (无障碍设施), tactile guidance path (盲道标识)" }
      ]
    },
    {
      id: "q_airport_s161",
      chinese: "雷雨天气下，地面人员须暂停露天加油及行李装卸作业",
      english_full: "During thunderstorms, ground personnel must suspend open-air refueling and baggage handling operations.",
      words: [
        { word: "During" }, { word: "thunderstorms", punctuation: "," }, { word: "ground" }, { word: "personnel" }, { word: "must" }, { word: "suspend" }, { word: "open-air" }, { word: "refueling" }, { word: "and" }, { word: "baggage" }, { word: "handling" }, { word: "operations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˈθʌndərstɔːrmz/", translation: "雷雨天气下",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "thunderstorms", punctuation: "," }] }]
        },
        {
          start: 2, end: 3, label: "主语", phonetic: "/graʊnd/ /ˌpɜːrsəˈnɛl/", translation: "地面人员",
          subComponents: [{ startIndex: 0, words: [{ word: "ground" }, { word: "personnel" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/mʌst/ /səˈspɛnd/", translation: "须暂停",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "suspend" }] }]
        },
        {
          start: 6, end: 11, label: "宾语", phonetic: "/ˈoʊpən-ɛr/ /riːˈfjuːəlɪŋ/ /ænd/ /ˈbægɪdʒ/ /ˈhændlɪŋ/ /ˌɒpəˈreɪʃənz/", translation: "露天加油及行李装卸作业",
          subComponents: [{ startIndex: 0, words: [{ word: "open-air" }, { word: "refueling" }, { word: "and" }, { word: "baggage" }, { word: "handling" }, { word: "operations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "天气限制", text: "open-air refueling (露天加油), baggage handling (行李装卸)" }
      ]
    },
    {
      id: "q_airport_s162",
      chinese: "旅客可在行李提取大厅的服务台报告行李损坏并填写索赔表格",
      english_full: "Passengers may report damaged baggage and complete claim forms at the service desk in the baggage reclaim hall.",
      words: [
        { word: "Passengers" }, { word: "may" }, { word: "report" }, { word: "damaged" }, { word: "baggage" }, { word: "and" }, { word: "complete" }, { word: "claim" }, { word: "forms" }, { word: "at" }, { word: "the" }, { word: "service" }, { word: "desk" }, { word: "in" }, { word: "the" }, { word: "baggage" }, { word: "reclaim" }, { word: "hall", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈpæsəndʒərz/", translation: "旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Passengers" }] }]
        },
        {
          start: 1, end: 2, label: "谓语1", phonetic: "/meɪ/ /rɪˈpɔːrt/", translation: "可报告",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "report" }] }]
        },
        {
          start: 3, end: 4, label: "宾语1", phonetic: "/ˈdæmɪdʒd/ /ˈbægɪdʒ/", translation: "损坏行李",
          subComponents: [{ startIndex: 0, words: [{ word: "damaged" }, { word: "baggage" }] }]
        },
        {
          start: 5, end: 8, label: "并列谓语", phonetic: "/ænd/ /kəmˈpliːt/ /kleɪm/ /fɔːrmz/", translation: "并填写索赔表格",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "complete" }, { word: "claim" }, { word: "forms" }] }]
        },
        {
          start: 9, end: 17, label: "地点状语", phonetic: "/æt/ /ðə/ /ˈsɜːrvɪs/ /dɛsk/ /ɪn/ /ðə/ /ˈbægɪdʒ/ /rɪˈkleɪm/ /hɔːl/", translation: "在行李提取大厅服务台",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "the" }, { word: "service" }, { word: "desk" }, { word: "in" }, { word: "the" }, { word: "baggage" }, { word: "reclaim" }, { word: "hall", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行李索赔", text: "baggage reclaim hall (行李提取大厅), claim form (索赔表格)" }
      ]
    },
    {
      id: "q_airport_s163",
      chinese: "机场能源管理系统通过智能照明与空调调控降低航站楼运营成本",
      english_full: "Airport energy management systems reduce terminal operating costs through intelligent lighting and climate control.",
      words: [
        { word: "Airport" }, { word: "energy" }, { word: "management" }, { word: "systems" }, { word: "reduce" }, { word: "terminal" }, { word: "operating" }, { word: "costs" }, { word: "through" }, { word: "intelligent" }, { word: "lighting" }, { word: "and" }, { word: "climate" }, { word: "control", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈɛərpɔːrt/ /ˈɛnərdʒi/ /ˈmænɪdʒmənt/ /ˈsɪstəmz/", translation: "机场能源管理系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "energy" }, { word: "management" }, { word: "systems" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈdjuːs/", translation: "降低",
          subComponents: [{ startIndex: 0, words: [{ word: "reduce" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ˈtɜːrmɪnəl/ /ˈɒpəreɪtɪŋ/ /kɒsts/", translation: "航站楼运营成本",
          subComponents: [{ startIndex: 0, words: [{ word: "terminal" }, { word: "operating" }, { word: "costs" }] }]
        },
        {
          start: 8, end: 13, label: "方式状语", phonetic: "/θruː/ /ɪnˈtɛlɪdʒənt/ /ˈlaɪtɪŋ/ /ænd/ /ˈklaɪmət/ /kənˈtroʊl/", translation: "通过智能照明与空调调控",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "intelligent" }, { word: "lighting" }, { word: "and" }, { word: "climate" }, { word: "control", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "绿色机场", text: "energy management system (能源管理系统), climate control (空调调控)" }
      ]
    },
    {
      id: "q_airport_s164",
      chinese: "持婴儿票的旅客通常可优先登机并携带折叠式婴儿车",
      english_full: "Passengers traveling with infant tickets are typically permitted priority boarding and may bring collapsible strollers.",
      words: [
        { word: "Passengers" }, { word: "traveling" }, { word: "with" }, { word: "infant" }, { word: "tickets" }, { word: "are" }, { word: "typically" }, { word: "permitted" }, { word: "priority" }, { word: "boarding" }, { word: "and" }, { word: "may" }, { word: "bring" }, { word: "collapsible" }, { word: "strollers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ˈpæsəndʒərz/ /ˈtrævəlɪŋ/ /wɪð/ /ˈɪnfənt/ /ˈtɪkɪts/", translation: "持婴儿票的旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "Passengers" }, { word: "traveling" }, { word: "with" }, { word: "infant" }, { word: "tickets" }] }]
        },
        {
          start: 5, end: 7, label: "谓语1", phonetic: "/ɑːr/ /ˈtɪpɪkli/ /pərˈmɪtɪd/", translation: "通常可获准",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "typically" }, { word: "permitted" }] }]
        },
        {
          start: 8, end: 9, label: "宾语1", phonetic: "/praɪˈɒrɪti/ /ˈbɔːrdɪŋ/", translation: "优先登机",
          subComponents: [{ startIndex: 0, words: [{ word: "priority" }, { word: "boarding" }] }]
        },
        {
          start: 10, end: 14, label: "并列谓语", phonetic: "/ænd/ /meɪ/ /brɪŋ/ /kəˈlæpsəbəl/ /ˈstruːlərz/", translation: "并可携带折叠婴儿车",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "may" }, { word: "bring" }, { word: "collapsible" }, { word: "strollers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "亲子出行", text: "infant ticket (婴儿票), collapsible stroller (折叠婴儿车)" }
      ]
    },
    {
      id: "q_airport_s165",
      chinese: "航班延误超过三小时时，欧盟法规要求航空公司向旅客提供餐食与通信便利",
      english_full: "When flight delays exceed three hours, EU regulations require airlines to provide meals and communication facilities to passengers.",
      words: [
        { word: "When" }, { word: "flight" }, { word: "delays" }, { word: "exceed" }, { word: "three" }, { word: "hours", punctuation: "," }, { word: "EU" }, { word: "regulations" }, { word: "require" }, { word: "airlines" }, { word: "to" }, { word: "provide" }, { word: "meals" }, { word: "and" }, { word: "communication" }, { word: "facilities" }, { word: "to" }, { word: "passengers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间从句", phonetic: "/wɛn/ /flaɪt/ /dɪˈleɪz/ /ɪkˈsiːd/ /θriː/ /aʊərz/", translation: "航班延误超过三小时时",
          subComponents: [{ startIndex: 0, words: [{ word: "When" }, { word: "flight" }, { word: "delays" }, { word: "exceed" }, { word: "three" }, { word: "hours", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/iː-juː/ /ˌrɛɡjəˈleɪʃənz/", translation: "欧盟法规",
          subComponents: [{ startIndex: 0, words: [{ word: "EU" }, { word: "regulations" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 9, end: 9, label: "宾语", phonetic: "/ˈɛərlaɪnz/", translation: "航空公司",
          subComponents: [{ startIndex: 0, words: [{ word: "airlines" }] }]
        },
        {
          start: 10, end: 17, label: "宾补", phonetic: "/tuː/ /prəˈvaɪd/ /miːlz/ /ænd/ /kəˌmjuːnɪˈkeɪʃən/ /fəˈsɪlɪtiz/ /tuː/ /ˈpæsəndʒərz/", translation: "向旅客提供餐食与通信便利",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "provide" }, { word: "meals" }, { word: "and" }, { word: "communication" }, { word: "facilities" }, { word: "to" }, { word: "passengers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "旅客权益", text: "EU passenger rights (欧盟旅客权益), communication facilities (通信便利)" }
      ]
    },
    {
      id: "q_airport_s166",
      chinese: "机场海关缉私犬经过训练后可嗅探行李中隐藏的违禁药物",
      english_full: "Airport customs detection dogs, once trained, can sniff out concealed narcotics within passenger baggage.",
      words: [
        { word: "Airport" }, { word: "customs" }, { word: "detection" }, { word: "dogs", punctuation: "," }, { word: "once" }, { word: "trained", punctuation: "," }, { word: "can" }, { word: "sniff" }, { word: "out" }, { word: "concealed" }, { word: "narcotics" }, { word: "within" }, { word: "passenger" }, { word: "baggage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈɛərpɔːrt/ /ˈkʌstəmz/ /dɪˈtɛkʃən/ /dɒɡz/", translation: "机场海关缉私犬",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "customs" }, { word: "detection" }, { word: "dogs", punctuation: "," }] }]
        },
        {
          start: 4, end: 5, label: "插入语", phonetic: "/wʌns/ /treɪnd/", translation: "经训练后",
          subComponents: [{ startIndex: 0, words: [{ word: "once" }, { word: "trained", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "谓语", phonetic: "/kæn/ /snɪf/", translation: "可嗅探",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "sniff" }] }]
        },
        {
          start: 8, end: 13, label: "宾语", phonetic: "/aʊt/ /kənˈsiːld/ /nɑːrˈkɒtɪks/ /wɪˈðɪn/ /ˈpæsəndʒər/ /ˈbægɪdʒ/", translation: "行李中隐藏的违禁药物",
          subComponents: [{ startIndex: 0, words: [{ word: "out" }, { word: "concealed" }, { word: "narcotics" }, { word: "within" }, { word: "passenger" }, { word: "baggage", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "缉私执法", text: "detection dog (缉私犬), concealed narcotics (隐藏违禁药物)" }
      ]
    },
    {
      id: "q_airport_s167",
      chinese: "飞行员在巡航高度收到气象雷达图像后可提前规避危险雷暴区域",
      english_full: "Upon receiving weather radar imagery at cruising altitude, pilots can proactively avoid hazardous thunderstorm cells.",
      words: [
        { word: "Upon" }, { word: "receiving" }, { word: "weather" }, { word: "radar" }, { word: "imagery" }, { word: "at" }, { word: "cruising" }, { word: "altitude", punctuation: "," }, { word: "pilots" }, { word: "can" }, { word: "proactively" }, { word: "avoid" }, { word: "hazardous" }, { word: "thunderstorm" }, { word: "cells", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "时间状语", phonetic: "/əˈpɒn/ /rɪˈsiːvɪŋ/ /ˈwɛðər/ /ˈreɪdɑːr/ /ˈɪmɪdʒri/ /æt/ /ˈkruːzɪŋ/ /ˈæltɪtjuːd/", translation: "在巡航高度收到气象雷达图像后",
          subComponents: [{ startIndex: 0, words: [{ word: "Upon" }, { word: "receiving" }, { word: "weather" }, { word: "radar" }, { word: "imagery" }, { word: "at" }, { word: "cruising" }, { word: "altitude", punctuation: "," }] }]
        },
        {
          start: 8, end: 8, label: "主语", phonetic: "/ˈpaɪləts/", translation: "飞行员",
          subComponents: [{ startIndex: 0, words: [{ word: "pilots" }] }]
        },
        {
          start: 9, end: 14, label: "谓语+宾语", phonetic: "/kæn/ /proʊˈæktɪvli/ /əˈvɔɪd/ /ˈhæzərdəs/ /ˈθʌndərstɔːrm/ /sɛlz/", translation: "可提前规避危险雷暴区域",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "proactively" }, { word: "avoid" }, { word: "hazardous" }, { word: "thunderstorm" }, { word: "cells", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "航空气象", text: "weather radar imagery (气象雷达图像), thunderstorm cell (雷暴单体)" }
      ]
    },
    {
      id: "q_airport_s168",
      chinese: "航站楼标识系统采用多语种导向牌帮助国际旅客快速找到登机口",
      english_full: "Terminal signage systems employ multilingual wayfinding panels to help international passengers locate boarding gates quickly.",
      words: [
        { word: "Terminal" }, { word: "signage" }, { word: "systems" }, { word: "employ" }, { word: "multilingual" }, { word: "wayfinding" }, { word: "panels" }, { word: "to" }, { word: "help" }, { word: "international" }, { word: "passengers" }, { word: "locate" }, { word: "boarding" }, { word: "gates" }, { word: "quickly", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈtɜːrmɪnəl/ /ˈsaɪnɪdʒ/ /ˈsɪstəmz/", translation: "航站楼标识系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Terminal" }, { word: "signage" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪmˈplɔɪ/", translation: "采用",
          subComponents: [{ startIndex: 0, words: [{ word: "employ" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˌmʌltiˈlɪŋɡwəl/ /ˈweɪfaɪndɪŋ/ /ˈpænəlz/", translation: "多语种导向牌",
          subComponents: [{ startIndex: 0, words: [{ word: "multilingual" }, { word: "wayfinding" }, { word: "panels" }] }]
        },
        {
          start: 7, end: 14, label: "目的状语", phonetic: "/tuː/ /hɛlp/ /ˌɪntərˈnæʃənəl/ /ˈpæsəndʒərz/ /loʊˈkeɪt/ /ˈbɔːrdɪŋ/ /ɡeɪts/ /ˈkwɪkli/", translation: "帮助国际旅客快速找到登机口",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "help" }, { word: "international" }, { word: "passengers" }, { word: "locate" }, { word: "boarding" }, { word: "gates" }, { word: "quickly", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "导向系统", text: "wayfinding panel (导向牌), terminal signage (航站楼标识)" }
      ]
    },
    {
      id: "q_airport_s169",
      chinese: "随着可持续航空燃料逐步推广，多家机场已开始建设专用加注基础设施",
      english_full: "As sustainable aviation fuel gains traction, several airports have begun constructing dedicated refueling infrastructure.",
      words: [
        { word: "As" }, { word: "sustainable" }, { word: "aviation" }, { word: "fuel" }, { word: "gains" }, { word: "traction", punctuation: "," }, { word: "several" }, { word: "airports" }, { word: "have" }, { word: "begun" }, { word: "constructing" }, { word: "dedicated" }, { word: "refueling" }, { word: "infrastructure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/æz/ /səˈsteɪnəbəl/ /ˌeɪviˈeɪʃən/ /fjuːl/ /ɡeɪnz/ /ˈtrækʃən/", translation: "随着可持续航空燃料逐步推广",
          subComponents: [{ startIndex: 0, words: [{ word: "As" }, { word: "sustainable" }, { word: "aviation" }, { word: "fuel" }, { word: "gains" }, { word: "traction", punctuation: "," }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ˈsɛvrəl/ /ˈɛərpɔːrts/", translation: "多家机场",
          subComponents: [{ startIndex: 0, words: [{ word: "several" }, { word: "airports" }] }]
        },
        {
          start: 8, end: 9, label: "谓语(现完)", phonetic: "/hæv/ /bɪˈɡʌn/", translation: "已开始",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "begun" }] }]
        },
        {
          start: 10, end: 13, label: "宾语", phonetic: "/kənˈstrʌktɪŋ/ /ˈdɛdɪkeɪtɪd/ /riːˈfjuːəlɪŋ/ /ˈɪnfrəstrʌktʃər/", translation: "建设专用加注基础设施",
          subComponents: [{ startIndex: 0, words: [{ word: "constructing" }, { word: "dedicated" }, { word: "refueling" }, { word: "infrastructure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "绿色航空", text: "sustainable aviation fuel (可持续航空燃料), refueling infrastructure (加注基础设施)" }
      ]
    }
  ]
};
