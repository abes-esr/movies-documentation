# Déploiement continu

Les objectifs des déploiements continus de movies sont les suivants (cf [poldev](https://github.com/abes-esr/abes-politique-developpement/blob/main/01-Gestion%20du%20code%20source.md#utilisation-des-branches)) :
- git push sur la branche ``develop`` provoque un déploiement automatique sur le serveur ``diplotaxis5-dev``
- git push (le plus couramment merge) sur la branche ``main`` provoque un déploiement automatique sur le serveur ``diplotaxis5-test``
- git tag X.X.X (associé à une release) sur la branche ``main`` permet un déploiement (non automatique) sur le serveur ``diplotaxis5-prod``

Movies est déployé automatiquement en utilisant l'outil WatchTower. Pour permettre ce déploiement automatique avec WatchTower, il suffit de positionner à ``false`` la variable suivante dans le fichier ``/opt/pod/movies-docker/.env`` :
```env
MOVIES_WATCHTOWER_RUN_ONCE=false
```

Le fonctionnement de watchtower est de surveiller régulièrement l'éventuelle présence d'une nouvelle image docker de ``movies-wikibase``, si oui, de récupérer l'image en question, de stopper le ou les les vieux conteneurs et de créer le ou les conteneurs correspondants en réutilisant les mêmes paramètres ceux des vieux conteneurs. Pour le développeur, il lui suffit de faire un git commit+push par exemple sur la branche ``develop`` d'attendre que la github action build et publie l'image, puis que watchtower prenne la main pour que la modification soit disponible sur l'environnement cible, par exemple la machine ``diplotaxis5-dev``.

Le fait de passer ``MOVIES_WATCHTOWER_RUN_ONCE`` à false va faire en sorte d'exécuter périodiquement watchtower. Par défaut cette variable est à ``true`` car ce n'est pas utile voir cela peut générer du bruit dans le cas d'un déploiement sur un PC en local.