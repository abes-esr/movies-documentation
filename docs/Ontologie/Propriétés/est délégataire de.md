---
owl:                                 # Le contenu des métadonnées OWL est utilisé par la balise <OntologyTable>
  "rdfs:label": "est délégataire de"                   # Label de la propriété
  "rdf:type": "owl:DatatypeProperty" # Type rdf de la propriété [owl:DatatypeProperty ou owl:ObjectProperty]
  "rdfs:domain": "habilitation doctorale"                  # Type de l'entité à laquelle cette propriété est ratachée
  "rdfs:range": "Organisation"                   # Type de valeur de la propriété [type xsd ou nom de l'entité]
  "owl:cardinality": "F/R"              # Cardinalité de la propriété [F/R, F/NR , O/R, O/NR]

---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Désigne le délégataire d'une habilitation doctorale. La propriété "est délégataire de" doit être utilisée en qualificatif de la propriété "habilitation doctorale".
