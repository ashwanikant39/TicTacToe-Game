 // if(continueGame)

 var player1;
 var player2;

 var playerOne;
 var playerTwo;

 var X_Player;
 var O_Player;

 let firstName = document.getElementById("userOne").value;
 let secondName = document.getElementById("userTwo").value;

 let value1 = document.getElementById("X1");
 let value2 = document.getElementById("O1");
 let value3 = document.getElementById("X2");
 let value4 = document.getElementById("O2");
 function ChooseSymbol1() {
   value2.checked = false;
   value3.checked = false;
   value4.checked = true;
 }
 function ChooseSymbol2() {
   value1.checked = false;
   value3.checked = true;
   value4.checked = false;
 }
 function ChooseSymbol3() {
   value1.checked = false;
   value2.checked = true;
   value4.checked = false;
 }
 function ChooseSymbol4() {
   value1.checked = true;
   value2.checked = false;
   value3.checked = false;
 }

 // let disableSubmit = document.getElementById("SubmitId");
 // function checkFill() {
 //   if (firstName.value < 0 && secondName.value < 0) {
 //     disableSubmit.disabled = true;
 //   } else {
 //     disableSubmit.disabled = false;
 //   }
 // }

 function getName() {
   // console.log(firstName)
   let firstName = document.getElementById("userOne").value;

   let secondName = document.getElementById("userTwo").value;

   let radioValueX1 = document.getElementById("X1");
   let radioValueO1 = document.getElementById("O1");
   let radioValueX2 = document.getElementById("X2");
   let radioValueO2 = document.getElementById("O2");

   player1 = document.getElementById("userOne").value;
   player2 = document.getElementById("userTwo").value;

   document.getElementById("User1Turn").innerHTML = firstName;
   document.getElementById("User2turn").innerHTML = secondName;

   // console.log( document.getElementsByClassName("player1").innerHTML =
   //   firstName + "'s Symbol =");

   // document.getElementsByClassName("player2").innerHTML = secondName;

   // player1 = playerOne;
   // player2 = playerTwo;
   // console.log(player1);

   // console.log(player2);

   // console.log(player1);
   // console.log(player2);

   // console.log(playerOne);
   // console.log(playerTwo);

   // console.log("X player is " + X_Player);
   // console.log("Y player is " + O_Player);

   let submitBtn = document.getElementById("SubmitId");

   if (
     firstName.length < 1 ||
     secondName.length < 1 ||
     (radioValueX1.checked === false && radioValueO1.checked === false) ||
     (radioValueX2.checked === false && radioValueO2.checked === false)
   ) {
     // submitBtn.setAttribute("disabled", true);
     alert("Please enter values");
   } else {
     const BoxDeactivate = document.querySelector(".boxDeactive");
     BoxDeactivate.classList.remove("boxDeactive");

     if (radioValueX1.checked) {
       playerOne = document.getElementById("radio1").innerHTML =
         radioValueX1.value;
     } else {
       playerOne = document.getElementById("radio1").innerHTML =
         radioValueO1.value;
     }

     if (radioValueX2.checked) {
       playerTwo = document.getElementById("radio2").innerHTML =
         radioValueX2.value;
     } else {
       playerTwo = document.getElementById("radio2").innerHTML =
         radioValueO2.value;
     }

     document.getElementById("userName1").innerHTML =
       firstName + "'s Symbol =";

     document.getElementById("userName2").innerHTML =
       secondName + "'s Symbol =";

     if (playerOne == "X") {
       X_Player = player1;
     } else if (playerOne == "O") {
       O_Player = player1;
     }

     if (playerTwo == "X") {
       X_Player = player2;
     } else if (playerTwo == "O") {
       O_Player = player2;
     }
     // // cell script
     const cellElement = document.querySelectorAll(".game-board .cell");
     const playerFirst = document.querySelector(".players .player1");
     const playerSecond = document.querySelector(".players .player2");
     const result = document.querySelector(".result");
     const result_text = document.querySelector(".result h1");
     const restart_btn = document.querySelector(".result button");
     // const disableGameboard = document.querySelector("game-board");

     // const disableGameboard =
     //   document.getElementsByClassName("game-board");

     // console.log(cellElement);
     const winningCondition = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
     ];
     let toggleTurn = true;
     var continueGame = true;
     console.log("first " + continueGame);

     cellElement.forEach((cell) => {
       console.log(typeof continueGame, continueGame);

       // console.log("second " + continueGame);

       cell.onclick = () => {
         if (continueGame == true) {
           console.log("hello top ", continueGame);
           // console.log(cell.innerHTML);
           let currentPlayer = toggleTurn ? playerOne : playerTwo;
           cell.classList.add("disable");

           addCell(cell, currentPlayer);
           if (winnerCheck(currentPlayer)) {
             // console.log(currentPlayer + " winner");
             result.classList.remove("inactive");
             if (currentPlayer == "X") {
               result_text.innerHTML = X_Player + " Win the game";
               continueGame = false;

               // console.log("hello1");
             } else if (currentPlayer == "O") {
               result_text.innerHTML = O_Player + " Win the game";
               continueGame = false;

               // console.log("hello2");
             }
             // console.log("third " + continueGame);

             // console.log("fourth " + continueGame);
           } else if (isdraw()) {
             // console.log("Draw");
             result.classList.remove("inactive");
             result_text.innerHTML = " Draw the game";
             // continueGame = false;
           }
           // continueGame = false;

           // winnerCheck();
           // console.log(cell.innerHTML);
           swapPlayer();
         }
       };
     });

     console.log("hellllllll");

     function handleChange() {
       let firstName = document.getElementById("userOne").value;
       let secondName = document.getElementById("userTwo").value;
     }

     function winnerCheck(currentPlayer) {
       return winningCondition.some((condition) => {
         // console.log(condition);
         return condition.every((index) => {
           // console.log(index);
           // console.log(cellElement[index].classList.contains(currentPlayer));
           return cellElement[index].classList.contains(currentPlayer);
           // continueGame = false;
         });
       });
     }
     function isdraw() {
       return [...cellElement].every((cell) => {
         return (
           cell.classList.contains(playerOne) ||
           cell.classList.contains(playerTwo)
         );
       });
     }

     function swapPlayer() {
       toggleTurn = !toggleTurn;
       if (toggleTurn) {
         playerFirst.classList.add("active");
         playerSecond.classList.remove("active");
       } else {
         playerSecond.classList.add("active");
         playerFirst.classList.remove("active");
       }
     }

     function addCell(cell, currentPlayer) {
       cell.innerHTML = currentPlayer;
       cell.classList.add(currentPlayer);
     }
     restart_btn.onclick = () => {
       location.reload();
     };
   }
 }