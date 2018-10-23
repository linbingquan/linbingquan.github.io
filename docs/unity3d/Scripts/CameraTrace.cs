using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[ExecuteInEditMode] // 编辑中执行
public class CameraTrace : MonoBehaviour {

  public Transform Target; // player

  private Transform trans;

  public Vector3 dis = new Vector3(0, 2, -5);

  void Start () {
    trans = this.transform; // 摄像机transform
  }

  void Update () {
    trans.position = Target.position + dis; // 摄像机跟随
    trans.LookAt(Target); // 看向Target
  }
}