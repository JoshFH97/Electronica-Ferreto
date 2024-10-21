from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from productos.models import Producto, Orden
from productos.serializers import Producto_Serializer, Orden_Serializer
import stripe
from django.http import JsonResponse
from django.conf import settings
from rest_framework.views import APIView


# Create your views here.


class Payments_View(APIView):
    stripe.api_key = settings.STRIPE_SECRET_KEY

    def post(self, request, *args, **kwargs):
        try:
            # Assuming you might get the amount dynamically, else it's set as $10.00
            amount = request.data.get('amount', 1000)  # Default to 1000 cents ($10)
            
            # Create a PaymentIntent with Stripe
            intent = stripe.PaymentIntent.create(
                amount=amount,
                currency='usd',
                automatic_payment_methods={'enabled': True},
            )

            return JsonResponse({
                'clientSecret': intent['client_secret']
            })
        except Exception as e:
            return JsonResponse({'error': str(e)})


class Facturas_View(generics.CreateAPIView):
    
     queryset = Orden.objects.all()
     serializer_class=Orden_Serializer
          

class get_Producto_View(generics.ListCreateAPIView):
    queryset = Producto.objects.filter(activo=True)
    serializer_class=Producto_Serializer


class FilterDestacadoView(generics.ListCreateAPIView):
           queryset = Producto.objects.filter(activo=True, destacado=True)
           serializer_class=Producto_Serializer



class AscPrice(generics.ListCreateAPIView):
    serializer_class = Producto_Serializer

    def get_queryset(self):
        id = self.kwargs.get('id')  # obtener el id de la URL
        value = self.kwargs.get('value')  # obtener el valor (campo) de la URL
        order = self.request.GET.get('order', None)  # obtener 'order' como query param
        
        print(f"Received category ID: {id}, order: {order}")
        queryset = Producto.objects.filter(id_categoria_id=id, activo=True)
        
        if order == 'asc/':
            queryset = queryset.order_by(value)
        elif order == 'desc/':
            queryset = queryset.order_by(f"-{value}")
        
        return queryset

       


class DescPrice(generics.ListCreateAPIView):
       queryset = Producto.objects.all().order_by('-precio') 
       serializer_class=Producto_Serializer

class ProductNombre(generics.ListCreateAPIView):
       lookup_field='nombre'
       queryset = Producto.objects.filter(nombre=lookup_field)
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

    







