<template>
    <q-page padding class="flex flex-center">
        <q-card class="  text-white" style="width: 100%; max-width: 500px;">
            <q-card-section class="bg-secondary text-center">
                <div class="text-h6">Nwa tinye akara iji kpochie uzo gi</div>
                <div class="text-subtitle2">ihe iga eji wee cheta ya bu mmm</div>
            </q-card-section>

            <q-card-section>
                <q-input rounded outlined v-model="password" type="password"  color="whtie" label="Akara Mkpoghe" />
            </q-card-section>

            <q-separator dark />

            <q-card-actions class="text-center justify-center"> 
                <q-btn rounded block style="width: 100%; " color="secondary" @click="login"> Login </q-btn> 
            </q-card-actions>
        </q-card>
  </q-page>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            password: ''
        }
    },
    methods: {
        login(){
            if (!this.password)  return ;

            // check if it matches with the store password
            this.$router.push({name: 'Admin'})

            this.$q.notify({
                type: 'info',
                message: 'This site does not exist Please',
                timeout: '1000s'
            })
        }
    }
}
</script>