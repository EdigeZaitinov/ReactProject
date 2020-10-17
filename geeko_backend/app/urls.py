from django.urls import path
from app import views
 
urlpatterns=[
    path('GameCategories/',views.getGameCategories,name='GameCategories'),
    path('Games',views.getGames,name='Games'),
    path('GameCategories/<int:category_id>/',views.getGamesByCategory,name='GamesByCategory'),
    # path('UsersPost/',views.addUser,name='addUser')
    path('Games/<str:gameName>/',views.getGameByName,name='GameByName')
]