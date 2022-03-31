//global variables
var t=10;
var obj;
var clueHoldTime=500;
const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 
var mistakes;

var pattern = [2,5,7,3,6,4,1,8];
var progress = 0; 
var gamePlaying = false;
var tonePlaying= false;
var volume=0.5;
var guessCounter=0;

function getPattern()
{
  var nPattern = [];
  for(let i=0; i<8; i++)
    {
      nPattern[i] = Math.floor(Math.random() * 6) + 1;
    }
  console.log(nPattern);
  return nPattern;
}


function startGame(){
    mistakes=0;
    clueHoldTime=500;
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("startBtn").classList.add("hidden");
    pattern = getPattern();
    progress = 0;
    gamePlaying = true;
    playClueSequence();
    // n= setInterval(function(){console.log(t); t--; if(t==0){
    //   clearInterval(n); t=10;loseGame();
    // }},1000);
    t= 10; 
    obj=setInterval(function(){document.getElementById("seconds").innerHTML=String(t);
                            t--; if(t==0){clearInterval(obj);t=10;loseGame();}},1000);
}


function stopGame(){
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(obj); 
  gamePlaying=false;
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 1095,
  6: 1200,
  7: 1454,
  8: 1378
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function showImage(btn) {
  document.getElementById("button" + btn + "img").classList.add("pressed");
}

function removeImage(btn) {
  document.getElementById("button" + btn + "img").classList.remove("pressed");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function guess(btn){
console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    t=10;
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    mistakes+=1;
    if(mistakes==1){
      alert("WARNING:One mistake!");
    }
    if(mistakes==2){
      alert("WARNING:Two mistakes!");
    }
    if(mistakes==3){
      alert("WARNING:Three mistakes!");
    }
    //Guess was incorrect
    //GAME OVER: LOSE!
    if(mistakes>=4){
      loseGame();
    }
  }
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    showImage(btn)
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    setTimeout(removeImage,clueHoldTime,btn)
  }
}

function playClueSequence(){
  guessCounter=0;
  context.resume()
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime=clueHoldTime-10;
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost!");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

