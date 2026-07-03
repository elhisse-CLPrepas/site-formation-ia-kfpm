# Mise a jour progressive du contenu

## Principe

Le site commence avec l'essentiel. Les contenus sont ajoutes progressivement selon :

- les besoins des membres ;
- les questions posees pendant la formation ;
- les productions reelles de l'equipe ;
- les validations des responsables.

## Ajouter un module sur la page

Modifier :

```text
assets/js/content.js
```

Ajouter un bloc :

```js
{
  title: "Titre du module",
  category: "essentiel",
  duration: "20 min",
  status: "disponible",
  summary: "Description courte du module."
}
```

Categories conseillees :

- `essentiel`
- `atelier`
- `suivi`

Statuts conseilles :

- `disponible`
- `prochainement`
- `a-valider`

## Ajouter une ressource

1. Ajouter le fichier dans `ressources/`.
2. Ajouter un lien dans la section `Ressources` de `index.html`.
3. Verifier que le contenu ne contient aucune information sensible.
4. Valider humainement avant publication.

## Regle de validation

Production IA -> Correction equipe -> Validation responsable -> Publication -> Suivi

## Regle de sobriete

Ne publier que ce qui est utile, clair et exploitable par l'equipe.
