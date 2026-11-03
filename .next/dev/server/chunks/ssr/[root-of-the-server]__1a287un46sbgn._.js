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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.mjs [app-rsc] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-rsc] (ecmascript) <export default as Landmark>");
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
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(140,109,59,0.03)_0%,_transparent_70%)] blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.015] bg-[radial-gradient(#d4af37_1px,_transparent_1px)] [background-size:32px_32px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-amber-400 transition-colors mb-8 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            "Back to Archive"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-5/12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-t-[2rem] rounded-b-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-3 border border-white/10 rounded-xl pointer-events-none z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: asset.image,
                                            alt: asset.title,
                                            className: "w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-6 left-6 right-6 z-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xl border border-amber-500/30 text-[11px] font-mono text-amber-300 flex items-center gap-2 shadow-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            asset.patentDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-neutral-300 flex items-center gap-2 shadow-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-3.5 h-3.5 text-amber-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            asset.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-7/12 flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3 mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this),
                                                    asset.categoryLabel || 'Historical Asset'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-neutral-500 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    " REF: ",
                                                    asset.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-700",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono text-neutral-500 uppercase tracking-wider",
                                                children: asset.era
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4",
                                        children: asset.officialTitle || asset.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-base sm:text-lg text-neutral-400 mb-6 border-l-2 border-amber-500 pl-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5 text-amber-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Invented by ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-semibold",
                                                        children: asset.inventor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl",
                                        children: asset.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-[#0c0c0e]/80 rounded-2xl border border-white/5 overflow-hidden shadow-2xl backdrop-blur-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-5 space-y-4 font-mono text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider",
                                                                        children: "Workshop / Lab"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-neutral-200 text-sm",
                                                                        children: asset.location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider",
                                                                        children: "Patent Gazette"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-400 font-semibold text-sm",
                                                                        children: asset.patent
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-5 space-y-4 font-mono text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider",
                                                                        children: "Materials"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-neutral-200 text-sm",
                                                                        children: asset.medium || 'Mixed Media'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider",
                                                                        children: "Digital Twin Status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-400 flex items-center gap-1.5 font-semibold text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                                lineNumber: 183,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            "Verified Geometry"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/[0.02] border-t border-white/5 p-3 flex justify-between items-center px-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-neutral-500 uppercase tracking-widest",
                                                        children: "Authentication"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-amber-500 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 19
                                                            }, this),
                                                            " USPTO / Smithsonian Standards"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-6 mb-16 opacity-70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500/30"
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rotate-45 bg-amber-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "w-6 h-6 text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rotate-45 bg-amber-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500/30"
                            }, void 0, false, {
                                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$DossierView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            asset: asset,
                            isStandalonePage: true,
                            hideHeroBanner: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/inventions/[id]/page.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/inventions/[id]/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/inventions/[id]/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/inventions/[id]/page.tsx",
        lineNumber: 64,
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
    "Test Taxonomy 01",
    "Test Taxonomy 02",
    "Test Taxonomy 03",
    "Test Taxonomy 04",
    "Test Taxonomy 05",
    "Test Taxonomy 06",
    "Test Taxonomy 07",
    "Test Taxonomy 08",
    "Test Taxonomy 09",
    "Test Taxonomy 10",
    "Test Taxonomy 11",
    "Test Taxonomy 12",
    "Test Taxonomy 13",
    "Test Taxonomy 14",
    "Test Taxonomy 15",
    "Test Taxonomy 16",
    "Test Taxonomy 17",
    "Test Taxonomy 18",
    "Test Taxonomy 19",
    "Test Taxonomy 20",
    "Test Taxonomy 21",
    "Test Taxonomy 22",
    "Test Taxonomy 23",
    "Test Taxonomy 24",
    "Test Taxonomy 25",
    "Test Taxonomy 26",
    "Test Taxonomy 27",
    "Test Taxonomy 28",
    "Test Taxonomy 29",
    "Test Taxonomy 30",
    "Test Taxonomy 31",
    "Test Taxonomy 32",
    "Test Taxonomy 33",
    "Test Taxonomy 34",
    "Test Taxonomy 35",
    "Test Taxonomy 36",
    "Test Taxonomy 37",
    "Test Taxonomy 38",
    "Test Taxonomy 39",
    "Test Taxonomy 40",
    "Test Taxonomy 41",
    "Test Taxonomy 42",
    "Test Taxonomy 43",
    "Test Taxonomy 44",
    "Test Taxonomy 45",
    "Test Taxonomy 46",
    "Test Taxonomy 47",
    "Test Taxonomy 48",
    "Test Taxonomy 49",
    "Test Taxonomy 50",
    "Test Taxonomy 51",
    "Test Taxonomy 52",
    "Test Taxonomy 53",
    "Test Taxonomy 54",
    "Test Taxonomy 55",
    "Test Taxonomy 56",
    "Test Taxonomy 57",
    "Test Taxonomy 58",
    "Test Taxonomy 59",
    "Test Taxonomy 60",
    "Test Taxonomy 61",
    "Test Taxonomy 62",
    "Test Taxonomy 63",
    "Test Taxonomy 64"
];
const MOCK_HISTORICAL_ASSETS = [
    {
        id: "HA-100",
        title: "Asset-1",
        officialTitle: "Asset-1 Official Title",
        inventor: "Inventor A",
        patent: "Pat. #249,002 • 1881",
        patentDate: "November 1, 2026",
        location: "Location A",
        category: "TIME",
        categoryLabel: "Category Label A",
        badge: "ABC Vault",
        image: "/images/character_beville.jpg",
        desc: "Test description for Asset-1.",
        polyCount: "142,000 Quads",
        medium: "Material A • Material B • Material C",
        resonance: "Test Resonance A",
        era: "Golden Age (1871-1910)",
        modelType: "ABC",
        schematicImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
        videoDuration: "0:30",
        story: "Test story text for Asset-1.",
        mechanics: "Test mechanics text for Asset-1.",
        legacy: "Test legacy text for Asset-1.",
        curatorQuote: "Test curator quote for Asset-1.",
        curatorAuthor: "Test Curator A, Test Institution A",
        blueprintLedger: [
            {
                item: "Test Blueprint Item 1",
                spec: "Test spec 1"
            },
            {
                item: "Test Blueprint Item 2",
                spec: "Test spec 2"
            },
            {
                item: "Test Blueprint Item 3",
                spec: "Test spec 3"
            },
            {
                item: "Test Blueprint Item 4",
                spec: "Test spec 4"
            }
        ],
        hotspots: [
            {
                id: 1,
                title: "Hotspot 1",
                desc: "Test hotspot description 1.",
                pos: [
                    35,
                    42
                ]
            },
            {
                id: 2,
                title: "Hotspot 2",
                desc: "Test hotspot description 2.",
                pos: [
                    62,
                    58
                ]
            }
        ]
    },
    {
        id: "HA-101",
        title: "Asset-2",
        officialTitle: "Asset-2 Official Title",
        inventor: "Inventor B",
        patent: "Pat. #174,465 • 1876",
        patentDate: "Test Date B",
        location: "Location B",
        category: "TELECOM",
        categoryLabel: "Category Label B",
        badge: "3D Vault",
        image: "/images/character_bell.jpg",
        desc: "Test description for Asset-2.",
        polyCount: "84,000 Quads",
        medium: "Material D • Material E",
        resonance: "Test Resonance B",
        era: "Golden Age (1871-1910)",
        modelType: "bell",
        schematicImage: "/images/character_bell.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-2.",
        mechanics: "Test mechanics text for Asset-2.",
        legacy: "Test legacy text for Asset-2.",
        curatorQuote: "Test curator quote for Asset-2.",
        curatorAuthor: "Test Curator B, Test Institution B",
        blueprintLedger: [
            {
                item: "Test Blueprint Item A",
                spec: "Test spec A"
            },
            {
                item: "Test Blueprint Item B",
                spec: "Test spec B"
            },
            {
                item: "Test Blueprint Item C",
                spec: "Test spec C"
            },
            {
                item: "Test Blueprint Item D",
                spec: "Test spec D"
            }
        ],
        hotspots: [
            {
                id: 1,
                title: "Hotspot A",
                desc: "Test hotspot description A.",
                pos: [
                    45,
                    32
                ]
            },
            {
                id: 2,
                title: "Hotspot B",
                desc: "Test hotspot description B.",
                pos: [
                    55,
                    68
                ]
            }
        ]
    },
    {
        id: "HA-102",
        title: "Asset-3",
        inventor: "Inventor C",
        patent: "Pat. #231,554 • 1880",
        patentDate: "Test Date C",
        location: "Location C",
        category: "DOMESTIC",
        categoryLabel: "Category Label C",
        badge: "Kinetic Model",
        image: "/images/character_fleming.jpg",
        desc: "Test description for Asset-3.",
        polyCount: "76,000 Quads",
        medium: "Material F • Material G",
        resonance: "Test Resonance C",
        era: "Golden Age (1871-1910)",
        modelType: "fleming",
        schematicImage: "/images/character_fleming.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-3.",
        mechanics: "Test mechanics text for Asset-3.",
        legacy: "Test legacy text for Asset-3."
    },
    {
        id: "HA-103",
        title: "Asset-4",
        inventor: "Inventor D",
        patent: "Pat. #262,912 • 1882",
        patentDate: "Test Date D",
        location: "Location D",
        category: "WIND",
        categoryLabel: "Category Label D",
        badge: "Aero Twin",
        image: "/images/character_beville.jpg",
        desc: "Test description for Asset-4.",
        polyCount: "92,000 Quads",
        medium: "Material H • Material I",
        resonance: "Test Resonance D",
        era: "Golden Age (1871-1910)",
        modelType: "beville",
        schematicImage: "/images/character_beville.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-4.",
        mechanics: "Test mechanics text for Asset-4.",
        legacy: "Test legacy text for Asset-4."
    },
    {
        id: "HA-104",
        title: "Asset-5",
        inventor: "Inventor E",
        patent: "Circa 1843 • Rare Artifact",
        patentDate: "c. 1843",
        location: "Location E",
        category: "TIME",
        categoryLabel: "Category Label E",
        badge: "Cosmic Vault",
        image: "/images/character_ada.jpg",
        desc: "Test description for Asset-5.",
        polyCount: "110,000 Quads",
        medium: "Material J • Material K",
        resonance: "Test Resonance E",
        era: "Pre-Industrial Enlightenment",
        modelType: "astrolabe",
        schematicImage: "/images/character_ada.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-5.",
        mechanics: "Test mechanics text for Asset-5.",
        legacy: "Test legacy text for Asset-5."
    },
    {
        id: "HA-105",
        title: "Asset-6",
        inventor: "Inventor F",
        patent: "Pat. #223,898 • 1880",
        patentDate: "Test Date F",
        location: "Location F",
        category: "DOMESTIC",
        categoryLabel: "Category Label F",
        badge: "Filament Model",
        image: "/images/character_edison.jpg",
        desc: "Test description for Asset-6.",
        polyCount: "62,000 Quads",
        medium: "Material L • Material M",
        resonance: "Test Resonance F",
        era: "Golden Age (1871-1910)",
        modelType: "bell",
        schematicImage: "/images/character_edison.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-6.",
        mechanics: "Test mechanics text for Asset-6.",
        legacy: "Test legacy text for Asset-6."
    },
    {
        id: "HA-106",
        title: "Asset-7",
        inventor: "Inventor G",
        patent: "Pat. #821,393 • 1906",
        patentDate: "Test Date G",
        location: "Location G",
        category: "AERO",
        categoryLabel: "Category Label G",
        badge: "Aero Kinematics",
        image: "/images/character_wright.jpg",
        desc: "Test description for Asset-7.",
        polyCount: "115,000 Quads",
        medium: "Material N • Material O",
        resonance: "Test Resonance G",
        era: "Early Modern (1911-1950)",
        modelType: "wright",
        schematicImage: "/images/character_wright.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-7.",
        mechanics: "Test mechanics text for Asset-7.",
        legacy: "Test legacy text for Asset-7."
    },
    {
        id: "HA-107",
        title: "Asset-8",
        inventor: "Inventor H",
        patent: "Pat. #381,968 • 1888",
        patentDate: "Test Date H",
        location: "Location H",
        category: "TELECOM",
        categoryLabel: "Category Label H",
        badge: "Rotational Core",
        image: "/images/character_tesla.jpg",
        desc: "Test description for Asset-8.",
        polyCount: "88,000 Quads",
        medium: "Material P • Material Q",
        resonance: "Test Resonance H",
        era: "Golden Age (1871-1910)",
        modelType: "tesla",
        schematicImage: "/images/character_tesla.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-8.",
        mechanics: "Test mechanics text for Asset-8.",
        legacy: "Test legacy text for Asset-8."
    },
    {
        id: "HA-108",
        title: "Asset-9",
        inventor: "Inventor I",
        patent: "Archival Registry #1849",
        patentDate: "Circa 1849",
        location: "Location I",
        category: "COMPUTING",
        categoryLabel: "Category Label I",
        badge: "Gear Core",
        image: "/images/character_babbage.jpg",
        desc: "Test description for Asset-9.",
        polyCount: "140,000 Quads",
        medium: "Material R • Material S",
        resonance: "Test Resonance I",
        era: "Industrial Era (1760-1870)",
        modelType: "babbage",
        schematicImage: "/images/character_babbage.jpg",
        videoDuration: "0:30",
        story: "Test story text for Asset-9.",
        mechanics: "Test mechanics text for Asset-9.",
        legacy: "Test legacy text for Asset-9."
    },
    {
        id: "HA-109",
        title: "Asset-10",
        officialTitle: "Asset-10 Official Title",
        inventor: "Inventor J",
        patent: "Pat. #174,465 • 1876",
        patentDate: "Test Date J",
        location: "Location J",
        category: "TELECOM",
        categoryLabel: "Category Label J",
        badge: "Centennial Gold",
        image: "/images/character_bell.jpg",
        desc: "Test description for Asset-10.",
        polyCount: "98,000 Quads",
        medium: "Material T • Material U • Material V",
        resonance: "Test Resonance J",
        era: "Golden Age (1871-1910)",
        modelType: "telephone",
        schematicImage: "/images/character_bell.jpg",
        videoDuration: "0:30",
        curatorQuote: "Test curator quote for Asset-10.",
        curatorAuthor: "Test Curator J, Test Institution J",
        story: "Test story text for Asset-10.",
        mechanics: "Test mechanics text for Asset-10.",
        legacy: "Test legacy text for Asset-10.",
        blueprintLedger: [
            {
                item: "Test Blueprint Item X",
                spec: "Test spec X"
            },
            {
                item: "Test Blueprint Item Y",
                spec: "Test spec Y"
            },
            {
                item: "Test Blueprint Item Z",
                spec: "Test spec Z"
            },
            {
                item: "Test Blueprint Item W",
                spec: "Test spec W"
            }
        ],
        hotspots: [
            {
                id: 1,
                title: "Hotspot X",
                desc: "Test hotspot description X.",
                pos: [
                    35,
                    45
                ]
            },
            {
                id: 2,
                title: "Hotspot Y",
                desc: "Test hotspot description Y.",
                pos: [
                    65,
                    52
                ]
            },
            {
                id: 3,
                title: "Hotspot Z",
                desc: "Test hotspot description Z.",
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
        title: "Test Vignette 1",
        inventor: "Inventor B",
        shortDesc: "Test short description for vignette 1.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Test Narrator A",
        narratorInstitution: "Test Institution A",
        thumbnailUrl: "/images/character_bell.jpg",
        scenes: [
            {
                title: "01: Test Scene One",
                timeRange: "00:00 - 00:10",
                description: "Test scene description one."
            },
            {
                title: "02: Test Scene Two",
                timeRange: "00:10 - 00:20",
                description: "Test scene description two."
            },
            {
                title: "03: Test Scene Three",
                timeRange: "00:20 - 00:30",
                description: "Test scene description three."
            }
        ]
    },
    {
        id: "VID-02",
        assetId: "HA-102",
        title: "Test Vignette 2",
        inventor: "Inventor C",
        shortDesc: "Test short description for vignette 2.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Test Narrator B",
        narratorInstitution: "Test Institution B",
        thumbnailUrl: "/images/character_fleming.jpg",
        scenes: [
            {
                title: "01: Test Scene A",
                timeRange: "00:00 - 00:10",
                description: "Test scene description A."
            },
            {
                title: "02: Test Scene B",
                timeRange: "00:10 - 00:20",
                description: "Test scene description B."
            },
            {
                title: "03: Test Scene C",
                timeRange: "00:20 - 00:30",
                description: "Test scene description C."
            }
        ]
    },
    {
        id: "VID-03",
        assetId: "HA-103",
        title: "Test Vignette 3",
        inventor: "Inventor D",
        shortDesc: "Test short description for vignette 3.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Test Narrator C",
        narratorInstitution: "Test Institution C",
        thumbnailUrl: "/images/character_beville.jpg",
        scenes: [
            {
                title: "01: Test Scene D",
                timeRange: "00:00 - 00:10",
                description: "Test scene description D."
            },
            {
                title: "02: Test Scene E",
                timeRange: "00:10 - 00:20",
                description: "Test scene description E."
            },
            {
                title: "03: Test Scene F",
                timeRange: "00:20 - 00:30",
                description: "Test scene description F."
            }
        ]
    },
    {
        id: "VID-04",
        assetId: "HA-105",
        title: "Test Vignette 4",
        inventor: "Inventor F",
        shortDesc: "Test short description for vignette 4.",
        duration: "0:30",
        totalSeconds: 30,
        narrator: "Test Narrator D",
        narratorInstitution: "Test Institution D",
        thumbnailUrl: "/images/character_edison.jpg",
        scenes: [
            {
                title: "01: Test Scene G",
                timeRange: "00:00 - 00:10",
                description: "Test scene description G."
            },
            {
                title: "02: Test Scene H",
                timeRange: "00:10 - 00:20",
                description: "Test scene description H."
            },
            {
                title: "03: Test Scene I",
                timeRange: "00:20 - 00:30",
                description: "Test scene description I."
            }
        ]
    }
];
const MOCK_BLUEPRINTS = [
    {
        id: "BP-01",
        title: "Test Blueprint 1",
        type: "BLUEPRINT",
        typeLabel: "Test Type Label 1",
        format: "Test format 1",
        imageUrl: "/images/thumb_steam_hq.jpg",
        accessionRef: "TEST-REF-01",
        date: "1884"
    },
    {
        id: "BP-02",
        title: "Test Blueprint 2",
        type: "3D",
        typeLabel: "Test Type Label 2",
        format: "Test format 2",
        imageUrl: "/images/raw_card_4_astrolabe.jpg",
        accessionRef: "TEST-REF-02",
        date: "c. 1780"
    },
    {
        id: "BP-03",
        title: "Test Blueprint 3",
        type: "BLUEPRINT",
        typeLabel: "Test Type Label 3",
        format: "Test format 3",
        imageUrl: "/images/raw_card_1_bell.jpg",
        accessionRef: "TEST-REF-03",
        date: "March 7, 1876"
    },
    {
        id: "BP-04",
        title: "Test Blueprint 4",
        type: "PLATE",
        typeLabel: "Test Type Label 4",
        format: "Test format 4",
        imageUrl: "/images/raw_card_5_edison.jpg",
        accessionRef: "TEST-REF-04",
        date: "1881"
    },
    {
        id: "BP-05",
        title: "Test Blueprint 5",
        type: "POSTER",
        typeLabel: "Test Type Label 5",
        format: "Test format 5",
        imageUrl: "/images/raw_card_2_washing.jpg",
        accessionRef: "TEST-REF-05",
        date: "1880 Reconstructed"
    },
    {
        id: "BP-06",
        title: "Test Blueprint 6",
        type: "3D",
        typeLabel: "Test Type Label 6",
        format: "Test format 6",
        imageUrl: "/images/raw_card_3_windmill.jpg",
        accessionRef: "TEST-REF-06",
        date: "1888 Reconstructed"
    },
    {
        id: "BP-07",
        title: "Test Blueprint 7",
        type: "POSTER",
        typeLabel: "Test Type Label 7",
        format: "Test format 7",
        imageUrl: "/images/raw_card_7_tesla.jpg",
        accessionRef: "TEST-REF-07",
        date: "1888"
    },
    {
        id: "BP-08",
        title: "Test Blueprint 8",
        type: "PLATE",
        typeLabel: "Test Type Label 8",
        format: "Test format 8",
        imageUrl: "/images/raw_card_6_wright.jpg",
        accessionRef: "TEST-REF-08",
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