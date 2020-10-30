function createTrackItem(index, name, duration) {
  // create the variable track item by creating a div and set the Id, class and data index
  var trackItem = document.createElement("div");
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  // Takes the first item from the playlist container class and appends the created track item
  document.querySelector(".playlist-ctn").appendChild(trackItem);

  // create the variable play button item by creating a div and set the Id, class and data index
  var playBtnItem = document.createElement("div");
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  // append the play button to the track item by id from l5 
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  // create the image variable for the play button by creating an i tag, then assigning the play button image and dimensions
  var btnImg = document.createElement("i");
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-" + index);
  // append the play button image to the play button by id from l13
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  // create the track info variable
  var trackInfoItem = document.createElement("div");
  trackInfoItem.setAttribute("class", "playlist-info-track");
  // change the content of the <p> element into the name of the track
  trackInfoItem.innerHTML = name;
  // append the info to the track item from l5 by id
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  // create the track duration variable
  var trackDurationItem = document.createElement("div");
  trackDurationItem.setAttribute("class", "playlist-duration");
  // change the content of the <p> element into the duration of the track
  trackDurationItem.innerHTML = duration;
  // append the duration to the track item from l5 by id
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

// static list of the dictionaries of the song's - names, file link and duration
// stays upon referesh and selected to cover broad range of generic moods
var listAudio = [
  {
    name: "You Get the Blues by Lobo Loco",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/My_Yearnings/You_get_the_Blues_ID_1201.mp3",
    duration: "04:22"
  },
  {
    name: "Happy on the Meadow by KieLoKaz",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/KieLoKaz/Under_Stars/KieLoKaz_-_03_-_Happy_on_the_Meadow_ID_354.mp3",
    duration: "10:19"
  },
  {
    name: "Cue by SolarFlair",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Soularflair/CUES_for_film_TV_games_etc_SAD/Soularflair_-_11_-_Cue_1b_-_Sad-Beautiful-Emotive-Echo-Ghostly_guitar_-_more_Something_Broken_Somewhere-Ascendent_Remix.mp3",
    duration: "02:39"
  },
  {
    name: "Abandoned by Yung Kartz",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Yung_Kartz/July_2019/Yung_Kartz_-_04_-_Abandoned.mp3",
    duration: "03:50"
  },
  {
    name: "Upbeat Party by Scott Holmes",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_04_-_Upbeat_Party.mp3",
    duration: "02:24"
  },
  {
    name: "Gradual Sunrise by David Hillowitz",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/West_Cortez_Records/David_Hilowitz/Gradual_Sunrise/David_Hilowitz_-_Gradual_Sunrise.mp3",
    duration: "02:12"
  },
  {
    name: "Say Goodnight by Mild Wild",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Mild_Wild/a_Line_Spacing_b_Say_Goodnight/Mild_Wild_-_02_-_Say_Goodnight.mp3",
    duration: "02:34"
  },
  {
    name: "Dark Path by Cryosyncopy",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Cryosyncopy/Culmination_III_remastered_2019/Cryosyncopy_-_08_-_Dark_Path.mp3",
    duration: "05:34"
  },
  {
    name: "Misunderstood by Derek Clegg",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Derek_Clegg/Solar/Derek_Clegg_-_03_-_Misunderstood.mp3",
    duration: "02:54"
  },
  {
    name: "Destructing own Kingdom by XTaKeRuX",
    file:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Illusion/Destructing_Own_Kingdom.mp3",
    duration: "03:15"
  }
];

// loop to create the static list of dictionaries of song info into track items
for (var i = 0; i < listAudio.length; i++) {
  createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
// setting the initial 
var indexAudio = 0;

// loads current audio
function loadNewTrack(index) {
  // creates a variable for the player which selects the source audio
  var player = document.querySelector("#source-audio");
  // locates the location of the source for this track by looking through listAudio from l45
  player.src = listAudio[index].file;
  // the first title, i.e. the current playing displays the title associated with the list index
  document.querySelector(".title").innerHTML = listAudio[index].name;
  // match the current source to the audio and id
  this.currentAudio = document.getElementById("myAudio");
  // loads the source audio (via jQuery) into the loaded track vraiable
  this.currentAudio.load();
  // toggle audio fuction on ~l196 - to play and pause the track
  this.toggleAudio();
  // function on ~l295 to uodate the indexes of the list now that the song has played
  this.updateStylePlaylist(this.indexAudio, index);
  // the index of the item matches that of the list to keep in order
  this.indexAudio = index;
}

function playListListener() {
  var playListItems = document.querySelectorAll(".playlist-track-ctn");
  // prints the length of audio list in console
  console.log(`playListItems.length: ${playListItems.length}`);
  for (let i = 0; i < playListItems.length; i++) {
    // listens to clicks within the player container
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }
}
//calls function on l135
playListListener();

function getClickedElement(event) {
  var playListItems = document.querySelectorAll(".playlist-track-ctn");
  // will play through the whole list
  for (let i = 0; i < playListItems.length; i++) {
    if (playListItems[i] == event.target) {
      var clickedIndex = event.target.getAttribute("data-index");
      if (clickedIndex == this.indexAudio) {
        // alert('Same audio');
        // strart playing the first track if the top play button selected
        this.toggleAudio();
      } else {
        // otherwise load the selected audio for the clicked index
        loadNewTrack(clickedIndex);
      }
    }
  }
}

//event listener to make the form add a new song to the music player
// form is a constant
const form = document.getElementById("song-form");
// event listener for the form to take new song
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // capture form details
  const nameValue = document.getElementsByName("f_songname")[0].value;
  const lengthValue = document.getElementsByName("f_length")[0].value;
  const linkValue = document.getElementsByName("f_link")[0].value;
  const indexValue = listAudio.length;
  const songDictionary = {
    name: nameValue,
    file: linkValue,
    duration: lengthValue
  };
  // to add to our list of songs
  listAudio.push(songDictionary);
  // to create the track item
  createTrackItem(indexValue, nameValue, lengthValue);
  // set our new song from the form as a variable
  var playListItem = document.querySelectorAll(".playlist-track-ctn")[indexValue];
  // added event listener to the new song such that upon click - this event is binded
  playListItem.addEventListener("click", getClickedElement.bind(this));
});
//these elements are such that they work specifically for songs loaded outside of static list by the form
//source for current audio is the list audios file value
document.querySelector("#source-audio").src = listAudio[indexAudio].file;
// name displayed for current audio is the list audios name value
document.querySelector(".title").innerHTML = listAudio[indexAudio].name;
// current audio variable for current track
var currentAudio = document.getElementById("myAudio");
// loading said source of track
currentAudio.load();
//metadata of the song taken by taken the loaded element (i.e. the one entered in the form) to give length
currentAudio.onloadedmetadata = function () {
  document.getElementsByClassName("duration")[0].innerHTML = this.getMinutes(
    this.currentAudio.duration
  );
}.bind(this);
//this metadata is binded to everything else

