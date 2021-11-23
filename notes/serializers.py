from .models import Note,ShareNote
from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,TaggitSerializer)
import six
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id","username","email")

class TagSerializerField(serializers.ListField):
    child = serializers.CharField()

    def to_representation(self, data):
        return data.values_list('name', flat=True)

class ShareNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShareNote
        fields = ('id', 'note_id', 'user','created')


class NoteSerializer(TaggitSerializer,serializers.ModelSerializer):
    tags = TagSerializerField(required=False)
    note_shared_with = ShareNoteSerializer(read_only =True, many =True) #related_name

    class Meta:
        model = Note
        fields = ("id", "tags", "author", "title", "text" , "created", "updated", "note_shared_with")

    def create(self, validated_data):
        keywords = validated_data.pop('tags')
        instance = Note.objects.create(**validated_data)
        instance.tags.add(*keywords)
        return instance

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['author'] = UserSerializer(instance.author).data
        return response
    

