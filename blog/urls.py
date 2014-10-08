from django.conf.urls import patterns, url
from django.views.generic import DetailView
from endless_pagination.views import AjaxListView

from views import *
from models import *

urlpatterns = patterns('',
    url(r'^$', AjaxListView.as_view(model=Post), name='posts_list'),
    url(r'^post/(?P<pk>\d+)/', DetailView.as_view(model=Post), name='post_detail'),
)