function myMusic(image,songName,songFile,songInfo) {
	this.image = image
	this.songName = songName
	this.songFile = songFile
	this.songInfo = songInfo
}

var tryToRemember = new myMusic("img/try.jpg","Try to remember", "music/try.mp3","This is a song I wrote about trying to remember things in my past, and realizing that I'm forgetting a lot it. It's then about accepting that fact, and moving on.")

var iStill = new myMusic("img/still.jpg","I still", "music/still.mp3","This song is about suffereing, loving someone, and pretending to be okay.")

var welcomeHome = new myMusic("img/entrnace.jpg","Welcome home", "music/welcome.wav", "This is the opening track to the album that I'm currently writing. It's about returning to a state of mind.")

var alone = new myMusic("img/IMG_7319.JPG","Alone on the shore", "music/AloneOnTheShore.mp3", "I wrote this track next to a beach. It's about standing alone infront of a void. Also inspired by Kafka on the Shore.")

var everything = new myMusic("img/IMG_8432.JPG", "Everything we've done", "music/Everything.wav", "This song was written for an assignment. It might make it onto the album after some revision.")

var unpleasant = new myMusic("img/IMG_7283.JPG", "An unpleasant memory", "music/unpleasant.wav", "This is a work in progress. It's a journey through an unpleasant memory.")


var songs = [welcomeHome,iStill,tryToRemember,alone, everything, unpleasant]

// this is going to add all the info into the page
for (var i = 0; i < songs.length; i++) {
	var newDiv = document.createElement("div")
	newDiv.className = "songBox"
	var newImg = document.createElement("img")
	var newH1 = document.createElement("h1")
	// to make the audio player, I first have to create the audio tag, then a source tag.
	//Then below, I'll set source.src 
	var newAudio = document.createElement("audio")
	var newSource = document.createElement("source")

	var downloadButton = document.createElement("button")
	downloadButton.className = "downloadButton"
	downloadButton.textContent = "Download"
	
	////////////////////////////////////////
	var infoButton = document.createElement("button")
	infoButton.className = "infoButton"
	infoButton.textContent = "About"
	infoButton.setAttribute("type","button")
	infoButton.setAttribute("data-toggle","popover")

	infoButton.setAttribute("data-content", songs[i].songInfo)
	infoButton.setAttribute("data-placement","top")


	//img src and class name
	newImg.src = songs[i].image
	newImg.className = "img-responsive"

	//audio player

	newSource.src = songs[i].songFile
	newSource.type = "audio/mpeg"
	//since controls doesn't have another value, I just set controls, and leave the second blank.
	newAudio.setAttribute('controls', '')
	newAudio.appendChild(newSource)

	var songH1 = document.createTextNode(songs[i].songName)

	newH1.appendChild(songH1)

	newDiv.appendChild(newImg)
	newDiv.appendChild(newH1)
	newDiv.appendChild(newAudio)
	newDiv.appendChild(downloadButton)
	newDiv.appendChild(infoButton)



	document.getElementById("insert").appendChild(newDiv)

}


$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});

