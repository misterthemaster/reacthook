from flask import jsonify, request
from flask_restful import Resource
from Model import db, Comment, Category, CommentSchema, CommentCategorySchema

comments_schema = CommentSchema(many=True)
comment_schema = CommentSchema()

commentsCategory_Schema = CommentCategorySchema(many=True)

class CommentResource(Resource):

    def get(self):
        #comments = Comment.query.all()
        comments = db.session.query(Comment).join(Category).all()
        #comments = users.query.join(friendships, users.id==friendships.user_id).add_columns(users.userId, users.name, users.email, friends.userId, friendId).filter(users.id == friendships.friend_id).filter(friendships.user_id == userID).paginate(page, 1, False)
        comments = Comment.query.join(Category, Comment.category_id==Category.id).add_columns(Comment.comment, Category.name).all()


        comments = commentsCategory_Schema.dump(comments).data
        return {"status":"success", "data":comments}, 200
    
    #def get(self):
    #    comments = Comment.query.all()
    #    comments = comments_schema.dump(comments).data
    #    return {"status":"success", "data":comments}, 200

    