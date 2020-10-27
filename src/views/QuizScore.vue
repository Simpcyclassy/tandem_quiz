<template>
  <v-container dark class="score-container">
    <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="6">
            <v-img
            alt="Congratulations Image"
            class="shrink mr-2"
            contain
            src="../assets/images/congratulations.png"
            transition="scale-transition"
            />
            <h1 class="display-2 font-weight-bold mb-3">
                You scored
            </h1>
            <v-btn class="ma-2" rounded color="white" to="/quiz">
                Play again
            </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'QuizScore',

  data: () => ({
  })
})
</script>

<style scoped>
.score-container{
  margin-top: 5%;
}
</style>
