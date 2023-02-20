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
                <h4>02/20 - 02/25</h4>
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
=https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=42790                            "
                            >
                              Tech Recruiting in Today's World
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Columbia Women in Business (CWIB)
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis
                              {/* Geffen */}
                              690, 12:00pm – 1:45pm
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
https://groups.gsb.columbia.edu/VCC/rsvp_boot?id=43338
                            "
                            >
                              VC Recruitment Coaching #2: Thesis and Sourcing
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Venture Capital Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Online Event, 12:00pm – 1:00pm (100+ attending)
                            </h4>
                            <hr />
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                             https://groups.gsb.columbia.edu/CHAZ/rsvp_boot?id=43037
                            "
                            >
                              Chazen Global Spotlight: Cameroon
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
                            https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=9713
                            "
                          >
                            Structuring Your Search: The 2 Hour Job Search
                            Method
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Career Management Center
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis */}
                            Geffen 520, 12:30pm – 1:30pm (50+ registered)
                          </h4>
                        </div>

                        <br />

                        {/* <div className="links">
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
                        <br /> */}

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
https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=43093
                          "
                          >
                            Everything You Wanted to Know About Consulting and
                            Shouldn't be Afraid to Ask
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Executives in Residence Program
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 1040
                            {/* Geffen 520 */}, 5:30pm – 6:30pm (75+ registered)
                          </h4>
                        </div>

                        {/* <br />
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
                        </div> */}

                        {/* <br />
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
                        </div> */}

                        {/* <br />
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
                        </div> */}
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
                         https://groups.gsb.columbia.edu/osa/rsvp_boot?id=41813
                          "
                        >
                          Well, Investment Banking Club and Private Equity Club
                          Collaboration
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 
                          {/* Kravis */}
                          420, 12:15pm – 1:45pm (75+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                        https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=42576
                          "
                        >
                          Wall Street Job Search 2023
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Experienced Professionals Career Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Geffen */}
                          {/* Kravis */}
                          {/* 420,  */}
                          Online, 12:30pm – 1:30pm (25+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=42412
                          "
                        >
                          Private Equity: The Portfolio Company Perspective with
                          Alfred H. Drewes '82 Former COO, Sun Products Corp.
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Executives in Residence Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen
                          {/* Kravis */}
                          640, 12:30pm – 1:30pm (150+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/jba/rsvp_boot?id=41639
                          "
                        >
                          Talk Event: Mercari US
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Japan Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Geffen */}
                          Kravis 670, 12:30pm – 1:30pm (50+ registered)
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
                            https://groups.gsb.columbia.edu/IDEAS/rsvp_boot?id=42458
                                                      "
                          >
                            Staff Matters
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Employee Resource Groups
                            </p>
                          </a>
                          <h4 style={{ fontWeight: 100 }}>
                            Kravis
                            {/* Geffen */}
                            1090, 3:30pm – 5:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=43412
                          "
                          >
                            Pasta Making 101
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis
                            {/* Geffen */}
                            201, 5:45pm – 7:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/REA/rsvp_boot?id=42876
                          "
                          >
                            REA Second Semester Social Kick Off
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Real Estate Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            The Expat, 7:30pm – 9:30pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41625
                          "
                          >
                            BBSA x Rugby Networking Event
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Jake's Dilemma, 8:30pm – 11:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=43345
                                                      "
                          >
                            CWIB x Cluster Q Crush Party
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Helen's Meatpacking, 9:00pm – ?? (75+ attending)
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
                          https://groups.gsb.columbia.edu/PSA/rsvp_boot?id=43197
                          "
                        >
                          Toastmaster Meeting
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Public Speaking Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Geffen */}
                          Kravis 820, 12:15pm – 1:45pm (25+ attending)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41009
                          "
                        >
                          Understanding Your US Job Offer and Paycheck
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis */}
                          Geffen 570, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=40141
                          "
                        >
                          Selling Japanese Food in the World: Gyoza and Beyond
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Center on Japanese Economy and Business
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis */}
                          Geffen 590, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />

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
                          https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=39543
                                                    "
                          >
                            CBS On Campus Social
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis  */}
                            Geffen 3rd floor, 5:45pm – 7:30pm (125+ registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/FinTech/rsvp_boot?id=43039
                          "
                          >
                            Alumni Networking Event
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia FinTech and Blockchain
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Cooper Still Chelsea, 6:00pm – 9:00pm (25+
                            registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                          https://groups.gsb.columbia.edu/wine/rsvp_boot?id=42626
                                                    "
                          >
                            Wine Society Disco
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Wine Society
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis  */}
                            Nightmoves at Four Horsemen, 9:00pm – 2:00am (75+
                            registered)
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=42802
                          "
                          >
                            Blackout Party
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Club Nebula, 10:00pm – 2:00am
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
                          https://groups.gsb.columbia.edu/PEC/rsvp_boot?id=43237
                          "
                        >
      Pillars of Wall Street Modeling Training 
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                          by Private Equity Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                        Online Event, All Weekend
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=37974
                          "
                        >
 Real Estate Career Forum
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                          by The Paul Milstein Center for Real Estate
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                        3rd Floor Geffen, 9:45am- 12pm (75+ attending)
                        </h4>
                      </div>

                                   <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/sba/rsvp_boot?id=42544
                          "
                        >
SBA / BSMU Black History Month [PPIL]
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                          by Sports Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                        Geffen 390, 12:00pm - 2:00pm (75+ attending)
                        </h4>
                      </div>

                      <br />

<div className="links">
  <a
    target="_blank"
    href="
    https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=43462
    "
  >
Conference Welcome Reception
    <p style={{ fontStyle: "italic", fontWeight: 100 }}>
    by Retail and Luxury Goods Club
    </p>
  </a>

  <h4 style={{ fontWeight: 100 }}>
  Broadway Bar, Nordstrom, 6:00pm - 8:00pm (50+ attending)
  </h4>
</div>




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
                          https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=39622
                          "
                        >
           Retail and Luxury Goods Club Conference: Retail Reinvented
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                          by Retail and Luxury Goods Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                        Geffen 3rd floor, (250+ registered)
                        </h4>
                      </div>
{/*
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
