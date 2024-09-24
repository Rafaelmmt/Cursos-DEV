<template>
  <q-page class="flex flex-center row" padding>
    <QSelect />
    <QTable />
    
    <div>
      {{ opFiltrada() }}
    </div>
  </q-page>
</template>

<script setup>
import QSelect from 'src/components/QSelect.vue'
import QTable from 'src/components/QTable.vue'
</script>
