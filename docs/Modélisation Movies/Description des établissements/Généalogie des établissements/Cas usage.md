---
description: ""
tags:
  - cas d'usage
  - sparql
---

# Cas d'usage relatifs à la généalogie des établissements

## Établir la généalogie de l'Université Paris-Saclay (COMUE)

Cette requête permet de retrouver les ascendants (Université Paris-Saclay EPE) et les déscendants (Paris 11) de l'Université Paris-Saclay (COMUE).

```sparql
#+ endpoint: https://movies.abes.fr/proxy/wdqs/bigdata/namespace/wdq/sparql?
#+ endpoint_in_url: False
#+ description: Pour un identifiant donnée, retourne la liste des autres identifiants connus pour une entité.

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT DISTINCT ?successeurLabel ?creation ?suppresion
WHERE 
{
  wd:<Identifiant de l'entité wikibase> wdt:P6* ?successeur.
  
  ?successeur wdt:P10 ?creation.
  
  OPTIONAL {
   ?successeur wdt:P54 ?suppresion.
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
