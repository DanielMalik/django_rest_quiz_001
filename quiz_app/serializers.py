from rest_framework import serializers
from quiz_app.models import Question




class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'