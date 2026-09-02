import fs from 'fs';

function build(filename, moduleKey, prefix, data) {
  const sentences = data.map((d, i) => {
    const enWords = d[1].split(' ');
    const words = enWords.map(w => {
      const match = w.match(/^([a-zA-Z0-9'-]+)(.*)$/);
      return { word: match ? match[1] : w, punctuation: match ? match[2] : "" };
    });
    const components = d[2].map(c => {
      const comp = { start: c[0], end: c[1], label: c[2], phonetic: c[3], translation: c[4] };
      if (c[5]) {
        comp.subComponents = c[5].map(sc => ({ start: sc[0], end: sc[1], label: sc[2] }));
      }
      return comp;
    });
    const analysis = d[3].map(a => ({ type: a[0], text: a[1] }));
    return {
      id: `${prefix}_s${11 + i}`,
      chinese: d[0],
      english_full: d[1],
      words,
      components,
      analysis
    };
  });
  fs.writeFileSync('prisma/' + filename, `export const extensions = {\n  "${moduleKey}": ${JSON.stringify(sentences, null, 2)}\n};\n`);
  console.log('Generated prisma/' + filename);
}

const finance = [
  [
    "使您的投资组合多样化是减轻潜在财务风险的最审慎策略",
    "Diversifying your investment portfolio is the most prudent strategy to mitigate potential financial risks.",
    [
      [0, 3, "主语(动名词)", "/daɪˈvɜːrsɪˌfaɪɪŋ/ /jʊər/ /ɪnˈvɛstmənt/ /pɔːrtˈfoʊlioʊ/", "使你的投资组合多样化"],
      [4, 4, "系动词", "/ɪz/", "是"],
      [5, 8, "表语", "/ðə/ /moʊst/ /ˈpruːdənt/ /ˈstrætədʒi/", "最审慎的策略"],
      [9, 14, "定语(不定式)", "/tuː/ /ˈmɪtɪˌgeɪt/ /pəˈtɛnʃəl/ /faɪˈnænʃəl/ /rɪsks/", "去减轻潜在的财务风险"]
    ],
    [["投资理财", "diversify (使多样化)；investment portfolio (投资组合)；prudent (审慎的，明智的)；mitigate risks (减轻风险)。"]]
  ],
  [
    "中央银行实施了扩张性货币政策以刺激疲软的经济增长",
    "The central bank implemented expansionary monetary policies to stimulate sluggish economic growth.",
    [
      [0, 2, "主语", "/ðə/ /ˈsɛntrəl/ /bæŋk/", "中央银行"],
      [3, 3, "谓语", "/ˈɪmplɪmɛntɪd/", "实施了"],
      [4, 6, "宾语", "/ɪkˈspænʃəˌnɛri/ /ˈmɒnɪˌtɛri/ /ˈpɒlɪsiz/", "扩张性货币政策"],
      [7, 11, "目的状语", "/tuː/ /ˈstɪmjʊˌleɪt/ /ˈslʌgɪʃ/ /ˌiːkəˈnɒmɪk/ /groʊθ/", "为了刺激疲软的经济增长"]
    ],
    [["宏观经济学", "central bank (央行)；expansionary monetary policies (扩张性货币政策)；stimulate (刺激)；sluggish (迟缓的，疲软的)。"]]
  ],
  [
    "飞涨的通货膨胀极大地削弱了普通中产阶级消费者的购买力",
    "Galloping inflation drastically diminishes the purchasing power of average middle-class consumers.",
    [
      [0, 1, "主语", "/ˈgæləpɪŋ/ /ɪnˈfleɪʃən/", "飞涨的(如马奔腾般的)通货膨胀"],
      [2, 3, "状语+谓语", "/ˈdræstɪkli/ /dɪˈmɪnɪʃɪz/", "剧烈地削弱/降低"],
      [4, 6, "宾语", "/ðə/ /ˈpɜːrtʃəsɪŋ/ /ˈpaʊər/", "购买力"],
      [7, 11, "后置定语", "/ɒv/ /ˈævərɪdʒ/ /ˈmɪdəl-klæs/ /kənˈsuːmərz/", "普通中产阶级消费者的"]
    ],
    [["经济危机描述", "galloping inflation (恶性通货膨胀)；drastically (剧烈地)；diminish (削弱)；purchasing power (购买力)。"]]
  ],
  [
    "尽管市场动荡，这家跨国公司依然报告了季度股息的大幅激增",
    "The multinational corporation reported a significant surge in quarterly dividends despite market volatility.",
    [
      [0, 2, "主语", "/ðə/ /ˌmʌltiˈnæʃənəl/ /ˌkɔːrpəˈreɪʃən/", "这家跨国公司"],
      [3, 3, "谓语", "/rɪˈpɔːrtɪd/", "报告了"],
      [4, 9, "宾语", "/ə/ /sɪgˈnɪfɪkənt/ /sɜːrdʒ/ /ɪn/ /ˈkwɔːrtərli/ /ˈdɪvɪˌdɛndz/", "一次季度股息的显著激增"],
      [10, 12, "让步状语", "/dɪˈspaɪt/ /ˈmɑːrkɪt/ /ˌvɒləˈtɪlɪti/", "尽管有市场波动"]
    ],
    [["企业财务报表", "multinational corporation (跨国公司)；surge (激增)；dividend (股息/分红)；market volatility (市场波动性)。"]]
  ],
  [
    "精明的投资者不断地监控着可能引发严重股市波动的地缘政治事件",
    "Astute investors continuously monitor geopolitical events that could trigger severe stock market fluctuations.",
    [
      [0, 1, "主句主语", "/əˈstuːt/ /ɪnˈvɛstərz/", "精明的投资者们"],
      [2, 3, "主句状语+谓语", "/kənˈtɪnjuəsli/ /ˈmɒnɪtər/", "不断地监控着"],
      [4, 5, "主句宾语", "/ˌdʒiːoʊpəˈlɪtɪkəl/ /ɪˈvɛnts/", "地缘政治事件"],
      [6, 13, "定语从句", "/ðæt/ /kʊd/ /ˈtrɪgər/ /sɪˈvɪər/ /stɒk/ /ˈmɑːrkɪt/ /ˌflʌktʃuˈeɪʃənz/", "可能会引发严重的股票市场波动的"]
    ],
    [["投资市场策略", "astute (精明的，机敏的)；geopolitical events (地缘政治事件)；trigger (触发)；fluctuations (波动)。"]]
  ],
  [
    "不可预见的经济衰退通常会导致大范围的企业破产和失业率飙升",
    "An unforeseen economic recession often leads to widespread corporate bankruptcies and soaring unemployment.",
    [
      [0, 3, "主语", "/æn/ /ˌʌnfɔːrˈsiːn/ /ˌiːkəˈnɒmɪk/ /rɪˈsɛʃən/", "一场不可预见的经济衰退"],
      [4, 6, "状语+谓语(动词短语)", "/ˈɔːfən/ /liːdz/ /tuː/", "经常导致"],
      [7, 12, "宾语(并列结构)", "/ˈwaɪdsprɛd/ /ˈkɔːrpərət/ /ˈbæŋkrʌptsiz/ /ænd/ /ˈsɔːrɪŋ/ /ʌnɪmˈplɔɪmənt/", "广泛的企业破产和飙升的失业"]
    ],
    [["经济周期词汇", "recession (经济衰退)；lead to (导致)；corporate bankruptcies (企业破产)；soaring unemployment (飙升的失业率)。"]]
  ],
  [
    "在进行任何重大的投机性投资之前，强烈建议寻求专业的财务建议",
    "Seeking professional financial advice is highly recommended before undertaking any substantial speculative investments.",
    [
      [0, 3, "主语(动名词)", "/ˈsiːkɪŋ/ /prəˈfɛʃənəl/ /faɪˈnænʃəl/ /ədˈvaɪs/", "寻求专业的财务建议"],
      [4, 6, "系表/谓语被动", "/ɪz/ /ˈhaɪli/ /ˌrɛkəˈmɛndɪd/", "是被高度推荐的"],
      [7, 12, "时间/条件状语", "/bɪˈfɔːr/ /ˌʌndərˈteɪkɪŋ/ /ˈɛni/ /səbˈstænʃəl/ /ˈspɛkjʊlətɪv/ /ɪnˈvɛstmənts/", "在进行任何重大的投机性投资之前"]
    ],
    [["理财咨询词汇", "seek advice (寻求建议)；highly recommended (强烈推荐)；undertake (承担，进行)；speculative (投机性的)。"]]
  ],
  [
    "这种激进的收购策略有效地巩固了该公司在电信领域的统治地位",
    "The aggressive acquisition strategy effectively consolidated the company's dominance in the telecommunications sector.",
    [
      [0, 3, "主语", "/ðə/ /əˈgrɛsɪv/ /ˌækwɪˈzɪʃən/ /ˈstrætədʒi/", "这种激进的收购策略"],
      [4, 5, "状语+谓语", "/ɪˈfɛktɪvli/ /kənˈsɒlɪˌdeɪtɪd/", "有效地巩固了"],
      [6, 8, "宾语", "/ðə/ /ˈkʌmpəniz/ /ˈdɒmɪnəns/", "该公司的统治地位/优势"],
      [9, 12, "范围状语", "/ɪn/ /ðə/ /ˌtɛlɪkəˌmjuːnɪˈkeɪʃənz/ /ˈsɛktər/", "在电信领域中"]
    ],
    [["企业兼并词汇", "acquisition (收购，M&A中的A)；consolidate (巩固)；dominance (统治地位/主导权)；sector (行业/部门)。"]]
  ],
  [
    "加密货币在去中心化的账本系统上运行，独立于传统金融机构运作",
    "Cryptocurrencies operate on a decentralized ledger system, functioning independently of traditional financial institutions.",
    [
      [0, 0, "主语", "/ˌkrɪptoʊˈkɜːrənsiz/", "加密货币们"],
      [1, 1, "谓语", "/ˈɒpəˌreɪt/", "运营，运作"],
      [2, 6, "地点状语", "/ɒn/ /ə/ /diːˈsɛntrəˌlaɪzd/ /ˈlɛdʒər/ /ˈsɪstəm/", "在一个去中心化的账本系统上"],
      [7, 12, "伴随状语(分词)", "/ˈfʌŋkʃənɪŋ/ /ˌɪndɪˈpɛndəntli/ /ɒv/ /trəˈdɪʃənəl/ /faɪˈnænʃəl/ /ˌɪnstɪˈtuːʃənz/", "独立于传统金融机构运作地"]
    ],
    [["区块链与金融", "decentralized (去中心化的)；ledger (分类账，账本)；function independently of (独立于...运作)；financial institutions (金融机构)。"]]
  ],
  [
    "严格的监管框架被建立起来，以防止灾难性的全球金融危机的重演",
    "Stringent regulatory frameworks were established to prevent a recurrence of the devastating global financial crisis.",
    [
      [0, 2, "主语", "/ˈstrɪndʒənt/ /ˌrɛgjʊləˈtɔːri/ /ˈfreɪmwɜːrks/", "严格的监管框架"],
      [3, 4, "谓语(被动)", "/wɜːr/ /ɪˈstæblɪʃt/", "被建立起来"],
      [5, 13, "目的状语", "/tuː/ /prɪˈvɛnt/ /ə/ /rɪˈkɜːrəns/ /ɒv/ /ðə/ /ˈdɛvəˌsteɪtɪŋ/ /ˈgloʊbəl/ /faɪˈnænʃəl/ /ˈkraɪsɪs/", "为了防止灾难性的全球金融危机的重演"]
    ],
    [["金融监管词汇", "stringent (极其严格的)；regulatory framework (监管框架)；recurrence (重演/复发)；devastating (灾难性的，毁灭性的)。"]]
  ],
  [
    "积累过多的信用卡债务可能会严重危及你的长期财务稳定性",
    "Accumulating excessive credit card debt can severely jeopardize your long-term financial stability.",
    [
      [0, 4, "主语(动名词)", "/əˈkjuːmjʊˌleɪtɪŋ/ /ɪkˈsɛsɪv/ /ˈkrɛdɪt/ /kɑːrd/ /dɛt/", "积累过多的信用卡债务"],
      [5, 7, "状语+谓语", "/kæn/ /sɪˈvɪərli/ /ˈdʒɛpərˌdaɪz/", "能够严重地危及"],
      [8, 11, "宾语", "/jʊər/ /lɒŋ-tɜːrm/ /faɪˈnænʃəl/ /stəˈbɪlɪti/", "你的长期财务稳定性"]
    ],
    [["个人理财", "accumulate (积累)；excessive (过度的)；jeopardize (危害，危及，高级替换 endanger)；financial stability (财务稳定性)。"]]
  ],
  [
    "波动的汇率极大地影响了从事国际贸易的企业的盈利能力",
    "The fluctuating exchange rates significantly impact the profitability of businesses engaged in international trade.",
    [
      [0, 3, "主语", "/ðə/ /ˈflʌktʃuˌeɪtɪŋ/ /ɪksˈtʃeɪndʒ/ /reɪts/", "波动的汇率"],
      [4, 5, "状语+谓语", "/sɪgˈnɪfɪkəntli/ /ˈɪmpækt/", "显著地影响"],
      [6, 9, "宾语", "/ðə/ /ˌprɒfɪtəˈbɪlɪti/ /ɒv/ /ˈbɪznɪsɪz/", "企业的盈利能力"],
      [10, 13, "后置定语", "/ɪnˈgeɪdʒd/ /ɪn/ /ˌɪntərˈnæʃənəl/ /treɪd/", "参与国际贸易的(企业)"]
    ],
    [["外汇与国贸", "fluctuating (波动的，起伏不定的)；exchange rate (汇率)；profitability (盈利能力)；be engaged in (参与，从事于)。"]]
  ],
  [
    "一项全面的审计揭示了该组织年度财务报表中明显的差异",
    "A comprehensive audit revealed glaring discrepancies in the organization's annual financial statements.",
    [
      [0, 2, "主语", "/ə/ /ˌkɒmprɪˈhɛnsɪv/ /ˈɔːdɪt/", "一项全面的审计"],
      [3, 3, "谓语", "/rɪˈviːld/", "揭露了"],
      [4, 5, "宾语", "/ˈglɛərɪŋ/ /dɪˈskrɛpənsiz/", "明显的差异(常指财务造假)"],
      [6, 11, "范围状语", "/ɪn/ /ði/ /ˌɔːrgənɪˈzeɪʃənz/ /ˈænjuəl/ /faɪˈnænʃəl/ /ˈsteɪtmənts/", "在该组织的年度财务报表中"]
    ],
    [["会计与审计", "comprehensive audit (全面审计)；glaring (明显的，耀眼的)；discrepancy (差异，不符，账目不平)；financial statements (财务报表)。"]]
  ],
  [
    "风险资本家提供了启动这家创新科技初创公司所需的关键初始资金",
    "Venture capitalists provided the crucial initial funding required to launch the innovative tech startup.",
    [
      [0, 1, "主语", "/ˈvɛntʃər/ /ˈkæpɪtəlɪsts/", "风险资本家们(风投/VC)"],
      [2, 2, "谓语", "/prəˈvaɪdɪd/", "提供了"],
      [3, 6, "宾语", "/ðə/ /ˈkruːʃəl/ /ɪˈnɪʃəl/ /ˈfʌndɪŋ/", "至关重要的初期资金"],
      [7, 13, "后置定语", "/rɪˈkwaɪərd/ /tuː/ /lɔːntʃ/ /ði/ /ˈɪnəˌveɪtɪv/ /tɛk/ /ˈstɑːrtʌp/", "被需要用来启动这家创新的科技初创公司的"]
    ],
    [["创业与融资", "venture capitalist (风险投资人)；initial funding (启动资金)；launch a startup (创办初创公司)。"]]
  ],
  [
    "养老基金主要投资于低风险的政府债券，以保证稳定和可靠的回报",
    "Pension funds primarily invest in low-risk government bonds to guarantee steady and reliable returns.",
    [
      [0, 1, "主语", "/ˈpɛnʃən/ /fʌndz/", "养老基金"],
      [2, 4, "状语+谓语", "/praɪˈmɛrəli/ /ɪnˈvɛst/ /ɪn/", "主要投资于"],
      [5, 7, "宾语", "/loʊ-rɪsk/ /ˈgʌvərnmənt/ /bɒndz/", "低风险的政府债券"],
      [8, 13, "目的状语", "/tuː/ /ˌgærənˈtiː/ /ˈstɛdi/ /ænd/ /rɪˈlaɪəbəl/ /rɪˈtɜːrnz/", "为了保证稳定且可靠的回报"]
    ],
    [["机构投资", "pension fund (养老基金)；invest in (投资于)；government bond (政府债券)；steady returns (稳定的回报)。"]]
  ],
  [
    "房地产泡沫的突然破裂引发了波及全球市场的灾难性连锁反应",
    "The sudden collapse of the housing bubble triggered a catastrophic chain reaction across global markets.",
    [
      [0, 6, "主语", "/ðə/ /ˈsʌdən/ /kəˈlæps/ /ɒv/ /ðə/ /ˈhaʊzɪŋ/ /ˈbʌbəl/", "房地产泡沫的突然崩溃"],
      [7, 7, "谓语", "/ˈtrɪgərd/", "触发了"],
      [8, 11, "宾语", "/ə/ /ˌkætəˈstrɒfɪk/ /tʃeɪn/ /riˈækʃən/", "一场灾难性的连锁反应"],
      [12, 14, "地点/范围状语", "/əˈkrɒs/ /ˈgloʊbəl/ /ˈmɑːrkɪts/", "横跨全球市场"]
    ],
    [["金融危机", "collapse (崩溃，瓦解)；housing bubble (房地产泡沫)；trigger (触发)；catastrophic chain reaction (灾难性的连锁反应)。"]]
  ],
  [
    "准确计算投资回报率需要将所有相关的运营支出考虑在内",
    "Calculating the return on investment accurately requires factoring in all associated operational expenditures.",
    [
      [0, 5, "主语(动名词短语)", "/ˈkælkjʊˌleɪtɪŋ/ /ðə/ /rɪˈtɜːrn/ /ɒn/ /ɪnˈvɛstmənt/ /ˈækjʊrətli/", "精准地计算投资回报率"],
      [6, 6, "谓语", "/rɪˈkwaɪərz/", "需要"],
      [7, 13, "宾语", "/ˈfæktərɪŋ/ /ɪn/ /ɔːl/ /əˈsoʊʃiˌeɪtɪd/ /ˌɒpəˈreɪʃənəl/ /ɪkˈspɛndɪtʃərz/", "将所有相关的运营支出考虑在内"]
    ],
    [["财务分析", "return on investment / ROI (投资回报率)；factor in (把...因素包括进去)；operational expenditures (运营支出，OPEX)。"]]
  ],
  [
    "合并与收购是旨在实现股东价值最大化的常见企业策略",
    "Mergers and acquisitions are common corporate maneuvers aimed at maximizing shareholder value.",
    [
      [0, 2, "主语", "/ˈmɜːrdʒərz/ /ænd/ /ˌækwɪˈzɪʃənz/", "合并与收购(常简写为M&A)"],
      [3, 3, "系动词", "/ɑːr/", "是"],
      [4, 6, "表语", "/ˈkɒmən/ /ˈkɔːrpərət/ /məˈnuːvərz/", "常见的企业操作(策略)"],
      [7, 11, "后置定语", "/eɪmd/ /æt/ /ˈmæksɪˌmaɪzɪŋ/ /ˈʃɛərˌhoʊldər/ /ˈvæljuː/", "旨在最大化股东价值的"]
    ],
    [["公司资本运作", "mergers and acquisitions (兼并与收购/M&A)；maneuver (策略，手法，操作)；aim at (旨在)；shareholder value (股东价值)。"]]
  ],
  [
    "制定一份细致的家庭预算是迈向实现彻底的财务独立的基础一步",
    "Developing a meticulous household budget is the foundational step toward achieving complete financial independence.",
    [
      [0, 4, "主语(动名词)", "/dɪˈvɛləpɪŋ/ /ə/ /mɪˈtɪkjʊləs/ /ˈhaʊshoʊld/ /ˈbʌdʒɪt/", "制定一份细致的家庭预算"],
      [5, 5, "系动词", "/ɪz/", "是"],
      [6, 8, "表语", "/ðə/ /faʊnˈdeɪʃənəl/ /stɛp/", "基础的一步"],
      [9, 13, "定语", "/təˈwɔːrd/ /əˈtʃiːvɪŋ/ /kəmˈpliːt/ /faɪˈnænʃəl/ /ˌɪndɪˈpɛndəns/", "迈向实现彻底的财务独立的"]
    ],
    [["个人理财规划", "meticulous (细致的，一丝不苟的)；household budget (家庭预算)；foundational step (基础步骤)；financial independence (财务独立)。"]]
  ],
  [
    "这宗利润丰厚的科技公司首次公开募股吸引了狂热散户投资者的资金的大量涌入",
    "The lucrative tech IPO attracted an overwhelming influx of capital from enthusiastic retail investors.",
    [
      [0, 3, "主语", "/ðə/ /ˈluːkrətɪv/ /tɛk/ /aɪ-piː-oʊ/", "这场利润丰厚的科技公司IPO"],
      [4, 4, "谓语", "/əˈtræktɪd/", "吸引了"],
      [5, 9, "宾语", "/æn/ /ˌoʊvərˈwɛlmɪŋ/ /ˈɪnflʌks/ /ɒv/ /ˈkæpɪtəl/", "一股势不可挡的资本涌入"],
      [10, 13, "来源状语", "/frɒm/ /ɪnˌθuːziˈæstɪk/ /ˈriːteɪl/ /ɪnˈvɛstərz/", "从热情的散户投资者处"]
    ],
    [["证券市场", "lucrative (利润丰厚的，赚钱的)；IPO (首次公开募股)；overwhelming influx (势不可挡的涌入)；retail investor (散户投资者，与 institutional investor 机构投资者相对)。"]]
  ]
];

const work = [
  [
    "向远程办公的过渡已经从根本上重新定义了工作与生活平衡的传统概念",
    "The transition to remote work has fundamentally redefined the traditional concept of work-life balance.",
    [
      [0, 4, "主语", "/ðə/ /trænˈzɪʃən/ /tuː/ /rɪˈmoʊt/ /wɜːrk/", "向远程工作的过渡"],
      [5, 7, "状语+谓语(现完)", "/hæz/ /ˌfʌndəˈmɛntəli/ /ˌriːdɪˈfaɪnd/", "已经从根本上重新定义了"],
      [8, 13, "宾语", "/ðə/ /trəˈdɪʃənəl/ /ˈkɒnsɛpt/ /ɒv/ /ˈwɜːrk-laɪf/ /ˈbæləns/", "工作与生活平衡的传统概念"]
    ],
    [["现代办公模式", "transition to (向...过渡)；fundamentally redefine (从根本上重新定义)；remote work (远程办公)；work-life balance (工作与生活的平衡)。"]]
  ],
  [
    "在职场中，培养强大的人际交往能力与获取技术专长同等关键",
    "Cultivating strong interpersonal skills is equally as critical as acquiring technical expertise in the workplace.",
    [
      [0, 3, "主语(动名词)", "/ˈkʌltɪˌveɪtɪŋ/ /strɒŋ/ /ˌɪntərˈpɜːrsənəl/ /skɪlz/", "培养强大的人际交往能力"],
      [4, 4, "系动词", "/ɪz/", "是"],
      [5, 8, "表语", "/ˈiːkwəli/ /æz/ /ˈkrɪtɪkəl/ /æz/", "同...一样极其重要的"],
      [9, 11, "比较对象", "/əˈkwaɪərɪŋ/ /ˈtɛknɪkəl/ /ˌɛkspɜːrˈtiːz/", "获取技术专长"],
      [12, 14, "地点状语", "/ɪn/ /ðə/ /ˈwɜːrkˌpleɪs/", "在工作场所中"]
    ],
    [["职场素养", "interpersonal skills (人际交往能力)；equally as critical as (与...同等关键)；technical expertise (技术专长/专业知识)。"]]
  ],
  [
    "人力资源部门发起了一项全面的导师计划以促进员工的职业发展",
    "The HR department initiated a comprehensive mentorship program to facilitate employee professional development.",
    [
      [0, 2, "主语", "/ðə/ /eɪtʃ-ɑːr/ /dɪˈpɑːrtmənt/", "人力资源(HR)部门"],
      [3, 3, "谓语", "/ɪˈnɪʃiˌeɪtɪd/", "发起了"],
      [4, 7, "宾语", "/ə/ /ˌkɒmprɪˈhɛnsɪv/ /ˈmɛntərʃɪp/ /ˈproʊgræm/", "一项全面的导师计划"],
      [8, 12, "目的状语", "/tuː/ /fəˈsɪlɪteɪt/ /ɪmˈplɔɪi/ /prəˈfɛʃənəl/ /dɪˈvɛləpmənt/", "为了促进员工的职业发展"]
    ],
    [["人才管理", "initiate (发起，开始)；mentorship program (导师计划，师徒制)；facilitate (促进)；professional development (职业发展)。"]]
  ],
  [
    "积极主动地解决冲突是有效企业领导力的一个基本属性",
    "Proactive conflict resolution is an essential attribute of effective corporate leadership.",
    [
      [0, 2, "主语", "/proʊˈæktɪv/ /ˈkɒnflɪkt/ /ˌrɛzəˈluːʃən/", "积极主动的冲突解决"],
      [3, 3, "系动词", "/ɪz/", "是"],
      [4, 10, "表语", "/æn/ /ɪˈsɛnʃəl/ /ˈætrɪˌbjuːt/ /ɒv/ /ɪˈfɛktɪv/ /ˈkɔːrpərət/ /ˈliːdərʃɪp/", "有效企业领导力的一个重要属性"]
    ],
    [["领导力特质", "proactive (积极主动的，反义词 reactive)；conflict resolution (冲突解决)；essential attribute (本质属性/关键特质)；corporate leadership (企业领导力)。"]]
  ],
  [
    "公司为了精简其组织架构而绝望地宣布了大规模的裁员",
    "The company announced widespread layoffs in a desperate attempt to streamline its organizational structure.",
    [
      [0, 1, "主语", "/ðə/ /ˈkʌmpəni/", "公司"],
      [2, 2, "谓语", "/əˈnaʊnst/", "宣布了"],
      [3, 4, "宾语", "/ˈwaɪdsprɛd/ /ˈleɪɒfs/", "大范围的裁员"],
      [5, 13, "方式/目的状语", "/ɪn/ /ə/ /ˈdɛspərət/ /əˈtɛmpt/ /tuː/ /ˈstriːmlaɪn/ /ɪts/ /ˌɔːrgənɪˈzeɪʃənəl/ /ˈstrʌktʃər/", "在一种试图精简其组织结构的绝望尝试中"]
    ],
    [["企业重组", "widespread layoffs (大规模裁员)；desperate attempt (绝望的尝试，孤注一掷)；streamline (精简)；organizational structure (组织架构)。"]]
  ],
  [
    "包容性的企业文化能显著地提升员工士气并大幅降低员工流失率",
    "An inclusive corporate culture significantly enhances employee morale and drastically reduces staff turnover.",
    [
      [0, 3, "主语", "/æn/ /ɪnˈkluːsɪv/ /ˈkɔːrpərət/ /ˈkʌltʃər/", "一种包容性的企业文化"],
      [4, 7, "状语+谓语+宾语(并列1)", "/sɪgˈnɪfɪkəntli/ /ɪnˈhænsɪz/ /ɪmˈplɔɪi/ /məˈræl/", "显著地提升员工士气"],
      [8, 12, "状语+谓语+宾语(并列2)", "/ænd/ /ˈdræstɪkli/ /rɪˈdjuːsɪz/ /stæf/ /ˈtɜːrnoʊvər/", "并大幅降低员工流失率(离职率)"]
    ],
    [["团队建设", "inclusive (包容的)；enhance morale (提升士气，morale发音/məˈræl/)；drastically (大幅度地)；staff turnover (员工流失率/离职率)。"]]
  ],
  [
    "微观管理常常会扼杀创造力，并在有能力的团队成员中滋生根深蒂固的怨恨",
    "Micromanagement often suffocates creativity and breeds deep-seated resentment among competent team members.",
    [
      [0, 0, "主语", "/ˌmaɪkroʊˈmænɪdʒmənt/", "微观管理(事无巨细的管理)"],
      [1, 3, "状语+谓语+宾语(并列1)", "/ˈɔːfən/ /ˈsʌfəkeɪts/ /ˌkriːeɪˈtɪvɪti/", "经常扼杀创造力"],
      [4, 7, "谓语+宾语(并列2)", "/ænd/ /briːdz/ /diːp-ˈsiːtɪd/ /rɪˈzɛntmənt/", "并滋生根深蒂固的怨恨"],
      [8, 11, "范围状语", "/əˈmʌŋ/ /ˈkɒmpɪtənt/ /tiːm/ /ˈmɛmbərz/", "在有能力的团队成员之中"]
    ],
    [["管理风格反思", "micromanagement (微观管理，带有贬义)；suffocate (使窒息，扼杀)；breed (滋生)；deep-seated resentment (根深蒂固的怨恨)；competent (有能力的，胜任的)。"]]
  ],
  [
    "这位雄心勃勃的实习生总是自愿承担具有挑战性的任务，以展示她坚定不移的奉献精神",
    "The ambitious intern consistently volunteered for challenging assignments to demonstrate her unwavering dedication.",
    [
      [0, 2, "主语", "/ðə/ /æmˈbɪʃəs/ /ˈɪntɜːrn/", "这位雄心勃勃的实习生"],
      [3, 4, "状语+谓语", "/kənˈsɪstəntli/ /ˌvɒlənˈtɪərd/", "一贯地自愿(承担)"],
      [5, 7, "宾语(介词)", "/fɔːr/ /ˈtʃælɪndʒɪŋ/ /əˈsaɪnmənts/", "具有挑战性的任务"],
      [8, 12, "目的状语", "/tuː/ /ˈdɛmənˌstreɪt/ /hɜːr/ /ʌnˈweɪvərɪŋ/ /ˌdɛdɪˈkeɪʃən/", "为了展示她坚定不移的奉献精神"]
    ],
    [["职场新人表现", "ambitious (有雄心/野心的)；intern (实习生)；consistently (一贯地)；volunteer for (自愿做)；unwavering dedication (坚定不移的奉献)。"]]
  ],
  [
    "建设性的绩效评估为员工提供了切实可行的反馈，从而提高他们日常的生产力",
    "Constructive performance appraisals provide employees with actionable feedback to improve their daily productivity.",
    [
      [0, 2, "主语", "/kənˈstrʌktɪv/ /pərˈfɔːrməns/ /əˈpreɪzəlz/", "建设性的绩效评估"],
      [3, 3, "谓语", "/prəˈvaɪd/", "提供"],
      [4, 4, "宾语", "/ɪmˈplɔɪiz/", "员工们"],
      [5, 7, "伴随状语(固定搭配)", "/wɪθ/ /ˈækʃənəbəl/ /ˈfiːdbæk/", "提供切实可行的反馈(provide sb with sth)"],
      [8, 12, "目的状语", "/tuː/ /ɪmˈpruːv/ /ðɛər/ /ˈdeɪli/ /ˌproʊdʌkˈtɪvɪti/", "为了提高他们日常的生产力"]
    ],
    [["职场考核", "constructive (建设性的)；performance appraisal (绩效评估/考核)；actionable feedback (切实可行的反馈)；productivity (生产力)。"]]
  ],
  [
    "协作式的头脑风暴会议非常有助于为复杂问题生成创新的解决方案",
    "Collaborative brainstorming sessions are highly conducive to generating innovative solutions to complex problems.",
    [
      [0, 2, "主语", "/kəˈlæbərətɪv/ /ˈbreɪnˌstɔːrmɪŋ/ /ˈsɛʃənz/", "协作式的头脑风暴会议"],
      [3, 3, "系动词", "/ɑːr/", "是"],
      [4, 6, "表语(固定搭配)", "/ˈhaɪli/ /kənˈduːsɪv/ /tuː/", "对...是高度有益的(to是介词)"],
      [7, 12, "介词宾语", "/ˈdʒɛnəˌreɪtɪŋ/ /ˈɪnəˌveɪtɪv/ /səˈluːʃənz/ /tuː/ /ˈkɒmplɛks/ /ˈprɒbləmz/", "生成解决复杂问题的创新方案"]
    ],
    [["团队会议", "collaborative (协作的)；brainstorming session (头脑风暴会议)；be conducive to doing (有助于/有利于做某事)。"]]
  ],
  [
    "守时和可靠的出勤率是一个候选人职业操守的基本指标",
    "Punctuality and reliable attendance are fundamental indicators of a candidate's professional integrity.",
    [
      [0, 3, "主语", "/ˌpʌŋktʃuˈælɪti/ /ænd/ /rɪˈlaɪəbəl/ /əˈtɛndəns/", "守时和可靠的出勤(率)"],
      [4, 4, "系动词", "/ɑːr/", "是"],
      [5, 11, "表语", "/ˌfʌndəˈmɛntəl/ /ˈɪndɪˌkeɪtərz/ /ɒv/ /ə/ /ˈkændɪdəts/ /prəˈfɛʃənəl/ /ɪnˈtɛgrɪti/", "一个候选人的职业操守/正直的基本指标"]
    ],
    [["职业道德", "punctuality (守时)；attendance (出勤)；indicator (指标)；professional integrity (职业操守，职业正直)。"]]
  ],
  [
    "这位高级高管在年度企业晚会上发表了一场鼓舞人心的主题演讲",
    "The senior executive delivered an inspiring keynote address during the annual corporate gala.",
    [
      [0, 2, "主语", "/ðə/ /ˈsiːnjər/ /ɪgˈzɛkjʊtɪv/", "这位高级高管"],
      [3, 3, "谓语", "/dɪˈlɪvərd/", "发表了"],
      [4, 7, "宾语", "/æn/ /ɪnˈspaɪərɪŋ/ /ˈkiːˌnoʊt/ /əˈdrɛs/", "一场鼓舞人心的主题演讲"],
      [8, 12, "时间状语", "/ˈdjʊərɪŋ/ /ði/ /ˈænjuəl/ /ˈkɔːrpərət/ /ˈgælə/", "在年度的企业晚会期间"]
    ],
    [["商务活动", "senior executive (高管)；deliver an address (发表演讲，同 deliver a speech)；keynote (主题的)；gala (盛大的晚会)。"]]
  ],
  [
    "成功驾驭职场办公室政治需要极高程度的情商",
    "Successfully navigating workplace office politics requires a high degree of emotional intelligence.",
    [
      [0, 4, "主语(动名词短语)", "/səkˈsɛsfəli/ /ˈnævɪˌgeɪtɪŋ/ /ˈwɜːrkˌpleɪs/ /ˈɒfɪs/ /ˈpɒlɪtɪks/", "成功地驾驭职场办公室政治"],
      [5, 5, "谓语", "/rɪˈkwaɪərz/", "需要"],
      [6, 11, "宾语", "/ə/ /haɪ/ /dɪˈgriː/ /ɒv/ /ɪˈmoʊʃənəl/ /ɪnˈtɛlɪdʒəns/", "高程度的情商"]
    ],
    [["职场生存", "navigate (驾驭，应对复杂情况)；office politics (办公室政治)；emotional intelligence / EQ (情商)。"]]
  ],
  [
    "这位新任命的经理迅速赢得了她小心谨慎的下属们深深的尊重",
    "The newly appointed manager quickly earned the profound respect of her cautious subordinates.",
    [
      [0, 3, "主语", "/ðə/ /ˈnuːli/ /əˈpɔɪntɪd/ /ˈmænɪdʒər/", "这位新任命的经理"],
      [4, 5, "状语+谓语", "/ˈkwɪkli/ /ɜːrnd/", "迅速赢得了"],
      [6, 12, "宾语", "/ðə/ /prəˈfaʊnd/ /rɪˈspɛkt/ /ɒv/ /hɜːr/ /ˈkɔːʃəs/ /səˈbɔːrdɪnɪts/", "她谨慎的下属们深深的敬意"]
    ],
    [["上下级关系", "newly appointed (新任命的)；earn respect (赢得尊重)；profound (深刻的)；cautious (谨慎的)；subordinate (下属)。"]]
  ],
  [
    "众所周知，有毒的工作环境对心理健康和整体运营效率都有害",
    "Toxic work environments are notoriously detrimental to both mental well-being and overall operational efficiency.",
    [
      [0, 2, "主语", "/ˈtɒksɪk/ /wɜːrk/ /ɪnˈvaɪrənmənts/", "有毒的工作环境"],
      [3, 3, "系动词", "/ɑːr/", "是"],
      [4, 13, "表语", "/noʊˈtɔːriəsli/ /ˌdɛtrɪˈmɛntəl/ /tuː/ /boʊθ/ /ˈmɛntəl/ /wɛl-ˈbiːɪŋ/ /ænd/ /ˈoʊvərˌɔːl/ /ˌɒpəˈreɪʃənəl/ /ɪˈfɪʃənsi/", "声名狼藉地有害于心理健康和整体运营效率两方面"]
    ],
    [["企业病态", "toxic (有毒的)；notoriously (声名狼藉地，众所周知地)；be detrimental to (对...有害，比 harmful 更高级)；well-being (幸福，健康)。"]]
  ],
  [
    "自由职业承包商很欣赏选择他们首选客户和灵活日程的无与伦比的自主权",
    "Freelance contractors appreciate the unparalleled autonomy of selecting their preferred clientele and flexible schedules.",
    [
      [0, 1, "主语", "/ˈfriːˌlæns/ /kənˈtræktərz/", "自由职业的承包商"],
      [2, 2, "谓语", "/əˈpriːʃiˌeɪt/", "感激，欣赏"],
      [3, 13, "宾语(含动名词修饰)", "/ði/ /ʌnˈpærəˌlɛld/ /ɔːˈtɒnəmi/ /ɒv/ /sɪˈlɛktɪŋ/ /ðɛər/ /prɪˈfɜːrd/ /klaɪənˈtɛl/ /ænd/ /ˈflɛksəbəl/ /ˈskɛdʒuːlz/", "选择他们偏好的客户群和灵活日程的无与伦比的自主权"]
    ],
    [["新型工作方式", "freelance contractor (自由职业承包商/外包人员)；unparalleled autonomy (无与伦比的自主权)；clientele (客户群)。"]]
  ],
  [
    "丰厚的薪酬方案通常包含全面的健康保险和优厚的退休福利",
    "A generous compensation package usually includes comprehensive health insurance and lucrative retirement benefits.",
    [
      [0, 3, "主语", "/ə/ /ˈdʒɛnərəs/ /ˌkɒmpɛnˈseɪʃən/ /ˈpækɪdʒ/", "一个慷慨的(丰厚的)薪酬方案/包裹"],
      [4, 5, "状语+谓语", "/ˈjuːʒuəli/ /ɪnˈkluːdz/", "通常包含"],
      [6, 12, "宾语(并列)", "/ˌkɒmprɪˈhɛnsɪv/ /hɛlθ/ /ɪnˈʃʊərəns/ /ænd/ /ˈluːkrətɪv/ /rɪˈtaɪərmənt/ /ˈbɛnɪfɪts/", "全面的健康保险以及丰厚的退休福利"]
    ],
    [["薪酬与福利", "generous compensation package (丰厚的薪酬方案/包裹)；comprehensive (全面的)；lucrative (赚大钱的，丰厚的)；retirement benefits (退休福利)。"]]
  ],
  [
    "跨部门的协作打破了组织内的壁垒，并培养了统一的公司愿景",
    "Cross-departmental collaboration breaks down organizational silos and fosters a unified company vision.",
    [
      [0, 1, "主语", "/krɒs-dɪˌpɑːrtˈmɛntəl/ /kəˌlæbəˈreɪʃən/", "跨部门的协作"],
      [2, 5, "谓语+宾语(并列1)", "/breɪks/ /daʊn/ /ˌɔːrgənɪˈzeɪʃənəl/ /ˈsaɪloʊz/", "打破组织内部的信息孤岛(壁垒)"],
      [6, 11, "谓语+宾语(并列2)", "/ænd/ /ˈfɒstərz/ /ə/ /ˈjuːnɪˌfaɪd/ /ˈkʌmpəni/ /ˈvɪʒən/", "并培养一种统一的公司愿景"]
    ],
    [["敏捷组织管理", "cross-departmental (跨部门的)；break down (打破)；organizational silos (组织孤岛/部门壁垒)；foster (培养/促进)；unified vision (统一的愿景)。"]]
  ],
  [
    "设定切合实际的截止日期对于防止员工倦怠并确保高质量的交付成果至关重要",
    "Setting realistic deadlines is imperative to prevent employee burnout and ensure high-quality deliverables.",
    [
      [0, 2, "主语(动名词)", "/ˈsɛtɪŋ/ /riˈælɪstɪk/ /ˈdɛdˌlaɪnz/", "设定切合实际的截止日期"],
      [3, 3, "系动词", "/ɪz/", "是"],
      [4, 4, "表语", "/ɪmˈpɛrətɪv/", "极其重要的"],
      [5, 12, "目的状语", "/tuː/ /prɪˈvɛnt/ /ɪmˈplɔɪi/ /ˈbɜːrnaʊt/ /ænd/ /ɪnˈʃʊər/ /haɪ-ˈkwɒlɪti/ /dɪˈlɪvərəbəlz/", "去防止员工倦怠并确保高质量的交付物"]
    ],
    [["项目管理", "realistic deadline (实际的/现实的截止日期)；imperative (极其重要的)；burnout (过度劳累/职业倦怠)；deliverables (交付物/成果)。"]]
  ],
  [
    "每天在拥堵的交通中进行令人疲惫不堪的通勤，极大地消耗了员工的精力",
    "The grueling daily commute through congested traffic drains a significant amount of employee energy.",
    [
      [0, 6, "主语", "/ðə/ /ˈgruːəlɪŋ/ /ˈdeɪli/ /kəˈmjuːt/ /θruː/ /kənˈdʒɛstɪd/ /ˈtræfɪk/", "穿过拥堵交通的令人疲惫的日常通勤"],
      [7, 7, "谓语", "/dreɪnz/", "消耗，使耗尽"],
      [8, 13, "宾语", "/ə/ /sɪgˈnɪfɪkənt/ /əˈmaʊnt/ /ɒv/ /ɪmˈplɔɪi/ /ˈɛnərdʒi/", "极其大量的员工精力"]
    ],
    [["职场痛点", "grueling (令人精疲力竭的，极其艰苦的)；commute (通勤)；congested traffic (拥堵的交通)；drain (消耗，耗尽)。"]]
  ]
];

build('scenarios_data_ext_finance_20.js', 'finance_01', 'fin', finance);
build('scenarios_data_ext_work_20.js', 'work_01', 'work', work);
