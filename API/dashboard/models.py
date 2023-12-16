from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
#custom user model
class User(AbstractUser):
    pass

class Staff(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    phone = models.CharField(max_length=255)
    fingerprint = models.ImageField(upload_to='images/fingerprint', null=True, blank=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Shift(models.Model):
    staff = models.ForeignKey(Staff, related_name = 'shifts', on_delete=models.PROTECT)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

class Guest(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=255)
    id_card = models.ImageField(upload_to='images/card_id', null=True, blank=True)
    family_book = models.ImageField(upload_to='images/famBook',null=True, blank=True)
    phone = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    nationality = models.CharField(max_length=255)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

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

    def __str__(self):
        return self.name

class Room(models.Model):
    room_number = models.IntegerField()
    status = models.CharField(max_length=255)
    type = models.ForeignKey(RoomType,related_name = 'rooms', on_delete=models.PROTECT)
    extra_bed = models.BooleanField()

    def __str__(self):
        return 'room ' + str(self.room_number)

class Booking(models.Model):
    room = models.ForeignKey(Room,related_name = 'bookings' , on_delete=models.CASCADE)
    guest = models.ForeignKey(Guest,related_name = 'bookings', on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        guest = self.guest.first_name + ' ' + self.guest.last_name
        room = 'room ' + str(self.room.room_number)
        return guest + ' ' + room