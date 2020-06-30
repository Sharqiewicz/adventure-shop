from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Product(models.Model):
    title = models.TextField()
    description = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=10)
    opinion = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(0)])
    img = models.ImageField( upload_to='images/', height_field=None, width_field=None, max_length=None)