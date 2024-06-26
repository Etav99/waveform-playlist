import { pixelsToSeconds } from "../../utils/conversions";
import PlaylistEvents from "../../PlaylistEvents";

export default class {
  constructor(track) {
    this.track = track;
  }

  setup(samplesPerPixel, sampleRate) {
    this.samplesPerPixel = samplesPerPixel;
    this.sampleRate = sampleRate;
  }

  click(e) {
    if(this.track.isLocked())
      return;

    const startX = e.offsetX;
    const time = pixelsToSeconds(startX, this.samplesPerPixel, this.sampleRate);

    if (time > this.track.getStartTime() && time < this.track.getEndTime()) {
      this.track.ee.emit(
        "fadein",
        time - this.track.getStartTime(),
        this.track
      );
    }
  }

  static getClass() {
    return ".state-fadein";
  }

  static getEvents() {
    return ["click"];
  }
}
