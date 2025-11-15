from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
import uuid


class Rol(models.Model):

    id_rol = models.BigAutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=50, unique=True)  # admin, propietario, cliente, etc.
    descripcion = models.TextField(blank=True, null=True)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.nombre_rol


class Usuario(AbstractUser):
 
    id_usuario = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_paterno = models.CharField(max_length=100)
    apellido_materno = models.CharField(max_length=100, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    correo = models.EmailField(unique=True)
    rol = models.ForeignKey(
        Rol,
        on_delete=models.RESTRICT,
        related_name="usuarios",
    )

    tenant_id = models.UUIDField(default=uuid.uuid4, editable=False)

    USERNAME_FIELD = "correo"
    REQUIRED_FIELDS = ["username"] 
    def __str__(self) -> str:
        return f"{self.nombre} {self.apellido_paterno} ({self.correo})"


class Sesion(models.Model):
    
    id_sesion = models.BigAutoField(primary_key=True)
    usuario = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="sesiones",
    )
    token = models.CharField(max_length=255, unique=True)
    expira_en = models.DateTimeField(blank=True, null=True)
    activo = models.BooleanField(default=True)
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Sesión {self.id_sesion} de {self.usuario.correo}"
