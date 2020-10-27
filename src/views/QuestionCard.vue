<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue' // @ is an alias to /src

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {}
</script>
