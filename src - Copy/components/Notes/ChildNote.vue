<template>
    <div
      class="card mb-4"
    >
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <div class="has-text-right has-text-grey-light mt-2">
            <small> {{ characterLength }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <router-link
        :to="`/editNote/${ note.id }`"  
        href="#" class="card-footer-item">Edit</router-link>
        <a
          class="card-footer-item"
          href="#"
          @click.prevent="handleDeleteClicked"
        >Delete</a>
      </footer>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useStoreNotes } from "../../stores/storeNotes";

/*
store
*/
const storeNotes = useStoreNotes()

/*
props
*/
const props = defineProps({
  note:{
    type: Object,
    required: true
  }
})


const characterLength = computed( () => {
  let length = props.note.content.length
  let description = length > 1 ? 'chacacters' : 'character'

  return `${length} ${description}`
})

/*
handleDeleteClicked
*/
const handleDeleteClicked = () => {
  storeNotes.deleteNote(props.note.id)
}
</script>