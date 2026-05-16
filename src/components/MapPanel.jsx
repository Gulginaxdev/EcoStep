export default function MapPanel() {
  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      height: "400px",
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