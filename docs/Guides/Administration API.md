---
title: Administration de l'API
---

# Administration de l'API

L'adminsitration de l'API GRLC se fait depuis le dépôt GitHub [movies-api](https://github.com/abes-esr/movies-api). Les requêtes du dépôt sont récupérées dynamiquement sur https://movies.abes.fr/api/.

Dans le dépôt, chaque fichier de requête (fichier `.rq`) se divise en deux parties :

1. Une entête qui contient les métadonnées nécessaires au fonctionnement de GRLC et qui permettent de générer la documentation Open API ([Liste des métadonnées utilisables](https://github.com/CLARIAH/grlc#decorator-syntax)).
2. Le corps de la requête.

Par exemple : 

 ```sparql title="TH_habilitation_doctorale.rq" showLineNumbers
// highlight-start
#+ endpoint_in_url: False
#+ description: Liste les habilitations doctorales d'un établissement
// highlight-end

// highlight-start
PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?etabLabel ?debut ?fin WHERE {
  ?etab wdt:P3 ?_codeEtab;
     p:P6 ?habiliatation.
  
  OPTIONAL {?habiliatation pq:P4 ?debut}.
  OPTIONAL {?habiliatation pq:P5 ?fin}.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
// highlight-end
```

## Nommage des requêtes

Le nom du fichier contenant la requête sert à générer le chemin de l'URL de la requête. Par exemple :

Le fichier CQ_coherence_dates_habilitation.rq générera la requête suivante : https://movies.abes.fr/api/CQ_coherence_dates_habilitation.

Chaque requête est préfixée pour faciliter leur identifification et les grouper dans la documentation Open API de Movies :

* Les requêtes qui concernent le contrôle qualité doivent être préfixées avec `CQ_`
* Les requêtes qui concernent le service des thèses doivent être préfixées avec `TH_`


## Format des données

L'API permet de récupérer les données aux formats TTL, JSON ou CSV. Pour récupérer tel ou tel format il suffit de suffixer la requête avec `.ttl`, `.json` ou `.csv`. Le nom du format doit être placé avant les paramètre de la requête.

Par exemple : [https://movies.abes.fr/api/CQ_coherence_dates_habilitation.csv permet de récupérer les données au format CSV ; https://movies.abes.fr/api/TH_habilitation_doctorale.csv?codeEtab=UPAS permet de récupérer les données au format JSON.

## Paramètres des requêtes

 Les variables de la requête qui commencent par `?_` sont transformés automatiquement en paramètre de l'ULR. La requête ci-dessous permet d'avoir une URL avec la structure suivante : https://movies.abes.fr/api/TH_habilitation_doctorale.csv?codeEtab=UPAS. Au moment de l'exécution de la requête `?_codeEtab` est automatiquement substitué par la valeur passée en argument de la requête : `UPAS`.

 Il est possible de spécifier plusieurs arguments pour une requête.

 ```sparql title="TH_habilitation_doctorale.rq" showLineNumbers
#+ endpoint_in_url: False
#+ description: Liste les habilitations doctorales d'un établissement

PREFIX wdt: <https://movies.abes.fr/prop/direct/>
PREFIX wd: <https://movies.abes.fr/entity/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX bd: <http://www.bigdata.com/rdf#>
PREFIX p: <https://movies.abes.fr/prop/>
PREFIX pq: <https://movies.abes.fr/prop/qualifier/>

SELECT ?etabLabel ?debut ?fin WHERE {
  // highlight-next-line
  ?etab wdt:P3 ?_codeEtab;
     p:P6 ?habiliatation.
  
  OPTIONAL {?habiliatation pq:P4 ?debut}.
  OPTIONAL {?habiliatation pq:P5 ?fin}.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

## Limitations

* Il n'est pour le moment pas possible de créer des requêtes de type ASK.
* Il n'est pas possible de créer des requêtes qui modifient ou ajoutent des données. Ces requêtes sont filtrées par Movies.

## Références

* [Documentation de GRLC](https://github.com/CLARIAH/grlc)
