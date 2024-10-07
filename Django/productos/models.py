from django.db import models

# Create your models here.
class Categoria(models.Model):
    id_categoria=models.AutoField(primary_key=True)
    nombre_categoria=models.CharField(max_length=20)

class Producto(models.Model):
    id_producto=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=20)
    descripcion=models.TextField()
    precio=models.IntegerField(null=False)
    stock=models.IntegerField()
    activo=models.BooleanField(default=True)
    id_categoria = models.ForeignKey("Categoria",on_delete=models.CASCADE)
    imagen=models.TextField(blank=True, null=True)


class Orden(models.Model):
    
    id_orden=models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey("cuentas.Usuario",on_delete=models.CASCADE)
    fecha_orden=models.DateField
    estado=models.CharField(max_length=20)
    
class Detalle(models.Model):
    
    id_detalle=models.AutoField(primary_key=True)
    id_orden=models.ForeignKey("Orden",on_delete=models.CASCADE)
    id_producto=models.ForeignKey("Producto",on_delete=models.CASCADE)
    cantidad=models.IntegerField()
    precio_individual=models.IntegerField()
    

    
    
