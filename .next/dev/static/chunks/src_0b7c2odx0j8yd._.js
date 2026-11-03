(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/common/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Footer() {
    _s();
    const [utcTime, setUtcTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('00:00');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const updateTime = {
                "Footer.useEffect.updateTime": ()=>{
                    const now = new Date();
                    const hrs = String(now.getUTCHours()).padStart(2, '0');
                    const mins = String(now.getUTCMinutes()).padStart(2, '0');
                    setUtcTime(`${hrs}:${mins}`);
                }
            }["Footer.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 10000);
            return ({
                "Footer.useEffect": ()=>clearInterval(interval)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-surface-container-lowest shadow-[0_-4px_24px_rgba(0,0,0,0.4)] border-t border-primary/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-space-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-space-sm mb-space-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-headline-sm text-headline-sm uppercase text-on-surface",
                                            children: "Heritage Archive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-md text-body-md text-on-surface-variant max-w-sm",
                                    children: "Nocturnal digital sanctuary dedicated to the forensic preservation, 3D photogrammetry, and cinematic curation of global cultural antiquities and technological inventions."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-space-xs mt-space-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-primary animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-label-sm text-label-sm text-primary uppercase",
                                            children: "Vault Network Synchronized"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-space-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-lg text-label-lg uppercase tracking-wider text-primary",
                                    children: "Curatorial Collections"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-space-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#collection",
                                                children: "Telecommunications & Acoustic Wire"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#collection",
                                                children: "Domestic Mechanical Inventions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Footer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#collection",
                                                children: "Wind Engines & Aquifer Pumps"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#collection",
                                                children: "Horological Gears & Astrolabes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-space-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-lg text-label-lg uppercase tracking-wider text-primary",
                                    children: "Scholarly Infrastructure"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-space-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: "IAMS Archival Protocols"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: "Photogrammetric Point Cloud API"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: "Institutional Access Grants"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer",
                                            children: "Provenance Forensic Logs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-space-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-lg text-label-lg uppercase tracking-wider text-primary",
                                    children: "Preservation Controls"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-primary/15",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-label-md text-label-md uppercase text-on-surface",
                                                    children: "Nocturne Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Footer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-label-sm text-label-sm text-primary px-space-xs py-0.5 rounded bg-surface-container-high",
                                                    children: "0.5 Lux"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-label-sm text-label-sm text-on-surface-variant",
                                            children: "Display calibration matched to museum vitrine anti-reflective luminescence standards."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-space-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-label-sm text-label-sm text-on-surface-variant",
                                                    children: "Catalog Badge"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Footer.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-bold",
                                                    children: "IAMS-8K COMPLIANT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Footer.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-low/40 rounded-xl px-space-lg py-space-md border border-primary/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-space-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-sm text-label-sm text-on-surface-variant",
                                    children: "© 2025 Heritage Archive Consortium. All Rights Reserved."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors",
                                    children: "Curatorial Ethics"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors",
                                    children: "Open Metadata License"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors",
                                    children: "Security & Provenance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-space-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-label-sm text-label-sm text-on-surface-variant",
                                    children: [
                                        "Archival Sync: UTC ",
                                        utcTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Footer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Footer.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Footer.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Footer.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Footer, "R9BWM4O5hi5IIPT9FOLDaw7UmpU=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.mjs [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clapperboard.mjs [app-client] (ecmascript) <export default as Clapperboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$TaxonomyModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/TaxonomyModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Navbar({ onSearchChange, onOpenTaxonomy }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Home');
    const [isAudioTourActive, setIsAudioTourActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTaxonomyOpen, setIsTaxonomyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll-spy: dynamically reflect active section based on scroll position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const scrollPos = window.scrollY + 180;
                    const sections = [
                        {
                            id: 'hero',
                            tab: 'Home'
                        },
                        {
                            id: 'collection',
                            tab: 'Inventions'
                        },
                        {
                            id: 'gallery3d',
                            tab: '3D Gallery'
                        },
                        {
                            id: 'videos',
                            tab: 'Stories'
                        },
                        {
                            id: 'multimedia',
                            tab: 'Multimedia'
                        },
                        {
                            id: 'explore',
                            tab: 'Disciplines'
                        }
                    ];
                    for(let i = sections.length - 1; i >= 0; i--){
                        const el = document.getElementById(sections[i].id);
                        if (el) {
                            const top = el.offsetTop;
                            if (scrollPos >= top) {
                                setActiveTab(sections[i].tab);
                                return;
                            }
                        }
                    }
                    setActiveTab('Home');
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // ⌘K / Ctrl+K and ESC Keyboard Shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleKeyDown = {
                "Navbar.useEffect.handleKeyDown": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                        e.preventDefault();
                        setIsSearchOpen({
                            "Navbar.useEffect.handleKeyDown": (prev)=>!prev
                        }["Navbar.useEffect.handleKeyDown"]);
                    } else if (e.key === 'Escape') {
                        setIsSearchOpen(false);
                        setIsMobileMenuOpen(false);
                        setIsTaxonomyOpen(false);
                    }
                }
            }["Navbar.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Focus search input when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isSearchOpen) {
                setTimeout({
                    "Navbar.useEffect": ()=>{
                        searchInputRef.current?.focus();
                    }
                }["Navbar.useEffect"], 50);
            }
        }
    }["Navbar.useEffect"], [
        isSearchOpen
    ]);
    // Audio Tour chime playback
    const toggleAudioTour = ()=>{
        const nextState = !isAudioTourActive;
        setIsAudioTourActive(nextState);
        try {
            if (!audioContextRef.current && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) audioContextRef.current = new AudioCtx();
            }
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
            if (audioContextRef.current && nextState) {
                const ctx = audioContextRef.current;
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, now); // A4
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.35);
            }
        } catch  {
        // AudioContext fallback handled silently
        }
    };
    const navItems = [
        {
            name: 'Home',
            label: 'Home',
            href: '/#hero',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "w-4 h-4 shrink-0 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            tooltip: 'Archive Entrance'
        },
        {
            name: 'Inventions',
            label: 'Inventions',
            href: '/#collection',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                className: "w-4 h-4 shrink-0 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            tooltip: 'Historic Innovations'
        },
        {
            name: '3D Gallery',
            label: '3D Gallery',
            href: '/#gallery3d',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                className: "w-4 h-4 shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            tooltip: 'Photogrammetry Models'
        },
        {
            name: 'Stories',
            label: 'Stories',
            href: '/#videos',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                className: "w-4 h-4 shrink-0 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            tooltip: 'Archival Narratives'
        },
        {
            name: 'Multimedia',
            label: 'Multimedia',
            href: '/#multimedia',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__["Clapperboard"], {
                className: "w-4 h-4 shrink-0 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            tooltip: 'Film & Audio Archives'
        },
        {
            name: 'Disciplines',
            label: 'Disciplines',
            href: '/#collection',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: "w-4 h-4 shrink-0 transition-colors"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this),
            tooltip: 'Fields of Study',
            action: ()=>{
                if (onOpenTaxonomy) onOpenTaxonomy();
                else setIsTaxonomyOpen(true);
            }
        }
    ];
    const filteredAssets = searchQuery.trim() ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"].filter((a)=>a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.inventor.toLowerCase().includes(searchQuery.toLowerCase()) || a.patent.toLowerCase().includes(searchQuery.toLowerCase())) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"].slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 w-full px-3 py-3 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto backdrop-blur-xl bg-[#0e0e13]/85 border border-white/10 hover:border-amber-500/25 rounded-2xl shadow-2xl transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-3 sm:px-4 py-2.5 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2.5 group select-none flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-600/10 border border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-glow-gold transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                    className: "w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:flex flex-col leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif font-bold text-[12px] tracking-[0.2em] text-white group-hover:text-amber-300 transition-colors uppercase",
                                                    children: "Heritage Archive"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] tracking-[0.25em] uppercase text-amber-400/80 font-medium font-sans",
                                                    children: "Digital Museum • Vault"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex items-center p-1 bg-black/40 border border-white/[0.08] rounded-xl backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex items-center gap-0.5",
                                        children: navItems.map((item)=>{
                                            const isActive = activeTab === item.name;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "relative has-tooltip",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        onClick: (e)=>{
                                                            setActiveTab(item.name);
                                                            if (item.action) {
                                                                item.action();
                                                            }
                                                        },
                                                        className: `nav-item nav-icon-item group flex items-center px-3 py-2 rounded-lg transition-all ${isActive ? 'active-tab bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-semibold shadow-glow-pill' : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: isActive ? 'text-black stroke-[2.2] shrink-0' : 'text-neutral-400 group-hover:text-amber-400 transition-colors shrink-0',
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `nav-label text-[10px] tracking-wide ${isActive ? 'font-bold text-neutral-950' : 'font-medium'}`,
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300 font-mono shadow-lg whitespace-nowrap z-50",
                                                        children: item.tooltip
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.name, true, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 230,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative has-tooltip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsSearchOpen(true),
                                                    "aria-label": "Search",
                                                    className: "p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/50 text-neutral-300 hover:text-amber-300 transition-all cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300 font-mono shadow-lg whitespace-nowrap z-50",
                                                    children: "Search ⌘K"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative has-tooltip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: toggleAudioTour,
                                                    "aria-label": "Audio Commentary",
                                                    className: `nav-icon-item flex items-center gap-1.5 px-2.5 py-2 rounded-xl border transition-all cursor-pointer ${isAudioTourActive ? 'border-amber-400 bg-amber-500/10 text-amber-300' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-amber-400/50 text-neutral-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                            className: "w-4 h-4 text-amber-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        isAudioTourActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-0.5 h-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sound-bar w-0.5 bg-amber-400 rounded-full inline-block"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sound-bar w-0.5 bg-amber-400 rounded-full inline-block"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sound-bar w-0.5 bg-amber-400 rounded-full inline-block"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 21
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `nav-label text-[10px] ${isAudioTourActive ? 'font-semibold text-amber-300' : 'font-medium text-neutral-300'}`,
                                                            children: isAudioTourActive ? 'On' : 'Tour'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300 font-mono shadow-lg whitespace-nowrap z-50",
                                                    children: isAudioTourActive ? 'Voiceover Active' : 'Curator Voiceover'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:block h-5 w-px bg-white/10 mx-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#collection",
                                            className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold text-[11px] shadow-glow-pill hover:shadow-glow-gold hover:scale-[1.03] transition-all cursor-pointer font-sans whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Explore Archives"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm leading-none",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                            "aria-label": "Toggle menu",
                                            className: "md:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer",
                                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 337,
                                                columnNumber: 37
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 337,
                                                columnNumber: 80
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Navbar.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden border-t border-white/10 px-3 py-2.5 bg-black/60 rounded-b-2xl animate-fadeIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 text-xs",
                                children: [
                                    navItems.map((item)=>{
                                        const isActive = activeTab === item.name;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: ()=>{
                                                setActiveTab(item.name);
                                                setIsMobileMenuOpen(false);
                                                if (item.action) item.action();
                                            },
                                            className: `flex items-center gap-2.5 p-2 rounded-lg transition-all ${isActive ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold' : 'text-neutral-300 hover:bg-white/[0.06]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-400",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.name, true, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsMobileMenuOpen(false);
                                            setIsSearchOpen(true);
                                        },
                                        className: "flex items-center gap-2.5 p-2 rounded-lg text-neutral-300 hover:bg-white/[0.06] col-span-2 text-left cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 375,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/Navbar.tsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Navbar.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Navbar.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setIsSearchOpen(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-[#121217] border border-amber-500/30 rounded-2xl p-5 shadow-glow-gold flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-amber-400 text-sm font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-serif",
                                            children: "Quick Archive Search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsSearchOpen(false),
                                    className: "text-neutral-400 hover:text-white text-xs px-2 py-0.5 bg-white/5 rounded font-mono hover:bg-white/10 transition",
                                    children: "ESC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Navbar.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: searchInputRef,
                                    type: "text",
                                    placeholder: "Type artifact name or era...",
                                    value: searchQuery,
                                    onChange: (e)=>{
                                        const val = e.target.value;
                                        setSearchQuery(val);
                                        onSearchChange?.(val);
                                    },
                                    className: "w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-400 font-mono transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSearchQuery('');
                                        onSearchChange?.('');
                                    },
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs font-mono",
                                    children: "CLEAR"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 422,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Navbar.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5 max-h-60 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-1",
                                    children: searchQuery ? `Matching Inventions (${filteredAssets.length})` : 'Featured Inventions'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this),
                                filteredAssets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-6 text-center text-xs font-mono text-neutral-500",
                                    children: [
                                        "No artifacts found matching “",
                                        searchQuery,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 440,
                                    columnNumber: 17
                                }, this) : filteredAssets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsSearchOpen(false);
                                            router.push(`/inventions/${asset.id}`);
                                        },
                                        className: "flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-amber-500/30 text-left transition group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg overflow-hidden bg-neutral-900 shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: asset.image,
                                                            alt: asset.title,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/common/Navbar.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-medium text-neutral-200 group-hover:text-amber-400 transition-colors block",
                                                                children: asset.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono text-neutral-500 block",
                                                                children: [
                                                                    asset.inventor,
                                                                    " • ",
                                                                    asset.patent
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 453,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/Navbar.tsx",
                                                lineNumber: 466,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, asset.id, true, {
                                        fileName: "[project]/src/components/common/Navbar.tsx",
                                        lineNumber: 445,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Navbar.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Press ESC to exit"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-400/80",
                                    children: "Navigation Ready"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Navbar.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Navbar.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Navbar.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$TaxonomyModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isTaxonomyOpen,
                onClose: ()=>setIsTaxonomyOpen(false),
                onSelectCategory: (category)=>{
                    setIsTaxonomyOpen(false);
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({
                        behavior: 'smooth'
                    });
                    if (onSearchChange) onSearchChange(category.split(' ')[0]);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/common/Navbar.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Navbar.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(Navbar, "dAfby+cpUerFtrh2CpNFKBlePgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/TaxonomyModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxonomyModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.mjs [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TaxonomyModal({ isOpen, onClose, onSelectCategory }) {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAXONOMY_MASTER_LIST"].filter((item)=>item.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-4xl bg-surface-container border border-outline-variant/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-high/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-mono tracking-widest text-primary uppercase",
                                            children: "IAMS Taxonomy Register"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-serif text-2xl text-on-surface font-normal",
                                    children: "64 Curated Historical Disciplines"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-on-surface-variant font-mono mt-1",
                                    children: "Classified in accordance with the International Archive for Mechanical Standards (IAMS)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/40 transition-colors",
                            "aria-label": "Close taxonomy modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 bg-surface-container-low border-b border-outline-variant/20 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-4 h-4 text-on-surface-variant shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search disciplines (e.g. steam, optics, telephony, pneumatic)...",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            className: "w-full bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none font-mono",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSearch(''),
                            className: "text-xs text-on-surface-variant hover:text-primary font-mono",
                            children: "CLEAR"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
                    children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-full py-12 text-center text-on-surface-variant font-mono text-sm",
                        children: [
                            "No historical disciplines match “",
                            search,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this) : filtered.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (onSelectCategory) onSelectCategory(item);
                                onClose();
                            },
                            className: "text-left p-3.5 rounded-lg border border-outline-variant/20 bg-surface-container-high/40 hover:bg-surface-container-highest hover:border-primary/50 transition-all group flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[10px] text-primary/70 mt-0.5 group-hover:text-primary",
                                    children: [
                                        String(idx + 1).padStart(2, '0'),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-sans text-on-surface group-hover:text-primary transition-colors leading-relaxed",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-outline-variant/20 bg-surface-container-low flex items-center justify-between text-[11px] font-mono text-on-surface-variant",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Showing ",
                                filtered.length,
                                " of ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAXONOMY_MASTER_LIST"].length,
                                " cataloged domains"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Standards Compliance: ISO-IAMS-2024"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/TaxonomyModal.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/TaxonomyModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/TaxonomyModal.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(TaxonomyModal, "xMSft3/sbCidYXUzqinUsZIh+qY=");
_c = TaxonomyModal;
var _c;
__turbopack_context__.k.register(_c, "TaxonomyModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_BLUEPRINTS",
    ()=>MOCK_BLUEPRINTS,
    "MOCK_HISTORICAL_ASSETS",
    ()=>MOCK_HISTORICAL_ASSETS,
    "MOCK_VIDEO_VIGNETTES",
    ()=>MOCK_VIDEO_VIGNETTES,
    "TAXONOMY_MASTER_LIST",
    ()=>TAXONOMY_MASTER_LIST
]);
const TAXONOMY_MASTER_LIST = [
    "Acoustic Telephony & Liquid Transmitters",
    "Mechanical Washing-Machines & Agitators",
    "Self-Governing Wind Mills",
    "Incandescent Carbon Filament Lamps",
    "Polyphase AC Induction Motors",
    "Three-Axis Aerodynamic Gliders",
    "Mechanical Difference Engines",
    "Movable Type Metal Printing Presses",
    "Electromagnetic Telegraphs",
    "Marine Chronometers for Longitude",
    "Archimedean Screw Pumps",
    "Compound Optical Microscopes",
    "High-Pressure Steam Locomotives",
    "Bessemer Steel Converters",
    "Radio Frequency & Spark Gap",
    "Early Phonographs & Cylinders",
    "Lockstitch Sewing Machines",
    "Refrigeration Compressors",
    "Vacuum Cleaners & Suction",
    "Reaping & Grain Harvesters",
    "Steam Tractor Ploughs",
    "Cotton Gins & Extractors",
    "Direct Current Dynamos",
    "Transformer Power Distribution",
    "Biplane Flying Machines",
    "Rigid Dirigible Airships",
    "Early Rotary Aero Engines",
    "Analytical Engine Punch Cards",
    "Arithmometers & Gear Calculators",
    "Typewriter Keyboards",
    "Steam Rotary Cylinder Presses",
    "Camera Obscura & Daguerreotypes",
    "Cinematographe Motion Projectors",
    "Condensing Steam Engines",
    "Compound Marine Steam Turbines",
    "Pneumatic Railway Brakes",
    "Deadbeat Escapement Clocks",
    "Astronomical Astrolabes",
    "Achromatic Refracting Telescopes",
    "Vulcanized Rubber Processing",
    "Aluminum Electrolytic Smelting",
    "Lost-Wax Bronze Casting",
    "Prismatic Spectroscopes",
    "Fresnel Lighthouse Lenses",
    "Interferometer Wave Analyzers",
    "Centrifugal Water Turbines",
    "Hydraulic Press Intensifiers",
    "Pneumatic Despatch Systems",
    "Hand-Cranked Submersible Vessels",
    "Screw Propeller Ship Drives",
    "Gyroscopic Compasses",
    "Standardized Diving Helmets",
    "Continuous Ammonia Synthesis",
    "Petroleum Distillation Stills",
    "Synthetic Alizarin Dye Stills",
    "Gunpowder Nitrate Milling",
    "Acoustic Stethoscopes",
    "Diagnostic X-Ray Tubes",
    "Hypodermic Injection Needles",
    "Inhalation Anesthesia Vaporizers",
    "Pneumatic Caisson Foundations",
    "Wrought Iron Lattice Bridges",
    "Hydraulic Canal Locks",
    "Portland Cement Kilns"
];
const MOCK_HISTORICAL_ASSETS = [
    {
        id: "HA-100",
        title: "The Antigravity Chronometer",
        officialTitle: "The Tri-Axial Antigravity Isochronal Chronometer Assembly (1881)",
        inventor: "Henry H. Beville",
        patent: "Pat. #249,002 • 1881",
        patentDate: "November 1, 1881",
        location: "Indianapolis Laboratory",
        category: "TIME",
        categoryLabel: "Horology & Mechanics",
        badge: "Antigravity Vault",
        image: "/images/character_beville.jpg",
        desc: "Suspended tri-axial counterpoised chronometer utilizing opposing magnetic fields to isolate escapement mechanisms from terrestrial gravitational torque.",
        polyCount: "142,000 Quads",
        medium: "Polished Brass • Ruby Jewel • Glass Dome",
        resonance: "Tri-Axial Floating 4 Hz Balance",
        era: "Golden Age (1871-1910)",
        modelType: "antigravity",
        schematicImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
        videoDuration: "0:30",
        story: "In 1881, amidst his pioneering work on mechanical governors, Henry H. Beville devised an extraordinary suspended horological apparatus. Seeking absolute isochronism free from seismic and gravitational disturbances, Beville suspended concentric brass gimbal rings and a counter-rotating balance escapement inside an evacuated bell jar.",
        mechanics: "The apparatus employs a magnetic counterpoise and floating planetary gear train. As the escapement wheel oscillates, concentric gimbal rings maintain zero-gravity equilibrium, neutralizing gravitational drag and isolating the chronometer's balance spring from external orientation forces.",
        legacy: "Beville's suspended chronometer anticipated contemporary spaceborne gyroscopic stabilization and inertial navigation systems used in aerospace guidance today.",
        curatorQuote: "Beville's counterpoised chronometer proved that mechanical timekeeping could transcend terrestrial gravitational torque, prefiguring modern spaceborne gyroscopes and zero-g instrumentation.",
        curatorAuthor: "Dr. Evelyn Vance, Senior Fellow of Horological Physics",
        blueprintLedger: [
            {
                item: "Concentric Brass Gimbal Rings",
                spec: "Dual-axis balanced tolerance ±0.015mm"
            },
            {
                item: "Counter-Rotating Sun & Planet Escapement",
                spec: "16-tooth phosphor bronze with ruby pallet jewels"
            },
            {
                item: "Magnetic Counterpoise Array",
                spec: "Permanent magnetic field isolating gravitational vibration"
            },
            {
                item: "Hermetic Vacuum Envelope",
                spec: "Annealed silicate glass dome maintaining 10^-3 Torr"
            }
        ],
        hotspots: [
            {
                id: 1,
                title: "Floating Escapement Wheel",
                desc: "Phosphor-bronze 16-tooth escape wheel floating on ruby jeweled balance.",
                pos: [
                    35,
                    42
                ]
            },
            {
                id: 2,
                title: "Dual-Axis Gimbal Ring",
                desc: "Concentrically milled armillary gimbal ring maintaining zero-g horizon.",
                pos: [
                    62,
                    58
                ]
            }
        ]
    },
    {
        id: "HA-101",
        title: "Early Telephone",
        officialTitle: "The Variable Acid Resistance Acoustic Vocal Transmitter (1876)",
        inventor: "Alexander Graham Bell",
        patent: "Pat. #174,465 • 1876",
        patentDate: "March 7, 1876",
        location: "Boston Laboratory",
        category: "TELECOM",
        categoryLabel: "Telecommunications",
        badge: "3D Vault",
        image: "/images/character_bell.jpg",
        desc: "Variable acid acoustic voice transmitter reproducing intelligible vocal harmonics.",
        polyCount: "84,000 Quads",
        medium: "Brass • Acid Cup • Parchment",
        resonance: "300 - 3400 Hz Voice Band",
        era: "Golden Age (1871-1910)",
        modelType: "bell",
        schematicImage: "/images/character_bell.jpg",
        videoDuration: "0:30",
        story: "In 1875, Alexander Graham Bell was conducting experiments with a harmonic telegraph designed to send multiple messages simultaneously over a single wire. While working alongside Thomas Watson in their Boston workshop, an accidental vibration of a reed spring transmitted an audible tone. Realizing that undulating currents could replicate the complex acoustic waveform of human vocal cords, Bell filed his landmark patent in February 1876, mere hours before competitor Elisha Gray.",
        mechanics: "The apparatus functions by modulating electric resistance in accordance with acoustic vibrations. When a speaker speaks into the conical cone, the acoustic sound waves flex a parchment diaphragm. Attached to the center of the diaphragm is a light platinum wire submerged into an acid-electrolyte reservoir. As the diaphragm moves back and forth, the wire's depth in the fluid fluctuates, altering the electrical resistance of the circuit and inducing a corresponding undulating electrical wave transmitted to an electromagnetic receiver.",
        legacy: "Patent #174,465 is universally regarded as the single most financially and culturally impactful patent in human history. It catalyzed the founding of American Telephone and Telegraph (AT&T), transformed commerce and emergency services, and demolished geographic barriers. Today's global cellular, fiber-optic, and digital satellite infrastructure rests upon the mathematical and physical foundations pioneered by this early apparatus.",
        curatorQuote: "Patent #174,465 was not merely an instrument; it was the technological birth certificate of global instantaneous human connection.",
        curatorAuthor: "Sir Alistair Thorne, Keeper of Telecommunication Antiquities",
        blueprintLedger: [
            {
                item: "Parchment Acoustic Diaphragm",
                spec: "Goldbeater's skin membrane 0.08mm gauge"
            },
            {
                item: "Platinum Wire Electrode Needle",
                spec: "Submerged 3.2mm in diluted sulfuric electrolyte"
            },
            {
                item: "Brass Acoustic Funnel Conical Horn",
                spec: "Spun bronze acoustic flare, 45° dispersal angle"
            },
            {
                item: "Electrolyte Cup Reservoir",
                spec: "Acid-resistant porcelain cup with copper electrode ground"
            }
        ],
        hotspots: [
            {
                id: 1,
                title: "Acoustic Diaphragm",
                desc: "Goldbeater's skin membrane vibrating to sound pressure.",
                pos: [
                    45,
                    32
                ]
            },
            {
                id: 2,
                title: "Liquid Acid Reservoir",
                desc: "Diluted sulfuric acid cup modifying electrical resistance dynamically.",
                pos: [
                    55,
                    68
                ]
            }
        ]
    },
    {
        id: "HA-102",
        title: "Improved Washing-Machine",
        inventor: "Caroline F. Fleming",
        patent: "Pat. #231,554 • 1880",
        patentDate: "August 24, 1880",
        location: "Texas Homestead",
        category: "DOMESTIC",
        categoryLabel: "Domestic Mechanics",
        badge: "Kinetic Model",
        image: "/images/character_fleming.jpg",
        desc: "Reciprocating agitator mechanism reducing manual laundering wear through fluid currents.",
        polyCount: "76,000 Quads",
        medium: "Cedar Wood • Cast Iron Crank",
        resonance: "Manual 60 RPM Agitation",
        era: "Golden Age (1871-1910)",
        modelType: "fleming",
        schematicImage: "/images/character_fleming.jpg",
        videoDuration: "0:30",
        story: "In late 19th-century America, laundry was among the most grueling, caustic, and hazardous household chores, requiring hours of boiling lye water and abrasive scrubbing over corrugated washboards. Caroline F. Fleming of Texas patented an ingeniously balanced mechanical agitator that dramatically reduced physical exertion and wear on garments, representing an essential triumph in female-led engineering.",
        mechanics: "Fleming's machine utilizes a sealed wooden drum fitted with an interior radial paddle agitator driven by a geared hand-crank. Instead of merely spinning the water, the mechanism creates opposing turbulent currents that force soapy water through textile fibers without tearing delicate seams.",
        legacy: "Fleming's patent laid the direct mechanical groundwork for modern horizontal-axis and top-loading washing machines. Her innovation freed millions of households from hours of exhausting manual labor, creating a social and economic shift towards domestic automation."
    },
    {
        id: "HA-103",
        title: "Iron Duke Wind Mill",
        inventor: "Henry H. Beville",
        patent: "Pat. #262,912 • 1882",
        patentDate: "August 15, 1882",
        location: "Indianapolis, IN",
        category: "WIND",
        categoryLabel: "Wind & Agriculture",
        badge: "Aero Twin",
        image: "/images/character_beville.jpg",
        desc: "Self-governing radial hydrological vane system pumping subterranean water through prairie storms.",
        polyCount: "92,000 Quads",
        medium: "Galvanized Steel • Cast Gears",
        resonance: "Self-Governing 15-45 MPH",
        era: "Golden Age (1871-1910)",
        modelType: "beville",
        schematicImage: "/images/character_beville.jpg",
        videoDuration: "0:30",
        story: "Settlers advancing onto the arid Great Plains faced severe droughts, where deep groundwater was inaccessible without constant mechanical pumping. Henry H. Beville engineered the 'Iron Duke' windmill with back-geared reduction and an automated governing vane, ensuring the mill could turn gently in light breezes yet automatically feather away from dangerous tornadic prairie winds.",
        mechanics: "The Iron Duke combines a multi-blade steel rotor wheel with a weighted rocker counterpoise and eccentric gear linkage. When wind velocities exceed safe operating thresholds, the lateral pressure against an auxiliary vane overcomes the counterweight, swinging the wheel edge-on to the wind to prevent structural destruction.",
        legacy: "The Iron Duke and its descendants enabled the agrarian settlement of the Western United States and Australia. By converting free atmospheric wind energy into continuous pressurized water for livestock, steam locomotives, and farms, it made arid continental interiors habitable."
    },
    {
        id: "HA-104",
        title: "Celestial Astrolabe",
        inventor: "Ada Lovelace",
        patent: "Circa 1843 • Rare Artifact",
        patentDate: "c. 1843",
        location: "London Mathematical Society",
        category: "TIME",
        categoryLabel: "Timekeeping & Precision",
        badge: "Cosmic Vault",
        image: "/images/character_ada.jpg",
        desc: "Horological celestial algorithm computing stellar azimuths, navigational angles, and celestial latitude.",
        polyCount: "110,000 Quads",
        medium: "Cast Brass • Star Calculations",
        resonance: "Celestial Equatorial Coordinate",
        era: "Pre-Industrial Enlightenment",
        modelType: "astrolabe",
        schematicImage: "/images/character_ada.jpg",
        videoDuration: "0:30",
        story: "Centuries before satellite-based GPS, navigators and astronomers computed their exact geographic location and local solar time using astrolabes and astronomical algorithms.",
        mechanics: "The device consists of a base plate (mater), interchangeable plates (tympans) calibrated to specific latitudes, and an openwork star pointer (rete). An alidade sighting rule on the reverse measures the altitude of celestial bodies.",
        legacy: "The astrolabe is the historical parent of both the modern analog clock and navigational computers, embodying the convergence of astronomy and spherical trigonometry."
    },
    {
        id: "HA-105",
        title: "Incandescent Electric Lamp",
        inventor: "Thomas Alva Edison",
        patent: "Pat. #223,898 • 1880",
        patentDate: "January 27, 1880",
        location: "Menlo Park, NJ",
        category: "DOMESTIC",
        categoryLabel: "Domestic Mechanics",
        badge: "Filament Model",
        image: "/images/character_edison.jpg",
        desc: "High-vacuum carbonized bamboo filament producing sustained 1200-hour nocturnal luminescence.",
        polyCount: "62,000 Quads",
        medium: "Blown Glass • Carbon Filament",
        resonance: "110V Direct Current Circuit",
        era: "Golden Age (1871-1910)",
        modelType: "bell",
        schematicImage: "/images/character_edison.jpg",
        videoDuration: "0:30",
        story: "Before electric light, cities relied on dangerous, flickering gas lamps that blackened ceilings and posed constant fire hazards. In Menlo Park, New Jersey, Edison and his laboratory team tested over 6,000 carbonaceous materials before discovering that carbonized Japanese bamboo in a Sprengel vacuum pump could glow steadily for over 1,200 hours.",
        mechanics: "An electric current passes through a high-resistance filament of carbonized cellulose. Because the glass bulb has been evacuated to one-millionth of an atmosphere, the filament heats to intense white-hot incandescence without burning or oxidizing.",
        legacy: "Edison did not merely invent a bulb; he created the world's first complete electrical power grid, including central dynamos, insulated underground conduits, meters, and switches, unleashing round-the-clock productivity and industrial growth."
    },
    {
        id: "HA-106",
        title: "The Wright Flyer",
        inventor: "Orville & Wilbur Wright",
        patent: "Pat. #821,393 • 1906",
        patentDate: "May 22, 1906",
        location: "Kitty Hawk, NC",
        category: "AERO",
        categoryLabel: "Aeronautics",
        badge: "Aero Kinematics",
        image: "/images/character_wright.jpg",
        desc: "Three-axis aerodynamic flight control coordinating wing-warping with a steerable vertical rudder.",
        polyCount: "115,000 Quads",
        medium: "Spruce Wood • Muslin Fabric",
        resonance: "12 HP Inline Aluminum Engine",
        era: "Early Modern (1911-1950)",
        modelType: "wright",
        schematicImage: "/images/character_wright.jpg",
        videoDuration: "0:30",
        story: "While contemporary aviators built fragile gliders or overpowered engines that crashed into rivers, bicycle makers Orville and Wilbur Wright understood that aerodynamic equilibrium in three dimensions was the true secret to human flight. After testing miniature wing airfoils inside a custom wind tunnel, they achieved sustained controlled powered flight at Kitty Hawk in December 1903.",
        mechanics: "The Wright patent focuses not merely on propulsion, but on 'wing warping'—helical twisting of the flexible spruce wingtips via cable controls synchronized with a vertical rudder to maintain roll and yaw stability simultaneously.",
        legacy: "The Wright Brothers transformed aviation from suicidal speculation into a definitive scientific discipline, inaugurating the modern era of global travel, air commerce, and aerospace exploration."
    },
    {
        id: "HA-107",
        title: "AC Induction Motor",
        inventor: "Nikola Tesla",
        patent: "Pat. #381,968 • 1888",
        patentDate: "May 1, 1888",
        location: "New York City",
        category: "TELECOM",
        categoryLabel: "Electrical Power",
        badge: "Rotational Core",
        image: "/images/character_tesla.jpg",
        desc: "Brushless polyphase motor revolving on rotating magnetic field induction without commutators.",
        polyCount: "88,000 Quads",
        medium: "Copper Windings • Laminated Iron",
        resonance: "60 Hz Polyphase 220V",
        era: "Golden Age (1871-1910)",
        modelType: "tesla",
        schematicImage: "/images/character_tesla.jpg",
        videoDuration: "0:30",
        story: "Frustrated by the sparking, friction, and maintenance breakdowns of Edison's direct current motors, Nikola Tesla envisioned a motor driven by a mathematically pure rotating magnetic field produced by polyphase alternating currents.",
        mechanics: "Stator coils energized by alternating currents out of phase with one another create a smoothly revolving magnetic field. This shifting field induces secondary eddy currents in the rotor, generating a torque that drives the rotor without any electrical contact rings or brushes.",
        legacy: "Tesla's AC induction motor remains the primary workhorse of global civilization today, driving everything from industrial pumps, manufacturing assembly lines, electric vehicles, and refrigeration units across the planet."
    },
    {
        id: "HA-108",
        title: "Difference Engine No. 2",
        inventor: "Charles Babbage",
        patent: "Archival Registry #1849",
        patentDate: "Circa 1849",
        location: "London Science Museum",
        category: "COMPUTING",
        categoryLabel: "Mechanical Computing",
        badge: "Gear Core",
        image: "/images/character_babbage.jpg",
        desc: "Precision gear-driven mechanical calculating computer computing polynomial tables to 31 decimals.",
        polyCount: "140,000 Quads",
        medium: "Bronze Gears • Cast Iron Framework",
        resonance: "Hand-Cranked Finite Difference Cycle",
        era: "Industrial Era (1760-1870)",
        modelType: "babbage",
        schematicImage: "/images/character_babbage.jpg",
        videoDuration: "0:30",
        story: "Alarmed by the frequent typographical and mathematical errors in astronomical and navigation tables calculated by human 'computers', English polymath Charles Babbage designed a massive brass apparatus capable of calculating and stereotyping mathematical tables without human intervention.",
        mechanics: "Eight thousand interlocking bronze gears, racks, and cams calculate second, third, and fourth order finite differences through sequential carry-propagation levers, automatically pressing the calculated numbers into papier-mâché molds for direct printing.",
        legacy: "Babbage's Difference and Analytical Engines established the foundational concepts of modern computing: separation of storage (memory) and mill (CPU), programmed operations, and error-free automated computation."
    },
    {
        id: "HA-109",
        title: "Bell's Telephone",
        officialTitle: "The Electromagnetic Acoustic Telegraph & Speaking Telephone Apparatus (1876)",
        inventor: "Alexander Graham Bell",
        patent: "Pat. #174,465 • 1876",
        patentDate: "March 7, 1876",
        location: "Smithsonian National Museum of American History",
        category: "TELECOM",
        categoryLabel: "Acoustic Telephony & Liquid Transmitters",
        badge: "Centennial Gold",
        image: "/images/character_bell.jpg",
        desc: "Historical electromagnetic speaking telephone converting vocal acoustic vibrations into continuous undulating electrical currents over telegraph wire.",
        polyCount: "98,000 Quads",
        medium: "Turned Mahogany Base • Cast Brass Horn • Copper Induction Coil",
        resonance: "Acoustic Diaphragm 300–3,400 Hz",
        era: "Golden Age (1871-1910)",
        modelType: "telephone",
        schematicImage: "/images/character_bell.jpg",
        videoDuration: "0:30",
        curatorQuote: "Mr. Watson, come here — I want to see you: the foundational moment vocal pressure waves were first transmuted into continuous electrical currents.",
        curatorAuthor: "Dr. Marcus Vance, Curator of Telecommunications, IAIMS",
        story: "In 1876, Scottish-born inventor Alexander Graham Bell revolutionized communication by demonstrating that complex undulating sound waves of human speech could be converted into proportional undulating electrical currents, transmitting the human voice across telegraph wires for the first time in human history.",
        mechanics: "A flexible metallic diaphragm vibrates sympathetically with spoken acoustic waves in front of an electromagnet pole. These vibrations induce an undulating electric current through a copper coil, which travels down the wire to an identical receiving electromagnet that vibrates a receiver diaphragm to recreate audible human speech.",
        legacy: "US Patent #174,465 is widely recognized as the single most valuable patent ever issued. It compressed global geography, spawned the global telecommunications grid, and laid the direct architectural foundation for the modern internet and telephony.",
        blueprintLedger: [
            {
                item: "Acoustic Speaking Horn",
                spec: "Spun Brass Horn • 62mm Vocal Intake Aperture"
            },
            {
                item: "Vibrating Iron Diaphragm",
                spec: "0.25mm Cold-Rolled Iron • Tuned Resonance"
            },
            {
                item: "Electromagnetic Core",
                spec: "Soft Iron Bar surrounded by Silk-Insulated Copper Coil"
            },
            {
                item: "Mahogany Bedplate Assembly",
                spec: "Hand-Carved Seasoned Hardwood with Brass Binding Posts"
            }
        ],
        hotspots: [
            {
                id: 1,
                title: "Acoustic Brass Funnel",
                desc: "Collects voice vibrations and focuses sound pressure onto the iron diaphragm.",
                pos: [
                    35,
                    45
                ]
            },
            {
                id: 2,
                title: "Induction Magnet Coil",
                desc: "Converts micro-movements of the diaphragm into undulating electrical current.",
                pos: [
                    65,
                    52
                ]
            },
            {
                id: 3,
                title: "Turned Mahogany Bedplate",
                desc: "Isolates mechanical vibrations and houses terminal wiring binding posts.",
                pos: [
                    50,
                    80
                ]
            }
        ]
    }
];
const MOCK_VIDEO_VIGNETTES = [
    {
        id: "VID-01",
        assetId: "HA-101",
        title: "Voice Across the Void",
        inventor: "Alexander Graham Bell",
        shortDesc: "How an accidental tuning fork resonance revolutionized human voice communication across continents.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Dr. Elena Vance",
        narratorInstitution: "Royal Institution Archival Audio Master",
        thumbnailUrl: "/images/character_bell.jpg",
        scenes: [
            {
                title: "01: The Acoustic Limit",
                timeRange: "00:00 - 00:10",
                description: "Telegraph wires clicked in Morse code, but human emotional speech remained confined by physical distance."
            },
            {
                title: "02: The Liquid Breakthrough",
                timeRange: "00:10 - 00:20",
                description: "A platinum needle dipped in acidified electrolyte converts vocal vibrations into undulating electrical waves."
            },
            {
                title: "03: The Global Grid",
                timeRange: "00:20 - 00:30",
                description: "Copper networks cross oceans, establishing the nervous system for global telecommunications."
            }
        ]
    },
    {
        id: "VID-02",
        assetId: "HA-102",
        title: "Liberating Domestic Labor",
        inventor: "Caroline F. Fleming",
        shortDesc: "How Caroline F. Fleming engineered bidirectional crank agitation to transform harsh manual washboards into efficient domestic mechanics.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Prof. Arthur Pendelton",
        narratorInstitution: "Smithsonian Folkways Archives",
        thumbnailUrl: "/images/character_fleming.jpg",
        scenes: [
            {
                title: "01: The Hand Scour",
                timeRange: "00:00 - 00:10",
                description: "Laundry demanded brutal manual exertion over steaming cauldrons of boiling caustic lye."
            },
            {
                title: "02: The Counterpoise Crank",
                timeRange: "00:10 - 00:20",
                description: "An internal paddle agitator drives dual turbulent water currents through fabrics without tearing."
            },
            {
                title: "03: The Modern Household",
                timeRange: "00:20 - 00:30",
                description: "Paved the mechanical foundation for automated domestic appliances across the 20th century."
            }
        ]
    },
    {
        id: "VID-03",
        assetId: "HA-103",
        title: "Harnessing Prairie Gales",
        inventor: "Henry H. Beville",
        shortDesc: "Self-governing back-geared wind engines that unlocked deep subterranean aquifers across the arid frontier.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Dr. Marcus Thorne",
        narratorInstitution: "Western Agrarian Historical Society",
        thumbnailUrl: "/images/character_beville.jpg",
        scenes: [
            {
                title: "01: The Parched Frontier",
                timeRange: "00:00 - 00:10",
                description: "Great Plains homesteads languished under drought while deep subterranean aquifers lay out of reach."
            },
            {
                title: "02: The Weighted Governor",
                timeRange: "00:10 - 00:20",
                description: "Beville's counterweighted vane automatically feathers the rotor away from destructive tornadic gales."
            },
            {
                title: "03: Agrarian Continuity",
                timeRange: "00:20 - 00:30",
                description: "Uninterrupted freshwater supported cattle herds, transcontinental locomotives, and frontier cities."
            }
        ]
    },
    {
        id: "VID-04",
        assetId: "HA-105",
        title: "Conquering the Night",
        inventor: "Thomas Alva Edison",
        shortDesc: "Edison's 1,200-hour incandescent carbon filament and the birth of central station electrical illumination.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Clara Barton Fellow",
        narratorInstitution: "Edison Electric Historical Institute",
        thumbnailUrl: "/images/character_edison.jpg",
        scenes: [
            {
                title: "01: Flickering Gaslights",
                timeRange: "00:00 - 00:10",
                description: "Nocturnal society risked fire and soot from open gas flames and candles."
            },
            {
                title: "02: Sprengel Vacuum & Bamboo",
                timeRange: "00:10 - 00:20",
                description: "Over 6,000 tested filaments culminated in carbonized Japanese bamboo in a millionth-atmosphere vacuum."
            },
            {
                title: "03: The 24-Hour Civilization",
                timeRange: "00:20 - 00:30",
                description: "Pearl Street central station illuminated lower Manhattan, inaugurating the electrified modern age."
            }
        ]
    }
];
const MOCK_BLUEPRINTS = [
    {
        id: "BP-01",
        title: "Steam Governor Valve",
        type: "BLUEPRINT",
        typeLabel: "Cyanotype Plate",
        format: "US Patent 1884 • High Resolution Scan",
        imageUrl: "/images/thumb_steam_hq.jpg",
        accessionRef: "USPTO Cyanotype #84-GV",
        date: "1884"
    },
    {
        id: "BP-02",
        title: "Astrolabe Reticle Plate",
        type: "3D",
        typeLabel: "3D Photogrammetry",
        format: "Nuremberg Guild • 0.2mm Precision Coordinate Scan",
        imageUrl: "/images/raw_card_4_astrolabe.jpg",
        accessionRef: "Nuremberg Mater #1780-ZOD",
        date: "c. 1780"
    },
    {
        id: "BP-03",
        title: "Bell Telephony Fig. 7",
        type: "BLUEPRINT",
        typeLabel: "Original Patent Draft",
        format: "Washington USPTO Vault • March 1876 Original Filing",
        imageUrl: "/images/raw_card_1_bell.jpg",
        accessionRef: "USPTO Patent Drawing Sheet 1",
        date: "March 7, 1876"
    },
    {
        id: "BP-04",
        title: "Menlo Park Wet Lab",
        type: "PLATE",
        typeLabel: "Collodion Plate",
        format: "Silver Gelatin Print • 1881 Edison Electric Institute",
        imageUrl: "/images/raw_card_5_edison.jpg",
        accessionRef: "Menlo Park Glass Negative #81",
        date: "1881"
    },
    {
        id: "BP-05",
        title: "Caroline Fleming Agitator Mechanics",
        type: "POSTER",
        typeLabel: "Storytelling Poster",
        format: "Curatorial Exhibition Monograph • High Definition Poster",
        imageUrl: "/images/raw_card_2_washing.jpg",
        accessionRef: "IAMS Exhibition Poster Series #04",
        date: "1880 Reconstructed"
    },
    {
        id: "BP-06",
        title: "Iron Duke Prairie Rotor Assembly",
        type: "3D",
        typeLabel: "Reconstructed 3D Visual",
        format: "Aerodynamic Simulation Surface Map",
        imageUrl: "/images/raw_card_3_windmill.jpg",
        accessionRef: "Aero Kinematic Plate #88-B",
        date: "1888 Reconstructed"
    },
    {
        id: "BP-07",
        title: "Nikola Tesla Induction Wavefronts",
        type: "POSTER",
        typeLabel: "Educational Diagram",
        format: "Polyphase Vector Harmonic Map • Technical Archive",
        imageUrl: "/images/raw_card_7_tesla.jpg",
        accessionRef: "Tesla Memorial Archive #381",
        date: "1888"
    },
    {
        id: "BP-08",
        title: "Wright Brothers Aerofoil Aerodynamics",
        type: "PLATE",
        typeLabel: "Archival Illustration",
        format: "Original Wind Tunnel Pressure Balance Schematic",
        imageUrl: "/images/raw_card_6_wright.jpg",
        accessionRef: "Smithsonian Aeronautical Monograph #06",
        date: "1903"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0b7c2odx0j8yd._.js.map