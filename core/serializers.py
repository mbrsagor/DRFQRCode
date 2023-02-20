from rest_framework import serializers
from django.contrib.auth.models import User


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class QrCodeSerializer(serializers.Serializer):
    """
    This serializer is the output of create qr code
    """
    file_type = serializers.CharField(max_length=5)
    image_base64 = serializers.CharField(max_length=300)
