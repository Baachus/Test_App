'''
This is the urls.py file for the family tree app. 
This file is used to create the URL patterns for the family tree app.
'''

# Django imports
from django.urls import path

# Local imports
from .views import index, login_user, logout_user, register_user, add_member, delete_member

# Define the app name
app_name = 'family_tree'

# Define the URL patterns
urlpatterns = [
    # Map the root URL to the index view
    path('', index, name='index'),

    # Map the URLs to their respective views
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('register/', register_user, name='register'),
    path('add_member/', add_member, name='add_member'),
    path('delete_member/', delete_member, name='delete_member'),
]