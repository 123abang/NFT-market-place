import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NFTCardProps {
  id: string
  name: string
  creator: string
  price: number
  image: string
}

export function NFTCard({ id, name, creator, price, image }: NFTCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
      <Link href={`/nft/${id}`}>
        <div className="relative">
          <Image
            src={
              image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
            }
            alt={name}
            width={400}
            height={400}
            className="w-full aspect-square object-cover"
          />
          <button className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-2 rounded-full">
            <Heart className="h-4 w-4 text-white" />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/nft/${id}`}>
          <h3 className="font-bold text-lg mb-1 hover:text-purple-400 transition-colors">{name}</h3>
        </Link>
        <p className="text-zinc-400 text-sm mb-3">by {creator}</p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-zinc-500">Current Price</p>
            <p className="font-bold">{price} ETH</p>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}

