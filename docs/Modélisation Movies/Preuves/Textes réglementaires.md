---
description: ""
sidebar_position: 5
tags:
  - textes réglementaires
  - décrets
  - lois
  - arrêtés
---
## Propriétés

| **Propriétés**                                                            | ***Domain***                                                         | ***Range***     | **Cardinalité**                | **Qualificatifs**                                                                                                                                                                  |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [nor](/Ontologie/Propriétés/nor)                                 | [Preuve](/Ontologie/Classes/Preuve)    | xsd:string      | F/R                            |  |
| [uri](/Ontologie/Propriétés/uri)           |   | xsd:string  | F/R                           |                                                                                                                                                                                    |
| [publication au JORF](/Ontologie/Propriétés/publication%20au%20JORF)       | [Preuve](/Ontologie/Classes/Preuve)    | xsd:date      | F/NR                           |                                                                                                                                                                                    |
| [début application](/Ontologie/Propriétés/idébut%20application)       | [Preuve](/Ontologie/Classes/Preuve)    | xsd:date      | F/NR                           |                                                                                                                                                                                    |
| [fin application](/Ontologie/Propriétés/fin%20application)     | [Preuve](/Ontologie/Classes/Preuve)    | xsd:date    | F/NR                           |                                                                                                                                                                                    |
| [abroge](/Ontologie/Propriétés/abroge)   | [Preuve](/Ontologie/Classes/Preuve)    | xsd:string      | F/R                           |                                                                                                                                                                                    |
| [est abrogé par](/Ontologie/Propriétés/est%20abrogé%20par)       | [Preuve](/Ontologie/Classes/Preuve)    | xsd:string      | F/R |                                                                                                                                                                                    |
| [modifie](/Ontologie/Propriétés/modifie)       | [Preuve](/Ontologie/Classes/Preuve)    | xsd:string      | F/R                           |                                                                                                                                                                                    |
| [est modifié par](/Ontologie/Propriétés/est%20modifié%20par) | [Preuve](/Ontologie/Classes/Preuve)    | xsd:string      | F/R                          |                                                                                                                                                                                             |

---
## Exemples : Décret n° 2014-1674 du 29 décembre 2014 portant création de la communauté d'universités et établissements "Université Paris-Saclay" et approbation de ses statuts

<Claim property="instance de">
    <Statement value="Décret">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="nor">
    <Statement value="MENS1425099D">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="uri">
    <Statement value="(https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030001707)">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="publication au JORF">
    <Statement value="2014-12-31">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="début application">
    <Statement value="2015-01-01">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="fin application">
    <Statement value="2019-12-31">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="abroge">
    <Statement value="Décret n° 2007-379 du 21 mars 2007 portant création de l'établissement public de coopération scientifique UniverSud Paris">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="est abrogé par">
    <Statement value="Décret n° 2019-1131 du 5 novembre 2019 portant création de l'université Paris-Saclay et approbation de ses statuts">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim property="est modifié par">
    <Statement value="Décret n° 2019-561 du 6 juin 2019 modifiant le décret n° 2014-1674 du 29 décembre 2014 modifié portant approbation des statuts de la communauté d'universités et établissements « Université Paris-Saclay »">
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>


