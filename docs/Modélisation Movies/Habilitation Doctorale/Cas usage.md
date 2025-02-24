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
  ?etab wdt:P9 ?codeEtab;
     wdt:P48 ?nom.
    
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
:::note

https://movies.abes.fr/api/v1/TH_membres_reseau_these.csv

:::

## Lister les habilitations doctorales

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>

SELECT ?etabLabel ?debut ?fin WHERE {
  ?etab wdt:P9 ?codeEtab;
     p:P22 ?habiliatation;
     wdt:P22 wd:Q19.
  
  OPTIONAL {?habiliatation pqv:P12/wikibase:timeValue ?debut.}
  OPTIONAL {?habiliatation pqv:P20/wikibase:timeValue ?fin}
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

:::note

Pour l'ensemble des établissements :

https://movies.abes.fr/api/v1/TH_habilitations_doctorales.csv

Ou pour un seul établissement (par code établissement) :

https://movies.abes.fr/api/v1/movies-api/TH_habilitation_doctorale?codeEtab=PESC

:::

## Lister les habilitations doctorales en cours

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>
PREFIX ps: <https://movies.abes.fr/prop/statement/value/>
PREFIX psv: <https://movies.abes.fr/prop/statement/>

SELECT DISTINCT ?etab ?etabLabel ?statement ?datedeb WHERE {
  ?etab p:P22 ?statement .
  ?statement psv:P22 wd:Q19 .
  ?statement pqv:P12/wikibase:timeValue ?datedeb. #timeValue permet d'avoir un bon format de dates
 FILTER NOT EXISTS { ?statement pq:P20 ?fin }.
   SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],fr". }
```
:::note

https://movies.abes.fr/api/v1/TH_habilitations_doctorales_en_cours.csv

:::

## Lister les habilitations doctorales échues

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>

SELECT ?etabLabel ?debut ?fin WHERE {
  ?etab wdt:P9 ?codeEtab;
     p:P22 ?habiliatation;
     wdt:P22 wd:Q19.
  
  OPTIONAL {?habiliatation pqv:P12/wikibase:timeValue ?debut.}
  ?habiliatation pqv:P20/wikibase:timeValue ?fin
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}

```
:::note

https://movies.abes.fr/api/v1/TH_habilitations_doctorales_echues.csv

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

https://movies.abes.fr/api/v1/ascendances_descendances_etab_these.csv?codeEtab=UPAS

:::


## Assistance déportée : retrouver les établissements à contacter pour les thèses de la COMUE USPC

Pour utiliser la requête ci-dessous il faut saisir une valeur à la place du paramètre ?_codeEtab ou utiliser l'API GRLC

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT DISTINCT ?codeEtab ?etabLabel ?codeEtabCible ?etabCibleLabel  WHERE {
  ?etab wdt:P9 'SORU'.

  ?etab wdt:P9 ?codeEtab. 
  OPTIONAL {
    ?etab p:P22 ?hab. # Récupération de l'habilitation
      
    ?hab <https://movies.abes.fr/prop/statement/P22> wd:Q20; # en cas de transfert
         pq:P1 ?beneficiaire.
    
    ?beneficiaire wdt:P9 ?codeEtabCible.
  
    ?etabCible wdt:P9 ?codeEtabCible.
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}

```

:::note

https://movies.abes.fr/api/v1/TH_assistance_deportee.csv?codeEtab=GREN

:::

