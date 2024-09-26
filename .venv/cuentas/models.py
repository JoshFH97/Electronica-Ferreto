from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):

    user = models.OneToOneField(User, unique=True, on_delete=models.CASCADE)
  

    def __str__(self):
        return self.user.username
