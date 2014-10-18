# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20141007_1812'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='trueness',
            field=models.CharField(default=b'B', max_length=1, verbose_name='\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c', choices=[(b'A', b'pivotal'), (b'B', b'plain'), (b'C', b'bullshit')]),
        ),
    ]
