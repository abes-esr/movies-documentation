# Administration de la documentation

La documentation est administrée depuis le dépôt GitHub [movies-documentation](https://github.com/abes-esr/movies-documentation).

L'ensemble de la documentation est enregistrée dans le répertoire [`/doc`](https://github.com/abes-esr/movies-documentation/tree/develop/docs). Pour pouvoir éditer la documentation il est nécessaire de disposer d'un compte GitHub et des droits en écriture sur le dépôt.

L'ensemble des modifications réaliées sur la branche [develop](https://github.com/abes-esr/movies-documentation/tree/develop) sont automatiquement poussées sur l'interface de test : https://movies-test.abes.fr/doc
L'ensemble des modifications réaliées sur la branche [main](https://github.com/abes-esr/movies-documentation/tree/main) sont automatiquement poussées sur l'interface de production : https://movies.abes.fr/doc

La mise à jour du site web de la documentation peut prendre plusieurs minutes.

Dans la mesure du possible les modifications ne doivent pas être réalisées directement sur la branche main mais sur la branche develop. Pour publier une nouvelle version il faut fusionner la branche develop dans main.

## Documenter une nouvelle classe ou propriété

Pour documenter une nouvelle propriété ou classe il faut créer un nouveau fichier markdown (.md) dans le dossier [/docs/Ontologie/Propriétés](/docs/Ontologie/Propriétés) ou bien dans le dossier [/docs/Ontologie/Classes](/docs/Ontologie/Classes). 

Il est possible de s'aider du modèle suivant [/docs/Ontologie/Propriétés/_modele.md](docs/Ontologie/Propriétés/_modele.md) ou [/docs/Ontologie/Classes/_modele.md](/docs/Ontologie/Classes/_modele.md) pour créer le fichier markdown.

:::caution

Les classes et propriétés doivent aussi être créées dans Wikibase. La saisie des métadonnées OWL est purement déclarative, aucun contrôle de validité n'est réalisé dans Wikibase.

:::


## Ajouter une page à l'indexe thématique

Pour rajouter une page à l'[indexe thématique](/doc/tags) de la documentation Movies, il faut rajouter les métadonnées tags dans l'entête du fichier :

```md
---
tags:
  - tag 1
  - tag 2
---
```

:::warning

L'entête du fichier est écrit en YAML, attention à l'indentation de chaque tag.

:::

## Ressources

* [Documentation de docusaurus](https://docusaurus.io/docs/category/guides)
* [Memento de la syntaxe Markdown](https://www.markdownguide.org/cheat-sheet/)
