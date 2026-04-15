const images = import.meta.glob("../assets/images/*.{jpg,jpeg,png}", {
  eager: true,
});
const videos = import.meta.glob("../assets/videos/*.mp4", {
  eager: true,
});

const GaleryPage = () => {
  return (
    <>
      <div className="bg-black min-h-screen px-6 py-10">
        <div className="columns-3 md:columns-3 lg:columns-4 gap-4">
          {Object.values(images).map((img, i) => (
            <img
              key={`img-${i}`}
              src={img.default}
              alt={`image ${i + 1}`}
              className="mb-4 w-full rounded-xl break-inside-avoid"
              loading="lazy"
            />
          ))}

          {Object.values(videos).map((video, i) => (
            <video
              key={`video-${i}`}
              src={video.default}
              controls
              preload="metadata"
              className="mb-4 w-full rounded-xl break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GaleryPage;
