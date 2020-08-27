<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    > -->
    <q-avatar size="500px" style="margin-top: -80px; ">
        <img src="~assets/George.jpg" alt="Image of George Ikwegbu">
    </q-avatar> 
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'PageIndex',
  mounted(){ 
    this.fetch_devTo_blogs() 
     this.load_github_repos()
    this.$router.push({name: 'home'})
  },
  methods: {
      ...mapActions('repos', ['load_github_repos']),
      ...mapActions('blogs', ['fetch_devTo_blogs']),
  }
}
</script>
