#pragma strict

static var MASTER_VOLUME_KEY : String = "master_volume";
static var DIFFICULTY_KEY : String = "diffculty";
static var LEVEL_KEY : String = "level_unlocked_";

static function SetMasterVolume (volume:float){
  if(volume > 0f && volume < 1f){
    PlayerPrefs.SetFloat(MASTER_VOLUME_KEY, volume);
  } else {
    Debug.LogError("Master volume out of range");
  }
}

static function GetMasterVolume(){
  return PlayerPrefs.GetFloat(MASTER_VOLUME_KEY);
}

static function UnlockLevel(level: int){
  if(level <= Application.levelCount - 1){
    PlayerPrefs.SetInt(LEVEL_KEY + level.ToString(), 1); //Using 1, as a TRUE boolean value, we cannot save boolean values in the PlayerPrefs
  } else {
    Debug.LogError("Level not found in Build order");
  }
}

static function IsLevelUnlocked(level: int){
  var levelKeyPref = LEVEL_KEY + level.ToString();
  if(level <= Application.levelCount - 1) {
    return PlayerPrefs.GetInt(levelKeyPref) == 1 ? true : false;
  } else {
    Debug.LogError("Level not found in Build order");
    return false;
  }
}

static function SetDifficulty(difficulty: int){
  if(difficulty > 0f && difficulty < 5f){
    PlayerPrefs.SetInt(DIFFICULTY_KEY, difficulty);
  } else {
    Debug.LogError("Difficulty level out of range");
  }
}

static function GetDifficulty(){
  return PlayerPrefs.GetInt(DIFFICULTY_KEY);
}
