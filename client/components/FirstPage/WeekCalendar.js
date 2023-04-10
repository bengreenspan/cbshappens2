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
                <h4>04/10 - 04/15</h4>
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
                          className="lunch happenings"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <h2>All Day Happenings:</h2>

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CGBL/rsvp_boot?id=38474
                            "
                            >
                              BRITE '23 Conference [PPIL]
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Center on Global Brand Leadership
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen, 9:30am – 6:30pm
                            </h4>
                            <br />
                          </div>
                        </div>
                      </div>

                      <div className="links">
                        <div
                          className="lunch happenings"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <h2>Lunch Happenings:</h2>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                             https://groups.gsb.columbia.edu/FinTech/rsvp_boot?id=46942
                            "
                            >
                              Fireside chat with James Prusky
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Columbia FinTech and Blockchain
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Geffen 540, 12:30pm – 1:30pm
                            </h4>
                          </div>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                    https://groups.gsb.columbia.edu/IDEAS/rsvp_boot?id=43777
                            "
                            >
                              Fasting 101
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Employee Resource Groups
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Online, 12:30pm – 1:00pm
                            </h4>
                            <br />
                          </div>
                        </div>
                      </div>

                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                       https://groups.gsb.columbia.edu/CSIMA/rsvp_boot?id=43927
    "
                          >
                            Career Development Panel - Long-Only / Mutual Fund
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Student Investment Management
                              Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 590, 6:00pm - 7:15pm (75+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=40420
                          "
                          >
                            Building the Next-Generation Internet: The Ethics
                            and Economics of the Metaverse
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Sanford C. Bernstein & Co. Center for
                              Leadership and Ethics
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Virtual, 6:00pm – 6:45pm
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
                            https://groups.gsb.columbia.edu/FLC/rsvp_boot?id=46800
                            "
                          >
                            Financial Literacy volunteering session
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Financial Literacy Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            12:00pm – 1:45pm
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/osa/rsvp_boot?id=44023
                            "
                          >
                            At the Very Center of CampusGroups
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Office of Student Affairs
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 390, 12:00pm – 1:45pm
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/mca/rsvp_boot?id=46808
                            "
                          >
                            REAL TALK: What To Expect From Your Summer
                            Internship
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Management Consulting Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 440,
                            {/* Geffen 590  */}
                            12:15pm – 1:30pm (50+ attending)
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41008
                            "
                          >
                            Mastering Networking Outreach Emails...American
                            Style
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
                            https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=40150
                            "
                          >
                            Japanese Creativity in the Great Tech Race:
                            Beneficiary or Victim?
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Center on Japanese Economy and Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 420, */}
                            Geffen 620, 12:30pm – 1:30pm
                            {/* (100+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                          https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=44376
                            "
                          >
                            "The Value of Networking" with Leanne Lachman and
                            Stacy Ruchlamer
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Executives in Residence Program
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 420, 12:30pm – 1:30pm (50+ registered)
                            {/* (100+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/VCC/rsvp_boot?id=43452
                            "
                          >
                            VC Compensation Crash Course
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Venture Capital Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 420, 12:30pm – 1:30pm (75+ attending)
                          </h4>
                        </div>

                        <br />
                      </div>

                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://sanfordbernsteincenter.org/civicrm/event/info?id=276&reset=1
                          "
                          >
                            2023 Botwinick Prize in Business Ethics Honoring
                            Daniel Lubetzky
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Muslims in Business
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Cooperman Commons, 5:30pm – 7:15pm
                            {/* (250+ attending) */}
                          </h4>
                        </div>
                        <br />
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=46984
                            "
                        >
                          A Conversation with Steve Pamon
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Black Business Student Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 420, 6:00pm – 7:00pm
                          {/* (100+ attending) */}
                        </h4>
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
                          https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=41428
                          "
                        >
                          The Art of Salary Negotiation
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Experienced Professionals Career Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Virtual, 12:15pm – 1:45pm (75+ attending)
                        </h4>
                      </div>
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
                          https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41626
                          "
                        >
                          West Coast Society x Rugby Networking Event
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Men's Rugby Football Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 670, */}
                          {/* Geffen 620, */}
                          Jake's Dilemma, 8:30pm – 11:30pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

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
                          https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=40650
                          "
                        >
                          Christopher Bloomstran CSIMA talk
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Heilbrunn Center for Graham and Dodd Investing
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 440, 12:00pm – 1:00pm (75+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=40425
                          "
                        >
                          The Inner Workings of The Edelman Trust Barometer
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Sanford C. Bernstein & Co. Center for Leadership
                            and Ethics
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 620,
                          {/* CMC 7th Floor Geffen,  */}
                          12:00pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=44491
                          "
                        >
                          No Free Lunch research seminar featuring Professor
                          Boaz Abramson
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Program for Financial Studies
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 520, 12:15pm - 1:30pm
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
    https://groups.gsb.columbia.edu/MBAY24/rsvp_boot?id=46815
"
                          >
                            Stand up comedy with Nataly!
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by MBA Cluster Y 24
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 590, 6:00pm – 8:00pm
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
    https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=46789
"
                          >
                            RLG Fashion Show - BLOOM DE FLEUR
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Retail and Luxury Goods Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Harlem School of the Arts, 7:30pm – 10:00pm (125+
                            registered)
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
                      data-aos-offset="200"
                      // className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="friday"></span>
                        Friday
                      </h1>

                      <br />
                      {/* <h2>Morning Happenings:</h2> */}
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/golf/rsvp_boot?id=46751
                          "
                        >
                          2023 Golf Club Spring Outing
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Golf Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Eagle Ridge Golf Club, 7:45am - 8:30pm (75+
                          registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/PEP/rsvp_boot?id=44719
                          "
                        >
                          Private Equity Program Student Applications/ Info
                          session 2023-24
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Private Equity Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 640, 11:00am - 12:00pm (100+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=40427
                          "
                        >
                          Asian Representation in Corporate Leadership
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Sanford C. Bernstein & Co. Center for Leadership
                            and Ethics
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 640, 12:00pm - 1:30pm
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
                        Saturday
                      </h1>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/LABA/rsvp_boot?id=39995
                          "
                        >
                          Masters Argentina Conference
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Latin America Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen Hall, Saturday & Sunday (100+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=43448
                          "
                        >
                          2023 Annual EXBO Spring Gala @ Cipriani Wall St.
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Student Government Executive Board
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Cipriani Wall St.(1500+ registered)
                        </h4>
                      </div>
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
