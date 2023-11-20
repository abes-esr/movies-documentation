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

https://movies.abes.fr/api/membres_reseau_these.csv

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
https://movies.abes.fr/api/habilitations_doctorales.csv

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

https://movies.abes.fr/api/habilitations_doctorales_en_cours.csv

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

https://movies.abes.fr/api/habilitations_doctorales_echues.csv

## Filiations des environnements thèses de l'Université Paris-Saclay (COMUE)

```sparql
SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {
  wd:Q8447 (wdt:P52*/wdt:P53*) ?org.
  
  ?org wdt:P1 wd:Q1;
       wdt:P11 ?code_etablissement.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

## Assistance déportée : retrouver les établissements à contacter pour les thèses de la COMUE USPC

```sparql
SELECT DISTINCT ?successeurLabel ?codeEtab
WHERE
{
  # On recherche l'établissement USPC avec son code étab
  ?etab wdt:P11 "USPC";        
  (wdt:P27*|wdt:P26*|wdt:P29*|wdt:P52)* ?successeur. # on recherche récursivement tous les successeurs ou les membres associés ou constitutifs
  
  # on récupère le code établissement du successeur
  ?successeur wdt:P11 ?codeEtab.
         
  # on vérifie que le successeur est toujours en vie
  FILTER(NOT EXISTS { ?successeur wdt:P19 ?date_suppression. })
  
  # on vérifie que le successeurs a bien une habilitation
  ?successeur p:P54 ?habilitation.
  
  # on vérifie que l'habilitation n'a pas de fin
  FILTER NOT EXISTS {
    ?habilitation pq:P13 ?fin.
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
