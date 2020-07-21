<template>
    <div>
        hey
    </div>
</template>

<script>
export default {
    name: "index",
    beforeCreate(){
        this.$router.push({name: 'dashboard'}) 
        // const _ = this; 
        // const authPassword = localStorage.getItem('authPassword')
        // if (authPassword) {
        //     this.$router.push({name: 'dashboard'}) 
        // }else{
        //     this.$router.push({name: 'login'}) 
        // }
        
    },
    
}
</script>