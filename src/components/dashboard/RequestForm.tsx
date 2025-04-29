
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const RequestForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Collection request submitted successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Collection</CardTitle>
        <CardDescription>Fill out the form to schedule a waste collection</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="address">Collection Address</Label>
              <Input id="address" placeholder="Enter your address" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select defaultValue="morning">
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="type">Waste Type</Label>
              <Select defaultValue="general">
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select waste type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Waste</SelectItem>
                  <SelectItem value="recyclable">Recyclable</SelectItem>
                  <SelectItem value="organic">Organic</SelectItem>
                  <SelectItem value="hazardous">Hazardous</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Add any special instructions or notes..." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>Submit Request</Button>
      </CardFooter>
    </Card>
  );
};

export default RequestForm;
