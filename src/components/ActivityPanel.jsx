export default function ActivityPanel() {
  return (
    <div style={{
      background: "white",
      borderRadius: "20px",
      padding: "20px",
      height: "400px"
    }}>
      <h3>Recent Activity</h3>

      <ul style={{ marginTop: "15px", lineHeight: "30px" }}>
        <li>♻️ Plastic detected in Zone A</li>
        <li>🟢 Recycling completed</li>
        <li>⚠️ Battery waste alert</li>
        <li>👤 New user joined</li>
      </ul>
    </div>
  )
}