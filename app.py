from flask import Blueprint, render_template, abort
from flask_restful import Api
from resources.Hello import Hello
from resources.Category import CategoryResource
from resources.Comment import CommentResource
from resources.PlayerPoint import PlayerPointResource
from jinja2 import TemplateNotFound

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

# API Routes
api.add_resource(Hello, '/Hello')
api.add_resource(CategoryResource, '/Category')
api.add_resource(CommentResource, '/Comment')
api.add_resource(PlayerPointResource, '/PlayerPoint')

#Site Routes
images_folder = Blueprint('site', __name__, static_url_path='/images', static_folder='images')
index = Blueprint('index', __name__)

@index.route('/', defaults={'page': 'index'})
def show(page):
    try:
        return render_template('%s.html' % page)
    except TemplateNotFound:
        abort(404)
