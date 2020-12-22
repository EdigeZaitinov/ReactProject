from django.db import models

class GamesCategory(models.Model):
    category=models.CharField(max_length=30)

class Games(models.Model):
    link=models.TextField()
    name=models.CharField(max_length=50)
    description=models.TextField()
    video=models.TextField()
    category=models.ForeignKey(GamesCategory,on_delete=models.CASCADE)

class Users(models.Model):
    name=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    password=models.CharField(max_length=30)

class Comments(models.Model):
    comment=models.CharField(max_length=1000)
    userComments=models.ForeignKey(Users,on_delete=models.CASCADE)
