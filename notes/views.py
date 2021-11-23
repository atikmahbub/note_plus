from django.shortcuts import render
from .serializers import NoteSerializer
from rest_framework import viewsets
from .models import Note
from rest_framework.permissions import IsAuthenticated

class NotesView(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    serializer_class = NoteSerializer
    queryset = Note.objects.all()