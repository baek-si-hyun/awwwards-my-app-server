const connection = require('../dbConfig.js');

const updateDB = async (today, total) => {
  connection.query(
    `update visited_table set ${today} = ${today} + 1, ${total} = ${total} + 1`,
    (error, rows) => {
      if (error) throw error;
      console.log(error);
    }
  );
};

const visitedCtrl = {
  getVisited: async (req, res) => {
    connection.query("select * from visited_table", (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
  setVisited: async (req, res) => {
    const receivedData = req.body;

    switch (receivedData.pathname) {
      case "/Awwwards":
        await updateDB("visited_awwwards_today", "visited_awwwards_total");
        break;
      case "/Netflix":
        await updateDB("visited_netflix_today", "visited_netflix_total");
        break;
      case "/Kanban":
        await updateDB("visited_kanban_today", "visited_kanban_total");
        break;
      case "/Coin":
        await updateDB("visited_coin_today", "visited_coin_total");
        break;
      case "/Myapp":
        await updateDB("visited_myapp_today", "visited_myapp_total");
        break;
      case "/Airbnb":
        await updateDB("visited_airbnb_today", "visited_airbnb_total");
        break;
      default:
        break;
    }
    res.send("update success");
  },
};

module.exports = visitedCtrl;




