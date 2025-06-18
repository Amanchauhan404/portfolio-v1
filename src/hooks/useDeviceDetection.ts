// Custom hook to detect device capabilities for performance optimization
// Helps adjust animations and effects based on device performance
import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  // Device information state
  const [deviceInfo, setDeviceInfo] = useState({
    isLowEnd: false,    // Whether device has limited performance
    isMobile: false,    // Whether device is mobile
    cores: 4,          // Number of CPU cores
    memory: 4          // Available memory in GB
  });

  useEffect(() => {
    // Detect mobile devices using user agent
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Get hardware information (with fallbacks)
    const cores = navigator.hardwareConcurrency || 4; // CPU cores, default to 4
    const memory = (navigator as any).deviceMemory || 4; // RAM in GB, default to 4
    
    // Determine if device is low-end based on specs
    // Mobile devices and devices with limited resources get optimized experience
    const isLowEnd = cores <= 4 || memory <= 2 || isMobile;

    // Update device info state
    setDeviceInfo({ isLowEnd, isMobile, cores, memory });
  }, []);

  return deviceInfo;
};
