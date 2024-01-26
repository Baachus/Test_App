'''This file is used to create the model for the family tree app.'''''
from django.db import models
from django.contrib.auth.models import User

class FamilyModel(models.Model):
    '''This class is used to create the model for the todo app.'''
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gang = models.CharField(max_length=100)
    relationship = models.TextField(max_length=200)
    appearance = models.TextField(max_length=200, blank=True)
    image = models.ImageField(upload_to='family_members/',
                              default='family_members/Not_Found.jpg')
