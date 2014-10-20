from django import template
from django.utils.safestring import mark_safe

from django.contrib.sites.models import Site

register = template.Library()

@register.simple_tag
def current_blog():
	return Site.objects.get_current().blog.title