function saveToLocal() {
    var req1 = document.getElementById('req1').value;
    var req2 = document.getElementById('req2').value;
    var req3 = document.getElementById('req3').value;
    localStorage.setItem('req1', req1);
    localStorage.setItem('req2', req2);
    localStorage.setItem('req3', req3);
}

function requirements() {
    loadReqs();
}

function calendar() {
    var x = document.getElementById("calendar_hide");
    var y = document.getElementById('req_list');
    y.style.display = "none";
    if (x.style.display === "block") {
        x.style.display = "none";

    } else {
        x.style.display = "block";

    }
}


function toggler() {
    var x = document.getElementById("req_list");
    var y = document.getElementById("calendar_hide");
    y.style.display = "none"
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}

function loadReqs() {
    toggler();
    var origin = document.getElementById('req_list');
    var req1 = localStorage.getItem("req1");
    var req2 = localStorage.getItem("req2");
    var req3 = localStorage.getItem("req3");
    var reqs = [req1, req2, req3];
    origin.innerHTML = '';
    if (typeof reqs[0] === undefined) {
        var no_items = document.createElement(li);
        no_items.innerHTML = 'You have no requirements set';
        origin.appendChild(no_items);
    } else {
        for (var i = 0; i < reqs.length; i++) {
            if (reqs[i] !== '') {
                var list_item = document.createElement("li");
                list_item.classList.add('delete-list')
                list_item.innerHTML = reqs[i];
                origin.appendChild(list_item);

            } else {
                var item_empty = document.createElement("li");
                item_empty.innerHTML = '-';
                origin.appendChild(item_empty);
            }
        }
    }
}

function saveProject() {
    var title = document.getElementById('title').value;
    var due_date = document.getElementById('due_date').value
    localStorage.setItem('title', title);
    localStorage.setItem('due_date', due_date);
}

function addReferenceText() {
    var reference = window.getSelection().toString();
    localStorage.setItem('reference', reference);
}

function addReferenceUrl(){
        var url = document.getElementById('urlInput').value;
        localStorage.setItem('referenceUrl', url);
}


function loadProject() {
    var new_title = localStorage.getItem("title");
    var new_due = localStorage.getItem("due_date");
    var title = document.getElementById('title1');
    var due = document.getElementById('due_date1');
    title.innerHTML = (new_title);
    due.innerHTML = ('Due: ' + new_due);
}

function save() {
    var textbox = document.getElementById('textbox');
    localStorage.setItem('referenceText', textbox.value);

}

function saveas() {
alert(test);
}

function tools_hide() {
    var x = document.getElementById("tool_popup");
    if (x.style.display === "inline-flex") {
        x.style.display = "none";

    } else {
        x.style.display = "inline-flex";

    }
}

function referenceList() {
    var x = document.getElementById("reference-hide");
    if (x.style.display === "inline-flex") {
        x.style.display = "none";

    } else {
        x.style.display = "inline-flex";

    }
}

function referenceLoad(){
  var refUrl = localStorage.getItem("referenceUrl");
    var refText = localStorage.getItem("reference");
    var originUrl = document.getElementById('reference-url');
    var originText = document.getElementById('reference-text');

    originUrl.innerHTML = refUrl;
    originText.innerHTML = refText;
}

function plagurismList() {
    var x = document.getElementById("reference-hide");
    if (x.style.display === "inline-flex") {
        x.style.display = "none";

    } else {
        x.style.display = "inline-flex";

    }
}

function plagurismLoad(){
  var refUrl = localStorage.getItem("referenceUrl");
    var refText = localStorage.getItem("reference");
    var originUrl = document.getElementById('reference-url');
    var originText = document.getElementById('reference-text');

    originUrl.innerHTML = refUrl;
    originText.innerHTML = refText;
}

function recentProjects() {
  var title = localStorage.getItem('title');
  var recentProjects = document.getElementById('recent-project');
  if (title === null) {
    recentProjects.innerHTML = 'No recent projects have been saved';
  } else {
        recentProjects.innerHTML = title;
  }
  }

function summarize() {
        var reference = document.getElementById("textbox").value += "SUMMARIZED TEXT: 'Roger Sipher makes his case for getting rid of compulsory-attendance laws in primary and secondary schools with six arguments. These fall into three groups—first that education is for those who want to learn and by including those that don't want to learn, everyone suffers. Second, that grades would be reflective of effort and elementary school teachers wouldn't feel compelled to pass failing students. Third, that schools would both save money and save face with the elimination of compulsory-attendance laws.'";
}

function summarizedTexts() {
    var summary = document.getElementById('summary-text');
    summary.innerHTML = "SUMMARIZED TEXT: 'Roger Sipher makes his case for getting rid of compulsory-attendance laws in primary and secondary schools with six arguments. These fall into three groups—first that education is for those who want to learn and by including those that don't want to learn, everyone suffers. Second, that grades would be reflective of effort and elementary school teachers wouldn't feel compelled to pass failing students. Third, that schools would both save money and save face with the elimination of compulsory-attendance laws.'"
}

function openImage() {
    var elem = document.createElement("img");
    elem.setAttribute("src", "resources/img/camera.jpg");
document.getElementById("imageholder").appendChild(elem);
}

function scanFile(){
    var text = "The scan tool can scan written text and import it to the project area";
    localStorage.setItem("scan", text);
}

function retrieveScan(){
    var text = localStorage.getItem("scan");
        var summary = document.getElementById('summary-text');
    if (text === null) {
        alert("no scan found");
    } else {
         var reference = document.getElementById("textbox").value += text;
    }
}