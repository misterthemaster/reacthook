from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


ma = Marshmallow()
db = SQLAlchemy()

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)

    def __init__(self, name):
        self.name = name

class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(250), nullable=False)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id', ondelete='CASCADE'), nullable=False)
    category = db.relationship('Category', backref=db.backref('comments', lazy='dynamic' ))

    def __init__(self, comment, category_id,category):
        self.comment = comment
        self.category_id = category_id
        self.category = category

class PlayerPoint(db.Model):
    __tablename__ = 'PlayersPoints'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=False, nullable=False)
    image = db.Column(db.String(150), unique=False)
    nbPoints = db.Column(db.Integer)

    def __init__(self, name,nbPoints):
        self.name = name
        self.nbPoints = nbPoints




class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=False, nullable=False)
    image = db.Column(db.String(150), unique=False)

    def __init__(self, name):
        self.name = name

class Game(db.Model):
    __tablename__ = 'games'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(150), unique=False, nullable=False)
    creation_date = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __init__(self, description):
        self.description = description

class GameContent(db.Model):
    __tablename__ = 'gameContent'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    id_game = db.Column(db.Integer, db.ForeignKey('games.id', ondelete='CASCADE'), nullable=False)
    nbPoints = db.Column(db.Integer, primary_key=True)
    user = db.relationship('User', backref=db.backref('gameContent', lazy='dynamic' ))
    game = db.relationship('Game', backref=db.backref('gameContent', lazy='dynamic' ))

    def __init__(self, nbPoints):
        self.nbPoints = nbPoints


class CategorySchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)

class CommentSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    category_id = fields.Integer(required=True)
    comment = fields.String(required=True, validate=validate.Length(1))
    creation_date = fields.DateTime()

class PlayerPointSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String()
    nbPoints = fields.Integer(required=True)
    image = fields.String()

class CommentCategorySchema(ma.Schema):
    name = fields.String()
    comment = fields.String()

class GameContentSchema(ma.Schema):
    id = fields.Integer()
    nbPoints = fields.Integer(required=True)
