function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(50,450);
    video=createCapture(VIDEO)
    video.hide();
    tint_color=""
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color)
    fill("red")
    circle(20,20,40)
    circle(20,460,40)
    circle(620,20,40)
    circle(620,460,40)
    fill("green")
    rect(40,10,560,20)
    rect(40,450,560,20)
    rect(10,40,20,400)
    rect(610,40,20,400)
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
    
}
function take_snapshot(){
    save('picture.png')
}