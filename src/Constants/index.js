import * as yup  from 'yup'   

//initial values
export const Login_initial_Value={
    username:'',
    password:'',
}

export const System_User_initial_Value={
    id:'',
    username:'',
    password:'', 
}

export const Emp_Profile_Pic_Initial=
{
    empfile:null,
    id:'',
    type:'pic',
    Picture_Type:'',
    Descreption:''
}
export const Emp_Document_Pic_Initial=
{
    empfile:null,
    id:'',
    type:'doc',
    Document_Type:'',
    Descreption:''
}
export const User_Basic_Info_initial_Value={
   
    Employee_Id:'',
    Employee_First_Name:'',
    Employee_Last_Name:'',
    Employee_Grand_Father:'',
    Employee_Date_Of_Birth:'',
    Employee_Phone_Number:'',
    Employee_City:'',
    Employee_Sub_City:'',
    Employee_Kebele:'',
    Employee_Role:'',
    Employee_Date_Of_Employement:'',
    Employee_Salary:0,
    Employee_Phone_Number2:'',
    Emp_Account_Number:'',
    Bank_Name:'',
    emp_sex:'',
    TinNumber:'',
}

export const User_Basic_Info_Update_initial_Value={
    Employee_Id:'',
    Employee_First_Name:'',
    Employee_Last_Name:'',
    Employee_Grand_Father:'',
    Employee_Date_Of_Birth:'',
    Employee_Phone_Number:'',
    Employee_City:'',
    Employee_Sub_City:'',
    Employee_Kebele:'',
    Employee_Role:'',
    Employee_Date_Of_Employement:'',
    Employee_Salary:0,
    Employee_Phone_Number2:'',
    Emp_Account_Number:'',
    Bank_Name:'',
    emp_sex:'',
    TinNumber:'',
}
export const add_role_initial_value={
    role:''
}

export const Add_Representative_Initil={
    Represntative_FName:'',
    Represntative_LName:'',
    Represntative_GFName:'',
    Relation:'',
    Represntative_Phone_Number:'',
    // Represntative_City:'',
    // Represntative_Sub_City:'',
    // Represntative_Kebele:'',
   
    // Represntative_Phone_Number2:'',
    // Date_Of_Birth:'',
    // Represntative_Org:'',
    // Represntative_Job_Position:'',
    // Represntative_Tin:'',
    // Salary:'',
    // Organization_Phone_Number:'',
    // Organization_Phone_Number2:'',
    // Org_Addres:'',
    // Relation:'',
    // TinNumber:''
}

export const Add_Rest_Date_Initial=
{
    user_id:'',
    rest_date:'',
    registred_date:''
}
//end of initila values

//validation 
const today = new Date();
const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

export const Add_Rest_Date_Validation=yup.object().shape
({
    rest_date:yup
        .date()
        .required('የእረፍት ቀን አልተሞላም !!!')
})

export const Login_Validation=yup.object().shape({
    username:yup.string().required(' empty user name'),
    password:yup.string().required('password is empty')
})

