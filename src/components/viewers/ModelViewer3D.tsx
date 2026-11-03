'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ModelViewer3DProps {
  modelType?: string;
  isWireframe?: boolean;
  isAutoRotating?: boolean;
  lightingMode?: 'spotlight' | 'ambient';
  zoomLevel?: number;
  dismantleFactor?: number; // 0 (assembled) to 1 (expanded antigravity state)
  className?: string;
  onHotspotClick?: (id: number) => void;
}

export default function ModelViewer3D({
  modelType = 'antigravity',
  isWireframe = false,
  isAutoRotating = true,
  lightingMode = 'spotlight',
  zoomLevel = 4.6,
  dismantleFactor = 0.5,
  className = "w-full h-full",
  onHotspotClick
}: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const floatingPartsRef = useRef<{ mesh: THREE.Object3D; basePos: THREE.Vector3; dir: THREE.Vector3; rotSpeed: number }[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const isAutoRotatingRef = useRef(isAutoRotating);
  const dismantleRef = useRef(dismantleFactor);

  isAutoRotatingRef.current = isAutoRotating;
  dismantleRef.current = dismantleFactor;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, zoomLevel);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Warm museum chiaroscuro lighting
    const ambientLight = new THREE.AmbientLight(0xfff5e0, lightingMode === 'spotlight' ? 0.9 : 1.3);
    scene.add(ambientLight);

    // Primary Antique Gold Key Spotlight (#D4AF37)
    const keyLight = new THREE.DirectionalLight(0xd4af37, 3.8);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    // Ancient Bronze Fill Light (#8C6D3B)
    const fillLight = new THREE.DirectionalLight(0x8c6d3b, 2.2);
    fillLight.position.set(-5, -2, 3);
    scene.add(fillLight);

    // Cyan/Amber Rim Glow
    const rimLight = new THREE.PointLight(0xf59e0b, 3.0, 15);
    rimLight.position.set(0, -3, -2);
    scene.add(rimLight);

    // Main Object Group
    const group = new THREE.Group();
    meshGroupRef.current = group;
    scene.add(group);

    floatingPartsRef.current = [];

    // Build Specific Model
    if (modelType === 'antigravity' || modelType === 'chronometer') {
      buildAntigravityChronometer(group, floatingPartsRef.current, isWireframe);
    } else {
      buildModelGeometry(group, modelType, isWireframe);
    }

    // Add Levitating Anti-Gravity Gold Dust / Particle Vortex
    const particles = createAntigravityParticles();
    particleSystemRef.current = particles;
    scene.add(particles);

    // Mouse / Touch Drag Orbit
    let isDragging = false;
    let prevPos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevPos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshGroupRef.current) return;
      const deltaX = e.clientX - prevPos.x;
      const deltaY = e.clientY - prevPos.y;
      meshGroupRef.current.rotation.y += deltaX * 0.007;
      meshGroupRef.current.rotation.x += deltaY * 0.007;
      prevPos = { x: e.clientX, y: e.clientY };
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => { isDragging = false; };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !meshGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevPos.x;
      const deltaY = e.touches[0].clientY - prevPos.y;
      meshGroupRef.current.rotation.y += deltaX * 0.007;
      meshGroupRef.current.rotation.x += deltaY * 0.007;
      prevPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Main rotation & levitation floating sine wave
      if (meshGroupRef.current) {
        if (isAutoRotatingRef.current) {
          meshGroupRef.current.rotation.y += 0.0035;
        }
        // Dramatic antigravity floating hover
        meshGroupRef.current.position.y = Math.sin(elapsed * 1.4) * 0.12;
        meshGroupRef.current.rotation.z = Math.sin(elapsed * 0.7) * 0.03;
      }

      // Animate floating dismantled parts in antigravity state
      const dismantle = dismantleRef.current;
      floatingPartsRef.current.forEach((part) => {
        // Expand outward along its radial direction
        part.mesh.position.x = part.basePos.x + part.dir.x * dismantle * 0.85;
        part.mesh.position.y = part.basePos.y + part.dir.y * dismantle * 0.85 + Math.sin(elapsed * 2 + part.basePos.z) * 0.03;
        part.mesh.position.z = part.basePos.z + part.dir.z * dismantle * 0.85;
        // Individual gear spin
        part.mesh.rotation.z += part.rotSpeed;
      });

      // Animate Anti-Gravity Swirling Particles
      if (particleSystemRef.current) {
        particleSystemRef.current.rotation.y = elapsed * 0.08;
        const positions = particleSystemRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += 0.004; // upward levitation drift
          if (positions[i] > 2.5) {
            positions[i] = -2.5; // cycle back below
          }
        }
        particleSystemRef.current.geometry.attributes.position.needsUpdate = true;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, [modelType, lightingMode]);

  // Update wireframe state on existing mesh
  useEffect(() => {
    if (meshGroupRef.current) {
      meshGroupRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
          if (mat && mat.wireframe !== undefined) {
            mat.wireframe = isWireframe;
          }
        }
      });
    }
  }, [isWireframe]);

  // Update zoom
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = zoomLevel;
    }
  }, [zoomLevel]);

  return <div ref={containerRef} className={className} />;
}

