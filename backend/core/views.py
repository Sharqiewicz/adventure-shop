from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product

class ProductViewSet(viewsets.ViewSet):
    def list(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def get(self, request, pk=None):
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer
        return Response(serializer.data)
