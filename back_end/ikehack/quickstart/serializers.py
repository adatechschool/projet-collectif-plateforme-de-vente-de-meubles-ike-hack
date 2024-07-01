# rappel du modèle
from django.contrib.auth.models import Group, User
from models import Furnitures
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class FurnituresSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Furnitures
        fields = ['id', 'name', 'price', 'size', 'color', 'material', 'disponibility', 'pictureOne','pictureTwo','pictureThree','type_id']
