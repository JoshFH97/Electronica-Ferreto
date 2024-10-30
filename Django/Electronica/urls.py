from django.contrib import admin
from django.urls import include, path
from cuentas.views import RegistroView,RegistroViewAdmin,LoginView



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/registro',RegistroView.as_view()),
    path('api/registro/admin',RegistroViewAdmin.as_view()),
    path('api/',include('cuentas.urls')),
    path('api/login/',LoginView.as_view()),
    path('api/',include("productos.urls")),
    path('core/', include('core.urls')), 
]
