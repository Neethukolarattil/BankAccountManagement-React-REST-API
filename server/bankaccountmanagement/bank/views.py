from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Bank
from .serializer import BankSerializer

# Create your views here.

class BankView(ModelViewSet):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer