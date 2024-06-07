import { 
  team1,
  team2,
  team3,
  team4,  
  acne,
  acne1,
  chroniclegulcers,
  chroniclegulcers1,
  pcos,
  pcos1,
  pigmentation,
  pigmentation1,
  psoriasis,
  psoriasis1,
  skingrowth,
  skingrowth1,
  skininfections,
  skininfections1,
  urticaria,
  urticaria1,
  vitiligo,
  vitiligo1,
  unevenskintone,
  unevenskintone1,
  openpores,
  openpores1,
  skintag,
  skintag1,
  damagedhair,
  damagedhair1,
  dandruff,
  dandruff1,
  hairloss,
  hairloss1,
  prematuregreying,
  prematuregreying1,
  dystrophy,
  dystrophy1,
  ingrowingToeNail,
  ingrowingToeNail1,
  nailinfection,
  nailinfection1,
  excessivebodyhair,
  excessivebodyhair1,
  excessivesweating,
  excessivesweating1,
  chemicalPeeling1,
  chemicalPeeling,
  hairRemovalWithLaser,
  hairRemovalWithLaser1,
  laserSkinToningAnd,
  laserSkinToningAnd1,
  microdermabrasion,
  microdermabrasion1,
  microneedling,
  microneedling1,
  prp,
  prp1,
  hydrafacial,
  hydrafacial1,
  medifacial,
  medifacial1,
  Acnescarandporetreatments,
  Acnescarandporetreatments1,
  Tattooremoval,
  Tattooremoval1,
  Miliaandskintagremoval,
  Miliaandskintagremoval1,
  Molesandfreckles,
  Molesandfreckles1,
  wartTreatment,
  wartTreatment1,
  biopsies,
  biopsies1,
  comedoneExtraction,
  comedoneExtraction1,
  keloids,
  keloids1,
  scarTreatment,
  scarTreatment1,
  Cornwarttreatment,
  Cornwarttreatment1,
  Lipomaremoval,
  Lipomaremoval1,
  Vitiligosurgeries,
  Vitiligosurgeries1,
  Earloberepair,
  Earloberepair1,
} from "./images";

import bbanc from "../assets/images/banner/blogin.png";
import div from "../assets/images/team/div.webp"
import mer from "../assets/images/team/mer.webp";
import pe from "../assets/images/banner/pe.png"
import pl from "../assets/images/banner/pl.png"
import mf from "../assets/images/banner/mf.png"
import hf from "../assets/images/banner/hf.png"
import ee from "../assets/images/banner/ee.png"
import gy from "../assets/images/banner/gy.png"
import ex from "../assets/images/logo/ex.png";
import botox from "../assets/images/banner/botox.png"
import co2 from "../assets/images/banner/co2.png"
import fbp from "../assets/images/banner/fbp.webp";
import peel from "../assets/images/banner/peel.webp";


export const topicsData = [
  { logo: ex, title: "Cryotherapy", quantity: "Precise treatment for warths and skin growth" },
  { logo: gy, title: "Excimer lamp", quantity: "Target photo therapy for vitiligo and psoriasis " },
  { logo: pl, title: "Gentle yag pro", quantity: "US-FDA approved technology for laser hair reduction" },
  { logo: ee, title: "Pigment laser", quantity: "TRI-Beam for pigment and tattoo removal" },
  { logo: pe, title: "Ellman electrocautery", quantity: "Precise surgical / laser excision warths and skin tags" },
  { logo: peel, title: "Peels", quantity: "For treatment and rejuvenate and wrinkle treatment" },
  { logo: hf, title: "Hydrafacials", quantity: "Deep cleansing and skin rejuvenation" },
  { logo: mf, title: "Medi Facials", quantity: "Tailored skincare for your unique needs" },
  { logo: botox, title: "Botox", quantity: "Precision technology rejuvenating skin, reducing wrinkles" },
  { logo: co2, title: "Co2 Laser", quantity: "For skin resurfacial and scare treatment" },
  { logo: fbp, title: "Full Body Phototherapy", quantity: "Safe treatment option for vitiligo and psoriasis" },
];

export const teamData = [
  { img: team1, name: "Erics Widget", title: "UI/UX Designer" },
  { img: team2, name: "Daniel Steven", title: "Developer" },
  { img: team3, name: "Nelson Decosta", title: "Digital Marketer" },
  { img: team4, name: "Selina Gomez", title: "UI/UX Designer" },
];
export const instructorData = [
  { img: mer, name: "Dr. M.S KRISHNA MEERA", title: "Dermatologist ", link: "/krishnameera" },
  { img: div, name: "Dr. Divya", title: "Dermatologist", link: "/divya" },
];

export const blogsData = [
  {
    img: bbanc,
    type: "Skin Care",
    position: "Reflect Skin",
    date: "oct 21, 2023",
    title: "Revitalize Your Skin: Dermatology-Based Solutions for a Radiant Complexion",
  },
  
];

export const courseData = [
  {
    id: [0, "skin"],
    post: "Acne",
    link: '/acne',
    title: "Acne mainly the one occurring in the early years of life has large hormonal and genetic influence. And it may take quite a few years to resolve on its own. For some it tends to extend till their",
    img: acne1,
  },
  {
    id: [0, "skin"],
    link: '/skininfection',
    post: "Skin Infection",
    title: "Infection of skin can commonly be bacterial and fungal. Sometimes can also be caused by viruses . It may look like a red pimple or filled with pus ( with or without pain). Fungal infections can ",
    img: skininfections1,
  },
  {
    id: [0, "skin"],
    link: '/skinallergiesandurticaria',
    post: "Skin Allergies and Urticaria",
    title: "An individual can be allergic to a variety of things.Certain individuals have innate tendency to be allergic to many substances called Atopy. Allergen can be ",
    img: urticaria1,
  },
  {
    id: [0, "skin"],
    link: '/skingrowths',
    post: "Skin Growths",
    title: "Growths in skin occur due to plenty of reasons. Most are simple growths due to the process of aging , sun damage, weight gain etc - like skin tags and seborrheic keratosis. Some can ",
    img: skingrowth1,
  },
  {
    id: [0, "skin"],
    link: '/pigmentation',
    post: "Pigmentation",
    title: "Pigmentation  that is most common and worrisome is the black or dark colour of the skin. (We are not talking about dark complexions of skin). It can be patchy or present over a large ",
    img: pigmentation1,
  },
  {
    id: [0, "skin"],
    link: '/vitiligo',
    post: "Vitiligo",
    title: "Vitiligo is a condition characterised by patches of skin without pigment or colour as the pigment making cells are destroyed. It starts as a small patch and spreads slowly. It can start",
    img: vitiligo1,
  },
  {
    id: [0, "skin"],
    link: '/psoriasis',
    post: "Psoriasis",
    title: "Red Patches with scales are characteristic lesions of psoriasis. It can be distributed only on the scalp, or soles and palms or the extensors. In Generalised type new lesions occur as ",
    img: psoriasis1,
  },
  {
    id: [0, "skin"],
    link: '/chroniculcers',
    post: "Chronic Ulcers",
    title: "Chronic nonhealing ulcers can be caused due to various factors recurrent trauma that impedes healing such as a sharp tooth or ulcer on the sole of foot Inadequate  blood supply due to ",
    img: chroniclegulcers1,
  },
  {
    id: [0, "skin"],
    link: '/pcosandskin',
    post: "PCOS and skin",
    title: "Polycystic ovarian disease or syndrome is a systemic problem with insulin resistance, increase in androgen levels (male hormone), multiple ovarian cysts found on abdominal ",
    img: pcos1,
  },
  {
    id: [0, "skin"],
    link: '/unevenskintone',
    post: "Uneven Skin Tone",
    title: "Uneven Skin Tone",
    img: unevenskintone1,
  },
  {
    id: [0, "skin"],
    link: '/openpores',
    post: "Open Pores",
    title: "open pores",
    img: openpores1,
  },
  {
    id: [0, "skin"],
    link: '/skintags',
    post: "Skin Tags",
    title: "Skin Tags",
    img: skintag1,
  },
  {
    id: [0, "hair"],
    link: '/dandruff',
    post: "Dandruff",
    title: "It can affect people from infants to  old  age. In most it presents with asymptomatic scales and in others there can be associated  itching and redness. In addition to scalp, ears, sideburns, beard region and even chest can be involved . In extensive cases the intertriginous regions (skin folds )can also get involved and the diagnosis in such cases can",
    img: dandruff1,
  },
  {
    id: [0, "hair"],
    link: '/hairloss',
    post: "Hair Loss",
    title: "Hair loss and thinning occurs differently in males and females. And the reasons for hair loss is beyond scope of discussion here. There are both modifiable and nonmodifiable factors causing hair loss",
    img: hairloss1,
  },
  {
    id: [0, "hair"],
    link: '/damagedhair',
    post: "Damaged Hair",
    title: "Damaged hair can commonly  result from sun damage and pollution,  - the reason why the hair on the surface feels more rough and split. It can also result from use of harsh products unsuitable for the nature of your hair and hair treatments done on the salons like straightening, smoothening, frizz control etc. Rarely certain systemic problems can cause",
    img: damagedhair1,
  },
  {
    id: [0, "hair"],
    link: '/prematuregreyingofhair',
    post: "Premature Greying of Hair",
    title: "Premature graying or canities may reflect a genetically regulated early exhaustion of the melanin transfer potential  or some defect in cell activation/migration (simply put it can run in families). This genetic tendency can be compounded by environmental factors, inflammation, or psychological stress. Nutritional deficiencies like chronic protein loss",
    img: prematuregreying1,
  },
  {
    id: [0, "nail"],
    link: '/nailinfection',
    post: "Nail Infection",
    title: "Nail infections can be of sudden onset (acute) or develop over a  period of time (chronic) .They mostly start in the nail folds either at the base (proximal) or the sides (lateral folds). In acute scenarios it is often due to local injuries or following nail biting, causing pain, swelling and pus collection.It would also primarily be due to infections such as Herpes",
    img: nailinfection1,
  },
  {
    id: [0, "nail"],
    link: '/dystrophy',
    post: "Dystrophy",
    title: "Dystrophy is the nail getting deformed, distorted  or detached from the bed. The problem is with the formation of the nail plate from the base of the nail. The problem can arise from internal or external factors. Injury that is repetitive (eg- Nail biting ), Infection- commonly fungal termed Onychomycosis, Psoriasis, Lichen planus, Eczema around the nails",
    img: dystrophy1,
  },
  {
    id: [0, "nail"],
    link: '/ingrowingtoenail',
    post: "Ingrown Toe Nail",
    title: "Ingrowing usually affects young adults with congenital malalignment of the great toenails. Precipitating factors include improper or aggressive nail cutting and trauma. In addition,excessive sweating contributes to fragmentation of the nail  edge.Penetration of nail plate into  the neighbouring skin nearby causes  painful inflammation. It can become",
    img: ingrowingToeNail1,
  },
  {
    id: [0, "body"],
    link: '/excessivesweating',
    post: "Excessive Sweating",
    title: "Sweating is a physiological response to physical exertion, when in a hot environment, or emotionally induced as in anxiety or stress. It is a mechanism developed to regulate body temperature. Hyperhidrosis  is abnormally excessive sweating that's not necessarily related to heat or exercise. It can cause a great deal of discomfort. It usually affects the hands",
    img: excessivesweating1,
  },
  {
    id: [0, "body"],
    link: '/excessivebodyhair',
    post: "Excessive Body Hair",
    title: "Hair growth in the body of humans can show different patterns. Hypertrichosis- the word hyper- ’increase’ and tricho meaning ‘hair’  is defined as increase in body hair beyond the normal variation for a patient’s reference group. Most often it runs in the family and is just a cosmetic problem. The body hair becomes a problem when the thin vellus hair is replaced",
    img: excessivebodyhair1,
  },
];

