!function(){var e={init:function(){this.getPlayers(),this.renderPlayers()},getPlayers:function(){var e=new XMLHttpRequest;e.open("GET","lib/ffc_2017_6_23.json",!1),e.send(null),this.players=JSON.parse(e.responseText)},renderPlayers:function(){var t=["qb","rb","wr","te","k","def"];t.forEach(function(t){var n=e.players.filter(function(e){var n=t.toUpperCase();return e.position.includes(n)}),r=document.getElementById(t+"-list"),a=r.getElementsByTagName("tbody");n.forEach(function(e){var t=document.createElement("tr");a[0].appendChild(t);for(var n in e)if("rank"==n||"name"==n||"team"==n||"bye"==n){var r=document.createElement("td");r.appendChild(document.createTextNode(e[n])),t.appendChild(r)}})})}};e.init()}();