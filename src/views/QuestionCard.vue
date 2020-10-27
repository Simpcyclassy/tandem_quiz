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
        <v-card-title class="black--text pl-12 pt-12">
          <div class="display-1">
            What was Tandem previous name?
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list shaped>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="6">
          <v-btn class="ma-2" rounded color="white" to="/quiz">
        Submit
    </v-btn>
    <v-btn class="ma-2" rounded color="white" to="/quiz">
        Next
    </v-btn>
    <v-btn class="ma-2" rounded color="white" to="/score">
        Finish
    </v-btn>

        </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'QuizScore',

  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Tandem' },
      { text: 'Burger Shack' },
      { text: 'Extraordinary Humans' },
      { text: 'Devmynd' }
    ]
  })
})
</script>

<style scoped>
.score-container{
  margin-top: 5%;
}
</style>
