import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const profileImages = [
  {
    src: '/img/profile2.jpg',
    alt: 'Joking around after Jiu Jitsu practice.',
  },
  {
    src: '/img/profile1.jpg',
    alt: 'Dinner at a nice restuarant.',
  },
]

const bioParagraphs = [
  "Hi, my name is Jeff Balagosa and I'm a software developer in Las Vegas, NV.",
  'While I may not have as much professional experience specifically in software development, I do bring a wealth of knowledge and expertise in IT operations and infrastructure, with 18+ years of experience in the field. I am confident that my diverse background and strong technical skills make me a valuable asset to any team.',
  "I have a Computer Science Associates Degree and a Technical. Management Bachelor's Degree. In my career, I've worked on various projects, including automating tasks, implementing new software solutions, and simplifying the support environment. I'm proficient in multiple programming languages, including Javascript, HTML, CSS, Python, PowerShell, Bash/Shell Scripting, and Autohotkey.",
  "Outside of work, I'm a Brazilian Jiu Jitsu Black Belt. I enjoy spending time with my family, playing video games, and continuously improving my engineering skills. In the future, I hope to develop software to help people who suffer from severe ADHD and autism. I'm passionate about solving problems and building cool things with logic and algorithms. I want to leave a legacy in this industry.",
]

export const AboutMe = () => {
  const { ref: sectionRef } = useScrollAnimation<HTMLElement>()
  const { ref: aboutRef } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="about-me" data-testid="about-me-section" ref={sectionRef} className="hidden">
      <h2>About Me</h2>
      <div>
        {profileImages.map((image, index) => (
          <ProfileImage key={image.src} src={image.src} alt={image.alt} index={index} />
        ))}
      </div>
      <div ref={aboutRef} className="about hidden">
        {bioParagraphs.map((paragraph, index) => (
          <p key={`bio-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

type ProfileImageProps = {
  src: string
  alt: string
  index: number
}

const ProfileImage = ({ src, alt, index }: ProfileImageProps) => {
  const { ref, style } = useScrollAnimation<HTMLImageElement>({ index })
  return <img ref={ref} className="profile-pic hidden" src={src} alt={alt} style={style} />
}
