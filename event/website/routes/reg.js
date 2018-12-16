
		//验证命名
		var isUname=false;
		var isPwd=false;
	//验证用户名
		function checkUname(){
			var xhr=createXhr();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					var res=xhr.responseText;
					if(res=='1'){
						$('showUname').innerHTML='可以注册'
						isUname=true;
					}else if(res=='0'){
						$('showUname').innerHTML='用户名被占用'
					}else{
						$('showUname').innerHTML='用户名为空'
					}
				}
			}
			var uname=$('uname').value;
			xhr.open('post','/user/checkUname',true);
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			var formdata='uname='+uname;
			xhr.send(formdata);
		}

		//验证密码

		function checkPwd(){
			var upwd=$('upwd').value;
			var cpwd=$('cpwd').value;
			if(upwd=='' || cpwd==''){
				 $('showPwd').innerHTML='密码不能为空'
				}else if(upwd==cpwd){
				$('showPwd').innerHTML='两次密码一致'
				isPwd=true
			}else{
				$('showPwd').innerHTML='两次密码不一致'
			}
			}

		//注册
		function register(){
			if(isUname==true && isPwd==true){
			 var xhr=createXhr();
			 xhr.onreadystatechange=function(){
				 if(xhr.readyState==4&&xhr.status==200){
					 var res=xhr.responseText;
					 alert(res);
				 }
			 }
			 xhr.open('post','/user/register',true);
			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			 var uname=$('uname').value;
			 var upwd=$('upwd').value;
			 var formdata='uname='+uname+'&upwd='+upwd;
			 xhr.send(formdata);
			 console.log(formdata)
			}
		}