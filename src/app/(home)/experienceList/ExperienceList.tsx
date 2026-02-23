import { Card } from '@/components/Card/Card';
import info from '../../../../experiences.json';

interface ExperienceInfo {
  skills: string[],
  title: string,
  description: string,
  business: string,
  endDate: string,
  startDate: string,
  businessURL: string
}
export default function ExperienceList(){
    const experiences: ExperienceInfo[] = info.experience;
  
  return(
    <div className='list'>
      {experiences.map(({
        business, businessURL, description, endDate, skills, startDate, title
      }) => (
        <Card
          key={`${endDate}-${businessURL}`}
          leftSide={
            {
              time: {
                startDate,
                endDate
              },
              img: ''
            }
          }
          url={businessURL}
          business={business}
          description={description}
          title={title}
          skills={skills}
        />
      ))}
    </div>
    
  )
}