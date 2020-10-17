from django.shortcuts import render
from .models import Games, GamesCategory, Users
from django.http import JsonResponse, HttpResponse
from django.core import serializers


def getGameCategories(request):
    gameCategories = GamesCategory.objects.all()
    data = serializers.serialize('json', gameCategories)
    return HttpResponse(data)


def getGames(request):
    games = Games.objects.all()
    data = serializers.serialize('json', games)
    return HttpResponse(data)

def getGamesByCategory(request,category_id):
    games=Games.objects.filter(category__id=category_id)
    data=serializers.serialize('json',games)
    return HttpResponse(data)

# def addUser(request):
#     print(request)

def getGameByName(request,gameName):
    game=Games.objects.filter(name=gameName)[:1]
    data=serializers.serialize('json',game)
    return HttpResponse(data)