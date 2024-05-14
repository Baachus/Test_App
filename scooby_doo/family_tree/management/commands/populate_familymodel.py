'''Populates the FamilyModel table with data if it is empty'''
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from family_tree.models import FamilyModel

class Command(BaseCommand):
    '''Populates the FamilyModel table with data if it is empty'''
    
    help = 'Populates the FamilyModel table with data if it is empty'

    def handle(self, *args, **options):
        User.objects.get_or_create(id=1, defaults={'username': 'default_user', 'email': 'management@fakeemail.com'})

        # If the FamilyModel table is empty. Populate it with data.
        if not FamilyModel.objects.exists():
            #pylint: disable=line-too-long
            FamilyModel.objects.create(
                name='Dave Walton',
                relationship='Uncle',
                gang='Velma Dinkley',
                appearance='{"TV":[{"SHOW":"Scooby-Doo, Where Are You!","SEASON":3,"EPISODE":1,"RELEASE_YEAR":1978}],"Movie":[{}],"APPEARED":true}',
                image='family_members/Dave_Walton.jpg',
                user_id=1
                )
            FamilyModel.objects.create(
                name='Scrappy-Doo',
                relationship='Nephew',
                gang='Scooby-Doo',
                appearance='{"TV":[{}],"Movie":[{"NAME":"Scooby-Doo", "RELEASE_YEAR":2002}],"APPEARED":true}',
                image='family_members/Scrappy-Doo.jpg',
                user_id=1
                )
            FamilyModel.objects.create(
                name='John Maxwell',
                relationship='Uncle',
                gang='Daphne Blake',
                appearance='{"TV":[{"SHOW":"Scooby-Doo, Where Are You!","SEASON":1,"EPISODE":7,"RELEASE_YEAR":1969}],"Movie":[{}],"APPEARED":true}',
                image='family_members/John_Maxwell.jpg',
                user_id=1
                )
            FamilyModel.objects.create(
                name='Olivia Dervy',
                relationship='Aunt',
                gang='Daphne Blake',
                appearance='{"TV":[{"SHOW":"Scooby-Doo, Where Are You!","SEASON":3,"EPISODE":9,"RELEASE_YEAR":1978}],"Movie":[{}],"APPEARED":true}',
                image='family_members/Olivia_Dervy.jpg',
                user_id=1
                )
            FamilyModel.objects.create(
                name='Dada-Doo',
                relationship='Father',
                gang='Scooby-Doo',
                appearance='{"TV":[{"SHOW":"13 Ghosts of Scooby Doo","SEASON":1,"EPISODE":9,"RELEASE_YEAR":1978}, {"SHOW":"13 Ghosts of Scooby Doo","SEASON":1,"EPISODE":12,"RELEASE_YEAR":1978}],"Movie":[{}],"APPEARED":true}',
                image='family_members/Dada-Doo.jpg',
                user_id=1
            )
            FamilyModel.objects.create(
                name='Mumsy-Doo',
                relationship='Mother',
                gang='Scooby-Doo',
                appearance='{"TV":[{"SHOW":"13 Ghosts of Scooby Doo","SEASON":1,"EPISODE":9,"RELEASE_YEAR":1978}, {"SHOW":"13 Ghosts of Scooby Doo","SEASON":1,"EPISODE":12,"RELEASE_YEAR":1978}],"Movie":[{}],"APPEARED":true}',
                image='family_members/Mumsy-Doo.jpg',
                user_id=1
            )
            #pylint: enable=line-too-long

            self.stdout.write('Successfully populated the FamilyModel table')
        else:
            self.stdout.write('The FamilyModel table is not empty')
