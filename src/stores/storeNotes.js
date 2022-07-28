import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'SSLorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
          },
          {
          id: 'id2',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
          },
          {
          id: 'id3',
          content: 'SSLorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
          },
      ]
    }
  },

  actions: {
    addNotes(value) {
      let currentDate = new Date().getTime(),
          id = currentDate.toString()

      let note = {
        id: id,
        content: value
      }

      this.notes.unshift(note);//unshift will make it to the top
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => { return note.id != idToDelete })
    },
    updateNote(id, content){

      let index = this.notes.findIndex(note => note.id === id )
      this.notes[index].content = content
    }
  },
  getters: {
    noteEditContent: (state) => {// this is an object proery assigned to a function
      return (id) => {
        return state.notes.filter(note => { return note.id === id })[0].content
      }
    }
  }
  
})