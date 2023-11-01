const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]
/* Étape 2 : Event Listeners sur  flèches  */

const arrowLeft = document.querySelector('.arrow_left') // flèches G/D
const arrowRight = document.querySelector('.arrow_right')

/* Étape 3 : Ajoutez des bullet points au slider */

const dotsContainer = document.querySelector('.dots')

// Générer les bullet points
slides.forEach((slide, index) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (index === 0) {
    // Le premier bullet est actif par défaut
    dot.classList.add('active')
  }
  dot.addEventListener('click', () => {
    // Changer de diapositive lorsque l'on clique sur un bullet point
  })
  dotsContainer.appendChild(dot)
})
