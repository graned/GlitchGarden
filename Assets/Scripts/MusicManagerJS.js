#pragma strict

var musicVolume: float;
var levelMusicArray: AudioClip[];


// Make the variable audioSource not show up in the inspector
// but be serialized.
private var audioSource: AudioSource;


function Awake () {
	DontDestroyOnLoad (gameObject);
}

function Start(){
	audioSource = GameObject.FindObjectOfType(AudioSource);
}

function OnLevelWasLoaded(level: int){
	var musicLevel = levelMusicArray [level];
	if (musicLevel) {
		audioSource.clip = musicLevel;
		audioSource.loop = true;
		audioSource.Play ();
	}
}

function ChangeVolume(volume: float){
	if(volume >= 0f && volume <= 1f){
    audioSource.volume = volume;
  } else {
    Debug.LogError("Master volume out of range");
  }
}

// Update is called once per frame
function Update () {

}