export const addRep_Validation=yup.object().shape({
    Represntative_LName:yup
    .string()
    .required('የሠራተኛው ዋስ የአባት ስም አልተሞላም !!!'),
    Represntative_FName:yup
    .string()
    .required('የሠራተኛው ዋስ  ስም አልተሞላም !!!'),
    Represntative_GFName:yup
    .string()
    .required('የሠራተኛው ዋስ የአያት ስም አልተሞላም !!!'),
    Relation:yup
    .string()
    .required('ከሠራተኛው ጋር ያለው ዝምድና አልተሞላም '),
    Represntative_City:yup
    .string()
    .required(' የሠራተኛ ዋስ ከተማ አልተሞላም '),
    Represntative_Sub_City:yup
    .string()
    .required('የሠራተኛ ዋስ ክፍለ ከተማ አልተሞላም !!!'),
    Represntative_Kebele:yup.string().required('የሠራተኛው ዋስ ቀበሌ አልተሞላም !!!'),
    Represntative_Phone_Number:yup
        .string()
        .required('የሠራተኛው ዋስ ስልክ ቁጥር አልተሞላም !!!')
        .matches(/^[0-9,+]+$/, 'ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን እና "+" ብቻ ነው !!!')
        .min(10,'ስልክ ቁጥር ቢያንስ 10 ቁጥሮችን መያዝ አለበት !!!')
        .typeError('ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን ብቻ ነው !!!'),
    Represntative_Phone_Number2: yup
        .string()
        .matches(/^[0-9,+]+$/, 'ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን እና "+" ብቻ ነው')
        .min(10,'ስልክ ቁጥር ቢያንስ 10 ቁጥሮችን መያዝ አለበት !!!')
        .typeError('ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን ብቻ ነው !!!'),
    Date_Of_Birth:yup
        .date()
        .required('የሠራተኛው ዋስ  የልደት ቀን ስም አልተሞላም !!!')
        .max(minDate,'የሠራተኛው ዋስ እድሜ ከ25 ዓመት በታች መሆን አይችልም !!!'), 
    Represntative_Org:yup
        .string()
        .required('የሠራተኛው ዋስ የሚሠራበት መስሪያ ቤት አልተሞላም !!!'),
    Represntative_Job_Position:yup
        .string().
        required('የሠራተኛው ዋስ የሥራ ሃላፊነት አልተሞላም !!!'),
    Salary:yup   
        .number()
        .required(' የሠራተኛው ዋስ ደሞዝ አልተሞላም !!!')
        .typeError('ደሞዝ ለቁጥር ውጪ መያዝ አይችልም !!!')
        .min(500,' ደሞዝ ከ3500 ብር ማነስ አይችልም !!! '),
    Organization_Phone_Number:yup
        .string()
        .required('የሠራተኛው ዋስ መስሪያ ቤት ስልክ ቁጥር አልተሞላም !!!')
        .matches(/^[0-9,+]+$/, 'ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን እና "+" ብቻ ነው')
        .min(10,'ስልክ ቁጥር ቢያንስ 10 ቁጥሮችን መያዝ አለበት !!!')
        .typeError('ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን ብቻ ነው !!!'),
    Represntative_Phone_Number2:yup
        .string()
        .matches(/^[0-9,+]+$/, 'ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን እና "+" ብቻ ነው')
        .min(10,'ስልክ ቁጥር ቢያንስ 10 ቁጥሮችን መያዝ አለበት !!!')
        .typeError('ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን ብቻ ነው !!!'),
    Org_Addres:yup
        .string()
        .required(' የሠራተኛው ዋስ መስሪያ ቤት አድራሻ አልተሞላም !!!'),
    Represntative_Tin:yup
        .number()
        .required('የሠራተኛው ዋስ TIN አልተሞላም !!!')
        .typeError('ማስገባት የሚፈቀደው ቁጥር ብቻ ነው !!!'), 
    Expereance:yup
        .number()
        .required('የሠራተኛው የሥራ ልምድ አልተሞላም !!!')
        .typeError('ማስገባት የሚቻለው ቁጥር ብቻ ነው !!!')
})
export const add_role_Validation=yup.object().shape({
    role:yup.string().required(' የሥራ ዘርፍ አልተሞላም !!!!'),
})

