# Développements

## Admin de mariaDB
Pour consulter l'interface d'admin web de mariaDB (basée sur [Adminer](https://www.adminer.org/)) rendez vous sur cette URL : 
- local : http://127.0.0.1:11082/
- test : http://diplotaxis5-test.v202.abes.fr:11082/
- prod : http://diplotaxis5-prod.v102.abes.fr:11082/


## Mise à jour de la dernière version

Pour récupérer et démarrer la dernière version de l'application vous pouvez le faire manuellement comme ceci :
```bash
docker-compose pull
docker-compose up
```
Le ``pull`` aura pour effet de télécharger l'éventuelle dernière images docker disponible pour la version glissante en cours (ex: ``develop`` ou ``main``). Sans le pull c'est la dernière image téléchargée qui sera utilisée.

Ou bien [lancer le conteneur ``movies-watchtower``](https://github.com/abes-esr/movies-docker/blob/develop/README.md#d%C3%A9ploiement-continu) qui le fera automatiquement toutes les quelques secondes pour vous.