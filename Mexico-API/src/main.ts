import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./index.css";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

pinia.use(({ store }) => {
  if (store.restore) {
    store.restore();
  }
});

app.mount("#app");
