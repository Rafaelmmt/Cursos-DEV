const todoApp = {

  data() {
    return {
      listaDeTarefas: [],
      novaTarefa: {},
    }
  },

  methods: {
    addTask: function() {
      this.novaTarefa.realizada = false;
      this.listaDeTarefas.push(this.novaTarefa);
      this.novaTarefa = {};
    },

    clearAll: function() {
      this.listaDeTarefas = []
    }
  }
};

Vue.createApp(todoApp).mount('#app');