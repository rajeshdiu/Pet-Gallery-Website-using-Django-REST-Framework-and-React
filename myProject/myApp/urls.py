from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'cats', catViewSets, basename='cats')
router.register(r'dogs', dogViewSets, basename='dogs')

urlpatterns = [
    path('', include(router.urls)),
]
