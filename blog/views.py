# coding: utf8
from django.views.generic import DeleteView, UpdateView, CreateView
from django.http import HttpResponse, HttpResponseRedirect
import html2text
import json

from models import Post

class PostDelete(DeleteView):
	def delete(self, *args, **kwargs):
		self.object = self.get_object()
		self.object.delete()
		return HttpResponse('ok')

class PostUpdate(UpdateView):
	def post(self, request, *args, **kwargs):
		self.object = self.get_object()
		for attr_name, attr_value in json.loads(request.body).items():
			if hasattr(self.object, attr_name):
				setattr(self.object, attr_name, attr_value)
		self.object.save()
		return HttpResponse('ok')

class PostCreate(CreateView):
	def login_path(self, next="/"):
		return "/admin/login/?next=%s" % (next,)

	def dispatch(self, request, *args, **kwargs):
		if not request.user.is_staff:
			return HttpResponseRedirect(self.login_path(next=request.path))
		return super(PostCreate, self).dispatch(request, *args, **kwargs)
		
    
	template_name = "blog/form.html"
  
	def get(self, *args, **kwargs):
		self.object = None
		return self.render_to_response(context={})

	def post(self, request, *args, **kwargs):
		self.object = self.model()
		for attr_name, attr_value in json.loads(request.body).items():
			if hasattr(self.object, attr_name):
				setattr(self.object, attr_name, attr_value)
		self.object.save()
		return HttpResponse('ok')

def email_handler(request):
	post = Post()

	if request.POST['html'] != '': # wow wow we got formatted text
		converter = html2text.HTML2Text()
		post.content = converter.handle(request.POST['html'])
	else:
		post.content = request.POST['plain']

	post.title = request.POST['headers[Subject]']

	post.save()

	return HttpResponse('ok')