new_release:
	git checkout master
	git pull origin master
	echo "git tag -a v1.4 -m 'my version 1.4'"
	echo "git push origin v1.4"

deploy:
	git checkout master
	git pull origin master

setup:
	pip install -r requirements.txt

clean:
	git branch | grep -v "master" | xargs git branch -D

freeze:
	pip freeze > requirements.txt

migrations:
	python manage.py makemigrations

migrate:
	python manage.py migrate

superuser:
	python manage.py createsuperuser

run:
	python manage.py runserver

shell:
	python manage.py shell

loaddata:
	python manage.py loaddata leads

dev:
	npm run dev

cypress-test:
	npm run e2e

activate:
	../../ && source bin/activate && cd app/rest-react

flush:
	python ./manage.py flush --no-input
