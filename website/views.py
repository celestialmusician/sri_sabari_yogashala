from django.shortcuts import render
from django.views import View


class HomeView(View):

    def get(self, request, *args, **kwargs):

        return render(request, 'website/home.html')


class AboutView(View):

    def get(self, request, *args, **kwargs):

        return render(request, 'website/about.html')


class YogaTTCView(View):

    def get(self, request, *args, **kwargs):

        return render(request, 'website/yoga_ttc.html')


class RetreatsView(View):

    def get(self, request, *args, **kwargs):

        return render(request, 'website/retreats.html')


class ContactView(View):

    def get(self, request, *args, **kwargs):

        return render(request, 'website/contact.html')

class YogaTTCView(View):

    def get(self,request,*args,**kwargs):

        return render(

            request,

            'website/yoga_ttc.html'

        )    

class RetreatView(View):

    def get(self,request,*args,**kwargs):

        return render(

            request,

            'website/retreats.html'

        )
    