---
description: ""
tags:
  - cas d'usage
  - sparql
---

# Cas d'usage relatifs à l'habilitation doctorale

## Liste des établissements membres du réseau thèse

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?nom ?codeEtab WHERE {
  ?etab wdt:P3 ?codeEtab;
     wdt:P40 ?nom.
    
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
:::note

https://movies.abes.fr/api/membres_reseau_these.csv

:::

## Lister les habilitations doctorales

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?etabLabel ?code_etab ?debut ?fin WHERE {
  ?etab wdt:P3 ?code_etab;
     p:P6 ?habiliatation.
  
  ?habiliatation pq:P4 ?debut.
  OPTIONAL {?habiliatation pq:P5 ?fin}.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

:::note

Pour l'ensemble des établissements :

https://movies.abes.fr/api/habilitations_doctorales.csv

Ou pour un seul établissement (par code établissement) :

https://movies.abes.fr/api/movies-api/habilitation_doctorale?codeEtab=PESC

:::

## Lister les habilitations doctorales en cours

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?etabLabel ?codeEtab ?debut WHERE {
  ?etab wdt:P3 ?codeEtab;
     p:P6 ?habiliatation.
  
  OPTIONAL {?habiliatation pq:P4 ?debut}.
  FILTER NOT EXISTS { ?habiliatation pq:P5 ?fin }.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
:::note

https://movies.abes.fr/api/habilitations_doctorales_en_cours.csv

:::

## Lister les habilitations doctorales échues

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?etabLabel ?codeEtab ?debut ?fin WHERE {
  ?etab wdt:P3 ?codeEtab;
     p:P6 ?habiliatation.
  
  OPTIONAL {?habiliatation pq:P4 ?debut}.
  ?habiliatation pq:P5 ?fin.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
:::note

https://movies.abes.fr/api/habilitations_doctorales_echues.csv

:::

## Filiations des environnements thèses de l'Université Paris-Saclay (COMUE)

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {
  ?etab wdt:P3 ?_codeEtab.

  # recherche de manière récursive les déscendants et ascendants et l'établissement d'appartenance
  ?etab (wdt:P42*/wdt:P41*)* | wdt:P43 ?org.
  
  ?org wdt:P1 wd:Q9;
       wdt:P3 ?code_etablissement.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
:::note

https://movies.abes.fr/api/ascendances_descendances_etab_these.csv?codeEtab=UPAS

:::


## Assistance déportée : retrouver les établissements à contacter pour les thèses de la COMUE USPC

```sparql
TODO
```

:::note
TODO
:::
