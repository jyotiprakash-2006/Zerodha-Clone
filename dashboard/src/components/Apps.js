import React from "react";

const Apps = () => {
  const appList = [
    {
      name: "Kite Connect",
      desc: "Super simple HTTP APIs for building algorithmic trading strategies and applications.",
      icon: "fa-solid fa-terminal",
      link: "https://kite.trade",
    },
    {
      name: "Console",
      desc: "The central reporting dashboard for your trades, tax statements, and portfolios.",
      icon: "fa-solid fa-chart-pie",
      link: "https://console.zerodha.com",
    },
    {
      name: "Coin",
      desc: "Direct mutual funds investment platform with zero commission.",
      icon: "fa-solid fa-coins",
      link: "https://coin.zerodha.com",
    },
    {
      name: "Varsity",
      desc: "Comprehensive market education cards, modules, and certifications.",
      icon: "fa-solid fa-graduation-cap",
      link: "https://zerodha.com/varsity",
    },
    {
      name: "Smallcase",
      desc: "Thematic baskets of stocks and ETFs built by registered professionals.",
      icon: "fa-solid fa-cubes",
      link: "https://smallcase.com",
    },
    {
      name: "Streak",
      desc: "Create, backtest, and deploy algorithmic trading strategies without coding.",
      icon: "fa-solid fa-bolt",
      link: "https://streak.tech",
    },
  ];

  return (
    <div>
      <h3 className="title">Apps &amp; Integrations</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {appList.map((app, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "#f0f4ff",
                  color: "#4184f3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                <i className={app.icon}></i>
              </div>
              <h5 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "600", color: "#333" }}>{app.name}</h5>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.5", marginBottom: "16px" }}>
              {app.desc}
            </p>
            <a
              href={app.link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "0.8rem",
                color: "#4184f3",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Open App &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
