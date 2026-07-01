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
        if (data.title) {
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
      className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 pr-3 sm:pr-4 bg-white/50 dark:bg-black/50 backdrop-blur-md border-2 border-gray-900 dark:border-emerald-500/30 rounded-full shadow-lg fixed bottom-24 left-4 sm:top-auto sm:bottom-6 sm:left-6 z-50 hover:border-emerald-500 transition-colors group max-w-[calc(100vw-2rem)] sm:max-w-none"
    >
      <div className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gray-900 dark:border-emerald-500 flex-shrink-0 ${!track.isPlaying && 'grayscale'}`}>
        <img 
          src={track.albumArt} 
          alt="Album art" 
          className={`w-full h-full object-cover ${track.isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 dark:bg-black rounded-full" />
        </div>
      </div>
      
      <div className="flex flex-col min-w-[100px] sm:min-w-[120px] max-w-[130px] sm:max-w-[150px]">
        <span className={`text-[9px] sm:text-[10px] font-sans font-bold ${track.isPlaying ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'} uppercase tracking-widest leading-none mb-0.5 sm:mb-1 flex items-center gap-1.5`}>
          {track.isPlaying ? (
            <span className="flex gap-0.5 items-end h-2">
              <motion.span animate={{ height: ['4px', '8px', '4px'] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-0.5 bg-emerald-500" />
              <motion.span animate={{ height: ['8px', '4px', '8px'] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} className="w-0.5 bg-emerald-500" />
              <motion.span animate={{ height: ['5px', '8px', '5px'] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} className="w-0.5 bg-emerald-500" />
            </span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
          )}
          {track.isPlaying ? 'Now Playing' : 'Recently Played'}
        </span>
        <span className="text-[11px] sm:text-xs font-sans font-bold text-gray-900 dark:text-white truncate" title={track.title}>{track.title}</span>
        <span className="text-[9px] sm:text-[10px] font-sans text-gray-600 dark:text-gray-400 truncate" title={track.artist}>{track.artist}</span>
      </div>
    </motion.a>
  )
}

export default SpotifyWidget
