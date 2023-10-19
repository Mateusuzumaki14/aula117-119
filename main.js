var canvas
function preload() {
    classifier=ml5.imageClassifier('DoodleNet')
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    background('white');
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY) 
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    var result=results[0].label;
    document.getElementById('label').innerHTML='nome:'+result.replace('_','')
    document.getElementById('confidence').innerHTML='precisao:'+Math.round(results[0].confidence*100)
    utherthis=new SpeechSynthesisUtterance(result.replace('_',''))
    synth.speak(utherthis)
}
function clearCanvas(){
    background('white')
}