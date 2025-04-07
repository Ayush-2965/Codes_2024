console.log("welscome")

// variables declaration

let songindex = 1;

let audioElement = new Audio("song/1.mp3");//default audiosource
let songitemplay = Array.from(document.getElementsByClassName("songitemplay"));
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("progressbar");
const container = document.querySelector('.innercontent');
let songitems = Array.from(document.getElementsByClassName("songitems"));
const durations = [];
let bottomname = document.getElementById("bottomname");
let endtime = document.getElementById("endtime");
let starttime = document.getElementById("starttime");

// array with songname filepath cover
let songs = [
    { songname: "O Mere Dil Ke Chain - Mere Jeevan Saathi ", filePath: "song/1.mp3", cover: "image/song image/1.jpg" },
    { songname: "Main Pal Do Pal Ka Shair Hoon", filePath: "song/2.mp3", cover: "image/song image/2.jpg" },
    { songname: "Ye Dosti - Sholay", filePath: "song/3.mp3", cover: "image/song image/3.jpeg" },
    { songname: "Yaara-Teri-Yaari-Ko", filePath: "song/4.mp3", cover: "image/song image/4.jpeg" },
    { songname: " Mere-Sapno-Ki-Rani", filePath: "song/5.mp3", cover: "image/song image/5.jpeg" },
    { songname: " Zindagi-Ek-Safar-Hai-Suhana", filePath: "song/6.mp3", cover: "image/song image/6.jpeg" },
    { songname: "Aane-Se-Uske-Aaye-Bahar", filePath: "song/7.mp3", cover: "image/song image/7.jpeg" },
    { songname: "Ek-Pyar-Ka-Naghma-Hai", filePath: "song/8.mp3", cover: "image/song image/8.jpeg" },
    { songname: "Kya Hua Tera Vada ", filePath: "song/9.mp3", cover: "image/song image/9.jpeg" },
]

// songitems cover photo
songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
})

// songitems songname
songitems.forEach((element, i) => {

    element.getElementsByClassName("name")[0].textContent = songs[i].songname;
})

// songitem duration
songitems.forEach((element, i) => {

    const audiodur = () => {


        const dir = songs[i].filePath;
        const audio = new Audio(dir);


        // const duration = audio.duration;
        console.log(dir);
        audio.onloadeddata = function () {
            const minute = parseInt(audio.duration / 60);
            const second = parseInt(audio.duration - (minute * 60));
            console.log(minute);
            console.log(second);
            if (minute < 10 && second < 10) {
                element.getElementsByClassName("duration")[0].textContent = `0${minute}:0${second}`;
                // parseInt(audio.duration)
            }
            else if (minute >= 10 && second > 10) {
                element.getElementsByClassName("duration")[0].textContent = `${minute}:${second}`;
            }
            else {
                element.getElementsByClassName("duration")[0].textContent = `0${minute}:${second}`;
            }
        }



    }
    audiodur();

})


// make all songitems playbutton => pause
const makeallplay = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {

        element.classList.remove(`fa-circle-pause`);
        element.classList.add(`fa-circle-play`);
    }
    )
}

// time of progressbar
const timebar = () => {

    audioElement.onloadeddata = function () {
        const minute = parseInt(audioElement.duration / 60);
        const second = parseInt(audioElement.duration - (minute * 60));


        if (minute < 10 && second < 10) {
            endtime.textContent = `0${minute}:0${second}`;

        }
        else if (minute >= 10 && second > 10) {
            endtime.textContent = `${minute}:${second}`;
        }
        else {
            endtime.textContent = `0${minute}:${second}`;
        }

        audioElement.addEventListener(`timeupdate`, () => {
            if (audioElement.currentTime >= 60) {
                const currminute = parseInt(audioElement.currentTime / 60);
                const currsecond = parseInt(audioElement.currentTime - (currminute * 60));

                if (currminute < 10 && currsecond < 10) {
                    starttime.textContent = `0${currminute}:0${currsecond}`;

                }
                else if (currminute >= 10 && currsecond > 10) {
                    starttime.textContent = `${currminute}:${currsecond}`;
                }
                else {
                    starttime.textContent = `0${currminute}:${currsecond}`;
                }
            }
            else {
                const currsecond = parseInt(audioElement.currentTime);
                if (currsecond < 10) {
                    starttime.textContent = `00:0${currsecond}`;
                }
                else {
                    starttime.textContent = `00:${currsecond}`;
                }
            }



        })
    }

}

