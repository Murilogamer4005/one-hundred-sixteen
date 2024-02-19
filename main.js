nosex=0, nosey=0
function preload() {
    theRock = loadImage("Bart.png")
    
}
function setup() {
    canvas = createCanvas(640, 480)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(640, 480)
    video.hide()
    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose",gotPoses)
}
function modelloaded(){
    console.log("model loaded!= modelo carregado!")
}
function draw() {
    image(video, 0, 0, 640, 480)
    image(theRock, nosex, nosey, 420, 420)
}
function takeSnapshot() {
    save("Murilo.png")
}
function gotPoses(results) {
  if (results.length>0) {
    console.log(results)
    nosex=results[0].pose.nose.x-280
    nosey=results[0].pose.nose.y-230
  }
}