# Generated by Django 5.0.1 on 2024-01-22 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('family_tree', '0005_alter_familymodel_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='familymodel',
            name='image',
            field=models.ImageField(default='family_members/Not_Found.jpg', upload_to='family_members/'),
        ),
    ]
