from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model

from .serializers import UsuarioRegisterSerializer, UsuarioReadSerializer

Usuario = get_user_model()


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UsuarioRegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        read_serializer = UsuarioReadSerializer(user)
        return Response(read_serializer.data, status=status.HTTP_201_CREATED)


class MeView(APIView):
    def get(self, request):
        user = request.user
        serializer = UsuarioReadSerializer(user)
        return Response(serializer.data)
