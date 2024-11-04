from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Categoria(models.Model):
    id_categoria=models.AutoField(primary_key=True)
    nombre_categoria=models.CharField(max_length=20)

    def __str__(self):
        return self.nombre_categoria




class Producto(models.Model):
    id_producto=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=20)
    descripcion=models.TextField()
    precio=models.IntegerField(null=False)
    stock=models.IntegerField()
    activo=models.BooleanField(default=True)
    destacado=models.BooleanField(default=False)
    id_categoria = models.ForeignKey("Categoria",on_delete=models.CASCADE)
    imagen=models.TextField(blank=True, null=True)


class Orden(models.Model):
    id_orden = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_orden = models.DateField(null=True, auto_now_add=True)
    estado = models.CharField(max_length=20)

    def __str__(self):
        return f"Orden {self.id_orden} - {self.id_usuario.username}"
    
class Detalle(models.Model):
    
    id_detalle=models.AutoField(primary_key=True)
    id_orden=models.ForeignKey("Orden",on_delete=models.CASCADE)
    id_producto=models.ForeignKey("Producto",on_delete=models.CASCADE)
    cantidad=models.IntegerField()
    precio_individual=models.IntegerField()
    

    
    
