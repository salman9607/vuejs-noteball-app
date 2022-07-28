import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '../views/ViewNotes.vue'
import ViewStats from '../views/ViewStats.vue'
import EditNote from '../views/ViewEditNote.vue'

// history: two types 1 . WebHistory WebHasHHistory
// webhistory: will use realUrl in the browser when we will navigate across pages
//WebHasHHistory base use # before baseUrl i-e => http://127.0.0.1:5173/#/about

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/editNote/:id',
    name: 'edit-note',
    component: EditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes 
})

export default router