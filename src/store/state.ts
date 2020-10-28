import quiz from '../assets/utils/Apprentice_TandemFor400_Data.json'

export type quizType = { question: string; incorrect: string[]; correct: string }[]
export const quizSet: quizType = []

for (let n = 1; n <= 10; ++n) {
  const i = Math.floor((Math.random() * (quiz.length)) + 1)
  quizSet.push(quiz[i])
  quiz[i] = quiz[quiz.length - n]
}

export const state = {
  quizSet,
  correctAnswerCount: 0
}

export type State = typeof state
