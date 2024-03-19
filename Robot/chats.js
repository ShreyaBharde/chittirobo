const robo = document.querySelector('.robo');
const utterances = [ 
    ["how are you", "how is life", "how are things"],        //0
    ["hi", "hey", "hello", "good morning", "good afternoon",'hii','hey'],      //1
    ["what are you doing", "what is going on", "what is up"],      //2
    ["how old are you","what is your age"],					//3
    ["who are you", "are you human", "are you chitti", "are you human or chitti"]]
    const answers = [
        [
         "Fine... how are you?",
         "Pretty well, how are you?",
         "Fantastic, how are you?"
       ],                                                                                  	//0
       [
         "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
       ],						//1
       [
         "Nothing much",
         "About to go to sleep",
         "Can you guess?",
         "I don't know actually"
       ],						//2
       ["I am infinite"],					//3
       ["I am just a chitti", "I am a chitti. What are you?"]]

const alternatives = [
        "Unable to read",
        "Try again",
      ];
const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {


    document.getElementById("myImg").className = "chixi";


    
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
  else{
    document.getElementById("myImg").className = "chixi2";
  }
});

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
       
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let chittiDiv = document.createElement("div");
  let chittiText = document.createElement("span");
  chittiDiv.id = "chitti";
  chittiDiv.className = "chitti response";
  chittiText.innerText = "Typing...";
  chittiDiv.appendChild(chittiText);
  messagesContainer.appendChild(chittiDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    chittiText.innerText = `${product}`;
    
  }, 2000);
}
