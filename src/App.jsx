import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import MapBox from "./components/MapBox"

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>

        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
          EcoStep Dashboard 🌿
        </h1>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "15px"
        }}>
          <Card title="Reports" number="24" />
          <Card title="Resolved" number="12" />
          <Card title="Active Issues" number="8" />
          <Card title="Users" number="120" />
        </div>

        <Hero />

        <MapBox />

      </div>
    </div>
  )
}