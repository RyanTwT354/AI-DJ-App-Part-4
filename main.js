
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
 song = loadSound("music.mp3");
}

function setup() {
canvas=createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX;
        leftWristY = results[0].pose.leftWristY;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("#30D5C8");
    storke("#30D5C8");

    circle(leftWristX,leftWristY,20);
    NumberleftWristY = Number(leftWristY);
    remove_decimal = floor(NumberleftWristY * 2);
    Volume = remove_decimal/1000;
    document.getElementById("volume").innerHTML = "Volume = " + Volume;
    song.setVolume(Volume)
}

function Play() {
    song.play();
    song.setVolume(1);
    song.rate(1)
}
