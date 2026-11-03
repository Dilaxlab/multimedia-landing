module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/inventions/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventionPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$assetService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/assetService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DossierView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/DossierView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-rsc] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.mjs [app-rsc] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"].map((asset)=>({
            id: asset.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const asset = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$assetService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assetService"].getAssetById(id);
    if (!asset) {
        return {
            title: 'Invention Not Found - IAIMS Heritage Archive'
        };
    }
    return {
        title: `${asset.officialTitle || asset.title} (${asset.inventor}) – IAIMS Heritage Archive`,
        description: `${asset.title}: ${asset.desc}. Verified patent ${asset.patent} under USPTO / Smithsonian Standards.`,
        openGraph: {
            title: `${asset.title} – IAIMS Digital Museum Dossier`,
            description: asset.desc,
            images: [
                {
                    url: asset.image,
                    width: 1200,
                    height: 630,
                    alt: asset.title
                }
            ]
        }
    };
}
async function InventionPage({ params }) {
    const { id } = await params;
    const asset = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$assetService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assetService"].getAssetById(id);
    if (!asset) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#050505] text-neutral-200 selection:bg-amber-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(212,175,55,0.05)_0%,_transparent_60%)] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(140,109,59,0.03)_0%,_transparent_70%)] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.015] bg-[radial-gradient(#d4af37_1px,_transparent_1px)] [background-size:32px_32px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-12 pb-24 lg:pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6 lg:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all text-xs sm:text-sm font-medium group active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Back to Archive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "w-3.5 h-3.5 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Verified Patent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 mb-12 lg:mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-5/12 flex flex-col gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/50 shadow-2xl group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: asset.image,
                                            alt: asset.title,
                                            className: "w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-3.5 h-3.5 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            asset.patentDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-3.5 h-3.5 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            asset.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-7/12 flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[2px] w-8 bg-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-amber-400",
                                                children: asset.badge || 'Historical Asset'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3",
                                        children: asset.officialTitle || asset.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-base sm:text-lg text-neutral-300 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: [
                                                    "Invented by ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-semibold",
                                                        children: asset.inventor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8",
                                        children: asset.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-neutral-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-mono uppercase text-neutral-500 mb-1",
                                                        children: "Patent ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white truncate",
                                                        children: asset.patent
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-mono uppercase text-neutral-500 mb-1",
                                                        children: "Discipline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white truncate",
                                                        children: asset.category || 'Engineering'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 sm:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-mono uppercase text-neutral-500 mb-1",
                                                        children: "Format"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-white flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                className: "w-4 h-4 text-amber-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 19
                                                            }, this),
                                                            " 3D Model"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 mb-16 opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent to-amber-500/50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                className: "w-6 h-6 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] w-full max-w-[200px] bg-gradient-to-l from-transparent to-amber-500/50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DossierView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            asset: asset,
                            isStandalonePage: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/inventions/[id]/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/inventions/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/inventions/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/sections/DossierView.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/sections/DossierView.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/sections/DossierView.tsx", "default");
}),
"[project]/src/components/sections/DossierView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DossierView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/sections/DossierView.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DossierView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/services/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base fetch API wrapper prepared for external IAMS (Interactive Asset Metadata Standard) REST API integration.
 */ __turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch
]);
async function apiFetch(endpoint, options = {}) {
    const isMockMode = ("TURBOPACK compile-time value", "true") !== 'false';
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    // In local mock mode or if no external API host is configured, do not trigger external DNS requests
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error('LocalMockModeActive');
    }
    const url = `${baseUrl}${endpoint}`;
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'X-IAMS-Client-Version': ("TURBOPACK compile-time value", "2.4") || '2.4',
        'Accept': 'application/json'
    };
    try {
        const res = await fetch(url, {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers
            }
        });
        if (!res.ok) {
            throw new Error(`IAMS API Error: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.warn(`[IAMS API client] Fallback to verified local mock cache for ${endpoint}`);
        throw error;
    }
}
}),
"[project]/src/services/assetService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assetService",
    ()=>assetService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-rsc] (ecmascript)");
;
;
const assetService = {
    async getAssets () {
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetch"])('/assets');
            return data;
        } catch  {
            // Fallback to verified local curated archive
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"];
        }
    },
    async getAssetById (id) {
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetch"])(`/assets/${id}`);
            return data;
        } catch  {
            if (!id) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"][0];
            const match = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"].find((a)=>a.id.toLowerCase() === id.toLowerCase());
            return match || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_HISTORICAL_ASSETS"][0];
        }
    },
    async filterByCategory (category) {
        const assets = await this.getAssets();
        if (category === 'ALL') return assets;
        return assets.filter((a)=>a.category === category);
    },
    async searchAssets (query) {
        const assets = await this.getAssets();
        const q = query.toLowerCase().trim();
        if (!q) return assets;
        return assets.filter((a)=>a.title.toLowerCase().includes(q) || a.inventor.toLowerCase().includes(q) || a.patent.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q));
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1a287un46sbgn._.js.map