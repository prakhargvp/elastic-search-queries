# Searching

GET products/_doc/_search

# 1. Searching for a term

GET products/_doc/_search
{
  "query": {
    "term": {
      "is_active": true
    }
  }
}



GET products/_doc/_search 
{
  "query": {
    "term": {
      "is_active": {
        "value": true
      }
    }
  }
}


GET products/_doc/_search
{
  "query": {
    "terms": {
      "tags.keywords": [
        "Soup",
        "Cake"
      ]
    }
  }
}

# 2. Retrieving documents based on IDs

GET products/_doc/_search
{
  "query": {
    "ids": {
      "values": [1,2,3]
    }
  }
}

# 3. Matching documents with range values

GET products/_doc/_search
{
  "query": {
    "range": {
      "in_stock": {
        "gte": 1,
        "lte": 5
      }
    }
  }
}

GET products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "2010/01/01",
        "lte": "2010/12/31"
      }
    }
  }
}

GET products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "01-01-2010",
        "lte": "31-12-2010",
        "format": "dd-MM-yyyy"
      }
    }
  }
}

# 4. Working with relative dates - date maths

GET /products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "2010/01/01||-1y"
      }
    }
  }
}

GET /products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "2010/01/01||-1y-1d"
      }
    }
  }
}


GET /products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "2010/01/01||-1y/M"
      }
    }
  }
}

# /M - round by month

GET /products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "2010/01/01||/M-1y"
      }
    }
  }
}


GET /products/_doc/_search
{
  "query": {
    "range": {
      "created": {
        "gte": "now"
      }
    }
  }
}


# 5. Matching documents with non null values

GET products/_doc/_search
{
  "query": {
    "exists": {
      "field": "tags"
    }
  }
}

# 6. Matching based on prefixes

GET products/_doc/_search
{
  "query": {
    "prefix": {
      "tags.keyword": "Vege"
    }
  }
}

# 7. Searching with wildcards

GET products/_doc/_search
{
  "query": {
    "wildcard": {
      "tags.keyword": "Veg*ble"
    }
  }
}

# 8. Searching with regular expression

GET products/_doc/_search
{
  "query": {
    "regexp": {
      "tags.keyword": "Veget[a-zA-Z]+ble"
    }
  }
}
