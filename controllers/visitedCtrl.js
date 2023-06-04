import connection from "../dbConfig.js";

export const visitedCtrl = {
  getVisited: async (req, res) => {
    connection.query("select * from visited_table", (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
  setVisited: async (req, res) => {
    const receivedData = req.body;

    switch (receivedData.pathname) {
      case "/Netflix":
        connection.query(
          "update visited_table set visited_netflix_today = visited_netflix_today + 1, visited_netflix_total = visited_netflix_total + 1",
          (error, rows) => {
            if (error) throw error;
            console.log(error);
            res.send('성공')
          }
        );
        break;
      case "/Kanban":
        connection.query(
          "update visited_table set visited_kanban_today = visited_kanban_today + 1, visited_kanban_total = visited_kanban_total + 1",
          (error, rows) => {
            if (error) throw error;
            console.log(error);
            res.send('성공')
          }
        );
        break;
      case "/Coin":
        connection.query(
          "update visited_table set visited_coin_today = visited_coin_today + 1, visited_coin_total = visited_coin_total + 1",
          (error, rows) => {
            if (error) throw error;
            console.log(error);
            res.send('성공')
          }
        );
        break;
      case "/Myapp":
        connection.query(
          "update visited_table set visited_myapp_today = visited_myapp_today + 1, visited_myapp_total = visited_myapp_total + 1",
          (error, rows) => {
            if (error) throw error;
            console.log(error);
            res.send('성공')
          }
        );
        break;
      case "/Airbnb":
        connection.query(
          "update visited_table set visited_airbnb_today = visited_airbnb_today + 1, visited_airbnb_total = visited_airbnb_total + 1",
          (error, rows) => {
            if (error) throw error;
            console.log(error);
            res.send('성공')
          }
        );
        break;
    }
  },
};

export default visitedCtrl;
