
var icon=document.getElementById("icon");
var music=document.getElementById("music");
var count=0;
var songs=["audio/song1.mp3","audio/song2.mp3","audio/song3.mp3","audio/song4.mp3","audio/song5.mp3","audio/song6.mp3","audio/song7.mp3","audio/song8.mp3","audio/song9.mp3","audio/song10.mp3","audio/song11.mp3","audio/song12.mp3","audio/song13.mp3","audio/song14.mp3","audio/song15.mp3","audio/song16.mp3"];
function song(){
    if(music.paused){
        music.play();
        icon.src="images/pause.png";
    }
    else
    {
        music.pause();
        icon.src="images/play.png";
    }
}

function prev(){
    if(count==0){
        icon.src="images/pause.png";
        music.src=songs[15];
        music.play();
        count=15;
    }
    else 
    {
        icon.src="images/pause.png";
        music.src=songs[count-1];
        music.play();
        count=count-1;
    }
}
function next(){
    if(count==15){
        icon.src="images/pause.png";
        music.src=songs[0];
        music.play();
        count=0;
    }
    else 
    {
        icon.src="images/pause.png";
        music.src=songs[count+1];
        music.play();
        count=count+1;
    }
}