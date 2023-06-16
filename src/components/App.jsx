import { useState } from 'react';
import Section from './Section/Section';
import ButtonsList from './ButtonsList/ButtonsList';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onClick = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotal = () => good + neutral + bad;
  const countPositive = () => {
    if (countTotal()) {
      return Math.round((good / countTotal()) * 100);
    }
  };

  return (
    <>
      <Section title="Please leave feedbaсk">
        <ButtonsList options={options} onButtonClick={onClick} />
      </Section>
      <Section title="Statistics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            countPositive={countPositive()}
          />
        ) : (
          <h2>No feedback given</h2>
        )}
      </Section>
    </>
  );
};
