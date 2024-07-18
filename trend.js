function playSong() {
    const audioElement = document.getElementById('song-audio');
    const lyricsElement = document.getElementById('lyrics-line');
    const songSequence = [
        { time: 0, lyric: "She been my queen since we were sixteen" },
        { time: 2.5, lyric: "We want the same things," },
        { time: 1.5, lyric: "we dream the same dreams" },
        { time: 1.7, lyric: "Alright" },
        { time: 3, lyric: "Alright!" } // Add the line "Alright" with a 3-second delay
    ];

    // Start playing the audio
    audioElement.play();

    // Function to update lyrics based on song sequence
    function updateLyrics(index) {
        // Clear lyrics after the last line
        if (index >= songSequence.length) {
            setTimeout(() => {
                lyricsElement.textContent = "";
            }, 1000); // Clear after 1 second
            return;
        }

        // Update lyrics based on current index in sequence
        setTimeout(() => {
            lyricsElement.textContent = songSequence[index].lyric;
            updateLyrics(index + 1); // Recursively call to move to next lyric
        }, songSequence[index].time * 1000); // Multiply by 1000 to convert to milliseconds
    }

    // Start updating lyrics after a 2-second delay (2000 milliseconds)
    setTimeout(() => {
        updateLyrics(0); // Start from the beginning of song sequence
    }, 2000); // Delay of 2 seconds before starting to show lyrics

    // Show follower animation after a delay
    setTimeout(() => {
        showFollowersAnimation();
    }, 3000); // Delay in milliseconds for follower animation
}

function showFollowersAnimation() {
    const loverScene = document.querySelector('.lover-scene');
    loverScene.classList.add('show-followers');
}
