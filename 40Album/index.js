function make_album(artist, title, numberOfTracks=undefined) {
  let newAlbum = {artist, title}
  if (numberOfTracks) return {...newAlbum, numberOfTracks}

  return newAlbum
}

console.log(make_album('zia', 'web3'))
console.log(make_album('danial', 'metaverse'))
console.log(make_album('saad', 'frontend', 4))