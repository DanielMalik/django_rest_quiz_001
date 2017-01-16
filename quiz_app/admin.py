from django.contrib import admin
from django.contrib.auth.models import User
from quiz_app.models import Question, NPCPlayer, Player, TadeuszSznuk

# Register your models here.

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('query', 'category', 'grade', 'comment_correct', 'comment_wrong', 'answer')

@admin.register(NPCPlayer)
class NPCPlayerAdmin(admin.ModelAdmin):
    list_display = ('name', 'mug', 'points', 'level', 'came_from', 'occupation', 'interested', 'mug_shot')

    def mug(self, obj):
        return "<img src ='/{}' width='150' height='150' >".format(obj.mug_shot)

    mug.allow_tags = True

@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ('user', 'mug', 'points', 'came_from', 'occupation', 'interested', 'mug_shot')

    def mug(self, obj):
        return "<img src ='/{}' width='150' height='150' >".format(obj.mug_shot)

    mug.allow_tags = True

@admin.register(TadeuszSznuk)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ('user', 'pic', 'avatar')

    def pic(self, obj):
        return "<img src ='/{}' width='150' height='150' >".format(obj.avatar)

    pic.allow_tags = True


