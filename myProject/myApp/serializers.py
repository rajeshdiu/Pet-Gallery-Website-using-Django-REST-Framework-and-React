from rest_framework import serializers
from .models import CatProfile,DogProfile

class catSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatProfile
        fields = ['id', 'name', 'age', 'img']


class dogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogProfile
        fields = ['id', 'name', 'age', 'img']
