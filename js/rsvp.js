const R = CONFIG.rsvp;

emailjs.init(R.emailjs.cle);


// ================= PAGE : infos du couple =================

document.title = `${CONFIG.prenom1} & ${CONFIG.prenom2} · RSVP`;

function initiales(nom){
    return nom.trim().charAt(0).toUpperCase();
}

const seal = document.getElementById("sealInitials");
if(seal){
    seal.innerHTML = `${initiales(CONFIG.prenom1)}&${initiales(CONFIG.prenom2)}`;
}

const deadline = document.getElementById("rsvpDeadline");
if(deadline){
    deadline.textContent = `Merci de répondre avant le ${R.dateLimite}`;
}


// ================= ENVOI (RSVP simple : réponse reçue par courriel) =================

const form = document.querySelector(".rsvp-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const bouton = form.querySelector('button[type="submit"]');
    bouton.disabled = true;

    const donnees = {
        nom: document.getElementById("name").value,
        email: document.getElementById("email").value,
        presence: document.querySelector('input[name="presence"]:checked').value,
        message: document.getElementById("message").value
    };

    emailjs.send(R.emailjs.service, R.emailjs.modele, donnees)
    .then(function(){
        alert("Merci pour votre réponse ❤️");
        form.reset();
    })
    .catch(function(erreur){
        alert("Une erreur est survenue.");
        console.log(erreur);
    })
    .finally(function(){
        bouton.disabled = false;
    });

});
