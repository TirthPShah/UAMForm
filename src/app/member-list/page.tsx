// @/app/member-list/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ListChecks, Search } from 'lucide-react';
import type { MemberListData } from '@/lib/schemas';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - replace with actual data fetching
const initialMembers: MemberListData[] = [
  { id: '1', name: 'Manish Shrimali', address: '123 Vastrapur, Ahmedabad', mobile: '9876543210', surveyed: false },
  { id: '2', name: 'Priya Mehta', address: '456 Satellite, Ahmedabad', mobile: '9876543211', surveyed: true },
  { id: '3', name: 'Rajesh Shah', address: '789 Bodakdev, Ahmedabad', mobile: '9876543212', surveyed: false },
  { id: '4', name: 'Anita Patel', address: '101 Maninagar, Ahmedabad', mobile: '9876543213', surveyed: true },
  { id: '5', name: 'Vikram Desai', address: '202 Navrangpura, Ahmedabad', mobile: '9876543214', surveyed: false },
];

type SurveyFilter = 'all' | 'surveyed' | 'not-surveyed';

export default function MemberListPage() {
  const [members, setMembers] = useState<MemberListData[]>(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [surveyFilter, setSurveyFilter] = useState<SurveyFilter>('all');
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  const handleSurveyedChange = (id: string, checked: boolean) => {
    setMembers(prevMembers =>
      prevMembers.map(member =>
        member.id === id ? { ...member, surveyed: checked } : member
      )
    );
    console.log(`Member ${id} surveyed status changed to: ${checked}`);
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.mobile.includes(searchTerm);

    const matchesSurveyFilter = 
      surveyFilter === 'all' ||
      (surveyFilter === 'surveyed' && member.surveyed) ||
      (surveyFilter === 'not-surveyed' && !member.surveyed);

    return matchesSearch && matchesSurveyFilter;
  });

  if (!clientLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-background">
        <p>Loading member list...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <Card className="w-full max-w-4xl mx-auto shadow-2xl my-8 bg-card">
          <CardHeader className="bg-card">
            <div className="flex items-center space-x-3 mb-2">
              <ListChecks className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl font-headline">Member Survey List</CardTitle>
            </div>
            <CardDescription>
              Track survey completion for community members. Check the box once a member's survey is done.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-card">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, address, or mobile..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full bg-background"
                />
              </div>
              <Select
                value={surveyFilter}
                onValueChange={(value: SurveyFilter) => setSurveyFilter(value)}
              >
                <SelectTrigger className="w-[180px] bg-background">
                  <SelectValue placeholder="Filter by survey status" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="surveyed">Surveyed</SelectItem>
                  <SelectItem value="not-surveyed">Not Surveyed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border rounded-md bg-background">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="w-[50px] text-center">Surveyed</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead className="w-[150px]">Mobile Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.length > 0 ? (
                    filteredMembers.map((member) => (
                      <TableRow 
                        key={member.id} 
                        data-state={member.surveyed ? 'selected' : ''}
                        className="bg-background hover:bg-muted/50"
                      >
                        <TableCell className="text-center">
                          <Checkbox
                            id={`surveyed-${member.id}`}
                            checked={member.surveyed}
                            onCheckedChange={(checked : boolean) => handleSurveyedChange(member.id, !!checked)}
                            aria-label={`Mark ${member.name} as surveyed`}
                            className="bg-background"
                          />
                        </TableCell>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.address}</TableCell>
                        <TableCell>{member.mobile}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center text-muted-foreground bg-background">
                        No members found matching your search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            {filteredMembers.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                Showing {filteredMembers.length} of {members.length} members.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}