<template>

  <div class="notes">

    <AddEditNoteVue
    v-model="newNote"
    ref="addEditNoteRef"
    placeholder="Edit Note"
    label="Add Note"
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
  const addEditNoteRef = ref(null)


  const addNote = () => {
    storeNotes.addNotes(newNote.value)

    newNote.value = ''
    addEditNoteRef.value.focusTextArea()//with the help of templateref we are calling the methid in child component

  }

  // const deletenote = idToDelete => {
  //   notes.value = notes.value.filter(note => { return note.id != idToDelete })
  // }
</script>