import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2, Users, Award, TrendingUp, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"
import { artists } from "@/data/artists"
import { nfts } from "@/data/nfts"
import { collections } from "@/data/collections"
import { NFTCard } from "@/components/nft-card"

export default function ArtistDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the artist data based on the ID
  const artist = artists.find((a) => a.id === params.id) || artists[0]

  // Get the artist's NFTs
  const artistNfts = nfts.filter((nft) => artist.featuredNfts.includes(nft.id) || nft.creator === artist.name)

  // Get collections by this artist
  const artistCollections = collections.filter((collection) => collection.creator === artist.name)

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
            <Link href="/artists" className="text-white transition-colors">
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
              src={artist.banner || "/placeholder.svg?height=400&width=1200"}
              alt={artist.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          </div>

          <div className="container mx-auto px-4 relative -mt-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-black">
                <Image
                  src={artist.avatar || "/placeholder.svg?height=128&width=128"}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl font-bold">{artist.name}</h1>
                      {artist.verified && <Award className="h-6 w-6 text-purple-400" />}
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-zinc-400">
                        <Users className="h-4 w-4" />
                        <span>{artist.followers} followers</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-400">
                        <TrendingUp className="h-4 w-4" />
                        <span>{artist.volume} ETH volume</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                      Follow
                    </Button>
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                <p className="text-zinc-400 mt-4 max-w-3xl">{artist.bio}</p>

                <div className="flex items-center gap-4 mt-4">
                  <Link
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Website
                  </Link>
                  <Link
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Twitter
                  </Link>
                  <Link
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div>
                <p className="text-sm text-zinc-500">Floor Price</p>
                <p className="text-2xl font-bold">{artist.floor} ETH</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Volume Traded</p>
                <p className="text-2xl font-bold">{artist.volume} ETH</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Items</p>
                <p className="text-2xl font-bold">{artist.items}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Followers</p>
                <p className="text-2xl font-bold">{artist.followers}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="creations">
            <TabsList className="bg-zinc-900 border border-zinc-800 mb-6">
              <TabsTrigger value="creations">Creations</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="creations">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Recently Created</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {artistNfts.map((nft) => (
                  <NFTCard
                    key={nft.id}
                    id={nft.id}
                    name={nft.name}
                    creator={artist.name}
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

            <TabsContent value="collections">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artistCollections.map((collection) => (
                  <Link href={`/collections/${collection.id}`} key={collection.id} className="group">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="relative">
                        <Image
                          src={collection.banner || "/placeholder.svg?height=200&width=600"}
                          alt={collection.name}
                          width={600}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute -bottom-10 left-4">
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden border-4 border-zinc-900">
                            <Image
                              src={collection.logo || "/placeholder.svg?height=80&width=80"}
                              alt={collection.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 pt-12">
                        <h3 className="font-bold text-xl mb-1 group-hover:text-purple-400 transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-4">by {collection.creator}</p>

                        <p className="text-sm text-zinc-400 mb-3">{collection.description}</p>

                        <div className="grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4">
                          <div className="text-center">
                            <p className="text-xs text-zinc-500">Floor</p>
                            <p className="font-bold">{collection.floor} ETH</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-zinc-500">Volume</p>
                            <p className="font-bold">{collection.volume} ETH</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-zinc-500">Items</p>
                            <p className="font-bold">{collection.items}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">About {artist.name}</h3>
                <p className="text-zinc-400 mb-6">
                  {artist.bio} With a passion for digital art and blockchain technology, {artist.name} has established a
                  unique style that resonates with collectors worldwide. Their work explores themes of technology,
                  consciousness, and the future of humanity in an increasingly digital world.
                </p>
                <p className="text-zinc-400 mb-6">
                  Having created over {artist.items} unique NFTs and amassed a following of {artist.followers}{" "}
                  collectors and enthusiasts,
                  {artist.name} continues to push the boundaries of what's possible in the NFT space. Their work has
                  been featured in virtual galleries and digital art exhibitions around the world.
                </p>
                <h4 className="text-lg font-bold mb-3">Artist Stats</h4>
                <div className="space-y-2 text-zinc-400">
                  <p>Joined: March 2021</p>
                  <p>Total Sales: {artist.volume} ETH</p>
                  <p>Collections: {artistCollections.length}</p>
                  <p>Followers: {artist.followers}</p>
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

