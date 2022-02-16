import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GDatav from "g-datav-lib";

createApp(App).use(store).use(router).use(GDatav).mount("#app");
