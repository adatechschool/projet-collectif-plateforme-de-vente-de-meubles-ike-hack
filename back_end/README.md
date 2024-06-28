Création de l'environnement virtuel:

py -3 -m venv .venv

.venv\scripts\activate

python -m pip install --upgrade pip

Création d'un requirements.txt contenant les différents framework : 
asgiref==3.8.1
Django==5.0.6
djangorestframework==3.15.2
sqlparse==0.5.0
tzdata==2024.1

Installation des frameworks:
pip install -r requirements.txt

Installation mysql:
pip install mysqlclient

Intégration BDD dans Djangorest et connexion entre les deux:

python manage.py migrate  **/rajoute la gestion d'authentification dans la BDD mysql
python manage.py runserver  **/ relance le serveur virtuel

Création du modèle dans models.py en cours: class = nom de la colonne  field = valeur ou nom des raws(à vérifier)

# notes vendredi
## architecture dans models.py
-> pour les image, "blob" pas ouf
-> binary field permet de récupérer images dans la BDD
-> checker si y'a des formats d'img qui passent pas

## bdd django
-> toutes les tables en + de furnitures et types permettent de gérer la connexion et authentification
-> tips éloise : fait automatiquement un find all (récupère toute les infos), faut être super précis.e dans les requêtes

## serializer.py
-> pour une bonne gestion des hyperliens (à creuser)

## views.py
-> là où on fait les requêtes, sûrement ici qu'on gère les endpoints (à creuser o6)

## ps
-> y'a un fichier qui permet de ramener des JSON au front (todo: trouver lequel)
-> commandes pip équivalent à npm sur js