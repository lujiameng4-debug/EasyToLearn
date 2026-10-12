export const extensions = {
  "module_relative": [
    {
      id: "q_relative_s300",
      chinese: "上季度跑赢基准的那只风险投资基金吸引了创纪录的资金流入",
      english_full: "The venture fund that outperformed the benchmark last quarter has attracted record inflows.",
      words: [
        { word: "The" }, { word: "venture" }, { word: "fund" }, { word: "that" }, { word: "outperformed" },
        { word: "the" }, { word: "benchmark" }, { word: "last" }, { word: "quarter" }, { word: "has" },
        { word: "attracted" }, { word: "record" }, { word: "inflows", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈvɛntʃər/ /fʌnd/", translation: "那只风险投资基金",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "venture" }, { word: "fund" }] }]
        },
        {
          start: 3, end: 8, label: "定语从句", phonetic: "/ðæt/ /ˌaʊtpərˈfɔːrmd/ /ðə/ /ˈbɛntʃmɑːrk/ /lɑːst/ /ˈkwɔːrtər/", translation: "上季度跑赢基准的",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "outperformed" }, { word: "the" }, { word: "benchmark" }, { word: "last" }, { word: "quarter" }] }]
        },
        {
          start: 9, end: 10, label: "谓语", phonetic: "/hæz/ /əˈtræktɪd/", translation: "吸引了",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "attracted" }] }]
        },
        {
          start: 11, end: 12, label: "宾语", phonetic: "/ˈrɛkərd/ /ˈɪnfləʊz/", translation: "创纪录的资金流入",
          subComponents: [{ startIndex: 0, words: [{ word: "record" }, { word: "inflows", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作 outperformed 的主语，修饰 fund，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s301",
      chinese: "主导内部审计改革的那位首席合规官已被任命进入执行委员会",
      english_full: "The chief compliance officer who orchestrated the internal audit overhaul has been appointed to the executive committee.",
      words: [
        { word: "The" }, { word: "chief" }, { word: "compliance" }, { word: "officer" }, { word: "who" },
        { word: "orchestrated" }, { word: "the" }, { word: "internal" }, { word: "audit" }, { word: "overhaul" },
        { word: "has" }, { word: "been" }, { word: "appointed" }, { word: "to" }, { word: "the" },
        { word: "executive" }, { word: "committee", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /tʃiːf/ /kəmˈplaɪəns/ /ˈɒfɪsər/", translation: "那位首席合规官",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chief" }, { word: "compliance" }, { word: "officer" }] }]
        },
        {
          start: 4, end: 9, label: "定语从句", phonetic: "/huː/ /ˈɔːrkɪstreɪtɪd/ /ðə/ /ɪnˈtɜːrnəl/ /ˈɔːdɪt/ /ˈoʊvərhɔːl/", translation: "主导内部审计改革的",
          subComponents: [{ startIndex: 0, words: [{ word: "who" }, { word: "orchestrated" }, { word: "the" }, { word: "internal" }, { word: "audit" }, { word: "overhaul" }] }]
        },
        {
          start: 10, end: 12, label: "谓语", phonetic: "/hæz/ /bɪn/ /əˈpɔɪntɪd/", translation: "已被任命",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "appointed" }] }]
        },
        {
          start: 13, end: 16, label: "状语", phonetic: "/tuː/ /ðə/ /ɪɡˈzɛkjʊtɪv/ /kəˈmɪti/", translation: "进入执行委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "executive" }, { word: "committee", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，修饰 chief compliance officer，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s302",
      chinese: "其专有算法能实时检测金融欺诈的那家初创公司获得了C轮融资",
      english_full: "The startup whose proprietary algorithm detects financial fraud in real time secured Series C funding.",
      words: [
        { word: "The" }, { word: "startup" }, { word: "whose" }, { word: "proprietary" }, { word: "algorithm" },
        { word: "detects" }, { word: "financial" }, { word: "fraud" }, { word: "in" }, { word: "real" },
        { word: "time" }, { word: "secured" }, { word: "Series" }, { word: "C" }, { word: "funding", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌp/", translation: "那家初创公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "startup" }] }]
        },
        {
          start: 2, end: 10, label: "定语从句", phonetic: "/huːz/ /prəˈpraɪəteri/ /ˈælɡərɪðəm/ /dɪˈtɛkts/ /faɪˈnænʃəl/ /frɔːd/ /ɪn/ /riːl/ /taɪm/", translation: "其专有算法能实时检测金融欺诈的",
          subComponents: [{ startIndex: 0, words: [{ word: "whose" }, { word: "proprietary" }, { word: "algorithm" }, { word: "detects" }, { word: "financial" }, { word: "fraud" }, { word: "in" }, { word: "real" }, { word: "time" }] }]
        },
        {
          start: 11, end: 11, label: "谓语", phonetic: "/sɪˈkjʊrd/", translation: "获得了",
          subComponents: [{ startIndex: 0, words: [{ word: "secured" }] }]
        },
        {
          start: 12, end: 14, label: "宾语", phonetic: "/ˈsɪriːz/ /siː/ /ˈfʌndɪŋ/", translation: "C轮融资",
          subComponents: [{ startIndex: 0, words: [{ word: "Series" }, { word: "C" }, { word: "funding", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose 表示所属关系，修饰 startup，在从句中作定语修饰 proprietary algorithm。" }
      ]
    },
    {
      id: "q_relative_s303",
      chinese: "这项利益相关方已期待逾十年的监管改革终于于本月生效",
      english_full: "The regulatory overhaul, which stakeholders had anticipated for over a decade, finally took effect this month.",
      words: [
        { word: "The" }, { word: "regulatory" }, { word: "overhaul", punctuation: "," }, { word: "which" },
        { word: "stakeholders" }, { word: "had" }, { word: "anticipated" }, { word: "for" }, { word: "over" },
        { word: "a" }, { word: "decade", punctuation: "," }, { word: "finally" }, { word: "took" }, { word: "effect" },
        { word: "this" }, { word: "month", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛɡjʊlətɔːri/ /ˈoʊvərhɔːl/", translation: "这项监管改革",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "regulatory" }, { word: "overhaul", punctuation: "," }] }]
        },
        {
          start: 3, end: 10, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /ˈsteɪkhoʊldərz/ /hæd/ /ænˈtɪsɪpeɪtɪd/ /fɔːr/ /ˈoʊvər/ /ə/ /ˈdɛkeɪd/", translation: "利益相关方已期待逾十年的",
          subComponents: [{ startIndex: 0, words: [{ word: "which" }, { word: "stakeholders" }, { word: "had" }, { word: "anticipated" }, { word: "for" }, { word: "over" }, { word: "a" }, { word: "decade", punctuation: "," }] }]
        },
        {
          start: 11, end: 13, label: "谓语", phonetic: "/ˈfaɪnəli/ /tʊk/ /ɪˈfɛkt/", translation: "终于生效",
          subComponents: [{ startIndex: 0, words: [{ word: "finally" }, { word: "took" }, { word: "effect" }] }]
        },
        {
          start: 14, end: 15, label: "时间状语", phonetic: "/ðɪs/ /mʌnθ/", translation: "于本月",
          subComponents: [{ startIndex: 0, words: [{ word: "this" }, { word: "month", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，补充说明 regulatory overhaul 的期待历时，不可换用 that。" }
      ]
    },
    {
      id: "q_relative_s304",
      chinese: "跨境税务争议在此裁决的那个司法管辖区已更新其仲裁规则",
      english_full: "The jurisdiction where cross-border tax disputes are adjudicated has updated its arbitration rules.",
      words: [
        { word: "The" }, { word: "jurisdiction" }, { word: "where" }, { word: "cross-border" }, { word: "tax" },
        { word: "disputes" }, { word: "are" }, { word: "adjudicated" }, { word: "has" }, { word: "updated" },
        { word: "its" }, { word: "arbitration" }, { word: "rules", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌdʒʊərɪsˈdɪkʃən/", translation: "那个司法管辖区",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "jurisdiction" }] }]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/weər/ /krɒs-ˈbɔːrdər/ /tæks/ /dɪˈspjuːts/ /ɑːr/ /əˈdʒuːdɪkeɪtɪd/", translation: "跨境税务争议在此裁决的",
          subComponents: [{ startIndex: 0, words: [{ word: "where" }, { word: "cross-border" }, { word: "tax" }, { word: "disputes" }, { word: "are" }, { word: "adjudicated" }] }]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /ˈʌpdeɪtɪd/", translation: "已更新",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "updated" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ɪts/ /ˌɑːrbɪˈtreɪʃən/ /ruːlz/", translation: "其仲裁规则",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "arbitration" }, { word: "rules", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 在从句中作地点状语，修饰 jurisdiction，表示「在该管辖区内」。" }
      ]
    },
    {
      id: "q_relative_s305",
      chinese: "主权财富基金主导全球基础设施投资的那十年正让位于私募股权",
      english_full: "The decade when sovereign wealth funds dominated global infrastructure investment is giving way to private equity.",
      words: [
        { word: "The" }, { word: "decade" }, { word: "when" }, { word: "sovereign" }, { word: "wealth" },
        { word: "funds" }, { word: "dominated" }, { word: "global" }, { word: "infrastructure" }, { word: "investment" },
        { word: "is" }, { word: "giving" }, { word: "way" }, { word: "to" }, { word: "private" },
        { word: "equity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈdɛkeɪd/", translation: "那十年",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "decade" }] }]
        },
        {
          start: 2, end: 9, label: "定语从句", phonetic: "/wɛn/ /ˈsɒvrɪn/ /wɛlθ/ /fʌndz/ /ˈdɒmɪneɪtɪd/ /ˈɡloʊbəl/ /ˈɪnfrəstrʌktʃər/ /ɪnˈvɛstmənt/", translation: "主权财富基金主导全球基础设施投资的",
          subComponents: [{ startIndex: 0, words: [{ word: "when" }, { word: "sovereign" }, { word: "wealth" }, { word: "funds" }, { word: "dominated" }, { word: "global" }, { word: "infrastructure" }, { word: "investment" }] }]
        },
        {
          start: 10, end: 12, label: "谓语", phonetic: "/ɪz/ /ˈɡɪvɪŋ/ /weɪ/", translation: "正让位",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "giving" }, { word: "way" }] }]
        },
        {
          start: 13, end: 15, label: "状语", phonetic: "/tuː/ /ˈpraɪvət/ /ˈɛkwɪti/", translation: "于私募股权",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "private" }, { word: "equity", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (when)", text: "when 在从句中作时间状语，修饰 decade，表示「在……时期」。" }
      ]
    },
    {
      id: "q_relative_s306",
      chinese: "董事会为之委托独立审查的那份可持续发展报告于昨日发布",
      english_full: "The sustainability report for which the board commissioned an independent review was published yesterday.",
      words: [
        { word: "The" }, { word: "sustainability" }, { word: "report" }, { word: "for" }, { word: "which" },
        { word: "the" }, { word: "board" }, { word: "commissioned" }, { word: "an" }, { word: "independent" },
        { word: "review" }, { word: "was" }, { word: "published" }, { word: "yesterday", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /səˌsteɪnəˈbɪlɪti/ /rɪˈpɔːrt/", translation: "那份可持续发展报告",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sustainability" }, { word: "report" }] }]
        },
        {
          start: 3, end: 10, label: "定语从句", phonetic: "/fɔːr/ /wɪtʃ/ /ðə/ /bɔːrd/ /kəˈmɪʃənd/ /æn/ /ˌɪndɪˈpɛndənt/ /rɪˈvjuː/", translation: "董事会为之委托独立审查的",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "which" }, { word: "the" }, { word: "board" }, { word: "commissioned" }, { word: "an" }, { word: "independent" }, { word: "review" }] }]
        },
        {
          start: 11, end: 12, label: "谓语", phonetic: "/wɒz/ /ˈpʌblɪʃt/", translation: "发布",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "published" }] }]
        },
        {
          start: 13, end: 13, label: "时间状语", phonetic: "/ˈjɛstərdeɪ/", translation: "于昨日",
          subComponents: [{ startIndex: 0, words: [{ word: "yesterday", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (for which)", text: "for which 为「介词+关系代词」结构，commission a review for the report 中 for 提前至 which 之前。" }
      ]
    },
    {
      id: "q_relative_s307",
      chinese: "向其传阅招股说明书的那批机构投资者对此次发行表达了浓厚兴趣",
      english_full: "The institutional investors to whom the prospectus was circulated expressed strong interest in the offering.",
      words: [
        { word: "The" }, { word: "institutional" }, { word: "investors" }, { word: "to" }, { word: "whom" },
        { word: "the" }, { word: "prospectus" }, { word: "was" }, { word: "circulated" }, { word: "expressed" },
        { word: "strong" }, { word: "interest" }, { word: "in" }, { word: "the" }, { word: "offering", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌɪnstɪˈtuːʃənəl/ /ɪnˈvɛstərz/", translation: "那批机构投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "institutional" }, { word: "investors" }] }]
        },
        {
          start: 3, end: 8, label: "定语从句", phonetic: "/tuː/ /huːm/ /ðə/ /prəˈspɛktəs/ /wɒz/ /ˈsɜːrkjʊleɪtɪd/", translation: "向其传阅招股说明书的",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "whom" }, { word: "the" }, { word: "prospectus" }, { word: "was" }, { word: "circulated" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/ɪkˈsprɛst/", translation: "表达了",
          subComponents: [{ startIndex: 0, words: [{ word: "expressed" }] }]
        },
        {
          start: 10, end: 14, label: "宾语", phonetic: "/strɒŋ/ /ˈɪntrəst/ /ɪn/ /ðə/ /ˈɒfərɪŋ/", translation: "对此次发行的浓厚兴趣",
          subComponents: [{ startIndex: 0, words: [{ word: "strong" }, { word: "interest" }, { word: "in" }, { word: "the" }, { word: "offering", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (to whom)", text: "to whom 为正式语体中的「介词+关系代词」结构，circulate the prospectus to investors 中 to 提前。" }
      ]
    },
    {
      id: "q_relative_s308",
      chinese: "撰写那份里程碑式碳定价白皮书的那位政策分析师已加入顾问小组",
      english_full: "The policy analyst who authored the landmark carbon-pricing white paper has joined the advisory panel.",
      words: [
        { word: "The" }, { word: "policy" }, { word: "analyst" }, { word: "who" }, { word: "authored" },
        { word: "the" }, { word: "landmark" }, { word: "carbon-pricing" }, { word: "white" }, { word: "paper" },
        { word: "has" }, { word: "joined" }, { word: "the" }, { word: "advisory" }, { word: "panel", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈpɒlɪsi/ /ˈænəlɪst/", translation: "那位政策分析师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "policy" }, { word: "analyst" }] }]
        },
        {
          start: 3, end: 9, label: "定语从句", phonetic: "/huː/ /ˈɔːθərd/ /ðə/ /ˈlændmɑːrk/ /ˈkɑːrbən-ˌpraɪsɪŋ/ /waɪt/ /ˈpeɪpər/", translation: "撰写那份里程碑式碳定价白皮书的",
          subComponents: [{ startIndex: 0, words: [{ word: "who" }, { word: "authored" }, { word: "the" }, { word: "landmark" }, { word: "carbon-pricing" }, { word: "white" }, { word: "paper" }] }]
        },
        {
          start: 10, end: 11, label: "谓语", phonetic: "/hæz/ /dʒɔɪnd/", translation: "已加入",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "joined" }] }]
        },
        {
          start: 12, end: 14, label: "宾语", phonetic: "/ðə/ /ədˈvaɪzəri/ /ˈpænəl/", translation: "顾问小组",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "advisory" }, { word: "panel", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，修饰 policy analyst，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s309",
      chinese: "规管知识产权转让的那项条款仍是最具争议的条款",
      english_full: "The clause that governs intellectual property transfer remains the most contentious provision.",
      words: [
        { word: "The" }, { word: "clause" }, { word: "that" }, { word: "governs" }, { word: "intellectual" },
        { word: "property" }, { word: "transfer" }, { word: "remains" }, { word: "the" }, { word: "most" },
        { word: "contentious" }, { word: "provision", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /klɔːz/", translation: "那项条款",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "clause" }] }]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/ðæt/ /ˈɡʌvərnz/ /ˌɪntəˈlɛktʃuəl/ /ˈprɒpərti/ /trænsˈfɜːr/", translation: "规管知识产权转让的",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "governs" }, { word: "intellectual" }, { word: "property" }, { word: "transfer" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/rɪˈmeɪnz/", translation: "仍是",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 8, end: 11, label: "表语", phonetic: "/ðə/ /moʊst/ /kənˈtɛnʃəs/ /prəˈvɪʒən/", translation: "最具争议的条款",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "most" }, { word: "contentious" }, { word: "provision", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作主语，修饰 clause，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s310",
      chinese: "其疫苗候选药物已通过三期临床试验的那家制药公司股价大幅飙升",
      english_full: "The pharmaceutical company whose vaccine candidate cleared Phase III trials saw its share price surge.",
      words: [
        { word: "The" }, { word: "pharmaceutical" }, { word: "company" }, { word: "whose" }, { word: "vaccine" },
        { word: "candidate" }, { word: "cleared" }, { word: "Phase" }, { word: "III" }, { word: "trials" },
        { word: "saw" }, { word: "its" }, { word: "share" }, { word: "price" }, { word: "surge", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌfɑːrməˈsuːtɪkəl/ /ˈkʌmpəni/", translation: "那家制药公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pharmaceutical" }, { word: "company" }] }]
        },
        {
          start: 3, end: 9, label: "定语从句", phonetic: "/huːz/ /vækˈsiːn/ /ˈkændɪdeɪt/ /klɪrd/ /feɪz/ /θriː/ /ˈtraɪəlz/", translation: "其疫苗候选药物已通过三期临床试验的",
          subComponents: [{ startIndex: 0, words: [{ word: "whose" }, { word: "vaccine" }, { word: "candidate" }, { word: "cleared" }, { word: "Phase" }, { word: "III" }, { word: "trials" }] }]
        },
        {
          start: 10, end: 10, label: "谓语", phonetic: "/sɔː/", translation: "目睹",
          subComponents: [{ startIndex: 0, words: [{ word: "saw" }] }]
        },
        {
          start: 11, end: 14, label: "宾语", phonetic: "/ɪts/ /ʃɛər/ /praɪs/ /sɜːrdʒ/", translation: "其股价大幅飙升",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "share" }, { word: "price" }, { word: "surge", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose 修饰 company，在从句中作定语表示所属关系；surge 为省略 to 的不定式作宾语补足语。" }
      ]
    },
    {
      id: "q_relative_s311",
      chinese: "双方在严格保密条件下谈判的这项并购协议获全票批准",
      english_full: "The merger agreement, which both parties negotiated under strict confidentiality, was ratified unanimously.",
      words: [
        { word: "The" }, { word: "merger" }, { word: "agreement", punctuation: "," }, { word: "which" },
        { word: "both" }, { word: "parties" }, { word: "negotiated" }, { word: "under" }, { word: "strict" },
        { word: "confidentiality", punctuation: "," }, { word: "was" }, { word: "ratified" }, { word: "unanimously", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmɜːrdʒər/ /əˈɡriːmənt/", translation: "这项并购协议",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "merger" }, { word: "agreement", punctuation: "," }] }]
        },
        {
          start: 3, end: 9, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /boʊθ/ /ˈpɑːrtiz/ /nɪˈɡoʊʃieɪtɪd/ /ˈʌndər/ /strɪkt/ /ˌkɒnfɪdɛnʃiˈælɪti/", translation: "双方在严格保密条件下谈判的",
          subComponents: [{ startIndex: 0, words: [{ word: "which" }, { word: "both" }, { word: "parties" }, { word: "negotiated" }, { word: "under" }, { word: "strict" }, { word: "confidentiality", punctuation: "," }] }]
        },
        {
          start: 10, end: 11, label: "谓语", phonetic: "/wɒz/ /ˈrætɪfaɪd/", translation: "获批准",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "ratified" }] }]
        },
        {
          start: 12, end: 12, label: "状语", phonetic: "/juːˈnænɪməsli/", translation: "全票",
          subComponents: [{ startIndex: 0, words: [{ word: "unanimously", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，补充说明 merger agreement 的谈判背景，不可换用 that。" }
      ]
    },
    {
      id: "q_relative_s312",
      chinese: "消费者信心由谨慎转向乐观的那个拐点往往先于市场反弹出现",
      english_full: "The inflection point where consumer sentiment shifts from cautious to optimistic often precedes a market rally.",
      words: [
        { word: "The" }, { word: "inflection" }, { word: "point" }, { word: "where" }, { word: "consumer" },
        { word: "sentiment" }, { word: "shifts" }, { word: "from" }, { word: "cautious" }, { word: "to" },
        { word: "optimistic" }, { word: "often" }, { word: "precedes" }, { word: "a" }, { word: "market" },
        { word: "rally", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪnˈflɛkʃən/ /pɔɪnt/", translation: "那个拐点",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "inflection" }, { word: "point" }] }]
        },
        {
          start: 3, end: 10, label: "定语从句", phonetic: "/weər/ /kənˈsjuːmər/ /ˈsɛntɪmənt/ /ʃɪfts/ /frɒm/ /ˈkɔːʃəs/ /tuː/ /ˌɒptɪˈmɪstɪk/", translation: "消费者信心由谨慎转向乐观的",
          subComponents: [{ startIndex: 0, words: [{ word: "where" }, { word: "consumer" }, { word: "sentiment" }, { word: "shifts" }, { word: "from" }, { word: "cautious" }, { word: "to" }, { word: "optimistic" }] }]
        },
        {
          start: 11, end: 12, label: "谓语", phonetic: "/ˈɒfən/ /prɪˈsiːdz/", translation: "往往先于……出现",
          subComponents: [{ startIndex: 0, words: [{ word: "often" }, { word: "precedes" }] }]
        },
        {
          start: 13, end: 15, label: "宾语", phonetic: "/ə/ /ˈmɑːrkɪt/ /ˈræli/", translation: "市场反弹",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "market" }, { word: "rally", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 修饰抽象名词 inflection point（阶段/节点），在从句中作状语，相当于 at which。" }
      ]
    },
    {
      id: "q_relative_s313",
      chinese: "交易算法部署其上的那个平台出现了前所未有的延迟问题",
      english_full: "The platform on which the trading algorithm was deployed experienced unprecedented latency issues.",
      words: [
        { word: "The" }, { word: "platform" }, { word: "on" }, { word: "which" }, { word: "the" },
        { word: "trading" }, { word: "algorithm" }, { word: "was" }, { word: "deployed" }, { word: "experienced" },
        { word: "unprecedented" }, { word: "latency" }, { word: "issues", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈplætfɔːrm/", translation: "那个平台",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "platform" }] }]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/ɒn/ /wɪtʃ/ /ðə/ /ˈtreɪdɪŋ/ /ˈælɡərɪðəm/ /wɒz/ /dɪˈplɔɪd/", translation: "交易算法部署其上的",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "which" }, { word: "the" }, { word: "trading" }, { word: "algorithm" }, { word: "was" }, { word: "deployed" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/ɪkˈspɪriənst/", translation: "出现了",
          subComponents: [{ startIndex: 0, words: [{ word: "experienced" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ʌnprɪˈsɛdɛntɪd/ /ˈleɪtənsi/ /ˈɪʃuːz/", translation: "前所未有的延迟问题",
          subComponents: [{ startIndex: 0, words: [{ word: "unprecedented" }, { word: "latency" }, { word: "issues", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (on which)", text: "on which 为「介词+关系代词」结构，deploy the algorithm on the platform 中 on 提前。" }
      ]
    },
    {
      id: "q_relative_s314",
      chinese: "跨国供应链运作其中的那个环境已变得日益动荡",
      english_full: "The environment in which multinational supply chains operate has grown increasingly volatile.",
      words: [
        { word: "The" }, { word: "environment" }, { word: "in" }, { word: "which" }, { word: "multinational" },
        { word: "supply" }, { word: "chains" }, { word: "operate" }, { word: "has" }, { word: "grown" },
        { word: "increasingly" }, { word: "volatile", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ɪnˈvaɪrənmənt/", translation: "那个环境",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "environment" }] }]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/ɪn/ /wɪtʃ/ /ˌmʌltiˈnæʃənəl/ /səˈplaɪ/ /tʃeɪnz/ /ˈɒpəreɪt/", translation: "跨国供应链运作其中的",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "which" }, { word: "multinational" }, { word: "supply" }, { word: "chains" }, { word: "operate" }] }]
        },
        {
          start: 8, end: 10, label: "谓语", phonetic: "/hæz/ /ɡroʊn/ /ɪnˈkriːsɪŋli/", translation: "已变得日益",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "grown" }, { word: "increasingly" }] }]
        },
        {
          start: 11, end: 11, label: "表语", phonetic: "/ˈvɒlətaɪl/", translation: "动荡",
          subComponents: [{ startIndex: 0, words: [{ word: "volatile", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (in which)", text: "in which 为「介词+关系代词」结构，operate in the environment 中 in 提前至 which 之前。" }
      ]
    },
    {
      id: "q_relative_s315",
      chinese: "主持贸易争端仲裁的那位仲裁员获得了国际赞誉",
      english_full: "The arbitrator who presided over the trade dispute settlement received international commendation.",
      words: [
        { word: "The" }, { word: "arbitrator" }, { word: "who" }, { word: "presided" }, { word: "over" },
        { word: "the" }, { word: "trade" }, { word: "dispute" }, { word: "settlement" }, { word: "received" },
        { word: "international" }, { word: "commendation", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɑːrbɪtreɪtər/", translation: "那位仲裁员",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "arbitrator" }] }]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/huː/ /prɪˈzaɪdɪd/ /ˈoʊvər/ /ðə/ /treɪd/ /dɪˈspjuːt/ /ˈsɛtlmənt/", translation: "主持贸易争端仲裁的",
          subComponents: [{ startIndex: 0, words: [{ word: "who" }, { word: "presided" }, { word: "over" }, { word: "the" }, { word: "trade" }, { word: "dispute" }, { word: "settlement" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/rɪˈsiːvd/", translation: "获得了",
          subComponents: [{ startIndex: 0, words: [{ word: "received" }] }]
        },
        {
          start: 10, end: 11, label: "宾语", phonetic: "/ˌɪntərˈnæʃənəl/ /ˌkɒmɛnˈdeɪʃən/", translation: "国际赞誉",
          subComponents: [{ startIndex: 0, words: [{ word: "international" }, { word: "commendation", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，修饰 arbitrator，preside over 为固定搭配。" }
      ]
    },
    {
      id: "q_relative_s316",
      chinese: "调查人员在调查期间发现的那项证据牵连了高级高管",
      english_full: "The evidence that investigators uncovered during the probe implicated senior executives.",
      words: [
        { word: "The" }, { word: "evidence" }, { word: "that" }, { word: "investigators" }, { word: "uncovered" },
        { word: "during" }, { word: "the" }, { word: "probe" }, { word: "implicated" }, { word: "senior" },
        { word: "executives", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɛvɪdəns/", translation: "那项证据",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "evidence" }] }]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/ðæt/ /ɪnˈvɛstɪɡeɪtərz/ /ʌnˈkʌvərd/ /ˈdjʊərɪŋ/ /ðə/ /proʊb/", translation: "调查人员在调查期间发现的",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "investigators" }, { word: "uncovered" }, { word: "during" }, { word: "the" }, { word: "probe" }] }]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/ˈɪmplɪkeɪtɪd/", translation: "牵连了",
          subComponents: [{ startIndex: 0, words: [{ word: "implicated" }] }]
        },
        {
          start: 9, end: 10, label: "宾语", phonetic: "/ˈsiːniər/ /ɪɡˈzɛkjʊtɪvz/", translation: "高级高管",
          subComponents: [{ startIndex: 0, words: [{ word: "senior" }, { word: "executives", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作 uncovered 的宾语，修饰 evidence，口语中可省略。" }
      ]
    },
    {
      id: "q_relative_s317",
      chinese: "陈教授——其跨学科研究架起了神经科学与人工智能之间的桥梁——荣获了这项声誉卓著的奖项",
      english_full: "Professor Chen, whose interdisciplinary research bridged neuroscience and artificial intelligence, received the prestigious award.",
      words: [
        { word: "Professor" }, { word: "Chen", punctuation: "," }, { word: "whose" }, { word: "interdisciplinary" },
        { word: "research" }, { word: "bridged" }, { word: "neuroscience" }, { word: "and" }, { word: "artificial" },
        { word: "intelligence", punctuation: "," }, { word: "received" }, { word: "the" }, { word: "prestigious" },
        { word: "award", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/prəˈfɛsər/ /tʃɛn/", translation: "陈教授",
          subComponents: [{ startIndex: 0, words: [{ word: "Professor" }, { word: "Chen", punctuation: "," }] }]
        },
        {
          start: 2, end: 9, label: "非限制性定语从句", phonetic: "/huːz/ /ˌɪntərˌdɪsəˈplɪnəri/ /rɪˈsɜːrtʃ/ /brɪdʒd/ /ˈnjʊroʊsaɪəns/ /ænd/ /ˌɑːrtɪˈfɪʃəl/ /ɪnˈtɛlɪdʒəns/", translation: "其跨学科研究架起了神经科学与人工智能之间的桥梁",
          subComponents: [{ startIndex: 0, words: [{ word: "whose" }, { word: "interdisciplinary" }, { word: "research" }, { word: "bridged" }, { word: "neuroscience" }, { word: "and" }, { word: "artificial" }, { word: "intelligence", punctuation: "," }] }]
        },
        {
          start: 10, end: 10, label: "谓语", phonetic: "/rɪˈsiːvd/", translation: "荣获了",
          subComponents: [{ startIndex: 0, words: [{ word: "received" }] }]
        },
        {
          start: 11, end: 13, label: "宾语", phonetic: "/ðə/ /prɛˈstɪdʒəs/ /əˈwɔːrd/", translation: "这项声誉卓著的奖项",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "prestigious" }, { word: "award", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (whose)", text: "whose 引导非限制性定语从句，插入主句中间，对 Professor Chen 起补充说明作用。" }
      ]
    },
    {
      id: "q_relative_s318",
      chinese: "管理层与之谈判重组条款的那些利益相关方批准了最终协议",
      english_full: "The stakeholders with whom management negotiated the restructuring terms approved the final agreement.",
      words: [
        { word: "The" }, { word: "stakeholders" }, { word: "with" }, { word: "whom" }, { word: "management" },
        { word: "negotiated" }, { word: "the" }, { word: "restructuring" }, { word: "terms" }, { word: "approved" },
        { word: "the" }, { word: "final" }, { word: "agreement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsteɪkhoʊldərz/", translation: "那些利益相关方",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "stakeholders" }] }]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/wɪð/ /huːm/ /ˈmænɪdʒmənt/ /nɪˈɡoʊʃieɪtɪd/ /ðə/ /riːˈstrʌktʃərɪŋ/ /tɜːrmz/", translation: "管理层与之谈判重组条款的",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "whom" }, { word: "management" }, { word: "negotiated" }, { word: "the" }, { word: "restructuring" }, { word: "terms" }] }]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/əˈpruːvd/", translation: "批准了",
          subComponents: [{ startIndex: 0, words: [{ word: "approved" }] }]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ðə/ /ˈfaɪnəl/ /əˈɡriːmənt/", translation: "最终协议",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "final" }, { word: "agreement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定语从句 (with whom)", text: "with whom 为「介词+关系代词」结构，negotiate with stakeholders 中 with 提前至 whom 之前。" }
      ]
    }
  ]
};
