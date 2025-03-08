import Link from "next/link"
import Image from "next/image"
import { Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedNFTProps {
  id: string
  name: string
  creator: string
  price: number
  image: string
}

export function FeaturedNFT({ id, name, creator, price, image }: FeaturedNFTProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <Link href={`/nft/${id}`}>
        <div className="relative">
          <Image
            src={
              image || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
            }
            alt={name}
            width={600}
            height={600}
            className="w-full aspect-square object-cover"
          />
          <button className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full">
            <Heart className="h-5 w-5 text-white" />
          </button>
          <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium">Ends in 5h 12m</span>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/nft/${id}`}>
          <h3 className="font-bold text-xl mb-2 hover:text-purple-400 transition-colors">{name}</h3>
        </Link>
        <p className="text-zinc-400 mb-4">by {creator}</p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-zinc-500">Current Bid</p>
            <p className="font-bold text-xl">{price} ETH</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
            Place Bid
          </Button>
        </div>
      </div>
    </div>
  )
}

