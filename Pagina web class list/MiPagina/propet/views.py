import datetime
from django.shortcuts import render, redirect

from .forms import RegistroUserForm
from django.contrib.auth.decorators import login_required, user_passes_test 
from django.contrib.auth import authenticate, login







#from .forms import CategoriaForm

# Create your views here.

def index(request):
    return render(request,'index.html')

@login_required
def crearqr(request):
    return render(request,'crearqr.html')





def admin_check(user):
    return user.is_superuser  # Verifica si el usuario es un administrador


def registrar(request):
    data = {
        'form' : RegistroUserForm()
    }
    if request.method=="POST":
        formulario = RegistroUserForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            user = authenticate(username=formulario.cleaned_data["username"], 
                                password = formulario.cleaned_data["password1"])
            login(request, user)
            return redirect ('index')
        data["form"] = formulario
    return render(request, 'registration/registro.html', data)



























