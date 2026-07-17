import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="section" id="about">
            <h2>О себе</h2>
            <div className="about-card">
                <div className="about-content">
                    <div className="about-text">
    <p>
    Более 10 лет управлял розничным бизнесом и командой до 25 человек.
    Работал на стыке бизнеса и разработки: участвовал в постановке задач,
    внедрении цифровых решений и оптимизации процессов.
  </p>

  <p>
    Сейчас работаю Frontend Developer и участвую в разработке коммерческой
    CRM-системы на React и TypeScript. Работаю с GitLab, Merge Requests,
    Code Review и поддержкой существующей кодовой базы.
  </p>

  <p>
    Специализируюсь на разработке пользовательских интерфейсов,
    уделяю внимание качеству кода, UX и производительности приложений.
    Сильная сторона - умение понимать бизнес-задачи и переводить их в
    удобные и понятные интерфейсы.
  </p>
</div>

                </div>
                <div className="cv-wrapper">
                    <a href="assets/cv/Fokin-Frontend.pdf" download className="btn-cv" aria-label="Скачать резюме в PDF">
                        Скачать резюме (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};