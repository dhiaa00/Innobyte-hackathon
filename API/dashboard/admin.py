from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Booking, Guest, Payment, Room, RoomType, User

# Register your models here.
@admin.register(User)
class UserAdmin(BaseUserAdmin):
	pass

@admin.register(Guest)
class GuestAdmin(admin.ModelAdmin):
	list_display = ['id' ,'first_name', 'last_name', 'date_of_birth', 'address', 'phone', 'email', 'nationality']

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
	list_display = ['id' ,'booking', 'amount', 'payment_date', 'payment_method']

@admin.register(RoomType)
class RoomTypeAdmin(admin.ModelAdmin):
	list_display = ['id' ,'name', 'description', 'price_per_night', 'capacity']

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
	list_display = ['room_number' ,'status', 'type']

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
	list_display = ['id' ,'room', 'guest', 'total_price', 'check_in', 'check_out', 'created_at', 'updated_at']