export const categoryDataHair = {
  dandruff: {
    thumb: dandruff1,
    image: dandruff,
    title: "Dandruff",
    desPreview: "It can affect people from infants to  old  age. In most it presents with asymptomatic scales and in others there can be associated  itching and redness. In addition to scalp, ears, sideburns, beard region and even chest can be involved . In extensive cases the intertriginous regions (skin folds )can also get",
    qanda: [
      {
        quest: "Dandruff / seborrheic dermatitis -what is it & why does it occur?",
        ans: "	Skin all over the body gets renewed and the old cells of the skin get shed away. This happens everyday unnoticed by us. The skin on our scalp is different in many ways"
      },
      {
        quest: "Its thicker than other areas, has lots of oil secreting glands (sebaceous glands )and is covered with long thick terminal hair.",
        ans: "Its thicker than other areas, has lots of oil secreting glands (sebaceous glands) and is covered with long thick terminal hair. And when the skin is shed along with sebum  it is noticed as scales or dandruff. It can be mild in many and in others it can be severe and worrisome. It also has a fungal etiology and treatments are aimed at antifungal and antiinflammatory action. The scaling often is concurrent with an oily complexion. But not all with dandruff have increased sebum secretion. Rather there is a difference in the composition of the sebum in people with Dandruff. "
      },
      {
        quest: "Whom does it affect?",
        ans: "It can affect people from infants to  old  age. In most it presents with asymptomatic scales and in others there can be associated  itching and redness. In addition to scalp, ears, sideburns, beard region and even chest can be involved . In extensive cases the intertriginous regions (skin folds )can also get involved and the diagnosis in such cases can be difficult. It can be easily mistook for psoriasis, atopic dermatitis or a fungal infection."
      },
      {
        quest: "What are the aggravating factors ",
        ans: "Epidermal barrier integrity, host immune response, neurogenic factors and emotional stress, nutritional factors , Hormonal factors, presence and abundance of Malassezia yeast, have all been shown to play a role in individual susceptibility."
      },
      {
        quest: "Does dandruff cause hair loss?",
        ans: "No. It doesn't. "
      },
      {
        quest: "Treatment",
        ans: "	Treatment involves treating the fungal etiology and underlying inflammation. Creams, lotions and shampoos containing antifungals Salicylic acid and steroids - in those with severe scaling or redness. "
      }
    ]
  },
  hairloss: {
    thumb: hairloss1,
    image: hairloss,
    title: "Hair Loss",
    desPreview: "Hair loss and thinning occurs differently in males and females. And the reasons for hair loss is beyond scope of discussion here. There are both modifiable and nonmodifiable factors causing hair loss. ",
    qanda: [
      {
        quest: "Hair thinning and loss",
        ans: "	Hair loss and thinning occurs differently in males and females. And the reasons for hair loss is beyond scope of discussion here. There are both modifiable and nonmodifiable factors causing hair loss. "
      },
      {
        quest: "The modifiable risk factors ",
        ans: "The modifiable risk factors are  degree of exposure to pollution and usage of chemicals , personal hygiene, sleep routine, stress (both physical and mental), less antioxidant rich food intake etc. The norm is do no harm if not good.  "
      },
      {
        quest: "The non-modifiable factors",
        ans: "The non-modifiable factors are the genetic factors, aging ,hormonal, pregnancy (in some.In many there is increased hair growth), lactation, physical illness or other disorders such as thyroid abnormalities, PCOS etc.."
      },
      {
        quest: "Can it be treated ?",
        ans: "If we can put a finger on a cause -  it can be addressed. Often the cause is multifactorial. Regular hair care routine has to be setup. Hair growth vitamins, serums, shampoos, PRP treatment all come under the treatment spectrum. Considering the complicated growth cycle of hair, a long term committed treatment plan is an essential requirement that has to be borne in mind."
      }
    ]
  },
  damagedhair: {
    thumb: damagedhair1,
    image: damagedhair,
    title: "Damaged Hair",
    desPreview: "	Damaged hair can commonly  result from sun damage and pollution,  - the reason why the hair on the surface feels more rough and split. It can also result from use of harsh products unsuitable for the nature of your hair and hair treatments done on the salons like straightening, smoothening, frizz control etc. Rarely ",
    qanda: [
      {
        quest: "",
        ans: "	Damaged hair can commonly  result from sun damage and pollution,  - the reason why the hair on the surface feels more rough and split. It can also result from use of harsh products unsuitable for the nature of your hair and hair treatments done on the salons like straightening, smoothening, frizz control etc. Rarely certain systemic problems can cause decrease in the hair strength and result in easy breaking of the hair. We can reverse these changes to quite an extent but the good news is the new hair that grows again retains its original nature and our primary concern is not to do the harm again. And so find out what is the best long term care that will give you healthy hair."
      },
    ]
  },
  prematuregreyingofhair: {
    thumb: prematuregreying1,
    image: prematuregreying,
    title: "Premature Greying of Hair",
    desPreview: "Premature graying or canities may reflect a genetically regulated early exhaustion of the melanin transfer potential  or some defect in cell activation/migration (simply put it can run in families). This genetic tendency can be compounded by environmental factors, inflammation, or psychological stress. Nutritional deficiencies like",
    qanda: [
      {
        quest: "Premature greying of hair",
        ans: "The colour of the hair is produced by the pigment called melanin, just as the skin. The diminishing of this pigment in hair produces a range of colors from normal to white that is perceived as gray."
      },
      {
        quest: "Is my gerying premature ?",
        ans: "Premature is when it occurs within 25 years of age. (in Asians)",
      },
      {
        quest: "Why does it occur?",
        ans: "Premature graying or canities may reflect a genetically regulated early exhaustion of the melanin transfer potential  or some defect in cell activation/migration (simply put it can run in families). This genetic tendency can be compounded by environmental factors, inflammation, or psychological stress. Nutritional deficiencies like chronic protein loss (due to food intake with poor micronutrients,  kwashiorkor, nephrosis, celiac disease, and other causes of malabsorption), severe iron, vit B12 deficiency and copper deficiency. Stress certain drugs Smoking"
      },
      {
        quest: "Can it be treated?",
        ans: "Identifying  & stopping the trigger. Adding the right nutritional supplements. Hair tonics that can control and  reverse greying to some extent. Camouflage techniques as the last resort - Using chemical free, PPD free hair colours that are safe for all age groups."
      }
    ]
  }
}

