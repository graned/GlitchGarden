#pragma strict
import UnityEngine.SceneManagement;

var loadNextNevelTimer: float;

function Start () {
	if (loadNextNevelTimer != 0) {
		Invoke ("loadNextLevel", loadNextNevelTimer);
	}
}

function LoadLevel(name: String){
	SceneManager.LoadScene (name);
}

function QuitRequest(){
	Application.Quit ();
}

function loadNextLevel(){
	SceneManager.LoadScene (SceneManager.GetActiveScene().buildIndex + 1);
}

function Update(){

}
