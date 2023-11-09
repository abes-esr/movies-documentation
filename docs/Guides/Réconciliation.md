## Réconcilier et exporter des données dans Wikibase

### Principes généraux

La réconciliation est le processus qui permet d'aligner des entités et des propriétés d'un projet OpenRefine avec une source de données externe. Ce processus est l'étape préalable à toute opération d'export de données dans une instace Wikibase depuis OpenRefine.

### Configurer le réconciliateur

:::info

Le réconciliateur est déjà configuré sur l'instance OpenRefine refmovies. Cette section n'est utile que dans les cas où il est nécessaire de configurer le réconciliateur sur une autre instance d'OpenRefine.

:::

Lorsqu'un réconciliateur est configuré il devient utilisable dans l'ensemble des projets de l'instance OpenRefine.

### Réconcilier les données

Dans un projet OpenRefine la réconciliation des données est réalisée colonne par colonne. La réconciliation peut s'appliquer à une entité ou une propriété.

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/dd9181be-a458-406d-b751-2e3e220bf8e3)

Depuis l'entête de la colonne colonne à réconcilier ⓵ il faut sélectionner l'action : `Réconcilier` ⓶ > `Démarer la réconciliation`.⓷

#### Configurer la réconciliation

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/369854bb-00c3-4d94-a2e7-bb5543dada10)

Il faut ensuite choisir le service de réconciliation à utiliser. Pour Movies c'est le service `wikibase-docker (fr)` qui doit être sélectionné ⓵ avant de démarrer la réconciliation. ⓶

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/8b97e0b9-921d-4a9c-b73e-10dc99300192)

Il est ensuite possible de configurer la réconciliation en choisissant :

* le type d'entité à utiliser pour réconcilier le contenu de chaque cellule de la colonne (optionel).⓵  Par exemple restreindre l'alignement sur des entités de type `Organisation`. 
* le nombre maximum de candidats (optionnel).⓶

Cliquer sur `Démarer la réconciliation` permet de lancer le processus de réconciliation. ⓷

#### Evaluation des candidats

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

### Saisir le schéma de données

#### L'interface

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

#### Créer une entité

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/c4c517d9-282d-4501-87bb-8f1adeef1070)

La section de création d'entité permet de réaliser les actions suivantes

* Ajouter un terme ⓵
* Ajouter une déclaration ⓶
* Créer une nouvelle entité ⓷

![image](https://github.com/abes-esr/movies-documentation/assets/60341438/8cfb3192-686f-4fa9-80c6-cd54603e861c)


#### Identifier les erreurs

#### Prévisualiser les modifications

### Importer des données

Une fois les données alignées et le schéma créé il est possible d'exporter les données vers Wikibase.

:::caution

Il est nécessaire de disposer des droits en écriture sur Movies pour exproter des données depuis OpenRefine. Il n'est pas possible d'utiliser ses identifiants Windows pour s'authentifier à Movies, un compte bot est prévu à cet effet.

Le compte Bot dispose de quotas d'écriture plus élevé qu'un utilisateur lambda

:::

## Références :

* https://openrefine.org/docs/manual/reconciling
