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

https://movies.abes.fr/api/CQ_inversion_debut_fin.csv

:::



### Unicité des dates

* Il ne peut y avoir qu'une seule date de création et de fermeture par établissement

### Cohérence des date d'existence et des date de contrat



### Cohérence des date d'existence et des date d'habilitation

## Contrôle des identifiants

### Unicité des identifiants

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?statement ?problem (count(?identifiant) as ?count) WHERE {
  {
    ?statement wdt:P36 ?identifiant.
    BIND("Indentifiant Paysage non unique" AS ?problem) 
  } UNION {
    ?statement wdt:P35 ?identifiant.
    BIND("Indentifiant Idref non unique" AS ?problem)
  } UNION {
    ?statement wdt:P64 ?identifiant.
    BIND("Indentifiant CNRS non unique" AS ?problem)
  } UNION {
    ?statement wdt:P70 ?identifiant.
    BIND("Indentifiant ISNI non unique" AS ?problem)
  } UNION {
    ?statement wdt:P33 ?identifiant.
    BIND("Indentifiant RNSR non unique" AS ?problem)
  } UNION {
    ?statement wdt:P3 ?identifiant.
    BIND("Indentifiant code établissement non unique" AS ?problem)
  }
} GROUP BY ?statement ?problem
HAVING (?count > 1)
```
:::note

Un identifiant unique ne peut être attribué qu'une seule fois au sein d'une entité.

https://movies.abes.fr/api/CQ_uncite_identifiants_par_entite.csv

:::

#### Identifiant unique attribué à plusieur entité

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?identifiant ?problem (count(?identifiant) as ?count) WHERE {
  {
    ?statement wdt:P36 ?identifiant.
    BIND("Indentifiant Paysage non unique" AS ?problem) 
  } UNION {
    ?statement wdt:P35 ?identifiant.
    BIND("Indentifiant Idref non unique" AS ?problem)
  } UNION {
    ?statement wdt:P64 ?identifiant.
    BIND("Indentifiant CNRS non unique" AS ?problem)
  } UNION {
    ?statement wdt:P70 ?identifiant.
    BIND("Indentifiant ISNI non unique" AS ?problem)
  } UNION {
    ?statement wdt:P33 ?identifiant.
    BIND("Indentifiant RNSR non unique" AS ?problem)
  } UNION {
    ?statement wdt:P3 ?identifiant.
    BIND("Indentifiant code établissement non unique" AS ?problem)
  }
} GROUP BY ?identifiant ?problem
HAVING (?count > 1)
```

:::note

Un identifiant unique ne peut être attribué que pour une seule entité



:::

## Contrôle des liens


### Liens de succession incomplet

```sparql
#+ endpoint: https://movies.abes.fr/proxy/wdqs/bigdata/namespace/wdq/sparql?
#+ endpoint_in_url: False
#+ description: Liste successions manquantes. Les triplets retournés correspondent aux informations à ajouter.

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>

SELECT ?predecesseur ?predecesseurLabel ?predicat ?successeur ?successeurLabel WHERE {
  {
    ?successeur wdt:P1 wd:Q9;
      wdt:P42 ?predecesseur.
    FILTER(NOT EXISTS { ?predecesseur wdt:P41 ?successeur. })
    BIND("a pour prédécesseur" AS ?predicat)
  }
  UNION
  {
    ?predecesseur wdt:P1 wd:Q9;
      wdt:P41 ?successeur.
    FILTER(NOT EXISTS { ?successeur wdt:P42 ?predecesseur. })
    BIND("a pour successeur" AS ?predicat)
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

:::note

Si un prédécesseur est déclaré dans une entité la réciproque à pour successeur doit aussi être déclaré dans l'entité cible et inversement

https://movies.abes.fr/api/CQ_successions_manquantes.csv

:::

## Contrôle des source d'information

### Trouver les assertions sans sources
