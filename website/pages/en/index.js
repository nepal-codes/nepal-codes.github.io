const React = require("react");
const ReactDOMServer = require("react-dom/server");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <React.Fragment>
        <div className="projectLogo">
          <img src={`${baseUrl}img/logo/logo.png`} alt="Project Logo" />
        </div>
        <h2 className="projectTitle">
          {props.title}
          <small>{props.tagline}</small>
        </h2>
      </React.Fragment>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Mission</Button>
            <Button href={docUrl("doc1.html")}>Projects</Button>
            <Button href={docUrl("doc2.html")}>Join</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const SubscriptionForm = () => {
      return (
        <React.Fragment>
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
          <div id="mc_embed_signup">
            <form
              action="https://nepalcodes.us4.list-manage.com/subscribe/post?u=6429aaeccb0a0afdc33847559&amp;id=0f86a0ffaa"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    Email Address <span class="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">
                    First Name <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    name="FNAME"
                    class="required"
                    id="mce-FNAME"
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">
                    Last Name <span class="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    name="LNAME"
                    class="required"
                    id="mce-LNAME"
                  />
                </div>
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style={{display: "none"}}
                  ></div>
                </div>
                <div
                  style={{position: "absolute", left: "-5000px"}}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_6429aaeccb0a0afdc33847559_0f86a0ffaa"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
          <script type="text/javascript">
            {`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`}
          </script>
        </React.Fragment>
      );
      const [first, setFirst] = React.useState();
      const [last, setLast] = React.useState();
      const [email, setEmail] = React.useState();
      // 'Content-Type': 'application/x-www-form-urlencoded',

      const onSubmit = () => {
        console.log("onSubmit");
        const url =
          "https://nepalcodes.us4.list-manage.com/subscribe/post?u=6429aaeccb0a0afdc33847559&amp;id=0f86a0ffaa";
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            EMAIL: email,
            LNAME: last,
            FNAME: first,
          }),
        }).then((response) => {
          console.log(response);
        });
      };

      return (
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={first}
              onChange={(event) => {
                setFirst(event.target.value);
              }}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={last}
              onChange={(event) => {
                setLast(event.target.value);
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <button
            onClick={() => {
              console.log("hi button");
            }}
          >
            Submit
          </button>
        </div>
      );
    };

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const MissionStatement = () => (
      <Block background="light">
        {[
          {
            content: "Insert inspiring mission statement",
            image: `${baseUrl}img/undraw_group_chat.svg`,
            imageAlign: "left",
            title: "Nepal Codes",
          },
        ]}
      </Block>
    );

    const AboutUs = () => (
      <Block>
        {[
          {
            content:
              "Nepal codes is a community for students, professionals and" +
              "specialists in software development and technology. we collaborate" +
              "with different institutions to empower nepalese with innovations in" +
              "technology. Nepal codes is a not-for-profit, inclusive organization" +
              "we welcome all including youth, women and minorities in technology" +
              "to participate in meetups, workshops and projects. please join us!.",
            image: `${baseUrl}img/undraw_pair_programming.svg`,
            imageAlign: "right",
            title: "About Us",
          },
        ]}
      </Block>
    );

    const GetInTouch = () => (
      <Block background="light">
        {[
          {
            content: ReactDOMServer.renderToString(<SubscriptionForm />),
            image: `${baseUrl}img/undraw_real_time_collaboration.svg`,
            imageAlign: "left",
            title: "Get In Touch",
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <MissionStatement />
          <AboutUs />
          <GetInTouch />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
