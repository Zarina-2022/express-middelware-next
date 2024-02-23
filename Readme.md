 # Difference between HTTP Server and Express

 1. Routing:
```bash
 http module => We can manage routes manually with req.url()
 express => We can manage routes with methods such as app.get, app.post etc.
```

2. Middelware:
```bash
http module => we need ourselves manually create middleware-like functionality.
express => It has an integrated middleware system and it is easier to add events such as logging, authentication etc. in the application.
```

3. Simple readability:
```bash
http module => provides lower level functionality, we have to write more code for a task  equivalent to Express.
express => generally considered shorter, clean and readable.
```

4. community and ecosystem:
```bash
http module => it has community support but is more limited than Express
express => it has a large and active community and a rich source of middleware extensions.
```