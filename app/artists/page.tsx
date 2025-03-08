import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Users, Award, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"
import { artists } from "@/data/artists"
import { nfts } from "@/data/nfts"
import { NFTCard } from "@/components/nft-card"

export default function ArtistsPage() {
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

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <Input
                placeholder="Search artists..."
                className="pl-10 bg-zinc-900 border-zinc-800 w-64 focus-visible:ring-purple-500"
              />
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
              Connect Wallet
            </Button>
          </div>

          <button className="md:hidden text-zinc-400">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main>
        <section className="py-12 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Top Artists</h1>
              <p className="text-zinc-400">Discover talented creators in the NFT space</p>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="flex items-center border border-zinc-800 rounded-md overflow-hidden">
                <button className="px-3 py-2 bg-zinc-800 text-white text-sm">All Time</button>
                <button className="px-3 py-2 bg-zinc-900 text-zinc-400 hover:text-white transition-colors text-sm">
                  Last 30 Days
                </button>
                <button className="px-3 py-2 bg-zinc-900 text-zinc-400 hover:text-white transition-colors text-sm">
                  Last 7 Days
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <Link href={`/artists/${artist.id}`} key={artist.id} className="group">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="relative h-40">
                    <Image
                      src={artist.banner || "/placeholder.svg?height=200&width=600"}
                      alt={artist.name}
                      width={600}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-900">
                          <Image
                            src={artist.avatar || "/placeholder.svg?height=64&width=64"}
                            alt={artist.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">
                            {artist.name}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-zinc-400">
                            <Users className="h-3 w-3" />
                            <span>{artist.followers} followers</span>
                          </div>
                        </div>
                      </div>
                      {artist.verified && (
                        <div className="bg-purple-500/20 p-1 rounded-full">
                          <Award className="h-5 w-5 text-purple-400" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <p className="text-xs text-zinc-500">Volume</p>
                        <p className="font-bold">{artist.volume} ETH</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-zinc-500">Floor</p>
                        <p className="font-bold">{artist.floor} ETH</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-zinc-500">Items</p>
                        <p className="font-bold">{artist.items}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {artist.featuredNfts.map((nftId, index) => {
                        const nft = nfts.find((n) => n.id === nftId)
                        return nft ? (
                          <div key={index} className="aspect-square rounded-md overflow-hidden">
                            <Image
                              src={nft.image || "/placeholder.svg?height=100&width=100"}
                              alt={nft.name}
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              Load More
            </Button>
          </div>
        </section>

        <section className="py-12 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Featured Artist: {artists[0].name}</h2>
                <p className="text-zinc-400">Explore the latest creations from our featured artist</p>
              </div>
              <Link
                href={`/artists/${artists[0].id}`}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Profile
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <Image
                    src={artists[0].banner || "/placeholder.svg?height=400&width=600"}
                    alt={artists[0].name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={artists[0].avatar || "/placeholder.svg?height=80&width=80"}
                        alt={artists[0].name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover border-4 border-zinc-900"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-xl">{artists[0].name}</h3>
                          {artists[0].verified && <Award className="h-5 w-5 text-purple-400" />}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-400">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{artists[0].followers} followers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            <span>{artists[0].volume} ETH volume</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-6">
                      {artists[0].bio ||
                        "A visionary digital artist pushing the boundaries of NFT art with unique creations that blend technology and creativity."}
                    </p>

                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                      Follow Artist
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {artists[0].featuredNfts.slice(0, 4).map((nftId) => {
                  const nft = nfts.find((n) => n.id === nftId)
                  return nft ? (
                    <div key={nftId} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                      <Image
                        src={nft.image || "/placeholder.svg?height=300&width=300"}
                        alt={nft.name}
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold">{nft.name}</h4>
                        <p className="text-zinc-400 text-sm">{nft.price} ETH</p>
                      </div>
                    </div>
                  ) : null
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nfts.slice(0, 8).map((nft) => (
                <NFTCard
                  key={nft.id}
                  id={nft.id}
                  name={nft.name}
                  creator={artists[0].name}
                  price={nft.price}
                  image={nft.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

