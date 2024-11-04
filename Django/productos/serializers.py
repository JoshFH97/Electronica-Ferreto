from rest_framework import serializers
from productos.models import Categoria, Producto, Orden, Detalle
from cuentas.models import Usuario

from django.contrib.auth.models import User



class Producto_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields="__all__"

class Orden_Serializer(serializers.ModelSerializer):
    id_usuario = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        # This field will now accept user IDs directly
    )

    class Meta:
        model = Orden  # Specify your Orden model here
        fields = '__all__'  # Include all fields, or specify which ones you want

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Optionally, you can include more user information if needed
        representation['id_usuario'] = instance.id_usuario.id  # This returns the user ID
        return representation
        

class Detalle_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Detalle
        fields = '__all__'


class Categoria_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields="__all__"           


class Detalle_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Detalle
        fields="__all__"           
             
    