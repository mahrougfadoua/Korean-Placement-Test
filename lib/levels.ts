// import type { Letter, Question } from "@/data/questions";

// export type Lang = "en" | "ar" | "ko";
// type T = Record<Lang, string>;

// export type Level = {
//   cefr: string;
//   name: T;
//   desc: T;
// };

// /** The five levels the test covers. */
// export const LEVELS: Level[] = [
//   {
//     cefr: "A0",
//     name: { en: "Starter", ar: "البداية", ko: "입문" },
//     desc: {
//       en: "You know the basics: Hangul sounds and the simplest particles.",
//       ar: "تعرف الأساسيات: أصوات الهانغول وأبسط الأدوات النحوية.",
//       ko: "한글 발음과 가장 기본적인 조사를 알고 있습니다.",
//     },
//   },
//   {
//     cefr: "A1",
//     name: { en: "Beginner", ar: "مبتدئ", ko: "초급 1" },
//     desc: {
//       en: "You can understand and use very basic expressions.",
//       ar: "يمكنك فهم واستخدام العبارات الأساسية جداً.",
//       ko: "아주 기본적인 표현을 이해하고 사용할 수 있습니다.",
//     },
//   },
//   {
//     cefr: "A2",
//     name: { en: "Elementary", ar: "ابتدائي", ko: "초급 2" },
//     desc: {
//       en: "You can handle simple everyday situations and short conversations.",
//       ar: "يمكنك التعامل مع المواقف اليومية البسيطة والمحادثات القصيرة.",
//       ko: "간단한 일상 상황과 짧은 대화를 할 수 있습니다.",
//     },
//   },
//   {
//     cefr: "B1",
//     name: { en: "Intermediate", ar: "متوسط", ko: "중급" },
//     desc: {
//       en: "You can deal with most situations and express opinions on familiar topics.",
//       ar: "يمكنك التعامل مع معظم المواقف والتعبير عن آرائك في المواضيع المألوفة.",
//       ko: "대부분의 상황에 대처하고 익숙한 주제에 대해 의견을 말할 수 있습니다.",
//     },
//   },
//   {
//     cefr: "B2",
//     name: { en: "Upper-Intermediate", ar: "فوق المتوسط", ko: "중상급" },
//     desc: {
//       en: "You can communicate fluently on a wide range of topics.",
//       ar: "يمكنك التواصل بطلاقة في مجموعة واسعة من المواضيع.",
//       ko: "다양한 주제에 대해 유창하게 의사소통할 수 있습니다.",
//     },
//   },
// ];

// /** Shown when the learner doesn't pass the A0 section. */
// export const BELOW_A0: Level = {
//   cefr: "<A0",
//   name: { en: "Complete Beginner", ar: "مبتدئ تماماً", ko: "완전 초급" },
//   desc: {
//     en: "Start with the Korean alphabet (Hangul) and basic sounds. A beginner course is the perfect place to begin.",
//     ar: "ابدأ بالأبجدية الكورية (الهانغول) والأصوات الأساسية. دورة المبتدئين هي المكان المثالي للبدء.",
//     ko: "한글과 기본 발음부터 시작해 보세요. 입문 과정이 가장 알맞습니다.",
//   },
// };

// /**
//  * Question ranges (0-based, inclusive) and minimum correct answers per section.
//  * NOTE: these thresholds are a proposal — adjust `min` as you like.
//  */
// export const SECTIONS = [
//   { cefr: "A0", from: 0, to: 2, min: 2 },
//   { cefr: "A1", from: 3, to: 7, min: 3 },
//   { cefr: "A2", from: 8, to: 12, min: 3 },
//   { cefr: "B1", from: 13, to: 17, min: 3 },
//   { cefr: "B2", from: 18, to: 24, min: 5 },
// ] as const;

// export type SectionResult = {
//   cefr: string;
//   score: number;
//   total: number;
//   min: number;
//   passed: boolean;
// };

// export function getSectionResults(
//   answers: (Letter | null)[],
//   questions: Question[]
// ): SectionResult[] {
//   return SECTIONS.map((s) => {
//     let score = 0;
//     for (let i = s.from; i <= s.to; i++) if (answers[i] === questions[i].a) score++;
//     return {
//       cefr: s.cefr,
//       score,
//       total: s.to - s.from + 1,
//       min: s.min,
//       passed: score >= s.min,
//     };
//   });
// }

// /**
//  * Progressive placement: a learner must pass every preceding section.
//  * Returns the index in LEVELS of the placed level, or -1 for "below A0".
//  */
// export function getPlacementIndex(sections: SectionResult[]): number {
//   let idx = -1;
//   for (const s of sections) {
//     if (!s.passed) break;
//     idx++;
//   }
//   return idx;
// }

// export const getLevelByIndex = (i: number): Level => (i < 0 ? BELOW_A0 : LEVELS[i]);

import type { Letter, Question } from "@/data/questions";

