<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            ref="newNoteRef"
            placeholder="Add a new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deletenote"
    />
  </div>
</template>


<script setup>
/*
imports
*/
import { ref } from "vue";
import Note from "@/components/Notes/ChildNote.vue";

/*
Notes
*/

  const newNote = ref('')
  const newNoteRef = ref(null)

  const notes = ref([
    {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
    },
    {
    id: 'id2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
    },
    {
    id: 'id3',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
    },
  ])

  const addNote = () => {
      let currentDate = new Date().getTime(),
          id = currentDate.toString()

      let note = {
        id: id,
        content: newNote.value
      }

      notes.value.unshift(note);//unshift will make it to the top

      newNote.value = ''

      newNoteRef.value.focus()
  }

  const deletenote = idToDelete => {
    notes.value = notes.value.filter(note => { return note.id != idToDelete })
  }
</script>