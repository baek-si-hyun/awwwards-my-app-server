import connection from '../dbConfig.js';

export const projectsCtrl = {
  getProjects: async (req, res) => {
    connection.query('SELECT * FROM projects_table', (error, rows) => {
      if (error) throw error;

      rows.forEach((row) => {
        row.projects_thumbnail = row.projects_thumbnail.toString('utf-8');
        row.projects_logo = row.projects_logo.toString('utf-8');
        const prev_img_arr = [];
        for (let i = 1; i <= 4; i++) {
          const prev_img = row[`projects_prev_img${i}`].toString('utf-8');
          prev_img_arr.push(prev_img);
        }
        row.projects_prev_img = prev_img_arr;
        delete row.projects_prev_img1;
        delete row.projects_prev_img2;
        delete row.projects_prev_img3;
        delete row.projects_prev_img4;
        row.projects_fonts = JSON.parse(row.projects_fonts);
        row.projects_colors = JSON.parse(row.projects_colors);
      });

      res.send(rows);
    });
  },
};

export default projectsCtrl;