export type Lang = "en" | "ar" | "ko";
type T = Record<Lang, string>;

export type Level = {
  cefr: string;
  name: T;
  desc: T;
};

/** The five levels the test covers. */
export const LEVELS: Level[] = [
  {
    cefr: "A0",
    name: { en: "Starter", ar: "البداية", ko: "입문" },
    desc: {
      en: "You know the basics: Hangul sounds and the simplest particles.",
      ar: "تعرف الأساسيات: أصوات الهانغول وأبسط الأدوات النحوية.",
      ko: "한글 발음과 가장 기본적인 조사를 알고 있습니다.",
    },
  },
  {
    cefr: "A1",
    name: { en: "Beginner", ar: "مبتدئ", ko: "초급 1" },
    desc: {
      en: "You can understand and use very basic expressions.",
      ar: "يمكنك فهم واستخدام العبارات الأساسية جداً.",
      ko: "아주 기본적인 표현을 이해하고 사용할 수 있습니다.",
    },
  },
  {
    cefr: "A2",
    name: { en: "Elementary", ar: "ابتدائي", ko: "초급 2" },
    desc: {
      en: "You can handle simple everyday situations and short conversations.",
      ar: "يمكنك التعامل مع المواقف اليومية البسيطة والمحادثات القصيرة.",
      ko: "간단한 일상 상황과 짧은 대화를 할 수 있습니다.",
    },
  },
  {
    cefr: "B1",
    name: { en: "Intermediate", ar: "متوسط", ko: "중급" },
    desc: {
      en: "You can deal with most situations and express opinions on familiar topics.",
      ar: "يمكنك التعامل مع معظم المواقف والتعبير عن آرائك في المواضيع المألوفة.",
      ko: "대부분의 상황에 대처하고 익숙한 주제에 대해 의견을 말할 수 있습니다.",
    },
  },
  {
    cefr: "B2",
    name: { en: "Upper-Intermediate", ar: "فوق المتوسط", ko: "중상급" },
    desc: {
      en: "You can communicate fluently on a wide range of topics.",
      ar: "يمكنك التواصل بطلاقة في مجموعة واسعة من المواضيع.",
      ko: "다양한 주제에 대해 유창하게 의사소통할 수 있습니다.",
    },
  },
  {
    cefr: "C1",
    name: { en: "Advanced", ar: "متقدم", ko: "고급" },
    desc: {
      en: "You can understand complex texts and express ideas precisely and flexibly.",
      ar: "يمكنك فهم النصوص المعقدة والتعبير عن أفكارك بدقة ومرونة.",
      ko: "복잡한 글을 이해하고 생각을 정확하고 유연하게 표현할 수 있습니다.",
    },
  },
];

/** Shown when the learner doesn't pass the A0 section. */
export const BELOW_A0: Level = {
  cefr: "<A0",
  name: { en: "Complete Beginner", ar: "مبتدئ تماماً", ko: "완전 초급" },
  desc: {
    en: "Start with the Korean alphabet (Hangul) and basic sounds. A beginner course is the perfect place to begin.",
    ar: "ابدأ بالأبجدية الكورية (الهانغول) والأصوات الأساسية. دورة المبتدئين هي المكان المثالي للبدء.",
    ko: "한글과 기본 발음부터 시작해 보세요. 입문 과정이 가장 알맞습니다.",
  },
};

/**
 * Question ranges (0-based, inclusive) and minimum correct answers per section.
 * NOTE: these thresholds are a proposal — adjust `min` as you like.
 */
export const SECTIONS = [
  { cefr: "A0", from: 0, to: 2, min: 2 },
  { cefr: "A1", from: 3, to: 7, min: 3 },
  { cefr: "A2", from: 8, to: 12, min: 3 },
  { cefr: "B1", from: 13, to: 17, min: 3 },
  { cefr: "B2", from: 18, to: 21, min: 3 },
  { cefr: "C1", from: 22, to: 24, min: 2 },
] as const;

export type SectionResult = {
  cefr: string;
  score: number;
  total: number;
  min: number;
  passed: boolean;
};

export function getSectionResults(
  answers: (Letter | null)[],
  questions: Question[]
): SectionResult[] {
  return SECTIONS.map((s) => {
    let score = 0;
    for (let i = s.from; i <= s.to; i++) if (answers[i] === questions[i].a) score++;
    return {
      cefr: s.cefr,
      score,
      total: s.to - s.from + 1,
      min: s.min,
      passed: score >= s.min,
    };
  });
}

/**
 * Progressive placement: a learner must pass every preceding section.
 * Returns the index in LEVELS of the placed level, or -1 for "below A0".
 */
export function getPlacementIndex(sections: SectionResult[]): number {
  let idx = -1;
  for (const s of sections) {
    if (!s.passed) break;
    idx++;
  }
  return idx;
}

export const getLevelByIndex = (i: number): Level => (i < 0 ? BELOW_A0 : LEVELS[i]);