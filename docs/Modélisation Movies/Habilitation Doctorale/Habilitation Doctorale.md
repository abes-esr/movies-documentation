---
description: ""
sidebar_position: 2
tags:
  - compétence doctorale
  - description des organisations
---

## Modélisation

### Habilitation en propre

```mermaid
graph LR
    ORG(Organisation) 
    HAB{{habilitation doctorale}}
    
    ORG --- HAB
    HAB -.->|début| xsd:date
    HAB -.->|fin| xsd:date
    HAB -.-> |preuve| PreuveHAB(Preuve)
    HAB -.-> |source| SourceHAB(Data Provider)
    HAB --> Habilitation(Habilitation en propre)
```

### Transfert d'habilitation

```mermaid
graph LR
    ORG(Organisation) 
    HAB{{habilitation doctorale}}
    
    ORG --- HAB
    HAB -.->|début| xsd:date
    HAB -.-> |preuve| PreuveHAB(Preuve)
    HAB -.-> |source| SourceHAB(Data Provider)
    HAB --> Transfert(Habilitation transférée)
    HAB --> |a pour bénéficiaire| ORG
```

Lorsqu'un établissement disparait complètement. Attention il n'y a pas de date de fin lors d'un transfert.

### Délégation d'habilitation

Lorsqu'un établissement délègue tout ou partie de sa compétence doctorale à un autre établissement (regroupement)


```mermaid
graph LR
    ORG(Organisation) 
    HAB{{habilitation doctorale}}
    
    ORG --- HAB
    HAB -.->|début| xsd:date
    HAB -.->|fin| xsd:date
    HAB -.-> |preuve| PreuveHAB(Preuve)
    HAB -.-> |source| SourceHAB(Data Provider)
    HAB --> Délégation(Habilitation déléguée)
    HAB --> |a pour délégataire| ORG
```

### Habilitation conjointe

```mermaid
graph LR
    ORG(Organisation) 
    HAB{{habilitation doctorale}}
    
    ORG --- HAB
    HAB -.->|début| xsd:date
    HAB -.->|fin| xsd:date
    HAB -.-> |preuve| PreuveHAB(Preuve)
    HAB -.-> |source| SourceHAB(Data Provider)
    HAB --> Conjoint(Habilitation conjointe)
    HAB --> |a pour partenaire| ORG
```


### Co accréditation



## Propriétés

| **Propriétés**                                                                      | ***Domain***                                              | ***Range***                                                | **Qualificatifs**                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [habilitation doctorale](/Ontologie/Propriétés/habilitation%20doctorale) | [Organisation](/Ontologie/Classe/Organisation) | [Habilitation](/Ontologie/Classes/Habilitation) | [`début`](/Ontologie/Propriétés/début), [`fin`](/Ontologie/Propriétés/fin), [`preuve`](/Ontologie/Propriétés/preuve), [`source`](/Ontologie/Propriétés/source) |

## Exemple : L'habilitation doctorale de Paris-Saclay (COMUE)

Université Paris-Saclay (COMUE)

<Claim property="habilitation doctorale">
    <Statement value="Habilitation doctorale">
        <Qualifier property="début">1 septembre 2015</Qualifier>
        <Qualifier property="fin">31 décembre 2019</Qualifier>
        <Qualifier property="preuve">Arrêté du XXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>
