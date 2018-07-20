var config = {
    apiKey: "AIzaSyDprtXYU8FURAMd077Mm9azWtU_pbMWyI8",
    authDomain: "hw-7-1e441.firebaseapp.com",
    databaseURL: "https://hw-7-1e441.firebaseio.com",
    projectId: "hw-7-1e441",
    storageBucket: "hw-7-1e441.appspot.com",
    messagingSenderId: "575356524074"
};
firebase.initializeApp(config);

var db = firebase.database();
var trainName = '';
var destination = '';
var firstTrain = '';
var frequency = '';

$('#btn').on('click', function (event) {
    event.preventDefault();

    trainName =  $('#trainName').val().trim();
    destination = $('#destination').val().trim();
    firstTrain = $('#firstTrain').val().trim();
    frequency = $('#frequency').val().trim();
    var temp = moment(firstTrain, 'hh:mm A').subtract(1, 'years');
    var current = moment();
    var difference = current.diff(moment(temp), 'minutes');
    var minutesAway = frequency - (difference % frequency);
    var nextTrain = moment().add(minutesAway, 'minutes').format('hh:mm A');

    db.ref().push({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain,
        nextTrain: nextTrain,
        minutesAway: minutesAway
    });
});

db.ref().on('child_added', function (snap) {
    var dataSnap = snap.val();
    var tableRow = $('<tr>');
    var tbTrainName = $('<td>' + dataSnap.trainName + '</td>');
    var tbDestination = $('<td>' + dataSnap.destination + '</td>');
    var tbFrequency = $('<td>' + dataSnap.frequency + '</td>');
    var tbNextArrival = $('<td>' + dataSnap.firstTrain + '</td>');
    var tbMinutesAway = $('<td>' + dataSnap.firstTrain + '</td>');

    tbTrainName.text(dataSnap.trainName);
    tbDestination.text(dataSnap.destination);
    tbFrequency.text(dataSnap.frequency);
    tbNextArrival.text(dataSnap.nextTrain);
    tbMinutesAway.text(dataSnap.minutesAway);
    tableRow.append(tbTrainName, tbDestination, tbFrequency, tbNextArrival, tbMinutesAway);
    $('tbody').append(tableRow);
});

