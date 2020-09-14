from django.db import models


# Create your models here.
class Todo(models.Model):
    bucket_name = models.CharField(max_length=120)
    todo_name = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.bucket_name