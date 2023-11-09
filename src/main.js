// VUE IMP 
import { createApp } from 'vue'
import App from './App.vue'
// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
// ADD + MOUNT 
library.add(faCircleXmark)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


