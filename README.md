# Himart panel 
JO = Json Object

Number list in every section means a complete different API request.
### API:
* Login:

==> Send parametrs: 

username (String) / password (String)

<== Response:

user_id (String) / user name and last name (String) / token (String) / user role (String)

* Add new campaign:

// Add new campaign base on customer:

1- Get active cities & regions :

==> Send parametrs: Null

<== Response: JO of active cities and regions 

2- Send campaign to server:

==> Send parametrs: 

JO: 
``` 
{
  "name": "Test name",
  "purchase-time-number": 125,
  "minimum-invoice-amount": "125000",
  "discount-amount": 1200,
  "integration-status": true,
  "city": "Tehran",
  "region": "Poonak",
  "time-period": {
    "to": "1398/12/25",
    "from": "1398/12/25"
  }
}
```
<== Response: JO of success or errors

// Add new campaign base on product:

1- Get product name:

==> Send parametrs: Product id

<== Response: Product exact name

2- Get active cities & regions :

==> Send parametrs: Null

<== Response: JO of active cities and regions 

3- Send campaign to server:

==> Send parametrs: 

JO: 
``` 
{
  "name": "Test name",
  "purchase-limit": 125,
  "inventory": "125000",
  "discount-amount": 1200,
  "integration-status": true,
  "city": "Tehran",
  "region": "Poonak",
  "time-period": {
    "to": "1398/12/25",
    "from": "1398/12/25"
  }
}
```
<== Response: JO of success or errors

