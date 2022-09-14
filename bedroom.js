img="";
var status = "";
objects = [];
function preload(){
    img = loadImage("bed.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects"
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i = 0; i < objects.length; i++)
        {
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "  " + percent + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}
function modelLoaded(){
    console.log("model loaded .");
    status = true;
    ObjectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    } 
    console.log(results);
    objects = results;
}