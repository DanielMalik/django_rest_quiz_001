# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-18 11:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz_app', '0010_auto_20170118_1140'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='mug_shot',
            field=models.ImageField(blank=True, null=True, upload_to='static/media/players'),
        ),
    ]
