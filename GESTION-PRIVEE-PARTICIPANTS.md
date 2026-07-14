# Gestion privee des participants

## Regle de securite

Le fichier `liste-participants-formation-ia-2026.xlsx` contient des donnees personnelles. Il reste local ou dans un Drive restreint. Il ne doit jamais etre copie dans ce depot, dans JavaScript, dans un commit, une issue GitHub ou GitHub Pages.

GitHub Pages est public et ne valide pas reellement une adresse email. Masquer une section avec JavaScript ne protege pas les fichiers.

## Architecture retenue

| Espace | Visibilite | Contenu |
|---|---|---|
| GitHub Pages | Public | Programme, calendrier public, methode et ressources validees pour publication |
| Depot GitHub prive | Collaborateurs invites | Exercices, sources, corrections et suivi technique |
| Google Drive restreint | Emails valides uniquement | Supports de cours, livrables et documents internes |
| Registre participants | Responsable formation uniquement | Nom, telephone, email, niveau, groupe, statut et consentement |

## Dossier Drive de la formation

Dossier transmis par le responsable :

```text
https://drive.google.com/drive/folders/1pNdrO-SLxxsMCaijFAoCHGLCMgkVBywz?usp=drive_link
```

Ce lien est affiche sur le portail pour orienter les participants. La confidentialite depend toutefois des autorisations configurees dans Google Drive. Le proprietaire doit selectionner `Acces general : Limite`, puis ajouter individuellement les emails valides avec le role `Lecteur` par defaut. Ne pas activer `Toute personne disposant du lien` pour les supports reserves.

## Validation d'un participant

1. Verifier l'identite, l'email, l'etablissement et l'autorisation du responsable.
2. Demander le nom d'utilisateur GitHub du participant. Une adresse email seule ne suffit pas pour l'ajouter comme collaborateur d'un depot personnel.
3. Ajouter le compte au depot prive avec le role minimal necessaire (`Read` pour consulter).
4. Partager ce dossier Drive directement avec l'email valide, sans option « toute personne disposant du lien ».
5. Noter dans le registre prive : date de validation, acces GitHub, acces Drive, groupe et statut.
6. Envoyer au participant les liens utiles et les regles de confidentialite.

## Retrait ou suspension

1. Retirer l'acces au depot prive et aux fichiers Drive.
2. Mettre le statut a `suspendu` ou `termine` dans le registre prive.
3. Consigner la date et le responsable de l'action.

## Controle avant publication

Avant chaque publication, examiner `git status --short` et verifier qu'aucun fichier Excel, CSV, PDF ou image ne contient de donnees personnelles.

## Informations encore necessaires

Pour chaque personne : email valide, nom d'utilisateur GitHub, role souhaite, groupe de formation, statut d'autorisation et date de fin d'acces si elle est connue.
