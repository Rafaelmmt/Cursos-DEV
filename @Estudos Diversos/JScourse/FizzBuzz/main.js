let play = []
let count = 1

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    play.push(' FizzBuzz')
  } else if (count % 3 === 0) {
    play.push(' Fizz')
  } else if (count % 5 === 0) {
    play.push(' Buzz')      
  } else {
    play.push(' ' + count)
  }
  count++
  console.log(play)
}

const container = document.getElementById('container')
const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
  fizzBuzz()
  container.textContent = play
})


