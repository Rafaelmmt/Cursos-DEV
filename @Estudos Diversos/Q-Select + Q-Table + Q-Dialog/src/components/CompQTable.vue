<template>
  <div class="full-width q-pa-xl">
    <q-table
      title="FILMES"
      class="q-py-md q-px-xl"
      row-key="id"
      :rows="store.opFiltrada()"
      :columns="columns"
      :pagination="{ sortBy: 'nome', rowsPerPage: 5 }"
      :rows-per-page-options="[ 1, 5, 10, 0 ]"
    >
      <template #body="props">
        <q-tr :props="props" class="cursor-pointer" @click="openModel(props.row)">
          <q-td key="nome" class="row-tabela">{{ props.row.nome }}</q-td>
          <q-td key="diretor" class="row-tabela">{{ props.row.diretor }}</q-td>
          <q-td key="ano" class="row-tabela">{{ props.row.ano }}</q-td>
          <q-td key="nota" class="row-tabela">{{ props.row.nota }}</q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{selectedRow}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="alert=false" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// PINIA STORE
import { useMainStore } from 'src/stores/mainStore'
const store = useMainStore()

const columns = ref([
  { name: 'nome', label: 'Nome', field:'nome', sortable: true, align: 'center' },
  { name: 'diretor', label: 'Diretor', field: 'diretor', sortable: true, align: 'center' },
  { name: 'ano', label: 'Data de Lançamento', field:'ano', sortable: true, align: 'center' },
  { name: 'nota', label: 'Nota Site', field: 'nota', sortable: true, align: 'center' }
  
])

const alert = ref(false)
const selectedRow = ref({})
const openModel = (row) => {
  console.log('HELLO!')
  selectedRow.value = row
  alert.value = true
}  
</script>

<style>
.row-tabela {
  width: 25%;
  text-align: center;
}
</style>
