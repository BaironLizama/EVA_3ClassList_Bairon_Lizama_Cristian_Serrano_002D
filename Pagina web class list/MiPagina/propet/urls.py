
from django.urls import path
from .views import index,registrar,crearqr


urlpatterns =[
    path('', index, name='index'),
    path('crearqr/', crearqr, name='crearqr'),
        
    path('registrar/', registrar, name="registrar"),

   
   
]