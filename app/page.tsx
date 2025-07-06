"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function BringIDLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-black">
              BringID:
              <br />
              Private identity based on your Internet history
            </h1>
          </div>

          {/* Quote Section */}
          <div className="space-y-3 py-2">
            <blockquote className="text-xl md:text-2xl font-normal italic leading-relaxed max-w-3xl mx-auto font-serif text-black">
              "Privacy is the power to selectively reveal oneself to the world."
            </blockquote>
            <cite className="text-sm font-normal block not-italic text-black font-sans">
              — A Cypherpunk's Manifesto by Eric Hughes, 1993
            </cite>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="https://github.com/BringID/whitepaper/blob/main/whitepaper.md" target="_blank"
              size="lg"
              className="bg-black text-white hover:bg-gray-800 font-medium px-6 py-3 h-11 rounded-md transition-colors font-mono"
            >
              Read Whitepaper
            </a>
            <a href="https://t.me/bringid_chat" target="_blank"
              size="lg"
              variant="outline"
              className="border-gray-300 text-black hover:bg-gray-50 font-medium px-6 py-3 h-11 rounded-md transition-colors bg-transparent font-mono"
            >
              Join TG Group
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
