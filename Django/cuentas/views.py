from django.shortcuts import render
from rest_framework.views import APIView
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