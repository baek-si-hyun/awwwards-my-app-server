const connection = require("../dbConfig.js");

const faqsCtrl = {
  getFaqs: async (req, res) => {
    connection.query("select * from faqs_table", (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
};

module.exports = faqsCtrl;