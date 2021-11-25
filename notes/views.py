from django.shortcuts import render
from .serializers import NoteSerializer, ShareNoteSerializer
from rest_framework import viewsets
from .models import Note, ShareNote
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.core.mail import send_mail
from utils.utils import Util
from django.conf import settings


class NotesView(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        tagname = self.request.query_params.get("tag", None)
        
        if tagname:
            queryset = queryset.filter(tags__name__startswith=tagname).distinct()
        return queryset
    

class NoteShareView(viewsets.ModelViewSet):
    serializer_class = ShareNoteSerializer
    queryset = ShareNote.objects.all()

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        user =  serializer.validated_data['user']
        note =  serializer.validated_data['note_id']
        user = User.objects.get(username=user)
        subject = f'${user.username} Shared A Note!'
        email_body = f"{user.username} shared a note with you! note id {note}"
        data = {'email_body': email_body, 'to_email': user.email,'email_subject': subject}
        Util.send_email(data)
        return Response(serializer.data , status=status.HTTP_201_CREATED, headers= self.get_success_headers(serializer.data))



