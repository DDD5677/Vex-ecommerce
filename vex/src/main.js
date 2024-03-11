import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Icon from "./components/icons/Icon.vue";
import darkButton from "./components/UI/darkButton.vue";
import input from "./components/UI/input.vue";
import brand from "./components/UI/BrandView.vue";
const app = createApp(App);
app.component("Icon", Icon);
app.component("DarkButton", darkButton);
app.component("MainInput", input);
app.component("brand", brand);
app.use(createPinia());
app.use(router);

app.mount("#app");
