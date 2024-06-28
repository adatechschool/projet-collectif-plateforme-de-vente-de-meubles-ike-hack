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