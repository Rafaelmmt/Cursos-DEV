import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modals', () => {
  const showModal = ref(false)
  const hiddenClass = computed(() => showModal.value ? '' : 'hidden')
  // function increment() {
  //   count.value++
  // }

  return { showModal, hiddenClass }
})
