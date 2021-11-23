from rest_framework import routers
from django.urls import path, include
from .views import NotesView, NoteShareView

router = routers.DefaultRouter()
router.register(r'notes', NotesView)
router.register(r'share-note', NoteShareView)

urlpatterns = [
    path('', include(router.urls)),
]