<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-img
      src="../assets/images/plant.png"
      height="400px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title class="black--text pl-12">
          <div class="display-1">
            {{ index + 1 }}. {{ questions }}
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list shaped>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(answer, i) in answers"
          :key="i"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
          color="#001229"
        >
          <v-list-item-content class="pl-12">
            <v-list-item-title v-text="answer"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" sm="6">
        <v-btn
          class="ma-2"
          rounded
          color="green"
          to="/quiz"
          @click="handleSubmit"
          :disabled="selectedIndex === null || answered"
        >
          Submit
        </v-btn>
        <v-btn
          v-if="index == 9"
          class="ma-2"
          rounded color="secondary"
          to="/score"
          @click="setCorrectAnswers"
        >
          Finish
        </v-btn>
        <v-btn
          class="ma-2"
          v-else
          rounded
          to="/quiz"
          @click="next"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { shuffle } from 'lodash'
import { MutationTypes } from '@/store/mutation-types'

export default Vue.extend({
  name: 'QuizCard',

  data: () => ({
    answered: false,
    selectedIndex: null,
    correctIndex: null,
    shuffledAnswers: [],
    index: 0,
    numCorrect: 0
  }),
  computed: {
    ...mapGetters([
      'getAllQuiz'
    ]),
    answers () {
      const quiz = this.getAllQuiz[this.index]
      const answers = [...quiz.incorrect]
      answers.push(quiz.correct)

      return answers
    },
    questions () {
      const quiz = this.getAllQuiz[this.index]
      const questions = quiz.question
      return questions
    }
  },
  methods: {
    next () {
      this.index++
      this.numCorrect++
    },
    setCorrectAnswers () {
      const payload = this.numCorrect
      this.$store.commit(MutationTypes.SET_CORRECT_ANSWERS, payload)
    },

    shuffledAnswers () {
      this.shuffledAnswers = shuffle(this.answers)
    },
    selectAnswer (i) {
      this.selectedIndex = i
    },
    handleSubmit () {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      if (isCorrect) {
        this.numCorrect++
      }
      this.answered = true
    },
    answerClass (index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }

      return answerClass
    }
  }
})
</script>

<style scoped>
.score-container{
  margin-top: 5%;
}
.v-card__text, .v-card__title {
  word-break: normal;
}

.selected {
  background-color: #001229;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>
