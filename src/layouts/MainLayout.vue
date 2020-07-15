<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated :class=" $q.dark.isActive ? 'bg-dark' : 'bg-white'">
      <q-toolbar class="text-grey"> 
        <q-btn flat dense round icon="menu" aria-label="Menu" class="lt-sm" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-toolbar-title>
          George Ikwegbu
        </q-toolbar-title>
        <q-tabs v-model="tab" indicator-color="primary" active-color="primary"  class="text-grey-5 q-pb-sm gt-xs"  align="justify" > 
            <q-route-tab :to="{name: 'home'}" exact  name="home" label="Home"  />
            <q-route-tab :to="{name: 'about'}" exact  name="about" label="About "  />
            <q-route-tab :to="{name: 'contact'}" exact  name="contact" label="Contact"  />
            <q-route-tab :to="{name: 'blog'}" exact  name="blog" label="Blog"  /> 
            <q-route-tab :to="{name: 'portfolio'}" exact  name="portfolio" label="Portfolio"  /> 
            <q-btn dense flat round  :color="$q.dark.isActive ?  'yellow' : 'grey' " :icon=" $q.dark.isActive ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'"  @click="$q.dark.toggle()"/> 
      </q-tabs>  
        <q-bar class="bg-transparent">
          <div class="cursor-pointer non-selectable"> 
            <q-icon name="mdi-dots-vertical" />
            <q-menu>
                <q-list dense style="min-width: 115px; ">
                    <q-item clickable v-close-popup  >
                        <q-item-section>Play Games</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section>Goof Around</q-item-section>
                    </q-item>
                    <q-separator /> 
                    <q-separator />
                    <q-item clickable v-close-popup>
                        <q-item-section>Hello World !</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
          </div>
        </q-bar> 
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 1px; border-right: 1px solid #ddd">
        <q-list padding> 
          <q-item-label header>Navigation</q-item-label>
          <q-separator  inset class="q-mx-lg" />

          <q-item  clickable v-ripple @click="leftDrawerOpen = !leftDrawerOpen" :to="{ name: 'home' }">
          <!-- <q-item  clickable v-ripple @click="leftDrawerOpen = !leftDrawerOpen" > -->
            <q-item-section avatar>
              <q-icon name="mdi-desktop-mac-dashboard" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>   
 
          <q-item clickable v-ripple  :to="{ name: 'about' }">
            <q-item-section avatar>
              <q-icon name="mdi-help" />
            </q-item-section>

            <q-item-section>
              About
            </q-item-section>
          </q-item> 

          <q-item  clickable v-ripple :to="{ name: 'contact' }">
            <q-item-section avatar>
              <q-icon name="mdi-email-check" />
            </q-item-section>

            <q-item-section>
              Contact
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :to="{ name: 'blog' }">
            <q-item-section avatar>
              <q-icon name="mdi-pencil-plus" />
            </q-item-section>

            <q-item-section>
              Blog
            </q-item-section>
          </q-item>  

         <q-item clickable v-ripple :to="{ name: 'portfolio' }">
            <q-item-section avatar>
              <q-icon name="mdi-briefcase-plus" />
            </q-item-section>

            <q-item-section>
              Portfolio
            </q-item-section>
          </q-item>   

          <q-item  clickable v-ripple @click="$q.dark.toggle()">
            <q-item-section avatar>
              <q-icon :color="$q.dark.isActive ?  'yellow' : 'grey' " :name=" $q.dark.isActive ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'" /> 
            </q-item-section>

            <q-item-section>
              {{ $q.dark.isActive ? 'Day' : 'Night'  }} Mode
            </q-item-section>
          </q-item> 
        </q-list>


      </q-scroll-area>

      <!-- <q-img class="absolute-top" src="~assets/George.jpg" style="height: 400px"> -->
      <q-img class="absolute-bottom" src="~assets/George.jpg" style="height: 450px">
        <div class="absolute-bottom ">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~assets/George_about.jpg">
          </q-avatar>
          <div class="text-weight-bold">George Ikwegbu</div>
          <div>g.ikwegbu@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container> 
        <router-view class="layout-view"></router-view> 
      <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300" >
        <router-view class="layout-view"></router-view>
      </transition> -->
    </q-page-container>
  </q-layout>
</template>


<style >
  ::-webkit-scrollbar{
    width: 10px;
    background: #3e4149;
    overflow: auto;
  }
  ::-webkit-scrollbar-thumb{
    width: 10px;
    border-radius: 50px; 
    background-color: rgba(255,255,255,.3)
  }
  
  ::-webkit-scrollbar-thumb:hover{ 
    background-color: rgba(255,255,255,.5)
  }
  *{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
</style>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    
  },

  data () {
    return {
      leftDrawerOpen: false,
      tab: 'events',
      
    }
  }
}
</script>
