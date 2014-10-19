from django.views.generic import DeleteView, UpdateView
from django.http import HttpResponse

from models import Post

class PostDelete(DeleteView):
	def delete(self, *args, **kwargs):
		self.object = self.get_object()
		self.object.delete()
		return HttpResponse('ok')

class PostUpdate(UpdateView):
	def post(self, request, *args, **kwargs):
		self.object = self.get_object()
		for attr_name, attr_value in request.POST.items():
			if hasattr(self.object, attr_name):
				setattr(self.object, attr_name, attr_value)
		self.object.save()
		return HttpResponse('ok')
