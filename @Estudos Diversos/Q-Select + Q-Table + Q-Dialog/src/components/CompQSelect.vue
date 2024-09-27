<template>

  <div class="full-width row q-px-xl">
    <q-select
      class="col q-mx-md"
      label="Nome"
      v-model="store.opSelecionada.nome"
      :options="store.opMenu('nome')"
      clearable
  
    />
    <q-select
      class="col q-mx-md"
      label="Info 01"
      v-model="store.opSelecionada.info01"
      :options="store.opMenu('info01')"
      clearable
  
    />
    <q-select
      class="col q-mx-md"
      label="Info 02"
      v-model="store.opSelecionada.info02"
      :options="store.opMenu('info02')"
      clearable
  
    />
    <q-select
      class="col q-mx-md"
      label="Info 03"
      v-model="store.opSelecionada.info03"
      :options="store.opMenu('info03')"
      clearable
    />
    <q-select
      class="col q-mx-md"
      label="Info 04"
      v-model="store.opSelecionada.info04"
      :options="store.opMenu('info04')"
      clearable
    />
  </div>

</template>

<script setup>
// PINIA STORE
import { useMainStore } from 'src/stores/mainStore'
const store = useMainStore()
</script>