from django.shortcuts import render
from rest_framework import generics

from productos.models import Producto
from productos.serializers import Producto_Serializer

# Create your views here.
class get_Producto_View(generics.ListCreateAPIView):
    queryset = Producto.objects.filter(activo=True)
    serializer_class=Producto_Serializer