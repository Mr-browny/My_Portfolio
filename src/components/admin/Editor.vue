<template>
  <div class=""> 
    <q-editor
      v-model="qeditor"
      placeholder="Type here..."
      :dense="$q.screen.lt.md"
      :definitions="{
        insert_img: {
            tip: 'Insert Image',
            icon: 'mdi-camera',
            label: 'image',
            handler: this.insertImg // handler will call insertImg() method
        },
        save: {
          tip: 'Save your work',
          icon: 'save',
          label: 'Save',
          handler: saveWork
        },
        upload: {
          tip: 'Upload to cloud',
          icon: 'cloud_upload',
          label: 'Upload',
          handler: uploadIt
        }
      }"
      :toolbar="[
        [ 
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify'],
          }
        ],
        ['upload', 'save', 'insert_img'],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'], 
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana', 
            ]
          },
          'removeFormat',
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana', 
      }"
    />
    </div>
</template>



<script>
export default {
  data () {
    return {
      qeditor: '',
      imgSrc: ''
    }
  },
   methods: {
    insertImg() { 
        const _ = this;
        // insertImg method 
        let post = this.qeditor
        // create an input file element to open file dialog
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.png, .jpg, .gif, .jpeg' // file extensions allowed
        let file
        input.onchange = _ => {
            const files = Array.from(input.files)
            file = files[0]

            // lets load the file as dataUrl
            const reader = new FileReader()
            let dataUrl = ''
            reader.onloaded = function() { 
                
                // append result to the body of your post
                // post.body += '<div><img src="' + dataUrl + '" /></div>'  /* This line is used to add to the preview secton */
                // _.imgSrc = reader.result
            }
            reader.readAsDataURL(file)
        }
        input.click()
    },
    saveWork () {
        this.notify('Saved your text to State', 'green-4', 'cloud_done')  
    },
    uploadIt () {
        this.notify('Server unavailable. Check Connectivity', 'red-5', 'warning') 
    },
    notify(msg, color, icon){
        this.$q.notify({
            message: msg,
            color: color,
            textColor: 'white',
            icon: icon
        })
    }
  }
}
</script>