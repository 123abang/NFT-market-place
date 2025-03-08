import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, Eye, Shield, Tag, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { collections } from "@/data/collections"
import { nfts } from "@/data/nfts"
import { NFTCard } from "@/components/nft-card"

export default function CollectionDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the collection data based on the ID
  const collection = collections.find((c) => c.id === params.id) || collections[0]

  // Filter NFTs that belong to this collection (in a real app, this would be from your database)
  const collectionNfts = nfts.slice(0, 12) // Just using the first 12 NFTs for demo purposes

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
            <Link href="/collections" className="text-white transition-colors">
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

      <main>
        <section className="relative">
          <div className="h-64 w-full relative">
            <Image
              src={collection.banner || "/placeholder.svg?height=400&width=1200"}
              alt={collection.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          </div>

          <div className="container mx-auto px-4 relative -mt-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-black">
                <Image
                  src={collection.logo || "/placeholder.svg?height=128&width=128"}
                  alt={collection.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{collection.name}</h1>
                    <div className="flex items-center gap-4">
                      <p className="text-zinc-400">
                        by{" "}
                        <Link href={`/artists/1`} className="text-purple-400 hover:underline">
                          {collection.creator}
                        </Link>
                      </p>
                      <div className="flex items-center gap-1 text-zinc-400">
                        <Users className="h-4 w-4" />
                        <span>10.2K owners</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      <Heart className="h-4 w-4 mr-2" />
                      Favorite
                    </Button>
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                <p className="text-zinc-400 mt-4 max-w-3xl">{collection.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div>
                <p className="text-sm text-zinc-500">Floor Price</p>
                <p className="text-2xl font-bold">{collection.floor} ETH</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Volume Traded</p>
                <p className="text-2xl font-bold">{collection.volume} ETH</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Items</p>
                <p className="text-2xl font-bold">{collection.items}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Owners</p>
                <p className="text-2xl font-bold">{Math.floor(collection.items * 0.4)}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="items">
            <TabsList className="bg-zinc-900 border border-zinc-800 mb-6">
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="items">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Recently Listed</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collectionNfts.map((nft) => (
                  <NFTCard
                    key={nft.id}
                    id={nft.id}
                    name={nft.name}
                    creator={collection.creator}
                    price={nft.price}
                    image={nft.image}
                  />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  Load More
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Tag className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">NFT #4231 sold for 2.5 ETH</p>
                        <span className="text-zinc-500 text-sm">2 hours ago</span>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        by{" "}
                        <Link href="#" className="text-purple-400">
                          0xb4d...73a
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Tag className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">NFT #1872 listed for 3.2 ETH</p>
                        <span className="text-zinc-500 text-sm">5 hours ago</span>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        by{" "}
                        <Link href="#" className="text-purple-400">
                          0x7c3...e9f
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">NFT #9356 minted</p>
                        <span className="text-zinc-500 text-sm">1 day ago</span>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        by{" "}
                        <Link href="#" className="text-purple-400">
                          {collection.creator}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Tag className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">NFT #6721 sold for 1.8 ETH</p>
                        <span className="text-zinc-500 text-sm">2 days ago</span>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        by{" "}
                        <Link href="#" className="text-purple-400">
                          0x3f5...b2c
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">About {collection.name}</h3>
                <p className="text-zinc-400 mb-6">
                  {collection.description} This unique collection explores the boundaries of digital art and blockchain
                  technology, creating a new paradigm for collectors and creators alike. Each piece is meticulously
                  crafted with attention to detail, ensuring a cohesive yet diverse collection that appeals to NFT
                  enthusiasts and art collectors.
                </p>
                <p className="text-zinc-400 mb-6">
                  The collection features {collection.items} unique NFTs, each with its own rarity traits and
                  characteristics. Owning a piece from this collection grants you access to exclusive community events,
                  future airdrops, and special privileges within the NEXUS ecosystem.
                </p>
                <h4 className="text-lg font-bold mb-3">Collection Details</h4>
                <div className="space-y-2 text-zinc-400">
                  <p>Release Date: January 15, 2023</p>
                  <p>Blockchain: Ethereum</p>
                  <p>Token Standard: ERC-721</p>
                  <p>Creator Royalties: 5%</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  )
}

