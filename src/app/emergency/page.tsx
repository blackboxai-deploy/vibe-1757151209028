import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function EmergencyPage() {
  const emergencyScenarios = [
    {
      title: "Suspected Phishing Attack",
      urgency: "Medium",
      description: "You clicked a suspicious link or provided information to a potentially fraudulent source.",
      immediateActions: [
        "Do NOT provide any additional information",
        "Close the suspicious website/email immediately",
        "Change passwords for any accounts that may be compromised",
        "Run a full antivirus scan on your device",
        "Check your bank and credit card statements",
        "Enable account alerts and monitoring"
      ],
      followUpActions: [
        "Report the phishing attempt to your IT department",
        "Forward phishing emails to anti-phishing organizations",
        "Monitor accounts closely for 30 days",
        "Consider placing a fraud alert on credit reports"
      ]
    },
    {
      title: "Ransomware Infection",
      urgency: "Critical",
      description: "Your files are encrypted and you see ransom demands on your screen.",
      immediateActions: [
        "DO NOT PAY THE RANSOM",
        "Disconnect the infected device from internet/network immediately",
        "Take photos of ransom messages for documentation",
        "Do not turn off the computer if possible",
        "Isolate other devices on the same network",
        "Contact your IT department or cybersecurity professional"
      ],
      followUpActions: [
        "Report to local law enforcement and FBI's IC3",
        "Restore files from clean backups (scan them first)",
        "Rebuild infected systems from scratch",
        "Update all security software and systems",
        "Implement additional backup procedures"
      ]
    },
    {
      title: "Compromised Account",
      urgency: "High",
      description: "You notice unauthorized activities, logins, or changes in your accounts.",
      immediateActions: [
        "Change password immediately from a secure device",
        "Enable two-factor authentication if not already active",
        "Log out of all sessions on all devices",
        "Check and secure recovery options (email, phone)",
        "Review account activity and settings",
        "Contact the service provider if you're locked out"
      ],
      followUpActions: [
        "Monitor account activity for several weeks",
        "Change passwords on other accounts using the same credentials",
        "Set up account monitoring and alerts",
        "Review and update security questions",
        "Consider identity monitoring services"
      ]
    },
    {
      title: "Malware Infection",
      urgency: "High",
      description: "Your device is running slowly, showing pop-ups, or behaving unexpectedly.",
      immediateActions: [
        "Disconnect from the internet to prevent data theft",
        "Run a full system scan with updated antivirus software",
        "Boot from a rescue disk if system is unresponsive",
        "Document any suspicious messages or behaviors",
        "Back up important files to an offline location (scan first)",
        "Avoid using the infected system for sensitive activities"
      ],
      followUpActions: [
        "Remove or quarantine detected threats",
        "Update all software and operating system",
        "Change passwords from a clean device",
        "Monitor system performance and behavior",
        "Consider professional malware removal if needed"
      ]
    },
    {
      title: "Identity Theft",
      urgency: "Critical",
      description: "You discover unauthorized use of your personal information or accounts.",
      immediateActions: [
        "Place fraud alerts with all three credit bureaus",
        "Change passwords on all financial accounts",
        "Contact banks and credit card companies",
        "File a report with local police",
        "Report to the FTC at IdentityTheft.gov",
        "Document all fraudulent activities"
      ],
      followUpActions: [
        "Monitor credit reports regularly",
        "Consider freezing your credit",
        "Set up identity monitoring services",
        "File insurance claims if applicable",
        "Follow up with law enforcement regularly"
      ]
    },
    {
      title: "Data Breach Notification",
      urgency: "Medium",
      description: "You received notification that a service you use has been breached.",
      immediateActions: [
        "Read the breach notification carefully",
        "Change your password for the affected service",
        "Enable two-factor authentication if available",
        "Monitor the account for suspicious activity",
        "Check if other accounts use the same password",
        "Review what type of data was compromised"
      ],
      followUpActions: [
        "Monitor accounts and credit for unusual activity",
        "Sign up for free credit monitoring if offered",
        "Consider additional identity protection measures",
        "Update security practices based on lessons learned",
        "Stay informed about the breach investigation"
      ]
    }
  ];

  const emergencyContacts = [
    {
      category: "Cybersecurity Incidents",
      contacts: [
        { name: "FBI Internet Crime Complaint Center (IC3)", phone: "N/A", website: "https://ic3.gov" },
        { name: "CISA Cybersecurity Hotline", phone: "1-888-282-0870", website: "https://cisa.gov" },
        { name: "Local IT Support", phone: "Contact your organization", website: "N/A" }
      ]
    },
    {
      category: "Identity Theft & Fraud",
      contacts: [
        { name: "Federal Trade Commission", phone: "1-877-438-4338", website: "https://identitytheft.gov" },
        { name: "Equifax Fraud Alert", phone: "1-800-525-6285", website: "https://equifax.com" },
        { name: "Experian Fraud Alert", phone: "1-888-397-3742", website: "https://experian.com" },
        { name: "TransUnion Fraud Alert", phone: "1-800-680-7289", website: "https://transunion.com" }
      ]
    },
    {
      category: "Financial Fraud",
      contacts: [
        { name: "Your Bank", phone: "Check your bank card", website: "N/A" },
        { name: "Credit Card Companies", phone: "Check your credit cards", website: "N/A" },
        { name: "AARP Fraud Watch", phone: "1-877-908-3360", website: "https://aarp.org/fraudwatchnetwork" }
      ]
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
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
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTitle className="text-red-800 text-2xl font-bold">🚨 Emergency Response Center</AlertTitle>
            <AlertDescription className="text-red-800 text-lg">
              If you are experiencing an active cybersecurity incident, follow the appropriate steps below immediately. 
              Time-sensitive actions can prevent further damage.
            </AlertDescription>
          </Alert>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Emergency Response
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick action guides for common cybersecurity emergencies. Follow these steps to minimize damage 
            and begin recovery as quickly as possible.
          </p>
        </div>

        {/* Emergency Scenarios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Scenarios</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergencyScenarios.map((scenario, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {scenario.title}
                    </CardTitle>
                    <Badge variant={getUrgencyColor(scenario.urgency)}>
                      {scenario.urgency} Priority
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-gray-600">
                    {scenario.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Immediate Actions */}
                  <div>
                    <h4 className="font-bold text-red-700 mb-3 text-lg">
                      🚨 IMMEDIATE ACTIONS (Do this NOW)
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {scenario.immediateActions.map((action, actionIndex) => (
                        <li key={actionIndex} className="font-medium">{action}</li>
                      ))}
                    </ol>
                  </div>

                  <Separator />

                  {/* Follow-up Actions */}
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-3 text-lg">
                      📋 Follow-up Actions (Next 24-48 hours)
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {scenario.followUpActions.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <div className="font-semibold text-gray-900">{contact.name}</div>
                        {contact.phone !== "N/A" && (
                          <div className="text-blue-600 font-mono text-lg">{contact.phone}</div>
                        )}
                        {contact.website !== "N/A" && (
                          <div className="text-sm text-gray-600">{contact.website}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prevention Reminder */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prevention is Better Than Recovery
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            While these emergency procedures can help minimize damage, the best approach is prevention. 
            Review our security guides and implement protective measures before incidents occur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/prevention">View Prevention Methods</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/quiz">Test Your Knowledge</a>
            </Button>
          </div>
        </div>

        {/* General Emergency Tips */}
        <div className="mt-16">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                💡 General Emergency Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Stay Calm:</strong> Panic can lead to poor decisions that make situations worse</li>
                <li><strong>Document Everything:</strong> Take screenshots, save emails, record details</li>
                <li><strong>Don't Pay Ransoms:</strong> There's no guarantee you'll get your data back</li>
                <li><strong>Preserve Evidence:</strong> Don't delete anything that might help investigations</li>
                <li><strong>Seek Professional Help:</strong> When in doubt, contact cybersecurity professionals</li>
                <li><strong>Learn from Incidents:</strong> Use emergencies as learning opportunities to prevent future occurrences</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}