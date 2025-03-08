import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Clock, ArrowRight, Shield, Tag } from "lucide-react"
import { Footer } from "@/components/footer"
import { nfts } from "@/data/nfts"
import { NFTCard } from "@/components/nft-card"

export default function NFTDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the NFT data based on the ID
  const nft = nfts.find((n) => n.id === params.id) || nfts[0]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0.5 bg-black rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                N
              </div>
            </div>
            <span className="font-bold text-xl">NEXUS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="text-zinc-400 hover:text-white transition-colors">
              Marketplace
            </Link>
            <Link href="/collections" className="text-zinc-400 hover:text-white transition-colors">
              Collections
            </Link>
            <Link href="/artists" className="text-zinc-400 hover:text-white transition-colors">
              Artists
            </Link>
            <Link href="/how-to-buy" className="text-zinc-400 hover:text-white transition-colors">
              How to Buy
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
            Connect Wallet
          </Button>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <Image
                    src={
                      nft.image ||
                      "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=600&auto=format&fit=crop"
                    }
                    alt={nft.name}
                    width={600}
                    height={600}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">NFT Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Contract Address</span>
                    <span className="font-mono">0x1a2b...3c4d</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Token ID</span>
                    <span>{params.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Token Standard</span>
                    <span>ERC-721</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Blockchain</span>
                    <span>Ethereum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Creator Royalties</span>
                    <span>5%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <Link href="/collections" className="text-purple-400 text-sm">
                  Digital Collection
                </Link>
                <span className="text-zinc-600">•</span>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Eye className="h-4 w-4" />
                  4.2K views
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-2">{nft.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                  <span>
                    Created by{" "}
                    <Link href="#" className="text-purple-400">
                      {nft.creator}
                    </Link>
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 mb-8">
                This unique digital artwork explores the intersection of technology and creativity in the digital age.
                Each piece is meticulously crafted with attention to detail, creating a mesmerizing visual experience
                that pushes the boundaries of digital art.
              </p>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-zinc-400">Current Price</p>
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-bold">{nft.price} ETH</p>
                      <p className="text-zinc-400">≈ $4,429.87</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-full">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Sale ends in 5h 12m</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    Buy Now
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 border-zinc-700 hover:bg-zinc-800">
                    Place Bid
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="description">
                <TabsList className="bg-zinc-900 border border-zinc-800">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="properties">Properties</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <p className="text-zinc-400">
                      This extraordinary NFT is part of the "Digital Dreamscape" collection, representing the
                      convergence of art and technology in the digital realm. The piece explores themes of
                      consciousness, reality, and the digital experience through vibrant colors and intricate details.
                    </p>
                    <p className="text-zinc-400 mt-4">
                      Created using a combination of 3D modeling, algorithmic generation, and hand-drawn elements, this
                      NFT pushes the boundaries of what's possible in digital art. Each element has been meticulously
                      crafted to create a cohesive and immersive visual experience.
                    </p>
                    <p className="text-zinc-400 mt-4">
                      Owning this NFT grants you exclusive access to future drops in the collection and membership in
                      the Digital Dreamscape community.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="properties" className="mt-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="border border-purple-500/30 bg-purple-500/5 rounded-lg p-3 text-center">
                        <p className="text-xs text-purple-400 mb-1">BACKGROUND</p>
                        <p className="font-medium">Cosmic Void</p>
                        <p className="text-xs text-zinc-500 mt-1">12% have this trait</p>
                      </div>
                      <div className="border border-cyan-500/30 bg-cyan-500/5 rounded-lg p-3 text-center">
                        <p className="text-xs text-cyan-400 mb-1">EYES</p>
                        <p className="font-medium">Neon Glow</p>
                        <p className="text-xs text-zinc-500 mt-1">8% have this trait</p>
                      </div>
                      <div className="border border-purple-500/30 bg-purple-500/5 rounded-lg p-3 text-center">
                        <p className="text-xs text-purple-400 mb-1">OUTFIT</p>
                        <p className="font-medium">Digital Armor</p>
                        <p className="text-xs text-zinc-500 mt-1">15% have this trait</p>
                      </div>
                      <div className="border border-cyan-500/30 bg-cyan-500/5 rounded-lg p-3 text-center">
                        <p className="text-xs text-cyan-400 mb-1">ACCESSORY</p>
                        <p className="font-medium">Holographic Visor</p>
                        <p className="text-xs text-zinc-500 mt-1">5% have this trait</p>
                      </div>
                      <div className="border border-purple-500/30 bg-purple-500/5 rounded-lg p-3 text-center">
                        <p className="text-xs text-purple-400 mb-1">RARITY</p>
                        <p className="font-medium">Legendary</p>
                        <p className="text-xs text-zinc-500 mt-1">3% have this trait</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="mt-4">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Tag className="h-5 w-5 text-purple-400 mt-1" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">Listed for 2.45 ETH</p>
                            <span className="text-zinc-500 text-sm">2 hours ago</span>
                          </div>
                          <p className="text-zinc-400 text-sm">
                            by{" "}
                            <Link href="#" className="text-purple-400">
                              {nft.creator}
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Shield className="h-5 w-5 text-cyan-400 mt-1" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">Minted</p>
                            <span className="text-zinc-500 text-sm">2 days ago</span>
                          </div>
                          <p className="text-zinc-400 text-sm">
                            by{" "}
                            <Link href="#" className="text-purple-400">
                              {nft.creator}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <section className="mt-20">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">More from this collection</h2>
                <p className="text-zinc-400">Explore other unique NFTs from the same collection</p>
              </div>
              <Link
                href="/collections"
                className="text-purple-400 flex items-center gap-1 hover:text-purple-300 transition-colors"
              >
                View Collection <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nfts.slice(0, 4).map((nft) => (
                <NFTCard
                  key={nft.id}
                  id={nft.id}
                  name={nft.name}
                  creator={nft.creator}
                  price={nft.price}
                  image={nft.image}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

