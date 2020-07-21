<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-4"> 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script> 

export default {
  name: 'AuthLayout',
 
  data () {
    return {
      leftDrawerOpen: false,
      navLinks: 'one',
      
    }
  }
}
</script>
