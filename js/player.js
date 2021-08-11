let player;
const playerDuration = document.querySelector('#player__duration');
const playerContainer = $('.player');

let eventsInit = () => {
    $(".player__playpause-icon").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass("paused")) {
            
            player.pauseVideo();
        } else {
            
            player.playVideo();
        }
    });

    playerDuration.addEventListener('click', e => {
        console.log(e.target.value)
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        $(".player__current").css({
            left: `${newButtonPositionPercent}%`
        });

        player.seekTo(e.target.value);
    });

    $(".player__play-icon").click(e => {
        player.playVideo();
    });
};

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();
    playerDuration.max = player.getDuration()
    if (typeof interval != "undefined") {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        playerDuration.value = completedSec;
        const completedPercent = (completedSec / durationSec) * 100;
        $(".player__current").css({
            left: `${completedPercent}%`
        });
    });
};

const onPlayerStateChange = event => {
    /*
    -1 (воспроизведение видео не начато)
    0 (воспроизведение видео завершено)
    1 (воспроизведение)
    2 (пауза)
    3 (буферизация)
    5 (фидео подают реплики)
    */
    
    switch (event.data) {
        case 1:
            playerContainer.addClass('active');
            playerContainer.addClass("paused");
            break;
        
        case 2: 
            playerContainer.removeClass('active');
            playerContainer.removeClass("paused");
            break;
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {
        height: "392",
        width: "100%",
        videoId: "gvYNxcZQ3B4",
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 1
        }
    });
};

eventsInit();