export const categoryData = {
  acne: {
    thumb: acne1,
    image: acne,
    title: "Acne",
    desPreview: "You may have noticed tiny bumps on the skin of face, chest and back, some may be painful, others painless, in lots of colours ranging from white , skin coloured to red or even black . Some  may or may not  respond to native / home remedies and others get worsened by it. It is distributed commonly over the cheeks , in the ‘t’ area of the face and for others mainly along the jawline or the entire face",
    qanda: [
      {
        quest: "Do  I have acne ? or How severe is my acne ?",
        ans: "You may have noticed tiny bumps on the skin of face, chest and back, some may be painful, others painless, in lots of colours ranging from white , skin coloured to red or even black . Some  may or may not  respond to native / home remedies and others get worsened by it. It is distributed commonly over the cheeks , in the ‘t’ area of the face and for others mainly along the jawline or the entire face. There are various grades of acne classified based on how they look, depth of the acne and the body areas present."
      },
      {
        quest: "Should I consider treating it and why?",
        ans: "It's mainly a cosmetic concern. In very mild cases we can choose not to undergo treatment.  In other cases yes, to prevent long term pigmentary changes and scarring. Many times, acne can be a manifestation of an underlying hormonal imbalance (eg -PCOS) in which case the direction of  treatment completely changes.  It would always be better to find out."
      },
      {
        quest: "When will my acne stop? And  how long should I undergo treatment ?",
        ans: "Acne mainly the one occurring in the early years of life has large hormonal and genetic influence. And it may take quite a few years to resolve on its own. For some it tends to extend till their 30’s. And the treatment varies accordingly. Acne can also be  triggered or aggravated by acute stress, hormonal imbalance and  irritants which may have a different course of time. "
      },
      {
        quest: "Will the cost of treatment be expensive?",
        ans: "The treatment of acne ranges from topical creams, facewash, sunscreens, oral tablets to chemical peeling, comedone extraction and lasers. The cost can be tailored to the individual's need and feasibility of the treatment plan."
      },
      {
        quest: "Can my acne scars be treated ? What about the red and black pigmentation left behind?",
        ans: "	Both the scars and pigmentation can be treated considerably with equal dedication from the patient side . A stepwise approach and patience can go a long way  in the eventual result. The treatment options for pigmentation include depigmenting creams, chemical peeling and lasers. The treatment of acne scars depends upon the nature of the scar. The scars can be pitted dot like scars or broader in nature (which can be superficial or deep). The very superficial scars respond to medium depth chemical peeling. Most other scars need intervention such as microneedling or resurfacing lasers."
      }
      
    ]
  },
  skininfection: {
    thumb: skininfections1,
    image: skininfections,
    title: "Skin Infection",
    desPreview: "Infection of skin can commonly be bacterial and fungal. Sometimes can also be caused by viruses. It may look like a red pimple or filled with pus (with or without pain). Fungal infections can present as rashes. Self treating or buying medicines from a pharmacy may not help or even make the",
    qanda: [
      {
        quest: "",
        ans: "	Infection of skin can commonly be bacterial and fungal. Sometimes can also be caused by viruses . It may look like a red pimple or filled with pus ( with or without pain). Fungal infections can present as rashes. Self treating or buying medicines from a pharmacy may not help or even make the condition worse.This poses a common problem both to the patient and the treating physician. Skin rashes are the external manifestation of a spectrum of diseases such as infection, allergy or systemic diseases and should ideally be diagnosed and treated by a dermatologist. "
      },
      {
        quest: "Fungal infections and spread",
        ans: "	Tinea infection also called ringworm infection is caused by a variety of fungus that grows on the skin. It spreads from one person to another through direct contact,  contact with infected materials like towels, combs, dresses etc. "
      },
      {
        quest: "Symptoms",
        ans: "The infection spreads in a ring like fashion, With redness in the periphery. There is  commonly an intense itching associated with it.  "
      },
      {
        quest: "What To Do",
        ans: " hygienic practises including bathing twice a day, dry clothes in sunlight inside out especially underwears.use loose cotton dresses. "
      },
      {
        quest: "what Not to do",
        ans: " sharing clothes, soaps ,  damp towels, using common/public toilets, tight clothing  - jeans, leggings and tying around the waist. Avoid self medication. Avoid steroid usage. Avoid washing clothes and the affected  area with disinfectants like dettol/ savlon etc. Avoid washing the area with very hot water to get momentary relief Avoid applying home remedies like turmeric/ neem leaves. If you are resorting to other forms of medicines like ayurveda or siddha, see to it they don't have steroids in them. But fungal infections seldom respond to such treatments. The lifestyle modifications are as important as the medication itself."
      },
      {
        quest: "Risk factors",
        ans: "Obesity, Increased tendency to sweat, Diabetes, Family member with the infection, Very importantly self medicating with over the counter products . They give immediate relief on application but cause tremendous flare ups once discontinued.so you tend to apply them again and again to get relief and make the infection worse. The creams and ointments given by the pharmacies have steroids which do immense damage to skin decreasing the local immunity , aggravating the infection, changing the morphology of the rash and causing adverse side effects like causing stretch marks and discolouration. The dermatologists find it a very frustrating problem to treat a patient who had used steroids for a fungal infection."
      },
      {
        quest: "Treatment",
        ans: "Treatment of fungal infection will include topical medicines like creams, lotions and ointments, itching medications and oral antifungal. The very crucial part of  treatment is to continue it until a complete mycological cure is achieved (that is till no fungus in skin). This is identified and decided by the dermatologist . Any inadequate treatment will result in recurrence of the condition . "
      }
    ]
  },
  skinallergiesandurticaria: {
    thumb: urticaria1,
    image: urticaria,
    title: "Skin Allergies and Urticaria",
    desPreview: "	An individual can be allergic to a variety of things. Certain individuals have innate tendency to be allergic to many substances called Atopy. Allergen can be something in the air , the food we eat, something from our work place (occupational), personal care products, plants we grow, our",
    qanda: [
      {
        quest: "Skin allergies - urticaria and eczema",
        ans: "An individual can be allergic to a variety of things.Certain individuals have innate tendency to be allergic to many substances called Atopy. Allergen can be something in the air , the food we eat, something from our work place (occupational), personal care products, plants we grow, our pets, mosquitoes, medicines and so on, beyond that can be listed here. The presentation of allergy can be tiny bumps, shaped like a coin which disappear after a while , or rashes at a specific site or the entire body with or without itching. Some resolve once the allergen is avoided. Some persist. "
      },
      {
        quest: "Can it be prevented?",
        ans: "Many times the allergen is very difficult to identify. Few are allergic to one allergen and others are allergic to more than just one. The allergen can be identified in some with the help of tests like blood investigations, skin patch tests or prick tests. Once identified there is a chance of staying away from the allergen if it's feasible. It is best to acquire a thorough knowledge of what the condition is and what needs to be done."
      },
      {
        quest: "Urticaria",
        ans: "Urticaria is a skin condition which causes transient skin swellings that last for a few hours with severe itching .The swellings called weals then disappear with or without medications in a few hours. The condition though trivial is very distressing to experience. The condition occurs all of a sudden and  lasts for a few days or weeks  to even months in others called  Acute and chronic urticaria respectively. It may or may not be associated with other allergic tendencies like asthma, wheezing, eczema, sinusitis etc.. The itching in some can be associated with breathing difficulty , swelling of lips in which case it becomes an emergency."
      },
      {
        quest: "What causes it ?",
        ans: "The identification of causative agents is a very laborious task and many times unfruitful. It can range from dust mites, pollution, certain chemicals , food we eat , products we use, drugs we consume , alcohol, severe exertion (physical urticaria)  , exposure to cold temperatures(thermal urticaria), infections , stress, water contact (aquagenic urticaria ) and the list is endless. On many occasions a person  is allergic to more than one agent and avoiding  it may not be practical. Identification of the allergen can be done by patch testing  for a few patients and can be of immense help in the treatment process."
      },
      {
        quest: "Treatment",
        ans: "Trying to find the trigger by patch testing and avoiding it. Staying away from common known triggers such as dairy products,  packed/canned foods, foods with preservatives and additives, coloured foods, chocolates, alcohol, known allergic foods, certain nuts and potatoes. Anti allergic drugs are the mainstay of treatment. This class of drugs come with the advantage of having least adverse effects even on long-term consumption. Other advanced immunomodulatory drugs are also available for resistant cases of urticaria which offer long term remission."
      }
    ]
  },
  skingrowths: {
    thumb: skingrowth1,
    image: skingrowth,
    title: "Skin Growths",
    desPreview: "	Growths in skin occur due to plenty of reasons. Most are simple growths due to the process of aging , sun damage, weight gain etc - like skin tags and seborrheic keratosis. Some can be infectious such as wart that can spread to become many ",
    qanda: [
      {
        quest: "Skin growths -  skin tags , warts, cysts, black dots or growths on face (seborrheic keratosis)",
        ans: "	Growths in skin occur due to plenty of reasons. Most are simple growths due to the process of aging , sun damage, weight gain etc - like skin tags and seborrheic keratosis. Some can be infectious such as wart that can spread to become many when meddled with and also from one person to another. Find out whether it is of any concern and decide to treat it or not. "
      }
    ]
  },
  pigmentation: {
    thumb: pigmentation1,
    image: pigmentation,
    title: "Pigmentation",
    desPreview: "Pigmentation that is most common and worrisome is the black or dark colour of the skin. (We are not talking about dark complexions of skin). It can be patchy or present over a large area. It can be caused by acne , after an injury or scratch, following healing of a rash or ",
    qanda: [
      {
        quest: "",
        ans: "Pigmentation  that is most common and worrisome is the black or dark colour of the skin. (We are not talking about dark complexions of skin). It can be patchy or present over a large area. It can be caused by acne , after an injury or scratch, following healing of a rash or even due to harmful fairness products purchased over the counter. It can resolve over time and sometimes disappear incompletely and require treatment. "
      },
      {
        quest: "Treatment options",
        ans: "Topical medications like depigmenting creams, serums, Chemical peeling and Q switched lasers and Nd Yag lasers"
      }
    ]
  },
  vitiligo:{
    thumb: vitiligo1,
    image: vitiligo,
    title: "Vitiligo",
    desPreview: "	Vitiligo is a condition characterised by patches of skin without pigment or colour as the pigment making cells are destroyed. It starts as a small patch and spreads slowly. It can start at any age and can be alarming to the patient. It can involve a small area or tend to spread to larger areas of the body. ",
    qanda: [
      {
        quest: "Vitiligo, What is it ?",
        ans: "Vitiligo is a condition characterised by patches of skin without pigment or colour as the pigment making cells are destroyed. It starts as a small patch and spreads slowly. It can start at any age and can be alarming to the patient. It can involve a small area or tend to spread to larger areas of the body. The diagnosis of vitiligo needs to be reliably made .Not all absence of pigmentation are vitiligo. There are different types of vitiligo depending upon the distribution of skin lesions and nature of spread, Acral - involving the fingers tip, lips and genitalia,	Segmental -involving only one body segment,	Random Patchy involvement, Generalised - Rapidly spreading to involve large areas of the body and few others types. The progression of the condition varies with each individual and is difficult to assess at the onset. "
      },
      {
        quest: "My family member has it ,will it get it ? I have it ,will my child get it?",
        ans: "Vitiligo - Of the general population 1 in every 100 people (1%) can be affected. If a parent or a first degree relative is affected, then the chances are slightly increased by 5 in 100. (5%). That seems like a big increase, but even so, that means only about 1 in 20 first-degree relatives of vitiligo patients get affected. "
      },
      {
        quest: "Is there a cure?",
        ans: "The response to therapy depends on the type of vitiligo and the duration of illness. Fewer and smaller patches that have been present for a shorter duration show good response. Certain types such the acral type (affecting the tips of fingers and toes) and the segmental type are quite resistant to therapy. "
      },
      {
        quest: "What are the treatment options ?",
        ans: "Varies modalities of treatments are available. Topical medications such as ointments, lotions and creams, phototherapy , excimer lamp treatment are available. Better results are seen when therapy is started early in the course of the condition. A combination of therapies is usually more effective than a single treatment. Sun protection of the affected skin is an important general measure that has to be carried out by the person. Camouflage methods such as cover creams or concealing foundations, self- tanning products and tattooing(lasting for 6 months to 1 year requiring maintenance sessions) are great temporary measures boosting the confidence of the individual. It doesn't spread from one person to another (not a contagious disease) and does not affect general physical health. The stigma associated with it needs to be eliminated as it has a great psychosocial effect on the person especially in a child. "
      }
    ]
  },
  psoriasis: {
    thumb: psoriasis1,
    image: psoriasis,
    title: "Psoriasis",
    desPreview: "Red Patches with scales are characteristic lesions of psoriasis. It can be distributed only on the scalp, or soles and palms or the extensors. In Generalised type new lesions occur as showers of smaller patches all over the body which can be itchy and cause burning sensation. As mentioned above, infections, stress and ",
    qanda: [
      {
        quest: "What causes this condition ",
        ans: "The cause can be genetic or sporadic (non genetic) occurring out of the blue. The prevalence of the condition varies in different populations and ranges from 0.44 to 2.8% in India."
      },
      {
        quest: "How serious is the disease?",
        ans: "The severity of the disease varies from one person to another. It depends upon the type of psoriasis. It can be, Palmoplantar - limited to palms and soles, Extensors - knees and elbows, Scalp psoriasis - flaking of scalp and inside the ears or, Generalised - in others it can be present as patches spread throughout the body. The severity again depends on the genetic and environmental factors. Psoriasis is a systemic inflammatory disease and in patients with severe disease, there can be a certain amount of organ involvement."
      },
      {
        quest: "What are the triggers of the disease?",
        ans: "	Stress and disturbance in sleep pattern, sunlight exposure (helpful in many, can aggravate in others ), smoking ,alcohol use, infections especially soreness of throat, unsupervised steroid usage (both topical and systemic ), polypharmacy and physical trauma - so scratching the patches and trying to peel off the scales can worsen it, are all aggravating factors."
      },
      {
        quest: "What symptoms?",
        ans: "Red Patches with scales are characteristic lesions of psoriasis. It can be distributed only on the scalp, or soles and palms or the extensors. In Generalised type new lesions occur as showers of smaller patches all over the body which can be itchy and cause burning sensation. As mentioned above, infections, stress and other triggers can cause the aggravation. This has to be addressed immediately. Symptoms other than patches are pain in the joints- both large joints like knee joints and smaller joints like finger joints. Nail involvement, pustular skin lesions can also occur."
      },
      {
        quest: "What are alterations in the food intake to be adhered to?",
        ans: "The importance of  maintaining BMI within normal range cannot be emphasised. Overweight increases the severity of the disease  and the dosage of medications required and therefore the side effects of it. Vit D and omega 3 fatty acid rich foods, Carrots, tomatoes, fresh fruits, fish oils, low energy diets and adequate water intake (3-4 liters per day ) all have an anti-inflammatory role in the body and help bring down the severity of the disease. No studies emphasise on strict or specific dietary restrictions when it comes to psoriasis."
      },
      {
        quest: "Is there a cure?",
        ans: "Psoriasis is a chronic inflammatory disease with problems in the genetic makeup combined with environmental triggers. Childhood psoriasis can  show remission in many cases. In many others there is a resolving and recurring pattern. There are many promising treatment options ranging form the time tested methotrexate  to the latest biologicals. The newer modalities of treatment  can give long term disease free intervals."
      }
    ]
  },
  chroniculcers: {
    thumb: chroniclegulcers1,
    image: chroniclegulcers,
    title: "Chronic Ulcers",
    desPreview: "Chronic nonhealing ulcers can be caused due to various factors recurrent trauma that impedes healing such as a sharp tooth or ulcer on the sole of foot Inadequate  blood supply due to arterial or venous causes (varicose veins) Nutritional deficiency, Smoking ",
    qanda: [
      {
        quest: "Chronic ulcers -  ( chronic, recurrent or non healing oral ulcers, leg ulcers etc., )",
        ans: "Chronic nonhealing ulcers can be caused due to various factors recurrent trauma that impedes healing such as a sharp tooth or ulcer on the sole of foot Inadequate  blood supply due to arterial or venous causes (varicose veins) Nutritional deficiency, Smoking Loss of sensation -  sensory neuropathies, leprosy  etc., Systemic diseases such as diabetes, cardiac diseases, anemia, sometimes certain rare autoimmune diseases"
      },
      {
        quest: "What are the Do’s and Don’ts",
        ans: "Non diabetics suffering from chronic wounds that do not respond to long term antibiotic treatment  should seek immediate medical attention with a specialist. The ulcer should be kept clean. At the same time usage of antiseptics such as dettol, savlon should be strictly avoided. Cleaning with clean water or saline followed by application of antibiotics should be done. Over use of creams containing Gentamicin and Neomycin can cause contact sensitivity ands even delay the healing of the ulcer. Certain ulcers need repeated debridement and healing with granulation tissue. This again is done by a specialist. Areas in the body such as the foot which are subjected to constant  pressure/ friction should be treated in specials ways."
      }
    ]
  },
  pcosandskin: {
    thumb: pcos1,
    image: pcos,
    title: "PCOS and Skin",
    desPreview: "Not all cysts in the ovary and menstrual irregularities are classified as PCOS. The size and number of the cysts needs to meet a certain scientific criteria in order to classify it as PCOS. The clinical manifestations of PCOS are weight gain, irregular menstrual cycles, infertility, increased facial and body hair growth in a",
    qanda: [
      {
        quest: "PCOS and skin ",
        ans: "	Polycystic ovarian disease or syndrome is a systemic problem with insulin resistance, increase in androgen levels (male hormone), multiple ovarian cysts found on abdominal scan and clinical manifestations of the above.  "
      },
      {
        quest: "Do I have PCOS and what are the signs to notice on the Skin ?",
        ans: "Not all cysts in the ovary and menstrual irregularities are classified as PCOS. The size and number of the cysts needs to meet a certain scientific criteria in order to classify it as PCOS. The clinical manifestations of PCOS are weight gain, irregular menstrual cycles, infertility, increased facial and body hair growth in a male pattern, loss of scalp hair, acne eruptions, skin tags and seborrhoea- which is increased oily secretions of face and scalp dandruff. "
      },
      {
        quest: "Why is it important to address the cause?",
        ans: "PCOS is a metabolic condition affecting the entire body. There is predisposition to diabetes, cardiovascular presentations all of which can occur early in life."
      },
      {
        quest: "Treatment ",
        ans: "Treating individual manifestations is labouring, exhaustive and unfruitful. The core issue needs to be addressed. The diagnosis of PCOS has to be made with caution. There can be both lean and obese pcos.In the  latter group a mere 5% reduction of body weight almost makes the condition 80% better. Isn't that a jackpot! Reducing weight, healthy low glycemic index foods, active daily life, regularising menstrual cycles goes a long way in addressing the condition. Medical treatment mainly includes addressing the insulin resistance with Metformin and regularising menstrual cycles with hormonal treatment. The skin manifestations such as acne , hair loss and acanthosis nigricans (darkness around the neck) all reduce with weight loss and  PCOS treatment . Hair growth in the chin can be treated with laser hair removal along with the above"
      }
    ]
  },
  unevenskintone: {
    thumb: unevenskintone1,
    image: unevenskintone,
    title: "Uneven Skin Tone",
    desPreview: "Uneven skin tone, a common concern for many individuals, can be attributed to various factors. Just as with skin allergies, the causes of uneven skin tone are diverse and can range from external environmental factors to internal predispositions. In this blog post, we'll explore the different aspects of uneven skin tone, its potential causes, and how to address and prevent this dermatological concern.",
    qanda: [
      {
        quest: "Uneven Skin Tone ",
        ans: "Our skin is a canvas that reflects our health and vitality. However, for many, achieving a smooth and even skin tone can be a challenge. In this blog post, we will explore what uneven skin tone is, delve into its symptoms, and discuss various treatment options to help you achieve a more radiant complexion. "
      },
      {
        quest:"What Is Uneven Skin Tone?",
        ans:"Uneven skin tone refers to the irregular distribution of pigmentation across the skin, resulting in areas of discoloration, hyperpigmentation, or redness. This common dermatological concern can be influenced by a variety of factors, including sun exposure, hormonal changes, genetics, and inflammation. Understanding the root causes is essential for implementing effective treatment strategies."
      },
      {
        quest:"Symptoms of Uneven Skin Tone:",
        ans:[`Dark Spots: Hyperpigmentation can manifest as dark spots or patches on the skin, often a result of increased melanin production.`,
            `Redness and Inflammation: Uneven skin tone may include areas of redness and inflammation, indicating sensitivity or irritation.`,
            `Dull or Tired Appearance: Skin may appear dull or lackluster due to uneven pigmentation, affecting overall radiance.`,
            `Sun Damage: Prolonged sun exposure without adequate protection can contribute to uneven skin tone, with sunspots being a common symptom.`
          ]
      }, 
      {
        quest:"Treatment Options:",
        ans:[`Sunscreen and Sun Protection:
            The foundation of any treatment plan for uneven skin tone is sun protection. Regular use of a broad-spectrum sunscreen with a high SPF helps prevent further pigmentation and protects the skin from harmful UV rays.`,
            `Topical Brightening Agents:
            Products containing ingredients like vitamin C, niacinamide, and alpha hydroxy acids can help lighten dark spots and promote a more even skin tone over time. These ingredients work to inhibit melanin production and encourage skin renewal.`,
            `Chemical Peels:
            Chemical peels, performed by dermatologists or skincare professionals, involve the application of a chemical solution to exfoliate the outer layer of the skin. This can reduce hyperpigmentation and improve overall skin texture.`,
            `Laser Therapy:
            Laser treatments target pigmented areas with precision, breaking down melanin and promoting even skin tone. This option is effective for more stubborn pigmentation concerns.`,
            `Microdermabrasion:
            This non-invasive procedure involves gently exfoliating the skin to improve texture and reduce pigmentation. It's a less aggressive option suitable for mild cases of uneven skin tone.`
      ]
      },
      {
        quest:"Conclusion:",
        ans:"Achieving a harmonious and radiant complexion is possible with the right understanding and targeted treatments. Whether through diligent skincare practices at home or professional interventions, individuals can take proactive steps to address uneven skin tone. Consulting with a dermatologist can provide personalized guidance and ensure a tailored approach to achieving skin tone goals. Embrace the journey toward healthier, more luminous skin!"
      }
          
      
      
    ]
  },
  openpores: {
    thumb: openpores1,
    image: openpores,
    title: "Open Pores",
    desPreview: "Open Pores",
    qanda: [
      {
        quest: "Open Pores ",
        ans: [`Pores are nothing but the opening of hair follicles on the face. For all humans, Face has more hair than the scalp ! Yes it does. But they are finer and thinner hairs and so aren’t evident. These openings get dilated with ageing or when repeated inflammation occurs - that is when the skin in the face is repeatedly affected by acne, increased oil secretion etc,. - all of which are not severe enough to result in scarring but leads to minimal damage that enlarges or widens the opening of hair follicles.
        `,`Both open pores and scars result from the changes in the structure of collagen in the skin layers (dermis ).
        `]
      },
      {
        quest:"Treatments for open pores",
        ans:[`Pores are most often noticed only when they are fully developed. They can be to an extent treated with creams that modify collagen regeneration.`,
             `Retinoid and silicone based creams `,
             `Exfoliating agents`,
             `Chemical peeling`,
             `MNRF lasers`,
             `Resurfacing lasers such as the Co2 `,
             `The patient is explained and guided with all the process and allowed to choose . The sessions are accompanied by pre and post care by the patient at home. Each procedure will have a different outcome and downtime. Often procedures are combined depending on the need of the patient to achieve the results.`
            ]
      }
      
    ]
  },
  skintags: {
    thumb: skintag1,
    image: skintag,
    title: "Skin Tags",
    desPreview: "Skin Tags",
    qanda: [
      {
        quest: "Skin Tags ",
        ans: "Skin tags, medically known as acrochordons, are common skin growths that often go unnoticed but can be a source of concern for some individuals. These benign, soft, and often small protrusions are typically attached to the skin by a thin stalk. In this blog post, we'll delve into what skin tags are, explore their symptoms, and discuss various treatment options. "
      },
      {
        quest:"What Are Skin Tags? ",
        ans:"Skin tags are non-cancerous growths that can develop in areas where skin rubs against skin or clothing. They are usually flesh-colored or slightly darker and can vary in size, ranging from a few millimeters to a centimeter or more. While skin tags are generally harmless, they can be bothersome if they catch on clothing or jewelry, leading some people to seek removal for cosmetic reasons."
      },
      {
        quest:"Symptoms of Skin Tags:",
        ans:"Skin tags are often asymptomatic, meaning they don't cause pain or discomfort. However, certain factors may contribute to their formation, including obesity, hormonal changes during pregnancy, and genetics. Common areas for skin tags to develop include the neck, underarms, groin, and eyelids. Individuals may notice these small, hanging growths while grooming or if they become irritated."
      },
      {
        quest:"Treatment Options:",
        ans:""
      },
      {
        quest:"1. Home Remedies:",
        ans:[`Tying Off: Some people choose to tie off skin tags at the base with a piece of dental floss or thread. This method cuts off the blood supply, causing the skin tag to fall off over time.`,
             `Topical Applications: Over-the-counter creams and solutions may help shrink and eventually remove skin tags. However, their effectiveness can vary.`]
      },
      {
        quest:"2. Medical Procedures:",
        ans:[`Cauterization: Skin tags can be removed by cauterization, a process that involves burning them off using an electrical current.`,
             `Cryotherapy: This involves freezing the skin tag with liquid nitrogen, causing it to fall off after some time.`,
            `Surgical Removal: A doctor may opt for surgical excision, especially for larger skin tags. This is a quick and effective method performed in a medical office.`,
            ]
      },
      {
        quest:"3. Professional Medical Guidance:",
        ans:`It's crucial to consult with a dermatologist or healthcare professional before attempting any removal method, especially if the skin tag is in a sensitive area or if there is uncertainty about its nature.`
      },
      {
        quest:"Conclusion:",
        ans:"While skin tags are generally harmless, their presence can affect one's confidence and comfort. Understanding the symptoms and exploring appropriate treatment options, whether through at-home remedies or professional medical procedures, empowers individuals to make informed decisions about managing or removing skin tags. Always seek guidance from a healthcare professional for personalized advice and safe removal."
      },
      
    ]
  },
  vaginaldischarge: {
    title: "Vaginal Discharge",
    desPreview :"Vaginal discharge is one of the common reasons for gynecological consultation. Not all women with vaginal symptoms have an underlying medical problem. Patient's history and physical examination findings along with appropriate tests may suggest a diagnosis. Effective treatment of vaginal discharge requires that the cause be established.",
    qanda : [
      {
        quest: "",
        ans: "Vaginal discharge is one of the common reasons for gynecological consultation. Not all women with vaginal symptoms have an underlying medical problem. Patient's history and physical examination findings along with appropriate tests may suggest a diagnosis. Effective treatment of vaginal discharge requires that the cause be established. The problem of white discharge can occur before puberty, in reproductive age group as well as post menopausal."
      },
      {
        quest: "Vaginal Hygiene",
        ans: "Vagina is protected from the external environment by its acidic pH around 4 during the reproductive age group(after puberty and before menopause). This pH is maintained by two major factors - Female sexual Hormones  and  local bacteria present (lactobacilli). Therefore conditions that alter the pH such as lack  of hormones, excessive or frequent antibiotic usage that kills the lactobacilli , repeated washing, Diabetes that causes growth of other microorganisms can all disturb the vaginal environment and lead to problems. Simple washing of the external genitalia or the perineum will be an ideal way to maintain hygiene. Washing the vagina or douching needs to be strictly avoided. "
      },
      {
        quest: "When can  the vaginal  discharge be considered normal? ",
        ans: " Cyclical hormonal changes during menstruation, ovulation, Hormonal contraception, Pregnancy, the period after delivery can all cause vaginal discharge without local symptoms such as itching or foul smell which can be considered normal. Other common causes that can lead to this symptom are (avoidable causes) Personal habits and hygiene Retained tampon or condom Chemical irritation ( to disinfectants such as dettol/savlon) Allergic responses (to condom, sanitary pads, local creams ) Intrauterine device (Cu-T) Atrophic changes of vagina - common in old age, Smoking Frequent, antibiotic usage & Ectropion  - that is eversion of cervical  epithelium Cervical polyp"
      },
      {
        quest: "When should it raise a concern",
        ans: "When there is Large amount of discharge Associated itching,  boils, soreness or lower abdominal pain  Or urinary tract infection Foul smelling or frothy Change in colour - yellow, green Or  accompanied with blood Aggravated after sexual intercourse, When there is an associated systemic disorder such as Diabetes, Recurrent episodes"
      },
      {
        quest: "Don'ts when it comes to vaginal  discharge ",
        ans: "The most vital thing is to maintain the acidic vaginal  pH. Repeated washing Washing the vagina with soap or vaginal douching Using antiseptic lotions such as dettol, savlon  and even harsh soaps Using very hot water to relieve itching. All these disturbes the vaginal pH and aggravates the condition."
      },
      {
        quest: "Treatment",
        ans: "	Identifying the cause is the key to treatment. A detailed history regarding the nature of discharge, associated symptoms, usage of antibiotics, systemic problems if any, sexual history and physical examination are essential to make a diagnosis. The physical  examination of the vulva, vagina and cervix along with examination of the discharge under microscope and if needed microscopic  culture of the discharge will be needed. Self  treatment or antibiotics prescribed without proper examination and investigation will cause more harm than good."
      }
    ]
  }
} 





