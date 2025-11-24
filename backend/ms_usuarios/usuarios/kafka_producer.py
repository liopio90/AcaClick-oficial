# backend/ms_usuarios/usuarios/kafka_producer.py
import json
from kafka import KafkaProducer

KAFKA_BROKER_URL = "localhost:9092"
KAFKA_TOPIC_USUARIOS_CREADOS = "usuarios.creados"

producer = KafkaProducer(
    bootstrap_servers=KAFKA_BROKER_URL,
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
)


def send_usuario_creado_event(user):
    """
    Envía al topic 'usuarios.creados' los datos del usuario recién creado.
    """
    payload = {
        "id_usuario": getattr(user, "id_usuario", getattr(user, "pk", None)),
        "correo": getattr(user, "correo", None),
        "nombre": getattr(user, "nombre", None),
        "apellido_paterno": getattr(user, "apellido_paterno", None),
    }

    print("[KAFKA] Evento usuario_creado enviado:", payload)

    producer.send(KAFKA_TOPIC_USUARIOS_CREADOS, value=payload)
    producer.flush()
