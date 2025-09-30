document.addEventListener("DOMContentLoaded", function () {
  // -------------------- Data --------------------
  const nodes = [
    { id: "Domain Knowledge", group: "core" },
    { id: "Process design", group: "method" },
    { id: "Design", group: "method" },
    { id: "Modeling", group: "method" },
    { id: "Optimization", group: "method" },
    { id: "Operation", group: "method" },

    { id: "Energy Systems", group: "domain" },
    { id: "Smart manufacturing", group: "domain" },
    { id: "Molecular Systems", group: "domain" },
    { id: "Healthcare", group: "domain" }
  ];

  // Only create method–domain links (no core links)
  const links = [];
  const methods = nodes.filter(n => n.group === "method").map(n => n.id);
  const domains = nodes.filter(n => n.group === "domain").map(n => n.id);

  domains.forEach(d => {
    methods.forEach(m => links.push({ source: m, target: d }));
  });

  // -------------------- SVG container --------------------
  const width = 900, height = 400;
  const svg = d3.select("#pse-radial-force")
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .classed("svg-content", true);

  // -------------------- Forces --------------------
  const radiusMethod = 80;
  const radiusDomain = 180;
  const center = { x: width / 2, y: height / 2 };

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(160))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("collision", d3.forceCollide(40))
    .force("x", d3.forceX(d => {
      if (d.group === "core") return center.x;
      if (d.group === "method") return center.x + radiusMethod * Math.cos(methods.indexOf(d.id) * 2 * Math.PI / methods.length);
      if (d.group === "domain") return center.x + radiusDomain * Math.cos(domains.indexOf(d.id) * 2 * Math.PI / domains.length);
    }).strength(0.7))
    .force("y", d3.forceY(d => {
      if (d.group === "core") return center.y;
      if (d.group === "method") return center.y + radiusMethod * Math.sin(methods.indexOf(d.id) * 2 * Math.PI / methods.length);
      if (d.group === "domain") return center.y + radiusDomain * Math.sin(domains.indexOf(d.id) * 2 * Math.PI / domains.length);
    }).strength(0.7));

  // -------------------- Links --------------------
  const link = svg.append("g")
    .attr("stroke", "#aaa")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", 2);

  // -------------------- Nodes --------------------
  const node = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", d => d.group === "core" ? 24 : (d.group === "method" ? 16 : 12))
    .attr("fill", d => d.group === "core" ? "#ff7f0e" :
                      d.group === "method" ? "#1f77b4" : "#32CD32")
    .attr("stroke", "#292929")
    .attr("stroke-width", 1)
    .on("mouseover", highlightLinks)
    .on("mouseout", resetHighlight)
    .call(drag(simulation));

  // -------------------- Labels --------------------
  const label = svg.append("g")
    .selectAll("text")
    .data(nodes)
    .join("text")
    .attr("dy", 15)
    .attr("text-anchor", "middle")
    .attr("fill", "#6B8E23")
    .style("font-size", "14px")
    .style("pointer-events", "none")
    .text(d => d.id);

  // -------------------- Simulation tick --------------------
  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    label
      .attr("x", d => d.x)
      .attr("y", d => d.y - 28);

    pulse.attr("cx", d => d.x)
        .attr("cy", d => d.y);
  });

  // -------------------- Hover highlighting --------------------
  function highlightLinks(event, d) {
    const connected = new Set();
    links.forEach(l => {
      if (l.source.id === d.id) connected.add(l.target.id);
      if (l.target.id === d.id) connected.add(l.source.id);
    });
    node.attr("opacity", n =>
      n.id === d.id ? "gold" : connected.has(n.id) ? 1: 0.2
    );
    link.attr("stroke-opacity", l =>
      l.source.id === d.id || l.target.id === d.id ? 0.9 : 0.1
    );
  }
  function resetHighlight() {
    node.attr("opacity", 1);
    link.attr("stroke-opacity", 0.6);
  }


  // -------------------- Drag behavior --------------------
  function drag(simulation) {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
  }

  // -------------------- Pulses along links --------------------
  // const pulse = svg.append("g")
  //   .selectAll("circle")
  //   .data(links)
  //   .join("circle")
  //   .attr("r", 3)
  //   .attr("fill", "orange")
  //   .attr("opacity", 0.7);
  const pulse = svg.append("g")
    .selectAll("circle")
    .data(links)
    .join("circle")
    .attr("r", 3)
    .attr("fill", "#ffffffff")
    .attr("opacity", 0.7)
    .attr("stroke", "#000000ff")
    .attr("stroke-width", 1)
    .attr("stroke-opacity", 0.8);

  function animatePulses() {
    pulse
      .attr("cx", d => d.source.x)
      .attr("cy", d => d.source.y)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("cx", d => d.target.x)
      .attr("cy", d => d.target.y)
      .on("end", animatePulses);
  }
  animatePulses();
});
