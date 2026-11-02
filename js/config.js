// =====================================================================
//  CONFIG — le SEUL fichier à modifier pour personnaliser un site.
//  (Sauf les balises d'aperçu du lien tout en haut de index.html.)
// =====================================================================
const CONFIG = {

  // ================= MARIÉS =================
  prenom1: "Antoine",
  prenom2: "Léa",

  // ================= DATE DU MARIAGE =================
  dateMariage: "2027-06-19T00:00:00",

  // ================= HERO =================
  sousTitreHero: "19 Juin 2027 - Québec",
  photoHero: "assets/images/hero.JPG",

  // ================= VERSET BIBLIQUE =================
  verset: {
    texte: "A peine les avais-je passés, Que j'ai trouvé celui que mon coeur aime; Je l'ai saisi, et je ne l'ai point lâché...",
    reference: "Cantique des Cantiques 3:4",
    texte2: "Comme un lys au milieu des épines, Telle est mon amie parmi les jeunes filles.",
    reference2: "Cantique des Cantiques 2:2"
  },

  // ================= HISTOIRE DU COUPLE =================
  histoire: "Notre histoire a commencé par une rencontre simple, devenue une belle amitié, puis un amour sur lequel nous avons choisi de bâtir notre vie. Nous sommes heureux de vous convier à la célébration de notre mariage !",

  // ================= PROGRAMME (formule Signature : heure de la cérémonie) =================
  programme: {
    heure: "12h30",
    description: "Célébration de notre union"
  },

  // ================= DRESS CODE =================
  // nom + couleur (code hexadécimal). Ajoute ou retire des couleurs librement.
  dressCode: {
    couleurs: [
      { nom: "Ivoire",    hex: "#F2EEE3" },
      { nom: "Champagne", hex: "#DEC59C" },
      { nom: "Beige",     hex: "#E2D2B9" },
      { nom: "Doré",      hex: "#B69248" },
      { nom: "Brun",      hex: "#4A4035" }
    ]
  },

  // ================= LIEU =================
  lieu: {
    nom: "Lieu de la cérémonie",
    adresse: "Place Royale, Québec, QC",
    adressePourCarte: "Place Royale, Québec, QC"
  },

  // ================= CADEAUX =================
  // Laisse une valeur vide ("") pour masquer la ligne.
  cadeaux: {
    especes: "+ 1 (000) 000-0000",
    interac: "exemple@courriel.com"
  },

  // ================= RSVP =================
  rsvp: {
    dateLimite: "5 Juin 2027",

    // Courriel de notification (EmailJS)
    emailjs: {
      cle: "cSaDzPncDCa_Yuunb",
      service: "service_mk5uwbd",
      modele: "template_5x1ocf3"
    }
  }

};
