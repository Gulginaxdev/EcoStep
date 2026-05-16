import Card from "./Card"

export default function StatGrid() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "15px",
      marginTop: "20px"
    }}>
      <Card title="Reports" number="24" />
      <Card title="Resolved" number="12" />
      <Card title="Active" number="8" />
      <Card title="Users" number="120" />
    </div>
  )
}