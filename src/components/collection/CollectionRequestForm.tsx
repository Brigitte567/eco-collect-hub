
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  bin_id: z.string().min(1, { message: "Bin ID is required" }),
  notes: z.string().optional(),
  address: z.string().min(5, { message: "Please enter a valid address" }),
});

type CollectionRequestFormProps = {
  editMode?: boolean;
  initialData?: z.infer<typeof formSchema> & { id?: string };
};

const CollectionRequestForm = ({ editMode = false, initialData }: CollectionRequestFormProps) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      bin_id: "",
      notes: "",
      address: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real app, this would call the API endpoint
      console.log("Collection request data:", values);
      
      // For now, we'll simulate a successful submission
      toast.success(
        editMode 
          ? "Collection request updated successfully!"
          : "Collection request submitted successfully!"
      );
      
      // Redirect to a list of collection requests
      navigate('/requests');
    } catch (error) {
      console.error("Error submitting collection request:", error);
      toast.error("Failed to submit collection request. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">
        {editMode ? "Edit Collection Request" : "Request Waste Collection"}
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="bin_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bin ID</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your bin ID" {...field} />
                </FormControl>
                <FormDescription>
                  This is the ID of the waste bin you want collected.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Collection Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the collection address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please provide any special instructions or notes for collection" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/requests')}
            >
              Cancel
            </Button>
            <Button type="submit">
              {editMode ? "Update Request" : "Submit Request"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CollectionRequestForm;
