function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync('http://localhost:5000/blogs', function(response){
  console.log(response);
  let json = JSON.parse(response);
  let blogs = json.blogs;


  let html = ''
  for(let i = 0; i < blogs.length; i++){
    console.log(blogs[i]);
    let element = "<a href='" + blogs[i].url + "'>" + blogs[i].title + "</a>";
    html += element;
  }

  let sfpcElement = document.getElementById('sfpc-marquee');
  element.innerHTML = sfpcElement;
});
