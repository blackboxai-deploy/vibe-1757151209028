import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PreventionPage() {
  const preventionMethods = [
    {
      id: 1,
      title: "Strong Password Management",
      priority: "Essential",
      description: "Create and manage secure passwords to protect all your accounts.",
      steps: [
        "Use passwords with at least 12-16 characters",
        "Include uppercase, lowercase, numbers, and symbols",
        "Avoid personal information, common words, or patterns",
        "Use unique passwords for each account",
        "Consider using passphrases (4-5 random words)",
        "Never share passwords or write them down unsecurely"
      ],
      tools: [
        "Password managers (Bitwarden, LastPass, 1Password)",
        "Built-in browser password generators",
        "Two-factor authentication apps",
        "Password strength checkers"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2fb6218a-27ef-4386-a6c5-15d422dbf969.png"
    },
    {
      id: 2,
      title: "Two-Factor Authentication (2FA)",
      priority: "Critical",
      description: "Add an extra layer of security to your accounts beyond just passwords.",
      steps: [
        "Enable 2FA on all important accounts (email, banking, social media)",
        "Use authenticator apps instead of SMS when possible",
        "Keep backup codes in a secure location",
        "Set up multiple authentication methods",
        "Regularly review and update 2FA settings",
        "Never share authentication codes with anyone"
      ],
      tools: [
        "Google Authenticator, Authy, Microsoft Authenticator",
        "Hardware security keys (YubiKey, Google Titan)",
        "Built-in platform authenticators",
        "Backup authentication methods"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6085d870-5925-49c9-bcb1-9f13b0de6922.png"
    },
    {
      id: 3,
      title: "Software Updates & Patches",
      priority: "Essential",
      description: "Keep all software current to protect against known security vulnerabilities.",
      steps: [
        "Enable automatic updates for operating systems",
        "Update browsers, plugins, and extensions regularly",
        "Install security patches as soon as available",
        "Remove unused software and plugins",
        "Keep antivirus software updated and active",
        "Monitor security advisories for critical updates"
      ],
      tools: [
        "Built-in update managers (Windows Update, Software Update)",
        "Antivirus software with auto-update",
        "Browser extension managers",
        "Patch management tools"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8d8fc6b-cc00-4e6e-b500-ca223bda8cdd.png"
    },
    {
      id: 4,
      title: "Email Security Practices",
      priority: "High",
      description: "Protect yourself from phishing and email-based attacks.",
      steps: [
        "Verify sender identity before clicking links or attachments",
        "Hover over links to check actual destinations",
        "Be suspicious of urgent or threatening messages",
        "Never provide sensitive information via email",
        "Use email filters and spam protection",
        "Report suspicious emails to your IT department"
      ],
      tools: [
        "Email security filters",
        "Anti-phishing browser extensions",
        "Email encryption tools",
        "Secure email providers"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/183e14d9-d1d0-4f52-9842-2efb45e566f3.png"
    },
    {
      id: 5,
      title: "Safe Browsing Habits",
      priority: "High",
      description: "Navigate the internet securely and avoid malicious websites.",
      steps: [
        "Only visit trusted, legitimate websites",
        "Look for HTTPS (padlock icon) on sensitive sites",
        "Avoid clicking on suspicious pop-ups or ads",
        "Download software only from official sources",
        "Use reputable search engines and avoid suspicious results",
        "Clear browser data regularly"
      ],
      tools: [
        "Browser security extensions",
        "Ad blockers and pop-up blockers",
        "Website reputation checkers",
        "Secure DNS services"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acc035aa-83b9-4452-a705-09927e7a4ab3.png"
    },
    {
      id: 6,
      title: "Data Backup & Recovery",
      priority: "Critical",
      description: "Protect your important data with regular backups and recovery planning.",
      steps: [
        "Follow the 3-2-1 backup rule (3 copies, 2 different media, 1 offsite)",
        "Automate regular backups of important files",
        "Test backup restoration regularly",
        "Store backups in secure, encrypted locations",
        "Keep backups disconnected from main systems",
        "Document your backup and recovery procedures"
      ],
      tools: [
        "Cloud backup services (Google Drive, Dropbox, OneDrive)",
        "External hard drives and USB drives",
        "Network-attached storage (NAS)",
        "Backup software with encryption"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1ac5dfd-ea1d-436f-bf06-ac458a9423fa.png"
    }
  ];

  const quickTips = [
    {
      category: "Daily Habits",
      tips: [
        "Log out of accounts when finished, especially on shared computers",
        "Lock your screen when stepping away from your device",
        "Be cautious about what you share on social media",
        "Use privacy settings on social platforms",
        "Verify requests for sensitive information via phone or in person"
      ]
    },
    {
      category: "Network Security",
      tips: [
        "Avoid using public Wi-Fi for sensitive activities",
        "Use VPN when connecting to public networks",
        "Change default passwords on routers and devices",
        "Regularly review connected devices on your network",
        "Turn off file sharing when on public networks"
      ]
    },
    {
      category: "Mobile Security",
      tips: [
        "Keep your phone's operating system updated",
        "Only download apps from official app stores",
        "Review app permissions before installing",
        "Use screen locks and biometric authentication",
        "Be cautious with public charging stations"
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "destructive";
      case "Essential":
        return "default";
      case "High":
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
            Cybersecurity Prevention Methods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implement these proven strategies to significantly reduce your risk of cyber attacks. 
            Start with the essential methods and gradually build comprehensive protection.
          </p>
        </div>

        {/* Success Alert */}
        <Alert className="mb-8 border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">
            <strong>Good News:</strong> Following these prevention methods can reduce your risk of cyber attacks by over 95%. 
            Start with the "Critical" and "Essential" items first.
          </AlertDescription>
        </Alert>

        {/* Main Content Tabs */}
        <Tabs defaultValue="methods" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="methods">Prevention Methods</TabsTrigger>
            <TabsTrigger value="tips">Quick Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {preventionMethods.map((method) => (
                <Card key={method.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {method.title}
                      </CardTitle>
                      <Badge variant={getPriorityColor(method.priority)}>
                        {method.priority}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg text-gray-600">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Method Image */}
                    <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={method.image}
                        alt={`Visual guide for ${method.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Implementation Steps */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Implementation Steps:</h4>
                      <ul className="list-decimal list-inside space-y-2 text-gray-700">
                        {method.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended Tools */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recommended Tools:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {method.tools.map((tool, index) => (
                          <li key={index}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickTips.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Implementation Priority Guide */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Implementation Priority Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Here (Critical)</h3>
              <p className="text-gray-600">Two-Factor Authentication & Data Backup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Next Steps (Essential)</h3>
              <p className="text-gray-600">Strong Passwords & Software Updates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced (High Priority)</h3>
              <p className="text-gray-600">Email Security & Safe Browsing</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how well you understand these prevention methods with our interactive quiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Take Security Quiz
            </a>
            <a
              href="/resources"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Download Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}