# Démarrage et arrêt

```bash
# pour démarrer l'application (ou pour appliquer des modifications 
# faites dans /opt/pod/movies-docker/.env)
cd /opt/pod/movies-docker/
docker-compose up -d
```

Remarque : retirer le ``-d`` pour voir passer les logs dans le terminal et utiliser alors CTRL+C pour stopper l'application

```bash
# pour stopper l'application
cd /opt/pod/movies-docker/
docker-compose stop


# pour redémarrer l'application
cd /opt/pod/movies-docker/
docker-compose restart
```