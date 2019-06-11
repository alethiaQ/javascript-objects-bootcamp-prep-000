var playlist = {adele: "River Lea"};

function updatePlaylist(obj, artist, song){
  return Object.assign({}, obj, {[artist]: song})
}