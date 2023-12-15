from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
#custom user model
class User(AbstractUser):
    pass

class RoomType(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField()

class Room(models.Model):
    status = models.CharField(max_length=255)
    type = models.ForeignKey(RoomType, on_delete=models.PROTECT)