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