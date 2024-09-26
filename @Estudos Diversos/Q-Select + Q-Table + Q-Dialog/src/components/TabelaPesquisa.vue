<template>
  <div class="q-ma-xl">
    <q-table
      title="Armas"
      row-key="name"
      :rows="store.opFiltrada()"
      :columns="columns"
    >
      <template #body-cell-arma="props">
        <q-td :props="props">
          <div>
            <q-btn color="purple" :label="props.value" @click="openModel(props.row)"></q-btn>
          </div>
          <div class="my-table-details">
            {{ props.row.details }}
          </div>
        </q-td>
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
  { name: 'arma', label: 'Arma', field:'arma' },
  { name: 'marca', label: 'Marca', field: 'marca' },
  { name: 'especie', label: 'Espécie', field: 'especie' }
])

const alert = ref(false)
const selectedRow = ref({})
const openModel = (row) => {
  console.log('HELLO!')
  selectedRow.value = row
  alert.value = true
}  
</script>