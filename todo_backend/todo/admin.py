from django.contrib import admin
from .models import Todo


# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('bucket_name', 'todo_name', 'completed')


admin.site.register(Todo, TodoAdmin)