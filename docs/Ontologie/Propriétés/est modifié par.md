---
description: ""
tags:
  - textes réglementaires
owl:                                 # Le contenu des métadonnées OWL est utilisé par la balise <OntologyTable>
  "rdfs:label": "est modifié par"                   # Label de la propriété
  "rdf:type": "owl:ObjectProperty" # Type rdf de la propriété [owl:DatatypeProperty ou owl:ObjectProperty]
  "rdfs:domain": "Preuve"                  # Type de l'entité à laquelle cette propriété est ratachée
  "rdfs:range": "Preuve"                   # Type de valeur de la propriété [type xsd ou nom de l'entité]
  "owl:cardinality": "F/R"              # Cardinalité de la propriété [F/R, F/NR , O/R, O/NR]
  "pq":                              # Liste des qualificatifs pouvant être utilisés pour la propriété
    - "source"                             # Nom du premier qualificatif
---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Un texte réglementaire ou un contrat est modifié par un autre texte réglementaire ou un autre contrat.
