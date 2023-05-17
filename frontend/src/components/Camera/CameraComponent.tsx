import React, { useRef, useState } from 'react';

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photoData, setPhotoData] = useState<string | null>(null);

  // Function to start the video stream from the camera
  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  // Function to stop the video stream from the camera
  const stopVideoStream = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    const tracks = stream?.getTracks() ?? [];
    tracks.forEach((track) => {
      track.stop();
    });
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  // Function to take a photo
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (video && canvas && context) {
      // Set the canvas size to match the video stream size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image data in base64 format
      const photo = canvas.toDataURL('image/jpeg');

      setPhotoData(photo);
      stopVideoStream();
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
      <button onClick={startVideoStream}>Start Camera</button>
      <button onClick={takePhoto}>Take Photo</button>
      {photoData && <img src={photoData} alt="Photo" />}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default CameraComponent;
