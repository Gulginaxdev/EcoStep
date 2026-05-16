export default function Card({ title, number }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
    }}>
      <p style={{ color: "gray" }}>{title}</p>
      <h2 style={{ color: "#198754" }}>{number}</h2>
    </div>
  )
}