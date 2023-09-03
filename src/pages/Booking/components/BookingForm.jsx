import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../../hooks/useSubmit";
import Swal from "sweetalert2";

function BookingForm() {
  const { isLoading, response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: 1,
      occasion: ''
    },
    onSubmit: (values) => {
      submit('', values).then(() => { 
        Swal.fire({ 
          icon: "success", 
          text: "arrive 15 minutes before the reservation time" 
        }) 
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Something went wrong, please try again later!"
        })
      });
    },
    validationSchema: Yup.object({
      date: Yup.string('Select date').required(),
      time: Yup.string('time').required(),
      guests: Yup.number('Number of guests').min(1).max(10, "the limit of guests is 10").required(),
      occasion: Yup.string('occasion').required()
    }),
  });

  return (
    <VStack>
      <Heading as="h1" id="reserve-a-table-section">
        Reserve a table
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} width="30%">
            <FormControl w="100%" mb="20px" isInvalid={formik.errors.date || formik.touched.date}>
              <FormLabel fontSize="1.5rem" htmlFor="date">Select date</FormLabel>
              <Input
                w="100%"
                h="2rem"
                fontSize="1.2rem"
                borderRadius="5px"
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl w="100%" mb="20px">
              <FormLabel fontSize="1.5rem" htmlFor="time">Select time</FormLabel>
              <Select w="100%" h="2rem" fontSize="1.2rem" borderRadius="5px" id="time" name="time" onChange={formik.handleChange} value={formik.values.time}>
                <option value={null}>select date</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>                  
              </Select>
            </FormControl>
            <FormControl w="100%" mb="20px" isInvalid={formik.errors.guests || formik.touched.guests}>
              <FormLabel fontSize="1.5rem" htmlFor="guests">Number of guests</FormLabel>
              <Input
                w="100%" 
                h="2rem" 
                fontSize="1.2rem"
                borderRadius="5px"
                id="guests"
                name="guests"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.guests}
              />
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl w="100%" mb="20px">
            <FormLabel fontSize="1.5rem" htmlFor="occasion">occasion</FormLabel>
              <Select w="100%" h="2rem" fontSize="1.2rem" borderRadius="5px" id="occasion" name="occasion" onChange={formik.handleChange} value={formik.values.occasion}>
                <option value={null}>Select occassion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>                  
              </Select>
            </FormControl>
            <Button h="40px" w="25%" border="0" fontSize="1.1rem" fontWeight="bold" borderRadius="5px" backgroundColor="#f4ce14" type="submit" >
              {isLoading ? "Loading" : 'Submit'}
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default BookingForm;