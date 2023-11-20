# Contrôle qualité (CQ)

L'ensemble des requêtes préfixées par `CQ` dans https://movies.abes.fr/api/, corresspondent aux requêtes de contrôle qualité.

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

La date de cration d'une organisation doit être inférieure à sa date de suppression.
Pour chaque statements, la valeur de l'attribut début doit être inférieure à la valeur de l'attribut fin.

https://movies.abes.fr/api/CQ_inversion_debut_fin.csv

:::



### Unicité des dates de création et de suppression

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?statement ?problem (count(?c) as ?count) WHERE {
  {
    ?statement wdt:P10 ?c.
    BIND("Plusieur dates de création" AS ?problem)
  } UNION {
    ?statement wdt:P11 ?c.
    BIND("Plusieur dates de suppression" AS ?problem)
  }
} GROUP BY ?statement ?problem
HAVING (?count > 1)
```
:::note

Il ne peut y avoir qu'une seule date de création et de fermeture par établissement.

https://movies.abes.fr/api/CQ_unicite_dates_creation_suppresion.csv

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
    ?etab p:P6 ?habiliatation;
      wdt:P10 ?date.
    
    ?habiliatation pq:P4 ?date_habilitation.
    BIND("Le début d'habilitation est inférieur à la date de création de l'établissement" AS ?probleme)
    FILTER(?date_habilitation < ?date)
  }
  UNION
  {
    ?etab p:P6 ?habiliatation;
      wdt:P11 ?date.
    
    ?habiliatation pq:P5 ?date_habilitation.
    BIND("La fin d'habilitation est supérieure à la date de suppression de l'établissement" AS ?probleme)
    FILTER(?date_habilitation > ?date)
  }
}
```

:::note

La date de début d'habilitation doit être >= à la date de création de l'établissement. La date de fin d'habilitation doit être <= à la date de suppression de l'établissement.

⚠️ Dans certains cas l'erreur retournée provient du niveau de précision de la date. Certaines dates sont arrondies à l'année faute de meilleure précision.

https://movies.abes.fr/api/CQ_coherence_dates_habilitation.csv

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
  } UNION {
    ?statement wdt:P7 ?identifiant.
    BIND("Indentifiant SIREN non unique" AS ?problem)
  } UNION {
    ?statement wdt:P8 ?identifiant.
    BIND("Indentifiant SIRET non unique" AS ?problem)
  } UNION {
    ?statement wdt:P7 ?identifiant.
    BIND("Indentifiant SIREN non unique" AS ?problem)
  } UNION {
    ?statement wdt:P8 ?identifiant.
    BIND("Indentifiant SIRET non unique" AS ?problem)
  }
} GROUP BY ?statement ?problem
HAVING (?count > 1)
```
:::note

Un identifiant unique ne peut être attribué qu'une seule fois par entité.

https://movies.abes.fr/api/CQ_unicite_identifiants_par_entite.csv

:::

### Identifiant unique attribué à plusieur entités

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
  } UNION {
    ?statement wdt:P7 ?identifiant.
    BIND("Indentifiant SIREN non unique" AS ?problem)
  } UNION {
    ?statement wdt:P8 ?identifiant.
    BIND("Indentifiant SIRET non unique" AS ?problem)
  }
} GROUP BY ?identifiant ?problem
HAVING (?count > 1)
```

:::note

Un identifiant unique ne peut être attribué que pour une seule entité.

https://movies.abes.fr/api/CQ_unicite_identifiants

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

Si la propriété [a pour prédeccesseur](/Ontologie/Propriétés/a pour prédécesseur) est déclarée dans une entité, alors l'inverse ([a pour successeur](/Ontologie/Propriétés/a pour successeur)) doit aussi être déclaré dans l'entité cible.

https://movies.abes.fr/api/CQ_successions_manquantes.csv

:::

### Liens de successions circulaires

```sparql
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?source ?target WHERE {
  {
    ?source (wdt:P41+) ?target.
    FILTER(?source = ?target)
  }
  UNION
  {
    ?source (wdt:P42+) ?target.
    FILTER(?source = ?target)
  }
}
```

:::note

Un établissement ne peut pas être le précesseur ou le successeur de lui même et ce à n'importe quel degré.

https://movies.abes.fr/api/CQ_successions_circulaires.csv

:::

## Contrôle des source d'information

### Trouver les assertions sans sources
