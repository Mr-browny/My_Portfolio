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
export default {
  name: 'PageIndex',
  mounted(){ 
    this.$router.push({name: 'home'})
  }
}
</script>
