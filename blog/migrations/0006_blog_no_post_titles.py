# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20141019_1317'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='no_post_titles',
            field=models.BooleanField(default=True, verbose_name='\u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u043f\u043e\u0441\u0442\u043e\u0432 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439'),
            preserve_default=True,
        ),
    ]
