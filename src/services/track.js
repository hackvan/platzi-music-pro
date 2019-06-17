import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    // params: { q: q, type: type }
    params: { q, type }
  })
    .then(res => res.data)
  // function (res) {
  //   return res.data;
  // }
}

export default trackService
