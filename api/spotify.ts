const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  return response.json();
};

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (!client_secret || !refresh_token) {
    return res.status(200).json({ 
      isPlaying: false, 
      error: 'Missing Spotify credentials. Add SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN to .env' 
    });
  }

  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204 || response.status > 400) {
      // Fallback to recently played
      const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      
      if (recentResponse.status === 200) {
        const recentData = await recentResponse.json();
        if (recentData.items && recentData.items.length > 0) {
          const song = recentData.items[0].track;
          return res.status(200).json({
            isPlaying: false,
            title: song.name,
            artist: song.artists.map((_artist: any) => _artist.name).join(', '),
            albumArt: song.album.images[0].url,
            songUrl: song.external_urls.spotify
          });
        }
      }
      return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();

    if (song.item === null) {
      return res.status(200).json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const albumArt = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return res.status(200).json({
      isPlaying,
      title,
      artist,
      albumArt,
      songUrl
    });
  } catch (error: any) {
    return res.status(200).json({ isPlaying: false, error: error.message });
  }
}
