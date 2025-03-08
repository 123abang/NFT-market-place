import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { NFTCard } from "@/components/nft-card"
import { Footer } from "@/components/footer"
import { nfts } from "@/data/nfts"

export default function MarketplacePage() {
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
            <Link href="/marketplace" className="text-white transition-colors">
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
              <h1 className="text-3xl font-bold mb-2">NFT Marketplace</h1>
              <p className="text-zinc-400">Discover, collect, and sell extraordinary NFTs</p>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Recently Listed</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nfts.map((nft) => (
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

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              Load More
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

