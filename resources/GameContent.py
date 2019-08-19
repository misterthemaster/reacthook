from flask import request
from flask_restful import Resource
from Model import db, GameContent, GameContentSchema

gameContents_schema = GameContentSchema(many=True)
gameContent_schema = GameContentSchema()

class GameContentRessource(Resource):

    def get(self):
        gamecontents = GameContent.query.all()
        gamecontents = gameContents_schema.dump(gamecontents).data
        return {'status': 'success', 'data': gamecontents}, 200

    def put(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = gameContent_schema.load(json_data)
        if errors:
            return errors, 422
        gameContent = GameContent.query.filter_by(id=data['id']).first()
        if not gameContent:
            return {'message': 'Player does not exist'}, 400
        gameContent.nbPoints = data['nbPoints']
        db.session.commit()

        result = gameContent_schema.dump(gameContent).data

        return { "status": 'success', 'data': result }, 200