from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
	(r'^grappelli/', include('grappelli.urls')), # grappelli URLS
    url(r'^admin/', include(admin.site.urls)),

    url(r'^', include('blog.urls')),
)
