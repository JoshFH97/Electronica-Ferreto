from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    ROLES = [
        ('Admin', 'Admin'),
        ('Cliente', 'Cliente')
    ]
    
    user = models.OneToOneField(User, unique=True, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, unique=True)
    rol = models.CharField(max_length=7, choices=ROLES, default='Cliente')  # Enum

    def __str__(self):
        return self.user.username
