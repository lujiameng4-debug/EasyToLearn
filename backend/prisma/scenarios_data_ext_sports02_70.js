export const extensions = {
  "sports_02": [
    {
      id: "q_sports02_s100",
      chinese: "在加时赛的最后几秒，那位控球后卫投进了一个压哨三分球",
      english_full: "In the final seconds of overtime, the point guard hit a buzzer-beating three-pointer.",
      words: [
        { word: "In" }, { word: "the" }, { word: "final" }, { word: "seconds" }, { word: "of" }, { word: "overtime," }, { word: "the" }, { word: "point" }, { word: "guard" }, { word: "hit" }, { word: "a" }, { word: "buzzer-beating" }, { word: "three-pointer", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ˈfaɪnəl/ /ˈsɛkəndz/ /ɒv/ /ˈoʊvərˌtaɪm/", translation: "在加时赛的最后几秒",
          subComponents: [{ startIndex: 0, words: [{ word: "In" }, { word: "the" }, { word: "final" }, { word: "seconds" }, { word: "of" }, { word: "overtime," }] }]
        },
        {
          start: 6, end: 8, label: "主语", phonetic: "/ðə/ /pɔɪnt/ /gɑːrd/", translation: "那位控球后卫",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "point" }, { word: "guard" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/hɪt/", translation: "投进了",
          subComponents: [{ startIndex: 0, words: [{ word: "hit" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ə/ /ˈbʌzər-ˌbiːtɪŋ/ /ˈθriːˌpɔɪntər/", translation: "一个压哨三分球",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "buzzer-beating" }, { word: "three-pointer", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球词汇", text: "overtime (加时赛), point guard (控球后卫), buzzer-beating (压哨的), three-pointer (三分球)" }
      ]
    },
    {
      id: "q_sports02_s101",
      chinese: "中场球员在对方半场内因一次鲁莽的铲球被直接出示红牌罚下",
      english_full: "The midfielder was shown a straight red card for committing a reckless tackle inside the opponent's half.",
      words: [
        { word: "The" }, { word: "midfielder" }, { word: "was" }, { word: "shown" }, { word: "a" }, { word: "straight" }, { word: "red" }, { word: "card" }, { word: "for" }, { word: "committing" }, { word: "a" }, { word: "reckless" }, { word: "tackle" }, { word: "inside" }, { word: "the" }, { word: "opponent's" }, { word: "half", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmɪdfiːldər/", translation: "这位中场球员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "midfielder" }] }]
        },
        {
          start: 2, end: 7, label: "谓语(被动)+保留宾语", phonetic: "/wɒz/ /ʃoʊn/ /ə/ /streɪt/ /rɛd/ /kɑːrd/", translation: "被直接出示红牌",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "shown" }, { word: "a" }, { word: "straight" }, { word: "red" }, { word: "card" }] }]
        },
        {
          start: 8, end: 12, label: "原因状语", phonetic: "/fɔːr/ /kəˈmɪtɪŋ/ /ə/ /ˈrɛkləs/ /ˈtækəl/", translation: "因一次鲁莽的铲球",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "committing" }, { word: "a" }, { word: "reckless" }, { word: "tackle" }] }]
        },
        {
          start: 13, end: 16, label: "地点状语", phonetic: "/ɪnˈsaɪd/ /ði/ /əˈpoʊnənts/ /hæf/", translation: "在对方半场内",
          subComponents: [{ startIndex: 0, words: [{ word: "inside" }, { word: "the" }, { word: "opponent's" }, { word: "half", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球规则", text: "midfielder (中场), straight red card (直接红牌), reckless tackle (鲁莽铲球), opponent's half (对方半场)" }
      ]
    },
    {
      id: "q_sports02_s102",
      chinese: "随着比赛进入令人神经紧绷的加时赛，球队的防线开始显露出疲态",
      english_full: "As the match proceeded into nerve-wracking extra time, the team's defensive line began to show signs of fatigue.",
      words: [
        { word: "As" }, { word: "the" }, { word: "match" }, { word: "proceeded" }, { word: "into" }, { word: "nerve-wracking" }, { word: "extra" }, { word: "time," }, { word: "the" }, { word: "team's" }, { word: "defensive" }, { word: "line" }, { word: "began" }, { word: "to" }, { word: "show" }, { word: "signs" }, { word: "of" }, { word: "fatigue", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "时间状语从句", phonetic: "/æz/ /ðə/ /mætʃ/ /prəˈsiːdɪd/ /ˈɪntuː/ /ˈnɜːrvˌrækɪŋ/ /ˈɛkstrə/ /taɪm/", translation: "随着比赛进入令人神经紧绷的加时赛",
          subComponents: [{ startIndex: 0, words: [{ word: "As" }, { word: "the" }, { word: "match" }, { word: "proceeded" }, { word: "into" }, { word: "nerve-wracking" }, { word: "extra" }, { word: "time," }] }]
        },
        {
          start: 8, end: 11, label: "主语", phonetic: "/ðə/ /tiːmz/ /dɪˈfɛnsɪv/ /laɪn/", translation: "球队防线",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "team's" }, { word: "defensive" }, { word: "line" }] }]
        },
        {
          start: 12, end: 12, label: "谓语", phonetic: "/bɪˈɡæn/", translation: "开始",
          subComponents: [{ startIndex: 0, words: [{ word: "began" }] }]
        },
        {
          start: 13, end: 17, label: "宾语", phonetic: "/tuː/ /ʃoʊ/ /saɪnz/ /ɒv/ /fəˈtiːɡ/", translation: "显露出疲态",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "show" }, { word: "signs" }, { word: "of" }, { word: "fatigue", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球态势", text: "nerve-wracking (令人神经紧绷的), extra time (加时赛), defensive line (防线), signs of fatigue (疲态)" }
      ]
    },
    {
      id: "q_sports02_s103",
      chinese: "执行无懈可击的挡拆战术需要两名进攻球员之间具备极高的默契",
      english_full: "Executing a flawless pick-and-roll play demands tremendous chemistry between the two offensive players.",
      words: [
        { word: "Executing" }, { word: "a" }, { word: "flawless" }, { word: "pick-and-roll" }, { word: "play" }, { word: "demands" }, { word: "tremendous" }, { word: "chemistry" }, { word: "between" }, { word: "the" }, { word: "two" }, { word: "offensive" }, { word: "players", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语(动名词短语)", phonetic: "/ˈɛksɪˌkjuːtɪŋ/ /ə/ /ˈflɔːləs/ /pɪk-ænd-roʊl/ /pleɪ/", translation: "执行无懈可击的挡拆战术",
          subComponents: [{ startIndex: 0, words: [{ word: "Executing" }, { word: "a" }, { word: "flawless" }, { word: "pick-and-roll" }, { word: "play" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/dɪˈmændz/", translation: "需要",
          subComponents: [{ startIndex: 0, words: [{ word: "demands" }] }]
        },
        {
          start: 6, end: 12, label: "宾语", phonetic: "/trɪˈmɛndəs/ /ˈkɛmɪstri/ /bɪˈtwiːn/ /ðə/ /tuː/ /əˈfɛnsɪv/ /ˈpleɪərz/", translation: "两名进攻球员之间极高的默契",
          subComponents: [{ startIndex: 0, words: [{ word: "tremendous" }, { word: "chemistry" }, { word: "between" }, { word: "the" }, { word: "two" }, { word: "offensive" }, { word: "players", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球战术", text: "pick-and-roll (挡拆), flawless (无懈可击的), chemistry (默契/化学反应), offensive player (进攻球员)" }
      ]
    },
    {
      id: "q_sports02_s104",
      chinese: "为穿透对方顽固的区域联防，中场球员组织了一连串精准的快速传球",
      english_full: "To penetrate the stubborn zone defense, the midfielders orchestrated a sequence of precise, rapid passes.",
      words: [
        { word: "To" }, { word: "penetrate" }, { word: "the" }, { word: "stubborn" }, { word: "zone" }, { word: "defense," }, { word: "the" }, { word: "midfielders" }, { word: "orchestrated" }, { word: "a" }, { word: "sequence" }, { word: "of" }, { word: "precise," }, { word: "rapid" }, { word: "passes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "目的状语", phonetic: "/tuː/ /ˈpɛnɪˌtreɪt/ /ðə/ /ˈstʌbərn/ /zoʊn/ /dɪˈfɛns/", translation: "为穿透对方顽固的区域联防",
          subComponents: [{ startIndex: 0, words: [{ word: "To" }, { word: "penetrate" }, { word: "the" }, { word: "stubborn" }, { word: "zone" }, { word: "defense," }] }]
        },
        {
          start: 6, end: 7, label: "主语", phonetic: "/ðə/ /ˈmɪdˌfiːldərz/", translation: "中场球员",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "midfielders" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/ˈɔːrkɪˌstreɪtɪd/", translation: "组织",
          subComponents: [{ startIndex: 0, words: [{ word: "orchestrated" }] }]
        },
        {
          start: 9, end: 14, label: "宾语", phonetic: "/ə/ /ˈsiːkwəns/ /ɒv/ /prɪˈsaɪs/ /ˈræpɪd/ /ˈpæsɪz/", translation: "一连串精准的快速传球",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "sequence" }, { word: "of" }, { word: "precise," }, { word: "rapid" }, { word: "passes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球/篮球攻防", text: "penetrate (穿透), zone defense (区域联防), orchestrate (组织), sequence of passes (连续传球)" }
      ]
    },
    {
      id: "q_sports02_s105",
      chinese: "棒球经理通过换上专业救援投手应对第九局的高压局面，展现了战略智慧",
      english_full: "The baseball manager showed strategic brilliance by bringing in a specialized relief pitcher for the high-pressure ninth inning.",
      words: [
        { word: "The" }, { word: "baseball" }, { word: "manager" }, { word: "showed" }, { word: "strategic" }, { word: "brilliance" }, { word: "by" }, { word: "bringing" }, { word: "in" }, { word: "a" }, { word: "specialized" }, { word: "relief" }, { word: "pitcher" }, { word: "for" }, { word: "the" }, { word: "high-pressure" }, { word: "ninth" }, { word: "inning", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈbeɪsbɔːl/ /ˈmænɪdʒər/", translation: "棒球经理",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "baseball" }, { word: "manager" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ʃoʊd/", translation: "展现",
          subComponents: [{ startIndex: 0, words: [{ word: "showed" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/strəˈtiːdʒɪk/ /ˈbrɪliəns/", translation: "战略智慧",
          subComponents: [{ startIndex: 0, words: [{ word: "strategic" }, { word: "brilliance" }] }]
        },
        {
          start: 6, end: 17, label: "方式状语", phonetic: "/baɪ/ /ˈbrɪŋɪŋ/ /ɪn/ /ə/ /ˈspɛʃəˌlaɪzd/ /rɪˈliːf/ /ˈpɪtʃər/ /fɔːr/ /ðə/ /haɪ-ˈprɛʃər/ /naɪnθ/ /ˈɪnɪŋ/", translation: "通过换上救援投手应对第九局高压局面",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "bringing" }, { word: "in" }, { word: "a" }, { word: "specialized" }, { word: "relief" }, { word: "pitcher" }, { word: "for" }, { word: "the" }, { word: "high-pressure" }, { word: "ninth" }, { word: "inning", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球策略", text: "relief pitcher (救援投手), ninth inning (第九局), strategic brilliance (战略智慧), high-pressure (高压的)" }
      ]
    },
    {
      id: "q_sports02_s106",
      chinese: "持续的倾盆大雨使网球场面变得极其湿滑，比赛被无限期暂停",
      english_full: "The match was indefinitely suspended as the relentless downpour rendered the tennis court surface hazardously slippery.",
      words: [
        { word: "The" }, { word: "match" }, { word: "was" }, { word: "indefinitely" }, { word: "suspended" }, { word: "as" }, { word: "the" }, { word: "relentless" }, { word: "downpour" }, { word: "rendered" }, { word: "the" }, { word: "tennis" }, { word: "court" }, { word: "surface" }, { word: "hazardously" }, { word: "slippery", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /mætʃ/", translation: "比赛",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "match" }] }]
        },
        {
          start: 2, end: 4, label: "主句谓语(被动)", phonetic: "/wɒz/ /ɪnˈdɛfɪnɪtli/ /səˈspɛndɪd/", translation: "被无限期暂停",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "indefinitely" }, { word: "suspended" }] }]
        },
        {
          start: 5, end: 15, label: "原因状语从句", phonetic: "/æz/ /ðə/ /rɪˈlɛntləs/ /ˈdaʊnˌpɔːr/ /ˈrɛndərd/ /ðə/ /ˈtɛnɪs/ /kɔːrt/ /ˈsɜːrfɪs/ /ˈhæzərdəsli/ /ˈslɪpəri/", translation: "因倾盆大雨使网球场面变得极其湿滑",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "the" }, { word: "relentless" }, { word: "downpour" }, { word: "rendered" }, { word: "the" }, { word: "tennis" }, { word: "court" }, { word: "surface" }, { word: "hazardously" }, { word: "slippery", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "赛事管理", text: "indefinitely suspended (无限期暂停), relentless downpour (持续倾盆大雨), hazardously slippery (危险地湿滑)" }
      ]
    },
    {
      id: "q_sports02_s107",
      chinese: "扣杀排球时产生巨大爆发力依赖于完美的时机把握和核心力量",
      english_full: "Generating explosive power when spiking a volleyball relies on impeccable timing and core strength.",
      words: [
        { word: "Generating" }, { word: "explosive" }, { word: "power" }, { word: "when" }, { word: "spiking" }, { word: "a" }, { word: "volleyball" }, { word: "relies" }, { word: "on" }, { word: "impeccable" }, { word: "timing" }, { word: "and" }, { word: "core" }, { word: "strength", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语(动名词短语)", phonetic: "/ˈdʒɛnəˌreɪtɪŋ/ /ɪkˈsploʊsɪv/ /ˈpaʊər/ /wɛn/ /ˈspaɪkɪŋ/ /ə/ /ˈvɒliˌbɔːl/", translation: "扣杀排球时产生巨大爆发力",
          subComponents: [{ startIndex: 0, words: [{ word: "Generating" }, { word: "explosive" }, { word: "power" }, { word: "when" }, { word: "spiking" }, { word: "a" }, { word: "volleyball" }] }]
        },
        {
          start: 7, end: 8, label: "谓语+介词", phonetic: "/rɪˈlaɪz/ /ɒn/", translation: "依赖于",
          subComponents: [{ startIndex: 0, words: [{ word: "relies" }, { word: "on" }] }]
        },
        {
          start: 9, end: 13, label: "宾语", phonetic: "/ɪmˈpɛkəbəl/ /ˈtaɪmɪŋ/ /ænd/ /kɔːr/ /strɛŋθ/", translation: "完美时机把握和核心力量",
          subComponents: [{ startIndex: 0, words: [{ word: "impeccable" }, { word: "timing" }, { word: "and" }, { word: "core" }, { word: "strength", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "排球技术", text: "explosive power (爆发力), spike (扣球), impeccable timing (完美时机), core strength (核心力量)" }
      ]
    },
    {
      id: "q_sports02_s108",
      chinese: "裁判在补时阶段的争议判罚判给主队点球，剥夺了客队的胜利",
      english_full: "The referee's controversial penalty call in stoppage time deprived the visiting team of their victory.",
      words: [
        { word: "The" }, { word: "referee's" }, { word: "controversial" }, { word: "penalty" }, { word: "call" }, { word: "in" }, { word: "stoppage" }, { word: "time" }, { word: "deprived" }, { word: "the" }, { word: "visiting" }, { word: "team" }, { word: "of" }, { word: "their" }, { word: "victory", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "主语", phonetic: "/ðə/ /ˌrɛfəˈriːz/ /ˌkɒntrəˈvɜːrʃəl/ /ˈpɛnəlti/ /kɔːl/ /ɪn/ /ˈstɒpɪdʒ/ /taɪm/", translation: "裁判在补时阶段的争议点球判罚",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "referee's" }, { word: "controversial" }, { word: "penalty" }, { word: "call" }, { word: "in" }, { word: "stoppage" }, { word: "time" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/dɪˈpraɪvd/", translation: "剥夺",
          subComponents: [{ startIndex: 0, words: [{ word: "deprived" }] }]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ðə/ /ˈvɪzɪtɪŋ/ /tiːm/", translation: "客队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "visiting" }, { word: "team" }] }]
        },
        {
          start: 12, end: 14, label: "状语(固定搭配)", phonetic: "/ɒv/ /ðɛər/ /ˈvɪktəri/", translation: "他们的胜利",
          subComponents: [{ startIndex: 0, words: [{ word: "of" }, { word: "their" }, { word: "victory", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球判罚", text: "penalty call (点球判罚), stoppage time (补时), deprive sb of sth (剥夺), visiting team (客队)" }
      ]
    },
    {
      id: "q_sports02_s109",
      chinese: "主攻手在网前以一记势大力沉的扣球终结了这次多回合的拉锯",
      english_full: "The outside hitter terminated the extended rally with a powerful spike at the net.",
      words: [
        { word: "The" }, { word: "outside" }, { word: "hitter" }, { word: "terminated" }, { word: "the" }, { word: "extended" }, { word: "rally" }, { word: "with" }, { word: "a" }, { word: "powerful" }, { word: "spike" }, { word: "at" }, { word: "the" }, { word: "net", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌaʊtˈsaɪd/ /ˈhɪtər/", translation: "主攻手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "outside" }, { word: "hitter" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈtɜːrmɪneɪtɪd/", translation: "终结",
          subComponents: [{ startIndex: 0, words: [{ word: "terminated" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /ɪkˈstɛndɪd/ /ˈræli/", translation: "这次多回合的拉锯",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "extended" }, { word: "rally" }] }]
        },
        {
          start: 7, end: 13, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈpaʊərfəl/ /spaɪk/ /æt/ /ðə/ /nɛt/", translation: "在网前以一记势大力沉的扣球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "powerful" }, { word: "spike" }, { word: "at" }, { word: "the" }, { word: "net", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "排球词汇", text: "outside hitter (主攻手), extended rally (多回合拉锯), spike (扣球), at the net (在网前)" }
      ]
    },
    {
      id: "q_sports02_s110",
      chinese: "投手在满垒局面下用一记刁钻的曲线球三振了对方最强打者",
      english_full: "The pitcher struck out the opponent's best batter with a devious curveball in a bases-loaded situation.",
      words: [
        { word: "The" }, { word: "pitcher" }, { word: "struck" }, { word: "out" }, { word: "the" }, { word: "opponent's" }, { word: "best" }, { word: "batter" }, { word: "with" }, { word: "a" }, { word: "devious" }, { word: "curveball" }, { word: "in" }, { word: "a" }, { word: "bases-loaded" }, { word: "situation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpɪtʃər/", translation: "投手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pitcher" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/strʌk/ /aʊt/", translation: "三振",
          subComponents: [{ startIndex: 0, words: [{ word: "struck" }, { word: "out" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /əˈpoʊnənts/ /bɛst/ /ˈbætər/", translation: "对方最强打者",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "opponent's" }, { word: "best" }, { word: "batter" }] }]
        },
        {
          start: 8, end: 11, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈdiːviəs/ /ˈkɜːrvbɔːl/", translation: "用一记刁钻的曲线球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "devious" }, { word: "curveball" }] }]
        },
        {
          start: 12, end: 15, label: "条件状语", phonetic: "/ɪn/ /ə/ /beɪsɪz-ˈloʊdɪd/ /ˌsɪtʃuˈeɪʃən/", translation: "在满垒局面下",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "a" }, { word: "bases-loaded" }, { word: "situation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球词汇", text: "strike out (三振), curveball (曲线球), bases-loaded (满垒), batter (打者)" }
      ]
    },
    {
      id: "q_sports02_s111",
      chinese: "自由人凭借一次极限鱼跃救球将球队从溃败边缘拉回",
      english_full: "The libero pulled the team back from the brink of defeat with a desperate diving dig.",
      words: [
        { word: "The" }, { word: "libero" }, { word: "pulled" }, { word: "the" }, { word: "team" }, { word: "back" }, { word: "from" }, { word: "the" }, { word: "brink" }, { word: "of" }, { word: "defeat" }, { word: "with" }, { word: "a" }, { word: "desperate" }, { word: "diving" }, { word: "dig", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /lɪˈbɛroʊ/", translation: "自由人",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "libero" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/pʊld/ /ðə/ /tiːm/ /bæk/", translation: "将球队拉回",
          subComponents: [{ startIndex: 0, words: [{ word: "pulled" }, { word: "the" }, { word: "team" }, { word: "back" }] }]
        },
        {
          start: 6, end: 10, label: "来源状语", phonetic: "/frɒm/ /ðə/ /brɪŋk/ /ɒv/ /dɪˈfiːt/", translation: "从溃败边缘",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "the" }, { word: "brink" }, { word: "of" }, { word: "defeat" }] }]
        },
        {
          start: 11, end: 15, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈdɛspərət/ /ˈdaɪvɪŋ/ /dɪɡ/", translation: "凭借一次极限鱼跃救球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "desperate" }, { word: "diving" }, { word: "dig", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "排球词汇", text: "libero (自由人), diving dig (鱼跃救球), brink of defeat (溃败边缘), desperate (极限的)" }
      ]
    },
    {
      id: "q_sports02_s112",
      chinese: "边锋在对方后卫线身后完成一次精准的直塞，撕开了防线",
      english_full: "The winger threaded a precise through ball behind the opponent's defensive line, ripping open the back line.",
      words: [
        { word: "The" }, { word: "winger" }, { word: "threaded" }, { word: "a" }, { word: "precise" }, { word: "through" }, { word: "ball" }, { word: "behind" }, { word: "the" }, { word: "opponent's" }, { word: "defensive" }, { word: "line," }, { word: "ripping" }, { word: "open" }, { word: "the" }, { word: "back" }, { word: "line", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈwɪŋər/", translation: "边锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "winger" }] }]
        },
        {
          start: 2, end: 6, label: "谓语", phonetic: "/θrɛdɪd/ /ə/ /prɪˈsaɪs/ /θruː/ /bɔːl/", translation: "完成一次精准直塞",
          subComponents: [{ startIndex: 0, words: [{ word: "threaded" }, { word: "a" }, { word: "precise" }, { word: "through" }, { word: "ball" }] }]
        },
        {
          start: 7, end: 11, label: "地点状语", phonetic: "/bɪˈhaɪnd/ /ðə/ /əˈpoʊnənts/ /dɪˈfɛnsɪv/ /laɪn/", translation: "在对方后卫线身后",
          subComponents: [{ startIndex: 0, words: [{ word: "behind" }, { word: "the" }, { word: "opponent's" }, { word: "defensive" }, { word: "line," }] }]
        },
        {
          start: 12, end: 16, label: "结果状语", phonetic: "/ˈrɪpɪŋ/ /ˈoʊpən/ /ðə/ /bæk/ /laɪn/", translation: "撕开了防线",
          subComponents: [{ startIndex: 0, words: [{ word: "ripping" }, { word: "open" }, { word: "the" }, { word: "back" }, { word: "line", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球战术", text: "winger (边锋), through ball (直塞球), defensive line (后卫线), rip open (撕开)" }
      ]
    },
    {
      id: "q_sports02_s113",
      chinese: "二传手在快攻中送出一次教科书般的背飞传球",
      english_full: "The setter delivered a textbook back-row attack set during a lightning-fast counterattack.",
      words: [
        { word: "The" }, { word: "setter" }, { word: "delivered" }, { word: "a" }, { word: "textbook" }, { word: "back-row" }, { word: "attack" }, { word: "set" }, { word: "during" }, { word: "a" }, { word: "lightning-fast" }, { word: "counterattack", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsɛtər/", translation: "二传手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "setter" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/dɪˈlɪvərd/", translation: "送出",
          subComponents: [{ startIndex: 0, words: [{ word: "delivered" }] }]
        },
        {
          start: 3, end: 7, label: "宾语", phonetic: "/ə/ /ˈtɛkstbʊk/ /bæk-roʊ/ /əˈtæk/ /sɛt/", translation: "教科书般的背飞传球",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "textbook" }, { word: "back-row" }, { word: "attack" }, { word: "set" }] }]
        },
        {
          start: 8, end: 11, label: "时间状语", phonetic: "/ˈdjʊrɪŋ/ /ə/ /ˈlaɪtnɪŋ-fɑːst/ /ˈkaʊntərˌætæk/", translation: "在快攻中",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "a" }, { word: "lightning-fast" }, { word: "counterattack", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "排球战术", text: "setter (二传手), back-row attack (背攻), counterattack (快攻反击), textbook (教科书般的)" }
      ]
    },
    {
      id: "q_sports02_s114",
      chinese: "教练在暂停期间部署全场紧逼防守以打乱对方节奏",
      english_full: "The coach deployed a full-court press during the timeout to disrupt the opponent's rhythm.",
      words: [
        { word: "The" }, { word: "coach" }, { word: "deployed" }, { word: "a" }, { word: "full-court" }, { word: "press" }, { word: "during" }, { word: "the" }, { word: "timeout" }, { word: "to" }, { word: "disrupt" }, { word: "the" }, { word: "opponent's" }, { word: "rhythm", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /koʊtʃ/", translation: "教练",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "coach" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/dɪˈplɔɪd/", translation: "部署",
          subComponents: [{ startIndex: 0, words: [{ word: "deployed" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ə/ /fʊl-kɔːrt/ /prɛs/", translation: "全场紧逼防守",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "full-court" }, { word: "press" }] }]
        },
        {
          start: 6, end: 8, label: "时间状语", phonetic: "/ˈdjʊrɪŋ/ /ðə/ /ˈtaɪmaʊt/", translation: "在暂停期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "timeout" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /dɪsˈrʌpt/ /ðə/ /əˈpoʊnənts/ /ˈrɪðəm/", translation: "以打乱对方节奏",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "disrupt" }, { word: "the" }, { word: "opponent's" }, { word: "rhythm", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球战术", text: "full-court press (全场紧逼), timeout (暂停), disrupt rhythm (打乱节奏), deploy (部署)" }
      ]
    },
    {
      id: "q_sports02_s115",
      chinese: "队长在角球战术中以一记头球破门为球队首开纪录",
      english_full: "The captain opened the scoring with a header from a well-rehearsed corner routine.",
      words: [
        { word: "The" }, { word: "captain" }, { word: "opened" }, { word: "the" }, { word: "scoring" }, { word: "with" }, { word: "a" }, { word: "header" }, { word: "from" }, { word: "a" }, { word: "well-rehearsed" }, { word: "corner" }, { word: "routine", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkæptɪn/", translation: "队长",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "captain" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈoʊpənd/", translation: "首开",
          subComponents: [{ startIndex: 0, words: [{ word: "opened" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /ˈskɔːrɪŋ/", translation: "纪录",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "scoring" }] }]
        },
        {
          start: 5, end: 12, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈhɛdər/ /frɒm/ /ə/ /wɛl-rɪˈhɜːrst/ /ˈkɔːrnər/ /ruːˈtiːn/", translation: "在角球战术中以头球破门",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "header" }, { word: "from" }, { word: "a" }, { word: "well-rehearsed" }, { word: "corner" }, { word: "routine", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球词汇", text: "open the scoring (首开纪录), header (头球), corner routine (角球战术), well-rehearsed (演练充分的)" }
      ]
    },
    {
      id: "q_sports02_s116",
      chinese: "处于劣势的球队不仅将比赛拖入点球大战，而且奇迹般战胜了卫冕冠军",
      english_full: "The underdog team not only dragged the match into a penalty shootout but miraculously triumphed over the defending champions.",
      words: [
        { word: "The" }, { word: "underdog" }, { word: "team" }, { word: "not" }, { word: "only" }, { word: "dragged" }, { word: "the" }, { word: "match" }, { word: "into" }, { word: "a" }, { word: "penalty" }, { word: "shootout" }, { word: "but" }, { word: "miraculously" }, { word: "triumphed" }, { word: "over" }, { word: "the" }, { word: "defending" }, { word: "champions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈʌndərdɒɡ/ /tiːm/", translation: "处于劣势的球队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "underdog" }, { word: "team" }] }]
        },
        {
          start: 3, end: 4, label: "状语", phonetic: "/nɒt/ /ˈoʊnli/", translation: "不仅",
          subComponents: [{ startIndex: 0, words: [{ word: "not" }, { word: "only" }] }]
        },
        {
          start: 5, end: 5, label: "谓语1", phonetic: "/drægd/", translation: "拖入",
          subComponents: [{ startIndex: 0, words: [{ word: "dragged" }] }]
        },
        {
          start: 6, end: 11, label: "宾语1", phonetic: "/ðə/ /mætʃ/ /ˈɪntuː/ /ə/ /ˈpɛnəlti/ /ˈʃuːtˌaʊt/", translation: "比赛进入点球大战",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "match" }, { word: "into" }, { word: "a" }, { word: "penalty" }, { word: "shootout" }] }]
        },
        {
          start: 12, end: 13, label: "连词+状语", phonetic: "/bʌt/ /mɪˈrækjʊləsli/", translation: "而且奇迹般地",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }, { word: "miraculously" }] }]
        },
        {
          start: 14, end: 15, label: "谓语2", phonetic: "/ˈtraɪʌmft/ /ˈoʊvər/", translation: "战胜",
          subComponents: [{ startIndex: 0, words: [{ word: "triumphed" }, { word: "over" }] }]
        },
        {
          start: 16, end: 18, label: "宾语2", phonetic: "/ðə/ /dɪˈfɛndɪŋ/ /ˈtʃæmpiənz/", translation: "卫冕冠军",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "defending" }, { word: "champions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "淘汰赛", text: "underdog (劣势方/黑马), penalty shootout (点球大战), triumph over (战胜), defending champion (卫冕冠军)" }
      ]
    },
    {
      id: "q_sports02_s117",
      chinese: "频繁在人造草坪上踢球会大幅增加下肢严重关节和韧带损伤的风险",
      english_full: "Playing frequently on artificial turf substantially increases the risk of sustaining severe joint and ligament injuries in the lower extremities.",
      words: [
        { word: "Playing" }, { word: "frequently" }, { word: "on" }, { word: "artificial" }, { word: "turf" }, { word: "substantially" }, { word: "increases" }, { word: "the" }, { word: "risk" }, { word: "of" }, { word: "sustaining" }, { word: "severe" }, { word: "joint" }, { word: "and" }, { word: "ligament" }, { word: "injuries" }, { word: "in" }, { word: "the" }, { word: "lower" }, { word: "extremities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语(动名词短语)", phonetic: "/ˈpleɪɪŋ/ /ˈfriːkwəntli/ /ɒn/ /ˌɑːrtɪˈfɪʃəl/ /tɜːrf/", translation: "频繁在人造草坪上踢球",
          subComponents: [{ startIndex: 0, words: [{ word: "Playing" }, { word: "frequently" }, { word: "on" }, { word: "artificial" }, { word: "turf" }] }]
        },
        {
          start: 5, end: 6, label: "状语+谓语", phonetic: "/səbˈstænʃəli/ /ɪnˈkriːsɪz/", translation: "大幅增加",
          subComponents: [{ startIndex: 0, words: [{ word: "substantially" }, { word: "increases" }] }]
        },
        {
          start: 7, end: 19, label: "宾语", phonetic: "/ðə/ /rɪsk/ /ɒv/ /səˈsteɪnɪŋ/ /sɪˈvɪər/ /dʒɔɪnt/ /ænd/ /ˈlɪgəmənt/ /ˈɪndʒəriz/ /ɪn/ /ðə/ /ˈloʊər/ /ɪkˈstrɛmɪtiz/", translation: "下肢严重关节和韧带损伤的风险",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "risk" }, { word: "of" }, { word: "sustaining" }, { word: "severe" }, { word: "joint" }, { word: "and" }, { word: "ligament" }, { word: "injuries" }, { word: "in" }, { word: "the" }, { word: "lower" }, { word: "extremities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运动医学", text: "artificial turf (人造草坪), sustain an injury (遭受损伤), ligament injury (韧带损伤), lower extremities (下肢)" }
      ]
    },
    {
      id: "q_sports02_s118",
      chinese: "防守线无情的施压最终迫使四分卫在绝望中掷出致命的拦截球",
      english_full: "The defensive line's relentless pressure ultimately coerced the quarterback into throwing the fatal interception in desperation.",
      words: [
        { word: "The" }, { word: "defensive" }, { word: "line's" }, { word: "relentless" }, { word: "pressure" }, { word: "ultimately" }, { word: "coerced" }, { word: "the" }, { word: "quarterback" }, { word: "into" }, { word: "throwing" }, { word: "the" }, { word: "fatal" }, { word: "interception" }, { word: "in" }, { word: "desperation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /dɪˈfɛnsɪv/ /laɪnz/ /rɪˈlɛntləs/ /ˈprɛʃər/", translation: "防守线无情的施压",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "defensive" }, { word: "line's" }, { word: "relentless" }, { word: "pressure" }] }]
        },
        {
          start: 5, end: 6, label: "状语+谓语", phonetic: "/ˈʌltɪmətli/ /koʊˈɜːrst/", translation: "最终迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "ultimately" }, { word: "coerced" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ðə/ /ˈkwɔːrtərˌbæk/", translation: "四分卫",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "quarterback" }] }]
        },
        {
          start: 9, end: 13, label: "宾补", phonetic: "/ˈɪntuː/ /ˈθroʊɪŋ/ /ðə/ /ˈfeɪtəl/ /ˌɪntərˈsɛpʃən/", translation: "掷出致命的拦截球",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "throwing" }, { word: "the" }, { word: "fatal" }, { word: "interception" }] }]
        },
        {
          start: 14, end: 15, label: "方式状语", phonetic: "/ɪn/ /ˌdɛspəˈreɪʃən/", translation: "在绝望中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "desperation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "美式橄榄球", text: "relentless pressure (无情施压), quarterback (四分卫), interception (拦截/抄截), in desperation (绝望中)" }
      ]
    },
    {
      id: "q_sports02_s119",
      chinese: "羽毛球选手出色的假动作让对手防守队员彻底失去平衡",
      english_full: "The badminton player's deceptive feints caught the opposing defenders completely off balance.",
      words: [
        { word: "The" }, { word: "badminton" }, { word: "player's" }, { word: "deceptive" }, { word: "feints" }, { word: "caught" }, { word: "the" }, { word: "opposing" }, { word: "defenders" }, { word: "completely" }, { word: "off" }, { word: "balance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈbædmɪntən/ /ˈpleɪərz/ /dɪˈsɛptɪv/ /feɪnts/", translation: "羽毛球选手出色的假动作",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "badminton" }, { word: "player's" }, { word: "deceptive" }, { word: "feints" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/kɔːt/", translation: "使…措手不及",
          subComponents: [{ startIndex: 0, words: [{ word: "caught" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ði/ /əˈpoʊzɪŋ/ /dɪˈfɛndərz/", translation: "对手防守队员",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "opposing" }, { word: "defenders" }] }]
        },
        {
          start: 9, end: 11, label: "宾补", phonetic: "/kəmˈpliːtli/ /ɒf/ /ˈbæləns/", translation: "彻底失去平衡",
          subComponents: [{ startIndex: 0, words: [{ word: "completely" }, { word: "off" }, { word: "balance", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "羽毛球技术", text: "deceptive feint (假动作), catch sb off balance (使失去平衡), opposing defenders (对方防守队员)" }
      ]
    },
    {
      id: "q_sports02_s120",
      chinese: "中锋在禁区深处以一记精准的勾手投篮完成关键反超",
      english_full: "The center completed a crucial go-ahead basket with a precise hook shot deep in the paint.",
      words: [
        { word: "The" }, { word: "center" }, { word: "completed" }, { word: "a" }, { word: "crucial" }, { word: "go-ahead" }, { word: "basket" }, { word: "with" }, { word: "a" }, { word: "precise" }, { word: "hook" }, { word: "shot" }, { word: "deep" }, { word: "in" }, { word: "the" }, { word: "paint", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsɛntər/", translation: "中锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "center" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/kəmˈpliːtɪd/", translation: "完成",
          subComponents: [{ startIndex: 0, words: [{ word: "completed" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ə/ /ˈkruːʃəl/ /ɡoʊ-əˈhɛd/ /ˈbæskɪt/", translation: "关键反超",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "crucial" }, { word: "go-ahead" }, { word: "basket" }] }]
        },
        {
          start: 7, end: 15, label: "方式状语", phonetic: "/wɪð/ /ə/ /prɪˈsaɪs/ /hʊk/ /ʃɒt/ /diːp/ /ɪn/ /ðə/ /peɪnt/", translation: "在禁区深处以精准勾手投篮",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "precise" }, { word: "hook" }, { word: "shot" }, { word: "deep" }, { word: "in" }, { word: "the" }, { word: "paint", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球词汇", text: "go-ahead basket (反超球), hook shot (勾手投篮), the paint (禁区), crucial (关键的)" }
      ]
    },
    {
      id: "q_sports02_s121",
      chinese: "游击手在第九局完成一次精彩双杀，化解了对手的得分威胁",
      english_full: "The shortstop turned a spectacular double play in the ninth inning, neutralizing the opponent's scoring threat.",
      words: [
        { word: "The" }, { word: "shortstop" }, { word: "turned" }, { word: "a" }, { word: "spectacular" }, { word: "double" }, { word: "play" }, { word: "in" }, { word: "the" }, { word: "ninth" }, { word: "inning," }, { word: "neutralizing" }, { word: "the" }, { word: "opponent's" }, { word: "scoring" }, { word: "threat", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈʃɔːrtstɒp/", translation: "游击手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "shortstop" }] }]
        },
        {
          start: 2, end: 6, label: "谓语", phonetic: "/tɜːrnd/ /ə/ /spɛkˈtækjʊlər/ /ˈdʌbəl/ /pleɪ/", translation: "完成精彩双杀",
          subComponents: [{ startIndex: 0, words: [{ word: "turned" }, { word: "a" }, { word: "spectacular" }, { word: "double" }, { word: "play" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/ɪn/ /ðə/ /naɪnθ/ /ˈɪnɪŋ/", translation: "在第九局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "ninth" }, { word: "inning," }] }]
        },
        {
          start: 11, end: 15, label: "结果状语", phonetic: "/ˈnuːtrəˌlaɪzɪŋ/ /ðə/ /əˈpoʊnənts/ /ˈskɔːrɪŋ/ /θrɛt/", translation: "化解对手得分威胁",
          subComponents: [{ startIndex: 0, words: [{ word: "neutralizing" }, { word: "the" }, { word: "opponent's" }, { word: "scoring" }, { word: "threat", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球词汇", text: "shortstop (游击手), double play (双杀), neutralize (化解), scoring threat (得分威胁)" }
      ]
    },
    {
      id: "q_sports02_s122",
      chinese: "发球方在抢七局中连续发出三个无解的Ace球",
      english_full: "The server fired three unreturnable aces in succession during the deciding tiebreak.",
      words: [
        { word: "The" }, { word: "server" }, { word: "fired" }, { word: "three" }, { word: "unreturnable" }, { word: "aces" }, { word: "in" }, { word: "succession" }, { word: "during" }, { word: "the" }, { word: "deciding" }, { word: "tiebreak", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsɜːrvər/", translation: "发球方",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "server" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈfaɪərd/", translation: "发出",
          subComponents: [{ startIndex: 0, words: [{ word: "fired" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/θriː/ /ʌnrɪˈtɜːrnəbəl/ /ˈeɪsɪz/", translation: "三个无解Ace球",
          subComponents: [{ startIndex: 0, words: [{ word: "three" }, { word: "unreturnable" }, { word: "aces" }] }]
        },
        {
          start: 6, end: 7, label: "方式状语", phonetic: "/ɪn/ /səkˈsɛʃən/", translation: "连续",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "succession" }] }]
        },
        {
          start: 8, end: 11, label: "时间状语", phonetic: "/ˈdjʊrɪŋ/ /ðə/ /dɪˈsaɪdɪŋ/ /ˈtaɪbreɪk/", translation: "在抢七局中",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "deciding" }, { word: "tiebreak", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网球词汇", text: "ace (发球直接得分), tiebreak (抢七局), unreturnable (无法回击的), in succession (连续地)" }
      ]
    },
    {
      id: "q_sports02_s123",
      chinese: "捕手在延长赛第十局以一记再见本垒打锁定胜局",
      english_full: "The catcher clinched the victory with a walk-off home run in the tenth inning of extra innings.",
      words: [
        { word: "The" }, { word: "catcher" }, { word: "clinched" }, { word: "the" }, { word: "victory" }, { word: "with" }, { word: "a" }, { word: "walk-off" }, { word: "home" }, { word: "run" }, { word: "in" }, { word: "the" }, { word: "tenth" }, { word: "inning" }, { word: "of" }, { word: "extra" }, { word: "innings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkætʃər/", translation: "捕手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "catcher" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/klɪntʃt/", translation: "锁定",
          subComponents: [{ startIndex: 0, words: [{ word: "clinched" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /ˈvɪktəri/", translation: "胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "victory" }] }]
        },
        {
          start: 5, end: 9, label: "方式状语", phonetic: "/wɪð/ /ə/ /wɔːk-ɒf/ /hoʊm/ /rʌn/", translation: "以一记再见本垒打",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "walk-off" }, { word: "home" }, { word: "run" }] }]
        },
        {
          start: 10, end: 16, label: "时间状语", phonetic: "/ɪn/ /ðə/ /tɛnθ/ /ˈɪnɪŋ/ /ɒv/ /ˈɛkstrə/ /ˈɪnɪŋz/", translation: "在延长赛第十局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "tenth" }, { word: "inning" }, { word: "of" }, { word: "extra" }, { word: "innings", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球词汇", text: "walk-off home run (再见本垒打), extra innings (延长赛), clinch (锁定), catcher (捕手)" }
      ]
    },
    {
      id: "q_sports02_s124",
      chinese: "二垒手在关键时刻成功盗垒，为球队创造了绝佳得分机会",
      english_full: "The second baseman successfully stole a base at a critical juncture, creating a prime scoring opportunity.",
      words: [
        { word: "The" }, { word: "second" }, { word: "baseman" }, { word: "successfully" }, { word: "stole" }, { word: "a" }, { word: "base" }, { word: "at" }, { word: "a" }, { word: "critical" }, { word: "juncture," }, { word: "creating" }, { word: "a" }, { word: "prime" }, { word: "scoring" }, { word: "opportunity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛkənd/ /ˈbeɪsmən/", translation: "二垒手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "second" }, { word: "baseman" }] }]
        },
        {
          start: 3, end: 6, label: "谓语", phonetic: "/səkˈsɛsfəli/ /stoʊl/ /ə/ /beɪs/", translation: "成功盗垒",
          subComponents: [{ startIndex: 0, words: [{ word: "successfully" }, { word: "stole" }, { word: "a" }, { word: "base" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/æt/ /ə/ /ˈkrɪtɪkəl/ /ˈdʒʌŋktʃər/", translation: "在关键时刻",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "a" }, { word: "critical" }, { word: "juncture," }] }]
        },
        {
          start: 11, end: 15, label: "结果状语", phonetic: "/kriˈeɪtɪŋ/ /ə/ /praɪm/ /ˈskɔːrɪŋ/ /ˌɒpərˈtuːnɪti/", translation: "创造绝佳得分机会",
          subComponents: [{ startIndex: 0, words: [{ word: "creating" }, { word: "a" }, { word: "prime" }, { word: "scoring" }, { word: "opportunity", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球词汇", text: "steal a base (盗垒), critical juncture (关键时刻), prime scoring opportunity (绝佳得分机会)" }
      ]
    },
    {
      id: "q_sports02_s125",
      chinese: "球员在底线附近以一记刁钻的反手切削球迫使对手失误",
      english_full: "The player forced an error with a cunning backhand slice near the baseline.",
      words: [
        { word: "The" }, { word: "player" }, { word: "forced" }, { word: "an" }, { word: "error" }, { word: "with" }, { word: "a" }, { word: "cunning" }, { word: "backhand" }, { word: "slice" }, { word: "near" }, { word: "the" }, { word: "baseline", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpleɪər/", translation: "球员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "player" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/fɔːrst/", translation: "迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "forced" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/æn/ /ˈɛrər/", translation: "失误",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "error" }] }]
        },
        {
          start: 5, end: 9, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈkʌnɪŋ/ /ˈbækhænd/ /slaɪs/", translation: "以刁钻反手切削球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "cunning" }, { word: "backhand" }, { word: "slice" }] }]
        },
        {
          start: 10, end: 12, label: "地点状语", phonetic: "/nɪr/ /ðə/ /ˈbeɪslaɪn/", translation: "在底线附近",
          subComponents: [{ startIndex: 0, words: [{ word: "near" }, { word: "the" }, { word: "baseline", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网球词汇", text: "backhand slice (反手切削), baseline (底线), force an error (迫使失误), cunning (刁钻的)" }
      ]
    },
    {
      id: "q_sports02_s126",
      chinese: "在点球大战中，门将凭借一次不可思议的扑救将球队送进决赛",
      english_full: "During the penalty shootout, the goalkeeper propelled the team into the final with an incredible save.",
      words: [
        { word: "During" }, { word: "the" }, { word: "penalty" }, { word: "shootout," }, { word: "the" }, { word: "goalkeeper" }, { word: "propelled" }, { word: "the" }, { word: "team" }, { word: "into" }, { word: "the" }, { word: "final" }, { word: "with" }, { word: "an" }, { word: "incredible" }, { word: "save", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "时间状语", phonetic: "/ˈdjʊrɪŋ/ /ðə/ /ˈpɛnəlti/ /ˈʃuːtaʊt/", translation: "在点球大战中",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "the" }, { word: "penalty" }, { word: "shootout," }] }]
        },
        {
          start: 4, end: 5, label: "主语", phonetic: "/ðə/ /ˈɡoʊlˌkiːpər/", translation: "门将",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "goalkeeper" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/prəˈpɛld/", translation: "送进",
          subComponents: [{ startIndex: 0, words: [{ word: "propelled" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ðə/ /tiːm/", translation: "球队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "team" }] }]
        },
        {
          start: 9, end: 11, label: "方向状语", phonetic: "/ˈɪntuː/ /ðə/ /ˈfaɪnəl/", translation: "决赛",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "the" }, { word: "final" }] }]
        },
        {
          start: 12, end: 15, label: "方式状语", phonetic: "/wɪð/ /æn/ /ɪnˈkrɛdəbəl/ /seɪv/", translation: "凭借一次不可思议的扑救",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "an" }, { word: "incredible" }, { word: "save", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球词汇", text: "penalty shootout (点球大战), goalkeeper (门将), incredible save (不可思议的扑救), propel (推进/送进)" }
      ]
    },
    {
      id: "q_sports02_s127",
      chinese: "小前锋通过一次精妙的挡拆配合为队友创造出空位三分机会",
      english_full: "The small forward created an open three-point look for his teammate through a well-executed pick-and-roll.",
      words: [
        { word: "The" }, { word: "small" }, { word: "forward" }, { word: "created" }, { word: "an" }, { word: "open" }, { word: "three-point" }, { word: "look" }, { word: "for" }, { word: "his" }, { word: "teammate" }, { word: "through" }, { word: "a" }, { word: "well-executed" }, { word: "pick-and-roll", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /smɔːl/ /ˈfɔːrwərd/", translation: "小前锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "small" }, { word: "forward" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/kriˈeɪtɪd/", translation: "创造",
          subComponents: [{ startIndex: 0, words: [{ word: "created" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/æn/ /ˈoʊpən/ /θriː-pɔɪnt/ /lʊk/", translation: "空位三分机会",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "open" }, { word: "three-point" }, { word: "look" }] }]
        },
        {
          start: 8, end: 10, label: "对象状语", phonetic: "/fɔːr/ /hɪz/ /ˈtiːmmeɪt/", translation: "为队友",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "his" }, { word: "teammate" }] }]
        },
        {
          start: 11, end: 14, label: "方式状语", phonetic: "/θruː/ /ə/ /wɛl-ˈɛksɪkjuːtɪd/ /pɪk-ænd-roʊl/", translation: "通过精妙挡拆配合",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "a" }, { word: "well-executed" }, { word: "pick-and-roll", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球战术", text: "small forward (小前锋), three-point look (三分机会), pick-and-roll (挡拆), well-executed (执行精妙的)" }
      ]
    },
    {
      id: "q_sports02_s128",
      chinese: "前锋在对方禁区内因鲁莽铲球被直接出示红牌罚下",
      english_full: "The striker was shown a straight red card for a reckless tackle inside the penalty area.",
      words: [
        { word: "The" }, { word: "striker" }, { word: "was" }, { word: "shown" }, { word: "a" }, { word: "straight" }, { word: "red" }, { word: "card" }, { word: "for" }, { word: "a" }, { word: "reckless" }, { word: "tackle" }, { word: "inside" }, { word: "the" }, { word: "penalty" }, { word: "area", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstraɪkər/", translation: "前锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "striker" }] }]
        },
        {
          start: 2, end: 7, label: "谓语(被动)", phonetic: "/wɒz/ /ʃoʊn/ /ə/ /streɪt/ /rɛd/ /kɑːrd/", translation: "被直接出示红牌",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "shown" }, { word: "a" }, { word: "straight" }, { word: "red" }, { word: "card" }] }]
        },
        {
          start: 8, end: 15, label: "原因状语", phonetic: "/fɔːr/ /ə/ /ˈrɛkləs/ /ˈtækəl/ /ɪnˈsaɪd/ /ðə/ /ˈpɛnəlti/ /ˈɛriə/", translation: "因在禁区内鲁莽铲球",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "a" }, { word: "reckless" }, { word: "tackle" }, { word: "inside" }, { word: "the" }, { word: "penalty" }, { word: "area", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球规则", text: "striker (前锋), straight red card (直接红牌), reckless tackle (鲁莽铲球), penalty area (禁区)" }
      ]
    },
    {
      id: "q_sports02_s129",
      chinese: "乒乓球选手在决胜局以一记旋转刁钻的反手拧拉逆转比分",
      english_full: "The table tennis player reversed the score with a devious backspin flick in the deciding game.",
      words: [
        { word: "The" }, { word: "table" }, { word: "tennis" }, { word: "player" }, { word: "reversed" }, { word: "the" }, { word: "score" }, { word: "with" }, { word: "a" }, { word: "devious" }, { word: "backspin" }, { word: "flick" }, { word: "in" }, { word: "the" }, { word: "deciding" }, { word: "game", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈteɪbəl/ /ˈtɛnɪs/ /ˈpleɪər/", translation: "乒乓球选手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "table" }, { word: "tennis" }, { word: "player" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈvɜːrst/", translation: "逆转",
          subComponents: [{ startIndex: 0, words: [{ word: "reversed" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ðə/ /skɔːr/", translation: "比分",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "score" }] }]
        },
        {
          start: 7, end: 11, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈdiːviəs/ /ˈbækspɪn/ /flɪk/", translation: "以旋转刁钻的反手拧拉",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "devious" }, { word: "backspin" }, { word: "flick" }] }]
        },
        {
          start: 12, end: 15, label: "时间状语", phonetic: "/ɪn/ /ðə/ /dɪˈsaɪdɪŋ/ /ɡeɪm/", translation: "在决胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "deciding" }, { word: "game", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "乒乓球技术", text: "backspin flick (反手拧拉), devious (刁钻的), deciding game (决胜局), reverse the score (逆转比分)" }
      ]
    },
    {
      id: "q_sports02_s130",
      chinese: "橄榄球前锋在争球中凭借压倒性的力量为球队赢得了控球权",
      english_full: "The rugby forward won possession for the team through overwhelming power in the scrum.",
      words: [
        { word: "The" }, { word: "rugby" }, { word: "forward" }, { word: "won" }, { word: "possession" }, { word: "for" }, { word: "the" }, { word: "team" }, { word: "through" }, { word: "overwhelming" }, { word: "power" }, { word: "in" }, { word: "the" }, { word: "scrum", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrʌɡbi/ /ˈfɔːrwərd/", translation: "橄榄球前锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "rugby" }, { word: "forward" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/wʌn/", translation: "赢得",
          subComponents: [{ startIndex: 0, words: [{ word: "won" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/pəˈzɛʃən/", translation: "控球权",
          subComponents: [{ startIndex: 0, words: [{ word: "possession" }] }]
        },
        {
          start: 5, end: 7, label: "对象状语", phonetic: "/fɔːr/ /ðə/ /tiːm/", translation: "为球队",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "the" }, { word: "team" }] }]
        },
        {
          start: 8, end: 13, label: "方式状语", phonetic: "/θruː/ /ˌoʊvərˈwɛlmɪŋ/ /ˈpaʊər/ /ɪn/ /ðə/ /skrʌm/", translation: "在争球中凭借压倒性力量",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "overwhelming" }, { word: "power" }, { word: "in" }, { word: "the" }, { word: "scrum", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "橄榄球词汇", text: "scrum (争球), possession (控球权), rugby forward (前锋), overwhelming power (压倒性力量)" }
      ]
    },
    {
      id: "q_sports02_s131",
      chinese: "冰球守门员在第三节完成一次关键的点球扑救，保住了领先优势",
      english_full: "The hockey goaltender made a crucial penalty save in the third period, preserving the team's lead.",
      words: [
        { word: "The" }, { word: "hockey" }, { word: "goaltender" }, { word: "made" }, { word: "a" }, { word: "crucial" }, { word: "penalty" }, { word: "save" }, { word: "in" }, { word: "the" }, { word: "third" }, { word: "period," }, { word: "preserving" }, { word: "the" }, { word: "team's" }, { word: "lead", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈhɒki/ /ˈɡoʊltɛndər/", translation: "冰球守门员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hockey" }, { word: "goaltender" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/meɪd/ /ə/ /ˈkruːʃəl/ /ˈpɛnəlti/ /seɪv/", translation: "完成关键点球扑救",
          subComponents: [{ startIndex: 0, words: [{ word: "made" }, { word: "a" }, { word: "crucial" }, { word: "penalty" }, { word: "save" }] }]
        },
        {
          start: 8, end: 11, label: "时间状语", phonetic: "/ɪn/ /ðə/ /θɜːrd/ /ˈpɪriəd/", translation: "在第三节",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "third" }, { word: "period," }] }]
        },
        {
          start: 12, end: 15, label: "结果状语", phonetic: "/prɪˈzɜːrvɪŋ/ /ðə/ /tiːmz/ /liːd/", translation: "保住领先优势",
          subComponents: [{ startIndex: 0, words: [{ word: "preserving" }, { word: "the" }, { word: "team's" }, { word: "lead", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "冰球词汇", text: "goaltender (守门员), penalty save (点球扑救), third period (第三节), preserve the lead (保住领先)" }
      ]
    },
    {
      id: "q_sports02_s132",
      chinese: "板球投手在最后一轮以一记完美 Yorker 球淘汰对方最强击球手",
      english_full: "The cricket bowler dismissed the opponent's top batsman with a perfect yorker in the final over.",
      words: [
        { word: "The" }, { word: "cricket" }, { word: "bowler" }, { word: "dismissed" }, { word: "the" }, { word: "opponent's" }, { word: "top" }, { word: "batsman" }, { word: "with" }, { word: "a" }, { word: "perfect" }, { word: "yorker" }, { word: "in" }, { word: "the" }, { word: "final" }, { word: "over", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkrɪkɪt/ /ˈboʊlər/", translation: "板球投手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "cricket" }, { word: "bowler" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/dɪsˈmɪst/", translation: "淘汰",
          subComponents: [{ startIndex: 0, words: [{ word: "dismissed" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /əˈpoʊnənts/ /tɒp/ /ˈbætsmən/", translation: "对方最强击球手",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "opponent's" }, { word: "top" }, { word: "batsman" }] }]
        },
        {
          start: 8, end: 11, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈpɜːrfɪkt/ /ˈjɔːrkər/", translation: "以一记完美 Yorker 球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "perfect" }, { word: "yorker" }] }]
        },
        {
          start: 12, end: 15, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ˈfaɪnəl/ /ˈoʊvər/", translation: "在最后一轮",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "final" }, { word: "over", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "板球词汇", text: "bowler (投手), yorker ( Yorker 球/低平快球), batsman (击球手), final over (最后一轮)" }
      ]
    },
    {
      id: "q_sports02_s133",
      chinese: "手球门将凭借一次极限扑救化解了对方在终场前的绝杀射门",
      english_full: "The handball goalkeeper thwarted the opponent's last-gasp shot with an extraordinary diving save.",
      words: [
        { word: "The" }, { word: "handball" }, { word: "goalkeeper" }, { word: "thwarted" }, { word: "the" }, { word: "opponent's" }, { word: "last-gasp" }, { word: "shot" }, { word: "with" }, { word: "an" }, { word: "extraordinary" }, { word: "diving" }, { word: "save", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈhændbɔːl/ /ˈɡoʊlˌkiːpər/", translation: "手球门将",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "handball" }, { word: "goalkeeper" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈθwɔːrtɪd/", translation: "化解",
          subComponents: [{ startIndex: 0, words: [{ word: "thwarted" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /əˈpoʊnənts/ /læst-ɡæsp/ /ʃɒt/", translation: "对方终场前绝杀射门",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "opponent's" }, { word: "last-gasp" }, { word: "shot" }] }]
        },
        {
          start: 8, end: 12, label: "方式状语", phonetic: "/wɪð/ /æn/ /ɪkˈstrɔːrdəˌnɛri/ /ˈdaɪvɪŋ/ /seɪv/", translation: "凭借一次极限扑救",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "an" }, { word: "extraordinary" }, { word: "diving" }, { word: "save", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "手球词汇", text: "last-gasp shot (终场绝杀射门), thwart (化解/阻止), diving save (鱼跃扑救), extraordinary (非凡的)" }
      ]
    },
    {
      id: "q_sports02_s134",
      chinese: "水球中锋在禁区前沿以一记精准的直接射门打破僵局",
      english_full: "The water polo center broke the deadlock with a precise direct shot from the five-meter line.",
      words: [
        { word: "The" }, { word: "water" }, { word: "polo" }, { word: "center" }, { word: "broke" }, { word: "the" }, { word: "deadlock" }, { word: "with" }, { word: "a" }, { word: "precise" }, { word: "direct" }, { word: "shot" }, { word: "from" }, { word: "the" }, { word: "five-meter" }, { word: "line", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈwɔːtər/ /ˈpoʊloʊ/ /ˈsɛntər/", translation: "水球中锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "water" }, { word: "polo" }, { word: "center" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/broʊk/", translation: "打破",
          subComponents: [{ startIndex: 0, words: [{ word: "broke" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ðə/ /ˈdɛdlɒk/", translation: "僵局",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "deadlock" }] }]
        },
        {
          start: 7, end: 15, label: "方式状语", phonetic: "/wɪð/ /ə/ /prɪˈsaɪs/ /dɪˈrɛkt/ /ʃɒt/ /frɒm/ /ðə/ /faɪv-ˈmiːtər/ /laɪn/", translation: "在禁区前沿以精准直接射门",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "precise" }, { word: "direct" }, { word: "shot" }, { word: "from" }, { word: "the" }, { word: "five-meter" }, { word: "line", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "水球词汇", text: "water polo (水球), break the deadlock (打破僵局), direct shot (直接射门), five-meter line (五米线)" }
      ]
    },
    {
      id: "q_sports02_s135",
      chinese: "在紧张的决胜局中，老将用一记完美的正手制胜分锁定胜局",
      english_full: "In the tense tiebreaker, the veteran secured the victory with a flawless forehand winner.",
      words: [
        { word: "In" }, { word: "the" }, { word: "tense" }, { word: "tiebreaker," }, { word: "the" }, { word: "veteran" }, { word: "secured" }, { word: "the" }, { word: "victory" }, { word: "with" }, { word: "a" }, { word: "flawless" }, { word: "forehand" }, { word: "winner", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "时间状语", phonetic: "/ɪn/ /ðə/ /tɛns/ /ˈtaɪˌbreɪkər/", translation: "在紧张的决胜局中",
          subComponents: [{ startIndex: 0, words: [{ word: "In" }, { word: "the" }, { word: "tense" }, { word: "tiebreaker," }] }]
        },
        {
          start: 4, end: 5, label: "主语", phonetic: "/ðə/ /ˈvɛtərən/", translation: "老将",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "veteran" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/sɪˈkjʊrd/", translation: "锁定",
          subComponents: [{ startIndex: 0, words: [{ word: "secured" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ðə/ /ˈvɪktəri/", translation: "胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "victory" }] }]
        },
        {
          start: 9, end: 13, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈflɔːləs/ /ˈfɔːrˌhænd/ /ˈwɪnər/", translation: "用一记完美正手制胜分",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "flawless" }, { word: "forehand" }, { word: "winner", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网球词汇", text: "tiebreaker (决胜局), veteran (老将), forehand winner (正手制胜分), flawless (完美的)" }
      ]
    },
    {
      id: "q_sports02_s136",
      chinese: "控球后卫在第四节通过一次精妙的背后传球激活了全队进攻",
      english_full: "The point guard ignited the team's offense with a brilliant no-look pass in the fourth quarter.",
      words: [
        { word: "The" }, { word: "point" }, { word: "guard" }, { word: "ignited" }, { word: "the" }, { word: "team's" }, { word: "offense" }, { word: "with" }, { word: "a" }, { word: "brilliant" }, { word: "no-look" }, { word: "pass" }, { word: "in" }, { word: "the" }, { word: "fourth" }, { word: "quarter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /pɔɪnt/ /gɑːrd/", translation: "控球后卫",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "point" }, { word: "guard" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪɡˈnaɪtɪd/", translation: "激活",
          subComponents: [{ startIndex: 0, words: [{ word: "ignited" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /tiːmz/ /əˈfɛns/", translation: "全队进攻",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "team's" }, { word: "offense" }] }]
        },
        {
          start: 7, end: 11, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈbrɪljənt/ /noʊ-lʊk/ /pæs/", translation: "通过精妙背后传球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "brilliant" }, { word: "no-look" }, { word: "pass" }] }]
        },
        {
          start: 12, end: 15, label: "时间状语", phonetic: "/ɪn/ /ðə/ /fɔːrθ/ /ˈkwɔːrtər/", translation: "在第四节",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "fourth" }, { word: "quarter", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球词汇", text: "no-look pass (不看人传球), ignite the offense (激活进攻), fourth quarter (第四节), brilliant (精妙的)" }
      ]
    },
    {
      id: "q_sports02_s137",
      chinese: "边后卫在反击中完成一次长途奔袭，以一记低平球助攻队友破门",
      english_full: "The fullback completed a lengthy counterattacking run and delivered a low cross to set up his teammate's goal.",
      words: [
        { word: "The" }, { word: "fullback" }, { word: "completed" }, { word: "a" }, { word: "lengthy" }, { word: "counterattacking" }, { word: "run" }, { word: "and" }, { word: "delivered" }, { word: "a" }, { word: "low" }, { word: "cross" }, { word: "to" }, { word: "set" }, { word: "up" }, { word: "his" }, { word: "teammate's" }, { word: "goal", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈfʊlbæk/", translation: "边后卫",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "fullback" }] }]
        },
        {
          start: 2, end: 6, label: "谓语1", phonetic: "/kəmˈpliːtɪd/ /ə/ /ˈlɛŋθi/ /ˌkaʊntərəˈtækɪŋ/ /rʌn/", translation: "完成一次长途反击奔袭",
          subComponents: [{ startIndex: 0, words: [{ word: "completed" }, { word: "a" }, { word: "lengthy" }, { word: "counterattacking" }, { word: "run" }] }]
        },
        {
          start: 7, end: 7, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 8, end: 8, label: "谓语2", phonetic: "/dɪˈlɪvərd/", translation: "送出",
          subComponents: [{ startIndex: 0, words: [{ word: "delivered" }] }]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ə/ /loʊ/ /krɒs/", translation: "一记低平球",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "low" }, { word: "cross" }] }]
        },
        {
          start: 12, end: 17, label: "目的状语", phonetic: "/tuː/ /sɛt/ /ʌp/ /hɪz/ /ˈtiːmmeɪts/ /ɡoʊl/", translation: "助攻队友破门",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "set" }, { word: "up" }, { word: "his" }, { word: "teammate's" }, { word: "goal", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球战术", text: "fullback (边后卫), counterattacking run (反击奔袭), low cross (低平球传中), set up a goal (助攻破门)" }
      ]
    },
    {
      id: "q_sports02_s138",
      chinese: "副攻手在决胜局以一记凌厉的后排进攻得分，为球队赢得冠军点",
      english_full: "The opposite hitter scored the championship point with a ferocious back-row attack in the deciding set.",
      words: [
        { word: "The" }, { word: "opposite" }, { word: "hitter" }, { word: "scored" }, { word: "the" }, { word: "championship" }, { word: "point" }, { word: "with" }, { word: "a" }, { word: "ferocious" }, { word: "back-row" }, { word: "attack" }, { word: "in" }, { word: "the" }, { word: "deciding" }, { word: "set", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈɒpəzɪt/ /ˈhɪtər/", translation: "副攻手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "opposite" }, { word: "hitter" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/skɔːrd/", translation: "得分",
          subComponents: [{ startIndex: 0, words: [{ word: "scored" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /ˌtʃæmpiənˈʃɪp/ /pɔɪnt/", translation: "冠军点",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "championship" }, { word: "point" }] }]
        },
        {
          start: 7, end: 11, label: "方式状语", phonetic: "/wɪð/ /ə/ /fəˈroʊʃəs/ /bæk-roʊ/ /əˈtæk/", translation: "以凌厉后排进攻",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "ferocious" }, { word: "back-row" }, { word: "attack" }] }]
        },
        {
          start: 12, end: 15, label: "时间状语", phonetic: "/ɪn/ /ðə/ /dɪˈsaɪdɪŋ/ /sɛt/", translation: "在决胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "deciding" }, { word: "set", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "排球词汇", text: "opposite hitter (副攻手), back-row attack (后排进攻), championship point (冠军点), ferocious (凌厉的)" }
      ]
    },
    {
      id: "q_sports02_s139",
      chinese: "一垒手在延长赛以一记牺牲触击推进跑者，为球队创造得分机会",
      english_full: "The first baseman advanced the runner with a sacrifice bunt in extra innings, creating a scoring chance.",
      words: [
        { word: "The" }, { word: "first" }, { word: "baseman" }, { word: "advanced" }, { word: "the" }, { word: "runner" }, { word: "with" }, { word: "a" }, { word: "sacrifice" }, { word: "bunt" }, { word: "in" }, { word: "extra" }, { word: "innings," }, { word: "creating" }, { word: "a" }, { word: "scoring" }, { word: "chance", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /fɜːrst/ /ˈbeɪsmən/", translation: "一垒手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "first" }, { word: "baseman" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ədˈvænst/", translation: "推进",
          subComponents: [{ startIndex: 0, words: [{ word: "advanced" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ðə/ /ˈrʌnər/", translation: "跑者",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "runner" }] }]
        },
        {
          start: 6, end: 9, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈsækrɪfaɪs/ /bʌnt/", translation: "以牺牲触击",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "sacrifice" }, { word: "bunt" }] }]
        },
        {
          start: 10, end: 12, label: "时间状语", phonetic: "/ɪn/ /ˈɛkstrə/ /ˈɪnɪŋz/", translation: "在延长赛",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "extra" }, { word: "innings," }] }]
        },
        {
          start: 13, end: 16, label: "结果状语", phonetic: "/kriˈeɪtɪŋ/ /ə/ /ˈskɔːrɪŋ/ /tʃæns/", translation: "创造得分机会",
          subComponents: [{ startIndex: 0, words: [{ word: "creating" }, { word: "a" }, { word: "scoring" }, { word: "chance", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球战术", text: "sacrifice bunt (牺牲触击), advance the runner (推进跑者), extra innings (延长赛), scoring chance (得分机会)" }
      ]
    },
    {
      id: "q_sports02_s140",
      chinese: "守门员在禁区内以一次果断的出击化解了对方的单刀威胁",
      english_full: "The goalkeeper neutralized the opponent's one-on-one threat with a decisive charge inside the penalty box.",
      words: [
        { word: "The" }, { word: "goalkeeper" }, { word: "neutralized" }, { word: "the" }, { word: "opponent's" }, { word: "one-on-one" }, { word: "threat" }, { word: "with" }, { word: "a" }, { word: "decisive" }, { word: "charge" }, { word: "inside" }, { word: "the" }, { word: "penalty" }, { word: "box", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɡoʊlˌkiːpər/", translation: "守门员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "goalkeeper" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈnuːtrəˌlaɪzd/", translation: "化解",
          subComponents: [{ startIndex: 0, words: [{ word: "neutralized" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ðə/ /əˈpoʊnənts/ /wʌn-ɒn-wʌn/ /θrɛt/", translation: "对方单刀威胁",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "opponent's" }, { word: "one-on-one" }, { word: "threat" }] }]
        },
        {
          start: 7, end: 14, label: "方式状语", phonetic: "/wɪð/ /ə/ /dɪˈsaɪsɪv/ /tʃɑːrdʒ/ /ɪnˈsaɪd/ /ðə/ /ˈpɛnəlti/ /bɒks/", translation: "在禁区内以果断出击",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "decisive" }, { word: "charge" }, { word: "inside" }, { word: "the" }, { word: "penalty" }, { word: "box", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球防守", text: "one-on-one threat (单刀威胁), decisive charge (果断出击), penalty box (禁区), neutralize (化解)" }
      ]
    },
    {
      id: "q_sports02_s141",
      chinese: "大前锋在抢七局中凭借一记关键的底角三分球扳平比分",
      english_full: "The power forward leveled the score with a clutch corner three-pointer in overtime.",
      words: [
        { word: "The" }, { word: "power" }, { word: "forward" }, { word: "leveled" }, { word: "the" }, { word: "score" }, { word: "with" }, { word: "a" }, { word: "clutch" }, { word: "corner" }, { word: "three-pointer" }, { word: "in" }, { word: "overtime", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈpaʊər/ /ˈfɔːrwərd/", translation: "大前锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "power" }, { word: "forward" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈlɛvəld/", translation: "扳平",
          subComponents: [{ startIndex: 0, words: [{ word: "leveled" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ðə/ /skɔːr/", translation: "比分",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "score" }] }]
        },
        {
          start: 6, end: 10, label: "方式状语", phonetic: "/wɪð/ /ə/ /klʌtʃ/ /ˈkɔːrnər/ /θriː-ˈpɔɪntər/", translation: "凭借关键底角三分球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "clutch" }, { word: "corner" }, { word: "three-pointer" }] }]
        },
        {
          start: 11, end: 12, label: "时间状语", phonetic: "/ɪn/ /ˈoʊvərˌtaɪm/", translation: "在加时赛",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "overtime", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "篮球词汇", text: "power forward (大前锋), clutch (关键的), corner three-pointer (底角三分), level the score (扳平比分)" }
      ]
    },
    {
      id: "q_sports02_s142",
      chinese: "网球双打搭档在网前完成一次默契的截击，直接得分",
      english_full: "The tennis doubles partners executed a seamless volley at the net for an immediate winner.",
      words: [
        { word: "The" }, { word: "tennis" }, { word: "doubles" }, { word: "partners" }, { word: "executed" }, { word: "a" }, { word: "seamless" }, { word: "volley" }, { word: "at" }, { word: "the" }, { word: "net" }, { word: "for" }, { word: "an" }, { word: "immediate" }, { word: "winner", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈtɛnɪs/ /ˈdʌbəlz/ /ˈpɑːrtnərz/", translation: "网球双打搭档",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tennis" }, { word: "doubles" }, { word: "partners" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɛksɪˌkjuːtɪd/", translation: "完成",
          subComponents: [{ startIndex: 0, words: [{ word: "executed" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ə/ /ˈsiːmləs/ /ˈvɒli/", translation: "默契截击",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "seamless" }, { word: "volley" }] }]
        },
        {
          start: 8, end: 10, label: "地点状语", phonetic: "/æt/ /ðə/ /nɛt/", translation: "在网前",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "the" }, { word: "net" }] }]
        },
        {
          start: 11, end: 14, label: "结果状语", phonetic: "/fɔːr/ /æn/ /ɪˈmiːdiət/ /ˈwɪnər/", translation: "直接得分",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "an" }, { word: "immediate" }, { word: "winner", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网球双打", text: "doubles partners (双打搭档), volley (截击), seamless (默契的), immediate winner (直接得分)" }
      ]
    },
    {
      id: "q_sports02_s143",
      chinese: "后腰在关键传球被断后迅速回追，完成一次关键的战术犯规",
      english_full: "The defensive midfielder made a crucial tactical foul after losing possession and sprinting back.",
      words: [
        { word: "The" }, { word: "defensive" }, { word: "midfielder" }, { word: "made" }, { word: "a" }, { word: "crucial" }, { word: "tactical" }, { word: "foul" }, { word: "after" }, { word: "losing" }, { word: "possession" }, { word: "and" }, { word: "sprinting" }, { word: "back", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /dɪˈfɛnsɪv/ /ˈmɪdfiːldər/", translation: "后腰",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "defensive" }, { word: "midfielder" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/meɪd/ /ə/ /ˈkruːʃəl/ /ˈtæktɪkəl/ /faʊl/", translation: "完成关键战术犯规",
          subComponents: [{ startIndex: 0, words: [{ word: "made" }, { word: "a" }, { word: "crucial" }, { word: "tactical" }, { word: "foul" }] }]
        },
        {
          start: 8, end: 10, label: "时间状语", phonetic: "/ˈæftər/ /ˈluːzɪŋ/ /pəˈzɛʃən/", translation: "在丢失控球权后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "losing" }, { word: "possession" }] }]
        },
        {
          start: 11, end: 13, label: "方式状语", phonetic: "/ænd/ /ˈsprɪntɪŋ/ /bæk/", translation: "并快速回追",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "sprinting" }, { word: "back", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球战术", text: "defensive midfielder (后腰), tactical foul (战术犯规), lose possession (丢失控球权), sprint back (回追)" }
      ]
    },
    {
      id: "q_sports02_s144",
      chinese: "接应二传在决胜局以一记完美的快攻传球撕开对方拦网",
      english_full: "The setter exploited a gap in the block with a perfect quick set in the deciding set.",
      words: [
        { word: "The" }, { word: "setter" }, { word: "exploited" }, { word: "a" }, { word: "gap" }, { word: "in" }, { word: "the" }, { word: "block" }, { word: "with" }, { word: "a" }, { word: "perfect" }, { word: "quick" }, { word: "set" }, { word: "in" }, { word: "the" }, { word: "deciding" }, { word: "set", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsɛtər/", translation: "接应二传",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "setter" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪkˈsplɔɪtɪd/", translation: "撕开/利用",
          subComponents: [{ startIndex: 0, words: [{ word: "exploited" }] }]
        },
        {
          start: 3, end: 7, label: "宾语", phonetic: "/ə/ /ɡæp/ /ɪn/ /ðə/ /blɒk/", translation: "拦网空隙",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "gap" }, { word: "in" }, { word: "the" }, { word: "block" }] }]
        },
        {
          start: 8, end: 12, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈpɜːrfɪkt/ /kwɪk/ /sɛt/", translation: "以完美快攻传球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "perfect" }, { word: "quick" }, { word: "set" }] }]
        },
        {
          start: 13, end: 16, label: "时间状语", phonetic: "/ɪn/ /ðə/ /dɪˈsaɪdɪŋ/ /sɛt/", translation: "在决胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "deciding" }, { word: "set", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "排球战术", text: "quick set (快攻传球), block (拦网), exploit a gap (利用空隙), deciding set (决胜局)" }
      ]
    },
    {
      id: "q_sports02_s145",
      chinese: "外野手在第九局以一记精彩的滑接接杀化解了对手的得分威胁",
      english_full: "The outfielder made a spectacular diving catch in the ninth inning, eliminating the opponent's scoring threat.",
      words: [
        { word: "The" }, { word: "outfielder" }, { word: "made" }, { word: "a" }, { word: "spectacular" }, { word: "diving" }, { word: "catch" }, { word: "in" }, { word: "the" }, { word: "ninth" }, { word: "inning," }, { word: "eliminating" }, { word: "the" }, { word: "opponent's" }, { word: "scoring" }, { word: "threat", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌaʊtˈfiːldər/", translation: "外野手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "outfielder" }] }]
        },
        {
          start: 2, end: 6, label: "谓语", phonetic: "/meɪd/ /ə/ /spɛkˈtækjʊlər/ /ˈdaɪvɪŋ/ /kætʃ/", translation: "完成精彩滑接接杀",
          subComponents: [{ startIndex: 0, words: [{ word: "made" }, { word: "a" }, { word: "spectacular" }, { word: "diving" }, { word: "catch" }] }]
        },
        {
          start: 7, end: 10, label: "时间状语", phonetic: "/ɪn/ /ðə/ /naɪnθ/ /ˈɪnɪŋ/", translation: "在第九局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "ninth" }, { word: "inning," }] }]
        },
        {
          start: 11, end: 15, label: "结果状语", phonetic: "/ɪˈlɪmɪˌneɪtɪŋ/ /ðə/ /əˈpoʊnənts/ /ˈskɔːrɪŋ/ /θrɛt/", translation: "化解对手得分威胁",
          subComponents: [{ startIndex: 0, words: [{ word: "eliminating" }, { word: "the" }, { word: "opponent's" }, { word: "scoring" }, { word: "threat", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "棒球词汇", text: "outfielder (外野手), diving catch (滑接接杀), ninth inning (第九局), eliminate (消除/化解)" }
      ]
    },
    {
      id: "q_sports02_s146",
      chinese: "羽毛球混双搭档在决胜局以一次精妙的网前扑杀锁定胜局",
      english_full: "The mixed doubles pair clinched the victory with a refined net kill in the deciding game.",
      words: [
        { word: "The" }, { word: "mixed" }, { word: "doubles" }, { word: "pair" }, { word: "clinched" }, { word: "the" }, { word: "victory" }, { word: "with" }, { word: "a" }, { word: "refined" }, { word: "net" }, { word: "kill" }, { word: "in" }, { word: "the" }, { word: "deciding" }, { word: "game", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /mɪkst/ /ˈdʌbəlz/ /pɛr/", translation: "羽毛球混双搭档",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "mixed" }, { word: "doubles" }, { word: "pair" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/klɪntʃt/", translation: "锁定",
          subComponents: [{ startIndex: 0, words: [{ word: "clinched" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ðə/ /ˈvɪktəri/", translation: "胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "victory" }] }]
        },
        {
          start: 7, end: 11, label: "方式状语", phonetic: "/wɪð/ /ə/ /rɪˈfaɪnd/ /nɛt/ /kɪl/", translation: "以精妙网前扑杀",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "refined" }, { word: "net" }, { word: "kill" }] }]
        },
        {
          start: 12, end: 15, label: "时间状语", phonetic: "/ɪn/ /ðə/ /dɪˈsaɪdɪŋ/ /ɡeɪm/", translation: "在决胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "deciding" }, { word: "game", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "羽毛球词汇", text: "mixed doubles (混双), net kill (网前扑杀), clinch the victory (锁定胜局), refined (精妙的)" }
      ]
    },
    {
      id: "q_sports02_s147",
      chinese: "美式橄榄球跑卫在第四节以一记长途冲跑达阵逆转比分",
      english_full: "The running back reversed the score with a long touchdown run in the fourth quarter.",
      words: [
        { word: "The" }, { word: "running" }, { word: "back" }, { word: "reversed" }, { word: "the" }, { word: "score" }, { word: "with" }, { word: "a" }, { word: "long" }, { word: "touchdown" }, { word: "run" }, { word: "in" }, { word: "the" }, { word: "fourth" }, { word: "quarter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrʌnɪŋ/ /bæk/", translation: "跑卫",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "running" }, { word: "back" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈvɜːrst/", translation: "逆转",
          subComponents: [{ startIndex: 0, words: [{ word: "reversed" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ðə/ /skɔːr/", translation: "比分",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "score" }] }]
        },
        {
          start: 6, end: 10, label: "方式状语", phonetic: "/wɪð/ /ə/ /lɒŋ/ /ˈtʌtʃdaʊn/ /rʌn/", translation: "以长途冲跑达阵",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "long" }, { word: "touchdown" }, { word: "run" }] }]
        },
        {
          start: 11, end: 14, label: "时间状语", phonetic: "/ɪn/ /ðə/ /fɔːrθ/ /ˈkwɔːrtər/", translation: "在第四节",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "fourth" }, { word: "quarter", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "美式橄榄球", text: "running back (跑卫), touchdown run (达阵冲跑), reverse the score (逆转比分), fourth quarter (第四节)" }
      ]
    },
    {
      id: "q_sports02_s148",
      chinese: "曲棍球前锋在点球角战术中以一记精准推射首开纪录",
      english_full: "The field hockey forward opened the scoring with a precise flick from a penalty corner.",
      words: [
        { word: "The" }, { word: "field" }, { word: "hockey" }, { word: "forward" }, { word: "opened" }, { word: "the" }, { word: "scoring" }, { word: "with" }, { word: "a" }, { word: "precise" }, { word: "flick" }, { word: "from" }, { word: "a" }, { word: "penalty" }, { word: "corner", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /fiːld/ /ˈhɒki/ /ˈfɔːrwərd/", translation: "曲棍球前锋",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "field" }, { word: "hockey" }, { word: "forward" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈoʊpənd/", translation: "首开",
          subComponents: [{ startIndex: 0, words: [{ word: "opened" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ðə/ /ˈskɔːrɪŋ/", translation: "纪录",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "scoring" }] }]
        },
        {
          start: 7, end: 14, label: "方式状语", phonetic: "/wɪð/ /ə/ /prɪˈsaɪs/ /flɪk/ /frɒm/ /ə/ /ˈpɛnəlti/ /ˈkɔːrnər/", translation: "在点球角战术中以精准推射",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "precise" }, { word: "flick" }, { word: "from" }, { word: "a" }, { word: "penalty" }, { word: "corner", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "曲棍球词汇", text: "field hockey (曲棍球), penalty corner (点球角), flick (推射), open the scoring (首开纪录)" }
      ]
    },
    {
      id: "q_sports02_s149",
      chinese: "壁球选手在决胜局以一次刁钻的贴墙低球迫使对手失误",
      english_full: "The squash player forced an error with a cunning low boast in the deciding game.",
      words: [
        { word: "The" }, { word: "squash" }, { word: "player" }, { word: "forced" }, { word: "an" }, { word: "error" }, { word: "with" }, { word: "a" }, { word: "cunning" }, { word: "low" }, { word: "boast" }, { word: "in" }, { word: "the" }, { word: "deciding" }, { word: "game", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /skwɒʃ/ /ˈpleɪər/", translation: "壁球选手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "squash" }, { word: "player" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/fɔːrst/", translation: "迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "forced" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/æn/ /ˈɛrər/", translation: "失误",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "error" }] }]
        },
        {
          start: 6, end: 10, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈkʌnɪŋ/ /loʊ/ /boʊst/", translation: "以刁钻贴墙低球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "cunning" }, { word: "low" }, { word: "boast" }] }]
        },
        {
          start: 11, end: 14, label: "时间状语", phonetic: "/ɪn/ /ðə/ /dɪˈsaɪdɪŋ/ /ɡeɪm/", translation: "在决胜局",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "deciding" }, { word: "game", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "壁球词汇", text: "squash (壁球), low boast (贴墙低球), force an error (迫使失误), cunning (刁钻的)" }
      ]
    },
    {
      id: "q_sports02_s150",
      chinese: "垒球投手在满垒局面下以一记变速球三振了对方最强击球手",
      english_full: "The softball pitcher struck out the opponent's best hitter with a devious changeup in a bases-loaded situation.",
      words: [
        { word: "The" }, { word: "softball" }, { word: "pitcher" }, { word: "struck" }, { word: "out" }, { word: "the" }, { word: "opponent's" }, { word: "best" }, { word: "hitter" }, { word: "with" }, { word: "a" }, { word: "devious" }, { word: "changeup" }, { word: "in" }, { word: "a" }, { word: "bases-loaded" }, { word: "situation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɒftbɔːl/ /ˈpɪtʃər/", translation: "垒球投手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "softball" }, { word: "pitcher" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/strʌk/ /aʊt/", translation: "三振",
          subComponents: [{ startIndex: 0, words: [{ word: "struck" }, { word: "out" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ðə/ /əˈpoʊnənts/ /bɛst/ /ˈhɪtər/", translation: "对方最强击球手",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "opponent's" }, { word: "best" }, { word: "hitter" }] }]
        },
        {
          start: 9, end: 12, label: "方式状语", phonetic: "/wɪð/ /ə/ /ˈdiːviəs/ /ˈtʃeɪndʒʌp/", translation: "以一记变速球",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "devious" }, { word: "changeup" }] }]
        },
        {
          start: 13, end: 16, label: "条件状语", phonetic: "/ɪn/ /ə/ /beɪsɪz-ˈloʊdɪd/ /ˌsɪtʃuˈeɪʃən/", translation: "在满垒局面下",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "a" }, { word: "bases-loaded" }, { word: "situation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "垒球词汇", text: "softball (垒球), changeup (变速球), strike out (三振), bases-loaded (满垒)" }
      ]
    },
    {
      id: "q_sports02_s151",
      chinese: "高尔夫选手在延长赛以一记精准的切杆进洞锁定冠军",
      english_full: "The golfer clinched the championship with a precise chip-in in a playoff.",
      words: [
        { word: "The" }, { word: "golfer" }, { word: "clinched" }, { word: "the" }, { word: "championship" }, { word: "with" }, { word: "a" }, { word: "precise" }, { word: "chip-in" }, { word: "in" }, { word: "a" }, { word: "playoff", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɡɒlfər/", translation: "高尔夫选手",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "golfer" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/klɪntʃt/", translation: "锁定",
          subComponents: [{ startIndex: 0, words: [{ word: "clinched" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /ˌtʃæmpiənˈʃɪp/", translation: "冠军",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "championship" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/wɪð/ /ə/ /prɪˈsaɪs/ /tʃɪp-ɪn/", translation: "以精准切杆进洞",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "precise" }, { word: "chip-in" }] }]
        },
        {
          start: 9, end: 11, label: "时间状语", phonetic: "/ɪn/ /ə/ /ˈpleɪˌɒf/", translation: "在延长赛/加赛",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "a" }, { word: "playoff", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "高尔夫词汇", text: "chip-in (切杆进洞), playoff (加赛), clinch the championship (锁定冠军), precise (精准的)" }
      ]
    },
    {
      id: "q_sports02_s152",
      chinese: "球队在赛前热身中系统演练了定位球战术，以应对对手的密集防守",
      english_full: "The team systematically rehearsed set-piece routines during the pre-match warm-up to counter the opponent's compact defense.",
      words: [
        { word: "The" }, { word: "team" }, { word: "systematically" }, { word: "rehearsed" }, { word: "set-piece" }, { word: "routines" }, { word: "during" }, { word: "the" }, { word: "pre-match" }, { word: "warm-up" }, { word: "to" }, { word: "counter" }, { word: "the" }, { word: "opponent's" }, { word: "compact" }, { word: "defense", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /tiːm/", translation: "球队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "team" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/ˌsɪstəˈmætɪkli/ /rɪˈhɜːrst/ /sɛt-piːs/ /ruːˈtiːnz/", translation: "系统演练定位球战术",
          subComponents: [{ startIndex: 0, words: [{ word: "systematically" }, { word: "rehearsed" }, { word: "set-piece" }, { word: "routines" }] }]
        },
        {
          start: 6, end: 9, label: "时间状语", phonetic: "/ˈdjʊrɪŋ/ /ðə/ /priː-mætʃ/ /ˈwɔːrm-ʌp/", translation: "在赛前热身中",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "pre-match" }, { word: "warm-up" }] }]
        },
        {
          start: 10, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈkaʊntər/ /ðə/ /əˈpoʊnənts/ /ˈkɒmpækt/ /dɪˈfɛns/", translation: "以应对对手密集防守",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "counter" }, { word: "the" }, { word: "opponent's" }, { word: "compact" }, { word: "defense", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球备战", text: "set-piece routine (定位球战术), pre-match warm-up (赛前热身), compact defense (密集防守), counter (应对)" }
      ]
    },
    {
      id: "q_sports02_s153",
      chinese: "体育总监在转会窗关闭前以创纪录的转会费签下了这位世界级前锋",
      english_full: "The sporting director signed the world-class striker for a record-breaking transfer fee before the transfer window closed.",
      words: [
        { word: "The" }, { word: "sporting" }, { word: "director" }, { word: "signed" }, { word: "the" }, { word: "world-class" }, { word: "striker" }, { word: "for" }, { word: "a" }, { word: "record-breaking" }, { word: "transfer" }, { word: "fee" }, { word: "before" }, { word: "the" }, { word: "transfer" }, { word: "window" }, { word: "closed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈspɔːrtɪŋ/ /dɪˈrɛktər/", translation: "体育总监",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sporting" }, { word: "director" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/saɪnd/", translation: "签下",
          subComponents: [{ startIndex: 0, words: [{ word: "signed" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /wɜːrld-klæs/ /ˈstraɪkər/", translation: "世界级前锋",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "world-class" }, { word: "striker" }] }]
        },
        {
          start: 7, end: 11, label: "方式状语", phonetic: "/fɔːr/ /ə/ /ˈrɛkɔːrd-ˌbreɪkɪŋ/ /ˈtrænsfər/ /fiː/", translation: "以创纪录转会费",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "a" }, { word: "record-breaking" }, { word: "transfer" }, { word: "fee" }] }]
        },
        {
          start: 12, end: 16, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈtrænsfər/ /ˈwɪndoʊ/ /kloʊzd/", translation: "在转会窗关闭前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "the" }, { word: "transfer" }, { word: "window" }, { word: "closed", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球商业", text: "sporting director (体育总监), record-breaking transfer fee (创纪录转会费), transfer window (转会窗), world-class (世界级的)" }
      ]
    },
    {
      id: "q_sports02_s154",
      chinese: "赛事主办方因极端天气状况将户外网球决赛推迟至室内场地",
      english_full: "The tournament organizers postponed the outdoor tennis final to an indoor venue due to extreme weather conditions.",
      words: [
        { word: "The" }, { word: "tournament" }, { word: "organizers" }, { word: "postponed" }, { word: "the" }, { word: "outdoor" }, { word: "tennis" }, { word: "final" }, { word: "to" }, { word: "an" }, { word: "indoor" }, { word: "venue" }, { word: "due" }, { word: "to" }, { word: "extreme" }, { word: "weather" }, { word: "conditions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈtʊrnəmənt/ /ˈɔːrɡənaɪzərz/", translation: "赛事主办方",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tournament" }, { word: "organizers" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/poʊstˈpoʊnd/", translation: "推迟",
          subComponents: [{ startIndex: 0, words: [{ word: "postponed" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ðə/ /ˈaʊtdɔːr/ /ˈtɛnɪs/ /ˈfaɪnəl/", translation: "户外网球决赛",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "outdoor" }, { word: "tennis" }, { word: "final" }] }]
        },
        {
          start: 8, end: 11, label: "方向状语", phonetic: "/tuː/ /æn/ /ˈɪndɔːr/ /ˈvɛnjuː/", translation: "至室内场地",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "an" }, { word: "indoor" }, { word: "venue" }] }]
        },
        {
          start: 12, end: 16, label: "原因状语", phonetic: "/djuː/ /tuː/ /ɪkˈstriːm/ /ˈwɛðər/ /kənˈdɪʃənz/", translation: "因极端天气状况",
          subComponents: [{ startIndex: 0, words: [{ word: "due" }, { word: "to" }, { word: "extreme" }, { word: "weather" }, { word: "conditions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "赛事管理", text: "tournament organizer (赛事主办方), postpone (推迟), indoor venue (室内场地), extreme weather conditions (极端天气)" }
      ]
    },
    {
      id: "q_sports02_s155",
      chinese: "球队队长在赛后采访中强调，团队精神比个人数据更为关键",
      english_full: "The team captain emphasized in the post-match interview that team spirit matters more than individual statistics.",
      words: [
        { word: "The" }, { word: "team" }, { word: "captain" }, { word: "emphasized" }, { word: "in" }, { word: "the" }, { word: "post-match" }, { word: "interview" }, { word: "that" }, { word: "team" }, { word: "spirit" }, { word: "matters" }, { word: "more" }, { word: "than" }, { word: "individual" }, { word: "statistics", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /tiːm/ /ˈkæptɪn/", translation: "球队队长",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "team" }, { word: "captain" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɛmfəsaɪzd/", translation: "强调",
          subComponents: [{ startIndex: 0, words: [{ word: "emphasized" }] }]
        },
        {
          start: 4, end: 7, label: "地点状语", phonetic: "/ɪn/ /ðə/ /poʊst-mætʃ/ /ˈɪntərvjuː/", translation: "在赛后采访中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "post-match" }, { word: "interview" }] }]
        },
        {
          start: 8, end: 15, label: "宾语从句", phonetic: "/ðæt/ /tiːm/ /ˈspɪrɪt/ /ˈmætərz/ /mɔːr/ /ðæn/ /ˌɪndɪˈvɪdʒuəl/ /stəˈtɪstɪks/", translation: "团队精神比个人数据更为关键",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "team" }, { word: "spirit" }, { word: "matters" }, { word: "more" }, { word: "than" }, { word: "individual" }, { word: "statistics", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "体育精神", text: "post-match interview (赛后采访), team spirit (团队精神), individual statistics (个人数据), emphasize (强调)" }
      ]
    },
    {
      id: "q_sports02_s156",
      chinese: "运动科学家通过实时数据分析优化了球员在高压比赛中的体能分配",
      english_full: "Sports scientists optimized the players' energy allocation during high-pressure matches through real-time data analysis.",
      words: [
        { word: "Sports" }, { word: "scientists" }, { word: "optimized" }, { word: "the" }, { word: "players'" }, { word: "energy" }, { word: "allocation" }, { word: "during" }, { word: "high-pressure" }, { word: "matches" }, { word: "through" }, { word: "real-time" }, { word: "data" }, { word: "analysis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/spɔːrts/ /ˈsaɪəntɪsts/", translation: "运动科学家",
          subComponents: [{ startIndex: 0, words: [{ word: "Sports" }, { word: "scientists" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒptɪmaɪzd/", translation: "优化",
          subComponents: [{ startIndex: 0, words: [{ word: "optimized" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ðə/ /ˈpleɪərz/ /ˈɛnərdʒi/ /ˌæləˈkeɪʃən/", translation: "球员体能分配",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "players'" }, { word: "energy" }, { word: "allocation" }] }]
        },
        {
          start: 7, end: 9, label: "时间状语", phonetic: "/ˈdjʊrɪŋ/ /haɪ-ˈprɛʃər/ /ˈmætʃɪz/", translation: "在高压比赛中",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "high-pressure" }, { word: "matches" }] }]
        },
        {
          start: 10, end: 13, label: "方式状语", phonetic: "/θruː/ /riːl-taɪm/ /ˈdeɪtə/ /əˈnælɪsɪs/", translation: "通过实时数据分析",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "real-time" }, { word: "data" }, { word: "analysis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运动科学", text: "energy allocation (体能分配), real-time data analysis (实时数据分析), high-pressure match (高压比赛), optimize (优化)" }
      ]
    },
    {
      id: "q_sports02_s157",
      chinese: "裁判委员会在赛后审查中认定，那次禁区内的接触不构成点球",
      english_full: "The referee committee ruled in the post-match review that the contact inside the penalty area did not constitute a penalty.",
      words: [
        { word: "The" }, { word: "referee" }, { word: "committee" }, { word: "ruled" }, { word: "in" }, { word: "the" }, { word: "post-match" }, { word: "review" }, { word: "that" }, { word: "the" }, { word: "contact" }, { word: "inside" }, { word: "the" }, { word: "penalty" }, { word: "area" }, { word: "did" }, { word: "not" }, { word: "constitute" }, { word: "a" }, { word: "penalty", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌrɛfəˈriː/ /kəˈmɪti/", translation: "裁判委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "referee" }, { word: "committee" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ruːld/", translation: "认定",
          subComponents: [{ startIndex: 0, words: [{ word: "ruled" }] }]
        },
        {
          start: 4, end: 7, label: "地点状语", phonetic: "/ɪn/ /ðə/ /poʊst-mætʃ/ /rɪˈvjuː/", translation: "在赛后审查中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "post-match" }, { word: "review" }] }]
        },
        {
          start: 8, end: 19, label: "宾语从句", phonetic: "/ðæt/ /ðə/ /ˈkɒntækt/ /ɪnˈsaɪd/ /ðə/ /ˈpɛnəlti/ /ˈɛriə/ /dɪd/ /nɒt/ /ˈkɒnstɪtjuːt/ /ə/ /ˈpɛnəlti/", translation: "禁区内接触不构成点球",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "contact" }, { word: "inside" }, { word: "the" }, { word: "penalty" }, { word: "area" }, { word: "did" }, { word: "not" }, { word: "constitute" }, { word: "a" }, { word: "penalty", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球判罚", text: "referee committee (裁判委员会), post-match review (赛后审查), constitute a penalty (构成点球), penalty area (禁区)" }
      ]
    },
    {
      id: "q_sports02_s158",
      chinese: "青训学院通过科学的训练体系培养具备国际竞争力的年轻球员",
      english_full: "The youth academy cultivates internationally competitive young players through a scientific training system.",
      words: [
        { word: "The" }, { word: "youth" }, { word: "academy" }, { word: "cultivates" }, { word: "internationally" }, { word: "competitive" }, { word: "young" }, { word: "players" }, { word: "through" }, { word: "a" }, { word: "scientific" }, { word: "training" }, { word: "system", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /juːθ/ /ˈækədəmi/", translation: "青训学院",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "youth" }, { word: "academy" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈkʌltɪveɪts/", translation: "培养",
          subComponents: [{ startIndex: 0, words: [{ word: "cultivates" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ˌɪntərˈnæʃənəli/ /kəmˈpɛtɪtɪv/ /jʌŋ/ /ˈpleɪərz/", translation: "具备国际竞争力的年轻球员",
          subComponents: [{ startIndex: 0, words: [{ word: "internationally" }, { word: "competitive" }, { word: "young" }, { word: "players" }] }]
        },
        {
          start: 8, end: 12, label: "方式状语", phonetic: "/θruː/ /ə/ /ˌsaɪənˈtɪfɪk/ /ˈtreɪnɪŋ/ /ˈsɪstəm/", translation: "通过科学训练体系",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "a" }, { word: "scientific" }, { word: "training" }, { word: "system", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "青训体系", text: "youth academy (青训学院), internationally competitive (具备国际竞争力), scientific training system (科学训练体系), cultivate (培养)" }
      ]
    },
    {
      id: "q_sports02_s159",
      chinese: "赞助商在合同中明确要求主力球员必须出席所有官方宣传活动",
      english_full: "The sponsor explicitly required in the contract that star players must attend all official promotional events.",
      words: [
        { word: "The" }, { word: "sponsor" }, { word: "explicitly" }, { word: "required" }, { word: "in" }, { word: "the" }, { word: "contract" }, { word: "that" }, { word: "star" }, { word: "players" }, { word: "must" }, { word: "attend" }, { word: "all" }, { word: "official" }, { word: "promotional" }, { word: "events", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈspɒnsər/", translation: "赞助商",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sponsor" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/ɪkˈsplɪsɪtli/ /rɪˈkwaɪərd/", translation: "明确要求",
          subComponents: [{ startIndex: 0, words: [{ word: "explicitly" }, { word: "required" }] }]
        },
        {
          start: 4, end: 6, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ˈkɒntrækt/", translation: "在合同中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "contract" }] }]
        },
        {
          start: 7, end: 15, label: "宾语从句", phonetic: "/ðæt/ /stɑːr/ /ˈpleɪərz/ /mʌst/ /əˈtɛnd/ /ɔːl/ /əˈfɪʃəl/ /prəˈmoʊʃənəl/ /ɪˈvɛnts/", translation: "主力球员必须出席所有官方宣传活动",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "star" }, { word: "players" }, { word: "must" }, { word: "attend" }, { word: "all" }, { word: "official" }, { word: "promotional" }, { word: "events", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "体育商业", text: "sponsor (赞助商), star player (主力球员), promotional event (宣传活动), explicitly require (明确要求)" }
      ]
    },
    {
      id: "q_sports02_s160",
      chinese: "球迷协会发起倡议，呼吁在重大赛事中杜绝种族歧视行为",
      english_full: "The supporters' association launched an initiative calling for the elimination of racial discrimination at major tournaments.",
      words: [
        { word: "The" }, { word: "supporters'" }, { word: "association" }, { word: "launched" }, { word: "an" }, { word: "initiative" }, { word: "calling" }, { word: "for" }, { word: "the" }, { word: "elimination" }, { word: "of" }, { word: "racial" }, { word: "discrimination" }, { word: "at" }, { word: "major" }, { word: "tournaments", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /səˈpɔːrtərz/ /əˌsoʊsiˈeɪʃən/", translation: "球迷协会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "supporters'" }, { word: "association" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/lɔːntʃt/", translation: "发起",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/æn/ /ɪˈnɪʃətɪv/", translation: "倡议",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "initiative" }] }]
        },
        {
          start: 6, end: 15, label: "后置定语", phonetic: "/ˈkɔːlɪŋ/ /fɔːr/ /ðə/ /ɪˌlɪmɪˈneɪʃən/ /ɒv/ /ˈreɪʃəl/ /dɪˌskrɪmɪˈneɪʃən/ /æt/ /ˈmeɪdʒər/ /ˈtʊrnəmənts/", translation: "呼吁在重大赛事中杜绝种族歧视",
          subComponents: [{ startIndex: 0, words: [{ word: "calling" }, { word: "for" }, { word: "the" }, { word: "elimination" }, { word: "of" }, { word: "racial" }, { word: "discrimination" }, { word: "at" }, { word: "major" }, { word: "tournaments", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "体育社会", text: "supporters' association (球迷协会), racial discrimination (种族歧视), major tournament (重大赛事), initiative (倡议)" }
      ]
    },
    {
      id: "q_sports02_s161",
      chinese: "运动装备制造商推出采用尖端材料的新型比赛用球，以提升控球精度",
      english_full: "The sporting goods manufacturer launched a new match ball featuring cutting-edge materials to enhance ball control precision.",
      words: [
        { word: "The" }, { word: "sporting" }, { word: "goods" }, { word: "manufacturer" }, { word: "launched" }, { word: "a" }, { word: "new" }, { word: "match" }, { word: "ball" }, { word: "featuring" }, { word: "cutting-edge" }, { word: "materials" }, { word: "to" }, { word: "enhance" }, { word: "ball" }, { word: "control" }, { word: "precision", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈspɔːrtɪŋ/ /ɡʊdz/ /ˌmænjuˈfæktʃərər/", translation: "运动装备制造商",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sporting" }, { word: "goods" }, { word: "manufacturer" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/lɔːntʃt/", translation: "推出",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ə/ /njuː/ /mætʃ/ /bɔːl/", translation: "新型比赛用球",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "new" }, { word: "match" }, { word: "ball" }] }]
        },
        {
          start: 9, end: 11, label: "后置定语", phonetic: "/ˈfiːtʃərɪŋ/ /ˈkʌtɪŋ-ɛdʒ/ /məˈtɪriəlz/", translation: "采用尖端材料",
          subComponents: [{ startIndex: 0, words: [{ word: "featuring" }, { word: "cutting-edge" }, { word: "materials" }] }]
        },
        {
          start: 12, end: 16, label: "目的状语", phonetic: "/tuː/ /ɪnˈhæns/ /bɔːl/ /kənˈtroʊl/ /prɪˈsɪʒən/", translation: "以提升控球精度",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "enhance" }, { word: "ball" }, { word: "control" }, { word: "precision", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运动装备", text: "sporting goods manufacturer (运动装备制造商), cutting-edge materials (尖端材料), ball control precision (控球精度), match ball (比赛用球)" }
      ]
    },
    {
      id: "q_sports02_s162",
      chinese: "国际足联在赛后报告中指出，视频助理裁判显著提高了判罚准确性",
      english_full: "FIFA noted in its post-match report that VAR significantly improved the accuracy of officiating.",
      words: [
        { word: "FIFA" }, { word: "noted" }, { word: "in" }, { word: "its" }, { word: "post-match" }, { word: "report" }, { word: "that" }, { word: "VAR" }, { word: "significantly" }, { word: "improved" }, { word: "the" }, { word: "accuracy" }, { word: "of" }, { word: "officiating", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈfiːfə/", translation: "国际足联",
          subComponents: [{ startIndex: 0, words: [{ word: "FIFA" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/noʊtɪd/", translation: "指出",
          subComponents: [{ startIndex: 0, words: [{ word: "noted" }] }]
        },
        {
          start: 2, end: 5, label: "地点状语", phonetic: "/ɪn/ /ɪts/ /poʊst-mætʃ/ /rɪˈpɔːrt/", translation: "在赛后报告中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "its" }, { word: "post-match" }, { word: "report" }] }]
        },
        {
          start: 6, end: 13, label: "宾语从句", phonetic: "/ðæt/ /viː-eɪ-ɑːr/ /sɪɡˈnɪfɪkəntli/ /ɪmˈpruːvd/ /ðə/ /ˈækjərəsi/ /ɒv/ /əˈfɪʃieɪtɪŋ/", translation: "视频助理裁判显著提高了判罚准确性",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "VAR" }, { word: "significantly" }, { word: "improved" }, { word: "the" }, { word: "accuracy" }, { word: "of" }, { word: "officiating", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "足球科技", text: "FIFA (国际足联), VAR (视频助理裁判), officiating (判罚), accuracy (准确性)" }
      ]
    },
    {
      id: "q_sports02_s163",
      chinese: "球队医疗团队通过严格的康复计划帮助受伤主力在关键赛事前复出",
      english_full: "The team's medical staff helped the injured star return before the crucial fixture through a rigorous rehabilitation program.",
      words: [
        { word: "The" }, { word: "team's" }, { word: "medical" }, { word: "staff" }, { word: "helped" }, { word: "the" }, { word: "injured" }, { word: "star" }, { word: "return" }, { word: "before" }, { word: "the" }, { word: "crucial" }, { word: "fixture" }, { word: "through" }, { word: "a" }, { word: "rigorous" }, { word: "rehabilitation" }, { word: "program", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /tiːmz/ /ˈmɛdɪkəl/ /stæf/", translation: "球队医疗团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "team's" }, { word: "medical" }, { word: "staff" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hɛlpt/", translation: "帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "helped" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ðə/ /ˈɪndʒərd/ /stɑːr/ /rɪˈtɜːrn/", translation: "受伤主力复出",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "injured" }, { word: "star" }, { word: "return" }] }]
        },
        {
          start: 9, end: 12, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈkruːʃəl/ /ˈfɪkstʃər/", translation: "在关键赛事前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "the" }, { word: "crucial" }, { word: "fixture" }] }]
        },
        {
          start: 13, end: 17, label: "方式状语", phonetic: "/θruː/ /ə/ /ˈrɪɡərəs/ /riːˌhæbɪlɪˈteɪʃən/ /ˈproʊɡræm/", translation: "通过严格康复计划",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "a" }, { word: "rigorous" }, { word: "rehabilitation" }, { word: "program", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运动医学", text: "medical staff (医疗团队), rehabilitation program (康复计划), crucial fixture (关键赛事), rigorous (严格的)" }
      ]
    },
    {
      id: "q_sports02_s164",
      chinese: "赛事转播方通过多机位慢动作回放提升了观众的观赛体验",
      english_full: "The broadcast provider enhanced the viewing experience for spectators through multi-angle slow-motion replays.",
      words: [
        { word: "The" }, { word: "broadcast" }, { word: "provider" }, { word: "enhanced" }, { word: "the" }, { word: "viewing" }, { word: "experience" }, { word: "for" }, { word: "spectators" }, { word: "through" }, { word: "multi-angle" }, { word: "slow-motion" }, { word: "replays", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈbrɔːdkæst/ /prəˈvaɪdər/", translation: "赛事转播方",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "broadcast" }, { word: "provider" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈhænst/", translation: "提升",
          subComponents: [{ startIndex: 0, words: [{ word: "enhanced" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /ˈvjuːɪŋ/ /ɪkˈspɪriəns/", translation: "观赛体验",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "viewing" }, { word: "experience" }] }]
        },
        {
          start: 7, end: 8, label: "对象状语", phonetic: "/fɔːr/ /ˈspɛkteɪtərz/", translation: "为观众",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "spectators" }] }]
        },
        {
          start: 9, end: 12, label: "方式状语", phonetic: "/θruː/ /ˌmʌlti-ˈæŋɡəl/ /sloʊ-ˈmoʊʃən/ /rɪˈpleɪz/", translation: "通过多机位慢动作回放",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "multi-angle" }, { word: "slow-motion" }, { word: "replays", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "赛事转播", text: "broadcast provider (转播方), slow-motion replay (慢动作回放), viewing experience (观赛体验), multi-angle (多机位的)" }
      ]
    },
    {
      id: "q_sports02_s165",
      chinese: "教练组在赛前分析中识别出对手右路的防守漏洞并制定了针对性战术",
      english_full: "The coaching staff identified a defensive vulnerability on the opponent's right flank and devised a targeted game plan in pre-match analysis.",
      words: [
        { word: "The" }, { word: "coaching" }, { word: "staff" }, { word: "identified" }, { word: "a" }, { word: "defensive" }, { word: "vulnerability" }, { word: "on" }, { word: "the" }, { word: "opponent's" }, { word: "right" }, { word: "flank" }, { word: "and" }, { word: "devised" }, { word: "a" }, { word: "targeted" }, { word: "game" }, { word: "plan" }, { word: "in" }, { word: "pre-match" }, { word: "analysis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkoʊtʃɪŋ/ /stæf/", translation: "教练组",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "coaching" }, { word: "staff" }] }]
        },
        {
          start: 3, end: 3, label: "谓语1", phonetic: "/aɪˈdɛntɪfaɪd/", translation: "识别出",
          subComponents: [{ startIndex: 0, words: [{ word: "identified" }] }]
        },
        {
          start: 4, end: 11, label: "宾语1", phonetic: "/ə/ /dɪˈfɛnsɪv/ /ˌvʌlnərəˈbɪlɪti/ /ɒn/ /ðə/ /əˈpoʊnənts/ /raɪt/ /flæŋk/", translation: "对手右路防守漏洞",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "defensive" }, { word: "vulnerability" }, { word: "on" }, { word: "the" }, { word: "opponent's" }, { word: "right" }, { word: "flank" }] }]
        },
        {
          start: 12, end: 12, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 13, end: 13, label: "谓语2", phonetic: "/dɪˈvaɪzd/", translation: "制定",
          subComponents: [{ startIndex: 0, words: [{ word: "devised" }] }]
        },
        {
          start: 14, end: 17, label: "宾语2", phonetic: "/ə/ /ˈtɑːrɡɪtɪd/ /ɡeɪm/ /plæn/", translation: "针对性战术",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "targeted" }, { word: "game" }, { word: "plan" }] }]
        },
        {
          start: 18, end: 20, label: "时间状语", phonetic: "/ɪn/ /priː-mætʃ/ /əˈnælɪsɪs/", translation: "在赛前分析中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "pre-match" }, { word: "analysis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "战术分析", text: "defensive vulnerability (防守漏洞), right flank (右路), targeted game plan (针对性战术), pre-match analysis (赛前分析)" }
      ]
    },
    {
      id: "q_sports02_s166",
      chinese: "职业联赛引入工资帽制度，旨在促进各支球队之间的竞技平衡",
      english_full: "The professional league introduced a salary cap system aimed at promoting competitive balance among participating teams.",
      words: [
        { word: "The" }, { word: "professional" }, { word: "league" }, { word: "introduced" }, { word: "a" }, { word: "salary" }, { word: "cap" }, { word: "system" }, { word: "aimed" }, { word: "at" }, { word: "promoting" }, { word: "competitive" }, { word: "balance" }, { word: "among" }, { word: "participating" }, { word: "teams", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /prəˈfɛʃənəl/ /liːɡ/", translation: "职业联赛",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "professional" }, { word: "league" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˌɪntrəˈdjuːst/", translation: "引入",
          subComponents: [{ startIndex: 0, words: [{ word: "introduced" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ə/ /ˈsæləri/ /kæp/ /ˈsɪstəm/", translation: "工资帽制度",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "salary" }, { word: "cap" }, { word: "system" }] }]
        },
        {
          start: 8, end: 15, label: "后置定语", phonetic: "/eɪmd/ /æt/ /prəˈmoʊtɪŋ/ /kəmˈpɛtɪtɪv/ /ˈbæləns/ /əˈmʌŋ/ /pɑːrˈtɪsɪpeɪtɪŋ/ /tiːmz/", translation: "旨在促进各队竞技平衡",
          subComponents: [{ startIndex: 0, words: [{ word: "aimed" }, { word: "at" }, { word: "promoting" }, { word: "competitive" }, { word: "balance" }, { word: "among" }, { word: "participating" }, { word: "teams", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "联赛管理", text: "salary cap (工资帽), competitive balance (竞技平衡), professional league (职业联赛), aimed at (旨在)" }
      ]
    },
    {
      id: "q_sports02_s167",
      chinese: "运动员在赛前心理训练中学习如何在关键罚球时刻保持专注",
      english_full: "Athletes learn in pre-competition mental training how to maintain focus during critical free-throw moments.",
      words: [
        { word: "Athletes" }, { word: "learn" }, { word: "in" }, { word: "pre-competition" }, { word: "mental" }, { word: "training" }, { word: "how" }, { word: "to" }, { word: "maintain" }, { word: "focus" }, { word: "during" }, { word: "critical" }, { word: "free-throw" }, { word: "moments", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈæθliːts/", translation: "运动员",
          subComponents: [{ startIndex: 0, words: [{ word: "Athletes" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/lɜːrn/", translation: "学习",
          subComponents: [{ startIndex: 0, words: [{ word: "learn" }] }]
        },
        {
          start: 2, end: 5, label: "地点状语", phonetic: "/ɪn/ /priː-ˌkɒmpəˈtɪʃən/ /ˈmɛntəl/ /ˈtreɪnɪŋ/", translation: "在赛前心理训练中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "pre-competition" }, { word: "mental" }, { word: "training" }] }]
        },
        {
          start: 6, end: 13, label: "宾语从句", phonetic: "/haʊ/ /tuː/ /meɪnˈteɪn/ /ˈfoʊkəs/ /ˈdjʊrɪŋ/ /ˈkrɪtɪkəl/ /friː-θroʊ/ /ˈmoʊmənts/", translation: "如何在关键罚球时刻保持专注",
          subComponents: [{ startIndex: 0, words: [{ word: "how" }, { word: "to" }, { word: "maintain" }, { word: "focus" }, { word: "during" }, { word: "critical" }, { word: "free-throw" }, { word: "moments", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "运动心理", text: "mental training (心理训练), free-throw moment (罚球时刻), maintain focus (保持专注), pre-competition (赛前的)" }
      ]
    },
    {
      id: "q_sports02_s168",
      chinese: "赛事组委会在开幕式上演出了融合传统与现代的精彩文艺表演",
      english_full: "The organizing committee presented a spectacular cultural performance blending tradition and modernity at the opening ceremony.",
      words: [
        { word: "The" }, { word: "organizing" }, { word: "committee" }, { word: "presented" }, { word: "a" }, { word: "spectacular" }, { word: "cultural" }, { word: "performance" }, { word: "blending" }, { word: "tradition" }, { word: "and" }, { word: "modernity" }, { word: "at" }, { word: "the" }, { word: "opening" }, { word: "ceremony", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ði/ /ˈɔːrɡənaɪzɪŋ/ /kəˈmɪti/", translation: "赛事组委会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "organizing" }, { word: "committee" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prɪˈzɛntɪd/", translation: "呈现/演出",
          subComponents: [{ startIndex: 0, words: [{ word: "presented" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ə/ /spɛkˈtækjʊlər/ /ˈkʌltʃərəl/ /pərˈfɔːrməns/", translation: "精彩文艺表演",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "spectacular" }, { word: "cultural" }, { word: "performance" }] }]
        },
        {
          start: 8, end: 11, label: "后置定语", phonetic: "/ˈblɛndɪŋ/ /trəˈdɪʃən/ /ænd/ /məˈdɜːrnɪti/", translation: "融合传统与现代",
          subComponents: [{ startIndex: 0, words: [{ word: "blending" }, { word: "tradition" }, { word: "and" }, { word: "modernity" }] }]
        },
        {
          start: 12, end: 15, label: "地点状语", phonetic: "/æt/ /ðə/ /ˈoʊpənɪŋ/ /ˈsɛrəmoʊni/", translation: "在开幕式上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "the" }, { word: "opening" }, { word: "ceremony", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "赛事文化", text: "organizing committee (组委会), opening ceremony (开幕式), blend tradition and modernity (融合传统与现代), cultural performance (文艺表演)" }
      ]
    },
    {
      id: "q_sports02_s169",
      chinese: "在这场关键的篮球赛中，团队合作比个人英雄主义更为重要",
      english_full: "In this crucial basketball match, teamwork takes precedence over individual heroism.",
      words: [
        { word: "In" }, { word: "this" }, { word: "crucial" }, { word: "basketball" }, { word: "match," }, { word: "teamwork" }, { word: "takes" }, { word: "precedence" }, { word: "over" }, { word: "individual" }, { word: "heroism", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "地点/场景状语", phonetic: "/ɪn/ /ðɪs/ /ˈkruːʃəl/ /ˈbæskɪtbɔːl/ /mætʃ/", translation: "在这场关键的篮球赛中",
          subComponents: [{ startIndex: 0, words: [{ word: "In" }, { word: "this" }, { word: "crucial" }, { word: "basketball" }, { word: "match," }] }]
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
          start: 7, end: 7, label: "宾语", phonetic: "/prɪˈsɛdəns/", translation: "优先地位",
          subComponents: [{ startIndex: 0, words: [{ word: "precedence" }] }]
        },
        {
          start: 8, end: 10, label: "比较状语", phonetic: "/ˈoʊvər/ /ˌɪndɪˈvɪdʒuəl/ /ˈhɪroʊɪzəm/", translation: "于个人英雄主义",
          subComponents: [{ startIndex: 0, words: [{ word: "over" }, { word: "individual" }, { word: "heroism", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "体育精神", text: "teamwork (团队合作), take precedence over (比…更重要/优先于), individual heroism (个人英雄主义), crucial match (关键比赛)" }
      ]
    }
  ]
};
