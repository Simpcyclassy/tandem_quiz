<template>
  <v-row class="header-container">
    <div class="d-flex">
      <v-btn
        icon
        to="/"
        id="no-background-hover"
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

export default Vue.extend({
  name: 'Header'
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
