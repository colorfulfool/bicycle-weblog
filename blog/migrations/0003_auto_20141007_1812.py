# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20141007_1804'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'verbose_name': '\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u043b\u043e\u0433\u0430', 'verbose_name_plural': '\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u043b\u043e\u0433\u0430'},
        ),
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.CharField(max_length=256, verbose_name='\u043d\u0430\u0434\u043f\u0438\u0441\u044c \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439'),
        ),
    ]
