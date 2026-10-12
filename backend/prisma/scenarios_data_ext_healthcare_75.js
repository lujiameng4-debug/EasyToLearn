export const extensions = {
  "hospital_01": [
    {
      id: "q_healthcare_s100",
      chinese: "该开创性的基因疗法有望根除多种遗传性疾病",
      english_full: "The groundbreaking gene therapy holds the promise of eradicating multiple hereditary diseases.",
      words: [
        { word: "The" }, { word: "groundbreaking" }, { word: "gene" }, { word: "therapy" }, { word: "holds" },
        { word: "the" }, { word: "promise" }, { word: "of" }, { word: "eradicating" }, { word: "multiple" },
        { word: "hereditary" }, { word: "diseases", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈgraʊndˌbreɪkɪŋ/ /dʒiːn/ /ˈθɛrəpi/", translation: "该开创性的基因疗法",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "groundbreaking" }, { word: "gene" }, { word: "therapy" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hoʊldz/", translation: "拥有/保持",
          subComponents: [{ startIndex: 0, words: [{ word: "holds" }] }]
        },
        {
          start: 5, end: 11, label: "宾语", phonetic: "/ðə/ /ˈprɒmɪs/ /ɒv/ /ɪˈrædɪˌkeɪtɪŋ/ /ˈmʌltɪpəl/ /həˈrɛdɪˌtɛri/ /dɪˈziːzɪz/", translation: "根除多种遗传性疾病的希望",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "promise" }, { word: "of" }, { word: "eradicating" }, { word: "multiple" }, { word: "hereditary" }, { word: "diseases", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗术语", text: "gene therapy (基因疗法), hereditary diseases (遗传病)" }
      ]
    },
    {
      id: "q_healthcare_s101",
      chinese: "精准医疗通过分析个体基因组来定制治疗方案",
      english_full: "Precision medicine customizes treatment plans by analyzing individual genomes.",
      words: [
        { word: "Precision" }, { word: "medicine" }, { word: "customizes" }, { word: "treatment" }, { word: "plans" },
        { word: "by" }, { word: "analyzing" }, { word: "individual" }, { word: "genomes", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/prɪˈsɪʒən/ /ˈmɛdɪsɪn/", translation: "精准医疗",
          subComponents: [{ startIndex: 0, words: [{ word: "Precision" }, { word: "medicine" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/ˈkʌstəmaɪzɪz/ /ˈtriːtmənt/ /plænz/", translation: "定制治疗方案",
          subComponents: [{ startIndex: 0, words: [{ word: "customizes" }, { word: "treatment" }, { word: "plans" }] }]
        },
        {
          start: 5, end: 8, label: "方式状语", phonetic: "/baɪ/ /ˈænəˌlaɪzɪŋ/ /ˌɪndɪˈvɪdʒuəl/ /ˈdʒiːnoʊmz/", translation: "通过分析个体基因组",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "analyzing" }, { word: "individual" }, { word: "genomes", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "前沿医学", text: "precision medicine (精准医疗); customize (定制); genome (基因组)。" }
      ]
    },
    {
      id: "q_healthcare_s102",
      chinese: "临床试验的第三阶段结果证实了该新型抗癌药物的显著疗效",
      english_full: "Phase three clinical trial results confirmed the remarkable efficacy of the novel anticancer drug.",
      words: [
        { word: "Phase" }, { word: "three" }, { word: "clinical" }, { word: "trial" }, { word: "results" },
        { word: "confirmed" }, { word: "the" }, { word: "remarkable" }, { word: "efficacy" }, { word: "of" },
        { word: "the" }, { word: "novel" }, { word: "anticancer" }, { word: "drug", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/feɪz/ /θriː/ /ˈklɪnɪkəl/ /ˈtraɪəl/ /rɪˈzʌlts/", translation: "第三阶段临床试验结果",
          subComponents: [{ startIndex: 0, words: [{ word: "Phase" }, { word: "three" }, { word: "clinical" }, { word: "trial" }, { word: "results" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/kənˈfɜːrmd/", translation: "证实了",
          subComponents: [{ startIndex: 0, words: [{ word: "confirmed" }] }]
        },
        {
          start: 6, end: 13, label: "宾语", phonetic: "/ðə/ /rɪˈmɑːrkəbəl/ /ˈɛfɪkəsi/ /ɒv/ /ðə/ /ˈnɒvəl/ /ˌæntiˈkænsər/ /drʌg/", translation: "该新型抗癌药物的显著疗效",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "remarkable" }, { word: "efficacy" }, { word: "of" }, { word: "the" }, { word: "novel" }, { word: "anticancer" }, { word: "drug", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "临床研究", text: "clinical trial (临床试验); efficacy (疗效); anticancer drug (抗癌药物)。" }
      ]
    },
    {
      id: "q_healthcare_s103",
      chinese: "世界卫生组织敦促各国加强跨境传染病监测机制",
      english_full: "The World Health Organization urged nations to strengthen cross-border infectious disease surveillance mechanisms.",
      words: [
        { word: "The" }, { word: "World" }, { word: "Health" }, { word: "Organization" }, { word: "urged" },
        { word: "nations" }, { word: "to" }, { word: "strengthen" }, { word: "cross-border" }, { word: "infectious" },
        { word: "disease" }, { word: "surveillance" }, { word: "mechanisms", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /wɜːrld/ /hɛlθ/ /ˌɔːrgənɪˈzeɪʃən/", translation: "世界卫生组织",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "World" }, { word: "Health" }, { word: "Organization" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɜːrdʒd/", translation: "敦促",
          subComponents: [{ startIndex: 0, words: [{ word: "urged" }] }]
        },
        {
          start: 5, end: 12, label: "宾语(不定式)", phonetic: "/ˈneɪʃənz/ /tuː/ /ˈstrɛŋθən/ /krɒs-ˈbɔːrdər/ /ɪnˈfɛkʃəs/ /dɪˈziːz/ /sərˈveɪləns/ /ˈmɛkənɪzəmz/", translation: "各国加强跨境传染病监测机制",
          subComponents: [{ startIndex: 0, words: [{ word: "nations" }, { word: "to" }, { word: "strengthen" }, { word: "cross-border" }, { word: "infectious" }, { word: "disease" }, { word: "surveillance" }, { word: "mechanisms", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "公共卫生", text: "surveillance (监测); cross-border (跨境的); infectious disease (传染病)。" }
      ]
    },
    {
      id: "q_healthcare_s104",
      chinese: "远程医疗平台使偏远地区的患者能够及时获得专科咨询",
      english_full: "Telemedicine platforms enable patients in remote areas to access timely specialist consultations.",
      words: [
        { word: "Telemedicine" }, { word: "platforms" }, { word: "enable" }, { word: "patients" }, { word: "in" },
        { word: "remote" }, { word: "areas" }, { word: "to" }, { word: "access" }, { word: "timely" },
        { word: "specialist" }, { word: "consultations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈtɛlɪˌmɛdɪsɪn/ /ˈplætfɔːrmz/", translation: "远程医疗平台",
          subComponents: [{ startIndex: 0, words: [{ word: "Telemedicine" }, { word: "platforms" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 3, end: 11, label: "宾语+补足语", phonetic: "/ˈpeɪʃənts/ /ɪn/ /rɪˈmoʊt/ /ˈɛəriəz/ /tuː/ /ˈæksɛs/ /ˈtaɪmli/ /ˈspɛʃəlɪst/ /ˌkɒnsəlˈteɪʃənz/", translation: "偏远地区的患者及时获得专科咨询",
          subComponents: [{ startIndex: 0, words: [{ word: "patients" }, { word: "in" }, { word: "remote" }, { word: "areas" }, { word: "to" }, { word: "access" }, { word: "timely" }, { word: "specialist" }, { word: "consultations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "数字医疗", text: "telemedicine (远程医疗); specialist consultation (专科咨询); remote areas (偏远地区)。" }
      ]
    },
    {
      id: "q_healthcare_s105",
      chinese: "人工智能辅助诊断系统显著提高了早期肺癌的检出率",
      english_full: "AI-assisted diagnostic systems have significantly improved the detection rate of early-stage lung cancer.",
      words: [
        { word: "AI-assisted" }, { word: "diagnostic" }, { word: "systems" }, { word: "have" }, { word: "significantly" },
        { word: "improved" }, { word: "the" }, { word: "detection" }, { word: "rate" }, { word: "of" },
        { word: "early-stage" }, { word: "lung" }, { word: "cancer", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/eɪ-aɪ-əˈsɪstɪd/ /ˌdaɪəgˈnɒstɪk/ /ˈsɪstəmz/", translation: "人工智能辅助诊断系统",
          subComponents: [{ startIndex: 0, words: [{ word: "AI-assisted" }, { word: "diagnostic" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/hæv/ /sɪgˈnɪfɪkəntli/ /ɪmˈpruːvd/", translation: "已显著提高了",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "significantly" }, { word: "improved" }] }]
        },
        {
          start: 6, end: 12, label: "宾语", phonetic: "/ðə/ /dɪˈtɛkʃən/ /reɪt/ /ɒv/ /ˈɜːrli-steɪdʒ/ /lʌŋ/ /ˈkænsər/", translation: "早期肺癌的检出率",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "detection" }, { word: "rate" }, { word: "of" }, { word: "early-stage" }, { word: "lung" }, { word: "cancer", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗科技", text: "AI-assisted (人工智能辅助的); detection rate (检出率); early-stage (早期的)。" }
      ]
    },
    {
      id: "q_healthcare_s106",
      chinese: "该医院实施了严格的无菌操作规程以降低术后感染风险",
      english_full: "The hospital implemented strict aseptic protocols to reduce the risk of postoperative infections.",
      words: [
        { word: "The" }, { word: "hospital" }, { word: "implemented" }, { word: "strict" }, { word: "aseptic" },
        { word: "protocols" }, { word: "to" }, { word: "reduce" }, { word: "the" }, { word: "risk" },
        { word: "of" }, { word: "postoperative" }, { word: "infections", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈhɒspɪtəl/", translation: "该医院",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hospital" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˈɪmplɪmɛntɪd/", translation: "实施了",
          subComponents: [{ startIndex: 0, words: [{ word: "implemented" }] }]
        },
        {
          start: 3, end: 5, label: "宾语", phonetic: "/strɪkt/ /eɪˈsɛptɪk/ /ˈprəʊtəkɒlz/", translation: "严格的无菌操作规程",
          subComponents: [{ startIndex: 0, words: [{ word: "strict" }, { word: "aseptic" }, { word: "protocols" }] }]
        },
        {
          start: 6, end: 12, label: "目的状语", phonetic: "/tuː/ /rɪˈdjuːs/ /ðə/ /rɪsk/ /ɒv/ /ˌpɒstˈɒpərətɪv/ /ɪnˈfɛkʃənz/", translation: "以降低术后感染风险",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "reduce" }, { word: "the" }, { word: "risk" }, { word: "of" }, { word: "postoperative" }, { word: "infections", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医院管理", text: "aseptic protocols (无菌操作规程); postoperative (术后的); reduce the risk (降低风险)。" }
      ]
    },
    {
      id: "q_healthcare_s107",
      chinese: "长期滥用处方药可能导致严重的药物依赖和器官损伤",
      english_full: "Prolonged misuse of prescription drugs can lead to severe drug dependency and organ damage.",
      words: [
        { word: "Prolonged" }, { word: "misuse" }, { word: "of" }, { word: "prescription" }, { word: "drugs" },
        { word: "can" }, { word: "lead" }, { word: "to" }, { word: "severe" }, { word: "drug" },
        { word: "dependency" }, { word: "and" }, { word: "organ" }, { word: "damage", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/prəˈlɒŋd/ /mɪsˈjuːs/ /ɒv/ /prɪˈskrɪpʃən/ /drʌgz/", translation: "长期滥用处方药",
          subComponents: [{ startIndex: 0, words: [{ word: "Prolonged" }, { word: "misuse" }, { word: "of" }, { word: "prescription" }, { word: "drugs" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/kæn/", translation: "可能",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }] }]
        },
        {
          start: 6, end: 13, label: "宾语(不定式)", phonetic: "/liːd/ /tuː/ /sɪˈvɪər/ /drʌg/ /dɪˈpɛndənsi/ /ænd/ /ˈɔːrgən/ /ˈdæmɪdʒ/", translation: "导致严重的药物依赖和器官损伤",
          subComponents: [{ startIndex: 0, words: [{ word: "lead" }, { word: "to" }, { word: "severe" }, { word: "drug" }, { word: "dependency" }, { word: "and" }, { word: "organ" }, { word: "damage", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "药学安全", text: "prescription drugs (处方药); drug dependency (药物依赖); organ damage (器官损伤)。" }
      ]
    },
    {
      id: "q_healthcare_s108",
      chinese: "流行病学调查揭示了该病毒在社区传播中的关键传播链",
      english_full: "The epidemiological investigation revealed the critical transmission chains of the virus in community spread.",
      words: [
        { word: "The" }, { word: "epidemiological" }, { word: "investigation" }, { word: "revealed" }, { word: "the" },
        { word: "critical" }, { word: "transmission" }, { word: "chains" }, { word: "of" }, { word: "the" },
        { word: "virus" }, { word: "in" }, { word: "community" }, { word: "spread", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ði/ /ˌɛpɪˌdiːmiəˈlɒdʒɪkəl/ /ɪnˌvɛstɪˈgeɪʃən/", translation: "流行病学调查",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "epidemiological" }, { word: "investigation" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈviːld/", translation: "揭示了",
          subComponents: [{ startIndex: 0, words: [{ word: "revealed" }] }]
        },
        {
          start: 4, end: 13, label: "宾语", phonetic: "/ðə/ /ˈkrɪtɪkəl/ /trænsˈmɪʃən/ /tʃeɪnz/ /ɒv/ /ðə/ /ˈvaɪrəs/ /ɪn/ /kəˈmjuːnɪti/ /sprɛd/", translation: "该病毒在社区传播中的关键传播链",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "critical" }, { word: "transmission" }, { word: "chains" }, { word: "of" }, { word: "the" }, { word: "virus" }, { word: "in" }, { word: "community" }, { word: "spread", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "流行病学", text: "epidemiological (流行病学的); transmission chain (传播链); community spread (社区传播)。" }
      ]
    },
    {
      id: "q_healthcare_s109",
      chinese: "患者有权在充分知情的情况下拒绝接受侵入性治疗",
      english_full: "Patients have the right to refuse invasive treatment with full informed consent.",
      words: [
        { word: "Patients" }, { word: "have" }, { word: "the" }, { word: "right" }, { word: "to" },
        { word: "refuse" }, { word: "invasive" }, { word: "treatment" }, { word: "with" }, { word: "full" },
        { word: "informed" }, { word: "consent", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˈpeɪʃənts/", translation: "患者",
          subComponents: [{ startIndex: 0, words: [{ word: "Patients" }] }]
        },
        {
          start: 1, end: 3, label: "谓语", phonetic: "/hæv/ /ðə/ /raɪt/", translation: "有权",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "the" }, { word: "right" }] }]
        },
        {
          start: 4, end: 11, label: "宾语(不定式)", phonetic: "/tuː/ /rɪˈfjuːz/ /ɪnˈveɪsɪv/ /ˈtriːtmənt/ /wɪθ/ /fʊl/ /ɪnˈfɔːrmd/ /kənˈsɛnt/", translation: "在充分知情同意的情况下拒绝侵入性治疗",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "refuse" }, { word: "invasive" }, { word: "treatment" }, { word: "with" }, { word: "full" }, { word: "informed" }, { word: "consent", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医学伦理", text: "invasive treatment (侵入性治疗); informed consent (知情同意); refuse (拒绝)。" }
      ]
    },
    {
      id: "q_healthcare_s110",
      chinese: "该国正在扩大全民医保覆盖范围以缩小城乡医疗差距",
      english_full: "The country is expanding universal health coverage to narrow the urban-rural healthcare gap.",
      words: [
        { word: "The" }, { word: "country" }, { word: "is" }, { word: "expanding" }, { word: "universal" },
        { word: "health" }, { word: "coverage" }, { word: "to" }, { word: "narrow" }, { word: "the" },
        { word: "urban-rural" }, { word: "healthcare" }, { word: "gap", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈkʌntri/", translation: "该国",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "country" }] }]
        },
        {
          start: 2, end: 6, label: "谓语", phonetic: "/ɪz/ /ɪkˈspændɪŋ/ /ˌjuːnɪˈvɜːrsəl/ /hɛlθ/ /ˈkʌvərɪdʒ/", translation: "正在扩大全民医保覆盖",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "expanding" }, { word: "universal" }, { word: "health" }, { word: "coverage" }] }]
        },
        {
          start: 7, end: 12, label: "目的状语", phonetic: "/tuː/ /ˈnæroʊ/ /ði/ /ˈɜːrbən-ˈrʊrəl/ /ˈhɛlθˌkɛər/ /gæp/", translation: "以缩小城乡医疗差距",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "narrow" }, { word: "the" }, { word: "urban-rural" }, { word: "healthcare" }, { word: "gap", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗政策", text: "universal health coverage (全民医保); urban-rural gap (城乡差距); narrow (缩小)。" }
      ]
    },
    {
      id: "q_healthcare_s111",
      chinese: "微创手术技术的进步使许多复杂手术可以在门诊完成",
      english_full: "Advances in minimally invasive surgery allow many complex procedures to be performed on an outpatient basis.",
      words: [
        { word: "Advances" }, { word: "in" }, { word: "minimally" }, { word: "invasive" }, { word: "surgery" },
        { word: "allow" }, { word: "many" }, { word: "complex" }, { word: "procedures" }, { word: "to" },
        { word: "be" }, { word: "performed" }, { word: "on" }, { word: "an" }, { word: "outpatient" },
        { word: "basis", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ədˈvænsɪz/ /ɪn/ /ˈmɪnɪməli/ /ɪnˈveɪsɪv/ /ˈsɜːrdʒəri/", translation: "微创手术技术的进步",
          subComponents: [{ startIndex: 0, words: [{ word: "Advances" }, { word: "in" }, { word: "minimally" }, { word: "invasive" }, { word: "surgery" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/əˈlaʊ/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "allow" }] }]
        },
        {
          start: 6, end: 15, label: "宾语+补足语", phonetic: "/ˈmɛni/ /ˈkɒmplɛks/ /prəˈsiːdʒərz/ /tuː/ /bi/ /pərˈfɔːrmd/ /ɒn/ /æn/ /ˈaʊtˌpeɪʃənt/ /ˈbeɪsɪs/", translation: "许多复杂手术在门诊基础上完成",
          subComponents: [{ startIndex: 0, words: [{ word: "many" }, { word: "complex" }, { word: "procedures" }, { word: "to" }, { word: "be" }, { word: "performed" }, { word: "on" }, { word: "an" }, { word: "outpatient" }, { word: "basis", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "外科技术", text: "minimally invasive surgery (微创手术); outpatient basis (门诊); procedure (手术/操作)。" }
      ]
    },
    {
      id: "q_healthcare_s112",
      chinese: "营养师建议采用地中海饮食模式来降低心血管疾病风险",
      english_full: "The nutritionist recommends adopting a Mediterranean diet to lower cardiovascular disease risk.",
      words: [
        { word: "The" }, { word: "nutritionist" }, { word: "recommends" }, { word: "adopting" }, { word: "a" },
        { word: "Mediterranean" }, { word: "diet" }, { word: "to" }, { word: "lower" }, { word: "cardiovascular" },
        { word: "disease" }, { word: "risk", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /nuˈtrɪʃənɪst/", translation: "营养师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "nutritionist" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/ˌrɛkəˈmɛndz/", translation: "建议",
          subComponents: [{ startIndex: 0, words: [{ word: "recommends" }] }]
        },
        {
          start: 3, end: 11, label: "宾语(动名词)", phonetic: "/əˈdɒptɪŋ/ /ə/ /ˌmɛdɪtəˈreɪniən/ /ˈdaɪət/ /tuː/ /ˈloʊər/ /ˌkɑːrdioʊˈvæskjələr/ /dɪˈziːz/ /rɪsk/", translation: "采用地中海饮食以降低心血管疾病风险",
          subComponents: [{ startIndex: 0, words: [{ word: "adopting" }, { word: "a" }, { word: "Mediterranean" }, { word: "diet" }, { word: "to" }, { word: "lower" }, { word: "cardiovascular" }, { word: "disease" }, { word: "risk", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "营养学", text: "Mediterranean diet (地中海饮食); cardiovascular disease (心血管疾病); adopt (采用)。" }
      ]
    },
    {
      id: "q_healthcare_s113",
      chinese: "重症监护病房配备了最先进的生命支持设备",
      english_full: "The intensive care unit is equipped with state-of-the-art life support equipment.",
      words: [
        { word: "The" }, { word: "intensive" }, { word: "care" }, { word: "unit" }, { word: "is" },
        { word: "equipped" }, { word: "with" }, { word: "state-of-the-art" }, { word: "life" }, { word: "support" },
        { word: "equipment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ɪnˈtɛnsɪv/ /kɛər/ /ˈjuːnɪt/", translation: "重症监护病房",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "intensive" }, { word: "care" }, { word: "unit" }] }]
        },
        {
          start: 4, end: 6, label: "谓语(被动)", phonetic: "/ɪz/ /ɪˈkwɪpt/ /wɪθ/", translation: "配备了",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "equipped" }, { word: "with" }] }]
        },
        {
          start: 7, end: 10, label: "宾语", phonetic: "/steɪt-ɒv-ðə-ˈɑːrt/ /laɪf/ /səˈpɔːrt/ /ɪˈkwɪpmənt/", translation: "最先进的生命支持设备",
          subComponents: [{ startIndex: 0, words: [{ word: "state-of-the-art" }, { word: "life" }, { word: "support" }, { word: "equipment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "临床设施", text: "intensive care unit (ICU); state-of-the-art (最先进的); life support (生命支持)。" }
      ]
    },
    {
      id: "q_healthcare_s114",
      chinese: "该制药公司因隐瞒临床试验中的严重不良反应而被罚款",
      english_full: "The pharmaceutical company was fined for concealing serious adverse reactions in clinical trials.",
      words: [
        { word: "The" }, { word: "pharmaceutical" }, { word: "company" }, { word: "was" }, { word: "fined" },
        { word: "for" }, { word: "concealing" }, { word: "serious" }, { word: "adverse" }, { word: "reactions" },
        { word: "in" }, { word: "clinical" }, { word: "trials", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˌfɑːrməˈsuːtɪkəl/ /ˈkʌmpəni/", translation: "该制药公司",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pharmaceutical" }, { word: "company" }] }]
        },
        {
          start: 3, end: 4, label: "谓语(被动)", phonetic: "/wɒz/ /faɪnd/", translation: "被罚款",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "fined" }] }]
        },
        {
          start: 5, end: 12, label: "原因状语", phonetic: "/fɔːr/ /kənˈsiːlɪŋ/ /ˈsɪəriəs/ /ˈædvɜːrs/ /riˈækʃənz/ /ɪn/ /ˈklɪnɪkəl/ /ˈtraɪəlz/", translation: "因隐瞒临床试验中的严重不良反应",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "concealing" }, { word: "serious" }, { word: "adverse" }, { word: "reactions" }, { word: "in" }, { word: "clinical" }, { word: "trials", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医药监管", text: "adverse reaction (不良反应); pharmaceutical company (制药公司); conceal (隐瞒)。" }
      ]
    },
    {
      id: "q_healthcare_s115",
      chinese: "心理健康危机干预热线在疫情期间接听量激增了三倍",
      english_full: "Mental health crisis hotlines saw a threefold surge in call volume during the pandemic.",
      words: [
        { word: "Mental" }, { word: "health" }, { word: "crisis" }, { word: "hotlines" }, { word: "saw" },
        { word: "a" }, { word: "threefold" }, { word: "surge" }, { word: "in" }, { word: "call" },
        { word: "volume" }, { word: "during" }, { word: "the" }, { word: "pandemic", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈmɛntəl/ /hɛlθ/ /ˈkraɪsɪs/ /ˈhɒtlaɪnz/", translation: "心理健康危机干预热线",
          subComponents: [{ startIndex: 0, words: [{ word: "Mental" }, { word: "health" }, { word: "crisis" }, { word: "hotlines" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/sɔː/", translation: "目睹/经历了",
          subComponents: [{ startIndex: 0, words: [{ word: "saw" }] }]
        },
        {
          start: 5, end: 13, label: "宾语", phonetic: "/ə/ /ˈθriːfoʊld/ /sɜːrdʒ/ /ɪn/ /kɔːl/ /ˈvɒljuːm/ /ˈdjʊərɪŋ/ /ðə/ /pænˈdɛmɪk/", translation: "疫情期间接听量三倍激增",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "threefold" }, { word: "surge" }, { word: "in" }, { word: "call" }, { word: "volume" }, { word: "during" }, { word: "the" }, { word: "pandemic", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "心理健康", text: "crisis hotline (危机热线); threefold surge (三倍激增); call volume (通话量)。" }
      ]
    },
    {
      id: "q_healthcare_s116",
      chinese: "干细胞移植为某些血液恶性肿瘤患者提供了治愈希望",
      english_full: "Stem cell transplantation offers a curative hope for patients with certain hematologic malignancies.",
      words: [
        { word: "Stem" }, { word: "cell" }, { word: "transplantation" }, { word: "offers" }, { word: "a" },
        { word: "curative" }, { word: "hope" }, { word: "for" }, { word: "patients" }, { word: "with" },
        { word: "certain" }, { word: "hematologic" }, { word: "malignancies", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/stɛm/ /sɛl/ /ˌtrænsplænˈteɪʃən/", translation: "干细胞移植",
          subComponents: [{ startIndex: 0, words: [{ word: "Stem" }, { word: "cell" }, { word: "transplantation" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈɒfərz/", translation: "提供了",
          subComponents: [{ startIndex: 0, words: [{ word: "offers" }] }]
        },
        {
          start: 4, end: 12, label: "宾语", phonetic: "/ə/ /ˈkjʊrətɪv/ /hoʊp/ /fɔːr/ /ˈpeɪʃənts/ /wɪθ/ /ˈsɜːrtən/ /ˌhiːmətəˈlɒdʒɪk/ /məˈlɪgnənsiz/", translation: "对某些血液恶性肿瘤患者的治愈希望",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "curative" }, { word: "hope" }, { word: "for" }, { word: "patients" }, { word: "with" }, { word: "certain" }, { word: "hematologic" }, { word: "malignancies", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "血液肿瘤", text: "stem cell transplantation (干细胞移植); hematologic malignancy (血液恶性肿瘤); curative (治愈性的)。" }
      ]
    },
    {
      id: "q_healthcare_s117",
      chinese: "社区健康工作者在推广疫苗接种方面发挥了不可替代的作用",
      english_full: "Community health workers play an indispensable role in promoting vaccination uptake.",
      words: [
        { word: "Community" }, { word: "health" }, { word: "workers" }, { word: "play" }, { word: "an" },
        { word: "indispensable" }, { word: "role" }, { word: "in" }, { word: "promoting" }, { word: "vaccination" },
        { word: "uptake", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/kəˈmjuːnɪti/ /hɛlθ/ /ˈwɜːrkərz/", translation: "社区健康工作者",
          subComponents: [{ startIndex: 0, words: [{ word: "Community" }, { word: "health" }, { word: "workers" }] }]
        },
        {
          start: 3, end: 6, label: "谓语", phonetic: "/pleɪ/ /æn/ /ɪnˌdɪsˈpɛnsəbəl/ /roʊl/", translation: "发挥着不可替代的作用",
          subComponents: [{ startIndex: 0, words: [{ word: "play" }, { word: "an" }, { word: "indispensable" }, { word: "role" }] }]
        },
        {
          start: 7, end: 10, label: "方面状语", phonetic: "/ɪn/ /prəˈmoʊtɪŋ/ /ˌvæksɪˈneɪʃən/ /ˈʌpteɪk/", translation: "在推广疫苗接种方面",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "promoting" }, { word: "vaccination" }, { word: "uptake", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "基层医疗", text: "community health worker (社区健康工作者); indispensable (不可替代的); vaccination uptake (疫苗接种率)。" }
      ]
    },
    {
      id: "q_healthcare_s118",
      chinese: "电子健康档案系统实现了不同医疗机构之间的数据互联互通",
      english_full: "Electronic health record systems enable data interoperability across different healthcare institutions.",
      words: [
        { word: "Electronic" }, { word: "health" }, { word: "record" }, { word: "systems" }, { word: "enable" },
        { word: "data" }, { word: "interoperability" }, { word: "across" }, { word: "different" }, { word: "healthcare" },
        { word: "institutions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ɪˌlɛktrɒnɪk/ /hɛlθ/ /ˈrɛkɔːrd/ /ˈsɪstəmz/", translation: "电子健康档案系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Electronic" }, { word: "health" }, { word: "record" }, { word: "systems" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "实现了/使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 5, end: 10, label: "宾语", phonetic: "/ˈdeɪtə/ /ɪnˌtɒpərəˈbɪlɪti/ /əˈkrɒs/ /ˈdɪfərənt/ /ˈhɛlθˌkɛər/ /ˌɪnstɪˈtuːʃənz/", translation: "不同医疗机构之间的数据互联互通",
          subComponents: [{ startIndex: 0, words: [{ word: "data" }, { word: "interoperability" }, { word: "across" }, { word: "different" }, { word: "healthcare" }, { word: "institutions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "health IT", text: "electronic health record (EHR); interoperability (互操作性); healthcare institution (医疗机构)。" }
      ]
    },
    {
      id: "q_healthcare_s119",
      chinese: "该罕见病联盟呼吁政府增加对孤儿药研发的资金投入",
      english_full: "The rare disease alliance called on the government to increase funding for orphan drug research.",
      words: [
        { word: "The" }, { word: "rare" }, { word: "disease" }, { word: "alliance" }, { word: "called" },
        { word: "on" }, { word: "the" }, { word: "government" }, { word: "to" }, { word: "increase" },
        { word: "funding" }, { word: "for" }, { word: "orphan" }, { word: "drug" }, { word: "research", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /rɛər/ /dɪˈziːz/ /əˈlaɪəns/", translation: "该罕见病联盟",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "rare" }, { word: "disease" }, { word: "alliance" }] }]
        },
        {
          start: 4, end: 7, label: "谓语", phonetic: "/kɔːld/ /ɒn/ /ðə/ /ˈgʌvərnmənt/", translation: "呼吁政府",
          subComponents: [{ startIndex: 0, words: [{ word: "called" }, { word: "on" }, { word: "the" }, { word: "government" }] }]
        },
        {
          start: 8, end: 14, label: "宾语(不定式)", phonetic: "/tuː/ /ˈɪnkriːs/ /ˈfʌndɪŋ/ /fɔːr/ /ˈɔːrfən/ /drʌg/ /rɪˈsɜːrtʃ/", translation: "增加对孤儿药研发的资金投入",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "increase" }, { word: "funding" }, { word: "for" }, { word: "orphan" }, { word: "drug" }, { word: "research", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "罕见病", text: "rare disease (罕见病); orphan drug (孤儿药); call on (呼吁)。" }
      ]
    },
    {
      id: "q_healthcare_s120",
      chinese: "物理治疗师设计了一套循序渐进的康复训练方案",
      english_full: "The physical therapist designed a progressive rehabilitation exercise regimen.",
      words: [
        { word: "The" }, { word: "physical" }, { word: "therapist" }, { word: "designed" }, { word: "a" },
        { word: "progressive" }, { word: "rehabilitation" }, { word: "exercise" }, { word: "regimen", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈfɪzɪkəl/ /ˈθɛrəpɪst/", translation: "物理治疗师",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "physical" }, { word: "therapist" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/dɪˈzaɪnd/", translation: "设计了",
          subComponents: [{ startIndex: 0, words: [{ word: "designed" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ə/ /prəˈgrɛsɪv/ /ˌriːhəˌbɪlɪˈteɪʃən/ /ˈɛksərsaɪz/ /ˈrɛdʒɪmən/", translation: "一套循序渐进的康复训练方案",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "progressive" }, { word: "rehabilitation" }, { word: "exercise" }, { word: "regimen", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "康复医学", text: "physical therapist (物理治疗师); rehabilitation (康复); exercise regimen (训练方案)。" }
      ]
    },
    {
      id: "q_healthcare_s121",
      chinese: "过度使用抗生素正在全球范围内加速细菌耐药性的产生",
      english_full: "Overuse of antibiotics is accelerating the emergence of bacterial resistance worldwide.",
      words: [
        { word: "Overuse" }, { word: "of" }, { word: "antibiotics" }, { word: "is" }, { word: "accelerating" },
        { word: "the" }, { word: "emergence" }, { word: "of" }, { word: "bacterial" }, { word: "resistance" },
        { word: "worldwide", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈoʊvərˌjuːs/ /ɒv/ /ˌæntibaɪˈɒtɪks/", translation: "过度使用抗生素",
          subComponents: [{ startIndex: 0, words: [{ word: "Overuse" }, { word: "of" }, { word: "antibiotics" }] }]
        },
        {
          start: 3, end: 3, label: "系动词", phonetic: "/ɪz/", translation: "正在",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }] }]
        },
        {
          start: 4, end: 10, label: "表语(现在分词)", phonetic: "/ˈæksəˌleɪtɪŋ/ /ði/ /ɪˈmɜːrdʒəns/ /ɒv/ /bækˈtɪəriəl/ /rɪˈzɪstəns/ /ˌwɜːrldˈwaɪd/", translation: "加速细菌耐药性在全球范围内的产生",
          subComponents: [{ startIndex: 0, words: [{ word: "accelerating" }, { word: "the" }, { word: "emergence" }, { word: "of" }, { word: "bacterial" }, { word: "resistance" }, { word: "worldwide", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "抗菌素管理", text: "antibiotic overuse (抗生素过度使用); bacterial resistance (细菌耐药性); accelerate (加速)。" }
      ]
    },
    {
      id: "q_healthcare_s122",
      chinese: "产前筛查可以在胎儿发育早期检测出染色体异常",
      english_full: "Prenatal screening can detect chromosomal abnormalities during early fetal development.",
      words: [
        { word: "Prenatal" }, { word: "screening" }, { word: "can" }, { word: "detect" }, { word: "chromosomal" },
        { word: "abnormalities" }, { word: "during" }, { word: "early" }, { word: "fetal" }, { word: "development", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/priːˈneɪtəl/ /ˈskriːnɪŋ/", translation: "产前筛查",
          subComponents: [{ startIndex: 0, words: [{ word: "Prenatal" }, { word: "screening" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/kæn/", translation: "能够",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }] }]
        },
        {
          start: 3, end: 9, label: "宾语(不定式)", phonetic: "/dɪˈtɛkt/ /ˌkroʊməˈsoʊməl/ /æbˌnɔːrməˈlɪtiz/ /ˈdjʊərɪŋ/ /ˈɜːrli/ /ˈfiːtəl/ /dɪˈvɛləpmənt/", translation: "在胎儿早期发育期间检测染色体异常",
          subComponents: [{ startIndex: 0, words: [{ word: "detect" }, { word: "chromosomal" }, { word: "abnormalities" }, { word: "during" }, { word: "early" }, { word: "fetal" }, { word: "development", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "妇产科学", text: "prenatal screening (产前筛查); chromosomal abnormality (染色体异常); fetal development (胎儿发育)。" }
      ]
    },
    {
      id: "q_healthcare_s123",
      chinese: "医疗事故调查委员会认定该失误源于系统性沟通失败",
      english_full: "The medical malpractice review board determined that the error stemmed from systemic communication failure.",
      words: [
        { word: "The" }, { word: "medical" }, { word: "malpractice" }, { word: "review" }, { word: "board" },
        { word: "determined" }, { word: "that" }, { word: "the" }, { word: "error" }, { word: "stemmed" },
        { word: "from" }, { word: "systemic" }, { word: "communication" }, { word: "failure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈmɛdɪkəl/ /ˈmælpræktɪs/ /rɪˈvjuː/ /bɔːrd/", translation: "医疗事故调查委员会",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "medical" }, { word: "malpractice" }, { word: "review" }, { word: "board" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/dɪˈtɜːrmɪnd/", translation: "认定",
          subComponents: [{ startIndex: 0, words: [{ word: "determined" }] }]
        },
        {
          start: 6, end: 13, label: "宾语从句", phonetic: "/ðæt/ /ði/ /ˈɛrər/ /ˈstɛmd/ /frɒm/ /sɪˈstɛmɪk/ /kəˌmjuːnɪˈkeɪʃən/ /ˈfeɪljər/", translation: "该失误源于系统性沟通失败",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "error" }, { word: "stemmed" }, { word: "from" }, { word: "systemic" }, { word: "communication" }, { word: "failure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗安全", text: "medical malpractice (医疗事故); stem from (源于); systemic failure (系统性失败)。" }
      ]
    },
    {
      id: "q_healthcare_s124",
      chinese: "姑息治疗旨在改善晚期癌症患者的生命质量而非延长寿命",
      english_full: "Palliative care aims to improve the quality of life rather than prolong survival for terminal cancer patients.",
      words: [
        { word: "Palliative" }, { word: "care" }, { word: "aims" }, { word: "to" }, { word: "improve" },
        { word: "the" }, { word: "quality" }, { word: "of" }, { word: "life" }, { word: "rather" },
        { word: "than" }, { word: "prolong" }, { word: "survival" }, { word: "for" }, { word: "terminal" },
        { word: "cancer" }, { word: "patients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈpæliətɪv/ /kɛər/", translation: "姑息治疗",
          subComponents: [{ startIndex: 0, words: [{ word: "Palliative" }, { word: "care" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/eɪmz/", translation: "旨在",
          subComponents: [{ startIndex: 0, words: [{ word: "aims" }] }]
        },
        {
          start: 3, end: 16, label: "宾语(不定式)", phonetic: "/tuː/ /ɪmˈpruːv/ /ðə/ /ˈkwɒlɪti/ /ɒv/ /laɪf/ /ˈræðər/ /ðæn/ /prəˈlɒŋ/ /sərˈvaɪvəl/ /fɔːr/ /ˈtɜːrmɪnəl/ /ˈkænsər/ /ˈpeɪʃənts/", translation: "改善晚期癌症患者的生命质量而非延长存活期",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "improve" }, { word: "the" }, { word: "quality" }, { word: "of" }, { word: "life" }, { word: "rather" }, { word: "than" }, { word: "prolong" }, { word: "survival" }, { word: "for" }, { word: "terminal" }, { word: "cancer" }, { word: "patients", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "安宁疗护", text: "palliative care (姑息/安宁疗护); quality of life (生命质量); terminal cancer (晚期癌症)。" }
      ]
    },
    {
      id: "q_healthcare_s125",
      chinese: "生物标志物检测有助于为肿瘤患者选择最合适的靶向治疗",
      english_full: "Biomarker testing helps select the most appropriate targeted therapy for oncology patients.",
      words: [
        { word: "Biomarker" }, { word: "testing" }, { word: "helps" }, { word: "select" }, { word: "the" },
        { word: "most" }, { word: "appropriate" }, { word: "targeted" }, { word: "therapy" }, { word: "for" },
        { word: "oncology" }, { word: "patients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈbaɪoʊˌmɑːrkər/ /ˈtɛstɪŋ/", translation: "生物标志物检测",
          subComponents: [{ startIndex: 0, words: [{ word: "Biomarker" }, { word: "testing" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/hɛlps/", translation: "有助于",
          subComponents: [{ startIndex: 0, words: [{ word: "helps" }] }]
        },
        {
          start: 3, end: 11, label: "宾语(省略to的不定式)", phonetic: "/sɪˈlɛkt/ /ðə/ /moʊst/ /əˈproʊpriət/ /ˈtɑːrgɪtɪd/ /ˈθɛrəpi/ /fɔːr/ /ɒnˈkɒlədʒi/ /ˈpeɪʃənts/", translation: "为肿瘤患者选择最合适的靶向治疗",
          subComponents: [{ startIndex: 0, words: [{ word: "select" }, { word: "the" }, { word: "most" }, { word: "appropriate" }, { word: "targeted" }, { word: "therapy" }, { word: "for" }, { word: "oncology" }, { word: "patients", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "肿瘤学", text: "biomarker (生物标志物); targeted therapy (靶向治疗); oncology (肿瘤学)。" }
      ]
    },
    {
      id: "q_healthcare_s126",
      chinese: "可穿戴健康监测设备能够实时追踪用户的心率和血氧水平",
      english_full: "Wearable health monitoring devices can track users' heart rates and blood oxygen levels in real time.",
      words: [
        { word: "Wearable" }, { word: "health" }, { word: "monitoring" }, { word: "devices" }, { word: "can" },
        { word: "track" }, { word: "users'" }, { word: "heart" }, { word: "rates" }, { word: "and" },
        { word: "blood" }, { word: "oxygen" }, { word: "levels" }, { word: "in" }, { word: "real" },
        { word: "time", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈwɛrəbəl/ /hɛlθ/ /ˈmɒnɪtərɪŋ/ /dɪˈvaɪsɪz/", translation: "可穿戴健康监测设备",
          subComponents: [{ startIndex: 0, words: [{ word: "Wearable" }, { word: "health" }, { word: "monitoring" }, { word: "devices" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/kæn/", translation: "能够",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }] }]
        },
        {
          start: 5, end: 15, label: "宾语(不定式)", phonetic: "/træk/ /ˈjuːzərz/ /hɑːrt/ /reɪts/ /ænd/ /blʌd/ /ˈɒksɪdʒən/ /ˈlɛvəlz/ /ɪn/ /riːl/ /taɪm/", translation: "实时追踪用户的心率和血氧水平",
          subComponents: [{ startIndex: 0, words: [{ word: "track" }, { word: "users'" }, { word: "heart" }, { word: "rates" }, { word: "and" }, { word: "blood" }, { word: "oxygen" }, { word: "levels" }, { word: "in" }, { word: "real" }, { word: "time", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "健康科技", text: "wearable device (可穿戴设备); blood oxygen level (血氧水平); in real time (实时)。" }
      ]
    },
    {
      id: "q_healthcare_s127",
      chinese: "跨国临床试验必须遵守《赫尔辛基宣言》所确立的伦理准则",
      english_full: "Multinational clinical trials must adhere to the ethical principles established by the Helsinki Declaration.",
      words: [
        { word: "Multinational" }, { word: "clinical" }, { word: "trials" }, { word: "must" }, { word: "adhere" },
        { word: "to" }, { word: "the" }, { word: "ethical" }, { word: "principles" }, { word: "established" },
        { word: "by" }, { word: "the" }, { word: "Helsinki" }, { word: "Declaration", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌmʌltiˈnæʃənəl/ /ˈklɪnɪkəl/ /ˈtraɪəlz/", translation: "跨国临床试验",
          subComponents: [{ startIndex: 0, words: [{ word: "Multinational" }, { word: "clinical" }, { word: "trials" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/mʌst/ /ədˈhɪər/ /tuː/", translation: "必须遵守",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "adhere" }, { word: "to" }] }]
        },
        {
          start: 6, end: 13, label: "宾语", phonetic: "/ði/ /ˈɛθɪkəl/ /ˈprɪnsəpəlz/ /ɪˈstæblɪʃt/ /baɪ/ /ðə/ /hɛlˈsɪŋki/ /ˌdɛkləˈreɪʃən/", translation: "《赫尔辛基宣言》所确立的伦理准则",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "ethical" }, { word: "principles" }, { word: "established" }, { word: "by" }, { word: "the" }, { word: "Helsinki" }, { word: "Declaration", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "研究伦理", text: "Helsinki Declaration (赫尔辛基宣言); ethical principles (伦理准则); adhere to (遵守)。" }
      ]
    },
    {
      id: "q_healthcare_s128",
      chinese: "急诊科医生必须在极短时间内对创伤患者进行快速分诊",
      english_full: "Emergency physicians must triage trauma patients within an extremely short timeframe.",
      words: [
        { word: "Emergency" }, { word: "physicians" }, { word: "must" }, { word: "triage" }, { word: "trauma" },
        { word: "patients" }, { word: "within" }, { word: "an" }, { word: "extremely" }, { word: "short" },
        { word: "timeframe", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ɪˈmɜːrdʒənsi/ /fɪˈzɪʃənz/", translation: "急诊科医生",
          subComponents: [{ startIndex: 0, words: [{ word: "Emergency" }, { word: "physicians" }] }]
        },
        {
          start: 2, end: 3, label: "谓语", phonetic: "/mʌst/ /ˈtraɪɑːʒ/", translation: "必须分诊",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "triage" }] }]
        },
        {
          start: 4, end: 10, label: "宾语", phonetic: "/ˈtrɔːmə/ /ˈpeɪʃənts/ /wɪðɪn/ /æn/ /ɪkˈstriːmli/ /ʃɔːrt/ /ˈtaɪmfreɪm/", translation: "在极短时间内对创伤患者",
          subComponents: [{ startIndex: 0, words: [{ word: "trauma" }, { word: "patients" }, { word: "within" }, { word: "an" }, { word: "extremely" }, { word: "short" }, { word: "timeframe", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "急诊医学", text: "triage (分诊); trauma patient (创伤患者); emergency physician (急诊医生)。" }
      ]
    },
    {
      id: "q_healthcare_s129",
      chinese: "免疫检查点抑制剂为晚期黑色素瘤患者带来了前所未有的生存获益",
      english_full: "Immune checkpoint inhibitors have delivered unprecedented survival benefits for advanced melanoma patients.",
      words: [
        { word: "Immune" }, { word: "checkpoint" }, { word: "inhibitors" }, { word: "have" }, { word: "delivered" },
        { word: "unprecedented" }, { word: "survival" }, { word: "benefits" }, { word: "for" }, { word: "advanced" },
        { word: "melanoma" }, { word: "patients", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ɪˈmjuːn/ /ˈtʃɛkpɔɪnt/ /ɪnˈhɪbɪtərz/", translation: "免疫检查点抑制剂",
          subComponents: [{ startIndex: 0, words: [{ word: "Immune" }, { word: "checkpoint" }, { word: "inhibitors" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/hæv/ /dɪˈlɪvərd/ /ˌʌnprɪˈsɛdɛntɪd/", translation: "带来了前所未有的",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "delivered" }, { word: "unprecedented" }] }]
        },
        {
          start: 6, end: 11, label: "宾语", phonetic: "/sərˈvaɪvəl/ /ˈbɛnɪfɪts/ /fɔːr/ /ədˈvænst/ /mɛləˈnoʊmə/ /ˈpeɪʃənts/", translation: "晚期黑色素瘤患者的生存获益",
          subComponents: [{ startIndex: 0, words: [{ word: "survival" }, { word: "benefits" }, { word: "for" }, { word: "advanced" }, { word: "melanoma" }, { word: "patients", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "免疫肿瘤学", text: "immune checkpoint inhibitor (免疫检查点抑制剂); melanoma (黑色素瘤); unprecedented (前所未有的)。" }
      ]
    },
    {
      id: "q_healthcare_s130",
      chinese: "医疗废物的不当处置可能对环境和公共健康构成严重威胁",
      english_full: "Improper disposal of medical waste may pose a serious threat to the environment and public health.",
      words: [
        { word: "Improper" }, { word: "disposal" }, { word: "of" }, { word: "medical" }, { word: "waste" },
        { word: "may" }, { word: "pose" }, { word: "a" }, { word: "serious" }, { word: "threat" },
        { word: "to" }, { word: "the" }, { word: "environment" }, { word: "and" }, { word: "public" },
        { word: "health", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ɪmˈprɒpər/ /dɪsˈpoʊzəl/ /ɒv/ /ˈmɛdɪkəl/ /weɪst/", translation: "医疗废物的不当处置",
          subComponents: [{ startIndex: 0, words: [{ word: "Improper" }, { word: "disposal" }, { word: "of" }, { word: "medical" }, { word: "waste" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/meɪ/", translation: "可能",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }] }]
        },
        {
          start: 6, end: 15, label: "宾语(不定式)", phonetic: "/poʊz/ /ə/ /ˈsɪəriəs/ /θrɛt/ /tuː/ /ði/ /ɪnˈvaɪrənmənt/ /ænd/ /ˈpʌblɪk/ /hɛlθ/", translation: "对环境和公共健康构成严重威胁",
          subComponents: [{ startIndex: 0, words: [{ word: "pose" }, { word: "a" }, { word: "serious" }, { word: "threat" }, { word: "to" }, { word: "the" }, { word: "environment" }, { word: "and" }, { word: "public" }, { word: "health", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "环境健康", text: "medical waste (医疗废物); improper disposal (不当处置); pose a threat (构成威胁)。" }
      ]
    },
    {
      id: "q_healthcare_s131",
      chinese: "全科医生在初级保健体系中承担着疾病预防和健康管理的核心职能",
      english_full: "General practitioners bear core responsibilities for disease prevention and health management in primary care systems.",
      words: [
        { word: "General" }, { word: "practitioners" }, { word: "bear" }, { word: "core" }, { word: "responsibilities" },
        { word: "for" }, { word: "disease" }, { word: "prevention" }, { word: "and" }, { word: "health" },
        { word: "management" }, { word: "in" }, { word: "primary" }, { word: "care" }, { word: "systems", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈdʒɛnərəl/ /prækˈtɪʃənərz/", translation: "全科医生",
          subComponents: [{ startIndex: 0, words: [{ word: "General" }, { word: "practitioners" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/bɛər/ /kɔːr/ /rɪˌspɒnsəˈbɪlɪtiz/", translation: "承担核心职能",
          subComponents: [{ startIndex: 0, words: [{ word: "bear" }, { word: "core" }, { word: "responsibilities" }] }]
        },
        {
          start: 5, end: 14, label: "方面状语", phonetic: "/fɔːr/ /dɪˈziːz/ /prɪˈvɛnʃən/ /ænd/ /hɛlθ/ /ˈmænɪdʒmənt/ /ɪn/ /ˈpraɪmɛri/ /kɛər/ /ˈsɪstəmz/", translation: "在初级保健体系中负责疾病预防和健康管理",
          subComponents: [{ startIndex: 0, words: [{ word: "for" }, { word: "disease" }, { word: "prevention" }, { word: "and" }, { word: "health" }, { word: "management" }, { word: "in" }, { word: "primary" }, { word: "care" }, { word: "systems", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "初级保健", text: "general practitioner (全科医生); primary care (初级保健); disease prevention (疾病预防)。" }
      ]
    },
    {
      id: "q_healthcare_s132",
      chinese: "该患者对青霉素严重过敏，因此必须选择替代性抗生素方案",
      english_full: "The patient has a severe penicillin allergy and therefore must be placed on an alternative antibiotic regimen.",
      words: [
        { word: "The" }, { word: "patient" }, { word: "has" }, { word: "a" }, { word: "severe" },
        { word: "penicillin" }, { word: "allergy" }, { word: "and" }, { word: "therefore" }, { word: "must" },
        { word: "be" }, { word: "placed" }, { word: "on" }, { word: "an" }, { word: "alternative" },
        { word: "antibiotic" }, { word: "regimen", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpeɪʃənt/", translation: "该患者",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "patient" }] }]
        },
        {
          start: 2, end: 6, label: "并列谓语1", phonetic: "/hæz/ /ə/ /sɪˈvɪər/ /ˌpɛnɪˈsɪlɪn/ /ˈælərdʒi/", translation: "对青霉素严重过敏",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "a" }, { word: "severe" }, { word: "penicillin" }, { word: "allergy" }] }]
        },
        {
          start: 7, end: 8, label: "连词+副词", phonetic: "/ænd/ /ˈðɛərfɔːr/", translation: "因此",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "therefore" }] }]
        },
        {
          start: 9, end: 16, label: "并列谓语2(被动)", phonetic: "/mʌst/ /bi/ /pleɪst/ /ɒn/ /æn/ /ˌɔːltərˈnətɪv/ /ˌæntibaɪˈɒtɪk/ /ˈrɛdʒɪmən/", translation: "必须采用替代性抗生素方案",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "placed" }, { word: "on" }, { word: "an" }, { word: "alternative" }, { word: "antibiotic" }, { word: "regimen", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "过敏管理", text: "penicillin allergy (青霉素过敏); antibiotic regimen (抗生素方案); alternative (替代的)。" }
      ]
    },
    {
      id: "q_healthcare_s133",
      chinese: "血液透析中心为肾功能衰竭患者提供维持生命的定期治疗",
      english_full: "Hemodialysis centers provide life-sustaining regular treatment for patients with renal failure.",
      words: [
        { word: "Hemodialysis" }, { word: "centers" }, { word: "provide" }, { word: "life-sustaining" }, { word: "regular" },
        { word: "treatment" }, { word: "for" }, { word: "patients" }, { word: "with" }, { word: "renal" },
        { word: "failure", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌhiːmoʊˈdaɪəlɪsɪs/ /ˈsɛntərz/", translation: "血液透析中心",
          subComponents: [{ startIndex: 0, words: [{ word: "Hemodialysis" }, { word: "centers" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 3, end: 10, label: "宾语", phonetic: "/laɪf-səsˈteɪnɪŋ/ /ˈrɛgjələr/ /ˈtriːtmənt/ /fɔːr/ /ˈpeɪʃənts/ /wɪθ/ /ˈriːnəl/ /ˈfeɪljər/", translation: "为肾功能衰竭患者提供维持生命的定期治疗",
          subComponents: [{ startIndex: 0, words: [{ word: "life-sustaining" }, { word: "regular" }, { word: "treatment" }, { word: "for" }, { word: "patients" }, { word: "with" }, { word: "renal" }, { word: "failure", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "肾脏病学", text: "hemodialysis (血液透析); renal failure (肾衰竭); life-sustaining (维持生命的)。" }
      ]
    },
    {
      id: "q_healthcare_s134",
      chinese: "公共卫生专家警告说，疫苗犹豫可能削弱群体免疫屏障",
      english_full: "Public health experts warn that vaccine hesitancy may undermine herd immunity.",
      words: [
        { word: "Public" }, { word: "health" }, { word: "experts" }, { word: "warn" }, { word: "that" },
        { word: "vaccine" }, { word: "hesitancy" }, { word: "may" }, { word: "undermine" }, { word: "herd" },
        { word: "immunity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈpʌblɪk/ /hɛlθ/ /ˈɛkspɜːrts/", translation: "公共卫生专家",
          subComponents: [{ startIndex: 0, words: [{ word: "Public" }, { word: "health" }, { word: "experts" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/wɔːrn/", translation: "警告",
          subComponents: [{ startIndex: 0, words: [{ word: "warn" }] }]
        },
        {
          start: 4, end: 10, label: "宾语从句", phonetic: "/ðæt/ /ˈvæksiːn/ /ˈhɛzɪtənsi/ /meɪ/ /ˌʌndərˈmaɪn/ /hɜːrd/ /ɪˈmjuːnɪti/", translation: "疫苗犹豫可能削弱群体免疫",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "vaccine" }, { word: "hesitancy" }, { word: "may" }, { word: "undermine" }, { word: "herd" }, { word: "immunity", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "免疫学", text: "vaccine hesitancy (疫苗犹豫); herd immunity (群体免疫); undermine (削弱)。" }
      ]
    },
    {
      id: "q_healthcare_s135",
      chinese: "机器人辅助手术系统使外科医生能够以更高的精度完成复杂操作",
      english_full: "Robot-assisted surgical systems enable surgeons to perform complex procedures with greater precision.",
      words: [
        { word: "Robot-assisted" }, { word: "surgical" }, { word: "systems" }, { word: "enable" }, { word: "surgeons" },
        { word: "to" }, { word: "perform" }, { word: "complex" }, { word: "procedures" }, { word: "with" },
        { word: "greater" }, { word: "precision", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈroʊbət-əˈsɪstɪd/ /ˈsɜːrdʒɪkəl/ /ˈsɪstəmz/", translation: "机器人辅助手术系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Robot-assisted" }, { word: "surgical" }, { word: "systems" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪˈneɪbəl/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "enable" }] }]
        },
        {
          start: 4, end: 11, label: "宾语+补足语", phonetic: "/ˈsɜːrdʒənz/ /tuː/ /pərˈfɔːrm/ /ˈkɒmplɛks/ /prəˈsiːdʒərz/ /wɪθ/ /ˈgreɪtər/ /prɪˈsɪʒən/", translation: "外科医生以更高精度完成复杂操作",
          subComponents: [{ startIndex: 0, words: [{ word: "surgeons" }, { word: "to" }, { word: "perform" }, { word: "complex" }, { word: "procedures" }, { word: "with" }, { word: "greater" }, { word: "precision", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "手术机器人", text: "robot-assisted (机器人辅助的); precision (精度); perform procedures (执行手术操作)。" }
      ]
    },
    {
      id: "q_healthcare_s136",
      chinese: "慢性阻塞性肺疾病患者应定期接受肺功能检测以监测病情进展",
      english_full: "Patients with chronic obstructive pulmonary disease should undergo regular pulmonary function tests to monitor disease progression.",
      words: [
        { word: "Patients" }, { word: "with" }, { word: "chronic" }, { word: "obstructive" }, { word: "pulmonary" },
        { word: "disease" }, { word: "should" }, { word: "undergo" }, { word: "regular" }, { word: "pulmonary" },
        { word: "function" }, { word: "tests" }, { word: "to" }, { word: "monitor" }, { word: "disease" },
        { word: "progression", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ˈpeɪʃənts/ /wɪθ/ /ˈkrɒnɪk/ /əbˈstrʌktɪv/ /ˈpʌlməˌnɛri/ /dɪˈziːz/", translation: "慢性阻塞性肺疾病患者",
          subComponents: [{ startIndex: 0, words: [{ word: "Patients" }, { word: "with" }, { word: "chronic" }, { word: "obstructive" }, { word: "pulmonary" }, { word: "disease" }] }]
        },
        {
          start: 6, end: 11, label: "谓语", phonetic: "/ʃʊd/ /ˌʌndərˈgoʊ/ /ˈrɛgjələr/ /ˈpʌlməˌnɛri/ /ˈfʌŋkʃən/ /tɛsts/", translation: "应定期接受肺功能检测",
          subComponents: [{ startIndex: 0, words: [{ word: "should" }, { word: "undergo" }, { word: "regular" }, { word: "pulmonary" }, { word: "function" }, { word: "tests" }] }]
        },
        {
          start: 12, end: 15, label: "目的状语", phonetic: "/tuː/ /ˈmɒnɪtər/ /dɪˈziːz/ /prəˈgrɛʃən/", translation: "以监测病情进展",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "monitor" }, { word: "disease" }, { word: "progression", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "呼吸医学", text: "COPD (慢性阻塞性肺疾病); pulmonary function test (肺功能检测); disease progression (病情进展)。" }
      ]
    },
    {
      id: "q_healthcare_s137",
      chinese: "医疗保险公司正在采用基于价值的支付模式来激励优质护理",
      english_full: "Health insurers are adopting value-based payment models to incentivize high-quality care.",
      words: [
        { word: "Health" }, { word: "insurers" }, { word: "are" }, { word: "adopting" }, { word: "value-based" },
        { word: "payment" }, { word: "models" }, { word: "to" }, { word: "incentivize" }, { word: "high-quality" },
        { word: "care", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/hɛlθ/ /ɪnˈʃʊrərz/", translation: "医疗保险公司",
          subComponents: [{ startIndex: 0, words: [{ word: "Health" }, { word: "insurers" }] }]
        },
        {
          start: 2, end: 6, label: "谓语", phonetic: "/ɑːr/ /əˈdɒptɪŋ/ /ˈvæljuː-beɪst/ /ˈpeɪmənt/ /ˈmɒdəlz/", translation: "正在采用基于价值的支付模式",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "adopting" }, { word: "value-based" }, { word: "payment" }, { word: "models" }] }]
        },
        {
          start: 7, end: 10, label: "目的状语", phonetic: "/tuː/ /ɪnˈsɛntɪvaɪz/ /haɪ-ˈkwɒlɪti/ /kɛər/", translation: "以激励优质护理",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "incentivize" }, { word: "high-quality" }, { word: "care", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗支付", text: "value-based payment (基于价值的支付); incentivize (激励); health insurer (医疗保险公司)。" }
      ]
    },
    {
      id: "q_healthcare_s138",
      chinese: "该研究发现了阿尔茨海默病早期诊断的新型生物标志物",
      english_full: "The study identified novel biomarkers for the early diagnosis of Alzheimer's disease.",
      words: [
        { word: "The" }, { word: "study" }, { word: "identified" }, { word: "novel" }, { word: "biomarkers" },
        { word: "for" }, { word: "the" }, { word: "early" }, { word: "diagnosis" }, { word: "of" },
        { word: "Alzheimer's" }, { word: "disease", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstʌdi/", translation: "该研究",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "study" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/aɪˈdɛntɪfaɪd/", translation: "发现了",
          subComponents: [{ startIndex: 0, words: [{ word: "identified" }] }]
        },
        {
          start: 3, end: 11, label: "宾语", phonetic: "/ˈnɒvəl/ /ˈbaɪoʊˌmɑːrkərz/ /fɔːr/ /ði/ /ˈɜːrli/ /ˌdaɪəgˈnoʊsɪs/ /ɒv/ /ˈɒltshɛmərz/ /dɪˈziːz/", translation: "阿尔茨海默病早期诊断的新型生物标志物",
          subComponents: [{ startIndex: 0, words: [{ word: "novel" }, { word: "biomarkers" }, { word: "for" }, { word: "the" }, { word: "early" }, { word: "diagnosis" }, { word: "of" }, { word: "Alzheimer's" }, { word: "disease", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "神经科学", text: "Alzheimer's disease (阿尔茨海默病); early diagnosis (早期诊断); biomarker (生物标志物)。" }
      ]
    },
    {
      id: "q_healthcare_s139",
      chinese: "跨学科医疗团队通过协作会诊为复杂病例制定综合治疗方案",
      english_full: "Multidisciplinary medical teams develop comprehensive treatment plans through collaborative consultations for complex cases.",
      words: [
        { word: "Multidisciplinary" }, { word: "medical" }, { word: "teams" }, { word: "develop" }, { word: "comprehensive" },
        { word: "treatment" }, { word: "plans" }, { word: "through" }, { word: "collaborative" }, { word: "consultations" },
        { word: "for" }, { word: "complex" }, { word: "cases", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌmʌltɪˌdɪsəˈplɪnəri/ /ˈmɛdɪkəl/ /tiːmz/", translation: "跨学科医疗团队",
          subComponents: [{ startIndex: 0, words: [{ word: "Multidisciplinary" }, { word: "medical" }, { word: "teams" }] }]
        },
        {
          start: 3, end: 6, label: "谓语", phonetic: "/dɪˈvɛləp/ /ˌkɒmprɪˈhɛnsɪv/ /ˈtriːtmənt/ /plænz/", translation: "制定综合治疗方案",
          subComponents: [{ startIndex: 0, words: [{ word: "develop" }, { word: "comprehensive" }, { word: "treatment" }, { word: "plans" }] }]
        },
        {
          start: 7, end: 12, label: "方式状语", phonetic: "/θruː/ /kəˈlæbərətɪv/ /ˌkɒnsəlˈteɪʃənz/ /fɔːr/ /ˈkɒmplɛks/ /ˈkeɪsɪz/", translation: "通过协作会诊为复杂病例",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "collaborative" }, { word: "consultations" }, { word: "for" }, { word: "complex" }, { word: "cases", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "团队协作", text: "multidisciplinary (跨学科的); collaborative consultation (协作会诊); comprehensive treatment (综合治疗)。" }
      ]
    },
    {
      id: "q_healthcare_s140",
      chinese: "医院感染控制部门严格执行手卫生规范以防止交叉感染",
      english_full: "The hospital infection control department strictly enforces hand hygiene protocols to prevent cross-infection.",
      words: [
        { word: "The" }, { word: "hospital" }, { word: "infection" }, { word: "control" }, { word: "department" },
        { word: "strictly" }, { word: "enforces" }, { word: "hand" }, { word: "hygiene" }, { word: "protocols" },
        { word: "to" }, { word: "prevent" }, { word: "cross-infection", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ðə/ /ˈhɒspɪtəl/ /ɪnˈfɛkʃən/ /kənˈtroʊl/ /dɪˈpɑːrtmənt/", translation: "医院感染控制部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hospital" }, { word: "infection" }, { word: "control" }, { word: "department" }] }]
        },
        {
          start: 5, end: 8, label: "谓语", phonetic: "/ˈstrɪktli/ /ɪnˈfɔːrsɪz/ /hænd/ /ˈhaɪdʒiːn/", translation: "严格执行手卫生",
          subComponents: [{ startIndex: 0, words: [{ word: "strictly" }, { word: "enforces" }, { word: "hand" }, { word: "hygiene" }] }]
        },
        {
          start: 9, end: 12, label: "目的状语", phonetic: "/ˈprəʊtəkɒlz/ /tuː/ /prɪˈvɛnt/ /krɒs-ɪnˈfɛkʃən/", translation: "规范以防止交叉感染",
          subComponents: [{ startIndex: 0, words: [{ word: "protocols" }, { word: "to" }, { word: "prevent" }, { word: "cross-infection", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "感染控制", text: "infection control (感染控制); hand hygiene (手卫生); cross-infection (交叉感染)。" }
      ]
    },
    {
      id: "q_healthcare_s141",
      chinese: "青少年心理健康问题日益受到学校卫生项目的关注",
      english_full: "Adolescent mental health issues are increasingly receiving attention from school health programs.",
      words: [
        { word: "Adolescent" }, { word: "mental" }, { word: "health" }, { word: "issues" }, { word: "are" },
        { word: "increasingly" }, { word: "receiving" }, { word: "attention" }, { word: "from" }, { word: "school" },
        { word: "health" }, { word: "programs", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˌædəˈlɛsənt/ /ˈmɛntəl/ /hɛlθ/ /ˈɪʃuːz/", translation: "青少年心理健康问题",
          subComponents: [{ startIndex: 0, words: [{ word: "Adolescent" }, { word: "mental" }, { word: "health" }, { word: "issues" }] }]
        },
        {
          start: 4, end: 7, label: "谓语(被动)", phonetic: "/ɑːr/ /ɪnˈkriːsɪŋli/ /rɪˈsiːvɪŋ/ /əˈtɛnʃən/", translation: "日益受到关注",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "increasingly" }, { word: "receiving" }, { word: "attention" }] }]
        },
        {
          start: 8, end: 11, label: "来源状语", phonetic: "/frɒm/ /skuːl/ /hɛlθ/ /ˈproʊgræmz/", translation: "来自学校卫生项目",
          subComponents: [{ startIndex: 0, words: [{ word: "from" }, { word: "school" }, { word: "health" }, { word: "programs", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "学校健康", text: "adolescent mental health (青少年心理健康); school health program (学校卫生项目); increasingly (日益)。" }
      ]
    },
    {
      id: "q_healthcare_s142",
      chinese: "该疫苗在冷链运输过程中必须始终保持规定的低温储存条件",
      english_full: "The vaccine must be kept at prescribed low-temperature storage conditions throughout cold chain transport.",
      words: [
        { word: "The" }, { word: "vaccine" }, { word: "must" }, { word: "be" }, { word: "kept" },
        { word: "at" }, { word: "prescribed" }, { word: "low-temperature" }, { word: "storage" }, { word: "conditions" },
        { word: "throughout" }, { word: "cold" }, { word: "chain" }, { word: "transport", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈvæksiːn/", translation: "该疫苗",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "vaccine" }] }]
        },
        {
          start: 2, end: 6, label: "谓语(被动)", phonetic: "/mʌst/ /bi/ /kɛpt/ /æt/ /prɪˈskraɪbd/", translation: "必须被保持在规定的",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "be" }, { word: "kept" }, { word: "at" }, { word: "prescribed" }] }]
        },
        {
          start: 7, end: 13, label: "状语", phonetic: "/loʊ-ˈtɛmpərətʃər/ /ˈstɔːrɪdʒ/ /kənˈdɪʃənz/ /θruːˈaʊt/ /koʊld/ /tʃeɪn/ /ˈtrænspɔːrt/", translation: "低温储存条件于整个冷链运输过程中",
          subComponents: [{ startIndex: 0, words: [{ word: "low-temperature" }, { word: "storage" }, { word: "conditions" }, { word: "throughout" }, { word: "cold" }, { word: "chain" }, { word: "transport", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "疫苗物流", text: "cold chain (冷链); storage conditions (储存条件); prescribed (规定的)。" }
      ]
    },
    {
      id: "q_healthcare_s143",
      chinese: "临终关怀服务为绝症患者及其家属提供身心全面的支持",
      english_full: "Hospice services provide comprehensive physical and emotional support for terminally ill patients and their families.",
      words: [
        { word: "Hospice" }, { word: "services" }, { word: "provide" }, { word: "comprehensive" }, { word: "physical" },
        { word: "and" }, { word: "emotional" }, { word: "support" }, { word: "for" }, { word: "terminally" },
        { word: "ill" }, { word: "patients" }, { word: "and" }, { word: "their" }, { word: "families", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈhɒspɪs/ /ˈsɜːrvɪsɪz/", translation: "临终关怀服务",
          subComponents: [{ startIndex: 0, words: [{ word: "Hospice" }, { word: "services" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prəˈvaɪd/", translation: "提供",
          subComponents: [{ startIndex: 0, words: [{ word: "provide" }] }]
        },
        {
          start: 3, end: 14, label: "宾语", phonetic: "/ˌkɒmprɪˈhɛnsɪv/ /ˈfɪzɪkəl/ /ænd/ /ɪˈmoʊʃənəl/ /səˈpɔːrt/ /fɔːr/ /ˈtɜːrmɪnəli/ /ɪl/ /ˈpeɪʃənts/ /ænd/ /ðɛər/ /ˈfæmɪliz/", translation: "为绝症患者及其家属提供身心全面的支持",
          subComponents: [{ startIndex: 0, words: [{ word: "comprehensive" }, { word: "physical" }, { word: "and" }, { word: "emotional" }, { word: "support" }, { word: "for" }, { word: "terminally" }, { word: "ill" }, { word: "patients" }, { word: "and" }, { word: "their" }, { word: "families", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "临终关怀", text: "hospice (临终关怀); terminally ill (绝症的); comprehensive support (全面支持)。" }
      ]
    },
    {
      id: "q_healthcare_s144",
      chinese: "医疗人工智能算法在做出诊断建议前须经过严格的临床验证",
      english_full: "Medical AI algorithms must undergo rigorous clinical validation before providing diagnostic recommendations.",
      words: [
        { word: "Medical" }, { word: "AI" }, { word: "algorithms" }, { word: "must" }, { word: "undergo" },
        { word: "rigorous" }, { word: "clinical" }, { word: "validation" }, { word: "before" }, { word: "providing" },
        { word: "diagnostic" }, { word: "recommendations", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈmɛdɪkəl/ /eɪ-aɪ/ /ˈælgəˌrɪðəmz/", translation: "医疗人工智能算法",
          subComponents: [{ startIndex: 0, words: [{ word: "Medical" }, { word: "AI" }, { word: "algorithms" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/mʌst/ /ˌʌndərˈgoʊ/ /ˈrɪgərəs/ /ˈklɪnɪkəl/ /ˌvælɪˈdeɪʃən/", translation: "须经过严格的临床验证",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "undergo" }, { word: "rigorous" }, { word: "clinical" }, { word: "validation" }] }]
        },
        {
          start: 8, end: 11, label: "时间状语", phonetic: "/bɪˈfɔːr/ /prəˈvaɪdɪŋ/ /ˌdaɪəgˈnɒstɪk/ /ˌrɛkəmɛnˈdeɪʃənz/", translation: "在提供诊断建议之前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "providing" }, { word: "diagnostic" }, { word: "recommendations", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "AI医疗", text: "clinical validation (临床验证); diagnostic recommendation (诊断建议); rigorous (严格的)。" }
      ]
    },
    {
      id: "q_healthcare_s145",
      chinese: "骨质疏松症可通过补充钙和维生素D以及负重运动来预防",
      english_full: "Osteoporosis can be prevented through calcium and vitamin D supplementation combined with weight-bearing exercise.",
      words: [
        { word: "Osteoporosis" }, { word: "can" }, { word: "be" }, { word: "prevented" }, { word: "through" },
        { word: "calcium" }, { word: "and" }, { word: "vitamin" }, { word: "D" }, { word: "supplementation" },
        { word: "combined" }, { word: "with" }, { word: "weight-bearing" }, { word: "exercise", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˌɒsti.oʊpəˈroʊsɪs/", translation: "骨质疏松症",
          subComponents: [{ startIndex: 0, words: [{ word: "Osteoporosis" }] }]
        },
        {
          start: 1, end: 3, label: "谓语(被动)", phonetic: "/kæn/ /bi/ /prɪˈvɛntɪd/", translation: "可以被预防",
          subComponents: [{ startIndex: 0, words: [{ word: "can" }, { word: "be" }, { word: "prevented" }] }]
        },
        {
          start: 4, end: 13, label: "方式状语", phonetic: "/θruː/ /ˈkælsiəm/ /ænd/ /ˈvaɪtəmɪn/ /diː/ /ˌsʌplɪmɛnˈteɪʃən/ /kəmˈbaɪnd/ /wɪθ/ /weɪt-ˈbɛərɪŋ/ /ˈɛksərsaɪz/", translation: "通过补充钙和维生素D以及负重运动",
          subComponents: [{ startIndex: 0, words: [{ word: "through" }, { word: "calcium" }, { word: "and" }, { word: "vitamin" }, { word: "D" }, { word: "supplementation" }, { word: "combined" }, { word: "with" }, { word: "weight-bearing" }, { word: "exercise", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "骨骼健康", text: "osteoporosis (骨质疏松症); weight-bearing exercise (负重运动); supplementation (补充)。" }
      ]
    },
    {
      id: "q_healthcare_s146",
      chinese: "该国卫生部门启动了全国性的糖尿病筛查运动以应对日益增长的患病率",
      english_full: "The health ministry launched a nationwide diabetes screening campaign to address the rising prevalence rate.",
      words: [
        { word: "The" }, { word: "health" }, { word: "ministry" }, { word: "launched" }, { word: "a" },
        { word: "nationwide" }, { word: "diabetes" }, { word: "screening" }, { word: "campaign" }, { word: "to" },
        { word: "address" }, { word: "the" }, { word: "rising" }, { word: "prevalence" }, { word: "rate", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /hɛlθ/ /ˈmɪnɪstri/", translation: "该国卫生部门",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "health" }, { word: "ministry" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/lɔːntʃt/", translation: "启动了",
          subComponents: [{ startIndex: 0, words: [{ word: "launched" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ə/ /ˈneɪʃənˌwaɪd/ /ˌdaɪəˈbiːtiːz/ /ˈskriːnɪŋ/ /kæmˈpeɪn/", translation: "全国性的糖尿病筛查运动",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "nationwide" }, { word: "diabetes" }, { word: "screening" }, { word: "campaign" }] }]
        },
        {
          start: 9, end: 14, label: "目的状语", phonetic: "/tuː/ /əˈdrɛs/ /ðə/ /ˈraɪzɪŋ/ /ˈprɛvələns/ /reɪt/", translation: "以应对日益增长的患病率",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "address" }, { word: "the" }, { word: "rising" }, { word: "prevalence" }, { word: "rate", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "慢性病管理", text: "prevalence rate (患病率); screening campaign (筛查运动); diabetes (糖尿病)。" }
      ]
    },
    {
      id: "q_healthcare_s147",
      chinese: "麻醉师在手术前必须全面评估患者的麻醉风险因素",
      english_full: "Anesthesiologists must comprehensively assess the patient's anesthetic risk factors before surgery.",
      words: [
        { word: "Anesthesiologists" }, { word: "must" }, { word: "comprehensively" }, { word: "assess" }, { word: "the" },
        { word: "patient's" }, { word: "anesthetic" }, { word: "risk" }, { word: "factors" }, { word: "before" },
        { word: "surgery", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 0, label: "主语", phonetic: "/ˌænɪsθiːziˈɒlədʒɪsts/", translation: "麻醉师",
          subComponents: [{ startIndex: 0, words: [{ word: "Anesthesiologists" }] }]
        },
        {
          start: 1, end: 3, label: "谓语", phonetic: "/mʌst/ /ˌkɒmprɪˈhɛnsɪvli/ /əˈsɛs/", translation: "必须全面评估",
          subComponents: [{ startIndex: 0, words: [{ word: "must" }, { word: "comprehensively" }, { word: "assess" }] }]
        },
        {
          start: 4, end: 8, label: "宾语", phonetic: "/ðə/ /ˈpeɪʃənts/ /ˌænɪsˈθɛtɪk/ /rɪsk/ /ˈfæktərz/", translation: "患者的麻醉风险因素",
          subComponents: [{ startIndex: 0, words: [{ word: "the" }, { word: "patient's" }, { word: "anesthetic" }, { word: "risk" }, { word: "factors" }] }]
        },
        {
          start: 9, end: 10, label: "时间状语", phonetic: "/bɪˈfɔːr/ /ˈsɜːrdʒəri/", translation: "在手术前",
          subComponents: [{ startIndex: 0, words: [{ word: "before" }, { word: "surgery", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "麻醉学", text: "anesthesiologist (麻醉师); anesthetic risk (麻醉风险); assess (评估)。" }
      ]
    },
    {
      id: "q_healthcare_s148",
      chinese: "移动健康应用程序帮助慢性病患者更好地管理日常用药",
      english_full: "Mobile health applications help chronically ill patients better manage their daily medications.",
      words: [
        { word: "Mobile" }, { word: "health" }, { word: "applications" }, { word: "help" }, { word: "chronically" },
        { word: "ill" }, { word: "patients" }, { word: "better" }, { word: "manage" }, { word: "their" },
        { word: "daily" }, { word: "medications", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈmoʊbaɪl/ /hɛlθ/ /ˌæplɪˈkeɪʃənz/", translation: "移动健康应用程序",
          subComponents: [{ startIndex: 0, words: [{ word: "Mobile" }, { word: "health" }, { word: "applications" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/hɛlp/", translation: "帮助",
          subComponents: [{ startIndex: 0, words: [{ word: "help" }] }]
        },
        {
          start: 4, end: 11, label: "宾语+补足语", phonetic: "/ˈkrɒnɪkli/ /ɪl/ /ˈpeɪʃənts/ /ˈbɛtər/ /ˈmænɪdʒ/ /ðɛər/ /ˈdeɪli/ /ˌmɛdɪˈkeɪʃənz/", translation: "慢性病患者更好地管理日常用药",
          subComponents: [{ startIndex: 0, words: [{ word: "chronically" }, { word: "ill" }, { word: "patients" }, { word: "better" }, { word: "manage" }, { word: "their" }, { word: "daily" }, { word: "medications", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "移动医疗", text: "mobile health (mHealth); chronically ill (慢性患病的); medication management (用药管理)。" }
      ]
    },
    {
      id: "q_healthcare_s149",
      chinese: "器官捐献登记制度的完善有望缓解移植等待名单上的供需失衡",
      english_full: "Improving the organ donation registry system is expected to alleviate the supply-demand imbalance on transplant waiting lists.",
      words: [
        { word: "Improving" }, { word: "the" }, { word: "organ" }, { word: "donation" }, { word: "registry" },
        { word: "system" }, { word: "is" }, { word: "expected" }, { word: "to" }, { word: "alleviate" },
        { word: "the" }, { word: "supply-demand" }, { word: "imbalance" }, { word: "on" }, { word: "transplant" },
        { word: "waiting" }, { word: "lists", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语", phonetic: "/ɪmˈpruːvɪŋ/ /ði/ /ˈɔːrgən/ /doʊˈneɪʃən/ /ˈrɛdʒɪstri/ /ˈsɪstəm/", translation: "完善器官捐献登记制度",
          subComponents: [{ startIndex: 0, words: [{ word: "Improving" }, { word: "the" }, { word: "organ" }, { word: "donation" }, { word: "registry" }, { word: "system" }] }]
        },
        {
          start: 6, end: 7, label: "谓语(被动)", phonetic: "/ɪz/ /ɪkˈspɛktɪd/", translation: "有望",
          subComponents: [{ startIndex: 0, words: [{ word: "is" }, { word: "expected" }] }]
        },
        {
          start: 8, end: 16, label: "主语补足语", phonetic: "/tuː/ /əˈliːviˌeɪt/ /ðə/ /səˈplaɪ-dɪˈmænd/ /ˌɪmbəˈlæns/ /ɒn/ /ˈtrænsplænt/ /ˈweɪtɪŋ/ /lɪsts/", translation: "缓解移植等待名单上的供需失衡",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "alleviate" }, { word: "the" }, { word: "supply-demand" }, { word: "imbalance" }, { word: "on" }, { word: "transplant" }, { word: "waiting" }, { word: "lists", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "器官移植", text: "organ donation registry (器官捐献登记); supply-demand imbalance (供需失衡); transplant waiting list (移植等待名单)。" }
      ]
    },
    {
      id: "q_healthcare_s150",
      chinese: "放射科医生借助三维重建技术对复杂骨折进行了精确评估",
      english_full: "The radiologist utilized three-dimensional reconstruction technology to conduct a precise assessment of the complex fracture.",
      words: [
        { word: "The" }, { word: "radiologist" }, { word: "utilized" }, { word: "three-dimensional" }, { word: "reconstruction" },
        { word: "technology" }, { word: "to" }, { word: "conduct" }, { word: "a" }, { word: "precise" },
        { word: "assessment" }, { word: "of" }, { word: "the" }, { word: "complex" }, { word: "fracture", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˌreɪdiˈɒlədʒɪst/", translation: "放射科医生",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "radiologist" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/ˈjuːtɪˌlaɪzd/ /θriː-dɪˈmɛnʃənəl/ /ˌriːkənˈstrʌkʃən/ /tɛkˈnɒlədʒi/", translation: "借助三维重建技术",
          subComponents: [{ startIndex: 0, words: [{ word: "utilized" }, { word: "three-dimensional" }, { word: "reconstruction" }, { word: "technology" }] }]
        },
        {
          start: 6, end: 14, label: "目的状语", phonetic: "/tuː/ /kənˈdʌkt/ /ə/ /prɪˈsaɪs/ /əˈsɛsmənt/ /ɒv/ /ðə/ /ˈkɒmplɛks/ /ˈfræktʃər/", translation: "对复杂骨折进行精确评估",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "conduct" }, { word: "a" }, { word: "precise" }, { word: "assessment" }, { word: "of" }, { word: "the" }, { word: "complex" }, { word: "fracture", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医学影像", text: "radiologist (放射科医生); 3D reconstruction (三维重建); fracture (骨折)。" }
      ]
    },
    {
      id: "q_healthcare_s151",
      chinese: "医疗数据隐私法规要求医疗机构对患者的敏感信息严格保密",
      english_full: "Medical data privacy regulations require healthcare providers to strictly safeguard patients' sensitive information.",
      words: [
        { word: "Medical" }, { word: "data" }, { word: "privacy" }, { word: "regulations" }, { word: "require" },
        { word: "healthcare" }, { word: "providers" }, { word: "to" }, { word: "strictly" }, { word: "safeguard" },
        { word: "patients'" }, { word: "sensitive" }, { word: "information", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈmɛdɪkəl/ /ˈdeɪtə/ /ˈpraɪvəsi/ /ˌrɛgjʊˈleɪʃənz/", translation: "医疗数据隐私法规",
          subComponents: [{ startIndex: 0, words: [{ word: "Medical" }, { word: "data" }, { word: "privacy" }, { word: "regulations" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/rɪˈkwaɪər/", translation: "要求",
          subComponents: [{ startIndex: 0, words: [{ word: "require" }] }]
        },
        {
          start: 5, end: 12, label: "宾语(不定式)", phonetic: "/ˈhɛlθˌkɛər/ /prəˈvaɪdərz/ /tuː/ /ˈstrɪktli/ /ˈseɪfˌgɑːrd/ /ˈpeɪʃənts/ /ˈsɛnsətɪv/ /ˌɪnfərˈmeɪʃən/", translation: "医疗机构严格保护患者的敏感信息",
          subComponents: [{ startIndex: 0, words: [{ word: "healthcare" }, { word: "providers" }, { word: "to" }, { word: "strictly" }, { word: "safeguard" }, { word: "patients'" }, { word: "sensitive" }, { word: "information", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "数据隐私", text: "data privacy (数据隐私); healthcare provider (医疗服务提供者); safeguard (保护)。" }
      ]
    },
    {
      id: "q_healthcare_s152",
      chinese: "该病原体已对多种广谱抗生素产生了高度耐药性",
      english_full: "The pathogen has developed high-level resistance to multiple broad-spectrum antibiotics.",
      words: [
        { word: "The" }, { word: "pathogen" }, { word: "has" }, { word: "developed" }, { word: "high-level" },
        { word: "resistance" }, { word: "to" }, { word: "multiple" }, { word: "broad-spectrum" }, { word: "antibiotics", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpæθədʒən/", translation: "该病原体",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "pathogen" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/hæz/ /dɪˈvɛləpt/ /haɪ-ˈlɛvəl/", translation: "已产生高度",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "developed" }, { word: "high-level" }] }]
        },
        {
          start: 5, end: 9, label: "宾语", phonetic: "/rɪˈzɪstəns/ /tuː/ /ˈmʌltɪpəl/ /brɔːd-ˈspɛktrəm/ /ˌæntibaɪˈɒtɪks/", translation: "对多种广谱抗生素的耐药性",
          subComponents: [{ startIndex: 0, words: [{ word: "resistance" }, { word: "to" }, { word: "multiple" }, { word: "broad-spectrum" }, { word: "antibiotics", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "微生物学", text: "pathogen (病原体); broad-spectrum antibiotic (广谱抗生素); resistance (耐药性)。" }
      ]
    },
    {
      id: "q_healthcare_s153",
      chinese: "睡眠障碍与多种慢性疾病之间存在被广泛证实的关联",
      english_full: "A well-documented association exists between sleep disorders and multiple chronic diseases.",
      words: [
        { word: "A" }, { word: "well-documented" }, { word: "association" }, { word: "exists" }, { word: "between" },
        { word: "sleep" }, { word: "disorders" }, { word: "and" }, { word: "multiple" }, { word: "chronic" },
        { word: "diseases", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ə/ /wɛl-ˈdɒkjʊmɛntɪd/ /əˌsoʊsiˈeɪʃən/", translation: "一种被广泛证实的关联",
          subComponents: [{ startIndex: 0, words: [{ word: "A" }, { word: "well-documented" }, { word: "association" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ɪgˈzɪsts/", translation: "存在",
          subComponents: [{ startIndex: 0, words: [{ word: "exists" }] }]
        },
        {
          start: 4, end: 10, label: "状语", phonetic: "/bɪˈtwiːn/ /sliːp/ /dɪsˈɔːrdərz/ /ænd/ /ˈmʌltɪpəl/ /ˈkrɒnɪk/ /dɪˈziːzɪz/", translation: "在睡眠障碍与多种慢性疾病之间",
          subComponents: [{ startIndex: 0, words: [{ word: "between" }, { word: "sleep" }, { word: "disorders" }, { word: "and" }, { word: "multiple" }, { word: "chronic" }, { word: "diseases", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "睡眠医学", text: "sleep disorder (睡眠障碍); well-documented (被广泛证实的); chronic disease (慢性疾病)。" }
      ]
    },
    {
      id: "q_healthcare_s154",
      chinese: "护理学院正在加强老年护理和慢性病管理方面的专业培训",
      english_full: "Nursing schools are strengthening professional training in geriatric care and chronic disease management.",
      words: [
        { word: "Nursing" }, { word: "schools" }, { word: "are" }, { word: "strengthening" }, { word: "professional" },
        { word: "training" }, { word: "in" }, { word: "geriatric" }, { word: "care" }, { word: "and" },
        { word: "chronic" }, { word: "disease" }, { word: "management", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˈnɜːrsɪŋ/ /skuːlz/", translation: "护理学院",
          subComponents: [{ startIndex: 0, words: [{ word: "Nursing" }, { word: "schools" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/ɑːr/ /ˈstrɛŋθənɪŋ/ /prəˈfɛʃənəl/ /ˈtreɪnɪŋ/", translation: "正在加强专业培训",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "strengthening" }, { word: "professional" }, { word: "training" }] }]
        },
        {
          start: 6, end: 12, label: "方面状语", phonetic: "/ɪn/ /dʒɛriˈætrɪk/ /kɛər/ /ænd/ /ˈkrɒnɪk/ /dɪˈziːz/ /ˈmænɪdʒmənt/", translation: "在老年护理和慢性病管理方面",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "geriatric" }, { word: "care" }, { word: "and" }, { word: "chronic" }, { word: "disease" }, { word: "management", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "护理教育", text: "geriatric care (老年护理); chronic disease management (慢性病管理); nursing school (护理学院)。" }
      ]
    },
    {
      id: "q_healthcare_s155",
      chinese: "该医疗中心建立了完善的转诊机制以确保患者获得连续性护理",
      english_full: "The medical center established a comprehensive referral mechanism to ensure patients receive continuity of care.",
      words: [
        { word: "The" }, { word: "medical" }, { word: "center" }, { word: "established" }, { word: "a" },
        { word: "comprehensive" }, { word: "referral" }, { word: "mechanism" }, { word: "to" }, { word: "ensure" },
        { word: "patients" }, { word: "receive" }, { word: "continuity" }, { word: "of" }, { word: "care", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈmɛdɪkəl/ /ˈsɛntər/", translation: "该医疗中心",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "medical" }, { word: "center" }] }]
        },
        {
          start: 3, end: 7, label: "谓语", phonetic: "/ɪˈstæblɪʃt/ /ə/ /ˌkɒmprɪˈhɛnsɪv/ /rɪˈfɜːrəl/ /ˈmɛkənɪzəm/", translation: "建立了完善的转诊机制",
          subComponents: [{ startIndex: 0, words: [{ word: "established" }, { word: "a" }, { word: "comprehensive" }, { word: "referral" }, { word: "mechanism" }] }]
        },
        {
          start: 8, end: 14, label: "目的状语", phonetic: "/tuː/ /ɪnˈʃʊər/ /ˈpeɪʃənts/ /rɪˈsiːv/ /ˌkɒntɪˈnjuːɪti/ /ɒv/ /kɛər/", translation: "以确保患者获得连续性护理",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "ensure" }, { word: "patients" }, { word: "receive" }, { word: "continuity" }, { word: "of" }, { word: "care", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医疗体系", text: "referral mechanism (转诊机制); continuity of care (连续性护理); comprehensive (全面的)。" }
      ]
    },
    {
      id: "q_healthcare_s156",
      chinese: "流行病学模型预测下一轮流感高峰将在冬季来临",
      english_full: "Epidemiological models predict that the next influenza peak will arrive during winter.",
      words: [
        { word: "Epidemiological" }, { word: "models" }, { word: "predict" }, { word: "that" }, { word: "the" },
        { word: "next" }, { word: "influenza" }, { word: "peak" }, { word: "will" }, { word: "arrive" },
        { word: "during" }, { word: "winter", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɛpɪˌdiːmiəˈlɒdʒɪkəl/ /ˈmɒdəlz/", translation: "流行病学模型",
          subComponents: [{ startIndex: 0, words: [{ word: "Epidemiological" }, { word: "models" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/prɪˈdɪkt/", translation: "预测",
          subComponents: [{ startIndex: 0, words: [{ word: "predict" }] }]
        },
        {
          start: 3, end: 11, label: "宾语从句", phonetic: "/ðæt/ /ðə/ /nɛkst/ /ˌɪnfluˈɛnzə/ /piːk/ /wɪl/ /əˈraɪv/ /ˈdjʊərɪŋ/ /ˈwɪntər/", translation: "下一轮流感高峰将在冬季来临",
          subComponents: [{ startIndex: 0, words: [{ word: "that" }, { word: "the" }, { word: "next" }, { word: "influenza" }, { word: "peak" }, { word: "will" }, { word: "arrive" }, { word: "during" }, { word: "winter", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "流行病学", text: "epidemiological model (流行病学模型); influenza peak (流感高峰); predict (预测)。" }
      ]
    },
    {
      id: "q_healthcare_s157",
      chinese: "该患者术后恢复良好，已逐步从静脉注射过渡到口服药物治疗",
      english_full: "The patient recovered well postoperatively and has gradually transitioned from intravenous to oral medication.",
      words: [
        { word: "The" }, { word: "patient" }, { word: "recovered" }, { word: "well" }, { word: "postoperatively" },
        { word: "and" }, { word: "has" }, { word: "gradually" }, { word: "transitioned" }, { word: "from" },
        { word: "intravenous" }, { word: "to" }, { word: "oral" }, { word: "medication", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpeɪʃənt/", translation: "该患者",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "patient" }] }]
        },
        {
          start: 2, end: 4, label: "并列谓语1", phonetic: "/rɪˈkʌvərd/ /wɛl/ /ˌpɒstˈɒpərətɪvli/", translation: "术后恢复良好",
          subComponents: [{ startIndex: 0, words: [{ word: "recovered" }, { word: "well" }, { word: "postoperatively" }] }]
        },
        {
          start: 5, end: 6, label: "连词", phonetic: "/ænd/ /hæz/", translation: "并且已经",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "has" }] }]
        },
        {
          start: 7, end: 13, label: "并列谓语2", phonetic: "/ˈgrædʒuəli/ /trænˈzɪʃənd/ /frɒm/ /ɪnˈtrævənəs/ /tuː/ /ˈɔːrəl/ /ˌmɛdɪˈkeɪʃən/", translation: "逐步从静脉注射过渡到口服药物",
          subComponents: [{ startIndex: 0, words: [{ word: "gradually" }, { word: "transitioned" }, { word: "from" }, { word: "intravenous" }, { word: "to" }, { word: "oral" }, { word: "medication", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "术后护理", text: "postoperatively (术后地); intravenous (静脉的); oral medication (口服药物)。" }
      ]
    },
    {
      id: "q_healthcare_s158",
      chinese: "健康素养不足会显著影响患者对医嘱的依从性和自我管理能力",
      english_full: "Insufficient health literacy significantly affects patients' adherence to medical advice and self-management capabilities.",
      words: [
        { word: "Insufficient" }, { word: "health" }, { word: "literacy" }, { word: "significantly" }, { word: "affects" },
        { word: "patients'" }, { word: "adherence" }, { word: "to" }, { word: "medical" }, { word: "advice" },
        { word: "and" }, { word: "self-management" }, { word: "capabilities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˌɪnsəˈfɪʃənt/ /hɛlθ/ /ˈlɪtərəsi/", translation: "健康素养不足",
          subComponents: [{ startIndex: 0, words: [{ word: "Insufficient" }, { word: "health" }, { word: "literacy" }] }]
        },
        {
          start: 3, end: 4, label: "状语+谓语", phonetic: "/sɪgˈnɪfɪkəntli/ /əˈfɛkts/", translation: "显著影响",
          subComponents: [{ startIndex: 0, words: [{ word: "significantly" }, { word: "affects" }] }]
        },
        {
          start: 5, end: 12, label: "宾语", phonetic: "/ˈpeɪʃənts/ /ədˈhɪərəns/ /tuː/ /ˈmɛdɪkəl/ /ədˈvaɪs/ /ænd/ /sɛlf-ˈmænɪdʒmənt/ /ˌkeɪpəˈbɪlɪtiz/", translation: "患者对医嘱的依从性和自我管理能力",
          subComponents: [{ startIndex: 0, words: [{ word: "patients'" }, { word: "adherence" }, { word: "to" }, { word: "medical" }, { word: "advice" }, { word: "and" }, { word: "self-management" }, { word: "capabilities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "健康素养", text: "health literacy (健康素养); adherence (依从性); self-management (自我管理)。" }
      ]
    },
    {
      id: "q_healthcare_s159",
      chinese: "该研究基金将优先资助具有重大公共卫生影响的基础医学研究",
      english_full: "The research fund will prioritize funding basic medical research with significant public health impact.",
      words: [
        { word: "The" }, { word: "research" }, { word: "fund" }, { word: "will" }, { word: "prioritize" },
        { word: "funding" }, { word: "basic" }, { word: "medical" }, { word: "research" }, { word: "with" },
        { word: "significant" }, { word: "public" }, { word: "health" }, { word: "impact", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /rɪˈsɜːrtʃ/ /fʌnd/", translation: "该研究基金",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "research" }, { word: "fund" }] }]
        },
        {
          start: 3, end: 5, label: "谓语", phonetic: "/wɪl/ /ˈpraɪəraɪz/ /ˈfʌndɪŋ/", translation: "将优先资助",
          subComponents: [{ startIndex: 0, words: [{ word: "will" }, { word: "prioritize" }, { word: "funding" }] }]
        },
        {
          start: 6, end: 13, label: "宾语", phonetic: "/ˈbeɪsɪk/ /ˈmɛdɪkəl/ /rɪˈsɜːrtʃ/ /wɪθ/ /sɪgˈnɪfɪkənt/ /ˈpʌblɪk/ /hɛlθ/ /ˈɪmpækt/", translation: "具有重大公共卫生影响的基础医学研究",
          subComponents: [{ startIndex: 0, words: [{ word: "basic" }, { word: "medical" }, { word: "research" }, { word: "with" }, { word: "significant" }, { word: "public" }, { word: "health" }, { word: "impact", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "科研资助", text: "basic medical research (基础医学研究); public health impact (公共卫生影响); prioritize (优先)。" }
      ]
    },
    {
      id: "q_healthcare_s160",
      chinese: "医疗差错报告系统有助于识别系统性问题并推动安全改进",
      english_full: "Medical error reporting systems help identify systemic issues and drive safety improvements.",
      words: [
        { word: "Medical" }, { word: "error" }, { word: "reporting" }, { word: "systems" }, { word: "help" },
        { word: "identify" }, { word: "systemic" }, { word: "issues" }, { word: "and" }, { word: "drive" },
        { word: "safety" }, { word: "improvements", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈmɛdɪkəl/ /ˈɛrər/ /rɪˈpɔːrtɪŋ/ /ˈsɪstəmz/", translation: "医疗差错报告系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Medical" }, { word: "error" }, { word: "reporting" }, { word: "systems" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/hɛlp/", translation: "有助于",
          subComponents: [{ startIndex: 0, words: [{ word: "help" }] }]
        },
        {
          start: 5, end: 11, label: "宾语(省略to)", phonetic: "/aɪˈdɛntɪfaɪ/ /sɪˈstɛmɪk/ /ˈɪʃuːz/ /ænd/ /draɪv/ /ˈseɪfti/ /ɪmˈpruːvmənts/", translation: "识别系统性问题并推动安全改进",
          subComponents: [{ startIndex: 0, words: [{ word: "identify" }, { word: "systemic" }, { word: "issues" }, { word: "and" }, { word: "drive" }, { word: "safety" }, { word: "improvements", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "患者安全", text: "medical error (医疗差错); reporting system (报告系统); safety improvement (安全改进)。" }
      ]
    },
    {
      id: "q_healthcare_s161",
      chinese: "该病毒变异株显示出更强的传播能力但致病性有所减弱",
      english_full: "The viral variant demonstrates stronger transmissibility but reduced pathogenicity.",
      words: [
        { word: "The" }, { word: "viral" }, { word: "variant" }, { word: "demonstrates" }, { word: "stronger" },
        { word: "transmissibility" }, { word: "but" }, { word: "reduced" }, { word: "pathogenicity", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈvaɪrəl/ /ˈvɛəriənt/", translation: "该病毒变异株",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "viral" }, { word: "variant" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/ˈdɛmənstreɪts/", translation: "显示出",
          subComponents: [{ startIndex: 0, words: [{ word: "demonstrates" }] }]
        },
        {
          start: 4, end: 5, label: "宾语1", phonetic: "/ˈstrɒŋgər/ /trænsˌmɪsəˈbɪlɪti/", translation: "更强的传播能力",
          subComponents: [{ startIndex: 0, words: [{ word: "stronger" }, { word: "transmissibility" }] }]
        },
        {
          start: 6, end: 8, label: "转折宾语2", phonetic: "/bʌt/ /rɪˈdjuːst/ /ˌpæθədʒəˈnɪsɪti/", translation: "但致病性有所减弱",
          subComponents: [{ startIndex: 0, words: [{ word: "but" }, { word: "reduced" }, { word: "pathogenicity", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "病毒学", text: "viral variant (病毒变异株); transmissibility (传播能力); pathogenicity (致病性)。" }
      ]
    },
    {
      id: "q_healthcare_s162",
      chinese: "职业倦怠在一线医护人员中已成为日益严重的公共卫生问题",
      english_full: "Occupational burnout has become an increasingly serious public health issue among frontline healthcare workers.",
      words: [
        { word: "Occupational" }, { word: "burnout" }, { word: "has" }, { word: "become" }, { word: "an" },
        { word: "increasingly" }, { word: "serious" }, { word: "public" }, { word: "health" }, { word: "issue" },
        { word: "among" }, { word: "frontline" }, { word: "healthcare" }, { word: "workers", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ˌɒkjʊˈpeɪʃənəl/ /ˈbɜːrnaʊt/", translation: "职业倦怠",
          subComponents: [{ startIndex: 0, words: [{ word: "Occupational" }, { word: "burnout" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/hæz/ /bɪˈkʌm/ /ɪnˈkriːsɪŋli/", translation: "已成为日益",
          subComponents: [{ startIndex: 0, words: [{ word: "has" }, { word: "become" }, { word: "an" }] }]
        },
        {
          start: 5, end: 13, label: "表语", phonetic: "/æn/ /ˈsɪəriəs/ /ˈpʌblɪk/ /hɛlθ/ /ˈɪʃuː/ /əˈmʌŋ/ /ˈfrʌntlaɪn/ /ˈhɛlθˌkɛər/ /ˈwɜːrkərz/", translation: "一个严重的公共卫生问题在一线医护人员中",
          subComponents: [{ startIndex: 0, words: [{ word: "increasingly" }, { word: "serious" }, { word: "public" }, { word: "health" }, { word: "issue" }, { word: "among" }, { word: "frontline" }, { word: "healthcare" }, { word: "workers", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "职业健康", text: "occupational burnout (职业倦怠); frontline healthcare worker (一线医护人员); public health issue (公共卫生问题)。" }
      ]
    },
    {
      id: "q_healthcare_s163",
      chinese: "该医院引入了患者满意度调查以持续改进服务质量",
      english_full: "The hospital introduced patient satisfaction surveys to continuously improve service quality.",
      words: [
        { word: "The" }, { word: "hospital" }, { word: "introduced" }, { word: "patient" }, { word: "satisfaction" },
        { word: "surveys" }, { word: "to" }, { word: "continuously" }, { word: "improve" }, { word: "service" },
        { word: "quality", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈhɒspɪtəl/", translation: "该医院",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "hospital" }] }]
        },
        {
          start: 2, end: 5, label: "谓语", phonetic: "/ˌɪntrəˈdjuːst/ /ˈpeɪʃənt/ /ˌsætɪsˈfækʃən/ /ˈsɜːrveɪz/", translation: "引入了患者满意度调查",
          subComponents: [{ startIndex: 0, words: [{ word: "introduced" }, { word: "patient" }, { word: "satisfaction" }, { word: "surveys" }] }]
        },
        {
          start: 6, end: 10, label: "目的状语", phonetic: "/tuː/ /kənˈtɪnjuəsli/ /ɪmˈpruːv/ /ˈsɜːrvɪs/ /ˈkwɒlɪti/", translation: "以持续改进服务质量",
          subComponents: [{ startIndex: 0, words: [{ word: "to" }, { word: "continuously" }, { word: "improve" }, { word: "service" }, { word: "quality", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "质量管理", text: "patient satisfaction (患者满意度); service quality (服务质量); continuously improve (持续改进)。" }
      ]
    },
    {
      id: "q_healthcare_s164",
      chinese: "辅助生殖技术的进步为不孕不育夫妇提供了更多生育选择",
      english_full: "Advances in assisted reproductive technology offer infertile couples more fertility options.",
      words: [
        { word: "Advances" }, { word: "in" }, { word: "assisted" }, { word: "reproductive" }, { word: "technology" },
        { word: "offer" }, { word: "infertile" }, { word: "couples" }, { word: "more" }, { word: "fertility" },
        { word: "options", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 4, label: "主语", phonetic: "/ədˈvænsɪz/ /ɪn/ /əˈsɪstɪd/ /rɪˈprɒdʌktɪv/ /tɛkˈnɒlədʒi/", translation: "辅助生殖技术的进步",
          subComponents: [{ startIndex: 0, words: [{ word: "Advances" }, { word: "in" }, { word: "assisted" }, { word: "reproductive" }, { word: "technology" }] }]
        },
        {
          start: 5, end: 5, label: "谓语", phonetic: "/ˈɒfər/", translation: "提供了",
          subComponents: [{ startIndex: 0, words: [{ word: "offer" }] }]
        },
        {
          start: 6, end: 10, label: "间接宾语+直接宾语", phonetic: "/ɪnˈfɜːrtaɪl/ /ˈkʌpəlz/ /mɔːr/ /ˈfɜːrtɪlɪti/ /ˈɒpʃənz/", translation: "不孕不育夫妇更多生育选择",
          subComponents: [{ startIndex: 0, words: [{ word: "infertile" }, { word: "couples" }, { word: "more" }, { word: "fertility" }, { word: "options", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "生殖医学", text: "assisted reproductive technology (辅助生殖技术); infertility (不孕不育); fertility options (生育选择)。" }
      ]
    },
    {
      id: "q_healthcare_s165",
      chinese: "该药物相互作用可能导致严重的心律失常，因此须谨慎联用",
      english_full: "This drug interaction may cause severe arrhythmia and therefore requires cautious co-administration.",
      words: [
        { word: "This" }, { word: "drug" }, { word: "interaction" }, { word: "may" }, { word: "cause" },
        { word: "severe" }, { word: "arrhythmia" }, { word: "and" }, { word: "therefore" }, { word: "requires" },
        { word: "cautious" }, { word: "co-administration", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðɪs/ /drʌg/ /ˌɪntərˈækʃən/", translation: "该药物相互作用",
          subComponents: [{ startIndex: 0, words: [{ word: "This" }, { word: "drug" }, { word: "interaction" }] }]
        },
        {
          start: 3, end: 6, label: "并列谓语1", phonetic: "/meɪ/ /kɔːz/ /sɪˈvɪər/ /əˈrɪðmiə/", translation: "可能导致严重心律失常",
          subComponents: [{ startIndex: 0, words: [{ word: "may" }, { word: "cause" }, { word: "severe" }, { word: "arrhythmia" }] }]
        },
        {
          start: 7, end: 8, label: "连词+副词", phonetic: "/ænd/ /ˈðɛərfɔːr/", translation: "因此",
          subComponents: [{ startIndex: 0, words: [{ word: "and" }, { word: "therefore" }] }]
        },
        {
          start: 9, end: 11, label: "并列谓语2", phonetic: "/rɪˈkwaɪərz/ /ˈkɔːʃəs/ /koʊ-ædˌmɪnɪˈstreɪʃən/", translation: "须谨慎联合给药",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }, { word: "cautious" }, { word: "co-administration", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "临床药学", text: "drug interaction (药物相互作用); arrhythmia (心律失常); co-administration (联合给药)。" }
      ]
    },
    {
      id: "q_healthcare_s166",
      chinese: "全球卫生治理需要各国在疫苗公平分配方面加强国际合作",
      english_full: "Global health governance requires nations to strengthen international cooperation on equitable vaccine distribution.",
      words: [
        { word: "Global" }, { word: "health" }, { word: "governance" }, { word: "requires" }, { word: "nations" },
        { word: "to" }, { word: "strengthen" }, { word: "international" }, { word: "cooperation" }, { word: "on" },
        { word: "equitable" }, { word: "vaccine" }, { word: "distribution", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ˈgloʊbəl/ /hɛlθ/ /ˈgʌvərnəns/", translation: "全球卫生治理",
          subComponents: [{ startIndex: 0, words: [{ word: "Global" }, { word: "health" }, { word: "governance" }] }]
        },
        {
          start: 3, end: 3, label: "谓语", phonetic: "/rɪˈkwaɪərz/", translation: "需要",
          subComponents: [{ startIndex: 0, words: [{ word: "requires" }] }]
        },
        {
          start: 4, end: 12, label: "宾语(不定式)", phonetic: "/ˈneɪʃənz/ /tuː/ /ˈstrɛŋθən/ /ˌɪntərˈnæʃənəl/ /koʊˌɒpəˈreɪʃən/ /ɒn/ /ˈiːkwɪtəbəl/ /ˈvæksiːn/ /ˌdɪstrɪˈbjuːʃən/", translation: "各国在疫苗公平分配方面加强国际合作",
          subComponents: [{ startIndex: 0, words: [{ word: "nations" }, { word: "to" }, { word: "strengthen" }, { word: "international" }, { word: "cooperation" }, { word: "on" }, { word: "equitable" }, { word: "vaccine" }, { word: "distribution", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "全球卫生", text: "global health governance (全球卫生治理); equitable distribution (公平分配); international cooperation (国际合作)。" }
      ]
    },
    {
      id: "q_healthcare_s167",
      chinese: "该临床试验因未达到主要终点指标而提前终止",
      english_full: "The clinical trial was terminated early because it failed to meet the primary endpoint criteria.",
      words: [
        { word: "The" }, { word: "clinical" }, { word: "trial" }, { word: "was" }, { word: "terminated" },
        { word: "early" }, { word: "because" }, { word: "it" }, { word: "failed" }, { word: "to" },
        { word: "meet" }, { word: "the" }, { word: "primary" }, { word: "endpoint" }, { word: "criteria", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 2, label: "主语", phonetic: "/ðə/ /ˈklɪnɪkəl/ /ˈtraɪəl/", translation: "该临床试验",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "clinical" }, { word: "trial" }] }]
        },
        {
          start: 3, end: 5, label: "谓语(被动)", phonetic: "/wɒz/ /ˈtɜːrmɪneɪtɪd/ /ˈɜːrli/", translation: "被提前终止",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "terminated" }, { word: "early" }] }]
        },
        {
          start: 6, end: 14, label: "原因状语从句", phonetic: "/bɪˈkɔːz/ /ɪt/ /feɪld/ /tuː/ /miːt/ /ðə/ /ˈpraɪmɛri/ /ˈɛndpɔɪnt/ /ˈkraɪtɪəriə/", translation: "因为它未能达到主要终点指标",
          subComponents: [{ startIndex: 0, words: [{ word: "because" }, { word: "it" }, { word: "failed" }, { word: "to" }, { word: "meet" }, { word: "the" }, { word: "primary" }, { word: "endpoint" }, { word: "criteria", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "临床试验", text: "primary endpoint (主要终点); terminate (终止); clinical trial (临床试验)。" }
      ]
    },
    {
      id: "q_healthcare_s168",
      chinese: "营养干预措施在改善儿童发育迟缓方面显示出显著效果",
      english_full: "Nutritional interventions have demonstrated significant effectiveness in improving childhood stunting.",
      words: [
        { word: "Nutritional" }, { word: "interventions" }, { word: "have" }, { word: "demonstrated" }, { word: "significant" },
        { word: "effectiveness" }, { word: "in" }, { word: "improving" }, { word: "childhood" }, { word: "stunting", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/njuˈtrɪʃənəl/ /ˌɪntərˈvɛnʃənz/", translation: "营养干预措施",
          subComponents: [{ startIndex: 0, words: [{ word: "Nutritional" }, { word: "interventions" }] }]
        },
        {
          start: 2, end: 4, label: "谓语", phonetic: "/hæv/ /ˈdɛmənstreɪtɪd/ /sɪgˈnɪfɪkənt/", translation: "已显示出显著的",
          subComponents: [{ startIndex: 0, words: [{ word: "have" }, { word: "demonstrated" }, { word: "significant" }] }]
        },
        {
          start: 5, end: 9, label: "方面状语", phonetic: "/ɪˈfɛktɪvnəs/ /ɪn/ /ɪmˈpruːvɪŋ/ /ˈtʃaɪldhʊd/ /ˈstʌntɪŋ/", translation: "在改善儿童发育迟缓方面的效果",
          subComponents: [{ startIndex: 0, words: [{ word: "effectiveness" }, { word: "in" }, { word: "improving" }, { word: "childhood" }, { word: "stunting", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "全球健康", text: "nutritional intervention (营养干预); childhood stunting (儿童发育迟缓); effectiveness (有效性)。" }
      ]
    },
    {
      id: "q_healthcare_s169",
      chinese: "医疗培训模拟系统使医学生在无风险环境中练习紧急处置技能",
      english_full: "Medical training simulation systems allow medical students to practice emergency response skills in a risk-free environment.",
      words: [
        { word: "Medical" }, { word: "training" }, { word: "simulation" }, { word: "systems" }, { word: "allow" },
        { word: "medical" }, { word: "students" }, { word: "to" }, { word: "practice" }, { word: "emergency" },
        { word: "response" }, { word: "skills" }, { word: "in" }, { word: "a" }, { word: "risk-free" },
        { word: "environment", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ˈmɛdɪkəl/ /ˈtreɪnɪŋ/ /ˌsɪmjʊˈleɪʃən/ /ˈsɪstəmz/", translation: "医疗培训模拟系统",
          subComponents: [{ startIndex: 0, words: [{ word: "Medical" }, { word: "training" }, { word: "simulation" }, { word: "systems" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈlaʊ/", translation: "使……能够",
          subComponents: [{ startIndex: 0, words: [{ word: "allow" }] }]
        },
        {
          start: 5, end: 15, label: "宾语+补足语", phonetic: "/ˈmɛdɪkəl/ /ˈstjuːdənts/ /tuː/ /ˈpræktɪs/ /ɪˈmɜːrdʒənsi/ /rɪˈspɒns/ /skɪlz/ /ɪn/ /ə/ /rɪsk-friː/ /ɪnˈvaɪrənmənt/", translation: "医学生在无风险环境中练习紧急处置技能",
          subComponents: [{ startIndex: 0, words: [{ word: "medical" }, { word: "students" }, { word: "to" }, { word: "practice" }, { word: "emergency" }, { word: "response" }, { word: "skills" }, { word: "in" }, { word: "a" }, { word: "risk-free" }, { word: "environment", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "医学教育", text: "simulation system (模拟系统); emergency response (紧急处置); risk-free environment (无风险环境)。" }
      ]
    },
    {
      id: "q_healthcare_s170",
      chinese: "该患者因多重合并症而被评估为手术高风险人群",
      english_full: "The patient was assessed as a high surgical risk population due to multiple comorbidities.",
      words: [
        { word: "The" }, { word: "patient" }, { word: "was" }, { word: "assessed" }, { word: "as" },
        { word: "a" }, { word: "high" }, { word: "surgical" }, { word: "risk" }, { word: "population" },
        { word: "due" }, { word: "to" }, { word: "multiple" }, { word: "comorbidities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈpeɪʃənt/", translation: "该患者",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "patient" }] }]
        },
        {
          start: 2, end: 8, label: "谓语(被动)", phonetic: "/wɒz/ /əˈsɛst/ /æz/ /ə/ /haɪ/ /ˈsɜːrdʒɪkəl/ /rɪsk/", translation: "被评估为手术高风险的",
          subComponents: [{ startIndex: 0, words: [{ word: "was" }, { word: "assessed" }, { word: "as" }, { word: "a" }, { word: "high" }, { word: "surgical" }, { word: "risk" }] }]
        },
        {
          start: 9, end: 13, label: "宾语补足语", phonetic: "/ˌpɒpjʊˈleɪʃən/ /djuː/ /tuː/ /ˈmʌltɪpəl/ /ˌkoʊmɔːrˈbɪdɪtiz/", translation: "人群由于多重合并症",
          subComponents: [{ startIndex: 0, words: [{ word: "population" }, { word: "due" }, { word: "to" }, { word: "multiple" }, { word: "comorbidities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "临床评估", text: "comorbidity (合并症); surgical risk (手术风险); assess (评估)。" }
      ]
    },
    {
      id: "q_healthcare_s171",
      chinese: "健康不平等现象在低收入社区中表现得尤为突出",
      english_full: "Health inequities are particularly pronounced in low-income communities.",
      words: [
        { word: "Health" }, { word: "inequities" }, { word: "are" }, { word: "particularly" }, { word: "pronounced" },
        { word: "in" }, { word: "low-income" }, { word: "communities", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/hɛlθ/ /ɪnˈɛkwɪtiz/", translation: "健康不平等现象",
          subComponents: [{ startIndex: 0, words: [{ word: "Health" }, { word: "inequities" }] }]
        },
        {
          start: 2, end: 4, label: "谓语(被动)", phonetic: "/ɑːr/ /pərˈtɪkjʊlərli/ /prəˈnaʊnst/", translation: "尤为突出",
          subComponents: [{ startIndex: 0, words: [{ word: "are" }, { word: "particularly" }, { word: "pronounced" }] }]
        },
        {
          start: 5, end: 7, label: "地点状语", phonetic: "/ɪn/ /loʊ-ˈɪnkʌm/ /kəˈmjuːnɪtiz/", translation: "在低收入社区中",
          subComponents: [{ startIndex: 0, words: [{ word: "in" }, { word: "low-income" }, { word: "communities", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "健康公平", text: "health inequity (健康不平等); low-income community (低收入社区); pronounced (显著的/突出的)。" }
      ]
    },
    {
      id: "q_healthcare_s172",
      chinese: "该新型生物制剂通过阻断特定炎症通路来减轻自身免疫反应",
      english_full: "The novel biologic agent alleviates autoimmune reactions by blocking specific inflammatory pathways.",
      words: [
        { word: "The" }, { word: "novel" }, { word: "biologic" }, { word: "agent" }, { word: "alleviates" },
        { word: "autoimmune" }, { word: "reactions" }, { word: "by" }, { word: "blocking" }, { word: "specific" },
        { word: "inflammatory" }, { word: "pathways", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 3, label: "主语", phonetic: "/ðə/ /ˈnɒvəl/ /ˌbaɪəˈlɒdʒɪk/ /ˈeɪdʒənt/", translation: "该新型生物制剂",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "novel" }, { word: "biologic" }, { word: "agent" }] }]
        },
        {
          start: 4, end: 4, label: "谓语", phonetic: "/əˈliːviˌeɪts/", translation: "减轻",
          subComponents: [{ startIndex: 0, words: [{ word: "alleviates" }] }]
        },
        {
          start: 5, end: 6, label: "宾语", phonetic: "/ˌɔːtoʊɪˈmjuːn/ /riˈækʃənz/", translation: "自身免疫反应",
          subComponents: [{ startIndex: 0, words: [{ word: "autoimmune" }, { word: "reactions" }] }]
        },
        {
          start: 7, end: 11, label: "方式状语", phonetic: "/baɪ/ /ˈblɒkɪŋ/ /spəˈsɪfɪk/ /ɪnˈflæmətɔːri/ /ˈpæθweɪz/", translation: "通过阻断特定炎症通路",
          subComponents: [{ startIndex: 0, words: [{ word: "by" }, { word: "blocking" }, { word: "specific" }, { word: "inflammatory" }, { word: "pathways", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "生物制剂", text: "biologic agent (生物制剂); autoimmune reaction (自身免疫反应); inflammatory pathway (炎症通路)。" }
      ]
    },
    {
      id: "q_healthcare_s173",
      chinese: "医疗质量指标体系的建立有助于推动医疗机构的绩效改进",
      english_full: "Establishing a healthcare quality indicator system helps drive performance improvement in medical institutions.",
      words: [
        { word: "Establishing" }, { word: "a" }, { word: "healthcare" }, { word: "quality" }, { word: "indicator" },
        { word: "system" }, { word: "helps" }, { word: "drive" }, { word: "performance" }, { word: "improvement" },
        { word: "in" }, { word: "medical" }, { word: "institutions", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 5, label: "主语(动名词)", phonetic: "/ɪˈstæblɪʃɪŋ/ /ə/ /ˈhɛlθˌkɛər/ /ˈkwɒlɪti/ /ˈɪndɪkeɪtər/ /ˈsɪstəm/", translation: "建立医疗质量指标体系",
          subComponents: [{ startIndex: 0, words: [{ word: "Establishing" }, { word: "a" }, { word: "healthcare" }, { word: "quality" }, { word: "indicator" }, { word: "system" }] }]
        },
        {
          start: 6, end: 6, label: "谓语", phonetic: "/hɛlps/", translation: "有助于",
          subComponents: [{ startIndex: 0, words: [{ word: "helps" }] }]
        },
        {
          start: 7, end: 12, label: "宾语(省略to)", phonetic: "/draɪv/ /pərˈfɔːrməns/ /ɪmˈpruːvmənt/ /ɪn/ /ˈmɛdɪkəl/ /ˌɪnstɪˈtuːʃənz/", translation: "推动医疗机构的绩效改进",
          subComponents: [{ startIndex: 0, words: [{ word: "drive" }, { word: "performance" }, { word: "improvement" }, { word: "in" }, { word: "medical" }, { word: "institutions", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "质量管理", text: "quality indicator (质量指标); performance improvement (绩效改进); medical institution (医疗机构)。" }
      ]
    },
    {
      id: "q_healthcare_s174",
      chinese: "该研究揭示了肠道微生物群与代谢综合征之间的密切联系",
      english_full: "The study revealed a close link between gut microbiota and metabolic syndrome.",
      words: [
        { word: "The" }, { word: "study" }, { word: "revealed" }, { word: "a" }, { word: "close" },
        { word: "link" }, { word: "between" }, { word: "gut" }, { word: "microbiota" }, { word: "and" },
        { word: "metabolic" }, { word: "syndrome", punctuation: "." }
      ],
      components: [
        {
          start: 0, end: 1, label: "主语", phonetic: "/ðə/ /ˈstʌdi/", translation: "该研究",
          subComponents: [{ startIndex: 0, words: [{ word: "The" }, { word: "study" }] }]
        },
        {
          start: 2, end: 2, label: "谓语", phonetic: "/rɪˈviːld/", translation: "揭示了",
          subComponents: [{ startIndex: 0, words: [{ word: "revealed" }] }]
        },
        {
          start: 3, end: 11, label: "宾语", phonetic: "/ə/ /kloʊs/ /lɪŋk/ /bɪˈtwiːn/ /gʌt/ /ˌmaɪkroʊˈbaɪəʊtə/ /ænd/ /məˈtæbɒlɪk/ /ˈsɪndroʊm/", translation: "肠道微生物群与代谢综合征之间的密切联系",
          subComponents: [{ startIndex: 0, words: [{ word: "a" }, { word: "close" }, { word: "link" }, { word: "between" }, { word: "gut" }, { word: "microbiota" }, { word: "and" }, { word: "metabolic" }, { word: "syndrome", punctuation: "." }] }]
        }
      ],
      analysis: [
        { type: "微生态", text: "gut microbiota (肠道微生物群); metabolic syndrome (代谢综合征); close link (密切联系)。" }
      ]
    }
  ]
};
