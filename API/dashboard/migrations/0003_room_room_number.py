# Generated by Django 4.2.3 on 2023-12-15 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_booking_guest_roomtype_room_payment_booking_guest_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='room_number',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
