import EventEmitter from "eventemitter3";
import PlaylistEvents from "../../PlaylistEvents";

export const STATE_UNINITIALIZED = 0;
export const STATE_LOADING = 1;
export const STATE_DECODING = 2;
export const STATE_FINISHED = 3;

export default class {
  constructor(src, audioContext, ee = new EventEmitter()) {
    this.src = src;
    this.ac = audioContext;
    this.audioRequestState = STATE_UNINITIALIZED;
    this.ee = ee;
  }

  setStateChange(state) {
    this.audioRequestState = state;
    this.ee.emit(PlaylistEvents.AUDIO_REQUEST_STATE_CHANGE, this.audioRequestState, this.src);
  }

  fileProgress(e) {
    let percentComplete = 0;

    if (this.audioRequestState === STATE_UNINITIALIZED) {
      this.setStateChange(STATE_LOADING);
    }

    if (e.lengthComputable) {
      percentComplete = (e.loaded / e.total) * 100;
    }

    this.ee.emit(PlaylistEvents.LOAD_PROGRESS, percentComplete, this.src);
  }

  fileLoad(e) {
    const audioData = e.target.response || e.target.result;

    this.setStateChange(STATE_DECODING);

    return new Promise((resolve, reject) => {
      this.ac.decodeAudioData(
        audioData,
        (audioBuffer) => {
          this.audioBuffer = audioBuffer;
          this.setStateChange(STATE_FINISHED);

          resolve(audioBuffer);
        },
        (err) => {
          if (err === null) {
            // Safari issues with null error
            reject(Error("MediaDecodeAudioDataUnknownContentType"));
          } else {
            reject(err);
          }
        }
      );
    });
  }
}
