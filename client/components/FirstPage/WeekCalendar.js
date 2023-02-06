import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";
// import "aos/dist/aos.css"
import Za from "./CustomerComp/Za";
// import CBS from "./CustomerComp/CBS";
import Aos from "aos";
import { Link } from "react-router-dom";

{
  /* <div>
<a
  target="_blank"
  href="https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=32939"
>
  MMA NBC Universal Careers Panel
  <p style={{fontWeight:100}}>
   by Media Management
  Association
  </p>
</a>

<h4 style={{fontStyle:"italic"}}>Geffen 430, 12:00pm – 1:00pm</h4>
</div>
<br /> */
}

const WeekCalendar = () => {
  return (
    <BS.Container>
      <h2 id="Weekly"></h2>
      <Container sx={{ pt: 10, pb: 10 }}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 3,

            display: "flex",
            justifyContent: "left",
          }}
        >
          <div
            className="fontbold"
            // data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h5"
              // className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <div className="fontbold">
                Weekly Events
                <h4>02/06 - 02/11</h4>
                <br />
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="monday"></span>
                        Monday
                      </h1>
                      <br />

                      <div className="links">
                        <div
                        // className="lunch happenings"
                        // data-aos="fade-left"
                        // data-aos-duration="1000"
                        >
                          <h2>Lunch Happenings:</h2>
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=42375
                            "
                            >
                              After Consulting OCR
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Career Management Center
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 540, 12:30pm – 1:30pm
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/green/rsvp_boot?id=42549
                            "
                            >
                              A Climate of Change: Meet and Greet with Nathaniel
                              Keohane
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Green Business Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Alumni Suite, 1:15pm – 1:45pm (25+ registered)
                            </h4>
                            <hr />
                          </div>
                          <br />
                        </div>
                      </div>
                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="tuesday"></span>
                        Tuesday
                      </h1>

                      <br />
                      <div>
                        <h2>Lunch Happenings:</h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=41656
                            "
                          >
                            Financial Empowerment with Angela Lee
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Women in Business (CWIB)
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 440, 12:15pm – 1:30pm (50+ registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=42377
                            "
                          >
                            Mastering Networking Culture: LinkedIn for
                            International Students
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 540, 12:30pm – 1:30pm (25+ registered)
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/gma/rsvp_boot?id=42135
                            "
                          >
                            Corporate Strategy Panel - Financial Services
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 670, 12:00pm – 1:15pm (50+ registered)
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=40616
                            "
                          >
                            Value Investing Program Information Session
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Heilbrunn Center for Graham and Dodd Investing
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen Cooperman Commons, 12:00pm – 1:00pm (100+
                            registered)
                          </h4>
                        </div>
                        <br />

                        {/* <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=38906
                            "
                          >
                            Tech Club West Coast Trek Info Session
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Technology Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 570, 1:00pm – 1:45pm
                          </h4>
                        </div> */}

                        {/* <br /> */}
                      </div>
                      <hr />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CEO/rsvp_boot?id=42347
                          "
                          >
                            Building a Brand
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Entrepreneurs Organization
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 5:00pm – 6:00pm (100+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=33040
                          "
                          >
                            A New Era for the Sake Industry in Japan and Beyond
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Center on Japanese Economy and Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 820, 6:00pm – 7:10pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=42357
                          "
                          >
                            100/50: Embracing Our Legacy Kick Off
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Sanford C. Bernstein & Co. Center for
                              Leadership and Ethics
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen Cooperman Commons, 6:00pm – 7:15pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CBC/rsvp_boot?id=41632
                          "
                          >
                            Careers in Venture Capital: Beauty Investing
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Beauty Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 6:30pm – 8:30pm
                          </h4>
                        </div>
                      </div>
                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        {" "}
                        <span id="wednesday"></span>
                        Wednesday
                      </h1>
                      <br />
                      <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=41239
                          "
                        >
                          The Value of the JD/MBA Joint Degree
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Executives in Residence Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 540, 12:30pm – 1:30pm (25+ registered)
                        </h4>
                      </div>
                      <hr />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=41394
                          "
                          >
                            Delivering a Professional Pitch
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Experienced Professionals Career Management
                            </p>
                          </a>
                          <h4 style={{ fontWeight: 100 }}>
                            Online, 5:30pm – 6:30pm
                          </h4>
                          <br />
                        </div>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/microbrew/rsvp_boot?id=41806
                          "
                          >
                            Let's Go Grab a Beer!
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Micro-Brew Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            123BSB, 5:45pm – 6:45pm
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=42200
                          "
                          >
                            Rhone Company Visit
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Retail and Luxury Goods Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Rhone - Flatiron, 6:30pm – 8:00pm (25+ registered)
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41627
                          "
                          >
                            Veterans Club/ExBo x Rugby Networking Event
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Jake's Dilemma, 8:30pm – 11:00pm
                          </h4>
                        </div>

                        {/* <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/golf/rsvp_boot?id=38692
                          "
                          >
                            End of Year Social at Five Iron Golf
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Golf Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Five Iron Golf - Herald Square, 8:30pm – 10:30pm
                            ($15 tickets)
                          </h4>
                        </div> */}
                      </div>

                      {/* <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/GCS/rsvp_boot?id=41630
                          "
                        >
                          Lunar New Year "Night" Market
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Greater China Society
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 440, 12:00pm – 1:45pm (over 50 registered)
                        </h4>
                      </div> */}

                      {/* <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=41700
                          "
                        >
                          CBS | well: Snacks and Self-Care
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 170, 12:00pm – 1:45pm
                        </h4>
                      </div>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=41382
                          "
                        >
                          Resume and LinkedIn Essentials
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Experienced Professionals Career Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 12:30pm – 1:30pm (over 75 registered)
                        </h4>
                      </div> */}

                      {/* <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://lu.ma/ffcjg9pl
                          "
                        >
                          Lessons from Scaling Handy with Oisin Hanrahan
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 1:00pm – 2:00pm (over 50 registered)
                        </h4>
                      </div> */}

                      <br />

                      <hr />

                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="thursday"></span>
                        Thursday
                      </h1>

                      <br />
                      <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=40680
                          "
                        >
                          Ask Me Anything - Careers in Private Equity with Gairy
                          Hall '16
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 520, 12:15pm – 1:45pm (50+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=42724
                          "
                        >
                          Surviving the Core
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 490, 12:15pm – 1:15pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/PSA/rsvp_boot?id=42954
                          "
                        >
                          Toastmaster Session
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Public Speaking Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 630, 12:15pm – 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=39444
                          "
                        >
                          Pangea Info Session
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 570, 12:15pm – 1:30pm (75+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/FLC/rsvp_boot?id=42378
    "
                        >
                          Financial Literacy Club Welcome Session 2023
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Financial Literacy Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>1:00pm – 1:30pm</h4>
                      </div>
               
                      <hr/>
                      <br />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41561
                          "
                          >
                            American Cultural Conversations: The Super Bowl
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 540, 5:30pm – 6:30pm (25+ registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                          https://groups.gsb.columbia.edu/LABA/rsvp_boot?id=41797
                          "
                          >
                            Carnaval Party! LABA and Brazil club
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Latin America Business Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Hotel Chantelle, 10:00pm – 4:00am (150+ registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/REA/rsvp_boot?id=42873
                          "
                          >
                            REA x Columbia Business Law x GSAPP Mixer
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Latin America Business Association
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Amity Hall Uptown, 9:00pm – 11:00pm
                          </h4>
                        </div>

                        <br />
                      </div>

                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      // className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="friday"></span>
                        Friday
                      </h1>

                      <br />
                      <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=41617
                          "
                        >
                          Welcome Back at Wu's Wonton
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Gourmet Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Wu's Wonton King, 8:15pm – 10:15pm
                        </h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-offset="200"
                      className="fontbold"
                    >
                      <br />
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="saturday"></span>
                        Saturday & Sunday
                      </h1>
                      {/* 
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                            https://groups.gsb.columbia.edu/DEI/rsvp_boot?id=32678
                          "
                        >
                          BBSA/HBA-Women of Color Retreat
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Diversity, Equity and Inclusion Office
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 870, 11:00am – 3:00pm (25+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/microbrew/rsvp_boot?id=38127
                          "
                        >
                          Wild East Brewing Tour
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Micro-Brew Society
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Wild East Brewing, 12:00pm – 2:00pm
                        </h4>
                      </div>*/}

                      {/* <br />
                     <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=38321
                          "
                        >
                          No Happenings Today!
                          {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Technology Club
                          </p> */}
                      {/* </a> */}

                      {/* <h4 style={{ fontWeight: 100 }}>
                          Royal Palms Shuffleboard Club, 2:00pm - 4:00pm ($38
                          Tickets)
                        </h4> */}
                      {/* </div>  */}
                      {/* <hr /> */}

                      {/* <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>Sunday:</h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                          https://groups.gsb.columbia.edu/GCS/rsvp_boot?id=38358
                          "
                          >
                            Fireside Chat with Alex at Qiming VC
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Greater China Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Virtual, 10:00pm - 11:00pm
                          </h4>
                        </div>
                      </div> */}
                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
              </div>
            </Typography>
          </div>
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br />
      </Container>
    </BS.Container>
  );
};
export default WeekCalendar;
//valgrind showing an error message
// ; not pushing in
//tokens read wrong

//what is tree size
//dont know how to test the dictionary vs mine

// valgrind --leak-check=yes ./your_executable
// /home/tim/cs3136-pub/data/words istringstream-test.cpp
