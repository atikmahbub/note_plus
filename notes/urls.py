from rest_framework import routers
from django.urls import path, include
from .views import NotesView

router = routers.DefaultRouter()
router.register(r'notes', NotesView)

urlpatterns = [
    path('', include(router.urls)),
]