'''This module is used to test the family_tree app.'''''
from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User

class TestViews(TestCase):
    '''This class is used to test the views in the family tree app.'''
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.login_url = reverse('family_tree:login')
        self.index_url = reverse('family_tree:index')
        self.register_url = reverse('family_tree:register')

    def test_logout_user(self):
        '''This method is used to test the logout_user view.'''
        self.client.login(username='testuser', password='12345')
        response = self.client.get(reverse('family_tree:logout'))
        # Check that user is redirected to login page after logout
        self.assertRedirects(response, self.login_url)

    def test_index(self):
        '''This method is used to test the index view.'''
        self.client.login(username='testuser', password='12345')
        response = self.client.get(self.index_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'family_tree/pages/index.html')

    def test_register_user_post(self):
        '''This method is used to test the register_user view.'''
        response = self.client.post(self.register_url, {
            'username': 'testuser2',
            'password1': 'test_pass123',
            'password2': 'test_pass123',
            'email': 'testuser2@example.com'
        })
        self.assertEqual(response.status_code, 302)  # Check for redirect
        self.assertRedirects(response, self.login_url)  # Check that redirect is to login page
        self.assertEqual(User.objects.count(), 2)  # Check that a new user was created
