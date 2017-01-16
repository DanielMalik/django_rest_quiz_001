"""quiz_game_001 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from quiz_app.views import QuestionList, QuestionDetail, NPCPlayerList, NPCPlayerDetail, TadeuszSznukList
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^questions/$', QuestionList.as_view(), name='question-list'),
    url(r'^questions/(?P<pk>(\d)+)', QuestionDetail.as_view(), name='question-detail'),
    url(r'^npcs/$', NPCPlayerList.as_view(), name='npcplayer-list'),
    url(r'^npcs/(?P<pk>(\d)+)', NPCPlayerDetail.as_view(), name='npcplayer-detail'),
    url(r'^sznuk/$', TadeuszSznukList.as_view(), name='tadeuszsznuk-list'),
] #+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


