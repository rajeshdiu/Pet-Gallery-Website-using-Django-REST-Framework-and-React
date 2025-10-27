# backend/app/views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import CatProfile,DogProfile
from .serializers import *
from rest_framework import viewsets

class catViewSets(viewsets.ModelViewSet):
    
    queryset=CatProfile.objects.all()
    serializer_class = catSerializer
    
    
class dogViewSets(viewsets.ModelViewSet):
    
    queryset=DogProfile.objects.all()
    serializer_class = dogSerializer