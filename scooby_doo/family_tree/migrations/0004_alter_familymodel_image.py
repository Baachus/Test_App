# Generated by Django 5.0.1 on 2024-01-16 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('family_tree', '0003_familymodel_image_alter_familymodel_appearance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='familymodel',
            name='image',
            field=models.ImageField(default='templates/family_tree/assets/family_members/Not_Found.jpg', upload_to='../family_tree/templates/family_tree/assets/family_members/'),
        ),
    ]