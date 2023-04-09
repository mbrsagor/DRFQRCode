# Default django
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import check_password

# Django rest framework
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import generics, status, permissions, views

# Custom
from messages import *
from utils import generate_qr
from core import serializers


class LoginAPIView(generics.CreateAPIView):
    """
    Name: Login API
    POST auth/login/
    Method: POST
    """

    # This permission class will override the global permission
    # class setting
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    throttle_classes = ''
    serializer_class = serializers.LoginSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", None)
        password = request.data.get("password", None)
        none_check = username or password is None
        empty_check = username or password is ''
        if (none_check or empty_check) is True:
            return Response(data={"message": ACCESS_REQUIRED},
                            status=status.HTTP_401_UNAUTHORIZED)
        get_password = User.objects.get(username__exact=username).password
        password_check = check_password(password, get_password)
        if password_check is True:
            user = authenticate(username=username, password=password)
            if user is not None:
                # login saves the user’s ID in the session,
                # using Django’s session framework.
                login(request, user)
                token = Token.objects.get_or_create(user=user)
                return Response(
                    data={"token": token[0].key},
                    status=status.HTTP_200_OK
                )
        else:
            return Response(
                data={"message": INVALID_ACCESS},
                status=status.HTTP_401_UNAUTHORIZED
            )


class LogoutAPIView(views.APIView):
    """
    Name: Logout API
    Desc: Here, is uses simple token when `logout` API will cal token will destroy.
    POST auth/logout/
    Method: GET
    """
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        # simply delete the session information
        request.session.flush()
        return Response(
            data={"message": LOGOUT},
            status=status.HTTP_200_OK)


class QRCodeGenerateAPIView(generics.CreateAPIView):
    """
    QR code generated API
    URL: /api/v1/catalogue/qrcode-generate/
    Method: POST
    :param
    text
    """
    serializer_class = serializers.QrCodeSerializer
    queryset = ''

    def post(self, request, *args, **kwargs):
        text = request.data['text']
        output = generate_qr(text)
        result = serializers.QrCodeSerializer(output).data
        return Response(
            data=result,
            status=status.HTTP_201_CREATED
        )
