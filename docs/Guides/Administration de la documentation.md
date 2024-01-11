# Administration de la documentation

La documentation est administrée depuis le dépôt GitHub [movies-documentation](https://github.com/abes-esr/movies-documentation).

La documentation est enregistrée dans le répertoire [`/doc`](https://github.com/abes-esr/movies-documentation/tree/develop/docs). Pour pouvoir éditer la documentation il est nécessaire de disposer d'un compte GitHub et des droits en écriture sur le dépôt.

## Gestion des branches GitHub

L'ensemble des modifications réalisées sur la branche [develop](https://github.com/abes-esr/movies-documentation/tree/develop) sont automatiquement poussées sur l'interface de test : https://movies-test.abes.fr/doc
L'ensemble des modifications réalisées sur la branche [main](https://github.com/abes-esr/movies-documentation/tree/main) sont automatiquement poussées sur l'interface de production : https://movies.abes.fr/doc

La mise à jour du site web de la documentation peut prendre plusieurs minutes.

Dans la mesure du possible les modifications ne doivent pas être réalisées directement sur la branche main mais sur la branche develop. Pour publier une nouvelle version il faut fusionner la branche develop dans main.

## Documenter une nouvelle classe ou propriété

Pour documenter une nouvelle propriété ou classe il faut créer un nouveau fichier markdown (.md) dans le dossier [/docs/Ontologie/Propriétés](https://github.com/abes-esr/movies-documentation/docs/Ontologie/Propriétés) ou bien dans le dossier [/docs/Ontologie/Classes](https://github.com/abes-esr/movies-documentation/docs/Ontologie/Classes). 

Il est possible de s'aider du modèle suivant [https://github.com/abes-esr/movies-documentation/blob/develop/docs/Ontologie/Propri%C3%A9t%C3%A9s/_modele.md](https://github.com/abes-esr/movies-documentation/blob/develop/docs/Ontologie/Propri%C3%A9t%C3%A9s/_modele.md) ou [https://github.com/abes-esr/movies-documentation/docs/Ontologie/Classes/_modele.md](https://github.com/abes-esr/movies-documentation/blob/develop/docs/Ontologie/Classes/_modele.md) pour créer le fichier markdown.

:::caution

Les classes et propriétés doivent aussi être créées dans Wikibase. La saisie des métadonnées OWL est purement déclarative, aucun contrôle de validité n'est réalisé dans Wikibase.

:::

## Ajouter une page à l'index thématique

Pour rajouter une page à l'[index thématique](/doc/tags) de la documentation Movies, il faut rajouter les métadonnées tags dans l'entête du fichier :

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

## Vérifier les erreurs de publication

Si les modifications ne sont pas visibles sur https://movies.abes.fr/doc :

* Assurez-vous que vous avez bien modifié la bonne branche
* Vérifiez que la [GitHub action chargée de publier automatiquement la documentation](https://github.com/abes-esr/movies-documentation/actions/workflows/build-pubtodockerhub.yml) n'est pas en erreur. ②\
 ![image](https://github.com/abes-esr/movies-documentation/assets/60341438/3d79a596-ac58-4602-b022-6238fd3af882)\
En cas d'erreur vous pouvez consulter les logs pour avoir plus d'information. ①\
![image](https://github.com/abes-esr/movies-documentation/assets/60341438/4aac85a5-ed77-41a2-b6a0-0b9cca3f7c63)

## Ressources

* [Documentation de docusaurus](https://docusaurus.io/docs/category/guides)
* [Memento de la syntaxe Markdown](https://www.markdownguide.org/cheat-sheet/)
