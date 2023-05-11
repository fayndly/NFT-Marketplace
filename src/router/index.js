import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/connect-wallet",
    name: "Connect wallet",
    component: () => import("@/views/ConnectWalletPage.vue"),
  },
  {
    path: "/create-account",
    name: "Create account",
    component: () => import("@/views/CreateAccountPage.vue"),
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    component: () => import("@/views/MarketPlacePage.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/rankings",
    name: "Rankings",
    component: () => import("@/views/RankingsPage.vue"),
  },
  {
    path: "/artist/:id",
    name: "Artist",
    // redirect: "/artist/:id/created",
    redirect: (to) => `/artist/${to.params.id}/created`,
    component: () => import("@/views/ArtistPage.vue"),
    children: [
      {
        path: "created",
        name: "ArtistCreated",
        component: () =>
          import("@/components/routeChildren/artist/ArtistCreated.vue"),
      },
      {
        path: "owned",
        name: "ArtistOwned",
        component: () =>
          import("@/components/routeChildren/artist/ArtistOwned.vue"),
      },
      {
        path: "collection",
        name: "ArtistCollection",
        component: () =>
          import("@/components/routeChildren/artist/ArtistCollection.vue"),
      },
    ],
  },
  {
    path: "/nft/:id",
    name: "Nft",
    component: () => import("@/views/NftPage.vue"),
  },
  {
    path: "/collection/:id",
    name: "Collection",
    component: () => import("@/views/CollectionPage.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/TestPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("@/views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
