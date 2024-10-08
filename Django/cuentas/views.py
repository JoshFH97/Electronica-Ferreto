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
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')
    
        user = authenticate(request,username=username,password=password)
        
        if user is not None:
                token,created = Token.objects.get_or_create(user=user)
                return Response({'success':f'status {status.HTTP_200_OK}','superUser':user.is_superuser}, status=status.HTTP_200_OK)
            
            
        else:
            return Response({'error':f'Usuario invalido  {status.HTTP_404_NOT_FOUND}'}, status=status.HTTP_404_NOT_FOUND)
        
class RegistroViewAdmin(APIView):
    def post(self,request):
        
        username=request.data.get('username')
        password=request.data.get('password')
        email = request.data.get('email')
       
        
        if User.objects.filter(username=username).exists():
            return Response({'error':'Usuario ya existia'}, status=status.HTTP_400_BAD_REQUEST)
        
        nuevo_usuario = User.objects.create_superuser(username=username,email=email,password=password)
        
   
        
        return Response({'success':'Usuario creado'}, status=status.HTTP_201_CREATED)    