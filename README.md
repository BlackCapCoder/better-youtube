# Better YouTube
*Various changes to youtube to suit my personal preferances*

# DarkTube.css
This is a custom design for youtube that I have developed over the years.
I think it is a fork of this: https://userstyles.org/styles/117673/darktube

# youtube-thumb.js
This script does three things:

* Change the background on video pages to the video's thumbnail
* Hide videos and prevent videos from playing
* Open videos in vlc

I am playing videos in vlc because I prefer to watch videos at 2.5 times regular speed (you can comfortably listen to sped up speech with practice, and it is uncomfortable to go back once you do), and html5 videos has a silly CPU usage at anything higher than 2x.

If you don't like this it is trivial to remove.

# vlcyt.desktop
Place in `/usr/share/applications/` and run `gio mime x-scheme-handler/vlc vlcyt.desktop` to open `vlc://` links in vlc. You need to change the path of the script.

# vlcyt.sh
Simply removes the `vlc://` part of `vlc://http://youtube.com/watch?..` before passing the link to vlc.

![alt text](https://github.com/BlackCapCoder/better-youtube/raw/master/screenshots/imgur-2017_09_14-23:51:37.png)
Frontpage

![alt text](https://github.com/BlackCapCoder/better-youtube/raw/master/screenshots/imgur-2017_09_14-23:52:26.png)
Video page with video (I intentionally don't remove videos when opening a youtube link directly)

![alt text](https://github.com/BlackCapCoder/better-youtube/raw/master/screenshots/imgur-2017_09_14-23:53:20.png)
Video page with video removed (Happens when following a link)
