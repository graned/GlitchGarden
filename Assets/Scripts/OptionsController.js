#pragma strict
import UnityEngine.UI;

var volumeSlider : Slider;
var levelManager: LevelManagerJS;

private var musicManager: MusicManagerJS;

function Start () {
  musicManager = GameObject.FindObjectOfType("MusicManagerJS");
  Debug.Log(musicManager);
}

function Update () {

}
