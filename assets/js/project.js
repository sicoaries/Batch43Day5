let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  let nodejs = document.getElementById("nodejs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let vuejs = document.getElementById("vuejs").checked;
  let python = document.getElementById("python").checked;
  let get_start_date = document.getElementById("input-startdate").value;
  let get_end_date = document.getElementById("input-enddate").value;
  validation(project, description, image);
  image = URL.createObjectURL(image[0]);
  if (nodejs == true) {
    nodejs = document.getElementById("nodejs").value;
  } else {
    nodejs = "";
  }
  if (reactjs == true) {
    reactjs = document.getElementById("reactjs").value;
  } else {
    reactjs = "";
  }
  if (vuejs == true) {
    vuejs = document.getElementById("vuejs").value;
  } else {
    vuejs = "";
  }
  if (python == true) {
    python = document.getElementById("python").value;
  } else {
    python = "";
  }
  let blog = {
    project: project,
    description: description,
    image: image,
    nodejs: nodejs,
    reactjs: reactjs,
    vuejs: vuejs,
    python: python,
    get_start_date: get_start_date,
    get_end_date: get_end_date,
  };
  blogs.push(blog);
  renderBlog();
}

function validation(project, description, image) {
  if (project == "") {
    return alert("Mohon isikan Kolom Project");
  } else if (description == "") {
    return alert("Mohon isikan Kolom Deskripsi");
  } else if (image.length == 0) {
    return alert("Mohon masukkan gambar");
  }
}

function renderBlog() {
  document.getElementById("blogs").innerHTML = `
    `;

  for (let i in blogs) {
    document.getElementById("blogs").innerHTML += `
    <div class="box-blog1">
      <img
        src="${blogs[i].image}"
        class="image"
        alt="kokoro"
      /> 
      <a href="detail.html">
      <h3>${blogs[i].project}</h3>
      </a>
      <p>Durasi: ${getDate(blogs[i].get_start_date, blogs[i].get_end_date)}</p>
      <p>
        ${blogs[i].description}
      </p>
      <i class="${blogs[i].nodejs}"></i>
      <i class="${blogs[i].reactjs}"></i>
      <i class="${blogs[i].vuejs}"></i>
      <i class="${blogs[i].python}"></i>
      <div class="button-group">
        <div class="button-child">
          <button class="button-edit">Edit</button>
        </div>
        <div class="button-child">
          <button class="button-delete">Delete</button>
        </div>
      </div>
    </div>
        `;
  }
}

function getDate(get_start_date, get_end_date) {
  let startdate = new Date(get_start_date);
  let enddate = new Date(get_end_date);
  let distance = enddate - startdate;
  let milisecond = 1000;
  let detik = 3600;
  let jam = 24;
  let hari = Math.floor(distance / (milisecond * detik * jam));
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(hari / 30);
  let tahun = Math.floor(hari / 365);
  if (hari > 0) {
    return `${hari} Hari yang lalu`;
  } else if (minggu > 0) {
    return `${minggu} Minggu yang lalu`;
  } else if (bulan > 0) {
    return `${bulan} Bulan yang lalu`;
  } else if (tahun > 0) {
    return `${tahun} Tulan yang lalu`;
  }
}

