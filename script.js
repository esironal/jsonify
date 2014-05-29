// Remember where's the root folder
var root = location.pathname;

// On load, and on hash change:
onload=onhashchange=function(){
  
  // Read the hash in the URL to find the current page
  // index by default, 404 if page not found, index if there's no 404 page
  var hash="";
  if(location.hash) hash += location.hash.slice(1);
  else hash += "index";
  if(!pages[hash]) hash = "404";
  if(!pages[hash]) hash = "index";
  var page = pages[hash];
  
  // Fill the page with the data in the JSON model
  document.title = document.getElementById("title").innerHTML = page["title"];
  document.getElementById("content").innerHTML = page["content"];
}