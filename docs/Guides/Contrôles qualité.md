---
tags:
  - sparql
---

# Contrôle qualité (CQ)

Cette section détaille l'ensemble des requêtes de contrôle qualité. Dans l'[API de Movies](https://movies.abes.fr/api/v1/) ces requêtes sont préfixées par `CQ`.

## Contrôle des dates

### Date de début et de fin

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
      wdt:P54 ?fin.
    BIND("date de création > date de suppression" AS ?problem)
  }
  UNION
  {
    ?statement pq:P12 ?debut;
      pq:P20 ?fin.
    BIND("début > fin" AS ?problem)
  }
    UNION
  {
    ?statement pq:P11 ?debut;
      pq:P19 ?fin.
    BIND("début d'application > fin d'application" AS ?problem)
  }
  
  FILTER(?debut > ?fin)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

:::note

La date de création d'une organisation doit être inférieure à sa date de suppression.
Pour chaque statements, la valeur de l'attribut `début` doit être inférieure à la valeur de l'attribut `fin`.

https://movies.abes.fr/api/v1/CQ_inversion_debut_fin.csv

:::

### Unicité des dates de création et de suppression

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>
PREFIX psv: <https://movies.abes.fr/prop/statement/value/>

SELECT ?statement ?problem (count(?c) as ?count) WHERE {
  {
    ?statement psv:P10/wikibase:timeValue ?c.
    BIND("Plusieur dates de création" AS ?problem)
  } UNION {
    ?statement psv:P54/wikibase:timeValue ?c.
    BIND("Plusieur dates de suppression" AS ?problem)
  }
} GROUP BY ?statement ?problem
HAVING (?count > 1)
```
:::note

Il ne peut y avoir qu'une seule date de création et de fermeture par établissement.

https://movies.abes.fr/api/v1/CQ_unicite_dates_creation_suppresion.csv

:::

### Cohérence des dates d'existence et des dates de contrat


:::note

:::

### Cohérence des dates d'existence et des dates d'habilitation

```sparql

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT DISTINCT ?etab ?habiliatation ?probleme ?date ?date_habilitation WHERE {
  {
    ?etab p:P22 ?habiliatation;
      wdt:P10 ?date. # date de création
    
    ?habiliatation pq:P12 ?date_habilitation.
    BIND("Le début d'habilitation est inférieur à la date de création de l'établissement" AS ?probleme)
    FILTER(?date_habilitation < ?date)
  }
  UNION
  {
    ?etab p:P22 ?habiliatation;
      wdt:P54 ?date. # date de suppression
    
    ?habiliatation pq:P5 ?date_habilitation.
    BIND("La fin d'habilitation est supérieure à la date de suppression de l'établissement" AS ?probleme)
    FILTER(?date_habilitation > ?date)
  }
}
```

:::note

La date de début d'habilitation doit être supérieure ou égal à la date de création de l'établissement. La date de fin d'habilitation doit être inférieure ou égale à la date de suppression de l'établissement.

⚠️ Dans certains cas l'erreur retournée provient du niveau de précision de la date : certaines dates sont arrondies à l'année.

https://movies.abes.fr/api/v1/CQ_coherence_dates_habilitation.csv

:::

## Contrôle de la cohérence des habilitations

### Absence d'habilitation transférée

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>


SELECT ?org ?code_etablissement ?date_suppression ?erreur WHERE {
   ?org wdt:P9 ?code_etablissement;
        wdt:P54 ?date_suppression;                    # établissement disparu
        wdt:P22 wd:Q19.    # établissement ayant été habilité au moins une fois
  
   # absence de transfert
   FILTER NOT EXISTS {
     ?org  wdt:P22 wd:Q20 # classes de l'habilitation transférée
   }
  
  BIND("Rajoutez un transfert d'habilitation dont la date correspond à celle de suppression de l'établissement" AS ?erreur)
}  
```

:::note

Lorsqu'un établissement a été habilité et qu'il disparait il faut explicitement saisir un transfert d'habilitation vers un ou plusieur établissement.

