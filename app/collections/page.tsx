import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid3X3, LayoutGrid } from "lucide-react"
import { Footer } from "@/components/footer"
import { collections } from "@/data/collections"

export default function CollectionsPage() {
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

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <Input
                placeholder="Search collections..."
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
              <h1 className="text-3xl font-bold mb-2">Explore Collections</h1>
              <p className="text-zinc-400">Discover unique collections from talented artists</p>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex items-center border border-zinc-800 rounded-md overflow-hidden">
                <button className="p-2 bg-zinc-800 text-white">
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button className="p-2 bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
                  <LayoutGrid className="h-5 w-5" />
                </button>
              </div>
              <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>All Collections</option>
                <option>Trending</option>
                <option>Top Volume</option>
                <option>Recently Added</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
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

