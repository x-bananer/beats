let player;
const playerContainer = $('.player');

let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass('paused')) {
            playerContainer.removeClass("paused");
            player.pauseVideo();
        } else {
            playerContainer.addClass("paused");
            player.playVideo();
        }
    });
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {
        height: "405",
        width: "660",
        videoId: 'M7lc1UVf-VE',
        events: {
        //'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}

eventsInit();