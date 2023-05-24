import artistCard from "@/components/ui/cards/artistCard";
import categoryCard from "@/components/ui/cards/categoryCard";
import NFTCard from "@/components/ui/cards/NFTCard";
import highlightedNFT from "@/components/ui/cards/highlightedNFT";
import collectionCard from "@/components/ui/cards/collectionCard";
import infoCard from "@/components/ui/cards/infoCard";

import rankings from "./rankings";

const components = [
  artistCard,
  categoryCard,
  NFTCard,
  highlightedNFT,
  collectionCard,
  infoCard,
];

components.push(...rankings);

export default components;
