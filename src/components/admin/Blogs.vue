<template> 
  <div class="q-pa-md"> 

    <q-table title="Blog List" :data="blogs" :columns="columns" :filter="filter" row-key="name"  >
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.title  }}
          </q-td>
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <q-td key="published_at" :props="props">
            {{ new Date(props.row.published_at).toDateString() }}
          </q-td>
          <q-td key="id" :props="props">
            <!-- {{ props.row.id }} -->
            <q-btn round outline flat color="secondary" icon="mdi-eye-check" @click="view_blog(props.row.id)" />
          </q-td>
        </q-tr>
      </template>
       <template v-slot:top-right>
        <q-input  dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div> 
</template>



<script> 
import { mapActions, mapGetters } from "vuex";
import blogs from '../../store/blogs';
import { devTo_blogs } from '../../store/blogs/getters';

export default {
  data () {
    return {
      filter: '',
      blogs: [], 
      columns: [
        { name: 'name', required: true, label: 'Titte', align: 'left', field: row => row.title, format: val => `${val}`, sortable: true },
        { name: 'description', align: 'left', label: 'Description', field: 'description', sortable: true },
        { name: 'published_at', label: 'Published At', field: 'published_at', sortable: true },
        { name: 'id', label: 'View', field: 'id' }, 
      ]
    }
  },

  computed: { 
    ...mapGetters('blogs', ['devTo_blogs']) 
  },
  mounted(){
    this.blogs.push(...this.devTo_blogs)
    this.fetch_devTo_blogs()
  },
  methods: {
    ...mapActions('blogs', ['fetch_devTo_blogs']),
    view_blog(id){ 
        // this.$router.push({name: 'singleAdminBlog', params: {blogId: id}})
        this.$router.go(-1)
    }, 
  }
}
</script>