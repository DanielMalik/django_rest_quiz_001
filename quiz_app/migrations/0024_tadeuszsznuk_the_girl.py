# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-19 15:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz_app', '0023_auto_20170119_1355'),
    ]

    operations = [
        migrations.AddField(
            model_name='tadeuszsznuk',
            name='the_girl',
            field=models.ImageField(blank=True, null=True, upload_to='npcs'),
        ),
    ]
