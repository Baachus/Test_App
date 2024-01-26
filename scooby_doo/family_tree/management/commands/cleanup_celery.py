''' This file is used to delete unused media files from the media folder. '''
import os
from celery import shared_task
from django.conf import settings
from family_tree.models import FamilyModel

@shared_task
def cleanup_unused_media():
    ''' Deletes unused media files from the media folder. '''
    media_root = settings.MEDIA_ROOT
    for media_file in os.listdir(media_root):
        file_path = os.path.join(media_root, media_file)
        if not FamilyModel.objects.filter(image=file_path).exists():
            os.remove(file_path)
