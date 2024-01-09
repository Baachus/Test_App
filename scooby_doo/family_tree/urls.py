'''This is the urls.py file for the family tree app. This file is used to create the url for the family tree app.'''
from django.urls import path
from .views import index, login_user, logout_user, register_user

app_name = 'family_tree'

urlpatterns = [
    path('', index, name='index'),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('register/', register_user, name='register')
]
