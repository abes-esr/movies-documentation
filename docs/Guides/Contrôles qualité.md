# Contrôle qualité

## Contrôle des dates

### Date de début et de fin d'existence

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?statement ?problem ?debut ?fin WHERE {
  {
    ?statement wdt:P10 ?debut;
      wdt:P11 ?fin.
    BIND("date de création > date de suppression" AS ?problem)
  }
  UNION
  {
    ?statement pq:P4 ?debut;
      pq:P5 ?fin.
    BIND("début > fin" AS ?problem)
  }
  FILTER(?debut < ?fin)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

:::note

https://movies.abes.fr/api/inversion_debut_fin.csv

:::



### Unicité des dates

* Il ne peut y avoir qu'une seule date de création et de fermeture par établissement

### Cohérence des date d'existence et des date de contrat



### Cohérence des date d'existence et des date d'habilitation

## Contrôle des identifiants

### Unicité des identifiants



## Contrôle des source d'information

### Trouver les assertions sans sources
