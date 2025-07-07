"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function BringIDLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-black">
              BringID: privately verify humanity with your online accounts
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
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 font-medium px-6 py-3 h-11 rounded-md transition-colors font-mono"
            >
              <a href="https://github.com/BringID/whitepaper/blob/main/whitepaper.md" target="_blank">
                Read Whitepaper
              </a>
            </Button>
            <Button href="https://t.me/bringid_chat" target="_blank"
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 text-black hover:bg-gray-50 font-medium px-6 py-3 h-11 rounded-md transition-colors bg-transparent font-mono"
            >
              <a href="https://t.me/bringid_chat" target="_blank">
                Join TG Group
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex justify-center items-center">
            {/* Social links */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Twitter/X */}
              <a
                href="https://twitter.com/bring_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/bringid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/bringid_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              {/* Farcaster */}
              <a
                href="https://farcaster.xyz/~/channel/bring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 1000 1000">
                  <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333S337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" />
                  <path d="M128.889 253.333L157.778 351.111H182.222L211.111 253.333H128.889Z" />
                  <path d="M788.889 253.333L817.778 351.111H842.222L871.111 253.333H788.889Z" />
                </svg>
              </a>

              {/* Bring Token Link */}
              <a
                href="https://basescan.org/token/0x02E739740B007bd5E4600b9736A143b6E794D223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-gray-500 hover:text-gray-700 transition-colors"
              >
                Bring Token
              </a >
            </div >
          </div >
        </div >
      </footer >
    </div >
  )
}
