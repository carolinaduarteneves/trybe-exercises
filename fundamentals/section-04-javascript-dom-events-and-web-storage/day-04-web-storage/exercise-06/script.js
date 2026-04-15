window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content");
    content.style.backgroundColor = color;
  };

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
    }
  };

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size;
    }
  };

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height;
    }
  };

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family;
    }
  };

  
  let backgroundColorButtons = document.querySelectorAll(
    "#background-color>button",
  );
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      const color = event.target.innerHTML;

      setBackgroundColor(color);

      localStorage.setItem("backgroundColor", color);
    });
  }

 
  let fontColorButtons = document.querySelectorAll("#font-color>button");
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      const fontColor = event.target.innerHTML;

      setFontColor(fontColor);

      localStorage.setItem("fontColor", fontColor);
    });
  }

  
  let fontSizeButtons = document.querySelectorAll("#font-size>button");
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML);

      const fontSize = event.target.innerHTML;
      setFontSize(fontSize);
      localStorage.setItem("fontSize", fontSize);
    });
  }


  let lineHeightButtons = document.querySelectorAll("#line-height>button");
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      
      const lineHeight = event.target.innerHTML;
    setLineHeight(lineHeight);
    localStorage.setItem("lineHeight", lineHeight)
      


    });
  }


  let fontFamilyButtons = document.querySelectorAll("#font-family>button");
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);

      const fontFamily = event.target.innerHTML;
      setFontFamily(fontFamily);
      localStorage.setItem("fontFamily", fontFamily);
    });
  }
};
