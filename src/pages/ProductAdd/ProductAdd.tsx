import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { passwordRule } from "../../utils/validation/customValidationRules";
import FormikInput from "../../components/FormikInput/FormikInput";
import FormikSelect from "../../components/FormikSelect/FormikSelect";

type Props = {};

interface ProductAddForm {
  title: string;
  description: string;
  price: number;
  stock: number;
  colorId: number;
}

const ProductAdd = (props: Props) => {
  const initialValues: ProductAddForm = {
    title: "",
    description: "",
    price: 0,
    stock: 0,
    colorId: 0,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("The product name field cannot be left blank!")
      .min(2)
      .max(50)
      .test(
        "is-strong",
        "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
        passwordRule
      ),
    description: Yup.string()
      .required("The product description field cannot be left blank!")
      .min(5)
      .max(300),
    price: Yup.number().min(0, "Please enter a suitable price information!"),
    stock: Yup.number()
      .min(0, "Please enter a suitable price information!")
      .integer(),
    colorId: Yup.number().min(0),
  });

  return (
    <div className="container">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="row">
            <div className="col-6 mx-auto">
              {/* Form Section: Product Name */}
              <FormikInput
                label="Product Name"
                name="title"
                placeholder="Please write the product name!"
              ></FormikInput>

              {/* Form Section: Product Description */}
              <FormikInput
                label="Description"
                name="description"
                placeholder="Please write the product description!"
              ></FormikInput>

              {/* Form Section: Price */}
              <FormikInput
                label="Price"
                name="price"
                placeholder="Please write the product price!"
              ></FormikInput>

              {/* Form Section: Stock */}
              <FormikInput
                label="Stock"
                name="stock"
                placeholder="Please write the product stock condition!"
              ></FormikInput>

              {/* Form Section: Color */}
              <FormikSelect
                label="Color"
                name="colorId"
                options={[
                  { value: 0, label: "Choose a Color"},
                  { value: 1, label: "Black"},
                  { value: 2, label: "Blue" },
                  { value: 3, label: "White" }
                ]}
              ></FormikSelect>

              {/* Form Section: Add Button */}
              <button className="btn btn-success mt-3" type="submit">
                Add
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductAdd;