/**
 * Builds 'The Antigravity Chronometer (1881)' by Henry H. Beville
 * Features intricate concentric brass gears, gimbal armillary rings, ruby escapement,
 * and dismantled floating layers suspended in an antigravity energy state.
 */
function buildAntigravityChronometer(
  group: THREE.Group,
  floatingParts: { mesh: THREE.Object3D; basePos: THREE.Vector3; dir: THREE.Vector3; rotSpeed: number }[],
  wireframe: boolean
) {
  while (group.children.length > 0) {
    group.remove(group.children[0]);
  }

  // Antique Polished Gold (#D4AF37)
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.92,
    roughness: 0.18,
    wireframe: wireframe,
    side: THREE.DoubleSide,
  });

  // Ancient Bronze (#8C6D3B)
  const bronzeMat = new THREE.MeshStandardMaterial({
    color: 0x8c6d3b,
    metalness: 0.85,
    roughness: 0.35,
    wireframe: wireframe,
  });

  // Glowing Core Element (#F59E0B)
  const coreGlowMat = new THREE.MeshStandardMaterial({
    color: 0xffb703,
    emissive: 0xf59e0b,
    emissiveIntensity: 0.7,
    metalness: 0.4,
    roughness: 0.2,
  });

  // Glass Vacuum Enclosure (Levitating above)
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.05,
    roughness: 0.05,
    transmission: 0.92,
    transparent: true,
    opacity: 0.35,
    ior: 1.5,
  });

  // 1. Central Chronometer Core Sphere
  const coreSphere = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32), coreGlowMat);
  group.add(coreSphere);

  // 2. Base Pedestal Mount (Grounded/Static Anchor)
  const baseRing = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.04, 16, 64), bronzeMat);
  baseRing.rotation.x = Math.PI / 2;
  baseRing.position.y = -1.2;
  group.add(baseRing);

  // 3. Dismantled Floating Layer A: Main Brass Sun Gear (Dismantles downward)
  const mainGearGroup = new THREE.Group();
  const mainDisc = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.06, 48), goldMat);
  mainGearGroup.add(mainDisc);
  // Add 16 gear teeth
  for (let i = 0; i < 16; i++) {
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 0.22), goldMat);
    const angle = (i * Math.PI * 2) / 16;
    tooth.position.set(Math.cos(angle) * 1.2, 0, Math.sin(angle) * 1.2);
    tooth.rotation.y = -angle;
    mainGearGroup.add(tooth);
  }
  mainGearGroup.position.y = -0.45;
  group.add(mainGearGroup);
  floatingParts.push({
    mesh: mainGearGroup,
    basePos: new THREE.Vector3(0, -0.45, 0),
    dir: new THREE.Vector3(0, -0.6, 0), // moves down when dismantled
    rotSpeed: 0.008,
  });

  // 4. Dismantled Floating Layer B: Counter-Rotating Escape Gear (Dismantles upward)
  const escapeGearGroup = new THREE.Group();
  const escapeRing = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.05, 16, 36), goldMat);
  escapeRing.rotation.x = Math.PI / 2;
  escapeGearGroup.add(escapeRing);
  for (let i = 0; i < 12; i++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.75, 8), bronzeMat);
    const angle = (i * Math.PI * 2) / 12;
    spoke.rotation.z = Math.PI / 2;
    spoke.rotation.y = angle;
    escapeGearGroup.add(spoke);
  }
  escapeGearGroup.position.y = 0.45;
  group.add(escapeGearGroup);
  floatingParts.push({
    mesh: escapeGearGroup,
    basePos: new THREE.Vector3(0, 0.45, 0),
    dir: new THREE.Vector3(0, 0.65, 0), // moves up when dismantled
    rotSpeed: -0.012,
  });

  // 5. Dismantled Floating Layer C: Outer Antigravity Gimbal Ring (Tilts and expands outward)
  const outerGimbal = new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.035, 16, 80), goldMat);
  outerGimbal.rotation.x = Math.PI / 3;
  group.add(outerGimbal);
  floatingParts.push({
    mesh: outerGimbal,
    basePos: new THREE.Vector3(0, 0, 0),
    dir: new THREE.Vector3(0.5, 0.3, 0.4),
    rotSpeed: 0.004,
  });

  // 6. Dismantled Floating Layer D: Inner Antigravity Gimbal Ring (Perpendicular tilt)
  const innerGimbal = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.03, 16, 64), bronzeMat);
  innerGimbal.rotation.y = Math.PI / 4;
  innerGimbal.rotation.x = -Math.PI / 5;
  group.add(innerGimbal);
  floatingParts.push({
    mesh: innerGimbal,
    basePos: new THREE.Vector3(0, 0, 0),
    dir: new THREE.Vector3(-0.4, -0.3, -0.3),
    rotSpeed: -0.006,
  });

  // 7. Glass Vacuum Containment Dome (Floats at top in antigravity state)
  const glassDome = new THREE.Mesh(new THREE.SphereGeometry(1.05, 32, 24, 0, Math.PI * 2, 0, Math.PI / 1.7), glassMat);
  glassDome.position.y = 0.8;
  group.add(glassDome);
  floatingParts.push({
    mesh: glassDome,
    basePos: new THREE.Vector3(0, 0.8, 0),
    dir: new THREE.Vector3(0, 0.9, 0), // floats high above
    rotSpeed: 0.002,
  });
}

