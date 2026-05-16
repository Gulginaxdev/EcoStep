export default function MapBox() {
  return (
    <div style={{
      marginTop: "25px",
      height: "350px",
      borderRadius: "20px",
      overflow: "hidden"
    }}>
      <iframe
        title="map"
        width="100%"
        height="100%"
        src="https://www.openstreetmap.org/export/embed.html"
      />
    </div>
  )
}