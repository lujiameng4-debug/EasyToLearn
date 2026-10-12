/**
 * Seeds ~50 common English words into the Dictionary table for immediate UI testing.
 *
 * Usage: node prisma/seed_dict_basic.js
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {Array<{ word: string; phonetic: string; translation: string; pos?: string }>} */
const BASIC_WORDS = [
  { word: 'the', phonetic: '/ðə; ðiː/', translation: 'art. 这；那', pos: 'art.' },
  { word: 'be', phonetic: '/biː/', translation: 'v. 是；存在', pos: 'v.' },
  { word: 'to', phonetic: '/tuː; tə/', translation: 'prep. 到；向 \n inf. 不定式符号', pos: 'prep.' },
  { word: 'of', phonetic: '/ʌv; əv/', translation: 'prep. …的；关于', pos: 'prep.' },
  { word: 'and', phonetic: '/ænd; ənd/', translation: 'conj. 和；并且', pos: 'conj.' },
  { word: 'a', phonetic: '/ə; eɪ/', translation: 'art. 一个', pos: 'art.' },
  { word: 'in', phonetic: '/ɪn/', translation: 'prep. 在…里 \n adv. 在里面', pos: 'prep.' },
  { word: 'that', phonetic: '/ðæt/', translation: 'pron. 那；那个 \n conj. 那', pos: 'pron.' },
  { word: 'have', phonetic: '/hæv/', translation: 'v. 有；拥有', pos: 'v.' },
  { word: 'it', phonetic: '/ɪt/', translation: 'pron. 它', pos: 'pron.' },
  { word: 'for', phonetic: '/fɔːr/', translation: 'prep. 为了；对于', pos: 'prep.' },
  { word: 'not', phonetic: '/nɒt/', translation: 'adv. 不；没有', pos: 'adv.' },
  { word: 'on', phonetic: '/ɒn/', translation: 'prep. 在…上 \n adv. 开着', pos: 'prep.' },
  { word: 'with', phonetic: '/wɪð/', translation: 'prep. 和；用；带有', pos: 'prep.' },
  { word: 'he', phonetic: '/hiː/', translation: 'pron. 他', pos: 'pron.' },
  { word: 'as', phonetic: '/æz; əz/', translation: 'adv. 同样地 \n conj. 当…时 \n prep. 作为', pos: 'adv.' },
  { word: 'you', phonetic: '/juː/', translation: 'pron. 你；你们', pos: 'pron.' },
  { word: 'do', phonetic: '/duː/', translation: 'v. 做；干', pos: 'v.' },
  { word: 'at', phonetic: '/æt; ət/', translation: 'prep. 在；于', pos: 'prep.' },
  { word: 'this', phonetic: '/ðɪs/', translation: 'pron. 这；这个 \n det. 这个', pos: 'pron.' },
  { word: 'but', phonetic: '/bʌt/', translation: 'conj. 但是 \n prep. 除了', pos: 'conj.' },
  { word: 'his', phonetic: '/hɪz/', translation: 'pron. 他的', pos: 'pron.' },
  { word: 'by', phonetic: '/baɪ/', translation: 'prep. 通过；被；在…旁', pos: 'prep.' },
  { word: 'from', phonetic: '/frɒm/', translation: 'prep. 从；来自', pos: 'prep.' },
  { word: 'they', phonetic: '/ðeɪ/', translation: 'pron. 他们；她们；它们', pos: 'pron.' },
  { word: 'we', phonetic: '/wiː/', translation: 'pron. 我们', pos: 'pron.' },
  { word: 'say', phonetic: '/seɪ/', translation: 'v. 说；讲', pos: 'v.' },
  { word: 'her', phonetic: '/hɜːr/', translation: 'pron. 她的；她', pos: 'pron.' },
  { word: 'she', phonetic: '/ʃiː/', translation: 'pron. 她', pos: 'pron.' },
  { word: 'or', phonetic: '/ɔːr/', translation: 'conj. 或者；否则', pos: 'conj.' },
  { word: 'an', phonetic: '/æn; ən/', translation: 'art. 一个', pos: 'art.' },
  { word: 'will', phonetic: '/wɪl/', translation: 'aux. 将；会 \n n. 意志', pos: 'aux.' },
  { word: 'my', phonetic: '/maɪ/', translation: 'pron. 我的', pos: 'pron.' },
  { word: 'one', phonetic: '/wʌn/', translation: 'num. 一 \n pron. 一个', pos: 'num.' },
  { word: 'all', phonetic: '/ɔːl/', translation: 'det. 所有的 \n pron. 全部', pos: 'det.' },
  { word: 'would', phonetic: '/wʊd/', translation: 'aux. 将会；愿意', pos: 'aux.' },
  { word: 'there', phonetic: '/ðeər/', translation: 'adv. 在那里 \n pron. 那里', pos: 'adv.' },
  { word: 'their', phonetic: '/ðeər/', translation: 'pron. 他们的', pos: 'pron.' },
  { word: 'what', phonetic: '/wʌt/', translation: 'pron. 什么', pos: 'pron.' },
  { word: 'so', phonetic: '/soʊ/', translation: 'adv. 如此；所以 \n conj. 因此', pos: 'adv.' },
  { word: 'up', phonetic: '/ʌp/', translation: 'adv. 向上 \n prep. 沿着…向上', pos: 'adv.' },
  { word: 'out', phonetic: '/aʊt/', translation: 'adv. 出去；在外', pos: 'adv.' },
  { word: 'if', phonetic: '/ɪf/', translation: 'conj. 如果；是否', pos: 'conj.' },
  { word: 'about', phonetic: '/əˈbaʊt/', translation: 'prep. 关于 \n adv. 大约', pos: 'prep.' },
  { word: 'who', phonetic: '/huː/', translation: 'pron. 谁', pos: 'pron.' },
  { word: 'get', phonetic: '/ɡet/', translation: 'v. 得到；变得', pos: 'v.' },
  { word: 'which', phonetic: '/wɪtʃ/', translation: 'pron. 哪一个', pos: 'pron.' },
  { word: 'go', phonetic: '/ɡoʊ/', translation: 'v. 去；走', pos: 'v.' },
  { word: 'me', phonetic: '/miː/', translation: 'pron. 我（宾格）', pos: 'pron.' },
  { word: 'when', phonetic: '/wen/', translation: 'adv. 什么时候 \n conj. 当…时', pos: 'adv.' },
  { word: 'make', phonetic: '/meɪk/', translation: 'v. 制作；使得', pos: 'v.' },
  { word: 'can', phonetic: '/kæn/', translation: 'aux. 能；可以', pos: 'aux.' },
  { word: 'like', phonetic: '/laɪk/', translation: 'v. 喜欢 \n prep. 像', pos: 'v.' },
  { word: 'time', phonetic: '/taɪm/', translation: 'n. 时间；次数', pos: 'n.' },
  { word: 'no', phonetic: '/noʊ/', translation: 'det. 没有 \n adv. 不', pos: 'det.' },
  { word: 'just', phonetic: '/dʒʌst/', translation: 'adv. 刚刚；仅仅 \n adj. 公正的', pos: 'adv.' },
  { word: 'him', phonetic: '/hɪm/', translation: 'pron. 他（宾格）', pos: 'pron.' },
  { word: 'know', phonetic: '/noʊ/', translation: 'v. 知道；认识', pos: 'v.' },
  { word: 'take', phonetic: '/teɪk/', translation: 'v. 拿；取；花费', pos: 'v.' },
  { word: 'people', phonetic: '/ˈpiːpl/', translation: 'n. 人们；民族', pos: 'n.' },
  { word: 'into', phonetic: '/ˈɪntuː/', translation: 'prep. 进入；到…里', pos: 'prep.' },
  { word: 'year', phonetic: '/jɪr/', translation: 'n. 年；岁', pos: 'n.' },
  { word: 'your', phonetic: '/jɔːr/', translation: 'pron. 你的；你们的', pos: 'pron.' },
  { word: 'good', phonetic: '/ɡʊd/', translation: 'adj. 好的 \n n. 好处', pos: 'adj.' },
  { word: 'some', phonetic: '/sʌm/', translation: 'det. 一些 \n pron. 一些', pos: 'det.' },
  { word: 'could', phonetic: '/kʊd/', translation: 'aux. 能够；可能', pos: 'aux.' },
  { word: 'them', phonetic: '/ðem/', translation: 'pron. 他们（宾格）', pos: 'pron.' },
  { word: 'see', phonetic: '/siː/', translation: 'v. 看见；明白', pos: 'v.' },
  { word: 'other', phonetic: '/ˈʌðər/', translation: 'adj. 其他的 \n pron. 另一个', pos: 'adj.' },
  { word: 'than', phonetic: '/ðæn/', translation: 'conj. 比 \n prep. 比', pos: 'conj.' },
  { word: 'then', phonetic: '/ðen/', translation: 'adv. 然后；那时', pos: 'adv.' },
  { word: 'now', phonetic: '/naʊ/', translation: 'adv. 现在', pos: 'adv.' },
  { word: 'look', phonetic: '/lʊk/', translation: 'v. 看；看起来', pos: 'v.' },
  { word: 'only', phonetic: '/ˈoʊnli/', translation: 'adv. 仅仅 \n adj. 唯一的', pos: 'adv.' },
  { word: 'come', phonetic: '/kʌm/', translation: 'v. 来；到达', pos: 'v.' },
  { word: 'its', phonetic: '/ɪts/', translation: 'pron. 它的', pos: 'pron.' },
  { word: 'over', phonetic: '/ˈoʊvər/', translation: 'prep. 在…上方 \n adv. 结束', pos: 'prep.' },
  { word: 'think', phonetic: '/θɪŋk/', translation: 'v. 想；认为', pos: 'v.' },
  { word: 'also', phonetic: '/ˈɔːlsoʊ/', translation: 'adv. 也；同样', pos: 'adv.' },
  { word: 'back', phonetic: '/bæk/', translation: 'n. 背部 \n adv. 回来', pos: 'n.' },
  { word: 'after', phonetic: '/ˈæftər/', translation: 'prep. 在…之后 \n adv. 以后', pos: 'prep.' },
  { word: 'use', phonetic: '/juːz/', translation: 'v. 使用 \n n. 用途', pos: 'v.' },
  { word: 'two', phonetic: '/tuː/', translation: 'num. 二', pos: 'num.' },
  { word: 'how', phonetic: '/haʊ/', translation: 'adv. 怎样；如何', pos: 'adv.' },
  { word: 'our', phonetic: '/aʊər/', translation: 'pron. 我们的', pos: 'pron.' },
  { word: 'work', phonetic: '/wɜːrk/', translation: 'n. 工作 \n v. 工作；运转', pos: 'n.' },
  { word: 'first', phonetic: '/fɜːrst/', translation: 'adj. 第一的 \n adv. 首先', pos: 'adj.' },
  { word: 'well', phonetic: '/wel/', translation: 'adv. 好地 \n adj. 健康的', pos: 'adv.' },
  { word: 'way', phonetic: '/weɪ/', translation: 'n. 方式；道路', pos: 'n.' },
  { word: 'even', phonetic: '/ˈiːvən/', translation: 'adv. 甚至 \n adj. 平坦的', pos: 'adv.' },
  { word: 'new', phonetic: '/njuː/', translation: 'adj. 新的', pos: 'adj.' },
  { word: 'want', phonetic: '/wɒnt/', translation: 'v. 想要；需要', pos: 'v.' },
  { word: 'because', phonetic: '/bɪˈkɒz/', translation: 'conj. 因为', pos: 'conj.' },
  { word: 'any', phonetic: '/ˈeni/', translation: 'det. 任何的 \n pron. 任何一个', pos: 'det.' },
  { word: 'give', phonetic: '/ɡɪv/', translation: 'v. 给；给予', pos: 'v.' },
  { word: 'day', phonetic: '/deɪ/', translation: 'n. 天；白天', pos: 'n.' },
  { word: 'most', phonetic: '/moʊst/', translation: 'det. 大多数的 \n adv. 最', pos: 'det.' },
];

// Keep exactly 50 entries for quick smoke testing.
const WORDS_TO_SEED = BASIC_WORDS.slice(0, 50);

async function main() {
  console.log(`Seeding ${WORDS_TO_SEED.length} basic dictionary entries...`);

  for (const entry of WORDS_TO_SEED) {
    await prisma.dictionary.upsert({
      where: { word: entry.word.toLowerCase() },
      update: {
        phonetic: entry.phonetic,
        translation: entry.translation,
        pos: entry.pos ?? null,
      },
      create: {
        word: entry.word.toLowerCase(),
        phonetic: entry.phonetic,
        translation: entry.translation,
        pos: entry.pos ?? null,
      },
    });
  }

  console.log(`Done. Upserted ${WORDS_TO_SEED.length} basic dictionary entries.`);
}

main()
  .catch((error) => {
    console.error('Basic dictionary seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
