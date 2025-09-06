import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResourcesPage() {
  const downloadableResources = [
    {
      title: "Cybersecurity Checklist",
      description: "A comprehensive checklist for personal and small business cybersecurity.",
      category: "Checklist",
      format: "PDF",
      pages: "2 pages",
      includes: [
        "Password security checklist",
        "Software update reminders",
        "Network security steps",
        "Emergency contact information"
      ]
    },
    {
      title: "Phishing Identification Guide",
      description: "Visual guide to help identify and avoid phishing attempts.",
      category: "Visual Guide",
      format: "PDF", 
      pages: "4 pages",
      includes: [
        "Real phishing examples",
        "Warning signs to look for",
        "Step-by-step verification process",
        "Reporting procedures"
      ]
    },
    {
      title: "Password Manager Setup Guide",
      description: "Step-by-step instructions for setting up and using password managers.",
      category: "Setup Guide",
      format: "PDF",
      pages: "3 pages", 
      includes: [
        "Comparison of popular password managers",
        "Installation and setup instructions",
        "Best practices for master passwords",
        "Two-factor authentication setup"
      ]
    },
    {
      title: "Home Network Security Guide",
      description: "Secure your home Wi-Fi network and connected devices.",
      category: "Setup Guide",
      format: "PDF",
      pages: "3 pages",
      includes: [
        "Router security configuration",
        "Wi-Fi encryption settings",
        "IoT device security tips",
        "Network monitoring recommendations"
      ]
    },
    {
      title: "Incident Response Flowchart",
      description: "Quick reference flowchart for cybersecurity incidents.",
      category: "Emergency",
      format: "PDF",
      pages: "1 page",
      includes: [
        "Step-by-step incident response",
        "Emergency contact numbers",
        "Evidence preservation steps",
        "Recovery procedures"
      ]
    },
    {
      title: "Mobile Security Checklist",
      description: "Essential security measures for smartphones and tablets.",
      category: "Checklist",
      format: "PDF",
      pages: "2 pages",
      includes: [
        "App security settings",
        "Privacy configuration steps",
        "Backup and recovery setup",
        "Lost device procedures"
      ]
    }
  ];

  const onlineTools = [
    {
      title: "Password Strength Checker",
      description: "Test how strong your passwords are and get improvement suggestions.",
      url: "#",
      category: "Security Tool",
      features: [
        "Real-time password analysis",
        "Strength scoring system",
        "Improvement recommendations",
        "No password storage or transmission"
      ]
    },
    {
      title: "Phishing Email Simulator",
      description: "Practice identifying phishing emails in a safe environment.",
      url: "#",
      category: "Training Tool",
      features: [
        "Realistic phishing examples",
        "Immediate feedback",
        "Progressive difficulty levels",
        "Educational explanations"
      ]
    },
    {
      title: "Security Assessment Quiz",
      description: "Comprehensive assessment of your current security posture.",
      url: "/quiz",
      category: "Assessment",
      features: [
        "Personalized recommendations",
        "Progress tracking",
        "Knowledge gap identification",
        "Detailed explanations"
      ]
    },
    {
      title: "Breach Notification Checker",
      description: "Check if your accounts have been involved in known data breaches.",
      url: "#",
      category: "Monitoring Tool",
      features: [
        "Multiple email address checking",
        "Historical breach database",
        "Actionable remediation steps",
        "Privacy-focused design"
      ]
    }
  ];

  const externalResources = [
    {
      title: "National Cybersecurity Alliance",
      description: "Leading nonprofit organization promoting cybersecurity awareness.",
      url: "https://staysafeonline.org",
      category: "Organization"
    },
    {
      title: "CISA Cybersecurity Tips",
      description: "Official cybersecurity guidance from the U.S. government.",
      url: "https://www.cisa.gov/news-events/news/cybersecurity-tips",
      category: "Government"
    },
    {
      title: "KnowBe4 Security Awareness Training",
      description: "Free security awareness training resources and materials.",
      url: "https://www.knowbe4.com/free-phishing-security-test",
      category: "Training"
    },
    {
      title: "Have I Been Pwned",
      description: "Check if your email addresses have been compromised in data breaches.",
      url: "https://haveibeenpwned.com",
      category: "Security Tool"
    },
    {
      title: "Mozilla Privacy Not Included",
      description: "Privacy and security guide for popular consumer products.",
      url: "https://foundation.mozilla.org/privacynotincluded/",
      category: "Privacy Guide"
    },
    {
      title: "Electronic Frontier Foundation",
      description: "Digital rights organization with security and privacy resources.",
      url: "https://www.eff.org/deeplinks/blog/surveillance-self-defense",
      category: "Privacy Rights"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download practical guides, use interactive tools, and explore additional resources 
            to strengthen your cybersecurity knowledge and practices.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="downloads" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="downloads">Downloadable Guides</TabsTrigger>
            <TabsTrigger value="tools">Online Tools</TabsTrigger>
            <TabsTrigger value="external">External Resources</TabsTrigger>
          </TabsList>

          {/* Downloadable Resources */}
          <TabsContent value="downloads" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {resource.title}
                      </CardTitle>
                      <Badge variant="outline">{resource.category}</Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {resource.description}
                    </CardDescription>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary">{resource.format}</Badge>
                      <Badge variant="secondary">{resource.pages}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {resource.includes.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" variant="outline">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Online Tools */}
          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onlineTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {tool.title}
                      </CardTitle>
                      <Badge variant="default">{tool.category}</Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <a href={tool.url}>Use Tool</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* External Resources */}
          <TabsContent value="external" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {resource.description}
                    </CardDescription>
                    <Badge variant="outline" className="w-fit mt-2">
                      {resource.category}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <Button asChild className="w-full" variant="outline">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Access Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Access Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center">
              <a href="/emergency">
                <div className="w-8 h-8 bg-red-500 rounded-full mb-2"></div>
                <span>Emergency Response</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center">
              <a href="/quiz">
                <div className="w-8 h-8 bg-green-500 rounded-full mb-2"></div>
                <span>Security Quiz</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center">
              <a href="/threats">
                <div className="w-8 h-8 bg-yellow-500 rounded-full mb-2"></div>
                <span>Threat Information</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center">
              <a href="/prevention">
                <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
                <span>Prevention Guide</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Community Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Share Knowledge, Stay Safe
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Cybersecurity is a community effort. Share these resources with family, friends, 
            and colleagues to help create a safer digital environment for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Share Campaign
            </Button>
            <Button variant="outline">
              Report Security Issues
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}