<template>
    <q-page padding>
        <div class="text-right ">
            <div>
                <q-btn :to="{name: 'dashboard'}" flat class="text-grey">Admin </q-btn>
                |
                <q-btn :to="{name: 'message'}" flat class="text-grey"> Message </q-btn>
                |
                <span> Message Detail </span>
            </div>
        </div>
        <div> 
            <q-card-section> 
                <q-toolbar class="  shadow-6 rounded-borders "> 
                    <q-btn rounded outline @click="$router.go(-1)" color="secondary" icon="mdi-chevron-left" />
                    <q-item>
                        <q-item-section avatar>
                            <q-avatar>
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <div class="text-weight-medium"> SpaceX HR 👽</div>
                            <div class="text-grey"> spaceX@gmail.com </div>
                        </q-item-section>
                    </q-item>
                    <q-space />

                    <!--
                        notice shrink property since we are placing it
                        as child of QToolbar
                    -->
                    <q-tabs v-model="tab" shrink>
                        <q-tab name="message" label="Message" />
                        <q-tab name="attachment" label="Attachment" /> 
                    </q-tabs>
                </q-toolbar>
            </q-card-section> 
            <q-card class="q-ma-lg">
                <q-card-section>
                    <div v-html="fun" />
                </q-card-section>
            </q-card>
        </div>
        <div class="q-pa-md q-gutter-sm"  >

            <div class="text-grey text-h5"> Preview Raw </div>
            <q-card flat bordered>
                <q-card-section>
                    <pre style="white-space: pre-line">{{ newMessage }}</pre>
                </q-card-section>
            </q-card>
            <div class="text-grey text-h5"> Preview Message </div>
            <q-card flat bordered>
                <q-card-section v-html="newMessage" />
            </q-card>

            <q-editor v-model="newMessage" min-height="10rem" placeholder="Reply..." />
        </div>
        <div>
            <q-btn color="secondary" rounded block>
                Reply
                <q-icon size="xs" class="q-ml-md" name="send" />
            </q-btn>
        </div>
        <div class="q-mt-lg">
            <Editor ref="editor" />
        </div>
    </q-page>
</template>


<script>
import Editor from "components/admin/Editor";
export default {
    name: 'singleMessage',
    components: {
        Editor
    },
    data(){
        return{
            fun: 'Dear <b>George,</b><div><b>&nbsp; &nbsp; </b>We are please to let you know that we will be happy to have you onboard in our team on building the next Gen SpaceX technologies using Vue | Quasar.&nbsp;</div><div>Thanks and best Regards.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;~Elon Musk</div>',
            newMessage: '',
            tab: 'message'
        }
    }
}
</script>