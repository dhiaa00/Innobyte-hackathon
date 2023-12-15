from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
#custom user model
class User(AbstractUser):
    pass

class Guest(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    nationality = models.CharField(max_length=255)

class Payment(models.Model):
    booking = models.OneToOneField('Booking', on_delete=models.PROTECT)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField()
    payment_method = models.CharField(max_length=255)

class RoomType(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField()

class Room(models.Model):
    status = models.CharField(max_length=255)
    type = models.ForeignKey(RoomType, on_delete=models.PROTECT)

class Booking(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    guest = models.ForeignKey(Guest, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)