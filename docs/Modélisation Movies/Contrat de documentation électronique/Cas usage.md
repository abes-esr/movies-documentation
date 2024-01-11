---
description: ""
tags:
  - cas d'usage
  - sparql
---

# Cas d'usage relatifs aux contrats de documentation électronique

## Faire une synthèse des contrats de documentation électronique

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>
PREFIX psv: <https://movies.abes.fr/prop/statement/value/>

SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P47 wd:Q10.
  
  OPTIONAL {
   ?item p:P11/psv:P11/wikibase:timeValue ?début .
  }
        
  
  OPTIONAL {
   ?item p:P19/psv:P19/wikibase:timeValue ?fin .
  }

  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

https://movies.abes.fr/api/v1#/default/get_SDEL_liste_contrats

## Lister les contrats de documentation électronique en cours

```sparql
#+ endpoint: https://movies.abes.fr/proxy/wdqs/bigdata/namespace/wdq/sparql?
#+ endpoint_in_url: False
#+ description: Liste des contrats

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>
PREFIX psv: <https://movies.abes.fr/prop/statement/value/>

SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P47 wd:Q10.
  
  OPTIONAL {
   ?item p:P11/psv:P11/wikibase:timeValue ?début .
  }
        
  
  OPTIONAL {
   ?item p:P19/psv:P19/wikibase:timeValue ?fin .
  }

  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

https://movies.abes.fr/api/v1#/default/get_SDEL_liste_contrats_en_cours

## Lister les contrats de documentation électroniques échus

```sparql
#+ endpoint: https://movies.abes.fr/proxy/wdqs/bigdata/namespace/wdq/sparql?
#+ endpoint_in_url: False
#+ description: Liste des contrats échus

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>
PREFIX psv: <https://movies.abes.fr/prop/statement/value/>

SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P47 wd:Q10.
  
  OPTIONAL {
   ?item p:P11/psv:P11/wikibase:timeValue ?début .
  }
          
  ?item p:P19/psv:P19/wikibase:timeValue ?fin . # il faut qu'une date de fin d'application soit saisie pour que la requête fonctionne
    
  FILTER(?fin < NOW())

  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
https://movies.abes.fr/api/v1#/default/get_SDEL_liste_contrats_echus

## Lister les contrats signés par une Organisation

Pour utiliser la requête ci-dessous il faut remplacer le paramètre ?_siret.

```sparql
#+ endpoint: https://movies.abes.fr/proxy/wdqs/bigdata/namespace/wdq/sparql?
#+ endpoint_in_url: False
#+ description: Liste des contrats signé par un établissement en le recherchant par siret

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>
PREFIX psv: <https://movies.abes.fr/prop/statement/value/>

SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P47 wd:Q10.
  ?item wdt:P5 [wdt:P44 ?_siret].

  OPTIONAL {
   ?item p:P11/psv:P11/wikibase:timeValue ?début .
  }
   
  OPTIONAL {
    ?item p:P19/psv:P19/wikibase:timeValue ?fin .
  }

  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
note:::

https://movies.abes.fr/api/v1#/default/SEDL_contrats_par_signataire.csv?siret=123456879

:::

## Retrouver les héritiers d'un contrat

Cette requête permet de retrouver l’héritier d’un contrat (en partant des signataires). Il faudrait dans la réalité prendre en compte tous les bénéficiaires.

Sont considérés comme héritiers les successeurs non morts.

Pour utiliser la requête ci-dessous il faut remplacer le paramètre ?_id par un identifiant de contrat.

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX pqv: <https://movies.abes.fr/prop/qualifier/value/>
PREFIX psv: <https://movies.abes.fr/prop/statement/value/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT DISTINCT ?beneficiairesLabel WHERE {
  ?contrat skos:altLabel ?label;
          
  FILTER(STR(?label) = ?_id)
  
  { SELECT ?ben WHERE { ?contrat wdt:P5 ?ben. } } # Signataires
  UNION
  { SELECT ?ben WHERE { ?contrat wdt:P1 ?ben. } } # Bénéficiaires
  {
    SELECT * WHERE {
      { FILTER(NOT EXISTS { ?ben wdt:P54 ?date_suppression. }) } # Bénéficiaires directs toujours en vie (qui n'a pas de date de mort)
      UNION
      {
        ?ben wdt:P54 ?date_suppression; # Héritiers des bénéficiaires morts (qui a une date de mort)
          wdt:P6+ ?successeur. # successeurs ou successeurs des successeurs, etc.
         FILTER(NOT EXISTS { ?successeur wdt:P54 ?date_suppression. }) # On enlève les héritiers morts
        
        BIND(?successeur AS ?beneficiaires_indirects)
      }
    }
  }
  BIND(IF(BOUND(?beneficiaires_indirects), ?beneficiaires_indirects, ?ben) AS ?beneficiaires)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```


note:::

GRLC ne substitue pas les paramètre dans FILTER. Il faudrait réécrire la requête pour rendre visible ?_id à GRLC.

https://movies.abes.fr/api/v1#/default/SDEL_beneficiaires_contrat

:::
