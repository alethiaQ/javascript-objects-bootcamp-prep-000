var playlist = {Slowdive: "Alison", My Bloody Valentine: ""};

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, obj, {[artistName]: songTitle})
}