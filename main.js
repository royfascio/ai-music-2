polozhenie_song="";
harry_potter_song="";

function preload(){
    polozhenie_song = loadSound("polozhenie.mp3");
    harry_potter_song = loadSound("harrypotter.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}