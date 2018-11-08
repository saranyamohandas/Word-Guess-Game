var words = ['game','clock','laptop','earth'];
var arrLen = words.length;

var getWord = Math.floor(Math.random() * arrLen );
var gameWord = words[getWord];
var guess = 0;
var attempt = 10;
var userInput = [];
var getAllIdx = [];
document.onkeyup = function getUserinput(event){
    var getKey = event.key; //get user input
    guess++;
    if(attempt != 0){
        attempt--;
    }
    
    document.getElementById("p1").innerHTML = "Guess remaining - " + attempt;
    if(guess == 10){
      document.getElementById('p2').innerHTML = 'Game over - maximun guesses attempted';
            
        }
    if((userInput.indexOf(getKey) == -1) && (guess != 10) ){
        
        userInput.push(event.key);
        console.log(userInput);
        checkInput(getKey)
        showUserInp()
        
       }
   }
function showUserInp(){
    document.getElementById('p3').innerHTML = "User input - " + userInput;
}
function checkInput(val){
    var inputIdx = 0;
    var pos = 0;
    var match = 0;
    
    while ((inputIdx != -1) && (inputIdx  < gameWord.length)){
        
        inputIdx = gameWord.indexOf(val,inputIdx);
         console.log('inputIdx-',inputIdx);
        if(inputIdx != -1) {
//           
//           console.log('inputIdx != -1',inputIdx != -1)
              getAllIdx.push(inputIdx);
//           
           inputIdx++;
         }
//       
      }
      console.log('index-',getAllIdx);
       newNode(getAllIdx);
}

function blankSpacegen(blanks){
    var node = document.createElement('span');
    var text = document.createTextNode('_');
    node.appendChild(text);
    console.log(gameWord);
    for(i=0;i<=blanks.length-1;i++){
        var node = document.createElement('span');
        var text = document.createTextNode('_');
        node.appendChild(text);
        document.getElementById('id1').appendChild(node);
        console.log(i);
     }
        
}
 function newNode(idx){
    //check if the letter appears more than once
    // create a text node to fill in the blanks
    for (x in idx){
        var txtIdx = idx[x];
        var newletter = document.createTextNode(gameWord.charAt(txtIdx));
        console.log('x - ',x);
        var letter = document.getElementById('id1').childNodes[txtIdx];
         console.log(letter);
        letter.replaceChild(newletter,letter.childNodes[0]);
    }
     winCheck(idx);
}

function winCheck(arr){
    if(arr.length == gameWord.length){
        document.getElementById('p2').innerHTML = 'Winner!!';
    }
    
    
}



 