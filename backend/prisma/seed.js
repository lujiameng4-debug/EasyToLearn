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
import { extensions as extAirport70 } from './scenarios_data_ext_airport_70.js';
import { extensions as extAdverbial80 } from './scenarios_data_ext_adverbial_80.js';
import { extensions as extEdu75 } from './scenarios_data_ext_edu_75.js';
import { extensions as extHealthcare75 } from './scenarios_data_ext_healthcare_75.js';
import { extensions as extEnv70 } from './scenarios_data_ext_env_70.js';
import { extensions as extDining70 } from './scenarios_data_ext_dining_70.js';
import { extensions as extTech72 } from './scenarios_data_ext_tech_72.js';
import { extensions as extHotel70 } from './scenarios_data_ext_hotel_70.js';
import { extensions as extTravel60 } from './scenarios_data_ext_travel_60.js';
import { extensions as extArt50 } from './scenarios_data_ext_art_50.js';
import { extensions as extWork70 } from './scenarios_data_ext_work_70.js';
import { extensions as extFinance70 } from './scenarios_data_ext_finance_70.js';
import { extensions as extDessert70 } from './scenarios_data_ext_dessert_70.js';
import { extensions as extSports70 } from './scenarios_data_ext_sports_70.js';
import { extensions as extGov50 } from './scenarios_data_ext_gov_50.js';
import { extensions as extShopping72 } from './scenarios_data_ext_shopping_72.js';
import { extensions as extSports0270 } from './scenarios_data_ext_sports02_70.js';
import { extensions as extShopping0250 } from './scenarios_data_ext_shopping02_50.js';
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
import { extensions as extBasic30 } from './scenarios_data_ext_basic_30.js';
import { extensions as extTense30 } from './scenarios_data_ext_tense_30.js';
import { extensions as extRelative30 } from './scenarios_data_ext_relative_30.js';
import { extensions as extNoun30 } from './scenarios_data_ext_noun_30.js';
import { extensions as extBasic60 } from './scenarios_data_ext_basic_60.js';
import { extensions as extTense60 } from './scenarios_data_ext_tense_60.js';
import { extensions as extRelative60 } from './scenarios_data_ext_relative_60.js';
import { extensions as extNoun60 } from './scenarios_data_ext_noun_60.js';
import { extensions as extBasic15 } from './scenarios_data_ext_basic_15.js';
import { extensions as extTense18 } from './scenarios_data_ext_tense_18.js';
import { extensions as extRelative19 } from './scenarios_data_ext_relative_19.js';
import { extensions as extNoun20 } from './scenarios_data_ext_noun_20.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Destructive reset is opt-in so regular seed runs preserve learning progress.
  const resetRequested = process.argv.includes('--reset');
  if (resetRequested && process.env.NODE_ENV === 'production') {
    throw new Error('Refusing to reset seed data in production.');
  }

  if (resetRequested) {
    console.warn('Resetting curriculum data and associated learning progress...');
    await prisma.userProgress.deleteMany();
    await prisma.sentence.deleteMany();
    await prisma.curriculum.deleteMany();
  }

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
    if (extEdu75[module.id]) module.sentences.push(...extEdu75[module.id]);
    if (extHealthcare75[module.id]) module.sentences.push(...extHealthcare75[module.id]);
    if (extAirport70[module.id]) module.sentences.push(...extAirport70[module.id]);
    if (extAdverbial80[module.id]) module.sentences.push(...extAdverbial80[module.id]);
    if (extEnv70[module.id]) module.sentences.push(...extEnv70[module.id]);
    if (extDining70[module.id]) module.sentences.push(...extDining70[module.id]);
    if (extTech72[module.id]) module.sentences.push(...extTech72[module.id]);
    if (extHotel70[module.id]) module.sentences.push(...extHotel70[module.id]);
    if (extTravel60[module.id]) module.sentences.push(...extTravel60[module.id]);
    if (extArt50[module.id]) module.sentences.push(...extArt50[module.id]);
    if (extWork70[module.id]) module.sentences.push(...extWork70[module.id]);
    if (extFinance70[module.id]) module.sentences.push(...extFinance70[module.id]);
    if (extDessert70[module.id]) module.sentences.push(...extDessert70[module.id]);
    if (extSports70[module.id]) module.sentences.push(...extSports70[module.id]);
    if (extGov50[module.id]) module.sentences.push(...extGov50[module.id]);
    if (extShopping72[module.id]) module.sentences.push(...extShopping72[module.id]);
    if (extSports0270[module.id]) module.sentences.push(...extSports0270[module.id]);
    if (extShopping0250[module.id]) module.sentences.push(...extShopping0250[module.id]);
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
    if (extBasic30[module.id]) module.sentences.push(...extBasic30[module.id]);
    if (extTense30[module.id]) module.sentences.push(...extTense30[module.id]);
    if (extRelative30[module.id]) module.sentences.push(...extRelative30[module.id]);
    if (extNoun30[module.id]) module.sentences.push(...extNoun30[module.id]);
    if (extBasic60[module.id]) module.sentences.push(...extBasic60[module.id]);
    if (extTense60[module.id]) module.sentences.push(...extTense60[module.id]);
    if (extRelative60[module.id]) module.sentences.push(...extRelative60[module.id]);
    if (extNoun60[module.id]) module.sentences.push(...extNoun60[module.id]);
    if (extBasic15[module.id]) module.sentences.push(...extBasic15[module.id]);
    if (extTense18[module.id]) module.sentences.push(...extTense18[module.id]);
    if (extRelative19[module.id]) module.sentences.push(...extRelative19[module.id]);
    if (extNoun20[module.id]) module.sentences.push(...extNoun20[module.id]);
  }
  
  for (const module of allCurriculums) {
    const cur = await prisma.curriculum.upsert({
      where: { id: module.id },
      update: { title: module.title, description: module.description },
      data: {
        id: module.id,
        title: module.title,
        description: module.description,
      }
    });
    
    console.log(`Created curriculum: ${cur.title}`);
    
    for (const sent of module.sentences) {
      await prisma.sentence.upsert({
        where: { id: sent.id },
        update: {
          curriculumId: cur.id,
          chinese: sent.chinese,
          english_full: sent.english_full,
          words: JSON.stringify(sent.words),
          components: JSON.stringify(sent.components || []),
          analysis: JSON.stringify(sent.analysis || []),
        },
        data: {
          id: sent.id,
          curriculumId: cur.id,
          chinese: sent.chinese,
          english_full: sent.english_full,
          // Store the structured sentence data as JSON text in either database.
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
