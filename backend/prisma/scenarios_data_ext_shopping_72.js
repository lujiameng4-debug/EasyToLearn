export const extensions = {
  "shopping_01": [
    {
      id: "q_shopping_s100",
      chinese: "这家高端百货商店为持有收据并在购买后三十天内退回的未磨损商品提供全额退款",
      english_full: "The high-end department store offers a full refund for unworn merchandise returned with a receipt within thirty days of purchase.",
      words: [
        { word: "The" }, { word: "high-end" }, { word: "department" }, { word: "store" }, { word: "offers" }, { word: "a" }, { word: "full" }, { word: "refund" }, { word: "for" }, { word: "unworn" }, { word: "merchandise" }, { word: "returned" }, { word: "with" }, { word: "a" }, { word: "receipt" }, { word: "within" }, { word: "thirty" }, { word: "days" }, { word: "of" }, { word: "purchase", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /haɪ-ɛnd/ /dɪˈpɑːrtmənt/ /stɔːr/", translation: "这家高端百货商店",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "high-end" }, { word: "department" }, { word: "store" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɔːfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ə/ /fʊl/ /ˈriːfʌnd/", translation: "全额退款",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "full" }, { word: "refund" }] }]
        },
        {
          start: 8, end: 19, label: "状语", phonetic: "/fɔːr/ /ʌnˈwɔːrn/ /ˈmɜːrtʃənˌdaɪz/ /rɪˈtɜːrnd/ /wɪð/ /ə/ /rɪˈsiːt/ /wɪˈðɪn/ /ˈθɜːrti/ /deɪz/ /ɒv/ /ˈpɜːrtʃəs/", translation: "为持有收据并在购买后三十天内退回的未磨损商品",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "unworn" }, { word: "merchandise" }, { word: "returned" }, { word: "with" }, { word: "a" }, { word: "receipt" }, { word: "within" }, { word: "thirty" }, { word: "days" }, { word: "of" }, { word: "purchase", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售词汇", text: "high-end department store (高端百货商店), full refund (全额退款), unworn merchandise (未磨损商品), receipt (收据)" }
      ]
    },
    {
      id: "q_shopping_s101",
      chinese: "该购物中心通过融合餐饮、娱乐与沉浸式品牌体验来吸引高净值消费者",
      english_full: "The shopping mall attracts high-net-worth consumers by integrating dining, entertainment, and immersive brand experiences.",
      words: [
        { word: "The" }, { word: "shopping" }, { word: "mall" }, { word: "attracts" }, { word: "high-net-worth" }, { word: "consumers" }, { word: "by" }, { word: "integrating" }, { word: "dining", punctuation: "," }, { word: "entertainment", punctuation: "," }, { word: "and" }, { word: "immersive" }, { word: "brand" }, { word: "experiences", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈʃɒpɪŋ/ /mɔːl/", translation: "该购物中心",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "shopping" }, { word: "mall" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈtrækts/", translation: "吸引",
          subComponents: [{ startIndex: 0, words: [{ word: "attracts" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/haɪ-nɛt-wɜːrθ/ /kənˈsjuːmərz/", translation: "高净值消费者",
          subComponents: [{ startIndex: 0, words: [{ word: "high-net-worth" }, { word: "consumers" }] }]
        },
        {
          start: 6, end: 13, label: "方式状语", phonetic: "/baɪ/ /ˈɪntɪˌgreɪtɪŋ/ /ˈdaɪnɪŋ/ /ˌɛntərˈteɪnmənt/ /ænd/ /ɪˈmɜːrsɪv/ /brænd/ /ɪkˈspɪəriənsɪz/", translation: "通过融合餐饮、娱乐与沉浸式品牌体验",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "integrating" }, { word: "dining", punctuation: "," }, { word: "entertainment", punctuation: "," }, { word: "and" }, { word: "immersive" }, { word: "brand" }, { word: "experiences", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商场运营", text: "high-net-worth consumers (高净值消费者), immersive brand experience (沉浸式品牌体验), integrate (融合)" }
      ]
    },
    {
      id: "q_shopping_s102",
      chinese: "激烈的市场竞争迫使传统零售商大力投资电子商务与全渠道营销策略",
      english_full: "Fierce market competition has compelled traditional retailers to invest heavily in e-commerce and omnichannel marketing strategies.",
      words: [
        { word: "Fierce" }, { word: "market" }, { word: "competition" }, { word: "has" }, { word: "compelled" }, { word: "traditional" }, { word: "retailers" }, { word: "to" }, { word: "invest" }, { word: "heavily" }, { word: "in" }, { word: "e-commerce" }, { word: "and" }, { word: "omnichannel" }, { word: "marketing" }, { word: "strategies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/fɪərs/ /ˈmɑːrkɪt/ /ˌkɒmpɪˈtɪʃən/", translation: "激烈的市场竞争",
          subComponents: [{ startIndex: 0, words: [{ word: "Fierce" }, { word: "market" }, { word: "competition" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /kəmˈpɛld/", translation: "已经迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "compelled" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/trəˈdɪʃənəl/ /ˈriːteɪlərz/", translation: "传统零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "traditional" }, { word: "retailers" }] }]
        },
        {
          start: 7, end: 15, label: "宾语补足语", phonetic: "/tuː/ /ɪnˈvɛst/ /ˈhɛvɪli/ /ɪn/ /ˈiːˌkɒmɜːrs/ /ænd/ /ˌɒmniˈtʃænəl/ /ˈmɑːrkɪtɪŋ/ /ˈstrætədʒiz/", translation: "大力投资电子商务与全渠道营销策略",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "invest" }, { word: "heavily" }, { word: "in" }, { word: "e-commerce" }, { word: "and" }, { word: "omnichannel" }, { word: "marketing" }, { word: "strategies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售战略", text: "fierce competition (激烈竞争), omnichannel marketing (全渠道营销), invest heavily in (大力投资)" }
      ]
    },
    {
      id: "q_shopping_s103",
      chinese: "黑色星期五促销活动吸引了成群结队的狂热购物者，导致商场入口出现严重拥堵",
      english_full: "The Black Friday promotions attracted hordes of frantic shoppers, resulting in severe congestion at the mall entrances.",
      words: [
        { word: "The" }, { word: "Black" }, { word: "Friday" }, { word: "promotions" }, { word: "attracted" }, { word: "hordes" }, { word: "of" }, { word: "frantic" }, { word: "shoppers", punctuation: "," }, { word: "resulting" }, { word: "in" }, { word: "severe" }, { word: "congestion" }, { word: "at" }, { word: "the" }, { word: "mall" }, { word: "entrances", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主句主语", phonetic: "/ðə/ /blæk/ /ˈfraɪdeɪ/ /prəˈmoʊʃənz/", translation: "黑色星期五促销活动",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "Black" }, { word: "Friday" }, { word: "promotions" }] }]
        },
        {
          start: 4, end: 4, label: "主句谓语", phonetic: "/əˈtræktɪd/", translation: "吸引了",
          subComponents: [{ startIndex: 0, words: [{ word: "attracted" }] }]
        },
        {
          start: 5, end: 8, label: "主句宾语", phonetic: "/hɔːrdz/ /ɒv/ /ˈfræntɪk/ /ˈʃɒpərz/", translation: "成群结队的狂热购物者",
          subComponents: [{ startIndex: 0, words: [{ word: "hordes" }, { word: "of" }, { word: "frantic" }, { word: "shoppers", punctuation: "," }] }]
        },
        {
          start: 9, end: 16, label: "结果状语(分词)", phonetic: "/rɪˈzʌltɪŋ/ /ɪn/ /sɪˈvɪər/ /kənˈdʒɛstʃən/ /æt/ /ðə/ /mɔːl/ /ˈɛntrənsɪz/", translation: "导致商场入口出现严重拥堵",
          subComponents: [{ startIndex: 0, words: [{ word: "resulting" }, { word: "in" }, { word: "severe" }, { word: "congestion" }, { word: "at" }, { word: "the" }, { word: "mall" }, { word: "entrances", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "促销人流", text: "hordes of (成群结队的), frantic shoppers (狂热购物者), result in (导致), congestion (拥堵)" }
      ]
    },
    {
      id: "q_shopping_s104",
      chinese: "为吸引年轻消费者，该品牌推出采用可持续材料制作的限量版街头服饰系列",
      english_full: "To appeal to younger consumers, the brand launched a limited-edition streetwear collection crafted from sustainable materials.",
      words: [
        { word: "To" }, { word: "appeal" }, { word: "to" }, { word: "younger" }, { word: "consumers", punctuation: "," }, { word: "the" }, { word: "brand" }, { word: "launched" }, { word: "a" }, { word: "limited-edition" }, { word: "streetwear" }, { word: "collection" }, { word: "crafted" }, { word: "from" }, { word: "sustainable" }, { word: "materials", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "目的状语", phonetic: "/tuː/ /əˈpiːl/ /tuː/ /ˈjʌŋər/ /kənˈsjuːmərz/", translation: "为吸引年轻消费者",
          subComponents: [{ startIndex: 0, words: [{ word: "To" }, { word: "appeal" }, { word: "to" }, { word: "younger" }, { word: "consumers", punctuation: "," }] }]
        },
        {
          start: 5, end: 6, label: "主语", phonetic: "/ðə/ /brænd/", translation: "该品牌",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "brand" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/lɔːntʃt/", translation: "推出",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 8, end: 15, label: "宾语", phonetic: "/ə/ /ˈlɪmɪtɪd-ɪˈdɪʃən/ /ˈstriːtˌwɛər/ /kəˈlɛkʃən/ /ˈkræftɪd/ /frɒm/ /səˈsteɪnəbəl/ /məˈtɪəriəlz/", translation: "采用可持续材料制作的限量版街头服饰系列",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "limited-edition" }, { word: "streetwear" }, { word: "collection" }, { word: "crafted" }, { word: "from" }, { word: "sustainable" }, { word: "materials", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "时尚零售", text: "limited-edition (限量版), streetwear (街头服饰), sustainable materials (可持续材料), appeal to (吸引)" }
      ]
    },
    {
      id: "q_shopping_s105",
      chinese: "橱窗展示被精心设计成充满节日气息的冬季仙境，以激发顾客的购买欲望",
      english_full: "The window displays were meticulously designed as a festive winter wonderland to stimulate purchasing desire among customers.",
      words: [
        { word: "The" }, { word: "window" }, { word: "displays" }, { word: "were" }, { word: "meticulously" }, { word: "designed" }, { word: "as" }, { word: "a" }, { word: "festive" }, { word: "winter" }, { word: "wonderland" }, { word: "to" }, { word: "stimulate" }, { word: "purchasing" }, { word: "desire" }, { word: "among" }, { word: "customers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈwɪndoʊ/ /dɪˈspleɪz/", translation: "橱窗展示",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "window" }, { word: "displays" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(被动)", phonetic: "/wɜːr/ /mɪˈtɪkjʊləsli/ /dɪˈzaɪnd/", translation: "被精心设计",
          subComponents: [{ startIndex: 0, words: [{ word: "were" }, { word: "meticulously" }, { word: "designed" }] }]
        },
        {
          start: 6, end: 10, label: "主语补足语", phonetic: "/æz/ /ə/ /ˈfɛstɪv/ /ˈwɪntər/ /ˈwʌndərlænd/", translation: "成充满节日气息的冬季仙境",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "a" }, { word: "festive" }, { word: "winter" }, { word: "wonderland" }] }]
        },
        {
          start: 11, end: 16, label: "目的状语", phonetic: "/tuː/ /ˈstɪmjʊleɪt/ /ˈpɜːrtʃəsɪŋ/ /dɪˈzaɪər/ /əˈmʌŋ/ /ˈkʌstəmərz/", translation: "以激发顾客的购买欲望",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "stimulate" }, { word: "purchasing" }, { word: "desire" }, { word: "among" }, { word: "customers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "视觉营销", text: "window display (橱窗展示), meticulously (精心地), stimulate purchasing desire (激发购买欲望)" }
      ]
    },
    {
      id: "q_shopping_s106",
      chinese: "越来越多的零售商采用无接触支付系统，以提升结账效率并降低现金处理成本",
      english_full: "An increasing number of retailers are adopting contactless payment systems to improve checkout efficiency and reduce cash-handling costs.",
      words: [
        { word: "An" }, { word: "increasing" }, { word: "number" }, { word: "of" }, { word: "retailers" }, { word: "are" }, { word: "adopting" }, { word: "contactless" }, { word: "payment" }, { word: "systems" }, { word: "to" }, { word: "improve" }, { word: "checkout" }, { word: "efficiency" }, { word: "and" }, { word: "reduce" }, { word: "cash-handling" }, { word: "costs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/æn/ /ɪnˈkriːsɪŋ/ /ˈnʌmbər/ /ɒv/ /ˈriːteɪlərz/", translation: "越来越多的零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "An" }, { word: "increasing" }, { word: "number" }, { word: "of" }, { word: "retailers" }] }]
        },
        {
          start: 5, end: 6, label: "谓语(现进)", phonetic: "/ɑːr/ /əˈdɒptɪŋ/", translation: "正在采用",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "adopting" }] }]
        },
        {
          start: 7, end: 10, label: "宾语", phonetic: "/ˈkɒntæktləs/ /ˈpeɪmənt/ /ˈsɪstəmz/", translation: "无接触支付系统",
          subComponents: [{ startIndex: 0, words: [{ word: "contactless" }, { word: "payment" }, { word: "systems" }, { word: "to" }] }]
        },
        {
          start: 11, end: 17, label: "目的状语", phonetic: "/tuː/ /ɪmˈpruːv/ /ˈtʃɛkaʊt/ /ɪˈfɪʃənsi/ /ænd/ /rɪˈdjuːs/ /kæʃ-ˈhændlɪŋ/ /kɒsts/", translation: "以提升结账效率并降低现金处理成本",
          subComponents: [{ startIndex: 0, words: [{ word: "improve" }, { word: "checkout" }, { word: "efficiency" }, { word: "and" }, { word: "reduce" }, { word: "cash-handling" }, { word: "costs", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "支付科技", text: "contactless payment (无接触支付), checkout efficiency (结账效率), cash-handling costs (现金处理成本)" }
      ]
    },
    {
      id: "q_shopping_s107",
      chinese: "库存损耗持续侵蚀零售利润，促使企业部署更先进的防损监控技术",
      english_full: "Inventory shrinkage continues to erode retail margins, prompting companies to deploy more advanced loss-prevention surveillance technology.",
      words: [
        { word: "Inventory" }, { word: "shrinkage" }, { word: "continues" }, { word: "to" }, { word: "erode" }, { word: "retail" }, { word: "margins", punctuation: "," }, { word: "prompting" }, { word: "companies" }, { word: "to" }, { word: "deploy" }, { word: "more" }, { word: "advanced" }, { word: "loss-prevention" }, { word: "surveillance" }, { word: "technology", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈɪnvəntɔːri/ /ˈʃrɪŋkɪdʒ/", translation: "库存损耗",
          subComponents: [{ startIndex: 0, words: [{ word: "Inventory" }, { word: "shrinkage" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/kənˈtɪnjuːz/ /tuː/ /ɪˈroʊd/", translation: "持续侵蚀",
          subComponents: [{ startIndex: 0, words: [{ word: "continues" }, { word: "to" }, { word: "erode" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈriːteɪl/ /ˈmɑːrdʒɪnz/", translation: "零售利润",
          subComponents: [{ startIndex: 0, words: [{ word: "retail" }, { word: "margins", punctuation: "," }] }]
        },
        {
          start: 7, end: 15, label: "结果状语(分词)", phonetic: "/ˈprɒmptɪŋ/ /ˈkʌmpəniz/ /tuː/ /dɪˈplɔɪ/ /mɔːr/ /ədˈvɑːnst/ /lɒs-prɪˈvɛnʃən/ /sərˈveɪləns/ /tɛkˈnɒlədʒi/", translation: "促使企业部署更先进的防损监控技术",
          subComponents: [{ startIndex: 0, words: [{ word: "prompting" }, { word: "companies" }, { word: "to" }, { word: "deploy" }, { word: "more" }, { word: "advanced" }, { word: "loss-prevention" }, { word: "surveillance" }, { word: "technology", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "库存管理", text: "inventory shrinkage (库存损耗), retail margins (零售利润), loss-prevention (防损)" }
      ]
    },
    {
      id: "q_shopping_s108",
      chinese: "高端百货公司为贵宾客户提供一对一私人导购服务，以打造高度个性化的购物体验",
      english_full: "The luxury department store provides one-on-one personal shopping services for VIP clients to create a highly personalized retail experience.",
      words: [
        { word: "The" }, { word: "luxury" }, { word: "department" }, { word: "store" }, { word: "provides" }, { word: "one-on-one" }, { word: "personal" }, { word: "shopping" }, { word: "services" }, { word: "for" }, { word: "VIP" }, { word: "clients" }, { word: "to" }, { word: "create" }, { word: "a" }, { word: "highly" }, { word: "personalized" }, { word: "retail" }, { word: "experience", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈlʌgʒəri/ /dɪˈpɑːrtmənt/ /stɔːr/", translation: "高端百货公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "luxury" }, { word: "department" }, { word: "store" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/wʌn-ɒn-wʌn/ /ˈpɜːrsənəl/ /ˈʃɒpɪŋ/ /ˈsɜːrvɪsɪz/", translation: "一对一私人导购服务",
          subComponents: [{ startIndex: 0, words: [{ word: "one-on-one" }, { word: "personal" }, { word: "shopping" }, { word: "services" }, { word: "for" }] }]
        },
        {
          start: 10, end: 12, label: "对象状语", phonetic: "/fɔːr/ /viː-aɪ-piː/ /ˈklaɪənts/", translation: "为贵宾客户",
          subComponents: [{ startIndex: 0, words: [{ word: "VIP" }, { word: "clients" }, { word: "to" }] }]
        },
        {
          start: 13, end: 18, label: "目的状语", phonetic: "/tuː/ /kriˈeɪt/ /ə/ /ˈhaɪli/ /ˌpɜːrsənəˈlaɪzd/ /ˈriːteɪl/ /ɪkˈspɪəriəns/", translation: "以打造高度个性化的购物体验",
          subComponents: [{ startIndex: 0, words: [{ word: "create" }, { word: "a" }, { word: "highly" }, { word: "personalized" }, { word: "retail" }, { word: "experience", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "高端服务", text: "personal shopping (私人导购), VIP client (贵宾客户), personalized experience (个性化体验)" }
      ]
    },
    {
      id: "q_shopping_s109",
      chinese: "动态定价算法使零售商能够根据实时需求波动迅速调整商品价格",
      english_full: "Dynamic pricing algorithms enable retailers to adjust product prices swiftly in response to real-time demand fluctuations.",
      words: [
        { word: "Dynamic" }, { word: "pricing" }, { word: "algorithms" }, { word: "enable" }, { word: "retailers" }, { word: "to" }, { word: "adjust" }, { word: "product" }, { word: "prices" }, { word: "swiftly" }, { word: "in" }, { word: "response" }, { word: "to" }, { word: "real-time" }, { word: "demand" }, { word: "fluctuations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/daɪˈnæmɪk/ /ˈpraɪsɪŋ/ /ˈælgəˌrɪðəmz/", translation: "动态定价算法",
          subComponents: [{ startIndex: 0, words: [{ word: "Dynamic" }, { word: "pricing" }, { word: "algorithms" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }, { word: "to" }] }]
        },
        {
          start: 6, end: 9, label: "宾补(不定式)", phonetic: "/tuː/ /əˈdʒʌst/ /ˈprɒdʌkt/ /ˈpraɪsɪz/", translation: "迅速调整商品价格",
          subComponents: [{ startIndex: 0, words: [{ word: "adjust" }, { word: "product" }, { word: "prices" }, { word: "swiftly" }] }]
        },
        {
          start: 10, end: 15, label: "方式状语", phonetic: "/ˈswɪftli/ /ɪn/ /rɪˈspɒns/ /tuː/ /riːl-taɪm/ /dɪˈmænd/ /ˌflʌktʃuˈeɪʃənz/", translation: "以响应实时需求波动",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "response" }, { word: "to" }, { word: "real-time" }, { word: "demand" }, { word: "fluctuations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定价策略", text: "dynamic pricing (动态定价), real-time demand (实时需求), adjust prices (调整价格)" }
      ]
    },
    {
      id: "q_shopping_s110",
      chinese: "快闪店策略使新兴品牌能够在不签订长期租约的情况下测试市场反应",
      english_full: "The pop-up store strategy allows emerging brands to test market response without committing to long-term lease agreements.",
      words: [
        { word: "The" }, { word: "pop-up" }, { word: "store" }, { word: "strategy" }, { word: "allows" }, { word: "emerging" }, { word: "brands" }, { word: "to" }, { word: "test" }, { word: "market" }, { word: "response" }, { word: "without" }, { word: "committing" }, { word: "to" }, { word: "long-term" }, { word: "lease" }, { word: "agreements", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /pɒp-ʌp/ /stɔːr/ /ˈstrætədʒi/", translation: "快闪店策略",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pop-up" }, { word: "store" }, { word: "strategy" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈlaʊz/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "allows" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ɪˈmɜːrdʒɪŋ/ /brændz/", translation: "新兴品牌",
          subComponents: [{ startIndex: 0, words: [{ word: "emerging" }, { word: "brands" }] }]
        },
        {
          start: 7, end: 10, label: "宾补", phonetic: "/tuː/ /tɛst/ /ˈmɑːrkɪt/ /rɪˈspɒns/", translation: "测试市场反应",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "test" }, { word: "market" }, { word: "response" }] }]
        },
        {
          start: 11, end: 16, label: "方式状语", phonetic: "/wɪˈðaʊt/ /kəˈmɪtɪŋ/ /tuː/ /lɒŋ-tɜːrm/ /liːs/ /əˈgriːmənts/", translation: "在不签订长期租约的情况下",
          subComponents: [{ startIndex: 0, words: [{ word: "without" }, { word: "committing" }, { word: "to" }, { word: "long-term" }, { word: "lease" }, { word: "agreements", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "快闪零售", text: "pop-up store (快闪店), market response (市场反应), lease agreement (租约)" }
      ]
    },
    {
      id: "q_shopping_s111",
      chinese: "该忠诚度计划根据累计消费金额将会员划分为不同等级，并提供差异化权益",
      english_full: "The loyalty program tiers members based on cumulative spending and offers differentiated benefits at each level.",
      words: [
        { word: "The" }, { word: "loyalty" }, { word: "program" }, { word: "tiers" }, { word: "members" }, { word: "based" }, { word: "on" }, { word: "cumulative" }, { word: "spending" }, { word: "and" }, { word: "offers" }, { word: "differentiated" }, { word: "benefits" }, { word: "at" }, { word: "each" }, { word: "level", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈlɔɪəlti/ /ˈproʊgræm/", translation: "该忠诚度计划",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "loyalty" }, { word: "program" }] }]
        },
        {
          start: 3, end: 3, label: "谓语1", phonetic: "/ˈtaɪərz/", translation: "将……分级",
          subComponents: [{ startIndex: 0, words: [{ word: "tiers" }] }]
        },
        {
          start: 4, end: 4, label: "宾语1", phonetic: "/ˈmɛmbərz/", translation: "会员",
          subComponents: [{ startIndex: 0, words: [{ word: "members" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/beɪst/ /ɒn/ /ˈkjuːmjʊlətɪv/ /ˈspɛndɪŋ/", translation: "根据累计消费金额",
          subComponents: [{ startIndex: 0, words: [{ word: "based" }, { word: "on" }, { word: "cumulative" }, { word: "spending" }] }]
        },
        {
          start: 9, end: 9, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 10, end: 10, label: "谓语2", phonetic: "/ˈɔːfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 11, end: 12, label: "宾语2", phonetic: "/ˌdɪfəˈrɛnʃieɪtɪd/ /ˈbɛnɪfɪts/", translation: "差异化权益",
          subComponents: [{ startIndex: 0, words: [{ word: "differentiated" }, { word: "benefits" }] }]
        },
        {
          start: 13, end: 15, label: "地点状语", phonetic: "/æt/ /iːtʃ/ /ˈlɛvəl/", translation: "在每个等级",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "each" }, { word: "level", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "会员营销", text: "loyalty program (忠诚度计划), cumulative spending (累计消费), differentiated benefits (差异化权益)" }
      ]
    },
    {
      id: "q_shopping_s112",
      chinese: "专业的视觉陈列团队通过战略性商品摆放来提升高毛利品类的销售转化率",
      english_full: "The professional visual merchandising team boosts conversion rates for high-margin categories through strategic product placement.",
      words: [
        { word: "The" }, { word: "professional" }, { word: "visual" }, { word: "merchandising" }, { word: "team" }, { word: "boosts" }, { word: "conversion" }, { word: "rates" }, { word: "for" }, { word: "high-margin" }, { word: "categories" }, { word: "through" }, { word: "strategic" }, { word: "product" }, { word: "placement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /prəˈfɛʃənəl/ /ˈvɪʒuəl/ /ˈmɜːrtʃənˌdaɪzɪŋ/ /tiːm/", translation: "专业视觉陈列团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "professional" }, { word: "visual" }, { word: "merchandising" }, { word: "team" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/buːsts/", translation: "提升",
          subComponents: [{ startIndex: 0, words: [{ word: "boosts" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/kənˈvɜːrʃən/ /reɪts/", translation: "转化率",
          subComponents: [{ startIndex: 0, words: [{ word: "conversion" }, { word: "rates" }] }]
        },
        {
          start: 8, end: 10, label: "对象状语", phonetic: "/fɔːr/ /haɪ-ˈmɑːrdʒɪn/ /ˌkætəˈgɔːriz/", translation: "针对高毛利品类",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "high-margin" }, { word: "categories" }] }]
        },
        {
          start: 11, end: 14, label: "方式状语", phonetic: "/θruː/ /strəˈtiːdʒɪk/ /ˈprɒdʌkt/ /ˈpleɪsmənt/", translation: "通过战略性商品摆放",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "strategic" }, { word: "product" }, { word: "placement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "视觉陈列", text: "visual merchandising (视觉陈列), conversion rate (转化率), high-margin (高毛利的)" }
      ]
    },
    {
      id: "q_shopping_s113",
      chinese: "全球供应链中断迫使零售商重新评估其对单一采购来源的过度依赖",
      english_full: "Global supply chain disruptions have forced retailers to reassess their excessive reliance on single-source procurement.",
      words: [
        { word: "Global" }, { word: "supply" }, { word: "chain" }, { word: "disruptions" }, { word: "have" }, { word: "forced" }, { word: "retailers" }, { word: "to" }, { word: "reassess" }, { word: "their" }, { word: "excessive" }, { word: "reliance" }, { word: "on" }, { word: "single-source" }, { word: "procurement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈgləʊbəl/ /səˈplaɪ/ /tʃeɪn/ /dɪsˈrʌpʃənz/", translation: "全球供应链中断",
          subComponents: [{ startIndex: 0, words: [{ word: "Global" }, { word: "supply" }, { word: "chain" }, { word: "disruptions" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /fɔːrst/", translation: "已经迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "forced" }] }]
        },
        {
          start: 6, end: 6, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }] }]
        },
        {
          start: 7, end: 14, label: "宾补", phonetic: "/tuː/ /ˌriːəˈsɛs/ /ðɛər/ /ɪkˈsɛsɪv/ /rɪˈlaɪəns/ /ɒn/ /ˈsɪŋgəl-sɔːrs/ /prəˈkjuərəmənt/", translation: "重新评估对单一采购来源的过度依赖",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "reassess" }, { word: "their" }, { word: "excessive" }, { word: "reliance" }, { word: "on" }, { word: "single-source" }, { word: "procurement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "供应链", text: "supply chain disruption (供应链中断), single-source procurement (单一来源采购), reassess (重新评估)" }
      ]
    },
    {
      id: "q_shopping_s114",
      chinese: "客户流失分析揭示，冗长的退换货流程是削弱品牌忠诚度的主要因素之一",
      english_full: "Customer churn analysis reveals that lengthy return-and-exchange procedures are a major factor undermining brand loyalty.",
      words: [
        { word: "Customer" }, { word: "churn" }, { word: "analysis" }, { word: "reveals" }, { word: "that" }, { word: "lengthy" }, { word: "return-and-exchange" }, { word: "procedures" }, { word: "are" }, { word: "a" }, { word: "major" }, { word: "factor" }, { word: "undermining" }, { word: "brand" }, { word: "loyalty", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkʌstəmər/ /tʃɜːrn/ /əˈnælɪsɪs/", translation: "客户流失分析",
          subComponents: [{ startIndex: 0, words: [{ word: "Customer" }, { word: "churn" }, { word: "analysis" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈviːlz/", translation: "揭示",
          subComponents: [{ startIndex: 0, words: [{ word: "reveals" }] }]
        },
        {
          start: 4, end: 9, label: "宾语从句(主语)", phonetic: "/ðæt/ /ˈlɛŋθi/ /rɪˈtɜːrn-ænd-ɪksˈtʃeɪndʒ/ /prəˈsiːdʒərz/ /ɑːr/", translation: "冗长的退换货流程是",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "lengthy" }, { word: "return-and-exchange" }, { word: "procedures" }, { word: "are" }, { word: "a" }] }]
        },
        {
          start: 10, end: 12, label: "宾语从句(表语)", phonetic: "/ə/ /ˈmeɪdʒər/ /ˈfæktər/", translation: "主要因素之一",
          subComponents: [{ startIndex: 0, words: [{ word: "major" }, { word: "factor" }, { word: "undermining" }] }]
        },
        {
          start: 13, end: 14, label: "定语(分词)", phonetic: "/ˌʌndərˈmaɪnɪŋ/ /brænd/ /ˈlɔɪəlti/", translation: "削弱品牌忠诚度的",
          subComponents: [{ startIndex: 0, words: [{ word: "brand" }, { word: "loyalty", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客户分析", text: "customer churn (客户流失), return-and-exchange (退换货), brand loyalty (品牌忠诚度)" }
      ]
    },
    {
      id: "q_shopping_s115",
      chinese: "国际机场免税店为过境旅客提供大幅折扣的奢侈品牌商品，且免除进口关税",
      english_full: "Airport duty-free shops offer transit passengers heavily discounted luxury brand merchandise exempt from import duties.",
      words: [
        { word: "Airport" }, { word: "duty-free" }, { word: "shops" }, { word: "offer" }, { word: "transit" }, { word: "passengers" }, { word: "heavily" }, { word: "discounted" }, { word: "luxury" }, { word: "brand" }, { word: "merchandise" }, { word: "exempt" }, { word: "from" }, { word: "import" }, { word: "duties", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈeəpɔːrt/ /ˈdjuːti-friː/ /ʃɒps/", translation: "机场免税店",
          subComponents: [{ startIndex: 0, words: [{ word: "Airport" }, { word: "duty-free" }, { word: "shops" }, { word: "offer" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɔːfər/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "transit" }] }]
        },
        {
          start: 5, end: 6, label: "间接宾语", phonetic: "/ˈtrænzɪt/ /ˈpæsɪndʒərz/", translation: "过境旅客",
          subComponents: [{ startIndex: 0, words: [{ word: "passengers" }, { word: "heavily" }] }]
        },
        {
          start: 7, end: 12, label: "直接宾语", phonetic: "/ˈhɛvɪli/ /ˈdɪskaʊntɪd/ /ˈlʌgʒəri/ /brænd/ /ˈmɜːrtʃənˌdaɪz/", translation: "大幅折扣的奢侈品牌商品",
          subComponents: [{ startIndex: 0, words: [{ word: "discounted" }, { word: "luxury" }, { word: "brand" }, { word: "merchandise" }, { word: "exempt" }, { word: "from" }] }]
        },
        {
          start: 13, end: 14, label: "定语(形容词)", phonetic: "/ɪgˈzɛmpt/ /frɒm/ /ˈɪmpɔːrt/ /ˈdjuːtiz/", translation: "免除进口关税的",
          subComponents: [{ startIndex: 0, words: [{ word: "import" }, { word: "duties", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "免税零售", text: "duty-free shop (免税店), transit passenger (过境旅客), import duty (进口关税)" }
      ]
    },
    {
      id: "q_shopping_s116",
      chinese: "限时闪购活动通过制造稀缺感与紧迫感来加速消费者的购买决策",
      english_full: "Flash sale campaigns accelerate consumer purchase decisions by creating a sense of scarcity and urgency.",
      words: [
        { word: "Flash" }, { word: "sale" }, { word: "campaigns" }, { word: "accelerate" }, { word: "consumer" }, { word: "purchase" }, { word: "decisions" }, { word: "by" }, { word: "creating" }, { word: "a" }, { word: "sense" }, { word: "of" }, { word: "scarcity" }, { word: "and" }, { word: "urgency", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/flæʃ/ /seɪl/ /kæmˈpeɪnz/", translation: "限时闪购活动",
          subComponents: [{ startIndex: 0, words: [{ word: "Flash" }, { word: "sale" }, { word: "campaigns" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈæksəleɪt/", translation: "加速",
          subComponents: [{ startIndex: 0, words: [{ word: "accelerate" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/kənˈsjuːmər/ /ˈpɜːrtʃəs/ /dɪˈsɪʒənz/", translation: "消费者购买决策",
          subComponents: [{ startIndex: 0, words: [{ word: "consumer" }, { word: "purchase" }, { word: "decisions" }] }]
        },
        {
          start: 7, end: 14, label: "方式状语", phonetic: "/baɪ/ /kriˈeɪtɪŋ/ /ə/ /sɛns/ /ɒv/ /ˈskɛəsɪti/ /ænd/ /ˈɜːrdʒənsi/", translation: "通过制造稀缺感与紧迫感",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "creating" }, { word: "a" }, { word: "sense" }, { word: "of" }, { word: "scarcity" }, { word: "and" }, { word: "urgency", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "促销策略", text: "flash sale (限时闪购), sense of scarcity (稀缺感), purchase decision (购买决策)" }
      ]
    },
    {
      id: "q_shopping_s117",
      chinese: "零售分析仪表盘使区域经理能够实时追踪各门店的销售业绩与库存周转率",
      english_full: "The retail analytics dashboard enables regional managers to track store sales performance and inventory turnover rates in real time.",
      words: [
        { word: "The" }, { word: "retail" }, { word: "analytics" }, { word: "dashboard" }, { word: "enables" }, { word: "regional" }, { word: "managers" }, { word: "to" }, { word: "track" }, { word: "store" }, { word: "sales" }, { word: "performance" }, { word: "and" }, { word: "inventory" }, { word: "turnover" }, { word: "rates" }, { word: "in" }, { word: "real" }, { word: "time", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈriːteɪl/ /əˈnælɪtɪks/ /ˈdæʃbɔːrd/", translation: "零售分析仪表盘",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "retail" }, { word: "analytics" }, { word: "dashboard" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪˈneɪbəlz/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enables" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈriːdʒənəl/ /ˈmænɪdʒərz/", translation: "区域经理",
          subComponents: [{ startIndex: 0, words: [{ word: "regional" }, { word: "managers" }] }]
        },
        {
          start: 7, end: 18, label: "宾补", phonetic: "/tuː/ /træk/ /stɔːr/ /seɪlz/ /pərˈfɔːrməns/ /ænd/ /ˈɪnvəntɔːri/ /ˈtɜːnəʊvər/ /reɪts/ /ɪn/ /riːl/ /taɪm/", translation: "实时追踪各门店销售业绩与库存周转率",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "track" }, { word: "store" }, { word: "sales" }, { word: "performance" }, { word: "and" }, { word: "inventory" }, { word: "turnover" }, { word: "rates" }, { word: "in" }, { word: "real" }, { word: "time", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "数据分析", text: "retail analytics (零售分析), inventory turnover (库存周转), in real time (实时)" }
      ]
    },
    {
      id: "q_shopping_s118",
      chinese: "先进的电子商品监控标签显著降低了大型超市中的入店盗窃发生率",
      english_full: "Advanced electronic article surveillance tags have significantly reduced in-store theft rates at large supermarkets.",
      words: [
        { word: "Advanced" }, { word: "electronic" }, { word: "article" }, { word: "surveillance" }, { word: "tags" }, { word: "have" }, { word: "significantly" }, { word: "reduced" }, { word: "in-store" }, { word: "theft" }, { word: "rates" }, { word: "at" }, { word: "large" }, { word: "supermarkets", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ədˈvɑːnst/ /ɪlɛkˈtrɒnɪk/ /ˈɑːrtɪkəl/ /sərˈveɪləns/ /tægz/", translation: "先进电子商品监控标签",
          subComponents: [{ startIndex: 0, words: [{ word: "Advanced" }, { word: "electronic" }, { word: "article" }, { word: "surveillance" }, { word: "tags" }] }]
        },
        {
          start: 5, end: 7, label: "谓语(现完)", phonetic: "/hæv/ /sɪgˈnɪfɪkəntli/ /rɪˈdjuːst/", translation: "已显著降低",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "reduced" }] }]
        },
        {
          start: 8, end: 11, label: "宾语", phonetic: "/ɪn-stɔːr/ /θɛft/ /reɪts/", translation: "入店盗窃发生率",
          subComponents: [{ startIndex: 0, words: [{ word: "in-store" }, { word: "theft" }, { word: "rates" }, { word: "at" }] }]
        },
        {
          start: 12, end: 13, label: "地点状语", phonetic: "/æt/ /lɑːrdʒ/ /ˈsuːpərmɑːrkɪts/", translation: "在大型超市中",
          subComponents: [{ startIndex: 0, words: [{ word: "large" }, { word: "supermarkets", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "防损技术", text: "electronic article surveillance (电子商品监控), in-store theft (入店盗窃), significantly reduce (显著降低)" }
      ]
    },
    {
      id: "q_shopping_s119",
      chinese: "路边取货服务在疫情期间迅速普及，并已成为全渠道零售的核心组成部分",
      english_full: "Curbside pickup services proliferated rapidly during the pandemic and have become a core component of omnichannel retail.",
      words: [
        { word: "Curbside" }, { word: "pickup" }, { word: "services" }, { word: "proliferated" }, { word: "rapidly" }, { word: "during" }, { word: "the" }, { word: "pandemic" }, { word: "and" }, { word: "have" }, { word: "become" }, { word: "a" }, { word: "core" }, { word: "component" }, { word: "of" }, { word: "omnichannel" }, { word: "retail", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkɜːrbsaɪd/ /ˈpɪkʌp/ /ˈsɜːrvɪsɪz/", translation: "路边取货服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Curbside" }, { word: "pickup" }, { word: "services" }] }]
        },
        {
          start: 3, end: 3, label: "谓语1", phonetic: "/prəˈlɪfəreɪtɪd/", translation: "迅速普及",
          subComponents: [{ startIndex: 0, words: [{ word: "proliferated" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈræpɪdli/", translation: "迅速地",
          subComponents: [{ startIndex: 0, words: [{ word: "rapidly" }] }]
        },
        {
          start: 5, end: 7, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ðə/ /pænˈdɛmɪk/", translation: "在疫情期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "the" }, { word: "pandemic" }] }]
        },
        {
          start: 8, end: 8, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 9, end: 10, label: "谓语2(现完)", phonetic: "/hæv/ /bɪˈkʌm/", translation: "已成为",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "become" }] }]
        },
        {
          start: 11, end: 16, label: "宾语", phonetic: "/ə/ /kɔːr/ /kəmˈpoʊnənt/ /ɒv/ /ˌɒmniˈtʃænəl/ /ˈriːteɪl/", translation: "全渠道零售的核心组成部分",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "core" }, { word: "component" }, { word: "of" }, { word: "omnichannel" }, { word: "retail", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "全渠道服务", text: "curbside pickup (路边取货), proliferate (迅速普及), omnichannel retail (全渠道零售)" }
      ]
    },
    {
      id: "q_shopping_s120",
      chinese: "品牌大使计划在社交媒体平台上有效扩大了新产品的曝光度与口碑传播",
      english_full: "The brand ambassador program has effectively expanded product exposure and word-of-mouth promotion on social media platforms.",
      words: [
        { word: "The" }, { word: "brand" }, { word: "ambassador" }, { word: "program" }, { word: "has" }, { word: "effectively" }, { word: "expanded" }, { word: "product" }, { word: "exposure" }, { word: "and" }, { word: "word-of-mouth" }, { word: "promotion" }, { word: "on" }, { word: "social" }, { word: "media" }, { word: "platforms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /brænd/ /æmˈbæsədər/ /ˈproʊgræm/", translation: "品牌大使计划",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "brand" }, { word: "ambassador" }, { word: "program" }] }]
        },
        {
          start: 4, end: 6, label: "谓语(现完)", phonetic: "/hæz/ /ɪˈfɛktɪvli/ /ɪkˈspændɪd/", translation: "已有效扩大",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "effectively" }, { word: "expanded" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ˈprɒdʌkt/ /ɪkˈspoʊʒər/", translation: "产品曝光度",
          subComponents: [{ startIndex: 0, words: [{ word: "product" }, { word: "exposure" }] }]
        },
        {
          start: 9, end: 9, label: "连词", phonetic: "/ænd/", translation: "与",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 10, end: 12, label: "宾语(并列)", phonetic: "/wɜːrd-ɒv-ˈmaʊθ/ /prəˈmoʊʃən/", translation: "口碑传播",
          subComponents: [{ startIndex: 0, words: [{ word: "word-of-mouth" }, { word: "promotion" }, { word: "on" }] }]
        },
        {
          start: 13, end: 15, label: "地点状语", phonetic: "/ɒn/ /ˈsoʊʃəl/ /ˈmiːdiə/ /ˈplætfɔːrmz/", translation: "在社交媒体平台上",
          subComponents: [{ startIndex: 0, words: [{ word: "social" }, { word: "media" }, { word: "platforms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "品牌营销", text: "brand ambassador (品牌大使), word-of-mouth promotion (口碑传播), product exposure (产品曝光)" }
      ]
    },
    {
      id: "q_shopping_s121",
      chinese: "季末降价策略旨在在下一季新品上架前清空过季库存并回收营运资金",
      english_full: "The end-of-season markdown strategy aims to clear out-of-season inventory and recover working capital before new collections arrive.",
      words: [
        { word: "The" }, { word: "end-of-season" }, { word: "markdown" }, { word: "strategy" }, { word: "aims" }, { word: "to" }, { word: "clear" }, { word: "out-of-season" }, { word: "inventory" }, { word: "and" }, { word: "recover" }, { word: "working" }, { word: "capital" }, { word: "before" }, { word: "new" }, { word: "collections" }, { word: "arrive", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ɛnd-ɒv-ˈsiːzən/ /ˈmɑːrkdɑʊn/ /ˈstrætədʒi/", translation: "季末降价策略",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "end-of-season" }, { word: "markdown" }, { word: "strategy" }, { word: "aims" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/eɪmz/", translation: "旨在",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }] }]
        },
        {
          start: 6, end: 13, label: "宾语(不定式)", phonetic: "/tuː/ /klɪər/ /aʊt-ɒv-ˈsiːzən/ /ˈɪnvəntɔːri/ /ænd/ /rɪˈkʌvər/ /ˈwɜːrkɪŋ/ /ˈkæpɪtəl/", translation: "清空过季库存并回收营运资金",
          subComponents: [{ startIndex: 0, words: [{ word: "clear" }, { word: "out-of-season" }, { word: "inventory" }, { word: "and" }, { word: "recover" }, { word: "working" }, { word: "capital" }, { word: "before" }] }]
        },
        {
          start: 14, end: 16, label: "时间状语", phonetic: "/bɪˈfɔːr/ /njuː/ /kəˈlɛkʃənz/ /əˈraɪv/", translation: "在新系列到货之前",
          subComponents: [{ startIndex: 0, words: [{ word: "new" }, { word: "collections" }, { word: "arrive", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "库存策略", text: "markdown strategy (降价策略), out-of-season inventory (过季库存), working capital (营运资金)" }
      ]
    },
    {
      id: "q_shopping_s122",
      chinese: "商场部署的客流传感器为租户提供了关于消费者动线与高峰时段的精准数据",
      english_full: "Foot traffic sensors deployed in the mall provide tenants with precise data on consumer movement patterns and peak hours.",
      words: [
        { word: "Foot" }, { word: "traffic" }, { word: "sensors" }, { word: "deployed" }, { word: "in" }, { word: "the" }, { word: "mall" }, { word: "provide" }, { word: "tenants" }, { word: "with" }, { word: "precise" }, { word: "data" }, { word: "on" }, { word: "consumer" }, { word: "movement" }, { word: "patterns" }, { word: "and" }, { word: "peak" }, { word: "hours", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/fʊt/ /ˈtræfɪk/ /ˈsɛnsərz/", translation: "客流传感器",
          subComponents: [{ startIndex: 0, words: [{ word: "Foot" }, { word: "traffic" }, { word: "sensors" }] }]
        },
        {
          start: 3, end: 6, label: "定语(分词)", phonetic: "/dɪˈplɔɪd/ /ɪn/ /ðə/ /mɔːl/", translation: "部署在商场中的",
          subComponents: [{ startIndex: 0, words: [{ word: "deployed" }, { word: "in" }, { word: "the" }, { word: "mall" }] }]
        },
        {
          start: 7, end: 7, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 8, end: 8, label: "间接宾语", phonetic: "/ˈtɛnənts/", translation: "租户",
          subComponents: [{ startIndex: 0, words: [{ word: "tenants" }] }]
        },
        {
          start: 9, end: 18, label: "直接宾语", phonetic: "/wɪð/ /prɪˈsaɪs/ /ˈdeɪtə/ /ɒn/ /kənˈsjuːmər/ /ˈmuːvmənt/ /ˈpætərnz/ /ænd/ /piːk/ /aʊərz/", translation: "关于消费者动线与高峰时段的精准数据",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "precise" }, { word: "data" }, { word: "on" }, { word: "consumer" }, { word: "movement" }, { word: "patterns" }, { word: "and" }, { word: "peak" }, { word: "hours", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商场数据", text: "foot traffic (客流量), movement pattern (动线), peak hours (高峰时段)" }
      ]
    },
    {
      id: "q_shopping_s123",
      chinese: "跨境电商平台使中小零售商能够以较低成本进入国际市场并拓展海外客户群",
      english_full: "Cross-border e-commerce platforms enable small and medium retailers to enter international markets at lower cost and expand overseas customer bases.",
      words: [
        { word: "Cross-border" }, { word: "e-commerce" }, { word: "platforms" }, { word: "enable" }, { word: "small" }, { word: "and" }, { word: "medium" }, { word: "retailers" }, { word: "to" }, { word: "enter" }, { word: "international" }, { word: "markets" }, { word: "at" }, { word: "lower" }, { word: "cost" }, { word: "and" }, { word: "expand" }, { word: "overseas" }, { word: "customer" }, { word: "bases", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/krɒs-ˈbɔːrdər/ /ˈiːˌkɒmɜːrs/ /ˈplætfɔːrmz/", translation: "跨境电商平台",
          subComponents: [{ startIndex: 0, words: [{ word: "Cross-border" }, { word: "e-commerce" }, { word: "platforms" }, { word: "enable" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "small" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/smɔːl/ /ænd/ /ˈmiːdiəm/ /ˈriːteɪlərz/", translation: "中小零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "medium" }, { word: "retailers" }, { word: "to" }] }]
        },
        {
          start: 9, end: 19, label: "宾补", phonetic: "/tuː/ /ˈɛntər/ /ˌɪntərˈnæʃənəl/ /ˈmɑːrkɪts/ /æt/ /ˈloʊər/ /kɒst/ /ænd/ /ɪkˈspænd/ /ˌoʊvərˈsiːz/ /ˈkʌstəmər/ /ˈbeɪsɪz/", translation: "以较低成本进入国际市场并拓展海外客户群",
          subComponents: [{ startIndex: 0, words: [{ word: "enter" }, { word: "international" }, { word: "markets" }, { word: "at" }, { word: "lower" }, { word: "cost" }, { word: "and" }, { word: "expand" }, { word: "overseas" }, { word: "customer" }, { word: "bases", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "跨境电商", text: "cross-border e-commerce (跨境电商), overseas customer base (海外客户群), enter international markets (进入国际市场)" }
      ]
    },
    {
      id: "q_shopping_s124",
      chinese: "自有品牌扩张战略帮助大型连锁超市提升利润率并增强对供应链的控制力",
      english_full: "Private label expansion strategies help large supermarket chains improve profit margins and strengthen control over supply chains.",
      words: [
        { word: "Private" }, { word: "label" }, { word: "expansion" }, { word: "strategies" }, { word: "help" }, { word: "large" }, { word: "supermarket" }, { word: "chains" }, { word: "improve" }, { word: "profit" }, { word: "margins" }, { word: "and" }, { word: "strengthen" }, { word: "control" }, { word: "over" }, { word: "supply" }, { word: "chains", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈpraɪvət/ /ˈleɪbəl/ /ɪkˈspænʃən/ /ˈstrætədʒiz/", translation: "自有品牌扩张战略",
          subComponents: [{ startIndex: 0, words: [{ word: "Private" }, { word: "label" }, { word: "expansion" }, { word: "strategies" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hɛlp/", translation: "帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "help" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/lɑːrdʒ/ /ˈsuːpərmɑːrkɪt/ /tʃeɪnz/", translation: "大型连锁超市",
          subComponents: [{ startIndex: 0, words: [{ word: "large" }, { word: "supermarket" }, { word: "chains" }, { word: "improve" }] }]
        },
        {
          start: 9, end: 16, label: "宾补", phonetic: "/ɪmˈpruːv/ /ˈprɒfɪt/ /ˈmɑːrdʒɪnz/ /ænd/ /ˈstrɛŋθən/ /kənˈtroʊl/ /ˈoʊvər/ /səˈplaɪ/ /tʃeɪnz/", translation: "提升利润率并增强对供应链的控制力",
          subComponents: [{ startIndex: 0, words: [{ word: "profit" }, { word: "margins" }, { word: "and" }, { word: "strengthen" }, { word: "control" }, { word: "over" }, { word: "supply" }, { word: "chains", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "自有品牌", text: "private label (自有品牌), profit margin (利润率), supply chain control (供应链控制)" }
      ]
    },
    {
      id: "q_shopping_s125",
      chinese: "店内体验设计日益强调鼓励顾客驻足探索的互动区域",
      english_full: "In-store experience design increasingly emphasizes interactive zones that encourage customers to linger and explore.",
      words: [
        { word: "In-store" }, { word: "experience" }, { word: "design" }, { word: "increasingly" }, { word: "emphasizes" }, { word: "interactive" }, { word: "zones" }, { word: "that" }, { word: "encourage" }, { word: "customers" }, { word: "to" }, { word: "linger" }, { word: "and" }, { word: "explore", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ɪn-stɔːr/ /ɪkˈspɪəriəns/ /dɪˈzaɪn/", translation: "店内体验设计",
          subComponents: [{ startIndex: 0, words: [{ word: "In-store" }, { word: "experience" }, { word: "design" }, { word: "increasingly" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ɪnˈkriːsɪŋli/", translation: "日益",
          subComponents: [{ startIndex: 0, words: [{ word: "emphasizes" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈɛmfəsaɪzɪz/", translation: "强调",
          subComponents: [{ startIndex: 0, words: [{ word: "interactive" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˌɪntərˈæktɪv/ /zoʊnz/", translation: "互动区域",
          subComponents: [{ startIndex: 0, words: [{ word: "zones" }, { word: "that" }] }]
        },
        {
          start: 8, end: 13, label: "定语从句", phonetic: "/ðæt/ /ɪnˈkɜːrɪdʒ/ /ˈkʌstəmərz/ /tuː/ /ˈlɪŋgər/ /ænd/ /ɪkˈsplɔːr/", translation: "鼓励顾客驻足探索的",
          subComponents: [{ startIndex: 0, words: [{ word: "encourage" }, { word: "customers" }, { word: "to" }, { word: "linger" }, { word: "and" }, { word: "explore", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "体验零售", text: "in-store experience (店内体验), interactive zone (互动区域), linger (驻足)" }
      ]
    },
    {
      id: "q_shopping_s126",
      chinese: "先进的退货欺诈检测系统利用机器学习算法识别异常退换货模式",
      english_full: "Advanced return fraud detection systems use machine learning algorithms to identify anomalous return-and-exchange patterns.",
      words: [
        { word: "Advanced" }, { word: "return" }, { word: "fraud" }, { word: "detection" }, { word: "systems" }, { word: "use" }, { word: "machine" }, { word: "learning" }, { word: "algorithms" }, { word: "to" }, { word: "identify" }, { word: "anomalous" }, { word: "return-and-exchange" }, { word: "patterns", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ədˈvɑːnst/ /rɪˈtɜːrn/ /frɔːd/ /dɪˈtɛkʃən/ /ˈsɪstəmz/", translation: "退货欺诈检测系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Advanced" }, { word: "return" }, { word: "fraud" }, { word: "detection" }, { word: "systems" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/juːz/", translation: "利用",
          subComponents: [{ startIndex: 0, words: [{ word: "use" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/məˈʃiːn/ /ˈlɜːrnɪŋ/ /ˈælgəˌrɪðəmz/", translation: "机器学习算法",
          subComponents: [{ startIndex: 0, words: [{ word: "machine" }, { word: "learning" }, { word: "algorithms" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /aɪˈdɛntɪfaɪ/ /əˈnɒmələs/ /rɪˈtɜːrn-ænd-ɪksˈtʃeɪndʒ/ /ˈpætərnz/", translation: "识别异常退换货模式",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "identify" }, { word: "anomalous" }, { word: "return-and-exchange" }, { word: "patterns", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "反欺诈", text: "return fraud (退货欺诈), machine learning (机器学习), anomalous pattern (异常模式)" }
      ]
    },
    {
      id: "q_shopping_s127",
      chinese: "订阅盒商业模式通过定期配送精选商品来培养稳定的经常性收入流",
      english_full: "The subscription box business model cultivates stable recurring revenue streams through regular delivery of curated merchandise.",
      words: [
        { word: "The" }, { word: "subscription" }, { word: "box" }, { word: "business" }, { word: "model" }, { word: "cultivates" }, { word: "stable" }, { word: "recurring" }, { word: "revenue" }, { word: "streams" }, { word: "through" }, { word: "regular" }, { word: "delivery" }, { word: "of" }, { word: "curated" }, { word: "merchandise", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /səbˈskrɪpʃən/ /bɒks/ /ˈbɪznəs/ /ˈmɒdəl/", translation: "订阅盒商业模式",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "subscription" }, { word: "box" }, { word: "business" }, { word: "model" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈkʌltɪveɪts/", translation: "培养",
          subComponents: [{ startIndex: 0, words: [{ word: "cultivates" }] }]
        },
        {
          start: 6, end: 9, label: "宾语", phonetic: "/ˈsteɪbəl/ /rɪˈkɜːrɪŋ/ /ˈrɛvənjuː/ /striːmz/", translation: "稳定的经常性收入流",
          subComponents: [{ startIndex: 0, words: [{ word: "stable" }, { word: "recurring" }, { word: "revenue" }, { word: "streams" }] }]
        },
        {
          start: 10, end: 15, label: "方式状语", phonetic: "/θruː/ /ˈrɛgjʊlər/ /dɪˈlɪvəri/ /ɒv/ /kjʊˈreɪtɪd/ /ˈmɜːrtʃənˌdaɪz/", translation: "通过定期配送精选商品",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "regular" }, { word: "delivery" }, { word: "of" }, { word: "curated" }, { word: "merchandise", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "订阅经济", text: "subscription box (订阅盒), recurring revenue (经常性收入), curated merchandise (精选商品)" }
      ]
    },
    {
      id: "q_shopping_s128",
      chinese: "零售媒体网络使品牌商能够在大型零售商的数字平台上精准投放定向广告",
      english_full: "Retail media networks allow brands to place targeted advertisements precisely on major retailers digital platforms.",
      words: [
        { word: "Retail" }, { word: "media" }, { word: "networks" }, { word: "allow" }, { word: "brands" }, { word: "to" }, { word: "place" }, { word: "targeted" }, { word: "advertisements" }, { word: "precisely" }, { word: "on" }, { word: "major" }, { word: "retailers" }, { word: "digital" }, { word: "platforms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈriːteɪl/ /ˈmiːdiə/ /ˈnɛtwɜːrks/", translation: "零售媒体网络",
          subComponents: [{ startIndex: 0, words: [{ word: "Retail" }, { word: "media" }, { word: "networks" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/əˈlaʊ/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "allow" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/brændz/", translation: "品牌商",
          subComponents: [{ startIndex: 0, words: [{ word: "brands" }] }]
        },
        {
          start: 5, end: 14, label: "宾补", phonetic: "/tuː/ /pleɪs/ /ˈtɑːrgɪtɪd/ /ˌædvərˈtaɪzmənts/ /ˈprɛsɪsli/ /ɒn/ /ˈmeɪdʒər/ /ˈriːteɪlərz/ /ˈdɪdʒɪtəl/ /ˈplætfɔːrmz/", translation: "在大型零售商数字平台上精准投放定向广告",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "place" }, { word: "targeted" }, { word: "advertisements" }, { word: "precisely" }, { word: "on" }, { word: "major" }, { word: "retailers" }, { word: "digital" }, { word: "platforms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售广告", text: "retail media network (零售媒体网络), targeted advertisement (定向广告), digital platform (数字平台)" }
      ]
    },
    {
      id: "q_shopping_s129",
      chinese: "消费者情绪追踪工具帮助零售商预判需求变化并优化库存采购决策",
      english_full: "Consumer sentiment tracking tools help retailers anticipate demand shifts and optimize inventory procurement decisions.",
      words: [
        { word: "Consumer" }, { word: "sentiment" }, { word: "tracking" }, { word: "tools" }, { word: "help" }, { word: "retailers" }, { word: "anticipate" }, { word: "demand" }, { word: "shifts" }, { word: "and" }, { word: "optimize" }, { word: "inventory" }, { word: "procurement" }, { word: "decisions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/kənˈsjuːmər/ /ˈsɛntɪmənt/ /ˈtrækɪŋ/ /tuːlz/", translation: "消费者情绪追踪工具",
          subComponents: [{ startIndex: 0, words: [{ word: "Consumer" }, { word: "sentiment" }, { word: "tracking" }, { word: "tools" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hɛlp/", translation: "帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "help" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }] }]
        },
        {
          start: 6, end: 13, label: "宾补", phonetic: "/æntɪˈsɪpeɪt/ /dɪˈmænd/ /ʃɪfts/ /ænd/ /ˈɒptɪmaɪz/ /ˈɪnvəntɔːri/ /prəˈkjuərəmənt/ /dɪˈsɪʒənz/", translation: "预判需求变化并优化库存采购决策",
          subComponents: [{ startIndex: 0, words: [{ word: "anticipate" }, { word: "demand" }, { word: "shifts" }, { word: "and" }, { word: "optimize" }, { word: "inventory" }, { word: "procurement" }, { word: "decisions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "消费者洞察", text: "consumer sentiment (消费者情绪), anticipate demand (预判需求), procurement decision (采购决策)" }
      ]
    },
    {
      id: "q_shopping_s130",
      chinese: "主力租户谈判结果往往决定购物中心的整体定位与招商吸引力",
      english_full: "Anchor tenant negotiation outcomes often determine a shopping malls overall positioning and tenant attraction appeal.",
      words: [
        { word: "Anchor" }, { word: "tenant" }, { word: "negotiation" }, { word: "outcomes" }, { word: "often" }, { word: "determine" }, { word: "a" }, { word: "shopping" }, { word: "malls" }, { word: "overall" }, { word: "positioning" }, { word: "and" }, { word: "tenant" }, { word: "attraction" }, { word: "appeal", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈæŋkər/ /ˈtɛnənt/ /ˌnɛgəʊʃiˈeɪʃən/ /ˈaʊtkʌmz/", translation: "主力租户谈判结果",
          subComponents: [{ startIndex: 0, words: [{ word: "Anchor" }, { word: "tenant" }, { word: "negotiation" }, { word: "outcomes" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈɒfən/", translation: "往往",
          subComponents: [{ startIndex: 0, words: [{ word: "often" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/dɪˈtɜːrmɪn/", translation: "决定",
          subComponents: [{ startIndex: 0, words: [{ word: "determine" }] }]
        },
        {
          start: 6, end: 14, label: "宾语", phonetic: "/ə/ /ˈʃɒpɪŋ/ /mɔːlz/ /ˌoʊvərˈɔːl/ /pəˈzɪʃənɪŋ/ /ænd/ /ˈtɛnənt/ /əˈtriːt/", translation: "购物中心的整体定位与招商吸引力",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "shopping" }, { word: "malls" }, { word: "overall" }, { word: "positioning" }, { word: "and" }, { word: "tenant" }, { word: "attraction" }, { word: "appeal", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商业地产", text: "anchor tenant (主力租户), overall positioning (整体定位), tenant attraction (招商吸引力)" }
      ]
    },
    {
      id: "q_shopping_s131",
      chinese: "当日达配送承诺已成为电商平台在激烈竞争中获取客户的关键差异化优势",
      english_full: "Same-day delivery promises have become a key differentiating advantage for e-commerce platforms competing fiercely for customers.",
      words: [
        { word: "Same-day" }, { word: "delivery" }, { word: "promises" }, { word: "have" }, { word: "become" }, { word: "a" }, { word: "key" }, { word: "differentiating" }, { word: "advantage" }, { word: "for" }, { word: "e-commerce" }, { word: "platforms" }, { word: "competing" }, { word: "fiercely" }, { word: "for" }, { word: "customers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/seɪm-deɪ/ /dɪˈlɪvəri/ /ˈprɒmɪsɪz/", translation: "当日达配送承诺",
          subComponents: [{ startIndex: 0, words: [{ word: "Same-day" }, { word: "delivery" }, { word: "promises" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /bɪˈkʌm/", translation: "已成为",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "become" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ə/ /kiː/ /ˌdɪfəˈrɛnʃieɪtɪŋ/ /ədˈvɑːntɪdʒ/", translation: "关键差异化优势",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "key" }, { word: "differentiating" }, { word: "advantage" }, { word: "for" }] }]
        },
        {
          start: 10, end: 15, label: "定语(介词短语+分词)", phonetic: "/fɔːr/ /ˈiːˌkɒmɜːrs/ /ˈplætfɔːrmz/ /kəmˈpiːtɪŋ/ /ˈfɪəsli/ /fɔːr/ /ˈkʌstəmərz/", translation: "电商平台在激烈竞争中获取客户的",
          subComponents: [{ startIndex: 0, words: [{ word: "e-commerce" }, { word: "platforms" }, { word: "competing" }, { word: "fiercely" }, { word: "for" }, { word: "customers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "物流竞争", text: "same-day delivery (当日达), differentiating advantage (差异化优势), e-commerce platform (电商平台)" }
      ]
    },
    {
      id: "q_shopping_s132",
      chinese: "礼品卡未使用余额为零售商贡献了大量几乎无成本的附带收入",
      english_full: "Unused gift card balances contribute substantial virtually cost-free ancillary revenue to retailers.",
      words: [
        { word: "Unused" }, { word: "gift" }, { word: "card" }, { word: "balances" }, { word: "contribute" }, { word: "substantial" }, { word: "virtually" }, { word: "cost-free" }, { word: "ancillary" }, { word: "revenue" }, { word: "to" }, { word: "retailers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ʌnˈjuːzd/ /gɪft/ /kɑːrd/ /ˈbælənsɪz/", translation: "礼品卡未使用余额",
          subComponents: [{ startIndex: 0, words: [{ word: "Unused" }, { word: "gift" }, { word: "card" }, { word: "balances" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kənˈtrɪbjuːt/", translation: "贡献",
          subComponents: [{ startIndex: 0, words: [{ word: "contribute" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/səbˈstænʃəl/ /ˈvɜːrtʃuəli/ /kɒst-friː/ /ænˈsɪləri/ /ˈrɛvənjuː/", translation: "大量几乎无成本的附带收入",
          subComponents: [{ startIndex: 0, words: [{ word: "substantial" }, { word: "virtually" }, { word: "cost-free" }, { word: "ancillary" }, { word: "revenue" }] }]
        },
        {
          start: 10, end: 11, label: "对象状语", phonetic: "/tuː/ /ˈriːteɪlərz/", translation: "给零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "retailers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "礼品卡经济", text: "gift card balance (礼品卡余额), ancillary revenue (附带收入), cost-free (无成本的)" }
      ]
    },
    {
      id: "q_shopping_s133",
      chinese: "以旧换新计划鼓励消费者升级电子产品，同时促进品牌的循环经济举措",
      english_full: "Trade-in programs encourage consumers to upgrade electronics while promoting the brands circular economy initiatives.",
      words: [
        { word: "Trade-in" }, { word: "programs" }, { word: "encourage" }, { word: "consumers" }, { word: "to" }, { word: "upgrade" }, { word: "electronics" }, { word: "while" }, { word: "promoting" }, { word: "the" }, { word: "brands" }, { word: "circular" }, { word: "economy" }, { word: "initiatives", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/treɪd-ɪn/ /ˈproʊgræmz/", translation: "以旧换新计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Trade-in" }, { word: "programs" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪnˈkɜːrɪdʒ/", translation: "鼓励",
          subComponents: [{ startIndex: 0, words: [{ word: "encourage" }] }]
        },
        {
          start: 3, end: 3, label: "宾语", phonetic: "/kənˈsjuːmərz/", translation: "消费者",
          subComponents: [{ startIndex: 0, words: [{ word: "consumers" }] }]
        },
        {
          start: 4, end: 6, label: "宾补", phonetic: "/tuː/ /ˈʌpgreɪd/ /ɪˌlɛkˈtrɒnɪks/", translation: "升级电子产品",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "upgrade" }, { word: "electronics" }] }]
        },
        {
          start: 7, end: 13, label: "让步状语", phonetic: "/waɪl/ /prəˈmoʊtɪŋ/ /ðə/ /brændz/ /ˈsɜːrkjələr/ /ˈiːkənəmi/ /ɪˈnɪʃətɪvz/", translation: "同时促进品牌循环经济举措",
          subComponents: [{ startIndex: 0, words: [{ word: "while" }, { word: "promoting" }, { word: "the" }, { word: "brands" }, { word: "circular" }, { word: "economy" }, { word: "initiatives", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "以旧换新", text: "trade-in program (以旧换新计划), circular economy (循环经济), upgrade electronics (升级电子产品)" }
      ]
    },
    {
      id: "q_shopping_s134",
      chinese: "比价政策要求零售商在竞争对手提供更低标价时匹配相应的价格",
      english_full: "Price matching policies require retailers to match corresponding prices when competitors offer lower listed prices.",
      words: [
        { word: "Price" }, { word: "matching" }, { word: "policies" }, { word: "require" }, { word: "retailers" }, { word: "to" }, { word: "match" }, { word: "corresponding" }, { word: "prices" }, { word: "when" }, { word: "competitors" }, { word: "offer" }, { word: "lower" }, { word: "listed" }, { word: "prices", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/praɪs/ /ˈmætʃɪŋ/ /ˈpɒlɪsiz/", translation: "比价政策",
          subComponents: [{ startIndex: 0, words: [{ word: "Price" }, { word: "matching" }, { word: "policies" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }] }]
        },
        {
          start: 5, end: 14, label: "宾补", phonetic: "/tuː/ /mætʃ/ /ˌkɒrɪˈspɒndɪŋ/ /ˈpraɪsɪz/ /wɛn/ /kəmˈpɛtɪtərz/ /ˈɔːfər/ /ˈloʊər/ /ˈlɪstɪd/ /ˈpraɪsɪz/", translation: "在竞争对手提供更低标价时匹配相应价格",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "match" }, { word: "corresponding" }, { word: "prices" }, { word: "when" }, { word: "competitors" }, { word: "offer" }, { word: "lower" }, { word: "listed" }, { word: "prices", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "价格政策", text: "price matching (比价), listed price (标价), competitor (竞争对手)" }
      ]
    },
    {
      id: "q_shopping_s135",
      chinese: "购物中心空置率上升迫使业主重新调整租金结构并提供更灵活的租约条款",
      english_full: "Rising mall vacancy rates are forcing property owners to restructure rental agreements and offer more flexible lease terms.",
      words: [
        { word: "Rising" }, { word: "mall" }, { word: "vacancy" }, { word: "rates" }, { word: "are" }, { word: "forcing" }, { word: "property" }, { word: "owners" }, { word: "to" }, { word: "restructure" }, { word: "rental" }, { word: "agreements" }, { word: "and" }, { word: "offer" }, { word: "more" }, { word: "flexible" }, { word: "lease" }, { word: "terms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈraɪzɪŋ/ /mɔːl/ /ˈveɪkənsi/ /reɪts/", translation: "购物中心空置率上升",
          subComponents: [{ startIndex: 0, words: [{ word: "Rising" }, { word: "mall" }, { word: "vacancy" }, { word: "rates" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现进)", phonetic: "/ɑːr/ /ˈfɔːrsɪŋ/", translation: "正在迫使",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "forcing" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ˈprɒpərti/ /ˈoʊnərz/", translation: "业主",
          subComponents: [{ startIndex: 0, words: [{ word: "property" }, { word: "owners" }] }]
        },
        {
          start: 8, end: 17, label: "宾补", phonetic: "/tuː/ /riːˈstrʌktʃər/ /ˈrɛntəl/ /əˈgriːmənts/ /ænd/ /ˈɔːfər/ /mɔːr/ /ˈflɛksəbəl/ /liːs/ /tɜːrmz/", translation: "重新调整租金结构并提供更灵活租约条款",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "restructure" }, { word: "rental" }, { word: "agreements" }, { word: "and" }, { word: "offer" }, { word: "more" }, { word: "flexible" }, { word: "lease" }, { word: "terms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "商业地产", text: "vacancy rate (空置率), lease terms (租约条款), restructure (重新调整)" }
      ]
    },
    {
      id: "q_shopping_s136",
      chinese: "与网红的合作推广活动显著提升了该品牌在目标受众中的认知度与购买意向",
      english_full: "Influencer collaboration campaigns have significantly boosted the brands awareness and purchase intent among target audiences.",
      words: [
        { word: "Influencer" }, { word: "collaboration" }, { word: "campaigns" }, { word: "have" }, { word: "significantly" }, { word: "boosted" }, { word: "the" }, { word: "brands" }, { word: "awareness" }, { word: "and" }, { word: "purchase" }, { word: "intent" }, { word: "among" }, { word: "target" }, { word: "audiences", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈɪnfluənsər/ /ˌkɒləbəˈreɪʃən/ /kæmˈpeɪnz/", translation: "网红合作推广活动",
          subComponents: [{ startIndex: 0, words: [{ word: "Influencer" }, { word: "collaboration" }, { word: "campaigns" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完)", phonetic: "/hæv/ /sɪgˈnɪfɪkəntli/ /ˈbuːstɪd/", translation: "已显著提升",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "boosted" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ðə/ /brændz/ /əˈwɛrnəs/", translation: "该品牌认知度",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "brands" }, { word: "awareness" }] }]
        },
        {
          start: 9, end: 9, label: "连词", phonetic: "/ænd/", translation: "与",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 10, end: 11, label: "宾语(并列)", phonetic: "/ˈpɜːrtʃəs/ /ɪnˈtɛnt/", translation: "购买意向",
          subComponents: [{ startIndex: 0, words: [{ word: "purchase" }, { word: "intent" }] }]
        },
        {
          start: 12, end: 14, label: "范围状语", phonetic: "/əˈmʌŋ/ /ˈtɑːrgɪt/ /ˈɔːdiənsɪz/", translation: "在目标受众中",
          subComponents: [{ startIndex: 0, words: [{ word: "among" }, { word: "target" }, { word: "audiences", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "网红营销", text: "influencer collaboration (网红合作), purchase intent (购买意向), target audience (目标受众)" }
      ]
    },
    {
      id: "q_shopping_s137",
      chinese: "射频识别库存追踪技术大幅提高了仓储盘点的准确性与效率",
      english_full: "RFID inventory tracking technology has dramatically improved the accuracy and efficiency of warehouse stocktaking.",
      words: [
        { word: "RFID" }, { word: "inventory" }, { word: "tracking" }, { word: "technology" }, { word: "has" }, { word: "dramatically" }, { word: "improved" }, { word: "the" }, { word: "accuracy" }, { word: "and" }, { word: "efficiency" }, { word: "of" }, { word: "warehouse" }, { word: "stocktaking", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ɑːr-ɛf-aɪ-diː/ /ˈɪnvəntɔːri/ /ˈtrækɪŋ/ /tɛkˈnɒlədʒi/", translation: "射频识别库存追踪技术",
          subComponents: [{ startIndex: 0, words: [{ word: "RFID" }, { word: "inventory" }, { word: "tracking" }, { word: "technology" }] }]
        },
        {
          start: 4, end: 6, label: "谓语(现完)", phonetic: "/hæz/ /drəˈmætɪkli/ /ɪmˈpruːvd/", translation: "已大幅改善",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "dramatically" }, { word: "improved" }] }]
        },
        {
          start: 7, end: 10, label: "宾语", phonetic: "/ði/ /ˈækjərəsi/ /ænd/ /ɪˈfɪʃənsi/", translation: "准确性与效率",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "accuracy" }, { word: "and" }, { word: "efficiency" }] }]
        },
        {
          start: 11, end: 13, label: "定语", phonetic: "/ɒv/ /ˈweəhaʊs/ /ˈstɒkˌteɪkɪŋ/", translation: "仓储盘点的",
          subComponents: [{ startIndex: 0, words: [{ word: "of" }, { word: "warehouse" }, { word: "stocktaking", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "库存技术", text: "RFID (射频识别), stocktaking (盘点), warehouse (仓储)" }
      ]
    },
    {
      id: "q_shopping_s138",
      chinese: "客户终身价值分析使零售商能够更精准地分配营销预算并提升投资回报率",
      english_full: "Customer lifetime value analysis enables retailers to allocate marketing budgets more precisely and improve return on investment.",
      words: [
        { word: "Customer" }, { word: "lifetime" }, { word: "value" }, { word: "analysis" }, { word: "enables" }, { word: "retailers" }, { word: "to" }, { word: "allocate" }, { word: "marketing" }, { word: "budgets" }, { word: "more" }, { word: "precisely" }, { word: "and" }, { word: "improve" }, { word: "return" }, { word: "on" }, { word: "investment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈkʌstəmər/ /ˈlaɪftaɪm/ /ˈvæljuː/ /əˈnælɪsɪs/", translation: "客户终身价值分析",
          subComponents: [{ startIndex: 0, words: [{ word: "Customer" }, { word: "lifetime" }, { word: "value" }, { word: "analysis" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪˈneɪbəlz/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enables" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }] }]
        },
        {
          start: 6, end: 16, label: "宾补", phonetic: "/tuː/ /ˈæləkeɪt/ /ˈmɑːrkɪtɪŋ/ /ˈbʌdʒɪts/ /mɔːr/ /prɪˈsaɪsli/ /ænd/ /ɪmˈpruːv/ /rɪˈtɜːn/ /ɒn/ /ɪnˈvɛstmənt/", translation: "更精准分配营销预算并提升投资回报率",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "allocate" }, { word: "marketing" }, { word: "budgets" }, { word: "more" }, { word: "precisely" }, { word: "and" }, { word: "improve" }, { word: "return" }, { word: "on" }, { word: "investment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "客户价值", text: "customer lifetime value (客户终身价值), return on investment (投资回报率), allocate budget (分配预算)" }
      ]
    },
    {
      id: "q_shopping_s139",
      chinese: "体验式零售概念将购物空间转变为集社交、娱乐与品牌叙事于一体的目的地",
      english_full: "Experiential retail concepts transform shopping spaces into destinations combining social interaction, entertainment, and brand storytelling.",
      words: [
        { word: "Experiential" }, { word: "retail" }, { word: "concepts" }, { word: "transform" }, { word: "shopping" }, { word: "spaces" }, { word: "into" }, { word: "destinations" }, { word: "combining" }, { word: "social" }, { word: "interaction", punctuation: "," }, { word: "entertainment", punctuation: "," }, { word: "and" }, { word: "brand" }, { word: "storytelling", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɪkˈspɪəriənʃəl/ /ˈriːteɪl/ /ˈkɒnsɛpts/", translation: "体验式零售概念",
          subComponents: [{ startIndex: 0, words: [{ word: "Experiential" }, { word: "retail" }, { word: "concepts" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/trænsˈfɔːrm/", translation: "将……转变为",
          subComponents: [{ startIndex: 0, words: [{ word: "transform" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈʃɒpɪŋ/ /ˈspeɪsɪz/", translation: "购物空间",
          subComponents: [{ startIndex: 0, words: [{ word: "shopping" }, { word: "spaces" }] }]
        },
        {
          start: 6, end: 14, label: "宾补", phonetic: "/ˈɪntuː/ /ˌdɛstɪˈneɪʃənz/ /kəmˈbaɪnɪŋ/ /ˈsoʊʃəl/ /ˌɪntərˈækʃən/ /ˌɛntərˈteɪnmənt/ /ænd/ /brænd/ /ˈstɔːritɛlɪŋ/", translation: "集社交、娱乐与品牌叙事于一体的目的地",
          subComponents: [{ startIndex: 0, words: [{ word: "into" }, { word: "destinations" }, { word: "combining" }, { word: "social" }, { word: "interaction", punctuation: "," }, { word: "entertainment", punctuation: "," }, { word: "and" }, { word: "brand" }, { word: "storytelling", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "体验零售", text: "experiential retail (体验式零售), brand storytelling (品牌叙事), destination (目的地)" }
      ]
    },
    {
      id: "q_shopping_s140",
      chinese: "从批发向零售的转型帮助该制造商直接触达终端消费者并获取更高利润",
      english_full: "The wholesale-to-retail pivot has helped the manufacturer reach end consumers directly and capture higher margins.",
      words: [
        { word: "The" }, { word: "wholesale-to-retail" }, { word: "pivot" }, { word: "has" }, { word: "helped" }, { word: "the" }, { word: "manufacturer" }, { word: "reach" }, { word: "end" }, { word: "consumers" }, { word: "directly" }, { word: "and" }, { word: "capture" }, { word: "higher" }, { word: "margins", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈhoʊlseɪl-tuː-ˈriːteɪl/ /ˈpɪvət/", translation: "从批发向零售的转型",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "wholesale-to-retail" }, { word: "pivot" }, { word: "has" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /hɛlpt/", translation: "已帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "helped" }, { word: "the" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/ðə/ /ˌmænjʊˈfæktʃərər/", translation: "该制造商",
          subComponents: [{ startIndex: 0, words: [{ word: "manufacturer" }, { word: "reach" }] }]
        },
        {
          start: 8, end: 14, label: "宾补", phonetic: "/riːtʃ/ /ɛnd/ /kənˈsjuːmərz/ /dɪˈrɛktli/ /ænd/ /ˈkæptʃər/ /ˈhaɪər/ /ˈmɑːrdʒɪnz/", translation: "直接触达终端消费者并获取更高利润",
          subComponents: [{ startIndex: 0, words: [{ word: "end" }, { word: "consumers" }, { word: "directly" }, { word: "and" }, { word: "capture" }, { word: "higher" }, { word: "margins", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "渠道转型", text: "wholesale-to-retail (批发转零售), end consumer (终端消费者), capture margins (获取利润)" }
      ]
    },
    {
      id: "q_shopping_s141",
      chinese: "防伪措施包括全息标签、区块链溯源与专用认证应用程序",
      english_full: "Anti-counterfeit measures include holographic labels, blockchain traceability, and dedicated authentication applications.",
      words: [
        { word: "Anti-counterfeit" }, { word: "measures" }, { word: "include" }, { word: "holographic" }, { word: "labels", punctuation: "," }, { word: "blockchain" }, { word: "traceability", punctuation: "," }, { word: "and" }, { word: "dedicated" }, { word: "authentication" }, { word: "applications", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈænti-ˈkaʊntərfɪt/ /ˈmɛʒərz/", translation: "防伪措施",
          subComponents: [{ startIndex: 0, words: [{ word: "Anti-counterfeit" }, { word: "measures" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪnˈkluːd/", translation: "包括",
          subComponents: [{ startIndex: 0, words: [{ word: "include" }] }]
        },
        {
          start: 3, end: 10, label: "宾语", phonetic: "/ˌhɒləˈgræfɪk/ /ˈleɪbəlz/ /ˌblɒktʃeɪn/ /ˌtreɪsəˈbɪlɪti/ /ænd/ /ˈdɛdɪkeɪtɪd/ /ˌɔːθɛntɪˈkeɪʃən/ /ˌæplɪˈkeɪʃənz/", translation: "全息标签、区块链溯源与专用认证应用程序",
          subComponents: [{ startIndex: 0, words: [{ word: "holographic" }, { word: "labels", punctuation: "," }, { word: "blockchain" }, { word: "traceability", punctuation: "," }, { word: "and" }, { word: "dedicated" }, { word: "authentication" }, { word: "applications", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "品牌保护", text: "anti-counterfeit (防伪), blockchain traceability (区块链溯源), authentication (认证)" }
      ]
    },
    {
      id: "q_shopping_s142",
      chinese: "无收银台商店依靠计算机视觉与传感器融合技术自动完成商品识别与结算",
      english_full: "Checkout-free stores rely on computer vision and sensor fusion technology to automatically identify merchandise and process payments.",
      words: [
        { word: "Checkout-free" }, { word: "stores" }, { word: "rely" }, { word: "on" }, { word: "computer" }, { word: "vision" }, { word: "and" }, { word: "sensor" }, { word: "fusion" }, { word: "technology" }, { word: "to" }, { word: "automatically" }, { word: "identify" }, { word: "merchandise" }, { word: "and" }, { word: "process" }, { word: "payments", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈtʃɛkaʊt-friː/ /stɔːrz/", translation: "无收银台商店",
          subComponents: [{ startIndex: 0, words: [{ word: "Checkout-free" }, { word: "stores" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/rɪˈlaɪ/", translation: "依靠",
          subComponents: [{ startIndex: 0, words: [{ word: "rely" }] }]
        },
        {
          start: 3, end: 9, label: "宾语", phonetic: "/kəmˈpjuːtər/ /ˈvɪʒən/ /ænd/ /ˈsɛnsər/ /ˈfjuːʒən/ /tɛkˈnɒlədʒi/", translation: "计算机视觉与传感器融合技术",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "computer" }, { word: "vision" }, { word: "and" }, { word: "sensor" }, { word: "fusion" }, { word: "technology" }] }]
        },
        {
          start: 10, end: 16, label: "目的状语", phonetic: "/tuː/ /ˌɔːtəˈmætɪkli/ /aɪˈdɛntɪfaɪ/ /ˈmɜːrtʃənˌdaɪz/ /ænd/ /ˈprɒsɛs/ /ˈpeɪmənts/", translation: "自动完成商品识别与结算",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "automatically" }, { word: "identify" }, { word: "merchandise" }, { word: "and" }, { word: "process" }, { word: "payments", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售科技", text: "checkout-free store (无收银台商店), sensor fusion (传感器融合), computer vision (计算机视觉)" }
      ]
    },
    {
      id: "q_shopping_s143",
      chinese: "产品推荐引擎通过分析浏览与购买历史为顾客提供高度个性化的购物建议",
      english_full: "Product recommendation engines provide highly personalized shopping suggestions by analyzing browsing and purchase histories.",
      words: [
        { word: "Product" }, { word: "recommendation" }, { word: "engines" }, { word: "provide" }, { word: "highly" }, { word: "personalized" }, { word: "shopping" }, { word: "suggestions" }, { word: "by" }, { word: "analyzing" }, { word: "browsing" }, { word: "and" }, { word: "purchase" }, { word: "histories", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈprɒdʌkt/ /ˌrɛkəmənˈdeɪʃən/ /ˈɛndʒɪnz/", translation: "产品推荐引擎",
          subComponents: [{ startIndex: 0, words: [{ word: "Product" }, { word: "recommendation" }, { word: "engines" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 4, end: 7, label: "宾语", phonetic: "/ˈhaɪli/ /ˌpɜːrsənəˈlaɪzd/ /ˈʃɒpɪŋ/ /səˈdʒɛstʃənz/", translation: "高度个性化的购物建议",
          subComponents: [{ startIndex: 0, words: [{ word: "highly" }, { word: "personalized" }, { word: "shopping" }, { word: "suggestions" }] }]
        },
        {
          start: 8, end: 13, label: "方式状语", phonetic: "/baɪ/ /ˈænəˌlaɪzɪŋ/ /ˈbraʊzɪŋ/ /ænd/ /ˈpɜːrtʃəs/ /ˈhɪstəriz/", translation: "通过分析浏览与购买历史",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "analyzing" }, { word: "browsing" }, { word: "and" }, { word: "purchase" }, { word: "histories", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "个性化推荐", text: "recommendation engine (推荐引擎), purchase history (购买历史), personalized (个性化的)" }
      ]
    },
    {
      id: "q_shopping_s144",
      chinese: "季节性招聘高峰使大型零售商在假日销售旺季前大幅扩充门店一线员工",
      english_full: "Seasonal hiring surges prompt large retailers to substantially expand frontline store staff before peak holiday sales periods.",
      words: [
        { word: "Seasonal" }, { word: "hiring" }, { word: "surges" }, { word: "prompt" }, { word: "large" }, { word: "retailers" }, { word: "to" }, { word: "substantially" }, { word: "expand" }, { word: "frontline" }, { word: "store" }, { word: "staff" }, { word: "before" }, { word: "peak" }, { word: "holiday" }, { word: "sales" }, { word: "periods", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈsiːzənəl/ /ˈhaɪərɪŋ/ /ˈsɜːrdʒɪz/", translation: "季节性招聘高峰",
          subComponents: [{ startIndex: 0, words: [{ word: "Seasonal" }, { word: "hiring" }, { word: "surges" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prɒmpt/", translation: "促使",
          subComponents: [{ startIndex: 0, words: [{ word: "prompt" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/lɑːrdʒ/ /ˈriːteɪlərz/", translation: "大型零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "large" }, { word: "retailers" }] }]
        },
        {
          start: 6, end: 16, label: "宾补", phonetic: "/tuː/ /səbˈstænʃəli/ /ɪkˈspænd/ /ˈfrʌntlaɪn/ /stɔːr/ /stæf/ /bɪˈfɔːr/ /piːk/ /ˈhɒlədeɪ/ /seɪlz/ /ˈpɪəriədz/", translation: "在假日销售旺季前大幅扩充门店一线员工",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "substantially" }, { word: "expand" }, { word: "frontline" }, { word: "store" }, { word: "staff" }, { word: "before" }, { word: "peak" }, { word: "holiday" }, { word: "sales" }, { word: "periods", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售人力", text: "seasonal hiring (季节性招聘), frontline staff (一线员工), peak sales period (销售旺季)" }
      ]
    },
    {
      id: "q_shopping_s145",
      chinese: "零售租约谈判通常涉及基本租金、营业额分成与租户装修补贴等复杂条款",
      english_full: "Retail lease negotiations typically involve complex terms including base rent, turnover-based revenue sharing, and tenant improvement allowances.",
      words: [
        { word: "Retail" }, { word: "lease" }, { word: "negotiations" }, { word: "typically" }, { word: "involve" }, { word: "complex" }, { word: "terms" }, { word: "including" }, { word: "base" }, { word: "rent", punctuation: "," }, { word: "turnover-based" }, { word: "revenue" }, { word: "sharing", punctuation: "," }, { word: "and" }, { word: "tenant" }, { word: "improvement" }, { word: "allowances", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈriːteɪl/ /liːs/ /ˌnɛgəʊʃiˈeɪʃənz/", translation: "零售租约谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "Retail" }, { word: "lease" }, { word: "negotiations" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪnˈvɒlv/", translation: "涉及",
          subComponents: [{ startIndex: 0, words: [{ word: "involve" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈkɒmplɛks/ /tɜːrmz/", translation: "复杂条款",
          subComponents: [{ startIndex: 0, words: [{ word: "complex" }, { word: "terms" }] }]
        },
        {
          start: 7, end: 16, label: "定语(分词)", phonetic: "/ɪnˈkluːdɪŋ/ /beɪs/ /rɛnt/ /ˈtɜːnəʊvər-beɪst/ /ˈrɛvənjuː/ /ˈʃɛərɪŋ/ /ænd/ /ˈtɛnənt/ /ˌɪmpruːvmənt/ /əˈlaʊənsɪz/", translation: "包括基本租金、营业额分成与租户装修补贴的",
          subComponents: [{ startIndex: 0, words: [{ word: "including" }, { word: "base" }, { word: "rent", punctuation: "," }, { word: "turnover-based" }, { word: "revenue" }, { word: "sharing", punctuation: "," }, { word: "and" }, { word: "tenant" }, { word: "improvement" }, { word: "allowances", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "租约条款", text: "lease negotiation (租约谈判), turnover-based revenue sharing (营业额分成), tenant improvement allowance (装修补贴)" }
      ]
    },
    {
      id: "q_shopping_s146",
      chinese: "消费者保护法规要求零售商在促销广告中清晰披露所有附加费用与限制条件",
      english_full: "Consumer protection regulations require retailers to clearly disclose all additional fees and restrictions in promotional advertising.",
      words: [
        { word: "Consumer" }, { word: "protection" }, { word: "regulations" }, { word: "require" }, { word: "retailers" }, { word: "to" }, { word: "clearly" }, { word: "disclose" }, { word: "all" }, { word: "additional" }, { word: "fees" }, { word: "and" }, { word: "restrictions" }, { word: "in" }, { word: "promotional" }, { word: "advertising", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/kənˈsjuːmər/ /prəˈtɛkʃən/ /ˌrɛgjʊˈleɪʃənz/", translation: "消费者保护法规",
          subComponents: [{ startIndex: 0, words: [{ word: "Consumer" }, { word: "protection" }, { word: "regulations" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 4, end: 4, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }] }]
        },
        {
          start: 5, end: 15, label: "宾补", phonetic: "/tuː/ /ˈklɪərli/ /dɪsˈkləʊz/ /ɔːl/ /əˈdɪʃənəl/ /fiːz/ /ænd/ /rɪˈstrɪkʃənz/ /ɪn/ /prəˈmoʊʃənəl/ /ˈædvərtaɪzɪŋ/", translation: "在促销广告中清晰披露所有附加费用与限制条件",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "clearly" }, { word: "disclose" }, { word: "all" }, { word: "additional" }, { word: "fees" }, { word: "and" }, { word: "restrictions" }, { word: "in" }, { word: "promotional" }, { word: "advertising", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "法规合规", text: "consumer protection (消费者保护), disclose fees (披露费用), promotional advertising (促销广告)" }
      ]
    },
    {
      id: "q_shopping_s147",
      chinese: "批量采购折扣激励企业客户通过集中采购来降低单位商品成本",
      english_full: "Bulk purchasing discounts incentivize corporate clients to reduce per-unit product costs through centralized procurement.",
      words: [
        { word: "Bulk" }, { word: "purchasing" }, { word: "discounts" }, { word: "incentivize" }, { word: "corporate" }, { word: "clients" }, { word: "to" }, { word: "reduce" }, { word: "per-unit" }, { word: "product" }, { word: "costs" }, { word: "through" }, { word: "centralized" }, { word: "procurement", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/bʌlk/ /ˈpɜːrtʃəsɪŋ/ /ˈdɪskaʊnts/", translation: "批量采购折扣",
          subComponents: [{ startIndex: 0, words: [{ word: "Bulk" }, { word: "purchasing" }, { word: "discounts" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈsɛntɪvaɪz/", translation: "激励",
          subComponents: [{ startIndex: 0, words: [{ word: "incentivize" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈkɔːrpərət/ /ˈklaɪənts/", translation: "企业客户",
          subComponents: [{ startIndex: 0, words: [{ word: "corporate" }, { word: "clients" }] }]
        },
        {
          start: 6, end: 13, label: "宾补", phonetic: "/tuː/ /rɪˈdjuːs/ /pər-ˈjuːnɪt/ /ˈprɒdʌkt/ /kɒsts/ /θruː/ /ˈsɛntrəlaɪzd/ /prəˈkjuərəmənt/", translation: "通过集中采购降低单位商品成本",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "reduce" }, { word: "per-unit" }, { word: "product" }, { word: "costs" }, { word: "through" }, { word: "centralized" }, { word: "procurement", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "B2B采购", text: "bulk purchasing (批量采购), per-unit cost (单位成本), centralized procurement (集中采购)" }
      ]
    },
    {
      id: "q_shopping_s148",
      chinese: "数字标牌系统通过动态内容展示有效延长了顾客在关键区域的停留时间",
      english_full: "Digital signage systems effectively extend customer dwell time in key areas through dynamic content displays.",
      words: [
        { word: "Digital" }, { word: "signage" }, { word: "systems" }, { word: "effectively" }, { word: "extend" }, { word: "customer" }, { word: "dwell" }, { word: "time" }, { word: "in" }, { word: "key" }, { word: "areas" }, { word: "through" }, { word: "dynamic" }, { word: "content" }, { word: "displays", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈdɪdʒɪtəl/ /ˈsaɪnɪdʒ/ /ˈsɪstəmz/", translation: "数字标牌系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Digital" }, { word: "signage" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 4, label: "状语+谓语", phonetic: "/ɪˈfɛktɪvli/ /ɪkˈstɛnd/", translation: "有效延长",
          subComponents: [{ startIndex: 0, words: [{ word: "effectively" }, { word: "extend" }] }]
        },
        {
          start: 5, end: 7, label: "宾语", phonetic: "/ˈkʌstəmər/ /dwɛl/ /taɪm/", translation: "顾客停留时间",
          subComponents: [{ startIndex: 0, words: [{ word: "customer" }, { word: "dwell" }, { word: "time" }] }]
        },
        {
          start: 8, end: 10, label: "地点状语", phonetic: "/ɪn/ /kiː/ /ˈeəriəz/", translation: "在关键区域",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "key" }, { word: "areas" }] }]
        },
        {
          start: 11, end: 14, label: "方式状语", phonetic: "/θruː/ /daɪˈnæmɪk/ /ˈkɒntɛnt/ /dɪˈspleɪz/", translation: "通过动态内容展示",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "dynamic" }, { word: "content" }, { word: "displays", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "店内科技", text: "digital signage (数字标牌), dwell time (停留时间), dynamic content (动态内容)" }
      ]
    },
    {
      id: "q_shopping_s149",
      chinese: "品类管理优化了货架空间分配，以最大化各产品类别的销售贡献与利润表现",
      english_full: "Category management optimizes shelf space allocation to maximize sales contribution and profitability across product categories.",
      words: [
        { word: "Category" }, { word: "management" }, { word: "optimizes" }, { word: "shelf" }, { word: "space" }, { word: "allocation" }, { word: "to" }, { word: "maximize" }, { word: "sales" }, { word: "contribution" }, { word: "and" }, { word: "profitability" }, { word: "across" }, { word: "product" }, { word: "categories", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌkætəˈgɔːri/ /ˈmænɪdʒmənt/", translation: "品类管理",
          subComponents: [{ startIndex: 0, words: [{ word: "Category" }, { word: "management" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒptɪmaɪzɪz/", translation: "优化",
          subComponents: [{ startIndex: 0, words: [{ word: "optimizes" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/ʃɛlf/ /speɪs/ /ˌæləˈkeɪʃən/", translation: "货架空间分配",
          subComponents: [{ startIndex: 0, words: [{ word: "shelf" }, { word: "space" }, { word: "allocation" }] }]
        },
        {
          start: 6, end: 14, label: "目的状语", phonetic: "/tuː/ /ˈmæksɪmaɪz/ /seɪlz/ /ˌkɒntrɪˈbjuːʃən/ /ænd/ /ˌprɒfɪtəˈbɪlɪti/ /əˈkrɒs/ /ˈprɒdʌkt/ /ˌkætəˈgɔːriz/", translation: "以最大化各产品类别的销售贡献与利润表现",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "maximize" }, { word: "sales" }, { word: "contribution" }, { word: "and" }, { word: "profitability" }, { word: "across" }, { word: "product" }, { word: "categories", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "品类管理", text: "category management (品类管理), shelf space allocation (货架空间分配), profitability (利润表现)" }
      ]
    },
    {
      id: "q_shopping_s150",
      chinese: "亏损引流定价策略以低于成本的价格出售特定商品，以吸引顾客购买高利润产品",
      english_full: "Loss leader pricing strategies sell specific items below cost to attract customers toward higher-margin products.",
      words: [
        { word: "Loss" }, { word: "leader" }, { word: "pricing" }, { word: "strategies" }, { word: "sell" }, { word: "specific" }, { word: "items" }, { word: "below" }, { word: "cost" }, { word: "to" }, { word: "attract" }, { word: "customers" }, { word: "toward" }, { word: "higher-margin" }, { word: "products", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/lɒs/ /ˈliːdər/ /ˈpraɪsɪŋ/ /ˈstrætədʒiz/", translation: "亏损引流定价策略",
          subComponents: [{ startIndex: 0, words: [{ word: "Loss" }, { word: "leader" }, { word: "pricing" }, { word: "strategies" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/sɛl/", translation: "出售",
          subComponents: [{ startIndex: 0, words: [{ word: "sell" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/spəˈsɪfɪk/ /ˈaɪtəmz/", translation: "特定商品",
          subComponents: [{ startIndex: 0, words: [{ word: "specific" }, { word: "items" }] }]
        },
        {
          start: 7, end: 8, label: "方式状语", phonetic: "/bɪˈloʊ/ /kɒst/", translation: "以低于成本的价格",
          subComponents: [{ startIndex: 0, words: [{ word: "below" }, { word: "cost" }] }]
        },
        {
          start: 9, end: 14, label: "目的状语", phonetic: "/tuː/ /əˈtrækt/ /ˈkʌstəmərz/ /təˈwɔːrd/ /ˈhaɪər-ˈmɑːrdʒɪn/ /ˈprɒdʌkts/", translation: "以吸引顾客购买高利润产品",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "attract" }, { word: "customers" }, { word: "toward" }, { word: "higher-margin" }, { word: "products", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "定价策略", text: "loss leader (亏损引流商品), below cost (低于成本), higher-margin product (高利润产品)" }
      ]
    },
    {
      id: "q_shopping_s151",
      chinese: "零售行业整合趋势加速了中小独立店铺的退出，并重塑了区域市场竞争格局",
      english_full: "Retail consolidation trends are accelerating the exit of small independent stores and reshaping regional market competition.",
      words: [
        { word: "Retail" }, { word: "consolidation" }, { word: "trends" }, { word: "are" }, { word: "accelerating" }, { word: "the" }, { word: "exit" }, { word: "of" }, { word: "small" }, { word: "independent" }, { word: "stores" }, { word: "and" }, { word: "reshaping" }, { word: "regional" }, { word: "market" }, { word: "competition", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈriːteɪl/ /ˌkɒnsəlɪˈdeɪʃən/ /trɛndz/", translation: "零售行业整合趋势",
          subComponents: [{ startIndex: 0, words: [{ word: "Retail" }, { word: "consolidation" }, { word: "trends" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现进)", phonetic: "/ɑːr/ /ˈæksəleɪtɪŋ/", translation: "正在加速",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "accelerating" }] }]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ði/ /ˈɛksɪt/ /ɒv/ /smɔːl/ /ˌɪndɪˈpɛndənt/ /stɔːrz/", translation: "中小独立店铺的退出",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "exit" }, { word: "of" }, { word: "small" }, { word: "independent" }, { word: "stores" }] }]
        },
        {
          start: 11, end: 11, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }] }]
        },
        {
          start: 12, end: 15, label: "谓语2(现分)", phonetic: "/riːˈʃeɪpɪŋ/ /ˈriːdʒənəl/ /ˈmɑːrkɪt/ /ˌkɒmpɪˈtɪʃən/", translation: "重塑区域市场竞争格局",
          subComponents: [{ startIndex: 0, words: [{ word: "reshaping" }, { word: "regional" }, { word: "market" }, { word: "competition", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "行业趋势", text: "retail consolidation (零售整合), independent store (独立店铺), reshape competition (重塑竞争格局)" }
      ]
    },
    {
      id: "q_shopping_s152",
      chinese: "高端礼品包装服务为奢侈品零售商提供了额外的溢价收入来源",
      english_full: "Premium gift wrapping services provide luxury retailers with an additional premium revenue stream.",
      words: [
        { word: "Premium" }, { word: "gift" }, { word: "wrapping" }, { word: "services" }, { word: "provide" }, { word: "luxury" }, { word: "retailers" }, { word: "with" }, { word: "an" }, { word: "additional" }, { word: "premium" }, { word: "revenue" }, { word: "stream", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈpriːmiəm/ /gɪft/ /ˈræpɪŋ/ /ˈsɜːrvɪsɪz/", translation: "高端礼品包装服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Premium" }, { word: "gift" }, { word: "wrapping" }, { word: "services" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 5, end: 6, label: "间接宾语", phonetic: "/ˈlʌgʒəri/ /ˈriːteɪlərz/", translation: "奢侈品零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "luxury" }, { word: "retailers" }] }]
        },
        {
          start: 7, end: 12, label: "直接宾语", phonetic: "/wɪð/ /æn/ /əˈdɪʃənəl/ /ˈpriːmiəm/ /ˈrɛvənjuː/ /striːm/", translation: "额外的溢价收入来源",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "an" }, { word: "additional" }, { word: "premium" }, { word: "revenue" }, { word: "stream", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "增值服务", text: "gift wrapping (礼品包装), premium revenue (溢价收入), luxury retailer (奢侈品零售商)" }
      ]
    },
    {
      id: "q_shopping_s153",
      chinese: "线上下单、门店取货的流程显著缩短了配送时间并降低了最后一公里物流成本",
      english_full: "The click-and-collect workflow significantly reduces delivery time and lowers last-mile logistics costs.",
      words: [
        { word: "The" }, { word: "click-and-collect" }, { word: "workflow" }, { word: "significantly" }, { word: "reduces" }, { word: "delivery" }, { word: "time" }, { word: "and" }, { word: "lowers" }, { word: "last-mile" }, { word: "logistics" }, { word: "costs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /klɪk-ænd-kəˈlɛkt/ /ˈwɜːrkfloʊ/", translation: "线上下单门店取货流程",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "click-and-collect" }, { word: "workflow" }, { word: "significantly" }] }]
        },
        {
          start: 4, end: 5, label: "状语+谓语", phonetic: "/sɪgˈnɪfɪkəntli/ /rɪˈdjuːsɪz/", translation: "显著缩短",
          subComponents: [{ startIndex: 0, words: [{ word: "reduces" }, { word: "delivery" }] }]
        },
        {
          start: 6, end: 7, label: "宾语", phonetic: "/dɪˈlɪvəri/ /taɪm/", translation: "配送时间",
          subComponents: [{ startIndex: 0, words: [{ word: "time" }, { word: "and" }] }]
        },
        {
          start: 8, end: 8, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "lowers" }] }]
        },
        {
          start: 9, end: 11, label: "谓语2", phonetic: "/ˈloʊərz/ /læst-maɪl/ /ləˈdʒɪstɪks/ /kɒsts/", translation: "降低最后一公里物流成本",
          subComponents: [{ startIndex: 0, words: [{ word: "last-mile" }, { word: "logistics" }, { word: "costs", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "全渠道履约", text: "click-and-collect (线上下单门店取货), last-mile logistics (最后一公里物流), delivery time (配送时间)" }
      ]
    },
    {
      id: "q_shopping_s154",
      chinese: "购物篮分析揭示，啤酒与尿布的组合购买模式可优化关联商品的陈列布局",
      english_full: "Market basket analysis reveals that beer-and-diaper purchasing patterns can optimize the display layout of complementary products.",
      words: [
        { word: "Market" }, { word: "basket" }, { word: "analysis" }, { word: "reveals" }, { word: "that" }, { word: "beer-and-diaper" }, { word: "purchasing" }, { word: "patterns" }, { word: "can" }, { word: "optimize" }, { word: "the" }, { word: "display" }, { word: "layout" }, { word: "of" }, { word: "complementary" }, { word: "products", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈmɑːrkɪt/ /ˈbæskɪt/ /əˈnælɪsɪs/", translation: "购物篮分析",
          subComponents: [{ startIndex: 0, words: [{ word: "Market" }, { word: "basket" }, { word: "analysis" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈviːlz/", translation: "揭示",
          subComponents: [{ startIndex: 0, words: [{ word: "reveals" }] }]
        },
        {
          start: 4, end: 9, label: "宾语从句(主语)", phonetic: "/ðæt/ /bɪər-ænd-ˈdaɪpər/ /ˈpɜːrtʃəsɪŋ/ /ˈpætərnz/ /kæn/", translation: "啤酒与尿布组合购买模式可以",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "beer-and-diaper" }, { word: "purchasing" }, { word: "patterns" }, { word: "can" }, { word: "optimize" }] }]
        },
        {
          start: 10, end: 10, label: "宾语从句(谓语)", phonetic: "/ˈɒptɪmaɪz/", translation: "优化",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }] }]
        },
        {
          start: 11, end: 15, label: "宾语从句(宾语)", phonetic: "/ðə/ /dɪˈspleɪ/ /ˈleɪaʊt/ /ɒv/ /ˌkɒmplɪˈmɛntəri/ /ˈprɒdʌkts/", translation: "关联商品的陈列布局",
          subComponents: [{ startIndex: 0, words: [{ word: "display" }, { word: "layout" }, { word: "of" }, { word: "complementary" }, { word: "products", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售分析", text: "market basket analysis (购物篮分析), complementary product (关联商品), display layout (陈列布局)" }
      ]
    },
    {
      id: "q_shopping_s155",
      chinese: "门店布局优化通过引导顾客动线经过高利润区域来提升整体客单价",
      english_full: "Store layout optimization increases overall basket size by guiding customer traffic through high-margin zones.",
      words: [
        { word: "Store" }, { word: "layout" }, { word: "optimization" }, { word: "increases" }, { word: "overall" }, { word: "basket" }, { word: "size" }, { word: "by" }, { word: "guiding" }, { word: "customer" }, { word: "traffic" }, { word: "through" }, { word: "high-margin" }, { word: "zones", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/stɔːr/ /ˈleɪaʊt/ /ˌɒptɪməˈzeɪʃən/", translation: "门店布局优化",
          subComponents: [{ startIndex: 0, words: [{ word: "Store" }, { word: "layout" }, { word: "optimization" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɪnkriːsɪz/", translation: "提升",
          subComponents: [{ startIndex: 0, words: [{ word: "increases" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ˌoʊvərˈɔːl/ /ˈbæskɪt/ /saɪz/", translation: "整体客单价",
          subComponents: [{ startIndex: 0, words: [{ word: "overall" }, { word: "basket" }, { word: "size" }] }]
        },
        {
          start: 7, end: 13, label: "方式状语", phonetic: "/baɪ/ /ˈgaɪdɪŋ/ /ˈkʌstəmər/ /ˈtræfɪk/ /θruː/ /haɪ-ˈmɑːrdʒɪn/ /zoʊnz/", translation: "通过引导顾客动线经过高利润区域",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "guiding" }, { word: "customer" }, { word: "traffic" }, { word: "through" }, { word: "high-margin" }, { word: "zones", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "门店设计", text: "store layout (门店布局), basket size (客单价/购物篮大小), high-margin zone (高利润区域)" }
      ]
    },
    {
      id: "q_shopping_s156",
      chinese: "品牌资产衡量指标帮助总部评估各门店对整体品牌形象的贡献程度",
      english_full: "Brand equity measurement metrics help headquarters assess each stores contribution to the overall brand image.",
      words: [
        { word: "Brand" }, { word: "equity" }, { word: "measurement" }, { word: "metrics" }, { word: "help" }, { word: "headquarters" }, { word: "assess" }, { word: "each" }, { word: "stores" }, { word: "contribution" }, { word: "to" }, { word: "the" }, { word: "overall" }, { word: "brand" }, { word: "image", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/brænd/ /ˈɛkwɪti/ /ˈmɛʒərmənt/ /ˈmɛtrɪks/", translation: "品牌资产衡量指标",
          subComponents: [{ startIndex: 0, words: [{ word: "Brand" }, { word: "equity" }, { word: "measurement" }, { word: "metrics" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hɛlp/", translation: "帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "help" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˌhɛdˈkwɔːrtərz/", translation: "总部",
          subComponents: [{ startIndex: 0, words: [{ word: "headquarters" }] }]
        },
        {
          start: 6, end: 14, label: "宾补", phonetic: "/əˈsɛs/ /iːtʃ/ /stɔːrz/ /ˌkɒntrɪˈbjuːʃən/ /tuː/ /ði/ /ˌoʊvərˈɔːl/ /brænd/ /ˈɪmɪdʒ/", translation: "评估各门店对整体品牌形象的贡献程度",
          subComponents: [{ startIndex: 0, words: [{ word: "assess" }, { word: "each" }, { word: "stores" }, { word: "contribution" }, { word: "to" }, { word: "the" }, { word: "overall" }, { word: "brand" }, { word: "image", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "品牌管理", text: "brand equity (品牌资产), contribution (贡献), brand image (品牌形象)" }
      ]
    },
    {
      id: "q_shopping_s157",
      chinese: "季末清仓大甩卖通常在库存周转压力加剧时以大幅折扣迅速出清滞销商品",
      english_full: "End-of-season clearance sales typically offload slow-moving inventory at steep discounts when turnover pressure intensifies.",
      words: [
        { word: "End-of-season" }, { word: "clearance" }, { word: "sales" }, { word: "typically" }, { word: "offload" }, { word: "slow-moving" }, { word: "inventory" }, { word: "at" }, { word: "steep" }, { word: "discounts" }, { word: "when" }, { word: "turnover" }, { word: "pressure" }, { word: "intensifies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ɛnd-ɒv-ˈsiːzən/ /ˈklɪərəns/ /seɪlz/", translation: "季末清仓大甩卖",
          subComponents: [{ startIndex: 0, words: [{ word: "End-of-season" }, { word: "clearance" }, { word: "sales" }, { word: "typically" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "offload" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈɒfləʊd/", translation: "出清",
          subComponents: [{ startIndex: 0, words: [{ word: "slow-moving" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/sləʊ-ˈmuːvɪŋ/ /ˈɪnvəntɔːri/", translation: "滞销库存",
          subComponents: [{ startIndex: 0, words: [{ word: "inventory" }, { word: "at" }, { word: "steep" }] }]
        },
        {
          start: 9, end: 11, label: "方式状语", phonetic: "/æt/ /stiːp/ /ˈdɪskaʊnts/", translation: "以大幅折扣",
          subComponents: [{ startIndex: 0, words: [{ word: "discounts" }, { word: "when" }, { word: "turnover" }] }]
        },
        {
          start: 12, end: 13, label: "时间状语", phonetic: "/wɛn/ /ˈtɜːnəʊvər/ /ˈprɛʃər/ /ɪnˈtɛnsɪfaɪz/", translation: "在库存周转压力加剧时",
          subComponents: [{ startIndex: 0, words: [{ word: "pressure" }, { word: "intensifies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "清仓促销", text: "clearance sale (清仓甩卖), slow-moving inventory (滞销库存), steep discount (大幅折扣)" }
      ]
    },
    {
      id: "q_shopping_s158",
      chinese: "客户细分模型使营销团队能够针对不同消费群体制定差异化的促销方案",
      english_full: "Customer segmentation models enable marketing teams to develop differentiated promotional strategies for distinct consumer groups.",
      words: [
        { word: "Customer" }, { word: "segmentation" }, { word: "models" }, { word: "enable" }, { word: "marketing" }, { word: "teams" }, { word: "to" }, { word: "develop" }, { word: "differentiated" }, { word: "promotional" }, { word: "strategies" }, { word: "for" }, { word: "distinct" }, { word: "consumer" }, { word: "groups", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkʌstəmər/ /ˌsɛgmənˈteɪʃən/ /ˈmɒdəlz/", translation: "客户细分模型",
          subComponents: [{ startIndex: 0, words: [{ word: "Customer" }, { word: "segmentation" }, { word: "models" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 4, end: 5, label: "宾语", phonetic: "/ˈmɑːrkɪtɪŋ/ /tiːmz/", translation: "营销团队",
          subComponents: [{ startIndex: 0, words: [{ word: "marketing" }, { word: "teams" }] }]
        },
        {
          start: 6, end: 14, label: "宾补", phonetic: "/tuː/ /dɪˈvɛləp/ /ˌdɪfəˈrɛnʃieɪtɪd/ /prəˈmoʊʃənəl/ /ˈstrætədʒiz/ /fɔːr/ /dɪˈstɪŋkt/ /kənˈsjuːmər/ /gruːps/", translation: "针对不同消费群体制定差异化促销方案",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "develop" }, { word: "differentiated" }, { word: "promotional" }, { word: "strategies" }, { word: "for" }, { word: "distinct" }, { word: "consumer" }, { word: "groups", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "精准营销", text: "customer segmentation (客户细分), promotional strategy (促销方案), consumer group (消费群体)" }
      ]
    },
    {
      id: "q_shopping_s159",
      chinese: "零售破产重组往往涉及门店关闭、库存清算与供应商债务重新谈判",
      english_full: "Retail bankruptcy restructuring typically involves store closures, inventory liquidation, and renegotiation of supplier debts.",
      words: [
        { word: "Retail" }, { word: "bankruptcy" }, { word: "restructuring" }, { word: "typically" }, { word: "involves" }, { word: "store" }, { word: "closures", punctuation: "," }, { word: "inventory" }, { word: "liquidation", punctuation: "," }, { word: "and" }, { word: "renegotiation" }, { word: "of" }, { word: "supplier" }, { word: "debts", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈriːteɪl/ /ˈbæŋkrʌptsi/ /riːˈstrʌktʃərɪŋ/", translation: "零售破产重组",
          subComponents: [{ startIndex: 0, words: [{ word: "Retail" }, { word: "bankruptcy" }, { word: "restructuring" }] }]
        },
        {
          start: 3, end: 3, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪnˈvɒlvz/", translation: "涉及",
          subComponents: [{ startIndex: 0, words: [{ word: "involves" }] }]
        },
        {
          start: 5, end: 13, label: "宾语", phonetic: "/stɔːr/ /ˈkloʊʒərz/ /ˌɪnvəntɔːri/ /ˌlɪkwɪˈdeɪʃən/ /ænd/ /ˌriːnɪˌgoʊʃiˈeɪʃən/ /ɒv/ /səˈplaɪər/ /dɛts/", translation: "门店关闭、库存清算与供应商债务重新谈判",
          subComponents: [{ startIndex: 0, words: [{ word: "store" }, { word: "closures", punctuation: "," }, { word: "inventory" }, { word: "liquidation", punctuation: "," }, { word: "and" }, { word: "renegotiation" }, { word: "of" }, { word: "supplier" }, { word: "debts", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "破产重组", text: "bankruptcy restructuring (破产重组), inventory liquidation (库存清算), renegotiation (重新谈判)" }
      ]
    },
    {
      id: "q_shopping_s160",
      chinese: "增强现实虚拟试衣功能显著降低了在线服装零售的退货率",
      english_full: "Augmented reality virtual try-on features have significantly reduced return rates in online apparel retail.",
      words: [
        { word: "Augmented" }, { word: "reality" }, { word: "virtual" }, { word: "try-on" }, { word: "features" }, { word: "have" }, { word: "significantly" }, { word: "reduced" }, { word: "return" }, { word: "rates" }, { word: "in" }, { word: "online" }, { word: "apparel" }, { word: "retail", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ɔːgˈmɛntɪd/ /riːˈælɪti/ /ˈvɜːrtʃuəl/ /traɪ-ɒn/ /ˈfiːtʃərz/", translation: "增强现实虚拟试衣功能",
          subComponents: [{ startIndex: 0, words: [{ word: "Augmented" }, { word: "reality" }, { word: "virtual" }, { word: "try-on" }, { word: "features" }] }]
        },
        {
          start: 5, end: 7, label: "谓语(现完)", phonetic: "/hæv/ /sɪgˈnɪfɪkəntli/ /rɪˈdjuːst/", translation: "已显著降低",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "reduced" }] }]
        },
        {
          start: 8, end: 9, label: "宾语", phonetic: "/rɪˈtɜːrn/ /reɪts/", translation: "退货率",
          subComponents: [{ startIndex: 0, words: [{ word: "return" }, { word: "rates" }] }]
        },
        {
          start: 10, end: 13, label: "范围状语", phonetic: "/ɪn/ /ˈɒnˌlaɪn/ /əˈpærəl/ /ˈriːteɪl/", translation: "在在线服装零售中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "online" }, { word: "apparel" }, { word: "retail", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "AR零售", text: "augmented reality (增强现实), virtual try-on (虚拟试衣), return rate (退货率)" }
      ]
    },
    {
      id: "q_shopping_s161",
      chinese: "供应商合规标准涵盖劳工权益、环保认证与产品质量检测等多个维度",
      english_full: "Vendor compliance standards encompass labor rights, environmental certifications, and product quality testing across multiple dimensions.",
      words: [
        { word: "Vendor" }, { word: "compliance" }, { word: "standards" }, { word: "encompass" }, { word: "labor" }, { word: "rights", punctuation: "," }, { word: "environmental" }, { word: "certifications", punctuation: "," }, { word: "and" }, { word: "product" }, { word: "quality" }, { word: "testing" }, { word: "across" }, { word: "multiple" }, { word: "dimensions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈvɛndər/ /kəmˈplaɪəns/ /ˈstændərdz/", translation: "供应商合规标准",
          subComponents: [{ startIndex: 0, words: [{ word: "Vendor" }, { word: "compliance" }, { word: "standards" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪnˈkʌmpəs/", translation: "涵盖",
          subComponents: [{ startIndex: 0, words: [{ word: "encompass" }] }]
        },
        {
          start: 4, end: 14, label: "宾语", phonetic: "/ˈleɪbər/ /raɪts/ /ɪnˌvaɪrənˈmɛntəl/ /ˌsɜːrtɪfɪˈkeɪʃənz/ /ænd/ /ˈprɒdʌkt/ /ˈkwɒlɪti/ /ˈtɛstɪŋ/ /əˈkrɒs/ /ˈmʌltɪpəl/ /dɪˈmɛnʃənz/", translation: "劳工权益、环保认证与产品质量检测等多个维度",
          subComponents: [{ startIndex: 0, words: [{ word: "labor" }, { word: "rights", punctuation: "," }, { word: "environmental" }, { word: "certifications", punctuation: "," }, { word: "and" }, { word: "product" }, { word: "quality" }, { word: "testing" }, { word: "across" }, { word: "multiple" }, { word: "dimensions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "供应链合规", text: "vendor compliance (供应商合规), environmental certification (环保认证), quality testing (质量检测)" }
      ]
    },
    {
      id: "q_shopping_s162",
      chinese: "购物车放弃率分析帮助电商平台识别结账流程中的摩擦点并优化用户体验",
      english_full: "Shopping cart abandonment analysis helps e-commerce platforms identify friction points in the checkout process and optimize user experience.",
      words: [
        { word: "Shopping" }, { word: "cart" }, { word: "abandonment" }, { word: "analysis" }, { word: "helps" }, { word: "e-commerce" }, { word: "platforms" }, { word: "identify" }, { word: "friction" }, { word: "points" }, { word: "in" }, { word: "the" }, { word: "checkout" }, { word: "process" }, { word: "and" }, { word: "optimize" }, { word: "user" }, { word: "experience", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈʃɒpɪŋ/ /kɑːrt/ /əˈbændənmənt/ /əˈnælɪsɪs/", translation: "购物车放弃率分析",
          subComponents: [{ startIndex: 0, words: [{ word: "Shopping" }, { word: "cart" }, { word: "abandonment" }, { word: "analysis" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hɛlps/", translation: "帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "helps" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˈiːˌkɒmɜːrs/ /ˈplætfɔːrmz/", translation: "电商平台",
          subComponents: [{ startIndex: 0, words: [{ word: "e-commerce" }, { word: "platforms" }] }]
        },
        {
          start: 7, end: 17, label: "宾补", phonetic: "/aɪˈdɛntɪfaɪ/ /ˈfrɪkʃən/ /pɔɪnts/ /ɪn/ /ðə/ /ˈtʃɛkaʊt/ /ˈprɒsɛs/ /ænd/ /ˈɒptɪmaɪz/ /ˈjuːzər/ /ɪkˈspɪəriəns/", translation: "识别结账流程摩擦点并优化用户体验",
          subComponents: [{ startIndex: 0, words: [{ word: "identify" }, { word: "friction" }, { word: "points" }, { word: "in" }, { word: "the" }, { word: "checkout" }, { word: "process" }, { word: "and" }, { word: "optimize" }, { word: "user" }, { word: "experience", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "电商转化", text: "cart abandonment (购物车放弃), friction point (摩擦点), checkout process (结账流程)" }
      ]
    },
    {
      id: "q_shopping_s163",
      chinese: "品牌奥特莱斯购物中心以折扣价格销售过季商品，同时维护主品牌的定价体系",
      english_full: "Premium outlet malls sell off-season merchandise at discounted prices while preserving the main brands pricing structure.",
      words: [
        { word: "Premium" }, { word: "outlet" }, { word: "malls" }, { word: "sell" }, { word: "off-season" }, { word: "merchandise" }, { word: "at" }, { word: "discounted" }, { word: "prices" }, { word: "while" }, { word: "preserving" }, { word: "the" }, { word: "main" }, { word: "brands" }, { word: "pricing" }, { word: "structure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈpriːmiəm/ /ˈaʊtlɛt/ /mɔːlz/", translation: "品牌奥特莱斯购物中心",
          subComponents: [{ startIndex: 0, words: [{ word: "Premium" }, { word: "outlet" }, { word: "malls" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/sɛl/", translation: "销售",
          subComponents: [{ startIndex: 0, words: [{ word: "sell" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ɒf-ˈsiːzən/ /ˈmɜːrtʃənˌdaɪz/", translation: "过季商品",
          subComponents: [{ startIndex: 0, words: [{ word: "off-season" }, { word: "merchandise" }, { word: "at" }] }]
        },
        {
          start: 7, end: 9, label: "方式状语", phonetic: "/æt/ /ˈdɪskaʊntɪd/ /ˈpraɪsɪz/", translation: "以折扣价格",
          subComponents: [{ startIndex: 0, words: [{ word: "discounted" }, { word: "prices" }, { word: "while" }] }]
        },
        {
          start: 10, end: 15, label: "让步状语", phonetic: "/waɪl/ /prɪˈzɜːrvɪŋ/ /ðə/ /meɪn/ /brændz/ /ˈpraɪsɪŋ/ /ˈstrʌktʃər/", translation: "同时维护主品牌定价体系",
          subComponents: [{ startIndex: 0, words: [{ word: "preserving" }, { word: "the" }, { word: "main" }, { word: "brands" }, { word: "pricing" }, { word: "structure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "奥特莱斯", text: "outlet mall (奥特莱斯), off-season merchandise (过季商品), pricing structure (定价体系)" }
      ]
    },
    {
      id: "q_shopping_s164",
      chinese: "消费者非必需开支下降通常预示着经济衰退期间零售需求的减弱",
      english_full: "Declines in consumer discretionary spending typically signal reduced retail demand during economic downturns.",
      words: [
        { word: "Declines" }, { word: "in" }, { word: "consumer" }, { word: "discretionary" }, { word: "spending" }, { word: "typically" }, { word: "signal" }, { word: "reduced" }, { word: "retail" }, { word: "demand" }, { word: "during" }, { word: "economic" }, { word: "downturns", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/dɪˈklaɪnz/ /ɪn/ /kənˈsjuːmər/ /dɪˈskrɛʃənəri/ /ˈspɛndɪŋ/", translation: "消费者非必需开支下降",
          subComponents: [{ startIndex: 0, words: [{ word: "Declines" }, { word: "in" }, { word: "consumer" }, { word: "discretionary" }, { word: "spending" }] }]
        },
        {
          start: 5, end: 5, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/ˈsɪgnəl/", translation: "预示",
          subComponents: [{ startIndex: 0, words: [{ word: "signal" }] }]
        },
        {
          start: 7, end: 9, label: "宾语", phonetic: "/rɪˈdjuːst/ /ˈriːteɪl/ /dɪˈmænd/", translation: "零售需求减弱",
          subComponents: [{ startIndex: 0, words: [{ word: "reduced" }, { word: "retail" }, { word: "demand" }] }]
        },
        {
          start: 10, end: 12, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˌiːkəˈnɒmɪk/ /ˈdaʊntɜːrnz/", translation: "在经济衰退期间",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "economic" }, { word: "downturns", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "消费趋势", text: "discretionary spending (非必需开支), economic downturn (经济衰退), retail demand (零售需求)" }
      ]
    },
    {
      id: "q_shopping_s165",
      chinese: "零售员工培训计划强调产品知识、销售技巧与卓越客户服务标准的全面提升",
      english_full: "Retail workforce training programs emphasize comprehensive improvement in product knowledge, selling skills, and exemplary customer service standards.",
      words: [
        { word: "Retail" }, { word: "workforce" }, { word: "training" }, { word: "programs" }, { word: "emphasize" }, { word: "comprehensive" }, { word: "improvement" }, { word: "in" }, { word: "product" }, { word: "knowledge", punctuation: "," }, { word: "selling" }, { word: "skills", punctuation: "," }, { word: "and" }, { word: "exemplary" }, { word: "customer" }, { word: "service" }, { word: "standards", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈriːteɪl/ /ˈwɜːrkfɔːrs/ /ˈtreɪnɪŋ/ /ˈproʊgræmz/", translation: "零售员工培训计划",
          subComponents: [{ startIndex: 0, words: [{ word: "Retail" }, { word: "workforce" }, { word: "training" }, { word: "programs" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ˈɛmfəsaɪz/", translation: "强调",
          subComponents: [{ startIndex: 0, words: [{ word: "emphasize" }] }]
        },
        {
          start: 5, end: 16, label: "宾语", phonetic: "/ˌkɒmprɪˈhɛnsɪv/ /ɪmˈpruːvmənt/ /ɪn/ /ˈprɒdʌkt/ /ˈnɒlɪdʒ/ /ˈsɛlɪŋ/ /skɪlz/ /ænd/ /ɪgˈzɛmpləri/ /ˈkʌstəmər/ /ˈsɜːrvɪs/ /ˈstændərdz/", translation: "产品知识、销售技巧与卓越客户服务标准的全面提升",
          subComponents: [{ startIndex: 0, words: [{ word: "comprehensive" }, { word: "improvement" }, { word: "in" }, { word: "product" }, { word: "knowledge", punctuation: "," }, { word: "selling" }, { word: "skills", punctuation: "," }, { word: "and" }, { word: "exemplary" }, { word: "customer" }, { word: "service" }, { word: "standards", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "员工培训", text: "workforce training (员工培训), selling skills (销售技巧), customer service standards (客户服务标准)" }
      ]
    },
    {
      id: "q_shopping_s166",
      chinese: "货架陈列费已成为品牌商争取优质零售位置的重要商业谈判筹码",
      english_full: "Product placement fees have become a critical commercial bargaining chip for brands seeking premium retail shelf positions.",
      words: [
        { word: "Product" }, { word: "placement" }, { word: "fees" }, { word: "have" }, { word: "become" }, { word: "a" }, { word: "critical" }, { word: "commercial" }, { word: "bargaining" }, { word: "chip" }, { word: "for" }, { word: "brands" }, { word: "seeking" }, { word: "premium" }, { word: "retail" }, { word: "shelf" }, { word: "positions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈprɒdʌkt/ /ˈpleɪsmənt/ /fiːz/", translation: "货架陈列费",
          subComponents: [{ startIndex: 0, words: [{ word: "Product" }, { word: "placement" }, { word: "fees" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /bɪˈkʌm/", translation: "已成为",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "become" }] }]
        },
        {
          start: 5, end: 9, label: "表语", phonetic: "/ə/ /ˈkrɪtɪkəl/ /kəˈmɜːrʃəl/ /ˈbɑːrgɪnɪŋ/ /tʃɪp/", translation: "重要的商业谈判筹码",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "critical" }, { word: "commercial" }, { word: "bargaining" }, { word: "chip" }] }]
        },
        {
          start: 10, end: 16, label: "定语(介词短语)", phonetic: "/fɔːr/ /brændz/ /ˈsiːkɪŋ/ /ˈpriːmiəm/ /ˈriːteɪl/ /ʃɛlf/ /ˈpɒzɪʃənz/", translation: "品牌商争取优质零售位置的",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "brands" }, { word: "seeking" }, { word: "premium" }, { word: "retail" }, { word: "shelf" }, { word: "positions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "渠道费用", text: "product placement fee (货架陈列费), bargaining chip (谈判筹码), shelf position (货架位置)" }
      ]
    },
    {
      id: "q_shopping_s167",
      chinese: "可持续包装倡议推动零售商减少一次性塑料用量并采用可降解材料",
      english_full: "Sustainable packaging initiatives are driving retailers to reduce single-use plastic consumption and adopt biodegradable materials.",
      words: [
        { word: "Sustainable" }, { word: "packaging" }, { word: "initiatives" }, { word: "are" }, { word: "driving" }, { word: "retailers" }, { word: "to" }, { word: "reduce" }, { word: "single-use" }, { word: "plastic" }, { word: "consumption" }, { word: "and" }, { word: "adopt" }, { word: "biodegradable" }, { word: "materials", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/səˈsteɪnəbəl/ /ˈpækɪdʒɪŋ/ /ɪˈnɪʃətɪvz/", translation: "可持续包装倡议",
          subComponents: [{ startIndex: 0, words: [{ word: "Sustainable" }, { word: "packaging" }, { word: "initiatives" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现进)", phonetic: "/ɑːr/ /ˈdraɪvɪŋ/", translation: "正在推动",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "driving" }] }]
        },
        {
          start: 5, end: 5, label: "宾语", phonetic: "/ˈriːteɪlərz/", translation: "零售商",
          subComponents: [{ startIndex: 0, words: [{ word: "retailers" }] }]
        },
        {
          start: 6, end: 14, label: "宾补", phonetic: "/tuː/ /rɪˈdjuːs/ /ˈsɪŋgəl-juːs/ /ˈplæstɪk/ /kənˈsʌmpʃən/ /ænd/ /əˈdɒpt/ /ˌbaɪoʊdɪˈgreɪdəbəl/ /məˈtɪəriəlz/", translation: "减少一次性塑料用量并采用可降解材料",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "reduce" }, { word: "single-use" }, { word: "plastic" }, { word: "consumption" }, { word: "and" }, { word: "adopt" }, { word: "biodegradable" }, { word: "materials", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "可持续零售", text: "sustainable packaging (可持续包装), single-use plastic (一次性塑料), biodegradable (可降解的)" }
      ]
    },
    {
      id: "q_shopping_s168",
      chinese: "移动钱包的普及正在改变零售支付生态，并加速无现金交易场景的扩张",
      english_full: "The proliferation of mobile wallets is transforming the retail payment ecosystem and accelerating the expansion of cashless transaction scenarios.",
      words: [
        { word: "The" }, { word: "proliferation" }, { word: "of" }, { word: "mobile" }, { word: "wallets" }, { word: "is" }, { word: "transforming" }, { word: "the" }, { word: "retail" }, { word: "payment" }, { word: "ecosystem" }, { word: "and" }, { word: "accelerating" }, { word: "the" }, { word: "expansion" }, { word: "of" }, { word: "cashless" }, { word: "transaction" }, { word: "scenarios", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /prəˌlɪfəˈreɪʃən/ /ɒv/ /ˈmoʊbaɪl/ /ˈwɒlɪts/", translation: "移动钱包的普及",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "proliferation" }, { word: "of" }, { word: "mobile" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现进)", phonetic: "/ɪz/ /trænsˈfɔːrmɪŋ/", translation: "正在改变",
          subComponents: [{ startIndex: 0, words: [{ word: "wallets" }, { word: "is" }] }]
        },
        {
          start: 6, end: 9, label: "宾语", phonetic: "/ðə/ /ˈriːteɪl/ /ˈpeɪmənt/ /ˈiːkəʊsɪstəm/", translation: "零售支付生态",
          subComponents: [{ startIndex: 0, words: [{ word: "transforming" }, { word: "the" }, { word: "retail" }, { word: "payment" }] }]
        },
        {
          start: 10, end: 10, label: "连词", phonetic: "/ænd/", translation: "并",
          subComponents: [{ startIndex: 0, words: [{ word: "ecosystem" }] }]
        },
        {
          start: 11, end: 18, label: "谓语2(现分)", phonetic: "/ˈæksəleɪtɪŋ/ /ði/ /ɪkˈspænʃən/ /ɒv/ /ˈkæʃləs/ /trænˈzækʃən/ /sɪˈnɑːriəʊz/", translation: "加速无现金交易场景的扩张",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "accelerating" }, { word: "the" }, { word: "expansion" }, { word: "of" }, { word: "cashless" }, { word: "transaction" }, { word: "scenarios", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "移动支付", text: "mobile wallet (移动钱包), payment ecosystem (支付生态), cashless transaction (无现金交易)" }
      ]
    },
    {
      id: "q_shopping_s169",
      chinese: "租户装修补贴条款通常规定业主承担部分门店改造费用以吸引优质品牌入驻",
      english_full: "Tenant improvement allowance clauses typically stipulate that landlords cover partial store renovation costs to attract premium brands.",
      words: [
        { word: "Tenant" }, { word: "improvement" }, { word: "allowance" }, { word: "clauses" }, { word: "typically" }, { word: "stipulate" }, { word: "that" }, { word: "landlords" }, { word: "cover" }, { word: "partial" }, { word: "store" }, { word: "renovation" }, { word: "costs" }, { word: "to" }, { word: "attract" }, { word: "premium" }, { word: "brands", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈtɛnənt/ /ˌɪmpruːvmənt/ /əˈlaʊəns/ /klɔːzɪz/", translation: "租户装修补贴条款",
          subComponents: [{ startIndex: 0, words: [{ word: "Tenant" }, { word: "improvement" }, { word: "allowance" }, { word: "clauses" }] }]
        },
        {
          start: 4, end: 4, label: "状语", phonetic: "/ˈtɪpɪkli/", translation: "通常",
          subComponents: [{ startIndex: 0, words: [{ word: "typically" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈstɪpjʊleɪt/", translation: "规定",
          subComponents: [{ startIndex: 0, words: [{ word: "stipulate" }] }]
        },
        {
          start: 6, end: 16, label: "宾语从句", phonetic: "/ðæt/ /ˈlændlɔːrdz/ /ˈkʌvər/ /ˈpɑːrʃəl/ /stɔːr/ /ˌrɛnəˈveɪʃən/ /kɒsts/ /tuː/ /əˈtrækt/ /ˈpriːmiəm/ /brændz/", translation: "业主承担部分门店改造费用以吸引优质品牌",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "landlords" }, { word: "cover" }, { word: "partial" }, { word: "store" }, { word: "renovation" }, { word: "costs" }, { word: "to" }, { word: "attract" }, { word: "premium" }, { word: "brands", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "租约条款", text: "tenant improvement allowance (装修补贴), store renovation (门店改造), stipulate (规定)" }
      ]
    },
    {
      id: "q_shopping_s170",
      chinese: "有组织零售犯罪集团通过大规模盗窃与网上销赃对连锁商店造成重大损失",
      english_full: "Organized retail crime syndicates inflict substantial losses on chain stores through large-scale theft and online fencing of stolen goods.",
      words: [
        { word: "Organized" }, { word: "retail" }, { word: "crime" }, { word: "syndicates" }, { word: "inflict" }, { word: "substantial" }, { word: "losses" }, { word: "on" }, { word: "chain" }, { word: "stores" }, { word: "through" }, { word: "large-scale" }, { word: "theft" }, { word: "and" }, { word: "online" }, { word: "fencing" }, { word: "of" }, { word: "stolen" }, { word: "goods", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈɔːrgənaɪzd/ /ˈriːteɪl/ /kraɪm/ /ˈsɪndɪkeɪts/", translation: "有组织零售犯罪集团",
          subComponents: [{ startIndex: 0, words: [{ word: "Organized" }, { word: "retail" }, { word: "crime" }, { word: "syndicates" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪnˈflɪkt/", translation: "造成",
          subComponents: [{ startIndex: 0, words: [{ word: "inflict" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/səbˈstænʃəl/ /ˈlɒsɪz/", translation: "重大损失",
          subComponents: [{ startIndex: 0, words: [{ word: "substantial" }, { word: "losses" }] }]
        },
        {
          start: 7, end: 9, label: "对象状语", phonetic: "/ɒn/ /tʃeɪn/ /stɔːrz/", translation: "对连锁商店",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "chain" }, { word: "stores" }] }]
        },
        {
          start: 10, end: 18, label: "方式状语", phonetic: "/θruː/ /lɑːrdʒ-skeɪl/ /θɛft/ /ænd/ /ˈɒnˌlaɪn/ /ˈfɛnsɪŋ/ /ɒv/ /ˈstəʊlən/ /gʊdz/", translation: "通过大规模盗窃与网上销赃",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "large-scale" }, { word: "theft" }, { word: "and" }, { word: "online" }, { word: "fencing" }, { word: "of" }, { word: "stolen" }, { word: "goods", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售安全", text: "organized retail crime (有组织零售犯罪), chain store (连锁商店), fencing (销赃)" }
      ]
    },
    {
      id: "q_shopping_s171",
      chinese: "实体店的未来取决于其能否将线下体验优势与数字化运营能力深度融合",
      english_full: "The future of brick-and-mortar stores depends on their ability to deeply integrate offline experiential advantages with digital operational capabilities.",
      words: [
        { word: "The" }, { word: "future" }, { word: "of" }, { word: "brick-and-mortar" }, { word: "stores" }, { word: "depends" }, { word: "on" }, { word: "their" }, { word: "ability" }, { word: "to" }, { word: "deeply" }, { word: "integrate" }, { word: "offline" }, { word: "experiential" }, { word: "advantages" }, { word: "with" }, { word: "digital" }, { word: "operational" }, { word: "capabilities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈfjuːtʃər/ /ɒv/ /brɪk-ænd-ˈmɔːrtər/ /stɔːrz/", translation: "实体店的未来",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "future" }, { word: "of" }, { word: "brick-and-mortar" }, { word: "stores" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/dɪˈpɛndz/", translation: "取决于",
          subComponents: [{ startIndex: 0, words: [{ word: "depends" }] }]
        },
        {
          start: 6, end: 18, label: "宾语", phonetic: "/ɒn/ /ðɛər/ /əˈbɪlɪti/ /tuː/ /ˈdiːpli/ /ˈɪntɪgreɪt/ /ˌɒflaɪn/ /ɪkˈspɪəriənʃəl/ /ədˈvɑːntɪdʒɪz/ /wɪθ/ /ˈdɪdʒɪtəl/ /ˌɒpəˈreɪʃənəl/ /ˌkeɪpəˈbɪlɪtiz/", translation: "其能否将线下体验优势与数字化运营能力深度融合",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "their" }, { word: "ability" }, { word: "to" }, { word: "deeply" }, { word: "integrate" }, { word: "offline" }, { word: "experiential" }, { word: "advantages" }, { word: "with" }, { word: "digital" }, { word: "operational" }, { word: "capabilities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "零售未来", text: "brick-and-mortar (实体店), experiential advantage (体验优势), digital operational capability (数字化运营能力)" }
      ]
    }
  ]
};