export const User_Basic_Info_Validation=yup.object().shape({
    Employee_Id:yup
        .string()
        .required( 'የሠራተኛ መለያ ኮድ አልተሞላም !!! ')
        .length(7,' የሠራተኛው መለያ ኮድ የፊደል ብዛት የግድ 7 መሆን አለበት !!!'),
    Employee_First_Name:yup
        .string()
        .required('የሠራተኛው ስም አልተሞላም !!!'),
    Employee_Last_Name:yup 
        .string()
        .required('የሠራተኛው የአባት ስም ስም አልተሞላም !!!'),
    Employee_Grand_Father:yup
        .string()
        .required('የሠራተኛው የአያት ስም  አልተሞላም !!!'),
    Employee_Date_Of_Birth:yup
        .date()
        .required('የሠራተኛው የልደት ቀን ስም አልተሞላም !!!')
        .max(minDate,'የሠራተኛው እድሜ ከ18 ዓመት በታች መሆን አይችልም !!!'),
    Employee_Phone_Number:yup
        .string()
        .matches(/^[0-9,+]+$/, 'ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን እና "+" ብቻ ነው !!!')
        .min(10,'ስልክ ቁጥር ቢያንስ 10 ቁጥሮችን መያዝ አለበት !!!')
        .required('የሠራተኛው ስልክ ቁጥር አልተሞላም !!!')
        .typeError('ስልክ ቁጥር መያዝ የሚችለው ቁጥሮችን ብቻ ነው !!!'),
    Employee_City:yup.string().required(' የሠራተኛው ከተማ አልተሞላም !!! '),
    Employee_Sub_City:yup.string().required('የሠራተኛው ክ/ከተማ አልተሞላም !!!'),
    Employee_Kebele:yup.string().required(' የሠራተኛው ቀበሌ አልተሞላም '),
    Employee_Role:yup.string().required(' የሠራተኛው የሠራ ሃላፊነት አልተሞላም !!! '),
    Employee_Date_Of_Employement:yup.date().required('Required Fild').max(today,'over'),
    Employee_Salary:yup
        .number()
        .required(' የሠራተኛው ደሞዝ አልተሞላም !!!')
        .min(500,' ደሞዝ ከ500 ብር ማነስ አይችልም !!! '),
    Emp_Account_Number:yup
        .string()
        .min(3,'የባንክ አካውንት ቢያንስ ከ3 ማነስ አይችለም !!!')
        .required('የሠራተኛው የባንክ አካውንት ቁጥር አልተሞላም !!!'),
    Bank_Name:yup
         .string()
         .min(2,'የባንክ ስም ቢያንስ ከ2 ማነስ አይችለም !!!')
        .required('ሠራተኛው የሚጠቀመው ባንክ አልተሞላም !!!'),
    emp_sex:yup
        .string()
        .required('የሠራተኛው ፆታ አልተሞላም !!!'),
    TinNumber:yup
        .string()
        .length(10,' TIN ግዴታ 10 ቁጥሮችን መያዝ አለበት !!!')
        .matches(/^[0-9]+$/, 'TIN መያዝ የሚችለው ቁጥሮችን ብቻ ነው !!!')
        .required('የሠራተኛው TIN አልተሞላም !!!'),
})

export const Add_Profile_Validation=yup.object().shape({   
    empfile: yup.mixed()
    .required('የሠራተኛው ፎቶ አልተሞላም !!!')
    .test('is-file-an-image', 'ማስገባት የሚቻለው ፎቶ ብቻ ነው !!!', (value) => {
      if (value) {
        return value.type.startsWith('image/');
      }
      return false;
    }), 
    Picture_Type:yup
        .string()
        .required('picture type requredd'),
    Descreption:yup 
        .string() 

})
export const Add_Document_Validation=yup.object().shape({   
    empfile: yup.mixed()
    .required('የሠራተኛው ፋይል አልተመረጠም !!!')
    .test('is-file-an-pdf', 'ማስገባት የሚቻለው pdf ብቻ ነው !!!', (value) => {
      if (value) {
        return value.type.startsWith('application/pdf');
      }
      return false;
    }), 
    Document_Type:yup
    .string()
    .required('picture type requredd'),
    Descreption:yup 
    .string() 
})
export const User_Basic_Info_Update_Validation=yup.object().shape({

    Employee_First_Name:yup
        .string(),
    Employee_Last_Name:yup 
        .string(),  
})
export const System_User_Validation=yup.object().shape({
    id:yup.string().required('user is is empty'),
    username:yup.string().required(' empty user name'),
    password:yup.string().required('password is empty'), 
})
export const System_Add=yup.object().shape({
    username:yup.string().required(' empty user name'),
    password:yup.string().required('password is empty'),

})
//end of validation

// navigation
export const Admin_navLinks = [
    { link: "worker_manegement", text: "ሠራተኛ መቆጣጠሪያ" },
    { link: "input_exp", text: "ገቢና ወጪ መቆጣጠሪያ" },
    { link: "property_manegement", text: "ንብረት መቆጣጠሪያ" },
    { link: "file_manegement", text: "የፋይል መቆጣጠሪያ" },
    { link: "report_generation", text: "Generate Report" },
  
];
//end of navigation

//function
// calculate date
        export const Calculate_Date=(date)=>
        {
         const D=new Date()
          let nextyear = new Date(date)
          nextyear.setFullYear((nextyear.getFullYear()+1))
          const differenceInTime = nextyear.getTime() -D.getTime();
          const remainingDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))
          return {nextyear,remainingDays}
        }
// end of calculate date
// calculate date
export const Calculate_Exeperiance=(date)=>
    {
     const D=new Date()
      let Emp_Date = new Date(date)
     let exp=D.getFullYear()-Emp_Date.getFullYear()
      return exp
    }
// end of calculate date
//end of functions 
