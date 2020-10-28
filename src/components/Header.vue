<template>
  <v-row class="header-container">
    <div class="d-flex">
      <v-btn
        icon
        to="/"
        id="no-background-hover"
        @click="resetCounter"
      >
          <v-img
            alt="Tandem Logo"
            class="shrink mr-2"
            contain
            src="../assets/images/logo.png"
            transition="scale-transition"
            width="170"
          />
      </v-btn>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { MutationTypes } from '../store/mutation-types'

export default Vue.extend({
  name: 'Header',

  data: () => ({
  }),
  methods: {
    resetCounter () {
      this.$store.commit(MutationTypes.RESET_STATE, 0)
    }
  }
})
</script>

<style scoped lang="scss">
.header-container {
  margin-top: 40px;
  margin-left: 150px;
}
#no-background-hover::before {
   background-color: transparent !important;
}
</style>
