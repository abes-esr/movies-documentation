# Sauvegardes

## Elements à sauvegarder

Les éléments suivants sont à sauvegarder:
- ``/opt/pod/movies-docker/.env`` : contient la configuration spécifique de notre déploiement
- ``/docker-backup/movies/`` : contient les dumps quotidiens de la base de données maria-db de movies

## Restauration depuis une sauvegarde

Réinstallez l'application movies depuis la [procédure d'installation ci-dessus](#installation) et récupéré depuis les sauvegardes le fichier ``.env`` et placez le dans ``/opt/pod/movies-docker/.env`` sur la machine qui doit faire repartir movies.

Restaurez ensuite le dernier dump de la base de données postgresql de movies :
- récupérer le dernier dump généré par ``movies-db-dumper`` depuis le système de sauvegarde (le fichier dump ressemble à ceci ``mysql_all_movies-wikibase-mysql_20230914-235900.sql.gz``) et placez le fichier dump récupéré (sans le décompresser) dans ``/docker-backup/movies/`` sur la machine qui doit faire repartir movies  

2 possiblités :  

1)  

- ensuite lancez uniquement les conteneurs ``movies-db`` et ``movies-db-dumper`` :
   ```bash
   docker-compose up -d movies-db movies-db-dumper
   ```
- lancez le script de restauration ``restore`` comme ceci et suivez les instructions :
   ```bash
   docker exec -it movies-db-dumper restore
   ```
- C'est bon, la base de données movies est alors restaurée

2)  

Lancer la commande : 
```bash
cd /opt/pod/movies-docker/
zcat /docker-backup/movies/mysql_all_movies-wikibase-mysql_XXXX-XXXX.sql.gz | sudo docker exec -u mysql -i movies-wikibase-mysql mysql --user sqluser --password=XXXX
```

Lancez alors toute l'application movies et vérifiez qu'elle fonctionne bien :
```bash
cd /opt/pod/movies-docker/
docker-compose up -d 
```
