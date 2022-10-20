## Create

# 1. How to create just an index without passing mappings and settings?
PUT products

# 2. How to create an index with explicit mappings?
PUT products
{
  "mappings": {
    "properties": {
      "name": { "type": "text" },
      "price": { "type": "integer" },
      "in_stock": { "type": "integer" }
    }
  }
}

# Refs:
# https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html#mappings
# https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-data-types.html

# 3.	How to create an index with explicit settings?
PUT products
{
  "settings": {
    "number_of_shards": 2,
    "number_of_replicas": 2
  }
}

# Refs:
# https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html#create-index-settings

# 4.	How to create an index with explicit mapping, settings and alias?
PUT products
{
  "mappings": {
    "properties": {
      "name": { "type": "text" },
      "price": { "type": "integer" },
      "in_stock": { "type": "integer" }
    }
  },
  "settings": {
    "number_of_shards": 2,
    "number_of_replicas": 2
  },
  "aliases": {
    "products_2022": {}
  }
}

# Note: First delete product index if it already exists

## Read

# 1.	How to view the index mappings alone?
GET products/_mapping

# 2.	How to view the index settings alone?
GET products/_settings

# 3.	How to view the index alias?
GET products/_alias

# 4.	How to view all index related details - mappings, settings and aliases?
GET products

# Refs:
# https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-get-settings.html

