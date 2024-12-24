```javascript
const query = { name: /John/i }; // Case-insensitive search

// Find documents matching the query
db.collection('users').find(query).toArray((err, docs) => {
  if (err) throw err;
  console.log(docs);
});
```