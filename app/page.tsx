import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Syndicate</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern platform for managing your rotating savings and credit association
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 pt-8">
        <Card>
          <CardHeader>
            <CardTitle>Create Groups</CardTitle>
            <CardDescription>
              Start or join savings groups with people you trust
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Set contribution amounts</li>
              <li>Define payout schedules</li>
              <li>Invite members securely</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Track Contributions</CardTitle>
            <CardDescription>
              Keep track of all group activities and payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Payment reminders</li>
              <li>Contribution history</li>
              <li>Payout schedule</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secure Platform</CardTitle>
            <CardDescription>
              Built with security and transparency in mind
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>End-to-end encryption</li>
              <li>Transparent transactions</li>
              <li>Dispute resolution</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}