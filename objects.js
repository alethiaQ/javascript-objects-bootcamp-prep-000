var playlist = {adele: "River Lea"};

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, obj, {[artistName]: songTitle})
}