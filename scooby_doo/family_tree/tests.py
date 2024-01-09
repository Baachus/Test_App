from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from family_tree.models import FamilyModel
from family_tree.forms import FamilyForm

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.login_url = reverse('family_tree:login')
        self.index_url = reverse('family_tree:index')
        self.register_url = reverse('family_tree:register')

    def test_logout_user(self):
        self.client.login(username='testuser', password='12345')
        response = self.client.get(reverse('family_tree:logout'))
        # Check that user is redirected to login page after logout
        self.assertRedirects(response, self.login_url)

    def test_index(self):
        self.client.login(username='testuser', password='12345')
        response = self.client.get(self.index_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'family_tree/pages/index.html')

    def test_register_user_POST(self):
        response = self.client.post(self.register_url, {
            'username': 'testuser2',
            'password1': 'testpass123',
            'password2': 'testpass123',
            'email': 'testuser2@example.com'
        })
        self.assertEqual(response.status_code, 302)  # Check for redirect
        self.assertRedirects(response, self.login_url)  # Check that redirect is to login page
        self.assertEqual(User.objects.count(), 2)  # Check that a new user was created