import styled from 'styled-components';
import Wrapper from './Wrapper';
import lib from './lib';

const Section = styled.section`
  margin: 0 auto;
  width: 90%;
  text-align: left;
  line-height: 2;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-image: url('/purple_feather_rev_min.png');
  background-position: center center;
  @media (max-width: 1280px) {
    background-image: none;
  }
  @media (max-width: 414px) {
    line-height: 1.5;
  }
`;
const H1 = styled.h1`
  font-size: 4.8rem;
`;
const Colorize = styled.span`
  color: var(--purple);
`;
const Ul = styled.ul`
  margin-bottom: 3rem;
`;
const Li = styled.li`
  font-size: 2.4rem;
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 540px;
`;
const Card = styled.div`
  background: var(--grayL);
  width: 48%;
  height: auto;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 1px 1px var(--teal);
  border-radius: 5px;
  border: 1px solid var(--purple);
  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
  }
  @media (max-width: 414px) {
    width: 94%;
  }
  @media (max-width: 280px) {
    min-width: 100%;
  }
`;
const CardTitle = styled.h3`
  font-size: 2.4rem;
  margin: 1rem;
  color: var(--teal);
`;
const CardDescription = styled.ul`
  margin: 0 auto;
`;

export default function Process() {
  const { process, Purplerize } = lib();
  return (
    <Wrapper>
      <Section id='process'>
        <H1>
          The <Purplerize>Process</Purplerize>
        </H1>
        <Ul>
          <Li>
            Icarus seeks pilots who are <Colorize>leaders</Colorize>,{' '}
            <Colorize>builders</Colorize> and <Colorize>contributors</Colorize>{' '}
            to enrich the community.
          </Li>
          <Li>
            If you're expecting a bootcamp and a golden ticket, this is{' '}
            <em>not</em> it.
          </Li>
          <Li>
            Icarus seeks people who are passionate about mastering their craft
            and enjoy learning in a friendly, collaborative environment.
          </Li>
        </Ul>
        <Cards>
          <Card>
            <CardTitle>1. Join the Icarus Initiative Discord</CardTitle>
            <CardDescription>
              <li>
                Get connected into the community as a member to interact and
                learn what it's about.
              </li>
              <li>
                Visit{' '}
                <a
                  href={process.discord.url}
                  title={process.discord.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  Icarus Discord
                </a>{' '}
                and send an @ to an admin at the entrance. Be patient. 😃
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>2. Complete the Figment Solana Protocol</CardTitle>
            <CardDescription>
              <li>
                Finish the{' '}
                <a
                  href={process.figment.url}
                  title={process.figment.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  figment course
                </a>{' '}
                to learn the basics while you wait to start expeditions.
              </li>
              <li>
                This also sets you up with a DataHub account and get familiar
                with the blockchain functions and methods.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>3. Find or Make A Squad</CardTitle>
            <CardDescription>
              <li>
                If enlisting as a captain, notify an admin to help you create a
                github team page, a github repo, and a squad discord channel.
              </li>
              <li>
                If enlisting as a pilot, the #enlist channel on discord or
                scroll through{' '}
                <a
                  href={process.teams.url}
                  title={process.teams.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  teams page
                </a>{' '}
                to find a squadron with less than 6 pilots and not in-flight
                (under team description).
              </li>
              <li>
                Introduce yourself and the captain(s) (aka Maintainer) will
                handle the recruitment.
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>4. Meet Squad and Chart Path</CardTitle>
            <CardDescription>
              <li>
                Captains will schedule a squad briefing in the discord to chart
                the expedition.
              </li>
              <li>
                The squad votes on takeoff date, duration, landing dates,
                pitstops, resources to evaluate and other details.
              </li>
              <li>
                The captains also collect pilot information for the{' '}
                <a
                  href={process.squadrons.url}
                  title={process.squadrons.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  roster
                </a>{' '}
                and will submit a PR for all the dates, pilots, and other key
                details.
              </li>
              <li>Await for the green light to takeoff!</li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>5. Start Expedition and Take Pitstops</CardTitle>
            <CardDescription>
              <li>
                Expeditions have pitstops, where pilots reconvene on discord to
                discuss project and resource details.
              </li>
              <li>
                Pilots also encouraged to tweet at their squadmates and at{' '}
                <a
                  href={process.twitter.url}
                  title={process.twitter.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  #IcarusSquadron
                </a>
                .
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>6. Landing and Debriefing</CardTitle>
            <CardDescription>
              <li>
                Squadrons lands at the end of the expedition and presents their
                journey.
              </li>
              <li>Captains to set up a meeting with a more senior squadron.</li>
              <li>
                Senior squadrons gives feedback and notify admins via a PR to
                report the{' '}
                <a
                  href={process.squadrons.url}
                  title={process.squadrons.title}
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                >
                  Actual Landing Date
                </a>
                .
              </li>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>7. Vote, Rest, and Redeploy</CardTitle>
            <CardDescription>
              <li>
                Captains collects majority votes to vote resources into the
                expdition's open slots.
              </li>
              <li>
                Squadrons, captains, or pilots can opt to create content for
                contribution.
              </li>
              <li>
                The squadron can take leave or get started on a new expedition!
              </li>
            </CardDescription>
          </Card>
        </Cards>
      </Section>
    </Wrapper>
  );
}
