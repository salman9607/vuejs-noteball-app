<template>
  {{newNote}}

  <div class="notes">

    <AddEditNoteVue
    v-model="newNote"
    >
      <template v-slot:buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNoteVue>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>


<script setup>
/*
imports
*/
import { ref } from "vue";
import Note from "@/components/Notes/ChildNote.vue";
import AddEditNoteVue from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";

/*
store
*/
const storeNotes = useStoreNotes()

/*
Notes
*/

  const newNote = ref('')
  const newNoteRef = ref(null)


  const addNote = () => {
    storeNotes.addNotes(newNote.value)

    newNote.value = ''
    newNoteRef.value.focus()
  }

  // const deletenote = idToDelete => {
  //   notes.value = notes.value.filter(note => { return note.id != idToDelete })
  // }
</script>