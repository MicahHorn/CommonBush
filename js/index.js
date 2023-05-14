const quote = document.querySelector('.quote')
const image = document.getElementById('img')

const background = `${Math.floor(Math.random() * 6) + 1}.jpg`
image.style.backgroundImage = 'url(' + background + ')'
quote.classList.add('active')
image.classList.add('active')


