from django.contrib import admin
from django.urls import path
from .views import ProductViewSet

urlpatterns = [
    path('products/', ProductViewSet.as_view({ "get": "list"})),
    path('products/<str:pk>/', ProductViewSet.as_view({"get": "get"}))
]