from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    ROLES = [
        ('Admin', 'Admin'),
        ('Cliente', 'Cliente')
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    telefono = models.CharField(max_length=18)
    rol = models.CharField(max_length=7, choices=ROLES, default='Cliente')  # Enum

    def __str__(self):
        return self.user.username
