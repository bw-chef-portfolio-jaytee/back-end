# Chef Portfolio Back-end Documentation

Heroku App URL: 


## Endpoints
* Create User: POST [/api/user/register](#create-new-user)
* Login User: POST [/api/user/login](#login-user)
* Create Recipe: POST [/api/chef/recipes](#create-recipe)
* Update Entry: PUT [/entries/entry/{id}](#update-entry)
* Delete Entry: DELETE [/entries/entry/{id}](#delete-entry)
* Get All Entries: GET [/api/user/recipes](#get-all-recipes)
* Get Entry By ID: GET [/api/user/recipes/{id}](#get-recipe-by-id)

***

# Create New User

HTTP request: **POST** /api/user/register

Body

| name             | type   | required | description                                  | 
| ---------------- | ------ | -------- | -------------------------------------------- |
| username         | String | Yes      | Must be unique and between 2 - 30 characters |
| password         | String | Yes      | Must 4 or more characters                    |
| location         | String | no      | Must be unique and in email format           |
| email            | String | no      | Must be unique and in email format           |
| phone_number     | String | no      | Must be unique and in email format           |

Example
```java
{
	"username": "msmaitran",
	"password": "PASSWORD",
	"primaryemail": "msmaitran@lambdaschool.local"
}
```

Response 201 Created
```java
{
    "access_token": "ec49f1e3-2d67-43fa-be15-9fbe70b36c58",
    "token_type": "bearer",
    "expires_in": 3599,
    "scope": "read trust write"
}
```

Response 400 Bad Request
```java
{
    "title": "Unexpected Resource",
    "status": 400,
    "detail": "msmaitran is already taken!",
    "timestamp": "18 Nov 2019 05:38:39:402 +0000",
    "developerMessage": "com.msmaitran.onelineaday.exceptions.ResourceFoundException",
    "errors": {}
}
```

[Back to top](#chef-portfolio-back-end-documentation)

# Login User

HTTP request: **POST** /login

Headers

| KEY | VALUE |
|-----|-------|
| Authorization | Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0 |
| Content-Type | application/x-www-form-urlencoded |

Body

| KEY | VALUE |
|-----|-------|
| grant_type | password |
| username | your username |
| password | your password |


This will grant an "access_token" in the JSON response. It will be required as a header Authorization: Bearer access_token_here for all other endpoints. Token will be valid for 1 hour.

Response 200 OK
```java
{
    "access_token": "023e11f9-2dd6-491d-8b29-9ee11b60d931",
    "token_type": "bearer",
    "expires_in": 1804,
    "scope": "read write trust"
}
```

Response 400 Bad Request
```java
{
    "error": "invalid_grant",
    "error_description": "Bad credentials"
}
```

[Back to top](#chef-portfolio-back-end-documentation)

# Create Entry

HTTP request: **POST** /entries/entry

Body

| name         | type   | required | description                                  | 
| ------------ | ------ | -------- | -------------------------------------------- |
| description  | String | Yes      | One line a day                               |
| entrydate    | String | Yes      | Enter date of entry                          |
| photoUrl     | String | No       | Optional - url link of photo                 |

Example
```java
{
	"description": "Testing",
	"entrydate": "2019-11-18"
}
```

Response 201 Created

[Back to top](#chef-portfolio-back-end-documentation)

# Update Entry

HTTP request: **PUT** /entries/entry/{entryid}

| name         | type   | required | description                                  | 
| ------------ | ------ | -------- | -------------------------------------------- |
| description  | String | Yes      | One line a day                               |
| entrydate    | String | Yes      | Enter date of entry                          |

Example
```java
{
	"description": "Testing Entry",
	"entrydate": "2019-11-18"
}
```

Response 200 OK

[Back to top](#one-line-a-day-back-end-documentation)

# Delete Entry

HTTP request: **DELETE** /entries/entry/{entryid}

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)

# Get All Entries

HTTP request: **GET** /entries/entries

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)

# Get Entry By ID

HTTP request: **GET** /entries/entry/{id}

Response 200 OK

[Back to top](#chef-portfolio-back-end-documentation)