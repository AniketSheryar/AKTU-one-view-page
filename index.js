// console.log("Hello Node.js");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
      * {
      box-sizing: border-box;
  }
  
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: url(images/asset\ 1.jpeg) no-repeat center center / cover;
  
  }
  
  #signin {
      width: 416px;
      text-align: center;
      background-color: #fff;
      padding: 50px 55px 30px 55px;
  
  }
  
  label {
      display: block;
      font-family: SourceSansPro-Bold;
      font-size: 30px;
      color: #77120c;
      line-height: 1.2;
      text-align: center;
      padding-bottom: 37px;
      padding-top: 20px;
  }
  
  input[type="text"] {
      width: 100%;
      padding: 20px;
      border: 1px solid lightgray;
      border-radius: 2px;
      font-size: 15px;
      
  }
  
  ::placeholder {
      color: #77120c;
  }
  
  .button {
      font-size: 15px;
      color: #fff;
      width: 50%;
      margin-top: 28px;
      padding: 15px;
      background: #77120c;
      border: 0;
      border-radius: 0;
      transition: all 0.5s;
  }
  
  .button:hover {
      cursor: pointer;
      background-color: #610803;
  }
  
  p {
      color: gray;
      font-size: 12px;
      padding: 10px;
  }
      </style>
      <title>Aktu Erp </style></title>
      <link rel="icon" href="images/asset 0.png" >
    </head>
    <body>
      <div id="container">
        <div id="signin">
          <div class="logo">
            <img src="images/asset 0.png" alt="logo" height="100px" />
          </div>
          <form>
            <div>
              <label>ऐकेटीयू वनव्यू</label>
              <input
                type="text"
                class="text-input"
                maxlength="13"
                title="जारी रखने के लिए अपना विश्वविद्यालय रोल नंबर दर्ज करें।"
                placeholder="अनुक्रमांक"
              />
            </div>
            <div>
              <button
                type="submit"
                class="button"
                title="आगे बढ़ने के लिए यहां क्लिक करें"
              >
                आगे बढ़े
              </button>
            </div>
          </form>
          <div id="main-footer">
            <p>
              यह डॉ ए पी जे अब्दुल कलाम तकनीकी विश्वविद्यालय लखनऊ की आधिकारिक ईo
              आरo पीo है।
              <br />
              (एoकेoटीoयूo-एसडीसी द्वारा संचालित)
            </p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});