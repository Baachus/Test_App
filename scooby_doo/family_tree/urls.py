'''This is the urls.py file for the family tree app. This file is used to create the url for the family tree app.'''
from django.urls import path
from .views import index

app_name = 'family_tree'

urlpatterns = [
    path('', index, name='index'),
]
