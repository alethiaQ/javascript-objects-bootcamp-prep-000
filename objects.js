var playlist = {adele: "Hello"};

function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle;
   return playlist;
}
function removeFromPlaylist(playlist, artistName){
console.log(playlist);
delete playlist.artistName;
console.log(playlist);
return playlist;
}
 removeFromPlaylist(playlist, 'Slowdive')