/**
 * Creates floating golden anti-gravity energy dust & particle vortex
 */
function createAntigravityParticles(): THREE.Points {
  const particleCount = 420;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const goldColor = new THREE.Color(0xd4af37);
  const amberColor = new THREE.Color(0xf59e0b);

  for (let i = 0; i < particleCount; i++) {
    const radius = 0.6 + Math.random() * 2.8;
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 4.5;

    positions[i * 3] = Math.cos(theta) * radius;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(theta) * radius;

    const mixed = Math.random() > 0.4 ? goldColor : amberColor;
    colors[i * 3] = mixed.r;
    colors[i * 3 + 1] = mixed.g;
    colors[i * 3 + 2] = mixed.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geometry, material);
}

function buildModelGeometry(group: THREE.Group, type: string, wireframe: boolean) {
  while (group.children.length > 0) {
    group.remove(group.children[0]);
  }

  const mat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.88,
    roughness: 0.22,
    wireframe: wireframe,
    side: THREE.DoubleSide
  });

  if (type === 'bell') {
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.5, 32, 1, true), mat);
    horn.rotation.x = Math.PI / 2;
    group.add(horn);

    const drum = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.45, 36), mat);
    drum.position.z = -0.7;
    drum.rotation.x = Math.PI / 2;
    group.add(drum);

    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.6, 24), mat);
    cup.position.set(0, -0.65, -0.2);
    group.add(cup);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.02, 16, 120), mat);
    group.add(ring);
  } else if (type === 'fleming') {
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.6, 24), mat);
    group.add(drum);

    const crank = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.06, 16, 32), mat);
    crank.position.y = 1.0;
    crank.rotation.x = Math.PI / 2;
    group.add(crank);

    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.7, 12), mat);
    handle.position.set(0.6, 1.0, 0);
    group.add(handle);
  } else if (type === 'beville') {
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.5, 16), mat);
    hub.rotation.x = Math.PI / 2;
    group.add(hub);

    for (let i = 0; i < 8; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.4, 0.04), mat);
      blade.position.y = 0.9;
      const pivot = new THREE.Group();
      pivot.rotation.z = (i * Math.PI) / 4;
      pivot.add(blade);
      group.add(pivot);
    }
  } else if (type === 'tesla') {
    const stator = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 16, 40), mat);
    group.add(stator);

    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.2, 24), mat);
    group.add(rotor);
  } else {
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.1, 36), mat);
    disc.rotation.x = Math.PI / 4;
    group.add(disc);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.04, 16, 60), mat);
    ring.rotation.x = Math.PI / 4;
    group.add(ring);
  }
}
