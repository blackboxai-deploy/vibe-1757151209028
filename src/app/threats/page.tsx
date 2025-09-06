import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ThreatsPage() {
  const threats = [
    {
      id: 1,
      title: "Phishing Attacks",
      severity: "High",
      description: "Fraudulent attempts to steal sensitive information through deceptive emails, websites, or messages.",
      warning: "Most common cybersecurity threat affecting 83% of organizations",
      examples: [
        "Fake bank emails asking for account verification",
        "Bogus delivery notifications with malicious links",
        "Spoofed social media login pages",
        "Urgent tax refund or penalty notices"
      ],
      indicators: [
        "Generic greetings like 'Dear Customer'",
        "Urgent or threatening language",
        "Spelling and grammar mistakes",
        "Suspicious sender addresses",
        "Unexpected attachments or links"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45800247-3e14-4017-a0d7-2648c4ebb994.png"
    },
    {
      id: 2,
      title: "Malware & Viruses",
      severity: "Critical",
      description: "Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems.",
      warning: "Can steal data, encrypt files, or take complete control of devices",
      examples: [
        "Ransomware encrypting personal files",
        "Trojan horses disguised as legitimate software",
        "Keyloggers recording passwords and personal information",
        "Browser hijackers redirecting web searches"
      ],
      indicators: [
        "Slow computer performance",
        "Unexpected pop-up advertisements",
        "Files becoming inaccessible or encrypted",
        "New toolbars or programs appearing",
        "Frequent system crashes or errors"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9719b580-0904-47cc-98c0-50ed753a8d07.png"
    },
    {
      id: 3,
      title: "Social Engineering",
      severity: "High",
      description: "Psychological manipulation techniques used to trick people into revealing confidential information.",
      warning: "Exploits human psychology rather than technical vulnerabilities",
      examples: [
        "Phone calls pretending to be IT support",
        "Fake surveys requesting personal information",
        "Impersonation of company executives",
        "Pretexting scenarios to gain trust"
      ],
      indicators: [
        "Unsolicited contact requesting information",
        "Creating false sense of urgency",
        "Appeals to authority or fear",
        "Requests to bypass normal procedures",
        "Offering rewards or threatening consequences"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89807651-6469-431a-bc37-75d3450860f2.png"
    },
    {
      id: 4,
      title: "Password Attacks",
      severity: "Medium",
      description: "Various methods used to crack, steal, or guess passwords to gain unauthorized access to accounts.",
      warning: "Weak passwords are compromised within minutes",
      examples: [
        "Brute force attacks trying common passwords",
        "Dictionary attacks using common words",
        "Credential stuffing with leaked password lists",
        "Password spraying across multiple accounts"
      ],
      indicators: [
        "Multiple failed login attempts",
        "Unexpected password reset notifications",
        "Accounts being locked out frequently",
        "Suspicious activity in account logs",
        "Notifications of logins from unknown locations"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fe2b233-c14d-4cda-9819-7c84c5241988.png"
    },
    {
      id: 5,
      title: "Unsecured Wi-Fi",
      severity: "Medium",
      description: "Public or poorly secured wireless networks that allow attackers to intercept data transmission.",
      warning: "Data transmitted over unsecured networks can be easily intercepted",
      examples: [
        "Free Wi-Fi in cafes, airports, or hotels",
        "Networks without password protection",
        "Fake Wi-Fi hotspots set up by attackers",
        "Home networks with default passwords"
      ],
      indicators: [
        "Network names that seem suspicious or generic",
        "No password required to connect",
        "Slow or unstable internet connection",
        "Popup requests for personal information",
        "Unexpected certificate warnings"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd94578f-c7eb-4d7b-9980-d24655fcab56.png"
    },
    {
      id: 6,
      title: "Ransomware",
      severity: "Critical",
      description: "Malicious software that encrypts files and demands payment for the decryption key.",
      warning: "Can permanently destroy data and disrupt operations for weeks",
      examples: [
        "Files becoming encrypted and inaccessible",
        "Ransom notes demanding cryptocurrency payment",
        "System-wide encryption affecting entire networks",
        "Threats to publish sensitive data publicly"
      ],
      indicators: [
        "Files with unusual extensions (.encrypted, .locked)",
        "Desktop wallpaper changed to ransom message",
        "Inability to open documents or files",
        "Ransom notes appearing in folders",
        "System performance degradation during encryption"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5545be62-2fa8-4d5c-ab51-a9f2da19f15c.png"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive";
      case "High":
        return "default";
      case "Medium":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Common Cybersecurity Threats
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding these threats is the first step in protecting yourself. Learn to identify warning signs 
            and recognize attack patterns before they cause damage.
          </p>
        </div>

        {/* Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">
            <strong>Important:</strong> If you suspect you are currently under attack or have been compromised, 
            visit our <a href="/emergency" className="underline font-semibold">Emergency Response</a> page immediately.
          </AlertDescription>
        </Alert>

        {/* Threats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {threats.map((threat) => (
            <Card key={threat.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {threat.title}
                  </CardTitle>
                  <Badge variant={getSeverityColor(threat.severity)}>
                    {threat.severity} Risk
                  </Badge>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  {threat.description}
                </CardDescription>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                  <p className="text-red-800 font-medium">⚠️ {threat.warning}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Threat Image */}
                <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={threat.image}
                    alt={`Visual example of ${threat.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Examples:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {threat.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>

                {/* Warning Signs */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Warning Signs:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {threat.indicators.map((indicator, index) => (
                      <li key={index}>{indicator}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Now Learn How to Protect Yourself
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Understanding threats is just the beginning. Discover proven prevention methods and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/prevention"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Learn Prevention Methods
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Test Your Knowledge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}