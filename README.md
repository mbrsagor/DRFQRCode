# DRFQRCode

> Django rest framework QR code generated


### Setup::
The following steps will walk you thru installation on a Mac. I think, Linux should be similar. It's also possible to develop on a Windows machine, but I've not documented the steps. If you've developed django apps on Windows, you should have little problem getting up and running.

#### Dependencies:
 - Python 3.10
 - Psql 14.1
 
 

###### Step 1:
> Clone project: Open your terminal and run the below commands.

```
https://github.com/mbrsagor/DRFQRCode.git
cd DRFQRCode
```

###### Step 2:
> Run the application in your local development server:

```bash
virtualenv venv --python=python3.10
source venv/bin/activate
pip install -r requirements.txt
./manage.py makemigrations
./manage.py migrate
./manage.py createsuperuser
./mangae.py runserver
```

###### Install QR code if newly want.
```bash
pip install qrcode 
```

```python
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

r.json().set('user:1', '$', {
    'name': 'Alice',
    'emails': ['alice@example.com', 'alice@work.com'],
    'address': {'city': 'NYC', 'zip': '10001'}
})

print(r.json().get('user:1', '$'))            # [{'name': 'Alice', 'emails': [...], 'address': {...}}]
print(r.json().get('user:1', '$.name'))       # ['Alice']
print(r.json().get('user:1', '$.emails[0]'))  # ['alice@example.com']
print(r.json().get('user:1', '$.address.zip'))# ['10001']
```

## Happy coding :wink:
