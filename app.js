/**
 * botao do panico
 * @author murilo dos santos 
 */

const botao = document.getElementById ('panico')
 const som = new Audio ("audio/som.mp3")
botao.addEventListener('mousedown', (event) => {
  event.defaultPrevented ()
 som.play()

})

botao.addEventListener('mouseup', (event) => {
event.defaultPrevented ()
som.pause()



})

botao.addEventListener('touchend', (event) => {
    event.defaultPrevented ()
    som.pause()


})

botao.addEventListener('touchstart', (event) => {
    event.defaultPrevented ()
som.play()

})
