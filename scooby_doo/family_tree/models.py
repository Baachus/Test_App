from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.db.models import ForeignKey

# Create your models here.

class FamilyModel(models.Model):
    '''This class is used to create the model for the todo app.'''
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gang = models.CharField(max_length=100)
    relationship = models.TextField(max_length=200)
    appearance = models.TextField(max_length=200)
