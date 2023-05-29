import connection from "../dbConfig.js";

 const faqsCtrl = {
  getFaqs: async (req, res) => {
    connection.query("select * from faqs_table", (error, rows) => {
      if (error) throw error;
      console.log(rows);
      res.send(rows);
    });
  },
};




export default faqsCtrl