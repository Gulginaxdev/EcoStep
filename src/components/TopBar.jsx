export default function TopBar() {
  return (
    <div style={{
      background: "white",
      padding: "15px 20px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>Dashboard Overview</h2>

      <input
        placeholder="Search..."
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      />
    </div>
  )
}