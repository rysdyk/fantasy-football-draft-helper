!function(){var t={init:function(){this.cacheDom(),this.setDrafted(),this.catchUp(),this.addClick(),this.setLocal()},cacheDom:function(){this.drafted=[],this.nodeRows=document.querySelector("tbody").childNodes,this.list=document.getElementById("drafted")},setDrafted:function(){localStorage.drafted?this.drafted=JSON.parse(localStorage.drafted):this.drafted=[]},catchUp:function(){var t=this.drafted,e=this.list;this.nodeRows.forEach(function(d){var n=d.childNodes[1].innerText;if(t.includes(n)){d.style.display="none";var i=document.createElement("li");i.appendChild(document.createTextNode(n)),e.appendChild(i)}})},addClick:function(){var t=this.drafted,e=this.showDrafted,d=this.setLocal,n=document.getElementById("undo-draft"),i=this.undoDraft;document.getElementById("clear-draft");this.nodeRows.forEach(function(n){n.addEventListener("click",function(){this.style.display="none",t.push(this.children[1].innerText),e(this),d()})}),n.addEventListener("click",function(t){i(t)})},showDrafted:function(t){var e=document.getElementById("drafted"),d=document.createElement("li");d.appendChild(document.createTextNode(t.children[1].innerText)),e.appendChild(d)},setLocal:function(){var e=t.drafted;"undefined"!=typeof Storage?localStorage.setItem("drafted",JSON.stringify(e)):console.log("Sorry, no local storage")},undoDraft:function(e){e.preventDefault();var d=t.drafted,n=t.list,i=t.nodeRows,o=t.setLocal,a=d.pop();n.removeChild(n.lastChild),i.forEach(function(t){var e=t.childNodes[1].innerText;a==e&&(t.style.display="")}),o()}};t.init()}();