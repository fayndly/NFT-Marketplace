import { createStore } from "vuex";
import screenSize from "./modules/screenSize";
import getArtist from "./modules/getArtist";

export default createStore({
  modules: { screenSize, getArtist },
});
