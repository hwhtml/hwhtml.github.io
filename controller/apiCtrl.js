var apiConfig = require('./apiConfig');
var PgOpr = require('../db/dbOpr');
var ApiCtrl = {
  Register : function (req,res) {
    if(!req.body || req.body == undefined){
      apiConfig.error(res,1005);
      return;
    }
    if(!req.body.user_name || req.body.user_name == ''){
      apiConfig.error(res,1007);
      return;
    }
    if(!req.body.password || req.body.password == ''){
      apiConfig.error(res,1009);
      return;
    }

    var field = [];
    var values = [];
    for(var name in req.body){
      field.push(name);
      values.push("'" + req.body[name] + "'");
    }
    var sql = "INSERT INTO user_list (" + field.join(",") + ") VALUES (" + values.join(",") + ")";

    PgOpr(res,sql,'register');
  },
  Login : function (req, res) {

  },
  GetBannerWeb : function(req,res,next){
    var result = {
      code : 200,
      msg : '数据获取成功了',
      data : require('../public/json/banner.json')
    };
    res.send(result);
  },
  getPersonal : function(req,res,next){
    var sql = "SELECT * FROM articles where type = '1' ";
    PgOpr(res,sql);
  },
  getLastest : function(req,res,next){
    var result = {
      code : 200,
      msg : '数据获取成功',
      data : require('../public/json/lastest_release.json')
    };
    res.send(result);
  },
  getFriendshipLink : function(req,res,next){
    var result = {
      code : 200,
      msg : '数据获取成功',
      data :  require('../public/json/friendship_link.json')
    };
    res.send(result);
  },
  getTechnicalLabel : function(req,res,next){
    var result = {
      code : 200,
      msg : '数据获取成功',
      data : require('../public/json/technical_label.json')
    };
    res.send(result);
  },
  getHotArticles : function(req,res,next){
    var result = {
      code : 200,
      msg : '数据获取成功',
      data :  require('../public/json/hot_articles.json')
    };
    res.send(result);
  },
};

module.exports = ApiCtrl;