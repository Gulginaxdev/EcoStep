export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "white",
      padding: "20px",
      borderRight: "1px solid #ddd"
    }}>
      <h2 style={{ color: "#1f7a4d", marginBottom: "30px" }}>
        EcoStep 🌿
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button style={btn}>Dashboard</button>
        <button style={btn}>Reports</button>
        <button style={btn}>Map</button>
        <button style={btn}>Settings</button>
      </div>
    </div>
  )
}

const btn = {
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  background: "#eef7f1",
  textAlign: "left"
}