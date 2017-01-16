from django.shortcuts import render
from quiz_app.models import Question, NPCPlayer
from quiz_app.serializers import QuestionSerializer, NPCPlayerSerialiezer
from rest_framework import generics


# Create your views here.


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer



class NPCPlayerList(generics.ListCreateAPIView):
    queryset = NPCPlayer.objects.all()
    serializer_class = NPCPlayerSerialiezer

class NPCPlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NPCPlayer.objects.all()
    serializer_class = NPCPlayerSerialiezer