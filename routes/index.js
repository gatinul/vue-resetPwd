const mysql = require('mysql')

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'gatinul16!',
  database:'userinfo'
})

// 身份验证
exports.main = function(req,res){
  console.log(req.body)
  var staffId = req.body.staffId,
      staffName = req.body.staffName,
      staffPhone = req.body.staffPhone,
      staffEmail = req.body.staffEmail;
  connection.query(`select * from userinfo where staff_id='${staffId}'`, function (error, results, fields) {
    // if (error) throw error;
    console.log('The solution is: ', results[0]);
    if(!results[0]){
      res.send('员工账号不存在或错误')
      return
    }else if(results[0].staff_name!=staffName){
      res.send('员工姓名不正确')
    }else if(results[0].staff_phone!=staffPhone){
      res.send('手机号不正确')
    }else if (results[0].staff_email!=staffEmail) {
      res.send('邮箱不正确')
    }else{
      res.send('success')
    }
  });
}

exports.code = function(req,res){
  var code = req.body.code
  console.log(code)
  if(code == '1234'){
    res.send('success')
  }else{
    res.send('短信验证码错误')
  }
}

// 重置密码插值
exports.reset = function(req,res){
  var pwd = req.body.pwd
  var staffId = req.body.staffId
  console.log(staffId)
  connection.query(`update userinfo set staff_pwd='${pwd}' where staff_id='${staffId}'`, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    var status = results.affectedRows
    if(status == 0){
      res.send('fail')
    }else{
      res.send('success')
    }
  });
}
