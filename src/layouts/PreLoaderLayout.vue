<template>
  <q-layout view="lHh Lpr lFf"> 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script> 

export default {
  name: 'PreLoaderLayout',
 
  data () {
    return {
      leftDrawerOpen: false,
      navLinks: 'one',
      
    }
  }
}
</script>
