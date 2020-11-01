export default {
  getCorrectAnswerCount: (state) => {
    return state.correctAnswerCount
  },
  getQuizCount: (state) => {
    return state.quizSet.length
  },
  getAllQuiz: (state) => {
    return state.quizSet
  }
};
