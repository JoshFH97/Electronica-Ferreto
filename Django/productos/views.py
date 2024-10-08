from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from productos.models import Producto
from productos.serializers import Producto_Serializer
from productos.serializers import Producto_Serializer


# Create your views here.





class get_Producto_View(generics.ListCreateAPIView):
    queryset = Producto.objects.filter(activo=True)
    serializer_class=Producto_Serializer
    
class ToggleProductoActivoView(generics.UpdateAPIView):
    queryset = Producto.objects.all()
    serializer_class = Producto_Serializer
    lookup_field = 'id_producto'

    # Sobrescribimos el método update para alternar el valor de 'activo'
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Alternamos el valor de 'activo'
        instance.activo = not instance.activo
        instance.save()
        
        # Serializamos el objeto actualizado
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    
class EditView(generics.UpdateAPIView):


    queryset = Producto.objects.all()  # You want to update any Producto, not just the active ones
    serializer_class = Producto_Serializer

    def get_object(self):
        # This ensures that we fetch the correct object based on the primary key in the URL
        return generics.get_object_or_404(Producto, id_producto=self.kwargs.get('pk'))

    def update(self, request, *args, **kwargs):
        # Fetch the Producto object
        instance = self.get_object()

        # Use the serializer to handle the update logic
        serializer = self.get_serializer(instance, data=request.data, partial=False)  # `partial=False` ensures all fields must be provided

        # Validate the data
        serializer.is_valid(raise_exception=True)

        # Save the updated Producto
        self.perform_update(serializer)

        # Return the updated object as a response
        return Response(serializer.data)

    







