import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ConnectWalletPage from "@/views/ConnectWalletPage.vue";
import CreateAccountPage from "@/views/CreateAccountPage.vue";

import MarketPlacePage from "@/views/MarketPlacePage.vue";
import MarketplaceNfts from "@/components/routeChildren/marketplace/MarketplaceNfts.vue";
import MarketplaceCollections from "@/components/routeChildren/marketplace/MarketplaceCollections.vue";

import RankingsPage from "@/views/RankingsPage.vue";
import RankingsToday from "@/components/routeChildren/rankings/RankingsToday.vue";
import RankingWeek from "@/components/routeChildren/rankings/RankingWeek.vue";
import RankingsMonth from "@/components/routeChildren/rankings/RankingsMonth.vue";
import RankingsAllTime from "@/components/routeChildren/rankings/RankingsAllTime.vue";

import ArtistPage from "@/views/ArtistPage.vue";
import ArtistCreated from "@/components/routeChildren/artist/ArtistCreated.vue";
import ArtistOwned from "@/components/routeChildren/artist/ArtistOwned.vue";
import ArtistCollection from "@/components/routeChildren/artist/ArtistCollection.vue";

import NftPage from "@/views/NftPage.vue";
import CollectionPage from "@/views/CollectionPage.vue";
import TestPage from "@/views/TestPage.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { scrollToTop: true },
  },
  {
    path: "/connect-wallet",
    name: "Connect wallet",
    component: ConnectWalletPage,
    meta: { scrollToTop: true },
  },
  {
    path: "/create-account",
    name: "Create account",
    component: CreateAccountPage,
    meta: { scrollToTop: true },
  },
  {
    path: "/marketplace/:query?",
    name: "Marketplace",
    redirect: { name: "MarketplaceNfts" },
    component: MarketPlacePage,
    meta: { scrollToTop: true },
    children: [
      {
        props: true,
        meta: { scrollToTop: false },
        path: "nfts",
        name: "MarketplaceNfts",
        component: MarketplaceNfts,
      },
      {
        props: true,
        meta: { scrollToTop: false },
        path: "collections",
        name: "MarketplaceCollections",
        component: MarketplaceCollections,
      },
    ],
  },
  {
    path: "/rankings",
    name: "Rankings",
    redirect: { name: "RankingsToday" },
    component: RankingsPage,
    meta: { scrollToTop: true },
    children: [
      {
        meta: { scrollToTop: false },
        path: "today",
        name: "RankingsToday",
        component: RankingsToday,
      },
      {
        meta: { scrollToTop: false },

        path: "this-week",
        name: "RankingWeek",
        component: RankingWeek,
      },
      {
        meta: { scrollToTop: false },
        path: "this-month",
        name: "RankingsMonth",
        component: RankingsMonth,
      },
      {
        meta: { scrollToTop: false },
        path: "all-time",
        name: "RankingsAllTime",
        component: RankingsAllTime,
      },
    ],
  },
  {
    path: "/artist/:id",
    name: "Artist",
    redirect: { name: "ArtistCreated" },
    component: ArtistPage,
    meta: { scrollToTop: true },
    children: [
      {
        path: "created",
        name: "ArtistCreated",
        component: ArtistCreated,
        meta: { scrollToTop: false },
      },
      {
        path: "owned",
        name: "ArtistOwned",
        component: ArtistOwned,
        meta: { scrollToTop: false },
      },
      {
        path: "collection",
        name: "ArtistCollection",
        component: ArtistCollection,
        meta: { scrollToTop: false },
      },
    ],
  },
  {
    path: "/nft/:id",
    name: "Nft",
    component: NftPage,
    meta: { scrollToTop: true },
  },
  {
    path: "/collection/:id",
    name: "Collection",
    component: CollectionPage,
    meta: { scrollToTop: true },
  },
  {
    path: "/test",
    name: "Test",
    component: TestPage,
    meta: { scrollToTop: true },
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    meta: { scrollToTop: true },
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.redirectedFrom || to.meta.scrollToTop) {
      return { top: 0 };
    }
    return;
  },
});

export default router;
