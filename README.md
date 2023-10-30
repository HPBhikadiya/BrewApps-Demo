## Getting Started

First, Install npm packages:

```bash
npm install
# or
yarn install
```

then,

for Development

```bash
npm run watch
# or
yarn watch
```

for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

Open http://localhost:3010 with your browser to see the result.

# Book Create

Request

```
POST URL : /book
Accept application/json

*BODY*
{
    "title":(string)(required),
    "bookId":(string)(required)( must be unique),
    "author":(string)(required),
    "summary":(string)(required)(allow null and empty string),
}

```

Response

```
Error with status code *422* for Invalid Body or existing BookID.
Error with status code *500* for Hmm... Something went wrong. Please try again later.

```

```

Success with status code *200* for Successfully Book Created.
{
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 1",
    "bookId": "B00003",
    "author": "Author - 1",
    "summary": "Summary - 1",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T06:36:13.306Z"
}
```

# Book Update

Request

```
POST URL : /book
PARAMS : bookId ( of  MongoDB ( 653f4eddaec3afb78f32a15f))
Accept application/json

*BODY*
{
    "title":(string)(optional),
    "bookId":(string)(optional)( must be unique or it's own bookId),
    "author":(string)(optional),
    "summary":(string)(optional)(allow null and empty string),
}

```

Response

```
Error with status code *422* for Invalid Body or existing Book with same bookId.
Error with status code *500* for Hmm... Something went wrong. Please try again later.

```

```
Success with status code *200* for Successfully Book Updated.
{
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 2",
    "bookId": "B00003",
    "author": "Author - 2",
    "summary": "Summary - 2",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T08:34:13.306Z"
}
```

# Get Book List

Request

```
GET URL: /book

```

Response

```
Error with status code *500* for Something happened wrong try again after sometimes.
```

```
Success with status code *200* for Successfully Book List in array.
[
  {
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 2",
    "bookId": "B00003",
    "author": "Author - 2",
    "summary": "Summary - 2",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T08:34:13.306Z"
  },
  {
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 2",
    "bookId": "B00003",
    "author": "Author - 2",
    "summary": "Summary - 2",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T08:34:13.306Z"
  }
]

```

# Get Book By ID ( MognoDB \_id)

Request

```
GET URL : /book
PARAMS : bookId ( of  MongoDB ( 653f4eddaec3afb78f32a15f))
```

Response

```
Error with status code *422* for BookID or Book is not found.
Error with status code *500* for Hmm... Something went wrong. Please try again later.

```

```

Success with status code *200* for Successfully Book founded.
 {
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 2",
    "bookId": "B00003",
    "author": "Author - 2",
    "summary": "Summary - 2",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T08:34:13.306Z"
  },
```

# Get Book By ID ( MognoDB \_id)

Request

```
GET URL : /book
PARAMS : bookId ( of  MongoDB ( 653f4eddaec3afb78f32a15f))
```

Response

```
Error with status code *422* for BookID or Book is not found or book not found.
Error with status code *500* for Hmm... Something went wrong. Please try again later.

```

```

Success with status code *200* for Successfully Book founded.
 {
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 2",
    "bookId": "B00003",
    "author": "Author - 2",
    "summary": "Summary - 2",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T08:34:13.306Z"
  },
```

# Get Book By BookID ( "B00001")

Request

```
GET URL : /book/bookId
PARAMS : bookId (( B00003))
```

Response

```
Error with status code *422* for BookID or Book is not found or book not found.
Error with status code *500* for Hmm... Something went wrong. Please try again later.

```

```

Success with status code *200* for Successfully Book founded.
 {
    "_id": "653f4eddaec3afb78f32a15f",
    "title": "Book - 2",
    "bookId": "B00003",
    "author": "Author - 2",
    "summary": "Summary - 2",
    "createdAt": "2023-10-30T06:36:13.306Z",
    "updatedAt": "2023-10-30T08:34:13.306Z"
  },
```

# Delete Book By ID ( MognoDB \_id)

Request

```
GET URL : /book
PARAMS : bookId ( of  MongoDB ( 653f4eddaec3afb78f32a15f))
```

Response

```
Error with status code *422* for BookID or Book is not found or book not found.
Error with status code *500* for Hmm... Something went wrong. Please try again later.

```

```

Success with status code *200* for Successfully Book founded.
 {
    "message": "Book Deleted Successfully."
  },
```
