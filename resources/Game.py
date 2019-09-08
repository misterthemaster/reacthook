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

    
    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = game_schema.load(json_data)
        if errors:
            return errors, 422
        game = Game.query.filter_by(description=data['description']).first()
        if game:
            return {'message': 'Game already exists'}, 400
        game = Game(
            description=json_data['description']
            )

        db.session.add(game)
        db.session.commit()

        result = game_schema.dump(game).data

        return { "status": 'success', 'data': result }, 201