export const categoryDataAest = { 
  chemicalpeeling: {
    thumb: chemicalPeeling1,
    image: chemicalPeeling,
    title: "Chemical Peeling",
    desPreview: "We all have heard the story as how a Cleopatra bathed in milk.(Donkey’s milk ;) ) Any idea how I could have helped? It is the lactic acid present in it which has had an exfoliating effect on the skin ! But we are not planning on doing anything even remotely close to that! And we also use citrus and other fruits on the face to improve skin texture. So",
    qanda: [
      {
        quest: "",
        ans: "We all have heard the story as how a Cleopatra bathed in milk.(Donkey’s milk ;) ) Any idea how I could have helped? It is the lactic acid present in it which has had an exfoliating effect on the skin ! But we are not planning on doing anything even remotely close to that! And we also use citrus and other fruits on the face to improve skin texture. So chemical peeling derives its roots from such practises. It is a technique of using such acids in a tolerable higher concentration to achieve desirable results. ",
      },
      {
        quest: "What are the conditions chemical peeling is used best!",
        ans: "Acne Do all acne be treated with chemical peels? When to treat  acne with chemical peeling? All grades of acne can be treated with both creams and chemical peeling. Peeling is advised when a quicker response is desired, in situations where oral drugs and certain topical medications are not advisable such as pregnancy and lactation, Pigmentation, Pigmenations post acne, generalised tanning, resistant pigmentations not responding to topical medications, melasma etc, fine wrinkles correction and rejuvenation, keratosis pilaris, pigmentation around the eyes."
      },
      {
        quest: "What is the downtime?",
        ans: "	Downtime depends on the peel chosen. Very superficial peels or superficial peels have no downtime. Work can be resumed even the very next day. Medium depth peels can take a few days for the skin to settle down and peeling will continue to occur for a week or so. "
      },
      {
        quest: "What are the adverse effects ?",
        ans: "	The modern day peels are very safe to use. In most of the cases complications arise from poor post procedural care. The most important advice is to apply sunscreens and to use a non harsh face cleanser.Any harsh cosmetics is to be avoided for a week. The skin should be allowed to peel by itself and should not be meddled with. "
      },
      {
        quest: "How  long will the effects last?",
        ans: "For best results, a minimum of 4-6 sessions at the interval of 10 days to 3 weeks depending upon the indication is recommended. For any treatment results to sustain, post procedural maintenance is required. With proper maintenance, results last for 6 months to 1 year after which maintenance sessions can be done once in 3 months or so, depending on the indication."
      }
    ]
  },
  laserskintoningandrejuvenation: {
    thumb: laserSkinToningAnd1,
    image: laserSkinToningAnd,
    title: "Laser Skin Toning and Rejuvenation",
    desPreview: "SKIN TONING CAN BE DONE IN MULTIPLE WAYS. Depending on individual patient requirements, it can be the epidermis or the dermis that needs care. The epidermis can be affected with tanning, post inflammatory pigmentation from acne, constant friction, chemicals (such as bindi, pollutants, cosmetics etc.)",
    qanda: [
      {
        quest: "",
        ans: "SKIN TONING CAN BE DONE IN MULTIPLE WAYS . Depending on individual patient requirements, it can be the epidermis or the dermis that needs care. The epidermis can be affected with tanning, post inflammatory pigmentation from acne, constant friction, chemicals( such as bindi, pollutants, cosmetics etc,.), injury, aging changes such as wrinkles etc., The dermis is involved in ways such as deep wrinkles, scars, nodules etc."
      },
      {
        quest: "Epidermal Rejuvenation",
        ans: "	Epidermal concerns  can be addressed in various ways. Chemical peeling - Peeling away the superficial skin helps bring out the refreshed skin and simultaneously addresses acne, pigmentation, pores, superficial wrinkles, Microdermabrasion - This is a procedure done to manually remove the superficial worn out dead layers of the skin without the help of any chemicals or drugs. It can be done as a separate procedure or can be combined with peels, medi facials in order to provide better penetration  of the active ingredients. "
      },
      {
        quest: "Dermal rejuvenation",
        ans: "Medium depth chemical peels Medium depth chemical peels, Laser toning with Nd Yag - Gentle yag pro using 1064nm Rejuvenation of the skin with this technology is done by heating up the dermal collagen without affecting the epidermis.The heated up collagen then undergoes activation and undergoes regeneration which inturn tightens and lifts up the skin. It has a great effect on the fine wrinkles of the face.  "
      }
    ]
  },
  microneedling: {
    thumb: microneedling1,
    image: microneedling,
    title: "Microneedling",
    desPreview: "	Scars, pores and unevenness of the skin is mainly due to dermal changes. The dermal changes are mostly permanent . And microneedling is the technique where multiple needles are used to to puncture the skin under anesthesia (numbing creams). This controlled",
    qanda : [
      {
        quest: "",
        ans: "Scars, pores and unevenness of the skin is mainly due to dermal changes. The dermal changes are mostly permanent . And microneedling is the technique where multiple needles are used to to puncture the skin under anesthesia (numbing creams). This controlled injury with needles entering the skin for a few millimetres of skin stimulates the collagen. In the attempt to heal this injury, the adjacent scar is repaired collaterally. The penetration of the microneedles into the skin leads to a release of growth factors and triggers the wound healing cascade, encouraging collagen production which leads to younger looking skin. The needles also help to mechanically break down the scar tissue. "
      },
      {
        quest: "MnRF -Microneedling with Radiofrequency",
        ans: "This is an innovation which adds radiofrequency energy to the above microneedling technique. Microneedling with radiofrequency is a minimally invasive treatment to reduce the appearance of wrinkles, scarring, and sagging skin. Microneedling with radiofrequency uses the added technology of flow needles to deliver RF energy into the dermis. The RF energy heats the dermis which not only encourages collagen growth but tissue tightening as well.Since the epidermis is not destroyed, as is the case with microneedling treatments, recovery time is much shorter when compared to more aggressive laser resurfacing treatments or deep chemical peels."
      }
    ]
  },
  prp: {
    thumb: prp1,
    image: prp,
    title: "PRP",
    desPreview: "PRP  refers to treatment with platelet rich plasma. Platelets are rich in growth factors and  when injected it can cause renewal and regeneration in desired body tissues.",
    qanda: [
      {
        quest: "",
        ans: "PRP  refers to treatment with platelet rich plasma. Platelets are rich in growth factors and  when injected it can cause renewal and regeneration in desired body tissues."
      },
      {
        quest: "How is it done?",
        ans: "	Platelets are cells found in the blood. The blood sample of the patient is taken and centrifuged to obtain the platelets in high concentration. And by this process we get a plasma rich in platelets which can be used by injecting into the area of interest.",
      },
      {
        quest: "What are the uses of PRP in skin ?",
        ans: "Androgenic alopecia Hair fall - both men and women - can cause significant improvement, decreasing loss and increasing the density of hair. scar treatment Acne scars - scars are areas with fibrosis. PRP causes  collagen regeneration and diminish the scars depth and texture, Non healing ulcers Chronic nonhealing ulcers - most commonly encountered in legs. Repeated failed treatment in healing of an ulcer  can be successfully treated by PRP dressings."
      }
    ]
  },
  excessivebodyhairremovalwithlaser: {
    thumb: hairRemovalWithLaser1,
    image: hairRemovalWithLaser,
    title: "Excessive Body Hair - Removal with Laser",
    desPreview: "Excessive body hair can be limited to certain areas or throughout the body. This can be problem both in women as well as men. It can be constitutional or due to increased male hormone levels in females due to certain medical conditions",
    qanda: [
      {
        quest: "",
        ans: "Excessive body hair can be limited to certain areas or throughout the body. This can be problem both in women as well as men. It can be constitutional or due to increased male hormone levels in females due to certain medical conditions like PCOS."
      },
      {
        quest: "On what occasions can it be removed",
        ans: "For hirsutism - male pattern thick hair growth in females, For those  with generalised increased hair and recurrent folliculitis (boils) in certain areas like below knee, underarms, beard region(pseudofolliculitis) in the back of neck (acne keloidalis nuchae), And in certain conditions where hair removal can contribute to the improvement of the diesse like hidradenitis suppurativa and pilonidal sinus, For cosmetic reasons and decreasing the need for waxing and shaving and preventing the problems associated with it such as pain, allergy to products used in parlors and ingrown hairs on regrowth of hair."
      },
      {
        quest: "How safe is the hair reduction procedure ?",
        ans: "The laser used is nothing but light of particular wavelength; any effect produced is limited to a few millimetres of skin. Mild erythema and edema which appears in a few settles down in an hour. Usually the procedure is done only after is foreseen "
      },
      {
        quest: "How is the procedure done ",
        ans: "In our centre we use the most advanced Gentle Yag laser which uses the long pulse Nd Yag 1064nm wavelength technology. It is the most suited laser for Indian skin currently available with least chances for complications. The procedure is very comfortable for the patient with excellent results. The laser targets the melanin pigment of hair and so naturally only the pigmented hair (black hair) can be treated. Grey hairs do not respond to this treatment. Fair skin with dark thick hair is an excellent combination for the laser treatment. But as mentioned earlier this technology works best for Indian skin types. For best results 4-6 sittings are essential with one to two months intervals which will vary with the individual’s requirements. There will be 20-30% hair reduction with each treatment. So by the end of 5-6 sitting there will be 80-90% hair reduction. And the hair reduction is permanent.If you need more information regarding laser hair removal, Contact us on Skinreflect@gmail.com"
      }
    ]
  },
  skintagmolewarttreatment: {
    thumb: wartTreatment1,
    image: wartTreatment,
    title: "Skin Tag, Mole, Wart Treatment",
    desPreview: "	All the above mentioned conditions occur as outgrowths from the skin with blood supply. Moles can be present at birth or appear later. It can either be flushed to the skin or raised ",
    qanda: [
      {
        quest: "Skin tag, mole, wart treatment",
        ans: "All the above mentioned conditions occur as outgrowths from the skin with blood supply. 1)Moles can be present at birth or appear later. It can either be flushed to the skin or raised above the surface. Skin tags occur commonly around the back of the neck, axilla or thighs. The cause of which is not known. The factors commonly associated with it are obesity, aging and diabetes. DPNs or seborrheic keratosis are yet another skin growth condition with no particular cause. They occur as black dots or growths commonly on the cheeks around the eyes, face and neck. Aging , sunlight exposure and aging contribute to their occurrence. Warts on the other hand are infectious conditions and can spread from one place to another in the same person’s body and to other people who are in close contact. It can occur at any body part. Repeated rubbing or pickin the wart enhances the spread. Milia are epidermal cysts that appear as tiny yellow bumps commonly seen beneath the eyes. These outgrowths can be with either electrocautery or sterile needles (milia). Electrocautery removal is done under local anesthesia. The procedure is precise, quick and with less downtime. The healing is quick, taking only a few days and no aftercare required. "
      },
    ]
  },
  microdermabrasion: {
    thumb: microdermabrasion1,
    image: microdermabrasion,
    title: "Microdermabrasion",
    desPreview: "	This is a procedure done to manually remove the superficial worn out dead layers of the skin without the help of any chemicals or drugs. It can be done as a separate procedure or can be combined with peels, medi facials in order to provide better penetration  of the ",
    qanda: [
      {
        quest: "",
        ans: "This is a procedure done to manually remove the superficial worn out dead layers of the skin without the help of any chemicals or drugs. It can be done as a separate procedure or can be combined with peels, medi facials in order to provide better penetration  of the active ingredients. Dermal rejuvenation, Medium depth chemical peels Medium depth chemical peels, Laser toning with Nd Yag - Gentle yag pro using 1064nm Rejuvenation of the skin with this technology is done by heating up the dermal collagen without affecting the epidermis.The heated up collagen then undergoes activation and undergoes regeneration which inturn tightens and lifts up the skin. It has a great effect on the fine wrinkles of the face."
      }
    ]
  },
  hydrafacial: {
    thumb: hydrafacial1,
    image: hydrafacial,
    title: "Hydrafacial",
    desPreview: "Hydrafacial",
    qanda: [
      {
        quest: "Hydrafacial",
        ans: [`	Hydrafacial is a sophisticated form of skin rejuvenation. It involves using a machine handle with vacuum that unclogs the pores and exfoliates the superficial dead layers of the skin. In addition to the above, it involves continuous influx of active ingredients that act on the skin and penetrate deeper. The active ingredients are components of peels such as salicylic acid , glycolic acid etc,. which does the magic. This is how it differs greatly from parlour facials which involves mere repeated rubbing of the skin. With this as the base, it is then customised with skin boosters, LED therapy and enhanced lymphatic drainage. `,
              `The advantages of this treatment are that you get the refreshed look that we all need and the results last weeks after the procedure. The most sensitive skin can also be comfortably treated with Hydrafacials.
              `
            ]
      }

    ]
  },
  medifacials : {
    thumb: medifacial1,
    image: medifacial,
    title: "Medi Facials ",
    desPreview: "Medi Facials ",
    qanda: [
      {
        quest: "Medi Facials ",
        ans: [`Medi-facials are facials in which advanced technology, researched protocols, and science-based ingredients are used. They come in handy when you are getting ready for a party or you are the bride, bridesmaid, best man, groom or even just like that for your skin care routine.`,
              `Medifacial pampers your skin. The skin is cleansed with a milk cleanser.  It is then followed by a sequence of dermatologically tested agents depending on the peel chosen for the patient. The idea is to cleanse, exfoliate and rejuvenate the skin.`,
            `The procedure is wrapped up with another massage using facial massage cream until completely absorbed. And finally by applying moisturising sun protection. Amazing results are perceptible the very next day. 
            `]
      }
    ]
  },
  acnescarandporetreatments: {
    thumb: Acnescarandporetreatments1,
    image: Acnescarandporetreatments,
    title: "ACNE  SCAR and pore  TREATMENTS  ",
    desPreview: "ACNE  SCAR and pore  TREATMENTS  ",
    qanda: [
      {
        quest: "ACNE  SCAR and pore  TREATMENTS  ",
        ans: "Acne scars and pore treatments are subjects of concern for many, prompting questions about their severity, potential causes, and effective solutions. In this guide, we delve into the nuances of these skin issues to provide clarity and insights. "
      },
      {
        quest:"Identifying Acne Scars and Pores: A Varied Landscape",
        ans:"The presence of acne scars and enlarged pores can manifest in different ways — tiny bumps on the face, chest, and back, with varying colors from white to red or black. Understanding the distribution of these blemishes, whether on the cheeks, T-zone, or along the jawline, is crucial for evaluating their nature. Factors like pain, responsiveness to home remedies, and aggravation all contribute to the complexity of these skin concerns."
      },
      {
        quest:"Considering Treatment: When and Why?",
        ans:"The decision to treat acne scars and pores is often rooted in cosmetic concerns. This guide addresses the pivotal question of whether treatment is necessary, highlighting that in mild cases, it might be optional. However, for preventing long-term pigmentary changes and scarring, opting for treatment becomes essential. Additionally, acne could signal underlying hormonal imbalances, necessitating a deeper investigation into the root cause."
      },
      {
        quest:"Navigating the Duration of Treatment: Patience and Persistence",
        ans:"Understanding the timeline for acne resolution is crucial, especially when influenced by hormonal and genetic factors. This section provides insights into the duration of acne, which can persist into one's 30s. Factors such as stress, hormonal imbalances, and irritants can also impact the course of acne. The guide emphasizes the need for patience and persistence in undergoing treatment tailored to individual needs."
      },
      {
        quest:"The Cost of Treatment: Tailoring Solutions to Your Budget",
        ans:"Breaking down the diverse treatment options for acne scars and pores, this section addresses the financial aspect. From topical creams and face washes to oral tablets, chemical peels, comedone extraction, and lasers, the guide assures readers that the cost can be tailored to individual needs. It emphasizes the importance of a feasible treatment plan aligned with the patient's budget.",
      },
      {
        quest:"Addressing Acne Scars: A Stepwise Approach",
        ans:"The guide concludes by addressing the treatment of acne scars and pigmentation left behind. Offering hope and practical advice, it explores various options, including depigmenting creams, chemical peels, and lasers. The nuanced nature of scars is dissected, with recommendations for microneedling or resurfacing lasers based on the scar's depth and nature. The guide underscores the importance of a stepwise approach and patient dedication for optimal results in the journey towards clearer, healthier skin."
      }
    ]
  },
  tattooremoval  : {
    thumb: Tattooremoval1,
    image: Tattooremoval,
    title: "Tattoo Removal  ",
    desPreview: "Tattoo removal  ",
    qanda: [
      {
        quest: "Tattoo removal  ",
        ans: "Tattoos, once considered permanent marks on the canvas of our skin, now come with options for removal. Whether you're questioning the process, wondering about the cost, or curious about the aftercare, this blog post aims to provide insights into the world of tattoo removal.  "
      },
      {
        quest:"Do I Need Tattoo Removal, and Why?",
        ans:"Just like acne, tattoos can be a mix of colors and may or may not respond to DIY removal methods. They might be a source of regret, a relic from the past, or simply something you've outgrown. The decision to undergo tattoo removal is personal, often driven by aesthetic concerns. Understanding the process and its implications is the first step."
      },
      {
        quest:"The Tattoo Removal Journey: A Step-by-Step Guide",
        ans:"Tattoo removal involves a range of techniques, from topical creams and lasers to more intensive methods like chemical peeling and dermabrasion. Much like acne treatment, the process may vary based on the size, color, and depth of the tattoo. This blog will explore the various options available and guide you through what to expect during and after each session."
      },
      {
        quest:"Is Tattoo Removal Expensive?",
        ans:"Similar to acne treatment, the cost of tattoo removal can be tailored to individual needs and the complexity of the removal plan. This section will break down the factors influencing the cost, including the size and colors of the tattoo, the chosen removal method, and the number of sessions required. Understanding the financial aspect is crucial for those considering tattoo removal."
      },
      {
        quest:"Addressing Tattoo Scars and Pigmentation: What to Expect",
        ans:"Just as acne scars can be treated, so too can scars left behind by tattoo removal. This section will delve into the possible outcomes of tattoo removal, discussing potential scarring and pigmentation changes. Much like acne, a patient and stepwise approach can contribute to achieving optimal results. The blog will outline the available treatments for post-removal care, ensuring a comprehensive understanding of the entire process."
      },
      {
        quest:"Conclusion",
        ans:"In conclusion, the decision to remove a tattoo is a personal one, much like addressing acne concerns. This blog post aims to equip readers with the knowledge needed to make informed decisions about tattoo removal. From understanding the intricacies of the removal process to managing post-removal care, this guide will serve as a valuable resource for those embarking on the journey of tattoo removal."
      },
    ]
  },
  miliaandskintagremoval : {
    thumb: Miliaandskintagremoval1,
    image: Miliaandskintagremoval,
    title: "Milia and Skin Tag Removal",
    desPreview: "Milia and skin tag removal",
    qanda: [
      {
        quest: "Understanding Milia and Skin Tag Removal",
        ans: "If you've noticed tiny, painless bumps on your skin, particularly on the face, chest, or back, you might be dealing with Milia or skin tags. These skin imperfections come in various colors, from white and skin-colored to red or even black. In this blog post, we'll delve into the intricacies of Milia and skin tag removal, exploring their characteristics, potential treatments, and addressing common concerns."
      },
      {
        quest:"Identifying Milia and Skin Tags: What to Look For",
        ans:"Milia and skin tags can manifest as tiny bumps that may or may not respond to home remedies. Their distribution varies, with some commonly appearing on the cheeks, in the 'T' area of the face, along the jawline, or across the entire face. Understanding the appearance, depth, and distribution of these skin issues is crucial in determining the most suitable removal approach."
      },
      {
        quest:"To Treat or Not to Treat: Considerations for Milia and Skin Tags",
        ans:"Unlike acne, Milia and skin tags are not primarily a cosmetic concern, but their removal is often sought for aesthetic reasons. This blog post addresses the factors to consider when deciding whether to undergo treatment. We explore the potential benefits of removal, the variety of treatment options available, and the impact of individual preferences on the decision-making process."
      },
      {
        quest:"Duration of Treatment: What to Expect with Milia and Skin Tag Removal",
        ans:"While acne can persist for years, Milia and skin tag removal generally follows a different timeline. Understanding the factors influencing the duration of treatment is essential for managing expectations. This section provides insights into the hormonal and genetic influences on these skin issues, their potential triggers, and the varying courses of treatment based on individual circumstances."
      }
    ]
  },
  molesandfreckles  : {
    thumb: Molesandfreckles1,
    image: Molesandfreckles,
    title: "Moles and Freckles ",
    desPreview: "Moles and Freckles ",
    qanda: [
      {
        quest: "Do I Have Moles or Freckles? How Do I Assess Them? ",
        ans: "You may have noticed small, pigmented spots on your skin—some flat, others raised. Moles and freckles come in various colors, ranging from brown to black, and can appear anywhere on the body. While some are harmless, others may cause discomfort or change over time. Understanding their appearance, distribution, and any changes is crucial for assessing their nature."
      },
      {
        quest:"Should I Be Concerned About Treating Moles and Freckles?",
        ans:"Moles and freckles are often considered cosmetic concerns. In mild cases, no treatment may be necessary. However, in some instances, especially when changes are observed or for cosmetic reasons, individuals may choose to explore treatment options. Additionally, understanding the potential connection between moles and freckles and underlying health conditions is essential for informed decision-making."
      },
      {
        quest:"What Influences the Development of Moles and Freckles? How Long Do They Last?",
        ans:"Genetics and sun exposure play significant roles in the development of moles and freckles. These skin features may persist for many years or even a lifetime. Sun exposure, hormonal changes, and genetic predispositions can contribute to their appearance. Knowing the factors that influence them helps in adopting preventive measures and understanding their long-term presence."
      }      
    ]
  },
}


