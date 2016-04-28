#pragma strict
import UnityEngine.UI;

var volumeSlider : Slider;
var difficultySlider : Slider;
var levelManager: LevelManagerJS;

private var musicManager: MusicManagerJS;

function Start () {
  musicManager = GameObject.FindObjectOfType(MusicManagerJS);
  volumeSlider.value = PlayerPrefsManager.GetMasterVolume();
  difficultySlider.value = PlayerPrefsManager.GetDifficulty();
}

function Update () {
  musicManager.ChangeVolume(volumeSlider.value);
}

function SaveAndExit(){
  PlayerPrefsManager.SetMasterVolume(volumeSlider.value);
  PlayerPrefsManager.SetDifficulty(difficultySlider.value);
  levelManager.LoadLevel("01a Start");
}

function SetDefaults(){
  volumeSlider.value = 0.8f;
  difficultySlider.value = 1;
}
