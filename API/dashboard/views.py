from django.shortcuts import render
from rest_framework import viewsets

from .models import Booking, Guest, Payment, Room, RoomType
from .serializers import BookingSerializer, GuestSerializer, PaymentSerializer, RoomSerializer, RoomTypeSerializer

# Create your views here.
class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.prefetch_related('bookings').all()
    serializer_class = GuestSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class RoomTypeViewSet(viewsets.ModelViewSet):
    queryset = RoomType.objects.prefetch_related('rooms').all()
    serializer_class = RoomTypeSerializer

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.prefetch_related('bookings').all()
    serializer_class = RoomSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.prefetch_related().all()
    serializer_class = BookingSerializer