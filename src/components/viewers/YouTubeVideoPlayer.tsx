'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Volume1,
  VolumeX,
  Maximize2,
  Minimize2,
  Settings,
  Subtitles,
  Check,
  Share2,
  SkipBack,
  SkipForward,
} from 'lucide-react';
import { VideoVignette } from '@/types/media';

interface YouTubeVideoPlayerProps {
  video: VideoVignette;
  autoPlay?: boolean;
  initialCaptionsOn?: boolean;
  onEnded?: () => void;
  className?: string;
}

// 6 caption intervals for 30s video (5s each)
interface CaptionCue {
  start: number;
  end: number;
  textEn: string;
  textTa: string;
}

export default function YouTubeVideoPlayer({
  video,
  autoPlay = false,
  initialCaptionsOn = true,
  onEnded,
  className = '',
}: YouTubeVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isCaptionsOn, setIsCaptionsOn] = useState<boolean>(initialCaptionsOn);

  useEffect(() => {
    setIsCaptionsOn(initialCaptionsOn);
  }, [initialCaptionsOn]);
  const [captionLang, setCaptionLang] = useState<'en' | 'ta'>('en');
  const [showSettingsMenu, setShowSettingsMenu] = useState<boolean>(false);
  const [settingsTab, setSettingsTab] = useState<'main' | 'speed' | 'subtitles' | 'quality'>('main');
  const [quality, setQuality] = useState<string>('1080p HD');
  const [showControls, setShowControls] = useState<boolean>(true);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverX, setHoverX] = useState<number>(0);
  const [actionRipple, setActionRipple] = useState<'play' | 'pause' | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const totalDuration = video.totalSeconds || 30;

  // Build realistic narrative captions synchronized across the 30-second timeline
  const captions: CaptionCue[] = [
    {
      start: 0,
      end: 5,
      textEn: `[${video.narrator}]: In the late 19th century, acoustic engineering faced unprecedented challenges.`,
      textTa: `[${video.narrator}]: 19-ஆம் நூற்றாண்டின் பிற்பகுதியில், ஒலி பரிமாற்றத்தில் புதிய தேவைகள் உருவாயின.`,
    },
    {
      start: 5,
      end: 10,
      textEn: `${video.scenes[0]?.description || 'Existing systems were unable to carry clear continuous human voice signals.'}`,
      textTa: 'அப்போது இருந்த அமைப்புகளால் மனிதக் குரலை முழுமையாகத் தொலைவிற்கு அனுப்ப இயலவில்லை.',
    },
    {
      start: 10,
      end: 15,
      textEn: `[Breakthrough]: ${video.inventor} designed a novel mechanism modulating electrical currents directly.`,
      textTa: `${video.inventor} மின்தடையை மாற்றுவதன் மூலம் குரல் அலைகளை நேரடியாகப் பிரதிபலிக்கும் முறையைக் கண்டறிந்தார்.`,
    },
    {
      start: 15,
      end: 20,
      textEn: `${video.scenes[1]?.description || 'The experimental prototype transmitted the first articulate sentences across the wire.'}`,
      textTa: 'சோதனை முன்மாதிரி முதன்முதலாக கம்பியின் வழியே தெளிவான வாக்கியங்களை வெற்றிகரமாக அனுப்பியது.',
    },
    {
      start: 20,
      end: 25,
      textEn: `[Registry]: Certified under official patent records as a pioneering industrial milestone.`,
      textTa: 'அதிகாரப்பூர்வ காப்புரிமைப் பதிவேடுகளில் மைல்கல் கண்டுபிடிப்பாகப் பதிவு செய்யப்பட்டது.',
    },
    {
      start: 25,
      end: 30,
      textEn: `${video.scenes[2]?.description || 'This achievement laid the immutable foundation for modern global telecommunications.'}`,
      textTa: 'இந்த மகத்தான சாதனை இன்றைய நவீன உலகளாவிய தொடர்பு வலைப்பின்னல்களுக்கு அடித்தளமாக அமைந்தது.',
    },
  ];

  // Active Caption based on currentSeconds
  const activeCaption = captions.find(
    (c) => currentSeconds >= c.start && currentSeconds < c.end
  );

  // Current Scene Index: 0 (0-10s), 1 (10-20s), 2 (20-30s)
  const currentSceneIndex = Math.min(2, Math.floor((currentSeconds / totalDuration) * 3));
  const currentScene = video.scenes[currentSceneIndex] || video.scenes[0];

  // Playback Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev + 1 >= totalDuration) {
            if (onEnded) onEnded();
            return 0; // loop or restart
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playbackSpeed, totalDuration, onEnded]);

  // Fullscreen event listener (browser & esc key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!(
        document.fullscreenElement ||
        (document as unknown as { webkitFullscreenElement?: Element }).webkitFullscreenElement
      );
      setIsFullscreen(isFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard Shortcuts (YouTube style: space/k to play, f for fullscreen, c for captions, m for mute)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toLowerCase();
      if (key === ' ' || key === 'k') {
        e.preventDefault();
        togglePlayPause();
      } else if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (key === 'c') {
        e.preventDefault();
        setIsCaptionsOn((prev) => !prev);
      } else if (key === 'm') {
        e.preventDefault();
        setIsMuted((prev) => !prev);
      } else if (key === 'arrowleft' || key === 'j') {
        e.preventDefault();
        seekDelta(-5);
      } else if (key === 'arrowright' || key === 'l') {
        e.preventDefault();
        seekDelta(5);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // Autohide controls on inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying && !showSettingsMenu) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      setActionRipple(next ? 'play' : 'pause');
      setTimeout(() => setActionRipple(null), 500);
      return next;
    });
    setShowControls(true);
  };

  const seekDelta = (seconds: number) => {
    setCurrentSeconds((prev) => Math.max(0, Math.min(totalDuration, prev + seconds)));
    setShowControls(true);
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as unknown as { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen) {
          await (container as unknown as { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as unknown as { webkitExitFullscreen?: () => Promise<void> }).webkitExitFullscreen) {
          await (document as unknown as { webkitExitFullscreen: () => Promise<void> }).webkitExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch {
      // Fallback state toggle
      setIsFullscreen((prev) => !prev);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const newPercent = clickX / rect.width;
    const newSecond = Math.round(newPercent * totalDuration);
    setCurrentSeconds(newSecond);
  };

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const curX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const percent = curX / rect.width;
    setHoverTime(Math.round(percent * totalDuration));
    setHoverX(curX);
  };

  const handleCopyShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const progressPercent = (currentSeconds / totalDuration) * 100;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && !showSettingsMenu && setShowControls(false)}
      className={`group relative select-none overflow-hidden bg-black flex flex-col justify-between ${
        isFullscreen
          ? 'fixed inset-0 z-[9999] w-screen h-screen rounded-none'
          : 'w-full aspect-video rounded-2xl border border-amber-500/25 shadow-2xl'
      } ${className}`}
    >
      {/* Background Poster / Visual Scene Frame */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url(${video.thumbnailUrl})`,
          transform: isPlaying ? 'scale(1.04)' : 'scale(1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

      {/* Ripple Animation Indicator when clicking play/pause */}
      {actionRipple && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-amber-400 animate-ping">
            {actionRipple === 'play' ? (
              <Play className="w-10 h-10 fill-current ml-1" />
            ) : (
              <Pause className="w-10 h-10 fill-current" />
            )}
          </div>
        </div>
      )}

      {/* TOP BAR: Title, Narrator & YouTube Style Share Button */}
      <div
        className={`relative z-20 flex items-center justify-between p-3 sm:p-5 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-neutral-950 font-bold text-xs shrink-0 shadow-md">
            HA
          </div>
          <div className="min-w-0">
            <h3 className="font-serif text-xs sm:text-base text-white font-bold truncate drop-shadow-md">
              {video.title}
            </h3>
            <p className="text-[10px] sm:text-xs font-mono text-amber-300/90 truncate">
              {video.inventor} • Narrated by {video.narrator}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-neutral-200 hover:text-white border border-white/10 text-xs font-mono transition cursor-pointer"
            title="Share Video"
          >
            {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedShare ? 'Copied' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* CENTER STAGE: Clickable surface to toggle play/pause */}
      <div
        onClick={togglePlayPause}
        className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
      >
        {/* Large Central Play Button (visible when paused) */}
        {!isPlaying && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-red-600 to-amber-500 text-white flex items-center justify-center shadow-[0_0_35px_rgba(239,68,68,0.7)] hover:scale-110 active:scale-95 transition-transform">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
          </div>
        )}
      </div>

      {/* YOUTUBE CLOSED CAPTIONS (SUBTITLES) OVERLAY */}
      {isCaptionsOn && activeCaption && (
        <div className="relative z-20 px-4 pb-2 sm:pb-3 flex justify-center pointer-events-none transition-all">
          <div className="bg-black/85 text-white font-sans text-xs sm:text-sm md:text-base font-medium px-3.5 py-1.5 rounded-md shadow-2xl tracking-wide max-w-[90%] sm:max-w-[80%] text-center backdrop-blur-md border border-white/15 drop-shadow-lg leading-relaxed animate-fadeIn">
            {captionLang === 'ta' ? activeCaption.textTa : activeCaption.textEn}
          </div>
        </div>
      )}

      {/* YOUTUBE SETTINGS POPUP MENU */}
      {showSettingsMenu && (
        <div className="absolute right-4 bottom-16 z-30 w-56 sm:w-64 rounded-xl bg-[#121216]/95 border border-white/15 backdrop-blur-xl shadow-2xl p-2 text-xs font-sans text-neutral-200 animate-fadeIn">
          {settingsTab === 'main' && (
            <div className="flex flex-col gap-1">
              <div className="px-3 py-1.5 text-[10px] font-mono text-neutral-400 uppercase border-b border-white/10">
                Player Settings
              </div>

              {/* Playback speed item */}
              <button
                onClick={() => setSettingsTab('speed')}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.08] transition text-left cursor-pointer"
              >
                <span>Playback Speed</span>
                <span className="text-amber-400 font-mono text-[11px]">
                  {playbackSpeed === 1 ? 'Normal' : `${playbackSpeed}x`} ›
                </span>
              </button>

              {/* Subtitles item */}
              <button
                onClick={() => setSettingsTab('subtitles')}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.08] transition text-left cursor-pointer"
              >
                <span>Subtitles / CC</span>
                <span className="text-amber-400 font-mono text-[11px]">
                  {!isCaptionsOn ? 'Off' : captionLang === 'ta' ? 'Tamil' : 'English'} ›
                </span>
              </button>

              {/* Quality item */}
              <button
                onClick={() => setSettingsTab('quality')}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.08] transition text-left cursor-pointer"
              >
                <span>Quality</span>
                <span className="text-amber-400 font-mono text-[11px]">{quality} ›</span>
              </button>
            </div>
          )}

          {/* Speed submenu */}
          {settingsTab === 'speed' && (
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => setSettingsTab('main')}
                className="px-3 py-1.5 text-[11px] font-mono text-amber-400 hover:text-amber-300 text-left border-b border-white/10 mb-1 cursor-pointer"
              >
                ‹ Back to settings
              </button>
              {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setPlaybackSpeed(s);
                    setShowSettingsMenu(false);
                    setSettingsTab('main');
                  }}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/[0.08] cursor-pointer ${
                    playbackSpeed === s ? 'text-amber-400 font-bold' : 'text-neutral-300'
                  }`}
                >
                  <span>{s === 1 ? 'Normal' : `${s}x`}</span>
                  {playbackSpeed === s && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          )}

          {/* Subtitles submenu */}
          {settingsTab === 'subtitles' && (
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => setSettingsTab('main')}
                className="px-3 py-1.5 text-[11px] font-mono text-amber-400 hover:text-amber-300 text-left border-b border-white/10 mb-1 cursor-pointer"
              >
                ‹ Back to settings
              </button>
              <button
                onClick={() => {
                  setIsCaptionsOn(false);
                  setShowSettingsMenu(false);
                  setSettingsTab('main');
                }}
                className={`flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/[0.08] cursor-pointer ${
                  !isCaptionsOn ? 'text-amber-400 font-bold' : 'text-neutral-300'
                }`}
              >
                <span>Off</span>
                {!isCaptionsOn && <Check className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setIsCaptionsOn(true);
                  setCaptionLang('en');
                  setShowSettingsMenu(false);
                  setSettingsTab('main');
                }}
                className={`flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/[0.08] cursor-pointer ${
                  isCaptionsOn && captionLang === 'en' ? 'text-amber-400 font-bold' : 'text-neutral-300'
                }`}
              >
                <span>English [CC]</span>
                {isCaptionsOn && captionLang === 'en' && <Check className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setIsCaptionsOn(true);
                  setCaptionLang('ta');
                  setShowSettingsMenu(false);
                  setSettingsTab('main');
                }}
                className={`flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/[0.08] cursor-pointer ${
                  isCaptionsOn && captionLang === 'ta' ? 'text-amber-400 font-bold' : 'text-neutral-300'
                }`}
              >
                <span>தமிழ் (Tamil) [CC]</span>
                {isCaptionsOn && captionLang === 'ta' && <Check className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}

          {/* Quality submenu */}
          {settingsTab === 'quality' && (
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => setSettingsTab('main')}
                className="px-3 py-1.5 text-[11px] font-mono text-amber-400 hover:text-amber-300 text-left border-b border-white/10 mb-1 cursor-pointer"
              >
                ‹ Back to settings
              </button>
              {['1080p HD', '720p', '480p', 'Auto'].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setQuality(q);
                    setShowSettingsMenu(false);
                    setSettingsTab('main');
                  }}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/[0.08] cursor-pointer ${
                    quality === q ? 'text-amber-400 font-bold' : 'text-neutral-300'
                  }`}
                >
                  <span>{q}</span>
                  {quality === q && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* BOTTOM YOUTUBE CONTROL HUD */}
      <div
        className={`relative z-20 px-3 sm:px-4 pb-2 sm:pb-3.5 pt-6 bg-gradient-to-t from-black via-black/85 to-transparent transition-opacity duration-300 flex flex-col gap-2 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* YOUTUBE PROGRESS & SCRUBBER BAR */}
        <div
          ref={progressBarRef}
          onClick={handleProgressBarClick}
          onMouseMove={handleProgressBarMouseMove}
          onMouseLeave={() => setHoverTime(null)}
          className="relative w-full h-2 group/bar flex items-center cursor-pointer py-2"
        >
          {/* Hover Time Tooltip (YouTube style) */}
          {hoverTime !== null && (
            <div
              style={{ left: `${hoverX}px` }}
              className="absolute -top-7 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[10px] font-mono text-white pointer-events-none shadow-xl whitespace-nowrap z-30"
            >
              0:{hoverTime < 10 ? '0' : ''}{hoverTime}
            </div>
          )}

          {/* Background Track with Tripartite Chapter Divisions */}
          <div className="relative w-full h-1 group-hover/bar:h-1.5 rounded-full bg-white/30 overflow-hidden transition-all">
            {/* Played progress track: YouTube red to gold accent */}
            <div
              className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 rounded-full transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Chapter markers (subtle notch at 10s and 20s) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[33.33%] w-0.5 h-2 bg-black/80 pointer-events-none" />
          <div className="absolute top-1/2 -translate-y-1/2 left-[66.66%] w-0.5 h-2 bg-black/80 pointer-events-none" />

          {/* Scrubber Knob (Thumb) */}
          <div
            style={{ left: `${progressPercent}%` }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 group-hover/bar:w-4 group-hover/bar:h-4 rounded-full bg-red-600 border border-white shadow-md transition-transform scale-0 group-hover/bar:scale-100 pointer-events-none"
          />
        </div>

        {/* CONTROLS ROW */}
        <div className="flex items-center justify-between gap-2 text-white">
          {/* Left Actions: Play/Pause, Rewind, Volume, Time & Chapter */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="p-1 sm:p-1.5 hover:text-amber-400 transition cursor-pointer"
              title={isPlaying ? 'Pause (k)' : 'Play (k)'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Skip Back 10s */}
            <button
              onClick={() => seekDelta(-10)}
              className="p-1 hover:text-amber-400 transition cursor-pointer"
              title="Rewind 10 seconds (j)"
              aria-label="Rewind 10 seconds"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Volume & Slide-out Slider */}
            <div className="flex items-center gap-1.5 group/vol">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 hover:text-amber-400 transition cursor-pointer"
                title={isMuted ? 'Unmute (m)' : 'Mute (m)'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : volume < 0.5 ? (
                  <Volume1 className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  setIsMuted(val === 0);
                }}
                className="w-0 group-hover/vol:w-16 sm:group-hover/vol:w-20 transition-all duration-200 accent-amber-400 cursor-pointer h-1.5 bg-white/20 rounded"
                aria-label="Volume slider"
              />
            </div>

            {/* Time Indicator */}
            <div className="font-mono text-xs text-neutral-300 whitespace-nowrap">
              <span>0:{currentSeconds < 10 ? '0' : ''}{currentSeconds}</span>
              <span className="text-neutral-500 mx-1">/</span>
              <span>0:30</span>
            </div>

            {/* Current Chapter / Scene */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-neutral-400 truncate">
              <span>•</span>
              <span className="text-amber-300 font-medium truncate">
                Scene {currentSceneIndex + 1}: {currentScene.title}
              </span>
            </div>
          </div>

          {/* Right Actions: Closed Captions [CC], Settings, Fullscreen */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* YOUTUBE STYLE [CC] BUTTON */}
            <button
              onClick={() => setIsCaptionsOn(!isCaptionsOn)}
              className={`relative px-2 py-1 rounded transition flex items-center justify-center cursor-pointer ${
                isCaptionsOn
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Subtitles / closed captions (c)"
              aria-label="Subtitles"
            >
              <div className="flex items-center justify-center">
                <Subtitles className="w-5 h-5" />
              </div>
              {/* YouTube style red/gold underline bar when CC is active */}
              {isCaptionsOn && (
                <span className="absolute bottom-0 inset-x-2 h-0.5 bg-red-600 rounded-full" />
              )}
            </button>

            {/* Settings Gear */}
            <button
              onClick={() => {
                setShowSettingsMenu(!showSettingsMenu);
                setSettingsTab('main');
              }}
              className={`p-1.5 rounded hover:text-amber-400 transition cursor-pointer ${
                showSettingsMenu ? 'text-amber-400 rotate-45' : 'text-neutral-300'
              }`}
              title="Settings"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* YOUTUBE STYLE FULLSCREEN BUTTON */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 hover:text-amber-400 transition cursor-pointer"
              title={isFullscreen ? 'Exit full screen (f)' : 'Full screen (f)'}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
