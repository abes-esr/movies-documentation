---
description: ""
tags:
  - établissements
  - ComUE
  - EPE
  - PRES
owl:
  "rdfs:label": "a pour membre"
  "rdf:type": "owl:ObjectProperty"
  "rdfs:domain": "Collectivité"
  "rdfs:range": "Collectivité"
  "owl:cardinality": "F/R"
  "pq":
    - "début"
    - "fin"
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Permet de définir l'appartenance d'une [Collectivité](../Classes/Collectivité.md) à une autre.

:::tip

Le type d'appartenance (membre associé, membre constitutif, etc.) peut être spécifié avec le qualificatif [`type`](type.md).

:::

:::caution

Dans le cadre des EPE un établissement ne peut être composante que d'un seul établissement à la fois.

([https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037805999](<https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037805999>))

:::
