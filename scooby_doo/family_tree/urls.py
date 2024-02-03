'''
This is the urls.py file for the family tree app. 
This file is used to create the URL patterns for the family tree app.
'''

# Django imports
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

# Local imports
from .views import index, login_user, logout_user, register_user
from .views import add_member, delete_member, view_member, edit_member, view_gang_tree

# Define the app name
#pylint: disable=invalid-name
app_name = 'family_tree'
#pylint: enable=invalid-name

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
    path('view_member/<int:member_id>/', view_member, name='view_member'),
    path('edit_member/<int:member_id>/', edit_member, name='edit_member'),
    path('view_gang_tree/', view_gang_tree, name='view_gang_tree'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
