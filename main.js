function preLoad() {}
function setup() {  
    canvas = createCanvas(300,300)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas)
synth = window.speechSynthesis
classifier =  ml5.imageClassifier("DoodleNet")
}
function draw() {
    strokeWeight(4)
    stroke(0)
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
        
    }
}
function limpar_tela() {
    // reset(canvas)
    clear(canvas)
}
function classifyCanvas() {
    classifier.classify(canvas,gotResult)
}
function gotResult() {}