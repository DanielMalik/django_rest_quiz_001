# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-16 19:49
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz_app', '0006_auto_20170116_1940'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='npcplayer',
            options={'ordering': ['points']},
        ),
        migrations.AlterModelOptions(
            name='player',
            options={'ordering': ['points']},
        ),
    ]
