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
                <h4>01/23 - 01/28</h4>
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
                      {/* 
                      <h2>All Day:</h2>

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://www.eventbrite.com/e/international-conference-on-crypto-marketing-tickets-435746087277
                            "
                        >
                          International Conference on Crypto-Marketing
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            All day Monday and Tuesday ($400)
                          </p>
                          <h4 style={{ fontWeight: 100 }}>Geffen Building</h4>
                        </a>
                        <br />
                      </div> */}

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                         
                            "
                        ></a>
                        <br />

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
                              https://groups.gsb.columbia.edu/PSA/rsvp_boot?id=41827
                            "
                            >
                              Going Unprepared*
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Public Speaking Association $10 Tickets (25+
                                registered)
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis 840, 12:00pm – 1:00pm
                            </h4>
                          </div>
                          <br />

                          {/* <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/iba/rsvp_boot?id=38047
                              "
                            >
                              2Y Israel Trek Info Session
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Israel Business Association (25+ registered)
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 620, 12:15pm – 1:30pm
                            </h4>
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=28876
                            "
                            >
                              The Japanese Economy: Strategies to Cope with a
                              Shrinking and Aging Population
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Center on Japanese Economy and Business
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 640, 12:30pm – 1:30pm (PPIL, 100+
                              registered)
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
                                https://groups.gsb.columbia.edu/acc/rsvp_boot?id=38186
                          "
                              >
                                An Evening at Fotografiska ft. David LaChapelle
                                <p
                           s       style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Arts Society
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                Fotografiska 281 Park Ave S, 6:00pm – 7:30pm
                                ($10 tickets, Waitlist)
                              </h4>
                            </div>
                            <div className="links">
                              <a
                                target="_blank"
                                href="
                                https://groups.gsb.columbia.edu/DAR/rsvp_boot?id=38293
                          "
                              >
                                Five after Five Dinner with Ariel Merrick '19,
                                Goldman Sachs & Co. LLC
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Development and Alumni Relations
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                7:30pm – 9:30pm
                              </h4>
                            </div>
                          </div> */}
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
                            https://groups.gsb.columbia.edu/osa/rsvp_boot?id=38268
                            "
                          >
                            Club Day
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by CBS Innovation & Design
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 300, 11:00pm – 2:00pm
                          </h4>
                        </div>

                        {/* <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CETA/rsvp_boot?id=38864
                            "
                          >
                            Relay Lunch and Learn 12/6
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Entrepreneurship Through Acquisition
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 590, 12:00pm – 1:45pm
                          </h4>
                        </div> */}

                        {/* <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=38690
                            "
                          >
                            December MAC n Cheese!
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Marketing Association of Columbia
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 440, 12:30pm – 1:45pm
                          </h4>
                        </div> */}

                        {/* <br /> */}
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
                            https://groups.gsb.columbia.edu/sec/rsvp_boot?id=38772
                          "
                          >
                            SEC End of Year Social
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Social Enterprise Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            The Craftsman, 5:45pm – 8:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/aba/rsvp_boot?id=38640
                          "
                          >
                            End of Semester Peking Duck Dinner
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Asian Business Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Peking Duck House, 6:00pm – 10:00pm (25+ registered,
                            $55 tickets)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/energy/rsvp_boot?id=38463
                          "
                          >
                            Power Trading & Hedging Deep Dive Event
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Energy & Infrastructure Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen 520, 6:00pm – 7:00pm (25+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://www.eventbrite.com/e/cu-there-industry-night-2022-tickets-468129888097
                          "
                          >
                            CU there! Industry Night 2022
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              By Columbia Alumni Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Lenfest Center for the Arts 615 W 129th Street,
                            6:00pm – 9:00pm
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
                      <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/XPCM/rsvp_boot?id=41386
                          "
                        >
                          Career Management Overview
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Experienced Professionals Career Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Online, 12:30pm – 1:30pm (over 50 registered)
                        </h4>
                      </div>
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
                            https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=42516
                          "
                          >
                            CWIB Spring Welcome Social
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            The Gin Mill, 6:00pm – 8:00pm
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41624
                          "
                          >
                            Consulting Association Rugby Happy Hour
                            {/* <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p> */}
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Jake's Dilemma, 8:30pm – 11:#0pm
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
                          https://www.eventbrite.com/e/advancing-innovation-and-investment-in-womens-health-tickets-504882054817
                          "
                        >
                          Advancing Innovation and Investment in Women’s Health
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            By The Healthcare and Pharmaceutical Management
                            Program Follow
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen Hall, 12:00pm – 1:15pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=41673
                          "
                        >
                          Tech Club Kickoff
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            By Tech Club Kickoff
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 820, 12:15pm – 1:15pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=38893
                          "
                        >
                          Tamer Center Clubs Kickoff: GBC and SEC
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 640, 12:00pm – 1:45pm (50+ attending)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=38557
                          "
                        >
                          Managing Difficult Conversations [PPIL]
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Bernstein Center for Leadership and Ethics
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 620, 12:15pm – 1:45pm
                        </h4>
                      </div>

                      {/*  <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=38684
                          "
                        >
                          Coefficient Capital - Consumer Investing Lunch & Learn
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Retail and Luxury Goods Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 540, 12:00pm – 1:00pm (25+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=28872
                          "
                        >
                          Measuring Risk and Return in Japan through Upheaval
                          and Uncertainty: A 30-year Overview
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Center on Japanese Economy and Business
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 820, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MRKT/rsvp_boot?id=38093
                          "
                        >
                          Premium Brand Strategy
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Marketing
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 570, 1:15pm – 1:45pm
                        </h4>
                      </div>
                          */}
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
                            https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=39541
                          "
                          >
                            CBS On-Campus Social: Welcome To Spring Semester
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Geffen Hall, 5:15pm – 8:15pm (375 students
                            registered)
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
                      {/* </div> */} 

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
                      {/* <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/mca/rsvp_boot?id=33185
                          "
                        >
                          Bain BCG Deloitte Kearney McK Strategy& AMA Panel
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Management Consulting Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 390, 12:00pm – 1:00pm (50+ registered)
                        </h4>
                      </div>

                      <br /> */}
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
