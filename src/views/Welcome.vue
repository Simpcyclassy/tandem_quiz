<template>
  <v-container class="welcome-container">
    <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="6">
            <vue-typed-js
                :strings="[
                    'Hi! Ready to be a trivia champion?',
                    'Welcome to my trivia challenge'
                ]"
                :typeSpeed="100"
                :backSpeed="50"
            >
                <h1 class="display-2 font-weight-bold mb-3"><span class="typing"></span></h1>
            </vue-typed-js>
            <v-btn
                class="ma-2"
                rounded
                color="white"
                @click="resetQuiz()"
            >
                Click to Start
            </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Welcome',

  methods: {
    resetQuiz () {
      window.location.assign('/quiz')
    }
  }
})
</script>

<style scoped>
.welcome-container{
  margin-top: 15%;
}
</style>
