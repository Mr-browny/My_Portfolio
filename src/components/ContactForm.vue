<template>
  <div class="q-pa-md" style="width: 100%">

    <q-form ref="form"  @submit="onSubmit" @reset="onReset" class="q-gutter-md " >  
      <q-input
        filled 
        v-model="email"
        label=" Email *"
        hint="Valid Email"
        lazy-rules
        :rules="[v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid',]"
      />
      <q-input
        filled 
        v-model="message" 
        type="textarea"
        label="Your Message *"
        hint="Send me a message"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
  

      <div class="row">
        <q-btn label="Submit" type="submit" block rounded  class="col" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return { 
      email: null,
      message: null,
 
    }
  },

  methods: {
    onSubmit (e) {  
        const _ = this;

        let formData = new FormData() 
        formData.append('email', _.email)
        formData.append('message', _.message) 

        ajax('POST', 'https://formspree.io/mzbjapka', formData, success, error);

        function success() { _.onReset(); _.notify('success', 'Message sent')   } /* On success callback */

        function error() {   _.notify('negative', 'Something Just Happened, Please try again')  } /* On error callback */

        function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                        success(xhr.response, xhr.responseType);
                } else {
                        error(xhr.status, xhr.response, xhr.responseType);
                }
            };
            xhr.send(data);
        }
        
    },

    onReset () {
      this.email = null
      this.message = null 
    },
    notify(type, message){
        this.$q.notify({
          type: type, 
          message: message,
          textColor: 'white', 
        }) 
    }
  }
}
</script>