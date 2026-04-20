const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ DB connection (Docker service name: db)
const db = mysql.createConnection({
  host: 'db',
  user: 'contactuser',
  password: 'Password123',
  database: 'contactsdb'
});

// ✅ Retry connection until DB is ready
function connectDB() {
  db.connect((err) => {
    if (err) {
      console.log("Waiting for DB...");
      setTimeout(connectDB, 2000);
    } else {
      console.log("Connected to DB ✅");

      // ✅ Create table AFTER connection
      db.query(`
        CREATE TABLE IF NOT EXISTS contacts(
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          phone VARCHAR(20)
        )
      `, (err) => {
        if (err) console.log(err);
        else console.log("Table ready ✅");
      });
    }
  });
}

connectDB();

// ✅ GET all contacts
app.get('/contacts', (req, res) => {
  db.query("SELECT * FROM contacts", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// ✅ INSERT contact
app.post('/contacts', (req, res) => {
  const { name, phone } = req.body;

  db.query(
    "INSERT INTO contacts(name, phone) VALUES (?, ?)",
    [name, phone],
    (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send("Inserted");
      }
    }
  );
});

// ✅ DELETE contact
app.delete('/contacts/:id', (req, res) => {
  db.query(
    "DELETE FROM contacts WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send("Deleted");
      }
    }
  );
});

// ✅ Start server
app.listen(3000, () => console.log("Server running on port 3000 🚀"));
