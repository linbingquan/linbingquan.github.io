using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallController : MonoBehaviour {

  private Rigidbody rigid; // 刚体

  private Vector3 dir; // 方向

  public float Force = 5f; // 方向力的大小

  public float Toruqe = 10f; // 扭力大小

  private bool brake; // 是否停止

  private int spin; // 旋转方向

  void Start () {
    rigid = this.GetComponent<Rigidbody> (); // 获取当前组件的刚体
  }

  void Update () {
    dir = new Vector3 (Input.GetAxis ("Horizontal"), 0, Input.GetAxis ("Vertical")); // 前进的方向
    brake = Input.GetKey (KeyCode.Space); // 按下空格键
    if (Input.GetKeyDown (KeyCode.Q)) { // 按Q键下方向旋转
      spin = -1;
    } else if (Input.GetKeyDown (KeyCode.E)) { // 按E键反方向旋转
      spin = 1;
    } else {
      spin = 0;
    }
  }

  void FixedUpdate () {
    if (!brake) {
      rigid.AddForce (dir * Force, ForceMode.Force); // 移动
      rigid.AddTorque (Vector3.up * spin * Toruqe); // Y轴扭力
    } else {
      rigid.velocity = Vector3.Lerp (rigid.velocity, new Vector3 (0, rigid.velocity.y, 0), 0.2f); // 停止
    }
  }
}