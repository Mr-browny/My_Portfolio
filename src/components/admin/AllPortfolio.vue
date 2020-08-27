<template> 
  <div class="q-pa-md"> 

      <div class="q-pa-md">
          <q-btn label="Add New" icon-right="add" @click="newPortfolio" color="secondary" rounded outline />
      </div>
    <q-table  title="Current Portfolio" :data="repos" :columns="columns" :filter="filter" row-key="name"  >
      <template v-slot:body="props"  >
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>

          <q-td key="description" :props="props"> 
              {{ props.row.description }} 
          </q-td>

          <q-td key="language" :props="props">
            <q-badge color="secondary">
              {{ props.row.language }}
            </q-badge>
          </q-td>

          <q-td key="createdAt" :props="props"> 
              {{ new Date(props.row.createdAt).toDateString() }}  
          </q-td> 

          <q-td key="id" :props="props">  
            <!-- {{ props.row.id }} -->
             <q-btn round flat outline  color="secondary" icon="mdi-eye-check" @click="view_repo(props.row.id)" />
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

    <Dialog ref="display_dialog" from="current" :type="projectType" /> 
  </div> 
</template>



<script> 
import  Dialog from "components/admin/Dialog"; 

import {  mapGetters } from "vuex";

export default {
  data () {
    return { 
      projectType: '',
      repos: [], 
      filter: '', 

      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'description', align: 'left', label: 'Description', field: 'description', sortable: true },
        { name: 'language', label: 'language', field: 'language', sortable: true },
        { name: 'createdAt', label: 'Created At', field: 'createdAt' },
        { name: 'id', label: 'View', field: 'id' }
      ], 
    }
  }, 
  computed:{
    ...mapGetters('repos', ['current_repos'])
  },
  components: {
      Dialog
  }, 
  mounted(){
    this.current_repos.forEach(repo => { 
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
      view_repo(id){
          const _ = this;    
          _.$refs.display_dialog.open(id) 
          _.projectType = "Edit" 
      },
      newPortfolio(){
        const _ = this;
          _.$refs.display_dialog.open()  
          _.projectType = "New"
      }
  }
}
</script>