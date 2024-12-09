// "use client";
// import { useState } from "react";
// import { notification } from "antd";

// const initialValues = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const useForm = (validate) => {
//   const [formState, setFormState] = useState({
//     values: { ...initialValues },
//     errors: { ...initialValues },
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const values = formState.values;
//     const errors = validate(values);
//     setFormState((prevState) => ({ ...prevState, errors }));

//     const url = ""; // Fill in your API URL here

//     try {
//       if (Object.values(errors).every((error) => error === "")) {
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         if (!response.ok) {
//           notification["error"]({
//             message: "Error",
//             description:
//               "There was an error sending your message, please try again later.",
//           });
//         } else {
//           event.target.reset();
//           setFormState(() => ({
//             values: { ...initialValues },
//             errors: { ...initialValues },
//           }));

//           notification["success"]({
//             message: "Success",
//             description: "Your message has been sent!",
//           });
//         }
//       }
//     } catch (error) {
//       notification["error"]({
//         message: "Error",
//         description: "Failed to submit form. Please try again later.",
//       });
//     }
//   };

//   const handleChange = (event) => {
//     event.persist();
//     const { name, value } = event.target;
//     setFormState((prevState) => ({
//       ...prevState,
//       values: {
//         ...prevState.values,
//         [name]: value,
//       },
//       errors: {
//         ...prevState.errors,
//         [name]: "",
//       },
//     }));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values: formState.values,
//     errors: formState.errors,
//   };
// };

"use client";

import { useState } from "react";
import { notification } from "antd";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate) => {
  const [formState, setFormState] = useState({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const url = "/api/send-email"; // The API route for sending emails

    try {
      // Check if there are no validation errors
      if (Object.values(errors).every((error) => error === "")) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values), // Send the form data to the API
        });

        // Handle response status
        if (!response.ok) {
          notification["error"]({
            message: "Error",
            description: "There was an error sending your message. Please try again later.",
          });
        } else {
          // Reset the form and notify success
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));

          notification["success"]({
            message: "Success",
            description: "Your message has been sent!",
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "Failed to submit the form. Please try again later.",
      });
    }
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};