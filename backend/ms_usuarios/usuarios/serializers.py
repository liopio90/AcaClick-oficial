from rest_framework import serializers
from .models import Usuario, Rol


class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = ["id_rol", "nombre_rol", "descripcion"]


class UsuarioReadSerializer(serializers.ModelSerializer):
    rol = RolSerializer()

    class Meta:
        model = Usuario
        fields = [
            "id_usuario",
            "correo",
            "username",
            "nombre",
            "apellido_paterno",
            "apellido_materno",
            "fecha_nacimiento",
            "rol",
            "tenant_id",
        ]


class UsuarioRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    id_rol = serializers.PrimaryKeyRelatedField(
        source="rol",
        queryset=Rol.objects.all(),
        write_only=True,
    )

    class Meta:
        model = Usuario
        fields = [
            "username",
            "correo",
            "nombre",
            "apellido_paterno",
            "apellido_materno",
            "fecha_nacimiento",
            "password",
            "id_rol",
        ]

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = Usuario(**validated_data)
        user.set_password(password)
        user.save()
        return user
