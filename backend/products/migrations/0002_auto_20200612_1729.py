# Generated by Django 3.0.7 on 2020-06-12 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='opinion',
            field=models.IntegerField(max_length=1),
        ),
    ]