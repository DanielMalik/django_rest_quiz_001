from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm

from quiz_app.serializers import QuestionSerializer, NPCPlayerSerialiezer, TadeuszSznukSerialiezer
from rest_framework import generics, mixins

from quiz_app.forms import EditPlayerUser, PlayerLogin
from quiz_app.models import Question, Player, NPCPlayer, TadeuszSznuk
import random
from django.contrib.auth.mixins import PermissionRequiredMixin, LoginRequiredMixin
from rest_framework.permissions import IsAuthenticatedOrReadOnly



# Create your views here.
class End(View):

    def get(self, request):
        if request.user.is_anonymous():
            return redirect('player-login')
        else:
            player = Player.objects.get(user=request.user)
            print(player)
            if player is None:
                return redirect('player-login')
            else:
                sznuk = TadeuszSznuk.objects.get(pk=1)
                ctx = {'player': player, 'sznuk': sznuk}
                return render(request, 'quiz_app/end.html', ctx)


class Quiz(LoginRequiredMixin, View):

    def get(self, request):
        print(request.user)
        sznuk = TadeuszSznuk.objects.get(pk=1)
        if request.user.is_anonymous():
            return redirect('player-login')
        else:
            # sznuk = {TadeuszSznuk.objects.get(pk=1)}
            all_npcs = []
            all_npcs = NPCPlayer.objects.all()
            npcs = []
            player = Player.objects.get(user=request.user)
            print(player)
            if player is None:
                return redirect('player-login')
            else:
                while len(npcs) < 9:
                    p = random.choice(all_npcs)
                    if p not in npcs:
                        npcs.append(p)
                ctx = {'player': player, 'npcs': npcs, 'sznuk': sznuk}
                print(ctx)
                return render(request, 'quiz_app/quiz.html', ctx)

class AddNewPlayer(View):

    def get(self, request):
        form_user = UserCreationForm

        return render(request, 'quiz_app/new_player.html', {'form_user': form_user})

    def post(self, request):
        form_user = UserCreationForm(request.POST)
        if form_user.is_valid():
            form_user.save()
            username = form_user.cleaned_data['username']
            password = form_user.cleaned_data['password1']
            password2 = form_user.cleaned_data['password2']
            new_player = Player.objects.create(user=User.objects.get(username=username))
            new_player.save()
            return redirect('quiz')
        else:
            form_user.add_error(None, "ERROR")
            return render(request, "quiz_app/new_player.html", {"form": form_user})

class EditPlayerUserView(LoginRequiredMixin, View):

    def get(self, request):
        form = EditPlayerUser()
        return render(request, 'quiz_app/edit_player.html', {'form': form})

    def post(self, request):
        form = EditPlayerUser(request.POST, request.FILES)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']
            first_name = form.cleaned_data['f_name']
            last_name = form.cleaned_data['l_name']
            email = form.cleaned_data['e_mail']
            photo = form.cleaned_data['photo']
            came_from = form.cleaned_data['came_from']
            occupation = form.cleaned_data['occupation']
            interested = form.cleaned_data['interested']
            if password == password2:
                user = authenticate(username=username,
                                    password=password)
                if user is not None:

                    user.first_name = first_name
                    user.last_name = last_name
                    user.email = email
                    user.save()

                    player = Player.objects.get(user=User.objects.get(username=username))
                    player.mug_shot = photo
                    player.came_from = came_from
                    player.occupation = occupation
                    player.interested = interested
                    player.save()


                    return redirect('quiz')
                else:
                    form.add_error(None, "user doesn't exists")
                    return render(request, "quiz_app/edit_player.html", {"form": form})

            else:
                form.add_error(None, "match error")
                return render(request, "quiz_app/edit_player.html", {"form": form})


        else:
            form.add_error(None, "ERROR")
            return render(request, "quiz_app/edit_player.html", {"form": form})

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
            print(user)
            if user is not None:

                login(request, user)
                print('ok')
                return redirect('quiz')

            else:

                form = PlayerLogin()
                print("k.o.")
                return render(request, 'quiz_app/login.html', {'form': form})
        else:
            form.add_error(None, "ERROR")
            return render(request, "quiz_app/edit_player.html", {"form": form})

def logout_view(request, next_page='/quiz'):
    logout(request)
    return redirect('player-login')


# REST server views

class QuestionList(generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # permission_required = 'change_question'
    # permission_required = 'delete_question'
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class QuestionDetail(PermissionRequiredMixin, generics.RetrieveUpdateDestroyAPIView):
    permission_required = 'add_question'
    # permission_required = 'change_question'
    # permission_required = 'delete_question'
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer



class NPCPlayerList(PermissionRequiredMixin, generics.ListCreateAPIView):
    permission_required = 'add_npcplayer'
    # permission_required = 'change_npcplayer'
    # permission_required = 'delete_npcplayer'
    queryset = NPCPlayer.objects.all()
    serializer_class = NPCPlayerSerialiezer

class NPCPlayerDetail(PermissionRequiredMixin, generics.RetrieveUpdateDestroyAPIView):
    permission_required = 'add_npcplayer'
    # permission_required = 'change_npcplayer'
    # permission_required = 'delete_npcplayer'
    queryset = NPCPlayer.objects.all()
    serializer_class = NPCPlayerSerialiezer



class TadeuszSznukList(PermissionRequiredMixin, generics.ListCreateAPIView):
    permission_required = 'add_tadeuszsznuk'
    # permission_required = 'change_tadeuszsznuk'
    # permission_required = 'delete_tadeuszsznuk'
    queryset = TadeuszSznuk.objects.all()
    serializer_class = TadeuszSznukSerialiezer


