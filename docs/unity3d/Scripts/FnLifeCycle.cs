using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FnLifeCycle : MonoBehaviour {

	void Awake() 
	{
			Debug.Log("Awake----1");
	}
	void Main()
	{
			Debug.Log("Main---Main"); // 没有介绍
	}
	void OnEnable()
	{
			Debug.Log("OnEnable----2");
	}
	void Start()
	{
			Debug.Log("Start----3");
	}

	void FixedUpdate()
	{
			Debug.Log("FixedUpdate----4");
	}
	void Update ()
	{
			Debug.Log("Update----5");
	}
	void LateUpdate()
	{
			Debug.Log("LateUpdate----6");
	}
	
	void OnGUI() 
	{
			Debug.Log("OnGUI----7");
	}
	void OnDisable()
	{
			Debug.Log("OnDisable----8");
	}
	void OnDestroy() 
	{
			Debug.Log("OnDestroy----9");
	}
}
