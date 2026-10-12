import { writingPracticeVariants } from './writingPracticeVariants';

const argumentFunctions = {
  position: { title: '提出观点', guide: '直接回应题目并限定观点范围。' },
  cause: { title: '分析原因', guide: '用 because / stem from 解释现象背后的原因。' },
  effect: { title: '讨论影响', guide: '用 can lead to / enable 等表达说明影响。' },
  example: { title: '举例论证', guide: '用具体做法或情境支撑前面的观点。' },
  contrast: { title: '比较对照', guide: '比较两种做法的优势、成本或适用条件。' },
  concession: { title: '让步反驳', guide: '先承认合理顾虑，再说明观点仍然成立的条件。' },
  conclusion: { title: '总结建议', guide: '归纳论点，并给出可执行、有限定条件的建议。' },
};

const scenarioEntries = [
  {
    id: 'education', title: '教育与成长', topic: 'education',
    items: [
      ['position', '学校应当优先培养学生独立思考的能力。', 'Schools should place greater emphasis on developing students\' independent thinking skills.'],
      ['cause', '这一问题在很大程度上源于学生缺少获得个性化反馈的机会。', 'This problem largely stems from students\' limited access to individualized feedback.'],
      ['effect', '如果教学方式兼顾理论与实践，学生便更有可能将知识运用于现实问题。', 'When teaching balances theory with practice, students are more likely to apply knowledge to real-world problems.'],
      ['example', '例如，跨学科项目可以让学生在解决社区问题时运用科学与写作技能。', 'For example, interdisciplinary projects allow students to use science and writing skills to address problems in their communities.'],
      ['contrast', '与单纯依靠考试相比，持续性评估更能反映学生的长期进步。', 'Compared with relying solely on examinations, continuous assessment can better reflect students\' long-term progress.'],
      ['concession', '尽管在线课程提高了学习的灵活性，但若缺少教师指导，一些学生可能难以保持投入。', 'Although online courses make learning more flexible, some students may struggle to stay engaged without guidance from teachers.'],
      ['conclusion', '因此，学校应在统一的学术要求与个性化支持之间取得平衡。', 'Therefore, schools should balance consistent academic standards with individualized support.'],
    ],
  },
  {
    id: 'technology', title: '科技与社会', topic: 'technology',
    items: [
      ['position', '科技进步应以改善公众福祉为重要目标。', 'Technological progress should be guided in part by the goal of improving public well-being.'],
      ['cause', '数字鸿沟往往是由设备、网络和数字技能方面的不平等共同造成的。', 'The digital divide often results from unequal access to devices, connectivity, and digital skills.'],
      ['effect', '自动化可以提高重复性工作的效率，也可能改变劳动力市场对技能的需求。', 'Automation can make routine work more efficient while also changing the skills demanded by the labor market.'],
      ['example', '例如，远程医疗平台可以让偏远地区的居民更便捷地获得初步诊疗建议。', 'For instance, telemedicine platforms can make initial medical advice more accessible to people in remote areas.'],
      ['contrast', '与传统服务相比，数字服务覆盖面更广，但对可靠网络的依赖也更强。', 'Compared with traditional services, digital services can reach more people but depend more heavily on reliable connectivity.'],
      ['concession', '尽管人工智能能够快速处理大量信息，关键决策仍需要人类判断与问责。', 'While artificial intelligence can process large volumes of information quickly, consequential decisions still require human judgment and accountability.'],
      ['conclusion', '因此，技术部署应配合透明的规则、隐私保护和面向公众的数字教育。', 'In conclusion, the adoption of new technologies should be accompanied by transparent rules, privacy safeguards, and public digital education.'],
    ],
  },
  {
    id: 'environment', title: '环境与城市', topic: 'environment',
    items: [
      ['position', '城市交通政策应优先降低居民对私家车的依赖。', 'Urban transport policy should prioritize reducing residents\' dependence on private cars.'],
      ['cause', '许多城市污染问题源于交通、能源生产和土地利用方式的叠加影响。', 'Many urban pollution problems stem from the combined effects of transport, energy production, and land use.'],
      ['effect', '扩大公共交通网络能够减少通勤排放，并让更多居民获得就业机会。', 'Expanding public transport can reduce commuting emissions and give more residents access to employment opportunities.'],
      ['example', '例如，安全的自行车道可以鼓励短途出行者选择低排放的交通方式。', 'For example, safe cycle lanes can encourage people making short journeys to choose a low-emission form of transport.'],
      ['contrast', '与只增加道路容量相比，改善公交服务通常能以更少空间运送更多乘客。', 'Compared with simply adding road capacity, improving public transport can usually move more passengers using less space.'],
      ['concession', '尽管绿色基础设施需要前期投入，其长期收益可能包括更低的能源成本和更宜居的社区。', 'Although green infrastructure requires upfront investment, its long-term benefits may include lower energy costs and more livable communities.'],
      ['conclusion', '因此，城市规划者应结合本地需求，逐步投资清洁交通与节能建筑。', 'Overall, urban planners should invest gradually in clean transport and energy-efficient buildings in response to local needs.'],
    ],
  },
  {
    id: 'health', title: '健康与生活', topic: 'health',
    items: [
      ['position', '改善公共健康需要同时关注医疗服务与疾病预防。', 'Improving public health requires attention to both medical services and disease prevention.'],
      ['cause', '不健康的生活习惯常常受到时间压力、收入水平和居住环境的共同影响。', 'Unhealthy habits are often shaped by a combination of time pressure, income, and living conditions.'],
      ['effect', '早期预防有助于降低慢性疾病的发病风险，并减轻医疗系统的长期负担。', 'Early prevention can lower the risk of chronic illness and reduce the long-term burden on healthcare systems.'],
      ['example', '例如，在社区提供可负担的运动设施，能让更多居民把规律锻炼融入日常生活。', 'For example, affordable community sports facilities can help more residents make regular exercise part of daily life.'],
      ['contrast', '与只在患病后进行治疗相比，持续的健康教育更有助于人们及早改变风险行为。', 'Compared with treating illness only after it occurs, ongoing health education can help people change risky behaviors earlier.'],
      ['concession', '尽管个人选择会影响健康，公共政策和生活环境也会限制人们可作出的选择。', 'Although personal choices influence health, public policy and the built environment also shape the options available to people.'],
      ['conclusion', '因此，健康政策应把可及的预防服务与针对弱势群体的支持结合起来。', 'For this reason, health policy should combine accessible preventive services with targeted support for vulnerable groups.'],
    ],
  },
  {
    id: 'work', title: '工作与经济', topic: 'work',
    items: [
      ['position', '经济发展应兼顾生产效率、就业质量与社会公平。', 'Economic development should take account of productivity, job quality, and social equity.'],
      ['cause', '青年就业困难部分源于教育内容与岗位所需技能之间的不匹配。', 'Youth unemployment is partly caused by a mismatch between what education provides and what jobs require.'],
      ['effect', '灵活工作安排可以改善部分员工的工作与生活平衡，但也可能模糊工作时间的边界。', 'Flexible work arrangements can improve work-life balance for some employees, but they may also blur the boundaries of working hours.'],
      ['example', '例如，带薪学徒项目能让求职者在获得收入的同时积累行业经验。', 'For example, paid apprenticeships allow job seekers to gain industry experience while earning an income.'],
      ['contrast', '与短期补贴相比，职业培训和稳定的就业服务更可能提升长期就业能力。', 'Compared with short-term subsidies, vocational training and reliable employment services are more likely to improve long-term employability.'],
      ['concession', '尽管提高最低工资会增加部分雇主的成本，合理设计的政策也能改善低收入劳动者的生活。', 'Although raising the minimum wage increases costs for some employers, a carefully designed policy can also improve life for low-income workers.'],
      ['conclusion', '因此，政府和雇主应共同投资于技能培训，并定期评估劳动政策的实际影响。', 'In conclusion, governments and employers should invest in skills training together and regularly assess the real effects of labor policies.'],
    ],
  },
  {
    id: 'society', title: '文化与社会', topic: 'society',
    items: [
      ['position', '文化机构应让更多不同背景的公众参与文化生活。', 'Cultural institutions should enable wider participation by people from diverse backgrounds.'],
      ['cause', '社会隔阂可能因收入不平等、居住分化以及缺乏公共交流空间而加深。', 'Social divisions can deepen because of income inequality, residential segregation, and a lack of shared public spaces.'],
      ['effect', '志愿服务既能回应社区的具体需求，也能加强居民之间的信任。', 'Volunteering can address specific community needs and strengthen trust among residents.'],
      ['example', '例如，社区图书馆可以为不同年龄的居民提供学习、交流和获取公共信息的空间。', 'For example, community libraries can give residents of different ages a place to learn, connect, and access public information.'],
      ['contrast', '与一次性的宣传活动相比，长期社区项目更容易建立稳定的参与关系。', 'Compared with one-off campaigns, long-term community programs are more likely to build sustained participation.'],
      ['concession', '尽管保护传统有助于维系文化认同，文化实践也需要为社会变化留出调整空间。', 'While preserving traditions can support cultural identity, cultural practices also need room to adapt to social change.'],
      ['conclusion', '总的来说，公共文化政策应在保护文化遗产与扩大公众参与之间保持平衡。', 'Overall, public cultural policy should balance the preservation of heritage with broader public participation.'],
    ],
  },
];

