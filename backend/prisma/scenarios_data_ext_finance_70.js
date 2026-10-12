export const extensions = {
  "finance_01": [
    {
      id: "q_finance_s100",
      chinese: "央行出乎意料的降息引发了股票市场的显著反弹",
      english_full: "The central bank's unexpected interest rate cut triggered a significant rally in the stock market.",
      words: [
        { word: "The" }, { word: "central" }, { word: "bank's" }, { word: "unexpected" }, { word: "interest" }, { word: "rate" }, { word: "cut" }, { word: "triggered" }, { word: "a" }, { word: "significant" }, { word: "rally" }, { word: "in" }, { word: "the" }, { word: "stock" }, { word: "market", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /bæŋks/ /ˌʌnɪkˈspɛktɪd/ /ˈɪntrɪst/ /reɪt/ /kʌt/", translation: "央行出乎意料的降息",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "central" }, { word: "bank's" }, { word: "unexpected" }, { word: "interest" }, { word: "rate" }, { word: "cut" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/ˈtrɪɡərd/", translation: "引发了",
          subComponents: [{ startIndex: 0, words: [{ word: "triggered" }] }]
        },
        {
          start: 8, end: 14, label: "宾语", phonetic: "/ə/ /sɪɡˈnɪfɪkənt/ /ˈræli/ /ɪn/ /ðə/ /stɒk/ /ˈmɑːrkɪt/", translation: "股票市场的显著反弹",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "significant" }, { word: "rally" }, { word: "in" }, { word: "the" }, { word: "stock" }, { word: "market", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "金融词汇", text: "central bank (央行), interest rate cut (降息), trigger (引发), rally (反弹)" }
      ]
    },
    {
      id: "q_finance_s101",
      chinese: "持续的通胀压力迫使政策制定者采取更为鹰派的利率立场",
      english_full: "Persistent inflationary pressures have compelled policymakers to adopt a more hawkish stance on interest rates.",
      words: [
        { word: "Persistent" }, { word: "inflationary" }, { word: "pressures" }, { word: "have" }, { word: "compelled" }, { word: "policymakers" }, { word: "to" }, { word: "adopt" }, { word: "a" }, { word: "more" }, { word: "hawkish" }, { word: "stance" }, { word: "on" }, { word: "interest" }, { word: "rates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/pərˈsɪstənt/ /ɪnˈfleɪʃəˌnɛri/ /ˈprɛʃərz/", translation: "持续的通胀压力",
          subComponents: [{ startIndex: 0, words: [{ word: "Persistent" }, { word: "inflationary" }, { word: "pressures" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /kəmˈpɛld/", translation: "已迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "compelled" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈpɒlɪˌseɪməkərz/", translation: "政策制定者",
          subComponents: [{ startIndex: 0, words: [{ word: "policymakers" }] }]
        },
        {
          start: 6, end: 14, label: "宾补", phonetic: "/tuː/ /əˈdɒpt/ /ə/ /mɔːr/ /ˈhɔːkɪʃ/ /stæns/ /ɒn/ /ˈɪntrɪst/ /reɪts/", translation: "采取更为鹰派的利率立场",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "adopt" }, { word: "a" }, { word: "more" }, { word: "hawkish" }, { word: "stance" }, { word: "on" }, { word: "interest" }, { word: "rates", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "货币政策", text: "inflationary pressure (通胀压力), hawkish stance (鹰派立场), compel (迫使)" }
      ]
    },
    {
      id: "q_finance_s102",
      chinese: "对冲基金经理运用复杂的套利策略以利用市场低效",
      english_full: "The hedge fund manager deployed sophisticated arbitrage strategies to capitalize on market inefficiencies.",
      words: [
        { word: "The" }, { word: "hedge" }, { word: "fund" }, { word: "manager" }, { word: "deployed" }, { word: "sophisticated" }, { word: "arbitrage" }, { word: "strategies" }, { word: "to" }, { word: "capitalize" }, { word: "on" }, { word: "market" }, { word: "inefficiencies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /hɛdʒ/ /fʌnd/ /ˈmænɪdʒər/", translation: "对冲基金经理",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hedge" }, { word: "fund" }, { word: "manager" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/dɪˈplɔɪd/", translation: "运用",
          subComponents: [{ startIndex: 0, words: [{ word: "deployed" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/səˈfɪstɪˌkeɪtɪd/ /ˈɑːrbɪtrɑːʒ/ /ˈstrætədʒiz/", translation: "复杂的套利策略",
          subComponents: [{ startIndex: 0, words: [{ word: "sophisticated" }, { word: "arbitrage" }, { word: "strategies" }] }]
        },
        {
          start: 8, end: 12, label: "目的状语", phonetic: "/tuː/ /ˈkæpɪtəˌlaɪz/ /ɒn/ /ˈmɑːrkɪt/ /ˌɪnɪˈfɪʃənsiz/", translation: "以利用市场低效",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "capitalize" }, { word: "on" }, { word: "market" }, { word: "inefficiencies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "对冲基金", text: "hedge fund (对冲基金), arbitrage strategy (套利策略), capitalize on (利用)" }
      ]
    },
    {
      id: "q_finance_s103",
      chinese: "主权财富基金日益将资本配置于新兴市场的另类投资",
      english_full: "Sovereign wealth funds have increasingly allocated capital toward alternative investments in emerging markets.",
      words: [
        { word: "Sovereign" }, { word: "wealth" }, { word: "funds" }, { word: "have" }, { word: "increasingly" }, { word: "allocated" }, { word: "capital" }, { word: "toward" }, { word: "alternative" }, { word: "investments" }, { word: "in" }, { word: "emerging" }, { word: "markets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsɒvrɪn/ /wɛlθ/ /fʌndz/", translation: "主权财富基金",
          subComponents: [{ startIndex: 0, words: [{ word: "Sovereign" }, { word: "wealth" }, { word: "funds" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /ɪnˈkriːsɪŋli/ /ˈæləkeɪtɪd/", translation: "日益配置",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "increasingly" }, { word: "allocated" }] }]
        },
        {
          start: 6, end: 6, label: "宾语", phonetic: "/ˈkæpɪtəl/", translation: "资本",
          subComponents: [{ startIndex: 0, words: [{ word: "capital" }] }]
        },
        {
          start: 7, end: 12, label: "方向状语", phonetic: "/təˈwɔːrd/ /ɔːlˈtɜːrnətɪv/ /ɪnˈvɛstmənts/ /ɪn/ /ɪˈmɜːrdʒɪŋ/ /ˈmɑːrkɪts/", translation: "于新兴市场的另类投资",
          subComponents: [{ startIndex: 0, words: [{ word: "toward" }, { word: "alternative" }, { word: "investments" }, { word: "in" }, { word: "emerging" }, { word: "markets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "机构投资", text: "sovereign wealth fund (主权财富基金), alternative investment (另类投资), emerging markets (新兴市场)" }
      ]
    },
    {
      id: "q_finance_s104",
      chinese: "信用违约互换可作为对冲企业债券违约风险的有效工具",
      english_full: "A credit default swap can serve as an effective instrument for hedging against corporate bond defaults.",
      words: [
        { word: "A" }, { word: "credit" }, { word: "default" }, { word: "swap" }, { word: "can" }, { word: "serve" }, { word: "as" }, { word: "an" }, { word: "effective" }, { word: "instrument" }, { word: "for" }, { word: "hedging" }, { word: "against" }, { word: "corporate" }, { word: "bond" }, { word: "defaults", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ə/ /ˈkrɛdɪt/ /dɪˈfɔːlt/ /swɒp/", translation: "信用违约互换",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "credit" }, { word: "default" }, { word: "swap" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/kæn/ /sɜːrv/", translation: "可作为",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "serve" }] }]
        },
        {
          start: 6, end: 9, label: "表语", phonetic: "/æz/ /æn/ /ɪˈfɛktɪv/ /ˈɪnstrəmənt/", translation: "有效工具",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "an" }, { word: "effective" }, { word: "instrument" }] }]
        },
        {
          start: 10, end: 15, label: "用途状语", phonetic: "/fɔːr/ /ˈhɛdʒɪŋ/ /əˈɡɛnst/ /ˈkɔːrpərət/ /bɒnd/ /dɪˈfɔːlts/", translation: "对冲企业债券违约",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "hedging" }, { word: "against" }, { word: "corporate" }, { word: "bond" }, { word: "defaults", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "衍生品", text: "credit default swap (信用违约互换), hedge against (对冲), corporate bond (企业债券)" }
      ]
    },
    {
      id: "q_finance_s105",
      chinese: "公司强劲的自由现金流使其得以启动大规模股票回购计划",
      english_full: "The company's robust free cash flow enabled it to initiate a substantial share buyback program.",
      words: [
        { word: "The" }, { word: "company's" }, { word: "robust" }, { word: "free" }, { word: "cash" }, { word: "flow" }, { word: "enabled" }, { word: "it" }, { word: "to" }, { word: "initiate" }, { word: "a" }, { word: "substantial" }, { word: "share" }, { word: "buyback" }, { word: "program", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˈkʌmpəniz/ /roʊˈbʌst/ /friː/ /kæʃ/ /floʊ/", translation: "公司强劲的自由现金流",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "company's" }, { word: "robust" }, { word: "free" }, { word: "cash" }, { word: "flow" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/ɪˈneɪbld/", translation: "使…得以",
          subComponents: [{ startIndex: 0, words: [{ word: "enabled" }] }]
        },
        {
          start: 7, end: 7, label: "宾语", phonetic: "/ɪt/", translation: "其",
          subComponents: [{ startIndex: 0, words: [{ word: "it" }] }]
        },
        {
          start: 8, end: 14, label: "宾补", phonetic: "/tuː/ /ɪˈnɪʃieɪt/ /ə/ /səbˈstænʃəl/ /ʃɛər/ /ˈbaɪbæk/ /ˈproʊɡræm/", translation: "启动大规模股票回购计划",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "initiate" }, { word: "a" }, { word: "substantial" }, { word: "share" }, { word: "buyback" }, { word: "program", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "企业财务", text: "free cash flow (自由现金流), share buyback (股票回购), initiate (启动)" }
      ]
    },
    {
      id: "q_finance_s106",
      chinese: "监管机构对系统重要性金融机构实施了严格的资本充足要求",
      english_full: "Regulatory authorities imposed stringent capital adequacy requirements on systemically important financial institutions.",
      words: [
        { word: "Regulatory" }, { word: "authorities" }, { word: "imposed" }, { word: "stringent" }, { word: "capital" }, { word: "adequacy" }, { word: "requirements" }, { word: "on" }, { word: "systemically" }, { word: "important" }, { word: "financial" }, { word: "institutions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈrɛɡjʊləˌtɔːri/ /əˈθɒrɪtiz/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "Regulatory" }, { word: "authorities" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪmˈpoʊzd/", translation: "实施了",
          subComponents: [{ startIndex: 0, words: [{ word: "imposed" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ˈstrɪndʒənt/ /ˈkæpɪtəl/ /ˈædɪkwəsi/ /rɪˈkwaɪərmənts/", translation: "严格的资本充足要求",
          subComponents: [{ startIndex: 0, words: [{ word: "stringent" }, { word: "capital" }, { word: "adequacy" }, { word: "requirements" }] }]
        },
        {
          start: 7, end: 11, label: "对象状语", phonetic: "/ɒn/ /ˌsɪstəˈmɪtɪkli/ /ɪmˈpɔːrtənt/ /faɪˈnænʃəl/ /ˌɪnstɪˈtuːʃənz/", translation: "对系统重要性金融机构",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "systemically" }, { word: "important" }, { word: "financial" }, { word: "institutions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "银行监管", text: "capital adequacy (资本充足), systemically important (系统重要性), impose requirements (实施要求)" }
      ]
    },
    {
      id: "q_finance_s107",
      chinese: "收益率曲线倒挂历来被视为经济衰退的可靠先兆",
      english_full: "Yield curve inversion has historically been regarded as a reliable precursor to economic recession.",
      words: [
        { word: "Yield" }, { word: "curve" }, { word: "inversion" }, { word: "has" }, { word: "historically" }, { word: "been" }, { word: "regarded" }, { word: "as" }, { word: "a" }, { word: "reliable" }, { word: "precursor" }, { word: "to" }, { word: "economic" }, { word: "recession", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/jiːld/ /kɜːrv/ /ɪnˈvɜːrʒən/", translation: "收益率曲线倒挂",
          subComponents: [{ startIndex: 0, words: [{ word: "Yield" }, { word: "curve" }, { word: "inversion" }] }]
        },
        {
          start: 3, end: 6, label: "谓语(现完被动)", phonetic: "/hæz/ /hɪˈstɒrɪkli/ /bɪn/ /rɪˈɡɑːrdɪd/", translation: "历来被视为",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "historically" }, { word: "been" }, { word: "regarded" }] }]
        },
        {
          start: 7, end: 13, label: "宾补", phonetic: "/æz/ /ə/ /rɪˈlaɪəbəl/ /priːˈkɜːrsər/ /tuː/ /ˌiːkəˈnɒmɪk/ /rɪˈsɛʃən/", translation: "经济衰退的可靠先兆",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "a" }, { word: "reliable" }, { word: "precursor" }, { word: "to" }, { word: "economic" }, { word: "recession", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宏观指标", text: "yield curve inversion (收益率曲线倒挂), precursor (先兆), economic recession (经济衰退)" }
      ]
    },
    {
      id: "q_finance_s108",
      chinese: "私募股权公司策划了对这家表现不佳的制造业集团的杠杆收购",
      english_full: "The private equity firm orchestrated a leveraged buyout of the underperforming manufacturing conglomerate.",
      words: [
        { word: "The" }, { word: "private" }, { word: "equity" }, { word: "firm" }, { word: "orchestrated" }, { word: "a" }, { word: "leveraged" }, { word: "buyout" }, { word: "of" }, { word: "the" }, { word: "underperforming" }, { word: "manufacturing" }, { word: "conglomerate", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈpraɪvət/ /ˈɛkwɪti/ /fɜːrm/", translation: "私募股权公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "private" }, { word: "equity" }, { word: "firm" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɔːrkɪstreɪtɪd/", translation: "策划了",
          subComponents: [{ startIndex: 0, words: [{ word: "orchestrated" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ə/ /ˈlɛvərɪdʒd/ /ˈbaɪaʊt/", translation: "杠杆收购",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "leveraged" }, { word: "buyout" }] }]
        },
        {
          start: 8, end: 12, label: "对象状语", phonetic: "/ɒv/ /ðə/ /ˌʌndərpərˈfɔːrmɪŋ/ /ˌmænjʊˈfæktʃərɪŋ/ /kənˈglɒmərət/", translation: "对表现不佳的制造业集团",
          subComponents: [{ startIndex: 0, words: [{ word: "of" }, { word: "the" }, { word: "underperforming" }, { word: "manufacturing" }, { word: "conglomerate", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "私募股权", text: "private equity (私募股权), leveraged buyout (杠杆收购/LBO), conglomerate (企业集团)" }
      ]
    },
    {
      id: "q_finance_s109",
      chinese: "跨资产类别分散投资仍是审慎长期投资策略的基石",
      english_full: "Diversifying across asset classes remains the cornerstone of prudent long-term investment strategy.",
      words: [
        { word: "Diversifying" }, { word: "across" }, { word: "asset" }, { word: "classes" }, { word: "remains" }, { word: "the" }, { word: "cornerstone" }, { word: "of" }, { word: "prudent" }, { word: "long-term" }, { word: "investment" }, { word: "strategy", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语(动名词)", phonetic: "/daɪˈvɜːrsɪˌfaɪɪŋ/ /əˈkrɒs/ /ˈæsɛt/ /ˈklæsɪz/", translation: "跨资产类别分散投资",
          subComponents: [{ startIndex: 0, words: [{ word: "Diversifying" }, { word: "across" }, { word: "asset" }, { word: "classes" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈmeɪnz/", translation: "仍是",
          subComponents: [{ startIndex: 0, words: [{ word: "remains" }] }]
        },
        {
          start: 5, end: 11, label: "表语", phonetic: "/ðə/ /ˈkɔːrnərstoʊn/ /ɒv/ /ˈpruːdənt/ /lɒŋ-tɜːrm/ /ɪnˈvɛstmənt/ /ˈstrætədʒi/", translation: "审慎长期投资策略的基石",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "cornerstone" }, { word: "of" }, { word: "prudent" }, { word: "long-term" }, { word: "investment" }, { word: "strategy", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "资产配置", text: "asset class (资产类别), cornerstone (基石), prudent (审慎的)" }
      ]
    },
    {
      id: "q_finance_s110",
      chinese: "不断升级的地缘政治紧张局势促使资金涌入黄金和国债等避险资产",
      english_full: "Escalating geopolitical tensions have precipitated a flight to safe-haven assets such as gold and treasury bonds.",
      words: [
        { word: "Escalating" }, { word: "geopolitical" }, { word: "tensions" }, { word: "have" }, { word: "precipitated" }, { word: "a" }, { word: "flight" }, { word: "to" }, { word: "safe-haven" }, { word: "assets" }, { word: "such" }, { word: "as" }, { word: "gold" }, { word: "and" }, { word: "treasury" }, { word: "bonds", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɛskəleɪtɪŋ/ /ˌdʒiːoʊpəˈlɪtɪkəl/ /ˈtɛnʃənz/", translation: "不断升级的地缘政治紧张局势",
          subComponents: [{ startIndex: 0, words: [{ word: "Escalating" }, { word: "geopolitical" }, { word: "tensions" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /prɪˈsɪpɪˌteɪtɪd/", translation: "已促使",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "precipitated" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ə/ /flaɪt/ /tuː/ /seɪf-ˈheɪvən/ /ˈæsɛts/", translation: "资金涌入避险资产",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "flight" }, { word: "to" }, { word: "safe-haven" }, { word: "assets" }] }]
        },
        {
          start: 10, end: 15, label: "同位语", phonetic: "/sʌtʃ/ /æz/ /ɡoʊld/ /ænd/ /ˈtrɛʒəri/ /bɒndz/", translation: "如黄金和国债",
          subComponents: [{ startIndex: 0, words: [{ word: "such" }, { word: "as" }, { word: "gold" }, { word: "and" }, { word: "treasury" }, { word: "bonds", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "避险投资", text: "safe-haven asset (避险资产), flight to (涌入), treasury bond (国债)" }
      ]
    },
    {
      id: "q_finance_s111",
      chinese: "审计师发现了公司财务报告内部控制方面的重大缺陷",
      english_full: "The auditor identified material weaknesses in the company's internal controls over financial reporting.",
      words: [
        { word: "The" }, { word: "auditor" }, { word: "identified" }, { word: "material" }, { word: "weaknesses" }, { word: "in" }, { word: "the" }, { word: "company's" }, { word: "internal" }, { word: "controls" }, { word: "over" }, { word: "financial" }, { word: "reporting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈɔːdɪtər/", translation: "审计师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "auditor" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/aɪˈdɛntɪfaɪd/", translation: "发现了",
          subComponents: [{ startIndex: 0, words: [{ word: "identified" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/məˈtɪriəl/ /ˈwiːknəsɪz/", translation: "重大缺陷",
          subComponents: [{ startIndex: 0, words: [{ word: "material" }, { word: "weaknesses" }] }]
        },
        {
          start: 5, end: 12, label: "地点状语", phonetic: "/ɪn/ /ðə/ /ˈkʌmpəniz/ /ɪnˈtɜːrnəl/ /kənˈtroʊlz/ /ˈoʊvər/ /faɪˈnænʃəl/ /rɪˈpɔːrtɪŋ/", translation: "在财务报告内部控制方面",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "the" }, { word: "company's" }, { word: "internal" }, { word: "controls" }, { word: "over" }, { word: "financial" }, { word: "reporting", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "审计合规", text: "material weakness (重大缺陷), internal controls (内部控制), financial reporting (财务报告)" }
      ]
    },
    {
      id: "q_finance_s112",
      chinese: "量化宽松计划在过去十年大幅扩张了中央银行的资产负债表",
      english_full: "Quantitative easing programs have substantially expanded central bank balance sheets over the past decade.",
      words: [
        { word: "Quantitative" }, { word: "easing" }, { word: "programs" }, { word: "have" }, { word: "substantially" }, { word: "expanded" }, { word: "central" }, { word: "bank" }, { word: "balance" }, { word: "sheets" }, { word: "over" }, { word: "the" }, { word: "past" }, { word: "decade", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌkwɒntɪˈteɪtɪv/ /ˈiːzɪŋ/ /ˈproʊɡræmz/", translation: "量化宽松计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Quantitative" }, { word: "easing" }, { word: "programs" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /səbˈstænʃəli/ /ɪkˈspændɪd/", translation: "已大幅扩张",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "substantially" }, { word: "expanded" }] }]
        },
        {
          start: 6, end: 9, label: "宾语", phonetic: "/ˈsɛntrəl/ /bæŋk/ /ˈbæləns/ /ʃiːts/", translation: "中央银行资产负债表",
          subComponents: [{ startIndex: 0, words: [{ word: "central" }, { word: "bank" }, { word: "balance" }, { word: "sheets" }] }]
        },
        {
          start: 10, end: 13, label: "时间状语", phonetic: "/ˈoʊvər/ /ðə/ /pæst/ /ˈdɛkeɪd/", translation: "在过去十年",
          subComponents: [{ startIndex: 0, words: [{ word: "over" }, { word: "the" }, { word: "past" }, { word: "decade", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "货币政策", text: "quantitative easing (量化宽松), balance sheet (资产负债表), substantially (大幅地)" }
      ]
    },
    {
      id: "q_finance_s113",
      chinese: "衍生品部门执行了复杂的期权策略以保护投资组合免受下行波动",
      english_full: "The derivatives desk executed a complex options strategy to protect the portfolio from downside volatility.",
      words: [
        { word: "The" }, { word: "derivatives" }, { word: "desk" }, { word: "executed" }, { word: "a" }, { word: "complex" }, { word: "options" }, { word: "strategy" }, { word: "to" }, { word: "protect" }, { word: "the" }, { word: "portfolio" }, { word: "from" }, { word: "downside" }, { word: "volatility", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /dɪˈrɪvətɪvz/ /dɛsk/", translation: "衍生品部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "derivatives" }, { word: "desk" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɛksɪkjuːtɪd/", translation: "执行了",
          subComponents: [{ startIndex: 0, words: [{ word: "executed" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ə/ /ˈkɒmplɛks/ /ˈɒpʃənz/ /ˈstrætədʒi/", translation: "复杂的期权策略",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "complex" }, { word: "options" }, { word: "strategy" }] }]
        },
        {
          start: 8, end: 14, label: "目的状语", phonetic: "/tuː/ /prəˈtɛkt/ /ðə/ /pɔːrtˈfoʊlioʊ/ /frɒm/ /ˈdaʊnsaɪd/ /ˌvɒləˈtɪlɪti/", translation: "以保护投资组合免受下行波动",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "protect" }, { word: "the" }, { word: "portfolio" }, { word: "from" }, { word: "downside" }, { word: "volatility", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "风险管理", text: "derivatives desk (衍生品部门), options strategy (期权策略), downside volatility (下行波动)" }
      ]
    },
    {
      id: "q_finance_s114",
      chinese: "机构投资者日益将环境、社会及治理标准纳入资产配置决策",
      english_full: "Institutional investors are increasingly incorporating environmental, social, and governance criteria into their allocation decisions.",
      words: [
        { word: "Institutional" }, { word: "investors" }, { word: "are" }, { word: "increasingly" }, { word: "incorporating" }, { word: "environmental", punctuation: "," }, { word: "social", punctuation: "," }, { word: "and" }, { word: "governance" }, { word: "criteria" }, { word: "into" }, { word: "their" }, { word: "allocation" }, { word: "decisions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɪnstɪˈtuːʃənəl/ /ɪnˈvɛstərz/", translation: "机构投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "Institutional" }, { word: "investors" }] }]
        },
        {
          start: 2, end: 4, label: "谓语(进行)", phonetic: "/ɑːr/ /ɪnˈkriːsɪŋli/ /ɪnˈkɔːrpəreɪtɪŋ/", translation: "日益纳入",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "increasingly" }, { word: "incorporating" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ɪnˌvaɪrənˈmɛntəl/ /ˈsoʊʃəl/ /ænd/ /ˈgʌvərnəns/ /kraɪˈtɪriə/", translation: "环境、社会及治理标准",
          subComponents: [{ startIndex: 0, words: [{ word: "environmental", punctuation: "," }, { word: "social", punctuation: "," }, { word: "and" }, { word: "governance" }, { word: "criteria" }] }]
        },
        {
          start: 10, end: 13, label: "方向状语", phonetic: "/ˈɪntuː/ /ðɛər/ /ˌæləˈkeɪʃən/ /dɪˈsɪʒənz/", translation: "资产配置决策中",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "their" }, { word: "allocation" }, { word: "decisions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "ESG投资", text: "ESG criteria (ESG标准), institutional investor (机构投资者), allocation decision (配置决策)" }
      ]
    },
    {
      id: "q_finance_s115",
      chinese: "招股说明书披露了与即将进行的首次公开募股相关的所有重大风险",
      english_full: "The prospectus disclosed all material risks associated with the upcoming initial public offering.",
      words: [
        { word: "The" }, { word: "prospectus" }, { word: "disclosed" }, { word: "all" }, { word: "material" }, { word: "risks" }, { word: "associated" }, { word: "with" }, { word: "the" }, { word: "upcoming" }, { word: "initial" }, { word: "public" }, { word: "offering", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /prəˈspɛktəs/", translation: "招股说明书",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "prospectus" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/dɪsˈkloʊzd/", translation: "披露了",
          subComponents: [{ startIndex: 0, words: [{ word: "disclosed" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ɔːl/ /məˈtɪriəl/ /rɪsks/", translation: "所有重大风险",
          subComponents: [{ startIndex: 0, words: [{ word: "all" }, { word: "material" }, { word: "risks" }] }]
        },
        {
          start: 6, end: 12, label: "后置定语", phonetic: "/əˈsoʊʃieɪtɪd/ /wɪθ/ /ðə/ /ˈʌpkʌmɪŋ/ /ɪˈnɪʃəl/ /ˈpʌblɪk/ /ˈɒfərɪŋ/", translation: "与即将进行的IPO相关",
          subComponents: [{ startIndex: 0, words: [{ word: "associated" }, { word: "with" }, { word: "the" }, { word: "upcoming" }, { word: "initial" }, { word: "public" }, { word: "offering", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "IPO", text: "prospectus (招股说明书), material risk (重大风险), initial public offering (首次公开募股)" }
      ]
    },
    {
      id: "q_finance_s116",
      chinese: "不断扩大的贸易逆差对本币汇率施加了下行压力",
      english_full: "A widening trade deficit has exerted downward pressure on the domestic currency's exchange rate.",
      words: [
        { word: "A" }, { word: "widening" }, { word: "trade" }, { word: "deficit" }, { word: "has" }, { word: "exerted" }, { word: "downward" }, { word: "pressure" }, { word: "on" }, { word: "the" }, { word: "domestic" }, { word: "currency's" }, { word: "exchange" }, { word: "rate", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ə/ /ˈwaɪdnɪŋ/ /treɪd/ /ˈdɛfɪsɪt/", translation: "不断扩大的贸易逆差",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "widening" }, { word: "trade" }, { word: "deficit" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /ɪɡˈzɜːrtɪd/", translation: "已施加",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "exerted" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈdaʊnwərd/ /ˈprɛʃər/", translation: "下行压力",
          subComponents: [{ startIndex: 0, words: [{ word: "downward" }, { word: "pressure" }] }]
        },
        {
          start: 8, end: 13, label: "对象状语", phonetic: "/ɒn/ /ðə/ /dəˈmɛstɪk/ /ˈkɜːrənsiz/ /ɪksˈtʃeɪndʒ/ /reɪt/", translation: "对本币汇率",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "the" }, { word: "domestic" }, { word: "currency's" }, { word: "exchange" }, { word: "rate", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "国际贸易", text: "trade deficit (贸易逆差), downward pressure (下行压力), exchange rate (汇率)" }
      ]
    },
    {
      id: "q_finance_s117",
      chinese: "本轮风险投资将这家金融科技初创公司的投前估值定为超过二十亿美元",
      english_full: "The venture capital round valued the fintech startup at over two billion dollars on a pre-money basis.",
      words: [
        { word: "The" }, { word: "venture" }, { word: "capital" }, { word: "round" }, { word: "valued" }, { word: "the" }, { word: "fintech" }, { word: "startup" }, { word: "at" }, { word: "over" }, { word: "two" }, { word: "billion" }, { word: "dollars" }, { word: "on" }, { word: "a" }, { word: "pre-money" }, { word: "basis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈvɛntʃər/ /ˈkæpɪtəl/ /raʊnd/", translation: "本轮风险投资",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "venture" }, { word: "capital" }, { word: "round" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈvæljuːd/", translation: "将…估值定为",
          subComponents: [{ startIndex: 0, words: [{ word: "valued" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ðə/ /ˈfɪntɛk/ /ˈstɑːrtʌp/", translation: "这家金融科技初创公司",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "fintech" }, { word: "startup" }] }]
        },
        {
          start: 8, end: 16, label: "补语", phonetic: "/æt/ /ˈoʊvər/ /tuː/ /ˈbɪljən/ /ˈdɒlərz/ /ɒn/ /ə/ /priː-ˈmʌni/ /ˈbeɪsɪs/", translation: "投前超过二十亿美元",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "over" }, { word: "two" }, { word: "billion" }, { word: "dollars" }, { word: "on" }, { word: "a" }, { word: "pre-money" }, { word: "basis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "风险投资", text: "venture capital round (风投轮), pre-money valuation (投前估值), fintech startup (金融科技初创)" }
      ]
    },
    {
      id: "q_finance_s118",
      chinese: "固定收益投资者在利率上升环境中须审慎评估久期风险",
      english_full: "Fixed-income investors must carefully assess duration risk when navigating a rising interest rate environment.",
      words: [
        { word: "Fixed-income" }, { word: "investors" }, { word: "must" }, { word: "carefully" }, { word: "assess" }, { word: "duration" }, { word: "risk" }, { word: "when" }, { word: "navigating" }, { word: "a" }, { word: "rising" }, { word: "interest" }, { word: "rate" }, { word: "environment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/fɪkst-ˈɪnkʌm/ /ɪnˈvɛstərz/", translation: "固定收益投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "Fixed-income" }, { word: "investors" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/mʌst/ /ˈkɛrfəli/ /əˈsɛs/", translation: "须审慎评估",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "carefully" }, { word: "assess" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/djʊˈreɪʃən/ /rɪsk/", translation: "久期风险",
          subComponents: [{ startIndex: 0, words: [{ word: "duration" }, { word: "risk" }] }]
        },
        {
          start: 7, end: 13, label: "时间状语", phonetic: "/wɛn/ /ˈnævɪɡeɪtɪŋ/ /ə/ /ˈraɪzɪŋ/ /ˈɪntrɪst/ /reɪt/ /ɪnˈvaɪrənmənt/", translation: "在利率上升环境中",
          subComponents: [{ startIndex: 0, words: [{ word: "when" }, { word: "navigating" }, { word: "a" }, { word: "rising" }, { word: "interest" }, { word: "rate" }, { word: "environment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "债券投资", text: "fixed-income (固定收益), duration risk (久期风险), rising rate environment (加息环境)" }
      ]
    },
    {
      id: "q_finance_s119",
      chinese: "此次合并以全股票交易方式完成，以保留收购方的现金储备",
      english_full: "The merger was structured as an all-stock transaction to preserve the acquirer's cash reserves.",
      words: [
        { word: "The" }, { word: "merger" }, { word: "was" }, { word: "structured" }, { word: "as" }, { word: "an" }, { word: "all-stock" }, { word: "transaction" }, { word: "to" }, { word: "preserve" }, { word: "the" }, { word: "acquirer's" }, { word: "cash" }, { word: "reserves", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmɜːrdʒər/", translation: "此次合并",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "merger" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(被动)", phonetic: "/wɒz/ /ˈstrʌktʃərd/", translation: "以…方式完成",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "structured" }] }]
        },
        {
          start: 4, end: 7, label: "方式状语", phonetic: "/æz/ /æn/ /ɔːl-stɒk/ /trænˈzækʃən/", translation: "全股票交易",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "an" }, { word: "all-stock" }, { word: "transaction" }] }]
        },
        {
          start: 8, end: 13, label: "目的状语", phonetic: "/tuː/ /prɪˈzɜːrv/ /ðə/ /əˈkwaɪərərz/ /kæʃ/ /rɪˈzɜːrvz/", translation: "以保留收购方现金储备",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "preserve" }, { word: "the" }, { word: "acquirer's" }, { word: "cash" }, { word: "reserves", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "并购交易", text: "all-stock transaction (全股票交易), acquirer (收购方), cash reserves (现金储备)" }
      ]
    },
    {
      id: "q_finance_s120",
      chinese: "追加保证金通知迫使多名过度杠杆交易者以巨额亏损平仓",
      english_full: "Margin calls forced several overleveraged traders to liquidate their positions at substantial losses.",
      words: [
        { word: "Margin" }, { word: "calls" }, { word: "forced" }, { word: "several" }, { word: "overleveraged" }, { word: "traders" }, { word: "to" }, { word: "liquidate" }, { word: "their" }, { word: "positions" }, { word: "at" }, { word: "substantial" }, { word: "losses", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈmɑːrdʒɪn/ /kɔːlz/", translation: "追加保证金通知",
          subComponents: [{ startIndex: 0, words: [{ word: "Margin" }, { word: "calls" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/fɔːrst/", translation: "迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "forced" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ˈsɛvrəl/ /ˌoʊvərˈlɛvərɪdʒd/ /ˈtreɪdərz/", translation: "多名过度杠杆交易者",
          subComponents: [{ startIndex: 0, words: [{ word: "several" }, { word: "overleveraged" }, { word: "traders" }] }]
        },
        {
          start: 6, end: 12, label: "宾补", phonetic: "/tuː/ /ˈlɪkwɪˌdeɪt/ /ðɛər/ /pəˈzɪʃənz/ /æt/ /səbˈstænʃəl/ /ˈlɒsɪz/", translation: "以巨额亏损平仓",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "liquidate" }, { word: "their" }, { word: "positions" }, { word: "at" }, { word: "substantial" }, { word: "losses", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "杠杆交易", text: "margin call (追加保证金), overleveraged (过度杠杆), liquidate positions (平仓)" }
      ]
    },
    {
      id: "q_finance_s121",
      chinese: "养老基金的精算分析显示资产与预计负债之间的差距正在扩大",
      english_full: "The pension fund's actuarial analysis revealed a widening gap between assets and projected liabilities.",
      words: [
        { word: "The" }, { word: "pension" }, { word: "fund's" }, { word: "actuarial" }, { word: "analysis" }, { word: "revealed" }, { word: "a" }, { word: "widening" }, { word: "gap" }, { word: "between" }, { word: "assets" }, { word: "and" }, { word: "projected" }, { word: "liabilities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈpɛnʃən/ /fʌndz/ /ˌæktʃuˈɛriəl/ /əˈnælɪsɪs/", translation: "养老基金的精算分析",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pension" }, { word: "fund's" }, { word: "actuarial" }, { word: "analysis" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/rɪˈviːld/", translation: "显示",
          subComponents: [{ startIndex: 0, words: [{ word: "revealed" }] }]
        },
        {
          start: 6, end: 13, label: "宾语", phonetic: "/ə/ /ˈwaɪdnɪŋ/ /gæp/ /bɪˈtwiːn/ /ˈæsɛts/ /ænd/ /prəˈdʒɛktɪd/ /ˌlaɪəˈbɪlɪtiz/", translation: "资产与预计负债之间扩大的差距",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "widening" }, { word: "gap" }, { word: "between" }, { word: "assets" }, { word: "and" }, { word: "projected" }, { word: "liabilities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "养老金融", text: "actuarial analysis (精算分析), projected liabilities (预计负债), widening gap (扩大的差距)" }
      ]
    },
    {
      id: "q_finance_s122",
      chinese: "供应链中断及工业需求激增推动大宗商品期货价格飙升",
      english_full: "Commodity futures prices surged amid supply chain disruptions and heightened demand from industrial consumers.",
      words: [
        { word: "Commodity" }, { word: "futures" }, { word: "prices" }, { word: "surged" }, { word: "amid" }, { word: "supply" }, { word: "chain" }, { word: "disruptions" }, { word: "and" }, { word: "heightened" }, { word: "demand" }, { word: "from" }, { word: "industrial" }, { word: "consumers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/kəˈmɒdɪti/ /ˈfjuːtʃərz/ /ˈpraɪsɪz/", translation: "大宗商品期货价格",
          subComponents: [{ startIndex: 0, words: [{ word: "Commodity" }, { word: "futures" }, { word: "prices" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/sɜːrdʒd/", translation: "飙升",
          subComponents: [{ startIndex: 0, words: [{ word: "surged" }] }]
        },
        {
          start: 4, end: 13, label: "原因状语", phonetic: "/əˈmɪd/ /səˈplaɪ/ /tʃeɪn/ /dɪsˈrʌpʃənz/ /ænd/ /ˈhaɪtənd/ /dɪˈmænd/ /frɒm/ /ɪnˈdʌstriəl/ /kənˈsuːmərz/", translation: "在供应链中断及工业需求激增之际",
          subComponents: [{ startIndex: 0, words: [{ word: "amid" }, { word: "supply" }, { word: "chain" }, { word: "disruptions" }, { word: "and" }, { word: "heightened" }, { word: "demand" }, { word: "from" }, { word: "industrial" }, { word: "consumers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "大宗商品", text: "commodity futures (大宗商品期货), supply chain disruption (供应链中断), surge (飙升)" }
      ]
    },
    {
      id: "q_finance_s123",
      chinese: "投资银行因促成跨境收购而获得了可观的顾问费用",
      english_full: "The investment bank earned substantial advisory fees from facilitating the cross-border acquisition.",
      words: [
        { word: "The" }, { word: "investment" }, { word: "bank" }, { word: "earned" }, { word: "substantial" }, { word: "advisory" }, { word: "fees" }, { word: "from" }, { word: "facilitating" }, { word: "the" }, { word: "cross-border" }, { word: "acquisition", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪnˈvɛstmənt/ /bæŋk/", translation: "投资银行",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "investment" }, { word: "bank" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɜːrnd/", translation: "获得了",
          subComponents: [{ startIndex: 0, words: [{ word: "earned" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/səbˈstænʃəl/ /ədˈvaɪzəri/ /fiːz/", translation: "可观的顾问费用",
          subComponents: [{ startIndex: 0, words: [{ word: "substantial" }, { word: "advisory" }, { word: "fees" }] }]
        },
        {
          start: 7, end: 11, label: "来源状语", phonetic: "/frɒm/ /fəˈsɪlɪteɪtɪŋ/ /ðə/ /krɒs-ˈbɔːrdər/ /ˌækwɪˈzɪʃən/", translation: "因促成跨境收购",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "facilitating" }, { word: "the" }, { word: "cross-border" }, { word: "acquisition", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "投行业务", text: "advisory fee (顾问费), cross-border acquisition (跨境收购), facilitate (促成)" }
      ]
    },
    {
      id: "q_finance_s124",
      chinese: "评级机构下调评级引发发行人企业债券的剧烈抛售",
      english_full: "A downgrade by the rating agency triggered a sharp sell-off in the issuer's corporate bonds.",
      words: [
        { word: "A" }, { word: "downgrade" }, { word: "by" }, { word: "the" }, { word: "rating" }, { word: "agency" }, { word: "triggered" }, { word: "a" }, { word: "sharp" }, { word: "sell-off" }, { word: "in" }, { word: "the" }, { word: "issuer's" }, { word: "corporate" }, { word: "bonds", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ə/ /ˈdaʊnɡreɪd/ /baɪ/ /ðə/ /ˈreɪtɪŋ/ /ˈeɪdʒənsi/", translation: "评级机构的下调",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "downgrade" }, { word: "by" }, { word: "the" }, { word: "rating" }, { word: "agency" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/ˈtrɪɡərd/", translation: "引发",
          subComponents: [{ startIndex: 0, words: [{ word: "triggered" }] }]
        },
        {
          start: 7, end: 14, label: "宾语", phonetic: "/ə/ /ʃɑːrp/ /ˈsɛl-ɒf/ /ɪn/ /ðə/ /ˈɪʃuːərz/ /ˈkɔːrpərət/ /bɒndz/", translation: "发行人企业债券的剧烈抛售",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "sharp" }, { word: "sell-off" }, { word: "in" }, { word: "the" }, { word: "issuer's" }, { word: "corporate" }, { word: "bonds", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "信用评级", text: "downgrade (下调评级), rating agency (评级机构), sell-off (抛售)" }
      ]
    },
    {
      id: "q_finance_s125",
      chinese: "交易所交易基金以远低于主动管理成本提供全球股票的分散敞口",
      english_full: "The exchange-traded fund offers diversified exposure to global equities at a fraction of active management costs.",
      words: [
        { word: "The" }, { word: "exchange-traded" }, { word: "fund" }, { word: "offers" }, { word: "diversified" }, { word: "exposure" }, { word: "to" }, { word: "global" }, { word: "equities" }, { word: "at" }, { word: "a" }, { word: "fraction" }, { word: "of" }, { word: "active" }, { word: "management" }, { word: "costs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪksˈtʃeɪndʒ-treɪdɪd/ /fʌnd/", translation: "交易所交易基金",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "exchange-traded" }, { word: "fund" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/daɪˈvɜːrsɪfaɪd/ /ɪkˈspoʊʒər/ /tuː/ /ˈɡloʊbəl/ /ˈɛkwɪtiz/", translation: "全球股票的分散敞口",
          subComponents: [{ startIndex: 0, words: [{ word: "diversified" }, { word: "exposure" }, { word: "to" }, { word: "global" }, { word: "equities" }] }]
        },
        {
          start: 9, end: 15, label: "方式状语", phonetic: "/æt/ /ə/ /ˈfrækʃən/ /ɒv/ /ˈæktɪv/ /ˈmænɪdʒmənt/ /kɒsts/", translation: "成本仅为主动管理的一小部分",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "a" }, { word: "fraction" }, { word: "of" }, { word: "active" }, { word: "management" }, { word: "costs", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "ETF", text: "exchange-traded fund (ETF), diversified exposure (分散敞口), active management (主动管理)" }
      ]
    },
    {
      id: "q_finance_s126",
      chinese: "财政刺激措施向经济注入流动性，但引发了对长期债务可持续性的担忧",
      english_full: "Fiscal stimulus measures injected liquidity into the economy but raised concerns about long-term debt sustainability.",
      words: [
        { word: "Fiscal" }, { word: "stimulus" }, { word: "measures" }, { word: "injected" }, { word: "liquidity" }, { word: "into" }, { word: "the" }, { word: "economy" }, { word: "but" }, { word: "raised" }, { word: "concerns" }, { word: "about" }, { word: "long-term" }, { word: "debt" }, { word: "sustainability", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈfɪskəl/ /ˈstɪmjʊləs/ /ˈmɛʒərz/", translation: "财政刺激措施",
          subComponents: [{ startIndex: 0, words: [{ word: "Fiscal" }, { word: "stimulus" }, { word: "measures" }] }]
        },
        {
          start: 3, end: 7, label: "谓语1", phonetic: "/ɪnˈdʒɛktɪd/ /lɪˈkwɪdɪti/ /ˈɪntuː/ /ðə/ /ɪˈkɒnəmi/", translation: "向经济注入流动性",
          subComponents: [{ startIndex: 0, words: [{ word: "injected" }, { word: "liquidity" }, { word: "into" }, { word: "the" }, { word: "economy" }] }]
        },
        {
          start: 8, end: 8, label: "连词", phonetic: "/bʌt/", translation: "但",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }] }]
        },
        {
          start: 9, end: 14, label: "谓语2+宾语", phonetic: "/reɪzd/ /kənˈsɜːrnz/ /əˈbaʊt/ /lɒŋ-tɜːrm/ /dɛt/ /səˌsteɪnəˈbɪlɪti/", translation: "引发对长期债务可持续性的担忧",
          subComponents: [{ startIndex: 0, words: [{ word: "raised" }, { word: "concerns" }, { word: "about" }, { word: "long-term" }, { word: "debt" }, { word: "sustainability", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "财政政策", text: "fiscal stimulus (财政刺激), debt sustainability (债务可持续性), inject liquidity (注入流动性)" }
      ]
    },
    {
      id: "q_finance_s127",
      chinese: "首席财务官在业绩电话会上详细列示了运营支出构成",
      english_full: "The chief financial officer presented a detailed breakdown of operating expenses during the earnings call.",
      words: [
        { word: "The" }, { word: "chief" }, { word: "financial" }, { word: "officer" }, { word: "presented" }, { word: "a" }, { word: "detailed" }, { word: "breakdown" }, { word: "of" }, { word: "operating" }, { word: "expenses" }, { word: "during" }, { word: "the" }, { word: "earnings" }, { word: "call", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /tʃiːf/ /faɪˈnænʃəl/ /ˈɒfɪsər/", translation: "首席财务官",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chief" }, { word: "financial" }, { word: "officer" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/prɪˈzɛntɪd/", translation: "列示了",
          subComponents: [{ startIndex: 0, words: [{ word: "presented" }] }]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ə/ /ˈdiːteɪld/ /ˈbreɪkdaʊn/ /ɒv/ /ˈɒpəreɪtɪŋ/ /ɪkˈspɛnsɪz/", translation: "运营支出的详细构成",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "detailed" }, { word: "breakdown" }, { word: "of" }, { word: "operating" }, { word: "expenses" }] }]
        },
        {
          start: 11, end: 14, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /ˈɜːrnɪŋz/ /kɔːl/", translation: "在业绩电话会上",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "earnings" }, { word: "call", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "企业财报", text: "CFO (首席财务官), operating expenses (运营支出), earnings call (业绩电话会)" }
      ]
    },
    {
      id: "q_finance_s128",
      chinese: "算法交易系统现已占主要交易所日成交量中的显著比例",
      english_full: "Algorithmic trading systems now account for a significant proportion of daily volume on major exchanges.",
      words: [
        { word: "Algorithmic" }, { word: "trading" }, { word: "systems" }, { word: "now" }, { word: "account" }, { word: "for" }, { word: "a" }, { word: "significant" }, { word: "proportion" }, { word: "of" }, { word: "daily" }, { word: "volume" }, { word: "on" }, { word: "major" }, { word: "exchanges", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌælɡəˈrɪðmɪk/ /ˈtreɪdɪŋ/ /ˈsɪstəmz/", translation: "算法交易系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Algorithmic" }, { word: "trading" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/naʊ/ /əˈkaʊnt/", translation: "现占",
          subComponents: [{ startIndex: 0, words: [{ word: "now" }, { word: "account" }] }]
        },
        {
          start: 5, end: 14, label: "宾语", phonetic: "/fɔːr/ /ə/ /sɪɡˈnɪfɪkənt/ /prəˈpɔːrʃən/ /ɒv/ /ˈdeɪli/ /ˈvɒljuːm/ /ɒn/ /ˈmeɪdʒər/ /ɪksˈtʃeɪndʒɪz/", translation: "主要交易所日成交量的显著比例",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "a" }, { word: "significant" }, { word: "proportion" }, { word: "of" }, { word: "daily" }, { word: "volume" }, { word: "on" }, { word: "major" }, { word: "exchanges", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "量化交易", text: "algorithmic trading (算法交易), account for (占), daily volume (日成交量)" }
      ]
    },
    {
      id: "q_finance_s129",
      chinese: "房地产投资信托基金以旗下物业租金收入为基础派发季度股息",
      english_full: "The real estate investment trust distributed quarterly dividends derived from rental income across its property portfolio.",
      words: [
        { word: "The" }, { word: "real" }, { word: "estate" }, { word: "investment" }, { word: "trust" }, { word: "distributed" }, { word: "quarterly" }, { word: "dividends" }, { word: "derived" }, { word: "from" }, { word: "rental" }, { word: "income" }, { word: "across" }, { word: "its" }, { word: "property" }, { word: "portfolio", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /riːl/ /ɪˈsteɪt/ /ɪnˈvɛstmənt/ /trʌst/", translation: "房地产投资信托基金",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "real" }, { word: "estate" }, { word: "investment" }, { word: "trust" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/dɪˈstrɪbjuːtɪd/", translation: "派发了",
          subComponents: [{ startIndex: 0, words: [{ word: "distributed" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈkwɔːrtərli/ /ˈdɪvɪdɛndz/", translation: "季度股息",
          subComponents: [{ startIndex: 0, words: [{ word: "quarterly" }, { word: "dividends" }] }]
        },
        {
          start: 8, end: 15, label: "来源状语", phonetic: "/dɪˈraɪvd/ /frɒm/ /ˈrɛntəl/ /ˈɪnkʌm/ /əˈkrɒs/ /ɪts/ /ˈprɒpərti/ /pɔːrtˈfoʊlioʊ/", translation: "源自旗下物业租金收入",
          subComponents: [{ startIndex: 0, words: [{ word: "derived" }, { word: "from" }, { word: "rental" }, { word: "income" }, { word: "across" }, { word: "its" }, { word: "property" }, { word: "portfolio", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "REIT", text: "real estate investment trust (REIT), quarterly dividend (季度股息), property portfolio (物业组合)" }
      ]
    },
    {
      id: "q_finance_s130",
      chinese: "多家大型金融机构倒闭后，交易对手风险成为关键关切",
      english_full: "Counterparty risk became a critical concern following the collapse of several major financial institutions.",
      words: [
        { word: "Counterparty" }, { word: "risk" }, { word: "became" }, { word: "a" }, { word: "critical" }, { word: "concern" }, { word: "following" }, { word: "the" }, { word: "collapse" }, { word: "of" }, { word: "several" }, { word: "major" }, { word: "financial" }, { word: "institutions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌkaʊntərˈpɑːrti/ /rɪsk/", translation: "交易对手风险",
          subComponents: [{ startIndex: 0, words: [{ word: "Counterparty" }, { word: "risk" }] }]
        },
        {
          start: 2, end: 2, label: "系动词", phonetic: "/bɪˈkeɪm/", translation: "成为",
          subComponents: [{ startIndex: 0, words: [{ word: "became" }] }]
        },
        {
          start: 3, end: 5, label: "表语", phonetic: "/ə/ /ˈkrɪtɪkəl/ /kənˈsɜːrn/", translation: "关键关切",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "critical" }, { word: "concern" }] }]
        },
        {
          start: 6, end: 13, label: "时间状语", phonetic: "/ˈfɒloʊɪŋ/ /ðə/ /kəˈlæps/ /ɒv/ /ˈsɛvrəl/ /ˈmeɪdʒər/ /faɪˈnænʃəl/ /ˌɪnstɪˈtuːʃənz/", translation: "在多家大型金融机构倒闭之后",
          subComponents: [{ startIndex: 0, words: [{ word: "following" }, { word: "the" }, { word: "collapse" }, { word: "of" }, { word: "several" }, { word: "major" }, { word: "financial" }, { word: "institutions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "系统性风险", text: "counterparty risk (交易对手风险), financial institution (金融机构), collapse (倒闭)" }
      ]
    },
    {
      id: "q_finance_s131",
      chinese: "投资组合经理在市场条件变化时重新调整持仓以维持目标配置",
      english_full: "The portfolio manager rebalanced holdings to maintain the target allocation amid shifting market conditions.",
      words: [
        { word: "The" }, { word: "portfolio" }, { word: "manager" }, { word: "rebalanced" }, { word: "holdings" }, { word: "to" }, { word: "maintain" }, { word: "the" }, { word: "target" }, { word: "allocation" }, { word: "amid" }, { word: "shifting" }, { word: "market" }, { word: "conditions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /pɔːrtˈfoʊlioʊ/ /ˈmænɪdʒər/", translation: "投资组合经理",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "portfolio" }, { word: "manager" }] }]
        },
        {
          start: 3, end: 4, label: "谓语+宾语", phonetic: "/riːˈbælənst/ /ˈhoʊldɪŋz/", translation: "重新调整持仓",
          subComponents: [{ startIndex: 0, words: [{ word: "rebalanced" }, { word: "holdings" }] }]
        },
        {
          start: 5, end: 9, label: "目的状语", phonetic: "/tuː/ /meɪnˈteɪn/ /ðə/ /ˈtɑːrɡɪt/ /ˌæləˈkeɪʃən/", translation: "以维持目标配置",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "maintain" }, { word: "the" }, { word: "target" }, { word: "allocation" }] }]
        },
        {
          start: 10, end: 13, label: "背景状语", phonetic: "/əˈmɪd/ /ˈʃɪftɪŋ/ /ˈmɑːrkɪt/ /kənˈdɪʃənz/", translation: "在市场条件变化之际",
          subComponents: [{ startIndex: 0, words: [{ word: "amid" }, { word: "shifting" }, { word: "market" }, { word: "conditions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "组合管理", text: "rebalance holdings (调整持仓), target allocation (目标配置), shifting conditions (变化的条件)" }
      ]
    },
    {
      id: "q_finance_s132",
      chinese: "巴塞尔三号框架要求银行持有更高质量的资本缓冲以应对潜在损失",
      english_full: "Basel III frameworks require banks to hold higher quality capital buffers against potential losses.",
      words: [
        { word: "Basel" }, { word: "III" }, { word: "frameworks" }, { word: "require" }, { word: "banks" }, { word: "to" }, { word: "hold" }, { word: "higher" }, { word: "quality" }, { word: "capital" }, { word: "buffers" }, { word: "against" }, { word: "potential" }, { word: "losses", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈbɑːzəl/ /θriː/ /ˈfreɪmwɜːrkz/", translation: "巴塞尔三号框架",
          subComponents: [{ startIndex: 0, words: [{ word: "Basel" }, { word: "III" }, { word: "frameworks" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/bæŋks/", translation: "银行",
          subComponents: [{ startIndex: 0, words: [{ word: "banks" }] }]
        },
        {
          start: 5, end: 13, label: "宾补", phonetic: "/tuː/ /hoʊld/ /ˈhaɪər/ /ˈkwɒlɪti/ /ˈkæpɪtəl/ /ˈbʌfərz/ /əˈɡɛnst/ /pəˈtɛnʃəl/ /ˈlɒsɪz/", translation: "持有更高质量资本缓冲以应对潜在损失",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "hold" }, { word: "higher" }, { word: "quality" }, { word: "capital" }, { word: "buffers" }, { word: "against" }, { word: "potential" }, { word: "losses", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "银行监管", text: "Basel III (巴塞尔三号), capital buffer (资本缓冲), require banks to (要求银行)" }
      ]
    },
    {
      id: "q_finance_s133",
      chinese: "可转换债券发行使公司在最小化即时稀释的同时获得灵活融资",
      english_full: "The convertible bond offering provided the company with flexible financing while minimizing immediate dilution.",
      words: [
        { word: "The" }, { word: "convertible" }, { word: "bond" }, { word: "offering" }, { word: "provided" }, { word: "the" }, { word: "company" }, { word: "with" }, { word: "flexible" }, { word: "financing" }, { word: "while" }, { word: "minimizing" }, { word: "immediate" }, { word: "dilution", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /kənˈvɜːrtəbəl/ /bɒnd/ /ˈɒfərɪŋ/", translation: "可转换债券发行",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "convertible" }, { word: "bond" }, { word: "offering" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/prəˈvaɪdɪd/", translation: "提供了",
          subComponents: [{ startIndex: 0, words: [{ word: "provided" }] }]
        },
        {
          start: 5, end: 6, label: "间接宾语", phonetic: "/ðə/ /ˈkʌmpəni/", translation: "公司",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "company" }] }]
        },
        {
          start: 7, end: 9, label: "直接宾语", phonetic: "/wɪθ/ /ˈflɛksəbəl/ /faɪˈnænsɪŋ/", translation: "灵活融资",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "flexible" }, { word: "financing" }] }]
        },
        {
          start: 10, end: 13, label: "伴随状语", phonetic: "/waɪl/ /ˈmɪnɪmaɪzɪŋ/ /ɪˈmiːdiət/ /daɪˈluːʃən/", translation: "同时最小化即时稀释",
          subComponents: [{ startIndex: 0, words: [{ word: "while" }, { word: "minimizing" }, { word: "immediate" }, { word: "dilution", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "债券融资", text: "convertible bond (可转换债券), dilution (稀释), flexible financing (灵活融资)" }
      ]
    },
    {
      id: "q_finance_s134",
      chinese: "滞胀对希望在抑制通胀的同时不扼杀增长的政策制定者构成严峻挑战",
      english_full: "Stagflation presents a formidable challenge for policymakers seeking to curb inflation without stifling growth.",
      words: [
        { word: "Stagflation" }, { word: "presents" }, { word: "a" }, { word: "formidable" }, { word: "challenge" }, { word: "for" }, { word: "policymakers" }, { word: "seeking" }, { word: "to" }, { word: "curb" }, { word: "inflation" }, { word: "without" }, { word: "stifling" }, { word: "growth", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/stæɡˈfleɪʃən/", translation: "滞胀",
          subComponents: [{ startIndex: 0, words: [{ word: "Stagflation" }] }]
        },
        {
          start: 1, end: 1, label: "谓语", phonetic: "/prɪˈzɛnts/", translation: "构成",
          subComponents: [{ startIndex: 0, words: [{ word: "presents" }] }]
        },
        {
          start: 2, end: 4, label: "宾语", phonetic: "/ə/ /fɔːrˈmɪdəbəl/ /ˈtʃælɪndʒ/", translation: "严峻挑战",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "formidable" }, { word: "challenge" }] }]
        },
        {
          start: 5, end: 13, label: "对象+定语", phonetic: "/fɔːr/ /ˈpɒlɪˌseɪməkərz/ /ˈsiːkɪŋ/ /tuː/ /kɜːrb/ /ɪnˈfleɪʃən/ /wɪˈðaʊt/ /ˈstaɪflɪŋ/ /groʊθ/", translation: "对寻求抑制通胀而不扼杀增长的政策制定者",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "policymakers" }, { word: "seeking" }, { word: "to" }, { word: "curb" }, { word: "inflation" }, { word: "without" }, { word: "stifling" }, { word: "growth", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "宏观困境", text: "stagflation (滞胀), curb inflation (抑制通胀), stifle growth (扼杀增长)" }
      ]
    },
    {
      id: "q_finance_s135",
      chinese: "保险承保人在设定保费费率前评估灾难性损失的概率",
      english_full: "The insurance underwriter assessed the probability of catastrophic losses before setting premium rates.",
      words: [
        { word: "The" }, { word: "insurance" }, { word: "underwriter" }, { word: "assessed" }, { word: "the" }, { word: "probability" }, { word: "of" }, { word: "catastrophic" }, { word: "losses" }, { word: "before" }, { word: "setting" }, { word: "premium" }, { word: "rates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪnˈʃʊrəns/ /ˈʌndərˌraɪtər/", translation: "保险承保人",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "insurance" }, { word: "underwriter" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈsɛst/", translation: "评估了",
          subComponents: [{ startIndex: 0, words: [{ word: "assessed" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ðə/ /ˌprɒbəˈbɪlɪti/ /ɒv/ /ˌkætəˈstrɒfɪk/ /ˈlɒsɪz/", translation: "灾难性损失的概率",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "probability" }, { word: "of" }, { word: "catastrophic" }, { word: "losses" }] }]
        },
        {
          start: 9, end: 12, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ˈsɛtɪŋ/ /ˈpriːmiəm/ /reɪts/", translation: "在设定保费费率之前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "setting" }, { word: "premium" }, { word: "rates", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "保险精算", text: "underwriter (承保人), catastrophic loss (灾难性损失), premium rate (保费费率)" }
      ]
    },
    {
      id: "q_finance_s136",
      chinese: "监管改革实施后，外商直接投资流入该地区的速度加快",
      english_full: "Foreign direct investment flows into the region accelerated following the implementation of regulatory reforms.",
      words: [
        { word: "Foreign" }, { word: "direct" }, { word: "investment" }, { word: "flows" }, { word: "into" }, { word: "the" }, { word: "region" }, { word: "accelerated" }, { word: "following" }, { word: "the" }, { word: "implementation" }, { word: "of" }, { word: "regulatory" }, { word: "reforms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "主语", phonetic: "/ˈfɒrən/ /dɪˈrɛkt/ /ɪnˈvɛstmənt/ /floʊz/ /ˈɪntuː/ /ðə/ /ˈriːdʒən/", translation: "流入该地区的外商直接投资",
          subComponents: [{ startIndex: 0, words: [{ word: "Foreign" }, { word: "direct" }, { word: "investment" }, { word: "flows" }, { word: "into" }, { word: "the" }, { word: "region" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/əkˈsɛləreɪtɪd/", translation: "加快了",
          subComponents: [{ startIndex: 0, words: [{ word: "accelerated" }] }]
        },
        {
          start: 8, end: 13, label: "时间状语", phonetic: "/ˈfɒloʊɪŋ/ /ðə/ /ˌɪmplɪmɛnˈteɪʃən/ /ɒv/ /ˈrɛɡjʊləˌtɔːri/ /rɪˈfɔːrmz/", translation: "在监管改革实施之后",
          subComponents: [{ startIndex: 0, words: [{ word: "following" }, { word: "the" }, { word: "implementation" }, { word: "of" }, { word: "regulatory" }, { word: "reforms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "国际投资", text: "foreign direct investment (外商直接投资), regulatory reform (监管改革), accelerate (加快)" }
      ]
    },
    {
      id: "q_finance_s137",
      chinese: "财富管理公司为超高净值客户量身定制专属投资方案",
      english_full: "The wealth management firm tailored bespoke investment solutions for ultra-high-net-worth clients.",
      words: [
        { word: "The" }, { word: "wealth" }, { word: "management" }, { word: "firm" }, { word: "tailored" }, { word: "bespoke" }, { word: "investment" }, { word: "solutions" }, { word: "for" }, { word: "ultra-high-net-worth" }, { word: "clients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /wɛlθ/ /ˈmænɪdʒmənt/ /fɜːrm/", translation: "财富管理公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "wealth" }, { word: "management" }, { word: "firm" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈteɪlərd/", translation: "量身定制了",
          subComponents: [{ startIndex: 0, words: [{ word: "tailored" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/bɪˈspoʊk/ /ɪnˈvɛstmənt/ /səˈluːʃənz/", translation: "专属投资方案",
          subComponents: [{ startIndex: 0, words: [{ word: "bespoke" }, { word: "investment" }, { word: "solutions" }] }]
        },
        {
          start: 8, end: 10, label: "对象状语", phonetic: "/fɔːr/ /ˌʌltrə-haɪ-nɛt-wɜːrθ/ /ˈklaɪənts/", translation: "为超高净值客户",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "ultra-high-net-worth" }, { word: "clients", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "私人银行", text: "wealth management (财富管理), bespoke (定制的), ultra-high-net-worth (超高净值)" }
      ]
    },
    {
      id: "q_finance_s138",
      chinese: "卖空使投资者能够从被高估证券的预期下跌中获利",
      english_full: "Short selling enables investors to profit from anticipated declines in overvalued securities.",
      words: [
        { word: "Short" }, { word: "selling" }, { word: "enables" }, { word: "investors" }, { word: "to" }, { word: "profit" }, { word: "from" }, { word: "anticipated" }, { word: "declines" }, { word: "in" }, { word: "overvalued" }, { word: "securities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ʃɔːrt/ /ˈsɛlɪŋ/", translation: "卖空",
          subComponents: [{ startIndex: 0, words: [{ word: "Short" }, { word: "selling" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪˈneɪbəlz/", translation: "使…能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enables" }] }]
        },
        {
          start: 3, end: 3, label: "宾语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "investors" }] }]
        },
        {
          start: 4, end: 11, label: "宾补", phonetic: "/tuː/ /ˈprɒfɪt/ /frɒm/ /ænˈtɪsɪpeɪtɪd/ /dɪˈklaɪnz/ /ɪn/ /ˌoʊvərˈvæljuːd/ /sɪˈkjʊrɪtiz/", translation: "从被高估证券的预期下跌中获利",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "profit" }, { word: "from" }, { word: "anticipated" }, { word: "declines" }, { word: "in" }, { word: "overvalued" }, { word: "securities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "做空策略", text: "short selling (卖空), overvalued (被高估的), profit from (从…获利)" }
      ]
    },
    {
      id: "q_finance_s139",
      chinese: "央行前瞻性指引表明货币政策收紧将以审慎节奏推进",
      english_full: "The central bank's forward guidance signaled that monetary tightening would proceed at a measured pace.",
      words: [
        { word: "The" }, { word: "central" }, { word: "bank's" }, { word: "forward" }, { word: "guidance" }, { word: "signaled" }, { word: "that" }, { word: "monetary" }, { word: "tightening" }, { word: "would" }, { word: "proceed" }, { word: "at" }, { word: "a" }, { word: "measured" }, { word: "pace", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈsɛntrəl/ /bæŋks/ /ˈfɔːrwərd/ /ˈgaɪdns/", translation: "央行前瞻性指引",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "central" }, { word: "bank's" }, { word: "forward" }, { word: "guidance" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈsɪɡnəld/", translation: "表明",
          subComponents: [{ startIndex: 0, words: [{ word: "signaled" }] }]
        },
        {
          start: 6, end: 14, label: "宾语从句", phonetic: "/ðæt/ /ˈmɒnɪˌtɛri/ /ˈtaɪtənɪŋ/ /wʊd/ /prəˈsiːd/ /æt/ /ə/ /ˈmɛʒərd/ /peɪs/", translation: "货币政策收紧将以审慎节奏推进",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "monetary" }, { word: "tightening" }, { word: "would" }, { word: "proceed" }, { word: "at" }, { word: "a" }, { word: "measured" }, { word: "pace", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "货币政策", text: "forward guidance (前瞻性指引), monetary tightening (货币收紧), measured pace (审慎节奏)" }
      ]
    },
    {
      id: "q_finance_s140",
      chinese: "在债券两次付息日之间交易时须精确计算应计利息",
      english_full: "Accrued interest must be calculated precisely when trading bonds between coupon payment dates.",
      words: [
        { word: "Accrued" }, { word: "interest" }, { word: "must" }, { word: "be" }, { word: "calculated" }, { word: "precisely" }, { word: "when" }, { word: "trading" }, { word: "bonds" }, { word: "between" }, { word: "coupon" }, { word: "payment" }, { word: "dates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/əˈkruːd/ /ˈɪntrɪst/", translation: "应计利息",
          subComponents: [{ startIndex: 0, words: [{ word: "Accrued" }, { word: "interest" }] }]
        },
        {
          start: 2, end: 5, label: "谓语(被动)", phonetic: "/mʌst/ /bi/ /ˈkælkjʊˌleɪtɪd/ /prɪˈsaɪsli/", translation: "须精确计算",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "calculated" }, { word: "precisely" }] }]
        },
        {
          start: 6, end: 12, label: "时间状语", phonetic: "/wɛn/ /ˈtreɪdɪŋ/ /bɒndz/ /bɪˈtwiːn/ /ˈkuːpɒn/ /ˈpeɪmənt/ /deɪts/", translation: "在付息日之间交易债券时",
          subComponents: [{ startIndex: 0, words: [{ word: "when" }, { word: "trading" }, { word: "bonds" }, { word: "between" }, { word: "coupon" }, { word: "payment" }, { word: "dates", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "债券交易", text: "accrued interest (应计利息), coupon payment date (付息日), calculate precisely (精确计算)" }
      ]
    },
    {
      id: "q_finance_s141",
      chinese: "这家初创公司获得过桥融资以维持运营直至B轮融资完成",
      english_full: "The startup secured bridge financing to sustain operations until its Series B funding round closed.",
      words: [
        { word: "The" }, { word: "startup" }, { word: "secured" }, { word: "bridge" }, { word: "financing" }, { word: "to" }, { word: "sustain" }, { word: "operations" }, { word: "until" }, { word: "its" }, { word: "Series" }, { word: "B" }, { word: "funding" }, { word: "round" }, { word: "closed", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstɑːrtʌp/", translation: "这家初创公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "startup" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/sɪˈkjʊrd/", translation: "获得了",
          subComponents: [{ startIndex: 0, words: [{ word: "secured" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/brɪdʒ/ /ˈfaɪnænsɪŋ/", translation: "过桥融资",
          subComponents: [{ startIndex: 0, words: [{ word: "bridge" }, { word: "financing" }] }]
        },
        {
          start: 5, end: 14, label: "目的+时间状语", phonetic: "/tuː/ /səˈsteɪn/ /ˌɒpəˈreɪʃənz/ /ʌnˈtɪl/ /ɪts/ /ˈsɪriːz/ /biː/ /ˈfʌndɪŋ/ /raʊnd/ /kloʊzd/", translation: "以维持运营直至B轮融资完成",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "sustain" }, { word: "operations" }, { word: "until" }, { word: "its" }, { word: "Series" }, { word: "B" }, { word: "funding" }, { word: "round" }, { word: "closed", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "创业融资", text: "bridge financing (过桥融资), Series B (B轮融资), sustain operations (维持运营)" }
      ]
    },
    {
      id: "q_finance_s142",
      chinese: "银行业系统性风险促使国际金融监管机构协调干预",
      english_full: "Systemic risk in the banking sector prompted coordinated intervention by international financial regulators.",
      words: [
        { word: "Systemic" }, { word: "risk" }, { word: "in" }, { word: "the" }, { word: "banking" }, { word: "sector" }, { word: "prompted" }, { word: "coordinated" }, { word: "intervention" }, { word: "by" }, { word: "international" }, { word: "financial" }, { word: "regulators", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/sɪˈstɛmɪk/ /rɪsk/ /ɪn/ /ðə/ /ˈbæŋkɪŋ/ /ˈsɛktər/", translation: "银行业的系统性风险",
          subComponents: [{ startIndex: 0, words: [{ word: "Systemic" }, { word: "risk" }, { word: "in" }, { word: "the" }, { word: "banking" }, { word: "sector" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/ˈprɒmptɪd/", translation: "促使",
          subComponents: [{ startIndex: 0, words: [{ word: "prompted" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/koʊˈɔːrdɪneɪtɪd/ /ˌɪntərˈvɛnʃən/", translation: "协调干预",
          subComponents: [{ startIndex: 0, words: [{ word: "coordinated" }, { word: "intervention" }] }]
        },
        {
          start: 9, end: 12, label: "施事状语", phonetic: "/baɪ/ /ˌɪntərˈnæʃənəl/ /faɪˈnænʃəl/ /ˈrɛɡjʊˌleɪtərz/", translation: "国际金融监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "international" }, { word: "financial" }, { word: "regulators", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "金融监管", text: "systemic risk (系统性风险), coordinated intervention (协调干预), financial regulator (金融监管机构)" }
      ]
    },
    {
      id: "q_finance_s143",
      chinese: "尽管成分权重波动，指数基金跟踪误差仍保持极低",
      english_full: "The index fund's tracking error remained negligible despite fluctuations in constituent weights.",
      words: [
        { word: "The" }, { word: "index" }, { word: "fund's" }, { word: "tracking" }, { word: "error" }, { word: "remained" }, { word: "negligible" }, { word: "despite" }, { word: "fluctuations" }, { word: "in" }, { word: "constituent" }, { word: "weights", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈɪndɛks/ /fʌndz/ /ˈtrækɪŋ/ /ˈɛrər/", translation: "指数基金的跟踪误差",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "index" }, { word: "fund's" }, { word: "tracking" }, { word: "error" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/rɪˈmeɪnd/", translation: "仍保持",
          subComponents: [{ startIndex: 0, words: [{ word: "remained" }] }]
        },
        {
          start: 6, end: 6, label: "表语", phonetic: "/ˈnɛglɪdʒəbəl/", translation: "极低",
          subComponents: [{ startIndex: 0, words: [{ word: "negligible" }] }]
        },
        {
          start: 7, end: 11, label: "让步状语", phonetic: "/dɪˈspaɪt/ /ˌflʌktʃuˈeɪʃənz/ /ɪn/ /kənˈstɪtʃuənt/ /weɪts/", translation: "尽管成分权重波动",
          subComponents: [{ startIndex: 0, words: [{ word: "despite" }, { word: "fluctuations" }, { word: "in" }, { word: "constituent" }, { word: "weights", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "指数基金", text: "tracking error (跟踪误差), constituent weight (成分权重), negligible (可忽略的)" }
      ]
    },
    {
      id: "q_finance_s144",
      chinese: "敌意收购要约促使目标公司董事会实施毒丸防御计划",
      english_full: "A hostile takeover bid prompted the target company's board to implement a poison pill defense.",
      words: [
        { word: "A" }, { word: "hostile" }, { word: "takeover" }, { word: "bid" }, { word: "prompted" }, { word: "the" }, { word: "target" }, { word: "company's" }, { word: "board" }, { word: "to" }, { word: "implement" }, { word: "a" }, { word: "poison" }, { word: "pill" }, { word: "defense", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ə/ /ˈhɒstaɪl/ /ˈteɪkoʊvər/ /bɪd/", translation: "敌意收购要约",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "hostile" }, { word: "takeover" }, { word: "bid" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈprɒmptɪd/", translation: "促使",
          subComponents: [{ startIndex: 0, words: [{ word: "prompted" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ðə/ /ˈtɑːrɡɪt/ /ˈkʌmpəniz/ /bɔːrd/", translation: "目标公司董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "target" }, { word: "company's" }, { word: "board" }] }]
        },
        {
          start: 9, end: 14, label: "宾补", phonetic: "/tuː/ /ˈɪmplɪmənt/ /ə/ /ˈpɔɪzən/ /pɪl/ /dɪˈfɛns/", translation: "实施毒丸防御",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "implement" }, { word: "a" }, { word: "poison" }, { word: "pill" }, { word: "defense", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "并购防御", text: "hostile takeover bid (敌意收购), poison pill (毒丸计划), board of directors (董事会)" }
      ]
    },
    {
      id: "q_finance_s145",
      chinese: "流动性约束使该基金无法在不贱卖资产的情况下满足赎回请求",
      english_full: "Liquidity constraints prevented the fund from meeting redemption requests without selling assets at fire-sale prices.",
      words: [
        { word: "Liquidity" }, { word: "constraints" }, { word: "prevented" }, { word: "the" }, { word: "fund" }, { word: "from" }, { word: "meeting" }, { word: "redemption" }, { word: "requests" }, { word: "without" }, { word: "selling" }, { word: "assets" }, { word: "at" }, { word: "fire-sale" }, { word: "prices", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/lɪˈkwɪdɪti/ /kənˈstreɪnts/", translation: "流动性约束",
          subComponents: [{ startIndex: 0, words: [{ word: "Liquidity" }, { word: "constraints" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prɪˈvɛntɪd/", translation: "使…无法",
          subComponents: [{ startIndex: 0, words: [{ word: "prevented" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /fʌnd/", translation: "该基金",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "fund" }] }]
        },
        {
          start: 5, end: 14, label: "宾补", phonetic: "/frɒm/ /ˈmiːtɪŋ/ /ˌrɛdɛmpˈʃən/ /rɪˈkwɛsts/ /wɪˈðaʊt/ /ˈsɛlɪŋ/ /ˈæsɛts/ /æt/ /faɪər-seɪl/ /ˈpraɪsɪz/", translation: "在不贱卖资产的情况下满足赎回请求",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "meeting" }, { word: "redemption" }, { word: "requests" }, { word: "without" }, { word: "selling" }, { word: "assets" }, { word: "at" }, { word: "fire-sale" }, { word: "prices", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基金流动性", text: "liquidity constraint (流动性约束), redemption request (赎回请求), fire-sale price (贱卖价格)" }
      ]
    },
    {
      id: "q_finance_s146",
      chinese: "市政债券的节税结构对处于较高边际税率的投资者具有吸引力",
      english_full: "The tax-efficient structure of municipal bonds appeals to investors in higher marginal tax brackets.",
      words: [
        { word: "The" }, { word: "tax-efficient" }, { word: "structure" }, { word: "of" }, { word: "municipal" }, { word: "bonds" }, { word: "appeals" }, { word: "to" }, { word: "investors" }, { word: "in" }, { word: "higher" }, { word: "marginal" }, { word: "tax" }, { word: "brackets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /tæks-ɪˈfɪʃənt/ /ˈstrʌktʃər/ /ɒv/ /mjuːˈnɪsɪpəl/ /bɒndz/", translation: "市政债券的节税结构",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tax-efficient" }, { word: "structure" }, { word: "of" }, { word: "municipal" }, { word: "bonds" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/əˈpiːlz/", translation: "对…有吸引力",
          subComponents: [{ startIndex: 0, words: [{ word: "appeals" }] }]
        },
        {
          start: 7, end: 13, label: "对象状语", phonetic: "/tuː/ /ɪnˈvɛstərz/ /ɪn/ /ˈhaɪər/ /ˈmɑːrdʒɪnəl/ /tæks/ /ˈbrækɪts/", translation: "处于较高边际税率的投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "investors" }, { word: "in" }, { word: "higher" }, { word: "marginal" }, { word: "tax" }, { word: "brackets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "税务规划", text: "tax-efficient (节税的), municipal bond (市政债券), marginal tax bracket (边际税率档)" }
      ]
    },
    {
      id: "q_finance_s147",
      chinese: "围绕选举结果的不确定性令股市震荡，波动率指数飙升",
      english_full: "Volatility indices spiked as uncertainty surrounding the election outcome rattled equity markets.",
      words: [
        { word: "Volatility" }, { word: "indices" }, { word: "spiked" }, { word: "as" }, { word: "uncertainty" }, { word: "surrounding" }, { word: "the" }, { word: "election" }, { word: "outcome" }, { word: "rattled" }, { word: "equity" }, { word: "markets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌvɒləˈtɪlɪti/ /ˈɪndɪsiːz/", translation: "波动率指数",
          subComponents: [{ startIndex: 0, words: [{ word: "Volatility" }, { word: "indices" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/spaɪkt/", translation: "飙升",
          subComponents: [{ startIndex: 0, words: [{ word: "spiked" }] }]
        },
        {
          start: 3, end: 11, label: "原因状语从句", phonetic: "/æz/ /ʌnˈsɜːrtənti/ /səˈraʊndɪŋ/ /ðə/ /ɪˈlɛkʃən/ /ˈaʊtkʌm/ /ˈrætəld/ /ˈɛkwɪti/ /ˈmɑːrkɪts/", translation: "选举结果的不确定性令股市震荡",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "uncertainty" }, { word: "surrounding" }, { word: "the" }, { word: "election" }, { word: "outcome" }, { word: "rattled" }, { word: "equity" }, { word: "markets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "市场波动", text: "volatility index (波动率指数/VIX), equity market (股市), uncertainty (不确定性)" }
      ]
    },
    {
      id: "q_finance_s148",
      chinese: "企业财务主管运用货币远期合约对冲外汇敞口",
      english_full: "The corporate treasurer hedged foreign exchange exposure using currency forward contracts.",
      words: [
        { word: "The" }, { word: "corporate" }, { word: "treasurer" }, { word: "hedged" }, { word: "foreign" }, { word: "exchange" }, { word: "exposure" }, { word: "using" }, { word: "currency" }, { word: "forward" }, { word: "contracts", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈkɔːrpərət/ /ˈtrɛʒərər/", translation: "企业财务主管",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "corporate" }, { word: "treasurer" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/hɛdʒd/", translation: "对冲了",
          subComponents: [{ startIndex: 0, words: [{ word: "hedged" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˈfɒrən/ /ɪksˈtʃeɪndʒ/ /ɪkˈspoʊʒər/", translation: "外汇敞口",
          subComponents: [{ startIndex: 0, words: [{ word: "foreign" }, { word: "exchange" }, { word: "exposure" }] }]
        },
        {
          start: 7, end: 10, label: "方式状语", phonetic: "/ˈjuːzɪŋ/ /ˈkɜːrənsi/ /ˈfɔːrwərd/ /ˈkɒntrækts/", translation: "运用货币远期合约",
          subComponents: [{ startIndex: 0, words: [{ word: "using" }, { word: "currency" }, { word: "forward" }, { word: "contracts", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "外汇对冲", text: "foreign exchange exposure (外汇敞口), forward contract (远期合约), corporate treasurer (企业财务主管)" }
      ]
    },
    {
      id: "q_finance_s149",
      chinese: "点对点借贷平台通过直接连接借款人与投资者颠覆了传统银行业",
      english_full: "Peer-to-peer lending platforms have disrupted traditional banking by connecting borrowers directly with investors.",
      words: [
        { word: "Peer-to-peer" }, { word: "lending" }, { word: "platforms" }, { word: "have" }, { word: "disrupted" }, { word: "traditional" }, { word: "banking" }, { word: "by" }, { word: "connecting" }, { word: "borrowers" }, { word: "directly" }, { word: "with" }, { word: "investors", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/pɪr-tuː-pɪr/ /ˈlɛndɪŋ/ /ˈplætfɔːrmz/", translation: "点对点借贷平台",
          subComponents: [{ startIndex: 0, words: [{ word: "Peer-to-peer" }, { word: "lending" }, { word: "platforms" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /dɪsˈrʌptɪd/", translation: "已颠覆",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "disrupted" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/trəˈdɪʃənəl/ /ˈbæŋkɪŋ/", translation: "传统银行业",
          subComponents: [{ startIndex: 0, words: [{ word: "traditional" }, { word: "banking" }] }]
        },
        {
          start: 7, end: 12, label: "方式状语", phonetic: "/baɪ/ /kəˈnɛktɪŋ/ /ˈbɒroʊərz/ /dɪˈrɛktli/ /wɪθ/ /ɪnˈvɛstərz/", translation: "通过直接连接借款人与投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "connecting" }, { word: "borrowers" }, { word: "directly" }, { word: "with" }, { word: "investors", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "金融科技", text: "peer-to-peer lending (P2P借贷), disrupt (颠覆), connect borrowers with investors (连接借贷双方)" }
      ]
    },
    {
      id: "q_finance_s150",
      chinese: "摊销计划表展示了贷款期限内本金与利息成分如何演变",
      english_full: "The amortization schedule illustrates how principal and interest components evolve over the loan term.",
      words: [
        { word: "The" }, { word: "amortization" }, { word: "schedule" }, { word: "illustrates" }, { word: "how" }, { word: "principal" }, { word: "and" }, { word: "interest" }, { word: "components" }, { word: "evolve" }, { word: "over" }, { word: "the" }, { word: "loan" }, { word: "term", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌæmərtɪˈzeɪʃən/ /ˈskɛdʒuːl/", translation: "摊销计划表",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "amortization" }, { word: "schedule" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɪləstreɪts/", translation: "展示了",
          subComponents: [{ startIndex: 0, words: [{ word: "illustrates" }] }]
        },
        {
          start: 4, end: 13, label: "宾语从句", phonetic: "/haʊ/ /ˈprɪnsəpəl/ /ænd/ /ˈɪntrɪst/ /kəmˈpoʊnənts/ /ɪˈvɒlv/ /ˈoʊvər/ /ðə/ /loʊn/ /tɜːrm/", translation: "贷款期限内本金与利息成分如何演变",
          subComponents: [{ startIndex: 0, words: [{ word: "how" }, { word: "principal" }, { word: "and" }, { word: "interest" }, { word: "components" }, { word: "evolve" }, { word: "over" }, { word: "the" }, { word: "loan" }, { word: "term", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "贷款术语", text: "amortization schedule (摊销计划), principal and interest (本金与利息), loan term (贷款期限)" }
      ]
    },
    {
      id: "q_finance_s151",
      chinese: "积极股东向董事会施压，要求剥离非核心资产并将资本返还给投资者",
      english_full: "Activist shareholders pressured the board to divest non-core assets and return capital to investors.",
      words: [
        { word: "Activist" }, { word: "shareholders" }, { word: "pressured" }, { word: "the" }, { word: "board" }, { word: "to" }, { word: "divest" }, { word: "non-core" }, { word: "assets" }, { word: "and" }, { word: "return" }, { word: "capital" }, { word: "to" }, { word: "investors", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈæktɪvɪst/ /ˈʃɛərˌhoʊldərz/", translation: "积极股东",
          subComponents: [{ startIndex: 0, words: [{ word: "Activist" }, { word: "shareholders" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈprɛʃərd/", translation: "向…施压",
          subComponents: [{ startIndex: 0, words: [{ word: "pressured" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /bɔːrd/", translation: "董事会",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "board" }] }]
        },
        {
          start: 5, end: 13, label: "宾补", phonetic: "/tuː/ /daɪˈvɛst/ /nɒn-kɔːr/ /ˈæsɛts/ /ænd/ /rɪˈtɜːrn/ /ˈkæpɪtəl/ /tuː/ /ɪnˈvɛstərz/", translation: "剥离非核心资产并将资本返还投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "divest" }, { word: "non-core" }, { word: "assets" }, { word: "and" }, { word: "return" }, { word: "capital" }, { word: "to" }, { word: "investors", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "股东行动", text: "activist shareholder (积极股东), divest non-core assets (剥离非核心资产), return capital (返还资本)" }
      ]
    },
    {
      id: "q_finance_s152",
      chinese: "基于区块链的结算系统降低了跨境支付的交易成本与结算时间",
      english_full: "The blockchain-based settlement system reduced transaction costs and settlement times for cross-border payments.",
      words: [
        { word: "The" }, { word: "blockchain-based" }, { word: "settlement" }, { word: "system" }, { word: "reduced" }, { word: "transaction" }, { word: "costs" }, { word: "and" }, { word: "settlement" }, { word: "times" }, { word: "for" }, { word: "cross-border" }, { word: "payments", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈblɒktʃeɪn-beɪst/ /ˈsɛtlmənt/ /ˈsɪstəm/", translation: "基于区块链的结算系统",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "blockchain-based" }, { word: "settlement" }, { word: "system" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈdjuːst/", translation: "降低了",
          subComponents: [{ startIndex: 0, words: [{ word: "reduced" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/trænˈzækʃən/ /kɒsts/ /ænd/ /ˈsɛtlmənt/ /taɪmz/", translation: "交易成本与结算时间",
          subComponents: [{ startIndex: 0, words: [{ word: "transaction" }, { word: "costs" }, { word: "and" }, { word: "settlement" }, { word: "times" }] }]
        },
        {
          start: 10, end: 12, label: "对象状语", phonetic: "/fɔːr/ /krɒs-ˈbɔːrdər/ /ˈpeɪmənts/", translation: "对跨境支付",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "cross-border" }, { word: "payments", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "金融科技", text: "blockchain-based (基于区块链的), settlement time (结算时间), cross-border payment (跨境支付)" }
      ]
    },
    {
      id: "q_finance_s153",
      chinese: "净现值分析表明拟议资本支出将产生正回报",
      english_full: "Net present value analysis demonstrated that the proposed capital expenditure would generate positive returns.",
      words: [
        { word: "Net" }, { word: "present" }, { word: "value" }, { word: "analysis" }, { word: "demonstrated" }, { word: "that" }, { word: "the" }, { word: "proposed" }, { word: "capital" }, { word: "expenditure" }, { word: "would" }, { word: "generate" }, { word: "positive" }, { word: "returns", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/nɛt/ /ˈprɛzənt/ /ˈvæljuː/ /əˈnælɪsɪs/", translation: "净现值分析",
          subComponents: [{ startIndex: 0, words: [{ word: "Net" }, { word: "present" }, { word: "value" }, { word: "analysis" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈdɛmənstreɪtɪd/", translation: "表明",
          subComponents: [{ startIndex: 0, words: [{ word: "demonstrated" }] }]
        },
        {
          start: 5, end: 13, label: "宾语从句", phonetic: "/ðæt/ /ðə/ /prəˈpoʊzd/ /ˈkæpɪtəl/ /ɪkˈspɛndɪtʃər/ /wʊd/ /ˈdʒɛnəreɪt/ /ˈpɒzɪtɪv/ /rɪˈtɜːrnz/", translation: "拟议资本支出将产生正回报",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "proposed" }, { word: "capital" }, { word: "expenditure" }, { word: "would" }, { word: "generate" }, { word: "positive" }, { word: "returns", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "资本预算", text: "net present value (净现值/NPV), capital expenditure (资本支出), generate returns (产生回报)" }
      ]
    },
    {
      id: "q_finance_s154",
      chinese: "共同基金的费用比率在长期持有期间直接侵蚀投资者回报",
      english_full: "The mutual fund's expense ratio directly erodes investor returns over extended holding periods.",
      words: [
        { word: "The" }, { word: "mutual" }, { word: "fund's" }, { word: "expense" }, { word: "ratio" }, { word: "directly" }, { word: "erodes" }, { word: "investor" }, { word: "returns" }, { word: "over" }, { word: "extended" }, { word: "holding" }, { word: "periods", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈmjuːtʃuəl/ /fʌndz/ /ɪkˈspɛns/ /ˈreɪʃioʊ/", translation: "共同基金的费用比率",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "mutual" }, { word: "fund's" }, { word: "expense" }, { word: "ratio" }] }]
        },
        {
          start: 5, end: 6, label: "状语+谓语", phonetic: "/dɪˈrɛktli/ /ɪˈroʊdz/", translation: "直接侵蚀",
          subComponents: [{ startIndex: 0, words: [{ word: "directly" }, { word: "erodes" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ɪnˈvɛstər/ /rɪˈtɜːrnz/", translation: "投资者回报",
          subComponents: [{ startIndex: 0, words: [{ word: "investor" }, { word: "returns" }] }]
        },
        {
          start: 9, end: 12, label: "时间状语", phonetic: "/ˈoʊvər/ /ɪkˈstɛndɪd/ /ˈhoʊldɪŋ/ /ˈpɪəriədz/", translation: "在长期持有期间",
          subComponents: [{ startIndex: 0, words: [{ word: "over" }, { word: "extended" }, { word: "holding" }, { word: "periods", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基金费用", text: "expense ratio (费用比率), erode returns (侵蚀回报), holding period (持有期)" }
      ]
    },
    {
      id: "q_finance_s155",
      chinese: "若银行资本比率低于阈值，或有可转换债券将自动转为股权",
      english_full: "A contingent convertible bond automatically converts to equity if the bank's capital ratio falls below a threshold.",
      words: [
        { word: "A" }, { word: "contingent" }, { word: "convertible" }, { word: "bond" }, { word: "automatically" }, { word: "converts" }, { word: "to" }, { word: "equity" }, { word: "if" }, { word: "the" }, { word: "bank's" }, { word: "capital" }, { word: "ratio" }, { word: "falls" }, { word: "below" }, { word: "a" }, { word: "threshold", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ə/ /kənˈtɪndʒənt/ /kənˈvɜːrtəbəl/ /bɒnd/", translation: "或有可转换债券",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "contingent" }, { word: "convertible" }, { word: "bond" }] }]
        },
        {
          start: 4, end: 5, label: "状语+谓语", phonetic: "/ˌɔːtəˈmætɪkli/ /kənˈvɜːrts/", translation: "自动转换",
          subComponents: [{ startIndex: 0, words: [{ word: "automatically" }, { word: "converts" }] }]
        },
        {
          start: 6, end: 7, label: "补语", phonetic: "/tuː/ /ˈɛkwɪti/", translation: "为股权",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "equity" }] }]
        },
        {
          start: 8, end: 16, label: "条件状语", phonetic: "/ɪf/ /ðə/ /bæŋks/ /ˈkæpɪtəl/ /ˈreɪʃioʊ/ /fɔːlz/ /bɪˈloʊ/ /ə/ /ˈθrɛʃhoʊld/", translation: "若银行资本比率低于阈值",
          subComponents: [{ startIndex: 0, words: [{ word: "if" }, { word: "the" }, { word: "bank's" }, { word: "capital" }, { word: "ratio" }, { word: "falls" }, { word: "below" }, { word: "a" }, { word: "threshold", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "银行资本", text: "contingent convertible bond (CoCo债券), capital ratio (资本比率), convert to equity (转为股权)" }
      ]
    },
    {
      id: "q_finance_s156",
      chinese: "理财顾问建议采用渐进路径策略，在临近退休时逐步降低组合风险",
      english_full: "The financial advisor recommended a glide path strategy to gradually reduce portfolio risk as retirement approaches.",
      words: [
        { word: "The" }, { word: "financial" }, { word: "advisor" }, { word: "recommended" }, { word: "a" }, { word: "glide" }, { word: "path" }, { word: "strategy" }, { word: "to" }, { word: "gradually" }, { word: "reduce" }, { word: "portfolio" }, { word: "risk" }, { word: "as" }, { word: "retirement" }, { word: "approaches", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /faɪˈnænʃəl/ /ədˈvaɪzər/", translation: "理财顾问",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "financial" }, { word: "advisor" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˌrɛkəˈmɛndɪd/", translation: "建议",
          subComponents: [{ startIndex: 0, words: [{ word: "recommended" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ə/ /glaɪd/ /pæθ/ /ˈstrætədʒi/", translation: "渐进路径策略",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "glide" }, { word: "path" }, { word: "strategy" }] }]
        },
        {
          start: 8, end: 12, label: "目的状语", phonetic: "/tuː/ /ˈgrædʒuəli/ /rɪˈdjuːs/ /pɔːrtˈfoʊlioʊ/ /rɪsk/", translation: "逐步降低组合风险",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "gradually" }, { word: "reduce" }, { word: "portfolio" }, { word: "risk" }] }]
        },
        {
          start: 13, end: 15, label: "时间状语", phonetic: "/æz/ /rɪˈtaɪərmənt/ /əˈproʊtʃɪz/", translation: "临近退休时",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "retirement" }, { word: "approaches", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "退休规划", text: "glide path strategy (渐进路径策略), portfolio risk (组合风险), financial advisor (理财顾问)" }
      ]
    },
    {
      id: "q_finance_s157",
      chinese: "暗池使机构投资者能够以最小市场冲击执行大宗交易",
      english_full: "Dark pools allow institutional traders to execute large block trades with minimal market impact.",
      words: [
        { word: "Dark" }, { word: "pools" }, { word: "allow" }, { word: "institutional" }, { word: "traders" }, { word: "to" }, { word: "execute" }, { word: "large" }, { word: "block" }, { word: "trades" }, { word: "with" }, { word: "minimal" }, { word: "market" }, { word: "impact", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/dɑːrk/ /puːlz/", translation: "暗池",
          subComponents: [{ startIndex: 0, words: [{ word: "Dark" }, { word: "pools" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/əˈlaʊ/", translation: "使…能够",
          subComponents: [{ startIndex: 0, words: [{ word: "allow" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ˌɪnstɪˈtuːʃənəl/ /ˈtreɪdərz/", translation: "机构投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "institutional" }, { word: "traders" }] }]
        },
        {
          start: 5, end: 13, label: "宾补", phonetic: "/tuː/ /ˈɛksɪkjuːt/ /lɑːrdʒ/ /blɒk/ /treɪdz/ /wɪθ/ /ˈmɪnɪməl/ /ˈmɑːrkɪt/ /ˈɪmpækt/", translation: "以最小市场冲击执行大宗交易",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "execute" }, { word: "large" }, { word: "block" }, { word: "trades" }, { word: "with" }, { word: "minimal" }, { word: "market" }, { word: "impact", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "机构交易", text: "dark pool (暗池), block trade (大宗交易), market impact (市场冲击)" }
      ]
    },
    {
      id: "q_finance_s158",
      chinese: "每股收益因以债务融资的激进股票回购而被人为抬高",
      english_full: "The earnings per share figure was artificially inflated by aggressive share repurchases funded through debt.",
      words: [
        { word: "The" }, { word: "earnings" }, { word: "per" }, { word: "share" }, { word: "figure" }, { word: "was" }, { word: "artificially" }, { word: "inflated" }, { word: "by" }, { word: "aggressive" }, { word: "share" }, { word: "repurchases" }, { word: "funded" }, { word: "through" }, { word: "debt", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈɜːrnɪŋz/ /pər/ /ʃɛər/ /ˈfɪgjər/", translation: "每股收益数据",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "earnings" }, { word: "per" }, { word: "share" }, { word: "figure" }] }]
        },
        {
          start: 5, end: 7, label: "谓语(被动)", phonetic: "/wɒz/ /ˌɑːrtɪˈfɪʃəli/ /ɪnˈfleɪtɪd/", translation: "被人为抬高",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "artificially" }, { word: "inflated" }] }]
        },
        {
          start: 8, end: 14, label: "施事状语", phonetic: "/baɪ/ /əˈgrɛsɪv/ /ʃɛər/ /riːˈpɜːrtʃəsɪz/ /ˈfʌndɪd/ /θruː/ /dɛt/", translation: "因以债务融资的激进股票回购",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "aggressive" }, { word: "share" }, { word: "repurchases" }, { word: "funded" }, { word: "through" }, { word: "debt", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "财务分析", text: "earnings per share (每股收益/EPS), share repurchase (股票回购), artificially inflated (人为抬高)" }
      ]
    },
    {
      id: "q_finance_s159",
      chinese: "担保债务凭证在全球金融危机期间对损失放大起到了核心作用",
      english_full: "Collateralized debt obligations played a central role in amplifying losses during the global financial crisis.",
      words: [
        { word: "Collateralized" }, { word: "debt" }, { word: "obligations" }, { word: "played" }, { word: "a" }, { word: "central" }, { word: "role" }, { word: "in" }, { word: "amplifying" }, { word: "losses" }, { word: "during" }, { word: "the" }, { word: "global" }, { word: "financial" }, { word: "crisis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/kəˈlætərəˌlaɪzd/ /dɛt/ /ˌɒblɪˈɡeɪʃənz/", translation: "担保债务凭证",
          subComponents: [{ startIndex: 0, words: [{ word: "Collateralized" }, { word: "debt" }, { word: "obligations" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/pleɪd/", translation: "起到了",
          subComponents: [{ startIndex: 0, words: [{ word: "played" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ə/ /ˈsɛntrəl/ /roʊl/", translation: "核心作用",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "central" }, { word: "role" }] }]
        },
        {
          start: 7, end: 14, label: "方面+时间状语", phonetic: "/ɪn/ /ˈæmplɪfaɪɪŋ/ /ˈlɒsɪz/ /ˈdjʊərɪŋ/ /ðə/ /ˈgloʊbəl/ /faɪˈnænʃəl/ /ˈkraɪsɪs/", translation: "在放大全球金融危机期间的损失方面",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "amplifying" }, { word: "losses" }, { word: "during" }, { word: "the" }, { word: "global" }, { word: "financial" }, { word: "crisis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "结构化产品", text: "collateralized debt obligation (CDO), amplify losses (放大损失), financial crisis (金融危机)" }
      ]
    },
    {
      id: "q_finance_s160",
      chinese: "主权债务重组涉及债券持有人接受未偿债务的大幅减记",
      english_full: "The sovereign debt restructuring involved bondholders accepting a substantial haircut on outstanding obligations.",
      words: [
        { word: "The" }, { word: "sovereign" }, { word: "debt" }, { word: "restructuring" }, { word: "involved" }, { word: "bondholders" }, { word: "accepting" }, { word: "a" }, { word: "substantial" }, { word: "haircut" }, { word: "on" }, { word: "outstanding" }, { word: "obligations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈsɒvrɪn/ /dɛt/ /ˌriːˈstrʌktʃərɪŋ/", translation: "主权债务重组",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sovereign" }, { word: "debt" }, { word: "restructuring" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪnˈvɒlvd/", translation: "涉及",
          subComponents: [{ startIndex: 0, words: [{ word: "involved" }] }]
        },
        {
          start: 5, end: 12, label: "宾语", phonetic: "/ˈbɒndˌhoʊldərz/ /əkˈsɛptɪŋ/ /ə/ /səbˈstænʃəl/ /ˈhɛərkʌt/ /ɒn/ /aʊtˈstændɪŋ/ /ˌɒblɪˈɡeɪʃənz/", translation: "债券持有人接受未偿债务的大幅减记",
          subComponents: [{ startIndex: 0, words: [{ word: "bondholders" }, { word: "accepting" }, { word: "a" }, { word: "substantial" }, { word: "haircut" }, { word: "on" }, { word: "outstanding" }, { word: "obligations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "主权债务", text: "sovereign debt restructuring (主权债务重组), haircut (减记), bondholder (债券持有人)" }
      ]
    },
    {
      id: "q_finance_s161",
      chinese: "套息交易策略利用稳定宏观环境下货币之间的利率差异",
      english_full: "Carry trade strategies exploit interest rate differentials between currencies in stable macroeconomic environments.",
      words: [
        { word: "Carry" }, { word: "trade" }, { word: "strategies" }, { word: "exploit" }, { word: "interest" }, { word: "rate" }, { word: "differentials" }, { word: "between" }, { word: "currencies" }, { word: "in" }, { word: "stable" }, { word: "macroeconomic" }, { word: "environments", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkæri/ /treɪd/ /ˈstrætədʒiz/", translation: "套息交易策略",
          subComponents: [{ startIndex: 0, words: [{ word: "Carry" }, { word: "trade" }, { word: "strategies" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪkˈsplɔɪt/", translation: "利用",
          subComponents: [{ startIndex: 0, words: [{ word: "exploit" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˈɪntrɪst/ /reɪt/ /ˌdɪfəˈrɛnʃəlz/", translation: "利率差异",
          subComponents: [{ startIndex: 0, words: [{ word: "interest" }, { word: "rate" }, { word: "differentials" }] }]
        },
        {
          start: 7, end: 12, label: "范围状语", phonetic: "/bɪˈtwiːn/ /ˈkɜːrənsiz/ /ɪn/ /ˈsteɪbəl/ /ˌmækroʊˌiːkəˈnɒmɪk/ /ɪnˈvaɪrənmənts/", translation: "稳定宏观环境下货币之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "currencies" }, { word: "in" }, { word: "stable" }, { word: "macroeconomic" }, { word: "environments", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "外汇策略", text: "carry trade (套息交易), interest rate differential (利率差异), macroeconomic environment (宏观环境)" }
      ]
    },
    {
      id: "q_finance_s162",
      chinese: "合规部门标记了可能违反反洗钱法规的可疑交易",
      english_full: "The compliance department flagged suspicious transactions that potentially violated anti-money laundering regulations.",
      words: [
        { word: "The" }, { word: "compliance" }, { word: "department" }, { word: "flagged" }, { word: "suspicious" }, { word: "transactions" }, { word: "that" }, { word: "potentially" }, { word: "violated" }, { word: "anti-money" }, { word: "laundering" }, { word: "regulations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /kəmˈplaɪəns/ /dɪˈpɑːrtmənt/", translation: "合规部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "compliance" }, { word: "department" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/flægd/", translation: "标记了",
          subComponents: [{ startIndex: 0, words: [{ word: "flagged" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/səˈspɪʃəs/ /trænˈzækʃənz/", translation: "可疑交易",
          subComponents: [{ startIndex: 0, words: [{ word: "suspicious" }, { word: "transactions" }] }]
        },
        {
          start: 6, end: 11, label: "定语从句", phonetic: "/ðæt/ /pəˈtɛnʃəli/ /ˈvaɪəleɪtɪd/ /ænti-ˈmʌni/ /ˈlɔːndərɪŋ/ /ˌrɛɡjʊˈleɪʃənz/", translation: "可能违反反洗钱法规的",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "potentially" }, { word: "violated" }, { word: "anti-money" }, { word: "laundering" }, { word: "regulations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "金融合规", text: "compliance department (合规部门), anti-money laundering (反洗钱/AML), suspicious transaction (可疑交易)" }
      ]
    },
    {
      id: "q_finance_s163",
      chinese: "股息再投资计划使股东能够在不产生经纪佣金的情况下复利增长回报",
      english_full: "Dividend reinvestment plans enable shareholders to compound returns without incurring brokerage commissions.",
      words: [
        { word: "Dividend" }, { word: "reinvestment" }, { word: "plans" }, { word: "enable" }, { word: "shareholders" }, { word: "to" }, { word: "compound" }, { word: "returns" }, { word: "without" }, { word: "incurring" }, { word: "brokerage" }, { word: "commissions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈdɪvɪdɛnd/ /ˌriːɪnˈvɛstmənt/ /plænz/", translation: "股息再投资计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Dividend" }, { word: "reinvestment" }, { word: "plans" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使…能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈʃɛərˌhoʊldərz/", translation: "股东",
          subComponents: [{ startIndex: 0, words: [{ word: "shareholders" }] }]
        },
        {
          start: 5, end: 11, label: "宾补", phonetic: "/tuː/ /ˈkɒmpaʊnd/ /rɪˈtɜːrnz/ /wɪˈðaʊt/ /ɪnˈkɜːrɪŋ/ /ˈbroʊkərɪdʒ/ /kəˈmɪʃənz/", translation: "在不产生经纪佣金的情况下复利增长回报",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "compound" }, { word: "returns" }, { word: "without" }, { word: "incurring" }, { word: "brokerage" }, { word: "commissions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "股东回报", text: "dividend reinvestment plan (DRIP), compound returns (复利回报), brokerage commission (经纪佣金)" }
      ]
    },
    {
      id: "q_finance_s164",
      chinese: "资产支持证券市场为投资者提供底层消费贷款池的敞口",
      english_full: "The asset-backed securities market provides investors with exposure to pools of underlying consumer loans.",
      words: [
        { word: "The" }, { word: "asset-backed" }, { word: "securities" }, { word: "market" }, { word: "provides" }, { word: "investors" }, { word: "with" }, { word: "exposure" }, { word: "to" }, { word: "pools" }, { word: "of" }, { word: "underlying" }, { word: "consumer" }, { word: "loans", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈæsɛt-bækt/ /sɪˈkjʊrɪtiz/ /ˈmɑːrkɪt/", translation: "资产支持证券市场",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "asset-backed" }, { word: "securities" }, { word: "market" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 5, end: 5, label: "间接宾语", phonetic: "/ɪnˈvɛstərz/", translation: "投资者",
          subComponents: [{ startIndex: 0, words: [{ word: "investors" }] }]
        },
        {
          start: 6, end: 13, label: "直接宾语", phonetic: "/wɪθ/ /ɪkˈspoʊʒər/ /tuː/ /puːlz/ /ɒv/ /ˌʌndərˈlaɪɪŋ/ /kənˈsuːmər/ /loʊnz/", translation: "底层消费贷款池的敞口",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "exposure" }, { word: "to" }, { word: "pools" }, { word: "of" }, { word: "underlying" }, { word: "consumer" }, { word: "loans", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "证券化", text: "asset-backed securities (ABS), underlying consumer loans (底层消费贷款), exposure (敞口)" }
      ]
    },
    {
      id: "q_finance_s165",
      chinese: "备考财务报表调整历史业绩以反映拟议合并的影响",
      english_full: "Pro forma financial statements adjust historical results to reflect the impact of a proposed merger.",
      words: [
        { word: "Pro" }, { word: "forma" }, { word: "financial" }, { word: "statements" }, { word: "adjust" }, { word: "historical" }, { word: "results" }, { word: "to" }, { word: "reflect" }, { word: "the" }, { word: "impact" }, { word: "of" }, { word: "a" }, { word: "proposed" }, { word: "merger", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/proʊ/ /ˈfɔːrmə/ /faɪˈnænʃəl/ /ˈsteɪtmənts/", translation: "备考财务报表",
          subComponents: [{ startIndex: 0, words: [{ word: "Pro" }, { word: "forma" }, { word: "financial" }, { word: "statements" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈdʒʌst/", translation: "调整",
          subComponents: [{ startIndex: 0, words: [{ word: "adjust" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/hɪˈstɒrɪkəl/ /rɪˈzʌlts/", translation: "历史业绩",
          subComponents: [{ startIndex: 0, words: [{ word: "historical" }, { word: "results" }] }]
        },
        {
          start: 7, end: 14, label: "目的状语", phonetic: "/tuː/ /rɪˈflɛkt/ /ðə/ /ˈɪmpækt/ /ɒv/ /ə/ /prəˈpoʊzd/ /ˈmɜːrdʒər/", translation: "以反映拟议合并的影响",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "reflect" }, { word: "the" }, { word: "impact" }, { word: "of" }, { word: "a" }, { word: "proposed" }, { word: "merger", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "并购会计", text: "pro forma financial statements (备考财务报表), proposed merger (拟议合并), adjust results (调整业绩)" }
      ]
    },
    {
      id: "q_finance_s166",
      chinese: "期权市场隐含波动率超过已实现波动率，表明对下行保护的需求上升",
      english_full: "The options market implied volatility exceeded realized volatility, suggesting elevated demand for downside protection.",
      words: [
        { word: "The" }, { word: "options" }, { word: "market" }, { word: "implied" }, { word: "volatility" }, { word: "exceeded" }, { word: "realized" }, { word: "volatility", punctuation: "," }, { word: "suggesting" }, { word: "elevated" }, { word: "demand" }, { word: "for" }, { word: "downside" }, { word: "protection", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈɒpʃənz/ /ˈmɑːrkɪt/ /ɪmˈplaɪd/ /ˌvɒləˈtɪlɪti/", translation: "期权市场隐含波动率",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "options" }, { word: "market" }, { word: "implied" }, { word: "volatility" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ɪkˈsiːdɪd/", translation: "超过",
          subComponents: [{ startIndex: 0, words: [{ word: "exceeded" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈriːəˌlaɪzd/ /ˌvɒləˈtɪlɪti/", translation: "已实现波动率",
          subComponents: [{ startIndex: 0, words: [{ word: "realized" }, { word: "volatility", punctuation: "," }] }]
        },
        {
          start: 8, end: 14, label: "结果状语", phonetic: "/səˈdʒɛstɪŋ/ /ˈɛlɪveɪtɪd/ /dɪˈmænd/ /fɔːr/ /ˈdaʊnsaɪd/ /prəˈtɛkʃən/", translation: "表明对下行保护的需求上升",
          subComponents: [{ startIndex: 0, words: [{ word: "suggesting" }, { word: "elevated" }, { word: "demand" }, { word: "for" }, { word: "downside" }, { word: "protection", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "期权市场", text: "implied volatility (隐含波动率), realized volatility (已实现波动率), downside protection (下行保护)" }
      ]
    },
    {
      id: "q_finance_s167",
      chinese: "众筹平台为散户参与者提供了参与早期投资机会的途径",
      english_full: "Crowdfunding platforms have democratized access to early-stage investment opportunities for retail participants.",
      words: [
        { word: "Crowdfunding" }, { word: "platforms" }, { word: "have" }, { word: "democratized" }, { word: "access" }, { word: "to" }, { word: "early-stage" }, { word: "investment" }, { word: "opportunities" }, { word: "for" }, { word: "retail" }, { word: "participants", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈkraʊdˌfʌndɪŋ/ /ˈplætfɔːrmz/", translation: "众筹平台",
          subComponents: [{ startIndex: 0, words: [{ word: "Crowdfunding" }, { word: "platforms" }] }]
        },
        {
          start: 2, end: 3, label: "谓语(现完)", phonetic: "/hæv/ /dɪˈmɒkrəˌtaɪzd/", translation: "已使…民主化",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "democratized" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ˈæksɛs/ /tuː/ /ˈɜːrli-steɪdʒ/ /ɪnˈvɛstmənt/ /ˌɒpərˈtuːnɪtiz/", translation: "早期投资机会的途径",
          subComponents: [{ startIndex: 0, words: [{ word: "access" }, { word: "to" }, { word: "early-stage" }, { word: "investment" }, { word: "opportunities" }] }]
        },
        {
          start: 9, end: 11, label: "对象状语", phonetic: "/fɔːr/ /ˈriːteɪl/ /pɑːrtɪˈsɪpənts/", translation: "对散户参与者",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "retail" }, { word: "participants", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "另类融资", text: "crowdfunding (众筹), early-stage investment (早期投资), retail participant (散户参与者)" }
      ]
    },
    {
      id: "q_finance_s168",
      chinese: "折现现金流模型纳入了关于未来收入增长与利润率的保守假设",
      english_full: "The discounted cash flow model incorporated conservative assumptions about future revenue growth and margins.",
      words: [
        { word: "The" }, { word: "discounted" }, { word: "cash" }, { word: "flow" }, { word: "model" }, { word: "incorporated" }, { word: "conservative" }, { word: "assumptions" }, { word: "about" }, { word: "future" }, { word: "revenue" }, { word: "growth" }, { word: "and" }, { word: "margins", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /dɪsˈkaʊntɪd/ /kæʃ/ /floʊ/ /ˈmɒdəl/", translation: "折现现金流模型",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "discounted" }, { word: "cash" }, { word: "flow" }, { word: "model" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ɪnˈkɔːrpəreɪtɪd/", translation: "纳入了",
          subComponents: [{ startIndex: 0, words: [{ word: "incorporated" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/kənˈsɜːrvətɪv/ /əˈsʌmpʃənz/", translation: "保守假设",
          subComponents: [{ startIndex: 0, words: [{ word: "conservative" }, { word: "assumptions" }] }]
        },
        {
          start: 8, end: 13, label: "内容状语", phonetic: "/əˈbaʊt/ /ˈfjuːtʃər/ /ˈrɛvənjuː/ /groʊθ/ /ænd/ /ˈmɑːrdʒɪnz/", translation: "关于未来收入增长与利润率",
          subComponents: [{ startIndex: 0, words: [{ word: "about" }, { word: "future" }, { word: "revenue" }, { word: "growth" }, { word: "and" }, { word: "margins", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "估值方法", text: "discounted cash flow (DCF), conservative assumptions (保守假设), revenue growth (收入增长)" }
      ]
    },
    {
      id: "q_finance_s169",
      chinese: "结构良好的多元化投资组合应能在市场动荡中承受冲击而不损害长期财富积累目标",
      english_full: "A well-diversified portfolio should withstand market turbulence without compromising long-term wealth accumulation objectives.",
      words: [
        { word: "A" }, { word: "well-diversified" }, { word: "portfolio" }, { word: "should" }, { word: "withstand" }, { word: "market" }, { word: "turbulence" }, { word: "without" }, { word: "compromising" }, { word: "long-term" }, { word: "wealth" }, { word: "accumulation" }, { word: "objectives", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ə/ /wɛl-daɪˈvɜːrsɪfaɪd/ /pɔːrtˈfoʊlioʊ/", translation: "结构良好的多元化投资组合",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "well-diversified" }, { word: "portfolio" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ʃʊd/ /wɪðˈstænd/", translation: "应能 withstand",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "withstand" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈmɑːrkɪt/ /ˈtɜːrbjʊləns/", translation: "市场动荡",
          subComponents: [{ startIndex: 0, words: [{ word: "market" }, { word: "turbulence" }] }]
        },
        {
          start: 7, end: 12, label: "伴随状语", phonetic: "/wɪˈðaʊt/ /ˈkɒmprəmaɪzɪŋ/ /lɒŋ-tɜːrm/ /wɛlθ/ /əˌkjuːmjəˈleɪʃən/ /əbˈdʒɛktɪvz/", translation: "而不损害长期财富积累目标",
          subComponents: [{ startIndex: 0, words: [{ word: "without" }, { word: "compromising" }, { word: "long-term" }, { word: "wealth" }, { word: "accumulation" }, { word: "objectives", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "投资原则", text: "well-diversified portfolio (多元化组合), market turbulence (市场动荡), wealth accumulation (财富积累)" }
      ]
    }
  ]
};
