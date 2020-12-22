from django.shortcuts import render
from .models import Games, GamesCategory, Users,Comments
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
import json


def getGameCategories(request):
    gameCategories = GamesCategory.objects.all()
    data = serializers.serialize('json', gameCategories)
    return HttpResponse(data)


def getGames(request):
    games = Games.objects.all()
    data = serializers.serialize('json', games)
    return HttpResponse(data)


def getGamesByCategory(request, category_id):
    games = Games.objects.filter(category__id=category_id)
    data = serializers.serialize('json', games)
    return HttpResponse(data)


def getGameByName(request, gameName):
    game = Games.objects.filter(name=gameName)[:1]
    data = serializers.serialize('json', game)
    return HttpResponse(data)


@csrf_exempt
def getUsers(request):
    if request.method == 'GET':
        users = Users.objects.all()
        data = serializers.serialize('json', users)
        return HttpResponse(data)
    elif request.method == 'POST':
        body_unicode=request.body.decode('utf-8')
        body=json.loads(body_unicode)
        userName=body['name']
        userEmail=body['email']
        userPassword=body['password']
        user=Users(name=userName,email=userEmail,password=userPassword)
        user.save()
        return HttpResponse("user was created", status=201)

def getUserByName(request,userName):
    user=Users.objects.filter(name=userName)[:1]
    data = serializers.serialize('json', user)
    return HttpResponse(data)

@csrf_exempt
def comments(request):
    if request.method=='GET':
        comments=Comments.objects.all()
        data = serializers.serialize('json', comments)
        return HttpResponse(data)
    elif request.method=='POST':
        body_unicode=request.body.decode('utf-8')
        body=json.loads(body_unicode)
        commentText=body['comment']
        userId=body['userComments']
        user=Users.objects.filter(id=userId)[:1]
        user1=user[0]
        comment=Comments(comment=commentText,userComments=user1)
        comment.save()
        return HttpResponse("comment was added",status=201)

def getUserByID(request,userID):
    users=Users.objects.filter(pk=userID)[:1]
    data=serializers.serialize('json',users)
    return HttpResponse(data)
