from django.contrib import admin

from models import *

class PostAdmin(admin.ModelAdmin):
	radio_fields = {'trueness': admin.HORIZONTAL}
	list_display = ('title', 'published', 'trueness')

admin.site.register(Post, PostAdmin)
admin.site.register(Blog)
