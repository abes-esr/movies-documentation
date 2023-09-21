---
sidebar_position: 1
---
# Installation

![image](https://github.com/abes-esr/movies-docker/assets/43854599/461fa996-48f4-4669-92bb-c9678d26e2dc)

Le [dépôt GitHub](https://github.com/abes-esr/movies-docker) contient la configuration docker 🐳 pour déployer l'application movies en local sur le poste d'un développeur, ou bien sur les serveurs de test et prod. 

## Prérequis

Disposer de :
- ``🐳 docker``
- ``🐳 docker-compose``

## Installation

Déployer la configuration docker dans un répertoire :
```bash
# adaptez /opt/pod/ avec l'emplacement où vous souhaitez déployer l'application
cd /opt/pod/
git clone https://github.com/abes-esr/movies-docker.git
```

Configurer l'application depuis l'exemple du [fichier ``.env-dist``](./.env-dist) (ce fichier contient la liste des variables) :
```bash
cd /opt/pod/movies-docker/
cp .env-dist .env
# personnaliser alors le contenu du .env : indiquer les mots de passe et : le prefix de l'url (MOVIES_WIKIBASE_SCHEME), l'url publique (MOVIES_WIKIBASE_URL_PUBLIQUE), et le port du reverse proxy (MOVIES_RP_PORT).
```

**Note : les mots de passe ne sont pas présent dans le fichier au moment de la copie. Vous devez aller les renseigner manuellement en éditant le fichier dans la console avec nano par exemple**

Avant de démarrer l'application, assurez-vous que le fichier wikibase/LocalSettings.php ait les bonnes permissions. 
Pour ce faire, exécutez la commande suivante : 
```bash
cd /opt/pod/movies-docker/
chmod 644 wikibase/LocalSettings.php
```

Démarrer l'application :
```bash
cd /opt/pod/movies-docker/
docker-compose up -d
```

