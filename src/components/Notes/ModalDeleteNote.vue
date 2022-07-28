<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete Note</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
imports
*/

import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from "../../stores/storeNotes";

/*
store
*/
const storeNotes = useStoreNotes()

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    noteId: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits();

  const closeModal = () => {
    emit('update:modelValue', false)
  }

/*
ClickOutside
*/
const modalCardRef = ref(null)
onClickOutside(modalCardRef, closeModal)

/*
  keyboard control
*/

const handleKeyboard = (e) => {
  console.log('closed');
    if (e.key === 'Escape') closeModal()
  }

// adding a event listner for the key up event
onMounted( () => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted( () => {
  document.removeEventListener('keyup', handleKeyboard)
})

</script>