function getCookie(cname) 
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

function setCookie(cname, cvalue, setTime) 
{
  var expires = "";
  if (setTime) {
    var d = new Date();
    d.setTime(d.getTime() + (30*24*3600*1000));
    expires = "expires="+d;
  };
  document.cookie = cname + "=" + cvalue + "; " + expires;
}