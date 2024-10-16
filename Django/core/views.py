# core/views.py

from django.http import HttpResponse
from django.views import View

class SetCookieView(View):
    def get(self, request, *args, **kwargs):
        # Establecer cookies de usuario
        response = HttpResponse("Cookie Set")
        response.set_cookie('username', 'user_value', max_age=3600)  # 1 hora de duración
        return response

class GetCookieView(View):
    def get(self, request, *args, **kwargs):
        # Obtener cookies
        username = request.COOKIES.get('username', 'No username found')
        return HttpResponse(f"Username from cookie: {username}")
