import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800" },
  { name: "JavaScript", level: 95, color: "from-yellow-500 to-orange-500" },
  { name: "CSS/SCSS", level: 90, color: "from-pink-500 to-purple-500" },
  { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
  { name: "Vue.js", level: 80, color: "from-green-500 to-emerald-500" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
  { name: "Node.js", level: 75, color: "from-green-600 to-green-800" },
];

const tools = [
  "Visual Studio Code",
  "Git & GitHub",
  "Figma",
  "Chrome DevTools",
  "Webpack",
  "Vite",
  "Shopify Liquid",
  "WordPress"
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delays
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                        animatedSkills.includes(index) ? '' : 'w-0'
                      }`}
                      style={{
                        width: animatedSkills.includes(index) ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Environment */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Tools & Environment</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <Card
                  key={tool}
                  className="p-4 glass-effect hover:glow-effect transition-all duration-300 transform hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{tool}</span>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 glass-effect rounded-lg">
              <h4 className="text-lg font-semibold mb-4">What I bring to the table:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clean, maintainable code architecture</li>
                <li>• Responsive design principles</li>
                <li>• Performance optimization</li>
                <li>• Cross-browser compatibility</li>
                <li>• Accessibility best practices</li>
                <li>• Modern development workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
