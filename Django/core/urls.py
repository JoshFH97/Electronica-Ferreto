from django.urls import path
from .views import SetCookieView, GetCookieView

urlpatterns = [
    path('set-cookie/', SetCookieView.as_view(), name='set_cookie'),
    path('get-cookie/', GetCookieView.as_view(), name='get_cookie'),
]