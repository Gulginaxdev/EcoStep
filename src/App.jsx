import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"
import StatGrid from "./components/StatGrid"
import MapPanel from "./components/MapPanel"
import ActivityPanel from "./components/ActivityPanel"

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7f5" }}>

      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>

        <TopBar />

        <StatGrid />

        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "20px"
        }}>
          <MapPanel />
          <ActivityPanel />
        </div>

      </div>
    </div>
  )
}