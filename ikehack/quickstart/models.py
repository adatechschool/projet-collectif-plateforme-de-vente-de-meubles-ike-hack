from django.db import models

# Create your models here.

class furnitures(models.Model):
    # Définissez vos champs ici
    id = models.IntegerField(primary_key = True, null =False)
    name = models.CharField(max_length = 100)
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    size = models.CharField(max_length = 255)
    color = models.CharField(max_length = 100)
    material = models.CharField(max_length = 255)
    disponibility = models.CharField(max_length = 100)
    pictureOne = models.BinaryField(blank = False, null = False)    # A voir pour les valeurs (false/true)
    pictureTwo = models.BinaryField(blank = False, null = False)    # A voir pour les valeurs (false/true)
    pictureThree = models.BinaryField(blank = False, null = False)    # A voir pour les valeurs (false/true)


class types(models.Model):
    # Définissez vos champs ici