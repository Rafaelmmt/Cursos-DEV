<template>
  <div>
    <q-select
      class="col q-ma-xl"
      label="Arma"
      v-model="opSelecionada.arma"
      :options="opMenu('arma')"
      clearable
  
    />
    <q-select
      class="col q-ma-xl"
      label="Especie"
      v-model="opSelecionada.especie"
      :options="opMenu('especie')"
      clearable
  
    />
    <q-select
      class="col q-ma-xl"
      label="Marca"
      v-model="opSelecionada.marca"
      :options="opMenu('marca')"
      clearable
    />
    <q-select
      class="col q-ma-xl"
      label="Modelo"
      v-model="opSelecionada.modelo"
      :options="opMenu('modelo')"
      clearable
    />
    <q-select
      class="col q-ma-xl"
      label="Situação"
      v-model="opSelecionada.situacao"
      :options="opMenu('situacao')"
      clearable
    />
    <q-select
      class="col q-ma-xl"
      label="ID"
      v-model="opSelecionada.id"
      :options="opMenu('id')"
      clearable
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QSelect from 'src/components/QSelect.vue';

// PINIA STORE
import { useMainStore } from 'src/stores/mainStore'
const store = useMainStore()

const opSelecionada = ref({})

const opMenu = (campo) => {
  // Filtro cumulativo de todas as seleções feitas
  const opcoesFiltradas = store.arrayOfObjects.filter(option => {
    return Object.keys(opSelecionada.value).every(field => {
      // Filtra apenas por campos que tenham um valor selecionado
      return !opSelecionada.value[field] || option[field] === opSelecionada.value[field];
    });
  });

  // Retorna as opções únicas para o seletor baseado na chave (campo)
  return [...new Set(opcoesFiltradas.map(option => option[campo]))].sort() 
}

const opFiltrada = () => {
  return store.arrayOfObjects.filter(item => {
    return Object.keys(opSelecionada.value).every(key => 
      !opSelecionada.value[key] || item[key] === opSelecionada.value[key]
    );
  });
}
</script>