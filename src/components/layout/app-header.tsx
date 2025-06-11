
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon, Edit3, ListChecks } from 'lucide-react'; // Changed MessageSquare to ListChecks

export default function AppHeader() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-headline text-primary hover:opacity-80 transition-opacity">
          Shrimali Connect
        </Link>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/">
            <Button variant="ghost" asChild>
              <span>
                <HomeIcon className="h-5 w-5 sm:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </span>
            </Button>
          </Link>
          <Link href="/"> {/* Changed from /membership to / for the main form */}
            <Button variant="ghost" asChild>
              <span>
                <Edit3 className="h-5 w-5 sm:mr-2" />
                 <span className="hidden sm:inline">Survey Form</span>
              </span>
            </Button>
          </Link>
          <Link href="/member-list"> {/* New link for Member List */}
            <Button variant="ghost" asChild>
              <span>
                <ListChecks className="h-5 w-5 sm:mr-2" />
                <span className="hidden sm:inline">Member List</span>
              </span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
