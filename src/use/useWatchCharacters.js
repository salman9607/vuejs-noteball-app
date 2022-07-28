import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newValue) => {//1 param => the data we wanna watch, //2 a callback function
    if(newValue.length === maxChars) {
      alert(`max characters allowed are ${maxChars} `);//`` => called template string
    }
  })
}