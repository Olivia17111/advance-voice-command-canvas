x = 0;
y = 0;

screen_width =0;
screen_height =0;

speak_data ="";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start() 
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{

    content = event.results[0][0].transcript;
  speak_data = content + " apples drawn";
    to_number = Number(content);
 console.log(event); 

 

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    if(Number.isInteger(to_number))
    {
        draw_apple = "set";
        document.getElementById("status").innerHTML = " Started drawing apple";
    }else{
        document.getElementById("status").innerHTML = " Did not get any number";
    }

}


function preload()
{
    apple = loadImage('apple.png');
}


function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "apple.png";

    for(var i = 1; i <= to_number; i++)
{ 
     x = Math.floor(Math.random() * screen_width);
     y= Math.floor(Math.random() * (screen_height-150) ); 
    image (apple, x, y, 50, 50);
}
   speak();
  
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}