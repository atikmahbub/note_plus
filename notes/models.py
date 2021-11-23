from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager

class Note(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    tags = TaggableManager()

    class Meta:
        ordering = ("-created",)

    def __str__(self):
        return str(self.author) + str(self.title)