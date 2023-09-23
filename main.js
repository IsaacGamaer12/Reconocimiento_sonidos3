function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EUsM--hxB/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML = 'Escucho: ' + results [0].label;
        document.getElementById("result_confidence").innerHTML = 'Precision: ' + (results [0].confidence * 100).toFixed(2) + "%";

        img = document.getElementById('gato');
        img1 = document.getElementById('perro');
        img2 = document.getElementById('pollo');

        if(results[0].label == "Bolsa")
        {
            img.src = 'gato.gif';
            img1.src = 'perro.png';
            img2.src = 'pollo.png';
        }
        else if(results[0].label == "Ruido de fondo")
        {
            img.src = 'gato.png';
            img1.src = 'perro.gif';
            img2.src = 'pollo.png';
        }
        else if(results[0].label == "Sonido Pluma")
        {
            img.src = 'gato.png';
            img1.src = 'perro.png';
            img2.src = 'pollo.gif';
        }

    }
}