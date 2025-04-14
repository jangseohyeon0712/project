let styles = [];

async function loadData() {
  const res = await fetch("data.json");
  styles = await res.json();
  loadStyles();
}


