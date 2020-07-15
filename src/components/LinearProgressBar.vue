<template>
  <div class="q-pa-md">
    <q-linear-progress size="25px" :value="progress1" color="accent">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="progressLabel1" />
      </div>
    </q-linear-progress> 
  </div>
</template>


<script>
export default {
  data () {
    return {
      progress1: 0.8, 
    }
  },

  computed: {
    progressLabel1 () {
      return (this.progress1 * 100).toFixed(2) + '%'
    }, 
  }
}
</script>