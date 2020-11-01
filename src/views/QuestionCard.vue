
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
            {{ index + 1 }}. {{ currentQuestion.question }}
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list shaped>
      <v-list-item-group v-model="selectedIndex">
        <v-list-item
          v-for="(answer, i) in shuffledAnswers"
          :key="i"
          @click.prevent="selectAnswer(i)"
          :class="answerClass(i)"
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
          class="ma-2 submit-answer"
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
          id="submit-button"
          @click="setCorrectAnswers"
        >
          Finish
        </v-btn>
        <v-btn
          class="ma-2"
          v-else
          rounded
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
import { MutationTypes } from '../store/mutation-types'

interface QuizObject {
  correct: string;
  incorrect: [];
  question: string;
}

export default Vue.extend({
  name: 'QuizCard',

  data: () => ({
    answered: false,
    selectedIndex: null as (null | number),
    correctIndex: null as (null | number),
    shuffledAnswers: [] as Array<string>,
    index: 0,
    numCorrect: 0,
    currentQuestion: {} as QuizObject
  }),
  computed: {
    ...mapGetters([
      'getAllQuiz'
    ])
  },

  methods: {
    selectAnswer (i: number) {
      this.selectedIndex = i
    },

    next () {
      this.index++
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

    setCorrectAnswers () {
      const payload = this.numCorrect
      this.$store.commit(MutationTypes.SET_CORRECT_ANSWERS, payload)
    },

    shuffleAnswers () {
      const answers = [...this.currentQuestion.incorrect, this.currentQuestion.correct]
      this.shuffledAnswers = shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct)
    },

    getCurrentQuestion () {
      this.currentQuestion = this.getAllQuiz[this.index]
    },

    answerClass (index: number) {
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
  },
  watch: {
    index: {
      immediate: true,
      handler () {
        this.getCurrentQuestion()
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswers()
      }
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
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: #ff6961;
}
</style>
