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
                <h4>04/17 - 04/21</h4>
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
                              https://groups.gsb.columbia.edu/abc/rsvp_boot?id=47022
                            "
                            >
                              Landing and Nailing an In-Semester Internship
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Africa Business Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Kravis 840, 12:00pm – 1:30pm
                            </h4>
                          </div>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/JBSA/rsvp_boot?id=39978
                            "
                            >
                              The Life of Toby Levy: A Holocaust Survivor's
                              Story
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Jewish Business Students Association (300+
                                registered)
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Cooperman Commons, 12:00pm – 1:45pm
                            </h4>
                            <br />
                          </div>
                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/DFI/rsvp_boot?id=44676
                            "
                            >
                              “Less is Better: Lessons in Internal Innovation
                              and Personal Growth” Tiffany Dockery, Etsy
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Digital Future Initiative (100+ registered)
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Geffen 640, 12:15pm – 1:30pm
                            </h4>
                            <br />
                          </div>
                        </div>
                      </div>

                      {/* <div
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
                            https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=43213
    "
                          >
                       CSIMA Talk with Andrew Walker
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                  by Heilbrunn Center for Graham and Dodd Investing
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
                      </div> */}

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
                            https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=43213
                            "
                          >
                            CSIMA Talk with Andrew Walker
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Heilbrunn Center for Graham and Dodd Investing
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 620, &nbsp; 12:00pm – 1:00pm
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/DFI/rsvp_boot?id=42567
                            "
                          >
                            DFI Lunch and Learn: Product Management Series with
                            Alex Hardiman, New York Times
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
                            https://groups.gsb.columbia.edu/MENA/rsvp_boot?id=46696
                            "
                          >
                            MENA Presents: Founders Fireside Chat
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by The Middle East and North Africa Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 670,
                            {/* Geffen 590  */}
                            12:15pm – 1:45pm
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/acc/rsvp_boot?id=47014
                            "
                          >
                            Arts Society Presents: Navigating the Contemporary
                            Art Market
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Arts Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Online, 12:30pm – 1:15pm
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41550
                            "
                          >
                            Mastering Thank You Notes...American Style
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 420, */}
                            Geffen 390, 12:30pm – 1:30pm
                            {/* (100+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41874
                            "
                          >
                            Succeed in Summer Internship: Investment Banking
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 640, 12:30pm – 1:30pm (50+ registered)
                            {/* (100+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CETA/rsvp_boot?id=47377
                            "
                          >
                            ETA: Clayton Sachs and Tom Jackson (Datacor and CBS
                            Fall '23 Adjunct Professors)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Entrepreneurship Through Acquisition
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 430, 12:30pm – 1:30pm (75+ attending)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=40736
                            "
                          >
                            Distinguished Speaker Series: Joseph Sitt
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by The Paul Milstein Center for Real Estate
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 12:30pm – 1:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/APEC/rsvp_boot?id=46719
                            "
                          >
                            Asian Development Bank's Outlook for Developing Asia
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by APEC Study Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            International Affairs Building Room 407, 1:00pm –
                            2:00pm
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
                          https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=47086
                          "
                        >
                          CBS Gourmet x CBS Well Pilates & Entrepreneurship
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Gourmet Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 410, 12:15pm – 1:30pm
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

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=43488
                          "
                        >
                          A Special Lecture ﻿with Governor Haruhiko Kuroda of
                          Bank of Japan
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Center on Japanese Economy and Business
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 670, */}
                          {/* Geffen 620, */}
                          Cooperman Comomons, 6:00pm – 7:30pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                   https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=39446
                          "
                        >
                          Pangea Advisors Project Presentations + Reception
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 820, 6:00pm – 8:00pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=47348
                          "
                        >
                          Class of 2023 Graduation Celebration
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Black Business Student Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 1040, 7:30pm – 9:30pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41626
                          "
                        >
                          Follies x Rugby Networking Event
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
                          https://groups.gsb.columbia.edu/HCPP/rsvp_boot?id=41038
                          "
                        >
                          Healthcare Leadership Series
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Healthcare and Pharmaceutical Management Program
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
                          https://groups.gsb.columbia.edu/silfen/rsvp_boot?id=43936
                          "
                        >
                          A Conversation with Pierre Gentin, McKinsey’s Chief
                          Legal Officer (100+ registered)
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Silfen Leadership Series
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 840,
                          {/* CMC 7th Floor Geffen,  */}
                          12:00pm – 1:35pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=42434
                          "
                        >
                          NBLP Project Presentations
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 640, 12:00pm - 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/hlc/rsvp_boot?id=46740
    "
                        >
                          Health & Wellness Female Founders Panel
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Health & Wellness Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 670, 12:15pm - 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=46874
"
                        >
                          Tech Club Last Networking Lunch & Q&A - Full-time X
                          J-term
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Technology Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 630, 12:15pm - 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41551
"
                        >
                          Mastering Cover Letters … American Style
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 570, 12:30pm - 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=47103
"
                        >
                          ReEntry Acceleration Program Info Session
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 420, 12:30pm - 1:30pm
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
                            https://groups.gsb.columbia.edu/FinTech/rsvp_boot?id=46866
"
                          >
                            Web 3 & VC - Alumni Fireside Chat
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia FinTech and Blockchain
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 420, 6:30pm – 8:00pm
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
