
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("fullName");
  var emailId=getCookie("emailId");
  var password=getCookie("password");
  if (user != "" && emailId != "" && password != "") {
   
  } else {
    
     if (user != "" && user != null) {
       setCookie("uname", user, 1);
       setCookie("pass", password, 1);
       setCookie("eid", emailId, 1);
     }
  }
  return 0;
}

function deleteCookie(cname){
    document.cookie = cname +"=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// alert(getCookie("fullName") + "" + getCookie("emailId") + "" + getCookie("password"));
                   
//                     deleteCookie("fullName");
//                     deleteCookie("password");
//                     deleteCookie("emailId");

//                     alert(getCookie("fullName") + "" + getCookie("emailId") + "" + getCookie("password"));