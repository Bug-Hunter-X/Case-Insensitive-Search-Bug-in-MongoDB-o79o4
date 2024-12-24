```javascript
db.collection('users').createIndex( { name: 'text' } );

const query = { $text: { $search: "john" } }; 

// Find documents matching the query
db.collection('users').find(query).toArray((err, docs) => {
  if (err) throw err;
  console.log(docs);
});
```