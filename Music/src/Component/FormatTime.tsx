function FormatTime(secs: number) {
  return Math.floor(secs / 60) + ":" + ("0" + Math.floor(secs % 60)).slice(-2);
}

export default FormatTime;
