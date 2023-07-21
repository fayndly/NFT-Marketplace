import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components";
import VIntersection from "./directives/VIntersection";
import VueLazyload from "vue-lazyload";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.directive("intersection", VIntersection);

app.use(store);
app.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: "/public/Loading_icon.gif",
  attempt: 1,
});
app.config.devtools = true;

app.use(router).mount("#app");
