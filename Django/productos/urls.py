from django.urls import path
from .views import FilterCellView, get_Producto_View,ToggleProductoActivoView,EditView, AscPrice,  ProductNombre,Facturas_View,Payments_View;


urlpatterns = [
  path("productos/",get_Producto_View.as_view(),name="Dora"),
  path('productos/<int:id_producto>/delete/', ToggleProductoActivoView.as_view(), name='delete'),
  path('productos/<int:pk>/update/',EditView.as_view(), name='update-producto'),
  path('productos/<str:nombre>/', ProductNombre.as_view(), name="producto"),
  path('productos/categoria/<int:id>/ordenar/<str:value>/', AscPrice.as_view(), name='asc_price'),
  path('orden/', Facturas_View.as_view(), name="orden"),
  path('create-payment-intent/', Payments_View.as_view(), name='payments'),

]
