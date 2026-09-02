export const extensions = {
  "shopping_01": [
    {
      id: "shop_s11",
      chinese: "如果不提供原始收据，很遗憾，我们无法处理您的退款",
      english_full: "Without presenting the original receipt, we unfortunately cannot process your refund.",
      words: [
        { word: "Without" }, { word: "presenting" }, { word: "the" }, { word: "original" }, { word: "receipt", punctuation: "," },
        { word: "we" }, { word: "unfortunately" }, { word: "cannot" }, { word: "process" }, { word: "your" }, { word: "refund", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "条件状语", phonetic: "/wɪˈðaʊt/ /prɪˈzɛntɪŋ/ /ði/ /əˈrɪdʒənəl/ /rɪˈsiːt/", translation: "没有出示原始收据的话" },
        { start: 5, end: 5, label: "主语", phonetic: "/wiː/", translation: "我们" },
        { start: 6, end: 8, label: "状语+谓语", phonetic: "/ʌnˈfɔːrtʃənətli/ /ˈkænɒt/ /ˈprɒsɛs/", translation: "遗憾地无法处理" },
        { start: 9, end: 10, label: "宾语", phonetic: "/jʊər/ /ˈriːfʌnd/", translation: "您的退款" }
      ],
      analysis: [
        { type: "售后服务词汇", text: "original receipt (原小票/收据，发音/rɪˈsiːt/ p不发音)；process a refund (处理退款)。" }
      ]
    },
    {
      id: "shop_s12",
      chinese: "这家旗舰店提供前所未有的购物体验，结合了零售与娱乐",
      english_full: "The flagship store offers an unprecedented shopping experience, combining retail with entertainment.",
      words: [
        { word: "The" }, { word: "flagship" }, { word: "store" }, { word: "offers" }, { word: "an" }, { word: "unprecedented" }, { word: "shopping" }, { word: "experience", punctuation: "," },
        { word: "combining" }, { word: "retail" }, { word: "with" }, { word: "entertainment", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈflægʃɪp/ /stɔːr/", translation: "这家旗舰店" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供" },
        { start: 4, end: 7, label: "宾语", phonetic: "/æn/ /ʌnˈprɛsɪˌdɛntɪd/ /ˈʃɒpɪŋ/ /ɪkˈspɪəriəns/", translation: "一种前所未有的购物体验" },
        { start: 8, end: 11, label: "伴随状语(分词)", phonetic: "/kəmˈbaɪnɪŋ/ /ˈriːteɪl/ /wɪθ/ /ˌɛntərˈteɪnmənt/", translation: "将零售与娱乐结合起来" }
      ],
      analysis: [
        { type: "商业零售词汇", text: "flagship store (旗舰店)；combine... with... (将...与...结合)；retail (零售)。" }
      ]
    },
    {
      id: "shop_s13",
      chinese: "我们对所有春季系列商品实行买一送一的促销活动",
      english_full: "We are running a buy-one-get-one-free promotion on all our spring collection items.",
      words: [
        { word: "We" }, { word: "are" }, { word: "running" }, { word: "a" }, { word: "buy-one-get-one-free" }, { word: "promotion" },
        { word: "on" }, { word: "all" }, { word: "our" }, { word: "spring" }, { word: "collection" }, { word: "items", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/wiː/", translation: "我们" },
        { start: 1, end: 2, label: "谓语(现进)", phonetic: "/ɑːr/ /ˈrʌnɪŋ/", translation: "正在进行" },
        { start: 3, end: 5, label: "宾语", phonetic: "/ə/ /baɪ-wʌn-gɛt-wʌn-friː/ /prəˈmoʊʃən/", translation: "一场买一送一的促销" },
        { start: 6, end: 11, label: "范围状语", phonetic: "/ɒn/ /ɔːl/ /aʊər/ /sprɪŋ/ /kəˈlɛkʃən/ /ˈaɪtəmz/", translation: "在我们所有的春季系列商品上" }
      ],
      analysis: [
        { type: "商场促销用语", text: "run a promotion (举办促销活动)；buy-one-get-one-free (买一送一/BOGO)；collection (常指时装/设计的“系列”)。" }
      ]
    },
    {
      id: "shop_s14",
      chinese: "由于物流问题，这款缺货的商品可能要到下周才能补货",
      english_full: "Due to logistical issues, this out-of-stock item may not be replenished until next week.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "logistical" }, { word: "issues", punctuation: "," },
        { word: "this" }, { word: "out-of-stock" }, { word: "item" }, { word: "may" }, { word: "not" }, { word: "be" }, { word: "replenished" },
        { word: "until" }, { word: "next" }, { word: "week", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "原因状语", phonetic: "/djuː/ /tuː/ /loʊˈdʒɪstɪkəl/ /ˈɪʃuːz/", translation: "由于物流问题" },
        { start: 4, end: 6, label: "主语", phonetic: "/ðɪs/ /aʊt-ɒv-stɒk/ /ˈaɪtəm/", translation: "这款缺货的商品" },
        { start: 7, end: 10, label: "谓语(情态被动)", phonetic: "/meɪ/ /nɒt/ /bi/ /rɪˈplɛnɪʃt/", translation: "可能不会被补货" },
        { start: 11, end: 13, label: "时间状语", phonetic: "/ʌnˈtɪl/ /nɛkst/ /wiːk/", translation: "直到下周(才)" }
      ],
      analysis: [
        { type: "库存相关词汇", text: "logistical issues (物流问题)；out-of-stock (缺货的)；replenish (重新装满/补货，高级替换 restock)。" }
      ]
    },
    {
      id: "shop_s15",
      chinese: "顾客在结账时出示其会员卡可享受九折优惠",
      english_full: "Customers presenting their loyalty card at checkout are entitled to a ten percent discount.",
      words: [
        { word: "Customers" }, { word: "presenting" }, { word: "their" }, { word: "loyalty" }, { word: "card" }, { word: "at" }, { word: "checkout" },
        { word: "are" }, { word: "entitled" }, { word: "to" }, { word: "a" }, { word: "ten" }, { word: "percent" }, { word: "discount", punctuation: "." }
      ],
      components: [
        { start: 0, end: 6, label: "主语(含现在分词定语)", phonetic: "/ˈkʌstəmərz/ /prɪˈzɛntɪŋ/ /ðɛər/ /ˈlɔɪəlti/ /kɑːrd/ /æt/ /ˈtʃɛkaʊt/", translation: "在结账时出示其会员卡的顾客" },
        { start: 7, end: 9, label: "谓语(固定句式)", phonetic: "/ɑːr/ /ɪnˈtaɪtəld/ /tuː/", translation: "享有...的权利(有资格获得)" },
        { start: 10, end: 13, label: "宾语", phonetic: "/ə/ /tɛn/ /pərˈsɛnt/ /ˈdɪskaʊnt/", translation: "一个百分之十的折扣" }
      ],
      analysis: [
        { type: "商场会员表达", text: "loyalty card (常客卡/会员卡)；at checkout (在收银台结账时)；be entitled to sth (有权获得某物)。" }
      ]
    },
    {
      id: "shop_s16",
      chinese: "这些用真皮制作的限量版手提包简直是供不应求",
      english_full: "These limited-edition handbags, crafted from genuine leather, are simply in great demand.",
      words: [
        { word: "These" }, { word: "limited-edition" }, { word: "handbags", punctuation: "," }, { word: "crafted" }, { word: "from" }, { word: "genuine" }, { word: "leather", punctuation: "," },
        { word: "are" }, { word: "simply" }, { word: "in" }, { word: "great" }, { word: "demand", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðiːz/ /ˈlɪmɪtɪd-ɪˈdɪʃən/ /ˈhændbægz/", translation: "这些限量版手提包" },
        { start: 3, end: 6, label: "插入语(过去分词短语)", phonetic: "/ˈkræftɪd/ /frɒm/ /ˈdʒɛnjuɪn/ /ˈlɛðər/", translation: "用真皮制作的" },
        { start: 7, end: 7, label: "系动词", phonetic: "/ɑːr/", translation: "是" },
        { start: 8, end: 11, label: "表语", phonetic: "/ˈsɪmpli/ /ɪn/ /greɪt/ /dɪˈmænd/", translation: "简直处于极大的需求中(供不应求)" }
      ],
      analysis: [
        { type: "奢侈品销售词汇", text: "limited-edition (限量版的)；genuine leather (真皮)；in great demand (需求量大的/供不应求的)。" }
      ]
    },
    {
      id: "shop_s17",
      chinese: "该品牌致力于使用环保包装以吸引具有环保意识的消费者",
      english_full: "The brand is committed to using eco-friendly packaging to attract environmentally conscious consumers.",
      words: [
        { word: "The" }, { word: "brand" }, { word: "is" }, { word: "committed" }, { word: "to" }, { word: "using" }, { word: "eco-friendly" }, { word: "packaging" },
        { word: "to" }, { word: "attract" }, { word: "environmentally" }, { word: "conscious" }, { word: "consumers", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /brænd/", translation: "该品牌" },
        { start: 2, end: 4, label: "谓语", phonetic: "/ɪz/ /kəˈmɪtɪd/ /tuː/", translation: "致力于" },
        { start: 5, end: 7, label: "介词宾语", phonetic: "/ˈjuːzɪŋ/ /ˈiːkoʊ-ˈfrɛndli/ /ˈpækɪdʒɪŋ/", translation: "使用环保包装" },
        { start: 8, end: 12, label: "目的状语", phonetic: "/tuː/ /əˈtrækt/ /ɪnˌvaɪrənˈmɛntəli/ /ˈkɒnʃəs/ /kənˈsuːmərz/", translation: "为了吸引具有环保意识的消费者" }
      ],
      analysis: [
        { type: "品牌理念词汇", text: "be committed to doing (致力于做...，to是介词)；eco-friendly packaging (环保包装)；environmentally conscious (有环保意识的)。" }
      ]
    },
    {
      id: "shop_s18",
      chinese: "为了避免买到假冒伪劣商品，请务必从授权的零售商处购买",
      english_full: "To avoid purchasing counterfeit goods, be sure to buy exclusively from authorized retailers.",
      words: [
        { word: "To" }, { word: "avoid" }, { word: "purchasing" }, { word: "counterfeit" }, { word: "goods", punctuation: "," },
        { word: "be" }, { word: "sure" }, { word: "to" }, { word: "buy" }, { word: "exclusively" }, { word: "from" }, { word: "authorized" }, { word: "retailers", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "目的状语", phonetic: "/tuː/ /əˈvɔɪd/ /ˈpɜːrtʃəsɪŋ/ /ˈkaʊntərfɪt/ /gʊdz/", translation: "为了避免购买假冒伪劣商品" },
        { start: 5, end: 8, label: "祈使句谓语", phonetic: "/bi/ /ʃʊər/ /tuː/ /baɪ/", translation: "确保去买" },
        { start: 9, end: 12, label: "方式/来源状语", phonetic: "/ɪkˈskluːsɪvli/ /frɒm/ /ˈɔːθəraɪzd/ /ˈriːteɪlərz/", translation: "专一地(仅仅)从授权零售商处" }
      ],
      analysis: [
        { type: "消费者警告用语", text: "counterfeit goods (假冒伪劣商品，仿品，名词)；exclusively (专门地，排他地)；authorized retailer (授权零售商)。" }
      ]
    },
    {
      id: "shop_s19",
      chinese: "大宗购买通常有资格获得我们标准的批发折扣价",
      english_full: "Bulk purchases are generally eligible for our standard wholesale discount rates.",
      words: [
        { word: "Bulk" }, { word: "purchases" }, { word: "are" }, { word: "generally" }, { word: "eligible" }, { word: "for" },
        { word: "our" }, { word: "standard" }, { word: "wholesale" }, { word: "discount" }, { word: "rates", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/bʌlk/ /ˈpɜːrtʃəsɪz/", translation: "大宗购买(批发购买)" },
        { start: 2, end: 2, label: "系动词", phonetic: "/ɑːr/", translation: "是" },
        { start: 3, end: 5, label: "状语+表语", phonetic: "/ˈdʒɛnərəli/ /ˈɛlɪdʒəbəl/ /fɔːr/", translation: "通常有资格获得" },
        { start: 6, end: 10, label: "介词宾语", phonetic: "/aʊər/ /ˈstændərd/ /ˈhoʊlˌseɪl/ /ˈdɪskaʊnt/ /reɪts/", translation: "我们的标准批发折扣价" }
      ],
      analysis: [
        { type: "商务采购词汇", text: "bulk purchase (大宗/大量购买)；be eligible for (有资格享有...)；wholesale (批发，反义词是 retail)。" }
      ]
    },
    {
      id: "shop_s20",
      chinese: "这家新商场的布局如同迷宫般令人困惑，让购物者迷失方向",
      english_full: "The layout of the new mall is confusingly labyrinthine, leaving shoppers disoriented.",
      words: [
        { word: "The" }, { word: "layout" }, { word: "of" }, { word: "the" }, { word: "new" }, { word: "mall" },
        { word: "is" }, { word: "confusingly" }, { word: "labyrinthine", punctuation: "," },
        { word: "leaving" }, { word: "shoppers" }, { word: "disoriented", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ˈleɪaʊt/ /ɒv/ /ðə/ /njuː/ /mɔːl/", translation: "这家新商场的布局" },
        { start: 6, end: 6, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 7, end: 8, label: "表语", phonetic: "/kənˈfjuːzɪŋli/ /ˌlæbəˈrɪnθɪn/", translation: "令人困惑地像迷宫一样的" },
        { start: 9, end: 11, label: "结果状语(分词)", phonetic: "/ˈliːvɪŋ/ /ˈʃɒpərz/ /dɪsˈɔːriɛntɪd/", translation: "使得购物者们感到迷失方向" }
      ],
      analysis: [
        { type: "雅思描写类高级词汇", text: "labyrinthine (迷宫般的，极度复杂的)；leave sb + adj. (使得某人处于某状态)；disoriented (迷失方向的，晕头转向的)。" }
      ]
    },
    {
      id: "shop_s21",
      chinese: "顾客可以在十四个工作日内无偿退换任何有瑕疵的商品",
      english_full: "Customers can return or exchange any defective merchandise within fourteen working days without penalty.",
      words: [
        { word: "Customers" }, { word: "can" }, { word: "return" }, { word: "or" }, { word: "exchange" }, { word: "any" }, { word: "defective" }, { word: "merchandise" },
        { word: "within" }, { word: "fourteen" }, { word: "working" }, { word: "days" }, { word: "without" }, { word: "penalty", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ˈkʌstəmərz/", translation: "顾客们" },
        { start: 1, end: 4, label: "谓语", phonetic: "/kæn/ /rɪˈtɜːrn/ /ɔːr/ /ɪksˈtʃeɪndʒ/", translation: "可以退货或换货" },
        { start: 5, end: 7, label: "宾语", phonetic: "/ˈɛni/ /dɪˈfɛktɪv/ /ˈmɜːrtʃənˌdaɪz/", translation: "任何有瑕疵的商品" },
        { start: 8, end: 11, label: "时间状语", phonetic: "/wɪˈðɪn/ /ˈfɔːrˈtiːn/ /ˈwɜːrkɪŋ/ /deɪz/", translation: "在十四个工作日以内" },
        { start: 12, end: 13, label: "伴随状语", phonetic: "/wɪˈðaʊt/ /ˈpɛnəlti/", translation: "没有任何惩罚(无偿)" }
      ],
      analysis: [
        { type: "退换货标准用语", text: "return or exchange (退换货)；defective merchandise (有瑕疵的商品)；without penalty (免责，不用付违约金)。" }
      ]
    },
    {
      id: "shop_s22",
      chinese: "在这个充满活力的集市上，为了更好的价格而讨价还价是当地文化的一部分",
      english_full: "Bargaining for a better price is an integral part of the local culture in this vibrant bazaar.",
      words: [
        { word: "Bargaining" }, { word: "for" }, { word: "a" }, { word: "better" }, { word: "price" },
        { word: "is" }, { word: "an" }, { word: "integral" }, { word: "part" }, { word: "of" }, { word: "the" }, { word: "local" }, { word: "culture" },
        { word: "in" }, { word: "this" }, { word: "vibrant" }, { word: "bazaar", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "主语", phonetic: "/ˈbɑːrgɪnɪŋ/ /fɔːr/ /ə/ /ˈbɛtər/ /praɪs/", translation: "为了更好价格的讨价还价" },
        { start: 5, end: 5, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 6, end: 12, label: "表语", phonetic: "/æn/ /ˈɪntɪgrəl/ /pɑːrt/ /ɒv/ /ðə/ /ˈloʊkəl/ /ˈkʌltʃər/", translation: "当地文化不可或缺的一部分" },
        { start: 13, end: 16, label: "地点状语", phonetic: "/ɪn/ /ðɪs/ /ˈvaɪbrənt/ /bəˈzɑːr/", translation: "在这个充满活力的集市中" }
      ],
      analysis: [
        { type: "市集购物词汇", text: "bargain (名词：便宜货；动词：讨价还价)；integral part (不可或缺的一部分)；vibrant bazaar (充满活力的集市/中东市场)。" }
      ]
    },
    {
      id: "shop_s23",
      chinese: "这家超市实施了非接触式支付系统以简化结账流程",
      english_full: "The supermarket implemented a contactless payment system to streamline the checkout process.",
      words: [
        { word: "The" }, { word: "supermarket" }, { word: "implemented" }, { word: "a" }, { word: "contactless" }, { word: "payment" }, { word: "system" },
        { word: "to" }, { word: "streamline" }, { word: "the" }, { word: "checkout" }, { word: "process", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈsuːpərˌmɑːrkɪt/", translation: "这家超市" },
        { start: 2, end: 2, label: "谓语", phonetic: "/ˈɪmplɪmɛntɪd/", translation: "实施了" },
        { start: 3, end: 6, label: "宾语", phonetic: "/ə/ /ˈkɒntæktləs/ /ˈpeɪmənt/ /ˈsɪstəm/", translation: "一个非接触式支付系统" },
        { start: 7, end: 11, label: "目的状语", phonetic: "/tuː/ /ˈstriːmlaɪn/ /ðə/ /ˈtʃɛkaʊt/ /ˈprɒsɛs/", translation: "为了简化结账流程" }
      ],
      analysis: [
        { type: "现代零售技术词汇", text: "contactless payment (非接触式/感应支付)；streamline (使效率更高，简化) 是提高企业效率的必备雅思商务词汇。" }
      ]
    },
    {
      id: "shop_s24",
      chinese: "这些有机护肤品的保质期比含有合成防腐剂的产品短得多",
      english_full: "These organic skincare products have a much shorter shelf life than those containing synthetic preservatives.",
      words: [
        { word: "These" }, { word: "organic" }, { word: "skincare" }, { word: "products" }, { word: "have" }, { word: "a" }, { word: "much" }, { word: "shorter" }, { word: "shelf" }, { word: "life" },
        { word: "than" }, { word: "those" }, { word: "containing" }, { word: "synthetic" }, { word: "preservatives", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主语", phonetic: "/ðiːz/ /ɔːrˈgænɪk/ /ˈskɪnkɛər/ /ˈprɒdʌkts/", translation: "这些有机护肤品" },
        { start: 4, end: 4, label: "谓语", phonetic: "/hæv/", translation: "拥有" },
        { start: 5, end: 9, label: "宾语", phonetic: "/ə/ /mʌtʃ/ /ˈʃɔːrtər/ /ʃɛlf/ /laɪf/", translation: "一个短得多的保质期" },
        { start: 10, end: 14, label: "比较状语", phonetic: "/ðæn/ /ðoʊz/ /kənˈteɪnɪŋ/ /sɪnˈθɛtɪk/ /prɪˈzɜːrvətɪvz/", translation: "比那些含有合成防腐剂的(产品)" }
      ],
      analysis: [
        { type: "日化商品词汇", text: "organic skincare (有机护肤)；shelf life (货架期，保质期)；synthetic preservatives (人工合成防腐剂)。" }
      ]
    },
    {
      id: "shop_s25",
      chinese: "黑色星期五的销售额大大超出了零售商对今年最后一季度的预期",
      english_full: "The Black Friday sales vastly exceeded the retailer's expectations for the final quarter of the year.",
      words: [
        { word: "The" }, { word: "Black" }, { word: "Friday" }, { word: "sales" }, { word: "vastly" }, { word: "exceeded" },
        { word: "the" }, { word: "retailer's" }, { word: "expectations" }, { word: "for" }, { word: "the" }, { word: "final" }, { word: "quarter" }, { word: "of" }, { word: "the" }, { word: "year", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主语", phonetic: "/ðə/ /blæk/ /ˈfraɪdeɪ/ /seɪlz/", translation: "黑五的销售额" },
        { start: 4, end: 5, label: "状语+谓语", phonetic: "/ˈvæstli/ /ɪkˈsiːdɪd/", translation: "极大地超出了" },
        { start: 6, end: 8, label: "宾语", phonetic: "/ðə/ /ˈriːteɪlərz/ /ˌɛkspɛkˈteɪʃənz/", translation: "零售商的预期" },
        { start: 9, end: 15, label: "后置定语", phonetic: "/fɔːr/ /ðə/ /ˈfaɪnəl/ /ˈkwɔːrtər/ /ɒv/ /ðə/ /jɪər/", translation: "关于年度最后一个季度的" }
      ],
      analysis: [
        { type: "零售业绩分析", text: "vastly exceed expectations (极大地超出预期)；final quarter (最后一个季度，常简写为 Q4)。" }
      ]
    },
    {
      id: "shop_s26",
      chinese: "商店橱窗布置得如此诱人，有效地吸引了路人的眼球",
      english_full: "The shop windows were arranged so enticingly that they effectively caught the eyes of passersby.",
      words: [
        { word: "The" }, { word: "shop" }, { word: "windows" }, { word: "were" }, { word: "arranged" }, { word: "so" }, { word: "enticingly" },
        { word: "that" }, { word: "they" }, { word: "effectively" }, { word: "caught" }, { word: "the" }, { word: "eyes" }, { word: "of" }, { word: "passersby", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ʃɒp/ /ˈwɪndoʊz/", translation: "商店橱窗" },
        { start: 3, end: 4, label: "谓语(被动)", phonetic: "/wɜːr/ /əˈreɪndʒd/", translation: "被布置" },
        { start: 5, end: 6, label: "状语", phonetic: "/soʊ/ /ɪnˈtaɪsɪŋli/", translation: "如此诱人地" },
        {
          start: 7, end: 14, label: "结果状语从句", phonetic: "/ðæt/ /ðeɪ/ /ɪˈfɛktɪvli/ /kɔːt/ /ði/ /aɪz/ /ɒv/ /ˈpæsərzˌbaɪ/", translation: "以至于它们有效地抓住了路人的眼球",
          subComponents: [
            { start: 7, end: 7, label: "连词" },
            { start: 8, end: 8, label: "(从)主" },
            { start: 9, end: 10, label: "(从)状+谓" },
            { start: 11, end: 14, label: "(从)宾" }
          ]
        }
      ],
      analysis: [
        { type: "商场视觉营销", text: "enticingly (诱人地，引诱地)；catch the eyes of (吸引...的目光)；passersby (路人，单数是 passerby，注意复数 s 加在前面)。" }
      ]
    },
    {
      id: "shop_s27",
      chinese: "他们提供分期付款方案，使得高价商品更容易被普通消费者负担得起",
      english_full: "They offer installment payment plans, making high-ticket items more accessible to average consumers.",
      words: [
        { word: "They" }, { word: "offer" }, { word: "installment" }, { word: "payment" }, { word: "plans", punctuation: "," },
        { word: "making" }, { word: "high-ticket" }, { word: "items" }, { word: "more" }, { word: "accessible" }, { word: "to" }, { word: "average" }, { word: "consumers", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ðeɪ/", translation: "他们" },
        { start: 1, end: 1, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供" },
        { start: 2, end: 4, label: "宾语", phonetic: "/ɪnˈstɔːlmənt/ /ˈpeɪmənt/ /plænz/", translation: "分期付款计划" },
        { start: 5, end: 12, label: "结果状语(现在分词)", phonetic: "/ˈmeɪkɪŋ/ /haɪ-ˈtɪkɪt/ /ˈaɪtəmz/ /mɔːr/ /ækˈsɛsəbəl/ /tuː/ /ˈævərɪdʒ/ /kənˈsuːmərz/", translation: "使得高价物品对普通消费者更容易接触/负担得起" }
      ],
      analysis: [
        { type: "零售金融词汇", text: "installment (分期付款)；high-ticket item (高价商品，大件商品)；accessible to (容易获得的/买得起的)。" }
      ]
    },
    {
      id: "shop_s28",
      chinese: "这家化妆品品牌郑重声明其所有产品均未经动物实验",
      english_full: "The cosmetics brand proudly declares that all of its products are completely cruelty-free.",
      words: [
        { word: "The" }, { word: "cosmetics" }, { word: "brand" }, { word: "proudly" }, { word: "declares" },
        { word: "that" }, { word: "all" }, { word: "of" }, { word: "its" }, { word: "products" }, { word: "are" }, { word: "completely" }, { word: "cruelty-free", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/kɒzˈmɛtɪks/ /brænd/", translation: "化妆品品牌" },
        { start: 3, end: 4, label: "状语+谓语", phonetic: "/ˈpraʊdli/ /dɪˈklɛərz/", translation: "自豪地声明" },
        {
          start: 5, end: 12, label: "宾语从句", phonetic: "/ðæt/ /ɔːl/ /ɒv/ /ɪts/ /ˈprɒdʌkts/ /ɑːr/ /kəmˈpliːtli/ /ˈkruːəlti-friː/", translation: "其所有产品都是完全无残忍(未经动物实验)的",
          subComponents: [
            { start: 5, end: 5, label: "引导词" },
            { start: 6, end: 9, label: "(从)主" },
            { start: 10, end: 10, label: "(从)系" },
            { start: 11, end: 12, label: "(从)表" }
          ]
        }
      ],
      analysis: [
        { type: "美妆零售常用语", text: "cosmetics (化妆品，通常为复数)；cruelty-free (零残忍的，专指未用动物做实验的产品)。" }
      ]
    },
    {
      id: "shop_s29",
      chinese: "通过引入增强现实试衣间，该应用大幅降低了服装的退货率",
      english_full: "By introducing augmented reality fitting rooms, the app drastically reduced the return rate of clothing.",
      words: [
        { word: "By" }, { word: "introducing" }, { word: "augmented" }, { word: "reality" }, { word: "fitting" }, { word: "rooms", punctuation: "," },
        { word: "the" }, { word: "app" }, { word: "drastically" }, { word: "reduced" }, { word: "the" }, { word: "return" }, { word: "rate" }, { word: "of" }, { word: "clothing", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "方式状语", phonetic: "/baɪ/ /ˌɪntrəˈdjuːsɪŋ/ /ɔːgˈmɛntɪd/ /riˈæləti/ /ˈfɪtɪŋ/ /ruːmz/", translation: "通过引入增强现实试衣间" },
        { start: 6, end: 7, label: "主语", phonetic: "/ðə/ /æp/", translation: "该应用(APP)" },
        { start: 8, end: 9, label: "状语+谓语", phonetic: "/ˈdræstɪkli/ /rɪˈdjuːst/", translation: "极大地降低了" },
        { start: 10, end: 14, label: "宾语", phonetic: "/ðə/ /rɪˈtɜːrn/ /reɪt/ /ɒv/ /ˈkloʊðɪŋ/", translation: "服装的退货率" }
      ],
      analysis: [
        { type: "电商新科技词汇", text: "augmented reality (AR增强现实)；fitting room (试衣间)；return rate (退货率)。" }
      ]
    },
    {
      id: "shop_s30",
      chinese: "为了清理过季库存，仓库正在进行史无前例的清仓大甩卖",
      english_full: "To clear out out-of-season inventory, the warehouse is holding an unprecedented clearance sale.",
      words: [
        { word: "To" }, { word: "clear" }, { word: "out" }, { word: "out-of-season" }, { word: "inventory", punctuation: "," },
        { word: "the" }, { word: "warehouse" }, { word: "is" }, { word: "holding" }, { word: "an" }, { word: "unprecedented" }, { word: "clearance" }, { word: "sale", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "目的状语", phonetic: "/tuː/ /klɪər/ /aʊt/ /aʊt-ɒv-ˈsiːzən/ /ˈɪnvənˌtɔːri/", translation: "为了清理过季库存" },
        { start: 5, end: 6, label: "主语", phonetic: "/ðə/ /ˈwɛərˌhaʊs/", translation: "该仓库" },
        { start: 7, end: 8, label: "谓语", phonetic: "/ɪz/ /ˈhoʊldɪŋ/", translation: "正在举行" },
        { start: 9, end: 12, label: "宾语", phonetic: "/æn/ /ʌnˈprɛsɪˌdɛntɪd/ /ˈklɪərəns/ /seɪl/", translation: "一场史无前例的清仓大甩卖" }
      ],
      analysis: [
        { type: "商场促销重磅词汇", text: "out-of-season (过季的)；inventory (库存)；clearance sale (清仓甩卖)。" }
      ]
    }
  ]
};