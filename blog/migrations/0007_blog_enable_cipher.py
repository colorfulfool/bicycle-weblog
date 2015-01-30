# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_blog_no_post_titles'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='enable_cipher',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
