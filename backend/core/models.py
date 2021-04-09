from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.ImageField(null=False)
    opinion = models.PositiveIntegerField(default=0)
    price = models.PositiveIntegerField(default=0)
    color = models.CharField(max_length=100)