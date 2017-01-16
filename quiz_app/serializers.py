from rest_framework import serializers
from quiz_app.models import Question, NPCPlayer, TadeuszSznuk




class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class NPCPlayerSerialiezer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NPCPlayer
        fields = '__all__'

class TadeuszSznukSerialiezer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TadeuszSznuk
        fields = '__all__'