export const categoryDataBody = {
  excessivesweating: {
    thumb: excessivesweating1,
    image: excessivesweating,
    title: "Excessive Sweating",
    desPreview: "	Sweating is a physiological response to physical exertion, when in a hot environment, or emotionally induced as in anxiety or stress. It is a mechanism developed to regulate body temperature. Hyperhidrosis  is abnormally excessive sweating that's not necessarily related to heat or exercise. It can cause a great deal of discomfort. It usually ",
    qanda: [
      {
        quest: "Excessive sweating / hyperhidrosis",
        ans: "	Sweating is a physiological response to physical exertion, when in a hot environment, or emotionally induced as in anxiety or stress. It is a mechanism developed to regulate body temperature. Hyperhidrosis  is abnormally excessive sweating that's not necessarily related to heat or exercise. It can cause a great deal of discomfort. It usually affects the hands, feet, underarms or face. "
      },
      {
        quest: "What causes it?",
        ans: "	It may have a hereditary component, because it sometimes runs in families. Sometimes it  is due to a medical condition. It's the less common type. Conditions that may lead to heavy sweating include, Diabetes, Low blood sugar, Menopause, Thyroid problems, Nervous system disorders, Some Infections"
      },
      {
        quest: "When do you see a doctor?",
        ans: " Sweating disrupts your daily routine, it causes emotional distress or social withdrawal, You suddenly begin to sweat more than usual, You experience night sweats for no apparent reason"
      },
      {
        quest: "What can be done about it ?",
        ans: "	At home - Regular bathing, Choosing clothing to suit your activity. Choosing shoes and socks made of natural materials that are breathable Relaxation techniques to reduce stress levels Treatment options available are antiperspirants, drugs and injections such as botox which can relieve the symptoms upto 6 months"
      },
      {
        quest: "",
        ans: "MnRf - called Microneedling Radiofrequency is a novel technology that acts by a process of thermolysis and can destroy eccrine sweat glands while minimizing damage to the surrounding tissue. There is both a decrease in the number and the size of the sweat glands at the end of each treatment. Four to Six sessions of treatment gives a remarkable decrease in the sweat secretion."
      }
    ]
  },
  excessivebodyhair: {
    thumb: excessivebodyhair1,
    image: excessivebodyhair,
    title: "Excessive Body Hair",
    desPreview: "	Hair growth in the body of humans can show different patterns. Hypertrichosis- the word hyper- ’increase’ and tricho meaning ‘hair’  is defined as increase in body hair beyond the normal variation for a patient’s reference group. Most often it runs in the family and is just a cosmetic problem. The body hair becomes a problem ",
    qanda: [
      {
        quest: "",
        ans: "Hair growth in the body of humans can show different patterns. Hypertrichosis- the word hyper- ’increase’ and tricho meaning ‘hair’  is defined as increase in body hair beyond the normal variation for a patient’s reference group. Most often it runs in the family and is just a cosmetic problem. The body hair becomes a problem when the thin vellus hair is replaced by thick terminal hairs such those present in the scalp or eyebrows. The increase in body hair can be localised to a region or present throughout the body. It can be present since birth or in few, it might represent an underlying systemic health problem especially when it occurs late in life."
      },
      {
        quest: "Facial hair in females. Is it associated with an underlying problem in physical health?",
        ans: "Females showing facial hair growth in a male pattern is called hirsutism.This is quite different from hypertrichosis. The excess hair grown is usually dark and thick in nature called the terminal hair and in male pattern distribution such as over the beard, upper lip ,chest or the abdomen. Most commonly it occurs after puberty. The causes can be constitutional (parents having similar growth), hormonal with or without underlying PCOS (polycystic ovarian syndrome) and menstrual cycle disturbances. It could be associated with weight gain, acne, hair loss or thinning of hair. Therefore the underlying cause has to be evaluated with the help of thorough physical examination, biochemical tests and imaging studies. It can be effectively treated with the help of lasers which can be a great stress relief to the patient."
      }
    ]
  }
}



