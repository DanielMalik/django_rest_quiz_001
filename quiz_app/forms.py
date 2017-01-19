from django import forms



class EditPlayerUser(forms.Form):
    username = forms.CharField(max_length=128, label="Username")
    password1 = forms.CharField(widget=forms.PasswordInput, label="Password")
    password2 = forms.CharField(widget=forms.PasswordInput, label="Repeat password")
    f_name = forms.CharField(max_length=128, label="Name", required=False)
    l_name = forms.CharField(max_length=128, label="Surname", required=False)
    e_mail = forms.EmailField(label="e-mail", required=False)
    photo = forms.ImageField(required=False)
    came_from = forms.CharField(max_length=128, required=False)
    occupation = forms.CharField(max_length=128, required=False)
    interested = forms.CharField(max_length=128, required=False)


class PlayerLogin(forms.Form):
    login = forms.CharField(max_length=128)
    password = forms.CharField(widget=forms.PasswordInput)

