<template>
  <div class="q-pa-md">
      <!-- :grid="$q.screen.xs" this attr sets the table data to grid, when on smaller screen size -->
    <q-table :grid="$q.screen.xs" title="Git Repos" :data="repos" :columns="columns" row-key="name" :filter="filter"   style="width: 100%; ">
       <template v-slot:body="props"  >
        <q-tr :props="props">
          <q-td key="Name" :props="props">
            {{ props.row.name }}
          </q-td>

          <q-td key="Description" :props="props"> 
              {{ props.row.description }} 
          </q-td>

          <q-td key="Language" :props="props">
            <q-badge color="secondary">
              {{ props.row.language }}
            </q-badge>
          </q-td>

          <q-td key="CreatedAt" :props="props"> 
              {{ new Date(props.row.createdAt).toDateString() }} 
          </q-td> 

          <q-td key="ID" :props="props">  
            <!-- {{ props.row.id }} -->
             <q-btn round outline  color="secondary" icon="add" @click="add_to_repo(props.row.id)" />
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

    <Dialog ref="display_dialog" from="github" type="Add From Github" />
  </div>
</template>


<script>
import  Dialog from "components/admin/Dialog"; 
import { mapActions, mapGetters } from "vuex";
export default { 
  components: {
      Dialog
  },
  computed:{
    ...mapGetters('repos', ['github_repos'])
  },
  data () {
    return {   

      filter: '',
      columns: [
        { name: 'Name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'Description', align: 'left', label: 'Description', field: 'description', },
        { name: 'Language', label: 'Language', field: 'language', },
        { name: 'CreatedAt', label: 'Created At', field: 'createdAt', sortable: true },
        { name: 'ID', label: 'Add', field: 'id', },
      ], 
      repos: []
    }
  },
  mounted(){
    this.github_repos.forEach(repo => { 
        this.repos.push({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          createdAt: repo.created_at
        })
    })  
  },
  methods: {
    ...mapActions('repos', ['load_github_repos']),
    add_to_repo: function(id){
      const _ = this;
      //  _.load_github_repos()
      _.$refs.display_dialog.open(id)   
    }
  }
}
</script>