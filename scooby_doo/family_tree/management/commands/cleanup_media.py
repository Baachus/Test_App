''' Deletes unused media files from the media directory. '''
import os
#import shutil
from django.core.management.base import BaseCommand
from django.conf import settings
from family_tree.models import FamilyModel
from termcolor import colored

class Command(BaseCommand):
    ''' Deletes unused media files from the media directory. '''
    help = 'Deletes unused media files'

    def handle(self, *args, **options):
        media_root = settings.MEDIA_ROOT

        # Walk through all sub-folders and files in media_root
        for dirpath, dirnames, filenames in os.walk(media_root):
            for filename in filenames:
                # Construct the absolute file path
                file_path = os.path.join(dirpath, filename)
                # Convert the absolute file path to relative path
                relative_file_path = os.path.relpath(file_path, media_root).replace('\\', '/')

                # Check if the file is referenced in the database
                if not FamilyModel.objects.filter(image=relative_file_path).exists():
                    if 'Not_Found' not in file_path:
                        os.remove(file_path)
                        print(colored(f'Deleted file {relative_file_path}', 'green'))

            # Optional: Remove empty directories
            for dirname in dirnames:
                dir_path = os.path.join(dirpath, dirname)
                if not os.listdir(dir_path):  # Check if directory is empty
                    os.rmdir(dir_path)
                    print(colored(f'Deleted file {relative_file_path}', 'green'))
