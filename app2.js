const zuragnuud = ["🐶", "🐱", "🐭", "🐰", "🦊", "🐻", "🐼", "🐨"];

  const HusnegtHolih = (massiv) => massiv.sort(() => 0.5 - Math.random());

  const togloomEhluuleh = () => {
    const board = document.getElementById("board");
    board.innerHTML = "";

    const holisonZuragnuud = [...zuragnuud, ...zuragnuud];
    HusnegtHolih(holisonZuragnuud);

    for (const zurag of holisonZuragnuud) {
      const card = cardUusgeh(zurag);
      board.appendChild(card);
    }
  };

  const cardUusgeh = (zurag) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "?";
    card.addEventListener("click", () => cardDelgeh(card, zurag));
    return card;
  };

  let ehniiDelgesenCard = null;
  let hoyrtDelgesenCard = null;

const cardDelgeh = (card, zurag)=> {
    if (!ehniiDelgesenCard) {
      ehniiDelgesenCard = card;
      ehniiDelgesenCard.textContent = zurag;
    } else if (!hoyrtDelgesenCard) {
      hoyrtDelgesenCard = card;
      hoyrtDelgesenCard.textContent = zurag;
      setTimeout(() => delgesenCardShalgah(), 500);
    }
  }

  const delgesenCardShalgah = () => {

    
  
  if ( ehniiDelgesenCard.textContent == hoyrtDelgesenCard.textContent ){
    ehniiDelgesenCard.classList.add("taarsan");
    hoyrtDelgesenCard.classList.add("taarsan");
    ehniiDelgesenCard =null;
    hoyrtDelgesenCard =null;
    hojsonEseh();
  }else cardaaNuuh();}

  const cardaaNuuh = () => {
     ehniiDelgesenCard.textContent = "?";
    hoyrtDelgesenCard.textContent = "?";
    ehniiDelgesenCard = null;
    hoyrtDelgesenCard = null;

  }

  const hojsonEseh=()=> {
    const taarsanCardnuud = document.querySelectorAll(".card.taarsan");
    
    if (taarsanCardnuud.length== zuragnuud.length*2) {
        setTimeout(() => {
          alert("Баяр хүргэе, Та яллаа"); 
        }, 500);
      }
  }