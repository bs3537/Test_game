

  const gameContainer = document.getElementById("game");

  const COLORS = [
    "red",
    "blue",
    "purple",
    "green",
    "orange",
    "purple",
    "red",
    "orange",
    "yellow",
    "brown",
    "blue",
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "purple",
    "yellow",
    "orange",
    "yellow",
    "brown",
    "blue",
    "yellow",
    "red"
  ];



  // here is a helper function to shuffle an array
  // it returns the same array with values shuffled
  // it is based on an algorithm called Fisher Yates if you want ot research more
  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  let shuffledColors = shuffle(COLORS);

 

  // this function loops over the array of colors
  // it creates a new div and gives it a class with the value of the color
  // it also adds an event listener for a click for each card
  function createDivsForColors(colorArray) {
    for (let color of colorArray) {
      // create a new div
      const newDiv = document.createElement("div");

      // append the div to the element with an id of game
      gameContainer.append(newDiv);

       // call a function handleCardClick when a div is clicked on
      newDiv.addEventListener("click", handleCardClick);

      // give it a class attribute for the value we are looping over
      newDiv.classList.add(color);
      
    }
  }

  
  let score = 0;
  function handleCardClick(event) {

    let i = Math.floor(Math.random() * (21 - 1) + 1);
    event.target.style.backgroundColor = shuffledColors[i];
    let dataArr = JSON.parse(localStorage.getItem("data")) || [];
    dataArr.push(event.target.style.backgroundColor);
    if (dataArr.length === 2) {
      if (dataArr[0] === dataArr[1]) {
        score++;
        alert("You found a color match! Keep clicking on the cards to find more matches! Your score is " + score);
        let scoreNumber = document.querySelector(".score-span");
        scoreNumber.innerText = score;

      } else {
        alert("No color match. Sorry, click on a card again to try again!");

      }
      dataArr = [];
   

    }
    localStorage.setItem("data", JSON.stringify(dataArr));
  }


  // when the DOM loads

  createDivsForColors(shuffledColors);

 
  



