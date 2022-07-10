import { ref } from 'vue'

export const useState = (initialValue: unknown) => {
  const state = ref(initialValue)
  const setState = (value: unknown) => {
    state.value = value
  }
  return {
    state,
    setState,
  }
}
