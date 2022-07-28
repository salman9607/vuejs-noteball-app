<template>
  <AddEditNoteVue
    v-model="textNote"
    bgColor="link"
    placeholder="Edit Note"
    label="Edit Note"
    >
      <template v-slot:buttons>
        <!-- click handler -->
        <button
          @click="$router.back()"
          class="button is-link is-light"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-link ml-2"
          :disabled="!textNote"
          @click="handleSaveClick"
        >
          Save Note
        </button>
      </template>
    </AddEditNoteVue>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNoteVue from '../components/Notes/AddEditNote.vue';
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes()


const textNote = ref('');

const route = useRoute()
const router = useRouter()

textNote.value = storeNotes.noteEditContent(route.params.id)

const handleSaveClick = () => {
  storeNotes.updateNote(route.params.id, textNote)
  router.push('/')
}
</script>