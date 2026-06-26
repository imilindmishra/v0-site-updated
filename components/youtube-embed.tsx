"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

/**
 * Lightweight click-to-load YouTube embed.
 * Shows the video poster first and only loads the iframe on interaction,
 * keeping the page fast while still embedding the real demo in-page.
 */
export function YouTubeEmbed({ videoId, title = "iClinic AI demo video" }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label="Play demo video"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
            <Play className="ml-1 h-8 w-8 text-primary-foreground" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  )
}
