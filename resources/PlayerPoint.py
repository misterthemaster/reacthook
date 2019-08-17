from flask import request
from flask_restful import Resource
from Model import db, PlayerPoint, PlayerPointSchema, GameContent, User, Game

playersPoints_schema = PlayerPointSchema(many=True)
playerPoint_schema = PlayerPointSchema()

class PlayerPointResource(Resource):
    def get(self):
        playersPoints = GameContent.query.join(User, GameContent.id_user==User.id).join(Game, GameContent.id_game==Game.id).add_columns(User.name,User.image, GameContent.id,GameContent.nbPoints).filter(GameContent.id_game == request.args.get('id_game')).all()

        playersPoints = playersPoints_schema.dump(playersPoints).data
        
        return {'status': 'success', 'data': playersPoints}, 200

    #-- !!!!!!!!!!!!!!!!!!
    #À DÉPLACER DANS SA PROPPRE CLASSE (Classe GameContentResource)
    def put(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = playerPoint_schema.load(json_data)
        if errors:
            return errors, 422
        playerPoint = PlayerPoint.query.filter_by(id=data['id']).first()
        if not playerPoint:
            return {'message': 'Player does not exist'}, 400
        playerPoint.nbPoints = data['nbPoints']
        db.session.commit()

        result = playerPoint_schema.dump(playerPoint).data

        return { "status": 'success', 'data': result }, 200