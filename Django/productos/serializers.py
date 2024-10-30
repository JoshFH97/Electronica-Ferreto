from rest_framework import serializers
from productos.models import Categoria, Producto, Orden


class Producto_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields="__all__"

class Orden_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Orden
        fields="__all__" 
        
        
class Categoria_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields="__all__"           
             
    