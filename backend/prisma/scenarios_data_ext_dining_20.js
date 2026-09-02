export const extensions = {
  "dining_01": [
    {
      id: "din_s11",
      chinese: "这家米其林星级餐厅提供极具创新和精致的融合菜肴",
      english_full: "The Michelin-starred restaurant offers highly innovative and exquisite fusion cuisine.",
      words: [
        { word: "The" }, { word: "Michelin-starred" }, { word: "restaurant" }, { word: "offers" }, { word: "highly" }, { word: "innovative" },
        { word: "and" }, { word: "exquisite" }, { word: "fusion" }, { word: "cuisine", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmɪʃəlɪn-stɑːrd/ /ˈrɛstərənt/", translation: "这家米其林星级餐厅" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供" },
        { start: 4, end: 9, label: "宾语", phonetic: "/ˈhaɪli/ /ˈɪnəˌveɪtɪv/ /ænd/ /ɪkˈskwɪzɪt/ /ˈfjuːʒən/ /kwɪˈziːn/", translation: "高度创新的和精致的融合菜系" }
      ],
      analysis: [
        { type: "美食鉴赏词汇", text: "Michelin-starred (米其林星级的)；exquisite (精致的，精美的)；fusion cuisine (融合菜系，指混合不同国家烹饪风格的菜肴)。" }
      ]
    },
    {
      id: "din_s12",
      chinese: "这道招牌菜是用松露油腌制并烤至完美的嫩羊排",
      english_full: "The signature dish is a tender lamb chop marinated in truffle oil and grilled to perfection.",
      words: [
        { word: "The" }, { word: "signature" }, { word: "dish" }, { word: "is" }, { word: "a" }, { word: "tender" }, { word: "lamb" }, { word: "chop" },
        { word: "marinated" }, { word: "in" }, { word: "truffle" }, { word: "oil" }, { word: "and" }, { word: "grilled" }, { word: "to" }, { word: "perfection", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsɪgnətʃər/ /dɪʃ/", translation: "这道招牌菜" },
        { start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 4, end: 7, label: "表语", phonetic: "/ə/ /ˈtɛndər/ /læm/ /tʃɒp/", translation: "一块鲜嫩的羊排" },
        { start: 8, end: 15, label: "后置定语", phonetic: "/ˈmærɪˌneɪtɪd/ /ɪn/ /ˈtrʌfəl/ /ɔɪl/ /ænd/ /grɪld/ /tuː/ /pərˈfɛkʃən/", translation: "被腌制在松露油中并被烤至完美的" }
      ],
      analysis: [
        { type: "菜单高频词", text: "signature dish (招牌菜)；marinate (腌制)；truffle oil (松露油)；grilled to perfection (烤到恰到好处，十分完美的搭配)。" }
      ]
    },
    {
      id: "din_s13",
      chinese: "我想要牛排七分熟，配上一份蔬菜沙拉作为小菜",
      english_full: "I would like my steak medium-well, accompanied by a side salad.",
      words: [
        { word: "I" }, { word: "would" }, { word: "like" }, { word: "my" }, { word: "steak" }, { word: "medium-well", punctuation: "," },
        { word: "accompanied" }, { word: "by" }, { word: "a" }, { word: "side" }, { word: "salad", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/aɪ/", translation: "我" },
        { start: 1, end: 2, label: "谓语", phonetic: "/wʊd/ /laɪk/", translation: "想要" },
        { start: 3, end: 4, label: "宾语", phonetic: "/maɪ/ /steɪk/", translation: "我的牛排" },
        { start: 5, end: 5, label: "宾语补足语", phonetic: "/ˈmiːdiəm-wɛl/", translation: "七分熟" },
        { start: 6, end: 10, label: "伴随状语", phonetic: "/əˈkʌmpənid/ /baɪ/ /ə/ /saɪd/ /ˈsæləd/", translation: "伴随着一份小菜沙拉" }
      ],
      analysis: [
        { type: "西餐点餐表达", text: "medium-well (七分熟；rare是一分熟，medium是五分熟，well-done是全熟)；side salad (作为配菜的沙拉，side dish指配菜)。" }
      ]
    },
    {
      id: "din_s14",
      chinese: "如果您有任何饮食限制或对某些成分过敏，请通知您的服务生",
      english_full: "Please inform your server if you have any dietary restrictions or allergies to certain ingredients.",
      words: [
        { word: "Please" }, { word: "inform" }, { word: "your" }, { word: "server" },
        { word: "if" }, { word: "you" }, { word: "have" }, { word: "any" }, { word: "dietary" }, { word: "restrictions" },
        { word: "or" }, { word: "allergies" }, { word: "to" }, { word: "certain" }, { word: "ingredients", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "祈使句谓语", phonetic: "/pliːz/ /ɪnˈfɔːrm/", translation: "请通知" },
        { start: 2, end: 3, label: "宾语", phonetic: "/jʊər/ /ˈsɜːrvər/", translation: "您的服务生" },
        {
          start: 4, end: 14, label: "条件状语从句", phonetic: "/ɪf/ /juː/ /hæv/ /ˈɛni/ /ˈdaɪɪˌtɛri/ /rɪˈstrɪkʃənz/ /ɔːr/ /ˈælərdʒiz/ /tuː/ /ˈsɜːrtən/ /ɪnˈgriːdiənts/", translation: "如果您有任何饮食限制或对某些成分过敏",
          subComponents: [
            { start: 4, end: 4, label: "连词" },
            { start: 5, end: 5, label: "(从)主" },
            { start: 6, end: 6, label: "(从)谓" },
            { start: 7, end: 14, label: "(从)宾(并列)" }
          ]
        }
      ],
      analysis: [
        { type: "健康餐饮词汇", text: "dietary restrictions (饮食限制，如忌口)；allergy to... (对...过敏)；ingredients (成分，原料)。" }
      ]
    },
    {
      id: "din_s15",
      chinese: "这里的气氛令人难以置信的舒适和温馨，非常适合度过一个私密的夜晚",
      english_full: "The ambiance here is incredibly cozy and inviting, perfect for an intimate evening.",
      words: [
        { word: "The" }, { word: "ambiance" }, { word: "here" }, { word: "is" }, { word: "incredibly" }, { word: "cozy" }, { word: "and" }, { word: "inviting", punctuation: "," },
        { word: "perfect" }, { word: "for" }, { word: "an" }, { word: "intimate" }, { word: "evening", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈæmbiəns/", translation: "氛围/环境" },
        { start: 2, end: 2, label: "后置定语", phonetic: "/hɪər/", translation: "这里的" },
        { start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "是" },
        { start: 4, end: 7, label: "表语", phonetic: "/ɪnˈkrɛdəbli/ /ˈkoʊzi/ /ænd/ /ɪnˈvaɪtɪŋ/", translation: "令人难以置信地舒适和温馨的" },
        { start: 8, end: 12, label: "状语/补充说明", phonetic: "/ˈpɜːrfɪkt/ /fɔːr/ /æn/ /ˈɪntɪmət/ /ˈiːvnɪŋ/", translation: "对于一个私密的夜晚是完美的" }
      ],
      analysis: [
        { type: "环境描写高级词", text: "ambiance (环境，气氛) 比 atmosphere 更偏向描写餐厅/酒店的格调；inviting (吸引人的，温馨的)；intimate (私密的，亲密的)。" }
      ]
    },
    {
      id: "din_s16",
      chinese: "侍酒师为每道菜推荐了绝佳的葡萄酒搭配",
      english_full: "The sommelier recommended an excellent wine pairing for each course.",
      words: [
        { word: "The" }, { word: "sommelier" }, { word: "recommended" }, { word: "an" }, { word: "excellent" }, { word: "wine" }, { word: "pairing" },
        { word: "for" }, { word: "each" }, { word: "course", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌsɒməlˈjeɪ/", translation: "侍酒师" },
        { start: 2, end: 2, label: "谓语", phonetic: "/ˌrɛkəˈmɛndɪd/", translation: "推荐了" },
        { start: 3, end: 6, label: "宾语", phonetic: "/æn/ /ˈɛksələnt/ /waɪn/ /ˈpɛərɪŋ/", translation: "一个绝佳的葡萄酒搭配" },
        { start: 7, end: 9, label: "目的/对象状语", phonetic: "/fɔːr/ /iːtʃ/ /kɔːrs/", translation: "为了每一道菜" }
      ],
      analysis: [
        { type: "高端西餐术语", text: "sommelier (侍酒师，源自法语，发音非常特殊)；wine pairing (葡萄酒搭配)；course (此处意为‘一道菜’，如 three-course meal)。" }
      ]
    },
    {
      id: "din_s17",
      chinese: "由于受欢迎程度，如果不提前几周预订，几乎不可能订到桌子",
      english_full: "Due to its popularity, it is nearly impossible to secure a table without booking weeks in advance.",
      words: [
        { word: "Due" }, { word: "to" }, { word: "its" }, { word: "popularity", punctuation: "," },
        { word: "it" }, { word: "is" }, { word: "nearly" }, { word: "impossible" }, { word: "to" }, { word: "secure" }, { word: "a" }, { word: "table" },
        { word: "without" }, { word: "booking" }, { word: "weeks" }, { word: "in" }, { word: "advance", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "原因状语", phonetic: "/djuː/ /tuː/ /ɪts/ /ˌpɒpjʊˈlærɪti/", translation: "由于它的受欢迎程度" },
        { start: 4, end: 4, label: "形式主语", phonetic: "/ɪt/", translation: "它" },
        { start: 5, end: 7, label: "系表结构", phonetic: "/ɪz/ /ˈnɪərli/ /ɪmˈpɒsəbəl/", translation: "是几乎不可能的" },
        { start: 8, end: 11, label: "真正主语", phonetic: "/tuː/ /sɪˈkjʊər/ /ə/ /ˈteɪbəl/", translation: "去获取一张桌子" },
        { start: 12, end: 16, label: "条件状语", phonetic: "/wɪˈðaʊt/ /ˈbʊkɪŋ/ /wiːks/ /ɪn/ /ədˈvæns/", translation: "如果没有提前几周预订的话" }
      ],
      analysis: [
        { type: "预定相关表达", text: "secure a table (弄到/订到一桌，secure 比 get 高级得多)；in advance (提前)。" }
      ]
    },
    {
      id: "din_s18",
      chinese: "这家餐厅的利润率因原材料成本的突然飙升而受挫",
      english_full: "The restaurant's profit margins suffered due to a sudden spike in the cost of raw ingredients.",
      words: [
        { word: "The" }, { word: "restaurant's" }, { word: "profit" }, { word: "margins" }, { word: "suffered" },
        { word: "due" }, { word: "to" }, { word: "a" }, { word: "sudden" }, { word: "spike" }, { word: "in" }, { word: "the" }, { word: "cost" }, { word: "of" }, { word: "raw" }, { word: "ingredients", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈrɛstərənts/ /ˈprɒfɪt/ /ˈmɑːrdʒɪnz/", translation: "这家餐厅的利润率" },
        { start: 4, end: 4, label: "谓语", phonetic: "/ˈsʌfərd/", translation: "受损，受挫" },
        { start: 5, end: 15, label: "原因状语", phonetic: "/djuː/ /tuː/ /ə/ /ˈsʌdən/ /spaɪk/ /ɪn/ /ðə/ /kɒst/ /ɒv/ /rɔː/ /ɪnˈgriːdiənts/", translation: "由于原材料成本中的一个突然飙升" }
      ],
      analysis: [
        { type: "餐饮商业词汇", text: "profit margin (利润率)；spike (突然上升/飙升)；raw ingredients (原材料)。" }
      ]
    },
    {
      id: "din_s19",
      chinese: "这位糕点师以制作外形惊艳、口味复杂的法式甜点而闻名",
      english_full: "The pastry chef is renowned for crafting visually stunning French desserts with complex flavor profiles.",
      words: [
        { word: "The" }, { word: "pastry" }, { word: "chef" }, { word: "is" }, { word: "renowned" }, { word: "for" },
        { word: "crafting" }, { word: "visually" }, { word: "stunning" }, { word: "French" }, { word: "desserts" },
        { word: "with" }, { word: "complex" }, { word: "flavor" }, { word: "profiles", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈpeɪstri/ /ʃɛf/", translation: "这位糕点师" },
        { start: 3, end: 5, label: "谓语(固定搭配)", phonetic: "/ɪz/ /rɪˈnaʊnd/ /fɔːr/", translation: "以...而闻名" },
        { start: 6, end: 10, label: "宾语", phonetic: "/ˈkræftɪŋ/ /ˈvɪʒuəli/ /ˈstʌnɪŋ/ /frɛntʃ/ /dɪˈzɜːrts/", translation: "制作视觉上惊艳的法式甜点" },
        { start: 11, end: 14, label: "后置定语", phonetic: "/wɪθ/ /ˈkɒmplɛks/ /ˈfleɪvər/ /ˈproʊfaɪlz/", translation: "带有复杂的风味特点的" }
      ],
      analysis: [
        { type: "甜品与味觉描述", text: "pastry chef (糕点师)；craft (精制/手工制作)；visually stunning (视觉上极具震撼力的)；flavor profile (风味特点/口感层次)。" }
      ]
    },
    {
      id: "din_s20",
      chinese: "这家新开的小酒馆因其正宗的地中海菜肴而广受赞誉",
      english_full: "The newly opened bistro has garnered widespread acclaim for its authentic Mediterranean cuisine.",
      words: [
        { word: "The" }, { word: "newly" }, { word: "opened" }, { word: "bistro" }, { word: "has" }, { word: "garnered" }, { word: "widespread" }, { word: "acclaim" },
        { word: "for" }, { word: "its" }, { word: "authentic" }, { word: "Mediterranean" }, { word: "cuisine", punctuation: "." }
      ],
      components: [
        { start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈnuːli/ /ˈoʊpənd/ /ˈbiːstroʊ/", translation: "这家新开的小酒馆" },
        { start: 4, end: 5, label: "谓语(现完)", phonetic: "/hæz/ /ˈgɑːrnərd/", translation: "已经获得了(收集了)" },
        { start: 6, end: 7, label: "宾语", phonetic: "/ˈwaɪdsprɛd/ /əˈkleɪm/", translation: "广泛的赞誉" },
        { start: 8, end: 12, label: "原因状语", phonetic: "/fɔːr/ /ɪts/ /ɔːˈθɛntɪk/ /ˌmɛdɪtəˈreɪniən/ /kwɪˈziːn/", translation: "因为其正宗的地中海菜肴" }
      ],
      analysis: [
        { type: "美食评论高级词汇", text: "bistro (小酒馆/法式小餐馆)；garner acclaim (获得赞誉)；authentic (正宗的)；Mediterranean (地中海的)。" }
      ]
    },
    {
      id: "din_s21",
      chinese: "菜单上提供了众多无麸质和纯素食的选项，以迎合多样化的饮食习惯",
      english_full: "The menu features a plethora of gluten-free and vegan options to accommodate diverse dietary habits.",
      words: [
        { word: "The" }, { word: "menu" }, { word: "features" }, { word: "a" }, { word: "plethora" }, { word: "of" }, { word: "gluten-free" }, { word: "and" }, { word: "vegan" }, { word: "options" },
        { word: "to" }, { word: "accommodate" }, { word: "diverse" }, { word: "dietary" }, { word: "habits", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈmɛnjuː/", translation: "菜单" },
        { start: 2, end: 2, label: "谓语", phonetic: "/ˈfiːtʃərz/", translation: "以...为特色，提供" },
        { start: 3, end: 9, label: "宾语", phonetic: "/ə/ /ˈplɛθərə/ /ɒv/ /ˈgluːtən-friː/ /ænd/ /ˈviːgən/ /ˈɒpʃənz/", translation: "大量的无麸质和纯素食的选项" },
        { start: 10, end: 14, label: "目的状语", phonetic: "/tuː/ /əˈkɒmədeɪt/ /daɪˈvɜːrs/ /ˈdaɪɪˌtɛri/ /ˈhæbɪts/", translation: "为了迎合多样化的饮食习惯" }
      ],
      analysis: [
        { type: "特定饮食词汇", text: "a plethora of (过剩，大量的，高级替换 a lot of)；gluten-free (无麸质的)；vegan (纯素食的)；accommodate (容纳，迎合)。" }
      ]
    },
    {
      id: "din_s22",
      chinese: "这家海鲜餐厅直接从当地渔民那里采购每天的捕捞物",
      english_full: "The seafood restaurant sources its daily catch directly from local fishermen to ensure freshness.",
      words: [
        { word: "The" }, { word: "seafood" }, { word: "restaurant" }, { word: "sources" }, { word: "its" }, { word: "daily" }, { word: "catch" },
        { word: "directly" }, { word: "from" }, { word: "local" }, { word: "fishermen" }, { word: "to" }, { word: "ensure" }, { word: "freshness", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈsiːfuːd/ /ˈrɛstərənt/", translation: "这家海鲜餐厅" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˈsɔːrsɪz/", translation: "采购，寻找来源" },
        { start: 4, end: 6, label: "宾语", phonetic: "/ɪts/ /ˈdeɪli/ /kætʃ/", translation: "它的每日捕捞物" },
        { start: 7, end: 10, label: "来源状语", phonetic: "/dɪˈrɛktli/ /frɒm/ /ˈloʊkəl/ /ˈfɪʃərmən/", translation: "直接从当地渔民处" },
        { start: 11, end: 13, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˈfrɛʃnəs/", translation: "为了确保新鲜度" }
      ],
      analysis: [
        { type: "餐饮供应链表达", text: "source (作为动词，意为‘向...采购，从...获取’)，例如 sourced locally (本地采购的)；catch (名词，捕捞物)。" }
      ]
    },
    {
      id: "din_s23",
      chinese: "如果不提前通知取消预订，将收取取消费用",
      english_full: "A cancellation fee will be charged if the reservation is not cancelled with prior notice.",
      words: [
        { word: "A" }, { word: "cancellation" }, { word: "fee" }, { word: "will" }, { word: "be" }, { word: "charged" },
        { word: "if" }, { word: "the" }, { word: "reservation" }, { word: "is" }, { word: "not" }, { word: "cancelled" }, { word: "with" }, { word: "prior" }, { word: "notice", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主句主语", phonetic: "/ə/ /ˌkænsəˈleɪʃən/ /fiː/", translation: "一笔取消费用" },
        { start: 3, end: 5, label: "主句谓语", phonetic: "/wɪl/ /bi/ /tʃɑːrdʒd/", translation: "将被收取" },
        {
          start: 6, end: 14, label: "条件状语从句", phonetic: "/ɪf/ /ðə/ /ˌrɛzərˈveɪʃən/ /ɪz/ /nɒt/ /ˈkænsəld/ /wɪθ/ /ˈpraɪər/ /ˈnoʊtɪs/", translation: "如果预订没有伴随提前通知被取消",
          subComponents: [
            { start: 6, end: 6, label: "连词" },
            { start: 7, end: 8, label: "(从)主" },
            { start: 9, end: 11, label: "(从)谓(被动)" },
            { start: 12, end: 14, label: "(从)方式状语" }
          ]
        }
      ],
      analysis: [
        { type: "预订服务规定", text: "cancellation fee (取消费)；reservation (预订)；with prior notice (伴随提前的通知，即提前通知)。" }
      ]
    },
    {
      id: "din_s24",
      chinese: "他们通过为所有未使用的食材建立堆肥系统来贯彻零浪费的理念",
      english_full: "They implement a zero-waste philosophy by establishing a composting system for all unused ingredients.",
      words: [
        { word: "They" }, { word: "implement" }, { word: "a" }, { word: "zero-waste" }, { word: "philosophy" },
        { word: "by" }, { word: "establishing" }, { word: "a" }, { word: "composting" }, { word: "system" }, { word: "for" }, { word: "all" }, { word: "unused" }, { word: "ingredients", punctuation: "." }
      ],
      components: [
        { start: 0, end: 0, label: "主语", phonetic: "/ðeɪ/", translation: "他们" },
        { start: 1, end: 1, label: "谓语", phonetic: "/ˈɪmplɪmənt/", translation: "贯彻，实施" },
        { start: 2, end: 4, label: "宾语", phonetic: "/ə/ /ˈzɪəroʊ-weɪst/ /fɪˈlɒsəfi/", translation: "一种零浪费的理念" },
        { start: 5, end: 13, label: "方式状语", phonetic: "/baɪ/ /ɪˈstæblɪʃɪŋ/ /ə/ /ˈkɒmpoʊstɪŋ/ /ˈsɪstəm/ /fɔːr/ /ɔːl/ /ʌnˈjuːzd/ /ɪnˈgriːdiənts/", translation: "通过为所有未使用的食材建立堆肥系统" }
      ],
      analysis: [
        { type: "现代环保餐饮理念", text: "zero-waste (零浪费)；philosophy (哲学，理念)；composting (堆肥，化为肥料)。" }
      ]
    },
    {
      id: "din_s25",
      chinese: "主厨通过独特的分子料理技术重新诠释了传统的家常菜",
      english_full: "The head chef reinterprets traditional comfort food through unique molecular gastronomy techniques.",
      words: [
        { word: "The" }, { word: "head" }, { word: "chef" }, { word: "reinterprets" }, { word: "traditional" }, { word: "comfort" }, { word: "food" },
        { word: "through" }, { word: "unique" }, { word: "molecular" }, { word: "gastronomy" }, { word: "techniques", punctuation: "." }
      ],
      components: [
        { start: 0, end: 2, label: "主语", phonetic: "/ðə/ /hɛd/ /ʃɛf/", translation: "主厨" },
        { start: 3, end: 3, label: "谓语", phonetic: "/ˌriːɪnˈtɜːrprɪts/", translation: "重新诠释" },
        { start: 4, end: 6, label: "宾语", phonetic: "/trəˈdɪʃənəl/ /ˈkʌmfərt/ /fuːd/", translation: "传统的家常菜(抚慰人心的食物)" },
        { start: 7, end: 11, label: "方式状语", phonetic: "/θruː/ /juˈniːk/ /məˈlɛkjʊlər/ /gæˈstrɒnəmi/ /tɛkˈniːks/", translation: "通过独特的分子料理技术" }
      ],
      analysis: [
        { type: "美食鉴赏高阶词", text: "reinterpret (重新解释/诠释)；comfort food (家常菜，指令人感到安慰的食物)；molecular gastronomy (分子料理)。" }
      ]
    },
    {
      id: "din_s26",
      chinese: "餐厅由于未通过突击的卫生检查而被卫生部门暂时查封",
      english_full: "The eatery was temporarily shut down by the health department after failing a surprise hygiene inspection.",
      words: [
        { word: "The" }, { word: "eatery" }, { word: "was" }, { word: "temporarily" }, { word: "shut" }, { word: "down" }, { word: "by" }, { word: "the" }, { word: "health" }, { word: "department" },
        { word: "after" }, { word: "failing" }, { word: "a" }, { word: "surprise" }, { word: "hygiene" }, { word: "inspection", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ði/ /ˈiːtəri/", translation: "这家餐馆(小吃店)" },
        { start: 2, end: 5, label: "谓语(被动)", phonetic: "/wɒz/ /ˌtɛmpəˈrɛrɪli/ /ʃʌt/ /daʊn/", translation: "被暂时关闭了" },
        { start: 6, end: 9, label: "施动者状语", phonetic: "/baɪ/ /ðə/ /hɛlθ/ /dɪˈpɑːrtmənt/", translation: "被卫生部门" },
        { start: 10, end: 15, label: "时间/原因状语", phonetic: "/ˈæftər/ /ˈfeɪlɪŋ/ /ə/ /sərˈpraɪz/ /ˈhaɪdʒiːn/ /ɪnˈspɛkʃən/", translation: "在未通过一项突击卫生检查之后" }
      ],
      analysis: [
        { type: "食品安全词汇", text: "eatery (小饭馆)；shut down (停业，查封)；surprise inspection (突击检查)；hygiene (卫生)。" }
      ]
    },
    {
      id: "din_s27",
      chinese: "这家酒馆的魅力在于其质朴的装饰和热情周到的款待",
      english_full: "The charm of the tavern lies in its rustic decor and warm, attentive hospitality.",
      words: [
        { word: "The" }, { word: "charm" }, { word: "of" }, { word: "the" }, { word: "tavern" },
        { word: "lies" }, { word: "in" }, { word: "its" }, { word: "rustic" }, { word: "decor" }, { word: "and" }, { word: "warm", punctuation: "," }, { word: "attentive" }, { word: "hospitality", punctuation: "." }
      ],
      components: [
        { start: 0, end: 4, label: "主语", phonetic: "/ðə/ /tʃɑːrm/ /ɒv/ /ðə/ /ˈtævərn/", translation: "这家酒馆的魅力" },
        { start: 5, end: 6, label: "谓语", phonetic: "/laɪz/ /ɪn/", translation: "在于" },
        { start: 7, end: 13, label: "宾语(介词)", phonetic: "/ɪts/ /ˈrʌstɪk/ /deɪˈkɔːr/ /ænd/ /wɔːrm/, /əˈtɛntɪv/ /ˌhɒspɪˈtælɪti/", translation: "它的质朴装饰以及温暖体贴的款待" }
      ],
      analysis: [
        { type: "餐饮体验描述", text: "tavern (酒馆，客栈)；lie in (在于...)；rustic decor (乡村风/质朴的装饰)；hospitality (好客，款待)。" }
      ]
    },
    {
      id: "din_s28",
      chinese: "侍者端上了一盘令人垂涎欲滴的开胃菜，以激发我们的食欲",
      english_full: "The waiter served a platter of mouth-watering appetizers to stimulate our appetite.",
      words: [
        { word: "The" }, { word: "waiter" }, { word: "served" }, { word: "a" }, { word: "platter" }, { word: "of" }, { word: "mouth-watering" }, { word: "appetizers" },
        { word: "to" }, { word: "stimulate" }, { word: "our" }, { word: "appetite", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈweɪtər/", translation: "侍者" },
        { start: 2, end: 2, label: "谓语", phonetic: "/sɜːrvd/", translation: "端上(服务)" },
        { start: 3, end: 7, label: "宾语", phonetic: "/ə/ /ˈplætər/ /ɒv/ /ˈmaʊθˌwɔːtərɪŋ/ /ˈæpɪˌtaɪzərz/", translation: "一大盘令人垂涎的开胃菜" },
        { start: 8, end: 11, label: "目的状语", phonetic: "/tuː/ /ˈstɪmjʊˌleɪt/ /aʊər/ /ˈæpɪtaɪt/", translation: "为了刺激我们的食欲" }
      ],
      analysis: [
        { type: "就餐词汇", text: "a platter of (一浅盘的...)；mouth-watering (令人垂涎欲滴的)；appetizer (开胃菜)；appetite (食欲，胃口)。" }
      ]
    },
    {
      id: "din_s29",
      chinese: "对于六人以上的团体，账单中将自动计入百分之十五的小费",
      english_full: "For parties of six or more, a fifteen percent gratuity is automatically added to the bill.",
      words: [
        { word: "For" }, { word: "parties" }, { word: "of" }, { word: "six" }, { word: "or" }, { word: "more", punctuation: "," },
        { word: "a" }, { word: "fifteen" }, { word: "percent" }, { word: "gratuity" }, { word: "is" }, { word: "automatically" }, { word: "added" }, { word: "to" }, { word: "the" }, { word: "bill", punctuation: "." }
      ],
      components: [
        { start: 0, end: 5, label: "条件状语", phonetic: "/fɔːr/ /ˈpɑːrtiz/ /ɒv/ /sɪks/ /ɔːr/ /mɔːr/", translation: "对于六人或更多的聚餐团队" },
        { start: 6, end: 9, label: "主语", phonetic: "/ə/ /fɪfˈtiːn/ /pərˈsɛnt/ /grəˈtuːɪti/", translation: "一笔15%的小费" },
        { start: 10, end: 12, label: "谓语(被动)", phonetic: "/ɪz/ /ˌɔːtəˈmætɪkli/ /ˈædɪd/", translation: "被自动地加在..." },
        { start: 13, end: 15, label: "范围状语", phonetic: "/tuː/ /ðə/ /bɪl/", translation: "加在账单上" }
      ],
      analysis: [
        { type: "西餐消费规则", text: "party (这里指聚餐的团体/一桌人)；gratuity (小费/赏钱，比 tip 更正式)；bill (账单)。" }
      ]
    },
    {
      id: "din_s30",
      chinese: "这位大厨非常重视使用应季的农产品，以提升菜肴的风味",
      english_full: "The chef places great emphasis on utilizing seasonal produce to elevate the flavor of the dishes.",
      words: [
        { word: "The" }, { word: "chef" }, { word: "places" }, { word: "great" }, { word: "emphasis" }, { word: "on" }, { word: "utilizing" }, { word: "seasonal" }, { word: "produce" },
        { word: "to" }, { word: "elevate" }, { word: "the" }, { word: "flavor" }, { word: "of" }, { word: "the" }, { word: "dishes", punctuation: "." }
      ],
      components: [
        { start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ʃɛf/", translation: "主厨" },
        { start: 2, end: 2, label: "谓语", phonetic: "/ˈpleɪsɪz/", translation: "放置" },
        { start: 3, end: 4, label: "宾语", phonetic: "/greɪt/ /ˈɛmfəsɪs/", translation: "巨大的重视" },
        { start: 5, end: 8, label: "状语(介词)", phonetic: "/ɒn/ /ˈjuːtɪˌlaɪzɪŋ/ /ˈsiːzənəl/ /ˈprɒduːs/", translation: "在利用应季农产品上" },
        { start: 9, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈɛlɪveɪt/ /ðə/ /ˈfleɪvər/ /ɒv/ /ðə/ /ˈdɪʃɪz/", translation: "为了提升这些菜肴的风味" }
      ],
      analysis: [
        { type: "厨艺评价词汇", text: "place emphasis on (重视...)；seasonal produce (应季农产品，produce 此处作名词读 /ˈprɒduːs/)；elevate (提升)。" }
      ]
    }
  ]
};