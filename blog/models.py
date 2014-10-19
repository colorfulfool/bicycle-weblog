#coding: utf8
from django.db import models
from django.contrib.sites.models import Site
from django.utils import timezone
import re


class Post(models.Model):
	class Meta:
		verbose_name = u'пост'
		verbose_name_plural = u'посты'

	title = models.CharField(verbose_name=u'заголовок', max_length=300, blank=True)
	content = models.TextField(verbose_name=u'содержимое')
	trueness = models.CharField(verbose_name=u'точность', choices=(('A', 'pivotal'), ('B', 'plain'), ('C', 'bullshit')), default='B', max_length=1)
	published = models.DateTimeField(verbose_name=u'написан', blank=True)

	def save(self, *args, **kwargs):
		if not self.pk:
			self.published = timezone.now()
		return super(Post, self).save(*args, **kwargs)

	def exempt(self):
		if self.title:
			return self.title
		elif self.content:
			return re.split(r'[?.!]', self.content, flags=re.UNICODE)[0]

	def __unicode__(self):
		return self.exempt()

class Blog(models.Model):
	class Meta:
		verbose_name = u'настройки блога'
		verbose_name_plural = u'настройки блога'

	site = models.OneToOneField(Site)
	title = models.CharField(verbose_name=u'надпись на главной', max_length=256)