<template>
  <v-container dark class="score-container">
    <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="6">
            <v-img
              alt="Congratulations Image"
              class="shrink mr-2"
              contain
              v-if="getCorrectAnswerCount < 5"
              src="../assets/images/uhoh.png"
              transition="scale-transition"
              height= "300px"
            />
            <v-img
              alt="Congratulations Image"
              class="shrink mr-2"
              contain
              v-else-if="getCorrectAnswerCount == 5 || getCorrectAnswerCount == 6 "
              src="../assets/images/satisfactory.png"
              transition="scale-transition"
              height= "300px"
            />
            <v-img
              alt="Congratulations Image"
              class="shrink mr-2"
              contain
              v-else
              src="../assets/images/congratulations.png"
              transition="scale-transition"
            />
            <h1 class="display-2 font-weight-bold mb-3">
                You scored: {{ getCorrectAnswerCount }}/{{ getQuizCount }}
            </h1>
            <v-btn
              class="ma-2"
              rounded color="white"
              @click="resetQuiz"
            >
              Play again
            </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'QuizScore',

  computed: {
    ...mapGetters([
      'getCorrectAnswerCount',
      'getQuizCount'
    ])
  },

  methods: {
    resetQuiz () {
      window.location.assign('/quiz')
    }
  }
})
</script>

<style scoped>
.score-container{
  margin-top: 5%;
}

</style>
