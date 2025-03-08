import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function HowToBuyPage() {
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
            <Link href="/how-to-buy" className="text-white transition-colors">
              How to Buy
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
            Connect Wallet
          </Button>
        </div>
      </header>

      <main>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Buy Ethereum-Based NFTs</h1>
              <p className="text-xl text-zinc-400">
                Follow this step-by-step guide to start collecting NFTs on our marketplace
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mb-6">
                  1
                </div>
                <h2 className="text-2xl font-bold mb-4">Set Up a Crypto Wallet</h2>
                <p className="text-zinc-400 mb-6">
                  To interact with the Ethereum blockchain and purchase NFTs, you'll need a cryptocurrency wallet.
                  MetaMask is one of the most popular options and is available as a browser extension or mobile app.
                </p>
                <ul className="space-y-3 text-zinc-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Install MetaMask from the official website or app store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Create a new wallet and securely store your recovery phrase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Never share your recovery phrase or private keys with anyone</span>
                  </li>
                </ul>
                <Link
                  href="https://metamask.io"
                  target="_blank"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Download MetaMask →
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop"
                    alt="Setting up MetaMask wallet"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=600&auto=format&fit=crop"
                    alt="Purchasing Ethereum"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mb-6">
                  2
                </div>
                <h2 className="text-2xl font-bold mb-4">Purchase Ethereum (ETH)</h2>
                <p className="text-zinc-400 mb-6">
                  Ethereum is the cryptocurrency used to buy NFTs on our marketplace. You can purchase ETH from
                  cryptocurrency exchanges and transfer it to your wallet.
                </p>
                <ul className="space-y-3 text-zinc-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Create an account on a reputable exchange like Coinbase, Binance, or Kraken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Complete the verification process (KYC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Purchase ETH using your preferred payment method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Transfer the ETH to your MetaMask wallet address</span>
                  </li>
                </ul>
                <p className="text-zinc-500 text-sm">
                  Note: Make sure to purchase enough ETH to cover both the NFT price and the gas fees (transaction costs
                  on the Ethereum network).
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mb-6">
                  3
                </div>
                <h2 className="text-2xl font-bold mb-4">Connect Your Wallet to NEXUS</h2>
                <p className="text-zinc-400 mb-6">
                  Once you have ETH in your wallet, you need to connect it to our marketplace to start browsing and
                  purchasing NFTs.
                </p>
                <ul className="space-y-3 text-zinc-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Click the "Connect Wallet" button in the top right corner of our website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Select MetaMask (or your preferred wallet) from the options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Approve the connection request in your wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Your wallet address will appear in the top right, indicating a successful connection</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                  Connect Wallet
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600&auto=format&fit=crop"
                    alt="Connecting wallet to NEXUS"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop"
                    alt="Purchasing an NFT"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mb-6">
                  4
                </div>
                <h2 className="text-2xl font-bold mb-4">Browse and Purchase NFTs</h2>
                <p className="text-zinc-400 mb-6">
                  Now you're ready to explore our marketplace and purchase your first NFT!
                </p>
                <ul className="space-y-3 text-zinc-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Browse the marketplace to find NFTs that interest you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Click on an NFT to view its details, properties, and history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Click "Buy Now" or place a bid if it's an auction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Confirm the transaction in your wallet and pay the gas fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Once the transaction is confirmed, the NFT will appear in your collection</span>
                  </li>
                </ul>
                <Link href="/marketplace">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                    Explore Marketplace
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your NFT Journey?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Join thousands of collectors and artists in the exciting world of NFTs. Our marketplace offers a secure
              and user-friendly platform to discover, buy, and sell unique digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Connect Wallet
              </Button>
              <Link href="/marketplace">
                <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

