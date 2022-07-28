<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control"><!-- @input =>which will be trigger everytime when we will make any change-->
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue )"
          class="textarea"
          ref="newNoteRef"
          placeholder="Add a new note"
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

const props = defineProps({
  modelValue: {
    type: String,
    requied: true
  }
})


/*
Notes
*/
const emit = defineEmits(['update:modelValue'])

</script>