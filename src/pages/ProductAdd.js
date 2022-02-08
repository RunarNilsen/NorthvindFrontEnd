import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import { Button } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
  
    const initialValues = {productName:"", unitPrice:10}
    // api schema dogrulamasi yapmak icin yup u kullaniriz
    const schema = Yup.object({
        productName: Yup.string().required("Urun adi zorunlu"),
        unitPrice : Yup.number().required("Urun fiyati zorunludur")
    }) 

    return (
    <div>
        <Formik
        initialValues= {initialValues}
        validationSchema = {schema}
        onSubmit={(values)=>{
            console.log(values) // bu values degerleri form icindeki degerleri tutar. Button daki submit ile bu degerleri valuesa atar
        }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name= "productName" placeholder='Urun Adi'/>
                <KodlamaIoTextInput name= "unitPrice" placeholder='Urun Fiyati'/> 
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    </div>
  )
}
