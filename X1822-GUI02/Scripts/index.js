var inData = "";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        inData = JSON.parse(xhttp.response);

        console.log(ko);
        ko.applyBindings(new viewModel(inData));
    };
};
xhttp.open("GET", "http://localhost:8088/notes", true);
xhttp.send();

var viewModel = function (data) {
    this.notes = ko.observableArray(data);
    
}