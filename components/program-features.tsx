"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function ProgramFeatures() {
  const features = [
    "Investment up to $100K SAFE + a token warrant, capped at 10M valuation",
    "Access to our expert network and mentorship",
    "Quarterly online demo days to showcase your MVP to entrepreneurs and investors",
    "Direct connections to our network of partners in the IOSG family",
    "Personalized guidance from experienced Web3 founders and investors",
  ]

  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <div className="flex-shrink-0 rounded-full bg-primary p-1">
            <Check className="h-4 w-4 text-white" />
          </div>
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
  )
}
