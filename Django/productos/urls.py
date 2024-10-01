from django.urls import path
from .views import get_Producto_View

urlpatterns = [
  path("productos/",get_Producto_View.as_view(),name="Dora")
]
