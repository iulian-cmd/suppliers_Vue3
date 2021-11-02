import { Vue } from "vue";
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
// Import the Icon
import {
    Icon
} from "leaflet";
// Import the whole Leaflet CSS

createApp(App)
    .use(router)
    .mount('#app')

Vue.config.productionTip = false;

// Resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
