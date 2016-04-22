#pragma strict

function Start () {
  print (PlayerPrefsManager.GetMasterVolume ());
  PlayerPrefsManager.SetMasterVolume(0.3f);
  print (PlayerPrefsManager.GetMasterVolume ());

  PlayerPrefsManager.UnlockLevel(1);
  print(PlayerPrefsManager.IsLevelUnlocked(2));

  print (PlayerPrefsManager.GetDifficulty ());
  PlayerPrefsManager.SetDifficulty(4);
  print (PlayerPrefsManager.GetDifficulty ());

}

function Update () {

}
