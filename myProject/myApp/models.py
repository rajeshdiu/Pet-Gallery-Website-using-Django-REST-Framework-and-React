from django.db import models

class CatProfile(models.Model):
    name = models.CharField(max_length=100,null=True)
    age = models.IntegerField(null=True)
    img = models.ImageField(upload_to='profiles/',null=True) 

    def __str__(self):
        return self.name
    
class DogProfile(models.Model):
    name = models.CharField(max_length=100,null=True)
    age = models.IntegerField(null=True)
    img = models.ImageField(upload_to='profiles/',null=True) 

    def __str__(self):
        return self.name