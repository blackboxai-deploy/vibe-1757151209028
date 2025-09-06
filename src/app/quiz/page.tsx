"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export default function QuizPage() {
  const questions: Question[] = [
    {
      id: 1,
      question: "Which of these is the strongest password?",
      options: [
        "password123",
        "MyBirthday1990!",
        "Tr0ub4dor&3",
        "correct horse battery staple"
      ],
      correct: 3,
      explanation: "Long passphrases with random words are much stronger than complex short passwords. They're easier to remember but harder for computers to crack.",
      category: "Password Security"
    },
    {
      id: 2,
      question: "You receive an urgent email from your 'bank' asking you to verify your account by clicking a link. What should you do?",
      options: [
        "Click the link immediately to secure your account",
        "Forward the email to friends to warn them",
        "Contact your bank directly using their official phone number",
        "Reply to the email asking for more information"
      ],
      correct: 2,
      explanation: "Never click links in suspicious emails. Always contact your bank directly using official contact methods to verify any account issues.",
      category: "Phishing Awareness"
    },
    {
      id: 3,
      question: "What is two-factor authentication (2FA)?",
      options: [
        "Using two different passwords",
        "A security method requiring two forms of verification",
        "Having two email accounts",
        "Installing two antivirus programs"
      ],
      correct: 1,
      explanation: "2FA requires something you know (password) and something you have (phone, security key) or something you are (fingerprint).",
      category: "Authentication"
    },
    {
      id: 4,
      question: "How often should you update your software?",
      options: [
        "Once a year",
        "Only when it stops working",
        "As soon as updates are available",
        "Never, updates cause problems"
      ],
      correct: 2,
      explanation: "Software updates often contain critical security patches. Installing them quickly helps protect against newly discovered vulnerabilities.",
      category: "Software Security"
    },
    {
      id: 5,
      question: "Which Wi-Fi network is safest to use?",
      options: [
        "Free public Wi-Fi at a coffee shop",
        "Your neighbor's unsecured network",
        "Your home network with WPA3 encryption",
        "Any network with a strong signal"
      ],
      correct: 2,
      explanation: "Your own secured network is safest. Public Wi-Fi can be monitored by attackers, and using someone else's network without permission is illegal.",
      category: "Network Security"
    },
    {
      id: 6,
      question: "What should you do if your computer is infected with ransomware?",
      options: [
        "Pay the ransom immediately",
        "Disconnect from internet and restore from clean backups",
        "Try to remove it yourself with free software",
        "Ignore it and hope it goes away"
      ],
      correct: 1,
      explanation: "Disconnect immediately to prevent spread, then restore from clean backups. Never pay ransoms as it encourages more attacks and doesn't guarantee recovery.",
      category: "Incident Response"
    },
    {
      id: 7,
      question: "What's the best way to handle suspicious pop-up ads?",
      options: [
        "Click 'X' to close them",
        "Click anywhere outside the pop-up",
        "Use Alt+F4 or close the entire browser tab",
        "Click 'Cancel' or 'No' buttons"
      ],
      correct: 2,
      explanation: "Malicious pop-ups can trigger downloads even when clicking 'X' or 'Cancel'. Force-close the tab or browser to avoid any interaction.",
      category: "Safe Browsing"
    },
    {
      id: 8,
      question: "Which backup strategy is most effective?",
      options: [
        "One backup on an external drive",
        "All backups stored in the same location",
        "3-2-1 rule: 3 copies, 2 different media types, 1 offsite",
        "Only cloud backups"
      ],
      correct: 2,
      explanation: "The 3-2-1 rule ensures redundancy and protection against multiple failure scenarios including local disasters and hardware failures.",
      category: "Data Protection"
    },
    {
      id: 9,
      question: "Someone calls claiming to be from IT support asking for your password. What should you do?",
      options: [
        "Give them the password since they're from IT",
        "Ask for their employee ID and call back",
        "Hang up and contact your real IT department",
        "Give them an old password instead"
      ],
      correct: 2,
      explanation: "Legitimate IT support never asks for passwords over the phone. This is a classic social engineering attack.",
      category: "Social Engineering"
    },
    {
      id: 10,
      question: "What makes a website secure for entering sensitive information?",
      options: [
        "It has a professional design",
        "It loads quickly",
        "It shows HTTPS with a padlock icon",
        "It's a popular website"
      ],
      correct: 2,
      explanation: "HTTPS encrypts data transmission between your browser and the website. Always look for the padlock icon when entering sensitive information.",
      category: "Web Security"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Excellent! You're a cybersecurity expert.";
    if (percentage >= 70) return "Good job! You have solid cybersecurity knowledge.";
    if (percentage >= 50) return "Not bad, but there's room for improvement.";
    return "Consider reviewing our prevention methods and threat information.";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Cybersecurity Knowledge Quiz
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Test your understanding of cybersecurity threats and prevention methods. 
              This quiz will help identify areas where you might need additional learning.
            </p>
            
            <Card className="max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle>Quiz Information</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2 text-gray-700">
                  <li>• 10 multiple-choice questions</li>
                  <li>• Covers all major cybersecurity topics</li>
                  <li>• Immediate feedback and explanations</li>
                  <li>• No time limit - take your time</li>
                  <li>• Can retake as many times as you want</li>
                </ul>
              </CardContent>
            </Card>

            <Button 
              onClick={() => setQuizStarted(true)} 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Results</h1>
            <div className="text-6xl font-bold text-blue-600 mb-2">{score}/{questions.length}</div>
            <div className="text-2xl text-gray-600 mb-4">{percentage.toFixed(0)}% Correct</div>
            <p className="text-xl text-gray-700 mb-6">{getScoreMessage(score)}</p>
          </div>

          <Alert className={`mb-8 ${percentage >= 70 ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'}`}>
            <AlertDescription className={percentage >= 70 ? 'text-green-800' : 'text-yellow-800'}>
              {percentage >= 70 
                ? "Great job! You have a strong understanding of cybersecurity principles."
                : "Consider reviewing the areas you missed and exploring our prevention methods guide."
              }
            </AlertDescription>
          </Alert>

          <div className="space-y-6 mb-8">
            {questions.map((question, index) => (
              <Card key={question.id} className={selectedAnswers[index] === question.correct ? 'border-green-200' : 'border-red-200'}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      Question {index + 1}: {question.question}
                    </CardTitle>
                    <Badge variant={selectedAnswers[index] === question.correct ? 'default' : 'destructive'}>
                      {selectedAnswers[index] === question.correct ? 'Correct' : 'Incorrect'}
                    </Badge>
                  </div>
                  <Badge variant="outline">{question.category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-2 rounded ${
                          optionIndex === question.correct
                            ? 'bg-green-100 text-green-800'
                            : optionIndex === selectedAnswers[index] && selectedAnswers[index] !== question.correct
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-50'
                        }`}
                      >
                        {option}
                        {optionIndex === question.correct && ' ✓'}
                        {optionIndex === selectedAnswers[index] && selectedAnswers[index] !== question.correct && ' ✗'}
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-blue-800"><strong>Explanation:</strong> {question.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button onClick={resetQuiz} size="lg" variant="outline">
              Retake Quiz
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="/prevention">Review Prevention Methods</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resources">Download Study Materials</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-2xl">
                {question.question}
              </CardTitle>
              <Badge variant="outline">{question.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}