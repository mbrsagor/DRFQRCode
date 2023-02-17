from rest_framework import generics, status
from rest_framework.response import Response

from utils import generate_qr
from core.serializers import QrCodeSerializer


class QRCodeGenerateAPIView(generics.CreateAPIView):
    """
    QR code generated API
    URL: /api/v1/catalogue/qrcode-generate/
    :param
    text
    """
    serializer_class = QrCodeSerializer
    queryset = ''

    def post(self, request, *args, **kwargs):
        text = request.data['text']
        output = generate_qr(text)
        result = QrCodeSerializer(output).data
        return Response(
            data=result,
            status=status.HTTP_201_CREATED
        )
