#pragma strict

var musicVolume: float;
var levelMusicArray: AudioClip[];


// Make the variable audioSource not show up in the inspector
// but be serialized.
@HideInInspector
var audioSource: AudioSource;


function Awake () {
	DontDestroyOnLoad (gameObject);
}

function Start(){
	audioSource = GetComponent("AudioSource");
}

function OnLevelWasLoaded(level: int){
	var musicLevel = levelMusicArray [level];
	if (musicLevel) {
		audioSource.clip = musicLevel;
		audioSource.loop = true;
		audioSource.Play ();
	}
}

// Update is called once per frame
function Update () {


}
