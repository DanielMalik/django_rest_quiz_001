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
    media = models.FileField(upload_to='audio', null=True, blank=True)

LEVEL = (
    (1, 'gump'),
    (2, 'joey'),
    (3, 'ross'),
    (4, 'sheldon')
)

CHARACTERS = (
    (0, 'random'),
    (1, 'vicious'),
    (2,  'next'),
    (3, 'stategist')
)

class NPCPlayer(models.Model):
    name = models.CharField(max_length=128,)
    mug_shot = models.ImageField(upload_to='npcs')
    came_from = models.CharField(max_length=128,)
    occupation = models.CharField(max_length=128,)
    interested = models.CharField(max_length=128,)
    level = models.SmallIntegerField(choices=LEVEL)
    character = models.SmallIntegerField(choices=CHARACTERS, default=0)
    points = models.IntegerField(default=0)

    class Meta:
        ordering = ['points']

    def __str__(self):
        return self.name

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mug_shot = models.ImageField(upload_to='players', null=True, blank=True)
    came_from = models.CharField(max_length=128, )
    occupation = models.CharField(max_length=128, )
    interested = models.CharField(max_length=128, )
    points = models.IntegerField(default=0)

    class Meta:
        ordering = ['points']

    def __str__(self):
        return self.user.username

class TadeuszSznuk(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='npcs')
    the_girl = models.ImageField(upload_to='npcs', null=True, blank=True)

