---
owl:                                 # Le contenu des métadonnées OWL est utilisé par la balise <OntologyTable>
  "rdfs:label": "NOR"                   # Label de la propriété
  "rdf:type": "owl:DatatypeProperty" # Type rdf de la propriété [owl:DatatypeProperty ou owl:ObjectProperty]
  "rdfs:domain": "Preuve"                  # Type de l'entité à laquelle cette propriété est ratachée
  "rdfs:range": "xsd:string"                   # Type de valeur de la propriété [type xsd ou nom de l'entité]
  "owl:cardinality": "F/NR"              # Cardinalité de la propriété [F/R, F/NR , O/R, O/NR]
---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Le système NOR est un système normalisé de numérotation des textes officiels publiés en France depuis le 1er janvier 1987.


