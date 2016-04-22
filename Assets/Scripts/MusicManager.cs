using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MusicManager : MonoBehaviour {
	public AudioClip[] levelMusicArray;
	public float musicVolume;
	private AudioSource audioSource;
	// Use this for initialization
	void Awake () {
		DontDestroyOnLoad (gameObject);
	}

	void Start(){
		audioSource = GetComponent<AudioSource> ();
	}

	void OnLevelWasLoaded(int level){
		AudioClip musicLevel = levelMusicArray [level];
		if (musicLevel) {
			audioSource.clip = musicLevel;
			audioSource.loop = true;
			audioSource.Play ();
		}
	}
	
	// Update is called once per frame
	void Update () {
		

	}
}
