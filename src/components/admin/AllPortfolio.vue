<template> 
  <div class="q-pa-md"> 

      <div class="q-pa-md">
          <q-btn label="Add New" icon-right="add" @click="newPortfolio" color="secondary" rounded outline />
      </div>
    <q-table  title="Current Portfolio" :data="records" :columns="columns" :filter="filter" row-key="name"  >
      <template v-slot:body="props"  >
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>

          <q-td key="description" :props="props"> 
              {{ props.row.description }} 
          </q-td>

          <q-td key="image" :props="props">
            <q-badge color="secondary">
              {{ props.row.image }}
            </q-badge>
          </q-td>

          <q-td key="createdAt" :props="props"> 
              <!-- {{ new Date(props.row.createdAt).toDateString() }}  -->
              {{  props.row.createdAt }} 
          </q-td> 

          <q-td key="view" :props="props">  
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
      row_details: {},
      filter: '', 

      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'description', align: 'center', label: 'Description', field: 'description', sortable: true },
        { name: 'image', label: 'Image', field: 'image', sortable: true },
        { name: 'createdAt', label: 'Created At', field: 'createdAt' },
        { name: 'view', label: 'View', field: 'view' }
      ],
      records : [
        {
          name: 'Frozen Yogurt',
          description: 159,
          image: 6.0,
          createdAt: 24,
          id: 'adfasdfasdfadfa'
        },
        {
          name: 'Ice cream sandwich',
          description: 237,
          image: 9.0,
          createdAt: 37,
          id: 'dfasdfasdfasewe'
        },
        {
          name: 'Eclair',
          description: 262,
          image: 16.0,
          createdAt: 23,
          id: 'weqwerqwerwsadf'
        },
        {
          name: 'Cupcake',
          description: 305,
          image: 3.7,
          createdAt: 67,
          id: 'fghadffghxvbretwertwe'
        }, 
      ]

    }
  }, 
  computed:{
    ...mapGetters('repos', ['github_repos'])
  },
  components: {
      Dialog
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