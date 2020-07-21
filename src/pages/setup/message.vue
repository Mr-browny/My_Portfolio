<template>
    <q-page padding> 
        <div class="text-right ">
            <div>
                <q-btn :to="{name: 'dashboard'}" flat class="text-grey">Admin </q-btn>
                |
                <span> Messages </span>
            </div>
        </div>
        <div class=" q-mt-lg"> 
            <Messages />
        </div>
    </q-page>
</template>

<script> 
import  Messages from "components/admin/MessageTable";
export default {
    name: "message",
    components: { 
        Messages
    },
    data(){
        return{
            
        }
    }
}
</script>