from rest_framework import serializers
from productos.models import Producto


class Producto_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields="__all__"
        
    