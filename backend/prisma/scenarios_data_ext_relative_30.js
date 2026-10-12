export const extensions = {
  "module_relative": [
    {
      id: "q_relative_s100",
      chinese: "那个其创新彻底改变了科技行业的企业家正在发表主旨演讲",
      english_full: "The entrepreneur whose innovations revolutionized the tech industry is delivering the keynote speech.",
      words: [
        { word: "The" },
        { word: "entrepreneur" },
        { word: "whose" },
        { word: "innovations" },
        { word: "revolutionized" },
        { word: "the" },
        { word: "tech" },
        { word: "industry" },
        { word: "is" },
        { word: "delivering" },
        { word: "the" },
        { word: "keynote" },
        { word: "speech", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌɒntrəprəˈnɜːr/", translation: "那个企业家",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "entrepreneur" }] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/huːz/ /ˌɪnəˈveɪʃənz/ /ˌrɛvəˈluːʃəˌnaɪzd/ /ðə/ /tɛk/ /ˈɪndəstri/", translation: "其创新彻底改变了科技行业的",
          subComponents: [
            { startIndex: 0, words: [{ word: "whose" }, { word: "innovations" }, { word: "revolutionized" }, { word: "the" }, { word: "tech" }, { word: "industry" }] }
          ]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/ɪz/ /dɪˈlɪvərɪŋ/", translation: "正在发表",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }, { word: "delivering" }] }
          ]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ðə/ /ˈkiːˌnoʊt/ /spiːtʃ/", translation: "主旨演讲",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "keynote" }, { word: "speech", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose innovations... 作为一个整体修饰前面的 entrepreneur，whose 在从句中作定语表示所属关系。" }
      ]
    },
    {
      id: "q_relative_s101",
      chinese: "那位准确预测了市场衰退的分析师已被晋升为高级合伙人",
      english_full: "The analyst who predicted the market downturn has been promoted to senior partner.",
      words: [
        { word: "The" },
        { word: "analyst" },
        { word: "who" },
        { word: "predicted" },
        { word: "the" },
        { word: "market" },
        { word: "downturn" },
        { word: "has" },
        { word: "been" },
        { word: "promoted" },
        { word: "to" },
        { word: "senior" },
        { word: "partner", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈænəlɪst/", translation: "那位分析师",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "analyst" }] }
          ]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/huː/ /prɪˈdɪktɪd/ /ðə/ /ˈmɑːrkɪt/ /ˈdaʊntɜːrn/", translation: "准确预测了市场衰退的",
          subComponents: [
            { startIndex: 0, words: [{ word: "who" }, { word: "predicted" }, { word: "the" }, { word: "market" }, { word: "downturn" }] }
          ]
        },
        {
          start: 7, end: 9, label: "谓语", phonetic: "/hæz/ /bɪn/ /prəˈmoʊtɪd/", translation: "已被晋升",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "promoted" }] }
          ]
        },
        {
          start: 10, end: 12, label: "状语", phonetic: "/tuː/ /ˈsiːniər/ /ˈpɑːrtnər/", translation: "为高级合伙人",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "senior" }, { word: "partner", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，修饰 analyst，为限制性定语从句。" }
      ]
    },
    {
      id: "q_relative_s102",
      chinese: "议会通过的那套监管框架将重塑金融行业",
      english_full: "The regulatory framework that the parliament passed will reshape the financial sector.",
      words: [
        { word: "The" },
        { word: "regulatory" },
        { word: "framework" },
        { word: "that" },
        { word: "the" },
        { word: "parliament" },
        { word: "passed" },
        { word: "will" },
        { word: "reshape" },
        { word: "the" },
        { word: "financial" },
        { word: "sector", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛgjələtɔːri/ /ˈfreɪmwɜːrk/", translation: "那套监管框架",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "regulatory" }, { word: "framework" }] }
          ]
        },
        {
          start: 3, end: 6, label: "定语从句", phonetic: "/ðæt/ /ðə/ /ˈpɑːrləmənt/ /pæst/", translation: "议会通过的",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "parliament" }, { word: "passed" }] }
          ]
        },
        {
          start: 7, end: 8, label: "谓语", phonetic: "/wɪl/ /riːˈʃeɪp/", translation: "将重塑",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }, { word: "reshape" }] }
          ]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ðə/ /faɪˈnænʃəl/ /ˈsɛktər/", translation: "金融行业",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "financial" }, { word: "sector", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 在从句中作 passed 的宾语，修饰 framework，口语中可省略。" }
      ]
    },
    {
      id: "q_relative_s103",
      chinese: "董事会一致选中的那位候选人将于下季度出任首席执行官",
      english_full: "The candidate whom the board selected unanimously will assume the CEO role next quarter.",
      words: [
        { word: "The" },
        { word: "candidate" },
        { word: "whom" },
        { word: "the" },
        { word: "board" },
        { word: "selected" },
        { word: "unanimously" },
        { word: "will" },
        { word: "assume" },
        { word: "the" },
        { word: "CEO" },
        { word: "role" },
        { word: "next" },
        { word: "quarter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkændɪdət/", translation: "那位候选人",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "candidate" }] }
          ]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/huːm/ /ðə/ /bɔːrd/ /sɪˈlɛktɪd/ /juːˈnænɪməsli/", translation: "董事会一致选中的",
          subComponents: [
            { startIndex: 0, words: [{ word: "whom" }, { word: "the" }, { word: "board" }, { word: "selected" }, { word: "unanimously" }] }
          ]
        },
        {
          start: 7, end: 8, label: "谓语", phonetic: "/wɪl/ /əˈsuːm/", translation: "将出任",
          subComponents: [
            { startIndex: 0, words: [{ word: "will" }, { word: "assume" }] }
          ]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ðə/ /ˌsiː.iːˈoʊ/ /roʊl/", translation: "首席执行官职务",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "CEO" }, { word: "role" }] }
          ]
        },
        {
          start: 12, end: 13, label: "时间状语", phonetic: "/nɛkst/ /ˈkwɔːrtər/", translation: "下季度",
          subComponents: [
            { startIndex: 0, words: [{ word: "next" }, { word: "quarter", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (whom)", text: "whom 为关系代词宾格，在从句中作 selected 的宾语，正式文体中修饰人作宾语时用 whom。" }
      ]
    },
    {
      id: "q_relative_s104",
      chinese: "股东否决的那项并购提案被认为风险过高",
      english_full: "The merger proposal which the shareholders rejected was deemed too risky.",
      words: [
        { word: "The" },
        { word: "merger" },
        { word: "proposal" },
        { word: "which" },
        { word: "the" },
        { word: "shareholders" },
        { word: "rejected" },
        { word: "was" },
        { word: "deemed" },
        { word: "too" },
        { word: "risky", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmɜːrdʒər/ /prəˈpoʊzəl/", translation: "那项并购提案",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "merger" }, { word: "proposal" }] }
          ]
        },
        {
          start: 3, end: 6, label: "定语从句", phonetic: "/wɪtʃ/ /ðə/ /ˈʃɛrˌhoʊldərz/ /rɪˈdʒɛktɪd/", translation: "股东否决的",
          subComponents: [
            { startIndex: 0, words: [{ word: "which" }, { word: "the" }, { word: "shareholders" }, { word: "rejected" }] }
          ]
        },
        {
          start: 7, end: 8, label: "谓语", phonetic: "/wɒz/ /diːmd/", translation: "被认为",
          subComponents: [
            { startIndex: 0, words: [{ word: "was" }, { word: "deemed" }] }
          ]
        },
        {
          start: 9, end: 10, label: "表语", phonetic: "/tuː/ /ˈrɪski/", translation: "风险过高",
          subComponents: [
            { startIndex: 0, words: [{ word: "too" }, { word: "risky", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (which)", text: "which 在从句中作 rejected 的宾语，修饰物时用 which 或 that 均可。" }
      ]
    },
    {
      id: "q_relative_s105",
      chinese: "谈判陷入僵局的那个会议室仍处于严密安保之下",
      english_full: "The conference room where the negotiations stalled remains under tight security.",
      words: [
        { word: "The" },
        { word: "conference" },
        { word: "room" },
        { word: "where" },
        { word: "the" },
        { word: "negotiations" },
        { word: "stalled" },
        { word: "remains" },
        { word: "under" },
        { word: "tight" },
        { word: "security", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkɒnfərəns/ /ruːm/", translation: "那个会议室",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "conference" }, { word: "room" }] }
          ]
        },
        {
          start: 3, end: 6, label: "定语从句", phonetic: "/wɛər/ /ðə/ /nɪˌɡoʊʃiˈeɪʃənz/ /stɔːld/", translation: "谈判陷入僵局的",
          subComponents: [
            { startIndex: 0, words: [{ word: "where" }, { word: "the" }, { word: "negotiations" }, { word: "stalled" }] }
          ]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/rɪˈmeɪnz/", translation: "仍处于",
          subComponents: [
            { startIndex: 0, words: [{ word: "remains" }] }
          ]
        },
        {
          start: 8, end: 10, label: "表语", phonetic: "/ˈʌndər/ /taɪt/ /sɪˈkjʊrɪti/", translation: "严密安保之下",
          subComponents: [
            { startIndex: 0, words: [{ word: "under" }, { word: "tight" }, { word: "security", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 为关系副词，在从句中作地点状语，相当于 in which，修饰 conference room。" }
      ]
    },
    {
      id: "q_relative_s106",
      chinese: "营收达到峰值的那个季度恰好与产品发布同期",
      english_full: "The quarter when revenue peaked coincided with the product launch.",
      words: [
        { word: "The" },
        { word: "quarter" },
        { word: "when" },
        { word: "revenue" },
        { word: "peaked" },
        { word: "coincided" },
        { word: "with" },
        { word: "the" },
        { word: "product" },
        { word: "launch", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkwɔːrtər/", translation: "那个季度",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "quarter" }] }
          ]
        },
        {
          start: 2, end: 4, label: "定语从句", phonetic: "/wɛn/ /ˈrɛvənjuː/ /piːkt/", translation: "营收达到峰值的",
          subComponents: [
            { startIndex: 0, words: [{ word: "when" }, { word: "revenue" }, { word: "peaked" }] }
          ]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˌkoʊɪnˈsaɪdɪd/", translation: "恰好同期",
          subComponents: [
            { startIndex: 0, words: [{ word: "coincided" }] }
          ]
        },
        {
          start: 6, end: 9, label: "状语", phonetic: "/wɪð/ /ðə/ /ˈprɒdʌkt/ /lɔːntʃ/", translation: "与产品发布",
          subComponents: [
            { startIndex: 0, words: [{ word: "with" }, { word: "the" }, { word: "product" }, { word: "launch", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (when)", text: "when 为关系副词，修饰表示时间的先行词 quarter，在从句中作时间状语，相当于 during which。" }
      ]
    },
    {
      id: "q_relative_s107",
      chinese: "那就是委员会无限期推迟投票的根本原因",
      english_full: "That is the rationale why the committee postponed the vote indefinitely.",
      words: [
        { word: "That" },
        { word: "is" },
        { word: "the" },
        { word: "rationale" },
        { word: "why" },
        { word: "the" },
        { word: "committee" },
        { word: "postponed" },
        { word: "the" },
        { word: "vote" },
        { word: "indefinitely", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主系", phonetic: "/ðæt/ /ɪz/", translation: "那就是",
          subComponents: [
            { startIndex: 0, words: [{ word: "That" }, { word: "is" }] }
          ]
        },
        {
          start: 2, end: 3, label: "表语", phonetic: "/ðə/ /ˈræʃənəl/", translation: "根本原因",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "rationale" }] }
          ]
        },
        {
          start: 4, end: 10, label: "定语从句", phonetic: "/waɪ/ /ðə/ /kəˈmɪti/ /poʊstˈpoʊnd/ /ðə/ /voʊt/ /ɪnˈdɛfɪnətli/", translation: "委员会无限期推迟投票的",
          subComponents: [
            { startIndex: 0, words: [{ word: "why" }, { word: "the" }, { word: "committee" }, { word: "postponed" }, { word: "the" }, { word: "vote" }, { word: "indefinitely", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (why)", text: "why 为关系副词，修饰 the rationale，在从句中作原因状语，相当于 for which。" }
      ]
    },
    {
      id: "q_relative_s108",
      chinese: "这家初创公司获得了B轮融资，这让行业分析师颇感意外",
      english_full: "The startup secured Series B funding, which surprised industry analysts.",
      words: [
        { word: "The" },
        { word: "startup" },
        { word: "secured" },
        { word: "Series" },
        { word: "B" },
        { word: "funding", punctuation: "," },
        { word: "which" },
        { word: "surprised" },
        { word: "industry" },
        { word: "analysts", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌp/", translation: "这家初创公司",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "startup" }] }
          ]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/sɪˈkjʊrd/", translation: "获得了",
          subComponents: [
            { startIndex: 0, words: [{ word: "secured" }] }
          ]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ˈsɪriːz/ /biː/ /ˈfʌndɪŋ/", translation: "B轮融资",
          subComponents: [
            { startIndex: 0, words: [{ word: "Series" }, { word: "B" }, { word: "funding", punctuation: "," }] }
          ]
        },
        {
          start: 6, end: 9, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /sərˈpraɪzd/ /ˈɪndəstri/ /ˈænəlɪsts/", translation: "这让行业分析师颇感意外",
          subComponents: [
            { startIndex: 0, words: [{ word: "which" }, { word: "surprised" }, { word: "industry" }, { word: "analysts", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 指代前面整个主句内容（获得B轮融资这件事），为非限制性定语从句，用逗号隔开。" }
      ]
    },
    {
      id: "q_relative_s109",
      chinese: "陈博士——其突破性成果改变了癌症治疗方案——获得了诺贝尔奖提名",
      english_full: "Dr. Chen, whose breakthrough altered cancer treatment protocols, received the Nobel nomination.",
      words: [
        { word: "Dr." },
        { word: "Chen", punctuation: "," },
        { word: "whose" },
        { word: "breakthrough" },
        { word: "altered" },
        { word: "cancer" },
        { word: "treatment" },
        { word: "protocols", punctuation: "," },
        { word: "received" },
        { word: "the" },
        { word: "Nobel" },
        { word: "nomination", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈdɒktər/ /tʃɛn/", translation: "陈博士",
          subComponents: [
            { startIndex: 0, words: [{ word: "Dr." }, { word: "Chen", punctuation: "," }] }
          ]
        },
        {
          start: 2, end: 7, label: "非限制性定语从句", phonetic: "/huːz/ /ˈbreɪkθruː/ /ˈɔːltərd/ /ˈkænsər/ /ˈtriːtmənt/ /ˈproʊtəkɒlz/", translation: "其突破性成果改变了癌症治疗方案",
          subComponents: [
            { startIndex: 0, words: [{ word: "whose" }, { word: "breakthrough" }, { word: "altered" }, { word: "cancer" }, { word: "treatment" }, { word: "protocols", punctuation: "," }] }
          ]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/rɪˈsiːvd/", translation: "获得了",
          subComponents: [
            { startIndex: 0, words: [{ word: "received" }] }
          ]
        },
        {
          start: 9, end: 11, label: "宾语", phonetic: "/ðə/ /ˈnoʊbɛl/ /ˌnɒmɪˈneɪʃən/", translation: "诺贝尔奖提名",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "Nobel" }, { word: "nomination", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (whose)", text: "whose 引导非限制性定语从句，插入主句中间，对 Dr. Chen 起补充说明作用。" }
      ]
    },
    {
      id: "q_relative_s110",
      chinese: "我们运营于一个客户忠诚度日益脆弱的竞争环境中",
      english_full: "We operate in a competitive landscape in which customer loyalty is increasingly fragile.",
      words: [
        { word: "We" },
        { word: "operate" },
        { word: "in" },
        { word: "a" },
        { word: "competitive" },
        { word: "landscape" },
        { word: "in" },
        { word: "which" },
        { word: "customer" },
        { word: "loyalty" },
        { word: "is" },
        { word: "increasingly" },
        { word: "fragile", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [
            { startIndex: 0, words: [{ word: "We" }] }
          ]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ˈɒpəreɪt/", translation: "运营",
          subComponents: [
            { startIndex: 0, words: [{ word: "operate" }] }
          ]
        },
        {
          start: 2, end: 5, label: "状语", phonetic: "/ɪn/ /ə/ /kəmˈpɛtɪtɪv/ /ˈlændskeɪp/", translation: "于竞争环境中",
          subComponents: [
            { startIndex: 0, words: [{ word: "in" }, { word: "a" }, { word: "competitive" }, { word: "landscape" }] }
          ]
        },
        {
          start: 6, end: 12, label: "定语从句", phonetic: "/ɪn/ /wɪtʃ/ /ˈkʌstəmər/ /ˈlɔɪəlti/ /ɪz/ /ɪnˈkriːsɪŋli/ /ˈfrædʒaɪl/", translation: "客户忠诚度日益脆弱的",
          subComponents: [
            { startIndex: 0, words: [{ word: "in" }, { word: "which" }, { word: "customer" }, { word: "loyalty" }, { word: "is" }, { word: "increasingly" }, { word: "fragile", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (in which)", text: "in which 为「介词+关系代词」结构，修饰 landscape，相当于 where，in 不可省略。" }
      ]
    },
    {
      id: "q_relative_s111",
      chinese: "我们委托进行审计的那位顾问已发现若干合规漏洞",
      english_full: "The consultant from whom we commissioned the audit has identified several compliance gaps.",
      words: [
        { word: "The" },
        { word: "consultant" },
        { word: "from" },
        { word: "whom" },
        { word: "we" },
        { word: "commissioned" },
        { word: "the" },
        { word: "audit" },
        { word: "has" },
        { word: "identified" },
        { word: "several" },
        { word: "compliance" },
        { word: "gaps", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /kənˈsʌltənt/", translation: "那位顾问",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "consultant" }] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/frɒm/ /huːm/ /wiː/ /kəˈmɪʃənd/ /ðə/ /ˈɔːdɪt/", translation: "我们委托进行审计的",
          subComponents: [
            { startIndex: 0, words: [{ word: "from" }, { word: "whom" }, { word: "we" }, { word: "commissioned" }, { word: "the" }, { word: "audit" }] }
          ]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /aɪˈdɛntɪfaɪd/", translation: "已发现",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }, { word: "identified" }] }
          ]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ˈsɛvrəl/ /kəmˈplaɪəns/ /ɡæps/", translation: "若干合规漏洞",
          subComponents: [
            { startIndex: 0, words: [{ word: "several" }, { word: "compliance" }, { word: "gaps", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (from whom)", text: "from whom 为「介词+关系代词」结构，commission sth. from sb. 中 from 提前，先行词为人故用 whom。" }
      ]
    },
    {
      id: "q_relative_s112",
      chinese: "正如众多经济学家所警告的，不受约束的通胀会侵蚀购买力",
      english_full: "As many economists have cautioned, unchecked inflation erodes purchasing power.",
      words: [
        { word: "As" },
        { word: "many" },
        { word: "economists" },
        { word: "have" },
        { word: "cautioned", punctuation: "," },
        { word: "unchecked" },
        { word: "inflation" },
        { word: "erodes" },
        { word: "purchasing" },
        { word: "power", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "定语从句", phonetic: "/æz/ /ˈmɛni/ /ɪkəˈnɒmɪsts/ /hæv/ /ˈkɔːʃənd/", translation: "正如众多经济学家所警告的",
          subComponents: [
            { startIndex: 0, words: [{ word: "As" }, { word: "many" }, { word: "economists" }, { word: "have" }, { word: "cautioned", punctuation: "," }] }
          ]
        },
        {
          start: 5, end: 6, label: "主语", phonetic: "/ʌnˈtʃɛkt/ /ɪnˈfleɪʃən/", translation: "不受约束的通胀",
          subComponents: [
            { startIndex: 0, words: [{ word: "unchecked" }, { word: "inflation" }] }
          ]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/ɪˈroʊdz/", translation: "侵蚀",
          subComponents: [
            { startIndex: 0, words: [{ word: "erodes" }] }
          ]
        },
        {
          start: 8, end: 9, label: "宾语", phonetic: "/ˈpɜːrtʃəsɪŋ/ /ˈpaʊər/", translation: "购买力",
          subComponents: [
            { startIndex: 0, words: [{ word: "purchasing" }, { word: "power", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (as)", text: "as 引导非限制性定语从句置于句首，指代后面主句内容，意为「正如……」。" }
      ]
    },
    {
      id: "q_relative_s113",
      chinese: "她是股东唯一信任、能带领公司度过危机的高管",
      english_full: "She is the only executive that the shareholders trust to navigate this crisis.",
      words: [
        { word: "She" },
        { word: "is" },
        { word: "the" },
        { word: "only" },
        { word: "executive" },
        { word: "that" },
        { word: "the" },
        { word: "shareholders" },
        { word: "trust" },
        { word: "to" },
        { word: "navigate" },
        { word: "this" },
        { word: "crisis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主系", phonetic: "/ʃiː/ /ɪz/", translation: "她是",
          subComponents: [
            { startIndex: 0, words: [{ word: "She" }, { word: "is" }] }
          ]
        },
        {
          start: 2, end: 4, label: "表语", phonetic: "/ðə/ /ˈoʊnli/ /ɪɡˈzɛkjətɪv/", translation: "唯一的高管",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "only" }, { word: "executive" }] }
          ]
        },
        {
          start: 5, end: 12, label: "定语从句", phonetic: "/ðæt/ /ðə/ /ˈʃɛrˌhoʊldərz/ /trʌst/ /tuː/ /ˈnævɪɡeɪt/ /ðɪs/ /ˈkraɪsɪs/", translation: "股东信任能带领公司度过危机的",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "shareholders" }, { word: "trust" }, { word: "to" }, { word: "navigate" }, { word: "this" }, { word: "crisis", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "先行词被 the only 修饰时，关系代词通常用 that 而不用 who/whom。" }
      ]
    },
    {
      id: "q_relative_s114",
      chinese: "审计所揭示的一切都必须向监管机构披露",
      english_full: "Everything that the audit revealed must be disclosed to the regulators.",
      words: [
        { word: "Everything" },
        { word: "that" },
        { word: "the" },
        { word: "audit" },
        { word: "revealed" },
        { word: "must" },
        { word: "be" },
        { word: "disclosed" },
        { word: "to" },
        { word: "the" },
        { word: "regulators", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈɛvriˌθɪŋ/", translation: "一切",
          subComponents: [
            { startIndex: 0, words: [{ word: "Everything" }] }
          ]
        },
        {
          start: 1, end: 4, label: "定语从句", phonetic: "/ðæt/ /ðə/ /ˈɔːdɪt/ /rɪˈviːld/", translation: "审计所揭示的",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "audit" }, { word: "revealed" }] }
          ]
        },
        {
          start: 5, end: 7, label: "谓语", phonetic: "/mʌst/ /bi/ /dɪsˈkloʊzd/", translation: "必须被披露",
          subComponents: [
            { startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "disclosed" }] }
          ]
        },
        {
          start: 8, end: 10, label: "状语", phonetic: "/tuː/ /ðə/ /ˈrɛgjəleɪtərz/", translation: "向监管机构",
          subComponents: [
            { startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "regulators", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "that 修饰不定代词 everything，在从句中作 revealed 的宾语。" }
      ]
    },
    {
      id: "q_relative_s115",
      chinese: "伦理委员会审议的那个道德困境没有简单的解决方案",
      english_full: "The ethical dilemma about which the ethics board deliberated has no easy resolution.",
      words: [
        { word: "The" },
        { word: "ethical" },
        { word: "dilemma" },
        { word: "about" },
        { word: "which" },
        { word: "the" },
        { word: "ethics" },
        { word: "board" },
        { word: "deliberated" },
        { word: "has" },
        { word: "no" },
        { word: "easy" },
        { word: "resolution", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈɛθɪkəl/ /dɪˈlɛmə/", translation: "那个道德困境",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "ethical" }, { word: "dilemma" }] }
          ]
        },
        {
          start: 3, end: 8, label: "定语从句", phonetic: "/əˈbaʊt/ /wɪtʃ/ /ðə/ /ˈɛθɪks/ /bɔːrd/ /dɪˈlɪbəreɪtɪd/", translation: "伦理委员会审议的",
          subComponents: [
            { startIndex: 0, words: [{ word: "about" }, { word: "which" }, { word: "the" }, { word: "ethics" }, { word: "board" }, { word: "deliberated" }] }
          ]
        },
        {
          start: 9, end: 9, label: "谓语", phonetic: "/hæz/", translation: "没有",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }] }
          ]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/noʊ/ /ˈiːzi/ /ˌrɛzəˈluːʃən/", translation: "简单的解决方案",
          subComponents: [
            { startIndex: 0, words: [{ word: "no" }, { word: "easy" }, { word: "resolution", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (about which)", text: "about which 为「介词+关系代词」结构，deliberate about sth. 中 about 提前修饰 dilemma。" }
      ]
    },
    {
      id: "q_relative_s116",
      chinese: "我们已经到达了一个进一步让步将削弱谈判筹码的节点",
      english_full: "We have reached a point where further concessions would undermine our negotiating position.",
      words: [
        { word: "We" },
        { word: "have" },
        { word: "reached" },
        { word: "a" },
        { word: "point" },
        { word: "where" },
        { word: "further" },
        { word: "concessions" },
        { word: "would" },
        { word: "undermine" },
        { word: "our" },
        { word: "negotiating" },
        { word: "position", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们",
          subComponents: [
            { startIndex: 0, words: [{ word: "We" }] }
          ]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/hæv/ /riːtʃt/", translation: "已经到达",
          subComponents: [
            { startIndex: 0, words: [{ word: "have" }, { word: "reached" }] }
          ]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ə/ /pɔɪnt/", translation: "一个节点",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "point" }] }
          ]
        },
        {
          start: 5, end: 12, label: "定语从句", phonetic: "/wɛər/ /ˈfɜːrðər/ /kənˈsɛʃənz/ /wʊd/ /ˌʌndərˈmaɪn/ /aʊər/ /nɪˈɡoʊʃieɪtɪŋ/ /pəˈzɪʃən/", translation: "进一步让步将削弱谈判筹码的",
          subComponents: [
            { startIndex: 0, words: [{ word: "where" }, { word: "further" }, { word: "concessions" }, { word: "would" }, { word: "undermine" }, { word: "our" }, { word: "negotiating" }, { word: "position", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 修饰抽象地点 point（阶段/节点），在从句中作状语，相当于 at which。" }
      ]
    },
    {
      id: "q_relative_s117",
      chinese: "那位在巨大外交压力下促成停火的外交官值得获得认可",
      english_full: "The diplomat who brokered the ceasefire while under immense diplomatic pressure deserves recognition.",
      words: [
        { word: "The" },
        { word: "diplomat" },
        { word: "who" },
        { word: "brokered" },
        { word: "the" },
        { word: "ceasefire" },
        { word: "while" },
        { word: "under" },
        { word: "immense" },
        { word: "diplomatic" },
        { word: "pressure" },
        { word: "deserves" },
        { word: "recognition", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈdɪpləmæt/", translation: "那位外交官",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "diplomat" }] }
          ]
        },
        {
          start: 2, end: 10, label: "定语从句", phonetic: "/huː/ /ˈbroʊkərd/ /ðə/ /ˈsiːsfaɪər/ /waɪl/ /ˈʌndər/ /ɪˈmɛns/ /ˌdɪpləˈmætɪk/ /ˈprɛʃər/", translation: "在巨大外交压力下促成停火的",
          subComponents: [
            { startIndex: 0, words: [{ word: "who" }, { word: "brokered" }, { word: "the" }, { word: "ceasefire" }, { word: "while" }, { word: "under" }, { word: "immense" }, { word: "diplomatic" }, { word: "pressure" }] }
          ]
        },
        {
          start: 11, end: 11, label: "谓语", phonetic: "/dɪˈzɜːrvz/", translation: "值得获得",
          subComponents: [
            { startIndex: 0, words: [{ word: "deserves" }] }
          ]
        },
        {
          start: 12, end: 12, label: "宾语", phonetic: "/ˌrɛkəɡˈnɪʃən/", translation: "认可",
          subComponents: [
            { startIndex: 0, words: [{ word: "recognition", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，从句内含 while 引导的时间状语从句，整体修饰 diplomat。" }
      ]
    },
    {
      id: "q_relative_s118",
      chinese: "这项历时三年谈判的条约将于一月生效",
      english_full: "The treaty, which took three years to negotiate, comes into force in January.",
      words: [
        { word: "The" },
        { word: "treaty", punctuation: "," },
        { word: "which" },
        { word: "took" },
        { word: "three" },
        { word: "years" },
        { word: "to" },
        { word: "negotiate", punctuation: "," },
        { word: "comes" },
        { word: "into" },
        { word: "force" },
        { word: "in" },
        { word: "January", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈtriːti/", translation: "这项条约",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "treaty", punctuation: "," }] }
          ]
        },
        {
          start: 2, end: 7, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /tʊk/ /θriː/ /jɪərz/ /tuː/ /nɪˈɡoʊʃieɪt/", translation: "历时三年谈判的",
          subComponents: [
            { startIndex: 0, words: [{ word: "which" }, { word: "took" }, { word: "three" }, { word: "years" }, { word: "to" }, { word: "negotiate", punctuation: "," }] }
          ]
        },
        {
          start: 8, end: 10, label: "谓语", phonetic: "/kʌmz/ /ˈɪntuː/ /fɔːrs/", translation: "生效",
          subComponents: [
            { startIndex: 0, words: [{ word: "comes" }, { word: "into" }, { word: "force" }] }
          ]
        },
        {
          start: 11, end: 12, label: "时间状语", phonetic: "/ɪn/ /ˈdʒænjuəri/", translation: "于一月",
          subComponents: [
            { startIndex: 0, words: [{ word: "in" }, { word: "January", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，补充说明 treaty 的谈判历时，不可换用 that。" }
      ]
    },
    {
      id: "q_relative_s119",
      chinese: "那所校友网络遍及五大洲的大学吸引了顶尖师资",
      english_full: "The university whose alumni network spans five continents attracts top-tier faculty.",
      words: [
        { word: "The" },
        { word: "university" },
        { word: "whose" },
        { word: "alumni" },
        { word: "network" },
        { word: "spans" },
        { word: "five" },
        { word: "continents" },
        { word: "attracts" },
        { word: "top-tier" },
        { word: "faculty", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌjuːnɪˈvɜːrsɪti/", translation: "那所大学",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "university" }] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/huːz/ /əˈlaʊmnaɪ/ /ˈnɛtwɜːrk/ /spænz/ /faɪv/ /ˈkɒntɪnənts/", translation: "校友网络遍及五大洲的",
          subComponents: [
            { startIndex: 0, words: [{ word: "whose" }, { word: "alumni" }, { word: "network" }, { word: "spans" }, { word: "five" }, { word: "continents" }] }
          ]
        },
        {
          start: 8, end: 8, label: "谓语", phonetic: "/əˈtrækts/", translation: "吸引",
          subComponents: [
            { startIndex: 0, words: [{ word: "attracts" }] }
          ]
        },
        {
          start: 9, end: 10, label: "宾语", phonetic: "/tɒp-tɪər/ /ˈfækəlti/", translation: "顶尖师资",
          subComponents: [
            { startIndex: 0, words: [{ word: "top-tier" }, { word: "faculty", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose 表示所属关系，修饰 university，在从句中作定语修饰 alumni network。" }
      ]
    },
    {
      id: "q_relative_s120",
      chinese: "机密信息经其泄露的那条渠道已被关闭",
      english_full: "The channel through which confidential information leaked has been shut down.",
      words: [
        { word: "The" },
        { word: "channel" },
        { word: "through" },
        { word: "which" },
        { word: "confidential" },
        { word: "information" },
        { word: "leaked" },
        { word: "has" },
        { word: "been" },
        { word: "shut" },
        { word: "down", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈtʃænəl/", translation: "那条渠道",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "channel" }] }
          ]
        },
        {
          start: 2, end: 6, label: "定语从句", phonetic: "/θruː/ /wɪtʃ/ /ˌkɒnfɪˈdɛnʃəl/ /ˌɪnfərˈmeɪʃən/ /liːkt/", translation: "机密信息经其泄露的",
          subComponents: [
            { startIndex: 0, words: [{ word: "through" }, { word: "which" }, { word: "confidential" }, { word: "information" }, { word: "leaked" }] }
          ]
        },
        {
          start: 7, end: 10, label: "谓语", phonetic: "/hæz/ /bɪn/ /ʃʌt/ /daʊn/", translation: "已被关闭",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }, { word: "been" }, { word: "shut" }, { word: "down", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (through which)", text: "through which 为「介词+关系代词」结构，leak through the channel 中 through 提前。" }
      ]
    },
    {
      id: "q_relative_s121",
      chinese: "那位据称遭高层管理人员恐吓的举报人已提起诉讼",
      english_full: "The whistleblower who was allegedly intimidated by senior management has filed a lawsuit.",
      words: [
        { word: "The" },
        { word: "whistleblower" },
        { word: "who" },
        { word: "was" },
        { word: "allegedly" },
        { word: "intimidated" },
        { word: "by" },
        { word: "senior" },
        { word: "management" },
        { word: "has" },
        { word: "filed" },
        { word: "a" },
        { word: "lawsuit", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈwɪsəlˌbloʊər/", translation: "那位举报人",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "whistleblower" }] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/huː/ /wɒz/ /əˈlɛdʒɪdli/ /ɪnˈtɪmɪdeɪtɪd/ /baɪ/ /ˈsiːniər/ /ˈmænɪdʒmənt/", translation: "据称遭高层管理人员恐吓的",
          subComponents: [
            { startIndex: 0, words: [{ word: "who" }, { word: "was" }, { word: "allegedly" }, { word: "intimidated" }, { word: "by" }, { word: "senior" }, { word: "management" }] }
          ]
        },
        {
          start: 9, end: 10, label: "谓语", phonetic: "/hæz/ /faɪld/", translation: "已提起",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }, { word: "filed" }] }
          ]
        },
        {
          start: 11, end: 12, label: "宾语", phonetic: "/ə/ /ˈlɔːsuːt/", translation: "诉讼",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "lawsuit", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，从句为被动语态 was intimidated，修饰 whistleblower。" }
      ]
    },
    {
      id: "q_relative_s122",
      chinese: "这是研究团队有史以来产出的最全面报告",
      english_full: "This is the most comprehensive report that the research team has ever produced.",
      words: [
        { word: "This" },
        { word: "is" },
        { word: "the" },
        { word: "most" },
        { word: "comprehensive" },
        { word: "report" },
        { word: "that" },
        { word: "the" },
        { word: "research" },
        { word: "team" },
        { word: "has" },
        { word: "ever" },
        { word: "produced", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主系", phonetic: "/ðɪs/ /ɪz/", translation: "这是",
          subComponents: [
            { startIndex: 0, words: [{ word: "This" }, { word: "is" }] }
          ]
        },
        {
          start: 2, end: 5, label: "表语", phonetic: "/ðə/ /moʊst/ /ˌkɒmprɪˈhɛnsɪv/ /rɪˈpɔːrt/", translation: "最全面的报告",
          subComponents: [
            { startIndex: 0, words: [{ word: "the" }, { word: "most" }, { word: "comprehensive" }, { word: "report" }] }
          ]
        },
        {
          start: 6, end: 12, label: "定语从句", phonetic: "/ðæt/ /ðə/ /rɪˈsɜːrtʃ/ /tiːm/ /hæz/ /ˈɛvər/ /prəˈdjuːst/", translation: "研究团队有史以来产出的",
          subComponents: [
            { startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "research" }, { word: "team" }, { word: "has" }, { word: "ever" }, { word: "produced", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (that)", text: "先行词含最高级 the most comprehensive 时，定语从句通常用 that 引导。" }
      ]
    },
    {
      id: "q_relative_s123",
      chinese: "通胀超出预期，这迫使央行上调利率",
      english_full: "Inflation exceeded forecasts, which forced the central bank to raise interest rates.",
      words: [
        { word: "Inflation" },
        { word: "exceeded" },
        { word: "forecasts", punctuation: "," },
        { word: "which" },
        { word: "forced" },
        { word: "the" },
        { word: "central" },
        { word: "bank" },
        { word: "to" },
        { word: "raise" },
        { word: "interest" },
        { word: "rates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ɪnˈfleɪʃən/", translation: "通胀",
          subComponents: [
            { startIndex: 0, words: [{ word: "Inflation" }] }
          ]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/ɪkˈsiːdɪd/", translation: "超出",
          subComponents: [
            { startIndex: 0, words: [{ word: "exceeded" }] }
          ]
        },
        {
          start: 2, end: 2, label: "宾语", phonetic: "/ˈfɔːrkæsts/", translation: "预期",
          subComponents: [
            { startIndex: 0, words: [{ word: "forecasts", punctuation: "," }] }
          ]
        },
        {
          start: 3, end: 11, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /fɔːrst/ /ðə/ /ˈsɛntrəl/ /bæŋk/ /tuː/ /reɪz/ /ˈɪntrəst/ /reɪts/", translation: "这迫使央行上调利率",
          subComponents: [
            { startIndex: 0, words: [{ word: "which" }, { word: "forced" }, { word: "the" }, { word: "central" }, { word: "bank" }, { word: "to" }, { word: "raise" }, { word: "interest" }, { word: "rates", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 指代前面整个主句（通胀超出预期），说明其后续影响。" }
      ]
    },
    {
      id: "q_relative_s124",
      chinese: "她发现自己身处一个每个选项都伴随重大声誉风险的境地",
      english_full: "She found herself in a situation where every option carried significant reputational risk.",
      words: [
        { word: "She" },
        { word: "found" },
        { word: "herself" },
        { word: "in" },
        { word: "a" },
        { word: "situation" },
        { word: "where" },
        { word: "every" },
        { word: "option" },
        { word: "carried" },
        { word: "significant" },
        { word: "reputational" },
        { word: "risk", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ʃiː/", translation: "她",
          subComponents: [
            { startIndex: 0, words: [{ word: "She" }] }
          ]
        },
        {
          start: 1, end: 2, label: "谓语", phonetic: "/faʊnd/ /hərˈsɛlf/", translation: "发现自己",
          subComponents: [
            { startIndex: 0, words: [{ word: "found" }, { word: "herself" }] }
          ]
        },
        {
          start: 3, end: 5, label: "状语", phonetic: "/ɪn/ /ə/ /ˌsɪtʃuˈeɪʃən/", translation: "身处一种境地",
          subComponents: [
            { startIndex: 0, words: [{ word: "in" }, { word: "a" }, { word: "situation" }] }
          ]
        },
        {
          start: 6, end: 12, label: "定语从句", phonetic: "/wɛər/ /ˈɛvri/ /ˈɒpʃən/ /ˈkærid/ /sɪɡˈnɪfɪkənt/ /ˌrɛpjuˈteɪʃənəl/ /rɪsk/", translation: "每个选项都伴随重大声誉风险的",
          subComponents: [
            { startIndex: 0, words: [{ word: "where" }, { word: "every" }, { word: "option" }, { word: "carried" }, { word: "significant" }, { word: "reputational" }, { word: "risk", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (where)", text: "where 修饰抽象名词 situation，在从句中作状语，相当于 in which。" }
      ]
    },
    {
      id: "q_relative_s125",
      chinese: "那位主导自动驾驶项目开发的工程师已加入竞争对手公司",
      english_full: "The engineer who spearheaded the autonomous driving project has joined a rival firm.",
      words: [
        { word: "The" },
        { word: "engineer" },
        { word: "who" },
        { word: "spearheaded" },
        { word: "the" },
        { word: "autonomous" },
        { word: "driving" },
        { word: "project" },
        { word: "has" },
        { word: "joined" },
        { word: "a" },
        { word: "rival" },
        { word: "firm", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌɛndʒɪˈnɪər/", translation: "那位工程师",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "engineer" }] }
          ]
        },
        {
          start: 2, end: 7, label: "定语从句", phonetic: "/huː/ /ˈspɪərhɛdɪd/ /ði/ /ɔːˈtɒnəməs/ /ˈdraɪvɪŋ/ /ˈprɒdʒɛkt/", translation: "主导自动驾驶项目开发的",
          subComponents: [
            { startIndex: 0, words: [{ word: "who" }, { word: "spearheaded" }, { word: "the" }, { word: "autonomous" }, { word: "driving" }, { word: "project" }] }
          ]
        },
        {
          start: 8, end: 9, label: "谓语", phonetic: "/hæz/ /dʒɔɪnd/", translation: "已加入",
          subComponents: [
            { startIndex: 0, words: [{ word: "has" }, { word: "joined" }] }
          ]
        },
        {
          start: 10, end: 12, label: "宾语", phonetic: "/ə/ /ˈraɪvəl/ /fɜːrm/", translation: "竞争对手公司",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "rival" }, { word: "firm", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 在从句中作主语，spearhead 为高级动词，意为「主导、牵头」。" }
      ]
    },
    {
      id: "q_relative_s126",
      chinese: "整个商业模式赖以建立的前提正日益受到质疑",
      english_full: "The premise on which the entire business model rests is increasingly being questioned.",
      words: [
        { word: "The" },
        { word: "premise" },
        { word: "on" },
        { word: "which" },
        { word: "the" },
        { word: "entire" },
        { word: "business" },
        { word: "model" },
        { word: "rests" },
        { word: "is" },
        { word: "increasingly" },
        { word: "being" },
        { word: "questioned", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈprɛmɪs/", translation: "那个前提",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "premise" }] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/ɒn/ /wɪtʃ/ /ði/ /ɪnˈtaɪər/ /ˈbɪznəs/ /ˈmɒdəl/ /rɛsts/", translation: "整个商业模式赖以建立的",
          subComponents: [
            { startIndex: 0, words: [{ word: "on" }, { word: "which" }, { word: "the" }, { word: "entire" }, { word: "business" }, { word: "model" }, { word: "rests" }] }
          ]
        },
        {
          start: 9, end: 12, label: "谓语", phonetic: "/ɪz/ /ɪnˈkriːsɪŋli/ /ˈbiːɪŋ/ /ˈkwɛstʃənd/", translation: "正日益受到质疑",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }, { word: "increasingly" }, { word: "being" }, { word: "questioned", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (on which)", text: "on which 为「介词+关系代词」结构，rest on the premise 中 on 提前修饰 premise。" }
      ]
    },
    {
      id: "q_relative_s127",
      chinese: "那家公司——其声誉因丑闻而受损——正在进行大规模品牌重塑",
      english_full: "The corporation whose reputation was tarnished by the scandal is undergoing a major rebranding.",
      words: [
        { word: "The" },
        { word: "corporation" },
        { word: "whose" },
        { word: "reputation" },
        { word: "was" },
        { word: "tarnished" },
        { word: "by" },
        { word: "the" },
        { word: "scandal" },
        { word: "is" },
        { word: "undergoing" },
        { word: "a" },
        { word: "major" },
        { word: "rebranding", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌkɔːrpəˈreɪʃən/", translation: "那家公司",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "corporation" }] }
          ]
        },
        {
          start: 2, end: 8, label: "定语从句", phonetic: "/huːz/ /ˌrɛpjəˈteɪʃən/ /wɒz/ /ˈtɑːrnɪʃt/ /baɪ/ /ðə/ /ˈskændəl/", translation: "其声誉因丑闻而受损的",
          subComponents: [
            { startIndex: 0, words: [{ word: "whose" }, { word: "reputation" }, { word: "was" }, { word: "tarnished" }, { word: "by" }, { word: "the" }, { word: "scandal" }] }
          ]
        },
        {
          start: 9, end: 10, label: "谓语", phonetic: "/ɪz/ /ˌʌndərˈɡoʊɪŋ/", translation: "正在进行",
          subComponents: [
            { startIndex: 0, words: [{ word: "is" }, { word: "undergoing" }] }
          ]
        },
        {
          start: 11, end: 13, label: "宾语", phonetic: "/ə/ /ˈmeɪdʒər/ /ˌriːˈbrændɪŋ/", translation: "大规模品牌重塑",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "major" }, { word: "rebranding", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (whose)", text: "whose 引导限制性定语从句，从句为被动语态 was tarnished，修饰 corporation。" }
      ]
    },
    {
      id: "q_relative_s128",
      chinese: "任何会为短期利益牺牲数据完整性的人都不应担任领导职务",
      english_full: "Anyone who would compromise data integrity for short-term gains should not hold a leadership role.",
      words: [
        { word: "Anyone" },
        { word: "who" },
        { word: "would" },
        { word: "compromise" },
        { word: "data" },
        { word: "integrity" },
        { word: "for" },
        { word: "short-term" },
        { word: "gains" },
        { word: "should" },
        { word: "not" },
        { word: "hold" },
        { word: "a" },
        { word: "leadership" },
        { word: "role", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈɛniwʌn/", translation: "任何人",
          subComponents: [
            { startIndex: 0, words: [{ word: "Anyone" }] }
          ]
        },
        {
          start: 1, end: 8, label: "定语从句", phonetic: "/huː/ /wʊd/ /ˈkɒmprəmaɪz/ /ˈdeɪtə/ /ɪnˈtɛɡrɪti/ /fɔːr/ /ʃɔːrt-tɜːrm/ /ɡeɪnz/", translation: "会为短期利益牺牲数据完整性的",
          subComponents: [
            { startIndex: 0, words: [{ word: "who" }, { word: "would" }, { word: "compromise" }, { word: "data" }, { word: "integrity" }, { word: "for" }, { word: "short-term" }, { word: "gains" }] }
          ]
        },
        {
          start: 9, end: 11, label: "谓语", phonetic: "/ʃʊd/ /nɒt/ /hoʊld/", translation: "不应担任",
          subComponents: [
            { startIndex: 0, words: [{ word: "should" }, { word: "not" }, { word: "hold" }] }
          ]
        },
        {
          start: 12, end: 14, label: "宾语", phonetic: "/ə/ /ˈliːdərʃɪp/ /roʊl/", translation: "领导职务",
          subComponents: [
            { startIndex: 0, words: [{ word: "a" }, { word: "leadership" }, { word: "role", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "定语从句 (who)", text: "who 修饰不定代词 anyone，would 表示假设性，从句整体作定语。" }
      ]
    },
    {
      id: "q_relative_s129",
      chinese: "这项以微弱优势获得批准的新立法引入了更严格的排放标准",
      english_full: "The new legislation, which was ratified by a narrow margin, introduces stricter emissions standards.",
      words: [
        { word: "The" },
        { word: "new" },
        { word: "legislation", punctuation: "," },
        { word: "which" },
        { word: "was" },
        { word: "ratified" },
        { word: "by" },
        { word: "a" },
        { word: "narrow" },
        { word: "margin", punctuation: "," },
        { word: "introduces" },
        { word: "stricter" },
        { word: "emissions" },
        { word: "standards", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /njuː/ /ˌlɛdʒɪsˈleɪʃən/", translation: "这项新立法",
          subComponents: [
            { startIndex: 0, words: [{ word: "The" }, { word: "new" }, { word: "legislation", punctuation: "," }] }
          ]
        },
        {
          start: 3, end: 9, label: "非限制性定语从句", phonetic: "/wɪtʃ/ /wɒz/ /ˈrætɪfaɪd/ /baɪ/ /ə/ /ˈnæroʊ/ /ˈmɑːrdʒɪn/", translation: "以微弱优势获得批准的",
          subComponents: [
            { startIndex: 0, words: [{ word: "which" }, { word: "was" }, { word: "ratified" }, { word: "by" }, { word: "a" }, { word: "narrow" }, { word: "margin", punctuation: "," }] }
          ]
        },
        {
          start: 10, end: 10, label: "谓语", phonetic: "/ˌɪntrəˈdjuːsɪz/", translation: "引入",
          subComponents: [
            { startIndex: 0, words: [{ word: "introduces" }] }
          ]
        },
        {
          start: 11, end: 13, label: "宾语", phonetic: "/ˈstrɪktər/ /ɪˈmɪʃənz/ /ˈstændərdz/", translation: "更严格的排放标准",
          subComponents: [
            { startIndex: 0, words: [{ word: "stricter" }, { word: "emissions" }, { word: "standards", punctuation: "." }] }
          ]
        }
      ],
      analysis: [
        { type: "非限制性定语从句 (which)", text: "which 引导非限制性定语从句，从句为被动语态 was ratified，补充说明 legislation 的通过方式。" }
      ]
    }
  ]
};
