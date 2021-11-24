https://teachablemachine.withgoogle.com/models/0E0x509-i/



function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0E0x509-i/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}