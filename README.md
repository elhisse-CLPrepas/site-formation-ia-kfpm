# site-formation-ia-kfpm

Mini site GitHub Pages pour mettre a disposition des membres de l'equipe KFPM les contenus essentiels de formation IA.

Depot cible :

```text
https://github.com/elhisse-CLPrepas/site-formation-ia-kfpm.git
```

## Objectif

Partager progressivement :

- les modules essentiels de formation IA ;
- la methode LN-IA ;
- les supports de production ;
- la banque de prompts ;
- les ressources utiles a l'equipe.

Le contenu commence volontairement avec une base reduite. Il sera enrichi selon les besoins du groupe, les demandes de formation et les validations humaines.

## Structure

```text
site-formation-ia-kfpm/
  index.html
  assets/
    css/site.css
    img/hero-kfpm.png
    js/config.js
    js/content.js
    js/app.js
  00_GENERER_DANS_ATELIER/
    formulaire-individuel-membre-formation-ia-kfpm.xlsx
  affiches/
    affiche-annonce-travail-groupe-ln-ia-kfpm-v1.png
  ressources/
    plan-formation-equipe-kfpm.md
    banque-prompts-pub-kfpm.md
    methode-production-7-etapes.md
    calendrier-production-30-jours.md
  FORMULAIRE-COLLECTE-MEMBRES-KFPM.md
  DEPLOIEMENT-GITHUB-PAGES.md
  MODELE-ACCES-MAIL.md
  MISE-A-JOUR-CONTENU.md
```

## Collecte des membres

Avant validation definitive de l'acces, utiliser :

```text
FORMULAIRE-COLLECTE-MEMBRES-KFPM.md
```

Pour un usage individuel a partager et remplir, utiliser aussi :

```text
00_GENERER_DANS_ATELIER/formulaire-individuel-membre-formation-ia-kfpm.xlsx
```

Ce formulaire precise :

- l'identite du membre ;
- son email a autoriser ;
- son appartenance : gerance, personnel FPM, personnel KPM, stagiaires FPM ou stagiaires KPM ;
- son niveau IA initial ;
- la procedure de connexion a la page GitHub Pages.

Les formulaires remplis ne doivent pas etre publies dans ce depot public.

## Deploiement GitHub Pages

Pour un depot dedie, publier depuis la racine du depot :

1. pousser ce dossier dans `elhisse-CLPrepas/site-formation-ia-kfpm` ;
2. ouvrir `Settings` ;
3. ouvrir `Pages` ;
4. choisir la branche principale ;
5. choisir `/root` comme source ;
6. enregistrer.

## Acces et confidentialite

GitHub Pages reste le portail public et ne contient aucune liste d'emails. Les supports reserves sont places dans un depot GitHub prive et/ou dans Google Drive, puis partages directement avec les participants valides. Voir `GESTION-PRIVEE-PARTICIPANTS.md`.

Le lien du dossier Drive des participants est centralise dans `assets/js/config.js`. Le lien peut etre visible publiquement ; la protection reelle doit donc etre appliquee dans les autorisations Google Drive (`Acces general : Limite`).

## Mise a jour progressive

Les modules visibles sur le site sont dans :

```text
assets/js/content.js
```

Les documents consultables sont dans :

```text
ressources/
```

Les affiches visuelles de l'atelier sont dans :

```text
affiches/
```
