<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`"
  >
  <label
    v-if="label"
    class="label has-text-white"
  >
    {{label}}
  </label>
    <div class="field">
      <div class="control"><!-- @input =>which will be trigger everytime when we will make any change-->
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue )"
          class="textarea"
          ref="textNoteRef"
          :placeholder="placeholder"
          maxlength="100"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>
<script setup>

/*
props
*/

import { ref } from "vue"
import { vAutofocus } from '../../directives/vAutofocus'

const props = defineProps({
  modelValue: {
    type: String,
    requied: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type semething...'
  },
  label: {
    type: String
  }
})


/*
Notes
*/
const emit = defineEmits(['update:modelValue'])


/*
focusTextArea
*/
//when we are using the script setup pattern we need to expose methods if we want to be available to the parent component

// defining dataref fot the template ref 
const textNoteRef = ref(null)

const focusTextArea = () => {
   textNoteRef.value.focus()
}

defineExpose({
  focusTextArea
  })


</script>