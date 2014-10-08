# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=256)),
                ('site', models.OneToOneField(to='sites.Site')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'verbose_name': '\u043f\u043e\u0441\u0442', 'verbose_name_plural': '\u043f\u043e\u0441\u0442\u044b'},
        ),
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.TextField(verbose_name='\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435'),
        ),
        migrations.AlterField(
            model_name='post',
            name='published',
            field=models.DateTimeField(auto_now_add=True, verbose_name='\u043d\u0430\u043f\u0438\u0441\u0430\u043d'),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=300, verbose_name='\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a', blank=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='trueness',
            field=models.CharField(max_length=1, verbose_name='\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c', choices=[(b'A', b'pivotal'), (b'B', b'plain')]),
        ),
    ]
