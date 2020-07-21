<template>
    <q-page padding > 
        <div class="text-right ">
            <div>
                <q-btn :to="{name: 'dashboard'}" flat class="text-grey">Admin </q-btn>
                |
                <span> Portfolio </span>
            </div>
        </div>
        <Portfolio />
        <Repos />
    </q-page>
</template>

<script>
import  Repos from "components/admin/GitRepos"; 
import  Portfolio from "components/admin/AllPortfolio"; 
export default {
    name: "allPortfolio",
    components: {
        Repos, 
        Portfolio, 
    },
}
</script>