#pragma strict
import UnityEngine.UI;

public var fadeInTime: float;
private var fadePanel: Image;
private var currentColor : Color = Color.black;

function Start () {
  fadePanel = GameObject.FindObjectOfType(Image);
}

function Update () {
  if(Time.timeSinceLevelLoad < fadeInTime){
    var alphaChange: float = Time.deltaTime / fadeInTime;
    currentColor.a -= alphaChange;
    fadePanel.color = currentColor;
  }else{
    gameObject.SetActive(false);
  }
}
