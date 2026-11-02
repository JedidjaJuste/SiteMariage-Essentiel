// --- Application de la config au reste de la page ---

function initiales(nom){ 
  return nom.trim().charAt(0).toUpperCase(); 
}


// Titre

document.title = `${CONFIG.prenom1} & ${CONFIG.prenom2}`;



// HERO

const heroPhoto = document.getElementById('heroPhoto');

if(heroPhoto){
  heroPhoto.src = CONFIG.photoHero;
}


const heroNames = document.getElementById('heroNames');

if(heroNames){
  heroNames.innerHTML = 
  `${CONFIG.prenom1} <span class="amp">&amp;</span> ${CONFIG.prenom2}`;
}


const heroDate = document.getElementById('heroDate');

if(heroDate){
  heroDate.textContent = CONFIG.sousTitreHero;
}




// Initiales

const monogramme = `${initiales(CONFIG.prenom1)}&${initiales(CONFIG.prenom2)}`;


const seal = document.getElementById('sealInitials');

if(seal){
  seal.innerHTML = monogramme;
}




// VERSET
const verseText = document.getElementById('verseText');

if(verseText){
  verseText.textContent = CONFIG.verset.texte;
}


const verseRef = document.getElementById('verseRef');

if(verseRef){
  verseRef.textContent = CONFIG.verset.reference;
}


const verseText2 = document.getElementById('verseText2');

if(verseText2){
  verseText2.textContent = CONFIG.verset.texte2;
}


const verseRef2 = document.getElementById('verseRef2');

if(verseRef2){
  verseRef2.textContent = CONFIG.verset.reference2;
}



// LIEU

const locationName = document.getElementById('locationName');

if(locationName){
  locationName.textContent = CONFIG.lieu.nom;
}


const locationAddress = document.getElementById('locationAddress');

if(locationAddress){
  locationAddress.textContent = CONFIG.lieu.adresse;
}




// GOOGLE MAPS

const mapsQuery = encodeURIComponent(CONFIG.lieu.adressePourCarte);


const mapEmbed = document.getElementById('mapEmbed');

if(mapEmbed){
  mapEmbed.src = 
  `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
}


const mapLink = document.getElementById('mapLink');

if(mapLink){
  mapLink.href =
  `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
}





// FOOTER

const footer = document.getElementById('footerText');

if(footer){

  footer.innerHTML =
  `${CONFIG.prenom1} &amp; ${CONFIG.prenom2} · ${CONFIG.sousTitreHero.split('—')[0].trim()}`;

}





// ================= TITRES DES VERSETS =================
const verseTitle1 = document.getElementById('verseTitle1');
if(verseTitle1){
  verseTitle1.textContent = `${CONFIG.prenom2} à ${CONFIG.prenom1}`;
}

const verseTitle2 = document.getElementById('verseTitle2');
if(verseTitle2){
  verseTitle2.textContent = `${CONFIG.prenom1} à ${CONFIG.prenom2}`;
}

// ================= SEAL (2e monogramme) =================
const seal2 = document.getElementById('sealInitials2');
if(seal2){
  seal2.innerHTML = monogramme;
}

// ================= HISTOIRE =================
const storyText = document.getElementById('storyText');
if(storyText && CONFIG.histoire){
  storyText.textContent = CONFIG.histoire;
}

// ================= PROGRAMME =================
const programTime = document.getElementById('programTime');
if(programTime && CONFIG.programme){
  programTime.textContent = CONFIG.programme.heure;
}

const programDesc = document.getElementById('programDesc');
if(programDesc && CONFIG.programme){
  programDesc.textContent = CONFIG.programme.description;
}

// ================= DRESS CODE =================
function estFonce(hex){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  return (0.299*r + 0.587*g + 0.114*b) < 155;
}

const dressColors = document.getElementById('dressColors');
if(dressColors && CONFIG.dressCode){
  CONFIG.dressCode.couleurs.forEach(couleur => {
    const bloc = document.createElement('div');
    bloc.className = 'dress-color';

    const cercle = document.createElement('div');
    cercle.className = 'color-circle';
    cercle.style.background = couleur.hex;

    const nom = document.createElement('span');
    nom.textContent = couleur.nom;
    if(estFonce(couleur.hex)){
      nom.style.color = 'var(--blanc-ivoire)';
    }

    cercle.appendChild(nom);
    bloc.appendChild(cercle);
    dressColors.appendChild(bloc);
  });
}

// ================= CADEAUX =================
function afficherCadeau(idItem, idValeur, valeur){
  const item = document.getElementById(idItem);
  const cible = document.getElementById(idValeur);
  if(!item || !cible) return;
  if(valeur){
    cible.textContent = valeur;
  } else {
    item.style.display = 'none';
  }
}

if(CONFIG.cadeaux){
  afficherCadeau('giftCashItem', 'giftCash', CONFIG.cadeaux.especes);
  afficherCadeau('giftInteracItem', 'giftInterac', CONFIG.cadeaux.interac);
}

// ================= DATE LIMITE RSVP =================
const rsvpDeadline = document.getElementById('rsvpDeadline');
if(rsvpDeadline && CONFIG.rsvp){
  rsvpDeadline.textContent =
  `Merci de répondre avant le ${CONFIG.rsvp.dateLimite}`;
}

// ================= COMPTE A REBOURS =================


const cible = new Date(CONFIG.dateMariage).getTime();



function pad(n){

  return String(n).padStart(2,'0');

}



function maj(){


  const grid = document.getElementById('countdownGrid');


  if(!grid) return;



  const maintenant = Date.now();

  const diff = cible - maintenant;



  if(diff <= 0){

    grid.innerHTML =
    '<div class="countdown-done">Le grand jour est arrivé ! 🎉</div>';

    return;

  }



  const jours = Math.floor(diff / 86400000);

  const heures = Math.floor((diff % 86400000) / 3600000);

  const min = Math.floor((diff % 3600000) / 60000);

  const sec = Math.floor((diff % 60000) / 1000);



  document.getElementById('cd-jours').textContent = pad(jours);

  document.getElementById('cd-heures').textContent = pad(heures);

  document.getElementById('cd-min').textContent = pad(min);

  document.getElementById('cd-sec').textContent = pad(sec);


}



maj();

setInterval(maj,1000);






// ================= SCROLL REVEAL =================


const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{


  entries.forEach(entry=>{


    if(entry.isIntersecting){


      entry.target.classList.add("active");

      observer.unobserve(entry.target);


    }


  });


},{
  threshold:0.15
});



revealElements.forEach(element=>{

  observer.observe(element);

});






// Animation pulse

function pulse(id){


  const element = document.getElementById(id);


  if(element){

    element.animate([

      {transform:"scale(1)"},

      {transform:"scale(1.12)"},

      {transform:"scale(1)"}

    ],{

      duration:220

    });

  }

}
