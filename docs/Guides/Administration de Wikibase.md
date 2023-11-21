# Administration de Wikibase

## Gestion des comptes / Authentification

**La gestion des compte ne doit pas être faite depuis l'interface Wikibase.** La gestion des comptes est assurée par LDAP. Les comptes BOT qui disposent de droits spécifiques pour intervenir sur de grosses volumétries sont créés automatiquement au lancement du serveur Movies.

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

* Supprimer une entité : 

La suppression est réalisée depuis l'interface de Wikibase (`Plus` ① -> `Supprimer` ②), après authentification.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/6d8dfed5-4f0d-48a8-bafa-14b69ccb9ed2)


:::note

Après chaque suppression il faut vérifier les liens morts

:::

## Indentifier les liens morts

* https://movies.abes.fr/wiki/Special:BrokenRedirects
* https://movies.abes.fr/wiki/Special:DeadendPages

## Voir les dernières modifications

### Dernières modifications d'un utilisateur

## Supprimer des données en masse

:::danger

Cette action est irréversible

:::

Le plugin Nuke permet de supprimer des entités par lot.

* https://movies.abes.fr/wiki/Special:Nuke
