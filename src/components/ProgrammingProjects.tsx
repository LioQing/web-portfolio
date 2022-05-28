import Body from './Body';
import InfoCard from './InfoCard';
import ProjectDetails from './ProjectDetails';
import '../styles.css';

const ProgrammingProjects = () => {
  return (
    <Body heading='Programming Projects'>
      <p>
        Some of my notable programming projects, the source codes are all on <a href='https://github.com/LioQing'>my GitHub page</a>.
      </p>
      <div className='project-row'>
        <div className='project-column'>
          <InfoCard
            title='The Tank Arena'
            imageSrc={`${process.env.PUBLIC_URL}/images/the-tank-arena.png`}>
            <ProjectDetails
              languages={['C++']}
              frameworks={['SFML']}
              type='Game'
              link='https://github.com/LioQing/The-Tank-Arena'
              description='Inspired by the Wii tank game, this is a summary of what I know about video game programming as I coded the entity, texture, physics and more components by myself.'/>
          </InfoCard>
          <InfoCard
            title='Tiny Terminal User Interface'
            imageSrc={`${process.env.PUBLIC_URL}/images/ttui.png`}>
            <ProjectDetails
              languages={['C++']}
              frameworks={['Linux System Libraries']}
              type='TUI I/O Library'
              link='https://github.com/LioQing/ttui'
              description='A lightweight TUI library I wrote to assist in my university project. Used many Linux library features for terminal input and output.'/>
          </InfoCard>
        </div>

        <div className='project-column'>
          <InfoCard
            title='Everything Daily'
            imageSrc={`${process.env.PUBLIC_URL}/images/everything-daily.png`}>
            <ProjectDetails
              languages={['C#']}
              frameworks={['UWP', 'WinUI']}
              type='Utility Desktop Application'
              link='https://github.com/LioQing/Everything-Daily'
              description='A Windows application for me to record my daily activities where I can create activity type, add records, delete records all using the app.'/>
          </InfoCard>
          <InfoCard
            title='Web Portfolio'
            imageSrc={`${process.env.PUBLIC_URL}/images/LioQing-half.png`}>
            <ProjectDetails
              languages={['TypeScript']}
              frameworks={['React']}
              type='Website'
              link='https://github.com/LioQing/web-portfolio'
              description='Yes, it is this project. This is the first web project I did after I started learning web development frameworks and TypeScript.'/>
          </InfoCard>
        </div>
      </div>
    </Body>
  );
}

export default ProgrammingProjects;