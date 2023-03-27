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
                <h4>03/27 - 04/01</h4>
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
                              https://groups.gsb.columbia.edu/CSIMA/rsvp_boot?id=43946
                            "
                            >
                              [Investing in Asia series] Conversation with
                              Richard H. Lawrence, Jr Overlook Investments
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Columbia Student Investment Management
                                Association
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              Online, 12:00pm – 1:15pm (100+ attending)
                            </h4>
                          </div>

                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=39439
                            "
                            >
                              Social Impact Week, Inclusive Entrepreneurship
                              Fellowship Panel
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by The Tamer Center for Social Enterprise
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Kravis 640 12:00pm – 1:45pm
                            </h4>
                          </div>

                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=42437
                            "
                            >
                              Immigration Attorney Workshop: US Visa Options
                              Post-Graduation
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Career Management Center
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 390, 12:15pm – 1:45pm
                            </h4>
                          </div>

                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/BERN/rsvp_boot?id=43228
                            "
                            >
                              Harnessing Your Personal Influence as a Student
                              Leader [PPIL]
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Sanford C. Bernstein & Co. Center for
                                Leadership and Ethics
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              Geffen 490, 12:15pm – 1:30pm
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
                          https://groups.gsb.columbia.edu/MAC/rsvp_boot?id=43678
                          "
                            >
                              How to Write Winning Emails–A Workshop
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Marketing Association of Columbia
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 670, */}
                              Geffen 440, 6:00pm – 7:00pm
                              {/* (250+ attending) */}
                            </h4>
                          </div>

                          <br />
                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=41912
                          "
                            >
                              Robin Arzón: CWIB Women's History Month Keynote &
                              Community Reception
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Columbia Women in Business (CWIB)
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 670, */}
                              Cooperman Commons, 6:30pm – 8:45pm
                              {/* (250+ attending) */}
                            </h4>
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
                            https://groups.gsb.columbia.edu/CETA/rsvp_boot?id=44800
                            "
                          >
                            Discussion with Bruce Moszcelt and Trevor Lwin, Blue
                            Frame Capital Partners
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Entrepreneurship Through Acquisition
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Kravis 440, 12:00pm – 1:45pm
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/osa/rsvp_boot?id=43637
                            "
                          >
                            Student Leader Turbo Training: Reimbursement &
                            Contracts Refresher
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Office of Student Affairs
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 390, 12:00pm – 1:00pm
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=44449
                            "
                          >
                            Bake Sale
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Kravis Lobby, 12:00pm – 1:45pm
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/FinStudies/rsvp_boot?id=43889
                            "
                          >
                            No Free Lunch research seminar featuring Professors
                            Mark Zurack and Dominic Supera
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Program for Financial Studies
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 570, 12:15pm – 1:30pm (100+ registered)
                            {/* (100+ attending) */}
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/hlc/rsvp_boot?id=44772
                            "
                          >
                            Health & Wellness: Nutrition Chats
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Health & Wellness Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 420,
                            {/* Geffen 570,  */}
                            12:30pm – 1:30pm
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
                              https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=44505
                          "
                          >
                            Film Screening [PPIL]
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Black Business Student Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 670, */}
                            Dodge Hall 511, 7:00pm – 8:30pm
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
                          https://groups.gsb.columbia.edu/MGMT/rsvp_boot?id=44525
                          "
                        >
                          Technology Strategy Bonus Session - Kakao
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 820, &nbsp; */}
                          12:15pm – 1:45pm (50+ attending)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RESI/rsvp_boot?id=41447
                          "
                        >
                          Executives in Residence Lunch and Learn
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Executives in Residence Program
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 680, 12:30pm – 1:30pm
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
    https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=39441
    "
                        >
                          Social Impact Week, Sustaining World-Class Cultural
                          Institutions: Strategies from The Met and Whitney
                          Museums
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 820, 6:00pm – 8:00pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MENA/rsvp_boot?id=43856
    "
                        >
                          MENA x SABA - Ramadan Board Game Night
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Middle East and North Africa Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Hex & Co, 8:00pm – 11:00pm
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
                          MMA x Rugby Networking Event
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
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=43784
                          "
                        >
                          Student Leader Turbo Training: Event Planning Best
                          Practices
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 440 */}
                          Geffen 420, 12:00pm – 1:00pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=39440
                          "
                        >
                          Social Impact Week, Innovating for Impact: Leaders of
                          Color, Capital Access, and the Fight for Educational
                          Equity
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Tamer Center for Social Enterprise
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 640,
                          {/* CMC 7th Floor Geffen,  */}
                          12:00pm – 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/abc/rsvp_boot?id=44366
                          "
                        >
                          Africa Entrepreneurs Highlight: Njavwa Mutambo [PPIL]
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Africa Business Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 670, 12:15pm - 1:15pm (50+ attending)
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CBA/rsvp_boot?id=43771
    "
                        >
                          CBA Speaker Series: Jake Bullock from CANN
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Cannabis Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 420,
                          {/* Geffen 540,  */}
                          12:15pm – 1:15pm
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
                            https://groups.gsb.columbia.edu/TamerCenter/rsvp_boot?id=38488
"
                          >
                            Social Impact Week, Social Impact Cluster Auction
                            Night
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by The Tamer Center for Social Enterprise
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, */}
                            {/* Geffen 520,  */}
                            6:00pm – 10:00pm
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/JBSA/rsvp_boot?id=42888
"
                          >
                         JBSA Presents: The Masquerade
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Jewish Business Students Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, */}
                       10:00pm – 2:00am
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
                          https://groups.gsb.columbia.edu/bbsa/rsvp_boot?id=39969
                          "
                        >
                     
BBSA Elevate Conference 2023
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                          by Black Business Student Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          On Campus, 8:00am - 7:00pm (100+ registered)
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
                      {/* <div className="links">
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
                      </div> */}

                      <br />
                      {/* <div className="links">
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
                      </div> */}

                      <br />
                      {/* <div className="links">
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
