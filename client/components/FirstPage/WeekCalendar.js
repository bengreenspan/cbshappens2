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
                <h4>02/27 - 03/04</h4>
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
                          <br/>
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=38914
                              "
                            >
                              SESF Information Session
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by The Tamer Center for Social Enterprise
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 690, */}
                              Geffen 540, 12:00pm – 1:45pm (50+ attending)
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=40143
                            "
                            >
                              Seven Reflections on Japan's Economy, Monetary
                              Policy, and the Bank of Japan
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Center on Japanese Economy and Business
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis 820, &nbsp;
                              {/* Geffen 540, */}
                               12:30pm – 1:30pm (50+ attending)
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/sbcp/rsvp_boot?id=42054
                            "
                            >
                              SBCP Training #3 - Data Gathering and Analysis
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Small Business Consulting Program
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis 620, &nbsp;
                              {/* Geffen 540, */}
                              12:30pm – 1:30pm
                              {/* (50+ attending) */}
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/green/rsvp_boot?id=43582
                            "
                            >
                              Expert Panel on Home Electrification
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Green Business Club
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis 640 and virtual &nbsp;
                              {/* Geffen 540, */}
                              12:30pm – 1:30pm
                              {/* (50+ attending) */}
                            </h4>
                            {/* <hr /> */}
                          </div>
                          <br />

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
                                https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=43533
                          "
                              >
                                [PPIL] Black Innovation Series: Diversity in
                                Capital Markets
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Black Business Student Association
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                {/* Kravis 640  */}
                                Geffen 590, 6:00pm – 8:00pm
                                {/* (50+ attending) */}
                              </h4>
                            </div>
                            <br />
                            <div className="links">
                              <a
                                target="_blank"
                                href="
                                https://groups.gsb.columbia.edu/CEO/rsvp_boot?id=43179
                          "
                              >
                                CBS Startup Pitch Night
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Columbia Entrepreneurs Organization
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                Kravis 670, &nbsp;
                                {/* Geffen 590, */}
                                6:00pm – 8:00pm (125+ attending)
                              </h4>
                            </div>

                            <br />
                            <div className="links">
                              <a
                                target="_blank"
                                href="
                                https://groups.gsb.columbia.edu/HCPP/rsvp_boot?id=43299
                          "
                              >
                                Healthcare Hedgefund Speaker Series - Eli Casdin
                                '03
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Healthcare and Pharmaceutical Management
                                  Program
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                {/* Kravis 670, */}
                                Geffen 520, 6:00pm – 7:00pm
                                {/* (125+ attending) */}
                              </h4>
                            </div>

                            <br />
                            <div className="links">
                              <a
                                target="_blank"
                                href="
                                https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=43486
                          "
                              >
                                Harlem Dinner Experience
                                <p
                                  style={{
                                    fontStyle: "italic",
                                    fontWeight: 100,
                                  }}
                                >
                                  by Columbia Women in Business (CWIB)
                                </p>
                              </a>

                              <h4 style={{ fontWeight: 100 }}>
                                {/* Kravis 670, */}
                                {/* Geffen 520,  */}
                                Vinateria Harlem, 7:00pm – 8:30pm
                                {/* (125+ attending) */}
                              </h4>
                            </div>
                          </div>
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
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=42136
                            "
                          >
                            [PPIL] Black Innovation Panel Series: Sports & Black
                            Culture
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 670, &nbsp;
                            {/* Geffen 520, */}
                            12:00pm – 1:30pm
                            {/* (125+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/FLC/rsvp_boot?id=43628
                            "
                          >
                            Financial Literacy Club Volunteering Session
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Financial Literacy Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 670, */}
                            Geffen 520, 12:00pm – 1:45pm
                            {/* (125+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/hcia/rsvp_boot?id=43174
                            "
                          >
                            Ask Me Anything: Finance (VC/PE)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Health Care Industry Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 670, */}
                            Geffen 570, 12:15pm – 1:00pm
                            {/* (125+ attending) */}
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CHAZ/rsvp_boot?id=40675
                            "
                          >
                            Waze co-founder Uri Levine A Handbook for
                            Entrepreneurs
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by The Jerome A. Chazen Institute for Global
                              Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 670, */}
                            Geffen 620, 12:15pm – 1:00pm (250+ attending)
                          </h4>
                        </div>

                        <br />
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
                      {/* <h2>Lunch Happenings:</h2>
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
                          Geffen 420,
                          {/* Kravis */}
                      {/* 12:15pm – 1:45pm (75+ registered) */}
                      {/* </h4> */}
                      {/* </div> */}
                    </div>

                    {/* <hr /> */}
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
                              https://groups.gsb.columbia.edu/microbrew/rsvp_boot?id=43268
                          "
                        >
                          Bob's Your Uncle Micro Brew Event
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Micro-Brew Society
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 670, */}
                          {/* Geffen 620, */}
                          Bob's Your Uncle, 5:45pm – 7:45pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                              https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=43170
                          "
                        >
                          Building your brand
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Women in Business (CWIB)
                          </p>
                        </a>
                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 1040
                          {/* Geffen 520 */}, 5:30pm – 6:30pm (75+ registered)
                        </h4>
                      </div>

                      {/* <hr /> */}

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
                          https://groups.gsb.columbia.edu/hlc/rsvp_boot?id=42132
                          "
                        >
                          Future of Fitness: Technology, Community, and
                          Innovation
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Health & Wellness Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 440
                          {/* Geffen 520 */}, 12:15pm – 1:45pm (75+ registered)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=41896
                          "
                        >
                          American Cultural Conversations - The Oscars!
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis */}
                          CMC 7th Floor Geffen, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=43184
                          "
                        >
                          Tech Recruiting Process with Courtney Andrews
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 540, 12:30pm - 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=43436
    "
                        >
                          Ask Me Anything - Careers in Healthcare
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 570, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=42439
"
                        >
                          EIR Lunch and Learn
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Executives in Residence Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 410, &nbsp;
                          {/* Geffen 570,  */}
                          12:30pm – 1:30pm
                        </h4>
                      </div>

                      {/* <hr /> */}
                      <br />
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
                      {/* Geffen 3rd floor, 5:45pm – 7:30pm (125+ registered)
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
                          </a> */}

                      {/* <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis  */}
                      {/* Nightmoves at Four Horsemen, 9:00pm – 2:00am (75+
                            registered)
                          </h4> */}
                      {/* </div> */}

                      {/* <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=42802
                          " */}
                      {/* > */}
                      {/* Blackout Party
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a> */}
                      {/* 
                          <h4 style={{ fontWeight: 100 }}>
                            Club Nebula, 10:00pm – 2:00am
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
                          https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=43626
                          "
                        >
                          Volunteer Opportunity with WANA Community Center in
                          Harlem
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Student Government Executive Board
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          WANA Community Center, 12:00pm – 2:00pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/APEC/rsvp_boot?id=43538
                          "
                        >
                          “Villagers in the City”: Chinese Migrant Youth Amidst
                          Urbanization
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by APEC Study Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Online, 12:00pm - 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/hcia/rsvp_boot?id=43466
                          "
                        >
                          HCIA Trek - New York Presbyterian
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Health Care Industry Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          New York Presbyterian - DHK Center, 2:00pm - 3:30pm
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

                      <br />
                      <div className="links">
                        <a target="_blank">No Events Found</a>
                      </div>
                      {/*

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RLGC/rsvp_boot?id=39622
                          "
                        >
                          Retail and Luxury Goods Club Conference: Retail
                          Reinvented
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
