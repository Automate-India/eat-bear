from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework.status import HTTP_201_CREATED
# Create your tests here.

class TestUser(APITestCase):

    def test_user_signup(self):
        first_name = "dummy_user"
        last_name = "dummy_name"
        password = "dummy_password"
        email = 'dummy@mail.com'

        url = reverse("signup")
        response = self.client.post(url, data={"first_name": first_name, "last_name": last_name, "email": email, "password": password}, format='json')
        self.assertEqual(response.status_code, HTTP_201_CREATED)
