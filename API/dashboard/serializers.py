from rest_framework import serializers
from .models import Booking, Guest, Payment, Room, RoomType

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'address', 'nationality', 'date_of_birth']
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'booking', 'amount', 'payment_date', 'payment_method']

class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = ['id', 'name', 'description', 'price_per_night', 'capacity']

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'status', 'type']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'room', 'guest', 'total_price', 'check_in', 'check_out', 'created_at', 'updated_at']