/* taking all songitemplays as array  and taking a click event
with targeting each element and make items play and pause with different 
audiosource*/
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {

    element.addEventListener("click", (e) => {
        makeallplay();
        // audioElement.currentTime = 0;

        songindex = parseInt(e.target.id);

        if (audioElement.paused || audioElement.currentTime <= 0) {

            bottomname.textContent = songs[songindex - 1].songname;

            container.setAttribute("style", "background-image: url('gif/bc5743245f004c7ea45cd8a71991c661.gif')");

            console.log("else pause")
            e.target.classList.remove(`fa-circle-play`);
            e.target.classList.add(`fa-circle-pause`);
            masterplay.classList.remove(`fa-circle-play`);
            masterplay.classList.add(`fa-circle-pause`);
            audioElement.src = `song/${songindex}.mp3`;
            console.log(audioElement);
            console.log(songindex);
            audioElement.currentTime = 0;
            audioElement.play();
            timebar();



        }




        else {
            container.setAttribute("style", "background-image: none")
            audioElement.currentTime = 0;
            console.log("ct>0 play")
            e.target.classList.remove(`fa-circle-pause`);
            e.target.classList.add(`fa-circle-play`);
            masterplay.classList.remove(`fa-circle-pause`);
            masterplay.classList.add(`fa-circle-play`);
            audioElement.pause();



        }


    })

})

// previous button
document.getElementById("previous").addEventListener(`click`, () => {
    if (songindex <= 1) {
        songindex = 9;
    } else {
        songindex -= 1;
    }
    bottomname.textContent = songs[songindex - 1].songname;
    audioElement.src = `song/${songindex}.mp3`;
    console.log(audioElement.src)
    container.setAttribute("style", "background-image: url('gif/bc5743245f004c7ea45cd8a71991c661.gif')");
    audioElement.currentTime = 0
    audioElement.play();
    masterplay.classList.remove(`fa-circle-play`);
    masterplay.classList.add(`fa-circle-pause`);
    timebar();
    console.log(songindex)
    makeallplay();
    document.getElementById(`${songindex}`).classList.remove(`fa-circle-play`);
    document.getElementById(`${songindex}`).classList.add(`fa-circle-pause`);

})

// next button
document.getElementById("next").addEventListener(`click`, () => {
    if (songindex >= 9) {
        songindex = 1;
    } else {
        songindex += 1;
    }
    bottomname.textContent = songs[songindex - 1].songname;
    audioElement.src = `song/${songindex}.mp3`;
    container.setAttribute("style", "background-image: url('gif/bc5743245f004c7ea45cd8a71991c661.gif')");
    audioElement.currentTime = 0
    audioElement.play();
    console.log(audioElement.src)
    masterplay.classList.remove(`fa-circle-play`);
    masterplay.classList.add(`fa-circle-pause`);
    timebar();
    console.log(songindex)
    makeallplay();
    document.getElementById(`${songindex}`).classList.remove(`fa-circle-play`);
    document.getElementById(`${songindex}`).classList.add(`fa-circle-pause`);
})

// bottom or main play button
masterplay.addEventListener(`click`, () => {

    console.log(audioElement.src)

    audioElement.addEventListener(`timeupdate`, () => {
        if (audioElement.currentTime >= 60) {
            const currminute = parseInt(audioElement.currentTime / 60);
            const currsecond = parseInt(audioElement.currentTime - (currminute * 60));

            if (currminute < 10 && currsecond < 10) {
                starttime.textContent = `0${currminute}:0${currsecond}`;

            }
            else if (currminute >= 10 && currsecond > 10) {
                starttime.textContent = `${currminute}:${currsecond}`;
            }
            else {
                starttime.textContent = `0${currminute}:${currsecond}`;
            }
        }
        else {
            const currsecond = parseInt(audioElement.currentTime);
            if (currsecond < 10) {
                starttime.textContent = `00:0${currsecond}`;
            }
            else {
                starttime.textContent = `00:${currsecond}`;
            }
        }



    })

    if (audioElement.paused || audioElement.currentTime <= 0) {
        container.setAttribute("style", "background-image: url('gif/bc5743245f004c7ea45cd8a71991c661.gif')");
        audioElement.play();
        masterplay.classList.remove(`fa-circle-play`);
        masterplay.classList.add(`fa-circle-pause`);

        document.getElementById(`${songindex}`).classList.remove(`fa-circle-play`);
        document.getElementById(`${songindex}`).classList.add(`fa-circle-pause`);

    }
    else {
        container.setAttribute("style", "background-image: none")
        audioElement.pause();
        masterplay.classList.remove(`fa-circle-pause`);
        masterplay.classList.add(`fa-circle-play`);
        makeallplay();
    }

})

// with timeupdate event updating progressbar value
audioElement.addEventListener(`timeupdate`, () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    progressbar.value = progress;

    if (progressbar.value == 100) {
        audioElement.pause();
        masterplay.classList.remove(`fa-circle-pause`);
        masterplay.classList.add(`fa-circle-play`);
        makeallplay();
    }
})

// change progressbar value 
progressbar.addEventListener(`change`, () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})
