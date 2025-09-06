import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const threatStats = [
    { label: "Phishing Emails", value: "3.4B", description: "sent daily worldwide" },
    { label: "Data Breaches", value: "1,001", description: "reported in 2023" },
    { label: "Ransomware Attacks", value: "493M", description: "attempts in 2022" },
    { label: "Password Attacks", value: "921", description: "attempts per second" }
  ];

  const features = [
    {
      title: "Identify Threats",
      description: "Learn to recognize phishing, malware, social engineering, and other common cyber threats.",
      href: "/threats",
      badge: "Essential"
    },
    {
      title: "Prevention Methods",
      description: "Discover proven strategies to protect yourself, from strong passwords to secure browsing.",
      href: "/prevention",
      badge: "Practical"
    },
    {
      title: "Test Your Knowledge",
      description: "Take our interactive quiz to assess your cybersecurity awareness and learn new tips.",
      href: "/quiz",
      badge: "Interactive"
    },
    {
      title: "Emergency Response",
      description: "Quick action guides for when you suspect a security breach or cyberattack.",
      href: "/emergency",
      badge: "Critical"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect Your
              <span className="text-blue-400"> Digital Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our cybersecurity awareness campaign and learn how to defend against common threats, 
              protect your personal information, and keep your community safe online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/threats">Explore Threats</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link href="/prevention">Learn Prevention</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Reality of Cyber Threats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Your Cybersecurity Journey
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Navigate through our comprehensive resources designed to educate, protect, and empower you in the digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    <Badge variant={feature.badge === "Critical" ? "destructive" : "default"}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={feature.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with our interactive quiz to assess your current knowledge, then dive deep into specific threat prevention strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quiz">Take Security Quiz</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/resources">Download Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}