from django.core.management.base import BaseCommand
from family_tree.models import FamilyModel  # replace with the actual import path of your model

class Command(BaseCommand):
    help = 'Populates the FamilyModel table with data if it is empty'

    def handle(self, *args, **options):
        if not FamilyModel.objects.exists():
            # The FamilyModel table is empty. Populate it with data.

            FamilyModel.objects.create(name='Dave Walton', relationship='Uncle', gang='Velma', appearance='{"TV":[{"SHOW":"Scooby-Doo, Where Are You!","SEASON":3,"EPISODE":1,"RELEASE_YEAR":1978}],"Movie":[{}],"APPEARED":true}', user_id=1)
            FamilyModel.objects.create(name='Scrappy-Doo', relationship='Nephew', gang='Scooby', appearance='{"TV":[{}],"Movie":[{"NAME":"Scooby-Doo", "RELEASE_YEAR":2002}],"APPEARED":true}', user_id=1)
            FamilyModel.objects.create(name='John Maxwell', relationship='Uncle', gang='Daphne', appearance='{"TV":[{"SHOW":"Scooby-Doo, Where Are You!","SEASON":1,"EPISODE":7,"RELEASE_YEAR":1969}],"Movie":[{}],"APPEARED":true}', user_id=1)
            FamilyModel.objects.create(name='Olivia Dervy', relationship='Aunt', gang='Daphne', appearance='{"TV":[{"SHOW":"Scooby-Doo, Where Are You!","SEASON":3,"EPISODE":9,"RELEASE_YEAR":1978}],"Movie":[{}],"APPEARED":true}', user_id=1)
            
            # Add more FamilyModel.objects.create(...) lines to add more data
            self.stdout.write(self.style.SUCCESS('Successfully populated the FamilyModel table'))
        else:
            self.stdout.write(self.style.SUCCESS('The FamilyModel table is not empty'))