import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";

const Biodata = () => {
  return (
    <div id="app">
      <div className="cv2">
        <div className="head" style={{ display: "flex" }}>
          <div className="fto">
            <Image
              src="https://e7.pngegg.com/pngimages/119/501/png-clipart-computer-icons-user-woman-woman-hat-people-thumbnail.png"
              style={{
                border: "10px solid white",
                borderRadius: "100%",
                width: "140px",
                height: "145px",
                // marginTop: "-180px",
              }}
            />
          </div>
          <div className="nama">
            <h1
              style={{
                fontFamily: "times new roman",
                textAlign: "left",
                color: "white",
                marginLeft: "50px",
              }}
            >
              FAZA <br />
              <span style={{ color: "black" }}> TSANIA DEVI</span>
            </h1>
          </div>
        </div>

        {/* <h2
          style={{
            textAlign: "center",
            fontFamily: "Verdana",
          }}
        >
          Biodata Diri
          <hr style={{ border: "2px solid black", width: "100px" }} />
        </h2> */}
        {/* <hr style={{ border: "2px solid black", float: "right" }} /> */}
        <div className="border9">
          <div className="card" style={{ backgroundColor: "whitesmoke" }}>
            <h2>
              <b> PROFILE</b>
            </h2>
            <hr style={{ border: " 1px solid", width: "140px" }} />
            <div>
              <b>NAME</b>
              <p>Faza Tsania Devi</p>

              <b>DATE OF BIRTH</b>
              <p>04 April 2006</p>

              <b>ADDRESS</b>
              <p>Mendiro, East Ungaran, Semarang Regency</p>

              <b>WEBSITE</b>
              <p>saniadv.com</p>
            </div>

            <div className="contact">
              <h2>
                <b>
                  CONTACT
                  <hr style={{ border: " 1px solid", width: "140px" }} />
                </b>
              </h2>
              <p>
                <b> HOME NUMBER &#9742;</b>
                <br />
                (0411) 123 667
              </p>
              <p></p>
              <p>
                <b>PHONE NUMBER &#x1F4DE;</b>
                <br />
                +62 882 0031 84981
              </p>
              <p></p>
              <p>
                <b>EMAIL &#x1F4E7;</b>
                <br />
                fzats44@gmail.com
              </p>
            </div>
            <div className="social">
              <h2>
                <b>SOCIAL</b>
              </h2>
              <hr
                style={{
                  border: " 1px solid",
                  width: "120px",
                  float: "right",
                }}
              />
              <br />
              <br />
              <p>
                <b>TWITTER &#xf099;</b>
                <p>@Azafnia</p>

                <b>FACEBOOOK </b>
                <p>Azaf_Nia</p>

                <b>INSTAGRAM </b>
                <p>s.niadv</p>
              </p>
            </div>
          </div>
        </div>
        <hr />
        {/* Kedua    */}

        <div className="border4">
          <div className="dua" style={{ display: "flex" }}>
            <div class="card" style={{ width: "800px" }}>
              <h2>&#x1F550; ACTIVITY</h2>
              <hr style={{ border: " 1px solid" }} />
              <div className="bungkus">
                <div className="wr">
                  <p>
                    <h5>
                      MONDAY,
                      <br /> 7 MARCH 2022
                      <hr id="hrr" />
                    </h5>
                    My favorite books have a personality and complexion as
                    distinctly drawn as if the author's portrait were framed
                    into the paragraphs and smiled upon me as I read his
                    illustrated pages.
                  </p>
                </div>
                <hr class="hd" />
                <div className="wr">
                  <p>
                    <h5>
                      TUESDAY,
                      <br /> 8 MARCH 2022
                      <hr id="hrr" />
                    </h5>
                    It has always been my practice to cast a long paragraph in a
                    single mould, to try it by my ear, to deposit it in my
                    memory, but to suspend the action of the pen till I had
                    given the last polish to my work.
                  </p>
                </div>
                <hr class="hd" />

                <div className="wr">
                  <p>
                    <h5>
                      WEDNESDAY,
                      <br /> 9 MARCH 2021
                      <hr id="hrr" />
                    </h5>
                    The essence of life is not what we know, not the books we
                    read or the sentences we speak, but what we do, what is most
                    deeply rooted in our hearts, souls and the core of our
                    lives.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div class="card" style={{ marginLeft: "10px" }}>
              <h2> APPRECIATION &#x1F4DD;</h2>
              <hr style={{ border: " 1px solid" }} />
              <div className="bungkus">
                <div className="wr">
                  <h5>
                    COMPETITION <br /> 2019
                  </h5>

                  <hr id="hrr" />
                  <br />
                  <p>
                    1.Take part in Qira' competition <br />
                    2.Got a className 1 champion certificate
                    <br />
                    3.Take part in bootcamp activities
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card" style={{ marginTop: "8px" }}>
            <h2>&#x1F4A1; SKILLS</h2>
            <hr style={{ border: " 1px solid" }} />
            <div className="bungkus">
              <div className="skil">
                <h3>PROFESSIONAL SKILLS</h3>
                <p>Coding&nbsp; &#9899; &#9899; &#9899;</p>
                <p>Singing &nbsp;&nbsp; &#9899; &#9899; &#9899;</p>
                <p>organization&nbsp; &#9899; &#9899; &#9899;</p>
              </div>

              <div className="skil">
                <h3>PERSONAL SKILLS</h3>
                <p>mutual cooperation&nbsp; &#9899; &#9899; &#9899;</p>
                <p>mutual help&nbsp; &#9899; &#9899; &#9899;</p>
                <p>friendly&nbsp; &#9899; &#9899; &#9899;</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <br />
      </div>
    </div>
  );
};

export default Biodata;
