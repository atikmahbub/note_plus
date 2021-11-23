from .models import Note
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



class NoteSerializer(TaggitSerializer,serializers.ModelSerializer):
    tags = TagSerializerField(required=False)

    class Meta:
        model = Note
        fields = "__all__"

    def create(self, validated_data):
        keywords = validated_data.pop('tags')
        instance = Note.objects.create(**validated_data)
        instance.tags.add(*keywords)
        return instance

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['author'] = UserSerializer(instance.author).data
        return response
    