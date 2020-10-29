import quiz from '../assets/utils/Apprentice_TandemFor400_Data.json'
import { shuffle } from 'lodash'

export type quizType = { question: string; incorrect: string[]; correct: string }[]
export const quizSet: quizType = []

for (let n = 1; n <= 10; ++n) {
  const i = Math.floor(Math.random() * (quiz.length))
  quizSet.push(quiz[i])
  quiz.splice(i, 1)
}

export const state = {
  quizSet: shuffle(quizSet),
  correctAnswerCount: 0
}

export type State = typeof state
