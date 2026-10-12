#!/usr/bin/env node
import { writeFileSync } from "fs";
import { partA } from "./_hotel_70_data_a.mjs";
import { partB } from "./_hotel_70_data_b.mjs";
import { partC } from "./_hotel_70_data_c.mjs";
import { partD } from "./_hotel_70_data_d.mjs";

function w(word, punctuation) {
  return punctuation ? { word, punctuation } : { word };
}

function buildEntry(id, chinese, words, components, analysis) {
  const builtComponents = components.map((c) => ({
    start: c.start,
    end: c.end,
    label: c.label,
    phonetic: c.phonetic,
    translation: c.translation,
    subComponents: [{ startIndex: 0, words: words.slice(c.start, c.end + 1) }],
  }));
  const english_full = words
    .map((x, i) => {
      const punct = x.punctuation || "";
      if (punct === "," || punct === ";" || punct === ".") return (i === 0 ? "" : " ") + x.word + punct;
      return (i === 0 ? "" : " ") + x.word;
    })
    .join("")
    .trim();
  return { id, chinese, english_full, words, components: builtComponents, analysis };
}

function fmtWords(words) {
  return words
    .map((x) => {
      const p = x.punctuation ? `, punctuation: "${x.punctuation}"` : "";
      return `{ word: "${x.word}"${p} }`;
    })
    .join(", ");
}

function fmtEntry(e) {
  const comps = e.components
    .map((c) => {
      const subs = c.subComponents[0].words
        .map((x) => {
          const p = x.punctuation ? `, punctuation: "${x.punctuation}"` : "";
          return `{ word: "${x.word}"${p} }`;
        })
        .join(", ");
      return `        {
          start: ${c.start}, end: ${c.end}, label: "${c.label}", phonetic: "${c.phonetic}", translation: "${c.translation}",
          subComponents: [{ startIndex: 0, words: [${subs}] }]
        }`;
    })
    .join(",\n");
  const analysis = e.analysis.map((a) => `{ type: "${a.type}", text: "${a.text}" }`).join(", ");
  return `    {
      id: "${e.id}",
      chinese: "${e.chinese}",
      english_full: "${e.english_full}",
      words: [
        ${fmtWords(e.words)}
      ],
      components: [
${comps}
      ],
      analysis: [
        ${analysis}
      ]
    }`;
}

function mk([id, chinese, words, comps, [atype, atext]]) {
  return buildEntry(
    id,
    chinese,
    words,
    comps.map(([start, end, label, phonetic, translation]) => ({ start, end, label, phonetic, translation })),
    [{ type: atype, text: atext }]
  );
}

function validate(entries) {
  const errors = [];
  entries.forEach((item) => {
    const n = item.words.length;
    const covered = new Set();
    item.components.forEach((c) => {
      for (let i = c.start; i <= c.end; i++) covered.add(i);
      const slice = item.words.slice(c.start, c.end + 1);
      const subWords = c.subComponents?.[0]?.words || [];
      if (JSON.stringify(slice) !== JSON.stringify(subWords)) {
        errors.push(`${item.id}: subComponents mismatch at [${c.start}-${c.end}]`);
      }
    });
    for (let i = 0; i < n; i++) {
      if (!covered.has(i)) errors.push(`${item.id}: word index ${i} '${item.words[i].word}' not covered`);
    }
  });
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
}

