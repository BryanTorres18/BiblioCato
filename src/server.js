const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const CryptoJS = require('crypto-js');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'redes',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.post('/login', async (req, res) => {
    const { Fcode, password } = req.body;

    const secretKey = 'PUCHICANAS';
  
    try {
        const [rows] = await db.promise().query('SELECT * FROM usuario WHERE codUsuario = ?', [Fcode]);

        if (rows.length === 0) {
        return res.json({ success: false, message: 'Usuario no encontrado' });
        }

        const user = rows[0];

    const bytes = CryptoJS.AES.decrypt(password, secretKey);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    const isPasswordValid = decryptedPassword == user.contrasenia;

    if (isPasswordValid) {
      const userInfo = {
        codUsuario: user.codUsuario,
        correo: user.correo,  
        nombres: user.nombres,
        apellidoPat: user.apellidoPat,
        apellidoMat: user.apellidoMat,
        telefono: user.telefono,
        carrera: user.carrera
      };      
      res.json({ success: true, message: 'Inicio de sesión exitoso', user: userInfo });
    } else {
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
    } catch (error) {
        console.error('Error al realizar la autenticación:', error);
        res.status(500).send('Error de servidor');
        }
  });

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});