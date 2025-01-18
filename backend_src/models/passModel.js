const db = require("./db2"); // Your database connection

const getPassByNumber = (passNumber) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM approved_applications WHERE pass_number = ?",
      [passNumber],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  getPassByNumber,
};
