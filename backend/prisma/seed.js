import { PrismaClient } from '@prisma/client';
import { curriculum } from '../../src/data/sentences.js';
import { scenarioCurriculums } from './scenarios_data.js';
import { scenarioCurriculumsV2 } from './scenarios_data_v2.js';
import { scenarioCurriculumsV3 } from './scenarios_data_v3.js';
import { extensions as ext1 } from './scenarios_data_ext_1.js';
import { extensions as ext2 } from './scenarios_data_ext_2.js';
import { extensions as ext3 } from './scenarios_data_ext_3.js';
import { extensions as ext4 } from './scenarios_data_ext_4.js';
import { extensions as ext5 } from './scenarios_data_ext_5.js';
import { extensions as ext6 } from './scenarios_data_ext_6.js';
import { extensions as extBasic } from './scenarios_data_ext_basic.js';
import { extensions as extTense } from './scenarios_data_ext_tense.js';
import { extensions as extRelative } from './scenarios_data_ext_relative.js';
import { extensions as extNoun } from './scenarios_data_ext_noun.js';
import { extensions as extAdverbial } from './scenarios_data_ext_adverbial.js';
import { extensions as extEnv20 } from './scenarios_data_ext_env_20.js';
import { extensions as extAirport20 } from './scenarios_data_ext_airport_20.js';
import { extensions as extHotel20 } from './scenarios_data_ext_hotel_20.js';
import { extensions as extHealthcare20 } from './scenarios_data_ext_healthcare_20.js';
import { extensions as extEdu20 } from './scenarios_data_ext_edu_20.js';
import { extensions as extDining20 } from './scenarios_data_ext_dining_20.js';
import { extensions as extShopping20 } from './scenarios_data_ext_shopping_20.js';
import { extensions as extSports20 } from './scenarios_data_ext_sports_20.js';
import { extensions as extTech20 } from './scenarios_data_ext_tech_20.js';
import { extensions as extFinance20 } from './scenarios_data_ext_finance_20.js';
import { extensions as extWork20 } from './scenarios_data_ext_work_20.js';
import { extensions as extArt20 } from './scenarios_data_ext_art_20.js';
import { extensions as extTravel20 } from './scenarios_data_ext_travel_20.js';
import { extensions as extDessert20 } from './scenarios_data_ext_dessert_20.js';
import { extensions as extBall20 } from './scenarios_data_ext_ball_20.js';
import { extensions as extArt10 } from './scenarios_data_ext_art_10.js';
import { extensions as extTravel10 } from './scenarios_data_ext_travel_10.js';
import { extensions as extDessert10 } from './scenarios_data_ext_dessert_10.js';
import { extensions as extBall10 } from './scenarios_data_ext_ball_10.js';
import { extensions as extGov40 } from './scenarios_data_ext_gov_40.js';
import { extensions as extShopping40 } from './scenarios_data_ext_shopping_40.js';
import { extensions as extShopping10 } from './scenarios_data_ext_shopping_10.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Clean up existing data
  await prisma.sentence.deleteMany();
  await prisma.curriculum.deleteMany();

  // Combine all data
  const allCurriculums = [...curriculum, ...scenarioCurriculums, ...scenarioCurriculumsV2, ...scenarioCurriculumsV3];
  
  // Apply extensions
  for (const module of allCurriculums) {
    if (ext1[module.id]) module.sentences.push(...ext1[module.id]);
    if (ext2[module.id]) module.sentences.push(...ext2[module.id]);
    if (ext3[module.id]) module.sentences.push(...ext3[module.id]);
    if (ext4[module.id]) module.sentences.push(...ext4[module.id]);
    if (ext5[module.id]) module.sentences.push(...ext5[module.id]);
    if (ext6[module.id]) module.sentences.push(...ext6[module.id]);
    if (extBasic[module.id]) module.sentences.push(...extBasic[module.id]);
    if (extTense[module.id]) module.sentences.push(...extTense[module.id]);
    if (extRelative[module.id]) module.sentences.push(...extRelative[module.id]);
    if (extNoun[module.id]) module.sentences.push(...extNoun[module.id]);
    if (extAdverbial[module.id]) module.sentences.push(...extAdverbial[module.id]);
    
    // Process new extensions
    if (extEnv20[module.id]) module.sentences.push(...extEnv20[module.id]);
    if (extAirport20[module.id]) module.sentences.push(...extAirport20[module.id]);
    if (extHotel20[module.id]) module.sentences.push(...extHotel20[module.id]);
    if (extHealthcare20[module.id]) module.sentences.push(...extHealthcare20[module.id]);
    if (extEdu20[module.id]) module.sentences.push(...extEdu20[module.id]);
    if (extDining20[module.id]) module.sentences.push(...extDining20[module.id]);
    if (extShopping20[module.id]) module.sentences.push(...extShopping20[module.id]);
    if (extSports20[module.id]) module.sentences.push(...extSports20[module.id]);
    if (extTech20[module.id]) module.sentences.push(...extTech20[module.id]);
    if (extFinance20[module.id]) module.sentences.push(...extFinance20[module.id]);
    if (extWork20[module.id]) module.sentences.push(...extWork20[module.id]);
    if (extArt20[module.id]) module.sentences.push(...extArt20[module.id]);
    if (extTravel20[module.id]) module.sentences.push(...extTravel20[module.id]);
    if (extDessert20[module.id]) module.sentences.push(...extDessert20[module.id]);
    if (extBall20[module.id]) module.sentences.push(...extBall20[module.id]);
    if (extArt10[module.id]) module.sentences.push(...extArt10[module.id]);
    if (extTravel10[module.id]) module.sentences.push(...extTravel10[module.id]);
    if (extDessert10[module.id]) module.sentences.push(...extDessert10[module.id]);
    if (extBall10[module.id]) module.sentences.push(...extBall10[module.id]);
    if (extGov40[module.id]) module.sentences.push(...extGov40[module.id]);
    if (extShopping40[module.id]) module.sentences.push(...extShopping40[module.id]);
    if (extShopping10[module.id]) module.sentences.push(...extShopping10[module.id]);
  }
  
  for (const module of allCurriculums) {
    const cur = await prisma.curriculum.create({
      data: {
        id: module.id,
        title: module.title,
        description: module.description,
      }
    });
    
    console.log(`Created curriculum: ${cur.title}`);
    
    for (const sent of module.sentences) {
      await prisma.sentence.create({
        data: {
          id: sent.id,
          curriculumId: cur.id,
          chinese: sent.chinese,
          english_full: sent.english_full,
          // Convert complex objects to JSON strings for SQLite storage
          words: JSON.stringify(sent.words),
          components: JSON.stringify(sent.components || []),
          analysis: JSON.stringify(sent.analysis || []),
        }
      });
      console.log(`  - Seeded sentence: ${sent.english_full}`);
    }
  }
  
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
