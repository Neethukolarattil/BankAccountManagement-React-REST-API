from django.db import models

# Create your models here.

class Bank(models.Model):
    name = models.CharField(max_length=100)
    place = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    account_no = models.PositiveIntegerField()