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

var database = firebase.database;

var trainName = "";
var destination = "";
var firstTrainTime = 0;
var frequency = 0;


