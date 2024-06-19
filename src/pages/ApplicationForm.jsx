import { useState } from "react";
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack, Textarea, Select, useToast, Heading, Progress, Flex, List, ListItem, Link } from "@chakra-ui/react";

const labelStyle = {
    fontFamily: "IBM Plex Mono, sans-serif",
    fontSize: "12px",
};

const headingStyle = {
    fontFamily: "PP Neue Montreal VF, sans-serif",
    fontSize: "40px",
};

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
            <Box display="flex">
                <Box width="20%" p={4} borderRight="1px solid #e2e8f0">
                    <Heading as="h3" size="md" mb={4}>Overview</Heading>
                    <List spacing={3}>
                        <ListItem>
                            <Link as={ScrollLink} to="section1" smooth={true} duration={500} offset={-50}>Hvem er med</Link>
                        </ListItem>
                        <ListItem>
                            <Link as={ScrollLink} to="section2" smooth={true} duration={500} offset={-50}>Prosjektbeskrivelse</Link>
                        </ListItem>
                        <ListItem>
                            <Link as={ScrollLink} to="section3" smooth={true} duration={500} offset={-50}>Plan og budsjett</Link>
                        </ListItem>
                    </List>
                </Box>
                <Box width="80%" p={8}>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={8} align="stretch">
                            {step === 1 && (
                                <Element name="section1">
                                    <Box>
                                        <Heading as="h2" size="lg" mb={4} style={headingStyle}>Hvem er med</Heading>
                                        <VStack spacing={4}>
                                            <Box>
                                                <Heading as="h3" size="md" mb={2}>Prosjektansvarlig organisasjon</Heading>
                                                <FormControl id="prosjektansvarligOrganisasjon" isRequired>
                                                    <FormLabel style={labelStyle}>Prosjektansvarlig Organisasjon</FormLabel>
                                                    <Input name="prosjektansvarligOrganisasjon" value={formData.prosjektansvarligOrganisasjon} onChange={handleChange} />
                                                </FormControl>
                                            </Box>
                                            <Box>
                                                <Heading as="h3" size="md" mb={2}>Obligatoriske roller</Heading>
                                                <FormControl id="obligatoriskeRoller" isRequired>
                                                    <FormLabel style={labelStyle}>Obligatoriske Roller</FormLabel>
                                                    <Input name="obligatoriskeRoller" value={formData.obligatoriskeRoller} onChange={handleChange} />
                                                </FormControl>
                                            </Box>
                                            <Box>
                                                <Heading as="h3" size="md" mb={2}>Andre roller</Heading>
                                                <FormControl id="andreRoller" isRequired>
                                                    <FormLabel style={labelStyle}>Andre Roller</FormLabel>
                                                    <Input name="andreRoller" value={formData.andreRoller} onChange={handleChange} />
                                                </FormControl>
                                            </Box>
                                            <HStack spacing={4} width="100%">
                                                <FormControl id="firstName" isRequired>
                                                    <FormLabel style={labelStyle}>First Name</FormLabel>
                                                    <Input name="firstName" value={formData.firstName} onChange={handleChange} />
                                                </FormControl>
                                                <FormControl id="lastName" isRequired>
                                                    <FormLabel style={labelStyle}>Last Name</FormLabel>
                                                    <Input name="lastName" value={formData.lastName} onChange={handleChange} />
                                                </FormControl>
                                            </HStack>
                                            <FormControl id="email" isRequired>
                                                <FormLabel style={labelStyle}>Email</FormLabel>
                                                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                                            </FormControl>
                                            <FormControl id="phone" isRequired>
                                                <FormLabel style={labelStyle}>Phone</FormLabel>
                                                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                            </FormControl>
                                            <FormControl id="address" isRequired>
                                                <FormLabel style={labelStyle}>Address</FormLabel>
                                                <Input name="address" value={formData.address} onChange={handleChange} />
                                            </FormControl>
                                            <HStack spacing={4} width="100%">
                                                <FormControl id="city" isRequired>
                                                    <FormLabel style={labelStyle}>City</FormLabel>
                                                    <Input name="city" value={formData.city} onChange={handleChange} />
                                                </FormControl>
                                                <FormControl id="state" isRequired>
                                                    <FormLabel style={labelStyle}>State</FormLabel>
                                                    <Input name="state" value={formData.state} onChange={handleChange} />
                                                </FormControl>
                                            </HStack>
                                            <HStack spacing={4} width="100%">
                                                <FormControl id="zip" isRequired>
                                                    <FormLabel style={labelStyle}>Zip Code</FormLabel>
                                                    <Input name="zip" value={formData.zip} onChange={handleChange} />
                                                </FormControl>
                                                <FormControl id="country" isRequired>
                                                    <FormLabel style={labelStyle}>Country</FormLabel>
                                                    <Input name="country" value={formData.country} onChange={handleChange} />
                                                </FormControl>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </Element>
                            )}

                            {step === 2 && (
                                <Element name="section2">
                                    <Box>
                                        <Heading as="h2" size="lg" mb={4} style={headingStyle}>Prosjektbeskrivelse</Heading>
                                        <VStack spacing={4}>
                                            <FormControl id="education" isRequired>
                                                <FormLabel style={labelStyle}>Education</FormLabel>
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
                                                <FormLabel style={labelStyle}>Experience</FormLabel>
                                                <Textarea name="experience" value={formData.experience} onChange={handleChange} />
                                            </FormControl>
                                            <FormControl id="skills" isRequired>
                                                <FormLabel style={labelStyle}>Skills</FormLabel>
                                                <Textarea name="skills" value={formData.skills} onChange={handleChange} />
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Element>
                            )}

                            {step === 3 && (
                                <Element name="section3">
                                    <Box>
                                        <Heading as="h2" size="lg" mb={4} style={headingStyle}>Plan og budsjett</Heading>
                                        <VStack spacing={4}>
                                            <FormControl id="coverLetter" isRequired>
                                                <FormLabel style={labelStyle}>Cover Letter</FormLabel>
                                                <Textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} />
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Element>
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
            </Box>
        </Box>
    );
};

export default ApplicationForm;