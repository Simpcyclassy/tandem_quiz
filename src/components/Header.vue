<template>
  <v-row class="header-container">
    <div class="d-flex">
        <v-img
          alt="Tandem Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="170"
        />
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  data: () => ({
  })
})
</script>

<style scoped>
.header-container {
  margin-top: 40px;
  margin-left: 70px;
}
</style>
