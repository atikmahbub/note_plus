from .models import Note
from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,TaggitSerializer)

class NoteSerializer(TaggitSerializer,serializers.ModelSerializer):
    tags = TagListSerializerField()
    
    class Meta:
        model = Note
        fields = "__all__"