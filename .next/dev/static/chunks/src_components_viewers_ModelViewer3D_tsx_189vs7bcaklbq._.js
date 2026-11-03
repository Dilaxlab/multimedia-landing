(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/viewers/ModelViewer3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelViewer3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ModelViewer3D({ modelType = 'antigravity', isWireframe = false, isAutoRotating = true, lightingMode = 'spotlight', zoomLevel = 4.6, dismantleFactor = 0.5, className = "w-full h-full", onHotspotClick }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particleSystemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floatingPartsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animFrameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAutoRotatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isAutoRotating);
    const dismantleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(dismantleFactor);
    isAutoRotatingRef.current = isAutoRotating;
    dismantleRef.current = dismantleFactor;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelViewer3D.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const width = container.clientWidth || 550;
            const height = container.clientHeight || 500;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            sceneRef.current = scene;
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, width / height, 0.1, 1000);
            camera.position.set(0, 0.4, zoomLevel);
            cameraRef.current = camera;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
            renderer.toneMappingExposure = 1.2;
            rendererRef.current = renderer;
            container.innerHTML = '';
            container.appendChild(renderer.domElement);
            // Warm museum chiaroscuro lighting
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xfff5e0, lightingMode === 'spotlight' ? 0.9 : 1.3);
            scene.add(ambientLight);
            // Primary Antique Gold Key Spotlight (#D4AF37)
            const keyLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xd4af37, 3.8);
            keyLight.position.set(4, 6, 5);
            scene.add(keyLight);
            // Ancient Bronze Fill Light (#8C6D3B)
            const fillLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0x8c6d3b, 2.2);
            fillLight.position.set(-5, -2, 3);
            scene.add(fillLight);
            // Cyan/Amber Rim Glow
            const rimLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xf59e0b, 3.0, 15);
            rimLight.position.set(0, -3, -2);
            scene.add(rimLight);
            // Main Object Group
            const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
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
            let prevPos = {
                x: 0,
                y: 0
            };
            const onMouseDown = {
                "ModelViewer3D.useEffect.onMouseDown": (e)=>{
                    isDragging = true;
                    prevPos = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["ModelViewer3D.useEffect.onMouseDown"];
            const onMouseUp = {
                "ModelViewer3D.useEffect.onMouseUp": ()=>{
                    isDragging = false;
                }
            }["ModelViewer3D.useEffect.onMouseUp"];
            const onMouseMove = {
                "ModelViewer3D.useEffect.onMouseMove": (e)=>{
                    if (!isDragging || !meshGroupRef.current) return;
                    const deltaX = e.clientX - prevPos.x;
                    const deltaY = e.clientY - prevPos.y;
                    meshGroupRef.current.rotation.y += deltaX * 0.007;
                    meshGroupRef.current.rotation.x += deltaY * 0.007;
                    prevPos = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["ModelViewer3D.useEffect.onMouseMove"];
            const onTouchStart = {
                "ModelViewer3D.useEffect.onTouchStart": (e)=>{
                    if (e.touches.length === 1) {
                        isDragging = true;
                        prevPos = {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY
                        };
                    }
                }
            }["ModelViewer3D.useEffect.onTouchStart"];
            const onTouchEnd = {
                "ModelViewer3D.useEffect.onTouchEnd": ()=>{
                    isDragging = false;
                }
            }["ModelViewer3D.useEffect.onTouchEnd"];
            const onTouchMove = {
                "ModelViewer3D.useEffect.onTouchMove": (e)=>{
                    if (!isDragging || !meshGroupRef.current || e.touches.length !== 1) return;
                    const deltaX = e.touches[0].clientX - prevPos.x;
                    const deltaY = e.touches[0].clientY - prevPos.y;
                    meshGroupRef.current.rotation.y += deltaX * 0.007;
                    meshGroupRef.current.rotation.x += deltaY * 0.007;
                    prevPos = {
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    };
                }
            }["ModelViewer3D.useEffect.onTouchMove"];
            container.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('mousemove', onMouseMove);
            container.addEventListener('touchstart', onTouchStart);
            window.addEventListener('touchend', onTouchEnd);
            window.addEventListener('touchmove', onTouchMove);
            // Animation Loop using monotonic performance.now() (eliminates THREE.Clock deprecation)
            const startTime = performance.now();
            const animate = {
                "ModelViewer3D.useEffect.animate": ()=>{
                    animFrameIdRef.current = requestAnimationFrame(animate);
                    const elapsed = (performance.now() - startTime) * 0.001;
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
                    floatingPartsRef.current.forEach({
                        "ModelViewer3D.useEffect.animate": (part)=>{
                            // Expand outward along its radial direction
                            part.mesh.position.x = part.basePos.x + part.dir.x * dismantle * 0.85;
                            part.mesh.position.y = part.basePos.y + part.dir.y * dismantle * 0.85 + Math.sin(elapsed * 2 + part.basePos.z) * 0.03;
                            part.mesh.position.z = part.basePos.z + part.dir.z * dismantle * 0.85;
                            // Individual gear spin
                            part.mesh.rotation.z += part.rotSpeed;
                        }
                    }["ModelViewer3D.useEffect.animate"]);
                    // Animate Anti-Gravity Swirling Particles
                    if (particleSystemRef.current) {
                        particleSystemRef.current.rotation.y = elapsed * 0.08;
                        const positions = particleSystemRef.current.geometry.attributes.position.array;
                        for(let i = 1; i < positions.length; i += 3){
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
                }
            }["ModelViewer3D.useEffect.animate"];
            animate();
            const handleResize = {
                "ModelViewer3D.useEffect.handleResize": ()=>{
                    if (!container || !cameraRef.current || !rendererRef.current) return;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    cameraRef.current.aspect = w / h;
                    cameraRef.current.updateProjectionMatrix();
                    rendererRef.current.setSize(w, h);
                }
            }["ModelViewer3D.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "ModelViewer3D.useEffect": ()=>{
                    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
                    window.removeEventListener('resize', handleResize);
                    container.removeEventListener('mousedown', onMouseDown);
                    window.removeEventListener('mouseup', onMouseUp);
                    window.removeEventListener('mousemove', onMouseMove);
                    container.removeEventListener('touchstart', onTouchStart);
                    window.removeEventListener('touchend', onTouchEnd);
                    window.removeEventListener('touchmove', onTouchMove);
                    if (rendererRef.current) rendererRef.current.dispose();
                }
            })["ModelViewer3D.useEffect"];
        }
    }["ModelViewer3D.useEffect"], [
        modelType,
        lightingMode
    ]);
    // Update wireframe state on existing mesh
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelViewer3D.useEffect": ()=>{
            if (meshGroupRef.current) {
                meshGroupRef.current.traverse({
                    "ModelViewer3D.useEffect": (child)=>{
                        if (child.isMesh) {
                            const mat = child.material;
                            if (mat && mat.wireframe !== undefined) {
                                mat.wireframe = isWireframe;
                            }
                        }
                    }
                }["ModelViewer3D.useEffect"]);
            }
        }
    }["ModelViewer3D.useEffect"], [
        isWireframe
    ]);
    // Update zoom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelViewer3D.useEffect": ()=>{
            if (cameraRef.current) {
                cameraRef.current.position.z = zoomLevel;
            }
        }
    }["ModelViewer3D.useEffect"], [
        zoomLevel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/viewers/ModelViewer3D.tsx",
        lineNumber: 239,
        columnNumber: 10
    }, this);
}
_s(ModelViewer3D, "q+wFenUFGS6pGkmCWFbC7Ar9Y6Y=");
_c = ModelViewer3D;
/**
 * Builds 'The Antigravity Chronometer (1881)' by Henry H. Beville
 * Features intricate concentric brass gears, gimbal armillary rings, ruby escapement,
 * and dismantled floating layers suspended in an antigravity energy state.
 */ function buildAntigravityChronometer(group, floatingParts, wireframe) {
    while(group.children.length > 0){
        group.remove(group.children[0]);
    }
    // Antique Polished Gold (#D4AF37)
    const goldMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xd4af37,
        metalness: 0.92,
        roughness: 0.18,
        wireframe: wireframe,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
    });
    // Ancient Bronze (#8C6D3B)
    const bronzeMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x8c6d3b,
        metalness: 0.85,
        roughness: 0.35,
        wireframe: wireframe
    });
    // Glowing Core Element (#F59E0B)
    const coreGlowMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xffb703,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.7,
        metalness: 0.4,
        roughness: 0.2
    });
    // Glass Vacuum Enclosure (Levitating above)
    const glassMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: 0xffffff,
        metalness: 0.05,
        roughness: 0.05,
        transmission: 0.92,
        transparent: true,
        opacity: 0.35,
        ior: 1.5
    });
    // 1. Central Chronometer Core Sphere
    const coreSphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.38, 32, 32), coreGlowMat);
    group.add(coreSphere);
    // 2. Base Pedestal Mount (Grounded/Static Anchor)
    const baseRing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.6, 0.04, 16, 64), bronzeMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -1.2;
    group.add(baseRing);
    // 3. Dismantled Floating Layer A: Main Brass Sun Gear (Dismantles downward)
    const mainGearGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const mainDisc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1.15, 1.15, 0.06, 48), goldMat);
    mainGearGroup.add(mainDisc);
    // Add 16 gear teeth
    for(let i = 0; i < 16; i++){
        const tooth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.12, 0.06, 0.22), goldMat);
        const angle = i * Math.PI * 2 / 16;
        tooth.position.set(Math.cos(angle) * 1.2, 0, Math.sin(angle) * 1.2);
        tooth.rotation.y = -angle;
        mainGearGroup.add(tooth);
    }
    mainGearGroup.position.y = -0.45;
    group.add(mainGearGroup);
    floatingParts.push({
        mesh: mainGearGroup,
        basePos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -0.45, 0),
        dir: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -0.6, 0),
        rotSpeed: 0.008
    });
    // 4. Dismantled Floating Layer B: Counter-Rotating Escape Gear (Dismantles upward)
    const escapeGearGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const escapeRing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.75, 0.05, 16, 36), goldMat);
    escapeRing.rotation.x = Math.PI / 2;
    escapeGearGroup.add(escapeRing);
    for(let i = 0; i < 12; i++){
        const spoke = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.02, 0.02, 0.75, 8), bronzeMat);
        const angle = i * Math.PI * 2 / 12;
        spoke.rotation.z = Math.PI / 2;
        spoke.rotation.y = angle;
        escapeGearGroup.add(spoke);
    }
    escapeGearGroup.position.y = 0.45;
    group.add(escapeGearGroup);
    floatingParts.push({
        mesh: escapeGearGroup,
        basePos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.45, 0),
        dir: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.65, 0),
        rotSpeed: -0.012
    });
    // 5. Dismantled Floating Layer C: Outer Antigravity Gimbal Ring (Tilts and expands outward)
    const outerGimbal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.85, 0.035, 16, 80), goldMat);
    outerGimbal.rotation.x = Math.PI / 3;
    group.add(outerGimbal);
    floatingParts.push({
        mesh: outerGimbal,
        basePos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
        dir: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.5, 0.3, 0.4),
        rotSpeed: 0.004
    });
    // 6. Dismantled Floating Layer D: Inner Antigravity Gimbal Ring (Perpendicular tilt)
    const innerGimbal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.45, 0.03, 16, 64), bronzeMat);
    innerGimbal.rotation.y = Math.PI / 4;
    innerGimbal.rotation.x = -Math.PI / 5;
    group.add(innerGimbal);
    floatingParts.push({
        mesh: innerGimbal,
        basePos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
        dir: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.4, -0.3, -0.3),
        rotSpeed: -0.006
    });
    // 7. Glass Vacuum Containment Dome (Floats at top in antigravity state)
    const glassDome = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1.05, 32, 24, 0, Math.PI * 2, 0, Math.PI / 1.7), glassMat);
    glassDome.position.y = 0.8;
    group.add(glassDome);
    floatingParts.push({
        mesh: glassDome,
        basePos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.8, 0),
        dir: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.9, 0),
        rotSpeed: 0.002
    });
}
/**
 * Creates floating golden anti-gravity energy dust & particle vortex
 */ function createAntigravityParticles() {
    const particleCount = 420;
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const goldColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xd4af37);
    const amberColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xf59e0b);
    for(let i = 0; i < particleCount; i++){
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
    geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
    geometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
        size: 0.045,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, material);
}
function buildModelGeometry(group, type, wireframe) {
    while(group.children.length > 0){
        group.remove(group.children[0]);
    }
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xd4af37,
        metalness: 0.88,
        roughness: 0.22,
        wireframe: wireframe,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
    });
    if (type === 'bell') {
        const horn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](0.85, 1.5, 32, 1, true), mat);
        horn.rotation.x = Math.PI / 2;
        group.add(horn);
        const drum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1.1, 1.1, 0.45, 36), mat);
        drum.position.z = -0.7;
        drum.rotation.x = Math.PI / 2;
        group.add(drum);
        const cup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.35, 0.35, 0.6, 24), mat);
        cup.position.set(0, -0.65, -0.2);
        group.add(cup);
        const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.9, 0.02, 16, 120), mat);
        group.add(ring);
    } else if (type === 'fleming') {
        const drum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1.2, 1.2, 1.6, 24), mat);
        group.add(drum);
        const crank = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.6, 0.06, 16, 32), mat);
        crank.position.y = 1.0;
        crank.rotation.x = Math.PI / 2;
        group.add(crank);
        const handle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.08, 0.08, 0.7, 12), mat);
        handle.position.set(0.6, 1.0, 0);
        group.add(handle);
    } else if (type === 'beville') {
        const hub = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.35, 0.35, 0.5, 16), mat);
        hub.rotation.x = Math.PI / 2;
        group.add(hub);
        for(let i = 0; i < 8; i++){
            const blade = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.2, 1.4, 0.04), mat);
            blade.position.y = 0.9;
            const pivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            pivot.rotation.z = i * Math.PI / 4;
            pivot.add(blade);
            group.add(pivot);
        }
    } else if (type === 'tesla') {
        const stator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.2, 0.35, 16, 40), mat);
        group.add(stator);
        const rotor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.7, 0.7, 1.2, 24), mat);
        group.add(rotor);
    } else {
        const disc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1.2, 1.2, 0.1, 36), mat);
        disc.rotation.x = Math.PI / 4;
        group.add(disc);
        const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.5, 0.04, 16, 60), mat);
        ring.rotation.x = Math.PI / 4;
        group.add(ring);
    }
}
var _c;
__turbopack_context__.k.register(_c, "ModelViewer3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/viewers/ModelViewer3D.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/viewers/ModelViewer3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_viewers_ModelViewer3D_tsx_189vs7bcaklbq._.js.map