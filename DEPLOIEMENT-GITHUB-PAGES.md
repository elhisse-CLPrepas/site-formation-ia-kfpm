# Deploiement GitHub Pages - site-formation-ia-kfpm

## Objectif

Publier un mini site de formation IA pour les membres du groupe KFPM, avec un contenu reduit au depart puis enrichi progressivement.

## Structure du pack

```text
site-formation-ia-kfpm/
  index.html
  README.md
  DEPLOIEMENT-GITHUB-PAGES.md
  MODELE-ACCES-MAIL.md
  MISE-A-JOUR-CONTENU.md
  assets/
    css/site.css
    img/hero-kfpm.png
    js/config.js
    js/content.js
    js/app.js
  ressources/
    plan-formation-equipe-kfpm.md
    banque-prompts-pub-kfpm.md
    methode-production-7-etapes.md
    calendrier-production-30-jours.md
```

## Deploiement

Depot cible :

```text
https://github.com/elhisse-CLPrepas/site-formation-ia-kfpm.git
```

1. Pousser le contenu du dossier `site-formation-ia-kfpm` sur GitHub.
2. Ouvrir le depot GitHub `elhisse-CLPrepas/site-formation-ia-kfpm`.
3. Aller dans `Settings`.
4. Ouvrir `Pages`.
5. Choisir la branche principale.
6. Choisir le dossier `/root`.
7. Enregistrer.

GitHub genere ensuite une URL publique du type :

```text
https://elhisse-clprepas.github.io/site-formation-ia-kfpm/
```

## Mise a jour du contenu

Les modules affiches sur le site sont dans :

```text
assets/js/content.js
```

Pour ajouter un module, recopier ce modele :

```js
{
  title: "Titre du module",
  category: "essentiel",
  duration: "20 min",
  status: "disponible",
  summary: "Description courte du module."
}
```

Categories recommandees :

- `essentiel`
- `atelier`
- `suivi`

Statuts recommandes :

- `disponible`
- `prochainement`
- `a-valider`

## Mise a jour des emails autorises

Le fichier de configuration est :

```text
assets/js/config.js
```

On peut autoriser :

- des emails precis ;
- des domaines complets.

Important : cette barriere est utile pour orienter l'utilisateur, mais elle n'est pas une securite forte car le site GitHub Pages reste statique.

## Option fiable pour vrai acces prive

Pour une autorisation reelle par email, utiliser un service d'authentification devant GitHub Pages :

- Cloudflare Access ;
- Google Workspace / Apps Script avec verification ;
- site prive dans un depot GitHub limite aux membres ;
- plateforme avec authentification integree.

GitHub Pages seul ne peut pas verifier un utilisateur cote serveur.
