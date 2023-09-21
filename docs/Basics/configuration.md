# Configuration

## Configuration

Pour configurer l'application, vous devez créer et personnaliser un fichier ``/opt/pod/movies-docker/.env`` (cf section [Installation](/docs/intro)). Les paramètres à placer dans ce fichier ``.env`` sont indiqués dans le fichier [``.env-dist``](https://github.com/abes-esr/movies-docker/blob/develop/.env-dist)

## Allocation de ressources pour les conteneurs

Pour ajuster l'allocation de ressources pour les conteneurs (par exemple, mémoire, CPU), vous pouvez définir la valeur des variables d'environnement suivantes dans votre fichier ``.env`` :

- `MOVIES_MEM_LIMIT`: Mémoire allouée au conteneur movies (par exemple: "512m" pour 512 Mo), valeur par défaut "5g".
- `MOVIES_MEMSWAP_LIMIT`: Quantité totale de mémoire et de swap que le conteneur est autorisé à utiliser. Si vous définissez cette valeur à 0, cela signifie que le swap est désactivé pour le conteneur.
- `MOVIES_CPU_LIMIT`: CPU alloué au conteneur movies (par exemple: "0.5" pour allouer 50% d'un CPU), valeur par défaut "5".

Ces valeurs ne sont que des exemples. Ajustez-les selon vos besoins et les ressources disponibles sur votre machine ou votre serveur.