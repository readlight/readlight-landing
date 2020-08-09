import { useState, useEffect } from 'react';

export default function useDeviceDetect(): {
  isMobile: boolean;
  setDevice: (isMobile: boolean) => void;
} {
  const isClient = typeof window === 'object';

  function updateDeviceInformation(isMobile) {
    return {
      isMobile: undefined,
      setDevice: setDeviceListner,
    };
  }

  const [device, setDevice] = useState(updateDeviceInformation(undefined));

  function setInnerDevice(isMobile: boolean) {
    setDevice({ isMobile: isMobile, setDevice: setInnerDevice });
  }

  function setDeviceListner(isMobile) {
    setDevice(updateDeviceInformation(isMobile));
  }

  function sayHi() {
    console.log(device.isMobile);
  }

  return device;
}
