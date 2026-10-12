import fs from 'fs';

function tokenize(sentence) {
  return sentence.split(/\s+/).map(w => {
    const m = w.match(/^([a-zA-Z0-9'-]+)(.*)$/);
    return m ? { word: m[1], ...(m[2] ? { punctuation: m[2] } : {}) } : { word: w };
  });
}

function wc(start, end, words) {
  return words.slice(start, end + 1);
}

function sc(words) {
  return [{ startIndex: 0, words }];
}

function comp(start, end, label, phonetic, translation, words) {
  return { start, end, label, phonetic, translation, subComponents: sc(wc(start, end, words)) };
}

function buildItem(id, chinese, english, componentsDef, analysis) {
  const words = tokenize(english);
  const components = componentsDef.map(c =>
    comp(c[0], c[1], c[2], c[3], c[4], words)
  );
  return { id, chinese, english_full: english, words, components, analysis };
}

const data = [
  ["q_art_s100",
    "这次展览展出了一系列深刻反映人类情感复杂性的当代艺术品",
    "The exhibition features a collection of contemporary artworks that profoundly reflect the complexity of human emotions.",
    [[0,1,"主语","/ðə/ /ˌɛksɪˈbɪʃən/","这次展览"],[2,2,"谓语","/ˈfiːtʃərz/","展出"],[3,15,"宾语","/ə/ /kəˈlɛkʃən/ /ɒv/ /kənˈtɛmpəˌrɛri/ /ˈɑːrtˌwɜːrks/ /ðæt/ /prəˈfaʊndli/ /rɪˈflɛkt/ /ðə/ /kəmˈplɛksɪti/ /ɒv/ /ˈhjuːmən/ /ɪˈmoʊʃənz/","一系列深刻反映人类情感复杂性的当代艺术品"]],
    [{ type: "艺术词汇", text: "exhibition (展览), contemporary artworks (当代艺术品), profoundly (深刻地), complexity (复杂性)" }]
  ],
  ["q_art_s101",
    "这位策展人巧妙地将传统水墨画与数字投影技术融合，创造出一种令人震撼的跨媒介体验",
    "The curator ingeniously fused traditional ink paintings with digital projection to create a breathtaking cross-media experience.",
    [[0,1,"主语","/ðə/ /kjʊˈreɪtər/","这位策展人"],[2,2,"状语","/ɪnˈdʒiːniəsli/","巧妙地"],[3,3,"谓语","/fjuːzd/","融合"],[4,7,"宾语","/trəˈdɪʃənəl/ /ɪŋk/ /ˈpeɪntɪŋz/ /wɪð/","传统水墨画与数字投影"],[8,8,"目的状语","/tuː/","以"],[9,9,"谓语","/kriˈeɪt/","创造"],[10,14,"宾语","/ə/ /ˈbrɛθˌteɪkɪŋ/ /krɒs-ˈmiːdiə/ /ɪkˈspɪəriəns/","令人震撼的跨媒介体验"]],
    [{ type: "策展艺术", text: "curator (策展人), fuse (融合), cross-media (跨媒介), breathtaking (令人震撼的)" }]
  ],
  ["q_art_s102",
    "这幅文艺复兴时期的肖像画在佳士得拍卖会上以破纪录的价格成交，引发了艺术市场的广泛关注",
    "This Renaissance portrait sold for a record-breaking price at Christie's auction, sparking widespread attention in the art market.",
    [[0,3,"主语","/ðɪs/ /ˈrɛnəsɑːns/ /ˈpɔːrtrɪt/","这幅文艺复兴时期的肖像画"],[4,4,"谓语","/soʊld/","成交"],[5,11,"状语","/fɔːr/ /ə/ /ˈrɛkɔːrd-ˌbreɪkɪŋ/ /praɪs/ /æt/ /ˈkrɪstiz/ /ˈɔːkʃən/","在佳士得以破纪录的价格"],[12,12,"状语","/ˈspɑːrkɪŋ/","引发"],[13,17,"宾语","/ˈwaɪdsprɛd/ /əˈtɛnʃən/ /ɪn/ /ði/ /ɑːrt/ /ˈmɑːrkɪt/","艺术市场的广泛关注"]],
    [{ type: "艺术市场", text: "Renaissance portrait (文艺复兴肖像画), record-breaking (破纪录的), auction (拍卖会), art market (艺术市场)" }]
  ],
  ["q_art_s103",
    "博物馆正在采用尖端的三维扫描技术来记录脆弱文物的每一个细节，以确保其数字档案的完整性",
    "The museum is employing cutting-edge three-dimensional scanning to document every detail of fragile artifacts, ensuring the integrity of their digital archives.",
    [[0,1,"主语","/ðə/ /mjuːˈziːəm/","博物馆"],[2,3,"谓语(进行)","/ɪz/ /ɪmˈplɔɪɪŋ/","正在采用"],[4,8,"宾语","/ˈkʌtɪŋ-ɛdʒ/ /θriː-dɪˈmɛnʃənəl/ /ˈskænɪŋ/ /tuː/ /ˈdɒkjʊmənt/","尖端三维扫描技术来记录"],[9,13,"宾语补足语","/ˈɛvri/ /ˈdiːteɪl/ /ɒv/ /ˈfrædʒaɪl/ /ˈɑːrtɪfækts/","脆弱文物的每一个细节"],[14,14,"状语","/ɪnˈʃʊrɪŋ/","以确保"],[15,20,"宾语","/ði/ /ɪnˈtɛɡrɪti/ /ɒv/ /ðɛər/ /ˈdɪdʒɪtl/ /ˈɑːrkaɪvz/","数字档案的完整性"]],
    [{ type: "文物保护", text: "cutting-edge (尖端的), three-dimensional scanning (三维扫描), fragile artifacts (脆弱文物), digital archives (数字档案)" }]
  ],
  ["q_art_s104",
    "行为艺术家通过将身体置于极端环境中，迫使观众重新审视人类忍耐力的边界",
    "The performance artist forces audiences to re-examine the boundaries of human endurance by placing the body in extreme environments.",
    [[0,2,"主语","/ðə/ /pərˈfɔːrməns/ /ˈɑːrtɪst/","行为艺术家"],[3,3,"谓语","/fɔːrsɪz/","迫使"],[4,4,"宾语","/ˈɔːdiənsɪz/","观众"],[5,5,"宾补","/tuː/","去"],[6,7,"宾补","/riː-ɪɡˈzæmɪn/ /ðə/","重新审视"],[8,12,"宾语","/ˈbaʊndəriz/ /ɒv/ /ˈhjuːmən/ /ɪnˈdʊrəns/ /baɪ/","人类忍耐力的边界(通过)"],[13,18,"方式状语","/ˈpleɪsɪŋ/ /ðə/ /ˈbɒdi/ /ɪn/ /ɪkˈstriːm/ /ɪnˈvaɪrənmənts/","将身体置于极端环境中"]],
    [{ type: "行为艺术", text: "performance artist (行为艺术家), re-examine (重新审视), endurance (忍耐力), extreme environments (极端环境)" }]
  ],
  ["q_art_s105",
    "街头艺术从城市边缘走向主流画廊，其社会批判性内涵获得了学术界的严肃讨论",
    "Street art has moved from urban margins to mainstream galleries, its socially critical undertones gaining serious academic discourse.",
    [[0,1,"主语","/striːt/ /ɑːrt/","街头艺术"],[2,3,"谓语(现完)","/hæz/ /muːvd/","已从...走向"],[4,8,"状语","/frɒm/ /ˈɜːrbən/ /ˈmɑːrdʒɪnz/ /tuː/ /ˈmeɪnstriːm/","从城市边缘到主流"],[9,9,"宾语","/ˈɡæləriz/","画廊"],[10,14,"独立主格","/ɪts/ /ˈsoʊʃəli/ /ˈkrɪtɪkəl/ /ˈʌndərˌtoʊnz/ /ˈɡeɪnɪŋ/","其社会批判性内涵获得"],[15,17,"宾语","/ˈsɪəriəs/ /ˌækəˈdɛmɪk/ /ˈdɪskɔːrs/","学术界的严肃讨论"]],
    [{ type: "街头艺术", text: "urban margins (城市边缘), mainstream galleries (主流画廊), undertones (内涵), academic discourse (学术讨论)" }]
  ],
  ["q_art_s106",
    "这位摄影大师运用长曝光技巧捕捉了城市夜景中光与影的微妙交织",
    "The master photographer employed long-exposure techniques to capture the subtle interplay of light and shadow in the urban nightscape.",
    [[0,2,"主语","/ðə/ /ˈmæstər/ /fəˈtɒɡrəfər/","这位摄影大师"],[3,3,"谓语","/ɪmˈplɔɪd/","运用"],[4,6,"宾语","/lɒŋ-ɪkˈspoʊʒər/ /tɛkˈniːks/ /tuː/","长曝光技巧以"],[7,7,"谓语","/ˈkæptʃər/","捕捉"],[8,17,"宾语","/ðə/ /ˈsʌtl/ /ˈɪntərˌpleɪ/ /ɒv/ /laɪt/ /ænd/ /ˈʃædoʊ/ /ɪn/ /ðə/ /ˈɜːrbən/ /ˈnaɪtˌskeɪp/","城市夜景中光与影的微妙交织"]],
    [{ type: "摄影艺术", text: "long-exposure (长曝光), interplay (交织), nightscape (夜景), subtle (微妙的)" }]
  ],
  ["q_art_s107",
    "这座沉浸式装置艺术邀请参观者步入一个完全由回收材料构建的梦幻空间",
    "This immersive installation invites visitors to step into a dreamlike space constructed entirely from recycled materials.",
    [[0,2,"主语","/ðɪs/ /ɪˈmɜːrsɪv/ /ˌɪnstəˈleɪʃən/","这座沉浸式装置艺术"],[3,3,"谓语","/ɪnˈvaɪts/","邀请"],[4,4,"宾语","/ˈvɪzɪtərz/","参观者"],[5,5,"宾补","/tuː/","去"],[6,6,"宾补","/stɛp/","步入"],[7,15,"宾语","/ɪntuː/ /ə/ /ˈdriːmˌlaɪk/ /speɪs/ /kənˈstrʌktɪd/ /ɪnˈtaɪərli/ /frɒm/ /riːˈsaɪkld/ /məˈtɪəriəlz/","完全由回收材料构建的梦幻空间"]],
    [{ type: "装置艺术", text: "immersive installation (沉浸式装置), dreamlike (梦幻般的), recycled materials (回收材料), constructed (构建的)" }]
  ],
  ["q_art_s108",
    "艺术评论家认为，这幅抽象表现主义画作体现了战后一代对存在主义哲学的深刻反思",
    "Art critics argue that this abstract expressionist painting embodies the post-war generation's profound reflection on existentialist philosophy.",
    [[0,1,"主语","/ɑːrt/ /ˈkrɪtɪks/","艺术评论家"],[2,2,"谓语","/ˈɑːrɡjuː/","认为"],[3,3,"宾语从句引导","/ðæt/","(that)"],[4,7,"从句主语","/ðɪs/ /ˈæbstrækt/ /ɪkˈsprɛʃənɪst/ /ˈpeɪntɪŋ/","这幅抽象表现主义画作"],[8,8,"从句谓语","/ɪmˈbɒdiz/","体现"],[9,16,"从句宾语","/ðə/ /poʊst-wɔːr/ /ˌdʒɛnəˈreɪʃənz/ /prəˈfaʊnd/ /rɪˈflɛkʃən/ /ɒn/ /ˌɛɡzɪˈstɛnʃəlɪst/ /fɪˈlɒsəfi/","战后一代对存在主义哲学的深刻反思"]],
    [{ type: "艺术评论", text: "abstract expressionist (抽象表现主义的), embodies (体现), existentialist philosophy (存在主义哲学), post-war generation (战后一代)" }]
  ],
  ["q_art_s109",
    "联合国教科文组织将这项古老的传统手工艺认定为非物质文化遗产，以保障其世代传承",
    "UNESCO has designated this ancient traditional craft as intangible cultural heritage to safeguard its transmission across generations.",
    [[0,0,"主语","/juːˈnɛskoʊ/","联合国教科文组织"],[1,2,"谓语(现完)","/hæz/ /ˈdɛzɪɡneɪtɪd/","已将...认定"],[3,6,"宾语","/ðɪs/ /ˈeɪnʃənt/ /trəˈdɪʃənəl/ /krɑːft/","这项古老的传统手工艺"],[7,10,"宾补","/æz/ /ɪnˈtændʒɪbl/ /ˈkʌltʃərəl/ /ˈhɛrɪtɪdʒ/","为非物质文化遗产"],[11,11,"目的状语","/tuː/","以"],[12,12,"谓语","/ˈseɪfɡɑːrd/","保障"],[13,16,"宾语","/ɪts/ /trænzˈmɪʃən/ /əˈkrɒs/ /ˌdʒɛnəˈreɪʃənz/","其世代传承"]],
    [{ type: "文化遗产", text: "intangible cultural heritage (非物质文化遗产), designate (认定), safeguard (保障), transmission (传承)" }]
  ],
  ["q_art_s110",
    "歌剧院以极其精湛的舞台设计重新演绎了这部十九世纪的浪漫主义经典",
    "The opera house reinterpreted this nineteenth-century Romantic classic with exquisitely crafted stage design.",
    [[0,2,"主语","/ði/ /ˈɒpərə/ /haʊs/","歌剧院"],[3,3,"谓语","/ˌriːɪnˈtɜːrprɪtɪd/","重新演绎"],[4,7,"宾语","/ðɪs/ /ˌnaɪnˈtiːnθ-ˈsɛntʃəri/ /roʊˈmæntɪk/ /ˈklæsɪk/","这部十九世纪的浪漫主义经典"],[8,12,"方式状语","/wɪð/ /ɪkˈskwɪzɪtli/ /ˈkrɑːftɪd/ /steɪdʒ/ /dɪˈzaɪn/","以极其精湛的舞台设计"]],
    [{ type: "歌剧艺术", text: "reinterpret (重新演绎), Romantic classic (浪漫主义经典), exquisitely crafted (精湛制作的), stage design (舞台设计)" }]
  ],
  ["q_art_s111",
    "独立电影制作人通过非线性叙事结构探讨了移民身份认同的复杂性与断裂感",
    "The independent filmmaker explored the complexity and fragmentation of immigrant identity through a non-linear narrative structure.",
    [[0,2,"主语","/ði/ /ˌɪndɪˈpɛndənt/ /ˈfɪlmˌmeɪkər/","独立电影制作人"],[3,3,"谓语","/ɪkˈsplɔːrd/","探讨"],[4,10,"宾语","/ðə/ /kəmˈplɛksɪti/ /ænd/ /ˌfræɡmənˈteɪʃən/ /ɒv/ /ˈɪmɪɡrənt/ /aɪˈdɛntɪti/","移民身份认同的复杂性与断裂感"],[11,15,"方式状语","/θruː/ /ə/ /nɒn-ˈlɪniər/ /ˈnærətɪv/ /ˈstrʌktʃər/","通过非线性叙事结构"]],
    [{ type: "电影艺术", text: "non-linear narrative (非线性叙事), fragmentation (断裂感), immigrant identity (移民身份认同), explore (探讨)" }]
  ],
  ["q_art_s112",
    "这位小说家的实验性写作风格模糊了散文与诗歌之间的体裁界限",
    "The novelist's experimental writing style blurs the generic boundaries between prose and poetry.",
    [[0,4,"主语","/ðə/ /ˈnɒvəlɪsts/ /ɪkˌspɛrɪˈmɛntl/ /ˈraɪtɪŋ/ /staɪl/","这位小说家的实验性写作风格"],[5,5,"谓语","/blɜːrz/","模糊"],[6,12,"宾语","/ðə/ /dʒəˈnɛrɪk/ /ˈbaʊndəriz/ /bɪˈtwiːn/ /proʊz/ /ænd/ /ˈpoʊɪtri/","散文与诗歌之间的体裁界限"]],
    [{ type: "文学体裁", text: "experimental writing (实验性写作), generic boundaries (体裁界限), prose (散文), blur (模糊)" }]
  ],
  ["q_art_s113",
    "这座获奖建筑将可持续设计理念与本土文化符号天衣无缝地融为一体",
    "This award-winning architecture seamlessly integrates sustainable design principles with indigenous cultural symbols.",
    [[0,2,"主语","/ðɪs/ /əˈwɔːrd-ˌwɪnɪŋ/ /ˈɑːrkɪtɛktʃər/","这座获奖建筑"],[3,3,"状语","/siːmˈləsli/","天衣无缝地"],[4,4,"谓语","/ˈɪntɪɡreɪts/","融合"],[5,8,"宾语","/səˈsteɪnəbl/ /dɪˈzaɪn/ /ˈprɪnsəpəlz/ /wɪð/","可持续设计理念与"],[9,11,"宾语","/ɪnˈdɪdʒənəs/ /ˈkʌltʃərəl/ /ˈsɪmbəlz/","本土文化符号"]],
    [{ type: "建筑艺术", text: "award-winning (获奖的), sustainable design (可持续设计), indigenous (本土的), seamlessly integrate (天衣无缝地融合)" }]
  ],
  ["q_art_s114",
    "当代古典音乐作曲家大胆地将电子音效与传统管弦乐编制相结合，拓展了听觉表达的边界",
    "The contemporary classical composer boldly combines electronic soundscapes with traditional orchestral arrangements, expanding the boundaries of auditory expression.",
    [[0,3,"主语","/ðə/ /kənˈtɛmpəˌrɛri/ /ˈklæsɪkəl/ /kəmˈpoʊzər/","当代古典音乐作曲家"],[4,4,"状语","/ˈboʊldli/","大胆地"],[5,5,"谓语","/kəmˈbaɪnz/","结合"],[6,9,"宾语","/ɪˌlɛkˈtrɒnɪk/ /ˈsaʊndˌskeɪps/ /wɪð/ /trəˈdɪʃənəl/","电子音效与传统"],[10,11,"宾语","/ɔːrˈkɛstrəl/ /əˈreɪndʒmənts/","管弦乐编制"],[12,12,"状语","/ɪkˈspændɪŋ/","拓展"],[13,17,"宾语","/ðə/ /ˈbaʊndəriz/ /ɒv/ /ˈɔːdɪtɔːri/ /ɪkˈsprɛʃən/","听觉表达的边界"]],
    [{ type: "音乐创作", text: "soundscapes (音效景观), orchestral arrangements (管弦乐编制), auditory expression (听觉表达), boldly (大胆地)" }]
  ],
  ["q_art_s115",
    "现代舞团以极具张力的肢体语言诠释了人类在数字化时代中的疏离与联结",
    "The modern dance company interpreted human alienation and connection in the digital age through intensely expressive body language.",
    [[0,3,"主语","/ðə/ /ˈmɒdərn/ /dæns/ /ˈkʌmpəni/","现代舞团"],[4,4,"谓语","/ɪnˈtɜːrprɪtɪd/","诠释"],[5,12,"宾语","/ˈhjuːmən/ /ˌeɪliəˈneɪʃən/ /ænd/ /kəˈnɛkʃən/ /ɪn/ /ðə/ /ˈdɪdʒɪtl/ /eɪdʒ/","人类在数字化时代中的疏离与联结"],[13,17,"方式状语","/θruː/ /ɪnˈtɛnsli/ /ɪkˈsprɛsɪv/ /ˈbɒdi/ /ˈlæŋɡwɪdʒ/","以极具张力的肢体语言"]],
    [{ type: "现代舞蹈", text: "alienation (疏离), body language (肢体语言), digital age (数字化时代), interpret (诠释)" }]
  ],
  ["q_art_s116",
    "博物馆在归还被盗文物方面面临着日益增加的国际法律与道德压力",
    "Museums face mounting international legal and ethical pressure regarding the repatriation of looted cultural artifacts.",
    [[0,0,"主语","/mjuːˈziːəmz/","博物馆"],[1,1,"谓语","/feɪs/","面临"],[2,7,"宾语","/ˈmaʊntɪŋ/ /ˌɪntərˈnæʃənəl/ /ˈliːɡəl/ /ænd/ /ˈɛθɪkəl/ /ˈprɛʃər/","日益增加的国际法律与道德压力"],[8,13,"定语","/rɪˈɡɑːrdɪŋ/ /ðə/ /ˌriːpætriˈeɪʃən/ /ɒv/ /ˈluːtɪd/ /ˈkʌltʃərəl/ /ˈɑːrtɪfækts/","关于归还被盗文物"]],
    [{ type: "博物馆伦理", text: "repatriation (归还/遣返), looted artifacts (被盗文物), ethical pressure (道德压力), mounting (日益增加的)" }]
  ],
  ["q_art_s117",
    "艺术教育不应仅局限于技法训练，更应培养批判性思维与跨文化理解能力",
    "Art education should not be confined to technical training alone but should cultivate critical thinking and cross-cultural understanding.",
    [[0,1,"主语","/ɑːrt/ /ˌɛdʒuˈkeɪʃən/","艺术教育"],[2,2,"情态","/ʃʊd/","不应"],[3,3,"谓语","/nɒt/","(not)"],[4,4,"谓语","/biː/","被"],[5,5,"谓语","/kənˈfaɪnd/","局限于"],[6,9,"状语","/tuː/ /ˈtɛknɪkəl/ /ˈtreɪnɪŋ/ /əˈloʊn/","仅技法训练"],[10,10,"连词","/bʌt/","而"],[11,12,"并列谓语","/ʃʊd/ /ˈkʌltɪveɪt/","应培养"],[13,17,"宾语","/ˈkrɪtɪkəl/ /ˈθɪŋkɪŋ/ /ænd/ /krɒs-ˈkʌltʃərəl/ /ˌʌndərˈstændɪŋ/","批判性思维与跨文化理解能力"]],
    [{ type: "艺术教育", text: "confined to (局限于), cultivate (培养), critical thinking (批判性思维), cross-cultural understanding (跨文化理解)" }]
  ],
  ["q_art_s118",
    "企业赞助已成为当代艺术生态系统中不可或缺的资金来源与推广渠道",
    "Corporate sponsorship has become an indispensable source of funding and a promotional channel within the contemporary art ecosystem.",
    [[0,1,"主语","/ˈkɔːrpərət/ /ˈspɒnsərʃɪp/","企业赞助"],[2,3,"谓语(现完)","/hæz/ /bɪˈkʌm/","已成为"],[4,14,"表语","/æn/ /ˌɪndɪˈspɛnsəbl/ /sɔːrs/ /ɒv/ /ˈfʌndɪŋ/ /ænd/ /ə/ /prəˈmoʊʃənəl/ /ˈtʃænəl/ /wɪˈðɪn/ /ðə/ /kənˈtɛmpəˌrɛri/ /ɑːrt/ /ˈiːkoʊˌsɪstəm/","当代艺术生态系统中不可或缺的资金来源与推广渠道"]],
    [{ type: "艺术赞助", text: "corporate sponsorship (企业赞助), indispensable (不可或缺的), art ecosystem (艺术生态系统), promotional channel (推广渠道)" }]
  ],
  ["q_art_s119",
    "数字艺术的兴起引发了关于原创性、所有权以及艺术价值评估标准的激烈辩论",
    "The rise of digital art has sparked intense debate over originality, ownership, and the criteria for evaluating artistic value.",
    [[0,4,"主语","/ðə/ /raɪz/ /ɒv/ /ˈdɪdʒɪtl/ /ɑːrt/","数字艺术的兴起"],[5,6,"谓语(现完)","/hæz/ /spɑːrkt/","引发"],[7,8,"宾语","/ɪnˈtɛns/ /dɪˈbeɪt/","激烈辩论"],[9,9,"介词","/ˈoʊvər/","关于"],[10,17,"宾语","/ˌɒrɪdʒəˈnælɪti/ /ˈoʊnərʃɪp/ /ænd/ /ðə/ /kraɪˈtɪəriə/ /fɔːr/ /ɪˈvæljueɪtɪŋ/ /ɑːrˈtɪstɪk/ /ˈvæljuː/","原创性、所有权及艺术价值评估标准"]],
    [{ type: "数字艺术", text: "originality (原创性), ownership (所有权), evaluating artistic value (评估艺术价值), criteria (标准)" }]
  ],
  ["q_art_s120",
    "修复师在清洁这幅数百年历史的油画时，必须极其谨慎地保留其原始颜料层",
    "When cleaning this centuries-old oil painting, the restorer must exercise extreme caution to preserve its original pigment layers.",
    [[0,0,"时间状语","/wɛn/","当"],[1,1,"谓语","/ˈkliːnɪŋ/","清洁"],[2,5,"宾语","/ðɪs/ /ˈsɛntʃəriz-oʊld/ /ɔɪl/ /ˈpeɪntɪŋ/","这幅数百年历史的油画时"],[6,7,"主语","/ðə/ /rɪˈstɔːrər/","修复师"],[8,10,"谓语","/mʌst/ /ˈɛksərsaɪz/ /ɪkˈstriːm/","必须极其谨慎"],[11,11,"宾语","/ˈkɔːʃən/","(地)"],[12,12,"目的","/tuː/","以"],[13,13,"谓语","/prɪˈzɜːrv/","保留"],[14,17,"宾语","/ɪts/ /əˈrɪdʒənəl/ /ˈpɪɡmənt/ /ˈleɪərz/","其原始颜料层"]],
    [{ type: "艺术修复", text: "restorer (修复师), pigment layers (颜料层), exercise caution (谨慎行事), preserve (保留)" }]
  ],
  ["q_art_s121",
    "这场双年展汇集了来自全球四十多个国家的先锋艺术家，呈现多元文化的对话",
    "The biennale brings together avant-garde artists from over forty countries worldwide, presenting a dialogue of diverse cultures.",
    [[0,1,"主语","/ðə/ /biːɛnˈɑːleɪ/","这场双年展"],[2,3,"谓语","/brɪŋz/ /təˈɡɛðər/","汇集"],[4,10,"宾语","/ˌævɑːnt-ˈgɑːrd/ /ˈɑːrtɪsts/ /frɒm/ /ˈoʊvər/ /ˈfɔːrti/ /ˈkʌntriz/ /ˈwɜːrldwaɪd/","来自全球四十多个国家的先锋艺术家"],[11,11,"状语","/prɪˈzɛntɪŋ/","呈现"],[12,16,"宾语","/ə/ /ˈdaɪəlɒɡ/ /ɒv/ /daɪˈvɜːrs/ /ˈkʌltʃərz/","多元文化的对话"]],
    [{ type: "国际展览", text: "biennale (双年展), avant-garde (先锋的), dialogue of cultures (文化对话), diverse (多元的)" }]
  ],
  ["q_art_s122",
    "这位版画家运用复杂的蚀刻技法在金属板上创造出层次丰富的明暗对比效果",
    "The printmaker employed intricate etching techniques on metal plates to create richly layered chiaroscuro effects.",
    [[0,1,"主语","/ðə/ /ˈprɪntˌmeɪkər/","这位版画家"],[2,2,"谓语","/ɪmˈplɔɪd/","运用"],[3,5,"宾语","/ˈɪntrɪkət/ /ˈɛtʃɪŋ/ /tɛkˈniːks/","复杂的蚀刻技法"],[6,8,"地点状语","/ɒn/ /ˈmɛtl/ /pleɪts/","在金属板上"],[9,9,"目的","/tuː/","以"],[10,10,"谓语","/kriˈeɪt/","创造"],[11,14,"宾语","/ˈrɪtʃli/ /ˈleɪərd/ /kiˌɑːrəˈskʊroʊ/ /ɪˈfɛkts/","层次丰富的明暗对比效果"]],
    [{ type: "版画艺术", text: "etching (蚀刻), chiaroscuro (明暗对比), printmaker (版画家), layered (层次丰富的)" }]
  ],
  ["q_art_s123",
    "文化政策制定者正在努力平衡艺术自由表达与社会公共秩序之间的关系",
    "Cultural policymakers are striving to balance artistic freedom of expression with social public order.",
    [[0,1,"主语","/ˈkʌltʃərəl/ /ˈpɒlɪsiˌmeɪkərz/","文化政策制定者"],[2,3,"谓语(进行)","/ɑːr/ /ˈstraɪvɪŋ/","正在努力"],[4,4,"宾语","/tuː/","去"],[5,5,"谓语","/ˈbæləns/","平衡"],[6,10,"宾语","/ɑːrˈtɪstɪk/ /ˈfriːdəm/ /ɒv/ /ɪkˈsprɛʃən/ /wɪð/","艺术自由表达与"],[11,13,"宾语","/ˈsoʊʃəl/ /ˈpʌblɪk/ /ˈɔːrdər/","社会公共秩序"]],
    [{ type: "文化政策", text: "policymakers (政策制定者), freedom of expression (表达自由), strive to balance (努力平衡), public order (公共秩序)" }]
  ],
  ["q_art_s124",
    "陶瓷艺术家的作品以极简美学和精湛的釉色处理技巧在国际收藏界备受推崇",
    "The ceramic artist's works are highly acclaimed in international collecting circles for their minimalist aesthetics and masterful glaze techniques.",
    [[0,3,"主语","/ðə/ /səˈræmɪk/ /ˈɑːrtɪsts/ /wɜːrks/","陶瓷艺术家的作品"],[4,5,"谓语","/ɑːr/ /ˈhaɪli/","备受"],[6,6,"谓语","/əˈkleɪmd/","推崇"],[7,10,"地点状语","/ɪn/ /ˌɪntərˈnæʃənəl/ /kəˈlɛktɪŋ/ /ˈsɜːrklz/","在国际收藏界"],[11,11,"原因","/fɔːr/","因"],[12,18,"原因状语","/ðɛər/ /ˈmɪnɪməlɪst/ /ɛsˈθɛtɪks/ /ænd/ /ˈmæstərfl/ /ɡleɪz/ /tɛkˈniːks/","其极简美学和精湛釉色处理技巧"]],
    [{ type: "陶瓷艺术", text: "minimalist aesthetics (极简美学), glaze techniques (釉色技巧), acclaimed (备受推崇), collecting circles (收藏界)" }]
  ],
  ["q_art_s125",
    "这场学术研讨会深入探讨了殖民主义历史如何塑造了西方艺术典藏的构成",
    "The academic symposium delved into how colonial history has shaped the composition of Western art collections.",
    [[0,2,"主语","/ði/ /ˌækəˈdɛmɪk/ /sɪmˈpoʊziəm/","这场学术研讨会"],[3,4,"谓语","/ˈdɛlvd/ /ˈɪntuː/","深入探讨"],[5,5,"宾语从句","/haʊ/","如何"],[6,7,"从句主语","/kəˈloʊniəl/ /ˈhɪstəri/","殖民主义历史"],[8,9,"从句谓语","/hæz/ /ʃeɪpt/","塑造了"],[10,15,"从句宾语","/ðə/ /ˌkɒmpəˈzɪʃən/ /ɒv/ /ˈwɛstərn/ /ɑːrt/ /kəˈlɛkʃənz/","西方艺术典藏的构成"]],
    [{ type: "艺术史学", text: "symposium (研讨会), colonial history (殖民历史), art collections (艺术典藏), delve into (深入探讨)" }]
  ],
  ["q_art_s126",
    "公共艺术项目旨在将美学体验融入日常城市空间，提升社区居民的生活品质",
    "Public art projects aim to integrate aesthetic experiences into everyday urban spaces, enhancing the quality of life for community residents.",
    [[0,2,"主语","/ˈpʌblɪk/ /ɑːrt/ /ˈprɒdʒɛkts/","公共艺术项目"],[3,3,"谓语","/eɪm/","旨在"],[4,4,"宾语","/tuː/","将"],[5,5,"谓语","/ˈɪntɪɡreɪt/","融入"],[6,7,"宾语","/ɛsˈθɛtɪk/ /ɪkˈspɪəriənsɪz/","美学体验"],[8,11,"状语","/ˈɪntuː/ /ˈɛvriˌdeɪ/ /ˈɜːrbən/ /speɪsɪz/","日常城市空间"],[12,12,"状语","/ɪnˈhænsɪŋ/","提升"],[13,19,"宾语","/ðə/ /ˈkwɒlɪti/ /ɒv/ /laɪf/ /fɔːr/ /kəˈmjuːnɪti/ /ˈrɛzɪdənts/","社区居民的生活品质"]],
    [{ type: "公共艺术", text: "public art (公共艺术), aesthetic experiences (美学体验), urban spaces (城市空间), enhance quality of life (提升生活品质)" }]
  ],
  ["q_art_s127",
    "这位概念艺术家质疑了艺术品的物质性，将观念本身作为唯一的创作核心",
    "The conceptual artist questioned the materiality of artworks, treating the idea itself as the sole creative core.",
    [[0,2,"主语","/ðə/ /kənˈsɛptʃuəl/ /ˈɑːrtɪst/","这位概念艺术家"],[3,3,"谓语","/ˈkwɛstʃənd/","质疑"],[4,7,"宾语","/ðə/ /məˌtɪəriˈælɪti/ /ɒv/ /ˈɑːrtˌwɜːrks/","艺术品的物质性"],[8,8,"状语","/ˈtriːtɪŋ/","将"],[9,11,"宾语","/ði/ /aɪˈdiːə/ /ɪtˈsɛlf/","观念本身"],[12,12,"状语","/æz/","作为"],[13,16,"宾补","/ðə/ /soʊl/ /kriˈeɪtɪv/ /kɔːr/","唯一的创作核心"]],
    [{ type: "概念艺术", text: "conceptual artist (概念艺术家), materiality (物质性), creative core (创作核心), treat as (将...作为)" }]
  ],
  ["q_art_s128",
    "交响乐团在音乐厅举办了一场向二十世纪现代主义作曲家致敬的特别演出",
    "The symphony orchestra held a special concert at the concert hall paying tribute to twentieth-century modernist composers.",
    [[0,2,"主语","/ðə/ /ˈsɪmfəni/ /ˈɔːrkɪstrə/","交响乐团"],[3,3,"谓语","/hɛld/","举办"],[4,8,"宾语","/ə/ /ˈspɛʃəl/ /ˈkɒnsərt/ /æt/ /ðə/ /ˈkɒnsərt/ /hɔːl/","音乐厅的一场特别演出"],[9,10,"定语","/ˈpeɪɪŋ/ /ˈtrɪbjuːt/","向...致敬"],[11,14,"定语","/tuː/ /ˌtwɛntiəθ-ˈsɛntʃəri/ /ˈmɒdərnɪst/ /kəmˈpoʊzərz/","二十世纪现代主义作曲家"]],
    [{ type: "古典音乐", text: "symphony orchestra (交响乐团), pay tribute (致敬), modernist composers (现代主义作曲家), concert hall (音乐厅)" }]
  ],
  ["q_art_s129",
    "文学节邀请了多位普利策奖得主就叙事技巧与文化传承展开对谈",
    "The literary festival invited multiple Pulitzer Prize winners to discuss narrative techniques and cultural heritage.",
    [[0,2,"主语","/ðə/ /ˈlɪtərəri/ /ˈfɛstɪvəl/","文学节"],[3,3,"谓语","/ɪnˈvaɪtɪd/","邀请"],[4,7,"宾语","/ˈmʌltɪpl/ /ˈpʊlɪtsər/ /praɪz/ /ˈwɪnərz/","多位普利策奖得主"],[8,8,"宾补","/tuː/","就...展开对谈"],[9,9,"宾补","/dɪˈskʌs/","讨论"],[10,14,"宾语","/ˈnærətɪv/ /tɛkˈniːks/ /ænd/ /ˈkʌltʃərəl/ /ˈhɛrɪtɪdʒ/","叙事技巧与文化传承"]],
    [{ type: "文学活动", text: "literary festival (文学节), Pulitzer Prize (普利策奖), narrative techniques (叙事技巧), cultural heritage (文化传承)" }]
  ],
  ["q_art_s130",
    "这座历史建筑的外立面经过精细修复后，重新展现了巴洛克时期的装饰华丽风格",
    "After meticulous restoration, the historic building's facade has re-emerged showcasing the ornate decorative style of the Baroque period.",
    [[0,2,"时间状语","/ˈæftər/ /məˈtɪkjələs/ /ˌrɛstəˈreɪʃən/","经过精细修复后"],[3,6,"主语","/ðə/ /hɪˈstɒrɪk/ /ˈbɪldɪŋz/ /fəˈsɑːd/","这座历史建筑的外立面"],[7,8,"谓语(现完)","/hæz/ /riː-ɪˈmɜːrdʒd/","重新展现"],[9,9,"状语","/ˈʃoʊkeɪsɪŋ/","展示"],[10,16,"宾语","/ði/ /ˈɔːrneɪt/ /ˈdɛkərətɪv/ /staɪl/ /ɒv/ /ðə/ /bəˈroʊk/ /ˈpɪəriəd/","巴洛克时期的装饰华丽风格"]],
    [{ type: "建筑修复", text: "facade (外立面), Baroque period (巴洛克时期), ornate (华丽的), meticulous restoration (精细修复)" }]
  ],
  ["q_art_s131",
    "实验剧场打破了第四堵墙，直接邀请观众参与叙事进程并影响故事走向",
    "Experimental theatre broke the fourth wall, directly inviting audiences to participate in the narrative process and influence the story's direction.",
    [[0,1,"主语","/ɪkˌspɛrɪˈmɛntl/ /ˈθiətər/","实验剧场"],[2,2,"谓语","/broʊk/","打破"],[3,5,"宾语","/ðə/ /fɔːrθ/ /wɔːl/","第四堵墙"],[6,6,"状语","/dɪˈrɛktli/","直接"],[7,7,"状语","/ɪnˈvaɪtɪŋ/","邀请"],[8,8,"宾语","/ˈɔːdiənsɪz/","观众"],[9,9,"宾补","/tuː/","去"],[10,10,"宾补","/pɑːrˈtɪsɪpeɪt/","参与"],[11,14,"宾语","/ɪn/ /ðə/ /ˈnærətɪv/ /ˈprɒsɛs/","叙事进程"],[15,15,"连词","/ænd/","并"],[16,19,"并列谓语","/ˈɪnfluəns/ /ðə/ /ˈstɔːriz/ /dɪˈrɛkʃən/","影响故事走向"]],
    [{ type: "实验戏剧", text: "fourth wall (第四堵墙), experimental theatre (实验剧场), narrative process (叙事进程), participate (参与)" }]
  ],
  ["q_art_s132",
    "艺术史学家指出，女性艺术家在二十世纪长期被主流艺术史叙事所边缘化",
    "Art historians note that female artists were long marginalized by mainstream art historical narratives in the twentieth century.",
    [[0,1,"主语","/ɑːrt/ /hɪˈstɔːriənz/","艺术史学家"],[2,2,"谓语","/noʊt/","指出"],[3,3,"宾从引导","/ðæt/","(that)"],[4,5,"从句主语","/ˈfiːmeɪl/ /ˈɑːrtɪsts/","女性艺术家"],[6,6,"从句状语","/wɜːr/","被"],[7,7,"从句状语","/lɒŋ/","长期"],[8,8,"从句谓语","/ˈmɑːrdʒɪnəˌlaɪzd/","边缘化"],[9,14,"从句施事","/baɪ/ /ˈmeɪnstriːm/ /ɑːrt/ /hɪˈstɒrɪkəl/ /ˈnærətɪvz/ /ɪn/","被主流艺术史叙事在"],[15,16,"从句状语","/ðə/ /ˌtwɛntiəθ/ /ˈsɛntʃəri/","二十世纪"]],
    [{ type: "艺术史研究", text: "marginalized (边缘化的), art historical narratives (艺术史叙事), mainstream (主流的), female artists (女性艺术家)" }]
  ],
  ["q_art_s133",
    "这位插画家以独特的视觉语言为经典文学作品创作了令人过目难忘的封面设计",
    "The illustrator created unforgettable cover designs for classic literary works using a distinctive visual language.",
    [[0,1,"主语","/ðə/ /ˈɪləstreɪtər/","这位插画家"],[2,2,"谓语","/kriˈeɪtɪd/","创作"],[3,5,"宾语","/ˌʌnfərˈɡɛtəbəl/ /ˈkʌvər/ /dɪˈzaɪnz/","令人过目难忘的封面设计"],[6,9,"状语","/fɔːr/ /ˈklæsɪk/ /ˈlɪtərəri/ /wɜːrks/","为经典文学作品"],[10,14,"方式状语","/ˈjuːzɪŋ/ /ə/ /dɪˈstɪŋktɪv/ /ˈvɪʒuəl/ /ˈlæŋɡwɪdʒ/","以独特的视觉语言"]],
    [{ type: "插画设计", text: "illustrator (插画家), visual language (视觉语言), cover designs (封面设计), distinctive (独特的)" }]
  ],
  ["q_art_s134",
    "跨文化艺术交流项目促进了对不同审美传统之间共通性与差异性的深入理解",
    "Cross-cultural art exchange programs have fostered a deeper understanding of both commonalities and differences among diverse aesthetic traditions.",
    [[0,4,"主语","/krɒs-ˈkʌltʃərəl/ /ɑːrt/ /ɪksˈtʃeɪndʒ/ /ˈproʊɡræmz/","跨文化艺术交流项目"],[5,6,"谓语(现完)","/hæv/ /ˈfɒstərd/","促进"],[7,8,"宾语","/ə/ /ˈdiːpər/","更深入"],[9,9,"宾语","/ˌʌndərˈstændɪŋ/","理解"],[10,10,"介词","/ɒv/","对"],[11,17,"宾语","/boʊθ/ /ˌkɒmənˈælɪtiz/ /ænd/ /ˈdɪfərənsɪz/ /əˈmʌŋ/ /daɪˈvɜːrs/ /ɛsˈθɛtɪk/ /trəˈdɪʃənz/","不同审美传统间的共通性与差异性"]],
    [{ type: "文化交流", text: "cross-cultural exchange (跨文化交流), aesthetic traditions (审美传统), commonalities (共通性), foster (促进)" }]
  ],
  ["q_art_s135",
    "艺术品的真伪鉴定依赖于科学检测技术与艺术史文献证据的综合分析",
    "The authentication of artworks relies on a comprehensive analysis combining scientific testing techniques with art historical documentary evidence.",
    [[0,3,"主语","/ði/ /ˌɔːθɛntɪˈkeɪʃən/ /ɒv/ /ˈɑːrtˌwɜːrks/","艺术品的真伪鉴定"],[4,4,"谓语","/rɪˈlaɪz/","依赖"],[5,5,"介词","/ɒn/","于"],[6,8,"宾语","/ə/ /ˌkɒmprɪˈhɛnsɪv/ /əˈnæləsɪs/","综合分析"],[9,9,"定语","/kəmˈbaɪnɪŋ/","结合"],[10,13,"定语","/ˌsaɪənˈtɪfɪk/ /ˈtɛstɪŋ/ /tɛkˈniːks/ /wɪð/","科学检测技术与"],[14,17,"定语","/ɑːrt/ /hɪˈstɒrɪkəl/ /ˌdɒkjʊˈmɛntəri/ /ˈɛvɪdəns/","艺术史文献证据"]],
    [{ type: "艺术品鉴定", text: "authentication (真伪鉴定), documentary evidence (文献证据), comprehensive analysis (综合分析), scientific testing (科学检测)" }]
  ],
  ["q_art_s136",
    "这位纪录片导演以长达十年的跟拍记录了一位民间艺人的艺术生涯与生存困境",
    "The documentary director spent a decade following a folk artist, chronicling their artistic career and survival struggles.",
    [[0,2,"主语","/ðə/ /ˌdɒkjʊˈmɛntəri/ /dɪˈrɛktər/","这位纪录片导演"],[3,4,"谓语","/spɛnt/ /ə/","花费"],[5,5,"宾语","/ˈdɛkeɪd/","十年"],[6,6,"状语","/ˈfɒloʊɪŋ/","跟拍"],[7,9,"宾语","/ə/ /foʊk/ /ˈɑːrtɪst/","一位民间艺人"],[10,10,"状语","/ˈkrɒnɪkəlɪŋ/","记录"],[11,15,"宾语","/ðɛər/ /ɑːrˈtɪstɪk/ /kəˈrɪər/ /ænd/ /sərˈvaɪvl/ /ˈstrʌɡəlz/","其艺术生涯与生存困境"]],
    [{ type: "艺术纪录片", text: "chronicling (记录), folk artist (民间艺人), survival struggles (生存困境), documentary director (纪录片导演)" }]
  ],
  ["q_art_s137",
    "画廊经营者必须在商业盈利与艺术纯粹性之间找到微妙的平衡点",
    "Gallery operators must find a delicate balance between commercial profitability and artistic purity.",
    [[0,1,"主语","/ˈɡæləri/ /ˈɒpəreɪtərz/","画廊经营者"],[2,2,"情态","/mʌst/","必须"],[3,3,"谓语","/faɪnd/","找到"],[4,6,"宾语","/ə/ /ˈdɛlɪkət/ /ˈbæləns/","微妙的平衡点"],[7,12,"定语","/bɪˈtwiːn/ /kəˈmɜːrʃəl/ /ˌprɒfɪtəˈbɪlɪti/ /ænd/ /ɑːrˈtɪstɪk/ /ˈpjʊrɪti/","商业盈利与艺术纯粹性之间"]],
    [{ type: "艺术商业", text: "gallery operators (画廊经营者), profitability (盈利性), artistic purity (艺术纯粹性), delicate balance (微妙平衡)" }]
  ],
  ["q_art_s138",
    "虚拟现实技术正在为博物馆参观体验带来前所未有的互动维度",
    "Virtual reality technology is bringing unprecedented interactive dimensions to the museum visiting experience.",
    [[0,2,"主语","/ˈvɜːrtʃuəl/ /riˈælɪti/ /tɛkˈnɒlədʒi/","虚拟现实技术"],[3,4,"谓语(进行)","/ɪz/ /ˈbrɪŋɪŋ/","正在带来"],[5,7,"宾语","/ˌʌnprɪˈsiːdɛntɪd/ /ˌɪntərˈæktɪv/ /dɪˈmɛnʃənz/","前所未有的互动维度"],[8,12,"间接宾语","/tuː/ /ðə/ /mjuːˈziːəm/ /ˈvɪzɪtɪŋ/ /ɪkˈspɪəriəns/","博物馆参观体验"]],
    [{ type: "博物馆科技", text: "virtual reality (虚拟现实), interactive dimensions (互动维度), unprecedented (前所未有的), visiting experience (参观体验)" }]
  ],
  ["q_art_s139",
    "这位诗人以凝练的语言捕捉了城市化进程中传统社区消逝的悲怆与记忆",
    "The poet captured the pathos and memory of vanishing traditional communities in urbanization through concise language.",
    [[0,1,"主语","/ðə/ /ˈpoʊɪt/","这位诗人"],[2,2,"谓语","/ˈkæptʃərd/","捕捉"],[3,9,"宾语","/ðə/ /ˈpeɪθɒs/ /ænd/ /ˈmɛməri/ /ɒv/ /ˈvænɪʃɪŋ/ /trəˈdɪʃənəl/ /kəˈmjuːnɪtiz/","城市化进程中传统社区消逝的悲怆与记忆"],[10,10,"状语","/ɪn/","在"],[11,11,"状语","/ˌɜːrbənɪˈzeɪʃən/","城市化中"],[12,14,"方式状语","/θruː/ /kənˈsaɪs/ /ˈlæŋɡwɪdʒ/","以凝练的语言"]],
    [{ type: "诗歌创作", text: "pathos (悲怆), vanishing communities (消逝的社区), urbanization (城市化), concise language (凝练的语言)" }]
  ],
  ["q_art_s140",
    "艺术驻留项目为新兴艺术家提供了宝贵的创作空间、资源支持与国际曝光机会",
    "Artist residency programs provide emerging artists with valuable creative space, resource support, and international exposure opportunities.",
    [[0,2,"主语","/ˈɑːrtɪst/ /ˈrɛzɪdənsi/ /ˈproʊɡræmz/","艺术驻留项目"],[3,3,"谓语","/prəˈvaɪd/","提供"],[4,5,"间接宾语","/ɪˈmɜːrdʒɪŋ/ /ˈɑːrtɪsts/","新兴艺术家"],[6,6,"介词","/wɪð/","以"],[7,15,"直接宾语","/ˈvæljuəbl/ /kriˈeɪtɪv/ /speɪs/ /ˈriːsɔːrs/ /səˈpɔːrt/ /ænd/ /ˌɪntərˈnæʃənəl/ /ɪkˈspoʊʒər/ /ˌɒpərˈtuːnɪtiz/","宝贵的创作空间、资源支持与国际曝光机会"]],
    [{ type: "艺术驻留", text: "residency programs (驻留项目), emerging artists (新兴艺术家), international exposure (国际曝光), resource support (资源支持)" }]
  ],
  ["q_art_s141",
    "装饰艺术运动的家具设计完美融合了工艺美术传统与现代工业美学的元素",
    "Art Deco furniture design perfectly blended elements of the Arts and Crafts tradition with modern industrial aesthetics.",
    [[0,3,"主语","/ɑːrt/ /ˈdɛkoʊ/ /ˈfɜːrnɪtʃər/ /dɪˈzaɪn/","装饰艺术运动的家具设计"],[4,4,"状语","/ˈpɜːrfɪktli/","完美"],[5,5,"谓语","/ˈblɛndɪd/","融合"],[6,14,"宾语","/ˈɛlɪmənts/ /ɒv/ /ðə/ /ɑːrts/ /ænd/ /krɑːfts/ /trəˈdɪʃən/ /wɪð/ /ˈmɒdərn/ /ɪnˈdʌstriəl/ /ɛsˈθɛtɪks/","工艺美术传统与现代工业美学的元素"]],
    [{ type: "装饰艺术", text: "Art Deco (装饰艺术), Arts and Crafts (工艺美术), industrial aesthetics (工业美学), blend (融合)" }]
  ],
  ["q_art_s142",
    "这场拍卖会的预展吸引了全球顶级收藏家前来评估即将上拍的重要艺术品",
    "The auction preview attracted top collectors worldwide to assess the significant artworks coming to the block.",
    [[0,2,"主语","/ði/ /ˈɔːkʃən/ /ˈpriːvjuː/","这场拍卖会的预展"],[3,3,"谓语","/əˈtræktɪd/","吸引"],[4,6,"宾语","/tɒp/ /kəˈlɛktərz/ /ˈwɜːrldwaɪd/","全球顶级收藏家"],[7,7,"宾补","/tuː/","前来"],[8,8,"宾补","/əˈsɛs/","评估"],[9,15,"宾语","/ðə/ /sɪɡˈnɪfɪkənt/ /ˈɑːrtˌwɜːrks/ /ˈkʌmɪŋ/ /tuː/ /ðə/ /blɒk/","即将上拍的重要艺术品"]],
    [{ type: "艺术拍卖", text: "auction preview (拍卖预展), coming to the block (上拍), collectors (收藏家), assess (评估)" }]
  ],
  ["q_art_s143",
    "这位雕塑家以大型公共装置探讨了气候变化对生态系统造成的不可逆影响",
    "The sculptor addressed the irreversible impact of climate change on ecosystems through a large-scale public installation.",
    [[0,1,"主语","/ðə/ /ˈskʌlptər/","这位雕塑家"],[2,2,"谓语","/əˈdrɛst/","探讨"],[3,10,"宾语","/ði/ /ˌɪrɪˈvɜːrsəbl/ /ˈɪmpækt/ /ɒv/ /ˈklaɪmət/ /tʃeɪndʒ/ /ɒn/ /ˈiːkoʊˌsɪstəmz/","气候变化对生态系统造成的不可逆影响"],[11,15,"方式状语","/θruː/ /ə/ /lɑːrdʒ-skeɪl/ /ˈpʌblɪk/ /ˌɪnstəˈleɪʃən/","通过大型公共装置"]],
    [{ type: "生态艺术", text: "irreversible impact (不可逆影响), climate change (气候变化), large-scale installation (大型装置), ecosystems (生态系统)" }]
  ],
  ["q_art_s144",
    "文化多样性是创意产业持续繁荣的核心驱动力，也是社会创新的重要源泉",
    "Cultural diversity is the core driving force behind the sustained prosperity of creative industries and a vital source of social innovation.",
    [[0,1,"主语","/ˈkʌltʃərəl/ /daɪˈvɜːrsɪti/","文化多样性"],[2,2,"系动词","/ɪz/","是"],[3,12,"表语","/ðə/ /kɔːr/ /ˈdraɪvɪŋ/ /fɔːrs/ /bɪˈhaɪnd/ /ðə/ /səˈsteɪnd/ /ˈprɒspərɪti/ /ɒv/ /kriˈeɪtɪv/ /ˈɪndəstriz/","创意产业持续繁荣的核心驱动力"],[13,13,"连词","/ænd/","也是"],[14,19,"并列表语","/ə/ /ˈvaɪtl/ /sɔːrs/ /ɒv/ /ˈsoʊʃəl/ /ˌɪnəˈveɪʃən/","社会创新的重要源泉"]],
    [{ type: "创意产业", text: "cultural diversity (文化多样性), creative industries (创意产业), driving force (驱动力), social innovation (社会创新)" }]
  ],
  ["q_art_s145",
    "这位艺术理论家主张，审美判断并非纯粹主观，而是深受历史语境与社会权力结构的影响",
    "The art theorist argues that aesthetic judgment is not purely subjective but is deeply influenced by historical context and social power structures.",
    [[0,2,"主语","/ði/ /ɑːrt/ /ˈθiːərɪst/","这位艺术理论家"],[3,3,"谓语","/ˈɑːrɡjuːz/","主张"],[4,4,"宾从","/ðæt/","(that)"],[5,6,"从句主语","/ɛsˈθɛtɪk/ /ˈdʒʌdʒmənt/","审美判断"],[7,7,"从句系动","/ɪz/","并非"],[8,8,"从句表语","/nɒt/","(not)"],[9,10,"从句表语","/ˈpjʊərli/ /sʌbˈdʒɛktɪv/","纯粹主观"],[11,11,"连词","/bʌt/","而是"],[12,13,"从句谓语","/ɪz/ /ˈdiːpli/","深受"],[14,14,"从句谓语","/ˈɪnfluənst/","影响"],[15,21,"从句状语","/baɪ/ /hɪˈstɒrɪkəl/ /ˈkɒntɛkst/ /ænd/ /ˈsoʊʃəl/ /ˈpaʊər/ /ˈstrʌktʃərz/","历史语境与社会权力结构"]],
    [{ type: "艺术理论", text: "aesthetic judgment (审美判断), subjective (主观的), power structures (权力结构), historical context (历史语境)" }]
  ],
  ["q_art_s146",
    "民族音乐学家致力于记录濒危语言中的口述歌谣，以保存珍贵的非物质文化遗产",
    "Ethnomusicologists are dedicated to documenting oral songs in endangered languages to preserve precious intangible cultural heritage.",
    [[0,0,"主语","/ˌɛθnoʊmjuːzɪˈkɒlədʒɪsts/","民族音乐学家"],[1,2,"谓语","/ɑːr/ /ˈdɛdɪkeɪtɪd/","致力于"],[3,3,"宾语","/tuː/","去"],[4,4,"谓语","/ˈdɒkjʊməntɪŋ/","记录"],[5,7,"宾语","/ˈɔːrəl/ /sɒŋz/ /ɪn/","口述歌谣于"],[8,9,"定语","/ɪnˈdeɪndʒərd/ /ˈlæŋɡwɪdʒɪz/","濒危语言中"],[10,10,"目的","/tuː/","以"],[11,11,"谓语","/prɪˈzɜːrv/","保存"],[12,15,"宾语","/ˈprɛʃəs/ /ɪnˈtændʒɪbl/ /ˈkʌltʃərəl/ /ˈhɛrɪtɪdʒ/","珍贵的非物质文化遗产"]],
    [{ type: "民族音乐学", text: "ethnomusicologists (民族音乐学家), endangered languages (濒危语言), oral songs (口述歌谣), intangible heritage (非物质文化遗产)" }]
  ],
  ["q_art_s147",
    "这位时装设计师从本土纺织工艺中汲取灵感，将传统图案转化为当代高级定制语言",
    "The fashion designer drew inspiration from indigenous textile crafts, transforming traditional patterns into contemporary haute couture language.",
    [[0,2,"主语","/ðə/ /ˈfæʃən/ /dɪˈzaɪnər/","这位时装设计师"],[3,4,"谓语","/druː/ /ˌɪnspəˈreɪʃən/","汲取灵感"],[5,8,"状语","/frɒm/ /ɪnˈdɪdʒənəs/ /ˈtɛkstaɪl/ /krɑːfts/","从本土纺织工艺"],[9,9,"状语","/trænsˈfɔːrmɪŋ/","将"],[10,11,"宾语","/trəˈdɪʃənəl/ /ˈpætərnz/","传统图案"],[12,12,"状语","/ˈɪntuː/","转化为"],[13,16,"宾语","/kənˈtɛmpəˌrɛri/ /oʊt/ /kuːˈtjʊər/ /ˈlæŋɡwɪdʒ/","当代高级定制语言"]],
    [{ type: "时尚设计", text: "haute couture (高级定制), textile crafts (纺织工艺), indigenous (本土的), transform into (转化为)" }]
  ],
  ["q_art_s148",
    "艺术品的保险估值需要综合考虑其市场价值、历史意义以及物理状况等多重因素",
    "Insurance valuation of artworks requires a comprehensive consideration of multiple factors including market value, historical significance, and physical condition.",
    [[0,3,"主语","/ɪnˈʃʊərəns/ /ˌvæljuˈeɪʃən/ /ɒv/ /ˈɑːrtˌwɜːrks/","艺术品的保险估值"],[4,4,"谓语","/rɪˈkwaɪərz/","需要"],[5,7,"宾语","/ə/ /ˌkɒmprɪˈhɛnsɪv/ /kənˌsɪdəˈreɪʃən/","综合考虑"],[8,10,"介词宾语","/ɒv/ /ˈmʌltɪpl/ /ˈfæktərz/","多重因素"],[11,18,"定语","/ɪnˈkluːdɪŋ/ /ˈmɑːrkɪt/ /ˈvæljuː/ /ˈhɪstɒrɪkəl/ /ˌsɪɡnɪfɪkəns/ /ænd/ /ˈfɪzɪkəl/ /kənˈdɪʃən/","包括市场价值、历史意义及物理状况"]],
    [{ type: "艺术品保险", text: "insurance valuation (保险估值), historical significance (历史意义), physical condition (物理状况), comprehensive consideration (综合考虑)" }]
  ],
  ["q_art_s149",
    "这场跨学科论坛探讨了人工智能生成艺术对创作者身份与版权归属所提出的全新挑战",
    "This interdisciplinary forum explored the novel challenges that AI-generated art poses to creator identity and copyright ownership.",
    [[0,2,"主语","/ðɪs/ /ˌɪntərdɪsəˈplɪnəri/ /ˈfɔːrəm/","这场跨学科论坛"],[3,3,"谓语","/ɪkˈsplɔːrd/","探讨"],[4,5,"宾语","/ðə/ /ˈnɒvəl/","全新"],[6,6,"宾语","/ˈtʃælɪndʒɪz/","挑战"],[7,7,"定从","/ðæt/","(that)"],[8,9,"从句主语","/eɪ-aɪ-ˈdʒɛnəˌreɪtɪd/ /ɑːrt/","人工智能生成艺术"],[10,10,"从句谓语","/poʊzɪz/","提出"],[11,11,"从句宾语","/tuː/","对"],[12,16,"从句宾语","/kriˈeɪtər/ /aɪˈdɛntɪti/ /ænd/ /ˈkɒpiraɪt/ /ˈoʊnərʃɪp/","创作者身份与版权归属"]],
    [{ type: "AI与艺术", text: "AI-generated art (AI生成艺术), copyright ownership (版权归属), creator identity (创作者身份), interdisciplinary (跨学科的)" }]
  ],
];

const sentences = data.map(d => buildItem(d[0], d[1], d[2], d[3], d[4]));

// Validate indices
for (const s of sentences) {
  const maxIdx = s.words.length - 1;
  for (const c of s.components) {
    if (c.start < 0 || c.end > maxIdx || c.start > c.end) {
      console.error(`Index error in ${s.id}: component ${c.label} start=${c.start} end=${c.end} max=${maxIdx}`);
    }
    const slice = s.words.slice(c.start, c.end + 1);
    const subWords = c.subComponents[0].words;
    if (JSON.stringify(slice) !== JSON.stringify(subWords)) {
      console.error(`Mismatch in ${s.id} ${c.label}:`, JSON.stringify(slice), 'vs', JSON.stringify(subWords));
    }
  }
}

function fmtWords(words) {
  return words.map(w => {
    const parts = [`{ word: "${w.word}"`];
    if (w.punctuation) parts.push(`, punctuation: "${w.punctuation}"`);
    parts.push(' }');
    return parts.join('');
  }).join(', ');
}

function fmtItem(item) {
  const lines = [];
  lines.push('    {');
  lines.push(`      id: "${item.id}",`);
  lines.push(`      chinese: "${item.chinese}",`);
  lines.push(`      english_full: "${item.english_full}",`);
  lines.push(`      words: [`);
  lines.push(`        ${fmtWords(item.words)}`);
  lines.push(`      ],`);
  lines.push(`      components: [`);
  for (const c of item.components) {
    lines.push(`        {`);
    lines.push(`          start: ${c.start}, end: ${c.end}, label: "${c.label}", phonetic: "${c.phonetic}", translation: "${c.translation}",`);
    lines.push(`          subComponents: [{ startIndex: 0, words: [${fmtWords(c.subComponents[0].words)}] }]`);
    lines.push(`        },`);
  }
  lines.push(`      ],`);
  lines.push(`      analysis: [`);
  for (const a of item.analysis) {
    lines.push(`        { type: "${a.type}", text: "${a.text}" }`);
  }
  lines.push(`      ]`);
  lines.push(`    }`);
  return lines.join('\n');
}

const out = `export const extensions = {\n  "art_01": [\n${sentences.map(fmtItem).join(',\n')}\n  ]\n};\n`;

fs.writeFileSync('prisma/scenarios_data_ext_art_50.js', out);
console.log('Generated prisma/scenarios_data_ext_art_50.js with', sentences.length, 'sentences');
