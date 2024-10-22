from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from .models import Usuario
# Create your views here.

class RegistroView(APIView):
    def post(self,request):
        
        username=request.data.get('username')
        password=request.data.get('password')
        email = request.data.get('email')
       
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'Usuario ya existia'}, status=status.HTTP_400_BAD_REQUEST)
        
        nuevo_usuario = User.objects.create_user(username=username,email=email,password=password)
        
   
        
        return Response({'success':status.HTTP_201_CREATED}, status=status.HTTP_201_CREATED)      
    
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        # Authenticate user
        user = authenticate(request, username=username, password=password)

        # Check if the user is valid
        if user is not None:
            # Create or get token for the user
            token, created = Token.objects.get_or_create(user=user)
            
            # Return response with token
            return Response({
                'success': f'Status {status.HTTP_200_OK}',
                'superUser': user.is_superuser,
                'userID':user.id,
                'token': token.key,
            }, status=status.HTTP_200_OK)
        
        else:
            # If authentication fails
            return Response({
                'error': 'Usuario inválido',
                'status': status.HTTP_404_NOT_FOUND
            }, status=status.HTTP_404_NOT_FOUND)
        
        
class RegistroViewAdmin(APIView):
    def post(self,request):
        
        username=request.data.get('username')
        password=request.data.get('password')
        email = request.data.get('email')
       
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'Usuario ya existia'}, status=status.HTTP_400_BAD_REQUEST)
        
        nuevo_usuario = User.objects.create_superuser(username=username,email=email,password=password)
        
   
        
        return Response({'success':'Usuario creado'}, status=status.HTTP_201_CREATED)    

    
class PasswordUpdateView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        
        try:
            # Obtener el usuario con el username y email proporcionados
            user = User.objects.get(username=username, email=email)
            
            # Crear o obtener el token del usuario
            token, created = Token.objects.get_or_create(user=user)
            
            # Retornar la respuesta con el token y las propiedades del usuario
            return Response({
                'success': f'Status {status.HTTP_200_OK}',
                'superUser': user.is_superuser,
                'userID': user.id,
                'token': token.key,
            }, status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            # Si no se encuentra el usuario
            return Response({
                'error': 'Usuario inválido',
                'status': status.HTTP_404_NOT_FOUND
            }, status=status.HTTP_404_NOT_FOUND)

    # Método para manejar el patch
    def patch(self, request, *args, **kwargs):
        username = request.data.get('username')
        email = request.data.get('email')
        new_password = request.data.get('password')

        try:
            # Buscar al usuario con el username y email proporcionados
            user = User.objects.get(username=username, email=email)

            if new_password:
                # Actualizar la contraseña
                user.set_password(new_password)
                user.save()

                return Response({
                    'success': 'Contraseña actualizada con éxito',
                    'status': status.HTTP_200_OK
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'error': 'La nueva contraseña no ha sido proporcionada',
                    'status': status.HTTP_400_BAD_REQUEST
                }, status=status.HTTP_400_BAD_REQUEST)

        except User.DoesNotExist:
            return Response({
                'error': 'Usuario no encontrado',
                'status': status.HTTP_404_NOT_FOUND
            }, status=status.HTTP_404_NOT_FOUND)