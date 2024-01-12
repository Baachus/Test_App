'''Login page functionality for the family tree application'''
import os
import json
from dotenv import load_dotenv

class Login():
    '''Login to family tree'''   
    def __init__(self, page):
        self.page = page

        # Get the current directory of the test file
        project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..'))

        # Construct the path to the .env folder
        self.env_folder_path = os.path.join(project_dir, '.env')
        # Construct the path to the .auth folder
        self.auth_folder_path = os.path.join(project_dir, '.auth')

        print(f'{self.env_folder_path}\.env.LOCAL')
        # load environment variables
        load_dotenv(f'{self.env_folder_path}\.env.LOCAL')

        # Login page elements
        self.login_header = self.page.get_by_role("heading", name="Login") # Check this
        self.username = self.page.get_by_placeholder("Username")
        self.password = self.page.get_by_placeholder("Password")
        self.login_button = self.page.get_by_role("button", name="Login")
        self.register_link = self.page.get_by_role("link", name="Register Here")


    def login(self, username=None, password=None):
        '''Log into the family tree application'''
        if(username is None and password is None):
            # Construct the path to your JSON file
            json_file_path = os.path.join(self.auth_folder_path, 'scooby_doo.json')

            # Read the JSON file
            with open(json_file_path, 'r') as file:
                data = json.load(file)

            username = data['BASIC_USERNAME']
            password = data['BASIC_PASSWORD']

        # Log into the family tree application
        self.page.goto(os.getenv('FAMILY_TREE_URL'))
        self.username.fill(username)
        self.password.fill(password)
        self.login_button.click()
