const pool = require("./database/db");

class DbOperations {

  async getAllData() {
    const data = await pool.query("SELECT * FROM todo");

    return data.rows;
  }

  async getData(id) {
    const data = await pool.query("SELECT * FROM todo WHERE todo_id = ($1)",
      [req.params.id]
    );

    return data.rows;
  }

  async createData(data) {
    const newData = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [data]
    );

    return newData.rows[0];
  }

  async updateData(id, data) {
    const updatedData = await pool.query(
      "UPDATE todo SET description = ($1) WHERE todo_id = ($2)",
      [description, id]
    );

  }

	async deleteData(id) {
		const deletedData = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
      );

	}

}
