import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack, Textarea, Select, useToast, Heading, Progress, Flex } from "@chakra-ui/react";

const ApplicationForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    education: "",
    experience: "",
    skills: "",
    coverLetter: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (Object.values(formData).some((field) => field === "")) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Submit form data
    console.log(formData);
    toast({
      title: "Success",
      description: "Application submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <Progress value={(step / 3) * 100} mb={4} />
      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          {step === 1 && (
            <Box>
              <Heading as="h2" size="lg" mb={4}>Hvem er med</Heading>
              <VStack spacing={4}>
                <HStack spacing={4} width="100%">
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} />
                  </FormControl>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </FormControl>
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input name="address" value={formData.address} onChange={handleChange} />
                </FormControl>
                <HStack spacing={4} width="100%">
                  <FormControl id="city" isRequired>
                    <FormLabel>City</FormLabel>
                    <Input name="city" value={formData.city} onChange={handleChange} />
                  </FormControl>
                  <FormControl id="state" isRequired>
                    <FormLabel>State</FormLabel>
                    <Input name="state" value={formData.state} onChange={handleChange} />
                  </FormControl>
                </HStack>
                <HStack spacing={4} width="100%">
                  <FormControl id="zip" isRequired>
                    <FormLabel>Zip Code</FormLabel>
                    <Input name="zip" value={formData.zip} onChange={handleChange} />
                  </FormControl>
                  <FormControl id="country" isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input name="country" value={formData.country} onChange={handleChange} />
                  </FormControl>
                </HStack>
              </VStack>
            </Box>
          )}

          {step === 2 && (
            <Box>
              <Heading as="h2" size="lg" mb={4}>Prosjektbeskrivelse</Heading>
              <VStack spacing={4}>
                <FormControl id="education" isRequired>
                  <FormLabel>Education</FormLabel>
                  <Select name="education" value={formData.education} onChange={handleChange}>
                    <option value="">Select highest level of education</option>
                    <option value="highSchool">High School</option>
                    <option value="associate">Associate Degree</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="doctorate">Doctorate</option>
                  </Select>
                </FormControl>
                <FormControl id="experience" isRequired>
                  <FormLabel>Experience</FormLabel>
                  <Textarea name="experience" value={formData.experience} onChange={handleChange} />
                </FormControl>
                <FormControl id="skills" isRequired>
                  <FormLabel>Skills</FormLabel>
                  <Textarea name="skills" value={formData.skills} onChange={handleChange} />
                </FormControl>
              </VStack>
            </Box>
          )}

          {step === 3 && (
            <Box>
              <Heading as="h2" size="lg" mb={4}>Plan og budsjett</Heading>
              <VStack spacing={4}>
                <FormControl id="coverLetter" isRequired>
                  <FormLabel>Cover Letter</FormLabel>
                  <Textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} />
                </FormControl>
              </VStack>
            </Box>
          )}

          <Flex justify="space-between" width="100%">
            {step > 1 && (
              <Button onClick={prevStep} colorScheme="blue">
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={nextStep} colorScheme="blue">
                Next
              </Button>
            ) : (
              <Button type="submit" colorScheme="blue">
                Submit Application
              </Button>
            )}
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default ApplicationForm;