const tokenize = (sentence) => {
  const words = [];
  for (const token of sentence.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*|[.,!?;:]/g) || []) {
    if (/^[.,!?;:]$/.test(token)) {
      if (words.length > 0) words[words.length - 1].punctuation = token;
    } else {
      words.push({ word: token });
    }
  }
  return words;
};

export const writingPracticeCurriculum = {
  id: 'module_essay_arguments',
  title: '大作文论证表达 (Essay Arguments)',
  description: '按教育、科技、环境、健康、工作和社会场景，练习七类论证功能表达。',
  sentences: scenarioEntries.flatMap((scenario) => scenario.items.flatMap((original, index) =>
    [original, writingPracticeVariants[scenario.id][index]].map(([argumentFunction, chinese, english], variantIndex) => ({
      id: `essay_${scenario.id}_${argumentFunction}${variantIndex ? '_alt' : ''}`,
      chinese,
      english_full: english,
      words: tokenize(english),
      components: [],
      scenario: scenario.topic,
      argumentFunction,
      analysis: [
        { type: '场景', text: scenario.title },
        { type: '论证功能', text: `${argumentFunctions[argumentFunction].title}：${argumentFunctions[argumentFunction].guide}` },
        { type: '迁移练习', text: `替换句中的核心议题或对象，尝试将这个表达迁移到${scenario.title}类作文题目中。` },
      ],
      order: index * 2 + variantIndex + 1,
    }))
  )),
};

export const writingArgumentFunctions = argumentFunctions;
