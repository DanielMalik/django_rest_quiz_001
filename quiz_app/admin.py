from django.contrib import admin
from quiz_app.models import Question

# Register your models here.

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('query', 'category', 'grade', 'comment', 'answer')
