from django.urls import path
from . import views

urlpatterns = [
    # QR code generated
    path('qrcode-generate/', views.QRCodeGenerateAPIView.as_view()),
    # Auth
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', views.LogoutAPIView.as_view()),
]
