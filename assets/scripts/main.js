// main.js

let volumeImage = document.getElementById("volume-image");

let volumeSlider = document.getElementById("volume-slider");

let volumeNumber = document.getElementById("volume-number");

let audio = document.getElementById("horn-sound");

let soundImage = document.getElementById("sound-image");

let radioAirHorn = document.getElementById("radio-air-horn");

let radioCar = document.getElementById("radio-car-horn");

let radioPartyHorn = document.getElementById("radio-party-horn");

let audioButton = document.getElementById("honk-btn");

volumeSlider.addEventListener("input", function() {setVolume(volumeSlider.value)});

volumeNumber.addEventListener("input", function() {setVolume(volumeNumber.value)});

radioAirHorn.addEventListener("click", function() {changeSound(radioAirHorn.id)});

radioCar.addEventListener("click", function() {changeSound(radioCar.id)});

radioPartyHorn.addEventListener("click", function() {changeSound(radioPartyHorn.id)});

audioButton.addEventListener("click", function(event) {event.preventDefault(); audio.play()});

function setVolume(volume) {

    if (volume > 66) {

        volumeImage.src = "./assets/media/icons/volume-level-3.svg";

        audioButton.disabled = false;

    } else if (volume > 33) {

        volumeImage.src = "./assets/media/icons/volume-level-2.svg";

        audioButton.disabled = false;

    } else if (volume > 0) {

        volumeImage.src = "./assets/media/icons/volume-level-1.svg";

        audioButton.disabled = false;

    } else {

        volumeImage.src = "./assets/media/icons/volume-level-0.svg";

        audioButton.disabled = true;
    }
    
    volumeSlider.value = volume;

    volumeNumber.value = volume;

    audio.volume = volume / 100;
}

function changeSound(sound) {

    if (sound == "radio-air-horn") {

        soundImage.src = "./assets/media/images/air-horn.svg";

        soundImage.alt = "Air Horn";

        audio.src = "./assets/media/audio/air-horn.mp3"

    } else if (sound == "radio-car-horn") {

        soundImage.src = "./assets/media/images/car.svg";

        soundImage.alt = "Car";

        audio.src = "./assets/media/audio/car-horn.mp3"

    } else if (sound == "radio-party-horn") {

        soundImage.src = "./assets/media/images/party-horn.svg";

        soundImage.alt = "Party Horn";

        audio.src = "./assets/media/audio/party-horn.mp3"
    }
}
