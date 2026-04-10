interface SkillCardProps {
    icon: string;
    color: string;
    text: string;
}

export const SkillCard = ({ icon, color, text }: SkillCardProps) => {
    return (
        <div className="skill-card">
            <i className={icon} style={{ fontSize: "52px", color }}></i>
            <span>{text}</span>
        </div>
    );
};