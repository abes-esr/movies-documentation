# Injection de propriétés

Pour injecter les propriétés et classes dans un wikibase vide : 
```bash
cd /opt/pod/movies-docker/
docker compose --profile initializer up -d
ou 
docker compose run --rm movies-initializer
```