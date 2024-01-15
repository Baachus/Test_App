'''The FamilyTreeConfig class is used to configure the family tree app'''
# Django imports
from django.apps import AppConfig

# FamilyTreeConfig class
class FamilyTreeConfig(AppConfig):
    '''
    This class is used to configure the family tree app.
    It includes settings for the default auto field and the app name.
    '''

    # Define the default auto field
    default_auto_field = 'django.db.models.BigAutoField'

    # Define the app name
    name = 'family_tree'
