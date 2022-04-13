import "./App.css";
import * as THREE from "three";
function App() {
  // シーンを追加
  const scene = new THREE.Scene();

  // カメラを追加
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // レンダラーを追加
  const renderer = new THREE.WebGLRenderer();

  // レンダラーのサイズを指定
  renderer.setSize(window.innerWidth, window.innerHeight);

  // レンダラーのdomElementをbodyに追加
  document.body.innerHTML = "";
  document.body.appendChild(renderer.domElement);

  // ジオメトリを追加
  const geometry = new THREE.BoxGeometry();

  // マテリアルを追加
  const material = new THREE.MeshBasicMaterial({
    color: "blue",
  });

  // カメラのポジションを変更
  camera.position.z = 5;

  // メッシュを追加
  const cube = new THREE.Mesh(geometry, material);

  // シーンにキューブを追加
  scene.add(cube);

  // アニメーション関数
  const animate = () => {
    requestAnimationFrame(animate);
    // cubeのx,y方向の動きを付ける
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  // アニメーション関数を実行
  animate();

  // 画面幅を変えたときにリサイズする
  window.addEventListener("resize", () => {
    // リサイズの度にレンダラーのサイズをセットする
    renderer.setSize(window.innerWidth, window.innerHeight);
    // カメラのアスペクトを更新
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  return null;
}

export default App;
