const pool = require("../Db/Db");

exports.createUserId = async (req, res) => {
  const { email, password, confirm_Password, modeO_f_Contact, phone } =
    req.body;

  pool.query(
    "INSERT INTO users ( email, password, confirm_password, mode_of_contact, phone) VALUES ($1, $2, $3, $4, $5 ) RETURNING *",
    [email, password, confirm_Password, modeO_f_Contact, phone],
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.status(200).json({
        msg: "Data created successfully",
        hello: "hellodharmik",
        data: result.rows[0],
      });
    }
  );
};

exports.getAllUser = async (req, res) => {
  pool.query("SELECT * FROM users", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

exports.getUserById = (req, res) => {
  let id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id=$1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows[0],
    });
  });
};

exports.updateUserById = (req, res) => {
  let id = parseInt(req.params.id);
  const { email, password, confirm_password, mode_of_contact, phone, skills } =
    req.body;
  console.log("id :>> ", id);
  // (email,password,confirm_password,mode_of_contact,phone,skills) VALUES ($1,$2,$3,$4,$5,$6)

  pool.query(
    "UPDATE users SET email =$1 ,password = $2, confirm_password = $3, mode_of_contact = $4 ,phone = $5, skills=$6 WHERE id=$7 RETURNING *",
    [email, password, confirm_password, mode_of_contact, phone, skills, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        data: result.rows[0],
      });
    }
  );
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM users WHERE id=$1", [id], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({
      msg: `users with ${id} Deleted successfuly`,
    });
  });
};
