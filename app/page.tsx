import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu } from "lucide-react"
import { NFTCard } from "@/components/nft-card"
import { FeaturedNFT } from "@/components/featured-nft"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { nfts } from "@/data/nfts"

export default function Home() {
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

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <Input
                placeholder="Search NFTs..."
                className="pl-10 bg-zinc-900 border-zinc-800 w-64 focus-visible:ring-purple-500"
              />
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
              Connect Wallet.
            </Button>
          </div>

          <button className="md:hidden text-zinc-400">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main>
        <HeroSection />

        <section className="py-20 container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured NFTs</h2>
              <p className="text-zinc-400">Discover the most sought-after digital collectibles</p>
            </div>
            <Link href="/marketplace" className="text-purple-500 hover:text-purple-400 transition-colors">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedNFT
              id="1"
              name="Cosmic Dreamer #42"
              creator="0xArtist"
              price={2.45}
              image="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=600&auto=format&fit=crop"
            />
            <FeaturedNFT
              id="2"
              name="Digital Soul #18"
              creator="CryptoVisionary"
              price={1.87}
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
            />
            <FeaturedNFT
              id="3"
              name="Neon Genesis #7"
              creator="FutureWave"
              price={3.21}
              image="https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=600&auto=format&fit=crop"
            />
          </div>
        </section>

        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Trending Collections</h2>
                <p className="text-zinc-400">Explore the hottest NFT collections on the market</p>
              </div>
              <Link href="/collections" className="text-purple-500 hover:text-purple-400 transition-colors">
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nfts.slice(0, 8).map((nft) => (
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
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How to Buy Ethereum-Based NFTs</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Set Up a Crypto Wallet</h3>
                    <p className="text-zinc-400">
                      Install MetaMask or another Ethereum wallet to store your cryptocurrency and NFTs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Purchase Ethereum (ETH)</h3>
                    <p className="text-zinc-400">
                      Buy ETH from a cryptocurrency exchange and transfer it to your wallet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Connect Your Wallet</h3>
                    <p className="text-zinc-400">
                      Link your wallet to our marketplace by clicking "Connect Wallet" button.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Browse and Purchase</h3>
                    <p className="text-zinc-400">
                      Find an NFT you love, click "Buy Now" or place a bid, and confirm the transaction.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Learn More
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Ethereum wallet setup"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Buying Ethereum"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Connecting wallet"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Purchasing NFT"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our NFT Community</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Stay updated with the latest drops, trending artists, and exclusive offers.
            </p>

            <div className="flex max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-zinc-900 border-zinc-800 focus-visible:ring-purple-500 rounded-r-none"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

