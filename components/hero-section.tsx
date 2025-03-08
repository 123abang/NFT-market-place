import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,40,200,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(0,180,255,0.2),transparent_40%)]"></div>
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover, Collect & Sell{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Extraordinary
              </span>{" "}
              NFTs
            </h1>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg">
              Explore the next generation of digital art and collectibles on the most innovative NFT marketplace powered
              by Ethereum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                Create NFT
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-zinc-400">Artworks</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5K+</p>
                <p className="text-zinc-400">Artists</p>
              </div>
              <div>
                <p className="text-3xl font-bold">25K+</p>
                <p className="text-zinc-400">Collectors</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop"
                    alt="Featured NFT"
                    width={400}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="mt-4">
                    <h3 className="font-bold">Cyber Punk #231</h3>
                    <p className="text-zinc-400 text-sm">@CyberCreator</p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
                    alt="Featured NFT"
                    width={400}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="mt-4">
                    <h3 className="font-bold">Abstract Mind #08</h3>
                    <p className="text-zinc-400 text-sm">@ArtistX</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=400&auto=format&fit=crop"
                    alt="Featured NFT"
                    width={400}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="mt-4">
                    <h3 className="font-bold">Digital Dreams #42</h3>
                    <p className="text-zinc-400 text-sm">@DreamMaker</p>
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop"
                    alt="Featured NFT"
                    width={400}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="mt-4">
                    <h3 className="font-bold">Neon Future #17</h3>
                    <p className="text-zinc-400 text-sm">@NeonArtist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

