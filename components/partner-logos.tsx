"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export function PartnerLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // First row of partners
  const partners1 = [
    { name: "Arbitrum", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Arweave", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Avalanche", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Aztec", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Babylon", logo: "/placeholder.svg?height=40&width=120" },
    { name: "BNB Chain", logo: "/placeholder.svg?height=40&width=120" },
  ]

  // Second row of partners (for animation)
  const partners2 = [
    { name: "Monad", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Scroll", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Starknet", logo: "/placeholder.svg?height=40&width=120" },
    { name: "The Graph", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Fhenix", logo: "/placeholder.svg?height=40&width=120" },
    { name: "GMGN", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div ref={ref} className="w-full overflow-hidden">
      {/* First row - slides left to right */}
      <motion.div
        className="flex space-x-8 mb-6"
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex animate-marquee space-x-8">
          {partners1.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee space-x-8">
          {partners1.map((partner, index) => (
            <div
              key={`${partner.name}-dup`}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Second row - slides right to left */}
      <motion.div
        className="flex space-x-8"
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex animate-marquee-reverse space-x-8">
          {partners2.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-reverse space-x-8">
          {partners2.map((partner, index) => (
            <div
              key={`${partner.name}-dup`}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
