from django.conf.urls import patterns, url
from django.views.generic import DetailView, DeleteView
from endless_pagination.views import AjaxListView

from views import *
from models import Post

urlpatterns = patterns('',
    url(r'^$', AjaxListView.as_view(queryset=Post.objects.order_by('-published')), name='posts_list'),
    url(r'^post/(?P<pk>\d+)/$', DetailView.as_view(model=Post), name='post_detail'),
    url(r'^post/(?P<pk>\d+)/delete/$', PostDelete.as_view(model=Post), name='post_delete'),
    url(r'^post/(?P<pk>\d+)/update/$', PostUpdate.as_view(model=Post), name='post_update'),
    url(r'^incoming_email/$', email_handler),
)