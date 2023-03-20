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
                <h4>03/20 - 03/26</h4>
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

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/FLC/rsvp_boot?id=44549
                            "
                            >
                              Financial Literacy Club Volunteering Session
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Financial Literacy Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              {/* Geffen 540, */}
                              12:00pm – 1:45pm
                            </h4>
                            {/* <hr /> */}
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
                              https://groups.gsb.columbia.edu/osa/rsvp_boot?id=43767
                            "
                          >
                            Course Match Training and Demonstration
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Office of Student Affairs
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
                              https://groups.gsb.columbia.edu/Esports/rsvp_boot?id=44551
                            "
                          >
                            Gaming 101 Session
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Esports & Gaming Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 570, 12:00pm – 1:00pm
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
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
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=42935
                          "
                        >
                          CBS | well: Paint & Sip [Mocktail Edition]
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 820, &nbsp; */}
                          Geffen 440, 12:00pm – 1:00pm (25+ attending)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=41427
                          "
                        >
                          Introduction to On Campus Recruiting (OCR)
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Experienced Professionals Career Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 820, &nbsp; */}
                          {/* Geffen 440,  */}
                          Virtual Event, 12:30pm – 1:30pm (25+ attending)
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
                          https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41626
                          "
                        >
                          VC Club x Rugby Networking Event
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
                          https://groups.gsb.columbia.edu/CSIMA/rsvp_boot?id=43799
                          "
                        >
                          Everything you always wanted to know about hedge
                          funds, but were afraid to ask
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Student Investment Management
                            Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 440 */}
                          Geffen 540, 12:00pm – 1:45pm (100+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/energy/rsvp_boot?id=42429
                          "
                        >
                          Energy & Infrastructure Club - Renewable Energy / Tax
                          Equity Investment Deep Dive
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Energy & Infrastructure Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 440,
                          {/* CMC 7th Floor Geffen,  */}
                          12:00pm – 1:00pm (75+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=31846
                          "
                        >
                          Building Inclusive Workplaces: How to Unlock the Value
                          of Neurodiversity [PPIL]
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 620, 12:00pm - 1:45pm (200 registered, Waitlist
                          Only)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/PSA/rsvp_boot?id=43270
    "
                        >
                          Toastmaster Session
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Public Speaking Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 820,
                          {/* Geffen 540,  */}
                          12:15pm – 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=42856
"
                        >
                          Distinguished Speaker: Pamela Thomas
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Paul Milstein Center for Real Estate
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 820, */}
                          Geffen 520, 12:30pm – 1:30pm
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

             

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=44490
"
                          >
                            Has Systemic Risk Re-Emerged?
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Program for Financial Studies
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, */}
                            {/* Geffen 520,  */}
                            Cooperman Commons, 5:30pm – 8:00pm
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
    https://www.eventbrite.com/e/consumer-privacy-in-media-global-regulation-and-medias-response-tickets-570857037767
"
                          >
                            Consumer Privacy in Media: Global Regulation and
                            Media's Response
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Digital Future Initiative
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, */}
                            Geffen 620, 6:00pm – 7:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
    https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=43397
"
                          >
                            Inclusion in Design by Any Means Necessary: Fireside
                            Chat with Nicole-Hollant Denis
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, */}
                            6:00pm – 8:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MENA/rsvp_boot?id=43519
"
                          >
                            Norouz
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by The Middle East and North Africa Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Masquerade Brooklyn, 10:00pm – 2:00am (50+
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
                          https://groups.gsb.columbia.edu/CBC/rsvp_boot?id=43701
                          "
                        >
                          1st Annual Future of Beauty Summit
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Beauty Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          On Campus, 10:00am - 6:30pm (50+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/LABA/rsvp_boot?id=43860
                          "
                        >
                          Mexico-LatAm Macro Perspectives: Navigating Domestic
                          and Regional Themes
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Latin America Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 890, 12:00pm - 3:00pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=43908
                          "
                        >
                          Mexico-LatAm Macro Perspectives: Navigating Domestic
                          and Regional Themes
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Latin America Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 890, 12:00pm - 3:00pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=43908
                          "
                        >
                          Trek to Upward Farms
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Gourmet Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Upward Farms, 3:00pm - 5:00pm (Waitlist Only)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=43560
                          "
                        >
                          Gourmet Presents: Sushi on Me
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Gourmet Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Sushi On Me, 8:30pm - 11:00pm (Waitlist Only)
                        </h4>
                      </div>

                      <br />

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

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/saba/rsvp_boot?id=43426
                          "
                        >
                          18th Annual India Business Conference [PPIL]
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by South Asia Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          On Campus, Saturday (200+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/LABA/rsvp_boot?id=42867
                          "
                        >
                          MBA Chile 2023 Conference
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Latin America Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          On Campus, Saturday (100+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=43941
                          "
                        >
                          Elevate Kickoff Brunch
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Black Business Student Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Corner Social, Sunday, 11:45am – 2:00pm
                        </h4>
                      </div>

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
