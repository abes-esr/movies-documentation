## Réconcilier et exporter des données dans Wikibase

### Principes généraux

La réconciliation est le processus qui permet d'aligner des entités et des propriétés d'un projet OpenRefine avec une source de données externe. Ce processus est l'étape préalable à toute opération d'export de données dans une instace Wikibase.

### Configurer le réconciliateur

:::info

Le réconciliateur est déjà configuré sur l'instance OpenRefine refmovies. Cette section n'est utile que dans les cas où il est nécessaire de configurer le réconciliateur sur une autre instance d'OpenRefine.

:::

Lorsqu'un réconciliateur est configuré il devient utilisable dans l'ensemble des projets de l'instance OpenRefine.

### Réconcilier les données

Dans un projet OpenRefine la réconciliation des données est réalisée colonne par colonne.

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



### Saisir le schéma de données

### Importer des données


:::caution

Il est nécessaire de disposer des droits en écriture sur Movies pour exproter des données depuis OpenRefine. Il n'est pas possible d'utiliser ses identifiants Windows pour s'authentifier à Movies, un compte bot est prévu à cet effet.

:::

## Références :

* https://openrefine.org/docs/manual/reconciling
