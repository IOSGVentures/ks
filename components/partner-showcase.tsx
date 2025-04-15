"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function PartnerShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPartner, setCurrentPartner] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categories = [
    { id: "all", name: "All" },
    { id: "l1", name: "Layer 1" },
    { id: "l2", name: "Layer 2" },
    { id: "infra", name: "Infrastructure" },
    { id: "data", name: "Data" },
  ];

  const partners = [
    {
      id: "arbitrum",
      name: "Arbitrum",
      logo: "/partners/arbitrum.webp",
      description: "Arbitrum, created by the Offchain Labs team, is an Ethereum Layer2 scaling solution based on Optimistic Rollup technology.",
      lookingFor:
        "Arbitrum is looking for teams building their own app-chains with Orbit and those keen to leverage Stylus. They welcome innovative projects spanning across DeFi, Gaming, RWA, and Social applications.",
      website: "https://arbitrum.io/",
      category: "l2",
    },
    {
      id: "arweave",
      name: "Arweave",
      logo: "/partners/arweave.webp",
      description:
        "Arweave is a decentralized data storage protocol built on blockweave technology. It is developing an underlying network where data can be stored forever and accessed on its permaweb, a secondary layer where data is accessible in a human-readable manner (e.g. via web browsers).",
      lookingFor:
        "Arweave is seeking developers who believe in and want to collaborate on building Permaweb applications using the infrastructure of Arweave, AO, and ArFleet. Developers are encouraged to share their ideas directly through github.com/ArweaveOasis/ao-product-proposal/discussions.",
      website: "https://www.arweave.org/",
      category: "infra",
    },
    {
      id: "avalanche",
      name: "Avalanche",
      logo: "/partners/avalanche.webp",
      description:
        "Avalanche is a platform created by Ava Labs for creating custom blockchain networks and decentralized applications (dApps). Its novel consensus protocol, Subnet infrastructure, and HyperSDK toolkit enable Web3 developers to easily launch powerful, custom blockchain solutions.",
      lookingFor: "Avalanche is actively looking for builders of consumer apps, DeFi primitives, and custom appchains.",
      website: "https://www.avalabs.org/",
      category: "l1",
    },
    {
      id: "aztec",
      name: "Aztec",
      logo: "/partners/aztec.webp",
      description: "Aztec Network is the first private ZK-rollup on Ethereum, enabling decentralized applications to access privacy and scale.",
      lookingFor:
        "Aztec Network is building a privacy-first zkRollup on Ethereum and developing Noir Lang - the easiest zk circuit language available. They are supporting developers building with Noir or on the Aztec network through their grant program.",
      website: "https://aztec.network/",
      category: "l2",
    },
    {
      id: "babylon",
      name: "Babylon",
      logo: "/partners/babylon.webp",
      description: "Babylon Labs focuses on Bitcoin security-sharing protocols with a vision of building a Bitcoin-secured decentralized world.",
      lookingFor: "Babylon is interested in developers building chains using the Cosmos SDK, OP and Arbitrum stack.",
      website: "https://babylonlabs.io/",
      category: "l2",
    },
    {
      id: "bnb",
      name: "BNB Chain",
      logo: "/partners/bnb.webp",
      description: "BNB Chain is a blockchain ecosystem that combines BNB Beacon Chain and BNB Smart Chain, offering high throughput and low fees.",
      lookingFor:
        "BNB Chain is seeking developers ready to contribute to their ecosystem. Interested builders can explore their community-driven wishlist at github.com/bnb-chain/community-contributions/issues.",
      website: "https://www.bnbchain.org/",
      category: "l1",
    },
    {
      id: "monad",
      name: "Monad",
      logo: "/partners/monad.webp",
      description: "Monad is a high-performance Layer 1 blockchain designed for maximum throughput and minimal latency.",
      lookingFor: "Monad is on the lookout for innovative consumer dApps that require high-performance execution.",
      website: "https://www.monad.xyz/",
      category: "l1",
    },
    {
      id: "scroll",
      name: "Scroll",
      logo: "/partners/scroll.webp",
      description:
        "Scroll is a zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools. It processes transactions off-chain and posts succinct proofs of correctness on-chain, resulting in higher throughput and lower costs compared to the Ethereum base layer.",
      lookingFor:
        "Scroll is laser-focused on supporting projects that redefine scalability, decentralization, and user experience. They're here to pave the way for builders with zk-powered tools, multichain infrastructure, and next-gen DeFi solutions—pushing Ethereum's potential even further.",
      website: "https://scroll.io/",
      category: "l2",
    },
    {
      id: "superfluid",
      name: "Superfluid",
      logo: "/partners/superfluid.webp",
      description: "Superfluid is a Web3 streaming payments protocol for handling subscriptions, salaries, rewards, or any other composable stream of value on a per-second basis.",
      lookingFor:
        "Superfluid wants to support projects that natively integrate money streaming as a core mechanic. They’re looking for applications where continuous, programmable payments unlock new user or protocol behaviors.",
      website: "https://www.superfluid.finance/",
      category: "infra",
    },
    {
      id: "fhenix",
      name: "Fhenix",
      logo: "/partners/fhenix.webp",
      description:
        "Fhenix is the first confidential blockchain powered by fully homomorphic encryption. Through the usage of fhEVM, Fhenix enables Ethereum developers to seamlessly build encrypted smart contracts and perform encrypted computation of data, all while using Solidity and other familiar, easy-to-use tools.",
      lookingFor:
        "Fhenix is looking for developers interested in building full-stack applications that use encrypted computation. Their areas of interest include on-chain social media, dark pools, private lending, and confidential voting systems.",
      website: "https://www.fhenix.io/",
      category: "l2",
    },
    {
      id: "gmgn",
      name: "GMGN",
      logo: "/partners/gmgn.webp",
      description:
        "GMGN.Ai is a Meme token tracking and analysis platform that aims to provide traders with trading signals through information such as tracking smart money addresses and token money flow analysis.",
      lookingFor:
        "GMGN is looking for builders who are creating new trading automation tools and innovative on-chain trading experiences. They provide powerful APIs and resources to help developers build next-gen trading solutions and push the boundaries of what's possible in on-chain trading.",
      website: "https://gmgn.ai/",
      category: "infra",
    },
    {
      id: "hyperbolic",
      name: "Hyperbolic",
      logo: "/partners/hyperbolic.webp",
      description: "Hyperbolic is a decentralized GPU marketplace powering AI workloads like inference, training, and other compute-heavy applications.",
      lookingFor: "They are looking to support teams building the next generation of AI infra and applications.",
      website: "https://www.hyperbolic.xyz/",
      category: "infra",
    },
    {
      id: "mantle",
      name: "Mantle",
      logo: "/partners/mantle.webp",
      description: "Mantle is a high-performance Ethereum layer-2 network built with a modular architecture that delivers low fees and high security.",
      lookingFor:
        "Mantle's Scouts Program is supporting early stage projects in the consumer, payments, and AI verticals & projects integrating core ecosystem assets (mETHProtocol & FunctionBTC). The Mantle Scouts Program is open to builders working across these verticals & shortlisted teams will gain access to further ecosystem support.",
      website: "https://www.mantle.xyz/",
      category: "l2",
    },
    {
      id: "starknet",
      name: "Starknet",
      logo: "/partners/starknet.webp",
      description:
        "Starknet is a permissionless ZK-Rollup. It operates as an L2 network over Ethereum, enabling any dApp to achieve unlimited scalability for its computations without compromising Ethereum's composability and security.",
      lookingFor:
        "Starknet hopes to see apps that create meaningful social connections and solve real coordination problems through invisible crypto rails, enabling communities to interact and capture value in entirely new ways.",
      website: "https://www.starknet.io/",
      category: "l2",
    },
    {
      id: "thegraph",
      name: "The Graph",
      logo: "/partners/thegraph.webp",
      description:
        "The Graph is a protocol for indexing and querying data from blockchains. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.",
      lookingFor:
        "The Graph is seeking builders across EVM chains, Solana and more to create bold new data-powered applications for use cases in DeFi, NFTs and governance, using technology like Subgraphs and Substreams.",
      website: "https://thegraph.com/",
      category: "infra",
    },
    {
      id: "bob",
      name: "Build on Bitcoin",
      logo: "/partners/bob.webp",
      description: "BOB（Build On Bitcoin） is an EVM rollup stack with native Bitcoin support. Build decentralized apps on top of Ordinals, Lightning, Nostr.",
      lookingFor:
        "BOB seeks projects that integrate Bitcoin into DeFi via EVM compatibility, enabling it to interact with smart contracts and dApps. They are particularly interested in scalable, interoperable solutions that unlock new Bitcoin use cases such as lending, trading, and other decentralized protocols.",
      website: "https://www.gobob.xyz/",
      category: "l2",
    },
    {
      id: "coingecko",
      name: "CoinGecko",
      logo: "/partners/coingecko.webp",
      description: "CoinGecko provides real-time crypto and NFT data APIs—price feeds, trading volume, pairs, metadata, and more.",
      lookingFor: "Kickstarter teams may be eligible for a 30% discount to start building with one of Web3’s most trusted data sources.",
      website: "https://www.coingecko.com/",
      category: "data",
    },
  ];

  const filteredPartners = partners
    .filter((partner) => {
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || partner.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div ref={ref} className="relative">
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-center">
        {/* <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search partners..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div> */}

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} className="cursor-pointer" onClick={() => setSelectedCategory(category.id)}>
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredPartners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden transition-all hover:shadow-md hover:scale-105 cursor-pointer h-full" onClick={() => setCurrentPartner(partner as any)}>
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-3 h-full">
                    <div className="relative w-16 h-16 bg-muted/30 rounded-lg p-2 flex items-center justify-center">
                      <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={60} height={60} className="object-contain rounded-md" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium">{partner.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <div className="relative w-10 h-10 bg-muted/30 rounded-lg p-1 flex items-center justify-center">
                      <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={32} height={32} className="object-contain" />
                    </div>
                    {partner.name}
                  </DialogTitle>
                  <DialogDescription>
                    <Badge className="mt-2">{categories.find((c) => c.id === partner.category)?.name || partner.category}</Badge>
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-2">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">ABOUT</h4>
                    <p>{partner.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">LOOKING FOR</h4>
                    <p>{partner.lookingFor}</p>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>

      {filteredPartners.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No partners found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
