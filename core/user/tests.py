from django.contrib.auth.hashers import check_password
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
# Create your tests here.

User = get_user_model()

class TestUser(TestCase):

    def test_create_new_user_password_must_be_hashed(self):
        password = "sanju97"
    
        User.objects.create_user(email="dhanusht51@gmail.com", password=password, first_name="name", last_name='name')

        user = User.objects.get(email="dhanusht51@gmail.com")
        print(user.password)
        print(check_password(password=password))
        self.assertEqual(user.password, check_password(password=password))


class TestUserAPI(APITestCase):

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

    def test_signup_with_same_email_raises_400_exception(self):
        first_name = "dummy_user"
        last_name = "dummy_name"
        password = "dummy_password"
        email = 'dummy@mail.com'

        url = reverse("signup")
        response = self.client.post(url, data={"first_name": first_name, "last_name": last_name, "email": email, "password": password}, format='json')
        self.assertEqual(response.status_code, HTTP_201_CREATED)

        response = self.client.post(url, data={"first_name": first_name, "last_name": last_name, "email": email, "password": password}, format='json')
        users = User.objects.all()
        self.assertEqual(response.status_code, HTTP_400_BAD_REQUEST)
        self.assertEqual(len(users), 1)


