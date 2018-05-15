# coding: utf-8

from django import template
from django.utils.safestring import mark_safe
import re
import random

from django.contrib.sites.models import Site

register = template.Library()

@register.simple_tag
def current_blog():
	return Site.objects.get_current().blog.title

@register.filter
def cipher(text):
	if not Site.objects.get_current().blog.enable_cipher:
		return text

	def swap(letter):
		if letter.group(0).isupper():
			return random.choice(u'АБВГДЕЖЗИКЛМНОПРСТУФЧХШЩЫЭЮЯ')
		else:
			return random.choice(u'абвгдежзиклмнопрстуфчхшщыэюя')

	return re.sub(r'\w', swap, text, flags=re.UNICODE)
  
  
@register.filter(is_safe=True)
def extra_markdown(text):
  return re.sub(r'_([\S ]+?)_', r'<span class="markdown--special-word">\1</span>', text)