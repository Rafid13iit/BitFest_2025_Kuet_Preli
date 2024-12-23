# API Documentation

## A. Ingredients Management

### Add Ingredients
* **Route**: `/ingredients`
* **Method**: `POST`
* **Sample Payload**:
```json
{
  "name": "Sugar",
  "quantity": 2,
  "unit": "kg"
}
```
* **Sample Response**:
```json
{
  "_id": "6766e3ed5d51cc153ccfff31",
  "name": "Sugar",
  "quantity": 2,
  "unit": "kg",
  "__v": 0
}
```

### Get All Ingredients
* **Route**: `/ingredients`
* **Method**: `GET`
* **Sample Response**:
```json
[
  {
    "_id": "6766e3ed5d51cc153ccfff31",
    "name": "Sugar",
    "quantity": 2,
    "unit": "kg",
    "__v": 0
  }
]
```

### Update an Ingredient
* **Route**: `/ingredients/<ingredient_id>`
* **Method**: `PUT`
* **Sample Payload**:
```json
{
  "quantity": 5
}
```
* **Sample Response**:
```json
{
  "_id": "<ingredient_id>",
  "name": "Sugar",
  "quantity": 5,
  "unit": "kg",
  "__v": 0
}
```

## B. Recipe Management

### Add a Recipe
* **Route**: `/recipes`
* **Method**: `POST`
* **Sample Payload**:
```json
{
  "name": "Sweet Cake",
  "ingredients": "Sugar, Flour, Milk",
  "cuisine": "Dessert",
  "taste": "Sweet",
  "prep_time": 60,
  "reviews": "Delicious and easy to make!"
}
```
* **Sample Response**:
```json
{
  "_id": "6766e3ed5d51cc153ccfff31",
  "name": "Sweet Cake",
  "ingredients": "Sugar, Flour, Milk",
  "cuisine": "Dessert",
  "taste": "Sweet",
  "prep_time": 60,
  "reviews": "Delicious and easy to make!",
  "__v": 0
}
```

### File Storage Note
Upon successful addition of a recipe, the recipe details will be saved to the `my_fav_recipes.txt` file.

## C. Chatbot Interaction

### Get Recipe Suggestions
* **Route**: `/chatbot`
* **Method**: `POST`
* **Sample Payload**:
```json
{
  "preference": "sweet"
}
```
* **Sample Response**:
```json
{
  "recipes": [
    {
      "name": "Sweet Cake",
      "ingredients": "Sugar, Flour, Milk",
      "cuisine": "Dessert",
      "taste": "Sweet",
      "prep_time": 60,
      "reviews": "Delicious and easy to make!"
    }
  ]
}
```
