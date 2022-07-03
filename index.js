window.addEventListener("scroll", function() {
    document.getElementById('par').style.left = '0%'
      const distance = window.scrollY;
      document.querySelector(".par").style.transform = `translateY(${distance *
        1}px)`;
      document.querySelector(
        ".par"
      ).style.transform = `translateY(${distance * 1}px)`;
      setTimeout(() => {
    });})

    window.addEventListener("scroll", function() {
        document.getElementById('img').style.left = '0%'
          const distance = window.scrollY;
          document.querySelector(".img").style.transform = `translateY(${distance *
            -1}px)`;
          document.querySelector(
            ".img"
          ).style.transform = `translateY(${distance * -1}px)`;
          setTimeout(() => {
        });})
    