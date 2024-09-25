<template>
  <div class="q-ma-xl">
    <q-table
      title="Armas"
      :rows="store.opFiltrada()"
      :columns="[
        { name: 'arma', label: 'Arma', field:'arma' },
        {name: 'marca', label: 'Marca', field: 'marca',},
        {name: 'especie', label: 'Espécie', field: 'especie',}
      ]"
    />
  </div>
</template>

<script setup>
// PINIA STORE
import { useMainStore } from 'src/stores/mainStore'
const store = useMainStore()
</script>