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
        <a href="#" class="card-footer-item">Edit</a>
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


/*
props
*/
const props = defineProps({
  note:{
    type: Object,
    required: true
  }
})

/**
emits
*/
const emit = defineEmits(['deleteClicked'])

const characterLength = computed( () => {
  let length = props.note.content.length
  let description = length > 1 ? 'chacacters' : 'character'

  return `${length} ${description}`
})

/*
handleDeleteClicked
*/
const handleDeleteClicked = () => {
  emit('deleteClicked', props.note.id)
}
</script>