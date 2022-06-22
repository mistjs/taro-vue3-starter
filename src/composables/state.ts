import type { Ref } from "vue"
import { ref } from "vue"
interface UseStateType<T>{
  state:Ref<T>;
  setState:(value:T) => void;
}


export const useState = <T>(initialValue:T):UseStateType<T> => {
  const state = ref(initialValue);
  const setState = (value:T) => {
    // @ts-ignore
    state.value = value;
  }
  return {
    // @ts-ignore
    state,
    setState
  }
}
