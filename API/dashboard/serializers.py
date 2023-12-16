from rest_framework import serializers
from .models import Booking, Guest, Payment, Room, RoomType, Shift, Staff


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ['id', 'first_name', 'last_name', 'date_of_birth', 'phone', 'fingerprint']

class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = ['id', 'staff', 'start_time', 'end_time']
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'booking', 'amount', 'payment_date', 'payment_method']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'room', 'guest', 'total_price', 'check_in', 'check_out', 'created_at', 'updated_at']

class GuestSerializer(serializers.ModelSerializer):
    bookings = BookingSerializer(many=True, read_only=True)
    class Meta:
        model = Guest
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'address', 'id_card', 'family_book', 'nationality', 'date_of_birth', 'bookings']
        
class RoomSerializer(serializers.ModelSerializer):
    bookings = BookingSerializer(many=True, read_only=True)
    class Meta:
        model = Room
        fields = ['id', 'status', 'type', 'extra_bed', 'bookings']

        read_only_fields = ['booking_set']

class RoomTypeSerializer(serializers.ModelSerializer):
    rooms = RoomSerializer(many=True, read_only=True)
    class Meta:
        model = RoomType
        fields = ['id', 'name', 'description', 'price_per_night', 'capacity', 'rooms']