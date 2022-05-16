import {createApp} from 'vue'
import App from './App'
import components from '@/components/ui'
import router from "@/router/router";
import store from "@/components/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store).use(router).mount('#app')

