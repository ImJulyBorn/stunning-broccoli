var status = "";
function preload(){
    img = loadImage("fruits.jpg")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects"
}
function modelLoaded(){
    console.log("model is loaded .");
    status = true;
    ObjectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    } 
    console.log(results);
}
function back(){
    window.location = "index.html";
}