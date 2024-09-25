import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    anArray: ['armas', 'coletes', 'munições'],
    anObject:{ arma:'revolver', especie:'asd', marca:'asdasdasd', modelo:'asdasdas', situação:'asdasd', id:1 },
    arrayOfObjects: [
      { arma:'revolver', especie:'especie1', marca:'marca1', modelo:'modelo1', situacao:'A', id: 1, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'carabina', especie:'especie1', marca:'marca1', modelo:'modelo1', situacao:'C', id: 2, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'revolver', especie:'especie2', marca:'marca1', modelo:'modelo1', situacao:'B', id: 3, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'revolver', especie:'especie2', marca:'marca2', modelo:'modelo2', situacao:'A', id: 4, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'pistola', especie:'especie3', marca:'marca2', modelo:'modelo2', situacao:'A', id: 5, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'zabata', especie:'especie3', marca:'marca2', modelo:'modelo3', situacao:'B', id: 6, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'revolver', especie:'especie4', marca:'marca2', modelo:'modelo3', situacao:'B', id: 7, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'pistola', especie:'especie5', marca:'marca2', modelo:'modelo3', situacao:'A', id: 8, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'revolver', especie:'especie4', marca:'marca2', modelo:'modelo4', situacao:'B', id: 9, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'zabata', especie:'especie5', marca:'marca2', modelo:'modelo4', situacao:'A', id: 10, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'pistola', especie:'especie4', marca:'marca1', modelo:'modelo2', situacao:'B', id: 11, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'pistola', especie:'especie6', marca:'marca2', modelo:'modelo3', situacao:'D', id: 12, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'carabina', especie:'especie2', marca:'marca2', modelo:'modelo2', situacao:'A', id: 13, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'revolver', especie:'especie6', marca:'marca1', modelo:'modelo3', situacao:'B', id: 14, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 },
      { arma:'pistola', especie:'especie4', marca:'marca1', modelo:'modelo1', situacao:'C', id: 15, outrainfo1:'marca1', outrainfo2:'modelo1', outrainfo3:'A', outrainfo4: 1 }
    ],
    opSelecionada: {}

  }),
  actions: {

    opMenu(campo) {
      // Filtro cumulativo de todas as seleções feitas
      const opcoesFiltradas = this.arrayOfObjects.filter(option => {
        return Object.keys(this.opSelecionada).every(field => {
          // Filtra apenas por campos que tenham um valor selecionado
          return !this.opSelecionada[field] || option[field] === this.opSelecionada[field];
        });
      });
    
      // Retorna as opções únicas para o seletor baseado na chave (campo)
      return [...new Set(opcoesFiltradas.map(option => option[campo]))].sort() 
    },

    opFiltrada() {
      return this.arrayOfObjects.filter(item => {
        return Object.keys(this.opSelecionada).every(key => 
          !this.opSelecionada[key] || item[key] === this.opSelecionada[key]
        );
      });
    }
  }
});
