### VideoPlayer Component Documentation
Overview
The VideoPlayer component is designed to facilitate the integration of video playback functionality within your React application. It utilizes the react-player library to provide seamless and customizable video playback.
## Installation
npm install react-player
## Usage
## Importing the Component
import VideoPlayer from './VideoPlayer';
Incorporating VideoPlayer in Component
<VideoPlayer />

## Props
The VideoPlayer component accepts the following props:
url (string, required): The URL or file path of the video to be played.
controls (boolean, optional, default: true): Enables or disables video playback controls.
loop (boolean, optional, default: true): Specifies whether the video should loop upon completion.
playIcon (boolean, optional): Displays a play icon on the video thumbnail.className (string, optional): Custom CSS class name to style the video player container.
light (string, optional): URL or file path of a thumbnail to be displayed before the video starts.
## Additional Information
Styling: You can customize the appearance of the video player by providing a custom CSS class name through the className prop.
Thumbnails: If you want to display a thumbnail before the video starts, use the light prop and provide the URL or file path of the thumbnail image.
Following are the props and callback props that can be used according to the requirements :


## Prop
# url
The url of a video or song to play
  ◦  Can be an array or MediaStream object
# playing
Set to true or false to pause or play the media
false
# loop
Set to true or false to loop the media
false
# controls
Set to true or false to display native player controls.
  ◦  For Vimeo videos, hiding controls must be enabled by the video owner.
false
# light
Set to true to show just the video thumbnail, which loads the full player on click
  ◦  Pass in an image URL to override the preview image
false
# volume
Set the volume of the player, between 0 and 1
  ◦  null uses default volume on all players #357
null
# muted
Mutes the player
  ◦  Only works if volume is set
false
# playbackRate
Set the playback rate of the player
  ◦  Only supported by YouTube, Wistia, and file paths
1
# width
Set the width of the player
640px
# height
Set the height of the player
360px
# style
Add inline styles to the root element
{}
# progressInterval
The time between onProgress callbacks, in milliseconds
1000
# playsinline
Applies the playsinline attribute where supported
false
# pip
Set to true or false to enable or disable picture-in-picture mode
  ◦  Only available when playing file URLs in certain browsers
false
# stopOnUnmount
If you are using pip you may want to use stopOnUnmount={false} to continue playing in picture-in-picture mode even after ReactPlayer unmounts
true
# fallback
Element or component to use as a fallback if you are using lazy loading
null
# wrapper
Element or component to use as the container element
div
# playIcon
Element or component to use as the play icon in light mode


## previewTabIndex
Set the tab index to be used on light mode
0
config
Override options for the various players, see config prop






## Callback props


Callback props take a function that gets fired on various player events:
Prop
Description
onReady
Called when media is loaded and ready to play. If playing is set to true, media will play immediately
onStart
Called when media starts playing
onPlay
Called when media starts or resumes playing after pausing or buffering
onProgress
Callback containing played and loaded progress as a fraction, and playedSeconds and loadedSeconds in seconds
  ◦  eg { played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }
onDuration
Callback containing duration of the media, in seconds
onPause
Called when media is paused
onBuffer
Called when media starts buffering
onBufferEnd
Called when media has finished buffering
  ◦  Works for files, YouTube and Facebook
onSeek
Called when media seeks with seconds parameter
onPlaybackRateChange
Called when playback rate of the player changed
  ◦  Only supported by YouTube, Vimeo (if enabled), Wistia, and file paths
onPlaybackQualityChange
Called when playback quality of the player changed
  ◦  Only supported by YouTube (if enabled)
onEnded
Called when media finishes playing
  ◦  Does not fire when loop is set to true
onError
Called when an error occurs whilst attempting to play media
onClickPreview
Called when user clicks the light mode preview
onEnablePIP
Called when picture-in-picture mode is enabled
onDisablePIP
Called when picture-in-picture mode is disabled







