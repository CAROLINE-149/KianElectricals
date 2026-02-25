from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

#def produceSector(request): 
   # return render(request, 'firstApp/home.html')  

def home(request):
    return HttpResponse("Kian App is working")
