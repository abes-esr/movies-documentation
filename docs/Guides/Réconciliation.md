---
title: Réconcilier et exporter des données dans Wikibase
---

# Réconcilier et exporter des données dans Wikibase

## Principes généraux

La réconciliation est le processus qui permet d'aligner des entités d'un projet OpenRefine avec une source de données externe. Ce processus est l'étape préalable à toute opération d'export de données dans une instance Wikibase depuis OpenRefine.

## Configurer le réconciliateur

:::info

Le réconciliateur est déjà configuré sur l'instance OpenRefine [refmovies](https://refmovies.abes.fr/). Cette section n'est utile que dans les cas où il est nécessaire de configurer le réconciliateur sur une autre instance d'OpenRefine.

:::

Lorsqu'un réconciliateur est configuré il devient utilisable dans l'ensemble des projets de l'instance OpenRefine.


TODO TODO TODO

## Réconcilier les données

:::warning

Avant de lancer la réconciliation assurez-vous que Movies est bien l'instance Wikibase utilisée par OpenRefine.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/2d2f409d-1286-40dc-bf29-53ebc84a8e21)


![image](https://github.com/abes-esr/movies-documentation/assets/60341438/bc0c5fac-30a3-45c3-a288-0ce65d74ca94)

:::

Dans un projet OpenRefine la réconciliation des données est réalisée colonne par colonne. La réconciliation permet d'aligner les valeurs d'une colonne avec des entités Wikibase.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/dd9181be-a458-406d-b751-2e3e220bf8e3)

Depuis l'entête de la colonne colonne à réconcilier ⓵ il faut sélectionner l'action : `Réconcilier` ⓶ > `Démarer la réconciliation`.⓷

## Configurer la réconciliation

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/369854bb-00c3-4d94-a2e7-bb5543dada10)

Il faut ensuite choisir le service de réconciliation à utiliser. Pour Movies c'est le service `wikibase-docker (fr)` qui doit être sélectionné ⓵ avant de démarrer la réconciliation. ⓶

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/8b97e0b9-921d-4a9c-b73e-10dc99300192)

Il est ensuite possible de configurer la réconciliation en choisissant :

* le type d'entité à utiliser pour réconcilier le contenu de chaque cellule de la colonne (optionel).⓵  Par exemple restreindre l'alignement sur des entités de type `Organisation`. 
* le nombre maximum de candidats (optionnel).⓶

Cliquer sur `Démarer la réconciliation` permet de lancer le processus de réconciliation. ⓷

## Evaluer les candidats

Une fois les candidats identifiés trois options sont possibles :

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/333040fc-4a48-4955-9c0c-1c84e5fe074f)

* Apparier le candidat ⓵
* Créer un nouvel élément (créer une nouvelle entité dans Wikibase) ⓶
* Aligner manuellement la cellule en recherchant une entité dans Wikibase ⓷

Il est possible d'utiliser les facettes à gauche de l'écran pour filtrer les candidats par score d'alignement.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/502d67b2-5c24-4f0e-8f2d-e22751e93ca3)

:::info

Les actions "Apparier le candidat" et "créer un nouvel élément" entité peuvent être réaliser pour l'ensemble des cellules d'une colonne. Depuis l'entête d'une colonne ⓵ `Réconcilier` ⓶ -> `Actions` ⓷ :

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/f84540b4-fd34-48b9-829c-852dfaa3a68f)

:::

## Saisir le schéma de données

La saisie du schéma de données permet de :

* Créer une entité
* Ajouter des déclarations (propriétés et références) à une entité
* Ajouter des termes (labels des descriptions) à une entité

Les valeurs des déclarations et des termes peuvent être saisies manuellement ou correspondre à la valeur d'une cellule.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/5df3e6dc-77bc-4dc1-9f34-f9724d9e152a)

L'interface de saisie des données se divise en trois parties :

* La section de gestion des schéma (OpenRefine permet de créer de sauvgarder et charger des schémas) ⓵
* La section de gestion des colonnes (les colonnes soulignées en verts correspondent aux colonnes alignées). Les colonnes peuvent être glissées dans la section de création d'entité. ⓶
* La section de création d'entité ⓷

## Créer/modifier de nouvelles entités

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/c4c517d9-282d-4501-87bb-8f1adeef1070)

La section de création d'entité permet de réaliser les actions suivantes

* Ajouter un terme ⓵
* Ajouter une déclaration ⓶
* Créer une nouvelle entité ⓷

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/8cfb3192-686f-4fa9-80c6-cd54603e861c)

## Identifier les erreurs et prévisualiser les modifications

Avant d'importer les données il est possible de repérer certaines erreurs grâce à l'onglet `Problèmes` ⓵ et de prévisualiser les modifications grâce à l'onget `Prévisualisation` ⓶

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/ffcc0f62-a542-4d17-aa38-d6883fd82c7a)

## Exporter des données

Une fois les données alignées et le schéma créé il est possible d'exporter les données vers Wikibase (`Wikidata` ⓵ -> `Publier les modifications sur Wikibase` ⓶.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/223475fa-ad84-4409-95e5-f5c69fd02fb9)

La fenêtre qui s'ouvre permet de saisir un message de commit ⓵ et de publier les modification ⓶. Si l'utilisateur n'est pas déjà authentifier un pop up s'ouvre pour demander l'authentification de l'utilisateur.

Avant de publier les modifications il faut vérifier que l'instance Wikibase est bien la bonne.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/188d3e55-acd0-4f21-aa58-b7a403bad130)

:::caution

Il est nécessaire de disposer des droits en écriture sur Movies pour exproter des données depuis OpenRefine. Il n'est pas possible d'utiliser ses identifiants Windows pour s'authentifier à Movies, un compte bot est prévu à cet effet.

Le compte Bot dispose de quotas d'écriture plus élevé qu'un utilisateur lambda

:::

## Références

* https://openrefine.org/docs/manual/reconciling
