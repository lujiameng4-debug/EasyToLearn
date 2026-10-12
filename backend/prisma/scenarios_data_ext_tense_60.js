export const extensions = {
  "module_tense": [
    {
      id: "q_tense_s200",
      chinese: "董事会已经批准了修订后的公司治理框架",
      english_full: "The board has approved the revised corporate governance framework.",
      words: [
        { word: "The" }, { word: "board" }, { word: "has" }, { word: "approved" }, { word: "the" },
        { word: "revised" }, { word: "corporate" }, { word: "governance" }, { word: "framework", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "board" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (现在完成时)", phonetic: "/hæz/ /əˈpruːvd/", translation: "已经批准",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "approved" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ðə/ /rɪˈvaɪzd/ /ˈkɔːrpərət/ /ˈgʌvərnəns/ /ˈfreɪmwɜːrk/", translation: "修订后的公司治理框架",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "revised" }, { word: "corporate" }, { word: "governance" }, { word: "framework", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has approved 表示批准动作已完成，且该框架现已正式生效。" },
        { type: "公司治理", text: "corporate governance framework (公司治理框架) 是董事会治理的核心术语。" }
      ]
    },
    {
      id: "q_tense_s201",
      chinese: "学术机构通常要求申请者提交标准化考试成绩",
      english_full: "Academic institutions typically require applicants to submit standardized test scores.",
      words: [
        { word: "Academic" }, { word: "institutions" }, { word: "typically" }, { word: "require" },
        { word: "applicants" }, { word: "to" }, { word: "submit" }, { word: "standardized" }, { word: "test" }, { word: "scores", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌækəˈdɛmɪk/ /ˌɪnstɪˈtuːʃənz/", translation: "学术机构",
          subComponents: [{ startIndex: 0, words: [{ word: "Academic" }, { word: "institutions" }] }]
        },
        {
          start: 2, end: 2, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 3, end: 3, label: "谓语 (一般现在时)", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 4, end: 9, label: "宾语 (不定式)", phonetic: "/ˈæplɪkənts/ /tuː/ /səbˈmɪt/ /ˈstændərdaɪzd/ /tɛst/ /skɔːrz/", translation: "申请者提交标准化考试成绩",
          subComponents: [
            { startIndex: 0, words: [{ word: "applicants" }] },
            { startIndex: 1, words: [{ word: "to" }, { word: "submit" }, { word: "standardized" }, { word: "test" }, { word: "scores", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "require 用一般现在时描述学术机构的常规招生要求。" },
        { type: "留学词汇", text: "standardized test scores (标准化考试成绩) 是 IELTS/TOEFL 申请的核心材料。" }
      ]
    },
    {
      id: "q_tense_s202",
      chinese: "代表团在上个月的峰会上谈判达成了一项双边贸易协定",
      english_full: "The delegation negotiated a bilateral trade agreement at the summit last month.",
      words: [
        { word: "The" }, { word: "delegation" }, { word: "negotiated" }, { word: "a" }, { word: "bilateral" },
        { word: "trade" }, { word: "agreement" }, { word: "at" }, { word: "the" }, { word: "summit" }, { word: "last" }, { word: "month", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌdɛlɪˈgeɪʃən/", translation: "代表团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "delegation" }] }]
        },
        {
          start: 2, end: 2, label: "谓语 (一般过去时)", phonetic: "/nɪˈgoʊʃieɪtɪd/", translation: "谈判达成",
          subComponents: [{ startIndex: 0, words: [{ word: "negotiated" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ə/ /baɪˈlætərəl/ /treɪd/ /əˈgriːmənt/", translation: "一项双边贸易协定",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "bilateral" }, { word: "trade" }, { word: "agreement" }] }]
        },
        {
          start: 7, end: 11, label: "地点/时间状语", phonetic: "/æt/ /ðə/ /ˈsʌmɪt/ /læst/ /mʌnθ/", translation: "在上个月的峰会上",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "the" }, { word: "summit" }, { word: "last" }, { word: "month", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般过去时", text: "negotiated 配合 last month 表示过去某一时间点完成的谈判成果。" },
        { type: "外交词汇", text: "bilateral trade agreement (双边贸易协定) 是国际经贸谈判的标准表述。" }
      ]
    },
    {
      id: "q_tense_s203",
      chinese: "该公司将在下半年启动首次公开募股",
      english_full: "The company will launch its initial public offering in the second half of the year.",
      words: [
        { word: "The" }, { word: "company" }, { word: "will" }, { word: "launch" }, { word: "its" },
        { word: "initial" }, { word: "public" }, { word: "offering" }, { word: "in" }, { word: "the" },
        { word: "second" }, { word: "half" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "该公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "company" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (一般将来时)", phonetic: "/wɪl/ /lɔːntʃ/", translation: "将启动",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "launch" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ɪts/ /ɪˈnɪʃəl/ /ˈpʌblɪk/ /ˈɒfərɪŋ/", translation: "其首次公开募股",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "initial" }, { word: "public" }, { word: "offering" }] }]
        },
        {
          start: 8, end: 14, label: "时间状语", phonetic: "/ɪn/ /ðə/ /ˈsɛkənd/ /hæf/ /ʌv/ /ðə/ /jɪr/", translation: "在下半年",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "second" }, { word: "half" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般将来时", text: "will launch 表示已规划的未来上市计划。" },
        { type: "金融术语", text: "initial public offering (IPO，首次公开募股) 是资本市场核心概念。" }
      ]
    },
    {
      id: "q_tense_s204",
      chinese: "研究人员目前正在调查微塑料暴露的长期影响",
      english_full: "Researchers are currently investigating the long-term effects of microplastic exposure.",
      words: [
        { word: "Researchers" }, { word: "are" }, { word: "currently" }, { word: "investigating" },
        { word: "the" }, { word: "long-term" }, { word: "effects" }, { word: "of" }, { word: "microplastic" }, { word: "exposure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/rɪˈsɜːrtʃərz/", translation: "研究人员",
          subComponents: [{ startIndex: 0, words: [{ word: "Researchers" }] }]
        },
        {
          start: 1, end: 3, label: "谓语 (现在进行时)", phonetic: "/ɑːr/ /ˈkɜːrəntli/ /ɪnˈvɛstɪgeɪtɪŋ/", translation: "目前正在调查",
          subComponents: [
            { startIndex: 0, words: [{ word: "are" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "currently" }], label: "时间状语" },
            { startIndex: 2, words: [{ word: "investigating" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ðə/ /ˌlɔːŋˈtɜːrm/ /ɪˈfɛkts/ /ʌv/ /ˌmaɪkroʊˈplæstɪk/ /ɪkˈspoʊʒər/", translation: "微塑料暴露的长期影响",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "long-term" }, { word: "effects" }] },
            { startIndex: 3, words: [{ word: "of" }, { word: "microplastic" }, { word: "exposure", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "现在进行时", text: "are investigating 强调研究正在进行中，尚未得出最终结论。" },
        { type: "学术词汇", text: "microplastic exposure (微塑料暴露) 是环境健康研究的前沿议题。" }
      ]
    },
    {
      id: "q_tense_s205",
      chinese: "技术人员正在校准设备时，电源发生了故障",
      english_full: "The technician was calibrating the equipment when the power supply failed.",
      words: [
        { word: "The" }, { word: "technician" }, { word: "was" }, { word: "calibrating" }, { word: "the" }, { word: "equipment" },
        { word: "when" }, { word: "the" }, { word: "power" }, { word: "supply" }, { word: "failed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /tɛkˈnɪʃən/", translation: "技术人员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "technician" }] }]
        },
        {
          start: 2, end: 3, label: "主句谓语 (过去进行时)", phonetic: "/wɒz/ /ˈkælɪbreɪtɪŋ/", translation: "正在校准",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "calibrating" }], label: "实义动词" }
          ]
        },
        {
          start: 4, end: 5, label: "主句宾语", phonetic: "/ðə/ /ɪˈkwɪpmənt/", translation: "设备",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "equipment" }] }]
        },
        {
          start: 6, end: 10, label: "时间状语从句", phonetic: "/wɛn/ /ðə/ /ˈpaʊər/ /səˈplaɪ/ /feɪld/", translation: "当电源发生故障时",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "power" }, { word: "supply" }], label: "(从)主" },
            { startIndex: 4, words: [{ word: "failed", punctuation: "." }], label: "(从)谓(一般过去时)" }
          ]
        }
      ],
      analysis: [
        { type: "时态交错", text: "过去进行时 (was calibrating) 与一般过去时 (failed) 搭配，表示背景动作被突发事件打断。" },
        { type: "技术词汇", text: "calibrate equipment (校准设备)；power supply (电源供应)。" }
      ]
    },
    {
      id: "q_tense_s206",
      chinese: "到明年这个时候，施工队将正在安装最后的太阳能板",
      english_full: "By this time next year, the construction team will be installing the final solar panels.",
      words: [
        { word: "By" }, { word: "this" }, { word: "time" }, { word: "next" }, { word: "year", punctuation: "," },
        { word: "the" }, { word: "construction" }, { word: "team" }, { word: "will" }, { word: "be" }, { word: "installing" },
        { word: "the" }, { word: "final" }, { word: "solar" }, { word: "panels", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语", phonetic: "/baɪ/ /ðɪs/ /taɪm/ /nɛkst/ /jɪr/", translation: "到明年这个时候",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "this" }, { word: "time" }, { word: "next" }, { word: "year", punctuation: "," }] }]
        },
        {
          start: 5, end: 7, label: "主语", phonetic: "/ðə/ /kənˈstrʌkʃən/ /tiːm/", translation: "施工队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "construction" }, { word: "team" }] }]
        },
        {
          start: 8, end: 10, label: "谓语 (将来进行时)", phonetic: "/wɪl/ /bi/ /ɪnˈstɔːlɪŋ/", translation: "将正在安装",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "installing" }] }]
        },
        {
          start: 11, end: 14, label: "宾语", phonetic: "/ðə/ /ˈfaɪnəl/ /ˈsoʊlər/ /ˈpænəlz/", translation: "最后的太阳能板",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "final" }, { word: "solar" }, { word: "panels", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来进行时", text: "will be installing 表示在将来某一特定时刻正在进行的安装工作。" },
        { type: "标志结构", text: "By this time next year 是将来进行时的典型时间提示。" }
      ]
    },
    {
      id: "q_tense_s207",
      chinese: "在该初创公司宣布破产之前，投资者已经撤回了资金",
      english_full: "The investors had withdrawn their funding before the startup announced bankruptcy.",
      words: [
        { word: "The" }, { word: "investors" }, { word: "had" }, { word: "withdrawn" }, { word: "their" }, { word: "funding" },
        { word: "before" }, { word: "the" }, { word: "startup" }, { word: "announced" }, { word: "bankruptcy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "investors" }] }]
        },
        {
          start: 2, end: 3, label: "主句谓语 (过去完成时)", phonetic: "/hæd/ /wɪðˈdrɔːn/", translation: "已经撤回",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "withdrawn" }] }]
        },
        {
          start: 4, end: 5, label: "主句宾语", phonetic: "/ðɛr/ /ˈfʌndɪŋ/", translation: "其资金",
          subComponents: [{ startIndex: 0, words: [{ word: "their" }, { word: "funding" }] }]
        },
        {
          start: 6, end: 10, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈstɑːrtʌp/ /əˈnaʊnst/ /ˈbæŋkrʌptsi/", translation: "在该初创公司宣布破产之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "startup" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "announced" }], label: "(从)谓(一般过去时)" },
            { startIndex: 4, words: [{ word: "bankruptcy", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成时", text: "had withdrawn 发生在 announced 之前，表示「过去的过去」。" },
        { type: "创投词汇", text: "withdraw funding (撤回资金)；announce bankruptcy (宣布破产)。" }
      ]
    },
    {
      id: "q_tense_s208",
      chinese: "到本财季末，该公司将已经完成全球重组",
      english_full: "By the end of this fiscal quarter, the firm will have completed its global restructuring.",
      words: [
        { word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "this" }, { word: "fiscal" }, { word: "quarter", punctuation: "," },
        { word: "the" }, { word: "firm" }, { word: "will" }, { word: "have" }, { word: "completed" },
        { word: "its" }, { word: "global" }, { word: "restructuring", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间状语", phonetic: "/baɪ/ /ðə/ /ɛnd/ /ʌv/ /ðɪs/ /ˈfɪskəl/ /ˈkwɔːrtər/", translation: "到本财季末",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "this" }, { word: "fiscal" }, { word: "quarter", punctuation: "," }] }]
        },
        {
          start: 7, end: 8, label: "主语", phonetic: "/ðə/ /fɜːrm/", translation: "该公司",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "firm" }] }]
        },
        {
          start: 9, end: 11, label: "谓语 (将来完成时)", phonetic: "/wɪl/ /hæv/ /kəmˈpliːtɪd/", translation: "将已经完成",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "completed" }] }]
        },
        {
          start: 12, end: 14, label: "宾语", phonetic: "/ɪts/ /ˈgloʊbəl/ /ˌriːˈstrʌktʃərɪŋ/", translation: "其全球重组",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "global" }, { word: "restructuring", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来完成时", text: "will have completed 表示到本财季末这一未来时间点，重组工作已完成。" },
        { type: "商务词汇", text: "fiscal quarter (财季)；global restructuring (全球重组)。" }
      ]
    },
    {
      id: "q_tense_s209",
      chinese: "外交使团十多年来一直在两国之间进行斡旋",
      english_full: "The diplomatic corps has been mediating between the two nations for over a decade.",
      words: [
        { word: "The" }, { word: "diplomatic" }, { word: "corps" }, { word: "has" }, { word: "been" }, { word: "mediating" },
        { word: "between" }, { word: "the" }, { word: "two" }, { word: "nations" }, { word: "for" }, { word: "over" }, { word: "a" }, { word: "decade", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌdɪpləˈmætɪk/ /kɔːr/", translation: "外交使团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "diplomatic" }, { word: "corps" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (现在完成进行时)", phonetic: "/hæz/ /bɪn/ /ˈmiːdieɪtɪŋ/", translation: "一直在斡旋",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "mediating" }] }]
        },
        {
          start: 6, end: 9, label: "状语", phonetic: "/bɪˈtwiːn/ /ðə/ /tuː/ /ˈneɪʃənz/", translation: "在两国之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "the" }, { word: "two" }, { word: "nations" }] }]
        },
        {
          start: 10, end: 13, label: "时间状语", phonetic: "/fɔːr/ /ˈoʊvər/ /ə/ /ˈdɛkeɪd/", translation: "十多年来",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "over" }, { word: "a" }, { word: "decade", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成进行时", text: "has been mediating 强调从十余年前持续至今的斡旋过程，且可能仍在继续。" },
        { type: "外交词汇", text: "diplomatic corps (外交使团)；mediate between nations (在两国间斡旋)。" }
      ]
    },
    {
      id: "q_tense_s210",
      chinese: "工程师们在发现缺陷之前已经对原型进行了数周的测试",
      english_full: "The engineers had been testing the prototype for weeks before they detected the flaw.",
      words: [
        { word: "The" }, { word: "engineers" }, { word: "had" }, { word: "been" }, { word: "testing" },
        { word: "the" }, { word: "prototype" }, { word: "for" }, { word: "weeks" },
        { word: "before" }, { word: "they" }, { word: "detected" }, { word: "the" }, { word: "flaw", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主句主语", phonetic: "/ðə/ /ˌɛndʒɪˈnɪərz/", translation: "工程师们",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "engineers" }] }]
        },
        {
          start: 2, end: 4, label: "主句谓语 (过去完成进行时)", phonetic: "/hæd/ /bɪn/ /ˈtɛstɪŋ/", translation: "一直在测试",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "been" }, { word: "testing" }] }]
        },
        {
          start: 5, end: 6, label: "主句宾语", phonetic: "/ðə/ /ˈproʊtətaɪp/", translation: "原型",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "prototype" }] }]
        },
        {
          start: 7, end: 8, label: "时间状语", phonetic: "/fɔːr/ /wiːks/", translation: "数周",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "weeks" }] }]
        },
        {
          start: 9, end: 13, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /ðeɪ/ /dɪˈtɛktɪd/ /ðə/ /flɔː/", translation: "在他们发现缺陷之前",
          subComponents: [
            { startIndex: 0, words: [{ word: "before" }], label: "连词" },
            { startIndex: 1, words: [{ word: "they" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "detected" }], label: "(从)谓(一般过去时)" },
            { startIndex: 3, words: [{ word: "the" }, { word: "flaw", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "过去完成进行时", text: "had been testing 表示在 detected 之前持续进行的测试过程。" },
        { type: "工程词汇", text: "prototype (原型)；detect a flaw (发现缺陷)。" }
      ]
    },
    {
      id: "q_tense_s211",
      chinese: "到六月份，研究团队将已经持续收集数据十八个月了",
      english_full: "By June, the research team will have been collecting data for eighteen months.",
      words: [
        { word: "By" }, { word: "June", punctuation: "," }, { word: "the" }, { word: "research" }, { word: "team" },
        { word: "will" }, { word: "have" }, { word: "been" }, { word: "collecting" }, { word: "data" },
        { word: "for" }, { word: "eighteen" }, { word: "months", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "时间状语", phonetic: "/baɪ/ /dʒuːn/", translation: "到六月份",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "June", punctuation: "," }] }]
        },
        {
          start: 2, end: 4, label: "主语", phonetic: "/ðə/ /rɪˈsɜːrtʃ/ /tiːm/", translation: "研究团队",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "research" }, { word: "team" }] }]
        },
        {
          start: 5, end: 8, label: "谓语 (将来完成进行时)", phonetic: "/wɪl/ /hæv/ /bɪn/ /kəˈlɛktɪŋ/", translation: "将已经持续收集",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "been" }, { word: "collecting" }] }]
        },
        {
          start: 9, end: 9, label: "宾语", phonetic: "/ˈdeɪtə/", translation: "数据",
          subComponents: [{ startIndex: 0, words: [{ word: "data" }] }]
        },
        {
          start: 10, end: 12, label: "时间状语", phonetic: "/fɔːr/ /ˌeɪˈtiːn/ /mʌnθs/", translation: "十八个月",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "eighteen" }, { word: "months", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来完成进行时", text: "will have been collecting 表示到六月这一未来时间点，数据收集已持续十八个月。" },
        { type: "学术搭配", text: "collect data (收集数据) 是科研写作中的标准表达。" }
      ]
    },
    {
      id: "q_tense_s212",
      chinese: "总统将于明天在会议上发表主旨演讲",
      english_full: "The president is delivering the keynote address at the conference tomorrow.",
      words: [
        { word: "The" }, { word: "president" }, { word: "is" }, { word: "delivering" },
        { word: "the" }, { word: "keynote" }, { word: "address" }, { word: "at" }, { word: "the" }, { word: "conference" }, { word: "tomorrow", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈprɛzɪdənt/", translation: "总统",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "president" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (现在进行时表将来)", phonetic: "/ɪz/ /dɪˈlɪvərɪŋ/", translation: "将发表",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "delivering" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ðə/ /ˈkiːnoʊt/ /əˈdrɛs/", translation: "主旨演讲",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "keynote" }, { word: "address" }] }]
        },
        {
          start: 7, end: 10, label: "状语", phonetic: "/æt/ /ðə/ /ˈkɒnfərəns/ /təˈmɒroʊ/", translation: "在会议上 明天",
          subComponents: [
            { startIndex: 0, words: [{ word: "at" }, { word: "the" }, { word: "conference" }], label: "地点状语" },
            { startIndex: 3, words: [{ word: "tomorrow", punctuation: "." }], label: "时间状语" }
          ]
        }
      ],
      analysis: [
        { type: "现在进行时表将来", text: "is delivering 配合 tomorrow 表示已安排好的近期计划，比 will 更体现确定性。" },
        { type: "会议词汇", text: "keynote address (主旨演讲) 是大型会议的核心环节。" }
      ]
    },
    {
      id: "q_tense_s213",
      chinese: "央行打算提高利率以应对持续的通胀",
      english_full: "The central bank is going to raise interest rates in response to persistent inflation.",
      words: [
        { word: "The" }, { word: "central" }, { word: "bank" }, { word: "is" }, { word: "going" }, { word: "to" }, { word: "raise" },
        { word: "interest" }, { word: "rates" }, { word: "in" }, { word: "response" }, { word: "to" }, { word: "persistent" }, { word: "inflation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /bæŋk/", translation: "央行",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "central" }, { word: "bank" }] }]
        },
        {
          start: 3, end: 6, label: "谓语 (be going to 将来时)", phonetic: "/ɪz/ /ˈgoʊɪŋ/ /tuː/ /reɪz/", translation: "打算提高",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }] },
            { startIndex: 1, words: [{ word: "going" }, { word: "to" }, { word: "raise" }] }
          ]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ˈɪntrəst/ /reɪts/", translation: "利率",
          subComponents: [{ startIndex: 0, words: [{ word: "interest" }, { word: "rates" }] }]
        },
        {
          start: 9, end: 13, label: "原因状语", phonetic: "/ɪn/ /rɪˈspɒns/ /tuː/ /pərˈsɪstənt/ /ɪnˈfleɪʃən/", translation: "以应对持续的通胀",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "response" }, { word: "to" }, { word: "persistent" }, { word: "inflation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "be going to", text: "is going to raise 表示基于现有经济证据 (persistent inflation) 做出的近期政策决定。" },
        { type: "宏观经济学", text: "raise interest rates (加息)；persistent inflation (持续通胀)。" }
      ]
    },
    {
      id: "q_tense_s214",
      chinese: "该条约规定成员国应按比例向预算出资",
      english_full: "The treaty stipulates that member states contribute proportionally to the budget.",
      words: [
        { word: "The" }, { word: "treaty" }, { word: "stipulates" }, { word: "that" },
        { word: "member" }, { word: "states" }, { word: "contribute" }, { word: "proportionally" }, { word: "to" }, { word: "the" }, { word: "budget", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈtriːti/", translation: "该条约",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "treaty" }] }]
        },
        {
          start: 2, end: 2, label: "谓语 (一般现在时)", phonetic: "/ˈstɪpjʊleɪts/", translation: "规定",
          subComponents: [{ startIndex: 0, words: [{ word: "stipulates" }] }]
        },
        {
          start: 3, end: 10, label: "宾语从句", phonetic: "/ðæt/ /ˈmɛmbər/ /steɪts/ /kənˈtrɪbjuːt/ /prəˈpɔːrʃənəli/ /tuː/ /ðə/ /ˈbʌdʒɪt/", translation: "成员国应按比例向预算出资",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "member" }, { word: "states" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "contribute" }], label: "(从)谓" },
            { startIndex: 4, words: [{ word: "proportionally" }], label: "(从)状" },
            { startIndex: 5, words: [{ word: "to" }, { word: "the" }, { word: "budget", punctuation: "." }], label: "(从)状" }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "主句 stipulates 与从句 contribute 均用一般现在时，陈述条约的正式条款内容。" },
        { type: "法律词汇", text: "stipulate (规定)；contribute proportionally (按比例出资)。" }
      ]
    },
    {
      id: "q_tense_s215",
      chinese: "机密文件于本周早些时候泄露给了媒体",
      english_full: "The confidential documents were leaked to the press earlier this week.",
      words: [
        { word: "The" }, { word: "confidential" }, { word: "documents" }, { word: "were" }, { word: "leaked" },
        { word: "to" }, { word: "the" }, { word: "press" }, { word: "earlier" }, { word: "this" }, { word: "week", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌkɒnfɪˈdɛnʃəl/ /ˈdɒkjʊmənts/", translation: "机密文件",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "confidential" }, { word: "documents" }] }]
        },
        {
          start: 3, end: 4, label: "谓语 (一般过去时被动)", phonetic: "/wɜːr/ /liːkt/", translation: "被泄露",
          subComponents: [
            { startIndex: 0, words: [{ word: "were" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "leaked" }], label: "过去分词" }
          ]
        },
        {
          start: 5, end: 7, label: "间接宾语", phonetic: "/tuː/ /ðə/ /prɛs/", translation: "给媒体",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "press" }] }]
        },
        {
          start: 8, end: 10, label: "时间状语", phonetic: "/ˈɜːrliər/ /ðɪs/ /wiːk/", translation: "本周早些时候",
          subComponents: [{ startIndex: 0, words: [{ word: "earlier" }, { word: "this" }, { word: "week", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般过去时被动", text: "were leaked 为一般过去时被动语态，配合 earlier this week 表示已发生的泄露事件。" },
        { type: "媒体词汇", text: "confidential documents (机密文件)；leak to the press (泄露给媒体)。" }
      ]
    },
    {
      id: "q_tense_s216",
      chinese: "若干关键条款已被纳入修订后的立法",
      english_full: "Several key provisions have been incorporated into the amended legislation.",
      words: [
        { word: "Several" }, { word: "key" }, { word: "provisions" }, { word: "have" }, { word: "been" }, { word: "incorporated" },
        { word: "into" }, { word: "the" }, { word: "amended" }, { word: "legislation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsɛvrəl/ /kiː/ /prəˈvɪʒənz/", translation: "若干关键条款",
          subComponents: [{ startIndex: 0, words: [{ word: "Several" }, { word: "key" }, { word: "provisions" }] }]
        },
        {
          start: 3, end: 5, label: "谓语 (现在完成时被动)", phonetic: "/hæv/ /bɪn/ /ɪnˈkɔːrpəreɪtɪd/", translation: "已被纳入",
          subComponents: [
            { startIndex: 0, words: [{ word: "have" }, { word: "been" }], label: "助动词" },
            { startIndex: 2, words: [{ word: "incorporated" }], label: "过去分词" }
          ]
        },
        {
          start: 6, end: 9, label: "状语", phonetic: "/ˈɪntuː/ /ðə/ /əˈmɛndɪd/ /ˌlɛdʒɪsˈleɪʃən/", translation: "修订后的立法中",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "the" }, { word: "amended" }, { word: "legislation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成时被动", text: "have been incorporated 表示纳入动作已完成，且修订后的立法现已包含这些条款。" },
        { type: "立法术语", text: "key provisions (关键条款)；amended legislation (修订后的立法)。" }
      ]
    },
    {
      id: "q_tense_s217",
      chinese: "在委员会审查提案期间，利益相关方提交了额外反馈",
      english_full: "While the committee was reviewing the proposal, stakeholders submitted additional feedback.",
      words: [
        { word: "While" }, { word: "the" }, { word: "committee" }, { word: "was" }, { word: "reviewing" }, { word: "the" }, { word: "proposal", punctuation: "," },
        { word: "stakeholders" }, { word: "submitted" }, { word: "additional" }, { word: "feedback", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间状语从句", phonetic: "/waɪl/ /ðə/ /kəˈmɪti/ /wɒz/ /rɪˈvjuːɪŋ/ /ðə/ /prəˈpoʊzəl/", translation: "在委员会审查提案期间",
          subComponents: [
            { startIndex: 0, words: [{ word: "While" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "committee" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "was" }, { word: "reviewing" }], label: "(从)谓(过去进行时)" },
            { startIndex: 5, words: [{ word: "the" }, { word: "proposal", punctuation: "," }], label: "(从)宾" }
          ]
        },
        {
          start: 7, end: 7, label: "主句主语", phonetic: "/ˈsteɪkˌhoʊldərz/", translation: "利益相关方",
          subComponents: [{ startIndex: 0, words: [{ word: "stakeholders" }] }]
        },
        {
          start: 8, end: 8, label: "主句谓语 (一般过去时)", phonetic: "/səbˈmɪtɪd/", translation: "提交了",
          subComponents: [{ startIndex: 0, words: [{ word: "submitted" }] }]
        },
        {
          start: 9, end: 10, label: "主句宾语", phonetic: "/əˈdɪʃənəl/ /ˈfiːdbæk/", translation: "额外反馈",
          subComponents: [{ startIndex: 0, words: [{ word: "additional" }, { word: "feedback", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "时态交错", text: "从句 was reviewing (过去进行时) 与主句 submitted (一般过去时) 搭配，表示背景动作期间发生的短动作。" },
        { type: "商务词汇", text: "stakeholders (利益相关方)；submit feedback (提交反馈)。" }
      ]
    },
    {
      id: "q_tense_s218",
      chinese: "在任期间，这位首席执行官每月都会举行全员大会",
      english_full: "During his tenure, the CEO would hold monthly town hall meetings.",
      words: [
        { word: "During" }, { word: "his" }, { word: "tenure", punctuation: "," },
        { word: "the" }, { word: "CEO" }, { word: "would" }, { word: "hold" }, { word: "monthly" }, { word: "town" }, { word: "hall" }, { word: "meetings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /hɪz/ /ˈtɛnjər/", translation: "在任期间",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "his" }, { word: "tenure", punctuation: "," }] }]
        },
        {
          start: 3, end: 4, label: "主语", phonetic: "/ðə/ /ˌsiːˈiːˈoʊ/", translation: "这位首席执行官",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "CEO" }] }]
        },
        {
          start: 5, end: 6, label: "谓语 (would 表过去习惯)", phonetic: "/wʊd/ /hoʊld/", translation: "都会举行",
          subComponents: [
            { startIndex: 0, words: [{ word: "would" }], label: "情态动词" },
            { startIndex: 1, words: [{ word: "hold" }], label: "实义动词" }
          ]
        },
        {
          start: 7, end: 10, label: "宾语", phonetic: "/ˈmʌnθli/ /taʊn/ /hɔːl/ /ˈmiːtɪŋz/", translation: "每月全员大会",
          subComponents: [{ startIndex: 0, words: [{ word: "monthly" }, { word: "town" }, { word: "hall" }, { word: "meetings", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "would 表过去习惯", text: "would hold 配合 During his tenure 描述过去任期内反复发生的习惯性动作。" },
        { type: "职场词汇", text: "tenure (任期)；town hall meeting (全员大会) 是企业沟通的标准形式。" }
      ]
    },
    {
      id: "q_tense_s219",
      chinese: "审计表明该子公司可能误报了季度收益",
      english_full: "The audit suggests that the subsidiary may have misreported its quarterly earnings.",
      words: [
        { word: "The" }, { word: "audit" }, { word: "suggests" }, { word: "that" },
        { word: "the" }, { word: "subsidiary" }, { word: "may" }, { word: "have" }, { word: "misreported" },
        { word: "its" }, { word: "quarterly" }, { word: "earnings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɔːdɪt/", translation: "审计",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "audit" }] }]
        },
        {
          start: 2, end: 2, label: "谓语 (一般现在时)", phonetic: "/səˈdʒɛsts/", translation: "表明",
          subComponents: [{ startIndex: 0, words: [{ word: "suggests" }] }]
        },
        {
          start: 3, end: 11, label: "宾语从句", phonetic: "/ðæt/ /ðə/ /səbˈsɪdieri/ /meɪ/ /hæv/ /ˌmɪsrɪˈpɔːrtɪd/ /ɪts/ /ˈkwɔːrtərli/ /ˈɜːrnɪŋz/", translation: "该子公司可能误报了季度收益",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "subsidiary" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "may" }, { word: "have" }, { word: "misreported" }], label: "(从)谓(情态动词+完成式)" },
            { startIndex: 6, words: [{ word: "its" }, { word: "quarterly" }, { word: "earnings", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "情态动词+完成式", text: "may have misreported 表示对过去可能发生的误报行为的推测。" },
        { type: "审计术语", text: "misreport earnings (误报收益)；quarterly earnings (季度收益)。" }
      ]
    },
    {
      id: "q_tense_s220",
      chinese: "全球供应链高度依赖海运航线",
      english_full: "Global supply chains depend heavily on maritime freight routes.",
      words: [
        { word: "Global" }, { word: "supply" }, { word: "chains" }, { word: "depend" }, { word: "heavily" },
        { word: "on" }, { word: "maritime" }, { word: "freight" }, { word: "routes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈgloʊbəl/ /səˈplaɪ/ /tʃeɪnz/", translation: "全球供应链",
          subComponents: [{ startIndex: 0, words: [{ word: "Global" }, { word: "supply" }, { word: "chains" }] }]
        },
        {
          start: 3, end: 3, label: "谓语 (一般现在时)", phonetic: "/dɪˈpɛnd/", translation: "依赖",
          subComponents: [{ startIndex: 0, words: [{ word: "depend" }] }]
        },
        {
          start: 4, end: 4, label: "程度状语", phonetic: "/ˈhɛvɪli/", translation: "高度",
          subComponents: [{ startIndex: 0, words: [{ word: "heavily" }] }]
        },
        {
          start: 5, end: 8, label: "介词宾语", phonetic: "/ɒn/ /ˈmærɪtaɪm/ /freɪt/ /ruːts/", translation: "海运航线",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "maritime" }, { word: "freight" }, { word: "routes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "depend 用一般现在时陈述全球供应链的客观现状和普遍规律。" },
        { type: "物流词汇", text: "maritime freight routes (海运航线) 是国际贸易的核心基础设施。" }
      ]
    },
    {
      id: "q_tense_s221",
      chinese: "到会议结束时，与会者将已经讨论了所有议程项目",
      english_full: "By the end of the conference, participants will have discussed all agenda items.",
      words: [
        { word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "the" }, { word: "conference", punctuation: "," },
        { word: "participants" }, { word: "will" }, { word: "have" }, { word: "discussed" },
        { word: "all" }, { word: "agenda" }, { word: "items", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "时间状语", phonetic: "/baɪ/ /ðə/ /ɛnd/ /ʌv/ /ðə/ /ˈkɒnfərəns/", translation: "到会议结束时",
          subComponents: [{ startIndex: 0, words: [{ word: "By" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "the" }, { word: "conference", punctuation: "," }] }]
        },
        {
          start: 6, end: 6, label: "主语", phonetic: "/pɑːrˈtɪsɪpənts/", translation: "与会者",
          subComponents: [{ startIndex: 0, words: [{ word: "participants" }] }]
        },
        {
          start: 7, end: 9, label: "谓语 (将来完成时)", phonetic: "/wɪl/ /hæv/ /dɪsˈkʌst/", translation: "将已经讨论",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "have" }, { word: "discussed" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ɔːl/ /əˈdʒɛndə/ /ˈaɪtəmz/", translation: "所有议程项目",
          subComponents: [{ startIndex: 0, words: [{ word: "all" }, { word: "agenda" }, { word: "items", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "将来完成时", text: "will have discussed 表示到会议结束这一未来时间点，所有议程项目均已讨论完毕。" },
        { type: "会议词汇", text: "agenda items (议程项目) 是正式会议的标准用语。" }
      ]
    },
    {
      id: "q_tense_s222",
      chinese: "分析师预测该股票将在年底前反弹",
      english_full: "The analyst predicted that the stock would recover by the end of the year.",
      words: [
        { word: "The" }, { word: "analyst" }, { word: "predicted" }, { word: "that" },
        { word: "the" }, { word: "stock" }, { word: "would" }, { word: "recover" },
        { word: "by" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈænəlɪst/", translation: "分析师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "analyst" }] }]
        },
        {
          start: 2, end: 2, label: "谓语 (一般过去时)", phonetic: "/prɪˈdɪktɪd/", translation: "预测",
          subComponents: [{ startIndex: 0, words: [{ word: "predicted" }] }]
        },
        {
          start: 3, end: 13, label: "宾语从句", phonetic: "/ðæt/ /ðə/ /stɒk/ /wʊd/ /rɪˈkʌvər/ /baɪ/ /ðə/ /ɛnd/ /ʌv/ /ðə/ /jɪr/", translation: "该股票将在年底前反弹",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }], label: "引导词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "stock" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "would" }, { word: "recover" }], label: "(从)谓(过去将来时)" },
            { startIndex: 5, words: [{ word: "by" }, { word: "the" }, { word: "end" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }], label: "(从)时间状语" }
          ]
        }
      ],
      analysis: [
        { type: "过去将来时", text: "主句 predicted (一般过去时) 引出从句 would recover (过去将来时)，表示从过去视角看未来的预测。" },
        { type: "金融词汇", text: "stock recover (股票反弹) 是财经分析中的常见表述。" }
      ]
    },
    {
      id: "q_tense_s223",
      chinese: "自政策实施以来，失业率已显著下降",
      english_full: "Unemployment has declined significantly since the policy was implemented.",
      words: [
        { word: "Unemployment" }, { word: "has" }, { word: "declined" }, { word: "significantly" },
        { word: "since" }, { word: "the" }, { word: "policy" }, { word: "was" }, { word: "implemented", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˌʌnɪmˈplɔɪmənt/", translation: "失业率",
          subComponents: [{ startIndex: 0, words: [{ word: "Unemployment" }] }]
        },
        {
          start: 1, end: 2, label: "谓语 (现在完成时)", phonetic: "/hæz/ /dɪˈklaɪnd/", translation: "已下降",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "declined" }] }]
        },
        {
          start: 3, end: 3, label: "程度状语", phonetic: "/sɪgˈnɪfɪkəntli/", translation: "显著",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }] }]
        },
        {
          start: 4, end: 8, label: "时间状语从句", phonetic: "/sɪns/ /ðə/ /ˈpɒləsi/ /wɒz/ /ˈɪmplɪmɛntɪd/", translation: "自政策实施以来",
          subComponents: [
            { startIndex: 0, words: [{ word: "since" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "policy" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "was" }, { word: "implemented", punctuation: "." }], label: "(从)谓(一般过去时被动)" }
          ]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has declined 配合 since 从句，表示从政策实施至今持续产生的影响。" },
        { type: "宏观经济学", text: "unemployment decline (失业率下降) 是评估政策效果的关键指标。" }
      ]
    },
    {
      id: "q_tense_s224",
      chinese: "如果谈判破裂，双方都将面临严重的经济后果",
      english_full: "If the negotiations collapse, both parties will face severe economic consequences.",
      words: [
        { word: "If" }, { word: "the" }, { word: "negotiations" }, { word: "collapse", punctuation: "," },
        { word: "both" }, { word: "parties" }, { word: "will" }, { word: "face" }, { word: "severe" }, { word: "economic" }, { word: "consequences", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "条件状语从句", phonetic: "/ɪf/ /ðə/ /nɪˌgoʊʃiˈeɪʃənz/ /kəˈlæps/", translation: "如果谈判破裂",
          subComponents: [
            { startIndex: 0, words: [{ word: "If" }], label: "连词" },
            { startIndex: 1, words: [{ word: "the" }, { word: "negotiations" }], label: "(从)主" },
            { startIndex: 3, words: [{ word: "collapse", punctuation: "," }], label: "(从)谓(一般现在时)" }
          ]
        },
        {
          start: 4, end: 5, label: "主句主语", phonetic: "/boʊθ/ /ˈpɑːrtiz/", translation: "双方",
          subComponents: [{ startIndex: 0, words: [{ word: "both" }, { word: "parties" }] }]
        },
        {
          start: 6, end: 7, label: "主句谓语 (一般将来时)", phonetic: "/wɪl/ /feɪs/", translation: "都将面临",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }], label: "助动词" },
            { startIndex: 1, words: [{ word: "face" }], label: "实义动词" }
          ]
        },
        {
          start: 8, end: 10, label: "主句宾语", phonetic: "/sɪˈvɪr/ /ˌiːkəˈnɒmɪk/ /ˈkɒnsɪkwənsɪz/", translation: "严重的经济后果",
          subComponents: [{ startIndex: 0, words: [{ word: "severe" }, { word: "economic" }, { word: "consequences", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "条件句时态", text: "第一条件句中，从句 collapse 用一般现在时表示将来条件，主句 will face 表示将来结果。" },
        { type: "外交词汇", text: "negotiations collapse (谈判破裂)；economic consequences (经济后果)。" }
      ]
    },
    {
      id: "q_tense_s225",
      chinese: "这项发现改变了我们对神经可塑性的理解",
      english_full: "This discovery has transformed our understanding of neuroplasticity.",
      words: [
        { word: "This" }, { word: "discovery" }, { word: "has" }, { word: "transformed" },
        { word: "our" }, { word: "understanding" }, { word: "of" }, { word: "neuroplasticity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðɪs/ /dɪsˈkʌvəri/", translation: "这项发现",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "discovery" }] }]
        },
        {
          start: 2, end: 3, label: "谓语 (现在完成时)", phonetic: "/hæz/ /trænsˈfɔːrmd/", translation: "已经改变",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "transformed" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/aʊər/ /ˌʌndərˈstændɪŋ/ /ʌv/ /ˌnjʊroʊplæˈstɪsɪti/", translation: "我们对神经可塑性的理解",
          subComponents: [
            { startIndex: 0, words: [{ word: "our" }, { word: "understanding" }] },
            { startIndex: 2, words: [{ word: "of" }, { word: "neuroplasticity", punctuation: "." }], label: "后置定语" }
          ]
        }
      ],
      analysis: [
        { type: "现在完成时", text: "has transformed 表示发现对当前认知产生的持续影响，而非仅描述过去事件。" },
        { type: "神经科学", text: "neuroplasticity (神经可塑性) 是认知神经科学的核心概念。" }
      ]
    },
    {
      id: "q_tense_s226",
      chinese: "该部门三年来一直在推行数字化转型战略",
      english_full: "The department has been pursuing a digital transformation strategy for three years.",
      words: [
        { word: "The" }, { word: "department" }, { word: "has" }, { word: "been" }, { word: "pursuing" },
        { word: "a" }, { word: "digital" }, { word: "transformation" }, { word: "strategy" },
        { word: "for" }, { word: "three" }, { word: "years", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /dɪˈpɑːrtmənt/", translation: "该部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "department" }] }]
        },
        {
          start: 2, end: 4, label: "谓语 (现在完成进行时)", phonetic: "/hæz/ /bɪn/ /pərˈsjuːɪŋ/", translation: "一直在推行",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "pursuing" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ə/ /ˈdɪdʒɪtəl/ /ˌtrænsfərˈmeɪʃən/ /ˈstrætədʒi/", translation: "数字化转型战略",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "digital" }, { word: "transformation" }, { word: "strategy" }] }]
        },
        {
          start: 9, end: 11, label: "时间状语", phonetic: "/fɔːr/ /θriː/ /jɪrz/", translation: "三年来",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "three" }, { word: "years", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成进行时", text: "has been pursuing 配合 for three years 强调从三年前持续至今且可能仍在继续的战略执行。" },
        { type: "商业词汇", text: "digital transformation strategy (数字化转型战略) 是企业变革的核心议题。" }
      ]
    },
    {
      id: "q_tense_s227",
      chinese: "等到救援队伍抵达时，洪水已经摧毁了大部分基础设施",
      english_full: "By the time the rescue teams arrived, the flood had destroyed most of the infrastructure.",
      words: [
        { word: "By" }, { word: "the" }, { word: "time" }, { word: "the" }, { word: "rescue" }, { word: "teams" }, { word: "arrived", punctuation: "," },
        { word: "the" }, { word: "flood" }, { word: "had" }, { word: "destroyed" }, { word: "most" }, { word: "of" }, { word: "the" }, { word: "infrastructure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间状语从句", phonetic: "/baɪ/ /ðə/ /taɪm/ /ðə/ /ˈrɛskjuː/ /tiːmz/ /əˈraɪvd/", translation: "等到救援队伍抵达时",
          subComponents: [
            { startIndex: 0, words: [{ word: "By" }, { word: "the" }, { word: "time" }], label: "连词结构" },
            { startIndex: 3, words: [{ word: "the" }, { word: "rescue" }, { word: "teams" }], label: "(从)主" },
            { startIndex: 6, words: [{ word: "arrived", punctuation: "," }], label: "(从)谓(一般过去时)" }
          ]
        },
        {
          start: 7, end: 8, label: "主句主语", phonetic: "/ðə/ /flʌd/", translation: "洪水",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "flood" }] }]
        },
        {
          start: 9, end: 10, label: "主句谓语 (过去完成时)", phonetic: "/hæd/ /dɪˈstrɔɪd/", translation: "已经摧毁",
          subComponents: [{ startIndex: 0, words: [{ word: "had" }, { word: "destroyed" }] }]
        },
        {
          start: 11, end: 14, label: "主句宾语", phonetic: "/moʊst/ /ʌv/ /ðə/ /ˈɪnfrəˌstrʌktʃər/", translation: "大部分基础设施",
          subComponents: [{ startIndex: 0, words: [{ word: "most" }, { word: "of" }, { word: "the" }, { word: "infrastructure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "过去完成时", text: "had destroyed 发生在 arrived 之前，By the time 结构强调两个过去动作的先后顺序。" },
        { type: "灾害报道", text: "rescue teams (救援队伍)；destroy infrastructure (摧毁基础设施)。" }
      ]
    },
    {
      id: "q_tense_s228",
      chinese: "她总是赶在截止日期前仓促完成报告",
      english_full: "She has always been rushing to finish reports before the deadline.",
      words: [
        { word: "She" }, { word: "has" }, { word: "always" }, { word: "been" }, { word: "rushing" },
        { word: "to" }, { word: "finish" }, { word: "reports" }, { word: "before" }, { word: "the" }, { word: "deadline", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ʃiː/", translation: "她",
          subComponents: [{ startIndex: 0, words: [{ word: "She" }] }]
        },
        {
          start: 1, end: 4, label: "谓语 (现在完成进行时)", phonetic: "/hæz/ /ˈɔːlweɪz/ /bɪn/ /ˈrʌʃɪŋ/", translation: "总是仓促",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }, { word: "always" }, { word: "been" }, { word: "rushing" }] }
          ]
        },
        {
          start: 5, end: 7, label: "目的状语", phonetic: "/tuː/ /ˈfɪnɪʃ/ /rɪˈpɔːrts/", translation: "完成报告",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "finish" }, { word: "reports" }] }]
        },
        {
          start: 8, end: 10, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ðə/ /ˈdɛdlaɪn/", translation: "在截止日期前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "the" }, { word: "deadline", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "现在完成进行时", text: "has always been rushing 配合 always 表示从过去至今反复发生的习惯性动作，常含负面情感色彩。" },
        { type: "职场搭配", text: "rush to finish (仓促完成)；before the deadline (在截止日期前)。" }
      ]
    },
    {
      id: "q_tense_s229",
      chinese: "每当政府收紧签证政策时，国际学生入学率往往会下降",
      english_full: "International enrollment tends to decline whenever governments tighten visa policies.",
      words: [
        { word: "International" }, { word: "enrollment" }, { word: "tends" }, { word: "to" }, { word: "decline" },
        { word: "whenever" }, { word: "governments" }, { word: "tighten" }, { word: "visa" }, { word: "policies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɪntərˈnæʃənəl/ /ɪnˈroʊlmənt/", translation: "国际学生入学率",
          subComponents: [{ startIndex: 0, words: [{ word: "International" }, { word: "enrollment" }] }]
        },
        {
          start: 2, end: 4, label: "谓语 (一般现在时)", phonetic: "/tɛndz/ /tuː/ /dɪˈklaɪn/", translation: "往往会下降",
          subComponents: [{ startIndex: 0, words: [{ word: "tends" }, { word: "to" }, { word: "decline" }] }]
        },
        {
          start: 5, end: 9, label: "时间状语从句", phonetic: "/wɛnˈɛvər/ /ˈgʌvərmənts/ /ˈtaɪtən/ /ˈviːzə/ /ˈpɒlɪsiz/", translation: "每当政府收紧签证政策时",
          subComponents: [
            { startIndex: 0, words: [{ word: "whenever" }], label: "连词" },
            { startIndex: 1, words: [{ word: "governments" }], label: "(从)主" },
            { startIndex: 2, words: [{ word: "tighten" }], label: "(从)谓" },
            { startIndex: 3, words: [{ word: "visa" }, { word: "policies", punctuation: "." }], label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "一般现在时", text: "tends to decline 与 whenever 从句中的 tighten 均用一般现在时，描述反复发生的普遍规律。" },
        { type: "教育政策", text: "international enrollment (国际入学率)；tighten visa policies (收紧签证政策)。" }
      ]
    }
  ]
};
