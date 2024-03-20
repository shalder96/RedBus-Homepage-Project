function toggleCard() {
  let card = document.getElementById("card");
  if (card.style.display === "block") {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
}



document.getElementById("myInput").addEventListener("click", function() {
  this.classList.toggle("input-transform");
});

const input = document.getElementById("myInput");
input.value = input.value.toUppercase();


//___________________Carousel_______________

// const carousel = document.querySelector('.cards');
// const cards = document.querySelectorAll('.card');

// let currentIndex = 0;
// const cardWidth = cards[0].offsetWidth;

// function showCard(index) {
//   carousel.style.transform = `translateX(-${index * cardWidth}px)`;
// }

// function nextCard() {
//   currentIndex = (currentIndex + 1) % cards.length;
//   showCard(currentIndex);
// }

// function prevCard() {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//   showCard(currentIndex);
// }

// Optional: Auto slide
// setInterval(nextCard, 3000);

// _________________Bootstrap ________________ 


