import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-sm opacity-70"></div>
                <div className="absolute inset-0.5 bg-zinc-950 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  N
                </div>
              </div>
              <span className="font-bold text-xl">NEXUS</span>
            </Link>
            <p className="text-zinc-400 mb-6">
              The next generation NFT marketplace for digital artists and collectors. Desgined by Abang Tah
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Marketplace</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/marketplace" className="text-zinc-400 hover:text-white transition-colors">
                  All NFTs
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-zinc-400 hover:text-white transition-colors">
                  Art
                </Link>
              </li>
              <li>
                <Link href="/collectibles" className="text-zinc-400 hover:text-white transition-colors">
                  Collectibles
                </Link>
              </li>
              <li>
                <Link href="/music" className="text-zinc-400 hover:text-white transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/photography" className="text-zinc-400 hover:text-white transition-colors">
                  Photography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">My Account</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/profile" className="text-zinc-400 hover:text-white transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-zinc-400 hover:text-white transition-colors">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-zinc-400 hover:text-white transition-colors">
                  My Collections
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-zinc-400 hover:text-white transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Join Newsletter</h3>
            <p className="text-zinc-400 mb-4">
              Subscribe to our newsletter to get the latest updates on new NFT drops and features.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Your email address"
                className="bg-zinc-900 border-zinc-800 focus-visible:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">© 2025 NEXUS NFT Marketplace. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

