# Frontend

1. Le lien pour le repsitory frontend

https://github.com/BAHHAR/frontendMatious

# backend

## Setup

1. Go to project folder

> cd backend

2. Install Dependencies

> npm intall

3. Create .env with following content

````
DB_URL=

PORT=3000
SECRET=AAA
````
## Insèrer les données d'un fichier csv à travers une commande

2. Tapez cette commande en remplaçant ce chemin avec votre chemin d'un fichier csv (le nom du fichier ne doit pas contenir des espaces) 

> node ./src/util/CsvToMongo.js C:\Users\BAHHAR\Documents\data.csv


## Run

1. Start Server

> npm start

2. Open in url or using an Endpoint tester (postman)

> http://127.0.0.1:5000/

## Endpoints

1. Revenue brut ( Gross volume ) par catégorie ( Product Line )

> /ProductsLine

2. Nombre total des achats par type de client

> /TotalAchatParType

3. Moyenne de rating par sexe

> /MoyenneRatingParGender

4. Nombre des achats par ville et catégorie ( Product Line )

> /CityParTypeProduit

4. Miscellaneous pour afficher le nombre total des clients, pourcentage des femmes, pourcentage des hommes et la moyenne de rating

> /Miscellaneous