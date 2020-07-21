<template>
    <q-page padding>
        <div class="text-right ">
            <div>
                <q-btn :to="{name: 'dashboard'}" flat class="text-grey">Admin </q-btn>
                |
                 <q-btn :to="{name: 'adminBlog'}" flat class="text-grey"> Blog Listing </q-btn>
                |
                <span> Blog Details </span>
            </div>
        </div>

        <div>
            <div class="row">
                <div class="col-12 col-sm-5 q-pa-sm q-gutter-sm">
                    <div class="q-mb-lg">
                        <q-btn color="secondary" rounded outline icon="mdi-chevron-left" @click="$router.go(-1)" />
                    </div> 
                    <div class=" "  >  
                        <q-editor v-model="newBlog"  min-height="10rem" placeholder="Reply..." />
                        <Editor ref="editor" />
                    </div>
                    <div class="flex justify-between">
                        <q-btn label="Save" @click="save_to_draft" color="secondary" outline rounded icon="save" />
                        <q-btn label="Publish" @click="publish" color="secondary"  rounded icon="mdi-cloud-upload" />
                    </div>
                </div>

                <div class="col-12 col-sm-7 q-pa-sm">
                    <div class="text-h4 text-grey q-mb-lg">  Preview Blog Post </div>
                    <q-card class=" ">
                        <q-card-section v-html="newBlog" />
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>


<script>
import Editor from "components/admin/Editor";
export default {
    name: 'singleBlogPost',
    components: {
        Editor
    },
    data(){
        return {
            newBlog: ''
        }
    },
    beforeDestroy(){
        this.save_to_draft()
        // This would save the current newBlog to draft on the state
    },
    methods: {
        save_to_draft(){
            // alert('Saving '+ ' <br/>' + this.newBlog)
            this.$refs.editor.saveWork()
        },
        publish(){
            // alert('Saving '+ ' <br/>' + this.newBlog)
            this.$refs.editor.uploadIt()
        },
    }
}
</script>