import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// Importar componentes del Accordion
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Carousel from 'primevue/carousel'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

// Registrar componentes globalmente
app.component('Accordion', Accordion)
app.component('AccordionPanel', AccordionPanel)
app.component('AccordionHeader', AccordionHeader)
app.component('AccordionContent', AccordionContent)
app.component('Carousel', Carousel)

// Inicializar AOS cuando la app monte
app.mixin({
    mounted() {
        AOS.init({
            duration: 1000,   // duración de la animación en ms
            once: true        // si quieres que se ejecute solo una vez
        })
    }
})

app.mount('#app')
