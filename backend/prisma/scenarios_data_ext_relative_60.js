export const extensions = {
  "module_relative": [
    {
      id: "q_relative_s200",
      chinese: "主导并购谈判的那位风险投资家已辞去董事会职务",
      english_full: "The venture capitalist who spearheaded the merger negotiations has resigned from the board.",
      words: [
        { word: "The" },
        { word: "venture" },
        { word: "capitalist" },
        { word: "who" },
        { word: "spearheaded" },
        { word: "the" },
        { word: "merger" },
        { word: "negotiations" },
        { word: "has" },
        { word: "resigned" },
        { word: "from" },
        { word: "the" },
        { word: "board", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈvɛntʃər/ /ˈkæpɪtəlɪst/", translation: "那位风险投资家",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "venture" },
              { word: "capitalist" },
            ] }
          ]
        },
        {
          start: 3, end: 7, label: "定语从句", phonetic: "/huː/ /ˈspɪərˌhɛdɪd/ /ðə/ /ˈmɜːrdʒər/ /nɪˌɡoʊʃiˈeɪʃənz/", translation: "主导并购谈判的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "who" },
              { word: "spearheaded" },
              { word: "the" },
              { word: "merger" },
              { word: "negotiations" },
            ] }
          ]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /rɪˈzaɪnd/", translation: "已辞去",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "resigned" },
            ] }
          ]
        },
        {
          start: 10, end: 12, label: "状语", phonetic: "/frɒm/ /ðə/ /bɔːrd/", translation: "董事会职务",
          subComponents: [
            { startIndex: 0, words: [
              { word: "from" },
              { word: "the" },
              { word: "board", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，修饰 venture capitalist，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s201",
      chinese: "代表们昨天签署的那项条约建立了一条新的贸易走廊",
      english_full: "The treaty that the delegates signed yesterday establishes a new trade corridor.",
      words: [
        { word: "The" },
        { word: "treaty" },
        { word: "that" },
        { word: "the" },
        { word: "delegates" },
        { word: "signed" },
        { word: "yesterday" },
        { word: "establishes" },
        { word: "a" },
        { word: "new" },
        { word: "trade" },
        { word: "corridor", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈtriːti/", translation: "那项条约",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "treaty" },
            ] }
          ]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/ðæt/ /ðə/ /ˈdɛlɪɡəts/ /saɪnd/ /ˈjɛstərdeɪ/", translation: "代表昨天签署的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "that" },
              { word: "the" },
              { word: "delegates" },
              { word: "signed" },
              { word: "yesterday" },
            ] }
          ]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/ɪˈstæblɪʃɪz/", translation: "建立",
          subComponents: [
            { startIndex: 0, words: [
              { word: "establishes" },
            ] }
          ]
        },
        {
          start: 8, end: 11, label: "宾语", phonetic: "/ə/ /njuː/ /treɪd/ /ˈkɒrɪdɔːr/", translation: "一条新的贸易走廊",
          subComponents: [
            { startIndex: 0, words: [
              { word: "a" },
              { word: "new" },
              { word: "trade" },
              { word: "corridor", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作 signed 的宾语，修饰 treaty，口语中可省略。" }
      ]
    },
    {
      id: "q_relative_s202",
      chinese: "其研究成果挑战了传统认知的那位研究员获得了广泛赞誉",
      english_full: "The researcher whose findings challenged conventional wisdom received widespread acclaim.",
      words: [
        { word: "The" },
        { word: "researcher" },
        { word: "whose" },
        { word: "findings" },
        { word: "challenged" },
        { word: "conventional" },
        { word: "wisdom" },
        { word: "received" },
        { word: "widespread" },
        { word: "acclaim", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /rɪˈsɜːrtʃər/", translation: "那位研究员",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "researcher" },
            ] }
          ]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/huːz/ /ˈfaɪndɪŋz/ /ˈtʃælɪndʒd/ /kənˈvɛnʃənəl/ /ˈwɪzdəm/", translation: "其研究成果挑战了传统认知的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "whose" },
              { word: "findings" },
              { word: "challenged" },
              { word: "conventional" },
              { word: "wisdom" },
            ] }
          ]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/rɪˈsiːvd/", translation: "获得",
          subComponents: [
            { startIndex: 0, words: [
              { word: "received" },
            ] }
          ]
        },
        {
          start: 8, end: 9, label: "宾语", phonetic: "/ˈwaɪdspreɪd/ /əˈkleɪm/", translation: "广泛赞誉",
          subComponents: [
            { startIndex: 0, words: [
              { word: "widespread" },
              { word: "acclaim", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose 在从句中作定语，表示 findings 与 researcher 的所属关系。" }
      ]
    },
    {
      id: "q_relative_s203",
      chinese: "这份超出市场预期的季度报告引发了股价反弹",
      english_full: "The quarterly report, which exceeded market expectations, triggered a rally in share prices.",
      words: [
        { word: "The" },
        { word: "quarterly" },
        { word: "report" },
        { word: "," },
        { word: "which" },
        { word: "exceeded" },
        { word: "market" },
        { word: "expectations" },
        { word: "," },
        { word: "triggered" },
        { word: "a" },
        { word: "rally" },
        { word: "in" },
        { word: "share" },
        { word: "prices", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkwɔːrtərli/ /rɪˈpɔːrt/", translation: "这份季度报告",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "quarterly" },
              { word: "report" },
            ] }
          ]
        },
        {
          start: 4, end: 7, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /ɪkˈsiːdɪd/ /ˈmɑːrkɪt/ /ˌɛkspɛkˈteɪʃənz/", translation: "超出市场预期的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "which" },
              { word: "exceeded" },
              { word: "market" },
              { word: "expectations" },
            ] }
          ]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/ˈtrɪɡərd/", translation: "引发",
          subComponents: [
            { startIndex: 0, words: [
              { word: "triggered" },
            ] }
          ]
        },
        {
          start: 10, end: 14, label: "宾语", phonetic: "/ə/ /ˈræli/ /ɪn/ /ʃɛr/ /ˈpraɪsɪz/", translation: "股价反弹",
          subComponents: [
            { startIndex: 0, words: [
              { word: "a" },
              { word: "rally" },
              { word: "in" },
              { word: "share" },
              { word: "prices", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，补充说明 report 的内容，前后用逗号隔开。" }
      ]
    },
    {
      id: "q_relative_s204",
      chinese: "我们需要一种问责机制透明且可执行的治理模式",
      english_full: "We need a governance model in which accountability is transparent and enforceable.",
      words: [
        { word: "We" },
        { word: "need" },
        { word: "a" },
        { word: "governance" },
        { word: "model" },
        { word: "in" },
        { word: "which" },
        { word: "accountability" },
        { word: "is" },
        { word: "transparent" },
        { word: "and" },
        { word: "enforceable", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [
            { startIndex: 0, words: [
              { word: "We" },
            ] }
          ]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/niːd/", translation: "需要",
          subComponents: [
            { startIndex: 0, words: [
              { word: "need" },
            ] }
          ]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ə/ /ˈɡʌvərnəns/ /ˈmɒdəl/", translation: "一种治理模式",
          subComponents: [
            { startIndex: 0, words: [
              { word: "a" },
              { word: "governance" },
              { word: "model" },
            ] }
          ]
        },
        {
          start: 5, end: 11, label: "定语从句", phonetic: "/ɪn/ /wɪtʃ/ /əˌkaʊntəˈbɪlɪti/ /ɪz/ /trænsˈpærənt/ /ænd/ /ɪnˈfɔːrsəbəl/", translation: "问责机制透明且可执行的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "in" },
              { word: "which" },
              { word: "accountability" },
              { word: "is" },
              { word: "transparent" },
              { word: "and" },
              { word: "enforceable", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (in which)", text: "in which 为「介词+关系代词」结构，修饰 model，相当于 where，in 不可省略。" }
      ]
    },
    {
      id: "q_relative_s205",
      chinese: "我们向其获得保险保单的那家承保人已修订保费条款",
      english_full: "The underwriter from whom we obtained the insurance policy has revised the premium terms.",
      words: [
        { word: "The" },
        { word: "underwriter" },
        { word: "from" },
        { word: "whom" },
        { word: "we" },
        { word: "obtained" },
        { word: "the" },
        { word: "insurance" },
        { word: "policy" },
        { word: "has" },
        { word: "revised" },
        { word: "the" },
        { word: "premium" },
        { word: "terms", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈʌndərˌraɪtər/", translation: "那家承保人",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "underwriter" },
            ] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/frɒm/ /huːm/ /wiː/ /əbˈteɪnd/ /ðə/ /ɪnˈʃʊrəns/ /ˈpɒlɪsi/", translation: "我们向其获得保险保单的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "from" },
              { word: "whom" },
              { word: "we" },
              { word: "obtained" },
              { word: "the" },
              { word: "insurance" },
              { word: "policy" },
            ] }
          ]
        },
        {
          start: 9, end: 10, label: "谓语", phonetic: "/hæz/ /rɪˈvaɪzd/", translation: "已修订",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "revised" },
            ] }
          ]
        },
        {
          start: 11, end: 13, label: "宾语", phonetic: "/ðə/ /ˈpriːmiəm/ /tɜːrmz/", translation: "保费条款",
          subComponents: [
            { startIndex: 0, words: [
              { word: "the" },
              { word: "premium" },
              { word: "terms", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (from whom)", text: "from whom 为「介词+关系代词」结构，obtain sth. from sb. 中 from 提前，先行词为人故用 whom。" }
      ]
    },
    {
      id: "q_relative_s206",
      chinese: "正如央行行长所强调的，持续通胀会削弱长期投资",
      english_full: "As the central bank governor emphasized, persistent inflation undermines long-term investment.",
      words: [
        { word: "As" },
        { word: "the" },
        { word: "central" },
        { word: "bank" },
        { word: "governor" },
        { word: "emphasized" },
        { word: "," },
        { word: "persistent" },
        { word: "inflation" },
        { word: "undermines" },
        { word: "long-term" },
        { word: "investment", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 5, label: "定语从句", phonetic: "/æz/ /ðə/ /ˈsɛntrəl/ /bæŋk/ /ˈɡʌvərnər/ /ˈɛmfəsaɪzd/", translation: "正如央行行长所强调的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "As" },
              { word: "the" },
              { word: "central" },
              { word: "bank" },
              { word: "governor" },
              { word: "emphasized" },
            ] }
          ]
        },
        {
          start: 7, end: 8, label: "主语", phonetic: "/pərˈsɪstənt/ /ɪnˈfleɪʃən/", translation: "持续通胀",
          subComponents: [
            { startIndex: 0, words: [
              { word: "persistent" },
              { word: "inflation" },
            ] }
          ]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/ˌʌndərˈmaɪnz/", translation: "削弱",
          subComponents: [
            { startIndex: 0, words: [
              { word: "undermines" },
            ] }
          ]
        },
        {
          start: 10, end: 11, label: "宾语", phonetic: "/ˌlɒŋˈtɜːrm/ /ɪnˈvɛstmənt/", translation: "长期投资",
          subComponents: [
            { startIndex: 0, words: [
              { word: "long-term" },
              { word: "investment", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (as)", text: "As 引导方式状语从句兼定语功能，指代后面整个主句内容，意为「正如……所说」。" }
      ]
    },
    {
      id: "q_relative_s207",
      chinese: "这正是政策模糊性演变为系统性风险的关键节点",
      english_full: "This is precisely the juncture where policy ambiguity becomes a systemic risk.",
      words: [
        { word: "This" },
        { word: "is" },
        { word: "precisely" },
        { word: "the" },
        { word: "juncture" },
        { word: "where" },
        { word: "policy" },
        { word: "ambiguity" },
        { word: "becomes" },
        { word: "a" },
        { word: "systemic" },
        { word: "risk", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ðɪs/", translation: "这",
          subComponents: [
            { startIndex: 0, words: [
              { word: "This" },
            ] }
          ]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/ɪz/ /prɪˈsaɪsli/", translation: "正是",
          subComponents: [
            { startIndex: 0, words: [
              { word: "is" },
              { word: "precisely" },
            ] }
          ]
        },
        {
          start: 3, end: 11, label: "表语", phonetic: "/ðə/ /ˈdʒʌŋktʃər/ /weər/ /ˈpɒlɪsi/ /ˌæmbɪˈɡjuːɪti/ /bɪˈkʌmz/ /ə/ /sɪˈstɛmɪk/ /rɪsk/", translation: "政策模糊性演变为系统性风险的关键节点",
          subComponents: [
            { startIndex: 0, words: [
              { word: "the" },
              { word: "juncture" },
              { word: "where" },
              { word: "policy" },
              { word: "ambiguity" },
              { word: "becomes" },
              { word: "a" },
              { word: "systemic" },
              { word: "risk", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 在从句中作地点状语，修饰抽象名词 juncture，表示「在这一节点上」。" }
      ]
    },
    {
      id: "q_relative_s208",
      chinese: "跨国公司在不受ESG审查下运营的那个时代已基本过去",
      english_full: "The era when multinational corporations operated without ESG scrutiny has largely passed.",
      words: [
        { word: "The" },
        { word: "era" },
        { word: "when" },
        { word: "multinational" },
        { word: "corporations" },
        { word: "operated" },
        { word: "without" },
        { word: "ESG" },
        { word: "scrutiny" },
        { word: "has" },
        { word: "largely" },
        { word: "passed", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɪərə/", translation: "那个时代",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "era" },
            ] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/wɛn/ /ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃənz/ /ˈɒpəreɪtɪd/ /wɪˈðaʊt/ /ˌiː.esˈdʒiː/ /ˈskruːtəni/", translation: "跨国公司在不受ESG审查下运营的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "when" },
              { word: "multinational" },
              { word: "corporations" },
              { word: "operated" },
              { word: "without" },
              { word: "ESG" },
              { word: "scrutiny" },
            ] }
          ]
        },
        {
          start: 9, end: 11, label: "谓语", phonetic: "/hæz/ /ˈlɑːrdʒli/ /pæst/", translation: "已基本过去",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "largely" },
              { word: "passed", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (when)", text: "when 在从句中作时间状语，修饰 era，表示「在……时期」。" }
      ]
    },
    {
      id: "q_relative_s209",
      chinese: "委员会为之游说的那套伦理框架终获董事会采纳",
      english_full: "The ethical framework for which the committee lobbied was finally adopted by the board.",
      words: [
        { word: "The" },
        { word: "ethical" },
        { word: "framework" },
        { word: "for" },
        { word: "which" },
        { word: "the" },
        { word: "committee" },
        { word: "lobbied" },
        { word: "was" },
        { word: "finally" },
        { word: "adopted" },
        { word: "by" },
        { word: "the" },
        { word: "board", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈɛθɪkəl/ /ˈfreɪmwɜːrk/", translation: "那套伦理框架",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "ethical" },
              { word: "framework" },
            ] }
          ]
        },
        {
          start: 3, end: 7, label: "定语从句", phonetic: "/fɔːr/ /wɪtʃ/ /ðə/ /kəˈmɪti/ /ˈlɒbid/", translation: "委员会为之游说的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "for" },
              { word: "which" },
              { word: "the" },
              { word: "committee" },
              { word: "lobbied" },
            ] }
          ]
        },
        {
          start: 8, end: 10, label: "谓语", phonetic: "/wɒz/ /ˈfaɪnəli/ /əˈdɒptɪd/", translation: "终获采纳",
          subComponents: [
            { startIndex: 0, words: [
              { word: "was" },
              { word: "finally" },
              { word: "adopted" },
            ] }
          ]
        },
        {
          start: 11, end: 13, label: "状语", phonetic: "/baɪ/ /ðə/ /bɔːrd/", translation: "由董事会",
          subComponents: [
            { startIndex: 0, words: [
              { word: "by" },
              { word: "the" },
              { word: "board", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (for which)", text: "for which 为「介词+关系代词」结构，lobby for sth. 中 for 提前至关系代词前。" }
      ]
    },
    {
      id: "q_relative_s210",
      chinese: "监管机构约谈的那名举报人提供了令人信服的文件证据",
      english_full: "The whistleblower whom the regulator interviewed provided compelling documentary evidence.",
      words: [
        { word: "The" },
        { word: "whistleblower" },
        { word: "whom" },
        { word: "the" },
        { word: "regulator" },
        { word: "interviewed" },
        { word: "provided" },
        { word: "compelling" },
        { word: "documentary" },
        { word: "evidence", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈwɪsəlˌbloʊər/", translation: "那名举报人",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "whistleblower" },
            ] }
          ]
        },
        {
          start: 2, end: 5, label: "定语从句", phonetic: "/huːm/ /ðə/ /ˈrɛɡjəleɪtər/ /ˈɪntərvjuːd/", translation: "监管机构约谈的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "whom" },
              { word: "the" },
              { word: "regulator" },
              { word: "interviewed" },
            ] }
          ]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/prəˈvaɪdɪd/", translation: "提供",
          subComponents: [
            { startIndex: 0, words: [
              { word: "provided" },
            ] }
          ]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/kəmˈpɛlɪŋ/ /ˌdɒkjəˈmɛntəri/ /ˈɛvɪdəns/", translation: "令人信服的文件证据",
          subComponents: [
            { startIndex: 0, words: [
              { word: "compelling" },
              { word: "documentary" },
              { word: "evidence", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (whom)", text: "whom 在从句中作 interviewed 的宾语，正式文体中修饰人作宾语时用 whom。" }
      ]
    },
    {
      id: "q_relative_s211",
      chinese: "该公司未达营收目标，这引发了立即的领导层改组",
      english_full: "The company missed its revenue target, which prompted an immediate leadership reshuffle.",
      words: [
        { word: "The" },
        { word: "company" },
        { word: "missed" },
        { word: "its" },
        { word: "revenue" },
        { word: "target" },
        { word: "," },
        { word: "which" },
        { word: "prompted" },
        { word: "an" },
        { word: "immediate" },
        { word: "leadership" },
        { word: "reshuffle", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "该公司",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "company" },
            ] }
          ]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/mɪst/", translation: "未达",
          subComponents: [
            { startIndex: 0, words: [
              { word: "missed" },
            ] }
          ]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ɪts/ /ˈrɛvənjuː/ /ˈtɑːrgɪt/", translation: "营收目标",
          subComponents: [
            { startIndex: 0, words: [
              { word: "its" },
              { word: "revenue" },
              { word: "target" },
            ] }
          ]
        },
        {
          start: 7, end: 12, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /prəmptɪd/ /ən/ /ɪˈmiːdiət/ /ˈliːdərʃɪp/ /riːˈʃʌfəl/", translation: "这引发了立即的领导层改组",
          subComponents: [
            { startIndex: 0, words: [
              { word: "which" },
              { word: "prompted" },
              { word: "an" },
              { word: "immediate" },
              { word: "leadership" },
              { word: "reshuffle", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 指代前面整个主句内容（未达营收目标），为非限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s212",
      chinese: "实时处理交易数据的那套算法已检测到异常模式",
      english_full: "The algorithm that processes transaction data in real time has detected anomalous patterns.",
      words: [
        { word: "The" },
        { word: "algorithm" },
        { word: "that" },
        { word: "processes" },
        { word: "transaction" },
        { word: "data" },
        { word: "in" },
        { word: "real" },
        { word: "time" },
        { word: "has" },
        { word: "detected" },
        { word: "anomalous" },
        { word: "patterns", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈælɡərɪðəm/", translation: "那套算法",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "algorithm" },
            ] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/ðæt/ /ˈprɒsɛsɪz/ /trænˈzækʃən/ /ˈdeɪtə/ /ɪn/ /riːl/ /taɪm/", translation: "实时处理交易数据的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "that" },
              { word: "processes" },
              { word: "transaction" },
              { word: "data" },
              { word: "in" },
              { word: "real" },
              { word: "time" },
            ] }
          ]
        },
        {
          start: 9, end: 10, label: "谓语", phonetic: "/hæz/ /dɪˈtɛktɪd/", translation: "已检测到",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "detected" },
            ] }
          ]
        },
        {
          start: 11, end: 12, label: "宾语", phonetic: "/əˈnɒmələs/ /ˈpætərnz/", translation: "异常模式",
          subComponents: [
            { startIndex: 0, words: [
              { word: "anomalous" },
              { word: "patterns", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作主语，修饰 algorithm，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s213",
      chinese: "其基因组已完成测序的那位患者对靶向治疗反应良好",
      english_full: "The patient whose genome was sequenced responded favorably to targeted therapy.",
      words: [
        { word: "The" },
        { word: "patient" },
        { word: "whose" },
        { word: "genome" },
        { word: "was" },
        { word: "sequenced" },
        { word: "responded" },
        { word: "favorably" },
        { word: "to" },
        { word: "targeted" },
        { word: "therapy", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpeɪʃənt/", translation: "那位患者",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "patient" },
            ] }
          ]
        },
        {
          start: 2, end: 5, label: "定语从句", phonetic: "/huːz/ /ˈdʒiːnoʊm/ /wɒz/ /ˈsiːkwənst/", translation: "其基因组已完成测序的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "whose" },
              { word: "genome" },
              { word: "was" },
              { word: "sequenced" },
            ] }
          ]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/rɪˈspɒndɪd/", translation: "反应",
          subComponents: [
            { startIndex: 0, words: [
              { word: "responded" },
            ] }
          ]
        },
        {
          start: 7, end: 10, label: "状语", phonetic: "/ˈfeɪvərəbli/ /tuː/ /ˈtɑːrgɪtɪd/ /ˈθɛrəpi/", translation: "对靶向治疗良好",
          subComponents: [
            { startIndex: 0, words: [
              { word: "favorably" },
              { word: "to" },
              { word: "targeted" },
              { word: "therapy", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose 修饰 patient，在从句中作 genome 的定语，从句为被动语态 was sequenced。" }
      ]
    },
    {
      id: "q_relative_s214",
      chinese: "气候协议在该峰会上最终定稿，吸引了190国代表出席",
      english_full: "The summit at which the climate accord was finalized drew delegates from 190 nations.",
      words: [
        { word: "The" },
        { word: "summit" },
        { word: "at" },
        { word: "which" },
        { word: "the" },
        { word: "climate" },
        { word: "accord" },
        { word: "was" },
        { word: "finalized" },
        { word: "drew" },
        { word: "delegates" },
        { word: "from" },
        { word: "190" },
        { word: "nations", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsʌmɪt/", translation: "该峰会",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "summit" },
            ] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/æt/ /wɪtʃ/ /ðə/ /ˈklaɪmət/ /əˈkɔːrd/ /wɒz/ /ˈfaɪnəlaɪzd/", translation: "气候协议最终定稿的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "at" },
              { word: "which" },
              { word: "the" },
              { word: "climate" },
              { word: "accord" },
              { word: "was" },
              { word: "finalized" },
            ] }
          ]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/druː/", translation: "吸引",
          subComponents: [
            { startIndex: 0, words: [
              { word: "drew" },
            ] }
          ]
        },
        {
          start: 10, end: 13, label: "宾语", phonetic: "/ˈdɛlɪɡəts/ /frɒm/ /ˌnʌntiˈnɛti/ /ˈneɪʃənz/", translation: "190国代表出席",
          subComponents: [
            { startIndex: 0, words: [
              { word: "delegates" },
              { word: "from" },
              { word: "190" },
              { word: "nations", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (at which)", text: "at which 为「介词+关系代词」结构，修饰 summit，从句为被动语态 was finalized。" }
      ]
    },
    {
      id: "q_relative_s215",
      chinese: "谈判人员借以保持联系的外交渠道被证明不可或缺",
      english_full: "The diplomatic channel with which negotiators maintained contact proved indispensable.",
      words: [
        { word: "The" },
        { word: "diplomatic" },
        { word: "channel" },
        { word: "with" },
        { word: "which" },
        { word: "negotiators" },
        { word: "maintained" },
        { word: "contact" },
        { word: "proved" },
        { word: "indispensable", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌdɪpləˈmætɪk/ /ˈtʃænəl/", translation: "外交渠道",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "diplomatic" },
              { word: "channel" },
            ] }
          ]
        },
        {
          start: 3, end: 7, label: "定语从句", phonetic: "/wɪð/ /wɪtʃ/ /nɪˈɡoʊʃieɪtərz/ /meɪnˈteɪnd/ /ˈkɒntækt/", translation: "谈判人员借以保持联系的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "with" },
              { word: "which" },
              { word: "negotiators" },
              { word: "maintained" },
              { word: "contact" },
            ] }
          ]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/pruːvd/", translation: "被证明",
          subComponents: [
            { startIndex: 0, words: [
              { word: "proved" },
            ] }
          ]
        },
        {
          start: 9, end: 9, label: "表语", phonetic: "/ˌɪndɪˈspɛnsəbəl/", translation: "不可或缺",
          subComponents: [
            { startIndex: 0, words: [
              { word: "indispensable", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (with which)", text: "with which 为「介词+关系代词」结构，maintain contact with 中 with 提前。" }
      ]
    },
    {
      id: "q_relative_s216",
      chinese: "卷入丑闻的那位立法者已宣布退休",
      english_full: "The legislator who was implicated in the scandal has announced her retirement.",
      words: [
        { word: "The" },
        { word: "legislator" },
        { word: "who" },
        { word: "was" },
        { word: "implicated" },
        { word: "in" },
        { word: "the" },
        { word: "scandal" },
        { word: "has" },
        { word: "announced" },
        { word: "her" },
        { word: "retirement", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈlɛdʒɪsleɪtər/", translation: "那位立法者",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "legislator" },
            ] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/huː/ /wɒz/ /ˈɪmplɪkeɪtɪd/ /ɪn/ /ðə/ /ˈskændəl/", translation: "卷入丑闻的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "who" },
              { word: "was" },
              { word: "implicated" },
              { word: "in" },
              { word: "the" },
              { word: "scandal" },
            ] }
          ]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /əˈnaʊnst/", translation: "已宣布",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "announced" },
            ] }
          ]
        },
        {
          start: 10, end: 11, label: "宾语", phonetic: "/hɜːr/ /rɪˈtaɪərmənt/", translation: "退休",
          subComponents: [
            { startIndex: 0, words: [
              { word: "her" },
              { word: "retirement", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，从句为被动语态 was implicated，修饰 legislator。" }
      ]
    },
    {
      id: "q_relative_s217",
      chinese: "这项对初创公司估值20亿美元的收购提前完成交割",
      english_full: "The acquisition, which valued the startup at two billion dollars, closed ahead of schedule.",
      words: [
        { word: "The" },
        { word: "acquisition" },
        { word: "," },
        { word: "which" },
        { word: "valued" },
        { word: "the" },
        { word: "startup" },
        { word: "at" },
        { word: "two" },
        { word: "billion" },
        { word: "dollars" },
        { word: "," },
        { word: "closed" },
        { word: "ahead" },
        { word: "of" },
        { word: "schedule", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌækwɪˈzɪʃən/", translation: "这项收购",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "acquisition" },
            ] }
          ]
        },
        {
          start: 3, end: 10, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /ˈvæljuːd/ /ðə/ /ˈstɑːrtʌp/ /æt/ /tuː/ /ˈbɪljən/ /ˈdɒlərz/", translation: "对初创公司估值20亿美元的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "which" },
              { word: "valued" },
              { word: "the" },
              { word: "startup" },
              { word: "at" },
              { word: "two" },
              { word: "billion" },
              { word: "dollars" },
            ] }
          ]
        },
        {
          start: 12, end: 12, label: "谓语", phonetic: "/kloʊzd/", translation: "完成交割",
          subComponents: [
            { startIndex: 0, words: [
              { word: "closed" },
            ] }
          ]
        },
        {
          start: 13, end: 15, label: "状语", phonetic: "/əˈhɛd/ /ɒv/ /ˈskɛdjuːl/", translation: "提前",
          subComponents: [
            { startIndex: 0, words: [
              { word: "ahead" },
              { word: "of" },
              { word: "schedule", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，补充说明 acquisition 的估值细节。" }
      ]
    },
    {
      id: "q_relative_s218",
      chinese: "机构投资者向其分配资本的那支基金专注于可再生基础设施",
      english_full: "The fund to which institutional investors allocated capital focuses on renewable infrastructure.",
      words: [
        { word: "The" },
        { word: "fund" },
        { word: "to" },
        { word: "which" },
        { word: "institutional" },
        { word: "investors" },
        { word: "allocated" },
        { word: "capital" },
        { word: "focuses" },
        { word: "on" },
        { word: "renewable" },
        { word: "infrastructure", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /fʌnd/", translation: "那支基金",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "fund" },
            ] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/tuː/ /wɪtʃ/ /ˌɪnstɪˈtuːʃənəl/ /ɪnˈvɛstərz/ /ˈæləkeɪtɪd/ /ˈkæpɪtəl/", translation: "机构投资者向其分配资本的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "to" },
              { word: "which" },
              { word: "institutional" },
              { word: "investors" },
              { word: "allocated" },
              { word: "capital" },
            ] }
          ]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/ˈfəʊkəsɪz/", translation: "专注于",
          subComponents: [
            { startIndex: 0, words: [
              { word: "focuses" },
            ] }
          ]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ɒn/ /rɪˈnjuːəbəl/ /ˈɪnfrəstrʌktʃər/", translation: "可再生基础设施",
          subComponents: [
            { startIndex: 0, words: [
              { word: "on" },
              { word: "renewable" },
              { word: "infrastructure", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (to which)", text: "to which 为「介词+关系代词」结构，allocate capital to 中 to 提前。" }
      ]
    },
    {
      id: "q_relative_s219",
      chinese: "合规团队标记的那些条款需要立即进行法律审查",
      english_full: "The provisions that the compliance team flagged require immediate legal review.",
      words: [
        { word: "The" },
        { word: "provisions" },
        { word: "that" },
        { word: "the" },
        { word: "compliance" },
        { word: "team" },
        { word: "flagged" },
        { word: "require" },
        { word: "immediate" },
        { word: "legal" },
        { word: "review", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /prəˈvɪʒənz/", translation: "那些条款",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "provisions" },
            ] }
          ]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/ðæt/ /ðə/ /kəmˈplaɪəns/ /tiːm/ /flæɡd/", translation: "合规团队标记的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "that" },
              { word: "the" },
              { word: "compliance" },
              { word: "team" },
              { word: "flagged" },
            ] }
          ]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "需要",
          subComponents: [
            { startIndex: 0, words: [
              { word: "require" },
            ] }
          ]
        },
        {
          start: 8, end: 10, label: "宾语", phonetic: "/ɪˈmiːdiət/ /ˈliːɡəl/ /rɪˈvjuː/", translation: "立即法律审查",
          subComponents: [
            { startIndex: 0, words: [
              { word: "immediate" },
              { word: "legal" },
              { word: "review", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作 flagged 的宾语，修饰 provisions。" }
      ]
    },
    {
      id: "q_relative_s220",
      chinese: "该投资组合包含三项资产，其中两项波动性极高",
      english_full: "The portfolio comprises three assets, of which two are highly volatile.",
      words: [
        { word: "The" },
        { word: "portfolio" },
        { word: "comprises" },
        { word: "three" },
        { word: "assets" },
        { word: "," },
        { word: "of" },
        { word: "which" },
        { word: "two" },
        { word: "are" },
        { word: "highly" },
        { word: "volatile", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /pɔːrtˈfoʊlioʊ/", translation: "该投资组合",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "portfolio" },
            ] }
          ]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/kəmˈpraɪzɪz/", translation: "包含",
          subComponents: [
            { startIndex: 0, words: [
              { word: "comprises" },
            ] }
          ]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/θriː/ /ˈæsɛts/", translation: "三项资产",
          subComponents: [
            { startIndex: 0, words: [
              { word: "three" },
              { word: "assets" },
            ] }
          ]
        },
        {
          start: 6, end: 11, label: "定语从句", phonetic: "/ɒv/ /wɪtʃ/ /tuː/ /ɑːr/ /ˈhaɪli/ /ˈvɒlətaɪl/", translation: "其中两项波动性极高",
          subComponents: [
            { startIndex: 0, words: [
              { word: "of" },
              { word: "which" },
              { word: "two" },
              { word: "are" },
              { word: "highly" },
              { word: "volatile", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (of which)", text: "of which 为部分关系从句，two 为从句主语，which 指代 assets，表示整体中的部分。" }
      ]
    },
    {
      id: "q_relative_s221",
      chinese: "自由职业者在其上竞标企业项目的那个平台已拓展至亚洲",
      english_full: "The platform where freelancers bid on corporate projects has expanded into Asia.",
      words: [
        { word: "The" },
        { word: "platform" },
        { word: "where" },
        { word: "freelancers" },
        { word: "bid" },
        { word: "on" },
        { word: "corporate" },
        { word: "projects" },
        { word: "has" },
        { word: "expanded" },
        { word: "into" },
        { word: "Asia", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈplætfɔːrm/", translation: "那个平台",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "platform" },
            ] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/weər/ /ˈfriːlɑːnsərz/ /bɪd/ /ɒn/ /ˈkɔːrpərət/ /ˈprɒdʒɛkts/", translation: "自由职业者在其上竞标企业项目的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "where" },
              { word: "freelancers" },
              { word: "bid" },
              { word: "on" },
              { word: "corporate" },
              { word: "projects" },
            ] }
          ]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /ɪkˈspændɪd/", translation: "已拓展",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "expanded" },
            ] }
          ]
        },
        {
          start: 10, end: 11, label: "状语", phonetic: "/ˈɪntuː/ /ˈeɪʒə/", translation: "至亚洲",
          subComponents: [
            { startIndex: 0, words: [
              { word: "into" },
              { word: "Asia", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 在从句中作地点状语，修饰 platform，相当于 on which。" }
      ]
    },
    {
      id: "q_relative_s222",
      chinese: "1969年是人类首次踏上月面那一年",
      english_full: "1969 was the year when humanity first set foot on the lunar surface.",
      words: [
        { word: "1969" },
        { word: "was" },
        { word: "the" },
        { word: "year" },
        { word: "when" },
        { word: "humanity" },
        { word: "first" },
        { word: "set" },
        { word: "foot" },
        { word: "on" },
        { word: "the" },
        { word: "lunar" },
        { word: "surface", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˌnaɪntiːnˈsaɪkstiːnaɪn/", translation: "1969年",
          subComponents: [
            { startIndex: 0, words: [
              { word: "1969" },
            ] }
          ]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/wɒz/", translation: "是",
          subComponents: [
            { startIndex: 0, words: [
              { word: "was" },
            ] }
          ]
        },
        {
          start: 2, end: 12, label: "表语", phonetic: "/ðə/ /jɪər/ /wɛn/ /hjuːˈmænɪti/ /fɜːrst/ /sɛt/ /fʊt/ /ɒn/ /ðə/ /ˈluːnər/ /ˈsɜːrfɪs/", translation: "人类首次踏上月面那一年",
          subComponents: [
            { startIndex: 0, words: [
              { word: "the" },
              { word: "year" },
              { word: "when" },
              { word: "humanity" },
              { word: "first" },
              { word: "set" },
              { word: "foot" },
              { word: "on" },
              { word: "the" },
              { word: "lunar" },
              { word: "surface", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (when)", text: "when 在从句中作时间状语，修饰 year，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s223",
      chinese: "那些高管中部分曾反对并购的人最终认可了这笔交易",
      english_full: "The executives, some of whom had opposed the merger, eventually endorsed the deal.",
      words: [
        { word: "The" },
        { word: "executives" },
        { word: "," },
        { word: "some" },
        { word: "of" },
        { word: "whom" },
        { word: "had" },
        { word: "opposed" },
        { word: "the" },
        { word: "merger" },
        { word: "," },
        { word: "eventually" },
        { word: "endorsed" },
        { word: "the" },
        { word: "deal", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ɪɡˈzɛkjətɪvz/", translation: "那些高管",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "executives" },
            ] }
          ]
        },
        {
          start: 3, end: 9, label: "非限制性定语从句", phonetic: "/sʌm/ /ɒv/ /huːm/ /hæd/ /əˈpoʊzd/ /ðə/ /ˈmɜːrdʒər/", translation: "其中部分曾反对并购的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "some" },
              { word: "of" },
              { word: "whom" },
              { word: "had" },
              { word: "opposed" },
              { word: "the" },
              { word: "merger" },
            ] }
          ]
        },
        {
          start: 11, end: 11, label: "状语", phonetic: "/ɪˈvɛntʃuəli/", translation: "最终",
          subComponents: [
            { startIndex: 0, words: [
              { word: "eventually" },
            ] }
          ]
        },
        {
          start: 12, end: 12, label: "谓语", phonetic: "/ɪnˈdɔːrst/", translation: "认可",
          subComponents: [
            { startIndex: 0, words: [
              { word: "endorsed" },
            ] }
          ]
        },
        {
          start: 13, end: 14, label: "宾语", phonetic: "/ðə/ /diːl/", translation: "这笔交易",
          subComponents: [
            { startIndex: 0, words: [
              { word: "the" },
              { word: "deal", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (some of whom)", text: "some of whom 为部分关系从句，whom 指代 executives，表示整体中的部分成员。" }
      ]
    },
    {
      id: "q_relative_s224",
      chinese: "研究人员借以验证其假设的方法论已通过同行评审",
      english_full: "The methodology by which the researchers validated their hypothesis has been peer-reviewed.",
      words: [
        { word: "The" },
        { word: "methodology" },
        { word: "by" },
        { word: "which" },
        { word: "the" },
        { word: "researchers" },
        { word: "validated" },
        { word: "their" },
        { word: "hypothesis" },
        { word: "has" },
        { word: "been" },
        { word: "peer-reviewed", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌmɛθəˈdɒlədʒi/", translation: "方法论",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "methodology" },
            ] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/baɪ/ /wɪtʃ/ /ðə/ /rɪˈsɜːrtʃərz/ /ˈvælɪdeɪtɪd/ /ðɛr/ /haɪˈpɒθɪsɪs/", translation: "研究人员借以验证其假设的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "by" },
              { word: "which" },
              { word: "the" },
              { word: "researchers" },
              { word: "validated" },
              { word: "their" },
              { word: "hypothesis" },
            ] }
          ]
        },
        {
          start: 9, end: 11, label: "谓语", phonetic: "/hæz/ /bɪn/ /ˌpɪrˈrɪvjuːd/", translation: "已通过同行评审",
          subComponents: [
            { startIndex: 0, words: [
              { word: "has" },
              { word: "been" },
              { word: "peer-reviewed", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (by which)", text: "by which 为「介词+关系代词」结构，validate by 中 by 提前，修饰 methodology。" }
      ]
    },
    {
      id: "q_relative_s225",
      chinese: "该公司推出了三条产品线，它们均在十八个月内实现盈利",
      english_full: "The firm launched three product lines, all of which achieved profitability within eighteen months.",
      words: [
        { word: "The" },
        { word: "firm" },
        { word: "launched" },
        { word: "three" },
        { word: "product" },
        { word: "lines" },
        { word: "," },
        { word: "all" },
        { word: "of" },
        { word: "which" },
        { word: "achieved" },
        { word: "profitability" },
        { word: "within" },
        { word: "eighteen" },
        { word: "months", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /fɜːrm/", translation: "该公司",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "firm" },
            ] }
          ]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/lɔːntʃt/", translation: "推出",
          subComponents: [
            { startIndex: 0, words: [
              { word: "launched" },
            ] }
          ]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/θriː/ /ˈprɒdʌkt/ /laɪnz/", translation: "三条产品线",
          subComponents: [
            { startIndex: 0, words: [
              { word: "three" },
              { word: "product" },
              { word: "lines" },
            ] }
          ]
        },
        {
          start: 7, end: 14, label: "非限制性定语从句", phonetic: "/ɔːl/ /ɒv/ /wɪtʃ/ /əˈtʃiːvd/ /ˌprɒfɪtəˈbɪlɪti/ /wɪˈðɪn/ /ˌeɪˈtiːn/ /mʌnθs/", translation: "它们均在十八个月内实现盈利",
          subComponents: [
            { startIndex: 0, words: [
              { word: "all" },
              { word: "of" },
              { word: "which" },
              { word: "achieved" },
              { word: "profitability" },
              { word: "within" },
              { word: "eighteen" },
              { word: "months", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (all of which)", text: "all of which 指代 product lines 的全部，which 在从句中作主语。" }
      ]
    },
    {
      id: "q_relative_s226",
      chinese: "研讨会汇聚了众多学者，其中许多人展示了突破性研究成果",
      english_full: "The symposium brought together scholars, many of whom presented groundbreaking research.",
      words: [
        { word: "The" },
        { word: "symposium" },
        { word: "brought" },
        { word: "together" },
        { word: "scholars" },
        { word: "," },
        { word: "many" },
        { word: "of" },
        { word: "whom" },
        { word: "presented" },
        { word: "groundbreaking" },
        { word: "research", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsɪmpoʊziəm/", translation: "研讨会",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "symposium" },
            ] }
          ]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/brɔːt/ /təˈɡɛðər/", translation: "汇聚",
          subComponents: [
            { startIndex: 0, words: [
              { word: "brought" },
              { word: "together" },
            ] }
          ]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈskɒlərz/", translation: "众多学者",
          subComponents: [
            { startIndex: 0, words: [
              { word: "scholars" },
            ] }
          ]
        },
        {
          start: 6, end: 11, label: "非限制性定语从句", phonetic: "/ˈmɛni/ /ɒv/ /huːm/ /prɪˈzɛntɪd/ /ˈɡraʊndˌbreɪkɪŋ/ /rɪˈsɜːrtʃ/", translation: "其中许多人展示了突破性研究成果",
          subComponents: [
            { startIndex: 0, words: [
              { word: "many" },
              { word: "of" },
              { word: "whom" },
              { word: "presented" },
              { word: "groundbreaking" },
              { word: "research", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (many of whom)", text: "many of whom 为部分关系从句，whom 指代 scholars，表示整体中的多数成员。" }
      ]
    },
    {
      id: "q_relative_s227",
      chinese: "首席执行官处理危机的方式恢复了投资者信心",
      english_full: "The manner in which the CEO addressed the crisis restored investor confidence.",
      words: [
        { word: "The" },
        { word: "manner" },
        { word: "in" },
        { word: "which" },
        { word: "the" },
        { word: "CEO" },
        { word: "addressed" },
        { word: "the" },
        { word: "crisis" },
        { word: "restored" },
        { word: "investor" },
        { word: "confidence", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 8, label: "主语", phonetic: "/ðə/ /ˈmænər/ /ɪn/ /wɪtʃ/ /ðə/ /ˌsiː.iːˈoʊ/ /əˈdrɛst/ /ðə/ /ˈkraɪsɪs/", translation: "首席执行官处理危机的方式",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "manner" },
              { word: "in" },
              { word: "which" },
              { word: "the" },
              { word: "CEO" },
              { word: "addressed" },
              { word: "the" },
              { word: "crisis" },
            ] }
          ]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/rɪˈstɔːrd/", translation: "恢复",
          subComponents: [
            { startIndex: 0, words: [
              { word: "restored" },
            ] }
          ]
        },
        {
          start: 10, end: 11, label: "宾语", phonetic: "/ɪnˈvɛstər/ /ˈkɒnfɪdəns/", translation: "投资者信心",
          subComponents: [
            { startIndex: 0, words: [
              { word: "investor" },
              { word: "confidence", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "定语从句 (in which)", text: "in which 修饰 manner，the manner in which 为固定结构，意为「……的方式」。" }
      ]
    },
    {
      id: "q_relative_s228",
      chinese: "这项最初遭遇强烈反对的提案最终获全票通过",
      english_full: "The proposal, which initially faced fierce opposition, was ultimately approved unanimously.",
      words: [
        { word: "The" },
        { word: "proposal" },
        { word: "," },
        { word: "which" },
        { word: "initially" },
        { word: "faced" },
        { word: "fierce" },
        { word: "opposition" },
        { word: "," },
        { word: "was" },
        { word: "ultimately" },
        { word: "approved" },
        { word: "unanimously", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /prəˈpoʊzəl/", translation: "这项提案",
          subComponents: [
            { startIndex: 0, words: [
              { word: "The" },
              { word: "proposal" },
            ] }
          ]
        },
        {
          start: 3, end: 7, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /ɪˈnɪʃəli/ /feɪst/ /fɪrs/ /ˌɒpəˈzɪʃən/", translation: "最初遭遇强烈反对的",
          subComponents: [
            { startIndex: 0, words: [
              { word: "which" },
              { word: "initially" },
              { word: "faced" },
              { word: "fierce" },
              { word: "opposition" },
            ] }
          ]
        },
        {
          start: 9, end: 11, label: "谓语", phonetic: "/wɒz/ /ˈʌltɪmətli/ /əˈpruːvd/", translation: "最终获通过",
          subComponents: [
            { startIndex: 0, words: [
              { word: "was" },
              { word: "ultimately" },
              { word: "approved" },
            ] }
          ]
        },
        {
          start: 12, end: 12, label: "状语", phonetic: "/juːˈnænɪməsli/", translation: "全票",
          subComponents: [
            { startIndex: 0, words: [
              { word: "unanimously", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，插入主句中间，补充说明 proposal 曾遭遇的阻力。" }
      ]
    },
    {
      id: "q_relative_s229",
      chinese: "中村博士——其在量子计算领域的开创性工作激励了一代科学家——将发表毕业典礼致辞",
      english_full: "Dr. Nakamura, whose pioneering work in quantum computing inspired a generation of scientists, will deliver the commencement address.",
      words: [
        { word: "Dr." },
        { word: "Nakamura" },
        { word: "," },
        { word: "whose" },
        { word: "pioneering" },
        { word: "work" },
        { word: "in" },
        { word: "quantum" },
        { word: "computing" },
        { word: "inspired" },
        { word: "a" },
        { word: "generation" },
        { word: "of" },
        { word: "scientists" },
        { word: "," },
        { word: "will" },
        { word: "deliver" },
        { word: "the" },
        { word: "commencement" },
        { word: "address", punctuation: "." },
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈdɒktər/ /nɑːkəˈmʊrə/", translation: "中村博士",
          subComponents: [
            { startIndex: 0, words: [
              { word: "Dr." },
              { word: "Nakamura" },
            ] }
          ]
        },
        {
          start: 3, end: 13, label: "非限制性定语从句", phonetic: "/huːz/ /ˌpaɪəˈnɪrɪŋ/ /wɜːrk/ /ɪn/ /ˈkwɒntəm/ /kəmˈpjuːtɪŋ/ /ɪnˈspaɪərd/ /ə/ /ˌdʒɛnəˈreɪʃən/ /ɒv/ /ˈsaɪəntɪsts/", translation: "其在量子计算领域的开创性工作激励了一代科学家",
          subComponents: [
            { startIndex: 0, words: [
              { word: "whose" },
              { word: "pioneering" },
              { word: "work" },
              { word: "in" },
              { word: "quantum" },
              { word: "computing" },
              { word: "inspired" },
              { word: "a" },
              { word: "generation" },
              { word: "of" },
              { word: "scientists" },
            ] }
          ]
        },
        {
          start: 15, end: 16, label: "谓语", phonetic: "/wɪl/ /dɪˈlɪvər/", translation: "将发表",
          subComponents: [
            { startIndex: 0, words: [
              { word: "will" },
              { word: "deliver" },
            ] }
          ]
        },
        {
          start: 17, end: 19, label: "宾语", phonetic: "/ðə/ /kəˈmɛnsmənt/ /əˈdrɛs/", translation: "毕业典礼致辞",
          subComponents: [
            { startIndex: 0, words: [
              { word: "the" },
              { word: "commencement" },
              { word: "address", punctuation: "." },
            ] }
          ]
        },
      ],
      analysis: [
        { type: "非限制性定语从句 (whose)", text: "whose 引导非限制性定语从句，插入主句中间，对 Dr. Nakamura 起补充说明作用。" }
      ]
    }
  ]
};