const base = [
  ["q_hotel_s100", "这家精品酒店拥有俯瞰整个城市天际线的全景套房，并提供全天候礼宾服务", [w("This"), w("boutique"), w("hotel"), w("boasts"), w("panoramic"), w("suites"), w("overlooking"), w("the"), w("city"), w("skyline"), w("and"), w("provides"), w("round-the-clock"), w("concierge"), w("service", ".")], [[0, 2, "主语", "/ðɪs/ /buːˈtiːk/ /hoʊˈtɛl/", "这家精品酒店"], [3, 3, "谓语", "/boʊsts/", "拥有"], [4, 9, "宾语", "/ˌpænəˈræmɪk/ /swiːts/ /ˌoʊvərˈlʊkɪŋ/ /ðə/ /ˈsɪti/ /ˈskaɪˌlaɪn/", "俯瞰城市天际线的全景套房"], [10, 10, "连词", "/ænd/", "并且"], [11, 11, "谓语", "/prəˈvaɪdz/", "提供"], [12, 14, "宾语", "/raʊnd-ðə-klɒk/ /ˈkɒnsiˌɛrʒ/ /ˈsɜːrvɪs/", "全天候礼宾服务"]], ["酒店词汇", "boutique hotel (精品酒店), panoramic (全景的), round-the-clock (全天候的), concierge (礼宾部)"]],
  ["q_hotel_s101", "鉴于您是我们的白金会员，前台已为您安排了提前入住", [w("In"), w("light"), w("of"), w("your"), w("Platinum"), w("membership", ","), w("the"), w("front"), w("desk"), w("has"), w("arranged"), w("an"), w("early"), w("check-in"), w("for"), w("you", ".")], [[0, 5, "原因状语", "/ɪn/ /laɪt/ /ɒv/ /jʊər/ /ˈplætɪnəm/ /ˈmɛmbərʃɪp/", "鉴于您的白金会员身份"], [6, 8, "主语", "/ðə/ /frʌnt/ /dɛsk/", "前台"], [9, 10, "谓语(现完)", "/hæz/ /əˈreɪndʒd/", "已安排"], [11, 15, "宾语", "/ən/ /ˈɜːrli/ /ˈtʃɛk-ɪn/ /fɔːr/ /juː/", "为您提前入住"]], ["会员服务", "in light of (鉴于), Platinum membership (白金会员), early check-in (提前入住)"]],
  ["q_hotel_s102", "延迟退房至下午两点需视当日房态而定，并可能产生额外费用", [w("A"), w("late"), w("checkout"), w("until"), w("two"), w("PM"), w("is"), w("subject"), w("to"), w("availability"), w("and"), w("may"), w("incur"), w("an"), w("additional"), w("fee", ".")], [[0, 5, "主语", "/ə/ /leɪt/ /ˈtʃɛk-aʊt/ /ʌnˈtɪl/ /tuː/ /piː-ɛm/", "延迟至下午两点的退房"], [6, 6, "系动词", "/ɪz/", "需"], [7, 9, "表语", "/ˈsʌbdʒɪkt/ /tuː/ /əˌveɪləˈbɪlɪti/", "视房态而定"], [10, 10, "连词", "/ænd/", "并且"], [11, 15, "并列谓语", "/meɪ/ /ɪnˈkɜːr/ /æn/ /əˈdɪʃənəl/ /fiː/", "可能产生额外费用"]], ["退房政策", "late checkout (延迟退房), subject to availability (视供应情况而定), incur a fee (产生费用)"]],
  ["q_hotel_s103", "我们的忠诚计划为常客提供房型升级、延迟退房及专属礼遇", [w("Our"), w("loyalty"), w("program"), w("offers"), w("frequent"), w("guests"), w("room"), w("upgrades", ","), w("late"), w("checkouts", ","), w("and"), w("exclusive"), w("privileges", ".")], [[0, 2, "主语", "/aʊər/ /ˈlɔɪəlti/ /ˈproʊɡræm/", "我们的忠诚计划"], [3, 3, "谓语", "/ˈɒfərz/", "提供"], [4, 5, "间接宾语", "/ˈfriːkwənt/ /gɛsts/", "常客"], [6, 12, "直接宾语", "/ruːm/ /ˈʌpɡreɪdz/ /leɪt/ /ˈtʃɛk-aʊts/ /ænd/ /ɪkˈskluːsɪv/ /ˈprɪvɪlɪdʒɪz/", "房型升级、延迟退房及专属礼遇"]], ["忠诚计划", "loyalty program (忠诚计划), room upgrade (房型升级), exclusive privileges (专属礼遇)"]],
  ["q_hotel_s104", "出于安保原因，客人在办理入住时必须出示由政府签发的有效照片身份证件", [w("For"), w("security"), w("reasons", ","), w("guests"), w("are"), w("required"), w("to"), w("present"), w("a"), w("valid"), w("government-issued"), w("photo"), w("ID"), w("upon"), w("check-in", ".")], [[0, 2, "原因状语", "/fɔːr/ /sɪˈkjʊərɪti/ /ˈriːzənz/", "出于安保原因"], [3, 3, "主语", "/gɛsts/", "客人"], [4, 5, "谓语(被动)", "/ɑːr/ /rɪˈkwaɪərd/", "须"], [6, 12, "不定式补语", "/tuː/ /prɪˈzɛnt/ /ə/ /ˈvælɪd/ /ˈgʌvərnmənt-ˈɪʃuːd/ /ˈfoʊtoʊ/ /aɪ-diː/", "出示有效政府签发照片证件"], [13, 14, "时间状语", "/əˈpɒn/ /ˈtʃɛk-ɪn/", "在办理入住时"]], ["入住规定", "government-issued photo ID (政府签发照片证件), upon check-in (办理入住时), required to (须)"]],
  ["q_hotel_s105", "每日客房保洁服务已包含在您的房费内，无需额外付费", [w("Daily"), w("housekeeping"), w("service"), w("is"), w("included"), w("in"), w("your"), w("room"), w("rate"), w("at"), w("no"), w("additional"), w("charge", ".")], [[0, 2, "主语", "/ˈdeɪli/ /ˈhaʊskiːpɪŋ/ /ˈsɜːrvɪs/", "每日客房保洁服务"], [3, 4, "谓语(被动)", "/ɪz/ /ɪnˈkluːdɪd/", "已包含"], [5, 8, "地点状语", "/ɪn/ /jʊər/ /ruːm/ /reɪt/", "在房费内"], [9, 12, "方式状语", "/æt/ /noʊ/ /əˈdɪʃənəl/ /tʃɑːrdʒ/", "无需额外付费"]], ["房费说明", "housekeeping service (保洁服务), room rate (房费), at no additional charge (无需额外付费)"]],
  ["q_hotel_s106", "住客可在行政酒廊享用免费自助早餐及全天候茶点", [w("Guests"), w("may"), w("enjoy"), w("complimentary"), w("buffet"), w("breakfast"), w("and"), w("all-day"), w("refreshments"), w("in"), w("the"), w("executive"), w("lounge", ".")], [[0, 0, "主语", "/gɛsts/", "住客"], [1, 2, "谓语", "/meɪ/ /ɪnˈdʒɔɪ/", "可享用"], [3, 8, "宾语", "/ˌkɒmplɪˈmɛntəri/ /bəˈfeɪ/ /ˈbrɛkfəst/ /ænd/ /ɔːl-deɪ/ /rɪˈfrɛʃmənts/", "免费自助早餐及全天候茶点"], [9, 12, "地点状语", "/ɪn/ /ðə/ /ɪɡˈzɛkjʊtɪv/ /laʊndʒ/", "在行政酒廊"]], ["行政礼遇", "executive lounge (行政酒廊), complimentary breakfast (免费早餐), all-day refreshments (全天候茶点)"]],
  ["q_hotel_s107", "若因超额预订导致无法安排原订房型，我们将提供等值或更高等级客房的补偿", [w("Should"), w("overbooking"), w("prevent"), w("us"), w("from"), w("honoring"), w("your"), w("original"), w("room"), w("type", ","), w("we"), w("will"), w("provide"), w("compensation"), w("in"), w("the"), w("form"), w("of"), w("an"), w("equivalent"), w("or"), w("superior"), w("room", ".")], [[0, 9, "条件从句", "/ʃʊd/ /ˌoʊvərˈbʊkɪŋ/ /prɪˈvɛnt/ /ʌs/ /frɒm/ /ˈɒnərɪŋ/ /jʊər/ /əˈrɪdʒənəl/ /ruːm/ /taɪp/", "若超额预订导致无法安排原订房型"], [10, 10, "主语", "/wiː/", "我们"], [11, 12, "谓语(将来)", "/wɪl/ /prəˈvaɪd/", "将提供"], [13, 22, "宾语", "/ˌkɒmpənˈseɪʃən/ /ɪn/ /ðə/ /fɔːrm/ /ɒv/ /æn/ /ɪˈkwɪvələnt/ /ɔːr/ /suːˈpɪəriər/ /ruːm/", "等值或更高等级客房的补偿"]], ["超额预订", "overbooking (超额预订), honor a reservation (履行预订), compensation (补偿)"]],
  ["q_hotel_s108", "相邻的连通房可通过内部门锁合并，非常适合家庭或团体旅客", [w("Adjacent"), w("connecting"), w("rooms"), w("can"), w("be"), w("combined"), w("via"), w("an"), w("interior"), w("lock", ","), w("making"), w("them"), w("ideal"), w("for"), w("families"), w("or"), w("group"), w("travelers", ".")], [[0, 2, "主语", "/əˈdʒeɪsənt/ /kəˈnɛktɪŋ/ /ruːmz/", "相邻连通房"], [3, 5, "谓语(被动)", "/kæn/ /bi/ /kəmˈbaɪnd/", "可通过…合并"], [6, 9, "方式状语", "/ˈvaɪə/ /æn/ /ɪnˈtɪəriər/ /lɒk/", "通过内部门锁"], [10, 17, "结果状语", "/ˈmeɪkɪŋ/ /ðɛm/ /aɪˈdiːəl/ /fɔːr/ /ˈfæmɪliz/ /ɔːr/ /ɡruːp/ /ˈtrævələrz/", "非常适合家庭或团体"]], ["连通客房", "connecting rooms (连通房), interior lock (内部门锁), ideal for families (适合家庭)"]],
  ["q_hotel_s109", "本酒店实行全面禁烟政策，违规者将被处以清洁及通风费用", [w("This"), w("hotel"), w("maintains"), w("a"), w("strict"), w("smoke-free"), w("policy", ","), w("and"), w("violators"), w("will"), w("be"), w("charged"), w("cleaning"), w("and"), w("ventilation"), w("fees", ".")], [[0, 1, "主语", "/ðɪs/ /hoʊˈtɛl/", "本酒店"], [2, 6, "谓语", "/meɪnˈteɪnz/ /ə/ /strɪkt/ /smoʊk-friː/ /ˈpɒlɪsi/", "实行全面禁烟政策"], [7, 7, "连词", "/ænd/", "并且"], [8, 15, "并列句", "/ˈvaɪəleɪtərz/ /wɪl/ /bi/ /tʃɑːrdʒd/ /ˈkliːnɪŋ/ /ænd/ /ˌvɛntɪˈleɪʃən/ /fiːz/", "违规者将被收取清洁及通风费用"]], ["禁烟政策", "smoke-free policy (禁烟政策), violator (违规者), ventilation fee (通风费用)"]],
];

const raw = [...base, ...partA, ...partB, ...partC, ...partD];
const entries = raw.map(mk);

if (entries.length !== 70) {
  console.error(`Expected 70 entries, got ${entries.length}`);
  process.exit(1);
}

validate(entries);

const out = `export const extensions = {
  "hotel_01": [
${entries.map(fmtEntry).join(",\n")}
  ]
};
`;

writeFileSync(new URL("./scenarios_data_ext_hotel_70.js", import.meta.url), out);
console.log(`Generated scenarios_data_ext_hotel_70.js with ${entries.length} entries.`);
