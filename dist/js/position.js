function getPosition(e){var t=players.filter(function(t){var n=e.toUpperCase();return t.position.includes(n)}),n=document.getElementById(e+"-list"),o=n.getElementsByTagName("tbody");t.forEach(function(e){var t=document.createElement("tr");o[0].appendChild(t);for(var n in e)if("rank"==n||"name"==n||"team"==n||"bye"==n){var i=document.createElement("td");i.appendChild(document.createTextNode(e[n])),t.appendChild(i)}})}var request=new XMLHttpRequest;request.open("GET","../lib/ffc_2017_6_23.json",!1),request.send(null);var players=JSON.parse(request.responseText);getPosition("qb"),getPosition("rb"),getPosition("wr"),getPosition("te"),getPosition("def"),getPosition("k");