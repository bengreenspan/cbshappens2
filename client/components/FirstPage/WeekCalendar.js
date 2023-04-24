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
                <h4>04/24 - 04/29</h4>
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
                          <h2>Lunch Happenings:</h2>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=47741
                            "
                            >
                              Hot Dog Day!
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Gourmet Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Lawn, 12:00pm – 1:45pm
                            </h4>
                          </div>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CSIMA/rsvp_boot?id=47373
                            "
                            >
                              Careers In Investment Management - From First
                              Years to Full-Time
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Columbia Student Investment Management
                                Association
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              12:00pm – 1:00pm
                            </h4>
                            <br />
                          </div>

                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=47324
                            "
                            >
                              Finding Your Purpose Through Work
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Sanford C. Bernstein & Co. Center for
                                Leadership and Ethics
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Online, 12:30pm – 1:30pm
                            </h4>

                            <br />
                            <div className="links">
                              <a
                                target="_blank"
                                href="
                              https://groups.gsb.columbia.edu/CID/rsvp_boot?id=47748
                            "
                              >
                                CID: Creative Underpinnings of Human Centered
                                Design
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by CBS Innovation & Design
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                {/* Kravis 820, &nbsp; */}
                                Geffen 440, 1:00pm – 1:45pm
                              </h4>

                              <br />
                            </div>
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
                            https://groups.gsb.columbia.edu/osa/rsvp_boot?id=46782
    "
                          >
                            Enough is Enough - New President's Training -
                            In-Person
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Office of Student Affairs
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 490, 6:00pm - 7:00pm
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
                            https://groups.gsb.columbia.edu/CBA/rsvp_boot?id=47449
                            "
                          >
                            Advancing Equity and Inclusion in the Cannabis
                            Industry
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Cannabis Business Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 430, &nbsp; 12:00pm – 1:00pm
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/DFI/rsvp_boot?id=42356
                            "
                          >
                            DFI Lunch and Learn: Product Management Series with
                            Catherine Vollgraff Heidweiller, Google
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Digital Future Initiative
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 620, 12:00pm – 1:45pm (100+ attending)
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=47010
                            "
                          >
                            Generative AI Panel
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Technology Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 620,
                            {/* Geffen 590  */}
                            12:05pm – 1:15pm (110+ attending)
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=41557
                            "
                          >
                            The Neglected Minority: The Science of Asians’
                            Bamboo Ceiling (PPIL-Approved)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Center on Japanese Economy and Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 3rd Floor, 12:30pm – 1:30pm
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/silfen/rsvp_boot?id=46821
                            "
                          >
                            A Conversation with Pascal Desroches - Senior
                            Executive Vice President & Chief Financial Officer,
                            AT&T (PPIL Approved)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Silfen Leadership Series
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 420, */}
                            Geffen 490, 12:30pm – 1:30pm
                            {/* (100+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=40737
                            "
                          >
                            Fair Housing & Appraisal Bias Panel (PPIL Approved)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by The Paul Milstein Center for Real Estate
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 12:30pm – 1:30pm
                            {/* (100+ attending) */}
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
                            https://groups.gsb.columbia.edu/AC-Relation/rsvp_boot?id=47082
                          "
                          >
                            LinkedIn Masterclass: Land Your Next Job Faster and
                            with Lots More Money by Learning to Leverage
                            LinkedIn
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Alumni Events
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Online, 6:00pm – 7:00pm
                            {/* (250+ attending) */}
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
                        a
                        <a
                          target="_blank"
                          href="
                            https://groups.gsb.columbia.edu/MGMT/rsvp_boot?id=44528
                          "
                        >
                          Technology Strategy Bonus Session - Mastercard (AI)
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Management
                          </p>
                        </a>
                        <h4 style={{ fontWeight: 100 }}>12:15pm – 1:30pm</h4>
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

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=41430
                          "
                        >
                          Design Your Work Life
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Experienced Professionals Career Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 670, */}
                          Online, 5:30pm – 6:30pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=47389
                          "
                        >
                          Artist Talk
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 840, 6:00pm – 7:30pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Sneaker/rsvp_boot?id=47502
                          "
                        >
                          Extra Butter x Sneaker Club Movie Nite
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Sneaker Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Extra Butter NY, 7:00pm – 10:00pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/FinTech/rsvp_boot?id=47485
                          "
                        >
                          Fintech & Blockchain Club - Semester End
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia FinTech and Blockchain
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 670, */}
                          {/* Geffen 620, */}
                          Amity Hall, 8:30pm – 11:50pm
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
                          https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=47023
                          "
                        >
                          Special Session with John W. Rogers, Jr. - Founder,
                          Chairman, Co-CEO & Chief Investment Officer of Ariel
                          Capital Management
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Heilbrunn Center for Graham and Dodd Investing
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Cooperman Commons, 12:00pm – 1:30pm (100+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=44559
                          "
                        >
                          Inclusive Entrepreneurship Fellowship Closing Lunch &
                          Presentations
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 620,
                          {/* CMC 7th Floor Geffen,  */}
                          12:15pm – 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/AdamSmith/rsvp_boot?id=47017
                          "
                        >
                          The future of Tech by Pascal Cagni – ex General
                          Manager and VP of Apple's EMEIA division
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Adam Smith Society
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 590, 12:30pm - 1:30pm
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
                            https://groups.gsb.columbia.edu/AC-Relation/rsvp_boot?id=47087
"
                          >
                            Effective Nonprofit Strategic Planning
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Alumni Events
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Online, 6:00pm – 7:00pm
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/Sneaker/rsvp_boot?id=47462
"
                          >
                            "AIR: Courting A Legend" Screening
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Sneaker Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            AMC Magic Johnson Harlem 9, 7:00pm – 9:30pm (125+
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
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=47452
                          "
                        >
                          ReEntry Acceleration Program Info Session for EMBAs
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 520, 11:45am - 12:25pm
                        </h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                  {/* <BS.Col lg={4} md={6} sm={12} xs={12}>
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
                  </BS.Col> */}
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
