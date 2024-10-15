from django.urls import path
from .views import FilterCellView, get_Producto_View,ToggleProductoActivoView,EditView, FilterAcceView, FilterCompView, FilterSoftView, AscPrice, DescPrice, ProductNombre;


urlpatterns = [
  path("productos/",get_Producto_View.as_view(),name="Dora"),
  path('productos/<int:id_producto>/delete/', ToggleProductoActivoView.as_view(), name='delete'),
  path('productos/<int:pk>/update/',EditView.as_view(), name='update-producto'),
  path('productos/celulares/', FilterCellView.as_view(), name="category_1"),
  path('productos/computadoras/', FilterCompView.as_view(), name="category_2"),
  path('productos/accesorios/', FilterAcceView.as_view(), name="category_3"),
  path('productos/software/', FilterSoftView.as_view(), name="category_4"),
  path('productos/<str:nombre>/', ProductNombre.as_view(), name="priducto"),
  path('productos/categoria/<int:id>/ordenar/<str:value>/', AscPrice.as_view(), name='asc_price'),

]
