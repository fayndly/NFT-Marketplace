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
    redirect: () => `/marketplace/marketplace-nfts`,
    component: () => import("@/views/MarketPlacePage.vue"),
    children: [
      {
        path: "marketplace-nfts",
        name: "MarketplaceNfts",
        component: () =>
          import("@/components/routeChildren/marketplace/MarketplaceNfts.vue"),
      },
      {
        path: "marketplace-collections",
        name: "MarketplaceCollections",
        component: () =>
          import(
            "@/components/routeChildren/marketplace/MarketplaceCollections.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/rankings",
    name: "Rankings",
    redirect: () => `/rankings/today`,
    component: () => import("@/views/RankingsPage.vue"),
    children: [
      {
        path: "today",
        name: "RankingsToday",
        component: () =>
          import("@/components/routeChildren/rankings/RankingsToday.vue"),
      },
      {
        path: "this-week",
        name: "RankingWeek",
        component: () =>
          import("@/components/routeChildren/rankings/RankingWeek.vue"),
      },
      {
        path: "this-month",
        name: "RankingsMonth",
        component: () =>
          import("@/components/routeChildren/rankings/RankingsMonth.vue"),
      },
      {
        path: "all-time",
        name: "RankingsAllTime",
        component: () =>
          import("@/components/routeChildren/rankings/RankingsAllTime.vue"),
      },
    ],
  },
  {
    path: "/artist/:id",
    name: "Artist",
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