export const categoryDataNail = {
  nailinfection: {
    thumb: nailinfection1,
    image: nailinfection,
    title: "Nail Infection",
    desPreview: "Nail infections can be of sudden onset (acute) or develop over a  period of time (chronic) .They mostly start in the nail folds either at the base (proximal) or the sides (lateral folds). In acute scenarios it is often due to local injuries or following nail biting, causing pain, swelling and pus collection.It would also ",
    qanda: [
      {
        quest: "Nail / nail fold infections ",
        ans: " 	Nail infections can be of sudden onset (acute) or develop over a  period of time (chronic) .They mostly start in the nail folds either at the base (proximal) or the sides (lateral folds). In acute scenarios it is often due to local injuries or following nail biting, causing pain, swelling and pus collection.It would also primarily be due to infections such as Herpes, Orf etc,. ( in those handling animals) Depending on the severity of the infection, the treatment requirements can be Soaking of nail in antiseptic solutions on a daily basis Topical and/or oral Antibiotics with or without drainage of the pus Or nail removal in certain scenarios."
      },
      {
        quest: "Onychomycosis",
        ans: "‘Onycho’ is nail and the word ‘myco’ - is fungus .Therefore onychomycosis is a fungal  infection of the nail. Humidity, occlusive footwear, repeated nail trauma, genetic predisposition, and concurrent disease, such as diabetes, poor peripheral circulation, and HIV infection are all the common predisposers. It can present with color change (yellowish-white to brown), nail thickening, elevation of nail plate from bed. Treatment involves addressing the underlying issue. Medications will include topical ointments, nail lacquers and oral antifungals. The oral antifungals need to be taken for a longer period of time for the medications to reach the nail from circulation."
      },
      {
        quest: "Chronic nail fold infections",
        ans: "occur commonly  in people with constant cold and wet hands.This will include those working with detergents, dyes, food handlers and other irritants. People who habitually push their cuticle proximally, or cut them during manicures are also prone to get this condition. As this causes a constant irritation to the nail folds causing swelling and subsequent nail abnormalities such as nail ridges and discoloration. Only in rare instances it is accompanied by infection. The infections can cause greenish discolouration of the nail which is fungal or there can be pus formation with bacteria as well."
      },
      {
        quest: "Treatment ",
        ans: "Treatment will therefore include elimination of irritant contact be it water, food or other chemicals. Certain measures of prevention would be - Minimising water contact or Drying hands completely after , Cotton glove usage underneath plastic gloves, Avoiding manicure at the nail fold and other forms of injury to the cuticle. Treatment options will include - Topical steroids under antibiotic coverage will be the treatment of choice. Topical therapy has the greatest potential as primary therapy in mild infections. Oral antifungals are needed for chronic fungal involvement of the nail."
      }
    ]
  },
  dystrophy: {
    thumb: dystrophy1,
    image: dystrophy,
    title: "Dystrophy",
    desPreview: "Dystrophy is the nail getting deformed, distorted  or detached from the bed. The problem is with the formation of the nail plate from the base of the nail. The problem can arise from internal or external factors. Injury that is repetitive (eg- Nail biting), Infection- commonly fungal termed",
    qanda: [
      {
        quest: "",
        ans: "Dystrophy is the nail getting deformed, distorted  or detached from the bed. The problem is with the formation of the nail plate from the base of the nail. The problem can arise from internal or external factors. Injury that is repetitive (eg- Nail biting ), Infection- commonly fungal termed Onychomycosis, Psoriasis, Lichen planus, Eczema around the nails"
      },
      {
        quest: "Management",
        ans: "Management naturally involves addressing the cause.Preventing trauma, treating infections or underlying problem such as psoriasis or lichen planus will result in improvement of the nail condition."
      },
      {
        quest: "Change in nail color",
        ans: "The colour change can involve the entire nail or part of the nail or can be as dots or lines on the nail. It can be caused by a variety of reasons. Few of them are Coloured by external agents such as dyes in working environment Onychomycosis, Injury that can cause blood collection under the nails -a range of colour change can be seen from red,green, blue to black, Certain drugs taken over long period of time- eg antimalarials, tetracyclines or chemotherapy, Moles on nail beds can cause black lines on nail, Minor trauma to nail matrix can cause white punctate changes, Chronic smoking Others uncommon conditions are Nail keratinisation disorders Chronic poisoning - mercury, arsenic or carbon monoxide etc Chronic renal, cardiac or liver failure, Albumin deficiency etc Other systemic disorders Most often these patients are already under treatment for the above conditions and rarely present to us as an initial symptom."
      }
    ]
  },
  ingrowingtoenail : {
    thumb: ingrowingToeNail1,
    image: ingrowingToeNail,
    title: "Ingrown Toe Nail",
    desPreview: "Ingrowing usually affects young adults with congenital malalignment of the great toenails. Precipitating factors include improper or aggressive nail cutting and trauma. In addition,excessive sweating contributes to fragmentation of the nail  edge.Penetration of nail plate into  the neighbouring skin ",
    qanda: [
      {
        quest: "",
        ans: "Ingrowing usually affects young adults with congenital malalignment of the great toenails. Precipitating factors include improper or aggressive nail cutting and trauma. In addition,excessive sweating contributes to fragmentation of the nail  edge.Penetration of nail plate into  the neighbouring skin nearby causes  painful inflammation. It can become infected. Meddling with the tissue and self treatment is best avoided."
      },
      {
        quest: "Treatment",
        ans: "Prevention through patient education regarding nail grooming and footwear correction. Uplifting of the lateral nail plate with cotton or dental floss. Removal of the embedded nail. Granulation tissue when present must be treated by by topical/oral antibiotics or removed by curettage"
      }
    ]
  }
}

