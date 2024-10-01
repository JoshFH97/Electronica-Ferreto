from django.db import models

# Create your models here.
class Producto(models.Model):
    id_usuario = models.ForeignKey("cuentas.User",on_delete=models.CASCADE)
