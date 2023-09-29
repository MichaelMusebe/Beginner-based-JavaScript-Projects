const submitBtn = document.querySelector(".submitBtn");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const changeBtn = document.querySelector(".change");
      
      submitBtn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block"; 
      }

      changeBtn.onclick = ()=>{
          widget.style.display = "block";
          post.style.display = "none";
        }