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
                <h4>02/13 - 02/18</h4>
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
                              https://groups.gsb.columbia.edu/FLC/rsvp_boot?id=43206
                            "
                            >
                              IN-PERSON Financial Literacy Club volunteering
                              session
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Financial Literacy Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 420, 12:00pm – 1:45pm
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=42959
                            "
                            >
                              MAC Spring Semester Kick Off
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Marketing Association of Columbia
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              11:15am – 1:30pm
                            </h4>
                            <hr />
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CHAZ/rsvp_boot?id=40623
                            "
                            >
                              Chazen Institute: Working Abroad in Real Estate
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                Chazen Institute for Global Business
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 590, 12:15pm – 1:45pm (100+ attending)
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
                            https://groups.gsb.columbia.edu/CHAZ/rsvp_boot?id=38473
                            "
                          >
                            3 Global Markets: What's Ahead and What We Can Leave
                            Behind
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Chazen Institute for Global Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Cooperman Commons, 12:15pm – 1:30pm (300+
                            registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=40671
                            "
                          >
                            Distinguished Speaker: Alfonso Munk
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Milstein Center for Real Estate
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 12:15pm – 1:30pm
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/Esports/rsvp_boot?id=42971
                            "
                          >
                            Esports & Gaming Club Kickoff
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Esports & Gaming Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 440, 12:15pm – 1:15pm (25+ registered)
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=40032
                            "
                          >
                            IGPI’s Challenges to Transform “Corporate Japan”
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Center on Japanese Economy and Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 640, 12:30pm – 1:30pm
                          </h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=40743
                            "
                          >
                            Meet and Greet with Mr. Takashi Muraoka of
                            Industrial Growth Platform, Inc.
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Center on Japanese Economy and Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 430, 12:30pm – 3:00pm
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
                      {/* <div
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
                      </div> */}
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
                      {/* <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/IDEAS/rsvp_boot?id=41804
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
                      </div> */}
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
                            https://groups.gsb.columbia.edu/CEO/rsvp_boot?id=43186
                          "
                          >
                            CEO Club Spring 2023 Kickoff
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Entrepreneurs Organization
                            </p>
                          </a>
                          <h4 style={{ fontWeight: 100 }}>
                            Gin Mill, 5:45pm – 7:15pm
                          </h4>
                          <br />
                        </div>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=42138
                          "
                          >
                            Black History Month: Diaspora Workshop
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>6:00pm – 7:30pm</h4>
                        </div>
                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=31641
                          "
                          >
                            CSIMA x Rugby Networking Event
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
                          https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=42882
                          "
                        >
                          Black Innovation Series: Black Influence & Media
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Black Business Student Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 640, 12:00pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=42353
                          "
                        >
                          CBS Student Take: Intro to Luxury, Retail, & Tech
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Retail and Luxury Goods Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>12:10pm – 1:45pm</h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41006
                          "
                        >
                          Tips for Building An Effective LinkedIn Profile
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 440, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=43183
                          "
                        >
                          Technology Recruiting Workshop
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 820, 12:30pm – 1:30pm (25+ registered)
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=41307
    "
                        >
                          Executives in Residence Lunch and Learn
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Executives in Residence Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>12:30pm – 1:30pm</h4>
                      </div>

                      <hr />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/gma/rsvp_boot?id=42732
    "
                        >
                          CPG / Retail Corporate Strategy Panel
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by General Management Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Zoom/Kravis 440, 12:30pm – 1:10pm
                        </h4>
                      </div>

                      <hr />
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
                            https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=42966
                          "
                          >
                            MyTheresa Luxury E-Commerce Panel
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Retail and Luxury Goods Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 620, 5:45pm – 6:45pm (50+ registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=38915
                          "
                          >

Social Impact Alumni Career Panel + Networking Reception
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 6:00pm – 7:00pm (75+ registered)
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
