export default function SmokeVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    >
      <source src="/videos/smoke.mp4" type="video/mp4" />
    </video>
  );
}