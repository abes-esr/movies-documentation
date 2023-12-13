# Administration de Wikibase

L'administration de Wikibase est réalisée principalement depuis la page ["Pages spéciales"](https://movies.abes.fr/wiki/Special:SpecialPages). Cette section liste les liens les plus utiles pour l'administration de Wikibase.

## Gestion des comptes / Authentification

**La gestion des comptes ne doit pas être faite depuis l'interface Wikibase.** La gestion des comptes est assurée par LDAP. Les comptes BOT qui disposent de droits spécifiques pour intervenir sur de grosses volumétries sont créés automatiquement au lancement du serveur Movies.

## Lister l'ensemble des entités

* https://movies.abes.fr/wiki/Special:AllPages?from=&to=&namespace=120

## Lister les entités liées à une entité :

* https://movies.abes.fr/wiki/Special:WhatLinksHere. Il faut saisir `Item:Q` suivit du nombre de l'entité dans le formulaire.

Ou depuis la page d'une entité :

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/ebd6a1f2-fd55-4d92-b0c2-ee09df849f1b)

## Lister l'ensemble des propriétés

* https://movies.abes.fr/wiki/Special:AllPages?from=&to=&namespace=122

## Fusionner des entités

* https://movies.abes.fr/wiki/Special:MergeItems

## Ajouter/Modifier/Supprimer une propriété

* Créer une nouvelle propriété : https://movies.abes.fr/wiki/Special:NewProperty

:::note

Après chaque suppression il faut vérifier les liens morts

:::

## Ajouter/Modifier/Supprimer une entité

* Créer une entité : https://movies.abes.fr/wiki/Special:NewItem

* Modifier une entité :

La modification est réalisée depuis l'interface de Wikibase depuis la page de l'entité concernée.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/c56e7ad2-25e4-48ad-8c14-5dee893ad649)

* Supprimer une entité : 

La suppression est réalisée depuis l'interface de Wikibase depuis la page de l'entité concernée (`Plus` ① -> `Supprimer` ②), après authentification.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/6d8dfed5-4f0d-48a8-bafa-14b69ccb9ed2)


:::note

Après chaque suppression il faut vérifier les liens morts

:::

## Identifier les liens morts

* https://movies.abes.fr/wiki/Special:BrokenRedirects
* https://movies.abes.fr/wiki/Special:DeadendPages

## Voir les dernières modifications

### Lister les contributions de son compte

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/74e8b466-ad7d-485e-8409-b27591371773)

### Lister toutes les contributions d'un autre compte

Cette page nécessite les droits administrateurs

* https://movies.abes.fr/wiki/Special:Contributions

## Supprimer des données en masse

:::danger

Cette action est irréversible

:::

Le plugin Nuke permet de supprimer des entités par lot.

* https://movies.abes.fr/wiki/Special:Nuke
