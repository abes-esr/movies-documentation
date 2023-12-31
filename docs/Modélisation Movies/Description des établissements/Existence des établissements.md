---
description: ""
sidebar_position: 5
tags:
  - existence des organisations
  - description des organisations
  - bornes chronologiques
---

## Modélisation

### Création

```mermaid
graph LR
    ORG("Organisation")
    CREA{{création}}
    P(Preuve)

    ORG --- CREA ---> xsd:date
    CREA -..-> |preuve| P
    CREA -..-> |source| xsd:string
```

### Suppression

```mermaid
graph LR
    ORG("Organisation")
    SUPPR{{suppresion}}
    P(Preuve)
    
    ORG --- SUPPR --->  xsd:date
    SUPPR -..-> |preuve| P
    SUPPR -..-> |source| xsd:string
```

## Propriétés

L'existence des établissements peut être décrit avec les propriétés suivantes :

| **Propriétés**                                              | ***Domain***                                               | ***Range*** | ***Cardinalité*** | **Qualificatifs**                                                                                        |
| ----------------------------------------------------------- | ---------------------------------------------------------- | ----------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| [création](/Ontologie/Propriétés/création)       | [Organisation](/Ontologie/Classes/Organisation) | xsd:date    | O/NR              | [`preuve`](/Ontologie/Propriétés/preuve), [`source`](/Ontologie/Propriétés/source) |
| [suppression](/Ontologie/Propriétés/suppression) | [Organisation](/Ontologie/Classes/Organisation) | xsd:date    | F/NR              | [`preuve`](/Ontologie/Propriétés/preuve), [`source`](/Ontologie/Propriétés/source) |

## Exemple : L'existence de la Comue Paris-Saclay

Université Paris-Saclay (COMUE)

<Claim emphase="true" property="création">
    <Statement value="7 novembre 2019">
    <Qualifier property="preuve">Arrêté du XXXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim emphase="true" property="suppression">
    <Statement value="7 novembre 2019">
        <Qualifier property="preuve">Arrêté du XXXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>
