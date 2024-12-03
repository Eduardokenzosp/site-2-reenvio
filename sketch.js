let musica;
 function preload(){
   music = loadSound("fundo.mp3") 
 }
function setup(){
  music.play();
  music.loop();
}
const avança = document.querySelectorAll(".proximo");
avança.forEach(button => {
  button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
    atual.classList.remove('ativo');
    
    document.getElementById(proximoPasso).classList.add('ativo');
  })
})      

  