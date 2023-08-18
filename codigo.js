



function playgot(){
        trilha2.volume=0.35;        
    trilha2.play();
}
function checagem(){
    const btok = document.getElementById("start");
    btok.style.visibility = "visible";
   

}


function iniciar(){
   // foi clicado no botão start
    trilha2.pause();
    trilha.volume = 1;
    trilha.loop=true;
    trilha.play();
    
    
    const hidra = document.getElementById("hidra");
    hidra.style.backgroundImage = "url('hydra.png')";
    hidra.style.backgroundSize="clip";
    hidra.style.backgroundRepeat = "no-repeat";
    // antes de mais nada vou
    // montar outro Painel via codigo js
    var panel = document.querySelector(".painel");
    panel.innerHTML="<p> Whats a Hell !!! .....</p>";
    const pausadramatica = setTimeout(() => {
                    // esta parte será executada após 2000 milisegundos
                    panel.innerHTML+="<br><p>Aonde foram parar os cavaleiros ??</p>"
                const pausa2 =setTimeout(() => {
                        // Run after 1.5 segundo
                        panel.innerHTML+="<br> Tome uma ação ou seremos devorados, se é que ela nos vê...<br>"; 
                      }, 2500);
                const exibebotoes =setTimeout(() =>{
                        panel.innerHTML="<p> Rápido Qual ação: </p> <button>Golpeie e arrebate uma cabeça</button>";
                        panel.innerHTML+="<br><button>Golpeie certeiramente as 3 cabeças</button><br><button>Escolha outra opção...</button>";
                        }, 3500); 
                      }, 1500);     
                };

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}


    


    



