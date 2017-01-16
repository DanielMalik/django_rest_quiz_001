from django.db import models
from django.contrib.auth.models import User

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
    comment_correct = models.TextField(max_length=512, null=True)
    comment_wrong = models.TextField(max_length=512, null=True)
    category = models.SmallIntegerField(choices=CATEGORY)
    grade = models.SmallIntegerField(choices=GRADE, default=0)
    media = models.FileField(upload_to='static/media', null=True, blank=True)

LEVEL = (
    (1, 'tabloid'),
    (2, 'regular'),
    (3, 'yoda')
)

class NPCPlayer(models.Model):
    name = models.CharField(max_length=128,)
    mug_shot = models.ImageField(upload_to='static/npcs')
    came_from = models.CharField(max_length=128,)
    occupation = models.CharField(max_length=128,)
    interested = models.CharField(max_length=128,)
    level = models.SmallIntegerField(choices=LEVEL)
    points = models.IntegerField(default=0)

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mug_shot = models.ImageField(upload_to='static/players', null=True, blank=True)
    came_from = models.CharField(max_length=128, )
    occupation = models.CharField(max_length=128, )
    interested = models.CharField(max_length=128, )
    points = models.IntegerField(default=0)
