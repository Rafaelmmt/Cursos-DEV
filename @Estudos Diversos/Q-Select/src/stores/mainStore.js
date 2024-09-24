import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    anArray: ['armas', 'coletes', 'munições'],
    anObject:{ arma:'revolver', especie:'asd', marca:'asdasdasd', modelo:'asdasdas', situação:'asdasd', id:1 },
    arrayOfObjects: [
      { arma:'revolver', especie:'especie1', marca:'marca1', modelo:'modelo1', situacao:'A', id: 1 },
      { arma:'revolver', especie:'especie1', marca:'marca1', modelo:'modelo1', situacao:'A', id: 2 },
      { arma:'revolver', especie:'especie2', marca:'marca1', modelo:'modelo1', situacao:'B', id: 3 },
      { arma:'revolver', especie:'especie2', marca:'marca2', modelo:'modelo2', situacao:'A', id: 4 },
      { arma:'pistola', especie:'especie3', marca:'marca2', modelo:'modelo2', situacao:'A', id: 5 },
      { arma:'revolver', especie:'especie3', marca:'marca2', modelo:'modelo3', situacao:'B', id: 6 },
      { arma:'revolver', especie:'especie4', marca:'marca2', modelo:'modelo3', situacao:'B', id: 7 },
      { arma:'pistola', especie:'especie4', marca:'marca2', modelo:'modelo3', situacao:'A', id: 8 }
    ]

  }),
});
