import ToolCard from './components/ToolCard';
import './styles/_tools.scss';

export default function Home() {
  const tools = [
    { name: 'Age Calculator', path: '/tools/age-calculator', description: 'Calculate your age or time difference.' },
    { name: 'Days Between Dates', path: '/tools/days-between-dates', description: 'Find the number of days between two dates.' },
    { name: 'Word Counter', path: '/tools/word-counter', description: 'Count words and characters in your text.' },
    { name: 'Password Generator', path: '/tools/password-generator', description: 'Generate secure random passwords.' },
    { name: 'BMI Calculator', path: '/tools/bmi-calculator', description: 'Calculate your Body Mass Index.' },
    { name: 'Loan Calculator', path: '/tools/loan-calculator', description: 'Estimate your loan payments using easy customizable terms.' },

  ];

  return (
    <div className="welcome container">
      <h1>Welcome to QuicklyTools</h1>
      <p>Your one-stop collection of online utility tools.</p>
      <div className="tool-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.path} name={tool.name} path={tool.path} description={tool.description} />
        ))}
      </div>
    </div>
  );
}