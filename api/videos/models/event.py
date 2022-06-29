from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=50)
    event_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)