var interval1;
// pause/play function using DOM .play() and .pause() assigning appropriate styles for icons
function toggleAudio() {
  if (this.currentAudio.paused) {
    document.querySelector("#icon-play").style.display = "none";
    document.querySelector("#icon-pause").style.display = "block";
    document
      .querySelector("#ptc-" + this.indexAudio)
      .classList.add("active-track");
    this.playToPause(this.indexAudio);
    this.currentAudio.play();
  } else {
    document.querySelector("#icon-play").style.display = "block";
    document.querySelector("#icon-pause").style.display = "none";
    this.pauseToPlay(this.indexAudio);
    this.currentAudio.pause();
  }
}
// pauses audio and clears the interval set in the variable l202
function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}
//getting the first timer class item in the html and setting that as the timer varaible
var timer = document.getElementsByClassName("timer")[0];

var barProgress = document.getElementById("myBar");

var width = 0;

function onTimeUpdate() {
  // variable of the current time // length of the current playing song
  var t = this.currentAudio.currentTime;
  // using function on l254 to have the html display the length of time song has been playing
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  // controls the play and pause images
  if (this.currentAudio.ended) {
    document.querySelector("#icon-play").style.display = "block";
    document.querySelector("#icon-pause").style.display = "none";
    // function on l319 for pause play images
    this.pauseToPlay(this.indexAudio);
    if (this.indexAudio < listAudio.length - 1) {
      // parseint takes string and returns interger
      var index = parseInt(this.indexAudio) + 1;
      // loads new track
      this.loadNewTrack(index);
    }
  }
}
// set bar progress by dividing the lengths of audio and formatting it
function setBarProgress() {
  var progress =
    (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
  document.getElementById("myBar").style.width = progress + "%";
}
// function to get the length of time a song has been playing in a 00:00 format
function getMinutes(t) {
  var min = parseInt(parseInt(t) / 60);
  var sec = parseInt(t % 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return min + ":" + sec;
}
// the division around the progress bar is listening for click
var progressbar = document.querySelector("#myProgress");
progressbar.addEventListener("click", seek.bind(this));
// upon click the bar will move to highlight the area of the bar which cahnges where in the song we are listening to
function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent * 100 + "%";
}
// add five seconds to the current length of played music
function forward() {
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5;
  this.setBarProgress();
}
// removes five seconds to the current length of played music
function rewind() {
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5;
  this.setBarProgress();
}

function next() {
  if (this.indexAudio < listAudio.length - 1) {
    // current audio set as the old index
    var oldIndex = this.indexAudio;
    // index becomes +1
    this.indexAudio++;
    // reorders track listing: l316
    updateStylePlaylist(oldIndex, this.indexAudio);
    // loads next track
    this.loadNewTrack(this.indexAudio);
  }
}

function previous() {
  if (this.indexAudio > 0) {
    // current index set as old index
    var oldIndex = this.indexAudio;
    // index becomes -1
    this.indexAudio--;
    //reorders track listings: l316
    updateStylePlaylist(oldIndex, this.indexAudio);
    // loads previous track
    this.loadNewTrack(this.indexAudio);
  }
}
// function for reordering the the track list
function updateStylePlaylist(oldIndex, newIndex) {
  document.querySelector("#ptc-" + oldIndex).classList.remove("active-track");
  // stops playing the completed song : l330
  this.pauseToPlay(oldIndex);
  // reassigns active track to the track with the newindex
  document.querySelector("#ptc-" + newIndex).classList.add("active-track");
  this.playToPause(newIndex);
}

function playToPause(index) {
  var ele = document.querySelector("#p-img-" + index);
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
  var ele = document.querySelector("#p-img-" + index);
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}
// muting the current track
function toggleMute() {
  var btnMute = document.querySelector("#toggleMute");
  var volUp = document.querySelector("#icon-vol-up");
  var volMute = document.querySelector("#icon-vol-mute");
  //whether the audio is muted then assigning the symbol of speaker as appropriate
  if (this.currentAudio.muted == false) {
    this.currentAudio.muted = true;
    volUp.style.display = "none";
    volMute.style.display = "block";
  } else {
    this.currentAudio.muted = false;
    volMute.style.display = "none";
    volUp.style.display = "block";
  }
}
