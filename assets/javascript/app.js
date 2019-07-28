var firebaseConfig = {
    apiKey: "AIzaSyCyPQincaZWh0cn_4vpuc24vVUdRtaiLyk",
    authDomain: "train-times-6ec7b.firebaseapp.com",
    databaseURL: "https://train-times-6ec7b.firebaseio.com",
    projectId: "train-times-6ec7b",
    storageBucket: "",
    messagingSenderId: "550684271247",
    appId: "1:550684271247:web:6ad1cd19228da973"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();


$("#submit-button").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    });

    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");
    database.ref.on("child_added", function (snapshot) {
        snapshotValue = snapshot.val();
        var trainName = snapshot.val().trainName;
        var destination = snapshot.val().destination;
        var firstTrainTime = snapshot.val().firstTrainTime;
        var frequency = snapshot.val().frequency;
        var firstTrainTimeMilitary = moment.unix(firstTrainTime).format("HH:mm");
        var frequencyMinutes = moment.unix(frequency).format("m");
        var nextArrival = moment(firstTrainTimeMilitary).diff(moment(frequency, "X"), "HH:mm");
        var minutesAway = moment() - frequency;

        var tableRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(destination),
            $("<td>").text(firstTrainTimeMilitary),
            $("<td>").text(frequencyMinutes),
            $("<td>").text(nextArrival),
            $("<td>").text(minutesAway)
        );
        $("#train-table").append(tableRow);

    });

});
