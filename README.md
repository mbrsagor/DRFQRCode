# DRFQRCode

> Django rest framework QR code generated


### Setup::
The following steps will walk you thru installation on a Mac. I think, Linux should be similar. It's also possible to develop on a Windows machine, but I've not documented the steps. If you've developed django apps on Windows, you should have little problem getting up and running.

#### Dependencies:
 - Python 3.10
 - Psql 14.1
 
 

###### Step 1:
> Create database: Open your terminal and run the below commands.

```bash
psql postgres
CREATE DATABASE qrcode
CREATE USER dev WITH PASSWORD 'password';
ALTER ROLE dev SET client_encoding TO 'utf8';
ALTER ROLE dev SET default_transaction_isolation TO 'read committed';
ALTER ROLE dev SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE qrcode TO dev;
\q
```

###### Step 2:
> Clone project: Open your terminal and run the below commands.

```
https://github.com/mbrsagor/DRFQRCode.git
cd DRFQRCode
```

####### Step 3:
> Then copy code from the ``.sample_env`` and create new file `.env` then pasts

-------------------------------------------
```bash
|--> .sample_env
|--> .env
```

###### Step 4:
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

## Happy coding :wink:
