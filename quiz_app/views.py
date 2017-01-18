from django.shortcuts import render
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from quiz_app.models import Question, NPCPlayer, TadeuszSznuk
from quiz_app.serializers import QuestionSerializer, NPCPlayerSerialiezer, TadeuszSznukSerialiezer
from rest_framework import generics
from quiz_app.forms import AddPlayerUser, PlayerLogin
from quiz_app.models import Player, NPCPlayer, TadeuszSznuk
import random


# Create your views here.

class Quiz(View):

    def get(self, request):
        # sznuk = {TadeuszSznuk.objects.get(pk=1)}
        all_npcs = []
        all_npcs = NPCPlayer.objects.all()
        print(len(all_npcs))
        npcs = []
        print(all_npcs)
        while len(npcs) < 9:
            p = random.choice(all_npcs)
            if p not in npcs:
                npcs.append(p)

        print(npcs)
        print(npcs[1].occupation)
        print(len(npcs))
        player = {}
        ctx = {'player': player, 'npcs': npcs,}
        return render(request, 'quiz_app/quiz.html', ctx)

class AddPlayerUserView(View):
    def get(self, request):
        form = AddPlayerUser
        return render(request, 'quiz_app/new_player.html', {'form': form})

    def post(self, request):
        form = AddPlayerUser(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']
            first_name = form.cleaned_data['f_name']
            last_name = form.cleaned_data['l_name']
            email = form.cleaned_data['e_mail']
            if password == password2:
                user = authenticate(username=username,
                                    password=password)
                if user is None:
                    new_user = User.objects.create_user(username, email, password)
                    new_user.username = username
                    new_user.password = password
                    new_user.email = email
                    new_user.first_name = first_name
                    new_user.last_name = last_name
                    new_user.save()
                    new_player = Player.objects.create(user=User.objects.get(username=username))
                    new_player.save()

                    return render(request, 'quiz_app/quiz.html')
                else:
                    form.add_error(None, "user exists")
                    return render(request, "quiz_app/new_player.html", {"form": form})

            else:
                form.add_error(None, "match error")
                return render(request, "quiz_app/new_player.html", {"form": form})


        else:
            form.add_error(None, "ERROR")
            return render(request, "quiz_app/new_player.html", {"form": form})

class PlayerLog(View):

    def get(self, request):
        form = PlayerLogin()
        return render(request, 'quiz_app/login.html', {'form': form})

    def post(self, request):
        form = PlayerLogin(request.POST)
        if form.is_valid():
            data = dict()
            data['username'] = form.cleaned_data['login']
            data['password'] = form.cleaned_data['password']

            user = authenticate(username=data['username'],
                                password=data['password'])
            if user is not None:
                print('ok')
                login(request, user)
                return render(request, "quiz_app/quiz.html")

            else:
                print("k.o.")
                form = PlayerLogin()
                return render(request, 'quiz_app/login.html', {'form': form})

# REST server views

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



class TadeuszSznukList(generics.ListCreateAPIView):
    queryset = TadeuszSznuk.objects.all()
    serializer_class = TadeuszSznukSerialiezer