export const categoryDataMedi = {
  comedoneextraction: {
    thumb: comedoneExtraction1,
    image: comedoneExtraction,
    title: "Comedone Extraction",
    desPreview: " There is a grade of acne (Grade 1) which has comedones as the major skin lesions. Comedones can be open or closed.  Both are  basically clogged hair follicles. Open comedones are blocked follicles that are open and appear as black dots (black heads ) whereas closed comedones look like tiny bumps or surface irregularities commonly seen around the mouth and chin",
    qanda: [
      {
        quest: "Comedone extraction and acne - injections ",
        ans: "There is a grade of acne (Grade 1) which has comedones as the major skin lesions. Comedones can be open or closed.  Both are  basically clogged hair follicles. Open comedones are blocked follicles that are open and appear as black dots (black heads ) whereas closed comedones look like tiny bumps or surface irregularities commonly seen around the mouth and chin. The comedones respond only to certain medications such as benzoyl peroxide and retinoic acid. At times they are best removed manually with the help of comedone extractor or chemical peeling. Grade 4 acne characterised by cysts and nodules are the severe form of acne  and the most resistant to treatment. In those patients treatment can be given by local delivery of medicines with the help of injections or simple removal of contents of cyst by aspiration. This goes a long way in reducing scar formation. Scars are more difficult to treat than the acne itself."
      }
    ]
  },
  biopsies: {
    thumb: biopsies1,
    image: biopsies,
    title: "Biopsies",
    desPreview: "The diagnosis of skin conditions are by and large  made by direct examination by the physician with the help of simple tools such as a torch, magnifying glass or a dermascope. The sophistication of laborious tests and imaging is not available or unhelpful to a dermatologist. Considering the diverse",
    qanda: [
      {
        quest: "",
        ans: "The diagnosis of skin conditions are by and large  made by direct examination by the physician with the help of simple tools such as a torch, magnifying glass or a dermascope. The sophistication of laborious tests and imaging is not available or unhelpful to a dermatologist. Considering the diverse conditions affecting the skin,in circumstances where the diagnosis is not evident,  biopsy of the lesional skin comes to rescue. Most skin biopsies are simple office procedures done under local anesthesia. Many of them are done without a need for suturing and no subsequent scarring. The specimen will be examined by a pathologist and the dermatologist and reports issued that will help with the diagnosis and further management. "
      }
    ]
  },
  procedureforingrowntoenails: {
    thumb: ingrowingToeNail1,
    image: ingrowingToeNail,
    title: "Procedure for Ingrown Toe Nails",
    desPreview: "Ingrown toenails causing pain on the site of impingement can be treated conservatively with ointments, soaking the foot under lukewarm water and proper cutting of nails. When all the above measures fail, there is a need to remove the nail either in toto or the affected half. This procedure is done under local anesthesia and the impinged nail is detached",
    qanda: [
      {
        quest: "",
        ans: "Ingrown toenails causing pain on the site of impingement can be treated conservatively with ointments, soaking the foot under lukewarm water and proper cutting of nails. When all the above measures fail, there is a need to remove the nail either in toto or the affected half. This procedure is done under local anesthesia and the impinged nail is detached from the base and then cut. The regrowing nail is then observed for proper growth. In case of repeated ingrowing a permanent removal of the nail is advised. This is done by removing the nail and the matrix (from which the nail grows) chemically treated so that it gets destroyed with no further nail growth."
      }
    ]
  },
  keloids: {
    thumb: keloids1,
    image: keloids,
    title: "keloids",
    desPreview: "Keloids and hypertrophic scars are excessive scar tissue formed either spontaneously or following trauma. The one tempting treatment option that is best avoided in the majority of cases is excision or removal of the scar surgically. Most individuals with this condition have this innate tendency to scar which is why removal of the scar ",
    qanda: [
      {
        quest: "Injection for thick scars and keloids",
        ans: "Keloids and hypertrophic scars are excessive scar tissue formed either spontaneously or following trauma. The one tempting treatment option that is best avoided in the majority of cases is excision or removal of the scar surgically. Most individuals with this condition have this innate tendency to scar which is why removal of the scar (another injury) results in a bigger scar in the majority of cases.This is best avoided unless the bulk of the scar is huge such as the large ear lobe keloid.This will require debulking. So this condition is best treated by medications delivered to the site of scar with injections. These medications act by lysing the excess scar collagen  or underlying fibrosis. This  is also done under local anesthesia without much discomfort to the patient."
      }
    ]
  },
  scartreatment: {
    thumb: scarTreatment1,
    image: scarTreatment,
    title: "Scar Treatment",
    desPreview: "	Scar is the sequelae of injury and  healing that occurs with fibrosis of the skin and the dermis underneath. It can result from physical trauma or by many other skin conditions such as acne, furuncles, burns, scald injury, spontaneous keloids etc. Some people tend to scar more than others for the ",
    qanda: [
      {
        quest: "",
        ans: "Scar is the sequelae of injury and  healing that occurs with fibrosis of the skin and the dermis underneath. It can result from physical trauma or by many other skin conditions such as acne, furuncles, burns, scald injury, spontaneous keloids etc. Some people tend to scar more than others for the same degree of injury due to their innate tendencies (genetic susceptibility). Scars can be depressed scars (atrophic) or raised scars (hypertrophic). Most of the scars are only of cosmetic concern. Few such as keloids and hypertrophic scars are itchy and bothersome.Scars that cross joints can cause contractures. Scars continue to undergo changes(like thinning out) for many years after the occurrence of the insult or injury, but never disappear. The collagen underneath is fibrosed and becomes inactive."
      },
      {
        quest: "Can they be prevented  ?",
        ans: "For those who tend to scar more than others, there are silicone based ointments and local steroid injections which can prevent or reduce the scarring when used early in the healing process  (within 2-4 weeks of injury)."
      },
      {
        quest: "Can they be treated  ?",
        ans: "For those with established scars, there are different modalities of treatment depending on  the nature and age of the scar. First modalities aims at controlled reinjury of the affected skin in order to kindle tissue response and collagen regeneration.These include topical application of  certain chemicals, microneedling, microneedling with radiofrequency etc.All of these procedures are carried out in a painless manner under local anaesthetia applied onto the skin (numbing creams) Second modality - Raised scars with thick hypertrophic collagen bundles in dermis need to be thinned out with the help of injectables that lyse the unwanted collagen."
      }
    ]
  },
  cornwarttreatment: {
    thumb: Cornwarttreatment1,
    image: Cornwarttreatment,
    title: "Corn, Wart Treatment ",
    desPreview: "Corn,wart treatment ",
    qanda: [
      {
        quest: "Do I Have Corns or Warts? How Severe Are They? ",
        ans: "If you've noticed abnormal growths on your skin, particularly on the feet or hands, you might be dealing with corns or warts. Corns are often painful, thickened areas of skin caused by friction or pressure, while warts are small, rough growths caused by a viral infection. They can vary in color, from white and skin-colored to black. Understanding their appearance, distribution, and responsiveness to home remedies is crucial in determining the severity of the condition."
      },
      {
        quest: "Should I Consider Treating Corns and Warts? Why? ",
        ans: "While corns and warts are primarily considered cosmetic concerns, their treatment is advisable to prevent long-term discomfort and complications. Untreated corns can lead to increased pain and difficulty walking, while warts can spread and cause discomfort. Additionally, identifying the root cause, such as viral infections or persistent friction, is essential for effective treatment."
      },
      {
        quest: "When Will My Corns and Warts Disappear? How Long Should I Undergo Treatment?",
        ans: "The resolution of corns and warts varies based on the individual's response to treatment and the underlying causes. Corns and warts may persist for years if left untreated, impacting one's daily life. Treatment plans may include topical applications, medicated pads, and in some cases, minor surgical procedures. Understanding the factors influencing their persistence is key to developing a personalized treatment timeline."
      },
      
    ]
  },
  lipomaremoval: {
    thumb: Lipomaremoval1,
    image: Lipomaremoval,
    title: "Lipoma Removal",
    desPreview: "Lipoma removal",
    qanda: [
      {
        quest: "Lipoma removal",
        ans: [`Lipoma or fat swellings are seen on the subcutaneous or the fat layer of the skin. They gradually grow in size. They are either visible on the outside as a lump or felt when touched. In most patients, they don't trouble the individual and are merely a cosmetic concern. In others, it may reach a considerable size causing impedance in function or impinge on a nerve or other structures causing discomfort. They can be single or multiple in numbers. `,
              `Lipoma resection is done as an op procedure under local anaesthesia. The incision is small as the fat tissue can be squeezed out through a tiny hole. This leaves a very small post surgical scar that becomes imperceptible in a few weeks. There is minimum post procedure pain , managed with pain killers for just 2-3 days.
              `]
      }
    ]
  },
  vitiligosurgeries : {
    thumb: Vitiligosurgeries1,
    image: Vitiligosurgeries,
    title: "Vitiligo Surgeries ",
    desPreview: "Vitiligo surgeries ",
    qanda: [
      {
        quest: "Vitiligo surgeries ",
        ans: "Vitiligo, a skin condition characterized by the loss of pigmentation, can significantly impact one's appearance and self-esteem. While various treatments exist, surgical interventions have gained prominence in recent years. This article delves into the different surgical options available for vitiligo, offering insights into their processes, effectiveness, and considerations."
      },
      {
        quest:"Understanding Vitiligo",
        ans:"Before exploring surgical treatments, it's essential to understand vitiligo itself. This autoimmune condition causes the destruction of melanocytes, leading to depigmentation and the development of white patches on the skin. While non-surgical treatments like topical steroids and phototherapy exist, surgical options become relevant for stable cases."
      },
      {
        quest:"1. Skin Grafting:",
        ans:"Skin grafting is a common surgical technique for treating vitiligo. It involves taking a small piece of normally pigmented skin (usually from the patient's thigh or buttocks) and transplanting it to the depigmented area. This procedure aims to reintroduce melanocytes and restore pigmentation."
      },
      {
        quest:"2. Melanocyte Transplantation:",
        ans:"In this advanced procedure, melanocytes are harvested from a small section of normally pigmented skin and then transplanted onto the depigmented areas. This precise method is particularly effective for smaller patches and offers a more natural pigmentation result."
      },
      {
        quest:"3. Microskin Grafting:",
        ans:"Microskin grafting involves using very small pieces of pigmented skin, allowing for a more targeted and controlled application. This technique is advantageous for treating specific, localized areas of vitiligo with precision."
      },
      {
        quest:"4. Non-Cultured Epidermal Suspension Transplantation:",
        ans:"This procedure involves taking a thin layer of the patient's skin, separating the epidermis, and creating a suspension that is then applied to the depigmented areas. It is a relatively simple and effective method for treating vitiligo."
      },
      {
        quest:"Post-Surgery Care and Recovery:",
        ans:"Patients undergoing vitiligo surgeries should follow a post-surgery care regimen as advised by their dermatologist. This may include avoiding sun exposure, using prescribed medications, and attending follow-up appointments to monitor progress."
      },
      {
        quest:"Conclusion:",
        ans:"Vitiligo surgeries represent a viable option for individuals seeking a more permanent solution to depigmentation. As with any medical procedure, it's crucial to consult with a qualified dermatologist to determine the most suitable approach based on individual factors. While surgical interventions can offer significant improvements, ongoing research continues to explore new and enhanced techniques for treating vitiligo."
      },
    ]
  },
  earloberepair : {
    thumb: Earloberepair1,
    image: Earloberepair,
    title: "Ear Lobe Repair ",
    desPreview: "Ear lobe repair  ",
    qanda: [
      {
        quest: "Ear lobe repair ",
        ans: "The earlobes, often overlooked but significant features of our appearance, can face wear and tear over time. Whether due to heavy earrings, accidents, or simple aging, damaged or stretched earlobes can impact self-esteem. Fortunately, ear lobe repair procedures offer a solution to restore the natural beauty of this delicate part of the ear. "
      },
      {
        quest:"Understanding the Need for Ear Lobe Repair:",
        ans:"Many factors can contribute to the need for ear lobe repair. Prolonged use of heavy earrings, accidental tears, or the natural aging process can result in elongated or torn earlobes. For those experiencing dissatisfaction with their earlobes, repair procedures can provide a simple yet effective solution."
      },
      {
        quest:"The Procedure: A Closer Look:",
        ans:"Ear lobe repair is a minor surgical procedure typically performed under local anesthesia. The surgeon carefully trims away any excess tissue, reshapes the lobe, and then meticulously stitches the edges together. The goal is to create a natural-looking contour while addressing any tears or elongation."
      },
      {
        quest:"Who Can Benefit from Ear Lobe Repair?",
        ans:"Anyone with elongated or torn earlobes, whether due to trauma or prolonged use of heavy earrings, can benefit from ear lobe repair. The procedure is versatile and customizable to each individual's unique needs, providing a tailored solution for aesthetic concerns."
      },
      {
        quest:"Recovery and Aftercare:",
        ans:"One of the advantages of ear lobe repair is its minimal downtime. Patients can usually return to their normal activities shortly after the procedure. The surgeon will provide specific postoperative care instructions, which may include avoiding heavy earrings for a certain period and keeping the area clean to promote optimal healing."
      },
      {
        quest:"Addressing Earring-Related Concerns:",
        ans:"For those who love accessorizing with earrings, concerns about future damage may arise. Surgeons often advise patients on proper earring selection and the importance of avoiding excessive weight, helping to prevent future issues and maintain the results of the repair.",

      },
      {
        quest:"Boosting Self-Confidence:",
        ans:"Beyond the physical restoration, ear lobe repair can have a profound impact on an individual's self-confidence. Feeling comfortable and satisfied with one's appearance, even in seemingly small details like the earlobes, can contribute to an overall sense of well-being and self-assurance."
      },
      {
        quest:"conclusion",
        ans:"Ear lobe repair is a straightforward yet impactful procedure that addresses common aesthetic concerns related to the earlobes. For those seeking to restore the natural beauty of their earlobes and regain confidence in their appearance, this minor surgical intervention offers a reliable and effective solution. If you're considering ear lobe repair, consult with a qualified professional to discuss your unique needs and explore the possibilities for rejuvenating your earlobes."
      }
    ]
  },
  

}