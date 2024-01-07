let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".options");
let msg = document.querySelector(".msg");
let userscorepara = document.querySelector("#user");
let compscorepara = document.querySelector("#comp");

 let compchoice = () => {
    let options = ["rock", "paper" , "scissors"];
    let randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx];
 };
  let drawgame = () => {
    msg.innerText = "Game was draw, Play again.";
    msg.style.backgroundColor = "navyblue";
  }
  let showwin = (userwin, useroption, compoptions) => {
    if(userwin) {
      userscore++;
      userscorepara.innerText = userscore;
      msg.innerText = `you win! your ${useroption} beat ${compoptions}`;
      msg.style.backgroundColor = "green";
    } else {
      compscore++;
      compscorepara.innerText =  compscore;
      msg.innerText = `you lose  ${compoptions} beat your ${useroption}`;
      msg.style.backgroundColor = "red";
    }
  }
 
  let playGame = (useroption) => {
      console.log("useroptions = ", useroption);
      let compoptions = compchoice();
      console.log("compoptions = ", compoptions);

      if(useroption === compoptions) {
        drawgame();
      } else {
       let userwin = true;
       if(useroption === "rock") {
        userwin = compoptions === "paper" ? false : true;
       } else if (useroption === "paper") {
        userwin = compoptions === "scissors" ? false : true;
       } else {
        userwin = compoptions === "rock" ? false : true;
       }
       showwin(userwin, useroption, compoptions);
      }
  }

choices.forEach((options) => {
     options.addEventListener("click", () => {
        let useroption = options.getAttribute("id");
        playGame(useroption);
     })
})