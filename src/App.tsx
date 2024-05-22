import React from "react";
import "App.css";
import Navbar from "containers/Navbar";
import Sidebar from "containers/Sidebar";
import LeafletMap from "containers/LeafletMap";
import { useGlobalContext } from "contexts/Global";
import Dashboard from "containers/Dashboard";
import LightControl from "containers/LightControl";
import LightSettings from "containers/LightSettings";
import LightSchedule from "containers/LightSchedule";
import { ConfigProvider } from "antd";


function App() {
  const { globalState } = useGlobalContext();
  
  return (
    <div style={{width:'100%', height: '100vh'}} data-theme={globalState.LightMode? "nord" : "luxury"}>
      <Navbar />
      <br />
      <div className="app-div">
        <div style={{ width: '20%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '70%', height: "85%", overflowY: "scroll" }}>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: globalState.LightMode? "#ffffff" : "black",
                colorText: globalState.LightMode? "black" : "#DCA54C",
              },
              components: {
                Table: {
                  borderColor: "transparent",
                  headerSplitColor: "transparent",
                },
              },
            }}
          >
            {globalState.SidebarOption === 'dashboard' && <Dashboard />}
            {globalState.SidebarOption === 'control' && <LightControl />}
            {globalState.SidebarOption === 'schedule' && <LightSchedule />}
            {globalState.SidebarOption === 'map' && <LeafletMap />}
            {globalState.SidebarOption === 'settings' && <LightSettings />}
          </ConfigProvider>
        </div>
      </div>
      
    </div>
  );
}

export default App;
