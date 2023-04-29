from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework.status import HTTP_201_CREATED
# Create your tests here.

User = get_user_model()

class TestUser(APITestCase):

    def test_user_signup(self):
        first_name = "dummy_user"
        last_name = "dummy_name"
        password = "dummy_password"
        email = 'dummy@mail.com'

        url = reverse("signup")
        response = self.client.post(url, data={"first_name": first_name, "last_name": last_name, "email": email, "password": password}, format='json')
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        users = User.objects.all()
        self.assertEqual(len(users), 1)
        self.assertEqual(users[0].first_name, first_name)
        self.assertEqual(users[0].last_name, last_name)
        self.assertEqual(users[0].is_active, True)
        self.assertEqual(users[0].is_superuser, False)