from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import Group, User
from models import Furnitures
from rest_framework import permissions, viewsets

from tutorial.quickstart.serializers import GroupSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    #requêtes django
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

# class FurnituresViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows Furnituress to be viewed or edited.
#     """
#     queryset = Furnitures.objects.all().order_by('id')
#     serializer_class = FurnituresSerializer
#     permission_classes = [permissions.IsAuthenticated]