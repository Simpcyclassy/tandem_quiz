import quiz from '../assets/utils/Apprentice_TandemFor400_Data.json'

const quizSet: { question: string; incorrect: string[]; correct: string }[] = []

for (let n = 1; n <= 5; ++n) {
  const i = Math.floor((Math.random() * (quiz.length)) + 1)
  quizSet.push(quiz[i])
  quiz[i] = quiz[quiz.length - n]
}

export const state = {
  quizSet,
  correctAnswerCount: 0
}

export type State = typeof state
