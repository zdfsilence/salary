var db = require('../../iRobots/db.js')("127.0.0.1", "kongchun");
import Lagou from "./source/lagou/config.js";
import Jobui from "./source/jobui/config.js";

import Main from "./main.js";
import ViewData from "./viewData.js";
import Table from "./model/table.js";

const city = "苏州";
const kd = "前端";
const year = "2017.05"

var table = new Table({});
var main = new Main(db,table);
main.addConfig(new Jobui(1));
main.addConfig(new Lagou(1));
//main.start()
//
//main.list();
//main.pageToJob();
//main.info();
//main.groupCompany();
//main.compareCompany();
//main.position();
//main.loadGeo();
//main.fixedGeo();
//main.filterGeo();
//main.positionToJob();
//main.transform();

var view = new ViewData(db,table,year);
view.show();
//view.average();
//view.chart();
//view.tech();