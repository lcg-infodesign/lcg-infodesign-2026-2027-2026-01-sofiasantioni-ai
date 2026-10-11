let posizione = 0; // Variabile per gestire la velocità e il movimento
let velocita = 5;  // Regola questo numero per far andare l'auto più o meno veloce

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
}

function draw() {
  // Aggiorna la posizione ad ogni fotogramma per creare il movimento
  posizione -= velocita; 

  
  background(135, 206, 235); // Cielo azzurro
  
  // Strada asfaltata
  noStroke();
  fill(80); 
  rect(0, 370, width, height - 370);
  
  // Linea di mezzeria in movimento
  fill(255);
  for (let x = 0; x < width + 100; x += 60) {
    let xInMovimento = (x + posizione) % (width + 60);
    if (xInMovimento < 0) {
      xInMovimento += width + 60;
    }
    rect(xInMovimento, 430, 35, 6);
  }

  //carrozzeria
  push(); 
  fill(100, 150, 200);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(100, 300);   
  vertex(200, 300);   
  vertex(250, 200);   
  vertex(400, 200);   
  vertex(460, 270);   
  vertex(580, 275);   
  vertex(580, 370);   
  vertex(100, 370);   
  endShape(CLOSE);
  pop(); 

  //dettagli
  push(); 
  fill(50);
  rect(575, 300, 5, 40); // Griglia radiatore
  
  fill(255, 255, 0);
  rect(560, 280, 20, 12, 4); // Faro anteriore giallo

  fill(255, 0, 0);
  rect(95, 310, 15, 25); // Faro posteriore rosso
  pop();

  //ruota sinistra
  push(); 
  fill(20);
  noStroke();
  ellipse(200, 370, 75, 75); // Pneumatico nero fisso
  
  // Rotazione specifica del cerchione interno
  push(); 
  translate(200, 370); // Sposta il centro delle coordinate sul perno della ruota
  rotate(posizione * 0.05); // Applica la rotazione
  fill(200);
  ellipse(0, 0, 30, 30); // Base del cerchione
  stroke(50);
  strokeWeight(3);
  line(-15, 0, 15, 0);   // Raggi argentati
  line(0, -15, 0, 15);
  pop(); 
  
  pop(); 

  //ruota destra
  push(); 
  fill(20);
  noStroke();
  ellipse(480, 370, 75, 75); // Pneumatico nero fisso
  
  // Rotazione specifica del cerchione interno
  push(); 
  translate(480, 370); // Sposta il centro delle coordinate sul secondo perno
  rotate(posizione * 0.05); // Applica la rotazione
  fill(200);
  ellipse(0, 0, 30, 30); // Base del cerchione
  stroke(50);
  strokeWeight(3);
  line(-15, 0, 15, 0);   // Raggi argentati
  line(0, -15, 0, 15);
  pop(); 
  
  pop(); 

  //finestrini
  push(); 
  fill(255);
  stroke(0);
  strokeWeight(1);
  
  rect(280, 215, 60, 45); // Finestrino posteriore quadrato
  
  beginShape(); // Finestrino anteriore 
  vertex(355, 215);
  vertex(410, 215);
  vertex(445, 260);
  vertex(355, 260);
  endShape(CLOSE);
  pop();

 //maniglie
  push(); 
  fill(0);
  noStroke();
  ellipse(320, 275, 12, 6);  // Maniglia sinistra
  ellipse(385, 275, 12, 6);  // Maniglia destra
  pop();
}
