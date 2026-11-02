# Personnaliser le site pour un nouveau couple (formule Essentiel)

## 1. Un seul fichier : `js/config.js`
Noms, date, photo principale, versets, histoire, heure de la cérémonie,
couleurs du dress code, lieu, cadeaux, date limite de RSVP et identifiants EmailJS.

## 2. La photo principale
Remplace `assets/images/hero.JPG` (environ 2000 px de côté au maximum).

## 3. Les balises d'aperçu du lien (une seule fois, tout en haut de `index.html`)
Noms, adresse du site et image : les réseaux sociaux les lisent avant le JavaScript,
elles ne peuvent donc pas venir de `config.js`.

## 4. EmailJS
Chaque réponse arrive par courriel. Le modèle EmailJS utilise `{{nom}}`, `{{email}}`,
`{{presence}}` et `{{message}}`. Limite les domaines autorisés dans les paramètres EmailJS.

## 5. Ce qui n'est pas dans Essentiel (options à la carte ou formules supérieures)
- Galerie photos et musique d'ambiance (option +100 $ ou formule Signature)
- Tableau des réponses RSVP exportable en Excel (formules Signature et Premium)
- Version bilingue, page FAQ, programme PDF, galerie téléchargeable

## 6. Avant de livrer
- Teste le formulaire RSVP (réponse « oui » et « non »).
- Vérifie la date du compte à rebours.
- Vérifie que la page s'affiche bien sur téléphone.
