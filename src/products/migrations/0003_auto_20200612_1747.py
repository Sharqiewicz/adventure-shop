# Generated by Django 3.0.7 on 2020-06-12 17:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20200612_1729'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='opinion',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)]),
        ),
    ]
