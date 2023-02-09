difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("model_loaded")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + LeftWristX +" rightWristX = "+ rightWristX + " difference = " +difference);

    }
}

function draw() {
    background('#969A97')

    document.getElementById("square_side").innerHTML = "Font size of this text will be =" + difference +"px"
    fill('#F90093');
    stroke('#F90093');
    Text("Soham Jain", 50, 400)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
