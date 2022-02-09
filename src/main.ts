import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Test1, Test2, Test3 } from "g-datav-lib";
console.log(Test1);

createApp(App)
  .use(store)
  .use(router)
  .use(Test1)
  .use(Test2)
  .use(Test3)
  .mount("#app");
