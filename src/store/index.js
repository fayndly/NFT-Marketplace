import { createStore } from "vuex";
import screenSize from "./modules/screenSize";

import { artists } from "./modules/api/artists";
import { collections } from "./modules/api/collections";
import { nfts } from "./modules/api/nfts";

export default createStore({
  modules: { screenSize, artists, collections, nfts },
});
