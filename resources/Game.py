from flask import request
from flask_restful import Resource
from Model import db, Game, GameSchema

games_schema = GameSchema(many=True)
game_schema = GameSchema()

class GameRessource(Resource):

    def get(self):
        games = Game.query.all()
        games = games_schema.dump(games).data
        return {'status': 'success', 'data': games}, 200