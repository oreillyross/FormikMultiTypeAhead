import React from "react";
import "./styles.css";
import { Formik, Form } from "formik";
import { Button, Input } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import * as Yup from "yup";

const tagFormSchema = Yup.object().shape({
  tags: Yup.array().of(
    Yup.object().shape({
      value: Yup.string(),
      label: Yup.string()
    })
  ),
  title: Yup.string().required()
});

const tagOptions = [
  { value: "1", label: "One" , someOtherField: ''},
  { value: "2", label: "Two" },
  { value: "3", label: "Three" }
];

const initialValues = {
  tags: [],
  title: ''
};

export default function App() {
  return (
    <div className="App">
      <Formik
        
        onSubmit={values => {
          
        }}
        initialValues={initialValues}
        validationSchema={tagFormSchema}
      >
        {props => (
          <>
            <div>{JSON.stringify(props, null, 2)}</div>
            <Form>
              <h3>Multi tags </h3>
              <Input name='title' onChange={props.handleChange} value={props.values.title} placeholder='type a title'/>
              <div style={{color: 'white'}}>.</div>
              <Typeahead
                onChange={selected => {
                  props.setFieldValue("tags", selected);
                }}
                id="tags"
                name='tags'
                placeholder='type tags here...'
                options={tagOptions}
                multiple
              />
              
              <Button block type="submit" outline color="primary">
                submit
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
