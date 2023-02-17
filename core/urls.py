from django.urls import path
from .views import QRCodeGenerateAPIView

urlpatterns = [
    path('qrcode-generate/', QRCodeGenerateAPIView.as_view()),
]
