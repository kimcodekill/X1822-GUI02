var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //console.log(xhttp.response);
        //viewModel.notes.push() = JSON.parse(xhttp.response);
        var response = JSON.parse(xhttp.response);
        for (i = 0; i < JSON.parse(xhttp.response).length; i++) {
            db.notes.push(JSON.parse(xhttp.response)[i]);
            console.log(db.notes()[i])
        };
        showNote();
    };
};
xhttp.open("GET", "http://localhost:8088/notes", true);
xhttp.send();

var viewModel = function () {
    this.notes = ko.observableArray();

    this.note = {
        _id: ko.observable(''),
        title: ko.observable(''),
        text: ko.observable('')
    }
}

function showNote() {
    db.note = db.notes()[0];
}
var db = new viewModel();
ko.applyBindings(db);