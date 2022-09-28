// L'artwork si ispira alle forme di alcune opere di Kelly Vasarely

function setup() {
  createCanvas(windowWidth,windowHeight); //canvas si adatta alla dimensione della finestra
  background(220);
}

function draw() {
  
  const scacchiera = 400; //dimensione fissa della scacchiera
  const dimensione =[5,10,20,40,80] //array dimensioni possibili del lato dei quadratini. Sono divisori della dimensione della scacchiera
  const win5 = windowWidth / 5; //larghezza finestra divisa in 5 sezioni

  // a seconda della posizione del mouse seull'asse X viene presa, dall'array, una dimensione del lato dei quadratini.
  //Più ci si sposta a destra più il valore è alto ed i quadratini sono grandi

  if ( mouseX < win5) {var lato = dimensione[0]} // da sinistra: porzione di schermo 1 -> corrisponde al valore del lato più piccolo
  else if (mouseX < (win5 * 2)  && mouseX> win5) {var lato = dimensione[1]} //porzione di schermo 2
  else if (mouseX < (win5 * 3)  && mouseX> (win5 * 2)) {var lato = dimensione[2]} //porzione di schermo 3
  else if (mouseX < (win5 * 4)  && mouseX> (win5 * 3)) {var lato = dimensione[3]} // porzione di schermo 4
  else {var lato = dimensione[4]} //porzione di schermo 5 -> corrisponde al valore del lato più grande

  // array colori possibili 
  const colori1 = ['#000000','#9a9a7b','#b0b0b2']; //colori quadrati
  const colori2 = ['#214de2','#e33521', '#5a3e3b']; //colori cerchi

  noStroke();
  translate (windowWidth/2 - scacchiera/2, windowHeight/2 - scacchiera/2) // Centrare la scacchiera dinamicamente rispetto alla finestra
  frameRate (3); 

  //ciclo for: i quadratini si generano all'interno delle dimensioni del quadrato più grande (scacchiera)
  for (let x = 0; x< scacchiera; x+=lato) 
      {
        for (let y =0; y< scacchiera; y+=lato)
            {
              fill(random(colori1)); //colori dei quadratini scelti random dall'array ad ogni iterazione del ciclo   
              rect (x,y,lato); //creazione quadrati. La dimensione è dinamica

              //Probabilità di presenza di cerchi all'interno dell'artwork
              if (random() <0.6) {
                                  fill(random(colori2)); //colori dei quadratini scelti random dall'array ad ogni iterazione del ciclo
                                 }
              else {
                    noFill(); //cerchi non si vedono
                   }

              circle (x+lato/2,y+lato/2,random(lato/2 , lato/5 * 4)) //cerchi centrati rispetto ai quadrati e con dimensione variabile. minimo la metà massimo quasi quanto il lato del quadrato

    }
      }

      
}