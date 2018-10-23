# Unity3D教程(Unity3D Tutorials)

下载链接
https://unity3d.com/cn/get-unity/download?ref=personal

说明文档
https://docs.unity3d.com/Manual/index.html

2017版本说明文档
https://docs.unity3d.com/2017.4/Documentation/Manual/index.html

---

### 项目结构(Project Structure)

```
Editor // 编辑器自定义脚本
Screens // 场景
Scripts // 脚本
Prefabs // 预设体
Textures // 贴图
Materials // 材质
```

<!-- ![Image from dependency](./.vuepress/public/images/Unity3D技栈.png) -->

### 脚本生命周期 (Script Lifecycle)
[脚本生命周期流程图-官方文档](https://docs.unity3d.com/Manual/ExecutionOrder.html)

生命周期函数：需要继承 MonoBehaviour 类才能使用。生命周期函数全部都是由系统定义好的，系统会自动调用，且调用顺序和我们在代码里面的书写顺序无关。

常用脚本作用说明
```csharp
public class ScriptLifecycleTest : MonoBehaviour {
  // Awake()：唤醒事件，游戏一开始运行就执行，只执行一次。
  void Awake() { Debug.Log("Awake----1"); }
  // OnEnable()：启用事件，只执行一次。当脚本组件被启用的时候执行一次。
  void OnEnable() { Debug.Log("OnEnable----2"); }
  // Start()：开始事件，执行一次。
  void Start() { Debug.Log("Start----3"); }
  // FixedUpdate()：固定更新事件，执行N次，0.02秒执行一次。所有物理组件相关的更新都在这个事件中处理。
  void FixedUpdate() { Debug.Log("FixedUpdate----4"); }
  // Update()：更新事件，执行N次，每帧执行一次。
  void Update () { Debug.Log("Update----5"); }
  // LateUpdate()：稍后更新事件，执行N次，在 Update() 事件执行完毕后再执行。
  void LateUpdate() { Debug.Log("LateUpdate----6"); }
  // OnGUI()：GUI渲染事件，执行N次，执行的次数是 Update() 事件的两倍。
  void OnGUI() { Debug.Log("OnGUI----7"); }
  // OnDisable()：禁用事件，执行一次。在 OnDestroy() 事件前执行。或者当该脚本组件被“禁用”后，也会触发该事件。
  void OnDisable() { Debug.Log("OnDisable----8"); }
  // OnDestroy()：销毁事件，执行一次。当脚本所挂载的游戏物体被销毁时执行。
  void OnDestroy() { Debug.Log("OnDestroy----9"); }
}
```

### 基础组件 Unity3D Transform

Transform 组件是 Unity3D 的重点之一，主要用于控制物体的旋转、移动、缩放。那么接下来我们将详细学习下 Transform 类所包含的成员变量和成员函数。
[CSDN原文](https://blog.csdn.net/u014086857/article/details/53091268)

一、成员变量

```
position：在世界空间坐标transform的位置。
localPosition：相对于父级的变换的位置。如果该变换没有父级，那么等同于Transform.position。
eulerAngles：世界坐标系中的旋转（欧拉角）。
localEulerAngles：相对于父级的变换旋转角度。
right：世界坐标系中的右方向。（世界空间坐标变换的红色轴。也就是x轴。）
up：世界坐标系中的上方向。（在世界空间坐标变换的绿色轴。也就是y轴。）
forward：世界坐标系中的前方向。（在世界空间坐标变换的蓝色轴。也就是z轴。）
rotation：世界坐标系中的旋转（四元数）。
localRotation：相对于父级的变换旋转角度。
localScale：相对于父级的缩放比例。
parent：父对象Transform组件。
worldToLocalMatrix：矩阵变换的点从世界坐标转为自身坐标（只读）。
localToWorldMatrix：矩阵变换的点从自身坐标转为世界坐标（只读）。
root：对象层级关系中的根对象的Transform组件。
childCount：子对象数量。
lossyScale：全局缩放比例（只读）。
```

二、成员函数：

1、LookAt 函数

```csharp
public void LookAt(Transform target)
public void LookAt(Vector3 worldPosition);
public void LookAt(Vector3 worldPosition, Vector3 worldUp = Vector3.up);
public void LookAt(Transform target, Vector3 worldUp = Vector3.up);
```
