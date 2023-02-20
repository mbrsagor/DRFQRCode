from django.urls import path
from . import views

urlpatterns = [
    path('qrcode-generate/', views.QRCodeGenerateAPIView.as_view()),
]
