import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TrackData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
}

const SpotifyWidget = () => {
  const [track, setTrack] = useState<TrackData | null>(null)
  
  useEffect(() => {
    fetch('/api/spotify')
      .then(async res => {
        const text = await res.text()
        try {
          return JSON.parse(text)
        } catch (e) {
          // If it fails to parse (e.g. dev server returned raw file or HTML),
          // we silently fail so the widget just hides instead of crashing.
          return { isPlaying: false }
        }
      })
      .then(data => {
        if (data.isPlaying) {
          setTrack(data)
        } else {
          setTrack(null)
        }
      })
      .catch(console.error)
  }, [])

  if (!track) return null;

  return (
    <motion.a
      href={track.songUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="hidden md:flex items-center gap-3 p-2 pr-4 bg-white/50 dark:bg-black/50 backdrop-blur-md border-2 border-gray-900 dark:border-emerald-500/30 rounded-full shadow-lg fixed bottom-6 left-6 z-50 hover:border-emerald-500 transition-colors group"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-900 dark:border-emerald-500 flex-shrink-0">
        <img 
          src={track.albumArt} 
          alt="Album art" 
          className={`w-full h-full object-cover animate-[spin_4s_linear_infinite]`} 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-900 dark:bg-black rounded-full" />
        </div>
      </div>
      
      <div className="flex flex-col min-w-[120px] max-w-[150px]">
        <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest leading-none mb-1 flex items-center gap-1.5">
          <span className="flex gap-0.5 items-end h-2">
            <motion.span animate={{ height: ['4px', '8px', '4px'] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-0.5 bg-emerald-500" />
            <motion.span animate={{ height: ['8px', '4px', '8px'] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} className="w-0.5 bg-emerald-500" />
            <motion.span animate={{ height: ['5px', '8px', '5px'] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} className="w-0.5 bg-emerald-500" />
          </span>
          Now Playing
        </span>
        <span className="text-xs font-bold text-gray-900 dark:text-white truncate" title={track.title}>{track.title}</span>
        <span className="text-[10px] text-gray-600 dark:text-gray-400 truncate" title={track.artist}>{track.artist}</span>
      </div>
    </motion.a>
  )
}

export default SpotifyWidget
