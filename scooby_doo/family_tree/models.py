'''This file is used to create the model for the family tree app.'''''
from django.db import models
from django.contrib.auth.models import User

class FamilyModel(models.Model):
    '''This class is used to create the model for the todo app.'''

    GANG_CHOICES = [
        ('Scooby-Doo', 'Scooby-Doo'),           # (stored value, display value)
        ('Shaggy Rogers', 'Shaggy Rogers'),
        ('Fred Jones', 'Fred Jones'),
        ('Daphne Blake', 'Daphne Blake'),
        ('Velma Dinkley', 'Velma Dinkley'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gang = models.CharField(max_length=100, choices=GANG_CHOICES)
    relationship = models.TextField(max_length=200, blank=True)
    appearance = models.TextField(max_length=200, blank=True)
    image = models.ImageField(upload_to='family_members/',
                              default='family_members/Not_Found.jpg')
