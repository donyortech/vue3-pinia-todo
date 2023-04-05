import { createPinia } from "pinia"; //add package
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

//input use(createPinia())
createApp(App).use(createPinia()).mount("#app");
