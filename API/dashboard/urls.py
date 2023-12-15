from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('guests' , views.GuestViewSet)
router.register('payments' , views.PaymentViewSet)
router.register('roomtypes' , views.RoomTypeViewSet)
router.register('rooms' , views.RoomViewSet)
router.register('bookings' , views.BookingViewSet)

urlpatterns = router.urls