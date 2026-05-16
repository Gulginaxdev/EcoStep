export default function Sidebar() {
  return (
    <div style={{
      width: "240px",
      background: "#ffffff",
      padding: "20px",
      borderRight: "1px solid #eaeaea"
    }}>
      <h2 style={{ color: "#1f7a4d", marginBottom: "30px" }}>
        EcoStep 🌿
      </h2>

      {["Dashboard", "Reports", "Map", "Analytics", "Settings"].map(item => (
        <button key={item} style={btn}>
          {item}
        </button>
      ))}
    </div>
  )
}

const btn = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  border: "none",
  borderRadius: "10px",
  background: "#f1f7f3",
  textAlign: "left",
  cursor: "pointer"
}