:::


## Contrôle des identifiants

### Unicité des identifiants

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
    ?statement wdt:P31 ?identifiant.
    BIND("Indentifiant Idref non unique" AS ?problem)
  } UNION {
    ?statement wdt:P23 ?identifiant.
    BIND("Indentifiant CNRS non unique" AS ?problem)
  } UNION {
    ?statement wdt:P33 ?identifiant.
    BIND("Indentifiant ISNI non unique" AS ?problem)
  } UNION {
    ?statement wdt:P40 ?identifiant.
    BIND("Indentifiant RNSR non unique" AS ?problem)
  } UNION {
    ?statement wdt:P9 ?identifiant.
    BIND("Indentifiant code établissement non unique" AS ?problem)
  }
} GROUP BY ?identifiant ?problem
HAVING (?count > 1)
```
:::note

Un identifiant unique ne peut être attribué qu'une seule fois par entité.

https://movies.abes.fr/api/v1/CQ_unicite_identifiants_par_entite.csv

:::

### Identifiant unique attribué à plusieur entités

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
    ?statement wdt:P31 ?identifiant.
    BIND("Indentifiant Idref non unique" AS ?problem)
  } UNION {
    ?statement wdt:P23 ?identifiant.
    BIND("Indentifiant CNRS non unique" AS ?problem)
  } UNION {
    ?statement wdt:P33 ?identifiant.
    BIND("Indentifiant ISNI non unique" AS ?problem)
  } UNION {
    ?statement wdt:P40 ?identifiant.
    BIND("Indentifiant RNSR non unique" AS ?problem)
  } UNION {
    ?statement wdt:P9 ?identifiant.
    BIND("Indentifiant code établissement non unique" AS ?problem)
  } UNION {
    ?statement wdt:P43 ?identifiant.
    BIND("Indentifiant SIREN non unique" AS ?problem)
  } UNION {
    ?statement wdt:P44 ?identifiant.
    BIND("Indentifiant SIRET non unique" AS ?problem)
  }
} GROUP BY ?statement ?problem
HAVING (?count > 1)
```

:::note

Un identifiant unique ne peut être attribué que pour une seule entité.

https://movies.abes.fr/api/v1/CQ_unicite_identifiants

:::

## Contrôle des liens

### Liens de succession incomplets

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>

SELECT ?predecesseur ?predecesseurLabel ?predicat ?successeur ?successeurLabel WHERE {
  {
    ?successeur wdt:P47 [wdt:P53* wd:Q8];
      wdt:P4 ?predecesseur.
    FILTER(NOT EXISTS { ?predecesseur wdt:P6 ?successeur. })
    BIND("a pour prédécesseur" AS ?predicat)
  }
  UNION
  {
    ?predecesseur wdt:P47 [wdt:P53* wd:Q8];
      wdt:P6 ?successeur.
    FILTER(NOT EXISTS { ?successeur wdt:P4 ?predecesseur. })
    BIND("a pour successeur" AS ?predicat)
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
:::note

Si la propriété [a pour prédeccesseur](/Ontologie/Propriétés/a pour prédécesseur) est déclarée dans une entité, alors la propriété inverse [a pour successeur]("/Ontologie/Propriétés/a pour successeur") doit aussi être déclarée dans l'entité cible.

https://movies.abes.fr/api/v1/CQ_successions_manquantes.csv

:::

### Liens de succession circulaires

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?source ?target WHERE {
  {
    ?source (wdt:P6+) ?target.
    FILTER(?source = ?target)
  }
  UNION
  {
    ?source (wdt:P4+) ?target.
    FILTER(?source = ?target)
  }
}
```

:::note

Un établissement ne peut pas être le précesseur ou le successeur de lui même et ce à n'importe quel degré.

https://movies.abes.fr/api/v1/CQ_successions_circulaires.csv

:::

## Contrôle des source d'information

### Trouver les assertions sans sources
