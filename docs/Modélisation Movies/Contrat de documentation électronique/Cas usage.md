---
description: ""
tags:
  - cas d'usage
  - sparql
---

# Cas d'usage relatifs aux contrats de documentation électronique

## Faire une synthèse des contrats de documentation électronique

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  OPTIONAL {
   ?item wdt:P13 ?fin
  }
}
```

## Lister les contrats de documentation électronique en cours

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  OPTIONAL { 
   ?item wdt:P13 ?fin
  }
  
  FILTER(?fin > NOW())
}
```

## Lister les contrats de documentation électroniques échus

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  ?item wdt:P13 ?fin
  FILTER(?fin < NOW()) 
}
```

## Lister les contrats signés par l'Université Paris 11

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7;
    wdt:P24 wd:Q8650. # Paris 11
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  OPTIONAL {
   ?item wdt:P13 ?fin
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } # le label viendra de préférence dans votre langue, et autrement en anglais
}
```

## Retrouver les héritiers d'un contrat

Cette requête permet de retrouver l’héritier d’un contrat (en partant des signataires). Il faudrait dans la réalité prendre en compte tous les bénéficiaires.

Sont considérés comme héritiers les successeurs non morts.

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT DISTINCT ?beneficiairesLabel WHERE {
  { SELECT ?ben WHERE { wd:Q516 wdt:P16 ?ben. } } # Signataires
  UNION
  { SELECT ?ben WHERE { wd:Q516 wdt:P14 ?ben. } } # Bénéficiaires
  {
    SELECT * WHERE {
      { FILTER(NOT EXISTS { ?ben wdt:P11 ?date_suppression. }) } # Bénéficiaires directs toujours en vie (qui n'a pas de date de mort)
      UNION
      {
        ?ben wdt:P11 ?date_suppression; # Héritiers des bénéficiaires morts (qui a une date de mort)
          wdt:P41 ?successeur.
         FILTER(NOT EXISTS { ?successeur wdt:P11 ?date_suppression. }) # On enlève les héritiers morts
        
        BIND(?successeur AS ?beneficiaires_indirects)
      }
    }
  }
  BIND(IF(BOUND(?beneficiaires_indirects), ?beneficiaires_indirects, ?ben) AS ?beneficiaires)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
