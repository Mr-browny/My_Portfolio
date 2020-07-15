<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary"> 

      <q-timeline-entry title="HTML 5" subtitle="html and css design and build websites, By Jon Duckett" side="left" icon="mdi-language-html5" >
        <div> 
            <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="CSS 3" subtitle="html and css design and build websites, By Jon Duckett" side="right" icon="mdi-language-css3" >
        <div>
          <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="JavaScript" subtitle="JavaScript Notes For Professionals" side="left" icon="mdi-language-javascript" >
        <div>
         <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="JQuery" subtitle="W3 School Jquery" side="right" icon="mdi-jquery" >
        <div>
            <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Bootstrap 3" subtitle="W3 School Bootstrap" side="left" icon="mdi-bootstrap" >
        <div> 
             <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Vuejs" subtitle="Freecodecamp | Gwendolyn taught me" side="right" icon="mdi-vuejs" >
        <div> 
           <!--  -->
            
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Vuetify" subtitle="Vuetify Docs" side="left" icon="mdi-vuetify" >
        <div> 
             <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Quasar" subtitle="Quasar Docs" side="right" avatar="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" >
        <div> 
            <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Nodejs" subtitle="NodeJs Docs" side="left" icon="mdi-nodejs" >
        <div> 
          <!--  -->
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Threejs" subtitle="ThreeJs Docs" side="right" icon="mdi-numeric-3" >
        <div> 
          <!--  -->
        </div>
      </q-timeline-entry>

       
    </q-timeline>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>