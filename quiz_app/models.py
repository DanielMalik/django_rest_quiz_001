from django.db import models

# Create your models here.

GRADE = (
    (0, 'easy'),
    (1, 'normal'),
    (2, 'hard'),
    (3, 'unfair'),
    (4, 'tricky')
)

CATEGORY = (
    (1, 'Python'),
    (2, 'Muzyka'),
    (3, 'Astronomia'),
)

class Question(models.Model):
    query = models.TextField(max_length=512)
    answer = models.CharField(max_length=128,)
    comment = models.TextField(max_length=512, null=True)
    category = models.IntegerField(choices=CATEGORY)
    grade = models.IntegerField(choices=GRADE, default=0)
    media = models.FileField(upload_to='static/media', null=True, blank=True)
