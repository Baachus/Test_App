# Generated by Django 5.0.1 on 2024-01-16 04:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('family_tree', '0004_alter_familymodel_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='familymodel',
            name='image',
            field=models.ImageField(default='media/family_members/Not_Found.jpg', upload_to='../media/family_members/'),
        ),
    ]