const removeSize = () => {
    const ballon = document.getElementById("ballon");
    const colors = ["blue", "green", "red"];
    let width = parseInt(ballon.style.width) - 5;
    let height = parseInt(ballon.style.height) - 5;
    if (width < 200) {
      ballon.style.width = 200 + "px";
      ballon.style.height = 200 + "px";
    } else {
      ballon.style.width = width + "px";
      ballon.style.height = height + "px";
    }
    const color = ballon.style.backgroundColor;
    ballon.style.backgroundColor =
      colors[(colors.findIndex((e) => e == color) + 1) % 3];
  };
  const addSize = () => {
    const ballon = document.getElementById("ballon");
    const colors = ["red", "green", "blue"];
    let width = parseInt(ballon.style.width) + 10;
    let height = parseInt(ballon.style.height) + 10;
    if (width < 200) {
      ballon.style.width = 200 + "px";
      ballon.style.height = 200 + "px";
      ballon.style.backgroundColor = "red";
    } else {
      ballon.style.width = width + "px";
      ballon.style.height = height + "px";
      const color = ballon.style.backgroundColor;
      ballon.style.backgroundColor =
        colors[(colors.findIndex((e) => e == color) + 1) % 3];
    }
  };