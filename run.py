from flask import Flask, render_template

def create_app(config_filename):
    app = Flask(__name__,static_folder="frontend/build/static", template_folder="frontend/build")
    app.config.from_object(config_filename)
    
    from app import api_bp,index, images_folder
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(index)
    app.register_blueprint(images_folder)


    from Model import db
    db.init_app(app)

    return app


if __name__ == "__main__":
    app = create_app("config")
    app.run(debug=True)

    

    