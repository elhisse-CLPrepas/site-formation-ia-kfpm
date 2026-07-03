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
  ressources/
    plan-formation-equipe-kfpm.md
    banque-prompts-pub-kfpm.md
    methode-production-7-etapes.md
    calendrier-production-30-jours.md
  DEPLOIEMENT-GITHUB-PAGES.md
  MODELE-ACCES-MAIL.md
  MISE-A-JOUR-CONTENU.md
```

## Deploiement GitHub Pages

Pour un depot dedie, publier depuis la racine du depot :

1. pousser ce dossier dans `elhisse-CLPrepas/site-formation-ia-kfpm` ;
2. ouvrir `Settings` ;
3. ouvrir `Pages` ;
4. choisir la branche principale ;
5. choisir `/root` comme source ;
6. enregistrer.

## Acces par email

Le fichier `assets/js/config.js` permet de definir les emails ou domaines autorises.

Important : GitHub Pages est statique. La barriere email integree est une aide de navigation pour groupe de confiance, pas une securite forte. Pour un vrai acces prive, utiliser Cloudflare Access, Google Workspace ou un depot prive.

## Mise a jour progressive

Les modules visibles sur le site sont dans :

```text
assets/js/content.js
```

Les documents consultables sont dans :

```text
ressources/
```
