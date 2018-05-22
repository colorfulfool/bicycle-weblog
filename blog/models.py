#coding: utf8
from django.db import models
from django.contrib.sites.models import Site
from django.utils import timezone
import re

from datetime import datetime
import locale
from babel.dates import format_date
from django.conf import settings

import langdetect


class Post(models.Model):
	class Meta:
		verbose_name = u'пост'
		verbose_name_plural = u'посты'

	title = models.CharField(verbose_name=u'заголовок', max_length=300, blank=True)
	content = models.TextField(verbose_name=u'содержимое')
	trueness = models.CharField(verbose_name=u'точность', choices=(('A', 'solid'), ('B', 'plain'), ('C', 'bullshit')), default='B', max_length=1)
	published = models.DateTimeField(verbose_name=u'написан', blank=True)

	def save(self, *args, **kwargs):
		if not self.published:
			self.published = timezone.now()
		return super(Post, self).save(*args, **kwargs)

	def exempt(self):
		if self.title:
			return self.title
		elif self.content:
			return re.split(r'[?.!:]', self.content, flags=re.UNICODE)[0]

	def __unicode__(self):
		return self.exempt()


	def language(self):
		return langdetect.detect(self.content)

	def publication_date(self):
		return format_date(self.published, locale=self.language(), format="long")
		
	def publication_date_short(self):
		return re.sub(r"(?:, )?" + str(datetime.now().year) + r"(?: .\.)?", "", self.publication_date())

class Blog(models.Model):
	class Meta:
		verbose_name = u'настройки блога'
		verbose_name_plural = u'настройки блога'

	site = models.OneToOneField(Site)
	title = models.CharField(verbose_name=u'надпись на главной', max_length=256)
	no_post_titles = models.BooleanField(verbose_name=u'показывать заголовки постов на главной', default=True)
	enable_cipher = models.BooleanField(default=False)