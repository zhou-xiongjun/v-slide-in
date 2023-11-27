import { createApp } from "vue";
import App from "./App.vue";
import vSlideIn from "./directive/vSlideIn.js";

createApp(App).directive("slide-in", vSlideIn).mount("#app");
