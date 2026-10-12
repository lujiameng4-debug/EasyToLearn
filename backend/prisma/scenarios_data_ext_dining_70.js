export const extensions = {
  "dining_01": [
    {
      id: "q_dining_s100",
      chinese: "这家米其林星级餐厅因其创新的融合菜肴和无可挑剔的服务而备受赞誉",
      english_full: "The Michelin-starred restaurant is highly acclaimed for its innovative fusion cuisine and impeccable service.",
      words: [
        { word: "The" }, { word: "Michelin-starred" }, { word: "restaurant" }, { word: "is" }, { word: "highly" }, { word: "acclaimed" }, { word: "for" }, { word: "its" }, { word: "innovative" }, { word: "fusion" }, { word: "cuisine" }, { word: "and" }, { word: "impeccable" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmɪʃəlɪn-stɑːrd/ /ˈrɛstərənt/", translation: "这家米其林星级餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "Michelin-starred" }, { word: "restaurant" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/ɪz/ /ˈhaɪli/ /əˈkleɪmd/", translation: "被高度赞誉",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "highly" }, { word: "acclaimed" }] }]
        },
        {
          start: 6, end: 13, label: "原因状语", phonetic: "/fɔːr/ /ɪts/ /ˈɪnəˌveɪtɪv/ /ˈfjuːʒən/ /kwɪˈziːn/ /ænd/ /ɪmˈpɛkəbəl/ /ˈsɜːrvɪs/", translation: "因为其创新的融合菜肴和无可挑剔的服务",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "its" }, { word: "innovative" }, { word: "fusion" }, { word: "cuisine" }, { word: "and" }, { word: "impeccable" }, { word: "service", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮词汇", text: "Michelin-starred (米其林星级的), acclaimed (受赞誉的), fusion cuisine (融合菜), impeccable (无可挑剔的)" } ]
    },
    {
      id: "q_dining_s101",
      chinese: "主厨精心设计的品鉴菜单将本地时令食材与分子料理技术巧妙结合",
      english_full: "The chef's meticulously crafted tasting menu ingeniously combines local seasonal produce with molecular gastronomy techniques.",
      words: [
        { word: "The" }, { word: "chef's" }, { word: "meticulously" }, { word: "crafted" }, { word: "tasting" }, { word: "menu" }, { word: "ingeniously" }, { word: "combines" }, { word: "local" }, { word: "seasonal" }, { word: "produce" }, { word: "with" }, { word: "molecular" }, { word: "gastronomy" }, { word: "techniques", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /ʃɛfs/ /məˈtɪkjʊləsli/ /ˈkræftɪd/ /ˈteɪstɪŋ/ /ˈmɛnjuː/", translation: "主厨精心设计的品鉴菜单",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chef's" }, { word: "meticulously" }, { word: "crafted" }, { word: "tasting" }, { word: "menu" }] }]
        },
        {
          start: 6, end: 7, label: "谓语", phonetic: "/ɪnˈdʒiːniəsli/ /kəmˈbaɪnz/", translation: "巧妙结合",
          subComponents: [{ startIndex: 0, words: [{ word: "ingeniously" }, { word: "combines" }] }]
        },
        {
          start: 8, end: 10, label: "宾语", phonetic: "/ˈloʊkəl/ /ˈsiːzənəl/ /ˈprɒduːs/", translation: "本地时令食材",
          subComponents: [{ startIndex: 0, words: [{ word: "local" }, { word: "seasonal" }, { word: "produce" }] }]
        },
        {
          start: 11, end: 14, label: "方式状语", phonetic: "/wɪθ/ /məˈlɛkjʊlər/ /gæˈstrɒnəmi/ /tɛkˈniːks/", translation: "与分子料理技术",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "molecular" }, { word: "gastronomy" }, { word: "techniques", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "高端餐饮", text: "tasting menu (品鉴菜单), molecular gastronomy (分子料理), seasonal produce (时令农产品)" } ]
    },
    {
      id: "q_dining_s102",
      chinese: "侍酒师为每道主菜推荐了与风味层次完美契合的勃艮第红葡萄酒",
      english_full: "The sommelier recommended a Burgundy red wine that perfectly complemented the flavor profile of each main course.",
      words: [
        { word: "The" }, { word: "sommelier" }, { word: "recommended" }, { word: "a" }, { word: "Burgundy" }, { word: "red" }, { word: "wine" }, { word: "that" }, { word: "perfectly" }, { word: "complemented" }, { word: "the" }, { word: "flavor" }, { word: "profile" }, { word: "of" }, { word: "each" }, { word: "main" }, { word: "course", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌsɒməlˈjeɪ/", translation: "侍酒师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "sommelier" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˌrɛkəˈmɛndɪd/", translation: "推荐了",
          subComponents: [{ startIndex: 0, words: [{ word: "recommended" }] }]
        },
        {
          start: 3, end: 6, label: "宾语", phonetic: "/ə/ /bɜːrˈɡʌndi/ /rɛd/ /waɪn/", translation: "一款勃艮第红葡萄酒",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "Burgundy" }, { word: "red" }, { word: "wine" }] }]
        },
        {
          start: 7, end: 16, label: "定语从句", phonetic: "/ðæt/ /ˈpɜːrfɪktli/ /ˈkɒmplɪmɛntɪd/ /ðə/ /ˈfleɪvər/ /ˈproʊfaɪl/ /ɒv/ /iːtʃ/ /meɪn/ /kɔːrs/", translation: "与每道主菜的风味层次完美契合",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "perfectly" }, { word: "complemented" }, { word: "the" }, { word: "flavor" }, { word: "profile" }, { word: "of" }, { word: "each" }, { word: "main" }, { word: "course", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "侍酒术语", text: "sommelier (侍酒师), flavor profile (风味层次), main course (主菜)" } ]
    },
    {
      id: "q_dining_s103",
      chinese: "由于预订需求旺盛，若不提前数周预约，几乎不可能订到靠窗的座位",
      english_full: "Given the overwhelming demand for reservations, securing a window table without booking weeks in advance is nearly impossible.",
      words: [
        { word: "Given" }, { word: "the" }, { word: "overwhelming" }, { word: "demand" }, { word: "for" }, { word: "reservations", punctuation: "," }, { word: "securing" }, { word: "a" }, { word: "window" }, { word: "table" }, { word: "without" }, { word: "booking" }, { word: "weeks" }, { word: "in" }, { word: "advance" }, { word: "is" }, { word: "nearly" }, { word: "impossible", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "原因状语", phonetic: "/ˈgɪvən/ /ðə/ /ˌoʊvərˈwɛlmɪŋ/ /dɪˈmænd/ /fɔːr/ /ˌrɛzərˈveɪʃənz/", translation: "鉴于预订需求旺盛",
          subComponents: [{ startIndex: 0, words: [{ word: "Given" }, { word: "the" }, { word: "overwhelming" }, { word: "demand" }, { word: "for" }, { word: "reservations", punctuation: "," }] }]
        },
        {
          start: 6, end: 14, label: "主语(动名词)", phonetic: "/sɪˈkjʊərɪŋ/ /ə/ /ˈwɪndoʊ/ /ˈteɪbəl/ /wɪˈðaʊt/ /ˈbʊkɪŋ/ /wiːks/ /ɪn/ /ədˈvæns/", translation: "若不提前数周预约就订到靠窗座位",
          subComponents: [{ startIndex: 0, words: [{ word: "securing" }, { word: "a" }, { word: "window" }, { word: "table" }, { word: "without" }, { word: "booking" }, { word: "weeks" }, { word: "in" }, { word: "advance" }] }]
        },
        {
          start: 15, end: 17, label: "系表结构", phonetic: "/ɪz/ /ˈnɪərli/ /ɪmˈpɒsəbəl/", translation: "几乎不可能",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "nearly" }, { word: "impossible", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "预订表达", text: "overwhelming demand (旺盛需求), secure a table (订到位子), in advance (提前)" } ]
    },
    {
      id: "q_dining_s104",
      chinese: "餐厅严格遵循从农场到餐桌的理念，所有海鲜均来自可持续捕捞渠道",
      english_full: "The restaurant strictly adheres to a farm-to-table philosophy, sourcing all seafood through sustainable fishing channels.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "strictly" }, { word: "adheres" }, { word: "to" }, { word: "a" }, { word: "farm-to-table" }, { word: "philosophy", punctuation: "," }, { word: "sourcing" }, { word: "all" }, { word: "seafood" }, { word: "through" }, { word: "sustainable" }, { word: "fishing" }, { word: "channels", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 7, label: "谓语", phonetic: "/ˈstrɪktli/ /ədˈhɪərz/ /tuː/ /ə/ /fɑːrm-tuː-ˈteɪbəl/ /fɪˈlɒsəfi/", translation: "严格遵循从农场到餐桌的理念",
          subComponents: [{ startIndex: 0, words: [{ word: "strictly" }, { word: "adheres" }, { word: "to" }, { word: "a" }, { word: "farm-to-table" }, { word: "philosophy", punctuation: "," }] }]
        },
        {
          start: 8, end: 14, label: "伴随状语", phonetic: "/ˈsɔːrsɪŋ/ /ɔːl/ /ˈsiːfuːd/ /θruː/ /səˈsteɪnəbəl/ /ˈfɪʃɪŋ/ /ˈtʃænəlz/", translation: "所有海鲜均来自可持续捕捞渠道",
          subComponents: [{ startIndex: 0, words: [{ word: "sourcing" }, { word: "all" }, { word: "seafood" }, { word: "through" }, { word: "sustainable" }, { word: "fishing" }, { word: "channels", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "可持续餐饮", text: "farm-to-table (从农场到餐桌), sustainable fishing (可持续捕捞), adhere to (遵循)" } ]
    },
    {
      id: "q_dining_s105",
      chinese: "如果您对坚果或乳制品过敏，请务必在点餐前告知您的服务生",
      english_full: "If you are allergic to nuts or dairy products, please inform your server before placing your order.",
      words: [
        { word: "If" }, { word: "you" }, { word: "are" }, { word: "allergic" }, { word: "to" }, { word: "nuts" }, { word: "or" }, { word: "dairy" }, { word: "products", punctuation: "," }, { word: "please" }, { word: "inform" }, { word: "your" }, { word: "server" }, { word: "before" }, { word: "placing" }, { word: "your" }, { word: "order", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 8, label: "条件状语从句", phonetic: "/ɪf/ /juː/ /ɑːr/ /əˈlɜːrdʒɪk/ /tuː/ /nʌts/ /ɔːr/ /ˈdɛəri/ /ˈprɒdʌkts/", translation: "如果您对坚果或乳制品过敏",
          subComponents: [{ startIndex: 0, words: [{ word: "If" }, { word: "you" }, { word: "are" }, { word: "allergic" }, { word: "to" }, { word: "nuts" }, { word: "or" }, { word: "dairy" }, { word: "products", punctuation: "," }] }]
        },
        {
          start: 9, end: 12, label: "祈使句谓语+宾语", phonetic: "/pliːz/ /ɪnˈfɔːrm/ /jʊər/ /ˈsɜːrvər/", translation: "请告知您的服务生",
          subComponents: [{ startIndex: 0, words: [{ word: "please" }, { word: "inform" }, { word: "your" }, { word: "server" }] }]
        },
        {
          start: 13, end: 16, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ˈpleɪsɪŋ/ /jʊər/ /ˈɔːrdər/", translation: "在点餐前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "placing" }, { word: "your" }, { word: "order", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "过敏告知", text: "allergic to (对…过敏), dairy products (乳制品), place an order (点餐)" } ]
    },
    {
      id: "q_dining_s106",
      chinese: "这道招牌菜采用低温慢煮工艺，使鸭胸肉的质地格外鲜嫩多汁",
      english_full: "The signature dish employs sous-vide techniques to render the duck breast exceptionally tender and succulent.",
      words: [
        { word: "The" }, { word: "signature" }, { word: "dish" }, { word: "employs" }, { word: "sous-vide" }, { word: "techniques" }, { word: "to" }, { word: "render" }, { word: "the" }, { word: "duck" }, { word: "breast" }, { word: "exceptionally" }, { word: "tender" }, { word: "and" }, { word: "succulent", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɪgnətʃər/ /dɪʃ/", translation: "这道招牌菜",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "signature" }, { word: "dish" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/ɪmˈplɔɪz/ /suː-viːd/ /tɛkˈniːks/", translation: "采用低温慢煮工艺",
          subComponents: [{ startIndex: 0, words: [{ word: "employs" }, { word: "sous-vide" }, { word: "techniques" }] }]
        },
        {
          start: 6, end: 14, label: "目的状语", phonetic: "/tuː/ /ˈrɛndər/ /ðə/ /dʌk/ /brɛst/ /ɪkˈsɛpʃənəli/ /ˈtɛndər/ /ænd/ /ˈsʌkjʊlənt/", translation: "使鸭胸肉格外鲜嫩多汁",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "render" }, { word: "the" }, { word: "duck" }, { word: "breast" }, { word: "exceptionally" }, { word: "tender" }, { word: "and" }, { word: "succulent", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "烹饪技法", text: "sous-vide (低温慢煮), render (使呈现), succulent (多汁的)" } ]
    },
    {
      id: "q_dining_s107",
      chinese: "行政总厨通过重新诠释传统家常菜，成功吸引了更广泛的年轻食客群体",
      english_full: "The executive chef has successfully attracted a broader demographic of young diners by reinterpreting traditional comfort food.",
      words: [
        { word: "The" }, { word: "executive" }, { word: "chef" }, { word: "has" }, { word: "successfully" }, { word: "attracted" }, { word: "a" }, { word: "broader" }, { word: "demographic" }, { word: "of" }, { word: "young" }, { word: "diners" }, { word: "by" }, { word: "reinterpreting" }, { word: "traditional" }, { word: "comfort" }, { word: "food", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪgˈzɛkjʊtɪv/ /ʃɛf/", translation: "行政总厨",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "executive" }, { word: "chef" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /səkˈsɛsfəli/ /əˈtræktɪd/", translation: "已成功吸引",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "successfully" }, { word: "attracted" }] }]
        },
        {
          start: 6, end: 11, label: "宾语", phonetic: "/ə/ /ˈbrɔːdər/ /ˌdɛməˈgræfɪk/ /ɒv/ /jʌŋ/ /ˈdaɪnərz/", translation: "更广泛的年轻食客群体",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "broader" }, { word: "demographic" }, { word: "of" }, { word: "young" }, { word: "diners" }] }]
        },
        {
          start: 12, end: 16, label: "方式状语", phonetic: "/baɪ/ /ˌriːɪnˈtɜːrprɪtɪŋ/ /trəˈdɪʃənəl/ /ˈkʌmfərt/ /fuːd/", translation: "通过重新诠释传统家常菜",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "reinterpreting" }, { word: "traditional" }, { word: "comfort" }, { word: "food", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮经营", text: "executive chef (行政总厨), demographic (人群), comfort food (家常菜)" } ]
    },
    {
      id: "q_dining_s108",
      chinese: "这家海鲜餐厅每天清晨从当地渔民处直接采购渔获，以确保极致的新鲜度",
      english_full: "The seafood restaurant procures its daily catch directly from local fishermen each morning to ensure peak freshness.",
      words: [
        { word: "The" }, { word: "seafood" }, { word: "restaurant" }, { word: "procures" }, { word: "its" }, { word: "daily" }, { word: "catch" }, { word: "directly" }, { word: "from" }, { word: "local" }, { word: "fishermen" }, { word: "each" }, { word: "morning" }, { word: "to" }, { word: "ensure" }, { word: "peak" }, { word: "freshness", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsiːfuːd/ /ˈrɛstərənt/", translation: "这家海鲜餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "seafood" }, { word: "restaurant" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈkjʊərz/", translation: "采购",
          subComponents: [{ startIndex: 0, words: [{ word: "procures" }] }]
        },
        {
          start: 4, end: 6, label: "宾语", phonetic: "/ɪts/ /ˈdeɪli/ /kætʃ/", translation: "每日渔获",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "daily" }, { word: "catch" }] }]
        },
        {
          start: 7, end: 12, label: "状语", phonetic: "/dɪˈrɛktli/ /frɒm/ /ˈloʊkəl/ /ˈfɪʃərmən/ /iːtʃ/ /ˈmɔːrnɪŋ/", translation: "每天清晨从当地渔民处直接",
          subComponents: [{ startIndex: 0, words: [{ word: "directly" }, { word: "from" }, { word: "local" }, { word: "fishermen" }, { word: "each" }, { word: "morning" }] }]
        },
        {
          start: 13, end: 16, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /piːk/ /ˈfrɛʃnəs/", translation: "以确保极致新鲜度",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "peak" }, { word: "freshness", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "供应链", text: "procure (采购), daily catch (每日渔获), peak freshness (极致新鲜)" } ]
    },
    {
      id: "q_dining_s109",
      chinese: "餐厅的氛围既私密又温馨，非常适合举办商务晚宴或纪念日晚餐",
      english_full: "The restaurant's ambiance is both intimate and inviting, making it ideal for business dinners or anniversary celebrations.",
      words: [
        { word: "The" }, { word: "restaurant's" }, { word: "ambiance" }, { word: "is" }, { word: "both" }, { word: "intimate" }, { word: "and" }, { word: "inviting", punctuation: "," }, { word: "making" }, { word: "it" }, { word: "ideal" }, { word: "for" }, { word: "business" }, { word: "dinners" }, { word: "or" }, { word: "anniversary" }, { word: "celebrations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛstərənts/ /ˈæmbiəns/", translation: "餐厅的氛围",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant's" }, { word: "ambiance" }] }]
        },
        {
          start: 3, end: 7, label: "系表结构", phonetic: "/ɪz/ /boʊθ/ /ˈɪntɪmət/ /ænd/ /ɪnˈvaɪtɪŋ/", translation: "既私密又温馨",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "both" }, { word: "intimate" }, { word: "and" }, { word: "inviting", punctuation: "," }] }]
        },
        {
          start: 8, end: 16, label: "结果状语", phonetic: "/ˈmeɪkɪŋ/ /ɪt/ /aɪˈdiːəl/ /fɔːr/ /ˈbɪznəs/ /ˈdɪnərz/ /ɔːr/ /ˌænɪˈvɜːrsəri/ /ˌsɛlɪˈbreɪʃənz/", translation: "非常适合举办商务晚宴或纪念日晚餐",
          subComponents: [{ startIndex: 0, words: [{ word: "making" }, { word: "it" }, { word: "ideal" }, { word: "for" }, { word: "business" }, { word: "dinners" }, { word: "or" }, { word: "anniversary" }, { word: "celebrations", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "用餐场景", text: "ambiance (氛围), intimate (私密的), anniversary celebration (纪念日晚餐)" } ]
    },
    {
      id: "q_dining_s110",
      chinese: "糕点师以制作外形惊艳、层次丰富的法式甜点而在业界享有盛誉",
      english_full: "The pastry chef is renowned in the industry for crafting visually stunning French desserts with layered complexity.",
      words: [
        { word: "The" }, { word: "pastry" }, { word: "chef" }, { word: "is" }, { word: "renowned" }, { word: "in" }, { word: "the" }, { word: "industry" }, { word: "for" }, { word: "crafting" }, { word: "visually" }, { word: "stunning" }, { word: "French" }, { word: "desserts" }, { word: "with" }, { word: "layered" }, { word: "complexity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈpeɪstri/ /ʃɛf/", translation: "糕点师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pastry" }, { word: "chef" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/ɪz/ /rɪˈnaʊnd/ /ɪn/ /ðə/ /ˈɪndəstri/", translation: "在业界享有盛誉",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "renowned" }, { word: "in" }, { word: "the" }, { word: "industry" }] }]
        },
        {
          start: 8, end: 16, label: "原因状语", phonetic: "/fɔːr/ /ˈkræftɪŋ/ /ˈvɪʒuəli/ /ˈstʌnɪŋ/ /frɛntʃ/ /dɪˈzɜːrts/ /wɪθ/ /ˈleɪərd/ /kəmˈplɛksɪti/", translation: "因制作外形惊艳、层次丰富的法式甜点",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "crafting" }, { word: "visually" }, { word: "stunning" }, { word: "French" }, { word: "desserts" }, { word: "with" }, { word: "layered" }, { word: "complexity", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "甜品词汇", text: "pastry chef (糕点师), visually stunning (外形惊艳), layered complexity (层次丰富)" } ]
    },
    {
      id: "q_dining_s111",
      chinese: "菜单提供了丰富的无麸质和纯素食选项，以满足日益多样化的饮食需求",
      english_full: "The menu offers an extensive selection of gluten-free and vegan options to accommodate increasingly diverse dietary needs.",
      words: [
        { word: "The" }, { word: "menu" }, { word: "offers" }, { word: "an" }, { word: "extensive" }, { word: "selection" }, { word: "of" }, { word: "gluten-free" }, { word: "and" }, { word: "vegan" }, { word: "options" }, { word: "to" }, { word: "accommodate" }, { word: "increasingly" }, { word: "diverse" }, { word: "dietary" }, { word: "needs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmɛnjuː/", translation: "菜单",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "menu" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 3, end: 10, label: "宾语", phonetic: "/æn/ /ɪkˈstɛnsɪv/ /sɪˈlɛkʃən/ /ɒv/ /ˈgluːtən-friː/ /ænd/ /ˈviːgən/ /ˈɒpʃənz/", translation: "丰富的无麸质和纯素食选项",
          subComponents: [{ startIndex: 0, words: [{ word: "an" }, { word: "extensive" }, { word: "selection" }, { word: "of" }, { word: "gluten-free" }, { word: "and" }, { word: "vegan" }, { word: "options" }] }]
        },
        {
          start: 11, end: 16, label: "目的状语", phonetic: "/tuː/ /əˈkɒmədeɪt/ /ɪnˈkriːsɪŋli/ /daɪˈvɜːrs/ /ˈdaɪɪˌtɛri/ /niːdz/", translation: "以满足日益多样化的饮食需求",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "accommodate" }, { word: "increasingly" }, { word: "diverse" }, { word: "dietary" }, { word: "needs", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "特殊饮食", text: "gluten-free (无麸质), vegan (纯素食), accommodate (满足/迎合)" } ]
    },
    {
      id: "q_dining_s112",
      chinese: "六人以上的团体用餐将自动在账单中加入百分之十五的服务费",
      english_full: "For parties of six or more, a fifteen percent service charge is automatically added to the bill.",
      words: [
        { word: "For" }, { word: "parties" }, { word: "of" }, { word: "six" }, { word: "or" }, { word: "more", punctuation: "," }, { word: "a" }, { word: "fifteen" }, { word: "percent" }, { word: "service" }, { word: "charge" }, { word: "is" }, { word: "automatically" }, { word: "added" }, { word: "to" }, { word: "the" }, { word: "bill", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "条件状语", phonetic: "/fɔːr/ /ˈpɑːrtiz/ /ɒv/ /sɪks/ /ɔːr/ /mɔːr/", translation: "六人以上的团体用餐",
          subComponents: [{ startIndex: 0, words: [{ word: "For" }, { word: "parties" }, { word: "of" }, { word: "six" }, { word: "or" }, { word: "more", punctuation: "," }] }]
        },
        {
          start: 6, end: 10, label: "主语", phonetic: "/ə/ /fɪfˈtiːn/ /pərˈsɛnt/ /ˈsɜːrvɪs/ /tʃɑːrdʒ/", translation: "百分之十五的服务费",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "fifteen" }, { word: "percent" }, { word: "service" }, { word: "charge" }] }]
        },
        {
          start: 11, end: 13, label: "谓语(被动)", phonetic: "/ɪz/ /ˌɔːtəˈmætɪkli/ /ˈædɪd/", translation: "被自动加入",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "automatically" }, { word: "added" }] }]
        },
        {
          start: 14, end: 16, label: "地点状语", phonetic: "/tuː/ /ðə/ /bɪl/", translation: "账单中",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "the" }, { word: "bill", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "消费规则", text: "service charge (服务费), party (聚餐团体), automatically added (自动加入)" } ]
    },
    {
      id: "q_dining_s113",
      chinese: "主厨特别重视运用应季农产品，以最大程度地提升每道菜的风味深度",
      english_full: "The chef places particular emphasis on utilizing seasonal produce to maximize the depth of flavor in each dish.",
      words: [
        { word: "The" }, { word: "chef" }, { word: "places" }, { word: "particular" }, { word: "emphasis" }, { word: "on" }, { word: "utilizing" }, { word: "seasonal" }, { word: "produce" }, { word: "to" }, { word: "maximize" }, { word: "the" }, { word: "depth" }, { word: "of" }, { word: "flavor" }, { word: "in" }, { word: "each" }, { word: "dish", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ʃɛf/", translation: "主厨",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chef" }] }]
        },
        {
          start: 2, end: 8, label: "谓语", phonetic: "/ˈpleɪsɪz/ /pərˈtɪkjʊlər/ /ˈɛmfəsɪs/ /ɒn/ /ˈjuːtɪˌlaɪzɪŋ/ /ˈsiːzənəl/ /ˈprɒduːs/", translation: "特别重视运用应季农产品",
          subComponents: [{ startIndex: 0, words: [{ word: "places" }, { word: "particular" }, { word: "emphasis" }, { word: "on" }, { word: "utilizing" }, { word: "seasonal" }, { word: "produce" }] }]
        },
        {
          start: 9, end: 17, label: "目的状语", phonetic: "/tuː/ /ˈmæksɪmaɪz/ /ðə/ /dɛpθ/ /ɒv/ /ˈfleɪvər/ /ɪn/ /iːtʃ/ /dɪʃ/", translation: "以最大程度提升每道菜的风味深度",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "maximize" }, { word: "the" }, { word: "depth" }, { word: "of" }, { word: "flavor" }, { word: "in" }, { word: "each" }, { word: "dish", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "厨艺理念", text: "place emphasis on (重视), seasonal produce (应季农产品), depth of flavor (风味深度)" } ]
    },
    {
      id: "q_dining_s114",
      chinese: "这家新开的法式小馆因其正宗的地中海风味菜肴而迅速赢得广泛好评",
      english_full: "The newly opened bistro has quickly garnered widespread praise for its authentic Mediterranean-inspired cuisine.",
      words: [
        { word: "The" }, { word: "newly" }, { word: "opened" }, { word: "bistro" }, { word: "has" }, { word: "quickly" }, { word: "garnered" }, { word: "widespread" }, { word: "praise" }, { word: "for" }, { word: "its" }, { word: "authentic" }, { word: "Mediterranean-inspired" }, { word: "cuisine", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈnuːli/ /ˈoʊpənd/ /ˈbiːstroʊ/", translation: "这家新开的法式小馆",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "newly" }, { word: "opened" }, { word: "bistro" }] }]
        },
        {
          start: 4, end: 6, label: "谓语(现完)", phonetic: "/hæz/ /ˈkwɪkli/ /ˈgɑːrnərd/", translation: "已迅速赢得",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "quickly" }, { word: "garnered" }] }]
        },
        {
          start: 7, end: 8, label: "宾语", phonetic: "/ˈwaɪdsprɛd/ /preɪz/", translation: "广泛好评",
          subComponents: [{ startIndex: 0, words: [{ word: "widespread" }, { word: "praise" }] }]
        },
        {
          start: 9, end: 13, label: "原因状语", phonetic: "/fɔːr/ /ɪts/ /ɔːˈθɛntɪk/ /ˌmɛdɪtəˈreɪniən-ɪnˈspaɪərd/ /kwɪˈziːn/", translation: "因其正宗的地中海风味菜肴",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "its" }, { word: "authentic" }, { word: "Mediterranean-inspired" }, { word: "cuisine", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐厅评价", text: "bistro (小馆), garner praise (赢得好评), Mediterranean-inspired (地中海风)" } ]
    },
    {
      id: "q_dining_s115",
      chinese: "餐厅通过为剩余食材建立堆肥系统，切实贯彻了零浪费的餐饮理念",
      english_full: "The restaurant implements a zero-waste philosophy by establishing a composting system for surplus ingredients.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "implements" }, { word: "a" }, { word: "zero-waste" }, { word: "philosophy" }, { word: "by" }, { word: "establishing" }, { word: "a" }, { word: "composting" }, { word: "system" }, { word: "for" }, { word: "surplus" }, { word: "ingredients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 5, label: "谓语+宾语", phonetic: "/ˈɪmplɪmənts/ /ə/ /ˈzɪəroʊ-weɪst/ /fɪˈlɒsəfi/", translation: "贯彻零浪费理念",
          subComponents: [{ startIndex: 0, words: [{ word: "implements" }, { word: "a" }, { word: "zero-waste" }, { word: "philosophy" }] }]
        },
        {
          start: 6, end: 13, label: "方式状语", phonetic: "/baɪ/ /ɪˈstæblɪʃɪŋ/ /ə/ /ˈkɒmpoʊstɪŋ/ /ˈsɪstəm/ /fɔːr/ /ˈsɜːrpləs/ /ɪnˈgriːdiənts/", translation: "通过为剩余食材建立堆肥系统",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "establishing" }, { word: "a" }, { word: "composting" }, { word: "system" }, { word: "for" }, { word: "surplus" }, { word: "ingredients", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "环保餐饮", text: "zero-waste (零浪费), composting system (堆肥系统), surplus ingredients (剩余食材)" } ]
    },
    {
      id: "q_dining_s116",
      chinese: "若未提前通知取消预订，餐厅将收取一定比例的取消费用",
      english_full: "A cancellation fee will be charged if the reservation is not cancelled with prior notice.",
      words: [
        { word: "A" }, { word: "cancellation" }, { word: "fee" }, { word: "will" }, { word: "be" }, { word: "charged" }, { word: "if" }, { word: "the" }, { word: "reservation" }, { word: "is" }, { word: "not" }, { word: "cancelled" }, { word: "with" }, { word: "prior" }, { word: "notice", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主句主语", phonetic: "/ə/ /ˌkænsəˈleɪʃən/ /fiː/", translation: "取消费用",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "cancellation" }, { word: "fee" }] }]
        },
        {
          start: 3, end: 5, label: "主句谓语(被动)", phonetic: "/wɪl/ /bi/ /tʃɑːrdʒd/", translation: "将被收取",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "be" }, { word: "charged" }] }]
        },
        {
          start: 6, end: 14, label: "条件状语从句", phonetic: "/ɪf/ /ðə/ /ˌrɛzərˈveɪʃən/ /ɪz/ /nɒt/ /ˈkænsəld/ /wɪθ/ /ˈpraɪər/ /ˈnoʊtɪs/", translation: "若未提前通知取消预订",
          subComponents: [{ startIndex: 0, words: [{ word: "if" }, { word: "the" }, { word: "reservation" }, { word: "is" }, { word: "not" }, { word: "cancelled" }, { word: "with" }, { word: "prior" }, { word: "notice", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "预订政策", text: "cancellation fee (取消费), prior notice (提前通知), reservation (预订)" } ]
    },
    {
      id: "q_dining_s117",
      chinese: "侍者端上了一盘令人垂涎的开胃小食，以唤起宾客的食欲",
      english_full: "The waiter served a platter of mouth-watering hors d'oeuvres to whet the guests' appetite.",
      words: [
        { word: "The" }, { word: "waiter" }, { word: "served" }, { word: "a" }, { word: "platter" }, { word: "of" }, { word: "mouth-watering" }, { word: "hors" }, { word: "d'oeuvres" }, { word: "to" }, { word: "whet" }, { word: "the" }, { word: "guests'" }, { word: "appetite", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈweɪtər/", translation: "侍者",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "waiter" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/sɜːrvd/", translation: "端上",
          subComponents: [{ startIndex: 0, words: [{ word: "served" }] }]
        },
        {
          start: 3, end: 8, label: "宾语", phonetic: "/ə/ /ˈplætər/ /ɒv/ /ˈmaʊθˌwɔːtərɪŋ/ /ɔːr/ /dɜːrvz/", translation: "一盘令人垂涎的开胃小食",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "platter" }, { word: "of" }, { word: "mouth-watering" }, { word: "hors" }, { word: "d'oeuvres" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /wɛt/ /ðə/ /gɛsts/ /ˈæpɪtaɪt/", translation: "以唤起宾客的食欲",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "whet" }, { word: "the" }, { word: "guests'" }, { word: "appetite", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "开胃菜", text: "hors d'oeuvres (开胃小食), whet appetite (唤起食欲), mouth-watering (令人垂涎的)" } ]
    },
    {
      id: "q_dining_s118",
      chinese: "这家餐馆因未通过突击卫生检查而被卫生部门责令暂时停业整顿",
      english_full: "The eatery was ordered to temporarily close by the health department after failing a surprise hygiene inspection.",
      words: [
        { word: "The" }, { word: "eatery" }, { word: "was" }, { word: "ordered" }, { word: "to" }, { word: "temporarily" }, { word: "close" }, { word: "by" }, { word: "the" }, { word: "health" }, { word: "department" }, { word: "after" }, { word: "failing" }, { word: "a" }, { word: "surprise" }, { word: "hygiene" }, { word: "inspection", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ði/ /ˈiːtəri/", translation: "这家餐馆",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "eatery" }] }]
        },
        {
          start: 2, end: 6, label: "谓语(被动)", phonetic: "/wɒz/ /ˈɔːrdərd/ /tuː/ /ˌtɛmpəˈrɛrɪli/ /kloʊz/", translation: "被责令暂时停业",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "ordered" }, { word: "to" }, { word: "temporarily" }, { word: "close" }] }]
        },
        {
          start: 7, end: 10, label: "施动者", phonetic: "/baɪ/ /ðə/ /hɛlθ/ /dɪˈpɑːrtmənt/", translation: "卫生部门",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "the" }, { word: "health" }, { word: "department" }] }]
        },
        {
          start: 11, end: 16, label: "时间状语", phonetic: "/ˈæftər/ /ˈfeɪlɪŋ/ /ə/ /sərˈpraɪz/ /ˈhaɪdʒiːn/ /ɪnˈspɛkʃən/", translation: "未通过突击卫生检查之后",
          subComponents: [{ startIndex: 0, words: [{ word: "after" }, { word: "failing" }, { word: "a" }, { word: "surprise" }, { word: "hygiene" }, { word: "inspection", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "食品安全", text: "hygiene inspection (卫生检查), temporarily close (暂时停业), eatery (餐馆)" } ]
    },
    {
      id: "q_dining_s119",
      chinese: "酒馆的吸引力在于其质朴的内部装潢与热情周到的待客之道",
      english_full: "The tavern's appeal lies in its rustic interior decor and warm, attentive hospitality.",
      words: [
        { word: "The" }, { word: "tavern's" }, { word: "appeal" }, { word: "lies" }, { word: "in" }, { word: "its" }, { word: "rustic" }, { word: "interior" }, { word: "decor" }, { word: "and" }, { word: "warm", punctuation: "," }, { word: "attentive" }, { word: "hospitality", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈtævərnz/ /əˈpiːl/", translation: "酒馆的吸引力",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "tavern's" }, { word: "appeal" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/laɪz/ /ɪn/", translation: "在于",
          subComponents: [{ startIndex: 0, words: [{ word: "lies" }, { word: "in" }] }]
        },
        {
          start: 5, end: 12, label: "宾语(介词)", phonetic: "/ɪts/ /ˈrʌstɪk/ /ɪnˈtɪriər/ /deɪˈkɔːr/ /ænd/ /wɔːrm/, /əˈtɛntɪv/ /ˌhɒspɪˈtælɪti/", translation: "质朴的内部装潢与热情周到的待客之道",
          subComponents: [{ startIndex: 0, words: [{ word: "its" }, { word: "rustic" }, { word: "interior" }, { word: "decor" }, { word: "and" }, { word: "warm", punctuation: "," }, { word: "attentive" }, { word: "hospitality", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮体验", text: "rustic decor (质朴装潢), hospitality (待客之道), appeal lies in (吸引力在于)" } ]
    },
    {
      id: "q_dining_s120",
      chinese: "餐厅的利润率因原材料成本突然飙升而受到显著挤压",
      english_full: "The restaurant's profit margins were significantly squeezed by a sudden spike in raw ingredient costs.",
      words: [
        { word: "The" }, { word: "restaurant's" }, { word: "profit" }, { word: "margins" }, { word: "were" }, { word: "significantly" }, { word: "squeezed" }, { word: "by" }, { word: "a" }, { word: "sudden" }, { word: "spike" }, { word: "in" }, { word: "raw" }, { word: "ingredient" }, { word: "costs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈrɛstərənts/ /ˈprɒfɪt/ /ˈmɑːrdʒɪnz/", translation: "餐厅的利润率",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant's" }, { word: "profit" }, { word: "margins" }] }]
        },
        {
          start: 4, end: 6, label: "谓语(被动)", phonetic: "/wɜːr/ /ˌsɪgnɪfɪkəntli/ /skwiːzd/", translation: "受到显著挤压",
          subComponents: [{ startIndex: 0, words: [{ word: "were" }, { word: "significantly" }, { word: "squeezed" }] }]
        },
        {
          start: 7, end: 14, label: "施动者/原因", phonetic: "/baɪ/ /ə/ /ˈsʌdən/ /spaɪk/ /ɪn/ /rɔː/ /ɪnˈgriːdiənt/ /kɒsts/", translation: "原材料成本突然飙升",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "a" }, { word: "sudden" }, { word: "spike" }, { word: "in" }, { word: "raw" }, { word: "ingredient" }, { word: "costs", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮商业", text: "profit margin (利润率), spike (飙升), raw ingredient (原材料)" } ]
    },
    {
      id: "q_dining_s121",
      chinese: "主厨的开放式厨房设计让食客能够近距离欣赏精湛的烹饪技艺",
      english_full: "The chef's open kitchen design allows diners to observe exquisite culinary craftsmanship up close.",
      words: [
        { word: "The" }, { word: "chef's" }, { word: "open" }, { word: "kitchen" }, { word: "design" }, { word: "allows" }, { word: "diners" }, { word: "to" }, { word: "observe" }, { word: "exquisite" }, { word: "culinary" }, { word: "craftsmanship" }, { word: "up" }, { word: "close", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ʃɛfs/ /ˈoʊpən/ /ˈkɪtʃən/ /dɪˈzaɪn/", translation: "主厨的开放式厨房设计",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chef's" }, { word: "open" }, { word: "kitchen" }, { word: "design" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/əˈlaʊz/", translation: "让",
          subComponents: [{ startIndex: 0, words: [{ word: "allows" }] }]
        },
        {
          start: 6, end: 6, label: "宾语", phonetic: "/ˈdaɪnərz/", translation: "食客",
          subComponents: [{ startIndex: 0, words: [{ word: "diners" }] }]
        },
        {
          start: 7, end: 13, label: "宾补", phonetic: "/tuː/ /əbˈzɜːrv/ /ɪkˈskwɪzɪt/ /ˈkʌlɪnəri/ /ˈkræftsmənʃɪp/ /ʌp/ /kloʊs/", translation: "近距离欣赏精湛的烹饪技艺",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "observe" }, { word: "exquisite" }, { word: "culinary" }, { word: "craftsmanship" }, { word: "up" }, { word: "close", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "厨房设计", text: "open kitchen (开放式厨房), culinary craftsmanship (烹饪技艺), up close (近距离)" } ]
    },
    {
      id: "q_dining_s122",
      chinese: "这家寿司店提供正宗的日式 Omakase 体验，由主厨根据当日食材即兴创作",
      english_full: "This sushi bar offers an authentic omakase experience, with the chef improvising dishes based on the day's catch.",
      words: [
        { word: "This" }, { word: "sushi" }, { word: "bar" }, { word: "offers" }, { word: "an" }, { word: "authentic" }, { word: "omakase" }, { word: "experience", punctuation: "," }, { word: "with" }, { word: "the" }, { word: "chef" }, { word: "improvising" }, { word: "dishes" }, { word: "based" }, { word: "on" }, { word: "the" }, { word: "day's" }, { word: "catch", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ˈsuːʃi/ /bɑːr/", translation: "这家寿司店",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "sushi" }, { word: "bar" }] }]
        },
        {
          start: 3, end: 7, label: "谓语+宾语", phonetic: "/ˈɒfərz/ /æn/ /ɔːˈθɛntɪk/ /ˌoʊməˈkɑːseɪ/ /ɪkˈspɪriəns/", translation: "提供正宗 Omakase 体验",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }, { word: "an" }, { word: "authentic" }, { word: "omakase" }, { word: "experience", punctuation: "," }] }]
        },
        {
          start: 8, end: 17, label: "伴随状语", phonetic: "/wɪθ/ /ðə/ /ʃɛf/ /ˈɪmprəvaɪzɪŋ/ /ˈdɪʃɪz/ /beɪst/ /ɒn/ /ðə/ /deɪz/ /kætʃ/", translation: "主厨根据当日食材即兴创作",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "the" }, { word: "chef" }, { word: "improvising" }, { word: "dishes" }, { word: "based" }, { word: "on" }, { word: "the" }, { word: "day's" }, { word: "catch", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "日料术语", text: "omakase (主厨发办), improvising (即兴创作), day's catch (当日渔获)" } ]
    },
    {
      id: "q_dining_s123",
      chinese: "下午茶服务以精选茶品搭配手工制作的精致点心而著称",
      english_full: "The afternoon tea service is renowned for pairing premium teas with artisanal handcrafted pastries.",
      words: [
        { word: "The" }, { word: "afternoon" }, { word: "tea" }, { word: "service" }, { word: "is" }, { word: "renowned" }, { word: "for" }, { word: "pairing" }, { word: "premium" }, { word: "teas" }, { word: "with" }, { word: "artisanal" }, { word: "handcrafted" }, { word: "pastries", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˌæftərˈnuːn/ /tiː/ /ˈsɜːrvɪs/", translation: "下午茶服务",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "afternoon" }, { word: "tea" }, { word: "service" }] }]
        },
        {
          start: 4, end: 6, label: "谓语", phonetic: "/ɪz/ /rɪˈnaʊnd/ /fɔːr/", translation: "以…而著称",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "renowned" }, { word: "for" }] }]
        },
        {
          start: 7, end: 13, label: "宾语(动名词)", phonetic: "/ˈpɛərɪŋ/ /ˈpriːmiəm/ /tiːz/ /wɪθ/ /ɑːrˈtɪzənəl/ /ˈhændkræftɪd/ /ˈpeɪstrɪz/", translation: "精选茶品搭配手工精致点心",
          subComponents: [{ startIndex: 0, words: [{ word: "pairing" }, { word: "premium" }, { word: "teas" }, { word: "with" }, { word: "artisanal" }, { word: "handcrafted" }, { word: "pastries", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "下午茶", text: "afternoon tea (下午茶), artisanal (手工制作的), premium tea (精选茶品)" } ]
    },
    {
      id: "q_dining_s124",
      chinese: "这家精酿鸡尾酒吧以其创意调酒和分子 mixology 技术在业内独树一帜",
      english_full: "This craft cocktail bar stands out in the industry for its creative mixology and molecular bartending techniques.",
      words: [
        { word: "This" }, { word: "craft" }, { word: "cocktail" }, { word: "bar" }, { word: "stands" }, { word: "out" }, { word: "in" }, { word: "the" }, { word: "industry" }, { word: "for" }, { word: "its" }, { word: "creative" }, { word: "mixology" }, { word: "and" }, { word: "molecular" }, { word: "bartending" }, { word: "techniques", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /kræft/ /ˈkɒkteɪl/ /bɑːr/", translation: "这家精酿鸡尾酒吧",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "craft" }, { word: "cocktail" }, { word: "bar" }] }]
        },
        {
          start: 4, end: 8, label: "谓语", phonetic: "/stændz/ /aʊt/ /ɪn/ /ðə/ /ˈɪndəstri/", translation: "在业内独树一帜",
          subComponents: [{ startIndex: 0, words: [{ word: "stands" }, { word: "out" }, { word: "in" }, { word: "the" }, { word: "industry" }] }]
        },
        {
          start: 9, end: 16, label: "原因状语", phonetic: "/fɔːr/ /ɪts/ /kriˈeɪtɪv/ /mɪkˈsɒlədʒi/ /ænd/ /məˈlɛkjʊlər/ /ˈbɑːrtɛndɪŋ/ /tɛkˈniːks/", translation: "因其创意调酒和分子调酒技术",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "its" }, { word: "creative" }, { word: "mixology" }, { word: "and" }, { word: "molecular" }, { word: "bartending" }, { word: "techniques", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "酒吧术语", text: "mixology (调酒艺术), craft cocktail (精酿鸡尾酒), molecular bartending (分子调酒)" } ]
    },
    {
      id: "q_dining_s125",
      chinese: "餐厅采用固定价格套餐，为食客提供物超所值的多道式用餐体验",
      english_full: "The restaurant offers a prix fixe menu that delivers exceptional value through a multi-course dining experience.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "offers" }, { word: "a" }, { word: "prix" }, { word: "fixe" }, { word: "menu" }, { word: "that" }, { word: "delivers" }, { word: "exceptional" }, { word: "value" }, { word: "through" }, { word: "a" }, { word: "multi-course" }, { word: "dining" }, { word: "experience", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 6, label: "谓语+宾语", phonetic: "/ˈɒfərz/ /ə/ /priː/ /fiːks/ /ˈmɛnjuː/", translation: "提供固定价格套餐",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }, { word: "a" }, { word: "prix" }, { word: "fixe" }, { word: "menu" }] }]
        },
        {
          start: 7, end: 15, label: "定语从句", phonetic: "/ðæt/ /dɪˈlɪvərz/ /ɪkˈsɛpʃənəl/ /ˈvæljuː/ /θruː/ /ə/ /ˌmʌlti-kɔːrs/ /ˈdaɪnɪŋ/ /ɪkˈspɪriəns/", translation: "提供物超所值的多道式用餐体验",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "delivers" }, { word: "exceptional" }, { word: "value" }, { word: "through" }, { word: "a" }, { word: "multi-course" }, { word: "dining" }, { word: "experience", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "套餐术语", text: "prix fixe (固定价格套餐), multi-course (多道式), exceptional value (物超所值)" } ]
    },
    {
      id: "q_dining_s126",
      chinese: "食客可在主厨专属餐桌就座，享受与主厨面对面交流的独家用餐体验",
      english_full: "Diners can be seated at the chef's table to enjoy an exclusive dining experience with face-to-face interaction.",
      words: [
        { word: "Diners" }, { word: "can" }, { word: "be" }, { word: "seated" }, { word: "at" }, { word: "the" }, { word: "chef's" }, { word: "table" }, { word: "to" }, { word: "enjoy" }, { word: "an" }, { word: "exclusive" }, { word: "dining" }, { word: "experience" }, { word: "with" }, { word: "face-to-face" }, { word: "interaction", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈdaɪnərz/", translation: "食客",
          subComponents: [{ startIndex: 0, words: [{ word: "Diners" }] }]
        },
        {
          start: 1, end: 7, label: "谓语(被动)", phonetic: "/kæn/ /bi/ /ˈsiːtɪd/ /æt/ /ðə/ /ʃɛfs/ /ˈteɪbəl/", translation: "可在主厨专属餐桌就座",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "be" }, { word: "seated" }, { word: "at" }, { word: "the" }, { word: "chef's" }, { word: "table" }] }]
        },
        {
          start: 8, end: 16, label: "目的状语", phonetic: "/tuː/ /ɪnˈdʒɔɪ/ /æn/ /ɪkˈskluːsɪv/ /ˈdaɪnɪŋ/ /ɪkˈspɪriəns/ /wɪθ/ /feɪs-tuː-feɪs/ /ˌɪntərˈækʃən/", translation: "享受与主厨面对面交流的独家体验",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "enjoy" }, { word: "an" }, { word: "exclusive" }, { word: "dining" }, { word: "experience" }, { word: "with" }, { word: "face-to-face" }, { word: "interaction", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "高端体验", text: "chef's table (主厨餐桌), exclusive (独家的), face-to-face interaction (面对面交流)" } ]
    },
    {
      id: "q_dining_s127",
      chinese: "这家幽灵厨房品牌通过外卖平台实现了低成本的快速扩张",
      english_full: "This ghost kitchen brand has achieved rapid low-cost expansion through food delivery platforms.",
      words: [
        { word: "This" }, { word: "ghost" }, { word: "kitchen" }, { word: "brand" }, { word: "has" }, { word: "achieved" }, { word: "rapid" }, { word: "low-cost" }, { word: "expansion" }, { word: "through" }, { word: "food" }, { word: "delivery" }, { word: "platforms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /goʊst/ /ˈkɪtʃən/ /brænd/", translation: "这家幽灵厨房品牌",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "ghost" }, { word: "kitchen" }, { word: "brand" }] }]
        },
        {
          start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /əˈtʃiːvd/", translation: "已实现",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "achieved" }] }]
        },
        {
          start: 6, end: 8, label: "宾语", phonetic: "/ˈræpɪd/ /loʊ-kɒst/ /ɪkˈspænʃən/", translation: "低成本的快速扩张",
          subComponents: [{ startIndex: 0, words: [{ word: "rapid" }, { word: "low-cost" }, { word: "expansion" }] }]
        },
        {
          start: 9, end: 12, label: "方式状语", phonetic: "/θruː/ /fuːd/ /dɪˈlɪvəri/ /ˈplætfɔːrmz/", translation: "通过外卖平台",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "food" }, { word: "delivery" }, { word: "platforms", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "新业态", text: "ghost kitchen (幽灵厨房), food delivery platform (外卖平台), low-cost expansion (低成本扩张)" } ]
    },
    {
      id: "q_dining_s128",
      chinese: "快闪餐厅在热门地段限时营业，以独特的主题菜单吸引潮流食客",
      english_full: "The pop-up restaurant operates temporarily in prime locations, attracting trend-conscious diners with themed menus.",
      words: [
        { word: "The" }, { word: "pop-up" }, { word: "restaurant" }, { word: "operates" }, { word: "temporarily" }, { word: "in" }, { word: "prime" }, { word: "locations", punctuation: "," }, { word: "attracting" }, { word: "trend-conscious" }, { word: "diners" }, { word: "with" }, { word: "themed" }, { word: "menus", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /pɒp-ʌp/ /ˈrɛstərənt/", translation: "快闪餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pop-up" }, { word: "restaurant" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/ˈɒpəreɪts/ /ˌtɛmpəˈrɛrɪli/ /ɪn/ /praɪm/ /loʊˈkeɪʃənz/", translation: "在热门地段限时营业",
          subComponents: [{ startIndex: 0, words: [{ word: "operates" }, { word: "temporarily" }, { word: "in" }, { word: "prime" }, { word: "locations", punctuation: "," }] }]
        },
        {
          start: 8, end: 13, label: "伴随状语", phonetic: "/əˈtræktɪŋ/ /trɛnd-ˈkɒnʃəs/ /ˈdaɪnərz/ /wɪθ/ /θiːmd/ /ˈmɛnjuːz/", translation: "以主题菜单吸引潮流食客",
          subComponents: [{ startIndex: 0, words: [{ word: "attracting" }, { word: "trend-conscious" }, { word: "diners" }, { word: "with" }, { word: "themed" }, { word: "menus", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮创新", text: "pop-up restaurant (快闪餐厅), prime location (热门地段), trend-conscious (潮流导向的)" } ]
    },
    {
      id: "q_dining_s129",
      chinese: "美食评论家称赞该餐厅将本土风味与国际烹饪技法完美融合",
      english_full: "Food critics praised the restaurant for seamlessly blending indigenous flavors with international culinary techniques.",
      words: [
        { word: "Food" }, { word: "critics" }, { word: "praised" }, { word: "the" }, { word: "restaurant" }, { word: "for" }, { word: "seamlessly" }, { word: "blending" }, { word: "indigenous" }, { word: "flavors" }, { word: "with" }, { word: "international" }, { word: "culinary" }, { word: "techniques", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/fuːd/ /ˈkrɪtɪks/", translation: "美食评论家",
          subComponents: [{ startIndex: 0, words: [{ word: "Food" }, { word: "critics" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/preɪzd/", translation: "称赞",
          subComponents: [{ startIndex: 0, words: [{ word: "praised" }] }]
        },
        {
          start: 3, end: 4, label: "宾语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "该餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "restaurant" }] }]
        },
        {
          start: 5, end: 13, label: "原因状语", phonetic: "/fɔːr/ /ˈsiːmləsli/ /ˈblɛndɪŋ/ /ɪnˈdɪdʒənəs/ /ˈfleɪvərz/ /wɪθ/ /ˌɪntərˈnæʃənəl/ /ˈkʌlɪnəri/ /tɛkˈniːks/", translation: "将本土风味与国际烹饪技法完美融合",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "seamlessly" }, { word: "blending" }, { word: "indigenous" }, { word: "flavors" }, { word: "with" }, { word: "international" }, { word: "culinary" }, { word: "techniques", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "美食评论", text: "food critic (美食评论家), indigenous flavors (本土风味), seamlessly blend (完美融合)" } ]
    },
    {
      id: "q_dining_s130",
      chinese: "餐厅前台团队以专业而体贴的服务显著提升了整体用餐体验",
      english_full: "The front-of-house team significantly enhanced the overall dining experience through professional and attentive service.",
      words: [
        { word: "The" }, { word: "front-of-house" }, { word: "team" }, { word: "significantly" }, { word: "enhanced" }, { word: "the" }, { word: "overall" }, { word: "dining" }, { word: "experience" }, { word: "through" }, { word: "professional" }, { word: "and" }, { word: "attentive" }, { word: "service", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /frʌnt-ɒv-haʊs/ /tiːm/", translation: "餐厅前台团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "front-of-house" }, { word: "team" }] }]
        },
        {
          start: 3, end: 4, label: "谓语", phonetic: "/ˌsɪgnɪfɪkəntli/ /ɪnˈhænst/", translation: "显著提升了",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }, { word: "enhanced" }] }]
        },
        {
          start: 5, end: 8, label: "宾语", phonetic: "/ðə/ /ˌoʊvərˈɔːl/ /ˈdaɪnɪŋ/ /ɪkˈspɪriəns/", translation: "整体用餐体验",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "overall" }, { word: "dining" }, { word: "experience" }] }]
        },
        {
          start: 9, end: 13, label: "方式状语", phonetic: "/θruː/ /prəˈfɛʃənəl/ /ænd/ /əˈtɛntɪv/ /ˈsɜːrvɪs/", translation: "以专业而体贴的服务",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "professional" }, { word: "and" }, { word: "attentive" }, { word: "service", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "服务管理", text: "front-of-house (前台), attentive service (体贴服务), dining experience (用餐体验)" } ]
    },
    {
      id: "q_dining_s131",
      chinese: "这家有机认证餐厅只选用经第三方验证的可持续农产品供应商",
      english_full: "This organically certified restaurant exclusively sources from third-party verified sustainable produce suppliers.",
      words: [
        { word: "This" }, { word: "organically" }, { word: "certified" }, { word: "restaurant" }, { word: "exclusively" }, { word: "sources" }, { word: "from" }, { word: "third-party" }, { word: "verified" }, { word: "sustainable" }, { word: "produce" }, { word: "suppliers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðɪs/ /ɔːrˈgænɪkli/ /ˈsɜːrtɪfaɪd/ /ˈrɛstərənt/", translation: "这家有机认证餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "organically" }, { word: "certified" }, { word: "restaurant" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/ɪkˈskluːsɪvli/ /ˈsɔːrsɪz/", translation: "只选用",
          subComponents: [{ startIndex: 0, words: [{ word: "exclusively" }, { word: "sources" }] }]
        },
        {
          start: 6, end: 11, label: "来源状语", phonetic: "/frɒm/ /θɜːrd-pɑːrti/ /ˈvɛrɪfaɪd/ /səˈsteɪnəbəl/ /ˈprɒduːs/ /səˈplaɪərz/", translation: "经第三方验证的可持续农产品供应商",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "third-party" }, { word: "verified" }, { word: "sustainable" }, { word: "produce" }, { word: "suppliers", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "有机餐饮", text: "organically certified (有机认证), third-party verified (第三方验证), sustainable produce (可持续农产品)" } ]
    },
    {
      id: "q_dining_s132",
      chinese: "餐厅严格执行清真饮食标准，确保所有菜品均符合宗教饮食规范",
      english_full: "The restaurant strictly adheres to halal dietary standards, ensuring all dishes comply with religious dietary requirements.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "strictly" }, { word: "adheres" }, { word: "to" }, { word: "halal" }, { word: "dietary" }, { word: "standards", punctuation: "," }, { word: "ensuring" }, { word: "all" }, { word: "dishes" }, { word: "comply" }, { word: "with" }, { word: "religious" }, { word: "dietary" }, { word: "requirements", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 7, label: "谓语", phonetic: "/ˈstrɪktli/ /ədˈhɪərz/ /tuː/ /həˈlɑːl/ /ˈdaɪɪˌtɛri/ /ˈstændərdz/", translation: "严格执行清真饮食标准",
          subComponents: [{ startIndex: 0, words: [{ word: "strictly" }, { word: "adheres" }, { word: "to" }, { word: "halal" }, { word: "dietary" }, { word: "standards", punctuation: "," }] }]
        },
        {
          start: 8, end: 15, label: "伴随状语", phonetic: "/ɪnˈʃʊərɪŋ/ /ɔːl/ /ˈdɪʃɪz/ /kəmˈplaɪ/ /wɪθ/ /rɪˈlɪdʒəs/ /ˈdaɪɪˌtɛri/ /rɪˈkwaɪərmənts/", translation: "确保所有菜品符合宗教饮食规范",
          subComponents: [{ startIndex: 0, words: [{ word: "ensuring" }, { word: "all" }, { word: "dishes" }, { word: "comply" }, { word: "with" }, { word: "religious" }, { word: "dietary" }, { word: "requirements", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "宗教饮食", text: "halal (清真), dietary standards (饮食标准), comply with (符合)" } ]
    },
    {
      id: "q_dining_s133",
      chinese: "商务午餐通常安排在安静私密的环境，以便进行高效的商业洽谈",
      english_full: "Business lunches are typically held in quiet, private settings to facilitate efficient commercial negotiations.",
      words: [
        { word: "Business" }, { word: "lunches" }, { word: "are" }, { word: "typically" }, { word: "held" }, { word: "in" }, { word: "quiet", punctuation: "," }, { word: "private" }, { word: "settings" }, { word: "to" }, { word: "facilitate" }, { word: "efficient" }, { word: "commercial" }, { word: "negotiations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈbɪznəs/ /ˈlʌntʃɪz/", translation: "商务午餐",
          subComponents: [{ startIndex: 0, words: [{ word: "Business" }, { word: "lunches" }] }]
        },
        {
          start: 2, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /ˈtɪpɪkli/ /hɛld/", translation: "通常安排",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "typically" }, { word: "held" }] }]
        },
        {
          start: 5, end: 8, label: "地点状语", phonetic: "/ɪn/ /ˈkwaɪət/, /ˈpraɪvət/ /ˈsɛtɪŋz/", translation: "在安静私密的环境",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "quiet", punctuation: "," }, { word: "private" }, { word: "settings" }] }]
        },
        {
          start: 9, end: 13, label: "目的状语", phonetic: "/tuː/ /fəˈsɪlɪteɪt/ /ɪˈfɪʃənt/ /kəˈmɜːrʃəl/ /nəˌgoʊʃiˈeɪʃənz/", translation: "以便进行高效的商业洽谈",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "facilitate" }, { word: "efficient" }, { word: "commercial" }, { word: "negotiations", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "商务用餐", text: "business lunch (商务午餐), commercial negotiation (商业洽谈), facilitate (促进/便于)" } ]
    },
    {
      id: "q_dining_s134",
      chinese: "自带酒水需支付开瓶费，具体金额因餐厅档次而异",
      english_full: "Corkage fees apply for bringing your own wine, with amounts varying according to the restaurant's tier.",
      words: [
        { word: "Corkage" }, { word: "fees" }, { word: "apply" }, { word: "for" }, { word: "bringing" }, { word: "your" }, { word: "own" }, { word: "wine", punctuation: "," }, { word: "with" }, { word: "amounts" }, { word: "varying" }, { word: "according" }, { word: "to" }, { word: "the" }, { word: "restaurant's" }, { word: "tier", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈkɔːrkɪdʒ/ /fiːz/", translation: "开瓶费",
          subComponents: [{ startIndex: 0, words: [{ word: "Corkage" }, { word: "fees" }, { word: "apply" }] }]
        },
        {
          start: 2, end: 7, label: "谓语", phonetic: "/əˈplaɪ/ /fɔːr/ /ˈbrɪŋɪŋ/ /jʊər/ /oʊn/ /waɪn/", translation: "适用于自带酒水",
          subComponents: [{ startIndex: 0, words: [{ word: "apply" }, { word: "for" }, { word: "bringing" }, { word: "your" }, { word: "own" }, { word: "wine", punctuation: "," }] }]
        },
        {
          start: 8, end: 15, label: "伴随状语", phonetic: "/wɪθ/ /əˈmaʊnts/ /ˈvɛəriɪŋ/ /əˈkɔːrdɪŋ/ /tuː/ /ðə/ /ˈrɛstərənts/ /tɪər/", translation: "具体金额因餐厅档次而异",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "amounts" }, { word: "varying" }, { word: "according" }, { word: "to" }, { word: "the" }, { word: "restaurant's" }, { word: "tier", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "酒水政策", text: "corkage fee (开瓶费), bring your own wine (自带酒水), tier (档次)" } ]
    },
    {
      id: "q_dining_s135",
      chinese: "每道菜上桌前，主厨都会呈上一道精巧的前菜以唤醒食客的味蕾",
      english_full: "Before each course is served, the chef presents an amuse-bouche to awaken the diners' palates.",
      words: [
        { word: "Before" }, { word: "each" }, { word: "course" }, { word: "is" }, { word: "served", punctuation: "," }, { word: "the" }, { word: "chef" }, { word: "presents" }, { word: "an" }, { word: "amuse-bouche" }, { word: "to" }, { word: "awaken" }, { word: "the" }, { word: "diners'" }, { word: "palates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语从句", phonetic: "/bɪˈfɔːr/ /iːtʃ/ /kɔːrs/ /ɪz/ /sɜːrvd/", translation: "每道菜上桌前",
          subComponents: [{ startIndex: 0, words: [{ word: "Before" }, { word: "each" }, { word: "course" }, { word: "is" }, { word: "served", punctuation: "," }] }]
        },
        {
          start: 5, end: 6, label: "主语", phonetic: "/ðə/ /ʃɛf/", translation: "主厨",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "chef" }] }]
        },
        {
          start: 7, end: 9, label: "谓语+宾语", phonetic: "/prɪˈzɛnts/ /æn/ /əˈmjuːz-buːʃ/", translation: "呈上一道精巧前菜",
          subComponents: [{ startIndex: 0, words: [{ word: "presents" }, { word: "an" }, { word: "amuse-bouche" }] }]
        },
        {
          start: 10, end: 14, label: "目的状语", phonetic: "/tuː/ /əˈweɪkən/ /ðə/ /ˈdaɪnərz/ /ˈpælɪts/", translation: "以唤醒食客的味蕾",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "awaken" }, { word: "the" }, { word: "diners'" }, { word: "palates", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "法餐术语", text: "amuse-bouche (餐前小点), palate (味蕾), course (一道菜)" } ]
    },
    {
      id: "q_dining_s136",
      chinese: "在两道主菜之间，侍者端上了清爽的 sorbet 作为 palate cleanser",
      english_full: "Between the two main courses, the server presented a refreshing sorbet as a palate cleanser.",
      words: [
        { word: "Between" }, { word: "the" }, { word: "two" }, { word: "main" }, { word: "courses", punctuation: "," }, { word: "the" }, { word: "server" }, { word: "presented" }, { word: "a" }, { word: "refreshing" }, { word: "sorbet" }, { word: "as" }, { word: "a" }, { word: "palate" }, { word: "cleanser", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "时间状语", phonetic: "/bɪˈtwiːn/ /ðə/ /tuː/ /meɪn/ /kɔːrsɪz/", translation: "在两道主菜之间",
          subComponents: [{ startIndex: 0, words: [{ word: "Between" }, { word: "the" }, { word: "two" }, { word: "main" }, { word: "courses", punctuation: "," }] }]
        },
        {
          start: 5, end: 6, label: "主语", phonetic: "/ðə/ /ˈsɜːrvər/", translation: "侍者",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "server" }] }]
        },
        {
          start: 7, end: 10, label: "谓语+宾语", phonetic: "/prɪˈzɛntɪd/ /ə/ /rɪˈfrɛʃɪŋ/ /sɔːrˈbeɪ/", translation: "端上清爽的 sorbet",
          subComponents: [{ startIndex: 0, words: [{ word: "presented" }, { word: "a" }, { word: "refreshing" }, { word: "sorbet" }] }]
        },
        {
          start: 11, end: 14, label: "宾语补足语", phonetic: "/æz/ /ə/ /ˈpælɪt/ /ˈklɛnsər/", translation: "作为 palate cleanser",
          subComponents: [{ startIndex: 0, words: [{ word: "as" }, { word: "a" }, { word: "palate" }, { word: "cleanser", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "品鉴流程", text: "palate cleanser ( palate 清口), sorbet (雪葩), main course (主菜)" } ]
    },
    {
      id: "q_dining_s137",
      chinese: "后厨团队在高峰时段依然保持井然有序的 mise en place 工作流",
      english_full: "The back-of-house team maintains an orderly mise en place workflow even during peak service hours.",
      words: [
        { word: "The" }, { word: "back-of-house" }, { word: "team" }, { word: "maintains" }, { word: "an" }, { word: "orderly" }, { word: "mise" }, { word: "en" }, { word: "place" }, { word: "workflow" }, { word: "even" }, { word: "during" }, { word: "peak" }, { word: "service" }, { word: "hours", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /bæk-ɒv-haʊs/ /tiːm/", translation: "后厨团队",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "back-of-house" }, { word: "team" }] }]
        },
        {
          start: 3, end: 9, label: "谓语+宾语", phonetic: "/meɪnˈteɪnz/ /æn/ /ˈɔːrdərli/ /miːz/ /ɒn/ /plɑːs/ /ˈwɜːrkfloʊ/", translation: "保持井然有序的 mise en place 工作流",
          subComponents: [{ startIndex: 0, words: [{ word: "maintains" }, { word: "an" }, { word: "orderly" }, { word: "mise" }, { word: "en" }, { word: "place" }, { word: "workflow" }] }]
        },
        {
          start: 10, end: 14, label: "时间状语", phonetic: "/ˈiːvən/ /ˈdjʊərɪŋ/ /piːk/ /ˈsɜːrvɪs/ /aʊərz/", translation: "即使在高峰服务时段",
          subComponents: [{ startIndex: 0, words: [{ word: "even" }, { word: "during" }, { word: "peak" }, { word: "service" }, { word: "hours", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "厨房术语", text: "mise en place (备料), back-of-house (后厨), peak service hours (高峰服务时段)" } ]
    },
    {
      id: "q_dining_s138",
      chinese: "餐厅通过优化翻台率显著提高了晚餐时段的座位周转效率",
      english_full: "The restaurant significantly improved seat turnover efficiency during dinner service by optimizing table turnover rates.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "significantly" }, { word: "improved" }, { word: "seat" }, { word: "turnover" }, { word: "efficiency" }, { word: "during" }, { word: "dinner" }, { word: "service" }, { word: "by" }, { word: "optimizing" }, { word: "table" }, { word: "turnover" }, { word: "rates", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 6, label: "谓语+宾语", phonetic: "/ˌsɪgnɪfɪkəntli/ /ɪmˈpruːvd/ /siːt/ /ˈtɜːrnoʊvər/ /ɪˈfɪʃənsi/", translation: "显著提高了座位周转效率",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }, { word: "improved" }, { word: "seat" }, { word: "turnover" }, { word: "efficiency" }] }]
        },
        {
          start: 7, end: 9, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˈdɪnər/ /ˈsɜːrvɪs/", translation: "在晚餐时段",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "dinner" }, { word: "service" }] }]
        },
        {
          start: 10, end: 14, label: "方式状语", phonetic: "/baɪ/ /ˈɒptɪmaɪzɪŋ/ /ˈteɪbəl/ /ˈtɜːrnoʊvər/ /reɪts/", translation: "通过优化翻台率",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "optimizing" }, { word: "table" }, { word: "turnover" }, { word: "rates", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "运营效率", text: "table turnover (翻台率), seat turnover (座位周转), dinner service (晚餐时段)" } ]
    },
    {
      id: "q_dining_s139",
      chinese: "欢乐时光时段，酒吧以折扣价提供精选鸡尾酒和小食拼盘",
      english_full: "During happy hour, the bar offers selected cocktails and appetizer platters at discounted prices.",
      words: [
        { word: "During" }, { word: "happy" }, { word: "hour", punctuation: "," }, { word: "the" }, { word: "bar" }, { word: "offers" }, { word: "selected" }, { word: "cocktails" }, { word: "and" }, { word: "appetizer" }, { word: "platters" }, { word: "at" }, { word: "discounted" }, { word: "prices", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /ˈhæpi/ /aʊər/", translation: "欢乐时光时段",
          subComponents: [{ startIndex: 0, words: [{ word: "During" }, { word: "happy" }, { word: "hour", punctuation: "," }] }]
        },
        {
          start: 3, end: 4, label: "主语", phonetic: "/ðə/ /bɑːr/", translation: "酒吧",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "bar" }] }]
        },
        {
          start: 5, end: 10, label: "谓语+宾语", phonetic: "/ˈɒfərz/ /sɪˈlɛktɪd/ /ˈkɒkteɪlz/ /ænd/ /ˈæpɪˌtaɪzər/ /ˈplætərz/", translation: "提供精选鸡尾酒和小食拼盘",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }, { word: "selected" }, { word: "cocktails" }, { word: "and" }, { word: "appetizer" }, { word: "platters" }] }]
        },
        {
          start: 11, end: 13, label: "方式状语", phonetic: "/æt/ /dɪsˈkaʊntɪd/ /ˈpraɪsɪz/", translation: "以折扣价",
          subComponents: [{ startIndex: 0, words: [{ word: "at" }, { word: "discounted" }, { word: "prices", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "酒吧促销", text: "happy hour (欢乐时光), appetizer platter (小食拼盘), discounted price (折扣价)" } ]
    },
    {
      id: "q_dining_s140",
      chinese: "这家第三波精品咖啡馆以单一产地咖啡豆和精准萃取工艺著称",
      english_full: "This third-wave specialty coffee shop is renowned for single-origin beans and precision extraction techniques.",
      words: [
        { word: "This" }, { word: "third-wave" }, { word: "specialty" }, { word: "coffee" }, { word: "shop" }, { word: "is" }, { word: "renowned" }, { word: "for" }, { word: "single-origin" }, { word: "beans" }, { word: "and" }, { word: "precision" }, { word: "extraction" }, { word: "techniques", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðɪs/ /θɜːrd-weɪv/ /ˈspɛʃəlti/ /ˈkɒfi/ /ʃɒp/", translation: "这家第三波精品咖啡馆",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "third-wave" }, { word: "specialty" }, { word: "coffee" }, { word: "shop" }] }]
        },
        {
          start: 5, end: 7, label: "谓语", phonetic: "/ɪz/ /rɪˈnaʊnd/ /fɔːr/", translation: "以…著称",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "renowned" }, { word: "for" }] }]
        },
        {
          start: 8, end: 13, label: "原因状语", phonetic: "/ˈsɪŋgəl-ˈɒrɪdʒɪn/ /biːnz/ /ænd/ /prɪˈsɪʒən/ /ɪkˈstrækʃən/ /tɛkˈniːks/", translation: "单一产地咖啡豆和精准萃取工艺",
          subComponents: [{ startIndex: 0, words: [{ word: "single-origin" }, { word: "beans" }, { word: "and" }, { word: "precision" }, { word: "extraction" }, { word: "techniques", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "咖啡文化", text: "third-wave coffee (第三波咖啡), single-origin (单一产地), precision extraction (精准萃取)" } ]
    },
    {
      id: "q_dining_s141",
      chinese: "餐车文化在城市街头蓬勃发展，为上班族提供快捷而优质的餐食选择",
      english_full: "Food truck culture is thriving on city streets, offering office workers quick yet quality meal options.",
      words: [
        { word: "Food" }, { word: "truck" }, { word: "culture" }, { word: "is" }, { word: "thriving" }, { word: "on" }, { word: "city" }, { word: "streets", punctuation: "," }, { word: "offering" }, { word: "office" }, { word: "workers" }, { word: "quick" }, { word: "yet" }, { word: "quality" }, { word: "meal" }, { word: "options", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/fuːd/ /trʌk/ /ˈkʌltʃər/", translation: "餐车文化",
          subComponents: [{ startIndex: 0, words: [{ word: "Food" }, { word: "truck" }, { word: "culture" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/ɪz/ /ˈθraɪvɪŋ/ /ɒn/ /ˈsɪti/ /striːts/", translation: "在城市街头蓬勃发展",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "thriving" }, { word: "on" }, { word: "city" }, { word: "streets", punctuation: "," }] }]
        },
        {
          start: 8, end: 15, label: "伴随状语", phonetic: "/ˈɒfərɪŋ/ /ˈɒfɪs/ /ˈwɜːrkərz/ /kwɪk/ /jɛt/ /ˈkwɒlɪti/ /miːl/ /ˈɒpʃənz/", translation: "为上班族提供快捷而优质的餐食选择",
          subComponents: [{ startIndex: 0, words: [{ word: "offering" }, { word: "office" }, { word: "workers" }, { word: "quick" }, { word: "yet" }, { word: "quality" }, { word: "meal" }, { word: "options", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "街头餐饮", text: "food truck (餐车), thriving (蓬勃发展), meal options (餐食选择)" } ]
    },
    {
      id: "q_dining_s142",
      chinese: "私厨晚宴俱乐部为会员提供独家定制的多道式私房菜体验",
      english_full: "The supper club provides members with an exclusive customized multi-course private dining experience.",
      words: [
        { word: "The" }, { word: "supper" }, { word: "club" }, { word: "provides" }, { word: "members" }, { word: "with" }, { word: "an" }, { word: "exclusive" }, { word: "customized" }, { word: "multi-course" }, { word: "private" }, { word: "dining" }, { word: "experience", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsʌpər/ /klʌb/", translation: "私厨晚宴俱乐部",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "supper" }, { word: "club" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪdz/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provides" }] }]
        },
        {
          start: 4, end: 4, label: "间接宾语", phonetic: "/ˈmɛmbərz/", translation: "会员",
          subComponents: [{ startIndex: 0, words: [{ word: "members" }] }]
        },
        {
          start: 5, end: 12, label: "直接宾语", phonetic: "/wɪθ/ /æn/ /ɪkˈskluːsɪv/ /ˈkʌstəmaɪzd/ /ˌmʌlti-kɔːrs/ /ˈpraɪvət/ /ˈdaɪnɪŋ/ /ɪkˈspɪriəns/", translation: "独家定制的多道式私房菜体验",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "an" }, { word: "exclusive" }, { word: "customized" }, { word: "multi-course" }, { word: "private" }, { word: "dining" }, { word: "experience", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "私厨餐饮", text: "supper club (晚宴俱乐部), customized (定制的), private dining (私房菜/私宴)" } ]
    },
    {
      id: "q_dining_s143",
      chinese: "餐厅厨房严格执行 HACCP 食品安全管理体系，确保每一环节可追溯",
      english_full: "The restaurant kitchen strictly implements HACCP food safety management to ensure traceability at every stage.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "kitchen" }, { word: "strictly" }, { word: "implements" }, { word: "HACCP" }, { word: "food" }, { word: "safety" }, { word: "management" }, { word: "to" }, { word: "ensure" }, { word: "traceability" }, { word: "at" }, { word: "every" }, { word: "stage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/ /ˈkɪtʃən/", translation: "餐厅厨房",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }, { word: "kitchen" }] }]
        },
        {
          start: 3, end: 8, label: "谓语+宾语", phonetic: "/ˈstrɪktli/ /ˈɪmplɪmənts/ /ˈheɪsəp/ /fuːd/ /ˈseɪfti/ /ˈmænɪdʒmənt/", translation: "严格执行 HACCP 食品安全管理",
          subComponents: [{ startIndex: 0, words: [{ word: "strictly" }, { word: "implements" }, { word: "HACCP" }, { word: "food" }, { word: "safety" }, { word: "management" }] }]
        },
        {
          start: 9, end: 14, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˌtreɪsəˈbɪlɪti/ /æt/ /ˈɛvri/ /steɪdʒ/", translation: "确保每一环节可追溯",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "traceability" }, { word: "at" }, { word: "every" }, { word: "stage", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "食品安全", text: "HACCP (危害分析关键控制点), traceability (可追溯性), food safety management (食品安全管理)" } ]
    },
    {
      id: "q_dining_s144",
      chinese: "近期食源性疾病暴发事件促使监管机构加强了对餐饮业的突击检查",
      english_full: "A recent foodborne illness outbreak has prompted regulators to intensify surprise inspections of the food service industry.",
      words: [
        { word: "A" }, { word: "recent" }, { word: "foodborne" }, { word: "illness" }, { word: "outbreak" }, { word: "has" }, { word: "prompted" }, { word: "regulators" }, { word: "to" }, { word: "intensify" }, { word: "surprise" }, { word: "inspections" }, { word: "of" }, { word: "the" }, { word: "food" }, { word: "service" }, { word: "industry", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ə/ /ˈriːsənt/ /ˈfuːdbɔːrn/ /ˈɪlnəs/ /ˈaʊtbreɪk/", translation: "近期食源性疾病暴发事件",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "recent" }, { word: "foodborne" }, { word: "illness" }, { word: "outbreak" }] }]
        },
        {
          start: 5, end: 6, label: "谓语(现完)", phonetic: "/hæz/ /ˈprɒmptɪd/", translation: "已促使",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "prompted" }] }]
        },
        {
          start: 7, end: 7, label: "宾语", phonetic: "/ˈrɛgjʊleɪtərz/", translation: "监管机构",
          subComponents: [{ startIndex: 0, words: [{ word: "regulators" }] }]
        },
        {
          start: 8, end: 16, label: "宾补", phonetic: "/tuː/ /ɪnˈtɛnsɪfaɪ/ /sərˈpraɪz/ /ɪnˈspɛkʃənz/ /ɒv/ /ðə/ /fuːd/ /ˈsɜːrvɪs/ /ˈɪndəstri/", translation: "加强对餐饮业的突击检查",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "intensify" }, { word: "surprise" }, { word: "inspections" }, { word: "of" }, { word: "the" }, { word: "food" }, { word: "service" }, { word: "industry", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "公共卫生", text: "foodborne illness (食源性疾病), outbreak (暴发), surprise inspection (突击检查)" } ]
    },
    {
      id: "q_dining_s145",
      chinese: "餐厅通过菜单工程分析，策略性地调整了高利润菜品的展示位置",
      english_full: "Through menu engineering analysis, the restaurant strategically repositioned high-margin dishes on the menu layout.",
      words: [
        { word: "Through" }, { word: "menu" }, { word: "engineering" }, { word: "analysis", punctuation: "," }, { word: "the" }, { word: "restaurant" }, { word: "strategically" }, { word: "repositioned" }, { word: "high-margin" }, { word: "dishes" }, { word: "on" }, { word: "the" }, { word: "menu" }, { word: "layout", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "方式状语", phonetic: "/θruː/ /ˈmɛnjuː/ /ˌɛndʒɪˈnɪərɪŋ/ /əˈnælɪsɪs/", translation: "通过菜单工程分析",
          subComponents: [{ startIndex: 0, words: [{ word: "Through" }, { word: "menu" }, { word: "engineering" }, { word: "analysis", punctuation: "," }] }]
        },
        {
          start: 4, end: 5, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "restaurant" }] }]
        },
        {
          start: 6, end: 7, label: "谓语", phonetic: "/strəˈtiːdʒɪkli/ /ˌriːpəˈzɪʃənd/", translation: "策略性地调整了位置",
          subComponents: [{ startIndex: 0, words: [{ word: "strategically" }, { word: "repositioned" }] }]
        },
        {
          start: 8, end: 13, label: "宾语", phonetic: "/haɪ-ˈmɑːrdʒɪn/ /ˈdɪʃɪz/ /ɒn/ /ðə/ /ˈmɛnjuː/ /ˈleɪaʊt/", translation: "菜单上高利润菜品的展示位置",
          subComponents: [{ startIndex: 0, words: [{ word: "high-margin" }, { word: "dishes" }, { word: "on" }, { word: "the" }, { word: "menu" }, { word: "layout", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "菜单策略", text: "menu engineering (菜单工程), high-margin dish (高利润菜品), menu layout (菜单布局)" } ]
    },
    {
      id: "q_dining_s146",
      chinese: "餐厅将食材成本率控制在百分之三十以内，以维持健康的盈利水平",
      english_full: "The restaurant keeps its food cost percentage below thirty percent to maintain healthy profitability levels.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "keeps" }, { word: "its" }, { word: "food" }, { word: "cost" }, { word: "percentage" }, { word: "below" }, { word: "thirty" }, { word: "percent" }, { word: "to" }, { word: "maintain" }, { word: "healthy" }, { word: "profitability" }, { word: "levels", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 9, label: "谓语+宾语", phonetic: "/kiːps/ /ɪts/ /fuːd/ /kɒst/ /pərˈsɛntɪdʒ/ /bɪˈloʊ/ /ˈθɜːrti/ /pərˈsɛnt/", translation: "将食材成本率控制在百分之三十以内",
          subComponents: [{ startIndex: 0, words: [{ word: "keeps" }, { word: "its" }, { word: "food" }, { word: "cost" }, { word: "percentage" }, { word: "below" }, { word: "thirty" }, { word: "percent" }] }]
        },
        {
          start: 10, end: 14, label: "目的状语", phonetic: "/tuː/ /meɪnˈteɪn/ /ˈhɛlθi/ /ˌprɒfɪtəˈbɪlɪti/ /ˈlɛvəlz/", translation: "以维持健康的盈利水平",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "maintain" }, { word: "healthy" }, { word: "profitability" }, { word: "levels", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "成本管理", text: "food cost percentage (食材成本率), profitability (盈利能力), maintain (维持)" } ]
    },
    {
      id: "q_dining_s147",
      chinese: "每可用座位小时收入是衡量高端餐厅运营效率的关键绩效指标",
      english_full: "Revenue per available seat hour is a key performance indicator for measuring fine dining operational efficiency.",
      words: [
        { word: "Revenue" }, { word: "per" }, { word: "available" }, { word: "seat" }, { word: "hour" }, { word: "is" }, { word: "a" }, { word: "key" }, { word: "performance" }, { word: "indicator" }, { word: "for" }, { word: "measuring" }, { word: "fine" }, { word: "dining" }, { word: "operational" }, { word: "efficiency", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ˈrɛvənjuː/ /pər/ /əˈveɪləbəl/ /siːt/ /aʊər/", translation: "每可用座位小时收入",
          subComponents: [{ startIndex: 0, words: [{ word: "Revenue" }, { word: "per" }, { word: "available" }, { word: "seat" }, { word: "hour" }] }]
        },
        {
          start: 5, end: 9, label: "系表结构", phonetic: "/ɪz/ /ə/ /kiː/ /pərˈfɔːrməns/ /ˈɪndɪkeɪtər/", translation: "是关键绩效指标",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "a" }, { word: "key" }, { word: "performance" }, { word: "indicator" }] }]
        },
        {
          start: 10, end: 15, label: "目的状语", phonetic: "/fɔːr/ /ˈmɛʒərɪŋ/ /faɪn/ /ˈdaɪnɪŋ/ /ˌɒpəˈreɪʃənəl/ /ɪˈfɪʃənsi/", translation: "衡量高端餐厅运营效率",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "measuring" }, { word: "fine" }, { word: "dining" }, { word: "operational" }, { word: "efficiency", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮 KPI", text: "RevPASH (每可用座位小时收入), KPI (关键绩效指标), fine dining (高端餐饮)" } ]
    },
    {
      id: "q_dining_s148",
      chinese: "餐厅引入了集成式 POS 系统，实现了点餐、结账与库存管理的无缝对接",
      english_full: "The restaurant deployed an integrated POS system, enabling seamless coordination of ordering, billing, and inventory management.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "deployed" }, { word: "an" }, { word: "integrated" }, { word: "POS" }, { word: "system", punctuation: "," }, { word: "enabling" }, { word: "seamless" }, { word: "coordination" }, { word: "of" }, { word: "ordering", punctuation: "," }, { word: "billing", punctuation: "," }, { word: "and" }, { word: "inventory" }, { word: "management", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 6, label: "谓语+宾语", phonetic: "/dɪˈplɔɪd/ /æn/ /ˈɪntɪgreɪtɪd/ /piː-oʊ-ɛs/ /ˈsɪstəm/", translation: "引入集成式 POS 系统",
          subComponents: [{ startIndex: 0, words: [{ word: "deployed" }, { word: "an" }, { word: "integrated" }, { word: "POS" }, { word: "system", punctuation: "," }] }]
        },
        {
          start: 7, end: 15, label: "结果状语", phonetic: "/ɪˈneɪblɪŋ/ /ˈsiːmləs/ /koʊˌɔːrdɪˈneɪʃən/ /ɒv/ /ˈɔːrdərɪŋ/, /ˈbɪlɪŋ/, /ænd/ /ˈɪnvəntɔːri/ /ˈmænɪdʒmənt/", translation: "实现点餐、结账与库存管理无缝对接",
          subComponents: [{ startIndex: 0, words: [{ word: "enabling" }, { word: "seamless" }, { word: "coordination" }, { word: "of" }, { word: "ordering", punctuation: "," }, { word: "billing", punctuation: "," }, { word: "and" }, { word: "inventory" }, { word: "management", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮科技", text: "POS system (销售时点系统), inventory management (库存管理), seamless coordination (无缝对接)" } ]
    },
    {
      id: "q_dining_s149",
      chinese: "会员忠诚度计划通过积分奖励机制有效提升了回头客的消费频率",
      english_full: "The loyalty program effectively increased repeat customer visit frequency through a points-based reward mechanism.",
      words: [
        { word: "The" }, { word: "loyalty" }, { word: "program" }, { word: "effectively" }, { word: "increased" }, { word: "repeat" }, { word: "customer" }, { word: "visit" }, { word: "frequency" }, { word: "through" }, { word: "a" }, { word: "points-based" }, { word: "reward" }, { word: "mechanism", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈlɔɪəlti/ /ˈproʊgræm/", translation: "会员忠诚度计划",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "loyalty" }, { word: "program" }] }]
        },
        {
          start: 3, end: 8, label: "谓语+宾语", phonetic: "/ɪˈfɛktɪvli/ /ɪnˈkriːst/ /rɪˈpiːt/ /ˈkʌstəmər/ /ˈvɪzɪt/ /ˈfriːkwənsi/", translation: "有效提升了回头客消费频率",
          subComponents: [{ startIndex: 0, words: [{ word: "effectively" }, { word: "increased" }, { word: "repeat" }, { word: "customer" }, { word: "visit" }, { word: "frequency" }] }]
        },
        {
          start: 9, end: 13, label: "方式状语", phonetic: "/θruː/ /ə/ /pɔɪnts-beɪst/ /rɪˈwɔːrd/ /ˈmɛkənɪzəm/", translation: "通过积分奖励机制",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "a" }, { word: "points-based" }, { word: "reward" }, { word: "mechanism", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "客户运营", text: "loyalty program (忠诚度计划), repeat customer (回头客), points-based reward (积分奖励)" } ]
    },
    {
      id: "q_dining_s150",
      chinese: "在线评价平台对餐厅的声誉和客流量产生了深远而直接的影响",
      english_full: "Online review platforms have exerted a profound and direct impact on restaurant reputation and foot traffic.",
      words: [
        { word: "Online" }, { word: "review" }, { word: "platforms" }, { word: "have" }, { word: "exerted" }, { word: "a" }, { word: "profound" }, { word: "and" }, { word: "direct" }, { word: "impact" }, { word: "on" }, { word: "restaurant" }, { word: "reputation" }, { word: "and" }, { word: "foot" }, { word: "traffic", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌɒnˈlaɪn/ /rɪˈvjuː/ /ˈplætfɔːrmz/", translation: "在线评价平台",
          subComponents: [{ startIndex: 0, words: [{ word: "Online" }, { word: "review" }, { word: "platforms" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(现完)", phonetic: "/hæv/ /ɪgˈzɜːrtɪd/", translation: "已产生",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "exerted" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/ə/ /prəˈfaʊnd/ /ænd/ /dɪˈrɛkt/ /ˈɪmpækt/", translation: "深远而直接的影响",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "profound" }, { word: "and" }, { word: "direct" }, { word: "impact" }] }]
        },
        {
          start: 10, end: 15, label: "对象状语", phonetic: "/ɒn/ /ˈrɛstərənt/ /ˌrɛpjuˈteɪʃən/ /ænd/ /fʊt/ /ˈtræfɪk/", translation: "对餐厅声誉和客流量",
          subComponents: [{ startIndex: 0, words: [{ word: "on" }, { word: "restaurant" }, { word: "reputation" }, { word: "and" }, { word: "foot" }, { word: "traffic", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "数字营销", text: "online review platform (在线评价平台), foot traffic (客流量), reputation (声誉)" } ]
    },
    {
      id: "q_dining_s151",
      chinese: "餐厅与美食博主合作，通过社交媒体营销显著扩大了品牌知名度",
      english_full: "The restaurant partnered with food influencers to significantly expand brand awareness through social media marketing.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "partnered" }, { word: "with" }, { word: "food" }, { word: "influencers" }, { word: "to" }, { word: "significantly" }, { word: "expand" }, { word: "brand" }, { word: "awareness" }, { word: "through" }, { word: "social" }, { word: "media" }, { word: "marketing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/ˈpɑːrtnərd/ /wɪθ/ /fuːd/ /ˈɪnfluənsərz/", translation: "与美食博主合作",
          subComponents: [{ startIndex: 0, words: [{ word: "partnered" }, { word: "with" }, { word: "food" }, { word: "influencers" }] }]
        },
        {
          start: 6, end: 10, label: "目的状语", phonetic: "/tuː/ /ˌsɪgnɪfɪkəntli/ /ɪkˈspænd/ /brænd/ /əˈwɛrnəs/", translation: "显著扩大品牌知名度",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "significantly" }, { word: "expand" }, { word: "brand" }, { word: "awareness" }] }]
        },
        {
          start: 11, end: 14, label: "方式状语", phonetic: "/θruː/ /ˈsoʊʃəl/ /ˈmiːdiə/ /ˈmɑːrkɪtɪŋ/", translation: "通过社交媒体营销",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "social" }, { word: "media" }, { word: "marketing", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "网红营销", text: "food influencer (美食博主), brand awareness (品牌知名度), social media marketing (社交媒体营销)" } ]
    },
    {
      id: "q_dining_s152",
      chinese: "主厨精心设计的摆盘极具视觉冲击力，非常适合在社交媒体上传播",
      english_full: "The chef's meticulously designed plating is highly photogenic and ideal for social media sharing.",
      words: [
        { word: "The" }, { word: "chef's" }, { word: "meticulously" }, { word: "designed" }, { word: "plating" }, { word: "is" }, { word: "highly" }, { word: "photogenic" }, { word: "and" }, { word: "ideal" }, { word: "for" }, { word: "social" }, { word: "media" }, { word: "sharing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ʃɛfs/ /məˈtɪkjʊləsli/ /dɪˈzaɪnd/ /ˈpleɪtɪŋ/", translation: "主厨精心设计的摆盘",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chef's" }, { word: "meticulously" }, { word: "designed" }, { word: "plating" }] }]
        },
        {
          start: 5, end: 9, label: "系表结构", phonetic: "/ɪz/ /ˈhaɪli/ /ˌfoʊtoʊˈdʒɛnɪk/ /ænd/ /aɪˈdiːəl/", translation: "极具视觉冲击力且非常适合",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "highly" }, { word: "photogenic" }, { word: "and" }, { word: "ideal" }] }]
        },
        {
          start: 10, end: 13, label: "状语", phonetic: "/fɔːr/ /ˈsoʊʃəl/ /ˈmiːdiə/ /ˈʃɛərɪŋ/", translation: "在社交媒体上传播",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "social" }, { word: "media" }, { word: "sharing", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "视觉营销", text: "plating (摆盘), photogenic (上镜的/适合拍照的), social media sharing (社交媒体传播)" } ]
    },
    {
      id: "q_dining_s153",
      chinese: "关于融合菜是否尊重原文化语境的争论在美食界引发了广泛讨论",
      english_full: "The debate over whether fusion cuisine respects original cultural contexts has sparked widespread discussion in the culinary world.",
      words: [
        { word: "The" }, { word: "debate" }, { word: "over" }, { word: "whether" }, { word: "fusion" }, { word: "cuisine" }, { word: "respects" }, { word: "original" }, { word: "cultural" }, { word: "contexts" }, { word: "has" }, { word: "sparked" }, { word: "widespread" }, { word: "discussion" }, { word: "in" }, { word: "the" }, { word: "culinary" }, { word: "world", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 9, label: "主语(从句)", phonetic: "/ðə/ /dɪˈbeɪt/ /ˈoʊvər/ /ˈwɛðər/ /ˈfjuːʒən/ /kwɪˈziːn/ /rɪˈspɛkts/ /əˈrɪdʒənəl/ /ˈkʌltʃərəl/ /ˈkɒntɛksts/", translation: "关于融合菜是否尊重原文化语境的争论",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "debate" }, { word: "over" }, { word: "whether" }, { word: "fusion" }, { word: "cuisine" }, { word: "respects" }, { word: "original" }, { word: "cultural" }, { word: "contexts" }] }]
        },
        {
          start: 10, end: 11, label: "谓语(现完)", phonetic: "/hæz/ /spɑːrkt/", translation: "已引发",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "sparked" }] }]
        },
        {
          start: 12, end: 17, label: "宾语", phonetic: "/ˈwaɪdsprɛd/ /dɪˈskʌʃən/ /ɪn/ /ðə/ /ˈkʌlɪnəri/ /wɜːrld/", translation: "美食界的广泛讨论",
          subComponents: [{ startIndex: 0, words: [{ word: "widespread" }, { word: "discussion" }, { word: "in" }, { word: "the" }, { word: "culinary" }, { word: "world", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "文化议题", text: "fusion cuisine (融合菜), cultural context (文化语境), culinary world (美食界)" } ]
    },
    {
      id: "q_dining_s154",
      chinese: "这家餐厅获得了米其林必比登推介，以高性价比的出色料理而闻名",
      english_full: "The restaurant earned a Michelin Bib Gourmand designation, renowned for outstanding cuisine at reasonable prices.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "earned" }, { word: "a" }, { word: "Michelin" }, { word: "Bib" }, { word: "Gourmand" }, { word: "designation", punctuation: "," }, { word: "renowned" }, { word: "for" }, { word: "outstanding" }, { word: "cuisine" }, { word: "at" }, { word: "reasonable" }, { word: "prices", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "这家餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 7, label: "谓语+宾语", phonetic: "/ɜːrnd/ /ə/ /ˈmɪʃəlɪn/ /bɪb/ /gʊəˈmɒnd/ /ˌdɛzɪgˈneɪʃən/", translation: "获得米其林必比登推介",
          subComponents: [{ startIndex: 0, words: [{ word: "earned" }, { word: "a" }, { word: "Michelin" }, { word: "Bib" }, { word: "Gourmand" }, { word: "designation", punctuation: "," }] }]
        },
        {
          start: 8, end: 14, label: "伴随状语", phonetic: "/rɪˈnaʊnd/ /fɔːr/ /aʊtˈstændɪŋ/ /kwɪˈziːn/ /æt/ /ˈriːzənəbəl/ /ˈpraɪsɪz/", translation: "以高性价比的出色料理而闻名",
          subComponents: [{ startIndex: 0, words: [{ word: "renowned" }, { word: "for" }, { word: "outstanding" }, { word: "cuisine" }, { word: "at" }, { word: "reasonable" }, { word: "prices", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "米其林体系", text: "Bib Gourmand (必比登推介), designation (称号), reasonable price (合理价格)" } ]
    },
    {
      id: "q_dining_s155",
      chinese: "行政总厨因其对本土饮食文化的杰出贡献而荣获詹姆斯·比尔德奖",
      english_full: "The executive chef received a James Beard Award for outstanding contributions to indigenous culinary heritage.",
      words: [
        { word: "The" }, { word: "executive" }, { word: "chef" }, { word: "received" }, { word: "a" }, { word: "James" }, { word: "Beard" }, { word: "Award" }, { word: "for" }, { word: "outstanding" }, { word: "contributions" }, { word: "to" }, { word: "indigenous" }, { word: "culinary" }, { word: "heritage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ɪgˈzɛkjʊtɪv/ /ʃɛf/", translation: "行政总厨",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "executive" }, { word: "chef" }] }]
        },
        {
          start: 3, end: 7, label: "谓语+宾语", phonetic: "/rɪˈsiːvd/ /ə/ /dʒeɪmz/ /bɪərd/ /əˈwɔːrd/", translation: "荣获詹姆斯·比尔德奖",
          subComponents: [{ startIndex: 0, words: [{ word: "received" }, { word: "a" }, { word: "James" }, { word: "Beard" }, { word: "Award" }] }]
        },
        {
          start: 8, end: 14, label: "原因状语", phonetic: "/fɔːr/ /aʊtˈstændɪŋ/ /ˌkɒntrɪˈbjuːʃənz/ /tuː/ /ɪnˈdɪdʒənəs/ /ˈkʌlɪnəri/ /ˈhɛrɪtɪdʒ/", translation: "因对本土饮食文化的杰出贡献",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "outstanding" }, { word: "contributions" }, { word: "to" }, { word: "indigenous" }, { word: "culinary" }, { word: "heritage", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮荣誉", text: "James Beard Award (詹姆斯·比尔德奖), culinary heritage (饮食文化遗产), indigenous (本土的)" } ]
    },
    {
      id: "q_dining_s156",
      chinese: "美食旅游已成为推动目的地经济的重要引擎，吸引了大量国际游客",
      english_full: "Culinary tourism has become a major economic driver for destinations, attracting large numbers of international visitors.",
      words: [
        { word: "Culinary" }, { word: "tourism" }, { word: "has" }, { word: "become" }, { word: "a" }, { word: "major" }, { word: "economic" }, { word: "driver" }, { word: "for" }, { word: "destinations", punctuation: "," }, { word: "attracting" }, { word: "large" }, { word: "numbers" }, { word: "of" }, { word: "international" }, { word: "visitors", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈkʌlɪnəri/ /ˈtʊərɪzəm/", translation: "美食旅游",
          subComponents: [{ startIndex: 0, words: [{ word: "Culinary" }, { word: "tourism" }] }]
        },
        {
          start: 2, end: 9, label: "谓语(现完)", phonetic: "/hæz/ /bɪˈkʌm/ /ə/ /ˈmeɪdʒər/ /ˌiːkəˈnɒmɪk/ /ˈdraɪvər/ /fɔːr/ /ˌdɛstɪˈneɪʃənz/", translation: "已成为推动目的地经济的重要引擎",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "become" }, { word: "a" }, { word: "major" }, { word: "economic" }, { word: "driver" }, { word: "for" }, { word: "destinations", punctuation: "," }] }]
        },
        {
          start: 10, end: 15, label: "伴随状语", phonetic: "/əˈtræktɪŋ/ /lɑːrdʒ/ /ˈnʌmbərz/ /ɒv/ /ˌɪntərˈnæʃənəl/ /ˈvɪzɪtərz/", translation: "吸引了大量国际游客",
          subComponents: [{ startIndex: 0, words: [{ word: "attracting" }, { word: "large" }, { word: "numbers" }, { word: "of" }, { word: "international" }, { word: "visitors", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "美食旅游", text: "culinary tourism (美食旅游), economic driver (经济引擎), international visitor (国际游客)" } ]
    },
    {
      id: "q_dining_s157",
      chinese: "年度美食节汇聚了来自世界各地的顶尖厨师和美食爱好者",
      english_full: "The annual food festival brings together top chefs and gastronomy enthusiasts from around the world.",
      words: [
        { word: "The" }, { word: "annual" }, { word: "food" }, { word: "festival" }, { word: "brings" }, { word: "together" }, { word: "top" }, { word: "chefs" }, { word: "and" }, { word: "gastronomy" }, { word: "enthusiasts" }, { word: "from" }, { word: "around" }, { word: "the" }, { word: "world", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈænjuəl/ /fuːd/ /ˈfɛstɪvəl/", translation: "年度美食节",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "annual" }, { word: "food" }, { word: "festival" }] }]
        },
        {
          start: 4, end: 5, label: "谓语", phonetic: "/brɪŋz/ /təˈgɛðər/", translation: "汇聚",
          subComponents: [{ startIndex: 0, words: [{ word: "brings" }, { word: "together" }] }]
        },
        {
          start: 6, end: 10, label: "宾语", phonetic: "/tɒp/ /ʃɛfs/ /ænd/ /gæˈstrɒnəmi/ /ɪnˈθjuːziæsts/", translation: "顶尖厨师和美食爱好者",
          subComponents: [{ startIndex: 0, words: [{ word: "top" }, { word: "chefs" }, { word: "and" }, { word: "gastronomy" }, { word: "enthusiasts" }] }]
        },
        {
          start: 11, end: 14, label: "来源状语", phonetic: "/frɒm/ /əˈraʊnd/ /ðə/ /wɜːrld/", translation: "来自世界各地",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "around" }, { word: "the" }, { word: "world", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "美食活动", text: "food festival (美食节), gastronomy enthusiast (美食爱好者), bring together (汇聚)" } ]
    },
    {
      id: "q_dining_s158",
      chinese: "烹饪大赛的评委团由多位米其林星级主厨和知名美食评论家组成",
      english_full: "The cooking competition jury comprises multiple Michelin-starred chefs and renowned food critics.",
      words: [
        { word: "The" }, { word: "cooking" }, { word: "competition" }, { word: "jury" }, { word: "comprises" }, { word: "multiple" }, { word: "Michelin-starred" }, { word: "chefs" }, { word: "and" }, { word: "renowned" }, { word: "food" }, { word: "critics", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈkʊkɪŋ/ /ˌkɒmpəˈtɪʃən/ /ˈdʒʊəri/", translation: "烹饪大赛的评委团",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "cooking" }, { word: "competition" }, { word: "jury" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kəmˈpraɪzɪz/", translation: "由…组成",
          subComponents: [{ startIndex: 0, words: [{ word: "comprises" }] }]
        },
        {
          start: 5, end: 11, label: "宾语", phonetic: "/ˈmʌltɪpəl/ /ˈmɪʃəlɪn-stɑːrd/ /ʃɛfs/ /ænd/ /rɪˈnaʊnd/ /fuːd/ /ˈkrɪtɪks/", translation: "多位米其林星级主厨和知名美食评论家",
          subComponents: [{ startIndex: 0, words: [{ word: "multiple" }, { word: "Michelin-starred" }, { word: "chefs" }, { word: "and" }, { word: "renowned" }, { word: "food" }, { word: "critics", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "烹饪赛事", text: "jury (评委团), comprise (由…组成), Michelin-starred chef (米其林星级主厨)" } ]
    },
    {
      id: "q_dining_s159",
      chinese: "餐食订阅服务为忙碌的都市白领提供每周配送的健康定制套餐",
      english_full: "Meal subscription services provide busy urban professionals with weekly deliveries of customized healthy meal kits.",
      words: [
        { word: "Meal" }, { word: "subscription" }, { word: "services" }, { word: "provide" }, { word: "busy" }, { word: "urban" }, { word: "professionals" }, { word: "with" }, { word: "weekly" }, { word: "deliveries" }, { word: "of" }, { word: "customized" }, { word: "healthy" }, { word: "meal" }, { word: "kits", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/miːl/ /səbˈskrɪpʃən/ /ˈsɜːrvɪsɪz/", translation: "餐食订阅服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Meal" }, { word: "subscription" }, { word: "services" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 4, end: 6, label: "间接宾语", phonetic: "/ˈbɪzi/ /ˈɜːrbən/ /prəˈfɛʃənəlz/", translation: "忙碌的都市白领",
          subComponents: [{ startIndex: 0, words: [{ word: "busy" }, { word: "urban" }, { word: "professionals" }] }]
        },
        {
          start: 7, end: 14, label: "直接宾语", phonetic: "/wɪθ/ /ˈwiːkli/ /dɪˈlɪvəriz/ /ɒv/ /ˈkʌstəmaɪzd/ /ˈhɛlθi/ /miːl/ /kɪts/", translation: "每周配送的健康定制套餐",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "weekly" }, { word: "deliveries" }, { word: "of" }, { word: "customized" }, { word: "healthy" }, { word: "meal" }, { word: "kits", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮订阅", text: "meal subscription (餐食订阅), meal kit (套餐/食材包), urban professional (都市白领)" } ]
    },
    {
      id: "q_dining_s160",
      chinese: "餐厅后厨通过精确的需求预测，将食物浪费率降低了近百分之四十",
      english_full: "The restaurant kitchen reduced food waste by nearly forty percent through accurate demand forecasting.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "kitchen" }, { word: "reduced" }, { word: "food" }, { word: "waste" }, { word: "by" }, { word: "nearly" }, { word: "forty" }, { word: "percent" }, { word: "through" }, { word: "accurate" }, { word: "demand" }, { word: "forecasting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/ /ˈkɪtʃən/", translation: "餐厅后厨",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }, { word: "kitchen" }] }]
        },
        {
          start: 3, end: 5, label: "谓语+宾语", phonetic: "/rɪˈdjuːst/ /fuːd/ /weɪst/", translation: "降低了食物浪费",
          subComponents: [{ startIndex: 0, words: [{ word: "reduced" }, { word: "food" }, { word: "waste" }] }]
        },
        {
          start: 6, end: 9, label: "程度状语", phonetic: "/baɪ/ /ˈnɪərli/ /ˈfɔːrti/ /pərˈsɛnt/", translation: "近百分之四十",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "nearly" }, { word: "forty" }, { word: "percent" }] }]
        },
        {
          start: 10, end: 13, label: "方式状语", phonetic: "/θruː/ /ˈækjərət/ /dɪˈmænd/ /ˈfɔːrkæstɪŋ/", translation: "通过精确的需求预测",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "accurate" }, { word: "demand" }, { word: "forecasting", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "减少浪费", text: "food waste (食物浪费), demand forecasting (需求预测), reduce by (降低…幅度)" } ]
    },
    {
      id: "q_dining_s161",
      chinese: "这家 charcuterie 专柜供应手工制作的 cured meats 和 artisanal cheeses",
      english_full: "This charcuterie counter offers handcrafted cured meats and artisanal cheeses.",
      words: [
        { word: "This" }, { word: "charcuterie" }, { word: "counter" }, { word: "offers" }, { word: "handcrafted" }, { word: "cured" }, { word: "meats" }, { word: "and" }, { word: "artisanal" }, { word: "cheeses", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /ʃɑːrˈkuːtəri/ /ˈkaʊntər/", translation: "这家 charcuterie 专柜",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "charcuterie" }, { word: "counter" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "供应",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 9, label: "宾语", phonetic: "/ˈhændkræftɪd/ /kjʊərd/ /miːts/ /ænd/ /ɑːrˈtɪzənəl/ /ˈtʃiːzɪz/", translation: "手工 cured meats 和 artisanal cheeses",
          subComponents: [{ startIndex: 0, words: [{ word: "handcrafted" }, { word: "cured" }, { word: "meats" }, { word: "and" }, { word: "artisanal" }, { word: "cheeses", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "熟食冷盘", text: "charcuterie (法式熟食/冷肉), cured meat (腌制肉), artisanal cheese (手工奶酪)" } ]
    },
    {
      id: "q_dining_s162",
      chinese: "餐厅的特色面包每日由面点师傅手工现烤，外脆内软、麦香浓郁",
      english_full: "The restaurant's signature bread is freshly baked daily by the baker, with a crisp crust and rich wheat aroma.",
      words: [
        { word: "The" }, { word: "restaurant's" }, { word: "signature" }, { word: "bread" }, { word: "is" }, { word: "freshly" }, { word: "baked" }, { word: "daily" }, { word: "by" }, { word: "the" }, { word: "baker", punctuation: "," }, { word: "with" }, { word: "a" }, { word: "crisp" }, { word: "crust" }, { word: "and" }, { word: "rich" }, { word: "wheat" }, { word: "aroma", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈrɛstərənts/ /ˈsɪgnətʃər/ /brɛd/", translation: "餐厅的特色面包",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant's" }, { word: "signature" }, { word: "bread" }] }]
        },
        {
          start: 4, end: 10, label: "谓语(被动)", phonetic: "/ɪz/ /ˈfrɛʃli/ /beɪkt/ /ˈdeɪli/ /baɪ/ /ðə/ /ˈbeɪkər/", translation: "每日由面点师傅手工现烤",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "freshly" }, { word: "baked" }, { word: "daily" }, { word: "by" }, { word: "the" }, { word: "baker", punctuation: "," }] }]
        },
        {
          start: 11, end: 18, label: "伴随状语", phonetic: "/wɪθ/ /ə/ /krɪsp/ /krʌst/ /ænd/ /rɪtʃ/ /wiːt/ /əˈroʊmə/", translation: "外脆内软、麦香浓郁",
          subComponents: [{ startIndex: 0, words: [{ word: "with" }, { word: "a" }, { word: "crisp" }, { word: "crust" }, { word: "and" }, { word: "rich" }, { word: "wheat" }, { word: "aroma", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "烘焙词汇", text: "signature bread (特色面包), crisp crust (酥脆外皮), wheat aroma (麦香)" } ]
    },
    {
      id: "q_dining_s163",
      chinese: "这道菜肴的 umami 风味来自长时间熬制的骨汤和发酵调味品",
      english_full: "The umami depth of this dish derives from a long-simmered bone broth and fermented seasonings.",
      words: [
        { word: "The" }, { word: "umami" }, { word: "depth" }, { word: "of" }, { word: "this" }, { word: "dish" }, { word: "derives" }, { word: "from" }, { word: "a" }, { word: "long-simmered" }, { word: "bone" }, { word: "broth" }, { word: "and" }, { word: "fermented" }, { word: "seasonings", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ðə/ /uːˈmɑːmi/ /dɛpθ/ /ɒv/ /ðɪs/ /dɪʃ/", translation: "这道菜肴的 umami 风味",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "umami" }, { word: "depth" }, { word: "of" }, { word: "this" }, { word: "dish" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/dɪˈraɪvz/", translation: "来自",
          subComponents: [{ startIndex: 0, words: [{ word: "derives" }] }]
        },
        {
          start: 7, end: 14, label: "来源状语", phonetic: "/frɒm/ /ə/ /lɒŋ-ˈsɪmərd/ /boʊn/ /brɒθ/ /ænd/ /ˈfɜːrmɛntɪd/ /ˈsiːzənɪŋz/", translation: "长时间熬制的骨汤和发酵调味品",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "a" }, { word: "long-simmered" }, { word: "bone" }, { word: "broth" }, { word: "and" }, { word: "fermented" }, { word: "seasonings", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "风味科学", text: "umami (鲜味), bone broth (骨汤), fermented seasoning (发酵调味品)" } ]
    },
    {
      id: "q_dining_s164",
      chinese: "餐厅允许客人在账单上分摊费用，但六人以下团体不接受分单结账",
      english_full: "The restaurant allows guests to split the bill, but groups of fewer than six cannot request separate checks.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "allows" }, { word: "guests" }, { word: "to" }, { word: "split" }, { word: "the" }, { word: "bill", punctuation: "," }, { word: "but" }, { word: "groups" }, { word: "of" }, { word: "fewer" }, { word: "than" }, { word: "six" }, { word: "cannot" }, { word: "request" }, { word: "separate" }, { word: "checks", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 7, label: "主句", phonetic: "/ðə/ /ˈrɛstərənt/ /əˈlaʊz/ /gɛsts/ /tuː/ /splɪt/ /ðə/ /bɪl/", translation: "餐厅允许客人分摊账单",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }, { word: "allows" }, { word: "guests" }, { word: "to" }, { word: "split" }, { word: "the" }, { word: "bill", punctuation: "," }] }]
        },
        {
          start: 8, end: 17, label: "转折从句", phonetic: "/bʌt/ /gruːps/ /ɒv/ /ˈfjuːər/ /ðæn/ /sɪks/ /ˈkænɒt/ /rɪˈkwɛst/ /ˈsɛpərət/ /tʃɛks/", translation: "但六人以下团体不可分单结账",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }, { word: "groups" }, { word: "of" }, { word: "fewer" }, { word: "than" }, { word: "six" }, { word: "cannot" }, { word: "request" }, { word: "separate" }, { word: "checks", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "结账方式", text: "split the bill (分摊账单), separate check (分单), group dining (团体用餐)" } ]
    },
    {
      id: "q_dining_s165",
      chinese: "餐厅在午餐时段推出商务套餐，以合理的定价吸引周边写字楼的白领客群",
      english_full: "The restaurant launched business set menus during lunch hours to attract office workers from nearby buildings at competitive pricing.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "launched" }, { word: "business" }, { word: "set" }, { word: "menus" }, { word: "during" }, { word: "lunch" }, { word: "hours" }, { word: "to" }, { word: "attract" }, { word: "office" }, { word: "workers" }, { word: "from" }, { word: "nearby" }, { word: "buildings" }, { word: "at" }, { word: "competitive" }, { word: "pricing", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 5, label: "谓语+宾语", phonetic: "/lɔːntʃt/ /ˈbɪznəs/ /sɛt/ /ˈmɛnjuːz/", translation: "推出商务套餐",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }, { word: "business" }, { word: "set" }, { word: "menus" }] }]
        },
        {
          start: 6, end: 8, label: "时间状语", phonetic: "/ˈdjʊərɪŋ/ /lʌntʃ/ /aʊərz/", translation: "在午餐时段",
          subComponents: [{ startIndex: 0, words: [{ word: "during" }, { word: "lunch" }, { word: "hours" }] }]
        },
        {
          start: 9, end: 18, label: "目的状语", phonetic: "/tuː/ /əˈtrækt/ /ˈɒfɪs/ /ˈwɜːrkərz/ /frɒm/ /ˈnɪərbaɪ/ /ˈbɪldɪŋz/ /æt/ /kəmˈpɛtɪtɪv/ /ˈpraɪsɪŋ/", translation: "以合理定价吸引周边写字楼白领",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "attract" }, { word: "office" }, { word: "workers" }, { word: "from" }, { word: "nearby" }, { word: "buildings" }, { word: "at" }, { word: "competitive" }, { word: "pricing", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "午餐经营", text: "set menu (套餐), competitive pricing (有竞争力的定价), lunch hours (午餐时段)" } ]
    },
    {
      id: "q_dining_s166",
      chinese: "主厨在出菜前亲自检验每道菜的摆盘与温度，确保呈现达到餐厅标准",
      english_full: "The chef personally inspects each dish's plating and temperature before service to ensure presentation meets restaurant standards.",
      words: [
        { word: "The" }, { word: "chef" }, { word: "personally" }, { word: "inspects" }, { word: "each" }, { word: "dish's" }, { word: "plating" }, { word: "and" }, { word: "temperature" }, { word: "before" }, { word: "service" }, { word: "to" }, { word: "ensure" }, { word: "presentation" }, { word: "meets" }, { word: "restaurant" }, { word: "standards", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ʃɛf/", translation: "主厨",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "chef" }] }]
        },
        {
          start: 2, end: 8, label: "谓语+宾语", phonetic: "/ˈpɜːrsənəli/ /ɪnˈspɛkts/ /iːtʃ/ /ˈdɪʃɪz/ /ˈpleɪtɪŋ/ /ænd/ /ˈtɛmpərətʃər/", translation: "亲自检验每道菜的摆盘与温度",
          subComponents: [{ startIndex: 0, words: [{ word: "personally" }, { word: "inspects" }, { word: "each" }, { word: "dish's" }, { word: "plating" }, { word: "and" }, { word: "temperature" }] }]
        },
        {
          start: 9, end: 10, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ˈsɜːrvɪs/", translation: "在出菜前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "service" }] }]
        },
        {
          start: 11, end: 16, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˌprɛzənˈteɪʃən/ /miːts/ /ˈrɛstərənt/ /ˈstændərdz/", translation: "确保呈现达到餐厅标准",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "presentation" }, { word: "meets" }, { word: "restaurant" }, { word: "standards", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "出菜标准", text: "plating (摆盘), before service (出菜前), presentation standards (呈现标准)" } ]
    },
    {
      id: "q_dining_s167",
      chinese: "餐厅的酒水单涵盖了来自新世界和旧世界的精品葡萄酒，以满足不同偏好",
      english_full: "The wine list encompasses premium selections from both New World and Old World regions to satisfy diverse preferences.",
      words: [
        { word: "The" }, { word: "wine" }, { word: "list" }, { word: "encompasses" }, { word: "premium" }, { word: "selections" }, { word: "from" }, { word: "both" }, { word: "New" }, { word: "World" }, { word: "and" }, { word: "Old" }, { word: "World" }, { word: "regions" }, { word: "to" }, { word: "satisfy" }, { word: "diverse" }, { word: "preferences", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /waɪn/ /lɪst/", translation: "餐厅的酒水单",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "wine" }, { word: "list" }] }]
        },
        {
          start: 3, end: 13, label: "谓语+宾语", phonetic: "/ɪnˈkʌmpəsɪz/ /ˈpriːmiəm/ /sɪˈlɛkʃənz/ /frɒm/ /boʊθ/ /njuː/ /wɜːrld/ /ænd/ /oʊld/ /wɜːrld/ /ˈriːdʒənz/", translation: "涵盖新世界和旧世界的精品葡萄酒",
          subComponents: [{ startIndex: 0, words: [{ word: "encompasses" }, { word: "premium" }, { word: "selections" }, { word: "from" }, { word: "both" }, { word: "New" }, { word: "World" }, { word: "and" }, { word: "Old" }, { word: "World" }, { word: "regions" }] }]
        },
        {
          start: 14, end: 17, label: "目的状语", phonetic: "/tuː/ /ˈsætɪsfaɪ/ /daɪˈvɜːrs/ /ˈprɛfərənsɪz/", translation: "以满足不同偏好",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "satisfy" }, { word: "diverse" }, { word: "preferences", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "葡萄酒", text: "wine list (酒水单), New World/Old World (新世界/旧世界产区), encompass (涵盖)" } ]
    },
    {
      id: "q_dining_s168",
      chinese: "餐厅将本地街头小吃的传统风味以 fine dining 的形式进行了精致化呈现",
      english_full: "The restaurant refined traditional local street food flavors through a fine dining presentation format.",
      words: [
        { word: "The" }, { word: "restaurant" }, { word: "refined" }, { word: "traditional" }, { word: "local" }, { word: "street" }, { word: "food" }, { word: "flavors" }, { word: "through" }, { word: "a" }, { word: "fine" }, { word: "dining" }, { word: "presentation" }, { word: "format", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈrɛstərənt/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "restaurant" }] }]
        },
        {
          start: 2, end: 7, label: "谓语+宾语", phonetic: "/rɪˈfaɪnd/ /trəˈdɪʃənəl/ /ˈloʊkəl/ /striːt/ /fuːd/ /ˈfleɪvərz/", translation: "将本地街头小吃的传统风味精致化",
          subComponents: [{ startIndex: 0, words: [{ word: "refined" }, { word: "traditional" }, { word: "local" }, { word: "street" }, { word: "food" }, { word: "flavors" }] }]
        },
        {
          start: 8, end: 13, label: "方式状语", phonetic: "/θruː/ /ə/ /faɪn/ /ˈdaɪnɪŋ/ /ˌprɛzənˈteɪʃən/ /ˈfɔːrmæt/", translation: "以 fine dining 的形式呈现",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "a" }, { word: "fine" }, { word: "dining" }, { word: "presentation" }, { word: "format", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "餐饮升级", text: "street food (街头小吃), fine dining (高端餐饮), presentation format (呈现形式)" } ]
    },
    {
      id: "q_dining_s169",
      chinese: "随着消费者对透明溯源的需求日益增长，餐厅开始在菜单上标注食材产地信息",
      english_full: "As consumer demand for transparent sourcing grows, restaurants are beginning to label ingredient origin information on menus.",
      words: [
        { word: "As" }, { word: "consumer" }, { word: "demand" }, { word: "for" }, { word: "transparent" }, { word: "sourcing" }, { word: "grows", punctuation: "," }, { word: "restaurants" }, { word: "are" }, { word: "beginning" }, { word: "to" }, { word: "label" }, { word: "ingredient" }, { word: "origin" }, { word: "information" }, { word: "on" }, { word: "menus", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 6, label: "时间状语从句", phonetic: "/æz/ /kənˈsjuːmər/ /dɪˈmænd/ /fɔːr/ /trænsˈpærənt/ /ˈsɔːrsɪŋ/ /groʊz/", translation: "随着消费者对透明溯源的需求日益增长",
          subComponents: [{ startIndex: 0, words: [{ word: "As" }, { word: "consumer" }, { word: "demand" }, { word: "for" }, { word: "transparent" }, { word: "sourcing" }, { word: "grows", punctuation: "," }] }]
        },
        {
          start: 7, end: 7, label: "主语", phonetic: "/ˈrɛstərənts/", translation: "餐厅",
          subComponents: [{ startIndex: 0, words: [{ word: "restaurants" }] }]
        },
        {
          start: 8, end: 10, label: "谓语", phonetic: "/ɑːr/ /bɪˈgɪnɪŋ/ /tuː/", translation: "开始",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "beginning" }, { word: "to" }] }]
        },
        {
          start: 11, end: 16, label: "宾语", phonetic: "/ˈleɪbəl/ /ɪnˈgriːdiənt/ /ˈɒrɪdʒɪn/ /ˌɪnfərˈmeɪʃən/ /ɒn/ /ˈmɛnjuːz/", translation: "在菜单上标注食材产地信息",
          subComponents: [{ startIndex: 0, words: [{ word: "label" }, { word: "ingredient" }, { word: "origin" }, { word: "information" }, { word: "on" }, { word: "menus", punctuation: "." }] }]
        }
      ],
      analysis: [ { type: "透明溯源", text: "transparent sourcing (透明溯源), ingredient origin (食材产地), label (标注)" } ]
    }
  ]
};
