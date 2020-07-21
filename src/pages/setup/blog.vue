<template>
    <q-page padding >
        <div class="text-right ">
            <div>
                <q-btn :to="{name: 'dashboard'}" flat class="text-grey">Admin </q-btn>
                |
                <span> Blog Listing </span>
            </div>
        </div>
         <BlogList />
    </q-page>
</template>


<script>
import BlogList from "components/admin/Blogs";
export default {
    components: {
        BlogList
    }
}
</script> 