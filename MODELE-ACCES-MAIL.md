# Modele d'acces par mail

## Position claire

GitHub Pages est un hebergement statique. Il ne peut pas garantir seul un acces prive par email.

Le mini site contient donc deux niveaux possibles.

## Niveau 1 - Acces pedagogique simple

Ce niveau est deja integre dans le site.

Fonctionnement :

- l'utilisateur saisit son email ;
- le navigateur compare l'email avec une liste autorisee ;
- si l'email ou le domaine est reconnu, les sections de formation deviennent visibles ;
- l'autorisation est gardee dans le navigateur.

Fichier a modifier :

```text
docs/assets/js/config.js
```

Ce niveau est adapte pour :

- un demarrage rapide ;
- un groupe de confiance ;
- du contenu non sensible ;
- une formation progressive.

Limite :

Ce n'est pas une securite forte. Une personne technique peut lire les fichiers publics du site.

## Niveau 2 - Acces fiable

Pour un contenu vraiment reserve, il faut ajouter une verification externe.

Options recommandees :

### Option A - Cloudflare Access

Cloudflare protege l'URL avec une verification par email ou domaine.

Avantages :

- controle par email ;
- codes temporaires ;
- pas besoin de modifier le site ;
- adapte a GitHub Pages.

### Option B - Google Workspace

Partager les supports sensibles dans Google Drive avec autorisation par email, et laisser GitHub Pages comme page d'accueil.

Avantages :

- simple pour une equipe ;
- controle d'acces par document ;
- historique et permissions Google.

### Option C - Depot GitHub prive

Conserver les contenus sensibles dans un depot prive, et publier seulement les contenus publics sur GitHub Pages.

Avantages :

- securite GitHub ;
- versionnage ;
- acces par membres autorises.

## Recommandation KFPM

Demarrage :

- utiliser le niveau 1 pour les modules essentiels ;
- ne publier aucun contenu sensible ;
- enrichir `content.js` progressivement ;
- garder les documents sensibles dans Google Drive ou depot prive.

Ensuite :

- si le groupe s'elargit, activer Cloudflare Access ou Google Workspace.
