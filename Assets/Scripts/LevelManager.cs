using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LevelManager : MonoBehaviour {
	public float loadNextNevelTimer; 

	void Start(){
		Invoke ("loadNextLevel", loadNextNevelTimer);
	}

	public void LoadLevel(string name){
		SceneManager.LoadScene (name);
	}
		
	public void QuitRequest(){
		Application.Quit ();
	}

	public void loadNextLevel(){
		SceneManager.LoadScene (SceneManager.GetActiveScene().buildIndex + 1);
	}

}
