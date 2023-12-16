# Generated by Django 4.2.3 on 2023-12-15 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0005_booking_family_book_booking_id_card_room_extra_bed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='booking',
            name='family_book',
        ),
        migrations.RemoveField(
            model_name='booking',
            name='id_card',
        ),
        migrations.AddField(
            model_name='guest',
            name='family_book',
            field=models.ImageField(blank=True, null=True, upload_to='images/famBook'),
        ),
        migrations.AddField(
            model_name='guest',
            name='id_card',
            field=models.ImageField(blank=True, null=True, upload_to='images/card_id'),
        ),
    ]
