'use client';

import { useState, useCallback } from 'react';

export function use3DController(initialModel = 'bell') {
  const [activeModel, setActiveModel] = useState<string>(initialModel);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState<number>(4.8);

  const toggleWireframe = useCallback(() => {
    setIsWireframe(prev => !prev);
  }, []);

  const toggleAutoRotate = useCallback(() => {
    setIsAutoRotating(prev => !prev);
  }, []);

  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.max(2.5, prev - 0.4));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.min(8.0, prev + 0.4));
  }, []);

  const resetControls = useCallback(() => {
    setZoomLevel(4.8);
    setIsWireframe(false);
    setIsAutoRotating(true);
    setLightingMode('spotlight');
  }, []);

  return {
    activeModel,
    setActiveModel,
    isWireframe,
    toggleWireframe,
    isAutoRotating,
    toggleAutoRotate,
    lightingMode,
    setLightingMode,
    zoomLevel,
    zoomIn,
    zoomOut,
    resetControls,
  };
}
