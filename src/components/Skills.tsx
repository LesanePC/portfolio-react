import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SkillCard } from './SkillCard';
import { skills } from '../data/skills';

export const Skills = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="section" id="skills">
            <h2>Навыки</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index}
                        icon={skill.icon}
                        color={skill.color}
                        text={skill.text}
                    />
                ))}
            </div>
        </section>
    );
};