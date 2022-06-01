import * as Yup from  'yup'

const register = Yup.object({
firstName: Yup.string().required("This is required field!!"),
lastName: Yup.string().required("This is required field"),
email:Yup.string().required("This is required field"),
dob:Yup.string().required("This is required field"),
address:Yup.string().required("This is required field"),
password:Yup.string().required("This is required field"),
}
)
 export { register }