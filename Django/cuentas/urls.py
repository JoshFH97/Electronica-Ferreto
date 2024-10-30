from django.contrib import admin
from django.urls import include, path
from .views import PasswordUpdateView



urlpatterns = [
    path('password/',PasswordUpdateView.as_view()),
]
