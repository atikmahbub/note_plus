from django.shortcuts import render
from .serializers import NoteSerializer, ShareNoteSerializer
from rest_framework import viewsets
from .models import Note, ShareNote
from rest_framework.permissions import IsAuthenticated

class NotesView(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

    # def get_queryset(self):
    #     #we can add search functionality here by tags or we can also use django filter to filter from queryset
    #     #get query params and filter queryset
    #     return super().get_queryset()
    


class NoteShareView(viewsets.ModelViewSet):
    serializer_class = ShareNoteSerializer
    queryset = ShareNote.objects.all()

    # def create(self, request):
    #     serializer = self.serializer_class(data=request.data)
    #     #email notification can be added here , we can use thread to send email faster
    #     #get user object by user id from serializer data
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)